import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmplifyBackend {
  cloneBackend(
    input: CloneBackendRequest,
  ): Effect.Effect<
    CloneBackendResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createBackend(
    input: CreateBackendRequest,
  ): Effect.Effect<
    CreateBackendResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createBackendAPI(
    input: CreateBackendAPIRequest,
  ): Effect.Effect<
    CreateBackendAPIResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createBackendAuth(
    input: CreateBackendAuthRequest,
  ): Effect.Effect<
    CreateBackendAuthResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createBackendConfig(
    input: CreateBackendConfigRequest,
  ): Effect.Effect<
    CreateBackendConfigResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createBackendStorage(
    input: CreateBackendStorageRequest,
  ): Effect.Effect<
    CreateBackendStorageResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createToken(
    input: CreateTokenRequest,
  ): Effect.Effect<
    CreateTokenResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteBackend(
    input: DeleteBackendRequest,
  ): Effect.Effect<
    DeleteBackendResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteBackendAPI(
    input: DeleteBackendAPIRequest,
  ): Effect.Effect<
    DeleteBackendAPIResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteBackendAuth(
    input: DeleteBackendAuthRequest,
  ): Effect.Effect<
    DeleteBackendAuthResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteBackendStorage(
    input: DeleteBackendStorageRequest,
  ): Effect.Effect<
    DeleteBackendStorageResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteToken(
    input: DeleteTokenRequest,
  ): Effect.Effect<
    DeleteTokenResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  generateBackendAPIModels(
    input: GenerateBackendAPIModelsRequest,
  ): Effect.Effect<
    GenerateBackendAPIModelsResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getBackend(
    input: GetBackendRequest,
  ): Effect.Effect<
    GetBackendResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getBackendAPI(
    input: GetBackendAPIRequest,
  ): Effect.Effect<
    GetBackendAPIResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getBackendAPIModels(
    input: GetBackendAPIModelsRequest,
  ): Effect.Effect<
    GetBackendAPIModelsResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getBackendAuth(
    input: GetBackendAuthRequest,
  ): Effect.Effect<
    GetBackendAuthResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getBackendJob(
    input: GetBackendJobRequest,
  ): Effect.Effect<
    GetBackendJobResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getBackendStorage(
    input: GetBackendStorageRequest,
  ): Effect.Effect<
    GetBackendStorageResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getToken(
    input: GetTokenRequest,
  ): Effect.Effect<
    GetTokenResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  importBackendAuth(
    input: ImportBackendAuthRequest,
  ): Effect.Effect<
    ImportBackendAuthResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  importBackendStorage(
    input: ImportBackendStorageRequest,
  ): Effect.Effect<
    ImportBackendStorageResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listBackendJobs(
    input: ListBackendJobsRequest,
  ): Effect.Effect<
    ListBackendJobsResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listS3Buckets(
    input: ListS3BucketsRequest,
  ): Effect.Effect<
    ListS3BucketsResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  removeAllBackends(
    input: RemoveAllBackendsRequest,
  ): Effect.Effect<
    RemoveAllBackendsResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  removeBackendConfig(
    input: RemoveBackendConfigRequest,
  ): Effect.Effect<
    RemoveBackendConfigResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateBackendAPI(
    input: UpdateBackendAPIRequest,
  ): Effect.Effect<
    UpdateBackendAPIResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateBackendAuth(
    input: UpdateBackendAuthRequest,
  ): Effect.Effect<
    UpdateBackendAuthResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateBackendConfig(
    input: UpdateBackendConfigRequest,
  ): Effect.Effect<
    UpdateBackendConfigResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateBackendJob(
    input: UpdateBackendJobRequest,
  ): Effect.Effect<
    UpdateBackendJobResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateBackendStorage(
    input: UpdateBackendStorageRequest,
  ): Effect.Effect<
    UpdateBackendStorageResponse,
    BadRequestException | GatewayTimeoutException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
}

