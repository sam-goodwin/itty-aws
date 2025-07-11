import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface PerformanceInsightsv20180227 {
  createPerformanceAnalysisReport(
    input: CreatePerformanceAnalysisReportRequest,
  ): Effect.Effect<
    CreatePerformanceAnalysisReportResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  deletePerformanceAnalysisReport(
    input: DeletePerformanceAnalysisReportRequest,
  ): Effect.Effect<
    DeletePerformanceAnalysisReportResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  describeDimensionKeys(
    input: DescribeDimensionKeysRequest,
  ): Effect.Effect<
    DescribeDimensionKeysResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  getDimensionKeyDetails(
    input: GetDimensionKeyDetailsRequest,
  ): Effect.Effect<
    GetDimensionKeyDetailsResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  getPerformanceAnalysisReport(
    input: GetPerformanceAnalysisReportRequest,
  ): Effect.Effect<
    GetPerformanceAnalysisReportResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  getResourceMetadata(
    input: GetResourceMetadataRequest,
  ): Effect.Effect<
    GetResourceMetadataResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  getResourceMetrics(
    input: GetResourceMetricsRequest,
  ): Effect.Effect<
    GetResourceMetricsResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  listAvailableResourceDimensions(
    input: ListAvailableResourceDimensionsRequest,
  ): Effect.Effect<
    ListAvailableResourceDimensionsResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  listAvailableResourceMetrics(
    input: ListAvailableResourceMetricsRequest,
  ): Effect.Effect<
    ListAvailableResourceMetricsResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  listPerformanceAnalysisReports(
    input: ListPerformanceAnalysisReportsRequest,
  ): Effect.Effect<
    ListPerformanceAnalysisReportsResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError
  >;
}

export type Pi = PerformanceInsightsv20180227;

export type AcceptLanguage = "EN_US";
export type AdditionalMetricsList = Array<string>;
export type AdditionalMetricsMap = Record<string, number>;
export type AmazonResourceName = string;

export interface AnalysisReport {
  AnalysisReportId: string;
  Identifier?: string;
  ServiceType?: ServiceType;
  CreateTime?: Date | string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Status?: AnalysisStatus;
  Insights?: Array<Insight>;
}
export type AnalysisReportId = string;

