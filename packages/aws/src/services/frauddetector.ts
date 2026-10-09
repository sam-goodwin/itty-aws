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
const ns = /*@__PURE__*/ T.XmlNamespace("http://hawksnest.amazonaws.com/doc/2019-11-15");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "FraudDetector",
  serviceShapeName: "AWSHawksNestServiceFacade",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "frauddetector" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-11-15");
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
              `https://frauddetector-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://frauddetector-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://frauddetector.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://frauddetector.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ResourceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ResourceUnavailableException>()(
    "ResourceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
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
export interface VariableEntry {
  name?: string;
  dataType?: string;
  dataSource?: string;
  defaultValue?: string;
  description?: string;
  variableType?: string;
}
export type VariableEntryList = VariableEntry[];
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type TagList = Tag[];
export interface BatchCreateVariableRequest {
  variableEntries: VariableEntry[];
  tags?: Tag[];
}
export type Integer2 = number;
export interface BatchCreateVariableError_ {
  name?: string;
  code?: number;
  message?: string;
}
export type BatchCreateVariableErrorList = BatchCreateVariableError_[];
export interface BatchCreateVariableResult {
  errors?: BatchCreateVariableError_[];
}
export type NameList = string[];
export interface BatchGetVariableRequest {
  names: string[];
}
export type DataType = "STRING" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATETIME" | (string & {});
export type DataSource = "EVENT" | "MODEL_SCORE" | "EXTERNAL_MODEL_SCORE" | (string & {});
export type FraudDetectorArn = string;
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
export type VariableList = Variable[];
export interface BatchGetVariableError_ {
  name?: string;
  code?: number;
  message?: string;
}
export type BatchGetVariableErrorList = BatchGetVariableError_[];
export interface BatchGetVariableResult {
  variables?: Variable[];
  errors?: BatchGetVariableError_[];
}
export type Identifier = string;
export interface CancelBatchImportJobRequest {
  jobId: string;
}
export interface CancelBatchImportJobResult {}
export interface CancelBatchPredictionJobRequest {
  jobId: string;
}
export interface CancelBatchPredictionJobResult {}
export type S3BucketLocation = string;
export type IamRoleArn = string;
export interface CreateBatchImportJobRequest {
  jobId: string;
  inputPath: string;
  outputPath: string;
  eventTypeName: string;
  iamRoleArn: string;
  tags?: Tag[];
}
export interface CreateBatchImportJobResult {}
export type WholeNumberVersionString = string;
export interface CreateBatchPredictionJobRequest {
  jobId: string;
  inputPath: string;
  outputPath: string;
  eventTypeName: string;
  detectorName: string;
  detectorVersion?: string;
  iamRoleArn: string;
  tags?: Tag[];
}
export interface CreateBatchPredictionJobResult {}
export type Description = string;
export type ListOfStrings = string[];
export interface Rule {
  detectorId: string;
  ruleId: string;
  ruleVersion: string;
}
export type RuleList = Rule[];
export type ModelIdentifier = string;
export type ModelTypeEnum =
  | "ONLINE_FRAUD_INSIGHTS"
  | "TRANSACTION_FRAUD_INSIGHTS"
  | "ACCOUNT_TAKEOVER_INSIGHTS"
  | (string & {});
export type FloatVersionString = string;
export interface ModelVersion {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
  arn?: string;
}
export type ListOfModelVersions = ModelVersion[];
export type RuleExecutionMode = "ALL_MATCHED" | "FIRST_MATCHED" | (string & {});
export interface CreateDetectorVersionRequest {
  detectorId: string;
  description?: string;
  externalModelEndpoints?: string[];
  rules: Rule[];
  modelVersions?: ModelVersion[];
  ruleExecutionMode?: RuleExecutionMode;
  tags?: Tag[];
}
export type DetectorVersionStatus = "DRAFT" | "ACTIVE" | "INACTIVE" | (string & {});
export interface CreateDetectorVersionResult {
  detectorId?: string;
  detectorVersionId?: string;
  status?: DetectorVersionStatus;
}
export type NoDashIdentifier = string;
export type Elements = string | redacted.Redacted<string>;
export type ElementsList = (string | redacted.Redacted<string>)[];
export type VariableType = string;
export interface CreateListRequest {
  name: string;
  elements?: (string | redacted.Redacted<string>)[];
  variableType?: string;
  description?: string;
  tags?: Tag[];
}
export interface CreateListResult {}
export interface CreateModelRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  description?: string;
  eventTypeName: string;
  tags?: Tag[];
}
export interface CreateModelResult {}
export type TrainingDataSourceEnum = "EXTERNAL_EVENTS" | "INGESTED_EVENTS" | (string & {});
export type LabelMapper = { [key: string]: string[] | undefined };
export type UnlabeledEventsTreatment = "IGNORE" | "FRAUD" | "LEGIT" | "AUTO" | (string & {});
export interface LabelSchema {
  labelMapper?: { [key: string]: string[] | undefined };
  unlabeledEventsTreatment?: UnlabeledEventsTreatment;
}
export interface TrainingDataSchema {
  modelVariables: string[];
  labelSchema?: LabelSchema;
}
export interface ExternalEventsDetail {
  dataLocation: string;
  dataAccessRoleArn: string;
}
export interface IngestedEventsTimeWindow {
  startTime: string;
  endTime: string;
}
export interface IngestedEventsDetail {
  ingestedEventsTimeWindow: IngestedEventsTimeWindow;
}
export interface CreateModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  trainingDataSource: TrainingDataSourceEnum;
  trainingDataSchema: TrainingDataSchema;
  externalEventsDetail?: ExternalEventsDetail;
  ingestedEventsDetail?: IngestedEventsDetail;
  tags?: Tag[];
}
export interface CreateModelVersionResult {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  status?: string;
}
export type RuleExpression = string | redacted.Redacted<string>;
export type Language = "DETECTORPL" | (string & {});
export type NonEmptyListOfStrings = string[];
export interface CreateRuleRequest {
  ruleId: string;
  detectorId: string;
  description?: string;
  expression: string | redacted.Redacted<string>;
  language: Language;
  outcomes: string[];
  tags?: Tag[];
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
  tags?: Tag[];
}
export interface CreateVariableResult {}
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
export type DeleteAuditHistory = boolean;
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
export type SageMakerEndpointIdentifier = string;
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
export type DetectorVersionMaxResults = number;
export interface DescribeDetectorRequest {
  detectorId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DetectorVersionSummary {
  detectorVersionId?: string;
  status?: DetectorVersionStatus;
  description?: string;
  lastUpdatedTime?: string;
}
export type DetectorVersionSummaryList = DetectorVersionSummary[];
export interface DescribeDetectorResult {
  detectorId?: string;
  detectorVersionSummaries?: DetectorVersionSummary[];
  nextToken?: string;
  arn?: string;
}
export type ModelsMaxPageSize = number;
export interface DescribeModelVersionsRequest {
  modelId?: string;
  modelVersionNumber?: string;
  modelType?: ModelTypeEnum;
  nextToken?: string;
  maxResults?: number;
}
export interface FileValidationMessage {
  title?: string;
  content?: string;
  type?: string;
}
export type FileValidationMessageList = FileValidationMessage[];
export interface FieldValidationMessage {
  fieldName?: string;
  identifier?: string;
  title?: string;
  content?: string;
  type?: string;
}
export type FieldValidationMessageList = FieldValidationMessage[];
export interface DataValidationMetrics {
  fileLevelMessages?: FileValidationMessage[];
  fieldLevelMessages?: FieldValidationMessage[];
}
export interface MetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
export type MetricDataPointsList = MetricDataPoint[];
export interface TrainingMetrics {
  auc?: number;
  metricDataPoints?: MetricDataPoint[];
}
export interface LogOddsMetric {
  variableName: string;
  variableType: string;
  variableImportance: number;
}
export type ListOfLogOddsMetrics = LogOddsMetric[];
export interface VariableImportanceMetrics {
  logOddsMetrics?: LogOddsMetric[];
}
export interface TrainingResult {
  dataValidationMetrics?: DataValidationMetrics;
  trainingMetrics?: TrainingMetrics;
  variableImportanceMetrics?: VariableImportanceMetrics;
}
export interface OFIMetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
export type OFIMetricDataPointsList = OFIMetricDataPoint[];
export interface UncertaintyRange {
  lowerBoundValue: number;
  upperBoundValue: number;
}
export interface OFIModelPerformance {
  auc?: number;
  uncertaintyRange?: UncertaintyRange;
}
export interface OFITrainingMetricsValue {
  metricDataPoints?: OFIMetricDataPoint[];
  modelPerformance?: OFIModelPerformance;
}
export interface TFIMetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
export type TFIMetricDataPointsList = TFIMetricDataPoint[];
export interface TFIModelPerformance {
  auc?: number;
  uncertaintyRange?: UncertaintyRange;
}
export interface TFITrainingMetricsValue {
  metricDataPoints?: TFIMetricDataPoint[];
  modelPerformance?: TFIModelPerformance;
}
export interface ATIMetricDataPoint {
  cr?: number;
  adr?: number;
  threshold?: number;
  atodr?: number;
}
export type ATIMetricDataPointsList = ATIMetricDataPoint[];
export interface ATIModelPerformance {
  asi?: number;
}
export interface ATITrainingMetricsValue {
  metricDataPoints?: ATIMetricDataPoint[];
  modelPerformance?: ATIModelPerformance;
}
export interface TrainingMetricsV2 {
  ofi?: OFITrainingMetricsValue;
  tfi?: TFITrainingMetricsValue;
  ati?: ATITrainingMetricsValue;
}
export interface AggregatedLogOddsMetric {
  variableNames: string[];
  aggregatedVariablesImportance: number;
}
export type ListOfAggregatedLogOddsMetrics = AggregatedLogOddsMetric[];
export interface AggregatedVariablesImportanceMetrics {
  logOddsMetrics?: AggregatedLogOddsMetric[];
}
export interface TrainingResultV2 {
  dataValidationMetrics?: DataValidationMetrics;
  trainingMetricsV2?: TrainingMetricsV2;
  variableImportanceMetrics?: VariableImportanceMetrics;
  aggregatedVariablesImportanceMetrics?: AggregatedVariablesImportanceMetrics;
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
export type ModelVersionDetailList = ModelVersionDetail[];
export interface DescribeModelVersionsResult {
  modelVersionDetails?: ModelVersionDetail[];
  nextToken?: string;
}
export type BatchImportsMaxPageSize = number;
export interface GetBatchImportJobsRequest {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
export type AsyncJobStatus =
  | "IN_PROGRESS_INITIALIZING"
  | "IN_PROGRESS"
  | "CANCEL_IN_PROGRESS"
  | "CANCELED"
  | "COMPLETE"
  | "FAILED"
  | (string & {});
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
export type BatchImportList = BatchImport[];
export interface GetBatchImportJobsResult {
  batchImports?: BatchImport[];
  nextToken?: string;
}
export type BatchPredictionsMaxPageSize = number;
export interface GetBatchPredictionJobsRequest {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
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
export type BatchPredictionList = BatchPrediction[];
export interface GetBatchPredictionJobsResult {
  batchPredictions?: BatchPrediction[];
  nextToken?: string;
}
export interface GetDeleteEventsByEventTypeStatusRequest {
  eventTypeName: string;
}
export interface GetDeleteEventsByEventTypeStatusResult {
  eventTypeName?: string;
  eventsDeletionStatus?: AsyncJobStatus;
}
export type DetectorsMaxResults = number;
export interface GetDetectorsRequest {
  detectorId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface Detector {
  detectorId?: string;
  description?: string;
  eventTypeName?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type DetectorList = Detector[];
export interface GetDetectorsResult {
  detectors?: Detector[];
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
  externalModelEndpoints?: string[];
  modelVersions?: ModelVersion[];
  rules?: Rule[];
  status?: DetectorVersionStatus;
  lastUpdatedTime?: string;
  createdTime?: string;
  ruleExecutionMode?: RuleExecutionMode;
  arn?: string;
}
export type EntityTypesMaxResults = number;
export interface GetEntityTypesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface EntityType {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type EntityTypeList = EntityType[];
export interface GetEntityTypesResult {
  entityTypes?: EntityType[];
  nextToken?: string;
}
export interface GetEventRequest {
  eventId: string;
  eventTypeName: string;
}
export type AttributeKey = string;
export type AttributeValue = string | redacted.Redacted<string>;
export type EventAttributeMap = { [key: string]: string | redacted.Redacted<string> | undefined };
export type EntityRestrictedString = string;
export interface Entity {
  entityType: string;
  entityId: string;
}
export type ListOfEntities = Entity[];
export interface Event {
  eventId?: string;
  eventTypeName?: string;
  eventTimestamp?: string;
  eventVariables?: { [key: string]: string | redacted.Redacted<string> | undefined };
  currentLabel?: string;
  labelTimestamp?: string;
  entities?: Entity[];
}
export interface GetEventResult {
  event?: Event;
}
export type UtcTimestampISO8601 = string;
export type VariableName = string;
export type VariableValue = string | redacted.Redacted<string>;
export type EventVariableMap = { [key: string]: string | redacted.Redacted<string> | undefined };
export type ContentType = string;
export interface ModelEndpointDataBlob {
  byteBuffer?: Uint8Array;
  contentType?: string;
}
export type ExternalModelEndpointDataBlobMap = { [key: string]: ModelEndpointDataBlob | undefined };
export interface GetEventPredictionRequest {
  detectorId: string;
  detectorVersionId?: string;
  eventId: string;
  eventTypeName: string;
  entities: Entity[];
  eventTimestamp: string;
  eventVariables: { [key: string]: string | redacted.Redacted<string> | undefined };
  externalModelEndpointDataBlobs?: { [key: string]: ModelEndpointDataBlob | undefined };
}
export type ModelPredictionMap = { [key: string]: number | undefined };
export interface ModelScores {
  modelVersion?: ModelVersion;
  scores?: { [key: string]: number | undefined };
}
export type ListOfModelScores = ModelScores[];
export interface RuleResult {
  ruleId?: string;
  outcomes?: string[];
}
export type ListOfRuleResults = RuleResult[];
export type ModelSource = "SAGEMAKER" | (string & {});
export interface ExternalModelSummary {
  modelEndpoint?: string;
  modelSource?: ModelSource;
}
export type ExternalModelPredictionMap = { [key: string]: string | undefined };
export interface ExternalModelOutputs {
  externalModel?: ExternalModelSummary;
  outputs?: { [key: string]: string | undefined };
}
export type ListOfExternalModelOutputs = ExternalModelOutputs[];
export interface GetEventPredictionResult {
  modelScores?: ModelScores[];
  ruleResults?: RuleResult[];
  externalModelOutputs?: ExternalModelOutputs[];
}
export interface GetEventPredictionMetadataRequest {
  eventId: string;
  eventTypeName: string;
  detectorId: string;
  detectorVersionId: string;
  predictionTimestamp: string;
}
export type SensitiveString = string | redacted.Redacted<string>;
export interface EventVariableSummary {
  name?: string | redacted.Redacted<string>;
  value?: string | redacted.Redacted<string>;
  source?: string | redacted.Redacted<string>;
}
export type ListOfEventVariableSummaries = EventVariableSummary[];
export interface EvaluatedRule {
  ruleId?: string;
  ruleVersion?: string;
  expression?: string | redacted.Redacted<string>;
  expressionWithValues?: string | redacted.Redacted<string>;
  outcomes?: string[];
  evaluated?: boolean;
  matched?: boolean;
}
export type EvaluatedRuleList = EvaluatedRule[];
export interface VariableImpactExplanation {
  eventVariableName?: string;
  relativeImpact?: string;
  logOddsImpact?: number;
}
export type ListOfVariableImpactExplanations = VariableImpactExplanation[];
export interface AggregatedVariablesImpactExplanation {
  eventVariableNames?: string[];
  relativeImpact?: string;
  logOddsImpact?: number;
}
export type ListOfAggregatedVariablesImpactExplanations = AggregatedVariablesImpactExplanation[];
export interface PredictionExplanations {
  variableImpactExplanations?: VariableImpactExplanation[];
  aggregatedVariablesImpactExplanations?: AggregatedVariablesImpactExplanation[];
}
export interface ModelVersionEvaluation {
  outputVariableName?: string;
  evaluationScore?: string;
  predictionExplanations?: PredictionExplanations;
}
export type ListOfModelVersionEvaluations = ModelVersionEvaluation[];
export interface EvaluatedModelVersion {
  modelId?: string;
  modelVersion?: string;
  modelType?: string;
  evaluations?: ModelVersionEvaluation[];
}
export type ListOfEvaluatedModelVersions = EvaluatedModelVersion[];
export type MapOfStrings = { [key: string]: string | undefined };
export interface EvaluatedExternalModel {
  modelEndpoint?: string;
  useEventVariables?: boolean;
  inputVariables?: { [key: string]: string | undefined };
  outputVariables?: { [key: string]: string | undefined };
}
export type ListOfEvaluatedExternalModels = EvaluatedExternalModel[];
export interface GetEventPredictionMetadataResult {
  eventId?: string;
  eventTypeName?: string;
  entityId?: string;
  entityType?: string;
  eventTimestamp?: string;
  detectorId?: string;
  detectorVersionId?: string;
  detectorVersionStatus?: string;
  eventVariables?: EventVariableSummary[];
  rules?: EvaluatedRule[];
  ruleExecutionMode?: RuleExecutionMode;
  outcomes?: string[];
  evaluatedModelVersions?: EvaluatedModelVersion[];
  evaluatedExternalModels?: EvaluatedExternalModel[];
  predictionTimestamp?: string;
}
export type EventTypesMaxResults = number;
export interface GetEventTypesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export type EventIngestion = "ENABLED" | "DISABLED" | (string & {});
export interface IngestedEventStatistics {
  numberOfEvents?: number;
  eventDataSizeInBytes?: number;
  leastRecentEvent?: string;
  mostRecentEvent?: string;
  lastUpdatedTime?: string;
}
export interface EventOrchestration {
  eventBridgeEnabled: boolean;
}
export interface EventType {
  name?: string;
  description?: string;
  eventVariables?: string[];
  labels?: string[];
  entityTypes?: string[];
  eventIngestion?: EventIngestion;
  ingestedEventStatistics?: IngestedEventStatistics;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
  eventOrchestration?: EventOrchestration;
}
export type EventTypeList = EventType[];
export interface GetEventTypesResult {
  eventTypes?: EventType[];
  nextToken?: string;
}
export type ExternalModelsMaxResults = number;
export interface GetExternalModelsRequest {
  modelEndpoint?: string;
  nextToken?: string;
  maxResults?: number;
}
export type ModelInputDataFormat = "TEXT_CSV" | "APPLICATION_JSON" | (string & {});
export type UseEventVariables = boolean;
export type ModelInputTemplate = string;
export interface ModelInputConfiguration {
  eventTypeName?: string;
  format?: ModelInputDataFormat;
  useEventVariables: boolean;
  jsonInputTemplate?: string;
  csvInputTemplate?: string;
}
export type ModelOutputDataFormat = "TEXT_CSV" | "APPLICATION_JSONLINES" | (string & {});
export type JsonKeyToVariableMap = { [key: string]: string | undefined };
export type CsvIndexToVariableMap = { [key: string]: string | undefined };
export interface ModelOutputConfiguration {
  format: ModelOutputDataFormat;
  jsonKeyToVariableMap?: { [key: string]: string | undefined };
  csvIndexToVariableMap?: { [key: string]: string | undefined };
}
export type ModelEndpointStatus = "ASSOCIATED" | "DISSOCIATED" | (string & {});
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
export type ExternalModelList = ExternalModel[];
export interface GetExternalModelsResult {
  externalModels?: ExternalModel[];
  nextToken?: string;
}
export interface GetKMSEncryptionKeyRequest {}
export type KmsEncryptionKeyArn = string;
export interface KMSKey {
  kmsEncryptionKeyArn?: string;
}
export interface GetKMSEncryptionKeyResult {
  kmsKey?: KMSKey;
}
export type LabelsMaxResults = number;
export interface GetLabelsRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface Label {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type LabelList = Label[];
export interface GetLabelsResult {
  labels?: Label[];
  nextToken?: string;
}
export type NextToken = string;
export type ListsElementsMaxResults = number;
export interface GetListElementsRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetListElementsResult {
  elements?: (string | redacted.Redacted<string>)[];
  nextToken?: string;
}
export type ListsMetadataMaxResults = number;
export interface GetListsMetadataRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface AllowDenyList {
  name: string;
  description?: string;
  variableType?: string;
  createdTime?: string;
  updatedTime?: string;
  arn?: string;
}
export type AllowDenyLists = AllowDenyList[];
export interface GetListsMetadataResult {
  lists?: AllowDenyList[];
  nextToken?: string;
}
export interface GetModelsRequest {
  modelId?: string;
  modelType?: ModelTypeEnum;
  nextToken?: string;
  maxResults?: number;
}
export interface Model {
  modelId?: string;
  modelType?: ModelTypeEnum;
  description?: string;
  eventTypeName?: string;
  createdTime?: string;
  lastUpdatedTime?: string;
  arn?: string;
}
export type ModelList = Model[];
export interface GetModelsResult {
  nextToken?: string;
  models?: Model[];
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
export type OutcomesMaxResults = number;
export interface GetOutcomesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface Outcome {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type OutcomeList = Outcome[];
export interface GetOutcomesResult {
  outcomes?: Outcome[];
  nextToken?: string;
}
export type RulesMaxResults = number;
export interface GetRulesRequest {
  ruleId?: string;
  detectorId: string;
  ruleVersion?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface RuleDetail {
  ruleId?: string;
  description?: string;
  detectorId?: string;
  ruleVersion?: string;
  expression?: string | redacted.Redacted<string>;
  language?: Language;
  outcomes?: string[];
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type RuleDetailList = RuleDetail[];
export interface GetRulesResult {
  ruleDetails?: RuleDetail[];
  nextToken?: string;
}
export type VariablesMaxResults = number;
export interface GetVariablesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetVariablesResult {
  variables?: Variable[];
  nextToken?: string;
}
export type FilterString = string;
export interface FilterCondition {
  value?: string;
}
export interface PredictionTimeRange {
  startTime: string;
  endTime: string;
}
export type EventPredictionsMaxResults = number;
export interface ListEventPredictionsRequest {
  eventId?: FilterCondition;
  eventType?: FilterCondition;
  detectorId?: FilterCondition;
  detectorVersionId?: FilterCondition;
  predictionTimeRange?: PredictionTimeRange;
  nextToken?: string;
  maxResults?: number;
}
export interface EventPredictionSummary {
  eventId?: string;
  eventTypeName?: string;
  eventTimestamp?: string;
  predictionTimestamp?: string;
  detectorId?: string;
  detectorVersionId?: string;
}
export type ListOfEventPredictionSummaries = EventPredictionSummary[];
export interface ListEventPredictionsResult {
  eventPredictionSummaries?: EventPredictionSummary[];
  nextToken?: string;
}
export type TagsMaxResults = number;
export interface ListTagsForResourceRequest {
  resourceARN: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTagsForResourceResult {
  tags?: Tag[];
  nextToken?: string;
}
export interface PutDetectorRequest {
  detectorId: string;
  description?: string;
  eventTypeName: string;
  tags?: Tag[];
}
export interface PutDetectorResult {}
export interface PutEntityTypeRequest {
  name: string;
  description?: string;
  tags?: Tag[];
}
export interface PutEntityTypeResult {}
export interface PutEventTypeRequest {
  name: string;
  description?: string;
  eventVariables: string[];
  labels?: string[];
  entityTypes: string[];
  eventIngestion?: EventIngestion;
  tags?: Tag[];
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
  tags?: Tag[];
}
export interface PutExternalModelResult {}
export interface PutKMSEncryptionKeyRequest {
  kmsEncryptionKeyArn: string;
}
export interface PutKMSEncryptionKeyResult {}
export interface PutLabelRequest {
  name: string;
  description?: string;
  tags?: Tag[];
}
export interface PutLabelResult {}
export interface PutOutcomeRequest {
  name: string;
  description?: string;
  tags?: Tag[];
}
export interface PutOutcomeResult {}
export interface SendEventRequest {
  eventId: string;
  eventTypeName: string;
  eventTimestamp: string;
  eventVariables: { [key: string]: string | redacted.Redacted<string> | undefined };
  assignedLabel?: string;
  labelTimestamp?: string;
  entities: Entity[];
}
export interface SendEventResult {}
export interface TagResourceRequest {
  resourceARN: string;
  tags: Tag[];
}
export interface TagResourceResult {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
export interface UntagResourceResult {}
export interface UpdateDetectorVersionRequest {
  detectorId: string;
  detectorVersionId: string;
  externalModelEndpoints: string[];
  rules: Rule[];
  description?: string;
  modelVersions?: ModelVersion[];
  ruleExecutionMode?: RuleExecutionMode;
}
export interface UpdateDetectorVersionResult {}
export interface UpdateDetectorVersionMetadataRequest {
  detectorId: string;
  detectorVersionId: string;
  description: string;
}
export interface UpdateDetectorVersionMetadataResult {}
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
export type ListUpdateMode = "REPLACE" | "APPEND" | "REMOVE" | (string & {});
export interface UpdateListRequest {
  name: string;
  elements?: (string | redacted.Redacted<string>)[];
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
  tags?: Tag[];
}
export interface UpdateModelVersionResult {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  status?: string;
}
export type ModelVersionStatus = "ACTIVE" | "INACTIVE" | "TRAINING_CANCELLED" | (string & {});
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
  expression: string | redacted.Redacted<string>;
  language: Language;
  outcomes: string[];
  tags?: Tag[];
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
export type BatchCreateVariableError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a batch of variables.
 */
export const batchCreateVariable: API.OperationMethod<
  BatchCreateVariableRequest,
  BatchCreateVariableResult,
  BatchCreateVariableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<BatchCreateVariableRequest>,
  output: __S(7) as any as S.Schema<BatchCreateVariableResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateVariable",
}));

export type BatchGetVariableError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a batch of variables.
 */
export const batchGetVariable: API.OperationMethod<
  BatchGetVariableRequest,
  BatchGetVariableResult,
  BatchGetVariableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<BatchGetVariableRequest>,
  output: __S(14) as any as S.Schema<BatchGetVariableResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetVariable",
}));

export type CancelBatchImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels an in-progress batch import job.
 */
export const cancelBatchImportJob: API.OperationMethod<
  CancelBatchImportJobRequest,
  CancelBatchImportJobResult,
  CancelBatchImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<CancelBatchImportJobRequest>,
  output: __S(16) as any as S.Schema<CancelBatchImportJobResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelBatchImportJob",
}));

export type CancelBatchPredictionJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the specified batch prediction job.
 */
export const cancelBatchPredictionJob: API.OperationMethod<
  CancelBatchPredictionJobRequest,
  CancelBatchPredictionJobResult,
  CancelBatchPredictionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<CancelBatchPredictionJobRequest>,
  output: __S(16) as any as S.Schema<CancelBatchPredictionJobResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelBatchPredictionJob",
}));

export type CreateBatchImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a batch import job.
 */
export const createBatchImportJob: API.OperationMethod<
  CreateBatchImportJobRequest,
  CreateBatchImportJobResult,
  CreateBatchImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<CreateBatchImportJobRequest>,
  output: __S(16) as any as S.Schema<CreateBatchImportJobResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBatchImportJob",
}));

export type CreateBatchPredictionJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a batch prediction job.
 */
export const createBatchPredictionJob: API.OperationMethod<
  CreateBatchPredictionJobRequest,
  CreateBatchPredictionJobResult,
  CreateBatchPredictionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<CreateBatchPredictionJobRequest>,
  output: __S(16) as any as S.Schema<CreateBatchPredictionJobResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBatchPredictionJob",
}));

export type CreateDetectorVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a detector version. The detector version starts in a `DRAFT` status.
 */
export const createDetectorVersion: API.OperationMethod<
  CreateDetectorVersionRequest,
  CreateDetectorVersionResult,
  CreateDetectorVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<CreateDetectorVersionRequest>,
  output: __S(25) as any as S.Schema<CreateDetectorVersionResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDetectorVersion",
}));

export type CreateListError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a list.
 *
 * List is a set of input data for a variable in your event dataset. You use the input data in a rule that's associated with your detector.
 * For more information, see Lists.
 */
export const createList: API.OperationMethod<
  CreateListRequest,
  CreateListResult,
  CreateListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<CreateListRequest>,
  output: __S(28) as any as S.Schema<CreateListResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateList",
}));

export type CreateModelError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a model using the specified model type.
 */
export const createModel: API.OperationMethod<
  CreateModelRequest,
  CreateModelResult,
  CreateModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<CreateModelRequest>,
  output: __S(28) as any as S.Schema<CreateModelResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateModel",
}));

export type CreateModelVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a version of the model using the specified model type and model id.
 */
export const createModelVersion: API.OperationMethod<
  CreateModelVersionRequest,
  CreateModelVersionResult,
  CreateModelVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<CreateModelVersionRequest>,
  output: __S(37) as any as S.Schema<CreateModelVersionResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateModelVersion",
}));

export type CreateRuleError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a rule for use with the specified detector.
 */
export const createRule: API.OperationMethod<
  CreateRuleRequest,
  CreateRuleResult,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<CreateRuleRequest>,
  output: __S(39) as any as S.Schema<CreateRuleResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRule",
}));

export type CreateVariableError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a variable.
 */
export const createVariable: API.OperationMethod<
  CreateVariableRequest,
  CreateVariableResult,
  CreateVariableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<CreateVariableRequest>,
  output: __S(28) as any as S.Schema<CreateVariableResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVariable",
}));

export type DeleteBatchImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified batch import job ID record. This action does not delete the data that was batch imported.
 */
export const deleteBatchImportJob: API.OperationMethod<
  DeleteBatchImportJobRequest,
  DeleteBatchImportJobResult,
  DeleteBatchImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<DeleteBatchImportJobRequest>,
  output: __S(16) as any as S.Schema<DeleteBatchImportJobResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBatchImportJob",
}));

export type DeleteBatchPredictionJobError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a batch prediction job.
 */
export const deleteBatchPredictionJob: API.OperationMethod<
  DeleteBatchPredictionJobRequest,
  DeleteBatchPredictionJobResult,
  DeleteBatchPredictionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<DeleteBatchPredictionJobRequest>,
  output: __S(16) as any as S.Schema<DeleteBatchPredictionJobResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBatchPredictionJob",
}));

export type DeleteDetectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.
 *
 * When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteDetector: API.OperationMethod<
  DeleteDetectorRequest,
  DeleteDetectorResult,
  DeleteDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<DeleteDetectorRequest>,
  output: __S(28) as any as S.Schema<DeleteDetectorResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDetector",
}));

export type DeleteDetectorVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the detector version. You cannot delete detector versions that are in `ACTIVE` status.
 *
 * When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteDetectorVersion: API.OperationMethod<
  DeleteDetectorVersionRequest,
  DeleteDetectorVersionResult,
  DeleteDetectorVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<DeleteDetectorVersionRequest>,
  output: __S(16) as any as S.Schema<DeleteDetectorVersionResult>,
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
  operationName: "DeleteDetectorVersion",
}));

export type DeleteEntityTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an entity type.
 *
 * You cannot delete an entity type that is included in an event type.
 *
 * When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteEntityType: API.OperationMethod<
  DeleteEntityTypeRequest,
  DeleteEntityTypeResult,
  DeleteEntityTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<DeleteEntityTypeRequest>,
  output: __S(46) as any as S.Schema<DeleteEntityTypeResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEntityType",
}));

export type DeleteEventError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified event.
 *
 * When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector.
 * If `deleteAuditHistory` is `True`, event data is available through search for up to 30 seconds after the delete operation is completed.
 */
export const deleteEvent: API.OperationMethod<
  DeleteEventRequest,
  DeleteEventResult,
  DeleteEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<DeleteEventRequest>,
  output: __S(28) as any as S.Schema<DeleteEventResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEvent",
}));

export type DeleteEventsByEventTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes all events of a particular event type.
 */
export const deleteEventsByEventType: API.OperationMethod<
  DeleteEventsByEventTypeRequest,
  DeleteEventsByEventTypeResult,
  DeleteEventsByEventTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<DeleteEventsByEventTypeRequest>,
  output: __S(49) as any as S.Schema<DeleteEventsByEventTypeResult>,
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
  operationName: "DeleteEventsByEventType",
}));

export type DeleteEventTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an event type.
 *
 * You cannot delete an event type that is used in a detector or a model.
 *
 * When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteEventType: API.OperationMethod<
  DeleteEventTypeRequest,
  DeleteEventTypeResult,
  DeleteEventTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<DeleteEventTypeRequest>,
  output: __S(28) as any as S.Schema<DeleteEventTypeResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventType",
}));

export type DeleteExternalModelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a SageMaker model from Amazon Fraud Detector.
 *
 * You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.
 */
export const deleteExternalModel: API.OperationMethod<
  DeleteExternalModelRequest,
  DeleteExternalModelResult,
  DeleteExternalModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<DeleteExternalModelRequest>,
  output: __S(16) as any as S.Schema<DeleteExternalModelResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExternalModel",
}));

export type DeleteLabelError =
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a label.
 *
 * You cannot delete labels that are included in an event type in Amazon Fraud Detector.
 *
 * You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.
 *
 * When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteLabel: API.OperationMethod<
  DeleteLabelRequest,
  DeleteLabelResult,
  DeleteLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<DeleteLabelRequest>,
  output: __S(28) as any as S.Schema<DeleteLabelResult>,
  errors: [ConflictException, InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLabel",
}));

export type DeleteListError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the list, provided it is not used in a rule.
 *
 * When you delete a list, Amazon Fraud Detector permanently deletes that list and the elements in the list.
 */
export const deleteList: API.OperationMethod<
  DeleteListRequest,
  DeleteListResult,
  DeleteListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<DeleteListRequest>,
  output: __S(28) as any as S.Schema<DeleteListResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteList",
}));

export type DeleteModelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a model.
 *
 * You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.
 *
 * When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteModel: API.OperationMethod<
  DeleteModelRequest,
  DeleteModelResult,
  DeleteModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<DeleteModelRequest>,
  output: __S(28) as any as S.Schema<DeleteModelResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteModel",
}));

export type DeleteModelVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a model version.
 *
 * You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.
 *
 * When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteModelVersion: API.OperationMethod<
  DeleteModelVersionRequest,
  DeleteModelVersionResult,
  DeleteModelVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55) as any as S.Schema<DeleteModelVersionRequest>,
  output: __S(56) as any as S.Schema<DeleteModelVersionResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteModelVersion",
}));

export type DeleteOutcomeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an outcome.
 *
 * You cannot delete an outcome that is used in a rule version.
 *
 * When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteOutcome: API.OperationMethod<
  DeleteOutcomeRequest,
  DeleteOutcomeResult,
  DeleteOutcomeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57) as any as S.Schema<DeleteOutcomeRequest>,
  output: __S(28) as any as S.Schema<DeleteOutcomeResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOutcome",
}));

export type DeleteRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the rule. You cannot delete a rule if it is used by an `ACTIVE` or `INACTIVE` detector version.
 *
 * When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteRule: API.OperationMethod<
  DeleteRuleRequest,
  DeleteRuleResult,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<DeleteRuleRequest>,
  output: __S(28) as any as S.Schema<DeleteRuleResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRule",
}));

export type DeleteVariableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a variable.
 *
 * You can't delete variables that are included in an event type in Amazon Fraud Detector.
 *
 * Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.
 *
 * When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.
 */
export const deleteVariable: API.OperationMethod<
  DeleteVariableRequest,
  DeleteVariableResult,
  DeleteVariableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<DeleteVariableRequest>,
  output: __S(28) as any as S.Schema<DeleteVariableResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVariable",
}));

export type DescribeDetectorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all versions for a specified detector.
 */
export const describeDetector: API.OperationMethod<
  DescribeDetectorRequest,
  DescribeDetectorResult,
  DescribeDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DescribeDetectorRequest>,
  output: __S(63) as any as S.Schema<DescribeDetectorResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDetector",
}));

export type DescribeModelVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.
 */
export const describeModelVersions: API.PaginatedOperationMethod<
  DescribeModelVersionsRequest,
  DescribeModelVersionsResult,
  DescribeModelVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(64) as any as S.Schema<DescribeModelVersionsRequest>,
  output: __S(91) as any as S.Schema<DescribeModelVersionsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeModelVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetBatchImportJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all batch import jobs or a specific job of the specified ID. This is a paginated API. If you provide a null `maxResults`,
 * this action retrieves a maximum of 50 records per page. If you provide a `maxResults`, the value must be between 1 and 50.
 * To get the next page results, provide the pagination token from the `GetBatchImportJobsResponse` as part of your request.
 * A null pagination token fetches the records from the beginning.
 */
export const getBatchImportJobs: API.PaginatedOperationMethod<
  GetBatchImportJobsRequest,
  GetBatchImportJobsResult,
  GetBatchImportJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(92) as any as S.Schema<GetBatchImportJobsRequest>,
  output: __S(95) as any as S.Schema<GetBatchImportJobsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBatchImportJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetBatchPredictionJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.
 */
export const getBatchPredictionJobs: API.PaginatedOperationMethod<
  GetBatchPredictionJobsRequest,
  GetBatchPredictionJobsResult,
  GetBatchPredictionJobsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(96) as any as S.Schema<GetBatchPredictionJobsRequest>,
  output: __S(99) as any as S.Schema<GetBatchPredictionJobsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBatchPredictionJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetDeleteEventsByEventTypeStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the status of a `DeleteEventsByEventType` action.
 */
export const getDeleteEventsByEventTypeStatus: API.OperationMethod<
  GetDeleteEventsByEventTypeStatusRequest,
  GetDeleteEventsByEventTypeStatusResult,
  GetDeleteEventsByEventTypeStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100) as any as S.Schema<GetDeleteEventsByEventTypeStatusRequest>,
  output: __S(101) as any as S.Schema<GetDeleteEventsByEventTypeStatusResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeleteEventsByEventTypeStatus",
}));

export type GetDetectorsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all detectors or a single detector if a `detectorId` is specified. This is a paginated API. If you
 * provide a null `maxResults`, this action retrieves a maximum of 10 records
 * per page. If you provide a `maxResults`, the value must be between 5 and 10.
 * To get the next page results, provide the pagination token from the
 * `GetDetectorsResponse` as part of your request. A null pagination token
 * fetches the records from the beginning.
 */
export const getDetectors: API.PaginatedOperationMethod<
  GetDetectorsRequest,
  GetDetectorsResult,
  GetDetectorsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(102) as any as S.Schema<GetDetectorsRequest>,
  output: __S(105) as any as S.Schema<GetDetectorsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDetectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetDetectorVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a particular detector version.
 */
export const getDetectorVersion: API.OperationMethod<
  GetDetectorVersionRequest,
  GetDetectorVersionResult,
  GetDetectorVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<GetDetectorVersionRequest>,
  output: __S(107) as any as S.Schema<GetDetectorVersionResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDetectorVersion",
}));

export type GetEntityTypesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you
 * provide a null `maxResults`, this action retrieves a maximum of 10 records
 * per page. If you provide a `maxResults`, the value must be between 5 and 10.
 * To get the next page results, provide the pagination token from the
 * `GetEntityTypesResponse` as part of your request. A null pagination token
 * fetches the records from the beginning.
 */
export const getEntityTypes: API.PaginatedOperationMethod<
  GetEntityTypesRequest,
  GetEntityTypesResult,
  GetEntityTypesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(108) as any as S.Schema<GetEntityTypesRequest>,
  output: __S(111) as any as S.Schema<GetEntityTypesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEntityTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.
 */
export const getEvent: API.OperationMethod<
  GetEventRequest,
  GetEventResult,
  GetEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<GetEventRequest>,
  output: __S(117) as any as S.Schema<GetEventResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvent",
}));

export type GetEventPredictionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Evaluates an event against a detector version. If a version ID is not provided, the detector's (`ACTIVE`) version is used.
 */
export const getEventPrediction: API.OperationMethod<
  GetEventPredictionRequest,
  GetEventPredictionResult,
  GetEventPredictionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<GetEventPredictionRequest>,
  output: __S(130) as any as S.Schema<GetEventPredictionResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventPrediction",
}));

export type GetEventPredictionMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period.
 */
export const getEventPredictionMetadata: API.OperationMethod<
  GetEventPredictionMetadataRequest,
  GetEventPredictionMetadataResult,
  GetEventPredictionMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<GetEventPredictionMetadataRequest>,
  output: __S(147) as any as S.Schema<GetEventPredictionMetadataResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventPredictionMetadata",
}));

export type GetEventTypesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all event types or a specific event type if name is provided. This is a paginated API. If you
 * provide a null `maxResults`, this action retrieves a maximum of 10 records
 * per page. If you provide a `maxResults`, the value must be between 5 and 10.
 * To get the next page results, provide the pagination token from the
 * `GetEventTypesResponse` as part of your request. A null pagination token
 * fetches the records from the beginning.
 */
export const getEventTypes: API.PaginatedOperationMethod<
  GetEventTypesRequest,
  GetEventTypesResult,
  GetEventTypesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(148) as any as S.Schema<GetEventTypesRequest>,
  output: __S(153) as any as S.Schema<GetEventTypesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetExternalModelsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details for one or more Amazon SageMaker models that have been imported into the
 * service. This is a paginated API. If you provide a null `maxResults`, this
 * actions retrieves a maximum of 10 records per page. If you provide a
 * `maxResults`, the value must be between 5 and 10. To get the next page
 * results, provide the pagination token from the `GetExternalModelsResult` as part
 * of your request. A null pagination token fetches the records from the beginning.
 */
export const getExternalModels: API.PaginatedOperationMethod<
  GetExternalModelsRequest,
  GetExternalModelsResult,
  GetExternalModelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(154) as any as S.Schema<GetExternalModelsRequest>,
  output: __S(159) as any as S.Schema<GetExternalModelsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExternalModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetKMSEncryptionKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.
 */
export const getKMSEncryptionKey: API.OperationMethod<
  GetKMSEncryptionKeyRequest,
  GetKMSEncryptionKeyResult,
  GetKMSEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160) as any as S.Schema<GetKMSEncryptionKeyRequest>,
  output: __S(162) as any as S.Schema<GetKMSEncryptionKeyResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetKMSEncryptionKey",
}));

export type GetLabelsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all labels or a specific label if name is provided. This is a paginated API. If you
 * provide a null `maxResults`, this action retrieves a maximum of 50 records
 * per page. If you provide a `maxResults`, the value must be between 10 and 50.
 * To get the next page results, provide the pagination token from the
 * `GetGetLabelsResponse` as part of your request. A null pagination token
 * fetches the records from the beginning.
 */
export const getLabels: API.PaginatedOperationMethod<
  GetLabelsRequest,
  GetLabelsResult,
  GetLabelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(163) as any as S.Schema<GetLabelsRequest>,
  output: __S(164) as any as S.Schema<GetLabelsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLabels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetListElementsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all the elements in the specified list.
 */
export const getListElements: API.PaginatedOperationMethod<
  GetListElementsRequest,
  GetListElementsResult,
  GetListElementsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165) as any as S.Schema<GetListElementsRequest>,
  output: __S(166) as any as S.Schema<GetListElementsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetListElements",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetListsMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the metadata of either all the lists under the account or the specified list.
 */
export const getListsMetadata: API.PaginatedOperationMethod<
  GetListsMetadataRequest,
  GetListsMetadataResult,
  GetListsMetadataError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167) as any as S.Schema<GetListsMetadataRequest>,
  output: __S(170) as any as S.Schema<GetListsMetadataResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetListsMetadata",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetModelsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets one or more models. Gets all models for the Amazon Web Services account if no model type and no model id provided. Gets all models for the Amazon Web Services account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified.
 *
 * This is a paginated API. If you
 * provide a null `maxResults`, this action retrieves a maximum of 10 records
 * per page. If you provide a `maxResults`, the value must be between 1 and 10.
 * To get the next page results, provide the pagination token from the
 * response as part of your request. A null pagination token
 * fetches the records from the beginning.
 */
export const getModels: API.PaginatedOperationMethod<
  GetModelsRequest,
  GetModelsResult,
  GetModelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(171) as any as S.Schema<GetModelsRequest>,
  output: __S(174) as any as S.Schema<GetModelsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetModelVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of the specified model version.
 */
export const getModelVersion: API.OperationMethod<
  GetModelVersionRequest,
  GetModelVersionResult,
  GetModelVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175) as any as S.Schema<GetModelVersionRequest>,
  output: __S(176) as any as S.Schema<GetModelVersionResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetModelVersion",
}));

export type GetOutcomesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets one or more outcomes. This is a paginated
 * API. If you provide a null `maxResults`, this actions retrieves a maximum of
 * 100 records per page. If you provide a `maxResults`, the value must be
 * between 50 and 100. To get the next page results, provide the pagination token from the
 * `GetOutcomesResult` as part of your request. A null pagination token
 * fetches the records from the beginning.
 */
export const getOutcomes: API.PaginatedOperationMethod<
  GetOutcomesRequest,
  GetOutcomesResult,
  GetOutcomesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(177) as any as S.Schema<GetOutcomesRequest>,
  output: __S(178) as any as S.Schema<GetOutcomesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOutcomes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get all rules for a detector (paginated) if `ruleId` and `ruleVersion` are not specified. Gets all rules for the detector and the `ruleId` if present (paginated). Gets a specific rule if both the `ruleId` and the `ruleVersion` are specified.
 *
 * This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.
 */
export const getRules: API.PaginatedOperationMethod<
  GetRulesRequest,
  GetRulesResult,
  GetRulesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(179) as any as S.Schema<GetRulesRequest>,
  output: __S(182) as any as S.Schema<GetRulesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetVariablesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all of the variables or the specific variable. This is a
 * paginated API. Providing null `maxSizePerPage` results in retrieving maximum of
 * 100 records per page. If you provide `maxSizePerPage` the value must be between
 * 50 and 100. To get the next page result, a provide a pagination token from
 * `GetVariablesResult` as part of your request. Null pagination token
 * fetches the records from the beginning.
 */
export const getVariables: API.PaginatedOperationMethod<
  GetVariablesRequest,
  GetVariablesResult,
  GetVariablesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183) as any as S.Schema<GetVariablesRequest>,
  output: __S(184) as any as S.Schema<GetVariablesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVariables",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEventPredictionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period.
 * If filter is not specified, the most recent prediction is returned.
 *
 * For example, the following filter lists all past predictions for `xyz` event type -
 * {
 * "eventType":{
 * "value": "xyz" }"
 * }
 *
 * This is a paginated API. If you provide a null `maxResults`, this action will retrieve a maximum of 10 records per page.
 * If you provide a `maxResults`, the value must be between 50 and 100. To get the next page results, provide
 * the `nextToken` from the response as part of your request. A null `nextToken` fetches the records from the beginning.
 */
export const listEventPredictions: API.PaginatedOperationMethod<
  ListEventPredictionsRequest,
  ListEventPredictionsResult,
  ListEventPredictionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(186) as any as S.Schema<ListEventPredictionsRequest>,
  output: __S(189) as any as S.Schema<ListEventPredictionsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventPredictions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the
 * response as part of your request. A null pagination token
 * fetches the records from the beginning.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(190) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(191) as any as S.Schema<ListTagsForResourceResult>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutDetectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a detector.
 */
export const putDetector: API.OperationMethod<
  PutDetectorRequest,
  PutDetectorResult,
  PutDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<PutDetectorRequest>,
  output: __S(28) as any as S.Schema<PutDetectorResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDetector",
}));

export type PutEntityTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.
 */
export const putEntityType: API.OperationMethod<
  PutEntityTypeRequest,
  PutEntityTypeResult,
  PutEntityTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193) as any as S.Schema<PutEntityTypeRequest>,
  output: __S(28) as any as S.Schema<PutEntityTypeResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEntityType",
}));

export type PutEventTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.
 */
export const putEventType: API.OperationMethod<
  PutEventTypeRequest,
  PutEventTypeResult,
  PutEventTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194) as any as S.Schema<PutEventTypeRequest>,
  output: __S(28) as any as S.Schema<PutEventTypeResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEventType",
}));

export type PutExternalModelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.
 */
export const putExternalModel: API.OperationMethod<
  PutExternalModelRequest,
  PutExternalModelResult,
  PutExternalModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195) as any as S.Schema<PutExternalModelRequest>,
  output: __S(46) as any as S.Schema<PutExternalModelResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutExternalModel",
}));

export type PutKMSEncryptionKeyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.
 */
export const putKMSEncryptionKey: API.OperationMethod<
  PutKMSEncryptionKeyRequest,
  PutKMSEncryptionKeyResult,
  PutKMSEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196) as any as S.Schema<PutKMSEncryptionKeyRequest>,
  output: __S(16) as any as S.Schema<PutKMSEncryptionKeyResult>,
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
  operationName: "PutKMSEncryptionKey",
}));

export type PutLabelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.
 */
export const putLabel: API.OperationMethod<
  PutLabelRequest,
  PutLabelResult,
  PutLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(197) as any as S.Schema<PutLabelRequest>,
  output: __S(28) as any as S.Schema<PutLabelResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLabel",
}));

export type PutOutcomeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates an outcome.
 */
export const putOutcome: API.OperationMethod<
  PutOutcomeRequest,
  PutOutcomeResult,
  PutOutcomeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198) as any as S.Schema<PutOutcomeRequest>,
  output: __S(28) as any as S.Schema<PutOutcomeResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutOutcome",
}));

export type SendEventError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use `SendEvent` to upload a historical dataset, which you can then later use to train a model.
 */
export const sendEvent: API.OperationMethod<
  SendEventRequest,
  SendEventResult,
  SendEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199) as any as S.Schema<SendEventRequest>,
  output: __S(28) as any as S.Schema<SendEventResult>,
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
  operationName: "SendEvent",
}));

export type TagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResult,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<TagResourceRequest>,
  output: __S(28) as any as S.Schema<TagResourceResult>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResult,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(201) as any as S.Schema<UntagResourceRequest>,
  output: __S(28) as any as S.Schema<UntagResourceResult>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDetectorVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a `DRAFT` detector version.
 */
export const updateDetectorVersion: API.OperationMethod<
  UpdateDetectorVersionRequest,
  UpdateDetectorVersionResult,
  UpdateDetectorVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202) as any as S.Schema<UpdateDetectorVersionRequest>,
  output: __S(16) as any as S.Schema<UpdateDetectorVersionResult>,
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
  operationName: "UpdateDetectorVersion",
}));

export type UpdateDetectorVersionMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the detector version's description. You can update the metadata for any detector version (`DRAFT, ACTIVE,` or
 * `INACTIVE`).
 */
export const updateDetectorVersionMetadata: API.OperationMethod<
  UpdateDetectorVersionMetadataRequest,
  UpdateDetectorVersionMetadataResult,
  UpdateDetectorVersionMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<UpdateDetectorVersionMetadataRequest>,
  output: __S(16) as any as S.Schema<UpdateDetectorVersionMetadataResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDetectorVersionMetadata",
}));

export type UpdateDetectorVersionStatusError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the detector version's status. You can perform the following promotions or
 * demotions using `UpdateDetectorVersionStatus`: `DRAFT` to `ACTIVE`, `ACTIVE` to `INACTIVE`, and `INACTIVE` to `ACTIVE`.
 */
export const updateDetectorVersionStatus: API.OperationMethod<
  UpdateDetectorVersionStatusRequest,
  UpdateDetectorVersionStatusResult,
  UpdateDetectorVersionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204) as any as S.Schema<UpdateDetectorVersionStatusRequest>,
  output: __S(16) as any as S.Schema<UpdateDetectorVersionStatusResult>,
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
  operationName: "UpdateDetectorVersionStatus",
}));

export type UpdateEventLabelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified event with a new label.
 */
export const updateEventLabel: API.OperationMethod<
  UpdateEventLabelRequest,
  UpdateEventLabelResult,
  UpdateEventLabelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205) as any as S.Schema<UpdateEventLabelRequest>,
  output: __S(46) as any as S.Schema<UpdateEventLabelResult>,
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
  operationName: "UpdateEventLabel",
}));

export type UpdateListError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a list.
 */
export const updateList: API.OperationMethod<
  UpdateListRequest,
  UpdateListResult,
  UpdateListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206) as any as S.Schema<UpdateListRequest>,
  output: __S(28) as any as S.Schema<UpdateListResult>,
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
  operationName: "UpdateList",
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
 * Updates model description.
 */
export const updateModel: API.OperationMethod<
  UpdateModelRequest,
  UpdateModelResult,
  UpdateModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207) as any as S.Schema<UpdateModelRequest>,
  output: __S(28) as any as S.Schema<UpdateModelResult>,
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

export type UpdateModelVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.
 */
export const updateModelVersion: API.OperationMethod<
  UpdateModelVersionRequest,
  UpdateModelVersionResult,
  UpdateModelVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208) as any as S.Schema<UpdateModelVersionRequest>,
  output: __S(37) as any as S.Schema<UpdateModelVersionResult>,
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
  operationName: "UpdateModelVersion",
}));

export type UpdateModelVersionStatusError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of a model version.
 *
 * You can perform the following status updates:
 *
 * - Change the `TRAINING_IN_PROGRESS` status to `TRAINING_CANCELLED`.
 *
 * - Change the `TRAINING_COMPLETE` status to `ACTIVE`.
 *
 * - Change `ACTIVE` to `INACTIVE`.
 */
export const updateModelVersionStatus: API.OperationMethod<
  UpdateModelVersionStatusRequest,
  UpdateModelVersionStatusResult,
  UpdateModelVersionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209) as any as S.Schema<UpdateModelVersionStatusRequest>,
  output: __S(16) as any as S.Schema<UpdateModelVersionStatusResult>,
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
  operationName: "UpdateModelVersionStatus",
}));

export type UpdateRuleMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a rule's metadata. The description attribute can be updated.
 */
export const updateRuleMetadata: API.OperationMethod<
  UpdateRuleMetadataRequest,
  UpdateRuleMetadataResult,
  UpdateRuleMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210) as any as S.Schema<UpdateRuleMetadataRequest>,
  output: __S(56) as any as S.Schema<UpdateRuleMetadataResult>,
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
  operationName: "UpdateRuleMetadata",
}));

export type UpdateRuleVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...).
 */
export const updateRuleVersion: API.OperationMethod<
  UpdateRuleVersionRequest,
  UpdateRuleVersionResult,
  UpdateRuleVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211) as any as S.Schema<UpdateRuleVersionRequest>,
  output: __S(39) as any as S.Schema<UpdateRuleVersionResult>,
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
  operationName: "UpdateRuleVersion",
}));

export type UpdateVariableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a variable.
 */
export const updateVariable: API.OperationMethod<
  UpdateVariableRequest,
  UpdateVariableResult,
  UpdateVariableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212) as any as S.Schema<UpdateVariableRequest>,
  output: __S(28) as any as S.Schema<UpdateVariableResult>,
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
  operationName: "UpdateVariable",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          dataType: S.optional(S.String),
          dataSource: S.optional(S.String),
          defaultValue: S.optional(S.String),
          description: S.optional(S.String),
          variableType: S.optional(S.String),
        }),
      ).annotate({ identifier: "VariableEntry" });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(2));
    case 4:
      return S.suspend(() =>
        S.Struct({ variableEntries: __S(1), tags: S.optional(__S(3)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchCreateVariableRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          code: S.optional(S.Number),
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateVariableError",
      });
    case 6:
      return S.Array(__S(5));
    case 7:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(6)) }).pipe(ns)).annotate({
        identifier: "BatchCreateVariableResult",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ names: __S(8) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetVariableRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          dataType: S.optional(S.String),
          dataSource: S.optional(S.String),
          defaultValue: S.optional(S.String),
          description: S.optional(S.String),
          variableType: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Variable" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          code: S.optional(S.Number),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchGetVariableError" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          variables: S.optional(__S(11)),
          errors: S.optional(__S(13)),
        }).pipe(ns),
      ).annotate({ identifier: "BatchGetVariableResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ jobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelBatchImportJobRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CancelBatchImportJobResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CancelBatchPredictionJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          inputPath: S.String,
          outputPath: S.String,
          eventTypeName: S.String,
          iamRoleArn: S.String,
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBatchImportJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          inputPath: S.String,
          outputPath: S.String,
          eventTypeName: S.String,
          detectorName: S.String,
          detectorVersion: S.optional(S.String),
          iamRoleArn: S.String,
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBatchPredictionJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ detectorId: S.String, ruleId: S.String, ruleVersion: S.String }),
      ).annotate({ identifier: "Rule" });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          modelVersionNumber: S.String,
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelVersion" });
    case 7:
      return S.Array(__S(22));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          description: S.optional(S.String),
          externalModelEndpoints: S.optional(__S(8)),
          rules: __S(21),
          modelVersions: S.optional(__S(23)),
          ruleExecutionMode: S.optional(S.String),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDetectorVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.optional(S.String),
          detectorVersionId: S.optional(S.String),
          status: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateDetectorVersionResult",
      });
    case 2:
      return S.Array(SensitiveString);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          elements: S.optional(__S(26)),
          variableType: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateListRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateListResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          description: S.optional(S.String),
          eventTypeName: S.String,
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateModelRequest" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(8).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          labelMapper: S.optional(__S(30)),
          unlabeledEventsTreatment: S.optional(S.String),
        }),
      ).annotate({ identifier: "LabelSchema" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ modelVariables: __S(8), labelSchema: S.optional(__S(31)) }),
      ).annotate({ identifier: "TrainingDataSchema" });
    case 1:
      return S.suspend(() =>
        S.Struct({ dataLocation: S.String, dataAccessRoleArn: S.String }),
      ).annotate({ identifier: "ExternalEventsDetail" });
    case 2:
      return S.suspend(() => S.Struct({ startTime: S.String, endTime: S.String })).annotate({
        identifier: "IngestedEventsTimeWindow",
      });
    case 3:
      return S.suspend(() => S.Struct({ ingestedEventsTimeWindow: __S(34) })).annotate({
        identifier: "IngestedEventsDetail",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          trainingDataSource: S.String,
          trainingDataSchema: __S(32),
          externalEventsDetail: S.optional(__S(33)),
          ingestedEventsDetail: S.optional(__S(35)),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateModelVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(S.String),
          modelVersionNumber: S.optional(S.String),
          status: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CreateModelVersionResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          detectorId: S.String,
          description: S.optional(S.String),
          expression: SensitiveString,
          language: S.String,
          outcomes: __S(8),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleRequest" });
    case 7:
      return S.suspend(() => S.Struct({ rule: S.optional(__S(20)) }).pipe(ns)).annotate({
        identifier: "CreateRuleResult",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          dataType: S.String,
          dataSource: S.String,
          defaultValue: S.String,
          description: S.optional(S.String),
          variableType: S.optional(S.String),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateVariableRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteBatchImportJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteBatchPredictionJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ detectorId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDetectorRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ detectorId: S.String, detectorVersionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDetectorVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEntityTypeRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteEntityTypeResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          eventId: S.String,
          eventTypeName: S.String,
          deleteAuditHistory: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteEventRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ eventTypeName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEventsByEventTypeRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          eventTypeName: S.optional(S.String),
          eventsDeletionStatus: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteEventsByEventTypeResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEventTypeRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ modelEndpoint: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteExternalModelRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLabelRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteListRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ modelId: S.String, modelType: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteModelRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          modelVersionNumber: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteModelVersionRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteModelVersionResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteOutcomeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ rule: __S(20) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRuleRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteVariableRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeDetectorRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          detectorVersionId: S.optional(S.String),
          status: S.optional(S.String),
          description: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "DetectorVersionSummary" });
    case 6:
      return S.Array(__S(61));
    case 7:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.optional(S.String),
          detectorVersionSummaries: S.optional(__S(62)),
          nextToken: S.optional(S.String),
          arn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeDetectorResult" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelVersionNumber: S.optional(S.String),
          modelType: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeModelVersionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(S.String),
          content: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "FileValidationMessage" });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          fieldName: S.optional(S.String),
          identifier: S.optional(S.String),
          title: S.optional(S.String),
          content: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "FieldValidationMessage" });
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() =>
        S.Struct({
          fileLevelMessages: S.optional(__S(66)),
          fieldLevelMessages: S.optional(__S(68)),
        }),
      ).annotate({ identifier: "DataValidationMetrics" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          fpr: S.optional(S.Number),
          precision: S.optional(S.Number),
          tpr: S.optional(S.Number),
          threshold: S.optional(S.Number),
        }),
      ).annotate({ identifier: "MetricDataPoint" });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ auc: S.optional(S.Number), metricDataPoints: S.optional(__S(71)) }),
      ).annotate({ identifier: "TrainingMetrics" });
    case 1:
      return S.suspend(() =>
        S.Struct({ variableName: S.String, variableType: S.String, variableImportance: S.Number }),
      ).annotate({ identifier: "LogOddsMetric" });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() => S.Struct({ logOddsMetrics: S.optional(__S(74)) })).annotate({
        identifier: "VariableImportanceMetrics",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dataValidationMetrics: S.optional(__S(69)),
          trainingMetrics: S.optional(__S(72)),
          variableImportanceMetrics: S.optional(__S(75)),
        }),
      ).annotate({ identifier: "TrainingResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ lowerBoundValue: S.Number, upperBoundValue: S.Number }),
      ).annotate({ identifier: "UncertaintyRange" });
    case 6:
      return S.suspend(() =>
        S.Struct({ auc: S.optional(S.Number), uncertaintyRange: S.optional(__S(77)) }),
      ).annotate({ identifier: "OFIModelPerformance" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          metricDataPoints: S.optional(__S(71)),
          modelPerformance: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "OFITrainingMetricsValue" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cr: S.optional(S.Number),
          adr: S.optional(S.Number),
          threshold: S.optional(S.Number),
          atodr: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ATIMetricDataPoint" });
    case 1:
      return S.Array(__S(80));
    case 2:
      return S.suspend(() => S.Struct({ asi: S.optional(S.Number) })).annotate({
        identifier: "ATIModelPerformance",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          metricDataPoints: S.optional(__S(81)),
          modelPerformance: S.optional(__S(82)),
        }),
      ).annotate({ identifier: "ATITrainingMetricsValue" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ofi: S.optional(__S(79)),
          tfi: S.optional(__S(79)),
          ati: S.optional(__S(83)),
        }),
      ).annotate({ identifier: "TrainingMetricsV2" });
    case 5:
      return S.suspend(() =>
        S.Struct({ variableNames: __S(8), aggregatedVariablesImportance: S.Number }),
      ).annotate({ identifier: "AggregatedLogOddsMetric" });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() => S.Struct({ logOddsMetrics: S.optional(__S(86)) })).annotate({
        identifier: "AggregatedVariablesImportanceMetrics",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataValidationMetrics: S.optional(__S(69)),
          trainingMetricsV2: S.optional(__S(84)),
          variableImportanceMetrics: S.optional(__S(75)),
          aggregatedVariablesImportanceMetrics: S.optional(__S(87)),
        }),
      ).annotate({ identifier: "TrainingResultV2" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(S.String),
          modelVersionNumber: S.optional(S.String),
          status: S.optional(S.String),
          trainingDataSource: S.optional(S.String),
          trainingDataSchema: S.optional(__S(32)),
          externalEventsDetail: S.optional(__S(33)),
          ingestedEventsDetail: S.optional(__S(35)),
          trainingResult: S.optional(__S(76)),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
          trainingResultV2: S.optional(__S(88)),
        }),
      ).annotate({ identifier: "ModelVersionDetail" });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelVersionDetails: S.optional(__S(90)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeModelVersionsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetBatchImportJobsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          status: S.optional(S.String),
          failureReason: S.optional(S.String),
          startTime: S.optional(S.String),
          completionTime: S.optional(S.String),
          inputPath: S.optional(S.String),
          outputPath: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          iamRoleArn: S.optional(S.String),
          arn: S.optional(S.String),
          processedRecordsCount: S.optional(S.Number),
          failedRecordsCount: S.optional(S.Number),
          totalRecordsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BatchImport" });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({
          batchImports: S.optional(__S(94)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetBatchImportJobsResult" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetBatchPredictionJobsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          status: S.optional(S.String),
          failureReason: S.optional(S.String),
          startTime: S.optional(S.String),
          completionTime: S.optional(S.String),
          lastHeartbeatTime: S.optional(S.String),
          inputPath: S.optional(S.String),
          outputPath: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          detectorName: S.optional(S.String),
          detectorVersion: S.optional(S.String),
          iamRoleArn: S.optional(S.String),
          arn: S.optional(S.String),
          processedRecordsCount: S.optional(S.Number),
          totalRecordsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BatchPrediction" });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.suspend(() =>
        S.Struct({
          batchPredictions: S.optional(__S(98)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetBatchPredictionJobsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ eventTypeName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDeleteEventsByEventTypeStatusRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventTypeName: S.optional(S.String),
          eventsDeletionStatus: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDeleteEventsByEventTypeStatusResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetDetectorsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.optional(S.String),
          description: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Detector" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103));
    case 1:
      return S.suspend(() =>
        S.Struct({ detectors: S.optional(__S(104)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetDetectorsResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({ detectorId: S.String, detectorVersionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDetectorVersionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.optional(S.String),
          detectorVersionId: S.optional(S.String),
          description: S.optional(S.String),
          externalModelEndpoints: S.optional(__S(8)),
          modelVersions: S.optional(__S(23)),
          rules: S.optional(__S(21)),
          status: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          ruleExecutionMode: S.optional(S.String),
          arn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetDetectorVersionResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetEntityTypesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EntityType" });
    case 6:
      return S.Array(__S(109));
    case 7:
      return S.suspend(() =>
        S.Struct({ entityTypes: S.optional(__S(110)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetEntityTypesResult" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ eventId: S.String, eventTypeName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEventRequest" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({ entityType: S.String, entityId: S.String })).annotate({
        identifier: "Entity",
      });
    case 3:
      return S.Array(__S(114));
    case 4:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          eventTimestamp: S.optional(S.String),
          eventVariables: S.optional(__S(113)),
          currentLabel: S.optional(S.String),
          labelTimestamp: S.optional(S.String),
          entities: S.optional(__S(115)),
        }),
      ).annotate({ identifier: "Event" });
    case 5:
      return S.suspend(() => S.Struct({ event: S.optional(__S(116)) }).pipe(ns)).annotate({
        identifier: "GetEventResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ byteBuffer: S.optional(T.Blob), contentType: S.optional(S.String) }),
      ).annotate({ identifier: "ModelEndpointDataBlob" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(118).pipe(S.optional));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          detectorVersionId: S.optional(S.String),
          eventId: S.String,
          eventTypeName: S.String,
          entities: __S(115),
          eventTimestamp: S.String,
          eventVariables: __S(113),
          externalModelEndpointDataBlobs: S.optional(__S(119)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetEventPredictionRequest",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelVersion: S.optional(__S(22)),
          scores: S.optional(__S(121)),
        }),
      ).annotate({ identifier: "ModelScores" });
    case 3:
      return S.Array(__S(122));
    case 4:
      return S.suspend(() =>
        S.Struct({ ruleId: S.optional(S.String), outcomes: S.optional(__S(8)) }),
      ).annotate({ identifier: "RuleResult" });
    case 5:
      return S.Array(__S(124));
    case 6:
      return S.suspend(() =>
        S.Struct({ modelEndpoint: S.optional(S.String), modelSource: S.optional(S.String) }),
      ).annotate({ identifier: "ExternalModelSummary" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          externalModel: S.optional(__S(126)),
          outputs: S.optional(__S(127)),
        }),
      ).annotate({ identifier: "ExternalModelOutputs" });
    case 1:
      return S.Array(__S(128));
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelScores: S.optional(__S(123)),
          ruleResults: S.optional(__S(125)),
          externalModelOutputs: S.optional(__S(129)),
        }).pipe(ns),
      ).annotate({ identifier: "GetEventPredictionResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          eventId: S.String,
          eventTypeName: S.String,
          detectorId: S.String,
          detectorVersionId: S.String,
          predictionTimestamp: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetEventPredictionMetadataRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(SensitiveString),
          value: S.optional(SensitiveString),
          source: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "EventVariableSummary" });
    case 5:
      return S.Array(__S(132));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.optional(S.String),
          ruleVersion: S.optional(S.String),
          expression: S.optional(SensitiveString),
          expressionWithValues: S.optional(SensitiveString),
          outcomes: S.optional(__S(8)),
          evaluated: S.optional(S.Boolean),
          matched: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EvaluatedRule" });
    case 7:
      return S.Array(__S(134));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          eventVariableName: S.optional(S.String),
          relativeImpact: S.optional(S.String),
          logOddsImpact: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "VariableImpactExplanation",
      });
    case 1:
      return S.Array(__S(136));
    case 2:
      return S.suspend(() =>
        S.Struct({
          eventVariableNames: S.optional(__S(8)),
          relativeImpact: S.optional(S.String),
          logOddsImpact: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AggregatedVariablesImpactExplanation",
      });
    case 3:
      return S.Array(__S(138));
    case 4:
      return S.suspend(() =>
        S.Struct({
          variableImpactExplanations: S.optional(__S(137)),
          aggregatedVariablesImpactExplanations: S.optional(__S(139)),
        }),
      ).annotate({ identifier: "PredictionExplanations" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          outputVariableName: S.optional(S.String),
          evaluationScore: S.optional(S.String),
          predictionExplanations: S.optional(__S(140)),
        }),
      ).annotate({ identifier: "ModelVersionEvaluation" });
    case 6:
      return S.Array(__S(141));
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelVersion: S.optional(S.String),
          modelType: S.optional(S.String),
          evaluations: S.optional(__S(142)),
        }),
      ).annotate({ identifier: "EvaluatedModelVersion" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143));
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelEndpoint: S.optional(S.String),
          useEventVariables: S.optional(S.Boolean),
          inputVariables: S.optional(__S(127)),
          outputVariables: S.optional(__S(127)),
        }),
      ).annotate({ identifier: "EvaluatedExternalModel" });
    case 2:
      return S.Array(__S(145));
    case 3:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          entityId: S.optional(S.String),
          entityType: S.optional(S.String),
          eventTimestamp: S.optional(S.String),
          detectorId: S.optional(S.String),
          detectorVersionId: S.optional(S.String),
          detectorVersionStatus: S.optional(S.String),
          eventVariables: S.optional(__S(133)),
          rules: S.optional(__S(135)),
          ruleExecutionMode: S.optional(S.String),
          outcomes: S.optional(__S(8)),
          evaluatedModelVersions: S.optional(__S(144)),
          evaluatedExternalModels: S.optional(__S(146)),
          predictionTimestamp: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetEventPredictionMetadataResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetEventTypesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          numberOfEvents: S.optional(S.Number),
          eventDataSizeInBytes: S.optional(S.Number),
          leastRecentEvent: S.optional(S.String),
          mostRecentEvent: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "IngestedEventStatistics" });
    case 6:
      return S.suspend(() => S.Struct({ eventBridgeEnabled: S.Boolean })).annotate({
        identifier: "EventOrchestration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          eventVariables: S.optional(__S(8)),
          labels: S.optional(__S(8)),
          entityTypes: S.optional(__S(8)),
          eventIngestion: S.optional(S.String),
          ingestedEventStatistics: S.optional(__S(149)),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
          eventOrchestration: S.optional(__S(150)),
        }),
      ).annotate({ identifier: "EventType" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151));
    case 1:
      return S.suspend(() =>
        S.Struct({ eventTypes: S.optional(__S(152)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetEventTypesResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelEndpoint: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetExternalModelsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          eventTypeName: S.optional(S.String),
          format: S.optional(S.String),
          useEventVariables: S.Boolean,
          jsonInputTemplate: S.optional(S.String),
          csvInputTemplate: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelInputConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          format: S.String,
          jsonKeyToVariableMap: S.optional(__S(127)),
          csvIndexToVariableMap: S.optional(__S(127)),
        }),
      ).annotate({ identifier: "ModelOutputConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelEndpoint: S.optional(S.String),
          modelSource: S.optional(S.String),
          invokeModelEndpointRoleArn: S.optional(S.String),
          inputConfiguration: S.optional(__S(155)),
          outputConfiguration: S.optional(__S(156)),
          modelEndpointStatus: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExternalModel" });
    case 6:
      return S.Array(__S(157));
    case 7:
      return S.suspend(() =>
        S.Struct({
          externalModels: S.optional(__S(158)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetExternalModelsResult" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetKMSEncryptionKeyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ kmsEncryptionKeyArn: S.optional(S.String) })).annotate({
        identifier: "KMSKey",
      });
    case 2:
      return S.suspend(() => S.Struct({ kmsKey: S.optional(__S(161)) }).pipe(ns)).annotate({
        identifier: "GetKMSEncryptionKeyResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetLabelsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ labels: S.optional(__S(110)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetLabelsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetListElementsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ elements: S.optional(__S(26)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetListElementsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetListsMetadataRequest" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          variableType: S.optional(S.String),
          createdTime: S.optional(S.String),
          updatedTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AllowDenyList" });
    case 1:
      return S.Array(__S(168));
    case 2:
      return S.suspend(() =>
        S.Struct({ lists: S.optional(__S(169)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetListsMetadataResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetModelsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(S.String),
          description: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          createdTime: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Model" });
    case 5:
      return S.Array(__S(172));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), models: S.optional(__S(173)) }).pipe(ns),
      ).annotate({ identifier: "GetModelsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          modelVersionNumber: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetModelVersionRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(S.String),
          modelVersionNumber: S.optional(S.String),
          trainingDataSource: S.optional(S.String),
          trainingDataSchema: S.optional(__S(32)),
          externalEventsDetail: S.optional(__S(33)),
          ingestedEventsDetail: S.optional(__S(35)),
          status: S.optional(S.String),
          arn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetModelVersionResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetOutcomesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ outcomes: S.optional(__S(110)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetOutcomesResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.optional(S.String),
          detectorId: S.String,
          ruleVersion: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetRulesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.optional(S.String),
          description: S.optional(S.String),
          detectorId: S.optional(S.String),
          ruleVersion: S.optional(S.String),
          expression: S.optional(SensitiveString),
          language: S.optional(S.String),
          outcomes: S.optional(__S(8)),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleDetail" });
    case 5:
      return S.Array(__S(180));
    case 6:
      return S.suspend(() =>
        S.Struct({ ruleDetails: S.optional(__S(181)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetRulesResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetVariablesRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ variables: S.optional(__S(11)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetVariablesResult" });
    case 1:
      return S.suspend(() => S.Struct({ value: S.optional(S.String) })).annotate({
        identifier: "FilterCondition",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(__S(185)),
          eventType: S.optional(__S(185)),
          detectorId: S.optional(__S(185)),
          detectorVersionId: S.optional(__S(185)),
          predictionTimeRange: S.optional(__S(34)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEventPredictionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          eventTimestamp: S.optional(S.String),
          predictionTimestamp: S.optional(S.String),
          detectorId: S.optional(S.String),
          detectorVersionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventPredictionSummary" });
    case 4:
      return S.Array(__S(187));
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventPredictionSummaries: S.optional(__S(188)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListEventPredictionsResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceARN: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ tags: S.optional(__S(3)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListTagsForResourceResult",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          description: S.optional(S.String),
          eventTypeName: S.String,
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutDetectorRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutEntityTypeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          eventVariables: __S(8),
          labels: S.optional(__S(8)),
          entityTypes: __S(8),
          eventIngestion: S.optional(S.String),
          tags: S.optional(__S(3)),
          eventOrchestration: S.optional(__S(150)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutEventTypeRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelEndpoint: S.String,
          modelSource: S.String,
          invokeModelEndpointRoleArn: S.String,
          inputConfiguration: __S(155),
          outputConfiguration: __S(156),
          modelEndpointStatus: S.String,
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutExternalModelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ kmsEncryptionKeyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutKMSEncryptionKeyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutLabelRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutOutcomeRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          eventId: S.String,
          eventTypeName: S.String,
          eventTimestamp: S.String,
          eventVariables: __S(113),
          assignedLabel: S.optional(S.String),
          labelTimestamp: S.optional(S.String),
          entities: __S(115),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendEventRequest" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tags: __S(3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tagKeys: __S(8) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          detectorVersionId: S.String,
          externalModelEndpoints: __S(8),
          rules: __S(21),
          description: S.optional(S.String),
          modelVersions: S.optional(__S(23)),
          ruleExecutionMode: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateDetectorVersionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ detectorId: S.String, detectorVersionId: S.String, description: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateDetectorVersionMetadataRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          detectorVersionId: S.String,
          status: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateDetectorVersionStatusRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventId: S.String,
          eventTypeName: S.String,
          assignedLabel: S.String,
          labelTimestamp: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateEventLabelRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          elements: S.optional(__S(26)),
          description: S.optional(S.String),
          updateMode: S.optional(S.String),
          variableType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateListRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          description: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateModelRequest" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          majorVersionNumber: S.String,
          externalEventsDetail: S.optional(__S(33)),
          ingestedEventsDetail: S.optional(__S(35)),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateModelVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: S.String,
          modelVersionNumber: S.String,
          status: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateModelVersionStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ rule: __S(20), description: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateRuleMetadataRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          rule: __S(20),
          description: S.optional(S.String),
          expression: SensitiveString,
          language: S.String,
          outcomes: __S(8),
          tags: S.optional(__S(3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRuleVersionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          defaultValue: S.optional(S.String),
          description: S.optional(S.String),
          variableType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateVariableRequest" });
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
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
  }
}
