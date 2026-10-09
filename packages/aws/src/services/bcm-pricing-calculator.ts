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
  sdkId: "BCM Pricing Calculator",
  serviceShapeName: "AWSBCMPricingCalculator",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bcm-pricing-calculator" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-06-19");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
  const _p0 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
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
            `https://bcm-pricing-calculator-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(PartitionResult),
            {},
          );
        }
        return e(
          `https://bcm-pricing-calculator.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          _p0(PartitionResult),
          {},
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConflictCode", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class DataUnavailableException
  extends /*@__PURE__*/ S.TaggedError<DataUnavailableException>()(
    "DataUnavailableException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundCode", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ServiceQuotaCode", httpResponseCode: 402 }),
      /*@__PURE__*/ T.HttpError(402),
    ),
  ).pipe(C.withQuotaError) {}
export type ResourceId = string;
export type Key = string;
export type UsageGroup = string;
export type AccountId = string;
export type Uuid = string;
export type ReservedInstanceInstanceCount = number;
export interface AddReservedInstanceAction {
  reservedInstancesOfferingId?: string;
  instanceCount?: number;
}
const AddReservedInstanceAction = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AddReservedInstanceAction>;
export type SavingsPlanCommitment = number;
export interface AddSavingsPlanAction {
  savingsPlanOfferingId?: string;
  commitment?: number;
}
const AddSavingsPlanAction = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<AddSavingsPlanAction>;
export interface NegateReservedInstanceAction {
  reservedInstancesId?: string;
}
const NegateReservedInstanceAction = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<NegateReservedInstanceAction>;
export interface NegateSavingsPlanAction {
  savingsPlanId?: string;
}
const NegateSavingsPlanAction = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<NegateSavingsPlanAction>;
export type BillScenarioCommitmentModificationAction =
  | {
      addReservedInstanceAction: AddReservedInstanceAction;
      addSavingsPlanAction?: never;
      negateReservedInstanceAction?: never;
      negateSavingsPlanAction?: never;
    }
  | {
      addReservedInstanceAction?: never;
      addSavingsPlanAction: AddSavingsPlanAction;
      negateReservedInstanceAction?: never;
      negateSavingsPlanAction?: never;
    }
  | {
      addReservedInstanceAction?: never;
      addSavingsPlanAction?: never;
      negateReservedInstanceAction: NegateReservedInstanceAction;
      negateSavingsPlanAction?: never;
    }
  | {
      addReservedInstanceAction?: never;
      addSavingsPlanAction?: never;
      negateReservedInstanceAction?: never;
      negateSavingsPlanAction: NegateSavingsPlanAction;
    };
const BillScenarioCommitmentModificationAction = /*@__PURE__*/ __L.at(__c0, 4);
export interface BatchCreateBillScenarioCommitmentModificationEntry {
  key: string;
  group?: string;
  usageAccountId: string;
  commitmentAction: BillScenarioCommitmentModificationAction;
}
const BatchCreateBillScenarioCommitmentModificationEntry = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchCreateBillScenarioCommitmentModificationEntry>;
export type BatchCreateBillScenarioCommitmentModificationEntries =
  BatchCreateBillScenarioCommitmentModificationEntry[];
const BatchCreateBillScenarioCommitmentModificationEntries = /*@__PURE__*/ __L.at(__c0, 6);
export type ClientToken = string;
export interface BatchCreateBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  commitmentModifications: BatchCreateBillScenarioCommitmentModificationEntry[];
  clientToken?: string;
}
const BatchCreateBillScenarioCommitmentModificationRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchCreateBillScenarioCommitmentModificationRequest>;
export interface BatchCreateBillScenarioCommitmentModificationItem {
  key?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
const BatchCreateBillScenarioCommitmentModificationItem = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchCreateBillScenarioCommitmentModificationItem>;
export type BatchCreateBillScenarioCommitmentModificationItems =
  BatchCreateBillScenarioCommitmentModificationItem[];
const BatchCreateBillScenarioCommitmentModificationItems = /*@__PURE__*/ __L.at(__c1, 1);
export type BatchCreateBillScenarioCommitmentModificationErrorCode =
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | "INVALID_ACCOUNT"
  | (string & {});
const BatchCreateBillScenarioCommitmentModificationErrorCode = S.String;

export interface BatchCreateBillScenarioCommitmentModificationError_ {
  key?: string;
  errorMessage?: string;
  errorCode?: BatchCreateBillScenarioCommitmentModificationErrorCode;
}
const BatchCreateBillScenarioCommitmentModificationError_ = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<BatchCreateBillScenarioCommitmentModificationError_>;
export type BatchCreateBillScenarioCommitmentModificationErrors =
  BatchCreateBillScenarioCommitmentModificationError_[];
const BatchCreateBillScenarioCommitmentModificationErrors = /*@__PURE__*/ __L.at(__c1, 3);
export interface BatchCreateBillScenarioCommitmentModificationResponse {
  items?: BatchCreateBillScenarioCommitmentModificationItem[];
  errors?: BatchCreateBillScenarioCommitmentModificationError_[];
}
const BatchCreateBillScenarioCommitmentModificationResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchCreateBillScenarioCommitmentModificationResponse>;
export type ServiceCode = string;
export type UsageType = string;
export type Operation = string;
export type AvailabilityZone = string;
export interface UsageAmount {
  startHour: Date;
  amount: number;
}
const UsageAmount = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<UsageAmount>;
export type UsageAmounts = UsageAmount[];
const UsageAmounts = /*@__PURE__*/ __L.at(__c1, 6);
export interface BillInterval {
  start?: Date;
  end?: Date;
}
const BillInterval = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<BillInterval>;
export type ExpressionList = Expression[];
const ExpressionList = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<ExpressionList>;
export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c2, 1);
export interface ExpressionFilter {
  key?: string;
  matchOptions?: string[];
  values?: string[];
}
const ExpressionFilter = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<ExpressionFilter>;
export interface Expression {
  and?: Expression[];
  or?: Expression[];
  not?: Expression;
  costCategories?: ExpressionFilter;
  dimensions?: ExpressionFilter;
  tags?: ExpressionFilter;
}
const Expression = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<Expression>;
export interface HistoricalUsageEntity {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  usageAccountId: string;
  billInterval: BillInterval;
  filterExpression: Expression;
}
const HistoricalUsageEntity = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<HistoricalUsageEntity>;
export interface BatchCreateBillScenarioUsageModificationEntry {
  serviceCode: string;
  usageType: string;
  operation: string;
  availabilityZone?: string;
  key: string;
  group?: string;
  usageAccountId: string;
  amounts?: UsageAmount[];
  historicalUsage?: HistoricalUsageEntity;
}
const BatchCreateBillScenarioUsageModificationEntry = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<BatchCreateBillScenarioUsageModificationEntry>;
export type BatchCreateBillScenarioUsageModificationEntries =
  BatchCreateBillScenarioUsageModificationEntry[];
const BatchCreateBillScenarioUsageModificationEntries = /*@__PURE__*/ __L.at(__c2, 6);
export interface BatchCreateBillScenarioUsageModificationRequest {
  billScenarioId: string;
  usageModifications: BatchCreateBillScenarioUsageModificationEntry[];
  clientToken?: string;
}
const BatchCreateBillScenarioUsageModificationRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<BatchCreateBillScenarioUsageModificationRequest>;
export interface UsageQuantity {
  startHour?: Date;
  unit?: string;
  amount?: number;
}
const UsageQuantity = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<UsageQuantity>;
export type UsageQuantities = UsageQuantity[];
const UsageQuantities = /*@__PURE__*/ __L.at(__c3, 1);
export interface BatchCreateBillScenarioUsageModificationItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  quantities?: UsageQuantity[];
  historicalUsage?: HistoricalUsageEntity;
  key?: string;
}
const BatchCreateBillScenarioUsageModificationItem = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<BatchCreateBillScenarioUsageModificationItem>;
export type BatchCreateBillScenarioUsageModificationItems =
  BatchCreateBillScenarioUsageModificationItem[];
const BatchCreateBillScenarioUsageModificationItems = /*@__PURE__*/ __L.at(__c3, 3);
export type BatchCreateBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const BatchCreateBillScenarioUsageModificationErrorCode = S.String;

export interface BatchCreateBillScenarioUsageModificationError_ {
  key?: string;
  errorMessage?: string;
  errorCode?: BatchCreateBillScenarioUsageModificationErrorCode;
}
const BatchCreateBillScenarioUsageModificationError_ = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<BatchCreateBillScenarioUsageModificationError_>;
export type BatchCreateBillScenarioUsageModificationErrors =
  BatchCreateBillScenarioUsageModificationError_[];
const BatchCreateBillScenarioUsageModificationErrors = /*@__PURE__*/ __L.at(__c3, 5);
export interface BatchCreateBillScenarioUsageModificationResponse {
  items?: BatchCreateBillScenarioUsageModificationItem[];
  errors?: BatchCreateBillScenarioUsageModificationError_[];
}
const BatchCreateBillScenarioUsageModificationResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<BatchCreateBillScenarioUsageModificationResponse>;
export interface BatchCreateWorkloadEstimateUsageEntry {
  serviceCode: string;
  usageType: string;
  operation: string;
  key: string;
  group?: string;
  usageAccountId: string;
  amount: number;
  historicalUsage?: HistoricalUsageEntity;
}
const BatchCreateWorkloadEstimateUsageEntry = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<BatchCreateWorkloadEstimateUsageEntry>;
export type BatchCreateWorkloadEstimateUsageEntries = BatchCreateWorkloadEstimateUsageEntry[];
const BatchCreateWorkloadEstimateUsageEntries = /*@__PURE__*/ __L.at(__c4, 0);
export interface BatchCreateWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  usage: BatchCreateWorkloadEstimateUsageEntry[];
  clientToken?: string;
}
const BatchCreateWorkloadEstimateUsageRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<BatchCreateWorkloadEstimateUsageRequest>;
export interface WorkloadEstimateUsageQuantity {
  unit?: string;
  amount?: number;
}
const WorkloadEstimateUsageQuantity = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<WorkloadEstimateUsageQuantity>;
export type CurrencyCode = "USD" | (string & {});
const CurrencyCode = S.String;

export type WorkloadEstimateCostStatus = "VALID" | "INVALID" | "STALE" | (string & {});
const WorkloadEstimateCostStatus = S.String;

