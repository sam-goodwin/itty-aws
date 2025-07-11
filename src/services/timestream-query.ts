import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class TimestreamQuery extends AWSServiceClient {
  cancelQuery(
    input: CancelQueryRequest,
  ): Effect.Effect<
    CancelQueryResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createScheduledQuery(
    input: CreateScheduledQueryRequest,
  ): Effect.Effect<
    CreateScheduledQueryResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteScheduledQuery(
    input: DeleteScheduledQueryRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccountSettings(
    input: DescribeAccountSettingsRequest,
  ): Effect.Effect<
    DescribeAccountSettingsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | CommonAwsError
  >;
  describeEndpoints(
    input: DescribeEndpointsRequest,
  ): Effect.Effect<
    DescribeEndpointsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeScheduledQuery(
    input: DescribeScheduledQueryRequest,
  ): Effect.Effect<
    DescribeScheduledQueryResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  executeScheduledQuery(
    input: ExecuteScheduledQueryRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listScheduledQueries(
    input: ListScheduledQueriesRequest,
  ): Effect.Effect<
    ListScheduledQueriesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  prepareQuery(
    input: PrepareQueryRequest,
  ): Effect.Effect<
    PrepareQueryResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  query(
    input: QueryRequest,
  ): Effect.Effect<
    QueryResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | QueryExecutionException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    UpdateAccountSettingsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateScheduledQuery(
    input: UpdateScheduledQueryRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AccountSettingsNotificationConfiguration {
  SnsConfiguration?: SnsConfiguration;
  RoleArn: string;
}
export type AmazonResourceName = string;

export interface CancelQueryRequest {
  QueryId: string;
}
export interface CancelQueryResponse {
  CancellationMessage?: string;
}
export type ClientRequestToken = string;

export type ClientToken = string;

export interface ColumnInfo {
  Name?: string;
  Type: Type;
}
export type ColumnInfoList = Array<ColumnInfo>;
export type ComputeMode = "ON_DEMAND" | "PROVISIONED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateScheduledQueryRequest {
  Name: string;
  QueryString: string;
  ScheduleConfiguration: ScheduleConfiguration;
  NotificationConfiguration: NotificationConfiguration;
  TargetConfiguration?: TargetConfiguration;
  ClientToken?: string;
  ScheduledQueryExecutionRoleArn: string;
  Tags?: Array<Tag>;
  KmsKeyId?: string;
  ErrorReportConfiguration: ErrorReportConfiguration;
}
export interface CreateScheduledQueryResponse {
  Arn: string;
}
export interface Datum {
  ScalarValue?: string;
  TimeSeriesValue?: Array<TimeSeriesDataPoint>;
  ArrayValue?: Array<Datum>;
  RowValue?: Row;
  NullValue?: boolean;
}
export type DatumList = Array<Datum>;
export interface DeleteScheduledQueryRequest {
  ScheduledQueryArn: string;
}
export interface DescribeAccountSettingsRequest {}
export interface DescribeAccountSettingsResponse {
  MaxQueryTCU?: number;
  QueryPricingModel?: QueryPricingModel;
  QueryCompute?: QueryComputeResponse;
}
export interface DescribeEndpointsRequest {}
export interface DescribeEndpointsResponse {
  Endpoints: Array<Endpoint>;
}
export interface DescribeScheduledQueryRequest {
  ScheduledQueryArn: string;
}
export interface DescribeScheduledQueryResponse {
  ScheduledQuery: ScheduledQueryDescription;
}
export interface DimensionMapping {
  Name: string;
  DimensionValueType: DimensionValueType;
}
export type DimensionMappingList = Array<DimensionMapping>;
export type DimensionValueType = "VARCHAR";
export type Double = number;

export interface Endpoint {
  Address: string;
  CachePeriodInMinutes: number;
}
export type Endpoints = Array<Endpoint>;
export type ErrorMessage = string;

export interface ErrorReportConfiguration {
  S3Configuration: S3Configuration;
}
export interface ErrorReportLocation {
  S3ReportLocation?: S3ReportLocation;
}
export interface ExecuteScheduledQueryRequest {
  ScheduledQueryArn: string;
  InvocationTime: Date | string;
  ClientToken?: string;
  QueryInsights?: ScheduledQueryInsights;
}
export interface ExecutionStats {
  ExecutionTimeInMillis?: number;
  DataWrites?: number;
  BytesMetered?: number;
  CumulativeBytesScanned?: number;
  RecordsIngested?: number;
  QueryResultRows?: number;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEndpointException extends EffectData.TaggedError(
  "InvalidEndpointException",
)<{
  readonly Message?: string;
}> {}
export interface LastUpdate {
  TargetQueryTCU?: number;
  Status?: LastUpdateStatus;
  StatusMessage?: string;
}
export type LastUpdateStatus = "PENDING" | "FAILED" | "SUCCEEDED";
export interface ListScheduledQueriesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListScheduledQueriesResponse {
  ScheduledQueries: Array<ScheduledQuery>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags: Array<Tag>;
  NextToken?: string;
}
export type Long = number;

export type MaxQueryCapacity = number;

export type MaxQueryResults = number;

export type MaxScheduledQueriesResults = number;

export type MaxTagsForResourceResult = number;

export type MeasureValueType =
  | "BIGINT"
  | "BOOLEAN"
  | "DOUBLE"
  | "VARCHAR"
  | "MULTI";
export interface MixedMeasureMapping {
  MeasureName?: string;
  SourceColumn?: string;
  TargetMeasureName?: string;
  MeasureValueType: MeasureValueType;
  MultiMeasureAttributeMappings?: Array<MultiMeasureAttributeMapping>;
}
export type MixedMeasureMappingList = Array<MixedMeasureMapping>;
export interface MultiMeasureAttributeMapping {
  SourceColumn: string;
  TargetMultiMeasureAttributeName?: string;
  MeasureValueType: ScalarMeasureValueType;
}
export type MultiMeasureAttributeMappingList =
  Array<MultiMeasureAttributeMapping>;
export interface MultiMeasureMappings {
  TargetMultiMeasureName?: string;
  MultiMeasureAttributeMappings: Array<MultiMeasureAttributeMapping>;
}
export type NextScheduledQueriesResultsToken = string;

export type NextTagsForResourceResultsToken = string;

export interface NotificationConfiguration {
  SnsConfiguration: SnsConfiguration;
}
export type NullableBoolean = boolean;

export type PaginationToken = string;

export interface ParameterMapping {
  Name: string;
  Type: Type;
}
export type ParameterMappingList = Array<ParameterMapping>;
export type PartitionKey = string;

export type PartitionKeyList = Array<string>;
export interface PrepareQueryRequest {
  QueryString: string;
  ValidateOnly?: boolean;
}
export interface PrepareQueryResponse {
  QueryString: string;
  Columns: Array<SelectColumn>;
  Parameters: Array<ParameterMapping>;
}
export interface ProvisionedCapacityRequest {
  TargetQueryTCU: number;
  NotificationConfiguration?: AccountSettingsNotificationConfiguration;
}
export interface ProvisionedCapacityResponse {
  ActiveQueryTCU?: number;
  NotificationConfiguration?: AccountSettingsNotificationConfiguration;
  LastUpdate?: LastUpdate;
}
export interface QueryComputeRequest {
  ComputeMode?: ComputeMode;
  ProvisionedCapacity?: ProvisionedCapacityRequest;
}
export interface QueryComputeResponse {
  ComputeMode?: ComputeMode;
  ProvisionedCapacity?: ProvisionedCapacityResponse;
}
export declare class QueryExecutionException extends EffectData.TaggedError(
  "QueryExecutionException",
)<{
  readonly Message?: string;
}> {}
export type QueryId = string;

export interface QueryInsights {
  Mode: QueryInsightsMode;
}
export type QueryInsightsMode = "ENABLED_WITH_RATE_CONTROL" | "DISABLED";
export interface QueryInsightsResponse {
  QuerySpatialCoverage?: QuerySpatialCoverage;
  QueryTemporalRange?: QueryTemporalRange;
  QueryTableCount?: number;
  OutputRows?: number;
  OutputBytes?: number;
  UnloadPartitionCount?: number;
  UnloadWrittenRows?: number;
  UnloadWrittenBytes?: number;
}
export type QueryPricingModel = "BYTES_SCANNED" | "COMPUTE_UNITS";
export interface QueryRequest {
  QueryString: string;
  ClientToken?: string;
  NextToken?: string;
  MaxRows?: number;
  QueryInsights?: QueryInsights;
}
export interface QueryResponse {
  QueryId: string;
  NextToken?: string;
  Rows: Array<Row>;
  ColumnInfo: Array<ColumnInfo>;
  QueryStatus?: QueryStatus;
  QueryInsightsResponse?: QueryInsightsResponse;
}
export interface QuerySpatialCoverage {
  Max?: QuerySpatialCoverageMax;
}
export interface QuerySpatialCoverageMax {
  Value?: number;
  TableArn?: string;
  PartitionKey?: Array<string>;
}
export interface QueryStatus {
  ProgressPercentage?: number;
  CumulativeBytesScanned?: number;
  CumulativeBytesMetered?: number;
}
export type QueryString = string;

export type QueryTCU = number;

export interface QueryTemporalRange {
  Max?: QueryTemporalRangeMax;
}
export interface QueryTemporalRangeMax {
  Value?: number;
  TableArn?: string;
}
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ScheduledQueryArn?: string;
}> {}
export interface Row {
  Data: Array<Datum>;
}
export type RowList = Array<Row>;
export type S3BucketName = string;

export interface S3Configuration {
  BucketName: string;
  ObjectKeyPrefix?: string;
  EncryptionOption?: S3EncryptionOption;
}
export type S3EncryptionOption = "SSE_S3" | "SSE_KMS";
export type S3ObjectKey = string;

export type S3ObjectKeyPrefix = string;

export interface S3ReportLocation {
  BucketName?: string;
  ObjectKey?: string;
}
export type ScalarMeasureValueType =
  | "BIGINT"
  | "BOOLEAN"
  | "DOUBLE"
  | "VARCHAR"
  | "TIMESTAMP";
export type ScalarType =
  | "VARCHAR"
  | "BOOLEAN"
  | "BIGINT"
  | "DOUBLE"
  | "TIMESTAMP"
  | "DATE"
  | "TIME"
  | "INTERVAL_DAY_TO_SECOND"
  | "INTERVAL_YEAR_TO_MONTH"
  | "UNKNOWN"
  | "INTEGER";
export type ScalarValue = string;

export interface ScheduleConfiguration {
  ScheduleExpression: string;
}
export interface ScheduledQuery {
  Arn: string;
  Name: string;
  CreationTime?: Date | string;
  State: ScheduledQueryState;
  PreviousInvocationTime?: Date | string;
  NextInvocationTime?: Date | string;
  ErrorReportConfiguration?: ErrorReportConfiguration;
  TargetDestination?: TargetDestination;
  LastRunStatus?: ScheduledQueryRunStatus;
}
export interface ScheduledQueryDescription {
  Arn: string;
  Name: string;
  QueryString: string;
  CreationTime?: Date | string;
  State: ScheduledQueryState;
  PreviousInvocationTime?: Date | string;
  NextInvocationTime?: Date | string;
  ScheduleConfiguration: ScheduleConfiguration;
  NotificationConfiguration: NotificationConfiguration;
  TargetConfiguration?: TargetConfiguration;
  ScheduledQueryExecutionRoleArn?: string;
  KmsKeyId?: string;
  ErrorReportConfiguration?: ErrorReportConfiguration;
  LastRunSummary?: ScheduledQueryRunSummary;
  RecentlyFailedRuns?: Array<ScheduledQueryRunSummary>;
}
export interface ScheduledQueryInsights {
  Mode: ScheduledQueryInsightsMode;
}
export type ScheduledQueryInsightsMode =
  | "ENABLED_WITH_RATE_CONTROL"
  | "DISABLED";
export interface ScheduledQueryInsightsResponse {
  QuerySpatialCoverage?: QuerySpatialCoverage;
  QueryTemporalRange?: QueryTemporalRange;
  QueryTableCount?: number;
  OutputRows?: number;
  OutputBytes?: number;
}
export type ScheduledQueryList = Array<ScheduledQuery>;
export type ScheduledQueryName = string;

export type ScheduledQueryRunStatus =
  | "AUTO_TRIGGER_SUCCESS"
  | "AUTO_TRIGGER_FAILURE"
  | "MANUAL_TRIGGER_SUCCESS"
  | "MANUAL_TRIGGER_FAILURE";
export interface ScheduledQueryRunSummary {
  InvocationTime?: Date | string;
  TriggerTime?: Date | string;
  RunStatus?: ScheduledQueryRunStatus;
  ExecutionStats?: ExecutionStats;
  QueryInsightsResponse?: ScheduledQueryInsightsResponse;
  ErrorReportLocation?: ErrorReportLocation;
  FailureReason?: string;
}
export type ScheduledQueryRunSummaryList = Array<ScheduledQueryRunSummary>;
export type ScheduledQueryState = "ENABLED" | "DISABLED";
export type ScheduleExpression = string;

export type SchemaName = string;

export interface SelectColumn {
  Name?: string;
  Type?: Type;
  DatabaseName?: string;
  TableName?: string;
  Aliased?: boolean;
}
export type SelectColumnList = Array<SelectColumn>;
export type ServiceErrorMessage = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface SnsConfiguration {
  TopicArn: string;
}
export type TimestreamQueryString = string;

export type StringValue2048 = string;

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

export interface TargetConfiguration {
  TimestreamConfiguration: TimestreamConfiguration;
}
export interface TargetDestination {
  TimestreamDestination?: TimestreamDestination;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Time = Date | string;

export interface TimeSeriesDataPoint {
  Time: string;
  Value: Datum;
}
export type TimeSeriesDataPointList = Array<TimeSeriesDataPoint>;
export type Timestamp = string;

export interface TimestreamConfiguration {
  DatabaseName: string;
  TableName: string;
  TimeColumn: string;
  DimensionMappings: Array<DimensionMapping>;
  MultiMeasureMappings?: MultiMeasureMappings;
  MixedMeasureMappings?: Array<MixedMeasureMapping>;
  MeasureNameColumn?: string;
}
export interface TimestreamDestination {
  DatabaseName?: string;
  TableName?: string;
}
export interface Type {
  ScalarType?: ScalarType;
  ArrayColumnInfo?: ColumnInfo;
  TimeSeriesMeasureValueColumnInfo?: ColumnInfo;
  RowColumnInfo?: Array<ColumnInfo>;
}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAccountSettingsRequest {
  MaxQueryTCU?: number;
  QueryPricingModel?: QueryPricingModel;
  QueryCompute?: QueryComputeRequest;
}
export interface UpdateAccountSettingsResponse {
  MaxQueryTCU?: number;
  QueryPricingModel?: QueryPricingModel;
  QueryCompute?: QueryComputeResponse;
}
export interface UpdateScheduledQueryRequest {
  ScheduledQueryArn: string;
  State: ScheduledQueryState;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace CancelQuery {
  export type Input = CancelQueryRequest;
  export type Output = CancelQueryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateScheduledQuery {
  export type Input = CreateScheduledQueryRequest;
  export type Output = CreateScheduledQueryResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteScheduledQuery {
  export type Input = DeleteScheduledQueryRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountSettings {
  export type Input = DescribeAccountSettingsRequest;
  export type Output = DescribeAccountSettingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeEndpoints {
  export type Input = DescribeEndpointsRequest;
  export type Output = DescribeEndpointsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScheduledQuery {
  export type Input = DescribeScheduledQueryRequest;
  export type Output = DescribeScheduledQueryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExecuteScheduledQuery {
  export type Input = ExecuteScheduledQueryRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScheduledQueries {
  export type Input = ListScheduledQueriesRequest;
  export type Output = ListScheduledQueriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PrepareQuery {
  export type Input = PrepareQueryRequest;
  export type Output = PrepareQueryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Query {
  export type Input = QueryRequest;
  export type Output = QueryResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | QueryExecutionException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAccountSettings {
  export type Input = UpdateAccountSettingsRequest;
  export type Output = UpdateAccountSettingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateScheduledQuery {
  export type Input = UpdateScheduledQueryRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
