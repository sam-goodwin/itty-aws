import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSHawksNestServiceFacade {
  batchCreateVariable(
    input: BatchCreateVariableRequest,
  ): Effect.Effect<
    BatchCreateVariableResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetVariable(
    input: BatchGetVariableRequest,
  ): Effect.Effect<
    BatchGetVariableResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelBatchImportJob(
    input: CancelBatchImportJobRequest,
  ): Effect.Effect<
    CancelBatchImportJobResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelBatchPredictionJob(
    input: CancelBatchPredictionJobRequest,
  ): Effect.Effect<
    CancelBatchPredictionJobResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBatchImportJob(
    input: CreateBatchImportJobRequest,
  ): Effect.Effect<
    CreateBatchImportJobResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBatchPredictionJob(
    input: CreateBatchPredictionJobRequest,
  ): Effect.Effect<
    CreateBatchPredictionJobResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDetectorVersion(
    input: CreateDetectorVersionRequest,
  ): Effect.Effect<
    CreateDetectorVersionResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createList(
    input: CreateListRequest,
  ): Effect.Effect<
    CreateListResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createModel(
    input: CreateModelRequest,
  ): Effect.Effect<
    CreateModelResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createModelVersion(
    input: CreateModelVersionRequest,
  ): Effect.Effect<
    CreateModelVersionResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRule(
    input: CreateRuleRequest,
  ): Effect.Effect<
    CreateRuleResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createVariable(
    input: CreateVariableRequest,
  ): Effect.Effect<
    CreateVariableResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBatchImportJob(
    input: DeleteBatchImportJobRequest,
  ): Effect.Effect<
    DeleteBatchImportJobResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBatchPredictionJob(
    input: DeleteBatchPredictionJobRequest,
  ): Effect.Effect<
    DeleteBatchPredictionJobResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDetector(
    input: DeleteDetectorRequest,
  ): Effect.Effect<
    DeleteDetectorResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDetectorVersion(
    input: DeleteDetectorVersionRequest,
  ): Effect.Effect<
    DeleteDetectorVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEntityType(
    input: DeleteEntityTypeRequest,
  ): Effect.Effect<
    DeleteEntityTypeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEvent(
    input: DeleteEventRequest,
  ): Effect.Effect<
    DeleteEventResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEventsByEventType(
    input: DeleteEventsByEventTypeRequest,
  ): Effect.Effect<
    DeleteEventsByEventTypeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEventType(
    input: DeleteEventTypeRequest,
  ): Effect.Effect<
    DeleteEventTypeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteExternalModel(
    input: DeleteExternalModelRequest,
  ): Effect.Effect<
    DeleteExternalModelResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLabel(
    input: DeleteLabelRequest,
  ): Effect.Effect<
    DeleteLabelResult,
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteList(
    input: DeleteListRequest,
  ): Effect.Effect<
    DeleteListResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteModel(
    input: DeleteModelRequest,
  ): Effect.Effect<
    DeleteModelResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteModelVersion(
    input: DeleteModelVersionRequest,
  ): Effect.Effect<
    DeleteModelVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOutcome(
    input: DeleteOutcomeRequest,
  ): Effect.Effect<
    DeleteOutcomeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleRequest,
  ): Effect.Effect<
    DeleteRuleResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteVariable(
    input: DeleteVariableRequest,
  ): Effect.Effect<
    DeleteVariableResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDetector(
    input: DescribeDetectorRequest,
  ): Effect.Effect<
    DescribeDetectorResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeModelVersions(
    input: DescribeModelVersionsRequest,
  ): Effect.Effect<
    DescribeModelVersionsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBatchImportJobs(
    input: GetBatchImportJobsRequest,
  ): Effect.Effect<
    GetBatchImportJobsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBatchPredictionJobs(
    input: GetBatchPredictionJobsRequest,
  ): Effect.Effect<
    GetBatchPredictionJobsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDeleteEventsByEventTypeStatus(
    input: GetDeleteEventsByEventTypeStatusRequest,
  ): Effect.Effect<
    GetDeleteEventsByEventTypeStatusResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDetectors(
    input: GetDetectorsRequest,
  ): Effect.Effect<
    GetDetectorsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDetectorVersion(
    input: GetDetectorVersionRequest,
  ): Effect.Effect<
    GetDetectorVersionResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEntityTypes(
    input: GetEntityTypesRequest,
  ): Effect.Effect<
    GetEntityTypesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEvent(
    input: GetEventRequest,
  ): Effect.Effect<
    GetEventResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEventPrediction(
    input: GetEventPredictionRequest,
  ): Effect.Effect<
    GetEventPredictionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEventPredictionMetadata(
    input: GetEventPredictionMetadataRequest,
  ): Effect.Effect<
    GetEventPredictionMetadataResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEventTypes(
    input: GetEventTypesRequest,
  ): Effect.Effect<
    GetEventTypesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getExternalModels(
    input: GetExternalModelsRequest,
  ): Effect.Effect<
    GetExternalModelsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getKMSEncryptionKey(input: {}): Effect.Effect<
    GetKMSEncryptionKeyResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getLabels(
    input: GetLabelsRequest,
  ): Effect.Effect<
    GetLabelsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getListElements(
    input: GetListElementsRequest,
  ): Effect.Effect<
    GetListElementsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getListsMetadata(
    input: GetListsMetadataRequest,
  ): Effect.Effect<
    GetListsMetadataResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getModels(
    input: GetModelsRequest,
  ): Effect.Effect<
    GetModelsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getModelVersion(
    input: GetModelVersionRequest,
  ): Effect.Effect<
    GetModelVersionResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOutcomes(
    input: GetOutcomesRequest,
  ): Effect.Effect<
    GetOutcomesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRules(
    input: GetRulesRequest,
  ): Effect.Effect<
    GetRulesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getVariables(
    input: GetVariablesRequest,
  ): Effect.Effect<
    GetVariablesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEventPredictions(
    input: ListEventPredictionsRequest,
  ): Effect.Effect<
    ListEventPredictionsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResult,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putDetector(
    input: PutDetectorRequest,
  ): Effect.Effect<
    PutDetectorResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putEntityType(
    input: PutEntityTypeRequest,
  ): Effect.Effect<
    PutEntityTypeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putEventType(
    input: PutEventTypeRequest,
  ): Effect.Effect<
    PutEventTypeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putExternalModel(
    input: PutExternalModelRequest,
  ): Effect.Effect<
    PutExternalModelResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putKMSEncryptionKey(
    input: PutKMSEncryptionKeyRequest,
  ): Effect.Effect<
    PutKMSEncryptionKeyResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putLabel(
    input: PutLabelRequest,
  ): Effect.Effect<
    PutLabelResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putOutcome(
    input: PutOutcomeRequest,
  ): Effect.Effect<
    PutOutcomeResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendEvent(
    input: SendEventRequest,
  ): Effect.Effect<
    SendEventResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResult,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResult,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDetectorVersion(
    input: UpdateDetectorVersionRequest,
  ): Effect.Effect<
    UpdateDetectorVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDetectorVersionMetadata(
    input: UpdateDetectorVersionMetadataRequest,
  ): Effect.Effect<
    UpdateDetectorVersionMetadataResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDetectorVersionStatus(
    input: UpdateDetectorVersionStatusRequest,
  ): Effect.Effect<
    UpdateDetectorVersionStatusResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEventLabel(
    input: UpdateEventLabelRequest,
  ): Effect.Effect<
    UpdateEventLabelResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateList(
    input: UpdateListRequest,
  ): Effect.Effect<
    UpdateListResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateModel(
    input: UpdateModelRequest,
  ): Effect.Effect<
    UpdateModelResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateModelVersion(
    input: UpdateModelVersionRequest,
  ): Effect.Effect<
    UpdateModelVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateModelVersionStatus(
    input: UpdateModelVersionStatusRequest,
  ): Effect.Effect<
    UpdateModelVersionStatusResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRuleMetadata(
    input: UpdateRuleMetadataRequest,
  ): Effect.Effect<
    UpdateRuleMetadataResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRuleVersion(
    input: UpdateRuleVersionRequest,
  ): Effect.Effect<
    UpdateRuleVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateVariable(
    input: UpdateVariableRequest,
  ): Effect.Effect<
    UpdateVariableResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Frauddetector = AWSHawksNestServiceFacade;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AggregatedLogOddsMetric {
  variableNames: Array<string>;
  aggregatedVariablesImportance: number;
}
export interface AggregatedVariablesImpactExplanation {
  eventVariableNames?: Array<string>;
  relativeImpact?: string;
  logOddsImpact?: number;
}
export interface AggregatedVariablesImportanceMetrics {
  logOddsMetrics?: Array<AggregatedLogOddsMetric>;
}
export interface AllowDenyList {
  name: string;
  description?: string;
  variableType?: string;
  createdTime?: string;
  updatedTime?: string;
  arn?: string;
}
export type AllowDenyLists = Array<AllowDenyList>;
export type AsyncJobStatus =
  | "IN_PROGRESS_INITIALIZING"
  | "IN_PROGRESS"
  | "CANCEL_IN_PROGRESS"
  | "CANCELED"
  | "COMPLETE"
  | "FAILED";
