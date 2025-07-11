import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSBudgetServiceGateway {
  createBudget(
    input: CreateBudgetRequest,
  ): Effect.Effect<
    CreateBudgetResponse,
    AccessDeniedException | CreationLimitExceededException | DuplicateRecordException | InternalErrorException | InvalidParameterException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createBudgetAction(
    input: CreateBudgetActionRequest,
  ): Effect.Effect<
    CreateBudgetActionResponse,
    AccessDeniedException | CreationLimitExceededException | DuplicateRecordException | InternalErrorException | InvalidParameterException | NotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createNotification(
    input: CreateNotificationRequest,
  ): Effect.Effect<
    CreateNotificationResponse,
    AccessDeniedException | CreationLimitExceededException | DuplicateRecordException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  createSubscriber(
    input: CreateSubscriberRequest,
  ): Effect.Effect<
    CreateSubscriberResponse,
    AccessDeniedException | CreationLimitExceededException | DuplicateRecordException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteBudget(
    input: DeleteBudgetRequest,
  ): Effect.Effect<
    DeleteBudgetResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteBudgetAction(
    input: DeleteBudgetActionRequest,
  ): Effect.Effect<
    DeleteBudgetActionResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ResourceLockedException | ThrottlingException | CommonAwsError
  >;
  deleteNotification(
    input: DeleteNotificationRequest,
  ): Effect.Effect<
    DeleteNotificationResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteSubscriber(
    input: DeleteSubscriberRequest,
  ): Effect.Effect<
    DeleteSubscriberResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBudget(
    input: DescribeBudgetRequest,
  ): Effect.Effect<
    DescribeBudgetResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBudgetAction(
    input: DescribeBudgetActionRequest,
  ): Effect.Effect<
    DescribeBudgetActionResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBudgetActionHistories(
    input: DescribeBudgetActionHistoriesRequest,
  ): Effect.Effect<
    DescribeBudgetActionHistoriesResponse,
    AccessDeniedException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBudgetActionsForAccount(
    input: DescribeBudgetActionsForAccountRequest,
  ): Effect.Effect<
    DescribeBudgetActionsForAccountResponse,
    AccessDeniedException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | ThrottlingException | CommonAwsError
  >;
  describeBudgetActionsForBudget(
    input: DescribeBudgetActionsForBudgetRequest,
  ): Effect.Effect<
    DescribeBudgetActionsForBudgetResponse,
    AccessDeniedException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBudgetNotificationsForAccount(
    input: DescribeBudgetNotificationsForAccountRequest,
  ): Effect.Effect<
    DescribeBudgetNotificationsForAccountResponse,
    AccessDeniedException | ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBudgetPerformanceHistory(
    input: DescribeBudgetPerformanceHistoryRequest,
  ): Effect.Effect<
    DescribeBudgetPerformanceHistoryResponse,
    AccessDeniedException | ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBudgets(
    input: DescribeBudgetsRequest,
  ): Effect.Effect<
    DescribeBudgetsResponse,
    AccessDeniedException | ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeNotificationsForBudget(
    input: DescribeNotificationsForBudgetRequest,
  ): Effect.Effect<
    DescribeNotificationsForBudgetResponse,
    AccessDeniedException | ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  describeSubscribersForNotification(
    input: DescribeSubscribersForNotificationRequest,
  ): Effect.Effect<
    DescribeSubscribersForNotificationResponse,
    AccessDeniedException | ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  executeBudgetAction(
    input: ExecuteBudgetActionRequest,
  ): Effect.Effect<
    ExecuteBudgetActionResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ResourceLockedException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  updateBudget(
    input: UpdateBudgetRequest,
  ): Effect.Effect<
    UpdateBudgetResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  updateBudgetAction(
    input: UpdateBudgetActionRequest,
  ): Effect.Effect<
    UpdateBudgetActionResponse,
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ResourceLockedException | ThrottlingException | CommonAwsError
  >;
  updateNotification(
    input: UpdateNotificationRequest,
  ): Effect.Effect<
    UpdateNotificationResponse,
    AccessDeniedException | DuplicateRecordException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  updateSubscriber(
    input: UpdateSubscriberRequest,
  ): Effect.Effect<
    UpdateSubscriberResponse,
    AccessDeniedException | DuplicateRecordException | InternalErrorException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
}

