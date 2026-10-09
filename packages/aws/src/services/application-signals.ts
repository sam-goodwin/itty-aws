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
  sdkId: "Application Signals",
  serviceShapeName: "ApplicationSignals",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "application-signals" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-04-15");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
            `https://application-signals-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://application-signals.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AccessDenied", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      ResourceType: S.String,
      ResourceId: S.String,
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
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
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ValidationError", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type InstrumentationType = "BREAKPOINT" | "PROBE" | (string & {});
export interface BatchDeleteScope {
  Service: string;
  Environment: string;
  InstrumentationType: InstrumentationType;
}
export type BatchDeleteResourceArnList = string[];
export interface BatchDeleteByResourceArns {
  ResourceArns: string[];
  InstrumentationType: InstrumentationType;
}
export type BatchDeleteDeletionTarget =
  | { Scope: BatchDeleteScope; ResourceArns?: never }
  | { Scope?: never; ResourceArns: BatchDeleteByResourceArns };
export interface BatchDeleteInstrumentationConfigurationsRequest {
  DeletionTarget: BatchDeleteDeletionTarget;
}
export interface BatchDeleteSuccessfulDeletion {
  ResourceArn?: string;
  SignalType?: string;
  LocationHash?: string;
}
export type BatchDeleteSuccessfulDeletionList = BatchDeleteSuccessfulDeletion[];
export type BatchDeleteErrorCode =
  | "ResourceNotFoundException"
  | "AccessDeniedException"
  | "InternalServiceException"
  | (string & {});
export interface BatchDeleteError {
  ResourceArn: string;
  Code: BatchDeleteErrorCode;
  Message: string;
}
export type BatchDeleteErrorList = BatchDeleteError[];
export interface BatchDeleteInstrumentationConfigurationsResponse {
  DeletedCount: number;
  SuccessfulDeletions: BatchDeleteSuccessfulDeletion[];
  Errors: BatchDeleteError[];
}
export type ServiceLevelObjectiveIds = string[];
export interface BatchGetServiceLevelObjectiveBudgetReportInput {
  Timestamp: Date;
  SloIds: string[];
}
export type ServiceLevelObjectiveArn = string;
export type ServiceLevelObjectiveName = string;
export type EvaluationType = "PeriodBased" | "RequestBased" | (string & {});
export type ServiceLevelObjectiveBudgetStatus =
  | "OK"
  | "WARNING"
  | "BREACHED"
  | "INSUFFICIENT_DATA"
  | (string & {});
export type Attainment = number;
export type TotalBudgetSeconds = number;
export type BudgetSecondsRemaining = number;
export type TotalBudgetRequests = number;
export type BudgetRequestsRemaining = number;
export type KeyAttributeName = string;
export type KeyAttributeValue = string;
export type Attributes = { [key: string]: string | undefined };
export type OperationName = string;
export type ServiceLevelIndicatorMetricType = "LATENCY" | "AVAILABILITY" | (string & {});
export type MetricId = string;
export type Namespace = string;
export type MetricName = string;
export type DimensionName = string;
export type DimensionValue = string;
export interface Dimension {
  Name: string;
  Value: string;
}
export type Dimensions = Dimension[];
export interface Metric {
  Namespace?: string;
  MetricName?: string;
  Dimensions?: Dimension[];
}
export type Period = number;
export type Stat = string;
export type StandardUnit =
  | "Microseconds"
  | "Milliseconds"
  | "Seconds"
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
  | "Bytes/Second"
  | "Kilobytes/Second"
  | "Megabytes/Second"
  | "Gigabytes/Second"
  | "Terabytes/Second"
  | "Bits/Second"
  | "Kilobits/Second"
  | "Megabits/Second"
  | "Gigabits/Second"
  | "Terabits/Second"
  | "Count/Second"
  | "None"
  | (string & {});
export interface MetricStat {
  Metric: Metric;
  Period: number;
  Stat: string;
  Unit?: StandardUnit;
}
export type MetricExpression = string;
export type MetricLabel = string;
export type ReturnData = boolean;
export type AccountId = string;
export interface MetricDataQuery {
  Id: string;
  MetricStat?: MetricStat;
  Expression?: string;
  Label?: string;
  ReturnData?: boolean;
  Period?: number;
  AccountId?: string;
}
export type MetricDataQueries = MetricDataQuery[];
export interface DependencyConfig {
  DependencyKeyAttributes: { [key: string]: string | undefined };
  DependencyOperationName: string;
}
export interface MetricSource {
  MetricSourceKeyAttributes: { [key: string]: string | undefined };
  MetricSourceAttributes?: { [key: string]: string | undefined };
}
export type SelectionType = "EXPLICIT" | "PREFIX" | "REGEX" | (string & {});
export type SelectionPattern = string;
export interface SelectionConfig {
  Type: SelectionType;
  Pattern?: string;
}
export type CompositeSliComponent = { OperationName: string };
export type CompositeSliComponents = CompositeSliComponent[];
export interface CompositeSliConfig {
  SelectionConfig: SelectionConfig;
  Components?: CompositeSliComponent[];
}
export interface ServiceLevelIndicatorMetric {
  KeyAttributes?: { [key: string]: string | undefined };
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  MetricDataQueries: MetricDataQuery[];
  DependencyConfig?: DependencyConfig;
  MetricSource?: MetricSource;
  CompositeSliConfig?: CompositeSliConfig;
}
export type ServiceLevelIndicatorMetricThreshold = number;
export type ServiceLevelIndicatorComparisonOperator =
  | "GreaterThanOrEqualTo"
  | "GreaterThan"
  | "LessThan"
  | "LessThanOrEqualTo"
  | (string & {});
export interface ServiceLevelIndicator {
  SliMetric: ServiceLevelIndicatorMetric;
  MetricThreshold: number;
  ComparisonOperator: ServiceLevelIndicatorComparisonOperator;
}
export type MonitoredRequestCountMetricDataQueries =
  | { GoodCountMetric: MetricDataQuery[]; BadCountMetric?: never }
  | { GoodCountMetric?: never; BadCountMetric: MetricDataQuery[] };
export interface RequestBasedServiceLevelIndicatorMetric {
  KeyAttributes?: { [key: string]: string | undefined };
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  TotalRequestCountMetric: MetricDataQuery[];
  MonitoredRequestCountMetric: MonitoredRequestCountMetricDataQueries;
  DependencyConfig?: DependencyConfig;
  MetricSource?: MetricSource;
  CompositeSliConfig?: CompositeSliConfig;
}
export interface RequestBasedServiceLevelIndicator {
  RequestBasedSliMetric: RequestBasedServiceLevelIndicatorMetric;
  MetricThreshold?: number;
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator;
}
export type DurationUnit = "MINUTE" | "HOUR" | "DAY" | "MONTH" | (string & {});
export type RollingIntervalDuration = number;
export interface RollingInterval {
  DurationUnit: DurationUnit;
  Duration: number;
}
export type CalendarIntervalDuration = number;
export interface CalendarInterval {
  StartTime: Date;
  DurationUnit: DurationUnit;
  Duration: number;
}
export type Interval =
  | { RollingInterval: RollingInterval; CalendarInterval?: never }
  | { RollingInterval?: never; CalendarInterval: CalendarInterval };
export type AttainmentGoal = number;
export type WarningThreshold = number;
export interface Goal {
  Interval?: Interval;
  AttainmentGoal?: number;
  WarningThreshold?: number;
}
export interface ServiceLevelObjectiveBudgetReport {
  Arn: string;
  Name: string;
  EvaluationType?: EvaluationType;
  BudgetStatus: ServiceLevelObjectiveBudgetStatus;
  Attainment?: number;
  TotalBudgetSeconds?: number;
  BudgetSecondsRemaining?: number;
  TotalBudgetRequests?: number;
  BudgetRequestsRemaining?: number;
  Sli?: ServiceLevelIndicator;
  RequestBasedSli?: RequestBasedServiceLevelIndicator;
  Goal?: Goal;
}
export type ServiceLevelObjectiveBudgetReports = ServiceLevelObjectiveBudgetReport[];
export type ServiceLevelObjectiveBudgetReportErrorCode = string;
export type ServiceLevelObjectiveBudgetReportErrorMessage = string;
export interface ServiceLevelObjectiveBudgetReportError {
  Name?: string;
  Arn: string;
  ErrorCode: string;
  ErrorMessage: string;
}
export type ServiceLevelObjectiveBudgetReportErrors = ServiceLevelObjectiveBudgetReportError[];
export interface BatchGetServiceLevelObjectiveBudgetReportOutput {
  Timestamp: Date;
  Reports: ServiceLevelObjectiveBudgetReport[];
  Errors: ServiceLevelObjectiveBudgetReportError[];
}
export type ExclusionDuration = number;
export interface Window {
  DurationUnit: DurationUnit;
  Duration: number;
}
export type Expression = string;
export interface RecurrenceRule {
  Expression?: string;
}
export type ExclusionReason = string;
export interface ExclusionWindow {
  Window: Window;
  StartTime?: Date;
  RecurrenceRule?: RecurrenceRule;
  Reason?: string;
}
export type ExclusionWindows = ExclusionWindow[];
export interface BatchUpdateExclusionWindowsInput {
  SloIds: string[];
  AddExclusionWindows?: ExclusionWindow[];
  RemoveExclusionWindows?: ExclusionWindow[];
}
export type ServiceLevelObjectiveId = string;
export type ExclusionWindowErrorCode = string;
export type ExclusionWindowErrorMessage = string;
export interface BatchUpdateExclusionWindowsError_ {
  SloId: string;
  ErrorCode: string;
  ErrorMessage: string;
}
export type BatchUpdateExclusionWindowsErrors = BatchUpdateExclusionWindowsError_[];
export interface BatchUpdateExclusionWindowsOutput {
  SloIds: string[];
  Errors: BatchUpdateExclusionWindowsError_[];
}
export type DynamicInstrumentationSignalType = "SNAPSHOT" | (string & {});
export type ProgrammingLanguage = "Java" | "Python" | "Javascript" | (string & {});
export interface CodeLocation {
  Language: ProgrammingLanguage;
  CodeUnit?: string;
  ClassName?: string;
  MethodName?: string;
  FilePath: string;
  LineNumber?: number;
}
export type Location = { CodeLocation: CodeLocation };
export type DynamicInstrumentationAttributeFilterGroup = { [key: string]: string | undefined };
export type DynamicInstrumentationAttributeFilters = { [key: string]: string | undefined }[];
export type StringList = string[];
export interface CaptureLimitsConfig {
  MaxHits?: number;
  MaxStringLength?: number;
  MaxCollectionWidth?: number;
  MaxCollectionDepth?: number;
  MaxStackFrames?: number;
  MaxStackTraceSize?: number;
  MaxObjectDepth?: number;
  MaxFieldsPerObject?: number;
}
export interface CodeCaptureConfiguration {
  CaptureArguments?: string[];
  CaptureReturn?: boolean;
  CaptureStackTrace?: boolean;
  CaptureLocals?: string[];
  CaptureLimits: CaptureLimitsConfig;
}
export type CaptureConfiguration = { CodeCapture: CodeCaptureConfiguration };
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateInstrumentationConfigurationRequest {
  InstrumentationType: InstrumentationType;
  Service: string;
  Environment: string;
  SignalType: DynamicInstrumentationSignalType;
  Location: Location;
  Description?: string;
  ExpiresAt?: Date;
  AttributeFilters?: { [key: string]: string | undefined }[];
  CaptureConfiguration: CaptureConfiguration;
  Tags?: Tag[];
}
export type InstrumentationConfigurationArn = string;
export interface CreateInstrumentationConfigurationResponse {
  InstrumentationType: InstrumentationType;
  Service: string;
  Environment: string;
  SignalType: DynamicInstrumentationSignalType;
  Location: Location;
  LocationHash: string;
  Description?: string;
  ExpiresAt?: Date;
  AttributeFilters?: { [key: string]: string | undefined }[];
  CaptureConfiguration: CaptureConfiguration;
  CreatedAt: Date;
  ARN: string;
}
export type ServiceLevelObjectiveDescription = string;
export type ServiceLevelIndicatorStatistic = string;
export type SLIPeriodSeconds = number;
export interface ServiceLevelIndicatorMetricConfig {
  KeyAttributes?: { [key: string]: string | undefined };
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  MetricName?: string;
  Statistic?: string;
  PeriodSeconds?: number;
  MetricSource?: MetricSource;
  MetricDataQueries?: MetricDataQuery[];
  DependencyConfig?: DependencyConfig;
  CompositeSliConfig?: CompositeSliConfig;
}
export interface ServiceLevelIndicatorConfig {
  SliMetricConfig: ServiceLevelIndicatorMetricConfig;
  MetricThreshold?: number;
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator;
}
export interface RequestBasedServiceLevelIndicatorMetricConfig {
  KeyAttributes?: { [key: string]: string | undefined };
  OperationName?: string;
  MetricType?: ServiceLevelIndicatorMetricType;
  TotalRequestCountMetric?: MetricDataQuery[];
  MonitoredRequestCountMetric?: MonitoredRequestCountMetricDataQueries;
  DependencyConfig?: DependencyConfig;
  MetricSource?: MetricSource;
  MetricName?: string;
  CompositeSliConfig?: CompositeSliConfig;
}
export interface RequestBasedServiceLevelIndicatorConfig {
  RequestBasedSliMetricConfig: RequestBasedServiceLevelIndicatorMetricConfig;
  MetricThreshold?: number;
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator;
}
export type BurnRateLookBackWindowMinutes = number;
export interface BurnRateConfiguration {
  LookBackWindowMinutes: number;
}
export type BurnRateConfigurations = BurnRateConfiguration[];
export interface CreateServiceLevelObjectiveInput {
  Name: string;
  Description?: string;
  SliConfig?: ServiceLevelIndicatorConfig;
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig;
  Goal?: Goal;
  Tags?: Tag[];
  BurnRateConfigurations?: BurnRateConfiguration[];
  CreateRecommendedSlo?: boolean;
  AutoInvestigationEnabled?: boolean;
}
export type MetricSourceType =
  | "ServiceOperation"
  | "CloudWatchMetric"
  | "ServiceDependency"
  | "AppMonitor"
  | "Canary"
  | "Service"
  | (string & {});
export interface ServiceLevelObjective {
  Arn: string;
  Name: string;
  Description?: string;
  CreatedTime: Date;
  LastUpdatedTime: Date;
  Sli?: ServiceLevelIndicator;
  RequestBasedSli?: RequestBasedServiceLevelIndicator;
  EvaluationType?: EvaluationType;
  Goal: Goal;
  BurnRateConfigurations?: BurnRateConfiguration[];
  MetricSourceType?: MetricSourceType;
  AutoInvestigationEnabled?: boolean;
}
export interface CreateServiceLevelObjectiveOutput {
  Slo: ServiceLevelObjective;
}
export interface DeleteGroupingConfigurationRequest {}
export interface DeleteGroupingConfigurationOutput {}
export type LocationIdentifier =
  | { CodeLocation: CodeLocation; LocationHash?: never }
  | { CodeLocation?: never; LocationHash: string };
export interface DeleteInstrumentationConfigurationRequest {
  InstrumentationType: InstrumentationType;
  Service: string;
  Environment: string;
  SignalType: DynamicInstrumentationSignalType;
  LocationIdentifier: LocationIdentifier;
}
export type DynamicInstrumentationDeletionStatus = "DELETED" | (string & {});
export interface DeleteInstrumentationConfigurationResponse {
  DeletionStatus: DynamicInstrumentationDeletionStatus;
}
export interface DeleteServiceLevelObjectiveInput {
  Id: string;
}
export interface DeleteServiceLevelObjectiveOutput {}
export interface GetInstrumentationConfigurationRequest {
  InstrumentationType: InstrumentationType;
  Service: string;
  Environment: string;
  SignalType: DynamicInstrumentationSignalType;
  LocationIdentifier: LocationIdentifier;
}
export interface InstrumentationConfiguration {
  InstrumentationType: InstrumentationType;
  Service: string;
  Environment: string;
  SignalType: DynamicInstrumentationSignalType;
  Location: Location;
  LocationHash: string;
  Description?: string;
  ExpiresAt?: Date;
  AttributeFilters?: { [key: string]: string | undefined }[];
  CaptureConfiguration: CaptureConfiguration;
  CreatedAt: Date;
  ARN: string;
}
export interface GetInstrumentationConfigurationResponse {
  Configuration: InstrumentationConfiguration;
}
export type InstrumentationConfigurationStatus =
  | "READY"
  | "ERROR"
  | "ACTIVE"
  | "DISABLED"
  | (string & {});
export type NextToken = string;
export interface GetInstrumentationConfigurationStatusRequest {
  InstrumentationType: InstrumentationType;
  Service: string;
  Environment: string;
  SignalType: DynamicInstrumentationSignalType;
  LocationIdentifier: LocationIdentifier;
  Status?: InstrumentationConfigurationStatus;
  StartTime?: Date;
  EndTime?: Date;
  MaxResults?: number;
  NextToken?: string;
}
export type InstrumentationErrorCause =
  | "FILE_NOT_FOUND"
  | "METHOD_NOT_FOUND"
  | "LINE_NOT_EXECUTABLE"
  | "OVERLOADED_METHODS"
  | "LANGUAGE_MISMATCH"
  | "RUNTIME_ERROR"
  | (string & {});
export interface InstrumentationStatusEvent {
  Time: Date;
  ErrorCause?: InstrumentationErrorCause;
}
export type InstrumentationStatusEventList = InstrumentationStatusEvent[];
export interface GetInstrumentationConfigurationStatusResponse {
  Service: string;
  Environment: string;
  SignalType: DynamicInstrumentationSignalType;
  Location: Location;
  Status: InstrumentationConfigurationStatus;
  Events: InstrumentationStatusEvent[];
  NextToken?: string;
}
export interface GetServiceInput {
  StartTime: Date;
  EndTime: Date;
  KeyAttributes: { [key: string]: string | undefined };
}
export type AttributeMap = { [key: string]: string | undefined };
export type AttributeMaps = { [key: string]: string | undefined }[];
export type GroupName = string;
export type GroupValue = string;
export type GroupSource = string;
export type GroupIdentifier = string;
export interface ServiceGroup {
  GroupName: string;
  GroupValue: string;
  GroupSource: string;
  GroupIdentifier: string;
}
export type ServiceGroups = ServiceGroup[];
export type MetricType = string;
export type AwsAccountId = string;
export interface MetricReference {
  Namespace: string;
  MetricType: string;
  Dimensions?: Dimension[];
  MetricName: string;
  AccountId?: string;
}
export type MetricReferences = MetricReference[];
export type LogGroupReferences = { [key: string]: string | undefined }[];
export interface Service {
  KeyAttributes?: { [key: string]: string | undefined };
  AttributeMaps?: { [key: string]: string | undefined }[];
  ServiceGroups?: ServiceGroup[];
  MetricReferences?: MetricReference[];
  LogGroupReferences?: { [key: string]: string | undefined }[];
}
export interface GetServiceOutput {
  Service: Service;
  StartTime: Date;
  EndTime: Date;
  LogGroupReferences?: { [key: string]: string | undefined }[];
}
export interface GetServiceLevelObjectiveInput {
  Id: string;
}
export interface GetServiceLevelObjectiveOutput {
  Slo: ServiceLevelObjective;
}
export type Auditors = string[];
export interface ServiceEntity {
  Type?: string;
  Name?: string;
  Environment?: string;
  AwsAccountId?: string;
}
export interface ServiceLevelObjectiveEntity {
  SloName?: string;
  SloArn?: string;
}
export interface ServiceOperationEntity {
  Service?: ServiceEntity;
  Operation?: string;
  MetricType?: string;
}
export interface CanaryEntity {
  CanaryName: string;
}
export type AuditTargetEntity =
  | { Service: ServiceEntity; Slo?: never; ServiceOperation?: never; Canary?: never }
  | { Service?: never; Slo: ServiceLevelObjectiveEntity; ServiceOperation?: never; Canary?: never }
  | { Service?: never; Slo?: never; ServiceOperation: ServiceOperationEntity; Canary?: never }
  | { Service?: never; Slo?: never; ServiceOperation?: never; Canary: CanaryEntity };
export interface AuditTarget {
  Type: string;
  Data: AuditTargetEntity;
}
export type AuditTargets = AuditTarget[];
export type DetailLevel = "BRIEF" | "DETAILED" | (string & {});
export type ListAuditFindingMaxResults = number;
export interface ListAuditFindingsInput {
  StartTime: Date;
  EndTime: Date;
  Auditors?: string[];
  AuditTargets: AuditTarget[];
  DetailLevel?: DetailLevel;
  NextToken?: string;
  MaxResults?: number;
}
export type DataMap = { [key: string]: string | undefined };
export type Severity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "NONE" | (string & {});
export interface AuditorResult {
  Auditor?: string;
  Description?: string;
  Data?: { [key: string]: string | undefined };
  Severity?: Severity;
}
export type AuditorResults = AuditorResult[];
export interface MetricGraph {
  MetricDataQueries?: MetricDataQuery[];
  StartTime?: Date;
  EndTime?: Date;
}
export interface Node {
  KeyAttributes: { [key: string]: string | undefined };
  Name: string;
  NodeId: string;
  Operation?: string;
  Type?: string;
  Duration?: number;
  Status?: string;
}
export type Nodes = Node[];
export type ConnectionType = "INDIRECT" | "DIRECT" | (string & {});
export interface Edge {
  SourceNodeId?: string;
  DestinationNodeId?: string;
  Duration?: number;
  ConnectionType?: ConnectionType;
}
export type Edges = Edge[];
export interface DependencyGraph {
  Nodes?: Node[];
  Edges?: Edge[];
}
export interface AuditFinding {
  KeyAttributes: { [key: string]: string | undefined };
  AuditorResults?: AuditorResult[];
  Operation?: string;
  MetricGraph?: MetricGraph;
  DependencyGraph?: DependencyGraph;
  Type?: string;
}
export type AuditFindings = AuditFinding[];
export interface ListAuditFindingsOutput {
  StartTime?: Date;
  EndTime?: Date;
  AuditFindings: AuditFinding[];
  NextToken?: string;
}
export type ListEntityEventsMaxResults = number;
export interface ListEntityEventsInput {
  Entity: { [key: string]: string | undefined };
  StartTime: Date;
  EndTime: Date;
  MaxResults?: number;
  NextToken?: string;
}
export type ChangeEventType = "DEPLOYMENT" | "CONFIGURATION" | (string & {});
export interface ChangeEvent {
  Timestamp: Date;
  AccountId: string;
  Region: string;
  Entity: { [key: string]: string | undefined };
  ChangeEventType: ChangeEventType;
  EventId: string;
  UserName?: string;
  EventName?: string;
}
export type ChangeEvents = ChangeEvent[];
export interface ListEntityEventsOutput {
  StartTime: Date;
  EndTime: Date;
  ChangeEvents: ChangeEvent[];
  NextToken?: string;
}
export interface ListGroupingAttributeDefinitionsInput {
  NextToken?: string;
  AwsAccountId?: string;
  IncludeLinkedAccounts?: boolean;
}
export type GroupingString = string;
export type GroupingSourceKeyStringList = string[];
export interface GroupingAttributeDefinition {
  GroupingName: string;
  GroupingSourceKeys?: string[];
  DefaultGroupingValue?: string;
}
export type GroupingAttributeDefinitions = GroupingAttributeDefinition[];
export interface ListGroupingAttributeDefinitionsOutput {
  GroupingAttributeDefinitions: GroupingAttributeDefinition[];
  UpdatedAt?: Date;
  NextToken?: string;
}
export interface ListInstrumentationConfigurationsRequest {
  Service: string;
  Environment: string;
  InstrumentationType: InstrumentationType;
  SyncedAt?: Date;
  MaxResults?: number;
  NextToken?: string;
}
export interface InstrumentationConfigurationWithoutServiceEnv {
  InstrumentationType: InstrumentationType;
  SignalType: DynamicInstrumentationSignalType;
  Location: Location;
  LocationHash: string;
  Description?: string;
  ExpiresAt?: Date;
  AttributeFilters?: { [key: string]: string | undefined }[];
  CaptureConfiguration: CaptureConfiguration;
  CreatedAt: Date;
  ARN: string;
}
export type InstrumentationConfigurationsWithoutServiceEnv =
  InstrumentationConfigurationWithoutServiceEnv[];
export interface InstrumentationConfigurationsPage {
  Service: string;
  Environment: string;
  Changed: boolean;
  LatestConfigurations?: InstrumentationConfigurationWithoutServiceEnv[];
  SyncedAt: Date;
  SyncInterval: number;
  NextToken?: string;
}
export type ListServiceDependenciesMaxResults = number;
export interface ListServiceDependenciesInput {
  StartTime: Date;
  EndTime: Date;
  KeyAttributes: { [key: string]: string | undefined };
  MaxResults?: number;
  NextToken?: string;
}
export interface ServiceDependency {
  OperationName: string;
  DependencyKeyAttributes: { [key: string]: string | undefined };
  DependencyOperationName: string;
  MetricReferences: MetricReference[];
}
export type ServiceDependencies = ServiceDependency[];
export interface ListServiceDependenciesOutput {
  StartTime: Date;
  EndTime: Date;
  ServiceDependencies: ServiceDependency[];
  NextToken?: string;
}
export type ListServiceDependentsMaxResults = number;
export interface ListServiceDependentsInput {
  StartTime: Date;
  EndTime: Date;
  KeyAttributes: { [key: string]: string | undefined };
  MaxResults?: number;
  NextToken?: string;
}
export interface ServiceDependent {
  OperationName?: string;
  DependentKeyAttributes: { [key: string]: string | undefined };
  DependentOperationName?: string;
  MetricReferences: MetricReference[];
}
export type ServiceDependents = ServiceDependent[];
export interface ListServiceDependentsOutput {
  StartTime: Date;
  EndTime: Date;
  ServiceDependents: ServiceDependent[];
  NextToken?: string;
}
export type ListServiceLevelObjectiveExclusionWindowsMaxResults = number;
export interface ListServiceLevelObjectiveExclusionWindowsInput {
  Id: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServiceLevelObjectiveExclusionWindowsOutput {
  ExclusionWindows: ExclusionWindow[];
  NextToken?: string;
}
export type ListServiceLevelObjectivesMaxResults = number;
export type MetricSourceTypes = MetricSourceType[];
export interface ListServiceLevelObjectivesInput {
  KeyAttributes?: { [key: string]: string | undefined };
  OperationName?: string;
  DependencyConfig?: DependencyConfig;
  MaxResults?: number;
  NextToken?: string;
  MetricSourceTypes?: MetricSourceType[];
  IncludeLinkedAccounts?: boolean;
  SloOwnerAwsAccountId?: string;
  MetricSource?: MetricSource;
}
export interface ServiceLevelObjectiveSummary {
  Arn: string;
  Name: string;
  KeyAttributes?: { [key: string]: string | undefined };
  OperationName?: string;
  DependencyConfig?: DependencyConfig;
  CreatedTime?: Date;
  EvaluationType?: EvaluationType;
  MetricSourceType?: MetricSourceType;
  MetricSource?: MetricSource;
  CompositeSliConfig?: CompositeSliConfig;
}
export type ServiceLevelObjectiveSummaries = ServiceLevelObjectiveSummary[];
export interface ListServiceLevelObjectivesOutput {
  SloSummaries?: ServiceLevelObjectiveSummary[];
  NextToken?: string;
}
export type ListServiceOperationMaxResults = number;
export interface ListServiceOperationsInput {
  StartTime: Date;
  EndTime: Date;
  KeyAttributes: { [key: string]: string | undefined };
  MaxResults?: number;
  NextToken?: string;
}
export interface ServiceOperation {
  Name: string;
  MetricReferences: MetricReference[];
}
export type ServiceOperations = ServiceOperation[];
export interface ListServiceOperationsOutput {
  StartTime: Date;
  EndTime: Date;
  ServiceOperations: ServiceOperation[];
  NextToken?: string;
}
export type ListServicesMaxResults = number;
export interface ListServicesInput {
  StartTime: Date;
  EndTime: Date;
  MaxResults?: number;
  NextToken?: string;
  IncludeLinkedAccounts?: boolean;
  AwsAccountId?: string;
}
export interface ServiceSummary {
  KeyAttributes: { [key: string]: string | undefined };
  AttributeMaps?: { [key: string]: string | undefined }[];
  MetricReferences: MetricReference[];
  ServiceGroups?: ServiceGroup[];
}
export type ServiceSummaries = ServiceSummary[];
export interface ListServicesOutput {
  StartTime: Date;
  EndTime: Date;
  ServiceSummaries: ServiceSummary[];
  NextToken?: string;
}
export type ListServiceStatesMaxResults = number;
export type AttributeFilterName = string;
export type AttributeFilterValue = string;
export type AttributeFilterValues = string[];
export interface AttributeFilter {
  AttributeFilterName: string;
  AttributeFilterValues: string[];
}
export type AttributeFilters = AttributeFilter[];
export interface ListServiceStatesInput {
  StartTime: Date;
  EndTime: Date;
  MaxResults?: number;
  NextToken?: string;
  IncludeLinkedAccounts?: boolean;
  AwsAccountId?: string;
  AttributeFilters?: AttributeFilter[];
}
export type LatestChangeEvents = ChangeEvent[];
export interface ServiceState {
  AttributeFilters?: AttributeFilter[];
  Service: { [key: string]: string | undefined };
  LatestChangeEvents: ChangeEvent[];
}
export type ServiceStates = ServiceState[];
export interface ListServiceStatesOutput {
  StartTime: Date;
  EndTime: Date;
  ServiceStates: ServiceState[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface PutGroupingConfigurationInput {
  GroupingAttributeDefinitions: GroupingAttributeDefinition[];
}
export interface GroupingConfiguration {
  GroupingAttributeDefinitions: GroupingAttributeDefinition[];
  UpdatedAt: Date;
}
export interface PutGroupingConfigurationOutput {
  GroupingConfiguration: GroupingConfiguration;
}
export interface InstrumentationConfigurationStatusReport {
  InstrumentationType: InstrumentationType;
  SignalType: DynamicInstrumentationSignalType;
  LocationHash: string;
  Status: InstrumentationConfigurationStatus;
  Time: Date;
  ErrorCause?: InstrumentationErrorCause;
}
export type InstrumentationConfigurationStatusList = InstrumentationConfigurationStatusReport[];
export interface ReportInstrumentationConfigurationStatusRequest {
  Service: string;
  Environment: string;
  Configurations: InstrumentationConfigurationStatusReport[];
}
export type UnprocessedStatusEventFailureReason =
  | "THROTTLED"
  | "INTERNAL_ERROR"
  | "VALIDATION_ERROR"
  | (string & {});
export interface UnprocessedStatusEvent {
  InstrumentationType: InstrumentationType;
  SignalType: DynamicInstrumentationSignalType;
  LocationHash: string;
  Status: InstrumentationConfigurationStatus;
  Time: Date;
  FailedReason: UnprocessedStatusEventFailureReason;
}
export type UnprocessedStatusEventList = UnprocessedStatusEvent[];
export interface ReportInstrumentationConfigurationStatusResponse {
  Service: string;
  Environment: string;
  UnprocessedStatusEvents: UnprocessedStatusEvent[];
}
export interface StartDiscoveryInput {}
export interface StartDiscoveryOutput {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateServiceLevelObjectiveInput {
  Id: string;
  Description?: string;
  SliConfig?: ServiceLevelIndicatorConfig;
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig;
  Goal?: Goal;
  BurnRateConfigurations?: BurnRateConfiguration[];
  AutoInvestigationEnabled?: boolean;
}
export interface UpdateServiceLevelObjectiveOutput {
  Slo: ServiceLevelObjective;
}
export type ValidationExceptionMessage = string;
export type ResourceType = string;
export type ResourceId = string;
export type FaultDescription = string;
export type ServiceErrorMessage = string;
export type BatchDeleteInstrumentationConfigurationsError =
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes multiple instrumentation configurations in a single request.
 * Supports two mutually exclusive selection methods:
 * - By scope: Delete all configurations matching a Service + Environment + InstrumentationType
 * - By ARN list: Delete specific configurations by providing a list of resource ARNs
 */
export const batchDeleteInstrumentationConfigurations: API.OperationMethod<
  BatchDeleteInstrumentationConfigurationsRequest,
  BatchDeleteInstrumentationConfigurationsResponse,
  BatchDeleteInstrumentationConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<BatchDeleteInstrumentationConfigurationsRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<BatchDeleteInstrumentationConfigurationsResponse>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteInstrumentationConfigurations",
}));

export type BatchGetServiceLevelObjectiveBudgetReportError =
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to retrieve one or more *service level objective (SLO) budget reports*.
 *
 * An *error budget* is the amount of time or requests in an unhealthy state that your service can accumulate during an interval before your overall SLO budget health is breached and the SLO is considered to be unmet. For example, an SLO with a threshold of 99.95% and a monthly interval translates to an error budget of 21.9 minutes of downtime in a 30-day month.
 *
 * Budget reports include a health indicator, the attainment value, and remaining budget.
 *
 * For more information about SLO error budgets, see SLO concepts.
 */
export const batchGetServiceLevelObjectiveBudgetReport: API.OperationMethod<
  BatchGetServiceLevelObjectiveBudgetReportInput,
  BatchGetServiceLevelObjectiveBudgetReportOutput,
  BatchGetServiceLevelObjectiveBudgetReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<BatchGetServiceLevelObjectiveBudgetReportInput>,
  output: __S(37, __c4, 5) as any as S.Schema<BatchGetServiceLevelObjectiveBudgetReportOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetServiceLevelObjectiveBudgetReport",
}));

export type BatchUpdateExclusionWindowsError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Add or remove time window exclusions for one or more Service Level Objectives (SLOs).
 */
export const batchUpdateExclusionWindows: API.OperationMethod<
  BatchUpdateExclusionWindowsInput,
  BatchUpdateExclusionWindowsOutput,
  BatchUpdateExclusionWindowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<BatchUpdateExclusionWindowsInput>,
  output: __S(44, __c5, 4) as any as S.Schema<BatchUpdateExclusionWindowsOutput>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateExclusionWindows",
}));

export type CreateInstrumentationConfigurationError =
  | ConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a dynamic instrumentation configuration for a specific code or endpoint location within a service and environment. Configurations are immutable after creation.
 *
 * For `BREAKPOINT` type configurations, they expire after 24 hours unless a shorter expiration is provided. For `PROBE` type configurations, they persist until explicitly deleted; an expiration cannot be set for `PROBE` configurations.
 *
 * If a configuration already exists for the same service, environment, signal type, and location, this operation returns a conflict instead of overwriting it. Use attribute filters and capture settings to control where the instrumentation runs and which data is collected.
 */
export const createInstrumentationConfiguration: API.OperationMethod<
  CreateInstrumentationConfigurationRequest,
  CreateInstrumentationConfigurationResponse,
  CreateInstrumentationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<CreateInstrumentationConfigurationRequest>,
  output: __S(55, __c6, 7) as any as S.Schema<CreateInstrumentationConfigurationResponse>,
  errors: [
    ConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInstrumentationConfiguration",
}));

export type CreateServiceLevelObjectiveError =
  | AccessDeniedException
  | ConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations. Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want.
 *
 * Create an SLO to set a target for a service or operation's availability or latency. CloudWatch measures this target frequently you can find whether it has been breached.
 *
 * The target performance quality that is defined for an SLO is the *attainment goal*.
 *
 * You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series.
 *
 * You can't create an SLO for a service operation that was discovered by Application Signals until after that operation has reported standard metrics to Application Signals.
 *
 * When you create an SLO, you specify whether it is a *period-based SLO* or a *request-based SLO*. Each type of SLO has a different way of evaluating your application's performance against its attainment goal.
 *
 * - A *period-based SLO* uses defined *periods* of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the `number of good periods/number of total periods`.
 *
 * For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods.
 *
 * - A *request-based SLO* doesn't use pre-defined periods of time. Instead, the SLO measures `number of good requests/number of total requests` during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO.
 *
 * After you have created an SLO, you can retrieve error budget reports for it. An *error budget* is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal.
 *
 * - For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The *remaining error budget* decreases with every failed period that is recorded. The error budget within one interval can never increase.
 *
 * For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month.
 *
 * - For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests.
 *
 * For more information about SLOs, see Service level objectives (SLOs).
 *
 * When you perform a `CreateServiceLevelObjective` operation, Application Signals creates the *AWSServiceRoleForCloudWatchApplicationSignals* service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions:
 *
 * - `xray:GetServiceGraph`
 *
 * - `logs:StartQuery`
 *
 * - `logs:GetQueryResults`
 *
 * - `cloudwatch:GetMetricData`
 *
 * - `cloudwatch:ListMetrics`
 *
 * - `tag:GetResources`
 *
 * - `autoscaling:DescribeAutoScalingGroups`
 */
export const createServiceLevelObjective: API.OperationMethod<
  CreateServiceLevelObjectiveInput,
  CreateServiceLevelObjectiveOutput,
  CreateServiceLevelObjectiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<CreateServiceLevelObjectiveInput>,
  output: __S(64, __c8, 0) as any as S.Schema<CreateServiceLevelObjectiveOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateServiceLevelObjective",
}));

export type DeleteGroupingConfigurationError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the grouping configuration for this account. This removes all custom grouping attribute definitions that were previously configured.
 */
export const deleteGroupingConfiguration: API.OperationMethod<
  DeleteGroupingConfigurationRequest,
  DeleteGroupingConfigurationOutput,
  DeleteGroupingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<DeleteGroupingConfigurationRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteGroupingConfigurationOutput>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGroupingConfiguration",
}));

export type DeleteInstrumentationConfigurationError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified instrumentation configuration. SDKs remove the instrumentation during their next sync after the configuration is deleted or expires.
 */
export const deleteInstrumentationConfiguration: API.OperationMethod<
  DeleteInstrumentationConfigurationRequest,
  DeleteInstrumentationConfigurationResponse,
  DeleteInstrumentationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<DeleteInstrumentationConfigurationRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DeleteInstrumentationConfigurationResponse>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInstrumentationConfiguration",
}));

export type DeleteServiceLevelObjectiveError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified service level objective.
 */
export const deleteServiceLevelObjective: API.OperationMethod<
  DeleteServiceLevelObjectiveInput,
  DeleteServiceLevelObjectiveOutput,
  DeleteServiceLevelObjectiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<DeleteServiceLevelObjectiveInput>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteServiceLevelObjectiveOutput>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServiceLevelObjective",
}));

export type GetInstrumentationConfigurationError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the details of a single instrumentation configuration identified by service, environment, signal type, and location. Use this to audit or display configuration details.
 */
export const getInstrumentationConfiguration: API.OperationMethod<
  GetInstrumentationConfigurationRequest,
  GetInstrumentationConfigurationResponse,
  GetInstrumentationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<GetInstrumentationConfigurationRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<GetInstrumentationConfigurationResponse>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInstrumentationConfiguration",
}));

export type GetInstrumentationConfigurationStatusError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the status history for a single instrumentation configuration during a specified time range. The response lists when the configuration was ACTIVE, READY, ERROR, or DISABLED.
 *
 * If no status or time window is provided, the operation defaults to ACTIVE events from the last hour.
 */
export const getInstrumentationConfigurationStatus: API.PaginatedOperationMethod<
  GetInstrumentationConfigurationStatusRequest,
  GetInstrumentationConfigurationStatusResponse,
  GetInstrumentationConfigurationStatusError,
  Credentials | HttpClient.HttpClient,
  InstrumentationStatusEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(73, __c9, 1) as any as S.Schema<GetInstrumentationConfigurationStatusRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<GetInstrumentationConfigurationStatusResponse>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInstrumentationConfigurationStatus",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Events",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetServiceError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns information about a service discovered by Application Signals.
 */
export const getService: API.OperationMethod<
  GetServiceInput,
  GetServiceOutput,
  GetServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<GetServiceInput>,
  output: __S(85, __c10, 5) as any as S.Schema<GetServiceOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetService",
}));

export type GetServiceLevelObjectiveError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about one SLO created in the account.
 */
export const getServiceLevelObjective: API.OperationMethod<
  GetServiceLevelObjectiveInput,
  GetServiceLevelObjectiveOutput,
  GetServiceLevelObjectiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<GetServiceLevelObjectiveInput>,
  output: __S(64, __c8, 0) as any as S.Schema<GetServiceLevelObjectiveOutput>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceLevelObjective",
}));

export type ListAuditFindingsError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns a list of audit findings that provide automated analysis of service behavior and root cause analysis. These findings help identify the most significant observations about your services, including performance issues, anomalies, and potential problems. The findings are generated using heuristic algorithms based on established troubleshooting patterns.
 */
export const listAuditFindings: API.OperationMethod<
  ListAuditFindingsInput,
  ListAuditFindingsOutput,
  ListAuditFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<ListAuditFindingsInput>,
  output: __S(105, __c13, 1) as any as S.Schema<ListAuditFindingsOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAuditFindings",
}));

export type ListEntityEventsError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns a list of change events for a specific entity, such as deployments, configuration changes, or other state-changing activities. This operation helps track the history of changes that may have affected service performance.
 */
export const listEntityEvents: API.PaginatedOperationMethod<
  ListEntityEventsInput,
  ListEntityEventsOutput,
  ListEntityEventsError,
  Credentials | HttpClient.HttpClient,
  ChangeEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<ListEntityEventsInput>,
  output: __S(109, __c13, 5) as any as S.Schema<ListEntityEventsOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntityEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ChangeEvents",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListGroupingAttributeDefinitionsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the current grouping configuration for this account, including all custom grouping attribute definitions that have been configured. These definitions determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings.
 */
export const listGroupingAttributeDefinitions: API.OperationMethod<
  ListGroupingAttributeDefinitionsInput,
  ListGroupingAttributeDefinitionsOutput,
  ListGroupingAttributeDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<ListGroupingAttributeDefinitionsInput>,
  output: __S(113, __c14, 1) as any as S.Schema<ListGroupingAttributeDefinitionsOutput>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroupingAttributeDefinitions",
}));

export type ListInstrumentationConfigurationsError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns all active instrumentation configurations for a service and environment. SDKs use this operation to sync configurations and apply client-side filters locally.
 *
 * Include the previous `SyncedAt` value to perform incremental syncs. When no changes are detected, the response sets `Changed` to `false` and omits configuration details.
 */
export const listInstrumentationConfigurations: API.PaginatedOperationMethod<
  ListInstrumentationConfigurationsRequest,
  InstrumentationConfigurationsPage,
  ListInstrumentationConfigurationsError,
  Credentials | HttpClient.HttpClient,
  InstrumentationConfigurationWithoutServiceEnv
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<ListInstrumentationConfigurationsRequest>,
  output: __S(117, __c14, 5) as any as S.Schema<InstrumentationConfigurationsPage>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstrumentationConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "LatestConfigurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceDependenciesError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns a list of service dependencies of the service that you specify. A dependency is an infrastructure component that an operation of this service connects with. Dependencies can include Amazon Web Services services, Amazon Web Services resources, and third-party services.
 */
export const listServiceDependencies: API.PaginatedOperationMethod<
  ListServiceDependenciesInput,
  ListServiceDependenciesOutput,
  ListServiceDependenciesError,
  Credentials | HttpClient.HttpClient,
  ServiceDependency
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<ListServiceDependenciesInput>,
  output: __S(121, __c15, 1) as any as S.Schema<ListServiceDependenciesOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceDependencies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServiceDependencies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceDependentsError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns the list of dependents that invoked the specified service during the provided time range. Dependents include other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.
 */
export const listServiceDependents: API.PaginatedOperationMethod<
  ListServiceDependentsInput,
  ListServiceDependentsOutput,
  ListServiceDependentsError,
  Credentials | HttpClient.HttpClient,
  ServiceDependent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<ListServiceDependentsInput>,
  output: __S(125, __c15, 5) as any as S.Schema<ListServiceDependentsOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceDependents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServiceDependents",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceLevelObjectiveExclusionWindowsError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves all exclusion windows configured for a specific SLO.
 */
export const listServiceLevelObjectiveExclusionWindows: API.PaginatedOperationMethod<
  ListServiceLevelObjectiveExclusionWindowsInput,
  ListServiceLevelObjectiveExclusionWindowsOutput,
  ListServiceLevelObjectiveExclusionWindowsError,
  Credentials | HttpClient.HttpClient,
  ExclusionWindow
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<ListServiceLevelObjectiveExclusionWindowsInput>,
  output: __S(127, __c15, 7) as any as S.Schema<ListServiceLevelObjectiveExclusionWindowsOutput>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceLevelObjectiveExclusionWindows",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ExclusionWindows",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceLevelObjectivesError =
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of SLOs created in this account.
 */
export const listServiceLevelObjectives: API.PaginatedOperationMethod<
  ListServiceLevelObjectivesInput,
  ListServiceLevelObjectivesOutput,
  ListServiceLevelObjectivesError,
  Credentials | HttpClient.HttpClient,
  ServiceLevelObjectiveSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<ListServiceLevelObjectivesInput>,
  output: __S(132, __c16, 4) as any as S.Schema<ListServiceLevelObjectivesOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceLevelObjectives",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SloSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceOperationsError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns a list of the *operations* of this service that have been discovered by Application Signals. Only the operations that were invoked during the specified time range are returned.
 */
export const listServiceOperations: API.PaginatedOperationMethod<
  ListServiceOperationsInput,
  ListServiceOperationsOutput,
  ListServiceOperationsError,
  Credentials | HttpClient.HttpClient,
  ServiceOperation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<ListServiceOperationsInput>,
  output: __S(136, __c17, 0) as any as S.Schema<ListServiceOperationsOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceOperations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServiceOperations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServicesError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns a list of services that have been discovered by Application Signals. A service represents a minimum logical and transactional unit that completes a business function. Services are discovered through Application Signals instrumentation.
 */
export const listServices: API.PaginatedOperationMethod<
  ListServicesInput,
  ListServicesOutput,
  ListServicesError,
  Credentials | HttpClient.HttpClient,
  ServiceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<ListServicesInput>,
  output: __S(140, __c17, 4) as any as S.Schema<ListServicesOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServiceSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceStatesError = ThrottlingException | ValidationException | CommonErrors;
/**
 * Returns information about the last deployment and other change states of services. This API provides visibility into recent changes that may have affected service performance, helping with troubleshooting and change correlation.
 */
export const listServiceStates: API.PaginatedOperationMethod<
  ListServiceStatesInput,
  ListServiceStatesOutput,
  ListServiceStatesError,
  Credentials | HttpClient.HttpClient,
  ServiceState
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<ListServiceStatesInput>,
  output: __S(146, __c18, 2) as any as S.Schema<ListServiceStatesOutput>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceStates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServiceStates",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Displays the tags associated with a CloudWatch resource. Tags can be assigned to service level objectives.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(148, __c18, 4) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ResourceNotFoundException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutGroupingConfigurationError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the grouping configuration for this account. This operation allows you to define custom grouping attributes that determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings. These grouping attributes can then be used to organize and filter services in the Application Signals console and APIs.
 */
export const putGroupingConfiguration: API.OperationMethod<
  PutGroupingConfigurationInput,
  PutGroupingConfigurationOutput,
  PutGroupingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(149, __c18, 5) as any as S.Schema<PutGroupingConfigurationInput>,
  output: __S(151, __c18, 7) as any as S.Schema<PutGroupingConfigurationOutput>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutGroupingConfiguration",
}));

export type ReportInstrumentationConfigurationStatusError =
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Reports the status of one or more instrumentation configurations from SDK instances. Use this to record when configurations become ready, hit errors, become active, or are disabled by limits.
 *
 * Report `READY`, `ERROR`, and `DISABLED` when the status changes. Report `ACTIVE` periodically (for example, every minute) while instrumentation is running.
 */
export const reportInstrumentationConfigurationStatus: API.OperationMethod<
  ReportInstrumentationConfigurationStatusRequest,
  ReportInstrumentationConfigurationStatusResponse,
  ReportInstrumentationConfigurationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<ReportInstrumentationConfigurationStatusRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<ReportInstrumentationConfigurationStatusResponse>,
  errors: [ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReportInstrumentationConfigurationStatus",
}));

export type StartDiscoveryError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables this Amazon Web Services account to be able to use CloudWatch Application Signals by creating the *AWSServiceRoleForCloudWatchApplicationSignals* service-linked role. This service- linked role has the following permissions:
 *
 * - `xray:GetServiceGraph`
 *
 * - `logs:StartQuery`
 *
 * - `logs:GetQueryResults`
 *
 * - `cloudwatch:GetMetricData`
 *
 * - `cloudwatch:ListMetrics`
 *
 * - `tag:GetResources`
 *
 * - `autoscaling:DescribeAutoScalingGroups`
 *
 * A service-linked CloudTrail event channel is created to process CloudTrail events and return change event information. This includes last deployment time, userName, eventName, and other event metadata.
 *
 * After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see Enabling Application Signals.
 */
export const startDiscovery: API.OperationMethod<
  StartDiscoveryInput,
  StartDiscoveryOutput,
  StartDiscoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158, __c19, 6) as any as S.Schema<StartDiscoveryInput>,
  output: __S(159, __c19, 7) as any as S.Schema<StartDiscoveryOutput>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDiscovery",
}));

export type TagResourceError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified CloudWatch resource, such as a service level objective.
 *
 * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
 *
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
 *
 * You can use the `TagResource` action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.
 *
 * You can associate as many as 50 tags with a CloudWatch resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160, __c20, 0) as any as S.Schema<TagResourceRequest>,
  output: __S(159, __c19, 7) as any as S.Schema<TagResourceResponse>,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | ThrottlingException | CommonErrors;
/**
 * Removes one or more tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(159, __c19, 7) as any as S.Schema<UntagResourceResponse>,
  errors: [ResourceNotFoundException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateServiceLevelObjectiveError =
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing service level objective (SLO). If you omit parameters, the previous values of those parameters are retained.
 *
 * You cannot change from a period-based SLO to a request-based SLO, or change from a request-based SLO to a period-based SLO.
 */
export const updateServiceLevelObjective: API.OperationMethod<
  UpdateServiceLevelObjectiveInput,
  UpdateServiceLevelObjectiveOutput,
  UpdateServiceLevelObjectiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162, __c20, 2) as any as S.Schema<UpdateServiceLevelObjectiveInput>,
  output: __S(64, __c8, 0) as any as S.Schema<UpdateServiceLevelObjectiveOutput>,
  errors: [ResourceNotFoundException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServiceLevelObjective",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Service: S.String,
          Environment: S.String,
          InstrumentationType: S.String,
        }),
      ).annotate({ identifier: "BatchDeleteScope" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArns: __S(1, __c0, 1),
          InstrumentationType: S.String,
        }),
      ).annotate({
        identifier: "BatchDeleteByResourceArns",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Scope: __S(0, __c0, 0) }),
        /*@__PURE__*/ S.Struct({ ResourceArns: __S(2, __c0, 2) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ DeletionTarget: __S(3, __c0, 3) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/batch-delete-instrumentation-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteInstrumentationConfigurationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          SignalType: S.optional(S.String),
          LocationHash: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteSuccessfulDeletion",
      });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Code: S.String, Message: S.String }),
      ).annotate({ identifier: "BatchDeleteError" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeletedCount: S.Number,
          SuccessfulDeletions: __S(6, __c0, 6),
          Errors: __S(8, __c1, 0),
        }),
      ).annotate({
        identifier: "BatchDeleteInstrumentationConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          SloIds: __S(1, __c0, 1),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/budget-report" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetServiceLevelObjectiveBudgetReportInput",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "Dimension",
      });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Namespace: S.optional(S.String),
          MetricName: S.optional(S.String),
          Dimensions: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "Metric" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Metric: __S(14, __c1, 6),
          Period: S.Number,
          Stat: S.String,
          Unit: S.optional(S.String),
        }),
      ).annotate({ identifier: "MetricStat" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          MetricStat: S.optional(__S(15, __c1, 7)),
          Expression: S.optional(S.String),
          Label: S.optional(S.String),
          ReturnData: S.optional(S.Boolean),
          Period: S.optional(S.Number),
          AccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "MetricDataQuery" });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ DependencyKeyAttributes: __S(11, __c1, 3), DependencyOperationName: S.String }),
      ).annotate({ identifier: "DependencyConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MetricSourceKeyAttributes: __S(11, __c1, 3),
          MetricSourceAttributes: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "MetricSource" });
    case 4:
      return S.suspend(() => S.Struct({ Type: S.String, Pattern: S.optional(S.String) })).annotate({
        identifier: "SelectionConfig",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ OperationName: S.String })]);
    case 6:
      return S.Array(__S(21, __c2, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          SelectionConfig: __S(20, __c2, 4),
          Components: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "CompositeSliConfig" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: S.optional(__S(11, __c1, 3)),
          OperationName: S.optional(S.String),
          MetricType: S.optional(S.String),
          MetricDataQueries: __S(17, __c2, 1),
          DependencyConfig: S.optional(__S(18, __c2, 2)),
          MetricSource: S.optional(__S(19, __c2, 3)),
          CompositeSliConfig: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({
        identifier: "ServiceLevelIndicatorMetric",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SliMetric: __S(24, __c3, 0),
          MetricThreshold: S.Number,
          ComparisonOperator: S.String,
        }),
      ).annotate({ identifier: "ServiceLevelIndicator" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ GoodCountMetric: __S(17, __c2, 1) }),
        /*@__PURE__*/ S.Struct({ BadCountMetric: __S(17, __c2, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: S.optional(__S(11, __c1, 3)),
          OperationName: S.optional(S.String),
          MetricType: S.optional(S.String),
          TotalRequestCountMetric: __S(17, __c2, 1),
          MonitoredRequestCountMetric: __S(26, __c3, 2),
          DependencyConfig: S.optional(__S(18, __c2, 2)),
          MetricSource: S.optional(__S(19, __c2, 3)),
          CompositeSliConfig: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({
        identifier: "RequestBasedServiceLevelIndicatorMetric",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RequestBasedSliMetric: __S(27, __c3, 3),
          MetricThreshold: S.optional(S.Number),
          ComparisonOperator: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RequestBasedServiceLevelIndicator",
      });
    case 5:
      return S.suspend(() => S.Struct({ DurationUnit: S.String, Duration: S.Number })).annotate({
        identifier: "RollingInterval",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          DurationUnit: S.String,
          Duration: S.Number,
        }),
      ).annotate({ identifier: "CalendarInterval" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ RollingInterval: __S(29, __c3, 5) }),
        /*@__PURE__*/ S.Struct({ CalendarInterval: __S(30, __c3, 6) }),
      ]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Interval: S.optional(__S(31, __c3, 7)),
          AttainmentGoal: S.optional(S.Number),
          WarningThreshold: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Goal" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          EvaluationType: S.optional(S.String),
          BudgetStatus: S.String,
          Attainment: S.optional(S.Number),
          TotalBudgetSeconds: S.optional(S.Number),
          BudgetSecondsRemaining: S.optional(S.Number),
          TotalBudgetRequests: S.optional(S.Number),
          BudgetRequestsRemaining: S.optional(S.Number),
          Sli: S.optional(__S(25, __c3, 1)),
          RequestBasedSli: S.optional(__S(28, __c3, 4)),
          Goal: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({
        identifier: "ServiceLevelObjectiveBudgetReport",
      });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.String,
          ErrorCode: S.String,
          ErrorMessage: S.String,
        }),
      ).annotate({
        identifier: "ServiceLevelObjectiveBudgetReportError",
      });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Reports: __S(34, __c4, 2),
          Errors: __S(36, __c4, 4),
        }),
      ).annotate({
        identifier: "BatchGetServiceLevelObjectiveBudgetReportOutput",
      });
    case 6:
      return S.suspend(() => S.Struct({ Expression: S.optional(S.String) })).annotate({
        identifier: "RecurrenceRule",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Window: __S(29, __c3, 5),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RecurrenceRule: S.optional(__S(38, __c4, 6)),
          Reason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExclusionWindow" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          SloIds: __S(1, __c0, 1),
          AddExclusionWindows: S.optional(__S(40, __c5, 0)),
          RemoveExclusionWindows: S.optional(__S(40, __c5, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/exclusion-windows" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateExclusionWindowsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SloId: S.String, ErrorCode: S.String, ErrorMessage: S.String }),
      ).annotate({
        identifier: "BatchUpdateExclusionWindowsError",
      });
    case 3:
      return S.Array(__S(42, __c5, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ SloIds: __S(1, __c0, 1), Errors: __S(43, __c5, 3) }),
      ).annotate({
        identifier: "BatchUpdateExclusionWindowsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Language: S.String,
          CodeUnit: S.optional(S.String),
          ClassName: S.optional(S.String),
          MethodName: S.optional(S.String),
          FilePath: S.String,
          LineNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CodeLocation" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ CodeLocation: __S(45, __c5, 5) })]);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxHits: S.optional(S.Number),
          MaxStringLength: S.optional(S.Number),
          MaxCollectionWidth: S.optional(S.Number),
          MaxCollectionDepth: S.optional(S.Number),
          MaxStackFrames: S.optional(S.Number),
          MaxStackTraceSize: S.optional(S.Number),
          MaxObjectDepth: S.optional(S.Number),
          MaxFieldsPerObject: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CaptureLimitsConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CaptureArguments: S.optional(__S(1, __c0, 1)),
          CaptureReturn: S.optional(S.Boolean),
          CaptureStackTrace: S.optional(S.Boolean),
          CaptureLocals: S.optional(__S(1, __c0, 1)),
          CaptureLimits: __S(49, __c6, 1),
        }),
      ).annotate({ identifier: "CodeCaptureConfiguration" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ CodeCapture: __S(50, __c6, 2) })]);
    case 4:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          Service: S.String,
          Environment: S.String,
          SignalType: S.String,
          Location: __S(46, __c5, 6),
          Description: S.optional(S.String),
          ExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AttributeFilters: S.optional(__S(48, __c6, 0)),
          CaptureConfiguration: __S(51, __c6, 3),
          Tags: S.optional(__S(53, __c6, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/create-instrumentation-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateInstrumentationConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          Service: S.String,
          Environment: S.String,
          SignalType: S.String,
          Location: __S(46, __c5, 6),
          LocationHash: S.String,
          Description: S.optional(S.String),
          ExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AttributeFilters: S.optional(__S(48, __c6, 0)),
          CaptureConfiguration: __S(51, __c6, 3),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ARN: S.String,
        }),
      ).annotate({
        identifier: "CreateInstrumentationConfigurationResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: S.optional(__S(11, __c1, 3)),
          OperationName: S.optional(S.String),
          MetricType: S.optional(S.String),
          MetricName: S.optional(S.String),
          Statistic: S.optional(S.String),
          PeriodSeconds: S.optional(S.Number),
          MetricSource: S.optional(__S(19, __c2, 3)),
          MetricDataQueries: S.optional(__S(17, __c2, 1)),
          DependencyConfig: S.optional(__S(18, __c2, 2)),
          CompositeSliConfig: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({
        identifier: "ServiceLevelIndicatorMetricConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SliMetricConfig: __S(56, __c7, 0),
          MetricThreshold: S.optional(S.Number),
          ComparisonOperator: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceLevelIndicatorConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: S.optional(__S(11, __c1, 3)),
          OperationName: S.optional(S.String),
          MetricType: S.optional(S.String),
          TotalRequestCountMetric: S.optional(__S(17, __c2, 1)),
          MonitoredRequestCountMetric: S.optional(__S(26, __c3, 2)),
          DependencyConfig: S.optional(__S(18, __c2, 2)),
          MetricSource: S.optional(__S(19, __c2, 3)),
          MetricName: S.optional(S.String),
          CompositeSliConfig: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({
        identifier: "RequestBasedServiceLevelIndicatorMetricConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RequestBasedSliMetricConfig: __S(58, __c7, 2),
          MetricThreshold: S.optional(S.Number),
          ComparisonOperator: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RequestBasedServiceLevelIndicatorConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ LookBackWindowMinutes: S.Number })).annotate({
        identifier: "BurnRateConfiguration",
      });
    case 5:
      return S.Array(__S(60, __c7, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          SliConfig: S.optional(__S(57, __c7, 1)),
          RequestBasedSliConfig: S.optional(__S(59, __c7, 3)),
          Goal: S.optional(__S(32, __c4, 0)),
          Tags: S.optional(__S(53, __c6, 5)),
          BurnRateConfigurations: S.optional(__S(61, __c7, 5)),
          CreateRecommendedSlo: S.optional(S.Boolean),
          AutoInvestigationEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/slo" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateServiceLevelObjectiveInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          Description: S.optional(S.String),
          CreatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Sli: S.optional(__S(25, __c3, 1)),
          RequestBasedSli: S.optional(__S(28, __c3, 4)),
          EvaluationType: S.optional(S.String),
          Goal: __S(32, __c4, 0),
          BurnRateConfigurations: S.optional(__S(61, __c7, 5)),
          MetricSourceType: S.optional(S.String),
          AutoInvestigationEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ServiceLevelObjective" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Slo: __S(63, __c7, 7) })).annotate({
        identifier: "CreateServiceLevelObjectiveOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/grouping-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteGroupingConfigurationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteGroupingConfigurationOutput",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ CodeLocation: __S(45, __c5, 5) }),
        /*@__PURE__*/ S.Struct({ LocationHash: S.String }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          Service: S.String,
          Environment: S.String,
          SignalType: S.String,
          LocationIdentifier: __S(67, __c8, 3),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/delete-instrumentation-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteInstrumentationConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ DeletionStatus: S.String })).annotate({
        identifier: "DeleteInstrumentationConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/slo/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteServiceLevelObjectiveInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          Service: S.String,
          Environment: S.String,
          SignalType: S.String,
          LocationIdentifier: __S(67, __c8, 3),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/get-instrumentation-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetInstrumentationConfigurationRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Configuration: __S(55, __c6, 7) })).annotate({
        identifier: "GetInstrumentationConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          Service: S.String,
          Environment: S.String,
          SignalType: S.String,
          LocationIdentifier: __S(67, __c8, 3),
          Status: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/get-instrumentation-configuration-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetInstrumentationConfigurationStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Time: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ErrorCause: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InstrumentationStatusEvent",
      });
    case 3:
      return S.Array(__S(74, __c9, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Service: S.String,
          Environment: S.String,
          SignalType: S.String,
          Location: __S(46, __c5, 6),
          Status: S.String,
          Events: __S(75, __c9, 3),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetInstrumentationConfigurationStatusResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartTime")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndTime")),
          KeyAttributes: __S(11, __c1, 3),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/service" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetServiceInput" });
    case 6:
      return S.Array(__S(47, __c5, 7));
    case 7:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          GroupValue: S.String,
          GroupSource: S.String,
          GroupIdentifier: S.String,
        }),
      ).annotate({ identifier: "ServiceGroup" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79, __c9, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Namespace: S.String,
          MetricType: S.String,
          Dimensions: S.optional(__S(13, __c1, 5)),
          MetricName: S.String,
          AccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "MetricReference" });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.Array(__S(11, __c1, 3));
    case 4:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: S.optional(__S(11, __c1, 3)),
          AttributeMaps: S.optional(__S(78, __c9, 6)),
          ServiceGroups: S.optional(__S(80, __c10, 0)),
          MetricReferences: S.optional(__S(82, __c10, 2)),
          LogGroupReferences: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({ identifier: "Service" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Service: __S(84, __c10, 4),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LogGroupReferences: S.optional(__S(83, __c10, 3)),
        }),
      ).annotate({ identifier: "GetServiceOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/slo/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetServiceLevelObjectiveInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          Environment: S.optional(S.String),
          AwsAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceEntity" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SloName: S.optional(S.String), SloArn: S.optional(S.String) }),
      ).annotate({
        identifier: "ServiceLevelObjectiveEntity",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Service: S.optional(__S(87, __c10, 7)),
          Operation: S.optional(S.String),
          MetricType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceOperationEntity" });
    case 2:
      return S.suspend(() => S.Struct({ CanaryName: S.String })).annotate({
        identifier: "CanaryEntity",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Service: __S(87, __c10, 7) }),
        /*@__PURE__*/ S.Struct({ Slo: __S(88, __c11, 0) }),
        /*@__PURE__*/ S.Struct({ ServiceOperation: __S(89, __c11, 1) }),
        /*@__PURE__*/ S.Struct({ Canary: __S(90, __c11, 2) }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ Type: S.String, Data: __S(91, __c11, 3) })).annotate({
        identifier: "AuditTarget",
      });
    case 5:
      return S.Array(__S(92, __c11, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartTime")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndTime")),
          Auditors: S.optional(__S(1, __c0, 1)),
          AuditTargets: __S(93, __c11, 5),
          DetailLevel: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/auditFindings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAuditFindingsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Auditor: S.optional(S.String),
          Description: S.optional(S.String),
          Data: S.optional(__S(11, __c1, 3)),
          Severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "AuditorResult" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95, __c11, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          MetricDataQueries: S.optional(__S(17, __c2, 1)),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "MetricGraph" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: __S(11, __c1, 3),
          Name: S.String,
          NodeId: S.String,
          Operation: S.optional(S.String),
          Type: S.optional(S.String),
          Duration: S.optional(S.Number),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "Node" });
    case 3:
      return S.Array(__S(98, __c12, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          SourceNodeId: S.optional(S.String),
          DestinationNodeId: S.optional(S.String),
          Duration: S.optional(S.Number),
          ConnectionType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Edge" });
    case 5:
      return S.Array(__S(100, __c12, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ Nodes: S.optional(__S(99, __c12, 3)), Edges: S.optional(__S(101, __c12, 5)) }),
      ).annotate({ identifier: "DependencyGraph" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: __S(11, __c1, 3),
          AuditorResults: S.optional(__S(96, __c12, 0)),
          Operation: S.optional(S.String),
          MetricGraph: S.optional(__S(97, __c12, 1)),
          DependencyGraph: S.optional(__S(102, __c12, 6)),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "AuditFinding" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AuditFindings: __S(104, __c13, 0),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAuditFindingsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Entity: __S(11, __c1, 3),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/events" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEntityEventsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          AccountId: S.String,
          Region: S.String,
          Entity: __S(11, __c1, 3),
          ChangeEventType: S.String,
          EventId: S.String,
          UserName: S.optional(S.String),
          EventName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChangeEvent" });
    case 4:
      return S.Array(__S(107, __c13, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ChangeEvents: __S(108, __c13, 4),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListEntityEventsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          AwsAccountId: S.optional(S.String).pipe(T.HttpQuery("AwsAccountId")),
          IncludeLinkedAccounts: S.optional(S.Boolean).pipe(T.HttpQuery("IncludeLinkedAccounts")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/grouping-attribute-definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListGroupingAttributeDefinitionsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GroupingName: S.String,
          GroupingSourceKeys: S.optional(__S(1, __c0, 1)),
          DefaultGroupingValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GroupingAttributeDefinition",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          GroupingAttributeDefinitions: __S(112, __c14, 0),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListGroupingAttributeDefinitionsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Service: S.String,
          Environment: S.String,
          InstrumentationType: S.String,
          SyncedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-instrumentation-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListInstrumentationConfigurationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          SignalType: S.String,
          Location: __S(46, __c5, 6),
          LocationHash: S.String,
          Description: S.optional(S.String),
          ExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AttributeFilters: S.optional(__S(48, __c6, 0)),
          CaptureConfiguration: __S(51, __c6, 3),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ARN: S.String,
        }),
      ).annotate({
        identifier: "InstrumentationConfigurationWithoutServiceEnv",
      });
    case 4:
      return S.Array(__S(115, __c14, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Service: S.String,
          Environment: S.String,
          Changed: S.Boolean,
          LatestConfigurations: S.optional(__S(116, __c14, 4)),
          SyncedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          SyncInterval: S.Number,
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InstrumentationConfigurationsPage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartTime")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndTime")),
          KeyAttributes: __S(11, __c1, 3),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/service-dependencies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceDependenciesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          OperationName: S.String,
          DependencyKeyAttributes: __S(11, __c1, 3),
          DependencyOperationName: S.String,
          MetricReferences: __S(82, __c10, 2),
        }),
      ).annotate({ identifier: "ServiceDependency" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119, __c14, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ServiceDependencies: __S(120, __c15, 0),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListServiceDependenciesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartTime")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndTime")),
          KeyAttributes: __S(11, __c1, 3),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/service-dependents" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceDependentsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OperationName: S.optional(S.String),
          DependentKeyAttributes: __S(11, __c1, 3),
          DependentOperationName: S.optional(S.String),
          MetricReferences: __S(82, __c10, 2),
        }),
      ).annotate({ identifier: "ServiceDependent" });
    case 4:
      return S.Array(__S(123, __c15, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ServiceDependents: __S(124, __c15, 4),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListServiceDependentsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/slo/{Id}/exclusion-windows" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceLevelObjectiveExclusionWindowsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ExclusionWindows: __S(40, __c5, 0), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListServiceLevelObjectiveExclusionWindowsOutput",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: S.optional(__S(11, __c1, 3)),
          OperationName: S.optional(S.String).pipe(T.HttpQuery("OperationName")),
          DependencyConfig: S.optional(__S(18, __c2, 2)),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MetricSourceTypes: S.optional(__S(128, __c16, 0)),
          IncludeLinkedAccounts: S.optional(S.Boolean).pipe(T.HttpQuery("IncludeLinkedAccounts")),
          SloOwnerAwsAccountId: S.optional(S.String).pipe(T.HttpQuery("SloOwnerAwsAccountId")),
          MetricSource: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/slos" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListServiceLevelObjectivesInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          KeyAttributes: S.optional(__S(11, __c1, 3)),
          OperationName: S.optional(S.String),
          DependencyConfig: S.optional(__S(18, __c2, 2)),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EvaluationType: S.optional(S.String),
          MetricSourceType: S.optional(S.String),
          MetricSource: S.optional(__S(19, __c2, 3)),
          CompositeSliConfig: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({
        identifier: "ServiceLevelObjectiveSummary",
      });
    case 3:
      return S.Array(__S(130, __c16, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          SloSummaries: S.optional(__S(131, __c16, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListServiceLevelObjectivesOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartTime")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndTime")),
          KeyAttributes: __S(11, __c1, 3),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/service-operations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServiceOperationsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, MetricReferences: __S(82, __c10, 2) }),
      ).annotate({ identifier: "ServiceOperation" });
    case 7:
      return S.Array(__S(134, __c16, 6));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ServiceOperations: __S(135, __c16, 7),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListServiceOperationsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("StartTime")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("EndTime")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          IncludeLinkedAccounts: S.optional(S.Boolean).pipe(T.HttpQuery("IncludeLinkedAccounts")),
          AwsAccountId: S.optional(S.String).pipe(T.HttpQuery("AwsAccountId")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/services" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListServicesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          KeyAttributes: __S(11, __c1, 3),
          AttributeMaps: S.optional(__S(78, __c9, 6)),
          MetricReferences: __S(82, __c10, 2),
          ServiceGroups: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({ identifier: "ServiceSummary" });
    case 3:
      return S.Array(__S(138, __c17, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ServiceSummaries: __S(139, __c17, 3),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListServicesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AttributeFilterName: S.String, AttributeFilterValues: __S(1, __c0, 1) }),
      ).annotate({ identifier: "AttributeFilter" });
    case 6:
      return S.Array(__S(141, __c17, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          IncludeLinkedAccounts: S.optional(S.Boolean),
          AwsAccountId: S.optional(S.String),
          AttributeFilters: S.optional(__S(142, __c17, 6)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/service/states" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListServiceStatesInput" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AttributeFilters: S.optional(__S(142, __c17, 6)),
          Service: __S(11, __c1, 3),
          LatestChangeEvents: __S(108, __c13, 4),
        }),
      ).annotate({ identifier: "ServiceState" });
    case 1:
      return S.Array(__S(144, __c18, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ServiceStates: __S(145, __c18, 1),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListServiceStatesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpQuery("ResourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(53, __c6, 5)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupingAttributeDefinitions: __S(112, __c14, 0) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/grouping-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutGroupingConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GroupingAttributeDefinitions: __S(112, __c14, 0),
          UpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GroupingConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ GroupingConfiguration: __S(150, __c18, 6) })).annotate({
        identifier: "PutGroupingConfigurationOutput",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          SignalType: S.String,
          LocationHash: S.String,
          Status: S.String,
          Time: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ErrorCause: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InstrumentationConfigurationStatusReport",
      });
    case 1:
      return S.Array(__S(152, __c19, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Service: S.String,
          Environment: S.String,
          Configurations: __S(153, __c19, 1),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/report-instrumentation-configuration-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ReportInstrumentationConfigurationStatusRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstrumentationType: S.String,
          SignalType: S.String,
          LocationHash: S.String,
          Status: S.String,
          Time: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          FailedReason: S.String,
        }),
      ).annotate({ identifier: "UnprocessedStatusEvent" });
    case 4:
      return S.Array(__S(155, __c19, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Service: S.String,
          Environment: S.String,
          UnprocessedStatusEvents: __S(156, __c19, 4),
        }),
      ).annotate({
        identifier: "ReportInstrumentationConfigurationStatusResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/start-discovery" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartDiscoveryInput" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "StartDiscoveryOutput",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(53, __c6, 5) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tag-resource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(1, __c0, 1) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/untag-resource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          Description: S.optional(S.String),
          SliConfig: S.optional(__S(57, __c7, 1)),
          RequestBasedSliConfig: S.optional(__S(59, __c7, 3)),
          Goal: S.optional(__S(32, __c4, 0)),
          BurnRateConfigurations: S.optional(__S(61, __c7, 5)),
          AutoInvestigationEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/slo/{Id}" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateServiceLevelObjectiveInput",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
