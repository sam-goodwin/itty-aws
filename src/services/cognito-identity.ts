import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class CognitoIdentity extends AWSServiceClient {
  createIdentityPool(
    input: CreateIdentityPoolInput,
  ): Effect.Effect<
    IdentityPool,
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteIdentities(
    input: DeleteIdentitiesInput,
  ): Effect.Effect<
    DeleteIdentitiesResponse,
    | InternalErrorException
    | InvalidParameterException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteIdentityPool(
    input: DeleteIdentityPoolInput,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeIdentity(
    input: DescribeIdentityInput,
  ): Effect.Effect<
    IdentityDescription,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeIdentityPool(
    input: DescribeIdentityPoolInput,
  ): Effect.Effect<
    IdentityPool,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCredentialsForIdentity(
    input: GetCredentialsForIdentityInput,
  ): Effect.Effect<
    GetCredentialsForIdentityResponse,
    | ExternalServiceException
    | InternalErrorException
    | InvalidIdentityPoolConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getId(
    input: GetIdInput,
  ): Effect.Effect<
    GetIdResponse,
    | ExternalServiceException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getIdentityPoolRoles(
    input: GetIdentityPoolRolesInput,
  ): Effect.Effect<
    GetIdentityPoolRolesResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getOpenIdToken(
    input: GetOpenIdTokenInput,
  ): Effect.Effect<
    GetOpenIdTokenResponse,
    | ExternalServiceException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getOpenIdTokenForDeveloperIdentity(
    input: GetOpenIdTokenForDeveloperIdentityInput,
  ): Effect.Effect<
    GetOpenIdTokenForDeveloperIdentityResponse,
    | DeveloperUserAlreadyRegisteredException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getPrincipalTagAttributeMap(
    input: GetPrincipalTagAttributeMapInput,
  ): Effect.Effect<
    GetPrincipalTagAttributeMapResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listIdentities(
    input: ListIdentitiesInput,
  ): Effect.Effect<
    ListIdentitiesResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listIdentityPools(
    input: ListIdentityPoolsInput,
  ): Effect.Effect<
    ListIdentityPoolsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  lookupDeveloperIdentity(
    input: LookupDeveloperIdentityInput,
  ): Effect.Effect<
    LookupDeveloperIdentityResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  mergeDeveloperIdentities(
    input: MergeDeveloperIdentitiesInput,
  ): Effect.Effect<
    MergeDeveloperIdentitiesResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  setIdentityPoolRoles(
    input: SetIdentityPoolRolesInput,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  setPrincipalTagAttributeMap(
    input: SetPrincipalTagAttributeMapInput,
  ): Effect.Effect<
    SetPrincipalTagAttributeMapResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  unlinkDeveloperIdentity(
    input: UnlinkDeveloperIdentityInput,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  unlinkIdentity(
    input: UnlinkIdentityInput,
  ): Effect.Effect<
    {},
    | ExternalServiceException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateIdentityPool(
    input: IdentityPool,
  ): Effect.Effect<
    IdentityPool,
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type AccessKeyString = string;

export type AccountId = string;

export type AmbiguousRoleResolutionType = "AUTHENTICATED_ROLE" | "DENY";
export type ARNString = string;

export type ClaimName = string;

export type ClaimValue = string;

export type ClassicFlow = boolean;

export interface CognitoIdentityProvider {
  ProviderName?: string;
  ClientId?: string;
  ServerSideTokenCheck?: boolean;
}
export type CognitoIdentityProviderClientId = string;

export type CognitoIdentityProviderList = Array<CognitoIdentityProvider>;
export type CognitoIdentityProviderName = string;

export type CognitoIdentityProviderTokenCheck = boolean;

export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export interface CreateIdentityPoolInput {
  IdentityPoolName: string;
  AllowUnauthenticatedIdentities: boolean;
  AllowClassicFlow?: boolean;
  SupportedLoginProviders?: Record<string, string>;
  DeveloperProviderName?: string;
  OpenIdConnectProviderARNs?: Array<string>;
  CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
  SamlProviderARNs?: Array<string>;
  IdentityPoolTags?: Record<string, string>;
}
export interface Credentials {
  AccessKeyId?: string;
  SecretKey?: string;
  SessionToken?: string;
  Expiration?: Date | string;
}
export type DateType = Date | string;

export interface DeleteIdentitiesInput {
  IdentityIdsToDelete: Array<string>;
}
export interface DeleteIdentitiesResponse {
  UnprocessedIdentityIds?: Array<UnprocessedIdentityId>;
}
export interface DeleteIdentityPoolInput {
  IdentityPoolId: string;
}
export interface DescribeIdentityInput {
  IdentityId: string;
}
export interface DescribeIdentityPoolInput {
  IdentityPoolId: string;
}
export type DeveloperProviderName = string;

export declare class DeveloperUserAlreadyRegisteredException extends EffectData.TaggedError(
  "DeveloperUserAlreadyRegisteredException",
)<{
  readonly message?: string;
}> {}
export type DeveloperUserIdentifier = string;

export type DeveloperUserIdentifierList = Array<string>;
export type ErrorCode = "ACCESS_DENIED" | "INTERNAL_SERVER_ERROR";
export declare class ExternalServiceException extends EffectData.TaggedError(
  "ExternalServiceException",
)<{
  readonly message?: string;
}> {}
export interface GetCredentialsForIdentityInput {
  IdentityId: string;
  Logins?: Record<string, string>;
  CustomRoleArn?: string;
}
export interface GetCredentialsForIdentityResponse {
  IdentityId?: string;
  Credentials?: Credentials;
}
export interface GetIdentityPoolRolesInput {
  IdentityPoolId: string;
}
export interface GetIdentityPoolRolesResponse {
  IdentityPoolId?: string;
  Roles?: Record<string, string>;
  RoleMappings?: Record<string, RoleMapping>;
}
export interface GetIdInput {
  AccountId?: string;
  IdentityPoolId: string;
  Logins?: Record<string, string>;
}
export interface GetIdResponse {
  IdentityId?: string;
}
export interface GetOpenIdTokenForDeveloperIdentityInput {
  IdentityPoolId: string;
  IdentityId?: string;
  Logins: Record<string, string>;
  PrincipalTags?: Record<string, string>;
  TokenDuration?: number;
}
export interface GetOpenIdTokenForDeveloperIdentityResponse {
  IdentityId?: string;
  Token?: string;
}
export interface GetOpenIdTokenInput {
  IdentityId: string;
  Logins?: Record<string, string>;
}
export interface GetOpenIdTokenResponse {
  IdentityId?: string;
  Token?: string;
}
export interface GetPrincipalTagAttributeMapInput {
  IdentityPoolId: string;
  IdentityProviderName: string;
}
export interface GetPrincipalTagAttributeMapResponse {
  IdentityPoolId?: string;
  IdentityProviderName?: string;
  UseDefaults?: boolean;
  PrincipalTags?: Record<string, string>;
}
export type HideDisabled = boolean;

export type IdentitiesList = Array<IdentityDescription>;
export interface IdentityDescription {
  IdentityId?: string;
  Logins?: Array<string>;
  CreationDate?: Date | string;
  LastModifiedDate?: Date | string;
}
export type IdentityId = string;

export type IdentityIdList = Array<string>;
export interface IdentityPool {
  IdentityPoolId: string;
  IdentityPoolName: string;
  AllowUnauthenticatedIdentities: boolean;
  AllowClassicFlow?: boolean;
  SupportedLoginProviders?: Record<string, string>;
  DeveloperProviderName?: string;
  OpenIdConnectProviderARNs?: Array<string>;
  CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
  SamlProviderARNs?: Array<string>;
  IdentityPoolTags?: Record<string, string>;
}
export type IdentityPoolId = string;

export type IdentityPoolName = string;

export interface IdentityPoolShortDescription {
  IdentityPoolId?: string;
  IdentityPoolName?: string;
}
export type IdentityPoolsList = Array<IdentityPoolShortDescription>;
export type IdentityPoolTagsListType = Array<string>;
export type IdentityPoolTagsType = Record<string, string>;
export type IdentityPoolUnauthenticated = boolean;

export type IdentityProviderId = string;

export type IdentityProviderName = string;

export type IdentityProviders = Record<string, string>;
export type IdentityProviderToken = string;

export declare class InternalErrorException extends EffectData.TaggedError(
  "InternalErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidIdentityPoolConfigurationException extends EffectData.TaggedError(
  "InvalidIdentityPoolConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListIdentitiesInput {
  IdentityPoolId: string;
  MaxResults: number;
  NextToken?: string;
  HideDisabled?: boolean;
}
export interface ListIdentitiesResponse {
  IdentityPoolId?: string;
  Identities?: Array<IdentityDescription>;
  NextToken?: string;
}
export interface ListIdentityPoolsInput {
  MaxResults: number;
  NextToken?: string;
}
export interface ListIdentityPoolsResponse {
  IdentityPools?: Array<IdentityPoolShortDescription>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type LoginsList = Array<string>;
export type LoginsMap = Record<string, string>;
export interface LookupDeveloperIdentityInput {
  IdentityPoolId: string;
  IdentityId?: string;
  DeveloperUserIdentifier?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface LookupDeveloperIdentityResponse {
  IdentityId?: string;
  DeveloperUserIdentifierList?: Array<string>;
  NextToken?: string;
}
export interface MappingRule {
  Claim: string;
  MatchType: MappingRuleMatchType;
  Value: string;
  RoleARN: string;
}
export type MappingRuleMatchType =
  | "EQUALS"
  | "CONTAINS"
  | "STARTS_WITH"
  | "NOT_EQUAL";
export type MappingRulesList = Array<MappingRule>;
export interface MergeDeveloperIdentitiesInput {
  SourceUserIdentifier: string;
  DestinationUserIdentifier: string;
  DeveloperProviderName: string;
  IdentityPoolId: string;
}
export interface MergeDeveloperIdentitiesResponse {
  IdentityId?: string;
}
export declare class NotAuthorizedException extends EffectData.TaggedError(
  "NotAuthorizedException",
)<{
  readonly message?: string;
}> {}
export type OIDCProviderList = Array<string>;
export type OIDCToken = string;

export type PaginationKey = string;

export type PrincipalTagID = string;

export type PrincipalTags = Record<string, string>;
export type PrincipalTagValue = string;

export type QueryLimit = number;

export declare class ResourceConflictException extends EffectData.TaggedError(
  "ResourceConflictException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RoleMapping {
  Type: RoleMappingType;
  AmbiguousRoleResolution?: AmbiguousRoleResolutionType;
  RulesConfiguration?: RulesConfigurationType;
}
export type RoleMappingMap = Record<string, RoleMapping>;
export type RoleMappingType = "TOKEN" | "RULES";
export type RolesMap = Record<string, string>;
export type RoleType = string;

export interface RulesConfigurationType {
  Rules: Array<MappingRule>;
}
export type SAMLProviderList = Array<string>;
export type SecretKeyString = string;

export type SessionTokenString = string;

export interface SetIdentityPoolRolesInput {
  IdentityPoolId: string;
  Roles: Record<string, string>;
  RoleMappings?: Record<string, RoleMapping>;
}
export interface SetPrincipalTagAttributeMapInput {
  IdentityPoolId: string;
  IdentityProviderName: string;
  UseDefaults?: boolean;
  PrincipalTags?: Record<string, string>;
}
export interface SetPrincipalTagAttributeMapResponse {
  IdentityPoolId?: string;
  IdentityProviderName?: string;
  UseDefaults?: boolean;
  PrincipalTags?: Record<string, string>;
}
export type CognitoIdentityString = string;

export type TagKeysType = string;

export interface TagResourceInput {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValueType = string;

export type TokenDuration = number;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export interface UnlinkDeveloperIdentityInput {
  IdentityId: string;
  IdentityPoolId: string;
  DeveloperProviderName: string;
  DeveloperUserIdentifier: string;
}
export interface UnlinkIdentityInput {
  IdentityId: string;
  Logins: Record<string, string>;
  LoginsToRemove: Array<string>;
}
export interface UnprocessedIdentityId {
  IdentityId?: string;
  ErrorCode?: ErrorCode;
}
export type UnprocessedIdentityIdList = Array<UnprocessedIdentityId>;
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UseDefaults = boolean;

export declare namespace CreateIdentityPool {
  export type Input = CreateIdentityPoolInput;
  export type Output = IdentityPool;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteIdentities {
  export type Input = DeleteIdentitiesInput;
  export type Output = DeleteIdentitiesResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteIdentityPool {
  export type Input = DeleteIdentityPoolInput;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeIdentity {
  export type Input = DescribeIdentityInput;
  export type Output = IdentityDescription;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeIdentityPool {
  export type Input = DescribeIdentityPoolInput;
  export type Output = IdentityPool;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCredentialsForIdentity {
  export type Input = GetCredentialsForIdentityInput;
  export type Output = GetCredentialsForIdentityResponse;
  export type Error =
    | ExternalServiceException
    | InternalErrorException
    | InvalidIdentityPoolConfigurationException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetId {
  export type Input = GetIdInput;
  export type Output = GetIdResponse;
  export type Error =
    | ExternalServiceException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetIdentityPoolRoles {
  export type Input = GetIdentityPoolRolesInput;
  export type Output = GetIdentityPoolRolesResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetOpenIdToken {
  export type Input = GetOpenIdTokenInput;
  export type Output = GetOpenIdTokenResponse;
  export type Error =
    | ExternalServiceException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetOpenIdTokenForDeveloperIdentity {
  export type Input = GetOpenIdTokenForDeveloperIdentityInput;
  export type Output = GetOpenIdTokenForDeveloperIdentityResponse;
  export type Error =
    | DeveloperUserAlreadyRegisteredException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetPrincipalTagAttributeMap {
  export type Input = GetPrincipalTagAttributeMapInput;
  export type Output = GetPrincipalTagAttributeMapResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListIdentities {
  export type Input = ListIdentitiesInput;
  export type Output = ListIdentitiesResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListIdentityPools {
  export type Input = ListIdentityPoolsInput;
  export type Output = ListIdentityPoolsResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace LookupDeveloperIdentity {
  export type Input = LookupDeveloperIdentityInput;
  export type Output = LookupDeveloperIdentityResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace MergeDeveloperIdentities {
  export type Input = MergeDeveloperIdentitiesInput;
  export type Output = MergeDeveloperIdentitiesResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SetIdentityPoolRoles {
  export type Input = SetIdentityPoolRolesInput;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SetPrincipalTagAttributeMap {
  export type Input = SetPrincipalTagAttributeMapInput;
  export type Output = SetPrincipalTagAttributeMapResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UnlinkDeveloperIdentity {
  export type Input = UnlinkDeveloperIdentityInput;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UnlinkIdentity {
  export type Input = UnlinkIdentityInput;
  export type Output = {};
  export type Error =
    | ExternalServiceException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateIdentityPool {
  export type Input = IdentityPool;
  export type Output = IdentityPool;
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceConflictException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
