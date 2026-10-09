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
  sdkId: "Cost Explorer",
  serviceShapeName: "AWSInsightsIndexService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ce" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-10-25");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "eusc-de-east-1" }] });
  const _p1 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
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
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            "https://ce.us-east-1.api.aws",
            { authSchemes: [{ name: "sigv4", signingRegion: "us-east-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(
            "https://ce.cn-northwest-1.api.amazonwebservices.com.cn",
            { authSchemes: [{ name: "sigv4", signingRegion: "cn-northwest-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(
            "https://ce.us-iso-east-1.c2s.ic.gov",
            { authSchemes: [{ name: "sigv4", signingRegion: "us-iso-east-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(
            "https://ce.us-isob-east-1.sc2s.sgov.gov",
            { authSchemes: [{ name: "sigv4", signingRegion: "us-isob-east-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(
            "https://ce.eu-isoe-west-1.cloud.adc-e.uk",
            { authSchemes: [{ name: "sigv4", signingRegion: "eu-isoe-west-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(
            "https://ce.us-isof-south-1.csp.hci.ic.gov",
            { authSchemes: [{ name: "sigv4", signingRegion: "us-isof-south-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://ce.eusc-de-east-1.api.amazonwebservices.eu", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://ce.eusc-de-east-1.api.amazonwebservices.eu", _p0(), {});
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://ce-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://ce-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://ce.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://ce.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          _p1(PartitionResult),
          {},
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AnalysisNotFoundException
  extends /*@__PURE__*/ S.TaggedError<AnalysisNotFoundException>()(
    "AnalysisNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class AnomalyMonitorAlreadyExists
  extends /*@__PURE__*/ S.TaggedError<AnomalyMonitorAlreadyExists>()(
    "AnomalyMonitorAlreadyExists",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationException",
      message: { includes: "same monitor name as an existing monitor" },
    }),
  ).pipe(C.withAlreadyExistsError, C.withConflictError) {}
export class AnomalySubscriptionAlreadyExists
  extends /*@__PURE__*/ S.TaggedError<AnomalySubscriptionAlreadyExists>()(
    "AnomalySubscriptionAlreadyExists",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationException",
      message: { includes: "same subscription name as an existing subscription" },
    }),
  ).pipe(C.withAlreadyExistsError, C.withConflictError) {}
export class BackfillLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<BackfillLimitExceededException>()(
    "BackfillLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class BillExpirationException
  extends /*@__PURE__*/ S.TaggedError<BillExpirationException>()("BillExpirationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class BillingViewHealthStatusException
  extends /*@__PURE__*/ S.TaggedError<BillingViewHealthStatusException>()(
    "BillingViewHealthStatusException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class DataUnavailableException
  extends /*@__PURE__*/ S.TaggedError<DataUnavailableException>()("DataUnavailableException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class GenerationExistsException
  extends /*@__PURE__*/ S.TaggedError<GenerationExistsException>()(
    "GenerationExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class RequestChangedException
  extends /*@__PURE__*/ S.TaggedError<RequestChangedException>()("RequestChangedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class RightsizingRecommendationNotEnabled
  extends /*@__PURE__*/ S.TaggedError<RightsizingRecommendationNotEnabled>()(
    "RightsizingRecommendationNotEnabled",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "AccessDeniedException",
      message: { includes: "opt-in only feature" },
    }),
  ) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnknownMonitorException
  extends /*@__PURE__*/ S.TaggedError<UnknownMonitorException>()(
    "UnknownMonitorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class UnknownSubscriptionException
  extends /*@__PURE__*/ S.TaggedError<UnknownSubscriptionException>()(
    "UnknownSubscriptionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class UnresolvableUsageUnitException
  extends /*@__PURE__*/ S.TaggedError<UnresolvableUsageUnitException>()(
    "UnresolvableUsageUnitException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export type YearMonthDay = string;
export type MonitorType = "DIMENSIONAL" | "CUSTOM" | (string & {});
const MonitorType = S.String;

export type MonitorDimension =
  | "SERVICE"
  | "LINKED_ACCOUNT"
  | "TAG"
  | "COST_CATEGORY"
  | (string & {});
const MonitorDimension = S.String;

export type Expressions = Expression[];
const Expressions = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Expressions>;
export type Dimension =
  | "AZ"
  | "INSTANCE_TYPE"
  | "LINKED_ACCOUNT"
  | "PAYER_ACCOUNT"
  | "LINKED_ACCOUNT_NAME"
  | "OPERATION"
  | "PURCHASE_TYPE"
  | "REGION"
  | "SERVICE"
  | "SERVICE_CODE"
  | "USAGE_TYPE"
  | "USAGE_TYPE_GROUP"
  | "RECORD_TYPE"
  | "OPERATING_SYSTEM"
  | "TENANCY"
  | "SCOPE"
  | "PLATFORM"
  | "SUBSCRIPTION_ID"
  | "LEGAL_ENTITY_NAME"
  | "DEPLOYMENT_OPTION"
  | "DATABASE_ENGINE"
  | "CACHE_ENGINE"
  | "INSTANCE_TYPE_FAMILY"
  | "BILLING_ENTITY"
  | "RESERVATION_ID"
  | "RESOURCE_ID"
  | "RIGHTSIZING_TYPE"
  | "SAVINGS_PLANS_TYPE"
  | "SAVINGS_PLAN_ARN"
  | "PAYMENT_OPTION"
  | "AGREEMENT_END_DATE_TIME_AFTER"
  | "AGREEMENT_END_DATE_TIME_BEFORE"
  | "INVOICING_ENTITY"
  | "ANOMALY_TOTAL_IMPACT_ABSOLUTE"
  | "ANOMALY_TOTAL_IMPACT_PERCENTAGE"
  | (string & {});
const Dimension = S.String;

export type Value = string;
export type Values = string[];
const Values = /*@__PURE__*/ __L.at(__c0, 1);
export type MatchOption =
  | "EQUALS"
  | "ABSENT"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "CASE_SENSITIVE"
  | "CASE_INSENSITIVE"
  | "GREATER_THAN_OR_EQUAL"
  | (string & {});
const MatchOption = S.String;

export type MatchOptions = MatchOption[];
const MatchOptions = /*@__PURE__*/ __L.at(__c0, 2);
export interface DimensionValues {
  Key?: Dimension;
  Values?: string[];
  MatchOptions?: MatchOption[];
}
const DimensionValues = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<DimensionValues>;
export type TagKey = string;
export interface TagValues {
  Key?: string;
  Values?: string[];
  MatchOptions?: MatchOption[];
}
const TagValues = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<TagValues>;
export type CostCategoryName = string;
export interface CostCategoryValues {
  Key?: string;
  Values?: string[];
  MatchOptions?: MatchOption[];
}
const CostCategoryValues = TagValues as any as S.Schema<CostCategoryValues>;
export interface Expression {
  Or?: Expression[];
  And?: Expression[];
  Not?: Expression;
  Dimensions?: DimensionValues;
  Tags?: TagValues;
  CostCategories?: CostCategoryValues;
}
const Expression = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Expression>;
export type NonNegativeInteger = number;
export interface AnomalyMonitor {
  MonitorArn?: string;
  MonitorName: string;
  CreationDate?: string;
  LastUpdatedDate?: string;
  LastEvaluatedDate?: string;
  MonitorType: MonitorType;
  MonitorDimension?: MonitorDimension;
  MonitorSpecification?: Expression;
  DimensionalValueCount?: number;
}
const AnomalyMonitor = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<AnomalyMonitor>;
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export interface ResourceTag {
  Key: string;
  Value: string;
}
const ResourceTag = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<ResourceTag>;
export type ResourceTagList = ResourceTag[];
const ResourceTagList = /*@__PURE__*/ __L.at(__c1, 0);
export interface CreateAnomalyMonitorRequest {
  AnomalyMonitor: AnomalyMonitor;
  ResourceTags?: ResourceTag[];
}
const CreateAnomalyMonitorRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateAnomalyMonitorRequest>;
export interface CreateAnomalyMonitorResponse {
  MonitorArn: string;
}
const CreateAnomalyMonitorResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateAnomalyMonitorResponse>;
export type Arn = string;
export type MonitorArnList = string[];
const MonitorArnList = Values as any as S.Schema<MonitorArnList>;
export type SubscriberAddress = string;
export type SubscriberType = "EMAIL" | "SNS" | (string & {});
const SubscriberType = S.String;

export type SubscriberStatus = "CONFIRMED" | "DECLINED" | (string & {});
const SubscriberStatus = S.String;

export interface Subscriber {
  Address?: string;
  Type?: SubscriberType;
  Status?: SubscriberStatus;
}
const Subscriber = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Subscriber>;
export type Subscribers = Subscriber[];
const Subscribers = /*@__PURE__*/ __L.at(__c1, 4);
export type NullableNonNegativeDouble = number;
export type AnomalySubscriptionFrequency = "DAILY" | "IMMEDIATE" | "WEEKLY" | (string & {});
const AnomalySubscriptionFrequency = S.String;

export interface AnomalySubscription {
  SubscriptionArn?: string;
  AccountId?: string;
  MonitorArnList: string[];
  Subscribers: Subscriber[];
  Threshold?: number;
  Frequency: AnomalySubscriptionFrequency;
  SubscriptionName: string;
  ThresholdExpression?: Expression;
}
const AnomalySubscription = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<AnomalySubscription>;
export interface CreateAnomalySubscriptionRequest {
  AnomalySubscription: AnomalySubscription;
  ResourceTags?: ResourceTag[];
}
const CreateAnomalySubscriptionRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateAnomalySubscriptionRequest>;
export interface CreateAnomalySubscriptionResponse {
  SubscriptionArn: string;
}
const CreateAnomalySubscriptionResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateAnomalySubscriptionResponse>;
export type ZonedDateTime = string;
export type CostCategoryRuleVersion = "CostCategoryExpression.v1" | (string & {});
const CostCategoryRuleVersion = S.String;

export type CostCategoryValue = string;
export type CostCategoryInheritedValueDimensionName = "LINKED_ACCOUNT_NAME" | "TAG" | (string & {});
const CostCategoryInheritedValueDimensionName = S.String;

export interface CostCategoryInheritedValueDimension {
  DimensionName?: CostCategoryInheritedValueDimensionName;
  DimensionKey?: string;
}
const CostCategoryInheritedValueDimension = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CostCategoryInheritedValueDimension>;
export type CostCategoryRuleType = "REGULAR" | "INHERITED_VALUE" | (string & {});
const CostCategoryRuleType = S.String;

export interface CostCategoryRule {
  Value?: string;
  Rule?: Expression;
  InheritedValue?: CostCategoryInheritedValueDimension;
  Type?: CostCategoryRuleType;
}
const CostCategoryRule = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<CostCategoryRule>;
export type CostCategoryRulesList = CostCategoryRule[];
const CostCategoryRulesList = /*@__PURE__*/ __L.at(__c2, 2);
export type CostCategorySplitChargeRuleTargetsList = string[];
const CostCategorySplitChargeRuleTargetsList =
  Values as any as S.Schema<CostCategorySplitChargeRuleTargetsList>;
export type CostCategorySplitChargeMethod = "FIXED" | "PROPORTIONAL" | "EVEN" | (string & {});
const CostCategorySplitChargeMethod = S.String;

export type CostCategorySplitChargeRuleParameterType = "ALLOCATION_PERCENTAGES" | (string & {});
const CostCategorySplitChargeRuleParameterType = S.String;

export type CostCategorySplitChargeRuleParameterValuesList = string[];
const CostCategorySplitChargeRuleParameterValuesList =
  Values as any as S.Schema<CostCategorySplitChargeRuleParameterValuesList>;
export interface CostCategorySplitChargeRuleParameter {
  Type: CostCategorySplitChargeRuleParameterType;
  Values: string[];
}
const CostCategorySplitChargeRuleParameter = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CostCategorySplitChargeRuleParameter>;
export type CostCategorySplitChargeRuleParametersList = CostCategorySplitChargeRuleParameter[];
const CostCategorySplitChargeRuleParametersList = /*@__PURE__*/ __L.at(__c2, 4);
export interface CostCategorySplitChargeRule {
  Source: string;
  Targets: string[];
  Method: CostCategorySplitChargeMethod;
  Parameters?: CostCategorySplitChargeRuleParameter[];
}
const CostCategorySplitChargeRule = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CostCategorySplitChargeRule>;
export type CostCategorySplitChargeRulesList = CostCategorySplitChargeRule[];
const CostCategorySplitChargeRulesList = /*@__PURE__*/ __L.at(__c2, 6);
export interface CreateCostCategoryDefinitionRequest {
  Name: string;
  EffectiveStart?: string;
  RuleVersion: CostCategoryRuleVersion;
  Rules: CostCategoryRule[];
  DefaultValue?: string;
  SplitChargeRules?: CostCategorySplitChargeRule[];
  ResourceTags?: ResourceTag[];
}
const CreateCostCategoryDefinitionRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateCostCategoryDefinitionRequest>;
export interface CreateCostCategoryDefinitionResponse {
  CostCategoryArn?: string;
  EffectiveStart?: string;
}
const CreateCostCategoryDefinitionResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateCostCategoryDefinitionResponse>;
export interface DeleteAnomalyMonitorRequest {
  MonitorArn: string;
}
const DeleteAnomalyMonitorRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<DeleteAnomalyMonitorRequest>;
export interface DeleteAnomalyMonitorResponse {}
const DeleteAnomalyMonitorResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DeleteAnomalyMonitorResponse>;
export interface DeleteAnomalySubscriptionRequest {
  SubscriptionArn: string;
}
const DeleteAnomalySubscriptionRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DeleteAnomalySubscriptionRequest>;
export interface DeleteAnomalySubscriptionResponse {}
const DeleteAnomalySubscriptionResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<DeleteAnomalySubscriptionResponse>;
export interface DeleteCostCategoryDefinitionRequest {
  CostCategoryArn: string;
}
const DeleteCostCategoryDefinitionRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DeleteCostCategoryDefinitionRequest>;
export interface DeleteCostCategoryDefinitionResponse {
  CostCategoryArn?: string;
  EffectiveEnd?: string;
}
const DeleteCostCategoryDefinitionResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteCostCategoryDefinitionResponse>;
export interface DescribeCostCategoryDefinitionRequest {
  CostCategoryArn: string;
  EffectiveOn?: string;
}
const DescribeCostCategoryDefinitionRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<DescribeCostCategoryDefinitionRequest>;
export type CostCategoryStatusComponent = "COST_EXPLORER" | (string & {});
const CostCategoryStatusComponent = S.String;

export type CostCategoryStatus = "PROCESSING" | "APPLIED" | (string & {});
const CostCategoryStatus = S.String;

export interface CostCategoryProcessingStatus {
  Component?: CostCategoryStatusComponent;
  Status?: CostCategoryStatus;
}
const CostCategoryProcessingStatus = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CostCategoryProcessingStatus>;
export type CostCategoryProcessingStatusList = CostCategoryProcessingStatus[];
const CostCategoryProcessingStatusList = /*@__PURE__*/ __L.at(__c4, 1);
export interface CostCategory {
  CostCategoryArn: string;
  EffectiveStart: string;
  EffectiveEnd?: string;
  Name: string;
  RuleVersion: CostCategoryRuleVersion;
  Rules: CostCategoryRule[];
  SplitChargeRules?: CostCategorySplitChargeRule[];
  ProcessingStatus?: CostCategoryProcessingStatus[];
  DefaultValue?: string;
}
const CostCategory = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<CostCategory>;
export interface DescribeCostCategoryDefinitionResponse {
  CostCategory?: CostCategory;
}
const DescribeCostCategoryDefinitionResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DescribeCostCategoryDefinitionResponse>;
export interface AnomalyDateInterval {
  StartDate: string;
  EndDate?: string;
}
const AnomalyDateInterval = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<AnomalyDateInterval>;
export type AnomalyFeedbackType = "YES" | "NO" | "PLANNED_ACTIVITY" | (string & {});
const AnomalyFeedbackType = S.String;

export type NumericOperator =
  | "EQUAL"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "BETWEEN"
  | (string & {});
const NumericOperator = S.String;

export interface TotalImpactFilter {
  NumericOperator: NumericOperator;
  StartValue: number;
  EndValue?: number;
}
const TotalImpactFilter = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<TotalImpactFilter>;
export type NextPageToken = string;
export type PageSize = number;
export interface GetAnomaliesRequest {
  MonitorArn?: string;
  DateInterval: AnomalyDateInterval;
  Feedback?: AnomalyFeedbackType;
  TotalImpact?: TotalImpactFilter;
  NextPageToken?: string;
  MaxResults?: number;
}
const GetAnomaliesRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<GetAnomaliesRequest>;
export interface RootCauseImpact {
  Contribution: number;
}
const RootCauseImpact = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<RootCauseImpact>;
export interface RootCause {
  Service?: string;
  Region?: string;
  LinkedAccount?: string;
  LinkedAccountName?: string;
  UsageType?: string;
  Impact?: RootCauseImpact;
}
const RootCause = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<RootCause>;
export type RootCauses = RootCause[];
const RootCauses = /*@__PURE__*/ __L.at(__c5, 1);
export interface AnomalyScore {
  MaxScore: number;
  CurrentScore: number;
}
const AnomalyScore = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<AnomalyScore>;
export interface Impact {
  MaxImpact: number;
  TotalImpact?: number;
  TotalActualSpend?: number;
  TotalExpectedSpend?: number;
  TotalImpactPercentage?: number;
}
const Impact = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<Impact>;
export interface Anomaly {
  AnomalyId: string;
  AnomalyStartDate?: string;
  AnomalyEndDate?: string;
  DimensionValue?: string;
  RootCauses?: RootCause[];
  AnomalyScore: AnomalyScore;
  Impact: Impact;
  MonitorArn: string;
  Feedback?: AnomalyFeedbackType;
}
const Anomaly = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<Anomaly>;
export type Anomalies = Anomaly[];
const Anomalies = /*@__PURE__*/ __L.at(__c5, 5);
export interface GetAnomaliesResponse {
  Anomalies: Anomaly[];
  NextPageToken?: string;
}
const GetAnomaliesResponse = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<GetAnomaliesResponse>;
export interface GetAnomalyMonitorsRequest {
  MonitorArnList?: string[];
  NextPageToken?: string;
  MaxResults?: number;
}
const GetAnomalyMonitorsRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<GetAnomalyMonitorsRequest>;
export type AnomalyMonitors = AnomalyMonitor[];
const AnomalyMonitors = /*@__PURE__*/ __L.at(__c6, 0);
export interface GetAnomalyMonitorsResponse {
  AnomalyMonitors: AnomalyMonitor[];
  NextPageToken?: string;
}
const GetAnomalyMonitorsResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<GetAnomalyMonitorsResponse>;
export interface GetAnomalySubscriptionsRequest {
  SubscriptionArnList?: string[];
  MonitorArn?: string;
  NextPageToken?: string;
  MaxResults?: number;
}
const GetAnomalySubscriptionsRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<GetAnomalySubscriptionsRequest>;
export type AnomalySubscriptions = AnomalySubscription[];
const AnomalySubscriptions = /*@__PURE__*/ __L.at(__c6, 3);
export interface GetAnomalySubscriptionsResponse {
  AnomalySubscriptions: AnomalySubscription[];
  NextPageToken?: string;
}
const GetAnomalySubscriptionsResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<GetAnomalySubscriptionsResponse>;
export type Granularity = "DAILY" | "MONTHLY" | "HOURLY" | (string & {});
const Granularity = S.String;

export type UsageServices = string[];
const UsageServices = Values as any as S.Schema<UsageServices>;
export type ApproximationDimension = "SERVICE" | "RESOURCE" | (string & {});
const ApproximationDimension = S.String;

export interface GetApproximateUsageRecordsRequest {
  Granularity: Granularity;
  Services?: string[];
  ApproximationDimension: ApproximationDimension;
}
const GetApproximateUsageRecordsRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<GetApproximateUsageRecordsRequest>;
export type NonNegativeLong = number;
export type ApproximateUsageRecordsPerService = { [key: string]: number | undefined };
const ApproximateUsageRecordsPerService = /*@__PURE__*/ __L.at(__c6, 6);
export interface DateInterval {
  Start: string;
  End: string;
}
const DateInterval = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<DateInterval>;
export interface GetApproximateUsageRecordsResponse {
  Services?: { [key: string]: number | undefined };
  TotalRecords?: number;
  LookbackPeriod?: DateInterval;
}
const GetApproximateUsageRecordsResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<GetApproximateUsageRecordsResponse>;
export type AnalysisId = string;
export interface GetCommitmentPurchaseAnalysisRequest {
  AnalysisId: string;
}
const GetCommitmentPurchaseAnalysisRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetCommitmentPurchaseAnalysisRequest>;
export type AnalysisStatus = "SUCCEEDED" | "PROCESSING" | "FAILED" | (string & {});
const AnalysisStatus = S.String;

export type ErrorCode =
  | "NO_USAGE_FOUND"
  | "INTERNAL_FAILURE"
  | "INVALID_SAVINGS_PLANS_TO_ADD"
  | "INVALID_SAVINGS_PLANS_TO_EXCLUDE"
  | "INVALID_ACCOUNT_ID"
  | (string & {});
const ErrorCode = S.String;

export interface RecommendationDetailHourlyMetrics {
  StartTime?: string;
  EstimatedOnDemandCost?: string;
  CurrentCoverage?: string;
  EstimatedCoverage?: string;
  EstimatedNewCommitmentUtilization?: string;
}
const RecommendationDetailHourlyMetrics = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<RecommendationDetailHourlyMetrics>;
export type MetricsOverLookbackPeriod = RecommendationDetailHourlyMetrics[];
const MetricsOverLookbackPeriod = /*@__PURE__*/ __L.at(__c7, 3);
export interface SavingsPlansPurchaseAnalysisDetails {
  CurrencyCode?: string;
  LookbackPeriodInHours?: string;
  CurrentAverageCoverage?: string;
  CurrentAverageHourlyOnDemandSpend?: string;
  CurrentMaximumHourlyOnDemandSpend?: string;
  CurrentMinimumHourlyOnDemandSpend?: string;
  CurrentOnDemandSpend?: string;
  ExistingHourlyCommitment?: string;
  HourlyCommitmentToPurchase?: string;
  EstimatedAverageCoverage?: string;
  EstimatedAverageUtilization?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedOnDemandCost?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
  EstimatedROI?: string;
  EstimatedSavingsAmount?: string;
  EstimatedSavingsPercentage?: string;
  EstimatedCommitmentCost?: string;
  LatestUsageTimestamp?: string;
  UpfrontCost?: string;
  AdditionalMetadata?: string;
  MetricsOverLookbackPeriod?: RecommendationDetailHourlyMetrics[];
}
const SavingsPlansPurchaseAnalysisDetails = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<SavingsPlansPurchaseAnalysisDetails>;
export interface AnalysisDetails {
  SavingsPlansPurchaseAnalysisDetails?: SavingsPlansPurchaseAnalysisDetails;
}
const AnalysisDetails = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<AnalysisDetails>;
export type AccountScope = "PAYER" | "LINKED" | (string & {});
const AccountScope = S.String;

export type AccountId = string;
export type AnalysisType =
  | "MAX_SAVINGS"
  | "CUSTOM_COMMITMENT"
  | "TARGET_AVERAGE_COVERAGE"
  | (string & {});
const AnalysisType = S.String;

export type PaymentOption =
  | "NO_UPFRONT"
  | "PARTIAL_UPFRONT"
  | "ALL_UPFRONT"
  | "LIGHT_UTILIZATION"
  | "MEDIUM_UTILIZATION"
  | "HEAVY_UTILIZATION"
  | (string & {});
const PaymentOption = S.String;

export type SupportedSavingsPlansType =
  | "COMPUTE_SP"
  | "EC2_INSTANCE_SP"
  | "SAGEMAKER_SP"
  | "DATABASE_SP"
  | (string & {});
const SupportedSavingsPlansType = S.String;

export type TermInYears = "ONE_YEAR" | "THREE_YEARS" | (string & {});
const TermInYears = S.String;

export type SavingsPlansCommitment = number;
export interface SavingsPlans {
  PaymentOption?: PaymentOption;
  SavingsPlansType?: SupportedSavingsPlansType;
  Region?: string;
  InstanceFamily?: string;
  TermInYears?: TermInYears;
  SavingsPlansCommitment?: number;
  OfferingId?: string;
}
const SavingsPlans = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<SavingsPlans>;
export type SavingsPlansToAdd = SavingsPlans[];
const SavingsPlansToAdd = /*@__PURE__*/ __L.at(__c7, 7);
export type SavingsPlansId = string;
export type SavingsPlansToExclude = string[];
const SavingsPlansToExclude = Values as any as S.Schema<SavingsPlansToExclude>;
export type SavingsPlansTargetCoverage = number;
export interface SavingsPlansPurchaseAnalysisConfiguration {
  AccountScope?: AccountScope;
  AccountId?: string;
  AnalysisType: AnalysisType;
  SavingsPlansToAdd: SavingsPlans[];
  SavingsPlansToExclude?: string[];
  LookBackTimePeriod: DateInterval;
  SavingsPlansTargetCoverage?: number;
}
const SavingsPlansPurchaseAnalysisConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<SavingsPlansPurchaseAnalysisConfiguration>;
export interface CommitmentPurchaseAnalysisConfiguration {
  SavingsPlansPurchaseAnalysisConfiguration?: SavingsPlansPurchaseAnalysisConfiguration;
}
const CommitmentPurchaseAnalysisConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<CommitmentPurchaseAnalysisConfiguration>;
export interface GetCommitmentPurchaseAnalysisResponse {
  EstimatedCompletionTime: string;
  AnalysisCompletionTime?: string;
  AnalysisStartedTime: string;
  AnalysisId: string;
  AnalysisStatus: AnalysisStatus;
  ErrorCode?: ErrorCode;
  AnalysisDetails?: AnalysisDetails;
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration;
}
const GetCommitmentPurchaseAnalysisResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetCommitmentPurchaseAnalysisResponse>;
export type MetricName = string;
export type MetricNames = string[];
const MetricNames = Values as any as S.Schema<MetricNames>;
export type GroupDefinitionType = "DIMENSION" | "TAG" | "COST_CATEGORY" | (string & {});
const GroupDefinitionType = S.String;

export type GroupDefinitionKey = string;
export interface GroupDefinition {
  Type?: GroupDefinitionType;
  Key?: string;
}
const GroupDefinition = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<GroupDefinition>;
export type GroupDefinitions = GroupDefinition[];
const GroupDefinitions = /*@__PURE__*/ __L.at(__c8, 4);
export type BillingViewArn = string;
export interface GetCostAndUsageRequest {
  TimePeriod: DateInterval;
  Granularity: Granularity;
  Filter?: Expression;
  Metrics: string[];
  GroupBy?: GroupDefinition[];
  BillingViewArn?: string;
  NextPageToken?: string;
}
const GetCostAndUsageRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<GetCostAndUsageRequest>;
export type MetricAmount = string;
export type MetricUnit = string;
export interface MetricValue {
  Amount?: string;
  Unit?: string;
}
const MetricValue = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<MetricValue>;
export type Metrics = { [key: string]: MetricValue | undefined };
const Metrics = /*@__PURE__*/ __L.at(__c8, 7);
export type Key = string;
export type Keys = string[];
const Keys = Values as any as S.Schema<Keys>;
export interface Group {
  Keys?: string[];
  Metrics?: { [key: string]: MetricValue | undefined };
}
const Group = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<Group>;
export type Groups = Group[];
const Groups = /*@__PURE__*/ __L.at(__c9, 1);
export type Estimated = boolean;
export interface ResultByTime {
  TimePeriod?: DateInterval;
  Total?: { [key: string]: MetricValue | undefined };
  Groups?: Group[];
  Estimated?: boolean;
}
const ResultByTime = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<ResultByTime>;
export type ResultsByTime = ResultByTime[];
const ResultsByTime = /*@__PURE__*/ __L.at(__c9, 3);
export type AttributeType = string;
export type AttributeValue = string;
export type Attributes = { [key: string]: string | undefined };
const Attributes = /*@__PURE__*/ __L.at(__c9, 4);
export interface DimensionValuesWithAttributes {
  Value?: string;
  Attributes?: { [key: string]: string | undefined };
}
const DimensionValuesWithAttributes = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DimensionValuesWithAttributes>;
export type DimensionValuesWithAttributesList = DimensionValuesWithAttributes[];
const DimensionValuesWithAttributesList = /*@__PURE__*/ __L.at(__c9, 6);
export interface GetCostAndUsageResponse {
  NextPageToken?: string;
  GroupDefinitions?: GroupDefinition[];
  ResultsByTime?: ResultByTime[];
  DimensionValueAttributes?: DimensionValuesWithAttributes[];
}
const GetCostAndUsageResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetCostAndUsageResponse>;
export type CostAndUsageComparisonsMaxResults = number;
export interface GetCostAndUsageComparisonsRequest {
  BillingViewArn?: string;
  BaselineTimePeriod: DateInterval;
  ComparisonTimePeriod: DateInterval;
  MetricForComparison: string;
  Filter?: Expression;
  GroupBy?: GroupDefinition[];
  MaxResults?: number;
  NextPageToken?: string;
}
const GetCostAndUsageComparisonsRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetCostAndUsageComparisonsRequest>;
export interface ComparisonMetricValue {
  BaselineTimePeriodAmount?: string;
  ComparisonTimePeriodAmount?: string;
  Difference?: string;
  Unit?: string;
}
const ComparisonMetricValue = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ComparisonMetricValue>;
export type ComparisonMetrics = { [key: string]: ComparisonMetricValue | undefined };
const ComparisonMetrics = /*@__PURE__*/ __L.at(__c10, 2);
export interface CostAndUsageComparison {
  CostAndUsageSelector?: Expression;
  Metrics?: { [key: string]: ComparisonMetricValue | undefined };
}
const CostAndUsageComparison = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<CostAndUsageComparison>;
export type CostAndUsageComparisons = CostAndUsageComparison[];
const CostAndUsageComparisons = /*@__PURE__*/ __L.at(__c10, 4);
export interface GetCostAndUsageComparisonsResponse {
  CostAndUsageComparisons?: CostAndUsageComparison[];
  TotalCostAndUsage?: { [key: string]: ComparisonMetricValue | undefined };
  NextPageToken?: string;
}
const GetCostAndUsageComparisonsResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetCostAndUsageComparisonsResponse>;
export interface GetCostAndUsageWithResourcesRequest {
  TimePeriod: DateInterval;
  Granularity: Granularity;
  Filter: Expression;
  Metrics?: string[];
  GroupBy?: GroupDefinition[];
  BillingViewArn?: string;
  NextPageToken?: string;
}
const GetCostAndUsageWithResourcesRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetCostAndUsageWithResourcesRequest>;
export interface GetCostAndUsageWithResourcesResponse {
  NextPageToken?: string;
  GroupDefinitions?: GroupDefinition[];
  ResultsByTime?: ResultByTime[];
  DimensionValueAttributes?: DimensionValuesWithAttributes[];
}
const GetCostAndUsageWithResourcesResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetCostAndUsageWithResourcesResponse>;
export type SearchString = string;
export type SortDefinitionKey = string;
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
const SortOrder = S.String;

export interface SortDefinition {
  Key: string;
  SortOrder?: SortOrder;
}
const SortDefinition = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<SortDefinition>;
export type SortDefinitions = SortDefinition[];
const SortDefinitions = /*@__PURE__*/ __L.at(__c11, 1);
export type MaxResults = number;
export interface GetCostCategoriesRequest {
  SearchString?: string;
  TimePeriod: DateInterval;
  CostCategoryName?: string;
  Filter?: Expression;
  SortBy?: SortDefinition[];
  BillingViewArn?: string;
  MaxResults?: number;
  NextPageToken?: string;
}
const GetCostCategoriesRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<GetCostCategoriesRequest>;
export type CostCategoryNamesList = string[];
const CostCategoryNamesList = Values as any as S.Schema<CostCategoryNamesList>;
export type CostCategoryValuesList = string[];
const CostCategoryValuesList = Values as any as S.Schema<CostCategoryValuesList>;
export interface GetCostCategoriesResponse {
  NextPageToken?: string;
  CostCategoryNames?: string[];
  CostCategoryValues?: string[];
  ReturnSize: number;
  TotalSize: number;
}
const GetCostCategoriesResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetCostCategoriesResponse>;
export type CostComparisonDriversMaxResults = number;
export interface GetCostComparisonDriversRequest {
  BillingViewArn?: string;
  BaselineTimePeriod: DateInterval;
  ComparisonTimePeriod: DateInterval;
  MetricForComparison: string;
  Filter?: Expression;
  GroupBy?: GroupDefinition[];
  MaxResults?: number;
  NextPageToken?: string;
}
const GetCostComparisonDriversRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetCostComparisonDriversRequest>;
export interface CostDriver {
  Type?: string;
  Name?: string;
  Metrics?: { [key: string]: ComparisonMetricValue | undefined };
}
const CostDriver = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<CostDriver>;
export type CostDrivers = CostDriver[];
const CostDrivers = /*@__PURE__*/ __L.at(__c11, 6);
export interface CostComparisonDriver {
  CostSelector?: Expression;
  Metrics?: { [key: string]: ComparisonMetricValue | undefined };
  CostDrivers?: CostDriver[];
}
const CostComparisonDriver = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<CostComparisonDriver>;
export type CostComparisonDrivers = CostComparisonDriver[];
const CostComparisonDrivers = /*@__PURE__*/ __L.at(__c12, 0);
export interface GetCostComparisonDriversResponse {
  CostComparisonDrivers?: CostComparisonDriver[];
  NextPageToken?: string;
}
const GetCostComparisonDriversResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<GetCostComparisonDriversResponse>;
export type Metric =
  | "BLENDED_COST"
  | "UNBLENDED_COST"
  | "AMORTIZED_COST"
  | "NET_UNBLENDED_COST"
  | "NET_AMORTIZED_COST"
  | "USAGE_QUANTITY"
  | "NORMALIZED_USAGE_AMOUNT"
  | (string & {});
const Metric = S.String;

export type PredictionIntervalLevel = number;
export interface GetCostForecastRequest {
  TimePeriod: DateInterval;
  Metric: Metric;
  Granularity: Granularity;
  Filter?: Expression;
  BillingViewArn?: string;
  PredictionIntervalLevel?: number;
}
const GetCostForecastRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetCostForecastRequest>;
export interface ForecastResult {
  TimePeriod?: DateInterval;
  MeanValue?: string;
  PredictionIntervalLowerBound?: string;
  PredictionIntervalUpperBound?: string;
}
const ForecastResult = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<ForecastResult>;
export type ForecastResultsByTime = ForecastResult[];
const ForecastResultsByTime = /*@__PURE__*/ __L.at(__c12, 4);
export interface GetCostForecastResponse {
  Total?: MetricValue;
  ForecastResultsByTime?: ForecastResult[];
}
const GetCostForecastResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<GetCostForecastResponse>;
export type Context = "COST_AND_USAGE" | "RESERVATIONS" | "SAVINGS_PLANS" | (string & {});
const Context = S.String;

export interface GetDimensionValuesRequest {
  SearchString?: string;
  TimePeriod: DateInterval;
  Dimension: Dimension;
  Context?: Context;
  Filter?: Expression;
  SortBy?: SortDefinition[];
  BillingViewArn?: string;
  MaxResults?: number;
  NextPageToken?: string;
}
const GetDimensionValuesRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<GetDimensionValuesRequest>;
export interface GetDimensionValuesResponse {
  DimensionValues: DimensionValuesWithAttributes[];
  ReturnSize: number;
  TotalSize: number;
  NextPageToken?: string;
}
const GetDimensionValuesResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetDimensionValuesResponse>;
export interface GetReservationCoverageRequest {
  TimePeriod: DateInterval;
  GroupBy?: GroupDefinition[];
  Granularity?: Granularity;
  Filter?: Expression;
  Metrics?: string[];
  NextPageToken?: string;
  SortBy?: SortDefinition;
  MaxResults?: number;
}
const GetReservationCoverageRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetReservationCoverageRequest>;
export type OnDemandHours = string;
export type ReservedHours = string;
export type TotalRunningHours = string;
export type CoverageHoursPercentage = string;
export interface CoverageHours {
  OnDemandHours?: string;
  ReservedHours?: string;
  TotalRunningHours?: string;
  CoverageHoursPercentage?: string;
}
const CoverageHours = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<CoverageHours>;
export type OnDemandNormalizedUnits = string;
export type ReservedNormalizedUnits = string;
export type TotalRunningNormalizedUnits = string;
export type CoverageNormalizedUnitsPercentage = string;
export interface CoverageNormalizedUnits {
  OnDemandNormalizedUnits?: string;
  ReservedNormalizedUnits?: string;
  TotalRunningNormalizedUnits?: string;
  CoverageNormalizedUnitsPercentage?: string;
}
const CoverageNormalizedUnits = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<CoverageNormalizedUnits>;
export type OnDemandCost = string;
export interface CoverageCost {
  OnDemandCost?: string;
}
const CoverageCost = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<CoverageCost>;
export interface Coverage {
  CoverageHours?: CoverageHours;
  CoverageNormalizedUnits?: CoverageNormalizedUnits;
  CoverageCost?: CoverageCost;
}
const Coverage = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<Coverage>;
export interface ReservationCoverageGroup {
  Attributes?: { [key: string]: string | undefined };
  Coverage?: Coverage;
}
const ReservationCoverageGroup = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ReservationCoverageGroup>;
export type ReservationCoverageGroups = ReservationCoverageGroup[];
const ReservationCoverageGroups = /*@__PURE__*/ __L.at(__c13, 6);
export interface CoverageByTime {
  TimePeriod?: DateInterval;
  Groups?: ReservationCoverageGroup[];
  Total?: Coverage;
}
const CoverageByTime = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<CoverageByTime>;
export type CoveragesByTime = CoverageByTime[];
const CoveragesByTime = /*@__PURE__*/ __L.at(__c14, 0);
export interface GetReservationCoverageResponse {
  CoveragesByTime: CoverageByTime[];
  Total?: Coverage;
  NextPageToken?: string;
}
const GetReservationCoverageResponse = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<GetReservationCoverageResponse>;
export type LookbackPeriodInDays = "SEVEN_DAYS" | "THIRTY_DAYS" | "SIXTY_DAYS" | (string & {});
const LookbackPeriodInDays = S.String;

export type OfferingClass = "STANDARD" | "CONVERTIBLE" | (string & {});
const OfferingClass = S.String;

export interface EC2Specification {
  OfferingClass?: OfferingClass;
}
const EC2Specification = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<EC2Specification>;
export interface ServiceSpecification {
  EC2Specification?: EC2Specification;
}
const ServiceSpecification = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ServiceSpecification>;
export type RecommendationsPageSize = number;
export interface GetReservationPurchaseRecommendationRequest {
  AccountId?: string;
  Service: string;
  Filter?: Expression;
  AccountScope?: AccountScope;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  ServiceSpecification?: ServiceSpecification;
  PageSize?: number;
  NextPageToken?: string;
}
const GetReservationPurchaseRecommendationRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<GetReservationPurchaseRecommendationRequest>;
export interface ReservationPurchaseRecommendationMetadata {
  RecommendationId?: string;
  GenerationTimestamp?: string;
  AdditionalMetadata?: string;
}
const ReservationPurchaseRecommendationMetadata = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<ReservationPurchaseRecommendationMetadata>;
export interface EC2InstanceDetails {
  Family?: string;
  InstanceType?: string;
  Region?: string;
  AvailabilityZone?: string;
  Platform?: string;
  Tenancy?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
const EC2InstanceDetails = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<EC2InstanceDetails>;
export interface RDSInstanceDetails {
  Family?: string;
  InstanceType?: string;
  Region?: string;
  DatabaseEngine?: string;
  DatabaseEdition?: string;
  DeploymentOption?: string;
  LicenseModel?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
  DeploymentModel?: string;
}
const RDSInstanceDetails = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<RDSInstanceDetails>;
export interface RedshiftInstanceDetails {
  Family?: string;
  NodeType?: string;
  Region?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
const RedshiftInstanceDetails = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<RedshiftInstanceDetails>;
export interface ElastiCacheInstanceDetails {
  Family?: string;
  NodeType?: string;
  Region?: string;
  ProductDescription?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
const ElastiCacheInstanceDetails = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ElastiCacheInstanceDetails>;
export interface ESInstanceDetails {
  InstanceClass?: string;
  InstanceSize?: string;
  Region?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
const ESInstanceDetails = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<ESInstanceDetails>;
export interface MemoryDBInstanceDetails {
  Family?: string;
  NodeType?: string;
  Region?: string;
  CurrentGeneration?: boolean;
  SizeFlexEligible?: boolean;
}
const MemoryDBInstanceDetails = RedshiftInstanceDetails as any as S.Schema<MemoryDBInstanceDetails>;
export interface InstanceDetails {
  EC2InstanceDetails?: EC2InstanceDetails;
  RDSInstanceDetails?: RDSInstanceDetails;
  RedshiftInstanceDetails?: RedshiftInstanceDetails;
  ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;
  ESInstanceDetails?: ESInstanceDetails;
  MemoryDBInstanceDetails?: MemoryDBInstanceDetails;
}
const InstanceDetails = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<InstanceDetails>;
export interface DynamoDBCapacityDetails {
  CapacityUnits?: string;
  Region?: string;
}
const DynamoDBCapacityDetails = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<DynamoDBCapacityDetails>;
export interface ReservedCapacityDetails {
  DynamoDBCapacityDetails?: DynamoDBCapacityDetails;
}
const ReservedCapacityDetails = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ReservedCapacityDetails>;
export interface ReservationPurchaseRecommendationDetail {
  AccountId?: string;
  InstanceDetails?: InstanceDetails;
  RecommendedNumberOfInstancesToPurchase?: string;
  RecommendedNormalizedUnitsToPurchase?: string;
  MinimumNumberOfInstancesUsedPerHour?: string;
  MinimumNormalizedUnitsUsedPerHour?: string;
  MaximumNumberOfInstancesUsedPerHour?: string;
  MaximumNormalizedUnitsUsedPerHour?: string;
  AverageNumberOfInstancesUsedPerHour?: string;
  AverageNormalizedUnitsUsedPerHour?: string;
  AverageUtilization?: string;
  EstimatedBreakEvenInMonths?: string;
  CurrencyCode?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedMonthlySavingsPercentage?: string;
  EstimatedMonthlyOnDemandCost?: string;
  EstimatedReservationCostForLookbackPeriod?: string;
  UpfrontCost?: string;
  RecurringStandardMonthlyCost?: string;
  ReservedCapacityDetails?: ReservedCapacityDetails;
  RecommendedNumberOfCapacityUnitsToPurchase?: string;
  MinimumNumberOfCapacityUnitsUsedPerHour?: string;
  MaximumNumberOfCapacityUnitsUsedPerHour?: string;
  AverageNumberOfCapacityUnitsUsedPerHour?: string;
}
const ReservationPurchaseRecommendationDetail = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ReservationPurchaseRecommendationDetail>;
export type ReservationPurchaseRecommendationDetails = ReservationPurchaseRecommendationDetail[];
const ReservationPurchaseRecommendationDetails = /*@__PURE__*/ __L.at(__c15, 7);
export interface ReservationPurchaseRecommendationSummary {
  TotalEstimatedMonthlySavingsAmount?: string;
  TotalEstimatedMonthlySavingsPercentage?: string;
  CurrencyCode?: string;
}
const ReservationPurchaseRecommendationSummary = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ReservationPurchaseRecommendationSummary>;
export interface ReservationPurchaseRecommendation {
  AccountScope?: AccountScope;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  ServiceSpecification?: ServiceSpecification;
  RecommendationDetails?: ReservationPurchaseRecommendationDetail[];
  RecommendationSummary?: ReservationPurchaseRecommendationSummary;
}
const ReservationPurchaseRecommendation = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ReservationPurchaseRecommendation>;
export type ReservationPurchaseRecommendations = ReservationPurchaseRecommendation[];
const ReservationPurchaseRecommendations = /*@__PURE__*/ __L.at(__c16, 2);
export interface GetReservationPurchaseRecommendationResponse {
  Metadata?: ReservationPurchaseRecommendationMetadata;
  Recommendations?: ReservationPurchaseRecommendation[];
  NextPageToken?: string;
}
const GetReservationPurchaseRecommendationResponse = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<GetReservationPurchaseRecommendationResponse>;
export interface GetReservationUtilizationRequest {
  TimePeriod: DateInterval;
  GroupBy?: GroupDefinition[];
  Granularity?: Granularity;
  Filter?: Expression;
  SortBy?: SortDefinition;
  NextPageToken?: string;
  MaxResults?: number;
}
const GetReservationUtilizationRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<GetReservationUtilizationRequest>;
export type ReservationGroupKey = string;
export type ReservationGroupValue = string;
export type UtilizationPercentage = string;
export type UtilizationPercentageInUnits = string;
export type PurchasedHours = string;
export type PurchasedUnits = string;
export type TotalActualHours = string;
export type TotalActualUnits = string;
export type UnusedHours = string;
export type UnusedUnits = string;
export type OnDemandCostOfRIHoursUsed = string;
export type NetRISavings = string;
export type TotalPotentialRISavings = string;
export type AmortizedUpfrontFee = string;
export type AmortizedRecurringFee = string;
export type TotalAmortizedFee = string;
export type RICostForUnusedHours = string;
export type RealizedSavings = string;
export type UnrealizedSavings = string;
export interface ReservationAggregates {
  UtilizationPercentage?: string;
  UtilizationPercentageInUnits?: string;
  PurchasedHours?: string;
  PurchasedUnits?: string;
  TotalActualHours?: string;
  TotalActualUnits?: string;
  UnusedHours?: string;
  UnusedUnits?: string;
  OnDemandCostOfRIHoursUsed?: string;
  NetRISavings?: string;
  TotalPotentialRISavings?: string;
  AmortizedUpfrontFee?: string;
  AmortizedRecurringFee?: string;
  TotalAmortizedFee?: string;
  RICostForUnusedHours?: string;
  RealizedSavings?: string;
  UnrealizedSavings?: string;
}
const ReservationAggregates = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ReservationAggregates>;
export interface ReservationUtilizationGroup {
  Key?: string;
  Value?: string;
  Attributes?: { [key: string]: string | undefined };
  Utilization?: ReservationAggregates;
}
const ReservationUtilizationGroup = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ReservationUtilizationGroup>;
export type ReservationUtilizationGroups = ReservationUtilizationGroup[];
const ReservationUtilizationGroups = /*@__PURE__*/ __L.at(__c16, 7);
export interface UtilizationByTime {
  TimePeriod?: DateInterval;
  Groups?: ReservationUtilizationGroup[];
  Total?: ReservationAggregates;
}
const UtilizationByTime = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<UtilizationByTime>;
export type UtilizationsByTime = UtilizationByTime[];
const UtilizationsByTime = /*@__PURE__*/ __L.at(__c17, 1);
export interface GetReservationUtilizationResponse {
  UtilizationsByTime: UtilizationByTime[];
  Total?: ReservationAggregates;
  NextPageToken?: string;
}
const GetReservationUtilizationResponse = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<GetReservationUtilizationResponse>;
export type RecommendationTarget = "SAME_INSTANCE_FAMILY" | "CROSS_INSTANCE_FAMILY" | (string & {});
const RecommendationTarget = S.String;

export interface RightsizingRecommendationConfiguration {
  RecommendationTarget: RecommendationTarget;
  BenefitsConsidered: boolean;
}
const RightsizingRecommendationConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<RightsizingRecommendationConfiguration>;
export interface GetRightsizingRecommendationRequest {
  Filter?: Expression;
  Configuration?: RightsizingRecommendationConfiguration;
  Service: string;
  PageSize?: number;
  NextPageToken?: string;
}
const GetRightsizingRecommendationRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<GetRightsizingRecommendationRequest>;
export interface RightsizingRecommendationMetadata {
  RecommendationId?: string;
  GenerationTimestamp?: string;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  AdditionalMetadata?: string;
}
const RightsizingRecommendationMetadata = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<RightsizingRecommendationMetadata>;
export interface RightsizingRecommendationSummary {
  TotalRecommendationCount?: string;
  EstimatedTotalMonthlySavingsAmount?: string;
  SavingsCurrencyCode?: string;
  SavingsPercentage?: string;
}
const RightsizingRecommendationSummary = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<RightsizingRecommendationSummary>;
export type TagValuesList = TagValues[];
const TagValuesList = /*@__PURE__*/ __L.at(__c17, 7);
export interface EC2ResourceDetails {
  HourlyOnDemandRate?: string;
  InstanceType?: string;
  Platform?: string;
  Region?: string;
  Sku?: string;
  Memory?: string;
  NetworkPerformance?: string;
  Storage?: string;
  Vcpu?: string;
}
const EC2ResourceDetails = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<EC2ResourceDetails>;
export interface ResourceDetails {
  EC2ResourceDetails?: EC2ResourceDetails;
}
const ResourceDetails = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<ResourceDetails>;
export interface EBSResourceUtilization {
  EbsReadOpsPerSecond?: string;
  EbsWriteOpsPerSecond?: string;
  EbsReadBytesPerSecond?: string;
  EbsWriteBytesPerSecond?: string;
}
const EBSResourceUtilization = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<EBSResourceUtilization>;
export interface DiskResourceUtilization {
  DiskReadOpsPerSecond?: string;
  DiskWriteOpsPerSecond?: string;
  DiskReadBytesPerSecond?: string;
  DiskWriteBytesPerSecond?: string;
}
const DiskResourceUtilization = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<DiskResourceUtilization>;
export interface NetworkResourceUtilization {
  NetworkInBytesPerSecond?: string;
  NetworkOutBytesPerSecond?: string;
  NetworkPacketsInPerSecond?: string;
  NetworkPacketsOutPerSecond?: string;
}
const NetworkResourceUtilization = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<NetworkResourceUtilization>;
export interface EC2ResourceUtilization {
  MaxCpuUtilizationPercentage?: string;
  MaxMemoryUtilizationPercentage?: string;
  MaxStorageUtilizationPercentage?: string;
  EBSResourceUtilization?: EBSResourceUtilization;
  DiskResourceUtilization?: DiskResourceUtilization;
  NetworkResourceUtilization?: NetworkResourceUtilization;
}
const EC2ResourceUtilization = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<EC2ResourceUtilization>;
export interface ResourceUtilization {
  EC2ResourceUtilization?: EC2ResourceUtilization;
}
const ResourceUtilization = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<ResourceUtilization>;
export interface CurrentInstance {
  ResourceId?: string;
  InstanceName?: string;
  Tags?: TagValues[];
  ResourceDetails?: ResourceDetails;
  ResourceUtilization?: ResourceUtilization;
  ReservationCoveredHoursInLookbackPeriod?: string;
  SavingsPlansCoveredHoursInLookbackPeriod?: string;
  OnDemandHoursInLookbackPeriod?: string;
  TotalRunningHoursInLookbackPeriod?: string;
  MonthlyCost?: string;
  CurrencyCode?: string;
}
const CurrentInstance = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<CurrentInstance>;
export type RightsizingType = "TERMINATE" | "MODIFY" | (string & {});
const RightsizingType = S.String;

export type PlatformDifference =
  | "HYPERVISOR"
  | "NETWORK_INTERFACE"
  | "STORAGE_INTERFACE"
  | "INSTANCE_STORE_AVAILABILITY"
  | "VIRTUALIZATION_TYPE"
  | (string & {});
export type PlatformDifferences = PlatformDifference[];
const PlatformDifferences = MatchOptions as any as S.Schema<PlatformDifferences>;
export interface TargetInstance {
  EstimatedMonthlyCost?: string;
  EstimatedMonthlySavings?: string;
  CurrencyCode?: string;
  DefaultTargetInstance?: boolean;
  ResourceDetails?: ResourceDetails;
  ExpectedResourceUtilization?: ResourceUtilization;
  PlatformDifferences?: PlatformDifference[];
}
const TargetInstance = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<TargetInstance>;
export type TargetInstancesList = TargetInstance[];
const TargetInstancesList = /*@__PURE__*/ __L.at(__c19, 1);
export interface ModifyRecommendationDetail {
  TargetInstances?: TargetInstance[];
}
const ModifyRecommendationDetail = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<ModifyRecommendationDetail>;
export interface TerminateRecommendationDetail {
  EstimatedMonthlySavings?: string;
  CurrencyCode?: string;
}
const TerminateRecommendationDetail = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<TerminateRecommendationDetail>;
export type FindingReasonCode =
  | "CPU_OVER_PROVISIONED"
  | "CPU_UNDER_PROVISIONED"
  | "MEMORY_OVER_PROVISIONED"
  | "MEMORY_UNDER_PROVISIONED"
  | "EBS_THROUGHPUT_OVER_PROVISIONED"
  | "EBS_THROUGHPUT_UNDER_PROVISIONED"
  | "EBS_IOPS_OVER_PROVISIONED"
  | "EBS_IOPS_UNDER_PROVISIONED"
  | "NETWORK_BANDWIDTH_OVER_PROVISIONED"
  | "NETWORK_BANDWIDTH_UNDER_PROVISIONED"
  | "NETWORK_PPS_OVER_PROVISIONED"
  | "NETWORK_PPS_UNDER_PROVISIONED"
  | "DISK_IOPS_OVER_PROVISIONED"
  | "DISK_IOPS_UNDER_PROVISIONED"
  | "DISK_THROUGHPUT_OVER_PROVISIONED"
  | "DISK_THROUGHPUT_UNDER_PROVISIONED"
  | (string & {});
export type FindingReasonCodes = FindingReasonCode[];
const FindingReasonCodes = MatchOptions as any as S.Schema<FindingReasonCodes>;
export interface RightsizingRecommendation {
  AccountId?: string;
  CurrentInstance?: CurrentInstance;
  RightsizingType?: RightsizingType;
  ModifyRecommendationDetail?: ModifyRecommendationDetail;
  TerminateRecommendationDetail?: TerminateRecommendationDetail;
  FindingReasonCodes?: FindingReasonCode[];
}
const RightsizingRecommendation = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<RightsizingRecommendation>;
export type RightsizingRecommendationList = RightsizingRecommendation[];
const RightsizingRecommendationList = /*@__PURE__*/ __L.at(__c19, 5);
export interface GetRightsizingRecommendationResponse {
  Metadata?: RightsizingRecommendationMetadata;
  Summary?: RightsizingRecommendationSummary;
  RightsizingRecommendations?: RightsizingRecommendation[];
  NextPageToken?: string;
  Configuration?: RightsizingRecommendationConfiguration;
}
const GetRightsizingRecommendationResponse = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<GetRightsizingRecommendationResponse>;
export type RecommendationDetailId = string;
export interface GetSavingsPlanPurchaseRecommendationDetailsRequest {
  RecommendationDetailId: string;
}
const GetSavingsPlanPurchaseRecommendationDetailsRequest = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<GetSavingsPlanPurchaseRecommendationDetailsRequest>;
export interface RecommendationDetailData {
  AccountScope?: AccountScope;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  SavingsPlansType?: SupportedSavingsPlansType;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  AccountId?: string;
  CurrencyCode?: string;
  InstanceFamily?: string;
  Region?: string;
  OfferingId?: string;
  GenerationTimestamp?: string;
  LatestUsageTimestamp?: string;
  CurrentAverageHourlyOnDemandSpend?: string;
  CurrentMaximumHourlyOnDemandSpend?: string;
  CurrentMinimumHourlyOnDemandSpend?: string;
  EstimatedAverageUtilization?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedOnDemandCost?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
  EstimatedROI?: string;
  EstimatedSPCost?: string;
  EstimatedSavingsAmount?: string;
  EstimatedSavingsPercentage?: string;
  ExistingHourlyCommitment?: string;
  HourlyCommitmentToPurchase?: string;
  UpfrontCost?: string;
  CurrentAverageCoverage?: string;
  EstimatedAverageCoverage?: string;
  MetricsOverLookbackPeriod?: RecommendationDetailHourlyMetrics[];
}
const RecommendationDetailData = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<RecommendationDetailData>;
export interface GetSavingsPlanPurchaseRecommendationDetailsResponse {
  RecommendationDetailId?: string;
  RecommendationDetailData?: RecommendationDetailData;
}
const GetSavingsPlanPurchaseRecommendationDetailsResponse = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<GetSavingsPlanPurchaseRecommendationDetailsResponse>;
export interface GetSavingsPlansCoverageRequest {
  TimePeriod: DateInterval;
  GroupBy?: GroupDefinition[];
  Granularity?: Granularity;
  Filter?: Expression;
  Metrics?: string[];
  NextToken?: string;
  MaxResults?: number;
  SortBy?: SortDefinition;
}
const GetSavingsPlansCoverageRequest = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<GetSavingsPlansCoverageRequest>;
export interface SavingsPlansCoverageData {
  SpendCoveredBySavingsPlans?: string;
  OnDemandCost?: string;
  TotalCost?: string;
  CoveragePercentage?: string;
}
const SavingsPlansCoverageData = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<SavingsPlansCoverageData>;
export interface SavingsPlansCoverage {
  Attributes?: { [key: string]: string | undefined };
  Coverage?: SavingsPlansCoverageData;
  TimePeriod?: DateInterval;
}
const SavingsPlansCoverage = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<SavingsPlansCoverage>;
export type SavingsPlansCoverages = SavingsPlansCoverage[];
const SavingsPlansCoverages = /*@__PURE__*/ __L.at(__c20, 5);
export interface GetSavingsPlansCoverageResponse {
  SavingsPlansCoverages: SavingsPlansCoverage[];
  NextToken?: string;
}
const GetSavingsPlansCoverageResponse = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<GetSavingsPlansCoverageResponse>;
export interface GetSavingsPlansPurchaseRecommendationRequest {
  SavingsPlansType: SupportedSavingsPlansType;
  TermInYears: TermInYears;
  PaymentOption: PaymentOption;
  AccountScope?: AccountScope;
  NextPageToken?: string;
  PageSize?: number;
  LookbackPeriodInDays: LookbackPeriodInDays;
  Filter?: Expression;
}
const GetSavingsPlansPurchaseRecommendationRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<GetSavingsPlansPurchaseRecommendationRequest>;
export interface SavingsPlansPurchaseRecommendationMetadata {
  RecommendationId?: string;
  GenerationTimestamp?: string;
  AdditionalMetadata?: string;
}
const SavingsPlansPurchaseRecommendationMetadata =
  ReservationPurchaseRecommendationMetadata as any as S.Schema<SavingsPlansPurchaseRecommendationMetadata>;
export interface SavingsPlansDetails {
  Region?: string;
  InstanceFamily?: string;
  OfferingId?: string;
}
const SavingsPlansDetails = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<SavingsPlansDetails>;
export interface SavingsPlansPurchaseRecommendationDetail {
  SavingsPlansDetails?: SavingsPlansDetails;
  AccountId?: string;
  UpfrontCost?: string;
  EstimatedROI?: string;
  CurrencyCode?: string;
  EstimatedSPCost?: string;
  EstimatedOnDemandCost?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
  EstimatedSavingsAmount?: string;
  EstimatedSavingsPercentage?: string;
  HourlyCommitmentToPurchase?: string;
  EstimatedAverageUtilization?: string;
  EstimatedMonthlySavingsAmount?: string;
  CurrentMinimumHourlyOnDemandSpend?: string;
  CurrentMaximumHourlyOnDemandSpend?: string;
  CurrentAverageHourlyOnDemandSpend?: string;
  RecommendationDetailId?: string;
}
const SavingsPlansPurchaseRecommendationDetail = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<SavingsPlansPurchaseRecommendationDetail>;
export type SavingsPlansPurchaseRecommendationDetailList =
  SavingsPlansPurchaseRecommendationDetail[];
const SavingsPlansPurchaseRecommendationDetailList = /*@__PURE__*/ __L.at(__c21, 2);
export interface SavingsPlansPurchaseRecommendationSummary {
  EstimatedROI?: string;
  CurrencyCode?: string;
  EstimatedTotalCost?: string;
  CurrentOnDemandSpend?: string;
  EstimatedSavingsAmount?: string;
  TotalRecommendationCount?: string;
  DailyCommitmentToPurchase?: string;
  HourlyCommitmentToPurchase?: string;
  EstimatedSavingsPercentage?: string;
  EstimatedMonthlySavingsAmount?: string;
  EstimatedOnDemandCostWithCurrentCommitment?: string;
}
const SavingsPlansPurchaseRecommendationSummary = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<SavingsPlansPurchaseRecommendationSummary>;
export interface SavingsPlansPurchaseRecommendation {
  AccountScope?: AccountScope;
  SavingsPlansType?: SupportedSavingsPlansType;
  TermInYears?: TermInYears;
  PaymentOption?: PaymentOption;
  LookbackPeriodInDays?: LookbackPeriodInDays;
  SavingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetail[];
  SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
}
const SavingsPlansPurchaseRecommendation = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<SavingsPlansPurchaseRecommendation>;
export interface GetSavingsPlansPurchaseRecommendationResponse {
  Metadata?: SavingsPlansPurchaseRecommendationMetadata;
  SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
  NextPageToken?: string;
}
const GetSavingsPlansPurchaseRecommendationResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<GetSavingsPlansPurchaseRecommendationResponse>;
export interface GetSavingsPlansUtilizationRequest {
  TimePeriod: DateInterval;
  Granularity?: Granularity;
  Filter?: Expression;
  SortBy?: SortDefinition;
}
const GetSavingsPlansUtilizationRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<GetSavingsPlansUtilizationRequest>;
export interface SavingsPlansUtilization {
  TotalCommitment?: string;
  UsedCommitment?: string;
  UnusedCommitment?: string;
  UtilizationPercentage?: string;
}
const SavingsPlansUtilization = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<SavingsPlansUtilization>;
export interface SavingsPlansSavings {
  NetSavings?: string;
  OnDemandCostEquivalent?: string;
}
const SavingsPlansSavings = /*@__PURE__*/ __L.at(__c22, 0) as any as S.Schema<SavingsPlansSavings>;
export interface SavingsPlansAmortizedCommitment {
  AmortizedRecurringCommitment?: string;
  AmortizedUpfrontCommitment?: string;
  TotalAmortizedCommitment?: string;
}
const SavingsPlansAmortizedCommitment = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<SavingsPlansAmortizedCommitment>;
export interface SavingsPlansUtilizationByTime {
  TimePeriod: DateInterval;
  Utilization: SavingsPlansUtilization;
  Savings?: SavingsPlansSavings;
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}
const SavingsPlansUtilizationByTime = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<SavingsPlansUtilizationByTime>;
export type SavingsPlansUtilizationsByTime = SavingsPlansUtilizationByTime[];
const SavingsPlansUtilizationsByTime = /*@__PURE__*/ __L.at(__c22, 3);
export interface SavingsPlansUtilizationAggregates {
  Utilization: SavingsPlansUtilization;
  Savings?: SavingsPlansSavings;
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}
const SavingsPlansUtilizationAggregates = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<SavingsPlansUtilizationAggregates>;
export interface GetSavingsPlansUtilizationResponse {
  SavingsPlansUtilizationsByTime?: SavingsPlansUtilizationByTime[];
  Total: SavingsPlansUtilizationAggregates;
}
const GetSavingsPlansUtilizationResponse = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<GetSavingsPlansUtilizationResponse>;
export type SavingsPlansDataType =
  | "ATTRIBUTES"
  | "UTILIZATION"
  | "AMORTIZED_COMMITMENT"
  | "SAVINGS"
  | (string & {});
export type SavingsPlansDataTypes = SavingsPlansDataType[];
const SavingsPlansDataTypes = MatchOptions as any as S.Schema<SavingsPlansDataTypes>;
export interface GetSavingsPlansUtilizationDetailsRequest {
  TimePeriod: DateInterval;
  Filter?: Expression;
  DataType?: SavingsPlansDataType[];
  NextToken?: string;
  MaxResults?: number;
  SortBy?: SortDefinition;
}
const GetSavingsPlansUtilizationDetailsRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<GetSavingsPlansUtilizationDetailsRequest>;
export type SavingsPlanArn = string;
export interface SavingsPlansUtilizationDetail {
  SavingsPlanArn?: string;
  Attributes?: { [key: string]: string | undefined };
  Utilization?: SavingsPlansUtilization;
  Savings?: SavingsPlansSavings;
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}
const SavingsPlansUtilizationDetail = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<SavingsPlansUtilizationDetail>;
export type SavingsPlansUtilizationDetails = SavingsPlansUtilizationDetail[];
const SavingsPlansUtilizationDetails = /*@__PURE__*/ __L.at(__c23, 0);
export interface GetSavingsPlansUtilizationDetailsResponse {
  SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetail[];
  Total?: SavingsPlansUtilizationAggregates;
  TimePeriod: DateInterval;
  NextToken?: string;
}
const GetSavingsPlansUtilizationDetailsResponse = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<GetSavingsPlansUtilizationDetailsResponse>;
export interface GetTagsRequest {
  SearchString?: string;
  TimePeriod: DateInterval;
  TagKey?: string;
  Filter?: Expression;
  SortBy?: SortDefinition[];
  BillingViewArn?: string;
  MaxResults?: number;
  NextPageToken?: string;
}
const GetTagsRequest = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<GetTagsRequest>;
export type Entity = string;
export type TagList = string[];
const TagList = Values as any as S.Schema<TagList>;
export interface GetTagsResponse {
  NextPageToken?: string;
  Tags: string[];
  ReturnSize: number;
  TotalSize: number;
}
const GetTagsResponse = /*@__PURE__*/ __L.at(__c23, 3) as any as S.Schema<GetTagsResponse>;
export interface GetUsageForecastRequest {
  TimePeriod: DateInterval;
  Metric: Metric;
  Granularity: Granularity;
  Filter?: Expression;
  BillingViewArn?: string;
  PredictionIntervalLevel?: number;
}
const GetUsageForecastRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<GetUsageForecastRequest>;
export interface GetUsageForecastResponse {
  Total?: MetricValue;
  ForecastResultsByTime?: ForecastResult[];
}
const GetUsageForecastResponse =
  GetCostForecastResponse as any as S.Schema<GetUsageForecastResponse>;
export type AnalysesPageSize = number;
export type AnalysisIds = string[];
const AnalysisIds = Values as any as S.Schema<AnalysisIds>;
export interface ListCommitmentPurchaseAnalysesRequest {
  AnalysisStatus?: AnalysisStatus;
  NextPageToken?: string;
  PageSize?: number;
  AnalysisIds?: string[];
}
const ListCommitmentPurchaseAnalysesRequest = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<ListCommitmentPurchaseAnalysesRequest>;
export interface AnalysisSummary {
  EstimatedCompletionTime?: string;
  AnalysisCompletionTime?: string;
  AnalysisStartedTime?: string;
  AnalysisStatus?: AnalysisStatus;
  ErrorCode?: ErrorCode;
  AnalysisId?: string;
  CommitmentPurchaseAnalysisConfiguration?: CommitmentPurchaseAnalysisConfiguration;
}
const AnalysisSummary = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<AnalysisSummary>;
export type AnalysisSummaryList = AnalysisSummary[];
const AnalysisSummaryList = /*@__PURE__*/ __L.at(__c23, 7);
export interface ListCommitmentPurchaseAnalysesResponse {
  AnalysisSummaryList?: AnalysisSummary[];
  NextPageToken?: string;
}
const ListCommitmentPurchaseAnalysesResponse = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<ListCommitmentPurchaseAnalysesResponse>;
export type CostAllocationTagsMaxResults = number;
export interface ListCostAllocationTagBackfillHistoryRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListCostAllocationTagBackfillHistoryRequest = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<ListCostAllocationTagBackfillHistoryRequest>;
export type CostAllocationTagBackfillStatus = "SUCCEEDED" | "PROCESSING" | "FAILED" | (string & {});
const CostAllocationTagBackfillStatus = S.String;

export interface CostAllocationTagBackfillRequest {
  BackfillFrom?: string;
  RequestedAt?: string;
  CompletedAt?: string;
  BackfillStatus?: CostAllocationTagBackfillStatus;
  LastUpdatedAt?: string;
}
const CostAllocationTagBackfillRequest = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<CostAllocationTagBackfillRequest>;
export type CostAllocationTagBackfillRequestList = CostAllocationTagBackfillRequest[];
const CostAllocationTagBackfillRequestList = /*@__PURE__*/ __L.at(__c24, 3);
export interface ListCostAllocationTagBackfillHistoryResponse {
  BackfillRequests?: CostAllocationTagBackfillRequest[];
  NextToken?: string;
}
const ListCostAllocationTagBackfillHistoryResponse = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<ListCostAllocationTagBackfillHistoryResponse>;
export type CostAllocationTagStatus = "Active" | "Inactive" | (string & {});
const CostAllocationTagStatus = S.String;

export type CostAllocationTagKeyList = string[];
const CostAllocationTagKeyList = Values as any as S.Schema<CostAllocationTagKeyList>;
export type CostAllocationTagType = "AWSGenerated" | "UserDefined" | (string & {});
const CostAllocationTagType = S.String;

export interface ListCostAllocationTagsRequest {
  Status?: CostAllocationTagStatus;
  TagKeys?: string[];
  Type?: CostAllocationTagType;
  NextToken?: string;
  MaxResults?: number;
}
const ListCostAllocationTagsRequest = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<ListCostAllocationTagsRequest>;
export interface CostAllocationTag {
  TagKey: string;
  Type: CostAllocationTagType;
  Status: CostAllocationTagStatus;
  LastUpdatedDate?: string;
  LastUsedDate?: string;
}
const CostAllocationTag = /*@__PURE__*/ __L.at(__c24, 6) as any as S.Schema<CostAllocationTag>;
export type CostAllocationTagList = CostAllocationTag[];
const CostAllocationTagList = /*@__PURE__*/ __L.at(__c24, 7);
export interface ListCostAllocationTagsResponse {
  CostAllocationTags?: CostAllocationTag[];
  NextToken?: string;
}
const ListCostAllocationTagsResponse = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<ListCostAllocationTagsResponse>;
export type CostCategoryMaxResults = number;
export type ResourceType = string;
export type ResourceTypesFilterInput = string[];
const ResourceTypesFilterInput = Values as any as S.Schema<ResourceTypesFilterInput>;
export interface ListCostCategoryDefinitionsRequest {
  EffectiveOn?: string;
  NextToken?: string;
  MaxResults?: number;
  SupportedResourceTypes?: string[];
}
const ListCostCategoryDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<ListCostCategoryDefinitionsRequest>;
export type ResourceTypes = string[];
const ResourceTypes = Values as any as S.Schema<ResourceTypes>;
export interface CostCategoryReference {
  CostCategoryArn?: string;
  Name?: string;
  EffectiveStart?: string;
  EffectiveEnd?: string;
  NumberOfRules?: number;
  ProcessingStatus?: CostCategoryProcessingStatus[];
  Values?: string[];
  DefaultValue?: string;
  SupportedResourceTypes?: string[];
}
const CostCategoryReference = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<CostCategoryReference>;
export type CostCategoryReferencesList = CostCategoryReference[];
const CostCategoryReferencesList = /*@__PURE__*/ __L.at(__c25, 3);
export interface ListCostCategoryDefinitionsResponse {
  CostCategoryReferences?: CostCategoryReference[];
  NextToken?: string;
}
const ListCostCategoryDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<ListCostCategoryDefinitionsResponse>;
export interface ListCostCategoryResourceAssociationsRequest {
  CostCategoryArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListCostCategoryResourceAssociationsRequest = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<ListCostCategoryResourceAssociationsRequest>;
export type GenericArn = string;
export interface CostCategoryResourceAssociation {
  ResourceArn?: string;
  CostCategoryName?: string;
  CostCategoryArn?: string;
}
const CostCategoryResourceAssociation = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<CostCategoryResourceAssociation>;
export type CostCategoryResourceAssociations = CostCategoryResourceAssociation[];
const CostCategoryResourceAssociations = /*@__PURE__*/ __L.at(__c25, 7);
export interface ListCostCategoryResourceAssociationsResponse {
  CostCategoryResourceAssociations?: CostCategoryResourceAssociation[];
  NextToken?: string;
}
const ListCostCategoryResourceAssociationsResponse = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<ListCostCategoryResourceAssociationsResponse>;
export type GenerationStatus = "SUCCEEDED" | "PROCESSING" | "FAILED" | (string & {});
const GenerationStatus = S.String;

export type RecommendationId = string;
export type RecommendationIdList = string[];
const RecommendationIdList = Values as any as S.Schema<RecommendationIdList>;
export interface ListSavingsPlansPurchaseRecommendationGenerationRequest {
  GenerationStatus?: GenerationStatus;
  RecommendationIds?: string[];
  PageSize?: number;
  NextPageToken?: string;
}
const ListSavingsPlansPurchaseRecommendationGenerationRequest = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<ListSavingsPlansPurchaseRecommendationGenerationRequest>;
export interface GenerationSummary {
  RecommendationId?: string;
  GenerationStatus?: GenerationStatus;
  GenerationStartedTime?: string;
  GenerationCompletionTime?: string;
  EstimatedCompletionTime?: string;
}
const GenerationSummary = /*@__PURE__*/ __L.at(__c26, 2) as any as S.Schema<GenerationSummary>;
export type GenerationSummaryList = GenerationSummary[];
const GenerationSummaryList = /*@__PURE__*/ __L.at(__c26, 3);
export interface ListSavingsPlansPurchaseRecommendationGenerationResponse {
  GenerationSummaryList?: GenerationSummary[];
  NextPageToken?: string;
}
const ListSavingsPlansPurchaseRecommendationGenerationResponse = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<ListSavingsPlansPurchaseRecommendationGenerationResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  ResourceTags?: ResourceTag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ProvideAnomalyFeedbackRequest {
  AnomalyId: string;
  Feedback: AnomalyFeedbackType;
}
const ProvideAnomalyFeedbackRequest = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<ProvideAnomalyFeedbackRequest>;
export interface ProvideAnomalyFeedbackResponse {
  AnomalyId: string;
}
const ProvideAnomalyFeedbackResponse = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<ProvideAnomalyFeedbackResponse>;
export interface StartCommitmentPurchaseAnalysisRequest {
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration;
}
const StartCommitmentPurchaseAnalysisRequest = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<StartCommitmentPurchaseAnalysisRequest>;
export interface StartCommitmentPurchaseAnalysisResponse {
  AnalysisId: string;
  AnalysisStartedTime: string;
  EstimatedCompletionTime: string;
}
const StartCommitmentPurchaseAnalysisResponse = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<StartCommitmentPurchaseAnalysisResponse>;
export interface StartCostAllocationTagBackfillRequest {
  BackfillFrom: string;
}
const StartCostAllocationTagBackfillRequest = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<StartCostAllocationTagBackfillRequest>;
export interface StartCostAllocationTagBackfillResponse {
  BackfillRequest?: CostAllocationTagBackfillRequest;
}
const StartCostAllocationTagBackfillResponse = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<StartCostAllocationTagBackfillResponse>;
export interface StartSavingsPlansPurchaseRecommendationGenerationRequest {}
const StartSavingsPlansPurchaseRecommendationGenerationRequest = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<StartSavingsPlansPurchaseRecommendationGenerationRequest>;
export interface StartSavingsPlansPurchaseRecommendationGenerationResponse {
  RecommendationId?: string;
  GenerationStartedTime?: string;
  EstimatedCompletionTime?: string;
}
const StartSavingsPlansPurchaseRecommendationGenerationResponse = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<StartSavingsPlansPurchaseRecommendationGenerationResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  ResourceTags: ResourceTag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAnomalyMonitorResponse as any as S.Schema<TagResourceResponse>;
export type ResourceTagKeyList = string[];
const ResourceTagKeyList = Values as any as S.Schema<ResourceTagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  ResourceTagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteAnomalyMonitorResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAnomalyMonitorRequest {
  MonitorArn: string;
  MonitorName?: string;
}
const UpdateAnomalyMonitorRequest = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<UpdateAnomalyMonitorRequest>;
export interface UpdateAnomalyMonitorResponse {
  MonitorArn: string;
}
const UpdateAnomalyMonitorResponse =
  CreateAnomalyMonitorResponse as any as S.Schema<UpdateAnomalyMonitorResponse>;
export interface UpdateAnomalySubscriptionRequest {
  SubscriptionArn: string;
  Threshold?: number;
  Frequency?: AnomalySubscriptionFrequency;
  MonitorArnList?: string[];
  Subscribers?: Subscriber[];
  SubscriptionName?: string;
  ThresholdExpression?: Expression;
}
const UpdateAnomalySubscriptionRequest = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<UpdateAnomalySubscriptionRequest>;
export interface UpdateAnomalySubscriptionResponse {
  SubscriptionArn: string;
}
const UpdateAnomalySubscriptionResponse =
  CreateAnomalySubscriptionResponse as any as S.Schema<UpdateAnomalySubscriptionResponse>;
export interface CostAllocationTagStatusEntry {
  TagKey: string;
  Status: CostAllocationTagStatus;
}
const CostAllocationTagStatusEntry = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<CostAllocationTagStatusEntry>;
export type CostAllocationTagStatusList = CostAllocationTagStatusEntry[];
const CostAllocationTagStatusList = /*@__PURE__*/ __L.at(__c28, 4);
export interface UpdateCostAllocationTagsStatusRequest {
  CostAllocationTagsStatus: CostAllocationTagStatusEntry[];
}
const UpdateCostAllocationTagsStatusRequest = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<UpdateCostAllocationTagsStatusRequest>;
export type ErrorMessage = string;
export interface UpdateCostAllocationTagsStatusError_ {
  TagKey?: string;
  Code?: string;
  Message?: string;
}
const UpdateCostAllocationTagsStatusError_ = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<UpdateCostAllocationTagsStatusError_>;
export type UpdateCostAllocationTagsStatusErrors = UpdateCostAllocationTagsStatusError_[];
const UpdateCostAllocationTagsStatusErrors = /*@__PURE__*/ __L.at(__c28, 7);
export interface UpdateCostAllocationTagsStatusResponse {
  Errors?: UpdateCostAllocationTagsStatusError_[];
}
const UpdateCostAllocationTagsStatusResponse = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<UpdateCostAllocationTagsStatusResponse>;
export interface UpdateCostCategoryDefinitionRequest {
  CostCategoryArn: string;
  EffectiveStart?: string;
  RuleVersion: CostCategoryRuleVersion;
  Rules: CostCategoryRule[];
  DefaultValue?: string;
  SplitChargeRules?: CostCategorySplitChargeRule[];
}
const UpdateCostCategoryDefinitionRequest = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<UpdateCostCategoryDefinitionRequest>;
export interface UpdateCostCategoryDefinitionResponse {
  CostCategoryArn?: string;
  EffectiveStart?: string;
}
const UpdateCostCategoryDefinitionResponse =
  CreateCostCategoryDefinitionResponse as any as S.Schema<UpdateCostCategoryDefinitionResponse>;
export type CreateAnomalyMonitorError =
  | LimitExceededException
  | AnomalyMonitorAlreadyExists
  | CommonErrors;
/**
 * Creates a new cost anomaly detection monitor with the requested type and monitor
 * specification.
 */
export const createAnomalyMonitor: API.OperationMethod<
  CreateAnomalyMonitorRequest,
  CreateAnomalyMonitorResponse,
  CreateAnomalyMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAnomalyMonitorRequest,
  output: CreateAnomalyMonitorResponse,
  errors: [LimitExceededException, AnomalyMonitorAlreadyExists],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAnomalyMonitor",
}));

export type CreateAnomalySubscriptionError =
  | LimitExceededException
  | UnknownMonitorException
  | AnomalySubscriptionAlreadyExists
  | CommonErrors;
/**
 * Adds an alert subscription to a cost anomaly detection monitor. You can use each
 * subscription to define subscribers with email or SNS notifications. Email subscribers can set
 * an absolute or percentage threshold and a time frequency for receiving notifications.
 */
export const createAnomalySubscription: API.OperationMethod<
  CreateAnomalySubscriptionRequest,
  CreateAnomalySubscriptionResponse,
  CreateAnomalySubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAnomalySubscriptionRequest,
  output: CreateAnomalySubscriptionResponse,
  errors: [LimitExceededException, UnknownMonitorException, AnomalySubscriptionAlreadyExists],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAnomalySubscription",
}));

export type CreateCostCategoryDefinitionError =
  | LimitExceededException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a new cost category with the requested name and rules.
 */
export const createCostCategoryDefinition: API.OperationMethod<
  CreateCostCategoryDefinitionRequest,
  CreateCostCategoryDefinitionResponse,
  CreateCostCategoryDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCostCategoryDefinitionRequest,
  output: CreateCostCategoryDefinitionResponse,
  errors: [LimitExceededException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCostCategoryDefinition",
}));

export type DeleteAnomalyMonitorError =
  | LimitExceededException
  | UnknownMonitorException
  | CommonErrors;
/**
 * Deletes a cost anomaly monitor.
 */
export const deleteAnomalyMonitor: API.OperationMethod<
  DeleteAnomalyMonitorRequest,
  DeleteAnomalyMonitorResponse,
  DeleteAnomalyMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAnomalyMonitorRequest,
  output: DeleteAnomalyMonitorResponse,
  errors: [LimitExceededException, UnknownMonitorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAnomalyMonitor",
}));

export type DeleteAnomalySubscriptionError =
  | LimitExceededException
  | UnknownSubscriptionException
  | CommonErrors;
/**
 * Deletes a cost anomaly subscription.
 */
export const deleteAnomalySubscription: API.OperationMethod<
  DeleteAnomalySubscriptionRequest,
  DeleteAnomalySubscriptionResponse,
  DeleteAnomalySubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAnomalySubscriptionRequest,
  output: DeleteAnomalySubscriptionResponse,
  errors: [LimitExceededException, UnknownSubscriptionException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAnomalySubscription",
}));

export type DeleteCostCategoryDefinitionError =
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a cost category. Expenses from this month going forward will no longer be
 * categorized with this cost category.
 */
export const deleteCostCategoryDefinition: API.OperationMethod<
  DeleteCostCategoryDefinitionRequest,
  DeleteCostCategoryDefinitionResponse,
  DeleteCostCategoryDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCostCategoryDefinitionRequest,
  output: DeleteCostCategoryDefinitionResponse,
  errors: [LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCostCategoryDefinition",
}));

export type DescribeCostCategoryDefinitionError =
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a
 * cost category that's defined in the account.
 *
 * You have the option to use `EffectiveOn` to return a cost category that's
 * active on a specific date. If there's no `EffectiveOn` specified, you see a Cost
 * Category that's effective on the current date. If cost category is still effective,
 * `EffectiveEnd` is omitted in the response.
 */
export const describeCostCategoryDefinition: API.OperationMethod<
  DescribeCostCategoryDefinitionRequest,
  DescribeCostCategoryDefinitionResponse,
  DescribeCostCategoryDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCostCategoryDefinitionRequest,
  output: DescribeCostCategoryDefinitionResponse,
  errors: [LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCostCategoryDefinition",
}));

export type GetAnomaliesError = InvalidNextTokenException | LimitExceededException | CommonErrors;
/**
 * Retrieves all of the cost anomalies detected on your account during the time period that's
 * specified by the `DateInterval` object. Anomalies are available for up to 90
 * days.
 */
export const getAnomalies: API.PaginatedOperationMethod<
  GetAnomaliesRequest,
  GetAnomaliesResponse,
  GetAnomaliesError,
  Credentials | HttpClient.HttpClient,
  Anomaly
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetAnomaliesRequest,
  output: GetAnomaliesResponse,
  errors: [InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnomalies",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "Anomalies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetAnomalyMonitorsError =
  | InvalidNextTokenException
  | LimitExceededException
  | UnknownMonitorException
  | CommonErrors;
/**
 * Retrieves the cost anomaly monitor definitions for your account. You can filter using a
 * list of cost anomaly monitor Amazon Resource Names (ARNs).
 */
export const getAnomalyMonitors: API.PaginatedOperationMethod<
  GetAnomalyMonitorsRequest,
  GetAnomalyMonitorsResponse,
  GetAnomalyMonitorsError,
  Credentials | HttpClient.HttpClient,
  AnomalyMonitor
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetAnomalyMonitorsRequest,
  output: GetAnomalyMonitorsResponse,
  errors: [InvalidNextTokenException, LimitExceededException, UnknownMonitorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnomalyMonitors",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "AnomalyMonitors",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetAnomalySubscriptionsError =
  | InvalidNextTokenException
  | LimitExceededException
  | UnknownSubscriptionException
  | CommonErrors;
/**
 * Retrieves the cost anomaly subscription objects for your account. You can filter using a
 * list of cost anomaly monitor Amazon Resource Names (ARNs).
 */
export const getAnomalySubscriptions: API.PaginatedOperationMethod<
  GetAnomalySubscriptionsRequest,
  GetAnomalySubscriptionsResponse,
  GetAnomalySubscriptionsError,
  Credentials | HttpClient.HttpClient,
  AnomalySubscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetAnomalySubscriptionsRequest,
  output: GetAnomalySubscriptionsResponse,
  errors: [InvalidNextTokenException, LimitExceededException, UnknownSubscriptionException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnomalySubscriptions",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "AnomalySubscriptions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetApproximateUsageRecordsError =
  | DataUnavailableException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves estimated usage records for hourly granularity or resource-level data at daily
 * granularity.
 */
export const getApproximateUsageRecords: API.OperationMethod<
  GetApproximateUsageRecordsRequest,
  GetApproximateUsageRecordsResponse,
  GetApproximateUsageRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApproximateUsageRecordsRequest,
  output: GetApproximateUsageRecordsResponse,
  errors: [DataUnavailableException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApproximateUsageRecords",
}));

export type GetCommitmentPurchaseAnalysisError =
  | AnalysisNotFoundException
  | DataUnavailableException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves a commitment purchase analysis result based on the
 * `AnalysisId`.
 */
export const getCommitmentPurchaseAnalysis: API.OperationMethod<
  GetCommitmentPurchaseAnalysisRequest,
  GetCommitmentPurchaseAnalysisResponse,
  GetCommitmentPurchaseAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCommitmentPurchaseAnalysisRequest,
  output: GetCommitmentPurchaseAnalysisResponse,
  errors: [AnalysisNotFoundException, DataUnavailableException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCommitmentPurchaseAnalysis",
}));

export type GetCostAndUsageError =
  | BillExpirationException
  | BillingViewHealthStatusException
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | RequestChangedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves cost and usage metrics for your account. You can specify which cost and
 * usage-related metric that you want the request to return. For example, you can specify
 * `BlendedCosts` or `UsageQuantity`. You can also filter and group your
 * data by various dimensions, such as `SERVICE` or `AZ`, in a specific
 * time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in Organizations have access to all member accounts.
 *
 * For information about filter limitations, see Quotas and restrictions
 * in the *Billing and Cost Management User Guide*.
 */
export const getCostAndUsage: API.OperationMethod<
  GetCostAndUsageRequest,
  GetCostAndUsageResponse,
  GetCostAndUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCostAndUsageRequest,
  output: GetCostAndUsageResponse,
  errors: [
    BillExpirationException,
    BillingViewHealthStatusException,
    DataUnavailableException,
    InvalidNextTokenException,
    LimitExceededException,
    RequestChangedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCostAndUsage",
}));

export type GetCostAndUsageComparisonsError =
  | BillingViewHealthStatusException
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves cost and usage comparisons for your account between two periods within the last
 * 13 months. If you have enabled multi-year data at monthly granularity, you can go back up to
 * 38 months.
 */
export const getCostAndUsageComparisons: API.PaginatedOperationMethod<
  GetCostAndUsageComparisonsRequest,
  GetCostAndUsageComparisonsResponse,
  GetCostAndUsageComparisonsError,
  Credentials | HttpClient.HttpClient,
  CostAndUsageComparison
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetCostAndUsageComparisonsRequest,
  output: GetCostAndUsageComparisonsResponse,
  errors: [
    BillingViewHealthStatusException,
    DataUnavailableException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCostAndUsageComparisons",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "CostAndUsageComparisons",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetCostAndUsageWithResourcesError =
  | BillExpirationException
  | BillingViewHealthStatusException
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | RequestChangedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves cost and usage metrics with resources for your account. You can specify which
 * cost and usage-related metric, such as `BlendedCosts` or
 * `UsageQuantity`, that you want the request to return. You can also filter and group
 * your data by various dimensions, such as `SERVICE` or `AZ`, in a
 * specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in Organizations have access to all member accounts.
 *
 * Hourly granularity is only available for EC2-Instances (Elastic Compute Cloud)
 * resource-level data. All other resource-level data is available at daily
 * granularity.
 *
 * This is an opt-in only feature. You can enable this feature from the Cost Explorer
 * Settings page. For information about how to access the Settings page, see Controlling
 * Access for Cost Explorer in the Billing and Cost Management User
 * Guide.
 */
export const getCostAndUsageWithResources: API.OperationMethod<
  GetCostAndUsageWithResourcesRequest,
  GetCostAndUsageWithResourcesResponse,
  GetCostAndUsageWithResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCostAndUsageWithResourcesRequest,
  output: GetCostAndUsageWithResourcesResponse,
  errors: [
    BillExpirationException,
    BillingViewHealthStatusException,
    DataUnavailableException,
    InvalidNextTokenException,
    LimitExceededException,
    RequestChangedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCostAndUsageWithResources",
}));

export type GetCostCategoriesError =
  | BillExpirationException
  | BillingViewHealthStatusException
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | RequestChangedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves an array of cost category names and values incurred cost.
 *
 * If some cost category names and values are not associated with any cost, they will not
 * be returned by this API.
 */
export const getCostCategories: API.OperationMethod<
  GetCostCategoriesRequest,
  GetCostCategoriesResponse,
  GetCostCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCostCategoriesRequest,
  output: GetCostCategoriesResponse,
  errors: [
    BillExpirationException,
    BillingViewHealthStatusException,
    DataUnavailableException,
    InvalidNextTokenException,
    LimitExceededException,
    RequestChangedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCostCategories",
}));

export type GetCostComparisonDriversError =
  | BillingViewHealthStatusException
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves key factors driving cost changes between two time periods within the last 13
 * months, such as usage changes, discount changes, and commitment-based savings. If you have
 * enabled multi-year data at monthly granularity, you can go back up to 38 months.
 */
export const getCostComparisonDrivers: API.PaginatedOperationMethod<
  GetCostComparisonDriversRequest,
  GetCostComparisonDriversResponse,
  GetCostComparisonDriversError,
  Credentials | HttpClient.HttpClient,
  CostComparisonDriver
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetCostComparisonDriversRequest,
  output: GetCostComparisonDriversResponse,
  errors: [
    BillingViewHealthStatusException,
    DataUnavailableException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCostComparisonDrivers",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "CostComparisonDrivers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetCostForecastError =
  | BillingViewHealthStatusException
  | DataUnavailableException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a forecast for how much Amazon Web Services predicts that you will spend over
 * the forecast time period that you select, based on your past costs.
 */
export const getCostForecast: API.OperationMethod<
  GetCostForecastRequest,
  GetCostForecastResponse,
  GetCostForecastError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCostForecastRequest,
  output: GetCostForecastResponse,
  errors: [
    BillingViewHealthStatusException,
    DataUnavailableException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCostForecast",
}));

export type GetDimensionValuesError =
  | BillExpirationException
  | BillingViewHealthStatusException
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | RequestChangedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves all available filter values for a specified filter over a period of time. You
 * can search the dimension values for an arbitrary string.
 */
export const getDimensionValues: API.OperationMethod<
  GetDimensionValuesRequest,
  GetDimensionValuesResponse,
  GetDimensionValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDimensionValuesRequest,
  output: GetDimensionValuesResponse,
  errors: [
    BillExpirationException,
    BillingViewHealthStatusException,
    DataUnavailableException,
    InvalidNextTokenException,
    LimitExceededException,
    RequestChangedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDimensionValues",
}));

export type GetReservationCoverageError =
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves the reservation coverage for your account, which you can use to see how much
 * of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service,
 * or Amazon Redshift usage is covered by a reservation. An organization's management account can
 * see the coverage of the associated member accounts. This supports dimensions, cost categories,
 * and nested expressions. For any time period, you can filter data about reservation usage by
 * the following dimensions:
 *
 * - AZ
 *
 * - CACHE_ENGINE
 *
 * - DATABASE_ENGINE
 *
 * - DEPLOYMENT_OPTION
 *
 * - INSTANCE_TYPE
 *
 * - LINKED_ACCOUNT
 *
 * - OPERATING_SYSTEM
 *
 * - PLATFORM
 *
 * - REGION
 *
 * - SERVICE
 *
 * - TAG
 *
 * - TENANCY
 *
 * To determine valid values for a dimension, use the `GetDimensionValues`
 * operation.
 */
export const getReservationCoverage: API.OperationMethod<
  GetReservationCoverageRequest,
  GetReservationCoverageResponse,
  GetReservationCoverageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReservationCoverageRequest,
  output: GetReservationCoverageResponse,
  errors: [DataUnavailableException, InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReservationCoverage",
}));

