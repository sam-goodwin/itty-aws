import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Ardi {
  cancelTagSyncTask(
    input: CancelTagSyncTaskInput,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createGroup(
    input: CreateGroupInput,
  ): Effect.Effect<
    CreateGroupOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupInput,
  ): Effect.Effect<
    DeleteGroupOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getAccountSettings(input: {}): Effect.Effect<
    GetAccountSettingsOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getGroup(
    input: GetGroupInput,
  ): Effect.Effect<
    GetGroupOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getGroupConfiguration(
    input: GetGroupConfigurationInput,
  ): Effect.Effect<
    GetGroupConfigurationOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getGroupQuery(
    input: GetGroupQueryInput,
  ): Effect.Effect<
    GetGroupQueryOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTags(
    input: GetTagsInput,
  ): Effect.Effect<
    GetTagsOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTagSyncTask(
    input: GetTagSyncTaskInput,
  ): Effect.Effect<
    GetTagSyncTaskOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  groupResources(
    input: GroupResourcesInput,
  ): Effect.Effect<
    GroupResourcesOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listGroupingStatuses(
    input: ListGroupingStatusesInput,
  ): Effect.Effect<
    ListGroupingStatusesOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listGroupResources(
    input: ListGroupResourcesInput,
  ): Effect.Effect<
    ListGroupResourcesOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  listGroups(
    input: ListGroupsInput,
  ): Effect.Effect<
    ListGroupsOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagSyncTasks(
    input: ListTagSyncTasksInput,
  ): Effect.Effect<
    ListTagSyncTasksOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putGroupConfiguration(
    input: PutGroupConfigurationInput,
  ): Effect.Effect<
    PutGroupConfigurationOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  searchResources(
    input: SearchResourcesInput,
  ): Effect.Effect<
    SearchResourcesOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  startTagSyncTask(
    input: StartTagSyncTaskInput,
  ): Effect.Effect<
    StartTagSyncTaskOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  tag(
    input: TagInput,
  ): Effect.Effect<
    TagOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  ungroupResources(
    input: UngroupResourcesInput,
  ): Effect.Effect<
    UngroupResourcesOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untag(
    input: UntagInput,
  ): Effect.Effect<
    UntagOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsInput,
  ): Effect.Effect<
    UpdateAccountSettingsOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupInput,
  ): Effect.Effect<
    UpdateGroupOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateGroupQuery(
    input: UpdateGroupQueryInput,
  ): Effect.Effect<
    UpdateGroupQueryOutput,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type ResourceGroups = Ardi;

export interface AccountSettings {
  GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus;
  GroupLifecycleEventsStatus?: GroupLifecycleEventsStatus;
  GroupLifecycleEventsStatusMessage?: string;
}
export type ApplicationArn = string;

export type ApplicationTag = Record<string, string>;
export type ApplicationTagKey = string;

export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export interface CancelTagSyncTaskInput {
  TaskArn: string;
}
export interface CreateGroupInput {
  Name: string;
  Description?: string;
  ResourceQuery?: ResourceQuery;
  Tags?: Record<string, string>;
  Configuration?: Array<GroupConfigurationItem>;
  Criticality?: number;
  Owner?: string;
  DisplayName?: string;
}
export type CreateGroupName = string;

export interface CreateGroupOutput {
  Group?: Group;
  ResourceQuery?: ResourceQuery;
  Tags?: Record<string, string>;
  GroupConfiguration?: GroupConfiguration;
}
export type Criticality = number;

export interface DeleteGroupInput {
  GroupName?: string;
  Group?: string;
}
export interface DeleteGroupOutput {
  Group?: Group;
}
export type Description = string;

export type DisplayName = string;

export type ErrorCode = string;

export type ErrorMessage = string;

export interface FailedResource {
  ResourceArn?: string;
  ErrorMessage?: string;
  ErrorCode?: string;
}
export type FailedResourceList = Array<FailedResource>;
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly Message?: string;
}> {}
export interface GetAccountSettingsOutput {
  AccountSettings?: AccountSettings;
}
export interface GetGroupConfigurationInput {
  Group?: string;
}
export interface GetGroupConfigurationOutput {
  GroupConfiguration?: GroupConfiguration;
}
export interface GetGroupInput {
  GroupName?: string;
  Group?: string;
}
export interface GetGroupOutput {
  Group?: Group;
}
export interface GetGroupQueryInput {
  GroupName?: string;
  Group?: string;
}
export interface GetGroupQueryOutput {
  GroupQuery?: GroupQuery;
}
export interface GetTagsInput {
  Arn: string;
}
export interface GetTagsOutput {
  Arn?: string;
  Tags?: Record<string, string>;
}
export interface GetTagSyncTaskInput {
  TaskArn: string;
}
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
  CreatedAt?: Date | string;
}
export interface Group {
  GroupArn: string;
  Name: string;
  Description?: string;
  Criticality?: number;
  Owner?: string;
  DisplayName?: string;
  ApplicationTag?: Record<string, string>;
}
export type GroupArn = string;

