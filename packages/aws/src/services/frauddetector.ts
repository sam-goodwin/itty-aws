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
const VariableEntry = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<VariableEntry>;
export type VariableEntryList = VariableEntry[];
const VariableEntryList = /*@__PURE__*/ __L.at(__c0, 1);
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 3);
export interface BatchCreateVariableRequest {
  variableEntries: VariableEntry[];
  tags?: Tag[];
}
const BatchCreateVariableRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<BatchCreateVariableRequest>;
export type Integer2 = number;
export interface BatchCreateVariableError_ {
  name?: string;
  code?: number;
  message?: string;
}
const BatchCreateVariableError_ = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchCreateVariableError_>;
export type BatchCreateVariableErrorList = BatchCreateVariableError_[];
const BatchCreateVariableErrorList = /*@__PURE__*/ __L.at(__c0, 6);
export interface BatchCreateVariableResult {
  errors?: BatchCreateVariableError_[];
}
const BatchCreateVariableResult = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchCreateVariableResult>;
export type NameList = string[];
const NameList = /*@__PURE__*/ __L.at(__c1, 0);
export interface BatchGetVariableRequest {
  names: string[];
}
const BatchGetVariableRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchGetVariableRequest>;
export type DataType = "STRING" | "INTEGER" | "FLOAT" | "BOOLEAN" | "DATETIME" | (string & {});
const DataType = S.String;

export type DataSource = "EVENT" | "MODEL_SCORE" | "EXTERNAL_MODEL_SCORE" | (string & {});
const DataSource = S.String;

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
const Variable = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<Variable>;
export type VariableList = Variable[];
const VariableList = /*@__PURE__*/ __L.at(__c1, 3);
export interface BatchGetVariableError_ {
  name?: string;
  code?: number;
  message?: string;
}
const BatchGetVariableError_ = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchGetVariableError_>;
export type BatchGetVariableErrorList = BatchGetVariableError_[];
const BatchGetVariableErrorList = /*@__PURE__*/ __L.at(__c1, 5);
export interface BatchGetVariableResult {
  variables?: Variable[];
  errors?: BatchGetVariableError_[];
}
const BatchGetVariableResult = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<BatchGetVariableResult>;
export type Identifier = string;
export interface CancelBatchImportJobRequest {
  jobId: string;
}
const CancelBatchImportJobRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CancelBatchImportJobRequest>;
export interface CancelBatchImportJobResult {}
const CancelBatchImportJobResult = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CancelBatchImportJobResult>;
export interface CancelBatchPredictionJobRequest {
  jobId: string;
}
const CancelBatchPredictionJobRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CancelBatchPredictionJobRequest>;
export interface CancelBatchPredictionJobResult {}
const CancelBatchPredictionJobResult =
  CancelBatchImportJobResult as any as S.Schema<CancelBatchPredictionJobResult>;
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
const CreateBatchImportJobRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateBatchImportJobRequest>;
export interface CreateBatchImportJobResult {}
const CreateBatchImportJobResult =
  CancelBatchImportJobResult as any as S.Schema<CreateBatchImportJobResult>;
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
const CreateBatchPredictionJobRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateBatchPredictionJobRequest>;
export interface CreateBatchPredictionJobResult {}
const CreateBatchPredictionJobResult =
  CancelBatchImportJobResult as any as S.Schema<CreateBatchPredictionJobResult>;
export type Description = string;
export type ListOfStrings = string[];
const ListOfStrings = NameList as any as S.Schema<ListOfStrings>;
export interface Rule {
  detectorId: string;
  ruleId: string;
  ruleVersion: string;
}
const Rule = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<Rule>;
export type RuleList = Rule[];
const RuleList = /*@__PURE__*/ __L.at(__c2, 5);
export type ModelIdentifier = string;
export type ModelTypeEnum =
  | "ONLINE_FRAUD_INSIGHTS"
  | "TRANSACTION_FRAUD_INSIGHTS"
  | "ACCOUNT_TAKEOVER_INSIGHTS"
  | (string & {});
const ModelTypeEnum = S.String;

export type FloatVersionString = string;
export interface ModelVersion {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
  arn?: string;
}
const ModelVersion = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<ModelVersion>;
export type ListOfModelVersions = ModelVersion[];
const ListOfModelVersions = /*@__PURE__*/ __L.at(__c2, 7);
export type RuleExecutionMode = "ALL_MATCHED" | "FIRST_MATCHED" | (string & {});
const RuleExecutionMode = S.String;

export interface CreateDetectorVersionRequest {
  detectorId: string;
  description?: string;
  externalModelEndpoints?: string[];
  rules: Rule[];
  modelVersions?: ModelVersion[];
  ruleExecutionMode?: RuleExecutionMode;
  tags?: Tag[];
}
const CreateDetectorVersionRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateDetectorVersionRequest>;
export type DetectorVersionStatus = "DRAFT" | "ACTIVE" | "INACTIVE" | (string & {});
const DetectorVersionStatus = S.String;

export interface CreateDetectorVersionResult {
  detectorId?: string;
  detectorVersionId?: string;
  status?: DetectorVersionStatus;
}
const CreateDetectorVersionResult = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateDetectorVersionResult>;
export type NoDashIdentifier = string;
export type Elements = string | redacted.Redacted<string>;
export type ElementsList = (string | redacted.Redacted<string>)[];
const ElementsList = /*@__PURE__*/ __L.at(__c3, 2);
export type VariableType = string;
export interface CreateListRequest {
  name: string;
  elements?: (string | redacted.Redacted<string>)[];
  variableType?: string;
  description?: string;
  tags?: Tag[];
}
const CreateListRequest = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<CreateListRequest>;
export interface CreateListResult {}
const CreateListResult = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateListResult>;
export interface CreateModelRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  description?: string;
  eventTypeName: string;
  tags?: Tag[];
}
const CreateModelRequest = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CreateModelRequest>;
export interface CreateModelResult {}
const CreateModelResult = CreateListResult as any as S.Schema<CreateModelResult>;
export type TrainingDataSourceEnum = "EXTERNAL_EVENTS" | "INGESTED_EVENTS" | (string & {});
const TrainingDataSourceEnum = S.String;

export type LabelMapper = { [key: string]: string[] | undefined };
const LabelMapper = /*@__PURE__*/ __L.at(__c3, 6);
export type UnlabeledEventsTreatment = "IGNORE" | "FRAUD" | "LEGIT" | "AUTO" | (string & {});
const UnlabeledEventsTreatment = S.String;

export interface LabelSchema {
  labelMapper?: { [key: string]: string[] | undefined };
  unlabeledEventsTreatment?: UnlabeledEventsTreatment;
}
const LabelSchema = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<LabelSchema>;
export interface TrainingDataSchema {
  modelVariables: string[];
  labelSchema?: LabelSchema;
}
const TrainingDataSchema = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<TrainingDataSchema>;
export interface ExternalEventsDetail {
  dataLocation: string;
  dataAccessRoleArn: string;
}
const ExternalEventsDetail = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<ExternalEventsDetail>;
export interface IngestedEventsTimeWindow {
  startTime: string;
  endTime: string;
}
const IngestedEventsTimeWindow = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<IngestedEventsTimeWindow>;
export interface IngestedEventsDetail {
  ingestedEventsTimeWindow: IngestedEventsTimeWindow;
}
const IngestedEventsDetail = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<IngestedEventsDetail>;
export interface CreateModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  trainingDataSource: TrainingDataSourceEnum;
  trainingDataSchema: TrainingDataSchema;
  externalEventsDetail?: ExternalEventsDetail;
  ingestedEventsDetail?: IngestedEventsDetail;
  tags?: Tag[];
}
const CreateModelVersionRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateModelVersionRequest>;
export interface CreateModelVersionResult {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  status?: string;
}
const CreateModelVersionResult = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateModelVersionResult>;
export type RuleExpression = string | redacted.Redacted<string>;
export type Language = "DETECTORPL" | (string & {});
const Language = S.String;

export type NonEmptyListOfStrings = string[];
const NonEmptyListOfStrings = NameList as any as S.Schema<NonEmptyListOfStrings>;
export interface CreateRuleRequest {
  ruleId: string;
  detectorId: string;
  description?: string;
  expression: string | redacted.Redacted<string>;
  language: Language;
  outcomes: string[];
  tags?: Tag[];
}
const CreateRuleRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<CreateRuleRequest>;
export interface CreateRuleResult {
  rule?: Rule;
}
const CreateRuleResult = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<CreateRuleResult>;
export interface CreateVariableRequest {
  name: string;
  dataType: DataType;
  dataSource: DataSource;
  defaultValue: string;
  description?: string;
  variableType?: string;
  tags?: Tag[];
}
const CreateVariableRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<CreateVariableRequest>;
export interface CreateVariableResult {}
const CreateVariableResult = CreateListResult as any as S.Schema<CreateVariableResult>;
export interface DeleteBatchImportJobRequest {
  jobId: string;
}
const DeleteBatchImportJobRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteBatchImportJobRequest>;
export interface DeleteBatchImportJobResult {}
const DeleteBatchImportJobResult =
  CancelBatchImportJobResult as any as S.Schema<DeleteBatchImportJobResult>;
