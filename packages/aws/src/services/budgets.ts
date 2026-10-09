import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Budgets",
  serviceShapeName: "AWSBudgetServiceGateway",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "budgets" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-10-20");
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
            "https://budgets.us-east-1.api.aws",
            { authSchemes: [{ name: "sigv4", signingRegion: "us-east-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(
            "https://budgets.global.sc2s.sgov.gov",
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
            "https://budgets.global.cloud.adc-e.uk",
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
            "https://budgets.global.csp.hci.ic.gov",
            { authSchemes: [{ name: "sigv4", signingRegion: "us-isof-south-1" }] },
            {},
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://budgets.eusc-de-east-1.api.amazonwebservices.eu", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://budgets.eusc-de-east-1.api.amazonwebservices.eu", _p0(), {});
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://budgets-fips.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
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
              `https://budgets-fips.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://budgets.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://budgets.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          _p1(PartitionResult),
          {},
        );
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
export class BillingViewHealthStatusException
  extends /*@__PURE__*/ S.TaggedError<BillingViewHealthStatusException>()(
    "BillingViewHealthStatusException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class CreationLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<CreationLimitExceededException>()(
    "CreationLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(405),
  ).pipe(C.withBadRequestError) {}
export class DuplicateRecordException
  extends /*@__PURE__*/ S.TaggedError<DuplicateRecordException>()(
    "DuplicateRecordException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ExpiredNextTokenException
  extends /*@__PURE__*/ S.TaggedError<ExpiredNextTokenException>()(
    "ExpiredNextTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalErrorException>()(
    "InternalErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()(
    "InvalidNextTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceLockedException
  extends /*@__PURE__*/ S.TaggedError<ResourceLockedException>()(
    "ResourceLockedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(423),
  ) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AccountId = string;
export type BudgetName = string;
export type NumericValue = string;
export type UnitValue = string;
export interface Spend {
  Amount: string;
  Unit: string;
}
const Spend = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Spend>;
export type PlannedBudgetLimits = { [key: string]: Spend | undefined };
const PlannedBudgetLimits = /*@__PURE__*/ __L.at(__c0, 1);
export type DimensionValue = string;
export type DimensionValues = string[];
const DimensionValues = /*@__PURE__*/ __L.at(__c0, 2);
export type CostFilters = { [key: string]: string[] | undefined };
const CostFilters = /*@__PURE__*/ __L.at(__c0, 3);
export interface CostTypes {
  IncludeTax?: boolean;
  IncludeSubscription?: boolean;
  UseBlended?: boolean;
  IncludeRefund?: boolean;
  IncludeCredit?: boolean;
  IncludeUpfront?: boolean;
  IncludeRecurring?: boolean;
  IncludeOtherSubscription?: boolean;
  IncludeSupport?: boolean;
  IncludeDiscount?: boolean;
  UseAmortized?: boolean;
}
const CostTypes = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<CostTypes>;
export type TimeUnit = "DAILY" | "MONTHLY" | "QUARTERLY" | "ANNUALLY" | "CUSTOM" | (string & {});
const TimeUnit = S.String;

export interface TimePeriod {
  Start?: Date;
  End?: Date;
}
const TimePeriod = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<TimePeriod>;
export interface CalculatedSpend {
  ActualSpend: Spend;
  ForecastedSpend?: Spend;
}
const CalculatedSpend = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<CalculatedSpend>;
export type BudgetType =
  | "USAGE"
  | "COST"
  | "RI_UTILIZATION"
  | "RI_COVERAGE"
  | "SAVINGS_PLANS_UTILIZATION"
  | "SAVINGS_PLANS_COVERAGE"
  | (string & {});
const BudgetType = S.String;

export type AutoAdjustType = "HISTORICAL" | "FORECAST" | (string & {});
const AutoAdjustType = S.String;

export type AdjustmentPeriod = number;
export interface HistoricalOptions {
  BudgetAdjustmentPeriod: number;
  LookBackAvailablePeriods?: number;
}
const HistoricalOptions = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<HistoricalOptions>;
export interface AutoAdjustData {
  AutoAdjustType: AutoAdjustType;
  HistoricalOptions?: HistoricalOptions;
  LastAutoAdjustTime?: Date;
}
const AutoAdjustData = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<AutoAdjustData>;
export type Expressions = Expression[];
const Expressions = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Expressions>;
export type Dimension =
  | "AZ"
  | "INSTANCE_TYPE"
  | "LINKED_ACCOUNT"
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
  | "INVOICING_ENTITY"
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
  | "RESERVATION_MODIFIED"
  | "TAG_KEY"
  | "COST_CATEGORY_NAME"
  | (string & {});
const Dimension = S.String;

export type Value = string;
export type Values = string[];
const Values = DimensionValues as any as S.Schema<Values>;
export type MatchOption =
  | "EQUALS"
  | "ABSENT"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "GREATER_THAN_OR_EQUAL"
  | "CASE_SENSITIVE"
  | "CASE_INSENSITIVE"
  | (string & {});
const MatchOption = S.String;

export type MatchOptions = MatchOption[];
const MatchOptions = /*@__PURE__*/ __L.at(__c1, 2);
export interface ExpressionDimensionValues {
  Key: Dimension;
  Values: string[];
  MatchOptions?: MatchOption[];
}
const ExpressionDimensionValues = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<ExpressionDimensionValues>;
export type TagKey = string;
export interface TagValues {
  Key?: string;
  Values?: string[];
  MatchOptions?: MatchOption[];
}
const TagValues = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<TagValues>;
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
  Dimensions?: ExpressionDimensionValues;
  Tags?: TagValues;
  CostCategories?: CostCategoryValues;
}
const Expression = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<Expression>;
export type Metric =
  | "BlendedCost"
  | "UnblendedCost"
  | "AmortizedCost"
  | "NetUnblendedCost"
  | "NetAmortizedCost"
  | "UsageQuantity"
  | "NormalizedUsageAmount"
  | "Hours"
  | (string & {});
export type Metrics = Metric[];
const Metrics = MatchOptions as any as S.Schema<Metrics>;
export type BillingViewArn = string;
export type HealthStatusValue = "HEALTHY" | "UNHEALTHY" | (string & {});
const HealthStatusValue = S.String;

export type HealthStatusReason =
  | "BILLING_VIEW_NO_ACCESS"
  | "BILLING_VIEW_UNHEALTHY"
  | "FILTER_INVALID"
  | "MULTI_YEAR_HISTORICAL_DATA_DISABLED"
  | (string & {});
const HealthStatusReason = S.String;

export interface HealthStatus {
  Status?: HealthStatusValue;
  StatusReason?: HealthStatusReason;
  LastUpdatedTime?: Date;
}
const HealthStatus = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<HealthStatus>;
export interface Budget {
  BudgetName: string;
  BudgetLimit?: Spend;
  PlannedBudgetLimits?: { [key: string]: Spend | undefined };
  CostFilters?: { [key: string]: string[] | undefined };
  CostTypes?: CostTypes;
  TimeUnit: TimeUnit;
  TimePeriod?: TimePeriod;
  CalculatedSpend?: CalculatedSpend;
  BudgetType: BudgetType;
  LastUpdatedTime?: Date;
  AutoAdjustData?: AutoAdjustData;
  FilterExpression?: Expression;
  Metrics?: Metric[];
  BillingViewArn?: string;
  HealthStatus?: HealthStatus;
}
const Budget = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<Budget>;
export type NotificationType = "ACTUAL" | "FORECASTED" | (string & {});
const NotificationType = S.String;

export type ComparisonOperator = "GREATER_THAN" | "LESS_THAN" | "EQUAL_TO" | (string & {});
const ComparisonOperator = S.String;

export type NotificationThreshold = number;
export type ThresholdType = "PERCENTAGE" | "ABSOLUTE_VALUE" | (string & {});
const ThresholdType = S.String;

export type NotificationState = "OK" | "ALARM" | (string & {});
const NotificationState = S.String;

export interface Notification {
  NotificationType: NotificationType;
  ComparisonOperator: ComparisonOperator;
  Threshold: number;
  ThresholdType?: ThresholdType;
  NotificationState?: NotificationState;
}
const Notification = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<Notification>;
export type SubscriptionType = "SNS" | "EMAIL" | (string & {});
const SubscriptionType = S.String;

export type SubscriberAddress = string | redacted.Redacted<string>;
export interface Subscriber {
  SubscriptionType: SubscriptionType;
  Address: string | redacted.Redacted<string>;
}
const Subscriber = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<Subscriber>;
export type Subscribers = Subscriber[];
const Subscribers = /*@__PURE__*/ __L.at(__c2, 2);
export interface NotificationWithSubscribers {
  Notification: Notification;
  Subscribers: Subscriber[];
}
const NotificationWithSubscribers = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<NotificationWithSubscribers>;
export type NotificationWithSubscribersList = NotificationWithSubscribers[];
const NotificationWithSubscribersList = /*@__PURE__*/ __L.at(__c2, 4);
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export interface ResourceTag {
  Key: string;
  Value: string;
}
const ResourceTag = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<ResourceTag>;
export type ResourceTagList = ResourceTag[];
const ResourceTagList = /*@__PURE__*/ __L.at(__c2, 6);
export interface CreateBudgetRequest {
  AccountId: string;
  Budget: Budget;
  NotificationsWithSubscribers?: NotificationWithSubscribers[];
  ResourceTags?: ResourceTag[];
}
const CreateBudgetRequest = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<CreateBudgetRequest>;
export interface CreateBudgetResponse {}
const CreateBudgetResponse = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<CreateBudgetResponse>;
export type ActionType =
  | "APPLY_IAM_POLICY"
  | "APPLY_SCP_POLICY"
  | "RUN_SSM_DOCUMENTS"
  | (string & {});
const ActionType = S.String;

export interface ActionThreshold {
  ActionThresholdValue: number;
  ActionThresholdType: ThresholdType;
}
const ActionThreshold = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<ActionThreshold>;
export type PolicyArn = string;
export type Role = string;
export type Roles = string[];
const Roles = DimensionValues as any as S.Schema<Roles>;
export type Group = string;
export type Groups = string[];
const Groups = DimensionValues as any as S.Schema<Groups>;
export type User = string;
export type Users = string[];
const Users = DimensionValues as any as S.Schema<Users>;
export interface IamActionDefinition {
  PolicyArn: string;
  Roles?: string[];
  Groups?: string[];
  Users?: string[];
}
const IamActionDefinition = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<IamActionDefinition>;
export type PolicyId = string;
export type TargetId = string;
export type TargetIds = string[];
const TargetIds = DimensionValues as any as S.Schema<TargetIds>;
export interface ScpActionDefinition {
  PolicyId: string;
  TargetIds: string[];
}
const ScpActionDefinition = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ScpActionDefinition>;
export type ActionSubType = "STOP_EC2_INSTANCES" | "STOP_RDS_INSTANCES" | (string & {});
const ActionSubType = S.String;

export type Region = string;
export type InstanceId = string;
export type InstanceIds = string[];
const InstanceIds = DimensionValues as any as S.Schema<InstanceIds>;
export interface SsmActionDefinition {
  ActionSubType: ActionSubType;
  Region: string;
  InstanceIds: string[];
}
const SsmActionDefinition = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<SsmActionDefinition>;
export interface Definition {
  IamActionDefinition?: IamActionDefinition;
  ScpActionDefinition?: ScpActionDefinition;
  SsmActionDefinition?: SsmActionDefinition;
}
const Definition = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<Definition>;
export type RoleArn = string;
export type ApprovalModel = "AUTOMATIC" | "MANUAL" | (string & {});
const ApprovalModel = S.String;

export interface CreateBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  NotificationType: NotificationType;
  ActionType: ActionType;
  ActionThreshold: ActionThreshold;
  Definition: Definition;
  ExecutionRoleArn: string;
  ApprovalModel: ApprovalModel;
  Subscribers: Subscriber[];
  ResourceTags?: ResourceTag[];
}
const CreateBudgetActionRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateBudgetActionRequest>;
export type ActionId = string;
export interface CreateBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
const CreateBudgetActionResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateBudgetActionResponse>;
export interface CreateNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscribers: Subscriber[];
}
const CreateNotificationRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateNotificationRequest>;
export interface CreateNotificationResponse {}
const CreateNotificationResponse =
  CreateBudgetResponse as any as S.Schema<CreateNotificationResponse>;
export interface CreateSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscriber: Subscriber;
}
const CreateSubscriberRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateSubscriberRequest>;
export interface CreateSubscriberResponse {}
const CreateSubscriberResponse = CreateBudgetResponse as any as S.Schema<CreateSubscriberResponse>;
export interface DeleteBudgetRequest {
  AccountId: string;
  BudgetName: string;
}
const DeleteBudgetRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<DeleteBudgetRequest>;
export interface DeleteBudgetResponse {}
const DeleteBudgetResponse = CreateBudgetResponse as any as S.Schema<DeleteBudgetResponse>;
export interface DeleteBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
const DeleteBudgetActionRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeleteBudgetActionRequest>;
export type ActionStatus =
  | "STANDBY"
  | "PENDING"
  | "EXECUTION_IN_PROGRESS"
  | "EXECUTION_SUCCESS"
  | "EXECUTION_FAILURE"
  | "REVERSE_IN_PROGRESS"
  | "REVERSE_SUCCESS"
  | "REVERSE_FAILURE"
  | "RESET_IN_PROGRESS"
  | "RESET_FAILURE"
  | (string & {});
const ActionStatus = S.String;

export interface Action {
  ActionId: string;
  BudgetName: string;
  NotificationType: NotificationType;
  ActionType: ActionType;
  ActionThreshold: ActionThreshold;
  Definition: Definition;
  ExecutionRoleArn: string;
  ApprovalModel: ApprovalModel;
  Status: ActionStatus;
  Subscribers: Subscriber[];
}
const Action = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<Action>;
export interface DeleteBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  Action: Action;
}
const DeleteBudgetActionResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteBudgetActionResponse>;
export interface DeleteNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
}
const DeleteNotificationRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteNotificationRequest>;
export interface DeleteNotificationResponse {}
const DeleteNotificationResponse =
  CreateBudgetResponse as any as S.Schema<DeleteNotificationResponse>;
export interface DeleteSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscriber: Subscriber;
}
const DeleteSubscriberRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteSubscriberRequest>;
export interface DeleteSubscriberResponse {}
const DeleteSubscriberResponse = CreateBudgetResponse as any as S.Schema<DeleteSubscriberResponse>;
export interface DescribeBudgetRequest {
  AccountId: string;
  BudgetName: string;
  ShowFilterExpression?: boolean;
}
const DescribeBudgetRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DescribeBudgetRequest>;
export interface DescribeBudgetResponse {
  Budget?: Budget;
}
const DescribeBudgetResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DescribeBudgetResponse>;
export interface DescribeBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
const DescribeBudgetActionRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DescribeBudgetActionRequest>;
export interface DescribeBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  Action: Action;
}
const DescribeBudgetActionResponse =
  DeleteBudgetActionResponse as any as S.Schema<DescribeBudgetActionResponse>;
export type MaxResults = number;
export interface DescribeBudgetActionHistoriesRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  TimePeriod?: TimePeriod;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeBudgetActionHistoriesRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DescribeBudgetActionHistoriesRequest>;
export type EventType =
  | "SYSTEM"
  | "CREATE_ACTION"
  | "DELETE_ACTION"
  | "UPDATE_ACTION"
  | "EXECUTE_ACTION"
  | (string & {});
const EventType = S.String;

export interface ActionHistoryDetails {
  Message: string;
  Action: Action;
}
const ActionHistoryDetails = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<ActionHistoryDetails>;
export interface ActionHistory {
  Timestamp: Date;
  Status: ActionStatus;
  EventType: EventType;
  ActionHistoryDetails: ActionHistoryDetails;
}
const ActionHistory = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ActionHistory>;
export type ActionHistories = ActionHistory[];
const ActionHistories = /*@__PURE__*/ __L.at(__c5, 6);
export interface DescribeBudgetActionHistoriesResponse {
  ActionHistories: ActionHistory[];
  NextToken?: string;
}
const DescribeBudgetActionHistoriesResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DescribeBudgetActionHistoriesResponse>;
export interface DescribeBudgetActionsForAccountRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeBudgetActionsForAccountRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DescribeBudgetActionsForAccountRequest>;
export type Actions = Action[];
const Actions = /*@__PURE__*/ __L.at(__c6, 1);
export interface DescribeBudgetActionsForAccountResponse {
  Actions: Action[];
  NextToken?: string;
}
const DescribeBudgetActionsForAccountResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DescribeBudgetActionsForAccountResponse>;
export interface DescribeBudgetActionsForBudgetRequest {
  AccountId: string;
  BudgetName: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeBudgetActionsForBudgetRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DescribeBudgetActionsForBudgetRequest>;
export interface DescribeBudgetActionsForBudgetResponse {
  Actions: Action[];
  NextToken?: string;
}
const DescribeBudgetActionsForBudgetResponse =
  DescribeBudgetActionsForAccountResponse as any as S.Schema<DescribeBudgetActionsForBudgetResponse>;
export type MaxResultsBudgetNotifications = number;
export interface DescribeBudgetNotificationsForAccountRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeBudgetNotificationsForAccountRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DescribeBudgetNotificationsForAccountRequest>;
export type Notifications = Notification[];
const Notifications = /*@__PURE__*/ __L.at(__c6, 5);
export interface BudgetNotificationsForAccount {
  Notifications?: Notification[];
  BudgetName?: string;
}
const BudgetNotificationsForAccount = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<BudgetNotificationsForAccount>;
export type BudgetNotificationsForAccountList = BudgetNotificationsForAccount[];
const BudgetNotificationsForAccountList = /*@__PURE__*/ __L.at(__c6, 7);
export interface DescribeBudgetNotificationsForAccountResponse {
  BudgetNotificationsForAccount?: BudgetNotificationsForAccount[];
  NextToken?: string;
}
const DescribeBudgetNotificationsForAccountResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DescribeBudgetNotificationsForAccountResponse>;
export interface DescribeBudgetPerformanceHistoryRequest {
  AccountId: string;
  BudgetName: string;
  TimePeriod?: TimePeriod;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeBudgetPerformanceHistoryRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DescribeBudgetPerformanceHistoryRequest>;
export interface BudgetedAndActualAmounts {
  BudgetedAmount?: Spend;
  ActualAmount?: Spend;
  TimePeriod?: TimePeriod;
}
const BudgetedAndActualAmounts = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<BudgetedAndActualAmounts>;
export type BudgetedAndActualAmountsList = BudgetedAndActualAmounts[];
const BudgetedAndActualAmountsList = /*@__PURE__*/ __L.at(__c7, 3);
export interface BudgetPerformanceHistory {
  BudgetName?: string;
  BudgetType?: BudgetType;
  CostFilters?: { [key: string]: string[] | undefined };
  CostTypes?: CostTypes;
  TimeUnit?: TimeUnit;
  BillingViewArn?: string;
  BudgetedAndActualAmountsList?: BudgetedAndActualAmounts[];
  FilterExpression?: Expression;
  Metrics?: Metric[];
}
const BudgetPerformanceHistory = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<BudgetPerformanceHistory>;
export interface DescribeBudgetPerformanceHistoryResponse {
  BudgetPerformanceHistory?: BudgetPerformanceHistory;
  NextToken?: string;
}
const DescribeBudgetPerformanceHistoryResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DescribeBudgetPerformanceHistoryResponse>;
export type MaxResultsDescribeBudgets = number;
export interface DescribeBudgetsRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
  ShowFilterExpression?: boolean;
}
const DescribeBudgetsRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DescribeBudgetsRequest>;
export type Budgets = Budget[];
const Budgets = /*@__PURE__*/ __L.at(__c7, 7);
export interface DescribeBudgetsResponse {
  Budgets?: Budget[];
  NextToken?: string;
}
const DescribeBudgetsResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DescribeBudgetsResponse>;
export interface DescribeNotificationsForBudgetRequest {
  AccountId: string;
  BudgetName: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeNotificationsForBudgetRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribeNotificationsForBudgetRequest>;
export interface DescribeNotificationsForBudgetResponse {
  Notifications?: Notification[];
  NextToken?: string;
}
const DescribeNotificationsForBudgetResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribeNotificationsForBudgetResponse>;
export interface DescribeSubscribersForNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeSubscribersForNotificationRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DescribeSubscribersForNotificationRequest>;
export interface DescribeSubscribersForNotificationResponse {
  Subscribers?: Subscriber[];
  NextToken?: string;
}
const DescribeSubscribersForNotificationResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DescribeSubscribersForNotificationResponse>;
export type ExecutionType =
  | "APPROVE_BUDGET_ACTION"
  | "RETRY_BUDGET_ACTION"
  | "REVERSE_BUDGET_ACTION"
  | "RESET_BUDGET_ACTION"
  | (string & {});
const ExecutionType = S.String;

export interface ExecuteBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  ExecutionType: ExecutionType;
}
const ExecuteBudgetActionRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<ExecuteBudgetActionRequest>;
export interface ExecuteBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  ExecutionType: ExecutionType;
}
const ExecuteBudgetActionResponse = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ExecuteBudgetActionResponse>;
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  ResourceTags?: ResourceTag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TagResourceRequest {
  ResourceARN: string;
  ResourceTags: ResourceTag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CreateBudgetResponse as any as S.Schema<TagResourceResponse>;
export type ResourceTagKeyList = string[];
const ResourceTagKeyList = DimensionValues as any as S.Schema<ResourceTagKeyList>;
export interface UntagResourceRequest {
  ResourceARN: string;
  ResourceTagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CreateBudgetResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateBudgetRequest {
  AccountId: string;
  NewBudget: Budget;
}
const UpdateBudgetRequest = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<UpdateBudgetRequest>;
export interface UpdateBudgetResponse {}
const UpdateBudgetResponse = CreateBudgetResponse as any as S.Schema<UpdateBudgetResponse>;
export interface UpdateBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  NotificationType?: NotificationType;
  ActionThreshold?: ActionThreshold;
  Definition?: Definition;
  ExecutionRoleArn?: string;
  ApprovalModel?: ApprovalModel;
  Subscribers?: Subscriber[];
}
const UpdateBudgetActionRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<UpdateBudgetActionRequest>;
export interface UpdateBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  OldAction: Action;
  NewAction: Action;
}
const UpdateBudgetActionResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<UpdateBudgetActionResponse>;
export interface UpdateNotificationRequest {
  AccountId: string;
  BudgetName: string;
  OldNotification: Notification;
  NewNotification: Notification;
}
const UpdateNotificationRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<UpdateNotificationRequest>;
export interface UpdateNotificationResponse {}
const UpdateNotificationResponse =
  CreateBudgetResponse as any as S.Schema<UpdateNotificationResponse>;
export interface UpdateSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  OldSubscriber: Subscriber;
  NewSubscriber: Subscriber;
}
const UpdateSubscriberRequest = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<UpdateSubscriberRequest>;
export interface UpdateSubscriberResponse {}
const UpdateSubscriberResponse = CreateBudgetResponse as any as S.Schema<UpdateSubscriberResponse>;
export type ErrorMessage = string;
export type CreateBudgetError =
  | AccessDeniedException
  | BillingViewHealthStatusException
  | CreationLimitExceededException
  | DuplicateRecordException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a budget and, if included, notifications and subscribers.
 *
 * Only one of `BudgetLimit` or `PlannedBudgetLimits` can be present in
 * the syntax at one time. Use the syntax that matches your use case. The Request Syntax
 * section shows the `BudgetLimit` syntax. For `PlannedBudgetLimits`,
 * see the Examples section.
 *
 * Similarly, only one set of filter and metric selections can be present in the syntax
 * at one time. Either `FilterExpression` and `Metrics` or
 * `CostFilters` and `CostTypes`, not both or a different
 * combination. We recommend using `FilterExpression` and `Metrics`
 * as they provide more flexible and powerful filtering capabilities. The Request Syntax
 * section shows the `FilterExpression`/`Metrics` syntax.
 */
export const createBudget: API.OperationMethod<
  CreateBudgetRequest,
  CreateBudgetResponse,
  CreateBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBudgetRequest,
  output: CreateBudgetResponse,
  errors: [
    AccessDeniedException,
    BillingViewHealthStatusException,
    CreationLimitExceededException,
    DuplicateRecordException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBudget",
}));

export type CreateBudgetActionError =
  | AccessDeniedException
  | CreationLimitExceededException
  | DuplicateRecordException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a budget action.
 */
export const createBudgetAction: API.OperationMethod<
  CreateBudgetActionRequest,
  CreateBudgetActionResponse,
  CreateBudgetActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBudgetActionRequest,
  output: CreateBudgetActionResponse,
  errors: [
    AccessDeniedException,
    CreationLimitExceededException,
    DuplicateRecordException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBudgetAction",
}));

export type CreateNotificationError =
  | AccessDeniedException
  | CreationLimitExceededException
  | DuplicateRecordException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a notification. You must create the budget before you create the associated notification.
 */
export const createNotification: API.OperationMethod<
  CreateNotificationRequest,
  CreateNotificationResponse,
  CreateNotificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNotificationRequest,
  output: CreateNotificationResponse,
  errors: [
    AccessDeniedException,
    CreationLimitExceededException,
    DuplicateRecordException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNotification",
}));

export type CreateSubscriberError =
  | AccessDeniedException
  | CreationLimitExceededException
  | DuplicateRecordException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
 */
export const createSubscriber: API.OperationMethod<
  CreateSubscriberRequest,
  CreateSubscriberResponse,
  CreateSubscriberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSubscriberRequest,
  output: CreateSubscriberResponse,
  errors: [
    AccessDeniedException,
    CreationLimitExceededException,
    DuplicateRecordException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSubscriber",
}));

export type DeleteBudgetError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a budget. You can delete your budget at any time.
 *
 * Deleting a budget also deletes the notifications and subscribers that are associated with that budget.
 */
export const deleteBudget: API.OperationMethod<
  DeleteBudgetRequest,
  DeleteBudgetResponse,
  DeleteBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBudgetRequest,
  output: DeleteBudgetResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBudget",
}));

export type DeleteBudgetActionError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ResourceLockedException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a budget action.
 */
export const deleteBudgetAction: API.OperationMethod<
  DeleteBudgetActionRequest,
  DeleteBudgetActionResponse,
  DeleteBudgetActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBudgetActionRequest,
  output: DeleteBudgetActionResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ResourceLockedException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBudgetAction",
}));

export type DeleteNotificationError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a notification.
 *
 * Deleting a notification also deletes the subscribers that are associated with the notification.
 */
export const deleteNotification: API.OperationMethod<
  DeleteNotificationRequest,
  DeleteNotificationResponse,
  DeleteNotificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNotificationRequest,
  output: DeleteNotificationResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNotification",
}));

export type DeleteSubscriberError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a subscriber.
 *
 * Deleting the last subscriber to a notification also deletes the notification.
 */
export const deleteSubscriber: API.OperationMethod<
  DeleteSubscriberRequest,
  DeleteSubscriberResponse,
  DeleteSubscriberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSubscriberRequest,
  output: DeleteSubscriberResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSubscriber",
}));

export type DescribeBudgetError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes a budget.
 *
 * The Request Syntax section shows the `BudgetLimit` syntax. For
 * `PlannedBudgetLimits`, see the Examples section.
 */
export const describeBudget: API.OperationMethod<
  DescribeBudgetRequest,
  DescribeBudgetResponse,
  DescribeBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeBudgetRequest,
  output: DescribeBudgetResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudget",
}));

export type DescribeBudgetActionError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes a budget action detail.
 */
export const describeBudgetAction: API.OperationMethod<
  DescribeBudgetActionRequest,
  DescribeBudgetActionResponse,
  DescribeBudgetActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeBudgetActionRequest,
  output: DescribeBudgetActionResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudgetAction",
}));

export type DescribeBudgetActionHistoriesError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes a budget action history detail.
 */
export const describeBudgetActionHistories: API.PaginatedOperationMethod<
  DescribeBudgetActionHistoriesRequest,
  DescribeBudgetActionHistoriesResponse,
  DescribeBudgetActionHistoriesError,
  Credentials | HttpClient.HttpClient,
  ActionHistory
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeBudgetActionHistoriesRequest,
  output: DescribeBudgetActionHistoriesResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudgetActionHistories",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ActionHistories",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeBudgetActionsForAccountError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes all of the budget actions for an account.
 */
export const describeBudgetActionsForAccount: API.PaginatedOperationMethod<
  DescribeBudgetActionsForAccountRequest,
  DescribeBudgetActionsForAccountResponse,
  DescribeBudgetActionsForAccountError,
  Credentials | HttpClient.HttpClient,
  Action
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeBudgetActionsForAccountRequest,
  output: DescribeBudgetActionsForAccountResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudgetActionsForAccount",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Actions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeBudgetActionsForBudgetError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes all of the budget actions for a budget.
 */
export const describeBudgetActionsForBudget: API.PaginatedOperationMethod<
  DescribeBudgetActionsForBudgetRequest,
  DescribeBudgetActionsForBudgetResponse,
  DescribeBudgetActionsForBudgetError,
  Credentials | HttpClient.HttpClient,
  Action
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeBudgetActionsForBudgetRequest,
  output: DescribeBudgetActionsForBudgetResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudgetActionsForBudget",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Actions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeBudgetNotificationsForAccountError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the budget names and notifications that are associated with an account.
 */
export const describeBudgetNotificationsForAccount: API.PaginatedOperationMethod<
  DescribeBudgetNotificationsForAccountRequest,
  DescribeBudgetNotificationsForAccountResponse,
  DescribeBudgetNotificationsForAccountError,
  Credentials | HttpClient.HttpClient,
  BudgetNotificationsForAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeBudgetNotificationsForAccountRequest,
  output: DescribeBudgetNotificationsForAccountResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudgetNotificationsForAccount",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "BudgetNotificationsForAccount",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeBudgetPerformanceHistoryError =
  | AccessDeniedException
  | BillingViewHealthStatusException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes the history for `DAILY`, `MONTHLY`, and `QUARTERLY` budgets. Budget history isn't available for `ANNUAL` budgets.
 */
export const describeBudgetPerformanceHistory: API.PaginatedOperationMethod<
  DescribeBudgetPerformanceHistoryRequest,
  DescribeBudgetPerformanceHistoryResponse,
  DescribeBudgetPerformanceHistoryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeBudgetPerformanceHistoryRequest,
  output: DescribeBudgetPerformanceHistoryResponse,
  errors: [
    AccessDeniedException,
    BillingViewHealthStatusException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudgetPerformanceHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeBudgetsError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the budgets that are associated with an account.
 *
 * The Request Syntax section shows the `BudgetLimit` syntax. For
 * `PlannedBudgetLimits`, see the Examples section.
 */
export const describeBudgets: API.PaginatedOperationMethod<
  DescribeBudgetsRequest,
  DescribeBudgetsResponse,
  DescribeBudgetsError,
  Credentials | HttpClient.HttpClient,
  Budget
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeBudgetsRequest,
  output: DescribeBudgetsResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBudgets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Budgets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeNotificationsForBudgetError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the notifications that are associated with a budget.
 */
export const describeNotificationsForBudget: API.PaginatedOperationMethod<
  DescribeNotificationsForBudgetRequest,
  DescribeNotificationsForBudgetResponse,
  DescribeNotificationsForBudgetError,
  Credentials | HttpClient.HttpClient,
  Notification
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeNotificationsForBudgetRequest,
  output: DescribeNotificationsForBudgetResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNotificationsForBudget",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Notifications",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSubscribersForNotificationError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the subscribers that are associated with a notification.
 */
export const describeSubscribersForNotification: API.PaginatedOperationMethod<
  DescribeSubscribersForNotificationRequest,
  DescribeSubscribersForNotificationResponse,
  DescribeSubscribersForNotificationError,
  Credentials | HttpClient.HttpClient,
  Subscriber
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSubscribersForNotificationRequest,
  output: DescribeSubscribersForNotificationResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSubscribersForNotification",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Subscribers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ExecuteBudgetActionError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ResourceLockedException
  | ThrottlingException
  | CommonErrors;
/**
 * Executes a budget action.
 */
export const executeBudgetAction: API.OperationMethod<
  ExecuteBudgetActionRequest,
  ExecuteBudgetActionResponse,
  ExecuteBudgetActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteBudgetActionRequest,
  output: ExecuteBudgetActionResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ResourceLockedException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteBudgetAction",
}));

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists tags associated with a budget or budget action resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates tags for a budget or budget action resource.
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
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes tags associated with a budget or budget action resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateBudgetError =
  | AccessDeniedException
  | BillingViewHealthStatusException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a budget. You can change every part of a budget except for the `budgetName` and the `calculatedSpend`. When you modify a budget, the `calculatedSpend` drops to zero until Amazon Web Services has new usage data to use for forecasting.
 *
 * Only one of `BudgetLimit` or `PlannedBudgetLimits` can be present in
 * the syntax at one time. Use the syntax that matches your case. The Request Syntax
 * section shows the `BudgetLimit` syntax. For `PlannedBudgetLimits`,
 * see the Examples section.
 *
 * Similarly, only one set of filter and metric selections can be present in the syntax
 * at one time. Either `FilterExpression` and `Metrics` or
 * `CostFilters` and `CostTypes`, not both or a different
 * combination. We recommend using `FilterExpression` and `Metrics`
 * as they provide more flexible and powerful filtering capabilities. The Request Syntax
 * section shows the `FilterExpression`/`Metrics` syntax.
 */
export const updateBudget: API.OperationMethod<
  UpdateBudgetRequest,
  UpdateBudgetResponse,
  UpdateBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBudgetRequest,
  output: UpdateBudgetResponse,
  errors: [
    AccessDeniedException,
    BillingViewHealthStatusException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBudget",
}));

export type UpdateBudgetActionError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ResourceLockedException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a budget action.
 */
export const updateBudgetAction: API.OperationMethod<
  UpdateBudgetActionRequest,
  UpdateBudgetActionResponse,
  UpdateBudgetActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBudgetActionRequest,
  output: UpdateBudgetActionResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ResourceLockedException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBudgetAction",
}));

export type UpdateNotificationError =
  | AccessDeniedException
  | DuplicateRecordException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a notification.
 */
export const updateNotification: API.OperationMethod<
  UpdateNotificationRequest,
  UpdateNotificationResponse,
  UpdateNotificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNotificationRequest,
  output: UpdateNotificationResponse,
  errors: [
    AccessDeniedException,
    DuplicateRecordException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNotification",
}));

export type UpdateSubscriberError =
  | AccessDeniedException
  | DuplicateRecordException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a subscriber.
 */
export const updateSubscriber: API.OperationMethod<
  UpdateSubscriberRequest,
  UpdateSubscriberResponse,
  UpdateSubscriberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSubscriberRequest,
  output: UpdateSubscriberResponse,
  errors: [
    AccessDeniedException,
    DuplicateRecordException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSubscriber",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Amount: S.String, Unit: S.String })).annotate({
        identifier: "Spend",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ Spend.pipe(S.optional));
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ DimensionValues.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          IncludeTax: S.optional(S.Boolean),
          IncludeSubscription: S.optional(S.Boolean),
          UseBlended: S.optional(S.Boolean),
          IncludeRefund: S.optional(S.Boolean),
          IncludeCredit: S.optional(S.Boolean),
          IncludeUpfront: S.optional(S.Boolean),
          IncludeRecurring: S.optional(S.Boolean),
          IncludeOtherSubscription: S.optional(S.Boolean),
          IncludeSupport: S.optional(S.Boolean),
          IncludeDiscount: S.optional(S.Boolean),
          UseAmortized: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CostTypes" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Start: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          End: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TimePeriod" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ActualSpend: Spend, ForecastedSpend: S.optional(Spend) }),
      ).annotate({ identifier: "CalculatedSpend" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BudgetAdjustmentPeriod: S.Number,
          LookBackAvailablePeriods: S.optional(S.Number),
        }),
      ).annotate({ identifier: "HistoricalOptions" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AutoAdjustType: AutoAdjustType,
          HistoricalOptions: S.optional(HistoricalOptions),
          LastAutoAdjustTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AutoAdjustData" });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Expression> => Expression).annotate({
          identifier: "Expression",
        }),
      );
    case 2:
      return S.Array(MatchOption);
    case 3:
      return S.suspend(() =>
        S.Struct({ Key: Dimension, Values: Values, MatchOptions: S.optional(MatchOptions) }),
      ).annotate({
        identifier: "ExpressionDimensionValues",
      });
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
          Dimensions: S.optional(ExpressionDimensionValues),
          Tags: S.optional(TagValues),
          CostCategories: S.optional(CostCategoryValues),
        }),
      ).annotate({ identifier: "Expression" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(HealthStatusValue),
          StatusReason: S.optional(HealthStatusReason),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "HealthStatus" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BudgetName: S.String,
          BudgetLimit: S.optional(Spend),
          PlannedBudgetLimits: S.optional(PlannedBudgetLimits),
          CostFilters: S.optional(CostFilters),
          CostTypes: S.optional(CostTypes),
          TimeUnit: TimeUnit,
          TimePeriod: S.optional(TimePeriod),
          CalculatedSpend: S.optional(CalculatedSpend),
          BudgetType: BudgetType,
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AutoAdjustData: S.optional(AutoAdjustData),
          FilterExpression: S.optional(Expression),
          Metrics: S.optional(Metrics),
          BillingViewArn: S.optional(S.String),
          HealthStatus: S.optional(HealthStatus),
        }),
      ).annotate({ identifier: "Budget" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NotificationType: NotificationType,
          ComparisonOperator: ComparisonOperator,
          Threshold: S.Number,
          ThresholdType: S.optional(ThresholdType),
          NotificationState: S.optional(NotificationState),
        }),
      ).annotate({ identifier: "Notification" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SubscriptionType: SubscriptionType, Address: SensitiveString }),
      ).annotate({ identifier: "Subscriber" });
    case 2:
      return S.Array(Subscriber);
    case 3:
      return S.suspend(() =>
        S.Struct({ Notification: Notification, Subscribers: Subscribers }),
      ).annotate({
        identifier: "NotificationWithSubscribers",
      });
    case 4:
      return S.Array(NotificationWithSubscribers);
    case 5:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "ResourceTag",
      });
    case 6:
      return S.Array(ResourceTag);
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          Budget: Budget,
          NotificationsWithSubscribers: S.optional(NotificationWithSubscribersList),
          ResourceTags: S.optional(ResourceTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateBudgetRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CreateBudgetResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ActionThresholdValue: S.Number, ActionThresholdType: ThresholdType }),
      ).annotate({ identifier: "ActionThreshold" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.String,
          Roles: S.optional(Roles),
          Groups: S.optional(Groups),
          Users: S.optional(Users),
        }),
      ).annotate({ identifier: "IamActionDefinition" });
    case 3:
      return S.suspend(() => S.Struct({ PolicyId: S.String, TargetIds: TargetIds })).annotate({
        identifier: "ScpActionDefinition",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ActionSubType: ActionSubType, Region: S.String, InstanceIds: InstanceIds }),
      ).annotate({ identifier: "SsmActionDefinition" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IamActionDefinition: S.optional(IamActionDefinition),
          ScpActionDefinition: S.optional(ScpActionDefinition),
          SsmActionDefinition: S.optional(SsmActionDefinition),
        }),
      ).annotate({ identifier: "Definition" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          NotificationType: NotificationType,
          ActionType: ActionType,
          ActionThreshold: ActionThreshold,
          Definition: Definition,
          ExecutionRoleArn: S.String,
          ApprovalModel: ApprovalModel,
          Subscribers: Subscribers,
          ResourceTags: S.optional(ResourceTagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateBudgetActionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String, ActionId: S.String }),
      ).annotate({
        identifier: "CreateBudgetActionResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: Notification,
          Subscribers: Subscribers,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateNotificationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: Notification,
          Subscriber: Subscriber,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSubscriberRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteBudgetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String, ActionId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteBudgetActionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ActionId: S.String,
          BudgetName: S.String,
          NotificationType: NotificationType,
          ActionType: ActionType,
          ActionThreshold: ActionThreshold,
          Definition: Definition,
          ExecutionRoleArn: S.String,
          ApprovalModel: ApprovalModel,
          Status: ActionStatus,
          Subscribers: Subscribers,
        }),
      ).annotate({ identifier: "Action" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String, Action: Action }),
      ).annotate({
        identifier: "DeleteBudgetActionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String, Notification: Notification }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteNotificationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: Notification,
          Subscriber: Subscriber,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteSubscriberRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          ShowFilterExpression: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeBudgetRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Budget: S.optional(Budget) })).annotate({
        identifier: "DescribeBudgetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String, ActionId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeBudgetActionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          ActionId: S.String,
          TimePeriod: S.optional(TimePeriod),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBudgetActionHistoriesRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Message: S.String, Action: Action })).annotate({
        identifier: "ActionHistoryDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: ActionStatus,
          EventType: EventType,
          ActionHistoryDetails: ActionHistoryDetails,
        }),
      ).annotate({ identifier: "ActionHistory" });
    case 6:
      return S.Array(ActionHistory);
    case 7:
      return S.suspend(() =>
        S.Struct({ ActionHistories: ActionHistories, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeBudgetActionHistoriesResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBudgetActionsForAccountRequest",
      });
    case 1:
      return S.Array(Action);
    case 2:
      return S.suspend(() =>
        S.Struct({ Actions: Actions, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeBudgetActionsForAccountResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBudgetActionsForBudgetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBudgetNotificationsForAccountRequest",
      });
    case 5:
      return S.Array(Notification);
    case 6:
      return S.suspend(() =>
        S.Struct({ Notifications: S.optional(Notifications), BudgetName: S.optional(S.String) }),
      ).annotate({
        identifier: "BudgetNotificationsForAccount",
      });
    case 7:
      return S.Array(BudgetNotificationsForAccount);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BudgetNotificationsForAccount: S.optional(BudgetNotificationsForAccountList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeBudgetNotificationsForAccountResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          TimePeriod: S.optional(TimePeriod),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBudgetPerformanceHistoryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BudgetedAmount: S.optional(Spend),
          ActualAmount: S.optional(Spend),
          TimePeriod: S.optional(TimePeriod),
        }),
      ).annotate({ identifier: "BudgetedAndActualAmounts" });
    case 3:
      return S.Array(BudgetedAndActualAmounts);
    case 4:
      return S.suspend(() =>
        S.Struct({
          BudgetName: S.optional(S.String),
          BudgetType: S.optional(BudgetType),
          CostFilters: S.optional(CostFilters),
          CostTypes: S.optional(CostTypes),
          TimeUnit: S.optional(TimeUnit),
          BillingViewArn: S.optional(S.String),
          BudgetedAndActualAmountsList: S.optional(BudgetedAndActualAmountsList),
          FilterExpression: S.optional(Expression),
          Metrics: S.optional(Metrics),
        }),
      ).annotate({ identifier: "BudgetPerformanceHistory" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BudgetPerformanceHistory: S.optional(BudgetPerformanceHistory),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeBudgetPerformanceHistoryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ShowFilterExpression: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeBudgetsRequest" });
    case 7:
      return S.Array(Budget);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Budgets: S.optional(Budgets), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeBudgetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeNotificationsForBudgetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Notifications: S.optional(Notifications), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeNotificationsForBudgetResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: Notification,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSubscribersForNotificationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Subscribers: S.optional(Subscribers), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeSubscribersForNotificationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          ActionId: S.String,
          ExecutionType: ExecutionType,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ExecuteBudgetActionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          ActionId: S.String,
          ExecutionType: ExecutionType,
        }),
      ).annotate({
        identifier: "ExecuteBudgetActionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ResourceTags: S.optional(ResourceTagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, ResourceTags: ResourceTagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, ResourceTagKeys: ResourceTagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, NewBudget: Budget }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateBudgetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          ActionId: S.String,
          NotificationType: S.optional(NotificationType),
          ActionThreshold: S.optional(ActionThreshold),
          Definition: S.optional(Definition),
          ExecutionRoleArn: S.optional(S.String),
          ApprovalModel: S.optional(ApprovalModel),
          Subscribers: S.optional(Subscribers),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateBudgetActionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          OldAction: Action,
          NewAction: Action,
        }),
      ).annotate({
        identifier: "UpdateBudgetActionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          OldNotification: Notification,
          NewNotification: Notification,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateNotificationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: Notification,
          OldSubscriber: Subscriber,
          NewSubscriber: Subscriber,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSubscriberRequest" });
  }
}
