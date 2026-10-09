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
const ServiceType = S.String;

export type IdentifierString = string;
export type ISOTimestamp = Date;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 1);
export interface CreatePerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  StartTime: Date;
  EndTime?: Date;
  Tags?: Tag[];
}
const CreatePerformanceAnalysisReportRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreatePerformanceAnalysisReportRequest>;
export type AnalysisReportId = string;
export interface CreatePerformanceAnalysisReportResponse {
  AnalysisReportId?: string;
}
const CreatePerformanceAnalysisReportResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreatePerformanceAnalysisReportResponse>;
export interface DeletePerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
}
const DeletePerformanceAnalysisReportRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<DeletePerformanceAnalysisReportRequest>;
export interface DeletePerformanceAnalysisReportResponse {}
const DeletePerformanceAnalysisReportResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<DeletePerformanceAnalysisReportResponse>;
export type RequestString = string;
export type SanitizedString = string;
export type SanitizedStringList = string[];
const SanitizedStringList = /*@__PURE__*/ __L.at(__c0, 6);
export type Limit = number;
export interface DimensionGroup {
  Group: string;
  Dimensions?: string[];
  Limit?: number;
}
const DimensionGroup = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<DimensionGroup>;
export type AdditionalMetricsList = string[];
const AdditionalMetricsList = SanitizedStringList as any as S.Schema<AdditionalMetricsList>;
export type MetricQueryFilterMap = { [key: string]: string | undefined };
const MetricQueryFilterMap = /*@__PURE__*/ __L.at(__c1, 0);
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
const DescribeDimensionKeysRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<DescribeDimensionKeysRequest>;
export type DimensionMap = { [key: string]: string | undefined };
const DimensionMap = MetricQueryFilterMap as any as S.Schema<DimensionMap>;
export interface ResponsePartitionKey {
  Dimensions: { [key: string]: string | undefined };
}
const ResponsePartitionKey = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<ResponsePartitionKey>;
export type ResponsePartitionKeyList = ResponsePartitionKey[];
const ResponsePartitionKeyList = /*@__PURE__*/ __L.at(__c1, 3);
export type AdditionalMetricsMap = { [key: string]: number | undefined };
const AdditionalMetricsMap = /*@__PURE__*/ __L.at(__c1, 4);
export type MetricValuesList = number[];
const MetricValuesList = /*@__PURE__*/ __L.at(__c1, 5);
export interface DimensionKeyDescription {
  Dimensions?: { [key: string]: string | undefined };
  Total?: number;
  AdditionalMetrics?: { [key: string]: number | undefined };
  Partitions?: number[];
}
const DimensionKeyDescription = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<DimensionKeyDescription>;
export type DimensionKeyDescriptionList = DimensionKeyDescription[];
const DimensionKeyDescriptionList = /*@__PURE__*/ __L.at(__c1, 7);
export interface DescribeDimensionKeysResponse {
  AlignedStartTime?: Date;
  AlignedEndTime?: Date;
  PartitionKeys?: ResponsePartitionKey[];
  Keys?: DimensionKeyDescription[];
  NextToken?: string;
}
const DescribeDimensionKeysResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DescribeDimensionKeysResponse>;
export type RequestedDimensionList = string[];
const RequestedDimensionList = SanitizedStringList as any as S.Schema<RequestedDimensionList>;
export interface GetDimensionKeyDetailsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  Group: string;
  GroupIdentifier: string;
  RequestedDimensions?: string[];
}
const GetDimensionKeyDetailsRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<GetDimensionKeyDetailsRequest>;
export type DetailStatus = "AVAILABLE" | "PROCESSING" | "UNAVAILABLE" | (string & {});
const DetailStatus = S.String;

export interface DimensionKeyDetail {
  Value?: string;
  Dimension?: string;
  Status?: DetailStatus;
}
const DimensionKeyDetail = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<DimensionKeyDetail>;
export type DimensionKeyDetailList = DimensionKeyDetail[];
const DimensionKeyDetailList = /*@__PURE__*/ __L.at(__c2, 3);
export interface GetDimensionKeyDetailsResponse {
  Dimensions?: DimensionKeyDetail[];
}
const GetDimensionKeyDetailsResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<GetDimensionKeyDetailsResponse>;
export type TextFormat = "PLAIN_TEXT" | "MARKDOWN" | (string & {});
const TextFormat = S.String;

