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
  sdkId: "DevOps Guru",
  serviceShapeName: "CapstoneControlPlaneService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "devops-guru" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-12-01");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://devops-guru-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://devops-guru-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://devops-guru.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://devops-guru.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(171, __c21, 3)).annotate({
          identifier: "ValidationExceptionFields",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type TopicArn = string;
export interface SnsChannelConfig {
  TopicArn?: string;
}
export type InsightSeverity = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export type InsightSeverities = InsightSeverity[];
export type NotificationMessageType =
  | "NEW_INSIGHT"
  | "CLOSED_INSIGHT"
  | "NEW_ASSOCIATION"
  | "SEVERITY_UPGRADED"
  | "NEW_RECOMMENDATION"
  | (string & {});
export type NotificationMessageTypes = NotificationMessageType[];
export interface NotificationFilterConfig {
  Severities?: InsightSeverity[];
  MessageTypes?: NotificationMessageType[];
}
export interface NotificationChannelConfig {
  Sns: SnsChannelConfig;
  Filters?: NotificationFilterConfig;
}
export interface AddNotificationChannelRequest {
  Config: NotificationChannelConfig;
}
export type NotificationChannelId = string;
export interface AddNotificationChannelResponse {
  Id: string;
}
export type InsightId = string;
export interface DeleteInsightRequest {
  Id: string;
}
export interface DeleteInsightResponse {}
export interface DescribeAccountHealthRequest {}
export type NumOpenReactiveInsights = number;
export type NumOpenProactiveInsights = number;
export type NumMetricsAnalyzed = number;
export type ResourceHours = number;
export type AnalyzedResourceCount = number;
export interface DescribeAccountHealthResponse {
  OpenReactiveInsights: number;
  OpenProactiveInsights: number;
  MetricsAnalyzed: number;
  ResourceHours: number;
  AnalyzedResourceCount?: number;
}
export interface DescribeAccountOverviewRequest {
  FromTime: Date;
  ToTime?: Date;
}
export type NumReactiveInsights = number;
export type NumProactiveInsights = number;
export type MeanTimeToRecoverInMilliseconds = number;
export interface DescribeAccountOverviewResponse {
  ReactiveInsights: number;
  ProactiveInsights: number;
  MeanTimeToRecoverInMilliseconds: number;
}
export type AnomalyId = string;
export type AwsAccountId = string;
export interface DescribeAnomalyRequest {
  Id: string;
  AccountId?: string;
}
export type AnomalySeverity = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export type AnomalyStatus = "ONGOING" | "CLOSED" | (string & {});
export interface AnomalyTimeRange {
  StartTime: Date;
  EndTime?: Date;
}
export interface AnomalyReportedTimeRange {
  OpenTime: Date;
  CloseTime?: Date;
}
export interface PredictionTimeRange {
  StartTime: Date;
  EndTime?: Date;
}
export type CloudWatchMetricsMetricName = string;
export type CloudWatchMetricsNamespace = string;
export type CloudWatchMetricsDimensionName = string;
export type CloudWatchMetricsDimensionValue = string;
export interface CloudWatchMetricsDimension {
  Name?: string;
  Value?: string;
}
export type CloudWatchMetricsDimensions = CloudWatchMetricsDimension[];
export type CloudWatchMetricsStat =
  | "Sum"
  | "Average"
  | "SampleCount"
  | "Minimum"
  | "Maximum"
  | "p99"
  | "p90"
  | "p50"
  | (string & {});
export type CloudWatchMetricsUnit = string;
export type CloudWatchMetricsPeriod = number;
export type MetricValue = number;
export interface TimestampMetricValuePair {
  Timestamp?: Date;
  MetricValue?: number;
}
export type TimestampMetricValuePairList = TimestampMetricValuePair[];
export type CloudWatchMetricDataStatusCode =
  | "Complete"
  | "InternalError"
  | "PartialData"
  | (string & {});
export interface CloudWatchMetricsDataSummary {
  TimestampMetricValuePairList?: TimestampMetricValuePair[];
  StatusCode?: CloudWatchMetricDataStatusCode;
}
export interface CloudWatchMetricsDetail {
  MetricName?: string;
  Namespace?: string;
  Dimensions?: CloudWatchMetricsDimension[];
  Stat?: CloudWatchMetricsStat;
  Unit?: string;
  Period?: number;
  MetricDataSummary?: CloudWatchMetricsDataSummary;
}
export type CloudWatchMetricsDetails = CloudWatchMetricsDetail[];
export type PerformanceInsightsMetricDisplayName = string;
export type PerformanceInsightsMetricUnit = string;
export type PerformanceInsightsMetricName = string;
export type PerformanceInsightsMetricGroup = string;
export type PerformanceInsightsMetricDimension = string;
export type PerformanceInsightsMetricDimensions = string[];
export type PerformanceInsightsMetricLimitInteger = number;
export interface PerformanceInsightsMetricDimensionGroup {
  Group?: string;
  Dimensions?: string[];
  Limit?: number;
}
export type PerformanceInsightsMetricFilterKey = string;
export type PerformanceInsightsMetricFilterValue = string;
export type PerformanceInsightsMetricFilterMap = { [key: string]: string | undefined };
export interface PerformanceInsightsMetricQuery {
  Metric?: string;
  GroupBy?: PerformanceInsightsMetricDimensionGroup;
  Filter?: { [key: string]: string | undefined };
}
export type PerformanceInsightsReferenceName = string;
export type PerformanceInsightsValueDouble = number;
export interface PerformanceInsightsReferenceScalar {
  Value?: number;
}
export interface PerformanceInsightsReferenceMetric {
  MetricQuery?: PerformanceInsightsMetricQuery;
}
export interface PerformanceInsightsReferenceComparisonValues {
  ReferenceScalar?: PerformanceInsightsReferenceScalar;
  ReferenceMetric?: PerformanceInsightsReferenceMetric;
}
export interface PerformanceInsightsReferenceData {
  Name?: string;
  ComparisonValues?: PerformanceInsightsReferenceComparisonValues;
}
export type PerformanceInsightsReferenceDataList = PerformanceInsightsReferenceData[];
export type PerformanceInsightsStatType = string;
export interface PerformanceInsightsStat {
  Type?: string;
  Value?: number;
}
export type PerformanceInsightsStats = PerformanceInsightsStat[];
export interface PerformanceInsightsMetricsDetail {
  MetricDisplayName?: string;
  Unit?: string;
  MetricQuery?: PerformanceInsightsMetricQuery;
  ReferenceData?: PerformanceInsightsReferenceData[];
  StatsAtAnomaly?: PerformanceInsightsStat[];
  StatsAtBaseline?: PerformanceInsightsStat[];
}
export type PerformanceInsightsMetricsDetails = PerformanceInsightsMetricsDetail[];
export interface AnomalySourceDetails {
  CloudWatchMetrics?: CloudWatchMetricsDetail[];
  PerformanceInsightsMetrics?: PerformanceInsightsMetricsDetail[];
}
export type StackName = string;
export type StackNames = string[];
export interface CloudFormationCollection {
  StackNames?: string[];
}
export type AppBoundaryKey = string;
export type TagValue = string;
export type TagValues = string[];
export interface TagCollection {
  AppBoundaryKey: string;
  TagValues: string[];
}
export type TagCollections = TagCollection[];
export interface ResourceCollection {
  CloudFormation?: CloudFormationCollection;
  Tags?: TagCollection[];
}
export type AnomalyLimit = number;
export type AnomalySource = string;
export type ResourceName = string;
export type ResourceType = string;
export interface AnomalySourceMetadata {
  Source?: string;
  SourceResourceName?: string;
  SourceResourceType?: string;
}
export interface AnomalyResource {
  Name?: string;
  Type?: string;
}
export type AnomalyResources = AnomalyResource[];
export type AnomalyDescription = string;
export interface ProactiveAnomaly {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  UpdateTime?: Date;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Limit?: number;
  SourceMetadata?: AnomalySourceMetadata;
  AnomalyResources?: AnomalyResource[];
  Description?: string;
}
export type AnomalyType = "CAUSAL" | "CONTEXTUAL" | (string & {});
export type AnomalyName = string;
export interface ReactiveAnomaly {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Type?: AnomalyType;
  Name?: string;
  Description?: string;
  CausalAnomalyId?: string;
  AnomalyResources?: AnomalyResource[];
}
export interface DescribeAnomalyResponse {
  ProactiveAnomaly?: ProactiveAnomaly;
  ReactiveAnomaly?: ReactiveAnomaly;
}
export interface DescribeEventSourcesConfigRequest {}
export type EventSourceOptInStatus = "ENABLED" | "DISABLED" | (string & {});
export interface AmazonCodeGuruProfilerIntegration {
  Status?: EventSourceOptInStatus;
}
export interface EventSourcesConfig {
  AmazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration;
}
export interface DescribeEventSourcesConfigResponse {
  EventSources?: EventSourcesConfig;
}
export interface DescribeFeedbackRequest {
  InsightId?: string;
}
export type InsightFeedbackOption =
  | "VALID_COLLECTION"
  | "RECOMMENDATION_USEFUL"
  | "ALERT_TOO_SENSITIVE"
  | "DATA_NOISY_ANOMALY"
  | "DATA_INCORRECT"
  | (string & {});
