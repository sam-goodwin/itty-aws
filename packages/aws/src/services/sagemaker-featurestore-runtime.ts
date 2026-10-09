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
  sdkId: "SageMaker FeatureStore Runtime",
  serviceShapeName: "AmazonSageMakerFeatureStoreRuntime",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "sagemaker" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-07-01");
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
              `https://featurestore-runtime.sagemaker-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://featurestore-runtime.sagemaker-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://featurestore-runtime.sagemaker.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://featurestore-runtime.sagemaker.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessForbidden
  extends /*@__PURE__*/ S.TaggedError<AccessForbidden>()(
    "AccessForbidden",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class FeatureGroupNotFound
  extends /*@__PURE__*/ S.TaggedError<FeatureGroupNotFound>()(
    "FeatureGroupNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationError",
      message: { includes: "Resource Not Found" },
    }),
  ).pipe(C.withNotFoundError) {}
export class InternalFailure
  extends /*@__PURE__*/ S.TaggedError<InternalFailure>()(
    "InternalFailure",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFound
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFound>()(
    "ResourceNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailable
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailable>()(
    "ServiceUnavailable",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ValidationError
  extends /*@__PURE__*/ S.TaggedError<ValidationError>()(
    "ValidationError",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type FeatureGroupNameOrArn = string;
export type ValueAsString = string;
export type RecordIdentifiers = string[];
export type FeatureName = string;
export type FeatureNames = string[];
export interface BatchGetRecordIdentifier {
  FeatureGroupName?: string;
  RecordIdentifiersValueAsString?: string[];
  FeatureNames?: string[];
}
export type BatchGetRecordIdentifiers = BatchGetRecordIdentifier[];
export type ExpirationTimeResponse = "Enabled" | "Disabled" | (string & {});
export interface BatchGetRecordRequest {
  Identifiers?: BatchGetRecordIdentifier[];
  ExpirationTimeResponse?: ExpirationTimeResponse;
}
export type ValueAsStringList = string[];
export interface FeatureValue {
  FeatureName?: string;
  ValueAsString?: string;
  ValueAsStringList?: string[];
}
export type Record = FeatureValue[];
export type ExpiresAt = string;
export interface BatchGetRecordResultDetail {
  FeatureGroupName?: string;
  RecordIdentifierValueAsString?: string;
  Record?: FeatureValue[];
  ExpiresAt?: string;
}
export type BatchGetRecordResultDetails = BatchGetRecordResultDetail[];
export type Message = string;
export interface BatchGetRecordError_ {
  FeatureGroupName?: string;
  RecordIdentifierValueAsString?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type BatchGetRecordErrors = BatchGetRecordError_[];
export type UnprocessedIdentifiers = BatchGetRecordIdentifier[];
export interface BatchGetRecordResponse {
  Records: (BatchGetRecordResultDetail & {
    FeatureGroupName: ValueAsString;
    RecordIdentifierValueAsString: ValueAsString;
    Record: (FeatureValue & { FeatureName: FeatureName })[];
  })[];
  Errors: (BatchGetRecordError & {
    FeatureGroupName: ValueAsString;
    RecordIdentifierValueAsString: ValueAsString;
    ErrorCode: ValueAsString;
    ErrorMessage: Message;
  })[];
  UnprocessedIdentifiers: (BatchGetRecordIdentifier & {
    FeatureGroupName: FeatureGroupNameOrArn;
    RecordIdentifiersValueAsString: RecordIdentifiers;
  })[];
}
export type TargetStore = "OnlineStore" | "OfflineStore" | (string & {});
export type TargetStores = TargetStore[];
export type TtlDurationUnit = "Seconds" | "Minutes" | "Hours" | "Days" | "Weeks" | (string & {});
export type TtlDurationValue = number;
export interface TtlDuration {
  Unit?: TtlDurationUnit;
  Value?: number;
}
export interface BatchWriteRecordEntry {
  FeatureGroupName?: string;
  Record?: FeatureValue[];
  TargetStores?: TargetStore[];
  TtlDuration?: TtlDuration;
}
export type BatchWriteRecordEntries = BatchWriteRecordEntry[];
export interface BatchWriteRecordRequest {
  Entries?: BatchWriteRecordEntry[];
  TtlDuration?: TtlDuration;
}
export interface BatchWriteRecordError_ {
  Entry?: BatchWriteRecordEntry;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type BatchWriteRecordErrors = BatchWriteRecordError_[];
export type UnprocessedBatchWriteRecordEntries = BatchWriteRecordEntry[];
export interface BatchWriteRecordResponse {
  Errors: (BatchWriteRecordError & {
    Entry: BatchWriteRecordEntry & {
      FeatureGroupName: FeatureGroupNameOrArn;
      Record: (FeatureValue & { FeatureName: FeatureName })[];
      TtlDuration: TtlDuration & { Unit: TtlDurationUnit; Value: TtlDurationValue };
    };
    ErrorCode: ValueAsString;
    ErrorMessage: Message;
  })[];
  UnprocessedEntries: (BatchWriteRecordEntry & {
    FeatureGroupName: FeatureGroupNameOrArn;
    Record: (FeatureValue & { FeatureName: FeatureName })[];
    TtlDuration: TtlDuration & { Unit: TtlDurationUnit; Value: TtlDurationValue };
  })[];
}
export type DeletionMode = "SoftDelete" | "HardDelete" | (string & {});
export interface DeleteRecordRequest {
  FeatureGroupName: string;
  RecordIdentifierValueAsString?: string;
  EventTime?: string;
  TargetStores?: TargetStore[];
  DeletionMode?: DeletionMode;
}
export interface DeleteRecordResponse {}
export interface GetRecordRequest {
  FeatureGroupName: string;
  RecordIdentifierValueAsString?: string;
  FeatureNames?: string[];
  ExpirationTimeResponse?: ExpirationTimeResponse;
}
export interface GetRecordResponse {
  Record?: (FeatureValue & { FeatureName: FeatureName })[];
  ExpiresAt?: string;
}
export type ListRecordsMaxResults = number;
export type ListRecordsNextToken = string;
export interface ListRecordsRequest {
  FeatureGroupName: string;
  MaxResults?: number;
  NextToken?: string;
  IncludeSoftDeletedRecords?: boolean;
}
export type RecordIdentifierList = string[];
export interface ListRecordsResponse {
  RecordIdentifiers: string[];
  NextToken?: string;
}
export interface PutRecordRequest {
  FeatureGroupName: string;
  Record?: FeatureValue[];
  TargetStores?: TargetStore[];
  TtlDuration?: TtlDuration;
}
export interface PutRecordResponse {}
export interface UpdateRecordRequest {
  FeatureGroupName: string;
  RecordIdentifierValueAsString?: string;
  Features?: FeatureValue[];
  TargetStores?: TargetStore[];
  TtlDuration?: TtlDuration;
}
export interface UpdateRecordResponse {}
export type BatchGetRecordError =
  | AccessForbidden
  | InternalFailure
  | ServiceUnavailable
  | ValidationError
  | CommonErrors;
/**
 * Retrieves a batch of `Records` from a `FeatureGroup`.
 */
export const batchGetRecord: API.OperationMethod<
  BatchGetRecordRequest,
  BatchGetRecordResponse,
  BatchGetRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<BatchGetRecordRequest>,
  output: __S(10) as any as S.Schema<BatchGetRecordResponse>,
  errors: [AccessForbidden, InternalFailure, ServiceUnavailable, ValidationError],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetRecord",
}));

export type BatchWriteRecordError =
  | AccessForbidden
  | InternalFailure
  | ResourceNotFound
  | ServiceUnavailable
  | ValidationError
  | CommonErrors;
/**
 * Writes a batch of `Records` to one or more `FeatureGroup`s. Use
 * this API for bulk ingestion of records into the `OnlineStore` and
 * `OfflineStore`.
 *
 * You can set the ingested records to expire at a given time to live (TTL) duration after
 * the record's event time by specifying the `TtlDuration` parameter. A request
 * level `TtlDuration` applies to all entries that do not specify their own
 * `TtlDuration`.
 */
export const batchWriteRecord: API.OperationMethod<
  BatchWriteRecordRequest,
  BatchWriteRecordResponse,
  BatchWriteRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<BatchWriteRecordRequest>,
  output: __S(18) as any as S.Schema<BatchWriteRecordResponse>,
  errors: [AccessForbidden, InternalFailure, ResourceNotFound, ServiceUnavailable, ValidationError],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchWriteRecord",
}));

export type DeleteRecordError =
  | AccessForbidden
  | InternalFailure
  | ServiceUnavailable
  | ValidationError
  | FeatureGroupNotFound
  | CommonErrors;
/**
 * Deletes a `Record` from a `FeatureGroup` in the
 * `OnlineStore`. Feature Store supports both `SoftDelete` and
 * `HardDelete`. For `SoftDelete` (default), feature columns are set
 * to `null` and the record is no longer retrievable by `GetRecord` or
 * `BatchGetRecord`. For `HardDelete`, the complete
 * `Record` is removed from the `OnlineStore`. In both cases, Feature
 * Store appends the deleted record marker to the `OfflineStore`. The deleted
 * record marker is a record with the same `RecordIdentifer` as the original, but
 * with `is_deleted` value set to `True`, `EventTime` set to
 * the delete input `EventTime`, and other feature values set to
 * `null`.
 *
 * Note that the `EventTime` specified in `DeleteRecord` should be
 * set later than the `EventTime` of the existing record in the
 * `OnlineStore` for that `RecordIdentifer`. If it is not, the
 * deletion does not occur:
 *
 * - For `SoftDelete`, the existing (not deleted) record remains in the
 * `OnlineStore`, though the delete record marker is still written to the
 * `OfflineStore`.
 *
 * - `HardDelete` returns `EventTime`: 400
 * ValidationException to indicate that the delete operation failed. No delete
 * record marker is written to the `OfflineStore`.
 *
 * When a record is deleted from the `OnlineStore`, the deleted record marker is
 * appended to the `OfflineStore`. If you have the Iceberg table format enabled for
 * your `OfflineStore`, you can remove all history of a record from the
 * `OfflineStore` using Amazon Athena or Apache Spark. For information on how to
 * hard delete a record from the `OfflineStore` with the Iceberg table format
 * enabled, see Delete records from the offline store.
 */
export const deleteRecord: API.OperationMethod<
  DeleteRecordRequest,
  DeleteRecordResponse,
  DeleteRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<DeleteRecordRequest>,
  output: __S(20) as any as S.Schema<DeleteRecordResponse>,
  errors: [
    AccessForbidden,
    InternalFailure,
    ServiceUnavailable,
    ValidationError,
    FeatureGroupNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecord",
}));

export type GetRecordError =
  | AccessForbidden
  | InternalFailure
  | ResourceNotFound
  | ServiceUnavailable
  | ValidationError
  | FeatureGroupNotFound
  | CommonErrors;
/**
 * Use for `OnlineStore` serving from a `FeatureStore`. Only the
 * latest records stored in the `OnlineStore` can be retrieved. If no Record with
 * `RecordIdentifierValue` is found, then an empty result is returned.
 */
export const getRecord: API.OperationMethod<
  GetRecordRequest,
  GetRecordResponse,
  GetRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<GetRecordRequest>,
  output: __S(22) as any as S.Schema<GetRecordResponse>,
  errors: [
    AccessForbidden,
    InternalFailure,
    ResourceNotFound,
    ServiceUnavailable,
    ValidationError,
    FeatureGroupNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecord",
}));

export type ListRecordsError =
  | AccessForbidden
  | InternalFailure
  | ResourceNotFound
  | ServiceUnavailable
  | ValidationError
  | CommonErrors;
/**
 * Lists the `RecordIdentifier` values of all records stored in a
 * `FeatureGroup`'s `OnlineStore`. This enables you to discover which
 * records exist without retrieving the full record data.
 */
export const listRecords: API.PaginatedOperationMethod<
  ListRecordsRequest,
  ListRecordsResponse,
  ListRecordsError,
  Credentials | HttpClient.HttpClient,
  ValueAsString
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(23) as any as S.Schema<ListRecordsRequest>,
  output: __S(24) as any as S.Schema<ListRecordsResponse>,
  errors: [AccessForbidden, InternalFailure, ResourceNotFound, ServiceUnavailable, ValidationError],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecords",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RecordIdentifiers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutRecordError =
  | AccessForbidden
  | InternalFailure
  | ServiceUnavailable
  | ValidationError
  | FeatureGroupNotFound
  | CommonErrors;
/**
 * The `PutRecord` API is used to ingest a list of `Records` into
 * your feature group.
 *
 * If a new record's `EventTime` is greater, the new record is written to both
 * the `OnlineStore` and `OfflineStore`. Otherwise, the record is a
 * historic record and it is written only to the `OfflineStore`.
 *
 * You can specify the ingestion to be applied to the `OnlineStore`,
 * `OfflineStore`, or both by using the `TargetStores` request
 * parameter.
 *
 * You can set the ingested record to expire at a given time to live (TTL) duration after
 * the record's event time, `ExpiresAt` = `EventTime` +
 * `TtlDuration`, by specifying the `TtlDuration` parameter. A record
 * level `TtlDuration` is set when specifying the `TtlDuration`
 * parameter using the `PutRecord` API call. If the input `TtlDuration`
 * is `null` or unspecified, `TtlDuration` is set to the default feature
 * group level `TtlDuration`. A record level `TtlDuration` supersedes
 * the group level `TtlDuration`.
 */
export const putRecord: API.OperationMethod<
  PutRecordRequest,
  PutRecordResponse,
  PutRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<PutRecordRequest>,
  output: __S(20) as any as S.Schema<PutRecordResponse>,
  errors: [
    AccessForbidden,
    InternalFailure,
    ServiceUnavailable,
    ValidationError,
    FeatureGroupNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRecord",
}));

export type UpdateRecordError =
  | AccessForbidden
  | ConflictException
  | InternalFailure
  | ResourceNotFound
  | ServiceUnavailable
  | ValidationError
  | CommonErrors;
/**
 * Updates one or more feature values for an existing record in the specified
 * feature group. Features that you do not include in the request remain unchanged.
 * You can update up to 100 features per call.
 *
 * This operation is available only for feature groups that use the
 * `Standard_V2` or `InMemory` online store type.
 *
 * The record must already exist. If the record does not exist or has been
 * soft-deleted, the operation returns a `ResourceNotFound` error. To create
 * a record, use `PutRecord`.
 *
 * If you provide an `EventTime` that is older than the record's current
 * `EventTime`, the service rejects the update with a
 * `ConflictException`. If the `EventTime` is equal to or newer
 * than the current value, the service applies the update. If you omit
 * `EventTime`, the service keeps the record's existing
 * `EventTime` and applies the update.
 *
 * If you specify a `TtlDuration`, you must also provide an
 * `EventTime` in the request. Otherwise, the operation returns a
 * `ValidationError`.
 */
export const updateRecord: API.OperationMethod<
  UpdateRecordRequest,
  UpdateRecordResponse,
  UpdateRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26) as any as S.Schema<UpdateRecordRequest>,
  output: __S(20) as any as S.Schema<UpdateRecordResponse>,
  errors: [
    AccessForbidden,
    ConflictException,
    InternalFailure,
    ResourceNotFound,
    ServiceUnavailable,
    ValidationError,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRecord",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.optional(S.String),
          RecordIdentifiersValueAsString: S.optional(__S(0)),
          FeatureNames: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "BatchGetRecordIdentifier" });
    case 2:
      return S.Array(__S(1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Identifiers: S.optional(__S(2)),
          ExpirationTimeResponse: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchGetRecord" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetRecordRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FeatureName: S.optional(S.String),
          ValueAsString: S.optional(S.String),
          ValueAsStringList: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "FeatureValue" });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.optional(S.String),
          RecordIdentifierValueAsString: S.optional(S.String),
          Record: S.optional(__S(5)),
          ExpiresAt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetRecordResultDetail",
      });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.optional(S.String),
          RecordIdentifierValueAsString: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchGetRecordError" });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Records: S.optional(__S(7)),
          Errors: S.optional(__S(9)),
          UnprocessedIdentifiers: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "BatchGetRecordResponse" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ Unit: S.optional(S.String), Value: S.optional(S.Number) }),
      ).annotate({ identifier: "TtlDuration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.optional(S.String),
          Record: S.optional(__S(5)),
          TargetStores: S.optional(__S(11)),
          TtlDuration: S.optional(__S(12)),
        }),
      ).annotate({ identifier: "BatchWriteRecordEntry" });
    case 6:
      return S.Array(__S(13));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Entries: S.optional(__S(14)),
          TtlDuration: S.optional(__S(12)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchWriteRecord" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchWriteRecordRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Entry: S.optional(__S(13)),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchWriteRecordError" });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Errors: S.optional(__S(17)),
          UnprocessedEntries: S.optional(__S(14)),
        }),
      ).annotate({ identifier: "BatchWriteRecordResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.String.pipe(T.HttpLabel("FeatureGroupName")),
          RecordIdentifierValueAsString: S.optional(S.String).pipe(
            T.HttpQuery("RecordIdentifierValueAsString"),
          ),
          EventTime: S.optional(S.String).pipe(T.HttpQuery("EventTime")),
          TargetStores: S.optional(__S(11)).pipe(T.HttpQuery("TargetStores")),
          DeletionMode: S.optional(S.String).pipe(T.HttpQuery("DeletionMode")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/FeatureGroup/{FeatureGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRecordRequest" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteRecordResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.String.pipe(T.HttpLabel("FeatureGroupName")),
          RecordIdentifierValueAsString: S.optional(S.String).pipe(
            T.HttpQuery("RecordIdentifierValueAsString"),
          ),
          FeatureNames: S.optional(__S(0)).pipe(T.HttpQuery("FeatureName")),
          ExpirationTimeResponse: S.optional(S.String).pipe(T.HttpQuery("ExpirationTimeResponse")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/FeatureGroup/{FeatureGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRecordRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Record: S.optional(__S(5)), ExpiresAt: S.optional(S.String) }),
      ).annotate({ identifier: "GetRecordResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.String.pipe(T.HttpLabel("FeatureGroupName")),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          IncludeSoftDeletedRecords: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/FeatureGroup/{FeatureGroupName}/ListRecords" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRecordsRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RecordIdentifiers: S.optional(__S(0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListRecordsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.String.pipe(T.HttpLabel("FeatureGroupName")),
          Record: S.optional(__S(5)),
          TargetStores: S.optional(__S(11)),
          TtlDuration: S.optional(__S(12)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/FeatureGroup/{FeatureGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutRecordRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FeatureGroupName: S.String.pipe(T.HttpLabel("FeatureGroupName")),
          RecordIdentifierValueAsString: S.optional(S.String),
          Features: S.optional(__S(5)),
          TargetStores: S.optional(__S(11)),
          TtlDuration: S.optional(__S(12)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/FeatureGroup/{FeatureGroupName}/Record" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRecordRequest" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
  }
}