export interface ATIMetricDataPoint {
  cr?: number;
  adr?: number;
  threshold?: number;
  atodr?: number;
}
export type ATIMetricDataPointsList = Array<ATIMetricDataPoint>;
export interface ATIModelPerformance {
  asi?: number;
}
export interface ATITrainingMetricsValue {
  metricDataPoints?: Array<ATIMetricDataPoint>;
  modelPerformance?: ATIModelPerformance;
}
export type attributeKey = string;

export type attributeValue = string;

export interface BatchCreateVariableError {
  name?: string;
  code?: number;
  message?: string;
}
export type BatchCreateVariableErrorList = Array<BatchCreateVariableError>;
export interface BatchCreateVariableRequest {
  variableEntries: Array<VariableEntry>;
  tags?: Array<Tag>;
}
export interface BatchCreateVariableResult {
  errors?: Array<BatchCreateVariableError>;
}
export interface BatchGetVariableError {
  name?: string;
  code?: number;
  message?: string;
}
export type BatchGetVariableErrorList = Array<BatchGetVariableError>;
export interface BatchGetVariableRequest {
  names: Array<string>;
}
export interface BatchGetVariableResult {
  variables?: Array<Variable>;
  errors?: Array<BatchGetVariableError>;
}
export interface BatchImport {
  jobId?: string;
  status?: AsyncJobStatus;
  failureReason?: string;
  startTime?: string;
  completionTime?: string;
  inputPath?: string;
  outputPath?: string;
  eventTypeName?: string;
  iamRoleArn?: string;
  arn?: string;
  processedRecordsCount?: number;
  failedRecordsCount?: number;
  totalRecordsCount?: number;
}
export type BatchImportList = Array<BatchImport>;
export type batchImportsMaxPageSize = number;

export interface BatchPrediction {
  jobId?: string;
  status?: AsyncJobStatus;
  failureReason?: string;
  startTime?: string;
  completionTime?: string;
  lastHeartbeatTime?: string;
  inputPath?: string;
  outputPath?: string;
  eventTypeName?: string;
  detectorName?: string;
  detectorVersion?: string;
  iamRoleArn?: string;
  arn?: string;
  processedRecordsCount?: number;
  totalRecordsCount?: number;
}
export type BatchPredictionList = Array<BatchPrediction>;
export type batchPredictionsMaxPageSize = number;

export type blob = Uint8Array | string;