export interface BatchCreateWorkloadEstimateUsageItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  id?: string;
  usageAccountId?: string;
  group?: string;
  quantity?: WorkloadEstimateUsageQuantity;
  cost?: number;
  currency?: CurrencyCode;
  status?: WorkloadEstimateCostStatus;
  historicalUsage?: HistoricalUsageEntity;
  key?: string;
}
const BatchCreateWorkloadEstimateUsageItem = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<BatchCreateWorkloadEstimateUsageItem>;
export type BatchCreateWorkloadEstimateUsageItems = BatchCreateWorkloadEstimateUsageItem[];
const BatchCreateWorkloadEstimateUsageItems = /*@__PURE__*/ __L.at(__c4, 4);
export type BatchCreateWorkloadEstimateUsageCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const BatchCreateWorkloadEstimateUsageCode = S.String;

export interface BatchCreateWorkloadEstimateUsageError_ {
  key?: string;
  errorCode?: BatchCreateWorkloadEstimateUsageCode;
  errorMessage?: string;
}
const BatchCreateWorkloadEstimateUsageError_ = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<BatchCreateWorkloadEstimateUsageError_>;
export type BatchCreateWorkloadEstimateUsageErrors = BatchCreateWorkloadEstimateUsageError_[];
const BatchCreateWorkloadEstimateUsageErrors = /*@__PURE__*/ __L.at(__c4, 6);
export interface BatchCreateWorkloadEstimateUsageResponse {
  items?: BatchCreateWorkloadEstimateUsageItem[];
  errors?: BatchCreateWorkloadEstimateUsageError_[];
}
const BatchCreateWorkloadEstimateUsageResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<BatchCreateWorkloadEstimateUsageResponse>;
export type BatchDeleteBillScenarioCommitmentModificationEntries = string[];
const BatchDeleteBillScenarioCommitmentModificationEntries =
  StringList as any as S.Schema<BatchDeleteBillScenarioCommitmentModificationEntries>;
export interface BatchDeleteBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  ids: string[];
}
const BatchDeleteBillScenarioCommitmentModificationRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<BatchDeleteBillScenarioCommitmentModificationRequest>;
export type BatchDeleteBillScenarioCommitmentModificationErrorCode =
  | "BAD_REQUEST"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const BatchDeleteBillScenarioCommitmentModificationErrorCode = S.String;

export interface BatchDeleteBillScenarioCommitmentModificationError_ {
  id?: string;
  errorCode?: BatchDeleteBillScenarioCommitmentModificationErrorCode;
  errorMessage?: string;
}
const BatchDeleteBillScenarioCommitmentModificationError_ = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<BatchDeleteBillScenarioCommitmentModificationError_>;
export type BatchDeleteBillScenarioCommitmentModificationErrors =
  BatchDeleteBillScenarioCommitmentModificationError_[];
const BatchDeleteBillScenarioCommitmentModificationErrors = /*@__PURE__*/ __L.at(__c5, 2);
export interface BatchDeleteBillScenarioCommitmentModificationResponse {
  errors?: BatchDeleteBillScenarioCommitmentModificationError_[];
}
const BatchDeleteBillScenarioCommitmentModificationResponse = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<BatchDeleteBillScenarioCommitmentModificationResponse>;
export type BatchDeleteBillScenarioUsageModificationEntries = string[];
const BatchDeleteBillScenarioUsageModificationEntries =
  StringList as any as S.Schema<BatchDeleteBillScenarioUsageModificationEntries>;
export interface BatchDeleteBillScenarioUsageModificationRequest {
  billScenarioId: string;
  ids: string[];
}
const BatchDeleteBillScenarioUsageModificationRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<BatchDeleteBillScenarioUsageModificationRequest>;
export type BatchDeleteBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const BatchDeleteBillScenarioUsageModificationErrorCode = S.String;

export interface BatchDeleteBillScenarioUsageModificationError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: BatchDeleteBillScenarioUsageModificationErrorCode;
}
const BatchDeleteBillScenarioUsageModificationError_ = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<BatchDeleteBillScenarioUsageModificationError_>;
export type BatchDeleteBillScenarioUsageModificationErrors =
  BatchDeleteBillScenarioUsageModificationError_[];
const BatchDeleteBillScenarioUsageModificationErrors = /*@__PURE__*/ __L.at(__c5, 6);
export interface BatchDeleteBillScenarioUsageModificationResponse {
  errors?: BatchDeleteBillScenarioUsageModificationError_[];
}
const BatchDeleteBillScenarioUsageModificationResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<BatchDeleteBillScenarioUsageModificationResponse>;
export type BatchDeleteWorkloadEstimateUsageEntries = string[];
const BatchDeleteWorkloadEstimateUsageEntries =
  StringList as any as S.Schema<BatchDeleteWorkloadEstimateUsageEntries>;
export interface BatchDeleteWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  ids: string[];
}
const BatchDeleteWorkloadEstimateUsageRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<BatchDeleteWorkloadEstimateUsageRequest>;
export type WorkloadEstimateUpdateUsageErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const WorkloadEstimateUpdateUsageErrorCode = S.String;

export interface BatchDeleteWorkloadEstimateUsageError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: WorkloadEstimateUpdateUsageErrorCode;
}
const BatchDeleteWorkloadEstimateUsageError_ = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<BatchDeleteWorkloadEstimateUsageError_>;
export type BatchDeleteWorkloadEstimateUsageErrors = BatchDeleteWorkloadEstimateUsageError_[];
const BatchDeleteWorkloadEstimateUsageErrors = /*@__PURE__*/ __L.at(__c6, 2);
export interface BatchDeleteWorkloadEstimateUsageResponse {
  errors?: BatchDeleteWorkloadEstimateUsageError_[];
}
const BatchDeleteWorkloadEstimateUsageResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<BatchDeleteWorkloadEstimateUsageResponse>;
export interface BatchUpdateBillScenarioCommitmentModificationEntry {
  id: string;
  group?: string;
}
const BatchUpdateBillScenarioCommitmentModificationEntry = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<BatchUpdateBillScenarioCommitmentModificationEntry>;
export type BatchUpdateBillScenarioCommitmentModificationEntries =
  BatchUpdateBillScenarioCommitmentModificationEntry[];
const BatchUpdateBillScenarioCommitmentModificationEntries = /*@__PURE__*/ __L.at(__c6, 5);
export interface BatchUpdateBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  commitmentModifications: BatchUpdateBillScenarioCommitmentModificationEntry[];
}
const BatchUpdateBillScenarioCommitmentModificationRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<BatchUpdateBillScenarioCommitmentModificationRequest>;
export interface BillScenarioCommitmentModificationItem {
  id?: string;
  usageAccountId?: string;
  group?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
const BillScenarioCommitmentModificationItem = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<BillScenarioCommitmentModificationItem>;
export type BillScenarioCommitmentModificationItems = BillScenarioCommitmentModificationItem[];
const BillScenarioCommitmentModificationItems = /*@__PURE__*/ __L.at(__c7, 0);
export type BatchUpdateBillScenarioCommitmentModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const BatchUpdateBillScenarioCommitmentModificationErrorCode = S.String;

export interface BatchUpdateBillScenarioCommitmentModificationError_ {
  id?: string;
  errorCode?: BatchUpdateBillScenarioCommitmentModificationErrorCode;
  errorMessage?: string;
}
const BatchUpdateBillScenarioCommitmentModificationError_ = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<BatchUpdateBillScenarioCommitmentModificationError_>;
export type BatchUpdateBillScenarioCommitmentModificationErrors =
  BatchUpdateBillScenarioCommitmentModificationError_[];
const BatchUpdateBillScenarioCommitmentModificationErrors = /*@__PURE__*/ __L.at(__c7, 2);
export interface BatchUpdateBillScenarioCommitmentModificationResponse {
  items?: BillScenarioCommitmentModificationItem[];
  errors?: BatchUpdateBillScenarioCommitmentModificationError_[];
}
const BatchUpdateBillScenarioCommitmentModificationResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<BatchUpdateBillScenarioCommitmentModificationResponse>;
export interface BatchUpdateBillScenarioUsageModificationEntry {
  id: string;
  group?: string;
  amounts?: UsageAmount[];
}
const BatchUpdateBillScenarioUsageModificationEntry = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<BatchUpdateBillScenarioUsageModificationEntry>;
export type BatchUpdateBillScenarioUsageModificationEntries =
  BatchUpdateBillScenarioUsageModificationEntry[];
const BatchUpdateBillScenarioUsageModificationEntries = /*@__PURE__*/ __L.at(__c7, 5);
export interface BatchUpdateBillScenarioUsageModificationRequest {
  billScenarioId: string;
  usageModifications: BatchUpdateBillScenarioUsageModificationEntry[];
}
const BatchUpdateBillScenarioUsageModificationRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<BatchUpdateBillScenarioUsageModificationRequest>;
export interface BillScenarioUsageModificationItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  quantities?: UsageQuantity[];
  historicalUsage?: HistoricalUsageEntity;
}
const BillScenarioUsageModificationItem = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<BillScenarioUsageModificationItem>;
export type BillScenarioUsageModificationItems = BillScenarioUsageModificationItem[];
const BillScenarioUsageModificationItems = /*@__PURE__*/ __L.at(__c8, 0);
export type BatchUpdateBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
const BatchUpdateBillScenarioUsageModificationErrorCode = S.String;

export interface BatchUpdateBillScenarioUsageModificationError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: BatchUpdateBillScenarioUsageModificationErrorCode;
}
const BatchUpdateBillScenarioUsageModificationError_ = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<BatchUpdateBillScenarioUsageModificationError_>;
export type BatchUpdateBillScenarioUsageModificationErrors =
  BatchUpdateBillScenarioUsageModificationError_[];