export type GetReservationPurchaseRecommendationError =
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Gets recommendations for reservation purchases. These recommendations might help you to
 * reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to
 * On-Demand pricing.
 *
 * Amazon Web Services generates your recommendations by identifying your On-Demand usage
 * during a specific time period and collecting your usage into categories that are eligible for
 * a reservation. After Amazon Web Services has these categories, it simulates every combination
 * of reservations in each category of usage to identify the best number of each type of Reserved
 * Instance (RI) to purchase to maximize your estimated savings.
 *
 * For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared
 * tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy
 * size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services
 * recommends the smallest size instance in an instance family. This makes it easier to purchase
 * a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of
 * normalized units. This way, you can purchase any instance size that you want. For this
 * example, your RI recommendation is for `c4.large` because that is the smallest size
 * instance in the c4 instance family.
 */
export const getReservationPurchaseRecommendation: API.PaginatedOperationMethod<
  GetReservationPurchaseRecommendationRequest,
  GetReservationPurchaseRecommendationResponse,
  GetReservationPurchaseRecommendationError,
  Credentials | HttpClient.HttpClient,
  ReservationPurchaseRecommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetReservationPurchaseRecommendationRequest,
  output: GetReservationPurchaseRecommendationResponse,
  errors: [DataUnavailableException, InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReservationPurchaseRecommendation",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "Recommendations",
    pageSize: "PageSize",
  } as const,
})) as any;

