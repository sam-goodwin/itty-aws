import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSSecurityTokenServiceV20110615 {
  assumeRole(
    input: AssumeRoleRequest,
  ): Effect.Effect<
    AssumeRoleResponse,
    ExpiredTokenException | MalformedPolicyDocumentException | PackedPolicyTooLargeException | RegionDisabledException | CommonAwsError
  >;
  assumeRoleWithSAML(
    input: AssumeRoleWithSAMLRequest,
  ): Effect.Effect<
    AssumeRoleWithSAMLResponse,
    ExpiredTokenException | IDPRejectedClaimException | InvalidIdentityTokenException | MalformedPolicyDocumentException | PackedPolicyTooLargeException | RegionDisabledException | CommonAwsError
  >;
  assumeRoleWithWebIdentity(
    input: AssumeRoleWithWebIdentityRequest,
  ): Effect.Effect<
    AssumeRoleWithWebIdentityResponse,
    ExpiredTokenException | IDPCommunicationErrorException | IDPRejectedClaimException | InvalidIdentityTokenException | MalformedPolicyDocumentException | PackedPolicyTooLargeException | RegionDisabledException | CommonAwsError
  >;
  assumeRoot(
    input: AssumeRootRequest,
  ): Effect.Effect<
    AssumeRootResponse,
    ExpiredTokenException | RegionDisabledException | CommonAwsError
  >;
  decodeAuthorizationMessage(
    input: DecodeAuthorizationMessageRequest,
  ): Effect.Effect<
    DecodeAuthorizationMessageResponse,
    InvalidAuthorizationMessageException | CommonAwsError
  >;
  getAccessKeyInfo(
    input: GetAccessKeyInfoRequest,
  ): Effect.Effect<
    GetAccessKeyInfoResponse,
    CommonAwsError
  >;
  getCallerIdentity(
    input: GetCallerIdentityRequest,
  ): Effect.Effect<
    GetCallerIdentityResponse,
    CommonAwsError
  >;
  getFederationToken(
    input: GetFederationTokenRequest,
  ): Effect.Effect<
    GetFederationTokenResponse,
    MalformedPolicyDocumentException | PackedPolicyTooLargeException | RegionDisabledException | CommonAwsError
  >;
  getSessionToken(
    input: GetSessionTokenRequest,
  ): Effect.Effect<
    GetSessionTokenResponse,
    RegionDisabledException | CommonAwsError
  >;
}

export type Sts = AWSSecurityTokenServiceV20110615;

export type accessKeyIdType = string;

export type accessKeySecretType = string;

export type accountType = string;

export type arnType = string;

export type assumedRoleIdType = string;

export interface AssumedRoleUser {
  AssumedRoleId: string;
  Arn: string;
}
export interface AssumeRoleRequest {
  RoleArn: string;
  RoleSessionName: string;
  PolicyArns?: Array<PolicyDescriptorType>;
  Policy?: string;
  DurationSeconds?: number;
  Tags?: Array<Tag>;
  TransitiveTagKeys?: Array<string>;
  ExternalId?: string;
  SerialNumber?: string;
  TokenCode?: string;
  SourceIdentity?: string;
  ProvidedContexts?: Array<ProvidedContext>;
}
export interface AssumeRoleResponse {
  Credentials?: Credentials;
  AssumedRoleUser?: AssumedRoleUser;
  PackedPolicySize?: number;
  SourceIdentity?: string;
}
export interface AssumeRoleWithSAMLRequest {
  RoleArn: string;
  PrincipalArn: string;
  SAMLAssertion: string;
  PolicyArns?: Array<PolicyDescriptorType>;
  Policy?: string;
  DurationSeconds?: number;
}
export interface AssumeRoleWithSAMLResponse {
  Credentials?: Credentials;
  AssumedRoleUser?: AssumedRoleUser;
  PackedPolicySize?: number;
  Subject?: string;
  SubjectType?: string;
  Issuer?: string;
  Audience?: string;
  NameQualifier?: string;
  SourceIdentity?: string;
}
export interface AssumeRoleWithWebIdentityRequest {
  RoleArn: string;
  RoleSessionName: string;
  WebIdentityToken: string;
  ProviderId?: string;
  PolicyArns?: Array<PolicyDescriptorType>;
  Policy?: string;
  DurationSeconds?: number;
}
export interface AssumeRoleWithWebIdentityResponse {
  Credentials?: Credentials;
  SubjectFromWebIdentityToken?: string;
  AssumedRoleUser?: AssumedRoleUser;
  PackedPolicySize?: number;
  Provider?: string;
  Audience?: string;
  SourceIdentity?: string;
}
export interface AssumeRootRequest {
  TargetPrincipal: string;
  TaskPolicyArn: PolicyDescriptorType;
  DurationSeconds?: number;
}
export interface AssumeRootResponse {
  Credentials?: Credentials;
  SourceIdentity?: string;
}
export type Audience = string;

export type clientTokenType = string;

export type contextAssertionType = string;

export interface Credentials {
  AccessKeyId: string;
  SecretAccessKey: string;
  SessionToken: string;
  Expiration: Date | string;
}
export type dateType = Date | string;

export interface DecodeAuthorizationMessageRequest {
  EncodedMessage: string;
}
export interface DecodeAuthorizationMessageResponse {
  DecodedMessage?: string;
}
export type decodedMessageType = string;

export type durationSecondsType = number;

export type encodedMessageType = string;

export type expiredIdentityTokenMessage = string;

export declare class ExpiredTokenException extends Data.TaggedError(
  "ExpiredTokenException",
)<{
  readonly message?: string;
}> {}
export type externalIdType = string;

