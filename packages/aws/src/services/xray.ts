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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "XRay", serviceShapeName: "AWSXRay" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "xray" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-04-12");
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
              `https://xray-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://xray-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://xray.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://xray.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class GroupAlreadyExists
  extends /*@__PURE__*/ S.TaggedError<GroupAlreadyExists>()(
    "GroupAlreadyExists",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequestException",
      message: { matches: " already exists$" },
    }),
  ).pipe(C.withAlreadyExistsError, C.withConflictError) {}
export class GroupNotFound
  extends /*@__PURE__*/ S.TaggedError<GroupNotFound>()(
    "GroupNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({ from: "InvalidRequestException", message: "Group not found" }),
  ).pipe(C.withNotFoundError) {}
export class InvalidPolicyRevisionIdException
  extends /*@__PURE__*/ S.TaggedError<InvalidPolicyRevisionIdException>()(
    "InvalidPolicyRevisionIdException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()("InvalidRequestException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LockoutPreventionException
  extends /*@__PURE__*/ S.TaggedError<LockoutPreventionException>()(
    "LockoutPreventionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class MalformedPolicyDocumentException
  extends /*@__PURE__*/ S.TaggedError<MalformedPolicyDocumentException>()(
    "MalformedPolicyDocumentException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class PolicyCountLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<PolicyCountLimitExceededException>()(
    "PolicyCountLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class PolicySizeLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<PolicySizeLimitExceededException>()(
    "PolicySizeLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class RuleLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<RuleLimitExceededException>()("RuleLimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class SamplingRuleAlreadyExists
  extends /*@__PURE__*/ S.TaggedError<SamplingRuleAlreadyExists>()(
    "SamplingRuleAlreadyExists",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequestException",
      message: "Sampling rule already exists",
    }),
  ).pipe(C.withAlreadyExistsError, C.withConflictError) {}
export class SamplingRuleNotFound
  extends /*@__PURE__*/ S.TaggedError<SamplingRuleNotFound>()(
    "SamplingRuleNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequestException",
      message: "Sampling rule does not exist",
    }),
  ).pipe(C.withNotFoundError) {}
export class ThrottledException
  extends /*@__PURE__*/ S.TaggedError<ThrottledException>()(
    "ThrottledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type TraceId = string;
export type TraceIdList = string[];
export interface BatchGetTracesRequest {
  TraceIds: string[];
  NextToken?: string;
}
export type SegmentId = string;
export type SegmentDocument = string;
export interface Segment {
  Id?: string;
  Document?: string;
}
export type SegmentList = Segment[];
export interface Trace {
  Id?: string;
  Duration?: number;
  LimitExceeded?: boolean;
  Segments?: Segment[];
}
export type TraceList = Trace[];
export type UnprocessedTraceIdList = string[];
export interface BatchGetTracesResult {
  Traces?: Trace[];
  UnprocessedTraceIds?: string[];
  NextToken?: string;
}
export type RetrievalToken = string;
export interface CancelTraceRetrievalRequest {
  RetrievalToken: string;
}
export interface CancelTraceRetrievalResult {}
export type GroupName = string;
export type FilterExpression = string;
export interface InsightsConfiguration {
  InsightsEnabled?: boolean;
  NotificationsEnabled?: boolean;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateGroupRequest {
  GroupName: string;
  FilterExpression?: string;
  InsightsConfiguration?: InsightsConfiguration;
  Tags?: Tag[];
}
export interface Group {
  GroupName?: string;
  GroupARN?: string;
  FilterExpression?: string;
  InsightsConfiguration?: InsightsConfiguration;
}
export interface CreateGroupResult {
  Group?: Group;
}
export type RuleName = string;
export type ResourceARN = string;
export type Priority = number;
export type FixedRate = number;
export type ReservoirSize = number;
export type ServiceName = string;
export type ServiceType = string;
export type Host = string;
export type HTTPMethod = string;
export type URLPath = string;
export type Version = number;
export type AttributeKey = string;
export type AttributeValue = string;
export type AttributeMap = { [key: string]: string | undefined };
export type MaxRate = number;
export type CooldownWindowMinutes = number;
export interface SamplingRateBoost {
  MaxRate: number;
  CooldownWindowMinutes: number;
}
export interface SamplingRule {
  RuleName?: string;
  RuleARN?: string;
  ResourceARN: string;
  Priority: number;
  FixedRate: number;
  ReservoirSize: number;
  ServiceName: string;
  ServiceType: string;
  Host: string;
  HTTPMethod: string;
  URLPath: string;
  Version: number;
  Attributes?: { [key: string]: string | undefined };
  SamplingRateBoost?: SamplingRateBoost;
}
export interface CreateSamplingRuleRequest {
  SamplingRule: SamplingRule;
  Tags?: Tag[];
}
export interface SamplingRuleRecord {
  SamplingRule?: SamplingRule;
  CreatedAt?: Date;
  ModifiedAt?: Date;
}
export interface CreateSamplingRuleResult {
  SamplingRuleRecord?: SamplingRuleRecord;
}
export type GroupARN = string;
export interface DeleteGroupRequest {
  GroupName?: string;
  GroupARN?: string;
}
export interface DeleteGroupResult {}
export type PolicyName = string;
export type PolicyRevisionId = string;
export interface DeleteResourcePolicyRequest {
  PolicyName: string;
  PolicyRevisionId?: string;
}
export interface DeleteResourcePolicyResult {}
export interface DeleteSamplingRuleRequest {
  RuleName?: string;
  RuleARN?: string;
}
export interface DeleteSamplingRuleResult {
  SamplingRuleRecord?: SamplingRuleRecord;
}
export interface GetEncryptionConfigRequest {}
export type EncryptionStatus = "UPDATING" | "ACTIVE" | (string & {});
export type EncryptionType = "NONE" | "KMS" | (string & {});
export interface EncryptionConfig {
  KeyId?: string;
  Status?: EncryptionStatus;
  Type?: EncryptionType;
}
export interface GetEncryptionConfigResult {
  EncryptionConfig?: EncryptionConfig;
}
export interface GetGroupRequest {
  GroupName?: string;
  GroupARN?: string;
}
export interface GetGroupResult {
  Group?: Group;
}
export type GetGroupsNextToken = string;
export interface GetGroupsRequest {
  NextToken?: string;
}
export interface GroupSummary {
  GroupName?: string;
  GroupARN?: string;
  FilterExpression?: string;
  InsightsConfiguration?: InsightsConfiguration;
}
export type GroupSummaryList = GroupSummary[];
export interface GetGroupsResult {
  Groups?: GroupSummary[];
  NextToken?: string;
}
export interface GetIndexingRulesRequest {
  NextToken?: string;
}
export interface ProbabilisticRuleValue {
  DesiredSamplingPercentage: number;
  ActualSamplingPercentage?: number;
}
export type IndexingRuleValue = { Probabilistic: ProbabilisticRuleValue };
export interface IndexingRule {
  Name?: string;
  ModifiedAt?: Date;
  Rule?: IndexingRuleValue;
}
export type IndexingRuleList = IndexingRule[];
export interface GetIndexingRulesResult {
  IndexingRules?: IndexingRule[];
  NextToken?: string;
}
export type InsightId = string;
export interface GetInsightRequest {
  InsightId: string;
}
export type ServiceNames = string[];
export interface ServiceId {
  Name?: string;
  Names?: string[];
  AccountId?: string;
  Type?: string;
}
export type InsightCategory = "FAULT" | (string & {});
export type InsightCategoryList = InsightCategory[];
export type InsightState = "ACTIVE" | "CLOSED" | (string & {});
export type InsightSummaryText = string;
export interface RequestImpactStatistics {
  FaultCount?: number;
  OkCount?: number;
  TotalCount?: number;
}
export interface AnomalousService {
  ServiceId?: ServiceId;
}
export type AnomalousServiceList = AnomalousService[];
export interface Insight {
  InsightId?: string;
  GroupARN?: string;
  GroupName?: string;
  RootCauseServiceId?: ServiceId;
  Categories?: InsightCategory[];
  State?: InsightState;
  StartTime?: Date;
  EndTime?: Date;
  Summary?: string;
  ClientRequestImpactStatistics?: RequestImpactStatistics;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  TopAnomalousServices?: AnomalousService[];
}
export interface GetInsightResult {
  Insight?: Insight;
}
export type GetInsightEventsMaxResults = number;
export type Token = string;
export interface GetInsightEventsRequest {
  InsightId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type EventSummaryText = string;
export interface InsightEvent {
  Summary?: string;
  EventTime?: Date;
  ClientRequestImpactStatistics?: RequestImpactStatistics;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  TopAnomalousServices?: AnomalousService[];
}
export type InsightEventList = InsightEvent[];
export interface GetInsightEventsResult {
  InsightEvents?: InsightEvent[];
  NextToken?: string;
}
export interface GetInsightImpactGraphRequest {
  InsightId: string;
  StartTime: Date;
  EndTime: Date;
  NextToken?: string;
}
export interface InsightImpactGraphEdge {
  ReferenceId?: number;
}
export type InsightImpactGraphEdgeList = InsightImpactGraphEdge[];
export interface InsightImpactGraphService {
  ReferenceId?: number;
  Type?: string;
  Name?: string;
  Names?: string[];
  AccountId?: string;
  Edges?: InsightImpactGraphEdge[];
}
export type InsightImpactGraphServiceList = InsightImpactGraphService[];
export interface GetInsightImpactGraphResult {
  InsightId?: string;
  StartTime?: Date;
  EndTime?: Date;
  ServiceGraphStartTime?: Date;
  ServiceGraphEndTime?: Date;
  Services?: InsightImpactGraphService[];
  NextToken?: string;
}
export type InsightStateList = InsightState[];
export type GetInsightSummariesMaxResults = number;
export interface GetInsightSummariesRequest {
  States?: InsightState[];
  GroupARN?: string;
  GroupName?: string;
  StartTime: Date;
  EndTime: Date;
  MaxResults?: number;
  NextToken?: string;
}
export interface InsightSummary {
  InsightId?: string;
  GroupARN?: string;
  GroupName?: string;
  RootCauseServiceId?: ServiceId;
  Categories?: InsightCategory[];
  State?: InsightState;
  StartTime?: Date;
  EndTime?: Date;
  Summary?: string;
  ClientRequestImpactStatistics?: RequestImpactStatistics;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  TopAnomalousServices?: AnomalousService[];
  LastUpdateTime?: Date;
}
export type InsightSummaryList = InsightSummary[];
export interface GetInsightSummariesResult {
  InsightSummaries?: InsightSummary[];
  NextToken?: string;
}
export interface GetRetrievedTracesGraphRequest {
  RetrievalToken: string;
  NextToken?: string;
}
export type RetrievalStatus =
  | "SCHEDULED"
  | "RUNNING"
  | "COMPLETE"
  | "FAILED"
  | "CANCELLED"
  | "TIMEOUT"
  | (string & {});
export interface ErrorStatistics {
  ThrottleCount?: number;
  OtherCount?: number;
  TotalCount?: number;
}
export interface FaultStatistics {
  OtherCount?: number;
  TotalCount?: number;
}
export interface EdgeStatistics {
  OkCount?: number;
  ErrorStatistics?: ErrorStatistics;
  FaultStatistics?: FaultStatistics;
  TotalCount?: number;
  TotalResponseTime?: number;
}
export interface HistogramEntry {
  Value?: number;
  Count?: number;
}
export type Histogram = HistogramEntry[];
export type AliasNames = string[];
export interface Alias {
  Name?: string;
  Names?: string[];
  Type?: string;
}
export type AliasList = Alias[];
export interface Edge {
  ReferenceId?: number;
  StartTime?: Date;
  EndTime?: Date;
  SummaryStatistics?: EdgeStatistics;
  ResponseTimeHistogram?: HistogramEntry[];
  Aliases?: Alias[];
  EdgeType?: string;
  ReceivedEventAgeHistogram?: HistogramEntry[];
}
export type EdgeList = Edge[];
export interface ServiceStatistics {
  OkCount?: number;
  ErrorStatistics?: ErrorStatistics;
  FaultStatistics?: FaultStatistics;
  TotalCount?: number;
  TotalResponseTime?: number;
}
export interface Service {
  ReferenceId?: number;
  Name?: string;
  Names?: string[];
  Root?: boolean;
  AccountId?: string;
  Type?: string;
  State?: string;
  StartTime?: Date;
  EndTime?: Date;
  Edges?: Edge[];
  SummaryStatistics?: ServiceStatistics;
  DurationHistogram?: HistogramEntry[];
  ResponseTimeHistogram?: HistogramEntry[];
}
export interface GraphLink {
  ReferenceType?: string;
  SourceTraceId?: string;
  DestinationTraceIds?: string[];
}
export type LinksList = GraphLink[];
export interface RetrievedService {
  Service?: Service;
  Links?: GraphLink[];
}
export type RetrievedServicesList = RetrievedService[];
export interface GetRetrievedTracesGraphResult {
  RetrievalStatus?: RetrievalStatus;
  Services?: RetrievedService[];
  NextToken?: string;
}
export interface GetSamplingRulesRequest {
  NextToken?: string;
}
export type SamplingRuleRecordList = SamplingRuleRecord[];
export interface GetSamplingRulesResult {
  SamplingRuleRecords?: SamplingRuleRecord[];
  NextToken?: string;
}
export interface GetSamplingStatisticSummariesRequest {
  NextToken?: string;
}
export interface SamplingStatisticSummary {
  RuleName?: string;
  Timestamp?: Date;
  RequestCount?: number;
  BorrowCount?: number;
  SampledCount?: number;
}
export type SamplingStatisticSummaryList = SamplingStatisticSummary[];
export interface GetSamplingStatisticSummariesResult {
  SamplingStatisticSummaries?: SamplingStatisticSummary[];
  NextToken?: string;
}
export type ClientID = string;
export type RequestCount = number;
export type SampledCount = number;
export type BorrowCount = number;
export interface SamplingStatisticsDocument {
  RuleName: string;
  ClientID: string;
  Timestamp: Date;
  RequestCount: number;
  SampledCount: number;
  BorrowCount?: number;
}
export type SamplingStatisticsDocumentList = SamplingStatisticsDocument[];
export type AnomalyCount = number;
export type TotalCount = number;
export type SampledAnomalyCount = number;
export interface SamplingBoostStatisticsDocument {
  RuleName: string;
  ServiceName: string;
  Timestamp: Date;
  AnomalyCount: number;
  TotalCount: number;
  SampledAnomalyCount: number;
}
export type SamplingBoostStatisticsDocumentList = SamplingBoostStatisticsDocument[];
export interface GetSamplingTargetsRequest {
  SamplingStatisticsDocuments: SamplingStatisticsDocument[];
  SamplingBoostStatisticsDocuments?: SamplingBoostStatisticsDocument[];
}
export interface SamplingBoost {
  BoostRate: number;
  BoostRateTTL: Date;
}
export interface SamplingTargetDocument {
  RuleName?: string;
  FixedRate?: number;
  ReservoirQuota?: number;
  ReservoirQuotaTTL?: Date;
  Interval?: number;
  SamplingBoost?: SamplingBoost;
}
export type SamplingTargetDocumentList = SamplingTargetDocument[];
export interface UnprocessedStatistics {
  RuleName?: string;
  ErrorCode?: string;
  Message?: string;
}
export type UnprocessedStatisticsList = UnprocessedStatistics[];
export interface GetSamplingTargetsResult {
  SamplingTargetDocuments?: SamplingTargetDocument[];
  LastRuleModification?: Date;
  UnprocessedStatistics?: UnprocessedStatistics[];
  UnprocessedBoostStatistics?: UnprocessedStatistics[];
}
export interface GetServiceGraphRequest {
  StartTime: Date;
  EndTime: Date;
  GroupName?: string;
  GroupARN?: string;
  NextToken?: string;
}
export type ServiceList = Service[];
export interface GetServiceGraphResult {
  StartTime?: Date;
  EndTime?: Date;
  Services?: Service[];
  ContainsOldGroupVersions?: boolean;
  NextToken?: string;
}
export type EntitySelectorExpression = string;
export interface GetTimeSeriesServiceStatisticsRequest {
  StartTime: Date;
  EndTime: Date;
  GroupName?: string;
  GroupARN?: string;
  EntitySelectorExpression?: string;
  Period?: number;
  ForecastStatistics?: boolean;
  NextToken?: string;
}
export interface ForecastStatistics {
  FaultCountHigh?: number;
  FaultCountLow?: number;
}
export interface TimeSeriesServiceStatistics {
  Timestamp?: Date;
  EdgeSummaryStatistics?: EdgeStatistics;
  ServiceSummaryStatistics?: ServiceStatistics;
  ServiceForecastStatistics?: ForecastStatistics;
  ResponseTimeHistogram?: HistogramEntry[];
}
export type TimeSeriesServiceStatisticsList = TimeSeriesServiceStatistics[];
export interface GetTimeSeriesServiceStatisticsResult {
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];
  ContainsOldGroupVersions?: boolean;
  NextToken?: string;
}
export interface GetTraceGraphRequest {
  TraceIds: string[];
  NextToken?: string;
}
export interface GetTraceGraphResult {
  Services?: Service[];
  NextToken?: string;
}
export interface GetTraceSegmentDestinationRequest {}
export type TraceSegmentDestination = "XRay" | "CloudWatchLogs" | (string & {});
export type TraceSegmentDestinationStatus = "PENDING" | "ACTIVE" | (string & {});
export interface GetTraceSegmentDestinationResult {
  Destination?: TraceSegmentDestination;
  Status?: TraceSegmentDestinationStatus;
}
export type TimeRangeType = "TraceId" | "Event" | "Service" | (string & {});
export type SamplingStrategyName = "PartialScan" | "FixedRate" | (string & {});
export interface SamplingStrategy {
  Name?: SamplingStrategyName;
  Value?: number;
}
export interface GetTraceSummariesRequest {
  StartTime: Date;
  EndTime: Date;
  TimeRangeType?: TimeRangeType;
  Sampling?: boolean;
  SamplingStrategy?: SamplingStrategy;
  FilterExpression?: string;
  NextToken?: string;
}
export interface Http {
  HttpURL?: string;
  HttpStatus?: number;
  HttpMethod?: string;
  UserAgent?: string;
  ClientIp?: string;
}
export type AnnotationKey = string;
export type AnnotationValue =
  | { NumberValue: number; BooleanValue?: never; StringValue?: never }
  | { NumberValue?: never; BooleanValue: boolean; StringValue?: never }
  | { NumberValue?: never; BooleanValue?: never; StringValue: string };
export type ServiceIds = ServiceId[];
export interface ValueWithServiceIds {
  AnnotationValue?: AnnotationValue;
  ServiceIds?: ServiceId[];
}
export type ValuesWithServiceIds = ValueWithServiceIds[];
export type Annotations = { [key: string]: ValueWithServiceIds[] | undefined };
export interface TraceUser {
  UserName?: string;
  ServiceIds?: ServiceId[];
}
export type TraceUsers = TraceUser[];
export interface ResourceARNDetail {
  ARN?: string;
}
export type TraceResourceARNs = ResourceARNDetail[];
export interface InstanceIdDetail {
  Id?: string;
}
export type TraceInstanceIds = InstanceIdDetail[];
export interface AvailabilityZoneDetail {
  Name?: string;
}
export type TraceAvailabilityZones = AvailabilityZoneDetail[];
export interface RootCauseException {
  Name?: string;
  Message?: string;
}
export type RootCauseExceptions = RootCauseException[];
export interface FaultRootCauseEntity {
  Name?: string;
  Exceptions?: RootCauseException[];
  Remote?: boolean;
}
export type FaultRootCauseEntityPath = FaultRootCauseEntity[];
export interface FaultRootCauseService {
  Name?: string;
  Names?: string[];
  Type?: string;
  AccountId?: string;
  EntityPath?: FaultRootCauseEntity[];
  Inferred?: boolean;
}
export type FaultRootCauseServices = FaultRootCauseService[];
export interface FaultRootCause {
  Services?: FaultRootCauseService[];
  ClientImpacting?: boolean;
}
export type FaultRootCauses = FaultRootCause[];
export interface ErrorRootCauseEntity {
  Name?: string;
  Exceptions?: RootCauseException[];
  Remote?: boolean;
}
export type ErrorRootCauseEntityPath = ErrorRootCauseEntity[];
export interface ErrorRootCauseService {
  Name?: string;
  Names?: string[];
  Type?: string;
  AccountId?: string;
  EntityPath?: ErrorRootCauseEntity[];
  Inferred?: boolean;
}
export type ErrorRootCauseServices = ErrorRootCauseService[];
export interface ErrorRootCause {
  Services?: ErrorRootCauseService[];
  ClientImpacting?: boolean;
}
export type ErrorRootCauses = ErrorRootCause[];
export interface ResponseTimeRootCauseEntity {
  Name?: string;
  Coverage?: number;
  Remote?: boolean;
}
export type ResponseTimeRootCauseEntityPath = ResponseTimeRootCauseEntity[];
export interface ResponseTimeRootCauseService {
  Name?: string;
  Names?: string[];
  Type?: string;
  AccountId?: string;
  EntityPath?: ResponseTimeRootCauseEntity[];
  Inferred?: boolean;
}
export type ResponseTimeRootCauseServices = ResponseTimeRootCauseService[];
export interface ResponseTimeRootCause {
  Services?: ResponseTimeRootCauseService[];
  ClientImpacting?: boolean;
}
export type ResponseTimeRootCauses = ResponseTimeRootCause[];
export interface TraceSummary {
  Id?: string;
  StartTime?: Date;
  Duration?: number;
  ResponseTime?: number;
  HasFault?: boolean;
  HasError?: boolean;
  HasThrottle?: boolean;
  IsPartial?: boolean;
  Http?: Http;
  Annotations?: { [key: string]: ValueWithServiceIds[] | undefined };
  Users?: TraceUser[];
  ServiceIds?: ServiceId[];
  ResourceARNs?: ResourceARNDetail[];
  InstanceIds?: InstanceIdDetail[];
  AvailabilityZones?: AvailabilityZoneDetail[];
  EntryPoint?: ServiceId;
  FaultRootCauses?: FaultRootCause[];
  ErrorRootCauses?: ErrorRootCause[];
  ResponseTimeRootCauses?: ResponseTimeRootCause[];
  Revision?: number;
  MatchedEventTime?: Date;
}
export type TraceSummaryList = TraceSummary[];
export interface GetTraceSummariesResult {
  TraceSummaries?: TraceSummary[];
  ApproximateTime?: Date;
  TracesProcessedCount?: number;
  NextToken?: string;
}
export type ResourcePolicyNextToken = string;
export interface ListResourcePoliciesRequest {
  NextToken?: string;
}
export type PolicyDocument = string;
export interface ResourcePolicy {
  PolicyName?: string;
  PolicyDocument?: string;
  PolicyRevisionId?: string;
  LastUpdatedTime?: Date;
}
export type ResourcePolicyList = ResourcePolicy[];
export interface ListResourcePoliciesResult {
  ResourcePolicies?: ResourcePolicy[];
  NextToken?: string;
}
export type TraceFormatType = "XRAY" | "OTEL" | (string & {});
export interface ListRetrievedTracesRequest {
  RetrievalToken: string;
  TraceFormat?: TraceFormatType;
  NextToken?: string;
}
export type SpanId = string;
export type SpanDocument = string;
export interface Span {
  Id?: string;
  Document?: string;
}
export type SpanList = Span[];
export interface RetrievedTrace {
  Id?: string;
  Duration?: number;
  Spans?: Span[];
}
export type TraceSpanList = RetrievedTrace[];
export interface ListRetrievedTracesResult {
  RetrievalStatus?: RetrievalStatus;
  TraceFormat?: TraceFormatType;
  Traces?: RetrievedTrace[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
  NextToken?: string;
}
export type EncryptionKeyId = string;
export interface PutEncryptionConfigRequest {
  KeyId?: string;
  Type: EncryptionType;
}
export interface PutEncryptionConfigResult {
  EncryptionConfig?: EncryptionConfig;
}
export interface PutResourcePolicyRequest {
  PolicyName: string;
  PolicyDocument: string;
  PolicyRevisionId?: string;
  BypassPolicyLockoutCheck?: boolean;
}
export interface PutResourcePolicyResult {
  ResourcePolicy?: ResourcePolicy;
}
export interface BackendConnectionErrors {
  TimeoutCount?: number;
  ConnectionRefusedCount?: number;
  HTTPCode4XXCount?: number;
  HTTPCode5XXCount?: number;
  UnknownHostCount?: number;
  OtherCount?: number;
}
export interface TelemetryRecord {
  Timestamp: Date;
  SegmentsReceivedCount?: number;
  SegmentsSentCount?: number;
  SegmentsSpilloverCount?: number;
  SegmentsRejectedCount?: number;
  BackendConnectionErrors?: BackendConnectionErrors;
}
export type TelemetryRecordList = TelemetryRecord[];
export type EC2InstanceId = string;
export type Hostname = string;
export interface PutTelemetryRecordsRequest {
  TelemetryRecords: TelemetryRecord[];
  EC2InstanceId?: string;
  Hostname?: string;
  ResourceARN?: string;
}
export interface PutTelemetryRecordsResult {}
export type TraceSegmentDocument = string;
export type TraceSegmentDocumentList = string[];
export interface PutTraceSegmentsRequest {
  TraceSegmentDocuments: string[];
}
export interface UnprocessedTraceSegment {
  Id?: string;
  ErrorCode?: string;
  Message?: string;
}
export type UnprocessedTraceSegmentList = UnprocessedTraceSegment[];
export interface PutTraceSegmentsResult {
  UnprocessedTraceSegments?: UnprocessedTraceSegment[];
}
export type TraceIdListForRetrieval = string[];
export interface StartTraceRetrievalRequest {
  TraceIds: string[];
  StartTime: Date;
  EndTime: Date;
}
export interface StartTraceRetrievalResult {
  RetrievalToken?: string;
}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateGroupRequest {
  GroupName?: string;
  GroupARN?: string;
  FilterExpression?: string;
  InsightsConfiguration?: InsightsConfiguration;
}
export interface UpdateGroupResult {
  Group?: Group;
}
export interface ProbabilisticRuleValueUpdate {
  DesiredSamplingPercentage: number;
}
export type IndexingRuleValueUpdate = { Probabilistic: ProbabilisticRuleValueUpdate };
export interface UpdateIndexingRuleRequest {
  Name: string;
  Rule: IndexingRuleValueUpdate;
}
export interface UpdateIndexingRuleResult {
  IndexingRule?: IndexingRule;
}
export interface SamplingRuleUpdate {
  RuleName?: string;
  RuleARN?: string;
  ResourceARN?: string;
  Priority?: number;
  FixedRate?: number;
  ReservoirSize?: number;
  Host?: string;
  ServiceName?: string;
  ServiceType?: string;
  HTTPMethod?: string;
  URLPath?: string;
  Attributes?: { [key: string]: string | undefined };
  SamplingRateBoost?: SamplingRateBoost;
}
export interface UpdateSamplingRuleRequest {
  SamplingRuleUpdate: SamplingRuleUpdate;
}
export interface UpdateSamplingRuleResult {
  SamplingRuleRecord?: SamplingRuleRecord;
}
export interface UpdateTraceSegmentDestinationRequest {
  Destination?: TraceSegmentDestination;
}
export interface UpdateTraceSegmentDestinationResult {
  Destination?: TraceSegmentDestination;
  Status?: TraceSegmentDestinationStatus;
}
export type ErrorMessage = string;
export type BatchGetTracesError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray.
 *
 * Retrieves a list of traces specified by ID. Each trace is a collection of segment
 * documents that originates from a single request. Use `GetTraceSummaries` to get a
 * list of trace IDs.
 */
export const batchGetTraces: API.PaginatedOperationMethod<
  BatchGetTracesRequest,
  BatchGetTracesResult,
  BatchGetTracesError,
  Credentials | HttpClient.HttpClient,
  Trace
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<BatchGetTracesRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<BatchGetTracesResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetTraces",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Traces" } as const,
})) as any;

export type CancelTraceRetrievalError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Cancels an ongoing trace retrieval job initiated by `StartTraceRetrieval` using the provided `RetrievalToken`. A successful cancellation will return an HTTP 200 response.
 */
export const cancelTraceRetrieval: API.OperationMethod<
  CancelTraceRetrievalRequest,
  CancelTraceRetrievalResult,
  CancelTraceRetrievalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<CancelTraceRetrievalRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<CancelTraceRetrievalResult>,
  errors: [InvalidRequestException, ResourceNotFoundException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelTraceRetrieval",
}));

export type CreateGroupError =
  | InvalidRequestException
  | ThrottledException
  | GroupAlreadyExists
  | CommonErrors;
/**
 * Creates a group resource with a name and a filter expression.
 */
export const createGroup: API.OperationMethod<
  CreateGroupRequest,
  CreateGroupResult,
  CreateGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<CreateGroupRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateGroupResult>,
  errors: [InvalidRequestException, ThrottledException, GroupAlreadyExists],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGroup",
}));

export type CreateSamplingRuleError =
  | InvalidRequestException
  | RuleLimitExceededException
  | ThrottledException
  | SamplingRuleAlreadyExists
  | CommonErrors;
/**
 * Creates a rule to control sampling behavior for instrumented applications. Services
 * retrieve rules with GetSamplingRules, and evaluate each rule in ascending
 * order of *priority* for each request. If a rule matches, the service
 * records a trace, borrowing it from the reservoir size. After 10 seconds, the service
 * reports back to X-Ray with GetSamplingTargets to get updated versions of
 * each in-use rule. The updated rule contains a trace quota that the service can use instead
 * of borrowing from the reservoir.
 */
export const createSamplingRule: API.OperationMethod<
  CreateSamplingRuleRequest,
  CreateSamplingRuleResult,
  CreateSamplingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<CreateSamplingRuleRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<CreateSamplingRuleResult>,
  errors: [
    InvalidRequestException,
    RuleLimitExceededException,
    ThrottledException,
    SamplingRuleAlreadyExists,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSamplingRule",
}));

export type DeleteGroupError =
  | InvalidRequestException
  | ThrottledException
  | GroupNotFound
  | CommonErrors;
/**
 * Deletes a group resource.
 */
export const deleteGroup: API.OperationMethod<
  DeleteGroupRequest,
  DeleteGroupResult,
  DeleteGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<DeleteGroupRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<DeleteGroupResult>,
  errors: [InvalidRequestException, ThrottledException, GroupNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGroup",
}));

export type DeleteResourcePolicyError =
  | InvalidPolicyRevisionIdException
  | InvalidRequestException
  | ThrottledException
  | CommonErrors;
/**
 * Deletes a resource policy from the target Amazon Web Services account.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResult,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<DeleteResourcePolicyResult>,
  errors: [InvalidPolicyRevisionIdException, InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteSamplingRuleError =
  | InvalidRequestException
  | ThrottledException
  | SamplingRuleNotFound
  | CommonErrors;
/**
 * Deletes a sampling rule.
 */
export const deleteSamplingRule: API.OperationMethod<
  DeleteSamplingRuleRequest,
  DeleteSamplingRuleResult,
  DeleteSamplingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<DeleteSamplingRuleRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<DeleteSamplingRuleResult>,
  errors: [InvalidRequestException, ThrottledException, SamplingRuleNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSamplingRule",
}));

export type GetEncryptionConfigError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves the current encryption configuration for X-Ray data.
 */
export const getEncryptionConfig: API.OperationMethod<
  GetEncryptionConfigRequest,
  GetEncryptionConfigResult,
  GetEncryptionConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<GetEncryptionConfigRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<GetEncryptionConfigResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEncryptionConfig",
}));

export type GetGroupError =
  | InvalidRequestException
  | ThrottledException
  | GroupNotFound
  | CommonErrors;
/**
 * Retrieves group resource details.
 */
export const getGroup: API.OperationMethod<
  GetGroupRequest,
  GetGroupResult,
  GetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<GetGroupRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<GetGroupResult>,
  errors: [InvalidRequestException, ThrottledException, GroupNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroup",
}));

export type GetGroupsError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves all active group details.
 */
export const getGroups: API.PaginatedOperationMethod<
  GetGroupsRequest,
  GetGroupsResult,
  GetGroupsError,
  Credentials | HttpClient.HttpClient,
  GroupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<GetGroupsRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<GetGroupsResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroups",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Groups" } as const,
})) as any;

export type GetIndexingRulesError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves all indexing rules.
 *
 * Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction Search.
 */
export const getIndexingRules: API.OperationMethod<
  GetIndexingRulesRequest,
  GetIndexingRulesResult,
  GetIndexingRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<GetIndexingRulesRequest>,
  output: __S(36, __c4, 4) as any as S.Schema<GetIndexingRulesResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIndexingRules",
}));

export type GetInsightError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves the summary information of an insight. This includes impact to clients and
 * root cause services, the top anomalous services, the category, the state of the insight,
 * and the start and end time of the insight.
 */
export const getInsight: API.OperationMethod<
  GetInsightRequest,
  GetInsightResult,
  GetInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<GetInsightRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<GetInsightResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsight",
}));

export type GetInsightEventsError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
 * event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray
 * console.
 */
export const getInsightEvents: API.PaginatedOperationMethod<
  GetInsightEventsRequest,
  GetInsightEventsResult,
  GetInsightEventsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<GetInsightEventsRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<GetInsightEventsResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsightEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetInsightImpactGraphError =
  | InvalidRequestException
  | ThrottledException
  | CommonErrors;
/**
 * Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
 * structural information. For a complete service graph, use this API with the GetServiceGraph API.
 */
export const getInsightImpactGraph: API.OperationMethod<
  GetInsightImpactGraphRequest,
  GetInsightImpactGraphResult,
  GetInsightImpactGraphError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<GetInsightImpactGraphRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<GetInsightImpactGraphResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsightImpactGraph",
}));

export type GetInsightSummariesError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves the summaries of all insights in the specified group matching the provided filter values.
 */
export const getInsightSummaries: API.PaginatedOperationMethod<
  GetInsightSummariesRequest,
  GetInsightSummariesResult,
  GetInsightSummariesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<GetInsightSummariesRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<GetInsightSummariesResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsightSummaries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetRetrievedTracesGraphError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Retrieves a service graph for traces based on the specified `RetrievalToken` from the CloudWatch log group generated by Transaction Search. This API does not initiate a retrieval job. You must first execute `StartTraceRetrieval` to obtain the required `RetrievalToken`.
 *
 * The trace graph describes services that process incoming requests and any downstream services they call, which may include Amazon Web Services resources, external APIs, or databases.
 *
 * The response is empty until the `RetrievalStatus` is *COMPLETE*. Retry the request after the status changes from *RUNNING* or *SCHEDULED* to *COMPLETE* to access the full service graph.
 *
 * When CloudWatch log is the destination, this API can support cross-account observability and service graph retrieval across linked accounts.
 *
 * For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see GetTraceGraph.
 */
export const getRetrievedTracesGraph: API.OperationMethod<
  GetRetrievedTracesGraphRequest,
  GetRetrievedTracesGraphResult,
  GetRetrievedTracesGraphError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<GetRetrievedTracesGraphRequest>,
  output: __S(74, __c9, 2) as any as S.Schema<GetRetrievedTracesGraphResult>,
  errors: [InvalidRequestException, ResourceNotFoundException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRetrievedTracesGraph",
}));

export type GetSamplingRulesError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves all sampling rules.
 */
export const getSamplingRules: API.PaginatedOperationMethod<
  GetSamplingRulesRequest,
  GetSamplingRulesResult,
  GetSamplingRulesError,
  Credentials | HttpClient.HttpClient,
  SamplingRuleRecord
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<GetSamplingRulesRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<GetSamplingRulesResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSamplingRules",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SamplingRuleRecords",
  } as const,
})) as any;

export type GetSamplingStatisticSummariesError =
  | InvalidRequestException
  | ThrottledException
  | CommonErrors;
/**
 * Retrieves information about recent sampling results for all sampling rules.
 */
export const getSamplingStatisticSummaries: API.PaginatedOperationMethod<
  GetSamplingStatisticSummariesRequest,
  GetSamplingStatisticSummariesResult,
  GetSamplingStatisticSummariesError,
  Credentials | HttpClient.HttpClient,
  SamplingStatisticSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<GetSamplingStatisticSummariesRequest>,
  output: __S(81, __c10, 1) as any as S.Schema<GetSamplingStatisticSummariesResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSamplingStatisticSummaries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SamplingStatisticSummaries",
  } as const,
})) as any;

export type GetSamplingTargetsError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Requests a sampling quota for rules that the service is using to sample requests.
 */
export const getSamplingTargets: API.OperationMethod<
  GetSamplingTargetsRequest,
  GetSamplingTargetsResult,
  GetSamplingTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<GetSamplingTargetsRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<GetSamplingTargetsResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSamplingTargets",
}));

export type GetServiceGraphError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves a document that describes services that process incoming requests, and
 * downstream services that they call as a result. Root services process incoming requests and
 * make calls to downstream services. Root services are applications that use the Amazon Web Services X-Ray SDK.
 * Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL
 * databases.
 */
export const getServiceGraph: API.PaginatedOperationMethod<
  GetServiceGraphRequest,
  GetServiceGraphResult,
  GetServiceGraphError,
  Credentials | HttpClient.HttpClient,
  Service
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<GetServiceGraphRequest>,
  output: __S(95, __c11, 7) as any as S.Schema<GetServiceGraphResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceGraph",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Services" } as const,
})) as any;

export type GetTimeSeriesServiceStatisticsError =
  | InvalidRequestException
  | ThrottledException
  | CommonErrors;
/**
 * Get an aggregation of service statistics defined by a specific time
 * range.
 */
export const getTimeSeriesServiceStatistics: API.PaginatedOperationMethod<
  GetTimeSeriesServiceStatisticsRequest,
  GetTimeSeriesServiceStatisticsResult,
  GetTimeSeriesServiceStatisticsError,
  Credentials | HttpClient.HttpClient,
  TimeSeriesServiceStatistics
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<GetTimeSeriesServiceStatisticsRequest>,
  output: __S(100, __c12, 4) as any as S.Schema<GetTimeSeriesServiceStatisticsResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTimeSeriesServiceStatistics",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TimeSeriesServiceStatistics",
  } as const,
})) as any;

export type GetTraceGraphError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves a service graph for one or more specific trace IDs.
 */
export const getTraceGraph: API.PaginatedOperationMethod<
  GetTraceGraphRequest,
  GetTraceGraphResult,
  GetTraceGraphError,
  Credentials | HttpClient.HttpClient,
  Service
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<GetTraceGraphRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<GetTraceGraphResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTraceGraph",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Services" } as const,
})) as any;

export type GetTraceSegmentDestinationError =
  | InvalidRequestException
  | ThrottledException
  | CommonErrors;
/**
 * Retrieves the current destination of data sent to `PutTraceSegments` and *OpenTelemetry protocol (OTLP)* endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see Transaction Search and OpenTelemetry.
 */
export const getTraceSegmentDestination: API.OperationMethod<
  GetTraceSegmentDestinationRequest,
  GetTraceSegmentDestinationResult,
  GetTraceSegmentDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<GetTraceSegmentDestinationRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<GetTraceSegmentDestinationResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTraceSegmentDestination",
}));

export type GetTraceSummariesError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Retrieves IDs and annotations for traces available for a specified time frame using an
 * optional filter. To get the full traces, pass the trace IDs to
 * `BatchGetTraces`.
 *
 * A filter expression can target traced requests that hit specific service nodes or
 * edges, have errors, or come from a known user. For example, the following filter expression
 * targets traces that pass through `api.example.com`:
 *
 * `service("api.example.com")`
 *
 * This filter expression finds traces that have an annotation named `account`
 * with the value `12345`:
 *
 * `annotation.account = "12345"`
 *
 * For a full list of indexed fields and keywords that you can use in filter expressions,
 * see Use filter
 * expressions in the *Amazon Web Services X-Ray Developer Guide*.
 */
export const getTraceSummaries: API.PaginatedOperationMethod<
  GetTraceSummariesRequest,
  GetTraceSummariesResult,
  GetTraceSummariesError,
  Credentials | HttpClient.HttpClient,
  TraceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<GetTraceSummariesRequest>,
  output: __S(137, __c17, 1) as any as S.Schema<GetTraceSummariesResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTraceSummaries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TraceSummaries",
  } as const,
})) as any;

export type ListResourcePoliciesError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Returns the list of resource policies in the target Amazon Web Services account.
 */
export const listResourcePolicies: API.PaginatedOperationMethod<
  ListResourcePoliciesRequest,
  ListResourcePoliciesResult,
  ListResourcePoliciesError,
  Credentials | HttpClient.HttpClient,
  ResourcePolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<ListResourcePoliciesRequest>,
  output: __S(141, __c17, 5) as any as S.Schema<ListResourcePoliciesResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourcePolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourcePolicies",
  } as const,
})) as any;

export type ListRetrievedTracesError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Retrieves a list of traces for a given `RetrievalToken` from the CloudWatch log group generated by Transaction Search. For information on what each trace returns, see BatchGetTraces.
 *
 * This API does not initiate a retrieval process. To start a trace retrieval, use `StartTraceRetrieval`, which generates the required `RetrievalToken`.
 *
 * When the `RetrievalStatus` is not *COMPLETE*, the API will return an empty response. Retry the request once the retrieval has completed to access the full list of traces.
 *
 * For cross-account observability, this API can retrieve traces from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details, see CloudWatch cross-account observability.
 *
 * For retrieving data from X-Ray directly as opposed to the Transaction Search generated log group, see BatchGetTraces.
 */
export const listRetrievedTraces: API.OperationMethod<
  ListRetrievedTracesRequest,
  ListRetrievedTracesResult,
  ListRetrievedTracesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<ListRetrievedTracesRequest>,
  output: __S(145, __c18, 1) as any as S.Schema<ListRetrievedTracesResult>,
  errors: [InvalidRequestException, ResourceNotFoundException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRetrievedTraces",
}));

export type ListTagsForResourceError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(147, __c18, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InvalidRequestException, ResourceNotFoundException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Tags" } as const,
})) as any;

export type PutEncryptionConfigError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Updates the encryption configuration for X-Ray data.
 */
export const putEncryptionConfig: API.OperationMethod<
  PutEncryptionConfigRequest,
  PutEncryptionConfigResult,
  PutEncryptionConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148, __c18, 4) as any as S.Schema<PutEncryptionConfigRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<PutEncryptionConfigResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEncryptionConfig",
}));

export type PutResourcePolicyError =
  | InvalidPolicyRevisionIdException
  | LockoutPreventionException
  | MalformedPolicyDocumentException
  | PolicyCountLimitExceededException
  | PolicySizeLimitExceededException
  | ThrottledException
  | CommonErrors;
/**
 * Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to
 * access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account.
 * Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be
 * unique within that account. The maximum size of each resource policy is 5KB.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResult,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(149, __c18, 5) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(150, __c18, 6) as any as S.Schema<PutResourcePolicyResult>,
  errors: [
    InvalidPolicyRevisionIdException,
    LockoutPreventionException,
    MalformedPolicyDocumentException,
    PolicyCountLimitExceededException,
    PolicySizeLimitExceededException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type PutTelemetryRecordsError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Used by the Amazon Web Services X-Ray daemon to upload telemetry.
 */
export const putTelemetryRecords: API.OperationMethod<
  PutTelemetryRecordsRequest,
  PutTelemetryRecordsResult,
  PutTelemetryRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<PutTelemetryRecordsRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<PutTelemetryRecordsResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTelemetryRecords",
}));

export type PutTraceSegmentsError = InvalidRequestException | ThrottledException | CommonErrors;
/**
 * Uploads segment documents to Amazon Web Services X-Ray.
 * A segment document can be a completed segment, an in-progress segment, or an array of
 * subsegments.
 *
 * Segments must include the following fields. For the full segment document schema, see
 * Amazon Web Services X-Ray
 * Segment Documents in the *Amazon Web Services X-Ray Developer Guide*.
 *
 * **Required segment document fields**
 *
 * - `name` - The name of the service that handled the request.
 *
 * - `id` - A 64-bit identifier for the segment, unique among segments in the same trace, in 16
 * hexadecimal digits.
 *
 * - `trace_id` - A unique identifier that connects all segments and subsegments originating from
 * a single client request.
 *
 * - `start_time` - Time the segment or subsegment was created, in floating point seconds in
 * epoch time, accurate to milliseconds. For example, `1480615200.010` or
 * `1.480615200010E9`.
 *
 * - `end_time` - Time the segment or subsegment was closed. For example,
 * `1480615200.090` or `1.480615200090E9`. Specify either an `end_time` or
 * `in_progress`.
 *
 * - `in_progress` - Set to `true` instead of specifying an `end_time` to
 * record that a segment has been started, but is not complete. Send an in-progress segment when your application
 * receives a request that will take a long time to serve, to trace that the request was received. When the
 * response is sent, send the complete segment to overwrite the in-progress segment.
 *
 * A `trace_id` consists of three numbers separated by hyphens. For example,
 * 1-58406520-a006649127e371903a2de979. For trace IDs created by an X-Ray SDK, or by Amazon Web Services services
 * integrated with X-Ray, a trace ID includes:
 *
 * **Trace ID Format**
 *
 * - The version number, for instance, `1`.
 *
 * - The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For
 * example, 10:00AM December 2nd, 2016 PST in epoch time is `1480615200` seconds,
 * or `58406520` in hexadecimal.
 *
 * - A 96-bit identifier for the trace, globally unique, in 24 hexadecimal
 * digits.
 *
 * Trace IDs created via OpenTelemetry have a different format based on the
 * W3C Trace Context specification.
 * A W3C trace ID must be formatted in the X-Ray trace ID format when sending to X-Ray. For example, a W3C
 * trace ID `4efaaf4d1e8720b39541901950019ee5` should be formatted as
 * `1-4efaaf4d-1e8720b39541901950019ee5` when sending to X-Ray. While X-Ray trace IDs include
 * the original request timestamp in Unix epoch time, this is not required or validated.
 */
export const putTraceSegments: API.OperationMethod<
  PutTraceSegmentsRequest,
  PutTraceSegmentsResult,
  PutTraceSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<PutTraceSegmentsRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<PutTraceSegmentsResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTraceSegments",
}));

export type StartTraceRetrievalError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Initiates a trace retrieval process using the specified time range and for the given trace IDs in the Transaction Search generated CloudWatch log group. For more information, see Transaction Search.
 *
 * API returns a `RetrievalToken`, which can be used with `ListRetrievedTraces` or `GetRetrievedTracesGraph` to fetch results. Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple retrievals.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to retrieve data from a linked source account, as long as both accounts have transaction search enabled.
 *
 * For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.
 */
export const startTraceRetrieval: API.OperationMethod<
  StartTraceRetrievalRequest,
  StartTraceRetrievalResult,
  StartTraceRetrievalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<StartTraceRetrievalRequest>,
  output: __S(160, __c20, 0) as any as S.Schema<StartTraceRetrievalResult>,
  errors: [InvalidRequestException, ResourceNotFoundException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTraceRetrieval",
}));

export type TagResourceError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | TooManyTagsException
  | CommonErrors;
/**
 * Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<TagResourceResponse>,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottledException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system
 * tags (those with an `aws:` prefix).
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<UntagResourceRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<UntagResourceResponse>,
  errors: [InvalidRequestException, ResourceNotFoundException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateGroupError =
  | InvalidRequestException
  | ThrottledException
  | GroupNotFound
  | CommonErrors;
/**
 * Updates a group resource.
 */
export const updateGroup: API.OperationMethod<
  UpdateGroupRequest,
  UpdateGroupResult,
  UpdateGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<UpdateGroupRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<UpdateGroupResult>,
  errors: [InvalidRequestException, ThrottledException, GroupNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGroup",
}));

export type UpdateIndexingRuleError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Modifies an indexing rule's configuration.
 *
 * Indexing rules are used for determining the sampling rate for spans indexed from CloudWatch Logs. For more information, see Transaction Search.
 */
export const updateIndexingRule: API.OperationMethod<
  UpdateIndexingRuleRequest,
  UpdateIndexingRuleResult,
  UpdateIndexingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<UpdateIndexingRuleRequest>,
  output: __S(167, __c20, 7) as any as S.Schema<UpdateIndexingRuleResult>,
  errors: [InvalidRequestException, ResourceNotFoundException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIndexingRule",
}));

export type UpdateSamplingRuleError =
  | InvalidRequestException
  | ThrottledException
  | SamplingRuleNotFound
  | CommonErrors;
/**
 * Modifies a sampling rule's configuration.
 */
export const updateSamplingRule: API.OperationMethod<
  UpdateSamplingRuleRequest,
  UpdateSamplingRuleResult,
  UpdateSamplingRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<UpdateSamplingRuleRequest>,
  output: __S(20, __c2, 4) as any as S.Schema<UpdateSamplingRuleResult>,
  errors: [InvalidRequestException, ThrottledException, SamplingRuleNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSamplingRule",
}));

export type UpdateTraceSegmentDestinationError =
  | InvalidRequestException
  | ThrottledException
  | CommonErrors;
/**
 * Modifies the destination of data sent to `PutTraceSegments`. The Transaction Search feature requires the CloudWatchLogs destination. For more information, see Transaction Search.
 */
export const updateTraceSegmentDestination: API.OperationMethod<
  UpdateTraceSegmentDestinationRequest,
  UpdateTraceSegmentDestinationResult,
  UpdateTraceSegmentDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<UpdateTraceSegmentDestinationRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<UpdateTraceSegmentDestinationResult>,
  errors: [InvalidRequestException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTraceSegmentDestination",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ TraceIds: __S(0, __c0, 0), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/Traces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetTracesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Document: S.optional(S.String) }),
      ).annotate({ identifier: "Segment" });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Duration: S.optional(S.Number),
          LimitExceeded: S.optional(S.Boolean),
          Segments: S.optional(__S(3, __c0, 3)),
        }),
      ).annotate({ identifier: "Trace" });
    case 5:
      return S.Array(__S(4, __c0, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Traces: S.optional(__S(5, __c0, 5)),
          UnprocessedTraceIds: S.optional(__S(0, __c0, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchGetTracesResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ RetrievalToken: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CancelTraceRetrieval" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelTraceRetrievalRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelTraceRetrievalResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InsightsEnabled: S.optional(S.Boolean),
          NotificationsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "InsightsConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          FilterExpression: S.optional(S.String),
          InsightsConfiguration: S.optional(__S(9, __c1, 1)),
          Tags: S.optional(__S(11, __c1, 3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateGroup" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateGroupRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          GroupARN: S.optional(S.String),
          FilterExpression: S.optional(S.String),
          InsightsConfiguration: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "Group" });
    case 6:
      return S.suspend(() => S.Struct({ Group: S.optional(__S(13, __c1, 5)) })).annotate({
        identifier: "CreateGroupResult",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MaxRate: S.Number, CooldownWindowMinutes: S.Number }),
      ).annotate({ identifier: "SamplingRateBoost" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleARN: S.optional(S.String),
          ResourceARN: S.String,
          Priority: S.Number,
          FixedRate: S.Number,
          ReservoirSize: S.Number,
          ServiceName: S.String,
          ServiceType: S.String,
          Host: S.String,
          HTTPMethod: S.String,
          URLPath: S.String,
          Version: S.Number,
          Attributes: S.optional(__S(15, __c1, 7)),
          SamplingRateBoost: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "SamplingRule" });
    case 2:
      return S.suspend(() =>
        S.Struct({ SamplingRule: __S(17, __c2, 1), Tags: S.optional(__S(11, __c1, 3)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateSamplingRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSamplingRuleRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SamplingRule: S.optional(__S(17, __c2, 1)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SamplingRuleRecord" });
    case 4:
      return S.suspend(() =>
        S.Struct({ SamplingRuleRecord: S.optional(__S(19, __c2, 3)) }),
      ).annotate({ identifier: "CreateSamplingRuleResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), GroupARN: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteGroup" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ PolicyName: S.String, PolicyRevisionId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteResourcePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RuleName: S.optional(S.String), RuleARN: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteSamplingRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSamplingRuleRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/EncryptionConfig" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetEncryptionConfigRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          KeyId: S.optional(S.String),
          Status: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "EncryptionConfig" });
    case 2:
      return S.suspend(() => S.Struct({ EncryptionConfig: S.optional(__S(25, __c3, 1)) })).annotate(
        {
          identifier: "GetEncryptionConfigResult",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), GroupARN: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetGroup" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGroupRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/Groups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGroupsRequest" });
    case 5:
      return S.Array(__S(13, __c1, 5));
    case 6:
      return S.suspend(() =>
        S.Struct({ Groups: S.optional(__S(29, __c3, 5)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetGroupsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetIndexingRules" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIndexingRulesRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DesiredSamplingPercentage: S.Number,
          ActualSamplingPercentage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ProbabilisticRuleValue" });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ Probabilistic: __S(32, __c4, 0) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Rule: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "IndexingRule" });
    case 3:
      return S.Array(__S(34, __c4, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ IndexingRules: S.optional(__S(35, __c4, 3)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetIndexingRulesResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ InsightId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/Insight" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetInsightRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Names: S.optional(__S(0, __c0, 0)),
          AccountId: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceId" });
    case 7:
      return S.Array(S.String);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FaultCount: S.optional(S.Number),
          OkCount: S.optional(S.Number),
          TotalCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RequestImpactStatistics" });
    case 1:
      return S.suspend(() => S.Struct({ ServiceId: S.optional(__S(38, __c4, 6)) })).annotate({
        identifier: "AnomalousService",
      });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.optional(S.String),
          GroupARN: S.optional(S.String),
          GroupName: S.optional(S.String),
          RootCauseServiceId: S.optional(__S(38, __c4, 6)),
          Categories: S.optional(__S(39, __c4, 7)),
          State: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Summary: S.optional(S.String),
          ClientRequestImpactStatistics: S.optional(__S(40, __c5, 0)),
          RootCauseServiceRequestImpactStatistics: S.optional(__S(40, __c5, 0)),
          TopAnomalousServices: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({ identifier: "Insight" });
    case 4:
      return S.suspend(() => S.Struct({ Insight: S.optional(__S(43, __c5, 3)) })).annotate({
        identifier: "GetInsightResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/InsightEvents" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetInsightEventsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Summary: S.optional(S.String),
          EventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ClientRequestImpactStatistics: S.optional(__S(40, __c5, 0)),
          RootCauseServiceRequestImpactStatistics: S.optional(__S(40, __c5, 0)),
          TopAnomalousServices: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({ identifier: "InsightEvent" });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ InsightEvents: S.optional(__S(47, __c5, 7)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetInsightEventsResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/InsightImpactGraph" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetInsightImpactGraphRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ReferenceId: S.optional(S.Number) })).annotate({
        identifier: "InsightImpactGraphEdge",
      });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReferenceId: S.optional(S.Number),
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          Names: S.optional(__S(0, __c0, 0)),
          AccountId: S.optional(S.String),
          Edges: S.optional(__S(51, __c6, 3)),
        }),
      ).annotate({
        identifier: "InsightImpactGraphService",
      });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ServiceGraphStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ServiceGraphEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Services: S.optional(__S(53, __c6, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetInsightImpactGraphResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          States: S.optional(__S(39, __c4, 7)),
          GroupARN: S.optional(S.String),
          GroupName: S.optional(S.String),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/InsightSummaries" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInsightSummariesRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.optional(S.String),
          GroupARN: S.optional(S.String),
          GroupName: S.optional(S.String),
          RootCauseServiceId: S.optional(__S(38, __c4, 6)),
          Categories: S.optional(__S(39, __c4, 7)),
          State: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Summary: S.optional(S.String),
          ClientRequestImpactStatistics: S.optional(__S(40, __c5, 0)),
          RootCauseServiceRequestImpactStatistics: S.optional(__S(40, __c5, 0)),
          TopAnomalousServices: S.optional(__S(42, __c5, 2)),
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "InsightSummary" });
    case 1:
      return S.Array(__S(56, __c7, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          InsightSummaries: S.optional(__S(57, __c7, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetInsightSummariesResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RetrievalToken: S.String, NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetRetrievedTracesGraph" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRetrievedTracesGraphRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ThrottleCount: S.optional(S.Number),
          OtherCount: S.optional(S.Number),
          TotalCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ErrorStatistics" });
    case 5:
      return S.suspend(() =>
        S.Struct({ OtherCount: S.optional(S.Number), TotalCount: S.optional(S.Number) }),
      ).annotate({ identifier: "FaultStatistics" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OkCount: S.optional(S.Number),
          ErrorStatistics: S.optional(__S(60, __c7, 4)),
          FaultStatistics: S.optional(__S(61, __c7, 5)),
          TotalCount: S.optional(S.Number),
          TotalResponseTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EdgeStatistics" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.Number), Count: S.optional(S.Number) }),
      ).annotate({ identifier: "HistogramEntry" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Names: S.optional(__S(0, __c0, 0)),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Alias" });
    case 2:
      return S.Array(__S(65, __c8, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReferenceId: S.optional(S.Number),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SummaryStatistics: S.optional(__S(62, __c7, 6)),
          ResponseTimeHistogram: S.optional(__S(64, __c8, 0)),
          Aliases: S.optional(__S(66, __c8, 2)),
          EdgeType: S.optional(S.String),
          ReceivedEventAgeHistogram: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({ identifier: "Edge" });
    case 4:
      return S.Array(__S(67, __c8, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReferenceId: S.optional(S.Number),
          Name: S.optional(S.String),
          Names: S.optional(__S(0, __c0, 0)),
          Root: S.optional(S.Boolean),
          AccountId: S.optional(S.String),
          Type: S.optional(S.String),
          State: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Edges: S.optional(__S(68, __c8, 4)),
          SummaryStatistics: S.optional(__S(62, __c7, 6)),
          DurationHistogram: S.optional(__S(64, __c8, 0)),
          ResponseTimeHistogram: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({ identifier: "Service" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReferenceType: S.optional(S.String),
          SourceTraceId: S.optional(S.String),
          DestinationTraceIds: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "GraphLink" });
    case 7:
      return S.Array(__S(70, __c8, 6));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Service: S.optional(__S(69, __c8, 5)), Links: S.optional(__S(71, __c8, 7)) }),
      ).annotate({ identifier: "RetrievedService" });
    case 1:
      return S.Array(__S(72, __c9, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          RetrievalStatus: S.optional(S.String),
          Services: S.optional(__S(73, __c9, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetRetrievedTracesGraphResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetSamplingRules" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSamplingRulesRequest" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SamplingRuleRecords: S.optional(__S(76, __c9, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetSamplingRulesResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/SamplingStatisticSummaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSamplingStatisticSummariesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RequestCount: S.optional(S.Number),
          BorrowCount: S.optional(S.Number),
          SampledCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SamplingStatisticSummary" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79, __c9, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          SamplingStatisticSummaries: S.optional(__S(80, __c10, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSamplingStatisticSummariesResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.String,
          ClientID: S.String,
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          RequestCount: S.Number,
          SampledCount: S.Number,
          BorrowCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SamplingStatisticsDocument",
      });
    case 3:
      return S.Array(__S(82, __c10, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.String,
          ServiceName: S.String,
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          AnomalyCount: S.Number,
          TotalCount: S.Number,
          SampledAnomalyCount: S.Number,
        }),
      ).annotate({
        identifier: "SamplingBoostStatisticsDocument",
      });
    case 5:
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          SamplingStatisticsDocuments: __S(83, __c10, 3),
          SamplingBoostStatisticsDocuments: S.optional(__S(85, __c10, 5)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/SamplingTargets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSamplingTargetsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BoostRate: S.Number,
          BoostRateTTL: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "SamplingBoost" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          FixedRate: S.optional(S.Number),
          ReservoirQuota: S.optional(S.Number),
          ReservoirQuotaTTL: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Interval: S.optional(S.Number),
          SamplingBoost: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({ identifier: "SamplingTargetDocument" });
    case 1:
      return S.Array(__S(88, __c11, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "UnprocessedStatistics" });
    case 3:
      return S.Array(__S(90, __c11, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          SamplingTargetDocuments: S.optional(__S(89, __c11, 1)),
          LastRuleModification: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UnprocessedStatistics: S.optional(__S(91, __c11, 3)),
          UnprocessedBoostStatistics: S.optional(__S(91, __c11, 3)),
        }),
      ).annotate({ identifier: "GetSamplingTargetsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          GroupName: S.optional(S.String),
          GroupARN: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ServiceGraph" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetServiceGraphRequest" });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Services: S.optional(__S(94, __c11, 6)),
          ContainsOldGroupVersions: S.optional(S.Boolean),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetServiceGraphResult" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          GroupName: S.optional(S.String),
          GroupARN: S.optional(S.String),
          EntitySelectorExpression: S.optional(S.String),
          Period: S.optional(S.Number),
          ForecastStatistics: S.optional(S.Boolean),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/TimeSeriesServiceStatistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTimeSeriesServiceStatisticsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ FaultCountHigh: S.optional(S.Number), FaultCountLow: S.optional(S.Number) }),
      ).annotate({ identifier: "ForecastStatistics" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EdgeSummaryStatistics: S.optional(__S(62, __c7, 6)),
          ServiceSummaryStatistics: S.optional(__S(62, __c7, 6)),
          ServiceForecastStatistics: S.optional(__S(97, __c12, 1)),
          ResponseTimeHistogram: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({
        identifier: "TimeSeriesServiceStatistics",
      });
    case 3:
      return S.Array(__S(98, __c12, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          TimeSeriesServiceStatistics: S.optional(__S(99, __c12, 3)),
          ContainsOldGroupVersions: S.optional(S.Boolean),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTimeSeriesServiceStatisticsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TraceIds: __S(0, __c0, 0), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TraceGraph" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTraceGraphRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Services: S.optional(__S(94, __c11, 6)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetTraceGraphResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTraceSegmentDestination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTraceSegmentDestinationRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Destination: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTraceSegmentDestinationResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.Number) }),
      ).annotate({ identifier: "SamplingStrategy" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          TimeRangeType: S.optional(S.String),
          Sampling: S.optional(S.Boolean),
          SamplingStrategy: S.optional(__S(105, __c13, 1)),
          FilterExpression: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TraceSummaries" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTraceSummariesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          HttpURL: S.optional(S.String),
          HttpStatus: S.optional(S.Number),
          HttpMethod: S.optional(S.String),
          UserAgent: S.optional(S.String),
          ClientIp: S.optional(S.String),
        }),
      ).annotate({ identifier: "Http" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ NumberValue: S.Number }),
        /*@__PURE__*/ S.Struct({ BooleanValue: S.Boolean }),
        /*@__PURE__*/ S.Struct({ StringValue: S.String }),
      ]);
    case 5:
      return S.Array(__S(38, __c4, 6));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AnnotationValue: S.optional(__S(108, __c13, 4)),
          ServiceIds: S.optional(__S(109, __c13, 5)),
        }),
      ).annotate({ identifier: "ValueWithServiceIds" });
    case 7:
      return S.Array(__S(110, __c13, 6));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(111, __c13, 7).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), ServiceIds: S.optional(__S(109, __c13, 5)) }),
      ).annotate({ identifier: "TraceUser" });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.suspend(() => S.Struct({ ARN: S.optional(S.String) })).annotate({
        identifier: "ResourceARNDetail",
      });
    case 4:
      return S.Array(__S(115, __c14, 3));
    case 5:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "InstanceIdDetail",
      });
    case 6:
      return S.Array(__S(117, __c14, 5));
    case 7:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "AvailabilityZoneDetail",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119, __c14, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "RootCauseException" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Exceptions: S.optional(__S(122, __c15, 2)),
          Remote: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FaultRootCauseEntity" });
    case 4:
      return S.Array(__S(123, __c15, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Names: S.optional(__S(0, __c0, 0)),
          Type: S.optional(S.String),
          AccountId: S.optional(S.String),
          EntityPath: S.optional(__S(124, __c15, 4)),
          Inferred: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FaultRootCauseService" });
    case 6:
      return S.Array(__S(125, __c15, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Services: S.optional(__S(126, __c15, 6)),
          ClientImpacting: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FaultRootCause" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Coverage: S.optional(S.Number),
          Remote: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ResponseTimeRootCauseEntity",
      });
    case 2:
      return S.Array(__S(129, __c16, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Names: S.optional(__S(0, __c0, 0)),
          Type: S.optional(S.String),
          AccountId: S.optional(S.String),
          EntityPath: S.optional(__S(130, __c16, 2)),
          Inferred: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ResponseTimeRootCauseService",
      });
    case 4:
      return S.Array(__S(131, __c16, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Services: S.optional(__S(132, __c16, 4)),
          ClientImpacting: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ResponseTimeRootCause" });
    case 6:
      return S.Array(__S(133, __c16, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Duration: S.optional(S.Number),
          ResponseTime: S.optional(S.Number),
          HasFault: S.optional(S.Boolean),
          HasError: S.optional(S.Boolean),
          HasThrottle: S.optional(S.Boolean),
          IsPartial: S.optional(S.Boolean),
          Http: S.optional(__S(107, __c13, 3)),
          Annotations: S.optional(__S(112, __c14, 0)),
          Users: S.optional(__S(114, __c14, 2)),
          ServiceIds: S.optional(__S(109, __c13, 5)),
          ResourceARNs: S.optional(__S(116, __c14, 4)),
          InstanceIds: S.optional(__S(118, __c14, 6)),
          AvailabilityZones: S.optional(__S(120, __c15, 0)),
          EntryPoint: S.optional(__S(38, __c4, 6)),
          FaultRootCauses: S.optional(__S(128, __c16, 0)),
          ErrorRootCauses: S.optional(__S(128, __c16, 0)),
          ResponseTimeRootCauses: S.optional(__S(134, __c16, 6)),
          Revision: S.optional(S.Number),
          MatchedEventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TraceSummary" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          TraceSummaries: S.optional(__S(136, __c17, 0)),
          ApproximateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TracesProcessedCount: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetTraceSummariesResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListResourcePolicies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourcePoliciesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.optional(S.String),
          PolicyDocument: S.optional(S.String),
          PolicyRevisionId: S.optional(S.String),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ResourcePolicy" });
    case 4:
      return S.Array(__S(139, __c17, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourcePolicies: S.optional(__S(140, __c17, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourcePoliciesResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RetrievalToken: S.String,
          TraceFormat: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListRetrievedTraces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRetrievedTracesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Duration: S.optional(S.Number),
          Spans: S.optional(__S(3, __c0, 3)),
        }),
      ).annotate({ identifier: "RetrievedTrace" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          RetrievalStatus: S.optional(S.String),
          TraceFormat: S.optional(S.String),
          Traces: S.optional(__S(144, __c18, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRetrievedTracesResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTagsForResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(__S(11, __c1, 3)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ KeyId: S.optional(S.String), Type: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutEncryptionConfig" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutEncryptionConfigRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.String,
          PolicyDocument: S.String,
          PolicyRevisionId: S.optional(S.String),
          BypassPolicyLockoutCheck: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutResourcePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 6:
      return S.suspend(() => S.Struct({ ResourcePolicy: S.optional(__S(139, __c17, 3)) })).annotate(
        {
          identifier: "PutResourcePolicyResult",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          TimeoutCount: S.optional(S.Number),
          ConnectionRefusedCount: S.optional(S.Number),
          HTTPCode4XXCount: S.optional(S.Number),
          HTTPCode5XXCount: S.optional(S.Number),
          UnknownHostCount: S.optional(S.Number),
          OtherCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BackendConnectionErrors" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          SegmentsReceivedCount: S.optional(S.Number),
          SegmentsSentCount: S.optional(S.Number),
          SegmentsSpilloverCount: S.optional(S.Number),
          SegmentsRejectedCount: S.optional(S.Number),
          BackendConnectionErrors: S.optional(__S(151, __c18, 7)),
        }),
      ).annotate({ identifier: "TelemetryRecord" });
    case 1:
      return S.Array(__S(152, __c19, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          TelemetryRecords: __S(153, __c19, 1),
          EC2InstanceId: S.optional(S.String),
          Hostname: S.optional(S.String),
          ResourceARN: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TelemetryRecords" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutTelemetryRecordsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TraceSegmentDocuments: __S(0, __c0, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TraceSegments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutTraceSegmentsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "UnprocessedTraceSegment" });
    case 5:
      return S.Array(__S(156, __c19, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ UnprocessedTraceSegments: S.optional(__S(157, __c19, 5)) }),
      ).annotate({ identifier: "PutTraceSegmentsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TraceIds: __S(0, __c0, 0),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartTraceRetrieval" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTraceRetrievalRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RetrievalToken: S.optional(S.String) })).annotate({
        identifier: "StartTraceRetrievalResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(11, __c1, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(0, __c0, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          GroupARN: S.optional(S.String),
          FilterExpression: S.optional(S.String),
          InsightsConfiguration: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateGroup" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateGroupRequest" });
    case 4:
      return S.suspend(() => S.Struct({ DesiredSamplingPercentage: S.Number })).annotate({
        identifier: "ProbabilisticRuleValueUpdate",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ Probabilistic: __S(164, __c20, 4) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Rule: __S(165, __c20, 5) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateIndexingRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIndexingRuleRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ IndexingRule: S.optional(__S(34, __c4, 2)) })).annotate({
        identifier: "UpdateIndexingRuleResult",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleARN: S.optional(S.String),
          ResourceARN: S.optional(S.String),
          Priority: S.optional(S.Number),
          FixedRate: S.optional(S.Number),
          ReservoirSize: S.optional(S.Number),
          Host: S.optional(S.String),
          ServiceName: S.optional(S.String),
          ServiceType: S.optional(S.String),
          HTTPMethod: S.optional(S.String),
          URLPath: S.optional(S.String),
          Attributes: S.optional(__S(15, __c1, 7)),
          SamplingRateBoost: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "SamplingRuleUpdate" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SamplingRuleUpdate: __S(168, __c21, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateSamplingRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSamplingRuleRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Destination: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateTraceSegmentDestination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTraceSegmentDestinationRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
