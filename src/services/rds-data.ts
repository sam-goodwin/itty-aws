import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface RdsDataService {
  batchExecuteStatement(
    input: BatchExecuteStatementRequest,
  ): Effect.Effect<
    BatchExecuteStatementResponse,
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseResumingException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError
  >;
  beginTransaction(
    input: BeginTransactionRequest,
  ): Effect.Effect<
    BeginTransactionResponse,
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseResumingException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError
  >;
  commitTransaction(
    input: CommitTransactionRequest,
  ): Effect.Effect<
    CommitTransactionResponse,
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | NotFoundException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError
  >;
  executeSql(
    input: ExecuteSqlRequest,
  ): Effect.Effect<
    ExecuteSqlResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableError
    | CommonAwsError
  >;
  executeStatement(
    input: ExecuteStatementRequest,
  ): Effect.Effect<
    ExecuteStatementResponse,
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseResumingException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | UnsupportedResultException
    | CommonAwsError
  >;
  rollbackTransaction(
    input: RollbackTransactionRequest,
  ): Effect.Effect<
    RollbackTransactionResponse,
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | NotFoundException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError
  >;
}

export type RdsData = RdsDataService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type Arn = string;

export type ArrayOfArray = Array<ArrayValue>;
export type ArrayValue =
  | {
      booleanValues: Array<boolean>;
      longValues?: undefined;
      doubleValues?: undefined;
      stringValues?: undefined;
      arrayValues?: undefined;
    }
  | {
      booleanValues?: undefined;
      longValues: Array<number>;
      doubleValues?: undefined;
      stringValues?: undefined;
      arrayValues?: undefined;
    }
  | {
      booleanValues?: undefined;
      longValues?: undefined;
      doubleValues: Array<number>;
      stringValues?: undefined;
      arrayValues?: undefined;
    }
  | {
      booleanValues?: undefined;
      longValues?: undefined;
      doubleValues?: undefined;
      stringValues: Array<string>;
      arrayValues?: undefined;
    }
  | {
      booleanValues?: undefined;
      longValues?: undefined;
      doubleValues?: undefined;
      stringValues?: undefined;
      arrayValues: Array<ArrayValue>;
    };
export type ArrayValueList = Array<Value>;
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export interface BatchExecuteStatementRequest {
  resourceArn: string;
  secretArn: string;
  sql: string;
  database?: string;
  schema?: string;
  parameterSets?: Array<Array<SqlParameter>>;
  transactionId?: string;
}
export interface BatchExecuteStatementResponse {
  updateResults?: Array<UpdateResult>;
}
export interface BeginTransactionRequest {
  resourceArn: string;
  secretArn: string;
  database?: string;
  schema?: string;
}
export interface BeginTransactionResponse {
  transactionId?: string;
}
export type Blob = Uint8Array | string;

export type RdsDataBoolean = boolean;

export type BooleanArray = Array<boolean>;
export type BoxedBoolean = boolean;

export type BoxedDouble = number;

export type BoxedFloat = number;

export type BoxedInteger = number;

export type BoxedLong = number;

export interface ColumnMetadata {
  name?: string;
  type?: number;
  typeName?: string;
  label?: string;
  schemaName?: string;
  tableName?: string;
  isAutoIncrement?: boolean;
  isSigned?: boolean;
  isCurrency?: boolean;
  isCaseSensitive?: boolean;
  nullable?: number;
  precision?: number;
  scale?: number;
  arrayBaseColumnType?: number;
}
export interface CommitTransactionRequest {
  resourceArn: string;
  secretArn: string;
  transactionId: string;
}
export interface CommitTransactionResponse {
  transactionStatus?: string;
}
export declare class DatabaseErrorException extends EffectData.TaggedError(
  "DatabaseErrorException",
)<{
  readonly message?: string;
}> {}
export declare class DatabaseNotFoundException extends EffectData.TaggedError(
  "DatabaseNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class DatabaseResumingException extends EffectData.TaggedError(
  "DatabaseResumingException",
)<{
  readonly message?: string;
}> {}
export declare class DatabaseUnavailableException extends EffectData.TaggedError(
  "DatabaseUnavailableException",
)<{}> {}
export type DbName = string;

export type DecimalReturnType = string;

export type DoubleArray = Array<number>;
export type ErrorMessage = string;

export interface ExecuteSqlRequest {
  dbClusterOrInstanceArn: string;
  awsSecretStoreArn: string;
  sqlStatements: string;
  database?: string;
  schema?: string;
}
export interface ExecuteSqlResponse {
  sqlStatementResults?: Array<SqlStatementResult>;
}
export interface ExecuteStatementRequest {
  resourceArn: string;
  secretArn: string;
  sql: string;
  database?: string;
  schema?: string;
  parameters?: Array<SqlParameter>;
  transactionId?: string;
  includeResultMetadata?: boolean;
  continueAfterTimeout?: boolean;
  resultSetOptions?: ResultSetOptions;
  formatRecordsAs?: string;
}
export interface ExecuteStatementResponse {
  records?: Array<Array<Field>>;
  columnMetadata?: Array<ColumnMetadata>;
  numberOfRecordsUpdated?: number;
  generatedFields?: Array<Field>;
  formattedRecords?: string;
}
export type Field =
  | {
      isNull: boolean;
      booleanValue?: undefined;
      longValue?: undefined;
      doubleValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValue?: undefined;
    }
  | {
      isNull?: undefined;
      booleanValue: boolean;
      longValue?: undefined;
      doubleValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValue?: undefined;
    }
  | {
      isNull?: undefined;
      booleanValue?: undefined;
      longValue: number;
      doubleValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValue?: undefined;
    }
  | {
      isNull?: undefined;
      booleanValue?: undefined;
      longValue?: undefined;
      doubleValue: number;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValue?: undefined;
    }
  | {
      isNull?: undefined;
      booleanValue?: undefined;
      longValue?: undefined;
      doubleValue?: undefined;
      stringValue: string;
      blobValue?: undefined;
      arrayValue?: undefined;
    }
  | {
      isNull?: undefined;
      booleanValue?: undefined;
      longValue?: undefined;
      doubleValue?: undefined;
      stringValue?: undefined;
      blobValue: Uint8Array | string;
      arrayValue?: undefined;
    }
  | {
      isNull?: undefined;
      booleanValue?: undefined;
      longValue?: undefined;
      doubleValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValue: ArrayValue;
    };
