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
  sdkId: "savingsplans",
  serviceShapeName: "AWSSavingsPlan",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "savingsplans" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-06-28");
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
  const _p0 = () => ({
    authSchemes: [{ name: "sigv4", signingName: "savingsplans", signingRegion: "us-east-1" }],
  });
  if (!(Endpoint != null) && UseFIPS === false && UseDualStack === true) {
    {
      const PartitionResult = _.partition(Region);
      if (Region != null && PartitionResult != null && PartitionResult !== false) {
        if (_.getAttr(PartitionResult, "name") === "aws") {
          return e("https://savingsplans.global.api.aws", _p0(), {});
        }
        if (_.getAttr(PartitionResult, "supportsDualStack") === true) {
          return e(
            `https://savingsplans.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return err("DualStack is enabled but this partition does not support DualStack");
      }
    }
    if (!(Region != null)) {
      return e("https://savingsplans.global.api.aws", _p0(), {});
    }
  }
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
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://savingsplans.amazonaws.com", _p0(), {});
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://savingsplans-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://savingsplans-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://savingsplans.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://savingsplans.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InternalServerException", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ServiceQuotaExceededException",
        httpResponseCode: 402,
      }),
      /*@__PURE__*/ T.HttpError(402),
    ),
  ).pipe(C.withQuotaError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ValidationException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type SavingsPlanOfferingId = string;
export type Amount = string;
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateSavingsPlanRequest {
  savingsPlanOfferingId: string;
  commitment: string;
  upfrontPaymentAmount?: string;
  purchaseTime?: Date;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type SavingsPlanId = string;
export interface CreateSavingsPlanResponse {
  savingsPlanId?: string;
}
export interface DeleteQueuedSavingsPlanRequest {
  savingsPlanId: string;
}
export interface DeleteQueuedSavingsPlanResponse {}
export type SavingsPlanRateFilterName =
  | "region"
  | "instanceType"
  | "productDescription"
  | "tenancy"
  | "productType"
  | "serviceCode"
  | "usageType"
  | "operation"
  | (string & {});
export type ListOfStrings = string[];
export interface SavingsPlanRateFilter {
  name?: SavingsPlanRateFilterName;
  values?: string[];
}
export type SavingsPlanRateFilterList = SavingsPlanRateFilter[];
export type PaginationToken = string;
export type MaxResults = number;
export interface DescribeSavingsPlanRatesRequest {
  savingsPlanId: string;
  filters?: SavingsPlanRateFilter[];
  nextToken?: string;
  maxResults?: number;
}
export type CurrencyCode = "CNY" | "USD" | "EUR" | (string & {});
export type SavingsPlanRateUnit =
  | "Hrs"
  | "Lambda-GB-Second"
  | "Request"
  | "ACU-Hr"
  | "ReadRequestUnits"
  | "WriteRequestUnits"
  | "ReadCapacityUnit-Hrs"
  | "WriteCapacityUnit-Hrs"
  | "ReplicatedWriteRequestUnits"
  | "ReplicatedWriteCapacityUnit-Hrs"
  | "GB-Hours"
  | "DPU"
  | "ElastiCacheProcessingUnit"
  | "DCU-Hr"
  | "NCU-hr"
  | "OCU-hours"
  | "Jobs"
  | (string & {});
export type SavingsPlanProductType =
  | "EC2"
  | "Fargate"
  | "Lambda"
  | "SageMaker"
  | "RDS"
  | "DSQL"
  | "DynamoDB"
  | "ElastiCache"
  | "DocDB"
  | "Neptune"
  | "Timestream"
  | "Keyspaces"
  | "DMS"
  | "OpenSearch"
  | (string & {});
export type SavingsPlanRateServiceCode =
  | "AmazonEC2"
  | "AmazonECS"
  | "AmazonEKS"
  | "AWSLambda"
  | "AmazonSageMaker"
  | "AmazonRDS"
  | "AuroraDSQL"
  | "AmazonDynamoDB"
  | "AmazonElastiCache"
  | "AmazonDocDB"
  | "AmazonNeptune"
  | "AmazonTimestream"
  | "AmazonMCS"
  | "AWSDatabaseMigrationSvc"
  | "AmazonES"
  | (string & {});
export type SavingsPlanRateUsageType = string;
export type SavingsPlanRateOperation = string;
export type SavingsPlanRatePropertyKey =
  | "region"
  | "instanceType"
  | "instanceFamily"
  | "productDescription"
  | "tenancy"
  | (string & {});
export type JsonSafeFilterValueString = string;
export interface SavingsPlanRateProperty {
  name?: SavingsPlanRatePropertyKey;
  value?: string;
}
export type SavingsPlanRatePropertyList = SavingsPlanRateProperty[];
export interface SavingsPlanRate {
  rate?: string;
  currency?: CurrencyCode;
  unit?: SavingsPlanRateUnit;
  productType?: SavingsPlanProductType;
  serviceCode?: SavingsPlanRateServiceCode;
  usageType?: string;
  operation?: string;
  properties?: SavingsPlanRateProperty[];
}
export type SavingsPlanRateList = SavingsPlanRate[];
export interface DescribeSavingsPlanRatesResponse {
  savingsPlanId?: string;
  searchResults?: SavingsPlanRate[];
  nextToken?: string;
}
export type SavingsPlanArn = string;
export type SavingsPlanArnList = string[];
export type SavingsPlanIdList = string[];
export type SavingsPlanState =
  | "payment-pending"
  | "payment-failed"
  | "active"
  | "retired"
  | "queued"
  | "queued-deleted"
  | "pending-return"
  | "returned"
  | (string & {});
export type SavingsPlanStateList = SavingsPlanState[];
export type SavingsPlansFilterName =
  | "region"
  | "ec2-instance-family"
  | "commitment"
  | "upfront"
  | "term"
  | "savings-plan-type"
  | "payment-option"
  | "start"
  | "end"
  | "instance-family"
  | (string & {});
export interface SavingsPlanFilter {
  name?: SavingsPlansFilterName;
  values?: string[];
}
export type SavingsPlanFilterList = SavingsPlanFilter[];
export interface DescribeSavingsPlansRequest {
  savingsPlanArns?: string[];
  savingsPlanIds?: string[];
  nextToken?: string;
  maxResults?: number;
  states?: SavingsPlanState[];
  filters?: SavingsPlanFilter[];
}
export type Region = string;
export type EC2InstanceFamily = string;
export type SavingsPlanType = "Compute" | "EC2Instance" | "SageMaker" | "Database" | (string & {});
export type SavingsPlanPaymentOption =
  | "All Upfront"
  | "Partial Upfront"
  | "No Upfront"
  | (string & {});
export type SavingsPlanProductTypeList = SavingsPlanProductType[];
export type TermDurationInSeconds = number;
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
  productTypes?: SavingsPlanProductType[];
  currency?: CurrencyCode;
  commitment?: string;
  upfrontPaymentAmount?: string;
  recurringPaymentAmount?: string;
  termDurationInSeconds?: number;
  tags?: { [key: string]: string | undefined };
  returnableUntil?: string;
}
export type SavingsPlanList = SavingsPlan[];
export interface DescribeSavingsPlansResponse {
  savingsPlans?: SavingsPlan[];
  nextToken?: string;
}
export type UUID = string;
export type UUIDs = string[];
export type SavingsPlanPaymentOptionList = SavingsPlanPaymentOption[];
export type SavingsPlanTypeList = SavingsPlanType[];
export type SavingsPlanRateServiceCodeList = SavingsPlanRateServiceCode[];
export type SavingsPlanRateUsageTypeList = string[];
export type SavingsPlanRateOperationList = string[];
export type SavingsPlanRateFilterAttribute =
  | "region"
  | "instanceFamily"
  | "instanceType"
  | "productDescription"
  | "tenancy"
  | "productId"
  | (string & {});
export type FilterValuesList = string[];
export interface SavingsPlanOfferingRateFilterElement {
  name?: SavingsPlanRateFilterAttribute;
  values?: string[];
}
export type SavingsPlanOfferingRateFiltersList = SavingsPlanOfferingRateFilterElement[];
export type PageSize = number;
export interface DescribeSavingsPlansOfferingRatesRequest {
  savingsPlanOfferingIds?: string[];
  savingsPlanPaymentOptions?: SavingsPlanPaymentOption[];
  savingsPlanTypes?: SavingsPlanType[];
  products?: SavingsPlanProductType[];
  serviceCodes?: SavingsPlanRateServiceCode[];
  usageTypes?: string[];
  operations?: string[];
  filters?: SavingsPlanOfferingRateFilterElement[];
  nextToken?: string;
  maxResults?: number;
}
export type SavingsPlansDuration = number;
export type SavingsPlanDescription = string;
export interface ParentSavingsPlanOffering {
  offeringId?: string;
  paymentOption?: SavingsPlanPaymentOption;
  planType?: SavingsPlanType;
  durationSeconds?: number;
  currency?: CurrencyCode;
  planDescription?: string;
}
export type SavingsPlanRatePricePerUnit = string;
export interface SavingsPlanOfferingRateProperty {
  name?: string;
  value?: string;
}
export type SavingsPlanOfferingRatePropertyList = SavingsPlanOfferingRateProperty[];
export interface SavingsPlanOfferingRate {
  savingsPlanOffering?: ParentSavingsPlanOffering;
  rate?: string;
  unit?: SavingsPlanRateUnit;
  productType?: SavingsPlanProductType;
  serviceCode?: SavingsPlanRateServiceCode;
  usageType?: string;
  operation?: string;
  properties?: SavingsPlanOfferingRateProperty[];
}
export type SavingsPlanOfferingRatesList = SavingsPlanOfferingRate[];
export interface DescribeSavingsPlansOfferingRatesResponse {
  searchResults?: SavingsPlanOfferingRate[];
  nextToken?: string;
}
export type DurationsList = number[];
export type CurrencyList = CurrencyCode[];
export type SavingsPlanDescriptionsList = string[];
export type SavingsPlanServiceCode = string;
export type SavingsPlanServiceCodeList = string[];
export type SavingsPlanUsageType = string;
export type SavingsPlanUsageTypeList = string[];
export type SavingsPlanOperation = string;
export type SavingsPlanOperationList = string[];
export type SavingsPlanOfferingFilterAttribute = "region" | "instanceFamily" | (string & {});
export interface SavingsPlanOfferingFilterElement {
  name?: SavingsPlanOfferingFilterAttribute;
  values?: string[];
}
export type SavingsPlanOfferingFiltersList = SavingsPlanOfferingFilterElement[];
export interface DescribeSavingsPlansOfferingsRequest {
  offeringIds?: string[];
  paymentOptions?: SavingsPlanPaymentOption[];
  productType?: SavingsPlanProductType;
  planTypes?: SavingsPlanType[];
  durations?: number[];
  currencies?: CurrencyCode[];
  descriptions?: string[];
  serviceCodes?: string[];
  usageTypes?: string[];
  operations?: string[];
  filters?: SavingsPlanOfferingFilterElement[];
  nextToken?: string;
  maxResults?: number;
}
export type SavingsPlanOfferingPropertyKey = "region" | "instanceFamily" | (string & {});
export interface SavingsPlanOfferingProperty {
  name?: SavingsPlanOfferingPropertyKey;
  value?: string;
}
export type SavingsPlanOfferingPropertyList = SavingsPlanOfferingProperty[];
export interface SavingsPlanOffering {
  offeringId?: string;
  productTypes?: SavingsPlanProductType[];
  planType?: SavingsPlanType;
  description?: string;
  paymentOption?: SavingsPlanPaymentOption;
  durationSeconds?: number;
  currency?: CurrencyCode;
  serviceCode?: string;
  usageType?: string;
  operation?: string;
  properties?: SavingsPlanOfferingProperty[];
}
export type SavingsPlanOfferingsList = SavingsPlanOffering[];
export interface DescribeSavingsPlansOfferingsResponse {
  searchResults?: SavingsPlanOffering[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ReturnSavingsPlanRequest {
  savingsPlanId: string;
  clientToken?: string;
}
export interface ReturnSavingsPlanResponse {
  savingsPlanId?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export type CreateSavingsPlanError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Savings Plan.
 */
export const createSavingsPlan: API.OperationMethod<
  CreateSavingsPlanRequest,
  CreateSavingsPlanResponse,
  CreateSavingsPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<CreateSavingsPlanRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<CreateSavingsPlanResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSavingsPlan",
}));

export type DeleteQueuedSavingsPlanError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the queued purchase for the specified Savings Plan.
 */
export const deleteQueuedSavingsPlan: API.OperationMethod<
  DeleteQueuedSavingsPlanRequest,
  DeleteQueuedSavingsPlanResponse,
  DeleteQueuedSavingsPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<DeleteQueuedSavingsPlanRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteQueuedSavingsPlanResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueuedSavingsPlan",
}));

export type DescribeSavingsPlanRatesError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the rates for a specific, existing Savings Plan.
 */
export const describeSavingsPlanRates: API.OperationMethod<
  DescribeSavingsPlanRatesRequest,
  DescribeSavingsPlanRatesResponse,
  DescribeSavingsPlanRatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8, __c1, 0) as any as S.Schema<DescribeSavingsPlanRatesRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<DescribeSavingsPlanRatesResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSavingsPlanRates",
}));

export type DescribeSavingsPlansError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified Savings Plans.
 */
export const describeSavingsPlans: API.OperationMethod<
  DescribeSavingsPlansRequest,
  DescribeSavingsPlansResponse,
  DescribeSavingsPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<DescribeSavingsPlansRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<DescribeSavingsPlansResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSavingsPlans",
}));

export type DescribeSavingsPlansOfferingRatesError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Describes the offering rates for Savings Plans you might want to purchase.
 */
export const describeSavingsPlansOfferingRates: API.OperationMethod<
  DescribeSavingsPlansOfferingRatesRequest,
  DescribeSavingsPlansOfferingRatesResponse,
  DescribeSavingsPlansOfferingRatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<DescribeSavingsPlansOfferingRatesRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<DescribeSavingsPlansOfferingRatesResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSavingsPlansOfferingRates",
}));

export type DescribeSavingsPlansOfferingsError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Describes the offerings for the specified Savings Plans.
 */
export const describeSavingsPlansOfferings: API.OperationMethod<
  DescribeSavingsPlansOfferingsRequest,
  DescribeSavingsPlansOfferingsResponse,
  DescribeSavingsPlansOfferingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29, __c3, 5) as any as S.Schema<DescribeSavingsPlansOfferingsRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<DescribeSavingsPlansOfferingsResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSavingsPlansOfferings",
}));

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags for the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(36, __c4, 4) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ReturnSavingsPlanError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Returns the specified Savings Plan.
 */
export const returnSavingsPlan: API.OperationMethod<
  ReturnSavingsPlanRequest,
  ReturnSavingsPlanResponse,
  ReturnSavingsPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<ReturnSavingsPlanRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<ReturnSavingsPlanResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReturnSavingsPlan",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Adds the specified tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<UntagResourceRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          savingsPlanOfferingId: S.String,
          commitment: S.String,
          upfrontPaymentAmount: S.optional(S.String),
          purchaseTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateSavingsPlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSavingsPlanRequest" });
    case 2:
      return S.suspend(() => S.Struct({ savingsPlanId: S.optional(S.String) })).annotate({
        identifier: "CreateSavingsPlanResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ savingsPlanId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteQueuedSavingsPlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteQueuedSavingsPlanRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteQueuedSavingsPlanResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          values: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "SavingsPlanRateFilter" });
    case 7:
      return S.Array(__S(6, __c0, 6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          savingsPlanId: S.String,
          filters: S.optional(__S(7, __c0, 7)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeSavingsPlanRates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSavingsPlanRatesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "SavingsPlanRateProperty" });
    case 2:
      return S.Array(__S(9, __c1, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          rate: S.optional(S.String),
          currency: S.optional(S.String),
          unit: S.optional(S.String),
          productType: S.optional(S.String),
          serviceCode: S.optional(S.String),
          usageType: S.optional(S.String),
          operation: S.optional(S.String),
          properties: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "SavingsPlanRate" });
    case 4:
      return S.Array(__S(11, __c1, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          savingsPlanId: S.optional(S.String),
          searchResults: S.optional(__S(12, __c1, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeSavingsPlanRatesResponse",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          savingsPlanArns: S.optional(__S(5, __c0, 5)),
          savingsPlanIds: S.optional(__S(5, __c0, 5)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          states: S.optional(__S(14, __c1, 6)),
          filters: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeSavingsPlans" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSavingsPlansRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          offeringId: S.optional(S.String),
          savingsPlanId: S.optional(S.String),
          savingsPlanArn: S.optional(S.String),
          description: S.optional(S.String),
          start: S.optional(S.String),
          end: S.optional(S.String),
          state: S.optional(S.String),
          region: S.optional(S.String),
          ec2InstanceFamily: S.optional(S.String),
          savingsPlanType: S.optional(S.String),
          paymentOption: S.optional(S.String),
          productTypes: S.optional(__S(14, __c1, 6)),
          currency: S.optional(S.String),
          commitment: S.optional(S.String),
          upfrontPaymentAmount: S.optional(S.String),
          recurringPaymentAmount: S.optional(S.String),
          termDurationInSeconds: S.optional(S.Number),
          tags: S.optional(__S(0, __c0, 0)),
          returnableUntil: S.optional(S.String),
        }),
      ).annotate({ identifier: "SavingsPlan" });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ savingsPlans: S.optional(__S(17, __c2, 1)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeSavingsPlansResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          values: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "SavingsPlanOfferingRateFilterElement",
      });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          savingsPlanOfferingIds: S.optional(__S(5, __c0, 5)),
          savingsPlanPaymentOptions: S.optional(__S(14, __c1, 6)),
          savingsPlanTypes: S.optional(__S(14, __c1, 6)),
          products: S.optional(__S(14, __c1, 6)),
          serviceCodes: S.optional(__S(14, __c1, 6)),
          usageTypes: S.optional(__S(5, __c0, 5)),
          operations: S.optional(__S(5, __c0, 5)),
          filters: S.optional(__S(20, __c2, 4)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeSavingsPlansOfferingRates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSavingsPlansOfferingRatesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          offeringId: S.optional(S.String),
          paymentOption: S.optional(S.String),
          planType: S.optional(S.String),
          durationSeconds: S.optional(S.Number),
          currency: S.optional(S.String),
          planDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ParentSavingsPlanOffering",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "SavingsPlanOfferingRateProperty",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23, __c2, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          savingsPlanOffering: S.optional(__S(22, __c2, 6)),
          rate: S.optional(S.String),
          unit: S.optional(S.String),
          productType: S.optional(S.String),
          serviceCode: S.optional(S.String),
          usageType: S.optional(S.String),
          operation: S.optional(S.String),
          properties: S.optional(__S(24, __c3, 0)),
        }),
      ).annotate({ identifier: "SavingsPlanOfferingRate" });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          searchResults: S.optional(__S(26, __c3, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeSavingsPlansOfferingRatesResponse",
      });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({
          offeringIds: S.optional(__S(5, __c0, 5)),
          paymentOptions: S.optional(__S(14, __c1, 6)),
          productType: S.optional(S.String),
          planTypes: S.optional(__S(14, __c1, 6)),
          durations: S.optional(__S(28, __c3, 4)),
          currencies: S.optional(__S(14, __c1, 6)),
          descriptions: S.optional(__S(5, __c0, 5)),
          serviceCodes: S.optional(__S(5, __c0, 5)),
          usageTypes: S.optional(__S(5, __c0, 5)),
          operations: S.optional(__S(5, __c0, 5)),
          filters: S.optional(__S(20, __c2, 4)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeSavingsPlansOfferings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSavingsPlansOfferingsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "SavingsPlanOfferingProperty",
      });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          offeringId: S.optional(S.String),
          productTypes: S.optional(__S(14, __c1, 6)),
          planType: S.optional(S.String),
          description: S.optional(S.String),
          paymentOption: S.optional(S.String),
          durationSeconds: S.optional(S.Number),
          currency: S.optional(S.String),
          serviceCode: S.optional(S.String),
          usageType: S.optional(S.String),
          operation: S.optional(S.String),
          properties: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({ identifier: "SavingsPlanOffering" });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          searchResults: S.optional(__S(33, __c4, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeSavingsPlansOfferingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTagsForResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(0, __c0, 0)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          savingsPlanId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ReturnSavingsPlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ReturnSavingsPlanRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(0, __c0, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: __S(5, __c0, 5) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