export interface InsightFeedback {
  Id?: string;
  Feedback?: InsightFeedbackOption;
}
export interface DescribeFeedbackResponse {
  InsightFeedback?: InsightFeedback;
}
export interface DescribeInsightRequest {
  Id: string;
  AccountId?: string;
}
export type InsightName = string;
export type InsightStatus = "ONGOING" | "CLOSED" | (string & {});
export interface InsightTimeRange {
  StartTime: Date;
  EndTime?: Date;
}
export type SsmOpsItemId = string;
export type InsightDescription = string;
export interface ProactiveInsight {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  SsmOpsItemId?: string;
  Description?: string;
}
export interface ReactiveInsight {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  ResourceCollection?: ResourceCollection;
  SsmOpsItemId?: string;
  Description?: string;
}
export interface DescribeInsightResponse {
  ProactiveInsight?: ProactiveInsight;
  ReactiveInsight?: ReactiveInsight;
}
export type AccountIdList = string[];
export type OrganizationalUnitId = string;
export type OrganizationalUnitIdList = string[];
export interface DescribeOrganizationHealthRequest {
  AccountIds?: string[];
  OrganizationalUnitIds?: string[];
}
export interface DescribeOrganizationHealthResponse {
  OpenReactiveInsights: number;
  OpenProactiveInsights: number;
  MetricsAnalyzed: number;
  ResourceHours: number;
}
export interface DescribeOrganizationOverviewRequest {
  FromTime: Date;
  ToTime?: Date;
  AccountIds?: string[];
  OrganizationalUnitIds?: string[];
}
export interface DescribeOrganizationOverviewResponse {
  ReactiveInsights: number;
  ProactiveInsights: number;
}
export type OrganizationResourceCollectionType =
  | "AWS_CLOUD_FORMATION"
  | "AWS_SERVICE"
  | "AWS_ACCOUNT"
  | "AWS_TAGS"
  | (string & {});
export type UuidNextToken = string;
export type OrganizationResourceCollectionMaxResults = number;
export interface DescribeOrganizationResourceCollectionHealthRequest {
  OrganizationResourceCollectionType: OrganizationResourceCollectionType;
  AccountIds?: string[];
  OrganizationalUnitIds?: string[];
  NextToken?: string;
  MaxResults?: number;
}
export interface InsightHealth {
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
  MeanTimeToRecoverInMilliseconds?: number;
}
export interface CloudFormationHealth {
  StackName?: string;
  Insight?: InsightHealth;
  AnalyzedResourceCount?: number;
}
export type CloudFormationHealths = CloudFormationHealth[];
export type ServiceName =
  | "API_GATEWAY"
  | "APPLICATION_ELB"
  | "AUTO_SCALING_GROUP"
  | "CLOUD_FRONT"
  | "DYNAMO_DB"
  | "EC2"
  | "ECS"
  | "EKS"
  | "ELASTIC_BEANSTALK"
  | "ELASTI_CACHE"
  | "ELB"
  | "ES"
  | "KINESIS"
  | "LAMBDA"
  | "NAT_GATEWAY"
  | "NETWORK_ELB"
  | "RDS"
  | "REDSHIFT"
  | "ROUTE_53"
  | "S3"
  | "SAGE_MAKER"
  | "SNS"
  | "SQS"
  | "STEP_FUNCTIONS"
  | "SWF"
  | (string & {});
export interface ServiceInsightHealth {
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
}
export interface ServiceHealth {
  ServiceName?: ServiceName;
  Insight?: ServiceInsightHealth;
  AnalyzedResourceCount?: number;
}
export type ServiceHealths = ServiceHealth[];
export interface AccountInsightHealth {
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
}
export interface AccountHealth {
  AccountId?: string;
  Insight?: AccountInsightHealth;
}
export type AccountHealths = AccountHealth[];
export interface TagHealth {
  AppBoundaryKey?: string;
  TagValue?: string;
  Insight?: InsightHealth;
  AnalyzedResourceCount?: number;
}
export type TagHealths = TagHealth[];
export interface DescribeOrganizationResourceCollectionHealthResponse {
  CloudFormation?: CloudFormationHealth[];
  Service?: ServiceHealth[];
  Account?: AccountHealth[];
  NextToken?: string;
  Tags?: TagHealth[];
}
export type ResourceCollectionType =
  | "AWS_CLOUD_FORMATION"
  | "AWS_SERVICE"
  | "AWS_TAGS"
  | (string & {});
export interface DescribeResourceCollectionHealthRequest {
  ResourceCollectionType: ResourceCollectionType;
  NextToken?: string;
}
export interface DescribeResourceCollectionHealthResponse {
  CloudFormation?: CloudFormationHealth[];
  Service?: ServiceHealth[];
  NextToken?: string;
  Tags?: TagHealth[];
}
export interface DescribeServiceIntegrationRequest {}
export type OptInStatus = "ENABLED" | "DISABLED" | (string & {});
export interface OpsCenterIntegration {
  OptInStatus?: OptInStatus;
}
export interface LogsAnomalyDetectionIntegration {
  OptInStatus?: OptInStatus;
}
export type KMSKeyId = string;
export type ServerSideEncryptionType = "CUSTOMER_MANAGED_KEY" | "AWS_OWNED_KMS_KEY" | (string & {});
export interface KMSServerSideEncryptionIntegration {
  KMSKeyId?: string;
  OptInStatus?: OptInStatus;
  Type?: ServerSideEncryptionType;
}
export interface ServiceIntegrationConfig {
  OpsCenter?: OpsCenterIntegration;
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegration;
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegration;
}
export interface DescribeServiceIntegrationResponse {
  ServiceIntegration?: ServiceIntegrationConfig;
}
export interface GetCostEstimationRequest {
  NextToken?: string;
}
export type CostEstimationStackNames = string[];
export interface CloudFormationCostEstimationResourceCollectionFilter {
  StackNames?: string[];
}
export type CostEstimationTagValues = string[];
export interface TagCostEstimationResourceCollectionFilter {
  AppBoundaryKey: string;
  TagValues: string[];
}
export type TagCostEstimationResourceCollectionFilters =
  TagCostEstimationResourceCollectionFilter[];
