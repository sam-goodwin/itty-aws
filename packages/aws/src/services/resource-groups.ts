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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Resource Groups", serviceShapeName: "Ardi" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "resource-groups" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-11-27");
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
              `https://resource-groups-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://resource-groups.${Region}.amazonaws.com`);
            }
            return e(
              `https://resource-groups-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://resource-groups.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://resource-groups.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class GroupAlreadyExists
  extends /*@__PURE__*/ S.TaggedError<GroupAlreadyExists>()(
    "GroupAlreadyExists",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "BadRequestException",
      message: { includes: "group already exists" },
    }),
  ).pipe(C.withAlreadyExistsError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class MethodNotAllowedException
  extends /*@__PURE__*/ S.TaggedError<MethodNotAllowedException>()(
    "MethodNotAllowedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(405),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type TagSyncTaskArn = string;
export interface CancelTagSyncTaskInput {
  TaskArn: string;
}
export interface CancelTagSyncTaskResponse {}
export type CreateGroupName = string;
export type Description = string;
export type QueryType = "TAG_FILTERS_1_0" | "CLOUDFORMATION_STACK_1_0" | (string & {});
export type Query = string;
export interface ResourceQuery {
  Type: QueryType;
  Query: string;
}
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export type GroupConfigurationType = string;
export type GroupConfigurationParameterName = string;
export type GroupConfigurationParameterValue = string;
export type GroupConfigurationParameterValueList = string[];
export interface GroupConfigurationParameter {
  Name: string;
  Values?: string[];
}
export type GroupParameterList = GroupConfigurationParameter[];
export interface GroupConfigurationItem {
  Type: string;
  Parameters?: GroupConfigurationParameter[];
}
export type GroupConfigurationList = GroupConfigurationItem[];
export type Criticality = number;
export type Owner = string;
export type DisplayName = string;
export interface CreateGroupInput {
  Name: string;
  Description?: string;
  ResourceQuery?: ResourceQuery;
  Tags?: { [key: string]: string | undefined };
  Configuration?: GroupConfigurationItem[];
  Criticality?: number;
  Owner?: string;
  DisplayName?: string;
}
export type GroupArnV2 = string;
export type GroupName = string;
export type ApplicationTagKey = string;
export type ApplicationArn = string;
export type ApplicationTag = { [key: string]: string | undefined };
export interface Group {
  GroupArn: string;
  Name: string;
  Description?: string;
  Criticality?: number;
  Owner?: string;
  DisplayName?: string;
  ApplicationTag?: { [key: string]: string | undefined };
}
export type GroupConfigurationStatus =
  | "UPDATING"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED"
  | (string & {});
export type GroupConfigurationFailureReason = string;
export interface GroupConfiguration {
  Configuration?: GroupConfigurationItem[];
  ProposedConfiguration?: GroupConfigurationItem[];
  Status?: GroupConfigurationStatus;
  FailureReason?: string;
}
export interface CreateGroupOutput {
  Group: Group;
  ResourceQuery?: ResourceQuery;
  Tags?: { [key: string]: string | undefined };
  GroupConfiguration?: GroupConfiguration;
}
export type GroupStringV2 = string;
export interface DeleteGroupInput {
  GroupName?: string;
  Group?: string;
}
export interface DeleteGroupOutput {
  Group?: Group;
}
export interface GetAccountSettingsRequest {}
export type GroupLifecycleEventsDesiredStatus = "ACTIVE" | "INACTIVE" | (string & {});
export type GroupLifecycleEventsStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "IN_PROGRESS"
  | "ERROR"
  | (string & {});
export type GroupLifecycleEventsStatusMessage = string;
export interface AccountSettings {
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus;
  GroupLifecycleEventsStatus?: GroupLifecycleEventsStatus;
  GroupLifecycleEventsStatusMessage?: string;
}
export interface GetAccountSettingsOutput {
  AccountSettings?: AccountSettings;
}
export interface GetGroupInput {
  GroupName?: string;
  Group?: string;
}
export interface GetGroupOutput {
  Group: Group;
}
export type GroupString = string;
export interface GetGroupConfigurationInput {
  Group?: string;
}
export interface GetGroupConfigurationOutput {
  GroupConfiguration?: GroupConfiguration;
}
export interface GetGroupQueryInput {
  GroupName?: string;
  Group?: string;
}
export interface GroupQuery {
  GroupName: string;
  ResourceQuery: ResourceQuery;
}
export interface GetGroupQueryOutput {
  GroupQuery?: GroupQuery;
}
export interface GetTagsInput {
  Arn: string;
}
export interface GetTagsOutput {
  Arn?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface GetTagSyncTaskInput {
  TaskArn: string;
}
export type RoleArn = string;
export type TagSyncTaskStatus = "ACTIVE" | "ERROR" | (string & {});
export type ErrorMessage = string;
export interface GetTagSyncTaskOutput {
  GroupArn?: string;
  GroupName?: string;
  TaskArn?: string;
  TagKey?: string;
  TagValue?: string;
  ResourceQuery?: ResourceQuery;
  RoleArn?: string;
  Status?: TagSyncTaskStatus;
  ErrorMessage?: string;
  CreatedAt?: Date;
}
export type ResourceArn = string;
export type ResourceArnList = string[];
export interface GroupResourcesInput {
  Group: string;
  ResourceArns: string[];
}
export type ErrorCode = string;
export interface FailedResource {
  ResourceArn?: string;
  ErrorMessage?: string;
  ErrorCode?: string;
}
export type FailedResourceList = FailedResource[];
export interface PendingResource {
  ResourceArn?: string;
}
export type PendingResourceList = PendingResource[];
export interface GroupResourcesOutput {
  Succeeded?: string[];
  Failed?: FailedResource[];
  Pending?: PendingResource[];
}
export type MaxResults = number;
export type ListGroupingStatusesFilterName = "status" | "resource-arn" | (string & {});
export type ListGroupingStatusesFilterValue = string;
export type ListGroupingStatusesFilterValues = string[];
export interface ListGroupingStatusesFilter {
  Name: ListGroupingStatusesFilterName;
  Values: string[];
}
export type ListGroupingStatusesFilterList = ListGroupingStatusesFilter[];
export type NextToken = string;
export interface ListGroupingStatusesInput {
  Group: string;
  MaxResults?: number;
  Filters?: ListGroupingStatusesFilter[];
  NextToken?: string;
}
export type GroupingType = "GROUP" | "UNGROUP" | (string & {});
export type GroupingStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS" | "SKIPPED" | (string & {});
export interface GroupingStatusesItem {
  ResourceArn?: string;
  Action?: GroupingType;
  Status?: GroupingStatus;
  ErrorMessage?: string;
  ErrorCode?: string;
  UpdatedAt?: Date;
}
export type GroupingStatusesList = GroupingStatusesItem[];
export interface ListGroupingStatusesOutput {
  Group?: string;
  GroupingStatuses?: GroupingStatusesItem[];
  NextToken?: string;
}
export type ResourceFilterName = "resource-type" | (string & {});
export type ResourceFilterValue = string;
export type ResourceFilterValues = string[];
export interface ResourceFilter {
  Name: ResourceFilterName;
  Values: string[];
}
export type ResourceFilterList = ResourceFilter[];
export interface ListGroupResourcesInput {
  GroupName?: string;
  Group?: string;
  Filters?: ResourceFilter[];
  MaxResults?: number;
  NextToken?: string;
}
export type ResourceType = string;
export interface ResourceIdentifier {
  ResourceArn?: string;
  ResourceType?: string;
}
export type ResourceStatusValue = "PENDING" | (string & {});
export interface ResourceStatus {
  Name?: ResourceStatusValue;
}
export interface ListGroupResourcesItem {
  Identifier?: ResourceIdentifier;
  Status?: ResourceStatus;
}
export type ListGroupResourcesItemList = ListGroupResourcesItem[];
export type ResourceIdentifierList = ResourceIdentifier[];
export type QueryErrorCode =
  | "CLOUDFORMATION_STACK_INACTIVE"
  | "CLOUDFORMATION_STACK_NOT_EXISTING"
  | "CLOUDFORMATION_STACK_UNASSUMABLE_ROLE"
  | "RESOURCE_TYPE_NOT_SUPPORTED"
  | (string & {});
export type QueryErrorMessage = string;
export interface QueryError {
  ErrorCode?: QueryErrorCode;
  Message?: string;
}
export type QueryErrorList = QueryError[];
export interface ListGroupResourcesOutput {
  Resources?: ListGroupResourcesItem[];
  ResourceIdentifiers?: ResourceIdentifier[];
  NextToken?: string;
  QueryErrors?: QueryError[];
}
export type GroupFilterName =
  | "resource-type"
  | "configuration-type"
  | "owner"
  | "display-name"
  | "criticality"
  | (string & {});
export type GroupFilterValue = string;
export type GroupFilterValues = string[];
export interface GroupFilter {
  Name: GroupFilterName;
  Values: string[];
}
export type GroupFilterList = GroupFilter[];
export interface ListGroupsInput {
  Filters?: GroupFilter[];
  MaxResults?: number;
  NextToken?: string;
}
export type GroupArn = string;
export interface GroupIdentifier {
  GroupName?: string;
  GroupArn?: string;
  Description?: string;
  Criticality?: number;
  Owner?: string;
  DisplayName?: string;
}
export type GroupIdentifierList = GroupIdentifier[];
export type GroupList = Group[];
export interface ListGroupsOutput {
  GroupIdentifiers?: GroupIdentifier[];
  Groups?: Group[];
  NextToken?: string;
}
export interface ListTagSyncTasksFilter {
  GroupArn?: string;
  GroupName?: string;
}
export type ListTagSyncTasksFilterList = ListTagSyncTasksFilter[];
export interface ListTagSyncTasksInput {
  Filters?: ListTagSyncTasksFilter[];
  MaxResults?: number;
  NextToken?: string;
}
export interface TagSyncTaskItem {
  GroupArn?: string;
  GroupName?: string;
  TaskArn?: string;
  TagKey?: string;
  TagValue?: string;
  ResourceQuery?: ResourceQuery;
  RoleArn?: string;
  Status?: TagSyncTaskStatus;
  ErrorMessage?: string;
  CreatedAt?: Date;
}
export type TagSyncTaskList = TagSyncTaskItem[];
export interface ListTagSyncTasksOutput {
  TagSyncTasks?: TagSyncTaskItem[];
  NextToken?: string;
}
export interface PutGroupConfigurationInput {
  Group?: string;
  Configuration?: GroupConfigurationItem[];
}
export interface PutGroupConfigurationOutput {}
export interface SearchResourcesInput {
  ResourceQuery: ResourceQuery;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchResourcesOutput {
  ResourceIdentifiers?: ResourceIdentifier[];
  NextToken?: string;
  QueryErrors?: QueryError[];
}
export interface StartTagSyncTaskInput {
  Group: string;
  TagKey?: string;
  TagValue?: string;
  ResourceQuery?: ResourceQuery;
  RoleArn: string;
}
export interface StartTagSyncTaskOutput {
  GroupArn?: string;
  GroupName?: string;
  TaskArn?: string;
  TagKey?: string;
  TagValue?: string;
  ResourceQuery?: ResourceQuery;
  RoleArn?: string;
}
export interface TagInput {
  Arn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagOutput {
  Arn?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface UngroupResourcesInput {
  Group: string;
  ResourceArns: string[];
}
export interface UngroupResourcesOutput {
  Succeeded?: string[];
  Failed?: FailedResource[];
  Pending?: PendingResource[];
}
export type TagKeyList = string[];
export interface UntagInput {
  Arn: string;
  Keys: string[];
}
export interface UntagOutput {
  Arn?: string;
  Keys?: string[];
}
export interface UpdateAccountSettingsInput {
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus;
}
export interface UpdateAccountSettingsOutput {
  AccountSettings?: AccountSettings;
}
export interface UpdateGroupInput {
  GroupName?: string;
  Group?: string;
  Description?: string;
  Criticality?: number;
  Owner?: string;
  DisplayName?: string;
}
export interface UpdateGroupOutput {
  Group?: Group;
}
export interface UpdateGroupQueryInput {
  GroupName?: string;
  Group?: string;
  ResourceQuery: ResourceQuery;
}
export interface UpdateGroupQueryOutput {
  GroupQuery?: GroupQuery;
}
export type CancelTagSyncTaskError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Cancels the specified tag-sync task.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:CancelTagSyncTask` on the application group
 *
 * - `resource-groups:DeleteGroup`
 */
export const cancelTagSyncTask: API.OperationMethod<
  CancelTagSyncTaskInput,
  CancelTagSyncTaskResponse,
  CancelTagSyncTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<CancelTagSyncTaskInput>,
  output: __S(1, __c0, 1) as any as S.Schema<CancelTagSyncTaskResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelTagSyncTask",
}));

