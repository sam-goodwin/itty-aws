import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonS3 {
  abortMultipartUpload(
    input: AbortMultipartUploadRequest,
  ): Effect.Effect<AbortMultipartUploadOutput, NoSuchUpload | CommonAwsError>;
  completeMultipartUpload(
    input: CompleteMultipartUploadRequest,
  ): Effect.Effect<CompleteMultipartUploadOutput, CommonAwsError>;
  copyObject(
    input: CopyObjectRequest,
  ): Effect.Effect<
    CopyObjectOutput,
    ObjectNotInActiveTierError | CommonAwsError
  >;
  createBucket(
    input: CreateBucketRequest,
  ): Effect.Effect<
    CreateBucketOutput,
    BucketAlreadyExists | BucketAlreadyOwnedByYou | CommonAwsError
  >;
  createBucketMetadataTableConfiguration(
    input: CreateBucketMetadataTableConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  createMultipartUpload(
    input: CreateMultipartUploadRequest,
  ): Effect.Effect<CreateMultipartUploadOutput, CommonAwsError>;
  createSession(
    input: CreateSessionRequest,
  ): Effect.Effect<CreateSessionOutput, NoSuchBucket | CommonAwsError>;
  deleteBucket(input: DeleteBucketRequest): Effect.Effect<{}, CommonAwsError>;
  deleteBucketAnalyticsConfiguration(
    input: DeleteBucketAnalyticsConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketCors(
    input: DeleteBucketCorsRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketEncryption(
    input: DeleteBucketEncryptionRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketIntelligentTieringConfiguration(
    input: DeleteBucketIntelligentTieringConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketInventoryConfiguration(
    input: DeleteBucketInventoryConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketLifecycle(
    input: DeleteBucketLifecycleRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketMetadataTableConfiguration(
    input: DeleteBucketMetadataTableConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketMetricsConfiguration(
    input: DeleteBucketMetricsConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketOwnershipControls(
    input: DeleteBucketOwnershipControlsRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketPolicy(
    input: DeleteBucketPolicyRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketReplication(
    input: DeleteBucketReplicationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketTagging(
    input: DeleteBucketTaggingRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucketWebsite(
    input: DeleteBucketWebsiteRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteObject(
    input: DeleteObjectRequest,
  ): Effect.Effect<DeleteObjectOutput, CommonAwsError>;
  deleteObjects(
    input: DeleteObjectsRequest,
  ): Effect.Effect<DeleteObjectsOutput, CommonAwsError>;
  deleteObjectTagging(
    input: DeleteObjectTaggingRequest,
  ): Effect.Effect<DeleteObjectTaggingOutput, CommonAwsError>;
  deletePublicAccessBlock(
    input: DeletePublicAccessBlockRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  getBucketAccelerateConfiguration(
    input: GetBucketAccelerateConfigurationRequest,
  ): Effect.Effect<GetBucketAccelerateConfigurationOutput, CommonAwsError>;
  getBucketAcl(
    input: GetBucketAclRequest,
  ): Effect.Effect<GetBucketAclOutput, CommonAwsError>;
  getBucketAnalyticsConfiguration(
    input: GetBucketAnalyticsConfigurationRequest,
  ): Effect.Effect<GetBucketAnalyticsConfigurationOutput, CommonAwsError>;
  getBucketCors(
    input: GetBucketCorsRequest,
  ): Effect.Effect<GetBucketCorsOutput, CommonAwsError>;
  getBucketEncryption(
    input: GetBucketEncryptionRequest,
  ): Effect.Effect<GetBucketEncryptionOutput, CommonAwsError>;
  getBucketIntelligentTieringConfiguration(
    input: GetBucketIntelligentTieringConfigurationRequest,
  ): Effect.Effect<
    GetBucketIntelligentTieringConfigurationOutput,
    CommonAwsError
  >;
  getBucketInventoryConfiguration(
    input: GetBucketInventoryConfigurationRequest,
  ): Effect.Effect<GetBucketInventoryConfigurationOutput, CommonAwsError>;
  getBucketLifecycleConfiguration(
    input: GetBucketLifecycleConfigurationRequest,
  ): Effect.Effect<GetBucketLifecycleConfigurationOutput, CommonAwsError>;
  getBucketLocation(
    input: GetBucketLocationRequest,
  ): Effect.Effect<GetBucketLocationOutput, CommonAwsError>;
  getBucketLogging(
    input: GetBucketLoggingRequest,
  ): Effect.Effect<GetBucketLoggingOutput, CommonAwsError>;
  getBucketMetadataTableConfiguration(
    input: GetBucketMetadataTableConfigurationRequest,
  ): Effect.Effect<GetBucketMetadataTableConfigurationOutput, CommonAwsError>;
  getBucketMetricsConfiguration(
    input: GetBucketMetricsConfigurationRequest,
  ): Effect.Effect<GetBucketMetricsConfigurationOutput, CommonAwsError>;
  getBucketNotificationConfiguration(
    input: GetBucketNotificationConfigurationRequest,
  ): Effect.Effect<NotificationConfiguration, CommonAwsError>;
  getBucketOwnershipControls(
    input: GetBucketOwnershipControlsRequest,
  ): Effect.Effect<GetBucketOwnershipControlsOutput, CommonAwsError>;
  getBucketPolicy(
    input: GetBucketPolicyRequest,
  ): Effect.Effect<GetBucketPolicyOutput, CommonAwsError>;
  getBucketPolicyStatus(
    input: GetBucketPolicyStatusRequest,
  ): Effect.Effect<GetBucketPolicyStatusOutput, CommonAwsError>;
  getBucketReplication(
    input: GetBucketReplicationRequest,
  ): Effect.Effect<GetBucketReplicationOutput, CommonAwsError>;
  getBucketRequestPayment(
    input: GetBucketRequestPaymentRequest,
  ): Effect.Effect<GetBucketRequestPaymentOutput, CommonAwsError>;
  getBucketTagging(
    input: GetBucketTaggingRequest,
  ): Effect.Effect<GetBucketTaggingOutput, CommonAwsError>;
  getBucketVersioning(
    input: GetBucketVersioningRequest,
  ): Effect.Effect<GetBucketVersioningOutput, CommonAwsError>;
  getBucketWebsite(
    input: GetBucketWebsiteRequest,
  ): Effect.Effect<GetBucketWebsiteOutput, CommonAwsError>;
  getObject(
    input: GetObjectRequest,
  ): Effect.Effect<
    GetObjectOutput,
    InvalidObjectState | NoSuchKey | CommonAwsError
  >;
  getObjectAcl(
    input: GetObjectAclRequest,
  ): Effect.Effect<GetObjectAclOutput, NoSuchKey | CommonAwsError>;
  getObjectAttributes(
    input: GetObjectAttributesRequest,
  ): Effect.Effect<GetObjectAttributesOutput, NoSuchKey | CommonAwsError>;
  getObjectLegalHold(
    input: GetObjectLegalHoldRequest,
  ): Effect.Effect<GetObjectLegalHoldOutput, CommonAwsError>;
  getObjectLockConfiguration(
    input: GetObjectLockConfigurationRequest,
  ): Effect.Effect<GetObjectLockConfigurationOutput, CommonAwsError>;
  getObjectRetention(
    input: GetObjectRetentionRequest,
  ): Effect.Effect<GetObjectRetentionOutput, CommonAwsError>;
  getObjectTagging(
    input: GetObjectTaggingRequest,
  ): Effect.Effect<GetObjectTaggingOutput, CommonAwsError>;
  getObjectTorrent(
    input: GetObjectTorrentRequest,
  ): Effect.Effect<GetObjectTorrentOutput, CommonAwsError>;
  getPublicAccessBlock(
    input: GetPublicAccessBlockRequest,
  ): Effect.Effect<GetPublicAccessBlockOutput, CommonAwsError>;
  headBucket(
    input: HeadBucketRequest,
  ): Effect.Effect<HeadBucketOutput, NotFound | CommonAwsError>;
  headObject(
    input: HeadObjectRequest,
  ): Effect.Effect<HeadObjectOutput, NotFound | CommonAwsError>;
  listBucketAnalyticsConfigurations(
    input: ListBucketAnalyticsConfigurationsRequest,
  ): Effect.Effect<ListBucketAnalyticsConfigurationsOutput, CommonAwsError>;
  listBucketIntelligentTieringConfigurations(
    input: ListBucketIntelligentTieringConfigurationsRequest,
  ): Effect.Effect<
    ListBucketIntelligentTieringConfigurationsOutput,
    CommonAwsError
  >;
  listBucketInventoryConfigurations(
    input: ListBucketInventoryConfigurationsRequest,
  ): Effect.Effect<ListBucketInventoryConfigurationsOutput, CommonAwsError>;
  listBucketMetricsConfigurations(
    input: ListBucketMetricsConfigurationsRequest,
  ): Effect.Effect<ListBucketMetricsConfigurationsOutput, CommonAwsError>;
  listBuckets(
    input: ListBucketsRequest,
  ): Effect.Effect<ListBucketsOutput, CommonAwsError>;
  listDirectoryBuckets(
    input: ListDirectoryBucketsRequest,
  ): Effect.Effect<ListDirectoryBucketsOutput, CommonAwsError>;
  listMultipartUploads(
    input: ListMultipartUploadsRequest,
  ): Effect.Effect<ListMultipartUploadsOutput, CommonAwsError>;
  listObjects(
    input: ListObjectsRequest,
  ): Effect.Effect<ListObjectsOutput, NoSuchBucket | CommonAwsError>;
  listObjectsV2(
    input: ListObjectsV2Request,
  ): Effect.Effect<ListObjectsV2Output, NoSuchBucket | CommonAwsError>;
  listObjectVersions(
    input: ListObjectVersionsRequest,
  ): Effect.Effect<ListObjectVersionsOutput, CommonAwsError>;
  listParts(
    input: ListPartsRequest,
  ): Effect.Effect<ListPartsOutput, CommonAwsError>;
  putBucketAccelerateConfiguration(
    input: PutBucketAccelerateConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketAcl(input: PutBucketAclRequest): Effect.Effect<{}, CommonAwsError>;
  putBucketAnalyticsConfiguration(
    input: PutBucketAnalyticsConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketCors(input: PutBucketCorsRequest): Effect.Effect<{}, CommonAwsError>;
  putBucketEncryption(
    input: PutBucketEncryptionRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketIntelligentTieringConfiguration(
    input: PutBucketIntelligentTieringConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketInventoryConfiguration(
    input: PutBucketInventoryConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketLifecycleConfiguration(
    input: PutBucketLifecycleConfigurationRequest,
  ): Effect.Effect<PutBucketLifecycleConfigurationOutput, CommonAwsError>;
  putBucketLogging(
    input: PutBucketLoggingRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketMetricsConfiguration(
    input: PutBucketMetricsConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketNotificationConfiguration(
    input: PutBucketNotificationConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketOwnershipControls(
    input: PutBucketOwnershipControlsRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketPolicy(
    input: PutBucketPolicyRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketReplication(
    input: PutBucketReplicationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketRequestPayment(
    input: PutBucketRequestPaymentRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketTagging(
    input: PutBucketTaggingRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketVersioning(
    input: PutBucketVersioningRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketWebsite(
    input: PutBucketWebsiteRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putObject(
    input: PutObjectRequest,
  ): Effect.Effect<
    PutObjectOutput,
    | EncryptionTypeMismatch
    | InvalidRequest
    | InvalidWriteOffset
    | TooManyParts
    | CommonAwsError
  >;
  putObjectAcl(
    input: PutObjectAclRequest,
  ): Effect.Effect<PutObjectAclOutput, NoSuchKey | CommonAwsError>;
  putObjectLegalHold(
    input: PutObjectLegalHoldRequest,
  ): Effect.Effect<PutObjectLegalHoldOutput, CommonAwsError>;
  putObjectLockConfiguration(
    input: PutObjectLockConfigurationRequest,
  ): Effect.Effect<PutObjectLockConfigurationOutput, CommonAwsError>;
  putObjectRetention(
    input: PutObjectRetentionRequest,
  ): Effect.Effect<PutObjectRetentionOutput, CommonAwsError>;
  putObjectTagging(
    input: PutObjectTaggingRequest,
  ): Effect.Effect<PutObjectTaggingOutput, CommonAwsError>;
  putPublicAccessBlock(
    input: PutPublicAccessBlockRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  renameObject(
    input: RenameObjectRequest,
  ): Effect.Effect<
    RenameObjectOutput,
    IdempotencyParameterMismatch | CommonAwsError
  >;
  restoreObject(
    input: RestoreObjectRequest,
  ): Effect.Effect<
    RestoreObjectOutput,
    ObjectAlreadyInActiveTierError | CommonAwsError
  >;
  selectObjectContent(
    input: SelectObjectContentRequest,
  ): Effect.Effect<SelectObjectContentOutput, CommonAwsError>;
  uploadPart(
    input: UploadPartRequest,
  ): Effect.Effect<UploadPartOutput, CommonAwsError>;
  uploadPartCopy(
    input: UploadPartCopyRequest,
  ): Effect.Effect<UploadPartCopyOutput, CommonAwsError>;
  writeGetObjectResponse(
    input: WriteGetObjectResponseRequest,
  ): Effect.Effect<{}, CommonAwsError>;
}

export type S3 = AmazonS3;

export type AbortDate = Date | string;

export interface AbortIncompleteMultipartUpload {
  DaysAfterInitiation?: number;
}
export interface AbortMultipartUploadOutput {
  RequestCharged?: RequestCharged;
}
export interface AbortMultipartUploadRequest {
  Bucket: string;
  Key: string;
  UploadId: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
  IfMatchInitiatedTime?: Date | string;
}
export type AbortRuleId = string;

export interface AccelerateConfiguration {
  Status?: BucketAccelerateStatus;
}
export type AcceptRanges = string;

export interface AccessControlPolicy {
  Grants?: Array<Grant>;
  Owner?: Owner;
}
export interface AccessControlTranslation {
  Owner: OwnerOverride;
}
export type AccessKeyIdValue = string;

export type AccessPointAlias = boolean;

export type AccessPointArn = string;

export type AccountId = string;

export type AllowedHeader = string;

export type AllowedHeaders = Array<string>;
export type AllowedMethod = string;

export type AllowedMethods = Array<string>;
export type AllowedOrigin = string;

export type AllowedOrigins = Array<string>;
export type AllowQuotedRecordDelimiter = boolean;

export interface AnalyticsAndOperator {
  Prefix?: string;
  Tags?: Array<Tag>;
}
export interface AnalyticsConfiguration {
  Id: string;
  Filter?: AnalyticsFilter;
  StorageClassAnalysis: StorageClassAnalysis;
}
export type AnalyticsConfigurationList = Array<AnalyticsConfiguration>;
export interface AnalyticsExportDestination {
  S3BucketDestination: AnalyticsS3BucketDestination;
}
interface _AnalyticsFilter {
  Prefix?: string;
  Tag?: Tag;
  And?: AnalyticsAndOperator;
}

export type AnalyticsFilter =
  | (_AnalyticsFilter & { Prefix: string })
  | (_AnalyticsFilter & { Tag: Tag })
  | (_AnalyticsFilter & { And: AnalyticsAndOperator });
export type AnalyticsId = string;

export interface AnalyticsS3BucketDestination {
  Format: AnalyticsS3ExportFileFormat;
  BucketAccountId?: string;
  Bucket: string;
  Prefix?: string;
}
export type AnalyticsS3ExportFileFormat = "CSV";
export type ArchiveStatus = "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";
export type Body = Uint8Array | string;

export interface Bucket {
  Name?: string;
  CreationDate?: Date | string;
  BucketRegion?: string;
  BucketArn?: string;
}
export type BucketAccelerateStatus = "Enabled" | "Suspended";
export declare class BucketAlreadyExists extends EffectData.TaggedError(
  "BucketAlreadyExists",
)<{}> {}
export declare class BucketAlreadyOwnedByYou extends EffectData.TaggedError(
  "BucketAlreadyOwnedByYou",
)<{}> {}
export type BucketCannedACL =
  | "private"
  | "public_read"
  | "public_read_write"
  | "authenticated_read";
export interface BucketInfo {
  DataRedundancy?: DataRedundancy;
  Type?: BucketType;
}
export type BucketKeyEnabled = boolean;

export interface BucketLifecycleConfiguration {
  Rules: Array<LifecycleRule>;
}
export type BucketLocationConstraint =
  | "af_south_1"
  | "ap_east_1"
  | "ap_northeast_1"
  | "ap_northeast_2"
  | "ap_northeast_3"
  | "ap_south_1"
  | "ap_south_2"
  | "ap_southeast_1"
  | "ap_southeast_2"
  | "ap_southeast_3"
  | "ap_southeast_4"
  | "ap_southeast_5"
  | "ca_central_1"
  | "cn_north_1"
  | "cn_northwest_1"
  | "EU"
  | "eu_central_1"
  | "eu_central_2"
  | "eu_north_1"
  | "eu_south_1"
  | "eu_south_2"
  | "eu_west_1"
  | "eu_west_2"
  | "eu_west_3"
  | "il_central_1"
  | "me_central_1"
  | "me_south_1"
  | "sa_east_1"
  | "us_east_2"
  | "us_gov_east_1"
  | "us_gov_west_1"
  | "us_west_1"
  | "us_west_2";
export type BucketLocationName = string;

export interface BucketLoggingStatus {
  LoggingEnabled?: LoggingEnabled;
}
export type BucketLogsPermission = "FULL_CONTROL" | "READ" | "WRITE";
export type BucketName = string;

export type BucketRegion = string;

export type Buckets = Array<Bucket>;
export type BucketType = "Directory";
export type BucketVersioningStatus = "Enabled" | "Suspended";
export type BypassGovernanceRetention = boolean;

export type BytesProcessed = number;

export type BytesReturned = number;

export type BytesScanned = number;

export type CacheControl = string;

export interface Checksum {
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ChecksumType?: ChecksumType;
}
export type ChecksumAlgorithm =
  | "CRC32"
  | "CRC32C"
  | "SHA1"
  | "SHA256"
  | "CRC64NVME";
export type ChecksumAlgorithmList = Array<ChecksumAlgorithm>;
export type ChecksumCRC32 = string;

export type ChecksumCRC32C = string;

export type ChecksumCRC64NVME = string;

export type ChecksumMode = "ENABLED";
export type ChecksumSHA1 = string;

export type ChecksumSHA256 = string;

export type ChecksumType = "COMPOSITE" | "FULL_OBJECT";
export type ClientToken = string;

export type Code = string;

export type Comments = string;

export interface CommonPrefix {
  Prefix?: string;
}
export type CommonPrefixList = Array<CommonPrefix>;
export interface CompletedMultipartUpload {
  Parts?: Array<CompletedPart>;
}
export interface CompletedPart {
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  PartNumber?: number;
}
export type CompletedPartList = Array<CompletedPart>;
export interface CompleteMultipartUploadOutput {
  Location?: string;
  Bucket?: string;
  Key?: string;
  Expiration?: string;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ChecksumType?: ChecksumType;
  ServerSideEncryption?: ServerSideEncryption;
  VersionId?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged;
}
export interface CompleteMultipartUploadRequest {
  Bucket: string;
  Key: string;
  MultipartUpload?: CompletedMultipartUpload;
  UploadId: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ChecksumType?: ChecksumType;
  MpuObjectSize?: number;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
  IfMatch?: string;
  IfNoneMatch?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
}
export type CompressionType = "NONE" | "GZIP" | "BZIP2";
export interface Condition {
  HttpErrorCodeReturnedEquals?: string;
  KeyPrefixEquals?: string;
}
export type ConfirmRemoveSelfBucketAccess = boolean;

export type ContentDisposition = string;

export type ContentEncoding = string;

export type ContentLanguage = string;

export type ContentLength = number;

export type ContentMD5 = string;

export type ContentRange = string;

export type ContentType = string;

export interface ContinuationEvent {}
export interface CopyObjectOutput {
  CopyObjectResult?: CopyObjectResult;
  Expiration?: string;
  CopySourceVersionId?: string;
  VersionId?: string;
  ServerSideEncryption?: ServerSideEncryption;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged;
}
export interface CopyObjectRequest {
  ACL?: ObjectCannedACL;
  Bucket: string;
  CacheControl?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentType?: string;
  CopySource: string;
  CopySourceIfMatch?: string;
  CopySourceIfModifiedSince?: Date | string;
  CopySourceIfNoneMatch?: string;
  CopySourceIfUnmodifiedSince?: Date | string;
  Expires?: Date | string;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWriteACP?: string;
  Key: string;
  Metadata?: Record<string, string>;
  MetadataDirective?: MetadataDirective;
  TaggingDirective?: TaggingDirective;
  ServerSideEncryption?: ServerSideEncryption;
  StorageClass?: StorageClass;
  WebsiteRedirectLocation?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  CopySourceSSECustomerAlgorithm?: string;
  CopySourceSSECustomerKey?: string;
  CopySourceSSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer;
  Tagging?: string;
  ObjectLockMode?: ObjectLockMode;
  ObjectLockRetainUntilDate?: Date | string;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  ExpectedBucketOwner?: string;
  ExpectedSourceBucketOwner?: string;
}
export interface CopyObjectResult {
  ETag?: string;
  LastModified?: Date | string;
  ChecksumType?: ChecksumType;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export interface CopyPartResult {
  ETag?: string;
  LastModified?: Date | string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export type CopySource = string;

export type CopySourceIfMatch = string;

export type CopySourceIfModifiedSince = Date | string;

export type CopySourceIfNoneMatch = string;

export type CopySourceIfUnmodifiedSince = Date | string;

export type CopySourceRange = string;

export type CopySourceSSECustomerAlgorithm = string;

export type CopySourceSSECustomerKey = string;

export type CopySourceSSECustomerKeyMD5 = string;

export type CopySourceVersionId = string;

export interface CORSConfiguration {
  CORSRules: Array<CORSRule>;
}
export interface CORSRule {
  ID?: string;
  AllowedHeaders?: Array<string>;
  AllowedMethods: Array<string>;
  AllowedOrigins: Array<string>;
  ExposeHeaders?: Array<string>;
  MaxAgeSeconds?: number;
}
export type CORSRules = Array<CORSRule>;
export interface CreateBucketConfiguration {
  LocationConstraint?: BucketLocationConstraint;
  Location?: LocationInfo;
  Bucket?: BucketInfo;
  Tags?: Array<Tag>;
}
export interface CreateBucketMetadataTableConfigurationRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  MetadataTableConfiguration: MetadataTableConfiguration;
  ExpectedBucketOwner?: string;
}
export interface CreateBucketOutput {
  Location?: string;
  BucketArn?: string;
}
export interface CreateBucketRequest {
  ACL?: BucketCannedACL;
  Bucket: string;
  CreateBucketConfiguration?: CreateBucketConfiguration;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWrite?: string;
  GrantWriteACP?: string;
  ObjectLockEnabledForBucket?: boolean;
  ObjectOwnership?: ObjectOwnership;
}
export interface CreateMultipartUploadOutput {
  AbortDate?: Date | string;
  AbortRuleId?: string;
  Bucket?: string;
  Key?: string;
  UploadId?: string;
  ServerSideEncryption?: ServerSideEncryption;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ChecksumType?: ChecksumType;
}
export interface CreateMultipartUploadRequest {
  ACL?: ObjectCannedACL;
  Bucket: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentType?: string;
  Expires?: Date | string;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWriteACP?: string;
  Key: string;
  Metadata?: Record<string, string>;
  ServerSideEncryption?: ServerSideEncryption;
  StorageClass?: StorageClass;
  WebsiteRedirectLocation?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestPayer?: RequestPayer;
  Tagging?: string;
  ObjectLockMode?: ObjectLockMode;
  ObjectLockRetainUntilDate?: Date | string;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  ExpectedBucketOwner?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ChecksumType?: ChecksumType;
}
export interface CreateSessionOutput {
  ServerSideEncryption?: ServerSideEncryption;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  Credentials: SessionCredentials;
}
export interface CreateSessionRequest {
  SessionMode?: SessionMode;
  Bucket: string;
  ServerSideEncryption?: ServerSideEncryption;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
}
export type CreationDate = Date | string;

export interface CSVInput {
  FileHeaderInfo?: FileHeaderInfo;
  Comments?: string;
  QuoteEscapeCharacter?: string;
  RecordDelimiter?: string;
  FieldDelimiter?: string;
  QuoteCharacter?: string;
  AllowQuotedRecordDelimiter?: boolean;
}
export interface CSVOutput {
  QuoteFields?: QuoteFields;
  QuoteEscapeCharacter?: string;
  RecordDelimiter?: string;
  FieldDelimiter?: string;
  QuoteCharacter?: string;
}
export type DataRedundancy = "SingleAvailabilityZone" | "SingleLocalZone";
export type S3Date = Date | string;

export type Days = number;

export type DaysAfterInitiation = number;

export interface DefaultRetention {
  Mode?: ObjectLockRetentionMode;
  Days?: number;
  Years?: number;
}
export interface Delete {
  Objects: Array<ObjectIdentifier>;
  Quiet?: boolean;
}
export interface DeleteBucketAnalyticsConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketCorsRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketEncryptionRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketIntelligentTieringConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketInventoryConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketLifecycleRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketMetadataTableConfigurationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketMetricsConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketOwnershipControlsRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketPolicyRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketReplicationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketTaggingRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketWebsiteRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface DeletedObject {
  Key?: string;
  VersionId?: string;
  DeleteMarker?: boolean;
  DeleteMarkerVersionId?: string;
}
export type DeletedObjects = Array<DeletedObject>;
export type DeleteMarker = boolean;

export interface DeleteMarkerEntry {
  Owner?: Owner;
  Key?: string;
  VersionId?: string;
  IsLatest?: boolean;
  LastModified?: Date | string;
}
export interface DeleteMarkerReplication {
  Status?: DeleteMarkerReplicationStatus;
}
export type DeleteMarkerReplicationStatus = "Enabled" | "Disabled";
export type DeleteMarkers = Array<DeleteMarkerEntry>;
export type DeleteMarkerVersionId = string;

export interface DeleteObjectOutput {
  DeleteMarker?: boolean;
  VersionId?: string;
  RequestCharged?: RequestCharged;
}
export interface DeleteObjectRequest {
  Bucket: string;
  Key: string;
  MFA?: string;
  VersionId?: string;
  RequestPayer?: RequestPayer;
  BypassGovernanceRetention?: boolean;
  ExpectedBucketOwner?: string;
  IfMatch?: string;
  IfMatchLastModifiedTime?: Date | string;
  IfMatchSize?: number;
}
export interface DeleteObjectsOutput {
  Deleted?: Array<DeletedObject>;
  RequestCharged?: RequestCharged;
  Errors?: Array<S3Error>;
}
export interface DeleteObjectsRequest {
  Bucket: string;
  Delete: Delete;
  MFA?: string;
  RequestPayer?: RequestPayer;
  BypassGovernanceRetention?: boolean;
  ExpectedBucketOwner?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
}
export interface DeleteObjectTaggingOutput {
  VersionId?: string;
}
export interface DeleteObjectTaggingRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  ExpectedBucketOwner?: string;
}
export interface DeletePublicAccessBlockRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export type Delimiter = string;

export type Description = string;

export interface Destination {
  Bucket: string;
  Account?: string;
  StorageClass?: StorageClass;
  AccessControlTranslation?: AccessControlTranslation;
  EncryptionConfiguration?: EncryptionConfiguration;
  ReplicationTime?: ReplicationTime;
  Metrics?: Metrics;
}
export type DirectoryBucketToken = string;

export type DisplayName = string;

export type EmailAddress = string;

export type EnableRequestProgress = boolean;

export type EncodingType = "url";
export interface Encryption {
  EncryptionType: ServerSideEncryption;
  KMSKeyId?: string;
  KMSContext?: string;
}
export interface EncryptionConfiguration {
  ReplicaKmsKeyID?: string;
}
export declare class EncryptionTypeMismatch extends EffectData.TaggedError(
  "EncryptionTypeMismatch",
)<{}> {}
export type End = number;

export interface EndEvent {}
export interface S3Error {
  Key?: string;
  VersionId?: string;
  Code?: string;
  Message?: string;
}
export type ErrorCode = string;

export interface ErrorDetails {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface ErrorDocument {
  Key: string;
}
export type ErrorMessage = string;

export type Errors = Array<S3Error>;
export type ETag = string;

export type Event =
  | "s3_ReducedRedundancyLostObject"
  | "s3_ObjectCreated_"
  | "s3_ObjectCreated_Put"
  | "s3_ObjectCreated_Post"
  | "s3_ObjectCreated_Copy"
  | "s3_ObjectCreated_CompleteMultipartUpload"
  | "s3_ObjectRemoved_"
  | "s3_ObjectRemoved_Delete"
  | "s3_ObjectRemoved_DeleteMarkerCreated"
  | "s3_ObjectRestore_"
  | "s3_ObjectRestore_Post"
  | "s3_ObjectRestore_Completed"
  | "s3_Replication_"
  | "s3_Replication_OperationFailedReplication"
  | "s3_Replication_OperationNotTracked"
  | "s3_Replication_OperationMissedThreshold"
  | "s3_Replication_OperationReplicatedAfterThreshold"
  | "s3_ObjectRestore_Delete"
  | "s3_LifecycleTransition"
  | "s3_IntelligentTiering"
  | "s3_ObjectAcl_Put"
  | "s3_LifecycleExpiration_"
  | "s3_LifecycleExpiration_Delete"
  | "s3_LifecycleExpiration_DeleteMarkerCreated"
  | "s3_ObjectTagging_"
  | "s3_ObjectTagging_Put"
  | "s3_ObjectTagging_Delete";
export interface EventBridgeConfiguration {}
export type EventList = Array<Event>;
export interface ExistingObjectReplication {
  Status: ExistingObjectReplicationStatus;
}
export type ExistingObjectReplicationStatus = "Enabled" | "Disabled";
export type Expiration = string;

export type ExpirationStatus = "Enabled" | "Disabled";
export type ExpiredObjectDeleteMarker = boolean;

export type Expires = Date | string;

export type ExposeHeader = string;

export type ExposeHeaders = Array<string>;
export type Expression = string;

export type ExpressionType = "SQL";
export type FetchOwner = boolean;

export type FieldDelimiter = string;

export type FileHeaderInfo = "USE" | "IGNORE" | "NONE";
export interface FilterRule {
  Name?: FilterRuleName;
  Value?: string;
}
export type FilterRuleList = Array<FilterRule>;
export type FilterRuleName = "prefix" | "suffix";
export type FilterRuleValue = string;

export interface GetBucketAccelerateConfigurationOutput {
  Status?: BucketAccelerateStatus;
  RequestCharged?: RequestCharged;
}
export interface GetBucketAccelerateConfigurationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
  RequestPayer?: RequestPayer;
}
export interface GetBucketAclOutput {
  Owner?: Owner;
  Grants?: Array<Grant>;
}
export interface GetBucketAclRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketAnalyticsConfigurationOutput {
  AnalyticsConfiguration?: AnalyticsConfiguration;
}
export interface GetBucketAnalyticsConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketCorsOutput {
  CORSRules?: Array<CORSRule>;
}
export interface GetBucketCorsRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketEncryptionOutput {
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}
export interface GetBucketEncryptionRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketIntelligentTieringConfigurationOutput {
  IntelligentTieringConfiguration?: IntelligentTieringConfiguration;
}
export interface GetBucketIntelligentTieringConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketInventoryConfigurationOutput {
  InventoryConfiguration?: InventoryConfiguration;
}
export interface GetBucketInventoryConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketLifecycleConfigurationOutput {
  Rules?: Array<LifecycleRule>;
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize;
}
export interface GetBucketLifecycleConfigurationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketLocationOutput {
  LocationConstraint?: BucketLocationConstraint;
}
export interface GetBucketLocationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketLoggingOutput {
  LoggingEnabled?: LoggingEnabled;
}
export interface GetBucketLoggingRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketMetadataTableConfigurationOutput {
  GetBucketMetadataTableConfigurationResult?: GetBucketMetadataTableConfigurationResult;
}
export interface GetBucketMetadataTableConfigurationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketMetadataTableConfigurationResult {
  MetadataTableConfigurationResult: MetadataTableConfigurationResult;
  Status: string;
  Error?: ErrorDetails;
}
export interface GetBucketMetricsConfigurationOutput {
  MetricsConfiguration?: MetricsConfiguration;
}
export interface GetBucketMetricsConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketNotificationConfigurationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketOwnershipControlsOutput {
  OwnershipControls?: OwnershipControls;
}
export interface GetBucketOwnershipControlsRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketPolicyOutput {
  Policy?: string;
}
export interface GetBucketPolicyRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketPolicyStatusOutput {
  PolicyStatus?: PolicyStatus;
}
export interface GetBucketPolicyStatusRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketReplicationOutput {
  ReplicationConfiguration?: ReplicationConfiguration;
}
export interface GetBucketReplicationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketRequestPaymentOutput {
  Payer?: Payer;
}
export interface GetBucketRequestPaymentRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketTaggingOutput {
  TagSet: Array<Tag>;
}
export interface GetBucketTaggingRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketVersioningOutput {
  Status?: BucketVersioningStatus;
  MFADelete?: MFADeleteStatus;
}
export interface GetBucketVersioningRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetBucketWebsiteOutput {
  RedirectAllRequestsTo?: RedirectAllRequestsTo;
  IndexDocument?: IndexDocument;
  ErrorDocument?: ErrorDocument;
  RoutingRules?: Array<RoutingRule>;
}
export interface GetBucketWebsiteRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetObjectAclOutput {
  Owner?: Owner;
  Grants?: Array<Grant>;
  RequestCharged?: RequestCharged;
}
export interface GetObjectAclRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
}
export interface GetObjectAttributesOutput {
  DeleteMarker?: boolean;
  LastModified?: Date | string;
  VersionId?: string;
  RequestCharged?: RequestCharged;
  ETag?: string;
  Checksum?: Checksum;
  ObjectParts?: GetObjectAttributesParts;
  StorageClass?: StorageClass;
  ObjectSize?: number;
}
export interface GetObjectAttributesParts {
  TotalPartsCount?: number;
  PartNumberMarker?: string;
  NextPartNumberMarker?: string;
  MaxParts?: number;
  IsTruncated?: boolean;
  Parts?: Array<ObjectPart>;
}
export interface GetObjectAttributesRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  MaxParts?: number;
  PartNumberMarker?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
  ObjectAttributes: Array<ObjectAttributes>;
}
export interface GetObjectLegalHoldOutput {
  LegalHold?: ObjectLockLegalHold;
}
export interface GetObjectLegalHoldRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
}
export interface GetObjectLockConfigurationOutput {
  ObjectLockConfiguration?: ObjectLockConfiguration;
}
export interface GetObjectLockConfigurationRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GetObjectOutput {
  Body?: Uint8Array | string;
  DeleteMarker?: boolean;
  AcceptRanges?: string;
  Expiration?: string;
  Restore?: string;
  LastModified?: Date | string;
  ContentLength?: number;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ChecksumType?: ChecksumType;
  MissingMeta?: number;
  VersionId?: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentRange?: string;
  ContentType?: string;
  Expires?: Date | string;
  WebsiteRedirectLocation?: string;
  ServerSideEncryption?: ServerSideEncryption;
  Metadata?: Record<string, string>;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  StorageClass?: StorageClass;
  RequestCharged?: RequestCharged;
  ReplicationStatus?: ReplicationStatus;
  PartsCount?: number;
  TagCount?: number;
  ObjectLockMode?: ObjectLockMode;
  ObjectLockRetainUntilDate?: Date | string;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
}
export interface GetObjectRequest {
  Bucket: string;
  IfMatch?: string;
  IfModifiedSince?: Date | string;
  IfNoneMatch?: string;
  IfUnmodifiedSince?: Date | string;
  Key: string;
  Range?: string;
  ResponseCacheControl?: string;
  ResponseContentDisposition?: string;
  ResponseContentEncoding?: string;
  ResponseContentLanguage?: string;
  ResponseContentType?: string;
  ResponseExpires?: Date | string;
  VersionId?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer;
  PartNumber?: number;
  ExpectedBucketOwner?: string;
  ChecksumMode?: ChecksumMode;
}
export type GetObjectResponseStatusCode = number;

export interface GetObjectRetentionOutput {
  Retention?: ObjectLockRetention;
}
export interface GetObjectRetentionRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
}
export interface GetObjectTaggingOutput {
  VersionId?: string;
  TagSet: Array<Tag>;
}
export interface GetObjectTaggingRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  ExpectedBucketOwner?: string;
  RequestPayer?: RequestPayer;
}
export interface GetObjectTorrentOutput {
  Body?: Uint8Array | string;
  RequestCharged?: RequestCharged;
}
export interface GetObjectTorrentRequest {
  Bucket: string;
  Key: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
}
export interface GetPublicAccessBlockOutput {
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}
export interface GetPublicAccessBlockRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface GlacierJobParameters {
  Tier: Tier;
}
export interface Grant {
  Grantee?: Grantee;
  Permission?: Permission;
}
export interface Grantee {
  DisplayName?: string;
  EmailAddress?: string;
  ID?: string;
  URI?: string;
  Type: Type;
}
export type GrantFullControl = string;

export type GrantRead = string;

export type GrantReadACP = string;

export type Grants = Array<Grant>;
export type GrantWrite = string;

export type GrantWriteACP = string;

export interface HeadBucketOutput {
  BucketArn?: string;
  BucketLocationType?: LocationType;
  BucketLocationName?: string;
  BucketRegion?: string;
  AccessPointAlias?: boolean;
}
export interface HeadBucketRequest {
  Bucket: string;
  ExpectedBucketOwner?: string;
}
export interface HeadObjectOutput {
  DeleteMarker?: boolean;
  AcceptRanges?: string;
  Expiration?: string;
  Restore?: string;
  ArchiveStatus?: ArchiveStatus;
  LastModified?: Date | string;
  ContentLength?: number;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ChecksumType?: ChecksumType;
  ETag?: string;
  MissingMeta?: number;
  VersionId?: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentType?: string;
  ContentRange?: string;
  Expires?: Date | string;
  WebsiteRedirectLocation?: string;
  ServerSideEncryption?: ServerSideEncryption;
  Metadata?: Record<string, string>;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  StorageClass?: StorageClass;
  RequestCharged?: RequestCharged;
  ReplicationStatus?: ReplicationStatus;
  PartsCount?: number;
  TagCount?: number;
  ObjectLockMode?: ObjectLockMode;
  ObjectLockRetainUntilDate?: Date | string;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
}
export interface HeadObjectRequest {
  Bucket: string;
  IfMatch?: string;
  IfModifiedSince?: Date | string;
  IfNoneMatch?: string;
  IfUnmodifiedSince?: Date | string;
  Key: string;
  Range?: string;
  ResponseCacheControl?: string;
  ResponseContentDisposition?: string;
  ResponseContentEncoding?: string;
  ResponseContentLanguage?: string;
  ResponseContentType?: string;
  ResponseExpires?: Date | string;
  VersionId?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer;
  PartNumber?: number;
  ExpectedBucketOwner?: string;
  ChecksumMode?: ChecksumMode;
}
export type HostName = string;

export type HttpErrorCodeReturnedEquals = string;

export type HttpRedirectCode = string;

export type ID = string;

export declare class IdempotencyParameterMismatch extends EffectData.TaggedError(
  "IdempotencyParameterMismatch",
)<{}> {}
export type IfMatch = string;

export type IfMatchInitiatedTime = Date | string;

export type IfMatchLastModifiedTime = Date | string;

export type IfMatchSize = number;

export type IfModifiedSince = Date | string;

export type IfNoneMatch = string;

export type IfUnmodifiedSince = Date | string;

export interface IndexDocument {
  Suffix: string;
}
export type Initiated = Date | string;

export interface Initiator {
  ID?: string;
  DisplayName?: string;
}
export interface InputSerialization {
  CSV?: CSVInput;
  CompressionType?: CompressionType;
  JSON?: JSONInput;
  Parquet?: ParquetInput;
}
export type IntelligentTieringAccessTier =
  | "ARCHIVE_ACCESS"
  | "DEEP_ARCHIVE_ACCESS";
export interface IntelligentTieringAndOperator {
  Prefix?: string;
  Tags?: Array<Tag>;
}
export interface IntelligentTieringConfiguration {
  Id: string;
  Filter?: IntelligentTieringFilter;
  Status: IntelligentTieringStatus;
  Tierings: Array<Tiering>;
}
export type IntelligentTieringConfigurationList =
  Array<IntelligentTieringConfiguration>;
export type IntelligentTieringDays = number;

export interface IntelligentTieringFilter {
  Prefix?: string;
  Tag?: Tag;
  And?: IntelligentTieringAndOperator;
}
export type IntelligentTieringId = string;

export type IntelligentTieringStatus = "Enabled" | "Disabled";
export declare class InvalidObjectState extends EffectData.TaggedError(
  "InvalidObjectState",
)<{
  readonly StorageClass?: StorageClass;
  readonly AccessTier?: IntelligentTieringAccessTier;
}> {}
export declare class InvalidRequest extends EffectData.TaggedError(
  "InvalidRequest",
)<{}> {}
export declare class InvalidWriteOffset extends EffectData.TaggedError(
  "InvalidWriteOffset",
)<{}> {}
export interface InventoryConfiguration {
  Destination: InventoryDestination;
  IsEnabled: boolean;
  Filter?: InventoryFilter;
  Id: string;
  IncludedObjectVersions: InventoryIncludedObjectVersions;
  OptionalFields?: Array<InventoryOptionalField>;
  Schedule: InventorySchedule;
}
export type InventoryConfigurationList = Array<InventoryConfiguration>;
export interface InventoryDestination {
  S3BucketDestination: InventoryS3BucketDestination;
}
export interface InventoryEncryption {
  SSES3?: SSES3;
  SSEKMS?: SSEKMS;
}
export interface InventoryFilter {
  Prefix: string;
}
export type InventoryFormat = "CSV" | "ORC" | "Parquet";
export type InventoryFrequency = "Daily" | "Weekly";
export type InventoryId = string;

export type InventoryIncludedObjectVersions = "All" | "Current";
export type InventoryOptionalField =
  | "Size"
  | "LastModifiedDate"
  | "StorageClass"
  | "ETag"
  | "IsMultipartUploaded"
  | "ReplicationStatus"
  | "EncryptionStatus"
  | "ObjectLockRetainUntilDate"
  | "ObjectLockMode"
  | "ObjectLockLegalHoldStatus"
  | "IntelligentTieringAccessTier"
  | "BucketKeyStatus"
  | "ChecksumAlgorithm"
  | "ObjectAccessControlList"
  | "ObjectOwner";
export type InventoryOptionalFields = Array<InventoryOptionalField>;
export interface InventoryS3BucketDestination {
  AccountId?: string;
  Bucket: string;
  Format: InventoryFormat;
  Prefix?: string;
  Encryption?: InventoryEncryption;
}
export interface InventorySchedule {
  Frequency: InventoryFrequency;
}
export type IsEnabled = boolean;

export type IsLatest = boolean;

export type IsPublic = boolean;

export type IsRestoreInProgress = boolean;

export type IsTruncated = boolean;

export interface JSONInput {
  Type?: JSONType;
}
export interface JSONOutput {
  RecordDelimiter?: string;
}
export type JSONType = "DOCUMENT" | "LINES";
export type KeyCount = number;

export type KeyMarker = string;

export type KeyPrefixEquals = string;

export type KMSContext = string;

export type LambdaFunctionArn = string;

export interface LambdaFunctionConfiguration {
  Id?: string;
  LambdaFunctionArn: string;
  Events: Array<Event>;
  Filter?: NotificationConfigurationFilter;
}
export type LambdaFunctionConfigurationList =
  Array<LambdaFunctionConfiguration>;
export type LastModified = Date | string;

export type LastModifiedTime = Date | string;

export interface LifecycleExpiration {
  Date?: Date | string;
  Days?: number;
  ExpiredObjectDeleteMarker?: boolean;
}
export interface LifecycleRule {
  Expiration?: LifecycleExpiration;
  ID?: string;
  Prefix?: string;
  Filter?: LifecycleRuleFilter;
  Status: ExpirationStatus;
  Transitions?: Array<Transition>;
  NoncurrentVersionTransitions?: Array<NoncurrentVersionTransition>;
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}
export interface LifecycleRuleAndOperator {
  Prefix?: string;
  Tags?: Array<Tag>;
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
}
export interface LifecycleRuleFilter {
  Prefix?: string;
  Tag?: Tag;
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
  And?: LifecycleRuleAndOperator;
}
export type LifecycleRules = Array<LifecycleRule>;
export interface ListBucketAnalyticsConfigurationsOutput {
  IsTruncated?: boolean;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  AnalyticsConfigurationList?: Array<AnalyticsConfiguration>;
}
export interface ListBucketAnalyticsConfigurationsRequest {
  Bucket: string;
  ContinuationToken?: string;
  ExpectedBucketOwner?: string;
}
export interface ListBucketIntelligentTieringConfigurationsOutput {
  IsTruncated?: boolean;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  IntelligentTieringConfigurationList?: Array<IntelligentTieringConfiguration>;
}
export interface ListBucketIntelligentTieringConfigurationsRequest {
  Bucket: string;
  ContinuationToken?: string;
  ExpectedBucketOwner?: string;
}
export interface ListBucketInventoryConfigurationsOutput {
  ContinuationToken?: string;
  InventoryConfigurationList?: Array<InventoryConfiguration>;
  IsTruncated?: boolean;
  NextContinuationToken?: string;
}
export interface ListBucketInventoryConfigurationsRequest {
  Bucket: string;
  ContinuationToken?: string;
  ExpectedBucketOwner?: string;
}
export interface ListBucketMetricsConfigurationsOutput {
  IsTruncated?: boolean;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  MetricsConfigurationList?: Array<MetricsConfiguration>;
}
export interface ListBucketMetricsConfigurationsRequest {
  Bucket: string;
  ContinuationToken?: string;
  ExpectedBucketOwner?: string;
}
export interface ListBucketsOutput {
  Buckets?: Array<Bucket>;
  Owner?: Owner;
  ContinuationToken?: string;
  Prefix?: string;
}
export interface ListBucketsRequest {
  MaxBuckets?: number;
  ContinuationToken?: string;
  Prefix?: string;
  BucketRegion?: string;
}
export interface ListDirectoryBucketsOutput {
  Buckets?: Array<Bucket>;
  ContinuationToken?: string;
}
export interface ListDirectoryBucketsRequest {
  ContinuationToken?: string;
  MaxDirectoryBuckets?: number;
}
export interface ListMultipartUploadsOutput {
  Bucket?: string;
  KeyMarker?: string;
  UploadIdMarker?: string;
  NextKeyMarker?: string;
  Prefix?: string;
  Delimiter?: string;
  NextUploadIdMarker?: string;
  MaxUploads?: number;
  IsTruncated?: boolean;
  Uploads?: Array<MultipartUpload>;
  CommonPrefixes?: Array<CommonPrefix>;
  EncodingType?: EncodingType;
  RequestCharged?: RequestCharged;
}
export interface ListMultipartUploadsRequest {
  Bucket: string;
  Delimiter?: string;
  EncodingType?: EncodingType;
  KeyMarker?: string;
  MaxUploads?: number;
  Prefix?: string;
  UploadIdMarker?: string;
  ExpectedBucketOwner?: string;
  RequestPayer?: RequestPayer;
}
export interface ListObjectsOutput {
  IsTruncated?: boolean;
  Marker?: string;
  NextMarker?: string;
  Contents?: Array<S3Object>;
  Name?: string;
  Prefix?: string;
  Delimiter?: string;
  MaxKeys?: number;
  CommonPrefixes?: Array<CommonPrefix>;
  EncodingType?: EncodingType;
  RequestCharged?: RequestCharged;
}
export interface ListObjectsRequest {
  Bucket: string;
  Delimiter?: string;
  EncodingType?: EncodingType;
  Marker?: string;
  MaxKeys?: number;
  Prefix?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
  OptionalObjectAttributes?: Array<OptionalObjectAttributes>;
}
export interface ListObjectsV2Output {
  IsTruncated?: boolean;
  Contents?: Array<S3Object>;
  Name?: string;
  Prefix?: string;
  Delimiter?: string;
  MaxKeys?: number;
  CommonPrefixes?: Array<CommonPrefix>;
  EncodingType?: EncodingType;
  KeyCount?: number;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  StartAfter?: string;
  RequestCharged?: RequestCharged;
}
export interface ListObjectsV2Request {
  Bucket: string;
  Delimiter?: string;
  EncodingType?: EncodingType;
  MaxKeys?: number;
  Prefix?: string;
  ContinuationToken?: string;
  FetchOwner?: boolean;
  StartAfter?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
  OptionalObjectAttributes?: Array<OptionalObjectAttributes>;
}
export interface ListObjectVersionsOutput {
  IsTruncated?: boolean;
  KeyMarker?: string;
  VersionIdMarker?: string;
  NextKeyMarker?: string;
  NextVersionIdMarker?: string;
  Versions?: Array<ObjectVersion>;
  DeleteMarkers?: Array<DeleteMarkerEntry>;
  Name?: string;
  Prefix?: string;
  Delimiter?: string;
  MaxKeys?: number;
  CommonPrefixes?: Array<CommonPrefix>;
  EncodingType?: EncodingType;
  RequestCharged?: RequestCharged;
}
export interface ListObjectVersionsRequest {
  Bucket: string;
  Delimiter?: string;
  EncodingType?: EncodingType;
  KeyMarker?: string;
  MaxKeys?: number;
  Prefix?: string;
  VersionIdMarker?: string;
  ExpectedBucketOwner?: string;
  RequestPayer?: RequestPayer;
  OptionalObjectAttributes?: Array<OptionalObjectAttributes>;
}
export interface ListPartsOutput {
  AbortDate?: Date | string;
  AbortRuleId?: string;
  Bucket?: string;
  Key?: string;
  UploadId?: string;
  PartNumberMarker?: string;
  NextPartNumberMarker?: string;
  MaxParts?: number;
  IsTruncated?: boolean;
  Parts?: Array<Part>;
  Initiator?: Initiator;
  Owner?: Owner;
  StorageClass?: StorageClass;
  RequestCharged?: RequestCharged;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ChecksumType?: ChecksumType;
}
export interface ListPartsRequest {
  Bucket: string;
  Key: string;
  MaxParts?: number;
  PartNumberMarker?: string;
  UploadId: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
}
export type Location = string;

export interface LocationInfo {
  Type?: LocationType;
  Name?: string;
}
export type LocationNameAsString = string;

export type LocationPrefix = string;

export type LocationType = "AvailabilityZone" | "LocalZone";
export interface LoggingEnabled {
  TargetBucket: string;
  TargetGrants?: Array<TargetGrant>;
  TargetPrefix: string;
  TargetObjectKeyFormat?: TargetObjectKeyFormat;
}
export type Marker = string;

export type MaxAgeSeconds = number;

export type MaxBuckets = number;

export type MaxDirectoryBuckets = number;

export type MaxKeys = number;

export type MaxParts = number;

export type MaxUploads = number;

export type Message = string;

export type Metadata = Record<string, string>;
export type MetadataDirective = "COPY" | "REPLACE";
export interface MetadataEntry {
  Name?: string;
  Value?: string;
}
export type MetadataKey = string;

export interface MetadataTableConfiguration {
  S3TablesDestination: S3TablesDestination;
}
export interface MetadataTableConfigurationResult {
  S3TablesDestinationResult: S3TablesDestinationResult;
}
export type MetadataTableStatus = string;

export type MetadataValue = string;

export interface Metrics {
  Status: MetricsStatus;
  EventThreshold?: ReplicationTimeValue;
}
export interface MetricsAndOperator {
  Prefix?: string;
  Tags?: Array<Tag>;
  AccessPointArn?: string;
}
export interface MetricsConfiguration {
  Id: string;
  Filter?: MetricsFilter;
}
export type MetricsConfigurationList = Array<MetricsConfiguration>;
interface _MetricsFilter {
  Prefix?: string;
  Tag?: Tag;
  AccessPointArn?: string;
  And?: MetricsAndOperator;
}

export type MetricsFilter =
  | (_MetricsFilter & { Prefix: string })
  | (_MetricsFilter & { Tag: Tag })
  | (_MetricsFilter & { AccessPointArn: string })
  | (_MetricsFilter & { And: MetricsAndOperator });
export type MetricsId = string;

export type MetricsStatus = "Enabled" | "Disabled";
export type MFA = string;

export type MFADelete = "Enabled" | "Disabled";
export type MFADeleteStatus = "Enabled" | "Disabled";
export type Minutes = number;

export type MissingMeta = number;

export type MpuObjectSize = number;

export interface MultipartUpload {
  UploadId?: string;
  Key?: string;
  Initiated?: Date | string;
  StorageClass?: StorageClass;
  Owner?: Owner;
  Initiator?: Initiator;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ChecksumType?: ChecksumType;
}
export type MultipartUploadId = string;

export type MultipartUploadList = Array<MultipartUpload>;
export type NextKeyMarker = string;

export type NextMarker = string;

export type NextPartNumberMarker = string;

export type NextToken = string;

export type NextUploadIdMarker = string;

export type NextVersionIdMarker = string;

export interface NoncurrentVersionExpiration {
  NoncurrentDays?: number;
  NewerNoncurrentVersions?: number;
}
export interface NoncurrentVersionTransition {
  NoncurrentDays?: number;
  StorageClass?: TransitionStorageClass;
  NewerNoncurrentVersions?: number;
}
export type NoncurrentVersionTransitionList =
  Array<NoncurrentVersionTransition>;
export declare class NoSuchBucket extends EffectData.TaggedError(
  "NoSuchBucket",
)<{}> {}
export declare class NoSuchKey extends EffectData.TaggedError(
  "NoSuchKey",
)<{}> {}
export declare class NoSuchUpload extends EffectData.TaggedError(
  "NoSuchUpload",
)<{}> {}
export declare class NotFound extends EffectData.TaggedError("NotFound")<{}> {}
export interface NotificationConfiguration {
  TopicConfigurations?: Array<TopicConfiguration>;
  QueueConfigurations?: Array<QueueConfiguration>;
  LambdaFunctionConfigurations?: Array<LambdaFunctionConfiguration>;
  EventBridgeConfiguration?: EventBridgeConfiguration;
}
export interface NotificationConfigurationFilter {
  Key?: S3KeyFilter;
}
export type NotificationId = string;

export interface S3Object {
  Key?: string;
  LastModified?: Date | string;
  ETag?: string;
  ChecksumAlgorithm?: Array<ChecksumAlgorithm>;
  ChecksumType?: ChecksumType;
  Size?: number;
  StorageClass?: ObjectStorageClass;
  Owner?: Owner;
  RestoreStatus?: RestoreStatus;
}
export declare class ObjectAlreadyInActiveTierError extends EffectData.TaggedError(
  "ObjectAlreadyInActiveTierError",
)<{}> {}
export type ObjectAttributes =
  | "ETAG"
  | "CHECKSUM"
  | "OBJECT_PARTS"
  | "STORAGE_CLASS"
  | "OBJECT_SIZE";
export type ObjectAttributesList = Array<ObjectAttributes>;
export type ObjectCannedACL =
  | "private"
  | "public_read"
  | "public_read_write"
  | "authenticated_read"
  | "aws_exec_read"
  | "bucket_owner_read"
  | "bucket_owner_full_control";
export interface ObjectIdentifier {
  Key: string;
  VersionId?: string;
  ETag?: string;
  LastModifiedTime?: Date | string;
  Size?: number;
}
export type ObjectIdentifierList = Array<ObjectIdentifier>;
export type ObjectKey = string;

export type ObjectList = Array<S3Object>;
export interface ObjectLockConfiguration {
  ObjectLockEnabled?: ObjectLockEnabled;
  Rule?: ObjectLockRule;
}
export type ObjectLockEnabled = "Enabled";
export type ObjectLockEnabledForBucket = boolean;

export interface ObjectLockLegalHold {
  Status?: ObjectLockLegalHoldStatus;
}
export type ObjectLockLegalHoldStatus = "ON" | "OFF";
export type ObjectLockMode = "GOVERNANCE" | "COMPLIANCE";
export type ObjectLockRetainUntilDate = Date | string;

export interface ObjectLockRetention {
  Mode?: ObjectLockRetentionMode;
  RetainUntilDate?: Date | string;
}
export type ObjectLockRetentionMode = "GOVERNANCE" | "COMPLIANCE";
export interface ObjectLockRule {
  DefaultRetention?: DefaultRetention;
}
export type ObjectLockToken = string;

export declare class ObjectNotInActiveTierError extends EffectData.TaggedError(
  "ObjectNotInActiveTierError",
)<{}> {}
export type ObjectOwnership =
  | "BucketOwnerPreferred"
  | "ObjectWriter"
  | "BucketOwnerEnforced";
export interface ObjectPart {
  PartNumber?: number;
  Size?: number;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export type ObjectSize = number;

export type ObjectSizeGreaterThanBytes = number;

export type ObjectSizeLessThanBytes = number;

export type ObjectStorageClass =
  | "STANDARD"
  | "REDUCED_REDUNDANCY"
  | "GLACIER"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE"
  | "OUTPOSTS"
  | "GLACIER_IR"
  | "SNOW"
  | "EXPRESS_ONEZONE"
  | "FSX_OPENZFS";
export interface ObjectVersion {
  ETag?: string;
  ChecksumAlgorithm?: Array<ChecksumAlgorithm>;
  ChecksumType?: ChecksumType;
  Size?: number;
  StorageClass?: ObjectVersionStorageClass;
  Key?: string;
  VersionId?: string;
  IsLatest?: boolean;
  LastModified?: Date | string;
  Owner?: Owner;
  RestoreStatus?: RestoreStatus;
}
export type ObjectVersionId = string;

export type ObjectVersionList = Array<ObjectVersion>;
export type ObjectVersionStorageClass = "STANDARD";
export type OptionalObjectAttributes = "RESTORE_STATUS";
export type OptionalObjectAttributesList = Array<OptionalObjectAttributes>;
export interface OutputLocation {
  S3?: S3Location;
}
export interface OutputSerialization {
  CSV?: CSVOutput;
  JSON?: JSONOutput;
}
export interface Owner {
  DisplayName?: string;
  ID?: string;
}
export type OwnerOverride = "Destination";
export interface OwnershipControls {
  Rules: Array<OwnershipControlsRule>;
}
export interface OwnershipControlsRule {
  ObjectOwnership: ObjectOwnership;
}
export type OwnershipControlsRules = Array<OwnershipControlsRule>;
export interface ParquetInput {}
export interface Part {
  PartNumber?: number;
  LastModified?: Date | string;
  ETag?: string;
  Size?: number;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export type PartitionDateSource = "EventTime" | "DeliveryTime";
export interface PartitionedPrefix {
  PartitionDateSource?: PartitionDateSource;
}
export type PartNumber = number;

export type PartNumberMarker = string;

export type Parts = Array<Part>;
export type PartsCount = number;

export type PartsList = Array<ObjectPart>;
export type Payer = "Requester" | "BucketOwner";
export type Permission =
  | "FULL_CONTROL"
  | "WRITE"
  | "WRITE_ACP"
  | "READ"
  | "READ_ACP";
export type Policy = string;

export interface PolicyStatus {
  IsPublic?: boolean;
}
export type Prefix = string;

export type Priority = number;

export interface Progress {
  BytesScanned?: number;
  BytesProcessed?: number;
  BytesReturned?: number;
}
export interface ProgressEvent {
  Details?: Progress;
}
export type Protocol = "http" | "https";
export interface PublicAccessBlockConfiguration {
  BlockPublicAcls?: boolean;
  IgnorePublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  RestrictPublicBuckets?: boolean;
}
export interface PutBucketAccelerateConfigurationRequest {
  Bucket: string;
  AccelerateConfiguration: AccelerateConfiguration;
  ExpectedBucketOwner?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
}
export interface PutBucketAclRequest {
  ACL?: BucketCannedACL;
  AccessControlPolicy?: AccessControlPolicy;
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWrite?: string;
  GrantWriteACP?: string;
  ExpectedBucketOwner?: string;
}
export interface PutBucketAnalyticsConfigurationRequest {
  Bucket: string;
  Id: string;
  AnalyticsConfiguration: AnalyticsConfiguration;
  ExpectedBucketOwner?: string;
}
export interface PutBucketCorsRequest {
  Bucket: string;
  CORSConfiguration: CORSConfiguration;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ExpectedBucketOwner?: string;
}
export interface PutBucketEncryptionRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  ExpectedBucketOwner?: string;
}
export interface PutBucketIntelligentTieringConfigurationRequest {
  Bucket: string;
  Id: string;
  ExpectedBucketOwner?: string;
  IntelligentTieringConfiguration: IntelligentTieringConfiguration;
}
export interface PutBucketInventoryConfigurationRequest {
  Bucket: string;
  Id: string;
  InventoryConfiguration: InventoryConfiguration;
  ExpectedBucketOwner?: string;
}
export interface PutBucketLifecycleConfigurationOutput {
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize;
}
export interface PutBucketLifecycleConfigurationRequest {
  Bucket: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  LifecycleConfiguration?: BucketLifecycleConfiguration;
  ExpectedBucketOwner?: string;
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize;
}
export interface PutBucketLoggingRequest {
  Bucket: string;
  BucketLoggingStatus: BucketLoggingStatus;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ExpectedBucketOwner?: string;
}
export interface PutBucketMetricsConfigurationRequest {
  Bucket: string;
  Id: string;
  MetricsConfiguration: MetricsConfiguration;
  ExpectedBucketOwner?: string;
}
export interface PutBucketNotificationConfigurationRequest {
  Bucket: string;
  NotificationConfiguration: NotificationConfiguration;
  ExpectedBucketOwner?: string;
  SkipDestinationValidation?: boolean;
}
export interface PutBucketOwnershipControlsRequest {
  Bucket: string;
  ContentMD5?: string;
  ExpectedBucketOwner?: string;
  OwnershipControls: OwnershipControls;
  ChecksumAlgorithm?: ChecksumAlgorithm;
}
export interface PutBucketPolicyRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ConfirmRemoveSelfBucketAccess?: boolean;
  Policy: string;
  ExpectedBucketOwner?: string;
}
export interface PutBucketReplicationRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ReplicationConfiguration: ReplicationConfiguration;
  Token?: string;
  ExpectedBucketOwner?: string;
}
export interface PutBucketRequestPaymentRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  RequestPaymentConfiguration: RequestPaymentConfiguration;
  ExpectedBucketOwner?: string;
}
export interface PutBucketTaggingRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  Tagging: Tagging;
  ExpectedBucketOwner?: string;
}
export interface PutBucketVersioningRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  MFA?: string;
  VersioningConfiguration: VersioningConfiguration;
  ExpectedBucketOwner?: string;
}
export interface PutBucketWebsiteRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  WebsiteConfiguration: WebsiteConfiguration;
  ExpectedBucketOwner?: string;
}
export interface PutObjectAclOutput {
  RequestCharged?: RequestCharged;
}
export interface PutObjectAclRequest {
  ACL?: ObjectCannedACL;
  AccessControlPolicy?: AccessControlPolicy;
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWrite?: string;
  GrantWriteACP?: string;
  Key: string;
  RequestPayer?: RequestPayer;
  VersionId?: string;
  ExpectedBucketOwner?: string;
}
export interface PutObjectLegalHoldOutput {
  RequestCharged?: RequestCharged;
}
export interface PutObjectLegalHoldRequest {
  Bucket: string;
  Key: string;
  LegalHold?: ObjectLockLegalHold;
  RequestPayer?: RequestPayer;
  VersionId?: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ExpectedBucketOwner?: string;
}
export interface PutObjectLockConfigurationOutput {
  RequestCharged?: RequestCharged;
}
export interface PutObjectLockConfigurationRequest {
  Bucket: string;
  ObjectLockConfiguration?: ObjectLockConfiguration;
  RequestPayer?: RequestPayer;
  Token?: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ExpectedBucketOwner?: string;
}
export interface PutObjectOutput {
  Expiration?: string;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ChecksumType?: ChecksumType;
  ServerSideEncryption?: ServerSideEncryption;
  VersionId?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  Size?: number;
  RequestCharged?: RequestCharged;
}
export interface PutObjectRequest {
  ACL?: ObjectCannedACL;
  Body?: Uint8Array | string;
  Bucket: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentLength?: number;
  ContentMD5?: string;
  ContentType?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  Expires?: Date | string;
  IfMatch?: string;
  IfNoneMatch?: string;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWriteACP?: string;
  Key: string;
  WriteOffsetBytes?: number;
  Metadata?: Record<string, string>;
  ServerSideEncryption?: ServerSideEncryption;
  StorageClass?: StorageClass;
  WebsiteRedirectLocation?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestPayer?: RequestPayer;
  Tagging?: string;
  ObjectLockMode?: ObjectLockMode;
  ObjectLockRetainUntilDate?: Date | string;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  ExpectedBucketOwner?: string;
}
export interface PutObjectRetentionOutput {
  RequestCharged?: RequestCharged;
}
export interface PutObjectRetentionRequest {
  Bucket: string;
  Key: string;
  Retention?: ObjectLockRetention;
  RequestPayer?: RequestPayer;
  VersionId?: string;
  BypassGovernanceRetention?: boolean;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ExpectedBucketOwner?: string;
}
export interface PutObjectTaggingOutput {
  VersionId?: string;
}
export interface PutObjectTaggingRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  Tagging: Tagging;
  ExpectedBucketOwner?: string;
  RequestPayer?: RequestPayer;
}
export interface PutPublicAccessBlockRequest {
  Bucket: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
  ExpectedBucketOwner?: string;
}
export type QueueArn = string;

export interface QueueConfiguration {
  Id?: string;
  QueueArn: string;
  Events: Array<Event>;
  Filter?: NotificationConfigurationFilter;
}
export type QueueConfigurationList = Array<QueueConfiguration>;
export type Quiet = boolean;

export type QuoteCharacter = string;

export type QuoteEscapeCharacter = string;

export type QuoteFields = "ALWAYS" | "ASNEEDED";
export type Range = string;

export type RecordDelimiter = string;

export interface RecordsEvent {
  Payload?: Uint8Array | string;
}
export interface Redirect {
  HostName?: string;
  HttpRedirectCode?: string;
  Protocol?: Protocol;
  ReplaceKeyPrefixWith?: string;
  ReplaceKeyWith?: string;
}
export interface RedirectAllRequestsTo {
  HostName: string;
  Protocol?: Protocol;
}
export type Region = string;

export interface RenameObjectOutput {}
export interface RenameObjectRequest {
  Bucket: string;
  Key: string;
  RenameSource: string;
  DestinationIfMatch?: string;
  DestinationIfNoneMatch?: string;
  DestinationIfModifiedSince?: Date | string;
  DestinationIfUnmodifiedSince?: Date | string;
  SourceIfMatch?: string;
  SourceIfNoneMatch?: string;
  SourceIfModifiedSince?: Date | string;
  SourceIfUnmodifiedSince?: Date | string;
  ClientToken?: string;
}
export type RenameSource = string;

export type RenameSourceIfMatch = string;

export type RenameSourceIfModifiedSince = Date | string;

export type RenameSourceIfNoneMatch = string;

export type RenameSourceIfUnmodifiedSince = Date | string;

export type ReplaceKeyPrefixWith = string;

export type ReplaceKeyWith = string;

export type ReplicaKmsKeyID = string;

export interface ReplicaModifications {
  Status: ReplicaModificationsStatus;
}
export type ReplicaModificationsStatus = "Enabled" | "Disabled";
export interface ReplicationConfiguration {
  Role: string;
  Rules: Array<ReplicationRule>;
}
export interface ReplicationRule {
  ID?: string;
  Priority?: number;
  Prefix?: string;
  Filter?: ReplicationRuleFilter;
  Status: ReplicationRuleStatus;
  SourceSelectionCriteria?: SourceSelectionCriteria;
  ExistingObjectReplication?: ExistingObjectReplication;
  Destination: Destination;
  DeleteMarkerReplication?: DeleteMarkerReplication;
}
export interface ReplicationRuleAndOperator {
  Prefix?: string;
  Tags?: Array<Tag>;
}
export interface ReplicationRuleFilter {
  Prefix?: string;
  Tag?: Tag;
  And?: ReplicationRuleAndOperator;
}
export type ReplicationRules = Array<ReplicationRule>;
export type ReplicationRuleStatus = "Enabled" | "Disabled";
export type ReplicationStatus =
  | "COMPLETE"
  | "PENDING"
  | "FAILED"
  | "REPLICA"
  | "COMPLETED";
export interface ReplicationTime {
  Status: ReplicationTimeStatus;
  Time: ReplicationTimeValue;
}
export type ReplicationTimeStatus = "Enabled" | "Disabled";
export interface ReplicationTimeValue {
  Minutes?: number;
}
export type RequestCharged = "requester";
export type RequestPayer = "requester";
export interface RequestPaymentConfiguration {
  Payer: Payer;
}
export interface RequestProgress {
  Enabled?: boolean;
}
export type RequestRoute = string;

export type RequestToken = string;

export type ResponseCacheControl = string;

export type ResponseContentDisposition = string;

export type ResponseContentEncoding = string;

export type ResponseContentLanguage = string;

export type ResponseContentType = string;

export type ResponseExpires = Date | string;

export type Restore = string;

export type RestoreExpiryDate = Date | string;

export interface RestoreObjectOutput {
  RequestCharged?: RequestCharged;
  RestoreOutputPath?: string;
}
export interface RestoreObjectRequest {
  Bucket: string;
  Key: string;
  VersionId?: string;
  RestoreRequest?: RestoreRequest;
  RequestPayer?: RequestPayer;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ExpectedBucketOwner?: string;
}
export type RestoreOutputPath = string;

export interface RestoreRequest {
  Days?: number;
  GlacierJobParameters?: GlacierJobParameters;
  Type?: RestoreRequestType;
  Tier?: Tier;
  Description?: string;
  SelectParameters?: SelectParameters;
  OutputLocation?: OutputLocation;
}
export type RestoreRequestType = "SELECT";
export interface RestoreStatus {
  IsRestoreInProgress?: boolean;
  RestoreExpiryDate?: Date | string;
}
export type Role = string;

export interface RoutingRule {
  Condition?: Condition;
  Redirect: Redirect;
}
export type RoutingRules = Array<RoutingRule>;
export interface S3KeyFilter {
  FilterRules?: Array<FilterRule>;
}
export interface S3Location {
  BucketName: string;
  Prefix: string;
  Encryption?: Encryption;
  CannedACL?: ObjectCannedACL;
  AccessControlList?: Array<Grant>;
  Tagging?: Tagging;
  UserMetadata?: Array<MetadataEntry>;
  StorageClass?: StorageClass;
}
export type S3RegionalOrS3ExpressBucketArnString = string;

export type S3TablesArn = string;

export type S3TablesBucketArn = string;

export interface S3TablesDestination {
  TableBucketArn: string;
  TableName: string;
}
export interface S3TablesDestinationResult {
  TableBucketArn: string;
  TableName: string;
  TableArn: string;
  TableNamespace: string;
}
export type S3TablesName = string;

export type S3TablesNamespace = string;

export interface ScanRange {
  Start?: number;
  End?: number;
}
interface _SelectObjectContentEventStream {
  Records?: RecordsEvent;
  Stats?: StatsEvent;
  Progress?: ProgressEvent;
  Cont?: ContinuationEvent;
  End?: EndEvent;
}

export type SelectObjectContentEventStream =
  | (_SelectObjectContentEventStream & { Records: RecordsEvent })
  | (_SelectObjectContentEventStream & { Stats: StatsEvent })
  | (_SelectObjectContentEventStream & { Progress: ProgressEvent })
  | (_SelectObjectContentEventStream & { Cont: ContinuationEvent })
  | (_SelectObjectContentEventStream & { End: EndEvent });
export interface SelectObjectContentOutput {
  Payload?: SelectObjectContentEventStream;
}
export interface SelectObjectContentRequest {
  Bucket: string;
  Key: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  Expression: string;
  ExpressionType: ExpressionType;
  RequestProgress?: RequestProgress;
  InputSerialization: InputSerialization;
  OutputSerialization: OutputSerialization;
  ScanRange?: ScanRange;
  ExpectedBucketOwner?: string;
}
export interface SelectParameters {
  InputSerialization: InputSerialization;
  ExpressionType: ExpressionType;
  Expression: string;
  OutputSerialization: OutputSerialization;
}
export type ServerSideEncryption =
  | "AES256"
  | "aws_fsx"
  | "aws_kms"
  | "aws_kms_dsse";
export interface ServerSideEncryptionByDefault {
  SSEAlgorithm: ServerSideEncryption;
  KMSMasterKeyID?: string;
}
export interface ServerSideEncryptionConfiguration {
  Rules: Array<ServerSideEncryptionRule>;
}
export interface ServerSideEncryptionRule {
  ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
  BucketKeyEnabled?: boolean;
}
export type ServerSideEncryptionRules = Array<ServerSideEncryptionRule>;
export interface SessionCredentials {
  AccessKeyId: string;
  SecretAccessKey: string;
  SessionToken: string;
  Expiration: Date | string;
}
export type SessionCredentialValue = string;

export type SessionExpiration = Date | string;

export type SessionMode = "ReadOnly" | "ReadWrite";
export type Setting = boolean;

export interface SimplePrefix {}
export type Size = number;

export type SkipValidation = boolean;

export interface SourceSelectionCriteria {
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
  ReplicaModifications?: ReplicaModifications;
}
export type SSECustomerAlgorithm = string;

export type SSECustomerKey = string;

export type SSECustomerKeyMD5 = string;

export interface SSEKMS {
  KeyId: string;
}
export interface SseKmsEncryptedObjects {
  Status: SseKmsEncryptedObjectsStatus;
}
export type SseKmsEncryptedObjectsStatus = "Enabled" | "Disabled";
export type SSEKMSEncryptionContext = string;

export type SSEKMSKeyId = string;

export interface SSES3 {}
export type Start = number;

export type StartAfter = string;

export interface Stats {
  BytesScanned?: number;
  BytesProcessed?: number;
  BytesReturned?: number;
}
export interface StatsEvent {
  Details?: Stats;
}
export type StorageClass =
  | "STANDARD"
  | "REDUCED_REDUNDANCY"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "GLACIER"
  | "DEEP_ARCHIVE"
  | "OUTPOSTS"
  | "GLACIER_IR"
  | "SNOW"
  | "EXPRESS_ONEZONE"
  | "FSX_OPENZFS";
export interface StorageClassAnalysis {
  DataExport?: StorageClassAnalysisDataExport;
}
export interface StorageClassAnalysisDataExport {
  OutputSchemaVersion: StorageClassAnalysisSchemaVersion;
  Destination: AnalyticsExportDestination;
}
export type StorageClassAnalysisSchemaVersion = "V_1";
export type StreamingBlob = Uint8Array | string;

export type Suffix = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagCount = number;

export interface Tagging {
  TagSet: Array<Tag>;
}
export type TaggingDirective = "COPY" | "REPLACE";
export type TaggingHeader = string;

export type TagSet = Array<Tag>;
export type TargetBucket = string;

export interface TargetGrant {
  Grantee?: Grantee;
  Permission?: BucketLogsPermission;
}
export type TargetGrants = Array<TargetGrant>;
export interface TargetObjectKeyFormat {
  SimplePrefix?: SimplePrefix;
  PartitionedPrefix?: PartitionedPrefix;
}
export type TargetPrefix = string;

export type Tier = "Standard" | "Bulk" | "Expedited";
export interface Tiering {
  Days: number;
  AccessTier: IntelligentTieringAccessTier;
}
export type TieringList = Array<Tiering>;
export type Token = string;

export declare class TooManyParts extends EffectData.TaggedError(
  "TooManyParts",
)<{}> {}
export type TopicArn = string;

export interface TopicConfiguration {
  Id?: string;
  TopicArn: string;
  Events: Array<Event>;
  Filter?: NotificationConfigurationFilter;
}
export type TopicConfigurationList = Array<TopicConfiguration>;
export interface Transition {
  Date?: Date | string;
  Days?: number;
  StorageClass?: TransitionStorageClass;
}
export type TransitionDefaultMinimumObjectSize =
  | "varies_by_storage_class"
  | "all_storage_classes_128K";
export type TransitionList = Array<Transition>;
export type TransitionStorageClass =
  | "GLACIER"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE"
  | "GLACIER_IR";
export type Type = "CanonicalUser" | "AmazonCustomerByEmail" | "Group";
export type UploadIdMarker = string;

export interface UploadPartCopyOutput {
  CopySourceVersionId?: string;
  CopyPartResult?: CopyPartResult;
  ServerSideEncryption?: ServerSideEncryption;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged;
}
export interface UploadPartCopyRequest {
  Bucket: string;
  CopySource: string;
  CopySourceIfMatch?: string;
  CopySourceIfModifiedSince?: Date | string;
  CopySourceIfNoneMatch?: string;
  CopySourceIfUnmodifiedSince?: Date | string;
  CopySourceRange?: string;
  Key: string;
  PartNumber: number;
  UploadId: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  CopySourceSSECustomerAlgorithm?: string;
  CopySourceSSECustomerKey?: string;
  CopySourceSSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
  ExpectedSourceBucketOwner?: string;
}
export interface UploadPartOutput {
  ServerSideEncryption?: ServerSideEncryption;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged;
}
export interface UploadPartRequest {
  Body?: Uint8Array | string;
  Bucket: string;
  ContentLength?: number;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  Key: string;
  PartNumber: number;
  UploadId: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer;
  ExpectedBucketOwner?: string;
}
export type URI = string;

export type UserMetadata = Array<MetadataEntry>;
export type Value = string;

export type VersionCount = number;

export type VersionIdMarker = string;

export interface VersioningConfiguration {
  MFADelete?: MFADelete;
  Status?: BucketVersioningStatus;
}
export interface WebsiteConfiguration {
  ErrorDocument?: ErrorDocument;
  IndexDocument?: IndexDocument;
  RedirectAllRequestsTo?: RedirectAllRequestsTo;
  RoutingRules?: Array<RoutingRule>;
}
export type WebsiteRedirectLocation = string;

export interface WriteGetObjectResponseRequest {
  RequestRoute: string;
  RequestToken: string;
  Body?: Uint8Array | string;
  StatusCode?: number;
  ErrorCode?: string;
  ErrorMessage?: string;
  AcceptRanges?: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentLength?: number;
  ContentRange?: string;
  ContentType?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumCRC64NVME?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  DeleteMarker?: boolean;
  ETag?: string;
  Expires?: Date | string;
  Expiration?: string;
  LastModified?: Date | string;
  MissingMeta?: number;
  Metadata?: Record<string, string>;
  ObjectLockMode?: ObjectLockMode;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;
  ObjectLockRetainUntilDate?: Date | string;
  PartsCount?: number;
  ReplicationStatus?: ReplicationStatus;
  RequestCharged?: RequestCharged;
  Restore?: string;
  ServerSideEncryption?: ServerSideEncryption;
  SSECustomerAlgorithm?: string;
  SSEKMSKeyId?: string;
  SSECustomerKeyMD5?: string;
  StorageClass?: StorageClass;
  TagCount?: number;
  VersionId?: string;
  BucketKeyEnabled?: boolean;
}
export type WriteOffsetBytes = number;

export type Years = number;

export declare namespace AbortMultipartUpload {
  export type Input = AbortMultipartUploadRequest;
  export type Output = AbortMultipartUploadOutput;
  export type Error = NoSuchUpload | CommonAwsError;
}

export declare namespace CompleteMultipartUpload {
  export type Input = CompleteMultipartUploadRequest;
  export type Output = CompleteMultipartUploadOutput;
  export type Error = CommonAwsError;
}

export declare namespace CopyObject {
  export type Input = CopyObjectRequest;
  export type Output = CopyObjectOutput;
  export type Error = ObjectNotInActiveTierError | CommonAwsError;
}

export declare namespace CreateBucket {
  export type Input = CreateBucketRequest;
  export type Output = CreateBucketOutput;
  export type Error =
    | BucketAlreadyExists
    | BucketAlreadyOwnedByYou
    | CommonAwsError;
}

export declare namespace CreateBucketMetadataTableConfiguration {
  export type Input = CreateBucketMetadataTableConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace CreateMultipartUpload {
  export type Input = CreateMultipartUploadRequest;
  export type Output = CreateMultipartUploadOutput;
  export type Error = CommonAwsError;
}

export declare namespace CreateSession {
  export type Input = CreateSessionRequest;
  export type Output = CreateSessionOutput;
  export type Error = NoSuchBucket | CommonAwsError;
}

export declare namespace DeleteBucket {
  export type Input = DeleteBucketRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketAnalyticsConfiguration {
  export type Input = DeleteBucketAnalyticsConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketCors {
  export type Input = DeleteBucketCorsRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketEncryption {
  export type Input = DeleteBucketEncryptionRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketIntelligentTieringConfiguration {
  export type Input = DeleteBucketIntelligentTieringConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketInventoryConfiguration {
  export type Input = DeleteBucketInventoryConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketLifecycle {
  export type Input = DeleteBucketLifecycleRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketMetadataTableConfiguration {
  export type Input = DeleteBucketMetadataTableConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketMetricsConfiguration {
  export type Input = DeleteBucketMetricsConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketOwnershipControls {
  export type Input = DeleteBucketOwnershipControlsRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketPolicy {
  export type Input = DeleteBucketPolicyRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketReplication {
  export type Input = DeleteBucketReplicationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketTagging {
  export type Input = DeleteBucketTaggingRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketWebsite {
  export type Input = DeleteBucketWebsiteRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteObject {
  export type Input = DeleteObjectRequest;
  export type Output = DeleteObjectOutput;
  export type Error = CommonAwsError;
}

export declare namespace DeleteObjects {
  export type Input = DeleteObjectsRequest;
  export type Output = DeleteObjectsOutput;
  export type Error = CommonAwsError;
}

export declare namespace DeleteObjectTagging {
  export type Input = DeleteObjectTaggingRequest;
  export type Output = DeleteObjectTaggingOutput;
  export type Error = CommonAwsError;
}

export declare namespace DeletePublicAccessBlock {
  export type Input = DeletePublicAccessBlockRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace GetBucketAccelerateConfiguration {
  export type Input = GetBucketAccelerateConfigurationRequest;
  export type Output = GetBucketAccelerateConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketAcl {
  export type Input = GetBucketAclRequest;
  export type Output = GetBucketAclOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketAnalyticsConfiguration {
  export type Input = GetBucketAnalyticsConfigurationRequest;
  export type Output = GetBucketAnalyticsConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketCors {
  export type Input = GetBucketCorsRequest;
  export type Output = GetBucketCorsOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketEncryption {
  export type Input = GetBucketEncryptionRequest;
  export type Output = GetBucketEncryptionOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketIntelligentTieringConfiguration {
  export type Input = GetBucketIntelligentTieringConfigurationRequest;
  export type Output = GetBucketIntelligentTieringConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketInventoryConfiguration {
  export type Input = GetBucketInventoryConfigurationRequest;
  export type Output = GetBucketInventoryConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketLifecycleConfiguration {
  export type Input = GetBucketLifecycleConfigurationRequest;
  export type Output = GetBucketLifecycleConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketLocation {
  export type Input = GetBucketLocationRequest;
  export type Output = GetBucketLocationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketLogging {
  export type Input = GetBucketLoggingRequest;
  export type Output = GetBucketLoggingOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketMetadataTableConfiguration {
  export type Input = GetBucketMetadataTableConfigurationRequest;
  export type Output = GetBucketMetadataTableConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketMetricsConfiguration {
  export type Input = GetBucketMetricsConfigurationRequest;
  export type Output = GetBucketMetricsConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketNotificationConfiguration {
  export type Input = GetBucketNotificationConfigurationRequest;
  export type Output = NotificationConfiguration;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketOwnershipControls {
  export type Input = GetBucketOwnershipControlsRequest;
  export type Output = GetBucketOwnershipControlsOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketPolicy {
  export type Input = GetBucketPolicyRequest;
  export type Output = GetBucketPolicyOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketPolicyStatus {
  export type Input = GetBucketPolicyStatusRequest;
  export type Output = GetBucketPolicyStatusOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketReplication {
  export type Input = GetBucketReplicationRequest;
  export type Output = GetBucketReplicationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketRequestPayment {
  export type Input = GetBucketRequestPaymentRequest;
  export type Output = GetBucketRequestPaymentOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketTagging {
  export type Input = GetBucketTaggingRequest;
  export type Output = GetBucketTaggingOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketVersioning {
  export type Input = GetBucketVersioningRequest;
  export type Output = GetBucketVersioningOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketWebsite {
  export type Input = GetBucketWebsiteRequest;
  export type Output = GetBucketWebsiteOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetObject {
  export type Input = GetObjectRequest;
  export type Output = GetObjectOutput;
  export type Error = InvalidObjectState | NoSuchKey | CommonAwsError;
}

export declare namespace GetObjectAcl {
  export type Input = GetObjectAclRequest;
  export type Output = GetObjectAclOutput;
  export type Error = NoSuchKey | CommonAwsError;
}

export declare namespace GetObjectAttributes {
  export type Input = GetObjectAttributesRequest;
  export type Output = GetObjectAttributesOutput;
  export type Error = NoSuchKey | CommonAwsError;
}

export declare namespace GetObjectLegalHold {
  export type Input = GetObjectLegalHoldRequest;
  export type Output = GetObjectLegalHoldOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetObjectLockConfiguration {
  export type Input = GetObjectLockConfigurationRequest;
  export type Output = GetObjectLockConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetObjectRetention {
  export type Input = GetObjectRetentionRequest;
  export type Output = GetObjectRetentionOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetObjectTagging {
  export type Input = GetObjectTaggingRequest;
  export type Output = GetObjectTaggingOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetObjectTorrent {
  export type Input = GetObjectTorrentRequest;
  export type Output = GetObjectTorrentOutput;
  export type Error = CommonAwsError;
}

export declare namespace GetPublicAccessBlock {
  export type Input = GetPublicAccessBlockRequest;
  export type Output = GetPublicAccessBlockOutput;
  export type Error = CommonAwsError;
}

export declare namespace HeadBucket {
  export type Input = HeadBucketRequest;
  export type Output = HeadBucketOutput;
  export type Error = NotFound | CommonAwsError;
}

export declare namespace HeadObject {
  export type Input = HeadObjectRequest;
  export type Output = HeadObjectOutput;
  export type Error = NotFound | CommonAwsError;
}

export declare namespace ListBucketAnalyticsConfigurations {
  export type Input = ListBucketAnalyticsConfigurationsRequest;
  export type Output = ListBucketAnalyticsConfigurationsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListBucketIntelligentTieringConfigurations {
  export type Input = ListBucketIntelligentTieringConfigurationsRequest;
  export type Output = ListBucketIntelligentTieringConfigurationsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListBucketInventoryConfigurations {
  export type Input = ListBucketInventoryConfigurationsRequest;
  export type Output = ListBucketInventoryConfigurationsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListBucketMetricsConfigurations {
  export type Input = ListBucketMetricsConfigurationsRequest;
  export type Output = ListBucketMetricsConfigurationsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListBuckets {
  export type Input = ListBucketsRequest;
  export type Output = ListBucketsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListDirectoryBuckets {
  export type Input = ListDirectoryBucketsRequest;
  export type Output = ListDirectoryBucketsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListMultipartUploads {
  export type Input = ListMultipartUploadsRequest;
  export type Output = ListMultipartUploadsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListObjects {
  export type Input = ListObjectsRequest;
  export type Output = ListObjectsOutput;
  export type Error = NoSuchBucket | CommonAwsError;
}

export declare namespace ListObjectsV2 {
  export type Input = ListObjectsV2Request;
  export type Output = ListObjectsV2Output;
  export type Error = NoSuchBucket | CommonAwsError;
}

export declare namespace ListObjectVersions {
  export type Input = ListObjectVersionsRequest;
  export type Output = ListObjectVersionsOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListParts {
  export type Input = ListPartsRequest;
  export type Output = ListPartsOutput;
  export type Error = CommonAwsError;
}

export declare namespace PutBucketAccelerateConfiguration {
  export type Input = PutBucketAccelerateConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketAcl {
  export type Input = PutBucketAclRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketAnalyticsConfiguration {
  export type Input = PutBucketAnalyticsConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketCors {
  export type Input = PutBucketCorsRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketEncryption {
  export type Input = PutBucketEncryptionRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketIntelligentTieringConfiguration {
  export type Input = PutBucketIntelligentTieringConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketInventoryConfiguration {
  export type Input = PutBucketInventoryConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketLifecycleConfiguration {
  export type Input = PutBucketLifecycleConfigurationRequest;
  export type Output = PutBucketLifecycleConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace PutBucketLogging {
  export type Input = PutBucketLoggingRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketMetricsConfiguration {
  export type Input = PutBucketMetricsConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketNotificationConfiguration {
  export type Input = PutBucketNotificationConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketOwnershipControls {
  export type Input = PutBucketOwnershipControlsRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketPolicy {
  export type Input = PutBucketPolicyRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketReplication {
  export type Input = PutBucketReplicationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketRequestPayment {
  export type Input = PutBucketRequestPaymentRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketTagging {
  export type Input = PutBucketTaggingRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketVersioning {
  export type Input = PutBucketVersioningRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketWebsite {
  export type Input = PutBucketWebsiteRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutObject {
  export type Input = PutObjectRequest;
  export type Output = PutObjectOutput;
  export type Error =
    | EncryptionTypeMismatch
    | InvalidRequest
    | InvalidWriteOffset
    | TooManyParts
    | CommonAwsError;
}

export declare namespace PutObjectAcl {
  export type Input = PutObjectAclRequest;
  export type Output = PutObjectAclOutput;
  export type Error = NoSuchKey | CommonAwsError;
}

export declare namespace PutObjectLegalHold {
  export type Input = PutObjectLegalHoldRequest;
  export type Output = PutObjectLegalHoldOutput;
  export type Error = CommonAwsError;
}

export declare namespace PutObjectLockConfiguration {
  export type Input = PutObjectLockConfigurationRequest;
  export type Output = PutObjectLockConfigurationOutput;
  export type Error = CommonAwsError;
}

export declare namespace PutObjectRetention {
  export type Input = PutObjectRetentionRequest;
  export type Output = PutObjectRetentionOutput;
  export type Error = CommonAwsError;
}

export declare namespace PutObjectTagging {
  export type Input = PutObjectTaggingRequest;
  export type Output = PutObjectTaggingOutput;
  export type Error = CommonAwsError;
}

export declare namespace PutPublicAccessBlock {
  export type Input = PutPublicAccessBlockRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace RenameObject {
  export type Input = RenameObjectRequest;
  export type Output = RenameObjectOutput;
  export type Error = IdempotencyParameterMismatch | CommonAwsError;
}

export declare namespace RestoreObject {
  export type Input = RestoreObjectRequest;
  export type Output = RestoreObjectOutput;
  export type Error = ObjectAlreadyInActiveTierError | CommonAwsError;
}

export declare namespace SelectObjectContent {
  export type Input = SelectObjectContentRequest;
  export type Output = SelectObjectContentOutput;
  export type Error = CommonAwsError;
}

export declare namespace UploadPart {
  export type Input = UploadPartRequest;
  export type Output = UploadPartOutput;
  export type Error = CommonAwsError;
}

export declare namespace UploadPartCopy {
  export type Input = UploadPartCopyRequest;
  export type Output = UploadPartCopyOutput;
  export type Error = CommonAwsError;
}

export declare namespace WriteGetObjectResponse {
  export type Input = WriteGetObjectResponseRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}