export interface AnalysisReportSummary {
  AnalysisReportId?: string;
  CreateTime?: Date | string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Status?: AnalysisStatus;
  Tags?: Array<Tag>;
}
export type AnalysisReportSummaryList = Array<AnalysisReportSummary>;
export type AnalysisStatus = "RUNNING" | "SUCCEEDED" | "FAILED";
export type AuthorizedActionsList = Array<FineGrainedAction>;
export type ContextType = "CAUSAL" | "CONTEXTUAL";
export interface CreatePerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  StartTime: Date | string;
  EndTime: Date | string;
  Tags?: Array<Tag>;
}
export interface CreatePerformanceAnalysisReportResponse {
  AnalysisReportId?: string;
}
export interface Data {
  PerformanceInsightsMetric?: PerformanceInsightsMetric;
}
export type DataList = Array<Data>;
export interface DataPoint {
  Timestamp: Date | string;
  Value: number;
}
export type DataPointsList = Array<DataPoint>;
export interface DeletePerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
}
export interface DeletePerformanceAnalysisReportResponse {}
export interface DescribeDimensionKeysRequest {
  ServiceType: ServiceType;
  Identifier: string;
  StartTime: Date | string;
  EndTime: Date | string;
  Metric: string;
  PeriodInSeconds?: number;
  GroupBy: DimensionGroup;
  AdditionalMetrics?: Array<string>;
  PartitionBy?: DimensionGroup;
  Filter?: Record<string, string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeDimensionKeysResponse {
  AlignedStartTime?: Date | string;
  AlignedEndTime?: Date | string;
  PartitionKeys?: Array<ResponsePartitionKey>;
  Keys?: Array<DimensionKeyDescription>;
  NextToken?: string;
}
export type Description = string;

export type DescriptiveMap = Record<string, string>;
export type DescriptiveString = string;

export type DetailStatus = "AVAILABLE" | "PROCESSING" | "UNAVAILABLE";
export interface DimensionDetail {
  Identifier?: string;
}
export type DimensionDetailList = Array<DimensionDetail>;
export interface DimensionGroup {
  Group: string;
  Dimensions?: Array<string>;
  Limit?: number;
}
export interface DimensionGroupDetail {
  Group?: string;
  Dimensions?: Array<DimensionDetail>;
}
export type DimensionGroupDetailList = Array<DimensionGroupDetail>;
export interface DimensionKeyDescription {
  Dimensions?: Record<string, string>;
  Total?: number;
  AdditionalMetrics?: Record<string, number>;
  Partitions?: Array<number>;
}
export type DimensionKeyDescriptionList = Array<DimensionKeyDescription>;
export interface DimensionKeyDetail {
  Value?: string;
  Dimension?: string;
  Status?: DetailStatus;
}
export type DimensionKeyDetailList = Array<DimensionKeyDetail>;
export type DimensionMap = Record<string, string>;
export type DimensionsMetricList = Array<string>;
export type Double = number;

export type ErrorString = string;

export interface FeatureMetadata {
  Status?: FeatureStatus;
}
export type FeatureMetadataMap = Record<string, FeatureMetadata>;
export type FeatureStatus =
  | "ENABLED"
  | "DISABLED"
  | "UNSUPPORTED"
  | "ENABLED_PENDING_REBOOT"
  | "DISABLED_PENDING_REBOOT"
  | "UNKNOWN";
export type FineGrainedAction =
  | "DESCRIBE_DIMENSION_KEYS"
  | "GET_DIMENSION_KEY_DETAILS"
  | "GET_RESOURCE_METRICS";
export interface GetDimensionKeyDetailsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  Group: string;
  GroupIdentifier: string;
  RequestedDimensions?: Array<string>;
}
export interface GetDimensionKeyDetailsResponse {
  Dimensions?: Array<DimensionKeyDetail>;
}
export interface GetPerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
  TextFormat?: TextFormat;
  AcceptLanguage?: AcceptLanguage;
}
export interface GetPerformanceAnalysisReportResponse {
  AnalysisReport?: AnalysisReport;
}
export interface GetResourceMetadataRequest {
  ServiceType: ServiceType;
  Identifier: string;
}
export interface GetResourceMetadataResponse {
  Identifier?: string;
  Features?: Record<string, FeatureMetadata>;
}
export interface GetResourceMetricsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  MetricQueries: Array<MetricQuery>;
  StartTime: Date | string;
  EndTime: Date | string;
  PeriodInSeconds?: number;
  MaxResults?: number;
  NextToken?: string;
  PeriodAlignment?: PeriodAlignment;
}
export interface GetResourceMetricsResponse {
  AlignedStartTime?: Date | string;
  AlignedEndTime?: Date | string;
  Identifier?: string;
  MetricList?: Array<MetricKeyDataPoints>;
  NextToken?: string;
}
export type IdentifierString = string;

export interface Insight {
  InsightId: string;
  InsightType?: string;
  Context?: ContextType;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Severity?: Severity;
  SupportingInsights?: Array<Insight>;
  Description?: string;
  Recommendations?: Array<Recommendation>;
  InsightData?: Array<Data>;
  BaselineData?: Array<Data>;
}
export type InsightList = Array<Insight>;
export type Integer = number;

