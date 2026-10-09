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
export type SavingsPlanCommitment = number;
export interface AddSavingsPlanAction {
  savingsPlanOfferingId?: string;
  commitment?: number;
}
export interface NegateReservedInstanceAction {
  reservedInstancesId?: string;
}
export interface NegateSavingsPlanAction {
  savingsPlanId?: string;
}
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
export interface BatchCreateBillScenarioCommitmentModificationEntry {
  key: string;
  group?: string;
  usageAccountId: string;
  commitmentAction: BillScenarioCommitmentModificationAction;
}
export type BatchCreateBillScenarioCommitmentModificationEntries =
  BatchCreateBillScenarioCommitmentModificationEntry[];
export type ClientToken = string;
export interface BatchCreateBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  commitmentModifications: BatchCreateBillScenarioCommitmentModificationEntry[];
  clientToken?: string;
}
export interface BatchCreateBillScenarioCommitmentModificationItem {
  key?: string;
  id?: string;
  group?: string;
  usageAccountId?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
export type BatchCreateBillScenarioCommitmentModificationItems =
  BatchCreateBillScenarioCommitmentModificationItem[];
export type BatchCreateBillScenarioCommitmentModificationErrorCode =
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | "INVALID_ACCOUNT"
  | (string & {});
export interface BatchCreateBillScenarioCommitmentModificationError_ {
  key?: string;
  errorMessage?: string;
  errorCode?: BatchCreateBillScenarioCommitmentModificationErrorCode;
}
export type BatchCreateBillScenarioCommitmentModificationErrors =
  BatchCreateBillScenarioCommitmentModificationError_[];
export interface BatchCreateBillScenarioCommitmentModificationResponse {
  items?: BatchCreateBillScenarioCommitmentModificationItem[];
  errors?: BatchCreateBillScenarioCommitmentModificationError_[];
}
export type ServiceCode = string;
export type UsageType = string;
export type Operation = string;
export type AvailabilityZone = string;
export interface UsageAmount {
  startHour: Date;
  amount: number;
}
export type UsageAmounts = UsageAmount[];
export interface BillInterval {
  start?: Date;
  end?: Date;
}
export type ExpressionList = Expression[];
export type StringList = string[];
export interface ExpressionFilter {
  key?: string;
  matchOptions?: string[];
  values?: string[];
}
export interface Expression {
  and?: Expression[];
  or?: Expression[];
  not?: Expression;
  costCategories?: ExpressionFilter;
  dimensions?: ExpressionFilter;
  tags?: ExpressionFilter;
}
export interface HistoricalUsageEntity {
  serviceCode: string;
  usageType: string;
  operation: string;
  location?: string;
  usageAccountId: string;
  billInterval: BillInterval;
  filterExpression: Expression;
}
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
export type BatchCreateBillScenarioUsageModificationEntries =
  BatchCreateBillScenarioUsageModificationEntry[];
export interface BatchCreateBillScenarioUsageModificationRequest {
  billScenarioId: string;
  usageModifications: BatchCreateBillScenarioUsageModificationEntry[];
  clientToken?: string;
}
export interface UsageQuantity {
  startHour?: Date;
  unit?: string;
  amount?: number;
}
export type UsageQuantities = UsageQuantity[];
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
export type BatchCreateBillScenarioUsageModificationItems =
  BatchCreateBillScenarioUsageModificationItem[];
export type BatchCreateBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface BatchCreateBillScenarioUsageModificationError_ {
  key?: string;
  errorMessage?: string;
  errorCode?: BatchCreateBillScenarioUsageModificationErrorCode;
}
export type BatchCreateBillScenarioUsageModificationErrors =
  BatchCreateBillScenarioUsageModificationError_[];
export interface BatchCreateBillScenarioUsageModificationResponse {
  items?: BatchCreateBillScenarioUsageModificationItem[];
  errors?: BatchCreateBillScenarioUsageModificationError_[];
}
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
export type BatchCreateWorkloadEstimateUsageEntries = BatchCreateWorkloadEstimateUsageEntry[];
export interface BatchCreateWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  usage: BatchCreateWorkloadEstimateUsageEntry[];
  clientToken?: string;
}
export interface WorkloadEstimateUsageQuantity {
  unit?: string;
  amount?: number;
}
export type CurrencyCode = "USD" | (string & {});
export type WorkloadEstimateCostStatus = "VALID" | "INVALID" | "STALE" | (string & {});
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
export type BatchCreateWorkloadEstimateUsageItems = BatchCreateWorkloadEstimateUsageItem[];
export type BatchCreateWorkloadEstimateUsageCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface BatchCreateWorkloadEstimateUsageError_ {
  key?: string;
  errorCode?: BatchCreateWorkloadEstimateUsageCode;
  errorMessage?: string;
}
export type BatchCreateWorkloadEstimateUsageErrors = BatchCreateWorkloadEstimateUsageError_[];
export interface BatchCreateWorkloadEstimateUsageResponse {
  items?: BatchCreateWorkloadEstimateUsageItem[];
  errors?: BatchCreateWorkloadEstimateUsageError_[];
}
export type BatchDeleteBillScenarioCommitmentModificationEntries = string[];
export interface BatchDeleteBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  ids: string[];
}
export type BatchDeleteBillScenarioCommitmentModificationErrorCode =
  | "BAD_REQUEST"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface BatchDeleteBillScenarioCommitmentModificationError_ {
  id?: string;
  errorCode?: BatchDeleteBillScenarioCommitmentModificationErrorCode;
  errorMessage?: string;
}
export type BatchDeleteBillScenarioCommitmentModificationErrors =
  BatchDeleteBillScenarioCommitmentModificationError_[];
