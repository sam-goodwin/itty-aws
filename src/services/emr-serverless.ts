import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AwsToledoWebService {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type EmrServerless = AwsToledoWebService;

export interface Application {
  applicationId: string;
  name?: string;
  arn: string;
  releaseLabel: string;
  type: string;
  state: string;
  stateDetails?: string;
  initialCapacity?: Record<string, InitialCapacityConfig>;
  maximumCapacity?: MaximumAllowedResources;
  createdAt: Date | string;
  updatedAt: Date | string;
  tags?: Record<string, string>;
  autoStartConfiguration?: AutoStartConfig;
  autoStopConfiguration?: AutoStopConfig;
  networkConfiguration?: NetworkConfiguration;
  architecture?: string;
  imageConfiguration?: ImageConfiguration;
  workerTypeSpecifications?: Record<string, WorkerTypeSpecification>;
  runtimeConfiguration?: Array<Configuration>;
  monitoringConfiguration?: MonitoringConfiguration;
  interactiveConfiguration?: InteractiveConfiguration;
  schedulerConfiguration?: SchedulerConfiguration;
  identityCenterConfiguration?: IdentityCenterConfiguration;
}
export type ApplicationArn = string;

export type ApplicationId = string;

export type ApplicationList = Array<ApplicationSummary>;
export type ApplicationName = string;

export type ApplicationState = string;

export type ApplicationStateSet = Array<string>;
export interface ApplicationSummary {
  id: string;
  name?: string;
  arn: string;
  releaseLabel: string;
  type: string;
  state: string;
  stateDetails?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  architecture?: string;
}
export type Architecture = string;

export type Arn = string;

export type AttemptNumber = number;

export interface AutoStartConfig {
  enabled?: boolean;
}
export interface AutoStopConfig {
  enabled?: boolean;
  idleTimeoutMinutes?: number;
}
export interface CancelJobRunRequest {
  applicationId: string;
  jobRunId: string;
  shutdownGracePeriodInSeconds?: number;
}
export interface CancelJobRunResponse {
  applicationId: string;
  jobRunId: string;
}
export type ClientToken = string;

export interface CloudWatchLoggingConfiguration {
  enabled: boolean;
  logGroupName?: string;
  logStreamNamePrefix?: string;
  encryptionKeyArn?: string;
  logTypes?: Record<string, Array<string>>;
}
export interface Configuration {
  classification: string;
  properties?: Record<string, string>;
  configurations?: Array<Configuration>;
}
export type ConfigurationList = Array<Configuration>;
export interface ConfigurationOverrides {
  applicationConfiguration?: Array<Configuration>;
  monitoringConfiguration?: MonitoringConfiguration;
}
export type ConfigurationPropertyKey = string;

export type ConfigurationPropertyValue = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type CpuSize = string;

export interface CreateApplicationRequest {
  name?: string;
  releaseLabel: string;
  type: string;
  clientToken: string;
  initialCapacity?: Record<string, InitialCapacityConfig>;
  maximumCapacity?: MaximumAllowedResources;
  tags?: Record<string, string>;
  autoStartConfiguration?: AutoStartConfig;
  autoStopConfiguration?: AutoStopConfig;
  networkConfiguration?: NetworkConfiguration;
  architecture?: string;
  imageConfiguration?: ImageConfigurationInput;
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput>;
  runtimeConfiguration?: Array<Configuration>;
  monitoringConfiguration?: MonitoringConfiguration;
  interactiveConfiguration?: InteractiveConfiguration;
  schedulerConfiguration?: SchedulerConfiguration;
  identityCenterConfiguration?: IdentityCenterConfigurationInput;
}
export interface CreateApplicationResponse {
  applicationId: string;
  name?: string;
  arn: string;
}
export interface DeleteApplicationRequest {
  applicationId: string;
}
export interface DeleteApplicationResponse {}
export type DiskSize = string;

export type DiskType = string;

export type Duration = number;

export type EncryptionKeyArn = string;

export type EngineType = string;

export type EntryPointArgument = string;

export type EntryPointArguments = Array<string>;
export type EntryPointPath = string;

export interface GetApplicationRequest {
  applicationId: string;
}
export interface GetApplicationResponse {
  application: Application;
}
export interface GetDashboardForJobRunRequest {
  applicationId: string;
  jobRunId: string;
  attempt?: number;
  accessSystemProfileLogs?: boolean;
}
export interface GetDashboardForJobRunResponse {
  url?: string;
}
export interface GetJobRunRequest {
  applicationId: string;
  jobRunId: string;
  attempt?: number;
}
export interface GetJobRunResponse {
  jobRun: JobRun;
}
export interface Hive {
  query: string;
  initQueryFile?: string;
  parameters?: string;
}
export type HiveCliParameters = string;

export type IAMRoleArn = string;

export type IdentityCenterApplicationArn = string;

export interface IdentityCenterConfiguration {
  identityCenterInstanceArn?: string;
  identityCenterApplicationArn?: string;
}
export interface IdentityCenterConfigurationInput {
  identityCenterInstanceArn?: string;
}
export type IdentityCenterInstanceArn = string;

export interface ImageConfiguration {
  imageUri: string;
  resolvedImageDigest?: string;
}
export interface ImageConfigurationInput {
  imageUri?: string;
}
export type ImageDigest = string;

export type ImageUri = string;

export interface InitialCapacityConfig {
  workerCount: number;
  workerConfiguration?: WorkerResourceConfig;
}
export type InitialCapacityConfigMap = Record<string, InitialCapacityConfig>;
export type InitScriptPath = string;

export interface InteractiveConfiguration {
  studioEnabled?: boolean;
  livyEndpointEnabled?: boolean;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type JobArn = string;

export type JobDriver = { sparkSubmit: SparkSubmit } | { hive: Hive };
export interface JobRun {
  applicationId: string;
  jobRunId: string;
  name?: string;
  arn: string;
  createdBy: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  executionRole: string;
  executionIamPolicy?: JobRunExecutionIamPolicy;
  state: string;
  stateDetails: string;
  releaseLabel: string;
  configurationOverrides?: ConfigurationOverrides;
  jobDriver: JobDriver;
  tags?: Record<string, string>;
  totalResourceUtilization?: TotalResourceUtilization;
  networkConfiguration?: NetworkConfiguration;
  totalExecutionDurationSeconds?: number;
  executionTimeoutMinutes?: number;
  billedResourceUtilization?: ResourceUtilization;
  mode?: string;
  retryPolicy?: RetryPolicy;
  attempt?: number;
  attemptCreatedAt?: Date | string;
  attemptUpdatedAt?: Date | string;
  startedAt?: Date | string;
  endedAt?: Date | string;
  queuedDurationMilliseconds?: number;
}
export type JobRunAttempts = Array<JobRunAttemptSummary>;
export interface JobRunAttemptSummary {
  applicationId: string;
  id: string;
  name?: string;
  mode?: string;
  arn: string;
  createdBy: string;
  jobCreatedAt: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  executionRole: string;
  state: string;
  stateDetails: string;
  releaseLabel: string;
  type?: string;
  attempt?: number;
}
export interface JobRunExecutionIamPolicy {
  policy?: string;
  policyArns?: Array<string>;
}
export type JobRunId = string;

export type JobRunMode = string;

export type JobRuns = Array<JobRunSummary>;
export type JobRunState = string;

export type JobRunStateSet = Array<string>;
export interface JobRunSummary {
  applicationId: string;
  id: string;
  name?: string;
  mode?: string;
  arn: string;
  createdBy: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  executionRole: string;
  state: string;
  stateDetails: string;
  releaseLabel: string;
  type?: string;
  attempt?: number;
  attemptCreatedAt?: Date | string;
  attemptUpdatedAt?: Date | string;
}
export type JobRunType = string;

export interface ListApplicationsRequest {
  nextToken?: string;
  maxResults?: number;
  states?: Array<string>;
}
export interface ListApplicationsResponse {
  applications: Array<ApplicationSummary>;
  nextToken?: string;
}
export interface ListJobRunAttemptsRequest {
  applicationId: string;
  jobRunId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListJobRunAttemptsResponse {
  jobRunAttempts: Array<JobRunAttemptSummary>;
  nextToken?: string;
}
export interface ListJobRunsRequest {
  applicationId: string;
  nextToken?: string;
  maxResults?: number;
  createdAtAfter?: Date | string;
  createdAtBefore?: Date | string;
  states?: Array<string>;
  mode?: string;
}
export interface ListJobRunsResponse {
  jobRuns: Array<JobRunSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type LogGroupName = string;

export type LogStreamNamePrefix = string;

export type LogTypeList = Array<string>;
export type LogTypeMap = Record<string, Array<string>>;
export type LogTypeString = string;

export interface ManagedPersistenceMonitoringConfiguration {
  enabled?: boolean;
  encryptionKeyArn?: string;
}
export interface MaximumAllowedResources {
  cpu: string;
  memory: string;
  disk?: string;
}
export type MemorySize = string;

export interface MonitoringConfiguration {
  s3MonitoringConfiguration?: S3MonitoringConfiguration;
  managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration;
  cloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration;
  prometheusMonitoringConfiguration?: PrometheusMonitoringConfiguration;
}
export interface NetworkConfiguration {
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
}
export type NextToken = string;

export type PolicyArnList = Array<string>;
export type PolicyDocument = string;

export interface PrometheusMonitoringConfiguration {
  remoteWriteUrl?: string;
}
export type PrometheusUrlString = string;

export type Query = string;

export type ReleaseLabel = string;

export type RequestIdentityUserArn = string;

export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ResourceUtilization {
  vCPUHour?: number;
  memoryGBHour?: number;
  storageGBHour?: number;
}
export interface RetryPolicy {
  maxAttempts?: number;
  maxFailedAttemptsPerHour?: number;
}
export interface S3MonitoringConfiguration {
  logUri?: string;
  encryptionKeyArn?: string;
}
export interface SchedulerConfiguration {
  queueTimeoutMinutes?: number;
  maxConcurrentRuns?: number;
}
export type SecurityGroupIds = Array<string>;
export type SecurityGroupString = string;

export type SensitivePropertiesMap = Record<string, string>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type ShutdownGracePeriodInSeconds = number;

export interface SparkSubmit {
  entryPoint: string;
  entryPointArguments?: Array<string>;
  sparkSubmitParameters?: string;
}
export type SparkSubmitParameters = string;

export interface StartApplicationRequest {
  applicationId: string;
}
export interface StartApplicationResponse {}
export interface StartJobRunRequest {
  applicationId: string;
  clientToken: string;
  executionRoleArn: string;
  executionIamPolicy?: JobRunExecutionIamPolicy;
  jobDriver?: JobDriver;
  configurationOverrides?: ConfigurationOverrides;
  tags?: Record<string, string>;
  executionTimeoutMinutes?: number;
  name?: string;
  mode?: string;
  retryPolicy?: RetryPolicy;
}
export interface StartJobRunResponse {
  applicationId: string;
  jobRunId: string;
  arn: string;
}
export interface StopApplicationRequest {
  applicationId: string;
}
export interface StopApplicationResponse {}
export type String1024 = string;

export type String256 = string;

export type SubnetIds = Array<string>;
export type SubnetString = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TotalResourceUtilization {
  vCPUHour?: number;
  memoryGBHour?: number;
  storageGBHour?: number;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  applicationId: string;
  clientToken: string;
  initialCapacity?: Record<string, InitialCapacityConfig>;
  maximumCapacity?: MaximumAllowedResources;
  autoStartConfiguration?: AutoStartConfig;
  autoStopConfiguration?: AutoStopConfig;
  networkConfiguration?: NetworkConfiguration;
  architecture?: string;
  imageConfiguration?: ImageConfigurationInput;
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput>;
  interactiveConfiguration?: InteractiveConfiguration;
  releaseLabel?: string;
  runtimeConfiguration?: Array<Configuration>;
  monitoringConfiguration?: MonitoringConfiguration;
  schedulerConfiguration?: SchedulerConfiguration;
  identityCenterConfiguration?: IdentityCenterConfigurationInput;
}
export interface UpdateApplicationResponse {
  application: Application;
}
export type UriString = string;

export type Url = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type WorkerCounts = number;

export interface WorkerResourceConfig {
  cpu: string;
  memory: string;
  disk?: string;
  diskType?: string;
}
export interface WorkerTypeSpecification {
  imageConfiguration?: ImageConfiguration;
}
export interface WorkerTypeSpecificationInput {
  imageConfiguration?: ImageConfigurationInput;
}
export type WorkerTypeSpecificationInputMap = Record<
  string,
  WorkerTypeSpecificationInput
>;
export type WorkerTypeSpecificationMap = Record<
  string,
  WorkerTypeSpecification
>;
export type WorkerTypeString = string;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
