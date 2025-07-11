import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Timestream_20181101 {
  createBatchLoadTask(
    input: CreateBatchLoadTaskRequest,
  ): Effect.Effect<
    CreateBatchLoadTaskResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDatabase(
    input: CreateDatabaseRequest,
  ): Effect.Effect<
    CreateDatabaseResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTable(
    input: CreateTableRequest,
  ): Effect.Effect<
    CreateTableResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDatabase(
    input: DeleteDatabaseRequest,
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
  deleteTable(
    input: DeleteTableRequest,
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
  describeBatchLoadTask(
    input: DescribeBatchLoadTaskRequest,
  ): Effect.Effect<
    DescribeBatchLoadTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDatabase(
    input: DescribeDatabaseRequest,
  ): Effect.Effect<
    DescribeDatabaseResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
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
  describeTable(
    input: DescribeTableRequest,
  ): Effect.Effect<
    DescribeTableResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBatchLoadTasks(
    input: ListBatchLoadTasksRequest,
  ): Effect.Effect<
    ListBatchLoadTasksResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDatabases(
    input: ListDatabasesRequest,
  ): Effect.Effect<
    ListDatabasesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTables(
    input: ListTablesRequest,
  ): Effect.Effect<
    ListTablesResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
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
  resumeBatchLoadTask(
    input: ResumeBatchLoadTaskRequest,
  ): Effect.Effect<
    ResumeBatchLoadTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
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
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDatabase(
    input: UpdateDatabaseRequest,
  ): Effect.Effect<
    UpdateDatabaseResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTable(
    input: UpdateTableRequest,
  ): Effect.Effect<
    UpdateTableResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  writeRecords(
    input: WriteRecordsRequest,
  ): Effect.Effect<
    WriteRecordsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidEndpointException
    | RejectedRecordsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type TimestreamWrite = Timestream_20181101;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AmazonResourceName = string;

export type BatchLoadDataFormat = "CSV";
export interface BatchLoadProgressReport {
  RecordsProcessed?: number;
  RecordsIngested?: number;
  ParseFailures?: number;
  RecordIngestionFailures?: number;
  FileFailures?: number;
  BytesMetered?: number;
}
export type BatchLoadStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCEEDED"
  | "PROGRESS_STOPPED"
  | "PENDING_RESUME";
export interface BatchLoadTask {
  TaskId?: string;
  TaskStatus?: BatchLoadStatus;
  DatabaseName?: string;
  TableName?: string;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  ResumableUntil?: Date | string;
}
export interface BatchLoadTaskDescription {
  TaskId?: string;
  ErrorMessage?: string;
  DataSourceConfiguration?: DataSourceConfiguration;
  ProgressReport?: BatchLoadProgressReport;
  ReportConfiguration?: ReportConfiguration;
  DataModelConfiguration?: DataModelConfiguration;
  TargetDatabaseName?: string;
  TargetTableName?: string;
  TaskStatus?: BatchLoadStatus;
  RecordVersion?: number;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  ResumableUntil?: Date | string;
}
export type BatchLoadTaskId = string;

export type BatchLoadTaskList = Array<BatchLoadTask>;
export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface CreateBatchLoadTaskRequest {
  ClientToken?: string;
  DataModelConfiguration?: DataModelConfiguration;
  DataSourceConfiguration: DataSourceConfiguration;
  ReportConfiguration: ReportConfiguration;
  TargetDatabaseName: string;
  TargetTableName: string;
  RecordVersion?: number;
}
export interface CreateBatchLoadTaskResponse {
  TaskId: string;
}
export interface CreateDatabaseRequest {
  DatabaseName: string;
  KmsKeyId?: string;
  Tags?: Array<Tag>;
}
export interface CreateDatabaseResponse {
  Database?: Database;
}
export interface CreateTableRequest {
  DatabaseName: string;
  TableName: string;
  RetentionProperties?: RetentionProperties;
  Tags?: Array<Tag>;
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
  Schema?: Schema;
}
export interface CreateTableResponse {
  Table?: Table;
}
export interface CsvConfiguration {
  ColumnSeparator?: string;
  EscapeChar?: string;
  QuoteChar?: string;
  NullValue?: string;
  TrimWhiteSpace?: boolean;
}
export interface Database {
  Arn?: string;
  DatabaseName?: string;
  TableCount?: number;
  KmsKeyId?: string;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type DatabaseList = Array<Database>;
export interface DataModel {
  TimeColumn?: string;
  TimeUnit?: TimeUnit;
  DimensionMappings: Array<DimensionMapping>;
  MultiMeasureMappings?: MultiMeasureMappings;
  MixedMeasureMappings?: Array<MixedMeasureMapping>;
  MeasureNameColumn?: string;
}
export interface DataModelConfiguration {
  DataModel?: DataModel;
  DataModelS3Configuration?: DataModelS3Configuration;
}
export interface DataModelS3Configuration {
  BucketName?: string;
  ObjectKey?: string;
}
export interface DataSourceConfiguration {
  DataSourceS3Configuration: DataSourceS3Configuration;
  CsvConfiguration?: CsvConfiguration;
  DataFormat: BatchLoadDataFormat;
}
export interface DataSourceS3Configuration {
  BucketName: string;
  ObjectKeyPrefix?: string;
}
export interface DeleteDatabaseRequest {
  DatabaseName: string;
}
export interface DeleteTableRequest {
  DatabaseName: string;
  TableName: string;
}
export interface DescribeBatchLoadTaskRequest {
  TaskId: string;
}
export interface DescribeBatchLoadTaskResponse {
  BatchLoadTaskDescription: BatchLoadTaskDescription;
}
export interface DescribeDatabaseRequest {
  DatabaseName: string;
}
export interface DescribeDatabaseResponse {
  Database?: Database;
}
export interface DescribeEndpointsRequest {}
export interface DescribeEndpointsResponse {
  Endpoints: Array<Endpoint>;
}
export interface DescribeTableRequest {
  DatabaseName: string;
  TableName: string;
}
export interface DescribeTableResponse {
  Table?: Table;
}
export interface Dimension {
  Name: string;
  Value: string;
  DimensionValueType?: DimensionValueType;
}
export interface DimensionMapping {
  SourceColumn?: string;
  DestinationColumn?: string;
}
export type DimensionMappings = Array<DimensionMapping>;
export type Dimensions = Array<Dimension>;
export type DimensionValueType = "VARCHAR";
export interface Endpoint {
  Address: string;
  CachePeriodInMinutes: number;
}
export type Endpoints = Array<Endpoint>;
export type ErrorMessage = string;

export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export declare class InvalidEndpointException extends EffectData.TaggedError(
  "InvalidEndpointException",
)<{
  readonly Message?: string;
}> {}
export interface ListBatchLoadTasksRequest {
  NextToken?: string;
  MaxResults?: number;
  TaskStatus?: BatchLoadStatus;
}
export interface ListBatchLoadTasksResponse {
  NextToken?: string;
  BatchLoadTasks?: Array<BatchLoadTask>;
}
export interface ListDatabasesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatabasesResponse {
  Databases?: Array<Database>;
  NextToken?: string;
}
export interface ListTablesRequest {
  DatabaseName?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTablesResponse {
  Tables?: Array<Table>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type Long = number;

export interface MagneticStoreRejectedDataLocation {
  S3Configuration?: S3Configuration;
}
export type MagneticStoreRetentionPeriodInDays = number;

export interface MagneticStoreWriteProperties {
  EnableMagneticStoreWrites: boolean;
  MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation;
}
export interface MeasureValue {
  Name: string;
  Value: string;
  Type: MeasureValueType;
}
export type MeasureValues = Array<MeasureValue>;
export type MeasureValueType =
  | "DOUBLE"
  | "BIGINT"
  | "VARCHAR"
  | "BOOLEAN"
  | "TIMESTAMP"
  | "MULTI";
export type MemoryStoreRetentionPeriodInHours = number;

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
  MeasureValueType?: ScalarMeasureValueType;
}
export type MultiMeasureAttributeMappingList =
  Array<MultiMeasureAttributeMapping>;
export interface MultiMeasureMappings {
  TargetMultiMeasureName?: string;
  MultiMeasureAttributeMappings: Array<MultiMeasureAttributeMapping>;
}
export type PageLimit = number;

export type PaginationLimit = number;

export interface PartitionKey {
  Type: PartitionKeyType;
  Name?: string;
  EnforcementInRecord?: PartitionKeyEnforcementLevel;
}
export type PartitionKeyEnforcementLevel = "REQUIRED" | "OPTIONAL";
export type PartitionKeyList = Array<PartitionKey>;
export type PartitionKeyType = "DIMENSION" | "MEASURE";
export interface Record {
  Dimensions?: Array<Dimension>;
  MeasureName?: string;
  MeasureValue?: string;
  MeasureValueType?: MeasureValueType;
  Time?: string;
  TimeUnit?: TimeUnit;
  Version?: number;
  MeasureValues?: Array<MeasureValue>;
}
export type RecordIndex = number;

export type Records = Array<Record>;
export interface RecordsIngested {
  Total?: number;
  MemoryStore?: number;
  MagneticStore?: number;
}
export type RecordVersion = number;

export interface RejectedRecord {
  RecordIndex?: number;
  Reason?: string;
  ExistingVersion?: number;
}
export type RejectedRecords = Array<RejectedRecord>;
export declare class RejectedRecordsException extends EffectData.TaggedError(
  "RejectedRecordsException",
)<{
  readonly Message?: string;
  readonly RejectedRecords?: Array<RejectedRecord>;
}> {}
export interface ReportConfiguration {
  ReportS3Configuration?: ReportS3Configuration;
}
export interface ReportS3Configuration {
  BucketName: string;
  ObjectKeyPrefix?: string;
  EncryptionOption?: S3EncryptionOption;
  KmsKeyId?: string;
}
export type ResourceCreateAPIName = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResumeBatchLoadTaskRequest {
  TaskId: string;
}
export interface ResumeBatchLoadTaskResponse {}
export interface RetentionProperties {
  MemoryStoreRetentionPeriodInHours: number;
  MagneticStoreRetentionPeriodInDays: number;
}
export type S3BucketName = string;

export interface S3Configuration {
  BucketName?: string;
  ObjectKeyPrefix?: string;
  EncryptionOption?: S3EncryptionOption;
  KmsKeyId?: string;
}
export type S3EncryptionOption = "SSE_S3" | "SSE_KMS";
export type S3ObjectKey = string;

export type S3ObjectKeyPrefix = string;

export type ScalarMeasureValueType =
  | "DOUBLE"
  | "BIGINT"
  | "BOOLEAN"
  | "VARCHAR"
  | "TIMESTAMP";
export interface Schema {
  CompositePartitionKey?: Array<PartitionKey>;
}
export type SchemaName = string;

export type SchemaValue = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type StringValue1 = string;

export type StringValue2048 = string;

export type StringValue256 = string;

export interface Table {
  Arn?: string;
  TableName?: string;
  DatabaseName?: string;
  TableStatus?: TableStatus;
  RetentionProperties?: RetentionProperties;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
  Schema?: Schema;
}
export type TableList = Array<Table>;
export type TableStatus = "ACTIVE" | "DELETING" | "RESTORING";
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

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type TimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MICROSECONDS"
  | "NANOSECONDS";
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDatabaseRequest {
  DatabaseName: string;
  KmsKeyId: string;
}
export interface UpdateDatabaseResponse {
  Database?: Database;
}
export interface UpdateTableRequest {
  DatabaseName: string;
  TableName: string;
  RetentionProperties?: RetentionProperties;
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
  Schema?: Schema;
}
export interface UpdateTableResponse {
  Table?: Table;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export interface WriteRecordsRequest {
  DatabaseName: string;
  TableName: string;
  CommonAttributes?: Record;
  Records: Array<Record>;
}
export interface WriteRecordsResponse {
  RecordsIngested?: RecordsIngested;
}
export declare namespace CreateBatchLoadTask {
  export type Input = CreateBatchLoadTaskRequest;
  export type Output = CreateBatchLoadTaskResponse;
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
  export type Output = CreateDatabaseResponse;
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
  export type Output = CreateTableResponse;
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
  export type Output = DescribeBatchLoadTaskResponse;
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
  export type Output = DescribeDatabaseResponse;
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
  export type Output = DescribeEndpointsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTable {
  export type Input = DescribeTableRequest;
  export type Output = DescribeTableResponse;
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
  export type Output = ListBatchLoadTasksResponse;
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
  export type Output = ListDatabasesResponse;
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
  export type Output = ListTablesResponse;
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
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidEndpointException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResumeBatchLoadTask {
  export type Input = ResumeBatchLoadTaskRequest;
  export type Output = ResumeBatchLoadTaskResponse;
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
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDatabase {
  export type Input = UpdateDatabaseRequest;
  export type Output = UpdateDatabaseResponse;
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
  export type Output = UpdateTableResponse;
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
  export type Output = WriteRecordsResponse;
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