export interface BatchDeleteBillScenarioCommitmentModificationResponse {
  errors?: BatchDeleteBillScenarioCommitmentModificationError_[];
}
export type BatchDeleteBillScenarioUsageModificationEntries = string[];
export interface BatchDeleteBillScenarioUsageModificationRequest {
  billScenarioId: string;
  ids: string[];
}
export type BatchDeleteBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface BatchDeleteBillScenarioUsageModificationError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: BatchDeleteBillScenarioUsageModificationErrorCode;
}
export type BatchDeleteBillScenarioUsageModificationErrors =
  BatchDeleteBillScenarioUsageModificationError_[];
export interface BatchDeleteBillScenarioUsageModificationResponse {
  errors?: BatchDeleteBillScenarioUsageModificationError_[];
}
export type BatchDeleteWorkloadEstimateUsageEntries = string[];
export interface BatchDeleteWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  ids: string[];
}
export type WorkloadEstimateUpdateUsageErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface BatchDeleteWorkloadEstimateUsageError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: WorkloadEstimateUpdateUsageErrorCode;
}
export type BatchDeleteWorkloadEstimateUsageErrors = BatchDeleteWorkloadEstimateUsageError_[];
export interface BatchDeleteWorkloadEstimateUsageResponse {
  errors?: BatchDeleteWorkloadEstimateUsageError_[];
}
export interface BatchUpdateBillScenarioCommitmentModificationEntry {
  id: string;
  group?: string;
}
export type BatchUpdateBillScenarioCommitmentModificationEntries =
  BatchUpdateBillScenarioCommitmentModificationEntry[];
export interface BatchUpdateBillScenarioCommitmentModificationRequest {
  billScenarioId: string;
  commitmentModifications: BatchUpdateBillScenarioCommitmentModificationEntry[];
}
export interface BillScenarioCommitmentModificationItem {
  id?: string;
  usageAccountId?: string;
  group?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
export type BillScenarioCommitmentModificationItems = BillScenarioCommitmentModificationItem[];
export type BatchUpdateBillScenarioCommitmentModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface BatchUpdateBillScenarioCommitmentModificationError_ {
  id?: string;
  errorCode?: BatchUpdateBillScenarioCommitmentModificationErrorCode;
  errorMessage?: string;
}
export type BatchUpdateBillScenarioCommitmentModificationErrors =
  BatchUpdateBillScenarioCommitmentModificationError_[];
export interface BatchUpdateBillScenarioCommitmentModificationResponse {
  items?: BillScenarioCommitmentModificationItem[];
  errors?: BatchUpdateBillScenarioCommitmentModificationError_[];
}
export interface BatchUpdateBillScenarioUsageModificationEntry {
  id: string;
  group?: string;
  amounts?: UsageAmount[];
}
export type BatchUpdateBillScenarioUsageModificationEntries =
  BatchUpdateBillScenarioUsageModificationEntry[];
export interface BatchUpdateBillScenarioUsageModificationRequest {
  billScenarioId: string;
  usageModifications: BatchUpdateBillScenarioUsageModificationEntry[];
}
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
export type BillScenarioUsageModificationItems = BillScenarioUsageModificationItem[];
export type BatchUpdateBillScenarioUsageModificationErrorCode =
  | "BAD_REQUEST"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_SERVER_ERROR"
  | (string & {});
export interface BatchUpdateBillScenarioUsageModificationError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: BatchUpdateBillScenarioUsageModificationErrorCode;
}
export type BatchUpdateBillScenarioUsageModificationErrors =
  BatchUpdateBillScenarioUsageModificationError_[];
