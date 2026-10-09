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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "LookoutEquipment",
  serviceShapeName: "AWSLookoutEquipmentFrontendService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "lookoutequipment" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-12-15");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://lookoutequipment-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://lookoutequipment-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://lookoutequipment.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://lookoutequipment.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DatasetName = string;
export type SynthesizedJsonInlineDataSchema = string;
export interface DatasetSchema {
  InlineDataSchema?: string;
}
export type NameOrArn = string;
export type IdempotenceToken = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateDatasetRequest {
  DatasetName: string;
  DatasetSchema?: DatasetSchema;
  ServerSideKmsKeyId?: string;
  ClientToken: string;
  Tags?: Tag[];
}
export type DatasetArn = string;
export type DatasetStatus =
  | "CREATED"
  | "INGESTION_IN_PROGRESS"
  | "ACTIVE"
  | "IMPORT_IN_PROGRESS"
  | (string & {});
export interface CreateDatasetResponse {
  DatasetName?: string;
  DatasetArn?: string;
  Status?: DatasetStatus;
}
export type ModelName = string;
export type InferenceSchedulerName = string;
export type DataDelayOffsetInMinutes = number;
export type DataUploadFrequency = "PT5M" | "PT10M" | "PT15M" | "PT30M" | "PT1H" | (string & {});
export type S3Bucket = string;
export type S3Prefix = string;
export interface InferenceS3InputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export type TimeZoneOffset = string;
export type FileNameTimestampFormat = string;
export type ComponentTimestampDelimiter = string;
export interface InferenceInputNameConfiguration {
  TimestampFormat?: string;
  ComponentTimestampDelimiter?: string;
}
export interface InferenceInputConfiguration {
  S3InputConfiguration?: InferenceS3InputConfiguration;
  InputTimeZoneOffset?: string;
  InferenceInputNameConfiguration?: InferenceInputNameConfiguration;
}
export interface InferenceS3OutputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export interface InferenceOutputConfiguration {
  S3OutputConfiguration: InferenceS3OutputConfiguration;
  KmsKeyId?: string;
}
export type IamRoleArn = string;
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
  Tags?: Tag[];
}
export type InferenceSchedulerArn = string;
export type InferenceSchedulerStatus =
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | (string & {});
export type ModelQuality =
  | "QUALITY_THRESHOLD_MET"
  | "CANNOT_DETERMINE_QUALITY"
  | "POOR_QUALITY_DETECTED"
  | (string & {});
export interface CreateInferenceSchedulerResponse {
  InferenceSchedulerArn?: string;
  InferenceSchedulerName?: string;
  Status?: InferenceSchedulerStatus;
  ModelQuality?: ModelQuality;
}
export type LabelGroupName = string;
export type LabelRating = "ANOMALY" | "NO_ANOMALY" | "NEUTRAL" | (string & {});
export type FaultCode = string;
export type Comments = string;
export type Equipment = string;
export interface CreateLabelRequest {
  LabelGroupName: string;
  StartTime: Date;
  EndTime: Date;
  Rating: LabelRating;
  FaultCode?: string;
  Notes?: string;
  Equipment?: string;
  ClientToken: string;
}
export type LabelId = string;
export interface CreateLabelResponse {
  LabelId?: string;
}
export type FaultCodes = string[];
export interface CreateLabelGroupRequest {
  LabelGroupName: string;
  FaultCodes?: string[];
  ClientToken: string;
  Tags?: Tag[];
}
export type LabelGroupArn = string;
export interface CreateLabelGroupResponse {
  LabelGroupName?: string;
  LabelGroupArn?: string;
}
export type DatasetIdentifier = string;
export interface LabelsS3InputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export interface LabelsInputConfiguration {
  S3InputConfiguration?: LabelsS3InputConfiguration;
  LabelGroupName?: string;
}
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
  | "PT1H"
  | (string & {});
export interface DataPreProcessingConfiguration {
  TargetSamplingRate?: TargetSamplingRate;
}
export type OffCondition = string;
export interface ModelDiagnosticsS3OutputConfiguration {
  Bucket: string;
  Prefix?: string;
}
export interface ModelDiagnosticsOutputConfiguration {
  S3OutputConfiguration: ModelDiagnosticsS3OutputConfiguration;
  KmsKeyId?: string;
}
export interface CreateModelRequest {
  ModelName: string;
  DatasetName: string;
  DatasetSchema?: DatasetSchema;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  ClientToken: string;
  TrainingDataStartTime?: Date;
  TrainingDataEndTime?: Date;
  EvaluationDataStartTime?: Date;
  EvaluationDataEndTime?: Date;
  RoleArn?: string;
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
  ServerSideKmsKeyId?: string;
  Tags?: Tag[];
  OffCondition?: string;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
}
export type ModelArn = string;
export type ModelStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "IMPORT_IN_PROGRESS"
  | (string & {});
export interface CreateModelResponse {
  ModelArn?: string;
  Status?: ModelStatus;
}
export type RetrainingFrequency = string;
export type LookbackWindow = string;
export type ModelPromoteMode = "MANAGED" | "MANUAL" | (string & {});
export interface CreateRetrainingSchedulerRequest {
  ModelName: string;
  RetrainingStartDate?: Date;
  RetrainingFrequency: string;
  LookbackWindow: string;
  PromoteMode?: ModelPromoteMode;
  ClientToken: string;
}
export type RetrainingSchedulerStatus =
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | (string & {});
export interface CreateRetrainingSchedulerResponse {
  ModelName?: string;
  ModelArn?: string;
  Status?: RetrainingSchedulerStatus;
}
export interface DeleteDatasetRequest {
  DatasetName: string;
}
export interface DeleteDatasetResponse {}
export type InferenceSchedulerIdentifier = string;
export interface DeleteInferenceSchedulerRequest {
  InferenceSchedulerName: string;
}
export interface DeleteInferenceSchedulerResponse {}
export interface DeleteLabelRequest {
  LabelGroupName: string;
  LabelId: string;
}
export interface DeleteLabelResponse {}
export interface DeleteLabelGroupRequest {
  LabelGroupName: string;
}
export interface DeleteLabelGroupResponse {}
export interface DeleteModelRequest {
  ModelName: string;
}
export interface DeleteModelResponse {}
export type ResourceArn = string;
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteRetrainingSchedulerRequest {
  ModelName: string;
}
export interface DeleteRetrainingSchedulerResponse {}
export type IngestionJobId = string;
export interface DescribeDataIngestionJobRequest {
  JobId: string;
}
export type KeyPattern = string;
export interface IngestionS3InputConfiguration {
  Bucket: string;
  Prefix?: string;
  KeyPattern?: string;
}
export interface IngestionInputConfiguration {
  S3InputConfiguration: IngestionS3InputConfiguration;
}
export type IngestionJobStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "IMPORT_IN_PROGRESS"
  | (string & {});
