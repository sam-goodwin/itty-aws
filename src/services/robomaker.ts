import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class RoboMaker extends AWSServiceClient {
  batchDeleteWorlds(
    input: BatchDeleteWorldsRequest,
  ): Effect.Effect<
    BatchDeleteWorldsResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  batchDescribeSimulationJob(
    input: BatchDescribeSimulationJobRequest,
  ): Effect.Effect<
    BatchDescribeSimulationJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelDeploymentJob(
    input: CancelDeploymentJobRequest,
  ): Effect.Effect<
    CancelDeploymentJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelSimulationJob(
    input: CancelSimulationJobRequest,
  ): Effect.Effect<
    CancelSimulationJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelSimulationJobBatch(
    input: CancelSimulationJobBatchRequest,
  ): Effect.Effect<
    CancelSimulationJobBatchResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelWorldExportJob(
    input: CancelWorldExportJobRequest,
  ): Effect.Effect<
    CancelWorldExportJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelWorldGenerationJob(
    input: CancelWorldGenerationJobRequest,
  ): Effect.Effect<
    CancelWorldGenerationJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createDeploymentJob(
    input: CreateDeploymentJobRequest,
  ): Effect.Effect<
    CreateDeploymentJobResponse,
    | ConcurrentDeploymentException
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createFleet(
    input: CreateFleetRequest,
  ): Effect.Effect<
    CreateFleetResponse,
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createRobot(
    input: CreateRobotRequest,
  ): Effect.Effect<
    CreateRobotResponse,
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createRobotApplication(
    input: CreateRobotApplicationRequest,
  ): Effect.Effect<
    CreateRobotApplicationResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createRobotApplicationVersion(
    input: CreateRobotApplicationVersionRequest,
  ): Effect.Effect<
    CreateRobotApplicationVersionResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createSimulationApplication(
    input: CreateSimulationApplicationRequest,
  ): Effect.Effect<
    CreateSimulationApplicationResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createSimulationApplicationVersion(
    input: CreateSimulationApplicationVersionRequest,
  ): Effect.Effect<
    CreateSimulationApplicationVersionResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createSimulationJob(
    input: CreateSimulationJobRequest,
  ): Effect.Effect<
    CreateSimulationJobResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createWorldExportJob(
    input: CreateWorldExportJobRequest,
  ): Effect.Effect<
    CreateWorldExportJobResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createWorldGenerationJob(
    input: CreateWorldGenerationJobRequest,
  ): Effect.Effect<
    CreateWorldGenerationJobResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createWorldTemplate(
    input: CreateWorldTemplateRequest,
  ): Effect.Effect<
    CreateWorldTemplateResponse,
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteFleet(
    input: DeleteFleetRequest,
  ): Effect.Effect<
    DeleteFleetResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRobot(
    input: DeleteRobotRequest,
  ): Effect.Effect<
    DeleteRobotResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRobotApplication(
    input: DeleteRobotApplicationRequest,
  ): Effect.Effect<
    DeleteRobotApplicationResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteSimulationApplication(
    input: DeleteSimulationApplicationRequest,
  ): Effect.Effect<
    DeleteSimulationApplicationResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteWorldTemplate(
    input: DeleteWorldTemplateRequest,
  ): Effect.Effect<
    DeleteWorldTemplateResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deregisterRobot(
    input: DeregisterRobotRequest,
  ): Effect.Effect<
    DeregisterRobotResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDeploymentJob(
    input: DescribeDeploymentJobRequest,
  ): Effect.Effect<
    DescribeDeploymentJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeFleet(
    input: DescribeFleetRequest,
  ): Effect.Effect<
    DescribeFleetResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRobot(
    input: DescribeRobotRequest,
  ): Effect.Effect<
    DescribeRobotResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRobotApplication(
    input: DescribeRobotApplicationRequest,
  ): Effect.Effect<
    DescribeRobotApplicationResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeSimulationApplication(
    input: DescribeSimulationApplicationRequest,
  ): Effect.Effect<
    DescribeSimulationApplicationResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeSimulationJob(
    input: DescribeSimulationJobRequest,
  ): Effect.Effect<
    DescribeSimulationJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeSimulationJobBatch(
    input: DescribeSimulationJobBatchRequest,
  ): Effect.Effect<
    DescribeSimulationJobBatchResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeWorld(
    input: DescribeWorldRequest,
  ): Effect.Effect<
    DescribeWorldResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeWorldExportJob(
    input: DescribeWorldExportJobRequest,
  ): Effect.Effect<
    DescribeWorldExportJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeWorldGenerationJob(
    input: DescribeWorldGenerationJobRequest,
  ): Effect.Effect<
    DescribeWorldGenerationJobResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeWorldTemplate(
    input: DescribeWorldTemplateRequest,
  ): Effect.Effect<
    DescribeWorldTemplateResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getWorldTemplateBody(
    input: GetWorldTemplateBodyRequest,
  ): Effect.Effect<
    GetWorldTemplateBodyResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listDeploymentJobs(
    input: ListDeploymentJobsRequest,
  ): Effect.Effect<
    ListDeploymentJobsResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listFleets(
    input: ListFleetsRequest,
  ): Effect.Effect<
    ListFleetsResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRobotApplications(
    input: ListRobotApplicationsRequest,
  ): Effect.Effect<
    ListRobotApplicationsResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  listRobots(
    input: ListRobotsRequest,
  ): Effect.Effect<
    ListRobotsResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listSimulationApplications(
    input: ListSimulationApplicationsRequest,
  ): Effect.Effect<
    ListSimulationApplicationsResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  listSimulationJobBatches(
    input: ListSimulationJobBatchesRequest,
  ): Effect.Effect<
    ListSimulationJobBatchesResponse,
    InternalServerException | InvalidParameterException | CommonAwsError
  >;
  listSimulationJobs(
    input: ListSimulationJobsRequest,
  ): Effect.Effect<
    ListSimulationJobsResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listWorldExportJobs(
    input: ListWorldExportJobsRequest,
  ): Effect.Effect<
    ListWorldExportJobsResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  listWorldGenerationJobs(
    input: ListWorldGenerationJobsRequest,
  ): Effect.Effect<
    ListWorldGenerationJobsResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  listWorlds(
    input: ListWorldsRequest,
  ): Effect.Effect<
    ListWorldsResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  listWorldTemplates(
    input: ListWorldTemplatesRequest,
  ): Effect.Effect<
    ListWorldTemplatesResponse,
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  registerRobot(
    input: RegisterRobotRequest,
  ): Effect.Effect<
    RegisterRobotResponse,
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  restartSimulationJob(
    input: RestartSimulationJobRequest,
  ): Effect.Effect<
    RestartSimulationJobResponse,
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startSimulationJobBatch(
    input: StartSimulationJobBatchRequest,
  ): Effect.Effect<
    StartSimulationJobBatchResponse,
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  syncDeploymentJob(
    input: SyncDeploymentJobRequest,
  ): Effect.Effect<
    SyncDeploymentJobResponse,
    | ConcurrentDeploymentException
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRobotApplication(
    input: UpdateRobotApplicationRequest,
  ): Effect.Effect<
    UpdateRobotApplicationResponse,
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateSimulationApplication(
    input: UpdateSimulationApplicationRequest,
  ): Effect.Effect<
    UpdateSimulationApplicationResponse,
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateWorldTemplate(
    input: UpdateWorldTemplateRequest,
  ): Effect.Effect<
    UpdateWorldTemplateResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export declare class Robomaker extends RoboMaker {}

export type Architecture = "X86_64" | "ARM64" | "ARMHF";
export type Arn = string;

export type Arns = Array<string>;
export interface BatchDeleteWorldsRequest {
  worlds: Array<string>;
}
export interface BatchDeleteWorldsResponse {
  unprocessedWorlds?: Array<string>;
}
export interface BatchDescribeSimulationJobRequest {
  jobs: Array<string>;
}
export interface BatchDescribeSimulationJobResponse {
  jobs?: Array<SimulationJob>;
  unprocessedJobs?: Array<string>;
}
export interface BatchPolicy {
  timeoutInSeconds?: number;
  maxConcurrency?: number;
}
export type BatchTimeoutInSeconds = number;

export type RobomakerBoolean = boolean;

export type BoxedBoolean = boolean;

export interface CancelDeploymentJobRequest {
  job: string;
}
export interface CancelDeploymentJobResponse {}
export interface CancelSimulationJobBatchRequest {
  batch: string;
}
export interface CancelSimulationJobBatchResponse {}
export interface CancelSimulationJobRequest {
  job: string;
}
export interface CancelSimulationJobResponse {}
export interface CancelWorldExportJobRequest {
  job: string;
}
export interface CancelWorldExportJobResponse {}
export interface CancelWorldGenerationJobRequest {
  job: string;
}
export interface CancelWorldGenerationJobResponse {}
export type ClientRequestToken = string;

export type Command = string;

export type CommandList = Array<string>;
export interface Compute {
  simulationUnitLimit?: number;
  computeType?: ComputeType;
  gpuUnitLimit?: number;
}
export interface ComputeResponse {
  simulationUnitLimit?: number;
  computeType?: ComputeType;
  gpuUnitLimit?: number;
}
export type ComputeType = "CPU" | "GPU_AND_CPU";
export declare class ConcurrentDeploymentException extends EffectData.TaggedError(
  "ConcurrentDeploymentException",
)<{
  readonly message?: string;
}> {}
export type CreatedAt = Date | string;

export interface CreateDeploymentJobRequest {
  deploymentConfig?: DeploymentConfig;
  clientRequestToken: string;
  fleet: string;
  deploymentApplicationConfigs: Array<DeploymentApplicationConfig>;
  tags?: Record<string, string>;
}
export interface CreateDeploymentJobResponse {
  arn?: string;
  fleet?: string;
  status?: DeploymentStatus;
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
  failureReason?: string;
  failureCode?: DeploymentJobErrorCode;
  createdAt?: Date | string;
  deploymentConfig?: DeploymentConfig;
  tags?: Record<string, string>;
}
export interface CreateFleetRequest {
  name: string;
  tags?: Record<string, string>;
}
export interface CreateFleetResponse {
  arn?: string;
  name?: string;
  createdAt?: Date | string;
  tags?: Record<string, string>;
}
export interface CreateRobotApplicationRequest {
  name: string;
  sources?: Array<SourceConfig>;
  robotSoftwareSuite: RobotSoftwareSuite;
  tags?: Record<string, string>;
  environment?: Environment;
}
export interface CreateRobotApplicationResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  robotSoftwareSuite?: RobotSoftwareSuite;
  lastUpdatedAt?: Date | string;
  revisionId?: string;
  tags?: Record<string, string>;
  environment?: Environment;
}
export interface CreateRobotApplicationVersionRequest {
  application: string;
  currentRevisionId?: string;
  s3Etags?: Array<string>;
  imageDigest?: string;
}
export interface CreateRobotApplicationVersionResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  robotSoftwareSuite?: RobotSoftwareSuite;
  lastUpdatedAt?: Date | string;
  revisionId?: string;
  environment?: Environment;
}
export interface CreateRobotRequest {
  name: string;
  architecture: Architecture;
  greengrassGroupId: string;
  tags?: Record<string, string>;
}
export interface CreateRobotResponse {
  arn?: string;
  name?: string;
  createdAt?: Date | string;
  greengrassGroupId?: string;
  architecture?: Architecture;
  tags?: Record<string, string>;
}
export interface CreateSimulationApplicationRequest {
  name: string;
  sources?: Array<SourceConfig>;
  simulationSoftwareSuite: SimulationSoftwareSuite;
  robotSoftwareSuite: RobotSoftwareSuite;
  renderingEngine?: RenderingEngine;
  tags?: Record<string, string>;
  environment?: Environment;
}
export interface CreateSimulationApplicationResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  simulationSoftwareSuite?: SimulationSoftwareSuite;
  robotSoftwareSuite?: RobotSoftwareSuite;
  renderingEngine?: RenderingEngine;
  lastUpdatedAt?: Date | string;
  revisionId?: string;
  tags?: Record<string, string>;
  environment?: Environment;
}
export interface CreateSimulationApplicationVersionRequest {
  application: string;
  currentRevisionId?: string;
  s3Etags?: Array<string>;
  imageDigest?: string;
}
export interface CreateSimulationApplicationVersionResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  simulationSoftwareSuite?: SimulationSoftwareSuite;
  robotSoftwareSuite?: RobotSoftwareSuite;
  renderingEngine?: RenderingEngine;
  lastUpdatedAt?: Date | string;
  revisionId?: string;
  environment?: Environment;
}
export interface CreateSimulationJobRequest {
  clientRequestToken?: string;
  outputLocation?: OutputLocation;
  loggingConfig?: LoggingConfig;
  maxJobDurationInSeconds: number;
  iamRole: string;
  failureBehavior?: FailureBehavior;
  robotApplications?: Array<RobotApplicationConfig>;
  simulationApplications?: Array<SimulationApplicationConfig>;
  dataSources?: Array<DataSourceConfig>;
  tags?: Record<string, string>;
  vpcConfig?: VPCConfig;
  compute?: Compute;
}
export type CreateSimulationJobRequests = Array<SimulationJobRequest>;
export interface CreateSimulationJobResponse {
  arn?: string;
  status?: SimulationJobStatus;
  lastStartedAt?: Date | string;
  lastUpdatedAt?: Date | string;
  failureBehavior?: FailureBehavior;
  failureCode?: SimulationJobErrorCode;
  clientRequestToken?: string;
  outputLocation?: OutputLocation;
  loggingConfig?: LoggingConfig;
  maxJobDurationInSeconds?: number;
  simulationTimeMillis?: number;
  iamRole?: string;
  robotApplications?: Array<RobotApplicationConfig>;
  simulationApplications?: Array<SimulationApplicationConfig>;
  dataSources?: Array<DataSource>;
  tags?: Record<string, string>;
  vpcConfig?: VPCConfigResponse;
  compute?: ComputeResponse;
}
export interface CreateWorldExportJobRequest {
  clientRequestToken?: string;
  worlds: Array<string>;
  outputLocation: OutputLocation;
  iamRole: string;
  tags?: Record<string, string>;
}
export interface CreateWorldExportJobResponse {
  arn?: string;
  status?: WorldExportJobStatus;
  createdAt?: Date | string;
  failureCode?: WorldExportJobErrorCode;
  clientRequestToken?: string;
  outputLocation?: OutputLocation;
  iamRole?: string;
  tags?: Record<string, string>;
}
export interface CreateWorldGenerationJobRequest {
  clientRequestToken?: string;
  template: string;
  worldCount: WorldCount;
  tags?: Record<string, string>;
  worldTags?: Record<string, string>;
}
export interface CreateWorldGenerationJobResponse {
  arn?: string;
  status?: WorldGenerationJobStatus;
  createdAt?: Date | string;
  failureCode?: WorldGenerationJobErrorCode;
  clientRequestToken?: string;
  template?: string;
  worldCount?: WorldCount;
  tags?: Record<string, string>;
  worldTags?: Record<string, string>;
}
export interface CreateWorldTemplateRequest {
  clientRequestToken?: string;
  name?: string;
  templateBody?: string;
  templateLocation?: TemplateLocation;
  tags?: Record<string, string>;
}
export interface CreateWorldTemplateResponse {
  arn?: string;
  clientRequestToken?: string;
  createdAt?: Date | string;
  name?: string;
  tags?: Record<string, string>;
}
export interface DataSource {
  name?: string;
  s3Bucket?: string;
  s3Keys?: Array<S3KeyOutput>;
  type?: DataSourceType;
  destination?: string;
}
export interface DataSourceConfig {
  name: string;
  s3Bucket: string;
  s3Keys: Array<string>;
  type?: DataSourceType;
  destination?: string;
}
export type DataSourceConfigs = Array<DataSourceConfig>;
export type DataSourceNames = Array<string>;
export type DataSources = Array<DataSource>;
export type DataSourceType = "Prefix" | "Archive" | "File";
export interface DeleteFleetRequest {
  fleet: string;
}
export interface DeleteFleetResponse {}
export interface DeleteRobotApplicationRequest {
  application: string;
  applicationVersion?: string;
}
export interface DeleteRobotApplicationResponse {}
export interface DeleteRobotRequest {
  robot: string;
}
export interface DeleteRobotResponse {}
export interface DeleteSimulationApplicationRequest {
  application: string;
  applicationVersion?: string;
}
export interface DeleteSimulationApplicationResponse {}
export interface DeleteWorldTemplateRequest {
  template: string;
}
export interface DeleteWorldTemplateResponse {}
export interface DeploymentApplicationConfig {
  application: string;
  applicationVersion: string;
  launchConfig: DeploymentLaunchConfig;
}
export type DeploymentApplicationConfigs = Array<DeploymentApplicationConfig>;
export interface DeploymentConfig {
  concurrentDeploymentPercentage?: number;
  failureThresholdPercentage?: number;
  robotDeploymentTimeoutInSeconds?: number;
  downloadConditionFile?: S3Object;
}
export interface DeploymentJob {
  arn?: string;
  fleet?: string;
  status?: DeploymentStatus;
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
  deploymentConfig?: DeploymentConfig;
  failureReason?: string;
  failureCode?: DeploymentJobErrorCode;
  createdAt?: Date | string;
}
export type DeploymentJobErrorCode =
  | "ResourceNotFound"
  | "EnvironmentSetupError"
  | "EtagMismatch"
  | "FailureThresholdBreached"
  | "RobotDeploymentAborted"
  | "RobotDeploymentNoResponse"
  | "RobotAgentConnectionTimeout"
  | "GreengrassDeploymentFailed"
  | "InvalidGreengrassGroup"
  | "MissingRobotArchitecture"
  | "MissingRobotApplicationArchitecture"
  | "MissingRobotDeploymentResource"
  | "GreengrassGroupVersionDoesNotExist"
  | "LambdaDeleted"
  | "ExtractingBundleFailure"
  | "PreLaunchFileFailure"
  | "PostLaunchFileFailure"
  | "BadPermissionError"
  | "DownloadConditionFailed"
  | "BadLambdaAssociated"
  | "InternalServerError"
  | "RobotApplicationDoesNotExist"
  | "DeploymentFleetDoesNotExist"
  | "FleetDeploymentTimeout";
