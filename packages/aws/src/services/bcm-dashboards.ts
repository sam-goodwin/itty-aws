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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "BCM Dashboards",
  serviceShapeName: "AWSBCMDashboardsService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bcm-dashboards" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-08-18");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://bcm-dashboards-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(PartitionResult),
            {},
          );
        }
        return e(
          `https://bcm-dashboards.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          _p0(PartitionResult),
          {},
        );
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
export type DashboardName = string;
export type Description = string;
export type WidgetId = string;
export type WidgetTitle = string;
export type WidgetWidth = number;
export type WidgetHeight = number;
export type MetricName =
  | "AmortizedCost"
  | "BlendedCost"
  | "NetAmortizedCost"
  | "NetUnblendedCost"
  | "NormalizedUsageAmount"
  | "UnblendedCost"
  | "UsageQuantity"
  | "SpendCoveredBySavingsPlans"
  | "Hour"
  | "Unit"
  | "Cost"
  | (string & {});
const MetricName = S.String;

export type MetricNames = MetricName[];
const MetricNames = /*@__PURE__*/ __L.at(__c0, 0);
export type DateTimeType = "ABSOLUTE" | "RELATIVE" | (string & {});
const DateTimeType = S.String;

export interface DateTimeValue {
  type: DateTimeType;
  value: string;
}
const DateTimeValue = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<DateTimeValue>;
export interface DateTimeRange {
  startTime: DateTimeValue;
  endTime: DateTimeValue;
}
const DateTimeRange = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<DateTimeRange>;
export type Granularity = "HOURLY" | "DAILY" | "MONTHLY" | (string & {});
const Granularity = S.String;

export type GroupDefinitionType = "DIMENSION" | "TAG" | "COST_CATEGORY" | (string & {});
const GroupDefinitionType = S.String;

export interface GroupDefinition {
  key: string;
  type?: GroupDefinitionType;
}
const GroupDefinition = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<GroupDefinition>;
export type GroupDefinitions = GroupDefinition[];
const GroupDefinitions = /*@__PURE__*/ __L.at(__c0, 4);
export type Expressions = Expression[];
const Expressions = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Expressions>;
export type Dimension =
  | "AZ"
  | "INSTANCE_TYPE"
  | "LINKED_ACCOUNT"
  | "OPERATION"
  | "PURCHASE_TYPE"
  | "REGION"
  | "SERVICE"
  | "USAGE_TYPE"
  | "USAGE_TYPE_GROUP"
  | "RECORD_TYPE"
  | "RESOURCE_ID"
  | "SUBSCRIPTION_ID"
  | "TAG_KEY"
  | "OPERATING_SYSTEM"
  | "TENANCY"
  | "BILLING_ENTITY"
  | "RESERVATION_ID"
  | "COST_CATEGORY_NAME"
  | "DATABASE_ENGINE"
  | "LEGAL_ENTITY_NAME"
  | "SAVINGS_PLANS_TYPE"
  | "INSTANCE_TYPE_FAMILY"
  | "CACHE_ENGINE"
  | "DEPLOYMENT_OPTION"
  | "SCOPE"
  | "PLATFORM"
  | (string & {});
const Dimension = S.String;

export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c0, 6);
export type MatchOption =
  | "EQUALS"
  | "ABSENT"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "GREATER_THAN_OR_EQUAL"
  | "CASE_SENSITIVE"
  | "CASE_INSENSITIVE"
  | (string & {});
export type MatchOptions = MatchOption[];
const MatchOptions = MetricNames as any as S.Schema<MatchOptions>;
export interface DimensionValues {
  key: Dimension;
  values: string[];
  matchOptions?: MatchOption[];
}
const DimensionValues = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<DimensionValues>;
export interface TagValues {
  key?: string;
  values?: string[];
  matchOptions?: MatchOption[];
}
const TagValues = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<TagValues>;
export interface CostCategoryValues {
  key?: string;
  values?: string[];
  matchOptions?: MatchOption[];
}
const CostCategoryValues = TagValues as any as S.Schema<CostCategoryValues>;
export interface Expression {
  or?: Expression[];
  and?: Expression[];
  not?: Expression;
  dimensions?: DimensionValues;
  tags?: TagValues;
  costCategories?: CostCategoryValues;
}
const Expression = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Expression>;
export interface CostAndUsageQuery {
  metrics: MetricName[];
  timeRange: DateTimeRange;
  granularity: Granularity;
  groupBy?: GroupDefinition[];
  filter?: Expression;
}
const CostAndUsageQuery = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<CostAndUsageQuery>;
export interface SavingsPlansCoverageQuery {
  timeRange: DateTimeRange;
  metrics?: MetricName[];
  granularity?: Granularity;
  groupBy?: GroupDefinition[];
  filter?: Expression;
}
const SavingsPlansCoverageQuery = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<SavingsPlansCoverageQuery>;
export interface SavingsPlansUtilizationQuery {
  timeRange: DateTimeRange;
  granularity?: Granularity;
  filter?: Expression;
}
const SavingsPlansUtilizationQuery = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<SavingsPlansUtilizationQuery>;
export interface ReservationCoverageQuery {
  timeRange: DateTimeRange;
  groupBy?: GroupDefinition[];
  granularity?: Granularity;
  filter?: Expression;
  metrics?: MetricName[];
}
const ReservationCoverageQuery = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<ReservationCoverageQuery>;
export interface ReservationUtilizationQuery {
  timeRange: DateTimeRange;
  groupBy?: GroupDefinition[];
  granularity?: Granularity;
  filter?: Expression;
}
const ReservationUtilizationQuery = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<ReservationUtilizationQuery>;
export type QueryParameters =
  | {
      costAndUsage: CostAndUsageQuery;
      savingsPlansCoverage?: never;
      savingsPlansUtilization?: never;
      reservationCoverage?: never;
      reservationUtilization?: never;
    }
  | {
      costAndUsage?: never;
      savingsPlansCoverage: SavingsPlansCoverageQuery;
      savingsPlansUtilization?: never;
      reservationCoverage?: never;
      reservationUtilization?: never;
    }
  | {
      costAndUsage?: never;
      savingsPlansCoverage?: never;
      savingsPlansUtilization: SavingsPlansUtilizationQuery;
      reservationCoverage?: never;
      reservationUtilization?: never;
    }
  | {
      costAndUsage?: never;
      savingsPlansCoverage?: never;
      savingsPlansUtilization?: never;
      reservationCoverage: ReservationCoverageQuery;
      reservationUtilization?: never;
    }
  | {
      costAndUsage?: never;
      savingsPlansCoverage?: never;
      savingsPlansUtilization?: never;
      reservationCoverage?: never;
      reservationUtilization: ReservationUtilizationQuery;
    };
const QueryParameters = /*@__PURE__*/ __L.at(__c1, 7);
export type VisualType = "LINE" | "BAR" | "STACK" | (string & {});
const VisualType = S.String;

export interface GraphDisplayConfig {
  visualType: VisualType;
}
const GraphDisplayConfig = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<GraphDisplayConfig>;
export type GraphDisplayConfigMap = { [key: string]: GraphDisplayConfig | undefined };
const GraphDisplayConfigMap = /*@__PURE__*/ __L.at(__c2, 1);
export interface TableDisplayConfigStruct {}
const TableDisplayConfigStruct = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<TableDisplayConfigStruct>;
export type DisplayConfig =
  | { graph: { [key: string]: GraphDisplayConfig | undefined }; table?: never }
  | { graph?: never; table: TableDisplayConfigStruct };
const DisplayConfig = /*@__PURE__*/ __L.at(__c2, 3);
export interface WidgetConfig {
  queryParameters: QueryParameters;
  displayConfig: DisplayConfig;
}
const WidgetConfig = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<WidgetConfig>;
export type WidgetConfigList = WidgetConfig[];
const WidgetConfigList = /*@__PURE__*/ __L.at(__c2, 5);
export interface Widget {
  id?: string;
  title: string;
  description?: string;
  width?: number;
  height?: number;
  horizontalOffset?: number;
  configs: WidgetConfig[];
}
const Widget = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<Widget>;
export type WidgetList = Widget[];
const WidgetList = /*@__PURE__*/ __L.at(__c2, 7);
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export interface ResourceTag {
  key: string;
  value: string;
}
const ResourceTag = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ResourceTag>;
export type ResourceTagList = ResourceTag[];
const ResourceTagList = /*@__PURE__*/ __L.at(__c3, 1);
export interface CreateDashboardRequest {
  name: string;
  description?: string;
  widgets: Widget[];
  resourceTags?: ResourceTag[];
}
const CreateDashboardRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateDashboardRequest>;
export type DashboardArn = string;
export interface CreateDashboardResponse {
  arn: string;
}
const CreateDashboardResponse = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateDashboardResponse>;
export type ScheduledReportName = string;
export type ServiceRoleArn = string;
export interface SchedulePeriod {
  startTime?: Date;
  endTime?: Date;
}
const SchedulePeriod = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<SchedulePeriod>;
export type ScheduleState = "ENABLED" | "DISABLED" | (string & {});
const ScheduleState = S.String;

export interface ScheduleConfig {
  scheduleExpression?: string;
  scheduleExpressionTimeZone?: string;
  schedulePeriod?: SchedulePeriod;
  state?: ScheduleState;
}
const ScheduleConfig = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<ScheduleConfig>;
export type WidgetIdList = string[];
const WidgetIdList = StringList as any as S.Schema<WidgetIdList>;
export interface ScheduledReportInput {
  name: string;
  dashboardArn: string;
  scheduledReportExecutionRoleArn: string;
  scheduleConfig: ScheduleConfig;
  description?: string;
  widgetIds?: string[];
  widgetDateRangeOverride?: DateTimeRange;
}
const ScheduledReportInput = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<ScheduledReportInput>;
export type ClientToken = string;
export interface CreateScheduledReportRequest {
  scheduledReport: ScheduledReportInput;
  resourceTags?: ResourceTag[];
  clientToken?: string;
}
const CreateScheduledReportRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateScheduledReportRequest>;
export type ScheduledReportArn = string;
export interface CreateScheduledReportResponse {
  arn: string;
}
const CreateScheduledReportResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateScheduledReportResponse>;
export interface DeleteDashboardRequest {
  arn: string;
}
const DeleteDashboardRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DeleteDashboardRequest>;
export interface DeleteDashboardResponse {
  arn: string;
}
const DeleteDashboardResponse = CreateDashboardResponse as any as S.Schema<DeleteDashboardResponse>;
export interface DeleteScheduledReportRequest {
  arn: string;
}
const DeleteScheduledReportRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DeleteScheduledReportRequest>;
export interface DeleteScheduledReportResponse {
  arn: string;
}
const DeleteScheduledReportResponse =
  CreateScheduledReportResponse as any as S.Schema<DeleteScheduledReportResponse>;
export interface ExecuteScheduledReportRequest {
  arn: string;
  clientToken?: string;
  dryRun?: boolean;
}
const ExecuteScheduledReportRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<ExecuteScheduledReportRequest>;
export type HealthStatusCode = "HEALTHY" | "UNHEALTHY" | (string & {});
const HealthStatusCode = S.String;

export type StatusReason =
  | "DATA_SOURCE_ACCESS_DENIED"
  | "EXECUTION_ROLE_ASSUME_FAILED"
  | "EXECUTION_ROLE_INSUFFICIENT_PERMISSIONS"
  | "DASHBOARD_NOT_FOUND"
  | "DASHBOARD_ACCESS_DENIED"
  | "INTERNAL_FAILURE"
  | "WIDGET_ID_NOT_FOUND"
  | (string & {});
export type StatusReasonList = StatusReason[];
const StatusReasonList = MetricNames as any as S.Schema<StatusReasonList>;
export interface HealthStatus {
  statusCode: HealthStatusCode;
  lastRefreshedAt?: Date;
  statusReasons?: StatusReason[];
}
const HealthStatus = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<HealthStatus>;
export interface ExecuteScheduledReportResponse {
  healthStatus?: HealthStatus;
  executionTriggered?: boolean;
}
const ExecuteScheduledReportResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ExecuteScheduledReportResponse>;
export interface GetDashboardRequest {
  arn: string;
}
const GetDashboardRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<GetDashboardRequest>;
export type DashboardType = "CUSTOM" | (string & {});
const DashboardType = S.String;

export interface GetDashboardResponse {
  arn: string;
  name: string;
  description?: string;
  type: DashboardType;
  widgets: Widget[];
  createdAt: Date;
  updatedAt: Date;
}
const GetDashboardResponse = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<GetDashboardResponse>;
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
const GetResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<GetResourcePolicyRequest>;
export interface GetResourcePolicyResponse {
  resourceArn: string;
  policyDocument: string;
}
const GetResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<GetResourcePolicyResponse>;
export interface GetScheduledReportRequest {
  arn: string;
}
const GetScheduledReportRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<GetScheduledReportRequest>;
export interface ScheduledReport {
  arn?: string;
  name: string;
  dashboardArn: string;
  scheduledReportExecutionRoleArn: string;
  scheduleConfig: ScheduleConfig;
  description?: string;
  widgetIds?: string[];
  widgetDateRangeOverride?: DateTimeRange;
  createdAt?: Date;
  updatedAt?: Date;
  lastExecutionAt?: Date;
  healthStatus?: HealthStatus;
}
const ScheduledReport = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<ScheduledReport>;
export interface GetScheduledReportResponse {
  scheduledReport: ScheduledReport;
}
const GetScheduledReportResponse = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<GetScheduledReportResponse>;
export type MaxResults = number;
export type NextPageToken = string;
export interface ListDashboardsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListDashboardsRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<ListDashboardsRequest>;
export interface DashboardReference {
  arn: string;
  name: string;
  description?: string;
  type: DashboardType;
  createdAt: Date;
  updatedAt: Date;
}
const DashboardReference = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<DashboardReference>;
export type DashboardReferenceList = DashboardReference[];
const DashboardReferenceList = /*@__PURE__*/ __L.at(__c5, 7);
export interface ListDashboardsResponse {
  dashboards: DashboardReference[];
  nextToken?: string;
}
const ListDashboardsResponse = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<ListDashboardsResponse>;
export interface ListScheduledReportsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListScheduledReportsRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<ListScheduledReportsRequest>;
export interface ScheduledReportSummary {
  arn: string;
  name: string;
  dashboardArn: string;
  scheduleExpression: string;
  state: ScheduleState;
  healthStatus: HealthStatus;
  scheduleExpressionTimeZone?: string;
  widgetIds?: string[];
}
const ScheduledReportSummary = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ScheduledReportSummary>;
export type ScheduledReportSummaryList = ScheduledReportSummary[];
const ScheduledReportSummaryList = /*@__PURE__*/ __L.at(__c6, 3);
export interface ListScheduledReportsResponse {
  scheduledReports: ScheduledReportSummary[];
  nextToken?: string;
}
const ListScheduledReportsResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<ListScheduledReportsResponse>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  resourceTags?: ResourceTag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  resourceTags: ResourceTag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = TableDisplayConfigStruct as any as S.Schema<TagResourceResponse>;
export type ResourceTagKeyList = string[];
const ResourceTagKeyList = StringList as any as S.Schema<ResourceTagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  resourceTagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TableDisplayConfigStruct as any as S.Schema<UntagResourceResponse>;
export interface UpdateDashboardRequest {
  arn: string;
  name: string;
  description?: string;
  widgets?: Widget[];
}
const UpdateDashboardRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<UpdateDashboardRequest>;
export interface UpdateDashboardResponse {
  arn: string;
}
const UpdateDashboardResponse = CreateDashboardResponse as any as S.Schema<UpdateDashboardResponse>;
export interface UpdateScheduledReportRequest {
  arn: string;
  name?: string;
  description?: string;
  dashboardArn?: string;
  scheduledReportExecutionRoleArn?: string;
  scheduleConfig?: ScheduleConfig;
  widgetIds?: string[];
  widgetDateRangeOverride?: DateTimeRange;
  clearWidgetIds?: boolean;
  clearWidgetDateRangeOverride?: boolean;
}
const UpdateScheduledReportRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<UpdateScheduledReportRequest>;
export interface UpdateScheduledReportResponse {
  arn: string;
}
const UpdateScheduledReportResponse =
  CreateScheduledReportResponse as any as S.Schema<UpdateScheduledReportResponse>;
export type CreateDashboardError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new dashboard that can contain multiple widgets displaying cost and usage data. You can add custom widgets or use predefined widgets, arranging them in your preferred layout.
 */
export const createDashboard: API.OperationMethod<
  CreateDashboardRequest,
  CreateDashboardResponse,
  CreateDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDashboardRequest,
  output: CreateDashboardResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDashboard",
}));

export type CreateScheduledReportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new scheduled report for a dashboard. A scheduled report automatically generates and delivers dashboard snapshots on a recurring schedule. Reports are delivered within 15 minutes of the scheduled delivery time.
 */
export const createScheduledReport: API.OperationMethod<
  CreateScheduledReportRequest,
  CreateScheduledReportResponse,
  CreateScheduledReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScheduledReportRequest,
  output: CreateScheduledReportResponse,
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
  operationName: "CreateScheduledReport",
}));

export type DeleteDashboardError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specified dashboard. This action cannot be undone.
 */
export const deleteDashboard: API.OperationMethod<
  DeleteDashboardRequest,
  DeleteDashboardResponse,
  DeleteDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDashboardRequest,
  output: DeleteDashboardResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDashboard",
}));

export type DeleteScheduledReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specified scheduled report. This is an irreversible operation.
 */
export const deleteScheduledReport: API.OperationMethod<
  DeleteScheduledReportRequest,
  DeleteScheduledReportResponse,
  DeleteScheduledReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScheduledReportRequest,
  output: DeleteScheduledReportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScheduledReport",
}));

export type ExecuteScheduledReportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Triggers an immediate execution of a scheduled report, outside of its regular schedule. The scheduled report must be in `ENABLED` state. Calling this operation on a `DISABLED` scheduled report returns a `ValidationException`.
 *
 * If a `clientToken` is provided, the service uses it for idempotency. Requests with the same client token will not trigger a new execution within the same minute.
 */
export const executeScheduledReport: API.OperationMethod<
  ExecuteScheduledReportRequest,
  ExecuteScheduledReportResponse,
  ExecuteScheduledReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteScheduledReportRequest,
  output: ExecuteScheduledReportResponse,
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
  operationName: "ExecuteScheduledReport",
}));

export type GetDashboardError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the configuration and metadata of a specified dashboard, including its widgets and layout settings.
 */
export const getDashboard: API.OperationMethod<
  GetDashboardRequest,
  GetDashboardResponse,
  GetDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDashboardRequest,
  output: GetDashboardResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDashboard",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource-based policy attached to a dashboard, showing sharing configurations and permissions.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourcePolicyRequest,
  output: GetResourcePolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetScheduledReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the configuration and metadata of a specified scheduled report.
 */
export const getScheduledReport: API.OperationMethod<
  GetScheduledReportRequest,
  GetScheduledReportResponse,
  GetScheduledReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScheduledReportRequest,
  output: GetScheduledReportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetScheduledReport",
}));

export type ListDashboardsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all dashboards in your account.
 */
export const listDashboards: API.PaginatedOperationMethod<
  ListDashboardsRequest,
  ListDashboardsResponse,
  ListDashboardsError,
  Credentials | HttpClient.HttpClient,
  DashboardReference
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDashboardsRequest,
  output: ListDashboardsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDashboards",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dashboards",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScheduledReportsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of scheduled reports in your account.
 */
export const listScheduledReports: API.PaginatedOperationMethod<
  ListScheduledReportsRequest,
  ListScheduledReportsResponse,
  ListScheduledReportsError,
  Credentials | HttpClient.HttpClient,
  ScheduledReportSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScheduledReportsRequest,
  output: ListScheduledReportsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScheduledReports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scheduledReports",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all tags associated with a specified dashboard resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates tags for a specified dashboard resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes specified tags from a dashboard resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDashboardError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing dashboard's properties, including its name, description, and widget configurations.
 */
export const updateDashboard: API.OperationMethod<
  UpdateDashboardRequest,
  UpdateDashboardResponse,
  UpdateDashboardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDashboardRequest,
  output: UpdateDashboardResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDashboard",
}));

export type UpdateScheduledReportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing scheduled report's properties, including its name, description, schedule configuration, and widget settings. Only the parameters included in the request are updated; all other properties remain unchanged.
 */
export const updateScheduledReport: API.OperationMethod<
  UpdateScheduledReportRequest,
  UpdateScheduledReportResponse,
  UpdateScheduledReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateScheduledReportRequest,
  output: UpdateScheduledReportResponse,
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
  operationName: "UpdateScheduledReport",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MetricName);
    case 1:
      return S.suspend(() => S.Struct({ type: DateTimeType, value: S.String })).annotate({
        identifier: "DateTimeValue",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ startTime: DateTimeValue, endTime: DateTimeValue }),
      ).annotate({ identifier: "DateTimeRange" });
    case 3:
      return S.suspend(() =>
        S.Struct({ key: S.String, type: S.optional(GroupDefinitionType) }),
      ).annotate({ identifier: "GroupDefinition" });
    case 4:
      return S.Array(GroupDefinition);
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Expression> => Expression).annotate({
          identifier: "Expression",
        }),
      );
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ key: Dimension, values: StringList, matchOptions: S.optional(MatchOptions) }),
      ).annotate({ identifier: "DimensionValues" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          values: S.optional(StringList),
          matchOptions: S.optional(MatchOptions),
        }),
      ).annotate({ identifier: "TagValues" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          or: S.optional(S.suspend(() => Expressions).annotate({ identifier: "Expressions" })),
          and: S.optional(S.suspend(() => Expressions).annotate({ identifier: "Expressions" })),
          not: S.optional(
            S.suspend((): S.Schema<Expression> => Expression).annotate({
              identifier: "Expression",
            }),
          ),
          dimensions: S.optional(DimensionValues),
          tags: S.optional(TagValues),
          costCategories: S.optional(CostCategoryValues),
        }),
      ).annotate({ identifier: "Expression" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          metrics: MetricNames,
          timeRange: DateTimeRange,
          granularity: Granularity,
          groupBy: S.optional(GroupDefinitions),
          filter: S.optional(Expression),
        }),
      ).annotate({ identifier: "CostAndUsageQuery" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          timeRange: DateTimeRange,
          metrics: S.optional(MetricNames),
          granularity: S.optional(Granularity),
          groupBy: S.optional(GroupDefinitions),
          filter: S.optional(Expression),
        }),
      ).annotate({
        identifier: "SavingsPlansCoverageQuery",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          timeRange: DateTimeRange,
          granularity: S.optional(Granularity),
          filter: S.optional(Expression),
        }),
      ).annotate({
        identifier: "SavingsPlansUtilizationQuery",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          timeRange: DateTimeRange,
          groupBy: S.optional(GroupDefinitions),
          granularity: S.optional(Granularity),
          filter: S.optional(Expression),
          metrics: S.optional(MetricNames),
        }),
      ).annotate({ identifier: "ReservationCoverageQuery" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          timeRange: DateTimeRange,
          groupBy: S.optional(GroupDefinitions),
          granularity: S.optional(Granularity),
          filter: S.optional(Expression),
        }),
      ).annotate({
        identifier: "ReservationUtilizationQuery",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ costAndUsage: CostAndUsageQuery }),
        /*@__PURE__*/ S.Struct({ savingsPlansCoverage: SavingsPlansCoverageQuery }),
        /*@__PURE__*/ S.Struct({ savingsPlansUtilization: SavingsPlansUtilizationQuery }),
        /*@__PURE__*/ S.Struct({ reservationCoverage: ReservationCoverageQuery }),
        /*@__PURE__*/ S.Struct({ reservationUtilization: ReservationUtilizationQuery }),
      ]);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ visualType: VisualType })).annotate({
        identifier: "GraphDisplayConfig",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ GraphDisplayConfig.pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TableDisplayConfigStruct",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ graph: GraphDisplayConfigMap }),
        /*@__PURE__*/ S.Struct({ table: TableDisplayConfigStruct }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ queryParameters: QueryParameters, displayConfig: DisplayConfig }),
      ).annotate({ identifier: "WidgetConfig" });
    case 5:
      return S.Array(WidgetConfig);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          title: S.String,
          description: S.optional(S.String),
          width: S.optional(S.Number),
          height: S.optional(S.Number),
          horizontalOffset: S.optional(S.Number),
          configs: WidgetConfigList,
        }),
      ).annotate({ identifier: "Widget" });
    case 7:
      return S.Array(Widget);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "ResourceTag",
      });
    case 1:
      return S.Array(ResourceTag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          widgets: WidgetList,
          resourceTags: S.optional(ResourceTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDashboardRequest" });
    case 3:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "CreateDashboardResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SchedulePeriod" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scheduleExpression: S.optional(S.String),
          scheduleExpressionTimeZone: S.optional(S.String),
          schedulePeriod: S.optional(SchedulePeriod),
          state: S.optional(ScheduleState),
        }),
      ).annotate({ identifier: "ScheduleConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          dashboardArn: S.String,
          scheduledReportExecutionRoleArn: S.String,
          scheduleConfig: ScheduleConfig,
          description: S.optional(S.String),
          widgetIds: S.optional(WidgetIdList),
          widgetDateRangeOverride: S.optional(DateTimeRange),
        }),
      ).annotate({ identifier: "ScheduledReportInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          scheduledReport: ScheduledReportInput,
          resourceTags: S.optional(ResourceTagList),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateScheduledReportRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "CreateScheduledReportResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDashboardRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteScheduledReportRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
          dryRun: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ExecuteScheduledReportRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          statusCode: HealthStatusCode,
          lastRefreshedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          statusReasons: S.optional(StatusReasonList),
        }),
      ).annotate({ identifier: "HealthStatus" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          healthStatus: S.optional(HealthStatus),
          executionTriggered: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ExecuteScheduledReportResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDashboardRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: DashboardType,
          widgets: WidgetList,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetDashboardResponse" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, policyDocument: S.String }),
      ).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetScheduledReportRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.String,
          dashboardArn: S.String,
          scheduledReportExecutionRoleArn: S.String,
          scheduleConfig: ScheduleConfig,
          description: S.optional(S.String),
          widgetIds: S.optional(WidgetIdList),
          widgetDateRangeOverride: S.optional(DateTimeRange),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastExecutionAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          healthStatus: S.optional(HealthStatus),
        }),
      ).annotate({ identifier: "ScheduledReport" });
    case 4:
      return S.suspend(() => S.Struct({ scheduledReport: ScheduledReport })).annotate({
        identifier: "GetScheduledReportResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDashboardsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: DashboardType,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DashboardReference" });
    case 7:
      return S.Array(DashboardReference);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ dashboards: DashboardReferenceList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDashboardsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListScheduledReportsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          dashboardArn: S.String,
          scheduleExpression: S.String,
          state: ScheduleState,
          healthStatus: HealthStatus,
          scheduleExpressionTimeZone: S.optional(S.String),
          widgetIds: S.optional(WidgetIdList),
        }),
      ).annotate({ identifier: "ScheduledReportSummary" });
    case 3:
      return S.Array(ScheduledReportSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ scheduledReports: ScheduledReportSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListScheduledReportsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ resourceTags: S.optional(ResourceTagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, resourceTags: ResourceTagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, resourceTagKeys: ResourceTagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          widgets: S.optional(WidgetList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateDashboardRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          dashboardArn: S.optional(S.String),
          scheduledReportExecutionRoleArn: S.optional(S.String),
          scheduleConfig: S.optional(ScheduleConfig),
          widgetIds: S.optional(WidgetIdList),
          widgetDateRangeOverride: S.optional(DateTimeRange),
          clearWidgetIds: S.optional(S.Boolean),
          clearWidgetDateRangeOverride: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateScheduledReportRequest",
      });
  }
}