export type CreateGroupError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | GroupAlreadyExists
  | CommonErrors;
/**
 * Creates a resource group with the specified name and description. You can optionally
 * include either a resource query or a service configuration. For more information about
 * constructing a resource query, see Build queries and groups in
 * Resource Groups in the *Resource Groups User Guide*. For more information
 * about service-linked groups and service configurations, see Service configurations for Resource Groups.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:CreateGroup`
 */
export const createGroup: API.OperationMethod<
  CreateGroupInput,
  CreateGroupOutput,
  CreateGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<CreateGroupInput>,
  output: __S(13, __c1, 5) as any as S.Schema<CreateGroupOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
    GroupAlreadyExists,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGroup",
}));

export type DeleteGroupError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the specified resource group. Deleting a resource group does not delete any
 * resources that are members of the group; it only deletes the group structure.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:DeleteGroup`
 */
export const deleteGroup: API.OperationMethod<
  DeleteGroupInput,
  DeleteGroupOutput,
  DeleteGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<DeleteGroupInput>,
  output: __S(15, __c1, 7) as any as S.Schema<DeleteGroupOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGroup",
}));

export type GetAccountSettingsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the current status of optional features in Resource Groups.
 */
export const getAccountSettings: API.OperationMethod<
  GetAccountSettingsRequest,
  GetAccountSettingsOutput,
  GetAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<GetAccountSettingsRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<GetAccountSettingsOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountSettings",
}));

export type GetGroupError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns information about a specified resource group.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetGroup`
 */