export type DeploymentJobs = Array<DeploymentJob>;
export interface DeploymentLaunchConfig {
  packageName: string;
  preLaunchFile?: string;
  launchFile: string;
  postLaunchFile?: string;
  environmentVariables?: Record<string, string>;
}
export type DeploymentStatus =
  | "Pending"
  | "Preparing"
  | "InProgress"
  | "Failed"
  | "Succeeded"
  | "Canceled";
export type DeploymentTimeout = number;

export type DeploymentVersion = string;

export interface DeregisterRobotRequest {
  fleet: string;
  robot: string;
}
export interface DeregisterRobotResponse {
  fleet?: string;
  robot?: string;
}
export interface DescribeDeploymentJobRequest {
  job: string;
}
export interface DescribeDeploymentJobResponse {
  arn?: string;
  fleet?: string;
  status?: DeploymentStatus;
  deploymentConfig?: DeploymentConfig;
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
  failureReason?: string;
  failureCode?: DeploymentJobErrorCode;
  createdAt?: Date | string;
  robotDeploymentSummary?: Array<RobotDeployment>;
  tags?: Record<string, string>;
}
export interface DescribeFleetRequest {
  fleet: string;
}
export interface DescribeFleetResponse {
  name?: string;
  arn?: string;
  robots?: Array<Robot>;
  createdAt?: Date | string;
  lastDeploymentStatus?: DeploymentStatus;
  lastDeploymentJob?: string;
  lastDeploymentTime?: Date | string;
  tags?: Record<string, string>;
}
export interface DescribeRobotApplicationRequest {
  application: string;
  applicationVersion?: string;
}
export interface DescribeRobotApplicationResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  robotSoftwareSuite?: RobotSoftwareSuite;
  revisionId?: string;
  lastUpdatedAt?: Date | string;
  tags?: Record<string, string>;
  environment?: Environment;
  imageDigest?: string;
}
export interface DescribeRobotRequest {
  robot: string;
}
export interface DescribeRobotResponse {
  arn?: string;
  name?: string;
  fleetArn?: string;
  status?: RobotStatus;
  greengrassGroupId?: string;
  createdAt?: Date | string;
  architecture?: Architecture;
  lastDeploymentJob?: string;
  lastDeploymentTime?: Date | string;
  tags?: Record<string, string>;
}
export interface DescribeSimulationApplicationRequest {
  application: string;
  applicationVersion?: string;
}
export interface DescribeSimulationApplicationResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  simulationSoftwareSuite?: SimulationSoftwareSuite;
  robotSoftwareSuite?: RobotSoftwareSuite;
  renderingEngine?: RenderingEngine;
  revisionId?: string;
  lastUpdatedAt?: Date | string;
  tags?: Record<string, string>;
  environment?: Environment;
  imageDigest?: string;
}
export interface DescribeSimulationJobBatchRequest {
  batch: string;
}
export interface DescribeSimulationJobBatchResponse {
  arn?: string;
  status?: SimulationJobBatchStatus;
  lastUpdatedAt?: Date | string;
  createdAt?: Date | string;
  clientRequestToken?: string;
  batchPolicy?: BatchPolicy;
  failureCode?: SimulationJobBatchErrorCode;
  failureReason?: string;
  failedRequests?: Array<FailedCreateSimulationJobRequest>;
  pendingRequests?: Array<SimulationJobRequest>;
  createdRequests?: Array<SimulationJobSummary>;
  tags?: Record<string, string>;
}
export interface DescribeSimulationJobRequest {
  job: string;
}
export interface DescribeSimulationJobResponse {
  arn?: string;
  name?: string;
  status?: SimulationJobStatus;
  lastStartedAt?: Date | string;
  lastUpdatedAt?: Date | string;
  failureBehavior?: FailureBehavior;
  failureCode?: SimulationJobErrorCode;
  failureReason?: string;
  clientRequestToken?: string;
  outputLocation?: OutputLocation;
  loggingConfig?: LoggingConfig;
  maxJobDurationInSeconds?: number;
  simulationTimeMillis?: number;
  iamRole?: string;
  robotApplications?: Array<RobotApplicationConfig>;
  simulationApplications?: Array<SimulationApplicationConfig>;
  dataSources?: Array<DataSource>;
  tags?: Record<string, string>;
  vpcConfig?: VPCConfigResponse;
  networkInterface?: NetworkInterface;
  compute?: ComputeResponse;
}
export interface DescribeWorldExportJobRequest {
  job: string;
}
export interface DescribeWorldExportJobResponse {
  arn?: string;
  status?: WorldExportJobStatus;
  createdAt?: Date | string;
  failureCode?: WorldExportJobErrorCode;
  failureReason?: string;
  clientRequestToken?: string;
  worlds?: Array<string>;
  outputLocation?: OutputLocation;
  iamRole?: string;
  tags?: Record<string, string>;
}
export interface DescribeWorldGenerationJobRequest {
  job: string;
}
export interface DescribeWorldGenerationJobResponse {
  arn?: string;
  status?: WorldGenerationJobStatus;
  createdAt?: Date | string;
  failureCode?: WorldGenerationJobErrorCode;
  failureReason?: string;
  clientRequestToken?: string;
  template?: string;
  worldCount?: WorldCount;
  finishedWorldsSummary?: FinishedWorldsSummary;
  tags?: Record<string, string>;
  worldTags?: Record<string, string>;
}
export interface DescribeWorldRequest {
  world: string;
}
export interface DescribeWorldResponse {
  arn?: string;
  generationJob?: string;
  template?: string;
  createdAt?: Date | string;
  tags?: Record<string, string>;
  worldDescriptionBody?: string;
}
export interface DescribeWorldTemplateRequest {
  template: string;
}
export interface DescribeWorldTemplateResponse {
  arn?: string;
  clientRequestToken?: string;
  name?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  tags?: Record<string, string>;
  version?: string;
}
export interface Environment {
  uri?: string;
}
export type EnvironmentVariableKey = string;

