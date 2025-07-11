import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface LookoutMetrics {
  activateAnomalyDetector(
    input: ActivateAnomalyDetectorRequest,
  ): Effect.Effect<
    ActivateAnomalyDetectorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  backTestAnomalyDetector(
    input: BackTestAnomalyDetectorRequest,
  ): Effect.Effect<
    BackTestAnomalyDetectorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  createAlert(
    input: CreateAlertRequest,
  ): Effect.Effect<
    CreateAlertResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  createAnomalyDetector(
    input: CreateAnomalyDetectorRequest,
  ): Effect.Effect<
    CreateAnomalyDetectorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  createMetricSet(
    input: CreateMetricSetRequest,
  ): Effect.Effect<
    CreateMetricSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  deactivateAnomalyDetector(
    input: DeactivateAnomalyDetectorRequest,
  ): Effect.Effect<
    DeactivateAnomalyDetectorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  deleteAlert(
    input: DeleteAlertRequest,
  ): Effect.Effect<
    DeleteAlertResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  deleteAnomalyDetector(
    input: DeleteAnomalyDetectorRequest,
  ): Effect.Effect<
    DeleteAnomalyDetectorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  describeAlert(
    input: DescribeAlertRequest,
  ): Effect.Effect<
    DescribeAlertResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  describeAnomalyDetectionExecutions(
    input: DescribeAnomalyDetectionExecutionsRequest,
  ): Effect.Effect<
    DescribeAnomalyDetectionExecutionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  describeAnomalyDetector(
    input: DescribeAnomalyDetectorRequest,
  ): Effect.Effect<
    DescribeAnomalyDetectorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  describeMetricSet(
    input: DescribeMetricSetRequest,
  ): Effect.Effect<
    DescribeMetricSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  detectMetricSetConfig(
    input: DetectMetricSetConfigRequest,
  ): Effect.Effect<
    DetectMetricSetConfigResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getAnomalyGroup(
    input: GetAnomalyGroupRequest,
  ): Effect.Effect<
    GetAnomalyGroupResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getDataQualityMetrics(
    input: GetDataQualityMetricsRequest,
  ): Effect.Effect<
    GetDataQualityMetricsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getFeedback(
    input: GetFeedbackRequest,
  ): Effect.Effect<
    GetFeedbackResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getSampleData(
    input: GetSampleDataRequest,
  ): Effect.Effect<
    GetSampleDataResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listAlerts(
    input: ListAlertsRequest,
  ): Effect.Effect<
    ListAlertsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listAnomalyDetectors(
    input: ListAnomalyDetectorsRequest,
  ): Effect.Effect<
    ListAnomalyDetectorsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listAnomalyGroupRelatedMetrics(
    input: ListAnomalyGroupRelatedMetricsRequest,
  ): Effect.Effect<
    ListAnomalyGroupRelatedMetricsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listAnomalyGroupSummaries(
    input: ListAnomalyGroupSummariesRequest,
  ): Effect.Effect<
    ListAnomalyGroupSummariesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listAnomalyGroupTimeSeries(
    input: ListAnomalyGroupTimeSeriesRequest,
  ): Effect.Effect<
    ListAnomalyGroupTimeSeriesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listMetricSets(
    input: ListMetricSetsRequest,
  ): Effect.Effect<
    ListMetricSetsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putFeedback(
    input: PutFeedbackRequest,
  ): Effect.Effect<
    PutFeedbackResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateAlert(
    input: UpdateAlertRequest,
  ): Effect.Effect<
    UpdateAlertResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  updateAnomalyDetector(
    input: UpdateAnomalyDetectorRequest,
  ): Effect.Effect<
    UpdateAnomalyDetectorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  updateMetricSet(
    input: UpdateMetricSetRequest,
  ): Effect.Effect<
    UpdateMetricSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
}

export type Lookoutmetrics = LookoutMetrics;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface Action {
  SNSConfiguration?: SNSConfiguration;
  LambdaConfiguration?: LambdaConfiguration;
}
export interface ActivateAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}
export interface ActivateAnomalyDetectorResponse {}
export type AggregationFunction = "AVG" | "SUM";
export interface Alert {
  Action?: Action;
  AlertDescription?: string;
  AlertArn?: string;
  AnomalyDetectorArn?: string;
  AlertName?: string;
  AlertSensitivityThreshold?: number;
  AlertType?: AlertType;
  AlertStatus?: AlertStatus;
  LastModificationTime?: Date | string;
  CreationTime?: Date | string;
  AlertFilters?: AlertFilters;
}
export type AlertDescription = string;

