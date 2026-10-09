import * as API from "@distilled.cloud/core/api";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
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
const TagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export interface CreateSavingsPlanRequest {
  savingsPlanOfferingId: string;
  commitment: string;
  upfrontPaymentAmount?: string;
  purchaseTime?: Date;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateSavingsPlanRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    savingsPlanOfferingId: S.String,
    commitment: S.String,
    upfrontPaymentAmount: S.optional(S.String),
    purchaseTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(TagMap),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/CreateSavingsPlan" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "CreateSavingsPlanRequest" }) as any as S.Schema<CreateSavingsPlanRequest>;
export type SavingsPlanId = string;
export interface CreateSavingsPlanResponse {
  savingsPlanId?: string;
}
const CreateSavingsPlanResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ savingsPlanId: S.optional(S.String) }),
).annotate({
  identifier: "CreateSavingsPlanResponse",
}) as any as S.Schema<CreateSavingsPlanResponse>;
export interface DeleteQueuedSavingsPlanRequest {
  savingsPlanId: string;
}
const DeleteQueuedSavingsPlanRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<DeleteQueuedSavingsPlanRequest>;
export interface DeleteQueuedSavingsPlanResponse {}
const DeleteQueuedSavingsPlanResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "DeleteQueuedSavingsPlanResponse",
}) as any as S.Schema<DeleteQueuedSavingsPlanResponse>;
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
const SavingsPlanRateFilterName = S.String;

export type ListOfStrings = string[];
const ListOfStrings = /*@__PURE__*/ S.Array(S.String);
export interface SavingsPlanRateFilter {
  name?: SavingsPlanRateFilterName;
  values?: string[];
}
const SavingsPlanRateFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(SavingsPlanRateFilterName), values: S.optional(ListOfStrings) }),
).annotate({ identifier: "SavingsPlanRateFilter" }) as any as S.Schema<SavingsPlanRateFilter>;
export type SavingsPlanRateFilterList = SavingsPlanRateFilter[];
const SavingsPlanRateFilterList = /*@__PURE__*/ S.Array(SavingsPlanRateFilter);
export type PaginationToken = string;
export type MaxResults = number;
export interface DescribeSavingsPlanRatesRequest {
  savingsPlanId: string;
  filters?: SavingsPlanRateFilter[];
  nextToken?: string;
  maxResults?: number;
}
const DescribeSavingsPlanRatesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    savingsPlanId: S.String,
    filters: S.optional(SavingsPlanRateFilterList),
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
}) as any as S.Schema<DescribeSavingsPlanRatesRequest>;
export type CurrencyCode = "CNY" | "USD" | "EUR" | (string & {});
const CurrencyCode = S.String;

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
const SavingsPlanRateUnit = S.String;

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
const SavingsPlanProductType = S.String;

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
const SavingsPlanRateServiceCode = S.String;

export type SavingsPlanRateUsageType = string;
export type SavingsPlanRateOperation = string;
export type SavingsPlanRatePropertyKey =
  | "region"
  | "instanceType"
  | "instanceFamily"
  | "productDescription"
  | "tenancy"
  | (string & {});
const SavingsPlanRatePropertyKey = S.String;

