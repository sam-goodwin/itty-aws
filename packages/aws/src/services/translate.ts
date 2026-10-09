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
import { SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Translate",
  serviceShapeName: "AWSShineFrontendService_20170701",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "translate" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-07-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://translate-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://translate-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://translate.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://translate.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DetectedLanguageLowConfidenceException
  extends /*@__PURE__*/ S.TaggedError<DetectedLanguageLowConfidenceException>()(
    "DetectedLanguageLowConfidenceException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      DetectedLanguageCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidFilterException
  extends /*@__PURE__*/ S.TaggedError<InvalidFilterException>()(
    "InvalidFilterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValueException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValueException>()(
    "InvalidParameterValueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
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
export class TextSizeLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<TextSizeLimitExceededException>()(
    "TextSizeLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceArn: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedDisplayLanguageCodeException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedDisplayLanguageCodeException>()(
    "UnsupportedDisplayLanguageCodeException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      DisplayLanguageCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedLanguagePairException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedLanguagePairException>()(
    "UnsupportedLanguagePairException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      SourceLanguageCode: /*@__PURE__*/ S.optional(S.String),
      TargetLanguageCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ResourceName = string;
export type Description = string;
export type S3Uri = string;
export type ParallelDataFormat = "TSV" | "CSV" | "TMX" | (string & {});
export interface ParallelDataConfig {
  S3Uri?: string;
  Format?: ParallelDataFormat;
}
export type EncryptionKeyType = "KMS" | (string & {});
export type EncryptionKeyID = string;
export interface EncryptionKey {
  Type: EncryptionKeyType;
  Id: string;
}
export type ClientTokenString = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateParallelDataRequest {
  Name: string;
  Description?: string;
  ParallelDataConfig: ParallelDataConfig;
  EncryptionKey?: EncryptionKey;
  ClientToken: string;
  Tags?: Tag[];
}
export type ParallelDataStatus =
  | "CREATING"
  | "UPDATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | (string & {});
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
export interface DeleteTerminologyResponse {}
export type JobId = string;
export interface DescribeTextTranslationJobRequest {
  JobId: string;
}
export type JobName = string;
export type JobStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "COMPLETED_WITH_ERROR"
  | "FAILED"
  | "STOP_REQUESTED"
  | "STOPPED"
  | (string & {});
export interface JobDetails {
  TranslatedDocumentsCount?: number;
  DocumentsWithErrorsCount?: number;
  InputDocumentsCount?: number;
}
export type LanguageCodeString = string;
export type TargetLanguageCodeStringList = string[];
export type ResourceNameList = string[];
export type UnboundedLengthString = string;
export type ContentType = string;
export interface InputDataConfig {
  S3Uri: string;
  ContentType: string;
}
export interface OutputDataConfig {
  S3Uri: string;
  EncryptionKey?: EncryptionKey;
}
export type IamRoleArn = string;
export type Formality = "FORMAL" | "INFORMAL" | (string & {});
export type Profanity = "MASK" | (string & {});
export type Brevity = "ON" | (string & {});
export interface TranslationSettings {
  Formality?: Formality;
  Profanity?: Profanity;
  Brevity?: Brevity;
}
export interface TextTranslationJobProperties {
  JobId?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  JobDetails?: JobDetails;
  SourceLanguageCode?: string;
  TargetLanguageCodes?: string[];
  TerminologyNames?: string[];
  ParallelDataNames?: string[];
  Message?: string;
  SubmittedTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  DataAccessRoleArn?: string;
  Settings?: TranslationSettings;
}
export interface DescribeTextTranslationJobResponse {
  TextTranslationJobProperties?: TextTranslationJobProperties;
}
export interface GetParallelDataRequest {
  Name: string;
}
export type ParallelDataArn = string;
export type LanguageCodeStringList = string[];
export interface ParallelDataProperties {
  Name?: string;
  Arn?: string;
  Description?: string;
  Status?: ParallelDataStatus;
  SourceLanguageCode?: string;
  TargetLanguageCodes?: string[];
  ParallelDataConfig?: ParallelDataConfig;
  Message?: string;
  ImportedDataSize?: number;
  ImportedRecordCount?: number;
  FailedRecordCount?: number;
  SkippedRecordCount?: number;
  EncryptionKey?: EncryptionKey;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  LatestUpdateAttemptStatus?: ParallelDataStatus;
  LatestUpdateAttemptAt?: Date;
}
export interface ParallelDataDataLocation {
  RepositoryType: string;
  Location: string;
}
export interface GetParallelDataResponse {
  ParallelDataProperties?: ParallelDataProperties;
  DataLocation?: ParallelDataDataLocation;
  AuxiliaryDataLocation?: ParallelDataDataLocation;
  LatestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;
}
export type TerminologyDataFormat = "CSV" | "TMX" | "TSV" | (string & {});
export interface GetTerminologyRequest {
  Name: string;
  TerminologyDataFormat?: TerminologyDataFormat;
}
export type TerminologyArn = string;
export type Directionality = "UNI" | "MULTI" | (string & {});
export interface TerminologyProperties {
  Name?: string;
  Description?: string;
  Arn?: string;
  SourceLanguageCode?: string;
  TargetLanguageCodes?: string[];
  EncryptionKey?: EncryptionKey;
  SizeBytes?: number;
  TermCount?: number;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Directionality?: Directionality;
  Message?: string;
  SkippedTermCount?: number;
  Format?: TerminologyDataFormat;
}
export interface TerminologyDataLocation {
  RepositoryType: string;
  Location: string;
}
export interface GetTerminologyResponse {
  TerminologyProperties?: TerminologyProperties;
  TerminologyDataLocation?: TerminologyDataLocation;
  AuxiliaryDataLocation?: TerminologyDataLocation;
}
export type MergeStrategy = "OVERWRITE" | (string & {});
export type TerminologyFile = Uint8Array | redacted.Redacted<Uint8Array>;
export interface TerminologyData {
  File: Uint8Array | redacted.Redacted<Uint8Array>;
  Format: TerminologyDataFormat;
  Directionality?: Directionality;
}
export interface ImportTerminologyRequest {
  Name: string;
  MergeStrategy: MergeStrategy;
  Description?: string;
  TerminologyData: TerminologyData;
  EncryptionKey?: EncryptionKey;
  Tags?: Tag[];
}
export interface ImportTerminologyResponse {
  TerminologyProperties?: TerminologyProperties;
  AuxiliaryDataLocation?: TerminologyDataLocation;
}
export type DisplayLanguageCode =
  | "de"
  | "en"
  | "es"
  | "fr"
  | "it"
  | "ja"
  | "ko"
  | "pt"
  | "zh"
  | "zh-TW"
  | (string & {});
export type NextToken = string;
export type MaxResultsInteger = number;
export interface ListLanguagesRequest {
  DisplayLanguageCode?: DisplayLanguageCode;
  NextToken?: string;
  MaxResults?: number;
}
export type LocalizedNameString = string;
export interface Language {
  LanguageName: string;
  LanguageCode: string;
}
export type LanguagesList = Language[];
export interface ListLanguagesResponse {
  Languages?: Language[];
  DisplayLanguageCode?: DisplayLanguageCode;
  NextToken?: string;
}
export interface ListParallelDataRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type ParallelDataPropertiesList = ParallelDataProperties[];
export interface ListParallelDataResponse {
  ParallelDataPropertiesList?: ParallelDataProperties[];
  NextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface ListTerminologiesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type TerminologyPropertiesList = TerminologyProperties[];
export interface ListTerminologiesResponse {
  TerminologyPropertiesList?: TerminologyProperties[];
  NextToken?: string;
}
export interface TextTranslationJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmittedBeforeTime?: Date;
  SubmittedAfterTime?: Date;
}
export interface ListTextTranslationJobsRequest {
  Filter?: TextTranslationJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type TextTranslationJobPropertiesList = TextTranslationJobProperties[];
export interface ListTextTranslationJobsResponse {
  TextTranslationJobPropertiesList?: TextTranslationJobProperties[];
  NextToken?: string;
}
export interface StartTextTranslationJobRequest {
  JobName?: string;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  SourceLanguageCode: string;
  TargetLanguageCodes: string[];
  TerminologyNames?: string[];
  ParallelDataNames?: string[];
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
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type DocumentContent = Uint8Array | redacted.Redacted<Uint8Array>;
export interface Document {
  Content: Uint8Array | redacted.Redacted<Uint8Array>;
  ContentType: string;
}
export interface TranslateDocumentRequest {
  Document: Document;
  TerminologyNames?: string[];
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  Settings?: TranslationSettings;
}
export type TranslatedDocumentContent = Uint8Array | redacted.Redacted<Uint8Array>;
export interface TranslatedDocument {
  Content: Uint8Array | redacted.Redacted<Uint8Array>;
}
export interface Term {
  SourceText?: string;
  TargetText?: string;
}
export type TermList = Term[];
export interface AppliedTerminology {
  Name?: string;
  Terms?: Term[];
}
export type AppliedTerminologyList = AppliedTerminology[];
export interface TranslateDocumentResponse {
  TranslatedDocument: TranslatedDocument;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  AppliedTerminologies?: AppliedTerminology[];
  AppliedSettings?: TranslationSettings;
}
export type BoundedLengthString = string;
export interface TranslateTextRequest {
  Text: string;
  TerminologyNames?: string[];
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  Settings?: TranslationSettings;
}
export type TranslatedTextString = string;
export interface TranslateTextResponse {
  TranslatedText: string;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  AppliedTerminologies?: AppliedTerminology[];
  AppliedSettings?: TranslationSettings;
}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
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
  LatestUpdateAttemptAt?: Date;
}
export type CreateParallelDataError =
  | ConcurrentModificationException
  | ConflictException
  | InternalServerException
  | InvalidParameterValueException
  | InvalidRequestException
  | LimitExceededException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Creates a parallel data resource in Amazon Translate by importing an input file from
 * Amazon S3. Parallel data files contain examples that show how you want segments of text to be
 * translated. By adding parallel data, you can influence the style, tone, and word choice in
 * your translation output.
 */
export const createParallelData: API.OperationMethod<
  CreateParallelDataRequest,
  CreateParallelDataResponse,
  CreateParallelDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<CreateParallelDataRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<CreateParallelDataResponse>,
  errors: [
    ConcurrentModificationException,
    ConflictException,
    InternalServerException,
    InvalidParameterValueException,
    InvalidRequestException,
    LimitExceededException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateParallelData",
}));

export type DeleteParallelDataError =
  | ConcurrentModificationException
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a parallel data resource in Amazon Translate.
 */
export const deleteParallelData: API.OperationMethod<
  DeleteParallelDataRequest,
  DeleteParallelDataResponse,
  DeleteParallelDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<DeleteParallelDataRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<DeleteParallelDataResponse>,
  errors: [
    ConcurrentModificationException,
    InternalServerException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteParallelData",
}));

export type DeleteTerminologyError =
  | InternalServerException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * A synchronous action that deletes a custom terminology.
 */
export const deleteTerminology: API.OperationMethod<
  DeleteTerminologyRequest,
  DeleteTerminologyResponse,
  DeleteTerminologyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<DeleteTerminologyRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<DeleteTerminologyResponse>,
  errors: [
    InternalServerException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTerminology",
}));

