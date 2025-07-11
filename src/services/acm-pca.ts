import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface ACMPrivateCA {
  createCertificateAuthority(
    input: CreateCertificateAuthorityRequest,
  ): Effect.Effect<
    CreateCertificateAuthorityResponse,
    | InvalidArgsException
    | InvalidPolicyException
    | InvalidTagException
    | LimitExceededException
    | CommonAwsError
  >;
  createCertificateAuthorityAuditReport(
    input: CreateCertificateAuthorityAuditReportRequest,
  ): Effect.Effect<
    CreateCertificateAuthorityAuditReportResponse,
    | InvalidArgsException
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createPermission(
    input: CreatePermissionRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidStateException
    | LimitExceededException
    | PermissionAlreadyExistsException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteCertificateAuthority(
    input: DeleteCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deletePermission(
    input: DeletePermissionRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidStateException
    | LockoutPreventedException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeCertificateAuthority(
    input: DescribeCertificateAuthorityRequest,
  ): Effect.Effect<
    DescribeCertificateAuthorityResponse,
    InvalidArnException | ResourceNotFoundException | CommonAwsError
  >;
  describeCertificateAuthorityAuditReport(
    input: DescribeCertificateAuthorityAuditReportRequest,
  ): Effect.Effect<
    DescribeCertificateAuthorityAuditReportResponse,
    | InvalidArgsException
    | InvalidArnException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCertificate(
    input: GetCertificateRequest,
  ): Effect.Effect<
    GetCertificateResponse,
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCertificateAuthorityCertificate(
    input: GetCertificateAuthorityCertificateRequest,
  ): Effect.Effect<
    GetCertificateAuthorityCertificateResponse,
    | InvalidArnException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCertificateAuthorityCsr(
    input: GetCertificateAuthorityCsrRequest,
  ): Effect.Effect<
    GetCertificateAuthorityCsrResponse,
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  importCertificateAuthorityCertificate(
    input: ImportCertificateAuthorityCertificateRequest,
  ): Effect.Effect<
    {},
    | CertificateMismatchException
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidRequestException
    | InvalidStateException
    | MalformedCertificateException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  issueCertificate(
    input: IssueCertificateRequest,
  ): Effect.Effect<
    IssueCertificateResponse,
    | InvalidArgsException
    | InvalidArnException
    | InvalidStateException
    | LimitExceededException
    | MalformedCSRException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listCertificateAuthorities(
    input: ListCertificateAuthoritiesRequest,
  ): Effect.Effect<
    ListCertificateAuthoritiesResponse,
    InvalidNextTokenException | CommonAwsError
  >;
  listPermissions(
    input: ListPermissionsRequest,
  ): Effect.Effect<
    ListPermissionsResponse,
    | InvalidArnException
    | InvalidNextTokenException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    | InvalidArnException
    | InvalidStateException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putPolicy(
    input: PutPolicyRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidPolicyException
    | InvalidStateException
    | LockoutPreventedException
    | RequestFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  restoreCertificateAuthority(
    input: RestoreCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  revokeCertificate(
    input: RevokeCertificateRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InvalidArnException
    | InvalidRequestException
    | InvalidStateException
    | LimitExceededException
    | RequestAlreadyProcessedException
    | RequestFailedException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagCertificateAuthority(
    input: TagCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidStateException
    | InvalidTagException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagCertificateAuthority(
    input: UntagCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidStateException
    | InvalidTagException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateCertificateAuthority(
    input: UpdateCertificateAuthorityRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InvalidArgsException
    | InvalidArnException
    | InvalidPolicyException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type AcmPca = ACMPrivateCA;

export interface AccessDescription {
  AccessMethod: AccessMethod;
  AccessLocation: GeneralName;
}
export type AccessDescriptionList = Array<AccessDescription>;
export interface AccessMethod {
  CustomObjectIdentifier?: string;
  AccessMethodType?: AccessMethodType;
}
export type AccessMethodType =
  | "CA_REPOSITORY"
  | "RESOURCE_PKI_MANIFEST"
  | "RESOURCE_PKI_NOTIFY";
export type AccountId = string;

export type ActionList = Array<ActionType>;
export type ActionType =
  | "IssueCertificate"
  | "GetCertificate"
  | "ListPermissions";
export interface ApiPassthrough {
  Extensions?: Extensions;
  Subject?: ASN1Subject;
}
export type Arn = string;

export type ASN1PrintableString64 = string;

export interface ASN1Subject {
  Country?: string;
  Organization?: string;
  OrganizationalUnit?: string;
  DistinguishedNameQualifier?: string;
  State?: string;
  CommonName?: string;
  SerialNumber?: string;
  Locality?: string;
  Title?: string;
  Surname?: string;
  GivenName?: string;
  Initials?: string;
  Pseudonym?: string;
  GenerationQualifier?: string;
  CustomAttributes?: Array<CustomAttribute>;
}
export type AuditReportId = string;

export type AuditReportResponseFormat = "JSON" | "CSV";
export type AuditReportStatus = "CREATING" | "SUCCESS" | "FAILED";
export type AWSPolicy = string;

export type Base64String1To4096 = string;

export type CertificateAuthorities = Array<CertificateAuthority>;
export interface CertificateAuthority {
  Arn?: string;
  OwnerAccount?: string;
  CreatedAt?: Date | string;
  LastStateChangeAt?: Date | string;
  Type?: CertificateAuthorityType;
  Serial?: string;
  Status?: CertificateAuthorityStatus;
  NotBefore?: Date | string;
  NotAfter?: Date | string;
  FailureReason?: FailureReason;
  CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;
  RevocationConfiguration?: RevocationConfiguration;
  RestorableUntil?: Date | string;
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard;
  UsageMode?: CertificateAuthorityUsageMode;
}
export interface CertificateAuthorityConfiguration {
  KeyAlgorithm: KeyAlgorithm;
  SigningAlgorithm: SigningAlgorithm;
  Subject: ASN1Subject;
  CsrExtensions?: CsrExtensions;
}
export type CertificateAuthorityStatus =
  | "CREATING"
  | "PENDING_CERTIFICATE"
  | "ACTIVE"
  | "DELETED"
  | "DISABLED"
  | "EXPIRED"
  | "FAILED";
export type CertificateAuthorityType = "ROOT" | "SUBORDINATE";
export type CertificateAuthorityUsageMode =
  | "GENERAL_PURPOSE"
  | "SHORT_LIVED_CERTIFICATE";
export type CertificateBody = string;

export type CertificateBodyBlob = Uint8Array | string;

export type CertificateChain = string;

export type CertificateChainBlob = Uint8Array | string;

export declare class CertificateMismatchException extends EffectData.TaggedError(
  "CertificateMismatchException",
)<{
  readonly message?: string;
}> {}
export type CertificatePolicyList = Array<PolicyInformation>;
export type CnameString = string;

export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type CountryCodeString = string;

export interface CreateCertificateAuthorityAuditReportRequest {
  CertificateAuthorityArn: string;
  S3BucketName: string;
  AuditReportResponseFormat: AuditReportResponseFormat;
}
export interface CreateCertificateAuthorityAuditReportResponse {
  AuditReportId?: string;
  S3Key?: string;
}
export interface CreateCertificateAuthorityRequest {
  CertificateAuthorityConfiguration: CertificateAuthorityConfiguration;
  RevocationConfiguration?: RevocationConfiguration;
  CertificateAuthorityType: CertificateAuthorityType;
  IdempotencyToken?: string;
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard;
  Tags?: Array<Tag>;
  UsageMode?: CertificateAuthorityUsageMode;
}
export interface CreateCertificateAuthorityResponse {
  CertificateAuthorityArn?: string;
}
export interface CreatePermissionRequest {
  CertificateAuthorityArn: string;
  Principal: string;
  SourceAccount?: string;
  Actions: Array<ActionType>;
}
export interface CrlConfiguration {
  Enabled: boolean;
  ExpirationInDays?: number;
  CustomCname?: string;
  S3BucketName?: string;
  S3ObjectAcl?: S3ObjectAcl;
  CrlDistributionPointExtensionConfiguration?: CrlDistributionPointExtensionConfiguration;
  CrlType?: CrlType;
  CustomPath?: string;
}
export interface CrlDistributionPointExtensionConfiguration {
  OmitExtension: boolean;
}
export type CrlPathString = string;

export type CrlType = "COMPLETE" | "PARTITIONED";
export type CsrBlob = Uint8Array | string;

export type CsrBody = string;

export interface CsrExtensions {
  KeyUsage?: KeyUsage;
  SubjectInformationAccess?: Array<AccessDescription>;
}
export interface CustomAttribute {
  ObjectIdentifier: string;
  Value: string;
}
export type CustomAttributeList = Array<CustomAttribute>;
export interface CustomExtension {
  ObjectIdentifier: string;
  Value: string;
  Critical?: boolean;
}
export type CustomExtensionList = Array<CustomExtension>;
export type CustomObjectIdentifier = string;

export interface DeleteCertificateAuthorityRequest {
  CertificateAuthorityArn: string;
  PermanentDeletionTimeInDays?: number;
}
export interface DeletePermissionRequest {
  CertificateAuthorityArn: string;
  Principal: string;
  SourceAccount?: string;
}
export interface DeletePolicyRequest {
  ResourceArn: string;
}
export interface DescribeCertificateAuthorityAuditReportRequest {
  CertificateAuthorityArn: string;
  AuditReportId: string;
}
export interface DescribeCertificateAuthorityAuditReportResponse {
  AuditReportStatus?: AuditReportStatus;
  S3BucketName?: string;
  S3Key?: string;
  CreatedAt?: Date | string;
}
export interface DescribeCertificateAuthorityRequest {
  CertificateAuthorityArn: string;
}
export interface DescribeCertificateAuthorityResponse {
  CertificateAuthority?: CertificateAuthority;
}
export interface EdiPartyName {
  PartyName: string;
  NameAssigner?: string;
}
export interface ExtendedKeyUsage {
  ExtendedKeyUsageType?: ExtendedKeyUsageType;
  ExtendedKeyUsageObjectIdentifier?: string;
}
export type ExtendedKeyUsageList = Array<ExtendedKeyUsage>;
export type ExtendedKeyUsageType =
  | "SERVER_AUTH"
  | "CLIENT_AUTH"
  | "CODE_SIGNING"
  | "EMAIL_PROTECTION"
  | "TIME_STAMPING"
  | "OCSP_SIGNING"
  | "SMART_CARD_LOGIN"
  | "DOCUMENT_SIGNING"
  | "CERTIFICATE_TRANSPARENCY";
export interface Extensions {
  CertificatePolicies?: Array<PolicyInformation>;
  ExtendedKeyUsage?: Array<ExtendedKeyUsage>;
  KeyUsage?: KeyUsage;
  SubjectAlternativeNames?: Array<GeneralName>;
  CustomExtensions?: Array<CustomExtension>;
}
export type FailureReason =
  | "REQUEST_TIMED_OUT"
  | "UNSUPPORTED_ALGORITHM"
  | "OTHER";
export interface GeneralName {
  OtherName?: OtherName;
  Rfc822Name?: string;
  DnsName?: string;
  DirectoryName?: ASN1Subject;
  EdiPartyName?: EdiPartyName;
  UniformResourceIdentifier?: string;
  IpAddress?: string;
  RegisteredId?: string;
}
export type GeneralNameList = Array<GeneralName>;
export interface GetCertificateAuthorityCertificateRequest {
  CertificateAuthorityArn: string;
}
export interface GetCertificateAuthorityCertificateResponse {
  Certificate?: string;
  CertificateChain?: string;
}
export interface GetCertificateAuthorityCsrRequest {
  CertificateAuthorityArn: string;
}
export interface GetCertificateAuthorityCsrResponse {
  Csr?: string;
}
export interface GetCertificateRequest {
  CertificateAuthorityArn: string;
  CertificateArn: string;
}
export interface GetCertificateResponse {
  Certificate?: string;
  CertificateChain?: string;
}
export interface GetPolicyRequest {
  ResourceArn: string;
}
export interface GetPolicyResponse {
  Policy?: string;
}
export type IdempotencyToken = string;

export interface ImportCertificateAuthorityCertificateRequest {
  CertificateAuthorityArn: string;
  Certificate: Uint8Array | string;
  CertificateChain?: Uint8Array | string;
}
export type Integer1To5000 = number;

export declare class InvalidArgsException extends EffectData.TaggedError(
  "InvalidArgsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidArnException extends EffectData.TaggedError(
  "InvalidArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPolicyException extends EffectData.TaggedError(
  "InvalidPolicyException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagException extends EffectData.TaggedError(
  "InvalidTagException",
)<{
  readonly message?: string;
}> {}
export interface IssueCertificateRequest {
  ApiPassthrough?: ApiPassthrough;
  CertificateAuthorityArn: string;
  Csr: Uint8Array | string;
  SigningAlgorithm: SigningAlgorithm;
  TemplateArn?: string;
  Validity: Validity;
  ValidityNotBefore?: Validity;
  IdempotencyToken?: string;
}
export interface IssueCertificateResponse {
  CertificateArn?: string;
}
export type KeyAlgorithm =
  | "RSA_2048"
  | "RSA_3072"
  | "RSA_4096"
  | "EC_prime256v1"
  | "EC_secp384r1"
  | "EC_secp521r1"
  | "SM2";
export type KeyStorageSecurityStandard =
  | "FIPS_140_2_LEVEL_2_OR_HIGHER"
  | "FIPS_140_2_LEVEL_3_OR_HIGHER"
  | "CCPC_LEVEL_1_OR_HIGHER";
export interface KeyUsage {
  DigitalSignature?: boolean;
  NonRepudiation?: boolean;
  KeyEncipherment?: boolean;
  DataEncipherment?: boolean;
  KeyAgreement?: boolean;
  KeyCertSign?: boolean;
  CRLSign?: boolean;
  EncipherOnly?: boolean;
  DecipherOnly?: boolean;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListCertificateAuthoritiesRequest {
  MaxResults?: number;
  NextToken?: string;
  ResourceOwner?: ResourceOwner;
}
export interface ListCertificateAuthoritiesResponse {
  NextToken?: string;
  CertificateAuthorities?: Array<CertificateAuthority>;
}
export interface ListPermissionsRequest {
  MaxResults?: number;
  NextToken?: string;
  CertificateAuthorityArn: string;
}
export interface ListPermissionsResponse {
  NextToken?: string;
  Permissions?: Array<Permission>;
}
export interface ListTagsRequest {
  MaxResults?: number;
  NextToken?: string;
  CertificateAuthorityArn: string;
}
export interface ListTagsResponse {
  NextToken?: string;
  Tags?: Array<Tag>;
}
export declare class LockoutPreventedException extends EffectData.TaggedError(
  "LockoutPreventedException",
)<{
  readonly message?: string;
}> {}
export declare class MalformedCertificateException extends EffectData.TaggedError(
  "MalformedCertificateException",
)<{
  readonly message?: string;
}> {}
export declare class MalformedCSRException extends EffectData.TaggedError(
  "MalformedCSRException",
)<{
  readonly message?: string;
}> {}
export type MaxResults = number;

export type NextToken = string;

export interface OcspConfiguration {
  Enabled: boolean;
  OcspCustomCname?: string;
}
export interface OtherName {
  TypeId: string;
  Value: string;
}
export type PermanentDeletionTimeInDays = number;

export interface Permission {
  CertificateAuthorityArn?: string;
  CreatedAt?: Date | string;
  Principal?: string;
  SourceAccount?: string;
  Actions?: Array<ActionType>;
  Policy?: string;
}
export declare class PermissionAlreadyExistsException extends EffectData.TaggedError(
  "PermissionAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type PermissionList = Array<Permission>;
export interface PolicyInformation {
  CertPolicyId: string;
  PolicyQualifiers?: Array<PolicyQualifierInfo>;
}
export type PolicyQualifierId = "CPS";
export interface PolicyQualifierInfo {
  PolicyQualifierId: PolicyQualifierId;
  Qualifier: Qualifier;
}
export type PolicyQualifierInfoList = Array<PolicyQualifierInfo>;
export type PositiveLong = number;

export type Principal = string;

export interface PutPolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface Qualifier {
  CpsUri: string;
}
export declare class RequestAlreadyProcessedException extends EffectData.TaggedError(
  "RequestAlreadyProcessedException",
)<{
  readonly message?: string;
}> {}
export declare class RequestFailedException extends EffectData.TaggedError(
  "RequestFailedException",
)<{
  readonly message?: string;
}> {}
export declare class RequestInProgressException extends EffectData.TaggedError(
  "RequestInProgressException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceOwner = "SELF" | "OTHER_ACCOUNTS";
export interface RestoreCertificateAuthorityRequest {
  CertificateAuthorityArn: string;
}
export interface RevocationConfiguration {
  CrlConfiguration?: CrlConfiguration;
  OcspConfiguration?: OcspConfiguration;
}
export type RevocationReason =
  | "UNSPECIFIED"
  | "KEY_COMPROMISE"
  | "CERTIFICATE_AUTHORITY_COMPROMISE"
  | "AFFILIATION_CHANGED"
  | "SUPERSEDED"
  | "CESSATION_OF_OPERATION"
  | "PRIVILEGE_WITHDRAWN"
  | "A_A_COMPROMISE";
export interface RevokeCertificateRequest {
  CertificateAuthorityArn: string;
  CertificateSerial: string;
  RevocationReason: RevocationReason;
}
export type S3BucketName = string;

export type S3BucketName3To255 = string;

export type S3Key = string;

export type S3ObjectAcl = "PUBLIC_READ" | "BUCKET_OWNER_FULL_CONTROL";
export type SigningAlgorithm =
  | "SHA256WITHECDSA"
  | "SHA384WITHECDSA"
  | "SHA512WITHECDSA"
  | "SHA256WITHRSA"
  | "SHA384WITHRSA"
  | "SHA512WITHRSA"
  | "SM3WITHSM2";
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
  Key: string;
  Value?: string;
}
export interface TagCertificateAuthorityRequest {
  CertificateAuthorityArn: string;
  Tags: Array<Tag>;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export type TagValue = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export type TStamp = Date | string;

export interface UntagCertificateAuthorityRequest {
  CertificateAuthorityArn: string;
  Tags: Array<Tag>;
}
export interface UpdateCertificateAuthorityRequest {
  CertificateAuthorityArn: string;
  RevocationConfiguration?: RevocationConfiguration;
  Status?: CertificateAuthorityStatus;
}
export interface Validity {
  Value: number;
  Type: ValidityPeriodType;
}
export type ValidityPeriodType =
  | "END_DATE"
  | "ABSOLUTE"
  | "DAYS"
  | "MONTHS"
  | "YEARS";
export declare namespace CreateCertificateAuthority {
  export type Input = CreateCertificateAuthorityRequest;
  export type Output = CreateCertificateAuthorityResponse;
  export type Error =
    | InvalidArgsException
    | InvalidPolicyException
    | InvalidTagException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateCertificateAuthorityAuditReport {
  export type Input = CreateCertificateAuthorityAuditReportRequest;
  export type Output = CreateCertificateAuthorityAuditReportResponse;
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
  export type Output = DescribeCertificateAuthorityResponse;
  export type Error =
    | InvalidArnException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCertificateAuthorityAuditReport {
  export type Input = DescribeCertificateAuthorityAuditReportRequest;
  export type Output = DescribeCertificateAuthorityAuditReportResponse;
  export type Error =
    | InvalidArgsException
    | InvalidArnException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCertificate {
  export type Input = GetCertificateRequest;
  export type Output = GetCertificateResponse;
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
  export type Output = GetCertificateAuthorityCertificateResponse;
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCertificateAuthorityCsr {
  export type Input = GetCertificateAuthorityCsrRequest;
  export type Output = GetCertificateAuthorityCsrResponse;
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
  export type Output = GetPolicyResponse;
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
  export type Output = IssueCertificateResponse;
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
  export type Output = ListCertificateAuthoritiesResponse;
  export type Error = InvalidNextTokenException | CommonAwsError;
}

export declare namespace ListPermissions {
  export type Input = ListPermissionsRequest;
  export type Output = ListPermissionsResponse;
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
  export type Output = ListTagsResponse;
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