export type JsonSafeFilterValueString = string;
export interface SavingsPlanRateProperty {
  name?: SavingsPlanRatePropertyKey;
  value?: string;
}
const SavingsPlanRateProperty = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(SavingsPlanRatePropertyKey), value: S.optional(S.String) }),
).annotate({ identifier: "SavingsPlanRateProperty" }) as any as S.Schema<SavingsPlanRateProperty>;
export type SavingsPlanRatePropertyList = SavingsPlanRateProperty[];
const SavingsPlanRatePropertyList = /*@__PURE__*/ S.Array(SavingsPlanRateProperty);
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
const SavingsPlanRate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    rate: S.optional(S.String),
    currency: S.optional(CurrencyCode),
    unit: S.optional(SavingsPlanRateUnit),
    productType: S.optional(SavingsPlanProductType),
    serviceCode: S.optional(SavingsPlanRateServiceCode),
    usageType: S.optional(S.String),
    operation: S.optional(S.String),
    properties: S.optional(SavingsPlanRatePropertyList),
  }),
).annotate({ identifier: "SavingsPlanRate" }) as any as S.Schema<SavingsPlanRate>;
export type SavingsPlanRateList = SavingsPlanRate[];
const SavingsPlanRateList = /*@__PURE__*/ S.Array(SavingsPlanRate);
export interface DescribeSavingsPlanRatesResponse {
  savingsPlanId?: string;
  searchResults?: SavingsPlanRate[];
  nextToken?: string;
}
const DescribeSavingsPlanRatesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    savingsPlanId: S.optional(S.String),
    searchResults: S.optional(SavingsPlanRateList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "DescribeSavingsPlanRatesResponse",
}) as any as S.Schema<DescribeSavingsPlanRatesResponse>;
export type SavingsPlanArn = string;
export type SavingsPlanArnList = string[];
const SavingsPlanArnList = ListOfStrings as any as S.Schema<SavingsPlanArnList>;
export type SavingsPlanIdList = string[];
const SavingsPlanIdList = ListOfStrings as any as S.Schema<SavingsPlanIdList>;
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
const SavingsPlanState = S.String;

export type SavingsPlanStateList = SavingsPlanState[];
const SavingsPlanStateList = /*@__PURE__*/ S.Array(SavingsPlanState);
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
const SavingsPlanFilterList = SavingsPlanRateFilterList as any as S.Schema<SavingsPlanFilterList>;
export interface DescribeSavingsPlansRequest {
  savingsPlanArns?: string[];
  savingsPlanIds?: string[];
  nextToken?: string;
  maxResults?: number;
  states?: SavingsPlanState[];
  filters?: SavingsPlanFilter[];
}
const DescribeSavingsPlansRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    savingsPlanArns: S.optional(SavingsPlanArnList),
    savingsPlanIds: S.optional(SavingsPlanIdList),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    states: S.optional(SavingsPlanStateList),
    filters: S.optional(SavingsPlanFilterList),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/DescribeSavingsPlans" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DescribeSavingsPlansRequest",
}) as any as S.Schema<DescribeSavingsPlansRequest>;
export type Region = string;
export type EC2InstanceFamily = string;
export type SavingsPlanType = "Compute" | "EC2Instance" | "SageMaker" | "Database" | (string & {});
const SavingsPlanType = S.String;

export type SavingsPlanPaymentOption =
  | "All Upfront"
  | "Partial Upfront"
  | "No Upfront"
  | (string & {});
const SavingsPlanPaymentOption = S.String;

export type SavingsPlanProductTypeList = SavingsPlanProductType[];
const SavingsPlanProductTypeList =
  SavingsPlanStateList as any as S.Schema<SavingsPlanProductTypeList>;
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
const SavingsPlan = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    offeringId: S.optional(S.String),
    savingsPlanId: S.optional(S.String),
    savingsPlanArn: S.optional(S.String),
    description: S.optional(S.String),
    start: S.optional(S.String),
    end: S.optional(S.String),
    state: S.optional(SavingsPlanState),
    region: S.optional(S.String),
    ec2InstanceFamily: S.optional(S.String),
    savingsPlanType: S.optional(SavingsPlanType),
    paymentOption: S.optional(SavingsPlanPaymentOption),
    productTypes: S.optional(SavingsPlanProductTypeList),
    currency: S.optional(CurrencyCode),
    commitment: S.optional(S.String),
    upfrontPaymentAmount: S.optional(S.String),
    recurringPaymentAmount: S.optional(S.String),
    termDurationInSeconds: S.optional(S.Number),
    tags: S.optional(TagMap),
    returnableUntil: S.optional(S.String),
  }),
).annotate({ identifier: "SavingsPlan" }) as any as S.Schema<SavingsPlan>;
export type SavingsPlanList = SavingsPlan[];
const SavingsPlanList = /*@__PURE__*/ S.Array(SavingsPlan);
export interface DescribeSavingsPlansResponse {
  savingsPlans?: SavingsPlan[];
  nextToken?: string;
}
const DescribeSavingsPlansResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ savingsPlans: S.optional(SavingsPlanList), nextToken: S.optional(S.String) }),
).annotate({
  identifier: "DescribeSavingsPlansResponse",
}) as any as S.Schema<DescribeSavingsPlansResponse>;
export type UUID = string;
export type UUIDs = string[];
const UUIDs = ListOfStrings as any as S.Schema<UUIDs>;
export type SavingsPlanPaymentOptionList = SavingsPlanPaymentOption[];
const SavingsPlanPaymentOptionList =
  SavingsPlanStateList as any as S.Schema<SavingsPlanPaymentOptionList>;