export type GetReservationUtilizationError =
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves the reservation utilization for your account. Management account in an
 * organization have access to member accounts. You can filter data by dimensions in a time
 * period. You can use `GetDimensionValues` to determine the possible dimension
 * values. Currently, you can group only by `SUBSCRIPTION_ID`.
 */
export const getReservationUtilization: API.OperationMethod<
  GetReservationUtilizationRequest,
  GetReservationUtilizationResponse,
  GetReservationUtilizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReservationUtilizationRequest,
  output: GetReservationUtilizationResponse,
  errors: [DataUnavailableException, InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReservationUtilization",
}));

export type GetRightsizingRecommendationError =
  | InvalidNextTokenException
  | LimitExceededException
  | RightsizingRecommendationNotEnabled
  | CommonErrors;
/**
 * Creates recommendations that help you save cost by identifying idle and underutilized
 * Amazon EC2 instances.
 *
 * Recommendations are generated to either downsize or terminate instances, along with
 * providing savings detail and metrics. For more information about calculation and function, see
 * Optimizing Your Cost with Rightsizing Recommendations in the *Billing and Cost Management User Guide*.
 */
export const getRightsizingRecommendation: API.PaginatedOperationMethod<
  GetRightsizingRecommendationRequest,
  GetRightsizingRecommendationResponse,
  GetRightsizingRecommendationError,
  Credentials | HttpClient.HttpClient,
  RightsizingRecommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetRightsizingRecommendationRequest,
  output: GetRightsizingRecommendationResponse,
  errors: [InvalidNextTokenException, LimitExceededException, RightsizingRecommendationNotEnabled],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRightsizingRecommendation",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "RightsizingRecommendations",
    pageSize: "PageSize",
  } as const,
})) as any;