export type GroupArnV2 = string;

export interface GroupConfiguration {
  Configuration?: Array<GroupConfigurationItem>;
  ProposedConfiguration?: Array<GroupConfigurationItem>;
  Status?: GroupConfigurationStatus;
  FailureReason?: string;
}
export type GroupConfigurationFailureReason = string;

export interface GroupConfigurationItem {
  Type: string;
  Parameters?: Array<GroupConfigurationParameter>;
}
export type GroupConfigurationList = Array<GroupConfigurationItem>;
export interface GroupConfigurationParameter {
  Name: string;
  Values?: Array<string>;
}
export type GroupConfigurationParameterName = string;

export type GroupConfigurationParameterValue = string;

export type GroupConfigurationParameterValueList = Array<string>;
export type GroupConfigurationStatus =
  | "UPDATING"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED";
export type GroupConfigurationType = string;

export interface GroupFilter {
  Name: GroupFilterName;
  Values: Array<string>;
}
export type GroupFilterList = Array<GroupFilter>;
export type GroupFilterName =
  | "ResourceType"
  | "ConfigurationType"
  | "Owner"
  | "DisplayName"
  | "Criticality";
export type GroupFilterValue = string;

export type GroupFilterValues = Array<string>;
export interface GroupIdentifier {
  GroupName?: string;
  GroupArn?: string;
  Description?: string;
  Criticality?: number;
  Owner?: string;
  DisplayName?: string;
}
export type GroupIdentifierList = Array<GroupIdentifier>;
export type GroupingStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS" | "SKIPPED";
export interface GroupingStatusesItem {
  ResourceArn?: string;
  Action?: GroupingType;
  Status?: GroupingStatus;
  ErrorMessage?: string;
  ErrorCode?: string;
  UpdatedAt?: Date | string;
}
export type GroupingStatusesList = Array<GroupingStatusesItem>;
export type GroupingType = "GROUP" | "UNGROUP";
export type GroupLifecycleEventsDesiredStatus = "ACTIVE" | "INACTIVE";
export type GroupLifecycleEventsStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "IN_PROGRESS"
  | "ERROR";
export type GroupLifecycleEventsStatusMessage = string;

export type GroupList = Array<Group>;
export type GroupName = string;

export type GroupParameterList = Array<GroupConfigurationParameter>;
export interface GroupQuery {
  GroupName: string;
  ResourceQuery: ResourceQuery;
}
export interface GroupResourcesInput {
  Group: string;
  ResourceArns: Array<string>;
}
export interface GroupResourcesOutput {
  Succeeded?: Array<string>;
  Failed?: Array<FailedResource>;
  Pending?: Array<PendingResource>;
}
export type GroupString = string;

export type GroupStringV2 = string;

export declare class InternalServerErrorException extends Data.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message?: string;
}> {}
export interface ListGroupingStatusesFilter {
  Name: ListGroupingStatusesFilterName;
  Values: Array<string>;
}
export type ListGroupingStatusesFilterList = Array<ListGroupingStatusesFilter>;
export type ListGroupingStatusesFilterName = "Status" | "ResourceArn";
export type ListGroupingStatusesFilterValue = string;

