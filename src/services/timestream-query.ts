import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface Timestream_20181101 {
  cancelQuery(
    input: CancelQueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createScheduledQuery(
    input: CreateScheduledQueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidEndpointException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteScheduledQuery(
    input: DeleteScheduledQueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeAccountSettings(
    input: DescribeAccountSettingsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ThrottlingException | CommonAwsError
  >;
  describeEndpoints(
    input: DescribeEndpointsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeScheduledQuery(
    input: DescribeScheduledQueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  executeScheduledQuery(
    input: ExecuteScheduledQueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listScheduledQueries(
    input: ListScheduledQueriesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  prepareQuery(
    input: PrepareQueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ThrottlingException | ValidationException | CommonAwsError
  >;
  query(
    input: QueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidEndpointException | QueryExecutionException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InvalidEndpointException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateScheduledQuery(
    input: UpdateScheduledQueryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type TimestreamQuery = Timestream_20181101;

export interface AccessDeniedException {
}
export interface AccountSettingsNotificationConfiguration {
}
export type AmazonResourceName = string;

export interface CancelQueryRequest {
}
export interface CancelQueryResponse {
}
export type ClientRequestToken = string;

export type ClientToken = string;

export interface ColumnInfo {
}
export type ColumnInfoList = Array<unknown>;
export type ComputeMode = never;
export interface ConflictException {
}
export interface CreateScheduledQueryRequest {
}
export interface CreateScheduledQueryResponse {
}
export interface Datum {
}
export type DatumList = Array<unknown>;
export interface DeleteScheduledQueryRequest {
}
export interface DescribeAccountSettingsRequest {
}
export interface DescribeAccountSettingsResponse {
}
export interface DescribeEndpointsRequest {
}
export interface DescribeEndpointsResponse {
}
export interface DescribeScheduledQueryRequest {
}
export interface DescribeScheduledQueryResponse {
}
export interface DimensionMapping {
}
export type DimensionMappingList = Array<unknown>;
export type DimensionValueType = never;
export type Double = number;

export interface Endpoint {
}
export type Endpoints = Array<unknown>;
export type ErrorMessage = string;

export interface ErrorReportConfiguration {
}
export interface ErrorReportLocation {
}
export interface ExecuteScheduledQueryRequest {
}
export interface ExecutionStats {
}
export interface InternalServerException {
}
export interface InvalidEndpointException {
}
export interface LastUpdate {
}
export type LastUpdateStatus = never;
export interface ListScheduledQueriesRequest {
}
export interface ListScheduledQueriesResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type Long = number;

export type MaxQueryCapacity = number;

export type MaxQueryResults = number;

export type MaxScheduledQueriesResults = number;

export type MaxTagsForResourceResult = number;

export type MeasureValueType = never;
export interface MixedMeasureMapping {
}
export type MixedMeasureMappingList = Array<unknown>;
export interface MultiMeasureAttributeMapping {
}
export type MultiMeasureAttributeMappingList = Array<unknown>;
export interface MultiMeasureMappings {
}
export type NextScheduledQueriesResultsToken = string;

export type NextTagsForResourceResultsToken = string;

export interface NotificationConfiguration {
}
export type NullableBoolean = boolean;

export type PaginationToken = string;

export interface ParameterMapping {
}
export type ParameterMappingList = Array<unknown>;
export type PartitionKey = string;

export type PartitionKeyList = Array<unknown>;
export interface PrepareQueryRequest {
}
export interface PrepareQueryResponse {
}
export interface ProvisionedCapacityRequest {
}
export interface ProvisionedCapacityResponse {
}
export interface QueryComputeRequest {
}
export interface QueryComputeResponse {
}
export interface QueryExecutionException {
}
export type QueryId = string;

export interface QueryInsights {
}
export type QueryInsightsMode = never;
export interface QueryInsightsResponse {
}
export type QueryPricingModel = never;
export interface QueryRequest {
}
export interface QueryResponse {
}
export interface QuerySpatialCoverage {
}
export interface QuerySpatialCoverageMax {
}
export interface QueryStatus {
}
export type QueryString = string;

export type QueryTCU = number;

export interface QueryTemporalRange {
}
export interface QueryTemporalRangeMax {
}
export type ResourceName = string;

export interface ResourceNotFoundException {
}
export interface Row {
}
export type RowList = Array<unknown>;
export type S3BucketName = string;

export interface S3Configuration {
}
export type S3EncryptionOption = never;
export type S3ObjectKey = string;

export type S3ObjectKeyPrefix = string;

export interface S3ReportLocation {
}
export type ScalarMeasureValueType = never;
export type ScalarType = never;
export type ScalarValue = string;

export interface ScheduleConfiguration {
}
export interface ScheduledQuery {
}
export interface ScheduledQueryDescription {
}
export interface ScheduledQueryInsights {
}
export type ScheduledQueryInsightsMode = never;
export interface ScheduledQueryInsightsResponse {
}
export type ScheduledQueryList = Array<unknown>;
export type ScheduledQueryName = string;

export type ScheduledQueryRunStatus = never;
export interface ScheduledQueryRunSummary {
}
export type ScheduledQueryRunSummaryList = Array<unknown>;
export type ScheduledQueryState = never;
export type ScheduleExpression = string;

export type SchemaName = string;

export interface SelectColumn {
}
export type SelectColumnList = Array<unknown>;
export type ServiceErrorMessage = string;

export interface ServiceQuotaExceededException {
}
export interface SnsConfiguration {
}
export type StringValue2048 = string;

export interface Tag {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface TargetConfiguration {
}
export interface TargetDestination {
}
export interface ThrottlingException {
}
export type Time = Date | string;

export interface TimeSeriesDataPoint {
}
export type TimeSeriesDataPointList = Array<unknown>;
export type Timestamp = string;

export interface TimestreamConfiguration {
}
export interface TimestreamDestination {
}
export interface Type {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateAccountSettingsRequest {
}
export interface UpdateAccountSettingsResponse {
}
export interface UpdateScheduledQueryRequest {
}
export interface ValidationException {
}
export declare namespace CancelQuery {
  export type Input = CancelQueryRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeEndpoints {
  export type Input = DescribeEndpointsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeScheduledQuery {
  export type Input = DescribeScheduledQueryRequest;
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PrepareQuery {
  export type Input = PrepareQueryRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAccountSettings {
  export type Input = UpdateAccountSettingsRequest;
  export type Output = {};
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