export interface CancelBatchImportJobRequest {
  jobId: string;
}
export interface CancelBatchImportJobResult {}
export interface CancelBatchPredictionJobRequest {
  jobId: string;
}
export interface CancelBatchPredictionJobResult {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type contentType = string;

export interface CreateBatchImportJobRequest {
  jobId: string;
  inputPath: string;
  outputPath: string;
  eventTypeName: string;
  iamRoleArn: string;
  tags?: Array<Tag>;
}
export interface CreateBatchImportJobResult {}
export interface CreateBatchPredictionJobRequest {
  jobId: string;
  inputPath: string;
  outputPath: string;
  eventTypeName: string;
  detectorName: string;
  detectorVersion?: string;
  iamRoleArn: string;
  tags?: Array<Tag>;
}
export interface CreateBatchPredictionJobResult {}
export interface CreateDetectorVersionRequest {
  detectorId: string;
  description?: string;
  externalModelEndpoints?: Array<string>;
  rules: Array<Rule>;
  modelVersions?: Array<ModelVersion>;
  ruleExecutionMode?: RuleExecutionMode;
  tags?: Array<Tag>;
}
export interface CreateDetectorVersionResult {
  detectorId?: string;
  detectorVersionId?: string;
  status?: DetectorVersionStatus;
}
export interface CreateListRequest {
  name: string;
  elements?: Array<string>;
  variableType?: string;
  description?: string;
  tags?: Array<Tag>;
}
export interface CreateListResult {}
export interface CreateModelRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  description?: string;
  eventTypeName: string;
  tags?: Array<Tag>;
}
export interface CreateModelResult {}
export interface CreateModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  trainingDataSource: TrainingDataSourceEnum;
  trainingDataSchema: TrainingDataSchema;
  externalEventsDetail?: ExternalEventsDetail;
  ingestedEventsDetail?: IngestedEventsDetail;
  tags?: Array<Tag>;
}
export interface CreateModelVersionResult {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  status?: string;
}
export interface CreateRuleRequest {
  ruleId: string;
  detectorId: string;
  description?: string;
  expression: string;
  language: Language;
  outcomes: Array<string>;
  tags?: Array<Tag>;
}
export interface CreateRuleResult {
  rule?: Rule;
}
export interface CreateVariableRequest {
  name: string;
  dataType: DataType;
  dataSource: DataSource;
  defaultValue: string;
  description?: string;
  variableType?: string;
  tags?: Array<Tag>;
}
export interface CreateVariableResult {}
export type CsvIndexToVariableMap = Record<string, string>;
export type DataSource = "EVENT" | "MODEL_SCORE" | "EXTERNAL_MODEL_SCORE";
export type DataType = "STRING" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATETIME";
export interface DataValidationMetrics {
  fileLevelMessages?: Array<FileValidationMessage>;
  fieldLevelMessages?: Array<FieldValidationMessage>;
}
export type DeleteAuditHistory = boolean;