export type ListGroupingStatusesFilterValues = Array<string>;
export interface ListGroupingStatusesInput {
  Group: string;
  MaxResults?: number;
  Filters?: Array<ListGroupingStatusesFilter>;
  NextToken?: string;
}
export interface ListGroupingStatusesOutput {
  Group?: string;
  GroupingStatuses?: Array<GroupingStatusesItem>;
  NextToken?: string;
}
export interface ListGroupResourcesInput {
  GroupName?: string;
  Group?: string;
  Filters?: Array<ResourceFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGroupResourcesItem {
  Identifier?: ResourceIdentifier;
  Status?: ResourceStatus;
}
export type ListGroupResourcesItemList = Array<ListGroupResourcesItem>;
export interface ListGroupResourcesOutput {
  Resources?: Array<ListGroupResourcesItem>;
  ResourceIdentifiers?: Array<ResourceIdentifier>;
  NextToken?: string;
  QueryErrors?: Array<QueryError>;
}
export interface ListGroupsInput {
  Filters?: Array<GroupFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGroupsOutput {
  GroupIdentifiers?: Array<GroupIdentifier>;
  Groups?: Array<Group>;
  NextToken?: string;
}
export interface ListTagSyncTasksFilter {
  GroupArn?: string;
  GroupName?: string;
}
export type ListTagSyncTasksFilterList = Array<ListTagSyncTasksFilter>;
export interface ListTagSyncTasksInput {
  Filters?: Array<ListTagSyncTasksFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagSyncTasksOutput {
  TagSyncTasks?: Array<TagSyncTaskItem>;
  NextToken?: string;
}
export type MaxResults = number;

export declare class MethodNotAllowedException extends Data.TaggedError(
  "MethodNotAllowedException",
)<{
  readonly Message?: string;
}> {}
export type NextToken = string;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Owner = string;

export interface PendingResource {
  ResourceArn?: string;
}
export type PendingResourceList = Array<PendingResource>;
export interface PutGroupConfigurationInput {
  Group?: string;
  Configuration?: Array<GroupConfigurationItem>;
}
export interface PutGroupConfigurationOutput {}
export type Query = string;

export interface QueryError {
  ErrorCode?: QueryErrorCode;
  Message?: string;
}
export type QueryErrorCode =
  | "CLOUDFORMATION_STACK_INACTIVE"
  | "CLOUDFORMATION_STACK_NOT_EXISTING"
  | "CLOUDFORMATION_STACK_UNASSUMABLE_ROLE"
  | "RESOURCE_TYPE_NOT_SUPPORTED";
export type QueryErrorList = Array<QueryError>;
export type QueryErrorMessage = string;

export type QueryType = "TAG_FILTERS_1_0" | "CLOUDFORMATION_STACK_1_0";
export type ResourceArn = string;

export type ResourceArnList = Array<string>;
export interface ResourceFilter {
  Name: ResourceFilterName;
  Values: Array<string>;
}
export type ResourceFilterList = Array<ResourceFilter>;
export type ResourceFilterName = "ResourceType";
export type ResourceFilterValue = string;

export type ResourceFilterValues = Array<string>;
export interface ResourceIdentifier {
  ResourceArn?: string;
  ResourceType?: string;
}
export type ResourceIdentifierList = Array<ResourceIdentifier>;
export interface ResourceQuery {
  Type: QueryType;
  Query: string;
}
export interface ResourceStatus {
  Name?: ResourceStatusValue;
}
export type ResourceStatusValue = "Pending";
export type ResourceType = string;

export type RoleArn = string;

export interface SearchResourcesInput {
  ResourceQuery: ResourceQuery;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchResourcesOutput {
  ResourceIdentifiers?: Array<ResourceIdentifier>;
  NextToken?: string;
  QueryErrors?: Array<QueryError>;
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
  Tags: Record<string, string>;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagOutput {
  Arn?: string;
  Tags?: Record<string, string>;
}
export type Tags = Record<string, string>;
export type TagSyncTaskArn = string;

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
  CreatedAt?: Date | string;
}
export type TagSyncTaskList = Array<TagSyncTaskItem>;
export type TagSyncTaskStatus = "ACTIVE" | "ERROR";
export type TagValue = string;

export type timestamp = Date | string;

export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export declare class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<{
  readonly Message?: string;
}> {}
export interface UngroupResourcesInput {
  Group: string;
  ResourceArns: Array<string>;
}
export interface UngroupResourcesOutput {
  Succeeded?: Array<string>;
  Failed?: Array<FailedResource>;
  Pending?: Array<PendingResource>;
}
export interface UntagInput {
  Arn: string;
  Keys: Array<string>;
}
export interface UntagOutput {
  Arn?: string;
  Keys?: Array<string>;
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
export declare namespace CancelTagSyncTask {
  export type Input = CancelTagSyncTaskInput;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupInput;
  export type Output = CreateGroupOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupInput;
  export type Output = DeleteGroupOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAccountSettings {
  export type Input = {};
  export type Output = GetAccountSettingsOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetGroup {
  export type Input = GetGroupInput;
  export type Output = GetGroupOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetGroupConfiguration {
  export type Input = GetGroupConfigurationInput;
  export type Output = GetGroupConfigurationOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetGroupQuery {
  export type Input = GetGroupQueryInput;
  export type Output = GetGroupQueryOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTags {
  export type Input = GetTagsInput;
  export type Output = GetTagsOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTagSyncTask {
  export type Input = GetTagSyncTaskInput;
  export type Output = GetTagSyncTaskOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GroupResources {
  export type Input = GroupResourcesInput;
  export type Output = GroupResourcesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListGroupingStatuses {
  export type Input = ListGroupingStatusesInput;
  export type Output = ListGroupingStatusesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListGroupResources {
  export type Input = ListGroupResourcesInput;
  export type Output = ListGroupResourcesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsInput;
  export type Output = ListGroupsOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagSyncTasks {
  export type Input = ListTagSyncTasksInput;
  export type Output = ListTagSyncTasksOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutGroupConfiguration {
  export type Input = PutGroupConfigurationInput;
  export type Output = PutGroupConfigurationOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SearchResources {
  export type Input = SearchResourcesInput;
  export type Output = SearchResourcesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartTagSyncTask {
  export type Input = StartTagSyncTaskInput;
  export type Output = StartTagSyncTaskOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace Tag {
  export type Input = TagInput;
  export type Output = TagOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UngroupResources {
  export type Input = UngroupResourcesInput;
  export type Output = UngroupResourcesOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace Untag {
  export type Input = UntagInput;
  export type Output = UntagOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateAccountSettings {
  export type Input = UpdateAccountSettingsInput;
  export type Output = UpdateAccountSettingsOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupInput;
  export type Output = UpdateGroupOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateGroupQuery {
  export type Input = UpdateGroupQueryInput;
  export type Output = UpdateGroupQueryOutput;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
