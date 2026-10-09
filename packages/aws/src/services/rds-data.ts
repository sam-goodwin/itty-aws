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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "RDS Data",
  serviceShapeName: "RdsDataService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "rds-data" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-08-01");
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
              `https://rds-data-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://rds-data-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://rds-data.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://rds-data.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DatabaseErrorException
  extends /*@__PURE__*/ S.TaggedError<DatabaseErrorException>()(
    "DatabaseErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DatabaseNotFoundException
  extends /*@__PURE__*/ S.TaggedError<DatabaseNotFoundException>()(
    "DatabaseNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class DatabaseResumingException
  extends /*@__PURE__*/ S.TaggedError<DatabaseResumingException>()(
    "DatabaseResumingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DatabaseUnavailableException
  extends /*@__PURE__*/ S.TaggedError<DatabaseUnavailableException>()(
    "DatabaseUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(504),
  ).pipe(C.withTimeoutError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class HttpEndpointNotEnabledException
  extends /*@__PURE__*/ S.TaggedError<HttpEndpointNotEnabledException>()(
    "HttpEndpointNotEnabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidResourceStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidResourceStateException>()(
    "InvalidResourceStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidSecretException
  extends /*@__PURE__*/ S.TaggedError<InvalidSecretException>()(
    "InvalidSecretException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class SecretsErrorException
  extends /*@__PURE__*/ S.TaggedError<SecretsErrorException>()(
    "SecretsErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableError
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableError>()(
    "ServiceUnavailableError",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class StatementTimeoutException
  extends /*@__PURE__*/ S.TaggedError<StatementTimeoutException>()(
    "StatementTimeoutException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      dbConnectionId: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TransactionNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TransactionNotFoundException>()(
    "TransactionNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedResultException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedResultException>()(
    "UnsupportedResultException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export type SqlStatement = string;
export type DbName = string;
export type ParameterName = string;
export type BoxedBoolean = boolean;
export type BoxedLong = number;
export type BoxedDouble = number;
export type BooleanArray = boolean[];
const BooleanArray = /*@__PURE__*/ __L.at(__c0, 0);
export type LongArray = number[];
const LongArray = /*@__PURE__*/ __L.at(__c0, 1);
export type DoubleArray = number[];
const DoubleArray = LongArray as any as S.Schema<DoubleArray>;
export type StringArray = string[];
const StringArray = /*@__PURE__*/ __L.at(__c0, 2);
export type ArrayOfArray = ArrayValue[];
const ArrayOfArray = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<ArrayOfArray>;
export type ArrayValue =
  | {
      booleanValues: boolean[];
      longValues?: never;
      doubleValues?: never;
      stringValues?: never;
      arrayValues?: never;
    }
  | {
      booleanValues?: never;
      longValues: number[];
      doubleValues?: never;
      stringValues?: never;
      arrayValues?: never;
    }
  | {
      booleanValues?: never;
      longValues?: never;
      doubleValues: number[];
      stringValues?: never;
      arrayValues?: never;
    }
  | {
      booleanValues?: never;
      longValues?: never;
      doubleValues?: never;
      stringValues: string[];
      arrayValues?: never;
    }
  | {
      booleanValues?: never;
      longValues?: never;
      doubleValues?: never;
      stringValues?: never;
      arrayValues: ArrayValue[];
    };
const ArrayValue = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<ArrayValue>;
export type Field =
  | {
      isNull: boolean;
      booleanValue?: never;
      longValue?: never;
      doubleValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValue?: never;
    }
  | {
      isNull?: never;
      booleanValue: boolean;
      longValue?: never;
      doubleValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValue?: never;
    }
  | {
      isNull?: never;
      booleanValue?: never;
      longValue: number;
      doubleValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValue?: never;
    }
  | {
      isNull?: never;
      booleanValue?: never;
      longValue?: never;
      doubleValue: number;
      stringValue?: never;
      blobValue?: never;
      arrayValue?: never;
    }
  | {
      isNull?: never;
      booleanValue?: never;
      longValue?: never;
      doubleValue?: never;
      stringValue: string;
      blobValue?: never;
      arrayValue?: never;
    }
  | {
      isNull?: never;
      booleanValue?: never;
      longValue?: never;
      doubleValue?: never;
      stringValue?: never;
      blobValue: Uint8Array;
      arrayValue?: never;
    }
  | {
      isNull?: never;
      booleanValue?: never;
      longValue?: never;
      doubleValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValue: ArrayValue;
    };
const Field = /*@__PURE__*/ __L.at(__c0, 5);
export type TypeHint = "JSON" | "UUID" | "TIMESTAMP" | "DATE" | "TIME" | "DECIMAL" | (string & {});
const TypeHint = S.String;

export interface SqlParameter {
  name?: string;
  value?: Field;
  typeHint?: TypeHint;
}
const SqlParameter = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<SqlParameter>;
export type SqlParametersList = SqlParameter[];
const SqlParametersList = /*@__PURE__*/ __L.at(__c0, 7);
export type SqlParameterSets = SqlParameter[][];
const SqlParameterSets = /*@__PURE__*/ __L.at(__c1, 0);
export type Id = string;
export interface BatchExecuteStatementRequest {
  resourceArn: string;
  secretArn: string;
  sql: string;
  database?: string;
  schema?: string;
  parameterSets?: SqlParameter[][];
  transactionId?: string;
}
const BatchExecuteStatementRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchExecuteStatementRequest>;
export type FieldList = Field[];
const FieldList = /*@__PURE__*/ __L.at(__c1, 2);
export interface UpdateResult {
  generatedFields?: Field[];
}
const UpdateResult = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<UpdateResult>;
export type UpdateResults = UpdateResult[];
const UpdateResults = /*@__PURE__*/ __L.at(__c1, 4);
export interface BatchExecuteStatementResponse {
  updateResults?: UpdateResult[];
}
const BatchExecuteStatementResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<BatchExecuteStatementResponse>;
export interface BeginTransactionRequest {
  resourceArn: string;
  secretArn: string;
  database?: string;
  schema?: string;
}
const BeginTransactionRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<BeginTransactionRequest>;
export interface BeginTransactionResponse {
  transactionId?: string;
}
const BeginTransactionResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<BeginTransactionResponse>;
export interface CommitTransactionRequest {
  resourceArn: string;
  secretArn: string;
  transactionId: string;
}
const CommitTransactionRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CommitTransactionRequest>;
export type TransactionStatus = string;
export interface CommitTransactionResponse {
  transactionStatus?: string;
}
const CommitTransactionResponse = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CommitTransactionResponse>;
export interface ExecuteSqlRequest {
  dbClusterOrInstanceArn: string;
  awsSecretStoreArn: string;
  sqlStatements: string;
  database?: string;
  schema?: string;
}
const ExecuteSqlRequest = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<ExecuteSqlRequest>;
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
const ColumnMetadata = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<ColumnMetadata>;
export type Metadata = ColumnMetadata[];
const Metadata = /*@__PURE__*/ __L.at(__c2, 4);
export interface ResultSetMetadata {
  columnCount?: number;
  columnMetadata?: ColumnMetadata[];
}
const ResultSetMetadata = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<ResultSetMetadata>;
export type BoxedInteger = number;
export type BoxedFloat = number;
export type ArrayValueList = Value[];
const ArrayValueList = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<ArrayValueList>;
export interface StructValue {
  attributes?: Value[];
}
const StructValue = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<StructValue>;
export type Value =
  | {
      isNull: boolean;
      bitValue?: never;
      bigIntValue?: never;
      intValue?: never;
      doubleValue?: never;
      realValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue: boolean;
      bigIntValue?: never;
      intValue?: never;
      doubleValue?: never;
      realValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue: number;
      intValue?: never;
      doubleValue?: never;
      realValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue?: never;
      intValue: number;
      doubleValue?: never;
      realValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue?: never;
      intValue?: never;
      doubleValue: number;
      realValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue?: never;
      intValue?: never;
      doubleValue?: never;
      realValue: number;
      stringValue?: never;
      blobValue?: never;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue?: never;
      intValue?: never;
      doubleValue?: never;
      realValue?: never;
      stringValue: string;
      blobValue?: never;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue?: never;
      intValue?: never;
      doubleValue?: never;
      realValue?: never;
      stringValue?: never;
      blobValue: Uint8Array;
      arrayValues?: never;
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue?: never;
      intValue?: never;
      doubleValue?: never;
      realValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValues: Value[];
      structValue?: never;
    }
  | {
      isNull?: never;
      bitValue?: never;
      bigIntValue?: never;
      intValue?: never;
      doubleValue?: never;
      realValue?: never;
      stringValue?: never;
      blobValue?: never;
      arrayValues?: never;
      structValue: StructValue;
    };
const Value = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<Value>;
export type Row = Value[];
const Row = /*@__PURE__*/ __L.at(__c3, 1);
export interface Record {
  values?: Value[];
}
const Record = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<Record>;
export type Records = Record[];
const Records = /*@__PURE__*/ __L.at(__c3, 3);
export interface ResultFrame {
  resultSetMetadata?: ResultSetMetadata;
  records?: Record[];
}
const ResultFrame = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ResultFrame>;
export type RecordsUpdated = number;
export interface SqlStatementResult {
  resultFrame?: ResultFrame;
  numberOfRecordsUpdated?: number;
}
const SqlStatementResult = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<SqlStatementResult>;
export type SqlStatementResults = SqlStatementResult[];
const SqlStatementResults = /*@__PURE__*/ __L.at(__c3, 6);
export interface ExecuteSqlResponse {
  sqlStatementResults?: SqlStatementResult[];
}
const ExecuteSqlResponse = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<ExecuteSqlResponse>;
export type DecimalReturnType = "STRING" | "DOUBLE_OR_LONG" | (string & {});
const DecimalReturnType = S.String;

export type LongReturnType = "STRING" | "LONG" | (string & {});
const LongReturnType = S.String;

export interface ResultSetOptions {
  decimalReturnType?: DecimalReturnType;
  longReturnType?: LongReturnType;
}
const ResultSetOptions = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<ResultSetOptions>;
export type RecordsFormatType = "NONE" | "JSON" | (string & {});
const RecordsFormatType = S.String;

export interface ExecuteStatementRequest {
  resourceArn: string;
  secretArn: string;
  sql: string;
  database?: string;
  schema?: string;
  parameters?: SqlParameter[];
  transactionId?: string;
  includeResultMetadata?: boolean;
  continueAfterTimeout?: boolean;
  resultSetOptions?: ResultSetOptions;
  formatRecordsAs?: RecordsFormatType;
}
const ExecuteStatementRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<ExecuteStatementRequest>;
export type SqlRecords = Field[][];
const SqlRecords = /*@__PURE__*/ __L.at(__c4, 2);
export type FormattedSqlRecords = string;
export interface ExecuteStatementResponse {
  records?: Field[][];
  columnMetadata?: ColumnMetadata[];
  numberOfRecordsUpdated?: number;
  generatedFields?: Field[];
  formattedRecords?: string;
}
const ExecuteStatementResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<ExecuteStatementResponse>;
export interface RollbackTransactionRequest {
  resourceArn: string;
  secretArn: string;
  transactionId: string;
}
const RollbackTransactionRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<RollbackTransactionRequest>;
export interface RollbackTransactionResponse {
  transactionStatus?: string;
}
const RollbackTransactionResponse =
  CommitTransactionResponse as any as S.Schema<RollbackTransactionResponse>;
export type ErrorMessage = string;
export type BatchExecuteStatementError =
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
  | CommonErrors;
/**
 * Runs a batch SQL statement over an array of data.
 *
 * You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.
 *
 * If a call isn't part of a transaction because it doesn't include the `transactionID` parameter, changes that result from the call are committed automatically.
 *
 * There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.
 *
 * The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.
 */
export const batchExecuteStatement: API.OperationMethod<
  BatchExecuteStatementRequest,
  BatchExecuteStatementResponse,
  BatchExecuteStatementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchExecuteStatementRequest,
  output: BatchExecuteStatementResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    DatabaseErrorException,
    DatabaseNotFoundException,
    DatabaseResumingException,
    DatabaseUnavailableException,
    ForbiddenException,
    HttpEndpointNotEnabledException,
    InternalServerErrorException,
    InvalidResourceStateException,
    InvalidSecretException,
    SecretsErrorException,
    ServiceUnavailableError,
    StatementTimeoutException,
    TransactionNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchExecuteStatement",
}));

export type BeginTransactionError =
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
  | CommonErrors;
/**
 * Starts a SQL transaction.
 *
 * A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.
 *
 * A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.
 *
 * For Aurora MySQL, DDL statements inside a transaction cause an implicit commit. We recommend that you run each MySQL DDL statement in a separate `ExecuteStatement` call with `continueAfterTimeout` enabled.
 */
export const beginTransaction: API.OperationMethod<
  BeginTransactionRequest,
  BeginTransactionResponse,
  BeginTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BeginTransactionRequest,
  output: BeginTransactionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    DatabaseErrorException,
    DatabaseNotFoundException,
    DatabaseResumingException,
    DatabaseUnavailableException,
    ForbiddenException,
    HttpEndpointNotEnabledException,
    InternalServerErrorException,
    InvalidResourceStateException,
    InvalidSecretException,
    SecretsErrorException,
    ServiceUnavailableError,
    StatementTimeoutException,
    TransactionNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BeginTransaction",
}));

export type CommitTransactionError =
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
  | CommonErrors;
/**
 * Ends a SQL transaction started with the `BeginTransaction` operation and commits the changes.
 */
export const commitTransaction: API.OperationMethod<
  CommitTransactionRequest,
  CommitTransactionResponse,
  CommitTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CommitTransactionRequest,
  output: CommitTransactionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    DatabaseErrorException,
    DatabaseNotFoundException,
    DatabaseUnavailableException,
    ForbiddenException,
    HttpEndpointNotEnabledException,
    InternalServerErrorException,
    InvalidResourceStateException,
    InvalidSecretException,
    NotFoundException,
    SecretsErrorException,
    ServiceUnavailableError,
    StatementTimeoutException,
    TransactionNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CommitTransaction",
}));

export type ExecuteSqlError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableError
  | CommonErrors;
/**
 * Runs one or more SQL statements.
 *
 * This operation is deprecated. Please use the `BatchExecuteStatement` or `ExecuteStatement` operation.
 */
export const executeSql: API.OperationMethod<
  ExecuteSqlRequest,
  ExecuteSqlResponse,
  ExecuteSqlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteSqlRequest,
  output: ExecuteSqlResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableError,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteSql",
}));

export type ExecuteStatementError =
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
  | CommonErrors;
/**
 * Runs a SQL statement against a database.
 *
 * If a call isn't part of a transaction because it doesn't include the `transactionID` parameter, changes that result from the call are committed automatically.
 *
 * If the binary response data from the database is more than 1 MB, the call is terminated.
 */
export const executeStatement: API.OperationMethod<
  ExecuteStatementRequest,
  ExecuteStatementResponse,
  ExecuteStatementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteStatementRequest,
  output: ExecuteStatementResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    DatabaseErrorException,
    DatabaseNotFoundException,
    DatabaseResumingException,
    DatabaseUnavailableException,
    ForbiddenException,
    HttpEndpointNotEnabledException,
    InternalServerErrorException,
    InvalidResourceStateException,
    InvalidSecretException,
    SecretsErrorException,
    ServiceUnavailableError,
    StatementTimeoutException,
    TransactionNotFoundException,
    UnsupportedResultException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteStatement",
}));

export type RollbackTransactionError =
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
  | CommonErrors;
/**
 * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
 */
export const rollbackTransaction: API.OperationMethod<
  RollbackTransactionRequest,
  RollbackTransactionResponse,
  RollbackTransactionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RollbackTransactionRequest,
  output: RollbackTransactionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    DatabaseErrorException,
    DatabaseNotFoundException,
    DatabaseUnavailableException,
    ForbiddenException,
    HttpEndpointNotEnabledException,
    InternalServerErrorException,
    InvalidResourceStateException,
    InvalidSecretException,
    NotFoundException,
    SecretsErrorException,
    ServiceUnavailableError,
    StatementTimeoutException,
    TransactionNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RollbackTransaction",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.Boolean).pipe(/*@__PURE__*/ T.Sparse());
    case 1:
      return S.Array(S.Number).pipe(/*@__PURE__*/ T.Sparse());
    case 2:
      return S.Array(S.String).pipe(/*@__PURE__*/ T.Sparse());
    case 3:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => ArrayValue).annotate({ identifier: "ArrayValue" }),
      ).pipe(/*@__PURE__*/ T.Sparse());
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ booleanValues: BooleanArray }),
        /*@__PURE__*/ S.Struct({ longValues: LongArray }),
        /*@__PURE__*/ S.Struct({ doubleValues: DoubleArray }),
        /*@__PURE__*/ S.Struct({ stringValues: StringArray }),
        /*@__PURE__*/ S.Struct({
          arrayValues: /*@__PURE__*/ S.suspend(() => ArrayOfArray).annotate({
            identifier: "ArrayOfArray",
          }),
        }),
      ]);
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ isNull: S.Boolean }),
        /*@__PURE__*/ S.Struct({ booleanValue: S.Boolean }),
        /*@__PURE__*/ S.Struct({ longValue: S.Number }),
        /*@__PURE__*/ S.Struct({ doubleValue: S.Number }),
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ blobValue: T.Blob }),
        /*@__PURE__*/ S.Struct({ arrayValue: ArrayValue }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          value: S.optional(Field),
          typeHint: S.optional(TypeHint),
        }),
      ).annotate({ identifier: "SqlParameter" });
    case 7:
      return S.Array(SqlParameter);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SqlParametersList);
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          secretArn: S.String,
          sql: S.String,
          database: S.optional(S.String),
          schema: S.optional(S.String),
          parameterSets: S.optional(SqlParameterSets),
          transactionId: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchExecute" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchExecuteStatementRequest",
      });
    case 2:
      return S.Array(Field);
    case 3:
      return S.suspend(() => S.Struct({ generatedFields: S.optional(FieldList) })).annotate({
        identifier: "UpdateResult",
      });
    case 4:
      return S.Array(UpdateResult);
    case 5:
      return S.suspend(() => S.Struct({ updateResults: S.optional(UpdateResults) })).annotate({
        identifier: "BatchExecuteStatementResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          secretArn: S.String,
          database: S.optional(S.String),
          schema: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BeginTransaction" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BeginTransactionRequest" });
    case 7:
      return S.suspend(() => S.Struct({ transactionId: S.optional(S.String) })).annotate({
        identifier: "BeginTransactionResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, secretArn: S.String, transactionId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CommitTransaction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CommitTransactionRequest" });
    case 1:
      return S.suspend(() => S.Struct({ transactionStatus: S.optional(S.String) })).annotate({
        identifier: "CommitTransactionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          dbClusterOrInstanceArn: S.String,
          awsSecretStoreArn: S.String,
          sqlStatements: S.String,
          database: S.optional(S.String),
          schema: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ExecuteSql" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ExecuteSqlRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(S.Number),
          typeName: S.optional(S.String),
          label: S.optional(S.String),
          schemaName: S.optional(S.String),
          tableName: S.optional(S.String),
          isAutoIncrement: S.optional(S.Boolean),
          isSigned: S.optional(S.Boolean),
          isCurrency: S.optional(S.Boolean),
          isCaseSensitive: S.optional(S.Boolean),
          nullable: S.optional(S.Number),
          precision: S.optional(S.Number),
          scale: S.optional(S.Number),
          arrayBaseColumnType: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ColumnMetadata" });
    case 4:
      return S.Array(ColumnMetadata);
    case 5:
      return S.suspend(() =>
        S.Struct({ columnCount: S.optional(S.Number), columnMetadata: S.optional(Metadata) }),
      ).annotate({ identifier: "ResultSetMetadata" });
    case 6:
      return S.Array(/*@__PURE__*/ S.suspend(() => Value).annotate({ identifier: "Value" }));
    case 7:
      return S.suspend(() =>
        S.Struct({
          attributes: S.optional(
            S.suspend(() => ArrayValueList).annotate({ identifier: "ArrayValueList" }),
          ),
        }),
      ).annotate({ identifier: "StructValue" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ isNull: S.Boolean }),
        /*@__PURE__*/ S.Struct({ bitValue: S.Boolean }),
        /*@__PURE__*/ S.Struct({ bigIntValue: S.Number }),
        /*@__PURE__*/ S.Struct({ intValue: S.Number }),
        /*@__PURE__*/ S.Struct({ doubleValue: S.Number }),
        /*@__PURE__*/ S.Struct({ realValue: S.Number }),
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ blobValue: T.Blob }),
        /*@__PURE__*/ S.Struct({
          arrayValues: /*@__PURE__*/ S.suspend(() => ArrayValueList).annotate({
            identifier: "ArrayValueList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          structValue: /*@__PURE__*/ S.suspend((): S.Schema<StructValue> => StructValue).annotate({
            identifier: "StructValue",
          }),
        }),
      ]);
    case 1:
      return S.Array(/*@__PURE__*/ S.suspend(() => Value).annotate({ identifier: "Value" }));
    case 2:
      return S.suspend(() => S.Struct({ values: S.optional(Row) })).annotate({
        identifier: "Record",
      });
    case 3:
      return S.Array(Record);
    case 4:
      return S.suspend(() =>
        S.Struct({
          resultSetMetadata: S.optional(ResultSetMetadata),
          records: S.optional(Records),
        }),
      ).annotate({ identifier: "ResultFrame" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resultFrame: S.optional(ResultFrame),
          numberOfRecordsUpdated: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SqlStatementResult" });
    case 6:
      return S.Array(SqlStatementResult);
    case 7:
      return S.suspend(() =>
        S.Struct({ sqlStatementResults: S.optional(SqlStatementResults) }),
      ).annotate({ identifier: "ExecuteSqlResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          decimalReturnType: S.optional(DecimalReturnType),
          longReturnType: S.optional(LongReturnType),
        }),
      ).annotate({ identifier: "ResultSetOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          secretArn: S.String,
          sql: S.String,
          database: S.optional(S.String),
          schema: S.optional(S.String),
          parameters: S.optional(SqlParametersList),
          transactionId: S.optional(S.String),
          includeResultMetadata: S.optional(S.Boolean),
          continueAfterTimeout: S.optional(S.Boolean),
          resultSetOptions: S.optional(ResultSetOptions),
          formatRecordsAs: S.optional(RecordsFormatType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/Execute" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ExecuteStatementRequest" });
    case 2:
      return S.Array(FieldList);
    case 3:
      return S.suspend(() =>
        S.Struct({
          records: S.optional(SqlRecords),
          columnMetadata: S.optional(Metadata),
          numberOfRecordsUpdated: S.optional(S.Number),
          generatedFields: S.optional(FieldList),
          formattedRecords: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExecuteStatementResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, secretArn: S.String, transactionId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RollbackTransaction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RollbackTransactionRequest",
      });
  }
}