export type BoundedLengthString = string;
export interface MissingCompleteSensorData {
  AffectedSensorCount: number;
}
export interface SensorsWithShortDateRange {
  AffectedSensorCount: number;
}
export interface InsufficientSensorData {
  MissingCompleteSensorData: MissingCompleteSensorData;
  SensorsWithShortDateRange: SensorsWithShortDateRange;
}
export interface MissingSensorData {
  AffectedSensorCount: number;
  TotalNumberOfMissingValues: number;
}
export interface InvalidSensorData {
  AffectedSensorCount: number;
  TotalNumberOfInvalidValues: number;
}
export interface UnsupportedTimestamps {
  TotalNumberOfUnsupportedTimestamps: number;
}
export interface DuplicateTimestamps {
  TotalNumberOfDuplicateTimestamps: number;
}
export interface DataQualitySummary {
  InsufficientSensorData: InsufficientSensorData;
  MissingSensorData: MissingSensorData;
  InvalidSensorData: InvalidSensorData;
  UnsupportedTimestamps: UnsupportedTimestamps;
  DuplicateTimestamps: DuplicateTimestamps;
}
export type S3Key = string;
export interface S3Object {
  Bucket: string;
  Key: string;
}
export type ListOfDiscardedFiles = S3Object[];
export interface IngestedFilesSummary {
  TotalNumberOfFiles: number;
  IngestedNumberOfFiles: number;
  DiscardedFiles?: S3Object[];
}
export type DataSizeInBytes = number;
export interface DescribeDataIngestionJobResponse {
  JobId?: string;
  DatasetArn?: string;
  IngestionInputConfiguration?: IngestionInputConfiguration;
  RoleArn?: string;
  CreatedAt?: Date;
  Status?: IngestionJobStatus;
  FailedReason?: string;
  DataQualitySummary?: DataQualitySummary;
  IngestedFilesSummary?: IngestedFilesSummary;
  StatusDetail?: string;
  IngestedDataSize?: number;
  DataStartTime?: Date;
  DataEndTime?: Date;
  SourceDatasetArn?: string;
}
export interface DescribeDatasetRequest {
  DatasetName: string;
}
export type KmsKeyArn = string;
export interface DescribeDatasetResponse {
  DatasetName?: string;
  DatasetArn?: string;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Status?: DatasetStatus;
  Schema?: string;
  ServerSideKmsKeyId?: string;
  IngestionInputConfiguration?: IngestionInputConfiguration;
  DataQualitySummary?: DataQualitySummary;
  IngestedFilesSummary?: IngestedFilesSummary;
  RoleArn?: string;
  DataStartTime?: Date;
  DataEndTime?: Date;
  SourceDatasetArn?: string;
}
export interface DescribeInferenceSchedulerRequest {
  InferenceSchedulerName: string;
}
export type LatestInferenceResult = "ANOMALOUS" | "NORMAL" | (string & {});
export interface DescribeInferenceSchedulerResponse {
  ModelArn?: string;
  ModelName?: string;
  InferenceSchedulerName?: string;
  InferenceSchedulerArn?: string;
  Status?: InferenceSchedulerStatus;
  DataDelayOffsetInMinutes?: number;
  DataUploadFrequency?: DataUploadFrequency;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DataInputConfiguration?: InferenceInputConfiguration;
  DataOutputConfiguration?: InferenceOutputConfiguration;
  RoleArn?: string;
  ServerSideKmsKeyId?: string;
  LatestInferenceResult?: LatestInferenceResult;
}
export interface DescribeLabelRequest {
  LabelGroupName: string;
  LabelId: string;
}
export interface DescribeLabelResponse {
  LabelGroupName?: string;
  LabelGroupArn?: string;
  LabelId?: string;
  StartTime?: Date;
  EndTime?: Date;
  Rating?: LabelRating;
  FaultCode?: string;
  Notes?: string;
  Equipment?: string;
  CreatedAt?: Date;
}
export interface DescribeLabelGroupRequest {
  LabelGroupName: string;
}
export interface DescribeLabelGroupResponse {
  LabelGroupName?: string;
  LabelGroupArn?: string;
  FaultCodes?: string[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface DescribeModelRequest {
  ModelName: string;
}
export type SynthesizedJsonModelMetrics = string;
export type ModelVersionArn = string;
export type ModelVersion = number;
export type ModelVersionStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "IMPORT_IN_PROGRESS"
  | "CANCELED"
  | (string & {});
export interface DescribeModelResponse {
  ModelName?: string;
  ModelArn?: string;
  DatasetName?: string;
  DatasetArn?: string;
  Schema?: string;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  TrainingDataStartTime?: Date;
  TrainingDataEndTime?: Date;
  EvaluationDataStartTime?: Date;
  EvaluationDataEndTime?: Date;
  RoleArn?: string;
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
  Status?: ModelStatus;
  TrainingExecutionStartTime?: Date;
  TrainingExecutionEndTime?: Date;
  FailedReason?: string;
  ModelMetrics?: string;
  LastUpdatedTime?: Date;
  CreatedAt?: Date;
  ServerSideKmsKeyId?: string;
  OffCondition?: string;
  SourceModelVersionArn?: string;
  ImportJobStartTime?: Date;
  ImportJobEndTime?: Date;
  ActiveModelVersion?: number;
  ActiveModelVersionArn?: string;
  ModelVersionActivatedAt?: Date;
  PreviousActiveModelVersion?: number;
  PreviousActiveModelVersionArn?: string;
  PreviousModelVersionActivatedAt?: Date;
  PriorModelMetrics?: string;
  LatestScheduledRetrainingFailedReason?: string;
  LatestScheduledRetrainingStatus?: ModelVersionStatus;
  LatestScheduledRetrainingModelVersion?: number;
  LatestScheduledRetrainingStartTime?: Date;
  LatestScheduledRetrainingAvailableDataInDays?: number;
  NextScheduledRetrainingStartDate?: Date;
  AccumulatedInferenceDataStartTime?: Date;
  AccumulatedInferenceDataEndTime?: Date;
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
  ModelQuality?: ModelQuality;
}
export interface DescribeModelVersionRequest {
  ModelName: string;
  ModelVersion: number;
}
export type ModelVersionSourceType = "TRAINING" | "RETRAINING" | "IMPORT" | (string & {});
export type InlineDataSchema = string;
export type ModelMetrics = string;
export type AutoPromotionResult =
  | "MODEL_PROMOTED"
  | "MODEL_NOT_PROMOTED"
  | "RETRAINING_INTERNAL_ERROR"
  | "RETRAINING_CUSTOMER_ERROR"
  | "RETRAINING_CANCELLED"
  | (string & {});
export type AutoPromotionResultReason = string;
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
  TrainingDataStartTime?: Date;
  TrainingDataEndTime?: Date;
  EvaluationDataStartTime?: Date;
  EvaluationDataEndTime?: Date;
  RoleArn?: string;
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
  TrainingExecutionStartTime?: Date;
  TrainingExecutionEndTime?: Date;
  FailedReason?: string;
  ModelMetrics?: string;
  LastUpdatedTime?: Date;
  CreatedAt?: Date;
  ServerSideKmsKeyId?: string;
  OffCondition?: string;
  SourceModelVersionArn?: string;
  ImportJobStartTime?: Date;
  ImportJobEndTime?: Date;
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
export type PolicyRevisionId = string;
export type Policy = string;
export interface DescribeResourcePolicyResponse {
  PolicyRevisionId?: string;
  ResourcePolicy?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface DescribeRetrainingSchedulerRequest {
  ModelName: string;
}
export interface DescribeRetrainingSchedulerResponse {
  ModelName?: string;
  ModelArn?: string;
  RetrainingStartDate?: Date;
  RetrainingFrequency?: string;
  LookbackWindow?: string;
  Status?: RetrainingSchedulerStatus;
  PromoteMode?: ModelPromoteMode;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface ImportDatasetRequest {
  SourceDatasetArn: string;
  DatasetName?: string;
  ClientToken: string;
  ServerSideKmsKeyId?: string;
  Tags?: Tag[];
}
export interface ImportDatasetResponse {
  DatasetName?: string;
  DatasetArn?: string;
  Status?: DatasetStatus;
  JobId?: string;
}
export type InferenceDataImportStrategy =
  | "NO_IMPORT"
  | "ADD_WHEN_EMPTY"
  | "OVERWRITE"
  | (string & {});
export interface ImportModelVersionRequest {
  SourceModelVersionArn: string;
  ModelName?: string;
  DatasetName: string;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  ClientToken: string;
  RoleArn?: string;
  ServerSideKmsKeyId?: string;
  Tags?: Tag[];
  InferenceDataImportStrategy?: InferenceDataImportStrategy;
}
export interface ImportModelVersionResponse {
  ModelName?: string;
  ModelArn?: string;
  ModelVersionArn?: string;
  ModelVersion?: number;
  Status?: ModelVersionStatus;
}
export type NextToken = string;
export type MaxResults = number;
export interface ListDataIngestionJobsRequest {
  DatasetName?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: IngestionJobStatus;
}
export interface DataIngestionJobSummary {
  JobId?: string;
  DatasetName?: string;
  DatasetArn?: string;
  IngestionInputConfiguration?: IngestionInputConfiguration;
  Status?: IngestionJobStatus;
}
export type DataIngestionJobSummaries = DataIngestionJobSummary[];
export interface ListDataIngestionJobsResponse {
  NextToken?: string;
  DataIngestionJobSummaries?: DataIngestionJobSummary[];
}
export interface ListDatasetsRequest {
  NextToken?: string;
  MaxResults?: number;
  DatasetNameBeginsWith?: string;
}
export interface DatasetSummary {
  DatasetName?: string;
  DatasetArn?: string;
  Status?: DatasetStatus;
  CreatedAt?: Date;
}
export type DatasetSummaries = DatasetSummary[];
export interface ListDatasetsResponse {
  NextToken?: string;
  DatasetSummaries?: DatasetSummary[];
}
export interface ListInferenceEventsRequest {
  NextToken?: string;
  MaxResults?: number;
  InferenceSchedulerName: string;
  IntervalStartTime: Date;
  IntervalEndTime: Date;
}
export type EventDurationInSeconds = number;
export interface InferenceEventSummary {
  InferenceSchedulerArn?: string;
  InferenceSchedulerName?: string;
  EventStartTime?: Date;
  EventEndTime?: Date;
  Diagnostics?: string;
  EventDurationInSeconds?: number;
}
export type InferenceEventSummaries = InferenceEventSummary[];
export interface ListInferenceEventsResponse {
  NextToken?: string;
  InferenceEventSummaries?: InferenceEventSummary[];
}
export type InferenceExecutionStatus = "IN_PROGRESS" | "SUCCESS" | "FAILED" | (string & {});
export interface ListInferenceExecutionsRequest {
  NextToken?: string;
  MaxResults?: number;
  InferenceSchedulerName: string;
  DataStartTimeAfter?: Date;
  DataEndTimeBefore?: Date;
  Status?: InferenceExecutionStatus;
}
export interface InferenceExecutionSummary {
  ModelName?: string;
  ModelArn?: string;
  InferenceSchedulerName?: string;
  InferenceSchedulerArn?: string;
  ScheduledStartTime?: Date;
  DataStartTime?: Date;
  DataEndTime?: Date;
  DataInputConfiguration?: InferenceInputConfiguration;
  DataOutputConfiguration?: InferenceOutputConfiguration;
  CustomerResultObject?: S3Object;
  Status?: InferenceExecutionStatus;
  FailedReason?: string;
  ModelVersion?: number;
  ModelVersionArn?: string;
}
export type InferenceExecutionSummaries = InferenceExecutionSummary[];
export interface ListInferenceExecutionsResponse {
  NextToken?: string;
  InferenceExecutionSummaries?: InferenceExecutionSummary[];
}
export interface ListInferenceSchedulersRequest {
  NextToken?: string;
  MaxResults?: number;
  InferenceSchedulerNameBeginsWith?: string;
  ModelName?: string;
  Status?: InferenceSchedulerStatus;
}
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
export type InferenceSchedulerSummaries = InferenceSchedulerSummary[];
export interface ListInferenceSchedulersResponse {
  NextToken?: string;
  InferenceSchedulerSummaries?: InferenceSchedulerSummary[];
}
export interface ListLabelGroupsRequest {
  LabelGroupNameBeginsWith?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface LabelGroupSummary {
  LabelGroupName?: string;
  LabelGroupArn?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type LabelGroupSummaries = LabelGroupSummary[];
export interface ListLabelGroupsResponse {
  NextToken?: string;
  LabelGroupSummaries?: LabelGroupSummary[];
}
export interface ListLabelsRequest {
  LabelGroupName: string;
  IntervalStartTime?: Date;
  IntervalEndTime?: Date;
  FaultCode?: string;
  Equipment?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface LabelSummary {
  LabelGroupName?: string;
  LabelId?: string;
  LabelGroupArn?: string;
  StartTime?: Date;
  EndTime?: Date;
  Rating?: LabelRating;
  FaultCode?: string;
  Equipment?: string;
  CreatedAt?: Date;
}
export type LabelSummaries = LabelSummary[];
export interface ListLabelsResponse {
  NextToken?: string;
  LabelSummaries?: LabelSummary[];
}
export interface ListModelsRequest {
  NextToken?: string;
  MaxResults?: number;
  Status?: ModelStatus;
  ModelNameBeginsWith?: string;
  DatasetNameBeginsWith?: string;
}
export interface ModelSummary {
  ModelName?: string;
  ModelArn?: string;
  DatasetName?: string;
  DatasetArn?: string;
  Status?: ModelStatus;
  CreatedAt?: Date;
  ActiveModelVersion?: number;
  ActiveModelVersionArn?: string;
  LatestScheduledRetrainingStatus?: ModelVersionStatus;
  LatestScheduledRetrainingModelVersion?: number;
  LatestScheduledRetrainingStartTime?: Date;
  NextScheduledRetrainingStartDate?: Date;
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
  ModelQuality?: ModelQuality;
}
export type ModelSummaries = ModelSummary[];
export interface ListModelsResponse {
  NextToken?: string;
  ModelSummaries?: ModelSummary[];
}
export interface ListModelVersionsRequest {
  ModelName: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ModelVersionStatus;
  SourceType?: ModelVersionSourceType;
  CreatedAtEndTime?: Date;
  CreatedAtStartTime?: Date;
  MaxModelVersion?: number;
  MinModelVersion?: number;
}
export interface ModelVersionSummary {
  ModelName?: string;
  ModelArn?: string;
  ModelVersion?: number;
  ModelVersionArn?: string;
  CreatedAt?: Date;
  Status?: ModelVersionStatus;
  SourceType?: ModelVersionSourceType;
  ModelQuality?: ModelQuality;
}
export type ModelVersionSummaries = ModelVersionSummary[];
export interface ListModelVersionsResponse {
  NextToken?: string;
  ModelVersionSummaries?: ModelVersionSummary[];
}
export interface ListRetrainingSchedulersRequest {
  ModelNameBeginsWith?: string;
  Status?: RetrainingSchedulerStatus;
  NextToken?: string;
  MaxResults?: number;
}
export interface RetrainingSchedulerSummary {
  ModelName?: string;
  ModelArn?: string;
  Status?: RetrainingSchedulerStatus;
  RetrainingStartDate?: Date;
  RetrainingFrequency?: string;
  LookbackWindow?: string;
}
export type RetrainingSchedulerSummaries = RetrainingSchedulerSummary[];
export interface ListRetrainingSchedulersResponse {
  RetrainingSchedulerSummaries?: RetrainingSchedulerSummary[];
  NextToken?: string;
}
export interface ListSensorStatisticsRequest {
  DatasetName: string;
  IngestionJobId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ComponentName = string;
export type SensorName = string;
export interface CountPercent {
  Count: number;
  Percentage: number;
}
export type StatisticalIssueStatus =
  | "POTENTIAL_ISSUE_DETECTED"
  | "NO_ISSUE_DETECTED"
  | (string & {});
export interface CategoricalValues {
  Status: StatisticalIssueStatus;
  NumberOfCategory?: number;
}
export interface MultipleOperatingModes {
  Status: StatisticalIssueStatus;
}
export interface LargeTimestampGaps {
  Status: StatisticalIssueStatus;
  NumberOfLargeTimestampGaps?: number;
  MaxTimestampGapInDays?: number;
}
export type Monotonicity = "DECREASING" | "INCREASING" | "STATIC" | (string & {});
export interface MonotonicValues {
  Status: StatisticalIssueStatus;
  Monotonicity?: Monotonicity;
}
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
  DataStartTime?: Date;
  DataEndTime?: Date;
}
export type SensorStatisticsSummaries = SensorStatisticsSummary[];
export interface ListSensorStatisticsResponse {
  SensorStatisticsSummaries?: SensorStatisticsSummary[];
  NextToken?: string;
}
export type AmazonResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
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
export interface UpdateInferenceSchedulerResponse {}
export interface UpdateLabelGroupRequest {
  LabelGroupName: string;
  FaultCodes?: string[];
}
export interface UpdateLabelGroupResponse {}
export interface UpdateModelRequest {
  ModelName: string;
  LabelsInputConfiguration?: LabelsInputConfiguration;
  RoleArn?: string;
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration;
}
export interface UpdateModelResponse {}
export interface UpdateRetrainingSchedulerRequest {
  ModelName: string;
  RetrainingStartDate?: Date;
  RetrainingFrequency?: string;
  LookbackWindow?: string;
  PromoteMode?: ModelPromoteMode;
}
export interface UpdateRetrainingSchedulerResponse {}
export type CreateDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a container for a collection of data being ingested for analysis. The dataset
 * contains the metadata describing where the data is and what the data actually looks like.
 * For example, it contains the location of the data source, the data schema, and other
 * information. A dataset also contains any tags associated with the ingested data.
 */
export const createDataset: API.OperationMethod<
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<CreateDatasetRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<CreateDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataset",
}));

export type CreateInferenceSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scheduled inference. Scheduling an inference is setting up a continuous
 * real-time inference plan to analyze new measurement data. When setting up the schedule, you
 * provide an S3 bucket location for the input data, assign it a delimiter between separate
 * entries in the data, set an offset delay if desired, and set the frequency of inferencing.
 * You must also provide an S3 bucket location for the output data.
 */
export const createInferenceScheduler: API.OperationMethod<
  CreateInferenceSchedulerRequest,
  CreateInferenceSchedulerResponse,
  CreateInferenceSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<CreateInferenceSchedulerRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<CreateInferenceSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInferenceScheduler",
}));

export type CreateLabelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a label for an event.
 */
export const createLabel: API.OperationMethod<
  CreateLabelRequest,
  CreateLabelResponse,
  CreateLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<CreateLabelRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<CreateLabelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLabel",
}));