export type EnvironmentVariableMap = Record<string, string>;
export type EnvironmentVariableValue = string;

export type errorMessage = string;

export type ExitBehavior = "FAIL" | "RESTART";
export type FailedAt = Date | string;

export interface FailedCreateSimulationJobRequest {
  request?: SimulationJobRequest;
  failureReason?: string;
  failureCode?: SimulationJobErrorCode;
  failedAt?: Date | string;
}
export type FailedCreateSimulationJobRequests =
  Array<FailedCreateSimulationJobRequest>;
export type FailureBehavior = "Fail" | "Continue";
export interface FailureSummary {
  totalFailureCount?: number;
  failures?: Array<WorldFailure>;
}
export interface Filter {
  name?: string;
  values?: Array<string>;
}
export type Filters = Array<Filter>;
export type FilterValues = Array<string>;
export interface FinishedWorldsSummary {
  finishedCount?: number;
  succeededWorlds?: Array<string>;
  failureSummary?: FailureSummary;
}
export interface Fleet {
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  lastDeploymentStatus?: DeploymentStatus;
  lastDeploymentJob?: string;
  lastDeploymentTime?: Date | string;
}
export type Fleets = Array<Fleet>;
export type FloorplanCount = number;

export type GenericInteger = number;

export type GenericString = string;

