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
  sdkId: "codestar notifications",
  serviceShapeName: "CodeStarNotifications_20191015",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "codestar-notifications" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-10-15");
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
              `https://codestar-notifications-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://codestar-notifications-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://codestar-notifications.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://codestar-notifications.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
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
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConfigurationException
  extends /*@__PURE__*/ S.TaggedError<ConfigurationException>()(
    "ConfigurationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()(
    "InvalidNextTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type NotificationRuleName = string | redacted.Redacted<string>;
export type EventTypeId = string;
export type EventTypeIds = string[];
const EventTypeIds = /*@__PURE__*/ __L.at(__c0, 0);
export type NotificationRuleResource = string;
export type TargetType = string;
export type TargetAddress = string | redacted.Redacted<string>;
export interface Target {
  TargetType?: string;
  TargetAddress?: string | redacted.Redacted<string>;
}
const Target = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<Target>;
export type Targets = Target[];
const Targets = /*@__PURE__*/ __L.at(__c0, 2);
export type DetailType = "BASIC" | "FULL" | (string & {});
const DetailType = S.String;

export type ClientRequestToken = string;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c0, 3);
export type NotificationRuleStatus = "ENABLED" | "DISABLED" | (string & {});
const NotificationRuleStatus = S.String;

export interface CreateNotificationRuleRequest {
  Name: string | redacted.Redacted<string>;
  EventTypeIds: string[];
  Resource: string;
  Targets: Target[];
  DetailType: DetailType;
  ClientRequestToken?: string;
  Tags?: { [key: string]: string | undefined };
  Status?: NotificationRuleStatus;
}
const CreateNotificationRuleRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateNotificationRuleRequest>;
export type NotificationRuleArn = string;
export interface CreateNotificationRuleResult {
  Arn?: string;
}
const CreateNotificationRuleResult = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CreateNotificationRuleResult>;
export interface DeleteNotificationRuleRequest {
  Arn: string;
}
const DeleteNotificationRuleRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<DeleteNotificationRuleRequest>;
export interface DeleteNotificationRuleResult {
  Arn?: string;
}
const DeleteNotificationRuleResult =
  CreateNotificationRuleResult as any as S.Schema<DeleteNotificationRuleResult>;
export type ForceUnsubscribeAll = boolean;
export interface DeleteTargetRequest {
  TargetAddress: string | redacted.Redacted<string>;
  ForceUnsubscribeAll?: boolean;
}
const DeleteTargetRequest = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<DeleteTargetRequest>;
export interface DeleteTargetResult {}
const DeleteTargetResult = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<DeleteTargetResult>;
export interface DescribeNotificationRuleRequest {
  Arn: string;
}
const DescribeNotificationRuleRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<DescribeNotificationRuleRequest>;
export type ServiceName = string;
export type EventTypeName = string;
export type ResourceType = string;
export interface EventTypeSummary {
  EventTypeId?: string;
  ServiceName?: string;
  EventTypeName?: string;
  ResourceType?: string;
}
const EventTypeSummary = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<EventTypeSummary>;
export type EventTypeBatch = EventTypeSummary[];
const EventTypeBatch = /*@__PURE__*/ __L.at(__c1, 3);
export type TargetStatus =
  | "PENDING"
  | "ACTIVE"
  | "UNREACHABLE"
  | "INACTIVE"
  | "DEACTIVATED"
  | (string & {});
const TargetStatus = S.String;

export interface TargetSummary {
  TargetAddress?: string | redacted.Redacted<string>;
  TargetType?: string;
  TargetStatus?: TargetStatus;
}
const TargetSummary = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<TargetSummary>;
export type TargetsBatch = TargetSummary[];
const TargetsBatch = /*@__PURE__*/ __L.at(__c1, 5);
export type NotificationRuleCreatedBy = string;
export type CreatedTimestamp = Date;
export type LastModifiedTimestamp = Date;
export interface DescribeNotificationRuleResult {
  Arn: string;
  Name?: string | redacted.Redacted<string>;
  EventTypes?: EventTypeSummary[];
  Resource?: string;
  Targets?: TargetSummary[];
  DetailType?: DetailType;
  CreatedBy?: string;
  Status?: NotificationRuleStatus;
  CreatedTimestamp?: Date;
  LastModifiedTimestamp?: Date;
  Tags?: { [key: string]: string | undefined };
}
const DescribeNotificationRuleResult = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<DescribeNotificationRuleResult>;
export type ListEventTypesFilterName = "RESOURCE_TYPE" | "SERVICE_NAME" | (string & {});
const ListEventTypesFilterName = S.String;

export type ListEventTypesFilterValue = string;
export interface ListEventTypesFilter {
  Name: ListEventTypesFilterName;
  Value: string;
}
const ListEventTypesFilter = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<ListEventTypesFilter>;
export type ListEventTypesFilters = ListEventTypesFilter[];
const ListEventTypesFilters = /*@__PURE__*/ __L.at(__c2, 0);
export type NextToken = string;
export type MaxResults = number;
export interface ListEventTypesRequest {
  Filters?: ListEventTypesFilter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListEventTypesRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<ListEventTypesRequest>;
export interface ListEventTypesResult {
  EventTypes?: EventTypeSummary[];
  NextToken?: string;
}
const ListEventTypesResult = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<ListEventTypesResult>;
export type ListNotificationRulesFilterName =
  | "EVENT_TYPE_ID"
  | "CREATED_BY"
  | "RESOURCE"
  | "TARGET_ADDRESS"
  | (string & {});
const ListNotificationRulesFilterName = S.String;

export type ListNotificationRulesFilterValue = string;
export interface ListNotificationRulesFilter {
  Name: ListNotificationRulesFilterName;
  Value: string;
}
const ListNotificationRulesFilter = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<ListNotificationRulesFilter>;
export type ListNotificationRulesFilters = ListNotificationRulesFilter[];
const ListNotificationRulesFilters = /*@__PURE__*/ __L.at(__c2, 4);
export interface ListNotificationRulesRequest {
  Filters?: ListNotificationRulesFilter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListNotificationRulesRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<ListNotificationRulesRequest>;
export type NotificationRuleId = string;
export interface NotificationRuleSummary {
  Id?: string;
  Arn?: string;
}
const NotificationRuleSummary = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<NotificationRuleSummary>;
export type NotificationRuleBatch = NotificationRuleSummary[];
const NotificationRuleBatch = /*@__PURE__*/ __L.at(__c2, 7);
export interface ListNotificationRulesResult {
  NextToken?: string;
  NotificationRules?: NotificationRuleSummary[];
}
const ListNotificationRulesResult = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<ListNotificationRulesResult>;
export interface ListTagsForResourceRequest {
  Arn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResult {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResult = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<ListTagsForResourceResult>;
export type ListTargetsFilterName =
  | "TARGET_TYPE"
  | "TARGET_ADDRESS"
  | "TARGET_STATUS"
  | (string & {});
export type ListTargetsFilterValue = string;
export interface ListTargetsFilter {
  Name: ListTargetsFilterName;
  Value: string;
}
export type ListTargetsFilters = ListTargetsFilter[];
const ListTargetsFilters = ListEventTypesFilters as any as S.Schema<ListTargetsFilters>;
export interface ListTargetsRequest {
  Filters?: ListTargetsFilter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListTargetsRequest = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ListTargetsRequest>;
export interface ListTargetsResult {
  Targets?: TargetSummary[];
  NextToken?: string;
}
const ListTargetsResult = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ListTargetsResult>;
export interface SubscribeRequest {
  Arn: string;
  Target: Target;
  ClientRequestToken?: string;
}
const SubscribeRequest = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<SubscribeRequest>;
export interface SubscribeResult {
  Arn?: string;
}
const SubscribeResult = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<SubscribeResult>;
export interface TagResourceRequest {
  Arn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResult {
  Tags?: { [key: string]: string | undefined };
}
const TagResourceResult = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<TagResourceResult>;
export interface UnsubscribeRequest {
  Arn: string;
  TargetAddress: string | redacted.Redacted<string>;
}
const UnsubscribeRequest = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<UnsubscribeRequest>;
export interface UnsubscribeResult {
  Arn: string;
}
const UnsubscribeResult = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<UnsubscribeResult>;
export type TagKeys = string[];
const TagKeys = EventTypeIds as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResult {}
const UntagResourceResult = DeleteTargetResult as any as S.Schema<UntagResourceResult>;
export interface UpdateNotificationRuleRequest {
  Arn: string;
  Name?: string | redacted.Redacted<string>;
  Status?: NotificationRuleStatus;
  EventTypeIds?: string[];
  Targets?: Target[];
  DetailType?: DetailType;
}
const UpdateNotificationRuleRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<UpdateNotificationRuleRequest>;
export interface UpdateNotificationRuleResult {}
const UpdateNotificationRuleResult =
  DeleteTargetResult as any as S.Schema<UpdateNotificationRuleResult>;
export type Message = string;
export type CreateNotificationRuleError =
  | AccessDeniedException
  | ConcurrentModificationException
  | ConfigurationException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a notification rule for a resource. The rule specifies the events you want
 * notifications about and the targets (such as Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients configured for Slack) where you want to receive
 * them.
 */
export const createNotificationRule: API.OperationMethod<
  CreateNotificationRuleRequest,
  CreateNotificationRuleResult,
  CreateNotificationRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNotificationRuleRequest,
  output: CreateNotificationRuleResult,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    ConfigurationException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNotificationRule",
}));

export type DeleteNotificationRuleError =
  | ConcurrentModificationException
  | LimitExceededException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a notification rule for a resource.
 */
export const deleteNotificationRule: API.OperationMethod<
  DeleteNotificationRuleRequest,
  DeleteNotificationRuleResult,
  DeleteNotificationRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNotificationRuleRequest,
  output: DeleteNotificationRuleResult,
  errors: [ConcurrentModificationException, LimitExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNotificationRule",
}));

export type DeleteTargetError = ValidationException | CommonErrors;
/**
 * Deletes a specified target for notifications.
 */
export const deleteTarget: API.OperationMethod<
  DeleteTargetRequest,
  DeleteTargetResult,
  DeleteTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTargetRequest,
  output: DeleteTargetResult,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTarget",
}));

export type DescribeNotificationRuleError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specified notification rule.
 */
export const describeNotificationRule: API.OperationMethod<
  DescribeNotificationRuleRequest,
  DescribeNotificationRuleResult,
  DescribeNotificationRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeNotificationRuleRequest,
  output: DescribeNotificationRuleResult,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNotificationRule",
}));

export type ListEventTypesError = InvalidNextTokenException | ValidationException | CommonErrors;
/**
 * Returns information about the event types available for configuring notifications.
 */
export const listEventTypes: API.PaginatedOperationMethod<
  ListEventTypesRequest,
  ListEventTypesResult,
  ListEventTypesError,
  Credentials | HttpClient.HttpClient,
  EventTypeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEventTypesRequest,
  output: ListEventTypesResult,
  errors: [InvalidNextTokenException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventTypes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EventTypes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNotificationRulesError =
  | InvalidNextTokenException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the notification rules for an Amazon Web Services account.
 */
export const listNotificationRules: API.PaginatedOperationMethod<
  ListNotificationRulesRequest,
  ListNotificationRulesResult,
  ListNotificationRulesError,
  Credentials | HttpClient.HttpClient,
  NotificationRuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListNotificationRulesRequest,
  output: ListNotificationRulesResult,
  errors: [InvalidNextTokenException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotificationRules",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NotificationRules",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the tags associated with a notification rule.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResult,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTargetsError = InvalidNextTokenException | ValidationException | CommonErrors;
/**
 * Returns a list of the notification rule targets for an Amazon Web Services account.
 */
export const listTargets: API.PaginatedOperationMethod<
  ListTargetsRequest,
  ListTargetsResult,
  ListTargetsError,
  Credentials | HttpClient.HttpClient,
  TargetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTargetsRequest,
  output: ListTargetsResult,
  errors: [InvalidNextTokenException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Targets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type SubscribeError =
  | ConfigurationException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates an association between a notification rule and an Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client so that the
 * associated target can receive notifications when the events described in the rule are
 * triggered.
 */
export const subscribe: API.OperationMethod<
  SubscribeRequest,
  SubscribeResult,
  SubscribeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubscribeRequest,
  output: SubscribeResult,
  errors: [ConfigurationException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Subscribe",
}));

export type TagResourceError =
  | ConcurrentModificationException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Associates a set of provided tags with a notification rule.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResult,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResult,
  errors: [
    ConcurrentModificationException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UnsubscribeError = ValidationException | CommonErrors;
/**
 * Removes an association between a notification rule and an Amazon Q Developer in chat applications topic so that
 * subscribers to that topic stop receiving notifications when the events described in the
 * rule are triggered.
 */
export const unsubscribe: API.OperationMethod<
  UnsubscribeRequest,
  UnsubscribeResult,
  UnsubscribeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UnsubscribeRequest,
  output: UnsubscribeResult,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Unsubscribe",
}));

export type UntagResourceError =
  | ConcurrentModificationException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes the association between one or more provided tags and a notification
 * rule.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResult,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResult,
  errors: [
    ConcurrentModificationException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateNotificationRuleError =
  | ConfigurationException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a notification rule for a resource. You can change the events that trigger the
 * notification rule, the status of the rule, and the targets that receive the
 * notifications.
 *
 * To add or remove tags for a notification rule, you must use TagResource and UntagResource.
 */
export const updateNotificationRule: API.OperationMethod<
  UpdateNotificationRuleRequest,
  UpdateNotificationRuleResult,
  UpdateNotificationRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNotificationRuleRequest,
  output: UpdateNotificationRuleResult,
  errors: [ConfigurationException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNotificationRule",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ TargetType: S.optional(S.String), TargetAddress: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Target" });
    case 2:
      return S.Array(Target);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: SensitiveString,
          EventTypeIds: EventTypeIds,
          Resource: S.String,
          Targets: Targets,
          DetailType: DetailType,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(Tags),
          Status: S.optional(NotificationRuleStatus),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/createNotificationRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateNotificationRuleRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "CreateNotificationRuleResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deleteNotificationRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteNotificationRuleRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TargetAddress: SensitiveString,
          ForceUnsubscribeAll: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/deleteTarget" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTargetRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteTargetResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/describeNotificationRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeNotificationRuleRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EventTypeId: S.optional(S.String),
          ServiceName: S.optional(S.String),
          EventTypeName: S.optional(S.String),
          ResourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventTypeSummary" });
    case 3:
      return S.Array(EventTypeSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetAddress: S.optional(SensitiveString),
          TargetType: S.optional(S.String),
          TargetStatus: S.optional(TargetStatus),
        }),
      ).annotate({ identifier: "TargetSummary" });
    case 5:
      return S.Array(TargetSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.optional(SensitiveString),
          EventTypes: S.optional(EventTypeBatch),
          Resource: S.optional(S.String),
          Targets: S.optional(TargetsBatch),
          DetailType: S.optional(DetailType),
          CreatedBy: S.optional(S.String),
          Status: S.optional(NotificationRuleStatus),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(Tags),
        }),
      ).annotate({
        identifier: "DescribeNotificationRuleResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: ListEventTypesFilterName, Value: S.String }),
      ).annotate({ identifier: "ListEventTypesFilter" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ListEventTypesFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(ListEventTypesFilters),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listEventTypes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEventTypesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ EventTypes: S.optional(EventTypeBatch), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEventTypesResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: ListNotificationRulesFilterName, Value: S.String }),
      ).annotate({
        identifier: "ListNotificationRulesFilter",
      });
    case 4:
      return S.Array(ListNotificationRulesFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(ListNotificationRulesFilters),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listNotificationRules" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNotificationRulesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Arn: S.optional(S.String) }),
      ).annotate({ identifier: "NotificationRuleSummary" });
    case 7:
      return S.Array(NotificationRuleSummary);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          NotificationRules: S.optional(NotificationRuleBatch),
        }),
      ).annotate({
        identifier: "ListNotificationRulesResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/listTagsForResource" }),
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
    case 2:
      return S.suspend(() => S.Struct({ Tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(ListTargetsFilters),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listTargets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTargetsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Targets: S.optional(TargetsBatch), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTargetsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Target: Target, ClientRequestToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/subscribe" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SubscribeRequest" });
    case 6:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "SubscribeResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Tags: Tags }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(Tags) })).annotate({
        identifier: "TagResourceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, TargetAddress: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/unsubscribe" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UnsubscribeRequest" });
    case 2:
      return S.suspend(() => S.Struct({ Arn: S.String })).annotate({
        identifier: "UnsubscribeResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          TagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/untagResource/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.optional(SensitiveString),
          Status: S.optional(NotificationRuleStatus),
          EventTypeIds: S.optional(EventTypeIds),
          Targets: S.optional(Targets),
          DetailType: S.optional(DetailType),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/updateNotificationRule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNotificationRuleRequest",
      });
  }
}