export type CreateLabelGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a group of labels.
 */
export const createLabelGroup: API.OperationMethod<
  CreateLabelGroupRequest,
  CreateLabelGroupResponse,
  CreateLabelGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<CreateLabelGroupRequest>,
  output: __S(15, __c1, 7) as any as S.Schema<CreateLabelGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLabelGroup",
}));

export type CreateModelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a machine learning model for data inference.
 *
 * A machine-learning (ML) model is a mathematical model that finds patterns in your data.
 * In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
 * behavior that could be potential equipment failure (or maintenance events). The models are
 * made by analyzing normal data and abnormalities in machine behavior that have already
 * occurred.
 *
 * Your model is trained using a portion of the data from your dataset and uses that data
 * to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
 * Another portion of the data is used to evaluate the model's accuracy.
 */
export const createModel: API.OperationMethod<
  CreateModelRequest,
  CreateModelResponse,
  CreateModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<CreateModelRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<CreateModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateModel",
}));

export type CreateRetrainingSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a retraining scheduler on the specified model.
 */
export const createRetrainingScheduler: API.OperationMethod<
  CreateRetrainingSchedulerRequest,
  CreateRetrainingSchedulerResponse,
  CreateRetrainingSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20, __c2, 4) as any as S.Schema<CreateRetrainingSchedulerRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<CreateRetrainingSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRetrainingScheduler",
}));