export type FieldList = Array<Field>;
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
}> {}
export type FormattedSqlRecords = string;

export declare class HttpEndpointNotEnabledException extends EffectData.TaggedError(
  "HttpEndpointNotEnabledException",
)<{
  readonly message?: string;
}> {}
export type Id = string;

export type Integer = number;

export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{}> {}
export declare class InvalidResourceStateException extends EffectData.TaggedError(
  "InvalidResourceStateException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSecretException extends EffectData.TaggedError(
  "InvalidSecretException",
)<{
  readonly message?: string;
}> {}
export type Long = number;

export type LongArray = Array<number>;
export type LongReturnType = string;

export type Metadata = Array<ColumnMetadata>;
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type ParameterName = string;

export interface RdsDataRecord {
  values?: Array<Value>;
}
export type Records = Array<RdsDataRecord>;
export type RecordsFormatType = string;

export type RecordsUpdated = number;

export interface ResultFrame {
  resultSetMetadata?: ResultSetMetadata;
  records?: Array<RdsDataRecord>;
}
export interface ResultSetMetadata {
  columnCount?: number;
  columnMetadata?: Array<ColumnMetadata>;
}
export interface ResultSetOptions {
  decimalReturnType?: string;
  longReturnType?: string;
}
export interface RollbackTransactionRequest {
  resourceArn: string;
  secretArn: string;
  transactionId: string;
}
export interface RollbackTransactionResponse {
  transactionStatus?: string;
}
export type Row = Array<Value>;
export declare class SecretsErrorException extends EffectData.TaggedError(
  "SecretsErrorException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableError extends EffectData.TaggedError(
  "ServiceUnavailableError",
)<{}> {}
export interface SqlParameter {
  name?: string;
  value?: Field;
  typeHint?: string;
}
export type SqlParameterSets = Array<Array<SqlParameter>>;
export type SqlParametersList = Array<SqlParameter>;
export type SqlRecords = Array<Array<Field>>;
export type SqlStatement = string;

export interface SqlStatementResult {
  resultFrame?: ResultFrame;
  numberOfRecordsUpdated?: number;
}
export type SqlStatementResults = Array<SqlStatementResult>;
export declare class StatementTimeoutException extends EffectData.TaggedError(
  "StatementTimeoutException",
)<{
  readonly message?: string;
  readonly dbConnectionId?: number;
}> {}
export type RdsDataString = string;

export type StringArray = Array<string>;
export interface StructValue {
  attributes?: Array<Value>;
}
export declare class TransactionNotFoundException extends EffectData.TaggedError(
  "TransactionNotFoundException",
)<{
  readonly message?: string;
}> {}
export type TransactionStatus = string;

export type TypeHint = string;

export declare class UnsupportedResultException extends EffectData.TaggedError(
  "UnsupportedResultException",
)<{
  readonly message?: string;
}> {}
export interface UpdateResult {
  generatedFields?: Array<Field>;
}
export type UpdateResults = Array<UpdateResult>;
export type Value =
  | {
      isNull: boolean;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue: boolean;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue: number;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue: number;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue: number;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue: number;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue: string;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue: Uint8Array | string;
      arrayValues?: undefined;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues: Array<Value>;
      structValue?: undefined;
    }
  | {
      isNull?: undefined;
      bitValue?: undefined;
      bigIntValue?: undefined;
      intValue?: undefined;
      doubleValue?: undefined;
      realValue?: undefined;
      stringValue?: undefined;
      blobValue?: undefined;
      arrayValues?: undefined;
      structValue: StructValue;
    };
export declare namespace BatchExecuteStatement {
  export type Input = BatchExecuteStatementRequest;
  export type Output = BatchExecuteStatementResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseResumingException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError;
}

export declare namespace BeginTransaction {
  export type Input = BeginTransactionRequest;
  export type Output = BeginTransactionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseResumingException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError;
}

export declare namespace CommitTransaction {
  export type Input = CommitTransactionRequest;
  export type Output = CommitTransactionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | NotFoundException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError;
}

export declare namespace ExecuteSql {
  export type Input = ExecuteSqlRequest;
  export type Output = ExecuteSqlResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableError
    | CommonAwsError;
}

export declare namespace ExecuteStatement {
  export type Input = ExecuteStatementRequest;
  export type Output = ExecuteStatementResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseResumingException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | UnsupportedResultException
    | CommonAwsError;
}

export declare namespace RollbackTransaction {
  export type Input = RollbackTransactionRequest;
  export type Output = RollbackTransactionResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | DatabaseErrorException
    | DatabaseNotFoundException
    | DatabaseUnavailableException
    | ForbiddenException
    | HttpEndpointNotEnabledException
    | InternalServerErrorException
    | InvalidResourceStateException
    | InvalidSecretException
    | NotFoundException
    | SecretsErrorException
    | ServiceUnavailableError
    | StatementTimeoutException
    | TransactionNotFoundException
    | CommonAwsError;
}
