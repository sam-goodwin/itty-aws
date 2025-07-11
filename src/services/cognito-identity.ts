import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSCognitoIdentityService {
  createIdentityPool(
    input: CreateIdentityPoolInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceConflictException | TooManyRequestsException | CommonAwsError
  >;
  deleteIdentities(
    input: DeleteIdentitiesInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | TooManyRequestsException | CommonAwsError
  >;
  deleteIdentityPool(
    input: DeleteIdentityPoolInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeIdentity(
    input: DescribeIdentityInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeIdentityPool(
    input: DescribeIdentityPoolInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getCredentialsForIdentity(
    input: GetCredentialsForIdentityInput,
  ): Effect.Effect<
    {},
    ExternalServiceException | InternalErrorException | InvalidIdentityPoolConfigurationException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getId(
    input: GetIdInput,
  ): Effect.Effect<
    {},
    ExternalServiceException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getIdentityPoolRoles(
    input: GetIdentityPoolRolesInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getOpenIdToken(
    input: GetOpenIdTokenInput,
  ): Effect.Effect<
    {},
    ExternalServiceException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getOpenIdTokenForDeveloperIdentity(
    input: GetOpenIdTokenForDeveloperIdentityInput,
  ): Effect.Effect<
    {},
    DeveloperUserAlreadyRegisteredException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getPrincipalTagAttributeMap(
    input: GetPrincipalTagAttributeMapInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listIdentities(
    input: ListIdentitiesInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listIdentityPools(
    input: ListIdentityPoolsInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  lookupDeveloperIdentity(
    input: LookupDeveloperIdentityInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  mergeDeveloperIdentities(
    input: MergeDeveloperIdentitiesInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  setIdentityPoolRoles(
    input: SetIdentityPoolRolesInput,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  setPrincipalTagAttributeMap(
    input: SetPrincipalTagAttributeMapInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  unlinkDeveloperIdentity(
    input: UnlinkDeveloperIdentityInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  unlinkIdentity(
    input: UnlinkIdentityInput,
  ): Effect.Effect<
    {},
    ExternalServiceException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateIdentityPool(
    input: IdentityPool,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceConflictException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
}

export type CognitoIdentity = AWSCognitoIdentityService;

export type AccessKeyString = string;

export type AccountId = string;

export type AmbiguousRoleResolutionType = never;
export type ARNString = string;

export type ClaimName = string;

export type ClaimValue = string;

export type ClassicFlow = boolean;

export interface CognitoIdentityProvider {
}
export type CognitoIdentityProviderClientId = string;

export type CognitoIdentityProviderList = Array<unknown>;
export type CognitoIdentityProviderName = string;

export type CognitoIdentityProviderTokenCheck = boolean;

export interface ConcurrentModificationException {
}
export interface CreateIdentityPoolInput {
}
export interface Credentials {
}
export type DateType = Date | string;

export interface DeleteIdentitiesInput {
}
export interface DeleteIdentitiesResponse {
}
export interface DeleteIdentityPoolInput {
}
export interface DescribeIdentityInput {
}
export interface DescribeIdentityPoolInput {
}
export type DeveloperProviderName = string;

export interface DeveloperUserAlreadyRegisteredException {
}
export type DeveloperUserIdentifier = string;

export type DeveloperUserIdentifierList = Array<unknown>;
export type ErrorCode = never;
export interface ExternalServiceException {
}
export interface GetCredentialsForIdentityInput {
}
export interface GetCredentialsForIdentityResponse {
}
export interface GetIdentityPoolRolesInput {
}
export interface GetIdentityPoolRolesResponse {
}
export interface GetIdInput {
}
export interface GetIdResponse {
}
export interface GetOpenIdTokenForDeveloperIdentityInput {
}
export interface GetOpenIdTokenForDeveloperIdentityResponse {
}
export interface GetOpenIdTokenInput {
}
export interface GetOpenIdTokenResponse {
}
export interface GetPrincipalTagAttributeMapInput {
}
export interface GetPrincipalTagAttributeMapResponse {
}
export type HideDisabled = boolean;

export type IdentitiesList = Array<unknown>;
export interface IdentityDescription {
}
export type IdentityId = string;

export type IdentityIdList = Array<unknown>;
export interface IdentityPool {
}
export type IdentityPoolId = string;

export type IdentityPoolName = string;

export interface IdentityPoolShortDescription {
}
export type IdentityPoolsList = Array<unknown>;
export type IdentityPoolTagsListType = Array<unknown>;
export type IdentityPoolTagsType = Record<string, unknown>;
export type IdentityPoolUnauthenticated = boolean;

export type IdentityProviderId = string;

export type IdentityProviderName = string;

export type IdentityProviders = Record<string, unknown>;
export type IdentityProviderToken = string;

export interface InternalErrorException {
}
export interface InvalidIdentityPoolConfigurationException {
}
export interface InvalidParameterException {
}
export interface LimitExceededException {
}
export interface ListIdentitiesInput {
}
export interface ListIdentitiesResponse {
}
export interface ListIdentityPoolsInput {
}
export interface ListIdentityPoolsResponse {
}
export interface ListTagsForResourceInput {
}
export interface ListTagsForResourceResponse {
}
export type LoginsList = Array<unknown>;
export type LoginsMap = Record<string, unknown>;
export interface LookupDeveloperIdentityInput {
}
export interface LookupDeveloperIdentityResponse {
}
export interface MappingRule {
}
export type MappingRuleMatchType = never;
export type MappingRulesList = Array<unknown>;
export interface MergeDeveloperIdentitiesInput {
}
export interface MergeDeveloperIdentitiesResponse {
}
export interface NotAuthorizedException {
}
export type OIDCProviderList = Array<unknown>;
export type OIDCToken = string;

export type PaginationKey = string;

export type PrincipalTagID = string;

export type PrincipalTags = Record<string, unknown>;
export type PrincipalTagValue = string;

export type QueryLimit = number;

export interface ResourceConflictException {
}
export interface ResourceNotFoundException {
}
export interface RoleMapping {
}
export type RoleMappingMap = Record<string, unknown>;
export type RoleMappingType = never;
export type RolesMap = Record<string, unknown>;
export type RoleType = string;

export interface RulesConfigurationType {
}
export type SAMLProviderList = Array<unknown>;
export type SecretKeyString = string;

export type SessionTokenString = string;

export interface SetIdentityPoolRolesInput {
}
export interface SetPrincipalTagAttributeMapInput {
}
export interface SetPrincipalTagAttributeMapResponse {
}
export type TagKeysType = string;

export interface TagResourceInput {
}
export interface TagResourceResponse {
}
export type TagValueType = string;

export type TokenDuration = number;

export interface TooManyRequestsException {
}
export interface UnlinkDeveloperIdentityInput {
}
export interface UnlinkIdentityInput {
}
export interface UnprocessedIdentityId {
}
export type UnprocessedIdentityIdList = Array<unknown>;
export interface UntagResourceInput {
}
export interface UntagResourceResponse {
}
export type UseDefaults = boolean;

export declare namespace CreateIdentityPool {
  export type Input = CreateIdentityPoolInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

export declare namespace GetOpenIdToken {
  export type Input = GetOpenIdTokenInput;
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

export declare namespace GetOpenIdTokenForDeveloperIdentity {
  export type Input = GetOpenIdTokenForDeveloperIdentityInput;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

export declare namespace MergeDeveloperIdentities {
  export type Input = MergeDeveloperIdentitiesInput;
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

