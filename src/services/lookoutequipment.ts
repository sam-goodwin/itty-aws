import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSLookoutEquipmentFrontendService {
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInferenceScheduler(
    input: CreateInferenceSchedulerRequest,
  ): Effect.Effect<
    CreateInferenceSchedulerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLabel(
    input: CreateLabelRequest,
  ): Effect.Effect<
    CreateLabelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLabelGroup(
    input: CreateLabelGroupRequest,
  ): Effect.Effect<
    CreateLabelGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createModel(
    input: CreateModelRequest,
  ): Effect.Effect<
    CreateModelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRetrainingScheduler(
    input: CreateRetrainingSchedulerRequest,
  ): Effect.Effect<
    CreateRetrainingSchedulerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInferenceScheduler(
    input: DeleteInferenceSchedulerRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLabel(
    input: DeleteLabelRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLabelGroup(
    input: DeleteLabelGroupRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteModel(
    input: DeleteModelRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRetrainingScheduler(
    input: DeleteRetrainingSchedulerRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDataIngestionJob(
    input: DescribeDataIngestionJobRequest,
  ): Effect.Effect<
    DescribeDataIngestionJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeInferenceScheduler(
    input: DescribeInferenceSchedulerRequest,
  ): Effect.Effect<
    DescribeInferenceSchedulerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeLabel(
    input: DescribeLabelRequest,
  ): Effect.Effect<
    DescribeLabelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeLabelGroup(
    input: DescribeLabelGroupRequest,
  ): Effect.Effect<
    DescribeLabelGroupResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeModel(
    input: DescribeModelRequest,
  ): Effect.Effect<
    DescribeModelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeModelVersion(
    input: DescribeModelVersionRequest,
  ): Effect.Effect<
    DescribeModelVersionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeResourcePolicy(
    input: DescribeResourcePolicyRequest,
  ): Effect.Effect<
    DescribeResourcePolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRetrainingScheduler(
    input: DescribeRetrainingSchedulerRequest,
  ): Effect.Effect<
    DescribeRetrainingSchedulerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  importDataset(
    input: ImportDatasetRequest,
  ): Effect.Effect<
    ImportDatasetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  importModelVersion(
    input: ImportModelVersionRequest,
  ): Effect.Effect<
    ImportModelVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDataIngestionJobs(
    input: ListDataIngestionJobsRequest,
  ): Effect.Effect<
    ListDataIngestionJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInferenceEvents(
    input: ListInferenceEventsRequest,
  ): Effect.Effect<
    ListInferenceEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInferenceExecutions(
    input: ListInferenceExecutionsRequest,
  ): Effect.Effect<
    ListInferenceExecutionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInferenceSchedulers(
    input: ListInferenceSchedulersRequest,
  ): Effect.Effect<
    ListInferenceSchedulersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLabelGroups(
    input: ListLabelGroupsRequest,
  ): Effect.Effect<
    ListLabelGroupsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLabels(
    input: ListLabelsRequest,
  ): Effect.Effect<
    ListLabelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModels(
    input: ListModelsRequest,
  ): Effect.Effect<
    ListModelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listModelVersions(
    input: ListModelVersionsRequest,
  ): Effect.Effect<
    ListModelVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRetrainingSchedulers(
    input: ListRetrainingSchedulersRequest,
  ): Effect.Effect<
    ListRetrainingSchedulersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSensorStatistics(
    input: ListSensorStatisticsRequest,
  ): Effect.Effect<
    ListSensorStatisticsResponse,
    | AccessDeniedException
    | InternalServerException
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startDataIngestionJob(
    input: StartDataIngestionJobRequest,
  ): Effect.Effect<
    StartDataIngestionJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startInferenceScheduler(
    input: StartInferenceSchedulerRequest,
  ): Effect.Effect<
    StartInferenceSchedulerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startRetrainingScheduler(
    input: StartRetrainingSchedulerRequest,
  ): Effect.Effect<
    StartRetrainingSchedulerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopInferenceScheduler(
    input: StopInferenceSchedulerRequest,
  ): Effect.Effect<
    StopInferenceSchedulerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopRetrainingScheduler(
    input: StopRetrainingSchedulerRequest,
  ): Effect.Effect<
    StopRetrainingSchedulerResponse,
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
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateActiveModelVersion(
    input: UpdateActiveModelVersionRequest,
  ): Effect.Effect<
    UpdateActiveModelVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateInferenceScheduler(
    input: UpdateInferenceSchedulerRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateLabelGroup(
    input: UpdateLabelGroupRequest,
  ): Effect.Effect<
    {},
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
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRetrainingScheduler(
    input: UpdateRetrainingSchedulerRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Lookoutequipment = AWSLookoutEquipmentFrontendService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AmazonResourceArn = string;

export type AutoPromotionResult =
  | "MODEL_PROMOTED"
  | "MODEL_NOT_PROMOTED"
  | "RETRAINING_INTERNAL_ERROR"
  | "RETRAINING_CUSTOMER_ERROR"
  | "RETRAINING_CANCELLED";
export type AutoPromotionResultReason = string;

export type BoundedLengthString = string;

export interface CategoricalValues {
  Status: StatisticalIssueStatus;
  NumberOfCategory?: number;
}
export type Comments = string;

export type ComponentName = string;

export type ComponentTimestampDelimiter = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface CountPercent {
  Count: number;
  Percentage: number;
}
export interface CreateDatasetRequest {
  DatasetName: string;
  DatasetSchema?: DatasetSchema;
  ServerSideKmsKeyId?: string;
  ClientToken: string;
  Tags?: Array<Tag>;
}
export interface CreateDatasetResponse {
  DatasetName?: string;
  DatasetArn?: string;
  Status?: DatasetStatus;
}
export interface CreateInferenceSchedulerRequest {
  ModelName: string;
  InferenceSchedulerName: string;
  DataDelayOffsetInMinutes?: number;
  DataUploadFrequency: DataUploadFrequency;
  DataInputConfiguration: InferenceInputConfiguration;
  DataOutputConfiguration: InferenceOutputConfiguration;
  RoleArn: string;
  ServerSideKmsKeyId?: string;
  ClientToken: string;
  Tags?: Array<Tag>;
}
export interface CreateInferenceSchedulerResponse {
  InferenceSchedulerArn?: string;
  InferenceSchedulerName?: string;
  Status?: InferenceSchedulerStatus;
  ModelQuality?: ModelQuality;
}
export interface CreateLabelGroupRequest {
  LabelGroupName: string;
  FaultCodes?: Array<string>;
  ClientToken: string;
  Tags?: Array<Tag>;
}
export interface CreateLabelGroupResponse {
  LabelGroupName?: string;
  LabelGroupArn?: string;
}
export interface CreateLabelRequest {
  LabelGroupName: string;
  StartTime: Date | string;
  EndTime: Date | string;
  Rating: LabelRating;
  FaultCode?: string;
  Notes?: string;
  Equipment?: string;
  ClientToken: string;
}
export interface CreateLabelResponse {
  LabelId?: string;
}
export interface CreateModelRequest {
  ModelName: string;
  DatasetName: string;
  DatasetSchema?: DatasetSchema;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  ClientToken: string;
  TrainingDataStartTime?: Date | string;
  TrainingDataEndTime?: Date | string;
  EvaluationDataStartTime?: Date | string;
  EvaluationDataEndTime?: Date | string;
  RoleArn?: string;
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
  ServerSideKmsKeyId?: string;
  Tags?: Array<Tag>;
  OffCondition?: string;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
}
export interface CreateModelResponse {
  ModelArn?: string;
  Status?: ModelStatus;
}
export interface CreateRetrainingSchedulerRequest {
  ModelName: string;
  RetrainingStartDate?: Date | string;
  RetrainingFrequency: string;
  LookbackWindow: string;
  PromoteMode?: ModelPromoteMode;
  ClientToken: string;
}
export interface CreateRetrainingSchedulerResponse {
  ModelName?: string;
  ModelArn?: string;
  Status?: RetrainingSchedulerStatus;
}
export type DataDelayOffsetInMinutes = number;

export type DataIngestionJobSummaries = Array<DataIngestionJobSummary>;
export interface DataIngestionJobSummary {
  JobId?: string;
  DatasetName?: string;
  DatasetArn?: string;
  IngestionInputConfiguration?: IngestionInputConfiguration;
  Status?: IngestionJobStatus;
}
export interface DataPreProcessingConfiguration {
  TargetSamplingRate?: TargetSamplingRate;
}
export interface DataQualitySummary {
  InsufficientSensorData: InsufficientSensorData;
  MissingSensorData: MissingSensorData;
  InvalidSensorData: InvalidSensorData;
  UnsupportedTimestamps: UnsupportedTimestamps;
  DuplicateTimestamps: DuplicateTimestamps;
}
export type DatasetArn = string;

export type DatasetIdentifier = string;

export type DatasetName = string;

export interface DatasetSchema {
  InlineDataSchema?: string;
}
export type DatasetStatus =
  | "CREATED"
  | "INGESTION_IN_PROGRESS"
  | "ACTIVE"
  | "IMPORT_IN_PROGRESS";
export type DatasetSummaries = Array<DatasetSummary>;
export interface DatasetSummary {
  DatasetName?: string;
  DatasetArn?: string;
  Status?: DatasetStatus;
  CreatedAt?: Date | string;
}
export type DataSizeInBytes = number;

export type DataUploadFrequency = "PT5M" | "PT10M" | "PT15M" | "PT30M" | "PT1H";
export interface DeleteDatasetRequest {
  DatasetName: string;
}
export interface DeleteInferenceSchedulerRequest {
  InferenceSchedulerName: string;
}
export interface DeleteLabelGroupRequest {
  LabelGroupName: string;
}
export interface DeleteLabelRequest {
  LabelGroupName: string;
  LabelId: string;
}
export interface DeleteModelRequest {
  ModelName: string;
}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteRetrainingSchedulerRequest {
  ModelName: string;
}
export interface DescribeDataIngestionJobRequest {
  JobId: string;
}
export interface DescribeDataIngestionJobResponse {
  JobId?: string;
  DatasetArn?: string;
  IngestionInputConfiguration?: IngestionInputConfiguration;
  RoleArn?: string;
  CreatedAt?: Date | string;
  Status?: IngestionJobStatus;
  FailedReason?: string;
  DataQualitySummary?: DataQualitySummary;
  IngestedFilesSummary?: IngestedFilesSummary;
  StatusDetail?: string;
  IngestedDataSize?: number;
  DataStartTime?: Date | string;
  DataEndTime?: Date | string;
  SourceDatasetArn?: string;
}
export interface DescribeDatasetRequest {
  DatasetName: string;
}
export interface DescribeDatasetResponse {
  DatasetName?: string;
  DatasetArn?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Status?: DatasetStatus;
  Schema?: string;
  ServerSideKmsKeyId?: string;
  IngestionInputConfiguration?: IngestionInputConfiguration;
  DataQualitySummary?: DataQualitySummary;
  IngestedFilesSummary?: IngestedFilesSummary;
  RoleArn?: string;
  DataStartTime?: Date | string;
  DataEndTime?: Date | string;
  SourceDatasetArn?: string;
}
export interface DescribeInferenceSchedulerRequest {
  InferenceSchedulerName: string;
}
export interface DescribeInferenceSchedulerResponse {
  ModelArn?: string;
  ModelName?: string;
  InferenceSchedulerName?: string;
  InferenceSchedulerArn?: string;
  Status?: InferenceSchedulerStatus;
  DataDelayOffsetInMinutes?: number;
  DataUploadFrequency?: DataUploadFrequency;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  DataInputConfiguration?: InferenceInputConfiguration;
  DataOutputConfiguration?: InferenceOutputConfiguration;
  RoleArn?: string;
  ServerSideKmsKeyId?: string;
  LatestInferenceResult?: LatestInferenceResult;
}
export interface DescribeLabelGroupRequest {
  LabelGroupName: string;
}
export interface DescribeLabelGroupResponse {
  LabelGroupName?: string;
  LabelGroupArn?: string;
  FaultCodes?: Array<string>;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface DescribeLabelRequest {
  LabelGroupName: string;
  LabelId: string;
}
export interface DescribeLabelResponse {
  LabelGroupName?: string;
  LabelGroupArn?: string;
  LabelId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Rating?: LabelRating;
  FaultCode?: string;
  Notes?: string;
  Equipment?: string;
  CreatedAt?: Date | string;
}
export interface DescribeModelRequest {
  ModelName: string;
}
export interface DescribeModelResponse {
  ModelName?: string;
  ModelArn?: string;
  DatasetName?: string;
  DatasetArn?: string;
  Schema?: string;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  TrainingDataStartTime?: Date | string;
  TrainingDataEndTime?: Date | string;
  EvaluationDataStartTime?: Date | string;
  EvaluationDataEndTime?: Date | string;
  RoleArn?: string;
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
  Status?: ModelStatus;
  TrainingExecutionStartTime?: Date | string;
  TrainingExecutionEndTime?: Date | string;
  FailedReason?: string;
  ModelMetrics?: string;
  LastUpdatedTime?: Date | string;
  CreatedAt?: Date | string;
  ServerSideKmsKeyId?: string;
  OffCondition?: string;
  SourceModelVersionArn?: string;
  ImportJobStartTime?: Date | string;
  ImportJobEndTime?: Date | string;
  ActiveModelVersion?: number;
  ActiveModelVersionArn?: string;
  ModelVersionActivatedAt?: Date | string;
  PreviousActiveModelVersion?: number;
  PreviousActiveModelVersionArn?: string;
  PreviousModelVersionActivatedAt?: Date | string;
  PriorModelMetrics?: string;
  LatestScheduledRetrainingFailedReason?: string;
  LatestScheduledRetrainingStatus?: ModelVersionStatus;
  LatestScheduledRetrainingModelVersion?: number;
  LatestScheduledRetrainingStartTime?: Date | string;
  LatestScheduledRetrainingAvailableDataInDays?: number;
  NextScheduledRetrainingStartDate?: Date | string;
  AccumulatedInferenceDataStartTime?: Date | string;
  AccumulatedInferenceDataEndTime?: Date | string;
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
  ModelQuality?: ModelQuality;
}
export interface DescribeModelVersionRequest {
  ModelName: string;
  ModelVersion: number;
}
export interface DescribeModelVersionResponse {
  ModelName?: string;
  ModelArn?: string;
  ModelVersion?: number;
  ModelVersionArn?: string;
  Status?: ModelVersionStatus;
  SourceType?: ModelVersionSourceType;
  DatasetName?: string;
  DatasetArn?: string;
  Schema?: string;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  TrainingDataStartTime?: Date | string;
  TrainingDataEndTime?: Date | string;
  EvaluationDataStartTime?: Date | string;
  EvaluationDataEndTime?: Date | string;
  RoleArn?: string;
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
  TrainingExecutionStartTime?: Date | string;
  TrainingExecutionEndTime?: Date | string;
  FailedReason?: string;
  ModelMetrics?: string;
  LastUpdatedTime?: Date | string;
  CreatedAt?: Date | string;
  ServerSideKmsKeyId?: string;
  OffCondition?: string;
  SourceModelVersionArn?: string;
  ImportJobStartTime?: Date | string;
  ImportJobEndTime?: Date | string;
  ImportedDataSizeInBytes?: number;
  PriorModelMetrics?: string;
  RetrainingAvailableDataInDays?: number;
  AutoPromotionResult?: AutoPromotionResult;
  AutoPromotionResultReason?: string;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
  ModelDiagnosticsResultsObject?: S3Object;
  ModelQuality?: ModelQuality;
}
export interface DescribeResourcePolicyRequest {
  ResourceArn: string;
}
export interface DescribeResourcePolicyResponse {
  PolicyRevisionId?: string;
  ResourcePolicy?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface DescribeRetrainingSchedulerRequest {
  ModelName: string;
}
export interface DescribeRetrainingSchedulerResponse {
  ModelName?: string;
  ModelArn?: string;
  RetrainingStartDate?: Date | string;
  RetrainingFrequency?: string;
  LookbackWindow?: string;
  Status?: RetrainingSchedulerStatus;
  PromoteMode?: ModelPromoteMode;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface DuplicateTimestamps {
  TotalNumberOfDuplicateTimestamps: number;
}
export type Equipment = string;

export type EventDurationInSeconds = number;

export type FaultCode = string;

export type FaultCodes = Array<string>;
export type FileNameTimestampFormat = string;

export type Float = number;

export type IamRoleArn = string;

export type IdempotenceToken = string;

export interface ImportDatasetRequest {
  SourceDatasetArn: string;
  DatasetName?: string;
  ClientToken: string;
  ServerSideKmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface ImportDatasetResponse {
  DatasetName?: string;
  DatasetArn?: string;
  Status?: DatasetStatus;
  JobId?: string;
}
export interface ImportModelVersionRequest {
  SourceModelVersionArn: string;
  ModelName?: string;
  DatasetName: string;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  ClientToken: string;
  RoleArn?: string;
  ServerSideKmsKeyId?: string;
  Tags?: Array<Tag>;
  InferenceDataImportStrategy?: InferenceDataImportStrategy;
}
export interface ImportModelVersionResponse {
  ModelName?: string;
  ModelArn?: string;
  ModelVersionArn?: string;
  ModelVersion?: number;
  Status?: ModelVersionStatus;
}
export type InferenceDataImportStrategy =
  | "NO_IMPORT"
  | "ADD_WHEN_EMPTY"
  | "OVERWRITE";
export type InferenceEventSummaries = Array<InferenceEventSummary>;
export interface InferenceEventSummary {
  InferenceSchedulerArn?: string;
  InferenceSchedulerName?: string;
  EventStartTime?: Date | string;
  EventEndTime?: Date | string;
  Diagnostics?: string;
  EventDurationInSeconds?: number;
}
export type InferenceExecutionStatus = "IN_PROGRESS" | "SUCCESS" | "FAILED";
export type InferenceExecutionSummaries = Array<InferenceExecutionSummary>;
export interface InferenceExecutionSummary {
  ModelName?: string;
  ModelArn?: string;
  InferenceSchedulerName?: string;
  InferenceSchedulerArn?: string;
  ScheduledStartTime?: Date | string;
  DataStartTime?: Date | string;
  DataEndTime?: Date | string;
  DataInputConfiguration?: InferenceInputConfiguration;
  DataOutputConfiguration?: InferenceOutputConfiguration;
  CustomerResultObject?: S3Object;
  Status?: InferenceExecutionStatus;
  FailedReason?: string;
  ModelVersion?: number;
  ModelVersionArn?: string;
}
export interface InferenceInputConfiguration {
  S3InputConfiguration?: InferenceS3InputConfiguration;
  InputTimeZoneOffset?: string;
  InferenceInputNameConfiguration?: InferenceInputNameConfiguration;
}
export interface InferenceInputNameConfiguration {
  TimestampFormat?: string;
  ComponentTimestampDelimiter?: string;
}
export interface InferenceOutputConfiguration {
  S3OutputConfiguration: InferenceS3OutputConfiguration;
  KmsKeyId?: string;
}
export interface InferenceS3InputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export interface InferenceS3OutputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export type InferenceSchedulerArn = string;

export type InferenceSchedulerIdentifier = string;

export type InferenceSchedulerName = string;

export type InferenceSchedulerStatus =
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED";
export type InferenceSchedulerSummaries = Array<InferenceSchedulerSummary>;
export interface InferenceSchedulerSummary {
  ModelName?: string;
  ModelArn?: string;
  InferenceSchedulerName?: string;
  InferenceSchedulerArn?: string;
  Status?: InferenceSchedulerStatus;
  DataDelayOffsetInMinutes?: number;
  DataUploadFrequency?: DataUploadFrequency;
  LatestInferenceResult?: LatestInferenceResult;
}
export interface IngestedFilesSummary {
  TotalNumberOfFiles: number;
  IngestedNumberOfFiles: number;
  DiscardedFiles?: Array<S3Object>;
}
export interface IngestionInputConfiguration {
  S3InputConfiguration: IngestionS3InputConfiguration;
}
export type IngestionJobId = string;

export type IngestionJobStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "IMPORT_IN_PROGRESS";
export interface IngestionS3InputConfiguration {
  Bucket: string;
  Prefix?: string;
  KeyPattern?: string;
}
export type InlineDataSchema = string;

export interface InsufficientSensorData {
  MissingCompleteSensorData: MissingCompleteSensorData;
  SensorsWithShortDateRange: SensorsWithShortDateRange;
}
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface InvalidSensorData {
  AffectedSensorCount: number;
  TotalNumberOfInvalidValues: number;
}
export type KeyPattern = string;

export type KmsKeyArn = string;

export type LabelGroupArn = string;

export type LabelGroupName = string;

export type LabelGroupSummaries = Array<LabelGroupSummary>;
export interface LabelGroupSummary {
  LabelGroupName?: string;
  LabelGroupArn?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type LabelId = string;

export type LabelRating = "ANOMALY" | "NO_ANOMALY" | "NEUTRAL";
export interface LabelsInputConfiguration {
  S3InputConfiguration?: LabelsS3InputConfiguration;
  LabelGroupName?: string;
}
export interface LabelsS3InputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export type LabelSummaries = Array<LabelSummary>;
export interface LabelSummary {
  LabelGroupName?: string;
  LabelId?: string;
  LabelGroupArn?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Rating?: LabelRating;
  FaultCode?: string;
  Equipment?: string;
  CreatedAt?: Date | string;
}
export interface LargeTimestampGaps {
  Status: StatisticalIssueStatus;
  NumberOfLargeTimestampGaps?: number;
  MaxTimestampGapInDays?: number;
}
export type LatestInferenceResult = "ANOMALOUS" | "NORMAL";
export interface ListDataIngestionJobsRequest {
  DatasetName?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: IngestionJobStatus;
}
export interface ListDataIngestionJobsResponse {
  NextToken?: string;
  DataIngestionJobSummaries?: Array<DataIngestionJobSummary>;
}
export interface ListDatasetsRequest {
  NextToken?: string;
  MaxResults?: number;
  DatasetNameBeginsWith?: string;
}
export interface ListDatasetsResponse {
  NextToken?: string;
  DatasetSummaries?: Array<DatasetSummary>;
}
export interface ListInferenceEventsRequest {
  NextToken?: string;
  MaxResults?: number;
  InferenceSchedulerName: string;
  IntervalStartTime: Date | string;
  IntervalEndTime: Date | string;
}
export interface ListInferenceEventsResponse {
  NextToken?: string;
  InferenceEventSummaries?: Array<InferenceEventSummary>;
}
export interface ListInferenceExecutionsRequest {
  NextToken?: string;
  MaxResults?: number;
  InferenceSchedulerName: string;
  DataStartTimeAfter?: Date | string;
  DataEndTimeBefore?: Date | string;
  Status?: InferenceExecutionStatus;
}
export interface ListInferenceExecutionsResponse {
  NextToken?: string;
  InferenceExecutionSummaries?: Array<InferenceExecutionSummary>;
}
export interface ListInferenceSchedulersRequest {
  NextToken?: string;
  MaxResults?: number;
  InferenceSchedulerNameBeginsWith?: string;
  ModelName?: string;
  Status?: InferenceSchedulerStatus;
}
export interface ListInferenceSchedulersResponse {
  NextToken?: string;
  InferenceSchedulerSummaries?: Array<InferenceSchedulerSummary>;
}
export interface ListLabelGroupsRequest {
  LabelGroupNameBeginsWith?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLabelGroupsResponse {
  NextToken?: string;
  LabelGroupSummaries?: Array<LabelGroupSummary>;
}
export interface ListLabelsRequest {
  LabelGroupName: string;
  IntervalStartTime?: Date | string;
  IntervalEndTime?: Date | string;
  FaultCode?: string;
  Equipment?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLabelsResponse {
  NextToken?: string;
  LabelSummaries?: Array<LabelSummary>;
}
export interface ListModelsRequest {
  NextToken?: string;
  MaxResults?: number;
  Status?: ModelStatus;
  ModelNameBeginsWith?: string;
  DatasetNameBeginsWith?: string;
}
export interface ListModelsResponse {
  NextToken?: string;
  ModelSummaries?: Array<ModelSummary>;
}
export interface ListModelVersionsRequest {
  ModelName: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ModelVersionStatus;
  SourceType?: ModelVersionSourceType;
  CreatedAtEndTime?: Date | string;
  CreatedAtStartTime?: Date | string;
  MaxModelVersion?: number;
  MinModelVersion?: number;
}
export interface ListModelVersionsResponse {
  NextToken?: string;
  ModelVersionSummaries?: Array<ModelVersionSummary>;
}
export type ListOfDiscardedFiles = Array<S3Object>;
export interface ListRetrainingSchedulersRequest {
  ModelNameBeginsWith?: string;
  Status?: RetrainingSchedulerStatus;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRetrainingSchedulersResponse {
  RetrainingSchedulerSummaries?: Array<RetrainingSchedulerSummary>;
  NextToken?: string;
}
export interface ListSensorStatisticsRequest {
  DatasetName: string;
  IngestionJobId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSensorStatisticsResponse {
  SensorStatisticsSummaries?: Array<SensorStatisticsSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type LookbackWindow = string;

export type MaxResults = number;

export interface MissingCompleteSensorData {
  AffectedSensorCount: number;
}
export interface MissingSensorData {
  AffectedSensorCount: number;
  TotalNumberOfMissingValues: number;
}
export type ModelArn = string;

export interface ModelDiagnosticsOutputConfiguration {
  S3OutputConfiguration: ModelDiagnosticsS3OutputConfiguration;
  KmsKeyId?: string;
}
export interface ModelDiagnosticsS3OutputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export type ModelMetrics = string;

export type ModelName = string;

export type ModelPromoteMode = "MANAGED" | "MANUAL";
export type ModelQuality =
  | "QUALITY_THRESHOLD_MET"
  | "CANNOT_DETERMINE_QUALITY"
  | "POOR_QUALITY_DETECTED";
export type ModelStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "IMPORT_IN_PROGRESS";
export type ModelSummaries = Array<ModelSummary>;
export interface ModelSummary {
  ModelName?: string;
  ModelArn?: string;
  DatasetName?: string;
  DatasetArn?: string;
  Status?: ModelStatus;
  CreatedAt?: Date | string;
  ActiveModelVersion?: number;
  ActiveModelVersionArn?: string;
  LatestScheduledRetrainingStatus?: ModelVersionStatus;
  LatestScheduledRetrainingModelVersion?: number;
  LatestScheduledRetrainingStartTime?: Date | string;
  NextScheduledRetrainingStartDate?: Date | string;
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
  ModelQuality?: ModelQuality;
}
export type ModelVersion = number;

export type ModelVersionArn = string;

export type ModelVersionSourceType = "TRAINING" | "RETRAINING" | "IMPORT";
export type ModelVersionStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "IMPORT_IN_PROGRESS"
  | "CANCELED";
export type ModelVersionSummaries = Array<ModelVersionSummary>;
export interface ModelVersionSummary {
  ModelName?: string;
  ModelArn?: string;
  ModelVersion?: number;
  ModelVersionArn?: string;
  CreatedAt?: Date | string;
  Status?: ModelVersionStatus;
  SourceType?: ModelVersionSourceType;
  ModelQuality?: ModelQuality;
}
export type Monotonicity = "DECREASING" | "INCREASING" | "STATIC";
export interface MonotonicValues {
  Status: StatisticalIssueStatus;
  Monotonicity?: Monotonicity;
}
export interface MultipleOperatingModes {
  Status: StatisticalIssueStatus;
}
export type NameOrArn = string;

export type NextToken = string;

export type OffCondition = string;

export type Policy = string;

export type PolicyRevisionId = string;

export interface PutResourcePolicyRequest {
  ResourceArn: string;
  ResourcePolicy: string;
  PolicyRevisionId?: string;
  ClientToken: string;
}
export interface PutResourcePolicyResponse {
  ResourceArn?: string;
  PolicyRevisionId?: string;
}
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
}> {}
export type RetrainingFrequency = string;

export type RetrainingSchedulerStatus =
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED";
export type RetrainingSchedulerSummaries = Array<RetrainingSchedulerSummary>;
export interface RetrainingSchedulerSummary {
  ModelName?: string;
  ModelArn?: string;
  Status?: RetrainingSchedulerStatus;
  RetrainingStartDate?: Date | string;
  RetrainingFrequency?: string;
  LookbackWindow?: string;
}
export type S3Bucket = string;

export type S3Key = string;

export interface S3Object {
  Bucket: string;
  Key: string;
}
export type S3Prefix = string;

export type SensorName = string;

export type SensorStatisticsSummaries = Array<SensorStatisticsSummary>;
export interface SensorStatisticsSummary {
  ComponentName?: string;
  SensorName?: string;
  DataExists?: boolean;
  MissingValues?: CountPercent;
  InvalidValues?: CountPercent;
  InvalidDateEntries?: CountPercent;
  DuplicateTimestamps?: CountPercent;
  CategoricalValues?: CategoricalValues;
  MultipleOperatingModes?: MultipleOperatingModes;
  LargeTimestampGaps?: LargeTimestampGaps;
  MonotonicValues?: MonotonicValues;
  DataStartTime?: Date | string;
  DataEndTime?: Date | string;
}
export interface SensorsWithShortDateRange {
  AffectedSensorCount: number;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export interface StartDataIngestionJobRequest {
  DatasetName: string;
  IngestionInputConfiguration: IngestionInputConfiguration;
  RoleArn: string;
  ClientToken: string;
}
export interface StartDataIngestionJobResponse {
  JobId?: string;
  Status?: IngestionJobStatus;
}
export interface StartInferenceSchedulerRequest {
  InferenceSchedulerName: string;
}
export interface StartInferenceSchedulerResponse {
  ModelArn?: string;
  ModelName?: string;
  InferenceSchedulerName?: string;
  InferenceSchedulerArn?: string;
  Status?: InferenceSchedulerStatus;
}
export interface StartRetrainingSchedulerRequest {
  ModelName: string;
}
export interface StartRetrainingSchedulerResponse {
  ModelName?: string;
  ModelArn?: string;
  Status?: RetrainingSchedulerStatus;
}
export type StatisticalIssueStatus =
  | "POTENTIAL_ISSUE_DETECTED"
  | "NO_ISSUE_DETECTED";
export interface StopInferenceSchedulerRequest {
  InferenceSchedulerName: string;
}
export interface StopInferenceSchedulerResponse {
  ModelArn?: string;
  ModelName?: string;
  InferenceSchedulerName?: string;
  InferenceSchedulerArn?: string;
  Status?: InferenceSchedulerStatus;
}
export interface StopRetrainingSchedulerRequest {
  ModelName: string;
}
export interface StopRetrainingSchedulerResponse {
  ModelName?: string;
  ModelArn?: string;
  Status?: RetrainingSchedulerStatus;
}
export type SynthesizedJsonInlineDataSchema = string;

export type SynthesizedJsonModelMetrics = string;

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

export type TargetSamplingRate =
  | "PT1S"
  | "PT5S"
  | "PT10S"
  | "PT15S"
  | "PT30S"
  | "PT1M"
  | "PT5M"
  | "PT10M"
  | "PT15M"
  | "PT30M"
  | "PT1H";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type Timestamp = Date | string;

export type TimeZoneOffset = string;

export interface UnsupportedTimestamps {
  TotalNumberOfUnsupportedTimestamps: number;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateActiveModelVersionRequest {
  ModelName: string;
  ModelVersion: number;
}
export interface UpdateActiveModelVersionResponse {
  ModelName?: string;
  ModelArn?: string;
  CurrentActiveVersion?: number;
  PreviousActiveVersion?: number;
  CurrentActiveVersionArn?: string;
  PreviousActiveVersionArn?: string;
}
export interface UpdateInferenceSchedulerRequest {
  InferenceSchedulerName: string;
  DataDelayOffsetInMinutes?: number;
  DataUploadFrequency?: DataUploadFrequency;
  DataInputConfiguration?: InferenceInputConfiguration;
  DataOutputConfiguration?: InferenceOutputConfiguration;
  RoleArn?: string;
}
export interface UpdateLabelGroupRequest {
  LabelGroupName: string;
  FaultCodes?: Array<string>;
}
export interface UpdateModelRequest {
  ModelName: string;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  RoleArn?: string;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
}
export interface UpdateRetrainingSchedulerRequest {
  ModelName: string;
  RetrainingStartDate?: Date | string;
  RetrainingFrequency?: string;
  LookbackWindow?: string;
  PromoteMode?: ModelPromoteMode;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInferenceScheduler {
  export type Input = CreateInferenceSchedulerRequest;
  export type Output = CreateInferenceSchedulerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLabel {
  export type Input = CreateLabelRequest;
  export type Output = CreateLabelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLabelGroup {
  export type Input = CreateLabelGroupRequest;
  export type Output = CreateLabelGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateModel {
  export type Input = CreateModelRequest;
  export type Output = CreateModelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRetrainingScheduler {
  export type Input = CreateRetrainingSchedulerRequest;
  export type Output = CreateRetrainingSchedulerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInferenceScheduler {
  export type Input = DeleteInferenceSchedulerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLabel {
  export type Input = DeleteLabelRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLabelGroup {
  export type Input = DeleteLabelGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteModel {
  export type Input = DeleteModelRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRetrainingScheduler {
  export type Input = DeleteRetrainingSchedulerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDataIngestionJob {
  export type Input = DescribeDataIngestionJobRequest;
  export type Output = DescribeDataIngestionJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInferenceScheduler {
  export type Input = DescribeInferenceSchedulerRequest;
  export type Output = DescribeInferenceSchedulerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLabel {
  export type Input = DescribeLabelRequest;
  export type Output = DescribeLabelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLabelGroup {
  export type Input = DescribeLabelGroupRequest;
  export type Output = DescribeLabelGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeModel {
  export type Input = DescribeModelRequest;
  export type Output = DescribeModelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeModelVersion {
  export type Input = DescribeModelVersionRequest;
  export type Output = DescribeModelVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeResourcePolicy {
  export type Input = DescribeResourcePolicyRequest;
  export type Output = DescribeResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRetrainingScheduler {
  export type Input = DescribeRetrainingSchedulerRequest;
  export type Output = DescribeRetrainingSchedulerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportDataset {
  export type Input = ImportDatasetRequest;
  export type Output = ImportDatasetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportModelVersion {
  export type Input = ImportModelVersionRequest;
  export type Output = ImportModelVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataIngestionJobs {
  export type Input = ListDataIngestionJobsRequest;
  export type Output = ListDataIngestionJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInferenceEvents {
  export type Input = ListInferenceEventsRequest;
  export type Output = ListInferenceEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInferenceExecutions {
  export type Input = ListInferenceExecutionsRequest;
  export type Output = ListInferenceExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInferenceSchedulers {
  export type Input = ListInferenceSchedulersRequest;
  export type Output = ListInferenceSchedulersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLabelGroups {
  export type Input = ListLabelGroupsRequest;
  export type Output = ListLabelGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLabels {
  export type Input = ListLabelsRequest;
  export type Output = ListLabelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModels {
  export type Input = ListModelsRequest;
  export type Output = ListModelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelVersions {
  export type Input = ListModelVersionsRequest;
  export type Output = ListModelVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRetrainingSchedulers {
  export type Input = ListRetrainingSchedulersRequest;
  export type Output = ListRetrainingSchedulersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSensorStatistics {
  export type Input = ListSensorStatisticsRequest;
  export type Output = ListSensorStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDataIngestionJob {
  export type Input = StartDataIngestionJobRequest;
  export type Output = StartDataIngestionJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartInferenceScheduler {
  export type Input = StartInferenceSchedulerRequest;
  export type Output = StartInferenceSchedulerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartRetrainingScheduler {
  export type Input = StartRetrainingSchedulerRequest;
  export type Output = StartRetrainingSchedulerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopInferenceScheduler {
  export type Input = StopInferenceSchedulerRequest;
  export type Output = StopInferenceSchedulerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopRetrainingScheduler {
  export type Input = StopRetrainingSchedulerRequest;
  export type Output = StopRetrainingSchedulerResponse;
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
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateActiveModelVersion {
  export type Input = UpdateActiveModelVersionRequest;
  export type Output = UpdateActiveModelVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInferenceScheduler {
  export type Input = UpdateInferenceSchedulerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLabelGroup {
  export type Input = UpdateLabelGroupRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRetrainingScheduler {
  export type Input = UpdateRetrainingSchedulerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
