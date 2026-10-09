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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
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
export type PlannedBudgetLimits = { [key: string]: Spend | undefined };
export type DimensionValue = string;
export type DimensionValues = string[];
export type CostFilters = { [key: string]: string[] | undefined };
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
export type TimeUnit = "DAILY" | "MONTHLY" | "QUARTERLY" | "ANNUALLY" | "CUSTOM" | (string & {});
export interface TimePeriod {
  Start?: Date;
  End?: Date;
}
export interface CalculatedSpend {
  ActualSpend: Spend;
  ForecastedSpend?: Spend;
}
export type BudgetType =
  | "USAGE"
  | "COST"
  | "RI_UTILIZATION"
  | "RI_COVERAGE"
  | "SAVINGS_PLANS_UTILIZATION"
  | "SAVINGS_PLANS_COVERAGE"
  | (string & {});
export type AutoAdjustType = "HISTORICAL" | "FORECAST" | (string & {});
export type AdjustmentPeriod = number;
export interface HistoricalOptions {
  BudgetAdjustmentPeriod: number;
  LookBackAvailablePeriods?: number;
}
export interface AutoAdjustData {
  AutoAdjustType: AutoAdjustType;
  HistoricalOptions?: HistoricalOptions;
  LastAutoAdjustTime?: Date;
}
export type Expressions = Expression[];
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
export type Value = string;
export type Values = string[];
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
export type MatchOptions = MatchOption[];
export interface ExpressionDimensionValues {
  Key: Dimension;
  Values: string[];
  MatchOptions?: MatchOption[];
}
export type TagKey = string;
export interface TagValues {
  Key?: string;
  Values?: string[];
  MatchOptions?: MatchOption[];
}
export type CostCategoryName = string;
export interface CostCategoryValues {
  Key?: string;
  Values?: string[];
  MatchOptions?: MatchOption[];
}
export interface Expression {
  Or?: Expression[];
  And?: Expression[];
  Not?: Expression;
  Dimensions?: ExpressionDimensionValues;
  Tags?: TagValues;
  CostCategories?: CostCategoryValues;
}
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
export type BillingViewArn = string;
export type HealthStatusValue = "HEALTHY" | "UNHEALTHY" | (string & {});
export type HealthStatusReason =
  | "BILLING_VIEW_NO_ACCESS"
  | "BILLING_VIEW_UNHEALTHY"
  | "FILTER_INVALID"
  | "MULTI_YEAR_HISTORICAL_DATA_DISABLED"
  | (string & {});
export interface HealthStatus {
  Status?: HealthStatusValue;
  StatusReason?: HealthStatusReason;
  LastUpdatedTime?: Date;
}
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
export type NotificationType = "ACTUAL" | "FORECASTED" | (string & {});
export type ComparisonOperator = "GREATER_THAN" | "LESS_THAN" | "EQUAL_TO" | (string & {});
export type NotificationThreshold = number;
export type ThresholdType = "PERCENTAGE" | "ABSOLUTE_VALUE" | (string & {});
export type NotificationState = "OK" | "ALARM" | (string & {});
export interface Notification {
  NotificationType: NotificationType;
  ComparisonOperator: ComparisonOperator;
  Threshold: number;
  ThresholdType?: ThresholdType;
  NotificationState?: NotificationState;
}
export type SubscriptionType = "SNS" | "EMAIL" | (string & {});
export type SubscriberAddress = string | redacted.Redacted<string>;
export interface Subscriber {
  SubscriptionType: SubscriptionType;
  Address: string | redacted.Redacted<string>;
}
export type Subscribers = Subscriber[];
export interface NotificationWithSubscribers {
  Notification: Notification;
  Subscribers: Subscriber[];
}
export type NotificationWithSubscribersList = NotificationWithSubscribers[];
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export interface ResourceTag {
  Key: string;
  Value: string;
}
export type ResourceTagList = ResourceTag[];
export interface CreateBudgetRequest {
  AccountId: string;
  Budget: Budget;
  NotificationsWithSubscribers?: NotificationWithSubscribers[];
  ResourceTags?: ResourceTag[];
}
export interface CreateBudgetResponse {}
export type ActionType =
  | "APPLY_IAM_POLICY"
  | "APPLY_SCP_POLICY"
  | "RUN_SSM_DOCUMENTS"
  | (string & {});