export type DescribeTextTranslationJobError =
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with an asynchronous batch translation job including name,
 * ID, status, source and target languages, input/output S3 buckets, and so on.
 */
export const describeTextTranslationJob: API.OperationMethod<
  DescribeTextTranslationJobRequest,
  DescribeTextTranslationJobResponse,
  DescribeTextTranslationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<DescribeTextTranslationJobRequest>,
  output: __S(16, __c2, 0) as any as S.Schema<DescribeTextTranslationJobResponse>,
  errors: [InternalServerException, ResourceNotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTextTranslationJob",
}));

export type GetParallelDataError =
  | InternalServerException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides information about a parallel data resource.
 */
export const getParallelData: API.OperationMethod<
  GetParallelDataRequest,
  GetParallelDataResponse,
  GetParallelDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<GetParallelDataRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<GetParallelDataResponse>,
  errors: [
    InternalServerException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetParallelData",
}));

export type GetTerminologyError =
  | InternalServerException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves a custom terminology.
 */
export const getTerminology: API.OperationMethod<
  GetTerminologyRequest,
  GetTerminologyResponse,
  GetTerminologyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<GetTerminologyRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<GetTerminologyResponse>,
  errors: [
    InternalServerException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTerminology",
}));

export type ImportTerminologyError =
  | ConcurrentModificationException
  | InternalServerException
  | InvalidParameterValueException
  | LimitExceededException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Creates or updates a custom terminology, depending on whether one already exists for the
 * given terminology name. Importing a terminology with the same name as an existing one will
 * merge the terminologies based on the chosen merge strategy. The only supported merge strategy
 * is OVERWRITE, where the imported terminology overwrites the existing terminology of the same
 * name.
 *
 * If you import a terminology that overwrites an existing one, the new terminology takes up
 * to 10 minutes to fully propagate. After that, translations have access to the new
 * terminology.
 */