export interface GetWorldTemplateBodyRequest {
  template?: string;
  generationJob?: string;
}
export interface GetWorldTemplateBodyResponse {
  templateBody?: string;
}
export type GPUUnit = number;

export type IamRole = string;

export type Id = string;

export declare class IdempotentParameterMismatchException extends EffectData.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly message?: string;
}> {}
export type ImageDigest = string;

export type Integer = number;

export type InteriorCountPerFloorplan = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export type JobDuration = number;

export type Json = string;

export type LastStartedAt = Date | string;

export type LastUpdatedAt = Date | string;

export interface LaunchConfig {
  packageName?: string;
  launchFile?: string;
  environmentVariables?: Record<string, string>;
  portForwardingConfig?: PortForwardingConfig;
  streamUI?: boolean;
  command?: Array<string>;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListDeploymentJobsRequest {
  filters?: Array<Filter>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDeploymentJobsResponse {
  deploymentJobs?: Array<DeploymentJob>;
  nextToken?: string;
}
export interface ListFleetsRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListFleetsResponse {
  fleetDetails?: Array<Fleet>;
  nextToken?: string;
}
export interface ListRobotApplicationsRequest {
  versionQualifier?: string;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListRobotApplicationsResponse {
  robotApplicationSummaries?: Array<RobotApplicationSummary>;
  nextToken?: string;
}
export interface ListRobotsRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListRobotsResponse {
  robots?: Array<Robot>;
  nextToken?: string;
}
export interface ListSimulationApplicationsRequest {
  versionQualifier?: string;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListSimulationApplicationsResponse {
  simulationApplicationSummaries?: Array<SimulationApplicationSummary>;
  nextToken?: string;
}
export interface ListSimulationJobBatchesRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListSimulationJobBatchesResponse {
  simulationJobBatchSummaries?: Array<SimulationJobBatchSummary>;
  nextToken?: string;
}
export interface ListSimulationJobsRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListSimulationJobsResponse {
  simulationJobSummaries: Array<SimulationJobSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListWorldExportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListWorldExportJobsResponse {
  worldExportJobSummaries: Array<WorldExportJobSummary>;
  nextToken?: string;
}
export interface ListWorldGenerationJobsRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListWorldGenerationJobsResponse {
  worldGenerationJobSummaries: Array<WorldGenerationJobSummary>;
  nextToken?: string;
}
export interface ListWorldsRequest {
  nextToken?: string;
  maxResults?: number;
  filters?: Array<Filter>;
}
export interface ListWorldsResponse {
  worldSummaries?: Array<WorldSummary>;
  nextToken?: string;
}
export interface ListWorldTemplatesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListWorldTemplatesResponse {
  templateSummaries?: Array<TemplateSummary>;
  nextToken?: string;
}
export interface LoggingConfig {
  recordAllRosTopics?: boolean;
}
export type MaxConcurrency = number;

export type MaxResults = number;

export type Name = string;

export interface NetworkInterface {
  networkInterfaceId?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
}
export type NonEmptyString = string;

export type NonSystemPort = number;

export interface OutputLocation {
  s3Bucket?: string;
  s3Prefix?: string;
}
export type PaginationToken = string;

export type Path = string;

export type Percentage = number;

export type PercentDone = number;

export type Port = number;

export interface PortForwardingConfig {
  portMappings?: Array<PortMapping>;
}
export interface PortMapping {
  jobPort: number;
  applicationPort: number;
  enableOnPublicIp?: boolean;
}
export type PortMappingList = Array<PortMapping>;
export interface ProgressDetail {
  currentProgress?: RobotDeploymentStep;
  percentDone?: number;
  estimatedTimeRemainingSeconds?: number;
  targetResource?: string;
}
export interface RegisterRobotRequest {
  fleet: string;
  robot: string;
}
export interface RegisterRobotResponse {
  fleet?: string;
  robot?: string;
}
export interface RenderingEngine {
  name?: RenderingEngineType;
  version?: string;
}
export type RenderingEngineType = "OGRE";
export type RenderingEngineVersionType = string;

export type RepositoryUrl = string;

export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RestartSimulationJobRequest {
  job: string;
}
export interface RestartSimulationJobResponse {}
export type RevisionId = string;

export interface Robot {
  arn?: string;
  name?: string;
  fleetArn?: string;
  status?: RobotStatus;
  greenGrassGroupId?: string;
  createdAt?: Date | string;
  architecture?: Architecture;
  lastDeploymentJob?: string;
  lastDeploymentTime?: Date | string;
}
export interface RobotApplicationConfig {
  application: string;
  applicationVersion?: string;
  launchConfig: LaunchConfig;
  uploadConfigurations?: Array<UploadConfiguration>;
  useDefaultUploadConfigurations?: boolean;
  tools?: Array<Tool>;
  useDefaultTools?: boolean;
}
export type RobotApplicationConfigs = Array<RobotApplicationConfig>;
export type RobotApplicationNames = Array<string>;
export type RobotApplicationSummaries = Array<RobotApplicationSummary>;
export interface RobotApplicationSummary {
  name?: string;
  arn?: string;
  version?: string;
  lastUpdatedAt?: Date | string;
  robotSoftwareSuite?: RobotSoftwareSuite;
}
export interface RobotDeployment {
  arn?: string;
  deploymentStartTime?: Date | string;
  deploymentFinishTime?: Date | string;
  status?: RobotStatus;
  progressDetail?: ProgressDetail;
  failureReason?: string;
  failureCode?: DeploymentJobErrorCode;
}
export type RobotDeploymentStep =
  | "ValidatingStep"
  | "DownloadingExtractingStep"
  | "ExecutingDownloadCondition"
  | "PreLaunchStep"
  | "LaunchingStep"
  | "PostLaunchStep"
  | "FinishedStep";
export type RobotDeploymentSummary = Array<RobotDeployment>;
export type Robots = Array<Robot>;
export interface RobotSoftwareSuite {
  name?: RobotSoftwareSuiteType;
  version?: RobotSoftwareSuiteVersionType;
}
export type RobotSoftwareSuiteType = "ROS" | "ROS2" | "General";
export type RobotSoftwareSuiteVersionType =
  | "Kinetic"
  | "Melodic"
  | "Dashing"
  | "Foxy";
export type RobotStatus =
  | "Available"
  | "Registered"
  | "PendingNewDeployment"
  | "Deploying"
  | "Failed"
  | "InSync"
  | "NoResponse";
export type S3Bucket = string;

export type S3Etag = string;

export type S3Etags = Array<string>;
export type S3Key = string;

export type S3KeyOrPrefix = string;

export interface S3KeyOutput {
  s3Key?: string;
  etag?: string;
}
export type S3KeyOutputs = Array<S3KeyOutput>;
export type S3KeysOrPrefixes = Array<string>;
export interface S3Object {
  bucket: string;
  key: string;
  etag?: string;
}
export type SecurityGroups = Array<string>;
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface SimulationApplicationConfig {
  application: string;
  applicationVersion?: string;
  launchConfig: LaunchConfig;
  uploadConfigurations?: Array<UploadConfiguration>;
  worldConfigs?: Array<WorldConfig>;
  useDefaultUploadConfigurations?: boolean;
  tools?: Array<Tool>;
  useDefaultTools?: boolean;
}
export type SimulationApplicationConfigs = Array<SimulationApplicationConfig>;
export type SimulationApplicationNames = Array<string>;
export type SimulationApplicationSummaries =
  Array<SimulationApplicationSummary>;
export interface SimulationApplicationSummary {
  name?: string;
  arn?: string;
  version?: string;
  lastUpdatedAt?: Date | string;
  robotSoftwareSuite?: RobotSoftwareSuite;
  simulationSoftwareSuite?: SimulationSoftwareSuite;
}
export interface SimulationJob {
  arn?: string;
  name?: string;
  status?: SimulationJobStatus;
  lastStartedAt?: Date | string;
  lastUpdatedAt?: Date | string;
  failureBehavior?: FailureBehavior;
  failureCode?: SimulationJobErrorCode;
  failureReason?: string;
  clientRequestToken?: string;
  outputLocation?: OutputLocation;
  loggingConfig?: LoggingConfig;
  maxJobDurationInSeconds?: number;
  simulationTimeMillis?: number;
  iamRole?: string;
  robotApplications?: Array<RobotApplicationConfig>;
  simulationApplications?: Array<SimulationApplicationConfig>;
  dataSources?: Array<DataSource>;
  tags?: Record<string, string>;
  vpcConfig?: VPCConfigResponse;
  networkInterface?: NetworkInterface;
  compute?: ComputeResponse;
}
export type SimulationJobBatchErrorCode = "InternalServiceError";
export type SimulationJobBatchStatus =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Completed"
  | "Canceled"
  | "Canceling"
  | "Completing"
  | "TimingOut"
  | "TimedOut";
export type SimulationJobBatchSummaries = Array<SimulationJobBatchSummary>;
export interface SimulationJobBatchSummary {
  arn?: string;
  lastUpdatedAt?: Date | string;
  createdAt?: Date | string;
  status?: SimulationJobBatchStatus;
  failedRequestCount?: number;
  pendingRequestCount?: number;
  createdRequestCount?: number;
}
export type SimulationJobErrorCode =
  | "InternalServiceError"
  | "RobotApplicationCrash"
  | "SimulationApplicationCrash"
  | "RobotApplicationHealthCheckFailure"
  | "SimulationApplicationHealthCheckFailure"
  | "BadPermissionsRobotApplication"
  | "BadPermissionsSimulationApplication"
  | "BadPermissionsS3Object"
  | "BadPermissionsS3Output"
  | "BadPermissionsCloudwatchLogs"
  | "SubnetIpLimitExceeded"
  | "ENILimitExceeded"
  | "BadPermissionsUserCredentials"
  | "InvalidBundleRobotApplication"
  | "InvalidBundleSimulationApplication"
  | "InvalidS3Resource"
  | "ThrottlingError"
  | "LimitExceeded"
  | "MismatchedEtag"
  | "RobotApplicationVersionMismatchedEtag"
  | "SimulationApplicationVersionMismatchedEtag"
  | "ResourceNotFound"
  | "RequestThrottled"
  | "BatchTimedOut"
  | "BatchCanceled"
  | "InvalidInput"
  | "WrongRegionS3Bucket"
  | "WrongRegionS3Output"
  | "WrongRegionRobotApplication"
  | "WrongRegionSimulationApplication"
  | "UploadContentMismatchError";
export interface SimulationJobRequest {
  outputLocation?: OutputLocation;
  loggingConfig?: LoggingConfig;
  maxJobDurationInSeconds: number;
  iamRole?: string;
  failureBehavior?: FailureBehavior;
  useDefaultApplications?: boolean;
  robotApplications?: Array<RobotApplicationConfig>;
  simulationApplications?: Array<SimulationApplicationConfig>;
  dataSources?: Array<DataSourceConfig>;
  vpcConfig?: VPCConfig;
  compute?: Compute;
  tags?: Record<string, string>;
}
export type SimulationJobs = Array<SimulationJob>;
export type SimulationJobStatus =
  | "Pending"
  | "Preparing"
  | "Running"
  | "Restarting"
  | "Completed"
  | "Failed"
  | "RunningFailed"
  | "Terminating"
  | "Terminated"
  | "Canceled";
export type SimulationJobSummaries = Array<SimulationJobSummary>;
export interface SimulationJobSummary {
  arn?: string;
  lastUpdatedAt?: Date | string;
  name?: string;
  status?: SimulationJobStatus;
  simulationApplicationNames?: Array<string>;
  robotApplicationNames?: Array<string>;
  dataSourceNames?: Array<string>;
  computeType?: ComputeType;
}
export interface SimulationSoftwareSuite {
  name?: SimulationSoftwareSuiteType;
  version?: string;
}
export type SimulationSoftwareSuiteType =
  | "Gazebo"
  | "RosbagPlay"
  | "SimulationRuntime";
export type SimulationSoftwareSuiteVersionType = string;

export type SimulationTimeMillis = number;

export type SimulationUnit = number;

export interface Source {
  s3Bucket?: string;
  s3Key?: string;
  etag?: string;
  architecture?: Architecture;
}
export interface SourceConfig {
  s3Bucket?: string;
  s3Key?: string;
  architecture?: Architecture;
}
export type SourceConfigs = Array<SourceConfig>;
export type Sources = Array<Source>;
export interface StartSimulationJobBatchRequest {
  clientRequestToken?: string;
  batchPolicy?: BatchPolicy;
  createSimulationJobRequests: Array<SimulationJobRequest>;
  tags?: Record<string, string>;
}
export interface StartSimulationJobBatchResponse {
  arn?: string;
  status?: SimulationJobBatchStatus;
  createdAt?: Date | string;
  clientRequestToken?: string;
  batchPolicy?: BatchPolicy;
  failureCode?: SimulationJobBatchErrorCode;
  failureReason?: string;
  failedRequests?: Array<FailedCreateSimulationJobRequest>;
  pendingRequests?: Array<SimulationJobRequest>;
  createdRequests?: Array<SimulationJobSummary>;
  tags?: Record<string, string>;
}
export type Subnets = Array<string>;
export interface SyncDeploymentJobRequest {
  clientRequestToken: string;
  fleet: string;
}
export interface SyncDeploymentJobResponse {
  arn?: string;
  fleet?: string;
  status?: DeploymentStatus;
  deploymentConfig?: DeploymentConfig;
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
  failureReason?: string;
  failureCode?: DeploymentJobErrorCode;
  createdAt?: Date | string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TemplateLocation {
  s3Bucket: string;
  s3Key: string;
}
export type TemplateName = string;

export type TemplateSummaries = Array<TemplateSummary>;
export interface TemplateSummary {
  arn?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  name?: string;
  version?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface Tool {
  streamUI?: boolean;
  name: string;
  command: string;
  streamOutputToCloudWatch?: boolean;
  exitBehavior?: ExitBehavior;
}
export type Tools = Array<Tool>;
export type UnrestrictedCommand = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateRobotApplicationRequest {
  application: string;
  sources?: Array<SourceConfig>;
  robotSoftwareSuite: RobotSoftwareSuite;
  currentRevisionId?: string;
  environment?: Environment;
}
export interface UpdateRobotApplicationResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  robotSoftwareSuite?: RobotSoftwareSuite;
  lastUpdatedAt?: Date | string;
  revisionId?: string;
  environment?: Environment;
}
export interface UpdateSimulationApplicationRequest {
  application: string;
  sources?: Array<SourceConfig>;
  simulationSoftwareSuite: SimulationSoftwareSuite;
  robotSoftwareSuite: RobotSoftwareSuite;
  renderingEngine?: RenderingEngine;
  currentRevisionId?: string;
  environment?: Environment;
}
export interface UpdateSimulationApplicationResponse {
  arn?: string;
  name?: string;
  version?: string;
  sources?: Array<Source>;
  simulationSoftwareSuite?: SimulationSoftwareSuite;
  robotSoftwareSuite?: RobotSoftwareSuite;
  renderingEngine?: RenderingEngine;
  lastUpdatedAt?: Date | string;
  revisionId?: string;
  environment?: Environment;
}
export interface UpdateWorldTemplateRequest {
  template: string;
  name?: string;
  templateBody?: string;
  templateLocation?: TemplateLocation;
}
export interface UpdateWorldTemplateResponse {
  arn?: string;
  name?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type UploadBehavior =
  | "UPLOAD_ON_TERMINATE"
  | "UPLOAD_ROLLING_AUTO_REMOVE";
export interface UploadConfiguration {
  name: string;
  path: string;
  uploadBehavior: UploadBehavior;
}
export type UploadConfigurations = Array<UploadConfiguration>;
export type Version = string;

export type VersionQualifier = string;

export interface VPCConfig {
  subnets: Array<string>;
  securityGroups?: Array<string>;
  assignPublicIp?: boolean;
}
export interface VPCConfigResponse {
  subnets?: Array<string>;
  securityGroups?: Array<string>;
  vpcId?: string;
  assignPublicIp?: boolean;
}
export interface WorldConfig {
  world?: string;
}
export type WorldConfigs = Array<WorldConfig>;
export interface WorldCount {
  floorplanCount?: number;
  interiorCountPerFloorplan?: number;
}
export type WorldExportJobErrorCode =
  | "InternalServiceError"
  | "LimitExceeded"
  | "ResourceNotFound"
  | "RequestThrottled"
  | "InvalidInput"
  | "AccessDenied";
export type WorldExportJobStatus =
  | "Pending"
  | "Running"
  | "Completed"
  | "Failed"
  | "Canceling"
  | "Canceled";
export type WorldExportJobSummaries = Array<WorldExportJobSummary>;
export interface WorldExportJobSummary {
  arn?: string;
  status?: WorldExportJobStatus;
  createdAt?: Date | string;
  worlds?: Array<string>;
  outputLocation?: OutputLocation;
}
export interface WorldFailure {
  failureCode?: WorldGenerationJobErrorCode;
  sampleFailureReason?: string;
  failureCount?: number;
}
export type WorldFailures = Array<WorldFailure>;
export type WorldGenerationJobErrorCode =
  | "InternalServiceError"
  | "LimitExceeded"
  | "ResourceNotFound"
  | "RequestThrottled"
  | "InvalidInput"
  | "AllWorldGenerationFailed";
export type WorldGenerationJobStatus =
  | "Pending"
  | "Running"
  | "Completed"
  | "Failed"
  | "PartialFailed"
  | "Canceling"
  | "Canceled";
export type WorldGenerationJobSummaries = Array<WorldGenerationJobSummary>;
export interface WorldGenerationJobSummary {
  arn?: string;
  template?: string;
  createdAt?: Date | string;
  status?: WorldGenerationJobStatus;
  worldCount?: WorldCount;
  succeededWorldCount?: number;
  failedWorldCount?: number;
}
export type WorldSummaries = Array<WorldSummary>;
export interface WorldSummary {
  arn?: string;
  createdAt?: Date | string;
  generationJob?: string;
  template?: string;
}
export declare namespace BatchDeleteWorlds {
  export type Input = BatchDeleteWorldsRequest;
  export type Output = BatchDeleteWorldsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchDescribeSimulationJob {
  export type Input = BatchDescribeSimulationJobRequest;
  export type Output = BatchDescribeSimulationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelDeploymentJob {
  export type Input = CancelDeploymentJobRequest;
  export type Output = CancelDeploymentJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelSimulationJob {
  export type Input = CancelSimulationJobRequest;
  export type Output = CancelSimulationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelSimulationJobBatch {
  export type Input = CancelSimulationJobBatchRequest;
  export type Output = CancelSimulationJobBatchResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelWorldExportJob {
  export type Input = CancelWorldExportJobRequest;
  export type Output = CancelWorldExportJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelWorldGenerationJob {
  export type Input = CancelWorldGenerationJobRequest;
  export type Output = CancelWorldGenerationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDeploymentJob {
  export type Input = CreateDeploymentJobRequest;
  export type Output = CreateDeploymentJobResponse;
  export type Error =
    | ConcurrentDeploymentException
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFleet {
  export type Input = CreateFleetRequest;
  export type Output = CreateFleetResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRobot {
  export type Input = CreateRobotRequest;
  export type Output = CreateRobotResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRobotApplication {
  export type Input = CreateRobotApplicationRequest;
  export type Output = CreateRobotApplicationResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRobotApplicationVersion {
  export type Input = CreateRobotApplicationVersionRequest;
  export type Output = CreateRobotApplicationVersionResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSimulationApplication {
  export type Input = CreateSimulationApplicationRequest;
  export type Output = CreateSimulationApplicationResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSimulationApplicationVersion {
  export type Input = CreateSimulationApplicationVersionRequest;
  export type Output = CreateSimulationApplicationVersionResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSimulationJob {
  export type Input = CreateSimulationJobRequest;
  export type Output = CreateSimulationJobResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateWorldExportJob {
  export type Input = CreateWorldExportJobRequest;
  export type Output = CreateWorldExportJobResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateWorldGenerationJob {
  export type Input = CreateWorldGenerationJobRequest;
  export type Output = CreateWorldGenerationJobResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateWorldTemplate {
  export type Input = CreateWorldTemplateRequest;
  export type Output = CreateWorldTemplateResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteFleet {
  export type Input = DeleteFleetRequest;
  export type Output = DeleteFleetResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRobot {
  export type Input = DeleteRobotRequest;
  export type Output = DeleteRobotResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRobotApplication {
  export type Input = DeleteRobotApplicationRequest;
  export type Output = DeleteRobotApplicationResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSimulationApplication {
  export type Input = DeleteSimulationApplicationRequest;
  export type Output = DeleteSimulationApplicationResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteWorldTemplate {
  export type Input = DeleteWorldTemplateRequest;
  export type Output = DeleteWorldTemplateResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeregisterRobot {
  export type Input = DeregisterRobotRequest;
  export type Output = DeregisterRobotResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDeploymentJob {
  export type Input = DescribeDeploymentJobRequest;
  export type Output = DescribeDeploymentJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFleet {
  export type Input = DescribeFleetRequest;
  export type Output = DescribeFleetResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRobot {
  export type Input = DescribeRobotRequest;
  export type Output = DescribeRobotResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRobotApplication {
  export type Input = DescribeRobotApplicationRequest;
  export type Output = DescribeRobotApplicationResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSimulationApplication {
  export type Input = DescribeSimulationApplicationRequest;
  export type Output = DescribeSimulationApplicationResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSimulationJob {
  export type Input = DescribeSimulationJobRequest;
  export type Output = DescribeSimulationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSimulationJobBatch {
  export type Input = DescribeSimulationJobBatchRequest;
  export type Output = DescribeSimulationJobBatchResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWorld {
  export type Input = DescribeWorldRequest;
  export type Output = DescribeWorldResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeWorldExportJob {
  export type Input = DescribeWorldExportJobRequest;
  export type Output = DescribeWorldExportJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeWorldGenerationJob {
  export type Input = DescribeWorldGenerationJobRequest;
  export type Output = DescribeWorldGenerationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeWorldTemplate {
  export type Input = DescribeWorldTemplateRequest;
  export type Output = DescribeWorldTemplateResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetWorldTemplateBody {
  export type Input = GetWorldTemplateBodyRequest;
  export type Output = GetWorldTemplateBodyResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDeploymentJobs {
  export type Input = ListDeploymentJobsRequest;
  export type Output = ListDeploymentJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFleets {
  export type Input = ListFleetsRequest;
  export type Output = ListFleetsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRobotApplications {
  export type Input = ListRobotApplicationsRequest;
  export type Output = ListRobotApplicationsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRobots {
  export type Input = ListRobotsRequest;
  export type Output = ListRobotsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSimulationApplications {
  export type Input = ListSimulationApplicationsRequest;
  export type Output = ListSimulationApplicationsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSimulationJobBatches {
  export type Input = ListSimulationJobBatchesRequest;
  export type Output = ListSimulationJobBatchesResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ListSimulationJobs {
  export type Input = ListSimulationJobsRequest;
  export type Output = ListSimulationJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListWorldExportJobs {
  export type Input = ListWorldExportJobsRequest;
  export type Output = ListWorldExportJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListWorldGenerationJobs {
  export type Input = ListWorldGenerationJobsRequest;
  export type Output = ListWorldGenerationJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListWorlds {
  export type Input = ListWorldsRequest;
  export type Output = ListWorldsResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListWorldTemplates {
  export type Input = ListWorldTemplatesRequest;
  export type Output = ListWorldTemplatesResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RegisterRobot {
  export type Input = RegisterRobotRequest;
  export type Output = RegisterRobotResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RestartSimulationJob {
  export type Input = RestartSimulationJobRequest;
  export type Output = RestartSimulationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartSimulationJobBatch {
  export type Input = StartSimulationJobBatchRequest;
  export type Output = StartSimulationJobBatchResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SyncDeploymentJob {
  export type Input = SyncDeploymentJobRequest;
  export type Output = SyncDeploymentJobResponse;
  export type Error =
    | ConcurrentDeploymentException
    | IdempotentParameterMismatchException
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRobotApplication {
  export type Input = UpdateRobotApplicationRequest;
  export type Output = UpdateRobotApplicationResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSimulationApplication {
  export type Input = UpdateSimulationApplicationRequest;
  export type Output = UpdateSimulationApplicationResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateWorldTemplate {
  export type Input = UpdateWorldTemplateRequest;
  export type Output = UpdateWorldTemplateResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
