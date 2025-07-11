import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSSSOOIDCService {
  createToken(
    input: CreateTokenRequest,
  ): Effect.Effect<
    CreateTokenResponse,
    | AccessDeniedException
    | AuthorizationPendingException
    | ExpiredTokenException
    | InternalServerException
    | InvalidClientException
    | InvalidGrantException
    | InvalidRequestException
    | InvalidScopeException
    | SlowDownException
    | UnauthorizedClientException
    | UnsupportedGrantTypeException
    | CommonAwsError
  >;
  createTokenWithIAM(
    input: CreateTokenWithIAMRequest,
  ): Effect.Effect<
    CreateTokenWithIAMResponse,
    | AccessDeniedException
    | AuthorizationPendingException
    | ExpiredTokenException
    | InternalServerException
    | InvalidClientException
    | InvalidGrantException
    | InvalidRequestException
    | InvalidRequestRegionException
    | InvalidScopeException
    | SlowDownException
    | UnauthorizedClientException
    | UnsupportedGrantTypeException
    | CommonAwsError
  >;
  registerClient(
    input: RegisterClientRequest,
  ): Effect.Effect<
    RegisterClientResponse,
    | InternalServerException
    | InvalidClientMetadataException
    | InvalidRedirectUriException
    | InvalidRequestException
    | InvalidScopeException
    | UnsupportedGrantTypeException
    | CommonAwsError
  >;
  startDeviceAuthorization(
    input: StartDeviceAuthorizationRequest,
  ): Effect.Effect<
    StartDeviceAuthorizationResponse,
    | InternalServerException
    | InvalidClientException
    | InvalidRequestException
    | SlowDownException
    | UnauthorizedClientException
    | CommonAwsError
  >;
}

export type SsoOidc = AWSSSOOIDCService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export type AccessToken = string;

export type ArnType = string;

export type Assertion = string;

export type AuthCode = string;

export declare class AuthorizationPendingException extends EffectData.TaggedError(
  "AuthorizationPendingException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export interface AwsAdditionalDetails {
  identityContext?: string;
}
export type ClientId = string;

export type ClientName = string;

export type ClientSecret = string;

export type ClientType = string;

export type CodeVerifier = string;

export interface CreateTokenRequest {
  clientId: string;
  clientSecret: string;
  grantType: string;
  deviceCode?: string;
  code?: string;
  refreshToken?: string;
  scope?: Array<string>;
  redirectUri?: string;
  codeVerifier?: string;
}
export interface CreateTokenResponse {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  refreshToken?: string;
  idToken?: string;
}
export interface CreateTokenWithIAMRequest {
  clientId: string;
  grantType: string;
  code?: string;
  refreshToken?: string;
  assertion?: string;
  scope?: Array<string>;
  redirectUri?: string;
  subjectToken?: string;
  subjectTokenType?: string;
  requestedTokenType?: string;
  codeVerifier?: string;
}
export interface CreateTokenWithIAMResponse {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  refreshToken?: string;
  idToken?: string;
  issuedTokenType?: string;
  scope?: Array<string>;
  awsAdditionalDetails?: AwsAdditionalDetails;
}
export type DeviceCode = string;

export type Error = string;

export type ErrorDescription = string;

export type ExpirationInSeconds = number;

export declare class ExpiredTokenException extends EffectData.TaggedError(
  "ExpiredTokenException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export type GrantType = string;

export type GrantTypes = Array<string>;
export type IdentityContext = string;

export type IdToken = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export type IntervalInSeconds = number;

export declare class InvalidClientException extends EffectData.TaggedError(
  "InvalidClientException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export declare class InvalidClientMetadataException extends EffectData.TaggedError(
  "InvalidClientMetadataException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export declare class InvalidGrantException extends EffectData.TaggedError(
  "InvalidGrantException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export declare class InvalidRedirectUriException extends EffectData.TaggedError(
  "InvalidRedirectUriException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export declare class InvalidRequestRegionException extends EffectData.TaggedError(
  "InvalidRequestRegionException",
)<{
  readonly error?: string;
  readonly error_description?: string;
  readonly endpoint?: string;
  readonly region?: string;
}> {}
export declare class InvalidScopeException extends EffectData.TaggedError(
  "InvalidScopeException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export type Location = string;

export type LongTimeStampType = number;

export type RedirectUris = Array<string>;
export type RefreshToken = string;

export type Region = string;

export interface RegisterClientRequest {
  clientName: string;
  clientType: string;
  scopes?: Array<string>;
  redirectUris?: Array<string>;
  grantTypes?: Array<string>;
  issuerUrl?: string;
  entitledApplicationArn?: string;
}
export interface RegisterClientResponse {
  clientId?: string;
  clientSecret?: string;
  clientIdIssuedAt?: number;
  clientSecretExpiresAt?: number;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
}
export type Scope = string;

export type Scopes = Array<string>;
export declare class SlowDownException extends EffectData.TaggedError(
  "SlowDownException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export interface StartDeviceAuthorizationRequest {
  clientId: string;
  clientSecret: string;
  startUrl: string;
}
export interface StartDeviceAuthorizationResponse {
  deviceCode?: string;
  userCode?: string;
  verificationUri?: string;
  verificationUriComplete?: string;
  expiresIn?: number;
  interval?: number;
}
export type SubjectToken = string;

export type TokenType = string;

export type TokenTypeURI = string;

export declare class UnauthorizedClientException extends EffectData.TaggedError(
  "UnauthorizedClientException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export declare class UnsupportedGrantTypeException extends EffectData.TaggedError(
  "UnsupportedGrantTypeException",
)<{
  readonly error?: string;
  readonly error_description?: string;
}> {}
export type URI = string;

export type UserCode = string;

export declare namespace CreateToken {
  export type Input = CreateTokenRequest;
  export type Output = CreateTokenResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationPendingException
    | ExpiredTokenException
    | InternalServerException
    | InvalidClientException
    | InvalidGrantException
    | InvalidRequestException
    | InvalidScopeException
    | SlowDownException
    | UnauthorizedClientException
    | UnsupportedGrantTypeException
    | CommonAwsError;
}

export declare namespace CreateTokenWithIAM {
  export type Input = CreateTokenWithIAMRequest;
  export type Output = CreateTokenWithIAMResponse;
  export type Error =
    | AccessDeniedException
    | AuthorizationPendingException
    | ExpiredTokenException
    | InternalServerException
    | InvalidClientException
    | InvalidGrantException
    | InvalidRequestException
    | InvalidRequestRegionException
    | InvalidScopeException
    | SlowDownException
    | UnauthorizedClientException
    | UnsupportedGrantTypeException
    | CommonAwsError;
}

export declare namespace RegisterClient {
  export type Input = RegisterClientRequest;
  export type Output = RegisterClientResponse;
  export type Error =
    | InternalServerException
    | InvalidClientMetadataException
    | InvalidRedirectUriException
    | InvalidRequestException
    | InvalidScopeException
    | UnsupportedGrantTypeException
    | CommonAwsError;
}

export declare namespace StartDeviceAuthorization {
  export type Input = StartDeviceAuthorizationRequest;
  export type Output = StartDeviceAuthorizationResponse;
  export type Error =
    | InternalServerException
    | InvalidClientException
    | InvalidRequestException
    | SlowDownException
    | UnauthorizedClientException
    | CommonAwsError;
}
