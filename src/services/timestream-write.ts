import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface Timestream_20181101 {
  createBatchLoadTask(
    input: CreateBatchLoadTaskRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDatabase(
    input: CreateDatabaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidEndpointException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createTable(
    input: CreateTableRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDatabase(
    input: DeleteDatabaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteTable(
    input: DeleteTableRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeBatchLoadTask(
    input: DescribeBatchLoadTaskRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDatabase(
    input: DescribeDatabaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeEndpoints(
    input: DescribeEndpointsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeTable(
    input: DescribeTableRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listBatchLoadTasks(
    input: ListBatchLoadTasksRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDatabases(
    input: ListDatabasesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTables(
    input: ListTablesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  resumeBatchLoadTask(
    input: ResumeBatchLoadTaskRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
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
    InvalidEndpointException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDatabase(
    input: UpdateDatabaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateTable(
    input: UpdateTableRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  writeRecords(
    input: WriteRecordsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidEndpointException | RejectedRecordsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type TimestreamWrite = Timestream_20181101;

export interface AccessDeniedException {
}
export type AmazonResourceName = string;

export type BatchLoadDataFormat = never;
export interface BatchLoadProgressReport {
}
export type BatchLoadStatus = never;
export interface BatchLoadTask {
}
export interface BatchLoadTaskDescription {
}
export type BatchLoadTaskId = string;

export type BatchLoadTaskList = Array<unknown>;
export type ClientRequestToken = string;

export interface ConflictException {
}
export interface CreateBatchLoadTaskRequest {
}
export interface CreateBatchLoadTaskResponse {
}
export interface CreateDatabaseRequest {
}
export interface CreateDatabaseResponse {
}
export interface CreateTableRequest {
}
export interface CreateTableResponse {
}
export interface CsvConfiguration {
}
export interface Database {
}
export type DatabaseList = Array<unknown>;
export interface DataModel {
}
export interface DataModelConfiguration {
}
export interface DataModelS3Configuration {
}
export interface DataSourceConfiguration {
}
export interface DataSourceS3Configuration {
}
export interface DeleteDatabaseRequest {
}
export interface DeleteTableRequest {
}
export interface DescribeBatchLoadTaskRequest {
}
export interface DescribeBatchLoadTaskResponse {
}
export interface DescribeDatabaseRequest {
}
export interface DescribeDatabaseResponse {
}
export interface DescribeEndpointsRequest {
}
export interface DescribeEndpointsResponse {
}
export interface DescribeTableRequest {
}
export interface DescribeTableResponse {
}
export interface Dimension {
}
export interface DimensionMapping {
}
export type DimensionMappings = Array<unknown>;
export type Dimensions = Array<unknown>;
export type DimensionValueType = never;
export interface Endpoint {
}
export type Endpoints = Array<unknown>;
export type ErrorMessage = string;

export type Integer = number;

export interface InternalServerException {
}
export interface InvalidEndpointException {
}
export interface ListBatchLoadTasksRequest {
}
export interface ListBatchLoadTasksResponse {
}
export interface ListDatabasesRequest {
}
export interface ListDatabasesResponse {
}
export interface ListTablesRequest {
}
export interface ListTablesResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type Long = number;

export interface MagneticStoreRejectedDataLocation {
}
export type MagneticStoreRetentionPeriodInDays = number;

export interface MagneticStoreWriteProperties {
}
export interface MeasureValue {
}
export type MeasureValues = Array<unknown>;
export type MeasureValueType = never;
export type MemoryStoreRetentionPeriodInHours = number;

export interface MixedMeasureMapping {
}
export type MixedMeasureMappingList = Array<unknown>;
export interface MultiMeasureAttributeMapping {
}
export type MultiMeasureAttributeMappingList = Array<unknown>;
export interface MultiMeasureMappings {
}
export type PageLimit = number;

export type PaginationLimit = number;

export interface PartitionKey {
}
export type PartitionKeyEnforcementLevel = never;
export type PartitionKeyList = Array<unknown>;
export type PartitionKeyType = never;
export interface Record {
}
export type RecordIndex = number;

export type Records = Array<unknown>;
export interface RecordsIngested {
}
export type RecordVersion = number;

export interface RejectedRecord {
}
export type RejectedRecords = Array<unknown>;
export interface RejectedRecordsException {
}
export interface ReportConfiguration {
}
export interface ReportS3Configuration {
}
export type ResourceCreateAPIName = string;

export type ResourceName = string;

export interface ResourceNotFoundException {
}
export interface ResumeBatchLoadTaskRequest {
}
export interface ResumeBatchLoadTaskResponse {
}
export interface RetentionProperties {
}
export type S3BucketName = string;

export interface S3Configuration {
}
export type S3EncryptionOption = never;
export type S3ObjectKey = string;

export type S3ObjectKeyPrefix = string;

export type ScalarMeasureValueType = never;
export interface Schema {
}
export type SchemaName = string;

export type SchemaValue = string;

export interface ServiceQuotaExceededException {
}
export type StringValue1 = string;

export type StringValue2048 = string;

export type StringValue256 = string;

export interface Table {
}
export type TableList = Array<unknown>;
export type TableStatus = never;
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

export interface ThrottlingException {
}
export type TimeUnit = never;
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateDatabaseRequest {
}
export interface UpdateDatabaseResponse {
}
export interface UpdateTableRequest {
}
export interface UpdateTableResponse {
}
export interface ValidationException {
}
export interface WriteRecordsRequest {
}
export interface WriteRecordsResponse {
}
export declare namespace CreateBatchLoadTask {
  export type Input = CreateBatchLoadTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDatabase {
  export type Input = CreateDatabaseRequest;
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

export declare namespace CreateTable {
  export type Input = CreateTableRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDatabase {
  export type Input = DeleteDatabaseRequest;
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

export declare namespace DeleteTable {
  export type Input = DeleteTableRequest;
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

export declare namespace DescribeBatchLoadTask {
  export type Input = DescribeBatchLoadTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDatabase {
  export type Input = DescribeDatabaseRequest;
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

export declare namespace DescribeEndpoints {
  export type Input = DescribeEndpointsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTable {
  export type Input = DescribeTableRequest;
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

export declare namespace ListBatchLoadTasks {
  export type Input = ListBatchLoadTasksRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatabases {
  export type Input = ListDatabasesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTables {
  export type Input = ListTablesRequest;
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

export declare namespace ResumeBatchLoadTask {
  export type Input = ResumeBatchLoadTaskRequest;
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
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDatabase {
  export type Input = UpdateDatabaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTable {
  export type Input = UpdateTableRequest;
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

export declare namespace WriteRecords {
  export type Input = WriteRecordsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | RejectedRecordsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