export interface CostEstimationResourceCollectionFilter {
  CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;
  Tags?: TagCostEstimationResourceCollectionFilter[];
}
export type CostEstimationStatus = "ONGOING" | "COMPLETED" | (string & {});
export type CostEstimationServiceResourceState = "ACTIVE" | "INACTIVE" | (string & {});
export type CostEstimationServiceResourceCount = number;
export type Cost = number;
export interface ServiceResourceCost {
  Type?: string;
  State?: CostEstimationServiceResourceState;
  Count?: number;
  UnitCost?: number;
  Cost?: number;
}
export type ServiceResourceCosts = ServiceResourceCost[];
export interface CostEstimationTimeRange {
  StartTime?: Date;
  EndTime?: Date;
}
export interface GetCostEstimationResponse {
  ResourceCollection?: CostEstimationResourceCollectionFilter;
  Status?: CostEstimationStatus;
  Costs?: ServiceResourceCost[];
  TimeRange?: CostEstimationTimeRange;
  TotalCost?: number;
  NextToken?: string;
}
export interface GetResourceCollectionRequest {
  ResourceCollectionType: ResourceCollectionType;
  NextToken?: string;
}
export interface CloudFormationCollectionFilter {
  StackNames?: string[];
}
export interface TagCollectionFilter {
  AppBoundaryKey: string;
  TagValues: string[];
}
export type TagCollectionFilters = TagCollectionFilter[];
export interface ResourceCollectionFilter {
  CloudFormation?: CloudFormationCollectionFilter;
  Tags?: TagCollectionFilter[];
}
export interface GetResourceCollectionResponse {
  ResourceCollection?: ResourceCollectionFilter;
  NextToken?: string;
}
export interface StartTimeRange {
  FromTime?: Date;
  ToTime?: Date;
}
export type ListAnomaliesForInsightMaxResults = number;
export type ServiceNames = ServiceName[];
export interface ServiceCollection {
  ServiceNames?: ServiceName[];
}
export interface ListAnomaliesForInsightFilters {
  ServiceCollection?: ServiceCollection;
}
export interface ListAnomaliesForInsightRequest {
  InsightId: string;
  StartTimeRange?: StartTimeRange;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
  Filters?: ListAnomaliesForInsightFilters;
}
export interface ProactiveAnomalySummary {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  UpdateTime?: Date;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Limit?: number;
  SourceMetadata?: AnomalySourceMetadata;
  AnomalyResources?: AnomalyResource[];
  Description?: string;
}
export type ProactiveAnomalies = ProactiveAnomalySummary[];
export interface ReactiveAnomalySummary {
  Id?: string;
  Severity?: AnomalySeverity;
  Status?: AnomalyStatus;
  AnomalyTimeRange?: AnomalyTimeRange;
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
  SourceDetails?: AnomalySourceDetails;
  AssociatedInsightId?: string;
  ResourceCollection?: ResourceCollection;
  Type?: AnomalyType;
  Name?: string;
  Description?: string;
  CausalAnomalyId?: string;
  AnomalyResources?: AnomalyResource[];
}
export type ReactiveAnomalies = ReactiveAnomalySummary[];
export interface ListAnomaliesForInsightResponse {
  ProactiveAnomalies?: ProactiveAnomalySummary[];
  ReactiveAnomalies?: ReactiveAnomalySummary[];
  NextToken?: string;
}
export type ListAnomalousLogGroupsMaxResults = number;
export interface ListAnomalousLogGroupsRequest {
  InsightId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type LogGroupName = string;
export type NumberOfLogLinesScanned = number;
export type LogStreamName = string;
export type LogAnomalyType =
  | "KEYWORD"
  | "KEYWORD_TOKEN"
  | "FORMAT"
  | "HTTP_CODE"
  | "BLOCK_FORMAT"
  | "NUMERICAL_POINT"
  | "NUMERICAL_NAN"
  | "NEW_FIELD_NAME"
  | (string & {});
export type LogAnomalyToken = string;
export type LogEventId = string;
export type Explanation = string;
export type NumberOfLogLinesOccurrences = number;
export interface LogAnomalyClass {
  LogStreamName?: string;
  LogAnomalyType?: LogAnomalyType;
  LogAnomalyToken?: string;
  LogEventId?: string;
  Explanation?: string;
  NumberOfLogLinesOccurrences?: number;
  LogEventTimestamp?: Date;
}
export type LogAnomalyClasses = LogAnomalyClass[];
export interface LogAnomalyShowcase {
  LogAnomalyClasses?: LogAnomalyClass[];
}
export type LogAnomalyShowcases = LogAnomalyShowcase[];
export interface AnomalousLogGroup {
  LogGroupName?: string;
  ImpactStartTime?: Date;
  ImpactEndTime?: Date;
  NumberOfLogLinesScanned?: number;
  LogAnomalyShowcases?: LogAnomalyShowcase[];
}
export type AnomalousLogGroups = AnomalousLogGroup[];
export interface ListAnomalousLogGroupsResponse {
  InsightId: string;
  AnomalousLogGroups: AnomalousLogGroup[];
  NextToken?: string;
}
export interface EventTimeRange {
  FromTime: Date;
  ToTime: Date;
}
export type EventClass =
  | "INFRASTRUCTURE"
  | "DEPLOYMENT"
  | "SECURITY_CHANGE"
  | "CONFIG_CHANGE"
  | "SCHEMA_CHANGE"
  | (string & {});
export type EventSource = string;
export type EventDataSource = "AWS_CLOUD_TRAIL" | "AWS_CODE_DEPLOY" | (string & {});
export interface ListEventsFilters {
  InsightId?: string;
  EventTimeRange?: EventTimeRange;
  EventClass?: EventClass;
  EventSource?: string;
  DataSource?: EventDataSource;
  ResourceCollection?: ResourceCollection;
}
export type ListEventsMaxResults = number;
export interface ListEventsRequest {
  Filters: ListEventsFilters;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export type EventId = string;
export type EventName = string;
export type EventResourceType = string;
export type EventResourceName = string;
export type EventResourceArn = string;
export interface EventResource {
  Type?: string;
  Name?: string;
  Arn?: string;
}
export type EventResources = EventResource[];
export interface Event {
  ResourceCollection?: ResourceCollection;
  Id?: string;
  Time?: Date;
  EventSource?: string;
  Name?: string;
  DataSource?: EventDataSource;
  EventClass?: EventClass;
  Resources?: EventResource[];
}
export type Events = Event[];
export interface ListEventsResponse {
  Events: Event[];
  NextToken?: string;
}
export type InsightType = "REACTIVE" | "PROACTIVE" | (string & {});
export interface ListInsightsOngoingStatusFilter {
  Type: InsightType;
}
export interface EndTimeRange {
  FromTime?: Date;
  ToTime?: Date;
}
export interface ListInsightsClosedStatusFilter {
  Type: InsightType;
  EndTimeRange: EndTimeRange;
}
export interface ListInsightsAnyStatusFilter {
  Type: InsightType;
  StartTimeRange: StartTimeRange;
}
export interface ListInsightsStatusFilter {
  Ongoing?: ListInsightsOngoingStatusFilter;
  Closed?: ListInsightsClosedStatusFilter;
  Any?: ListInsightsAnyStatusFilter;
}
export type ListInsightsMaxResults = number;
export interface ListInsightsRequest {
  StatusFilter: ListInsightsStatusFilter;
  MaxResults?: number;
  NextToken?: string;
}
export type ResourceArn = string;
export type AssociatedResourceArns = string[];
export interface ProactiveInsightSummary {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
  AssociatedResourceArns?: string[];
}
export type ProactiveInsights = ProactiveInsightSummary[];
export interface ReactiveInsightSummary {
  Id?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
  AssociatedResourceArns?: string[];
}
export type ReactiveInsights = ReactiveInsightSummary[];
export interface ListInsightsResponse {
  ProactiveInsights?: ProactiveInsightSummary[];
  ReactiveInsights?: ReactiveInsightSummary[];
  NextToken?: string;
}
export type ResourcePermission = "FULL_PERMISSION" | "MISSING_PERMISSION" | (string & {});
export type ResourceTypeFilter =
  | "LOG_GROUPS"
  | "CLOUDFRONT_DISTRIBUTION"
  | "DYNAMODB_TABLE"
  | "EC2_NAT_GATEWAY"
  | "ECS_CLUSTER"
  | "ECS_SERVICE"
  | "EKS_CLUSTER"
  | "ELASTIC_BEANSTALK_ENVIRONMENT"
  | "ELASTIC_LOAD_BALANCER_LOAD_BALANCER"
  | "ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER"
  | "ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP"
  | "ELASTICACHE_CACHE_CLUSTER"
  | "ELASTICSEARCH_DOMAIN"
  | "KINESIS_STREAM"
  | "LAMBDA_FUNCTION"
  | "OPEN_SEARCH_SERVICE_DOMAIN"
  | "RDS_DB_INSTANCE"
  | "RDS_DB_CLUSTER"
  | "REDSHIFT_CLUSTER"
  | "ROUTE53_HOSTED_ZONE"
  | "ROUTE53_HEALTH_CHECK"
  | "S3_BUCKET"
  | "SAGEMAKER_ENDPOINT"
  | "SNS_TOPIC"
  | "SQS_QUEUE"
  | "STEP_FUNCTIONS_ACTIVITY"
  | "STEP_FUNCTIONS_STATE_MACHINE"
  | (string & {});
export type ResourceTypeFilters = ResourceTypeFilter[];
export interface ListMonitoredResourcesFilters {
  ResourcePermission: ResourcePermission;
  ResourceTypeFilters: ResourceTypeFilter[];
}
export type ListMonitoredResourcesMaxResults = number;
export interface ListMonitoredResourcesRequest {
  Filters?: ListMonitoredResourcesFilters;
  MaxResults?: number;
  NextToken?: string;
}
export type MonitoredResourceName = string;
export interface MonitoredResourceIdentifier {
  MonitoredResourceName?: string;
  Type?: string;
  ResourcePermission?: ResourcePermission;
  LastUpdated?: Date;
  ResourceCollection?: ResourceCollection;
}
export type MonitoredResourceIdentifiers = MonitoredResourceIdentifier[];
export interface ListMonitoredResourcesResponse {
  MonitoredResourceIdentifiers: MonitoredResourceIdentifier[];
  NextToken?: string;
}
export interface ListNotificationChannelsRequest {
  NextToken?: string;
}
export interface NotificationChannel {
  Id?: string;
  Config?: NotificationChannelConfig;
}
export type Channels = NotificationChannel[];
export interface ListNotificationChannelsResponse {
  Channels?: NotificationChannel[];
  NextToken?: string;
}
export type ListInsightsAccountIdList = string[];
export type ListInsightsOrganizationalUnitIdList = string[];
export interface ListOrganizationInsightsRequest {
  StatusFilter: ListInsightsStatusFilter;
  MaxResults?: number;
  AccountIds?: string[];
  OrganizationalUnitIds?: string[];
  NextToken?: string;
}
export interface ProactiveOrganizationInsightSummary {
  Id?: string;
  AccountId?: string;
  OrganizationalUnitId?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export type ProactiveOrganizationInsights = ProactiveOrganizationInsightSummary[];
export interface ReactiveOrganizationInsightSummary {
  Id?: string;
  AccountId?: string;
  OrganizationalUnitId?: string;
  Name?: string;
  Severity?: InsightSeverity;
  Status?: InsightStatus;
  InsightTimeRange?: InsightTimeRange;
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export type ReactiveOrganizationInsights = ReactiveOrganizationInsightSummary[];
export interface ListOrganizationInsightsResponse {
  ProactiveInsights?: ProactiveOrganizationInsightSummary[];
  ReactiveInsights?: ReactiveOrganizationInsightSummary[];
  NextToken?: string;
}
export type Locale =
  | "DE_DE"
  | "EN_US"
  | "EN_GB"
  | "ES_ES"
  | "FR_FR"
  | "IT_IT"
  | "JA_JP"
  | "KO_KR"
  | "PT_BR"
  | "ZH_CN"
  | "ZH_TW"
  | (string & {});
export interface ListRecommendationsRequest {
  InsightId: string;
  NextToken?: string;
  Locale?: Locale;
  AccountId?: string;
}
export type RecommendationDescription = string;
export type RecommendationLink = string;
export type RecommendationName = string;
export type RecommendationReason = string;
export type RecommendationRelatedEventName = string;
export type RecommendationRelatedEventResourceName = string;
export type RecommendationRelatedEventResourceType = string;
export interface RecommendationRelatedEventResource {
  Name?: string;
  Type?: string;
}
export type RecommendationRelatedEventResources = RecommendationRelatedEventResource[];
export interface RecommendationRelatedEvent {
  Name?: string;
  Resources?: RecommendationRelatedEventResource[];
}
export type RecommendationRelatedEvents = RecommendationRelatedEvent[];
export type RecommendationRelatedAnomalyResourceName = string;
export type RecommendationRelatedAnomalyResourceType = string;
export interface RecommendationRelatedAnomalyResource {
  Name?: string;
  Type?: string;
}
export type RecommendationRelatedAnomalyResources = RecommendationRelatedAnomalyResource[];
export type RecommendationRelatedCloudWatchMetricsSourceMetricName = string;
export type RecommendationRelatedCloudWatchMetricsSourceNamespace = string;
export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
  MetricName?: string;
  Namespace?: string;
}
export type RecommendationRelatedCloudWatchMetricsSourceDetails =
  RecommendationRelatedCloudWatchMetricsSourceDetail[];
export interface RecommendationRelatedAnomalySourceDetail {
  CloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
}
export type RelatedAnomalySourceDetails = RecommendationRelatedAnomalySourceDetail[];
export interface RecommendationRelatedAnomaly {
  Resources?: RecommendationRelatedAnomalyResource[];
  SourceDetails?: RecommendationRelatedAnomalySourceDetail[];
  AnomalyId?: string;
}
export type RecommendationRelatedAnomalies = RecommendationRelatedAnomaly[];
export type RecommendationCategory = string;
export interface Recommendation {
  Description?: string;
  Link?: string;
  Name?: string;
  Reason?: string;
  RelatedEvents?: RecommendationRelatedEvent[];
  RelatedAnomalies?: RecommendationRelatedAnomaly[];
  Category?: string;
}
export type Recommendations = Recommendation[];
export interface ListRecommendationsResponse {
  Recommendations?: Recommendation[];
  NextToken?: string;
}
export interface PutFeedbackRequest {
  InsightFeedback?: InsightFeedback;
}
export interface PutFeedbackResponse {}
export interface RemoveNotificationChannelRequest {
  Id: string;
}
export interface RemoveNotificationChannelResponse {}
export type InsightStatuses = InsightStatus[];
export interface SearchInsightsFilters {
  Severities?: InsightSeverity[];
  Statuses?: InsightStatus[];
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export type SearchInsightsMaxResults = number;
export interface SearchInsightsRequest {
  StartTimeRange: StartTimeRange;
  Filters?: SearchInsightsFilters;
  MaxResults?: number;
  NextToken?: string;
  Type: InsightType;
}
export interface SearchInsightsResponse {
  ProactiveInsights?: ProactiveInsightSummary[];
  ReactiveInsights?: ReactiveInsightSummary[];
  NextToken?: string;
}
export type SearchInsightsAccountIdList = string[];
export interface SearchOrganizationInsightsFilters {
  Severities?: InsightSeverity[];
  Statuses?: InsightStatus[];
  ResourceCollection?: ResourceCollection;
  ServiceCollection?: ServiceCollection;
}
export type SearchOrganizationInsightsMaxResults = number;
export interface SearchOrganizationInsightsRequest {
  AccountIds: string[];
  StartTimeRange: StartTimeRange;
  Filters?: SearchOrganizationInsightsFilters;
  MaxResults?: number;
  NextToken?: string;
  Type: InsightType;
}
export interface SearchOrganizationInsightsResponse {
  ProactiveInsights?: ProactiveInsightSummary[];
  ReactiveInsights?: ReactiveInsightSummary[];
  NextToken?: string;
}
export type ClientToken = string;
export interface StartCostEstimationRequest {
  ResourceCollection: CostEstimationResourceCollectionFilter;
  ClientToken?: string;
}
export interface StartCostEstimationResponse {}
export interface UpdateEventSourcesConfigRequest {
  EventSources?: EventSourcesConfig;
}
export interface UpdateEventSourcesConfigResponse {}
export type UpdateResourceCollectionAction = "ADD" | "REMOVE" | (string & {});
export type UpdateStackNames = string[];
export interface UpdateCloudFormationCollectionFilter {
  StackNames?: string[];
}
export type UpdateTagValues = string[];
export interface UpdateTagCollectionFilter {
  AppBoundaryKey: string;
  TagValues: string[];
}
export type UpdateTagCollectionFilters = UpdateTagCollectionFilter[];
export interface UpdateResourceCollectionFilter {
  CloudFormation?: UpdateCloudFormationCollectionFilter;
  Tags?: UpdateTagCollectionFilter[];
}
export interface UpdateResourceCollectionRequest {
  Action: UpdateResourceCollectionAction;
  ResourceCollection: UpdateResourceCollectionFilter;
}
export interface UpdateResourceCollectionResponse {}
export interface OpsCenterIntegrationConfig {
  OptInStatus?: OptInStatus;
}
export interface LogsAnomalyDetectionIntegrationConfig {
  OptInStatus?: OptInStatus;
}
export interface KMSServerSideEncryptionIntegrationConfig {
  KMSKeyId?: string;
  OptInStatus?: OptInStatus;
  Type?: ServerSideEncryptionType;
}
export interface UpdateServiceIntegrationConfig {
  OpsCenter?: OpsCenterIntegrationConfig;
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegrationConfig;
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegrationConfig;
}
export interface UpdateServiceIntegrationRequest {
  ServiceIntegration: UpdateServiceIntegrationConfig;
}
export interface UpdateServiceIntegrationResponse {}
export type ErrorMessageString = string;
export type ResourceIdString = string;
export type ResourceIdType = string;
export type RetryAfterSeconds = number;
export type ErrorQuotaCodeString = string;
export type ErrorServiceCodeString = string;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | "INVALID_PARAMETER_COMBINATION"
  | "PARAMETER_INCONSISTENT_WITH_SERVICE_STATE"
  | (string & {});
export type ErrorNameString = string;
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFields = ValidationExceptionField[];
export type AddNotificationChannelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a notification channel to DevOps Guru. A notification channel is used to notify you
 * about important DevOps Guru events, such as when an insight is generated.
 *
 * If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
 * For more information, see Permissions
 * for Amazon SNS topics.
 *
 * If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
 * to the CMK. For more information, see Permissions for
 * Amazon Web Services KMS-encrypted Amazon SNS topics.
 */
export const addNotificationChannel: API.OperationMethod<
  AddNotificationChannelRequest,
  AddNotificationChannelResponse,
  AddNotificationChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AddNotificationChannelRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<AddNotificationChannelResponse>,
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
  operationName: "AddNotificationChannel",
}));

export type DeleteInsightError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the insight along with the associated anomalies, events and recommendations.
 */
export const deleteInsight: API.OperationMethod<
  DeleteInsightRequest,
  DeleteInsightResponse,
  DeleteInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<DeleteInsightRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<DeleteInsightResponse>,
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
  operationName: "DeleteInsight",
}));

