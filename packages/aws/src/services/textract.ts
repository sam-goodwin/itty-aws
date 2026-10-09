import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Textract", serviceShapeName: "Textract" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "textract" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-06-27");
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
              `https://textract-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://textract-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://textract.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://textract.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withAuthError) {}
export class BadDocumentException
  extends /*@__PURE__*/ S.TaggedError<BadDocumentException>()("BadDocumentException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class DocumentTooLargeException
  extends /*@__PURE__*/ S.TaggedError<DocumentTooLargeException>()("DocumentTooLargeException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class HumanLoopQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<HumanLoopQuotaExceededException>()(
    "HumanLoopQuotaExceededException",
    {
      ResourceType: /*@__PURE__*/ S.optional(S.String),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class IdempotentParameterMismatchException
  extends /*@__PURE__*/ S.TaggedError<IdempotentParameterMismatchException>()(
    "IdempotentParameterMismatchException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class InternalServerError
  extends /*@__PURE__*/ S.TaggedError<InternalServerError>()("InternalServerError", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidJobIdException
  extends /*@__PURE__*/ S.TaggedError<InvalidJobIdException>()("InvalidJobIdException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidKMSKeyException
  extends /*@__PURE__*/ S.TaggedError<InvalidKMSKeyException>()("InvalidKMSKeyException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InvalidS3ObjectException
  extends /*@__PURE__*/ S.TaggedError<InvalidS3ObjectException>()("InvalidS3ObjectException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ProvisionedThroughputExceededException
  extends /*@__PURE__*/ S.TaggedError<ProvisionedThroughputExceededException>()(
    "ProvisionedThroughputExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class UnsupportedDocumentException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedDocumentException>()(
    "UnsupportedDocumentException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Code: /*@__PURE__*/ S.optional(S.String),
  }) {}
export type ImageBlob = Uint8Array;
export type S3Bucket = string;
export type S3ObjectName = string;
export type S3ObjectVersion = string;
export interface S3Object {
  Bucket?: string;
  Name?: string;
  Version?: string;
}
export interface Document {
  Bytes?: Uint8Array;
  S3Object?: S3Object;
}
export type FeatureType = "TABLES" | "FORMS" | "QUERIES" | "SIGNATURES" | "LAYOUT" | (string & {});
export type FeatureTypes = FeatureType[];
export type HumanLoopName = string;
export type FlowDefinitionArn = string;
export type ContentClassifier =
  | "FreeOfPersonallyIdentifiableInformation"
  | "FreeOfAdultContent"
  | (string & {});
export type ContentClassifiers = ContentClassifier[];
export interface HumanLoopDataAttributes {
  ContentClassifiers?: ContentClassifier[];
}
export interface HumanLoopConfig {
  HumanLoopName: string;
  FlowDefinitionArn: string;
  DataAttributes?: HumanLoopDataAttributes;
}
export type QueryInput = string;
export type QueryPage = string;
export type QueryPages = string[];
export interface Query {
  Text: string;
  Alias?: string;
  Pages?: string[];
}
export type Queries = Query[];
export interface QueriesConfig {
  Queries: Query[];
}
export type AdapterId = string;
export type AdapterPage = string;
export type AdapterPages = string[];
export type AdapterVersion = string;
export interface Adapter {
  AdapterId: string;
  Pages?: string[];
  Version: string;
}
export type Adapters = Adapter[];
export interface AdaptersConfig {
  Adapters: Adapter[];
}
export interface AnalyzeDocumentRequest {
  Document: Document;
  FeatureTypes: FeatureType[];
  HumanLoopConfig?: HumanLoopConfig;
  QueriesConfig?: QueriesConfig;
  AdaptersConfig?: AdaptersConfig;
}
export type UInteger = number;
export interface DocumentMetadata {
  Pages?: number;
}
export type BlockType =
  | "KEY_VALUE_SET"
  | "PAGE"
  | "LINE"
  | "WORD"
  | "TABLE"
  | "CELL"
  | "SELECTION_ELEMENT"
  | "MERGED_CELL"
  | "TITLE"
  | "QUERY"
  | "QUERY_RESULT"
  | "SIGNATURE"
  | "TABLE_TITLE"
  | "TABLE_FOOTER"
  | "LAYOUT_TEXT"
  | "LAYOUT_TITLE"
  | "LAYOUT_HEADER"
  | "LAYOUT_FOOTER"
  | "LAYOUT_SECTION_HEADER"
  | "LAYOUT_PAGE_NUMBER"
  | "LAYOUT_LIST"
  | "LAYOUT_FIGURE"
  | "LAYOUT_TABLE"
  | "LAYOUT_KEY_VALUE"
  | (string & {});
export type Percent = number;
export type TextType = "HANDWRITING" | "PRINTED" | (string & {});
export interface BoundingBox {
  Width?: number;
  Height?: number;
  Left?: number;
  Top?: number;
}
export interface Point {
  X?: number;
  Y?: number;
}
export type Polygon = Point[];
export type Angle = number;
export interface Geometry {
  BoundingBox?: BoundingBox;
  Polygon?: Point[];
  RotationAngle?: number;
}
export type NonEmptyString = string;
export type RelationshipType =
  | "VALUE"
  | "CHILD"
  | "COMPLEX_FEATURES"
  | "MERGED_CELL"
  | "TITLE"
  | "ANSWER"
  | "TABLE"
  | "TABLE_TITLE"
  | "TABLE_FOOTER"
  | (string & {});
export type IdList = string[];
export interface Relationship {
  Type?: RelationshipType;
  Ids?: string[];
}
export type RelationshipList = Relationship[];
export type EntityType =
  | "KEY"
  | "VALUE"
  | "COLUMN_HEADER"
  | "TABLE_TITLE"
  | "TABLE_FOOTER"
  | "TABLE_SECTION_TITLE"
  | "TABLE_SUMMARY"
  | "STRUCTURED_TABLE"
  | "SEMI_STRUCTURED_TABLE"
  | (string & {});
export type EntityTypes = EntityType[];
export type SelectionStatus = "SELECTED" | "NOT_SELECTED" | (string & {});
export interface Block {
  BlockType?: BlockType;
  Confidence?: number;
  Text?: string;
  TextType?: TextType;
  RowIndex?: number;
  ColumnIndex?: number;
  RowSpan?: number;
  ColumnSpan?: number;
  Geometry?: Geometry;
  Id?: string;
  Relationships?: Relationship[];
  EntityTypes?: EntityType[];
  SelectionStatus?: SelectionStatus;
  Page?: number;
  Query?: Query;
}
export type BlockList = Block[];
export type HumanLoopArn = string;
export type HumanLoopActivationReason = string;
export type HumanLoopActivationReasons = string[];
export type SynthesizedJsonHumanLoopActivationConditionsEvaluationResults = string;
export interface HumanLoopActivationOutput {
  HumanLoopArn?: string;
  HumanLoopActivationReasons?: string[];
  HumanLoopActivationConditionsEvaluationResults?: string;
}
export interface AnalyzeDocumentResponse {
  DocumentMetadata?: DocumentMetadata;
  Blocks?: Block[];
  HumanLoopActivationOutput?: HumanLoopActivationOutput;
  AnalyzeDocumentModelVersion?: string;
}
export interface AnalyzeExpenseRequest {
  Document: Document;
}
export interface ExpenseType {
  Text?: string;
  Confidence?: number;
}
export interface ExpenseDetection {
  Text?: string;
  Geometry?: Geometry;
  Confidence?: number;
}
export interface ExpenseCurrency {
  Code?: string;
  Confidence?: number;
}
export type StringList = string[];
export interface ExpenseGroupProperty {
  Types?: string[];
  Id?: string;
}
export type ExpenseGroupPropertyList = ExpenseGroupProperty[];
export interface ExpenseField {
  Type?: ExpenseType;
  LabelDetection?: ExpenseDetection;
  ValueDetection?: ExpenseDetection;
  PageNumber?: number;
  Currency?: ExpenseCurrency;
  GroupProperties?: ExpenseGroupProperty[];
}
export type ExpenseFieldList = ExpenseField[];
export interface LineItemFields {
  LineItemExpenseFields?: ExpenseField[];
}
export type LineItemList = LineItemFields[];
export interface LineItemGroup {
  LineItemGroupIndex?: number;
  LineItems?: LineItemFields[];
}
export type LineItemGroupList = LineItemGroup[];
export interface ExpenseDocument {
  ExpenseIndex?: number;
  SummaryFields?: ExpenseField[];
  LineItemGroups?: LineItemGroup[];
  Blocks?: Block[];
}
export type ExpenseDocumentList = ExpenseDocument[];
export interface AnalyzeExpenseResponse {
  DocumentMetadata?: DocumentMetadata;
  ExpenseDocuments?: ExpenseDocument[];
}
export type DocumentPages = Document[];
export interface AnalyzeIDRequest {
  DocumentPages: Document[];
}
export type ValueType = "DATE" | (string & {});
export interface NormalizedValue {
  Value?: string;
  ValueType?: ValueType;
}
export interface AnalyzeIDDetections {
  Text: string;
  NormalizedValue?: NormalizedValue;
  Confidence?: number;
}
export interface IdentityDocumentField {
  Type?: AnalyzeIDDetections;
  ValueDetection?: AnalyzeIDDetections;
}
export type IdentityDocumentFieldList = IdentityDocumentField[];
export interface IdentityDocument {
  DocumentIndex?: number;
  IdentityDocumentFields?: IdentityDocumentField[];
  Blocks?: Block[];
}
export type IdentityDocumentList = IdentityDocument[];
export interface AnalyzeIDResponse {
  IdentityDocuments?: IdentityDocument[];
  DocumentMetadata?: DocumentMetadata;
  AnalyzeIDModelVersion?: string;
}
export type AdapterName = string;
export type ClientRequestToken = string;
export type AdapterDescription = string;
export type AutoUpdate = "ENABLED" | "DISABLED" | (string & {});
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateAdapterRequest {
  AdapterName: string;
  ClientRequestToken?: string;
  Description?: string;
  FeatureTypes: FeatureType[];
  AutoUpdate?: AutoUpdate;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateAdapterResponse {
  AdapterId?: string;
}
export interface AdapterVersionDatasetConfig {
  ManifestS3Object?: S3Object;
}
export type KMSKeyId = string;
export interface OutputConfig {
  S3Bucket: string;
  S3Prefix?: string;
}
export interface CreateAdapterVersionRequest {
  AdapterId: string;
  ClientRequestToken?: string;
  DatasetConfig: AdapterVersionDatasetConfig;
  KMSKeyId?: string;
  OutputConfig: OutputConfig;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateAdapterVersionResponse {
  AdapterId?: string;
  AdapterVersion?: string;
}
export interface DeleteAdapterRequest {
  AdapterId: string;
}
export interface DeleteAdapterResponse {}
export interface DeleteAdapterVersionRequest {
  AdapterId: string;
  AdapterVersion: string;
}
export interface DeleteAdapterVersionResponse {}
export interface DetectDocumentTextRequest {
  Document: Document;
}
export interface DetectDocumentTextResponse {
  DocumentMetadata?: DocumentMetadata;
  Blocks?: Block[];
  DetectDocumentTextModelVersion?: string;
}
export interface GetAdapterRequest {
  AdapterId: string;
}
export interface GetAdapterResponse {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date;
  Description?: string;
  FeatureTypes?: FeatureType[];
  AutoUpdate?: AutoUpdate;
  Tags?: { [key: string]: string | undefined };
}
export interface GetAdapterVersionRequest {
  AdapterId: string;
  AdapterVersion: string;
}
export type AdapterVersionStatus =
  | "ACTIVE"
  | "AT_RISK"
  | "DEPRECATED"
  | "CREATION_ERROR"
  | "CREATION_IN_PROGRESS"
  | (string & {});
export type AdapterVersionStatusMessage = string;
export interface EvaluationMetric {
  F1Score?: number;
  Precision?: number;
  Recall?: number;
}
export interface AdapterVersionEvaluationMetric {
  Baseline?: EvaluationMetric;
  AdapterVersion?: EvaluationMetric;
  FeatureType?: FeatureType;
}
export type AdapterVersionEvaluationMetrics = AdapterVersionEvaluationMetric[];
export interface GetAdapterVersionResponse {
  AdapterId?: string;
  AdapterVersion?: string;
  CreationTime?: Date;
  FeatureTypes?: FeatureType[];
  Status?: AdapterVersionStatus;
  StatusMessage?: string;
  DatasetConfig?: AdapterVersionDatasetConfig;
  KMSKeyId?: string;
  OutputConfig?: OutputConfig;
  EvaluationMetrics?: AdapterVersionEvaluationMetric[];
  Tags?: { [key: string]: string | undefined };
}
export type JobId = string;
export type MaxResults = number;
export type PaginationToken = string;
export interface GetDocumentAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type JobStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "PARTIAL_SUCCESS" | (string & {});
export type ErrorCode = string;
export type Pages = number[];
export interface Warning {
  ErrorCode?: string;
  Pages?: number[];
}
export type Warnings = Warning[];
export type StatusMessage = string;
export interface GetDocumentAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Blocks?: Block[];
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeDocumentModelVersion?: string;
}
export interface GetDocumentTextDetectionRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetDocumentTextDetectionResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Blocks?: Block[];
  Warnings?: Warning[];
  StatusMessage?: string;
  DetectDocumentTextModelVersion?: string;
}
export interface GetExpenseAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetExpenseAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  ExpenseDocuments?: ExpenseDocument[];
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeExpenseModelVersion?: string;
}
export interface GetLendingAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface Prediction {
  Value?: string;
  Confidence?: number;
}
export type PredictionList = Prediction[];
export interface PageClassification {
  PageType: Prediction[];
  PageNumber: Prediction[];
}
export interface LendingDetection {
  Text?: string;
  SelectionStatus?: SelectionStatus;
  Geometry?: Geometry;
  Confidence?: number;
}
export type LendingDetectionList = LendingDetection[];
export interface LendingField {
  Type?: string;
  KeyDetection?: LendingDetection;
  ValueDetections?: LendingDetection[];
}
export type LendingFieldList = LendingField[];
export interface SignatureDetection {
  Confidence?: number;
  Geometry?: Geometry;
}
export type SignatureDetectionList = SignatureDetection[];
export interface LendingDocument {
  LendingFields?: LendingField[];
  SignatureDetections?: SignatureDetection[];
}
export interface Extraction {
  LendingDocument?: LendingDocument;
  ExpenseDocument?: ExpenseDocument;
  IdentityDocument?: IdentityDocument;
}
export type ExtractionList = Extraction[];
export interface LendingResult {
  Page?: number;
  PageClassification?: PageClassification;
  Extractions?: Extraction[];
}
export type LendingResultList = LendingResult[];
export interface GetLendingAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Results?: LendingResult[];
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeLendingModelVersion?: string;
}
export interface GetLendingAnalysisSummaryRequest {
  JobId: string;
}
export type PageList = number[];
export interface SplitDocument {
  Index?: number;
  Pages?: number[];
}
export type SplitDocumentList = SplitDocument[];
export interface DetectedSignature {
  Page?: number;
}
export type DetectedSignatureList = DetectedSignature[];
export interface UndetectedSignature {
  Page?: number;
}
export type UndetectedSignatureList = UndetectedSignature[];
export interface DocumentGroup {
  Type?: string;
  SplitDocuments?: SplitDocument[];
  DetectedSignatures?: DetectedSignature[];
  UndetectedSignatures?: UndetectedSignature[];
}
export type DocumentGroupList = DocumentGroup[];
export type UndetectedDocumentTypeList = string[];
export interface LendingSummary {
  DocumentGroups?: DocumentGroup[];
  UndetectedDocumentTypes?: string[];
}
export interface GetLendingAnalysisSummaryResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  Summary?: LendingSummary;
  Warnings?: Warning[];
  StatusMessage?: string;
  AnalyzeLendingModelVersion?: string;
}
export interface ListAdaptersRequest {
  AfterCreationTime?: Date;
  BeforeCreationTime?: Date;
  MaxResults?: number;
  NextToken?: string;
}
export interface AdapterOverview {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date;
  FeatureTypes?: FeatureType[];
}
export type AdapterList = AdapterOverview[];
export interface ListAdaptersResponse {
  Adapters?: AdapterOverview[];
  NextToken?: string;
}
export interface ListAdapterVersionsRequest {
  AdapterId?: string;
  AfterCreationTime?: Date;
  BeforeCreationTime?: Date;
  MaxResults?: number;
  NextToken?: string;
}
export interface AdapterVersionOverview {
  AdapterId?: string;
  AdapterVersion?: string;
  CreationTime?: Date;
  FeatureTypes?: FeatureType[];
  Status?: AdapterVersionStatus;
  StatusMessage?: string;
}
export type AdapterVersionList = AdapterVersionOverview[];
export interface ListAdapterVersionsResponse {
  AdapterVersions?: AdapterVersionOverview[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface DocumentLocation {
  S3Object?: S3Object;
}
export type JobTag = string;
export type SNSTopicArn = string;
export type RoleArn = string;
export interface NotificationChannel {
  SNSTopicArn: string;
  RoleArn: string;
}
export interface StartDocumentAnalysisRequest {
  DocumentLocation: DocumentLocation;
  FeatureTypes: FeatureType[];
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
  QueriesConfig?: QueriesConfig;
  AdaptersConfig?: AdaptersConfig;
}
export interface StartDocumentAnalysisResponse {
  JobId?: string;
}
export interface StartDocumentTextDetectionRequest {
  DocumentLocation: DocumentLocation;
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
}
export interface StartDocumentTextDetectionResponse {
  JobId?: string;
}
export interface StartExpenseAnalysisRequest {
  DocumentLocation: DocumentLocation;
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
}
export interface StartExpenseAnalysisResponse {
  JobId?: string;
}
export interface StartLendingAnalysisRequest {
  DocumentLocation: DocumentLocation;
  ClientRequestToken?: string;
  JobTag?: string;
  NotificationChannel?: NotificationChannel;
  OutputConfig?: OutputConfig;
  KMSKeyId?: string;
}
export interface StartLendingAnalysisResponse {
  JobId?: string;
}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAdapterRequest {
  AdapterId: string;
  Description?: string;
  AdapterName?: string;
  AutoUpdate?: AutoUpdate;
}
export interface UpdateAdapterResponse {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date;
  Description?: string;
  FeatureTypes?: FeatureType[];
  AutoUpdate?: AutoUpdate;
}
export type AnalyzeDocumentError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | HumanLoopQuotaExceededException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Analyzes an input document for relationships between detected items.
 *
 * The types of information returned are as follows:
 *
 * - Form data (key-value pairs). The related information is returned in two Block objects, each of type `KEY_VALUE_SET`: a KEY
 * `Block` object and a VALUE `Block` object. For example,
 * *Name: Ana Silva Carolina* contains a key and value.
 * *Name:* is the key. *Ana Silva Carolina* is
 * the value.
 *
 * - Table and table cell data. A TABLE `Block` object contains information
 * about a detected table. A CELL `Block` object is returned for each cell in
 * a table.
 *
 * - Lines and words of text. A LINE `Block` object contains one or more
 * WORD `Block` objects. All lines and words that are detected in the
 * document are returned (including text that doesn't have a relationship with the value
 * of `FeatureTypes`).
 *
 * - Signatures. A SIGNATURE `Block` object contains the location information
 * of a signature in a document. If used in conjunction with forms or tables, a signature
 * can be given a Key-Value pairing or be detected in the cell of a table.
 *
 * - Query. A QUERY Block object contains the query text, alias and link to the
 * associated Query results block object.
 *
 * - Query Result. A QUERY_RESULT Block object contains the answer to the query and an
 * ID that connects it to the query asked. This Block also contains a confidence
 * score.
 *
 * Selection elements such as check boxes and option buttons (radio buttons) can be
 * detected in form data and in tables. A SELECTION_ELEMENT `Block` object contains
 * information about a selection element, including the selection status.
 *
 * You can choose which type of analysis to perform by specifying the
 * `FeatureTypes` list.
 *
 * The output is returned in a list of `Block` objects.
 *
 * `AnalyzeDocument` is a synchronous operation. To analyze documents
 * asynchronously, use StartDocumentAnalysis.
 *
 * For more information, see Document Text
 * Analysis.
 */
export const analyzeDocument: API.OperationMethod<
  AnalyzeDocumentRequest,
  AnalyzeDocumentResponse,
  AnalyzeDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<AnalyzeDocumentRequest>,
  output: __S(23) as any as S.Schema<AnalyzeDocumentResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    HumanLoopQuotaExceededException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AnalyzeDocument",
}));

export type AnalyzeExpenseError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * `AnalyzeExpense` synchronously analyzes an input document for financially
 * related relationships between text.
 *
 * Information is returned as `ExpenseDocuments` and seperated as
 * follows:
 *
 * - `LineItemGroups`- A data set containing `LineItems` which
 * store information about the lines of text, such as an item purchased and its price on
 * a receipt.
 *
 * - `SummaryFields`- Contains all other information a receipt, such as
 * header information or the vendors name.
 */
export const analyzeExpense: API.OperationMethod<
  AnalyzeExpenseRequest,
  AnalyzeExpenseResponse,
  AnalyzeExpenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<AnalyzeExpenseRequest>,
  output: __S(38) as any as S.Schema<AnalyzeExpenseResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AnalyzeExpense",
}));

export type AnalyzeIDError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Analyzes identity documents for relevant information. This information is extracted and
 * returned as `IdentityDocumentFields`, which records both the normalized field
 * and value of the extracted text. Unlike other Amazon Textract operations,
 * `AnalyzeID` doesn't return any Geometry data.
 */
export const analyzeID: API.OperationMethod<
  AnalyzeIDRequest,
  AnalyzeIDResponse,
  AnalyzeIDError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<AnalyzeIDRequest>,
  output: __S(47) as any as S.Schema<AnalyzeIDResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AnalyzeID",
}));

export type CreateAdapterError =
  | AccessDeniedException
  | ConflictException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidParameterException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an adapter, which can be fine-tuned for enhanced performance on user provided
 * documents. Takes an AdapterName and FeatureType. Currently the only supported feature type
 * is `QUERIES`. You can also provide a Description, Tags, and a
 * ClientRequestToken. You can choose whether or not the adapter should be AutoUpdated with
 * the AutoUpdate argument. By default, AutoUpdate is set to DISABLED.
 */
export const createAdapter: API.OperationMethod<
  CreateAdapterRequest,
  CreateAdapterResponse,
  CreateAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<CreateAdapterRequest>,
  output: __S(50) as any as S.Schema<CreateAdapterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidParameterException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAdapter",
}));

export type CreateAdapterVersionError =
  | AccessDeniedException
  | ConflictException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new version of an adapter. Operates on a provided AdapterId and a specified
 * dataset provided via the DatasetConfig argument. Requires that you
 * specify an Amazon S3 bucket with the OutputConfig argument. You can provide an optional KMSKeyId,
 * an optional ClientRequestToken, and optional tags.
 */
export const createAdapterVersion: API.OperationMethod<
  CreateAdapterVersionRequest,
  CreateAdapterVersionResponse,
  CreateAdapterVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<CreateAdapterVersionRequest>,
  output: __S(54) as any as S.Schema<CreateAdapterVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAdapterVersion",
}));

export type DeleteAdapterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Textract adapter. Takes an AdapterId and deletes the adapter specified by the ID.
 */
export const deleteAdapter: API.OperationMethod<
  DeleteAdapterRequest,
  DeleteAdapterResponse,
  DeleteAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55) as any as S.Schema<DeleteAdapterRequest>,
  output: __S(56) as any as S.Schema<DeleteAdapterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAdapter",
}));

export type DeleteAdapterVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Textract adapter version. Requires that you specify both an AdapterId and a
 * AdapterVersion. Deletes the adapter version specified by the AdapterId and the AdapterVersion.
 */
export const deleteAdapterVersion: API.OperationMethod<
  DeleteAdapterVersionRequest,
  DeleteAdapterVersionResponse,
  DeleteAdapterVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57) as any as S.Schema<DeleteAdapterVersionRequest>,
  output: __S(56) as any as S.Schema<DeleteAdapterVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAdapterVersion",
}));

export type DetectDocumentTextError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | InternalServerError
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Detects text in the input document. Amazon Textract can detect lines of text and the
 * words that make up a line of text. The input document must be in one of the following image
 * formats: JPEG, PNG, PDF, or TIFF. `DetectDocumentText` returns the detected
 * text in an array of Block objects.
 *
 * Each document page has as an associated `Block` of type PAGE. Each PAGE `Block` object
 * is the parent of LINE `Block` objects that represent the lines of detected text on a page. A LINE `Block` object is
 * a parent for each word that makes up the line. Words are represented by `Block` objects of type WORD.
 *
 * `DetectDocumentText` is a synchronous operation. To analyze documents
 * asynchronously, use StartDocumentTextDetection.
 *
 * For more information, see Document Text Detection.
 */
export const detectDocumentText: API.OperationMethod<
  DetectDocumentTextRequest,
  DetectDocumentTextResponse,
  DetectDocumentTextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<DetectDocumentTextRequest>,
  output: __S(59) as any as S.Schema<DetectDocumentTextResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    InternalServerError,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectDocumentText",
}));

export type GetAdapterError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets configuration information for an adapter specified by an AdapterId, returning information on AdapterName, Description,
 * CreationTime, AutoUpdate status, and FeatureTypes.
 */
export const getAdapter: API.OperationMethod<
  GetAdapterRequest,
  GetAdapterResponse,
  GetAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<GetAdapterRequest>,
  output: __S(61) as any as S.Schema<GetAdapterResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdapter",
}));

export type GetAdapterVersionError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets configuration information for the specified adapter version, including:
 * AdapterId, AdapterVersion, FeatureTypes, Status, StatusMessage, DatasetConfig,
 * KMSKeyId, OutputConfig, Tags and EvaluationMetrics.
 */
export const getAdapterVersion: API.OperationMethod<
  GetAdapterVersionRequest,
  GetAdapterVersionResponse,
  GetAdapterVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<GetAdapterVersionRequest>,
  output: __S(66) as any as S.Schema<GetAdapterVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdapterVersion",
}));

export type GetDocumentAnalysisError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that analyzes text in a
 * document.
 *
 * You start asynchronous text analysis by calling StartDocumentAnalysis,
 * which returns a job identifier (`JobId`). When the text analysis operation
 * finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic
 * that's registered in the initial call to `StartDocumentAnalysis`. To get the
 * results of the text-detection operation, first check that the status value published to the
 * Amazon SNS topic is `SUCCEEDED`. If so, call `GetDocumentAnalysis`, and
 * pass the job identifier (`JobId`) from the initial call to
 * `StartDocumentAnalysis`.
 *
 * `GetDocumentAnalysis` returns an array of Block objects.
 * The following types of information are returned:
 *
 * - Form data (key-value pairs). The related information is returned in two Block objects, each of type `KEY_VALUE_SET`: a KEY
 * `Block` object and a VALUE `Block` object. For example,
 * *Name: Ana Silva Carolina* contains a key and value.
 * *Name:* is the key. *Ana Silva Carolina* is
 * the value.
 *
 * - Table and table cell data. A TABLE `Block` object contains information
 * about a detected table. A CELL `Block` object is returned for each cell in
 * a table.
 *
 * - Lines and words of text. A LINE `Block` object contains one or more
 * WORD `Block` objects. All lines and words that are detected in the
 * document are returned (including text that doesn't have a relationship with the value
 * of the `StartDocumentAnalysis`
 * `FeatureTypes` input parameter).
 *
 * - Query. A QUERY Block object contains the query text, alias and link to the
 * associated Query results block object.
 *
 * - Query Results. A QUERY_RESULT Block object contains the answer to the query and an
 * ID that connects it to the query asked. This Block also contains a confidence
 * score.
 *
 * While processing a document with queries, look out for
 * `INVALID_REQUEST_PARAMETERS` output. This indicates that either the per
 * page query limit has been exceeded or that the operation is trying to query a page in
 * the document which doesn't exist.
 *
 * Selection elements such as check boxes and option buttons (radio buttons) can be
 * detected in form data and in tables. A SELECTION_ELEMENT `Block` object contains
 * information about a selection element, including the selection status.
 *
 * Use the `MaxResults` parameter to limit the number of blocks that are
 * returned. If there are more results than specified in `MaxResults`, the value of
 * `NextToken` in the operation response contains a pagination token for getting
 * the next set of results. To get the next page of results, call
 * `GetDocumentAnalysis`, and populate the `NextToken` request
 * parameter with the token value that's returned from the previous call to
 * `GetDocumentAnalysis`.
 *
 * For more information, see Document Text
 * Analysis.
 */
export const getDocumentAnalysis: API.OperationMethod<
  GetDocumentAnalysisRequest,
  GetDocumentAnalysisResponse,
  GetDocumentAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<GetDocumentAnalysisRequest>,
  output: __S(71) as any as S.Schema<GetDocumentAnalysisResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDocumentAnalysis",
}));

export type GetDocumentTextDetectionError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that detects text in a document.
 * Amazon Textract can detect lines of text and the words that make up a line of text.
 *
 * You start asynchronous text detection by calling StartDocumentTextDetection, which returns a job identifier
 * (`JobId`). When the text detection operation finishes, Amazon Textract publishes a
 * completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to
 * `StartDocumentTextDetection`. To get the results of the text-detection
 * operation, first check that the status value published to the Amazon SNS topic is
 * `SUCCEEDED`. If so, call `GetDocumentTextDetection`, and pass the
 * job identifier (`JobId`) from the initial call to
 * `StartDocumentTextDetection`.
 *
 * `GetDocumentTextDetection` returns an array of Block
 * objects.
 *
 * Each document page has as an associated `Block` of type PAGE. Each PAGE `Block` object
 * is the parent of LINE `Block` objects that represent the lines of detected text on a page. A LINE `Block` object is
 * a parent for each word that makes up the line. Words are represented by `Block` objects of type WORD.
 *
 * Use the MaxResults parameter to limit the number of blocks that are returned. If there
 * are more results than specified in `MaxResults`, the value of
 * `NextToken` in the operation response contains a pagination token for getting
 * the next set of results. To get the next page of results, call
 * `GetDocumentTextDetection`, and populate the `NextToken` request
 * parameter with the token value that's returned from the previous call to
 * `GetDocumentTextDetection`.
 *
 * For more information, see Document Text Detection.
 */
export const getDocumentTextDetection: API.OperationMethod<
  GetDocumentTextDetectionRequest,
  GetDocumentTextDetectionResponse,
  GetDocumentTextDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<GetDocumentTextDetectionRequest>,
  output: __S(73) as any as S.Schema<GetDocumentTextDetectionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDocumentTextDetection",
}));

export type GetExpenseAnalysisError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and
 * receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input
 * invoices and receipts.
 *
 * You start asynchronous invoice/receipt analysis by calling StartExpenseAnalysis, which returns a job identifier (`JobId`). Upon
 * completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the
 * Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to
 * `StartExpenseAnalysis`. To get the results of the invoice/receipt analysis operation,
 * first ensure that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so,
 * call `GetExpenseAnalysis`, and pass the job identifier (`JobId`) from the
 * initial call to `StartExpenseAnalysis`.
 *
 * Use the MaxResults parameter to limit the number of blocks that are returned. If there are
 * more results than specified in `MaxResults`, the value of `NextToken` in
 * the operation response contains a pagination token for getting the next set of results. To get
 * the next page of results, call `GetExpenseAnalysis`, and populate the
 * `NextToken` request parameter with the token value that's returned from the previous
 * call to `GetExpenseAnalysis`.
 *
 * For more information, see Analyzing Invoices and Receipts.
 */
export const getExpenseAnalysis: API.OperationMethod<
  GetExpenseAnalysisRequest,
  GetExpenseAnalysisResponse,
  GetExpenseAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<GetExpenseAnalysisRequest>,
  output: __S(75) as any as S.Schema<GetExpenseAnalysisResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExpenseAnalysis",
}));

export type GetLendingAnalysisError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the results for an Amazon Textract asynchronous operation that analyzes text in a
 * lending document.
 *
 * You start asynchronous text analysis by calling `StartLendingAnalysis`,
 * which returns a job identifier (`JobId`). When the text analysis operation
 * finishes, Amazon Textract publishes a completion status to the Amazon Simple
 * Notification Service (Amazon SNS) topic that's registered in the initial call to
 * `StartLendingAnalysis`.
 *
 * To get the results of the text analysis operation, first check that the status value
 * published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass
 * the job identifier (`JobId`) from the initial call to
 * `StartLendingAnalysis`.
 */
export const getLendingAnalysis: API.OperationMethod<
  GetLendingAnalysisRequest,
  GetLendingAnalysisResponse,
  GetLendingAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<GetLendingAnalysisRequest>,
  output: __S(91) as any as S.Schema<GetLendingAnalysisResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLendingAnalysis",
}));

export type GetLendingAnalysisSummaryError =
  | AccessDeniedException
  | InternalServerError
  | InvalidJobIdException
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summarized results for the `StartLendingAnalysis` operation, which analyzes
 * text in a lending document. The returned summary consists of information about documents grouped
 * together by a common document type. Information like detected signatures, page numbers, and split
 * documents is returned with respect to the type of grouped document.
 *
 * You start asynchronous text analysis by calling `StartLendingAnalysis`, which
 * returns a job identifier (`JobId`). When the text analysis operation finishes, Amazon
 * Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 * topic that's registered in the initial call to `StartLendingAnalysis`.
 *
 * To get the results of the text analysis operation, first check that the status value
 * published to the Amazon SNS topic is SUCCEEDED. If so, call
 * `GetLendingAnalysisSummary`, and pass the job identifier (`JobId`) from
 * the initial call to `StartLendingAnalysis`.
 */
export const getLendingAnalysisSummary: API.OperationMethod<
  GetLendingAnalysisSummaryRequest,
  GetLendingAnalysisSummaryResponse,
  GetLendingAnalysisSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<GetLendingAnalysisSummaryRequest>,
  output: __S(100) as any as S.Schema<GetLendingAnalysisSummaryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidJobIdException,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLendingAnalysisSummary",
}));

export type ListAdaptersError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all adapters that match the specified filtration criteria.
 */
export const listAdapters: API.PaginatedOperationMethod<
  ListAdaptersRequest,
  ListAdaptersResponse,
  ListAdaptersError,
  Credentials | HttpClient.HttpClient,
  AdapterOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(101) as any as S.Schema<ListAdaptersRequest>,
  output: __S(104) as any as S.Schema<ListAdaptersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdapters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Adapters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAdapterVersionsError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all version of an adapter that meet the specified filtration criteria.
 */
export const listAdapterVersions: API.PaginatedOperationMethod<
  ListAdapterVersionsRequest,
  ListAdapterVersionsResponse,
  ListAdapterVersionsError,
  Credentials | HttpClient.HttpClient,
  AdapterVersionOverview
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(105) as any as S.Schema<ListAdapterVersionsRequest>,
  output: __S(108) as any as S.Schema<ListAdapterVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdapterVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AdapterVersions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all tags for an Amazon Textract resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(110) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartDocumentAnalysisError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the asynchronous analysis of an input document for relationships between detected
 * items such as key-value pairs, tables, and selection elements.
 *
 * `StartDocumentAnalysis` can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
 * documents are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and file name
 * of the document.
 *
 * `StartDocumentAnalysis` returns a job identifier
 * (`JobId`) that you use to get the results of the operation. When text
 * analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 * topic that you specify in `NotificationChannel`. To get the results of the text
 * analysis operation, first check that the status value published to the Amazon SNS topic is
 * `SUCCEEDED`. If so, call GetDocumentAnalysis, and pass
 * the job identifier (`JobId`) from the initial call to
 * `StartDocumentAnalysis`.
 *
 * For more information, see Document Text Analysis.
 */
export const startDocumentAnalysis: API.OperationMethod<
  StartDocumentAnalysisRequest,
  StartDocumentAnalysisResponse,
  StartDocumentAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<StartDocumentAnalysisRequest>,
  output: __S(114) as any as S.Schema<StartDocumentAnalysisResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDocumentAnalysis",
}));

export type StartDocumentTextDetectionError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of
 * text and the words that make up a line of text.
 *
 * `StartDocumentTextDetection` can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
 * documents are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and file name
 * of the document.
 *
 * `StartDocumentTextDetection` returns a job identifier
 * (`JobId`) that you use to get the results of the operation. When text
 * detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 * topic that you specify in `NotificationChannel`. To get the results of the text
 * detection operation, first check that the status value published to the Amazon SNS topic is
 * `SUCCEEDED`. If so, call GetDocumentTextDetection, and
 * pass the job identifier (`JobId`) from the initial call to
 * `StartDocumentTextDetection`.
 *
 * For more information, see Document Text Detection.
 */
export const startDocumentTextDetection: API.OperationMethod<
  StartDocumentTextDetectionRequest,
  StartDocumentTextDetectionResponse,
  StartDocumentTextDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<StartDocumentTextDetectionRequest>,
  output: __S(114) as any as S.Schema<StartDocumentTextDetectionResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDocumentTextDetection",
}));

export type StartExpenseAnalysisError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the asynchronous analysis of invoices or receipts for data like contact information,
 * items purchased, and vendor names.
 *
 * `StartExpenseAnalysis` can analyze text in documents that are in JPEG, PNG, and
 * PDF format. The documents must be stored in an Amazon S3 bucket. Use the DocumentLocation parameter to specify the name of your S3 bucket and the name of the
 * document in that bucket.
 *
 * `StartExpenseAnalysis` returns a job identifier (`JobId`) that you
 * will provide to `GetExpenseAnalysis` to retrieve the results of the operation. When
 * the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion
 * status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the `NotificationChannel`.
 * To obtain the results of the invoice and receipt analysis operation, ensure that the status value
 * published to the Amazon SNS topic is `SUCCEEDED`. If so, call GetExpenseAnalysis, and pass the job identifier (`JobId`) that was
 * returned by your call to `StartExpenseAnalysis`.
 *
 * For more information, see Analyzing Invoices and Receipts.
 */
export const startExpenseAnalysis: API.OperationMethod<
  StartExpenseAnalysisRequest,
  StartExpenseAnalysisResponse,
  StartExpenseAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116) as any as S.Schema<StartExpenseAnalysisRequest>,
  output: __S(114) as any as S.Schema<StartExpenseAnalysisResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartExpenseAnalysis",
}));

export type StartLendingAnalysisError =
  | AccessDeniedException
  | BadDocumentException
  | DocumentTooLargeException
  | IdempotentParameterMismatchException
  | InternalServerError
  | InvalidKMSKeyException
  | InvalidParameterException
  | InvalidS3ObjectException
  | LimitExceededException
  | ProvisionedThroughputExceededException
  | ThrottlingException
  | UnsupportedDocumentException
  | CommonErrors;
/**
 * Starts the classification and analysis of an input document.
 * `StartLendingAnalysis` initiates the classification and analysis of a packet of
 * lending documents. `StartLendingAnalysis` operates on a document file located in an
 * Amazon S3 bucket.
 *
 * `StartLendingAnalysis` can analyze text in documents that are in one of the
 * following formats: JPEG, PNG, TIFF, PDF. Use `DocumentLocation` to specify the bucket
 * name and the file name of the document.
 *
 * `StartLendingAnalysis` returns a job identifier (`JobId`) that you use
 * to get the results of the operation. When the text analysis is finished, Amazon Textract
 * publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that
 * you specify in `NotificationChannel`. To get the results of the text analysis
 * operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If
 * the status is SUCCEEDED you can call either `GetLendingAnalysis` or
 * `GetLendingAnalysisSummary` and provide the `JobId` to obtain the results
 * of the analysis.
 *
 * If using `OutputConfig` to specify an Amazon S3 bucket, the output will be contained
 * within the specified prefix in a directory labeled with the job-id. In the directory there are 3
 * sub-directories:
 *
 * - detailedResponse (contains the GetLendingAnalysis response)
 *
 * - summaryResponse (for the GetLendingAnalysisSummary response)
 *
 * - splitDocuments (documents split across logical boundaries)
 */
export const startLendingAnalysis: API.OperationMethod<
  StartLendingAnalysisRequest,
  StartLendingAnalysisResponse,
  StartLendingAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117) as any as S.Schema<StartLendingAnalysisRequest>,
  output: __S(114) as any as S.Schema<StartLendingAnalysisResponse>,
  errors: [
    AccessDeniedException,
    BadDocumentException,
    DocumentTooLargeException,
    IdempotentParameterMismatchException,
    InternalServerError,
    InvalidKMSKeyException,
    InvalidParameterException,
    InvalidS3ObjectException,
    LimitExceededException,
    ProvisionedThroughputExceededException,
    ThrottlingException,
    UnsupportedDocumentException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartLendingAnalysis",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<TagResourceRequest>,
  output: __S(56) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes any tags with the specified keys from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119) as any as S.Schema<UntagResourceRequest>,
  output: __S(56) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAdapterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerError
  | InvalidParameterException
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the configuration for an adapter. FeatureTypes configurations cannot be updated.
 * At least one new parameter must be specified as an argument.
 */
export const updateAdapter: API.OperationMethod<
  UpdateAdapterRequest,
  UpdateAdapterResponse,
  UpdateAdapterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<UpdateAdapterRequest>,
  output: __S(121) as any as S.Schema<UpdateAdapterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerError,
    InvalidParameterException,
    ProvisionedThroughputExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAdapter",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Name: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Object" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Bytes: S.optional(T.Blob), S3Object: S.optional(__S(0)) }),
      ).annotate({ identifier: "Document" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() => S.Struct({ ContentClassifiers: S.optional(__S(2)) })).annotate({
        identifier: "HumanLoopDataAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          HumanLoopName: S.String,
          FlowDefinitionArn: S.String,
          DataAttributes: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "HumanLoopConfig" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ Text: S.String, Alias: S.optional(S.String), Pages: S.optional(__S(5)) }),
      ).annotate({ identifier: "Query" });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Queries: __S(7) })).annotate({
        identifier: "QueriesConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String, Pages: S.optional(__S(5)), Version: S.String }),
      ).annotate({ identifier: "Adapter" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() => S.Struct({ Adapters: __S(10) })).annotate({
        identifier: "AdaptersConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Document: __S(1),
          FeatureTypes: __S(2),
          HumanLoopConfig: S.optional(__S(4)),
          QueriesConfig: S.optional(__S(8)),
          AdaptersConfig: S.optional(__S(11)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AnalyzeDocumentRequest" });
    case 5:
      return S.suspend(() => S.Struct({ Pages: S.optional(S.Number) })).annotate({
        identifier: "DocumentMetadata",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Width: S.optional(S.Number),
          Height: S.optional(S.Number),
          Left: S.optional(S.Number),
          Top: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BoundingBox" });
    case 7:
      return S.suspend(() =>
        S.Struct({ X: S.optional(S.Number), Y: S.optional(S.Number) }),
      ).annotate({ identifier: "Point" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({
          BoundingBox: S.optional(__S(14)),
          Polygon: S.optional(__S(16)),
          RotationAngle: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Geometry" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Ids: S.optional(__S(5)) }),
      ).annotate({ identifier: "Relationship" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          BlockType: S.optional(S.String),
          Confidence: S.optional(S.Number),
          Text: S.optional(S.String),
          TextType: S.optional(S.String),
          RowIndex: S.optional(S.Number),
          ColumnIndex: S.optional(S.Number),
          RowSpan: S.optional(S.Number),
          ColumnSpan: S.optional(S.Number),
          Geometry: S.optional(__S(17)),
          Id: S.optional(S.String),
          Relationships: S.optional(__S(19)),
          EntityTypes: S.optional(__S(2)),
          SelectionStatus: S.optional(S.String),
          Page: S.optional(S.Number),
          Query: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "Block" });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({
          HumanLoopArn: S.optional(S.String),
          HumanLoopActivationReasons: S.optional(__S(5)),
          HumanLoopActivationConditionsEvaluationResults: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HumanLoopActivationOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          Blocks: S.optional(__S(21)),
          HumanLoopActivationOutput: S.optional(__S(22)),
          AnalyzeDocumentModelVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyzeDocumentResponse" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Document: __S(1) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AnalyzeExpenseRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(S.String), Confidence: S.optional(S.Number) }),
      ).annotate({ identifier: "ExpenseType" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          Geometry: S.optional(__S(17)),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExpenseDetection" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Confidence: S.optional(S.Number) }),
      ).annotate({ identifier: "ExpenseCurrency" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Types: S.optional(__S(5)), Id: S.optional(S.String) }),
      ).annotate({ identifier: "ExpenseGroupProperty" });
    case 5:
      return S.Array(__S(28));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(__S(25)),
          LabelDetection: S.optional(__S(26)),
          ValueDetection: S.optional(__S(26)),
          PageNumber: S.optional(S.Number),
          Currency: S.optional(__S(27)),
          GroupProperties: S.optional(__S(29)),
        }),
      ).annotate({ identifier: "ExpenseField" });
    case 7:
      return S.Array(__S(30));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ LineItemExpenseFields: S.optional(__S(31)) })).annotate({
        identifier: "LineItemFields",
      });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.suspend(() =>
        S.Struct({ LineItemGroupIndex: S.optional(S.Number), LineItems: S.optional(__S(33)) }),
      ).annotate({ identifier: "LineItemGroup" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExpenseIndex: S.optional(S.Number),
          SummaryFields: S.optional(__S(31)),
          LineItemGroups: S.optional(__S(35)),
          Blocks: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "ExpenseDocument" });
    case 5:
      return S.Array(__S(36));
    case 6:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          ExpenseDocuments: S.optional(__S(37)),
        }),
      ).annotate({ identifier: "AnalyzeExpenseResponse" });
    case 7:
      return S.Array(__S(1));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DocumentPages: __S(39) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AnalyzeIDRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), ValueType: S.optional(S.String) }),
      ).annotate({ identifier: "NormalizedValue" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Text: S.String,
          NormalizedValue: S.optional(__S(41)),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AnalyzeIDDetections" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(__S(42)),
          ValueDetection: S.optional(__S(42)),
        }),
      ).annotate({ identifier: "IdentityDocumentField" });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DocumentIndex: S.optional(S.Number),
          IdentityDocumentFields: S.optional(__S(44)),
          Blocks: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "IdentityDocument" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          IdentityDocuments: S.optional(__S(46)),
          DocumentMetadata: S.optional(__S(13)),
          AnalyzeIDModelVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyzeIDResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdapterName: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Description: S.optional(S.String),
          FeatureTypes: __S(2),
          AutoUpdate: S.optional(S.String),
          Tags: S.optional(__S(48)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAdapterRequest" });
    case 2:
      return S.suspend(() => S.Struct({ AdapterId: S.optional(S.String) })).annotate({
        identifier: "CreateAdapterResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ ManifestS3Object: S.optional(__S(0)) })).annotate({
        identifier: "AdapterVersionDatasetConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ S3Bucket: S.String, S3Prefix: S.optional(S.String) }),
      ).annotate({ identifier: "OutputConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          DatasetConfig: __S(51),
          KMSKeyId: S.optional(S.String),
          OutputConfig: __S(52),
          Tags: S.optional(__S(48)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAdapterVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.optional(S.String), AdapterVersion: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateAdapterVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAdapterRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAdapterResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String, AdapterVersion: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAdapterVersionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Document: __S(1) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DetectDocumentTextRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          Blocks: S.optional(__S(21)),
          DetectDocumentTextModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DetectDocumentTextResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAdapterRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterName: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          FeatureTypes: S.optional(__S(2)),
          AutoUpdate: S.optional(S.String),
          Tags: S.optional(__S(48)),
        }),
      ).annotate({ identifier: "GetAdapterResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AdapterId: S.String, AdapterVersion: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAdapterVersionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          F1Score: S.optional(S.Number),
          Precision: S.optional(S.Number),
          Recall: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EvaluationMetric" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Baseline: S.optional(__S(63)),
          AdapterVersion: S.optional(__S(63)),
          FeatureType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AdapterVersionEvaluationMetric",
      });
    case 1:
      return S.Array(__S(64));
    case 2:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterVersion: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FeatureTypes: S.optional(__S(2)),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          DatasetConfig: S.optional(__S(51)),
          KMSKeyId: S.optional(S.String),
          OutputConfig: S.optional(__S(52)),
          EvaluationMetrics: S.optional(__S(65)),
          Tags: S.optional(__S(48)),
        }),
      ).annotate({
        identifier: "GetAdapterVersionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDocumentAnalysisRequest",
      });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), Pages: S.optional(__S(68)) }),
      ).annotate({ identifier: "Warning" });
    case 6:
      return S.Array(__S(69));
    case 7:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          JobStatus: S.optional(S.String),
          NextToken: S.optional(S.String),
          Blocks: S.optional(__S(21)),
          Warnings: S.optional(__S(70)),
          StatusMessage: S.optional(S.String),
          AnalyzeDocumentModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDocumentAnalysisResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDocumentTextDetectionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          JobStatus: S.optional(S.String),
          NextToken: S.optional(S.String),
          Blocks: S.optional(__S(21)),
          Warnings: S.optional(__S(70)),
          StatusMessage: S.optional(S.String),
          DetectDocumentTextModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDocumentTextDetectionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetExpenseAnalysisRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          JobStatus: S.optional(S.String),
          NextToken: S.optional(S.String),
          ExpenseDocuments: S.optional(__S(37)),
          Warnings: S.optional(__S(70)),
          StatusMessage: S.optional(S.String),
          AnalyzeExpenseModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetExpenseAnalysisResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetLendingAnalysisRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), Confidence: S.optional(S.Number) }),
      ).annotate({ identifier: "Prediction" });
    case 6:
      return S.Array(__S(77));
    case 7:
      return S.suspend(() => S.Struct({ PageType: __S(78), PageNumber: __S(78) })).annotate({
        identifier: "PageClassification",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          SelectionStatus: S.optional(S.String),
          Geometry: S.optional(__S(17)),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LendingDetection" });
    case 1:
      return S.Array(__S(80));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          KeyDetection: S.optional(__S(80)),
          ValueDetections: S.optional(__S(81)),
        }),
      ).annotate({ identifier: "LendingField" });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() =>
        S.Struct({ Confidence: S.optional(S.Number), Geometry: S.optional(__S(17)) }),
      ).annotate({ identifier: "SignatureDetection" });
    case 5:
      return S.Array(__S(84));
    case 6:
      return S.suspend(() =>
        S.Struct({
          LendingFields: S.optional(__S(83)),
          SignatureDetections: S.optional(__S(85)),
        }),
      ).annotate({ identifier: "LendingDocument" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LendingDocument: S.optional(__S(86)),
          ExpenseDocument: S.optional(__S(36)),
          IdentityDocument: S.optional(__S(45)),
        }),
      ).annotate({ identifier: "Extraction" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Page: S.optional(S.Number),
          PageClassification: S.optional(__S(79)),
          Extractions: S.optional(__S(88)),
        }),
      ).annotate({ identifier: "LendingResult" });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          JobStatus: S.optional(S.String),
          NextToken: S.optional(S.String),
          Results: S.optional(__S(90)),
          Warnings: S.optional(__S(70)),
          StatusMessage: S.optional(S.String),
          AnalyzeLendingModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetLendingAnalysisResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLendingAnalysisSummaryRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Index: S.optional(S.Number), Pages: S.optional(__S(68)) }),
      ).annotate({ identifier: "SplitDocument" });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() => S.Struct({ Page: S.optional(S.Number) })).annotate({
        identifier: "DetectedSignature",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          SplitDocuments: S.optional(__S(94)),
          DetectedSignatures: S.optional(__S(96)),
          UndetectedSignatures: S.optional(__S(96)),
        }),
      ).annotate({ identifier: "DocumentGroup" });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentGroups: S.optional(__S(98)),
          UndetectedDocumentTypes: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "LendingSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DocumentMetadata: S.optional(__S(13)),
          JobStatus: S.optional(S.String),
          Summary: S.optional(__S(99)),
          Warnings: S.optional(__S(70)),
          StatusMessage: S.optional(S.String),
          AnalyzeLendingModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetLendingAnalysisSummaryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AfterCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          BeforeCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAdaptersRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterName: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FeatureTypes: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "AdapterOverview" });
    case 7:
      return S.Array(__S(102));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Adapters: S.optional(__S(103)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAdaptersResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AfterCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          BeforeCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAdapterVersionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterVersion: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FeatureTypes: S.optional(__S(2)),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AdapterVersionOverview" });
    case 3:
      return S.Array(__S(106));
    case 4:
      return S.suspend(() =>
        S.Struct({
          AdapterVersions: S.optional(__S(107)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAdapterVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(48)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ S3Object: S.optional(__S(0)) })).annotate({
        identifier: "DocumentLocation",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ SNSTopicArn: S.String, RoleArn: S.String })).annotate({
        identifier: "NotificationChannel",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: __S(111),
          FeatureTypes: __S(2),
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(__S(112)),
          OutputConfig: S.optional(__S(52)),
          KMSKeyId: S.optional(S.String),
          QueriesConfig: S.optional(__S(8)),
          AdaptersConfig: S.optional(__S(11)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDocumentAnalysisRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ JobId: S.optional(S.String) })).annotate({
        identifier: "StartDocumentAnalysisResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: __S(111),
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(__S(112)),
          OutputConfig: S.optional(__S(52)),
          KMSKeyId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDocumentTextDetectionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: __S(111),
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(__S(112)),
          OutputConfig: S.optional(__S(52)),
          KMSKeyId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartExpenseAnalysisRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DocumentLocation: __S(111),
          ClientRequestToken: S.optional(S.String),
          JobTag: S.optional(S.String),
          NotificationChannel: S.optional(__S(112)),
          OutputConfig: S.optional(__S(52)),
          KMSKeyId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartLendingAnalysisRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(48) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(5) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.String,
          Description: S.optional(S.String),
          AdapterName: S.optional(S.String),
          AutoUpdate: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateAdapterRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdapterId: S.optional(S.String),
          AdapterName: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          FeatureTypes: S.optional(__S(2)),
          AutoUpdate: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateAdapterResponse" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
  }
}
