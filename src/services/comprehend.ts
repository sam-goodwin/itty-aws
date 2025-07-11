import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface Comprehend_20171127 {
  batchDetectDominantLanguage(
    input: BatchDetectDominantLanguageRequest,
  ): Effect.Effect<
    BatchDetectDominantLanguageResponse,
    BatchSizeLimitExceededException | InternalServerException | InvalidRequestException | TextSizeLimitExceededException | CommonAwsError
  >;
  batchDetectEntities(
    input: BatchDetectEntitiesRequest,
  ): Effect.Effect<
    BatchDetectEntitiesResponse,
    BatchSizeLimitExceededException | InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  batchDetectKeyPhrases(
    input: BatchDetectKeyPhrasesRequest,
  ): Effect.Effect<
    BatchDetectKeyPhrasesResponse,
    BatchSizeLimitExceededException | InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  batchDetectSentiment(
    input: BatchDetectSentimentRequest,
  ): Effect.Effect<
    BatchDetectSentimentResponse,
    BatchSizeLimitExceededException | InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  batchDetectSyntax(
    input: BatchDetectSyntaxRequest,
  ): Effect.Effect<
    BatchDetectSyntaxResponse,
    BatchSizeLimitExceededException | InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  batchDetectTargetedSentiment(
    input: BatchDetectTargetedSentimentRequest,
  ): Effect.Effect<
    BatchDetectTargetedSentimentResponse,
    BatchSizeLimitExceededException | InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  classifyDocument(
    input: ClassifyDocumentRequest,
  ): Effect.Effect<
    ClassifyDocumentResponse,
    InternalServerException | InvalidRequestException | ResourceUnavailableException | TextSizeLimitExceededException | CommonAwsError
  >;
  containsPiiEntities(
    input: ContainsPiiEntitiesRequest,
  ): Effect.Effect<
    ContainsPiiEntitiesResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceLimitExceededException | ResourceNotFoundException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  createDocumentClassifier(
    input: CreateDocumentClassifierRequest,
  ): Effect.Effect<
    CreateDocumentClassifierResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | ResourceLimitExceededException | TooManyRequestsException | TooManyTagsException | UnsupportedLanguageException | CommonAwsError
  >;
  createEndpoint(
    input: CreateEndpointRequest,
  ): Effect.Effect<
    CreateEndpointResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceLimitExceededException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  createEntityRecognizer(
    input: CreateEntityRecognizerRequest,
  ): Effect.Effect<
    CreateEntityRecognizerResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | ResourceLimitExceededException | TooManyRequestsException | TooManyTagsException | UnsupportedLanguageException | CommonAwsError
  >;
  createFlywheel(
    input: CreateFlywheelRequest,
  ): Effect.Effect<
    CreateFlywheelResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | ResourceLimitExceededException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | TooManyTagsException | UnsupportedLanguageException | CommonAwsError
  >;
  deleteDocumentClassifier(
    input: DeleteDocumentClassifierRequest,
  ): Effect.Effect<
    DeleteDocumentClassifierResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteEndpoint(
    input: DeleteEndpointRequest,
  ): Effect.Effect<
    DeleteEndpointResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteEntityRecognizer(
    input: DeleteEntityRecognizerRequest,
  ): Effect.Effect<
    DeleteEntityRecognizerResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteFlywheel(
    input: DeleteFlywheelRequest,
  ): Effect.Effect<
    DeleteFlywheelResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeDocumentClassificationJob(
    input: DescribeDocumentClassificationJobRequest,
  ): Effect.Effect<
    DescribeDocumentClassificationJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeDocumentClassifier(
    input: DescribeDocumentClassifierRequest,
  ): Effect.Effect<
    DescribeDocumentClassifierResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeDominantLanguageDetectionJob(
    input: DescribeDominantLanguageDetectionJobRequest,
  ): Effect.Effect<
    DescribeDominantLanguageDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeEndpoint(
    input: DescribeEndpointRequest,
  ): Effect.Effect<
    DescribeEndpointResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeEntitiesDetectionJob(
    input: DescribeEntitiesDetectionJobRequest,
  ): Effect.Effect<
    DescribeEntitiesDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeEntityRecognizer(
    input: DescribeEntityRecognizerRequest,
  ): Effect.Effect<
    DescribeEntityRecognizerResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeEventsDetectionJob(
    input: DescribeEventsDetectionJobRequest,
  ): Effect.Effect<
    DescribeEventsDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeFlywheel(
    input: DescribeFlywheelRequest,
  ): Effect.Effect<
    DescribeFlywheelResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeFlywheelIteration(
    input: DescribeFlywheelIterationRequest,
  ): Effect.Effect<
    DescribeFlywheelIterationResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeKeyPhrasesDetectionJob(
    input: DescribeKeyPhrasesDetectionJobRequest,
  ): Effect.Effect<
    DescribeKeyPhrasesDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describePiiEntitiesDetectionJob(
    input: DescribePiiEntitiesDetectionJobRequest,
  ): Effect.Effect<
    DescribePiiEntitiesDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeResourcePolicy(
    input: DescribeResourcePolicyRequest,
  ): Effect.Effect<
    DescribeResourcePolicyResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  describeSentimentDetectionJob(
    input: DescribeSentimentDetectionJobRequest,
  ): Effect.Effect<
    DescribeSentimentDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeTargetedSentimentDetectionJob(
    input: DescribeTargetedSentimentDetectionJobRequest,
  ): Effect.Effect<
    DescribeTargetedSentimentDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeTopicsDetectionJob(
    input: DescribeTopicsDetectionJobRequest,
  ): Effect.Effect<
    DescribeTopicsDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  detectDominantLanguage(
    input: DetectDominantLanguageRequest,
  ): Effect.Effect<
    DetectDominantLanguageResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | CommonAwsError
  >;
  detectEntities(
    input: DetectEntitiesRequest,
  ): Effect.Effect<
    DetectEntitiesResponse,
    InternalServerException | InvalidRequestException | ResourceUnavailableException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  detectKeyPhrases(
    input: DetectKeyPhrasesRequest,
  ): Effect.Effect<
    DetectKeyPhrasesResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  detectPiiEntities(
    input: DetectPiiEntitiesRequest,
  ): Effect.Effect<
    DetectPiiEntitiesResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  detectSentiment(
    input: DetectSentimentRequest,
  ): Effect.Effect<
    DetectSentimentResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  detectSyntax(
    input: DetectSyntaxRequest,
  ): Effect.Effect<
    DetectSyntaxResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  detectTargetedSentiment(
    input: DetectTargetedSentimentRequest,
  ): Effect.Effect<
    DetectTargetedSentimentResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  detectToxicContent(
    input: DetectToxicContentRequest,
  ): Effect.Effect<
    DetectToxicContentResponse,
    InternalServerException | InvalidRequestException | TextSizeLimitExceededException | UnsupportedLanguageException | CommonAwsError
  >;
  importModel(
    input: ImportModelRequest,
  ): Effect.Effect<
    ImportModelResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | ResourceLimitExceededException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listDocumentClassificationJobs(
    input: ListDocumentClassificationJobsRequest,
  ): Effect.Effect<
    ListDocumentClassificationJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listDocumentClassifierSummaries(
    input: ListDocumentClassifierSummariesRequest,
  ): Effect.Effect<
    ListDocumentClassifierSummariesResponse,
    InternalServerException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listDocumentClassifiers(
    input: ListDocumentClassifiersRequest,
  ): Effect.Effect<
    ListDocumentClassifiersResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listDominantLanguageDetectionJobs(
    input: ListDominantLanguageDetectionJobsRequest,
  ): Effect.Effect<
    ListDominantLanguageDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listEndpoints(
    input: ListEndpointsRequest,
  ): Effect.Effect<
    ListEndpointsResponse,
    InternalServerException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listEntitiesDetectionJobs(
    input: ListEntitiesDetectionJobsRequest,
  ): Effect.Effect<
    ListEntitiesDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listEntityRecognizerSummaries(
    input: ListEntityRecognizerSummariesRequest,
  ): Effect.Effect<
    ListEntityRecognizerSummariesResponse,
    InternalServerException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listEntityRecognizers(
    input: ListEntityRecognizersRequest,
  ): Effect.Effect<
    ListEntityRecognizersResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listEventsDetectionJobs(
    input: ListEventsDetectionJobsRequest,
  ): Effect.Effect<
    ListEventsDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listFlywheelIterationHistory(
    input: ListFlywheelIterationHistoryRequest,
  ): Effect.Effect<
    ListFlywheelIterationHistoryResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listFlywheels(
    input: ListFlywheelsRequest,
  ): Effect.Effect<
    ListFlywheelsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listKeyPhrasesDetectionJobs(
    input: ListKeyPhrasesDetectionJobsRequest,
  ): Effect.Effect<
    ListKeyPhrasesDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listPiiEntitiesDetectionJobs(
    input: ListPiiEntitiesDetectionJobsRequest,
  ): Effect.Effect<
    ListPiiEntitiesDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listSentimentDetectionJobs(
    input: ListSentimentDetectionJobsRequest,
  ): Effect.Effect<
    ListSentimentDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  listTargetedSentimentDetectionJobs(
    input: ListTargetedSentimentDetectionJobsRequest,
  ): Effect.Effect<
    ListTargetedSentimentDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  listTopicsDetectionJobs(
    input: ListTopicsDetectionJobsRequest,
  ): Effect.Effect<
    ListTopicsDetectionJobsResponse,
    InternalServerException | InvalidFilterException | InvalidRequestException | TooManyRequestsException | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  startDocumentClassificationJob(
    input: StartDocumentClassificationJobRequest,
  ): Effect.Effect<
    StartDocumentClassificationJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startDominantLanguageDetectionJob(
    input: StartDominantLanguageDetectionJobRequest,
  ): Effect.Effect<
    StartDominantLanguageDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startEntitiesDetectionJob(
    input: StartEntitiesDetectionJobRequest,
  ): Effect.Effect<
    StartEntitiesDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startEventsDetectionJob(
    input: StartEventsDetectionJobRequest,
  ): Effect.Effect<
    StartEventsDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startFlywheelIteration(
    input: StartFlywheelIterationRequest,
  ): Effect.Effect<
    StartFlywheelIterationResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  startKeyPhrasesDetectionJob(
    input: StartKeyPhrasesDetectionJobRequest,
  ): Effect.Effect<
    StartKeyPhrasesDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startPiiEntitiesDetectionJob(
    input: StartPiiEntitiesDetectionJobRequest,
  ): Effect.Effect<
    StartPiiEntitiesDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startSentimentDetectionJob(
    input: StartSentimentDetectionJobRequest,
  ): Effect.Effect<
    StartSentimentDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startTargetedSentimentDetectionJob(
    input: StartTargetedSentimentDetectionJobRequest,
  ): Effect.Effect<
    StartTargetedSentimentDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  startTopicsDetectionJob(
    input: StartTopicsDetectionJobRequest,
  ): Effect.Effect<
    StartTopicsDetectionJobResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceInUseException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  stopDominantLanguageDetectionJob(
    input: StopDominantLanguageDetectionJobRequest,
  ): Effect.Effect<
    StopDominantLanguageDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | CommonAwsError
  >;
  stopEntitiesDetectionJob(
    input: StopEntitiesDetectionJobRequest,
  ): Effect.Effect<
    StopEntitiesDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | CommonAwsError
  >;
  stopEventsDetectionJob(
    input: StopEventsDetectionJobRequest,
  ): Effect.Effect<
    StopEventsDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | CommonAwsError
  >;
  stopKeyPhrasesDetectionJob(
    input: StopKeyPhrasesDetectionJobRequest,
  ): Effect.Effect<
    StopKeyPhrasesDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | CommonAwsError
  >;
  stopPiiEntitiesDetectionJob(
    input: StopPiiEntitiesDetectionJobRequest,
  ): Effect.Effect<
    StopPiiEntitiesDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | CommonAwsError
  >;
  stopSentimentDetectionJob(
    input: StopSentimentDetectionJobRequest,
  ): Effect.Effect<
    StopSentimentDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | CommonAwsError
  >;
  stopTargetedSentimentDetectionJob(
    input: StopTargetedSentimentDetectionJobRequest,
  ): Effect.Effect<
    StopTargetedSentimentDetectionJobResponse,
    InternalServerException | InvalidRequestException | JobNotFoundException | CommonAwsError
  >;
  stopTrainingDocumentClassifier(
    input: StopTrainingDocumentClassifierRequest,
  ): Effect.Effect<
    StopTrainingDocumentClassifierResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  stopTrainingEntityRecognizer(
    input: StopTrainingEntityRecognizerRequest,
  ): Effect.Effect<
    StopTrainingEntityRecognizerResponse,
    InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ConcurrentModificationException | InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ConcurrentModificationException | InternalServerException | InvalidRequestException | ResourceNotFoundException | TooManyTagKeysException | CommonAwsError
  >;
  updateEndpoint(
    input: UpdateEndpointRequest,
  ): Effect.Effect<
    UpdateEndpointResponse,
    InternalServerException | InvalidRequestException | ResourceInUseException | ResourceLimitExceededException | ResourceNotFoundException | ResourceUnavailableException | TooManyRequestsException | CommonAwsError
  >;
  updateFlywheel(
    input: UpdateFlywheelRequest,
  ): Effect.Effect<
    UpdateFlywheelResponse,
    InternalServerException | InvalidRequestException | KmsKeyValidationException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
}