export type federatedIdType = string;

export interface FederatedUser {
  FederatedUserId: string;
  Arn: string;
}
export interface GetAccessKeyInfoRequest {
  AccessKeyId: string;
}
export interface GetAccessKeyInfoResponse {
  Account?: string;
}
export interface GetCallerIdentityRequest {
}
export interface GetCallerIdentityResponse {
  UserId?: string;
  Account?: string;
  Arn?: string;
}
export interface GetFederationTokenRequest {
  Name: string;
  Policy?: string;
  PolicyArns?: Array<PolicyDescriptorType>;
  DurationSeconds?: number;
  Tags?: Array<Tag>;
}
export interface GetFederationTokenResponse {
  Credentials?: Credentials;
  FederatedUser?: FederatedUser;
  PackedPolicySize?: number;
}
export interface GetSessionTokenRequest {
  DurationSeconds?: number;
  SerialNumber?: string;
  TokenCode?: string;
}
export interface GetSessionTokenResponse {
  Credentials?: Credentials;
}
export declare class IDPCommunicationErrorException extends Data.TaggedError(
  "IDPCommunicationErrorException",
)<{
  readonly message?: string;
}> {}
export type idpCommunicationErrorMessage = string;

export declare class IDPRejectedClaimException extends Data.TaggedError(
  "IDPRejectedClaimException",
)<{
  readonly message?: string;
}> {}
export type idpRejectedClaimMessage = string;

export type invalidAuthorizationMessage = string;

export declare class InvalidAuthorizationMessageException extends Data.TaggedError(
  "InvalidAuthorizationMessageException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidIdentityTokenException extends Data.TaggedError(
  "InvalidIdentityTokenException",
)<{
  readonly message?: string;
}> {}
export type invalidIdentityTokenMessage = string;

export type Issuer = string;

export declare class MalformedPolicyDocumentException extends Data.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly message?: string;
}> {}
export type malformedPolicyDocumentMessage = string;

export type NameQualifier = string;

export type nonNegativeIntegerType = number;

export declare class PackedPolicyTooLargeException extends Data.TaggedError(
  "PackedPolicyTooLargeException",
)<{
  readonly message?: string;
}> {}
export type packedPolicyTooLargeMessage = string;

export type policyDescriptorListType = Array<PolicyDescriptorType>;
export interface PolicyDescriptorType {
  arn?: string;
}
export interface ProvidedContext {
  ProviderArn?: string;
  ContextAssertion?: string;
}
export type ProvidedContextsListType = Array<ProvidedContext>;
export declare class RegionDisabledException extends Data.TaggedError(
  "RegionDisabledException",
)<{
  readonly message?: string;
}> {}
export type regionDisabledMessage = string;

export type roleDurationSecondsType = number;

export type roleSessionNameType = string;

export type RootDurationSecondsType = number;

export type SAMLAssertionType = string;

export type serialNumberType = string;

export type sessionPolicyDocumentType = string;

export type sourceIdentityType = string;

export type Subject = string;

export type SubjectType = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type tagKeyListType = Array<string>;
export type tagKeyType = string;

export type tagListType = Array<Tag>;
export type tagValueType = string;

export type TargetPrincipalType = string;

export type tokenCodeType = string;

export type tokenType = string;

export type unrestrictedSessionPolicyDocumentType = string;

export type urlType = string;

export type userIdType = string;

export type userNameType = string;

export type webIdentitySubjectType = string;

export declare namespace AssumeRole {
  export type Input = AssumeRoleRequest;
  export type Output = AssumeRoleResponse;
  export type Error =
    | ExpiredTokenException
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
    | CommonAwsError;
}

export declare namespace AssumeRoleWithSAML {
  export type Input = AssumeRoleWithSAMLRequest;
  export type Output = AssumeRoleWithSAMLResponse;
  export type Error =
    | ExpiredTokenException
    | IDPRejectedClaimException
    | InvalidIdentityTokenException
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
    | CommonAwsError;
}

export declare namespace AssumeRoleWithWebIdentity {
  export type Input = AssumeRoleWithWebIdentityRequest;
  export type Output = AssumeRoleWithWebIdentityResponse;
  export type Error =
    | ExpiredTokenException
    | IDPCommunicationErrorException
    | IDPRejectedClaimException
    | InvalidIdentityTokenException
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
    | CommonAwsError;
}

export declare namespace AssumeRoot {
  export type Input = AssumeRootRequest;
  export type Output = AssumeRootResponse;
  export type Error =
    | ExpiredTokenException
    | RegionDisabledException
    | CommonAwsError;
}

export declare namespace DecodeAuthorizationMessage {
  export type Input = DecodeAuthorizationMessageRequest;
  export type Output = DecodeAuthorizationMessageResponse;
  export type Error =
    | InvalidAuthorizationMessageException
    | CommonAwsError;
}

export declare namespace GetAccessKeyInfo {
  export type Input = GetAccessKeyInfoRequest;
  export type Output = GetAccessKeyInfoResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetCallerIdentity {
  export type Input = GetCallerIdentityRequest;
  export type Output = GetCallerIdentityResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetFederationToken {
  export type Input = GetFederationTokenRequest;
  export type Output = GetFederationTokenResponse;
  export type Error =
    | MalformedPolicyDocumentException
    | PackedPolicyTooLargeException
    | RegionDisabledException
    | CommonAwsError;
}

export declare namespace GetSessionToken {
  export type Input = GetSessionTokenRequest;
  export type Output = GetSessionTokenResponse;
  export type Error =
    | RegionDisabledException
    | CommonAwsError;
}