export type DescribeAccountHealthError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the number of open reactive insights, the number of open proactive insights,
 * and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the
 * health of operations in your Amazon Web Services account.
 */
export const describeAccountHealth: API.OperationMethod<
  DescribeAccountHealthRequest,
  DescribeAccountHealthResponse,
  DescribeAccountHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8, __c1, 0) as any as S.Schema<DescribeAccountHealthRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DescribeAccountHealthResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountHealth",
}));

export type DescribeAccountOverviewError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * For the time range passed in, returns the number of open reactive insight that were
 * created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all
 * closed reactive insights.
 */
export const describeAccountOverview: API.OperationMethod<
  DescribeAccountOverviewRequest,
  DescribeAccountOverviewResponse,
  DescribeAccountOverviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<DescribeAccountOverviewRequest>,
  output: __S(11, __c1, 3) as any as S.Schema<DescribeAccountOverviewResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountOverview",
}));

export type DescribeAnomalyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about an anomaly that you specify using its ID.
 */
export const describeAnomaly: API.OperationMethod<
  DescribeAnomalyRequest,
  DescribeAnomalyResponse,
  DescribeAnomalyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<DescribeAnomalyRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<DescribeAnomalyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAnomaly",
}));

export type DescribeEventSourcesConfigError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the integration status of services that are integrated with DevOps Guru as Consumer
 * via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru
 * Profiler, which can produce proactive recommendations which can be stored and viewed in
 * DevOps Guru.
 */
