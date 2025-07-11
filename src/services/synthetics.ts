import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Synthetics {
  associateResource(
    input: AssociateResourceRequest,
  ): Effect.Effect<
    AssociateResourceResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createCanary(
    input: CreateCanaryRequest,
  ): Effect.Effect<
    CreateCanaryResponse,
    | InternalServerException
    | RequestEntityTooLargeException
    | ValidationException
    | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteCanary(
    input: DeleteCanaryRequest,
  ): Effect.Effect<
    DeleteCanaryResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    DeleteGroupResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeCanaries(
    input: DescribeCanariesRequest,
  ): Effect.Effect<
    DescribeCanariesResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeCanariesLastRun(
    input: DescribeCanariesLastRunRequest,
  ): Effect.Effect<
    DescribeCanariesLastRunResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeRuntimeVersions(
    input: DescribeRuntimeVersionsRequest,
  ): Effect.Effect<
    DescribeRuntimeVersionsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  disassociateResource(
    input: DisassociateResourceRequest,
  ): Effect.Effect<
    DisassociateResourceResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCanary(
    input: GetCanaryRequest,
  ): Effect.Effect<
    GetCanaryResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  getCanaryRuns(
    input: GetCanaryRunsRequest,
  ): Effect.Effect<
    GetCanaryRunsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getGroup(
    input: GetGroupRequest,
  ): Effect.Effect<
    GetGroupResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listAssociatedGroups(
    input: ListAssociatedGroupsRequest,
  ): Effect.Effect<
    ListAssociatedGroupsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listGroupResources(
    input: ListGroupResourcesRequest,
  ): Effect.Effect<
    ListGroupResourcesResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startCanary(
    input: StartCanaryRequest,
  ): Effect.Effect<
    StartCanaryResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startCanaryDryRun(
    input: StartCanaryDryRunRequest,
  ): Effect.Effect<
    StartCanaryDryRunResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  stopCanary(
    input: StopCanaryRequest,
  ): Effect.Effect<
    StopCanaryResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateCanary(
    input: UpdateCanaryRequest,
  ): Effect.Effect<
    UpdateCanaryResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | RequestEntityTooLargeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface ArtifactConfigInput {
  S3Encryption?: S3EncryptionConfig;
}
export interface ArtifactConfigOutput {
  S3Encryption?: S3EncryptionConfig;
}
export interface AssociateResourceRequest {
  GroupIdentifier: string;
  ResourceArn: string;
}
export interface AssociateResourceResponse {}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export interface BaseScreenshot {
  ScreenshotName: string;
  IgnoreCoordinates?: Array<string>;
}
export type BaseScreenshotConfigIgnoreCoordinate = string;

export type BaseScreenshotIgnoreCoordinates = Array<string>;
export type BaseScreenshots = Array<BaseScreenshot>;
export type Blob = Uint8Array | string;

export type Canaries = Array<Canary>;
export type CanariesLastRun = Array<CanaryLastRun>;
export interface Canary {
  Id?: string;
  Name?: string;
  Code?: CanaryCodeOutput;
  ExecutionRoleArn?: string;
  Schedule?: CanaryScheduleOutput;
  RunConfig?: CanaryRunConfigOutput;
  SuccessRetentionPeriodInDays?: number;
  FailureRetentionPeriodInDays?: number;
  Status?: CanaryStatus;
  Timeline?: CanaryTimeline;
  ArtifactS3Location?: string;
  EngineArn?: string;
  RuntimeVersion?: string;
  VpcConfig?: VpcConfigOutput;
  VisualReference?: VisualReferenceOutput;
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting;
  Tags?: Record<string, string>;
  ArtifactConfig?: ArtifactConfigOutput;
  DryRunConfig?: DryRunConfigOutput;
}
export type CanaryArn = string;

export interface CanaryCodeInput {
  S3Bucket?: string;
  S3Key?: string;
  S3Version?: string;
  ZipFile?: Uint8Array | string;
  Handler: string;
}
export interface CanaryCodeOutput {
  SourceLocationArn?: string;
  Handler?: string;
}
export interface CanaryDryRunConfigOutput {
  DryRunId?: string;
}
export interface CanaryLastRun {
  CanaryName?: string;
  LastRun?: CanaryRun;
}
export type CanaryName = string;

export interface CanaryRun {
  Id?: string;
  ScheduledRunId?: string;
  RetryAttempt?: number;
  Name?: string;
  Status?: CanaryRunStatus;
  Timeline?: CanaryRunTimeline;
  ArtifactS3Location?: string;
  DryRunConfig?: CanaryDryRunConfigOutput;
}
export interface CanaryRunConfigInput {
  TimeoutInSeconds?: number;
  MemoryInMB?: number;
  ActiveTracing?: boolean;
  EnvironmentVariables?: Record<string, string>;
  EphemeralStorage?: number;
}
export interface CanaryRunConfigOutput {
  TimeoutInSeconds?: number;
  MemoryInMB?: number;
  ActiveTracing?: boolean;
  EphemeralStorage?: number;
}
export type CanaryRuns = Array<CanaryRun>;
export type CanaryRunState = "RUNNING" | "PASSED" | "FAILED";
export type CanaryRunStateReasonCode = "CANARY_FAILURE" | "EXECUTION_FAILURE";
export interface CanaryRunStatus {
  State?: CanaryRunState;
  StateReason?: string;
  StateReasonCode?: CanaryRunStateReasonCode;
  TestResult?: CanaryRunTestResult;
}
export type CanaryRunTestResult = "PASSED" | "FAILED" | "UNKNOWN";
export interface CanaryRunTimeline {
  Started?: Date | string;
  Completed?: Date | string;
  MetricTimestampForRunAndRetries?: Date | string;
}
export interface CanaryScheduleInput {
  Expression: string;
  DurationInSeconds?: number;
  RetryConfig?: RetryConfigInput;
}
export interface CanaryScheduleOutput {
  Expression?: string;
  DurationInSeconds?: number;
  RetryConfig?: RetryConfigOutput;
}
export type CanaryState =
  | "CREATING"
  | "READY"
  | "STARTING"
  | "RUNNING"
  | "UPDATING"
  | "STOPPING"
  | "STOPPED"
  | "ERROR"
  | "DELETING";
export type CanaryStateReasonCode =
  | "INVALID_PERMISSIONS"
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "UPDATE_PENDING"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "ROLLBACK_COMPLETE"
  | "ROLLBACK_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "SYNC_DELETE_IN_PROGRESS";
export interface CanaryStatus {
  State?: CanaryState;
  StateReason?: string;
  StateReasonCode?: CanaryStateReasonCode;
}
export interface CanaryTimeline {
  Created?: Date | string;
  LastModified?: Date | string;
  LastStarted?: Date | string;
  LastStopped?: Date | string;
}
export type CodeHandler = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateCanaryRequest {
  Name: string;
  Code: CanaryCodeInput;
  ArtifactS3Location: string;
  ExecutionRoleArn: string;
  Schedule: CanaryScheduleInput;
  RunConfig?: CanaryRunConfigInput;
  SuccessRetentionPeriodInDays?: number;
  FailureRetentionPeriodInDays?: number;
  RuntimeVersion: string;
  VpcConfig?: VpcConfigInput;
  ResourcesToReplicateTags?: Array<ResourceToTag>;
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting;
  Tags?: Record<string, string>;
  ArtifactConfig?: ArtifactConfigInput;
}
export interface CreateCanaryResponse {
  Canary?: Canary;
}
export interface CreateGroupRequest {
  Name: string;
  Tags?: Record<string, string>;
}
export interface CreateGroupResponse {
  Group?: Group;
}
export interface DeleteCanaryRequest {
  Name: string;
  DeleteLambda?: boolean;
}
export interface DeleteCanaryResponse {}
export interface DeleteGroupRequest {
  GroupIdentifier: string;
}
export interface DeleteGroupResponse {}
export type DescribeCanariesLastRunNameFilter = Array<string>;
export interface DescribeCanariesLastRunRequest {
  NextToken?: string;
  MaxResults?: number;
  Names?: Array<string>;
}
export interface DescribeCanariesLastRunResponse {
  CanariesLastRun?: Array<CanaryLastRun>;
  NextToken?: string;
}
export type DescribeCanariesNameFilter = Array<string>;
export interface DescribeCanariesRequest {
  NextToken?: string;
  MaxResults?: number;
  Names?: Array<string>;
}
export interface DescribeCanariesResponse {
  Canaries?: Array<Canary>;
  NextToken?: string;
}
export interface DescribeRuntimeVersionsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeRuntimeVersionsResponse {
  RuntimeVersions?: Array<RuntimeVersion>;
  NextToken?: string;
}
export interface DisassociateResourceRequest {
  GroupIdentifier: string;
  ResourceArn: string;
}
export interface DisassociateResourceResponse {}
export interface DryRunConfigOutput {
  DryRunId?: string;
  LastDryRunExecutionStatus?: string;
}
export type EncryptionMode = "SSE_S3" | "SSE_KMS";
export type EnvironmentVariableName = string;

export type EnvironmentVariablesMap = Record<string, string>;
export type EnvironmentVariableValue = string;

export type EphemeralStorageSize = number;

export type ErrorMessage = string;

export type FunctionArn = string;

export interface GetCanaryRequest {
  Name: string;
  DryRunId?: string;
}
export interface GetCanaryResponse {
  Canary?: Canary;
}
export interface GetCanaryRunsRequest {
  Name: string;
  NextToken?: string;
  MaxResults?: number;
  DryRunId?: string;
  RunType?: RunType;
}
export interface GetCanaryRunsResponse {
  CanaryRuns?: Array<CanaryRun>;
  NextToken?: string;
}
export interface GetGroupRequest {
  GroupIdentifier: string;
}
export interface GetGroupResponse {
  Group?: Group;
}
export interface Group {
  Id?: string;
  Name?: string;
  Arn?: string;
  Tags?: Record<string, string>;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export type GroupArn = string;

export type GroupIdentifier = string;

export type GroupName = string;

export interface GroupSummary {
  Id?: string;
  Name?: string;
  Arn?: string;
}
export type GroupSummaryList = Array<GroupSummary>;
export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly Message?: string;
}> {}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type KmsKeyArn = string;

export interface ListAssociatedGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
  ResourceArn: string;
}
export interface ListAssociatedGroupsResponse {
  Groups?: Array<GroupSummary>;
  NextToken?: string;
}
export interface ListGroupResourcesRequest {
  NextToken?: string;
  MaxResults?: number;
  GroupIdentifier: string;
}
export interface ListGroupResourcesResponse {
  Resources?: Array<string>;
  NextToken?: string;
}
export interface ListGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGroupsResponse {
  Groups?: Array<GroupSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MaxCanaryResults = number;

export type MaxFifteenMinutesInSeconds = number;

export type MaxGroupResults = number;

export type MaxOneYearInSeconds = number;

export type MaxRetries = number;

export type MaxSize100 = number;

export type MaxSize1024 = number;

export type MaxSize3008 = number;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export type NullableBoolean = boolean;

export type PaginationToken = string;

export type ProvisionedResourceCleanupSetting = "AUTOMATIC" | "OFF";
export declare class RequestEntityTooLargeException extends Data.TaggedError(
  "RequestEntityTooLargeException",
)<{
  readonly Message?: string;
}> {}
export type ResourceArn = string;

export type ResourceList = Array<ResourceToTag>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceToTag = "LAMBDA_FUNCTION";
export type RetryAttempt = number;

export interface RetryConfigInput {
  MaxRetries: number;
}
export interface RetryConfigOutput {
  MaxRetries?: number;
}
export type RoleArn = string;

export interface RuntimeVersion {
  VersionName?: string;
  Description?: string;
  ReleaseDate?: Date | string;
  DeprecationDate?: Date | string;
}
export type RuntimeVersionList = Array<RuntimeVersion>;
export type RunType = "CANARY_RUN" | "DRY_RUN";
export interface S3EncryptionConfig {
  EncryptionMode?: EncryptionMode;
  KmsKeyArn?: string;
}
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface StartCanaryDryRunRequest {
  Name: string;
  Code?: CanaryCodeInput;
  RuntimeVersion?: string;
  RunConfig?: CanaryRunConfigInput;
  VpcConfig?: VpcConfigInput;
  ExecutionRoleArn?: string;
  SuccessRetentionPeriodInDays?: number;
  FailureRetentionPeriodInDays?: number;
  VisualReference?: VisualReferenceInput;
  ArtifactS3Location?: string;
  ArtifactConfig?: ArtifactConfigInput;
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting;
}
export interface StartCanaryDryRunResponse {
  DryRunConfig?: DryRunConfigOutput;
}
export interface StartCanaryRequest {
  Name: string;
}
export interface StartCanaryResponse {}
export interface StopCanaryRequest {
  Name: string;
}
export interface StopCanaryResponse {}
export type StringList = Array<string>;
export type SubnetId = string;

export type SubnetIds = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Timestamp = Date | string;

export type Token = string;

export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateCanaryRequest {
  Name: string;
  Code?: CanaryCodeInput;
  ExecutionRoleArn?: string;
  RuntimeVersion?: string;
  Schedule?: CanaryScheduleInput;
  RunConfig?: CanaryRunConfigInput;
  SuccessRetentionPeriodInDays?: number;
  FailureRetentionPeriodInDays?: number;
  VpcConfig?: VpcConfigInput;
  VisualReference?: VisualReferenceInput;
  ArtifactS3Location?: string;
  ArtifactConfig?: ArtifactConfigInput;
  ProvisionedResourceCleanup?: ProvisionedResourceCleanupSetting;
  DryRunId?: string;
}
export interface UpdateCanaryResponse {}
export type UUID = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export interface VisualReferenceInput {
  BaseScreenshots?: Array<BaseScreenshot>;
  BaseCanaryRunId: string;
}
export interface VisualReferenceOutput {
  BaseScreenshots?: Array<BaseScreenshot>;
  BaseCanaryRunId?: string;
}
export interface VpcConfigInput {
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  Ipv6AllowedForDualStack?: boolean;
}
export interface VpcConfigOutput {
  VpcId?: string;
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  Ipv6AllowedForDualStack?: boolean;
}
export type VpcId = string;

export declare namespace AssociateResource {
  export type Input = AssociateResourceRequest;
  export type Output = AssociateResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCanary {
  export type Input = CreateCanaryRequest;
  export type Output = CreateCanaryResponse;
  export type Error =
    | InternalServerException
    | RequestEntityTooLargeException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = CreateGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCanary {
  export type Input = DeleteCanaryRequest;
  export type Output = DeleteCanaryResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = DeleteGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCanaries {
  export type Input = DescribeCanariesRequest;
  export type Output = DescribeCanariesResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCanariesLastRun {
  export type Input = DescribeCanariesLastRunRequest;
  export type Output = DescribeCanariesLastRunResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRuntimeVersions {
  export type Input = DescribeRuntimeVersionsRequest;
  export type Output = DescribeRuntimeVersionsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateResource {
  export type Input = DisassociateResourceRequest;
  export type Output = DisassociateResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCanary {
  export type Input = GetCanaryRequest;
  export type Output = GetCanaryResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCanaryRuns {
  export type Input = GetCanaryRunsRequest;
  export type Output = GetCanaryRunsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGroup {
  export type Input = GetGroupRequest;
  export type Output = GetGroupResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssociatedGroups {
  export type Input = ListAssociatedGroupsRequest;
  export type Output = ListAssociatedGroupsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroupResources {
  export type Input = ListGroupResourcesRequest;
  export type Output = ListGroupResourcesResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = ListGroupsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartCanary {
  export type Input = StartCanaryRequest;
  export type Output = StartCanaryResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartCanaryDryRun {
  export type Input = StartCanaryDryRunRequest;
  export type Output = StartCanaryDryRunResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopCanary {
  export type Input = StopCanaryRequest;
  export type Output = StopCanaryResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateCanary {
  export type Input = UpdateCanaryRequest;
  export type Output = UpdateCanaryResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | RequestEntityTooLargeException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