export const importTerminology: API.OperationMethod<
  ImportTerminologyRequest,
  ImportTerminologyResponse,
  ImportTerminologyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<ImportTerminologyRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<ImportTerminologyResponse>,
  errors: [
    ConcurrentModificationException,
    InternalServerException,
    InvalidParameterValueException,
    LimitExceededException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportTerminology",
}));

export type ListLanguagesError =
  | InternalServerException
  | InvalidParameterValueException
  | TooManyRequestsException
  | UnsupportedDisplayLanguageCodeException
  | CommonErrors;
/**
 * Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
 */
export const listLanguages: API.PaginatedOperationMethod<
  ListLanguagesRequest,
  ListLanguagesResponse,
  ListLanguagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<ListLanguagesRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<ListLanguagesResponse>,
  errors: [
    InternalServerException,
    InvalidParameterValueException,
    TooManyRequestsException,
    UnsupportedDisplayLanguageCodeException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLanguages",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListParallelDataError =
  | InternalServerException
  | InvalidParameterValueException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides a list of your parallel data resources in Amazon Translate.
 */
export const listParallelData: API.PaginatedOperationMethod<
  ListParallelDataRequest,
  ListParallelDataResponse,
  ListParallelDataError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<ListParallelDataRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<ListParallelDataResponse>,
  errors: [InternalServerException, InvalidParameterValueException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListParallelData",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists all tags associated with a given Amazon Translate resource.
 * For more information, see
 * Tagging your resources.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, InvalidParameterValueException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTerminologiesError =
  | InternalServerException
  | InvalidParameterValueException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides a list of custom terminologies associated with your account.
 */
export const listTerminologies: API.PaginatedOperationMethod<
  ListTerminologiesRequest,
  ListTerminologiesResponse,
  ListTerminologiesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<ListTerminologiesRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<ListTerminologiesResponse>,
  errors: [InternalServerException, InvalidParameterValueException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTerminologies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTextTranslationJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the batch translation jobs that you have submitted.
 */
export const listTextTranslationJobs: API.PaginatedOperationMethod<
  ListTextTranslationJobsRequest,
  ListTextTranslationJobsResponse,
  ListTextTranslationJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<ListTextTranslationJobsRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<ListTextTranslationJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTextTranslationJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type StartTextTranslationJobError =
  | InternalServerException
  | InvalidParameterValueException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnsupportedLanguagePairException
  | CommonErrors;
/**
 * Starts an asynchronous batch translation job. Use batch translation jobs to
 * translate large volumes of text across multiple documents at once.
 * For batch translation, you can input documents with different source languages (specify `auto`
 * as the source language). You can specify one
 * or more target languages. Batch translation translates each input document into each of the target languages.
 * For more information, see
 * Asynchronous batch processing.
 *
 * Batch translation jobs can be described with the DescribeTextTranslationJob operation, listed with the ListTextTranslationJobs operation, and stopped with the StopTextTranslationJob operation.
 */
export const startTextTranslationJob: API.OperationMethod<
  StartTextTranslationJobRequest,
  StartTextTranslationJobResponse,
  StartTextTranslationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<StartTextTranslationJobRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<StartTextTranslationJobResponse>,
  errors: [
    InternalServerException,
    InvalidParameterValueException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnsupportedLanguagePairException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTextTranslationJob",
}));

export type StopTextTranslationJobError =
  | InternalServerException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Stops an asynchronous batch translation job that is in progress.
 *
 * If the job's state is `IN_PROGRESS`, the job will be marked for termination and
 * put into the `STOP_REQUESTED` state. If the job completes before it can be stopped,
 * it is put into the `COMPLETED` state. Otherwise, the job is put into the
 * `STOPPED` state.
 *
 * Asynchronous batch translation jobs are started with the StartTextTranslationJob operation. You can use the DescribeTextTranslationJob or ListTextTranslationJobs
 * operations to get a batch translation job's `JobId`.
 */
export const stopTextTranslationJob: API.OperationMethod<
  StopTextTranslationJobRequest,
  StopTextTranslationJobResponse,
  StopTextTranslationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<StopTextTranslationJobRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<StopTextTranslationJobResponse>,
  errors: [InternalServerException, ResourceNotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTextTranslationJob",
}));

