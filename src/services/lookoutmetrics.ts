import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface LookoutMetrics {
  activateAnomalyDetector(
    input: ActivateAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  backTestAnomalyDetector(
    input: BackTestAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  createAlert(
    input: CreateAlertRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  createAnomalyDetector(
    input: CreateAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  createMetricSet(
    input: CreateMetricSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  deactivateAnomalyDetector(
    input: DeactivateAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  deleteAlert(
    input: DeleteAlertRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  deleteAnomalyDetector(
    input: DeleteAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  describeAlert(
    input: DescribeAlertRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  describeAnomalyDetectionExecutions(
    input: DescribeAnomalyDetectionExecutionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  describeAnomalyDetector(
    input: DescribeAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  describeMetricSet(
    input: DescribeMetricSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  detectMetricSetConfig(
    input: DetectMetricSetConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  getAnomalyGroup(
    input: GetAnomalyGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  getDataQualityMetrics(
    input: GetDataQualityMetricsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  getFeedback(
    input: GetFeedbackRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  getSampleData(
    input: GetSampleDataRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  listAlerts(
    input: ListAlertsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  listAnomalyDetectors(
    input: ListAnomalyDetectorsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  listAnomalyGroupRelatedMetrics(
    input: ListAnomalyGroupRelatedMetricsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  listAnomalyGroupSummaries(
    input: ListAnomalyGroupSummariesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  listAnomalyGroupTimeSeries(
    input: ListAnomalyGroupTimeSeriesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  listMetricSets(
    input: ListMetricSetsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putFeedback(
    input: PutFeedbackRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateAlert(
    input: UpdateAlertRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  updateAnomalyDetector(
    input: UpdateAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
  updateMetricSet(
    input: UpdateMetricSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | TooManyRequestsException | ValidationException | CommonAwsError
  >;
}

export type Lookoutmetrics = LookoutMetrics;

export interface AccessDeniedException {
}
export interface Action {
}
export interface ActivateAnomalyDetectorRequest {
}
export interface ActivateAnomalyDetectorResponse {
}
export type AggregationFunction = never;
export interface Alert {
}
export type AlertDescription = string;

export interface AlertFilters {
}
export type AlertName = string;

export type AlertStatus = never;
export interface AlertSummary {
}
export type AlertSummaryList = Array<unknown>;
export type AlertType = never;
export type AnomalyDetectionTaskStatus = never;
export type AnomalyDetectionTaskStatusMessage = string;

export interface AnomalyDetectorConfig {
}
export interface AnomalyDetectorConfigSummary {
}
export interface AnomalyDetectorDataQualityMetric {
}
export type AnomalyDetectorDataQualityMetricList = Array<unknown>;
export type AnomalyDetectorDescription = string;

export type AnomalyDetectorFailureType = never;
export type AnomalyDetectorName = string;

export type AnomalyDetectorStatus = never;
export interface AnomalyDetectorSummary {
}
export type AnomalyDetectorSummaryList = Array<unknown>;
export interface AnomalyGroup {
}
export interface AnomalyGroupStatistics {
}
export interface AnomalyGroupSummary {
}
export type AnomalyGroupSummaryList = Array<unknown>;
export interface AnomalyGroupTimeSeries {
}
export interface AnomalyGroupTimeSeriesFeedback {
}
export interface AppFlowConfig {
}
export type Arn = string;

export type AthenaDatabaseName = string;

export type AthenaDataCatalog = string;

export type AthenaS3ResultsPath = string;

export interface AthenaSourceConfig {
}
export type AthenaTableName = string;

export type AthenaWorkGroupName = string;

export interface AttributeValue {
}
export interface AutoDetectionMetricSource {
}
export interface AutoDetectionS3SourceConfig {
}
export interface BackTestAnomalyDetectorRequest {
}
export interface BackTestAnomalyDetectorResponse {
}
export interface BackTestConfiguration {
}
export type BinaryAttributeValue = string;

export type BinaryListAttributeValue = Array<unknown>;
export type Charset = string;

export interface CloudWatchConfig {
}
export type ColumnName = string;

export type Confidence = never;
export interface ConflictException {
}
export interface ContributionMatrix {
}
export interface CreateAlertRequest {
}
export interface CreateAlertResponse {
}
export interface CreateAnomalyDetectorRequest {
}
export interface CreateAnomalyDetectorResponse {
}
export interface CreateMetricSetRequest {
}
export interface CreateMetricSetResponse {
}
export type CSVFileCompression = never;
export interface CsvFormatDescriptor {
}
export type DatabaseHost = string;

export type DatabasePort = number;

export type DataItem = string;

export interface DataQualityMetric {
}
export type DataQualityMetricDescription = string;

export type DataQualityMetricList = Array<unknown>;
export type DataQualityMetricType = never;
export type DateTimeFormat = string;

export interface DeactivateAnomalyDetectorRequest {
}
export interface DeactivateAnomalyDetectorResponse {
}
export interface DeleteAlertRequest {
}
export interface DeleteAlertResponse {
}
export interface DeleteAnomalyDetectorRequest {
}
export interface DeleteAnomalyDetectorResponse {
}
export type Delimiter = string;

export interface DescribeAlertRequest {
}
export interface DescribeAlertResponse {
}
export interface DescribeAnomalyDetectionExecutionsRequest {
}
export interface DescribeAnomalyDetectionExecutionsResponse {
}
export interface DescribeAnomalyDetectorRequest {
}
export interface DescribeAnomalyDetectorResponse {
}
export interface DescribeMetricSetRequest {
}
export interface DescribeMetricSetResponse {
}
export interface DetectedCsvFormatDescriptor {
}
export interface DetectedField {
}
export interface DetectedFileFormatDescriptor {
}
export interface DetectedJsonFormatDescriptor {
}
export interface DetectedMetricSetConfig {
}
export interface DetectedMetricSource {
}
export interface DetectedS3SourceConfig {
}
export interface DetectMetricSetConfigRequest {
}
export interface DetectMetricSetConfigResponse {
}
export interface DimensionContribution {
}
export type DimensionContributionList = Array<unknown>;
export interface DimensionFilter {
}
export type DimensionFilterList = Array<unknown>;
export type DimensionList = Array<unknown>;
export interface DimensionNameValue {
}
export type DimensionNameValueList = Array<unknown>;
export type DimensionValue = string;

export interface DimensionValueContribution {
}
export type DimensionValueContributionList = Array<unknown>;
export type DimensionValueList = Array<unknown>;
export type Double = number;

export type ErrorMessage = string;

export type ExecutionList = Array<unknown>;
export interface ExecutionStatus {
}
export type FieldName = string;

export interface FileFormatDescriptor {
}
export interface Filter {
}
export type FilterList = Array<unknown>;
export type FilterOperation = never;
export type FlowName = string;

export type Frequency = never;
export interface GetAnomalyGroupRequest {
}
export interface GetAnomalyGroupResponse {
}
export interface GetDataQualityMetricsRequest {
}
export interface GetDataQualityMetricsResponse {
}
export interface GetFeedbackRequest {
}
export interface GetFeedbackResponse {
}
export interface GetSampleDataRequest {
}
export interface GetSampleDataResponse {
}
export type HeaderList = Array<unknown>;
export type HeaderValue = string;

export type HeaderValueList = Array<unknown>;
export type HistoricalDataPath = string;

export type HistoricalDataPathList = Array<unknown>;
export type Integer = number;

export interface InterMetricImpactDetails {
}
export type InterMetricImpactList = Array<unknown>;
export interface InternalServerException {
}
export interface ItemizedMetricStats {
}
export type ItemizedMetricStatsList = Array<unknown>;
export type JsonFileCompression = never;
export interface JsonFormatDescriptor {
}
export type KmsKeyArn = string;

export interface LambdaConfiguration {
}
export interface ListAlertsRequest {
}
export interface ListAlertsResponse {
}
export interface ListAnomalyDetectorsRequest {
}
export interface ListAnomalyDetectorsResponse {
}
export interface ListAnomalyGroupRelatedMetricsRequest {
}
export interface ListAnomalyGroupRelatedMetricsResponse {
}
export interface ListAnomalyGroupSummariesRequest {
}
export interface ListAnomalyGroupSummariesResponse {
}
export interface ListAnomalyGroupTimeSeriesRequest {
}
export interface ListAnomalyGroupTimeSeriesResponse {
}
export interface ListMetricSetsRequest {
}
export interface ListMetricSetsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type MaxResults = number;

export type Message = string;

export interface Metric {
}
export type MetricChangePercentage = number;

export interface MetricLevelImpact {
}
export type MetricLevelImpactList = Array<unknown>;
export type MetricList = Array<unknown>;
export type MetricName = string;

export type MetricNameList = Array<unknown>;
export interface MetricSetDataQualityMetric {
}
export type MetricSetDataQualityMetricList = Array<unknown>;
export type MetricSetDescription = string;

export interface MetricSetDimensionFilter {
}
export type MetricSetDimensionFilterList = Array<unknown>;
export type MetricSetName = string;

export interface MetricSetSummary {
}
export type MetricSetSummaryList = Array<unknown>;
export interface MetricSource {
}
export type MetricValue = number;

export type MetricValueList = Array<unknown>;
export type Namespace = string;

export type NextToken = string;

export type NumberAttributeValue = string;

export type NumberListAttributeValue = Array<unknown>;
export type Offset = number;

export type PoirotSecretManagerArn = string;

export interface PutFeedbackRequest {
}
export interface PutFeedbackResponse {
}
export type QuotaCode = string;

export type QuoteSymbol = string;

export type RDSDatabaseIdentifier = string;

export type RDSDatabaseName = string;

export interface RDSSourceConfig {
}
export type RedshiftClusterIdentifier = string;

export type RedshiftDatabaseName = string;

export interface RedshiftSourceConfig {
}
export type RelatedColumnName = string;

export type RelationshipType = never;
export type ResourceId = string;

export interface ResourceNotFoundException {
}
export type ResourceType = string;

export interface S3SourceConfig {
}
export interface SampleDataS3SourceConfig {
}
export type SampleRow = Array<unknown>;
export type SampleRows = Array<unknown>;
export type Score = number;

export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<unknown>;
export type SensitivityThreshold = number;

export type ServiceCode = string;

export interface ServiceQuotaExceededException {
}
export interface SNSConfiguration {
}
export type SnsFormat = never;
export type StringAttributeValue = string;

export type StringListAttributeValue = Array<unknown>;
export type SubnetId = string;

export type SubnetIdList = Array<unknown>;
export type TableName = string;

export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type TemplatedPath = string;

export type TemplatedPathList = Array<unknown>;
export interface TimeSeries {
}
export interface TimeSeriesFeedback {
}
export type TimeSeriesFeedbackList = Array<unknown>;
export type TimeSeriesId = string;

export type TimeSeriesList = Array<unknown>;
export type Timestamp = Date | string;

export interface TimestampColumn {
}
export type TimestampList = Array<unknown>;
export type TimestampString = string;

export type Timezone = string;

export interface TooManyRequestsException {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateAlertRequest {
}
export interface UpdateAlertResponse {
}
export interface UpdateAnomalyDetectorRequest {
}
export interface UpdateAnomalyDetectorResponse {
}
export interface UpdateMetricSetRequest {
}
export interface UpdateMetricSetResponse {
}
export type UUID = string;

export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = never;
export interface VpcConfiguration {
}
export declare namespace ActivateAnomalyDetector {
  export type Input = ActivateAnomalyDetectorRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutFeedback {
  export type Input = PutFeedbackRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAlert {
  export type Input = UpdateAlertRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