export type AcceptLanguage = "EN_US" | (string & {});
const AcceptLanguage = S.String;

export interface GetPerformanceAnalysisReportRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
  TextFormat?: TextFormat;
  AcceptLanguage?: AcceptLanguage;
}
const GetPerformanceAnalysisReportRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<GetPerformanceAnalysisReportRequest>;
export type AnalysisStatus = "RUNNING" | "SUCCEEDED" | "FAILED" | (string & {});
const AnalysisStatus = S.String;

export type ContextType = "CAUSAL" | "CONTEXTUAL" | (string & {});
const ContextType = S.String;

export type Severity = "LOW" | "MEDIUM" | "HIGH" | (string & {});
const Severity = S.String;

export type MarkdownString = string | redacted.Redacted<string>;
export interface Recommendation {
  RecommendationId?: string;
  RecommendationDescription?: string | redacted.Redacted<string>;
  RecommendationDetails?: string | redacted.Redacted<string>;
}
const Recommendation = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<Recommendation>;
export type RecommendationList = Recommendation[];
const RecommendationList = /*@__PURE__*/ __L.at(__c2, 7);
export type DescriptiveString = string;
export type DescriptiveMap = { [key: string]: string | undefined };
const DescriptiveMap = MetricQueryFilterMap as any as S.Schema<DescriptiveMap>;
export interface PerformanceInsightsMetric {
  Metric?: string;
  DisplayName?: string;
  Dimensions?: { [key: string]: string | undefined };
  Filter?: { [key: string]: string | undefined };
  Value?: number;
}
const PerformanceInsightsMetric = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<PerformanceInsightsMetric>;
export interface Data {
  PerformanceInsightsMetric?: PerformanceInsightsMetric;
}
const Data = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<Data>;
export type DataList = Data[];
const DataList = /*@__PURE__*/ __L.at(__c3, 2);
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
const Insight = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<Insight>;
export type InsightList = Insight[];
const InsightList = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<InsightList>;
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
const AnalysisReport = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<AnalysisReport>;
export interface GetPerformanceAnalysisReportResponse {
  AnalysisReport?: AnalysisReport;
}
const GetPerformanceAnalysisReportResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<GetPerformanceAnalysisReportResponse>;
export interface GetResourceMetadataRequest {
  ServiceType: ServiceType;
  Identifier: string;
}
const GetResourceMetadataRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<GetResourceMetadataRequest>;
export type FeatureStatus =
  | "ENABLED"
  | "DISABLED"
  | "UNSUPPORTED"
  | "ENABLED_PENDING_REBOOT"
  | "DISABLED_PENDING_REBOOT"
  | "UNKNOWN"
  | (string & {});
const FeatureStatus = S.String;

export interface FeatureMetadata {
  Status?: FeatureStatus;
}
const FeatureMetadata = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<FeatureMetadata>;
export type FeatureMetadataMap = { [key: string]: FeatureMetadata | undefined };
const FeatureMetadataMap = /*@__PURE__*/ __L.at(__c4, 1);
export interface GetResourceMetadataResponse {
  Identifier?: string;
  Features?: { [key: string]: FeatureMetadata | undefined };
}
const GetResourceMetadataResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetResourceMetadataResponse>;
export interface MetricQuery {
  Metric: string;
  GroupBy?: DimensionGroup;
  Filter?: { [key: string]: string | undefined };
}
const MetricQuery = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<MetricQuery>;
export type MetricQueryList = MetricQuery[];
const MetricQueryList = /*@__PURE__*/ __L.at(__c4, 4);
export type PeriodAlignment = "END_TIME" | "START_TIME" | (string & {});
const PeriodAlignment = S.String;

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
const GetResourceMetricsRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<GetResourceMetricsRequest>;
export interface ResponseResourceMetricKey {
  Metric: string;
  Dimensions?: { [key: string]: string | undefined };
}
const ResponseResourceMetricKey = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<ResponseResourceMetricKey>;
export interface DataPoint {
  Timestamp: Date;
  Value: number;
}
const DataPoint = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<DataPoint>;
export type DataPointsList = DataPoint[];
const DataPointsList = /*@__PURE__*/ __L.at(__c5, 0);
export interface MetricKeyDataPoints {
  Key?: ResponseResourceMetricKey;
  DataPoints?: DataPoint[];
}
const MetricKeyDataPoints = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<MetricKeyDataPoints>;
export type MetricKeyDataPointsList = MetricKeyDataPoints[];
const MetricKeyDataPointsList = /*@__PURE__*/ __L.at(__c5, 2);
export interface GetResourceMetricsResponse {
  AlignedStartTime?: Date;
  AlignedEndTime?: Date;
  Identifier?: string;
  MetricList?: MetricKeyDataPoints[];
  NextToken?: string;
}
const GetResourceMetricsResponse = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<GetResourceMetricsResponse>;
export type DimensionsMetricList = string[];
const DimensionsMetricList = SanitizedStringList as any as S.Schema<DimensionsMetricList>;
export type FineGrainedAction =
  | "DescribeDimensionKeys"
  | "GetDimensionKeyDetails"
  | "GetResourceMetrics"
  | (string & {});