export type DeleteDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a dataset and associated artifacts. The operation will check to see if any
 * inference scheduler or data ingestion job is currently using the dataset, and if there
 * isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted.
 * This does not affect any models that used this dataset for training and evaluation, but
 * does prevent it from being used in the future.
 */
export const deleteDataset: API.OperationMethod<
  DeleteDatasetRequest,
  DeleteDatasetResponse,
  DeleteDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<DeleteDatasetRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<DeleteDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataset",
}));

export type DeleteInferenceSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an inference scheduler that has been set up. Prior inference results will not be
 * deleted.
 */
export const deleteInferenceScheduler: API.OperationMethod<
  DeleteInferenceSchedulerRequest,
  DeleteInferenceSchedulerResponse,
  DeleteInferenceSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<DeleteInferenceSchedulerRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<DeleteInferenceSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInferenceScheduler",
}));

export type DeleteLabelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a label.
 */
export const deleteLabel: API.OperationMethod<
  DeleteLabelRequest,
  DeleteLabelResponse,
  DeleteLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<DeleteLabelRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<DeleteLabelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLabel",
}));

export type DeleteLabelGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a group of labels.
 */
export const deleteLabelGroup: API.OperationMethod<
  DeleteLabelGroupRequest,
  DeleteLabelGroupResponse,
  DeleteLabelGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<DeleteLabelGroupRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<DeleteLabelGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLabelGroup",
}));

export type DeleteModelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a machine learning model currently available for Amazon Lookout for Equipment. This will prevent it
 * from being used with an inference scheduler, even one that is already set up.
 */
export const deleteModel: API.OperationMethod<
  DeleteModelRequest,
  DeleteModelResponse,
  DeleteModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<DeleteModelRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<DeleteModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteModel",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the resource policy attached to the resource.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29, __c3, 5) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteRetrainingSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a retraining scheduler from a model. The retraining scheduler must be in the
 * `STOPPED` status.
 */
export const deleteRetrainingScheduler: API.OperationMethod<
  DeleteRetrainingSchedulerRequest,
  DeleteRetrainingSchedulerResponse,
  DeleteRetrainingSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<DeleteRetrainingSchedulerRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<DeleteRetrainingSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRetrainingScheduler",
}));

export type DescribeDataIngestionJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides information on a specific data ingestion job such as creation time, dataset
 * ARN, and status.
 */
export const describeDataIngestionJob: API.OperationMethod<
  DescribeDataIngestionJobRequest,
  DescribeDataIngestionJobResponse,
  DescribeDataIngestionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<DescribeDataIngestionJobRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<DescribeDataIngestionJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataIngestionJob",
}));

export type DescribeDatasetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides a JSON description of the data in each time series dataset, including names,
 * column names, and data types.
 */
export const describeDataset: API.OperationMethod<
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<DescribeDatasetRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<DescribeDatasetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataset",
}));

export type DescribeInferenceSchedulerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Specifies information about the inference scheduler being used, including name, model,
 * status, and associated metadata
 */
export const describeInferenceScheduler: API.OperationMethod<
  DescribeInferenceSchedulerRequest,
  DescribeInferenceSchedulerResponse,
  DescribeInferenceSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<DescribeInferenceSchedulerRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<DescribeInferenceSchedulerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInferenceScheduler",
}));

