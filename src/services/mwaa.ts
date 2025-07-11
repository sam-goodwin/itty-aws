import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonMWAA {
  createCliToken(
    input: CreateCliTokenRequest,
  ): Effect.Effect<
    CreateCliTokenResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  createEnvironment(
    input: CreateEnvironmentInput,
  ): Effect.Effect<
    CreateEnvironmentOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  createWebLoginToken(
    input: CreateWebLoginTokenRequest,
  ): Effect.Effect<
    CreateWebLoginTokenResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteEnvironment(
    input: DeleteEnvironmentInput,
  ): Effect.Effect<
    DeleteEnvironmentOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getEnvironment(
    input: GetEnvironmentInput,
  ): Effect.Effect<
    GetEnvironmentOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  invokeRestApi(
    input: InvokeRestApiRequest,
  ): Effect.Effect<
    InvokeRestApiResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | RestApiClientException | RestApiServerException | ValidationException | CommonAwsError
  >;
  listEnvironments(
    input: ListEnvironmentsInput,
  ): Effect.Effect<
    ListEnvironmentsOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  publishMetrics(
    input: PublishMetricsInput,
  ): Effect.Effect<
    PublishMetricsOutput,
    InternalServerException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateEnvironment(
    input: UpdateEnvironmentInput,
  ): Effect.Effect<
    UpdateEnvironmentOutput,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Mwaa = AmazonMWAA;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AirflowConfigurationOptions = Record<string, string>;
export type AirflowIdentity = string;

export type AirflowVersion = string;

export type CeleryExecutorQueue = string;

export type CloudWatchLogGroupArn = string;

export type ConfigKey = string;

export type ConfigValue = string;

export interface CreateCliTokenRequest {
  Name: string;
}
export interface CreateCliTokenResponse {
  CliToken?: string;
  WebServerHostname?: string;
}
export type CreatedAt = Date | string;

export interface CreateEnvironmentInput {
  Name: string;
  ExecutionRoleArn: string;
  SourceBucketArn: string;
  DagS3Path: string;
  NetworkConfiguration: NetworkConfiguration;
  PluginsS3Path?: string;
  PluginsS3ObjectVersion?: string;
  RequirementsS3Path?: string;
  RequirementsS3ObjectVersion?: string;
  StartupScriptS3Path?: string;
  StartupScriptS3ObjectVersion?: string;
  AirflowConfigurationOptions?: Record<string, string>;
  EnvironmentClass?: string;
  MaxWorkers?: number;
  KmsKey?: string;
  AirflowVersion?: string;
  LoggingConfiguration?: LoggingConfigurationInput;
  WeeklyMaintenanceWindowStart?: string;
  Tags?: Record<string, string>;
  WebserverAccessMode?: string;
  MinWorkers?: number;
  Schedulers?: number;
  EndpointManagement?: string;
  MinWebservers?: number;
  MaxWebservers?: number;
}
export interface CreateEnvironmentOutput {
  Arn?: string;
}
export interface CreateWebLoginTokenRequest {
  Name: string;
}
export interface CreateWebLoginTokenResponse {
  WebToken?: string;
  WebServerHostname?: string;
  IamIdentity?: string;
  AirflowIdentity?: string;
}
export interface DeleteEnvironmentInput {
  Name: string;
}
export interface DeleteEnvironmentOutput {
}
export interface Dimension {
  Name: string;
  Value: string;
}
export type Dimensions = Array<Dimension>;
export type EndpointManagement = string;

export interface Environment {
  Name?: string;
  Status?: string;
  Arn?: string;
  CreatedAt?: Date | string;
  WebserverUrl?: string;
  ExecutionRoleArn?: string;
  ServiceRoleArn?: string;
  KmsKey?: string;
  AirflowVersion?: string;
  SourceBucketArn?: string;
  DagS3Path?: string;
  PluginsS3Path?: string;
  PluginsS3ObjectVersion?: string;
  RequirementsS3Path?: string;
  RequirementsS3ObjectVersion?: string;
  StartupScriptS3Path?: string;
  StartupScriptS3ObjectVersion?: string;
  AirflowConfigurationOptions?: Record<string, string>;
  EnvironmentClass?: string;
  MaxWorkers?: number;
  NetworkConfiguration?: NetworkConfiguration;
  LoggingConfiguration?: LoggingConfiguration;
  LastUpdate?: LastUpdate;
  WeeklyMaintenanceWindowStart?: string;
  Tags?: Record<string, string>;
  WebserverAccessMode?: string;
  MinWorkers?: number;
  Schedulers?: number;
  WebserverVpcEndpointService?: string;
  DatabaseVpcEndpointService?: string;
  CeleryExecutorQueue?: string;
  EndpointManagement?: string;
  MinWebservers?: number;
  MaxWebservers?: number;
}
export type EnvironmentArn = string;

export type EnvironmentClass = string;

export type EnvironmentList = Array<string>;
export type EnvironmentName = string;

export type EnvironmentStatus = string;

export type ErrorCode = string;

export type ErrorMessage = string;

export interface GetEnvironmentInput {
  Name: string;
}
export interface GetEnvironmentOutput {
  Environment?: Environment;
}
export type Hostname = string;

export type IamIdentity = string;

export type IamRoleArn = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface InvokeRestApiRequest {
  Name: string;
  Path: string;
  Method: string;
  QueryParameters?: _opaque_Document;
  Body?: RestApiRequestBody;
}
export interface InvokeRestApiResponse {
  RestApiStatusCode?: number;
  RestApiResponse?: RestApiResponse;
}
export type KmsKey = string;

export interface LastUpdate {
  Status?: string;
  CreatedAt?: Date | string;
  Error?: UpdateError;
  Source?: string;
  WorkerReplacementStrategy?: string;
}
export interface ListEnvironmentsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEnvironmentsOutput {
  Environments: Array<string>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Record<string, string>;
}
export interface LoggingConfiguration {
  DagProcessingLogs?: ModuleLoggingConfiguration;
  SchedulerLogs?: ModuleLoggingConfiguration;
  WebserverLogs?: ModuleLoggingConfiguration;
  WorkerLogs?: ModuleLoggingConfiguration;
  TaskLogs?: ModuleLoggingConfiguration;
}
export interface LoggingConfigurationInput {
  DagProcessingLogs?: ModuleLoggingConfigurationInput;
  SchedulerLogs?: ModuleLoggingConfigurationInput;
  WebserverLogs?: ModuleLoggingConfigurationInput;
  WorkerLogs?: ModuleLoggingConfigurationInput;
  TaskLogs?: ModuleLoggingConfigurationInput;
}
export type LoggingEnabled = boolean;

export type LoggingLevel = string;

export type MaxWebservers = number;

export type MaxWorkers = number;

export type MetricData = Array<MetricDatum>;
export interface MetricDatum {
  MetricName: string;
  Timestamp: Date | string;
  Dimensions?: Array<Dimension>;
  Value?: number;
  Unit?: string;
  StatisticValues?: StatisticSet;
}
export type MinWebservers = number;

export type MinWorkers = number;

export interface ModuleLoggingConfiguration {
  Enabled?: boolean;
  LogLevel?: string;
  CloudWatchLogGroupArn?: string;
}
export interface ModuleLoggingConfigurationInput {
  Enabled: boolean;
  LogLevel: string;
}
export interface NetworkConfiguration {
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export type NextToken = string;

export interface PublishMetricsInput {
  EnvironmentName: string;
  MetricData: Array<MetricDatum>;
}
export interface PublishMetricsOutput {
}
export type RelativePath = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class RestApiClientException extends Data.TaggedError(
  "RestApiClientException",
)<{
  readonly RestApiStatusCode?: number;
  readonly RestApiResponse?: RestApiResponse;
}> {}
export type RestApiMethod = string;

export type RestApiPath = string;

export declare class RestApiServerException extends Data.TaggedError(
  "RestApiServerException",
)<{
  readonly RestApiStatusCode?: number;
  readonly RestApiResponse?: RestApiResponse;
}> {}
export type S3BucketArn = string;

export type S3ObjectVersion = string;

export type Schedulers = number;

export type SecurityGroupId = string;

export type SecurityGroupList = Array<string>;
export interface StatisticSet {
  SampleCount?: number;
  Sum?: number;
  Minimum?: number;
  Maximum?: number;
}
export type SubnetId = string;

export type SubnetList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceOutput {
}
export type TagValue = string;

export type Token = string;

export interface UntagResourceInput {
  ResourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {
}
export type UpdateCreatedAt = Date | string;

export interface UpdateEnvironmentInput {
  Name: string;
  ExecutionRoleArn?: string;
  AirflowConfigurationOptions?: Record<string, string>;
  AirflowVersion?: string;
  DagS3Path?: string;
  EnvironmentClass?: string;
  LoggingConfiguration?: LoggingConfigurationInput;
  MaxWorkers?: number;
  MinWorkers?: number;
  MaxWebservers?: number;
  MinWebservers?: number;
  WorkerReplacementStrategy?: string;
  NetworkConfiguration?: UpdateNetworkConfigurationInput;
  PluginsS3Path?: string;
  PluginsS3ObjectVersion?: string;
  RequirementsS3Path?: string;
  RequirementsS3ObjectVersion?: string;
  Schedulers?: number;
  SourceBucketArn?: string;
  StartupScriptS3Path?: string;
  StartupScriptS3ObjectVersion?: string;
  WebserverAccessMode?: string;
  WeeklyMaintenanceWindowStart?: string;
}
export interface UpdateEnvironmentOutput {
  Arn?: string;
}
export interface UpdateError {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface UpdateNetworkConfigurationInput {
  SecurityGroupIds: Array<string>;
}
export type UpdateSource = string;

export type UpdateStatus = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type VpcEndpointServiceName = string;

export type WebserverAccessMode = string;

export type WebserverUrl = string;

export type WeeklyMaintenanceWindowStart = string;

export type WorkerReplacementStrategy = string;

export declare namespace CreateCliToken {
  export type Input = CreateCliTokenRequest;
  export type Output = CreateCliTokenResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateEnvironment {
  export type Input = CreateEnvironmentInput;
  export type Output = CreateEnvironmentOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWebLoginToken {
  export type Input = CreateWebLoginTokenRequest;
  export type Output = CreateWebLoginTokenResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEnvironment {
  export type Input = DeleteEnvironmentInput;
  export type Output = DeleteEnvironmentOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEnvironment {
  export type Input = GetEnvironmentInput;
  export type Output = GetEnvironmentOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InvokeRestApi {
  export type Input = InvokeRestApiRequest;
  export type Output = InvokeRestApiResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | RestApiClientException
    | RestApiServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEnvironments {
  export type Input = ListEnvironmentsInput;
  export type Output = ListEnvironmentsOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PublishMetrics {
  export type Input = PublishMetricsInput;
  export type Output = PublishMetricsOutput;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEnvironment {
  export type Input = UpdateEnvironmentInput;
  export type Output = UpdateEnvironmentOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

