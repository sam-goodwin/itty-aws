import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class ACM extends AWSServiceClient {
  addTagsToCertificate(
    input: AddTagsToCertificateRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidParameterException
    | InvalidTagException
    | ResourceNotFoundException
    | TagPolicyException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError
  >;
  deleteCertificate(
    input: DeleteCertificateRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InvalidArnException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeCertificate(
    input: DescribeCertificateRequest,
  ): Effect.Effect<
    DescribeCertificateResponse,
    InvalidArnException | ResourceNotFoundException | CommonAwsError
  >;
  exportCertificate(
    input: ExportCertificateRequest,
  ): Effect.Effect<
    ExportCertificateResponse,
    | InvalidArnException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getAccountConfiguration(input: {}): Effect.Effect<
    GetAccountConfigurationResponse,
    AccessDeniedException | ThrottlingException | CommonAwsError
  >;
  getCertificate(
    input: GetCertificateRequest,
  ): Effect.Effect<
    GetCertificateResponse,
    | InvalidArnException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  importCertificate(
    input: ImportCertificateRequest,
  ): Effect.Effect<
    ImportCertificateResponse,
    | InvalidArnException
    | InvalidParameterException
    | InvalidTagException
    | LimitExceededException
    | ResourceNotFoundException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError
  >;
  listCertificates(
    input: ListCertificatesRequest,
  ): Effect.Effect<
    ListCertificatesResponse,
    InvalidArgsException | ValidationException | CommonAwsError
  >;
  listTagsForCertificate(
    input: ListTagsForCertificateRequest,
  ): Effect.Effect<
    ListTagsForCertificateResponse,
    InvalidArnException | ResourceNotFoundException | CommonAwsError
  >;
  putAccountConfiguration(
    input: PutAccountConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  removeTagsFromCertificate(
    input: RemoveTagsFromCertificateRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidParameterException
    | InvalidTagException
    | ResourceNotFoundException
    | TagPolicyException
    | ThrottlingException
    | CommonAwsError
  >;
  renewCertificate(
    input: RenewCertificateRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  requestCertificate(
    input: RequestCertificateRequest,
  ): Effect.Effect<
    RequestCertificateResponse,
    | InvalidArnException
    | InvalidDomainValidationOptionsException
    | InvalidParameterException
    | InvalidTagException
    | LimitExceededException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError
  >;
  resendValidationEmail(
    input: ResendValidationEmailRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidDomainValidationOptionsException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  revokeCertificate(
    input: RevokeCertificateRequest,
  ): Effect.Effect<
    RevokeCertificateResponse,
    | AccessDeniedException
    | ConflictException
    | InvalidArnException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateCertificateOptions(
    input: UpdateCertificateOptionsRequest,
  ): Effect.Effect<
    {},
    | InvalidArnException
    | InvalidStateException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export declare class Acm extends ACM {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AddTagsToCertificateRequest {
  CertificateArn: string;
  Tags: Array<Tag>;
}
export type Arn = string;

export type AvailabilityErrorMessage = string;

export type CertificateBody = string;

export type CertificateBodyBlob = Uint8Array | string;

export type CertificateChain = string;

export type CertificateChainBlob = Uint8Array | string;

export interface CertificateDetail {
  CertificateArn?: string;
  DomainName?: string;
  SubjectAlternativeNames?: Array<string>;
  ManagedBy?: CertificateManagedBy;
  DomainValidationOptions?: Array<DomainValidation>;
  Serial?: string;
  Subject?: string;
  Issuer?: string;
  CreatedAt?: Date | string;
  IssuedAt?: Date | string;
  ImportedAt?: Date | string;
  Status?: CertificateStatus;
  RevokedAt?: Date | string;
  RevocationReason?: RevocationReason;
  NotBefore?: Date | string;
  NotAfter?: Date | string;
  KeyAlgorithm?: KeyAlgorithm;
  SignatureAlgorithm?: string;
  InUseBy?: Array<string>;
  FailureReason?: FailureReason;
  Type?: CertificateType;
  RenewalSummary?: RenewalSummary;
  KeyUsages?: Array<KeyUsage>;
  ExtendedKeyUsages?: Array<ExtendedKeyUsage>;
  CertificateAuthorityArn?: string;
  RenewalEligibility?: RenewalEligibility;
  Options?: CertificateOptions;
}
export type CertificateExport = "ENABLED" | "DISABLED";
export type CertificateManagedBy = "CLOUDFRONT";
export interface CertificateOptions {
  CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference;
  Export?: CertificateExport;
}
export type CertificateStatus =
  | "PENDING_VALIDATION"
  | "ISSUED"
  | "INACTIVE"
  | "EXPIRED"
  | "VALIDATION_TIMED_OUT"
  | "REVOKED"
  | "FAILED";
export type CertificateStatuses = Array<CertificateStatus>;
export interface CertificateSummary {
  CertificateArn?: string;
  DomainName?: string;
  SubjectAlternativeNameSummaries?: Array<string>;
  HasAdditionalSubjectAlternativeNames?: boolean;
  Status?: CertificateStatus;
  Type?: CertificateType;
  KeyAlgorithm?: KeyAlgorithm;
  KeyUsages?: Array<KeyUsageName>;
  ExtendedKeyUsages?: Array<ExtendedKeyUsageName>;
  ExportOption?: CertificateExport;
  InUse?: boolean;
  Exported?: boolean;
  RenewalEligibility?: RenewalEligibility;
  NotBefore?: Date | string;
  NotAfter?: Date | string;
  CreatedAt?: Date | string;
  IssuedAt?: Date | string;
  ImportedAt?: Date | string;
  RevokedAt?: Date | string;
  ManagedBy?: CertificateManagedBy;
}
export type CertificateSummaryList = Array<CertificateSummary>;
export type CertificateTransparencyLoggingPreference = "ENABLED" | "DISABLED";
export type CertificateType = "IMPORTED" | "AMAZON_ISSUED" | "PRIVATE";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface DeleteCertificateRequest {
  CertificateArn: string;
}
export interface DescribeCertificateRequest {
  CertificateArn: string;
}
export interface DescribeCertificateResponse {
  Certificate?: CertificateDetail;
}
export type DomainList = Array<string>;
export type DomainNameString = string;

export type DomainStatus = "PENDING_VALIDATION" | "SUCCESS" | "FAILED";
export interface DomainValidation {
  DomainName: string;
  ValidationEmails?: Array<string>;
  ValidationDomain?: string;
  ValidationStatus?: DomainStatus;
  ResourceRecord?: ResourceRecord;
  HttpRedirect?: HttpRedirect;
  ValidationMethod?: ValidationMethod;
}
export type DomainValidationList = Array<DomainValidation>;
export interface DomainValidationOption {
  DomainName: string;
  ValidationDomain: string;
}
export type DomainValidationOptionList = Array<DomainValidationOption>;
export interface ExpiryEventsConfiguration {
  DaysBeforeExpiry?: number;
}
export interface ExportCertificateRequest {
  CertificateArn: string;
  Passphrase: Uint8Array | string;
}
export interface ExportCertificateResponse {
  Certificate?: string;
  CertificateChain?: string;
  PrivateKey?: string;
}
export interface ExtendedKeyUsage {
  Name?: ExtendedKeyUsageName;
  OID?: string;
}
export type ExtendedKeyUsageFilterList = Array<ExtendedKeyUsageName>;
export type ExtendedKeyUsageList = Array<ExtendedKeyUsage>;
export type ExtendedKeyUsageName =
  | "TLS_WEB_SERVER_AUTHENTICATION"
  | "TLS_WEB_CLIENT_AUTHENTICATION"
  | "CODE_SIGNING"
  | "EMAIL_PROTECTION"
  | "TIME_STAMPING"
  | "OCSP_SIGNING"
  | "IPSEC_END_SYSTEM"
  | "IPSEC_TUNNEL"
  | "IPSEC_USER"
  | "ANY"
  | "NONE"
  | "CUSTOM";
export type ExtendedKeyUsageNames = Array<ExtendedKeyUsageName>;
export type FailureReason =
  | "NO_AVAILABLE_CONTACTS"
  | "ADDITIONAL_VERIFICATION_REQUIRED"
  | "DOMAIN_NOT_ALLOWED"
  | "INVALID_PUBLIC_DOMAIN"
  | "DOMAIN_VALIDATION_DENIED"
  | "CAA_ERROR"
  | "PCA_LIMIT_EXCEEDED"
  | "PCA_INVALID_ARN"
  | "PCA_INVALID_STATE"
  | "PCA_REQUEST_FAILED"
  | "PCA_NAME_CONSTRAINTS_VALIDATION"
  | "PCA_RESOURCE_NOT_FOUND"
  | "PCA_INVALID_ARGS"
  | "PCA_INVALID_DURATION"
  | "PCA_ACCESS_DENIED"
  | "SLR_NOT_FOUND"
  | "OTHER";
export interface Filters {
  extendedKeyUsage?: Array<ExtendedKeyUsageName>;
  keyUsage?: Array<KeyUsageName>;
  keyTypes?: Array<KeyAlgorithm>;
  exportOption?: CertificateExport;
  managedBy?: CertificateManagedBy;
}
export interface GetAccountConfigurationResponse {
  ExpiryEvents?: ExpiryEventsConfiguration;
}
export interface GetCertificateRequest {
  CertificateArn: string;
}
export interface GetCertificateResponse {
  Certificate?: string;
  CertificateChain?: string;
}
export interface HttpRedirect {
  RedirectFrom?: string;
  RedirectTo?: string;
}
export type IdempotencyToken = string;

export interface ImportCertificateRequest {
  CertificateArn?: string;
  Certificate: Uint8Array | string;
  PrivateKey: Uint8Array | string;
  CertificateChain?: Uint8Array | string;
  Tags?: Array<Tag>;
}
export interface ImportCertificateResponse {
  CertificateArn?: string;
}
export type InUseList = Array<string>;
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
export declare class InvalidDomainValidationOptionsException extends EffectData.TaggedError(
  "InvalidDomainValidationOptionsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
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
export type KeyAlgorithm =
  | "RSA_1024"
  | "RSA_2048"
  | "RSA_3072"
  | "RSA_4096"
  | "EC_prime256v1"
  | "EC_secp384r1"
  | "EC_secp521r1";
export type KeyAlgorithmList = Array<KeyAlgorithm>;
export interface KeyUsage {
  Name?: KeyUsageName;
}
export type KeyUsageFilterList = Array<KeyUsageName>;
export type KeyUsageList = Array<KeyUsage>;
export type KeyUsageName =
  | "DIGITAL_SIGNATURE"
  | "NON_REPUDATION"
  | "KEY_ENCIPHERMENT"
  | "DATA_ENCIPHERMENT"
  | "KEY_AGREEMENT"
  | "CERTIFICATE_SIGNING"
  | "CRL_SIGNING"
  | "ENCHIPER_ONLY"
  | "DECIPHER_ONLY"
  | "ANY"
  | "CUSTOM";
export type KeyUsageNames = Array<KeyUsageName>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListCertificatesRequest {
  CertificateStatuses?: Array<CertificateStatus>;
  Includes?: Filters;
  NextToken?: string;
  MaxItems?: number;
  SortBy?: SortBy;
  SortOrder?: SortOrder;
}
export interface ListCertificatesResponse {
  NextToken?: string;
  CertificateSummaryList?: Array<CertificateSummary>;
}
export interface ListTagsForCertificateRequest {
  CertificateArn: string;
}
export interface ListTagsForCertificateResponse {
  Tags?: Array<Tag>;
}
export type MaxItems = number;

export type NextToken = string;

export type NullableBoolean = boolean;

export type PassphraseBlob = Uint8Array | string;

export type PcaArn = string;

export type PositiveInteger = number;

export type PrivateKey = string;

export type PrivateKeyBlob = Uint8Array | string;

export interface PutAccountConfigurationRequest {
  ExpiryEvents?: ExpiryEventsConfiguration;
  IdempotencyToken: string;
}
export type RecordType = "CNAME";
export interface RemoveTagsFromCertificateRequest {
  CertificateArn: string;
  Tags: Array<Tag>;
}
export type RenewalEligibility = "ELIGIBLE" | "INELIGIBLE";
export type RenewalStatus =
  | "PENDING_AUTO_RENEWAL"
  | "PENDING_VALIDATION"
  | "SUCCESS"
  | "FAILED";
export interface RenewalSummary {
  RenewalStatus: RenewalStatus;
  DomainValidationOptions: Array<DomainValidation>;
  RenewalStatusReason?: FailureReason;
  UpdatedAt: Date | string;
}
export interface RenewCertificateRequest {
  CertificateArn: string;
}
export interface RequestCertificateRequest {
  DomainName: string;
  ValidationMethod?: ValidationMethod;
  SubjectAlternativeNames?: Array<string>;
  IdempotencyToken?: string;
  DomainValidationOptions?: Array<DomainValidationOption>;
  Options?: CertificateOptions;
  CertificateAuthorityArn?: string;
  Tags?: Array<Tag>;
  KeyAlgorithm?: KeyAlgorithm;
  ManagedBy?: CertificateManagedBy;
}
export interface RequestCertificateResponse {
  CertificateArn?: string;
}
export declare class RequestInProgressException extends EffectData.TaggedError(
  "RequestInProgressException",
)<{
  readonly message?: string;
}> {}
export interface ResendValidationEmailRequest {
  CertificateArn: string;
  Domain: string;
  ValidationDomain: string;
}
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ResourceRecord {
  Name: string;
  Type: RecordType;
  Value: string;
}
export type RevocationReason =
  | "UNSPECIFIED"
  | "KEY_COMPROMISE"
  | "CA_COMPROMISE"
  | "AFFILIATION_CHANGED"
  | "SUPERCEDED"
  | "SUPERSEDED"
  | "CESSATION_OF_OPERATION"
  | "CERTIFICATE_HOLD"
  | "REMOVE_FROM_CRL"
  | "PRIVILEGE_WITHDRAWN"
  | "A_A_COMPROMISE";
export interface RevokeCertificateRequest {
  CertificateArn: string;
  RevocationReason: RevocationReason;
}
export interface RevokeCertificateResponse {
  CertificateArn?: string;
}
export type ServiceErrorMessage = string;

export type SortBy = "CREATED_AT";
export type SortOrder = "ASCENDING" | "DESCENDING";
export type AcmString = string;

export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export declare class TagPolicyException extends EffectData.TaggedError(
  "TagPolicyException",
)<{
  readonly message?: string;
}> {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export type TStamp = Date | string;

export interface UpdateCertificateOptionsRequest {
  CertificateArn: string;
  Options: CertificateOptions;
}
export type ValidationEmailList = Array<string>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ValidationExceptionMessage = string;

export type ValidationMethod = "EMAIL" | "DNS" | "HTTP";
export declare namespace AddTagsToCertificate {
  export type Input = AddTagsToCertificateRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidParameterException
    | InvalidTagException
    | ResourceNotFoundException
    | TagPolicyException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace DeleteCertificate {
  export type Input = DeleteCertificateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InvalidArnException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeCertificate {
  export type Input = DescribeCertificateRequest;
  export type Output = DescribeCertificateResponse;
  export type Error =
    | InvalidArnException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ExportCertificate {
  export type Input = ExportCertificateRequest;
  export type Output = ExportCertificateResponse;
  export type Error =
    | InvalidArnException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAccountConfiguration {
  export type Input = {};
  export type Output = GetAccountConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetCertificate {
  export type Input = GetCertificateRequest;
  export type Output = GetCertificateResponse;
  export type Error =
    | InvalidArnException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ImportCertificate {
  export type Input = ImportCertificateRequest;
  export type Output = ImportCertificateResponse;
  export type Error =
    | InvalidArnException
    | InvalidParameterException
    | InvalidTagException
    | LimitExceededException
    | ResourceNotFoundException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace ListCertificates {
  export type Input = ListCertificatesRequest;
  export type Output = ListCertificatesResponse;
  export type Error =
    | InvalidArgsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForCertificate {
  export type Input = ListTagsForCertificateRequest;
  export type Output = ListTagsForCertificateResponse;
  export type Error =
    | InvalidArnException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutAccountConfiguration {
  export type Input = PutAccountConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveTagsFromCertificate {
  export type Input = RemoveTagsFromCertificateRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidParameterException
    | InvalidTagException
    | ResourceNotFoundException
    | TagPolicyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RenewCertificate {
  export type Input = RenewCertificateRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | RequestInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RequestCertificate {
  export type Input = RequestCertificateRequest;
  export type Output = RequestCertificateResponse;
  export type Error =
    | InvalidArnException
    | InvalidDomainValidationOptionsException
    | InvalidParameterException
    | InvalidTagException
    | LimitExceededException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace ResendValidationEmail {
  export type Input = ResendValidationEmailRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidDomainValidationOptionsException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RevokeCertificate {
  export type Input = RevokeCertificateRequest;
  export type Output = RevokeCertificateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InvalidArnException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateCertificateOptions {
  export type Input = UpdateCertificateOptionsRequest;
  export type Output = {};
  export type Error =
    | InvalidArnException
    | InvalidStateException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}