export declare class InternalServiceError extends EffectData.TaggedError(
  "InternalServiceError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export type ISOTimestamp = Date | string;

export type Limit = number;

export interface ListAvailableResourceDimensionsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  Metrics: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  AuthorizedActions?: Array<FineGrainedAction>;
}
export interface ListAvailableResourceDimensionsResponse {
  MetricDimensions?: Array<MetricDimensionGroups>;
  NextToken?: string;
}
export interface ListAvailableResourceMetricsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  MetricTypes: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAvailableResourceMetricsResponse {
  Metrics?: Array<ResponseResourceMetric>;
  NextToken?: string;
}
export interface ListPerformanceAnalysisReportsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  NextToken?: string;
  MaxResults?: number;
  ListTags?: boolean;
}
export interface ListPerformanceAnalysisReportsResponse {
  AnalysisReports?: Array<AnalysisReportSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MarkdownString = string;

export type MaxResults = number;

export interface MetricDimensionGroups {
  Metric?: string;
  Groups?: Array<DimensionGroupDetail>;
}
export type MetricDimensionsList = Array<MetricDimensionGroups>;
export interface MetricKeyDataPoints {
  Key?: ResponseResourceMetricKey;
  DataPoints?: Array<DataPoint>;
}
export type MetricKeyDataPointsList = Array<MetricKeyDataPoints>;
export interface MetricQuery {
  Metric: string;
  GroupBy?: DimensionGroup;
  Filter?: Record<string, string>;
}
export type MetricQueryFilterMap = Record<string, string>;
export type MetricQueryList = Array<MetricQuery>;
export type MetricTypeList = Array<string>;
export type MetricValuesList = Array<number>;
export type NextToken = string;

export declare class NotAuthorizedException extends EffectData.TaggedError(
  "NotAuthorizedException",
)<{
  readonly Message?: string;
}> {}
export interface PerformanceInsightsMetric {
  Metric?: string;
  DisplayName?: string;
  Dimensions?: Record<string, string>;
  Filter?: Record<string, string>;
  Value?: number;
}
export type PeriodAlignment = "END_TIME" | "START_TIME";
export interface Recommendation {
  RecommendationId?: string;
  RecommendationDescription?: string;
}
export type RecommendationList = Array<Recommendation>;
export type RequestedDimensionList = Array<string>;
export type RequestString = string;

export interface ResponsePartitionKey {
  Dimensions: Record<string, string>;
}
export type ResponsePartitionKeyList = Array<ResponsePartitionKey>;
export interface ResponseResourceMetric {
  Metric?: string;
  Description?: string;
  Unit?: string;
}
export interface ResponseResourceMetricKey {
  Metric: string;
  Dimensions?: Record<string, string>;
}
export type ResponseResourceMetricList = Array<ResponseResourceMetric>;
export type SanitizedString = string;

export type SanitizedStringList = Array<string>;
export type ServiceType = "RDS" | "DOCDB";
export type Severity = "LOW" | "MEDIUM" | "HIGH";
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TextFormat = "PLAIN_TEXT" | "MARKDOWN";
export interface UntagResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare namespace CreatePerformanceAnalysisReport {
  export type Input = CreatePerformanceAnalysisReportRequest;
  export type Output = CreatePerformanceAnalysisReportResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace DeletePerformanceAnalysisReport {
  export type Input = DeletePerformanceAnalysisReportRequest;
  export type Output = DeletePerformanceAnalysisReportResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace DescribeDimensionKeys {
  export type Input = DescribeDimensionKeysRequest;
  export type Output = DescribeDimensionKeysResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace GetDimensionKeyDetails {
  export type Input = GetDimensionKeyDetailsRequest;
  export type Output = GetDimensionKeyDetailsResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace GetPerformanceAnalysisReport {
  export type Input = GetPerformanceAnalysisReportRequest;
  export type Output = GetPerformanceAnalysisReportResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace GetResourceMetadata {
  export type Input = GetResourceMetadataRequest;
  export type Output = GetResourceMetadataResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace GetResourceMetrics {
  export type Input = GetResourceMetricsRequest;
  export type Output = GetResourceMetricsResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace ListAvailableResourceDimensions {
  export type Input = ListAvailableResourceDimensionsRequest;
  export type Output = ListAvailableResourceDimensionsResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace ListAvailableResourceMetrics {
  export type Input = ListAvailableResourceMetricsRequest;
  export type Output = ListAvailableResourceMetricsResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace ListPerformanceAnalysisReports {
  export type Input = ListPerformanceAnalysisReportsRequest;
  export type Output = ListPerformanceAnalysisReportsResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceError
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}