const BatchUpdateBillScenarioUsageModificationErrors = /*@__PURE__*/ __L.at(__c8, 2);
export interface BatchUpdateBillScenarioUsageModificationResponse {
  items?: BillScenarioUsageModificationItem[];
  errors?: BatchUpdateBillScenarioUsageModificationError_[];
}
const BatchUpdateBillScenarioUsageModificationResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<BatchUpdateBillScenarioUsageModificationResponse>;
export interface BatchUpdateWorkloadEstimateUsageEntry {
  id: string;
  group?: string;
  amount?: number;
}
const BatchUpdateWorkloadEstimateUsageEntry = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<BatchUpdateWorkloadEstimateUsageEntry>;
export type BatchUpdateWorkloadEstimateUsageEntries = BatchUpdateWorkloadEstimateUsageEntry[];
const BatchUpdateWorkloadEstimateUsageEntries = /*@__PURE__*/ __L.at(__c8, 5);
export interface BatchUpdateWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  usage: BatchUpdateWorkloadEstimateUsageEntry[];
}
const BatchUpdateWorkloadEstimateUsageRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<BatchUpdateWorkloadEstimateUsageRequest>;
export interface WorkloadEstimateUsageItem {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  id?: string;
  usageAccountId?: string;
  group?: string;
  quantity?: WorkloadEstimateUsageQuantity;
  cost?: number;
  currency?: CurrencyCode;
  status?: WorkloadEstimateCostStatus;
  historicalUsage?: HistoricalUsageEntity;
}
const WorkloadEstimateUsageItem = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<WorkloadEstimateUsageItem>;
export type WorkloadEstimateUsageItems = WorkloadEstimateUsageItem[];
const WorkloadEstimateUsageItems = /*@__PURE__*/ __L.at(__c9, 0);
export interface BatchUpdateWorkloadEstimateUsageError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: WorkloadEstimateUpdateUsageErrorCode;
}
const BatchUpdateWorkloadEstimateUsageError_ = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<BatchUpdateWorkloadEstimateUsageError_>;
export type BatchUpdateWorkloadEstimateUsageErrors = BatchUpdateWorkloadEstimateUsageError_[];
const BatchUpdateWorkloadEstimateUsageErrors = /*@__PURE__*/ __L.at(__c9, 2);
export interface BatchUpdateWorkloadEstimateUsageResponse {
  items?: WorkloadEstimateUsageItem[];
  errors?: BatchUpdateWorkloadEstimateUsageError_[];
}
const BatchUpdateWorkloadEstimateUsageResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<BatchUpdateWorkloadEstimateUsageResponse>;
export type BillEstimateName = string;
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c9, 4);
export interface CreateBillEstimateRequest {
  billScenarioId: string;
  name: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateBillEstimateRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<CreateBillEstimateRequest>;
export type BillEstimateStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED" | (string & {});
const BillEstimateStatus = S.String;

export interface CostAmount {
  amount?: number;
  currency?: CurrencyCode;
}
const CostAmount = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<CostAmount>;
export interface CostDifference {
  historicalCost?: CostAmount;
  estimatedCost?: CostAmount;
}
const CostDifference = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<CostDifference>;
export type ServiceCostDifferenceMap = { [key: string]: CostDifference | undefined };
const ServiceCostDifferenceMap = /*@__PURE__*/ __L.at(__c10, 0);
export interface BillEstimateCostSummary {
  totalCostDifference?: CostDifference;
  serviceCostDifferences?: { [key: string]: CostDifference | undefined };
}
const BillEstimateCostSummary = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<BillEstimateCostSummary>;
export type GroupSharingPreferenceEnum = "OPEN" | "PRIORITIZED" | "RESTRICTED" | (string & {});
const GroupSharingPreferenceEnum = S.String;

export type CostCategoryArn = string;
export interface CreateBillEstimateResponse {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  failureMessage?: string;
  billInterval?: BillInterval;
  costSummary?: BillEstimateCostSummary;
  createdAt?: Date;
  expiresAt?: Date;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
  costCategoryGroupSharingPreferenceEffectiveDate?: Date;
}
const CreateBillEstimateResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<CreateBillEstimateResponse>;
export type BillScenarioName = string;
export interface CreateBillScenarioRequest {
  name: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
const CreateBillScenarioRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<CreateBillScenarioRequest>;
export type BillScenarioStatus = "READY" | "LOCKED" | "FAILED" | "STALE" | (string & {});
const BillScenarioStatus = S.String;

export interface CreateBillScenarioResponse {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date;
  expiresAt?: Date;
  failureMessage?: string;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
const CreateBillScenarioResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<CreateBillScenarioResponse>;
export type WorkloadEstimateName = string;
export type WorkloadEstimateRateType =
  | "BEFORE_DISCOUNTS"
  | "AFTER_DISCOUNTS"
  | "AFTER_DISCOUNTS_AND_COMMITMENTS"
  | (string & {});
const WorkloadEstimateRateType = S.String;

export interface CreateWorkloadEstimateRequest {
  name: string;
  clientToken?: string;
  rateType?: WorkloadEstimateRateType;
  tags?: { [key: string]: string | undefined };
}
const CreateWorkloadEstimateRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<CreateWorkloadEstimateRequest>;
export type WorkloadEstimateStatus =
  | "UPDATING"
  | "VALID"
  | "INVALID"
  | "ACTION_NEEDED"
  | (string & {});
const WorkloadEstimateStatus = S.String;

export interface CreateWorkloadEstimateResponse {
  id: string;
  name?: string;
  createdAt?: Date;
  expiresAt?: Date;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
const CreateWorkloadEstimateResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<CreateWorkloadEstimateResponse>;
export interface DeleteBillEstimateRequest {
  identifier: string;
}
const DeleteBillEstimateRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DeleteBillEstimateRequest>;
export interface DeleteBillEstimateResponse {}
const DeleteBillEstimateResponse = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<DeleteBillEstimateResponse>;
export interface DeleteBillScenarioRequest {
  identifier: string;
}
const DeleteBillScenarioRequest = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<DeleteBillScenarioRequest>;
export interface DeleteBillScenarioResponse {}
const DeleteBillScenarioResponse =
  DeleteBillEstimateResponse as any as S.Schema<DeleteBillScenarioResponse>;
export interface DeleteWorkloadEstimateRequest {
  identifier: string;
}
const DeleteWorkloadEstimateRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DeleteWorkloadEstimateRequest>;
export interface DeleteWorkloadEstimateResponse {}
const DeleteWorkloadEstimateResponse =
  DeleteBillEstimateResponse as any as S.Schema<DeleteWorkloadEstimateResponse>;
export interface GetBillEstimateRequest {
  identifier: string;
}
const GetBillEstimateRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetBillEstimateRequest>;
export interface GetBillEstimateResponse {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  failureMessage?: string;
  billInterval?: BillInterval;
  costSummary?: BillEstimateCostSummary;
  createdAt?: Date;
  expiresAt?: Date;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
  costCategoryGroupSharingPreferenceEffectiveDate?: Date;
}
const GetBillEstimateResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetBillEstimateResponse>;
export interface GetBillScenarioRequest {
  identifier: string;
}
const GetBillScenarioRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<GetBillScenarioRequest>;
export interface GetBillScenarioResponse {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date;
  expiresAt?: Date;
  failureMessage?: string;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
const GetBillScenarioResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetBillScenarioResponse>;
export interface GetPreferencesRequest {}
const GetPreferencesRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetPreferencesRequest>;
export type RateType =
  | "BEFORE_DISCOUNTS"
  | "AFTER_DISCOUNTS"
  | "AFTER_DISCOUNTS_AND_COMMITMENTS"
  | (string & {});
const RateType = S.String;

export type RateTypes = RateType[];
const RateTypes = /*@__PURE__*/ __L.at(__c12, 0);
export interface GetPreferencesResponse {
  managementAccountRateTypeSelections?: RateType[];
  memberAccountRateTypeSelections?: RateType[];
  standaloneAccountRateTypeSelections?: RateType[];
}
const GetPreferencesResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<GetPreferencesResponse>;
export interface GetWorkloadEstimateRequest {
  identifier: string;
}
const GetWorkloadEstimateRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetWorkloadEstimateRequest>;
export interface GetWorkloadEstimateResponse {
  id: string;
  name?: string;
  createdAt?: Date;
  expiresAt?: Date;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
const GetWorkloadEstimateResponse =
  CreateWorkloadEstimateResponse as any as S.Schema<GetWorkloadEstimateResponse>;
export type NextPageToken = string;
export type MaxResults = number;
export interface ListBillEstimateCommitmentsRequest {
  billEstimateId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListBillEstimateCommitmentsRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<ListBillEstimateCommitmentsRequest>;
export type PurchaseAgreementType = "SAVINGS_PLANS" | "RESERVED_INSTANCE" | (string & {});
const PurchaseAgreementType = S.String;

export interface BillEstimateCommitmentSummary {
  id?: string;
  purchaseAgreementType?: PurchaseAgreementType;
  offeringId?: string;
  usageAccountId?: string;
  region?: string;
  termLength?: string;
  paymentOption?: string;
  upfrontPayment?: CostAmount;
  monthlyPayment?: CostAmount;
}
const BillEstimateCommitmentSummary = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<BillEstimateCommitmentSummary>;
export type BillEstimateCommitmentSummaries = BillEstimateCommitmentSummary[];
const BillEstimateCommitmentSummaries = /*@__PURE__*/ __L.at(__c12, 5);
export interface ListBillEstimateCommitmentsResponse {
  items?: BillEstimateCommitmentSummary[];
  nextToken?: string;
}
const ListBillEstimateCommitmentsResponse = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<ListBillEstimateCommitmentsResponse>;
export interface ListBillEstimateInputCommitmentModificationsRequest {
  billEstimateId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListBillEstimateInputCommitmentModificationsRequest = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<ListBillEstimateInputCommitmentModificationsRequest>;
export interface BillEstimateInputCommitmentModificationSummary {
  id?: string;
  group?: string;
  usageAccountId?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
const BillEstimateInputCommitmentModificationSummary = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<BillEstimateInputCommitmentModificationSummary>;
export type BillEstimateInputCommitmentModificationSummaries =
  BillEstimateInputCommitmentModificationSummary[];
const BillEstimateInputCommitmentModificationSummaries = /*@__PURE__*/ __L.at(__c13, 1);
export interface ListBillEstimateInputCommitmentModificationsResponse {
  items?: BillEstimateInputCommitmentModificationSummary[];
  nextToken?: string;
}
const ListBillEstimateInputCommitmentModificationsResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ListBillEstimateInputCommitmentModificationsResponse>;
export type ListUsageFilterName =
  | "USAGE_ACCOUNT_ID"
  | "SERVICE_CODE"
  | "USAGE_TYPE"
  | "OPERATION"
  | "LOCATION"
  | "USAGE_GROUP"
  | "HISTORICAL_USAGE_ACCOUNT_ID"
  | "HISTORICAL_SERVICE_CODE"
  | "HISTORICAL_USAGE_TYPE"
  | "HISTORICAL_OPERATION"
  | "HISTORICAL_LOCATION"
  | (string & {});
const ListUsageFilterName = S.String;

export type ListUsageFilterValues = string[];
const ListUsageFilterValues = StringList as any as S.Schema<ListUsageFilterValues>;
export type MatchOption = "EQUALS" | "STARTS_WITH" | "CONTAINS" | (string & {});
const MatchOption = S.String;

export interface ListUsageFilter {
  name: ListUsageFilterName;
  values: string[];
  matchOption?: MatchOption;
}
const ListUsageFilter = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<ListUsageFilter>;
export type ListUsageFilters = ListUsageFilter[];
const ListUsageFilters = /*@__PURE__*/ __L.at(__c13, 4);
export interface ListBillEstimateInputUsageModificationsRequest {
  billEstimateId: string;
  filters?: ListUsageFilter[];
  nextToken?: string;
  maxResults?: number;
}
const ListBillEstimateInputUsageModificationsRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ListBillEstimateInputUsageModificationsRequest>;
export interface BillEstimateInputUsageModificationSummary {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  quantities?: UsageQuantity[];
  historicalUsage?: HistoricalUsageEntity;
}
export type BillEstimateInputUsageModificationSummaries =
  BillEstimateInputUsageModificationSummary[];
const BillEstimateInputUsageModificationSummaries =
  BillScenarioUsageModificationItems as any as S.Schema<BillEstimateInputUsageModificationSummaries>;
export interface ListBillEstimateInputUsageModificationsResponse {
  items?: BillEstimateInputUsageModificationSummary[];
  nextToken?: string;
}
const ListBillEstimateInputUsageModificationsResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ListBillEstimateInputUsageModificationsResponse>;
export type ListBillEstimateLineItemsFilterName =
  | "USAGE_ACCOUNT_ID"
  | "SERVICE_CODE"
  | "USAGE_TYPE"
  | "OPERATION"
  | "LOCATION"
  | "LINE_ITEM_TYPE"
  | (string & {});
const ListBillEstimateLineItemsFilterName = S.String;

export type ListBillEstimateLineItemsFilterValues = string[];
const ListBillEstimateLineItemsFilterValues =
  StringList as any as S.Schema<ListBillEstimateLineItemsFilterValues>;
export interface ListBillEstimateLineItemsFilter {
  name: ListBillEstimateLineItemsFilterName;
  values: string[];
  matchOption?: MatchOption;
}
const ListBillEstimateLineItemsFilter = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListBillEstimateLineItemsFilter>;
export type ListBillEstimateLineItemsFilters = ListBillEstimateLineItemsFilter[];
const ListBillEstimateLineItemsFilters = /*@__PURE__*/ __L.at(__c14, 0);
export interface ListBillEstimateLineItemsRequest {
  billEstimateId: string;
  filters?: ListBillEstimateLineItemsFilter[];
  nextToken?: string;
  maxResults?: number;
}
const ListBillEstimateLineItemsRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<ListBillEstimateLineItemsRequest>;
export interface UsageQuantityResult {
  amount?: number;
  unit?: string;
}
const UsageQuantityResult = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<UsageQuantityResult>;
export type SavingsPlanArns = string[];
const SavingsPlanArns = StringList as any as S.Schema<SavingsPlanArns>;
export interface BillEstimateLineItemSummary {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  availabilityZone?: string;
  id?: string;
  lineItemId?: string;
  lineItemType?: string;
  payerAccountId?: string;
  usageAccountId?: string;
  estimatedUsageQuantity?: UsageQuantityResult;
  estimatedCost?: CostAmount;
  historicalUsageQuantity?: UsageQuantityResult;
  historicalCost?: CostAmount;
  savingsPlanArns?: string[];
}
const BillEstimateLineItemSummary = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<BillEstimateLineItemSummary>;
export type BillEstimateLineItemSummaries = BillEstimateLineItemSummary[];
const BillEstimateLineItemSummaries = /*@__PURE__*/ __L.at(__c14, 4);
export interface ListBillEstimateLineItemsResponse {
  items?: BillEstimateLineItemSummary[];
  nextToken?: string;
}
const ListBillEstimateLineItemsResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<ListBillEstimateLineItemsResponse>;
export type ListBillEstimatesFilterName = "STATUS" | "NAME" | (string & {});
const ListBillEstimatesFilterName = S.String;

export type ListBillEstimatesFilterValues = string[];
const ListBillEstimatesFilterValues = StringList as any as S.Schema<ListBillEstimatesFilterValues>;
export interface ListBillEstimatesFilter {
  name: ListBillEstimatesFilterName;
  values: string[];
  matchOption?: MatchOption;
}
const ListBillEstimatesFilter = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListBillEstimatesFilter>;
export type ListBillEstimatesFilters = ListBillEstimatesFilter[];
const ListBillEstimatesFilters = /*@__PURE__*/ __L.at(__c14, 7);
export interface FilterTimestamp {
  afterTimestamp?: Date;
  beforeTimestamp?: Date;
}
const FilterTimestamp = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<FilterTimestamp>;
export interface ListBillEstimatesRequest {
  filters?: ListBillEstimatesFilter[];
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  nextToken?: string;
  maxResults?: number;
}
const ListBillEstimatesRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListBillEstimatesRequest>;
export interface BillEstimateSummary {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  billInterval?: BillInterval;
  createdAt?: Date;
  expiresAt?: Date;
}
const BillEstimateSummary = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<BillEstimateSummary>;
export type BillEstimateSummaries = BillEstimateSummary[];
const BillEstimateSummaries = /*@__PURE__*/ __L.at(__c15, 3);
export interface ListBillEstimatesResponse {
  items?: BillEstimateSummary[];
  nextToken?: string;
}
const ListBillEstimatesResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ListBillEstimatesResponse>;
export interface ListBillScenarioCommitmentModificationsRequest {
  billScenarioId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListBillScenarioCommitmentModificationsRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListBillScenarioCommitmentModificationsRequest>;
export interface ListBillScenarioCommitmentModificationsResponse {
  items?: BillScenarioCommitmentModificationItem[];
  nextToken?: string;
}
const ListBillScenarioCommitmentModificationsResponse = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListBillScenarioCommitmentModificationsResponse>;
export type ListBillScenariosFilterName =
  | "STATUS"
  | "NAME"
  | "GROUP_SHARING_PREFERENCE"
  | "COST_CATEGORY_ARN"
  | (string & {});
const ListBillScenariosFilterName = S.String;

export type ListBillScenariosFilterValues = string[];
const ListBillScenariosFilterValues = StringList as any as S.Schema<ListBillScenariosFilterValues>;
export interface ListBillScenariosFilter {
  name: ListBillScenariosFilterName;
  values: string[];
  matchOption?: MatchOption;
}
const ListBillScenariosFilter = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ListBillScenariosFilter>;
export type ListBillScenariosFilters = ListBillScenariosFilter[];
const ListBillScenariosFilters = /*@__PURE__*/ __L.at(__c16, 0);
export interface ListBillScenariosRequest {
  filters?: ListBillScenariosFilter[];
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  nextToken?: string;
  maxResults?: number;
}
const ListBillScenariosRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ListBillScenariosRequest>;
export interface BillScenarioSummary {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date;
  expiresAt?: Date;
  failureMessage?: string;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
const BillScenarioSummary = GetBillScenarioResponse as any as S.Schema<BillScenarioSummary>;
export type BillScenarioSummaries = BillScenarioSummary[];
const BillScenarioSummaries = /*@__PURE__*/ __L.at(__c16, 2);
export interface ListBillScenariosResponse {
  items?: BillScenarioSummary[];
  nextToken?: string;
}
const ListBillScenariosResponse = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<ListBillScenariosResponse>;
export interface ListBillScenarioUsageModificationsRequest {
  billScenarioId: string;
  filters?: ListUsageFilter[];
  nextToken?: string;
  maxResults?: number;
}
const ListBillScenarioUsageModificationsRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ListBillScenarioUsageModificationsRequest>;
export interface ListBillScenarioUsageModificationsResponse {
  items?: BillScenarioUsageModificationItem[];
  nextToken?: string;
}
const ListBillScenarioUsageModificationsResponse =
  ListBillEstimateInputUsageModificationsResponse as any as S.Schema<ListBillScenarioUsageModificationsResponse>;
export type Arn = string;
export interface ListTagsForResourceRequest {
  arn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export type ListWorkloadEstimatesFilterName = "STATUS" | "NAME" | (string & {});
const ListWorkloadEstimatesFilterName = S.String;

export type ListWorkloadEstimatesFilterValues = string[];
const ListWorkloadEstimatesFilterValues =
  StringList as any as S.Schema<ListWorkloadEstimatesFilterValues>;
export interface ListWorkloadEstimatesFilter {
  name: ListWorkloadEstimatesFilterName;
  values: string[];
  matchOption?: MatchOption;
}
const ListWorkloadEstimatesFilter = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ListWorkloadEstimatesFilter>;
export type ListWorkloadEstimatesFilters = ListWorkloadEstimatesFilter[];
const ListWorkloadEstimatesFilters = /*@__PURE__*/ __L.at(__c17, 0);
export interface ListWorkloadEstimatesRequest {
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  filters?: ListWorkloadEstimatesFilter[];
  nextToken?: string;
  maxResults?: number;
}
const ListWorkloadEstimatesRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<ListWorkloadEstimatesRequest>;
export interface WorkloadEstimateSummary {
  id: string;
  name?: string;
  createdAt?: Date;
  expiresAt?: Date;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
const WorkloadEstimateSummary = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<WorkloadEstimateSummary>;
export type WorkloadEstimateSummaries = WorkloadEstimateSummary[];
const WorkloadEstimateSummaries = /*@__PURE__*/ __L.at(__c17, 3);
export interface ListWorkloadEstimatesResponse {
  items?: WorkloadEstimateSummary[];
  nextToken?: string;
}
const ListWorkloadEstimatesResponse = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ListWorkloadEstimatesResponse>;
export type WorkloadEstimateUsageMaxResults = number;
export interface ListWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  filters?: ListUsageFilter[];
  nextToken?: string;
  maxResults?: number;
}
const ListWorkloadEstimateUsageRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ListWorkloadEstimateUsageRequest>;
export interface ListWorkloadEstimateUsageResponse {
  items?: WorkloadEstimateUsageItem[];
  nextToken?: string;
}
const ListWorkloadEstimateUsageResponse = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ListWorkloadEstimateUsageResponse>;
export interface TagResourceRequest {
  arn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteBillEstimateResponse as any as S.Schema<TagResourceResponse>;
export type ResourceTagKeys = string[];
const ResourceTagKeys = StringList as any as S.Schema<ResourceTagKeys>;
export interface UntagResourceRequest {
  arn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteBillEstimateResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateBillEstimateRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date;
}
const UpdateBillEstimateRequest = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<UpdateBillEstimateRequest>;
export interface UpdateBillEstimateResponse {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  failureMessage?: string;
  billInterval?: BillInterval;
  costSummary?: BillEstimateCostSummary;
  createdAt?: Date;
  expiresAt?: Date;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
  costCategoryGroupSharingPreferenceEffectiveDate?: Date;
}
const UpdateBillEstimateResponse =
  CreateBillEstimateResponse as any as S.Schema<UpdateBillEstimateResponse>;
export interface UpdateBillScenarioRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
const UpdateBillScenarioRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<UpdateBillScenarioRequest>;
export interface UpdateBillScenarioResponse {
  id: string;
  name?: string;
  billInterval?: BillInterval;
  status?: BillScenarioStatus;
  createdAt?: Date;
  expiresAt?: Date;
  failureMessage?: string;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
const UpdateBillScenarioResponse =
  CreateBillScenarioResponse as any as S.Schema<UpdateBillScenarioResponse>;
export interface UpdatePreferencesRequest {
  managementAccountRateTypeSelections?: RateType[];
  memberAccountRateTypeSelections?: RateType[];
  standaloneAccountRateTypeSelections?: RateType[];
}
const UpdatePreferencesRequest = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<UpdatePreferencesRequest>;
export interface UpdatePreferencesResponse {
  managementAccountRateTypeSelections?: RateType[];
  memberAccountRateTypeSelections?: RateType[];
  standaloneAccountRateTypeSelections?: RateType[];
}
const UpdatePreferencesResponse = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<UpdatePreferencesResponse>;
export interface UpdateWorkloadEstimateRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date;
}
const UpdateWorkloadEstimateRequest = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<UpdateWorkloadEstimateRequest>;
export interface UpdateWorkloadEstimateResponse {
  id: string;
  name?: string;
  createdAt?: Date;
  expiresAt?: Date;
  rateType?: WorkloadEstimateRateType;
  rateTimestamp?: Date;
  status?: WorkloadEstimateStatus;
  totalCost?: number;
  costCurrency?: CurrencyCode;
  failureMessage?: string;
}
const UpdateWorkloadEstimateResponse =
  CreateWorkloadEstimateResponse as any as S.Schema<UpdateWorkloadEstimateResponse>;
export type BatchCreateBillScenarioCommitmentModificationError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Create Compute Savings Plans, EC2 Instance Savings Plans, or EC2 Reserved Instances commitments that you want to model in a Bill Scenario.
 *
 * The `BatchCreateBillScenarioCommitmentModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:CreateBillScenarioCommitmentModification` in your policies.
 */
export const batchCreateBillScenarioCommitmentModification: API.OperationMethod<
  BatchCreateBillScenarioCommitmentModificationRequest,
  BatchCreateBillScenarioCommitmentModificationResponse,
  BatchCreateBillScenarioCommitmentModificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateBillScenarioCommitmentModificationRequest,
  output: BatchCreateBillScenarioCommitmentModificationResponse,
  errors: [ConflictException, DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateBillScenarioCommitmentModification",
}));

export type BatchCreateBillScenarioUsageModificationError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Create Amazon Web Services service usage that you want to model in a Bill Scenario.
 *
 * The `BatchCreateBillScenarioUsageModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:CreateBillScenarioUsageModification` in your policies.
 */
export const batchCreateBillScenarioUsageModification: API.OperationMethod<
  BatchCreateBillScenarioUsageModificationRequest,
  BatchCreateBillScenarioUsageModificationResponse,
  BatchCreateBillScenarioUsageModificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateBillScenarioUsageModificationRequest,
  output: BatchCreateBillScenarioUsageModificationResponse,
  errors: [
    ConflictException,
    DataUnavailableException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateBillScenarioUsageModification",
}));

export type BatchCreateWorkloadEstimateUsageError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Create Amazon Web Services service usage that you want to model in a Workload Estimate.
 *
 * The `BatchCreateWorkloadEstimateUsage` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:CreateWorkloadEstimateUsage` in your policies.
 */
export const batchCreateWorkloadEstimateUsage: API.OperationMethod<
  BatchCreateWorkloadEstimateUsageRequest,
  BatchCreateWorkloadEstimateUsageResponse,
  BatchCreateWorkloadEstimateUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateWorkloadEstimateUsageRequest,
  output: BatchCreateWorkloadEstimateUsageResponse,
  errors: [
    ConflictException,
    DataUnavailableException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateWorkloadEstimateUsage",
}));

export type BatchDeleteBillScenarioCommitmentModificationError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Delete commitment that you have created in a Bill Scenario. You can only delete a commitment that you had added and cannot model deletion (or removal) of a existing commitment. If you want model deletion of an existing commitment, see the negate BillScenarioCommitmentModificationAction of BatchCreateBillScenarioCommitmentModification operation.
 *
 * The `BatchDeleteBillScenarioCommitmentModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:DeleteBillScenarioCommitmentModification` in your policies.
 */
export const batchDeleteBillScenarioCommitmentModification: API.OperationMethod<
  BatchDeleteBillScenarioCommitmentModificationRequest,
  BatchDeleteBillScenarioCommitmentModificationResponse,
  BatchDeleteBillScenarioCommitmentModificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteBillScenarioCommitmentModificationRequest,
  output: BatchDeleteBillScenarioCommitmentModificationResponse,
  errors: [ConflictException, DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteBillScenarioCommitmentModification",
}));

export type BatchDeleteBillScenarioUsageModificationError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Delete usage that you have created in a Bill Scenario. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see BatchUpdateBillScenarioUsageModification.
 *
 * The `BatchDeleteBillScenarioUsageModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:DeleteBillScenarioUsageModification` in your policies.
 */
export const batchDeleteBillScenarioUsageModification: API.OperationMethod<
  BatchDeleteBillScenarioUsageModificationRequest,
  BatchDeleteBillScenarioUsageModificationResponse,
  BatchDeleteBillScenarioUsageModificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteBillScenarioUsageModificationRequest,
  output: BatchDeleteBillScenarioUsageModificationResponse,
  errors: [
    ConflictException,
    DataUnavailableException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteBillScenarioUsageModification",
}));

export type BatchDeleteWorkloadEstimateUsageError =
  | DataUnavailableException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Delete usage that you have created in a Workload estimate. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see BatchUpdateWorkloadEstimateUsage.
 *
 * The `BatchDeleteWorkloadEstimateUsage` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:DeleteWorkloadEstimateUsage` in your policies.
 */
export const batchDeleteWorkloadEstimateUsage: API.OperationMethod<
  BatchDeleteWorkloadEstimateUsageRequest,
  BatchDeleteWorkloadEstimateUsageResponse,
  BatchDeleteWorkloadEstimateUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteWorkloadEstimateUsageRequest,
  output: BatchDeleteWorkloadEstimateUsageResponse,
  errors: [DataUnavailableException, ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteWorkloadEstimateUsage",
}));

export type BatchUpdateBillScenarioCommitmentModificationError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Update a newly added or existing commitment. You can update the commitment group based on a commitment ID and a Bill scenario ID.
 *
 * The `BatchUpdateBillScenarioCommitmentModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:UpdateBillScenarioCommitmentModification` in your policies.
 */
export const batchUpdateBillScenarioCommitmentModification: API.OperationMethod<
  BatchUpdateBillScenarioCommitmentModificationRequest,
  BatchUpdateBillScenarioCommitmentModificationResponse,
  BatchUpdateBillScenarioCommitmentModificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateBillScenarioCommitmentModificationRequest,
  output: BatchUpdateBillScenarioCommitmentModificationResponse,
  errors: [ConflictException, DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateBillScenarioCommitmentModification",
}));

export type BatchUpdateBillScenarioUsageModificationError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Update a newly added or existing usage lines. You can update the usage amounts, usage hour, and usage group based on a usage ID and a Bill scenario ID.
 *
 * The `BatchUpdateBillScenarioUsageModification` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:UpdateBillScenarioUsageModification` in your policies.
 */
export const batchUpdateBillScenarioUsageModification: API.OperationMethod<
  BatchUpdateBillScenarioUsageModificationRequest,
  BatchUpdateBillScenarioUsageModificationResponse,
  BatchUpdateBillScenarioUsageModificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateBillScenarioUsageModificationRequest,
  output: BatchUpdateBillScenarioUsageModificationResponse,
  errors: [
    ConflictException,
    DataUnavailableException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateBillScenarioUsageModification",
}));

export type BatchUpdateWorkloadEstimateUsageError =
  | DataUnavailableException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Update a newly added or existing usage lines. You can update the usage amounts and usage group based on a usage ID and a Workload estimate ID.
 *
 * The `BatchUpdateWorkloadEstimateUsage` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `bcm-pricing-calculator:UpdateWorkloadEstimateUsage` in your policies.
 */
export const batchUpdateWorkloadEstimateUsage: API.OperationMethod<
  BatchUpdateWorkloadEstimateUsageRequest,
  BatchUpdateWorkloadEstimateUsageResponse,
  BatchUpdateWorkloadEstimateUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateWorkloadEstimateUsageRequest,
  output: BatchUpdateWorkloadEstimateUsageResponse,
  errors: [DataUnavailableException, ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateWorkloadEstimateUsage",
}));

export type CreateBillEstimateError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Create a Bill estimate from a Bill scenario. In the Bill scenario you can model usage addition, usage changes, and usage removal. You can also model commitment addition and commitment removal. After all changes in a Bill scenario is made satisfactorily, you can call this API with a Bill scenario ID to generate the Bill estimate. Bill estimate calculates the pre-tax cost for your consolidated billing family, incorporating all modeled usage and commitments alongside existing usage and commitments from your most recent completed anniversary bill, with any applicable discounts applied.
 */
export const createBillEstimate: API.OperationMethod<
  CreateBillEstimateRequest,
  CreateBillEstimateResponse,
  CreateBillEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBillEstimateRequest,
  output: CreateBillEstimateResponse,
  errors: [ConflictException, DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBillEstimate",
}));

export type CreateBillScenarioError =
  | ConflictException
  | DataUnavailableException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a new bill scenario to model potential changes to Amazon Web Services usage and costs.
 */
export const createBillScenario: API.OperationMethod<
  CreateBillScenarioRequest,
  CreateBillScenarioResponse,
  CreateBillScenarioError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBillScenarioRequest,
  output: CreateBillScenarioResponse,
  errors: [ConflictException, DataUnavailableException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBillScenario",
}));

export type CreateWorkloadEstimateError =
  | ConflictException
  | DataUnavailableException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a new workload estimate to model costs for a specific workload.
 */
export const createWorkloadEstimate: API.OperationMethod<
  CreateWorkloadEstimateRequest,
  CreateWorkloadEstimateResponse,
  CreateWorkloadEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkloadEstimateRequest,
  output: CreateWorkloadEstimateResponse,
  errors: [ConflictException, DataUnavailableException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkloadEstimate",
}));

export type DeleteBillEstimateError = ConflictException | DataUnavailableException | CommonErrors;
/**
 * Deletes an existing bill estimate.
 */
export const deleteBillEstimate: API.OperationMethod<
  DeleteBillEstimateRequest,
  DeleteBillEstimateResponse,
  DeleteBillEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBillEstimateRequest,
  output: DeleteBillEstimateResponse,
  errors: [ConflictException, DataUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBillEstimate",
}));

export type DeleteBillScenarioError = ConflictException | DataUnavailableException | CommonErrors;
/**
 * Deletes an existing bill scenario.
 */
export const deleteBillScenario: API.OperationMethod<
  DeleteBillScenarioRequest,
  DeleteBillScenarioResponse,
  DeleteBillScenarioError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBillScenarioRequest,
  output: DeleteBillScenarioResponse,
  errors: [ConflictException, DataUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBillScenario",
}));

export type DeleteWorkloadEstimateError = DataUnavailableException | CommonErrors;
/**
 * Deletes an existing workload estimate.
 */
export const deleteWorkloadEstimate: API.OperationMethod<
  DeleteWorkloadEstimateRequest,
  DeleteWorkloadEstimateResponse,
  DeleteWorkloadEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkloadEstimateRequest,
  output: DeleteWorkloadEstimateResponse,
  errors: [DataUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkloadEstimate",
}));

export type GetBillEstimateError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves details of a specific bill estimate.
 */
export const getBillEstimate: API.OperationMethod<
  GetBillEstimateRequest,
  GetBillEstimateResponse,
  GetBillEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBillEstimateRequest,
  output: GetBillEstimateResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBillEstimate",
}));

export type GetBillScenarioError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves details of a specific bill scenario.
 */
export const getBillScenario: API.OperationMethod<
  GetBillScenarioRequest,
  GetBillScenarioResponse,
  GetBillScenarioError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBillScenarioRequest,
  output: GetBillScenarioResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBillScenario",
}));

export type GetPreferencesError = DataUnavailableException | CommonErrors;
/**
 * Retrieves the current preferences for Pricing Calculator.
 */
export const getPreferences: API.OperationMethod<
  GetPreferencesRequest,
  GetPreferencesResponse,
  GetPreferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPreferencesRequest,
  output: GetPreferencesResponse,
  errors: [DataUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPreferences",
}));

export type GetWorkloadEstimateError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves details of a specific workload estimate.
 */
export const getWorkloadEstimate: API.OperationMethod<
  GetWorkloadEstimateRequest,
  GetWorkloadEstimateResponse,
  GetWorkloadEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkloadEstimateRequest,
  output: GetWorkloadEstimateResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkloadEstimate",
}));

export type ListBillEstimateCommitmentsError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the commitments associated with a bill estimate.
 */
export const listBillEstimateCommitments: API.PaginatedOperationMethod<
  ListBillEstimateCommitmentsRequest,
  ListBillEstimateCommitmentsResponse,
  ListBillEstimateCommitmentsError,
  Credentials | HttpClient.HttpClient,
  BillEstimateCommitmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillEstimateCommitmentsRequest,
  output: ListBillEstimateCommitmentsResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillEstimateCommitments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBillEstimateInputCommitmentModificationsError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the input commitment modifications associated with a bill estimate.
 */
export const listBillEstimateInputCommitmentModifications: API.PaginatedOperationMethod<
  ListBillEstimateInputCommitmentModificationsRequest,
  ListBillEstimateInputCommitmentModificationsResponse,
  ListBillEstimateInputCommitmentModificationsError,
  Credentials | HttpClient.HttpClient,
  BillEstimateInputCommitmentModificationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillEstimateInputCommitmentModificationsRequest,
  output: ListBillEstimateInputCommitmentModificationsResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillEstimateInputCommitmentModifications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBillEstimateInputUsageModificationsError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the input usage modifications associated with a bill estimate.
 */
export const listBillEstimateInputUsageModifications: API.PaginatedOperationMethod<
  ListBillEstimateInputUsageModificationsRequest,
  ListBillEstimateInputUsageModificationsResponse,
  ListBillEstimateInputUsageModificationsError,
  Credentials | HttpClient.HttpClient,
  BillEstimateInputUsageModificationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillEstimateInputUsageModificationsRequest,
  output: ListBillEstimateInputUsageModificationsResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillEstimateInputUsageModifications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBillEstimateLineItemsError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the line items associated with a bill estimate.
 */
export const listBillEstimateLineItems: API.PaginatedOperationMethod<
  ListBillEstimateLineItemsRequest,
  ListBillEstimateLineItemsResponse,
  ListBillEstimateLineItemsError,
  Credentials | HttpClient.HttpClient,
  BillEstimateLineItemSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillEstimateLineItemsRequest,
  output: ListBillEstimateLineItemsResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillEstimateLineItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBillEstimatesError = DataUnavailableException | CommonErrors;
/**
 * Lists all bill estimates for the account.
 */
export const listBillEstimates: API.PaginatedOperationMethod<
  ListBillEstimatesRequest,
  ListBillEstimatesResponse,
  ListBillEstimatesError,
  Credentials | HttpClient.HttpClient,
  BillEstimateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillEstimatesRequest,
  output: ListBillEstimatesResponse,
  errors: [DataUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillEstimates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBillScenarioCommitmentModificationsError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the commitment modifications associated with a bill scenario.
 */
export const listBillScenarioCommitmentModifications: API.PaginatedOperationMethod<
  ListBillScenarioCommitmentModificationsRequest,
  ListBillScenarioCommitmentModificationsResponse,
  ListBillScenarioCommitmentModificationsError,
  Credentials | HttpClient.HttpClient,
  BillScenarioCommitmentModificationItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillScenarioCommitmentModificationsRequest,
  output: ListBillScenarioCommitmentModificationsResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillScenarioCommitmentModifications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBillScenariosError = DataUnavailableException | CommonErrors;
/**
 * Lists all bill scenarios for the account.
 */
export const listBillScenarios: API.PaginatedOperationMethod<
  ListBillScenariosRequest,
  ListBillScenariosResponse,
  ListBillScenariosError,
  Credentials | HttpClient.HttpClient,
  BillScenarioSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillScenariosRequest,
  output: ListBillScenariosResponse,
  errors: [DataUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillScenarios",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBillScenarioUsageModificationsError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the usage modifications associated with a bill scenario.
 */
export const listBillScenarioUsageModifications: API.PaginatedOperationMethod<
  ListBillScenarioUsageModificationsRequest,
  ListBillScenarioUsageModificationsResponse,
  ListBillScenarioUsageModificationsError,
  Credentials | HttpClient.HttpClient,
  BillScenarioUsageModificationItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillScenarioUsageModificationsRequest,
  output: ListBillScenarioUsageModificationsResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillScenarioUsageModifications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Lists all tags associated with a specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWorkloadEstimatesError = DataUnavailableException | CommonErrors;
/**
 * Lists all workload estimates for the account.
 */
export const listWorkloadEstimates: API.PaginatedOperationMethod<
  ListWorkloadEstimatesRequest,
  ListWorkloadEstimatesResponse,
  ListWorkloadEstimatesError,
  Credentials | HttpClient.HttpClient,
  WorkloadEstimateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkloadEstimatesRequest,
  output: ListWorkloadEstimatesResponse,
  errors: [DataUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloadEstimates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkloadEstimateUsageError =
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the usage associated with a workload estimate.
 */
export const listWorkloadEstimateUsage: API.PaginatedOperationMethod<
  ListWorkloadEstimateUsageRequest,
  ListWorkloadEstimateUsageResponse,
  ListWorkloadEstimateUsageError,
  Credentials | HttpClient.HttpClient,
  WorkloadEstimateUsageItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkloadEstimateUsageRequest,
  output: ListWorkloadEstimateUsageResponse,
  errors: [DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloadEstimateUsage",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Adds one or more tags to a specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Removes one or more tags from a specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateBillEstimateError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an existing bill estimate.
 */
export const updateBillEstimate: API.OperationMethod<
  UpdateBillEstimateRequest,
  UpdateBillEstimateResponse,
  UpdateBillEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBillEstimateRequest,
  output: UpdateBillEstimateResponse,
  errors: [ConflictException, DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBillEstimate",
}));

export type UpdateBillScenarioError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an existing bill scenario.
 */
export const updateBillScenario: API.OperationMethod<
  UpdateBillScenarioRequest,
  UpdateBillScenarioResponse,
  UpdateBillScenarioError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBillScenarioRequest,
  output: UpdateBillScenarioResponse,
  errors: [ConflictException, DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBillScenario",
}));

export type UpdatePreferencesError =
  | DataUnavailableException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Updates the preferences for Pricing Calculator.
 */
export const updatePreferences: API.OperationMethod<
  UpdatePreferencesRequest,
  UpdatePreferencesResponse,
  UpdatePreferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePreferencesRequest,
  output: UpdatePreferencesResponse,
  errors: [DataUnavailableException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePreferences",
}));

export type UpdateWorkloadEstimateError =
  | ConflictException
  | DataUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an existing workload estimate.
 */
export const updateWorkloadEstimate: API.OperationMethod<
  UpdateWorkloadEstimateRequest,
  UpdateWorkloadEstimateResponse,
  UpdateWorkloadEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkloadEstimateRequest,
  output: UpdateWorkloadEstimateResponse,
  errors: [ConflictException, DataUnavailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkloadEstimate",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          reservedInstancesOfferingId: S.optional(S.String),
          instanceCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AddReservedInstanceAction",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ savingsPlanOfferingId: S.optional(S.String), commitment: S.optional(S.Number) }),
      ).annotate({ identifier: "AddSavingsPlanAction" });
    case 2:
      return S.suspend(() => S.Struct({ reservedInstancesId: S.optional(S.String) })).annotate({
        identifier: "NegateReservedInstanceAction",
      });
    case 3:
      return S.suspend(() => S.Struct({ savingsPlanId: S.optional(S.String) })).annotate({
        identifier: "NegateSavingsPlanAction",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ addReservedInstanceAction: AddReservedInstanceAction }),
        /*@__PURE__*/ S.Struct({ addSavingsPlanAction: AddSavingsPlanAction }),
        /*@__PURE__*/ S.Struct({ negateReservedInstanceAction: NegateReservedInstanceAction }),
        /*@__PURE__*/ S.Struct({ negateSavingsPlanAction: NegateSavingsPlanAction }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          key: S.String,
          group: S.optional(S.String),
          usageAccountId: S.String,
          commitmentAction: BillScenarioCommitmentModificationAction,
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationEntry",
      });
    case 6:
      return S.Array(BatchCreateBillScenarioCommitmentModificationEntry);
    case 7:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          commitmentModifications: BatchCreateBillScenarioCommitmentModificationEntries,
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          id: S.optional(S.String),
          group: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          commitmentAction: S.optional(BillScenarioCommitmentModificationAction),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationItem",
      });
    case 1:
      return S.Array(BatchCreateBillScenarioCommitmentModificationItem);
    case 2:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(BatchCreateBillScenarioCommitmentModificationErrorCode),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationError",
      });
    case 3:
      return S.Array(BatchCreateBillScenarioCommitmentModificationError_);
    case 4:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BatchCreateBillScenarioCommitmentModificationItems),
          errors: S.optional(BatchCreateBillScenarioCommitmentModificationErrors),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ startHour: S.Date.pipe(T.TimestampFormat("epoch-seconds")), amount: S.Number }),
      ).annotate({ identifier: "UsageAmount" });
    case 6:
      return S.Array(UsageAmount);
    case 7:
      return S.suspend(() =>
        S.Struct({
          start: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          end: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BillInterval" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Expression> => Expression).annotate({
          identifier: "Expression",
        }),
      );
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          matchOptions: S.optional(StringList),
          values: S.optional(StringList),
        }),
      ).annotate({ identifier: "ExpressionFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          and: S.optional(
            S.suspend(() => ExpressionList).annotate({ identifier: "ExpressionList" }),
          ),
          or: S.optional(
            S.suspend(() => ExpressionList).annotate({ identifier: "ExpressionList" }),
          ),
          not: S.optional(
            S.suspend((): S.Schema<Expression> => Expression).annotate({
              identifier: "Expression",
            }),
          ),
          costCategories: S.optional(ExpressionFilter),
          dimensions: S.optional(ExpressionFilter),
          tags: S.optional(ExpressionFilter),
        }),
      ).annotate({ identifier: "Expression" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          location: S.optional(S.String),
          usageAccountId: S.String,
          billInterval: BillInterval,
          filterExpression: Expression,
        }),
      ).annotate({ identifier: "HistoricalUsageEntity" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          availabilityZone: S.optional(S.String),
          key: S.String,
          group: S.optional(S.String),
          usageAccountId: S.String,
          amounts: S.optional(UsageAmounts),
          historicalUsage: S.optional(HistoricalUsageEntity),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationEntry",
      });
    case 6:
      return S.Array(BatchCreateBillScenarioUsageModificationEntry);
    case 7:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          usageModifications: BatchCreateBillScenarioUsageModificationEntries,
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          startHour: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          unit: S.optional(S.String),
          amount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UsageQuantity" });
    case 1:
      return S.Array(UsageQuantity);
    case 2:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          location: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          id: S.optional(S.String),
          group: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          quantities: S.optional(UsageQuantities),
          historicalUsage: S.optional(HistoricalUsageEntity),
          key: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationItem",
      });
    case 3:
      return S.Array(BatchCreateBillScenarioUsageModificationItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(BatchCreateBillScenarioUsageModificationErrorCode),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationError",
      });
    case 5:
      return S.Array(BatchCreateBillScenarioUsageModificationError_);
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BatchCreateBillScenarioUsageModificationItems),
          errors: S.optional(BatchCreateBillScenarioUsageModificationErrors),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          key: S.String,
          group: S.optional(S.String),
          usageAccountId: S.String,
          amount: S.Number,
          historicalUsage: S.optional(HistoricalUsageEntity),
        }),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageEntry",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchCreateWorkloadEstimateUsageEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({
          workloadEstimateId: S.String,
          usage: BatchCreateWorkloadEstimateUsageEntries,
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ unit: S.optional(S.String), amount: S.optional(S.Number) }),
      ).annotate({
        identifier: "WorkloadEstimateUsageQuantity",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          location: S.optional(S.String),
          id: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          group: S.optional(S.String),
          quantity: S.optional(WorkloadEstimateUsageQuantity),
          cost: S.optional(S.Number),
          currency: S.optional(CurrencyCode),
          status: S.optional(WorkloadEstimateCostStatus),
          historicalUsage: S.optional(HistoricalUsageEntity),
          key: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageItem",
      });
    case 4:
      return S.Array(BatchCreateWorkloadEstimateUsageItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          errorCode: S.optional(BatchCreateWorkloadEstimateUsageCode),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageError",
      });
    case 6:
      return S.Array(BatchCreateWorkloadEstimateUsageError_);
    case 7:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BatchCreateWorkloadEstimateUsageItems),
          errors: S.optional(BatchCreateWorkloadEstimateUsageErrors),
        }),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          ids: BatchDeleteBillScenarioCommitmentModificationEntries,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteBillScenarioCommitmentModificationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorCode: S.optional(BatchDeleteBillScenarioCommitmentModificationErrorCode),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteBillScenarioCommitmentModificationError",
      });
    case 2:
      return S.Array(BatchDeleteBillScenarioCommitmentModificationError_);
    case 3:
      return S.suspend(() =>
        S.Struct({ errors: S.optional(BatchDeleteBillScenarioCommitmentModificationErrors) }),
      ).annotate({
        identifier: "BatchDeleteBillScenarioCommitmentModificationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          ids: BatchDeleteBillScenarioUsageModificationEntries,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteBillScenarioUsageModificationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(BatchDeleteBillScenarioUsageModificationErrorCode),
        }),
      ).annotate({
        identifier: "BatchDeleteBillScenarioUsageModificationError",
      });
    case 6:
      return S.Array(BatchDeleteBillScenarioUsageModificationError_);
    case 7:
      return S.suspend(() =>
        S.Struct({ errors: S.optional(BatchDeleteBillScenarioUsageModificationErrors) }),
      ).annotate({
        identifier: "BatchDeleteBillScenarioUsageModificationResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workloadEstimateId: S.String,
          ids: BatchDeleteWorkloadEstimateUsageEntries,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteWorkloadEstimateUsageRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(WorkloadEstimateUpdateUsageErrorCode),
        }),
      ).annotate({
        identifier: "BatchDeleteWorkloadEstimateUsageError",
      });
    case 2:
      return S.Array(BatchDeleteWorkloadEstimateUsageError_);
    case 3:
      return S.suspend(() =>
        S.Struct({ errors: S.optional(BatchDeleteWorkloadEstimateUsageErrors) }),
      ).annotate({
        identifier: "BatchDeleteWorkloadEstimateUsageResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ id: S.String, group: S.optional(S.String) })).annotate({
        identifier: "BatchUpdateBillScenarioCommitmentModificationEntry",
      });
    case 5:
      return S.Array(BatchUpdateBillScenarioCommitmentModificationEntry);
    case 6:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          commitmentModifications: BatchUpdateBillScenarioCommitmentModificationEntries,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchUpdateBillScenarioCommitmentModificationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          group: S.optional(S.String),
          commitmentAction: S.optional(BillScenarioCommitmentModificationAction),
        }),
      ).annotate({
        identifier: "BillScenarioCommitmentModificationItem",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BillScenarioCommitmentModificationItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorCode: S.optional(BatchUpdateBillScenarioCommitmentModificationErrorCode),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioCommitmentModificationError",
      });
    case 2:
      return S.Array(BatchUpdateBillScenarioCommitmentModificationError_);
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BillScenarioCommitmentModificationItems),
          errors: S.optional(BatchUpdateBillScenarioCommitmentModificationErrors),
        }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioCommitmentModificationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String, group: S.optional(S.String), amounts: S.optional(UsageAmounts) }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioUsageModificationEntry",
      });
    case 5:
      return S.Array(BatchUpdateBillScenarioUsageModificationEntry);
    case 6:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          usageModifications: BatchUpdateBillScenarioUsageModificationEntries,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchUpdateBillScenarioUsageModificationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          location: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          id: S.optional(S.String),
          group: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          quantities: S.optional(UsageQuantities),
          historicalUsage: S.optional(HistoricalUsageEntity),
        }),
      ).annotate({
        identifier: "BillScenarioUsageModificationItem",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BillScenarioUsageModificationItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(BatchUpdateBillScenarioUsageModificationErrorCode),
        }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioUsageModificationError",
      });
    case 2:
      return S.Array(BatchUpdateBillScenarioUsageModificationError_);
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BillScenarioUsageModificationItems),
          errors: S.optional(BatchUpdateBillScenarioUsageModificationErrors),
        }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioUsageModificationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String, group: S.optional(S.String), amount: S.optional(S.Number) }),
      ).annotate({
        identifier: "BatchUpdateWorkloadEstimateUsageEntry",
      });
    case 5:
      return S.Array(BatchUpdateWorkloadEstimateUsageEntry);
    case 6:
      return S.suspend(() =>
        S.Struct({
          workloadEstimateId: S.String,
          usage: BatchUpdateWorkloadEstimateUsageEntries,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchUpdateWorkloadEstimateUsageRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          location: S.optional(S.String),
          id: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          group: S.optional(S.String),
          quantity: S.optional(WorkloadEstimateUsageQuantity),
          cost: S.optional(S.Number),
          currency: S.optional(CurrencyCode),
          status: S.optional(WorkloadEstimateCostStatus),
          historicalUsage: S.optional(HistoricalUsageEntity),
        }),
      ).annotate({
        identifier: "WorkloadEstimateUsageItem",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(WorkloadEstimateUsageItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(WorkloadEstimateUpdateUsageErrorCode),
        }),
      ).annotate({
        identifier: "BatchUpdateWorkloadEstimateUsageError",
      });
    case 2:
      return S.Array(BatchUpdateWorkloadEstimateUsageError_);
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(WorkloadEstimateUsageItems),
          errors: S.optional(BatchUpdateWorkloadEstimateUsageErrors),
        }),
      ).annotate({
        identifier: "BatchUpdateWorkloadEstimateUsageResponse",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          name: S.String,
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
          tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBillEstimateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ amount: S.optional(S.Number), currency: S.optional(CurrencyCode) }),
      ).annotate({ identifier: "CostAmount" });
    case 7:
      return S.suspend(() =>
        S.Struct({ historicalCost: S.optional(CostAmount), estimatedCost: S.optional(CostAmount) }),
      ).annotate({ identifier: "CostDifference" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ CostDifference.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          totalCostDifference: S.optional(CostDifference),
          serviceCostDifferences: S.optional(ServiceCostDifferenceMap),
        }),
      ).annotate({ identifier: "BillEstimateCostSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          status: S.optional(BillEstimateStatus),
          failureMessage: S.optional(S.String),
          billInterval: S.optional(BillInterval),
          costSummary: S.optional(BillEstimateCostSummary),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groupSharingPreference: S.optional(GroupSharingPreferenceEnum),
          costCategoryGroupSharingPreferenceArn: S.optional(S.String),
          costCategoryGroupSharingPreferenceEffectiveDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
        }),
      ).annotate({
        identifier: "CreateBillEstimateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
          tags: S.optional(Tags),
          groupSharingPreference: S.optional(GroupSharingPreferenceEnum),
          costCategoryGroupSharingPreferenceArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBillScenarioRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          billInterval: S.optional(BillInterval),
          status: S.optional(BillScenarioStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureMessage: S.optional(S.String),
          groupSharingPreference: S.optional(GroupSharingPreferenceEnum),
          costCategoryGroupSharingPreferenceArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateBillScenarioResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Client-Token"),
            T.IdempotencyToken(),
          ),
          rateType: S.optional(WorkloadEstimateRateType),
          tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateWorkloadEstimateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          rateType: S.optional(WorkloadEstimateRateType),
          rateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(WorkloadEstimateStatus),
          totalCost: S.optional(S.Number),
          costCurrency: S.optional(CurrencyCode),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateWorkloadEstimateResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteBillEstimateRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteBillEstimateResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteBillScenarioRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteWorkloadEstimateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetBillEstimateRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          status: S.optional(BillEstimateStatus),
          failureMessage: S.optional(S.String),
          billInterval: S.optional(BillInterval),
          costSummary: S.optional(BillEstimateCostSummary),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groupSharingPreference: S.optional(GroupSharingPreferenceEnum),
          costCategoryGroupSharingPreferenceArn: S.optional(S.String),
          costCategoryGroupSharingPreferenceEffectiveDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
        }),
      ).annotate({ identifier: "GetBillEstimateResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetBillScenarioRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          billInterval: S.optional(BillInterval),
          status: S.optional(BillScenarioStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureMessage: S.optional(S.String),
          groupSharingPreference: S.optional(GroupSharingPreferenceEnum),
          costCategoryGroupSharingPreferenceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetBillScenarioResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPreferencesRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RateType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          managementAccountRateTypeSelections: S.optional(RateTypes),
          memberAccountRateTypeSelections: S.optional(RateTypes),
          standaloneAccountRateTypeSelections: S.optional(RateTypes),
        }),
      ).annotate({ identifier: "GetPreferencesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetWorkloadEstimateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          billEstimateId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBillEstimateCommitmentsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          purchaseAgreementType: S.optional(PurchaseAgreementType),
          offeringId: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          region: S.optional(S.String),
          termLength: S.optional(S.String),
          paymentOption: S.optional(S.String),
          upfrontPayment: S.optional(CostAmount),
          monthlyPayment: S.optional(CostAmount),
        }),
      ).annotate({
        identifier: "BillEstimateCommitmentSummary",
      });
    case 5:
      return S.Array(BillEstimateCommitmentSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BillEstimateCommitmentSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateCommitmentsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          billEstimateId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBillEstimateInputCommitmentModificationsRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          group: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          commitmentAction: S.optional(BillScenarioCommitmentModificationAction),
        }),
      ).annotate({
        identifier: "BillEstimateInputCommitmentModificationSummary",
      });
    case 1:
      return S.Array(BillEstimateInputCommitmentModificationSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BillEstimateInputCommitmentModificationSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateInputCommitmentModificationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: ListUsageFilterName,
          values: ListUsageFilterValues,
          matchOption: S.optional(MatchOption),
        }),
      ).annotate({ identifier: "ListUsageFilter" });
    case 4:
      return S.Array(ListUsageFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          billEstimateId: S.String,
          filters: S.optional(ListUsageFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBillEstimateInputUsageModificationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BillEstimateInputUsageModificationSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateInputUsageModificationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: ListBillEstimateLineItemsFilterName,
          values: ListBillEstimateLineItemsFilterValues,
          matchOption: S.optional(MatchOption),
        }),
      ).annotate({
        identifier: "ListBillEstimateLineItemsFilter",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ListBillEstimateLineItemsFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          billEstimateId: S.String,
          filters: S.optional(ListBillEstimateLineItemsFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBillEstimateLineItemsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ amount: S.optional(S.Number), unit: S.optional(S.String) }),
      ).annotate({ identifier: "UsageQuantityResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceCode: S.String,
          usageType: S.String,
          operation: S.String,
          location: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          id: S.optional(S.String),
          lineItemId: S.optional(S.String),
          lineItemType: S.optional(S.String),
          payerAccountId: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          estimatedUsageQuantity: S.optional(UsageQuantityResult),
          estimatedCost: S.optional(CostAmount),
          historicalUsageQuantity: S.optional(UsageQuantityResult),
          historicalCost: S.optional(CostAmount),
          savingsPlanArns: S.optional(SavingsPlanArns),
        }),
      ).annotate({
        identifier: "BillEstimateLineItemSummary",
      });
    case 4:
      return S.Array(BillEstimateLineItemSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BillEstimateLineItemSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateLineItemsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: ListBillEstimatesFilterName,
          values: ListBillEstimatesFilterValues,
          matchOption: S.optional(MatchOption),
        }),
      ).annotate({ identifier: "ListBillEstimatesFilter" });
    case 7:
      return S.Array(ListBillEstimatesFilter);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          afterTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          beforeTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "FilterTimestamp" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(ListBillEstimatesFilters),
          createdAtFilter: S.optional(FilterTimestamp),
          expiresAtFilter: S.optional(FilterTimestamp),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBillEstimatesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          status: S.optional(BillEstimateStatus),
          billInterval: S.optional(BillInterval),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BillEstimateSummary" });
    case 3:
      return S.Array(BillEstimateSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ items: S.optional(BillEstimateSummaries), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListBillEstimatesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBillScenarioCommitmentModificationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(BillScenarioCommitmentModificationItems),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillScenarioCommitmentModificationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: ListBillScenariosFilterName,
          values: ListBillScenariosFilterValues,
          matchOption: S.optional(MatchOption),
        }),
      ).annotate({ identifier: "ListBillScenariosFilter" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ListBillScenariosFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(ListBillScenariosFilters),
          createdAtFilter: S.optional(FilterTimestamp),
          expiresAtFilter: S.optional(FilterTimestamp),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBillScenariosRequest" });
    case 2:
      return S.Array(BillScenarioSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ items: S.optional(BillScenarioSummaries), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListBillScenariosResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          filters: S.optional(ListUsageFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBillScenarioUsageModificationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: ListWorkloadEstimatesFilterName,
          values: ListWorkloadEstimatesFilterValues,
          matchOption: S.optional(MatchOption),
        }),
      ).annotate({
        identifier: "ListWorkloadEstimatesFilter",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ListWorkloadEstimatesFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          createdAtFilter: S.optional(FilterTimestamp),
          expiresAtFilter: S.optional(FilterTimestamp),
          filters: S.optional(ListWorkloadEstimatesFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListWorkloadEstimatesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          rateType: S.optional(WorkloadEstimateRateType),
          rateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(WorkloadEstimateStatus),
          totalCost: S.optional(S.Number),
          costCurrency: S.optional(CurrencyCode),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadEstimateSummary" });
    case 3:
      return S.Array(WorkloadEstimateSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ items: S.optional(WorkloadEstimateSummaries), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWorkloadEstimatesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workloadEstimateId: S.String,
          filters: S.optional(ListUsageFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListWorkloadEstimateUsageRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(WorkloadEstimateUsageItems),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkloadEstimateUsageResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String, tags: Tags }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String, tagKeys: ResourceTagKeys }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          name: S.optional(S.String),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateBillEstimateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          name: S.optional(S.String),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groupSharingPreference: S.optional(GroupSharingPreferenceEnum),
          costCategoryGroupSharingPreferenceArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateBillScenarioRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          managementAccountRateTypeSelections: S.optional(RateTypes),
          memberAccountRateTypeSelections: S.optional(RateTypes),
          standaloneAccountRateTypeSelections: S.optional(RateTypes),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdatePreferencesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          managementAccountRateTypeSelections: S.optional(RateTypes),
          memberAccountRateTypeSelections: S.optional(RateTypes),
          standaloneAccountRateTypeSelections: S.optional(RateTypes),
        }),
      ).annotate({
        identifier: "UpdatePreferencesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          name: S.optional(S.String),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateWorkloadEstimateRequest",
      });
  }
}