export const describeEventSourcesConfig: API.OperationMethod<
  DescribeEventSourcesConfigRequest,
  DescribeEventSourcesConfigResponse,
  DescribeEventSourcesConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<DescribeEventSourcesConfigRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<DescribeEventSourcesConfigResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventSourcesConfig",
}));

export type DescribeFeedbackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the most recent feedback submitted in the current Amazon Web Services account and Region.
 */
export const describeFeedback: API.OperationMethod<
  DescribeFeedbackRequest,
  DescribeFeedbackResponse,
  DescribeFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<DescribeFeedbackRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<DescribeFeedbackResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFeedback",
}));

export type DescribeInsightError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about an insight that you specify using its ID.
 */
export const describeInsight: API.OperationMethod<
  DescribeInsightRequest,
  DescribeInsightResponse,
  DescribeInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<DescribeInsightRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<DescribeInsightResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInsight",
}));

export type DescribeOrganizationHealthError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns active insights, predictive insights, and resource hours analyzed in last
 * hour.
 */
export const describeOrganizationHealth: API.OperationMethod<
  DescribeOrganizationHealthRequest,
  DescribeOrganizationHealthResponse,
  DescribeOrganizationHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<DescribeOrganizationHealthRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<DescribeOrganizationHealthResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationHealth",
}));

export type DescribeOrganizationOverviewError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an overview of your organization's history based on the specified time range.
 * The overview includes the total reactive and proactive insights.
 */
export const describeOrganizationOverview: API.OperationMethod<
  DescribeOrganizationOverviewRequest,
  DescribeOrganizationOverviewResponse,
  DescribeOrganizationOverviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<DescribeOrganizationOverviewRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DescribeOrganizationOverviewResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationOverview",
}));

export type DescribeOrganizationResourceCollectionHealthError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides an overview of your system's health. If additional member accounts are part
 * of your organization, you can filter those accounts using the `AccountIds`
 * field.
 */
export const describeOrganizationResourceCollectionHealth: API.PaginatedOperationMethod<
  DescribeOrganizationResourceCollectionHealthRequest,
  DescribeOrganizationResourceCollectionHealthResponse,
  DescribeOrganizationResourceCollectionHealthError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<DescribeOrganizationResourceCollectionHealthRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<DescribeOrganizationResourceCollectionHealthResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationResourceCollectionHealth",
  pagination: { inputToken: "NextToken", outputToken: "NextToken" } as const,
})) as any;

export type DescribeResourceCollectionHealthError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
 * for all closed insights in resource collections in your account. You specify the type of
 * Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 * Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 * the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
 */
export const describeResourceCollectionHealth: API.PaginatedOperationMethod<
  DescribeResourceCollectionHealthRequest,
  DescribeResourceCollectionHealthResponse,
  DescribeResourceCollectionHealthError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(73, __c9, 1) as any as S.Schema<DescribeResourceCollectionHealthRequest>,
  output: __S(74, __c9, 2) as any as S.Schema<DescribeResourceCollectionHealthResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourceCollectionHealth",
  pagination: { inputToken: "NextToken", outputToken: "NextToken" } as const,
})) as any;

export type DescribeServiceIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the integration status of services that are integrated with DevOps Guru.
 * The one service that can be integrated with DevOps Guru
 * is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
 */
export const describeServiceIntegration: API.OperationMethod<
  DescribeServiceIntegrationRequest,
  DescribeServiceIntegrationResponse,
  DescribeServiceIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<DescribeServiceIntegrationRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<DescribeServiceIntegrationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServiceIntegration",
}));

export type GetCostEstimationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources.
 * For more information,
 * see Estimate your
 * Amazon DevOps Guru costs and
 * Amazon DevOps Guru pricing.
 */
export const getCostEstimation: API.PaginatedOperationMethod<
  GetCostEstimationRequest,
  GetCostEstimationResponse,
  GetCostEstimationError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<GetCostEstimationRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<GetCostEstimationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCostEstimation",
  pagination: { inputToken: "NextToken", outputToken: "NextToken" } as const,
})) as any;

export type GetResourceCollectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns lists Amazon Web Services resources that are of the specified resource collection type.
 * The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 * Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 * the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
 */
export const getResourceCollection: API.PaginatedOperationMethod<
  GetResourceCollectionRequest,
  GetResourceCollectionResponse,
  GetResourceCollectionError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<GetResourceCollectionRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<GetResourceCollectionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceCollection",
  pagination: { inputToken: "NextToken", outputToken: "NextToken" } as const,
})) as any;

export type ListAnomaliesForInsightError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the anomalies that belong to an insight that you specify using its
 * ID.
 */
export const listAnomaliesForInsight: API.PaginatedOperationMethod<
  ListAnomaliesForInsightRequest,
  ListAnomaliesForInsightResponse,
  ListAnomaliesForInsightError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<ListAnomaliesForInsightRequest>,
  output: __S(99, __c12, 3) as any as S.Schema<ListAnomaliesForInsightResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnomaliesForInsight",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAnomalousLogGroupsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of log groups that contain log anomalies.
 */
export const listAnomalousLogGroups: API.PaginatedOperationMethod<
  ListAnomalousLogGroupsRequest,
  ListAnomalousLogGroupsResponse,
  ListAnomalousLogGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<ListAnomalousLogGroupsRequest>,
  output: __S(107, __c13, 3) as any as S.Schema<ListAnomalousLogGroupsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnomalousLogGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEventsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the events emitted by the resources that are evaluated by DevOps Guru.
 * You can use filters to specify which events are returned.
 */
export const listEvents: API.PaginatedOperationMethod<
  ListEventsRequest,
  ListEventsResponse,
  ListEventsError,
  Credentials | HttpClient.HttpClient,
  Event
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<ListEventsRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<ListEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Events",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInsightsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of insights in your Amazon Web Services account. You can specify which insights are
 * returned by their start time and status (`ONGOING`, `CLOSED`, or
 * `ANY`).
 */
export const listInsights: API.PaginatedOperationMethod<
  ListInsightsRequest,
  ListInsightsResponse,
  ListInsightsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<ListInsightsRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<ListInsightsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInsights",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMonitoredResourcesError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of all log groups that are being monitored and tagged by DevOps Guru.
 */
export const listMonitoredResources: API.PaginatedOperationMethod<
  ListMonitoredResourcesRequest,
  ListMonitoredResourcesResponse,
  ListMonitoredResourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<ListMonitoredResourcesRequest>,
  output: __S(130, __c16, 2) as any as S.Schema<ListMonitoredResourcesResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMonitoredResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNotificationChannelsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of notification channels configured for DevOps Guru. Each notification
 * channel is used to notify you when DevOps Guru generates an insight that contains information
 * about how to improve your operations. The one
 * supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 */
export const listNotificationChannels: API.PaginatedOperationMethod<
  ListNotificationChannelsRequest,
  ListNotificationChannelsResponse,
  ListNotificationChannelsError,
  Credentials | HttpClient.HttpClient,
  NotificationChannel
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<ListNotificationChannelsRequest>,
  output: __S(134, __c16, 6) as any as S.Schema<ListNotificationChannelsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotificationChannels",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Channels" } as const,
})) as any;

export type ListOrganizationInsightsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of insights associated with the account or OU Id.
 */
export const listOrganizationInsights: API.PaginatedOperationMethod<
  ListOrganizationInsightsRequest,
  ListOrganizationInsightsResponse,
  ListOrganizationInsightsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(135, __c16, 7) as any as S.Schema<ListOrganizationInsightsRequest>,
  output: __S(140, __c17, 4) as any as S.Schema<ListOrganizationInsightsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrganizationInsights",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of a specified insight's recommendations. Each recommendation includes
 * a list of related metrics and a list of related events.
 */