export type DescribeLabelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the name of the label.
 */
export const describeLabel: API.OperationMethod<
  DescribeLabelRequest,
  DescribeLabelResponse,
  DescribeLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<DescribeLabelRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<DescribeLabelResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLabel",
}));

export type DescribeLabelGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the label group.
 */
export const describeLabelGroup: API.OperationMethod<
  DescribeLabelGroupRequest,
  DescribeLabelGroupResponse,
  DescribeLabelGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<DescribeLabelGroupRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<DescribeLabelGroupResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLabelGroup",
}));

export type DescribeModelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides a JSON containing the overall information about a specific machine learning
 * model, including model name and ARN, dataset, training and evaluation information, status,
 * and so on.
 */
export const describeModel: API.OperationMethod<
  DescribeModelRequest,
  DescribeModelResponse,
  DescribeModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<DescribeModelRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<DescribeModelResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeModel",
}));

export type DescribeModelVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific machine learning model version.
 */
export const describeModelVersion: API.OperationMethod<
  DescribeModelVersionRequest,
  DescribeModelVersionResponse,
  DescribeModelVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DescribeModelVersionRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<DescribeModelVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeModelVersion",
}));

export type DescribeResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the details of a resource policy attached to a resource.
 */
export const describeResourcePolicy: API.OperationMethod<
  DescribeResourcePolicyRequest,
  DescribeResourcePolicyResponse,
  DescribeResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<DescribeResourcePolicyRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<DescribeResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourcePolicy",
}));

export type DescribeRetrainingSchedulerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides a description of the retraining scheduler, including information such as the
 * model name and retraining parameters.
 */
export const describeRetrainingScheduler: API.OperationMethod<
  DescribeRetrainingSchedulerRequest,
  DescribeRetrainingSchedulerResponse,
  DescribeRetrainingSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<DescribeRetrainingSchedulerRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DescribeRetrainingSchedulerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRetrainingScheduler",
}));

export type ImportDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports a dataset.
 */
export const importDataset: API.OperationMethod<
  ImportDatasetRequest,
  ImportDatasetResponse,
  ImportDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<ImportDatasetRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<ImportDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportDataset",
}));

export type ImportModelVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports a model that has been trained successfully.
 */
export const importModelVersion: API.OperationMethod<
  ImportModelVersionRequest,
  ImportModelVersionResponse,
  ImportModelVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<ImportModelVersionRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<ImportModelVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportModelVersion",
}));

export type ListDataIngestionJobsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
 * of the input data, status, and so on.
 */
export const listDataIngestionJobs: API.PaginatedOperationMethod<
  ListDataIngestionJobsRequest,
  ListDataIngestionJobsResponse,
  ListDataIngestionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<ListDataIngestionJobsRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<ListDataIngestionJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataIngestionJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDatasetsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all datasets currently available in your account, filtering on the dataset name.
 */
export const listDatasets: API.PaginatedOperationMethod<
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDatasetsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<ListDatasetsRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<ListDatasetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
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

export type ListInferenceEventsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all inference events that have been found for the specified inference scheduler.
 */
export const listInferenceEvents: API.PaginatedOperationMethod<
  ListInferenceEventsRequest,
  ListInferenceEventsResponse,
  ListInferenceEventsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(73, __c9, 1) as any as S.Schema<ListInferenceEventsRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<ListInferenceEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInferenceEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInferenceExecutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all inference executions that have been performed by the specified inference
 * scheduler.
 */
export const listInferenceExecutions: API.PaginatedOperationMethod<
  ListInferenceExecutionsRequest,
  ListInferenceExecutionsResponse,
  ListInferenceExecutionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<ListInferenceExecutionsRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<ListInferenceExecutionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInferenceExecutions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInferenceSchedulersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all inference schedulers currently available for your account.
 */
export const listInferenceSchedulers: API.PaginatedOperationMethod<
  ListInferenceSchedulersRequest,
  ListInferenceSchedulersResponse,
  ListInferenceSchedulersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<ListInferenceSchedulersRequest>,
  output: __S(84, __c10, 4) as any as S.Schema<ListInferenceSchedulersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInferenceSchedulers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLabelGroupsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the label groups.
 */
export const listLabelGroups: API.PaginatedOperationMethod<
  ListLabelGroupsRequest,
  ListLabelGroupsResponse,
  ListLabelGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<ListLabelGroupsRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<ListLabelGroupsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLabelGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLabelsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides a list of labels.
 */
export const listLabels: API.PaginatedOperationMethod<
  ListLabelsRequest,
  ListLabelsResponse,
  ListLabelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<ListLabelsRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<ListLabelsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLabels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListModelsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Generates a list of all models in the account, including model name and ARN, dataset,
 * and status.
 */
export const listModels: API.PaginatedOperationMethod<
  ListModelsRequest,
  ListModelsResponse,
  ListModelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<ListModelsRequest>,
  output: __S(96, __c12, 0) as any as S.Schema<ListModelsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListModels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListModelVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Generates a list of all model versions for a given model, including the model version,
 * model version ARN, and status. To list a subset of versions, use the
 * `MaxModelVersion` and `MinModelVersion` fields.
 */
export const listModelVersions: API.PaginatedOperationMethod<
  ListModelVersionsRequest,
  ListModelVersionsResponse,
  ListModelVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<ListModelVersionsRequest>,
  output: __S(100, __c12, 4) as any as S.Schema<ListModelVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListModelVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRetrainingSchedulersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all retraining schedulers in your account, filtering by model name prefix and
 * status.
 */
export const listRetrainingSchedulers: API.PaginatedOperationMethod<
  ListRetrainingSchedulersRequest,
  ListRetrainingSchedulersResponse,
  ListRetrainingSchedulersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<ListRetrainingSchedulersRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<ListRetrainingSchedulersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRetrainingSchedulers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSensorStatisticsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists statistics about the data collected for each of the sensors that have been
 * successfully ingested in the particular dataset. Can also be used to retreive Sensor
 * Statistics for a previous ingestion job.
 */
export const listSensorStatistics: API.PaginatedOperationMethod<
  ListSensorStatisticsRequest,
  ListSensorStatisticsResponse,
  ListSensorStatisticsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<ListSensorStatisticsRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<ListSensorStatisticsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSensorStatistics",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the tags for a specified resource, including key and value.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a resource control policy for a given resource.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(117, __c14, 5) as any as S.Schema<PutResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type StartDataIngestionJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.
 */
export const startDataIngestionJob: API.OperationMethod<
  StartDataIngestionJobRequest,
  StartDataIngestionJobResponse,
  StartDataIngestionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<StartDataIngestionJobRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<StartDataIngestionJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDataIngestionJob",
}));

export type StartInferenceSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an inference scheduler.
 */
export const startInferenceScheduler: API.OperationMethod<
  StartInferenceSchedulerRequest,
  StartInferenceSchedulerResponse,
  StartInferenceSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<StartInferenceSchedulerRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<StartInferenceSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartInferenceScheduler",
}));

export type StartRetrainingSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a retraining scheduler.
 */
export const startRetrainingScheduler: API.OperationMethod<
  StartRetrainingSchedulerRequest,
  StartRetrainingSchedulerResponse,
  StartRetrainingSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<StartRetrainingSchedulerRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<StartRetrainingSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRetrainingScheduler",
}));

export type StopInferenceSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops an inference scheduler.
 */
export const stopInferenceScheduler: API.OperationMethod<
  StopInferenceSchedulerRequest,
  StopInferenceSchedulerResponse,
  StopInferenceSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<StopInferenceSchedulerRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<StopInferenceSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopInferenceScheduler",
}));