export interface AlertFilters {
  MetricList?: Array<string>;
  DimensionFilterList?: Array<DimensionFilter>;
}
export type AlertName = string;

export type AlertStatus = "ACTIVE" | "INACTIVE";
export interface AlertSummary {
  AlertArn?: string;
  AnomalyDetectorArn?: string;
  AlertName?: string;
  AlertSensitivityThreshold?: number;
  AlertType?: AlertType;
  AlertStatus?: AlertStatus;
  LastModificationTime?: Date | string;
  CreationTime?: Date | string;
  Tags?: Record<string, string>;
}
export type AlertSummaryList = Array<AlertSummary>;
export type AlertType = "SNS" | "LAMBDA";
export type AnomalyDetectionTaskStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "FAILED_TO_SCHEDULE";
export type AnomalyDetectionTaskStatusMessage = string;

export interface AnomalyDetectorConfig {
  AnomalyDetectorFrequency?: Frequency;
}
export interface AnomalyDetectorConfigSummary {
  AnomalyDetectorFrequency?: Frequency;
}
export interface AnomalyDetectorDataQualityMetric {
  StartTimestamp?: Date | string;
  MetricSetDataQualityMetricList?: Array<MetricSetDataQualityMetric>;
}
export type AnomalyDetectorDataQualityMetricList =
  Array<AnomalyDetectorDataQualityMetric>;
export type AnomalyDetectorDescription = string;

export type AnomalyDetectorFailureType =
  | "ACTIVATION_FAILURE"
  | "BACK_TEST_ACTIVATION_FAILURE"
  | "DELETION_FAILURE"
  | "DEACTIVATION_FAILURE";
export type AnomalyDetectorName = string;

export type AnomalyDetectorStatus =
  | "ACTIVE"
  | "ACTIVATING"
  | "DELETING"
  | "FAILED"
  | "INACTIVE"
  | "LEARNING"
  | "BACK_TEST_ACTIVATING"
  | "BACK_TEST_ACTIVE"
  | "BACK_TEST_COMPLETE"
  | "DEACTIVATED"
  | "DEACTIVATING";
export interface AnomalyDetectorSummary {
  AnomalyDetectorArn?: string;
  AnomalyDetectorName?: string;
  AnomalyDetectorDescription?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Status?: AnomalyDetectorStatus;
  Tags?: Record<string, string>;
}
export type AnomalyDetectorSummaryList = Array<AnomalyDetectorSummary>;
export interface AnomalyGroup {
  StartTime?: string;
  EndTime?: string;
  AnomalyGroupId?: string;
  AnomalyGroupScore?: number;
  PrimaryMetricName?: string;
  MetricLevelImpactList?: Array<MetricLevelImpact>;
}
export interface AnomalyGroupStatistics {
  EvaluationStartDate?: string;
  TotalCount?: number;
  ItemizedMetricStatsList?: Array<ItemizedMetricStats>;
}
export interface AnomalyGroupSummary {
  StartTime?: string;
  EndTime?: string;
  AnomalyGroupId?: string;
  AnomalyGroupScore?: number;
  PrimaryMetricName?: string;
}
export type AnomalyGroupSummaryList = Array<AnomalyGroupSummary>;
export interface AnomalyGroupTimeSeries {
  AnomalyGroupId: string;
  TimeSeriesId?: string;
}
export interface AnomalyGroupTimeSeriesFeedback {
  AnomalyGroupId: string;
  TimeSeriesId: string;
  IsAnomaly: boolean;
}
export interface AppFlowConfig {
  RoleArn?: string;
  FlowName?: string;
}
export type Arn = string;

export type AthenaDatabaseName = string;

export type AthenaDataCatalog = string;

export type AthenaS3ResultsPath = string;

export interface AthenaSourceConfig {
  RoleArn?: string;
  DatabaseName?: string;
  DataCatalog?: string;
  TableName?: string;
  WorkGroupName?: string;
  S3ResultsPath?: string;
  BackTestConfiguration?: BackTestConfiguration;
}
export type AthenaTableName = string;

