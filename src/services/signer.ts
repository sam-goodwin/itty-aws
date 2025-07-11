import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface WallabyService {
  addProfilePermission(
    input: AddProfilePermissionRequest,
  ): Effect.Effect<
    AddProfilePermissionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  cancelSigningProfile(
    input: CancelSigningProfileRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeSigningJob(
    input: DescribeSigningJobRequest,
  ): Effect.Effect<
    DescribeSigningJobResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getRevocationStatus(
    input: GetRevocationStatusRequest,
  ): Effect.Effect<
    GetRevocationStatusResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getSigningPlatform(
    input: GetSigningPlatformRequest,
  ): Effect.Effect<
    GetSigningPlatformResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSigningProfile(
    input: GetSigningProfileRequest,
  ): Effect.Effect<
    GetSigningProfileResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listProfilePermissions(
    input: ListProfilePermissionsRequest,
  ): Effect.Effect<
    ListProfilePermissionsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listSigningJobs(
    input: ListSigningJobsRequest,
  ): Effect.Effect<
    ListSigningJobsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listSigningPlatforms(
    input: ListSigningPlatformsRequest,
  ): Effect.Effect<
    ListSigningPlatformsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listSigningProfiles(
    input: ListSigningProfilesRequest,
  ): Effect.Effect<
    ListSigningProfilesResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putSigningProfile(
    input: PutSigningProfileRequest,
  ): Effect.Effect<
    PutSigningProfileResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  removeProfilePermission(
    input: RemoveProfilePermissionRequest,
  ): Effect.Effect<
    RemoveProfilePermissionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  revokeSignature(
    input: RevokeSignatureRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  revokeSigningProfile(
    input: RevokeSigningProfileRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  signPayload(
    input: SignPayloadRequest,
  ): Effect.Effect<
    SignPayloadResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  startSigningJob(
    input: StartSigningJobRequest,
  ): Effect.Effect<
    StartSigningJobResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type Signer = WallabyService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type AccountId = string;

export interface AddProfilePermissionRequest {
  profileName: string;
  profileVersion?: string;
  action: string;
  principal: string;
  revisionId?: string;
  statementId: string;
}
export interface AddProfilePermissionResponse {
  revisionId?: string;
}
export type Arn = string;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type Blob = Uint8Array | string;

export type bool = boolean;

export type BucketName = string;

export interface CancelSigningProfileRequest {
  profileName: string;
}
export type Category = "AWSIoT";
export type CertificateArn = string;

export type CertificateHashes = Array<string>;
export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export interface DescribeSigningJobRequest {
  jobId: string;
}
export interface DescribeSigningJobResponse {
  jobId?: string;
  source?: Source;
  signingMaterial?: SigningMaterial;
  platformId?: string;
  platformDisplayName?: string;
  profileName?: string;
  profileVersion?: string;
  overrides?: SigningPlatformOverrides;
  signingParameters?: Record<string, string>;
  createdAt?: Date | string;
  completedAt?: Date | string;
  signatureExpiresAt?: Date | string;
  requestedBy?: string;
  status?: SigningStatus;
  statusReason?: string;
  revocationRecord?: SigningJobRevocationRecord;
  signedObject?: SignedObject;
  jobOwner?: string;
  jobInvoker?: string;
}
export interface Destination {
  s3?: S3Destination;
}
export type DisplayName = string;

export type EncryptionAlgorithm = "RSA" | "ECDSA";
export interface EncryptionAlgorithmOptions {
  allowedValues: Array<EncryptionAlgorithm>;
  defaultValue: EncryptionAlgorithm;
}
export type EncryptionAlgorithms = Array<EncryptionAlgorithm>;
export type ErrorCode = string;

export type ErrorMessage = string;

export interface GetRevocationStatusRequest {
  signatureTimestamp: Date | string;
  platformId: string;
  profileVersionArn: string;
  jobArn: string;
  certificateHashes: Array<string>;
}
export interface GetRevocationStatusResponse {
  revokedEntities?: Array<string>;
}
export interface GetSigningPlatformRequest {
  platformId: string;
}
export interface GetSigningPlatformResponse {
  platformId?: string;
  displayName?: string;
  partner?: string;
  target?: string;
  category?: Category;
  signingConfiguration?: SigningConfiguration;
  signingImageFormat?: SigningImageFormat;
  maxSizeInMB?: number;
  revocationSupported?: boolean;
}
export interface GetSigningProfileRequest {
  profileName: string;
  profileOwner?: string;
}
export interface GetSigningProfileResponse {
  profileName?: string;
  profileVersion?: string;
  profileVersionArn?: string;
  revocationRecord?: SigningProfileRevocationRecord;
  signingMaterial?: SigningMaterial;
  platformId?: string;
  platformDisplayName?: string;
  signatureValidityPeriod?: SignatureValidityPeriod;
  overrides?: SigningPlatformOverrides;
  signingParameters?: Record<string, string>;
  status?: SigningProfileStatus;
  statusReason?: string;
  arn?: string;
  tags?: Record<string, string>;
}
export type HashAlgorithm = "SHA1" | "SHA256";
export interface HashAlgorithmOptions {
  allowedValues: Array<HashAlgorithm>;
  defaultValue: HashAlgorithm;
}
export type HashAlgorithms = Array<HashAlgorithm>;
export type ImageFormat = "JSON" | "JSONEmbedded" | "JSONDetached";
export type ImageFormats = Array<ImageFormat>;
export type Integer = number;

export declare class InternalServiceErrorException extends EffectData.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type JobId = string;

export type Key = string;

export interface ListProfilePermissionsRequest {
  profileName: string;
  nextToken?: string;
}
export interface ListProfilePermissionsResponse {
  revisionId?: string;
  policySizeBytes?: number;
  permissions?: Array<Permission>;
  nextToken?: string;
}
export interface ListSigningJobsRequest {
  status?: SigningStatus;
  platformId?: string;
  requestedBy?: string;
  maxResults?: number;
  nextToken?: string;
  isRevoked?: boolean;
  signatureExpiresBefore?: Date | string;
  signatureExpiresAfter?: Date | string;
  jobInvoker?: string;
}
export interface ListSigningJobsResponse {
  jobs?: Array<SigningJob>;
  nextToken?: string;
}
export interface ListSigningPlatformsRequest {
  category?: string;
  partner?: string;
  target?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSigningPlatformsResponse {
  platforms?: Array<SigningPlatform>;
  nextToken?: string;
}
export interface ListSigningProfilesRequest {
  includeCanceled?: boolean;
  maxResults?: number;
  nextToken?: string;
  platformId?: string;
  statuses?: Array<SigningProfileStatus>;
}
export interface ListSigningProfilesResponse {
  profiles?: Array<SigningProfile>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export type MaxSizeInMB = number;

export type Metadata = Record<string, string>;
export type NextToken = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type Payload = Uint8Array | string;

export interface Permission {
  action?: string;
  principal?: string;
  statementId?: string;
  profileVersion?: string;
}
export type Permissions = Array<Permission>;
export type PlatformId = string;

export type PolicySizeBytes = number;

export type Prefix = string;

export type ProfileName = string;

export type ProfileVersion = string;

export interface PutSigningProfileRequest {
  profileName: string;
  signingMaterial?: SigningMaterial;
  signatureValidityPeriod?: SignatureValidityPeriod;
  platformId: string;
  overrides?: SigningPlatformOverrides;
  signingParameters?: Record<string, string>;
  tags?: Record<string, string>;
}
export interface PutSigningProfileResponse {
  arn?: string;
  profileVersion?: string;
  profileVersionArn?: string;
}
export interface RemoveProfilePermissionRequest {
  profileName: string;
  revisionId: string;
  statementId: string;
}
export interface RemoveProfilePermissionResponse {
  revisionId?: string;
}
export type RequestedBy = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type RevocationReasonString = string;

export type RevokedEntities = Array<string>;
export interface RevokeSignatureRequest {
  jobId: string;
  jobOwner?: string;
  reason: string;
}
export interface RevokeSigningProfileRequest {
  profileName: string;
  profileVersion: string;
  reason: string;
  effectiveTime: Date | string;
}
export interface S3Destination {
  bucketName?: string;
  prefix?: string;
}
export interface S3SignedObject {
  bucketName?: string;
  key?: string;
}
export interface S3Source {
  bucketName: string;
  key: string;
  version: string;
}
export declare class ServiceLimitExceededException extends EffectData.TaggedError(
  "ServiceLimitExceededException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export interface SignatureValidityPeriod {
  value?: number;
  type?: ValidityType;
}
export interface SignedObject {
  s3?: S3SignedObject;
}
export interface SigningConfiguration {
  encryptionAlgorithmOptions: EncryptionAlgorithmOptions;
  hashAlgorithmOptions: HashAlgorithmOptions;
}
export interface SigningConfigurationOverrides {
  encryptionAlgorithm?: EncryptionAlgorithm;
  hashAlgorithm?: HashAlgorithm;
}
export interface SigningImageFormat {
  supportedFormats: Array<ImageFormat>;
  defaultFormat: ImageFormat;
}
export interface SigningJob {
  jobId?: string;
  source?: Source;
  signedObject?: SignedObject;
  signingMaterial?: SigningMaterial;
  createdAt?: Date | string;
  status?: SigningStatus;
  isRevoked?: boolean;
  profileName?: string;
  profileVersion?: string;
  platformId?: string;
  platformDisplayName?: string;
  signatureExpiresAt?: Date | string;
  jobOwner?: string;
  jobInvoker?: string;
}
export interface SigningJobRevocationRecord {
  reason?: string;
  revokedAt?: Date | string;
  revokedBy?: string;
}
export type SigningJobs = Array<SigningJob>;
export interface SigningMaterial {
  certificateArn: string;
}
export type SigningParameterKey = string;

export type SigningParameters = Record<string, string>;
export type SigningParameterValue = string;

export interface SigningPlatform {
  platformId?: string;
  displayName?: string;
  partner?: string;
  target?: string;
  category?: Category;
  signingConfiguration?: SigningConfiguration;
  signingImageFormat?: SigningImageFormat;
  maxSizeInMB?: number;
  revocationSupported?: boolean;
}
export interface SigningPlatformOverrides {
  signingConfiguration?: SigningConfigurationOverrides;
  signingImageFormat?: ImageFormat;
}
export type SigningPlatforms = Array<SigningPlatform>;
export interface SigningProfile {
  profileName?: string;
  profileVersion?: string;
  profileVersionArn?: string;
  signingMaterial?: SigningMaterial;
  signatureValidityPeriod?: SignatureValidityPeriod;
  platformId?: string;
  platformDisplayName?: string;
  signingParameters?: Record<string, string>;
  status?: SigningProfileStatus;
  arn?: string;
  tags?: Record<string, string>;
}
export interface SigningProfileRevocationRecord {
  revocationEffectiveFrom?: Date | string;
  revokedAt?: Date | string;
  revokedBy?: string;
}
export type SigningProfiles = Array<SigningProfile>;
export type SigningProfileStatus = "Active" | "Canceled" | "Revoked";
export type SigningStatus = "InProgress" | "Failed" | "Succeeded";
export interface SignPayloadRequest {
  profileName: string;
  profileOwner?: string;
  payload: Uint8Array | string;
  payloadFormat: string;
}
export interface SignPayloadResponse {
  jobId?: string;
  jobOwner?: string;
  metadata?: Record<string, string>;
  signature?: Uint8Array | string;
}
export interface Source {
  s3?: S3Source;
}
export interface StartSigningJobRequest {
  source: Source;
  destination: Destination;
  profileName: string;
  clientRequestToken: string;
  profileOwner?: string;
}
export interface StartSigningJobResponse {
  jobId?: string;
  jobOwner?: string;
}
export type Statuses = Array<SigningProfileStatus>;
export type StatusReason = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type Timestamp = Date | string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type ValidityType = "DAYS" | "MONTHS" | "YEARS";
export type Version = string;

export declare namespace AddProfilePermission {
  export type Input = AddProfilePermissionRequest;
  export type Output = AddProfilePermissionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ServiceLimitExceededException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelSigningProfile {
  export type Input = CancelSigningProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeSigningJob {
  export type Input = DescribeSigningJobRequest;
  export type Output = DescribeSigningJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRevocationStatus {
  export type Input = GetRevocationStatusRequest;
  export type Output = GetRevocationStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSigningPlatform {
  export type Input = GetSigningPlatformRequest;
  export type Output = GetSigningPlatformResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSigningProfile {
  export type Input = GetSigningProfileRequest;
  export type Output = GetSigningProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListProfilePermissions {
  export type Input = ListProfilePermissionsRequest;
  export type Output = ListProfilePermissionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSigningJobs {
  export type Input = ListSigningJobsRequest;
  export type Output = ListSigningJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSigningPlatforms {
  export type Input = ListSigningPlatformsRequest;
  export type Output = ListSigningPlatformsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSigningProfiles {
  export type Input = ListSigningProfilesRequest;
  export type Output = ListSigningProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutSigningProfile {
  export type Input = PutSigningProfileRequest;
  export type Output = PutSigningProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveProfilePermission {
  export type Input = RemoveProfilePermissionRequest;
  export type Output = RemoveProfilePermissionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RevokeSignature {
  export type Input = RevokeSignatureRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RevokeSigningProfile {
  export type Input = RevokeSigningProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SignPayload {
  export type Input = SignPayloadRequest;
  export type Output = SignPayloadResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSigningJob {
  export type Input = StartSigningJobRequest;
  export type Output = StartSigningJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServiceErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