export const listRecommendations: API.PaginatedOperationMethod<
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  ListRecommendationsError,
  Credentials | HttpClient.HttpClient,
  Recommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<ListRecommendationsRequest>,
  output: __S(154, __c19, 2) as any as S.Schema<ListRecommendationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Recommendations",
  } as const,
})) as any;

export type PutFeedbackError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Collects customer feedback about the specified insight.
 */
export const putFeedback: API.OperationMethod<
  PutFeedbackRequest,
  PutFeedbackResponse,
  PutFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<PutFeedbackRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<PutFeedbackResponse>,
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
  operationName: "PutFeedback",
}));

export type RemoveNotificationChannelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a notification channel from DevOps Guru. A notification channel is used to notify
 * you when DevOps Guru generates an insight that contains information about how to improve your
 * operations.
 */
export const removeNotificationChannel: API.OperationMethod<
  RemoveNotificationChannelRequest,
  RemoveNotificationChannelResponse,
  RemoveNotificationChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(156, __c19, 4) as any as S.Schema<RemoveNotificationChannelRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<RemoveNotificationChannelResponse>,
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
  operationName: "RemoveNotificationChannel",
}));

export type SearchInsightsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of insights in your Amazon Web Services account. You can specify which insights are
 * returned by their start time, one or more statuses (`ONGOING` or `CLOSED`), one or more severities
 * (`LOW`, `MEDIUM`, and `HIGH`), and type
 * (`REACTIVE` or `PROACTIVE`).
 *
 * Use the `Filters` parameter to specify status and severity search
 * parameters. Use the `Type` parameter to specify `REACTIVE` or
 * `PROACTIVE` in your search.
 */
export const searchInsights: API.PaginatedOperationMethod<
  SearchInsightsRequest,
  SearchInsightsResponse,
  SearchInsightsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<SearchInsightsRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<SearchInsightsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchInsights",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type SearchOrganizationInsightsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of insights in your organization. You can specify which insights are
 * returned by their start time, one or more statuses (`ONGOING`,
 * `CLOSED`, and `CLOSED`), one or more severities
 * (`LOW`, `MEDIUM`, and `HIGH`), and type
 * (`REACTIVE` or `PROACTIVE`).
 *
 * Use the `Filters` parameter to specify status and severity search
 * parameters. Use the `Type` parameter to specify `REACTIVE` or
 * `PROACTIVE` in your search.
 */
export const searchOrganizationInsights: API.PaginatedOperationMethod<
  SearchOrganizationInsightsRequest,
  SearchOrganizationInsightsResponse,
  SearchOrganizationInsightsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<SearchOrganizationInsightsRequest>,
  output: __S(162, __c20, 2) as any as S.Schema<SearchOrganizationInsightsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchOrganizationInsights",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type StartCostEstimationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services
 * resources.
 */
export const startCostEstimation: API.OperationMethod<
  StartCostEstimationRequest,
  StartCostEstimationResponse,
  StartCostEstimationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<StartCostEstimationRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<StartCostEstimationResponse>,
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
  operationName: "StartCostEstimation",
}));

export type UpdateEventSourcesConfigError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables or disables integration with a service that can be integrated with DevOps Guru. The
 * one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which
 * can produce proactive recommendations which can be stored and viewed in DevOps Guru.
 */
export const updateEventSourcesConfig: API.OperationMethod<
  UpdateEventSourcesConfigRequest,
  UpdateEventSourcesConfigResponse,
  UpdateEventSourcesConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(164, __c20, 4) as any as S.Schema<UpdateEventSourcesConfigRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<UpdateEventSourcesConfigResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEventSourcesConfig",
}));

export type UpdateResourceCollectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the collection of resources that DevOps Guru analyzes.
 * The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 * Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 * the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for
 * you to use DevOps Guru.
 */
export const updateResourceCollection: API.OperationMethod<
  UpdateResourceCollectionRequest,
  UpdateResourceCollectionResponse,
  UpdateResourceCollectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<UpdateResourceCollectionRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<UpdateResourceCollectionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResourceCollection",
}));

export type UpdateServiceIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables or disables integration with a service that can be integrated with DevOps Guru. The
 * one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create
 * an OpsItem for each generated insight.
 */