export const getGroup: API.OperationMethod<
  GetGroupInput,
  GetGroupOutput,
  GetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<GetGroupInput>,
  output: __S(20, __c2, 4) as any as S.Schema<GetGroupOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroup",
}));

export type GetGroupConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the service configuration associated with the specified resource group. For
 * details about the service configuration syntax, see Service configurations for Resource Groups.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetGroupConfiguration`
 */
export const getGroupConfiguration: API.OperationMethod<
  GetGroupConfigurationInput,
  GetGroupConfigurationOutput,
  GetGroupConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<GetGroupConfigurationInput>,
  output: __S(22, __c2, 6) as any as S.Schema<GetGroupConfigurationOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroupConfiguration",
}));

export type GetGroupQueryError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the resource query associated with the specified resource group. For more
 * information about resource queries, see Create
 * a tag-based group in Resource Groups.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetGroupQuery`
 */
export const getGroupQuery: API.OperationMethod<
  GetGroupQueryInput,
  GetGroupQueryOutput,
  GetGroupQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<GetGroupQueryInput>,
  output: __S(25, __c3, 1) as any as S.Schema<GetGroupQueryOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroupQuery",
}));

export type GetTagsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of tags that are associated with a resource group, specified by an
 * Amazon resource name (ARN).
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetTags`
 */
export const getTags: API.OperationMethod<
  GetTagsInput,
  GetTagsOutput,
  GetTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<GetTagsInput>,
  output: __S(27, __c3, 3) as any as S.Schema<GetTagsOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTags",
}));

export type GetTagSyncTaskError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns information about a specified tag-sync task.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetTagSyncTask` on the application group
 */
