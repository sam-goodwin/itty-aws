import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface GraniteServiceVersion20100801 {
  deleteAlarms(
    input: DeleteAlarmsInput,
  ): Effect.Effect<{}, ResourceNotFound | CommonAwsError>;
  deleteAnomalyDetector(
    input: DeleteAnomalyDetectorInput,
  ): Effect.Effect<
    DeleteAnomalyDetectorOutput,
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteDashboards(
    input: DeleteDashboardsInput,
  ): Effect.Effect<
    DeleteDashboardsOutput,
    | ConflictException
    | DashboardNotFoundError
    | InternalServiceFault
    | InvalidParameterValueException
    | CommonAwsError
  >;
  deleteInsightRules(
    input: DeleteInsightRulesInput,
  ): Effect.Effect<
    DeleteInsightRulesOutput,
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  deleteMetricStream(
    input: DeleteMetricStreamInput,
  ): Effect.Effect<
    DeleteMetricStreamOutput,
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  describeAlarmHistory(
    input: DescribeAlarmHistoryInput,
  ): Effect.Effect<
    DescribeAlarmHistoryOutput,
    InvalidNextToken | CommonAwsError
  >;
  describeAlarms(
    input: DescribeAlarmsInput,
  ): Effect.Effect<DescribeAlarmsOutput, InvalidNextToken | CommonAwsError>;
  describeAlarmsForMetric(
    input: DescribeAlarmsForMetricInput,
  ): Effect.Effect<DescribeAlarmsForMetricOutput, CommonAwsError>;
  describeAnomalyDetectors(
    input: DescribeAnomalyDetectorsInput,
  ): Effect.Effect<
    DescribeAnomalyDetectorsOutput,
    | InternalServiceFault
    | InvalidNextToken
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError
  >;
  describeInsightRules(
    input: DescribeInsightRulesInput,
  ): Effect.Effect<
    DescribeInsightRulesOutput,
    InvalidNextToken | CommonAwsError
  >;
  disableAlarmActions(
    input: DisableAlarmActionsInput,
  ): Effect.Effect<{}, CommonAwsError>;
  disableInsightRules(
    input: DisableInsightRulesInput,
  ): Effect.Effect<
    DisableInsightRulesOutput,
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  enableAlarmActions(
    input: EnableAlarmActionsInput,
  ): Effect.Effect<{}, CommonAwsError>;
  enableInsightRules(
    input: EnableInsightRulesInput,
  ): Effect.Effect<
    EnableInsightRulesOutput,
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  getDashboard(
    input: GetDashboardInput,
  ): Effect.Effect<
    GetDashboardOutput,
    | DashboardNotFoundError
    | InternalServiceFault
    | InvalidParameterValueException
    | CommonAwsError
  >;
  getInsightRuleReport(
    input: GetInsightRuleReportInput,
  ): Effect.Effect<
    GetInsightRuleReportOutput,
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getMetricData(
    input: GetMetricDataInput,
  ): Effect.Effect<GetMetricDataOutput, InvalidNextToken | CommonAwsError>;
  getMetricStatistics(
    input: GetMetricStatisticsInput,
  ): Effect.Effect<
    GetMetricStatisticsOutput,
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  getMetricStream(
    input: GetMetricStreamInput,
  ): Effect.Effect<
    GetMetricStreamOutput,
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getMetricWidgetImage(
    input: GetMetricWidgetImageInput,
  ): Effect.Effect<GetMetricWidgetImageOutput, CommonAwsError>;
  listDashboards(
    input: ListDashboardsInput,
  ): Effect.Effect<
    ListDashboardsOutput,
    InternalServiceFault | InvalidParameterValueException | CommonAwsError
  >;
  listManagedInsightRules(
    input: ListManagedInsightRulesInput,
  ): Effect.Effect<
    ListManagedInsightRulesOutput,
    | InvalidNextToken
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  listMetrics(
    input: ListMetricsInput,
  ): Effect.Effect<
    ListMetricsOutput,
    InternalServiceFault | InvalidParameterValueException | CommonAwsError
  >;
  listMetricStreams(
    input: ListMetricStreamsInput,
  ): Effect.Effect<
    ListMetricStreamsOutput,
    | InternalServiceFault
    | InvalidNextToken
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putAnomalyDetector(
    input: PutAnomalyDetectorInput,
  ): Effect.Effect<
    PutAnomalyDetectorOutput,
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  putCompositeAlarm(
    input: PutCompositeAlarmInput,
  ): Effect.Effect<{}, LimitExceededFault | CommonAwsError>;
  putDashboard(
    input: PutDashboardInput,
  ): Effect.Effect<
    PutDashboardOutput,
    | ConflictException
    | DashboardInvalidInputError
    | InternalServiceFault
    | CommonAwsError
  >;
  putInsightRule(
    input: PutInsightRuleInput,
  ): Effect.Effect<
    PutInsightRuleOutput,
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  putManagedInsightRules(
    input: PutManagedInsightRulesInput,
  ): Effect.Effect<
    PutManagedInsightRulesOutput,
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  putMetricAlarm(
    input: PutMetricAlarmInput,
  ): Effect.Effect<{}, LimitExceededFault | CommonAwsError>;
  putMetricData(
    input: PutMetricDataInput,
  ): Effect.Effect<
    {},
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  putMetricStream(
    input: PutMetricStreamInput,
  ): Effect.Effect<
    PutMetricStreamOutput,
    | ConcurrentModificationException
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  setAlarmState(
    input: SetAlarmStateInput,
  ): Effect.Effect<{}, InvalidFormatFault | ResourceNotFound | CommonAwsError>;
  startMetricStreams(
    input: StartMetricStreamsInput,
  ): Effect.Effect<
    StartMetricStreamsOutput,
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  stopMetricStreams(
    input: StopMetricStreamsInput,
  ): Effect.Effect<
    StopMetricStreamsOutput,
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | ConcurrentModificationException
    | ConflictException
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | ConcurrentModificationException
    | ConflictException
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Cloudwatch = GraniteServiceVersion20100801;

export type AccountId = string;

export type ActionPrefix = string;

export type ActionsEnabled = boolean;

export type ActionsSuppressedBy = "WaitPeriod" | "ExtensionPeriod" | "Alarm";
export type ActionsSuppressedReason = string;

export type AlarmArn = string;

export type AlarmDescription = string;

export interface AlarmHistoryItem {
  AlarmName?: string;
  AlarmType?: AlarmType;
  Timestamp?: Date | string;
  HistoryItemType?: HistoryItemType;
  HistorySummary?: string;
  HistoryData?: string;
}
export type AlarmHistoryItems = Array<AlarmHistoryItem>;
export type AlarmName = string;

export type AlarmNamePrefix = string;

export type AlarmNames = Array<string>;
export type AlarmRule = string;

export type AlarmType = "CompositeAlarm" | "MetricAlarm";
export type AlarmTypes = Array<AlarmType>;
export type AmazonResourceName = string;

export interface AnomalyDetector {
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<Dimension>;
  Stat?: string;
  Configuration?: AnomalyDetectorConfiguration;
  StateValue?: AnomalyDetectorStateValue;
  MetricCharacteristics?: MetricCharacteristics;
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
}
export interface AnomalyDetectorConfiguration {
  ExcludedTimeRanges?: Array<Range>;
  MetricTimezone?: string;
}
export type AnomalyDetectorExcludedTimeRanges = Array<Range>;
export type AnomalyDetectorMetricStat = string;

export type AnomalyDetectorMetricTimezone = string;

export type AnomalyDetectors = Array<AnomalyDetector>;
export type AnomalyDetectorStateValue =
  | "PENDING_TRAINING"
  | "TRAINED_INSUFFICIENT_DATA"
  | "TRAINED";
export type AnomalyDetectorType = "SINGLE_METRIC" | "METRIC_MATH";
export type AnomalyDetectorTypes = Array<AnomalyDetectorType>;
export type AwsQueryErrorMessage = string;

export type BatchFailures = Array<PartialFailure>;
export type ComparisonOperator =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "LessThanThreshold"
  | "LessThanOrEqualToThreshold"
  | "LessThanLowerOrGreaterThanUpperThreshold"
  | "LessThanLowerThreshold"
  | "GreaterThanUpperThreshold";
export interface CompositeAlarm {
  ActionsEnabled?: boolean;
  AlarmActions?: Array<string>;
  AlarmArn?: string;
  AlarmConfigurationUpdatedTimestamp?: Date | string;
  AlarmDescription?: string;
  AlarmName?: string;
  AlarmRule?: string;
  InsufficientDataActions?: Array<string>;
  OKActions?: Array<string>;
  StateReason?: string;
  StateReasonData?: string;
  StateUpdatedTimestamp?: Date | string;
  StateValue?: StateValue;
  StateTransitionedTimestamp?: Date | string;
  ActionsSuppressedBy?: ActionsSuppressedBy;
  ActionsSuppressedReason?: string;
  ActionsSuppressor?: string;
  ActionsSuppressorWaitPeriod?: number;
  ActionsSuppressorExtensionPeriod?: number;
}
export type CompositeAlarms = Array<CompositeAlarm>;
export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type Counts = Array<number>;
export type DashboardArn = string;

export type DashboardBody = string;

export type DashboardEntries = Array<DashboardEntry>;
export interface DashboardEntry {
  DashboardName?: string;
  DashboardArn?: string;
  LastModified?: Date | string;
  Size?: number;
}
export type DashboardErrorMessage = string;

export declare class DashboardInvalidInputError extends Data.TaggedError(
  "DashboardInvalidInputError",
)<{
  readonly message?: string;
  readonly dashboardValidationMessages?: Array<DashboardValidationMessage>;
}> {}
export type DashboardName = string;

export type DashboardNamePrefix = string;

export type DashboardNames = Array<string>;
export declare class DashboardNotFoundError extends Data.TaggedError(
  "DashboardNotFoundError",
)<{
  readonly message?: string;
}> {}
export interface DashboardValidationMessage {
  DataPath?: string;
  Message?: string;
}
export type DashboardValidationMessages = Array<DashboardValidationMessage>;
export type DataPath = string;

export interface Datapoint {
  Timestamp?: Date | string;
  SampleCount?: number;
  Average?: number;
  Sum?: number;
  Minimum?: number;
  Maximum?: number;
  Unit?: StandardUnit;
  ExtendedStatistics?: Record<string, number>;
}
export type Datapoints = Array<Datapoint>;
export type DatapointsToAlarm = number;

export type DatapointValue = number;

export type DatapointValueMap = Record<string, number>;
export type DatapointValues = Array<number>;
export interface DeleteAlarmsInput {
  AlarmNames: Array<string>;
}
export interface DeleteAnomalyDetectorInput {
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<Dimension>;
  Stat?: string;
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
}
export interface DeleteAnomalyDetectorOutput {}
export interface DeleteDashboardsInput {
  DashboardNames: Array<string>;
}
export interface DeleteDashboardsOutput {}
export interface DeleteInsightRulesInput {
  RuleNames: Array<string>;
}
export interface DeleteInsightRulesOutput {
  Failures?: Array<PartialFailure>;
}
export interface DeleteMetricStreamInput {
  Name: string;
}
export interface DeleteMetricStreamOutput {}
export interface DescribeAlarmHistoryInput {
  AlarmName?: string;
  AlarmTypes?: Array<AlarmType>;
  HistoryItemType?: HistoryItemType;
  StartDate?: Date | string;
  EndDate?: Date | string;
  MaxRecords?: number;
  NextToken?: string;
  ScanBy?: ScanBy;
}
export interface DescribeAlarmHistoryOutput {
  AlarmHistoryItems?: Array<AlarmHistoryItem>;
  NextToken?: string;
}
export interface DescribeAlarmsForMetricInput {
  MetricName: string;
  Namespace: string;
  Statistic?: Statistic;
  ExtendedStatistic?: string;
  Dimensions?: Array<Dimension>;
  Period?: number;
  Unit?: StandardUnit;
}
export interface DescribeAlarmsForMetricOutput {
  MetricAlarms?: Array<MetricAlarm>;
}
export interface DescribeAlarmsInput {
  AlarmNames?: Array<string>;
  AlarmNamePrefix?: string;
  AlarmTypes?: Array<AlarmType>;
  ChildrenOfAlarmName?: string;
  ParentsOfAlarmName?: string;
  StateValue?: StateValue;
  ActionPrefix?: string;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeAlarmsOutput {
  CompositeAlarms?: Array<CompositeAlarm>;
  MetricAlarms?: Array<MetricAlarm>;
  NextToken?: string;
}
export interface DescribeAnomalyDetectorsInput {
  NextToken?: string;
  MaxResults?: number;
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<Dimension>;
  AnomalyDetectorTypes?: Array<AnomalyDetectorType>;
}
export interface DescribeAnomalyDetectorsOutput {
  AnomalyDetectors?: Array<AnomalyDetector>;
  NextToken?: string;
}
export interface DescribeInsightRulesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeInsightRulesOutput {
  NextToken?: string;
  InsightRules?: Array<InsightRule>;
}
export interface Dimension {
  Name: string;
  Value: string;
}
export interface DimensionFilter {
  Name: string;
  Value?: string;
}
export type DimensionFilters = Array<DimensionFilter>;
export type DimensionName = string;

export type Dimensions = Array<Dimension>;
export type DimensionValue = string;

export interface DisableAlarmActionsInput {
  AlarmNames: Array<string>;
}
export interface DisableInsightRulesInput {
  RuleNames: Array<string>;
}
export interface DisableInsightRulesOutput {
  Failures?: Array<PartialFailure>;
}
export interface EnableAlarmActionsInput {
  AlarmNames: Array<string>;
}
export interface EnableInsightRulesInput {
  RuleNames: Array<string>;
}
export interface EnableInsightRulesOutput {
  Failures?: Array<PartialFailure>;
}
export interface Entity {
  KeyAttributes?: Record<string, string>;
  Attributes?: Record<string, string>;
}
export type EntityAttributesMap = Record<string, string>;
export type EntityAttributesMapKeyString = string;

export type EntityAttributesMapValueString = string;

export type EntityKeyAttributesMap = Record<string, string>;
export type EntityKeyAttributesMapKeyString = string;

export type EntityKeyAttributesMapValueString = string;

export interface EntityMetricData {
  Entity?: Entity;
  MetricData?: Array<MetricDatum>;
}
export type EntityMetricDataList = Array<EntityMetricData>;
export type ErrorMessage = string;

export type EvaluateLowSampleCountPercentile = string;

export type EvaluationPeriods = number;

export type EvaluationState = "PARTIAL_DATA";
export type ExceptionType = string;

export type ExtendedStatistic = string;

export type ExtendedStatistics = Array<string>;
export type FailureCode = string;

export type FailureDescription = string;

export type FailureResource = string;

export type FaultDescription = string;

export interface GetDashboardInput {
  DashboardName: string;
}
export interface GetDashboardOutput {
  DashboardArn?: string;
  DashboardBody?: string;
  DashboardName?: string;
}
export interface GetInsightRuleReportInput {
  RuleName: string;
  StartTime: Date | string;
  EndTime: Date | string;
  Period: number;
  MaxContributorCount?: number;
  Metrics?: Array<string>;
  OrderBy?: string;
}
export interface GetInsightRuleReportOutput {
  KeyLabels?: Array<string>;
  AggregationStatistic?: string;
  AggregateValue?: number;
  ApproximateUniqueCount?: number;
  Contributors?: Array<InsightRuleContributor>;
  MetricDatapoints?: Array<InsightRuleMetricDatapoint>;
}
export interface GetMetricDataInput {
  MetricDataQueries: Array<MetricDataQuery>;
  StartTime: Date | string;
  EndTime: Date | string;
  NextToken?: string;
  ScanBy?: ScanBy;
  MaxDatapoints?: number;
  LabelOptions?: LabelOptions;
}
export type GetMetricDataLabelTimezone = string;

export type GetMetricDataMaxDatapoints = number;

export interface GetMetricDataOutput {
  MetricDataResults?: Array<MetricDataResult>;
  NextToken?: string;
  Messages?: Array<MessageData>;
}
export interface GetMetricStatisticsInput {
  Namespace: string;
  MetricName: string;
  Dimensions?: Array<Dimension>;
  StartTime: Date | string;
  EndTime: Date | string;
  Period: number;
  Statistics?: Array<Statistic>;
  ExtendedStatistics?: Array<string>;
  Unit?: StandardUnit;
}
export interface GetMetricStatisticsOutput {
  Label?: string;
  Datapoints?: Array<Datapoint>;
}
export interface GetMetricStreamInput {
  Name: string;
}
export interface GetMetricStreamOutput {
  Arn?: string;
  Name?: string;
  IncludeFilters?: Array<MetricStreamFilter>;
  ExcludeFilters?: Array<MetricStreamFilter>;
  FirehoseArn?: string;
  RoleArn?: string;
  State?: string;
  CreationDate?: Date | string;
  LastUpdateDate?: Date | string;
  OutputFormat?: MetricStreamOutputFormat;
  StatisticsConfigurations?: Array<MetricStreamStatisticsConfiguration>;
  IncludeLinkedAccountsMetrics?: boolean;
}
export interface GetMetricWidgetImageInput {
  MetricWidget: string;
  OutputFormat?: string;
}
export interface GetMetricWidgetImageOutput {
  MetricWidgetImage?: Uint8Array | string;
}
export type HistoryData = string;

export type HistoryItemType = "ConfigurationUpdate" | "StateUpdate" | "Action";
export type HistorySummary = string;

export type IncludeLinkedAccounts = boolean;

export type IncludeLinkedAccountsMetrics = boolean;

export interface InsightRule {
  Name: string;
  State: string;
  Schema: string;
  Definition: string;
  ManagedRule?: boolean;
  ApplyOnTransformedLogs?: boolean;
}
export type InsightRuleAggregationStatistic = string;

export interface InsightRuleContributor {
  Keys: Array<string>;
  ApproximateAggregateValue: number;
  Datapoints: Array<InsightRuleContributorDatapoint>;
}
export interface InsightRuleContributorDatapoint {
  Timestamp: Date | string;
  ApproximateValue: number;
}
export type InsightRuleContributorDatapoints =
  Array<InsightRuleContributorDatapoint>;
export type InsightRuleContributorKey = string;

export type InsightRuleContributorKeyLabel = string;

export type InsightRuleContributorKeyLabels = Array<string>;
export type InsightRuleContributorKeys = Array<string>;
export type InsightRuleContributors = Array<InsightRuleContributor>;
export type InsightRuleDefinition = string;

export type InsightRuleIsManaged = boolean;

export type InsightRuleMaxResults = number;

export interface InsightRuleMetricDatapoint {
  Timestamp: Date | string;
  UniqueContributors?: number;
  MaxContributorValue?: number;
  SampleCount?: number;
  Average?: number;
  Sum?: number;
  Minimum?: number;
  Maximum?: number;
}
export type InsightRuleMetricDatapoints = Array<InsightRuleMetricDatapoint>;
export type InsightRuleMetricList = Array<string>;
export type InsightRuleMetricName = string;

export type InsightRuleName = string;

export type InsightRuleNames = Array<string>;
export type InsightRuleOnTransformedLogs = boolean;

export type InsightRuleOrderBy = string;

export type InsightRules = Array<InsightRule>;
export type InsightRuleSchema = string;

export type InsightRuleState = string;

export type InsightRuleUnboundDouble = number;

export type InsightRuleUnboundInteger = number;

export type InsightRuleUnboundLong = number;

export declare class InternalServiceFault extends Data.TaggedError(
  "InternalServiceFault",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFormatFault extends Data.TaggedError(
  "InvalidFormatFault",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextToken extends Data.TaggedError(
  "InvalidNextToken",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterCombinationException extends Data.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValueException extends Data.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly message?: string;
}> {}
export interface LabelOptions {
  Timezone?: string;
}
export type LastModified = Date | string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class LimitExceededFault extends Data.TaggedError(
  "LimitExceededFault",
)<{
  readonly message?: string;
}> {}
export interface ListDashboardsInput {
  DashboardNamePrefix?: string;
  NextToken?: string;
}
export interface ListDashboardsOutput {
  DashboardEntries?: Array<DashboardEntry>;
  NextToken?: string;
}
export interface ListManagedInsightRulesInput {
  ResourceARN: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListManagedInsightRulesOutput {
  ManagedRules?: Array<ManagedRuleDescription>;
  NextToken?: string;
}
export interface ListMetricsInput {
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<DimensionFilter>;
  NextToken?: string;
  RecentlyActive?: RecentlyActive;
  IncludeLinkedAccounts?: boolean;
  OwningAccount?: string;
}
export interface ListMetricsOutput {
  Metrics?: Array<Metric>;
  NextToken?: string;
  OwningAccounts?: Array<string>;
}
export interface ListMetricStreamsInput {
  NextToken?: string;
  MaxResults?: number;
}
export type ListMetricStreamsMaxResults = number;

export interface ListMetricStreamsOutput {
  NextToken?: string;
  Entries?: Array<MetricStreamEntry>;
}
export interface ListTagsForResourceInput {
  ResourceARN: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Array<Tag>;
}
export interface ManagedRule {
  TemplateName: string;
  ResourceARN: string;
  Tags?: Array<Tag>;
}
export interface ManagedRuleDescription {
  TemplateName?: string;
  ResourceARN?: string;
  RuleState?: ManagedRuleState;
}
export type ManagedRuleDescriptions = Array<ManagedRuleDescription>;
export type ManagedRules = Array<ManagedRule>;
export interface ManagedRuleState {
  RuleName: string;
  State: string;
}
export type MaxRecords = number;

export type MaxReturnedResultsCount = number;

export type Message = string;

export interface MessageData {
  Code?: string;
  Value?: string;
}
export type MessageDataCode = string;

export type MessageDataValue = string;

export interface Metric {
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<Dimension>;
}
export interface MetricAlarm {
  AlarmName?: string;
  AlarmArn?: string;
  AlarmDescription?: string;
  AlarmConfigurationUpdatedTimestamp?: Date | string;
  ActionsEnabled?: boolean;
  OKActions?: Array<string>;
  AlarmActions?: Array<string>;
  InsufficientDataActions?: Array<string>;
  StateValue?: StateValue;
  StateReason?: string;
  StateReasonData?: string;
  StateUpdatedTimestamp?: Date | string;
  MetricName?: string;
  Namespace?: string;
  Statistic?: Statistic;
  ExtendedStatistic?: string;
  Dimensions?: Array<Dimension>;
  Period?: number;
  Unit?: StandardUnit;
  EvaluationPeriods?: number;
  DatapointsToAlarm?: number;
  Threshold?: number;
  ComparisonOperator?: ComparisonOperator;
  TreatMissingData?: string;
  EvaluateLowSampleCountPercentile?: string;
  Metrics?: Array<MetricDataQuery>;
  ThresholdMetricId?: string;
  EvaluationState?: EvaluationState;
  StateTransitionedTimestamp?: Date | string;
}
export type MetricAlarms = Array<MetricAlarm>;
export interface MetricCharacteristics {
  PeriodicSpikes?: boolean;
}
export type MetricData = Array<MetricDatum>;
export type MetricDataQueries = Array<MetricDataQuery>;
export interface MetricDataQuery {
  Id: string;
  MetricStat?: MetricStat;
  Expression?: string;
  Label?: string;
  ReturnData?: boolean;
  Period?: number;
  AccountId?: string;
}
export interface MetricDataResult {
  Id?: string;
  Label?: string;
  Timestamps?: Array<Date | string>;
  Values?: Array<number>;
  StatusCode?: StatusCode;
  Messages?: Array<MessageData>;
}
export type MetricDataResultMessages = Array<MessageData>;
export type MetricDataResults = Array<MetricDataResult>;
export interface MetricDatum {
  MetricName: string;
  Dimensions?: Array<Dimension>;
  Timestamp?: Date | string;
  Value?: number;
  StatisticValues?: StatisticSet;
  Values?: Array<number>;
  Counts?: Array<number>;
  Unit?: StandardUnit;
  StorageResolution?: number;
}
export type MetricExpression = string;

export type MetricId = string;

export type MetricLabel = string;

export interface MetricMathAnomalyDetector {
  MetricDataQueries?: Array<MetricDataQuery>;
}
export type MetricName = string;

export type Metrics = Array<Metric>;
export interface MetricStat {
  Metric: Metric;
  Period: number;
  Stat: string;
  Unit?: StandardUnit;
}
export type MetricStreamEntries = Array<MetricStreamEntry>;
export interface MetricStreamEntry {
  Arn?: string;
  CreationDate?: Date | string;
  LastUpdateDate?: Date | string;
  Name?: string;
  FirehoseArn?: string;
  State?: string;
  OutputFormat?: MetricStreamOutputFormat;
}
export interface MetricStreamFilter {
  Namespace?: string;
  MetricNames?: Array<string>;
}
export type MetricStreamFilterMetricNames = Array<string>;
export type MetricStreamFilters = Array<MetricStreamFilter>;
export type MetricStreamName = string;

export type MetricStreamNames = Array<string>;
export type MetricStreamOutputFormat =
  | "JSON"
  | "OPEN_TELEMETRY_0_7"
  | "OPEN_TELEMETRY_1_0";
export type MetricStreamState = string;

export type MetricStreamStatistic = string;

export type MetricStreamStatisticsAdditionalStatistics = Array<string>;
export interface MetricStreamStatisticsConfiguration {
  IncludeMetrics: Array<MetricStreamStatisticsMetric>;
  AdditionalStatistics: Array<string>;
}
export type MetricStreamStatisticsConfigurations =
  Array<MetricStreamStatisticsConfiguration>;
export type MetricStreamStatisticsIncludeMetrics =
  Array<MetricStreamStatisticsMetric>;
export interface MetricStreamStatisticsMetric {
  Namespace: string;
  MetricName: string;
}
export type MetricWidget = string;

export type MetricWidgetImage = Uint8Array | string;

export declare class MissingRequiredParameterException extends Data.TaggedError(
  "MissingRequiredParameterException",
)<{
  readonly message?: string;
}> {}
export type Namespace = string;

export type NextToken = string;

export type OutputFormat = string;

export type OwningAccounts = Array<string>;
export interface PartialFailure {
  FailureResource?: string;
  ExceptionType?: string;
  FailureCode?: string;
  FailureDescription?: string;
}
export type Period = number;

export type PeriodicSpikes = boolean;

export interface PutAnomalyDetectorInput {
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<Dimension>;
  Stat?: string;
  Configuration?: AnomalyDetectorConfiguration;
  MetricCharacteristics?: MetricCharacteristics;
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
}
export interface PutAnomalyDetectorOutput {}
export interface PutCompositeAlarmInput {
  ActionsEnabled?: boolean;
  AlarmActions?: Array<string>;
  AlarmDescription?: string;
  AlarmName: string;
  AlarmRule: string;
  InsufficientDataActions?: Array<string>;
  OKActions?: Array<string>;
  Tags?: Array<Tag>;
  ActionsSuppressor?: string;
  ActionsSuppressorWaitPeriod?: number;
  ActionsSuppressorExtensionPeriod?: number;
}
export interface PutDashboardInput {
  DashboardName: string;
  DashboardBody: string;
}
export interface PutDashboardOutput {
  DashboardValidationMessages?: Array<DashboardValidationMessage>;
}
export interface PutInsightRuleInput {
  RuleName: string;
  RuleState?: string;
  RuleDefinition: string;
  Tags?: Array<Tag>;
  ApplyOnTransformedLogs?: boolean;
}
export interface PutInsightRuleOutput {}
export interface PutManagedInsightRulesInput {
  ManagedRules: Array<ManagedRule>;
}
export interface PutManagedInsightRulesOutput {
  Failures?: Array<PartialFailure>;
}
export interface PutMetricAlarmInput {
  AlarmName: string;
  AlarmDescription?: string;
  ActionsEnabled?: boolean;
  OKActions?: Array<string>;
  AlarmActions?: Array<string>;
  InsufficientDataActions?: Array<string>;
  MetricName?: string;
  Namespace?: string;
  Statistic?: Statistic;
  ExtendedStatistic?: string;
  Dimensions?: Array<Dimension>;
  Period?: number;
  Unit?: StandardUnit;
  EvaluationPeriods: number;
  DatapointsToAlarm?: number;
  Threshold?: number;
  ComparisonOperator: ComparisonOperator;
  TreatMissingData?: string;
  EvaluateLowSampleCountPercentile?: string;
  Metrics?: Array<MetricDataQuery>;
  Tags?: Array<Tag>;
  ThresholdMetricId?: string;
}
export interface PutMetricDataInput {
  Namespace: string;
  MetricData?: Array<MetricDatum>;
  EntityMetricData?: Array<EntityMetricData>;
  StrictEntityValidation?: boolean;
}
export interface PutMetricStreamInput {
  Name: string;
  IncludeFilters?: Array<MetricStreamFilter>;
  ExcludeFilters?: Array<MetricStreamFilter>;
  FirehoseArn: string;
  RoleArn: string;
  OutputFormat: MetricStreamOutputFormat;
  Tags?: Array<Tag>;
  StatisticsConfigurations?: Array<MetricStreamStatisticsConfiguration>;
  IncludeLinkedAccountsMetrics?: boolean;
}
export interface PutMetricStreamOutput {
  Arn?: string;
}
export interface Range {
  StartTime: Date | string;
  EndTime: Date | string;
}
export type RecentlyActive = "PT3H";
export type ResourceId = string;

export type ResourceList = Array<string>;
export type ResourceName = string;

export declare class ResourceNotFound extends Data.TaggedError(
  "ResourceNotFound",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly ResourceType?: string;
  readonly ResourceId?: string;
  readonly Message?: string;
}> {}
export type ResourceType = string;

export type ReturnData = boolean;

export type ScanBy = "TIMESTAMP_DESCENDING" | "TIMESTAMP_ASCENDING";
export interface SetAlarmStateInput {
  AlarmName: string;
  StateValue: StateValue;
  StateReason: string;
  StateReasonData?: string;
}
export interface SingleMetricAnomalyDetector {
  AccountId?: string;
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Array<Dimension>;
  Stat?: string;
}
export type Size = number;

export type StandardUnit =
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Count"
  | "Bytes_Second"
  | "Kilobytes_Second"
  | "Megabytes_Second"
  | "Gigabytes_Second"
  | "Terabytes_Second"
  | "Bits_Second"
  | "Kilobits_Second"
  | "Megabits_Second"
  | "Gigabits_Second"
  | "Terabits_Second"
  | "Count_Second"
  | "None";
export interface StartMetricStreamsInput {
  Names: Array<string>;
}
export interface StartMetricStreamsOutput {}
export type Stat = string;

export type StateReason = string;

export type StateReasonData = string;

export type StateValue = "OK" | "ALARM" | "INSUFFICIENT_DATA";
export type Statistic =
  | "SampleCount"
  | "Average"
  | "Sum"
  | "Minimum"
  | "Maximum";
export type Statistics = Array<Statistic>;
export interface StatisticSet {
  SampleCount: number;
  Sum: number;
  Minimum: number;
  Maximum: number;
}
export type StatusCode =
  | "COMPLETE"
  | "INTERNAL_ERROR"
  | "PARTIAL_DATA"
  | "FORBIDDEN";
export interface StopMetricStreamsInput {
  Names: Array<string>;
}
export interface StopMetricStreamsOutput {}
export type StorageResolution = number;

export type StrictEntityValidation = boolean;

export type SuppressorPeriod = number;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceInput {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TemplateName = string;

export type Threshold = number;

export type Timestamp = Date | string;

export type Timestamps = Array<Date | string>;
export type TreatMissingData = string;

export interface UntagResourceInput {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export type Values = Array<number>;
export declare namespace DeleteAlarms {
  export type Input = DeleteAlarmsInput;
  export type Output = {};
  export type Error = ResourceNotFound | CommonAwsError;
}

export declare namespace DeleteAnomalyDetector {
  export type Input = DeleteAnomalyDetectorInput;
  export type Output = DeleteAnomalyDetectorOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDashboards {
  export type Input = DeleteDashboardsInput;
  export type Output = DeleteDashboardsOutput;
  export type Error =
    | ConflictException
    | DashboardNotFoundError
    | InternalServiceFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DeleteInsightRules {
  export type Input = DeleteInsightRulesInput;
  export type Output = DeleteInsightRulesOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace DeleteMetricStream {
  export type Input = DeleteMetricStreamInput;
  export type Output = DeleteMetricStreamOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace DescribeAlarmHistory {
  export type Input = DescribeAlarmHistoryInput;
  export type Output = DescribeAlarmHistoryOutput;
  export type Error = InvalidNextToken | CommonAwsError;
}

export declare namespace DescribeAlarms {
  export type Input = DescribeAlarmsInput;
  export type Output = DescribeAlarmsOutput;
  export type Error = InvalidNextToken | CommonAwsError;
}

export declare namespace DescribeAlarmsForMetric {
  export type Input = DescribeAlarmsForMetricInput;
  export type Output = DescribeAlarmsForMetricOutput;
  export type Error = CommonAwsError;
}

export declare namespace DescribeAnomalyDetectors {
  export type Input = DescribeAnomalyDetectorsInput;
  export type Output = DescribeAnomalyDetectorsOutput;
  export type Error =
    | InternalServiceFault
    | InvalidNextToken
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace DescribeInsightRules {
  export type Input = DescribeInsightRulesInput;
  export type Output = DescribeInsightRulesOutput;
  export type Error = InvalidNextToken | CommonAwsError;
}

export declare namespace DisableAlarmActions {
  export type Input = DisableAlarmActionsInput;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DisableInsightRules {
  export type Input = DisableInsightRulesInput;
  export type Output = DisableInsightRulesOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace EnableAlarmActions {
  export type Input = EnableAlarmActionsInput;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace EnableInsightRules {
  export type Input = EnableInsightRulesInput;
  export type Output = EnableInsightRulesOutput;
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace GetDashboard {
  export type Input = GetDashboardInput;
  export type Output = GetDashboardOutput;
  export type Error =
    | DashboardNotFoundError
    | InternalServiceFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace GetInsightRuleReport {
  export type Input = GetInsightRuleReportInput;
  export type Output = GetInsightRuleReportOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMetricData {
  export type Input = GetMetricDataInput;
  export type Output = GetMetricDataOutput;
  export type Error = InvalidNextToken | CommonAwsError;
}

export declare namespace GetMetricStatistics {
  export type Input = GetMetricStatisticsInput;
  export type Output = GetMetricStatisticsOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace GetMetricStream {
  export type Input = GetMetricStreamInput;
  export type Output = GetMetricStreamOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMetricWidgetImage {
  export type Input = GetMetricWidgetImageInput;
  export type Output = GetMetricWidgetImageOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListDashboards {
  export type Input = ListDashboardsInput;
  export type Output = ListDashboardsOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace ListManagedInsightRules {
  export type Input = ListManagedInsightRulesInput;
  export type Output = ListManagedInsightRulesOutput;
  export type Error =
    | InvalidNextToken
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace ListMetrics {
  export type Input = ListMetricsInput;
  export type Output = ListMetricsOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterValueException
    | CommonAwsError;
}

export declare namespace ListMetricStreams {
  export type Input = ListMetricStreamsInput;
  export type Output = ListMetricStreamsOutput;
  export type Error =
    | InternalServiceFault
    | InvalidNextToken
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutAnomalyDetector {
  export type Input = PutAnomalyDetectorInput;
  export type Output = PutAnomalyDetectorOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace PutCompositeAlarm {
  export type Input = PutCompositeAlarmInput;
  export type Output = {};
  export type Error = LimitExceededFault | CommonAwsError;
}

export declare namespace PutDashboard {
  export type Input = PutDashboardInput;
  export type Output = PutDashboardOutput;
  export type Error =
    | ConflictException
    | DashboardInvalidInputError
    | InternalServiceFault
    | CommonAwsError;
}

export declare namespace PutInsightRule {
  export type Input = PutInsightRuleInput;
  export type Output = PutInsightRuleOutput;
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace PutManagedInsightRules {
  export type Input = PutManagedInsightRulesInput;
  export type Output = PutManagedInsightRulesOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace PutMetricAlarm {
  export type Input = PutMetricAlarmInput;
  export type Output = {};
  export type Error = LimitExceededFault | CommonAwsError;
}

export declare namespace PutMetricData {
  export type Input = PutMetricDataInput;
  export type Output = {};
  export type Error =
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace PutMetricStream {
  export type Input = PutMetricStreamInput;
  export type Output = PutMetricStreamOutput;
  export type Error =
    | ConcurrentModificationException
    | InternalServiceFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace SetAlarmState {
  export type Input = SetAlarmStateInput;
  export type Output = {};
  export type Error = InvalidFormatFault | ResourceNotFound | CommonAwsError;
}

export declare namespace StartMetricStreams {
  export type Input = StartMetricStreamsInput;
  export type Output = StartMetricStreamsOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace StopMetricStreams {
  export type Input = StopMetricStreamsInput;
  export type Output = StopMetricStreamsOutput;
  export type Error =
    | InternalServiceFault
    | InvalidParameterValueException
    | MissingRequiredParameterException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ConcurrentModificationException
    | ConflictException
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ConcurrentModificationException
    | ConflictException
    | InternalServiceFault
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError;
}
