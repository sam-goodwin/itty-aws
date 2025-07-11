import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonForecast {
  createAutoPredictor(
    input: CreateAutoPredictorRequest,
  ): Effect.Effect<
    CreateAutoPredictorResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | CommonAwsError
  >;
  createDatasetGroup(
    input: CreateDatasetGroupRequest,
  ): Effect.Effect<
    CreateDatasetGroupResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createDatasetImportJob(
    input: CreateDatasetImportJobRequest,
  ): Effect.Effect<
    CreateDatasetImportJobResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createExplainability(
    input: CreateExplainabilityRequest,
  ): Effect.Effect<
    CreateExplainabilityResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createExplainabilityExport(
    input: CreateExplainabilityExportRequest,
  ): Effect.Effect<
    CreateExplainabilityExportResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createForecast(
    input: CreateForecastRequest,
  ): Effect.Effect<
    CreateForecastResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createForecastExportJob(
    input: CreateForecastExportJobRequest,
  ): Effect.Effect<
    CreateForecastExportJobResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createMonitor(
    input: CreateMonitorRequest,
  ): Effect.Effect<
    CreateMonitorResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createPredictor(
    input: CreatePredictorRequest,
  ): Effect.Effect<
    CreatePredictorResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createPredictorBacktestExportJob(
    input: CreatePredictorBacktestExportJobRequest,
  ): Effect.Effect<
    CreatePredictorBacktestExportJobResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createWhatIfAnalysis(
    input: CreateWhatIfAnalysisRequest,
  ): Effect.Effect<
    CreateWhatIfAnalysisResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createWhatIfForecast(
    input: CreateWhatIfForecastRequest,
  ): Effect.Effect<
    CreateWhatIfForecastResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  createWhatIfForecastExport(
    input: CreateWhatIfForecastExportRequest,
  ): Effect.Effect<
    CreateWhatIfForecastExportResponse,
    InvalidInputException | LimitExceededException | ResourceAlreadyExistsException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteDatasetGroup(
    input: DeleteDatasetGroupRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteDatasetImportJob(
    input: DeleteDatasetImportJobRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteExplainability(
    input: DeleteExplainabilityRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteExplainabilityExport(
    input: DeleteExplainabilityExportRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteForecast(
    input: DeleteForecastRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteForecastExportJob(
    input: DeleteForecastExportJobRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteMonitor(
    input: DeleteMonitorRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deletePredictor(
    input: DeletePredictorRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deletePredictorBacktestExportJob(
    input: DeletePredictorBacktestExportJobRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteResourceTree(
    input: DeleteResourceTreeRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteWhatIfAnalysis(
    input: DeleteWhatIfAnalysisRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteWhatIfForecast(
    input: DeleteWhatIfForecastRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteWhatIfForecastExport(
    input: DeleteWhatIfForecastExportRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  describeAutoPredictor(
    input: DescribeAutoPredictorRequest,
  ): Effect.Effect<
    DescribeAutoPredictorResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDatasetGroup(
    input: DescribeDatasetGroupRequest,
  ): Effect.Effect<
    DescribeDatasetGroupResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeDatasetImportJob(
    input: DescribeDatasetImportJobRequest,
  ): Effect.Effect<
    DescribeDatasetImportJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeExplainability(
    input: DescribeExplainabilityRequest,
  ): Effect.Effect<
    DescribeExplainabilityResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeExplainabilityExport(
    input: DescribeExplainabilityExportRequest,
  ): Effect.Effect<
    DescribeExplainabilityExportResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeForecast(
    input: DescribeForecastRequest,
  ): Effect.Effect<
    DescribeForecastResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeForecastExportJob(
    input: DescribeForecastExportJobRequest,
  ): Effect.Effect<
    DescribeForecastExportJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeMonitor(
    input: DescribeMonitorRequest,
  ): Effect.Effect<
    DescribeMonitorResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describePredictor(
    input: DescribePredictorRequest,
  ): Effect.Effect<
    DescribePredictorResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describePredictorBacktestExportJob(
    input: DescribePredictorBacktestExportJobRequest,
  ): Effect.Effect<
    DescribePredictorBacktestExportJobResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeWhatIfAnalysis(
    input: DescribeWhatIfAnalysisRequest,
  ): Effect.Effect<
    DescribeWhatIfAnalysisResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeWhatIfForecast(
    input: DescribeWhatIfForecastRequest,
  ): Effect.Effect<
    DescribeWhatIfForecastResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  describeWhatIfForecastExport(
    input: DescribeWhatIfForecastExportRequest,
  ): Effect.Effect<
    DescribeWhatIfForecastExportResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  getAccuracyMetrics(
    input: GetAccuracyMetricsRequest,
  ): Effect.Effect<
    GetAccuracyMetricsResponse,
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  listDatasetGroups(
    input: ListDatasetGroupsRequest,
  ): Effect.Effect<
    ListDatasetGroupsResponse,
    InvalidNextTokenException | CommonAwsError
  >;
  listDatasetImportJobs(
    input: ListDatasetImportJobsRequest,
  ): Effect.Effect<
    ListDatasetImportJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listDatasets(
    input: ListDatasetsRequest,
  ): Effect.Effect<
    ListDatasetsResponse,
    InvalidNextTokenException | CommonAwsError
  >;
  listExplainabilities(
    input: ListExplainabilitiesRequest,
  ): Effect.Effect<
    ListExplainabilitiesResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listExplainabilityExports(
    input: ListExplainabilityExportsRequest,
  ): Effect.Effect<
    ListExplainabilityExportsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listForecastExportJobs(
    input: ListForecastExportJobsRequest,
  ): Effect.Effect<
    ListForecastExportJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listForecasts(
    input: ListForecastsRequest,
  ): Effect.Effect<
    ListForecastsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listMonitorEvaluations(
    input: ListMonitorEvaluationsRequest,
  ): Effect.Effect<
    ListMonitorEvaluationsResponse,
    InvalidInputException | InvalidNextTokenException | ResourceNotFoundException | CommonAwsError
  >;
  listMonitors(
    input: ListMonitorsRequest,
  ): Effect.Effect<
    ListMonitorsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listPredictorBacktestExportJobs(
    input: ListPredictorBacktestExportJobsRequest,
  ): Effect.Effect<
    ListPredictorBacktestExportJobsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listPredictors(
    input: ListPredictorsRequest,
  ): Effect.Effect<
    ListPredictorsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  listWhatIfAnalyses(
    input: ListWhatIfAnalysesRequest,
  ): Effect.Effect<
    ListWhatIfAnalysesResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listWhatIfForecastExports(
    input: ListWhatIfForecastExportsRequest,
  ): Effect.Effect<
    ListWhatIfForecastExportsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  listWhatIfForecasts(
    input: ListWhatIfForecastsRequest,
  ): Effect.Effect<
    ListWhatIfForecastsResponse,
    InvalidInputException | InvalidNextTokenException | CommonAwsError
  >;
  resumeResource(
    input: ResumeResourceRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  stopResource(
    input: StopResourceRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InvalidInputException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  updateDatasetGroup(
    input: UpdateDatasetGroupRequest,
  ): Effect.Effect<
    UpdateDatasetGroupResponse,
    InvalidInputException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
}

export type Forecast = AmazonForecast;

export interface Action {
  AttributeName: string;
  Operation: Operation;
  Value: number;
}
export interface AdditionalDataset {
  Name: string;
  Configuration?: Record<string, Array<string>>;
}
export type AdditionalDatasets = Array<AdditionalDataset>;
export type Arn = string;

export type ArnList = Array<string>;
export interface AttributeConfig {
  AttributeName: string;
  Transformations: Record<string, string>;
}
export type AttributeConfigs = Array<AttributeConfig>;
export type AttributeType = "STRING" | "INTEGER" | "FLOAT" | "TIMESTAMP" | "GEOLOCATION";
export type AttributeValue = string;

export type AutoMLOverrideStrategy = "LatencyOptimized" | "AccuracyOptimized";
export interface Baseline {
  PredictorBaseline?: PredictorBaseline;
}
export interface BaselineMetric {
  Name?: string;
  Value?: number;
}
export type BaselineMetrics = Array<BaselineMetric>;
export interface CategoricalParameterRange {
  Name: string;
  Values: Array<string>;
}
export type CategoricalParameterRanges = Array<CategoricalParameterRange>;
export type Condition = "EQUALS" | "NOT_EQUALS" | "LESS_THAN" | "GREATER_THAN";
export type Configuration = Record<string, Array<string>>;
export interface ContinuousParameterRange {
  Name: string;
  MaxValue: number;
  MinValue: number;
  ScalingType?: ScalingType;
}
export type ContinuousParameterRanges = Array<ContinuousParameterRange>;
export interface CreateAutoPredictorRequest {
  PredictorName: string;
  ForecastHorizon?: number;
  ForecastTypes?: Array<string>;
  ForecastDimensions?: Array<string>;
  ForecastFrequency?: string;
  DataConfig?: DataConfig;
  EncryptionConfig?: EncryptionConfig;
  ReferencePredictorArn?: string;
  OptimizationMetric?: OptimizationMetric;
  ExplainPredictor?: boolean;
  Tags?: Array<Tag>;
  MonitorConfig?: MonitorConfig;
  TimeAlignmentBoundary?: TimeAlignmentBoundary;
}
export interface CreateAutoPredictorResponse {
  PredictorArn?: string;
}
export interface CreateDatasetGroupRequest {
  DatasetGroupName: string;
  Domain: Domain;
  DatasetArns?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateDatasetGroupResponse {
  DatasetGroupArn?: string;
}
export interface CreateDatasetImportJobRequest {
  DatasetImportJobName: string;
  DatasetArn: string;
  DataSource: DataSource;
  TimestampFormat?: string;
  TimeZone?: string;
  UseGeolocationForTimeZone?: boolean;
  GeolocationFormat?: string;
  Tags?: Array<Tag>;
  Format?: string;
  ImportMode?: ImportMode;
}
export interface CreateDatasetImportJobResponse {
  DatasetImportJobArn?: string;
}
export interface CreateDatasetRequest {
  DatasetName: string;
  Domain: Domain;
  DatasetType: DatasetType;
  DataFrequency?: string;
  Schema: Schema;
  EncryptionConfig?: EncryptionConfig;
  Tags?: Array<Tag>;
}
export interface CreateDatasetResponse {
  DatasetArn?: string;
}
export interface CreateExplainabilityExportRequest {
  ExplainabilityExportName: string;
  ExplainabilityArn: string;
  Destination: DataDestination;
  Tags?: Array<Tag>;
  Format?: string;
}
export interface CreateExplainabilityExportResponse {
  ExplainabilityExportArn?: string;
}
export interface CreateExplainabilityRequest {
  ExplainabilityName: string;
  ResourceArn: string;
  ExplainabilityConfig: ExplainabilityConfig;
  DataSource?: DataSource;
  Schema?: Schema;
  EnableVisualization?: boolean;
  StartDateTime?: string;
  EndDateTime?: string;
  Tags?: Array<Tag>;
}
export interface CreateExplainabilityResponse {
  ExplainabilityArn?: string;
}
export interface CreateForecastExportJobRequest {
  ForecastExportJobName: string;
  ForecastArn: string;
  Destination: DataDestination;
  Tags?: Array<Tag>;
  Format?: string;
}
export interface CreateForecastExportJobResponse {
  ForecastExportJobArn?: string;
}
export interface CreateForecastRequest {
  ForecastName: string;
  PredictorArn: string;
  ForecastTypes?: Array<string>;
  Tags?: Array<Tag>;
  TimeSeriesSelector?: TimeSeriesSelector;
}
export interface CreateForecastResponse {
  ForecastArn?: string;
}
export interface CreateMonitorRequest {
  MonitorName: string;
  ResourceArn: string;
  Tags?: Array<Tag>;
}
export interface CreateMonitorResponse {
  MonitorArn?: string;
}
export interface CreatePredictorBacktestExportJobRequest {
  PredictorBacktestExportJobName: string;
  PredictorArn: string;
  Destination: DataDestination;
  Tags?: Array<Tag>;
  Format?: string;
}
export interface CreatePredictorBacktestExportJobResponse {
  PredictorBacktestExportJobArn?: string;
}
export interface CreatePredictorRequest {
  PredictorName: string;
  AlgorithmArn?: string;
  ForecastHorizon: number;
  ForecastTypes?: Array<string>;
  PerformAutoML?: boolean;
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy;
  PerformHPO?: boolean;
  TrainingParameters?: Record<string, string>;
  EvaluationParameters?: EvaluationParameters;
  HPOConfig?: HyperParameterTuningJobConfig;
  InputDataConfig: InputDataConfig;
  FeaturizationConfig: FeaturizationConfig;
  EncryptionConfig?: EncryptionConfig;
  Tags?: Array<Tag>;
  OptimizationMetric?: OptimizationMetric;
}
export interface CreatePredictorResponse {
  PredictorArn?: string;
}
export interface CreateWhatIfAnalysisRequest {
  WhatIfAnalysisName: string;
  ForecastArn: string;
  TimeSeriesSelector?: TimeSeriesSelector;
  Tags?: Array<Tag>;
}
export interface CreateWhatIfAnalysisResponse {
  WhatIfAnalysisArn?: string;
}
export interface CreateWhatIfForecastExportRequest {
  WhatIfForecastExportName: string;
  WhatIfForecastArns: Array<string>;
  Destination: DataDestination;
  Tags?: Array<Tag>;
  Format?: string;
}
export interface CreateWhatIfForecastExportResponse {
  WhatIfForecastExportArn?: string;
}
export interface CreateWhatIfForecastRequest {
  WhatIfForecastName: string;
  WhatIfAnalysisArn: string;
  TimeSeriesTransformations?: Array<TimeSeriesTransformation>;
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
  Tags?: Array<Tag>;
}
export interface CreateWhatIfForecastResponse {
  WhatIfForecastArn?: string;
}
export interface DataConfig {
  DatasetGroupArn: string;
  AttributeConfigs?: Array<AttributeConfig>;
  AdditionalDatasets?: Array<AdditionalDataset>;
}
export interface DataDestination {
  S3Config: S3Config;
}
export type DatasetGroups = Array<DatasetGroupSummary>;
export interface DatasetGroupSummary {
  DatasetGroupArn?: string;
  DatasetGroupName?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export type DatasetImportJobs = Array<DatasetImportJobSummary>;
export interface DatasetImportJobSummary {
  DatasetImportJobArn?: string;
  DatasetImportJobName?: string;
  DataSource?: DataSource;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  ImportMode?: ImportMode;
}
export type Datasets = Array<DatasetSummary>;
export interface DatasetSummary {
  DatasetArn?: string;
  DatasetName?: string;
  DatasetType?: DatasetType;
  Domain?: Domain;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export type DatasetType = "TARGET_TIME_SERIES" | "RELATED_TIME_SERIES" | "ITEM_METADATA";
export interface DataSource {
  S3Config: S3Config;
}
export type DayOfMonth = number;

export type DayOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
export interface DeleteDatasetGroupRequest {
  DatasetGroupArn: string;
}
export interface DeleteDatasetImportJobRequest {
  DatasetImportJobArn: string;
}
export interface DeleteDatasetRequest {
  DatasetArn: string;
}
export interface DeleteExplainabilityExportRequest {
  ExplainabilityExportArn: string;
}
export interface DeleteExplainabilityRequest {
  ExplainabilityArn: string;
}
export interface DeleteForecastExportJobRequest {
  ForecastExportJobArn: string;
}
export interface DeleteForecastRequest {
  ForecastArn: string;
}
export interface DeleteMonitorRequest {
  MonitorArn: string;
}
export interface DeletePredictorBacktestExportJobRequest {
  PredictorBacktestExportJobArn: string;
}
export interface DeletePredictorRequest {
  PredictorArn: string;
}
export interface DeleteResourceTreeRequest {
  ResourceArn: string;
}
export interface DeleteWhatIfAnalysisRequest {
  WhatIfAnalysisArn: string;
}
export interface DeleteWhatIfForecastExportRequest {
  WhatIfForecastExportArn: string;
}
export interface DeleteWhatIfForecastRequest {
  WhatIfForecastArn: string;
}
export interface DescribeAutoPredictorRequest {
  PredictorArn: string;
}
export interface DescribeAutoPredictorResponse {
  PredictorArn?: string;
  PredictorName?: string;
  ForecastHorizon?: number;
  ForecastTypes?: Array<string>;
  ForecastFrequency?: string;
  ForecastDimensions?: Array<string>;
  DatasetImportJobArns?: Array<string>;
  DataConfig?: DataConfig;
  EncryptionConfig?: EncryptionConfig;
  ReferencePredictorSummary?: ReferencePredictorSummary;
  EstimatedTimeRemainingInMinutes?: number;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  OptimizationMetric?: OptimizationMetric;
  ExplainabilityInfo?: ExplainabilityInfo;
  MonitorInfo?: MonitorInfo;
  TimeAlignmentBoundary?: TimeAlignmentBoundary;
}
export interface DescribeDatasetGroupRequest {
  DatasetGroupArn: string;
}
export interface DescribeDatasetGroupResponse {
  DatasetGroupName?: string;
  DatasetGroupArn?: string;
  DatasetArns?: Array<string>;
  Domain?: Domain;
  Status?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface DescribeDatasetImportJobRequest {
  DatasetImportJobArn: string;
}
export interface DescribeDatasetImportJobResponse {
  DatasetImportJobName?: string;
  DatasetImportJobArn?: string;
  DatasetArn?: string;
  TimestampFormat?: string;
  TimeZone?: string;
  UseGeolocationForTimeZone?: boolean;
  GeolocationFormat?: string;
  DataSource?: DataSource;
  EstimatedTimeRemainingInMinutes?: number;
  FieldStatistics?: Record<string, Statistics>;
  DataSize?: number;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Format?: string;
  ImportMode?: ImportMode;
}
export interface DescribeDatasetRequest {
  DatasetArn: string;
}
export interface DescribeDatasetResponse {
  DatasetArn?: string;
  DatasetName?: string;
  Domain?: Domain;
  DatasetType?: DatasetType;
  DataFrequency?: string;
  Schema?: Schema;
  EncryptionConfig?: EncryptionConfig;
  Status?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface DescribeExplainabilityExportRequest {
  ExplainabilityExportArn: string;
}
export interface DescribeExplainabilityExportResponse {
  ExplainabilityExportArn?: string;
  ExplainabilityExportName?: string;
  ExplainabilityArn?: string;
  Destination?: DataDestination;
  Message?: string;
  Status?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Format?: string;
}
export interface DescribeExplainabilityRequest {
  ExplainabilityArn: string;
}
export interface DescribeExplainabilityResponse {
  ExplainabilityArn?: string;
  ExplainabilityName?: string;
  ResourceArn?: string;
  ExplainabilityConfig?: ExplainabilityConfig;
  EnableVisualization?: boolean;
  DataSource?: DataSource;
  Schema?: Schema;
  StartDateTime?: string;
  EndDateTime?: string;
  EstimatedTimeRemainingInMinutes?: number;
  Message?: string;
  Status?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface DescribeForecastExportJobRequest {
  ForecastExportJobArn: string;
}
export interface DescribeForecastExportJobResponse {
  ForecastExportJobArn?: string;
  ForecastExportJobName?: string;
  ForecastArn?: string;
  Destination?: DataDestination;
  Message?: string;
  Status?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Format?: string;
}
export interface DescribeForecastRequest {
  ForecastArn: string;
}
export interface DescribeForecastResponse {
  ForecastArn?: string;
  ForecastName?: string;
  ForecastTypes?: Array<string>;
  PredictorArn?: string;
  DatasetGroupArn?: string;
  EstimatedTimeRemainingInMinutes?: number;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  TimeSeriesSelector?: TimeSeriesSelector;
}
export interface DescribeMonitorRequest {
  MonitorArn: string;
}
export interface DescribeMonitorResponse {
  MonitorName?: string;
  MonitorArn?: string;
  ResourceArn?: string;
  Status?: string;
  LastEvaluationTime?: Date | string;
  LastEvaluationState?: string;
  Baseline?: Baseline;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  EstimatedEvaluationTimeRemainingInMinutes?: number;
}
export interface DescribePredictorBacktestExportJobRequest {
  PredictorBacktestExportJobArn: string;
}
export interface DescribePredictorBacktestExportJobResponse {
  PredictorBacktestExportJobArn?: string;
  PredictorBacktestExportJobName?: string;
  PredictorArn?: string;
  Destination?: DataDestination;
  Message?: string;
  Status?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  Format?: string;
}
export interface DescribePredictorRequest {
  PredictorArn: string;
}
export interface DescribePredictorResponse {
  PredictorArn?: string;
  PredictorName?: string;
  AlgorithmArn?: string;
  AutoMLAlgorithmArns?: Array<string>;
  ForecastHorizon?: number;
  ForecastTypes?: Array<string>;
  PerformAutoML?: boolean;
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy;
  PerformHPO?: boolean;
  TrainingParameters?: Record<string, string>;
  EvaluationParameters?: EvaluationParameters;
  HPOConfig?: HyperParameterTuningJobConfig;
  InputDataConfig?: InputDataConfig;
  FeaturizationConfig?: FeaturizationConfig;
  EncryptionConfig?: EncryptionConfig;
  PredictorExecutionDetails?: PredictorExecutionDetails;
  EstimatedTimeRemainingInMinutes?: number;
  IsAutoPredictor?: boolean;
  DatasetImportJobArns?: Array<string>;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  OptimizationMetric?: OptimizationMetric;
}
export interface DescribeWhatIfAnalysisRequest {
  WhatIfAnalysisArn: string;
}
export interface DescribeWhatIfAnalysisResponse {
  WhatIfAnalysisName?: string;
  WhatIfAnalysisArn?: string;
  ForecastArn?: string;
  EstimatedTimeRemainingInMinutes?: number;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  TimeSeriesSelector?: TimeSeriesSelector;
}
export interface DescribeWhatIfForecastExportRequest {
  WhatIfForecastExportArn: string;
}
export interface DescribeWhatIfForecastExportResponse {
  WhatIfForecastExportArn?: string;
  WhatIfForecastExportName?: string;
  WhatIfForecastArns?: Array<string>;
  Destination?: DataDestination;
  Message?: string;
  Status?: string;
  CreationTime?: Date | string;
  EstimatedTimeRemainingInMinutes?: number;
  LastModificationTime?: Date | string;
  Format?: string;
}
export interface DescribeWhatIfForecastRequest {
  WhatIfForecastArn: string;
}
export interface DescribeWhatIfForecastResponse {
  WhatIfForecastName?: string;
  WhatIfForecastArn?: string;
  WhatIfAnalysisArn?: string;
  EstimatedTimeRemainingInMinutes?: number;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
  TimeSeriesTransformations?: Array<TimeSeriesTransformation>;
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
  ForecastTypes?: Array<string>;
}
export type Detail = string;

export type Domain = "RETAIL" | "CUSTOM" | "INVENTORY_PLANNING" | "EC2_CAPACITY" | "WORK_FORCE" | "WEB_TRAFFIC" | "METRICS";
export type Double = number;

export interface EncryptionConfig {
  RoleArn: string;
  KMSKeyArn: string;
}
export type ErrorMessage = string;

export interface ErrorMetric {
  ForecastType?: string;
  WAPE?: number;
  RMSE?: number;
  MASE?: number;
  MAPE?: number;
}
export type ErrorMetrics = Array<ErrorMetric>;
export interface EvaluationParameters {
  NumberOfBacktestWindows?: number;
  BackTestWindowOffset?: number;
}
export interface EvaluationResult {
  AlgorithmArn?: string;
  TestWindows?: Array<WindowSummary>;
}
export type EvaluationState = string;

export type EvaluationType = "SUMMARY" | "COMPUTED";
export type Explainabilities = Array<ExplainabilitySummary>;
export interface ExplainabilityConfig {
  TimeSeriesGranularity: TimeSeriesGranularity;
  TimePointGranularity: TimePointGranularity;
}
export type ExplainabilityExports = Array<ExplainabilityExportSummary>;
export interface ExplainabilityExportSummary {
  ExplainabilityExportArn?: string;
  ExplainabilityExportName?: string;
  Destination?: DataDestination;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface ExplainabilityInfo {
  ExplainabilityArn?: string;
  Status?: string;
}
export interface ExplainabilitySummary {
  ExplainabilityArn?: string;
  ExplainabilityName?: string;
  ResourceArn?: string;
  ExplainabilityConfig?: ExplainabilityConfig;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface Featurization {
  AttributeName: string;
  FeaturizationPipeline?: Array<FeaturizationMethod>;
}
export interface FeaturizationConfig {
  ForecastFrequency: string;
  ForecastDimensions?: Array<string>;
  Featurizations?: Array<Featurization>;
}
export interface FeaturizationMethod {
  FeaturizationMethodName: FeaturizationMethodName;
  FeaturizationMethodParameters?: Record<string, string>;
}
export type FeaturizationMethodName = "filling";
export type FeaturizationMethodParameters = Record<string, string>;
export type FeaturizationPipeline = Array<FeaturizationMethod>;
export type Featurizations = Array<Featurization>;
export type FieldStatistics = Record<string, Statistics>;
export interface Filter {
  Key: string;
  Value: string;
  Condition: FilterConditionString;
}
export type FilterConditionString = "IS" | "IS_NOT";
export type Filters = Array<Filter>;
export type ForecastDimensions = Array<string>;
export type ForecastExportJobs = Array<ForecastExportJobSummary>;
export interface ForecastExportJobSummary {
  ForecastExportJobArn?: string;
  ForecastExportJobName?: string;
  Destination?: DataDestination;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export type Forecasts = Array<ForecastSummary>;
export interface ForecastSummary {
  ForecastArn?: string;
  ForecastName?: string;
  PredictorArn?: string;
  CreatedUsingAutoPredictor?: boolean;
  DatasetGroupArn?: string;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export type ForecastType = string;

export type ForecastTypes = Array<string>;
export type Format = string;

export type Frequency = string;

export type GeolocationFormat = string;

export interface GetAccuracyMetricsRequest {
  PredictorArn: string;
}
export interface GetAccuracyMetricsResponse {
  PredictorEvaluationResults?: Array<EvaluationResult>;
  IsAutoPredictor?: boolean;
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy;
  OptimizationMetric?: OptimizationMetric;
}
export type Hour = number;

export interface HyperParameterTuningJobConfig {
  ParameterRanges?: ParameterRanges;
}
export type ImportMode = "FULL" | "INCREMENTAL";
export interface InputDataConfig {
  DatasetGroupArn: string;
  SupplementaryFeatures?: Array<SupplementaryFeature>;
}
export type Integer = number;

export interface IntegerParameterRange {
  Name: string;
  MaxValue: number;
  MinValue: number;
  ScalingType?: ScalingType;
}
export type IntegerParameterRanges = Array<IntegerParameterRange>;
export declare class InvalidInputException extends Data.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends Data.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export type KMSKeyArn = string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListDatasetGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatasetGroupsResponse {
  DatasetGroups?: Array<DatasetGroupSummary>;
  NextToken?: string;
}
export interface ListDatasetImportJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListDatasetImportJobsResponse {
  DatasetImportJobs?: Array<DatasetImportJobSummary>;
  NextToken?: string;
}
export interface ListDatasetsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatasetsResponse {
  Datasets?: Array<DatasetSummary>;
  NextToken?: string;
}
export interface ListExplainabilitiesRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListExplainabilitiesResponse {
  Explainabilities?: Array<ExplainabilitySummary>;
  NextToken?: string;
}
export interface ListExplainabilityExportsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListExplainabilityExportsResponse {
  ExplainabilityExports?: Array<ExplainabilityExportSummary>;
  NextToken?: string;
}
export interface ListForecastExportJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListForecastExportJobsResponse {
  ForecastExportJobs?: Array<ForecastExportJobSummary>;
  NextToken?: string;
}
export interface ListForecastsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListForecastsResponse {
  Forecasts?: Array<ForecastSummary>;
  NextToken?: string;
}
export interface ListMonitorEvaluationsRequest {
  NextToken?: string;
  MaxResults?: number;
  MonitorArn: string;
  Filters?: Array<Filter>;
}
export interface ListMonitorEvaluationsResponse {
  NextToken?: string;
  PredictorMonitorEvaluations?: Array<PredictorMonitorEvaluation>;
}
export interface ListMonitorsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListMonitorsResponse {
  Monitors?: Array<MonitorSummary>;
  NextToken?: string;
}
export interface ListPredictorBacktestExportJobsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListPredictorBacktestExportJobsResponse {
  PredictorBacktestExportJobs?: Array<PredictorBacktestExportJobSummary>;
  NextToken?: string;
}
export interface ListPredictorsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListPredictorsResponse {
  Predictors?: Array<PredictorSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListWhatIfAnalysesRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListWhatIfAnalysesResponse {
  WhatIfAnalyses?: Array<WhatIfAnalysisSummary>;
  NextToken?: string;
}
export interface ListWhatIfForecastExportsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListWhatIfForecastExportsResponse {
  WhatIfForecastExports?: Array<WhatIfForecastExportSummary>;
  NextToken?: string;
}
export interface ListWhatIfForecastsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<Filter>;
}
export interface ListWhatIfForecastsResponse {
  WhatIfForecasts?: Array<WhatIfForecastSummary>;
  NextToken?: string;
}
export type LocalDateTime = string;

export type Long = number;

export type LongArn = string;

export type LongArnList = Array<string>;
export type MaxResults = number;

export type Message = string;

export type MetricName = string;

export interface MetricResult {
  MetricName?: string;
  MetricValue?: number;
}
export type MetricResults = Array<MetricResult>;
export interface Metrics {
  RMSE?: number;
  WeightedQuantileLosses?: Array<WeightedQuantileLoss>;
  ErrorMetrics?: Array<ErrorMetric>;
  AverageWeightedQuantileLoss?: number;
}
export interface MonitorConfig {
  MonitorName: string;
}
export interface MonitorDataSource {
  DatasetImportJobArn?: string;
  ForecastArn?: string;
  PredictorArn?: string;
}
export interface MonitorInfo {
  MonitorArn?: string;
  Status?: string;
}
export type Monitors = Array<MonitorSummary>;
export interface MonitorSummary {
  MonitorArn?: string;
  MonitorName?: string;
  ResourceArn?: string;
  Status?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export type Month = "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";
export type Name = string;

export type NextToken = string;

export type Operation = "ADD" | "SUBTRACT" | "MULTIPLY" | "DIVIDE";
export type OptimizationMetric = "WAPE" | "RMSE" | "AverageWeightedQuantileLoss" | "MASE" | "MAPE";
export type ParameterKey = string;

export interface ParameterRanges {
  CategoricalParameterRanges?: Array<CategoricalParameterRange>;
  ContinuousParameterRanges?: Array<ContinuousParameterRange>;
  IntegerParameterRanges?: Array<IntegerParameterRange>;
}
export type ParameterValue = string;

export type PredictorBacktestExportJobs = Array<PredictorBacktestExportJobSummary>;
export interface PredictorBacktestExportJobSummary {
  PredictorBacktestExportJobArn?: string;
  PredictorBacktestExportJobName?: string;
  Destination?: DataDestination;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface PredictorBaseline {
  BaselineMetrics?: Array<BaselineMetric>;
}
export type PredictorEvaluationResults = Array<EvaluationResult>;
export interface PredictorEvent {
  Detail?: string;
  Datetime?: Date | string;
}
export interface PredictorExecution {
  AlgorithmArn?: string;
  TestWindows?: Array<TestWindowSummary>;
}
export interface PredictorExecutionDetails {
  PredictorExecutions?: Array<PredictorExecution>;
}
export type PredictorExecutions = Array<PredictorExecution>;
export interface PredictorMonitorEvaluation {
  ResourceArn?: string;
  MonitorArn?: string;
  EvaluationTime?: Date | string;
  EvaluationState?: string;
  WindowStartDatetime?: Date | string;
  WindowEndDatetime?: Date | string;
  PredictorEvent?: PredictorEvent;
  MonitorDataSource?: MonitorDataSource;
  MetricResults?: Array<MetricResult>;
  NumItemsEvaluated?: number;
  Message?: string;
}
export type PredictorMonitorEvaluations = Array<PredictorMonitorEvaluation>;
export type Predictors = Array<PredictorSummary>;
export interface PredictorSummary {
  PredictorArn?: string;
  PredictorName?: string;
  DatasetGroupArn?: string;
  IsAutoPredictor?: boolean;
  ReferencePredictorSummary?: ReferencePredictorSummary;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface ReferencePredictorSummary {
  Arn?: string;
  State?: State;
}
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResumeResourceRequest {
  ResourceArn: string;
}
export interface S3Config {
  Path: string;
  RoleArn: string;
  KMSKeyArn?: string;
}
export type S3Path = string;

export type ScalingType = "Auto" | "Linear" | "Logarithmic" | "ReverseLogarithmic";
export interface Schema {
  Attributes?: Array<SchemaAttribute>;
}
export interface SchemaAttribute {
  AttributeName?: string;
  AttributeType?: AttributeType;
}
export type SchemaAttributes = Array<SchemaAttribute>;
export type State = "Active" | "Deleted";
export interface Statistics {
  Count?: number;
  CountDistinct?: number;
  CountNull?: number;
  CountNan?: number;
  Min?: string;
  Max?: string;
  Avg?: number;
  Stddev?: number;
  CountLong?: number;
  CountDistinctLong?: number;
  CountNullLong?: number;
  CountNanLong?: number;
}
export type Status = string;

export interface StopResourceRequest {
  ResourceArn: string;
}
export interface SupplementaryFeature {
  Name: string;
  Value: string;
}
export type SupplementaryFeatures = Array<SupplementaryFeature>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type Tags = Array<Tag>;
export type TagValue = string;

export type TestWindowDetails = Array<TestWindowSummary>;
export type TestWindows = Array<WindowSummary>;
export interface TestWindowSummary {
  TestWindowStart?: Date | string;
  TestWindowEnd?: Date | string;
  Status?: string;
  Message?: string;
}
export interface TimeAlignmentBoundary {
  Month?: Month;
  DayOfMonth?: number;
  DayOfWeek?: DayOfWeek;
  Hour?: number;
}
export type TimePointGranularity = "ALL" | "SPECIFIC";
export interface TimeSeriesCondition {
  AttributeName: string;
  AttributeValue: string;
  Condition: Condition;
}
export type TimeSeriesConditions = Array<TimeSeriesCondition>;
export type TimeSeriesGranularity = "ALL" | "SPECIFIC";
export interface TimeSeriesIdentifiers {
  DataSource?: DataSource;
  Schema?: Schema;
  Format?: string;
}
export interface TimeSeriesReplacementsDataSource {
  S3Config: S3Config;
  Schema: Schema;
  Format?: string;
  TimestampFormat?: string;
}
export interface TimeSeriesSelector {
  TimeSeriesIdentifiers?: TimeSeriesIdentifiers;
}
export interface TimeSeriesTransformation {
  Action?: Action;
  TimeSeriesConditions?: Array<TimeSeriesCondition>;
}
export type TimeSeriesTransformations = Array<TimeSeriesTransformation>;
export type Timestamp = Date | string;

export type TimestampFormat = string;

export type TimeZone = string;

export type TrainingParameters = Record<string, string>;
export type Transformations = Record<string, string>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateDatasetGroupRequest {
  DatasetGroupArn: string;
  DatasetArns: Array<string>;
}
export interface UpdateDatasetGroupResponse {
}
export type UseGeolocationForTimeZone = boolean;

export type Value = string;

export type Values = Array<string>;
export interface WeightedQuantileLoss {
  Quantile?: number;
  LossValue?: number;
}
export type WeightedQuantileLosses = Array<WeightedQuantileLoss>;
export type WhatIfAnalyses = Array<WhatIfAnalysisSummary>;
export interface WhatIfAnalysisSummary {
  WhatIfAnalysisArn?: string;
  WhatIfAnalysisName?: string;
  ForecastArn?: string;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export type WhatIfForecastArnListForExport = Array<string>;
export type WhatIfForecastExports = Array<WhatIfForecastExportSummary>;
export interface WhatIfForecastExportSummary {
  WhatIfForecastExportArn?: string;
  WhatIfForecastArns?: Array<string>;
  WhatIfForecastExportName?: string;
  Destination?: DataDestination;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export type WhatIfForecasts = Array<WhatIfForecastSummary>;
export interface WhatIfForecastSummary {
  WhatIfForecastArn?: string;
  WhatIfForecastName?: string;
  WhatIfAnalysisArn?: string;
  Status?: string;
  Message?: string;
  CreationTime?: Date | string;
  LastModificationTime?: Date | string;
}
export interface WindowSummary {
  TestWindowStart?: Date | string;
  TestWindowEnd?: Date | string;
  ItemCount?: number;
  EvaluationType?: EvaluationType;
  Metrics?: Metrics;
}
export declare namespace CreateAutoPredictor {
  export type Input = CreateAutoPredictorRequest;
  export type Output = CreateAutoPredictorResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateDatasetGroup {
  export type Input = CreateDatasetGroupRequest;
  export type Output = CreateDatasetGroupResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateDatasetImportJob {
  export type Input = CreateDatasetImportJobRequest;
  export type Output = CreateDatasetImportJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateExplainability {
  export type Input = CreateExplainabilityRequest;
  export type Output = CreateExplainabilityResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateExplainabilityExport {
  export type Input = CreateExplainabilityExportRequest;
  export type Output = CreateExplainabilityExportResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateForecast {
  export type Input = CreateForecastRequest;
  export type Output = CreateForecastResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateForecastExportJob {
  export type Input = CreateForecastExportJobRequest;
  export type Output = CreateForecastExportJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateMonitor {
  export type Input = CreateMonitorRequest;
  export type Output = CreateMonitorResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePredictor {
  export type Input = CreatePredictorRequest;
  export type Output = CreatePredictorResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePredictorBacktestExportJob {
  export type Input = CreatePredictorBacktestExportJobRequest;
  export type Output = CreatePredictorBacktestExportJobResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateWhatIfAnalysis {
  export type Input = CreateWhatIfAnalysisRequest;
  export type Output = CreateWhatIfAnalysisResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateWhatIfForecast {
  export type Input = CreateWhatIfForecastRequest;
  export type Output = CreateWhatIfForecastResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateWhatIfForecastExport {
  export type Input = CreateWhatIfForecastExportRequest;
  export type Output = CreateWhatIfForecastExportResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDatasetGroup {
  export type Input = DeleteDatasetGroupRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDatasetImportJob {
  export type Input = DeleteDatasetImportJobRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteExplainability {
  export type Input = DeleteExplainabilityRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteExplainabilityExport {
  export type Input = DeleteExplainabilityExportRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteForecast {
  export type Input = DeleteForecastRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteForecastExportJob {
  export type Input = DeleteForecastExportJobRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMonitor {
  export type Input = DeleteMonitorRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePredictor {
  export type Input = DeletePredictorRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePredictorBacktestExportJob {
  export type Input = DeletePredictorBacktestExportJobRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteResourceTree {
  export type Input = DeleteResourceTreeRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWhatIfAnalysis {
  export type Input = DeleteWhatIfAnalysisRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWhatIfForecast {
  export type Input = DeleteWhatIfForecastRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWhatIfForecastExport {
  export type Input = DeleteWhatIfForecastExportRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAutoPredictor {
  export type Input = DescribeAutoPredictorRequest;
  export type Output = DescribeAutoPredictorResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDatasetGroup {
  export type Input = DescribeDatasetGroupRequest;
  export type Output = DescribeDatasetGroupResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDatasetImportJob {
  export type Input = DescribeDatasetImportJobRequest;
  export type Output = DescribeDatasetImportJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeExplainability {
  export type Input = DescribeExplainabilityRequest;
  export type Output = DescribeExplainabilityResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeExplainabilityExport {
  export type Input = DescribeExplainabilityExportRequest;
  export type Output = DescribeExplainabilityExportResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeForecast {
  export type Input = DescribeForecastRequest;
  export type Output = DescribeForecastResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeForecastExportJob {
  export type Input = DescribeForecastExportJobRequest;
  export type Output = DescribeForecastExportJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeMonitor {
  export type Input = DescribeMonitorRequest;
  export type Output = DescribeMonitorResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribePredictor {
  export type Input = DescribePredictorRequest;
  export type Output = DescribePredictorResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribePredictorBacktestExportJob {
  export type Input = DescribePredictorBacktestExportJobRequest;
  export type Output = DescribePredictorBacktestExportJobResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWhatIfAnalysis {
  export type Input = DescribeWhatIfAnalysisRequest;
  export type Output = DescribeWhatIfAnalysisResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWhatIfForecast {
  export type Input = DescribeWhatIfForecastRequest;
  export type Output = DescribeWhatIfForecastResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWhatIfForecastExport {
  export type Input = DescribeWhatIfForecastExportRequest;
  export type Output = DescribeWhatIfForecastExportResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAccuracyMetrics {
  export type Input = GetAccuracyMetricsRequest;
  export type Output = GetAccuracyMetricsResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListDatasetGroups {
  export type Input = ListDatasetGroupsRequest;
  export type Output = ListDatasetGroupsResponse;
  export type Error =
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListDatasetImportJobs {
  export type Input = ListDatasetImportJobsRequest;
  export type Output = ListDatasetImportJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListDatasets {
  export type Input = ListDatasetsRequest;
  export type Output = ListDatasetsResponse;
  export type Error =
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListExplainabilities {
  export type Input = ListExplainabilitiesRequest;
  export type Output = ListExplainabilitiesResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListExplainabilityExports {
  export type Input = ListExplainabilityExportsRequest;
  export type Output = ListExplainabilityExportsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListForecastExportJobs {
  export type Input = ListForecastExportJobsRequest;
  export type Output = ListForecastExportJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListForecasts {
  export type Input = ListForecastsRequest;
  export type Output = ListForecastsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListMonitorEvaluations {
  export type Input = ListMonitorEvaluationsRequest;
  export type Output = ListMonitorEvaluationsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListMonitors {
  export type Input = ListMonitorsRequest;
  export type Output = ListMonitorsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListPredictorBacktestExportJobs {
  export type Input = ListPredictorBacktestExportJobsRequest;
  export type Output = ListPredictorBacktestExportJobsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListPredictors {
  export type Input = ListPredictorsRequest;
  export type Output = ListPredictorsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListWhatIfAnalyses {
  export type Input = ListWhatIfAnalysesRequest;
  export type Output = ListWhatIfAnalysesResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListWhatIfForecastExports {
  export type Input = ListWhatIfForecastExportsRequest;
  export type Output = ListWhatIfForecastExportsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListWhatIfForecasts {
  export type Input = ListWhatIfForecastsRequest;
  export type Output = ListWhatIfForecastsResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ResumeResource {
  export type Input = ResumeResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopResource {
  export type Input = StopResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDatasetGroup {
  export type Input = UpdateDatasetGroupRequest;
  export type Output = UpdateDatasetGroupResponse;
  export type Error =
    | InvalidInputException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