export type AthenaWorkGroupName = string;

export interface AttributeValue {
  S?: string;
  N?: string;
  B?: string;
  SS?: Array<string>;
  NS?: Array<string>;
  BS?: Array<string>;
}
export interface AutoDetectionMetricSource {
  S3SourceConfig?: AutoDetectionS3SourceConfig;
}
export interface AutoDetectionS3SourceConfig {
  TemplatedPathList?: Array<string>;
  HistoricalDataPathList?: Array<string>;
}
export interface BackTestAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}
export interface BackTestAnomalyDetectorResponse {}
export interface BackTestConfiguration {
  RunBackTestMode: boolean;
}
export type BinaryAttributeValue = string;

export type BinaryListAttributeValue = Array<string>;
export type Charset = string;

export interface CloudWatchConfig {
  RoleArn?: string;
  BackTestConfiguration?: BackTestConfiguration;
}
export type ColumnName = string;

export type Confidence = "HIGH" | "LOW" | "NONE";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}> {}
export interface ContributionMatrix {
  DimensionContributionList?: Array<DimensionContribution>;
}
export interface CreateAlertRequest {
  AlertName: string;
  AlertSensitivityThreshold?: number;
  AlertDescription?: string;
  AnomalyDetectorArn: string;
  Action: Action;
  Tags?: Record<string, string>;
  AlertFilters?: AlertFilters;
}
export interface CreateAlertResponse {
  AlertArn?: string;
}
export interface CreateAnomalyDetectorRequest {
  AnomalyDetectorName: string;
  AnomalyDetectorDescription?: string;
  AnomalyDetectorConfig: AnomalyDetectorConfig;
  KmsKeyArn?: string;
  Tags?: Record<string, string>;
}
export interface CreateAnomalyDetectorResponse {
  AnomalyDetectorArn?: string;
}
export interface CreateMetricSetRequest {
  AnomalyDetectorArn: string;
  MetricSetName: string;
  MetricSetDescription?: string;
  MetricList: Array<Metric>;
  Offset?: number;
  TimestampColumn?: TimestampColumn;
  DimensionList?: Array<string>;
  MetricSetFrequency?: Frequency;
  MetricSource: MetricSource;
  Timezone?: string;
  Tags?: Record<string, string>;
  DimensionFilterList?: Array<MetricSetDimensionFilter>;
}
export interface CreateMetricSetResponse {
  MetricSetArn?: string;
}
export type CSVFileCompression = "NONE" | "GZIP";
export interface CsvFormatDescriptor {
  FileCompression?: CSVFileCompression;
  Charset?: string;
  ContainsHeader?: boolean;
  Delimiter?: string;
  HeaderList?: Array<string>;
  QuoteSymbol?: string;
}
export type DatabaseHost = string;

export type DatabasePort = number;

export type DataItem = string;

export interface DataQualityMetric {
  MetricType?: DataQualityMetricType;
  MetricDescription?: string;
  RelatedColumnName?: string;
  MetricValue?: number;
}
export type DataQualityMetricDescription = string;

export type DataQualityMetricList = Array<DataQualityMetric>;
export type DataQualityMetricType =
  | "COLUMN_COMPLETENESS"
  | "DIMENSION_UNIQUENESS"
  | "TIME_SERIES_COUNT"
  | "ROWS_PROCESSED"
  | "ROWS_PARTIAL_COMPLIANCE"
  | "INVALID_ROWS_COMPLIANCE"
  | "BACKTEST_TRAINING_DATA_START_TIME_STAMP"
  | "BACKTEST_TRAINING_DATA_END_TIME_STAMP"
  | "BACKTEST_INFERENCE_DATA_START_TIME_STAMP"
  | "BACKTEST_INFERENCE_DATA_END_TIME_STAMP";
export type DateTimeFormat = string;

export interface DeactivateAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}
export interface DeactivateAnomalyDetectorResponse {}
export interface DeleteAlertRequest {
  AlertArn: string;
}
export interface DeleteAlertResponse {}
export interface DeleteAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}
export interface DeleteAnomalyDetectorResponse {}
export type Delimiter = string;

