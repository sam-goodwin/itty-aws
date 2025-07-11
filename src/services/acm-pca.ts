import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface ACMPrivateCA {
  createCertificateAuthority(
    input: CreateCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    InvalidArgsException | InvalidPolicyException | InvalidTagException | LimitExceededException | CommonAwsError
  >;
  createCertificateAuthorityAuditReport(
    input: CreateCertificateAuthorityAuditReportRequest,
  ): Effect.Effect<
    {},
    InvalidArgsException | InvalidArnException | InvalidStateException | RequestFailedException | RequestInProgressException | ResourceNotFoundException | CommonAwsError
  >;
  createPermission(
    input: CreatePermissionRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | LimitExceededException | PermissionAlreadyExistsException | RequestFailedException | ResourceNotFoundException | CommonAwsError
  >;
  deleteCertificateAuthority(
    input: DeleteCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidArnException | InvalidStateException | ResourceNotFoundException | CommonAwsError
  >;
  deletePermission(
    input: DeletePermissionRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | RequestFailedException | ResourceNotFoundException | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidArnException | InvalidStateException | LockoutPreventedException | RequestFailedException | ResourceNotFoundException | CommonAwsError
  >;
  describeCertificateAuthority(
    input: DescribeCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | ResourceNotFoundException | CommonAwsError
  >;
  describeCertificateAuthorityAuditReport(
    input: DescribeCertificateAuthorityAuditReportRequest,
  ): Effect.Effect<
    {},
    InvalidArgsException | InvalidArnException | ResourceNotFoundException | CommonAwsError
  >;
  getCertificate(
    input: GetCertificateRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | RequestFailedException | RequestInProgressException | ResourceNotFoundException | CommonAwsError
  >;
  getCertificateAuthorityCertificate(
    input: GetCertificateAuthorityCertificateRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | ResourceNotFoundException | CommonAwsError
  >;
  getCertificateAuthorityCsr(
    input: GetCertificateAuthorityCsrRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | RequestFailedException | RequestInProgressException | ResourceNotFoundException | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | RequestFailedException | ResourceNotFoundException | CommonAwsError
  >;
  importCertificateAuthorityCertificate(
    input: ImportCertificateAuthorityCertificateRequest,
  ): Effect.Effect<
    {},
    CertificateMismatchException | ConcurrentModificationException | InvalidArnException | InvalidRequestException | InvalidStateException | MalformedCertificateException | RequestFailedException | RequestInProgressException | ResourceNotFoundException | CommonAwsError
  >;
  issueCertificate(
    input: IssueCertificateRequest,
  ): Effect.Effect<
    {},
    InvalidArgsException | InvalidArnException | InvalidStateException | LimitExceededException | MalformedCSRException | ResourceNotFoundException | CommonAwsError
  >;
  listCertificateAuthorities(
    input: ListCertificateAuthoritiesRequest,
  ): Effect.Effect<
    {},
    InvalidNextTokenException | CommonAwsError
  >;
  listPermissions(
    input: ListPermissionsRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidNextTokenException | InvalidStateException | RequestFailedException | ResourceNotFoundException | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | RequestFailedException | ResourceNotFoundException | CommonAwsError
  >;
  putPolicy(
    input: PutPolicyRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidArnException | InvalidPolicyException | InvalidStateException | LockoutPreventedException | RequestFailedException | ResourceNotFoundException | CommonAwsError
  >;
  restoreCertificateAuthority(
    input: RestoreCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | ResourceNotFoundException | CommonAwsError
  >;
  revokeCertificate(
    input: RevokeCertificateRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidArnException | InvalidRequestException | InvalidStateException | LimitExceededException | RequestAlreadyProcessedException | RequestFailedException | RequestInProgressException | ResourceNotFoundException | CommonAwsError
  >;
  tagCertificateAuthority(
    input: TagCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | InvalidTagException | ResourceNotFoundException | TooManyTagsException | CommonAwsError
  >;
  untagCertificateAuthority(
    input: UntagCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    InvalidArnException | InvalidStateException | InvalidTagException | ResourceNotFoundException | CommonAwsError
  >;
  updateCertificateAuthority(
    input: UpdateCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidArgsException | InvalidArnException | InvalidPolicyException | InvalidStateException | ResourceNotFoundException | CommonAwsError
  >;
}

export type AcmPca = ACMPrivateCA;

export interface AccessDescription {
}
export type AccessDescriptionList = Array<unknown>;
export interface AccessMethod {
}
export type AccessMethodType = never;
export type AccountId = string;

export type ActionList = Array<unknown>;
export type ActionType = never;
export interface ApiPassthrough {
}
export type Arn = string;

export type ASN1PrintableString64 = string;

export interface ASN1Subject {
}
export type AuditReportId = string;

export type AuditReportResponseFormat = never;
export type AuditReportStatus = never;
export type AWSPolicy = string;

export type Base64String1To4096 = string;

export type CertificateAuthorities = Array<unknown>;
export interface CertificateAuthority {
}
export interface CertificateAuthorityConfiguration {
}
export type CertificateAuthorityStatus = never;
export type CertificateAuthorityType = never;
export type CertificateAuthorityUsageMode = never;
export type CertificateBody = string;

export type CertificateBodyBlob = Uint8Array | string;

export type CertificateChain = string;

export type CertificateChainBlob = Uint8Array | string;

export interface CertificateMismatchException {
}
export type CertificatePolicyList = Array<unknown>;
export type CnameString = string;

export interface ConcurrentModificationException {
}
export type CountryCodeString = string;

export interface CreateCertificateAuthorityAuditReportRequest {
}
export interface CreateCertificateAuthorityAuditReportResponse {
}
export interface CreateCertificateAuthorityRequest {
}
export interface CreateCertificateAuthorityResponse {
}
export interface CreatePermissionRequest {
}
export interface CrlConfiguration {
}
export interface CrlDistributionPointExtensionConfiguration {
}
export type CrlPathString = string;

export type CrlType = never;
export type CsrBlob = Uint8Array | string;

export type CsrBody = string;

export interface CsrExtensions {
}
export interface CustomAttribute {
}
export type CustomAttributeList = Array<unknown>;
export interface CustomExtension {
}
export type CustomExtensionList = Array<unknown>;
export type CustomObjectIdentifier = string;

export interface DeleteCertificateAuthorityRequest {
}
export interface DeletePermissionRequest {
}
export interface DeletePolicyRequest {
}
export interface DescribeCertificateAuthorityAuditReportRequest {
}
export interface DescribeCertificateAuthorityAuditReportResponse {
}
export interface DescribeCertificateAuthorityRequest {
}
export interface DescribeCertificateAuthorityResponse {
}
export interface EdiPartyName {
}
export interface ExtendedKeyUsage {
}
export type ExtendedKeyUsageList = Array<unknown>;
export type ExtendedKeyUsageType = never;
export interface Extensions {
}
export type FailureReason = never;
export interface GeneralName {
}
export type GeneralNameList = Array<unknown>;
export interface GetCertificateAuthorityCertificateRequest {
}
export interface GetCertificateAuthorityCertificateResponse {
}
export interface GetCertificateAuthorityCsrRequest {
}
export interface GetCertificateAuthorityCsrResponse {
}
export interface GetCertificateRequest {
}
export interface GetCertificateResponse {
}
export interface GetPolicyRequest {
}
export interface GetPolicyResponse {
}
export type IdempotencyToken = string;

export interface ImportCertificateAuthorityCertificateRequest {
}
export type Integer1To5000 = number;

export interface InvalidArgsException {
}
export interface InvalidArnException {
}
export interface InvalidNextTokenException {
}
export interface InvalidPolicyException {
}
export interface InvalidRequestException {
}
export interface InvalidStateException {
}
export interface InvalidTagException {
}
export interface IssueCertificateRequest {
}
export interface IssueCertificateResponse {
}
export type KeyAlgorithm = never;
export type KeyStorageSecurityStandard = never;
export interface KeyUsage {
}
export interface LimitExceededException {
}
export interface ListCertificateAuthoritiesRequest {
}
export interface ListCertificateAuthoritiesResponse {
}
export interface ListPermissionsRequest {
}
export interface ListPermissionsResponse {
}
export interface ListTagsRequest {
}
export interface ListTagsResponse {
}
export interface LockoutPreventedException {
}
export interface MalformedCertificateException {
}
export interface MalformedCSRException {
}
export type MaxResults = number;

export type NextToken = string;

export interface OcspConfiguration {
}
export interface OtherName {
}
export type PermanentDeletionTimeInDays = number;

export interface Permission {
}
export interface PermissionAlreadyExistsException {
}
export type PermissionList = Array<unknown>;
export interface PolicyInformation {
}
export type PolicyQualifierId = never;
export interface PolicyQualifierInfo {
}
export type PolicyQualifierInfoList = Array<unknown>;
export type PositiveLong = number;

export type Principal = string;

export interface PutPolicyRequest {
}
export interface Qualifier {
}
export interface RequestAlreadyProcessedException {
}
export interface RequestFailedException {
}
export interface RequestInProgressException {
}
export interface ResourceNotFoundException {
}
export type ResourceOwner = never;
export interface RestoreCertificateAuthorityRequest {
}
export interface RevocationConfiguration {
}
export type RevocationReason = never;
export interface RevokeCertificateRequest {
}
export type S3BucketName = string;

export type S3BucketName3To255 = string;

export type S3Key = string;

export type S3ObjectAcl = never;
export type SigningAlgorithm = never;
export type String128 = string;

export type String16 = string;

export type String1To256 = string;

export type String253 = string;

export type String256 = string;

export type String3 = string;

export type String39 = string;

export type String40 = string;

export type String5 = string;

export type String64 = string;

export interface Tag {
}
export interface TagCertificateAuthorityRequest {
}
export type TagKey = string;

export type TagList = Array<unknown>;
export type TagValue = string;

export interface TooManyTagsException {
}
export type TStamp = Date | string;

export interface UntagCertificateAuthorityRequest {
}
export interface UpdateCertificateAuthorityRequest {
}
export interface Validity {
}
export type ValidityPeriodType = never;
export declare namespace CreateCertificateAuthority {
  export type Input = CreateCertificateAuthorityRequest;
  export type Output = {};
  export type Error =
    | InvalidArgsException
    | InvalidPolicyException
    | InvalidTagException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateCertificateAuthorityAuditReport {
  export type Input = CreateCertificateAuthorityAuditReportRequest;
  export type Output = {};
  export type Error =
    | InvalidArgsException
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePermission {
  export type Input = CreatePermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | LimitExceededException
    | PermissionAlreadyExistsException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteCertificateAuthority {
  export type Input = DeleteCertificateAuthorityRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePermission {
  export type Input = DeletePermissionRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidStateException
    | LockoutPreventedException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCertificateAuthority {
  export type Input = DescribeCertificateAuthorityRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCertificateAuthorityAuditReport {
  export type Input = DescribeCertificateAuthorityAuditReportRequest;
  export type Output = {};
  export type Error =
    | InvalidArgsException
    | InvalidArnException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCertificate {
  export type Input = GetCertificateRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCertificateAuthorityCertificate {
  export type Input = GetCertificateAuthorityCertificateRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCertificateAuthorityCsr {
  export type Input = GetCertificateAuthorityCsrRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ImportCertificateAuthorityCertificate {
  export type Input = ImportCertificateAuthorityCertificateRequest;
  export type Output = {};
  export type Error =
    | CertificateMismatchException
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidRequestException
    | InvalidStateException
    | MalformedCertificateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace IssueCertificate {
  export type Input = IssueCertificateRequest;
  export type Output = {};
  export type Error =
    | InvalidArgsException
    | InvalidArnException
    | InvalidStateException
    | LimitExceededException
    | MalformedCSRException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListCertificateAuthorities {
  export type Input = ListCertificateAuthoritiesRequest;
  export type Output = {};
  export type Error =
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListPermissions {
  export type Input = ListPermissionsRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidNextTokenException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutPolicy {
  export type Input = PutPolicyRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidPolicyException
    | InvalidStateException
    | LockoutPreventedException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RestoreCertificateAuthority {
  export type Input = RestoreCertificateAuthorityRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RevokeCertificate {
  export type Input = RevokeCertificateRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidRequestException
    | InvalidStateException
    | LimitExceededException
    | RequestAlreadyProcessedException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagCertificateAuthority {
  export type Input = TagCertificateAuthorityRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | InvalidTagException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagCertificateAuthority {
  export type Input = UntagCertificateAuthorityRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | InvalidTagException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateCertificateAuthority {
  export type Input = UpdateCertificateAuthorityRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidArgsException
    | InvalidArnException
    | InvalidPolicyException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