export interface BatchUpdateBillScenarioUsageModificationResponse {
  items?: BillScenarioUsageModificationItem[];
  errors?: BatchUpdateBillScenarioUsageModificationError_[];
}
export interface BatchUpdateWorkloadEstimateUsageEntry {
  id: string;
  group?: string;
  amount?: number;
}
export type BatchUpdateWorkloadEstimateUsageEntries = BatchUpdateWorkloadEstimateUsageEntry[];
export interface BatchUpdateWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  usage: BatchUpdateWorkloadEstimateUsageEntry[];
}
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
export type WorkloadEstimateUsageItems = WorkloadEstimateUsageItem[];
export interface BatchUpdateWorkloadEstimateUsageError_ {
  id?: string;
  errorMessage?: string;
  errorCode?: WorkloadEstimateUpdateUsageErrorCode;
}
export type BatchUpdateWorkloadEstimateUsageErrors = BatchUpdateWorkloadEstimateUsageError_[];
export interface BatchUpdateWorkloadEstimateUsageResponse {
  items?: WorkloadEstimateUsageItem[];
  errors?: BatchUpdateWorkloadEstimateUsageError_[];
}
export type BillEstimateName = string;
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export type Tags = { [key: string]: string | undefined };
export interface CreateBillEstimateRequest {
  billScenarioId: string;
  name: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type BillEstimateStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED" | (string & {});
export interface CostAmount {
  amount?: number;
  currency?: CurrencyCode;
}
export interface CostDifference {
  historicalCost?: CostAmount;
  estimatedCost?: CostAmount;
}
export type ServiceCostDifferenceMap = { [key: string]: CostDifference | undefined };
export interface BillEstimateCostSummary {
  totalCostDifference?: CostDifference;
  serviceCostDifferences?: { [key: string]: CostDifference | undefined };
}
export type GroupSharingPreferenceEnum = "OPEN" | "PRIORITIZED" | "RESTRICTED" | (string & {});
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
export type BillScenarioName = string;
export interface CreateBillScenarioRequest {
  name: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
export type BillScenarioStatus = "READY" | "LOCKED" | "FAILED" | "STALE" | (string & {});
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
export type WorkloadEstimateName = string;
export type WorkloadEstimateRateType =
  | "BEFORE_DISCOUNTS"
  | "AFTER_DISCOUNTS"
  | "AFTER_DISCOUNTS_AND_COMMITMENTS"
  | (string & {});
export interface CreateWorkloadEstimateRequest {
  name: string;
  clientToken?: string;
  rateType?: WorkloadEstimateRateType;
  tags?: { [key: string]: string | undefined };
}
export type WorkloadEstimateStatus =
  | "UPDATING"
  | "VALID"
  | "INVALID"
  | "ACTION_NEEDED"
  | (string & {});
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
export interface DeleteBillEstimateRequest {
  identifier: string;
}
export interface DeleteBillEstimateResponse {}
export interface DeleteBillScenarioRequest {
  identifier: string;
}
export interface DeleteBillScenarioResponse {}
export interface DeleteWorkloadEstimateRequest {
  identifier: string;
}
export interface DeleteWorkloadEstimateResponse {}
export interface GetBillEstimateRequest {
  identifier: string;
}
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
export interface GetBillScenarioRequest {
  identifier: string;
}
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
export interface GetPreferencesRequest {}
export type RateType =
  | "BEFORE_DISCOUNTS"
  | "AFTER_DISCOUNTS"
  | "AFTER_DISCOUNTS_AND_COMMITMENTS"
  | (string & {});
export type RateTypes = RateType[];
export interface GetPreferencesResponse {
  managementAccountRateTypeSelections?: RateType[];
  memberAccountRateTypeSelections?: RateType[];
  standaloneAccountRateTypeSelections?: RateType[];
}
export interface GetWorkloadEstimateRequest {
  identifier: string;
}
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
export type NextPageToken = string;
export type MaxResults = number;
export interface ListBillEstimateCommitmentsRequest {
  billEstimateId: string;
  nextToken?: string;
  maxResults?: number;
}
export type PurchaseAgreementType = "SAVINGS_PLANS" | "RESERVED_INSTANCE" | (string & {});
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
export type BillEstimateCommitmentSummaries = BillEstimateCommitmentSummary[];
export interface ListBillEstimateCommitmentsResponse {
  items?: BillEstimateCommitmentSummary[];
  nextToken?: string;
}
export interface ListBillEstimateInputCommitmentModificationsRequest {
  billEstimateId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface BillEstimateInputCommitmentModificationSummary {
  id?: string;
  group?: string;
  usageAccountId?: string;
  commitmentAction?: BillScenarioCommitmentModificationAction;
}
export type BillEstimateInputCommitmentModificationSummaries =
  BillEstimateInputCommitmentModificationSummary[];
export interface ListBillEstimateInputCommitmentModificationsResponse {
  items?: BillEstimateInputCommitmentModificationSummary[];
  nextToken?: string;
}
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
export type ListUsageFilterValues = string[];
export type MatchOption = "EQUALS" | "STARTS_WITH" | "CONTAINS" | (string & {});
export interface ListUsageFilter {
  name: ListUsageFilterName;
  values: string[];
  matchOption?: MatchOption;
}
export type ListUsageFilters = ListUsageFilter[];
export interface ListBillEstimateInputUsageModificationsRequest {
  billEstimateId: string;
  filters?: ListUsageFilter[];
  nextToken?: string;
  maxResults?: number;
}
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
export interface ListBillEstimateInputUsageModificationsResponse {
  items?: BillEstimateInputUsageModificationSummary[];
  nextToken?: string;
}
export type ListBillEstimateLineItemsFilterName =
  | "USAGE_ACCOUNT_ID"
  | "SERVICE_CODE"
  | "USAGE_TYPE"
  | "OPERATION"
  | "LOCATION"
  | "LINE_ITEM_TYPE"
  | (string & {});
export type ListBillEstimateLineItemsFilterValues = string[];
export interface ListBillEstimateLineItemsFilter {
  name: ListBillEstimateLineItemsFilterName;
  values: string[];
  matchOption?: MatchOption;
}
export type ListBillEstimateLineItemsFilters = ListBillEstimateLineItemsFilter[];
export interface ListBillEstimateLineItemsRequest {
  billEstimateId: string;
  filters?: ListBillEstimateLineItemsFilter[];
  nextToken?: string;
  maxResults?: number;
}
export interface UsageQuantityResult {
  amount?: number;
  unit?: string;
}
export type SavingsPlanArns = string[];
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
export type BillEstimateLineItemSummaries = BillEstimateLineItemSummary[];
export interface ListBillEstimateLineItemsResponse {
  items?: BillEstimateLineItemSummary[];
  nextToken?: string;
}
export type ListBillEstimatesFilterName = "STATUS" | "NAME" | (string & {});
export type ListBillEstimatesFilterValues = string[];
export interface ListBillEstimatesFilter {
  name: ListBillEstimatesFilterName;
  values: string[];
  matchOption?: MatchOption;
}
export type ListBillEstimatesFilters = ListBillEstimatesFilter[];
export interface FilterTimestamp {
  afterTimestamp?: Date;
  beforeTimestamp?: Date;
}
export interface ListBillEstimatesRequest {
  filters?: ListBillEstimatesFilter[];
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  nextToken?: string;
  maxResults?: number;
}
export interface BillEstimateSummary {
  id: string;
  name?: string;
  status?: BillEstimateStatus;
  billInterval?: BillInterval;
  createdAt?: Date;
  expiresAt?: Date;
}
export type BillEstimateSummaries = BillEstimateSummary[];
export interface ListBillEstimatesResponse {
  items?: BillEstimateSummary[];
  nextToken?: string;
}
export interface ListBillScenarioCommitmentModificationsRequest {
  billScenarioId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillScenarioCommitmentModificationsResponse {
  items?: BillScenarioCommitmentModificationItem[];
  nextToken?: string;
}
export type ListBillScenariosFilterName =
  | "STATUS"
  | "NAME"
  | "GROUP_SHARING_PREFERENCE"
  | "COST_CATEGORY_ARN"
  | (string & {});
export type ListBillScenariosFilterValues = string[];
export interface ListBillScenariosFilter {
  name: ListBillScenariosFilterName;
  values: string[];
  matchOption?: MatchOption;
}
export type ListBillScenariosFilters = ListBillScenariosFilter[];
export interface ListBillScenariosRequest {
  filters?: ListBillScenariosFilter[];
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  nextToken?: string;
  maxResults?: number;
}
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
export type BillScenarioSummaries = BillScenarioSummary[];
export interface ListBillScenariosResponse {
  items?: BillScenarioSummary[];
  nextToken?: string;
}
export interface ListBillScenarioUsageModificationsRequest {
  billScenarioId: string;
  filters?: ListUsageFilter[];
  nextToken?: string;
  maxResults?: number;
}
export interface ListBillScenarioUsageModificationsResponse {
  items?: BillScenarioUsageModificationItem[];
  nextToken?: string;
}
export type Arn = string;
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type ListWorkloadEstimatesFilterName = "STATUS" | "NAME" | (string & {});
export type ListWorkloadEstimatesFilterValues = string[];
export interface ListWorkloadEstimatesFilter {
  name: ListWorkloadEstimatesFilterName;
  values: string[];
  matchOption?: MatchOption;
}
export type ListWorkloadEstimatesFilters = ListWorkloadEstimatesFilter[];
export interface ListWorkloadEstimatesRequest {
  createdAtFilter?: FilterTimestamp;
  expiresAtFilter?: FilterTimestamp;
  filters?: ListWorkloadEstimatesFilter[];
  nextToken?: string;
  maxResults?: number;
}
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
export type WorkloadEstimateSummaries = WorkloadEstimateSummary[];
export interface ListWorkloadEstimatesResponse {
  items?: WorkloadEstimateSummary[];
  nextToken?: string;
}
export type WorkloadEstimateUsageMaxResults = number;
export interface ListWorkloadEstimateUsageRequest {
  workloadEstimateId: string;
  filters?: ListUsageFilter[];
  nextToken?: string;
  maxResults?: number;
}
export interface ListWorkloadEstimateUsageResponse {
  items?: WorkloadEstimateUsageItem[];
  nextToken?: string;
}
export interface TagResourceRequest {
  arn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type ResourceTagKeys = string[];
export interface UntagResourceRequest {
  arn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateBillEstimateRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date;
}
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
export interface UpdateBillScenarioRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date;
  groupSharingPreference?: GroupSharingPreferenceEnum;
  costCategoryGroupSharingPreferenceArn?: string;
}
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
export interface UpdatePreferencesRequest {
  managementAccountRateTypeSelections?: RateType[];
  memberAccountRateTypeSelections?: RateType[];
  standaloneAccountRateTypeSelections?: RateType[];
}
export interface UpdatePreferencesResponse {
  managementAccountRateTypeSelections?: RateType[];
  memberAccountRateTypeSelections?: RateType[];
  standaloneAccountRateTypeSelections?: RateType[];
}
export interface UpdateWorkloadEstimateRequest {
  identifier: string;
  name?: string;
  expiresAt?: Date;
}
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
  input: __S(7) as any as S.Schema<BatchCreateBillScenarioCommitmentModificationRequest>,
  output: __S(12) as any as S.Schema<BatchCreateBillScenarioCommitmentModificationResponse>,
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
  input: __S(23) as any as S.Schema<BatchCreateBillScenarioUsageModificationRequest>,
  output: __S(30) as any as S.Schema<BatchCreateBillScenarioUsageModificationResponse>,
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
  input: __S(33) as any as S.Schema<BatchCreateWorkloadEstimateUsageRequest>,
  output: __S(39) as any as S.Schema<BatchCreateWorkloadEstimateUsageResponse>,
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
  input: __S(40) as any as S.Schema<BatchDeleteBillScenarioCommitmentModificationRequest>,
  output: __S(43) as any as S.Schema<BatchDeleteBillScenarioCommitmentModificationResponse>,
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
  input: __S(44) as any as S.Schema<BatchDeleteBillScenarioUsageModificationRequest>,
  output: __S(47) as any as S.Schema<BatchDeleteBillScenarioUsageModificationResponse>,
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
  input: __S(48) as any as S.Schema<BatchDeleteWorkloadEstimateUsageRequest>,
  output: __S(51) as any as S.Schema<BatchDeleteWorkloadEstimateUsageResponse>,
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
  input: __S(54) as any as S.Schema<BatchUpdateBillScenarioCommitmentModificationRequest>,
  output: __S(59) as any as S.Schema<BatchUpdateBillScenarioCommitmentModificationResponse>,
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
  input: __S(62) as any as S.Schema<BatchUpdateBillScenarioUsageModificationRequest>,
  output: __S(67) as any as S.Schema<BatchUpdateBillScenarioUsageModificationResponse>,
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
  input: __S(70) as any as S.Schema<BatchUpdateWorkloadEstimateUsageRequest>,
  output: __S(75) as any as S.Schema<BatchUpdateWorkloadEstimateUsageResponse>,
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
  input: __S(77) as any as S.Schema<CreateBillEstimateRequest>,
  output: __S(82) as any as S.Schema<CreateBillEstimateResponse>,
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
  input: __S(83) as any as S.Schema<CreateBillScenarioRequest>,
  output: __S(84) as any as S.Schema<CreateBillScenarioResponse>,
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
  input: __S(85) as any as S.Schema<CreateWorkloadEstimateRequest>,
  output: __S(86) as any as S.Schema<CreateWorkloadEstimateResponse>,
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
  input: __S(87) as any as S.Schema<DeleteBillEstimateRequest>,
  output: __S(88) as any as S.Schema<DeleteBillEstimateResponse>,
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
  input: __S(89) as any as S.Schema<DeleteBillScenarioRequest>,
  output: __S(88) as any as S.Schema<DeleteBillScenarioResponse>,
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
  input: __S(90) as any as S.Schema<DeleteWorkloadEstimateRequest>,
  output: __S(88) as any as S.Schema<DeleteWorkloadEstimateResponse>,
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
  input: __S(91) as any as S.Schema<GetBillEstimateRequest>,
  output: __S(92) as any as S.Schema<GetBillEstimateResponse>,
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
  input: __S(93) as any as S.Schema<GetBillScenarioRequest>,
  output: __S(94) as any as S.Schema<GetBillScenarioResponse>,
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
  input: __S(95) as any as S.Schema<GetPreferencesRequest>,
  output: __S(97) as any as S.Schema<GetPreferencesResponse>,
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
  input: __S(98) as any as S.Schema<GetWorkloadEstimateRequest>,
  output: __S(86) as any as S.Schema<GetWorkloadEstimateResponse>,
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
  input: __S(99) as any as S.Schema<ListBillEstimateCommitmentsRequest>,
  output: __S(102) as any as S.Schema<ListBillEstimateCommitmentsResponse>,
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
  input: __S(103) as any as S.Schema<ListBillEstimateInputCommitmentModificationsRequest>,
  output: __S(106) as any as S.Schema<ListBillEstimateInputCommitmentModificationsResponse>,
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
  input: __S(109) as any as S.Schema<ListBillEstimateInputUsageModificationsRequest>,
  output: __S(110) as any as S.Schema<ListBillEstimateInputUsageModificationsResponse>,
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
  input: __S(113) as any as S.Schema<ListBillEstimateLineItemsRequest>,
  output: __S(117) as any as S.Schema<ListBillEstimateLineItemsResponse>,
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
  input: __S(121) as any as S.Schema<ListBillEstimatesRequest>,
  output: __S(124) as any as S.Schema<ListBillEstimatesResponse>,
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
  input: __S(125) as any as S.Schema<ListBillScenarioCommitmentModificationsRequest>,
  output: __S(126) as any as S.Schema<ListBillScenarioCommitmentModificationsResponse>,
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
  input: __S(129) as any as S.Schema<ListBillScenariosRequest>,
  output: __S(131) as any as S.Schema<ListBillScenariosResponse>,
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
  input: __S(132) as any as S.Schema<ListBillScenarioUsageModificationsRequest>,
  output: __S(110) as any as S.Schema<ListBillScenarioUsageModificationsResponse>,
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
  input: __S(133) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(134) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(137) as any as S.Schema<ListWorkloadEstimatesRequest>,
  output: __S(140) as any as S.Schema<ListWorkloadEstimatesResponse>,
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
  input: __S(141) as any as S.Schema<ListWorkloadEstimateUsageRequest>,
  output: __S(142) as any as S.Schema<ListWorkloadEstimateUsageResponse>,
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
  input: __S(143) as any as S.Schema<TagResourceRequest>,
  output: __S(88) as any as S.Schema<TagResourceResponse>,
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
  input: __S(144) as any as S.Schema<UntagResourceRequest>,
  output: __S(88) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(145) as any as S.Schema<UpdateBillEstimateRequest>,
  output: __S(82) as any as S.Schema<UpdateBillEstimateResponse>,
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
  input: __S(146) as any as S.Schema<UpdateBillScenarioRequest>,
  output: __S(84) as any as S.Schema<UpdateBillScenarioResponse>,
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
  input: __S(147) as any as S.Schema<UpdatePreferencesRequest>,
  output: __S(148) as any as S.Schema<UpdatePreferencesResponse>,
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
  input: __S(149) as any as S.Schema<UpdateWorkloadEstimateRequest>,
  output: __S(86) as any as S.Schema<UpdateWorkloadEstimateResponse>,
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
        /*@__PURE__*/ S.Struct({ addReservedInstanceAction: __S(0) }),
        /*@__PURE__*/ S.Struct({ addSavingsPlanAction: __S(1) }),
        /*@__PURE__*/ S.Struct({ negateReservedInstanceAction: __S(2) }),
        /*@__PURE__*/ S.Struct({ negateSavingsPlanAction: __S(3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          key: S.String,
          group: S.optional(S.String),
          usageAccountId: S.String,
          commitmentAction: __S(4),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationEntry",
      });
    case 6:
      return S.Array(__S(5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          commitmentModifications: __S(6),
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
          commitmentAction: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationItem",
      });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationError",
      });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(9)),
          errors: S.optional(__S(11)),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioCommitmentModificationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ startHour: S.Date.pipe(T.TimestampFormat("epoch-seconds")), amount: S.Number }),
      ).annotate({ identifier: "UsageAmount" });
    case 6:
      return S.Array(__S(13));
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
        /*@__PURE__*/ S.suspend((): S.Schema<Expression> => __S(19)).annotate({
          identifier: "Expression",
        }),
      );
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          matchOptions: S.optional(__S(17)),
          values: S.optional(__S(17)),
        }),
      ).annotate({ identifier: "ExpressionFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          and: S.optional(S.suspend(() => __S(16)).annotate({ identifier: "ExpressionList" })),
          or: S.optional(S.suspend(() => __S(16)).annotate({ identifier: "ExpressionList" })),
          not: S.optional(
            S.suspend((): S.Schema<Expression> => __S(19)).annotate({
              identifier: "Expression",
            }),
          ),
          costCategories: S.optional(__S(18)),
          dimensions: S.optional(__S(18)),
          tags: S.optional(__S(18)),
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
          billInterval: __S(15),
          filterExpression: __S(19),
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
          amounts: S.optional(__S(14)),
          historicalUsage: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationEntry",
      });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          usageModifications: __S(22),
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
      return S.Array(__S(24));
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
          quantities: S.optional(__S(25)),
          historicalUsage: S.optional(__S(20)),
          key: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationItem",
      });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateBillScenarioUsageModificationError",
      });
    case 5:
      return S.Array(__S(28));
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(27)),
          errors: S.optional(__S(29)),
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
          historicalUsage: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageEntry",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() =>
        S.Struct({
          workloadEstimateId: S.String,
          usage: __S(32),
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
          quantity: S.optional(__S(34)),
          cost: S.optional(S.Number),
          currency: S.optional(S.String),
          status: S.optional(S.String),
          historicalUsage: S.optional(__S(20)),
          key: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageItem",
      });
    case 4:
      return S.Array(__S(35));
    case 5:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateWorkloadEstimateUsageError",
      });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(36)),
          errors: S.optional(__S(38)),
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
          ids: __S(17),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteBillScenarioCommitmentModificationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteBillScenarioCommitmentModificationError",
      });
    case 2:
      return S.Array(__S(41));
    case 3:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(42)) })).annotate({
        identifier: "BatchDeleteBillScenarioCommitmentModificationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          ids: __S(17),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteBillScenarioUsageModificationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteBillScenarioUsageModificationError",
      });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(46)) })).annotate({
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
          ids: __S(17),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteWorkloadEstimateUsageRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteWorkloadEstimateUsageError",
      });
    case 2:
      return S.Array(__S(49));
    case 3:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(50)) })).annotate({
        identifier: "BatchDeleteWorkloadEstimateUsageResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ id: S.String, group: S.optional(S.String) })).annotate({
        identifier: "BatchUpdateBillScenarioCommitmentModificationEntry",
      });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          commitmentModifications: __S(53),
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
          commitmentAction: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "BillScenarioCommitmentModificationItem",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioCommitmentModificationError",
      });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(56)),
          errors: S.optional(__S(58)),
        }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioCommitmentModificationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String, group: S.optional(S.String), amounts: S.optional(__S(14)) }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioUsageModificationEntry",
      });
    case 5:
      return S.Array(__S(60));
    case 6:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          usageModifications: __S(61),
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
          quantities: S.optional(__S(25)),
          historicalUsage: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "BillScenarioUsageModificationItem",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateBillScenarioUsageModificationError",
      });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(64)),
          errors: S.optional(__S(66)),
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
      return S.Array(__S(68));
    case 6:
      return S.suspend(() =>
        S.Struct({
          workloadEstimateId: S.String,
          usage: __S(69),
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
          quantity: S.optional(__S(34)),
          cost: S.optional(S.Number),
          currency: S.optional(S.String),
          status: S.optional(S.String),
          historicalUsage: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "WorkloadEstimateUsageItem",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateWorkloadEstimateUsageError",
      });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(72)),
          errors: S.optional(__S(74)),
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
          tags: S.optional(__S(76)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBillEstimateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ amount: S.optional(S.Number), currency: S.optional(S.String) }),
      ).annotate({ identifier: "CostAmount" });
    case 7:
      return S.suspend(() =>
        S.Struct({ historicalCost: S.optional(__S(78)), estimatedCost: S.optional(__S(78)) }),
      ).annotate({ identifier: "CostDifference" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(79).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          totalCostDifference: S.optional(__S(79)),
          serviceCostDifferences: S.optional(__S(80)),
        }),
      ).annotate({ identifier: "BillEstimateCostSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          status: S.optional(S.String),
          failureMessage: S.optional(S.String),
          billInterval: S.optional(__S(15)),
          costSummary: S.optional(__S(81)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groupSharingPreference: S.optional(S.String),
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
          tags: S.optional(__S(76)),
          groupSharingPreference: S.optional(S.String),
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
          billInterval: S.optional(__S(15)),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureMessage: S.optional(S.String),
          groupSharingPreference: S.optional(S.String),
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
          rateType: S.optional(S.String),
          tags: S.optional(__S(76)),
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
          rateType: S.optional(S.String),
          rateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          totalCost: S.optional(S.Number),
          costCurrency: S.optional(S.String),
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
          status: S.optional(S.String),
          failureMessage: S.optional(S.String),
          billInterval: S.optional(__S(15)),
          costSummary: S.optional(__S(81)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groupSharingPreference: S.optional(S.String),
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
          billInterval: S.optional(__S(15)),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureMessage: S.optional(S.String),
          groupSharingPreference: S.optional(S.String),
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
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          managementAccountRateTypeSelections: S.optional(__S(96)),
          memberAccountRateTypeSelections: S.optional(__S(96)),
          standaloneAccountRateTypeSelections: S.optional(__S(96)),
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
          purchaseAgreementType: S.optional(S.String),
          offeringId: S.optional(S.String),
          usageAccountId: S.optional(S.String),
          region: S.optional(S.String),
          termLength: S.optional(S.String),
          paymentOption: S.optional(S.String),
          upfrontPayment: S.optional(__S(78)),
          monthlyPayment: S.optional(__S(78)),
        }),
      ).annotate({
        identifier: "BillEstimateCommitmentSummary",
      });
    case 5:
      return S.Array(__S(100));
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(101)),
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
          commitmentAction: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "BillEstimateInputCommitmentModificationSummary",
      });
    case 1:
      return S.Array(__S(104));
    case 2:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(105)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateInputCommitmentModificationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(17),
          matchOption: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListUsageFilter" });
    case 4:
      return S.Array(__S(107));
    case 5:
      return S.suspend(() =>
        S.Struct({
          billEstimateId: S.String,
          filters: S.optional(__S(108)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListBillEstimateInputUsageModificationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(64)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateInputUsageModificationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(17),
          matchOption: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateLineItemsFilter",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111));
    case 1:
      return S.suspend(() =>
        S.Struct({
          billEstimateId: S.String,
          filters: S.optional(__S(112)),
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
          estimatedUsageQuantity: S.optional(__S(114)),
          estimatedCost: S.optional(__S(78)),
          historicalUsageQuantity: S.optional(__S(114)),
          historicalCost: S.optional(__S(78)),
          savingsPlanArns: S.optional(__S(17)),
        }),
      ).annotate({
        identifier: "BillEstimateLineItemSummary",
      });
    case 4:
      return S.Array(__S(115));
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(116)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillEstimateLineItemsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(17),
          matchOption: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListBillEstimatesFilter" });
    case 7:
      return S.Array(__S(118));
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
          filters: S.optional(__S(119)),
          createdAtFilter: S.optional(__S(120)),
          expiresAtFilter: S.optional(__S(120)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBillEstimatesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.optional(S.String),
          status: S.optional(S.String),
          billInterval: S.optional(__S(15)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BillEstimateSummary" });
    case 3:
      return S.Array(__S(122));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(123)), nextToken: S.optional(S.String) }),
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
          items: S.optional(__S(56)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillScenarioCommitmentModificationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(17),
          matchOption: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListBillScenariosFilter" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127));
    case 1:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(128)),
          createdAtFilter: S.optional(__S(120)),
          expiresAtFilter: S.optional(__S(120)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBillScenariosRequest" });
    case 2:
      return S.Array(__S(94));
    case 3:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(130)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListBillScenariosResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          billScenarioId: S.String,
          filters: S.optional(__S(108)),
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(76)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(17),
          matchOption: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkloadEstimatesFilter",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135));
    case 1:
      return S.suspend(() =>
        S.Struct({
          createdAtFilter: S.optional(__S(120)),
          expiresAtFilter: S.optional(__S(120)),
          filters: S.optional(__S(136)),
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
          rateType: S.optional(S.String),
          rateTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          totalCost: S.optional(S.Number),
          costCurrency: S.optional(S.String),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadEstimateSummary" });
    case 3:
      return S.Array(__S(138));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(139)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWorkloadEstimatesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workloadEstimateId: S.String,
          filters: S.optional(__S(108)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListWorkloadEstimateUsageRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(72)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkloadEstimateUsageResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String, tags: __S(76) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String, tagKeys: __S(17) }).pipe(
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
          groupSharingPreference: S.optional(S.String),
          costCategoryGroupSharingPreferenceArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateBillScenarioRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          managementAccountRateTypeSelections: S.optional(__S(96)),
          memberAccountRateTypeSelections: S.optional(__S(96)),
          standaloneAccountRateTypeSelections: S.optional(__S(96)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdatePreferencesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          managementAccountRateTypeSelections: S.optional(__S(96)),
          memberAccountRateTypeSelections: S.optional(__S(96)),
          standaloneAccountRateTypeSelections: S.optional(__S(96)),
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
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
  }
}
