import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSSavingsPlan {
  createSavingsPlan(
    input: CreateSavingsPlanRequest,
  ): Effect.Effect<
    CreateSavingsPlanResponse,
    InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  deleteQueuedSavingsPlan(
    input: DeleteQueuedSavingsPlanRequest,
  ): Effect.Effect<
    DeleteQueuedSavingsPlanResponse,
    InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  describeSavingsPlanRates(
    input: DescribeSavingsPlanRatesRequest,
  ): Effect.Effect<
    DescribeSavingsPlanRatesResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeSavingsPlans(
    input: DescribeSavingsPlansRequest,
  ): Effect.Effect<
    DescribeSavingsPlansResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeSavingsPlansOfferingRates(
    input: DescribeSavingsPlansOfferingRatesRequest,
  ): Effect.Effect<
    DescribeSavingsPlansOfferingRatesResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeSavingsPlansOfferings(
    input: DescribeSavingsPlansOfferingsRequest,
  ): Effect.Effect<
    DescribeSavingsPlansOfferingsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  returnSavingsPlan(
    input: ReturnSavingsPlanRequest,
  ): Effect.Effect<
    ReturnSavingsPlanResponse,
    InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Savingsplans = AWSSavingsPlan;

export type Amount = string;

export type ClientToken = string;

export interface CreateSavingsPlanRequest {
  savingsPlanOfferingId: string;
  commitment: string;
  upfrontPaymentAmount?: string;
  purchaseTime?: Date | string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateSavingsPlanResponse {
  savingsPlanId?: string;
}
export type CurrencyCode = "CNY" | "USD";
export type CurrencyList = Array<CurrencyCode>;
export type DateTime = Date | string;

export interface DeleteQueuedSavingsPlanRequest {
  savingsPlanId: string;
}
export interface DeleteQueuedSavingsPlanResponse {
}
export interface DescribeSavingsPlanRatesRequest {
  savingsPlanId: string;
  filters?: Array<SavingsPlanRateFilter>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeSavingsPlanRatesResponse {
  savingsPlanId?: string;
  searchResults?: Array<SavingsPlanRate>;
  nextToken?: string;
}
export interface DescribeSavingsPlansOfferingRatesRequest {
  savingsPlanOfferingIds?: Array<string>;
  savingsPlanPaymentOptions?: Array<SavingsPlanPaymentOption>;
  savingsPlanTypes?: Array<SavingsPlanType>;
  products?: Array<SavingsPlanProductType>;
  serviceCodes?: Array<SavingsPlanRateServiceCode>;
  usageTypes?: Array<string>;
  operations?: Array<string>;
  filters?: Array<SavingsPlanOfferingRateFilterElement>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeSavingsPlansOfferingRatesResponse {
  searchResults?: Array<SavingsPlanOfferingRate>;
  nextToken?: string;
}
export interface DescribeSavingsPlansOfferingsRequest {
  offeringIds?: Array<string>;
  paymentOptions?: Array<SavingsPlanPaymentOption>;
  productType?: SavingsPlanProductType;
  planTypes?: Array<SavingsPlanType>;
  durations?: Array<number>;
  currencies?: Array<CurrencyCode>;
  descriptions?: Array<string>;
  serviceCodes?: Array<string>;
  usageTypes?: Array<string>;
  operations?: Array<string>;
  filters?: Array<SavingsPlanOfferingFilterElement>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeSavingsPlansOfferingsResponse {
  searchResults?: Array<SavingsPlanOffering>;
  nextToken?: string;
}
export interface DescribeSavingsPlansRequest {
  savingsPlanArns?: Array<string>;
  savingsPlanIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  states?: Array<SavingsPlanState>;
  filters?: Array<SavingsPlanFilter>;
}
export interface DescribeSavingsPlansResponse {
  savingsPlans?: Array<SavingsPlan>;
  nextToken?: string;
}
export type DurationsList = Array<number>;
export type EC2InstanceFamily = string;

export type FilterValuesList = Array<string>;
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type JsonSafeFilterValueString = string;

export type ListOfStrings = Array<string>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type PageSize = number;

export type PaginationToken = string;

export interface ParentSavingsPlanOffering {
  offeringId?: string;
  paymentOption?: SavingsPlanPaymentOption;
  planType?: SavingsPlanType;
  durationSeconds?: number;
  currency?: CurrencyCode;
  planDescription?: string;
}
export type Region = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ReturnSavingsPlanRequest {
  savingsPlanId: string;
  clientToken?: string;
}
export interface ReturnSavingsPlanResponse {
  savingsPlanId?: string;
}
export interface SavingsPlan {
  offeringId?: string;
  savingsPlanId?: string;
  savingsPlanArn?: string;
  description?: string;
  start?: string;
  end?: string;
  state?: SavingsPlanState;
  region?: string;
  ec2InstanceFamily?: string;
  savingsPlanType?: SavingsPlanType;
  paymentOption?: SavingsPlanPaymentOption;
  productTypes?: Array<SavingsPlanProductType>;
  currency?: CurrencyCode;
  commitment?: string;
  upfrontPaymentAmount?: string;
  recurringPaymentAmount?: string;
  termDurationInSeconds?: number;
  tags?: Record<string, string>;
  returnableUntil?: string;
}
export type SavingsPlanArn = string;

export type SavingsPlanArnList = Array<string>;
export type SavingsPlanDescription = string;

export type SavingsPlanDescriptionsList = Array<string>;
export interface SavingsPlanFilter {
  name?: SavingsPlansFilterName;
  values?: Array<string>;
}
export type SavingsPlanFilterList = Array<SavingsPlanFilter>;
export type SavingsPlanId = string;

export type SavingsPlanIdList = Array<string>;
export type SavingsPlanList = Array<SavingsPlan>;
export interface SavingsPlanOffering {
  offeringId?: string;
  productTypes?: Array<SavingsPlanProductType>;
  planType?: SavingsPlanType;
  description?: string;
  paymentOption?: SavingsPlanPaymentOption;
  durationSeconds?: number;
  currency?: CurrencyCode;
  serviceCode?: string;
  usageType?: string;
  operation?: string;
  properties?: Array<SavingsPlanOfferingProperty>;
}
export type SavingsPlanOfferingFilterAttribute = "region" | "instanceFamily";
export interface SavingsPlanOfferingFilterElement {
  name?: SavingsPlanOfferingFilterAttribute;
  values?: Array<string>;
}
export type SavingsPlanOfferingFiltersList = Array<SavingsPlanOfferingFilterElement>;
export type SavingsPlanOfferingId = string;

export interface SavingsPlanOfferingProperty {
  name?: SavingsPlanOfferingPropertyKey;
  value?: string;
}
export type SavingsPlanOfferingPropertyKey = "REGION" | "INSTANCE_FAMILY";
export type SavingsPlanOfferingPropertyList = Array<SavingsPlanOfferingProperty>;
export interface SavingsPlanOfferingRate {
  savingsPlanOffering?: ParentSavingsPlanOffering;
  rate?: string;
  unit?: SavingsPlanRateUnit;
  productType?: SavingsPlanProductType;
  serviceCode?: SavingsPlanRateServiceCode;
  usageType?: string;
  operation?: string;
  properties?: Array<SavingsPlanOfferingRateProperty>;
}
export interface SavingsPlanOfferingRateFilterElement {
  name?: SavingsPlanRateFilterAttribute;
  values?: Array<string>;
}
export type SavingsPlanOfferingRateFiltersList = Array<SavingsPlanOfferingRateFilterElement>;
export interface SavingsPlanOfferingRateProperty {
  name?: string;
  value?: string;
}
export type SavingsPlanOfferingRatePropertyList = Array<SavingsPlanOfferingRateProperty>;
export type SavingsPlanOfferingRatesList = Array<SavingsPlanOfferingRate>;
export type SavingsPlanOfferingsList = Array<SavingsPlanOffering>;
export type SavingsPlanOperation = string;

export type SavingsPlanOperationList = Array<string>;
export type SavingsPlanPaymentOption = "ALL_UPFRONT" | "PARTIAL_UPFRONT" | "NO_UPFRONT";
export type SavingsPlanPaymentOptionList = Array<SavingsPlanPaymentOption>;
export type SavingsPlanProductType = "EC2" | "FARGATE" | "LAMBDA" | "SAGEMAKER";
export type SavingsPlanProductTypeList = Array<SavingsPlanProductType>;
export interface SavingsPlanRate {
  rate?: string;
  currency?: CurrencyCode;
  unit?: SavingsPlanRateUnit;
  productType?: SavingsPlanProductType;
  serviceCode?: SavingsPlanRateServiceCode;
  usageType?: string;
  operation?: string;
  properties?: Array<SavingsPlanRateProperty>;
}
export interface SavingsPlanRateFilter {
  name?: SavingsPlanRateFilterName;
  values?: Array<string>;
}
export type SavingsPlanRateFilterAttribute = "REGION" | "INSTANCE_FAMILY" | "INSTANCE_TYPE" | "PRODUCT_DESCRIPTION" | "TENANCY" | "PRODUCT_ID";
export type SavingsPlanRateFilterList = Array<SavingsPlanRateFilter>;
export type SavingsPlanRateFilterName = "REGION" | "INSTANCE_TYPE" | "PRODUCT_DESCRIPTION" | "TENANCY" | "PRODUCT_TYPE" | "SERVICE_CODE" | "USAGE_TYPE" | "OPERATION";
export type SavingsPlanRateList = Array<SavingsPlanRate>;
export type SavingsPlanRateOperation = string;

export type SavingsPlanRateOperationList = Array<string>;
export type SavingsPlanRatePricePerUnit = string;

export interface SavingsPlanRateProperty {
  name?: SavingsPlanRatePropertyKey;
  value?: string;
}
export type SavingsPlanRatePropertyKey = "REGION" | "INSTANCE_TYPE" | "INSTANCE_FAMILY" | "PRODUCT_DESCRIPTION" | "TENANCY";
export type SavingsPlanRatePropertyList = Array<SavingsPlanRateProperty>;
export type SavingsPlanRateServiceCode = "EC2" | "FARGATE" | "FARGATE_EKS" | "LAMBDA" | "SAGEMAKER";
export type SavingsPlanRateServiceCodeList = Array<SavingsPlanRateServiceCode>;
export type SavingsPlanRateUnit = "HOURS" | "LAMBDA_GB_SECOND" | "REQUEST";
export type SavingsPlanRateUsageType = string;

export type SavingsPlanRateUsageTypeList = Array<string>;
export type SavingsPlansDuration = number;

export type SavingsPlanServiceCode = string;

export type SavingsPlanServiceCodeList = Array<string>;
export type SavingsPlansFilterName = "REGION" | "EC2_INSTANCE_FAMILY" | "COMMITMENT" | "UPFRONT" | "TERM" | "SAVINGS_PLAN_TYPE" | "PAYMENT_OPTION" | "START" | "END";
export type SavingsPlanState = "PAYMENT_PENDING" | "PAYMENT_FAILED" | "ACTIVE" | "RETIRED" | "QUEUED" | "QUEUED_DELETED" | "PENDING_RETURN" | "RETURNED";
export type SavingsPlanStateList = Array<SavingsPlanState>;
export type SavingsPlanType = "COMPUTE" | "EC2_INSTANCE" | "SAGEMAKER";
export type SavingsPlanTypeList = Array<SavingsPlanType>;
export type SavingsPlanUsageType = string;

export type SavingsPlanUsageTypeList = Array<string>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type TermDurationInSeconds = number;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export type UUID = string;

export type UUIDs = Array<string>;
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace CreateSavingsPlan {
  export type Input = CreateSavingsPlanRequest;
  export type Output = CreateSavingsPlanResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQueuedSavingsPlan {
  export type Input = DeleteQueuedSavingsPlanRequest;
  export type Output = DeleteQueuedSavingsPlanResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSavingsPlanRates {
  export type Input = DescribeSavingsPlanRatesRequest;
  export type Output = DescribeSavingsPlanRatesResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSavingsPlans {
  export type Input = DescribeSavingsPlansRequest;
  export type Output = DescribeSavingsPlansResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSavingsPlansOfferingRates {
  export type Input = DescribeSavingsPlansOfferingRatesRequest;
  export type Output = DescribeSavingsPlansOfferingRatesResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSavingsPlansOfferings {
  export type Input = DescribeSavingsPlansOfferingsRequest;
  export type Output = DescribeSavingsPlansOfferingsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReturnSavingsPlan {
  export type Input = ReturnSavingsPlanRequest;
  export type Output = ReturnSavingsPlanResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