export interface DescribeAlertRequest {
  AlertArn: string;
}
export interface DescribeAlertResponse {
  Alert?: Alert;
}
export interface DescribeAnomalyDetectionExecutionsRequest {
  AnomalyDetectorArn: string;
  Timestamp?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeAnomalyDetectionExecutionsResponse {
  ExecutionList?: Array<ExecutionStatus>;
  NextToken?: string;
}
export interface DescribeAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}
export interface DescribeAnomalyDetectorResponse {
  AnomalyDetectorArn?: string;
  AnomalyDetectorName?: string;
  AnomalyDetectorDescription?: string;
  AnomalyDetectorConfig?: AnomalyDetectorConfigSummary;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Status?: AnomalyDetectorStatus;
  FailureReason?: string;
  KmsKeyArn?: string;
  FailureType?: AnomalyDetectorFailureType;
}
export interface DescribeMetricSetRequest {
  MetricSetArn: string;
}
export interface DescribeMetricSetResponse {
  MetricSetArn?: string;
  AnomalyDetectorArn?: string;
  MetricSetName?: string;
  MetricSetDescription?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Offset?: number;
  MetricList?: Array<Metric>;
  TimestampColumn?: TimestampColumn;
  DimensionList?: Array<string>;
  MetricSetFrequency?: Frequency;
  Timezone?: string;
  MetricSource?: MetricSource;
  DimensionFilterList?: Array<MetricSetDimensionFilter>;
}
export interface DetectedCsvFormatDescriptor {
  FileCompression?: DetectedField;
  Charset?: DetectedField;
  ContainsHeader?: DetectedField;
  Delimiter?: DetectedField;
  HeaderList?: DetectedField;
  QuoteSymbol?: DetectedField;
}
export interface DetectedField {
  Value?: AttributeValue;
  Confidence?: Confidence;
  Message?: string;
}
export interface DetectedFileFormatDescriptor {
  CsvFormatDescriptor?: DetectedCsvFormatDescriptor;
  JsonFormatDescriptor?: DetectedJsonFormatDescriptor;
}
export interface DetectedJsonFormatDescriptor {
  FileCompression?: DetectedField;
  Charset?: DetectedField;
}
export interface DetectedMetricSetConfig {
  Offset?: DetectedField;
  MetricSetFrequency?: DetectedField;
  MetricSource?: DetectedMetricSource;
}
export interface DetectedMetricSource {
  S3SourceConfig?: DetectedS3SourceConfig;
}
export interface DetectedS3SourceConfig {
  FileFormatDescriptor?: DetectedFileFormatDescriptor;
}
export interface DetectMetricSetConfigRequest {
  AnomalyDetectorArn: string;
  AutoDetectionMetricSource: AutoDetectionMetricSource;
}
export interface DetectMetricSetConfigResponse {
  DetectedMetricSetConfig?: DetectedMetricSetConfig;
}
export interface DimensionContribution {
  DimensionName?: string;
  DimensionValueContributionList?: Array<DimensionValueContribution>;
}
export type DimensionContributionList = Array<DimensionContribution>;
export interface DimensionFilter {
  DimensionName?: string;
  DimensionValueList?: Array<string>;
}
export type DimensionFilterList = Array<DimensionFilter>;
export type DimensionList = Array<string>;
export interface DimensionNameValue {
  DimensionName: string;
  DimensionValue: string;
}
export type DimensionNameValueList = Array<DimensionNameValue>;
export type DimensionValue = string;

export interface DimensionValueContribution {
  DimensionValue?: string;
  ContributionScore?: number;
}
export type DimensionValueContributionList = Array<DimensionValueContribution>;
export type DimensionValueList = Array<string>;
export type Double = number;

export type ErrorMessage = string;

export type ExecutionList = Array<ExecutionStatus>;
export interface ExecutionStatus {
  Timestamp?: string;
  Status?: AnomalyDetectionTaskStatus;
  FailureReason?: string;
}
export type FieldName = string;

export interface FileFormatDescriptor {
  CsvFormatDescriptor?: CsvFormatDescriptor;
  JsonFormatDescriptor?: JsonFormatDescriptor;
}
export interface Filter {
  DimensionValue?: string;
  FilterOperation?: FilterOperation;
}
export type FilterList = Array<Filter>;
export type FilterOperation = "EQUALS";
export type FlowName = string;

