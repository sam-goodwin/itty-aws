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
export type NotificationRuleResource = string;
export type TargetType = string;
export type TargetAddress = string | redacted.Redacted<string>;
export interface Target {
  TargetType?: string;
  TargetAddress?: string | redacted.Redacted<string>;
}
export type Targets = Target[];
export type DetailType = "BASIC" | "FULL" | (string & {});
export type ClientRequestToken = string;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export type NotificationRuleStatus = "ENABLED" | "DISABLED" | (string & {});
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
export type NotificationRuleArn = string;
export interface CreateNotificationRuleResult {
  Arn?: string;
}
export interface DeleteNotificationRuleRequest {
  Arn: string;
}
export interface DeleteNotificationRuleResult {
  Arn?: string;
}
export type ForceUnsubscribeAll = boolean;
export interface DeleteTargetRequest {
  TargetAddress: string | redacted.Redacted<string>;
  ForceUnsubscribeAll?: boolean;
}
export interface DeleteTargetResult {}
export interface DescribeNotificationRuleRequest {
  Arn: string;
}
export type ServiceName = string;
export type EventTypeName = string;
export type ResourceType = string;
export interface EventTypeSummary {
  EventTypeId?: string;
  ServiceName?: string;
  EventTypeName?: string;
  ResourceType?: string;
}
export type EventTypeBatch = EventTypeSummary[];
export type TargetStatus =
  | "PENDING"
  | "ACTIVE"
  | "UNREACHABLE"
  | "INACTIVE"
  | "DEACTIVATED"
  | (string & {});