export type Comprehend = Comprehend_20171127;

export type AnyLengthString = string;

export type AttributeNamesList = Array<string>;
export type AttributeNamesListItem = string;

export type AugmentedManifestsDocumentTypeFormat = "PLAIN_TEXT_DOCUMENT" | "SEMI_STRUCTURED_DOCUMENT";
export interface AugmentedManifestsListItem {
  S3Uri: string;
  Split?: Split;
  AttributeNames: Array<string>;
  AnnotationDataS3Uri?: string;
  SourceDocumentsS3Uri?: string;
  DocumentType?: AugmentedManifestsDocumentTypeFormat;
}
export interface BatchDetectDominantLanguageItemResult {
  Index?: number;
  Languages?: Array<DominantLanguage>;
}
export interface BatchDetectDominantLanguageRequest {
  TextList: Array<string>;
}
export interface BatchDetectDominantLanguageResponse {
  ResultList: Array<BatchDetectDominantLanguageItemResult>;
  ErrorList: Array<BatchItemError>;
}
export interface BatchDetectEntitiesItemResult {
  Index?: number;
  Entities?: Array<Entity>;
}
export interface BatchDetectEntitiesRequest {
  TextList: Array<string>;
  LanguageCode: LanguageCode;
}
export interface BatchDetectEntitiesResponse {
  ResultList: Array<BatchDetectEntitiesItemResult>;
  ErrorList: Array<BatchItemError>;
}
export interface BatchDetectKeyPhrasesItemResult {
  Index?: number;
  KeyPhrases?: Array<KeyPhrase>;
}
export interface BatchDetectKeyPhrasesRequest {
  TextList: Array<string>;
  LanguageCode: LanguageCode;
}
export interface BatchDetectKeyPhrasesResponse {
  ResultList: Array<BatchDetectKeyPhrasesItemResult>;
  ErrorList: Array<BatchItemError>;
}
export interface BatchDetectSentimentItemResult {
  Index?: number;
  Sentiment?: SentimentType;
  SentimentScore?: SentimentScore;
}
export interface BatchDetectSentimentRequest {
  TextList: Array<string>;
  LanguageCode: LanguageCode;
}
export interface BatchDetectSentimentResponse {
  ResultList: Array<BatchDetectSentimentItemResult>;
  ErrorList: Array<BatchItemError>;
}
export interface BatchDetectSyntaxItemResult {
  Index?: number;
  SyntaxTokens?: Array<SyntaxToken>;
}
export interface BatchDetectSyntaxRequest {
  TextList: Array<string>;
  LanguageCode: SyntaxLanguageCode;
}
export interface BatchDetectSyntaxResponse {
  ResultList: Array<BatchDetectSyntaxItemResult>;
  ErrorList: Array<BatchItemError>;
}
export interface BatchDetectTargetedSentimentItemResult {
  Index?: number;
  Entities?: Array<TargetedSentimentEntity>;
}
export interface BatchDetectTargetedSentimentRequest {
  TextList: Array<string>;
  LanguageCode: LanguageCode;
}
export interface BatchDetectTargetedSentimentResponse {
  ResultList: Array<BatchDetectTargetedSentimentItemResult>;
  ErrorList: Array<BatchItemError>;
}
export interface BatchItemError {
  Index?: number;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type BatchItemErrorList = Array<BatchItemError>;
export declare class BatchSizeLimitExceededException extends Data.TaggedError(
  "BatchSizeLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface Block {
  Id?: string;
  BlockType?: BlockType;
  Text?: string;
  Page?: number;
  Geometry?: Geometry;
  Relationships?: Array<RelationshipsListItem>;
}
export interface BlockReference {
  BlockId?: string;
  BeginOffset?: number;
  EndOffset?: number;
  ChildBlocks?: Array<ChildBlock>;
}
export type BlockType = "LINE" | "WORD";
export interface BoundingBox {
  Height?: number;
  Left?: number;
  Top?: number;
  Width?: number;
}
export interface ChildBlock {
  ChildBlockId?: string;
  BeginOffset?: number;
  EndOffset?: number;
}
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
export interface ClassifyDocumentRequest {
  Text?: string;
  EndpointArn: string;
  Bytes?: Uint8Array | string;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export interface ClassifyDocumentResponse {
  Classes?: Array<DocumentClass>;
  Labels?: Array<DocumentLabel>;
  DocumentMetadata?: DocumentMetadata;
  DocumentType?: Array<DocumentTypeListItem>;
  Errors?: Array<ErrorsListItem>;
  Warnings?: Array<WarningsListItem>;
}
export type ClientRequestTokenString = string;

export type ComprehendArn = string;

export type ComprehendArnName = string;

export type ComprehendDatasetArn = string;

export type ComprehendEndpointArn = string;

export type ComprehendEndpointName = string;

export type ComprehendFlywheelArn = string;

export type ComprehendModelArn = string;

export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export interface ContainsPiiEntitiesRequest {
  Text: string;
  LanguageCode: LanguageCode;
}
export interface ContainsPiiEntitiesResponse {
  Labels?: Array<EntityLabel>;
}
export interface CreateDatasetRequest {
  FlywheelArn: string;
  DatasetName: string;
  DatasetType?: DatasetType;
  Description?: string;
  InputDataConfig: DatasetInputDataConfig;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateDatasetResponse {
  DatasetArn?: string;
}
export interface CreateDocumentClassifierRequest {
  DocumentClassifierName: string;
  VersionName?: string;
  DataAccessRoleArn: string;
  Tags?: Array<Tag>;
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
export interface CreateDocumentClassifierResponse {
  DocumentClassifierArn?: string;
}
export interface CreateEndpointRequest {
  EndpointName: string;
  ModelArn?: string;
  DesiredInferenceUnits: number;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
  DataAccessRoleArn?: string;
  FlywheelArn?: string;
}
export interface CreateEndpointResponse {
  EndpointArn?: string;
  ModelArn?: string;
}
export interface CreateEntityRecognizerRequest {
  RecognizerName: string;
  VersionName?: string;
  DataAccessRoleArn: string;
  Tags?: Array<Tag>;
  InputDataConfig: EntityRecognizerInputDataConfig;
  ClientRequestToken?: string;
  LanguageCode: LanguageCode;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  ModelKmsKeyId?: string;
  ModelPolicy?: string;
}
export interface CreateEntityRecognizerResponse {
  EntityRecognizerArn?: string;
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
  Tags?: Array<Tag>;
}
export interface CreateFlywheelResponse {
  FlywheelArn?: string;
  ActiveModelArn?: string;
}
export type CustomerInputString = string;

export type CustomerInputStringList = Array<string>;
export interface DataSecurityConfig {
  ModelKmsKeyId?: string;
  VolumeKmsKeyId?: string;
  DataLakeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export type DatasetAugmentedManifestsList = Array<DatasetAugmentedManifestsListItem>;
export interface DatasetAugmentedManifestsListItem {
  AttributeNames: Array<string>;
  S3Uri: string;
  AnnotationDataS3Uri?: string;
  SourceDocumentsS3Uri?: string;
  DocumentType?: AugmentedManifestsDocumentTypeFormat;
}
export type DatasetDataFormat = "COMPREHEND_CSV" | "AUGMENTED_MANIFEST";
export interface DatasetDocumentClassifierInputDataConfig {
  S3Uri: string;
  LabelDelimiter?: string;
}
export interface DatasetEntityRecognizerAnnotations {
  S3Uri: string;
}
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
export interface DatasetFilter {
  Status?: DatasetStatus;
  DatasetType?: DatasetType;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
}
export interface DatasetInputDataConfig {
  AugmentedManifests?: Array<DatasetAugmentedManifestsListItem>;
  DataFormat?: DatasetDataFormat;
  DocumentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig;
  EntityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig;
}
export interface DatasetProperties {
  DatasetArn?: string;
  DatasetName?: string;
  DatasetType?: DatasetType;
  DatasetS3Uri?: string;
  Description?: string;
  Status?: DatasetStatus;
  Message?: string;
  NumberOfDocuments?: number;
  CreationTime?: Date | string;
  EndTime?: Date | string;
}
export type DatasetPropertiesList = Array<DatasetProperties>;
export type DatasetStatus = "CREATING" | "COMPLETED" | "FAILED";
export type DatasetType = "TRAIN" | "TEST";
export interface DeleteDocumentClassifierRequest {
  DocumentClassifierArn: string;
}
export interface DeleteDocumentClassifierResponse {
}
export interface DeleteEndpointRequest {
  EndpointArn: string;
}
export interface DeleteEndpointResponse {
}
export interface DeleteEntityRecognizerRequest {
  EntityRecognizerArn: string;
}
export interface DeleteEntityRecognizerResponse {
}
export interface DeleteFlywheelRequest {
  FlywheelArn: string;
}
export interface DeleteFlywheelResponse {
}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
  PolicyRevisionId?: string;
}
export interface DeleteResourcePolicyResponse {
}
export interface DescribeDatasetRequest {
  DatasetArn: string;
}
export interface DescribeDatasetResponse {
  DatasetProperties?: DatasetProperties;
}
export interface DescribeDocumentClassificationJobRequest {
  JobId: string;
}
export interface DescribeDocumentClassificationJobResponse {
  DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
}
export interface DescribeDocumentClassifierRequest {
  DocumentClassifierArn: string;
}
export interface DescribeDocumentClassifierResponse {
  DocumentClassifierProperties?: DocumentClassifierProperties;
}
export interface DescribeDominantLanguageDetectionJobRequest {
  JobId: string;
}
export interface DescribeDominantLanguageDetectionJobResponse {
  DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
}
export interface DescribeEndpointRequest {
  EndpointArn: string;
}
export interface DescribeEndpointResponse {
  EndpointProperties?: EndpointProperties;
}
export interface DescribeEntitiesDetectionJobRequest {
  JobId: string;
}
export interface DescribeEntitiesDetectionJobResponse {
  EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
}
export interface DescribeEntityRecognizerRequest {
  EntityRecognizerArn: string;
}
export interface DescribeEntityRecognizerResponse {
  EntityRecognizerProperties?: EntityRecognizerProperties;
}
export interface DescribeEventsDetectionJobRequest {
  JobId: string;
}
export interface DescribeEventsDetectionJobResponse {
  EventsDetectionJobProperties?: EventsDetectionJobProperties;
}
export interface DescribeFlywheelIterationRequest {
  FlywheelArn: string;
  FlywheelIterationId: string;
}
export interface DescribeFlywheelIterationResponse {
  FlywheelIterationProperties?: FlywheelIterationProperties;
}
export interface DescribeFlywheelRequest {
  FlywheelArn: string;
}
export interface DescribeFlywheelResponse {
  FlywheelProperties?: FlywheelProperties;
}
export interface DescribeKeyPhrasesDetectionJobRequest {
  JobId: string;
}
export interface DescribeKeyPhrasesDetectionJobResponse {
  KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
}
export interface DescribePiiEntitiesDetectionJobRequest {
  JobId: string;
}
export interface DescribePiiEntitiesDetectionJobResponse {
  PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
}
export interface DescribeResourcePolicyRequest {
  ResourceArn: string;
}
export interface DescribeResourcePolicyResponse {
  ResourcePolicy?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  PolicyRevisionId?: string;
}
export interface DescribeSentimentDetectionJobRequest {
  JobId: string;
}
export interface DescribeSentimentDetectionJobResponse {
  SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
}
export interface DescribeTargetedSentimentDetectionJobRequest {
  JobId: string;
}
export interface DescribeTargetedSentimentDetectionJobResponse {
  TargetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties;
}
export interface DescribeTopicsDetectionJobRequest {
  JobId: string;
}
export interface DescribeTopicsDetectionJobResponse {
  TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
}
export type Description = string;

export interface DetectDominantLanguageRequest {
  Text: string;
}
export interface DetectDominantLanguageResponse {
  Languages?: Array<DominantLanguage>;
}
export interface DetectEntitiesRequest {
  Text?: string;
  LanguageCode?: LanguageCode;
  EndpointArn?: string;
  Bytes?: Uint8Array | string;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export interface DetectEntitiesResponse {
  Entities?: Array<Entity>;
  DocumentMetadata?: DocumentMetadata;
  DocumentType?: Array<DocumentTypeListItem>;
  Blocks?: Array<Block>;
  Errors?: Array<ErrorsListItem>;
}
export interface DetectKeyPhrasesRequest {
  Text: string;
  LanguageCode: LanguageCode;
}
export interface DetectKeyPhrasesResponse {
  KeyPhrases?: Array<KeyPhrase>;
}
export interface DetectPiiEntitiesRequest {
  Text: string;
  LanguageCode: LanguageCode;
}
export interface DetectPiiEntitiesResponse {
  Entities?: Array<PiiEntity>;
}
export interface DetectSentimentRequest {
  Text: string;
  LanguageCode: LanguageCode;
}
export interface DetectSentimentResponse {
  Sentiment?: SentimentType;
  SentimentScore?: SentimentScore;
}
export interface DetectSyntaxRequest {
  Text: string;
  LanguageCode: SyntaxLanguageCode;
}
export interface DetectSyntaxResponse {
  SyntaxTokens?: Array<SyntaxToken>;
}
export interface DetectTargetedSentimentRequest {
  Text: string;
  LanguageCode: LanguageCode;
}
export interface DetectTargetedSentimentResponse {
  Entities?: Array<TargetedSentimentEntity>;
}
export interface DetectToxicContentRequest {
  TextSegments: Array<TextSegment>;
  LanguageCode: LanguageCode;
}
export interface DetectToxicContentResponse {
  ResultList?: Array<ToxicLabels>;
}
export interface DocumentClass {
  Name?: string;
  Score?: number;
  Page?: number;
}
export interface DocumentClassificationConfig {
  Mode: DocumentClassifierMode;
  Labels?: Array<string>;
}
export interface DocumentClassificationJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface DocumentClassificationJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  DocumentClassifierArn?: string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  FlywheelArn?: string;
}
export type DocumentClassificationJobPropertiesList = Array<DocumentClassificationJobProperties>;
export type DocumentClassifierArn = string;

export type DocumentClassifierAugmentedManifestsList = Array<AugmentedManifestsListItem>;
export type DocumentClassifierDataFormat = "COMPREHEND_CSV" | "AUGMENTED_MANIFEST";
export interface DocumentClassifierDocuments {
  S3Uri: string;
  TestS3Uri?: string;
}
export type DocumentClassifierDocumentTypeFormat = "PLAIN_TEXT_DOCUMENT" | "SEMI_STRUCTURED_DOCUMENT";
export type DocumentClassifierEndpointArn = string;

export interface DocumentClassifierFilter {
  Status?: ModelStatus;
  DocumentClassifierName?: string;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface DocumentClassifierInputDataConfig {
  DataFormat?: DocumentClassifierDataFormat;
  S3Uri?: string;
  TestS3Uri?: string;
  LabelDelimiter?: string;
  AugmentedManifests?: Array<AugmentedManifestsListItem>;
  DocumentType?: DocumentClassifierDocumentTypeFormat;
  Documents?: DocumentClassifierDocuments;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export type DocumentClassifierMode = "MULTI_CLASS" | "MULTI_LABEL";
export interface DocumentClassifierOutputDataConfig {
  S3Uri?: string;
  KmsKeyId?: string;
  FlywheelStatsS3Prefix?: string;
}
export interface DocumentClassifierProperties {
  DocumentClassifierArn?: string;
  LanguageCode?: LanguageCode;
  Status?: ModelStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  TrainingStartTime?: Date | string;
  TrainingEndTime?: Date | string;
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
export type DocumentClassifierPropertiesList = Array<DocumentClassifierProperties>;
export type DocumentClassifierSummariesList = Array<DocumentClassifierSummary>;
export interface DocumentClassifierSummary {
  DocumentClassifierName?: string;
  NumberOfVersions?: number;
  LatestVersionCreatedAt?: Date | string;
  LatestVersionName?: string;
  LatestVersionStatus?: ModelStatus;
}
export interface DocumentLabel {
  Name?: string;
  Score?: number;
  Page?: number;
}
export interface DocumentMetadata {
  Pages?: number;
  ExtractedCharacters?: Array<ExtractedCharactersListItem>;
}
export type DocumentReadAction = "TEXTRACT_DETECT_DOCUMENT_TEXT" | "TEXTRACT_ANALYZE_DOCUMENT";
export interface DocumentReaderConfig {
  DocumentReadAction: DocumentReadAction;
  DocumentReadMode?: DocumentReadMode;
  FeatureTypes?: Array<DocumentReadFeatureTypes>;
}
export type DocumentReadFeatureTypes = "TABLES" | "FORMS";
export type DocumentReadMode = "SERVICE_DEFAULT" | "FORCE_DOCUMENT_READ_ACTION";
export type DocumentType = "NATIVE_PDF" | "SCANNED_PDF" | "MS_WORD" | "IMAGE" | "PLAIN_TEXT" | "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON" | "TEXTRACT_ANALYZE_DOCUMENT_JSON";
export interface DocumentTypeListItem {
  Page?: number;
  Type?: DocumentType;
}
export interface DominantLanguage {
  LanguageCode?: string;
  Score?: number;
}
export interface DominantLanguageDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface DominantLanguageDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export type DominantLanguageDetectionJobPropertiesList = Array<DominantLanguageDetectionJobProperties>;
export type Double = number;

export interface EndpointFilter {
  ModelArn?: string;
  Status?: EndpointStatus;
  CreationTimeBefore?: Date | string;
  CreationTimeAfter?: Date | string;
}
export interface EndpointProperties {
  EndpointArn?: string;
  Status?: EndpointStatus;
  Message?: string;
  ModelArn?: string;
  DesiredModelArn?: string;
  DesiredInferenceUnits?: number;
  CurrentInferenceUnits?: number;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  DataAccessRoleArn?: string;
  DesiredDataAccessRoleArn?: string;
  FlywheelArn?: string;
}
export type EndpointPropertiesList = Array<EndpointProperties>;
export type EndpointStatus = "CREATING" | "DELETING" | "FAILED" | "IN_SERVICE" | "UPDATING";
export interface EntitiesDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface EntitiesDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  EntityRecognizerArn?: string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  FlywheelArn?: string;
}
export type EntitiesDetectionJobPropertiesList = Array<EntitiesDetectionJobProperties>;
export interface Entity {
  Score?: number;
  Type?: EntityType;
  Text?: string;
  BeginOffset?: number;
  EndOffset?: number;
  BlockReferences?: Array<BlockReference>;
}
export interface EntityLabel {
  Name?: PiiEntityType;
  Score?: number;
}
export interface EntityRecognitionConfig {
  EntityTypes: Array<EntityTypesListItem>;
}
export interface EntityRecognizerAnnotations {
  S3Uri: string;
  TestS3Uri?: string;
}
export type EntityRecognizerArn = string;

export type EntityRecognizerAugmentedManifestsList = Array<AugmentedManifestsListItem>;
export type EntityRecognizerDataFormat = "COMPREHEND_CSV" | "AUGMENTED_MANIFEST";
export interface EntityRecognizerDocuments {
  S3Uri: string;
  TestS3Uri?: string;
  InputFormat?: InputFormat;
}
export type EntityRecognizerEndpointArn = string;

export interface EntityRecognizerEntityList {
  S3Uri: string;
}
export interface EntityRecognizerEvaluationMetrics {
  Precision?: number;
  Recall?: number;
  F1Score?: number;
}
export interface EntityRecognizerFilter {
  Status?: ModelStatus;
  RecognizerName?: string;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface EntityRecognizerInputDataConfig {
  DataFormat?: EntityRecognizerDataFormat;
  EntityTypes: Array<EntityTypesListItem>;
  Documents?: EntityRecognizerDocuments;
  Annotations?: EntityRecognizerAnnotations;
  EntityList?: EntityRecognizerEntityList;
  AugmentedManifests?: Array<AugmentedManifestsListItem>;
}
export interface EntityRecognizerMetadata {
  NumberOfTrainedDocuments?: number;
  NumberOfTestDocuments?: number;
  EvaluationMetrics?: EntityRecognizerEvaluationMetrics;
  EntityTypes?: Array<EntityRecognizerMetadataEntityTypesListItem>;
}
export type EntityRecognizerMetadataEntityTypesList = Array<EntityRecognizerMetadataEntityTypesListItem>;
export interface EntityRecognizerMetadataEntityTypesListItem {
  Type?: string;
  EvaluationMetrics?: EntityTypesEvaluationMetrics;
  NumberOfTrainMentions?: number;
}
export interface EntityRecognizerOutputDataConfig {
  FlywheelStatsS3Prefix?: string;
}
export interface EntityRecognizerProperties {
  EntityRecognizerArn?: string;
  LanguageCode?: LanguageCode;
  Status?: ModelStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  TrainingStartTime?: Date | string;
  TrainingEndTime?: Date | string;
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
export type EntityRecognizerPropertiesList = Array<EntityRecognizerProperties>;
export type EntityRecognizerSummariesList = Array<EntityRecognizerSummary>;
export interface EntityRecognizerSummary {
  RecognizerName?: string;
  NumberOfVersions?: number;
  LatestVersionCreatedAt?: Date | string;
  LatestVersionName?: string;
  LatestVersionStatus?: ModelStatus;
}
export type EntityType = "PERSON" | "LOCATION" | "ORGANIZATION" | "COMMERCIAL_ITEM" | "EVENT" | "DATE" | "QUANTITY" | "TITLE" | "OTHER";
export type EntityTypeName = string;

export interface EntityTypesEvaluationMetrics {
  Precision?: number;
  Recall?: number;
  F1Score?: number;
}
export type EntityTypesList = Array<EntityTypesListItem>;
export interface EntityTypesListItem {
  Type: string;
}
export interface ErrorsListItem {
  Page?: number;
  ErrorCode?: PageBasedErrorCode;
  ErrorMessage?: string;
}
export interface EventsDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface EventsDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  TargetEventTypes?: Array<string>;
}
export type EventsDetectionJobPropertiesList = Array<EventsDetectionJobProperties>;
export type EventTypeString = string;

export interface ExtractedCharactersListItem {
  Page?: number;
  Count?: number;
}
export type Float = number;

export interface FlywheelFilter {
  Status?: FlywheelStatus;
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
}
export interface FlywheelIterationFilter {
  CreationTimeAfter?: Date | string;
  CreationTimeBefore?: Date | string;
}
export type FlywheelIterationId = string;

export interface FlywheelIterationProperties {
  FlywheelArn?: string;
  FlywheelIterationId?: string;
  CreationTime?: Date | string;
  EndTime?: Date | string;
  Status?: FlywheelIterationStatus;
  Message?: string;
  EvaluatedModelArn?: string;
  EvaluatedModelMetrics?: FlywheelModelEvaluationMetrics;
  TrainedModelArn?: string;
  TrainedModelMetrics?: FlywheelModelEvaluationMetrics;
  EvaluationManifestS3Prefix?: string;
}
export type FlywheelIterationPropertiesList = Array<FlywheelIterationProperties>;
export type FlywheelIterationStatus = "TRAINING" | "EVALUATING" | "COMPLETED" | "FAILED" | "STOP_REQUESTED" | "STOPPED";
export interface FlywheelModelEvaluationMetrics {
  AverageF1Score?: number;
  AveragePrecision?: number;
  AverageRecall?: number;
  AverageAccuracy?: number;
}
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
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LatestFlywheelIteration?: string;
}
export type FlywheelS3Uri = string;

export type FlywheelStatus = "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | "FAILED";
export interface FlywheelSummary {
  FlywheelArn?: string;
  ActiveModelArn?: string;
  DataLakeS3Uri?: string;
  Status?: FlywheelStatus;
  ModelType?: ModelType;
  Message?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LatestFlywheelIteration?: string;
}
export type FlywheelSummaryList = Array<FlywheelSummary>;
export interface Geometry {
  BoundingBox?: BoundingBox;
  Polygon?: Array<Point>;
}
export type IamRoleArn = string;

export interface ImportModelRequest {
  SourceModelArn: string;
  ModelName?: string;
  VersionName?: string;
  ModelKmsKeyId?: string;
  DataAccessRoleArn?: string;
  Tags?: Array<Tag>;
}
export interface ImportModelResponse {
  ModelArn?: string;
}
export type InferenceUnitsInteger = number;

export interface InputDataConfig {
  S3Uri: string;
  InputFormat?: InputFormat;
  DocumentReaderConfig?: DocumentReaderConfig;
}
export type InputFormat = "ONE_DOC_PER_FILE" | "ONE_DOC_PER_LINE";
export type Integer = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFilterException extends Data.TaggedError(
  "InvalidFilterException",
)<{
  readonly Message?: string;
}> {}
export interface InvalidRequestDetail {
  Reason?: InvalidRequestDetailReason;
}
export type InvalidRequestDetailReason = "DOCUMENT_SIZE_EXCEEDED" | "UNSUPPORTED_DOC_TYPE" | "PAGE_LIMIT_EXCEEDED" | "TEXTRACT_ACCESS_DENIED";
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
  readonly Reason?: InvalidRequestReason;
  readonly Detail?: InvalidRequestDetail;
}> {}
export type InvalidRequestReason = "INVALID_DOCUMENT";
export type JobId = string;

export type JobName = string;

export declare class JobNotFoundException extends Data.TaggedError(
  "JobNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type JobStatus = "SUBMITTED" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "STOP_REQUESTED" | "STOPPED";
export interface KeyPhrase {
  Score?: number;
  Text?: string;
  BeginOffset?: number;
  EndOffset?: number;
}
export interface KeyPhrasesDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface KeyPhrasesDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export type KeyPhrasesDetectionJobPropertiesList = Array<KeyPhrasesDetectionJobProperties>;
export type KmsKeyId = string;

export declare class KmsKeyValidationException extends Data.TaggedError(
  "KmsKeyValidationException",
)<{
  readonly Message?: string;
}> {}
export type LabelDelimiter = string;

export type LabelListItem = string;

export type LabelsList = Array<string>;
export type LanguageCode = "EN" | "ES" | "FR" | "DE" | "IT" | "PT" | "AR" | "HI" | "JA" | "KO" | "ZH" | "ZH_TW";
export interface ListDatasetsRequest {
  FlywheelArn?: string;
  Filter?: DatasetFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatasetsResponse {
  DatasetPropertiesList?: Array<DatasetProperties>;
  NextToken?: string;
}
export interface ListDocumentClassificationJobsRequest {
  Filter?: DocumentClassificationJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDocumentClassificationJobsResponse {
  DocumentClassificationJobPropertiesList?: Array<DocumentClassificationJobProperties>;
  NextToken?: string;
}
export interface ListDocumentClassifiersRequest {
  Filter?: DocumentClassifierFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDocumentClassifiersResponse {
  DocumentClassifierPropertiesList?: Array<DocumentClassifierProperties>;
  NextToken?: string;
}
export interface ListDocumentClassifierSummariesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDocumentClassifierSummariesResponse {
  DocumentClassifierSummariesList?: Array<DocumentClassifierSummary>;
  NextToken?: string;
}
export interface ListDominantLanguageDetectionJobsRequest {
  Filter?: DominantLanguageDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDominantLanguageDetectionJobsResponse {
  DominantLanguageDetectionJobPropertiesList?: Array<DominantLanguageDetectionJobProperties>;
  NextToken?: string;
}
export interface ListEndpointsRequest {
  Filter?: EndpointFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEndpointsResponse {
  EndpointPropertiesList?: Array<EndpointProperties>;
  NextToken?: string;
}
export interface ListEntitiesDetectionJobsRequest {
  Filter?: EntitiesDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEntitiesDetectionJobsResponse {
  EntitiesDetectionJobPropertiesList?: Array<EntitiesDetectionJobProperties>;
  NextToken?: string;
}
export interface ListEntityRecognizersRequest {
  Filter?: EntityRecognizerFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEntityRecognizersResponse {
  EntityRecognizerPropertiesList?: Array<EntityRecognizerProperties>;
  NextToken?: string;
}
export interface ListEntityRecognizerSummariesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEntityRecognizerSummariesResponse {
  EntityRecognizerSummariesList?: Array<EntityRecognizerSummary>;
  NextToken?: string;
}
export interface ListEventsDetectionJobsRequest {
  Filter?: EventsDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventsDetectionJobsResponse {
  EventsDetectionJobPropertiesList?: Array<EventsDetectionJobProperties>;
  NextToken?: string;
}
export interface ListFlywheelIterationHistoryRequest {
  FlywheelArn: string;
  Filter?: FlywheelIterationFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFlywheelIterationHistoryResponse {
  FlywheelIterationPropertiesList?: Array<FlywheelIterationProperties>;
  NextToken?: string;
}
export interface ListFlywheelsRequest {
  Filter?: FlywheelFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFlywheelsResponse {
  FlywheelSummaryList?: Array<FlywheelSummary>;
  NextToken?: string;
}
export interface ListKeyPhrasesDetectionJobsRequest {
  Filter?: KeyPhrasesDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListKeyPhrasesDetectionJobsResponse {
  KeyPhrasesDetectionJobPropertiesList?: Array<KeyPhrasesDetectionJobProperties>;
  NextToken?: string;
}
export type ListOfBlockReferences = Array<BlockReference>;
export type ListOfBlocks = Array<Block>;
export type ListOfChildBlocks = Array<ChildBlock>;
export type ListOfClasses = Array<DocumentClass>;
export type ListOfDescriptiveMentionIndices = Array<number>;
export type ListOfDetectDominantLanguageResult = Array<BatchDetectDominantLanguageItemResult>;
export type ListOfDetectEntitiesResult = Array<BatchDetectEntitiesItemResult>;
export type ListOfDetectKeyPhrasesResult = Array<BatchDetectKeyPhrasesItemResult>;
export type ListOfDetectSentimentResult = Array<BatchDetectSentimentItemResult>;
export type ListOfDetectSyntaxResult = Array<BatchDetectSyntaxItemResult>;
export type ListOfDetectTargetedSentimentResult = Array<BatchDetectTargetedSentimentItemResult>;
export type ListOfDocumentReadFeatureTypes = Array<DocumentReadFeatureTypes>;
export type ListOfDocumentType = Array<DocumentTypeListItem>;
export type ListOfDominantLanguages = Array<DominantLanguage>;
export type ListOfEntities = Array<Entity>;
export type ListOfEntityLabels = Array<EntityLabel>;
export type ListOfErrors = Array<ErrorsListItem>;
export type ListOfExtractedCharacters = Array<ExtractedCharactersListItem>;
export type ListOfKeyPhrases = Array<KeyPhrase>;
export type ListOfLabels = Array<DocumentLabel>;
export type ListOfMentions = Array<TargetedSentimentMention>;
export type ListOfPiiEntities = Array<PiiEntity>;
export type ListOfPiiEntityTypes = Array<PiiEntityType>;
export type ListOfRelationships = Array<RelationshipsListItem>;
export type ListOfSyntaxTokens = Array<SyntaxToken>;
export type ListOfTargetedSentimentEntities = Array<TargetedSentimentEntity>;
export type ListOfTextSegments = Array<TextSegment>;
export type ListOfToxicContent = Array<ToxicContent>;
export type ListOfToxicLabels = Array<ToxicLabels>;
export type ListOfWarnings = Array<WarningsListItem>;
export interface ListPiiEntitiesDetectionJobsRequest {
  Filter?: PiiEntitiesDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPiiEntitiesDetectionJobsResponse {
  PiiEntitiesDetectionJobPropertiesList?: Array<PiiEntitiesDetectionJobProperties>;
  NextToken?: string;
}
export interface ListSentimentDetectionJobsRequest {
  Filter?: SentimentDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSentimentDetectionJobsResponse {
  SentimentDetectionJobPropertiesList?: Array<SentimentDetectionJobProperties>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  ResourceArn?: string;
  Tags?: Array<Tag>;
}
export interface ListTargetedSentimentDetectionJobsRequest {
  Filter?: TargetedSentimentDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTargetedSentimentDetectionJobsResponse {
  TargetedSentimentDetectionJobPropertiesList?: Array<TargetedSentimentDetectionJobProperties>;
  NextToken?: string;
}
export interface ListTopicsDetectionJobsRequest {
  Filter?: TopicsDetectionJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTopicsDetectionJobsResponse {
  TopicsDetectionJobPropertiesList?: Array<TopicsDetectionJobProperties>;
  NextToken?: string;
}
export type MaskCharacter = string;

export type MaxResultsInteger = number;

export interface MentionSentiment {
  Sentiment?: SentimentType;
  SentimentScore?: SentimentScore;
}
export type ModelStatus = "SUBMITTED" | "TRAINING" | "DELETING" | "STOP_REQUESTED" | "STOPPED" | "IN_ERROR" | "TRAINED" | "TRAINED_WITH_WARNING";
export type ModelType = "DOCUMENT_CLASSIFIER" | "ENTITY_RECOGNIZER";
export type NumberOfDocuments = number;

export type NumberOfTopicsInteger = number;

export interface OutputDataConfig {
  S3Uri: string;
  KmsKeyId?: string;
}
export type PageBasedErrorCode = "TEXTRACT_BAD_PAGE" | "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED" | "PAGE_CHARACTERS_EXCEEDED" | "PAGE_SIZE_EXCEEDED" | "INTERNAL_SERVER_ERROR";
export type PageBasedWarningCode = "INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL" | "INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL";
export interface PartOfSpeechTag {
  Tag?: PartOfSpeechTagType;
  Score?: number;
}
export type PartOfSpeechTagType = "ADJ" | "ADP" | "ADV" | "AUX" | "CONJ" | "CCONJ" | "DET" | "INTJ" | "NOUN" | "NUM" | "O" | "PART" | "PRON" | "PROPN" | "PUNCT" | "SCONJ" | "SYM" | "VERB";
export interface PiiEntitiesDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface PiiEntitiesDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: PiiOutputDataConfig;
  RedactionConfig?: RedactionConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  Mode?: PiiEntitiesDetectionMode;
}
export type PiiEntitiesDetectionJobPropertiesList = Array<PiiEntitiesDetectionJobProperties>;
export type PiiEntitiesDetectionMaskMode = "MASK" | "REPLACE_WITH_PII_ENTITY_TYPE";
export type PiiEntitiesDetectionMode = "ONLY_REDACTION" | "ONLY_OFFSETS";
export interface PiiEntity {
  Score?: number;
  Type?: PiiEntityType;
  BeginOffset?: number;
  EndOffset?: number;
}
export type PiiEntityType = "BANK_ACCOUNT_NUMBER" | "BANK_ROUTING" | "CREDIT_DEBIT_NUMBER" | "CREDIT_DEBIT_CVV" | "CREDIT_DEBIT_EXPIRY" | "PIN" | "EMAIL" | "ADDRESS" | "NAME" | "PHONE" | "SSN" | "DATE_TIME" | "PASSPORT_NUMBER" | "DRIVER_ID" | "URL" | "AGE" | "USERNAME" | "PASSWORD" | "AWS_ACCESS_KEY" | "AWS_SECRET_KEY" | "IP_ADDRESS" | "MAC_ADDRESS" | "ALL" | "LICENSE_PLATE" | "VEHICLE_IDENTIFICATION_NUMBER" | "UK_NATIONAL_INSURANCE_NUMBER" | "CA_SOCIAL_INSURANCE_NUMBER" | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" | "IN_PERMANENT_ACCOUNT_NUMBER" | "IN_NREGA" | "INTERNATIONAL_BANK_ACCOUNT_NUMBER" | "SWIFT_CODE" | "UK_NATIONAL_HEALTH_SERVICE_NUMBER" | "CA_HEALTH_NUMBER" | "IN_AADHAAR" | "IN_VOTER_NUMBER";
export interface PiiOutputDataConfig {
  S3Uri: string;
  KmsKeyId?: string;
}
export interface Point {
  X?: number;
  Y?: number;
}
export type Policy = string;

export type PolicyRevisionId = string;

export type Polygon = Array<Point>;
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  ResourcePolicy: string;
  PolicyRevisionId?: string;
}
export interface PutResourcePolicyResponse {
  PolicyRevisionId?: string;
}
export interface RedactionConfig {
  PiiEntityTypes?: Array<PiiEntityType>;
  MaskMode?: PiiEntitiesDetectionMaskMode;
  MaskCharacter?: string;
}
export interface RelationshipsListItem {
  Ids?: Array<string>;
  Type?: RelationshipType;
}
export type RelationshipType = "CHILD";
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceLimitExceededException extends Data.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceUnavailableException extends Data.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type S3Uri = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SemiStructuredDocumentBlob = Uint8Array | string;

export interface SentimentDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface SentimentDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export type SentimentDetectionJobPropertiesList = Array<SentimentDetectionJobProperties>;
export interface SentimentScore {
  Positive?: number;
  Negative?: number;
  Neutral?: number;
  Mixed?: number;
}
export type SentimentType = "POSITIVE" | "NEGATIVE" | "NEUTRAL" | "MIXED";
export type Split = "TRAIN" | "TEST";
export interface StartDocumentClassificationJobRequest {
  JobName?: string;
  DocumentClassifierArn?: string;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Array<Tag>;
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
  Tags?: Array<Tag>;
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
  Tags?: Array<Tag>;
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
  TargetEventTypes: Array<string>;
  Tags?: Array<Tag>;
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
  Tags?: Array<Tag>;
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
  Tags?: Array<Tag>;
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
  Tags?: Array<Tag>;
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
  Tags?: Array<Tag>;
}
export interface StartTargetedSentimentDetectionJobResponse {
  JobId?: string;
  JobArn?: string;
  JobStatus?: JobStatus;
}
export interface StartTopicsDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  NumberOfTopics?: number;
  ClientRequestToken?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
  Tags?: Array<Tag>;
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
export interface StopTrainingDocumentClassifierResponse {
}
export interface StopTrainingEntityRecognizerRequest {
  EntityRecognizerArn: string;
}
export interface StopTrainingEntityRecognizerResponse {
}
export type StringList = Array<string>;
export type SubnetId = string;

export type Subnets = Array<string>;
export type SyntaxLanguageCode = "EN" | "ES" | "FR" | "DE" | "IT" | "PT";
export interface SyntaxToken {
  TokenId?: number;
  Text?: string;
  BeginOffset?: number;
  EndOffset?: number;
  PartOfSpeech?: PartOfSpeechTag;
}
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface TargetedSentimentDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface TargetedSentimentDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export type TargetedSentimentDetectionJobPropertiesList = Array<TargetedSentimentDetectionJobProperties>;
export interface TargetedSentimentEntity {
  DescriptiveMentionIndex?: Array<number>;
  Mentions?: Array<TargetedSentimentMention>;
}
export type TargetedSentimentEntityType = "PERSON" | "LOCATION" | "ORGANIZATION" | "FACILITY" | "BRAND" | "COMMERCIAL_ITEM" | "MOVIE" | "MUSIC" | "BOOK" | "SOFTWARE" | "GAME" | "PERSONAL_TITLE" | "EVENT" | "DATE" | "QUANTITY" | "ATTRIBUTE" | "OTHER";
export interface TargetedSentimentMention {
  Score?: number;
  GroupScore?: number;
  Text?: string;
  Type?: TargetedSentimentEntityType;
  MentionSentiment?: MentionSentiment;
  BeginOffset?: number;
  EndOffset?: number;
}
export type TargetEventTypes = Array<string>;
export interface TaskConfig {
  LanguageCode: LanguageCode;
  DocumentClassificationConfig?: DocumentClassificationConfig;
  EntityRecognitionConfig?: EntityRecognitionConfig;
}
export interface TextSegment {
  Text: string;
}
export declare class TextSizeLimitExceededException extends Data.TaggedError(
  "TextSizeLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagKeysException extends Data.TaggedError(
  "TooManyTagKeysException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export interface TopicsDetectionJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface TopicsDetectionJobProperties {
  JobId?: string;
  JobArn?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  NumberOfTopics?: number;
  DataAccessRoleArn?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
export type TopicsDetectionJobPropertiesList = Array<TopicsDetectionJobProperties>;
export interface ToxicContent {
  Name?: ToxicContentType;
  Score?: number;
}
export type ToxicContentType = "GRAPHIC" | "HARASSMENT_OR_ABUSE" | "HATE_SPEECH" | "INSULT" | "PROFANITY" | "SEXUAL" | "VIOLENCE_OR_THREAT";
export interface ToxicLabels {
  Labels?: Array<ToxicContent>;
  Toxicity?: number;
}
export declare class UnsupportedLanguageException extends Data.TaggedError(
  "UnsupportedLanguageException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateDataSecurityConfig {
  ModelKmsKeyId?: string;
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
}
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
export interface UpdateFlywheelRequest {
  FlywheelArn: string;
  ActiveModelArn?: string;
  DataAccessRoleArn?: string;
  DataSecurityConfig?: UpdateDataSecurityConfig;
}
export interface UpdateFlywheelResponse {
  FlywheelProperties?: FlywheelProperties;
}
export type VersionName = string;

export interface VpcConfig {
  SecurityGroupIds: Array<string>;
  Subnets: Array<string>;
}
export interface WarningsListItem {
  Page?: number;
  WarnCode?: PageBasedWarningCode;
  WarnMessage?: string;
}
export declare namespace BatchDetectDominantLanguage {
  export type Input = BatchDetectDominantLanguageRequest;
  export type Output = BatchDetectDominantLanguageResponse;
  export type Error =
    | BatchSizeLimitExceededException
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | CommonAwsError;
}

export declare namespace BatchDetectEntities {
  export type Input = BatchDetectEntitiesRequest;
  export type Output = BatchDetectEntitiesResponse;
  export type Error =
    | BatchSizeLimitExceededException
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace BatchDetectKeyPhrases {
  export type Input = BatchDetectKeyPhrasesRequest;
  export type Output = BatchDetectKeyPhrasesResponse;
  export type Error =
    | BatchSizeLimitExceededException
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace BatchDetectSentiment {
  export type Input = BatchDetectSentimentRequest;
  export type Output = BatchDetectSentimentResponse;
  export type Error =
    | BatchSizeLimitExceededException
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace BatchDetectSyntax {
  export type Input = BatchDetectSyntaxRequest;
  export type Output = BatchDetectSyntaxResponse;
  export type Error =
    | BatchSizeLimitExceededException
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace BatchDetectTargetedSentiment {
  export type Input = BatchDetectTargetedSentimentRequest;
  export type Output = BatchDetectTargetedSentimentResponse;
  export type Error =
    | BatchSizeLimitExceededException
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace ClassifyDocument {
  export type Input = ClassifyDocumentRequest;
  export type Output = ClassifyDocumentResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceUnavailableException
    | TextSizeLimitExceededException
    | CommonAwsError;
}

export declare namespace ContainsPiiEntities {
  export type Input = ContainsPiiEntitiesRequest;
  export type Output = ContainsPiiEntitiesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateDocumentClassifier {
  export type Input = CreateDocumentClassifierRequest;
  export type Output = CreateDocumentClassifierResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | ResourceLimitExceededException
    | TooManyRequestsException
    | TooManyTagsException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace CreateEndpoint {
  export type Input = CreateEndpointRequest;
  export type Output = CreateEndpointResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateEntityRecognizer {
  export type Input = CreateEntityRecognizerRequest;
  export type Output = CreateEntityRecognizerResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | ResourceLimitExceededException
    | TooManyRequestsException
    | TooManyTagsException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace CreateFlywheel {
  export type Input = CreateFlywheelRequest;
  export type Output = CreateFlywheelResponse;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace DeleteDocumentClassifier {
  export type Input = DeleteDocumentClassifierRequest;
  export type Output = DeleteDocumentClassifierResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEndpoint {
  export type Input = DeleteEndpointRequest;
  export type Output = DeleteEndpointResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEntityRecognizer {
  export type Input = DeleteEntityRecognizerRequest;
  export type Output = DeleteEntityRecognizerResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteFlywheel {
  export type Input = DeleteFlywheelRequest;
  export type Output = DeleteFlywheelResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeDocumentClassificationJob {
  export type Input = DescribeDocumentClassificationJobRequest;
  export type Output = DescribeDocumentClassificationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeDocumentClassifier {
  export type Input = DescribeDocumentClassifierRequest;
  export type Output = DescribeDocumentClassifierResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeDominantLanguageDetectionJob {
  export type Input = DescribeDominantLanguageDetectionJobRequest;
  export type Output = DescribeDominantLanguageDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEndpoint {
  export type Input = DescribeEndpointRequest;
  export type Output = DescribeEndpointResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEntitiesDetectionJob {
  export type Input = DescribeEntitiesDetectionJobRequest;
  export type Output = DescribeEntitiesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEntityRecognizer {
  export type Input = DescribeEntityRecognizerRequest;
  export type Output = DescribeEntityRecognizerResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEventsDetectionJob {
  export type Input = DescribeEventsDetectionJobRequest;
  export type Output = DescribeEventsDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeFlywheel {
  export type Input = DescribeFlywheelRequest;
  export type Output = DescribeFlywheelResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeFlywheelIteration {
  export type Input = DescribeFlywheelIterationRequest;
  export type Output = DescribeFlywheelIterationResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeKeyPhrasesDetectionJob {
  export type Input = DescribeKeyPhrasesDetectionJobRequest;
  export type Output = DescribeKeyPhrasesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribePiiEntitiesDetectionJob {
  export type Input = DescribePiiEntitiesDetectionJobRequest;
  export type Output = DescribePiiEntitiesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeResourcePolicy {
  export type Input = DescribeResourcePolicyRequest;
  export type Output = DescribeResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSentimentDetectionJob {
  export type Input = DescribeSentimentDetectionJobRequest;
  export type Output = DescribeSentimentDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeTargetedSentimentDetectionJob {
  export type Input = DescribeTargetedSentimentDetectionJobRequest;
  export type Output = DescribeTargetedSentimentDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeTopicsDetectionJob {
  export type Input = DescribeTopicsDetectionJobRequest;
  export type Output = DescribeTopicsDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DetectDominantLanguage {
  export type Input = DetectDominantLanguageRequest;
  export type Output = DetectDominantLanguageResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | CommonAwsError;
}

export declare namespace DetectEntities {
  export type Input = DetectEntitiesRequest;
  export type Output = DetectEntitiesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceUnavailableException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace DetectKeyPhrases {
  export type Input = DetectKeyPhrasesRequest;
  export type Output = DetectKeyPhrasesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace DetectPiiEntities {
  export type Input = DetectPiiEntitiesRequest;
  export type Output = DetectPiiEntitiesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace DetectSentiment {
  export type Input = DetectSentimentRequest;
  export type Output = DetectSentimentResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace DetectSyntax {
  export type Input = DetectSyntaxRequest;
  export type Output = DetectSyntaxResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace DetectTargetedSentiment {
  export type Input = DetectTargetedSentimentRequest;
  export type Output = DetectTargetedSentimentResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace DetectToxicContent {
  export type Input = DetectToxicContentRequest;
  export type Output = DetectToxicContentResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TextSizeLimitExceededException
    | UnsupportedLanguageException
    | CommonAwsError;
}

export declare namespace ImportModel {
  export type Input = ImportModelRequest;
  export type Output = ImportModelResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDocumentClassificationJobs {
  export type Input = ListDocumentClassificationJobsRequest;
  export type Output = ListDocumentClassificationJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDocumentClassifierSummaries {
  export type Input = ListDocumentClassifierSummariesRequest;
  export type Output = ListDocumentClassifierSummariesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDocumentClassifiers {
  export type Input = ListDocumentClassifiersRequest;
  export type Output = ListDocumentClassifiersResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListDominantLanguageDetectionJobs {
  export type Input = ListDominantLanguageDetectionJobsRequest;
  export type Output = ListDominantLanguageDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEndpoints {
  export type Input = ListEndpointsRequest;
  export type Output = ListEndpointsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEntitiesDetectionJobs {
  export type Input = ListEntitiesDetectionJobsRequest;
  export type Output = ListEntitiesDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEntityRecognizerSummaries {
  export type Input = ListEntityRecognizerSummariesRequest;
  export type Output = ListEntityRecognizerSummariesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEntityRecognizers {
  export type Input = ListEntityRecognizersRequest;
  export type Output = ListEntityRecognizersResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEventsDetectionJobs {
  export type Input = ListEventsDetectionJobsRequest;
  export type Output = ListEventsDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFlywheelIterationHistory {
  export type Input = ListFlywheelIterationHistoryRequest;
  export type Output = ListFlywheelIterationHistoryResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListFlywheels {
  export type Input = ListFlywheelsRequest;
  export type Output = ListFlywheelsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListKeyPhrasesDetectionJobs {
  export type Input = ListKeyPhrasesDetectionJobsRequest;
  export type Output = ListKeyPhrasesDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListPiiEntitiesDetectionJobs {
  export type Input = ListPiiEntitiesDetectionJobsRequest;
  export type Output = ListPiiEntitiesDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListSentimentDetectionJobs {
  export type Input = ListSentimentDetectionJobsRequest;
  export type Output = ListSentimentDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTargetedSentimentDetectionJobs {
  export type Input = ListTargetedSentimentDetectionJobsRequest;
  export type Output = ListTargetedSentimentDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTopicsDetectionJobs {
  export type Input = ListTopicsDetectionJobsRequest;
  export type Output = ListTopicsDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartDocumentClassificationJob {
  export type Input = StartDocumentClassificationJobRequest;
  export type Output = StartDocumentClassificationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartDominantLanguageDetectionJob {
  export type Input = StartDominantLanguageDetectionJobRequest;
  export type Output = StartDominantLanguageDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartEntitiesDetectionJob {
  export type Input = StartEntitiesDetectionJobRequest;
  export type Output = StartEntitiesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartEventsDetectionJob {
  export type Input = StartEventsDetectionJobRequest;
  export type Output = StartEventsDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartFlywheelIteration {
  export type Input = StartFlywheelIterationRequest;
  export type Output = StartFlywheelIterationResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartKeyPhrasesDetectionJob {
  export type Input = StartKeyPhrasesDetectionJobRequest;
  export type Output = StartKeyPhrasesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartPiiEntitiesDetectionJob {
  export type Input = StartPiiEntitiesDetectionJobRequest;
  export type Output = StartPiiEntitiesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartSentimentDetectionJob {
  export type Input = StartSentimentDetectionJobRequest;
  export type Output = StartSentimentDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartTargetedSentimentDetectionJob {
  export type Input = StartTargetedSentimentDetectionJobRequest;
  export type Output = StartTargetedSentimentDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StartTopicsDetectionJob {
  export type Input = StartTopicsDetectionJobRequest;
  export type Output = StartTopicsDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceInUseException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace StopDominantLanguageDetectionJob {
  export type Input = StopDominantLanguageDetectionJobRequest;
  export type Output = StopDominantLanguageDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | CommonAwsError;
}

export declare namespace StopEntitiesDetectionJob {
  export type Input = StopEntitiesDetectionJobRequest;
  export type Output = StopEntitiesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | CommonAwsError;
}

export declare namespace StopEventsDetectionJob {
  export type Input = StopEventsDetectionJobRequest;
  export type Output = StopEventsDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | CommonAwsError;
}

export declare namespace StopKeyPhrasesDetectionJob {
  export type Input = StopKeyPhrasesDetectionJobRequest;
  export type Output = StopKeyPhrasesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | CommonAwsError;
}

export declare namespace StopPiiEntitiesDetectionJob {
  export type Input = StopPiiEntitiesDetectionJobRequest;
  export type Output = StopPiiEntitiesDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | CommonAwsError;
}

export declare namespace StopSentimentDetectionJob {
  export type Input = StopSentimentDetectionJobRequest;
  export type Output = StopSentimentDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | CommonAwsError;
}

export declare namespace StopTargetedSentimentDetectionJob {
  export type Input = StopTargetedSentimentDetectionJobRequest;
  export type Output = StopTargetedSentimentDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | JobNotFoundException
    | CommonAwsError;
}

export declare namespace StopTrainingDocumentClassifier {
  export type Input = StopTrainingDocumentClassifierRequest;
  export type Output = StopTrainingDocumentClassifierResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StopTrainingEntityRecognizer {
  export type Input = StopTrainingEntityRecognizerRequest;
  export type Output = StopTrainingEntityRecognizerResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
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
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyTagKeysException
    | CommonAwsError;
}

export declare namespace UpdateEndpoint {
  export type Input = UpdateEndpointRequest;
  export type Output = UpdateEndpointResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateFlywheel {
  export type Input = UpdateFlywheelRequest;
  export type Output = UpdateFlywheelResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | KmsKeyValidationException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