export type GetSavingsPlanPurchaseRecommendationDetailsError =
  | DataUnavailableException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves the details for a Savings Plan recommendation. These details include the hourly
 * data-points that construct the cost, coverage, and utilization charts.
 */
export const getSavingsPlanPurchaseRecommendationDetails: API.OperationMethod<
  GetSavingsPlanPurchaseRecommendationDetailsRequest,
  GetSavingsPlanPurchaseRecommendationDetailsResponse,
  GetSavingsPlanPurchaseRecommendationDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSavingsPlanPurchaseRecommendationDetailsRequest,
  output: GetSavingsPlanPurchaseRecommendationDetailsResponse,
  errors: [DataUnavailableException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSavingsPlanPurchaseRecommendationDetails",
}));

export type GetSavingsPlansCoverageError =
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves the Savings Plans covered for your account. This enables you to see how much of
 * your cost is covered by a Savings Plan. An organization's management account can see the
 * coverage of the associated member accounts. This supports dimensions, cost categories, and
 * nested expressions. For any time period, you can filter data for Savings Plans usage with the
 * following dimensions:
 *
 * - `LINKED_ACCOUNT`
 *
 * - `REGION`
 *
 * - `SERVICE`
 *
 * - `INSTANCE_FAMILY`
 *
 * To determine valid values for a dimension, use the `GetDimensionValues`
 * operation.
 */
