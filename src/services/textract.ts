import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Textract extends AWSServiceClient {
  analyzeDocument(
    input: AnalyzeDocumentRequest,
  ): Effect.Effect<
    AnalyzeDocumentResponse,
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
    | CommonAwsError
  >;
  analyzeExpense(
    input: AnalyzeExpenseRequest,
  ): Effect.Effect<
    AnalyzeExpenseResponse,
    | AccessDeniedException
    | BadDocumentException
    | DocumentTooLargeException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | UnsupportedDocumentException
    | CommonAwsError
  >;
  analyzeID(
    input: AnalyzeIDRequest,
  ): Effect.Effect<
    AnalyzeIDResponse,
    | AccessDeniedException
    | BadDocumentException
    | DocumentTooLargeException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | UnsupportedDocumentException
    | CommonAwsError
  >;
  createAdapter(
    input: CreateAdapterRequest,
  ): Effect.Effect<
    CreateAdapterResponse,
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
    | CommonAwsError
  >;
  createAdapterVersion(
    input: CreateAdapterVersionRequest,
  ): Effect.Effect<
    CreateAdapterVersionResponse,
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
    | CommonAwsError
  >;
  deleteAdapter(
    input: DeleteAdapterRequest,
  ): Effect.Effect<
    DeleteAdapterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAdapterVersion(
    input: DeleteAdapterVersionRequest,
  ): Effect.Effect<
    DeleteAdapterVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  detectDocumentText(
    input: DetectDocumentTextRequest,
  ): Effect.Effect<
    DetectDocumentTextResponse,
    | AccessDeniedException
    | BadDocumentException
    | DocumentTooLargeException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | UnsupportedDocumentException
    | CommonAwsError
  >;
  getAdapter(
    input: GetAdapterRequest,
  ): Effect.Effect<
    GetAdapterResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAdapterVersion(
    input: GetAdapterVersionRequest,
  ): Effect.Effect<
    GetAdapterVersionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDocumentAnalysis(
    input: GetDocumentAnalysisRequest,
  ): Effect.Effect<
    GetDocumentAnalysisResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  getDocumentTextDetection(
    input: GetDocumentTextDetectionRequest,
  ): Effect.Effect<
    GetDocumentTextDetectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  getExpenseAnalysis(
    input: GetExpenseAnalysisRequest,
  ): Effect.Effect<
    GetExpenseAnalysisResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  getLendingAnalysis(
    input: GetLendingAnalysisRequest,
  ): Effect.Effect<
    GetLendingAnalysisResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  getLendingAnalysisSummary(
    input: GetLendingAnalysisSummaryRequest,
  ): Effect.Effect<
    GetLendingAnalysisSummaryResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  listAdapters(
    input: ListAdaptersRequest,
  ): Effect.Effect<
    ListAdaptersResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAdapterVersions(
    input: ListAdapterVersionsRequest,
  ): Effect.Effect<
    ListAdapterVersionsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startDocumentAnalysis(
    input: StartDocumentAnalysisRequest,
  ): Effect.Effect<
    StartDocumentAnalysisResponse,
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
    | CommonAwsError
  >;
  startDocumentTextDetection(
    input: StartDocumentTextDetectionRequest,
  ): Effect.Effect<
    StartDocumentTextDetectionResponse,
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
    | CommonAwsError
  >;
  startExpenseAnalysis(
    input: StartExpenseAnalysisRequest,
  ): Effect.Effect<
    StartExpenseAnalysisResponse,
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
    | CommonAwsError
  >;
  startLendingAnalysis(
    input: StartLendingAnalysisRequest,
  ): Effect.Effect<
    StartLendingAnalysisResponse,
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
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAdapter(
    input: UpdateAdapterRequest,
  ): Effect.Effect<
    UpdateAdapterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface Adapter {
  AdapterId: string;
  Pages?: Array<string>;
  Version: string;
}
export type AdapterDescription = string;

export type AdapterId = string;

export type AdapterList = Array<AdapterOverview>;
export type AdapterName = string;

export interface AdapterOverview {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date | string;
  FeatureTypes?: Array<FeatureType>;
}
export type AdapterPage = string;

export type AdapterPages = Array<string>;
export type Adapters = Array<Adapter>;
export interface AdaptersConfig {
  Adapters: Array<Adapter>;
}
export type AdapterVersion = string;

export interface AdapterVersionDatasetConfig {
  ManifestS3Object?: S3Object;
}
export interface AdapterVersionEvaluationMetric {
  Baseline?: EvaluationMetric;
  AdapterVersion?: EvaluationMetric;
  FeatureType?: FeatureType;
}
export type AdapterVersionEvaluationMetrics =
  Array<AdapterVersionEvaluationMetric>;
export type AdapterVersionList = Array<AdapterVersionOverview>;
export interface AdapterVersionOverview {
  AdapterId?: string;
  AdapterVersion?: string;
  CreationTime?: Date | string;
  FeatureTypes?: Array<FeatureType>;
  Status?: AdapterVersionStatus;
  StatusMessage?: string;
}
export type AdapterVersionStatus =
  | "ACTIVE"
  | "AT_RISK"
  | "DEPRECATED"
  | "CREATION_ERROR"
  | "CREATION_IN_PROGRESS";
export type AdapterVersionStatusMessage = string;

export type AmazonResourceName = string;

export interface AnalyzeDocumentRequest {
  Document: Document;
  FeatureTypes: Array<FeatureType>;
  HumanLoopConfig?: HumanLoopConfig;
  QueriesConfig?: QueriesConfig;
  AdaptersConfig?: AdaptersConfig;
}
export interface AnalyzeDocumentResponse {
  DocumentMetadata?: DocumentMetadata;
  Blocks?: Array<Block>;
  HumanLoopActivationOutput?: HumanLoopActivationOutput;
  AnalyzeDocumentModelVersion?: string;
}
export interface AnalyzeExpenseRequest {
  Document: Document;
}
export interface AnalyzeExpenseResponse {
  DocumentMetadata?: DocumentMetadata;
  ExpenseDocuments?: Array<ExpenseDocument>;
}
export interface AnalyzeIDDetections {
  Text: string;
  NormalizedValue?: NormalizedValue;
  Confidence?: number;
}
export interface AnalyzeIDRequest {
  DocumentPages: Array<Document>;
}
export interface AnalyzeIDResponse {
  IdentityDocuments?: Array<IdentityDocument>;
  DocumentMetadata?: DocumentMetadata;
  AnalyzeIDModelVersion?: string;
}
export type Angle = number;

export type AutoUpdate = "ENABLED" | "DISABLED";
export declare class BadDocumentException extends EffectData.TaggedError(
  "BadDocumentException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
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
  Relationships?: Array<Relationship>;
  EntityTypes?: Array<EntityType>;
  SelectionStatus?: SelectionStatus;
  Page?: number;
  Query?: Query;
}
export type BlockList = Array<Block>;
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
  | "LAYOUT_KEY_VALUE";
export interface BoundingBox {
  Width?: number;
  Height?: number;
  Left?: number;
  Top?: number;
}
export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type ContentClassifier =
  | "FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"
  | "FREE_OF_ADULT_CONTENT";
export type ContentClassifiers = Array<ContentClassifier>;
export interface CreateAdapterRequest {
  AdapterName: string;
  ClientRequestToken?: string;
  Description?: string;
  FeatureTypes: Array<FeatureType>;
  AutoUpdate?: AutoUpdate;
  Tags?: Record<string, string>;
}
export interface CreateAdapterResponse {
  AdapterId?: string;
}
export interface CreateAdapterVersionRequest {
  AdapterId: string;
  ClientRequestToken?: string;
  DatasetConfig: AdapterVersionDatasetConfig;
  KMSKeyId?: string;
  OutputConfig: OutputConfig;
  Tags?: Record<string, string>;
}
export interface CreateAdapterVersionResponse {
  AdapterId?: string;
  AdapterVersion?: string;
}
export type DateTime = Date | string;

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
  Blocks?: Array<Block>;
  DetectDocumentTextModelVersion?: string;
}
export interface DetectedSignature {
  Page?: number;
}
export type DetectedSignatureList = Array<DetectedSignature>;
export interface Document {
  Bytes?: Uint8Array | string;
  S3Object?: S3Object;
}
export interface DocumentGroup {
  Type?: string;
  SplitDocuments?: Array<SplitDocument>;
  DetectedSignatures?: Array<DetectedSignature>;
  UndetectedSignatures?: Array<UndetectedSignature>;
}
export type DocumentGroupList = Array<DocumentGroup>;
export interface DocumentLocation {
  S3Object?: S3Object;
}
export interface DocumentMetadata {
  Pages?: number;
}
export type DocumentPages = Array<Document>;
export declare class DocumentTooLargeException extends EffectData.TaggedError(
  "DocumentTooLargeException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type EntityType =
  | "KEY"
  | "VALUE"
  | "COLUMN_HEADER"
  | "TABLE_TITLE"
  | "TABLE_FOOTER"
  | "TABLE_SECTION_TITLE"
  | "TABLE_SUMMARY"
  | "STRUCTURED_TABLE"
  | "SEMI_STRUCTURED_TABLE";
export type EntityTypes = Array<EntityType>;
export type ErrorCode = string;

export interface EvaluationMetric {
  F1Score?: number;
  Precision?: number;
  Recall?: number;
}
export interface ExpenseCurrency {
  Code?: string;
  Confidence?: number;
}
export interface ExpenseDetection {
  Text?: string;
  Geometry?: Geometry;
  Confidence?: number;
}
export interface ExpenseDocument {
  ExpenseIndex?: number;
  SummaryFields?: Array<ExpenseField>;
  LineItemGroups?: Array<LineItemGroup>;
  Blocks?: Array<Block>;
}
export type ExpenseDocumentList = Array<ExpenseDocument>;
export interface ExpenseField {
  Type?: ExpenseType;
  LabelDetection?: ExpenseDetection;
  ValueDetection?: ExpenseDetection;
  PageNumber?: number;
  Currency?: ExpenseCurrency;
  GroupProperties?: Array<ExpenseGroupProperty>;
}
export type ExpenseFieldList = Array<ExpenseField>;
export interface ExpenseGroupProperty {
  Types?: Array<string>;
  Id?: string;
}
export type ExpenseGroupPropertyList = Array<ExpenseGroupProperty>;
export interface ExpenseType {
  Text?: string;
  Confidence?: number;
}
export interface Extraction {
  LendingDocument?: LendingDocument;
  ExpenseDocument?: ExpenseDocument;
  IdentityDocument?: IdentityDocument;
}
export type ExtractionList = Array<Extraction>;
export type FeatureType =
  | "TABLES"
  | "FORMS"
  | "QUERIES"
  | "SIGNATURES"
  | "LAYOUT";
export type FeatureTypes = Array<FeatureType>;
export type Float = number;

export type FlowDefinitionArn = string;

export interface Geometry {
  BoundingBox?: BoundingBox;
  Polygon?: Array<Point>;
  RotationAngle?: number;
}
export interface GetAdapterRequest {
  AdapterId: string;
}
export interface GetAdapterResponse {
  AdapterId?: string;
  AdapterName?: string;
  CreationTime?: Date | string;
  Description?: string;
  FeatureTypes?: Array<FeatureType>;
  AutoUpdate?: AutoUpdate;
  Tags?: Record<string, string>;
}
export interface GetAdapterVersionRequest {
  AdapterId: string;
  AdapterVersion: string;
}
export interface GetAdapterVersionResponse {
  AdapterId?: string;
  AdapterVersion?: string;
  CreationTime?: Date | string;
  FeatureTypes?: Array<FeatureType>;
  Status?: AdapterVersionStatus;
  StatusMessage?: string;
  DatasetConfig?: AdapterVersionDatasetConfig;
  KMSKeyId?: string;
  OutputConfig?: OutputConfig;
  EvaluationMetrics?: Array<AdapterVersionEvaluationMetric>;
  Tags?: Record<string, string>;
}
export interface GetDocumentAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetDocumentAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Blocks?: Array<Block>;
  Warnings?: Array<Warning>;
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
  Blocks?: Array<Block>;
  Warnings?: Array<Warning>;
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
  ExpenseDocuments?: Array<ExpenseDocument>;
  Warnings?: Array<Warning>;
  StatusMessage?: string;
  AnalyzeExpenseModelVersion?: string;
}
export interface GetLendingAnalysisRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetLendingAnalysisResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  NextToken?: string;
  Results?: Array<LendingResult>;
  Warnings?: Array<Warning>;
  StatusMessage?: string;
  AnalyzeLendingModelVersion?: string;
}
export interface GetLendingAnalysisSummaryRequest {
  JobId: string;
}
export interface GetLendingAnalysisSummaryResponse {
  DocumentMetadata?: DocumentMetadata;
  JobStatus?: JobStatus;
  Summary?: LendingSummary;
  Warnings?: Array<Warning>;
  StatusMessage?: string;
  AnalyzeLendingModelVersion?: string;
}
export interface HumanLoopActivationOutput {
  HumanLoopArn?: string;
  HumanLoopActivationReasons?: Array<string>;
  HumanLoopActivationConditionsEvaluationResults?: string;
}
export type HumanLoopActivationReason = string;