export const updateServiceIntegration: API.OperationMethod<
  UpdateServiceIntegrationRequest,
  UpdateServiceIntegrationResponse,
  UpdateServiceIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<UpdateServiceIntegrationRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<UpdateServiceIntegrationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServiceIntegration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TopicArn: S.optional(S.String) })).annotate({
        identifier: "SnsChannelConfig",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Severities: S.optional(__S(1, __c0, 1)),
          MessageTypes: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "NotificationFilterConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Sns: __S(0, __c0, 0), Filters: S.optional(__S(2, __c0, 2)) }),
      ).annotate({
        identifier: "NotificationChannelConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Config: __S(3, __c0, 3) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/channels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AddNotificationChannelRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Id: S.String })).annotate({
        identifier: "AddNotificationChannelResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/insights/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteInsightRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteInsightResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/accounts/health" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountHealthRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OpenReactiveInsights: S.Number,
          OpenProactiveInsights: S.Number,
          MetricsAnalyzed: S.Number,
          ResourceHours: S.Number,
          AnalyzedResourceCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DescribeAccountHealthResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FromTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ToTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/accounts/overview" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAccountOverviewRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReactiveInsights: S.Number,
          ProactiveInsights: S.Number,
          MeanTimeToRecoverInMilliseconds: S.Number,
        }),
      ).annotate({
        identifier: "DescribeAccountOverviewResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          AccountId: S.optional(S.String).pipe(T.HttpQuery("AccountId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/anomalies/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAnomalyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AnomalyTimeRange" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OpenTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          CloseTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AnomalyReportedTimeRange" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "CloudWatchMetricsDimension",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MetricValue: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TimestampMetricValuePair" });
    case 2:
      return S.Array(__S(17, __c2, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          TimestampMetricValuePairList: S.optional(__S(18, __c2, 2)),
          StatusCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloudWatchMetricsDataSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Namespace: S.optional(S.String),
          Dimensions: S.optional(__S(16, __c2, 0)),
          Stat: S.optional(S.String),
          Unit: S.optional(S.String),
          Period: S.optional(S.Number),
          MetricDataSummary: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "CloudWatchMetricsDetail" });
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Group: S.optional(S.String),
          Dimensions: S.optional(__S(22, __c2, 6)),
          Limit: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "PerformanceInsightsMetricDimensionGroup",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Metric: S.optional(S.String),
          GroupBy: S.optional(__S(23, __c2, 7)),
          Filter: S.optional(__S(24, __c3, 0)),
        }),
      ).annotate({
        identifier: "PerformanceInsightsMetricQuery",
      });
    case 2:
      return S.suspend(() => S.Struct({ Value: S.optional(S.Number) })).annotate({
        identifier: "PerformanceInsightsReferenceScalar",
      });
    case 3:
      return S.suspend(() => S.Struct({ MetricQuery: S.optional(__S(25, __c3, 1)) })).annotate({
        identifier: "PerformanceInsightsReferenceMetric",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReferenceScalar: S.optional(__S(26, __c3, 2)),
          ReferenceMetric: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({
        identifier: "PerformanceInsightsReferenceComparisonValues",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ComparisonValues: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({
        identifier: "PerformanceInsightsReferenceData",
      });
    case 6:
      return S.Array(__S(29, __c3, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Value: S.optional(S.Number) }),
      ).annotate({ identifier: "PerformanceInsightsStat" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          MetricDisplayName: S.optional(S.String),
          Unit: S.optional(S.String),
          MetricQuery: S.optional(__S(25, __c3, 1)),
          ReferenceData: S.optional(__S(30, __c3, 6)),
          StatsAtAnomaly: S.optional(__S(32, __c4, 0)),
          StatsAtBaseline: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({
        identifier: "PerformanceInsightsMetricsDetail",
      });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudWatchMetrics: S.optional(__S(21, __c2, 5)),
          PerformanceInsightsMetrics: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "AnomalySourceDetails" });
    case 4:
      return S.suspend(() => S.Struct({ StackNames: S.optional(__S(22, __c2, 6)) })).annotate({
        identifier: "CloudFormationCollection",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AppBoundaryKey: S.String, TagValues: __S(22, __c2, 6) }),
      ).annotate({ identifier: "TagCollection" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudFormation: S.optional(__S(36, __c4, 4)),
          Tags: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "ResourceCollection" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Source: S.optional(S.String),
          SourceResourceName: S.optional(S.String),
          SourceResourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnomalySourceMetadata" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({ identifier: "AnomalyResource" });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          UpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AnomalyTimeRange: S.optional(__S(13, __c1, 5)),
          AnomalyReportedTimeRange: S.optional(__S(14, __c1, 6)),
          PredictionTimeRange: S.optional(__S(13, __c1, 5)),
          SourceDetails: S.optional(__S(35, __c4, 3)),
          AssociatedInsightId: S.optional(S.String),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          Limit: S.optional(S.Number),
          SourceMetadata: S.optional(__S(40, __c5, 0)),
          AnomalyResources: S.optional(__S(42, __c5, 2)),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProactiveAnomaly" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          AnomalyTimeRange: S.optional(__S(13, __c1, 5)),
          AnomalyReportedTimeRange: S.optional(__S(14, __c1, 6)),
          SourceDetails: S.optional(__S(35, __c4, 3)),
          AssociatedInsightId: S.optional(S.String),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CausalAnomalyId: S.optional(S.String),
          AnomalyResources: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({ identifier: "ReactiveAnomaly" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProactiveAnomaly: S.optional(__S(43, __c5, 3)),
          ReactiveAnomaly: S.optional(__S(44, __c5, 4)),
        }),
      ).annotate({ identifier: "DescribeAnomalyResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/event-sources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEventSourcesConfigRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "AmazonCodeGuruProfilerIntegration",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AmazonCodeGuruProfiler: S.optional(__S(47, __c5, 7)) }),
      ).annotate({ identifier: "EventSourcesConfig" });
    case 1:
      return S.suspend(() => S.Struct({ EventSources: S.optional(__S(48, __c6, 0)) })).annotate({
        identifier: "DescribeEventSourcesConfigResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ InsightId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/feedback" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeFeedbackRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Feedback: S.optional(S.String) }),
      ).annotate({ identifier: "InsightFeedback" });
    case 4:
      return S.suspend(() => S.Struct({ InsightFeedback: S.optional(__S(51, __c6, 3)) })).annotate({
        identifier: "DescribeFeedbackResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          AccountId: S.optional(S.String).pipe(T.HttpQuery("AccountId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/insights/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeInsightRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          InsightTimeRange: S.optional(__S(13, __c1, 5)),
          PredictionTimeRange: S.optional(__S(13, __c1, 5)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          SsmOpsItemId: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProactiveInsight" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          InsightTimeRange: S.optional(__S(13, __c1, 5)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          SsmOpsItemId: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReactiveInsight" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProactiveInsight: S.optional(__S(54, __c6, 6)),
          ReactiveInsight: S.optional(__S(55, __c6, 7)),
        }),
      ).annotate({ identifier: "DescribeInsightResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountIds: S.optional(__S(22, __c2, 6)),
          OrganizationalUnitIds: S.optional(__S(22, __c2, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/health" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeOrganizationHealthRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          OpenReactiveInsights: S.Number,
          OpenProactiveInsights: S.Number,
          MetricsAnalyzed: S.Number,
          ResourceHours: S.Number,
        }),
      ).annotate({
        identifier: "DescribeOrganizationHealthResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FromTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ToTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AccountIds: S.optional(__S(22, __c2, 6)),
          OrganizationalUnitIds: S.optional(__S(22, __c2, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/overview" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeOrganizationOverviewRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ReactiveInsights: S.Number, ProactiveInsights: S.Number }),
      ).annotate({
        identifier: "DescribeOrganizationOverviewResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrganizationResourceCollectionType: S.String,
          AccountIds: S.optional(__S(22, __c2, 6)),
          OrganizationalUnitIds: S.optional(__S(22, __c2, 6)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/health/resource-collection" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeOrganizationResourceCollectionHealthRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OpenProactiveInsights: S.optional(S.Number),
          OpenReactiveInsights: S.optional(S.Number),
          MeanTimeToRecoverInMilliseconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InsightHealth" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          Insight: S.optional(__S(62, __c7, 6)),
          AnalyzedResourceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CloudFormationHealth" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          OpenProactiveInsights: S.optional(S.Number),
          OpenReactiveInsights: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceInsightHealth" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServiceName: S.optional(S.String),
          Insight: S.optional(__S(65, __c8, 1)),
          AnalyzedResourceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceHealth" });
    case 3:
      return S.Array(__S(66, __c8, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Insight: S.optional(__S(65, __c8, 1)) }),
      ).annotate({ identifier: "AccountHealth" });
    case 5:
      return S.Array(__S(68, __c8, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppBoundaryKey: S.optional(S.String),
          TagValue: S.optional(S.String),
          Insight: S.optional(__S(62, __c7, 6)),
          AnalyzedResourceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TagHealth" });
    case 7:
      return S.Array(__S(70, __c8, 6));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CloudFormation: S.optional(__S(64, __c8, 0)),
          Service: S.optional(__S(67, __c8, 3)),
          Account: S.optional(__S(69, __c8, 5)),
          NextToken: S.optional(S.String),
          Tags: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({
        identifier: "DescribeOrganizationResourceCollectionHealthResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceCollectionType: S.String.pipe(T.HttpLabel("ResourceCollectionType")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/accounts/health/resource-collection/{ResourceCollectionType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeResourceCollectionHealthRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CloudFormation: S.optional(__S(64, __c8, 0)),
          Service: S.optional(__S(67, __c8, 3)),
          NextToken: S.optional(S.String),
          Tags: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({
        identifier: "DescribeResourceCollectionHealthResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/service-integrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeServiceIntegrationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ OptInStatus: S.optional(S.String) })).annotate({
        identifier: "OpsCenterIntegration",
      });
    case 5:
      return S.suspend(() => S.Struct({ OptInStatus: S.optional(S.String) })).annotate({
        identifier: "LogsAnomalyDetectionIntegration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          KMSKeyId: S.optional(S.String),
          OptInStatus: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "KMSServerSideEncryptionIntegration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          OpsCenter: S.optional(__S(76, __c9, 4)),
          LogsAnomalyDetection: S.optional(__S(77, __c9, 5)),
          KMSServerSideEncryption: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({ identifier: "ServiceIntegrationConfig" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ServiceIntegration: S.optional(__S(79, __c9, 7)) }),
      ).annotate({
        identifier: "DescribeServiceIntegrationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/cost-estimation" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetCostEstimationRequest" });
    case 2:
      return S.suspend(() => S.Struct({ StackNames: S.optional(__S(22, __c2, 6)) })).annotate({
        identifier: "CloudFormationCostEstimationResourceCollectionFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AppBoundaryKey: S.String, TagValues: __S(22, __c2, 6) }),
      ).annotate({
        identifier: "TagCostEstimationResourceCollectionFilter",
      });
    case 4:
      return S.Array(__S(83, __c10, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          CloudFormation: S.optional(__S(82, __c10, 2)),
          Tags: S.optional(__S(84, __c10, 4)),
        }),
      ).annotate({
        identifier: "CostEstimationResourceCollectionFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          State: S.optional(S.String),
          Count: S.optional(S.Number),
          UnitCost: S.optional(S.Number),
          Cost: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceResourceCost" });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CostEstimationTimeRange" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceCollection: S.optional(__S(85, __c10, 5)),
          Status: S.optional(S.String),
          Costs: S.optional(__S(87, __c10, 7)),
          TimeRange: S.optional(__S(88, __c11, 0)),
          TotalCost: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetCostEstimationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceCollectionType: S.String.pipe(T.HttpLabel("ResourceCollectionType")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resource-collections/{ResourceCollectionType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceCollectionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudFormation: S.optional(__S(82, __c10, 2)),
          Tags: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "ResourceCollectionFilter" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceCollection: S.optional(__S(91, __c11, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetResourceCollectionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ToTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "StartTimeRange" });
    case 6:
      return S.suspend(() => S.Struct({ ServiceNames: S.optional(__S(1, __c0, 1)) })).annotate({
        identifier: "ServiceCollection",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ServiceCollection: S.optional(__S(94, __c11, 6)) }),
      ).annotate({
        identifier: "ListAnomaliesForInsightFilters",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String.pipe(T.HttpLabel("InsightId")),
          StartTimeRange: S.optional(__S(93, __c11, 5)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
          Filters: S.optional(__S(95, __c11, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/anomalies/insight/{InsightId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnomaliesForInsightRequest",
      });
    case 1:
      return S.Array(__S(43, __c5, 3));
    case 2:
      return S.Array(__S(44, __c5, 4));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProactiveAnomalies: S.optional(__S(97, __c12, 1)),
          ReactiveAnomalies: S.optional(__S(98, __c12, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAnomaliesForInsightResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-log-anomalies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnomalousLogGroupsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LogStreamName: S.optional(S.String),
          LogAnomalyType: S.optional(S.String),
          LogAnomalyToken: S.optional(S.String),
          LogEventId: S.optional(S.String),
          Explanation: S.optional(S.String),
          NumberOfLogLinesOccurrences: S.optional(S.Number),
          LogEventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LogAnomalyClass" });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ LogAnomalyClasses: S.optional(__S(102, __c12, 6)) }),
      ).annotate({ identifier: "LogAnomalyShowcase" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          LogGroupName: S.optional(S.String),
          ImpactStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ImpactEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NumberOfLogLinesScanned: S.optional(S.Number),
          LogAnomalyShowcases: S.optional(__S(104, __c13, 0)),
        }),
      ).annotate({ identifier: "AnomalousLogGroup" });
    case 2:
      return S.Array(__S(105, __c13, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String,
          AnomalousLogGroups: __S(106, __c13, 2),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAnomalousLogGroupsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FromTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ToTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "EventTimeRange" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.optional(S.String),
          EventTimeRange: S.optional(__S(108, __c13, 4)),
          EventClass: S.optional(S.String),
          EventSource: S.optional(S.String),
          DataSource: S.optional(S.String),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({ identifier: "ListEventsFilters" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Filters: __S(109, __c13, 5),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/events" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEventsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventResource" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          Id: S.optional(S.String),
          Time: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventSource: S.optional(S.String),
          Name: S.optional(S.String),
          DataSource: S.optional(S.String),
          EventClass: S.optional(S.String),
          Resources: S.optional(__S(112, __c14, 0)),
        }),
      ).annotate({ identifier: "Event" });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ Events: __S(114, __c14, 2), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEventsResponse" });
    case 4:
      return S.suspend(() => S.Struct({ Type: S.String })).annotate({
        identifier: "ListInsightsOngoingStatusFilter",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Type: S.String, EndTimeRange: __S(93, __c11, 5) }),
      ).annotate({
        identifier: "ListInsightsClosedStatusFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Type: S.String, StartTimeRange: __S(93, __c11, 5) }),
      ).annotate({
        identifier: "ListInsightsAnyStatusFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Ongoing: S.optional(__S(116, __c14, 4)),
          Closed: S.optional(__S(117, __c14, 5)),
          Any: S.optional(__S(118, __c14, 6)),
        }),
      ).annotate({ identifier: "ListInsightsStatusFilter" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StatusFilter: __S(119, __c14, 7),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/insights" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListInsightsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          InsightTimeRange: S.optional(__S(13, __c1, 5)),
          PredictionTimeRange: S.optional(__S(13, __c1, 5)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          ServiceCollection: S.optional(__S(94, __c11, 6)),
          AssociatedResourceArns: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "ProactiveInsightSummary" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          InsightTimeRange: S.optional(__S(13, __c1, 5)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          ServiceCollection: S.optional(__S(94, __c11, 6)),
          AssociatedResourceArns: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "ReactiveInsightSummary" });
    case 4:
      return S.Array(__S(123, __c15, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProactiveInsights: S.optional(__S(122, __c15, 2)),
          ReactiveInsights: S.optional(__S(124, __c15, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListInsightsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourcePermission: S.String,
          ResourceTypeFilters: __S(1, __c0, 1),
        }),
      ).annotate({
        identifier: "ListMonitoredResourcesFilters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(126, __c15, 6)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/monitoredResources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMonitoredResourcesRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MonitoredResourceName: S.optional(S.String),
          Type: S.optional(S.String),
          ResourcePermission: S.optional(S.String),
          LastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({
        identifier: "MonitoredResourceIdentifier",
      });
    case 1:
      return S.Array(__S(128, __c16, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          MonitoredResourceIdentifiers: __S(129, __c16, 1),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMonitoredResourcesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/channels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListNotificationChannelsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Config: S.optional(__S(3, __c0, 3)) }),
      ).annotate({ identifier: "NotificationChannel" });
    case 5:
      return S.Array(__S(132, __c16, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ Channels: S.optional(__S(133, __c16, 5)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListNotificationChannelsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StatusFilter: __S(119, __c14, 7),
          MaxResults: S.optional(S.Number),
          AccountIds: S.optional(__S(22, __c2, 6)),
          OrganizationalUnitIds: S.optional(__S(22, __c2, 6)),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/insights" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOrganizationInsightsRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          AccountId: S.optional(S.String),
          OrganizationalUnitId: S.optional(S.String),
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          InsightTimeRange: S.optional(__S(13, __c1, 5)),
          PredictionTimeRange: S.optional(__S(13, __c1, 5)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          ServiceCollection: S.optional(__S(94, __c11, 6)),
        }),
      ).annotate({
        identifier: "ProactiveOrganizationInsightSummary",
      });
    case 1:
      return S.Array(__S(136, __c17, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          AccountId: S.optional(S.String),
          OrganizationalUnitId: S.optional(S.String),
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          Status: S.optional(S.String),
          InsightTimeRange: S.optional(__S(13, __c1, 5)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          ServiceCollection: S.optional(__S(94, __c11, 6)),
        }),
      ).annotate({
        identifier: "ReactiveOrganizationInsightSummary",
      });
    case 3:
      return S.Array(__S(138, __c17, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProactiveInsights: S.optional(__S(137, __c17, 1)),
          ReactiveInsights: S.optional(__S(139, __c17, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOrganizationInsightsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String,
          NextToken: S.optional(S.String),
          Locale: S.optional(S.String),
          AccountId: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/recommendations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListRecommendationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "RecommendationRelatedEventResource",
      });
    case 7:
      return S.Array(__S(142, __c17, 6));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Resources: S.optional(__S(143, __c17, 7)),
        }),
      ).annotate({
        identifier: "RecommendationRelatedEvent",
      });
    case 1:
      return S.Array(__S(144, __c18, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ MetricName: S.optional(S.String), Namespace: S.optional(S.String) }),
      ).annotate({
        identifier: "RecommendationRelatedCloudWatchMetricsSourceDetail",
      });
    case 3:
      return S.Array(__S(146, __c18, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          CloudWatchMetrics: S.optional(__S(147, __c18, 3)),
        }),
      ).annotate({
        identifier: "RecommendationRelatedAnomalySourceDetail",
      });
    case 5:
      return S.Array(__S(148, __c18, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(143, __c17, 7)),
          SourceDetails: S.optional(__S(149, __c18, 5)),
          AnomalyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RecommendationRelatedAnomaly",
      });
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Link: S.optional(S.String),
          Name: S.optional(S.String),
          Reason: S.optional(S.String),
          RelatedEvents: S.optional(__S(145, __c18, 1)),
          RelatedAnomalies: S.optional(__S(151, __c18, 7)),
          Category: S.optional(S.String),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 1:
      return S.Array(__S(152, __c19, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Recommendations: S.optional(__S(153, __c19, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecommendationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ InsightFeedback: S.optional(__S(51, __c6, 3)) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/feedback" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutFeedbackRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/channels/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveNotificationChannelRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "RemoveNotificationChannelResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Severities: S.optional(__S(1, __c0, 1)),
          Statuses: S.optional(__S(1, __c0, 1)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          ServiceCollection: S.optional(__S(94, __c11, 6)),
        }),
      ).annotate({ identifier: "SearchInsightsFilters" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StartTimeRange: __S(93, __c11, 5),
          Filters: S.optional(__S(158, __c19, 6)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Type: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/insights/search" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SearchInsightsRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Severities: S.optional(__S(1, __c0, 1)),
          Statuses: S.optional(__S(1, __c0, 1)),
          ResourceCollection: S.optional(__S(39, __c4, 7)),
          ServiceCollection: S.optional(__S(94, __c11, 6)),
        }),
      ).annotate({
        identifier: "SearchOrganizationInsightsFilters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountIds: __S(22, __c2, 6),
          StartTimeRange: __S(93, __c11, 5),
          Filters: S.optional(__S(160, __c20, 0)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Type: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/insights/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchOrganizationInsightsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProactiveInsights: S.optional(__S(122, __c15, 2)),
          ReactiveInsights: S.optional(__S(124, __c15, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SearchOrganizationInsightsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceCollection: __S(85, __c10, 5),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/cost-estimation" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartCostEstimationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ EventSources: S.optional(__S(48, __c6, 0)) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/event-sources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateEventSourcesConfigRequest",
      });
    case 5:
      return S.Array(__S(83, __c10, 3));
    case 6:
      return S.suspend(() =>
        S.Struct({
          CloudFormation: S.optional(__S(82, __c10, 2)),
          Tags: S.optional(__S(165, __c20, 5)),
        }),
      ).annotate({
        identifier: "UpdateResourceCollectionFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Action: S.String,
          ResourceCollection: __S(166, __c20, 6),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/resource-collections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourceCollectionRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OpsCenter: S.optional(__S(77, __c9, 5)),
          LogsAnomalyDetection: S.optional(__S(77, __c9, 5)),
          KMSServerSideEncryption: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({
        identifier: "UpdateServiceIntegrationConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ServiceIntegration: __S(168, __c21, 0) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/service-integrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateServiceIntegrationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String, Message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(__S(170, __c21, 2));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