export type Amplifybackend = AmplifyBackend;

export type __boolean = boolean;

export type __double = number;

export type __integerMin1Max25 = number;

export type __string = string;

export type AdditionalConstraintsElement = "REQUIRE_DIGIT" | "REQUIRE_LOWERCASE" | "REQUIRE_SYMBOL" | "REQUIRE_UPPERCASE";
export type AuthenticatedElement = "READ" | "CREATE_AND_UPDATE" | "DELETE";
export type AuthResources = "USER_POOL_ONLY" | "IDENTITY_POOL_AND_USER_POOL";
export interface BackendAPIAppSyncAuthSettings {
  CognitoUserPoolId?: string;
  Description?: string;
  ExpirationTime?: number;
  OpenIDAuthTTL?: string;
  OpenIDClientId?: string;
  OpenIDIatTTL?: string;
  OpenIDIssueURL?: string;
  OpenIDProviderName?: string;
}
export interface BackendAPIAuthType {
  Mode?: Mode;
  Settings?: BackendAPIAppSyncAuthSettings;
}
export interface BackendAPIConflictResolution {
  ResolutionStrategy?: ResolutionStrategy;
}
export interface BackendAPIResourceConfig {
  AdditionalAuthTypes?: Array<BackendAPIAuthType>;
  ApiName?: string;
  ConflictResolution?: BackendAPIConflictResolution;
  DefaultAuthType?: BackendAPIAuthType;
  Service?: string;
  TransformSchema?: string;
}
export interface BackendAuthAppleProviderConfig {
  ClientId?: string;
  KeyId?: string;
  PrivateKey?: string;
  TeamId?: string;
}
export interface BackendAuthSocialProviderConfig {
  ClientId?: string;
  ClientSecret?: string;
}
export interface BackendJobRespObj {
  AppId: string;
  BackendEnvironmentName: string;
  CreateTime?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
  UpdateTime?: string;
}
export interface BackendStoragePermissions {
  Authenticated: Array<AuthenticatedElement>;
  UnAuthenticated?: Array<UnAuthenticatedElement>;
}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export interface CloneBackendRequest {
  AppId: string;
  BackendEnvironmentName: string;
  TargetEnvironmentName: string;
}
export interface CloneBackendResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface CreateBackendAPIRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig: BackendAPIResourceConfig;
  ResourceName: string;
}
export interface CreateBackendAPIResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface CreateBackendAuthForgotPasswordConfig {
  DeliveryMethod: DeliveryMethod;
  EmailSettings?: EmailSettings;
  SmsSettings?: SmsSettings;
}
export interface CreateBackendAuthIdentityPoolConfig {
  IdentityPoolName: string;
  UnauthenticatedLogin: boolean;
}
export interface CreateBackendAuthMFAConfig {
  MFAMode: MFAMode;
  Settings?: Settings;
}
export interface CreateBackendAuthOAuthConfig {
  DomainPrefix?: string;
  OAuthGrantType: OAuthGrantType;
  OAuthScopes: Array<OAuthScopesElement>;
  RedirectSignInURIs: Array<string>;
  RedirectSignOutURIs: Array<string>;
  SocialProviderSettings?: SocialProviderSettings;
}
export interface CreateBackendAuthPasswordPolicyConfig {
  AdditionalConstraints?: Array<AdditionalConstraintsElement>;
  MinimumLength: number;
}
export interface CreateBackendAuthRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig: CreateBackendAuthResourceConfig;
  ResourceName: string;
}
export interface CreateBackendAuthResourceConfig {
  AuthResources: AuthResources;
  IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;
  Service: Service;
  UserPoolConfigs: CreateBackendAuthUserPoolConfig;
}
export interface CreateBackendAuthResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface CreateBackendAuthUserPoolConfig {
  ForgotPassword?: CreateBackendAuthForgotPasswordConfig;
  Mfa?: CreateBackendAuthMFAConfig;
  OAuth?: CreateBackendAuthOAuthConfig;
  PasswordPolicy?: CreateBackendAuthPasswordPolicyConfig;
  RequiredSignUpAttributes: Array<RequiredSignUpAttributesElement>;
  SignInMethod: SignInMethod;
  UserPoolName: string;
  VerificationMessage?: CreateBackendAuthVerificationMessageConfig;
}
export interface CreateBackendAuthVerificationMessageConfig {
  DeliveryMethod: DeliveryMethod;
  EmailSettings?: EmailSettings;
  SmsSettings?: SmsSettings;
}
export interface CreateBackendConfigRequest {
  AppId: string;
  BackendManagerAppId?: string;
}
export interface CreateBackendConfigResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  JobId?: string;
  Status?: string;
}
export interface CreateBackendRequest {
  AppId: string;
  AppName: string;
  BackendEnvironmentName: string;
  ResourceConfig?: ResourceConfig;
  ResourceName?: string;
}
export interface CreateBackendResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface CreateBackendStorageRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig: CreateBackendStorageResourceConfig;
  ResourceName: string;
}
export interface CreateBackendStorageResourceConfig {
  BucketName?: string;
  Permissions: BackendStoragePermissions;
  ServiceName: ServiceName;
}
export interface CreateBackendStorageResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  JobId?: string;
  Status?: string;
}
export interface CreateTokenRequest {
  AppId: string;
}
export interface CreateTokenResponse {
  AppId?: string;
  ChallengeCode?: string;
  SessionId?: string;
  Ttl?: string;
}
export interface DeleteBackendAPIRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig?: BackendAPIResourceConfig;
  ResourceName: string;
}
export interface DeleteBackendAPIResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface DeleteBackendAuthRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceName: string;
}
export interface DeleteBackendAuthResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface DeleteBackendRequest {
  AppId: string;
  BackendEnvironmentName: string;
}
export interface DeleteBackendResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface DeleteBackendStorageRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceName: string;
  ServiceName: ServiceName;
}
export interface DeleteBackendStorageResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  JobId?: string;
  Status?: string;
}
export interface DeleteTokenRequest {
  AppId: string;
  SessionId: string;
}
export interface DeleteTokenResponse {
  IsSuccess?: boolean;
}
export type DeliveryMethod = "EMAIL" | "SMS";
export interface EmailSettings {
  EmailMessage?: string;
  EmailSubject?: string;
}
export declare class GatewayTimeoutException extends Data.TaggedError(
  "GatewayTimeoutException",
)<{
  readonly Message?: string;
}> {}
export interface GenerateBackendAPIModelsRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceName: string;
}
export interface GenerateBackendAPIModelsResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface GetBackendAPIModelsRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceName: string;
}
export interface GetBackendAPIModelsResponse {
  Models?: string;
  Status?: Status;
  ModelIntrospectionSchema?: string;
}
export interface GetBackendAPIRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig?: BackendAPIResourceConfig;
  ResourceName: string;
}
export interface GetBackendAPIResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  ResourceConfig?: BackendAPIResourceConfig;
  ResourceName?: string;
}
export interface GetBackendAuthRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceName: string;
}
export interface GetBackendAuthResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  ResourceConfig?: CreateBackendAuthResourceConfig;
  ResourceName?: string;
}
export interface GetBackendJobRequest {
  AppId: string;
  BackendEnvironmentName: string;
  JobId: string;
}
export interface GetBackendJobResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  CreateTime?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
  UpdateTime?: string;
}
export interface GetBackendRequest {
  AppId: string;
  BackendEnvironmentName?: string;
}
export interface GetBackendResponse {
  AmplifyFeatureFlags?: string;
  AmplifyMetaConfig?: string;
  AppId?: string;
  AppName?: string;
  BackendEnvironmentList?: Array<string>;
  BackendEnvironmentName?: string;
  Error?: string;
}
export interface GetBackendStorageRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceName: string;
}
export interface GetBackendStorageResourceConfig {
  BucketName?: string;
  Imported: boolean;
  Permissions?: BackendStoragePermissions;
  ServiceName: ServiceName;
}
export interface GetBackendStorageResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  ResourceConfig?: GetBackendStorageResourceConfig;
  ResourceName?: string;
}
export interface GetTokenRequest {
  AppId: string;
  SessionId: string;
}
export interface GetTokenResponse {
  AppId?: string;
  ChallengeCode?: string;
  SessionId?: string;
  Ttl?: string;
}
export interface ImportBackendAuthRequest {
  AppId: string;
  BackendEnvironmentName: string;
  IdentityPoolId?: string;
  NativeClientId: string;
  UserPoolId: string;
  WebClientId: string;
}
export interface ImportBackendAuthResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface ImportBackendStorageRequest {
  AppId: string;
  BackendEnvironmentName: string;
  BucketName?: string;
  ServiceName: ServiceName;
}
export interface ImportBackendStorageResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  JobId?: string;
  Status?: string;
}
export interface ListBackendJobsRequest {
  AppId: string;
  BackendEnvironmentName: string;
  JobId?: string;
  MaxResults?: number;
  NextToken?: string;
  Operation?: string;
  Status?: string;
}
export interface ListBackendJobsResponse {
  Jobs?: Array<BackendJobRespObj>;
  NextToken?: string;
}
export type ListOf__string = Array<string>;
export type ListOfAdditionalConstraintsElement = Array<AdditionalConstraintsElement>;
export type ListOfAuthenticatedElement = Array<AuthenticatedElement>;
export type ListOfBackendAPIAuthType = Array<BackendAPIAuthType>;
export type ListOfBackendJobRespObj = Array<BackendJobRespObj>;
export type ListOfMfaTypesElement = Array<MfaTypesElement>;
export type ListOfOAuthScopesElement = Array<OAuthScopesElement>;
export type ListOfRequiredSignUpAttributesElement = Array<RequiredSignUpAttributesElement>;
export type ListOfS3BucketInfo = Array<S3BucketInfo>;
export type ListOfUnAuthenticatedElement = Array<UnAuthenticatedElement>;
export interface ListS3BucketsRequest {
  NextToken?: string;
}
export interface ListS3BucketsResponse {
  Buckets?: Array<S3BucketInfo>;
  NextToken?: string;
}
export interface LoginAuthConfigReqObj {
  AwsCognitoIdentityPoolId?: string;
  AwsCognitoRegion?: string;
  AwsUserPoolsId?: string;
  AwsUserPoolsWebClientId?: string;
}
export type MFAMode = "ON" | "OFF" | "OPTIONAL";
export type MfaTypesElement = "SMS" | "TOTP";
export type Mode = "API_KEY" | "AWS_IAM" | "AMAZON_COGNITO_USER_POOLS" | "OPENID_CONNECT";
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type OAuthGrantType = "CODE" | "IMPLICIT";
export type OAuthScopesElement = "PHONE" | "EMAIL" | "OPENID" | "PROFILE" | "AWS_COGNITO_SIGNIN_USER_ADMIN";
export interface RemoveAllBackendsRequest {
  AppId: string;
  CleanAmplifyApp?: boolean;
}
export interface RemoveAllBackendsResponse {
  AppId?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface RemoveBackendConfigRequest {
  AppId: string;
}
export interface RemoveBackendConfigResponse {
  Error?: string;
}
export type RequiredSignUpAttributesElement = "ADDRESS" | "BIRTHDATE" | "EMAIL" | "FAMILY_NAME" | "GENDER" | "GIVEN_NAME" | "LOCALE" | "MIDDLE_NAME" | "NAME" | "NICKNAME" | "PHONE_NUMBER" | "PICTURE" | "PREFERRED_USERNAME" | "PROFILE" | "UPDATED_AT" | "WEBSITE" | "ZONE_INFO";
export type ResolutionStrategy = "OPTIMISTIC_CONCURRENCY" | "LAMBDA" | "AUTOMERGE" | "NONE";
export interface ResourceConfig {
}
export interface S3BucketInfo {
  CreationDate?: string;
  Name?: string;
}
export type Service = "COGNITO";
export type ServiceName = "S3";
export interface Settings {
  MfaTypes?: Array<MfaTypesElement>;
  SmsMessage?: string;
}
export type SignInMethod = "EMAIL" | "EMAIL_AND_PHONE_NUMBER" | "PHONE_NUMBER" | "USERNAME";
export interface SmsSettings {
  SmsMessage?: string;
}
export interface SocialProviderSettings {
  Facebook?: BackendAuthSocialProviderConfig;
  Google?: BackendAuthSocialProviderConfig;
  LoginWithAmazon?: BackendAuthSocialProviderConfig;
  SignInWithApple?: BackendAuthAppleProviderConfig;
}
export type Status = "LATEST" | "STALE";
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly LimitType?: string;
  readonly Message?: string;
}> {}
export type UnAuthenticatedElement = "READ" | "CREATE_AND_UPDATE" | "DELETE";
export interface UpdateBackendAPIRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig?: BackendAPIResourceConfig;
  ResourceName: string;
}
export interface UpdateBackendAPIResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface UpdateBackendAuthForgotPasswordConfig {
  DeliveryMethod?: DeliveryMethod;
  EmailSettings?: EmailSettings;
  SmsSettings?: SmsSettings;
}
export interface UpdateBackendAuthIdentityPoolConfig {
  UnauthenticatedLogin?: boolean;
}
export interface UpdateBackendAuthMFAConfig {
  MFAMode?: MFAMode;
  Settings?: Settings;
}
export interface UpdateBackendAuthOAuthConfig {
  DomainPrefix?: string;
  OAuthGrantType?: OAuthGrantType;
  OAuthScopes?: Array<OAuthScopesElement>;
  RedirectSignInURIs?: Array<string>;
  RedirectSignOutURIs?: Array<string>;
  SocialProviderSettings?: SocialProviderSettings;
}
export interface UpdateBackendAuthPasswordPolicyConfig {
  AdditionalConstraints?: Array<AdditionalConstraintsElement>;
  MinimumLength?: number;
}
export interface UpdateBackendAuthRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig: UpdateBackendAuthResourceConfig;
  ResourceName: string;
}
export interface UpdateBackendAuthResourceConfig {
  AuthResources: AuthResources;
  IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig;
  Service: Service;
  UserPoolConfigs: UpdateBackendAuthUserPoolConfig;
}
export interface UpdateBackendAuthResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
}
export interface UpdateBackendAuthUserPoolConfig {
  ForgotPassword?: UpdateBackendAuthForgotPasswordConfig;
  Mfa?: UpdateBackendAuthMFAConfig;
  OAuth?: UpdateBackendAuthOAuthConfig;
  PasswordPolicy?: UpdateBackendAuthPasswordPolicyConfig;
  VerificationMessage?: UpdateBackendAuthVerificationMessageConfig;
}
export interface UpdateBackendAuthVerificationMessageConfig {
  DeliveryMethod: DeliveryMethod;
  EmailSettings?: EmailSettings;
  SmsSettings?: SmsSettings;
}
export interface UpdateBackendConfigRequest {
  AppId: string;
  LoginAuthConfig?: LoginAuthConfigReqObj;
}
export interface UpdateBackendConfigResponse {
  AppId?: string;
  BackendManagerAppId?: string;
  Error?: string;
  LoginAuthConfig?: LoginAuthConfigReqObj;
}
export interface UpdateBackendJobRequest {
  AppId: string;
  BackendEnvironmentName: string;
  JobId: string;
  Operation?: string;
  Status?: string;
}
export interface UpdateBackendJobResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  CreateTime?: string;
  Error?: string;
  JobId?: string;
  Operation?: string;
  Status?: string;
  UpdateTime?: string;
}
export interface UpdateBackendStorageRequest {
  AppId: string;
  BackendEnvironmentName: string;
  ResourceConfig: UpdateBackendStorageResourceConfig;
  ResourceName: string;
}
export interface UpdateBackendStorageResourceConfig {
  Permissions: BackendStoragePermissions;
  ServiceName: ServiceName;
}
export interface UpdateBackendStorageResponse {
  AppId?: string;
  BackendEnvironmentName?: string;
  JobId?: string;
  Status?: string;
}
export declare namespace CloneBackend {
  export type Input = CloneBackendRequest;
  export type Output = CloneBackendResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateBackend {
  export type Input = CreateBackendRequest;
  export type Output = CreateBackendResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateBackendAPI {
  export type Input = CreateBackendAPIRequest;
  export type Output = CreateBackendAPIResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateBackendAuth {
  export type Input = CreateBackendAuthRequest;
  export type Output = CreateBackendAuthResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateBackendConfig {
  export type Input = CreateBackendConfigRequest;
  export type Output = CreateBackendConfigResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateBackendStorage {
  export type Input = CreateBackendStorageRequest;
  export type Output = CreateBackendStorageResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateToken {
  export type Input = CreateTokenRequest;
  export type Output = CreateTokenResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteBackend {
  export type Input = DeleteBackendRequest;
  export type Output = DeleteBackendResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteBackendAPI {
  export type Input = DeleteBackendAPIRequest;
  export type Output = DeleteBackendAPIResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteBackendAuth {
  export type Input = DeleteBackendAuthRequest;
  export type Output = DeleteBackendAuthResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteBackendStorage {
  export type Input = DeleteBackendStorageRequest;
  export type Output = DeleteBackendStorageResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteToken {
  export type Input = DeleteTokenRequest;
  export type Output = DeleteTokenResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GenerateBackendAPIModels {
  export type Input = GenerateBackendAPIModelsRequest;
  export type Output = GenerateBackendAPIModelsResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBackend {
  export type Input = GetBackendRequest;
  export type Output = GetBackendResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBackendAPI {
  export type Input = GetBackendAPIRequest;
  export type Output = GetBackendAPIResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBackendAPIModels {
  export type Input = GetBackendAPIModelsRequest;
  export type Output = GetBackendAPIModelsResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBackendAuth {
  export type Input = GetBackendAuthRequest;
  export type Output = GetBackendAuthResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBackendJob {
  export type Input = GetBackendJobRequest;
  export type Output = GetBackendJobResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBackendStorage {
  export type Input = GetBackendStorageRequest;
  export type Output = GetBackendStorageResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetToken {
  export type Input = GetTokenRequest;
  export type Output = GetTokenResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ImportBackendAuth {
  export type Input = ImportBackendAuthRequest;
  export type Output = ImportBackendAuthResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ImportBackendStorage {
  export type Input = ImportBackendStorageRequest;
  export type Output = ImportBackendStorageResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListBackendJobs {
  export type Input = ListBackendJobsRequest;
  export type Output = ListBackendJobsResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListS3Buckets {
  export type Input = ListS3BucketsRequest;
  export type Output = ListS3BucketsResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RemoveAllBackends {
  export type Input = RemoveAllBackendsRequest;
  export type Output = RemoveAllBackendsResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RemoveBackendConfig {
  export type Input = RemoveBackendConfigRequest;
  export type Output = RemoveBackendConfigResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateBackendAPI {
  export type Input = UpdateBackendAPIRequest;
  export type Output = UpdateBackendAPIResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateBackendAuth {
  export type Input = UpdateBackendAuthRequest;
  export type Output = UpdateBackendAuthResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateBackendConfig {
  export type Input = UpdateBackendConfigRequest;
  export type Output = UpdateBackendConfigResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateBackendJob {
  export type Input = UpdateBackendJobRequest;
  export type Output = UpdateBackendJobResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateBackendStorage {
  export type Input = UpdateBackendStorageRequest;
  export type Output = UpdateBackendStorageResponse;
  export type Error =
    | BadRequestException
    | GatewayTimeoutException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

