import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSIdentityStore {
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
  listGroupMembershipsForMember(
    input: ListGroupMembershipsForMemberRequest,
  ): Effect.Effect<
    ListGroupMembershipsForMemberResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Identitystore = AWSIdentityStore;

export declare class AccessDeniedException extends EffectData.TaggedError(
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
interface _AlternateIdentifier {
  ExternalId?: ExternalId;
  UniqueAttribute?: UniqueAttribute;
}

export type AlternateIdentifier =
  | (_AlternateIdentifier & { ExternalId: ExternalId })
  | (_AlternateIdentifier & { UniqueAttribute: UniqueAttribute });
export interface AttributeOperation {
  AttributePath: string;
  AttributeValue?: unknown;
}
export type AttributeOperations = Array<AttributeOperation>;
export type AttributePath = string;

export type AttributeValue = unknown;

export declare class ConflictException extends EffectData.TaggedError(
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
export interface DeleteGroupMembershipResponse {}
export interface DeleteGroupRequest {
  IdentityStoreId: string;
  GroupId: string;
}
export interface DeleteGroupResponse {}
export interface DeleteUserRequest {
  IdentityStoreId: string;
  UserId: string;
}
export interface DeleteUserResponse {}
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
export type GroupMembershipExistenceResults =
  Array<GroupMembershipExistenceResult>;
export type GroupMemberships = Array<GroupMembership>;
export type Groups = Array<Group>;
export type IdentityStoreId = string;

export declare class InternalServerException extends EffectData.TaggedError(
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

interface _MemberId {
  UserId?: string;
}

export type MemberId = _MemberId & { UserId: string };
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

export declare class ResourceNotFoundException extends EffectData.TaggedError(
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

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
  readonly RetryAfterSeconds?: number;
}> {}
export interface UniqueAttribute {
  AttributePath: string;
  AttributeValue: unknown;
}
export interface UpdateGroupRequest {
  IdentityStoreId: string;
  GroupId: string;
  Operations: Array<AttributeOperation>;
}
export interface UpdateGroupResponse {}
export interface UpdateUserRequest {
  IdentityStoreId: string;
  UserId: string;
  Operations: Array<AttributeOperation>;
}
export interface UpdateUserResponse {}
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
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
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

export declare namespace ListGroupMembershipsForMember {
  export type Input = ListGroupMembershipsForMemberRequest;
  export type Output = ListGroupMembershipsForMemberResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