export type TagResourceError =
  | ConcurrentModificationException
  | InternalServerException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | TooManyTagsException
  | CommonErrors;
/**
 * Associates a specific tag with a resource. A tag is a key-value pair
 * that adds as a metadata to a resource.
 * For more information, see
 * Tagging your resources.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<TagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalServerException,
    InvalidParameterValueException,
    ResourceNotFoundException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TranslateDocumentError =
  | InternalServerException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnsupportedLanguagePairException
  | CommonErrors;
/**
 * Translates the input document from the source language to the target language.
 * This synchronous operation supports text, HTML, or Word documents as the input document.
 *
 * `TranslateDocument` supports translations from English to any supported language,
 * and from any supported language to English. Therefore, specify either the source language code
 * or the target language code as "en" (English).
 *
 * If you set the `Formality` parameter, the request will fail if the target language does
 * not support formality. For a list of target languages that support formality, see
 * Setting formality.
 */
export const translateDocument: API.OperationMethod<
  TranslateDocumentRequest,
  TranslateDocumentResponse,
  TranslateDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<TranslateDocumentRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<TranslateDocumentResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnsupportedLanguagePairException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TranslateDocument",
}));

export type TranslateTextError =
  | DetectedLanguageLowConfidenceException
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | UnsupportedLanguagePairException
  | CommonErrors;