export type StopRetrainingSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a retraining scheduler.
 */
export const stopRetrainingScheduler: API.OperationMethod<
  StopRetrainingSchedulerRequest,
  StopRetrainingSchedulerResponse,
  StopRetrainingSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<StopRetrainingSchedulerRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<StopRetrainingSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRetrainingScheduler",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a given tag to a resource in your account. A tag is a key-value pair which
 * can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your
 * resources as well as helping you to search and filter by tag. Multiple tags can be added to
 * a resource, either when you create it, or later. Up to 50 tags can be associated with each
 * resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<TagResourceRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
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
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a specific tag from a given resource. The tag is specified by its key.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<UntagResourceRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateActiveModelVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets the active model version for a given machine learning model.
 */
export const updateActiveModelVersion: API.OperationMethod<
  UpdateActiveModelVersionRequest,
  UpdateActiveModelVersionResponse,
  UpdateActiveModelVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<UpdateActiveModelVersionRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<UpdateActiveModelVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateActiveModelVersion",
}));

export type UpdateInferenceSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an inference scheduler.
 */
export const updateInferenceScheduler: API.OperationMethod<
  UpdateInferenceSchedulerRequest,
  UpdateInferenceSchedulerResponse,
  UpdateInferenceSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<UpdateInferenceSchedulerRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<UpdateInferenceSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInferenceScheduler",
}));

export type UpdateLabelGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the label group.
 */
export const updateLabelGroup: API.OperationMethod<
  UpdateLabelGroupRequest,
  UpdateLabelGroupResponse,
  UpdateLabelGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<UpdateLabelGroupRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<UpdateLabelGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLabelGroup",
}));

export type UpdateModelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a model in the account.
 */
export const updateModel: API.OperationMethod<
  UpdateModelRequest,
  UpdateModelResponse,
  UpdateModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<UpdateModelRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<UpdateModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateModel",
}));

export type UpdateRetrainingSchedulerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a retraining scheduler.
 */