export const getSavingsPlansCoverage: API.PaginatedOperationMethod<
  GetSavingsPlansCoverageRequest,
  GetSavingsPlansCoverageResponse,
  GetSavingsPlansCoverageError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetSavingsPlansCoverageRequest,
  output: GetSavingsPlansCoverageResponse,
  errors: [DataUnavailableException, InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSavingsPlansCoverage",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetSavingsPlansPurchaseRecommendationError =
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves the Savings Plans recommendations for your account. First use
 * `StartSavingsPlansPurchaseRecommendationGeneration` to generate a new set of
 * recommendations, and then use `GetSavingsPlansPurchaseRecommendation` to retrieve
 * them.
 */
export const getSavingsPlansPurchaseRecommendation: API.OperationMethod<
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansPurchaseRecommendationResponse,
  GetSavingsPlansPurchaseRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSavingsPlansPurchaseRecommendationRequest,
  output: GetSavingsPlansPurchaseRecommendationResponse,
  errors: [InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSavingsPlansPurchaseRecommendation",
}));

export type GetSavingsPlansUtilizationError =
  | DataUnavailableException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves the Savings Plans utilization for your account across date ranges with daily or
 * monthly granularity. Management account in an organization have access to member accounts. You
 * can use `GetDimensionValues` in `SAVINGS_PLANS` to determine the
 * possible dimension values.
 *
 * You can't group by any dimension values for
 * `GetSavingsPlansUtilization`.
 */
export const getSavingsPlansUtilization: API.OperationMethod<
  GetSavingsPlansUtilizationRequest,
  GetSavingsPlansUtilizationResponse,
  GetSavingsPlansUtilizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSavingsPlansUtilizationRequest,
  output: GetSavingsPlansUtilizationResponse,
  errors: [DataUnavailableException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSavingsPlansUtilization",
}));

export type GetSavingsPlansUtilizationDetailsError =
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves attribute data along with aggregate utilization and savings data for a given
 * time period. This doesn't support granular or grouped data (daily/monthly) in response. You
 * can't retrieve data by dates in a single response similar to
 * `GetSavingsPlanUtilization`, but you have the option to make multiple calls to
 * `GetSavingsPlanUtilizationDetails` by providing individual dates. You can use
 * `GetDimensionValues` in `SAVINGS_PLANS` to determine the possible
 * dimension values.
 *
 * `GetSavingsPlanUtilizationDetails` internally groups data by
 * `SavingsPlansArn`.
 */