export interface DeleteBatchPredictionJobRequest {
  jobId: string;
}
const DeleteBatchPredictionJobRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteBatchPredictionJobRequest>;
export interface DeleteBatchPredictionJobResult {}
const DeleteBatchPredictionJobResult =
  CancelBatchImportJobResult as any as S.Schema<DeleteBatchPredictionJobResult>;
export interface DeleteDetectorRequest {
  detectorId: string;
}
const DeleteDetectorRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteDetectorRequest>;
export interface DeleteDetectorResult {}
const DeleteDetectorResult = CreateListResult as any as S.Schema<DeleteDetectorResult>;
export interface DeleteDetectorVersionRequest {
  detectorId: string;
  detectorVersionId: string;
}
const DeleteDetectorVersionRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteDetectorVersionRequest>;
export interface DeleteDetectorVersionResult {}
const DeleteDetectorVersionResult =
  CancelBatchImportJobResult as any as S.Schema<DeleteDetectorVersionResult>;
export interface DeleteEntityTypeRequest {
  name: string;
}
const DeleteEntityTypeRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DeleteEntityTypeRequest>;
export interface DeleteEntityTypeResult {}
const DeleteEntityTypeResult = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DeleteEntityTypeResult>;
export type DeleteAuditHistory = boolean;
export interface DeleteEventRequest {
  eventId: string;
  eventTypeName: string;
  deleteAuditHistory?: boolean;
}
const DeleteEventRequest = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<DeleteEventRequest>;
export interface DeleteEventResult {}
const DeleteEventResult = CreateListResult as any as S.Schema<DeleteEventResult>;
export interface DeleteEventsByEventTypeRequest {
  eventTypeName: string;
}
const DeleteEventsByEventTypeRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteEventsByEventTypeRequest>;
export interface DeleteEventsByEventTypeResult {
  eventTypeName?: string;
  eventsDeletionStatus?: string;
}
const DeleteEventsByEventTypeResult = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteEventsByEventTypeResult>;
export interface DeleteEventTypeRequest {
  name: string;
}
const DeleteEventTypeRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DeleteEventTypeRequest>;
export interface DeleteEventTypeResult {}
const DeleteEventTypeResult = CreateListResult as any as S.Schema<DeleteEventTypeResult>;
export type SageMakerEndpointIdentifier = string;
export interface DeleteExternalModelRequest {
  modelEndpoint: string;
}
const DeleteExternalModelRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DeleteExternalModelRequest>;
export interface DeleteExternalModelResult {}
const DeleteExternalModelResult =
  CancelBatchImportJobResult as any as S.Schema<DeleteExternalModelResult>;
