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
  sdkId: "Comprehend",
  serviceShapeName: "Comprehend_20171127",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "comprehend" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-11-27");
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
              `https://comprehend-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://comprehend-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://comprehend.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://comprehend.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BatchSizeLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<BatchSizeLimitExceededException>()(
    "BatchSizeLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
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
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "InvalidRequestReason",
        }),
      ),
      Detail: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(288, __c36, 0)).annotate({
          identifier: "InvalidRequestDetail",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class JobNotFoundException
  extends /*@__PURE__*/ S.TaggedError<JobNotFoundException>()(
    "JobNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class KmsKeyValidationException
  extends /*@__PURE__*/ S.TaggedError<KmsKeyValidationException>()(
    "KmsKeyValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotAuthorizedException
  extends /*@__PURE__*/ S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ResourceUnavailableException>()(
    "ResourceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
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
export class TooManyTagKeysException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagKeysException>()(
    "TooManyTagKeysException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedLanguageException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedLanguageException>()(
    "UnsupportedLanguageException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CustomerInputString = string | redacted.Redacted<string>;
export type CustomerInputStringList = (string | redacted.Redacted<string>)[];
export interface BatchDetectDominantLanguageRequest {
  TextList: (string | redacted.Redacted<string>)[];
}
export interface DominantLanguage {
  LanguageCode?: string;
  Score?: number;
}
export type ListOfDominantLanguages = DominantLanguage[];
export interface BatchDetectDominantLanguageItemResult {
  Index?: number;
  Languages?: DominantLanguage[];
}
export type ListOfDetectDominantLanguageResult = BatchDetectDominantLanguageItemResult[];
export interface BatchItemError {
  Index?: number;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type BatchItemErrorList = BatchItemError[];
export interface BatchDetectDominantLanguageResponse {
  ResultList: BatchDetectDominantLanguageItemResult[];
  ErrorList: BatchItemError[];
}
export type LanguageCode =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "ar"
  | "hi"
  | "ja"
  | "ko"
  | "zh"
  | "zh-TW"
  | (string & {});
export interface BatchDetectEntitiesRequest {
  TextList: (string | redacted.Redacted<string>)[];
  LanguageCode: LanguageCode;
}
export type EntityType =
  | "PERSON"
  | "LOCATION"
  | "ORGANIZATION"
  | "COMMERCIAL_ITEM"
  | "EVENT"
  | "DATE"
  | "QUANTITY"
  | "TITLE"
  | "OTHER"
  | (string & {});
export interface ChildBlock {
  ChildBlockId?: string;
  BeginOffset?: number;
  EndOffset?: number;
}
export type ListOfChildBlocks = ChildBlock[];
export interface BlockReference {
  BlockId?: string;
  BeginOffset?: number;
  EndOffset?: number;
  ChildBlocks?: ChildBlock[];
}
export type ListOfBlockReferences = BlockReference[];
export interface Entity {
  Score?: number;
  Type?: EntityType;
  Text?: string;
  BeginOffset?: number;
  EndOffset?: number;
  BlockReferences?: BlockReference[];
}
export type ListOfEntities = Entity[];
export interface BatchDetectEntitiesItemResult {
  Index?: number;
  Entities?: Entity[];
}
export type ListOfDetectEntitiesResult = BatchDetectEntitiesItemResult[];
export interface BatchDetectEntitiesResponse {
  ResultList: BatchDetectEntitiesItemResult[];
  ErrorList: BatchItemError[];
}
export interface BatchDetectKeyPhrasesRequest {
  TextList: (string | redacted.Redacted<string>)[];
  LanguageCode: LanguageCode;
}
export interface KeyPhrase {
  Score?: number;
  Text?: string;
  BeginOffset?: number;
  EndOffset?: number;
}
export type ListOfKeyPhrases = KeyPhrase[];
export interface BatchDetectKeyPhrasesItemResult {
  Index?: number;
  KeyPhrases?: KeyPhrase[];
}
export type ListOfDetectKeyPhrasesResult = BatchDetectKeyPhrasesItemResult[];
export interface BatchDetectKeyPhrasesResponse {
  ResultList: BatchDetectKeyPhrasesItemResult[];
  ErrorList: BatchItemError[];
}
export interface BatchDetectSentimentRequest {
  TextList: (string | redacted.Redacted<string>)[];
  LanguageCode: LanguageCode;
}
export type SentimentType = "POSITIVE" | "NEGATIVE" | "NEUTRAL" | "MIXED" | (string & {});
export interface SentimentScore {
  Positive?: number;
  Negative?: number;
  Neutral?: number;
  Mixed?: number;
}
export interface BatchDetectSentimentItemResult {
  Index?: number;
  Sentiment?: SentimentType;
  SentimentScore?: SentimentScore;
}
export type ListOfDetectSentimentResult = BatchDetectSentimentItemResult[];
export interface BatchDetectSentimentResponse {
  ResultList: BatchDetectSentimentItemResult[];
  ErrorList: BatchItemError[];
}
export type SyntaxLanguageCode = "en" | "es" | "fr" | "de" | "it" | "pt" | (string & {});
export interface BatchDetectSyntaxRequest {
  TextList: (string | redacted.Redacted<string>)[];
  LanguageCode: SyntaxLanguageCode;
}
export type PartOfSpeechTagType =
  | "ADJ"
  | "ADP"
  | "ADV"
  | "AUX"
  | "CONJ"
  | "CCONJ"
  | "DET"
  | "INTJ"
  | "NOUN"
  | "NUM"
  | "O"
  | "PART"
  | "PRON"
  | "PROPN"
  | "PUNCT"
  | "SCONJ"
  | "SYM"
  | "VERB"
  | (string & {});
export interface PartOfSpeechTag {
  Tag?: PartOfSpeechTagType;
  Score?: number;
}
export interface SyntaxToken {
  TokenId?: number;
  Text?: string;
  BeginOffset?: number;
  EndOffset?: number;
  PartOfSpeech?: PartOfSpeechTag;
}
export type ListOfSyntaxTokens = SyntaxToken[];
export interface BatchDetectSyntaxItemResult {
  Index?: number;
  SyntaxTokens?: SyntaxToken[];
}
export type ListOfDetectSyntaxResult = BatchDetectSyntaxItemResult[];
export interface BatchDetectSyntaxResponse {
  ResultList: BatchDetectSyntaxItemResult[];
  ErrorList: BatchItemError[];
}
export interface BatchDetectTargetedSentimentRequest {
  TextList: (string | redacted.Redacted<string>)[];
  LanguageCode: LanguageCode;
}
export type ListOfDescriptiveMentionIndices = number[];
export type TargetedSentimentEntityType =
  | "PERSON"
  | "LOCATION"
  | "ORGANIZATION"
  | "FACILITY"
  | "BRAND"
  | "COMMERCIAL_ITEM"
  | "MOVIE"
  | "MUSIC"
  | "BOOK"
  | "SOFTWARE"
  | "GAME"
  | "PERSONAL_TITLE"
  | "EVENT"
  | "DATE"
  | "QUANTITY"
  | "ATTRIBUTE"
  | "OTHER"
  | (string & {});
export interface MentionSentiment {
  Sentiment?: SentimentType;
  SentimentScore?: SentimentScore;
}
export interface TargetedSentimentMention {
  Score?: number;
  GroupScore?: number;
  Text?: string;
  Type?: TargetedSentimentEntityType;
  MentionSentiment?: MentionSentiment;
  BeginOffset?: number;
  EndOffset?: number;
}
export type ListOfMentions = TargetedSentimentMention[];
export interface TargetedSentimentEntity {
  DescriptiveMentionIndex?: number[];
  Mentions?: TargetedSentimentMention[];
}
export type ListOfTargetedSentimentEntities = TargetedSentimentEntity[];
export interface BatchDetectTargetedSentimentItemResult {
  Index?: number;
  Entities?: TargetedSentimentEntity[];
}
export type ListOfDetectTargetedSentimentResult = BatchDetectTargetedSentimentItemResult[];
export interface BatchDetectTargetedSentimentResponse {
  ResultList: BatchDetectTargetedSentimentItemResult[];
  ErrorList: BatchItemError[];
}
export type DocumentClassifierEndpointArn = string;
export type SemiStructuredDocumentBlob = Uint8Array;
export type DocumentReadAction =
  | "TEXTRACT_DETECT_DOCUMENT_TEXT"
  | "TEXTRACT_ANALYZE_DOCUMENT"
  | (string & {});
export type DocumentReadMode = "SERVICE_DEFAULT" | "FORCE_DOCUMENT_READ_ACTION" | (string & {});
export type DocumentReadFeatureTypes = "TABLES" | "FORMS" | (string & {});
export type ListOfDocumentReadFeatureTypes = DocumentReadFeatureTypes[];
export interface DocumentReaderConfig {
  DocumentReadAction: DocumentReadAction;
  DocumentReadMode?: DocumentReadMode;
  FeatureTypes?: DocumentReadFeatureTypes[];
}
export interface ClassifyDocumentRequest {
  Text?: string | redacted.Redacted<string>;
  EndpointArn: string;
  Bytes?: Uint8Array;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export interface DocumentClass {
  Name?: string;
  Score?: number;
  Page?: number;
}
export type ListOfClasses = DocumentClass[];
export interface DocumentLabel {
  Name?: string;
  Score?: number;
  Page?: number;
}
export type ListOfLabels = DocumentLabel[];
export interface ExtractedCharactersListItem {
  Page?: number;
  Count?: number;
}
export type ListOfExtractedCharacters = ExtractedCharactersListItem[];
export interface DocumentMetadata {
  Pages?: number;
  ExtractedCharacters?: ExtractedCharactersListItem[];
}
export type DocumentType =
  | "NATIVE_PDF"
  | "SCANNED_PDF"
  | "MS_WORD"
  | "IMAGE"
  | "PLAIN_TEXT"
  | "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON"
  | "TEXTRACT_ANALYZE_DOCUMENT_JSON"
  | (string & {});
export interface DocumentTypeListItem {
  Page?: number;
  Type?: DocumentType;
}
export type ListOfDocumentType = DocumentTypeListItem[];
export type PageBasedErrorCode =
  | "TEXTRACT_BAD_PAGE"
  | "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED"
  | "PAGE_CHARACTERS_EXCEEDED"
  | "PAGE_SIZE_EXCEEDED"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface ErrorsListItem {
  Page?: number;
  ErrorCode?: PageBasedErrorCode;
  ErrorMessage?: string;
}
export type ListOfErrors = ErrorsListItem[];
export type PageBasedWarningCode =
  | "INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL"
  | "INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL"
  | (string & {});
export interface WarningsListItem {
  Page?: number;
  WarnCode?: PageBasedWarningCode;
  WarnMessage?: string;
}
export type ListOfWarnings = WarningsListItem[];
export interface ClassifyDocumentResponse {
  Classes?: DocumentClass[];
  Labels?: DocumentLabel[];
  DocumentMetadata?: DocumentMetadata;
  DocumentType?: DocumentTypeListItem[];
  Errors?: ErrorsListItem[];
  Warnings?: WarningsListItem[];
}
export interface ContainsPiiEntitiesRequest {
  Text: string;
  LanguageCode: LanguageCode;
}
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
  | "DATE_TIME"
  | "PASSPORT_NUMBER"
  | "DRIVER_ID"
  | "URL"
  | "AGE"
  | "USERNAME"
  | "PASSWORD"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "IP_ADDRESS"
  | "MAC_ADDRESS"
  | "ALL"
  | "LICENSE_PLATE"
  | "VEHICLE_IDENTIFICATION_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | "IN_PERMANENT_ACCOUNT_NUMBER"
  | "IN_NREGA"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "SWIFT_CODE"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "CA_HEALTH_NUMBER"
  | "IN_AADHAAR"
  | "IN_VOTER_NUMBER"
  | (string & {});
export interface EntityLabel {
  Name?: PiiEntityType;
  Score?: number;
}
export type ListOfEntityLabels = EntityLabel[];
export interface ContainsPiiEntitiesResponse {
  Labels?: EntityLabel[];
}
export type ComprehendFlywheelArn = string;
export type ComprehendArnName = string;
export type DatasetType = "TRAIN" | "TEST" | (string & {});
export type Description = string;
export type AttributeNamesListItem = string;
export type AttributeNamesList = string[];
export type S3Uri = string;
export type AugmentedManifestsDocumentTypeFormat =
  | "PLAIN_TEXT_DOCUMENT"
  | "SEMI_STRUCTURED_DOCUMENT"
  | (string & {});
export interface DatasetAugmentedManifestsListItem {
  AttributeNames: string[];
  S3Uri: string;
  AnnotationDataS3Uri?: string;
  SourceDocumentsS3Uri?: string;
  DocumentType?: AugmentedManifestsDocumentTypeFormat;
}
export type DatasetAugmentedManifestsList = DatasetAugmentedManifestsListItem[];
export type DatasetDataFormat = "COMPREHEND_CSV" | "AUGMENTED_MANIFEST" | (string & {});
export type LabelDelimiter = string;
export interface DatasetDocumentClassifierInputDataConfig {
  S3Uri: string;
  LabelDelimiter?: string;
}
export interface DatasetEntityRecognizerAnnotations {
  S3Uri: string;
}
export type InputFormat = "ONE_DOC_PER_FILE" | "ONE_DOC_PER_LINE" | (string & {});
export interface DatasetEntityRecognizerDocuments {
  S3Uri: string;
  InputFormat?: InputFormat;
}
export interface DatasetEntityRecognizerEntityList {
  S3Uri: string;
}
export interface DatasetEntityRecognizerInputDataConfig {
  Annotations?: DatasetEntityRecognizerAnnotations;
  Documents: DatasetEntityRecognizerDocuments;
  EntityList?: DatasetEntityRecognizerEntityList;
}
export interface DatasetInputDataConfig {
  AugmentedManifests?: DatasetAugmentedManifestsListItem[];
  DataFormat?: DatasetDataFormat;
  DocumentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig;
  EntityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig;
}
export type ClientRequestTokenString = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagList = Tag[];
export interface CreateDatasetRequest {
  FlywheelArn: string;
  DatasetName: string;
  DatasetType?: DatasetType;
  Description?: string;
  InputDataConfig: DatasetInputDataConfig;
  ClientRequestToken?: string;
  Tags?: Tag[];
}
export type ComprehendDatasetArn = string;
export interface CreateDatasetResponse {
  DatasetArn?: string;
}
export type VersionName = string;
export type IamRoleArn = string;
export type DocumentClassifierDataFormat = "COMPREHEND_CSV" | "AUGMENTED_MANIFEST" | (string & {});
export type Split = "TRAIN" | "TEST" | (string & {});
export interface AugmentedManifestsListItem {
  S3Uri: string;
  Split?: Split;
  AttributeNames: string[];
  AnnotationDataS3Uri?: string;
  SourceDocumentsS3Uri?: string;
  DocumentType?: AugmentedManifestsDocumentTypeFormat;
}
export type DocumentClassifierAugmentedManifestsList = AugmentedManifestsListItem[];
export type DocumentClassifierDocumentTypeFormat =
  | "PLAIN_TEXT_DOCUMENT"
  | "SEMI_STRUCTURED_DOCUMENT"
  | (string & {});
export interface DocumentClassifierDocuments {
  S3Uri: string;
  TestS3Uri?: string;
}
export interface DocumentClassifierInputDataConfig {
  DataFormat?: DocumentClassifierDataFormat;
  S3Uri?: string;
  TestS3Uri?: string;
  LabelDelimiter?: string;
  AugmentedManifests?: AugmentedManifestsListItem[];
  DocumentType?: DocumentClassifierDocumentTypeFormat;
  Documents?: DocumentClassifierDocuments;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export type KmsKeyId = string;
export interface DocumentClassifierOutputDataConfig {
  S3Uri?: string;
  KmsKeyId?: string;
  FlywheelStatsS3Prefix?: string;
}
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
export type SubnetId = string;
export type Subnets = string[];
export interface VpcConfig {
  SecurityGroupIds: string[];
  Subnets: string[];
}
export type DocumentClassifierMode = "MULTI_CLASS" | "MULTI_LABEL" | (string & {});
export type Policy = string;
export interface CreateDocumentClassifierRequest {
  DocumentClassifierName: string;
  VersionName?: string;
  DataAccessRoleArn: string;
  Tags?: Tag[];
  InputDataConfig: DocumentClassifierInputDataConfig;
  OutputDataConfig?: DocumentClassifierOutputDataConfig;
  ClientRequestToken?: string;
  LanguageCode: LanguageCode;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Mode?: DocumentClassifierMode;
  ModelKmsKeyId?: string;
  ModelPolicy?: string;
}
export type DocumentClassifierArn = string;
export interface CreateDocumentClassifierResponse {
  DocumentClassifierArn?: string;
}
export type ComprehendEndpointName = string;
export type ComprehendModelArn = string;
export type InferenceUnitsInteger = number;
export interface CreateEndpointRequest {
  EndpointName: string;
  ModelArn?: string;
  DesiredInferenceUnits: number;
  ClientRequestToken?: string;
  Tags?: Tag[];
  DataAccessRoleArn?: string;
  FlywheelArn?: string;
}
export type ComprehendEndpointArn = string;
export interface CreateEndpointResponse {
  EndpointArn?: string;
  ModelArn?: string;
}
export type EntityRecognizerDataFormat = "COMPREHEND_CSV" | "AUGMENTED_MANIFEST" | (string & {});
export type EntityTypeName = string;
export interface EntityTypesListItem {
  Type: string;
}
export type EntityTypesList = EntityTypesListItem[];
export interface EntityRecognizerDocuments {
  S3Uri: string;
  TestS3Uri?: string;
  InputFormat?: InputFormat;
}
export interface EntityRecognizerAnnotations {
  S3Uri: string;
  TestS3Uri?: string;
}
export interface EntityRecognizerEntityList {
  S3Uri: string;
}
export type EntityRecognizerAugmentedManifestsList = AugmentedManifestsListItem[];
export interface EntityRecognizerInputDataConfig {
  DataFormat?: EntityRecognizerDataFormat;
  EntityTypes: EntityTypesListItem[];
  Documents?: EntityRecognizerDocuments;
  Annotations?: EntityRecognizerAnnotations;
  EntityList?: EntityRecognizerEntityList;
  AugmentedManifests?: AugmentedManifestsListItem[];
}
export interface CreateEntityRecognizerRequest {
  RecognizerName: string;
  VersionName?: string;
  DataAccessRoleArn: string;
  Tags?: Tag[];
  InputDataConfig: EntityRecognizerInputDataConfig;
  ClientRequestToken?: string;
  LanguageCode: LanguageCode;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  ModelKmsKeyId?: string;
  ModelPolicy?: string;
}
export type EntityRecognizerArn = string;
export interface CreateEntityRecognizerResponse {
  EntityRecognizerArn?: string;
}
export type LabelListItem = string;
export type LabelsList = string[];
export interface DocumentClassificationConfig {
  Mode: DocumentClassifierMode;
  Labels?: string[];
}
export interface EntityRecognitionConfig {
  EntityTypes: EntityTypesListItem[];
}
export interface TaskConfig {
  LanguageCode: LanguageCode;
  DocumentClassificationConfig?: DocumentClassificationConfig;
  EntityRecognitionConfig?: EntityRecognitionConfig;
}
export type ModelType = "DOCUMENT_CLASSIFIER" | "ENTITY_RECOGNIZER" | (string & {});
export type FlywheelS3Uri = string;
export interface DataSecurityConfig {
  ModelKmsKeyId?: string;
  VolumeKmsKeyId?: string;
  DataLakeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface CreateFlywheelRequest {
  FlywheelName: string;
  ActiveModelArn?: string;
  DataAccessRoleArn: string;
  TaskConfig?: TaskConfig;
  ModelType?: ModelType;
  DataLakeS3Uri: string;
  DataSecurityConfig?: DataSecurityConfig;
  ClientRequestToken?: string;
  Tags?: Tag[];
}
export interface CreateFlywheelResponse {
  FlywheelArn?: string;
  ActiveModelArn?: string;
}
export interface DeleteDocumentClassifierRequest {
  DocumentClassifierArn: string;
}
export interface DeleteDocumentClassifierResponse {}
export interface DeleteEndpointRequest {
  EndpointArn: string;
}
export interface DeleteEndpointResponse {}
export interface DeleteEntityRecognizerRequest {
  EntityRecognizerArn: string;
}
export interface DeleteEntityRecognizerResponse {}
export interface DeleteFlywheelRequest {
  FlywheelArn: string;
}
export interface DeleteFlywheelResponse {}
export type PolicyRevisionId = string;
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
  PolicyRevisionId?: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DescribeDatasetRequest {
  DatasetArn: string;
}
export type DatasetStatus = "CREATING" | "COMPLETED" | "FAILED" | (string & {});
export type AnyLengthString = string;
export type NumberOfDocuments = number;
export interface DatasetProperties {
  DatasetArn?: string;
  DatasetName?: string;
  DatasetType?: DatasetType;
  DatasetS3Uri?: string;
  Description?: string;
  Status?: DatasetStatus;
  Message?: string;
  NumberOfDocuments?: number;
  CreationTime?: Date;
  EndTime?: Date;
}
export interface DescribeDatasetResponse {
  DatasetProperties?: DatasetProperties;
}
export type JobId = string;
export interface DescribeDocumentClassificationJobRequest {
  JobId: string;
}
export type ComprehendArn = string;
export type JobName = string;
export type JobStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "STOP_REQUESTED"
  | "STOPPED"
  | (string & {});
export interface InputDataConfig {
  S3Uri: string;
  InputFormat?: InputFormat;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export interface OutputDataConfig {
  S3Uri: string;
  KmsKeyId?: string;
}
export interface DocumentClassificationJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  DocumentClassifierArn?: string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  FlywheelArn?: string;
}
export interface DescribeDocumentClassificationJobResponse {
  DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
}
export interface DescribeDocumentClassifierRequest {
  DocumentClassifierArn: string;
}
export type ModelStatus =
  | "SUBMITTED"
  | "TRAINING"
  | "DELETING"
  | "STOP_REQUESTED"
  | "STOPPED"
  | "IN_ERROR"
  | "TRAINED"
  | "TRAINED_WITH_WARNING"
  | (string & {});
export interface ClassifierEvaluationMetrics {
  Accuracy?: number;
  Precision?: number;
  Recall?: number;
  F1Score?: number;
  MicroPrecision?: number;
  MicroRecall?: number;
  MicroF1Score?: number;
  HammingLoss?: number;
}
export interface ClassifierMetadata {
  NumberOfLabels?: number;
  NumberOfTrainedDocuments?: number;
  NumberOfTestDocuments?: number;
  EvaluationMetrics?: ClassifierEvaluationMetrics;
}
export interface DocumentClassifierProperties {
  DocumentClassifierArn?: string;
  LanguageCode?: LanguageCode;
  Status?: ModelStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  TrainingStartTime?: Date;
  TrainingEndTime?: Date;
  InputDataConfig?: DocumentClassifierInputDataConfig;
  OutputDataConfig?: DocumentClassifierOutputDataConfig;
  ClassifierMetadata?: ClassifierMetadata;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Mode?: DocumentClassifierMode;
  ModelKmsKeyId?: string;
  VersionName?: string;
  SourceModelArn?: string;
  FlywheelArn?: string;
}
export interface DescribeDocumentClassifierResponse {
  DocumentClassifierProperties?: DocumentClassifierProperties;
}
export interface DescribeDominantLanguageDetectionJobRequest {
  JobId: string;
}
export interface DominantLanguageDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface DescribeDominantLanguageDetectionJobResponse {
  DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
}
export interface DescribeEndpointRequest {
  EndpointArn: string;
}
export type EndpointStatus =
  | "CREATING"
  | "DELETING"
  | "FAILED"
  | "IN_SERVICE"
  | "UPDATING"
  | (string & {});
export interface EndpointProperties {
  EndpointArn?: string;
  Status?: EndpointStatus;
  Message?: string;
  ModelArn?: string;
  DesiredModelArn?: string;
  DesiredInferenceUnits?: number;
  CurrentInferenceUnits?: number;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  DataAccessRoleArn?: string;
  DesiredDataAccessRoleArn?: string;
  FlywheelArn?: string;
}
export interface DescribeEndpointResponse {
  EndpointProperties?: EndpointProperties;
}
export interface DescribeEntitiesDetectionJobRequest {
  JobId: string;
}
export interface EntitiesDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  EntityRecognizerArn?: string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  FlywheelArn?: string;
}
export interface DescribeEntitiesDetectionJobResponse {
  EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
}
export interface DescribeEntityRecognizerRequest {
  EntityRecognizerArn: string;
}
export interface EntityRecognizerEvaluationMetrics {
  Precision?: number;
  Recall?: number;
  F1Score?: number;
}
export interface EntityTypesEvaluationMetrics {
  Precision?: number;
  Recall?: number;
  F1Score?: number;
}
export interface EntityRecognizerMetadataEntityTypesListItem {
  Type?: string;
  EvaluationMetrics?: EntityTypesEvaluationMetrics;
  NumberOfTrainMentions?: number;
}
export type EntityRecognizerMetadataEntityTypesList = EntityRecognizerMetadataEntityTypesListItem[];
export interface EntityRecognizerMetadata {
  NumberOfTrainedDocuments?: number;
  NumberOfTestDocuments?: number;
  EvaluationMetrics?: EntityRecognizerEvaluationMetrics;
  EntityTypes?: EntityRecognizerMetadataEntityTypesListItem[];
}
export interface EntityRecognizerOutputDataConfig {
  FlywheelStatsS3Prefix?: string;
}
export interface EntityRecognizerProperties {
  EntityRecognizerArn?: string;
  LanguageCode?: LanguageCode;
  Status?: ModelStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  TrainingStartTime?: Date;
  TrainingEndTime?: Date;
  InputDataConfig?: EntityRecognizerInputDataConfig;
  RecognizerMetadata?: EntityRecognizerMetadata;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  ModelKmsKeyId?: string;
  VersionName?: string;
  SourceModelArn?: string;
  FlywheelArn?: string;
  OutputDataConfig?: EntityRecognizerOutputDataConfig;
}
export interface DescribeEntityRecognizerResponse {
  EntityRecognizerProperties?: EntityRecognizerProperties;
}
export interface DescribeEventsDetectionJobRequest {
  JobId: string;
}
export type EventTypeString = string;
export type TargetEventTypes = string[];
export interface EventsDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  TargetEventTypes?: string[];
}
export interface DescribeEventsDetectionJobResponse {
  EventsDetectionJobProperties?: EventsDetectionJobProperties;
}
export interface DescribeFlywheelRequest {
  FlywheelArn: string;
}
export type FlywheelStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export type FlywheelIterationId = string;
export interface FlywheelProperties {
  FlywheelArn?: string;
  ActiveModelArn?: string;
  DataAccessRoleArn?: string;
  TaskConfig?: TaskConfig;
  DataLakeS3Uri?: string;
  DataSecurityConfig?: DataSecurityConfig;
  Status?: FlywheelStatus;
  ModelType?: ModelType;
  Message?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LatestFlywheelIteration?: string;
}
export interface DescribeFlywheelResponse {
  FlywheelProperties?: FlywheelProperties;
}
export interface DescribeFlywheelIterationRequest {
  FlywheelArn: string;
  FlywheelIterationId: string;
}
export type FlywheelIterationStatus =
  | "TRAINING"
  | "EVALUATING"
  | "COMPLETED"
  | "FAILED"
  | "STOP_REQUESTED"
  | "STOPPED"
  | (string & {});
export interface FlywheelModelEvaluationMetrics {
  AverageF1Score?: number;
  AveragePrecision?: number;
  AverageRecall?: number;
  AverageAccuracy?: number;
}
export interface FlywheelIterationProperties {
  FlywheelArn?: string;
  FlywheelIterationId?: string;
  CreationTime?: Date;
  EndTime?: Date;
  Status?: FlywheelIterationStatus;
  Message?: string;
  EvaluatedModelArn?: string;
  EvaluatedModelMetrics?: FlywheelModelEvaluationMetrics;
  TrainedModelArn?: string;
  TrainedModelMetrics?: FlywheelModelEvaluationMetrics;
  EvaluationManifestS3Prefix?: string;
}
export interface DescribeFlywheelIterationResponse {
  FlywheelIterationProperties?: FlywheelIterationProperties;
}
export interface DescribeKeyPhrasesDetectionJobRequest {
  JobId: string;
}
export interface KeyPhrasesDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface DescribeKeyPhrasesDetectionJobResponse {
  KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
}
export interface DescribePiiEntitiesDetectionJobRequest {
  JobId: string;
}
export interface PiiOutputDataConfig {
  S3Uri: string;
  KmsKeyId?: string;
}
export type ListOfPiiEntityTypes = PiiEntityType[];
export type PiiEntitiesDetectionMaskMode = "MASK" | "REPLACE_WITH_PII_ENTITY_TYPE" | (string & {});
export type MaskCharacter = string;
export interface RedactionConfig {
  PiiEntityTypes?: PiiEntityType[];
  MaskMode?: PiiEntitiesDetectionMaskMode;
  MaskCharacter?: string;
}
export type PiiEntitiesDetectionMode = "ONLY_REDACTION" | "ONLY_OFFSETS" | (string & {});
export interface PiiEntitiesDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: PiiOutputDataConfig;
  RedactionConfig?: RedactionConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  Mode?: PiiEntitiesDetectionMode;
}
export interface DescribePiiEntitiesDetectionJobResponse {
  PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
}
export interface DescribeResourcePolicyRequest {
  ResourceArn: string;
}
export interface DescribeResourcePolicyResponse {
  ResourcePolicy?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  PolicyRevisionId?: string;
}
export interface DescribeSentimentDetectionJobRequest {
  JobId: string;
}
export interface SentimentDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface DescribeSentimentDetectionJobResponse {
  SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
}
export interface DescribeTargetedSentimentDetectionJobRequest {
  JobId: string;
}
export interface TargetedSentimentDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface DescribeTargetedSentimentDetectionJobResponse {
  TargetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties;
}
export interface DescribeTopicsDetectionJobRequest {
  JobId: string;
}
export interface TopicsDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  NumberOfTopics?: number;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface DescribeTopicsDetectionJobResponse {
  TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
}
export interface DetectDominantLanguageRequest {
  Text: string | redacted.Redacted<string>;
}
export interface DetectDominantLanguageResponse {
  Languages?: DominantLanguage[];
}
export type EntityRecognizerEndpointArn = string;
export interface DetectEntitiesRequest {
  Text?: string | redacted.Redacted<string>;
  LanguageCode?: LanguageCode;
  EndpointArn?: string;
  Bytes?: Uint8Array;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export type BlockType = "LINE" | "WORD" | (string & {});
export interface BoundingBox {
  Height?: number;
  Left?: number;
  Top?: number;
  Width?: number;
}
export interface Point {
  X?: number;
  Y?: number;
}
export type Polygon = Point[];
export interface Geometry {
  BoundingBox?: BoundingBox;
  Polygon?: Point[];
}
export type StringList = string[];
export type RelationshipType = "CHILD" | (string & {});
export interface RelationshipsListItem {
  Ids?: string[];
  Type?: RelationshipType;
}
export type ListOfRelationships = RelationshipsListItem[];
export interface Block {
  Id?: string;
  BlockType?: BlockType;
  Text?: string;
  Page?: number;
  Geometry?: Geometry;
  Relationships?: RelationshipsListItem[];
}
export type ListOfBlocks = Block[];
export interface DetectEntitiesResponse {
  Entities?: Entity[];
  DocumentMetadata?: DocumentMetadata;
  DocumentType?: DocumentTypeListItem[];
  Blocks?: Block[];
  Errors?: ErrorsListItem[];
}
export interface DetectKeyPhrasesRequest {
  Text: string | redacted.Redacted<string>;
  LanguageCode: LanguageCode;
}
export interface DetectKeyPhrasesResponse {
  KeyPhrases?: KeyPhrase[];
}
export interface DetectPiiEntitiesRequest {
  Text: string;
  LanguageCode: LanguageCode;
}
export interface PiiEntity {
  Score?: number;
  Type?: PiiEntityType;
  BeginOffset?: number;
  EndOffset?: number;
}
export type ListOfPiiEntities = PiiEntity[];
export interface DetectPiiEntitiesResponse {
  Entities?: PiiEntity[];
}
export interface DetectSentimentRequest {
  Text: string | redacted.Redacted<string>;
  LanguageCode: LanguageCode;
}
export interface DetectSentimentResponse {
  Sentiment?: SentimentType;
  SentimentScore?: SentimentScore;
}
export interface DetectSyntaxRequest {
  Text: string | redacted.Redacted<string>;
  LanguageCode: SyntaxLanguageCode;
}
export interface DetectSyntaxResponse {
  SyntaxTokens?: SyntaxToken[];
}
export interface DetectTargetedSentimentRequest {
  Text: string | redacted.Redacted<string>;
  LanguageCode: LanguageCode;
}
export interface DetectTargetedSentimentResponse {
  Entities?: TargetedSentimentEntity[];
}
export interface TextSegment {
  Text: string | redacted.Redacted<string>;
}
export type ListOfTextSegments = TextSegment[];
export interface DetectToxicContentRequest {
  TextSegments: TextSegment[];
  LanguageCode: LanguageCode;
}
export type ToxicContentType =
  | "GRAPHIC"
  | "HARASSMENT_OR_ABUSE"
  | "HATE_SPEECH"
  | "INSULT"
  | "PROFANITY"
  | "SEXUAL"
  | "VIOLENCE_OR_THREAT"
  | (string & {});
export interface ToxicContent {
  Name?: ToxicContentType;
  Score?: number;
}
export type ListOfToxicContent = ToxicContent[];
export interface ToxicLabels {
  Labels?: ToxicContent[];
  Toxicity?: number;
}
export type ListOfToxicLabels = ToxicLabels[];
export interface DetectToxicContentResponse {
  ResultList?: ToxicLabels[];
}
export interface ImportModelRequest {
  SourceModelArn: string;
  ModelName?: string;
  VersionName?: string;
  ModelKmsKeyId?: string;
  DataAccessRoleArn?: string;
  Tags?: Tag[];
}
export interface ImportModelResponse {
  ModelArn?: string;
}
export interface DatasetFilter {
  Status?: DatasetStatus;
  DatasetType?: DatasetType;
  CreationTimeAfter?: Date;
  CreationTimeBefore?: Date;
}
export type MaxResultsInteger = number;
export interface ListDatasetsRequest {
  FlywheelArn?: string;
  Filter?: DatasetFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type DatasetPropertiesList = DatasetProperties[];
export interface ListDatasetsResponse {
  DatasetPropertiesList?: DatasetProperties[];
  NextToken?: string;
}
export interface DocumentClassificationJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListDocumentClassificationJobsRequest {
  Filter?: DocumentClassificationJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type DocumentClassificationJobPropertiesList = DocumentClassificationJobProperties[];
export interface ListDocumentClassificationJobsResponse {
  DocumentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];
  NextToken?: string;
}
export interface DocumentClassifierFilter {
  Status?: ModelStatus;
  DocumentClassifierName?: string;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListDocumentClassifiersRequest {
  Filter?: DocumentClassifierFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type DocumentClassifierPropertiesList = DocumentClassifierProperties[];
export interface ListDocumentClassifiersResponse {
  DocumentClassifierPropertiesList?: DocumentClassifierProperties[];
  NextToken?: string;
}
export interface ListDocumentClassifierSummariesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface DocumentClassifierSummary {
  DocumentClassifierName?: string;
  NumberOfVersions?: number;
  LatestVersionCreatedAt?: Date;
  LatestVersionName?: string;
  LatestVersionStatus?: ModelStatus;
}
export type DocumentClassifierSummariesList = DocumentClassifierSummary[];
export interface ListDocumentClassifierSummariesResponse {
  DocumentClassifierSummariesList?: DocumentClassifierSummary[];
  NextToken?: string;
}
export interface DominantLanguageDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListDominantLanguageDetectionJobsRequest {
  Filter?: DominantLanguageDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type DominantLanguageDetectionJobPropertiesList = DominantLanguageDetectionJobProperties[];
export interface ListDominantLanguageDetectionJobsResponse {
  DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];
  NextToken?: string;
}
export interface EndpointFilter {
  ModelArn?: string;
  Status?: EndpointStatus;
  CreationTimeBefore?: Date;
  CreationTimeAfter?: Date;
}
export interface ListEndpointsRequest {
  Filter?: EndpointFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type EndpointPropertiesList = EndpointProperties[];
export interface ListEndpointsResponse {
  EndpointPropertiesList?: EndpointProperties[];
  NextToken?: string;
}
export interface EntitiesDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListEntitiesDetectionJobsRequest {
  Filter?: EntitiesDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type EntitiesDetectionJobPropertiesList = EntitiesDetectionJobProperties[];
export interface ListEntitiesDetectionJobsResponse {
  EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];
  NextToken?: string;
}
export interface EntityRecognizerFilter {
  Status?: ModelStatus;
  RecognizerName?: string;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListEntityRecognizersRequest {
  Filter?: EntityRecognizerFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type EntityRecognizerPropertiesList = EntityRecognizerProperties[];
export interface ListEntityRecognizersResponse {
  EntityRecognizerPropertiesList?: EntityRecognizerProperties[];
  NextToken?: string;
}
export interface ListEntityRecognizerSummariesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface EntityRecognizerSummary {
  RecognizerName?: string;
  NumberOfVersions?: number;
  LatestVersionCreatedAt?: Date;
  LatestVersionName?: string;
  LatestVersionStatus?: ModelStatus;
}
export type EntityRecognizerSummariesList = EntityRecognizerSummary[];
export interface ListEntityRecognizerSummariesResponse {
  EntityRecognizerSummariesList?: EntityRecognizerSummary[];
  NextToken?: string;
}
export interface EventsDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListEventsDetectionJobsRequest {
  Filter?: EventsDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type EventsDetectionJobPropertiesList = EventsDetectionJobProperties[];
export interface ListEventsDetectionJobsResponse {
  EventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];
  NextToken?: string;
}
export interface FlywheelIterationFilter {
  CreationTimeAfter?: Date;
  CreationTimeBefore?: Date;
}
export interface ListFlywheelIterationHistoryRequest {
  FlywheelArn: string;
  Filter?: FlywheelIterationFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type FlywheelIterationPropertiesList = FlywheelIterationProperties[];
export interface ListFlywheelIterationHistoryResponse {
  FlywheelIterationPropertiesList?: FlywheelIterationProperties[];
  NextToken?: string;
}
export interface FlywheelFilter {
  Status?: FlywheelStatus;
  CreationTimeAfter?: Date;
  CreationTimeBefore?: Date;
}
export interface ListFlywheelsRequest {
  Filter?: FlywheelFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface FlywheelSummary {
  FlywheelArn?: string;
  ActiveModelArn?: string;
  DataLakeS3Uri?: string;
  Status?: FlywheelStatus;
  ModelType?: ModelType;
  Message?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LatestFlywheelIteration?: string;
}
export type FlywheelSummaryList = FlywheelSummary[];
export interface ListFlywheelsResponse {
  FlywheelSummaryList?: FlywheelSummary[];
  NextToken?: string;
}
export interface KeyPhrasesDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListKeyPhrasesDetectionJobsRequest {
  Filter?: KeyPhrasesDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type KeyPhrasesDetectionJobPropertiesList = KeyPhrasesDetectionJobProperties[];
export interface ListKeyPhrasesDetectionJobsResponse {
  KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];
  NextToken?: string;
}
export interface PiiEntitiesDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListPiiEntitiesDetectionJobsRequest {
  Filter?: PiiEntitiesDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type PiiEntitiesDetectionJobPropertiesList = PiiEntitiesDetectionJobProperties[];
export interface ListPiiEntitiesDetectionJobsResponse {
  PiiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];
  NextToken?: string;
}
export interface SentimentDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListSentimentDetectionJobsRequest {
  Filter?: SentimentDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type SentimentDetectionJobPropertiesList = SentimentDetectionJobProperties[];
export interface ListSentimentDetectionJobsResponse {
  SentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  ResourceArn?: string;
  Tags?: Tag[];
}
export interface TargetedSentimentDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListTargetedSentimentDetectionJobsRequest {
  Filter?: TargetedSentimentDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type TargetedSentimentDetectionJobPropertiesList = TargetedSentimentDetectionJobProperties[];
export interface ListTargetedSentimentDetectionJobsResponse {
  TargetedSentimentDetectionJobPropertiesList?: TargetedSentimentDetectionJobProperties[];
  NextToken?: string;
}
export interface TopicsDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
export interface ListTopicsDetectionJobsRequest {
  Filter?: TopicsDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export type TopicsDetectionJobPropertiesList = TopicsDetectionJobProperties[];
export interface ListTopicsDetectionJobsResponse {
  TopicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];
  NextToken?: string;
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  ResourcePolicy: string;
  PolicyRevisionId?: string;
}
export interface PutResourcePolicyResponse {
  PolicyRevisionId?: string;
}
export interface StartDocumentClassificationJobRequest {
  JobName?: string;
  DocumentClassifierArn?: string;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
  FlywheelArn?: string;
}
export interface StartDocumentClassificationJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
  DocumentClassifierArn?: string;
}
export interface StartDominantLanguageDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
}
export interface StartDominantLanguageDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export interface StartEntitiesDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  EntityRecognizerArn?: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
  FlywheelArn?: string;
}
export interface StartEntitiesDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
  EntityRecognizerArn?: string;
}
export interface StartEventsDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
  TargetEventTypes: string[];
  Tags?: Tag[];
}
export interface StartEventsDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export interface StartFlywheelIterationRequest {
  FlywheelArn: string;
  ClientRequestToken?: string;
}
export interface StartFlywheelIterationResponse {
  FlywheelArn?: string;
  FlywheelIterationId?: string;
}
export interface StartKeyPhrasesDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
}
export interface StartKeyPhrasesDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export interface StartPiiEntitiesDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  Mode: PiiEntitiesDetectionMode;
  RedactionConfig?: RedactionConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
  Tags?: Tag[];
}
export interface StartPiiEntitiesDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export interface StartSentimentDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
}
export interface StartSentimentDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export interface StartTargetedSentimentDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
}
export interface StartTargetedSentimentDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export type NumberOfTopicsInteger = number;
export interface StartTopicsDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  NumberOfTopics?: number;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Tag[];
}
export interface StartTopicsDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export interface StopDominantLanguageDetectionJobRequest {
  JobId: string;
}
export interface StopDominantLanguageDetectionJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopEntitiesDetectionJobRequest {
  JobId: string;
}
export interface StopEntitiesDetectionJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopEventsDetectionJobRequest {
  JobId: string;
}
export interface StopEventsDetectionJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopKeyPhrasesDetectionJobRequest {
  JobId: string;
}
export interface StopKeyPhrasesDetectionJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopPiiEntitiesDetectionJobRequest {
  JobId: string;
}
export interface StopPiiEntitiesDetectionJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopSentimentDetectionJobRequest {
  JobId: string;
}
export interface StopSentimentDetectionJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopTargetedSentimentDetectionJobRequest {
  JobId: string;
}
export interface StopTargetedSentimentDetectionJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopTrainingDocumentClassifierRequest {
  DocumentClassifierArn: string;
}
export interface StopTrainingDocumentClassifierResponse {}
export interface StopTrainingEntityRecognizerRequest {
  EntityRecognizerArn: string;
}
export interface StopTrainingEntityRecognizerResponse {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateEndpointRequest {
  EndpointArn: string;
  DesiredModelArn?: string;
  DesiredInferenceUnits?: number;
  DesiredDataAccessRoleArn?: string;
  FlywheelArn?: string;
}
export interface UpdateEndpointResponse {
  DesiredModelArn?: string;
}
export interface UpdateDataSecurityConfig {
  ModelKmsKeyId?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export interface UpdateFlywheelRequest {
  FlywheelArn: string;
  ActiveModelArn?: string;
  DataAccessRoleArn?: string;
  DataSecurityConfig?: UpdateDataSecurityConfig;
}
export interface UpdateFlywheelResponse {
  FlywheelProperties?: FlywheelProperties;
}
export type InvalidRequestReason = "INVALID_DOCUMENT" | (string & {});
export type InvalidRequestDetailReason =
  | "DOCUMENT_SIZE_EXCEEDED"
  | "UNSUPPORTED_DOC_TYPE"
  | "PAGE_LIMIT_EXCEEDED"
  | "TEXTRACT_ACCESS_DENIED"
  | (string & {});
export interface InvalidRequestDetail {
  Reason?: InvalidRequestDetailReason;
}
export type BatchDetectDominantLanguageError =
  | BatchSizeLimitExceededException
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | CommonErrors;
/**
 * Determines the dominant language of the input text for a batch of documents. For a list
 * of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.
 */
export const batchDetectDominantLanguage: API.OperationMethod<
  BatchDetectDominantLanguageRequest,
  BatchDetectDominantLanguageResponse,
  BatchDetectDominantLanguageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<BatchDetectDominantLanguageRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<BatchDetectDominantLanguageResponse>,
  errors: [
    BatchSizeLimitExceededException,
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDetectDominantLanguage",
}));

export type BatchDetectEntitiesError =
  | BatchSizeLimitExceededException
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects the text of a batch of documents for named entities and returns information
 * about them. For more information about named entities, see
 * Entities in the Comprehend Developer Guide.
 */
export const batchDetectEntities: API.OperationMethod<
  BatchDetectEntitiesRequest,
  BatchDetectEntitiesResponse,
  BatchDetectEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<BatchDetectEntitiesRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<BatchDetectEntitiesResponse>,
  errors: [
    BatchSizeLimitExceededException,
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDetectEntities",
}));

export type BatchDetectKeyPhrasesError =
  | BatchSizeLimitExceededException
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Detects the key noun phrases found in a batch of documents.
 */
export const batchDetectKeyPhrases: API.OperationMethod<
  BatchDetectKeyPhrasesRequest,
  BatchDetectKeyPhrasesResponse,
  BatchDetectKeyPhrasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<BatchDetectKeyPhrasesRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<BatchDetectKeyPhrasesResponse>,
  errors: [
    BatchSizeLimitExceededException,
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDetectKeyPhrases",
}));

export type BatchDetectSentimentError =
  | BatchSizeLimitExceededException
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects a batch of documents and returns an inference of the prevailing sentiment,
 * `POSITIVE`, `NEUTRAL`, `MIXED`, or `NEGATIVE`,
 * in each one.
 */
export const batchDetectSentiment: API.OperationMethod<
  BatchDetectSentimentRequest,
  BatchDetectSentimentResponse,
  BatchDetectSentimentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<BatchDetectSentimentRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<BatchDetectSentimentResponse>,
  errors: [
    BatchSizeLimitExceededException,
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDetectSentiment",
}));

export type BatchDetectSyntaxError =
  | BatchSizeLimitExceededException
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects the text of a batch of documents for the syntax and part of speech of the words
 * in the document and returns information about them. For more information, see
 * Syntax in the Comprehend Developer Guide.
 */
export const batchDetectSyntax: API.OperationMethod<
  BatchDetectSyntaxRequest,
  BatchDetectSyntaxResponse,
  BatchDetectSyntaxError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<BatchDetectSyntaxRequest>,
  output: __S(36, __c4, 4) as any as S.Schema<BatchDetectSyntaxResponse>,
  errors: [
    BatchSizeLimitExceededException,
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDetectSyntax",
}));

export type BatchDetectTargetedSentimentError =
  | BatchSizeLimitExceededException
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects a batch of documents and returns a sentiment analysis
 * for each entity identified in the documents.
 *
 * For more information about targeted sentiment, see Targeted sentiment in the *Amazon Comprehend Developer Guide*.
 */
export const batchDetectTargetedSentiment: API.OperationMethod<
  BatchDetectTargetedSentimentRequest,
  BatchDetectTargetedSentimentResponse,
  BatchDetectTargetedSentimentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<BatchDetectTargetedSentimentRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<BatchDetectTargetedSentimentResponse>,
  errors: [
    BatchSizeLimitExceededException,
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDetectTargetedSentiment",
}));

export type ClassifyDocumentError =
  | InternalServerException
  | InvalidRequestException
  | ResourceUnavailableException
  | TextSizeLimitExceededException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Creates a classification request to analyze a single document in real-time. `ClassifyDocument`
 * supports the following model types:
 *
 * - Custom classifier - a custom model that you have created and trained.
 * For input, you can provide plain text, a single-page document (PDF, Word, or image), or
 * Amazon Textract API output. For more information, see Custom classification in the *Amazon Comprehend Developer Guide*.
 *
 * - Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying
 * input prompts for generative AI applications.
 * For input, you provide English plain text input.
 * For prompt safety classification, the response includes only the `Classes` field.
 * For more information about prompt safety classifiers, see Prompt safety classification in the *Amazon Comprehend Developer Guide*.
 *
 * If the system detects errors while processing a page in the input document,
 * the API response includes an `Errors` field that describes the errors.
 *
 * If the system detects a document-level error in your input document, the API returns an
 * `InvalidRequestException` error response.
 * For details about this exception, see
 *
 * Errors in semi-structured documents in the Comprehend Developer Guide.
 */
export const classifyDocument: API.OperationMethod<
  ClassifyDocumentRequest,
  ClassifyDocumentResponse,
  ClassifyDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<ClassifyDocumentRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<ClassifyDocumentResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceUnavailableException,
    TextSizeLimitExceededException,
    NotAuthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ClassifyDocument",
}));

export type ContainsPiiEntitiesError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Analyzes input text for the presence of personally identifiable information (PII) and
 * returns the labels of identified PII entity types such as name, address, bank account number,
 * or phone number.
 */
export const containsPiiEntities: API.OperationMethod<
  ContainsPiiEntitiesRequest,
  ContainsPiiEntitiesResponse,
  ContainsPiiEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<ContainsPiiEntitiesRequest>,
  output: __S(65, __c8, 1) as any as S.Schema<ContainsPiiEntitiesResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ContainsPiiEntities",
}));

export type CreateDatasetError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Creates a dataset to upload training or test data for a model associated with a flywheel.
 * For more information about datasets, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const createDataset: API.OperationMethod<
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<CreateDatasetRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<CreateDatasetResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataset",
}));

export type CreateDocumentClassifierError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | ResourceLimitExceededException
  | TooManyRequestsException
  | TooManyTagsException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Creates a new document classifier that you can use to categorize documents. To create a
 * classifier, you provide a set of training documents that are labeled with the categories that you
 * want to use. For more information, see
 * Training classifier models
 * in the Comprehend Developer Guide.
 */
export const createDocumentClassifier: API.OperationMethod<
  CreateDocumentClassifierRequest,
  CreateDocumentClassifierResponse,
  CreateDocumentClassifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<CreateDocumentClassifierRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<CreateDocumentClassifierResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    ResourceLimitExceededException,
    TooManyRequestsException,
    TooManyTagsException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDocumentClassifier",
}));

export type CreateEndpointError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Creates a model-specific endpoint for synchronous inference for a previously trained
 * custom model
 * For information about endpoints, see Managing endpoints.
 */
export const createEndpoint: API.OperationMethod<
  CreateEndpointRequest,
  CreateEndpointResponse,
  CreateEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<CreateEndpointRequest>,
  output: __S(87, __c10, 7) as any as S.Schema<CreateEndpointResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEndpoint",
}));

export type CreateEntityRecognizerError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | ResourceLimitExceededException
  | TooManyRequestsException
  | TooManyTagsException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Creates an entity recognizer using submitted files. After your
 * `CreateEntityRecognizer` request is submitted, you can check job status using the
 * `DescribeEntityRecognizer` API.
 */
export const createEntityRecognizer: API.OperationMethod<
  CreateEntityRecognizerRequest,
  CreateEntityRecognizerResponse,
  CreateEntityRecognizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<CreateEntityRecognizerRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<CreateEntityRecognizerResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    ResourceLimitExceededException,
    TooManyRequestsException,
    TooManyTagsException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEntityRecognizer",
}));

export type CreateFlywheelError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | TooManyTagsException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification
 * or custom entity recognition. You can create a flywheel to start with an existing trained model, or
 * Comprehend can create and train a new model.
 *
 * When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training
 * data and test data for all versions of the model.
 *
 * To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's
 * training data and test data into the flywheel's data lake.
 *
 * To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data)
 * when you create the flywheel.
 *
 * For more information about flywheels, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const createFlywheel: API.OperationMethod<
  CreateFlywheelRequest,
  CreateFlywheelResponse,
  CreateFlywheelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<CreateFlywheelRequest>,
  output: __S(99, __c12, 3) as any as S.Schema<CreateFlywheelResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
    TooManyTagsException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFlywheel",
}));

export type DeleteDocumentClassifierError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a previously created document classifier
 *
 * Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted.
 * If an active inference job is using the model, a `ResourceInUseException` will be
 * returned.
 *
 * This is an asynchronous action that puts the classifier into a DELETING state, and it is
 * then removed by a background job. Once removed, the classifier disappears from your account
 * and is no longer available for use.
 */
export const deleteDocumentClassifier: API.OperationMethod<
  DeleteDocumentClassifierRequest,
  DeleteDocumentClassifierResponse,
  DeleteDocumentClassifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<DeleteDocumentClassifierRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<DeleteDocumentClassifierResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDocumentClassifier",
}));

export type DeleteEndpointError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a model-specific endpoint for a previously-trained custom model. All endpoints
 * must be deleted in order for the model to be deleted.
 * For information about endpoints, see Managing endpoints.
 */
export const deleteEndpoint: API.OperationMethod<
  DeleteEndpointRequest,
  DeleteEndpointResponse,
  DeleteEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<DeleteEndpointRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<DeleteEndpointResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEndpoint",
}));

export type DeleteEntityRecognizerError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an entity recognizer.
 *
 * Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted.
 * If an active inference job is using the model, a `ResourceInUseException` will be
 * returned.
 *
 * This is an asynchronous action that puts the recognizer into a DELETING state, and it is
 * then removed by a background job. Once removed, the recognizer disappears from your account
 * and is no longer available for use.
 */
export const deleteEntityRecognizer: API.OperationMethod<
  DeleteEntityRecognizerRequest,
  DeleteEntityRecognizerResponse,
  DeleteEntityRecognizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104, __c13, 0) as any as S.Schema<DeleteEntityRecognizerRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<DeleteEntityRecognizerResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEntityRecognizer",
}));

export type DeleteFlywheelError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a flywheel. When you delete the flywheel, Amazon Comprehend
 * does not delete the data lake or the model associated with the flywheel.
 *
 * For more information about flywheels, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const deleteFlywheel: API.OperationMethod<
  DeleteFlywheelRequest,
  DeleteFlywheelResponse,
  DeleteFlywheelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<DeleteFlywheelRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<DeleteFlywheelResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFlywheel",
}));

export type DeleteResourcePolicyError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a resource-based policy that is attached to a custom model.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DescribeDatasetError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns information about the dataset that you specify.
 * For more information about datasets, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const describeDataset: API.OperationMethod<
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<DescribeDatasetRequest>,
  output: __S(109, __c13, 5) as any as S.Schema<DescribeDatasetResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataset",
}));

export type DescribeDocumentClassificationJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a document classification job. Use this operation to
 * get the status of a classification job.
 */
export const describeDocumentClassificationJob: API.OperationMethod<
  DescribeDocumentClassificationJobRequest,
  DescribeDocumentClassificationJobResponse,
  DescribeDocumentClassificationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<DescribeDocumentClassificationJobRequest>,
  output: __S(114, __c14, 2) as any as S.Schema<DescribeDocumentClassificationJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDocumentClassificationJob",
}));

export type DescribeDocumentClassifierError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a document classifier.
 */
export const describeDocumentClassifier: API.OperationMethod<
  DescribeDocumentClassifierRequest,
  DescribeDocumentClassifierResponse,
  DescribeDocumentClassifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<DescribeDocumentClassifierRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<DescribeDocumentClassifierResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDocumentClassifier",
}));

export type DescribeDominantLanguageDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a dominant language detection job. Use this operation
 * to get the status of a detection job.
 */
export const describeDominantLanguageDetectionJob: API.OperationMethod<
  DescribeDominantLanguageDetectionJobRequest,
  DescribeDominantLanguageDetectionJobResponse,
  DescribeDominantLanguageDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<DescribeDominantLanguageDetectionJobRequest>,
  output: __S(122, __c15, 2) as any as S.Schema<DescribeDominantLanguageDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDominantLanguageDetectionJob",
}));

export type DescribeEndpointError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a specific endpoint. Use this operation to get the
 * status of an endpoint.
 * For information about endpoints, see Managing endpoints.
 */
export const describeEndpoint: API.OperationMethod<
  DescribeEndpointRequest,
  DescribeEndpointResponse,
  DescribeEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<DescribeEndpointRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<DescribeEndpointResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpoint",
}));

export type DescribeEntitiesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with an entities detection job. Use this operation to get
 * the status of a detection job.
 */
export const describeEntitiesDetectionJob: API.OperationMethod<
  DescribeEntitiesDetectionJobRequest,
  DescribeEntitiesDetectionJobResponse,
  DescribeEntitiesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<DescribeEntitiesDetectionJobRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<DescribeEntitiesDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEntitiesDetectionJob",
}));

export type DescribeEntityRecognizerError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides details about an entity recognizer including status, S3 buckets containing
 * training data, recognizer metadata, metrics, and so on.
 */
export const describeEntityRecognizer: API.OperationMethod<
  DescribeEntityRecognizerRequest,
  DescribeEntityRecognizerResponse,
  DescribeEntityRecognizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<DescribeEntityRecognizerRequest>,
  output: __S(136, __c17, 0) as any as S.Schema<DescribeEntityRecognizerResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEntityRecognizer",
}));

export type DescribeEventsDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Gets the status and details of an events detection job.
 */
export const describeEventsDetectionJob: API.OperationMethod<
  DescribeEventsDetectionJobRequest,
  DescribeEventsDetectionJobResponse,
  DescribeEventsDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<DescribeEventsDetectionJobRequest>,
  output: __S(139, __c17, 3) as any as S.Schema<DescribeEventsDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
    NotAuthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventsDetectionJob",
}));

export type DescribeFlywheelError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides configuration information about the flywheel. For more information about flywheels, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const describeFlywheel: API.OperationMethod<
  DescribeFlywheelRequest,
  DescribeFlywheelResponse,
  DescribeFlywheelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140, __c17, 4) as any as S.Schema<DescribeFlywheelRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<DescribeFlywheelResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlywheel",
}));

export type DescribeFlywheelIterationError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieve the configuration properties of a flywheel iteration.
 * For more information about flywheels, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const describeFlywheelIteration: API.OperationMethod<
  DescribeFlywheelIterationRequest,
  DescribeFlywheelIterationResponse,
  DescribeFlywheelIterationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<DescribeFlywheelIterationRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<DescribeFlywheelIterationResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlywheelIteration",
}));

export type DescribeKeyPhrasesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a key phrases detection job. Use this operation to get
 * the status of a detection job.
 */
export const describeKeyPhrasesDetectionJob: API.OperationMethod<
  DescribeKeyPhrasesDetectionJobRequest,
  DescribeKeyPhrasesDetectionJobResponse,
  DescribeKeyPhrasesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<DescribeKeyPhrasesDetectionJobRequest>,
  output: __S(149, __c18, 5) as any as S.Schema<DescribeKeyPhrasesDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeKeyPhrasesDetectionJob",
}));

export type DescribePiiEntitiesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a PII entities detection job. For example, you can use
 * this operation to get the job status.
 */
export const describePiiEntitiesDetectionJob: API.OperationMethod<
  DescribePiiEntitiesDetectionJobRequest,
  DescribePiiEntitiesDetectionJobResponse,
  DescribePiiEntitiesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(150, __c18, 6) as any as S.Schema<DescribePiiEntitiesDetectionJobRequest>,
  output: __S(153, __c19, 1) as any as S.Schema<DescribePiiEntitiesDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePiiEntitiesDetectionJob",
}));

export type DescribeResourcePolicyError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets the details of a resource-based policy that is attached to a custom model, including
 * the JSON body of the policy.
 */
export const describeResourcePolicy: API.OperationMethod<
  DescribeResourcePolicyRequest,
  DescribeResourcePolicyResponse,
  DescribeResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<DescribeResourcePolicyRequest>,
  output: __S(155, __c19, 3) as any as S.Schema<DescribeResourcePolicyResponse>,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourcePolicy",
}));

export type DescribeSentimentDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a sentiment detection job. Use this operation to get
 * the status of a detection job.
 */
export const describeSentimentDetectionJob: API.OperationMethod<
  DescribeSentimentDetectionJobRequest,
  DescribeSentimentDetectionJobResponse,
  DescribeSentimentDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(156, __c19, 4) as any as S.Schema<DescribeSentimentDetectionJobRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<DescribeSentimentDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSentimentDetectionJob",
}));

export type DescribeTargetedSentimentDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a targeted sentiment detection job. Use this operation
 * to get the status of the job.
 */
export const describeTargetedSentimentDetectionJob: API.OperationMethod<
  DescribeTargetedSentimentDetectionJobRequest,
  DescribeTargetedSentimentDetectionJobResponse,
  DescribeTargetedSentimentDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158, __c19, 6) as any as S.Schema<DescribeTargetedSentimentDetectionJobRequest>,
  output: __S(159, __c19, 7) as any as S.Schema<DescribeTargetedSentimentDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTargetedSentimentDetectionJob",
}));

export type DescribeTopicsDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a topic detection job. Use this operation to get
 * the status of a detection job.
 */
export const describeTopicsDetectionJob: API.OperationMethod<
  DescribeTopicsDetectionJobRequest,
  DescribeTopicsDetectionJobResponse,
  DescribeTopicsDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160, __c20, 0) as any as S.Schema<DescribeTopicsDetectionJobRequest>,
  output: __S(162, __c20, 2) as any as S.Schema<DescribeTopicsDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTopicsDetectionJob",
}));

export type DetectDominantLanguageError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | CommonErrors;
/**
 * Determines the dominant language of the input text. For a list of languages that Amazon
 * Comprehend can detect, see Amazon Comprehend Supported Languages.
 */
export const detectDominantLanguage: API.OperationMethod<
  DetectDominantLanguageRequest,
  DetectDominantLanguageResponse,
  DetectDominantLanguageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<DetectDominantLanguageRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<DetectDominantLanguageResponse>,
  errors: [InternalServerException, InvalidRequestException, TextSizeLimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectDominantLanguage",
}));

export type DetectEntitiesError =
  | InternalServerException
  | InvalidRequestException
  | ResourceUnavailableException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Detects named entities in input text when you use the pre-trained model.
 * Detects custom entities if you have a custom entity recognition model.
 *
 * When detecting named entities using the pre-trained model, use plain text as the input.
 * For more information about named entities, see
 * Entities in the Comprehend Developer Guide.
 *
 * When you use a custom entity recognition model,
 * you can input plain text or you can upload a single-page input document (text, PDF, Word, or image).
 *
 * If the system detects errors while processing a page in the input document, the API response
 * includes an entry in `Errors` for each error.
 *
 * If the system detects a document-level error in your input document, the API returns an
 * `InvalidRequestException` error response.
 * For details about this exception, see
 *
 * Errors in semi-structured documents in the Comprehend Developer Guide.
 */
export const detectEntities: API.OperationMethod<
  DetectEntitiesRequest,
  DetectEntitiesResponse,
  DetectEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<DetectEntitiesRequest>,
  output: __S(174, __c21, 6) as any as S.Schema<DetectEntitiesResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceUnavailableException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectEntities",
}));

export type DetectKeyPhrasesError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Detects the key noun phrases found in the text.
 */
export const detectKeyPhrases: API.OperationMethod<
  DetectKeyPhrasesRequest,
  DetectKeyPhrasesResponse,
  DetectKeyPhrasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<DetectKeyPhrasesRequest>,
  output: __S(176, __c22, 0) as any as S.Schema<DetectKeyPhrasesResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectKeyPhrases",
}));

export type DetectPiiEntitiesError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects the input text for entities that contain personally identifiable information
 * (PII) and returns information about them.
 */
export const detectPiiEntities: API.OperationMethod<
  DetectPiiEntitiesRequest,
  DetectPiiEntitiesResponse,
  DetectPiiEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177, __c22, 1) as any as S.Schema<DetectPiiEntitiesRequest>,
  output: __S(180, __c22, 4) as any as S.Schema<DetectPiiEntitiesResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectPiiEntities",
}));

export type DetectSentimentError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects text and returns an inference of the prevailing sentiment
 * (`POSITIVE`, `NEUTRAL`, `MIXED`, or `NEGATIVE`).
 */
export const detectSentiment: API.OperationMethod<
  DetectSentimentRequest,
  DetectSentimentResponse,
  DetectSentimentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181, __c22, 5) as any as S.Schema<DetectSentimentRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<DetectSentimentResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectSentiment",
}));

export type DetectSyntaxError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects text for syntax and the part of speech of words in the document. For more
 * information, see
 * Syntax in the Comprehend Developer Guide.
 */
export const detectSyntax: API.OperationMethod<
  DetectSyntaxRequest,
  DetectSyntaxResponse,
  DetectSyntaxError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<DetectSyntaxRequest>,
  output: __S(183, __c22, 7) as any as S.Schema<DetectSyntaxResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectSyntax",
}));

export type DetectTargetedSentimentError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Inspects the input text and returns a sentiment analysis for each entity identified in the text.
 *
 * For more information about targeted sentiment, see Targeted sentiment in the *Amazon Comprehend Developer Guide*.
 */
export const detectTargetedSentiment: API.OperationMethod<
  DetectTargetedSentimentRequest,
  DetectTargetedSentimentResponse,
  DetectTargetedSentimentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<DetectTargetedSentimentRequest>,
  output: __S(185, __c23, 1) as any as S.Schema<DetectTargetedSentimentResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectTargetedSentiment",
}));

export type DetectToxicContentError =
  | InternalServerException
  | InvalidRequestException
  | TextSizeLimitExceededException
  | UnsupportedLanguageException
  | CommonErrors;
/**
 * Performs toxicity analysis on the list of text strings that you provide as input.
 * The API response contains a results list that matches the size of the input list.
 * For more information about toxicity detection, see Toxicity detection in the *Amazon Comprehend Developer Guide*.
 */
export const detectToxicContent: API.OperationMethod<
  DetectToxicContentRequest,
  DetectToxicContentResponse,
  DetectToxicContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188, __c23, 4) as any as S.Schema<DetectToxicContentRequest>,
  output: __S(191, __c23, 7) as any as S.Schema<DetectToxicContentResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TextSizeLimitExceededException,
    UnsupportedLanguageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectToxicContent",
}));

export type ImportModelError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Creates a new custom model that replicates a source custom model that you import. The
 * source model can be in your Amazon Web Services account or another one.
 *
 * If the source model is in another Amazon Web Services account, then it must have a resource-based policy
 * that authorizes you to import it.
 *
 * The source model must be in the same Amazon Web Services Region that you're using when you import. You
 * can't import a model that's in a different Region.
 */
export const importModel: API.OperationMethod<
  ImportModelRequest,
  ImportModelResponse,
  ImportModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192, __c24, 0) as any as S.Schema<ImportModelRequest>,
  output: __S(193, __c24, 1) as any as S.Schema<ImportModelResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportModel",
}));

export type ListDatasetsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List the datasets that you have configured in this Region. For more information about datasets, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const listDatasets: API.PaginatedOperationMethod<
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDatasetsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<ListDatasetsRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<ListDatasetsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDocumentClassificationJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the documentation classification jobs that you have submitted.
 */
export const listDocumentClassificationJobs: API.PaginatedOperationMethod<
  ListDocumentClassificationJobsRequest,
  ListDocumentClassificationJobsResponse,
  ListDocumentClassificationJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(199, __c24, 7) as any as S.Schema<ListDocumentClassificationJobsRequest>,
  output: __S(201, __c25, 1) as any as S.Schema<ListDocumentClassificationJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDocumentClassificationJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDocumentClassifiersError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the document classifiers that you have created.
 */
export const listDocumentClassifiers: API.PaginatedOperationMethod<
  ListDocumentClassifiersRequest,
  ListDocumentClassifiersResponse,
  ListDocumentClassifiersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<ListDocumentClassifiersRequest>,
  output: __S(205, __c25, 5) as any as S.Schema<ListDocumentClassifiersResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDocumentClassifiers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDocumentClassifierSummariesError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of summaries of the document classifiers that you have created
 */
export const listDocumentClassifierSummaries: API.PaginatedOperationMethod<
  ListDocumentClassifierSummariesRequest,
  ListDocumentClassifierSummariesResponse,
  ListDocumentClassifierSummariesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(206, __c25, 6) as any as S.Schema<ListDocumentClassifierSummariesRequest>,
  output: __S(209, __c26, 1) as any as S.Schema<ListDocumentClassifierSummariesResponse>,
  errors: [InternalServerException, InvalidRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDocumentClassifierSummaries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDominantLanguageDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the dominant language detection jobs that you have submitted.
 */
export const listDominantLanguageDetectionJobs: API.PaginatedOperationMethod<
  ListDominantLanguageDetectionJobsRequest,
  ListDominantLanguageDetectionJobsResponse,
  ListDominantLanguageDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<ListDominantLanguageDetectionJobsRequest>,
  output: __S(212, __c26, 4) as any as S.Schema<ListDominantLanguageDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDominantLanguageDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEndpointsError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of all existing endpoints that you've created.
 * For information about endpoints, see Managing endpoints.
 */
export const listEndpoints: API.PaginatedOperationMethod<
  ListEndpointsRequest,
  ListEndpointsResponse,
  ListEndpointsError,
  Credentials | HttpClient.HttpClient,
  EndpointProperties
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(214, __c26, 6) as any as S.Schema<ListEndpointsRequest>,
  output: __S(216, __c27, 0) as any as S.Schema<ListEndpointsResponse>,
  errors: [InternalServerException, InvalidRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEndpoints",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EndpointPropertiesList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEntitiesDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the entity detection jobs that you have submitted.
 */
export const listEntitiesDetectionJobs: API.PaginatedOperationMethod<
  ListEntitiesDetectionJobsRequest,
  ListEntitiesDetectionJobsResponse,
  ListEntitiesDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(217, __c27, 1) as any as S.Schema<ListEntitiesDetectionJobsRequest>,
  output: __S(219, __c27, 3) as any as S.Schema<ListEntitiesDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntitiesDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEntityRecognizersError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the properties of all entity recognizers that you created, including
 * recognizers currently in training. Allows you to filter the list of recognizers based on
 * criteria such as status and submission time. This call returns up to 500 entity recognizers in
 * the list, with a default number of 100 recognizers in the list.
 *
 * The results of this list are not in any particular order. Please get the list and sort
 * locally if needed.
 */
export const listEntityRecognizers: API.PaginatedOperationMethod<
  ListEntityRecognizersRequest,
  ListEntityRecognizersResponse,
  ListEntityRecognizersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(221, __c27, 5) as any as S.Schema<ListEntityRecognizersRequest>,
  output: __S(223, __c27, 7) as any as S.Schema<ListEntityRecognizersResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntityRecognizers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEntityRecognizerSummariesError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of summaries for the entity recognizers that you have created.
 */
export const listEntityRecognizerSummaries: API.PaginatedOperationMethod<
  ListEntityRecognizerSummariesRequest,
  ListEntityRecognizerSummariesResponse,
  ListEntityRecognizerSummariesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(224, __c28, 0) as any as S.Schema<ListEntityRecognizerSummariesRequest>,
  output: __S(227, __c28, 3) as any as S.Schema<ListEntityRecognizerSummariesResponse>,
  errors: [InternalServerException, InvalidRequestException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntityRecognizerSummaries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEventsDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Gets a list of the events detection jobs that you have submitted.
 */
export const listEventsDetectionJobs: API.PaginatedOperationMethod<
  ListEventsDetectionJobsRequest,
  ListEventsDetectionJobsResponse,
  ListEventsDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(229, __c28, 5) as any as S.Schema<ListEventsDetectionJobsRequest>,
  output: __S(231, __c28, 7) as any as S.Schema<ListEventsDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
    NotAuthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventsDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFlywheelIterationHistoryError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Information about the history of a flywheel iteration.
 * For more information about flywheels, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const listFlywheelIterationHistory: API.PaginatedOperationMethod<
  ListFlywheelIterationHistoryRequest,
  ListFlywheelIterationHistoryResponse,
  ListFlywheelIterationHistoryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(233, __c29, 1) as any as S.Schema<ListFlywheelIterationHistoryRequest>,
  output: __S(235, __c29, 3) as any as S.Schema<ListFlywheelIterationHistoryResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlywheelIterationHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFlywheelsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the flywheels that you have created.
 */
export const listFlywheels: API.PaginatedOperationMethod<
  ListFlywheelsRequest,
  ListFlywheelsResponse,
  ListFlywheelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(237, __c29, 5) as any as S.Schema<ListFlywheelsRequest>,
  output: __S(240, __c30, 0) as any as S.Schema<ListFlywheelsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlywheels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListKeyPhrasesDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Get a list of key phrase detection jobs that you have submitted.
 */
export const listKeyPhrasesDetectionJobs: API.PaginatedOperationMethod<
  ListKeyPhrasesDetectionJobsRequest,
  ListKeyPhrasesDetectionJobsResponse,
  ListKeyPhrasesDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<ListKeyPhrasesDetectionJobsRequest>,
  output: __S(243, __c30, 3) as any as S.Schema<ListKeyPhrasesDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListKeyPhrasesDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPiiEntitiesDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the PII entity detection jobs that you have submitted.
 */
export const listPiiEntitiesDetectionJobs: API.PaginatedOperationMethod<
  ListPiiEntitiesDetectionJobsRequest,
  ListPiiEntitiesDetectionJobsResponse,
  ListPiiEntitiesDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  PiiEntitiesDetectionJobProperties
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(244, __c30, 4) as any as S.Schema<ListPiiEntitiesDetectionJobsRequest>,
  output: __S(246, __c30, 6) as any as S.Schema<ListPiiEntitiesDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPiiEntitiesDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PiiEntitiesDetectionJobPropertiesList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSentimentDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of sentiment detection jobs that you have submitted.
 */
export const listSentimentDetectionJobs: API.PaginatedOperationMethod<
  ListSentimentDetectionJobsRequest,
  ListSentimentDetectionJobsResponse,
  ListSentimentDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(247, __c30, 7) as any as S.Schema<ListSentimentDetectionJobsRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<ListSentimentDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSentimentDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists all tags associated with a given Amazon Comprehend resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(249, __c31, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTargetedSentimentDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of targeted sentiment detection jobs that you have submitted.
 */
export const listTargetedSentimentDetectionJobs: API.PaginatedOperationMethod<
  ListTargetedSentimentDetectionJobsRequest,
  ListTargetedSentimentDetectionJobsResponse,
  ListTargetedSentimentDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(251, __c31, 3) as any as S.Schema<ListTargetedSentimentDetectionJobsRequest>,
  output: __S(252, __c31, 4) as any as S.Schema<ListTargetedSentimentDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetedSentimentDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTopicsDetectionJobsError =
  | InternalServerException
  | InvalidFilterException
  | InvalidRequestException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of the topic detection jobs that you have submitted.
 */
export const listTopicsDetectionJobs: API.PaginatedOperationMethod<
  ListTopicsDetectionJobsRequest,
  ListTopicsDetectionJobsResponse,
  ListTopicsDetectionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(253, __c31, 5) as any as S.Schema<ListTopicsDetectionJobsRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<ListTopicsDetectionJobsResponse>,
  errors: [
    InternalServerException,
    InvalidFilterException,
    InvalidRequestException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTopicsDetectionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutResourcePolicyError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Attaches a resource-based policy to a custom model. You can use this policy to authorize
 * an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon
 * Comprehend in their account.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256, __c32, 0) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(257, __c32, 1) as any as S.Schema<PutResourcePolicyResponse>,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type StartDocumentClassificationJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous document classification job using a custom classification model. Use the
 * `DescribeDocumentClassificationJob`
 * operation to track the progress of the job.
 */
export const startDocumentClassificationJob: API.OperationMethod<
  StartDocumentClassificationJobRequest,
  StartDocumentClassificationJobResponse,
  StartDocumentClassificationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(258, __c32, 2) as any as S.Schema<StartDocumentClassificationJobRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<StartDocumentClassificationJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDocumentClassificationJob",
}));

export type StartDominantLanguageDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous dominant language detection job for a collection of documents. Use
 * the operation to track the status
 * of a job.
 */
export const startDominantLanguageDetectionJob: API.OperationMethod<
  StartDominantLanguageDetectionJobRequest,
  StartDominantLanguageDetectionJobResponse,
  StartDominantLanguageDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(260, __c32, 4) as any as S.Schema<StartDominantLanguageDetectionJobRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<StartDominantLanguageDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDominantLanguageDetectionJob",
}));

export type StartEntitiesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.
 *
 * This API can be used for either standard entity detection or custom entity recognition. In
 * order to be used for custom entity recognition, the optional `EntityRecognizerArn`
 * must be used in order to provide access to the recognizer being used to detect the custom
 * entity.
 */
export const startEntitiesDetectionJob: API.OperationMethod<
  StartEntitiesDetectionJobRequest,
  StartEntitiesDetectionJobResponse,
  StartEntitiesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(262, __c32, 6) as any as S.Schema<StartEntitiesDetectionJobRequest>,
  output: __S(263, __c32, 7) as any as S.Schema<StartEntitiesDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartEntitiesDetectionJob",
}));

export type StartEventsDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | TooManyRequestsException
  | TooManyTagsException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Starts an asynchronous event detection job for a collection of documents.
 */
export const startEventsDetectionJob: API.OperationMethod<
  StartEventsDetectionJobRequest,
  StartEventsDetectionJobResponse,
  StartEventsDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(264, __c33, 0) as any as S.Schema<StartEventsDetectionJobRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<StartEventsDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    TooManyRequestsException,
    TooManyTagsException,
    NotAuthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartEventsDetectionJob",
}));

export type StartFlywheelIterationError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Start the flywheel iteration.This operation uses any new datasets to train a new model version.
 * For more information about flywheels, see
 * Flywheel overview in the *Amazon Comprehend Developer Guide*.
 */
export const startFlywheelIteration: API.OperationMethod<
  StartFlywheelIterationRequest,
  StartFlywheelIterationResponse,
  StartFlywheelIterationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(265, __c33, 1) as any as S.Schema<StartFlywheelIterationRequest>,
  output: __S(266, __c33, 2) as any as S.Schema<StartFlywheelIterationResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFlywheelIteration",
}));

export type StartKeyPhrasesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous key phrase detection job for a collection of documents. Use the
 * operation to track the status of a
 * job.
 */
export const startKeyPhrasesDetectionJob: API.OperationMethod<
  StartKeyPhrasesDetectionJobRequest,
  StartKeyPhrasesDetectionJobResponse,
  StartKeyPhrasesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(267, __c33, 3) as any as S.Schema<StartKeyPhrasesDetectionJobRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<StartKeyPhrasesDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartKeyPhrasesDetectionJob",
}));

export type StartPiiEntitiesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous PII entity detection job for a collection of documents.
 */
export const startPiiEntitiesDetectionJob: API.OperationMethod<
  StartPiiEntitiesDetectionJobRequest,
  StartPiiEntitiesDetectionJobResponse,
  StartPiiEntitiesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(268, __c33, 4) as any as S.Schema<StartPiiEntitiesDetectionJobRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<StartPiiEntitiesDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPiiEntitiesDetectionJob",
}));

export type StartSentimentDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous sentiment detection job for a collection of documents. Use the
 * operation to track the status of a
 * job.
 */
export const startSentimentDetectionJob: API.OperationMethod<
  StartSentimentDetectionJobRequest,
  StartSentimentDetectionJobResponse,
  StartSentimentDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(269, __c33, 5) as any as S.Schema<StartSentimentDetectionJobRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<StartSentimentDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSentimentDetectionJob",
}));

export type StartTargetedSentimentDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the
 * `DescribeTargetedSentimentDetectionJob` operation to track the status of a
 * job.
 */
export const startTargetedSentimentDetectionJob: API.OperationMethod<
  StartTargetedSentimentDetectionJobRequest,
  StartTargetedSentimentDetectionJobResponse,
  StartTargetedSentimentDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<StartTargetedSentimentDetectionJobRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<StartTargetedSentimentDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTargetedSentimentDetectionJob",
}));

export type StartTopicsDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceInUseException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Starts an asynchronous topic detection job. Use the
 * `DescribeTopicDetectionJob` operation to track the status of a job.
 */
export const startTopicsDetectionJob: API.OperationMethod<
  StartTopicsDetectionJobRequest,
  StartTopicsDetectionJobResponse,
  StartTopicsDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<StartTopicsDetectionJobRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<StartTopicsDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceInUseException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTopicsDetectionJob",
}));

export type StopDominantLanguageDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | CommonErrors;
/**
 * Stops a dominant language detection job in progress.
 *
 * If the job state is `IN_PROGRESS` the job is marked for termination and put
 * into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it
 * is put into the `COMPLETED` state; otherwise the job is stopped and put into the
 * `STOPPED` state.
 *
 * If the job is in the `COMPLETED` or `FAILED` state when you call the
 * `StopDominantLanguageDetectionJob` operation, the operation returns a 400
 * Internal Request Exception.
 *
 * When a job is stopped, any documents already processed are written to the output
 * location.
 */
export const stopDominantLanguageDetectionJob: API.OperationMethod<
  StopDominantLanguageDetectionJobRequest,
  StopDominantLanguageDetectionJobResponse,
  StopDominantLanguageDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(272, __c34, 0) as any as S.Schema<StopDominantLanguageDetectionJobRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<StopDominantLanguageDetectionJobResponse>,
  errors: [InternalServerException, InvalidRequestException, JobNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDominantLanguageDetectionJob",
}));

export type StopEntitiesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | CommonErrors;
/**
 * Stops an entities detection job in progress.
 *
 * If the job state is `IN_PROGRESS` the job is marked for termination and put
 * into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it
 * is put into the `COMPLETED` state; otherwise the job is stopped and put into the
 * `STOPPED` state.
 *
 * If the job is in the `COMPLETED` or `FAILED` state when you call the
 * `StopDominantLanguageDetectionJob` operation, the operation returns a 400
 * Internal Request Exception.
 *
 * When a job is stopped, any documents already processed are written to the output
 * location.
 */
export const stopEntitiesDetectionJob: API.OperationMethod<
  StopEntitiesDetectionJobRequest,
  StopEntitiesDetectionJobResponse,
  StopEntitiesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<StopEntitiesDetectionJobRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<StopEntitiesDetectionJobResponse>,
  errors: [InternalServerException, InvalidRequestException, JobNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopEntitiesDetectionJob",
}));

export type StopEventsDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Stops an events detection job in progress.
 */
export const stopEventsDetectionJob: API.OperationMethod<
  StopEventsDetectionJobRequest,
  StopEventsDetectionJobResponse,
  StopEventsDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(275, __c34, 3) as any as S.Schema<StopEventsDetectionJobRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<StopEventsDetectionJobResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    JobNotFoundException,
    NotAuthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopEventsDetectionJob",
}));

export type StopKeyPhrasesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | CommonErrors;
/**
 * Stops a key phrases detection job in progress.
 *
 * If the job state is `IN_PROGRESS` the job is marked for termination and put
 * into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it
 * is put into the `COMPLETED` state; otherwise the job is stopped and put into the
 * `STOPPED` state.
 *
 * If the job is in the `COMPLETED` or `FAILED` state when you call the
 * `StopDominantLanguageDetectionJob` operation, the operation returns a 400
 * Internal Request Exception.
 *
 * When a job is stopped, any documents already processed are written to the output
 * location.
 */
export const stopKeyPhrasesDetectionJob: API.OperationMethod<
  StopKeyPhrasesDetectionJobRequest,
  StopKeyPhrasesDetectionJobResponse,
  StopKeyPhrasesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(276, __c34, 4) as any as S.Schema<StopKeyPhrasesDetectionJobRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<StopKeyPhrasesDetectionJobResponse>,
  errors: [InternalServerException, InvalidRequestException, JobNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopKeyPhrasesDetectionJob",
}));

export type StopPiiEntitiesDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | CommonErrors;
/**
 * Stops a PII entities detection job in progress.
 */
export const stopPiiEntitiesDetectionJob: API.OperationMethod<
  StopPiiEntitiesDetectionJobRequest,
  StopPiiEntitiesDetectionJobResponse,
  StopPiiEntitiesDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(277, __c34, 5) as any as S.Schema<StopPiiEntitiesDetectionJobRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<StopPiiEntitiesDetectionJobResponse>,
  errors: [InternalServerException, InvalidRequestException, JobNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopPiiEntitiesDetectionJob",
}));

export type StopSentimentDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | CommonErrors;
/**
 * Stops a sentiment detection job in progress.
 *
 * If the job state is `IN_PROGRESS`, the job is marked for termination and put
 * into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it
 * is put into the `COMPLETED` state; otherwise the job is be stopped and put into the
 * `STOPPED` state.
 *
 * If the job is in the `COMPLETED` or `FAILED` state when you call the
 * `StopDominantLanguageDetectionJob` operation, the operation returns a 400
 * Internal Request Exception.
 *
 * When a job is stopped, any documents already processed are written to the output
 * location.
 */
export const stopSentimentDetectionJob: API.OperationMethod<
  StopSentimentDetectionJobRequest,
  StopSentimentDetectionJobResponse,
  StopSentimentDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<StopSentimentDetectionJobRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<StopSentimentDetectionJobResponse>,
  errors: [InternalServerException, InvalidRequestException, JobNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopSentimentDetectionJob",
}));

export type StopTargetedSentimentDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | JobNotFoundException
  | CommonErrors;
/**
 * Stops a targeted sentiment detection job in progress.
 *
 * If the job state is `IN_PROGRESS`, the job is marked for termination and put
 * into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it
 * is put into the `COMPLETED` state; otherwise the job is be stopped and put into the
 * `STOPPED` state.
 *
 * If the job is in the `COMPLETED` or `FAILED` state when you call the
 * `StopDominantLanguageDetectionJob` operation, the operation returns a 400
 * Internal Request Exception.
 *
 * When a job is stopped, any documents already processed are written to the output
 * location.
 */
export const stopTargetedSentimentDetectionJob: API.OperationMethod<
  StopTargetedSentimentDetectionJobRequest,
  StopTargetedSentimentDetectionJobResponse,
  StopTargetedSentimentDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(279, __c34, 7) as any as S.Schema<StopTargetedSentimentDetectionJobRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<StopTargetedSentimentDetectionJobResponse>,
  errors: [InternalServerException, InvalidRequestException, JobNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTargetedSentimentDetectionJob",
}));

export type StopTrainingDocumentClassifierError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Stops a document classifier training job while in progress.
 *
 * If the training job state is `TRAINING`, the job is marked for termination and
 * put into the `STOP_REQUESTED` state. If the training job completes before it can be
 * stopped, it is put into the `TRAINED`; otherwise the training job is stopped and
 * put into the `STOPPED` state and the service sends back an HTTP 200 response with
 * an empty HTTP body.
 */
export const stopTrainingDocumentClassifier: API.OperationMethod<
  StopTrainingDocumentClassifierRequest,
  StopTrainingDocumentClassifierResponse,
  StopTrainingDocumentClassifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280, __c35, 0) as any as S.Schema<StopTrainingDocumentClassifierRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<StopTrainingDocumentClassifierResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTrainingDocumentClassifier",
}));

export type StopTrainingEntityRecognizerError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Stops an entity recognizer training job while in progress.
 *
 * If the training job state is `TRAINING`, the job is marked for termination and
 * put into the `STOP_REQUESTED` state. If the training job completes before it can be
 * stopped, it is put into the `TRAINED`; otherwise the training job is stopped and
 * putted into the `STOPPED` state and the service sends back an HTTP 200 response
 * with an empty HTTP body.
 */
export const stopTrainingEntityRecognizer: API.OperationMethod<
  StopTrainingEntityRecognizerRequest,
  StopTrainingEntityRecognizerResponse,
  StopTrainingEntityRecognizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(281, __c35, 1) as any as S.Schema<StopTrainingEntityRecognizerRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<StopTrainingEntityRecognizerResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTrainingEntityRecognizer",
}));

export type TagResourceError =
  | ConcurrentModificationException
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyTagsException
  | CommonErrors;
/**
 * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair
 * that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
 * "Sales" as the key might be added to a resource to indicate its use by the sales department.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(282, __c35, 2) as any as S.Schema<TagResourceRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<TagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ConcurrentModificationException
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyTagKeysException
  | CommonErrors;
/**
 * Removes a specific tag associated with an Amazon Comprehend resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<UntagResourceRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<UntagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyTagKeysException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateEndpointError =
  | InternalServerException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates information about the specified endpoint.
 * For information about endpoints, see Managing endpoints.
 */
export const updateEndpoint: API.OperationMethod<
  UpdateEndpointRequest,
  UpdateEndpointResponse,
  UpdateEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284, __c35, 4) as any as S.Schema<UpdateEndpointRequest>,
  output: __S(285, __c35, 5) as any as S.Schema<UpdateEndpointResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEndpoint",
}));

export type UpdateFlywheelError =
  | InternalServerException
  | InvalidRequestException
  | KmsKeyValidationException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Update the configuration information for an existing flywheel.
 */
export const updateFlywheel: API.OperationMethod<
  UpdateFlywheelRequest,
  UpdateFlywheelResponse,
  UpdateFlywheelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<UpdateFlywheelRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<UpdateFlywheelResponse>,
  errors: [
    InternalServerException,
    InvalidRequestException,
    KmsKeyValidationException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlywheel",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SensitiveString);
    case 1:
      return S.suspend(() =>
        S.Struct({ TextList: __S(0, __c0, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDetectDominantLanguageRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LanguageCode: S.optional(S.String), Score: S.optional(S.Number) }),
      ).annotate({ identifier: "DominantLanguage" });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Index: S.optional(S.Number), Languages: S.optional(__S(3, __c0, 3)) }),
      ).annotate({
        identifier: "BatchDetectDominantLanguageItemResult",
      });
    case 5:
      return S.Array(__S(4, __c0, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Index: S.optional(S.Number),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchItemError" });
    case 7:
      return S.Array(__S(6, __c0, 6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResultList: __S(5, __c0, 5), ErrorList: __S(7, __c0, 7) }),
      ).annotate({
        identifier: "BatchDetectDominantLanguageResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ TextList: __S(0, __c0, 0), LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDetectEntitiesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ChildBlockId: S.optional(S.String),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ChildBlock" });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          BlockId: S.optional(S.String),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          ChildBlocks: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "BlockReference" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Score: S.optional(S.Number),
          Type: S.optional(S.String),
          Text: S.optional(S.String),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          BlockReferences: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "Entity" });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Index: S.optional(S.Number), Entities: S.optional(__S(15, __c1, 7)) }),
      ).annotate({
        identifier: "BatchDetectEntitiesItemResult",
      });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ ResultList: __S(17, __c2, 1), ErrorList: __S(7, __c0, 7) }),
      ).annotate({
        identifier: "BatchDetectEntitiesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TextList: __S(0, __c0, 0), LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDetectKeyPhrasesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Score: S.optional(S.Number),
          Text: S.optional(S.String),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
        }),
      ).annotate({ identifier: "KeyPhrase" });
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ Index: S.optional(S.Number), KeyPhrases: S.optional(__S(21, __c2, 5)) }),
      ).annotate({
        identifier: "BatchDetectKeyPhrasesItemResult",
      });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResultList: __S(23, __c2, 7), ErrorList: __S(7, __c0, 7) }),
      ).annotate({
        identifier: "BatchDetectKeyPhrasesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ TextList: __S(0, __c0, 0), LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDetectSentimentRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Positive: S.optional(S.Number),
          Negative: S.optional(S.Number),
          Neutral: S.optional(S.Number),
          Mixed: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SentimentScore" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Index: S.optional(S.Number),
          Sentiment: S.optional(S.String),
          SentimentScore: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({
        identifier: "BatchDetectSentimentItemResult",
      });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ ResultList: __S(28, __c3, 4), ErrorList: __S(7, __c0, 7) }),
      ).annotate({
        identifier: "BatchDetectSentimentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ TextList: __S(0, __c0, 0), LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchDetectSyntaxRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Tag: S.optional(S.String), Score: S.optional(S.Number) }),
      ).annotate({ identifier: "PartOfSpeechTag" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TokenId: S.optional(S.Number),
          Text: S.optional(S.String),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          PartOfSpeech: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({ identifier: "SyntaxToken" });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Index: S.optional(S.Number), SyntaxTokens: S.optional(__S(33, __c4, 1)) }),
      ).annotate({
        identifier: "BatchDetectSyntaxItemResult",
      });
    case 3:
      return S.Array(__S(34, __c4, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ ResultList: __S(35, __c4, 3), ErrorList: __S(7, __c0, 7) }),
      ).annotate({
        identifier: "BatchDetectSyntaxResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TextList: __S(0, __c0, 0), LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDetectTargetedSentimentRequest",
      });
    case 6:
      return S.Array(S.Number);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Sentiment: S.optional(S.String),
          SentimentScore: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "MentionSentiment" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Score: S.optional(S.Number),
          GroupScore: S.optional(S.Number),
          Text: S.optional(S.String),
          Type: S.optional(S.String),
          MentionSentiment: S.optional(__S(39, __c4, 7)),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TargetedSentimentMention" });
    case 1:
      return S.Array(__S(40, __c5, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DescriptiveMentionIndex: S.optional(__S(38, __c4, 6)),
          Mentions: S.optional(__S(41, __c5, 1)),
        }),
      ).annotate({ identifier: "TargetedSentimentEntity" });
    case 3:
      return S.Array(__S(42, __c5, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Index: S.optional(S.Number),
          Entities: S.optional(__S(43, __c5, 3)),
        }),
      ).annotate({
        identifier: "BatchDetectTargetedSentimentItemResult",
      });
    case 5:
      return S.Array(__S(44, __c5, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResultList: __S(45, __c5, 5),
          ErrorList: __S(7, __c0, 7),
        }),
      ).annotate({
        identifier: "BatchDetectTargetedSentimentResponse",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DocumentReadAction: S.String,
          DocumentReadMode: S.optional(S.String),
          FeatureTypes: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({ identifier: "DocumentReaderConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(SensitiveString),
          EndpointArn: S.String,
          Bytes: S.optional(T.Blob),
          DocumentReaderConfig: S.optional(__S(48, __c6, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ClassifyDocumentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Score: S.optional(S.Number),
          Page: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DocumentClass" });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Page: S.optional(S.Number), Count: S.optional(S.Number) }),
      ).annotate({
        identifier: "ExtractedCharactersListItem",
      });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Pages: S.optional(S.Number),
          ExtractedCharacters: S.optional(__S(53, __c6, 5)),
        }),
      ).annotate({ identifier: "DocumentMetadata" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Page: S.optional(S.Number), Type: S.optional(S.String) }),
      ).annotate({ identifier: "DocumentTypeListItem" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Page: S.optional(S.Number),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ErrorsListItem" });
    case 2:
      return S.Array(__S(57, __c7, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Page: S.optional(S.Number),
          WarnCode: S.optional(S.String),
          WarnMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "WarningsListItem" });
    case 4:
      return S.Array(__S(59, __c7, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Classes: S.optional(__S(51, __c6, 3)),
          Labels: S.optional(__S(51, __c6, 3)),
          DocumentMetadata: S.optional(__S(54, __c6, 6)),
          DocumentType: S.optional(__S(56, __c7, 0)),
          Errors: S.optional(__S(58, __c7, 2)),
          Warnings: S.optional(__S(60, __c7, 4)),
        }),
      ).annotate({ identifier: "ClassifyDocumentResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Text: S.String, LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ContainsPiiEntitiesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Score: S.optional(S.Number) }),
      ).annotate({ identifier: "EntityLabel" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() => S.Struct({ Labels: S.optional(__S(64, __c8, 0)) })).annotate({
        identifier: "ContainsPiiEntitiesResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttributeNames: __S(66, __c8, 2),
          S3Uri: S.String,
          AnnotationDataS3Uri: S.optional(S.String),
          SourceDocumentsS3Uri: S.optional(S.String),
          DocumentType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DatasetAugmentedManifestsListItem",
      });
    case 4:
      return S.Array(__S(67, __c8, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, LabelDelimiter: S.optional(S.String) }),
      ).annotate({
        identifier: "DatasetDocumentClassifierInputDataConfig",
      });
    case 6:
      return S.suspend(() => S.Struct({ S3Uri: S.String })).annotate({
        identifier: "DatasetEntityRecognizerAnnotations",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, InputFormat: S.optional(S.String) }),
      ).annotate({
        identifier: "DatasetEntityRecognizerDocuments",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Annotations: S.optional(__S(70, __c8, 6)),
          Documents: __S(71, __c8, 7),
          EntityList: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({
        identifier: "DatasetEntityRecognizerInputDataConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AugmentedManifests: S.optional(__S(68, __c8, 4)),
          DataFormat: S.optional(S.String),
          DocumentClassifierInputDataConfig: S.optional(__S(69, __c8, 5)),
          EntityRecognizerInputDataConfig: S.optional(__S(72, __c9, 0)),
        }),
      ).annotate({ identifier: "DatasetInputDataConfig" });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(74, __c9, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          FlywheelArn: S.String,
          DatasetName: S.String,
          DatasetType: S.optional(S.String),
          Description: S.optional(S.String),
          InputDataConfig: __S(73, __c9, 1),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDatasetRequest" });
    case 5:
      return S.suspend(() => S.Struct({ DatasetArn: S.optional(S.String) })).annotate({
        identifier: "CreateDatasetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          S3Uri: S.String,
          Split: S.optional(S.String),
          AttributeNames: __S(66, __c8, 2),
          AnnotationDataS3Uri: S.optional(S.String),
          SourceDocumentsS3Uri: S.optional(S.String),
          DocumentType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AugmentedManifestsListItem",
      });
    case 7:
      return S.Array(__S(78, __c9, 6));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, TestS3Uri: S.optional(S.String) }),
      ).annotate({
        identifier: "DocumentClassifierDocuments",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DataFormat: S.optional(S.String),
          S3Uri: S.optional(S.String),
          TestS3Uri: S.optional(S.String),
          LabelDelimiter: S.optional(S.String),
          AugmentedManifests: S.optional(__S(79, __c9, 7)),
          DocumentType: S.optional(S.String),
          Documents: S.optional(__S(80, __c10, 0)),
          DocumentReaderConfig: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({
        identifier: "DocumentClassifierInputDataConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          S3Uri: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          FlywheelStatsS3Prefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DocumentClassifierOutputDataConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SecurityGroupIds: __S(66, __c8, 2), Subnets: __S(66, __c8, 2) }),
      ).annotate({ identifier: "VpcConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DocumentClassifierName: S.String,
          VersionName: S.optional(S.String),
          DataAccessRoleArn: S.String,
          Tags: S.optional(__S(75, __c9, 3)),
          InputDataConfig: __S(81, __c10, 1),
          OutputDataConfig: S.optional(__S(82, __c10, 2)),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          LanguageCode: S.String,
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Mode: S.optional(S.String),
          ModelKmsKeyId: S.optional(S.String),
          ModelPolicy: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDocumentClassifierRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ DocumentClassifierArn: S.optional(S.String) })).annotate({
        identifier: "CreateDocumentClassifierResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EndpointName: S.String,
          ModelArn: S.optional(S.String),
          DesiredInferenceUnits: S.Number,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(75, __c9, 3)),
          DataAccessRoleArn: S.optional(S.String),
          FlywheelArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateEndpointRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.optional(S.String), ModelArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateEndpointResponse" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Type: S.String })).annotate({
        identifier: "EntityTypesListItem",
      });
    case 1:
      return S.Array(__S(88, __c11, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          S3Uri: S.String,
          TestS3Uri: S.optional(S.String),
          InputFormat: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EntityRecognizerDocuments",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DataFormat: S.optional(S.String),
          EntityTypes: __S(89, __c11, 1),
          Documents: S.optional(__S(90, __c11, 2)),
          Annotations: S.optional(__S(80, __c10, 0)),
          EntityList: S.optional(__S(70, __c8, 6)),
          AugmentedManifests: S.optional(__S(79, __c9, 7)),
        }),
      ).annotate({
        identifier: "EntityRecognizerInputDataConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RecognizerName: S.String,
          VersionName: S.optional(S.String),
          DataAccessRoleArn: S.String,
          Tags: S.optional(__S(75, __c9, 3)),
          InputDataConfig: __S(91, __c11, 3),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          LanguageCode: S.String,
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          ModelKmsKeyId: S.optional(S.String),
          ModelPolicy: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEntityRecognizerRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ EntityRecognizerArn: S.optional(S.String) })).annotate({
        identifier: "CreateEntityRecognizerResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Mode: S.String, Labels: S.optional(__S(66, __c8, 2)) }),
      ).annotate({
        identifier: "DocumentClassificationConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ EntityTypes: __S(89, __c11, 1) })).annotate({
        identifier: "EntityRecognitionConfig",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: S.String,
          DocumentClassificationConfig: S.optional(__S(94, __c11, 6)),
          EntityRecognitionConfig: S.optional(__S(95, __c11, 7)),
        }),
      ).annotate({ identifier: "TaskConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ModelKmsKeyId: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          DataLakeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({ identifier: "DataSecurityConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FlywheelName: S.String,
          ActiveModelArn: S.optional(S.String),
          DataAccessRoleArn: S.String,
          TaskConfig: S.optional(__S(96, __c12, 0)),
          ModelType: S.optional(S.String),
          DataLakeS3Uri: S.String,
          DataSecurityConfig: S.optional(__S(97, __c12, 1)),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateFlywheelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ FlywheelArn: S.optional(S.String), ActiveModelArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateFlywheelResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DocumentClassifierArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDocumentClassifierRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDocumentClassifierResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEndpointRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteEndpointResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EntityRecognizerArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEntityRecognizerRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ FlywheelArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFlywheelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, PolicyRevisionId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DatasetArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDatasetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DatasetArn: S.optional(S.String),
          DatasetName: S.optional(S.String),
          DatasetType: S.optional(S.String),
          DatasetS3Uri: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
          NumberOfDocuments: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DatasetProperties" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DatasetProperties: S.optional(__S(108, __c13, 4)) }),
      ).annotate({ identifier: "DescribeDatasetResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDocumentClassificationJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          S3Uri: S.String,
          InputFormat: S.optional(S.String),
          DocumentReaderConfig: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "InputDataConfig" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, KmsKeyId: S.optional(S.String) }),
      ).annotate({ identifier: "OutputDataConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DocumentClassifierArn: S.optional(S.String),
          InputDataConfig: S.optional(__S(111, __c13, 7)),
          OutputDataConfig: S.optional(__S(112, __c14, 0)),
          DataAccessRoleArn: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          FlywheelArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DocumentClassificationJobProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DocumentClassificationJobProperties: S.optional(__S(113, __c14, 1)),
        }),
      ).annotate({
        identifier: "DescribeDocumentClassificationJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DocumentClassifierArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDocumentClassifierRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Accuracy: S.optional(S.Number),
          Precision: S.optional(S.Number),
          Recall: S.optional(S.Number),
          F1Score: S.optional(S.Number),
          MicroPrecision: S.optional(S.Number),
          MicroRecall: S.optional(S.Number),
          MicroF1Score: S.optional(S.Number),
          HammingLoss: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ClassifierEvaluationMetrics",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NumberOfLabels: S.optional(S.Number),
          NumberOfTrainedDocuments: S.optional(S.Number),
          NumberOfTestDocuments: S.optional(S.Number),
          EvaluationMetrics: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "ClassifierMetadata" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DocumentClassifierArn: S.optional(S.String),
          LanguageCode: S.optional(S.String),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(81, __c10, 1)),
          OutputDataConfig: S.optional(__S(82, __c10, 2)),
          ClassifierMetadata: S.optional(__S(117, __c14, 5)),
          DataAccessRoleArn: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Mode: S.optional(S.String),
          ModelKmsKeyId: S.optional(S.String),
          VersionName: S.optional(S.String),
          SourceModelArn: S.optional(S.String),
          FlywheelArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DocumentClassifierProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DocumentClassifierProperties: S.optional(__S(118, __c14, 6)) }),
      ).annotate({
        identifier: "DescribeDocumentClassifierResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDominantLanguageDetectionJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(111, __c13, 7)),
          OutputDataConfig: S.optional(__S(112, __c14, 0)),
          DataAccessRoleArn: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({
        identifier: "DominantLanguageDetectionJobProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DominantLanguageDetectionJobProperties: S.optional(__S(121, __c15, 1)),
        }),
      ).annotate({
        identifier: "DescribeDominantLanguageDetectionJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeEndpointRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EndpointArn: S.optional(S.String),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
          ModelArn: S.optional(S.String),
          DesiredModelArn: S.optional(S.String),
          DesiredInferenceUnits: S.optional(S.Number),
          CurrentInferenceUnits: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataAccessRoleArn: S.optional(S.String),
          DesiredDataAccessRoleArn: S.optional(S.String),
          FlywheelArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EndpointProperties" });
    case 5:
      return S.suspend(() =>
        S.Struct({ EndpointProperties: S.optional(__S(124, __c15, 4)) }),
      ).annotate({ identifier: "DescribeEndpointResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEntitiesDetectionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EntityRecognizerArn: S.optional(S.String),
          InputDataConfig: S.optional(__S(111, __c13, 7)),
          OutputDataConfig: S.optional(__S(112, __c14, 0)),
          LanguageCode: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          FlywheelArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EntitiesDetectionJobProperties",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EntitiesDetectionJobProperties: S.optional(__S(127, __c15, 7)) }),
      ).annotate({
        identifier: "DescribeEntitiesDetectionJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EntityRecognizerArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEntityRecognizerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Precision: S.optional(S.Number),
          Recall: S.optional(S.Number),
          F1Score: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "EntityRecognizerEvaluationMetrics",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          EvaluationMetrics: S.optional(__S(130, __c16, 2)),
          NumberOfTrainMentions: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "EntityRecognizerMetadataEntityTypesListItem",
      });
    case 4:
      return S.Array(__S(131, __c16, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          NumberOfTrainedDocuments: S.optional(S.Number),
          NumberOfTestDocuments: S.optional(S.Number),
          EvaluationMetrics: S.optional(__S(130, __c16, 2)),
          EntityTypes: S.optional(__S(132, __c16, 4)),
        }),
      ).annotate({ identifier: "EntityRecognizerMetadata" });
    case 6:
      return S.suspend(() => S.Struct({ FlywheelStatsS3Prefix: S.optional(S.String) })).annotate({
        identifier: "EntityRecognizerOutputDataConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EntityRecognizerArn: S.optional(S.String),
          LanguageCode: S.optional(S.String),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(91, __c11, 3)),
          RecognizerMetadata: S.optional(__S(133, __c16, 5)),
          DataAccessRoleArn: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          ModelKmsKeyId: S.optional(S.String),
          VersionName: S.optional(S.String),
          SourceModelArn: S.optional(S.String),
          FlywheelArn: S.optional(S.String),
          OutputDataConfig: S.optional(__S(134, __c16, 6)),
        }),
      ).annotate({
        identifier: "EntityRecognizerProperties",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EntityRecognizerProperties: S.optional(__S(135, __c16, 7)) }),
      ).annotate({
        identifier: "DescribeEntityRecognizerResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEventsDetectionJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(111, __c13, 7)),
          OutputDataConfig: S.optional(__S(112, __c14, 0)),
          LanguageCode: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          TargetEventTypes: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({
        identifier: "EventsDetectionJobProperties",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ EventsDetectionJobProperties: S.optional(__S(138, __c17, 2)) }),
      ).annotate({
        identifier: "DescribeEventsDetectionJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ FlywheelArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeFlywheelRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FlywheelArn: S.optional(S.String),
          ActiveModelArn: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          TaskConfig: S.optional(__S(96, __c12, 0)),
          DataLakeS3Uri: S.optional(S.String),
          DataSecurityConfig: S.optional(__S(97, __c12, 1)),
          Status: S.optional(S.String),
          ModelType: S.optional(S.String),
          Message: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LatestFlywheelIteration: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlywheelProperties" });
    case 6:
      return S.suspend(() =>
        S.Struct({ FlywheelProperties: S.optional(__S(141, __c17, 5)) }),
      ).annotate({ identifier: "DescribeFlywheelResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ FlywheelArn: S.String, FlywheelIterationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeFlywheelIterationRequest",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AverageF1Score: S.optional(S.Number),
          AveragePrecision: S.optional(S.Number),
          AverageRecall: S.optional(S.Number),
          AverageAccuracy: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "FlywheelModelEvaluationMetrics",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FlywheelArn: S.optional(S.String),
          FlywheelIterationId: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
          EvaluatedModelArn: S.optional(S.String),
          EvaluatedModelMetrics: S.optional(__S(144, __c18, 0)),
          TrainedModelArn: S.optional(S.String),
          TrainedModelMetrics: S.optional(__S(144, __c18, 0)),
          EvaluationManifestS3Prefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FlywheelIterationProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ FlywheelIterationProperties: S.optional(__S(145, __c18, 1)) }),
      ).annotate({
        identifier: "DescribeFlywheelIterationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeKeyPhrasesDetectionJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(111, __c13, 7)),
          OutputDataConfig: S.optional(__S(112, __c14, 0)),
          LanguageCode: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({
        identifier: "KeyPhrasesDetectionJobProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          KeyPhrasesDetectionJobProperties: S.optional(__S(148, __c18, 4)),
        }),
      ).annotate({
        identifier: "DescribeKeyPhrasesDetectionJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribePiiEntitiesDetectionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PiiEntityTypes: S.optional(__S(47, __c5, 7)),
          MaskMode: S.optional(S.String),
          MaskCharacter: S.optional(S.String),
        }),
      ).annotate({ identifier: "RedactionConfig" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(111, __c13, 7)),
          OutputDataConfig: S.optional(__S(112, __c14, 0)),
          RedactionConfig: S.optional(__S(151, __c18, 7)),
          LanguageCode: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          Mode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PiiEntitiesDetectionJobProperties",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PiiEntitiesDetectionJobProperties: S.optional(__S(152, __c19, 0)),
        }),
      ).annotate({
        identifier: "DescribePiiEntitiesDetectionJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourcePolicy: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PolicyRevisionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeResourcePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSentimentDetectionJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ SentimentDetectionJobProperties: S.optional(__S(148, __c18, 4)) }),
      ).annotate({
        identifier: "DescribeSentimentDetectionJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTargetedSentimentDetectionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TargetedSentimentDetectionJobProperties: S.optional(__S(148, __c18, 4)),
        }),
      ).annotate({
        identifier: "DescribeTargetedSentimentDetectionJobResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTopicsDetectionJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(__S(111, __c13, 7)),
          OutputDataConfig: S.optional(__S(112, __c14, 0)),
          NumberOfTopics: S.optional(S.Number),
          DataAccessRoleArn: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({
        identifier: "TopicsDetectionJobProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TopicsDetectionJobProperties: S.optional(__S(161, __c20, 1)) }),
      ).annotate({
        identifier: "DescribeTopicsDetectionJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Text: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DetectDominantLanguageRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Languages: S.optional(__S(3, __c0, 3)) })).annotate({
        identifier: "DetectDominantLanguageResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(SensitiveString),
          LanguageCode: S.optional(S.String),
          EndpointArn: S.optional(S.String),
          Bytes: S.optional(T.Blob),
          DocumentReaderConfig: S.optional(__S(48, __c6, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DetectEntitiesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Height: S.optional(S.Number),
          Left: S.optional(S.Number),
          Top: S.optional(S.Number),
          Width: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BoundingBox" });
    case 7:
      return S.suspend(() =>
        S.Struct({ X: S.optional(S.Number), Y: S.optional(S.Number) }),
      ).annotate({ identifier: "Point" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167, __c20, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(__S(166, __c20, 6)),
          Polygon: S.optional(__S(168, __c21, 0)),
        }),
      ).annotate({ identifier: "Geometry" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Ids: S.optional(__S(66, __c8, 2)), Type: S.optional(S.String) }),
      ).annotate({ identifier: "RelationshipsListItem" });
    case 3:
      return S.Array(__S(170, __c21, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          BlockType: S.optional(S.String),
          Text: S.optional(S.String),
          Page: S.optional(S.Number),
          Geometry: S.optional(__S(169, __c21, 1)),
          Relationships: S.optional(__S(171, __c21, 3)),
        }),
      ).annotate({ identifier: "Block" });
    case 5:
      return S.Array(__S(172, __c21, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Entities: S.optional(__S(15, __c1, 7)),
          DocumentMetadata: S.optional(__S(54, __c6, 6)),
          DocumentType: S.optional(__S(56, __c7, 0)),
          Blocks: S.optional(__S(173, __c21, 5)),
          Errors: S.optional(__S(58, __c7, 2)),
        }),
      ).annotate({ identifier: "DetectEntitiesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Text: SensitiveString, LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetectKeyPhrasesRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ KeyPhrases: S.optional(__S(21, __c2, 5)) })).annotate({
        identifier: "DetectKeyPhrasesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Text: S.String, LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetectPiiEntitiesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Score: S.optional(S.Number),
          Type: S.optional(S.String),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
        }),
      ).annotate({ identifier: "PiiEntity" });
    case 3:
      return S.Array(__S(178, __c22, 2));
    case 4:
      return S.suspend(() => S.Struct({ Entities: S.optional(__S(179, __c22, 3)) })).annotate({
        identifier: "DetectPiiEntitiesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Text: SensitiveString, LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetectSentimentRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Text: SensitiveString, LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetectSyntaxRequest" });
    case 7:
      return S.suspend(() => S.Struct({ SyntaxTokens: S.optional(__S(33, __c4, 1)) })).annotate({
        identifier: "DetectSyntaxResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Text: SensitiveString, LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DetectTargetedSentimentRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Entities: S.optional(__S(43, __c5, 3)) })).annotate({
        identifier: "DetectTargetedSentimentResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Text: SensitiveString })).annotate({
        identifier: "TextSegment",
      });
    case 3:
      return S.Array(__S(186, __c23, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ TextSegments: __S(187, __c23, 3), LanguageCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DetectToxicContentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Labels: S.optional(__S(64, __c8, 0)), Toxicity: S.optional(S.Number) }),
      ).annotate({ identifier: "ToxicLabels" });
    case 6:
      return S.Array(__S(189, __c23, 5));
    case 7:
      return S.suspend(() => S.Struct({ ResultList: S.optional(__S(190, __c23, 6)) })).annotate({
        identifier: "DetectToxicContentResponse",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SourceModelArn: S.String,
          ModelName: S.optional(S.String),
          VersionName: S.optional(S.String),
          ModelKmsKeyId: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportModelRequest" });
    case 1:
      return S.suspend(() => S.Struct({ ModelArn: S.optional(S.String) })).annotate({
        identifier: "ImportModelResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          DatasetType: S.optional(S.String),
          CreationTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DatasetFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FlywheelArn: S.optional(S.String),
          Filter: S.optional(__S(194, __c24, 2)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDatasetsRequest" });
    case 4:
      return S.Array(__S(108, __c13, 4));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DatasetPropertiesList: S.optional(__S(196, __c24, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListDatasetsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          SubmitTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubmitTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DocumentClassificationJobFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(198, __c24, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDocumentClassificationJobsRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(113, __c14, 1));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DocumentClassificationJobPropertiesList: S.optional(__S(200, __c25, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDocumentClassificationJobsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          DocumentClassifierName: S.optional(S.String),
          SubmitTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubmitTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DocumentClassifierFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(202, __c25, 2)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDocumentClassifiersRequest",
      });
    case 4:
      return S.Array(__S(118, __c14, 6));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DocumentClassifierPropertiesList: S.optional(__S(204, __c25, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDocumentClassifiersResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListDocumentClassifierSummariesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DocumentClassifierName: S.optional(S.String),
          NumberOfVersions: S.optional(S.Number),
          LatestVersionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LatestVersionName: S.optional(S.String),
          LatestVersionStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DocumentClassifierSummary",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(207, __c25, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DocumentClassifierSummariesList: S.optional(__S(208, __c26, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDocumentClassifierSummariesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(198, __c24, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDominantLanguageDetectionJobsRequest",
      });
    case 3:
      return S.Array(__S(121, __c15, 1));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DominantLanguageDetectionJobPropertiesList: S.optional(__S(211, __c26, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDominantLanguageDetectionJobsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ModelArn: S.optional(S.String),
          Status: S.optional(S.String),
          CreationTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EndpointFilter" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(213, __c26, 5)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEndpointsRequest" });
    case 7:
      return S.Array(__S(124, __c15, 4));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EndpointPropertiesList: S.optional(__S(215, __c26, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListEndpointsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(198, __c24, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEntitiesDetectionJobsRequest",
      });
    case 2:
      return S.Array(__S(127, __c15, 7));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EntitiesDetectionJobPropertiesList: S.optional(__S(218, __c27, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEntitiesDetectionJobsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          RecognizerName: S.optional(S.String),
          SubmitTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubmitTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EntityRecognizerFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(220, __c27, 4)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEntityRecognizersRequest",
      });
    case 6:
      return S.Array(__S(135, __c16, 7));
    case 7:
      return S.suspend(() =>
        S.Struct({
          EntityRecognizerPropertiesList: S.optional(__S(222, __c27, 6)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEntityRecognizersResponse",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListEntityRecognizerSummariesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RecognizerName: S.optional(S.String),
          NumberOfVersions: S.optional(S.Number),
          LatestVersionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LatestVersionName: S.optional(S.String),
          LatestVersionStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "EntityRecognizerSummary" });
    case 2:
      return S.Array(__S(225, __c28, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EntityRecognizerSummariesList: S.optional(__S(226, __c28, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEntityRecognizerSummariesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(S.String),
          JobStatus: S.optional(S.String),
          SubmitTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubmitTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EventsDetectionJobFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(228, __c28, 4)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEventsDetectionJobsRequest",
      });
    case 6:
      return S.Array(__S(138, __c17, 2));
    case 7:
      return S.suspend(() =>
        S.Struct({
          EventsDetectionJobPropertiesList: S.optional(__S(230, __c28, 6)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEventsDetectionJobsResponse",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreationTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "FlywheelIterationFilter" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FlywheelArn: S.String,
          Filter: S.optional(__S(232, __c29, 0)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListFlywheelIterationHistoryRequest",
      });
    case 2:
      return S.Array(__S(145, __c18, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          FlywheelIterationPropertiesList: S.optional(__S(234, __c29, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFlywheelIterationHistoryResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          CreationTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "FlywheelFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(236, __c29, 4)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFlywheelsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FlywheelArn: S.optional(S.String),
          ActiveModelArn: S.optional(S.String),
          DataLakeS3Uri: S.optional(S.String),
          Status: S.optional(S.String),
          ModelType: S.optional(S.String),
          Message: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LatestFlywheelIteration: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlywheelSummary" });
    case 7:
      return S.Array(__S(238, __c29, 6));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FlywheelSummaryList: S.optional(__S(239, __c29, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListFlywheelsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(198, __c24, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListKeyPhrasesDetectionJobsRequest",
      });
    case 2:
      return S.Array(__S(148, __c18, 4));
    case 3:
      return S.suspend(() =>
        S.Struct({
          KeyPhrasesDetectionJobPropertiesList: S.optional(__S(242, __c30, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListKeyPhrasesDetectionJobsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(198, __c24, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPiiEntitiesDetectionJobsRequest",
      });
    case 5:
      return S.Array(__S(152, __c19, 0));
    case 6:
      return S.suspend(() =>
        S.Struct({
          PiiEntitiesDetectionJobPropertiesList: S.optional(__S(245, __c30, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPiiEntitiesDetectionJobsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(198, __c24, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSentimentDetectionJobsRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SentimentDetectionJobPropertiesList: S.optional(__S(242, __c30, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSentimentDetectionJobsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(__S(75, __c9, 3)) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(198, __c24, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTargetedSentimentDetectionJobsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetedSentimentDetectionJobPropertiesList: S.optional(__S(242, __c30, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTargetedSentimentDetectionJobsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(__S(228, __c28, 4)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTopicsDetectionJobsRequest",
      });
    case 6:
      return S.Array(__S(161, __c20, 1));
    case 7:
      return S.suspend(() =>
        S.Struct({
          TopicsDetectionJobPropertiesList: S.optional(__S(254, __c31, 6)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTopicsDetectionJobsResponse",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          ResourcePolicy: S.String,
          PolicyRevisionId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 1:
      return S.suspend(() => S.Struct({ PolicyRevisionId: S.optional(S.String) })).annotate({
        identifier: "PutResourcePolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(S.String),
          DocumentClassifierArn: S.optional(S.String),
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(75, __c9, 3)),
          FlywheelArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDocumentClassificationJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobStatus: S.optional(S.String),
          DocumentClassifierArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartDocumentClassificationJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDominantLanguageDetectionJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartDominantLanguageDetectionJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          EntityRecognizerArn: S.optional(S.String),
          LanguageCode: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(75, __c9, 3)),
          FlywheelArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartEntitiesDetectionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobArn: S.optional(S.String),
          JobStatus: S.optional(S.String),
          EntityRecognizerArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartEntitiesDetectionJobResponse",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          LanguageCode: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          TargetEventTypes: __S(66, __c8, 2),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartEventsDetectionJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ FlywheelArn: S.String, ClientRequestToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartFlywheelIterationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ FlywheelArn: S.optional(S.String), FlywheelIterationId: S.optional(S.String) }),
      ).annotate({
        identifier: "StartFlywheelIterationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          LanguageCode: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartKeyPhrasesDetectionJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          Mode: S.String,
          RedactionConfig: S.optional(__S(151, __c18, 7)),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          LanguageCode: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartPiiEntitiesDetectionJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          LanguageCode: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartSentimentDetectionJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          LanguageCode: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartTargetedSentimentDetectionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: __S(111, __c13, 7),
          OutputDataConfig: __S(112, __c14, 0),
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          NumberOfTopics: S.optional(S.Number),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(75, __c9, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartTopicsDetectionJobRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopDominantLanguageDetectionJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ JobId: S.optional(S.String), JobStatus: S.optional(S.String) }),
      ).annotate({
        identifier: "StopDominantLanguageDetectionJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopEntitiesDetectionJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopEventsDetectionJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopKeyPhrasesDetectionJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopPiiEntitiesDetectionJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopSentimentDetectionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopTargetedSentimentDetectionJobRequest",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DocumentClassifierArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopTrainingDocumentClassifierRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EntityRecognizerArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopTrainingEntityRecognizerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(75, __c9, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(66, __c8, 2) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EndpointArn: S.String,
          DesiredModelArn: S.optional(S.String),
          DesiredInferenceUnits: S.optional(S.Number),
          DesiredDataAccessRoleArn: S.optional(S.String),
          FlywheelArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateEndpointRequest" });
    case 5:
      return S.suspend(() => S.Struct({ DesiredModelArn: S.optional(S.String) })).annotate({
        identifier: "UpdateEndpointResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ModelKmsKeyId: S.optional(S.String),
          VolumeKmsKeyId: S.optional(S.String),
          VpcConfig: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({ identifier: "UpdateDataSecurityConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FlywheelArn: S.String,
          ActiveModelArn: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          DataSecurityConfig: S.optional(__S(286, __c35, 6)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateFlywheelRequest" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Reason: S.optional(S.String) })).annotate({
        identifier: "InvalidRequestDetail",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
