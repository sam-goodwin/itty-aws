import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSIdentityStore {
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResponse,
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createGroupMembership(
    input: CreateGroupMembershipRequest,
  ): Effect.Effect<
    CreateGroupMembershipResponse,
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    DeleteGroupResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteGroupMembership(
    input: DeleteGroupMembershipRequest,
  ): Effect.Effect<
    DeleteGroupMembershipResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResponse,
    ConflictException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeGroup(
    input: DescribeGroupRequest,
  ): Effect.Effect<
    DescribeGroupResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeGroupMembership(
    input: DescribeGroupMembershipRequest,
  ): Effect.Effect<
    DescribeGroupMembershipResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    DescribeUserResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getGroupId(
    input: GetGroupIdRequest,
  ): Effect.Effect<
    GetGroupIdResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getGroupMembershipId(
    input: GetGroupMembershipIdRequest,
  ): Effect.Effect<
    GetGroupMembershipIdResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getUserId(
    input: GetUserIdRequest,
  ): Effect.Effect<
    GetUserIdResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  isMemberInGroups(
    input: IsMemberInGroupsRequest,
  ): Effect.Effect<
    IsMemberInGroupsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listGroupMemberships(
    input: ListGroupMembershipsRequest,
  ): Effect.Effect<
    ListGroupMembershipsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listGroupMembershipsForMember(
    input: ListGroupMembershipsForMemberRequest,
  ): Effect.Effect<
    ListGroupMembershipsForMemberResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    UpdateGroupResponse,
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    ConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
}

export type Identitystore = AWSIdentityStore;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface Address {
  StreetAddress?: string;
  Locality?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Formatted?: string;
  Type?: string;
  Primary?: boolean;
}
export type Addresses = Array<Address>;
export type AlternateIdentifier = { ExternalId: ExternalId } | { UniqueAttribute: UniqueAttribute };
export interface AttributeOperation {
  AttributePath: string;
  AttributeValue?: AttributeValue;
}
export type AttributeOperations = Array<AttributeOperation>;
export type AttributePath = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
  readonly Reason?: string;
}> {}
export type ConflictExceptionReason = string;

export interface CreateGroupMembershipRequest {
  IdentityStoreId: string;
  GroupId: string;
  MemberId: MemberId;
}
export interface CreateGroupMembershipResponse {
  MembershipId: string;
  IdentityStoreId: string;
}
export interface CreateGroupRequest {
  IdentityStoreId: string;
  DisplayName?: string;
  Description?: string;
}
export interface CreateGroupResponse {
  GroupId: string;
  IdentityStoreId: string;
}
export interface CreateUserRequest {
  IdentityStoreId: string;
  UserName?: string;
  Name?: Name;
  DisplayName?: string;
  NickName?: string;
  ProfileUrl?: string;
  Emails?: Array<Email>;
  Addresses?: Array<Address>;
  PhoneNumbers?: Array<PhoneNumber>;
  UserType?: string;
  Title?: string;
  PreferredLanguage?: string;
  Locale?: string;
  Timezone?: string;
}
export interface CreateUserResponse {
  UserId: string;
  IdentityStoreId: string;
}
export interface DeleteGroupMembershipRequest {
  IdentityStoreId: string;
  MembershipId: string;
}
export interface DeleteGroupMembershipResponse {
}
export interface DeleteGroupRequest {
  IdentityStoreId: string;
  GroupId: string;
}
export interface DeleteGroupResponse {
}
export interface DeleteUserRequest {
  IdentityStoreId: string;
  UserId: string;
}
export interface DeleteUserResponse {
}
export interface DescribeGroupMembershipRequest {
  IdentityStoreId: string;
  MembershipId: string;
}
export interface DescribeGroupMembershipResponse {
  IdentityStoreId: string;
  MembershipId: string;
  GroupId: string;
  MemberId: MemberId;
}
export interface DescribeGroupRequest {
  IdentityStoreId: string;
  GroupId: string;
}
export interface DescribeGroupResponse {
  GroupId: string;
  DisplayName?: string;
  ExternalIds?: Array<ExternalId>;
  Description?: string;
  IdentityStoreId: string;
}
export interface DescribeUserRequest {
  IdentityStoreId: string;
  UserId: string;
}
export interface DescribeUserResponse {
  UserName?: string;
  UserId: string;
  ExternalIds?: Array<ExternalId>;
  Name?: Name;
  DisplayName?: string;
  NickName?: string;
  ProfileUrl?: string;
  Emails?: Array<Email>;
  Addresses?: Array<Address>;
  PhoneNumbers?: Array<PhoneNumber>;
  UserType?: string;
  Title?: string;
  PreferredLanguage?: string;
  Locale?: string;
  Timezone?: string;
  IdentityStoreId: string;
}
export interface Email {
  Value?: string;
  Type?: string;
  Primary?: boolean;
}
export type Emails = Array<Email>;
export type ExceptionMessage = string;

export interface ExternalId {
  Issuer: string;
  Id: string;
}
export type ExternalIdIdentifier = string;

export type ExternalIdIssuer = string;