export interface ActionThreshold {
  ActionThresholdValue: number;
  ActionThresholdType: ThresholdType;
}
export type PolicyArn = string;
export type Role = string;
export type Roles = string[];
export type Group = string;
export type Groups = string[];
export type User = string;
export type Users = string[];
export interface IamActionDefinition {
  PolicyArn: string;
  Roles?: string[];
  Groups?: string[];
  Users?: string[];
}
export type PolicyId = string;
export type TargetId = string;
export type TargetIds = string[];
export interface ScpActionDefinition {
  PolicyId: string;
  TargetIds: string[];
}
export type ActionSubType = "STOP_EC2_INSTANCES" | "STOP_RDS_INSTANCES" | (string & {});
export type Region = string;
export type InstanceId = string;
export type InstanceIds = string[];
export interface SsmActionDefinition {
  ActionSubType: ActionSubType;
  Region: string;
  InstanceIds: string[];
}
export interface Definition {
  IamActionDefinition?: IamActionDefinition;
  ScpActionDefinition?: ScpActionDefinition;
  SsmActionDefinition?: SsmActionDefinition;
}
export type RoleArn = string;
export type ApprovalModel = "AUTOMATIC" | "MANUAL" | (string & {});
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
export type ActionId = string;
export interface CreateBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
export interface CreateNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscribers: Subscriber[];
}
export interface CreateNotificationResponse {}
export interface CreateSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscriber: Subscriber;
}
export interface CreateSubscriberResponse {}
export interface DeleteBudgetRequest {
  AccountId: string;
  BudgetName: string;
}
export interface DeleteBudgetResponse {}
export interface DeleteBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
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
export interface DeleteBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  Action: Action;
}
export interface DeleteNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
}
export interface DeleteNotificationResponse {}
export interface DeleteSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscriber: Subscriber;
}
export interface DeleteSubscriberResponse {}
export interface DescribeBudgetRequest {
  AccountId: string;
  BudgetName: string;
  ShowFilterExpression?: boolean;
}
export interface DescribeBudgetResponse {
  Budget?: Budget;
}
export interface DescribeBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
export interface DescribeBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  Action: Action;
}
export type MaxResults = number;
export interface DescribeBudgetActionHistoriesRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  TimePeriod?: TimePeriod;
  MaxResults?: number;
  NextToken?: string;
}
export type EventType =
  | "SYSTEM"
  | "CREATE_ACTION"
  | "DELETE_ACTION"
  | "UPDATE_ACTION"
  | "EXECUTE_ACTION"
  | (string & {});