const FineGrainedAction = S.String;

export type AuthorizedActionsList = FineGrainedAction[];
const AuthorizedActionsList = /*@__PURE__*/ __L.at(__c5, 4);
export interface ListAvailableResourceDimensionsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  Metrics: string[];
  MaxResults?: number;
  NextToken?: string;
  AuthorizedActions?: FineGrainedAction[];
}
const ListAvailableResourceDimensionsRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<ListAvailableResourceDimensionsRequest>;
export interface DimensionDetail {
  Identifier?: string;
}
const DimensionDetail = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<DimensionDetail>;
export type DimensionDetailList = DimensionDetail[];
const DimensionDetailList = /*@__PURE__*/ __L.at(__c5, 7);
export interface DimensionGroupDetail {
  Group?: string;
  Dimensions?: DimensionDetail[];
}
const DimensionGroupDetail = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<DimensionGroupDetail>;
export type DimensionGroupDetailList = DimensionGroupDetail[];
const DimensionGroupDetailList = /*@__PURE__*/ __L.at(__c6, 1);
export interface MetricDimensionGroups {
  Metric?: string;
  Groups?: DimensionGroupDetail[];
}
const MetricDimensionGroups = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<MetricDimensionGroups>;
export type MetricDimensionsList = MetricDimensionGroups[];
const MetricDimensionsList = /*@__PURE__*/ __L.at(__c6, 3);
export interface ListAvailableResourceDimensionsResponse {
  MetricDimensions?: MetricDimensionGroups[];
  NextToken?: string;
}
const ListAvailableResourceDimensionsResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<ListAvailableResourceDimensionsResponse>;
export type MetricTypeList = string[];
const MetricTypeList = SanitizedStringList as any as S.Schema<MetricTypeList>;
export interface ListAvailableResourceMetricsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  MetricTypes: string[];
  NextToken?: string;
  MaxResults?: number;
}
const ListAvailableResourceMetricsRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<ListAvailableResourceMetricsRequest>;
export type Description = string;
export interface ResponseResourceMetric {
  Metric?: string;
  Description?: string;
  Unit?: string;
}
const ResponseResourceMetric = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ResponseResourceMetric>;
export type ResponseResourceMetricList = ResponseResourceMetric[];
const ResponseResourceMetricList = /*@__PURE__*/ __L.at(__c6, 7);
export interface ListAvailableResourceMetricsResponse {
  Metrics?: ResponseResourceMetric[];
  NextToken?: string;
}
const ListAvailableResourceMetricsResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<ListAvailableResourceMetricsResponse>;
export type RecommendationIdList = string[];
const RecommendationIdList = SanitizedStringList as any as S.Schema<RecommendationIdList>;
export interface ListPerformanceAnalysisReportRecommendationsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  AnalysisReportId: string;
  RecommendationIds?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const ListPerformanceAnalysisReportRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<ListPerformanceAnalysisReportRecommendationsRequest>;
