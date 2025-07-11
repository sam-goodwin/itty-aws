import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSXRay {
  batchGetTraces(
    input: BatchGetTracesRequest,
  ): Effect.Effect<
    BatchGetTracesResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  cancelTraceRetrieval(
    input: CancelTraceRetrievalRequest,
  ): Effect.Effect<
    CancelTraceRetrievalResult,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  createSamplingRule(
    input: CreateSamplingRuleRequest,
  ): Effect.Effect<
    CreateSamplingRuleResult,
    | InvalidRequestException
    | RuleLimitExceededException
    | ThrottledException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    DeleteGroupResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResult,
    | InvalidPolicyRevisionIdException
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError
  >;
  deleteSamplingRule(
    input: DeleteSamplingRuleRequest,
  ): Effect.Effect<
    DeleteSamplingRuleResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getEncryptionConfig(
    input: GetEncryptionConfigRequest,
  ): Effect.Effect<
    GetEncryptionConfigResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getGroup(
    input: GetGroupRequest,
  ): Effect.Effect<
    GetGroupResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getGroups(
    input: GetGroupsRequest,
  ): Effect.Effect<
    GetGroupsResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getIndexingRules(
    input: GetIndexingRulesRequest,
  ): Effect.Effect<
    GetIndexingRulesResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getInsight(
    input: GetInsightRequest,
  ): Effect.Effect<
    GetInsightResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getInsightEvents(
    input: GetInsightEventsRequest,
  ): Effect.Effect<
    GetInsightEventsResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getInsightImpactGraph(
    input: GetInsightImpactGraphRequest,
  ): Effect.Effect<
    GetInsightImpactGraphResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getInsightSummaries(
    input: GetInsightSummariesRequest,
  ): Effect.Effect<
    GetInsightSummariesResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getRetrievedTracesGraph(
    input: GetRetrievedTracesGraphRequest,
  ): Effect.Effect<
    GetRetrievedTracesGraphResult,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError
  >;
  getSamplingRules(
    input: GetSamplingRulesRequest,
  ): Effect.Effect<
    GetSamplingRulesResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getSamplingStatisticSummaries(
    input: GetSamplingStatisticSummariesRequest,
  ): Effect.Effect<
    GetSamplingStatisticSummariesResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getSamplingTargets(
    input: GetSamplingTargetsRequest,
  ): Effect.Effect<
    GetSamplingTargetsResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getServiceGraph(
    input: GetServiceGraphRequest,
  ): Effect.Effect<
    GetServiceGraphResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getTimeSeriesServiceStatistics(
    input: GetTimeSeriesServiceStatisticsRequest,
  ): Effect.Effect<
    GetTimeSeriesServiceStatisticsResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getTraceGraph(
    input: GetTraceGraphRequest,
  ): Effect.Effect<
    GetTraceGraphResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getTraceSegmentDestination(
    input: GetTraceSegmentDestinationRequest,
  ): Effect.Effect<
    GetTraceSegmentDestinationResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  getTraceSummaries(
    input: GetTraceSummariesRequest,
  ): Effect.Effect<
    GetTraceSummariesResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  listResourcePolicies(
    input: ListResourcePoliciesRequest,
  ): Effect.Effect<
    ListResourcePoliciesResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  listRetrievedTraces(
    input: ListRetrievedTracesRequest,
  ): Effect.Effect<
    ListRetrievedTracesResult,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError
  >;
  putEncryptionConfig(
    input: PutEncryptionConfigRequest,
  ): Effect.Effect<
    PutEncryptionConfigResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResult,
    | InvalidPolicyRevisionIdException
    | LockoutPreventionException
    | MalformedPolicyDocumentException
    | PolicyCountLimitExceededException
    | PolicySizeLimitExceededException
    | ThrottledException
    | CommonAwsError
  >;
  putTelemetryRecords(
    input: PutTelemetryRecordsRequest,
  ): Effect.Effect<
    PutTelemetryRecordsResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  putTraceSegments(
    input: PutTraceSegmentsRequest,
  ): Effect.Effect<
    PutTraceSegmentsResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  startTraceRetrieval(
    input: StartTraceRetrievalRequest,
  ): Effect.Effect<
    StartTraceRetrievalResult,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    UpdateGroupResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  updateIndexingRule(
    input: UpdateIndexingRuleRequest,
  ): Effect.Effect<
    UpdateIndexingRuleResult,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError
  >;
  updateSamplingRule(
    input: UpdateSamplingRuleRequest,
  ): Effect.Effect<
    UpdateSamplingRuleResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
  updateTraceSegmentDestination(
    input: UpdateTraceSegmentDestinationRequest,
  ): Effect.Effect<
    UpdateTraceSegmentDestinationResult,
    InvalidRequestException | ThrottledException | CommonAwsError
  >;
}