export const getSavingsPlansUtilizationDetails: API.PaginatedOperationMethod<
  GetSavingsPlansUtilizationDetailsRequest,
  GetSavingsPlansUtilizationDetailsResponse,
  GetSavingsPlansUtilizationDetailsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetSavingsPlansUtilizationDetailsRequest,
  output: GetSavingsPlansUtilizationDetailsResponse,
  errors: [DataUnavailableException, InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSavingsPlansUtilizationDetails",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetTagsError =
  | BillExpirationException
  | BillingViewHealthStatusException
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | RequestChangedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Queries for available tag keys and tag values for a specified period. You can search
 * the tag values for an arbitrary string.
 */
export const getTags: API.OperationMethod<
  GetTagsRequest,
  GetTagsResponse,
  GetTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTagsRequest,
  output: GetTagsResponse,
  errors: [
    BillExpirationException,
    BillingViewHealthStatusException,
    DataUnavailableException,
    InvalidNextTokenException,
    LimitExceededException,
    RequestChangedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTags",
}));

export type GetUsageForecastError =
  | BillingViewHealthStatusException
  | DataUnavailableException
  | LimitExceededException
  | ResourceNotFoundException
  | UnresolvableUsageUnitException
  | CommonErrors;
/**
 * Retrieves a forecast for how much Amazon Web Services predicts that you will use
 * over the forecast time period that you select, based on your past usage.
 */
export const getUsageForecast: API.OperationMethod<
  GetUsageForecastRequest,
  GetUsageForecastResponse,
  GetUsageForecastError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUsageForecastRequest,
  output: GetUsageForecastResponse,
  errors: [
    BillingViewHealthStatusException,
    DataUnavailableException,
    LimitExceededException,
    ResourceNotFoundException,
    UnresolvableUsageUnitException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUsageForecast",
}));

export type ListCommitmentPurchaseAnalysesError =
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists the commitment purchase analyses for your account.
 */
export const listCommitmentPurchaseAnalyses: API.PaginatedOperationMethod<
  ListCommitmentPurchaseAnalysesRequest,
  ListCommitmentPurchaseAnalysesResponse,
  ListCommitmentPurchaseAnalysesError,
  Credentials | HttpClient.HttpClient,
  AnalysisSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCommitmentPurchaseAnalysesRequest,
  output: ListCommitmentPurchaseAnalysesResponse,
  errors: [DataUnavailableException, InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCommitmentPurchaseAnalyses",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "AnalysisSummaryList",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListCostAllocationTagBackfillHistoryError =
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves a list of your historical cost allocation tag backfill requests.
 */
export const listCostAllocationTagBackfillHistory: API.PaginatedOperationMethod<
  ListCostAllocationTagBackfillHistoryRequest,
  ListCostAllocationTagBackfillHistoryResponse,
  ListCostAllocationTagBackfillHistoryError,
  Credentials | HttpClient.HttpClient,
  CostAllocationTagBackfillRequest
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCostAllocationTagBackfillHistoryRequest,
  output: ListCostAllocationTagBackfillHistoryResponse,
  errors: [InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCostAllocationTagBackfillHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "BackfillRequests",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCostAllocationTagsError =
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Get a list of cost allocation tags. All inputs in the API are optional and serve as
 * filters. By default, all cost allocation tags are returned.
 */
export const listCostAllocationTags: API.PaginatedOperationMethod<
  ListCostAllocationTagsRequest,
  ListCostAllocationTagsResponse,
  ListCostAllocationTagsError,
  Credentials | HttpClient.HttpClient,
  CostAllocationTag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCostAllocationTagsRequest,
  output: ListCostAllocationTagsResponse,
  errors: [InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCostAllocationTags",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CostAllocationTags",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCostCategoryDefinitionsError = LimitExceededException | CommonErrors;
/**
 * Returns the name, Amazon Resource Name (ARN), `NumberOfRules` and effective
 * dates of all cost categories defined in the account. You have the option to use
 * `EffectiveOn` and `SupportedResourceTypes` to return a list of cost categories that were active on a specific
 * date. If there is no `EffectiveOn` specified, you'll see cost categories that are
 * effective on the current date. If cost category is still effective, `EffectiveEnd`
 * is omitted in the response. `ListCostCategoryDefinitions` supports pagination. The
 * request can have a `MaxResults` range up to 100.
 */
export const listCostCategoryDefinitions: API.PaginatedOperationMethod<
  ListCostCategoryDefinitionsRequest,
  ListCostCategoryDefinitionsResponse,
  ListCostCategoryDefinitionsError,
  Credentials | HttpClient.HttpClient,
  CostCategoryReference
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCostCategoryDefinitionsRequest,
  output: ListCostCategoryDefinitionsResponse,
  errors: [LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCostCategoryDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CostCategoryReferences",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCostCategoryResourceAssociationsError =
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns resource associations of all cost categories defined in the account. You have the option to use `CostCategoryArn` to get the association for a specific cost category. `ListCostCategoryResourceAssociations` supports pagination. The request can have a `MaxResults` range up to 100.
 */
export const listCostCategoryResourceAssociations: API.PaginatedOperationMethod<
  ListCostCategoryResourceAssociationsRequest,
  ListCostCategoryResourceAssociationsResponse,
  ListCostCategoryResourceAssociationsError,
  Credentials | HttpClient.HttpClient,
  CostCategoryResourceAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCostCategoryResourceAssociationsRequest,
  output: ListCostCategoryResourceAssociationsResponse,
  errors: [LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCostCategoryResourceAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CostCategoryResourceAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSavingsPlansPurchaseRecommendationGenerationError =
  | DataUnavailableException
  | InvalidNextTokenException
  | LimitExceededException
  | CommonErrors;
/**
 * Retrieves a list of your historical recommendation generations within the past 30
 * days.
 */
export const listSavingsPlansPurchaseRecommendationGeneration: API.PaginatedOperationMethod<
  ListSavingsPlansPurchaseRecommendationGenerationRequest,
  ListSavingsPlansPurchaseRecommendationGenerationResponse,
  ListSavingsPlansPurchaseRecommendationGenerationError,
  Credentials | HttpClient.HttpClient,
  GenerationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSavingsPlansPurchaseRecommendationGenerationRequest,
  output: ListSavingsPlansPurchaseRecommendationGenerationResponse,
  errors: [DataUnavailableException, InvalidNextTokenException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSavingsPlansPurchaseRecommendationGeneration",
  pagination: {
    inputToken: "NextPageToken",
    outputToken: "NextPageToken",
    items: "GenerationSummaryList",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of resource tags associated with the resource specified by the Amazon
 * Resource Name (ARN).
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ProvideAnomalyFeedbackError = LimitExceededException | CommonErrors;
/**
 * Modifies the feedback property of a given cost anomaly.
 */
export const provideAnomalyFeedback: API.OperationMethod<
  ProvideAnomalyFeedbackRequest,
  ProvideAnomalyFeedbackResponse,
  ProvideAnomalyFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ProvideAnomalyFeedbackRequest,
  output: ProvideAnomalyFeedbackResponse,
  errors: [LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ProvideAnomalyFeedback",
}));

export type StartCommitmentPurchaseAnalysisError =
  | DataUnavailableException
  | GenerationExistsException
  | LimitExceededException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Specifies the parameters of a planned commitment purchase and starts the generation of the
 * analysis. This enables you to estimate the cost, coverage, and utilization impact of your
 * planned commitment purchases.
 */
export const startCommitmentPurchaseAnalysis: API.OperationMethod<
  StartCommitmentPurchaseAnalysisRequest,
  StartCommitmentPurchaseAnalysisResponse,
  StartCommitmentPurchaseAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCommitmentPurchaseAnalysisRequest,
  output: StartCommitmentPurchaseAnalysisResponse,
  errors: [
    DataUnavailableException,
    GenerationExistsException,
    LimitExceededException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCommitmentPurchaseAnalysis",
}));

export type StartCostAllocationTagBackfillError =
  | BackfillLimitExceededException
  | LimitExceededException
  | CommonErrors;
/**
 * Request a cost allocation tag backfill. This will backfill the activation status (either `active` or `inactive`) for all tag keys from `para:BackfillFrom` up to the time this request is made.
 *
 * You can request a backfill once every 24 hours.
 */
export const startCostAllocationTagBackfill: API.OperationMethod<
  StartCostAllocationTagBackfillRequest,
  StartCostAllocationTagBackfillResponse,
  StartCostAllocationTagBackfillError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCostAllocationTagBackfillRequest,
  output: StartCostAllocationTagBackfillResponse,
  errors: [BackfillLimitExceededException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCostAllocationTagBackfill",
}));

export type StartSavingsPlansPurchaseRecommendationGenerationError =
  | DataUnavailableException
  | GenerationExistsException
  | LimitExceededException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Requests a Savings Plans recommendation generation. This enables you to calculate a fresh
 * set of Savings Plans recommendations that takes your latest usage data and current Savings
 * Plans inventory into account. You can refresh Savings Plans recommendations up to three times
 * daily for a consolidated billing family.
 *
 * `StartSavingsPlansPurchaseRecommendationGeneration` has no request syntax
 * because no input parameters are needed to support this operation.
 */
export const startSavingsPlansPurchaseRecommendationGeneration: API.OperationMethod<
  StartSavingsPlansPurchaseRecommendationGenerationRequest,
  StartSavingsPlansPurchaseRecommendationGenerationResponse,
  StartSavingsPlansPurchaseRecommendationGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSavingsPlansPurchaseRecommendationGenerationRequest,
  output: StartSavingsPlansPurchaseRecommendationGenerationResponse,
  errors: [
    DataUnavailableException,
    GenerationExistsException,
    LimitExceededException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSavingsPlansPurchaseRecommendationGeneration",
}));

export type TagResourceError =
  | LimitExceededException
  | ResourceNotFoundException
  | TooManyTagsException
  | CommonErrors;
/**
 * An API operation for adding one or more tags (key-value pairs) to a resource.
 *
 * You can use the `TagResource` operation with a resource that already has tags.
 * If you specify a new tag key for the resource, this tag is appended to the list of tags
 * associated with the resource. If you specify a tag key that is already associated with the
 * resource, the new tag value you specify replaces the previous value for that tag.
 *
 * Although the maximum number of array members is 200, user-tag maximum is 50. The remaining
 * are reserved for Amazon Web Services use.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [LimitExceededException, ResourceNotFoundException, TooManyTagsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = LimitExceededException | ResourceNotFoundException | CommonErrors;
/**
 * Removes one or more tags from a resource. Specify only tag keys in your request. Don't
 * specify the value.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAnomalyMonitorError =
  | LimitExceededException
  | UnknownMonitorException
  | CommonErrors;
/**
 * Updates an existing cost anomaly monitor. The changes made are applied going forward, and
 * doesn't change anomalies detected in the past.
 */
export const updateAnomalyMonitor: API.OperationMethod<
  UpdateAnomalyMonitorRequest,
  UpdateAnomalyMonitorResponse,
  UpdateAnomalyMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAnomalyMonitorRequest,
  output: UpdateAnomalyMonitorResponse,
  errors: [LimitExceededException, UnknownMonitorException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnomalyMonitor",
}));

export type UpdateAnomalySubscriptionError =
  | LimitExceededException
  | UnknownMonitorException
  | UnknownSubscriptionException
  | CommonErrors;
/**
 * Updates an existing cost anomaly subscription. Specify the fields that you want to update.
 * Omitted fields are unchanged.
 *
 * The JSON below describes the generic construct for each type. See Request Parameters for possible values as they apply to
 * `AnomalySubscription`.
 */
export const updateAnomalySubscription: API.OperationMethod<
  UpdateAnomalySubscriptionRequest,
  UpdateAnomalySubscriptionResponse,
  UpdateAnomalySubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAnomalySubscriptionRequest,
  output: UpdateAnomalySubscriptionResponse,
  errors: [LimitExceededException, UnknownMonitorException, UnknownSubscriptionException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnomalySubscription",
}));

export type UpdateCostAllocationTagsStatusError = LimitExceededException | CommonErrors;
/**
 * Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag
 * status that's updated is the same as the existing tag status, the request doesn't fail.
 * Instead, it doesn't have any effect on the tag status (for example, activating the active
 * tag).
 */
export const updateCostAllocationTagsStatus: API.OperationMethod<
  UpdateCostAllocationTagsStatusRequest,
  UpdateCostAllocationTagsStatusResponse,
  UpdateCostAllocationTagsStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCostAllocationTagsStatusRequest,
  output: UpdateCostAllocationTagsStatusResponse,
  errors: [LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCostAllocationTagsStatus",
}));

export type UpdateCostCategoryDefinitionError =
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Updates an existing cost category. Changes made to the cost category rules will be used to
 * categorize the current month's expenses and future expenses. This won't change categorization
 * for the previous months.
 */