export interface ListPerformanceAnalysisReportRecommendationsResponse {
  Recommendations?: Recommendation[];
  NextToken?: string;
}
const ListPerformanceAnalysisReportRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ListPerformanceAnalysisReportRecommendationsResponse>;
export interface ListPerformanceAnalysisReportsRequest {
  ServiceType: ServiceType;
  Identifier: string;
  NextToken?: string;
  MaxResults?: number;
  ListTags?: boolean;
}
const ListPerformanceAnalysisReportsRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ListPerformanceAnalysisReportsRequest>;
export interface AnalysisReportSummary {
  AnalysisReportId?: string;
  CreateTime?: Date;
  StartTime?: Date;
  EndTime?: Date;
  Status?: AnalysisStatus;
  Tags?: Tag[];
}
const AnalysisReportSummary = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<AnalysisReportSummary>;
export type AnalysisReportSummaryList = AnalysisReportSummary[];
const AnalysisReportSummaryList = /*@__PURE__*/ __L.at(__c7, 5);
export interface ListPerformanceAnalysisReportsResponse {
  AnalysisReports?: AnalysisReportSummary[];
  NextToken?: string;
}
const ListPerformanceAnalysisReportsResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ListPerformanceAnalysisReportsResponse>;
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TagResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = SanitizedStringList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ServiceType: ServiceType;
  ResourceARN: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
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
  input: CreatePerformanceAnalysisReportRequest,
  output: CreatePerformanceAnalysisReportResponse,
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
  input: DeletePerformanceAnalysisReportRequest,
  output: DeletePerformanceAnalysisReportResponse,
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
  input: DescribeDimensionKeysRequest,
  output: DescribeDimensionKeysResponse,
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
  input: GetDimensionKeyDetailsRequest,
  output: GetDimensionKeyDetailsResponse,
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
  input: GetPerformanceAnalysisReportRequest,
  output: GetPerformanceAnalysisReportResponse,
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
  input: GetResourceMetadataRequest,
  output: GetResourceMetadataResponse,
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
  input: GetResourceMetricsRequest,
  output: GetResourceMetricsResponse,
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
  input: ListAvailableResourceDimensionsRequest,
  output: ListAvailableResourceDimensionsResponse,
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
  input: ListAvailableResourceMetricsRequest,
  output: ListAvailableResourceMetricsResponse,
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
  input: ListPerformanceAnalysisReportRecommendationsRequest,
  output: ListPerformanceAnalysisReportRecommendationsResponse,
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
  input: ListPerformanceAnalysisReportsRequest,
  output: ListPerformanceAnalysisReportsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
          Identifier: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagList),
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
          ServiceType: ServiceType,
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
          Dimensions: S.optional(SanitizedStringList),
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
          ServiceType: ServiceType,
          Identifier: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Metric: S.String,
          PeriodInSeconds: S.optional(S.Number),
          GroupBy: DimensionGroup,
          AdditionalMetrics: S.optional(AdditionalMetricsList),
          PartitionBy: S.optional(DimensionGroup),
          Filter: S.optional(MetricQueryFilterMap),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDimensionKeysRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Dimensions: DimensionMap })).annotate({
        identifier: "ResponsePartitionKey",
      });
    case 3:
      return S.Array(ResponsePartitionKey);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 5:
      return S.Array(S.Number);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Dimensions: S.optional(DimensionMap),
          Total: S.optional(S.Number),
          AdditionalMetrics: S.optional(AdditionalMetricsMap),
          Partitions: S.optional(MetricValuesList),
        }),
      ).annotate({ identifier: "DimensionKeyDescription" });
    case 7:
      return S.Array(DimensionKeyDescription);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AlignedStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AlignedEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PartitionKeys: S.optional(ResponsePartitionKeyList),
          Keys: S.optional(DimensionKeyDescriptionList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDimensionKeysResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
          Identifier: S.String,
          Group: S.String,
          GroupIdentifier: S.String,
          RequestedDimensions: S.optional(RequestedDimensionList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDimensionKeyDetailsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.String),
          Dimension: S.optional(S.String),
          Status: S.optional(DetailStatus),
        }),
      ).annotate({ identifier: "DimensionKeyDetail" });
    case 3:
      return S.Array(DimensionKeyDetail);
    case 4:
      return S.suspend(() =>
        S.Struct({ Dimensions: S.optional(DimensionKeyDetailList) }).pipe(ns),
      ).annotate({
        identifier: "GetDimensionKeyDetailsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
          Identifier: S.String,
          AnalysisReportId: S.String,
          TextFormat: S.optional(TextFormat),
          AcceptLanguage: S.optional(AcceptLanguage),
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
      return S.Array(Recommendation);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Metric: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Dimensions: S.optional(DescriptiveMap),
          Filter: S.optional(DescriptiveMap),
          Value: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "PerformanceInsightsMetric",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PerformanceInsightsMetric: S.optional(PerformanceInsightsMetric) }),
      ).annotate({ identifier: "Data" });
    case 2:
      return S.Array(Data);
    case 3:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String,
          InsightType: S.optional(S.String),
          Context: S.optional(ContextType),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Severity: S.optional(Severity),
          SupportingInsights: S.optional(
            S.suspend(() => InsightList).annotate({ identifier: "InsightList" }),
          ),
          Description: S.optional(SensitiveString),
          Recommendations: S.optional(RecommendationList),
          InsightData: S.optional(DataList),
          BaselineData: S.optional(DataList),
        }),
      ).annotate({ identifier: "Insight" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Insight> => Insight).annotate({
          identifier: "Insight",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          AnalysisReportId: S.String,
          Identifier: S.optional(S.String),
          ServiceType: S.optional(ServiceType),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(AnalysisStatus),
          Insights: S.optional(InsightList),
        }),
      ).annotate({ identifier: "AnalysisReport" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AnalysisReport: S.optional(AnalysisReport) }).pipe(ns),
      ).annotate({
        identifier: "GetPerformanceAnalysisReportResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServiceType: ServiceType, Identifier: S.String }).pipe(
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
      return S.suspend(() => S.Struct({ Status: S.optional(FeatureStatus) })).annotate({
        identifier: "FeatureMetadata",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ FeatureMetadata.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.optional(S.String),
          Features: S.optional(FeatureMetadataMap),
        }).pipe(ns),
      ).annotate({
        identifier: "GetResourceMetadataResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Metric: S.String,
          GroupBy: S.optional(DimensionGroup),
          Filter: S.optional(MetricQueryFilterMap),
        }),
      ).annotate({ identifier: "MetricQuery" });
    case 4:
      return S.Array(MetricQuery);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
          Identifier: S.String,
          MetricQueries: MetricQueryList,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          PeriodInSeconds: S.optional(S.Number),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          PeriodAlignment: S.optional(PeriodAlignment),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetResourceMetricsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Metric: S.String, Dimensions: S.optional(DimensionMap) }),
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
      return S.Array(DataPoint);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(ResponseResourceMetricKey),
          DataPoints: S.optional(DataPointsList),
        }),
      ).annotate({ identifier: "MetricKeyDataPoints" });
    case 2:
      return S.Array(MetricKeyDataPoints);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AlignedStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AlignedEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Identifier: S.optional(S.String),
          MetricList: S.optional(MetricKeyDataPointsList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetResourceMetricsResponse",
      });
    case 4:
      return S.Array(FineGrainedAction);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
          Identifier: S.String,
          Metrics: DimensionsMetricList,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AuthorizedActions: S.optional(AuthorizedActionsList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAvailableResourceDimensionsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Identifier: S.optional(S.String) })).annotate({
        identifier: "DimensionDetail",
      });
    case 7:
      return S.Array(DimensionDetail);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Group: S.optional(S.String), Dimensions: S.optional(DimensionDetailList) }),
      ).annotate({ identifier: "DimensionGroupDetail" });
    case 1:
      return S.Array(DimensionGroupDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({ Metric: S.optional(S.String), Groups: S.optional(DimensionGroupDetailList) }),
      ).annotate({ identifier: "MetricDimensionGroups" });
    case 3:
      return S.Array(MetricDimensionGroups);
    case 4:
      return S.suspend(() =>
        S.Struct({
          MetricDimensions: S.optional(MetricDimensionsList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableResourceDimensionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
          Identifier: S.String,
          MetricTypes: MetricTypeList,
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
      return S.Array(ResponseResourceMetric);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Metrics: S.optional(ResponseResourceMetricList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableResourceMetricsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
          Identifier: S.String,
          AnalysisReportId: S.String,
          RecommendationIds: S.optional(RecommendationIdList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPerformanceAnalysisReportRecommendationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Recommendations: S.optional(RecommendationList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPerformanceAnalysisReportRecommendationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ServiceType: ServiceType,
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
          Status: S.optional(AnalysisStatus),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "AnalysisReportSummary" });
    case 5:
      return S.Array(AnalysisReportSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AnalysisReports: S.optional(AnalysisReportSummaryList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPerformanceAnalysisReportsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServiceType: ServiceType, ResourceARN: S.String }).pipe(
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
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ServiceType: ServiceType, ResourceARN: S.String, Tags: TagList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ServiceType: ServiceType, ResourceARN: S.String, TagKeys: TagKeyList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