export interface TargetSummary {
  TargetAddress?: string | redacted.Redacted<string>;
  TargetType?: string;
  TargetStatus?: TargetStatus;
}
export type TargetsBatch = TargetSummary[];
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
export type ListEventTypesFilterName = "RESOURCE_TYPE" | "SERVICE_NAME" | (string & {});
export type ListEventTypesFilterValue = string;
export interface ListEventTypesFilter {
  Name: ListEventTypesFilterName;
  Value: string;
}
export type ListEventTypesFilters = ListEventTypesFilter[];
export type NextToken = string;
export type MaxResults = number;
export interface ListEventTypesRequest {
  Filters?: ListEventTypesFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventTypesResult {
  EventTypes?: EventTypeSummary[];
  NextToken?: string;
}
export type ListNotificationRulesFilterName =
  | "EVENT_TYPE_ID"
  | "CREATED_BY"
  | "RESOURCE"
  | "TARGET_ADDRESS"
  | (string & {});
export type ListNotificationRulesFilterValue = string;
export interface ListNotificationRulesFilter {
  Name: ListNotificationRulesFilterName;
  Value: string;
}
export type ListNotificationRulesFilters = ListNotificationRulesFilter[];
export interface ListNotificationRulesRequest {
  Filters?: ListNotificationRulesFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export type NotificationRuleId = string;
export interface NotificationRuleSummary {
  Id?: string;
  Arn?: string;
}
export type NotificationRuleBatch = NotificationRuleSummary[];
export interface ListNotificationRulesResult {
  NextToken?: string;
  NotificationRules?: NotificationRuleSummary[];
}
export interface ListTagsForResourceRequest {
  Arn: string;
}
export interface ListTagsForResourceResult {
  Tags?: { [key: string]: string | undefined };
}
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
export interface ListTargetsRequest {
  Filters?: ListTargetsFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTargetsResult {
  Targets?: TargetSummary[];
  NextToken?: string;
}
export interface SubscribeRequest {
  Arn: string;
  Target: Target;
  ClientRequestToken?: string;
}
export interface SubscribeResult {
  Arn?: string;
}
export interface TagResourceRequest {
  Arn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResult {
  Tags?: { [key: string]: string | undefined };
}
export interface UnsubscribeRequest {
  Arn: string;
  TargetAddress: string | redacted.Redacted<string>;
}
export interface UnsubscribeResult {
  Arn: string;
}
export type TagKeys = string[];
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: string[];
}
export interface UntagResourceResult {}
export interface UpdateNotificationRuleRequest {
  Arn: string;
  Name?: string | redacted.Redacted<string>;
  Status?: NotificationRuleStatus;
  EventTypeIds?: string[];
  Targets?: Target[];
  DetailType?: DetailType;
}
export interface UpdateNotificationRuleResult {}
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
  input: __S(4) as any as S.Schema<CreateNotificationRuleRequest>,
  output: __S(5) as any as S.Schema<CreateNotificationRuleResult>,
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
  input: __S(6) as any as S.Schema<DeleteNotificationRuleRequest>,
  output: __S(5) as any as S.Schema<DeleteNotificationRuleResult>,
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
  input: __S(7) as any as S.Schema<DeleteTargetRequest>,
  output: __S(8) as any as S.Schema<DeleteTargetResult>,
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
  input: __S(9) as any as S.Schema<DescribeNotificationRuleRequest>,
  output: __S(14) as any as S.Schema<DescribeNotificationRuleResult>,
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
  input: __S(17) as any as S.Schema<ListEventTypesRequest>,
  output: __S(18) as any as S.Schema<ListEventTypesResult>,
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
  input: __S(21) as any as S.Schema<ListNotificationRulesRequest>,
  output: __S(24) as any as S.Schema<ListNotificationRulesResult>,
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
  input: __S(25) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(26) as any as S.Schema<ListTagsForResourceResult>,
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
  input: __S(27) as any as S.Schema<ListTargetsRequest>,
  output: __S(28) as any as S.Schema<ListTargetsResult>,
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
  input: __S(29) as any as S.Schema<SubscribeRequest>,
  output: __S(30) as any as S.Schema<SubscribeResult>,
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
  input: __S(31) as any as S.Schema<TagResourceRequest>,
  output: __S(32) as any as S.Schema<TagResourceResult>,
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
  input: __S(33) as any as S.Schema<UnsubscribeRequest>,
  output: __S(34) as any as S.Schema<UnsubscribeResult>,
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
  input: __S(35) as any as S.Schema<UntagResourceRequest>,
  output: __S(8) as any as S.Schema<UntagResourceResult>,
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
  input: __S(36) as any as S.Schema<UpdateNotificationRuleRequest>,
  output: __S(8) as any as S.Schema<UpdateNotificationRuleResult>,
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
      return S.Array(__S(1));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: SensitiveString,
          EventTypeIds: __S(0),
          Resource: S.String,
          Targets: __S(2),
          DetailType: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(3)),
          Status: S.optional(S.String),
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
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetAddress: S.optional(SensitiveString),
          TargetType: S.optional(S.String),
          TargetStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetSummary" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.optional(SensitiveString),
          EventTypes: S.optional(__S(11)),
          Resource: S.optional(S.String),
          Targets: S.optional(__S(13)),
          DetailType: S.optional(S.String),
          CreatedBy: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(__S(3)),
        }),
      ).annotate({
        identifier: "DescribeNotificationRuleResult",
      });
    case 7:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "ListEventTypesFilter",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(16)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listEventTypes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEventTypesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ EventTypes: S.optional(__S(11)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEventTypesResult" });
    case 3:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "ListNotificationRulesFilter",
      });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(20)),
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
      return S.Array(__S(22));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          NotificationRules: S.optional(__S(23)),
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
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(3)) })).annotate({
        identifier: "ListTagsForResourceResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(16)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/listTargets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTargetsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Targets: S.optional(__S(13)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTargetsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Target: __S(1), ClientRequestToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/subscribe" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SubscribeRequest" });
    case 6:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "SubscribeResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Tags: __S(3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(3)) })).annotate({
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
          TagKeys: __S(0).pipe(T.HttpQuery("tagKeys")),
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
          Status: S.optional(S.String),
          EventTypeIds: S.optional(__S(0)),
          Targets: S.optional(__S(2)),
          DetailType: S.optional(S.String),
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
  }
}