export type SavingsPlanTypeList = SavingsPlanType[];
const SavingsPlanTypeList = SavingsPlanStateList as any as S.Schema<SavingsPlanTypeList>;
export type SavingsPlanRateServiceCodeList = SavingsPlanRateServiceCode[];
const SavingsPlanRateServiceCodeList =
  SavingsPlanStateList as any as S.Schema<SavingsPlanRateServiceCodeList>;
export type SavingsPlanRateUsageTypeList = string[];
const SavingsPlanRateUsageTypeList = ListOfStrings as any as S.Schema<SavingsPlanRateUsageTypeList>;
export type SavingsPlanRateOperationList = string[];
const SavingsPlanRateOperationList = ListOfStrings as any as S.Schema<SavingsPlanRateOperationList>;
export type SavingsPlanRateFilterAttribute =
  | "region"
  | "instanceFamily"
  | "instanceType"
  | "productDescription"
  | "tenancy"
  | "productId"
  | (string & {});
const SavingsPlanRateFilterAttribute = S.String;

export type FilterValuesList = string[];
const FilterValuesList = ListOfStrings as any as S.Schema<FilterValuesList>;
export interface SavingsPlanOfferingRateFilterElement {
  name?: SavingsPlanRateFilterAttribute;
  values?: string[];
}
const SavingsPlanOfferingRateFilterElement = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.optional(SavingsPlanRateFilterAttribute),
    values: S.optional(FilterValuesList),
  }),
).annotate({
  identifier: "SavingsPlanOfferingRateFilterElement",
}) as any as S.Schema<SavingsPlanOfferingRateFilterElement>;
export type SavingsPlanOfferingRateFiltersList = SavingsPlanOfferingRateFilterElement[];
const SavingsPlanOfferingRateFiltersList = /*@__PURE__*/ S.Array(
  SavingsPlanOfferingRateFilterElement,
);
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
const DescribeSavingsPlansOfferingRatesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    savingsPlanOfferingIds: S.optional(UUIDs),
    savingsPlanPaymentOptions: S.optional(SavingsPlanPaymentOptionList),
    savingsPlanTypes: S.optional(SavingsPlanTypeList),
    products: S.optional(SavingsPlanProductTypeList),
    serviceCodes: S.optional(SavingsPlanRateServiceCodeList),
    usageTypes: S.optional(SavingsPlanRateUsageTypeList),
    operations: S.optional(SavingsPlanRateOperationList),
    filters: S.optional(SavingsPlanOfferingRateFiltersList),
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
}) as any as S.Schema<DescribeSavingsPlansOfferingRatesRequest>;
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
const ParentSavingsPlanOffering = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    offeringId: S.optional(S.String),
    paymentOption: S.optional(SavingsPlanPaymentOption),
    planType: S.optional(SavingsPlanType),
    durationSeconds: S.optional(S.Number),
    currency: S.optional(CurrencyCode),
    planDescription: S.optional(S.String),
  }),
).annotate({
  identifier: "ParentSavingsPlanOffering",
}) as any as S.Schema<ParentSavingsPlanOffering>;
export type SavingsPlanRatePricePerUnit = string;
export interface SavingsPlanOfferingRateProperty {
  name?: string;
  value?: string;
}
const SavingsPlanOfferingRateProperty = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
).annotate({
  identifier: "SavingsPlanOfferingRateProperty",
}) as any as S.Schema<SavingsPlanOfferingRateProperty>;
export type SavingsPlanOfferingRatePropertyList = SavingsPlanOfferingRateProperty[];
const SavingsPlanOfferingRatePropertyList = /*@__PURE__*/ S.Array(SavingsPlanOfferingRateProperty);
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
const SavingsPlanOfferingRate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    savingsPlanOffering: S.optional(ParentSavingsPlanOffering),
    rate: S.optional(S.String),
    unit: S.optional(SavingsPlanRateUnit),
    productType: S.optional(SavingsPlanProductType),
    serviceCode: S.optional(SavingsPlanRateServiceCode),
    usageType: S.optional(S.String),
    operation: S.optional(S.String),
    properties: S.optional(SavingsPlanOfferingRatePropertyList),
  }),
).annotate({ identifier: "SavingsPlanOfferingRate" }) as any as S.Schema<SavingsPlanOfferingRate>;
export type SavingsPlanOfferingRatesList = SavingsPlanOfferingRate[];
const SavingsPlanOfferingRatesList = /*@__PURE__*/ S.Array(SavingsPlanOfferingRate);
export interface DescribeSavingsPlansOfferingRatesResponse {
  searchResults?: SavingsPlanOfferingRate[];
  nextToken?: string;
}
const DescribeSavingsPlansOfferingRatesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    searchResults: S.optional(SavingsPlanOfferingRatesList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "DescribeSavingsPlansOfferingRatesResponse",
}) as any as S.Schema<DescribeSavingsPlansOfferingRatesResponse>;
export type DurationsList = number[];
const DurationsList = /*@__PURE__*/ S.Array(S.Number);
export type CurrencyList = CurrencyCode[];
const CurrencyList = SavingsPlanStateList as any as S.Schema<CurrencyList>;
export type SavingsPlanDescriptionsList = string[];
const SavingsPlanDescriptionsList = ListOfStrings as any as S.Schema<SavingsPlanDescriptionsList>;
export type SavingsPlanServiceCode = string;
export type SavingsPlanServiceCodeList = string[];
const SavingsPlanServiceCodeList = ListOfStrings as any as S.Schema<SavingsPlanServiceCodeList>;
export type SavingsPlanUsageType = string;
export type SavingsPlanUsageTypeList = string[];
const SavingsPlanUsageTypeList = ListOfStrings as any as S.Schema<SavingsPlanUsageTypeList>;
export type SavingsPlanOperation = string;
export type SavingsPlanOperationList = string[];
const SavingsPlanOperationList = ListOfStrings as any as S.Schema<SavingsPlanOperationList>;
export type SavingsPlanOfferingFilterAttribute = "region" | "instanceFamily" | (string & {});
export interface SavingsPlanOfferingFilterElement {
  name?: SavingsPlanOfferingFilterAttribute;
  values?: string[];
}
export type SavingsPlanOfferingFiltersList = SavingsPlanOfferingFilterElement[];
const SavingsPlanOfferingFiltersList =
  SavingsPlanOfferingRateFiltersList as any as S.Schema<SavingsPlanOfferingFiltersList>;
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
const DescribeSavingsPlansOfferingsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    offeringIds: S.optional(UUIDs),
    paymentOptions: S.optional(SavingsPlanPaymentOptionList),
    productType: S.optional(SavingsPlanProductType),
    planTypes: S.optional(SavingsPlanTypeList),
    durations: S.optional(DurationsList),
    currencies: S.optional(CurrencyList),
    descriptions: S.optional(SavingsPlanDescriptionsList),
    serviceCodes: S.optional(SavingsPlanServiceCodeList),
    usageTypes: S.optional(SavingsPlanUsageTypeList),
    operations: S.optional(SavingsPlanOperationList),
    filters: S.optional(SavingsPlanOfferingFiltersList),
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
}) as any as S.Schema<DescribeSavingsPlansOfferingsRequest>;
export type SavingsPlanOfferingPropertyKey = "region" | "instanceFamily" | (string & {});
const SavingsPlanOfferingPropertyKey = S.String;