export type ExternalIds = Array<ExternalId>;
export interface Filter {
  AttributePath: string;
  AttributeValue: string;
}
export type Filters = Array<Filter>;
export interface GetGroupIdRequest {
  IdentityStoreId: string;
  AlternateIdentifier: AlternateIdentifier;
}
export interface GetGroupIdResponse {
  GroupId: string;
  IdentityStoreId: string;
}
export interface GetGroupMembershipIdRequest {
  IdentityStoreId: string;
  GroupId: string;
  MemberId: MemberId;
}
export interface GetGroupMembershipIdResponse {
  MembershipId: string;
  IdentityStoreId: string;
}
export interface GetUserIdRequest {
  IdentityStoreId: string;
  AlternateIdentifier: AlternateIdentifier;
}
export interface GetUserIdResponse {
  UserId: string;
  IdentityStoreId: string;
}
export interface Group {
  GroupId: string;
  DisplayName?: string;
  ExternalIds?: Array<ExternalId>;
  Description?: string;
  IdentityStoreId: string;
}
export type GroupDisplayName = string;

export type GroupIds = Array<string>;
export interface GroupMembership {
  IdentityStoreId: string;
  MembershipId?: string;
  GroupId?: string;
  MemberId?: MemberId;
}
export interface GroupMembershipExistenceResult {
  GroupId?: string;
  MemberId?: MemberId;
  MembershipExists?: boolean;
}
export type GroupMembershipExistenceResults = Array<GroupMembershipExistenceResult>;
export type GroupMemberships = Array<GroupMembership>;
export type Groups = Array<Group>;
export type IdentityStoreId = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface IsMemberInGroupsRequest {
  IdentityStoreId: string;
  MemberId: MemberId;
  GroupIds: Array<string>;
}
export interface IsMemberInGroupsResponse {
  Results: Array<GroupMembershipExistenceResult>;
}
export interface ListGroupMembershipsForMemberRequest {
  IdentityStoreId: string;
  MemberId: MemberId;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGroupMembershipsForMemberResponse {
  GroupMemberships: Array<GroupMembership>;
  NextToken?: string;
}
export interface ListGroupMembershipsRequest {
  IdentityStoreId: string;
  GroupId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGroupMembershipsResponse {
  GroupMemberships: Array<GroupMembership>;
  NextToken?: string;
}
export interface ListGroupsRequest {
  IdentityStoreId: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListGroupsResponse {
  Groups: Array<Group>;
  NextToken?: string;
}
export interface ListUsersRequest {
  IdentityStoreId: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListUsersResponse {
  Users: Array<User>;
  NextToken?: string;
}
export type MaxResults = number;

export type MemberId = { UserId: string };
export interface Name {
  Formatted?: string;
  FamilyName?: string;
  GivenName?: string;
  MiddleName?: string;
  HonorificPrefix?: string;
  HonorificSuffix?: string;
}
export type NextToken = string;

export interface PhoneNumber {
  Value?: string;
  Type?: string;
  Primary?: boolean;
}
export type PhoneNumbers = Array<PhoneNumber>;
export type RequestId = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly ResourceType?: string;
  readonly ResourceId?: string;
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type ResourceType = string;

export type RetryAfterSeconds = number;

export type SensitiveBooleanType = boolean;

export type SensitiveStringType = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface UniqueAttribute {
  AttributePath: string;
  AttributeValue: AttributeValue;
}
export interface UpdateGroupRequest {
  IdentityStoreId: string;
  GroupId: string;
  Operations: Array<AttributeOperation>;
}
export interface UpdateGroupResponse {
}
export interface UpdateUserRequest {
  IdentityStoreId: string;
  UserId: string;
  Operations: Array<AttributeOperation>;
}
export interface UpdateUserResponse {
}
export interface User {
  UserName?: string;
  UserId: string;
  ExternalIds?: Array<ExternalId>;
  Name?: Name;
  DisplayName?: string;
  NickName?: string;
  ProfileUrl?: string;
  Emails?: Array<Email>;
  Addresses?: Array<Address>;
  PhoneNumbers?: Array<PhoneNumber>;
  UserType?: string;
  Title?: string;
  PreferredLanguage?: string;
  Locale?: string;
  Timezone?: string;
  IdentityStoreId: string;
}
export type UserName = string;

export type Users = Array<User>;
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = CreateGroupResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGroupMembership {
  export type Input = CreateGroupMembershipRequest;
  export type Output = CreateGroupMembershipResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = DeleteGroupResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGroupMembership {
  export type Input = DeleteGroupMembershipRequest;
  export type Output = DeleteGroupMembershipResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeGroup {
  export type Input = DescribeGroupRequest;
  export type Output = DescribeGroupResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeGroupMembership {
  export type Input = DescribeGroupMembershipRequest;
  export type Output = DescribeGroupMembershipResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeUser {
  export type Input = DescribeUserRequest;
  export type Output = DescribeUserResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGroupId {
  export type Input = GetGroupIdRequest;
  export type Output = GetGroupIdResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGroupMembershipId {
  export type Input = GetGroupMembershipIdRequest;
  export type Output = GetGroupMembershipIdResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUserId {
  export type Input = GetUserIdRequest;
  export type Output = GetUserIdResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace IsMemberInGroups {
  export type Input = IsMemberInGroupsRequest;
  export type Output = IsMemberInGroupsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroupMemberships {
  export type Input = ListGroupMembershipsRequest;
  export type Output = ListGroupMembershipsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroupMembershipsForMember {
  export type Input = ListGroupMembershipsForMemberRequest;
  export type Output = ListGroupMembershipsForMemberResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = ListGroupsResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = UpdateGroupResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