export interface DeleteLabelRequest {
  name: string;
}
const DeleteLabelRequest = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<DeleteLabelRequest>;
export interface DeleteLabelResult {}
const DeleteLabelResult = CreateListResult as any as S.Schema<DeleteLabelResult>;
export interface DeleteListRequest {
  name: string;
}
const DeleteListRequest = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<DeleteListRequest>;
export interface DeleteListResult {}
const DeleteListResult = CreateListResult as any as S.Schema<DeleteListResult>;
export interface DeleteModelRequest {
  modelId: string;
  modelType: ModelTypeEnum;
}
const DeleteModelRequest = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<DeleteModelRequest>;
export interface DeleteModelResult {}
const DeleteModelResult = CreateListResult as any as S.Schema<DeleteModelResult>;
export interface DeleteModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
}
const DeleteModelVersionRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteModelVersionRequest>;
export interface DeleteModelVersionResult {}
const DeleteModelVersionResult = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteModelVersionResult>;
export interface DeleteOutcomeRequest {
  name: string;
}
const DeleteOutcomeRequest = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<DeleteOutcomeRequest>;
export interface DeleteOutcomeResult {}
const DeleteOutcomeResult = CreateListResult as any as S.Schema<DeleteOutcomeResult>;
export interface DeleteRuleRequest {
  rule: Rule;
}
const DeleteRuleRequest = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<DeleteRuleRequest>;
export interface DeleteRuleResult {}
const DeleteRuleResult = CreateListResult as any as S.Schema<DeleteRuleResult>;
export interface DeleteVariableRequest {
  name: string;
}
const DeleteVariableRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteVariableRequest>;
export interface DeleteVariableResult {}
const DeleteVariableResult = CreateListResult as any as S.Schema<DeleteVariableResult>;
export type DetectorVersionMaxResults = number;
export interface DescribeDetectorRequest {
  detectorId: string;
  nextToken?: string;
  maxResults?: number;
}
const DescribeDetectorRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DescribeDetectorRequest>;
export interface DetectorVersionSummary {
  detectorVersionId?: string;
  status?: DetectorVersionStatus;
  description?: string;
  lastUpdatedTime?: string;
}
const DetectorVersionSummary = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DetectorVersionSummary>;
export type DetectorVersionSummaryList = DetectorVersionSummary[];
const DetectorVersionSummaryList = /*@__PURE__*/ __L.at(__c7, 6);
export interface DescribeDetectorResult {
  detectorId?: string;
  detectorVersionSummaries?: DetectorVersionSummary[];
  nextToken?: string;
  arn?: string;
}
const DescribeDetectorResult = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeDetectorResult>;
export type ModelsMaxPageSize = number;
export interface DescribeModelVersionsRequest {
  modelId?: string;
  modelVersionNumber?: string;
  modelType?: ModelTypeEnum;
  nextToken?: string;
  maxResults?: number;
}
const DescribeModelVersionsRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DescribeModelVersionsRequest>;
export interface FileValidationMessage {
  title?: string;
  content?: string;
  type?: string;
}
const FileValidationMessage = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<FileValidationMessage>;
export type FileValidationMessageList = FileValidationMessage[];
const FileValidationMessageList = /*@__PURE__*/ __L.at(__c8, 2);
export interface FieldValidationMessage {
  fieldName?: string;
  identifier?: string;
  title?: string;
  content?: string;
  type?: string;
}
const FieldValidationMessage = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<FieldValidationMessage>;
export type FieldValidationMessageList = FieldValidationMessage[];
const FieldValidationMessageList = /*@__PURE__*/ __L.at(__c8, 4);
export interface DataValidationMetrics {
  fileLevelMessages?: FileValidationMessage[];
  fieldLevelMessages?: FieldValidationMessage[];
}
const DataValidationMetrics = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DataValidationMetrics>;
export interface MetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
const MetricDataPoint = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<MetricDataPoint>;
export type MetricDataPointsList = MetricDataPoint[];
const MetricDataPointsList = /*@__PURE__*/ __L.at(__c8, 7);
export interface TrainingMetrics {
  auc?: number;
  metricDataPoints?: MetricDataPoint[];
}
const TrainingMetrics = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<TrainingMetrics>;
export interface LogOddsMetric {
  variableName: string;
  variableType: string;
  variableImportance: number;
}
const LogOddsMetric = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<LogOddsMetric>;
export type ListOfLogOddsMetrics = LogOddsMetric[];
const ListOfLogOddsMetrics = /*@__PURE__*/ __L.at(__c9, 2);
export interface VariableImportanceMetrics {
  logOddsMetrics?: LogOddsMetric[];
}
const VariableImportanceMetrics = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<VariableImportanceMetrics>;
export interface TrainingResult {
  dataValidationMetrics?: DataValidationMetrics;
  trainingMetrics?: TrainingMetrics;
  variableImportanceMetrics?: VariableImportanceMetrics;
}
const TrainingResult = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<TrainingResult>;
export interface OFIMetricDataPoint {
  fpr?: number;
  precision?: number;
  tpr?: number;
  threshold?: number;
}
export type OFIMetricDataPointsList = OFIMetricDataPoint[];
const OFIMetricDataPointsList = MetricDataPointsList as any as S.Schema<OFIMetricDataPointsList>;
export interface UncertaintyRange {
  lowerBoundValue: number;
  upperBoundValue: number;
}
const UncertaintyRange = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<UncertaintyRange>;
export interface OFIModelPerformance {
  auc?: number;
  uncertaintyRange?: UncertaintyRange;
}
const OFIModelPerformance = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<OFIModelPerformance>;
export interface OFITrainingMetricsValue {
  metricDataPoints?: OFIMetricDataPoint[];
  modelPerformance?: OFIModelPerformance;
}
const OFITrainingMetricsValue = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<OFITrainingMetricsValue>;
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
const TFITrainingMetricsValue = OFITrainingMetricsValue as any as S.Schema<TFITrainingMetricsValue>;
export interface ATIMetricDataPoint {
  cr?: number;
  adr?: number;
  threshold?: number;
  atodr?: number;
}
const ATIMetricDataPoint = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<ATIMetricDataPoint>;
export type ATIMetricDataPointsList = ATIMetricDataPoint[];
const ATIMetricDataPointsList = /*@__PURE__*/ __L.at(__c10, 1);
export interface ATIModelPerformance {
  asi?: number;
}
const ATIModelPerformance = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<ATIModelPerformance>;
export interface ATITrainingMetricsValue {
  metricDataPoints?: ATIMetricDataPoint[];
  modelPerformance?: ATIModelPerformance;
}
const ATITrainingMetricsValue = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<ATITrainingMetricsValue>;
export interface TrainingMetricsV2 {
  ofi?: OFITrainingMetricsValue;
  tfi?: TFITrainingMetricsValue;
  ati?: ATITrainingMetricsValue;
}
const TrainingMetricsV2 = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<TrainingMetricsV2>;
export interface AggregatedLogOddsMetric {
  variableNames: string[];
  aggregatedVariablesImportance: number;
}
const AggregatedLogOddsMetric = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<AggregatedLogOddsMetric>;
export type ListOfAggregatedLogOddsMetrics = AggregatedLogOddsMetric[];
const ListOfAggregatedLogOddsMetrics = /*@__PURE__*/ __L.at(__c10, 6);
export interface AggregatedVariablesImportanceMetrics {
  logOddsMetrics?: AggregatedLogOddsMetric[];
}
const AggregatedVariablesImportanceMetrics = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<AggregatedVariablesImportanceMetrics>;
export interface TrainingResultV2 {
  dataValidationMetrics?: DataValidationMetrics;
  trainingMetricsV2?: TrainingMetricsV2;
  variableImportanceMetrics?: VariableImportanceMetrics;
  aggregatedVariablesImportanceMetrics?: AggregatedVariablesImportanceMetrics;
}
const TrainingResultV2 = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<TrainingResultV2>;
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
const ModelVersionDetail = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<ModelVersionDetail>;
export type ModelVersionDetailList = ModelVersionDetail[];
const ModelVersionDetailList = /*@__PURE__*/ __L.at(__c11, 2);
export interface DescribeModelVersionsResult {
  modelVersionDetails?: ModelVersionDetail[];
  nextToken?: string;
}
const DescribeModelVersionsResult = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DescribeModelVersionsResult>;
export type BatchImportsMaxPageSize = number;
export interface GetBatchImportJobsRequest {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
const GetBatchImportJobsRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetBatchImportJobsRequest>;
export type AsyncJobStatus =
  | "IN_PROGRESS_INITIALIZING"
  | "IN_PROGRESS"
  | "CANCEL_IN_PROGRESS"
  | "CANCELED"
  | "COMPLETE"
  | "FAILED"
  | (string & {});
const AsyncJobStatus = S.String;

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
const BatchImport = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<BatchImport>;
export type BatchImportList = BatchImport[];
const BatchImportList = /*@__PURE__*/ __L.at(__c11, 6);
export interface GetBatchImportJobsResult {
  batchImports?: BatchImport[];
  nextToken?: string;
}
const GetBatchImportJobsResult = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetBatchImportJobsResult>;
export type BatchPredictionsMaxPageSize = number;
export interface GetBatchPredictionJobsRequest {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
const GetBatchPredictionJobsRequest = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<GetBatchPredictionJobsRequest>;
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
const BatchPrediction = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<BatchPrediction>;
export type BatchPredictionList = BatchPrediction[];
const BatchPredictionList = /*@__PURE__*/ __L.at(__c12, 2);
export interface GetBatchPredictionJobsResult {
  batchPredictions?: BatchPrediction[];
  nextToken?: string;
}
const GetBatchPredictionJobsResult = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<GetBatchPredictionJobsResult>;
export interface GetDeleteEventsByEventTypeStatusRequest {
  eventTypeName: string;
}
const GetDeleteEventsByEventTypeStatusRequest = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<GetDeleteEventsByEventTypeStatusRequest>;
export interface GetDeleteEventsByEventTypeStatusResult {
  eventTypeName?: string;
  eventsDeletionStatus?: AsyncJobStatus;
}
const GetDeleteEventsByEventTypeStatusResult = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<GetDeleteEventsByEventTypeStatusResult>;
export type DetectorsMaxResults = number;
export interface GetDetectorsRequest {
  detectorId?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetDetectorsRequest = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<GetDetectorsRequest>;
export interface Detector {
  detectorId?: string;
  description?: string;
  eventTypeName?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
const Detector = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<Detector>;
export type DetectorList = Detector[];
const DetectorList = /*@__PURE__*/ __L.at(__c13, 0);
export interface GetDetectorsResult {
  detectors?: Detector[];
  nextToken?: string;
}
const GetDetectorsResult = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<GetDetectorsResult>;
export interface GetDetectorVersionRequest {
  detectorId: string;
  detectorVersionId: string;
}
const GetDetectorVersionRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<GetDetectorVersionRequest>;
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
const GetDetectorVersionResult = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<GetDetectorVersionResult>;
export type EntityTypesMaxResults = number;
export interface GetEntityTypesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetEntityTypesRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<GetEntityTypesRequest>;
export interface EntityType {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
const EntityType = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<EntityType>;
export type EntityTypeList = EntityType[];
const EntityTypeList = /*@__PURE__*/ __L.at(__c13, 6);
export interface GetEntityTypesResult {
  entityTypes?: EntityType[];
  nextToken?: string;
}
const GetEntityTypesResult = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<GetEntityTypesResult>;
export interface GetEventRequest {
  eventId: string;
  eventTypeName: string;
}
const GetEventRequest = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<GetEventRequest>;
export type AttributeKey = string;
export type AttributeValue = string | redacted.Redacted<string>;
export type EventAttributeMap = { [key: string]: string | redacted.Redacted<string> | undefined };
const EventAttributeMap = /*@__PURE__*/ __L.at(__c14, 1);
export type EntityRestrictedString = string;
export interface Entity {
  entityType: string;
  entityId: string;
}
const Entity = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<Entity>;
export type ListOfEntities = Entity[];
const ListOfEntities = /*@__PURE__*/ __L.at(__c14, 3);
export interface Event {
  eventId?: string;
  eventTypeName?: string;
  eventTimestamp?: string;
  eventVariables?: { [key: string]: string | redacted.Redacted<string> | undefined };
  currentLabel?: string;
  labelTimestamp?: string;
  entities?: Entity[];
}
const Event = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<Event>;
export interface GetEventResult {
  event?: Event;
}
const GetEventResult = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<GetEventResult>;
export type UtcTimestampISO8601 = string;
export type VariableName = string;
export type VariableValue = string | redacted.Redacted<string>;
export type EventVariableMap = { [key: string]: string | redacted.Redacted<string> | undefined };
const EventVariableMap = EventAttributeMap as any as S.Schema<EventVariableMap>;
export type ContentType = string;
export interface ModelEndpointDataBlob {
  byteBuffer?: Uint8Array;
  contentType?: string;
}
const ModelEndpointDataBlob = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ModelEndpointDataBlob>;
export type ExternalModelEndpointDataBlobMap = { [key: string]: ModelEndpointDataBlob | undefined };
const ExternalModelEndpointDataBlobMap = /*@__PURE__*/ __L.at(__c14, 7);
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
const GetEventPredictionRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<GetEventPredictionRequest>;
export type ModelPredictionMap = { [key: string]: number | undefined };
const ModelPredictionMap = /*@__PURE__*/ __L.at(__c15, 1);
export interface ModelScores {
  modelVersion?: ModelVersion;
  scores?: { [key: string]: number | undefined };
}
const ModelScores = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<ModelScores>;
export type ListOfModelScores = ModelScores[];
const ListOfModelScores = /*@__PURE__*/ __L.at(__c15, 3);
export interface RuleResult {
  ruleId?: string;
  outcomes?: string[];
}
const RuleResult = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<RuleResult>;
export type ListOfRuleResults = RuleResult[];
const ListOfRuleResults = /*@__PURE__*/ __L.at(__c15, 5);
export type ModelSource = "SAGEMAKER" | (string & {});
const ModelSource = S.String;

export interface ExternalModelSummary {
  modelEndpoint?: string;
  modelSource?: ModelSource;
}
const ExternalModelSummary = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ExternalModelSummary>;
export type ExternalModelPredictionMap = { [key: string]: string | undefined };
const ExternalModelPredictionMap = /*@__PURE__*/ __L.at(__c15, 7);
export interface ExternalModelOutputs {
  externalModel?: ExternalModelSummary;
  outputs?: { [key: string]: string | undefined };
}
const ExternalModelOutputs = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ExternalModelOutputs>;
export type ListOfExternalModelOutputs = ExternalModelOutputs[];
const ListOfExternalModelOutputs = /*@__PURE__*/ __L.at(__c16, 1);
export interface GetEventPredictionResult {
  modelScores?: ModelScores[];
  ruleResults?: RuleResult[];
  externalModelOutputs?: ExternalModelOutputs[];
}
const GetEventPredictionResult = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<GetEventPredictionResult>;
export interface GetEventPredictionMetadataRequest {
  eventId: string;
  eventTypeName: string;
  detectorId: string;
  detectorVersionId: string;
  predictionTimestamp: string;
}
const GetEventPredictionMetadataRequest = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<GetEventPredictionMetadataRequest>;
export type SensitiveString = string | redacted.Redacted<string>;
export interface EventVariableSummary {
  name?: string | redacted.Redacted<string>;
  value?: string | redacted.Redacted<string>;
  source?: string | redacted.Redacted<string>;
}
const EventVariableSummary = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<EventVariableSummary>;
export type ListOfEventVariableSummaries = EventVariableSummary[];
const ListOfEventVariableSummaries = /*@__PURE__*/ __L.at(__c16, 5);
export interface EvaluatedRule {
  ruleId?: string;
  ruleVersion?: string;
  expression?: string | redacted.Redacted<string>;
  expressionWithValues?: string | redacted.Redacted<string>;
  outcomes?: string[];
  evaluated?: boolean;
  matched?: boolean;
}
const EvaluatedRule = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<EvaluatedRule>;
export type EvaluatedRuleList = EvaluatedRule[];
const EvaluatedRuleList = /*@__PURE__*/ __L.at(__c16, 7);
export interface VariableImpactExplanation {
  eventVariableName?: string;
  relativeImpact?: string;
  logOddsImpact?: number;
}
const VariableImpactExplanation = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<VariableImpactExplanation>;
export type ListOfVariableImpactExplanations = VariableImpactExplanation[];
const ListOfVariableImpactExplanations = /*@__PURE__*/ __L.at(__c17, 1);
export interface AggregatedVariablesImpactExplanation {
  eventVariableNames?: string[];
  relativeImpact?: string;
  logOddsImpact?: number;
}
const AggregatedVariablesImpactExplanation = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<AggregatedVariablesImpactExplanation>;
export type ListOfAggregatedVariablesImpactExplanations = AggregatedVariablesImpactExplanation[];
const ListOfAggregatedVariablesImpactExplanations = /*@__PURE__*/ __L.at(__c17, 3);
export interface PredictionExplanations {
  variableImpactExplanations?: VariableImpactExplanation[];
  aggregatedVariablesImpactExplanations?: AggregatedVariablesImpactExplanation[];
}
const PredictionExplanations = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<PredictionExplanations>;
export interface ModelVersionEvaluation {
  outputVariableName?: string;
  evaluationScore?: string;
  predictionExplanations?: PredictionExplanations;
}
const ModelVersionEvaluation = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ModelVersionEvaluation>;
export type ListOfModelVersionEvaluations = ModelVersionEvaluation[];
const ListOfModelVersionEvaluations = /*@__PURE__*/ __L.at(__c17, 6);
export interface EvaluatedModelVersion {
  modelId?: string;
  modelVersion?: string;
  modelType?: string;
  evaluations?: ModelVersionEvaluation[];
}
const EvaluatedModelVersion = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<EvaluatedModelVersion>;
export type ListOfEvaluatedModelVersions = EvaluatedModelVersion[];
const ListOfEvaluatedModelVersions = /*@__PURE__*/ __L.at(__c18, 0);
export type MapOfStrings = { [key: string]: string | undefined };
const MapOfStrings = ExternalModelPredictionMap as any as S.Schema<MapOfStrings>;
export interface EvaluatedExternalModel {
  modelEndpoint?: string;
  useEventVariables?: boolean;
  inputVariables?: { [key: string]: string | undefined };
  outputVariables?: { [key: string]: string | undefined };
}
const EvaluatedExternalModel = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<EvaluatedExternalModel>;
export type ListOfEvaluatedExternalModels = EvaluatedExternalModel[];
const ListOfEvaluatedExternalModels = /*@__PURE__*/ __L.at(__c18, 2);
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
const GetEventPredictionMetadataResult = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<GetEventPredictionMetadataResult>;
export type EventTypesMaxResults = number;
export interface GetEventTypesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetEventTypesRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<GetEventTypesRequest>;
export type EventIngestion = "ENABLED" | "DISABLED" | (string & {});
const EventIngestion = S.String;

export interface IngestedEventStatistics {
  numberOfEvents?: number;
  eventDataSizeInBytes?: number;
  leastRecentEvent?: string;
  mostRecentEvent?: string;
  lastUpdatedTime?: string;
}
const IngestedEventStatistics = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<IngestedEventStatistics>;
export interface EventOrchestration {
  eventBridgeEnabled: boolean;
}
const EventOrchestration = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<EventOrchestration>;
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
const EventType = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<EventType>;
export type EventTypeList = EventType[];
const EventTypeList = /*@__PURE__*/ __L.at(__c19, 0);
export interface GetEventTypesResult {
  eventTypes?: EventType[];
  nextToken?: string;
}
const GetEventTypesResult = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<GetEventTypesResult>;
export type ExternalModelsMaxResults = number;
export interface GetExternalModelsRequest {
  modelEndpoint?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetExternalModelsRequest = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<GetExternalModelsRequest>;
export type ModelInputDataFormat = "TEXT_CSV" | "APPLICATION_JSON" | (string & {});
const ModelInputDataFormat = S.String;

export type UseEventVariables = boolean;
export type ModelInputTemplate = string;
export interface ModelInputConfiguration {
  eventTypeName?: string;
  format?: ModelInputDataFormat;
  useEventVariables: boolean;
  jsonInputTemplate?: string;
  csvInputTemplate?: string;
}
const ModelInputConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<ModelInputConfiguration>;
export type ModelOutputDataFormat = "TEXT_CSV" | "APPLICATION_JSONLINES" | (string & {});
const ModelOutputDataFormat = S.String;

export type JsonKeyToVariableMap = { [key: string]: string | undefined };
const JsonKeyToVariableMap = ExternalModelPredictionMap as any as S.Schema<JsonKeyToVariableMap>;
export type CsvIndexToVariableMap = { [key: string]: string | undefined };
const CsvIndexToVariableMap = ExternalModelPredictionMap as any as S.Schema<CsvIndexToVariableMap>;
export interface ModelOutputConfiguration {
  format: ModelOutputDataFormat;
  jsonKeyToVariableMap?: { [key: string]: string | undefined };
  csvIndexToVariableMap?: { [key: string]: string | undefined };
}
const ModelOutputConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<ModelOutputConfiguration>;
export type ModelEndpointStatus = "ASSOCIATED" | "DISSOCIATED" | (string & {});
const ModelEndpointStatus = S.String;

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
const ExternalModel = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<ExternalModel>;
export type ExternalModelList = ExternalModel[];
const ExternalModelList = /*@__PURE__*/ __L.at(__c19, 6);
export interface GetExternalModelsResult {
  externalModels?: ExternalModel[];
  nextToken?: string;
}
const GetExternalModelsResult = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<GetExternalModelsResult>;
export interface GetKMSEncryptionKeyRequest {}
const GetKMSEncryptionKeyRequest = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<GetKMSEncryptionKeyRequest>;
export type KmsEncryptionKeyArn = string;
export interface KMSKey {
  kmsEncryptionKeyArn?: string;
}
const KMSKey = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<KMSKey>;
export interface GetKMSEncryptionKeyResult {
  kmsKey?: KMSKey;
}
const GetKMSEncryptionKeyResult = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<GetKMSEncryptionKeyResult>;
export type LabelsMaxResults = number;
export interface GetLabelsRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetLabelsRequest = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<GetLabelsRequest>;
export interface Label {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type LabelList = Label[];
const LabelList = EntityTypeList as any as S.Schema<LabelList>;
export interface GetLabelsResult {
  labels?: Label[];
  nextToken?: string;
}
const GetLabelsResult = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<GetLabelsResult>;
export type NextToken = string;
export type ListsElementsMaxResults = number;
export interface GetListElementsRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
const GetListElementsRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<GetListElementsRequest>;
export interface GetListElementsResult {
  elements?: (string | redacted.Redacted<string>)[];
  nextToken?: string;
}
const GetListElementsResult = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<GetListElementsResult>;
export type ListsMetadataMaxResults = number;
export interface GetListsMetadataRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetListsMetadataRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<GetListsMetadataRequest>;
export interface AllowDenyList {
  name: string;
  description?: string;
  variableType?: string;
  createdTime?: string;
  updatedTime?: string;
  arn?: string;
}
const AllowDenyList = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<AllowDenyList>;
export type AllowDenyLists = AllowDenyList[];
const AllowDenyLists = /*@__PURE__*/ __L.at(__c21, 1);
export interface GetListsMetadataResult {
  lists?: AllowDenyList[];
  nextToken?: string;
}
const GetListsMetadataResult = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<GetListsMetadataResult>;
export interface GetModelsRequest {
  modelId?: string;
  modelType?: ModelTypeEnum;
  nextToken?: string;
  maxResults?: number;
}
const GetModelsRequest = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<GetModelsRequest>;
export interface Model {
  modelId?: string;
  modelType?: ModelTypeEnum;
  description?: string;
  eventTypeName?: string;
  createdTime?: string;
  lastUpdatedTime?: string;
  arn?: string;
}
const Model = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<Model>;
export type ModelList = Model[];
const ModelList = /*@__PURE__*/ __L.at(__c21, 5);
export interface GetModelsResult {
  nextToken?: string;
  models?: Model[];
}
const GetModelsResult = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<GetModelsResult>;
export interface GetModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
}
const GetModelVersionRequest = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<GetModelVersionRequest>;
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
const GetModelVersionResult = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<GetModelVersionResult>;
export type OutcomesMaxResults = number;
export interface GetOutcomesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetOutcomesRequest = /*@__PURE__*/ __L.at(__c22, 1) as any as S.Schema<GetOutcomesRequest>;
export interface Outcome {
  name?: string;
  description?: string;
  lastUpdatedTime?: string;
  createdTime?: string;
  arn?: string;
}
export type OutcomeList = Outcome[];
const OutcomeList = EntityTypeList as any as S.Schema<OutcomeList>;
export interface GetOutcomesResult {
  outcomes?: Outcome[];
  nextToken?: string;
}
const GetOutcomesResult = /*@__PURE__*/ __L.at(__c22, 2) as any as S.Schema<GetOutcomesResult>;
export type RulesMaxResults = number;
export interface GetRulesRequest {
  ruleId?: string;
  detectorId: string;
  ruleVersion?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetRulesRequest = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<GetRulesRequest>;
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
const RuleDetail = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<RuleDetail>;
export type RuleDetailList = RuleDetail[];
const RuleDetailList = /*@__PURE__*/ __L.at(__c22, 5);
export interface GetRulesResult {
  ruleDetails?: RuleDetail[];
  nextToken?: string;
}
const GetRulesResult = /*@__PURE__*/ __L.at(__c22, 6) as any as S.Schema<GetRulesResult>;
export type VariablesMaxResults = number;
export interface GetVariablesRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const GetVariablesRequest = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<GetVariablesRequest>;
export interface GetVariablesResult {
  variables?: Variable[];
  nextToken?: string;
}
const GetVariablesResult = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<GetVariablesResult>;
export type FilterString = string;
export interface FilterCondition {
  value?: string;
}
const FilterCondition = /*@__PURE__*/ __L.at(__c23, 1) as any as S.Schema<FilterCondition>;
export interface PredictionTimeRange {
  startTime: string;
  endTime: string;
}
const PredictionTimeRange = IngestedEventsTimeWindow as any as S.Schema<PredictionTimeRange>;
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
const ListEventPredictionsRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<ListEventPredictionsRequest>;
export interface EventPredictionSummary {
  eventId?: string;
  eventTypeName?: string;
  eventTimestamp?: string;
  predictionTimestamp?: string;
  detectorId?: string;
  detectorVersionId?: string;
}
const EventPredictionSummary = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<EventPredictionSummary>;
export type ListOfEventPredictionSummaries = EventPredictionSummary[];
const ListOfEventPredictionSummaries = /*@__PURE__*/ __L.at(__c23, 4);
export interface ListEventPredictionsResult {
  eventPredictionSummaries?: EventPredictionSummary[];
  nextToken?: string;
}
const ListEventPredictionsResult = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<ListEventPredictionsResult>;
export type TagsMaxResults = number;
export interface ListTagsForResourceRequest {
  resourceARN: string;
  nextToken?: string;
  maxResults?: number;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResult {
  tags?: Tag[];
  nextToken?: string;
}
const ListTagsForResourceResult = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<ListTagsForResourceResult>;
export interface PutDetectorRequest {
  detectorId: string;
  description?: string;
  eventTypeName: string;
  tags?: Tag[];
}
const PutDetectorRequest = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<PutDetectorRequest>;
export interface PutDetectorResult {}
const PutDetectorResult = CreateListResult as any as S.Schema<PutDetectorResult>;
export interface PutEntityTypeRequest {
  name: string;
  description?: string;
  tags?: Tag[];
}
const PutEntityTypeRequest = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<PutEntityTypeRequest>;
export interface PutEntityTypeResult {}
const PutEntityTypeResult = CreateListResult as any as S.Schema<PutEntityTypeResult>;
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
const PutEventTypeRequest = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<PutEventTypeRequest>;
export interface PutEventTypeResult {}
const PutEventTypeResult = CreateListResult as any as S.Schema<PutEventTypeResult>;
export interface PutExternalModelRequest {
  modelEndpoint: string;
  modelSource: ModelSource;
  invokeModelEndpointRoleArn: string;
  inputConfiguration: ModelInputConfiguration;
  outputConfiguration: ModelOutputConfiguration;
  modelEndpointStatus: ModelEndpointStatus;
  tags?: Tag[];
}
const PutExternalModelRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<PutExternalModelRequest>;
export interface PutExternalModelResult {}
const PutExternalModelResult = DeleteEntityTypeResult as any as S.Schema<PutExternalModelResult>;
export interface PutKMSEncryptionKeyRequest {
  kmsEncryptionKeyArn: string;
}
const PutKMSEncryptionKeyRequest = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<PutKMSEncryptionKeyRequest>;
export interface PutKMSEncryptionKeyResult {}
const PutKMSEncryptionKeyResult =
  CancelBatchImportJobResult as any as S.Schema<PutKMSEncryptionKeyResult>;
export interface PutLabelRequest {
  name: string;
  description?: string;
  tags?: Tag[];
}
const PutLabelRequest = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<PutLabelRequest>;
export interface PutLabelResult {}
const PutLabelResult = CreateListResult as any as S.Schema<PutLabelResult>;
export interface PutOutcomeRequest {
  name: string;
  description?: string;
  tags?: Tag[];
}
const PutOutcomeRequest = /*@__PURE__*/ __L.at(__c24, 6) as any as S.Schema<PutOutcomeRequest>;
export interface PutOutcomeResult {}
const PutOutcomeResult = CreateListResult as any as S.Schema<PutOutcomeResult>;
export interface SendEventRequest {
  eventId: string;
  eventTypeName: string;
  eventTimestamp: string;
  eventVariables: { [key: string]: string | redacted.Redacted<string> | undefined };
  assignedLabel?: string;
  labelTimestamp?: string;
  entities: Entity[];
}
const SendEventRequest = /*@__PURE__*/ __L.at(__c24, 7) as any as S.Schema<SendEventRequest>;
export interface SendEventResult {}
const SendEventResult = CreateListResult as any as S.Schema<SendEventResult>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c25, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResult {}
const TagResourceResult = CreateListResult as any as S.Schema<TagResourceResult>;
export type TagKeyList = string[];
const TagKeyList = NameList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResult {}
const UntagResourceResult = CreateListResult as any as S.Schema<UntagResourceResult>;
export interface UpdateDetectorVersionRequest {
  detectorId: string;
  detectorVersionId: string;
  externalModelEndpoints: string[];
  rules: Rule[];
  description?: string;
  modelVersions?: ModelVersion[];
  ruleExecutionMode?: RuleExecutionMode;
}
const UpdateDetectorVersionRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<UpdateDetectorVersionRequest>;
export interface UpdateDetectorVersionResult {}
const UpdateDetectorVersionResult =
  CancelBatchImportJobResult as any as S.Schema<UpdateDetectorVersionResult>;
export interface UpdateDetectorVersionMetadataRequest {
  detectorId: string;
  detectorVersionId: string;
  description: string;
}
const UpdateDetectorVersionMetadataRequest = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<UpdateDetectorVersionMetadataRequest>;
export interface UpdateDetectorVersionMetadataResult {}
const UpdateDetectorVersionMetadataResult =
  CancelBatchImportJobResult as any as S.Schema<UpdateDetectorVersionMetadataResult>;
export interface UpdateDetectorVersionStatusRequest {
  detectorId: string;
  detectorVersionId: string;
  status: DetectorVersionStatus;
}
const UpdateDetectorVersionStatusRequest = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<UpdateDetectorVersionStatusRequest>;
export interface UpdateDetectorVersionStatusResult {}
const UpdateDetectorVersionStatusResult =
  CancelBatchImportJobResult as any as S.Schema<UpdateDetectorVersionStatusResult>;
export interface UpdateEventLabelRequest {
  eventId: string;
  eventTypeName: string;
  assignedLabel: string;
  labelTimestamp: string;
}
const UpdateEventLabelRequest = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<UpdateEventLabelRequest>;
export interface UpdateEventLabelResult {}
const UpdateEventLabelResult = DeleteEntityTypeResult as any as S.Schema<UpdateEventLabelResult>;
export type ListUpdateMode = "REPLACE" | "APPEND" | "REMOVE" | (string & {});
const ListUpdateMode = S.String;

export interface UpdateListRequest {
  name: string;
  elements?: (string | redacted.Redacted<string>)[];
  description?: string;
  updateMode?: ListUpdateMode;
  variableType?: string;
}
const UpdateListRequest = /*@__PURE__*/ __L.at(__c25, 6) as any as S.Schema<UpdateListRequest>;
export interface UpdateListResult {}
const UpdateListResult = CreateListResult as any as S.Schema<UpdateListResult>;
export interface UpdateModelRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  description?: string;
}
const UpdateModelRequest = /*@__PURE__*/ __L.at(__c25, 7) as any as S.Schema<UpdateModelRequest>;
export interface UpdateModelResult {}
const UpdateModelResult = CreateListResult as any as S.Schema<UpdateModelResult>;
export interface UpdateModelVersionRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  majorVersionNumber: string;
  externalEventsDetail?: ExternalEventsDetail;
  ingestedEventsDetail?: IngestedEventsDetail;
  tags?: Tag[];
}
const UpdateModelVersionRequest = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<UpdateModelVersionRequest>;
export interface UpdateModelVersionResult {
  modelId?: string;
  modelType?: ModelTypeEnum;
  modelVersionNumber?: string;
  status?: string;
}
const UpdateModelVersionResult =
  CreateModelVersionResult as any as S.Schema<UpdateModelVersionResult>;
export type ModelVersionStatus = "ACTIVE" | "INACTIVE" | "TRAINING_CANCELLED" | (string & {});
const ModelVersionStatus = S.String;

export interface UpdateModelVersionStatusRequest {
  modelId: string;
  modelType: ModelTypeEnum;
  modelVersionNumber: string;
  status: ModelVersionStatus;
}
const UpdateModelVersionStatusRequest = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<UpdateModelVersionStatusRequest>;
export interface UpdateModelVersionStatusResult {}
const UpdateModelVersionStatusResult =
  CancelBatchImportJobResult as any as S.Schema<UpdateModelVersionStatusResult>;
export interface UpdateRuleMetadataRequest {
  rule: Rule;
  description: string;
}
const UpdateRuleMetadataRequest = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<UpdateRuleMetadataRequest>;
export interface UpdateRuleMetadataResult {}
const UpdateRuleMetadataResult =
  DeleteModelVersionResult as any as S.Schema<UpdateRuleMetadataResult>;
export interface UpdateRuleVersionRequest {
  rule: Rule;
  description?: string;
  expression: string | redacted.Redacted<string>;
  language: Language;
  outcomes: string[];
  tags?: Tag[];
}
const UpdateRuleVersionRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<UpdateRuleVersionRequest>;
export interface UpdateRuleVersionResult {
  rule?: Rule;
}
const UpdateRuleVersionResult = CreateRuleResult as any as S.Schema<UpdateRuleVersionResult>;
export interface UpdateVariableRequest {
  name: string;
  defaultValue?: string;
  description?: string;
  variableType?: string;
}
const UpdateVariableRequest = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<UpdateVariableRequest>;
export interface UpdateVariableResult {}
const UpdateVariableResult = CreateListResult as any as S.Schema<UpdateVariableResult>;
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
  input: BatchCreateVariableRequest,
  output: BatchCreateVariableResult,
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
  input: BatchGetVariableRequest,
  output: BatchGetVariableResult,
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
  input: CancelBatchImportJobRequest,
  output: CancelBatchImportJobResult,
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
  input: CancelBatchPredictionJobRequest,
  output: CancelBatchPredictionJobResult,
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
  input: CreateBatchImportJobRequest,
  output: CreateBatchImportJobResult,
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
  input: CreateBatchPredictionJobRequest,
  output: CreateBatchPredictionJobResult,
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
  input: CreateDetectorVersionRequest,
  output: CreateDetectorVersionResult,
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
  input: CreateListRequest,
  output: CreateListResult,
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
  input: CreateModelRequest,
  output: CreateModelResult,
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
  input: CreateModelVersionRequest,
  output: CreateModelVersionResult,
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
  input: CreateRuleRequest,
  output: CreateRuleResult,
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
  input: CreateVariableRequest,
  output: CreateVariableResult,
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
  input: DeleteBatchImportJobRequest,
  output: DeleteBatchImportJobResult,
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
  input: DeleteBatchPredictionJobRequest,
  output: DeleteBatchPredictionJobResult,
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
  input: DeleteDetectorRequest,
  output: DeleteDetectorResult,
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
  input: DeleteDetectorVersionRequest,
  output: DeleteDetectorVersionResult,
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
  input: DeleteEntityTypeRequest,
  output: DeleteEntityTypeResult,
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
  input: DeleteEventRequest,
  output: DeleteEventResult,
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
  input: DeleteEventsByEventTypeRequest,
  output: DeleteEventsByEventTypeResult,
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
  input: DeleteEventTypeRequest,
  output: DeleteEventTypeResult,
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
  input: DeleteExternalModelRequest,
  output: DeleteExternalModelResult,
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
  input: DeleteLabelRequest,
  output: DeleteLabelResult,
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
  input: DeleteListRequest,
  output: DeleteListResult,
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
  input: DeleteModelRequest,
  output: DeleteModelResult,
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
  input: DeleteModelVersionRequest,
  output: DeleteModelVersionResult,
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
  input: DeleteOutcomeRequest,
  output: DeleteOutcomeResult,
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
  input: DeleteRuleRequest,
  output: DeleteRuleResult,
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
  input: DeleteVariableRequest,
  output: DeleteVariableResult,
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
  input: DescribeDetectorRequest,
  output: DescribeDetectorResult,
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
  input: DescribeModelVersionsRequest,
  output: DescribeModelVersionsResult,
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
  input: GetBatchImportJobsRequest,
  output: GetBatchImportJobsResult,
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
  input: GetBatchPredictionJobsRequest,
  output: GetBatchPredictionJobsResult,
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
  input: GetDeleteEventsByEventTypeStatusRequest,
  output: GetDeleteEventsByEventTypeStatusResult,
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
  input: GetDetectorsRequest,
  output: GetDetectorsResult,
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
  input: GetDetectorVersionRequest,
  output: GetDetectorVersionResult,
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
  input: GetEntityTypesRequest,
  output: GetEntityTypesResult,
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
  input: GetEventRequest,
  output: GetEventResult,
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
  input: GetEventPredictionRequest,
  output: GetEventPredictionResult,
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
  input: GetEventPredictionMetadataRequest,
  output: GetEventPredictionMetadataResult,
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
  input: GetEventTypesRequest,
  output: GetEventTypesResult,
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
  input: GetExternalModelsRequest,
  output: GetExternalModelsResult,
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
  input: GetKMSEncryptionKeyRequest,
  output: GetKMSEncryptionKeyResult,
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
  input: GetLabelsRequest,
  output: GetLabelsResult,
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
  input: GetListElementsRequest,
  output: GetListElementsResult,
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
  input: GetListsMetadataRequest,
  output: GetListsMetadataResult,
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
  input: GetModelsRequest,
  output: GetModelsResult,
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
  input: GetModelVersionRequest,
  output: GetModelVersionResult,
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
  input: GetOutcomesRequest,
  output: GetOutcomesResult,
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
  input: GetRulesRequest,
  output: GetRulesResult,
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
  input: GetVariablesRequest,
  output: GetVariablesResult,
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
  input: ListEventPredictionsRequest,
  output: ListEventPredictionsResult,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResult,
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
  input: PutDetectorRequest,
  output: PutDetectorResult,
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
  input: PutEntityTypeRequest,
  output: PutEntityTypeResult,
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
  input: PutEventTypeRequest,
  output: PutEventTypeResult,
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
  input: PutExternalModelRequest,
  output: PutExternalModelResult,
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
  input: PutKMSEncryptionKeyRequest,
  output: PutKMSEncryptionKeyResult,
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
  input: PutLabelRequest,
  output: PutLabelResult,
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
  input: PutOutcomeRequest,
  output: PutOutcomeResult,
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
  input: SendEventRequest,
  output: SendEventResult,
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
  input: TagResourceRequest,
  output: TagResourceResult,
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
  input: UntagResourceRequest,
  output: UntagResourceResult,
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
  input: UpdateDetectorVersionRequest,
  output: UpdateDetectorVersionResult,
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
  input: UpdateDetectorVersionMetadataRequest,
  output: UpdateDetectorVersionMetadataResult,
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
  input: UpdateDetectorVersionStatusRequest,
  output: UpdateDetectorVersionStatusResult,
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
  input: UpdateEventLabelRequest,
  output: UpdateEventLabelResult,
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
  input: UpdateListRequest,
  output: UpdateListResult,
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
  input: UpdateModelRequest,
  output: UpdateModelResult,
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
  input: UpdateModelVersionRequest,
  output: UpdateModelVersionResult,
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
  input: UpdateModelVersionStatusRequest,
  output: UpdateModelVersionStatusResult,
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
  input: UpdateRuleMetadataRequest,
  output: UpdateRuleMetadataResult,
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
  input: UpdateRuleVersionRequest,
  output: UpdateRuleVersionResult,
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
  input: UpdateVariableRequest,
  output: UpdateVariableResult,
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
      return S.Array(VariableEntry);
    case 2:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(Tag);
    case 4:
      return S.suspend(() =>
        S.Struct({ variableEntries: VariableEntryList, tags: S.optional(TagList) }).pipe(
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
      return S.Array(BatchCreateVariableError_);
    case 7:
      return S.suspend(() =>
        S.Struct({ errors: S.optional(BatchCreateVariableErrorList) }).pipe(ns),
      ).annotate({
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
        S.Struct({ names: NameList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetVariableRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          dataType: S.optional(DataType),
          dataSource: S.optional(DataSource),
          defaultValue: S.optional(S.String),
          description: S.optional(S.String),
          variableType: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Variable" });
    case 3:
      return S.Array(Variable);
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          code: S.optional(S.Number),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchGetVariableError" });
    case 5:
      return S.Array(BatchGetVariableError_);
    case 6:
      return S.suspend(() =>
        S.Struct({
          variables: S.optional(VariableList),
          errors: S.optional(BatchGetVariableErrorList),
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
          tags: S.optional(TagList),
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
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBatchPredictionJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ detectorId: S.String, ruleId: S.String, ruleVersion: S.String }),
      ).annotate({ identifier: "Rule" });
    case 5:
      return S.Array(Rule);
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: ModelTypeEnum,
          modelVersionNumber: S.String,
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelVersion" });
    case 7:
      return S.Array(ModelVersion);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          description: S.optional(S.String),
          externalModelEndpoints: S.optional(ListOfStrings),
          rules: RuleList,
          modelVersions: S.optional(ListOfModelVersions),
          ruleExecutionMode: S.optional(RuleExecutionMode),
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDetectorVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.optional(S.String),
          detectorVersionId: S.optional(S.String),
          status: S.optional(DetectorVersionStatus),
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
          elements: S.optional(ElementsList),
          variableType: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(TagList),
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
          modelType: ModelTypeEnum,
          description: S.optional(S.String),
          eventTypeName: S.String,
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateModelRequest" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ ListOfStrings.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          labelMapper: S.optional(LabelMapper),
          unlabeledEventsTreatment: S.optional(UnlabeledEventsTreatment),
        }),
      ).annotate({ identifier: "LabelSchema" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ modelVariables: ListOfStrings, labelSchema: S.optional(LabelSchema) }),
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
      return S.suspend(() =>
        S.Struct({ ingestedEventsTimeWindow: IngestedEventsTimeWindow }),
      ).annotate({ identifier: "IngestedEventsDetail" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: ModelTypeEnum,
          trainingDataSource: TrainingDataSourceEnum,
          trainingDataSchema: TrainingDataSchema,
          externalEventsDetail: S.optional(ExternalEventsDetail),
          ingestedEventsDetail: S.optional(IngestedEventsDetail),
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateModelVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(ModelTypeEnum),
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
          language: Language,
          outcomes: NonEmptyListOfStrings,
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleRequest" });
    case 7:
      return S.suspend(() => S.Struct({ rule: S.optional(Rule) }).pipe(ns)).annotate({
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
          dataType: DataType,
          dataSource: DataSource,
          defaultValue: S.String,
          description: S.optional(S.String),
          variableType: S.optional(S.String),
          tags: S.optional(TagList),
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
        S.Struct({ modelId: S.String, modelType: ModelTypeEnum }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteModelRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: ModelTypeEnum,
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
        S.Struct({ rule: Rule }).pipe(
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
          status: S.optional(DetectorVersionStatus),
          description: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "DetectorVersionSummary" });
    case 6:
      return S.Array(DetectorVersionSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.optional(S.String),
          detectorVersionSummaries: S.optional(DetectorVersionSummaryList),
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
          modelType: S.optional(ModelTypeEnum),
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
      return S.Array(FileValidationMessage);
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
      return S.Array(FieldValidationMessage);
    case 5:
      return S.suspend(() =>
        S.Struct({
          fileLevelMessages: S.optional(FileValidationMessageList),
          fieldLevelMessages: S.optional(FieldValidationMessageList),
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
      return S.Array(MetricDataPoint);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ auc: S.optional(S.Number), metricDataPoints: S.optional(MetricDataPointsList) }),
      ).annotate({ identifier: "TrainingMetrics" });
    case 1:
      return S.suspend(() =>
        S.Struct({ variableName: S.String, variableType: S.String, variableImportance: S.Number }),
      ).annotate({ identifier: "LogOddsMetric" });
    case 2:
      return S.Array(LogOddsMetric);
    case 3:
      return S.suspend(() =>
        S.Struct({ logOddsMetrics: S.optional(ListOfLogOddsMetrics) }),
      ).annotate({
        identifier: "VariableImportanceMetrics",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dataValidationMetrics: S.optional(DataValidationMetrics),
          trainingMetrics: S.optional(TrainingMetrics),
          variableImportanceMetrics: S.optional(VariableImportanceMetrics),
        }),
      ).annotate({ identifier: "TrainingResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ lowerBoundValue: S.Number, upperBoundValue: S.Number }),
      ).annotate({ identifier: "UncertaintyRange" });
    case 6:
      return S.suspend(() =>
        S.Struct({ auc: S.optional(S.Number), uncertaintyRange: S.optional(UncertaintyRange) }),
      ).annotate({ identifier: "OFIModelPerformance" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          metricDataPoints: S.optional(OFIMetricDataPointsList),
          modelPerformance: S.optional(OFIModelPerformance),
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
      return S.Array(ATIMetricDataPoint);
    case 2:
      return S.suspend(() => S.Struct({ asi: S.optional(S.Number) })).annotate({
        identifier: "ATIModelPerformance",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          metricDataPoints: S.optional(ATIMetricDataPointsList),
          modelPerformance: S.optional(ATIModelPerformance),
        }),
      ).annotate({ identifier: "ATITrainingMetricsValue" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ofi: S.optional(OFITrainingMetricsValue),
          tfi: S.optional(TFITrainingMetricsValue),
          ati: S.optional(ATITrainingMetricsValue),
        }),
      ).annotate({ identifier: "TrainingMetricsV2" });
    case 5:
      return S.suspend(() =>
        S.Struct({ variableNames: ListOfStrings, aggregatedVariablesImportance: S.Number }),
      ).annotate({ identifier: "AggregatedLogOddsMetric" });
    case 6:
      return S.Array(AggregatedLogOddsMetric);
    case 7:
      return S.suspend(() =>
        S.Struct({ logOddsMetrics: S.optional(ListOfAggregatedLogOddsMetrics) }),
      ).annotate({
        identifier: "AggregatedVariablesImportanceMetrics",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataValidationMetrics: S.optional(DataValidationMetrics),
          trainingMetricsV2: S.optional(TrainingMetricsV2),
          variableImportanceMetrics: S.optional(VariableImportanceMetrics),
          aggregatedVariablesImportanceMetrics: S.optional(AggregatedVariablesImportanceMetrics),
        }),
      ).annotate({ identifier: "TrainingResultV2" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(ModelTypeEnum),
          modelVersionNumber: S.optional(S.String),
          status: S.optional(S.String),
          trainingDataSource: S.optional(TrainingDataSourceEnum),
          trainingDataSchema: S.optional(TrainingDataSchema),
          externalEventsDetail: S.optional(ExternalEventsDetail),
          ingestedEventsDetail: S.optional(IngestedEventsDetail),
          trainingResult: S.optional(TrainingResult),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
          trainingResultV2: S.optional(TrainingResultV2),
        }),
      ).annotate({ identifier: "ModelVersionDetail" });
    case 2:
      return S.Array(ModelVersionDetail);
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelVersionDetails: S.optional(ModelVersionDetailList),
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
          status: S.optional(AsyncJobStatus),
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
      return S.Array(BatchImport);
    case 7:
      return S.suspend(() =>
        S.Struct({
          batchImports: S.optional(BatchImportList),
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
          status: S.optional(AsyncJobStatus),
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
      return S.Array(BatchPrediction);
    case 3:
      return S.suspend(() =>
        S.Struct({
          batchPredictions: S.optional(BatchPredictionList),
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
          eventsDeletionStatus: S.optional(AsyncJobStatus),
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
      return S.Array(Detector);
    case 1:
      return S.suspend(() =>
        S.Struct({ detectors: S.optional(DetectorList), nextToken: S.optional(S.String) }).pipe(ns),
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
          externalModelEndpoints: S.optional(ListOfStrings),
          modelVersions: S.optional(ListOfModelVersions),
          rules: S.optional(RuleList),
          status: S.optional(DetectorVersionStatus),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          ruleExecutionMode: S.optional(RuleExecutionMode),
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
      return S.Array(EntityType);
    case 7:
      return S.suspend(() =>
        S.Struct({ entityTypes: S.optional(EntityTypeList), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
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
      return S.Array(Entity);
    case 4:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          eventTimestamp: S.optional(S.String),
          eventVariables: S.optional(EventAttributeMap),
          currentLabel: S.optional(S.String),
          labelTimestamp: S.optional(S.String),
          entities: S.optional(ListOfEntities),
        }),
      ).annotate({ identifier: "Event" });
    case 5:
      return S.suspend(() => S.Struct({ event: S.optional(Event) }).pipe(ns)).annotate({
        identifier: "GetEventResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ byteBuffer: S.optional(T.Blob), contentType: S.optional(S.String) }),
      ).annotate({ identifier: "ModelEndpointDataBlob" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ ModelEndpointDataBlob.pipe(S.optional));
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
          entities: ListOfEntities,
          eventTimestamp: S.String,
          eventVariables: EventVariableMap,
          externalModelEndpointDataBlobs: S.optional(ExternalModelEndpointDataBlobMap),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetEventPredictionRequest",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelVersion: S.optional(ModelVersion),
          scores: S.optional(ModelPredictionMap),
        }),
      ).annotate({ identifier: "ModelScores" });
    case 3:
      return S.Array(ModelScores);
    case 4:
      return S.suspend(() =>
        S.Struct({ ruleId: S.optional(S.String), outcomes: S.optional(ListOfStrings) }),
      ).annotate({ identifier: "RuleResult" });
    case 5:
      return S.Array(RuleResult);
    case 6:
      return S.suspend(() =>
        S.Struct({ modelEndpoint: S.optional(S.String), modelSource: S.optional(ModelSource) }),
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
          externalModel: S.optional(ExternalModelSummary),
          outputs: S.optional(ExternalModelPredictionMap),
        }),
      ).annotate({ identifier: "ExternalModelOutputs" });
    case 1:
      return S.Array(ExternalModelOutputs);
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelScores: S.optional(ListOfModelScores),
          ruleResults: S.optional(ListOfRuleResults),
          externalModelOutputs: S.optional(ListOfExternalModelOutputs),
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
      return S.Array(EventVariableSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.optional(S.String),
          ruleVersion: S.optional(S.String),
          expression: S.optional(SensitiveString),
          expressionWithValues: S.optional(SensitiveString),
          outcomes: S.optional(ListOfStrings),
          evaluated: S.optional(S.Boolean),
          matched: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EvaluatedRule" });
    case 7:
      return S.Array(EvaluatedRule);
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
      return S.Array(VariableImpactExplanation);
    case 2:
      return S.suspend(() =>
        S.Struct({
          eventVariableNames: S.optional(ListOfStrings),
          relativeImpact: S.optional(S.String),
          logOddsImpact: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AggregatedVariablesImpactExplanation",
      });
    case 3:
      return S.Array(AggregatedVariablesImpactExplanation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          variableImpactExplanations: S.optional(ListOfVariableImpactExplanations),
          aggregatedVariablesImpactExplanations: S.optional(
            ListOfAggregatedVariablesImpactExplanations,
          ),
        }),
      ).annotate({ identifier: "PredictionExplanations" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          outputVariableName: S.optional(S.String),
          evaluationScore: S.optional(S.String),
          predictionExplanations: S.optional(PredictionExplanations),
        }),
      ).annotate({ identifier: "ModelVersionEvaluation" });
    case 6:
      return S.Array(ModelVersionEvaluation);
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelVersion: S.optional(S.String),
          modelType: S.optional(S.String),
          evaluations: S.optional(ListOfModelVersionEvaluations),
        }),
      ).annotate({ identifier: "EvaluatedModelVersion" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(EvaluatedModelVersion);
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelEndpoint: S.optional(S.String),
          useEventVariables: S.optional(S.Boolean),
          inputVariables: S.optional(MapOfStrings),
          outputVariables: S.optional(MapOfStrings),
        }),
      ).annotate({ identifier: "EvaluatedExternalModel" });
    case 2:
      return S.Array(EvaluatedExternalModel);
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
          eventVariables: S.optional(ListOfEventVariableSummaries),
          rules: S.optional(EvaluatedRuleList),
          ruleExecutionMode: S.optional(RuleExecutionMode),
          outcomes: S.optional(ListOfStrings),
          evaluatedModelVersions: S.optional(ListOfEvaluatedModelVersions),
          evaluatedExternalModels: S.optional(ListOfEvaluatedExternalModels),
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
          eventVariables: S.optional(ListOfStrings),
          labels: S.optional(ListOfStrings),
          entityTypes: S.optional(NonEmptyListOfStrings),
          eventIngestion: S.optional(EventIngestion),
          ingestedEventStatistics: S.optional(IngestedEventStatistics),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
          eventOrchestration: S.optional(EventOrchestration),
        }),
      ).annotate({ identifier: "EventType" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(EventType);
    case 1:
      return S.suspend(() =>
        S.Struct({ eventTypes: S.optional(EventTypeList), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
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
          format: S.optional(ModelInputDataFormat),
          useEventVariables: S.Boolean,
          jsonInputTemplate: S.optional(S.String),
          csvInputTemplate: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelInputConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          format: ModelOutputDataFormat,
          jsonKeyToVariableMap: S.optional(JsonKeyToVariableMap),
          csvIndexToVariableMap: S.optional(CsvIndexToVariableMap),
        }),
      ).annotate({ identifier: "ModelOutputConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelEndpoint: S.optional(S.String),
          modelSource: S.optional(ModelSource),
          invokeModelEndpointRoleArn: S.optional(S.String),
          inputConfiguration: S.optional(ModelInputConfiguration),
          outputConfiguration: S.optional(ModelOutputConfiguration),
          modelEndpointStatus: S.optional(ModelEndpointStatus),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExternalModel" });
    case 6:
      return S.Array(ExternalModel);
    case 7:
      return S.suspend(() =>
        S.Struct({
          externalModels: S.optional(ExternalModelList),
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
      return S.suspend(() => S.Struct({ kmsKey: S.optional(KMSKey) }).pipe(ns)).annotate({
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
        S.Struct({ labels: S.optional(LabelList), nextToken: S.optional(S.String) }).pipe(ns),
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
        S.Struct({ elements: S.optional(ElementsList), nextToken: S.optional(S.String) }).pipe(ns),
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
      return S.Array(AllowDenyList);
    case 2:
      return S.suspend(() =>
        S.Struct({ lists: S.optional(AllowDenyLists), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetListsMetadataResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(ModelTypeEnum),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetModelsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          modelId: S.optional(S.String),
          modelType: S.optional(ModelTypeEnum),
          description: S.optional(S.String),
          eventTypeName: S.optional(S.String),
          createdTime: S.optional(S.String),
          lastUpdatedTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Model" });
    case 5:
      return S.Array(Model);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), models: S.optional(ModelList) }).pipe(ns),
      ).annotate({ identifier: "GetModelsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: ModelTypeEnum,
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
          modelType: S.optional(ModelTypeEnum),
          modelVersionNumber: S.optional(S.String),
          trainingDataSource: S.optional(TrainingDataSourceEnum),
          trainingDataSchema: S.optional(TrainingDataSchema),
          externalEventsDetail: S.optional(ExternalEventsDetail),
          ingestedEventsDetail: S.optional(IngestedEventsDetail),
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
        S.Struct({ outcomes: S.optional(OutcomeList), nextToken: S.optional(S.String) }).pipe(ns),
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
          language: S.optional(Language),
          outcomes: S.optional(NonEmptyListOfStrings),
          lastUpdatedTime: S.optional(S.String),
          createdTime: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleDetail" });
    case 5:
      return S.Array(RuleDetail);
    case 6:
      return S.suspend(() =>
        S.Struct({ ruleDetails: S.optional(RuleDetailList), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
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
        S.Struct({ variables: S.optional(VariableList), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "GetVariablesResult" });
    case 1:
      return S.suspend(() => S.Struct({ value: S.optional(S.String) })).annotate({
        identifier: "FilterCondition",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(FilterCondition),
          eventType: S.optional(FilterCondition),
          detectorId: S.optional(FilterCondition),
          detectorVersionId: S.optional(FilterCondition),
          predictionTimeRange: S.optional(PredictionTimeRange),
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
      return S.Array(EventPredictionSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventPredictionSummaries: S.optional(ListOfEventPredictionSummaries),
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
        S.Struct({ tags: S.optional(TagList), nextToken: S.optional(S.String) }).pipe(ns),
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
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutDetectorRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutEntityTypeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          eventVariables: NonEmptyListOfStrings,
          labels: S.optional(ListOfStrings),
          entityTypes: NonEmptyListOfStrings,
          eventIngestion: S.optional(EventIngestion),
          tags: S.optional(TagList),
          eventOrchestration: S.optional(EventOrchestration),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutEventTypeRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          modelEndpoint: S.String,
          modelSource: ModelSource,
          invokeModelEndpointRoleArn: S.String,
          inputConfiguration: ModelInputConfiguration,
          outputConfiguration: ModelOutputConfiguration,
          modelEndpointStatus: ModelEndpointStatus,
          tags: S.optional(TagList),
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
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutLabelRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutOutcomeRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          eventId: S.String,
          eventTypeName: S.String,
          eventTimestamp: S.String,
          eventVariables: EventVariableMap,
          assignedLabel: S.optional(S.String),
          labelTimestamp: S.optional(S.String),
          entities: ListOfEntities,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendEventRequest" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tags: TagList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tagKeys: TagKeyList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          detectorId: S.String,
          detectorVersionId: S.String,
          externalModelEndpoints: ListOfStrings,
          rules: RuleList,
          description: S.optional(S.String),
          modelVersions: S.optional(ListOfModelVersions),
          ruleExecutionMode: S.optional(RuleExecutionMode),
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
          status: DetectorVersionStatus,
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
          elements: S.optional(ElementsList),
          description: S.optional(S.String),
          updateMode: S.optional(ListUpdateMode),
          variableType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateListRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: ModelTypeEnum,
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
          modelType: ModelTypeEnum,
          majorVersionNumber: S.String,
          externalEventsDetail: S.optional(ExternalEventsDetail),
          ingestedEventsDetail: S.optional(IngestedEventsDetail),
          tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateModelVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelType: ModelTypeEnum,
          modelVersionNumber: S.String,
          status: ModelVersionStatus,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateModelVersionStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ rule: Rule, description: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateRuleMetadataRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          rule: Rule,
          description: S.optional(S.String),
          expression: SensitiveString,
          language: Language,
          outcomes: NonEmptyListOfStrings,
          tags: S.optional(TagList),
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