export type Budgets = AWSBudgetServiceGateway;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

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
  Subscribers: Array<Subscriber>;
}
export type ActionHistories = Array<ActionHistory>;
export interface ActionHistory {
  Timestamp: Date | string;
  Status: ActionStatus;
  EventType: EventType;
  ActionHistoryDetails: ActionHistoryDetails;
}
export interface ActionHistoryDetails {
  Message: string;
  Action: Action;
}
export type ActionId = string;

export type Actions = Array<Action>;
export type ActionStatus = "Standby" | "Pending" | "Execution_In_Progress" | "Execution_Success" | "Execution_Failure" | "Reverse_In_Progress" | "Reverse_Success" | "Reverse_Failure" | "Reset_In_Progress" | "Reset_Failure";
export type ActionSubType = "STOP_EC2" | "STOP_RDS";
export interface ActionThreshold {
  ActionThresholdValue: number;
  ActionThresholdType: ThresholdType;
}
export type ActionType = "IAM" | "SCP" | "SSM";
export type AdjustmentPeriod = number;

export type AmazonResourceName = string;

export type ApprovalModel = "AUTO" | "MANUAL";
export interface AutoAdjustData {
  AutoAdjustType: AutoAdjustType;
  HistoricalOptions?: HistoricalOptions;
  LastAutoAdjustTime?: Date | string;
}
export type AutoAdjustType = "HISTORICAL" | "FORECAST";
export interface Budget {
  BudgetName: string;
  BudgetLimit?: Spend;
  PlannedBudgetLimits?: Record<string, Spend>;
  CostFilters?: Record<string, Array<string>>;
  CostTypes?: CostTypes;
  TimeUnit: TimeUnit;
  TimePeriod?: TimePeriod;
  CalculatedSpend?: CalculatedSpend;
  BudgetType: BudgetType;
  LastUpdatedTime?: Date | string;
  AutoAdjustData?: AutoAdjustData;
  FilterExpression?: Expression;
  Metrics?: Array<Metric>;
}
export interface BudgetedAndActualAmounts {
  BudgetedAmount?: Spend;
  ActualAmount?: Spend;
  TimePeriod?: TimePeriod;
}
export type BudgetedAndActualAmountsList = Array<BudgetedAndActualAmounts>;
export type BudgetName = string;

export interface BudgetNotificationsForAccount {
  Notifications?: Array<Notification>;
  BudgetName?: string;
}
export type BudgetNotificationsForAccountList = Array<BudgetNotificationsForAccount>;
export interface BudgetPerformanceHistory {
  BudgetName?: string;
  BudgetType?: BudgetType;
  CostFilters?: Record<string, Array<string>>;
  CostTypes?: CostTypes;
  TimeUnit?: TimeUnit;
  BudgetedAndActualAmountsList?: Array<BudgetedAndActualAmounts>;
}
export type Budgets = Array<Budget>;
export type BudgetType = "Usage" | "Cost" | "RIUtilization" | "RICoverage" | "SPUtilization" | "SPCoverage";
export interface CalculatedSpend {
  ActualSpend: Spend;
  ForecastedSpend?: Spend;
}
export type ComparisonOperator = "GREATER_THAN" | "LESS_THAN" | "EQUAL_TO";
export type CostCategoryName = string;