export interface DeleteBatchImportJobRequest {
  jobId: string;
}
export interface DeleteBatchImportJobResult {}
export interface DeleteBatchPredictionJobRequest {
  jobId: string;
}
export interface DeleteBatchPredictionJobResult {}
export interface DeleteDetectorRequest {
  detectorId: string;
}
export interface DeleteDetectorResult {}
export interface DeleteDetectorVersionRequest {
  detectorId: string;
  detectorVersionId: string;
}
export interface DeleteDetectorVersionResult {}
export interface DeleteEntityTypeRequest {
  name: string;
}
export interface DeleteEntityTypeResult {}
export interface DeleteEventRequest {
  eventId: string;
  eventTypeName: string;
  deleteAuditHistory?: boolean;
}
export interface DeleteEventResult {}
export interface DeleteEventsByEventTypeRequest {
  eventTypeName: string;
}
export interface DeleteEventsByEventTypeResult {
  eventTypeName?: string;
  eventsDeletionStatus?: string;
}
export interface DeleteEventTypeRequest {
  name: string;
}
export interface DeleteEventTypeResult {}
export interface DeleteExternalModelRequest {
  modelEndpoint: string;
}
export interface DeleteExternalModelResult {}
export interface DeleteLabelRequest {
  name: string;
}
export interface DeleteLabelResult {}
export interface DeleteListRequest {
  name: string;
}
export interface DeleteListResult {}
export interface DeleteModelRequest {
  modelId: string;
  modelType: ModelTypeEnum;
}
export interface DeleteModelResult {}
export interface DeleteModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
}
export interface DeleteModelVersionResult {}
export interface DeleteOutcomeRequest {
  name: string;
}
export interface DeleteOutcomeResult {}
export interface DeleteRuleRequest {
  rule: Rule;
}
export interface DeleteRuleResult {}
export interface DeleteVariableRequest {
  name: string;
}
export interface DeleteVariableResult {}
export interface DescribeDetectorRequest {
  detectorId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeDetectorResult {
  detectorId?: string;
  detectorVersionSummaries?: Array<DetectorVersionSummary>;
  nextToken?: string;
  arn?: string;
}
export interface DescribeModelVersionsRequest {
  modelId?: string;
  modelVersionNumber?: string;
  modelType?: ModelTypeEnum;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeModelVersionsResult {
  modelVersionDetails?: Array<ModelVersionDetail>;
  nextToken?: string;
}
export type description = string;

export interface Detector {
  detectorId?: string;
  description?: string;
  eventTypeName?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type DetectorList = Array<Detector>;
export type DetectorsMaxResults = number;

export type DetectorVersionMaxResults = number;

export type DetectorVersionStatus = "DRAFT" | "ACTIVE" | "INACTIVE";
export interface DetectorVersionSummary {
  detectorVersionId?: string;
  status?: DetectorVersionStatus;
  description?: string;
  lastUpdatedTime?: string;
}
export type DetectorVersionSummaryList = Array<DetectorVersionSummary>;
export type Elements = string;

export type ElementsList = Array<string>;
export interface Entity {
  entityType: string;
  entityId: string;
}
export type entityRestrictedString = string;

export interface EntityType {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type entityTypeList = Array<EntityType>;
export type entityTypesMaxResults = number;

export interface EvaluatedExternalModel {
  modelEndpoint?: string;
  useEventVariables?: boolean;
  inputVariables?: Record<string, string>;
  outputVariables?: Record<string, string>;
}
export interface EvaluatedModelVersion {
  modelId?: string;
  modelVersion?: string;
  modelType?: string;
  evaluations?: Array<ModelVersionEvaluation>;
}
export interface EvaluatedRule {
  ruleId?: string;
  ruleVersion?: string;
  expression?: string;
  expressionWithValues?: string;
  outcomes?: Array<string>;
  evaluated?: boolean;
  matched?: boolean;
}
export type EvaluatedRuleList = Array<EvaluatedRule>;
export interface Event {
  eventId?: string;
  eventTypeName?: string;
  eventTimestamp?: string;
  eventVariables?: Record<string, string>;
  currentLabel?: string;
  labelTimestamp?: string;
  entities?: Array<Entity>;
}
export type EventAttributeMap = Record<string, string>;
export type EventIngestion = "ENABLED" | "DISABLED";
export interface EventOrchestration {
  eventBridgeEnabled: boolean;
}
export type EventPredictionsMaxResults = number;

export interface EventPredictionSummary {
  eventId?: string;
  eventTypeName?: string;
  eventTimestamp?: string;
  predictionTimestamp?: string;
  detectorId?: string;
  detectorVersionId?: string;
}
export interface EventType {
  name?: string;
  description?: string;
  eventVariables?: Array<string>;
  labels?: Array<string>;
  entityTypes?: Array<string>;
  eventIngestion?: EventIngestion;
  ingestedEventStatistics?: IngestedEventStatistics;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
  eventOrchestration?: EventOrchestration;
}
export type eventTypeList = Array<EventType>;
export type eventTypesMaxResults = number;

export type EventVariableMap = Record<string, string>;
export interface EventVariableSummary {
  name?: string;
  value?: string;
  source?: string;
}
export interface ExternalEventsDetail {
  dataLocation: string;
  dataAccessRoleArn: string;
}
export interface ExternalModel {
  modelEndpoint?: string;
  modelSource?: ModelSource;
  invokeModelEndpointRoleArn?: string;
  inputConfiguration?: ModelInputConfiguration;
  outputConfiguration?: ModelOutputConfiguration;
  modelEndpointStatus?: ModelEndpointStatus;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type ExternalModelEndpointDataBlobMap = Record<
  string,
  ModelEndpointDataBlob
>;
export type ExternalModelList = Array<ExternalModel>;
export interface ExternalModelOutputs {
  externalModel?: ExternalModelSummary;
  outputs?: Record<string, string>;
}
export type ExternalModelPredictionMap = Record<string, string>;
export type ExternalModelsMaxResults = number;

export interface ExternalModelSummary {
  modelEndpoint?: string;
  modelSource?: ModelSource;
}
export interface FieldValidationMessage {
  fieldName?: string;
  identifier?: string;
  title?: string;
  content?: string;
  type?: string;
}
export type fieldValidationMessageList = Array<FieldValidationMessage>;
export interface FileValidationMessage {
  title?: string;
  content?: string;
  type?: string;
}
export type fileValidationMessageList = Array<FileValidationMessage>;
export interface FilterCondition {
  value?: string;
}
export type filterString = string;

export type float = number;

export type floatVersionString = string;

export type fraudDetectorArn = string;

export interface GetBatchImportJobsRequest {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetBatchImportJobsResult {
  batchImports?: Array<BatchImport>;
  nextToken?: string;
}
export interface GetBatchPredictionJobsRequest {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetBatchPredictionJobsResult {
  batchPredictions?: Array<BatchPrediction>;
  nextToken?: string;
}
export interface GetDeleteEventsByEventTypeStatusRequest {
  eventTypeName: string;
}
export interface GetDeleteEventsByEventTypeStatusResult {
  eventTypeName?: string;
  eventsDeletionStatus?: AsyncJobStatus;
}
export interface GetDetectorsRequest {
  detectorId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetDetectorsResult {
  detectors?: Array<Detector>;
  nextToken?: string;
}
export interface GetDetectorVersionRequest {
  detectorId: string;
  detectorVersionId: string;
}
export interface GetDetectorVersionResult {
  detectorId?: string;
  detectorVersionId?: string;
  description?: string;
  externalModelEndpoints?: Array<string>;
  modelVersions?: Array<ModelVersion>;
  rules?: Array<Rule>;
  status?: DetectorVersionStatus;
  lastUpdatedTime?: string;
  createdTime?: string;
  ruleExecutionMode?: RuleExecutionMode;
  arn?: string;
}
export interface GetEntityTypesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetEntityTypesResult {
  entityTypes?: Array<EntityType>;
  nextToken?: string;
}
export interface GetEventPredictionMetadataRequest {
  eventId: string;
  eventTypeName: string;
  detectorId: string;
  detectorVersionId: string;
  predictionTimestamp: string;
}
export interface GetEventPredictionMetadataResult {
  eventId?: string;
  eventTypeName?: string;
  entityId?: string;
  entityType?: string;
  eventTimestamp?: string;
  detectorId?: string;
  detectorVersionId?: string;
  detectorVersionStatus?: string;
  eventVariables?: Array<EventVariableSummary>;
  rules?: Array<EvaluatedRule>;
  ruleExecutionMode?: RuleExecutionMode;
  outcomes?: Array<string>;
  evaluatedModelVersions?: Array<EvaluatedModelVersion>;
  evaluatedExternalModels?: Array<EvaluatedExternalModel>;
  predictionTimestamp?: string;
}
export interface GetEventPredictionRequest {
  detectorId: string;
  detectorVersionId?: string;
  eventId: string;
  eventTypeName: string;
  entities: Array<Entity>;
  eventTimestamp: string;
  eventVariables: Record<string, string>;
  externalModelEndpointDataBlobs?: Record<string, ModelEndpointDataBlob>;
}
export interface GetEventPredictionResult {
  modelScores?: Array<ModelScores>;
  ruleResults?: Array<RuleResult>;
  externalModelOutputs?: Array<ExternalModelOutputs>;
}
export interface GetEventRequest {
  eventId: string;
  eventTypeName: string;
}
export interface GetEventResult {
  event?: Event;
}
export interface GetEventTypesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetEventTypesResult {
  eventTypes?: Array<EventType>;
  nextToken?: string;
}
export interface GetExternalModelsRequest {
  modelEndpoint?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetExternalModelsResult {
  externalModels?: Array<ExternalModel>;
  nextToken?: string;
}
export interface GetKMSEncryptionKeyResult {
  kmsKey?: KMSKey;
}
export interface GetLabelsRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetLabelsResult {
  labels?: Array<Label>;
  nextToken?: string;
}
export interface GetListElementsRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetListElementsResult {
  elements?: Array<string>;
  nextToken?: string;
}
export interface GetListsMetadataRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetListsMetadataResult {
  lists?: Array<AllowDenyList>;
  nextToken?: string;
}
export interface GetModelsRequest {
  modelId?: string;
  modelType?: ModelTypeEnum;
  nextToken?: string;
  maxResults?: number;
}
export interface GetModelsResult {
  nextToken?: string;
  models?: Array<Model>;
}
export interface GetModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
}
export interface GetModelVersionResult {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  trainingDataSource?: TrainingDataSourceEnum;
  trainingDataSchema?: TrainingDataSchema;
  externalEventsDetail?: ExternalEventsDetail;
  ingestedEventsDetail?: IngestedEventsDetail;
  status?: string;
  arn?: string;
}
export interface GetOutcomesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetOutcomesResult {
  outcomes?: Array<Outcome>;
  nextToken?: string;
}
export interface GetRulesRequest {
  ruleId?: string;
  detectorId: string;
  ruleVersion?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetRulesResult {
  ruleDetails?: Array<RuleDetail>;
  nextToken?: string;
}
export interface GetVariablesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetVariablesResult {
  variables?: Array<Variable>;
  nextToken?: string;
}
export type iamRoleArn = string;

export type identifier = string;

export interface IngestedEventsDetail {
  ingestedEventsTimeWindow: IngestedEventsTimeWindow;
}
export interface IngestedEventStatistics {
  numberOfEvents?: number;
  eventDataSizeInBytes?: number;
  leastRecentEvent?: string;
  mostRecentEvent?: string;
  lastUpdatedTime?: string;
}
export interface IngestedEventsTimeWindow {
  startTime: string;
  endTime: string;
}
export type Integer = number;

export type Integer2 = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type JsonKeyToVariableMap = Record<string, string>;
export type KmsEncryptionKeyArn = string;

export interface KMSKey {
  kmsEncryptionKeyArn?: string;
}
export interface Label {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type labelList = Array<Label>;
export type labelMapper = Record<string, Array<string>>;
export interface LabelSchema {
  labelMapper?: Record<string, Array<string>>;
  unlabeledEventsTreatment?: UnlabeledEventsTreatment;
}
export type labelsMaxResults = number;

export type Language = "DETECTORPL";
export interface ListEventPredictionsRequest {
  eventId?: FilterCondition;
  eventType?: FilterCondition;
  detectorId?: FilterCondition;
  detectorVersionId?: FilterCondition;
  predictionTimeRange?: PredictionTimeRange;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEventPredictionsResult {
  eventPredictionSummaries?: Array<EventPredictionSummary>;
  nextToken?: string;
}
export type ListOfAggregatedLogOddsMetrics = Array<AggregatedLogOddsMetric>;
export type ListOfAggregatedVariablesImpactExplanations =
  Array<AggregatedVariablesImpactExplanation>;
export type listOfEntities = Array<Entity>;
export type ListOfEvaluatedExternalModels = Array<EvaluatedExternalModel>;
export type ListOfEvaluatedModelVersions = Array<EvaluatedModelVersion>;
export type ListOfEventPredictionSummaries = Array<EventPredictionSummary>;
export type ListOfEventVariableSummaries = Array<EventVariableSummary>;
export type ListOfExternalModelOutputs = Array<ExternalModelOutputs>;
export type ListOfLogOddsMetrics = Array<LogOddsMetric>;
export type ListOfModelScores = Array<ModelScores>;
export type ListOfModelVersionEvaluations = Array<ModelVersionEvaluation>;
export type ListOfModelVersions = Array<ModelVersion>;
export type ListOfRuleResults = Array<RuleResult>;
export type ListOfStrings = Array<string>;
export type listOfVariableImpactExplanations = Array<VariableImpactExplanation>;
export type ListsElementsMaxResults = number;

export type ListsMetadataMaxResults = number;

export interface ListTagsForResourceRequest {
  resourceARN: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTagsForResourceResult {
  tags?: Array<Tag>;
  nextToken?: string;
}
export type ListUpdateMode = "REPLACE" | "APPEND" | "REMOVE";
export interface LogOddsMetric {
  variableName: string;
  variableType: string;
  variableImportance: number;
}
export type Long = number;

export type MapOfStrings = Record<string, string>;
export interface MetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
export type metricDataPointsList = Array<MetricDataPoint>;
export interface Model {
  modelId?: string;
  modelType?: ModelTypeEnum;
  description?: string;
  eventTypeName?: string;
  createdTime?: string;
  lastUpdatedTime?: string;
  arn?: string;
}
export interface ModelEndpointDataBlob {
  byteBuffer?: Uint8Array | string;
  contentType?: string;
}
export type ModelEndpointStatus = "ASSOCIATED" | "DISSOCIATED";
export type modelIdentifier = string;

export interface ModelInputConfiguration {
  eventTypeName?: string;
  format?: ModelInputDataFormat;
  useEventVariables: boolean;
  jsonInputTemplate?: string;
  csvInputTemplate?: string;
}
export type ModelInputDataFormat = "CSV" | "JSON";
export type modelInputTemplate = string;

export type modelList = Array<Model>;
export interface ModelOutputConfiguration {
  format: ModelOutputDataFormat;
  jsonKeyToVariableMap?: Record<string, string>;
  csvIndexToVariableMap?: Record<string, string>;
}
export type ModelOutputDataFormat = "CSV" | "JSONLINES";
export type ModelPredictionMap = Record<string, number>;
export interface ModelScores {
  modelVersion?: ModelVersion;
  scores?: Record<string, number>;
}
export type modelsMaxPageSize = number;

export type ModelSource = "SAGEMAKER";
export type ModelTypeEnum =
  | "ONLINE_FRAUD_INSIGHTS"
  | "TRANSACTION_FRAUD_INSIGHTS"
  | "ACCOUNT_TAKEOVER_INSIGHTS";
export interface ModelVersion {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
  arn?: string;
}
export interface ModelVersionDetail {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  status?: string;
  trainingDataSource?: TrainingDataSourceEnum;
  trainingDataSchema?: TrainingDataSchema;
  externalEventsDetail?: ExternalEventsDetail;
  ingestedEventsDetail?: IngestedEventsDetail;
  trainingResult?: TrainingResult;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
  trainingResultV2?: TrainingResultV2;
}
export type modelVersionDetailList = Array<ModelVersionDetail>;
export interface ModelVersionEvaluation {
  outputVariableName?: string;
  evaluationScore?: string;
  predictionExplanations?: PredictionExplanations;
}
export type ModelVersionStatus = "ACTIVE" | "INACTIVE" | "TRAINING_CANCELLED";
export type NameList = Array<string>;
export type nextToken = string;

export type noDashIdentifier = string;

export type NonEmptyListOfStrings = Array<string>;
export interface OFIMetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
export type OFIMetricDataPointsList = Array<OFIMetricDataPoint>;
export interface OFIModelPerformance {
  auc?: number;
  uncertaintyRange?: UncertaintyRange;
}
export interface OFITrainingMetricsValue {
  metricDataPoints?: Array<OFIMetricDataPoint>;
  modelPerformance?: OFIModelPerformance;
}
export interface Outcome {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type OutcomeList = Array<Outcome>;
export type OutcomesMaxResults = number;

export interface PredictionExplanations {
  variableImpactExplanations?: Array<VariableImpactExplanation>;
  aggregatedVariablesImpactExplanations?: Array<AggregatedVariablesImpactExplanation>;
}
export interface PredictionTimeRange {
  startTime: string;
  endTime: string;
}
export interface PutDetectorRequest {
  detectorId: string;
  description?: string;
  eventTypeName: string;
  tags?: Array<Tag>;
}
export interface PutDetectorResult {}
export interface PutEntityTypeRequest {
  name: string;
  description?: string;
  tags?: Array<Tag>;
}
export interface PutEntityTypeResult {}
export interface PutEventTypeRequest {
  name: string;
  description?: string;
  eventVariables: Array<string>;
  labels?: Array<string>;
  entityTypes: Array<string>;
  eventIngestion?: EventIngestion;
  tags?: Array<Tag>;
  eventOrchestration?: EventOrchestration;
}
export interface PutEventTypeResult {}
export interface PutExternalModelRequest {
  modelEndpoint: string;
  modelSource: ModelSource;
  invokeModelEndpointRoleArn: string;
  inputConfiguration: ModelInputConfiguration;
  outputConfiguration: ModelOutputConfiguration;
  modelEndpointStatus: ModelEndpointStatus;
  tags?: Array<Tag>;
}
export interface PutExternalModelResult {}
export interface PutKMSEncryptionKeyRequest {
  kmsEncryptionKeyArn: string;
}
export interface PutKMSEncryptionKeyResult {}
export interface PutLabelRequest {
  name: string;
  description?: string;
  tags?: Array<Tag>;
}
export interface PutLabelResult {}
export interface PutOutcomeRequest {
  name: string;
  description?: string;
  tags?: Array<Tag>;
}
export interface PutOutcomeResult {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export declare class ResourceUnavailableException extends EffectData.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface Rule {
  detectorId: string;
  ruleId: string;
  ruleVersion: string;
}
export interface RuleDetail {
  ruleId?: string;
  description?: string;
  detectorId?: string;
  ruleVersion?: string;
  expression?: string;
  language?: Language;
  outcomes?: Array<string>;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type RuleDetailList = Array<RuleDetail>;
export type RuleExecutionMode = "ALL_MATCHED" | "FIRST_MATCHED";
export type ruleExpression = string;

export type RuleList = Array<Rule>;
export interface RuleResult {
  ruleId?: string;
  outcomes?: Array<string>;
}
export type RulesMaxResults = number;

export type s3BucketLocation = string;

export type sageMakerEndpointIdentifier = string;

export interface SendEventRequest {
  eventId: string;
  eventTypeName: string;
  eventTimestamp: string;
  eventVariables: Record<string, string>;
  assignedLabel?: string;
  labelTimestamp?: string;
  entities: Array<Entity>;
}
export interface SendEventResult {}
export type sensitiveString = string;

export interface Tag {
  key: string;
  value: string;
}
export type tagKey = string;

export type tagKeyList = Array<string>;
export type tagList = Array<Tag>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Array<Tag>;
}
export interface TagResourceResult {}
export type TagsMaxResults = number;

export type tagValue = string;

export interface TFIMetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
export type TFIMetricDataPointsList = Array<TFIMetricDataPoint>;
export interface TFIModelPerformance {
  auc?: number;
  uncertaintyRange?: UncertaintyRange;
}
export interface TFITrainingMetricsValue {
  metricDataPoints?: Array<TFIMetricDataPoint>;
  modelPerformance?: TFIModelPerformance;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export type time = string;

export interface TrainingDataSchema {
  modelVariables: Array<string>;
  labelSchema?: LabelSchema;
}
export type TrainingDataSourceEnum = "EXTERNAL_EVENTS" | "INGESTED_EVENTS";
export interface TrainingMetrics {
  auc?: number;
  metricDataPoints?: Array<MetricDataPoint>;
}
export interface TrainingMetricsV2 {
  ofi?: OFITrainingMetricsValue;
  tfi?: TFITrainingMetricsValue;
  ati?: ATITrainingMetricsValue;
}
export interface TrainingResult {
  dataValidationMetrics?: DataValidationMetrics;
  trainingMetrics?: TrainingMetrics;
  variableImportanceMetrics?: VariableImportanceMetrics;
}
export interface TrainingResultV2 {
  dataValidationMetrics?: DataValidationMetrics;
  trainingMetricsV2?: TrainingMetricsV2;
  variableImportanceMetrics?: VariableImportanceMetrics;
  aggregatedVariablesImportanceMetrics?: AggregatedVariablesImportanceMetrics;
}
export interface UncertaintyRange {
  lowerBoundValue: number;
  upperBoundValue: number;
}
export type UnlabeledEventsTreatment = "IGNORE" | "FRAUD" | "LEGIT" | "AUTO";
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResult {}
export interface UpdateDetectorVersionMetadataRequest {
  detectorId: string;
  detectorVersionId: string;
  description: string;
}
export interface UpdateDetectorVersionMetadataResult {}
export interface UpdateDetectorVersionRequest {
  detectorId: string;
  detectorVersionId: string;
  externalModelEndpoints: Array<string>;
  rules: Array<Rule>;
  description?: string;
  modelVersions?: Array<ModelVersion>;
  ruleExecutionMode?: RuleExecutionMode;
}
export interface UpdateDetectorVersionResult {}
export interface UpdateDetectorVersionStatusRequest {
  detectorId: string;
  detectorVersionId: string;
  status: DetectorVersionStatus;
}
export interface UpdateDetectorVersionStatusResult {}
export interface UpdateEventLabelRequest {
  eventId: string;
  eventTypeName: string;
  assignedLabel: string;
  labelTimestamp: string;
}
export interface UpdateEventLabelResult {}
export interface UpdateListRequest {
  name: string;
  elements?: Array<string>;
  description?: string;
  updateMode?: ListUpdateMode;
  variableType?: string;
}
export interface UpdateListResult {}
export interface UpdateModelRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  description?: string;
}
export interface UpdateModelResult {}
export interface UpdateModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  majorVersionNumber: string;
  externalEventsDetail?: ExternalEventsDetail;
  ingestedEventsDetail?: IngestedEventsDetail;
  tags?: Array<Tag>;
}
export interface UpdateModelVersionResult {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  status?: string;
}
export interface UpdateModelVersionStatusRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
  status: ModelVersionStatus;
}
export interface UpdateModelVersionStatusResult {}
export interface UpdateRuleMetadataRequest {
  rule: Rule;
  description: string;
}
export interface UpdateRuleMetadataResult {}
export interface UpdateRuleVersionRequest {
  rule: Rule;
  description?: string;
  expression: string;
  language: Language;
  outcomes: Array<string>;
  tags?: Array<Tag>;
}
export interface UpdateRuleVersionResult {
  rule?: Rule;
}
export interface UpdateVariableRequest {
  name: string;
  defaultValue?: string;
  description?: string;
  variableType?: string;
}
export interface UpdateVariableResult {}
export type UseEventVariables = boolean;

export type utcTimestampISO8601 = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export interface Variable {
  name?: string;
  dataType?: DataType;
  dataSource?: DataSource;
  defaultValue?: string;
  description?: string;
  variableType?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export interface VariableEntry {
  name?: string;
  dataType?: string;
  dataSource?: string;
  defaultValue?: string;
  description?: string;
  variableType?: string;
}
export type VariableEntryList = Array<VariableEntry>;
export interface VariableImpactExplanation {
  eventVariableName?: string;
  relativeImpact?: string;
  logOddsImpact?: number;
}
export interface VariableImportanceMetrics {
  logOddsMetrics?: Array<LogOddsMetric>;
}
export type VariableList = Array<Variable>;
export type variableName = string;

export type VariablesMaxResults = number;

export type variableType = string;

export type variableValue = string;

export type wholeNumberVersionString = string;

export declare namespace BatchCreateVariable {
  export type Input = BatchCreateVariableRequest;
  export type Output = BatchCreateVariableResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetVariable {
  export type Input = BatchGetVariableRequest;
  export type Output = BatchGetVariableResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelBatchImportJob {
  export type Input = CancelBatchImportJobRequest;
  export type Output = CancelBatchImportJobResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelBatchPredictionJob {
  export type Input = CancelBatchPredictionJobRequest;
  export type Output = CancelBatchPredictionJobResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBatchImportJob {
  export type Input = CreateBatchImportJobRequest;
  export type Output = CreateBatchImportJobResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBatchPredictionJob {
  export type Input = CreateBatchPredictionJobRequest;
  export type Output = CreateBatchPredictionJobResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDetectorVersion {
  export type Input = CreateDetectorVersionRequest;
  export type Output = CreateDetectorVersionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateList {
  export type Input = CreateListRequest;
  export type Output = CreateListResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateModel {
  export type Input = CreateModelRequest;
  export type Output = CreateModelResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateModelVersion {
  export type Input = CreateModelVersionRequest;
  export type Output = CreateModelVersionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRule {
  export type Input = CreateRuleRequest;
  export type Output = CreateRuleResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateVariable {
  export type Input = CreateVariableRequest;
  export type Output = CreateVariableResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBatchImportJob {
  export type Input = DeleteBatchImportJobRequest;
  export type Output = DeleteBatchImportJobResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBatchPredictionJob {
  export type Input = DeleteBatchPredictionJobRequest;
  export type Output = DeleteBatchPredictionJobResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDetector {
  export type Input = DeleteDetectorRequest;
  export type Output = DeleteDetectorResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDetectorVersion {
  export type Input = DeleteDetectorVersionRequest;
  export type Output = DeleteDetectorVersionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEntityType {
  export type Input = DeleteEntityTypeRequest;
  export type Output = DeleteEntityTypeResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEvent {
  export type Input = DeleteEventRequest;
  export type Output = DeleteEventResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEventsByEventType {
  export type Input = DeleteEventsByEventTypeRequest;
  export type Output = DeleteEventsByEventTypeResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEventType {
  export type Input = DeleteEventTypeRequest;
  export type Output = DeleteEventTypeResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteExternalModel {
  export type Input = DeleteExternalModelRequest;
  export type Output = DeleteExternalModelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLabel {
  export type Input = DeleteLabelRequest;
  export type Output = DeleteLabelResult;
  export type Error =
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteList {
  export type Input = DeleteListRequest;
  export type Output = DeleteListResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteModel {
  export type Input = DeleteModelRequest;
  export type Output = DeleteModelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteModelVersion {
  export type Input = DeleteModelVersionRequest;
  export type Output = DeleteModelVersionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOutcome {
  export type Input = DeleteOutcomeRequest;
  export type Output = DeleteOutcomeResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleRequest;
  export type Output = DeleteRuleResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVariable {
  export type Input = DeleteVariableRequest;
  export type Output = DeleteVariableResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDetector {
  export type Input = DescribeDetectorRequest;
  export type Output = DescribeDetectorResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeModelVersions {
  export type Input = DescribeModelVersionsRequest;
  export type Output = DescribeModelVersionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBatchImportJobs {
  export type Input = GetBatchImportJobsRequest;
  export type Output = GetBatchImportJobsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBatchPredictionJobs {
  export type Input = GetBatchPredictionJobsRequest;
  export type Output = GetBatchPredictionJobsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeleteEventsByEventTypeStatus {
  export type Input = GetDeleteEventsByEventTypeStatusRequest;
  export type Output = GetDeleteEventsByEventTypeStatusResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDetectors {
  export type Input = GetDetectorsRequest;
  export type Output = GetDetectorsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDetectorVersion {
  export type Input = GetDetectorVersionRequest;
  export type Output = GetDetectorVersionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEntityTypes {
  export type Input = GetEntityTypesRequest;
  export type Output = GetEntityTypesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEvent {
  export type Input = GetEventRequest;
  export type Output = GetEventResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEventPrediction {
  export type Input = GetEventPredictionRequest;
  export type Output = GetEventPredictionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEventPredictionMetadata {
  export type Input = GetEventPredictionMetadataRequest;
  export type Output = GetEventPredictionMetadataResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEventTypes {
  export type Input = GetEventTypesRequest;
  export type Output = GetEventTypesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetExternalModels {
  export type Input = GetExternalModelsRequest;
  export type Output = GetExternalModelsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKMSEncryptionKey {
  export type Input = {};
  export type Output = GetKMSEncryptionKeyResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLabels {
  export type Input = GetLabelsRequest;
  export type Output = GetLabelsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetListElements {
  export type Input = GetListElementsRequest;
  export type Output = GetListElementsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetListsMetadata {
  export type Input = GetListsMetadataRequest;
  export type Output = GetListsMetadataResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetModels {
  export type Input = GetModelsRequest;
  export type Output = GetModelsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetModelVersion {
  export type Input = GetModelVersionRequest;
  export type Output = GetModelVersionResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOutcomes {
  export type Input = GetOutcomesRequest;
  export type Output = GetOutcomesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRules {
  export type Input = GetRulesRequest;
  export type Output = GetRulesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetVariables {
  export type Input = GetVariablesRequest;
  export type Output = GetVariablesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEventPredictions {
  export type Input = ListEventPredictionsRequest;
  export type Output = ListEventPredictionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDetector {
  export type Input = PutDetectorRequest;
  export type Output = PutDetectorResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutEntityType {
  export type Input = PutEntityTypeRequest;
  export type Output = PutEntityTypeResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutEventType {
  export type Input = PutEventTypeRequest;
  export type Output = PutEventTypeResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutExternalModel {
  export type Input = PutExternalModelRequest;
  export type Output = PutExternalModelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutKMSEncryptionKey {
  export type Input = PutKMSEncryptionKeyRequest;
  export type Output = PutKMSEncryptionKeyResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutLabel {
  export type Input = PutLabelRequest;
  export type Output = PutLabelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutOutcome {
  export type Input = PutOutcomeRequest;
  export type Output = PutOutcomeResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendEvent {
  export type Input = SendEventRequest;
  export type Output = SendEventResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResult;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResult;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDetectorVersion {
  export type Input = UpdateDetectorVersionRequest;
  export type Output = UpdateDetectorVersionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDetectorVersionMetadata {
  export type Input = UpdateDetectorVersionMetadataRequest;
  export type Output = UpdateDetectorVersionMetadataResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDetectorVersionStatus {
  export type Input = UpdateDetectorVersionStatusRequest;
  export type Output = UpdateDetectorVersionStatusResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEventLabel {
  export type Input = UpdateEventLabelRequest;
  export type Output = UpdateEventLabelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateList {
  export type Input = UpdateListRequest;
  export type Output = UpdateListResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateModel {
  export type Input = UpdateModelRequest;
  export type Output = UpdateModelResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateModelVersion {
  export type Input = UpdateModelVersionRequest;
  export type Output = UpdateModelVersionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateModelVersionStatus {
  export type Input = UpdateModelVersionStatusRequest;
  export type Output = UpdateModelVersionStatusResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRuleMetadata {
  export type Input = UpdateRuleMetadataRequest;
  export type Output = UpdateRuleMetadataResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRuleVersion {
  export type Input = UpdateRuleVersionRequest;
  export type Output = UpdateRuleVersionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateVariable {
  export type Input = UpdateVariableRequest;
  export type Output = UpdateVariableResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