export interface ActionHistoryDetails {
  Message: string;
  Action: Action;
}
export interface ActionHistory {
  Timestamp: Date;
  Status: ActionStatus;
  EventType: EventType;
  ActionHistoryDetails: ActionHistoryDetails;
}
export type ActionHistories = ActionHistory[];
export interface DescribeBudgetActionHistoriesResponse {
  ActionHistories: ActionHistory[];
  NextToken?: string;
}
export interface DescribeBudgetActionsForAccountRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type Actions = Action[];
export interface DescribeBudgetActionsForAccountResponse {
  Actions: Action[];
  NextToken?: string;
}
export interface DescribeBudgetActionsForBudgetRequest {
  AccountId: string;
  BudgetName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBudgetActionsForBudgetResponse {
  Actions: Action[];
  NextToken?: string;
}
export type MaxResultsBudgetNotifications = number;
export interface DescribeBudgetNotificationsForAccountRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type Notifications = Notification[];
export interface BudgetNotificationsForAccount {
  Notifications?: Notification[];
  BudgetName?: string;
}
export type BudgetNotificationsForAccountList = BudgetNotificationsForAccount[];
export interface DescribeBudgetNotificationsForAccountResponse {
  BudgetNotificationsForAccount?: BudgetNotificationsForAccount[];
  NextToken?: string;
}
export interface DescribeBudgetPerformanceHistoryRequest {
  AccountId: string;
  BudgetName: string;
  TimePeriod?: TimePeriod;
  MaxResults?: number;
  NextToken?: string;
}
export interface BudgetedAndActualAmounts {
  BudgetedAmount?: Spend;
  ActualAmount?: Spend;
  TimePeriod?: TimePeriod;
}
export type BudgetedAndActualAmountsList = BudgetedAndActualAmounts[];
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
export interface DescribeBudgetPerformanceHistoryResponse {
  BudgetPerformanceHistory?: BudgetPerformanceHistory;
  NextToken?: string;
}
export type MaxResultsDescribeBudgets = number;
export interface DescribeBudgetsRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
  ShowFilterExpression?: boolean;
}
export type Budgets = Budget[];
export interface DescribeBudgetsResponse {
  Budgets?: Budget[];
  NextToken?: string;
}
export interface DescribeNotificationsForBudgetRequest {
  AccountId: string;
  BudgetName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeNotificationsForBudgetResponse {
  Notifications?: Notification[];
  NextToken?: string;
}
export interface DescribeSubscribersForNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeSubscribersForNotificationResponse {
  Subscribers?: Subscriber[];
  NextToken?: string;
}
export type ExecutionType =
  | "APPROVE_BUDGET_ACTION"
  | "RETRY_BUDGET_ACTION"
  | "REVERSE_BUDGET_ACTION"
  | "RESET_BUDGET_ACTION"
  | (string & {});
export interface ExecuteBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  ExecutionType: ExecutionType;
}
export interface ExecuteBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  ExecutionType: ExecutionType;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  ResourceTags?: ResourceTag[];
}
export interface TagResourceRequest {
  ResourceARN: string;
  ResourceTags: ResourceTag[];
}
export interface TagResourceResponse {}
export type ResourceTagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  ResourceTagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateBudgetRequest {
  AccountId: string;
  NewBudget: Budget;
}
export interface UpdateBudgetResponse {}
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
export interface UpdateBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  OldAction: Action;
  NewAction: Action;
}
export interface UpdateNotificationRequest {
  AccountId: string;
  BudgetName: string;
  OldNotification: Notification;
  NewNotification: Notification;
}
export interface UpdateNotificationResponse {}
export interface UpdateSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  OldSubscriber: Subscriber;
  NewSubscriber: Subscriber;
}
export interface UpdateSubscriberResponse {}
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
  input: __S(23) as any as S.Schema<CreateBudgetRequest>,
  output: __S(24) as any as S.Schema<CreateBudgetResponse>,
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
  input: __S(30) as any as S.Schema<CreateBudgetActionRequest>,
  output: __S(31) as any as S.Schema<CreateBudgetActionResponse>,
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
  input: __S(32) as any as S.Schema<CreateNotificationRequest>,
  output: __S(24) as any as S.Schema<CreateNotificationResponse>,
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
  input: __S(33) as any as S.Schema<CreateSubscriberRequest>,
  output: __S(24) as any as S.Schema<CreateSubscriberResponse>,
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
  input: __S(34) as any as S.Schema<DeleteBudgetRequest>,
  output: __S(24) as any as S.Schema<DeleteBudgetResponse>,
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
  input: __S(35) as any as S.Schema<DeleteBudgetActionRequest>,
  output: __S(37) as any as S.Schema<DeleteBudgetActionResponse>,
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
  input: __S(38) as any as S.Schema<DeleteNotificationRequest>,
  output: __S(24) as any as S.Schema<DeleteNotificationResponse>,
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
  input: __S(39) as any as S.Schema<DeleteSubscriberRequest>,
  output: __S(24) as any as S.Schema<DeleteSubscriberResponse>,
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
  input: __S(40) as any as S.Schema<DescribeBudgetRequest>,
  output: __S(41) as any as S.Schema<DescribeBudgetResponse>,
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
  input: __S(42) as any as S.Schema<DescribeBudgetActionRequest>,
  output: __S(37) as any as S.Schema<DescribeBudgetActionResponse>,
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
  input: __S(43) as any as S.Schema<DescribeBudgetActionHistoriesRequest>,
  output: __S(47) as any as S.Schema<DescribeBudgetActionHistoriesResponse>,
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
  input: __S(48) as any as S.Schema<DescribeBudgetActionsForAccountRequest>,
  output: __S(50) as any as S.Schema<DescribeBudgetActionsForAccountResponse>,
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
  input: __S(51) as any as S.Schema<DescribeBudgetActionsForBudgetRequest>,
  output: __S(50) as any as S.Schema<DescribeBudgetActionsForBudgetResponse>,
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
  input: __S(52) as any as S.Schema<DescribeBudgetNotificationsForAccountRequest>,
  output: __S(56) as any as S.Schema<DescribeBudgetNotificationsForAccountResponse>,
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
  input: __S(57) as any as S.Schema<DescribeBudgetPerformanceHistoryRequest>,
  output: __S(61) as any as S.Schema<DescribeBudgetPerformanceHistoryResponse>,
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
  input: __S(62) as any as S.Schema<DescribeBudgetsRequest>,
  output: __S(64) as any as S.Schema<DescribeBudgetsResponse>,
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
  input: __S(65) as any as S.Schema<DescribeNotificationsForBudgetRequest>,
  output: __S(66) as any as S.Schema<DescribeNotificationsForBudgetResponse>,
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
  input: __S(67) as any as S.Schema<DescribeSubscribersForNotificationRequest>,
  output: __S(68) as any as S.Schema<DescribeSubscribersForNotificationResponse>,
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
  input: __S(69) as any as S.Schema<ExecuteBudgetActionRequest>,
  output: __S(70) as any as S.Schema<ExecuteBudgetActionResponse>,
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
  input: __S(71) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(72) as any as S.Schema<ListTagsForResourceResponse>,
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
  input: __S(73) as any as S.Schema<TagResourceRequest>,
  output: __S(24) as any as S.Schema<TagResourceResponse>,
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
  input: __S(74) as any as S.Schema<UntagResourceRequest>,
  output: __S(24) as any as S.Schema<UntagResourceResponse>,
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
  input: __S(75) as any as S.Schema<UpdateBudgetRequest>,
  output: __S(24) as any as S.Schema<UpdateBudgetResponse>,
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
  input: __S(76) as any as S.Schema<UpdateBudgetActionRequest>,
  output: __S(77) as any as S.Schema<UpdateBudgetActionResponse>,
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
  input: __S(78) as any as S.Schema<UpdateNotificationRequest>,
  output: __S(24) as any as S.Schema<UpdateNotificationResponse>,
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
  input: __S(79) as any as S.Schema<UpdateSubscriberRequest>,
  output: __S(24) as any as S.Schema<UpdateSubscriberResponse>,
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
      return S.Record(S.String, /*@__PURE__*/ __S(0).pipe(S.optional));
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(2).pipe(S.optional));
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
        S.Struct({ ActualSpend: __S(0), ForecastedSpend: S.optional(__S(0)) }),
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
          AutoAdjustType: S.String,
          HistoricalOptions: S.optional(__S(7)),
          LastAutoAdjustTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AutoAdjustData" });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Expression> => __S(13)).annotate({
          identifier: "Expression",
        }),
      );
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ Key: S.String, Values: __S(2), MatchOptions: S.optional(__S(10)) }),
      ).annotate({
        identifier: "ExpressionDimensionValues",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Values: S.optional(__S(2)),
          MatchOptions: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "TagValues" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Or: S.optional(S.suspend(() => __S(9)).annotate({ identifier: "Expressions" })),
          And: S.optional(S.suspend(() => __S(9)).annotate({ identifier: "Expressions" })),
          Not: S.optional(
            S.suspend((): S.Schema<Expression> => __S(13)).annotate({
              identifier: "Expression",
            }),
          ),
          Dimensions: S.optional(__S(11)),
          Tags: S.optional(__S(12)),
          CostCategories: S.optional(__S(12)),
        }),
      ).annotate({ identifier: "Expression" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "HealthStatus" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BudgetName: S.String,
          BudgetLimit: S.optional(__S(0)),
          PlannedBudgetLimits: S.optional(__S(1)),
          CostFilters: S.optional(__S(3)),
          CostTypes: S.optional(__S(4)),
          TimeUnit: S.String,
          TimePeriod: S.optional(__S(5)),
          CalculatedSpend: S.optional(__S(6)),
          BudgetType: S.String,
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AutoAdjustData: S.optional(__S(8)),
          FilterExpression: S.optional(__S(13)),
          Metrics: S.optional(__S(10)),
          BillingViewArn: S.optional(S.String),
          HealthStatus: S.optional(__S(14)),
        }),
      ).annotate({ identifier: "Budget" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NotificationType: S.String,
          ComparisonOperator: S.String,
          Threshold: S.Number,
          ThresholdType: S.optional(S.String),
          NotificationState: S.optional(S.String),
        }),
      ).annotate({ identifier: "Notification" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SubscriptionType: S.String, Address: SensitiveString }),
      ).annotate({ identifier: "Subscriber" });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() => S.Struct({ Notification: __S(16), Subscribers: __S(18) })).annotate({
        identifier: "NotificationWithSubscribers",
      });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "ResourceTag",
      });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          Budget: __S(15),
          NotificationsWithSubscribers: S.optional(__S(20)),
          ResourceTags: S.optional(__S(22)),
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
        S.Struct({ ActionThresholdValue: S.Number, ActionThresholdType: S.String }),
      ).annotate({ identifier: "ActionThreshold" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.String,
          Roles: S.optional(__S(2)),
          Groups: S.optional(__S(2)),
          Users: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "IamActionDefinition" });
    case 3:
      return S.suspend(() => S.Struct({ PolicyId: S.String, TargetIds: __S(2) })).annotate({
        identifier: "ScpActionDefinition",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ActionSubType: S.String, Region: S.String, InstanceIds: __S(2) }),
      ).annotate({ identifier: "SsmActionDefinition" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IamActionDefinition: S.optional(__S(26)),
          ScpActionDefinition: S.optional(__S(27)),
          SsmActionDefinition: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "Definition" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          NotificationType: S.String,
          ActionType: S.String,
          ActionThreshold: __S(25),
          Definition: __S(29),
          ExecutionRoleArn: S.String,
          ApprovalModel: S.String,
          Subscribers: __S(18),
          ResourceTags: S.optional(__S(22)),
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
          Notification: __S(16),
          Subscribers: __S(18),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateNotificationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: __S(16),
          Subscriber: __S(17),
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
          NotificationType: S.String,
          ActionType: S.String,
          ActionThreshold: __S(25),
          Definition: __S(29),
          ExecutionRoleArn: S.String,
          ApprovalModel: S.String,
          Status: S.String,
          Subscribers: __S(18),
        }),
      ).annotate({ identifier: "Action" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String, Action: __S(36) }),
      ).annotate({
        identifier: "DeleteBudgetActionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, BudgetName: S.String, Notification: __S(16) }).pipe(
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
          Notification: __S(16),
          Subscriber: __S(17),
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
      return S.suspend(() => S.Struct({ Budget: S.optional(__S(15)) })).annotate({
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
          TimePeriod: S.optional(__S(5)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBudgetActionHistoriesRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Message: S.String, Action: __S(36) })).annotate({
        identifier: "ActionHistoryDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: S.String,
          EventType: S.String,
          ActionHistoryDetails: __S(44),
        }),
      ).annotate({ identifier: "ActionHistory" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({ ActionHistories: __S(46), NextToken: S.optional(S.String) }),
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
      return S.Array(__S(36));
    case 2:
      return S.suspend(() =>
        S.Struct({ Actions: __S(49), NextToken: S.optional(S.String) }),
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
      return S.Array(__S(16));
    case 6:
      return S.suspend(() =>
        S.Struct({ Notifications: S.optional(__S(53)), BudgetName: S.optional(S.String) }),
      ).annotate({
        identifier: "BudgetNotificationsForAccount",
      });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BudgetNotificationsForAccount: S.optional(__S(55)),
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
          TimePeriod: S.optional(__S(5)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBudgetPerformanceHistoryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BudgetedAmount: S.optional(__S(0)),
          ActualAmount: S.optional(__S(0)),
          TimePeriod: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "BudgetedAndActualAmounts" });
    case 3:
      return S.Array(__S(58));
    case 4:
      return S.suspend(() =>
        S.Struct({
          BudgetName: S.optional(S.String),
          BudgetType: S.optional(S.String),
          CostFilters: S.optional(__S(3)),
          CostTypes: S.optional(__S(4)),
          TimeUnit: S.optional(S.String),
          BillingViewArn: S.optional(S.String),
          BudgetedAndActualAmountsList: S.optional(__S(59)),
          FilterExpression: S.optional(__S(13)),
          Metrics: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "BudgetPerformanceHistory" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BudgetPerformanceHistory: S.optional(__S(60)),
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
      return S.Array(__S(15));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Budgets: S.optional(__S(63)), NextToken: S.optional(S.String) }),
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
        S.Struct({ Notifications: S.optional(__S(53)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeNotificationsForBudgetResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: __S(16),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSubscribersForNotificationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Subscribers: S.optional(__S(18)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeSubscribersForNotificationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          ActionId: S.String,
          ExecutionType: S.String,
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
          ExecutionType: S.String,
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
      return S.suspend(() => S.Struct({ ResourceTags: S.optional(__S(22)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, ResourceTags: __S(22) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, ResourceTagKeys: __S(2) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AccountId: S.String, NewBudget: __S(15) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateBudgetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          ActionId: S.String,
          NotificationType: S.optional(S.String),
          ActionThreshold: S.optional(__S(25)),
          Definition: S.optional(__S(29)),
          ExecutionRoleArn: S.optional(S.String),
          ApprovalModel: S.optional(S.String),
          Subscribers: S.optional(__S(18)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateBudgetActionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          OldAction: __S(36),
          NewAction: __S(36),
        }),
      ).annotate({
        identifier: "UpdateBudgetActionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          OldNotification: __S(16),
          NewNotification: __S(16),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateNotificationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String,
          BudgetName: S.String,
          Notification: __S(16),
          OldSubscriber: __S(17),
          NewSubscriber: __S(17),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSubscriberRequest" });
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
  }
}
