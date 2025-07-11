import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class S3Control extends AWSServiceClient {
  associateAccessGrantsIdentityCenter(
    input: AssociateAccessGrantsIdentityCenterRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  createAccessGrant(
    input: CreateAccessGrantRequest,
  ): Effect.Effect<CreateAccessGrantResult, CommonAwsError>;
  createAccessGrantsInstance(
    input: CreateAccessGrantsInstanceRequest,
  ): Effect.Effect<CreateAccessGrantsInstanceResult, CommonAwsError>;
  createAccessGrantsLocation(
    input: CreateAccessGrantsLocationRequest,
  ): Effect.Effect<CreateAccessGrantsLocationResult, CommonAwsError>;
  createAccessPoint(
    input: CreateAccessPointRequest,
  ): Effect.Effect<CreateAccessPointResult, CommonAwsError>;
  createAccessPointForObjectLambda(
    input: CreateAccessPointForObjectLambdaRequest,
  ): Effect.Effect<CreateAccessPointForObjectLambdaResult, CommonAwsError>;
  createBucket(
    input: CreateBucketRequest,
  ): Effect.Effect<
    CreateBucketResult,
    BucketAlreadyExists | BucketAlreadyOwnedByYou | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResult,
    | BadRequestException
    | IdempotencyException
    | InternalServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createMultiRegionAccessPoint(
    input: CreateMultiRegionAccessPointRequest,
  ): Effect.Effect<CreateMultiRegionAccessPointResult, CommonAwsError>;
  createStorageLensGroup(
    input: CreateStorageLensGroupRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessGrant(
    input: DeleteAccessGrantRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessGrantsInstance(
    input: DeleteAccessGrantsInstanceRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessGrantsInstanceResourcePolicy(
    input: DeleteAccessGrantsInstanceResourcePolicyRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessGrantsLocation(
    input: DeleteAccessGrantsLocationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessPoint(
    input: DeleteAccessPointRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessPointForObjectLambda(
    input: DeleteAccessPointForObjectLambdaRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessPointPolicy(
    input: DeleteAccessPointPolicyRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessPointPolicyForObjectLambda(
    input: DeleteAccessPointPolicyForObjectLambdaRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteAccessPointScope(
    input: DeleteAccessPointScopeRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteBucket(input: DeleteBucketRequest): Effect.Effect<{}, CommonAwsError>;
  deleteBucketLifecycleConfiguration(
    input: DeleteBucketLifecycleConfigurationRequest,
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
  deleteJobTagging(
    input: DeleteJobTaggingRequest,
  ): Effect.Effect<
    DeleteJobTaggingResult,
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteMultiRegionAccessPoint(
    input: DeleteMultiRegionAccessPointRequest,
  ): Effect.Effect<DeleteMultiRegionAccessPointResult, CommonAwsError>;
  deletePublicAccessBlock(
    input: DeletePublicAccessBlockRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteStorageLensConfiguration(
    input: DeleteStorageLensConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  deleteStorageLensConfigurationTagging(
    input: DeleteStorageLensConfigurationTaggingRequest,
  ): Effect.Effect<DeleteStorageLensConfigurationTaggingResult, CommonAwsError>;
  deleteStorageLensGroup(
    input: DeleteStorageLensGroupRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  describeJob(
    input: DescribeJobRequest,
  ): Effect.Effect<
    DescribeJobResult,
    | BadRequestException
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeMultiRegionAccessPointOperation(
    input: DescribeMultiRegionAccessPointOperationRequest,
  ): Effect.Effect<
    DescribeMultiRegionAccessPointOperationResult,
    CommonAwsError
  >;
  dissociateAccessGrantsIdentityCenter(
    input: DissociateAccessGrantsIdentityCenterRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  getAccessGrant(
    input: GetAccessGrantRequest,
  ): Effect.Effect<GetAccessGrantResult, CommonAwsError>;
  getAccessGrantsInstance(
    input: GetAccessGrantsInstanceRequest,
  ): Effect.Effect<GetAccessGrantsInstanceResult, CommonAwsError>;
  getAccessGrantsInstanceForPrefix(
    input: GetAccessGrantsInstanceForPrefixRequest,
  ): Effect.Effect<GetAccessGrantsInstanceForPrefixResult, CommonAwsError>;
  getAccessGrantsInstanceResourcePolicy(
    input: GetAccessGrantsInstanceResourcePolicyRequest,
  ): Effect.Effect<GetAccessGrantsInstanceResourcePolicyResult, CommonAwsError>;
  getAccessGrantsLocation(
    input: GetAccessGrantsLocationRequest,
  ): Effect.Effect<GetAccessGrantsLocationResult, CommonAwsError>;
  getAccessPoint(
    input: GetAccessPointRequest,
  ): Effect.Effect<GetAccessPointResult, CommonAwsError>;
  getAccessPointConfigurationForObjectLambda(
    input: GetAccessPointConfigurationForObjectLambdaRequest,
  ): Effect.Effect<
    GetAccessPointConfigurationForObjectLambdaResult,
    CommonAwsError
  >;
  getAccessPointForObjectLambda(
    input: GetAccessPointForObjectLambdaRequest,
  ): Effect.Effect<GetAccessPointForObjectLambdaResult, CommonAwsError>;
  getAccessPointPolicy(
    input: GetAccessPointPolicyRequest,
  ): Effect.Effect<GetAccessPointPolicyResult, CommonAwsError>;
  getAccessPointPolicyForObjectLambda(
    input: GetAccessPointPolicyForObjectLambdaRequest,
  ): Effect.Effect<GetAccessPointPolicyForObjectLambdaResult, CommonAwsError>;
  getAccessPointPolicyStatus(
    input: GetAccessPointPolicyStatusRequest,
  ): Effect.Effect<GetAccessPointPolicyStatusResult, CommonAwsError>;
  getAccessPointPolicyStatusForObjectLambda(
    input: GetAccessPointPolicyStatusForObjectLambdaRequest,
  ): Effect.Effect<
    GetAccessPointPolicyStatusForObjectLambdaResult,
    CommonAwsError
  >;
  getAccessPointScope(
    input: GetAccessPointScopeRequest,
  ): Effect.Effect<GetAccessPointScopeResult, CommonAwsError>;
  getBucket(
    input: GetBucketRequest,
  ): Effect.Effect<GetBucketResult, CommonAwsError>;
  getBucketLifecycleConfiguration(
    input: GetBucketLifecycleConfigurationRequest,
  ): Effect.Effect<GetBucketLifecycleConfigurationResult, CommonAwsError>;
  getBucketPolicy(
    input: GetBucketPolicyRequest,
  ): Effect.Effect<GetBucketPolicyResult, CommonAwsError>;
  getBucketReplication(
    input: GetBucketReplicationRequest,
  ): Effect.Effect<GetBucketReplicationResult, CommonAwsError>;
  getBucketTagging(
    input: GetBucketTaggingRequest,
  ): Effect.Effect<GetBucketTaggingResult, CommonAwsError>;
  getBucketVersioning(
    input: GetBucketVersioningRequest,
  ): Effect.Effect<GetBucketVersioningResult, CommonAwsError>;
  getDataAccess(
    input: GetDataAccessRequest,
  ): Effect.Effect<GetDataAccessResult, CommonAwsError>;
  getJobTagging(
    input: GetJobTaggingRequest,
  ): Effect.Effect<
    GetJobTaggingResult,
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getMultiRegionAccessPoint(
    input: GetMultiRegionAccessPointRequest,
  ): Effect.Effect<GetMultiRegionAccessPointResult, CommonAwsError>;
  getMultiRegionAccessPointPolicy(
    input: GetMultiRegionAccessPointPolicyRequest,
  ): Effect.Effect<GetMultiRegionAccessPointPolicyResult, CommonAwsError>;
  getMultiRegionAccessPointPolicyStatus(
    input: GetMultiRegionAccessPointPolicyStatusRequest,
  ): Effect.Effect<GetMultiRegionAccessPointPolicyStatusResult, CommonAwsError>;
  getMultiRegionAccessPointRoutes(
    input: GetMultiRegionAccessPointRoutesRequest,
  ): Effect.Effect<GetMultiRegionAccessPointRoutesResult, CommonAwsError>;
  getPublicAccessBlock(
    input: GetPublicAccessBlockRequest,
  ): Effect.Effect<
    GetPublicAccessBlockOutput,
    NoSuchPublicAccessBlockConfiguration | CommonAwsError
  >;
  getStorageLensConfiguration(
    input: GetStorageLensConfigurationRequest,
  ): Effect.Effect<GetStorageLensConfigurationResult, CommonAwsError>;
  getStorageLensConfigurationTagging(
    input: GetStorageLensConfigurationTaggingRequest,
  ): Effect.Effect<GetStorageLensConfigurationTaggingResult, CommonAwsError>;
  getStorageLensGroup(
    input: GetStorageLensGroupRequest,
  ): Effect.Effect<GetStorageLensGroupResult, CommonAwsError>;
  listAccessGrants(
    input: ListAccessGrantsRequest,
  ): Effect.Effect<ListAccessGrantsResult, CommonAwsError>;
  listAccessGrantsInstances(
    input: ListAccessGrantsInstancesRequest,
  ): Effect.Effect<ListAccessGrantsInstancesResult, CommonAwsError>;
  listAccessGrantsLocations(
    input: ListAccessGrantsLocationsRequest,
  ): Effect.Effect<ListAccessGrantsLocationsResult, CommonAwsError>;
  listAccessPoints(
    input: ListAccessPointsRequest,
  ): Effect.Effect<ListAccessPointsResult, CommonAwsError>;
  listAccessPointsForDirectoryBuckets(
    input: ListAccessPointsForDirectoryBucketsRequest,
  ): Effect.Effect<ListAccessPointsForDirectoryBucketsResult, CommonAwsError>;
  listAccessPointsForObjectLambda(
    input: ListAccessPointsForObjectLambdaRequest,
  ): Effect.Effect<ListAccessPointsForObjectLambdaResult, CommonAwsError>;
  listCallerAccessGrants(
    input: ListCallerAccessGrantsRequest,
  ): Effect.Effect<ListCallerAccessGrantsResult, CommonAwsError>;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResult,
    | InternalServiceException
    | InvalidNextTokenException
    | InvalidRequestException
    | CommonAwsError
  >;
  listMultiRegionAccessPoints(
    input: ListMultiRegionAccessPointsRequest,
  ): Effect.Effect<ListMultiRegionAccessPointsResult, CommonAwsError>;
  listRegionalBuckets(
    input: ListRegionalBucketsRequest,
  ): Effect.Effect<ListRegionalBucketsResult, CommonAwsError>;
  listStorageLensConfigurations(
    input: ListStorageLensConfigurationsRequest,
  ): Effect.Effect<ListStorageLensConfigurationsResult, CommonAwsError>;
  listStorageLensGroups(
    input: ListStorageLensGroupsRequest,
  ): Effect.Effect<ListStorageLensGroupsResult, CommonAwsError>;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<ListTagsForResourceResult, CommonAwsError>;
  putAccessGrantsInstanceResourcePolicy(
    input: PutAccessGrantsInstanceResourcePolicyRequest,
  ): Effect.Effect<PutAccessGrantsInstanceResourcePolicyResult, CommonAwsError>;
  putAccessPointConfigurationForObjectLambda(
    input: PutAccessPointConfigurationForObjectLambdaRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putAccessPointPolicy(
    input: PutAccessPointPolicyRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putAccessPointPolicyForObjectLambda(
    input: PutAccessPointPolicyForObjectLambdaRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putAccessPointScope(
    input: PutAccessPointScopeRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketLifecycleConfiguration(
    input: PutBucketLifecycleConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketPolicy(
    input: PutBucketPolicyRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketReplication(
    input: PutBucketReplicationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketTagging(
    input: PutBucketTaggingRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putBucketVersioning(
    input: PutBucketVersioningRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putJobTagging(
    input: PutJobTaggingRequest,
  ): Effect.Effect<
    PutJobTaggingResult,
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError
  >;
  putMultiRegionAccessPointPolicy(
    input: PutMultiRegionAccessPointPolicyRequest,
  ): Effect.Effect<PutMultiRegionAccessPointPolicyResult, CommonAwsError>;
  putPublicAccessBlock(
    input: PutPublicAccessBlockRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putStorageLensConfiguration(
    input: PutStorageLensConfigurationRequest,
  ): Effect.Effect<{}, CommonAwsError>;
  putStorageLensConfigurationTagging(
    input: PutStorageLensConfigurationTaggingRequest,
  ): Effect.Effect<PutStorageLensConfigurationTaggingResult, CommonAwsError>;
  submitMultiRegionAccessPointRoutes(
    input: SubmitMultiRegionAccessPointRoutesRequest,
  ): Effect.Effect<SubmitMultiRegionAccessPointRoutesResult, CommonAwsError>;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<TagResourceResult, CommonAwsError>;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<UntagResourceResult, CommonAwsError>;
  updateAccessGrantsLocation(
    input: UpdateAccessGrantsLocationRequest,
  ): Effect.Effect<UpdateAccessGrantsLocationResult, CommonAwsError>;
  updateJobPriority(
    input: UpdateJobPriorityRequest,
  ): Effect.Effect<
    UpdateJobPriorityResult,
    | BadRequestException
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateJobStatus(
    input: UpdateJobStatusRequest,
  ): Effect.Effect<
    UpdateJobStatusResult,
    | BadRequestException
    | InternalServiceException
    | JobStatusException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateStorageLensGroup(
    input: UpdateStorageLensGroupRequest,
  ): Effect.Effect<{}, CommonAwsError>;
}

export interface AbortIncompleteMultipartUpload {
  DaysAfterInitiation?: number;
}
export interface AccessControlTranslation {
  Owner: OwnerOverride;
}
export type AccessGrantArn = string;

export type AccessGrantId = string;

export type AccessGrantsInstanceArn = string;

export type AccessGrantsInstanceId = string;

export type AccessGrantsInstancesList = Array<ListAccessGrantsInstanceEntry>;
export type AccessGrantsList = Array<ListAccessGrantEntry>;
export type AccessGrantsLocationArn = string;

export interface AccessGrantsLocationConfiguration {
  S3SubPrefix?: string;
}
export type AccessGrantsLocationId = string;

export type AccessGrantsLocationsList = Array<ListAccessGrantsLocationsEntry>;
export type AccessKeyId = string;

export interface AccessPoint {
  Name: string;
  NetworkOrigin: NetworkOrigin;
  VpcConfiguration?: VpcConfiguration;
  Bucket: string;
  AccessPointArn?: string;
  Alias?: string;
  BucketAccountId?: string;
  DataSourceId?: string;
  DataSourceType?: string;
}
export type AccessPointBucketName = string;

export type AccessPointList = Array<AccessPoint>;
export type AccessPointName = string;

export type AccountId = string;

export interface AccountLevel {
  ActivityMetrics?: ActivityMetrics;
  BucketLevel: BucketLevel;
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  StorageLensGroupLevel?: StorageLensGroupLevel;
}
export interface ActivityMetrics {
  IsEnabled?: boolean;
}
export interface AdvancedCostOptimizationMetrics {
  IsEnabled?: boolean;
}
export interface AdvancedDataProtectionMetrics {
  IsEnabled?: boolean;
}
export type Alias = string;

export interface AssociateAccessGrantsIdentityCenterRequest {
  AccountId: string;
  IdentityCenterArn: string;
}
export type AsyncCreationTimestamp = Date | string;

export interface AsyncErrorDetails {
  Code?: string;
  Message?: string;
  Resource?: string;
  RequestId?: string;
}
export interface AsyncOperation {
  CreationTime?: Date | string;
  Operation?: AsyncOperationName;
  RequestTokenARN?: string;
  RequestParameters?: AsyncRequestParameters;
  RequestStatus?: string;
  ResponseDetails?: AsyncResponseDetails;
}
export type AsyncOperationName =
  | "CreateMultiRegionAccessPoint"
  | "DeleteMultiRegionAccessPoint"
  | "PutMultiRegionAccessPointPolicy";
export interface AsyncRequestParameters {
  CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput;
  DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput;
  PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput;
}
export type AsyncRequestStatus = string;

export type AsyncRequestTokenARN = string;

export interface AsyncResponseDetails {
  MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse;
  ErrorDetails?: AsyncErrorDetails;
}
export interface AwsLambdaTransformation {
  FunctionArn: string;
  FunctionPayload?: string;
}
export type AwsLambdaTransformationPayload = string;

export type AwsOrgArn = string;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export type S3ControlBoolean = boolean;

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
export type BucketIdentifierString = string;

export interface BucketLevel {
  ActivityMetrics?: ActivityMetrics;
  PrefixLevel?: PrefixLevel;
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
}
export type BucketLocationConstraint =
  | "EU"
  | "eu_west_1"
  | "us_west_1"
  | "us_west_2"
  | "ap_south_1"
  | "ap_southeast_1"
  | "ap_southeast_2"
  | "ap_northeast_1"
  | "sa_east_1"
  | "cn_north_1"
  | "eu_central_1";
export type BucketName = string;

export type Buckets = Array<string>;
export type BucketVersioningStatus = "Enabled" | "Suspended";
export type CallerAccessGrantsList = Array<ListCallerAccessGrantsEntry>;
export interface CloudWatchMetrics {
  IsEnabled: boolean;
}
export type ConfigId = string;

export type ConfirmationRequired = boolean;

export type ConfirmRemoveSelfBucketAccess = boolean;

export type ContinuationToken = string;

export interface CreateAccessGrantRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  Grantee: Grantee;
  Permission: Permission;
  ApplicationArn?: string;
  S3PrefixType?: S3PrefixType;
  Tags?: Array<Tag>;
}
export interface CreateAccessGrantResult {
  CreatedAt?: Date | string;
  AccessGrantId?: string;
  AccessGrantArn?: string;
  Grantee?: Grantee;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  Permission?: Permission;
  ApplicationArn?: string;
  GrantScope?: string;
}
export interface CreateAccessGrantsInstanceRequest {
  AccountId: string;
  IdentityCenterArn?: string;
  Tags?: Array<Tag>;
}
export interface CreateAccessGrantsInstanceResult {
  CreatedAt?: Date | string;
  AccessGrantsInstanceId?: string;
  AccessGrantsInstanceArn?: string;
  IdentityCenterArn?: string;
  IdentityCenterInstanceArn?: string;
  IdentityCenterApplicationArn?: string;
}
export interface CreateAccessGrantsLocationRequest {
  AccountId: string;
  LocationScope: string;
  IAMRoleArn: string;
  Tags?: Array<Tag>;
}
export interface CreateAccessGrantsLocationResult {
  CreatedAt?: Date | string;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
export interface CreateAccessPointForObjectLambdaRequest {
  AccountId: string;
  Name: string;
  Configuration: ObjectLambdaConfiguration;
}
export interface CreateAccessPointForObjectLambdaResult {
  ObjectLambdaAccessPointArn?: string;
  Alias?: ObjectLambdaAccessPointAlias;
}
export interface CreateAccessPointRequest {
  AccountId: string;
  Name: string;
  Bucket: string;
  VpcConfiguration?: VpcConfiguration;
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  BucketAccountId?: string;
  Scope?: Scope;
}
export interface CreateAccessPointResult {
  AccessPointArn?: string;
  Alias?: string;
}
export interface CreateBucketConfiguration {
  LocationConstraint?: BucketLocationConstraint;
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
  OutpostId?: string;
}
export interface CreateBucketResult {
  Location?: string;
  BucketArn?: string;
}
export interface CreateJobRequest {
  AccountId: string;
  ConfirmationRequired?: boolean;
  Operation: JobOperation;
  Report: JobReport;
  ClientRequestToken: string;
  Manifest?: JobManifest;
  Description?: string;
  Priority: number;
  RoleArn: string;
  Tags?: Array<S3Tag>;
  ManifestGenerator?: JobManifestGenerator;
}
export interface CreateJobResult {
  JobId?: string;
}
export interface CreateMultiRegionAccessPointInput {
  Name: string;
  PublicAccessBlock?: PublicAccessBlockConfiguration;
  Regions: Array<Region>;
}
export interface CreateMultiRegionAccessPointRequest {
  AccountId: string;
  ClientToken: string;
  Details: CreateMultiRegionAccessPointInput;
}
export interface CreateMultiRegionAccessPointResult {
  RequestTokenARN?: string;
}
export interface CreateStorageLensGroupRequest {
  AccountId: string;
  StorageLensGroup: StorageLensGroup;
  Tags?: Array<Tag>;
}
export type CreationDate = Date | string;

export type CreationTimestamp = Date | string;

export interface Credentials {
  AccessKeyId?: string;
  SecretAccessKey?: string;
  SessionToken?: string;
  Expiration?: Date | string;
}
export type DataSourceId = string;

export type DataSourceType = string;

export type S3ControlDate = Date | string;

export type Days = number;

export type DaysAfterInitiation = number;

export interface DeleteAccessGrantRequest {
  AccountId: string;
  AccessGrantId: string;
}
export interface DeleteAccessGrantsInstanceRequest {
  AccountId: string;
}
export interface DeleteAccessGrantsInstanceResourcePolicyRequest {
  AccountId: string;
}
export interface DeleteAccessGrantsLocationRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
}
export interface DeleteAccessPointForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
export interface DeleteAccessPointPolicyForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
export interface DeleteAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
}
export interface DeleteAccessPointRequest {
  AccountId: string;
  Name: string;
}
export interface DeleteAccessPointScopeRequest {
  AccountId: string;
  Name: string;
}
export interface DeleteBucketLifecycleConfigurationRequest {
  AccountId: string;
  Bucket: string;
}
export interface DeleteBucketPolicyRequest {
  AccountId: string;
  Bucket: string;
}
export interface DeleteBucketReplicationRequest {
  AccountId: string;
  Bucket: string;
}
export interface DeleteBucketRequest {
  AccountId: string;
  Bucket: string;
}
export interface DeleteBucketTaggingRequest {
  AccountId: string;
  Bucket: string;
}
export interface DeleteJobTaggingRequest {
  AccountId: string;
  JobId: string;
}
export interface DeleteJobTaggingResult {}
export interface DeleteMarkerReplication {
  Status: DeleteMarkerReplicationStatus;
}
export type DeleteMarkerReplicationStatus = "Enabled" | "Disabled";
export interface DeleteMultiRegionAccessPointInput {
  Name: string;
}
export interface DeleteMultiRegionAccessPointRequest {
  AccountId: string;
  ClientToken: string;
  Details: DeleteMultiRegionAccessPointInput;
}
export interface DeleteMultiRegionAccessPointResult {
  RequestTokenARN?: string;
}
export interface DeletePublicAccessBlockRequest {
  AccountId: string;
}
export interface DeleteStorageLensConfigurationRequest {
  ConfigId: string;
  AccountId: string;
}
export interface DeleteStorageLensConfigurationTaggingRequest {
  ConfigId: string;
  AccountId: string;
}
export interface DeleteStorageLensConfigurationTaggingResult {}
export interface DeleteStorageLensGroupRequest {
  Name: string;
  AccountId: string;
}
export interface DescribeJobRequest {
  AccountId: string;
  JobId: string;
}
export interface DescribeJobResult {
  Job?: JobDescriptor;
}
export interface DescribeMultiRegionAccessPointOperationRequest {
  AccountId: string;
  RequestTokenARN: string;
}
export interface DescribeMultiRegionAccessPointOperationResult {
  AsyncOperation?: AsyncOperation;
}
export interface Destination {
  Account?: string;
  Bucket: string;
  ReplicationTime?: ReplicationTime;
  AccessControlTranslation?: AccessControlTranslation;
  EncryptionConfiguration?: EncryptionConfiguration;
  Metrics?: Metrics;
  StorageClass?: ReplicationStorageClass;
}
export interface DetailedStatusCodesMetrics {
  IsEnabled?: boolean;
}
export interface DissociateAccessGrantsIdentityCenterRequest {
  AccountId: string;
}
export type DurationSeconds = number;

export interface EncryptionConfiguration {
  ReplicaKmsKeyID?: string;
}
export type Endpoints = Record<string, string>;
export interface EstablishedMultiRegionAccessPointPolicy {
  Policy?: string;
}
export type ExceptionMessage = string;

export interface Exclude {
  Buckets?: Array<string>;
  Regions?: Array<string>;
}
export interface ExistingObjectReplication {
  Status: ExistingObjectReplicationStatus;
}
export type ExistingObjectReplicationStatus = "Enabled" | "Disabled";
export type Expiration = Date | string;

export type ExpirationStatus = "Enabled" | "Disabled";
export type ExpiredObjectDeleteMarker = boolean;

export type Format = "CSV" | "Parquet";
export type FunctionArnString = string;

export interface GeneratedManifestEncryption {
  SSES3?: SSES3Encryption;
  SSEKMS?: SSEKMSEncryption;
}
export type GeneratedManifestFormat = "S3InventoryReport_CSV_20211130";
export interface GetAccessGrantRequest {
  AccountId: string;
  AccessGrantId: string;
}
export interface GetAccessGrantResult {
  CreatedAt?: Date | string;
  AccessGrantId?: string;
  AccessGrantArn?: string;
  Grantee?: Grantee;
  Permission?: Permission;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  GrantScope?: string;
  ApplicationArn?: string;
}
export interface GetAccessGrantsInstanceForPrefixRequest {
  AccountId: string;
  S3Prefix: string;
}
export interface GetAccessGrantsInstanceForPrefixResult {
  AccessGrantsInstanceArn?: string;
  AccessGrantsInstanceId?: string;
}
export interface GetAccessGrantsInstanceRequest {
  AccountId: string;
}
export interface GetAccessGrantsInstanceResourcePolicyRequest {
  AccountId: string;
}
export interface GetAccessGrantsInstanceResourcePolicyResult {
  Policy?: string;
  Organization?: string;
  CreatedAt?: Date | string;
}
export interface GetAccessGrantsInstanceResult {
  AccessGrantsInstanceArn?: string;
  AccessGrantsInstanceId?: string;
  IdentityCenterArn?: string;
  IdentityCenterInstanceArn?: string;
  IdentityCenterApplicationArn?: string;
  CreatedAt?: Date | string;
}
export interface GetAccessGrantsLocationRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
}
export interface GetAccessGrantsLocationResult {
  CreatedAt?: Date | string;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
export interface GetAccessPointConfigurationForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointConfigurationForObjectLambdaResult {
  Configuration?: ObjectLambdaConfiguration;
}
export interface GetAccessPointForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointForObjectLambdaResult {
  Name?: string;
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  CreationDate?: Date | string;
  Alias?: ObjectLambdaAccessPointAlias;
}
export interface GetAccessPointPolicyForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointPolicyForObjectLambdaResult {
  Policy?: string;
}
export interface GetAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointPolicyResult {
  Policy?: string;
}
export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointPolicyStatusForObjectLambdaResult {
  PolicyStatus?: PolicyStatus;
}
export interface GetAccessPointPolicyStatusRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointPolicyStatusResult {
  PolicyStatus?: PolicyStatus;
}
export interface GetAccessPointRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointResult {
  Name?: string;
  Bucket?: string;
  NetworkOrigin?: NetworkOrigin;
  VpcConfiguration?: VpcConfiguration;
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  CreationDate?: Date | string;
  Alias?: string;
  AccessPointArn?: string;
  Endpoints?: Record<string, string>;
  BucketAccountId?: string;
  DataSourceId?: string;
  DataSourceType?: string;
}
export interface GetAccessPointScopeRequest {
  AccountId: string;
  Name: string;
}
export interface GetAccessPointScopeResult {
  Scope?: Scope;
}
export interface GetBucketLifecycleConfigurationRequest {
  AccountId: string;
  Bucket: string;
}
export interface GetBucketLifecycleConfigurationResult {
  Rules?: Array<LifecycleRule>;
}
export interface GetBucketPolicyRequest {
  AccountId: string;
  Bucket: string;
}
export interface GetBucketPolicyResult {
  Policy?: string;
}
export interface GetBucketReplicationRequest {
  AccountId: string;
  Bucket: string;
}
export interface GetBucketReplicationResult {
  ReplicationConfiguration?: ReplicationConfiguration;
}
export interface GetBucketRequest {
  AccountId: string;
  Bucket: string;
}
export interface GetBucketResult {
  Bucket?: string;
  PublicAccessBlockEnabled?: boolean;
  CreationDate?: Date | string;
}
export interface GetBucketTaggingRequest {
  AccountId: string;
  Bucket: string;
}
export interface GetBucketTaggingResult {
  TagSet: Array<S3Tag>;
}
export interface GetBucketVersioningRequest {
  AccountId: string;
  Bucket: string;
}
export interface GetBucketVersioningResult {
  Status?: BucketVersioningStatus;
  MFADelete?: MFADeleteStatus;
}
export interface GetDataAccessRequest {
  AccountId: string;
  Target: string;
  Permission: Permission;
  DurationSeconds?: number;
  Privilege?: Privilege;
  TargetType?: S3PrefixType;
}
export interface GetDataAccessResult {
  Credentials?: Credentials;
  MatchedGrantTarget?: string;
  Grantee?: Grantee;
}
export interface GetJobTaggingRequest {
  AccountId: string;
  JobId: string;
}
export interface GetJobTaggingResult {
  Tags?: Array<S3Tag>;
}
export interface GetMultiRegionAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
}
export interface GetMultiRegionAccessPointPolicyResult {
  Policy?: MultiRegionAccessPointPolicyDocument;
}
export interface GetMultiRegionAccessPointPolicyStatusRequest {
  AccountId: string;
  Name: string;
}
export interface GetMultiRegionAccessPointPolicyStatusResult {
  Established?: PolicyStatus;
}
export interface GetMultiRegionAccessPointRequest {
  AccountId: string;
  Name: string;
}
export interface GetMultiRegionAccessPointResult {
  AccessPoint?: MultiRegionAccessPointReport;
}
export interface GetMultiRegionAccessPointRoutesRequest {
  AccountId: string;
  Mrap: string;
}
export interface GetMultiRegionAccessPointRoutesResult {
  Mrap?: string;
  Routes?: Array<MultiRegionAccessPointRoute>;
}
export interface GetPublicAccessBlockOutput {
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}
export interface GetPublicAccessBlockRequest {
  AccountId: string;
}
export interface GetStorageLensConfigurationRequest {
  ConfigId: string;
  AccountId: string;
}
export interface GetStorageLensConfigurationResult {
  StorageLensConfiguration?: StorageLensConfiguration;
}
export interface GetStorageLensConfigurationTaggingRequest {
  ConfigId: string;
  AccountId: string;
}
export interface GetStorageLensConfigurationTaggingResult {
  Tags?: Array<StorageLensTag>;
}
export interface GetStorageLensGroupRequest {
  Name: string;
  AccountId: string;
}
export interface GetStorageLensGroupResult {
  StorageLensGroup?: StorageLensGroup;
}
export interface Grantee {
  GranteeType?: GranteeType;
  GranteeIdentifier?: string;
}
export type GranteeIdentifier = string;

export type GranteeType = "DIRECTORY_USER" | "DIRECTORY_GROUP" | "IAM";
export type GrantFullControl = string;

export type GrantRead = string;

export type GrantReadACP = string;

export type GrantWrite = string;

export type GrantWriteACP = string;

export type IAMRoleArn = string;

export type ID = string;

export declare class IdempotencyException extends EffectData.TaggedError(
  "IdempotencyException",
)<{
  readonly Message?: string;
}> {}
export type IdentityCenterApplicationArn = string;

export type IdentityCenterArn = string;

export interface Include {
  Buckets?: Array<string>;
  Regions?: Array<string>;
}
export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type IsEnabled = boolean;

export type IsPublic = boolean;

export type JobArn = string;

export type JobCreationTime = Date | string;

export interface JobDescriptor {
  JobId?: string;
  ConfirmationRequired?: boolean;
  Description?: string;
  JobArn?: string;
  Status?: JobStatus;
  Manifest?: JobManifest;
  Operation?: JobOperation;
  Priority?: number;
  ProgressSummary?: JobProgressSummary;
  StatusUpdateReason?: string;
  FailureReasons?: Array<JobFailure>;
  Report?: JobReport;
  CreationTime?: Date | string;
  TerminationDate?: Date | string;
  RoleArn?: string;
  SuspendedDate?: Date | string;
  SuspendedCause?: string;
  ManifestGenerator?: JobManifestGenerator;
  GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor;
}
export interface JobFailure {
  FailureCode?: string;
  FailureReason?: string;
}
export type JobFailureCode = string;

export type JobFailureList = Array<JobFailure>;
export type JobFailureReason = string;

export type JobId = string;

export interface JobListDescriptor {
  JobId?: string;
  Description?: string;
  Operation?: OperationName;
  Priority?: number;
  Status?: JobStatus;
  CreationTime?: Date | string;
  TerminationDate?: Date | string;
  ProgressSummary?: JobProgressSummary;
}
export type JobListDescriptorList = Array<JobListDescriptor>;
export interface JobManifest {
  Spec: JobManifestSpec;
  Location: JobManifestLocation;
}
export type JobManifestFieldList = Array<JobManifestFieldName>;
export type JobManifestFieldName = "Ignore" | "Bucket" | "Key" | "VersionId";
export type JobManifestFormat =
  | "S3BatchOperations_CSV_20180820"
  | "S3InventoryReport_CSV_20161130";
interface _JobManifestGenerator {
  S3JobManifestGenerator?: S3JobManifestGenerator;
}

export type JobManifestGenerator = _JobManifestGenerator & {
  S3JobManifestGenerator: S3JobManifestGenerator;
};
export interface JobManifestGeneratorFilter {
  EligibleForReplication?: boolean;
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  ObjectReplicationStatuses?: Array<ReplicationStatus>;
  KeyNameConstraint?: KeyNameConstraint;
  ObjectSizeGreaterThanBytes?: number;
  ObjectSizeLessThanBytes?: number;
  MatchAnyStorageClass?: Array<S3StorageClass>;
}
export interface JobManifestLocation {
  ObjectArn: string;
  ObjectVersionId?: string;
  ETag: string;
}
export interface JobManifestSpec {
  Format: JobManifestFormat;
  Fields?: Array<JobManifestFieldName>;
}
export type JobNumberOfTasksFailed = number;

export type JobNumberOfTasksSucceeded = number;

export interface JobOperation {
  LambdaInvoke?: LambdaInvokeOperation;
  S3PutObjectCopy?: S3CopyObjectOperation;
  S3PutObjectAcl?: S3SetObjectAclOperation;
  S3PutObjectTagging?: S3SetObjectTaggingOperation;
  S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation;
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;
  S3PutObjectRetention?: S3SetObjectRetentionOperation;
  S3ReplicateObject?: S3ReplicateObjectOperation;
}
export type JobPriority = number;

export interface JobProgressSummary {
  TotalNumberOfTasks?: number;
  NumberOfTasksSucceeded?: number;
  NumberOfTasksFailed?: number;
  Timers?: JobTimers;
}
export interface JobReport {
  Bucket?: string;
  Format?: JobReportFormat;
  Enabled: boolean;
  Prefix?: string;
  ReportScope?: JobReportScope;
}
export type JobReportFormat = "Report_CSV_20180820";
export type JobReportScope = "AllTasks" | "FailedTasksOnly";
export type JobStatus =
  | "Active"
  | "Cancelled"
  | "Cancelling"
  | "Complete"
  | "Completing"
  | "Failed"
  | "Failing"
  | "New"
  | "Paused"
  | "Pausing"
  | "Preparing"
  | "Ready"
  | "Suspended";
export declare class JobStatusException extends EffectData.TaggedError(
  "JobStatusException",
)<{
  readonly Message?: string;
}> {}
export type JobStatusList = Array<JobStatus>;
export type JobStatusUpdateReason = string;

export type JobTerminationDate = Date | string;

export type JobTimeInStateSeconds = number;

export interface JobTimers {
  ElapsedTimeInActiveSeconds?: number;
}
export type JobTotalNumberOfTasks = number;

export interface KeyNameConstraint {
  MatchAnyPrefix?: Array<string>;
  MatchAnySuffix?: Array<string>;
  MatchAnySubstring?: Array<string>;
}
export type KmsKeyArnString = string;

export interface LambdaInvokeOperation {
  FunctionArn?: string;
  InvocationSchemaVersion?: string;
  UserArguments?: Record<string, string>;
}
export interface LifecycleConfiguration {
  Rules?: Array<LifecycleRule>;
}
export interface LifecycleExpiration {
  Date?: Date | string;
  Days?: number;
  ExpiredObjectDeleteMarker?: boolean;
}
export interface LifecycleRule {
  Expiration?: LifecycleExpiration;
  ID?: string;
  Filter?: LifecycleRuleFilter;
  Status: ExpirationStatus;
  Transitions?: Array<Transition>;
  NoncurrentVersionTransitions?: Array<NoncurrentVersionTransition>;
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}
export interface LifecycleRuleAndOperator {
  Prefix?: string;
  Tags?: Array<S3Tag>;
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
}
export interface LifecycleRuleFilter {
  Prefix?: string;
  Tag?: S3Tag;
  And?: LifecycleRuleAndOperator;
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
}
export type LifecycleRules = Array<LifecycleRule>;
export interface ListAccessGrantEntry {
  CreatedAt?: Date | string;
  AccessGrantId?: string;
  AccessGrantArn?: string;
  Grantee?: Grantee;
  Permission?: Permission;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  GrantScope?: string;
  ApplicationArn?: string;
}
export interface ListAccessGrantsInstanceEntry {
  AccessGrantsInstanceId?: string;
  AccessGrantsInstanceArn?: string;
  CreatedAt?: Date | string;
  IdentityCenterArn?: string;
  IdentityCenterInstanceArn?: string;
  IdentityCenterApplicationArn?: string;
}
export interface ListAccessGrantsInstancesRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccessGrantsInstancesResult {
  NextToken?: string;
  AccessGrantsInstancesList?: Array<ListAccessGrantsInstanceEntry>;
}
export interface ListAccessGrantsLocationsEntry {
  CreatedAt?: Date | string;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
export interface ListAccessGrantsLocationsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
  LocationScope?: string;
}
export interface ListAccessGrantsLocationsResult {
  NextToken?: string;
  AccessGrantsLocationsList?: Array<ListAccessGrantsLocationsEntry>;
}
export interface ListAccessGrantsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
  GranteeType?: GranteeType;
  GranteeIdentifier?: string;
  Permission?: Permission;
  GrantScope?: string;
  ApplicationArn?: string;
}
export interface ListAccessGrantsResult {
  NextToken?: string;
  AccessGrantsList?: Array<ListAccessGrantEntry>;
}
export interface ListAccessPointsForDirectoryBucketsRequest {
  AccountId: string;
  DirectoryBucket?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccessPointsForDirectoryBucketsResult {
  AccessPointList?: Array<AccessPoint>;
  NextToken?: string;
}
export interface ListAccessPointsForObjectLambdaRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccessPointsForObjectLambdaResult {
  ObjectLambdaAccessPointList?: Array<ObjectLambdaAccessPoint>;
  NextToken?: string;
}
export interface ListAccessPointsRequest {
  AccountId: string;
  Bucket?: string;
  NextToken?: string;
  MaxResults?: number;
  DataSourceId?: string;
  DataSourceType?: string;
}
export interface ListAccessPointsResult {
  AccessPointList?: Array<AccessPoint>;
  NextToken?: string;
}
export interface ListCallerAccessGrantsEntry {
  Permission?: Permission;
  GrantScope?: string;
  ApplicationArn?: string;
}
export interface ListCallerAccessGrantsRequest {
  AccountId: string;
  GrantScope?: string;
  NextToken?: string;
  MaxResults?: number;
  AllowedByApplication?: boolean;
}
export interface ListCallerAccessGrantsResult {
  NextToken?: string;
  CallerAccessGrantsList?: Array<ListCallerAccessGrantsEntry>;
}
export interface ListJobsRequest {
  AccountId: string;
  JobStatuses?: Array<JobStatus>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListJobsResult {
  NextToken?: string;
  Jobs?: Array<JobListDescriptor>;
}
export interface ListMultiRegionAccessPointsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMultiRegionAccessPointsResult {
  AccessPoints?: Array<MultiRegionAccessPointReport>;
  NextToken?: string;
}
export interface ListRegionalBucketsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
  OutpostId?: string;
}
export interface ListRegionalBucketsResult {
  RegionalBucketList?: Array<RegionalBucket>;
  NextToken?: string;
}
export interface ListStorageLensConfigurationEntry {
  Id: string;
  StorageLensArn: string;
  HomeRegion: string;
  IsEnabled?: boolean;
}
export interface ListStorageLensConfigurationsRequest {
  AccountId: string;
  NextToken?: string;
}
export interface ListStorageLensConfigurationsResult {
  NextToken?: string;
  StorageLensConfigurationList?: Array<ListStorageLensConfigurationEntry>;
}
export interface ListStorageLensGroupEntry {
  Name: string;
  StorageLensGroupArn: string;
  HomeRegion: string;
}
export interface ListStorageLensGroupsRequest {
  AccountId: string;
  NextToken?: string;
}
export interface ListStorageLensGroupsResult {
  NextToken?: string;
  StorageLensGroupList?: Array<ListStorageLensGroupEntry>;
}
export interface ListTagsForResourceRequest {
  AccountId: string;
  ResourceArn: string;
}
export interface ListTagsForResourceResult {
  Tags?: Array<Tag>;
}
export type Location = string;

export type ManifestPrefixString = string;

export type MatchAnyPrefix = Array<string>;
export type MatchAnySuffix = Array<string>;
export type MatchAnyTag = Array<S3Tag>;
export interface MatchObjectAge {
  DaysGreaterThan?: number;
  DaysLessThan?: number;
}
export interface MatchObjectSize {
  BytesGreaterThan?: number;
  BytesLessThan?: number;
}
export type MaxLength1024String = string;

export type MaxResults = number;

export interface Metrics {
  Status: MetricsStatus;
  EventThreshold?: ReplicationTimeValue;
}
export type MetricsStatus = "Enabled" | "Disabled";
export type MFA = string;

export type MFADelete = "Enabled" | "Disabled";
export type MFADeleteStatus = "Enabled" | "Disabled";
export type MinStorageBytesPercentage = number;

export type Minutes = number;

export type MultiRegionAccessPointAlias = string;

export type MultiRegionAccessPointClientToken = string;

export type MultiRegionAccessPointId = string;

export type MultiRegionAccessPointName = string;

export interface MultiRegionAccessPointPolicyDocument {
  Established?: EstablishedMultiRegionAccessPointPolicy;
  Proposed?: ProposedMultiRegionAccessPointPolicy;
}
export interface MultiRegionAccessPointRegionalResponse {
  Name?: string;
  RequestStatus?: string;
}
export type MultiRegionAccessPointRegionalResponseList =
  Array<MultiRegionAccessPointRegionalResponse>;
export interface MultiRegionAccessPointReport {
  Name?: string;
  Alias?: string;
  CreatedAt?: Date | string;
  PublicAccessBlock?: PublicAccessBlockConfiguration;
  Status?: MultiRegionAccessPointStatus;
  Regions?: Array<RegionReport>;
}
export type MultiRegionAccessPointReportList =
  Array<MultiRegionAccessPointReport>;
export interface MultiRegionAccessPointRoute {
  Bucket?: string;
  Region?: string;
  TrafficDialPercentage: number;
}
export interface MultiRegionAccessPointsAsyncResponse {
  Regions?: Array<MultiRegionAccessPointRegionalResponse>;
}
export type MultiRegionAccessPointStatus =
  | "READY"
  | "INCONSISTENT_ACROSS_REGIONS"
  | "CREATING"
  | "PARTIALLY_CREATED"
  | "PARTIALLY_DELETED"
  | "DELETING";
export type NetworkOrigin = "Internet" | "VPC";
export type NoncurrentVersionCount = number;

export interface NoncurrentVersionExpiration {
  NoncurrentDays?: number;
  NewerNoncurrentVersions?: number;
}
export interface NoncurrentVersionTransition {
  NoncurrentDays?: number;
  StorageClass?: TransitionStorageClass;
}
export type NoncurrentVersionTransitionList =
  Array<NoncurrentVersionTransition>;
export type NonEmptyMaxLength1024String = string;

export type NonEmptyMaxLength1024StringList = Array<string>;
export type NonEmptyMaxLength2048String = string;

export type NonEmptyMaxLength256String = string;

export type NonEmptyMaxLength64String = string;

export declare class NoSuchPublicAccessBlockConfiguration extends EffectData.TaggedError(
  "NoSuchPublicAccessBlockConfiguration",
)<{
  readonly Message?: string;
}> {}
export type NoSuchPublicAccessBlockConfigurationMessage = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ObjectAgeValue = number;

export type ObjectCreationTime = Date | string;

export interface ObjectLambdaAccessPoint {
  Name: string;
  ObjectLambdaAccessPointArn?: string;
  Alias?: ObjectLambdaAccessPointAlias;
}
export interface ObjectLambdaAccessPointAlias {
  Value?: string;
  Status?: ObjectLambdaAccessPointAliasStatus;
}
export type ObjectLambdaAccessPointAliasStatus = "PROVISIONING" | "READY";
export type ObjectLambdaAccessPointAliasValue = string;

export type ObjectLambdaAccessPointArn = string;

export type ObjectLambdaAccessPointList = Array<ObjectLambdaAccessPoint>;
export type ObjectLambdaAccessPointName = string;

export type ObjectLambdaAllowedFeature =
  | "GetObjectRange"
  | "GetObjectPartNumber"
  | "HeadObjectRange"
  | "HeadObjectPartNumber";
export type ObjectLambdaAllowedFeaturesList = Array<ObjectLambdaAllowedFeature>;
export interface ObjectLambdaConfiguration {
  SupportingAccessPoint: string;
  CloudWatchMetricsEnabled?: boolean;
  AllowedFeatures?: Array<ObjectLambdaAllowedFeature>;
  TransformationConfigurations: Array<ObjectLambdaTransformationConfiguration>;
}
interface _ObjectLambdaContentTransformation {
  AwsLambda?: AwsLambdaTransformation;
}

export type ObjectLambdaContentTransformation =
  _ObjectLambdaContentTransformation & { AwsLambda: AwsLambdaTransformation };
export type ObjectLambdaPolicy = string;

export type ObjectLambdaSupportingAccessPointArn = string;

export interface ObjectLambdaTransformationConfiguration {
  Actions: Array<ObjectLambdaTransformationConfigurationAction>;
  ContentTransformation: ObjectLambdaContentTransformation;
}
export type ObjectLambdaTransformationConfigurationAction =
  | "GetObject"
  | "HeadObject"
  | "ListObjects"
  | "ListObjectsV2";
export type ObjectLambdaTransformationConfigurationActionsList =
  Array<ObjectLambdaTransformationConfigurationAction>;
export type ObjectLambdaTransformationConfigurationsList =
  Array<ObjectLambdaTransformationConfiguration>;
export type ObjectLockEnabledForBucket = boolean;

export type ObjectSizeGreaterThanBytes = number;

export type ObjectSizeLessThanBytes = number;

export type ObjectSizeValue = number;

export type OperationName =
  | "LambdaInvoke"
  | "S3PutObjectCopy"
  | "S3PutObjectAcl"
  | "S3PutObjectTagging"
  | "S3DeleteObjectTagging"
  | "S3InitiateRestoreObject"
  | "S3PutObjectLegalHold"
  | "S3PutObjectRetention"
  | "S3ReplicateObject";
export type Organization = string;

export type OutputSchemaVersion = "V_1";
export type OwnerOverride = "Destination";
export type Permission = "READ" | "WRITE" | "READWRITE";
export type Policy = string;

export type PolicyDocument = string;

export interface PolicyStatus {
  IsPublic?: boolean;
}
export type Prefix = string;

export type PrefixesList = Array<string>;
export interface PrefixLevel {
  StorageMetrics: PrefixLevelStorageMetrics;
}
export interface PrefixLevelStorageMetrics {
  IsEnabled?: boolean;
  SelectionCriteria?: SelectionCriteria;
}
export type Priority = number;

export type Privilege = "Minimal" | "Default";
export interface ProposedMultiRegionAccessPointPolicy {
  Policy?: string;
}
export interface PublicAccessBlockConfiguration {
  BlockPublicAcls?: boolean;
  IgnorePublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  RestrictPublicBuckets?: boolean;
}
export type PublicAccessBlockEnabled = boolean;

export interface PutAccessGrantsInstanceResourcePolicyRequest {
  AccountId: string;
  Policy: string;
  Organization?: string;
}
export interface PutAccessGrantsInstanceResourcePolicyResult {
  Policy?: string;
  Organization?: string;
  CreatedAt?: Date | string;
}
export interface PutAccessPointConfigurationForObjectLambdaRequest {
  AccountId: string;
  Name: string;
  Configuration: ObjectLambdaConfiguration;
}
export interface PutAccessPointPolicyForObjectLambdaRequest {
  AccountId: string;
  Name: string;
  Policy: string;
}
export interface PutAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
  Policy: string;
}
export interface PutAccessPointScopeRequest {
  AccountId: string;
  Name: string;
  Scope: Scope;
}
export interface PutBucketLifecycleConfigurationRequest {
  AccountId: string;
  Bucket: string;
  LifecycleConfiguration?: LifecycleConfiguration;
}
export interface PutBucketPolicyRequest {
  AccountId: string;
  Bucket: string;
  ConfirmRemoveSelfBucketAccess?: boolean;
  Policy: string;
}
export interface PutBucketReplicationRequest {
  AccountId: string;
  Bucket: string;
  ReplicationConfiguration: ReplicationConfiguration;
}
export interface PutBucketTaggingRequest {
  AccountId: string;
  Bucket: string;
  Tagging: Tagging;
}
export interface PutBucketVersioningRequest {
  AccountId: string;
  Bucket: string;
  MFA?: string;
  VersioningConfiguration: VersioningConfiguration;
}
export interface PutJobTaggingRequest {
  AccountId: string;
  JobId: string;
  Tags: Array<S3Tag>;
}
export interface PutJobTaggingResult {}
export interface PutMultiRegionAccessPointPolicyInput {
  Name: string;
  Policy: string;
}
export interface PutMultiRegionAccessPointPolicyRequest {
  AccountId: string;
  ClientToken: string;
  Details: PutMultiRegionAccessPointPolicyInput;
}
export interface PutMultiRegionAccessPointPolicyResult {
  RequestTokenARN?: string;
}
export interface PutPublicAccessBlockRequest {
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
  AccountId: string;
}
export interface PutStorageLensConfigurationRequest {
  ConfigId: string;
  AccountId: string;
  StorageLensConfiguration: StorageLensConfiguration;
  Tags?: Array<StorageLensTag>;
}
export interface PutStorageLensConfigurationTaggingRequest {
  ConfigId: string;
  AccountId: string;
  Tags: Array<StorageLensTag>;
}
export interface PutStorageLensConfigurationTaggingResult {}
export interface Region {
  Bucket: string;
  BucketAccountId?: string;
}
export interface RegionalBucket {
  Bucket: string;
  BucketArn?: string;
  PublicAccessBlockEnabled: boolean;
  CreationDate: Date | string;
  OutpostId?: string;
}
export type RegionalBucketList = Array<RegionalBucket>;
export type RegionCreationList = Array<Region>;
export type RegionName = string;

export interface RegionReport {
  Bucket?: string;
  Region?: string;
  BucketAccountId?: string;
}
export type RegionReportList = Array<RegionReport>;
export type Regions = Array<string>;
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
  Bucket: string;
}
export interface ReplicationRuleAndOperator {
  Prefix?: string;
  Tags?: Array<S3Tag>;
}
export interface ReplicationRuleFilter {
  Prefix?: string;
  Tag?: S3Tag;
  And?: ReplicationRuleAndOperator;
}
export type ReplicationRules = Array<ReplicationRule>;
export type ReplicationRuleStatus = "Enabled" | "Disabled";
export type ReplicationStatus = "COMPLETED" | "FAILED" | "REPLICA" | "NONE";
export type ReplicationStatusFilterList = Array<ReplicationStatus>;
export type ReplicationStorageClass =
  | "STANDARD"
  | "REDUCED_REDUNDANCY"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "GLACIER"
  | "DEEP_ARCHIVE"
  | "OUTPOSTS"
  | "GLACIER_IR";
export interface ReplicationTime {
  Status: ReplicationTimeStatus;
  Time: ReplicationTimeValue;
}
export type ReplicationTimeStatus = "Enabled" | "Disabled";
export interface ReplicationTimeValue {
  Minutes?: number;
}
export type ReportPrefixString = string;

export type RequestedJobStatus = "Cancelled" | "Ready";
export type Role = string;

export type RouteList = Array<MultiRegionAccessPointRoute>;
export interface S3AccessControlList {
  Owner: S3ObjectOwner;
  Grants?: Array<S3Grant>;
}
export interface S3AccessControlPolicy {
  AccessControlList?: S3AccessControlList;
  CannedAccessControlList?: S3CannedAccessControlList;
}
export type S3AccessPointArn = string;

export type S3AWSRegion = string;

export type S3BucketArnString = string;

export interface S3BucketDestination {
  Format: Format;
  OutputSchemaVersion: OutputSchemaVersion;
  AccountId: string;
  Arn: string;
  Prefix?: string;
  Encryption?: StorageLensDataExportEncryption;
}
export type S3CannedAccessControlList =
  | "PRIVATE"
  | "PUBLIC_READ"
  | "PUBLIC_READ_WRITE"
  | "AWS_EXEC_READ"
  | "AUTHENTICATED_READ"
  | "BUCKET_OWNER_READ"
  | "BUCKET_OWNER_FULL_CONTROL";
export type S3ChecksumAlgorithm =
  | "CRC32"
  | "CRC32C"
  | "SHA1"
  | "SHA256"
  | "CRC64NVME";
export type S3ContentLength = number;

export interface S3CopyObjectOperation {
  TargetResource?: string;
  CannedAccessControlList?: S3CannedAccessControlList;
  AccessControlGrants?: Array<S3Grant>;
  MetadataDirective?: S3MetadataDirective;
  ModifiedSinceConstraint?: Date | string;
  NewObjectMetadata?: S3ObjectMetadata;
  NewObjectTagging?: Array<S3Tag>;
  RedirectLocation?: string;
  RequesterPays?: boolean;
  StorageClass?: S3StorageClass;
  UnModifiedSinceConstraint?: Date | string;
  SSEAwsKmsKeyId?: string;
  TargetKeyPrefix?: string;
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus;
  ObjectLockMode?: S3ObjectLockMode;
  ObjectLockRetainUntilDate?: Date | string;
  BucketKeyEnabled?: boolean;
  ChecksumAlgorithm?: S3ChecksumAlgorithm;
}
export interface S3DeleteObjectTaggingOperation {}
export type S3ExpirationInDays = number;

export interface S3GeneratedManifestDescriptor {
  Format?: GeneratedManifestFormat;
  Location?: JobManifestLocation;
}
export type S3GlacierJobTier = "BULK" | "STANDARD";
export interface S3Grant {
  Grantee?: S3Grantee;
  Permission?: S3Permission;
}
export interface S3Grantee {
  TypeIdentifier?: S3GranteeTypeIdentifier;
  Identifier?: string;
  DisplayName?: string;
}
export type S3GranteeTypeIdentifier = "CANONICAL" | "EMAIL_ADDRESS" | "GROUP";
export type S3GrantList = Array<S3Grant>;
export interface S3InitiateRestoreObjectOperation {
  ExpirationInDays?: number;
  GlacierJobTier?: S3GlacierJobTier;
}
export interface S3JobManifestGenerator {
  ExpectedBucketOwner?: string;
  SourceBucket: string;
  ManifestOutputLocation?: S3ManifestOutputLocation;
  Filter?: JobManifestGeneratorFilter;
  EnableManifestOutput: boolean;
}
export type S3KeyArnString = string;

export interface S3ManifestOutputLocation {
  ExpectedManifestBucketOwner?: string;
  Bucket: string;
  ManifestPrefix?: string;
  ManifestEncryption?: GeneratedManifestEncryption;
  ManifestFormat: GeneratedManifestFormat;
}
export type S3MetadataDirective = "COPY" | "REPLACE";
export interface S3ObjectLockLegalHold {
  Status: S3ObjectLockLegalHoldStatus;
}
export type S3ObjectLockLegalHoldStatus = "OFF" | "ON";
export type S3ObjectLockMode = "COMPLIANCE" | "GOVERNANCE";
export type S3ObjectLockRetentionMode = "COMPLIANCE" | "GOVERNANCE";
export interface S3ObjectMetadata {
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  UserMetadata?: Record<string, string>;
  ContentLength?: number;
  ContentMD5?: string;
  ContentType?: string;
  HttpExpiresDate?: Date | string;
  RequesterCharged?: boolean;
  SSEAlgorithm?: S3SSEAlgorithm;
}
export interface S3ObjectOwner {
  ID?: string;
  DisplayName?: string;
}
export type S3ObjectVersionId = string;

export type S3Permission =
  | "FULL_CONTROL"
  | "READ"
  | "WRITE"
  | "READ_ACP"
  | "WRITE_ACP";
export type S3Prefix = string;

export type S3PrefixType = "Object";
export type S3RegionalBucketArn = string;

export type S3RegionalOrS3ExpressBucketArnString = string;

export interface S3ReplicateObjectOperation {}
export type S3ResourceArn = string;

export interface S3Retention {
  RetainUntilDate?: Date | string;
  Mode?: S3ObjectLockRetentionMode;
}
export interface S3SetObjectAclOperation {
  AccessControlPolicy?: S3AccessControlPolicy;
}
export interface S3SetObjectLegalHoldOperation {
  LegalHold: S3ObjectLockLegalHold;
}
export interface S3SetObjectRetentionOperation {
  BypassGovernanceRetention?: boolean;
  Retention: S3Retention;
}
export interface S3SetObjectTaggingOperation {
  TagSet?: Array<S3Tag>;
}
export type S3SSEAlgorithm = "AES256" | "KMS";
export type S3StorageClass =
  | "STANDARD"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE"
  | "GLACIER_IR";
export interface S3Tag {
  Key: string;
  Value: string;
}
export type S3TagSet = Array<S3Tag>;
export type S3UserMetadata = Record<string, string>;
export interface Scope {
  Prefixes?: Array<string>;
  Permissions?: Array<ScopePermission>;
}
export type ScopePermission =
  | "GetObject"
  | "GetObjectAttributes"
  | "ListMultipartUploadParts"
  | "ListBucket"
  | "ListBucketMultipartUploads"
  | "PutObject"
  | "DeleteObject"
  | "AbortMultipartUpload";
export type ScopePermissionList = Array<ScopePermission>;
export type SecretAccessKey = string;

export interface SelectionCriteria {
  Delimiter?: string;
  MaxDepth?: number;
  MinStorageBytesPercentage?: number;
}
export type SessionToken = string;

export type Setting = boolean;

export interface SourceSelectionCriteria {
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
  ReplicaModifications?: ReplicaModifications;
}
export interface SSEKMS {
  KeyId: string;
}
export interface SseKmsEncryptedObjects {
  Status: SseKmsEncryptedObjectsStatus;
}
export type SseKmsEncryptedObjectsStatus = "Enabled" | "Disabled";
export interface SSEKMSEncryption {
  KeyId: string;
}
export type SSEKMSKeyId = string;

export interface SSES3 {}
export interface SSES3Encryption {}
export type StorageClassList = Array<S3StorageClass>;
export type StorageLensArn = string;

export interface StorageLensAwsOrg {
  Arn: string;
}
export interface StorageLensConfiguration {
  Id: string;
  AccountLevel: AccountLevel;
  Include?: Include;
  Exclude?: Exclude;
  DataExport?: StorageLensDataExport;
  IsEnabled: boolean;
  AwsOrg?: StorageLensAwsOrg;
  StorageLensArn?: string;
}
export type StorageLensConfigurationList =
  Array<ListStorageLensConfigurationEntry>;
export interface StorageLensDataExport {
  S3BucketDestination?: S3BucketDestination;
  CloudWatchMetrics?: CloudWatchMetrics;
}
export interface StorageLensDataExportEncryption {
  SSES3?: SSES3;
  SSEKMS?: SSEKMS;
}
export interface StorageLensGroup {
  Name: string;
  Filter: StorageLensGroupFilter;
  StorageLensGroupArn?: string;
}
export interface StorageLensGroupAndOperator {
  MatchAnyPrefix?: Array<string>;
  MatchAnySuffix?: Array<string>;
  MatchAnyTag?: Array<S3Tag>;
  MatchObjectAge?: MatchObjectAge;
  MatchObjectSize?: MatchObjectSize;
}
export type StorageLensGroupArn = string;

export interface StorageLensGroupFilter {
  MatchAnyPrefix?: Array<string>;
  MatchAnySuffix?: Array<string>;
  MatchAnyTag?: Array<S3Tag>;
  MatchObjectAge?: MatchObjectAge;
  MatchObjectSize?: MatchObjectSize;
  And?: StorageLensGroupAndOperator;
  Or?: StorageLensGroupOrOperator;
}
export interface StorageLensGroupLevel {
  SelectionCriteria?: StorageLensGroupLevelSelectionCriteria;
}
export type StorageLensGroupLevelExclude = Array<string>;
export type StorageLensGroupLevelInclude = Array<string>;
export interface StorageLensGroupLevelSelectionCriteria {
  Include?: Array<string>;
  Exclude?: Array<string>;
}
export type StorageLensGroupList = Array<ListStorageLensGroupEntry>;
export type StorageLensGroupName = string;

export interface StorageLensGroupOrOperator {
  MatchAnyPrefix?: Array<string>;
  MatchAnySuffix?: Array<string>;
  MatchAnyTag?: Array<S3Tag>;
  MatchObjectAge?: MatchObjectAge;
  MatchObjectSize?: MatchObjectSize;
}
export type StorageLensPrefixLevelDelimiter = string;

export type StorageLensPrefixLevelMaxDepth = number;

export interface StorageLensTag {
  Key: string;
  Value: string;
}
export type StorageLensTags = Array<StorageLensTag>;
export type StringForNextToken = string;

export interface SubmitMultiRegionAccessPointRoutesRequest {
  AccountId: string;
  Mrap: string;
  RouteUpdates: Array<MultiRegionAccessPointRoute>;
}
export interface SubmitMultiRegionAccessPointRoutesResult {}
export type Suffix = string;

export type SuspendedCause = string;

export type SuspendedDate = Date | string;

export interface Tag {
  Key: string;
  Value: string;
}
export interface Tagging {
  TagSet: Array<S3Tag>;
}
export type TagKeyList = Array<string>;
export type TagKeyString = string;

export type TagList = Array<Tag>;
export interface TagResourceRequest {
  AccountId: string;
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResult {}
export type TagValueString = string;

export type TimeStamp = Date | string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export type TrafficDialPercentage = number;

export interface Transition {
  Date?: Date | string;
  Days?: number;
  StorageClass?: TransitionStorageClass;
}
export type TransitionList = Array<Transition>;
export type TransitionStorageClass =
  | "GLACIER"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE";
export interface UntagResourceRequest {
  AccountId: string;
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResult {}
export interface UpdateAccessGrantsLocationRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
  IAMRoleArn: string;
}
export interface UpdateAccessGrantsLocationResult {
  CreatedAt?: Date | string;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
export interface UpdateJobPriorityRequest {
  AccountId: string;
  JobId: string;
  Priority: number;
}
export interface UpdateJobPriorityResult {
  JobId: string;
  Priority: number;
}
export interface UpdateJobStatusRequest {
  AccountId: string;
  JobId: string;
  RequestedJobStatus: RequestedJobStatus;
  StatusUpdateReason?: string;
}
export interface UpdateJobStatusResult {
  JobId?: string;
  Status?: JobStatus;
  StatusUpdateReason?: string;
}
export interface UpdateStorageLensGroupRequest {
  Name: string;
  AccountId: string;
  StorageLensGroup: StorageLensGroup;
}
export type UserArguments = Record<string, string>;
export interface VersioningConfiguration {
  MFADelete?: MFADelete;
  Status?: BucketVersioningStatus;
}
export interface VpcConfiguration {
  VpcId: string;
}
export type VpcId = string;

export declare namespace AssociateAccessGrantsIdentityCenter {
  export type Input = AssociateAccessGrantsIdentityCenterRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace CreateAccessGrant {
  export type Input = CreateAccessGrantRequest;
  export type Output = CreateAccessGrantResult;
  export type Error = CommonAwsError;
}

export declare namespace CreateAccessGrantsInstance {
  export type Input = CreateAccessGrantsInstanceRequest;
  export type Output = CreateAccessGrantsInstanceResult;
  export type Error = CommonAwsError;
}

export declare namespace CreateAccessGrantsLocation {
  export type Input = CreateAccessGrantsLocationRequest;
  export type Output = CreateAccessGrantsLocationResult;
  export type Error = CommonAwsError;
}

export declare namespace CreateAccessPoint {
  export type Input = CreateAccessPointRequest;
  export type Output = CreateAccessPointResult;
  export type Error = CommonAwsError;
}

export declare namespace CreateAccessPointForObjectLambda {
  export type Input = CreateAccessPointForObjectLambdaRequest;
  export type Output = CreateAccessPointForObjectLambdaResult;
  export type Error = CommonAwsError;
}

export declare namespace CreateBucket {
  export type Input = CreateBucketRequest;
  export type Output = CreateBucketResult;
  export type Error =
    | BucketAlreadyExists
    | BucketAlreadyOwnedByYou
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResult;
  export type Error =
    | BadRequestException
    | IdempotencyException
    | InternalServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateMultiRegionAccessPoint {
  export type Input = CreateMultiRegionAccessPointRequest;
  export type Output = CreateMultiRegionAccessPointResult;
  export type Error = CommonAwsError;
}

export declare namespace CreateStorageLensGroup {
  export type Input = CreateStorageLensGroupRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessGrant {
  export type Input = DeleteAccessGrantRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessGrantsInstance {
  export type Input = DeleteAccessGrantsInstanceRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessGrantsInstanceResourcePolicy {
  export type Input = DeleteAccessGrantsInstanceResourcePolicyRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessGrantsLocation {
  export type Input = DeleteAccessGrantsLocationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessPoint {
  export type Input = DeleteAccessPointRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessPointForObjectLambda {
  export type Input = DeleteAccessPointForObjectLambdaRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessPointPolicy {
  export type Input = DeleteAccessPointPolicyRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessPointPolicyForObjectLambda {
  export type Input = DeleteAccessPointPolicyForObjectLambdaRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteAccessPointScope {
  export type Input = DeleteAccessPointScopeRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucket {
  export type Input = DeleteBucketRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteBucketLifecycleConfiguration {
  export type Input = DeleteBucketLifecycleConfigurationRequest;
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

export declare namespace DeleteJobTagging {
  export type Input = DeleteJobTaggingRequest;
  export type Output = DeleteJobTaggingResult;
  export type Error =
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteMultiRegionAccessPoint {
  export type Input = DeleteMultiRegionAccessPointRequest;
  export type Output = DeleteMultiRegionAccessPointResult;
  export type Error = CommonAwsError;
}

export declare namespace DeletePublicAccessBlock {
  export type Input = DeletePublicAccessBlockRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteStorageLensConfiguration {
  export type Input = DeleteStorageLensConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DeleteStorageLensConfigurationTagging {
  export type Input = DeleteStorageLensConfigurationTaggingRequest;
  export type Output = DeleteStorageLensConfigurationTaggingResult;
  export type Error = CommonAwsError;
}

export declare namespace DeleteStorageLensGroup {
  export type Input = DeleteStorageLensGroupRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace DescribeJob {
  export type Input = DescribeJobRequest;
  export type Output = DescribeJobResult;
  export type Error =
    | BadRequestException
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeMultiRegionAccessPointOperation {
  export type Input = DescribeMultiRegionAccessPointOperationRequest;
  export type Output = DescribeMultiRegionAccessPointOperationResult;
  export type Error = CommonAwsError;
}

export declare namespace DissociateAccessGrantsIdentityCenter {
  export type Input = DissociateAccessGrantsIdentityCenterRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace GetAccessGrant {
  export type Input = GetAccessGrantRequest;
  export type Output = GetAccessGrantResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessGrantsInstance {
  export type Input = GetAccessGrantsInstanceRequest;
  export type Output = GetAccessGrantsInstanceResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessGrantsInstanceForPrefix {
  export type Input = GetAccessGrantsInstanceForPrefixRequest;
  export type Output = GetAccessGrantsInstanceForPrefixResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessGrantsInstanceResourcePolicy {
  export type Input = GetAccessGrantsInstanceResourcePolicyRequest;
  export type Output = GetAccessGrantsInstanceResourcePolicyResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessGrantsLocation {
  export type Input = GetAccessGrantsLocationRequest;
  export type Output = GetAccessGrantsLocationResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPoint {
  export type Input = GetAccessPointRequest;
  export type Output = GetAccessPointResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPointConfigurationForObjectLambda {
  export type Input = GetAccessPointConfigurationForObjectLambdaRequest;
  export type Output = GetAccessPointConfigurationForObjectLambdaResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPointForObjectLambda {
  export type Input = GetAccessPointForObjectLambdaRequest;
  export type Output = GetAccessPointForObjectLambdaResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPointPolicy {
  export type Input = GetAccessPointPolicyRequest;
  export type Output = GetAccessPointPolicyResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPointPolicyForObjectLambda {
  export type Input = GetAccessPointPolicyForObjectLambdaRequest;
  export type Output = GetAccessPointPolicyForObjectLambdaResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPointPolicyStatus {
  export type Input = GetAccessPointPolicyStatusRequest;
  export type Output = GetAccessPointPolicyStatusResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPointPolicyStatusForObjectLambda {
  export type Input = GetAccessPointPolicyStatusForObjectLambdaRequest;
  export type Output = GetAccessPointPolicyStatusForObjectLambdaResult;
  export type Error = CommonAwsError;
}

export declare namespace GetAccessPointScope {
  export type Input = GetAccessPointScopeRequest;
  export type Output = GetAccessPointScopeResult;
  export type Error = CommonAwsError;
}

export declare namespace GetBucket {
  export type Input = GetBucketRequest;
  export type Output = GetBucketResult;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketLifecycleConfiguration {
  export type Input = GetBucketLifecycleConfigurationRequest;
  export type Output = GetBucketLifecycleConfigurationResult;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketPolicy {
  export type Input = GetBucketPolicyRequest;
  export type Output = GetBucketPolicyResult;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketReplication {
  export type Input = GetBucketReplicationRequest;
  export type Output = GetBucketReplicationResult;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketTagging {
  export type Input = GetBucketTaggingRequest;
  export type Output = GetBucketTaggingResult;
  export type Error = CommonAwsError;
}

export declare namespace GetBucketVersioning {
  export type Input = GetBucketVersioningRequest;
  export type Output = GetBucketVersioningResult;
  export type Error = CommonAwsError;
}

export declare namespace GetDataAccess {
  export type Input = GetDataAccessRequest;
  export type Output = GetDataAccessResult;
  export type Error = CommonAwsError;
}

export declare namespace GetJobTagging {
  export type Input = GetJobTaggingRequest;
  export type Output = GetJobTaggingResult;
  export type Error =
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetMultiRegionAccessPoint {
  export type Input = GetMultiRegionAccessPointRequest;
  export type Output = GetMultiRegionAccessPointResult;
  export type Error = CommonAwsError;
}

export declare namespace GetMultiRegionAccessPointPolicy {
  export type Input = GetMultiRegionAccessPointPolicyRequest;
  export type Output = GetMultiRegionAccessPointPolicyResult;
  export type Error = CommonAwsError;
}

export declare namespace GetMultiRegionAccessPointPolicyStatus {
  export type Input = GetMultiRegionAccessPointPolicyStatusRequest;
  export type Output = GetMultiRegionAccessPointPolicyStatusResult;
  export type Error = CommonAwsError;
}

export declare namespace GetMultiRegionAccessPointRoutes {
  export type Input = GetMultiRegionAccessPointRoutesRequest;
  export type Output = GetMultiRegionAccessPointRoutesResult;
  export type Error = CommonAwsError;
}

export declare namespace GetPublicAccessBlock {
  export type Input = GetPublicAccessBlockRequest;
  export type Output = GetPublicAccessBlockOutput;
  export type Error = NoSuchPublicAccessBlockConfiguration | CommonAwsError;
}

export declare namespace GetStorageLensConfiguration {
  export type Input = GetStorageLensConfigurationRequest;
  export type Output = GetStorageLensConfigurationResult;
  export type Error = CommonAwsError;
}

export declare namespace GetStorageLensConfigurationTagging {
  export type Input = GetStorageLensConfigurationTaggingRequest;
  export type Output = GetStorageLensConfigurationTaggingResult;
  export type Error = CommonAwsError;
}

export declare namespace GetStorageLensGroup {
  export type Input = GetStorageLensGroupRequest;
  export type Output = GetStorageLensGroupResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAccessGrants {
  export type Input = ListAccessGrantsRequest;
  export type Output = ListAccessGrantsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAccessGrantsInstances {
  export type Input = ListAccessGrantsInstancesRequest;
  export type Output = ListAccessGrantsInstancesResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAccessGrantsLocations {
  export type Input = ListAccessGrantsLocationsRequest;
  export type Output = ListAccessGrantsLocationsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAccessPoints {
  export type Input = ListAccessPointsRequest;
  export type Output = ListAccessPointsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAccessPointsForDirectoryBuckets {
  export type Input = ListAccessPointsForDirectoryBucketsRequest;
  export type Output = ListAccessPointsForDirectoryBucketsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAccessPointsForObjectLambda {
  export type Input = ListAccessPointsForObjectLambdaRequest;
  export type Output = ListAccessPointsForObjectLambdaResult;
  export type Error = CommonAwsError;
}

export declare namespace ListCallerAccessGrants {
  export type Input = ListCallerAccessGrantsRequest;
  export type Output = ListCallerAccessGrantsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResult;
  export type Error =
    | InternalServiceException
    | InvalidNextTokenException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListMultiRegionAccessPoints {
  export type Input = ListMultiRegionAccessPointsRequest;
  export type Output = ListMultiRegionAccessPointsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListRegionalBuckets {
  export type Input = ListRegionalBucketsRequest;
  export type Output = ListRegionalBucketsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListStorageLensConfigurations {
  export type Input = ListStorageLensConfigurationsRequest;
  export type Output = ListStorageLensConfigurationsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListStorageLensGroups {
  export type Input = ListStorageLensGroupsRequest;
  export type Output = ListStorageLensGroupsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error = CommonAwsError;
}

export declare namespace PutAccessGrantsInstanceResourcePolicy {
  export type Input = PutAccessGrantsInstanceResourcePolicyRequest;
  export type Output = PutAccessGrantsInstanceResourcePolicyResult;
  export type Error = CommonAwsError;
}

export declare namespace PutAccessPointConfigurationForObjectLambda {
  export type Input = PutAccessPointConfigurationForObjectLambdaRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutAccessPointPolicy {
  export type Input = PutAccessPointPolicyRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutAccessPointPolicyForObjectLambda {
  export type Input = PutAccessPointPolicyForObjectLambdaRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutAccessPointScope {
  export type Input = PutAccessPointScopeRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutBucketLifecycleConfiguration {
  export type Input = PutBucketLifecycleConfigurationRequest;
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

export declare namespace PutJobTagging {
  export type Input = PutJobTaggingRequest;
  export type Output = PutJobTaggingResult;
  export type Error =
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace PutMultiRegionAccessPointPolicy {
  export type Input = PutMultiRegionAccessPointPolicyRequest;
  export type Output = PutMultiRegionAccessPointPolicyResult;
  export type Error = CommonAwsError;
}

export declare namespace PutPublicAccessBlock {
  export type Input = PutPublicAccessBlockRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutStorageLensConfiguration {
  export type Input = PutStorageLensConfigurationRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace PutStorageLensConfigurationTagging {
  export type Input = PutStorageLensConfigurationTaggingRequest;
  export type Output = PutStorageLensConfigurationTaggingResult;
  export type Error = CommonAwsError;
}

export declare namespace SubmitMultiRegionAccessPointRoutes {
  export type Input = SubmitMultiRegionAccessPointRoutesRequest;
  export type Output = SubmitMultiRegionAccessPointRoutesResult;
  export type Error = CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResult;
  export type Error = CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResult;
  export type Error = CommonAwsError;
}

export declare namespace UpdateAccessGrantsLocation {
  export type Input = UpdateAccessGrantsLocationRequest;
  export type Output = UpdateAccessGrantsLocationResult;
  export type Error = CommonAwsError;
}

export declare namespace UpdateJobPriority {
  export type Input = UpdateJobPriorityRequest;
  export type Output = UpdateJobPriorityResult;
  export type Error =
    | BadRequestException
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateJobStatus {
  export type Input = UpdateJobStatusRequest;
  export type Output = UpdateJobStatusResult;
  export type Error =
    | BadRequestException
    | InternalServiceException
    | JobStatusException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateStorageLensGroup {
  export type Input = UpdateStorageLensGroupRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}