export interface SavingsPlanOfferingProperty {
  name?: SavingsPlanOfferingPropertyKey;
  value?: string;
}
const SavingsPlanOfferingProperty = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(SavingsPlanOfferingPropertyKey), value: S.optional(S.String) }),
).annotate({
  identifier: "SavingsPlanOfferingProperty",
}) as any as S.Schema<SavingsPlanOfferingProperty>;
export type SavingsPlanOfferingPropertyList = SavingsPlanOfferingProperty[];
const SavingsPlanOfferingPropertyList = /*@__PURE__*/ S.Array(SavingsPlanOfferingProperty);
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
const SavingsPlanOffering = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    offeringId: S.optional(S.String),
    productTypes: S.optional(SavingsPlanProductTypeList),
    planType: S.optional(SavingsPlanType),
    description: S.optional(S.String),
    paymentOption: S.optional(SavingsPlanPaymentOption),
    durationSeconds: S.optional(S.Number),
    currency: S.optional(CurrencyCode),
    serviceCode: S.optional(S.String),
    usageType: S.optional(S.String),
    operation: S.optional(S.String),
    properties: S.optional(SavingsPlanOfferingPropertyList),
  }),
).annotate({ identifier: "SavingsPlanOffering" }) as any as S.Schema<SavingsPlanOffering>;
export type SavingsPlanOfferingsList = SavingsPlanOffering[];
const SavingsPlanOfferingsList = /*@__PURE__*/ S.Array(SavingsPlanOffering);
export interface DescribeSavingsPlansOfferingsResponse {
  searchResults?: SavingsPlanOffering[];
  nextToken?: string;
}
const DescribeSavingsPlansOfferingsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    searchResults: S.optional(SavingsPlanOfferingsList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "DescribeSavingsPlansOfferingsResponse",
}) as any as S.Schema<DescribeSavingsPlansOfferingsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/ListTagsForResource" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tags: S.optional(TagMap) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export interface ReturnSavingsPlanRequest {
  savingsPlanId: string;
  clientToken?: string;
}
const ReturnSavingsPlanRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    savingsPlanId: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/ReturnSavingsPlan" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "ReturnSavingsPlanRequest" }) as any as S.Schema<ReturnSavingsPlanRequest>;
export interface ReturnSavingsPlanResponse {
  savingsPlanId?: string;
}
const ReturnSavingsPlanResponse =
  CreateSavingsPlanResponse as any as S.Schema<ReturnSavingsPlanResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String, tags: TagMap }).pipe(
    T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "TagResourceResponse",
}) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = ListOfStrings as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
    T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
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
  input: CreateSavingsPlanRequest,
  output: CreateSavingsPlanResponse,
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
  input: DeleteQueuedSavingsPlanRequest,
  output: DeleteQueuedSavingsPlanResponse,
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
  input: DescribeSavingsPlanRatesRequest,
  output: DescribeSavingsPlanRatesResponse,
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
  input: DescribeSavingsPlansRequest,
  output: DescribeSavingsPlansResponse,
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
  input: DescribeSavingsPlansOfferingRatesRequest,
  output: DescribeSavingsPlansOfferingRatesResponse,
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
  input: DescribeSavingsPlansOfferingsRequest,
  output: DescribeSavingsPlansOfferingsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ReturnSavingsPlanRequest,
  output: ReturnSavingsPlanResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));