export const getTagSyncTask: API.OperationMethod<
  GetTagSyncTaskInput,
  GetTagSyncTaskOutput,
  GetTagSyncTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<GetTagSyncTaskInput>,
  output: __S(29, __c3, 5) as any as S.Schema<GetTagSyncTaskOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTagSyncTask",
}));

export type GroupResourcesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds the specified resources to the specified group.
 *
 * You can only use this operation with the following groups:
 *
 * - `AWS::EC2::HostManagement`
 *
 * - `AWS::EC2::CapacityReservationPool`
 *
 * - `AWS::ResourceGroups::ApplicationGroup`
 *
 * Other resource group types and resource types are not currently supported by this
 * operation.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GroupResources`
 */
export const groupResources: API.OperationMethod<
  GroupResourcesInput,
  GroupResourcesOutput,
  GroupResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<GroupResourcesInput>,
  output: __S(35, __c4, 3) as any as S.Schema<GroupResourcesOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GroupResources",
}));

export type ListGroupingStatusesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | NotFoundException
  | CommonErrors;
/**
 * Returns the status of the last grouping or ungrouping action for
 * each resource in the specified application group.
 */
export const listGroupingStatuses: API.PaginatedOperationMethod<
  ListGroupingStatusesInput,
  ListGroupingStatusesOutput,
  ListGroupingStatusesError,
  Credentials | HttpClient.HttpClient,
  GroupingStatusesItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<ListGroupingStatusesInput>,
  output: __S(41, __c5, 1) as any as S.Schema<ListGroupingStatusesOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroupingStatuses",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "GroupingStatuses",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListGroupResourcesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of Amazon resource names (ARNs) of the resources that are members of a specified resource
 * group.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:ListGroupResources`
 *
 * - `cloudformation:DescribeStacks`
 *
 * - `cloudformation:ListStackResources`
 *
 * - `tag:GetResources`
 */
