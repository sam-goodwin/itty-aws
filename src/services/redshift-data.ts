import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface RedshiftData {
  batchExecuteStatement(
    input: BatchExecuteStatementInput,
  ): Effect.Effect<
    BatchExecuteStatementOutput,
    | ActiveSessionsExceededException
    | ActiveStatementsExceededException
    | BatchExecuteStatementException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  cancelStatement(
    input: CancelStatementRequest,
  ): Effect.Effect<
    CancelStatementResponse,
    | DatabaseConnectionException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeStatement(
    input: DescribeStatementRequest,
  ): Effect.Effect<
    DescribeStatementResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeTable(
    input: DescribeTableRequest,
  ): Effect.Effect<
    DescribeTableResponse,
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  executeStatement(
    input: ExecuteStatementInput,
  ): Effect.Effect<
    ExecuteStatementOutput,
    | ActiveSessionsExceededException
    | ActiveStatementsExceededException
    | ExecuteStatementException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  getStatementResult(
    input: GetStatementResultRequest,
  ): Effect.Effect<
    GetStatementResultResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getStatementResultV2(
    input: GetStatementResultV2Request,
  ): Effect.Effect<
    GetStatementResultV2Response,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDatabases(
    input: ListDatabasesRequest,
  ): Effect.Effect<
    ListDatabasesResponse,
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  listSchemas(
    input: ListSchemasRequest,
  ): Effect.Effect<
    ListSchemasResponse,
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError
  >;
  listStatements(
    input: ListStatementsRequest,
  ): Effect.Effect<
    ListStatementsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTables(
    input: ListTablesRequest,
  ): Effect.Effect<
    ListTablesResponse,
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class ActiveSessionsExceededException extends EffectData.TaggedError(
  "ActiveSessionsExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ActiveStatementsExceededException extends EffectData.TaggedError(
  "ActiveStatementsExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class BatchExecuteStatementException extends EffectData.TaggedError(
  "BatchExecuteStatementException",
)<{
  readonly Message: string;
  readonly StatementId: string;
}> {}
export interface BatchExecuteStatementInput {
  Sqls: Array<string>;
  ClusterIdentifier?: string;
  SecretArn?: string;
  DbUser?: string;
  Database?: string;
  WithEvent?: boolean;
  StatementName?: string;
  WorkgroupName?: string;
  ClientToken?: string;
  SessionKeepAliveSeconds?: number;
  SessionId?: string;
  ResultFormat?: string;
}
export interface BatchExecuteStatementOutput {
  Id?: string;
  CreatedAt?: Date | string;
  ClusterIdentifier?: string;
  DbUser?: string;
  DbGroups?: Array<string>;
  Database?: string;
  SecretArn?: string;
  WorkgroupName?: string;
  SessionId?: string;
}
export type Blob = Uint8Array | string;

export type bool = boolean;

export type BoxedBoolean = boolean;

export type BoxedDouble = number;

export type BoxedLong = number;

export interface CancelStatementRequest {
  Id: string;
}
export interface CancelStatementResponse {
  Status?: boolean;
}
export type ClientToken = string;

export type ClusterIdentifierString = string;

export type ColumnList = Array<ColumnMetadata>;
export interface ColumnMetadata {
  isCaseSensitive?: boolean;
  isCurrency?: boolean;
  isSigned?: boolean;
  label?: string;
  name?: string;
  nullable?: number;
  precision?: number;
  scale?: number;
  schemaName?: string;
  tableName?: string;
  typeName?: string;
  length?: number;
  columnDefault?: string;
}
export type ColumnMetadataList = Array<ColumnMetadata>;
export declare class DatabaseConnectionException extends EffectData.TaggedError(
  "DatabaseConnectionException",
)<{
  readonly Message: string;
}> {}
export type DatabaseList = Array<string>;
export type DbGroupList = Array<string>;
export interface DescribeStatementRequest {
  Id: string;
}
export interface DescribeStatementResponse {
  Id: string;
  SecretArn?: string;
  DbUser?: string;
  Database?: string;
  ClusterIdentifier?: string;
  Duration?: number;
  Error?: string;
  Status?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  RedshiftPid?: number;
  HasResultSet?: boolean;
  QueryString?: string;
  ResultRows?: number;
  ResultSize?: number;
  RedshiftQueryId?: number;
  QueryParameters?: Array<SqlParameter>;
  SubStatements?: Array<SubStatementData>;
  WorkgroupName?: string;
  SessionId?: string;
  ResultFormat?: string;
}
export interface DescribeTableRequest {
  ClusterIdentifier?: string;
  SecretArn?: string;
  DbUser?: string;
  Database: string;
  ConnectedDatabase?: string;
  Schema?: string;
  Table?: string;
  NextToken?: string;
  MaxResults?: number;
  WorkgroupName?: string;
}
export interface DescribeTableResponse {
  TableName?: string;
  ColumnList?: Array<ColumnMetadata>;
  NextToken?: string;
}
export declare class ExecuteStatementException extends EffectData.TaggedError(
  "ExecuteStatementException",
)<{
  readonly Message: string;
  readonly StatementId: string;
}> {}
export interface ExecuteStatementInput {
  Sql: string;
  ClusterIdentifier?: string;
  SecretArn?: string;
  DbUser?: string;
  Database?: string;
  WithEvent?: boolean;
  StatementName?: string;
  Parameters?: Array<SqlParameter>;
  WorkgroupName?: string;
  ClientToken?: string;
  SessionKeepAliveSeconds?: number;
  SessionId?: string;
  ResultFormat?: string;
}
export interface ExecuteStatementOutput {
  Id?: string;
  CreatedAt?: Date | string;
  ClusterIdentifier?: string;
  DbUser?: string;
  DbGroups?: Array<string>;
  Database?: string;
  SecretArn?: string;
  WorkgroupName?: string;
  SessionId?: string;
}
interface _Field {
  isNull?: boolean;
  booleanValue?: boolean;
  longValue?: number;
  doubleValue?: number;
  stringValue?: string;
  blobValue?: Uint8Array | string;
}

export type Field =
  | (_Field & { isNull: boolean })
  | (_Field & { booleanValue: boolean })
  | (_Field & { longValue: number })
  | (_Field & { doubleValue: number })
  | (_Field & { stringValue: string })
  | (_Field & { blobValue: Uint8Array | string });
export type FieldList = Array<Field>;
export type FormattedSqlRecords = Array<QueryRecords>;
export interface GetStatementResultRequest {
  Id: string;
  NextToken?: string;
}
export interface GetStatementResultResponse {
  Records: Array<Array<Field>>;
  ColumnMetadata?: Array<ColumnMetadata>;
  TotalNumRows?: number;
  NextToken?: string;
}
export interface GetStatementResultV2Request {
  Id: string;
  NextToken?: string;
}
export interface GetStatementResultV2Response {
  Records: Array<QueryRecords>;
  ColumnMetadata?: Array<ColumnMetadata>;
  TotalNumRows?: number;
  ResultFormat?: string;
  NextToken?: string;
}
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface ListDatabasesRequest {
  ClusterIdentifier?: string;
  Database: string;
  SecretArn?: string;
  DbUser?: string;
  NextToken?: string;
  MaxResults?: number;
  WorkgroupName?: string;
}
export interface ListDatabasesResponse {
  Databases?: Array<string>;
  NextToken?: string;
}
export interface ListSchemasRequest {
  ClusterIdentifier?: string;
  SecretArn?: string;
  DbUser?: string;
  Database: string;
  ConnectedDatabase?: string;
  SchemaPattern?: string;
  NextToken?: string;
  MaxResults?: number;
  WorkgroupName?: string;
}
export interface ListSchemasResponse {
  Schemas?: Array<string>;
  NextToken?: string;
}
export type ListStatementsLimit = number;

export interface ListStatementsRequest {
  NextToken?: string;
  MaxResults?: number;
  StatementName?: string;
  Status?: string;
  RoleLevel?: boolean;
  Database?: string;
  ClusterIdentifier?: string;
  WorkgroupName?: string;
}
export interface ListStatementsResponse {
  Statements: Array<StatementData>;
  NextToken?: string;
}
export interface ListTablesRequest {
  ClusterIdentifier?: string;
  SecretArn?: string;
  DbUser?: string;
  Database: string;
  ConnectedDatabase?: string;
  SchemaPattern?: string;
  TablePattern?: string;
  NextToken?: string;
  MaxResults?: number;
  WorkgroupName?: string;
}
export interface ListTablesResponse {
  Tables?: Array<TableMember>;
  NextToken?: string;
}
export type Long = number;

export type PageSize = number;

export type ParameterName = string;

export type ParameterValue = string;

interface _QueryRecords {
  CSVRecords?: string;
}

export type QueryRecords = _QueryRecords & { CSVRecords: string };
export declare class QueryTimeoutException extends EffectData.TaggedError(
  "QueryTimeoutException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
}> {}
export type ResultFormatString = string;

export type SchemaList = Array<string>;
export type SecretArn = string;

export type SessionAliveSeconds = number;

export type SqlList = Array<string>;
export interface SqlParameter {
  name: string;
  value: string;
}
export type SqlParametersList = Array<SqlParameter>;
export type SqlRecords = Array<Array<Field>>;
export interface StatementData {
  Id: string;
  QueryString?: string;
  QueryStrings?: Array<string>;
  SecretArn?: string;
  Status?: string;
  StatementName?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  QueryParameters?: Array<SqlParameter>;
  IsBatchStatement?: boolean;
  ResultFormat?: string;
  SessionId?: string;
}
export type StatementList = Array<StatementData>;
export type StatementNameString = string;

export type StatementStatusString = string;

export type StatementString = string;

export type StatementStringList = Array<string>;
export type StatusString = string;

export type RedshiftDataString = string;

export interface SubStatementData {
  Id: string;
  Duration?: number;
  Error?: string;
  Status?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  QueryString?: string;
  ResultRows?: number;
  ResultSize?: number;
  RedshiftQueryId?: number;
  HasResultSet?: boolean;
}
export type SubStatementList = Array<SubStatementData>;
export type TableList = Array<TableMember>;
export interface TableMember {
  name?: string;
  type?: string;
  schema?: string;
}
export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type WorkgroupNameString = string;

export declare namespace BatchExecuteStatement {
  export type Input = BatchExecuteStatementInput;
  export type Output = BatchExecuteStatementOutput;
  export type Error =
    | ActiveSessionsExceededException
    | ActiveStatementsExceededException
    | BatchExecuteStatementException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelStatement {
  export type Input = CancelStatementRequest;
  export type Output = CancelStatementResponse;
  export type Error =
    | DatabaseConnectionException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeStatement {
  export type Input = DescribeStatementRequest;
  export type Output = DescribeStatementResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTable {
  export type Input = DescribeTableRequest;
  export type Output = DescribeTableResponse;
  export type Error =
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExecuteStatement {
  export type Input = ExecuteStatementInput;
  export type Output = ExecuteStatementOutput;
  export type Error =
    | ActiveSessionsExceededException
    | ActiveStatementsExceededException
    | ExecuteStatementException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStatementResult {
  export type Input = GetStatementResultRequest;
  export type Output = GetStatementResultResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStatementResultV2 {
  export type Input = GetStatementResultV2Request;
  export type Output = GetStatementResultV2Response;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatabases {
  export type Input = ListDatabasesRequest;
  export type Output = ListDatabasesResponse;
  export type Error =
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSchemas {
  export type Input = ListSchemasRequest;
  export type Output = ListSchemasResponse;
  export type Error =
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStatements {
  export type Input = ListStatementsRequest;
  export type Output = ListStatementsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTables {
  export type Input = ListTablesRequest;
  export type Output = ListTablesResponse;
  export type Error =
    | DatabaseConnectionException
    | InternalServerException
    | QueryTimeoutException
    | ValidationException
    | CommonAwsError;
}