export type HumanLoopActivationReasons = Array<string>;
export type HumanLoopArn = string;

export interface HumanLoopConfig {
  HumanLoopName: string;
  FlowDefinitionArn: string;
  DataAttributes?: HumanLoopDataAttributes;
}
export interface HumanLoopDataAttributes {
  ContentClassifiers?: Array<ContentClassifier>;
}
export type HumanLoopName = string;

export declare class HumanLoopQuotaExceededException extends EffectData.TaggedError(
  "HumanLoopQuotaExceededException",
)<{
  readonly ResourceType?: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class IdempotentParameterMismatchException extends EffectData.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface IdentityDocument {
  DocumentIndex?: number;
  IdentityDocumentFields?: Array<IdentityDocumentField>;
  Blocks?: Array<Block>;
}
export interface IdentityDocumentField {
  Type?: AnalyzeIDDetections;
  ValueDetection?: AnalyzeIDDetections;
}
export type IdentityDocumentFieldList = Array<IdentityDocumentField>;
export type IdentityDocumentList = Array<IdentityDocument>;
export type IdList = Array<string>;
export type ImageBlob = Uint8Array | string;

export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class InvalidJobIdException extends EffectData.TaggedError(
  "InvalidJobIdException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class InvalidKMSKeyException extends EffectData.TaggedError(
  "InvalidKMSKeyException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export declare class InvalidS3ObjectException extends EffectData.TaggedError(
  "InvalidS3ObjectException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type JobId = string;

export type JobStatus =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "PARTIAL_SUCCESS";
export type JobTag = string;

export type KMSKeyId = string;

export interface LendingDetection {
  Text?: string;
  SelectionStatus?: SelectionStatus;
  Geometry?: Geometry;
  Confidence?: number;
}
export type LendingDetectionList = Array<LendingDetection>;
export interface LendingDocument {
  LendingFields?: Array<LendingField>;
  SignatureDetections?: Array<SignatureDetection>;
}
export interface LendingField {
  Type?: string;
  KeyDetection?: LendingDetection;
  ValueDetections?: Array<LendingDetection>;
}
export type LendingFieldList = Array<LendingField>;
export interface LendingResult {
  Page?: number;
  PageClassification?: PageClassification;
  Extractions?: Array<Extraction>;
}
export type LendingResultList = Array<LendingResult>;
export interface LendingSummary {
  DocumentGroups?: Array<DocumentGroup>;
  UndetectedDocumentTypes?: Array<string>;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface LineItemFields {
  LineItemExpenseFields?: Array<ExpenseField>;
}
export interface LineItemGroup {
  LineItemGroupIndex?: number;
  LineItems?: Array<LineItemFields>;
}
export type LineItemGroupList = Array<LineItemGroup>;
export type LineItemList = Array<LineItemFields>;
export interface ListAdaptersRequest {
  AfterCreationTime?: Date | string;
  BeforeCreationTime?: Date | string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAdaptersResponse {
  Adapters?: Array<AdapterOverview>;
  NextToken?: string;
}
export interface ListAdapterVersionsRequest {
  AdapterId?: string;
  AfterCreationTime?: Date | string;
  BeforeCreationTime?: Date | string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAdapterVersionsResponse {
  AdapterVersions?: Array<AdapterVersionOverview>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MaxResults = number;

export type NonEmptyString = string;

export interface NormalizedValue {
  Value?: string;
  ValueType?: ValueType;
}
export interface NotificationChannel {
  SNSTopicArn: string;
  RoleArn: string;
}
export interface OutputConfig {
  S3Bucket: string;
  S3Prefix?: string;
}
export interface PageClassification {
  PageType: Array<Prediction>;
  PageNumber: Array<Prediction>;
}
export type PageList = Array<number>;
export type Pages = Array<number>;
export type PaginationToken = string;

export type Percent = number;

export interface Point {
  X?: number;
  Y?: number;
}
export type Polygon = Array<Point>;
export interface Prediction {
  Value?: string;
  Confidence?: number;
}
export type PredictionList = Array<Prediction>;
export declare class ProvisionedThroughputExceededException extends EffectData.TaggedError(
  "ProvisionedThroughputExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type Queries = Array<Query>;
export interface QueriesConfig {
  Queries: Array<Query>;
}
export interface Query {
  Text: string;
  Alias?: string;
  Pages?: Array<string>;
}
export type QueryInput = string;

export type QueryPage = string;

export type QueryPages = Array<string>;
export interface Relationship {
  Type?: RelationshipType;
  Ids?: Array<string>;
}
export type RelationshipList = Array<Relationship>;
export type RelationshipType =
  | "VALUE"
  | "CHILD"
  | "COMPLEX_FEATURES"
  | "MERGED_CELL"
  | "TITLE"
  | "ANSWER"
  | "TABLE"
  | "TABLE_TITLE"
  | "TABLE_FOOTER";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type RoleArn = string;

export type S3Bucket = string;

export interface S3Object {
  Bucket?: string;
  Name?: string;
  Version?: string;
}
export type S3ObjectName = string;

export type S3ObjectVersion = string;

export type SelectionStatus = "SELECTED" | "NOT_SELECTED";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface SignatureDetection {
  Confidence?: number;
  Geometry?: Geometry;
}
export type SignatureDetectionList = Array<SignatureDetection>;
export type SNSTopicArn = string;

export interface SplitDocument {
  Index?: number;
  Pages?: Array<number>;
}
export type SplitDocumentList = Array<SplitDocument>;
export interface StartDocumentAnalysisRequest {
  DocumentLocation: DocumentLocation;
  FeatureTypes: Array<FeatureType>;
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
export type StatusMessage = string;

export type TextractString = string;

export type StringList = Array<string>;
export type SynthesizedJsonHumanLoopActivationConditionsEvaluationResults =
  string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TextType = "HANDWRITING" | "PRINTED";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type UInteger = number;

export type UndetectedDocumentTypeList = Array<string>;
export interface UndetectedSignature {
  Page?: number;
}
export type UndetectedSignatureList = Array<UndetectedSignature>;
export declare class UnsupportedDocumentException extends EffectData.TaggedError(
  "UnsupportedDocumentException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
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
  CreationTime?: Date | string;
  Description?: string;
  FeatureTypes?: Array<FeatureType>;
  AutoUpdate?: AutoUpdate;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly Code?: string;
}> {}
export type ValueType = "DATE";
export interface Warning {
  ErrorCode?: string;
  Pages?: Array<number>;
}
export type Warnings = Array<Warning>;
export declare namespace AnalyzeDocument {
  export type Input = AnalyzeDocumentRequest;
  export type Output = AnalyzeDocumentResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace AnalyzeExpense {
  export type Input = AnalyzeExpenseRequest;
  export type Output = AnalyzeExpenseResponse;
  export type Error =
    | AccessDeniedException
    | BadDocumentException
    | DocumentTooLargeException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | UnsupportedDocumentException
    | CommonAwsError;
}

export declare namespace AnalyzeID {
  export type Input = AnalyzeIDRequest;
  export type Output = AnalyzeIDResponse;
  export type Error =
    | AccessDeniedException
    | BadDocumentException
    | DocumentTooLargeException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | UnsupportedDocumentException
    | CommonAwsError;
}

export declare namespace CreateAdapter {
  export type Input = CreateAdapterRequest;
  export type Output = CreateAdapterResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace CreateAdapterVersion {
  export type Input = CreateAdapterVersionRequest;
  export type Output = CreateAdapterVersionResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace DeleteAdapter {
  export type Input = DeleteAdapterRequest;
  export type Output = DeleteAdapterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAdapterVersion {
  export type Input = DeleteAdapterVersionRequest;
  export type Output = DeleteAdapterVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetectDocumentText {
  export type Input = DetectDocumentTextRequest;
  export type Output = DetectDocumentTextResponse;
  export type Error =
    | AccessDeniedException
    | BadDocumentException
    | DocumentTooLargeException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | UnsupportedDocumentException
    | CommonAwsError;
}

export declare namespace GetAdapter {
  export type Input = GetAdapterRequest;
  export type Output = GetAdapterResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAdapterVersion {
  export type Input = GetAdapterVersionRequest;
  export type Output = GetAdapterVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDocumentAnalysis {
  export type Input = GetDocumentAnalysisRequest;
  export type Output = GetDocumentAnalysisResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDocumentTextDetection {
  export type Input = GetDocumentTextDetectionRequest;
  export type Output = GetDocumentTextDetectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetExpenseAnalysis {
  export type Input = GetExpenseAnalysisRequest;
  export type Output = GetExpenseAnalysisResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLendingAnalysis {
  export type Input = GetLendingAnalysisRequest;
  export type Output = GetLendingAnalysisResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLendingAnalysisSummary {
  export type Input = GetLendingAnalysisSummaryRequest;
  export type Output = GetLendingAnalysisSummaryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidJobIdException
    | InvalidKMSKeyException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAdapters {
  export type Input = ListAdaptersRequest;
  export type Output = ListAdaptersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAdapterVersions {
  export type Input = ListAdapterVersionsRequest;
  export type Output = ListAdapterVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDocumentAnalysis {
  export type Input = StartDocumentAnalysisRequest;
  export type Output = StartDocumentAnalysisResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace StartDocumentTextDetection {
  export type Input = StartDocumentTextDetectionRequest;
  export type Output = StartDocumentTextDetectionResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace StartExpenseAnalysis {
  export type Input = StartExpenseAnalysisRequest;
  export type Output = StartExpenseAnalysisResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace StartLendingAnalysis {
  export type Input = StartLendingAnalysisRequest;
  export type Output = StartLendingAnalysisResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAdapter {
  export type Input = UpdateAdapterRequest;
  export type Output = UpdateAdapterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