export const listGroupResources: API.PaginatedOperationMethod<
  ListGroupResourcesInput,
  ListGroupResourcesOutput,
  ListGroupResourcesError,
  Credentials | HttpClient.HttpClient,
  ResourceIdentifier
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<ListGroupResourcesInput>,
  output: __S(52, __c6, 4) as any as S.Schema<ListGroupResourcesOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroupResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceIdentifiers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListGroupsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing Resource Groups in your account.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:ListGroups`
 */
export const listGroups: API.PaginatedOperationMethod<
  ListGroupsInput,
  ListGroupsOutput,
  ListGroupsError,
  Credentials | HttpClient.HttpClient,
  GroupIdentifier
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<ListGroupsInput>,
  output: __S(59, __c7, 3) as any as S.Schema<ListGroupsOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "GroupIdentifiers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagSyncTasksError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of tag-sync tasks.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:ListTagSyncTasks` with the group passed in the filters as the resource
 * or * if using no filters
 */
export const listTagSyncTasks: API.PaginatedOperationMethod<
  ListTagSyncTasksInput,
  ListTagSyncTasksOutput,
  ListTagSyncTasksError,
  Credentials | HttpClient.HttpClient,
  TagSyncTaskItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<ListTagSyncTasksInput>,
  output: __S(64, __c8, 0) as any as S.Schema<ListTagSyncTasksOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagSyncTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TagSyncTasks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutGroupConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Attaches a service configuration to the specified group. This occurs asynchronously,
 * and can take time to complete. You can use GetGroupConfiguration to
 * check the status of the update.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:PutGroupConfiguration`
 */
export const putGroupConfiguration: API.OperationMethod<
  PutGroupConfigurationInput,
  PutGroupConfigurationOutput,
  PutGroupConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<PutGroupConfigurationInput>,
  output: __S(1, __c0, 1) as any as S.Schema<PutGroupConfigurationOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutGroupConfiguration",
}));

export type SearchResourcesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of Amazon Web Services resource identifiers that matches the specified query. The
 * query uses the same format as a resource query in a CreateGroup or
 * UpdateGroupQuery operation.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:SearchResources`
 *
 * - `cloudformation:DescribeStacks`
 *
 * - `cloudformation:ListStackResources`
 *
 * - `tag:GetResources`
 */