export type Xray = AWSXRay;

export interface Alias {
  Name?: string;
  Names?: Array<string>;
  Type?: string;
}
export type AliasList = Array<Alias>;
export type AliasNames = Array<string>;
export type AmazonResourceName = string;

export type AnnotationKey = string;

export type Annotations = Record<string, Array<ValueWithServiceIds>>;
export type AnnotationValue =
  | { NumberValue: number }
  | { BooleanValue: boolean }
  | { StringValue: string };
export interface AnomalousService {
  ServiceId?: ServiceId;
}
export type AnomalousServiceList = Array<AnomalousService>;
export type AttributeKey = string;

export type AttributeMap = Record<string, string>;
export type AttributeValue = string;

export interface AvailabilityZoneDetail {
  Name?: string;
}
export interface BackendConnectionErrors {
  TimeoutCount?: number;
  ConnectionRefusedCount?: number;
  HTTPCode4XXCount?: number;
  HTTPCode5XXCount?: number;
  UnknownHostCount?: number;
  OtherCount?: number;
}
export interface BatchGetTracesRequest {
  TraceIds: Array<string>;
  NextToken?: string;
}
export interface BatchGetTracesResult {
  Traces?: Array<Trace>;
  UnprocessedTraceIds?: Array<string>;
  NextToken?: string;
}
export type XrayBoolean = boolean;

export type BorrowCount = number;

export interface CancelTraceRetrievalRequest {
  RetrievalToken: string;
}
export interface CancelTraceRetrievalResult {}
export type ClientID = string;

