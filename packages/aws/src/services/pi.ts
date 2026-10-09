import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://pi.amazonaws.com/doc/2018-02-27/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "PI",
  serviceShapeName: "PerformanceInsightsv20180227",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "pi" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-02-27");
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
              `https://pi-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://pi-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://pi.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://pi.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalServiceError
  extends /*@__PURE__*/ S.TaggedError<InternalServiceError>()("InternalServiceError", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidArgumentException
  extends /*@__PURE__*/ S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class NotAuthorizedException
  extends /*@__PURE__*/ S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type ServiceType = "RDS" | "DOCDB" | (string & {});
export type IdentifierString = string;
export type ISOTimestamp = Date;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreatePerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  StartTime: Date;
  EndTime?: Date;
  Tags?: Tag[];
}
export type AnalysisReportId = string;
export interface CreatePerformanceAnalysisReportResponse {
  AnalysisReportId?: string;
}
export interface DeletePerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
}
export interface DeletePerformanceAnalysisReportResponse {}
export type RequestString = string;
export type SanitizedString = string;
export type SanitizedStringList = string[];
export type Limit = number;
export interface DimensionGroup {
  Group: string;
  Dimensions?: string[];
  Limit?: number;
}
export type AdditionalMetricsList = string[];
export type MetricQueryFilterMap = { [key: string]: string | undefined };
export type MaxResults = number;
export type NextToken = string;
export interface DescribeDimensionKeysRequest {
  ServiceType: ServiceType;
  Identifier: string;
  StartTime: Date;
  EndTime: Date;
  Metric: string;
  PeriodInSeconds?: number;
  GroupBy: DimensionGroup;
  AdditionalMetrics?: string[];
  PartitionBy?: DimensionGroup;
  Filter?: { [key: string]: string | undefined };
  MaxResults?: number;
  NextToken?: string;
}
export type DimensionMap = { [key: string]: string | undefined };
export interface ResponsePartitionKey {
  Dimensions: { [key: string]: string | undefined };
}
export type ResponsePartitionKeyList = ResponsePartitionKey[];
export type AdditionalMetricsMap = { [key: string]: number | undefined };
export type MetricValuesList = number[];
export interface DimensionKeyDescription {
  Dimensions?: { [key: string]: string | undefined };
  Total?: number;
  AdditionalMetrics?: { [key: string]: number | undefined };
  Partitions?: number[];
}
export type DimensionKeyDescriptionList = DimensionKeyDescription[];
export interface DescribeDimensionKeysResponse {
  AlignedStartTime?: Date;
  AlignedEndTime?: Date;
  PartitionKeys?: ResponsePartitionKey[];
  Keys?: DimensionKeyDescription[];
  NextToken?: string;
}
export type RequestedDimensionList = string[];
export interface GetDimensionKeyDetailsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  Group: string;
  GroupIdentifier: string;
  RequestedDimensions?: string[];
}
export type DetailStatus = "AVAILABLE" | "PROCESSING" | "UNAVAILABLE" | (string & {});
export interface DimensionKeyDetail {
  Value?: string;
  Dimension?: string;
  Status?: DetailStatus;
}
export type DimensionKeyDetailList = DimensionKeyDetail[];
export interface GetDimensionKeyDetailsResponse {
  Dimensions?: DimensionKeyDetail[];
}
export type TextFormat = "PLAIN_TEXT" | "MARKDOWN" | (string & {});
export type AcceptLanguage = "EN_US" | (string & {});
export interface GetPerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
  TextFormat?: TextFormat;
  AcceptLanguage?: AcceptLanguage;
}
export type AnalysisStatus = "RUNNING" | "SUCCEEDED" | "FAILED" | (string & {});
export type ContextType = "CAUSAL" | "CONTEXTUAL" | (string & {});
export type Severity = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export type MarkdownString = string | redacted.Redacted<string>;
export interface Recommendation {
  RecommendationId?: string;
  RecommendationDescription?: string | redacted.Redacted<string>;
  RecommendationDetails?: string | redacted.Redacted<string>;
}
export type RecommendationList = Recommendation[];
export type DescriptiveString = string;
export type DescriptiveMap = { [key: string]: string | undefined };
export interface PerformanceInsightsMetric {
  Metric?: string;
  DisplayName?: string;
  Dimensions?: { [key: string]: string | undefined };
  Filter?: { [key: string]: string | undefined };
  Value?: number;
}
export interface Data {
  PerformanceInsightsMetric?: PerformanceInsightsMetric;
}
export type DataList = Data[];
export interface Insight {
  InsightId: string;
  InsightType?: string;
  Context?: ContextType;
  StartTime?: Date;
  EndTime?: Date;
  Severity?: Severity;
  SupportingInsights?: Insight[];
  Description?: string | redacted.Redacted<string>;
  Recommendations?: Recommendation[];
  InsightData?: Data[];
  BaselineData?: Data[];
}
export type InsightList = Insight[];
export interface AnalysisReport {
  AnalysisReportId: string;
  Identifier?: string;
  ServiceType?: ServiceType;
  CreateTime?: Date;
  StartTime?: Date;
  EndTime?: Date;
  Status?: AnalysisStatus;
  Insights?: Insight[];
}
export interface GetPerformanceAnalysisReportResponse {
  AnalysisReport?: AnalysisReport;
}
export interface GetResourceMetadataRequest {
  ServiceType: ServiceType;
  Identifier: string;
}
export type FeatureStatus =
  | "ENABLED"
  | "DISABLED"
  | "UNSUPPORTED"
  | "ENABLED_PENDING_REBOOT"
  | "DISABLED_PENDING_REBOOT"
  | "UNKNOWN"
  | (string & {});
export interface FeatureMetadata {
  Status?: FeatureStatus;
}
export type FeatureMetadataMap = { [key: string]: FeatureMetadata | undefined };
export interface GetResourceMetadataResponse {
  Identifier?: string;
  Features?: { [key: string]: FeatureMetadata | undefined };
}
export interface MetricQuery {
  Metric: string;
  GroupBy?: DimensionGroup;
  Filter?: { [key: string]: string | undefined };
}
export type MetricQueryList = MetricQuery[];
export type PeriodAlignment = "END_TIME" | "START_TIME" | (string & {});
export interface GetResourceMetricsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  MetricQueries: MetricQuery[];
  StartTime: Date;
  EndTime: Date;
  PeriodInSeconds?: number;
  MaxResults?: number;
  NextToken?: string;
  PeriodAlignment?: PeriodAlignment;
}
export interface ResponseResourceMetricKey {
  Metric: string;
  Dimensions?: { [key: string]: string | undefined };
}
export interface DataPoint {
  Timestamp: Date;
  Value: number;
}
export type DataPointsList = DataPoint[];
export interface MetricKeyDataPoints {
  Key?: ResponseResourceMetricKey;
  DataPoints?: DataPoint[];
}
export type MetricKeyDataPointsList = MetricKeyDataPoints[];
export interface GetResourceMetricsResponse {
  AlignedStartTime?: Date;
  AlignedEndTime?: Date;
  Identifier?: string;
  MetricList?: MetricKeyDataPoints[];
  NextToken?: string;
}
export type DimensionsMetricList = string[];
export type FineGrainedAction =
  | "DescribeDimensionKeys"
  | "GetDimensionKeyDetails"
  | "GetResourceMetrics"
  | (string & {});
export type AuthorizedActionsList = FineGrainedAction[];
export interface ListAvailableResourceDimensionsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  Metrics: string[];
  MaxResults?: number;
  NextToken?: string;
  AuthorizedActions?: FineGrainedAction[];
}
export interface DimensionDetail {
  Identifier?: string;
}
export type DimensionDetailList = DimensionDetail[];
export interface DimensionGroupDetail {
  Group?: string;
  Dimensions?: DimensionDetail[];
}
export type DimensionGroupDetailList = DimensionGroupDetail[];
export interface MetricDimensionGroups {
  Metric?: string;
  Groups?: DimensionGroupDetail[];
}
export type MetricDimensionsList = MetricDimensionGroups[];
export interface ListAvailableResourceDimensionsResponse {
  MetricDimensions?: MetricDimensionGroups[];
  NextToken?: string;
}
export type MetricTypeList = string[];
export interface ListAvailableResourceMetricsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  MetricTypes: string[];
  NextToken?: string;
  MaxResults?: number;
}
export type Description = string;
export interface ResponseResourceMetric {
  Metric?: string;
  Description?: string;
  Unit?: string;
}
export type ResponseResourceMetricList = ResponseResourceMetric[];
export interface ListAvailableResourceMetricsResponse {
  Metrics?: ResponseResourceMetric[];
  NextToken?: string;
}
export type RecommendationIdList = string[];
export interface ListPerformanceAnalysisReportRecommendationsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
  RecommendationIds?: string[];
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPerformanceAnalysisReportRecommendationsResponse {
  Recommendations?: Recommendation[];
  NextToken?: string;
}
export interface ListPerformanceAnalysisReportsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  NextToken?: string;
  MaxResults?: number;
  ListTags?: boolean;
}
export interface AnalysisReportSummary {
  AnalysisReportId?: string;
  CreateTime?: Date;
  StartTime?: Date;
  EndTime?: Date;
  Status?: AnalysisStatus;
  Tags?: Tag[];
}
export type AnalysisReportSummaryList = AnalysisReportSummary[];
export interface ListPerformanceAnalysisReportsResponse {
  AnalysisReports?: AnalysisReportSummary[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface TagResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export type ErrorString = string;
export type CreatePerformanceAnalysisReportError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Creates a new performance analysis report for a specific time period for the
 * DB instance.
 */
export const createPerformanceAnalysisReport: API.OperationMethod<
  CreatePerformanceAnalysisReportRequest,
  CreatePerformanceAnalysisReportResponse,
  CreatePerformanceAnalysisReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<CreatePerformanceAnalysisReportRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<CreatePerformanceAnalysisReportResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePerformanceAnalysisReport",
}));

export type DeletePerformanceAnalysisReportError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Deletes a performance analysis report.
 */
export const deletePerformanceAnalysisReport: API.OperationMethod<
  DeletePerformanceAnalysisReportRequest,
  DeletePerformanceAnalysisReportResponse,
  DeletePerformanceAnalysisReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<DeletePerformanceAnalysisReportRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<DeletePerformanceAnalysisReportResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePerformanceAnalysisReport",
}));

export type DescribeDimensionKeysError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * For a specific time period, retrieve the top `N` dimension keys for a metric.
 *
 * Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 * only the first 500 bytes are returned.
 */
export const describeDimensionKeys: API.PaginatedOperationMethod<
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysResponse,
  DescribeDimensionKeysError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<DescribeDimensionKeysRequest>,
  output: __S(16, __c2, 0) as any as S.Schema<DescribeDimensionKeysResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDimensionKeys",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetDimensionKeyDetailsError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID,
 * `GetDimensionKeyDetails` retrieves the full text of the dimension `db.sql.statement` associated with this ID.
 * This operation is useful because `GetResourceMetrics` and `DescribeDimensionKeys` don't support retrieval of large
 * SQL statement text, lock snapshots, and execution plans.
 */
export const getDimensionKeyDetails: API.OperationMethod<
  GetDimensionKeyDetailsRequest,
  GetDimensionKeyDetailsResponse,
  GetDimensionKeyDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<GetDimensionKeyDetailsRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<GetDimensionKeyDetailsResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDimensionKeyDetails",
}));

export type GetPerformanceAnalysisReportError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Retrieves the report including the report ID, status, time details, and the insights
 * with recommendations. The report status can be `RUNNING`,
 * `SUCCEEDED`, or `FAILED`. The insights include the
 * `description` and `recommendation` fields.
 */
export const getPerformanceAnalysisReport: API.OperationMethod<
  GetPerformanceAnalysisReportRequest,
  GetPerformanceAnalysisReportResponse,
  GetPerformanceAnalysisReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<GetPerformanceAnalysisReportRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<GetPerformanceAnalysisReportResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPerformanceAnalysisReport",
}));

export type GetResourceMetadataError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Retrieve the metadata for different features. For example, the metadata might indicate
 * that a feature is turned on or off on a specific DB instance.
 */
export const getResourceMetadata: API.OperationMethod<
  GetResourceMetadataRequest,
  GetResourceMetadataResponse,
  GetResourceMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<GetResourceMetadataRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<GetResourceMetadataResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceMetadata",
}));

export type GetResourceMetricsError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide
 * specific dimension groups and dimensions, and provide filtering criteria for each group. You must specify an aggregate function for
 * each metric.
 *
 * Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 * only the first 500 bytes are returned.
 */
export const getResourceMetrics: API.PaginatedOperationMethod<
  GetResourceMetricsRequest,
  GetResourceMetricsResponse,
  GetResourceMetricsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<GetResourceMetricsRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<GetResourceMetricsResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceMetrics",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAvailableResourceDimensionsError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
 */
export const listAvailableResourceDimensions: API.PaginatedOperationMethod<
  ListAvailableResourceDimensionsRequest,
  ListAvailableResourceDimensionsResponse,
  ListAvailableResourceDimensionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<ListAvailableResourceDimensionsRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<ListAvailableResourceDimensionsResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableResourceDimensions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAvailableResourceMetricsError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Retrieve metrics of the specified types that can be queried for a specified DB instance.
 */
export const listAvailableResourceMetrics: API.PaginatedOperationMethod<
  ListAvailableResourceMetricsRequest,
  ListAvailableResourceMetricsResponse,
  ListAvailableResourceMetricsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<ListAvailableResourceMetricsRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<ListAvailableResourceMetricsResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableResourceMetrics",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPerformanceAnalysisReportRecommendationsError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Retrieves recommendations for a performance analysis report.
 */
export const listPerformanceAnalysisReportRecommendations: API.PaginatedOperationMethod<
  ListPerformanceAnalysisReportRecommendationsRequest,
  ListPerformanceAnalysisReportRecommendationsResponse,
  ListPerformanceAnalysisReportRecommendationsError,
  Credentials | HttpClient.HttpClient,
  Recommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<ListPerformanceAnalysisReportRecommendationsRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<ListPerformanceAnalysisReportRecommendationsResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPerformanceAnalysisReportRecommendations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Recommendations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPerformanceAnalysisReportsError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Lists all the analysis reports created for the DB instance. The reports are sorted based on the start time of each report.
 */
export const listPerformanceAnalysisReports: API.PaginatedOperationMethod<
  ListPerformanceAnalysisReportsRequest,
  ListPerformanceAnalysisReportsResponse,
  ListPerformanceAnalysisReportsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<ListPerformanceAnalysisReportsRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<ListPerformanceAnalysisReportsResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPerformanceAnalysisReports",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Retrieves all the metadata tags associated with Amazon RDS Performance Insights resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Adds metadata tags to the Amazon RDS Performance Insights resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServiceError
  | InvalidArgumentException
  | NotAuthorizedException
  | CommonErrors;
/**
 * Deletes the metadata tags from the Amazon RDS Performance Insights resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<UntagResourceRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServiceError, InvalidArgumentException, NotAuthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(0, __c0, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreatePerformanceAnalysisReportRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AnalysisReportId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreatePerformanceAnalysisReportResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          AnalysisReportId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeletePerformanceAnalysisReportRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePerformanceAnalysisReportResponse",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Group: S.String,
          Dimensions: S.optional(__S(6, __c0, 6)),
          Limit: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DimensionGroup" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Metric: S.String,
          PeriodInSeconds: S.optional(S.Number),
          GroupBy: __S(7, __c0, 7),
          AdditionalMetrics: S.optional(__S(6, __c0, 6)),
          PartitionBy: S.optional(__S(7, __c0, 7)),
          Filter: S.optional(__S(8, __c1, 0)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDimensionKeysRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Dimensions: __S(8, __c1, 0) })).annotate({
        identifier: "ResponsePartitionKey",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 5:
      return S.Array(S.Number);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Dimensions: S.optional(__S(8, __c1, 0)),
          Total: S.optional(S.Number),
          AdditionalMetrics: S.optional(__S(12, __c1, 4)),
          Partitions: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "DimensionKeyDescription" });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AlignedStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AlignedEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PartitionKeys: S.optional(__S(11, __c1, 3)),
          Keys: S.optional(__S(15, __c1, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDimensionKeysResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          Group: S.String,
          GroupIdentifier: S.String,
          RequestedDimensions: S.optional(__S(6, __c0, 6)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDimensionKeyDetailsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.String),
          Dimension: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "DimensionKeyDetail" });
    case 3:
      return S.Array(__S(18, __c2, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Dimensions: S.optional(__S(19, __c2, 3)) }).pipe(ns),
      ).annotate({
        identifier: "GetDimensionKeyDetailsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          AnalysisReportId: S.String,
          TextFormat: S.optional(S.String),
          AcceptLanguage: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetPerformanceAnalysisReportRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecommendationId: S.optional(S.String),
          RecommendationDescription: S.optional(SensitiveString),
          RecommendationDetails: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Metric: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Dimensions: S.optional(__S(8, __c1, 0)),
          Filter: S.optional(__S(8, __c1, 0)),
          Value: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "PerformanceInsightsMetric",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PerformanceInsightsMetric: S.optional(__S(24, __c3, 0)) }),
      ).annotate({ identifier: "Data" });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String,
          InsightType: S.optional(S.String),
          Context: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Severity: S.optional(S.String),
          SupportingInsights: S.optional(
            S.suspend(() => __S(28, __c3, 4)).annotate({ identifier: "InsightList" }),
          ),
          Description: S.optional(SensitiveString),
          Recommendations: S.optional(__S(23, __c2, 7)),
          InsightData: S.optional(__S(26, __c3, 2)),
          BaselineData: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "Insight" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Insight> => __S(27, __c3, 3)).annotate({
          identifier: "Insight",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          AnalysisReportId: S.String,
          Identifier: S.optional(S.String),
          ServiceType: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          Insights: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({ identifier: "AnalysisReport" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AnalysisReport: S.optional(__S(29, __c3, 5)) }).pipe(ns),
      ).annotate({
        identifier: "GetPerformanceAnalysisReportResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServiceType: S.String, Identifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetResourceMetadataRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "FeatureMetadata",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(32, __c4, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.optional(S.String),
          Features: S.optional(__S(33, __c4, 1)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetResourceMetadataResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Metric: S.String,
          GroupBy: S.optional(__S(7, __c0, 7)),
          Filter: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "MetricQuery" });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          MetricQueries: __S(36, __c4, 4),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          PeriodInSeconds: S.optional(S.Number),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          PeriodAlignment: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetResourceMetricsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Metric: S.String, Dimensions: S.optional(__S(8, __c1, 0)) }),
      ).annotate({
        identifier: "ResponseResourceMetricKey",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")), Value: S.Number }),
      ).annotate({ identifier: "DataPoint" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(__S(38, __c4, 6)),
          DataPoints: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "MetricKeyDataPoints" });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AlignedStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AlignedEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Identifier: S.optional(S.String),
          MetricList: S.optional(__S(42, __c5, 2)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetResourceMetricsResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          Metrics: __S(6, __c0, 6),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AuthorizedActions: S.optional(__S(44, __c5, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAvailableResourceDimensionsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Identifier: S.optional(S.String) })).annotate({
        identifier: "DimensionDetail",
      });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Group: S.optional(S.String), Dimensions: S.optional(__S(47, __c5, 7)) }),
      ).annotate({ identifier: "DimensionGroupDetail" });
    case 1:
      return S.Array(__S(48, __c6, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Metric: S.optional(S.String), Groups: S.optional(__S(49, __c6, 1)) }),
      ).annotate({ identifier: "MetricDimensionGroups" });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          MetricDimensions: S.optional(__S(51, __c6, 3)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableResourceDimensionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          MetricTypes: __S(6, __c0, 6),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAvailableResourceMetricsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Metric: S.optional(S.String),
          Description: S.optional(S.String),
          Unit: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResponseResourceMetric" });
    case 7:
      return S.Array(__S(54, __c6, 6));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Metrics: S.optional(__S(55, __c6, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableResourceMetricsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          AnalysisReportId: S.String,
          RecommendationIds: S.optional(__S(6, __c0, 6)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPerformanceAnalysisReportRecommendationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Recommendations: S.optional(__S(23, __c2, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPerformanceAnalysisReportRecommendationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.String,
          Identifier: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ListTags: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPerformanceAnalysisReportsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AnalysisReportId: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          Tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "AnalysisReportSummary" });
    case 5:
      return S.Array(__S(60, __c7, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AnalysisReports: S.optional(__S(61, __c7, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPerformanceAnalysisReportsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServiceType: S.String, ResourceARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(1, __c0, 1)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ServiceType: S.String, ResourceARN: S.String, Tags: __S(1, __c0, 1) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ServiceType: S.String, ResourceARN: S.String, TagKeys: __S(6, __c0, 6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