export interface CostCategoryValues {
  Key?: string;
  Values?: Array<string>;
  MatchOptions?: Array<MatchOption>;
}
export type CostFilters = Record<string, Array<string>>;
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
export interface CreateBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  NotificationType: NotificationType;
  ActionType: ActionType;
  ActionThreshold: ActionThreshold;
  Definition: Definition;
  ExecutionRoleArn: string;
  ApprovalModel: ApprovalModel;
  Subscribers: Array<Subscriber>;
  ResourceTags?: Array<ResourceTag>;
}
export interface CreateBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
export interface CreateBudgetRequest {
  AccountId: string;
  Budget: Budget;
  NotificationsWithSubscribers?: Array<NotificationWithSubscribers>;
  ResourceTags?: Array<ResourceTag>;
}
export interface CreateBudgetResponse {
}
export interface CreateNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscribers: Array<Subscriber>;
}
export interface CreateNotificationResponse {
}
export interface CreateSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscriber: Subscriber;
}
export interface CreateSubscriberResponse {
}
export declare class CreationLimitExceededException extends Data.TaggedError(
  "CreationLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface Definition {
  IamActionDefinition?: IamActionDefinition;
  ScpActionDefinition?: ScpActionDefinition;
  SsmActionDefinition?: SsmActionDefinition;
}
export interface DeleteBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
}
export interface DeleteBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  Action: Action;
}
export interface DeleteBudgetRequest {
  AccountId: string;
  BudgetName: string;
}
export interface DeleteBudgetResponse {
}
export interface DeleteNotificationRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
}
export interface DeleteNotificationResponse {
}
export interface DeleteSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  Subscriber: Subscriber;
}
export interface DeleteSubscriberResponse {
}
export interface DescribeBudgetActionHistoriesRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  TimePeriod?: TimePeriod;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBudgetActionHistoriesResponse {
  ActionHistories: Array<ActionHistory>;
  NextToken?: string;
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
export interface DescribeBudgetActionsForAccountRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBudgetActionsForAccountResponse {
  Actions: Array<Action>;
  NextToken?: string;
}
export interface DescribeBudgetActionsForBudgetRequest {
  AccountId: string;
  BudgetName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBudgetActionsForBudgetResponse {
  Actions: Array<Action>;
  NextToken?: string;
}
export interface DescribeBudgetNotificationsForAccountRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBudgetNotificationsForAccountResponse {
  BudgetNotificationsForAccount?: Array<BudgetNotificationsForAccount>;
  NextToken?: string;
}
export interface DescribeBudgetPerformanceHistoryRequest {
  AccountId: string;
  BudgetName: string;
  TimePeriod?: TimePeriod;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeBudgetPerformanceHistoryResponse {
  BudgetPerformanceHistory?: BudgetPerformanceHistory;
  NextToken?: string;
}
export interface DescribeBudgetRequest {
  AccountId: string;
  BudgetName: string;
  ShowFilterExpression?: boolean;
}
export interface DescribeBudgetResponse {
  Budget?: Budget;
}
export interface DescribeBudgetsRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
  ShowFilterExpression?: boolean;
}
export interface DescribeBudgetsResponse {
  Budgets?: Array<Budget>;
  NextToken?: string;
}
export interface DescribeNotificationsForBudgetRequest {
  AccountId: string;
  BudgetName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeNotificationsForBudgetResponse {
  Notifications?: Array<Notification>;
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
  Subscribers?: Array<Subscriber>;
  NextToken?: string;
}
export type Dimension = "AZ" | "INSTANCE_TYPE" | "LINKED_ACCOUNT" | "LINKED_ACCOUNT_NAME" | "OPERATION" | "PURCHASE_TYPE" | "REGION" | "SERVICE" | "SERVICE_CODE" | "USAGE_TYPE" | "USAGE_TYPE_GROUP" | "RECORD_TYPE" | "OPERATING_SYSTEM" | "TENANCY" | "SCOPE" | "PLATFORM" | "SUBSCRIPTION_ID" | "LEGAL_ENTITY_NAME" | "INVOICING_ENTITY" | "DEPLOYMENT_OPTION" | "DATABASE_ENGINE" | "CACHE_ENGINE" | "INSTANCE_TYPE_FAMILY" | "BILLING_ENTITY" | "RESERVATION_ID" | "RESOURCE_ID" | "RIGHTSIZING_TYPE" | "SAVINGS_PLANS_TYPE" | "SAVINGS_PLAN_ARN" | "PAYMENT_OPTION" | "RESERVATION_MODIFIED" | "TAG_KEY" | "COST_CATEGORY_NAME";
export type DimensionValue = string;

export type DimensionValues = Array<string>;
export declare class DuplicateRecordException extends Data.TaggedError(
  "DuplicateRecordException",
)<{
  readonly Message?: string;
}> {}
export type errorMessage = string;

export type EventType = "System" | "CreateAction" | "DeleteAction" | "UpdateAction" | "ExecuteAction";
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
export type ExecutionType = "ApproveBudgetAction" | "RetryBudgetAction" | "ReverseBudgetAction" | "ResetBudgetAction";
export declare class ExpiredNextTokenException extends Data.TaggedError(
  "ExpiredNextTokenException",
)<{
  readonly Message?: string;
}> {}
export interface Expression {
  Or?: Array<Expression>;
  And?: Array<Expression>;
  Not?: Expression;
  Dimensions?: ExpressionDimensionValues;
  Tags?: TagValues;
  CostCategories?: CostCategoryValues;
}
export interface ExpressionDimensionValues {
  Key: Dimension;
  Values: Array<string>;
  MatchOptions?: Array<MatchOption>;
}
export type Expressions = Array<Expression>;
export type GenericString = string;

export type GenericTimestamp = Date | string;

export type Group = string;

export type Groups = Array<string>;
export interface HistoricalOptions {
  BudgetAdjustmentPeriod: number;
  LookBackAvailablePeriods?: number;
}
export interface IamActionDefinition {
  PolicyArn: string;
  Roles?: Array<string>;
  Groups?: Array<string>;
  Users?: Array<string>;
}
export type InstanceId = string;

export type InstanceIds = Array<string>;
export declare class InternalErrorException extends Data.TaggedError(
  "InternalErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends Data.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
}> {}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  ResourceTags?: Array<ResourceTag>;
}
export type MatchOption = "EQUALS" | "ABSENT" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS" | "GREATER_THAN_OR_EQUAL" | "CASE_SENSITIVE" | "CASE_INSENSITIVE";
export type MatchOptions = Array<MatchOption>;
export type MaxResults = number;

export type MaxResultsBudgetNotifications = number;

export type MaxResultsDescribeBudgets = number;

export type Metric = "BLENDED_COST" | "UNBLENDED_COST" | "AMORTIZED_COST" | "NET_UNBLENDED_COST" | "NET_AMORTIZED_COST" | "USAGE_QUANTITY" | "NORMALIZED_USAGE_AMOUNT" | "HOURS";
export type Metrics = Array<Metric>;
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface Notification {
  NotificationType: NotificationType;
  ComparisonOperator: ComparisonOperator;
  Threshold: number;
  ThresholdType?: ThresholdType;
  NotificationState?: NotificationState;
}
export type Notifications = Array<Notification>;
export type NotificationState = "OK" | "ALARM";
export type NotificationThreshold = number;

export type NotificationType = "ACTUAL" | "FORECASTED";
export interface NotificationWithSubscribers {
  Notification: Notification;
  Subscribers: Array<Subscriber>;
}
export type NotificationWithSubscribersList = Array<NotificationWithSubscribers>;
export type NullableBoolean = boolean;

export type NumericValue = string;

export type PlannedBudgetLimits = Record<string, Spend>;
export type PolicyArn = string;

export type PolicyId = string;

export type Region = string;

export declare class ResourceLockedException extends Data.TaggedError(
  "ResourceLockedException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceTag {
  Key: string;
  Value: string;
}
export type ResourceTagKey = string;

export type ResourceTagKeyList = Array<string>;
export type ResourceTagList = Array<ResourceTag>;
export type ResourceTagValue = string;

export type Role = string;

export type RoleArn = string;

export type Roles = Array<string>;
export interface ScpActionDefinition {
  PolicyId: string;
  TargetIds: Array<string>;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface Spend {
  Amount: string;
  Unit: string;
}
export interface SsmActionDefinition {
  ActionSubType: ActionSubType;
  Region: string;
  InstanceIds: Array<string>;
}
export interface Subscriber {
  SubscriptionType: SubscriptionType;
  Address: string;
}
export type SubscriberAddress = string;

export type Subscribers = Array<Subscriber>;
export type SubscriptionType = "SNS" | "EMAIL";
export type TagKey = string;

export interface TagResourceRequest {
  ResourceARN: string;
  ResourceTags: Array<ResourceTag>;
}
export interface TagResourceResponse {
}
export interface TagValues {
  Key?: string;
  Values?: Array<string>;
  MatchOptions?: Array<MatchOption>;
}
export type TargetId = string;

export type TargetIds = Array<string>;
export type ThresholdType = "PERCENTAGE" | "ABSOLUTE_VALUE";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface TimePeriod {
  Start?: Date | string;
  End?: Date | string;
}
export type TimeUnit = "DAILY" | "MONTHLY" | "QUARTERLY" | "ANNUALLY";
export type UnitValue = string;

export interface UntagResourceRequest {
  ResourceARN: string;
  ResourceTagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateBudgetActionRequest {
  AccountId: string;
  BudgetName: string;
  ActionId: string;
  NotificationType?: NotificationType;
  ActionThreshold?: ActionThreshold;
  Definition?: Definition;
  ExecutionRoleArn?: string;
  ApprovalModel?: ApprovalModel;
  Subscribers?: Array<Subscriber>;
}
export interface UpdateBudgetActionResponse {
  AccountId: string;
  BudgetName: string;
  OldAction: Action;
  NewAction: Action;
}
export interface UpdateBudgetRequest {
  AccountId: string;
  NewBudget: Budget;
}
export interface UpdateBudgetResponse {
}
export interface UpdateNotificationRequest {
  AccountId: string;
  BudgetName: string;
  OldNotification: Notification;
  NewNotification: Notification;
}
export interface UpdateNotificationResponse {
}
export interface UpdateSubscriberRequest {
  AccountId: string;
  BudgetName: string;
  Notification: Notification;
  OldSubscriber: Subscriber;
  NewSubscriber: Subscriber;
}
export interface UpdateSubscriberResponse {
}
export type User = string;

export type Users = Array<string>;
export type Value = string;

export type Values = Array<string>;
export declare namespace CreateBudget {
  export type Input = CreateBudgetRequest;
  export type Output = CreateBudgetResponse;
  export type Error =
    | AccessDeniedException
    | CreationLimitExceededException
    | DuplicateRecordException
    | InternalErrorException
    | InvalidParameterException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateBudgetAction {
  export type Input = CreateBudgetActionRequest;
  export type Output = CreateBudgetActionResponse;
  export type Error =
    | AccessDeniedException
    | CreationLimitExceededException
    | DuplicateRecordException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateNotification {
  export type Input = CreateNotificationRequest;
  export type Output = CreateNotificationResponse;
  export type Error =
    | AccessDeniedException
    | CreationLimitExceededException
    | DuplicateRecordException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSubscriber {
  export type Input = CreateSubscriberRequest;
  export type Output = CreateSubscriberResponse;
  export type Error =
    | AccessDeniedException
    | CreationLimitExceededException
    | DuplicateRecordException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteBudget {
  export type Input = DeleteBudgetRequest;
  export type Output = DeleteBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteBudgetAction {
  export type Input = DeleteBudgetActionRequest;
  export type Output = DeleteBudgetActionResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ResourceLockedException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteNotification {
  export type Input = DeleteNotificationRequest;
  export type Output = DeleteNotificationResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSubscriber {
  export type Input = DeleteSubscriberRequest;
  export type Output = DeleteSubscriberResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudget {
  export type Input = DescribeBudgetRequest;
  export type Output = DescribeBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudgetAction {
  export type Input = DescribeBudgetActionRequest;
  export type Output = DescribeBudgetActionResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudgetActionHistories {
  export type Input = DescribeBudgetActionHistoriesRequest;
  export type Output = DescribeBudgetActionHistoriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudgetActionsForAccount {
  export type Input = DescribeBudgetActionsForAccountRequest;
  export type Output = DescribeBudgetActionsForAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudgetActionsForBudget {
  export type Input = DescribeBudgetActionsForBudgetRequest;
  export type Output = DescribeBudgetActionsForBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudgetNotificationsForAccount {
  export type Input = DescribeBudgetNotificationsForAccountRequest;
  export type Output = DescribeBudgetNotificationsForAccountResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudgetPerformanceHistory {
  export type Input = DescribeBudgetPerformanceHistoryRequest;
  export type Output = DescribeBudgetPerformanceHistoryResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBudgets {
  export type Input = DescribeBudgetsRequest;
  export type Output = DescribeBudgetsResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeNotificationsForBudget {
  export type Input = DescribeNotificationsForBudgetRequest;
  export type Output = DescribeNotificationsForBudgetResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSubscribersForNotification {
  export type Input = DescribeSubscribersForNotificationRequest;
  export type Output = DescribeSubscribersForNotificationResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ExecuteBudgetAction {
  export type Input = ExecuteBudgetActionRequest;
  export type Output = ExecuteBudgetActionResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ResourceLockedException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateBudget {
  export type Input = UpdateBudgetRequest;
  export type Output = UpdateBudgetResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateBudgetAction {
  export type Input = UpdateBudgetActionRequest;
  export type Output = UpdateBudgetActionResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ResourceLockedException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateNotification {
  export type Input = UpdateNotificationRequest;
  export type Output = UpdateNotificationResponse;
  export type Error =
    | AccessDeniedException
    | DuplicateRecordException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSubscriber {
  export type Input = UpdateSubscriberRequest;
  export type Output = UpdateSubscriberResponse;
  export type Error =
    | AccessDeniedException
    | DuplicateRecordException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

