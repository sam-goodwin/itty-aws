import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSS3ControlServiceV20180820 {
  associateAccessGrantsIdentityCenter(
    input: AssociateAccessGrantsIdentityCenterRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createAccessGrant(
    input: CreateAccessGrantRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createAccessGrantsInstance(
    input: CreateAccessGrantsInstanceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createAccessGrantsLocation(
    input: CreateAccessGrantsLocationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createAccessPoint(
    input: CreateAccessPointRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createAccessPointForObjectLambda(
    input: CreateAccessPointForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createBucket(
    input: CreateBucketRequest,
  ): Effect.Effect<
    {},
    BucketAlreadyExists | BucketAlreadyOwnedByYou | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    {},
    BadRequestException | IdempotencyException | InternalServiceException | TooManyRequestsException | CommonAwsError
  >;
  createMultiRegionAccessPoint(
    input: CreateMultiRegionAccessPointRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  createStorageLensGroup(
    input: CreateStorageLensGroupRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessGrant(
    input: DeleteAccessGrantRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessGrantsInstance(
    input: DeleteAccessGrantsInstanceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessGrantsInstanceResourcePolicy(
    input: DeleteAccessGrantsInstanceResourcePolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessGrantsLocation(
    input: DeleteAccessGrantsLocationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessPoint(
    input: DeleteAccessPointRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessPointForObjectLambda(
    input: DeleteAccessPointForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessPointPolicy(
    input: DeleteAccessPointPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessPointPolicyForObjectLambda(
    input: DeleteAccessPointPolicyForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteAccessPointScope(
    input: DeleteAccessPointScopeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteBucket(
    input: DeleteBucketRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteBucketLifecycleConfiguration(
    input: DeleteBucketLifecycleConfigurationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteBucketPolicy(
    input: DeleteBucketPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteBucketReplication(
    input: DeleteBucketReplicationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteBucketTagging(
    input: DeleteBucketTaggingRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteJobTagging(
    input: DeleteJobTaggingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteMultiRegionAccessPoint(
    input: DeleteMultiRegionAccessPointRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deletePublicAccessBlock(
    input: DeletePublicAccessBlockRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteStorageLensConfiguration(
    input: DeleteStorageLensConfigurationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteStorageLensConfigurationTagging(
    input: DeleteStorageLensConfigurationTaggingRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  deleteStorageLensGroup(
    input: DeleteStorageLensGroupRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  describeJob(
    input: DescribeJobRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServiceException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeMultiRegionAccessPointOperation(
    input: DescribeMultiRegionAccessPointOperationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  dissociateAccessGrantsIdentityCenter(
    input: DissociateAccessGrantsIdentityCenterRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessGrant(
    input: GetAccessGrantRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessGrantsInstance(
    input: GetAccessGrantsInstanceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessGrantsInstanceForPrefix(
    input: GetAccessGrantsInstanceForPrefixRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessGrantsInstanceResourcePolicy(
    input: GetAccessGrantsInstanceResourcePolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessGrantsLocation(
    input: GetAccessGrantsLocationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPoint(
    input: GetAccessPointRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPointConfigurationForObjectLambda(
    input: GetAccessPointConfigurationForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPointForObjectLambda(
    input: GetAccessPointForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPointPolicy(
    input: GetAccessPointPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPointPolicyForObjectLambda(
    input: GetAccessPointPolicyForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPointPolicyStatus(
    input: GetAccessPointPolicyStatusRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPointPolicyStatusForObjectLambda(
    input: GetAccessPointPolicyStatusForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getAccessPointScope(
    input: GetAccessPointScopeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getBucket(
    input: GetBucketRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getBucketLifecycleConfiguration(
    input: GetBucketLifecycleConfigurationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getBucketPolicy(
    input: GetBucketPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getBucketReplication(
    input: GetBucketReplicationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getBucketTagging(
    input: GetBucketTaggingRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getBucketVersioning(
    input: GetBucketVersioningRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getDataAccess(
    input: GetDataAccessRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getJobTagging(
    input: GetJobTaggingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getMultiRegionAccessPoint(
    input: GetMultiRegionAccessPointRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getMultiRegionAccessPointPolicy(
    input: GetMultiRegionAccessPointPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getMultiRegionAccessPointPolicyStatus(
    input: GetMultiRegionAccessPointPolicyStatusRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getMultiRegionAccessPointRoutes(
    input: GetMultiRegionAccessPointRoutesRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getPublicAccessBlock(
    input: GetPublicAccessBlockRequest,
  ): Effect.Effect<
    {},
    NoSuchPublicAccessBlockConfiguration | CommonAwsError
  >;
  getStorageLensConfiguration(
    input: GetStorageLensConfigurationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getStorageLensConfigurationTagging(
    input: GetStorageLensConfigurationTaggingRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  getStorageLensGroup(
    input: GetStorageLensGroupRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listAccessGrants(
    input: ListAccessGrantsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listAccessGrantsInstances(
    input: ListAccessGrantsInstancesRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listAccessGrantsLocations(
    input: ListAccessGrantsLocationsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listAccessPoints(
    input: ListAccessPointsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listAccessPointsForDirectoryBuckets(
    input: ListAccessPointsForDirectoryBucketsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listAccessPointsForObjectLambda(
    input: ListAccessPointsForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listCallerAccessGrants(
    input: ListCallerAccessGrantsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidNextTokenException | InvalidRequestException | CommonAwsError
  >;
  listMultiRegionAccessPoints(
    input: ListMultiRegionAccessPointsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listRegionalBuckets(
    input: ListRegionalBucketsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listStorageLensConfigurations(
    input: ListStorageLensConfigurationsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listStorageLensGroups(
    input: ListStorageLensGroupsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putAccessGrantsInstanceResourcePolicy(
    input: PutAccessGrantsInstanceResourcePolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putAccessPointConfigurationForObjectLambda(
    input: PutAccessPointConfigurationForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putAccessPointPolicy(
    input: PutAccessPointPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putAccessPointPolicyForObjectLambda(
    input: PutAccessPointPolicyForObjectLambdaRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putAccessPointScope(
    input: PutAccessPointScopeRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putBucketLifecycleConfiguration(
    input: PutBucketLifecycleConfigurationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putBucketPolicy(
    input: PutBucketPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putBucketReplication(
    input: PutBucketReplicationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putBucketTagging(
    input: PutBucketTaggingRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putBucketVersioning(
    input: PutBucketVersioningRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putJobTagging(
    input: PutJobTaggingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | NotFoundException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  putMultiRegionAccessPointPolicy(
    input: PutMultiRegionAccessPointPolicyRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putPublicAccessBlock(
    input: PutPublicAccessBlockRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putStorageLensConfiguration(
    input: PutStorageLensConfigurationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  putStorageLensConfigurationTagging(
    input: PutStorageLensConfigurationTaggingRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  submitMultiRegionAccessPointRoutes(
    input: SubmitMultiRegionAccessPointRoutesRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  updateAccessGrantsLocation(
    input: UpdateAccessGrantsLocationRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  updateJobPriority(
    input: UpdateJobPriorityRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServiceException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateJobStatus(
    input: UpdateJobStatusRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServiceException | JobStatusException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateStorageLensGroup(
    input: UpdateStorageLensGroupRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
}

export type S3Control = AWSS3ControlServiceV20180820;

export interface AbortIncompleteMultipartUpload {
}
export interface AccessControlTranslation {
}
export type AccessGrantArn = string;

export type AccessGrantId = string;

export type AccessGrantsInstanceArn = string;

export type AccessGrantsInstanceId = string;

export type AccessGrantsInstancesList = Array<unknown>;
export type AccessGrantsList = Array<unknown>;
export type AccessGrantsLocationArn = string;

export interface AccessGrantsLocationConfiguration {
}
export type AccessGrantsLocationId = string;

export type AccessGrantsLocationsList = Array<unknown>;
export type AccessKeyId = string;

export interface AccessPoint {
}
export type AccessPointBucketName = string;

export type AccessPointList = Array<unknown>;
export type AccessPointName = string;

export type AccountId = string;

export interface AccountLevel {
}
export interface ActivityMetrics {
}
export interface AdvancedCostOptimizationMetrics {
}
export interface AdvancedDataProtectionMetrics {
}
export type Alias = string;

export interface AssociateAccessGrantsIdentityCenterRequest {
}
export type AsyncCreationTimestamp = Date | string;

export interface AsyncErrorDetails {
}
export interface AsyncOperation {
}
export type AsyncOperationName = never;
export interface AsyncRequestParameters {
}
export type AsyncRequestStatus = string;

export type AsyncRequestTokenARN = string;

export interface AsyncResponseDetails {
}
export interface AwsLambdaTransformation {
}
export type AwsLambdaTransformationPayload = string;

export type AwsOrgArn = string;

export interface BadRequestException {
}
export interface BucketAlreadyExists {
}
export interface BucketAlreadyOwnedByYou {
}
export type BucketCannedACL = never;
export type BucketIdentifierString = string;

export interface BucketLevel {
}
export type BucketLocationConstraint = never;
export type BucketName = string;

export type Buckets = Array<unknown>;
export type BucketVersioningStatus = never;
export type CallerAccessGrantsList = Array<unknown>;
export interface CloudWatchMetrics {
}
export type ConfigId = string;

export type ConfirmationRequired = boolean;

export type ConfirmRemoveSelfBucketAccess = boolean;

export type ContinuationToken = string;

export interface CreateAccessGrantRequest {
}
export interface CreateAccessGrantResult {
}
export interface CreateAccessGrantsInstanceRequest {
}
export interface CreateAccessGrantsInstanceResult {
}
export interface CreateAccessGrantsLocationRequest {
}
export interface CreateAccessGrantsLocationResult {
}
export interface CreateAccessPointForObjectLambdaRequest {
}
export interface CreateAccessPointForObjectLambdaResult {
}
export interface CreateAccessPointRequest {
}
export interface CreateAccessPointResult {
}
export interface CreateBucketConfiguration {
}
export interface CreateBucketRequest {
}
export interface CreateBucketResult {
}
export interface CreateJobRequest {
}
export interface CreateJobResult {
}
export interface CreateMultiRegionAccessPointInput {
}
export interface CreateMultiRegionAccessPointRequest {
}
export interface CreateMultiRegionAccessPointResult {
}
export interface CreateStorageLensGroupRequest {
}
export type CreationDate = Date | string;

export type CreationTimestamp = Date | string;

export interface Credentials {
}
export type DataSourceId = string;

export type DataSourceType = string;

export type Days = number;

export type DaysAfterInitiation = number;

export interface DeleteAccessGrantRequest {
}
export interface DeleteAccessGrantsInstanceRequest {
}
export interface DeleteAccessGrantsInstanceResourcePolicyRequest {
}
export interface DeleteAccessGrantsLocationRequest {
}
export interface DeleteAccessPointForObjectLambdaRequest {
}
export interface DeleteAccessPointPolicyForObjectLambdaRequest {
}
export interface DeleteAccessPointPolicyRequest {
}
export interface DeleteAccessPointRequest {
}
export interface DeleteAccessPointScopeRequest {
}
export interface DeleteBucketLifecycleConfigurationRequest {
}
export interface DeleteBucketPolicyRequest {
}
export interface DeleteBucketReplicationRequest {
}
export interface DeleteBucketRequest {
}
export interface DeleteBucketTaggingRequest {
}
export interface DeleteJobTaggingRequest {
}
export interface DeleteJobTaggingResult {
}
export interface DeleteMarkerReplication {
}
export type DeleteMarkerReplicationStatus = never;
export interface DeleteMultiRegionAccessPointInput {
}
export interface DeleteMultiRegionAccessPointRequest {
}
export interface DeleteMultiRegionAccessPointResult {
}
export interface DeletePublicAccessBlockRequest {
}
export interface DeleteStorageLensConfigurationRequest {
}
export interface DeleteStorageLensConfigurationTaggingRequest {
}
export interface DeleteStorageLensConfigurationTaggingResult {
}
export interface DeleteStorageLensGroupRequest {
}
export interface DescribeJobRequest {
}
export interface DescribeJobResult {
}
export interface DescribeMultiRegionAccessPointOperationRequest {
}
export interface DescribeMultiRegionAccessPointOperationResult {
}
export interface Destination {
}
export interface DetailedStatusCodesMetrics {
}
export interface DissociateAccessGrantsIdentityCenterRequest {
}
export type DurationSeconds = number;

export interface EncryptionConfiguration {
}
export type Endpoints = Record<string, unknown>;
export interface EstablishedMultiRegionAccessPointPolicy {
}
export type ExceptionMessage = string;

export interface Exclude {
}
export interface ExistingObjectReplication {
}
export type ExistingObjectReplicationStatus = never;
export type Expiration = Date | string;

export type ExpirationStatus = never;
export type ExpiredObjectDeleteMarker = boolean;

export type Format = never;
export type FunctionArnString = string;

export interface GeneratedManifestEncryption {
}
export type GeneratedManifestFormat = never;
export interface GetAccessGrantRequest {
}
export interface GetAccessGrantResult {
}
export interface GetAccessGrantsInstanceForPrefixRequest {
}
export interface GetAccessGrantsInstanceForPrefixResult {
}
export interface GetAccessGrantsInstanceRequest {
}
export interface GetAccessGrantsInstanceResourcePolicyRequest {
}
export interface GetAccessGrantsInstanceResourcePolicyResult {
}
export interface GetAccessGrantsInstanceResult {
}
export interface GetAccessGrantsLocationRequest {
}
export interface GetAccessGrantsLocationResult {
}
export interface GetAccessPointConfigurationForObjectLambdaRequest {
}
export interface GetAccessPointConfigurationForObjectLambdaResult {
}
export interface GetAccessPointForObjectLambdaRequest {
}
export interface GetAccessPointForObjectLambdaResult {
}
export interface GetAccessPointPolicyForObjectLambdaRequest {
}
export interface GetAccessPointPolicyForObjectLambdaResult {
}
export interface GetAccessPointPolicyRequest {
}
export interface GetAccessPointPolicyResult {
}
export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
}
export interface GetAccessPointPolicyStatusForObjectLambdaResult {
}
export interface GetAccessPointPolicyStatusRequest {
}
export interface GetAccessPointPolicyStatusResult {
}
export interface GetAccessPointRequest {
}
export interface GetAccessPointResult {
}
export interface GetAccessPointScopeRequest {
}
export interface GetAccessPointScopeResult {
}
export interface GetBucketLifecycleConfigurationRequest {
}
export interface GetBucketLifecycleConfigurationResult {
}
export interface GetBucketPolicyRequest {
}
export interface GetBucketPolicyResult {
}
export interface GetBucketReplicationRequest {
}
export interface GetBucketReplicationResult {
}
export interface GetBucketRequest {
}
export interface GetBucketResult {
}
export interface GetBucketTaggingRequest {
}
export interface GetBucketTaggingResult {
}
export interface GetBucketVersioningRequest {
}
export interface GetBucketVersioningResult {
}
export interface GetDataAccessRequest {
}
export interface GetDataAccessResult {
}
export interface GetJobTaggingRequest {
}
export interface GetJobTaggingResult {
}
export interface GetMultiRegionAccessPointPolicyRequest {
}
export interface GetMultiRegionAccessPointPolicyResult {
}
export interface GetMultiRegionAccessPointPolicyStatusRequest {
}
export interface GetMultiRegionAccessPointPolicyStatusResult {
}
export interface GetMultiRegionAccessPointRequest {
}
export interface GetMultiRegionAccessPointResult {
}
export interface GetMultiRegionAccessPointRoutesRequest {
}
export interface GetMultiRegionAccessPointRoutesResult {
}
export interface GetPublicAccessBlockOutput {
}
export interface GetPublicAccessBlockRequest {
}
export interface GetStorageLensConfigurationRequest {
}
export interface GetStorageLensConfigurationResult {
}
export interface GetStorageLensConfigurationTaggingRequest {
}
export interface GetStorageLensConfigurationTaggingResult {
}
export interface GetStorageLensGroupRequest {
}
export interface GetStorageLensGroupResult {
}
export interface Grantee {
}
export type GranteeIdentifier = string;

export type GranteeType = never;
export type GrantFullControl = string;

export type GrantRead = string;

export type GrantReadACP = string;

export type GrantWrite = string;

export type GrantWriteACP = string;

export type IAMRoleArn = string;

export type ID = string;

export interface IdempotencyException {
}
export type IdentityCenterApplicationArn = string;

export type IdentityCenterArn = string;

export interface Include {
}
export interface InternalServiceException {
}
export interface InvalidNextTokenException {
}
export interface InvalidRequestException {
}
export type IsEnabled = boolean;

export type IsPublic = boolean;

export type JobArn = string;

export type JobCreationTime = Date | string;

export interface JobDescriptor {
}
export interface JobFailure {
}
export type JobFailureCode = string;

export type JobFailureList = Array<unknown>;
export type JobFailureReason = string;

export type JobId = string;

export interface JobListDescriptor {
}
export type JobListDescriptorList = Array<unknown>;
export interface JobManifest {
}
export type JobManifestFieldList = Array<unknown>;
export type JobManifestFieldName = never;
export type JobManifestFormat = never;
export type JobManifestGenerator = never;
export interface JobManifestGeneratorFilter {
}
export interface JobManifestLocation {
}
export interface JobManifestSpec {
}
export type JobNumberOfTasksFailed = number;

export type JobNumberOfTasksSucceeded = number;

export interface JobOperation {
}
export type JobPriority = number;

export interface JobProgressSummary {
}
export interface JobReport {
}
export type JobReportFormat = never;
export type JobReportScope = never;
export type JobStatus = never;
export interface JobStatusException {
}
export type JobStatusList = Array<unknown>;
export type JobStatusUpdateReason = string;

export type JobTerminationDate = Date | string;

export type JobTimeInStateSeconds = number;

export interface JobTimers {
}
export type JobTotalNumberOfTasks = number;

export interface KeyNameConstraint {
}
export type KmsKeyArnString = string;

export interface LambdaInvokeOperation {
}
export interface LifecycleConfiguration {
}
export interface LifecycleExpiration {
}
export interface LifecycleRule {
}
export interface LifecycleRuleAndOperator {
}
export interface LifecycleRuleFilter {
}
export type LifecycleRules = Array<unknown>;
export interface ListAccessGrantEntry {
}
export interface ListAccessGrantsInstanceEntry {
}
export interface ListAccessGrantsInstancesRequest {
}
export interface ListAccessGrantsInstancesResult {
}
export interface ListAccessGrantsLocationsEntry {
}
export interface ListAccessGrantsLocationsRequest {
}
export interface ListAccessGrantsLocationsResult {
}
export interface ListAccessGrantsRequest {
}
export interface ListAccessGrantsResult {
}
export interface ListAccessPointsForDirectoryBucketsRequest {
}
export interface ListAccessPointsForDirectoryBucketsResult {
}
export interface ListAccessPointsForObjectLambdaRequest {
}
export interface ListAccessPointsForObjectLambdaResult {
}
export interface ListAccessPointsRequest {
}
export interface ListAccessPointsResult {
}
export interface ListCallerAccessGrantsEntry {
}
export interface ListCallerAccessGrantsRequest {
}
export interface ListCallerAccessGrantsResult {
}
export interface ListJobsRequest {
}
export interface ListJobsResult {
}
export interface ListMultiRegionAccessPointsRequest {
}
export interface ListMultiRegionAccessPointsResult {
}
export interface ListRegionalBucketsRequest {
}
export interface ListRegionalBucketsResult {
}
export interface ListStorageLensConfigurationEntry {
}
export interface ListStorageLensConfigurationsRequest {
}
export interface ListStorageLensConfigurationsResult {
}
export interface ListStorageLensGroupEntry {
}
export interface ListStorageLensGroupsRequest {
}
export interface ListStorageLensGroupsResult {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResult {
}
export type Location = string;

export type ManifestPrefixString = string;

export type MatchAnyPrefix = Array<unknown>;
export type MatchAnySuffix = Array<unknown>;
export type MatchAnyTag = Array<unknown>;
export interface MatchObjectAge {
}
export interface MatchObjectSize {
}
export type MaxLength1024String = string;

export type MaxResults = number;

export interface Metrics {
}
export type MetricsStatus = never;
export type MFA = string;

export type MFADelete = never;
export type MFADeleteStatus = never;
export type MinStorageBytesPercentage = number;

export type Minutes = number;

export type MultiRegionAccessPointAlias = string;

export type MultiRegionAccessPointClientToken = string;

export type MultiRegionAccessPointId = string;

export type MultiRegionAccessPointName = string;

export interface MultiRegionAccessPointPolicyDocument {
}
export interface MultiRegionAccessPointRegionalResponse {
}
export type MultiRegionAccessPointRegionalResponseList = Array<unknown>;
export interface MultiRegionAccessPointReport {
}
export type MultiRegionAccessPointReportList = Array<unknown>;
export interface MultiRegionAccessPointRoute {
}
export interface MultiRegionAccessPointsAsyncResponse {
}
export type MultiRegionAccessPointStatus = never;
export type NetworkOrigin = never;
export type NoncurrentVersionCount = number;

export interface NoncurrentVersionExpiration {
}
export interface NoncurrentVersionTransition {
}
export type NoncurrentVersionTransitionList = Array<unknown>;
export type NonEmptyMaxLength1024String = string;

export type NonEmptyMaxLength1024StringList = Array<unknown>;
export type NonEmptyMaxLength2048String = string;

export type NonEmptyMaxLength256String = string;

export type NonEmptyMaxLength64String = string;

export interface NoSuchPublicAccessBlockConfiguration {
}
export type NoSuchPublicAccessBlockConfigurationMessage = string;

export interface NotFoundException {
}
export type ObjectAgeValue = number;

export type ObjectCreationTime = Date | string;

export interface ObjectLambdaAccessPoint {
}
export interface ObjectLambdaAccessPointAlias {
}
export type ObjectLambdaAccessPointAliasStatus = never;
export type ObjectLambdaAccessPointAliasValue = string;

export type ObjectLambdaAccessPointArn = string;

export type ObjectLambdaAccessPointList = Array<unknown>;
export type ObjectLambdaAccessPointName = string;

export type ObjectLambdaAllowedFeature = never;
export type ObjectLambdaAllowedFeaturesList = Array<unknown>;
export interface ObjectLambdaConfiguration {
}
export type ObjectLambdaContentTransformation = never;
export type ObjectLambdaPolicy = string;

export type ObjectLambdaSupportingAccessPointArn = string;

export interface ObjectLambdaTransformationConfiguration {
}
export type ObjectLambdaTransformationConfigurationAction = never;
export type ObjectLambdaTransformationConfigurationActionsList = Array<unknown>;
export type ObjectLambdaTransformationConfigurationsList = Array<unknown>;
export type ObjectLockEnabledForBucket = boolean;

export type ObjectSizeGreaterThanBytes = number;

export type ObjectSizeLessThanBytes = number;

export type ObjectSizeValue = number;

export type OperationName = never;
export type Organization = string;

export type OutputSchemaVersion = never;
export type OwnerOverride = never;
export type Permission = never;
export type Policy = string;

export type PolicyDocument = string;

export interface PolicyStatus {
}
export type Prefix = string;

export type PrefixesList = Array<unknown>;
export interface PrefixLevel {
}
export interface PrefixLevelStorageMetrics {
}
export type Priority = number;

export type Privilege = never;
export interface ProposedMultiRegionAccessPointPolicy {
}
export interface PublicAccessBlockConfiguration {
}
export type PublicAccessBlockEnabled = boolean;

export interface PutAccessGrantsInstanceResourcePolicyRequest {
}
export interface PutAccessGrantsInstanceResourcePolicyResult {
}
export interface PutAccessPointConfigurationForObjectLambdaRequest {
}
export interface PutAccessPointPolicyForObjectLambdaRequest {
}
export interface PutAccessPointPolicyRequest {
}
export interface PutAccessPointScopeRequest {
}
export interface PutBucketLifecycleConfigurationRequest {
}
export interface PutBucketPolicyRequest {
}
export interface PutBucketReplicationRequest {
}
export interface PutBucketTaggingRequest {
}
export interface PutBucketVersioningRequest {
}
export interface PutJobTaggingRequest {
}
export interface PutJobTaggingResult {
}
export interface PutMultiRegionAccessPointPolicyInput {
}
export interface PutMultiRegionAccessPointPolicyRequest {
}
export interface PutMultiRegionAccessPointPolicyResult {
}
export interface PutPublicAccessBlockRequest {
}
export interface PutStorageLensConfigurationRequest {
}
export interface PutStorageLensConfigurationTaggingRequest {
}
export interface PutStorageLensConfigurationTaggingResult {
}
export interface Region {
}
export interface RegionalBucket {
}
export type RegionalBucketList = Array<unknown>;
export type RegionCreationList = Array<unknown>;
export type RegionName = string;

export interface RegionReport {
}
export type RegionReportList = Array<unknown>;
export type Regions = Array<unknown>;
export type ReplicaKmsKeyID = string;

export interface ReplicaModifications {
}
export type ReplicaModificationsStatus = never;
export interface ReplicationConfiguration {
}
export interface ReplicationRule {
}
export interface ReplicationRuleAndOperator {
}
export interface ReplicationRuleFilter {
}
export type ReplicationRules = Array<unknown>;
export type ReplicationRuleStatus = never;
export type ReplicationStatus = never;
export type ReplicationStatusFilterList = Array<unknown>;
export type ReplicationStorageClass = never;
export interface ReplicationTime {
}
export type ReplicationTimeStatus = never;
export interface ReplicationTimeValue {
}
export type ReportPrefixString = string;

export type RequestedJobStatus = never;
export type Role = string;

export type RouteList = Array<unknown>;
export interface S3AccessControlList {
}
export interface S3AccessControlPolicy {
}
export type S3AccessPointArn = string;

export type S3AWSRegion = string;

export type S3BucketArnString = string;

export interface S3BucketDestination {
}
export type S3CannedAccessControlList = never;
export type S3ChecksumAlgorithm = never;
export type S3ContentLength = number;

export interface S3CopyObjectOperation {
}
export interface S3DeleteObjectTaggingOperation {
}
export type S3ExpirationInDays = number;

export interface S3GeneratedManifestDescriptor {
}
export type S3GlacierJobTier = never;
export interface S3Grant {
}
export interface S3Grantee {
}
export type S3GranteeTypeIdentifier = never;
export type S3GrantList = Array<unknown>;
export interface S3InitiateRestoreObjectOperation {
}
export interface S3JobManifestGenerator {
}
export type S3KeyArnString = string;

export interface S3ManifestOutputLocation {
}
export type S3MetadataDirective = never;
export interface S3ObjectLockLegalHold {
}
export type S3ObjectLockLegalHoldStatus = never;
export type S3ObjectLockMode = never;
export type S3ObjectLockRetentionMode = never;
export interface S3ObjectMetadata {
}
export interface S3ObjectOwner {
}
export type S3ObjectVersionId = string;

export type S3Permission = never;
export type S3Prefix = string;

export type S3PrefixType = never;
export type S3RegionalBucketArn = string;

export type S3RegionalOrS3ExpressBucketArnString = string;

export interface S3ReplicateObjectOperation {
}
export type S3ResourceArn = string;

export interface S3Retention {
}
export interface S3SetObjectAclOperation {
}
export interface S3SetObjectLegalHoldOperation {
}
export interface S3SetObjectRetentionOperation {
}
export interface S3SetObjectTaggingOperation {
}
export type S3SSEAlgorithm = never;
export type S3StorageClass = never;
export interface S3Tag {
}
export type S3TagSet = Array<unknown>;
export type S3UserMetadata = Record<string, unknown>;
export interface Scope {
}
export type ScopePermission = never;
export type ScopePermissionList = Array<unknown>;
export type SecretAccessKey = string;

export interface SelectionCriteria {
}
export type SessionToken = string;

export type Setting = boolean;

export interface SourceSelectionCriteria {
}
export interface SSEKMS {
}
export interface SseKmsEncryptedObjects {
}
export type SseKmsEncryptedObjectsStatus = never;
export interface SSEKMSEncryption {
}
export type SSEKMSKeyId = string;

export interface SSES3 {
}
export interface SSES3Encryption {
}
export type StorageClassList = Array<unknown>;
export type StorageLensArn = string;

export interface StorageLensAwsOrg {
}
export interface StorageLensConfiguration {
}
export type StorageLensConfigurationList = Array<unknown>;
export interface StorageLensDataExport {
}
export interface StorageLensDataExportEncryption {
}
export interface StorageLensGroup {
}
export interface StorageLensGroupAndOperator {
}
export type StorageLensGroupArn = string;

export interface StorageLensGroupFilter {
}
export interface StorageLensGroupLevel {
}
export type StorageLensGroupLevelExclude = Array<unknown>;
export type StorageLensGroupLevelInclude = Array<unknown>;
export interface StorageLensGroupLevelSelectionCriteria {
}
export type StorageLensGroupList = Array<unknown>;
export type StorageLensGroupName = string;

export interface StorageLensGroupOrOperator {
}
export type StorageLensPrefixLevelDelimiter = string;

export type StorageLensPrefixLevelMaxDepth = number;

export interface StorageLensTag {
}
export type StorageLensTags = Array<unknown>;
export type StringForNextToken = string;

export interface SubmitMultiRegionAccessPointRoutesRequest {
}
export interface SubmitMultiRegionAccessPointRoutesResult {
}
export type Suffix = string;

export type SuspendedCause = string;

export type SuspendedDate = Date | string;

export interface Tag {
}
export interface Tagging {
}
export type TagKeyList = Array<unknown>;
export type TagKeyString = string;

export type TagList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResult {
}
export type TagValueString = string;

export type TimeStamp = Date | string;

export interface TooManyRequestsException {
}
export interface TooManyTagsException {
}
export type TrafficDialPercentage = number;

export interface Transition {
}
export type TransitionList = Array<unknown>;
export type TransitionStorageClass = never;
export interface UntagResourceRequest {
}
export interface UntagResourceResult {
}
export interface UpdateAccessGrantsLocationRequest {
}
export interface UpdateAccessGrantsLocationResult {
}
export interface UpdateJobPriorityRequest {
}
export interface UpdateJobPriorityResult {
}
export interface UpdateJobStatusRequest {
}
export interface UpdateJobStatusResult {
}
export interface UpdateStorageLensGroupRequest {
}
export type UserArguments = Record<string, unknown>;
export interface VersioningConfiguration {
}
export interface VpcConfiguration {
}
export type VpcId = string;

export declare namespace AssociateAccessGrantsIdentityCenter {
  export type Input = AssociateAccessGrantsIdentityCenterRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateAccessGrant {
  export type Input = CreateAccessGrantRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateAccessGrantsInstance {
  export type Input = CreateAccessGrantsInstanceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateAccessGrantsLocation {
  export type Input = CreateAccessGrantsLocationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateAccessPoint {
  export type Input = CreateAccessPointRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateAccessPointForObjectLambda {
  export type Input = CreateAccessPointForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateBucket {
  export type Input = CreateBucketRequest;
  export type Output = {};
  export type Error =
    | BucketAlreadyExists
    | BucketAlreadyOwnedByYou
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | IdempotencyException
    | InternalServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateMultiRegionAccessPoint {
  export type Input = CreateMultiRegionAccessPointRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace CreateStorageLensGroup {
  export type Input = CreateStorageLensGroupRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessGrant {
  export type Input = DeleteAccessGrantRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessGrantsInstance {
  export type Input = DeleteAccessGrantsInstanceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessGrantsInstanceResourcePolicy {
  export type Input = DeleteAccessGrantsInstanceResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessGrantsLocation {
  export type Input = DeleteAccessGrantsLocationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessPoint {
  export type Input = DeleteAccessPointRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessPointForObjectLambda {
  export type Input = DeleteAccessPointForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessPointPolicy {
  export type Input = DeleteAccessPointPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessPointPolicyForObjectLambda {
  export type Input = DeleteAccessPointPolicyForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteAccessPointScope {
  export type Input = DeleteAccessPointScopeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteBucket {
  export type Input = DeleteBucketRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteBucketLifecycleConfiguration {
  export type Input = DeleteBucketLifecycleConfigurationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteBucketPolicy {
  export type Input = DeleteBucketPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteBucketReplication {
  export type Input = DeleteBucketReplicationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteBucketTagging {
  export type Input = DeleteBucketTaggingRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteJobTagging {
  export type Input = DeleteJobTaggingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteMultiRegionAccessPoint {
  export type Input = DeleteMultiRegionAccessPointRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeletePublicAccessBlock {
  export type Input = DeletePublicAccessBlockRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteStorageLensConfiguration {
  export type Input = DeleteStorageLensConfigurationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteStorageLensConfigurationTagging {
  export type Input = DeleteStorageLensConfigurationTaggingRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DeleteStorageLensGroup {
  export type Input = DeleteStorageLensGroupRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeJob {
  export type Input = DescribeJobRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeMultiRegionAccessPointOperation {
  export type Input = DescribeMultiRegionAccessPointOperationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace DissociateAccessGrantsIdentityCenter {
  export type Input = DissociateAccessGrantsIdentityCenterRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessGrant {
  export type Input = GetAccessGrantRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessGrantsInstance {
  export type Input = GetAccessGrantsInstanceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessGrantsInstanceForPrefix {
  export type Input = GetAccessGrantsInstanceForPrefixRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessGrantsInstanceResourcePolicy {
  export type Input = GetAccessGrantsInstanceResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessGrantsLocation {
  export type Input = GetAccessGrantsLocationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPoint {
  export type Input = GetAccessPointRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPointConfigurationForObjectLambda {
  export type Input = GetAccessPointConfigurationForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPointForObjectLambda {
  export type Input = GetAccessPointForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPointPolicy {
  export type Input = GetAccessPointPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPointPolicyForObjectLambda {
  export type Input = GetAccessPointPolicyForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPointPolicyStatus {
  export type Input = GetAccessPointPolicyStatusRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPointPolicyStatusForObjectLambda {
  export type Input = GetAccessPointPolicyStatusForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccessPointScope {
  export type Input = GetAccessPointScopeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetBucket {
  export type Input = GetBucketRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetBucketLifecycleConfiguration {
  export type Input = GetBucketLifecycleConfigurationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetBucketPolicy {
  export type Input = GetBucketPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetBucketReplication {
  export type Input = GetBucketReplicationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetBucketTagging {
  export type Input = GetBucketTaggingRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetBucketVersioning {
  export type Input = GetBucketVersioningRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetDataAccess {
  export type Input = GetDataAccessRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetJobTagging {
  export type Input = GetJobTaggingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetMultiRegionAccessPoint {
  export type Input = GetMultiRegionAccessPointRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetMultiRegionAccessPointPolicy {
  export type Input = GetMultiRegionAccessPointPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetMultiRegionAccessPointPolicyStatus {
  export type Input = GetMultiRegionAccessPointPolicyStatusRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetMultiRegionAccessPointRoutes {
  export type Input = GetMultiRegionAccessPointRoutesRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetPublicAccessBlock {
  export type Input = GetPublicAccessBlockRequest;
  export type Output = {};
  export type Error =
    | NoSuchPublicAccessBlockConfiguration
    | CommonAwsError;
}

export declare namespace GetStorageLensConfiguration {
  export type Input = GetStorageLensConfigurationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetStorageLensConfigurationTagging {
  export type Input = GetStorageLensConfigurationTaggingRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace GetStorageLensGroup {
  export type Input = GetStorageLensGroupRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListAccessGrants {
  export type Input = ListAccessGrantsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListAccessGrantsInstances {
  export type Input = ListAccessGrantsInstancesRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListAccessGrantsLocations {
  export type Input = ListAccessGrantsLocationsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListAccessPoints {
  export type Input = ListAccessPointsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListAccessPointsForDirectoryBuckets {
  export type Input = ListAccessPointsForDirectoryBucketsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListAccessPointsForObjectLambda {
  export type Input = ListAccessPointsForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListCallerAccessGrants {
  export type Input = ListCallerAccessGrantsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidNextTokenException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListMultiRegionAccessPoints {
  export type Input = ListMultiRegionAccessPointsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListRegionalBuckets {
  export type Input = ListRegionalBucketsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListStorageLensConfigurations {
  export type Input = ListStorageLensConfigurationsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListStorageLensGroups {
  export type Input = ListStorageLensGroupsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutAccessGrantsInstanceResourcePolicy {
  export type Input = PutAccessGrantsInstanceResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutAccessPointConfigurationForObjectLambda {
  export type Input = PutAccessPointConfigurationForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutAccessPointPolicy {
  export type Input = PutAccessPointPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutAccessPointPolicyForObjectLambda {
  export type Input = PutAccessPointPolicyForObjectLambdaRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutAccessPointScope {
  export type Input = PutAccessPointScopeRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutBucketLifecycleConfiguration {
  export type Input = PutBucketLifecycleConfigurationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutBucketPolicy {
  export type Input = PutBucketPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutBucketReplication {
  export type Input = PutBucketReplicationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutBucketTagging {
  export type Input = PutBucketTaggingRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutBucketVersioning {
  export type Input = PutBucketVersioningRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutJobTagging {
  export type Input = PutJobTaggingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace PutMultiRegionAccessPointPolicy {
  export type Input = PutMultiRegionAccessPointPolicyRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutPublicAccessBlock {
  export type Input = PutPublicAccessBlockRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutStorageLensConfiguration {
  export type Input = PutStorageLensConfigurationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace PutStorageLensConfigurationTagging {
  export type Input = PutStorageLensConfigurationTaggingRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace SubmitMultiRegionAccessPointRoutes {
  export type Input = SubmitMultiRegionAccessPointRoutesRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateAccessGrantsLocation {
  export type Input = UpdateAccessGrantsLocationRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateJobPriority {
  export type Input = UpdateJobPriorityRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServiceException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateJobStatus {
  export type Input = UpdateJobStatusRequest;
  export type Output = {};
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
  export type Error =
    | CommonAwsError;
}