/**
 * Translates input text from the source language to the target language. For a list of
 * available languages and language codes, see Supported languages.
 */
export const translateText: API.OperationMethod<
  TranslateTextRequest,
  TranslateTextResponse,
  TranslateTextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<TranslateTextRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<TranslateTextResponse>,
  errors: [
    DetectedLanguageLowConfidenceException,
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    TextSizeLimitExceededException,
    TooManyRequestsException,
    UnsupportedLanguagePairException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TranslateText",
}));

export type UntagResourceError =
  | ConcurrentModificationException
  | InternalServerException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes a specific tag associated with an Amazon Translate resource.
 * For more information, see
 * Tagging your resources.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<UntagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalServerException,
    InvalidParameterValueException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateParallelDataError =
  | ConcurrentModificationException
  | ConflictException
  | InternalServerException
  | InvalidParameterValueException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates a previously created parallel data resource by importing a new input file from
 * Amazon S3.
 */
export const updateParallelData: API.OperationMethod<
  UpdateParallelDataRequest,
  UpdateParallelDataResponse,
  UpdateParallelDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<UpdateParallelDataRequest>,
  output: __S(59, __c7, 3) as any as S.Schema<UpdateParallelDataResponse>,
  errors: [
    ConcurrentModificationException,
    ConflictException,
    InternalServerException,
    InvalidParameterValueException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateParallelData",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.optional(S.String), Format: S.optional(S.String) }),
      ).annotate({ identifier: "ParallelDataConfig" });
    case 1:
      return S.suspend(() => S.Struct({ Type: S.String, Id: S.String })).annotate({
        identifier: "EncryptionKey",
      });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          ParallelDataConfig: __S(0, __c0, 0),
          EncryptionKey: S.optional(__S(1, __c0, 1)),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(3, __c0, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateParallelDataRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateParallelDataResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteParallelDataRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTerminologyRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteTerminologyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTextTranslationJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TranslatedDocumentsCount: S.optional(S.Number),
          DocumentsWithErrorsCount: S.optional(S.Number),
          InputDocumentsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobDetails" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() => S.Struct({ S3Uri: S.String, ContentType: S.String })).annotate({
        identifier: "InputDataConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, EncryptionKey: S.optional(__S(1, __c0, 1)) }),
      ).annotate({ identifier: "OutputDataConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Formality: S.optional(S.String),
          Profanity: S.optional(S.String),
          Brevity: S.optional(S.String),
        }),
      ).annotate({ identifier: "TranslationSettings" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          JobDetails: S.optional(__S(10, __c1, 2)),
          SourceLanguageCode: S.optional(S.String),
          TargetLanguageCodes: S.optional(__S(11, __c1, 3)),
          TerminologyNames: S.optional(__S(11, __c1, 3)),
          ParallelDataNames: S.optional(__S(11, __c1, 3)),
          Message: S.optional(S.String),
          SubmittedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(12, __c1, 4)),
          OutputDataConfig: S.optional(__S(13, __c1, 5)),
          DataAccessRoleArn: S.optional(S.String),
          Settings: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({
        identifier: "TextTranslationJobProperties",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TextTranslationJobProperties: S.optional(__S(15, __c1, 7)) }),
      ).annotate({
        identifier: "DescribeTextTranslationJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetParallelDataRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          SourceLanguageCode: S.optional(S.String),
          TargetLanguageCodes: S.optional(__S(11, __c1, 3)),
          ParallelDataConfig: S.optional(__S(0, __c0, 0)),
          Message: S.optional(S.String),
          ImportedDataSize: S.optional(S.Number),
          ImportedRecordCount: S.optional(S.Number),
          FailedRecordCount: S.optional(S.Number),
          SkippedRecordCount: S.optional(S.Number),
          EncryptionKey: S.optional(__S(1, __c0, 1)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LatestUpdateAttemptStatus: S.optional(S.String),
          LatestUpdateAttemptAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ParallelDataProperties" });
    case 3:
      return S.suspend(() => S.Struct({ RepositoryType: S.String, Location: S.String })).annotate({
        identifier: "ParallelDataDataLocation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ParallelDataProperties: S.optional(__S(18, __c2, 2)),
          DataLocation: S.optional(__S(19, __c2, 3)),
          AuxiliaryDataLocation: S.optional(__S(19, __c2, 3)),
          LatestUpdateAttemptAuxiliaryDataLocation: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "GetParallelDataResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String, TerminologyDataFormat: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTerminologyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
          SourceLanguageCode: S.optional(S.String),
          TargetLanguageCodes: S.optional(__S(11, __c1, 3)),
          EncryptionKey: S.optional(__S(1, __c0, 1)),
          SizeBytes: S.optional(S.Number),
          TermCount: S.optional(S.Number),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Directionality: S.optional(S.String),
          Message: S.optional(S.String),
          SkippedTermCount: S.optional(S.Number),
          Format: S.optional(S.String),
        }),
      ).annotate({ identifier: "TerminologyProperties" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TerminologyProperties: S.optional(__S(22, __c2, 6)),
          TerminologyDataLocation: S.optional(__S(19, __c2, 3)),
          AuxiliaryDataLocation: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "GetTerminologyResponse" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          File: SensitiveBlob,
          Format: S.String,
          Directionality: S.optional(S.String),
        }),
      ).annotate({ identifier: "TerminologyData" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          MergeStrategy: S.String,
          Description: S.optional(S.String),
          TerminologyData: __S(24, __c3, 0),
          EncryptionKey: S.optional(__S(1, __c0, 1)),
          Tags: S.optional(__S(3, __c0, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportTerminologyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TerminologyProperties: S.optional(__S(22, __c2, 6)),
          AuxiliaryDataLocation: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "ImportTerminologyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DisplayLanguageCode: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLanguagesRequest" });
    case 4:
      return S.suspend(() => S.Struct({ LanguageName: S.String, LanguageCode: S.String })).annotate(
        { identifier: "Language" },
      );
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Languages: S.optional(__S(29, __c3, 5)),
          DisplayLanguageCode: S.optional(S.String),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListLanguagesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListParallelDataRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(18, __c2, 2));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ParallelDataPropertiesList: S.optional(__S(32, __c4, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListParallelDataResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(3, __c0, 3)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTerminologiesRequest" });
    case 5:
      return S.Array(__S(22, __c2, 6));
    case 6:
      return S.suspend(() =>
        S.Struct({
          TerminologyPropertiesList: S.optional(__S(37, __c4, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTerminologiesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          SubmittedBeforeTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubmittedAfterTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TextTranslationJobFilter" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(39, __c4, 7)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTextTranslationJobsRequest",
      });
    case 1:
      return S.Array(__S(15, __c1, 7));
    case 2:
      return S.suspend(() =>
        S.Struct({
          TextTranslationJobPropertiesList: S.optional(__S(41, __c5, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTextTranslationJobsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(S.String),
          InputDataConfig: __S(12, __c1, 4),
          OutputDataConfig: __S(13, __c1, 5),
          DataAccessRoleArn: S.String,
          SourceLanguageCode: S.String,
          TargetLanguageCodes: __S(11, __c1, 3),
          TerminologyNames: S.optional(__S(11, __c1, 3)),
          ParallelDataNames: S.optional(__S(11, __c1, 3)),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Settings: S.optional(__S(14, __c1, 6)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartTextTranslationJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ JobId: S.optional(S.String), JobStatus: S.optional(S.String) }),
      ).annotate({
        identifier: "StartTextTranslationJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopTextTranslationJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(3, __c0, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Content: SensitiveBlob, ContentType: S.String })).annotate({
        identifier: "Document",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Document: __S(47, __c5, 7),
          TerminologyNames: S.optional(__S(11, __c1, 3)),
          SourceLanguageCode: S.String,
          TargetLanguageCode: S.String,
          Settings: S.optional(__S(14, __c1, 6)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "TranslateDocumentRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Content: SensitiveBlob })).annotate({
        identifier: "TranslatedDocument",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SourceText: S.optional(S.String), TargetText: S.optional(S.String) }),
      ).annotate({ identifier: "Term" });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Terms: S.optional(__S(51, __c6, 3)) }),
      ).annotate({ identifier: "AppliedTerminology" });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          TranslatedDocument: __S(49, __c6, 1),
          SourceLanguageCode: S.String,
          TargetLanguageCode: S.String,
          AppliedTerminologies: S.optional(__S(53, __c6, 5)),
          AppliedSettings: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({
        identifier: "TranslateDocumentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Text: S.String,
          TerminologyNames: S.optional(__S(11, __c1, 3)),
          SourceLanguageCode: S.String,
          TargetLanguageCode: S.String,
          Settings: S.optional(__S(14, __c1, 6)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "TranslateTextRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TranslatedText: S.String,
          SourceLanguageCode: S.String,
          TargetLanguageCode: S.String,
          AppliedTerminologies: S.optional(__S(53, __c6, 5)),
          AppliedSettings: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "TranslateTextResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(11, __c1, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          ParallelDataConfig: __S(0, __c0, 0),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateParallelDataRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          LatestUpdateAttemptStatus: S.optional(S.String),
          LatestUpdateAttemptAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "UpdateParallelDataResponse",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