export type Frequency = "P1D" | "PT1H" | "PT10M" | "PT5M";
export interface GetAnomalyGroupRequest {
  AnomalyGroupId: string;
  AnomalyDetectorArn: string;
}
export interface GetAnomalyGroupResponse {
  AnomalyGroup?: AnomalyGroup;
}
export interface GetDataQualityMetricsRequest {
  AnomalyDetectorArn: string;
  MetricSetArn?: string;
}
export interface GetDataQualityMetricsResponse {
  AnomalyDetectorDataQualityMetricList?: Array<AnomalyDetectorDataQualityMetric>;
}
export interface GetFeedbackRequest {
  AnomalyDetectorArn: string;
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeries;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetFeedbackResponse {
  AnomalyGroupTimeSeriesFeedback?: Array<TimeSeriesFeedback>;
  NextToken?: string;
}
export interface GetSampleDataRequest {
  S3SourceConfig?: SampleDataS3SourceConfig;
}
export interface GetSampleDataResponse {
  HeaderValues?: Array<string>;
  SampleRows?: Array<Array<string>>;
}
export type HeaderList = Array<string>;
export type HeaderValue = string;

export type HeaderValueList = Array<string>;
export type HistoricalDataPath = string;

export type HistoricalDataPathList = Array<string>;
export type Integer = number;

export interface InterMetricImpactDetails {
  MetricName?: string;
  AnomalyGroupId?: string;
  RelationshipType?: RelationshipType;
  ContributionPercentage?: number;
}
export type InterMetricImpactList = Array<InterMetricImpactDetails>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface ItemizedMetricStats {
  MetricName?: string;
  OccurrenceCount?: number;
}
export type ItemizedMetricStatsList = Array<ItemizedMetricStats>;
export type JsonFileCompression = "NONE" | "GZIP";
export interface JsonFormatDescriptor {
  FileCompression?: JsonFileCompression;
  Charset?: string;
}
export type KmsKeyArn = string;

export interface LambdaConfiguration {
  RoleArn: string;
  LambdaArn: string;
}
export interface ListAlertsRequest {
  AnomalyDetectorArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAlertsResponse {
  AlertSummaryList?: Array<AlertSummary>;
  NextToken?: string;
}
export interface ListAnomalyDetectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAnomalyDetectorsResponse {
  AnomalyDetectorSummaryList?: Array<AnomalyDetectorSummary>;
  NextToken?: string;
}
export interface ListAnomalyGroupRelatedMetricsRequest {
  AnomalyDetectorArn: string;
  AnomalyGroupId: string;
  RelationshipTypeFilter?: RelationshipType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAnomalyGroupRelatedMetricsResponse {
  InterMetricImpactList?: Array<InterMetricImpactDetails>;
  NextToken?: string;
}
export interface ListAnomalyGroupSummariesRequest {
  AnomalyDetectorArn: string;
  SensitivityThreshold: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAnomalyGroupSummariesResponse {
  AnomalyGroupSummaryList?: Array<AnomalyGroupSummary>;
  AnomalyGroupStatistics?: AnomalyGroupStatistics;
  NextToken?: string;
}
export interface ListAnomalyGroupTimeSeriesRequest {
  AnomalyDetectorArn: string;
  AnomalyGroupId: string;
  MetricName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAnomalyGroupTimeSeriesResponse {
  AnomalyGroupId?: string;
  MetricName?: string;
  TimestampList?: Array<string>;
  NextToken?: string;
  TimeSeriesList?: Array<TimeSeries>;
}
export interface ListMetricSetsRequest {
  AnomalyDetectorArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMetricSetsResponse {
  MetricSetSummaryList?: Array<MetricSetSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MaxResults = number;

export type Message = string;

export interface Metric {
  MetricName: string;
  AggregationFunction: AggregationFunction;
  Namespace?: string;
}
export type MetricChangePercentage = number;

export interface MetricLevelImpact {
  MetricName?: string;
  NumTimeSeries?: number;
  ContributionMatrix?: ContributionMatrix;
}
export type MetricLevelImpactList = Array<MetricLevelImpact>;
export type MetricList = Array<Metric>;
export type MetricName = string;

export type MetricNameList = Array<string>;
export interface MetricSetDataQualityMetric {
  MetricSetArn?: string;
  DataQualityMetricList?: Array<DataQualityMetric>;
}
export type MetricSetDataQualityMetricList = Array<MetricSetDataQualityMetric>;
export type MetricSetDescription = string;

export interface MetricSetDimensionFilter {
  Name?: string;
  FilterList?: Array<Filter>;
}
export type MetricSetDimensionFilterList = Array<MetricSetDimensionFilter>;
export type MetricSetName = string;

export interface MetricSetSummary {
  MetricSetArn?: string;
  AnomalyDetectorArn?: string;
  MetricSetDescription?: string;
  MetricSetName?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Tags?: Record<string, string>;
}
export type MetricSetSummaryList = Array<MetricSetSummary>;
export interface MetricSource {
  S3SourceConfig?: S3SourceConfig;
  AppFlowConfig?: AppFlowConfig;
  CloudWatchConfig?: CloudWatchConfig;
  RDSSourceConfig?: RDSSourceConfig;
  RedshiftSourceConfig?: RedshiftSourceConfig;
  AthenaSourceConfig?: AthenaSourceConfig;
}
export type MetricValue = number;

export type MetricValueList = Array<number>;
export type Namespace = string;

export type NextToken = string;

export type NumberAttributeValue = string;

export type NumberListAttributeValue = Array<string>;
export type Offset = number;

export type PoirotSecretManagerArn = string;

export interface PutFeedbackRequest {
  AnomalyDetectorArn: string;
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeriesFeedback;
}
export interface PutFeedbackResponse {}
export type QuotaCode = string;

export type QuoteSymbol = string;

export type RDSDatabaseIdentifier = string;

export type RDSDatabaseName = string;

export interface RDSSourceConfig {
  DBInstanceIdentifier?: string;
  DatabaseHost?: string;
  DatabasePort?: number;
  SecretManagerArn?: string;
  DatabaseName?: string;
  TableName?: string;
  RoleArn?: string;
  VpcConfiguration?: VpcConfiguration;
}
export type RedshiftClusterIdentifier = string;

export type RedshiftDatabaseName = string;

export interface RedshiftSourceConfig {
  ClusterIdentifier?: string;
  DatabaseHost?: string;
  DatabasePort?: number;
  SecretManagerArn?: string;
  DatabaseName?: string;
  TableName?: string;
  RoleArn?: string;
  VpcConfiguration?: VpcConfiguration;
}
export type RelatedColumnName = string;

export type RelationshipType =
  | "CAUSE_OF_INPUT_ANOMALY_GROUP"
  | "EFFECT_OF_INPUT_ANOMALY_GROUP";
export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}> {}
export type ResourceType = string;

export interface S3SourceConfig {
  RoleArn?: string;
  TemplatedPathList?: Array<string>;
  HistoricalDataPathList?: Array<string>;
  FileFormatDescriptor?: FileFormatDescriptor;
}
export interface SampleDataS3SourceConfig {
  RoleArn: string;
  TemplatedPathList?: Array<string>;
  HistoricalDataPathList?: Array<string>;
  FileFormatDescriptor: FileFormatDescriptor;
}
export type SampleRow = Array<string>;
export type SampleRows = Array<Array<string>>;
export type Score = number;

export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export type SensitivityThreshold = number;

export type ServiceCode = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
}> {}
export interface SNSConfiguration {
  RoleArn: string;
  SnsTopicArn: string;
  SnsFormat?: SnsFormat;
}
export type SnsFormat = "LONG_TEXT" | "SHORT_TEXT" | "JSON";
export type StringAttributeValue = string;

export type StringListAttributeValue = Array<string>;
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export type TableName = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TemplatedPath = string;

export type TemplatedPathList = Array<string>;
export interface TimeSeries {
  TimeSeriesId: string;
  DimensionList: Array<DimensionNameValue>;
  MetricValueList: Array<number>;
}
export interface TimeSeriesFeedback {
  TimeSeriesId?: string;
  IsAnomaly?: boolean;
}
export type TimeSeriesFeedbackList = Array<TimeSeriesFeedback>;
export type TimeSeriesId = string;

export type TimeSeriesList = Array<TimeSeries>;
export type Timestamp = Date | string;

export interface TimestampColumn {
  ColumnName?: string;
  ColumnFormat?: string;
}
export type TimestampList = Array<string>;
export type TimestampString = string;

export type Timezone = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAlertRequest {
  AlertArn: string;
  AlertDescription?: string;
  AlertSensitivityThreshold?: number;
  Action?: Action;
  AlertFilters?: AlertFilters;
}
export interface UpdateAlertResponse {
  AlertArn?: string;
}
export interface UpdateAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
  KmsKeyArn?: string;
  AnomalyDetectorDescription?: string;
  AnomalyDetectorConfig?: AnomalyDetectorConfig;
}
export interface UpdateAnomalyDetectorResponse {
  AnomalyDetectorArn?: string;
}
export interface UpdateMetricSetRequest {
  MetricSetArn: string;
  MetricSetDescription?: string;
  MetricList?: Array<Metric>;
  Offset?: number;
  TimestampColumn?: TimestampColumn;
  DimensionList?: Array<string>;
  MetricSetFrequency?: Frequency;
  MetricSource?: MetricSource;
  DimensionFilterList?: Array<MetricSetDimensionFilter>;
}
export interface UpdateMetricSetResponse {
  MetricSetArn?: string;
}
export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export interface VpcConfiguration {
  SubnetIdList: Array<string>;
  SecurityGroupIdList: Array<string>;
}
export declare namespace ActivateAnomalyDetector {
  export type Input = ActivateAnomalyDetectorRequest;
  export type Output = ActivateAnomalyDetectorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BackTestAnomalyDetector {
  export type Input = BackTestAnomalyDetectorRequest;
  export type Output = BackTestAnomalyDetectorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAlert {
  export type Input = CreateAlertRequest;
  export type Output = CreateAlertResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAnomalyDetector {
  export type Input = CreateAnomalyDetectorRequest;
  export type Output = CreateAnomalyDetectorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMetricSet {
  export type Input = CreateMetricSetRequest;
  export type Output = CreateMetricSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeactivateAnomalyDetector {
  export type Input = DeactivateAnomalyDetectorRequest;
  export type Output = DeactivateAnomalyDetectorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAlert {
  export type Input = DeleteAlertRequest;
  export type Output = DeleteAlertResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAnomalyDetector {
  export type Input = DeleteAnomalyDetectorRequest;
  export type Output = DeleteAnomalyDetectorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAlert {
  export type Input = DescribeAlertRequest;
  export type Output = DescribeAlertResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAnomalyDetectionExecutions {
  export type Input = DescribeAnomalyDetectionExecutionsRequest;
  export type Output = DescribeAnomalyDetectionExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAnomalyDetector {
  export type Input = DescribeAnomalyDetectorRequest;
  export type Output = DescribeAnomalyDetectorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeMetricSet {
  export type Input = DescribeMetricSetRequest;
  export type Output = DescribeMetricSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetectMetricSetConfig {
  export type Input = DetectMetricSetConfigRequest;
  export type Output = DetectMetricSetConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAnomalyGroup {
  export type Input = GetAnomalyGroupRequest;
  export type Output = GetAnomalyGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataQualityMetrics {
  export type Input = GetDataQualityMetricsRequest;
  export type Output = GetDataQualityMetricsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFeedback {
  export type Input = GetFeedbackRequest;
  export type Output = GetFeedbackResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSampleData {
  export type Input = GetSampleDataRequest;
  export type Output = GetSampleDataResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAlerts {
  export type Input = ListAlertsRequest;
  export type Output = ListAlertsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnomalyDetectors {
  export type Input = ListAnomalyDetectorsRequest;
  export type Output = ListAnomalyDetectorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnomalyGroupRelatedMetrics {
  export type Input = ListAnomalyGroupRelatedMetricsRequest;
  export type Output = ListAnomalyGroupRelatedMetricsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnomalyGroupSummaries {
  export type Input = ListAnomalyGroupSummariesRequest;
  export type Output = ListAnomalyGroupSummariesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnomalyGroupTimeSeries {
  export type Input = ListAnomalyGroupTimeSeriesRequest;
  export type Output = ListAnomalyGroupTimeSeriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMetricSets {
  export type Input = ListMetricSetsRequest;
  export type Output = ListMetricSetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutFeedback {
  export type Input = PutFeedbackRequest;
  export type Output = PutFeedbackResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAlert {
  export type Input = UpdateAlertRequest;
  export type Output = UpdateAlertResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAnomalyDetector {
  export type Input = UpdateAnomalyDetectorRequest;
  export type Output = UpdateAnomalyDetectorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMetricSet {
  export type Input = UpdateMetricSetRequest;
  export type Output = UpdateMetricSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}