export const searchResources: API.PaginatedOperationMethod<
  SearchResourcesInput,
  SearchResourcesOutput,
  SearchResourcesError,
  Credentials | HttpClient.HttpClient,
  ResourceIdentifier
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<SearchResourcesInput>,
  output: __S(67, __c8, 3) as any as S.Schema<SearchResourcesOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceIdentifiers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type StartTagSyncTaskError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a new tag-sync task to onboard and sync resources tagged with a specific tag key-value pair to an
 * application. To start a tag-sync task, you need a resource tagging role.
 * The resource tagging role grants permissions to tag and untag applications resources and must include a
 * trust policy that allows Resource Groups to assume the role and perform resource tagging tasks on your behalf.
 *
 * For instructions on creating a tag-sync task, see Create a tag-sync
 * using the Resource Groups API in the *Amazon Web Services Service Catalog AppRegistry Administrator Guide*.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:StartTagSyncTask` on the application group
 *
 * - `resource-groups:CreateGroup`
 *
 * - `iam:PassRole` on the role provided in the request
 */
export const startTagSyncTask: API.OperationMethod<
  StartTagSyncTaskInput,
  StartTagSyncTaskOutput,
  StartTagSyncTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<StartTagSyncTaskInput>,
  output: __S(69, __c8, 5) as any as S.Schema<StartTagSyncTaskOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTagSyncTask",
}));

export type TagError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds tags to a resource group with the specified Amazon resource name (ARN). Existing tags on a resource
 * group are not changed if they are not specified in the request parameters.
 *
 * Do not store personally identifiable information (PII) or other confidential or
 * sensitive information in tags. We use tags to provide you with billing and
 * administration services. Tags are not intended to be used for private or sensitive
 * data.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:Tag`
 */
export const tag: API.OperationMethod<
  TagInput,
  TagOutput,
  TagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<TagInput>,
  output: __S(27, __c3, 3) as any as S.Schema<TagOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Tag",
}));

export type UngroupResourcesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes the specified resources from the specified group. This operation works only
 * with static groups that you populated using the GroupResources
 * operation. It doesn't work with any resource groups that are automatically populated by
 * tag-based or CloudFormation stack-based queries.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:UngroupResources`
 */
export const ungroupResources: API.OperationMethod<
  UngroupResourcesInput,
  UngroupResourcesOutput,
  UngroupResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<UngroupResourcesInput>,
  output: __S(35, __c4, 3) as any as S.Schema<UngroupResourcesOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UngroupResources",
}));

export type UntagError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes tags from a specified resource group.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:Untag`
 */
export const untag: API.OperationMethod<
  UntagInput,
  UntagOutput,
  UntagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<UntagInput>,
  output: __S(73, __c9, 1) as any as S.Schema<UntagOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Untag",
}));

export type UpdateAccountSettingsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Turns on or turns off optional features in Resource Groups.
 *
 * The preceding example shows that the request to turn on group lifecycle events is
 * `IN_PROGRESS`. You can call the GetAccountSettings
 * operation to check for completion by looking for `GroupLifecycleEventsStatus`
 * to change to `ACTIVE`.
 */
export const updateAccountSettings: API.OperationMethod<
  UpdateAccountSettingsInput,
  UpdateAccountSettingsOutput,
  UpdateAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<UpdateAccountSettingsInput>,
  output: __S(75, __c9, 3) as any as S.Schema<UpdateAccountSettingsOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccountSettings",
}));

export type UpdateGroupError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the description for an existing group. You cannot update the name of a
 * resource group.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:UpdateGroup`
 */
export const updateGroup: API.OperationMethod<
  UpdateGroupInput,
  UpdateGroupOutput,
  UpdateGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<UpdateGroupInput>,
  output: __S(15, __c1, 7) as any as S.Schema<UpdateGroupOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGroup",
}));

export type UpdateGroupQueryError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the resource query of a group. For more information about resource queries,
 * see Create a tag-based group in Resource Groups.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:UpdateGroupQuery`
 */
