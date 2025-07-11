import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AwsToledoWebService {
  cancelJobRun(
    input: CancelJobRunRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getDashboardForJobRun(
    input: GetDashboardForJobRunRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getJobRun(
    input: GetJobRunRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  listJobRunAttempts(
    input: ListJobRunAttemptsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listJobRuns(
    input: ListJobRunsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startApplication(
    input: StartApplicationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ValidationException | CommonAwsError
  >;
  startJobRun(
    input: StartJobRunRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  stopApplication(
    input: StopApplicationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type EmrServerless = AwsToledoWebService;

export interface Application {
}
export type ApplicationArn = string;

export type ApplicationId = string;

export type ApplicationList = Array<unknown>;
export type ApplicationName = string;

export type ApplicationState = string;

export type ApplicationStateSet = Array<unknown>;
export interface ApplicationSummary {
}
export type Architecture = string;

export type Arn = string;

export type AttemptNumber = number;

export interface AutoStartConfig {
}
export interface AutoStopConfig {
}
export interface CancelJobRunRequest {
}
export interface CancelJobRunResponse {
}
export type ClientToken = string;

export interface CloudWatchLoggingConfiguration {
}
export interface Configuration {
}
export type ConfigurationList = Array<unknown>;
export interface ConfigurationOverrides {
}
export type ConfigurationPropertyKey = string;

export type ConfigurationPropertyValue = string;

export interface ConflictException {
}
export type CpuSize = string;

export interface CreateApplicationRequest {
}
export interface CreateApplicationResponse {
}
export interface DeleteApplicationRequest {
}
export interface DeleteApplicationResponse {
}
export type DiskSize = string;

export type DiskType = string;

export type Duration = number;

export type EncryptionKeyArn = string;

export type EngineType = string;

export type EntryPointArgument = string;

export type EntryPointArguments = Array<unknown>;
export type EntryPointPath = string;

export interface GetApplicationRequest {
}
export interface GetApplicationResponse {
}
export interface GetDashboardForJobRunRequest {
}
export interface GetDashboardForJobRunResponse {
}
export interface GetJobRunRequest {
}
export interface GetJobRunResponse {
}
export interface Hive {
}
export type HiveCliParameters = string;

export type IAMRoleArn = string;

export type IdentityCenterApplicationArn = string;

export interface IdentityCenterConfiguration {
}
export interface IdentityCenterConfigurationInput {
}
export type IdentityCenterInstanceArn = string;

export interface ImageConfiguration {
}
export interface ImageConfigurationInput {
}
export type ImageDigest = string;

export type ImageUri = string;

export interface InitialCapacityConfig {
}
export type InitialCapacityConfigMap = Record<string, unknown>;
export type InitScriptPath = string;

export interface InteractiveConfiguration {
}
export interface InternalServerException {
}
export type JobArn = string;

export type JobDriver = never;
export interface JobRun {
}
export type JobRunAttempts = Array<unknown>;
export interface JobRunAttemptSummary {
}
export interface JobRunExecutionIamPolicy {
}
export type JobRunId = string;

export type JobRunMode = string;

export type JobRuns = Array<unknown>;
export type JobRunState = string;

export type JobRunStateSet = Array<unknown>;
export interface JobRunSummary {
}
export type JobRunType = string;

export interface ListApplicationsRequest {
}
export interface ListApplicationsResponse {
}
export interface ListJobRunAttemptsRequest {
}
export interface ListJobRunAttemptsResponse {
}
export interface ListJobRunsRequest {
}
export interface ListJobRunsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type LogGroupName = string;

export type LogStreamNamePrefix = string;

export type LogTypeList = Array<unknown>;
export type LogTypeMap = Record<string, unknown>;
export type LogTypeString = string;

export interface ManagedPersistenceMonitoringConfiguration {
}
export interface MaximumAllowedResources {
}
export type MemorySize = string;

export interface MonitoringConfiguration {
}
export interface NetworkConfiguration {
}
export type NextToken = string;

export type PolicyArnList = Array<unknown>;
export type PolicyDocument = string;

export interface PrometheusMonitoringConfiguration {
}
export type PrometheusUrlString = string;

export type Query = string;

export type ReleaseLabel = string;

export type RequestIdentityUserArn = string;

export type ResourceArn = string;

export interface ResourceNotFoundException {
}
export interface ResourceUtilization {
}
export interface RetryPolicy {
}
export interface S3MonitoringConfiguration {
}
export interface SchedulerConfiguration {
}
export type SecurityGroupIds = Array<unknown>;
export type SecurityGroupString = string;

export type SensitivePropertiesMap = Record<string, unknown>;
export interface ServiceQuotaExceededException {
}
export type ShutdownGracePeriodInSeconds = number;

export interface SparkSubmit {
}
export type SparkSubmitParameters = string;

export interface StartApplicationRequest {
}
export interface StartApplicationResponse {
}
export interface StartJobRunRequest {
}
export interface StartJobRunResponse {
}
export interface StopApplicationRequest {
}
export interface StopApplicationResponse {
}
export type String1024 = string;

export type String256 = string;

export type SubnetIds = Array<unknown>;
export type SubnetString = string;

export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface TotalResourceUtilization {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateApplicationRequest {
}
export interface UpdateApplicationResponse {
}
export type UriString = string;

export type Url = string;

export interface ValidationException {
}
export type WorkerCounts = number;

export interface WorkerResourceConfig {
}
export interface WorkerTypeSpecification {
}
export interface WorkerTypeSpecificationInput {
}
export type WorkerTypeSpecificationInputMap = Record<string, unknown>;
export type WorkerTypeSpecificationMap = Record<string, unknown>;
export type WorkerTypeString = string;

export declare namespace CancelJobRun {
  export type Input = CancelJobRunRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDashboardForJobRun {
  export type Input = GetDashboardForJobRunRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetJobRun {
  export type Input = GetJobRunRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobRunAttempts {
  export type Input = ListJobRunAttemptsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobRuns {
  export type Input = ListJobRunsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartApplication {
  export type Input = StartApplicationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartJobRun {
  export type Input = StartJobRunRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopApplication {
  export type Input = StopApplicationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