export interface CreateGroupRequest {
  GroupName: string;
  FilterExpression?: string;
  InsightsConfiguration?: InsightsConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateGroupResult {
  Group?: Group;
}
export interface CreateSamplingRuleRequest {
  SamplingRule: SamplingRule;
  Tags?: Array<Tag>;
}
export interface CreateSamplingRuleResult {
  SamplingRuleRecord?: SamplingRuleRecord;
}
export interface DeleteGroupRequest {
  GroupName?: string;
  GroupARN?: string;
}
export interface DeleteGroupResult {}
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
export type Double = number;

export type EC2InstanceId = string;

export interface Edge {
  ReferenceId?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
  SummaryStatistics?: EdgeStatistics;
  ResponseTimeHistogram?: Array<HistogramEntry>;
  Aliases?: Array<Alias>;
  EdgeType?: string;
  ReceivedEventAgeHistogram?: Array<HistogramEntry>;
}
export type EdgeList = Array<Edge>;
export interface EdgeStatistics {
  OkCount?: number;
  ErrorStatistics?: ErrorStatistics;
  FaultStatistics?: FaultStatistics;
  TotalCount?: number;
  TotalResponseTime?: number;
}
export interface EncryptionConfig {
  KeyId?: string;
  Status?: EncryptionStatus;
  Type?: EncryptionType;
}
export type EncryptionKeyId = string;

export type EncryptionStatus = "UPDATING" | "ACTIVE";
export type EncryptionType = "NONE" | "KMS";
export type EntitySelectorExpression = string;

export type ErrorMessage = string;

export interface ErrorRootCause {
  Services?: Array<ErrorRootCauseService>;
  ClientImpacting?: boolean;
}
export interface ErrorRootCauseEntity {
  Name?: string;
  Exceptions?: Array<RootCauseException>;
  Remote?: boolean;
}
export type ErrorRootCauseEntityPath = Array<ErrorRootCauseEntity>;
export type ErrorRootCauses = Array<ErrorRootCause>;
export interface ErrorRootCauseService {
  Name?: string;
  Names?: Array<string>;
  Type?: string;
  AccountId?: string;
  EntityPath?: Array<ErrorRootCauseEntity>;
  Inferred?: boolean;
}
export type ErrorRootCauseServices = Array<ErrorRootCauseService>;
export interface ErrorStatistics {
  ThrottleCount?: number;
  OtherCount?: number;
  TotalCount?: number;
}
export type EventSummaryText = string;

export interface FaultRootCause {
  Services?: Array<FaultRootCauseService>;
  ClientImpacting?: boolean;
}
export interface FaultRootCauseEntity {
  Name?: string;
  Exceptions?: Array<RootCauseException>;
  Remote?: boolean;
}
export type FaultRootCauseEntityPath = Array<FaultRootCauseEntity>;
export type FaultRootCauses = Array<FaultRootCause>;
export interface FaultRootCauseService {
  Name?: string;
  Names?: Array<string>;
  Type?: string;
  AccountId?: string;
  EntityPath?: Array<FaultRootCauseEntity>;
  Inferred?: boolean;
}
export type FaultRootCauseServices = Array<FaultRootCauseService>;
export interface FaultStatistics {
  OtherCount?: number;
  TotalCount?: number;
}
export type FilterExpression = string;

export type FixedRate = number;

export interface ForecastStatistics {
  FaultCountHigh?: number;
  FaultCountLow?: number;
}
export interface GetEncryptionConfigRequest {}
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
export interface GetGroupsResult {
  Groups?: Array<GroupSummary>;
  NextToken?: string;
}
export interface GetIndexingRulesRequest {
  NextToken?: string;
}
export interface GetIndexingRulesResult {
  IndexingRules?: Array<IndexingRule>;
  NextToken?: string;
}
export type GetInsightEventsMaxResults = number;

export interface GetInsightEventsRequest {
  InsightId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetInsightEventsResult {
  InsightEvents?: Array<InsightEvent>;
  NextToken?: string;
}
export interface GetInsightImpactGraphRequest {
  InsightId: string;
  StartTime: Date | string;
  EndTime: Date | string;
  NextToken?: string;
}
export interface GetInsightImpactGraphResult {
  InsightId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  ServiceGraphStartTime?: Date | string;
  ServiceGraphEndTime?: Date | string;
  Services?: Array<InsightImpactGraphService>;
  NextToken?: string;
}
export interface GetInsightRequest {
  InsightId: string;
}
export interface GetInsightResult {
  Insight?: Insight;
}
export type GetInsightSummariesMaxResults = number;

export interface GetInsightSummariesRequest {
  States?: Array<InsightState>;
  GroupARN?: string;
  GroupName?: string;
  StartTime: Date | string;
  EndTime: Date | string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetInsightSummariesResult {
  InsightSummaries?: Array<InsightSummary>;
  NextToken?: string;
}
export interface GetRetrievedTracesGraphRequest {
  RetrievalToken: string;
  NextToken?: string;
}
export interface GetRetrievedTracesGraphResult {
  RetrievalStatus?: RetrievalStatus;
  Services?: Array<RetrievedService>;
  NextToken?: string;
}
export interface GetSamplingRulesRequest {
  NextToken?: string;
}
export interface GetSamplingRulesResult {
  SamplingRuleRecords?: Array<SamplingRuleRecord>;
  NextToken?: string;
}
export interface GetSamplingStatisticSummariesRequest {
  NextToken?: string;
}
export interface GetSamplingStatisticSummariesResult {
  SamplingStatisticSummaries?: Array<SamplingStatisticSummary>;
  NextToken?: string;
}
export interface GetSamplingTargetsRequest {
  SamplingStatisticsDocuments: Array<SamplingStatisticsDocument>;
}
export interface GetSamplingTargetsResult {
  SamplingTargetDocuments?: Array<SamplingTargetDocument>;
  LastRuleModification?: Date | string;
  UnprocessedStatistics?: Array<UnprocessedStatistics>;
}
export interface GetServiceGraphRequest {
  StartTime: Date | string;
  EndTime: Date | string;
  GroupName?: string;
  GroupARN?: string;
  NextToken?: string;
}
export interface GetServiceGraphResult {
  StartTime?: Date | string;
  EndTime?: Date | string;
  Services?: Array<Service>;
  ContainsOldGroupVersions?: boolean;
  NextToken?: string;
}
export interface GetTimeSeriesServiceStatisticsRequest {
  StartTime: Date | string;
  EndTime: Date | string;
  GroupName?: string;
  GroupARN?: string;
  EntitySelectorExpression?: string;
  Period?: number;
  ForecastStatistics?: boolean;
  NextToken?: string;
}
export interface GetTimeSeriesServiceStatisticsResult {
  TimeSeriesServiceStatistics?: Array<TimeSeriesServiceStatistics>;
  ContainsOldGroupVersions?: boolean;
  NextToken?: string;
}
export interface GetTraceGraphRequest {
  TraceIds: Array<string>;
  NextToken?: string;
}
export interface GetTraceGraphResult {
  Services?: Array<Service>;
  NextToken?: string;
}
export interface GetTraceSegmentDestinationRequest {}
export interface GetTraceSegmentDestinationResult {
  Destination?: TraceSegmentDestination;
  Status?: TraceSegmentDestinationStatus;
}
export interface GetTraceSummariesRequest {
  StartTime: Date | string;
  EndTime: Date | string;
  TimeRangeType?: TimeRangeType;
  Sampling?: boolean;
  SamplingStrategy?: SamplingStrategy;
  FilterExpression?: string;
  NextToken?: string;
}
export interface GetTraceSummariesResult {
  TraceSummaries?: Array<TraceSummary>;
  ApproximateTime?: Date | string;
  TracesProcessedCount?: number;
  NextToken?: string;
}
export interface GraphLink {
  ReferenceType?: string;
  SourceTraceId?: string;
  DestinationTraceIds?: Array<string>;
}
export interface Group {
  GroupName?: string;
  GroupARN?: string;
  FilterExpression?: string;
  InsightsConfiguration?: InsightsConfiguration;
}
export type GroupARN = string;

export type GroupName = string;

export interface GroupSummary {
  GroupName?: string;
  GroupARN?: string;
  FilterExpression?: string;
  InsightsConfiguration?: InsightsConfiguration;
}
export type GroupSummaryList = Array<GroupSummary>;
export type Histogram = Array<HistogramEntry>;
export interface HistogramEntry {
  Value?: number;
  Count?: number;
}
export type Host = string;

export type Hostname = string;

export interface Http {
  HttpURL?: string;
  HttpStatus?: number;
  HttpMethod?: string;
  UserAgent?: string;
  ClientIp?: string;
}
export type HTTPMethod = string;

export interface IndexingRule {
  Name?: string;
  ModifiedAt?: Date | string;
  Rule?: IndexingRuleValue;
}
export type IndexingRuleList = Array<IndexingRule>;
export type IndexingRuleValue = { Probabilistic: ProbabilisticRuleValue };
export type IndexingRuleValueUpdate = {
  Probabilistic: ProbabilisticRuleValueUpdate;
};
export interface Insight {
  InsightId?: string;
  GroupARN?: string;
  GroupName?: string;
  RootCauseServiceId?: ServiceId;
  Categories?: Array<InsightCategory>;
  State?: InsightState;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Summary?: string;
  ClientRequestImpactStatistics?: RequestImpactStatistics;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  TopAnomalousServices?: Array<AnomalousService>;
}
export type InsightCategory = "FAULT";
export type InsightCategoryList = Array<InsightCategory>;
export interface InsightEvent {
  Summary?: string;
  EventTime?: Date | string;
  ClientRequestImpactStatistics?: RequestImpactStatistics;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  TopAnomalousServices?: Array<AnomalousService>;
}
export type InsightEventList = Array<InsightEvent>;
export type InsightId = string;

export interface InsightImpactGraphEdge {
  ReferenceId?: number;
}
export type InsightImpactGraphEdgeList = Array<InsightImpactGraphEdge>;
export interface InsightImpactGraphService {
  ReferenceId?: number;
  Type?: string;
  Name?: string;
  Names?: Array<string>;
  AccountId?: string;
  Edges?: Array<InsightImpactGraphEdge>;
}
export type InsightImpactGraphServiceList = Array<InsightImpactGraphService>;
export interface InsightsConfiguration {
  InsightsEnabled?: boolean;
  NotificationsEnabled?: boolean;
}
export type InsightState = "ACTIVE" | "CLOSED";
export type InsightStateList = Array<InsightState>;
export interface InsightSummary {
  InsightId?: string;
  GroupARN?: string;
  GroupName?: string;
  RootCauseServiceId?: ServiceId;
  Categories?: Array<InsightCategory>;
  State?: InsightState;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Summary?: string;
  ClientRequestImpactStatistics?: RequestImpactStatistics;
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  TopAnomalousServices?: Array<AnomalousService>;
  LastUpdateTime?: Date | string;
}
export type InsightSummaryList = Array<InsightSummary>;
export type InsightSummaryText = string;

export interface InstanceIdDetail {
  Id?: string;
}
export type Integer = number;

export declare class InvalidPolicyRevisionIdException extends EffectData.TaggedError(
  "InvalidPolicyRevisionIdException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type LinksList = Array<GraphLink>;
export interface ListResourcePoliciesRequest {
  NextToken?: string;
}
export interface ListResourcePoliciesResult {
  ResourcePolicies?: Array<ResourcePolicy>;
  NextToken?: string;
}
export interface ListRetrievedTracesRequest {
  RetrievalToken: string;
  TraceFormat?: TraceFormatType;
  NextToken?: string;
}
export interface ListRetrievedTracesResult {
  RetrievalStatus?: RetrievalStatus;
  TraceFormat?: TraceFormatType;
  Traces?: Array<RetrievedTrace>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export declare class LockoutPreventionException extends EffectData.TaggedError(
  "LockoutPreventionException",
)<{
  readonly Message?: string;
}> {}
export declare class MalformedPolicyDocumentException extends EffectData.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly Message?: string;
}> {}
export type NullableBoolean = boolean;

export type NullableDouble = number;

export type NullableInteger = number;

export type NullableLong = number;

export declare class PolicyCountLimitExceededException extends EffectData.TaggedError(
  "PolicyCountLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type PolicyDocument = string;

export type PolicyName = string;

export type PolicyRevisionId = string;

export declare class PolicySizeLimitExceededException extends EffectData.TaggedError(
  "PolicySizeLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type Priority = number;

export interface ProbabilisticRuleValue {
  DesiredSamplingPercentage: number;
  ActualSamplingPercentage?: number;
}
export interface ProbabilisticRuleValueUpdate {
  DesiredSamplingPercentage: number;
}
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
export interface PutTelemetryRecordsRequest {
  TelemetryRecords: Array<TelemetryRecord>;
  EC2InstanceId?: string;
  Hostname?: string;
  ResourceARN?: string;
}
export interface PutTelemetryRecordsResult {}
export interface PutTraceSegmentsRequest {
  TraceSegmentDocuments: Array<string>;
}
export interface PutTraceSegmentsResult {
  UnprocessedTraceSegments?: Array<UnprocessedTraceSegment>;
}
export type RequestCount = number;

export interface RequestImpactStatistics {
  FaultCount?: number;
  OkCount?: number;
  TotalCount?: number;
}
export type ReservoirSize = number;

export type ResourceARN = string;

export interface ResourceARNDetail {
  ARN?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface ResourcePolicy {
  PolicyName?: string;
  PolicyDocument?: string;
  PolicyRevisionId?: string;
  LastUpdatedTime?: Date | string;
}
export type ResourcePolicyList = Array<ResourcePolicy>;
export type ResourcePolicyNextToken = string;

export interface ResponseTimeRootCause {
  Services?: Array<ResponseTimeRootCauseService>;
  ClientImpacting?: boolean;
}
export interface ResponseTimeRootCauseEntity {
  Name?: string;
  Coverage?: number;
  Remote?: boolean;
}
export type ResponseTimeRootCauseEntityPath =
  Array<ResponseTimeRootCauseEntity>;
export type ResponseTimeRootCauses = Array<ResponseTimeRootCause>;
export interface ResponseTimeRootCauseService {
  Name?: string;
  Names?: Array<string>;
  Type?: string;
  AccountId?: string;
  EntityPath?: Array<ResponseTimeRootCauseEntity>;
  Inferred?: boolean;
}
export type ResponseTimeRootCauseServices = Array<ResponseTimeRootCauseService>;
export type RetrievalStatus =
  | "SCHEDULED"
  | "RUNNING"
  | "COMPLETE"
  | "FAILED"
  | "CANCELLED"
  | "TIMEOUT";
export type RetrievalToken = string;

export interface RetrievedService {
  Service?: Service;
  Links?: Array<GraphLink>;
}
export type RetrievedServicesList = Array<RetrievedService>;
export interface RetrievedTrace {
  Id?: string;
  Duration?: number;
  Spans?: Array<Span>;
}
export interface RootCauseException {
  Name?: string;
  Message?: string;
}
export type RootCauseExceptions = Array<RootCauseException>;
export declare class RuleLimitExceededException extends EffectData.TaggedError(
  "RuleLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type RuleName = string;

export type SampledCount = number;

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
  Attributes?: Record<string, string>;
}
export interface SamplingRuleRecord {
  SamplingRule?: SamplingRule;
  CreatedAt?: Date | string;
  ModifiedAt?: Date | string;
}
export type SamplingRuleRecordList = Array<SamplingRuleRecord>;
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
  Attributes?: Record<string, string>;
}
export interface SamplingStatisticsDocument {
  RuleName: string;
  ClientID: string;
  Timestamp: Date | string;
  RequestCount: number;
  SampledCount: number;
  BorrowCount?: number;
}
export type SamplingStatisticsDocumentList = Array<SamplingStatisticsDocument>;
export interface SamplingStatisticSummary {
  RuleName?: string;
  Timestamp?: Date | string;
  RequestCount?: number;
  BorrowCount?: number;
  SampledCount?: number;
}
export type SamplingStatisticSummaryList = Array<SamplingStatisticSummary>;
export interface SamplingStrategy {
  Name?: SamplingStrategyName;
  Value?: number;
}
export type SamplingStrategyName = "PartialScan" | "FixedRate";
export interface SamplingTargetDocument {
  RuleName?: string;
  FixedRate?: number;
  ReservoirQuota?: number;
  ReservoirQuotaTTL?: Date | string;
  Interval?: number;
}
export type SamplingTargetDocumentList = Array<SamplingTargetDocument>;
export interface Segment {
  Id?: string;
  Document?: string;
}
export type SegmentDocument = string;

export type SegmentId = string;

export type SegmentList = Array<Segment>;
export interface Service {
  ReferenceId?: number;
  Name?: string;
  Names?: Array<string>;
  Root?: boolean;
  AccountId?: string;
  Type?: string;
  State?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Edges?: Array<Edge>;
  SummaryStatistics?: ServiceStatistics;
  DurationHistogram?: Array<HistogramEntry>;
  ResponseTimeHistogram?: Array<HistogramEntry>;
}
export interface ServiceId {
  Name?: string;
  Names?: Array<string>;
  AccountId?: string;
  Type?: string;
}
export type ServiceIds = Array<ServiceId>;
export type ServiceList = Array<Service>;
export type ServiceName = string;

export type ServiceNames = Array<string>;
export interface ServiceStatistics {
  OkCount?: number;
  ErrorStatistics?: ErrorStatistics;
  FaultStatistics?: FaultStatistics;
  TotalCount?: number;
  TotalResponseTime?: number;
}
export type ServiceType = string;

export interface Span {
  Id?: string;
  Document?: string;
}
export type SpanDocument = string;

export type SpanId = string;

export type SpanList = Array<Span>;
export interface StartTraceRetrievalRequest {
  TraceIds: Array<string>;
  StartTime: Date | string;
  EndTime: Date | string;
}
export interface StartTraceRetrievalResult {
  RetrievalToken?: string;
}
export type XrayString = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TelemetryRecord {
  Timestamp: Date | string;
  SegmentsReceivedCount?: number;
  SegmentsSentCount?: number;
  SegmentsSpilloverCount?: number;
  SegmentsRejectedCount?: number;
  BackendConnectionErrors?: BackendConnectionErrors;
}
export type TelemetryRecordList = Array<TelemetryRecord>;
export declare class ThrottledException extends EffectData.TaggedError(
  "ThrottledException",
)<{
  readonly Message?: string;
}> {}
export type TimeRangeType = "TraceId" | "Event" | "Service";
export interface TimeSeriesServiceStatistics {
  Timestamp?: Date | string;
  EdgeSummaryStatistics?: EdgeStatistics;
  ServiceSummaryStatistics?: ServiceStatistics;
  ServiceForecastStatistics?: ForecastStatistics;
  ResponseTimeHistogram?: Array<HistogramEntry>;
}
export type TimeSeriesServiceStatisticsList =
  Array<TimeSeriesServiceStatistics>;
export type Timestamp = Date | string;

export type Token = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface Trace {
  Id?: string;
  Duration?: number;
  LimitExceeded?: boolean;
  Segments?: Array<Segment>;
}
export type TraceAvailabilityZones = Array<AvailabilityZoneDetail>;
export type TraceFormatType = "XRAY" | "OTEL";
export type TraceId = string;

export type TraceIdList = Array<string>;
export type TraceIdListForRetrieval = Array<string>;
export type TraceInstanceIds = Array<InstanceIdDetail>;
export type TraceList = Array<Trace>;
export type TraceResourceARNs = Array<ResourceARNDetail>;
export type TraceSegmentDestination = "XRay" | "CloudWatchLogs";
export type TraceSegmentDestinationStatus = "PENDING" | "ACTIVE";
export type TraceSegmentDocument = string;

export type TraceSegmentDocumentList = Array<string>;
export type TraceSpanList = Array<RetrievedTrace>;
export interface TraceSummary {
  Id?: string;
  StartTime?: Date | string;
  Duration?: number;
  ResponseTime?: number;
  HasFault?: boolean;
  HasError?: boolean;
  HasThrottle?: boolean;
  IsPartial?: boolean;
  Http?: Http;
  Annotations?: Record<string, Array<ValueWithServiceIds>>;
  Users?: Array<TraceUser>;
  ServiceIds?: Array<ServiceId>;
  ResourceARNs?: Array<ResourceARNDetail>;
  InstanceIds?: Array<InstanceIdDetail>;
  AvailabilityZones?: Array<AvailabilityZoneDetail>;
  EntryPoint?: ServiceId;
  FaultRootCauses?: Array<FaultRootCause>;
  ErrorRootCauses?: Array<ErrorRootCause>;
  ResponseTimeRootCauses?: Array<ResponseTimeRootCause>;
  Revision?: number;
  MatchedEventTime?: Date | string;
}
export type TraceSummaryList = Array<TraceSummary>;
export interface TraceUser {
  UserName?: string;
  ServiceIds?: Array<ServiceId>;
}
export type TraceUsers = Array<TraceUser>;
export interface UnprocessedStatistics {
  RuleName?: string;
  ErrorCode?: string;
  Message?: string;
}
export type UnprocessedStatisticsList = Array<UnprocessedStatistics>;
export type UnprocessedTraceIdList = Array<string>;
export interface UnprocessedTraceSegment {
  Id?: string;
  ErrorCode?: string;
  Message?: string;
}
export type UnprocessedTraceSegmentList = Array<UnprocessedTraceSegment>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
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
export interface UpdateIndexingRuleRequest {
  Name: string;
  Rule: IndexingRuleValueUpdate;
}
export interface UpdateIndexingRuleResult {
  IndexingRule?: IndexingRule;
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
export type URLPath = string;

export type ValuesWithServiceIds = Array<ValueWithServiceIds>;
export interface ValueWithServiceIds {
  AnnotationValue?: AnnotationValue;
  ServiceIds?: Array<ServiceId>;
}
export type Version = number;

export declare namespace BatchGetTraces {
  export type Input = BatchGetTracesRequest;
  export type Output = BatchGetTracesResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace CancelTraceRetrieval {
  export type Input = CancelTraceRetrievalRequest;
  export type Output = CancelTraceRetrievalResult;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = CreateGroupResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace CreateSamplingRule {
  export type Input = CreateSamplingRuleRequest;
  export type Output = CreateSamplingRuleResult;
  export type Error =
    | InvalidRequestException
    | RuleLimitExceededException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = DeleteGroupResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResult;
  export type Error =
    | InvalidPolicyRevisionIdException
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace DeleteSamplingRule {
  export type Input = DeleteSamplingRuleRequest;
  export type Output = DeleteSamplingRuleResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetEncryptionConfig {
  export type Input = GetEncryptionConfigRequest;
  export type Output = GetEncryptionConfigResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetGroup {
  export type Input = GetGroupRequest;
  export type Output = GetGroupResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetGroups {
  export type Input = GetGroupsRequest;
  export type Output = GetGroupsResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetIndexingRules {
  export type Input = GetIndexingRulesRequest;
  export type Output = GetIndexingRulesResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetInsight {
  export type Input = GetInsightRequest;
  export type Output = GetInsightResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetInsightEvents {
  export type Input = GetInsightEventsRequest;
  export type Output = GetInsightEventsResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetInsightImpactGraph {
  export type Input = GetInsightImpactGraphRequest;
  export type Output = GetInsightImpactGraphResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetInsightSummaries {
  export type Input = GetInsightSummariesRequest;
  export type Output = GetInsightSummariesResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetRetrievedTracesGraph {
  export type Input = GetRetrievedTracesGraphRequest;
  export type Output = GetRetrievedTracesGraphResult;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetSamplingRules {
  export type Input = GetSamplingRulesRequest;
  export type Output = GetSamplingRulesResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetSamplingStatisticSummaries {
  export type Input = GetSamplingStatisticSummariesRequest;
  export type Output = GetSamplingStatisticSummariesResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetSamplingTargets {
  export type Input = GetSamplingTargetsRequest;
  export type Output = GetSamplingTargetsResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetServiceGraph {
  export type Input = GetServiceGraphRequest;
  export type Output = GetServiceGraphResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetTimeSeriesServiceStatistics {
  export type Input = GetTimeSeriesServiceStatisticsRequest;
  export type Output = GetTimeSeriesServiceStatisticsResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetTraceGraph {
  export type Input = GetTraceGraphRequest;
  export type Output = GetTraceGraphResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetTraceSegmentDestination {
  export type Input = GetTraceSegmentDestinationRequest;
  export type Output = GetTraceSegmentDestinationResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace GetTraceSummaries {
  export type Input = GetTraceSummariesRequest;
  export type Output = GetTraceSummariesResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace ListResourcePolicies {
  export type Input = ListResourcePoliciesRequest;
  export type Output = ListResourcePoliciesResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace ListRetrievedTraces {
  export type Input = ListRetrievedTracesRequest;
  export type Output = ListRetrievedTracesResult;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace PutEncryptionConfig {
  export type Input = PutEncryptionConfigRequest;
  export type Output = PutEncryptionConfigResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResult;
  export type Error =
    | InvalidPolicyRevisionIdException
    | LockoutPreventionException
    | MalformedPolicyDocumentException
    | PolicyCountLimitExceededException
    | PolicySizeLimitExceededException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace PutTelemetryRecords {
  export type Input = PutTelemetryRecordsRequest;
  export type Output = PutTelemetryRecordsResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace PutTraceSegments {
  export type Input = PutTraceSegmentsRequest;
  export type Output = PutTraceSegmentsResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace StartTraceRetrieval {
  export type Input = StartTraceRetrievalRequest;
  export type Output = StartTraceRetrievalResult;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = UpdateGroupResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace UpdateIndexingRule {
  export type Input = UpdateIndexingRuleRequest;
  export type Output = UpdateIndexingRuleResult;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace UpdateSamplingRule {
  export type Input = UpdateSamplingRuleRequest;
  export type Output = UpdateSamplingRuleResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}

export declare namespace UpdateTraceSegmentDestination {
  export type Input = UpdateTraceSegmentDestinationRequest;
  export type Output = UpdateTraceSegmentDestinationResult;
  export type Error =
    | InvalidRequestException
    | ThrottledException
    | CommonAwsError;
}