export const updateGroupQuery: API.OperationMethod<
  UpdateGroupQueryInput,
  UpdateGroupQueryOutput,
  UpdateGroupQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<UpdateGroupQueryInput>,
  output: __S(25, __c3, 1) as any as S.Schema<UpdateGroupQueryOutput>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGroupQuery",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TaskArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cancel-tag-sync-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelTagSyncTaskInput" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelTagSyncTaskResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Type: S.String, Query: S.String })).annotate({
        identifier: "ResourceQuery",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Values: S.optional(__S(4, __c0, 4)) }),
      ).annotate({
        identifier: "GroupConfigurationParameter",
      });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ Type: S.String, Parameters: S.optional(__S(6, __c0, 6)) }),
      ).annotate({ identifier: "GroupConfigurationItem" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          ResourceQuery: S.optional(__S(2, __c0, 2)),
          Tags: S.optional(__S(3, __c0, 3)),
          Configuration: S.optional(__S(8, __c1, 0)),
          Criticality: S.optional(S.Number),
          Owner: S.optional(S.String),
          DisplayName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/groups" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateGroupInput" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          GroupArn: S.String,
          Name: S.String,
          Description: S.optional(S.String),
          Criticality: S.optional(S.Number),
          Owner: S.optional(S.String),
          DisplayName: S.optional(S.String),
          ApplicationTag: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "Group" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Configuration: S.optional(__S(8, __c1, 0)),
          ProposedConfiguration: S.optional(__S(8, __c1, 0)),
          Status: S.optional(S.String),
          FailureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "GroupConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Group: __S(11, __c1, 3),
          ResourceQuery: S.optional(__S(2, __c0, 2)),
          Tags: S.optional(__S(3, __c0, 3)),
          GroupConfiguration: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({ identifier: "CreateGroupOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), Group: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/delete-group" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteGroupInput" });
    case 7:
      return S.suspend(() => S.Struct({ Group: S.optional(__S(11, __c1, 3)) })).annotate({
        identifier: "DeleteGroupOutput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/get-account-settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAccountSettingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GroupLifecycleEventsDesiredStatus: S.optional(S.String),
          GroupLifecycleEventsStatus: S.optional(S.String),
          GroupLifecycleEventsStatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountSettings" });
    case 2:
      return S.suspend(() => S.Struct({ AccountSettings: S.optional(__S(17, __c2, 1)) })).annotate({
        identifier: "GetAccountSettingsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), Group: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/get-group" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGroupInput" });
    case 4:
      return S.suspend(() => S.Struct({ Group: __S(11, __c1, 3) })).annotate({
        identifier: "GetGroupOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Group: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/get-group-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetGroupConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ GroupConfiguration: S.optional(__S(12, __c1, 4)) }),
      ).annotate({
        identifier: "GetGroupConfigurationOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), Group: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/get-group-query" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGroupQueryInput" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, ResourceQuery: __S(2, __c0, 2) }),
      ).annotate({ identifier: "GroupQuery" });
    case 1:
      return S.suspend(() => S.Struct({ GroupQuery: S.optional(__S(24, __c3, 0)) })).annotate({
        identifier: "GetGroupQueryOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resources/{Arn}/tags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTagsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Tags: S.optional(__S(3, __c0, 3)) }),
      ).annotate({ identifier: "GetTagsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ TaskArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/get-tag-sync-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTagSyncTaskInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupArn: S.optional(S.String),
          GroupName: S.optional(S.String),
          TaskArn: S.optional(S.String),
          TagKey: S.optional(S.String),
          TagValue: S.optional(S.String),
          ResourceQuery: S.optional(__S(2, __c0, 2)),
          RoleArn: S.optional(S.String),
          Status: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetTagSyncTaskOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Group: S.String, ResourceArns: __S(4, __c0, 4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/group-resources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GroupResourcesInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          ErrorCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "FailedResource" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() => S.Struct({ ResourceArn: S.optional(S.String) })).annotate({
        identifier: "PendingResource",
      });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Succeeded: S.optional(__S(4, __c0, 4)),
          Failed: S.optional(__S(32, __c4, 0)),
          Pending: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "GroupResourcesOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Values: __S(4, __c0, 4),
        }),
      ).annotate({
        identifier: "ListGroupingStatusesFilter",
      });
    case 5:
      return S.Array(__S(36, __c4, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Group: S.String,
          MaxResults: S.optional(S.Number),
          Filters: S.optional(__S(37, __c4, 5)),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-grouping-statuses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListGroupingStatusesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          Action: S.optional(S.String),
          Status: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GroupingStatusesItem" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Group: S.optional(S.String),
          GroupingStatuses: S.optional(__S(40, __c5, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListGroupingStatusesOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String, Values: __S(4, __c0, 4) })).annotate({
        identifier: "ResourceFilter",
      });
    case 3:
      return S.Array(__S(42, __c5, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          Group: S.optional(S.String),
          Filters: S.optional(__S(43, __c5, 3)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-group-resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListGroupResourcesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String) }),
      ).annotate({ identifier: "ResourceIdentifier" });
    case 6:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "ResourceStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.optional(__S(45, __c5, 5)),
          Status: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({ identifier: "ListGroupResourcesItem" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.Array(__S(45, __c5, 5));
    case 2:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "QueryError" });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(48, __c6, 0)),
          ResourceIdentifiers: S.optional(__S(49, __c6, 1)),
          NextToken: S.optional(S.String),
          QueryErrors: S.optional(__S(51, __c6, 3)),
        }),
      ).annotate({ identifier: "ListGroupResourcesOutput" });
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, Values: __S(4, __c0, 4) })).annotate({
        identifier: "GroupFilter",
      });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(54, __c6, 6)),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/groups-list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListGroupsInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          GroupArn: S.optional(S.String),
          Description: S.optional(S.String),
          Criticality: S.optional(S.Number),
          Owner: S.optional(S.String),
          DisplayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "GroupIdentifier" });
    case 1:
      return S.Array(__S(56, __c7, 0));
    case 2:
      return S.Array(__S(11, __c1, 3));
    case 3:
      return S.suspend(() =>
        S.Struct({
          GroupIdentifiers: S.optional(__S(57, __c7, 1)),
          Groups: S.optional(__S(58, __c7, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListGroupsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ GroupArn: S.optional(S.String), GroupName: S.optional(S.String) }),
      ).annotate({ identifier: "ListTagSyncTasksFilter" });
    case 5:
      return S.Array(__S(60, __c7, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(61, __c7, 5)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-tag-sync-tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagSyncTasksInput" });
    case 7:
      return S.Array(__S(29, __c3, 5));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TagSyncTasks: S.optional(__S(63, __c7, 7)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTagSyncTasksOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Group: S.optional(S.String),
          Configuration: S.optional(__S(8, __c1, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/put-group-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutGroupConfigurationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceQuery: __S(2, __c0, 2),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/resources/search" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SearchResourcesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifiers: S.optional(__S(49, __c6, 1)),
          NextToken: S.optional(S.String),
          QueryErrors: S.optional(__S(51, __c6, 3)),
        }),
      ).annotate({ identifier: "SearchResourcesOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Group: S.String,
          TagKey: S.optional(S.String),
          TagValue: S.optional(S.String),
          ResourceQuery: S.optional(__S(2, __c0, 2)),
          RoleArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/start-tag-sync-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartTagSyncTaskInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupArn: S.optional(S.String),
          GroupName: S.optional(S.String),
          TaskArn: S.optional(S.String),
          TagKey: S.optional(S.String),
          TagValue: S.optional(S.String),
          ResourceQuery: S.optional(__S(2, __c0, 2)),
          RoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartTagSyncTaskOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")), Tags: __S(3, __c0, 3) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/resources/{Arn}/tags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Group: S.String, ResourceArns: __S(4, __c0, 4) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ungroup-resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UngroupResourcesInput" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")), Keys: __S(4, __c0, 4) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/resources/{Arn}/tags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Keys: S.optional(__S(4, __c0, 4)) }),
      ).annotate({ identifier: "UntagOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GroupLifecycleEventsDesiredStatus: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-account-settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAccountSettingsInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ AccountSettings: S.optional(__S(17, __c2, 1)) })).annotate({
        identifier: "UpdateAccountSettingsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          Group: S.optional(S.String),
          Description: S.optional(S.String),
          Criticality: S.optional(S.Number),
          Owner: S.optional(S.String),
          DisplayName: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/update-group" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateGroupInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          Group: S.optional(S.String),
          ResourceQuery: __S(2, __c0, 2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/update-group-query" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGroupQueryInput" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