export const updateRetrainingScheduler: API.OperationMethod<
  UpdateRetrainingSchedulerRequest,
  UpdateRetrainingSchedulerResponse,
  UpdateRetrainingSchedulerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132, __c16, 4) as any as S.Schema<UpdateRetrainingSchedulerRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<UpdateRetrainingSchedulerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRetrainingScheduler",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ InlineDataSchema: S.optional(S.String) })).annotate({
        identifier: "DatasetSchema",
      });
    case 1:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(__S(1, __c0, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.String,
          DatasetSchema: S.optional(__S(0, __c0, 0)),
          ServerSideKmsKeyId: S.optional(S.String),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(2, __c0, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDatasetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateDatasetResponse" });
    case 5:
      return S.suspend(() => S.Struct({ Bucket: S.String, Prefix: S.optional(S.String) })).annotate(
        {
          identifier: "InferenceS3InputConfiguration",
        },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          TimestampFormat: S.optional(S.String),
          ComponentTimestampDelimiter: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InferenceInputNameConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          S3InputConfiguration: S.optional(__S(5, __c0, 5)),
          InputTimeZoneOffset: S.optional(S.String),
          InferenceInputNameConfiguration: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({
        identifier: "InferenceInputConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          S3OutputConfiguration: __S(5, __c0, 5),
          KmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InferenceOutputConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.String,
          InferenceSchedulerName: S.String,
          DataDelayOffsetInMinutes: S.optional(S.Number),
          DataUploadFrequency: S.String,
          DataInputConfiguration: __S(7, __c0, 7),
          DataOutputConfiguration: __S(8, __c1, 0),
          RoleArn: S.String,
          ServerSideKmsKeyId: S.optional(S.String),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(2, __c0, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateInferenceSchedulerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InferenceSchedulerArn: S.optional(S.String),
          InferenceSchedulerName: S.optional(S.String),
          Status: S.optional(S.String),
          ModelQuality: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateInferenceSchedulerResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LabelGroupName: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Rating: S.String,
          FaultCode: S.optional(S.String),
          Notes: S.optional(S.String),
          Equipment: S.optional(S.String),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLabelRequest" });
    case 4:
      return S.suspend(() => S.Struct({ LabelId: S.optional(S.String) })).annotate({
        identifier: "CreateLabelResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          LabelGroupName: S.String,
          FaultCodes: S.optional(__S(13, __c1, 5)),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(2, __c0, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLabelGroupRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ LabelGroupName: S.optional(S.String), LabelGroupArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateLabelGroupResponse" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          S3InputConfiguration: S.optional(__S(5, __c0, 5)),
          LabelGroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "LabelsInputConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ TargetSamplingRate: S.optional(S.String) })).annotate({
        identifier: "DataPreProcessingConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.String,
          DatasetName: S.String,
          DatasetSchema: S.optional(__S(0, __c0, 0)),
          LabelsInputConfiguration: S.optional(__S(16, __c2, 0)),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          TrainingDataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingDataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EvaluationDataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EvaluationDataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RoleArn: S.optional(S.String),
          DataPreProcessingConfiguration: S.optional(__S(17, __c2, 1)),
          ServerSideKmsKeyId: S.optional(S.String),
          Tags: S.optional(__S(2, __c0, 2)),
          OffCondition: S.optional(S.String),
          ModelDiagnosticsOutputConfiguration: S.optional(__S(8, __c1, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateModelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ModelArn: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "CreateModelResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.String,
          RetrainingStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RetrainingFrequency: S.String,
          LookbackWindow: S.String,
          PromoteMode: S.optional(S.String),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRetrainingSchedulerRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateRetrainingSchedulerResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DatasetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDatasetRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDatasetResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ InferenceSchedulerName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteInferenceSchedulerRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteInferenceSchedulerResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LabelGroupName: S.String, LabelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLabelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ LabelGroupName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLabelGroupRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteModelRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRetrainingSchedulerRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDataIngestionJobRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.String,
          Prefix: S.optional(S.String),
          KeyPattern: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IngestionS3InputConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ S3InputConfiguration: __S(32, __c4, 0) })).annotate({
        identifier: "IngestionInputConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ AffectedSensorCount: S.Number })).annotate({
        identifier: "MissingCompleteSensorData",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MissingCompleteSensorData: __S(34, __c4, 2),
          SensorsWithShortDateRange: __S(34, __c4, 2),
        }),
      ).annotate({ identifier: "InsufficientSensorData" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AffectedSensorCount: S.Number, TotalNumberOfMissingValues: S.Number }),
      ).annotate({ identifier: "MissingSensorData" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AffectedSensorCount: S.Number, TotalNumberOfInvalidValues: S.Number }),
      ).annotate({ identifier: "InvalidSensorData" });
    case 6:
      return S.suspend(() => S.Struct({ TotalNumberOfUnsupportedTimestamps: S.Number })).annotate({
        identifier: "UnsupportedTimestamps",
      });
    case 7:
      return S.suspend(() => S.Struct({ TotalNumberOfDuplicateTimestamps: S.Number })).annotate({
        identifier: "DuplicateTimestamps",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InsufficientSensorData: __S(35, __c4, 3),
          MissingSensorData: __S(36, __c4, 4),
          InvalidSensorData: __S(37, __c4, 5),
          UnsupportedTimestamps: __S(38, __c4, 6),
          DuplicateTimestamps: __S(39, __c4, 7),
        }),
      ).annotate({ identifier: "DataQualitySummary" });
    case 1:
      return S.suspend(() => S.Struct({ Bucket: S.String, Key: S.String })).annotate({
        identifier: "S3Object",
      });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          TotalNumberOfFiles: S.Number,
          IngestedNumberOfFiles: S.Number,
          DiscardedFiles: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({ identifier: "IngestedFilesSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          IngestionInputConfiguration: S.optional(__S(33, __c4, 1)),
          RoleArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          FailedReason: S.optional(S.String),
          DataQualitySummary: S.optional(__S(40, __c5, 0)),
          IngestedFilesSummary: S.optional(__S(43, __c5, 3)),
          StatusDetail: S.optional(S.String),
          IngestedDataSize: S.optional(S.Number),
          DataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SourceDatasetArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeDataIngestionJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DatasetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDatasetRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          Schema: S.optional(S.String),
          ServerSideKmsKeyId: S.optional(S.String),
          IngestionInputConfiguration: S.optional(__S(33, __c4, 1)),
          DataQualitySummary: S.optional(__S(40, __c5, 0)),
          IngestedFilesSummary: S.optional(__S(43, __c5, 3)),
          RoleArn: S.optional(S.String),
          DataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SourceDatasetArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeDatasetResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ InferenceSchedulerName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeInferenceSchedulerRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ModelArn: S.optional(S.String),
          ModelName: S.optional(S.String),
          InferenceSchedulerName: S.optional(S.String),
          InferenceSchedulerArn: S.optional(S.String),
          Status: S.optional(S.String),
          DataDelayOffsetInMinutes: S.optional(S.Number),
          DataUploadFrequency: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataInputConfiguration: S.optional(__S(7, __c0, 7)),
          DataOutputConfiguration: S.optional(__S(8, __c1, 0)),
          RoleArn: S.optional(S.String),
          ServerSideKmsKeyId: S.optional(S.String),
          LatestInferenceResult: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeInferenceSchedulerResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ LabelGroupName: S.String, LabelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeLabelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LabelGroupName: S.optional(S.String),
          LabelGroupArn: S.optional(S.String),
          LabelId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Rating: S.optional(S.String),
          FaultCode: S.optional(S.String),
          Notes: S.optional(S.String),
          Equipment: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DescribeLabelResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ LabelGroupName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLabelGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LabelGroupName: S.optional(S.String),
          LabelGroupArn: S.optional(S.String),
          FaultCodes: S.optional(__S(13, __c1, 5)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeLabelGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeModelRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          Schema: S.optional(S.String),
          LabelsInputConfiguration: S.optional(__S(16, __c2, 0)),
          TrainingDataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingDataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EvaluationDataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EvaluationDataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RoleArn: S.optional(S.String),
          DataPreProcessingConfiguration: S.optional(__S(17, __c2, 1)),
          Status: S.optional(S.String),
          TrainingExecutionStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingExecutionEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailedReason: S.optional(S.String),
          ModelMetrics: S.optional(S.String),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ServerSideKmsKeyId: S.optional(S.String),
          OffCondition: S.optional(S.String),
          SourceModelVersionArn: S.optional(S.String),
          ImportJobStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ImportJobEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ActiveModelVersion: S.optional(S.Number),
          ActiveModelVersionArn: S.optional(S.String),
          ModelVersionActivatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PreviousActiveModelVersion: S.optional(S.Number),
          PreviousActiveModelVersionArn: S.optional(S.String),
          PreviousModelVersionActivatedAt: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          PriorModelMetrics: S.optional(S.String),
          LatestScheduledRetrainingFailedReason: S.optional(S.String),
          LatestScheduledRetrainingStatus: S.optional(S.String),
          LatestScheduledRetrainingModelVersion: S.optional(S.Number),
          LatestScheduledRetrainingStartTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          LatestScheduledRetrainingAvailableDataInDays: S.optional(S.Number),
          NextScheduledRetrainingStartDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          AccumulatedInferenceDataStartTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          AccumulatedInferenceDataEndTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          RetrainingSchedulerStatus: S.optional(S.String),
          ModelDiagnosticsOutputConfiguration: S.optional(__S(8, __c1, 0)),
          ModelQuality: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeModelResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String, ModelVersion: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeModelVersionRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          ModelVersion: S.optional(S.Number),
          ModelVersionArn: S.optional(S.String),
          Status: S.optional(S.String),
          SourceType: S.optional(S.String),
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          Schema: S.optional(S.String),
          LabelsInputConfiguration: S.optional(__S(16, __c2, 0)),
          TrainingDataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingDataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EvaluationDataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EvaluationDataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RoleArn: S.optional(S.String),
          DataPreProcessingConfiguration: S.optional(__S(17, __c2, 1)),
          TrainingExecutionStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TrainingExecutionEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailedReason: S.optional(S.String),
          ModelMetrics: S.optional(S.String),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ServerSideKmsKeyId: S.optional(S.String),
          OffCondition: S.optional(S.String),
          SourceModelVersionArn: S.optional(S.String),
          ImportJobStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ImportJobEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ImportedDataSizeInBytes: S.optional(S.Number),
          PriorModelMetrics: S.optional(S.String),
          RetrainingAvailableDataInDays: S.optional(S.Number),
          AutoPromotionResult: S.optional(S.String),
          AutoPromotionResultReason: S.optional(S.String),
          ModelDiagnosticsOutputConfiguration: S.optional(__S(8, __c1, 0)),
          ModelDiagnosticsResultsObject: S.optional(__S(41, __c5, 1)),
          ModelQuality: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeModelVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeResourcePolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PolicyRevisionId: S.optional(S.String),
          ResourcePolicy: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeResourcePolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeRetrainingSchedulerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          RetrainingStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RetrainingFrequency: S.optional(S.String),
          LookbackWindow: S.optional(S.String),
          Status: S.optional(S.String),
          PromoteMode: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeRetrainingSchedulerResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceDatasetArn: S.String,
          DatasetName: S.optional(S.String),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          ServerSideKmsKeyId: S.optional(S.String),
          Tags: S.optional(__S(2, __c0, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportDatasetRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          Status: S.optional(S.String),
          JobId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportDatasetResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourceModelVersionArn: S.String,
          ModelName: S.optional(S.String),
          DatasetName: S.String,
          LabelsInputConfiguration: S.optional(__S(16, __c2, 0)),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          RoleArn: S.optional(S.String),
          ServerSideKmsKeyId: S.optional(S.String),
          Tags: S.optional(__S(2, __c0, 2)),
          InferenceDataImportStrategy: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ImportModelVersionRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          ModelVersionArn: S.optional(S.String),
          ModelVersion: S.optional(S.Number),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ImportModelVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Status: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDataIngestionJobsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          IngestionInputConfiguration: S.optional(__S(33, __c4, 1)),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataIngestionJobSummary" });
    case 3:
      return S.Array(__S(66, __c8, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          DataIngestionJobSummaries: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "ListDataIngestionJobsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          DatasetNameBeginsWith: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDatasetsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DatasetSummary" });
    case 7:
      return S.Array(__S(70, __c8, 6));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          DatasetSummaries: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({ identifier: "ListDatasetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          InferenceSchedulerName: S.String,
          IntervalStartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          IntervalEndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListInferenceEventsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InferenceSchedulerArn: S.optional(S.String),
          InferenceSchedulerName: S.optional(S.String),
          EventStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Diagnostics: S.optional(S.String),
          EventDurationInSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InferenceEventSummary" });
    case 3:
      return S.Array(__S(74, __c9, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          InferenceEventSummaries: S.optional(__S(75, __c9, 3)),
        }),
      ).annotate({
        identifier: "ListInferenceEventsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          InferenceSchedulerName: S.String,
          DataStartTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataEndTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListInferenceExecutionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          InferenceSchedulerName: S.optional(S.String),
          InferenceSchedulerArn: S.optional(S.String),
          ScheduledStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataInputConfiguration: S.optional(__S(7, __c0, 7)),
          DataOutputConfiguration: S.optional(__S(8, __c1, 0)),
          CustomerResultObject: S.optional(__S(41, __c5, 1)),
          Status: S.optional(S.String),
          FailedReason: S.optional(S.String),
          ModelVersion: S.optional(S.Number),
          ModelVersionArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InferenceExecutionSummary",
      });
    case 7:
      return S.Array(__S(78, __c9, 6));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          InferenceExecutionSummaries: S.optional(__S(79, __c9, 7)),
        }),
      ).annotate({
        identifier: "ListInferenceExecutionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          InferenceSchedulerNameBeginsWith: S.optional(S.String),
          ModelName: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListInferenceSchedulersRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          InferenceSchedulerName: S.optional(S.String),
          InferenceSchedulerArn: S.optional(S.String),
          Status: S.optional(S.String),
          DataDelayOffsetInMinutes: S.optional(S.Number),
          DataUploadFrequency: S.optional(S.String),
          LatestInferenceResult: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InferenceSchedulerSummary",
      });
    case 3:
      return S.Array(__S(82, __c10, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          InferenceSchedulerSummaries: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({
        identifier: "ListInferenceSchedulersResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LabelGroupNameBeginsWith: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLabelGroupsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LabelGroupName: S.optional(S.String),
          LabelGroupArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LabelGroupSummary" });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          LabelGroupSummaries: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({ identifier: "ListLabelGroupsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LabelGroupName: S.String,
          IntervalStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IntervalEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FaultCode: S.optional(S.String),
          Equipment: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLabelsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LabelGroupName: S.optional(S.String),
          LabelId: S.optional(S.String),
          LabelGroupArn: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Rating: S.optional(S.String),
          FaultCode: S.optional(S.String),
          Equipment: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LabelSummary" });
    case 3:
      return S.Array(__S(90, __c11, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          LabelSummaries: S.optional(__S(91, __c11, 3)),
        }),
      ).annotate({ identifier: "ListLabelsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Status: S.optional(S.String),
          ModelNameBeginsWith: S.optional(S.String),
          DatasetNameBeginsWith: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListModelsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          DatasetName: S.optional(S.String),
          DatasetArn: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ActiveModelVersion: S.optional(S.Number),
          ActiveModelVersionArn: S.optional(S.String),
          LatestScheduledRetrainingStatus: S.optional(S.String),
          LatestScheduledRetrainingModelVersion: S.optional(S.Number),
          LatestScheduledRetrainingStartTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          NextScheduledRetrainingStartDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          RetrainingSchedulerStatus: S.optional(S.String),
          ModelDiagnosticsOutputConfiguration: S.optional(__S(8, __c1, 0)),
          ModelQuality: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelSummary" });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ModelSummaries: S.optional(__S(95, __c11, 7)),
        }),
      ).annotate({ identifier: "ListModelsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Status: S.optional(S.String),
          SourceType: S.optional(S.String),
          CreatedAtEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedAtStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxModelVersion: S.optional(S.Number),
          MinModelVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListModelVersionsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          ModelVersion: S.optional(S.Number),
          ModelVersionArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          SourceType: S.optional(S.String),
          ModelQuality: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelVersionSummary" });
    case 3:
      return S.Array(__S(98, __c12, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ModelVersionSummaries: S.optional(__S(99, __c12, 3)),
        }),
      ).annotate({
        identifier: "ListModelVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ModelNameBeginsWith: S.optional(S.String),
          Status: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRetrainingSchedulersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          Status: S.optional(S.String),
          RetrainingStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RetrainingFrequency: S.optional(S.String),
          LookbackWindow: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RetrainingSchedulerSummary",
      });
    case 7:
      return S.Array(__S(102, __c12, 6));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RetrainingSchedulerSummaries: S.optional(__S(103, __c12, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRetrainingSchedulersResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.String,
          IngestionJobId: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSensorStatisticsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Count: S.Number, Percentage: S.Number })).annotate({
        identifier: "CountPercent",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Status: S.String, NumberOfCategory: S.optional(S.Number) }),
      ).annotate({ identifier: "CategoricalValues" });
    case 4:
      return S.suspend(() => S.Struct({ Status: S.String })).annotate({
        identifier: "MultipleOperatingModes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Status: S.String,
          NumberOfLargeTimestampGaps: S.optional(S.Number),
          MaxTimestampGapInDays: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LargeTimestampGaps" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Status: S.String, Monotonicity: S.optional(S.String) }),
      ).annotate({ identifier: "MonotonicValues" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ComponentName: S.optional(S.String),
          SensorName: S.optional(S.String),
          DataExists: S.optional(S.Boolean),
          MissingValues: S.optional(__S(106, __c13, 2)),
          InvalidValues: S.optional(__S(106, __c13, 2)),
          InvalidDateEntries: S.optional(__S(106, __c13, 2)),
          DuplicateTimestamps: S.optional(__S(106, __c13, 2)),
          CategoricalValues: S.optional(__S(107, __c13, 3)),
          MultipleOperatingModes: S.optional(__S(108, __c13, 4)),
          LargeTimestampGaps: S.optional(__S(109, __c13, 5)),
          MonotonicValues: S.optional(__S(110, __c13, 6)),
          DataStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SensorStatisticsSummary" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          SensorStatisticsSummaries: S.optional(__S(112, __c14, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSensorStatisticsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(2, __c0, 2)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          ResourcePolicy: S.String,
          PolicyRevisionId: S.optional(S.String),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), PolicyRevisionId: S.optional(S.String) }),
      ).annotate({
        identifier: "PutResourcePolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DatasetName: S.String,
          IngestionInputConfiguration: __S(33, __c4, 1),
          RoleArn: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartDataIngestionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ JobId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "StartDataIngestionJobResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ InferenceSchedulerName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartInferenceSchedulerRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ModelArn: S.optional(S.String),
          ModelName: S.optional(S.String),
          InferenceSchedulerName: S.optional(S.String),
          InferenceSchedulerArn: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartInferenceSchedulerResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartRetrainingSchedulerRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ InferenceSchedulerName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopInferenceSchedulerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopRetrainingSchedulerRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(2, __c0, 2) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(13, __c1, 5) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ModelName: S.String, ModelVersion: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateActiveModelVersionRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.optional(S.String),
          ModelArn: S.optional(S.String),
          CurrentActiveVersion: S.optional(S.Number),
          PreviousActiveVersion: S.optional(S.Number),
          CurrentActiveVersionArn: S.optional(S.String),
          PreviousActiveVersionArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateActiveModelVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InferenceSchedulerName: S.String,
          DataDelayOffsetInMinutes: S.optional(S.Number),
          DataUploadFrequency: S.optional(S.String),
          DataInputConfiguration: S.optional(__S(7, __c0, 7)),
          DataOutputConfiguration: S.optional(__S(8, __c1, 0)),
          RoleArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateInferenceSchedulerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LabelGroupName: S.String, FaultCodes: S.optional(__S(13, __c1, 5)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateLabelGroupRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.String,
          LabelsInputConfiguration: S.optional(__S(16, __c2, 0)),
          RoleArn: S.optional(S.String),
          ModelDiagnosticsOutputConfiguration: S.optional(__S(8, __c1, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateModelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ModelName: S.String,
          RetrainingStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RetrainingFrequency: S.optional(S.String),
          LookbackWindow: S.optional(S.String),
          PromoteMode: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateRetrainingSchedulerRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