export const updateCostCategoryDefinition: API.OperationMethod<
  UpdateCostCategoryDefinitionRequest,
  UpdateCostCategoryDefinitionResponse,
  UpdateCostCategoryDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCostCategoryDefinitionRequest,
  output: UpdateCostCategoryDefinitionResponse,
  errors: [LimitExceededException, ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCostCategoryDefinition",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
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
      return S.Array(MatchOption);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(Dimension),
          Values: S.optional(Values),
          MatchOptions: S.optional(MatchOptions),
        }),
      ).annotate({ identifier: "DimensionValues" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Values: S.optional(Values),
          MatchOptions: S.optional(MatchOptions),
        }),
      ).annotate({ identifier: "TagValues" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Or: S.optional(S.suspend(() => Expressions).annotate({ identifier: "Expressions" })),
          And: S.optional(S.suspend(() => Expressions).annotate({ identifier: "Expressions" })),
          Not: S.optional(
            S.suspend((): S.Schema<Expression> => Expression).annotate({
              identifier: "Expression",
            }),
          ),
          Dimensions: S.optional(DimensionValues),
          Tags: S.optional(TagValues),
          CostCategories: S.optional(CostCategoryValues),
        }),
      ).annotate({ identifier: "Expression" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MonitorArn: S.optional(S.String),
          MonitorName: S.String,
          CreationDate: S.optional(S.String),
          LastUpdatedDate: S.optional(S.String),
          LastEvaluatedDate: S.optional(S.String),
          MonitorType: MonitorType,
          MonitorDimension: S.optional(MonitorDimension),
          MonitorSpecification: S.optional(Expression),
          DimensionalValueCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AnomalyMonitor" });
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "ResourceTag",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ResourceTag);
    case 1:
      return S.suspend(() =>
        S.Struct({
          AnomalyMonitor: AnomalyMonitor,
          ResourceTags: S.optional(ResourceTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAnomalyMonitorRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ MonitorArn: S.String })).annotate({
        identifier: "CreateAnomalyMonitorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Type: S.optional(SubscriberType),
          Status: S.optional(SubscriberStatus),
        }),
      ).annotate({ identifier: "Subscriber" });
    case 4:
      return S.Array(Subscriber);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubscriptionArn: S.optional(S.String),
          AccountId: S.optional(S.String),
          MonitorArnList: MonitorArnList,
          Subscribers: Subscribers,
          Threshold: S.optional(S.Number),
          Frequency: AnomalySubscriptionFrequency,
          SubscriptionName: S.String,
          ThresholdExpression: S.optional(Expression),
        }),
      ).annotate({ identifier: "AnomalySubscription" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AnomalySubscription: AnomalySubscription,
          ResourceTags: S.optional(ResourceTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAnomalySubscriptionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ SubscriptionArn: S.String })).annotate({
        identifier: "CreateAnomalySubscriptionResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DimensionName: S.optional(CostCategoryInheritedValueDimensionName),
          DimensionKey: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CostCategoryInheritedValueDimension",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.String),
          Rule: S.optional(Expression),
          InheritedValue: S.optional(CostCategoryInheritedValueDimension),
          Type: S.optional(CostCategoryRuleType),
        }),
      ).annotate({ identifier: "CostCategoryRule" });
    case 2:
      return S.Array(CostCategoryRule);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: CostCategorySplitChargeRuleParameterType,
          Values: CostCategorySplitChargeRuleParameterValuesList,
        }),
      ).annotate({
        identifier: "CostCategorySplitChargeRuleParameter",
      });
    case 4:
      return S.Array(CostCategorySplitChargeRuleParameter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Source: S.String,
          Targets: CostCategorySplitChargeRuleTargetsList,
          Method: CostCategorySplitChargeMethod,
          Parameters: S.optional(CostCategorySplitChargeRuleParametersList),
        }),
      ).annotate({
        identifier: "CostCategorySplitChargeRule",
      });
    case 6:
      return S.Array(CostCategorySplitChargeRule);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          EffectiveStart: S.optional(S.String),
          RuleVersion: CostCategoryRuleVersion,
          Rules: CostCategoryRulesList,
          DefaultValue: S.optional(S.String),
          SplitChargeRules: S.optional(CostCategorySplitChargeRulesList),
          ResourceTags: S.optional(ResourceTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCostCategoryDefinitionRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CostCategoryArn: S.optional(S.String), EffectiveStart: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateCostCategoryDefinitionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MonitorArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAnomalyMonitorRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAnomalyMonitorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SubscriptionArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAnomalySubscriptionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAnomalySubscriptionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ CostCategoryArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteCostCategoryDefinitionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ CostCategoryArn: S.optional(S.String), EffectiveEnd: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteCostCategoryDefinitionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ CostCategoryArn: S.String, EffectiveOn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeCostCategoryDefinitionRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Component: S.optional(CostCategoryStatusComponent),
          Status: S.optional(CostCategoryStatus),
        }),
      ).annotate({
        identifier: "CostCategoryProcessingStatus",
      });
    case 1:
      return S.Array(CostCategoryProcessingStatus);
    case 2:
      return S.suspend(() =>
        S.Struct({
          CostCategoryArn: S.String,
          EffectiveStart: S.String,
          EffectiveEnd: S.optional(S.String),
          Name: S.String,
          RuleVersion: CostCategoryRuleVersion,
          Rules: CostCategoryRulesList,
          SplitChargeRules: S.optional(CostCategorySplitChargeRulesList),
          ProcessingStatus: S.optional(CostCategoryProcessingStatusList),
          DefaultValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "CostCategory" });
    case 3:
      return S.suspend(() => S.Struct({ CostCategory: S.optional(CostCategory) })).annotate({
        identifier: "DescribeCostCategoryDefinitionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ StartDate: S.String, EndDate: S.optional(S.String) }),
      ).annotate({ identifier: "AnomalyDateInterval" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NumericOperator: NumericOperator,
          StartValue: S.Number,
          EndValue: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TotalImpactFilter" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MonitorArn: S.optional(S.String),
          DateInterval: AnomalyDateInterval,
          Feedback: S.optional(AnomalyFeedbackType),
          TotalImpact: S.optional(TotalImpactFilter),
          NextPageToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetAnomaliesRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Contribution: S.Number })).annotate({
        identifier: "RootCauseImpact",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Service: S.optional(S.String),
          Region: S.optional(S.String),
          LinkedAccount: S.optional(S.String),
          LinkedAccountName: S.optional(S.String),
          UsageType: S.optional(S.String),
          Impact: S.optional(RootCauseImpact),
        }),
      ).annotate({ identifier: "RootCause" });
    case 1:
      return S.Array(RootCause);
    case 2:
      return S.suspend(() => S.Struct({ MaxScore: S.Number, CurrentScore: S.Number })).annotate({
        identifier: "AnomalyScore",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxImpact: S.Number,
          TotalImpact: S.optional(S.Number),
          TotalActualSpend: S.optional(S.Number),
          TotalExpectedSpend: S.optional(S.Number),
          TotalImpactPercentage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Impact" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AnomalyId: S.String,
          AnomalyStartDate: S.optional(S.String),
          AnomalyEndDate: S.optional(S.String),
          DimensionValue: S.optional(S.String),
          RootCauses: S.optional(RootCauses),
          AnomalyScore: AnomalyScore,
          Impact: Impact,
          MonitorArn: S.String,
          Feedback: S.optional(AnomalyFeedbackType),
        }),
      ).annotate({ identifier: "Anomaly" });
    case 5:
      return S.Array(Anomaly);
    case 6:
      return S.suspend(() =>
        S.Struct({ Anomalies: Anomalies, NextPageToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetAnomaliesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MonitorArnList: S.optional(Values),
          NextPageToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetAnomalyMonitorsRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AnomalyMonitor);
    case 1:
      return S.suspend(() =>
        S.Struct({ AnomalyMonitors: AnomalyMonitors, NextPageToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetAnomalyMonitorsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SubscriptionArnList: S.optional(Values),
          MonitorArn: S.optional(S.String),
          NextPageToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetAnomalySubscriptionsRequest",
      });
    case 3:
      return S.Array(AnomalySubscription);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AnomalySubscriptions: AnomalySubscriptions,
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetAnomalySubscriptionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Granularity: Granularity,
          Services: S.optional(UsageServices),
          ApproximationDimension: ApproximationDimension,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetApproximateUsageRecordsRequest",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 7:
      return S.suspend(() => S.Struct({ Start: S.String, End: S.String })).annotate({
        identifier: "DateInterval",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Services: S.optional(ApproximateUsageRecordsPerService),
          TotalRecords: S.optional(S.Number),
          LookbackPeriod: S.optional(DateInterval),
        }),
      ).annotate({
        identifier: "GetApproximateUsageRecordsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AnalysisId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetCommitmentPurchaseAnalysisRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.String),
          EstimatedOnDemandCost: S.optional(S.String),
          CurrentCoverage: S.optional(S.String),
          EstimatedCoverage: S.optional(S.String),
          EstimatedNewCommitmentUtilization: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RecommendationDetailHourlyMetrics",
      });
    case 3:
      return S.Array(RecommendationDetailHourlyMetrics);
    case 4:
      return S.suspend(() =>
        S.Struct({
          CurrencyCode: S.optional(S.String),
          LookbackPeriodInHours: S.optional(S.String),
          CurrentAverageCoverage: S.optional(S.String),
          CurrentAverageHourlyOnDemandSpend: S.optional(S.String),
          CurrentMaximumHourlyOnDemandSpend: S.optional(S.String),
          CurrentMinimumHourlyOnDemandSpend: S.optional(S.String),
          CurrentOnDemandSpend: S.optional(S.String),
          ExistingHourlyCommitment: S.optional(S.String),
          HourlyCommitmentToPurchase: S.optional(S.String),
          EstimatedAverageCoverage: S.optional(S.String),
          EstimatedAverageUtilization: S.optional(S.String),
          EstimatedMonthlySavingsAmount: S.optional(S.String),
          EstimatedOnDemandCost: S.optional(S.String),
          EstimatedOnDemandCostWithCurrentCommitment: S.optional(S.String),
          EstimatedROI: S.optional(S.String),
          EstimatedSavingsAmount: S.optional(S.String),
          EstimatedSavingsPercentage: S.optional(S.String),
          EstimatedCommitmentCost: S.optional(S.String),
          LatestUsageTimestamp: S.optional(S.String),
          UpfrontCost: S.optional(S.String),
          AdditionalMetadata: S.optional(S.String),
          MetricsOverLookbackPeriod: S.optional(MetricsOverLookbackPeriod),
        }),
      ).annotate({
        identifier: "SavingsPlansPurchaseAnalysisDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SavingsPlansPurchaseAnalysisDetails: S.optional(SavingsPlansPurchaseAnalysisDetails),
        }),
      ).annotate({ identifier: "AnalysisDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PaymentOption: S.optional(PaymentOption),
          SavingsPlansType: S.optional(SupportedSavingsPlansType),
          Region: S.optional(S.String),
          InstanceFamily: S.optional(S.String),
          TermInYears: S.optional(TermInYears),
          SavingsPlansCommitment: S.optional(S.Number),
          OfferingId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SavingsPlans" });
    case 7:
      return S.Array(SavingsPlans);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountScope: S.optional(AccountScope),
          AccountId: S.optional(S.String),
          AnalysisType: AnalysisType,
          SavingsPlansToAdd: SavingsPlansToAdd,
          SavingsPlansToExclude: S.optional(SavingsPlansToExclude),
          LookBackTimePeriod: DateInterval,
          SavingsPlansTargetCoverage: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SavingsPlansPurchaseAnalysisConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SavingsPlansPurchaseAnalysisConfiguration: S.optional(
            SavingsPlansPurchaseAnalysisConfiguration,
          ),
        }),
      ).annotate({
        identifier: "CommitmentPurchaseAnalysisConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EstimatedCompletionTime: S.String,
          AnalysisCompletionTime: S.optional(S.String),
          AnalysisStartedTime: S.String,
          AnalysisId: S.String,
          AnalysisStatus: AnalysisStatus,
          ErrorCode: S.optional(ErrorCode),
          AnalysisDetails: S.optional(AnalysisDetails),
          CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration,
        }),
      ).annotate({
        identifier: "GetCommitmentPurchaseAnalysisResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(GroupDefinitionType), Key: S.optional(S.String) }),
      ).annotate({ identifier: "GroupDefinition" });
    case 4:
      return S.Array(GroupDefinition);
    case 5:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          Granularity: Granularity,
          Filter: S.optional(Expression),
          Metrics: MetricNames,
          GroupBy: S.optional(GroupDefinitions),
          BillingViewArn: S.optional(S.String),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetCostAndUsageRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Amount: S.optional(S.String), Unit: S.optional(S.String) }),
      ).annotate({ identifier: "MetricValue" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ MetricValue.pipe(S.optional));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Keys: S.optional(Keys), Metrics: S.optional(Metrics) }),
      ).annotate({ identifier: "Group" });
    case 1:
      return S.Array(Group);
    case 2:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: S.optional(DateInterval),
          Total: S.optional(Metrics),
          Groups: S.optional(Groups),
          Estimated: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ResultByTime" });
    case 3:
      return S.Array(ResultByTime);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), Attributes: S.optional(Attributes) }),
      ).annotate({
        identifier: "DimensionValuesWithAttributes",
      });
    case 6:
      return S.Array(DimensionValuesWithAttributes);
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextPageToken: S.optional(S.String),
          GroupDefinitions: S.optional(GroupDefinitions),
          ResultsByTime: S.optional(ResultsByTime),
          DimensionValueAttributes: S.optional(DimensionValuesWithAttributesList),
        }),
      ).annotate({ identifier: "GetCostAndUsageResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BillingViewArn: S.optional(S.String),
          BaselineTimePeriod: DateInterval,
          ComparisonTimePeriod: DateInterval,
          MetricForComparison: S.String,
          Filter: S.optional(Expression),
          GroupBy: S.optional(GroupDefinitions),
          MaxResults: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetCostAndUsageComparisonsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BaselineTimePeriodAmount: S.optional(S.String),
          ComparisonTimePeriodAmount: S.optional(S.String),
          Difference: S.optional(S.String),
          Unit: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComparisonMetricValue" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ ComparisonMetricValue.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          CostAndUsageSelector: S.optional(Expression),
          Metrics: S.optional(ComparisonMetrics),
        }),
      ).annotate({ identifier: "CostAndUsageComparison" });
    case 4:
      return S.Array(CostAndUsageComparison);
    case 5:
      return S.suspend(() =>
        S.Struct({
          CostAndUsageComparisons: S.optional(CostAndUsageComparisons),
          TotalCostAndUsage: S.optional(ComparisonMetrics),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetCostAndUsageComparisonsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          Granularity: Granularity,
          Filter: Expression,
          Metrics: S.optional(MetricNames),
          GroupBy: S.optional(GroupDefinitions),
          BillingViewArn: S.optional(S.String),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetCostAndUsageWithResourcesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextPageToken: S.optional(S.String),
          GroupDefinitions: S.optional(GroupDefinitions),
          ResultsByTime: S.optional(ResultsByTime),
          DimensionValueAttributes: S.optional(DimensionValuesWithAttributesList),
        }),
      ).annotate({
        identifier: "GetCostAndUsageWithResourcesResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Key: S.String, SortOrder: S.optional(SortOrder) }),
      ).annotate({ identifier: "SortDefinition" });
    case 1:
      return S.Array(SortDefinition);
    case 2:
      return S.suspend(() =>
        S.Struct({
          SearchString: S.optional(S.String),
          TimePeriod: DateInterval,
          CostCategoryName: S.optional(S.String),
          Filter: S.optional(Expression),
          SortBy: S.optional(SortDefinitions),
          BillingViewArn: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetCostCategoriesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextPageToken: S.optional(S.String),
          CostCategoryNames: S.optional(CostCategoryNamesList),
          CostCategoryValues: S.optional(CostCategoryValuesList),
          ReturnSize: S.Number,
          TotalSize: S.Number,
        }),
      ).annotate({
        identifier: "GetCostCategoriesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BillingViewArn: S.optional(S.String),
          BaselineTimePeriod: DateInterval,
          ComparisonTimePeriod: DateInterval,
          MetricForComparison: S.String,
          Filter: S.optional(Expression),
          GroupBy: S.optional(GroupDefinitions),
          MaxResults: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetCostComparisonDriversRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          Metrics: S.optional(ComparisonMetrics),
        }),
      ).annotate({ identifier: "CostDriver" });
    case 6:
      return S.Array(CostDriver);
    case 7:
      return S.suspend(() =>
        S.Struct({
          CostSelector: S.optional(Expression),
          Metrics: S.optional(ComparisonMetrics),
          CostDrivers: S.optional(CostDrivers),
        }),
      ).annotate({ identifier: "CostComparisonDriver" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CostComparisonDriver);
    case 1:
      return S.suspend(() =>
        S.Struct({
          CostComparisonDrivers: S.optional(CostComparisonDrivers),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetCostComparisonDriversResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          Metric: Metric,
          Granularity: Granularity,
          Filter: S.optional(Expression),
          BillingViewArn: S.optional(S.String),
          PredictionIntervalLevel: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetCostForecastRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: S.optional(DateInterval),
          MeanValue: S.optional(S.String),
          PredictionIntervalLowerBound: S.optional(S.String),
          PredictionIntervalUpperBound: S.optional(S.String),
        }),
      ).annotate({ identifier: "ForecastResult" });
    case 4:
      return S.Array(ForecastResult);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Total: S.optional(MetricValue),
          ForecastResultsByTime: S.optional(ForecastResultsByTime),
        }),
      ).annotate({ identifier: "GetCostForecastResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SearchString: S.optional(S.String),
          TimePeriod: DateInterval,
          Dimension: Dimension,
          Context: S.optional(Context),
          Filter: S.optional(Expression),
          SortBy: S.optional(SortDefinitions),
          BillingViewArn: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDimensionValuesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DimensionValues: DimensionValuesWithAttributesList,
          ReturnSize: S.Number,
          TotalSize: S.Number,
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDimensionValuesResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          GroupBy: S.optional(GroupDefinitions),
          Granularity: S.optional(Granularity),
          Filter: S.optional(Expression),
          Metrics: S.optional(MetricNames),
          NextPageToken: S.optional(S.String),
          SortBy: S.optional(SortDefinition),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetReservationCoverageRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OnDemandHours: S.optional(S.String),
          ReservedHours: S.optional(S.String),
          TotalRunningHours: S.optional(S.String),
          CoverageHoursPercentage: S.optional(S.String),
        }),
      ).annotate({ identifier: "CoverageHours" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          OnDemandNormalizedUnits: S.optional(S.String),
          ReservedNormalizedUnits: S.optional(S.String),
          TotalRunningNormalizedUnits: S.optional(S.String),
          CoverageNormalizedUnitsPercentage: S.optional(S.String),
        }),
      ).annotate({ identifier: "CoverageNormalizedUnits" });
    case 3:
      return S.suspend(() => S.Struct({ OnDemandCost: S.optional(S.String) })).annotate({
        identifier: "CoverageCost",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CoverageHours: S.optional(CoverageHours),
          CoverageNormalizedUnits: S.optional(CoverageNormalizedUnits),
          CoverageCost: S.optional(CoverageCost),
        }),
      ).annotate({ identifier: "Coverage" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(Attributes), Coverage: S.optional(Coverage) }),
      ).annotate({ identifier: "ReservationCoverageGroup" });
    case 6:
      return S.Array(ReservationCoverageGroup);
    case 7:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: S.optional(DateInterval),
          Groups: S.optional(ReservationCoverageGroups),
          Total: S.optional(Coverage),
        }),
      ).annotate({ identifier: "CoverageByTime" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CoverageByTime);
    case 1:
      return S.suspend(() =>
        S.Struct({
          CoveragesByTime: CoveragesByTime,
          Total: S.optional(Coverage),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetReservationCoverageResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ OfferingClass: S.optional(OfferingClass) })).annotate({
        identifier: "EC2Specification",
      });
    case 3:
      return S.suspend(() => S.Struct({ EC2Specification: S.optional(EC2Specification) })).annotate(
        { identifier: "ServiceSpecification" },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Service: S.String,
          Filter: S.optional(Expression),
          AccountScope: S.optional(AccountScope),
          LookbackPeriodInDays: S.optional(LookbackPeriodInDays),
          TermInYears: S.optional(TermInYears),
          PaymentOption: S.optional(PaymentOption),
          ServiceSpecification: S.optional(ServiceSpecification),
          PageSize: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetReservationPurchaseRecommendationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RecommendationId: S.optional(S.String),
          GenerationTimestamp: S.optional(S.String),
          AdditionalMetadata: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReservationPurchaseRecommendationMetadata",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Family: S.optional(S.String),
          InstanceType: S.optional(S.String),
          Region: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          Platform: S.optional(S.String),
          Tenancy: S.optional(S.String),
          CurrentGeneration: S.optional(S.Boolean),
          SizeFlexEligible: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EC2InstanceDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Family: S.optional(S.String),
          InstanceType: S.optional(S.String),
          Region: S.optional(S.String),
          DatabaseEngine: S.optional(S.String),
          DatabaseEdition: S.optional(S.String),
          DeploymentOption: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          CurrentGeneration: S.optional(S.Boolean),
          SizeFlexEligible: S.optional(S.Boolean),
          DeploymentModel: S.optional(S.String),
        }),
      ).annotate({ identifier: "RDSInstanceDetails" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Family: S.optional(S.String),
          NodeType: S.optional(S.String),
          Region: S.optional(S.String),
          CurrentGeneration: S.optional(S.Boolean),
          SizeFlexEligible: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RedshiftInstanceDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Family: S.optional(S.String),
          NodeType: S.optional(S.String),
          Region: S.optional(S.String),
          ProductDescription: S.optional(S.String),
          CurrentGeneration: S.optional(S.Boolean),
          SizeFlexEligible: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ElastiCacheInstanceDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceClass: S.optional(S.String),
          InstanceSize: S.optional(S.String),
          Region: S.optional(S.String),
          CurrentGeneration: S.optional(S.Boolean),
          SizeFlexEligible: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ESInstanceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EC2InstanceDetails: S.optional(EC2InstanceDetails),
          RDSInstanceDetails: S.optional(RDSInstanceDetails),
          RedshiftInstanceDetails: S.optional(RedshiftInstanceDetails),
          ElastiCacheInstanceDetails: S.optional(ElastiCacheInstanceDetails),
          ESInstanceDetails: S.optional(ESInstanceDetails),
          MemoryDBInstanceDetails: S.optional(MemoryDBInstanceDetails),
        }),
      ).annotate({ identifier: "InstanceDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ CapacityUnits: S.optional(S.String), Region: S.optional(S.String) }),
      ).annotate({ identifier: "DynamoDBCapacityDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DynamoDBCapacityDetails: S.optional(DynamoDBCapacityDetails) }),
      ).annotate({ identifier: "ReservedCapacityDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          InstanceDetails: S.optional(InstanceDetails),
          RecommendedNumberOfInstancesToPurchase: S.optional(S.String),
          RecommendedNormalizedUnitsToPurchase: S.optional(S.String),
          MinimumNumberOfInstancesUsedPerHour: S.optional(S.String),
          MinimumNormalizedUnitsUsedPerHour: S.optional(S.String),
          MaximumNumberOfInstancesUsedPerHour: S.optional(S.String),
          MaximumNormalizedUnitsUsedPerHour: S.optional(S.String),
          AverageNumberOfInstancesUsedPerHour: S.optional(S.String),
          AverageNormalizedUnitsUsedPerHour: S.optional(S.String),
          AverageUtilization: S.optional(S.String),
          EstimatedBreakEvenInMonths: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
          EstimatedMonthlySavingsAmount: S.optional(S.String),
          EstimatedMonthlySavingsPercentage: S.optional(S.String),
          EstimatedMonthlyOnDemandCost: S.optional(S.String),
          EstimatedReservationCostForLookbackPeriod: S.optional(S.String),
          UpfrontCost: S.optional(S.String),
          RecurringStandardMonthlyCost: S.optional(S.String),
          ReservedCapacityDetails: S.optional(ReservedCapacityDetails),
          RecommendedNumberOfCapacityUnitsToPurchase: S.optional(S.String),
          MinimumNumberOfCapacityUnitsUsedPerHour: S.optional(S.String),
          MaximumNumberOfCapacityUnitsUsedPerHour: S.optional(S.String),
          AverageNumberOfCapacityUnitsUsedPerHour: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReservationPurchaseRecommendationDetail",
      });
    case 7:
      return S.Array(ReservationPurchaseRecommendationDetail);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TotalEstimatedMonthlySavingsAmount: S.optional(S.String),
          TotalEstimatedMonthlySavingsPercentage: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReservationPurchaseRecommendationSummary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountScope: S.optional(AccountScope),
          LookbackPeriodInDays: S.optional(LookbackPeriodInDays),
          TermInYears: S.optional(TermInYears),
          PaymentOption: S.optional(PaymentOption),
          ServiceSpecification: S.optional(ServiceSpecification),
          RecommendationDetails: S.optional(ReservationPurchaseRecommendationDetails),
          RecommendationSummary: S.optional(ReservationPurchaseRecommendationSummary),
        }),
      ).annotate({
        identifier: "ReservationPurchaseRecommendation",
      });
    case 2:
      return S.Array(ReservationPurchaseRecommendation);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Metadata: S.optional(ReservationPurchaseRecommendationMetadata),
          Recommendations: S.optional(ReservationPurchaseRecommendations),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetReservationPurchaseRecommendationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          GroupBy: S.optional(GroupDefinitions),
          Granularity: S.optional(Granularity),
          Filter: S.optional(Expression),
          SortBy: S.optional(SortDefinition),
          NextPageToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetReservationUtilizationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          UtilizationPercentage: S.optional(S.String),
          UtilizationPercentageInUnits: S.optional(S.String),
          PurchasedHours: S.optional(S.String),
          PurchasedUnits: S.optional(S.String),
          TotalActualHours: S.optional(S.String),
          TotalActualUnits: S.optional(S.String),
          UnusedHours: S.optional(S.String),
          UnusedUnits: S.optional(S.String),
          OnDemandCostOfRIHoursUsed: S.optional(S.String),
          NetRISavings: S.optional(S.String),
          TotalPotentialRISavings: S.optional(S.String),
          AmortizedUpfrontFee: S.optional(S.String),
          AmortizedRecurringFee: S.optional(S.String),
          TotalAmortizedFee: S.optional(S.String),
          RICostForUnusedHours: S.optional(S.String),
          RealizedSavings: S.optional(S.String),
          UnrealizedSavings: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReservationAggregates" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Value: S.optional(S.String),
          Attributes: S.optional(Attributes),
          Utilization: S.optional(ReservationAggregates),
        }),
      ).annotate({
        identifier: "ReservationUtilizationGroup",
      });
    case 7:
      return S.Array(ReservationUtilizationGroup);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: S.optional(DateInterval),
          Groups: S.optional(ReservationUtilizationGroups),
          Total: S.optional(ReservationAggregates),
        }),
      ).annotate({ identifier: "UtilizationByTime" });
    case 1:
      return S.Array(UtilizationByTime);
    case 2:
      return S.suspend(() =>
        S.Struct({
          UtilizationsByTime: UtilizationsByTime,
          Total: S.optional(ReservationAggregates),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetReservationUtilizationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RecommendationTarget: RecommendationTarget, BenefitsConsidered: S.Boolean }),
      ).annotate({
        identifier: "RightsizingRecommendationConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(Expression),
          Configuration: S.optional(RightsizingRecommendationConfiguration),
          Service: S.String,
          PageSize: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetRightsizingRecommendationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RecommendationId: S.optional(S.String),
          GenerationTimestamp: S.optional(S.String),
          LookbackPeriodInDays: S.optional(LookbackPeriodInDays),
          AdditionalMetadata: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RightsizingRecommendationMetadata",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TotalRecommendationCount: S.optional(S.String),
          EstimatedTotalMonthlySavingsAmount: S.optional(S.String),
          SavingsCurrencyCode: S.optional(S.String),
          SavingsPercentage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RightsizingRecommendationSummary",
      });
    case 7:
      return S.Array(TagValues);
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HourlyOnDemandRate: S.optional(S.String),
          InstanceType: S.optional(S.String),
          Platform: S.optional(S.String),
          Region: S.optional(S.String),
          Sku: S.optional(S.String),
          Memory: S.optional(S.String),
          NetworkPerformance: S.optional(S.String),
          Storage: S.optional(S.String),
          Vcpu: S.optional(S.String),
        }),
      ).annotate({ identifier: "EC2ResourceDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ EC2ResourceDetails: S.optional(EC2ResourceDetails) }),
      ).annotate({ identifier: "ResourceDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EbsReadOpsPerSecond: S.optional(S.String),
          EbsWriteOpsPerSecond: S.optional(S.String),
          EbsReadBytesPerSecond: S.optional(S.String),
          EbsWriteBytesPerSecond: S.optional(S.String),
        }),
      ).annotate({ identifier: "EBSResourceUtilization" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DiskReadOpsPerSecond: S.optional(S.String),
          DiskWriteOpsPerSecond: S.optional(S.String),
          DiskReadBytesPerSecond: S.optional(S.String),
          DiskWriteBytesPerSecond: S.optional(S.String),
        }),
      ).annotate({ identifier: "DiskResourceUtilization" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          NetworkInBytesPerSecond: S.optional(S.String),
          NetworkOutBytesPerSecond: S.optional(S.String),
          NetworkPacketsInPerSecond: S.optional(S.String),
          NetworkPacketsOutPerSecond: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkResourceUtilization",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxCpuUtilizationPercentage: S.optional(S.String),
          MaxMemoryUtilizationPercentage: S.optional(S.String),
          MaxStorageUtilizationPercentage: S.optional(S.String),
          EBSResourceUtilization: S.optional(EBSResourceUtilization),
          DiskResourceUtilization: S.optional(DiskResourceUtilization),
          NetworkResourceUtilization: S.optional(NetworkResourceUtilization),
        }),
      ).annotate({ identifier: "EC2ResourceUtilization" });
    case 6:
      return S.suspend(() =>
        S.Struct({ EC2ResourceUtilization: S.optional(EC2ResourceUtilization) }),
      ).annotate({ identifier: "ResourceUtilization" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.optional(S.String),
          InstanceName: S.optional(S.String),
          Tags: S.optional(TagValuesList),
          ResourceDetails: S.optional(ResourceDetails),
          ResourceUtilization: S.optional(ResourceUtilization),
          ReservationCoveredHoursInLookbackPeriod: S.optional(S.String),
          SavingsPlansCoveredHoursInLookbackPeriod: S.optional(S.String),
          OnDemandHoursInLookbackPeriod: S.optional(S.String),
          TotalRunningHoursInLookbackPeriod: S.optional(S.String),
          MonthlyCost: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "CurrentInstance" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EstimatedMonthlyCost: S.optional(S.String),
          EstimatedMonthlySavings: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
          DefaultTargetInstance: S.optional(S.Boolean),
          ResourceDetails: S.optional(ResourceDetails),
          ExpectedResourceUtilization: S.optional(ResourceUtilization),
          PlatformDifferences: S.optional(PlatformDifferences),
        }),
      ).annotate({ identifier: "TargetInstance" });
    case 1:
      return S.Array(TargetInstance);
    case 2:
      return S.suspend(() =>
        S.Struct({ TargetInstances: S.optional(TargetInstancesList) }),
      ).annotate({
        identifier: "ModifyRecommendationDetail",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EstimatedMonthlySavings: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TerminateRecommendationDetail",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          CurrentInstance: S.optional(CurrentInstance),
          RightsizingType: S.optional(RightsizingType),
          ModifyRecommendationDetail: S.optional(ModifyRecommendationDetail),
          TerminateRecommendationDetail: S.optional(TerminateRecommendationDetail),
          FindingReasonCodes: S.optional(FindingReasonCodes),
        }),
      ).annotate({
        identifier: "RightsizingRecommendation",
      });
    case 5:
      return S.Array(RightsizingRecommendation);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Metadata: S.optional(RightsizingRecommendationMetadata),
          Summary: S.optional(RightsizingRecommendationSummary),
          RightsizingRecommendations: S.optional(RightsizingRecommendationList),
          NextPageToken: S.optional(S.String),
          Configuration: S.optional(RightsizingRecommendationConfiguration),
        }),
      ).annotate({
        identifier: "GetRightsizingRecommendationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RecommendationDetailId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSavingsPlanPurchaseRecommendationDetailsRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountScope: S.optional(AccountScope),
          LookbackPeriodInDays: S.optional(LookbackPeriodInDays),
          SavingsPlansType: S.optional(SupportedSavingsPlansType),
          TermInYears: S.optional(TermInYears),
          PaymentOption: S.optional(PaymentOption),
          AccountId: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
          InstanceFamily: S.optional(S.String),
          Region: S.optional(S.String),
          OfferingId: S.optional(S.String),
          GenerationTimestamp: S.optional(S.String),
          LatestUsageTimestamp: S.optional(S.String),
          CurrentAverageHourlyOnDemandSpend: S.optional(S.String),
          CurrentMaximumHourlyOnDemandSpend: S.optional(S.String),
          CurrentMinimumHourlyOnDemandSpend: S.optional(S.String),
          EstimatedAverageUtilization: S.optional(S.String),
          EstimatedMonthlySavingsAmount: S.optional(S.String),
          EstimatedOnDemandCost: S.optional(S.String),
          EstimatedOnDemandCostWithCurrentCommitment: S.optional(S.String),
          EstimatedROI: S.optional(S.String),
          EstimatedSPCost: S.optional(S.String),
          EstimatedSavingsAmount: S.optional(S.String),
          EstimatedSavingsPercentage: S.optional(S.String),
          ExistingHourlyCommitment: S.optional(S.String),
          HourlyCommitmentToPurchase: S.optional(S.String),
          UpfrontCost: S.optional(S.String),
          CurrentAverageCoverage: S.optional(S.String),
          EstimatedAverageCoverage: S.optional(S.String),
          MetricsOverLookbackPeriod: S.optional(MetricsOverLookbackPeriod),
        }),
      ).annotate({ identifier: "RecommendationDetailData" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RecommendationDetailId: S.optional(S.String),
          RecommendationDetailData: S.optional(RecommendationDetailData),
        }),
      ).annotate({
        identifier: "GetSavingsPlanPurchaseRecommendationDetailsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          GroupBy: S.optional(GroupDefinitions),
          Granularity: S.optional(Granularity),
          Filter: S.optional(Expression),
          Metrics: S.optional(MetricNames),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          SortBy: S.optional(SortDefinition),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetSavingsPlansCoverageRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SpendCoveredBySavingsPlans: S.optional(S.String),
          OnDemandCost: S.optional(S.String),
          TotalCost: S.optional(S.String),
          CoveragePercentage: S.optional(S.String),
        }),
      ).annotate({ identifier: "SavingsPlansCoverageData" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(Attributes),
          Coverage: S.optional(SavingsPlansCoverageData),
          TimePeriod: S.optional(DateInterval),
        }),
      ).annotate({ identifier: "SavingsPlansCoverage" });
    case 5:
      return S.Array(SavingsPlansCoverage);
    case 6:
      return S.suspend(() =>
        S.Struct({ SavingsPlansCoverages: SavingsPlansCoverages, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetSavingsPlansCoverageResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SavingsPlansType: SupportedSavingsPlansType,
          TermInYears: TermInYears,
          PaymentOption: PaymentOption,
          AccountScope: S.optional(AccountScope),
          NextPageToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
          LookbackPeriodInDays: LookbackPeriodInDays,
          Filter: S.optional(Expression),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetSavingsPlansPurchaseRecommendationRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Region: S.optional(S.String),
          InstanceFamily: S.optional(S.String),
          OfferingId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SavingsPlansDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SavingsPlansDetails: S.optional(SavingsPlansDetails),
          AccountId: S.optional(S.String),
          UpfrontCost: S.optional(S.String),
          EstimatedROI: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
          EstimatedSPCost: S.optional(S.String),
          EstimatedOnDemandCost: S.optional(S.String),
          EstimatedOnDemandCostWithCurrentCommitment: S.optional(S.String),
          EstimatedSavingsAmount: S.optional(S.String),
          EstimatedSavingsPercentage: S.optional(S.String),
          HourlyCommitmentToPurchase: S.optional(S.String),
          EstimatedAverageUtilization: S.optional(S.String),
          EstimatedMonthlySavingsAmount: S.optional(S.String),
          CurrentMinimumHourlyOnDemandSpend: S.optional(S.String),
          CurrentMaximumHourlyOnDemandSpend: S.optional(S.String),
          CurrentAverageHourlyOnDemandSpend: S.optional(S.String),
          RecommendationDetailId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SavingsPlansPurchaseRecommendationDetail",
      });
    case 2:
      return S.Array(SavingsPlansPurchaseRecommendationDetail);
    case 3:
      return S.suspend(() =>
        S.Struct({
          EstimatedROI: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
          EstimatedTotalCost: S.optional(S.String),
          CurrentOnDemandSpend: S.optional(S.String),
          EstimatedSavingsAmount: S.optional(S.String),
          TotalRecommendationCount: S.optional(S.String),
          DailyCommitmentToPurchase: S.optional(S.String),
          HourlyCommitmentToPurchase: S.optional(S.String),
          EstimatedSavingsPercentage: S.optional(S.String),
          EstimatedMonthlySavingsAmount: S.optional(S.String),
          EstimatedOnDemandCostWithCurrentCommitment: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SavingsPlansPurchaseRecommendationSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountScope: S.optional(AccountScope),
          SavingsPlansType: S.optional(SupportedSavingsPlansType),
          TermInYears: S.optional(TermInYears),
          PaymentOption: S.optional(PaymentOption),
          LookbackPeriodInDays: S.optional(LookbackPeriodInDays),
          SavingsPlansPurchaseRecommendationDetails: S.optional(
            SavingsPlansPurchaseRecommendationDetailList,
          ),
          SavingsPlansPurchaseRecommendationSummary: S.optional(
            SavingsPlansPurchaseRecommendationSummary,
          ),
        }),
      ).annotate({
        identifier: "SavingsPlansPurchaseRecommendation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Metadata: S.optional(SavingsPlansPurchaseRecommendationMetadata),
          SavingsPlansPurchaseRecommendation: S.optional(SavingsPlansPurchaseRecommendation),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSavingsPlansPurchaseRecommendationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          Granularity: S.optional(Granularity),
          Filter: S.optional(Expression),
          SortBy: S.optional(SortDefinition),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetSavingsPlansUtilizationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TotalCommitment: S.optional(S.String),
          UsedCommitment: S.optional(S.String),
          UnusedCommitment: S.optional(S.String),
          UtilizationPercentage: S.optional(S.String),
        }),
      ).annotate({ identifier: "SavingsPlansUtilization" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NetSavings: S.optional(S.String),
          OnDemandCostEquivalent: S.optional(S.String),
        }),
      ).annotate({ identifier: "SavingsPlansSavings" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AmortizedRecurringCommitment: S.optional(S.String),
          AmortizedUpfrontCommitment: S.optional(S.String),
          TotalAmortizedCommitment: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SavingsPlansAmortizedCommitment",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          Utilization: SavingsPlansUtilization,
          Savings: S.optional(SavingsPlansSavings),
          AmortizedCommitment: S.optional(SavingsPlansAmortizedCommitment),
        }),
      ).annotate({
        identifier: "SavingsPlansUtilizationByTime",
      });
    case 3:
      return S.Array(SavingsPlansUtilizationByTime);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Utilization: SavingsPlansUtilization,
          Savings: S.optional(SavingsPlansSavings),
          AmortizedCommitment: S.optional(SavingsPlansAmortizedCommitment),
        }),
      ).annotate({
        identifier: "SavingsPlansUtilizationAggregates",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SavingsPlansUtilizationsByTime: S.optional(SavingsPlansUtilizationsByTime),
          Total: SavingsPlansUtilizationAggregates,
        }),
      ).annotate({
        identifier: "GetSavingsPlansUtilizationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          Filter: S.optional(Expression),
          DataType: S.optional(SavingsPlansDataTypes),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          SortBy: S.optional(SortDefinition),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetSavingsPlansUtilizationDetailsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SavingsPlanArn: S.optional(S.String),
          Attributes: S.optional(Attributes),
          Utilization: S.optional(SavingsPlansUtilization),
          Savings: S.optional(SavingsPlansSavings),
          AmortizedCommitment: S.optional(SavingsPlansAmortizedCommitment),
        }),
      ).annotate({
        identifier: "SavingsPlansUtilizationDetail",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SavingsPlansUtilizationDetail);
    case 1:
      return S.suspend(() =>
        S.Struct({
          SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetails,
          Total: S.optional(SavingsPlansUtilizationAggregates),
          TimePeriod: DateInterval,
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSavingsPlansUtilizationDetailsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SearchString: S.optional(S.String),
          TimePeriod: DateInterval,
          TagKey: S.optional(S.String),
          Filter: S.optional(Expression),
          SortBy: S.optional(SortDefinitions),
          BillingViewArn: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetTagsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextPageToken: S.optional(S.String),
          Tags: TagList,
          ReturnSize: S.Number,
          TotalSize: S.Number,
        }),
      ).annotate({ identifier: "GetTagsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: DateInterval,
          Metric: Metric,
          Granularity: Granularity,
          Filter: S.optional(Expression),
          BillingViewArn: S.optional(S.String),
          PredictionIntervalLevel: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetUsageForecastRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AnalysisStatus: S.optional(AnalysisStatus),
          NextPageToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
          AnalysisIds: S.optional(AnalysisIds),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCommitmentPurchaseAnalysesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EstimatedCompletionTime: S.optional(S.String),
          AnalysisCompletionTime: S.optional(S.String),
          AnalysisStartedTime: S.optional(S.String),
          AnalysisStatus: S.optional(AnalysisStatus),
          ErrorCode: S.optional(ErrorCode),
          AnalysisId: S.optional(S.String),
          CommitmentPurchaseAnalysisConfiguration: S.optional(
            CommitmentPurchaseAnalysisConfiguration,
          ),
        }),
      ).annotate({ identifier: "AnalysisSummary" });
    case 7:
      return S.Array(AnalysisSummary);
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AnalysisSummaryList: S.optional(AnalysisSummaryList),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCommitmentPurchaseAnalysesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListCostAllocationTagBackfillHistoryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BackfillFrom: S.optional(S.String),
          RequestedAt: S.optional(S.String),
          CompletedAt: S.optional(S.String),
          BackfillStatus: S.optional(CostAllocationTagBackfillStatus),
          LastUpdatedAt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CostAllocationTagBackfillRequest",
      });
    case 3:
      return S.Array(CostAllocationTagBackfillRequest);
    case 4:
      return S.suspend(() =>
        S.Struct({
          BackfillRequests: S.optional(CostAllocationTagBackfillRequestList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCostAllocationTagBackfillHistoryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(CostAllocationTagStatus),
          TagKeys: S.optional(CostAllocationTagKeyList),
          Type: S.optional(CostAllocationTagType),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCostAllocationTagsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TagKey: S.String,
          Type: CostAllocationTagType,
          Status: CostAllocationTagStatus,
          LastUpdatedDate: S.optional(S.String),
          LastUsedDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "CostAllocationTag" });
    case 7:
      return S.Array(CostAllocationTag);
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CostAllocationTags: S.optional(CostAllocationTagList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCostAllocationTagsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EffectiveOn: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          SupportedResourceTypes: S.optional(ResourceTypesFilterInput),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCostCategoryDefinitionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CostCategoryArn: S.optional(S.String),
          Name: S.optional(S.String),
          EffectiveStart: S.optional(S.String),
          EffectiveEnd: S.optional(S.String),
          NumberOfRules: S.optional(S.Number),
          ProcessingStatus: S.optional(CostCategoryProcessingStatusList),
          Values: S.optional(CostCategoryValuesList),
          DefaultValue: S.optional(S.String),
          SupportedResourceTypes: S.optional(ResourceTypes),
        }),
      ).annotate({ identifier: "CostCategoryReference" });
    case 3:
      return S.Array(CostCategoryReference);
    case 4:
      return S.suspend(() =>
        S.Struct({
          CostCategoryReferences: S.optional(CostCategoryReferencesList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCostCategoryDefinitionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CostCategoryArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCostCategoryResourceAssociationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          CostCategoryName: S.optional(S.String),
          CostCategoryArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CostCategoryResourceAssociation",
      });
    case 7:
      return S.Array(CostCategoryResourceAssociation);
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CostCategoryResourceAssociations: S.optional(CostCategoryResourceAssociations),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCostCategoryResourceAssociationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GenerationStatus: S.optional(GenerationStatus),
          RecommendationIds: S.optional(RecommendationIdList),
          PageSize: S.optional(S.Number),
          NextPageToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSavingsPlansPurchaseRecommendationGenerationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RecommendationId: S.optional(S.String),
          GenerationStatus: S.optional(GenerationStatus),
          GenerationStartedTime: S.optional(S.String),
          GenerationCompletionTime: S.optional(S.String),
          EstimatedCompletionTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "GenerationSummary" });
    case 3:
      return S.Array(GenerationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          GenerationSummaryList: S.optional(GenerationSummaryList),
          NextPageToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSavingsPlansPurchaseRecommendationGenerationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ ResourceTags: S.optional(ResourceTagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AnomalyId: S.String, Feedback: AnomalyFeedbackType }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ProvideAnomalyFeedbackRequest",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AnomalyId: S.String })).annotate({
        identifier: "ProvideAnomalyFeedbackResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartCommitmentPurchaseAnalysisRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AnalysisId: S.String,
          AnalysisStartedTime: S.String,
          EstimatedCompletionTime: S.String,
        }),
      ).annotate({
        identifier: "StartCommitmentPurchaseAnalysisResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ BackfillFrom: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartCostAllocationTagBackfillRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ BackfillRequest: S.optional(CostAllocationTagBackfillRequest) }),
      ).annotate({
        identifier: "StartCostAllocationTagBackfillResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartSavingsPlansPurchaseRecommendationGenerationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecommendationId: S.optional(S.String),
          GenerationStartedTime: S.optional(S.String),
          EstimatedCompletionTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartSavingsPlansPurchaseRecommendationGenerationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, ResourceTags: ResourceTagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, ResourceTagKeys: ResourceTagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ MonitorArn: S.String, MonitorName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateAnomalyMonitorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SubscriptionArn: S.String,
          Threshold: S.optional(S.Number),
          Frequency: S.optional(AnomalySubscriptionFrequency),
          MonitorArnList: S.optional(MonitorArnList),
          Subscribers: S.optional(Subscribers),
          SubscriptionName: S.optional(S.String),
          ThresholdExpression: S.optional(Expression),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAnomalySubscriptionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TagKey: S.String, Status: CostAllocationTagStatus }),
      ).annotate({
        identifier: "CostAllocationTagStatusEntry",
      });
    case 4:
      return S.Array(CostAllocationTagStatusEntry);
    case 5:
      return S.suspend(() =>
        S.Struct({ CostAllocationTagsStatus: CostAllocationTagStatusList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateCostAllocationTagsStatusRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TagKey: S.optional(S.String),
          Code: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateCostAllocationTagsStatusError",
      });
    case 7:
      return S.Array(UpdateCostAllocationTagsStatusError_);
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Errors: S.optional(UpdateCostAllocationTagsStatusErrors) }),
      ).annotate({
        identifier: "UpdateCostAllocationTagsStatusResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CostCategoryArn: S.String,
          EffectiveStart: S.optional(S.String),
          RuleVersion: CostCategoryRuleVersion,
          Rules: CostCategoryRulesList,
          DefaultValue: S.optional(S.String),
          SplitChargeRules: S.optional(CostCategorySplitChargeRulesList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateCostCategoryDefinitionRequest",
      });
  }
}
