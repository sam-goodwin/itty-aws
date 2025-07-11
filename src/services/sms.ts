import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSServerMigrationService_V2016_10_24 {
  createApp(
    input: CreateAppRequest,
  ): Effect.Effect<
    CreateAppResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  createReplicationJob(
    input: CreateReplicationJobRequest,
  ): Effect.Effect<
    CreateReplicationJobResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | NoConnectorsAvailableException
    | OperationNotPermittedException
    | ReplicationJobAlreadyExistsException
    | ServerCannotBeReplicatedException
    | TemporarilyUnavailableException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  deleteApp(
    input: DeleteAppRequest,
  ): Effect.Effect<
    DeleteAppResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  deleteAppLaunchConfiguration(
    input: DeleteAppLaunchConfigurationRequest,
  ): Effect.Effect<
    DeleteAppLaunchConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  deleteAppReplicationConfiguration(
    input: DeleteAppReplicationConfigurationRequest,
  ): Effect.Effect<
    DeleteAppReplicationConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  deleteAppValidationConfiguration(
    input: DeleteAppValidationConfigurationRequest,
  ): Effect.Effect<
    DeleteAppValidationConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  deleteReplicationJob(
    input: DeleteReplicationJobRequest,
  ): Effect.Effect<
    DeleteReplicationJobResponse,
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ReplicationJobNotFoundException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  deleteServerCatalog(
    input: DeleteServerCatalogRequest,
  ): Effect.Effect<
    DeleteServerCatalogResponse,
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  disassociateConnector(
    input: DisassociateConnectorRequest,
  ): Effect.Effect<
    DisassociateConnectorResponse,
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  generateChangeSet(
    input: GenerateChangeSetRequest,
  ): Effect.Effect<
    GenerateChangeSetResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  generateTemplate(
    input: GenerateTemplateRequest,
  ): Effect.Effect<
    GenerateTemplateResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getApp(
    input: GetAppRequest,
  ): Effect.Effect<
    GetAppResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getAppLaunchConfiguration(
    input: GetAppLaunchConfigurationRequest,
  ): Effect.Effect<
    GetAppLaunchConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getAppReplicationConfiguration(
    input: GetAppReplicationConfigurationRequest,
  ): Effect.Effect<
    GetAppReplicationConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getAppValidationConfiguration(
    input: GetAppValidationConfigurationRequest,
  ): Effect.Effect<
    GetAppValidationConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getAppValidationOutput(
    input: GetAppValidationOutputRequest,
  ): Effect.Effect<
    GetAppValidationOutputResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getConnectors(
    input: GetConnectorsRequest,
  ): Effect.Effect<
    GetConnectorsResponse,
    UnauthorizedOperationException | CommonAwsError
  >;
  getReplicationJobs(
    input: GetReplicationJobsRequest,
  ): Effect.Effect<
    GetReplicationJobsResponse,
    | InvalidParameterException
    | MissingRequiredParameterException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getReplicationRuns(
    input: GetReplicationRunsRequest,
  ): Effect.Effect<
    GetReplicationRunsResponse,
    | InvalidParameterException
    | MissingRequiredParameterException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  getServers(
    input: GetServersRequest,
  ): Effect.Effect<
    GetServersResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  importAppCatalog(
    input: ImportAppCatalogRequest,
  ): Effect.Effect<
    ImportAppCatalogResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  importServerCatalog(
    input: ImportServerCatalogRequest,
  ): Effect.Effect<
    ImportServerCatalogResponse,
    | InvalidParameterException
    | MissingRequiredParameterException
    | NoConnectorsAvailableException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  launchApp(
    input: LaunchAppRequest,
  ): Effect.Effect<
    LaunchAppResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  listApps(
    input: ListAppsRequest,
  ): Effect.Effect<
    ListAppsResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  notifyAppValidationOutput(
    input: NotifyAppValidationOutputRequest,
  ): Effect.Effect<
    NotifyAppValidationOutputResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  putAppLaunchConfiguration(
    input: PutAppLaunchConfigurationRequest,
  ): Effect.Effect<
    PutAppLaunchConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  putAppReplicationConfiguration(
    input: PutAppReplicationConfigurationRequest,
  ): Effect.Effect<
    PutAppReplicationConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  putAppValidationConfiguration(
    input: PutAppValidationConfigurationRequest,
  ): Effect.Effect<
    PutAppValidationConfigurationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  startAppReplication(
    input: StartAppReplicationRequest,
  ): Effect.Effect<
    StartAppReplicationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  startOnDemandAppReplication(
    input: StartOnDemandAppReplicationRequest,
  ): Effect.Effect<
    StartOnDemandAppReplicationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  startOnDemandReplicationRun(
    input: StartOnDemandReplicationRunRequest,
  ): Effect.Effect<
    StartOnDemandReplicationRunResponse,
    | DryRunOperationException
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ReplicationRunLimitExceededException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  stopAppReplication(
    input: StopAppReplicationRequest,
  ): Effect.Effect<
    StopAppReplicationResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  terminateApp(
    input: TerminateAppRequest,
  ): Effect.Effect<
    TerminateAppResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  updateApp(
    input: UpdateAppRequest,
  ): Effect.Effect<
    UpdateAppResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
  updateReplicationJob(
    input: UpdateReplicationJobRequest,
  ): Effect.Effect<
    UpdateReplicationJobResponse,
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ReplicationJobNotFoundException
    | ServerCannotBeReplicatedException
    | TemporarilyUnavailableException
    | UnauthorizedOperationException
    | CommonAwsError
  >;
}

export type Sms = AWSServerMigrationService_V2016_10_24;

export type AmiId = string;

export type AppDescription = string;

export type AppId = string;

export type AppIds = Array<string>;
export type AppIdWithValidation = string;

export type AppLaunchConfigurationStatus = "NotConfigured" | "Configured";
export type AppLaunchStatus =
  | "ReadyForConfiguration"
  | "ConfigurationInProgress"
  | "ConfigurationInvalid"
  | "ReadyForLaunch"
  | "ValidationInProgress"
  | "LaunchPending"
  | "LaunchInProgress"
  | "Launched"
  | "PartiallyLaunched"
  | "DeltaLaunchInProgress"
  | "DeltaLaunchFailed"
  | "LaunchFailed"
  | "TerminateInProgress"
  | "TerminateFailed"
  | "Terminated";
export type AppLaunchStatusMessage = string;

export type AppName = string;

export type AppReplicationConfigurationStatus = "NotConfigured" | "Configured";
export type AppReplicationStatus =
  | "ReadyForConfiguration"
  | "ConfigurationInProgress"
  | "ConfigurationInvalid"
  | "ReadyForReplication"
  | "ValidationInProgress"
  | "ReplicationPending"
  | "ReplicationInProgress"
  | "Replicated"
  | "PartiallyReplicated"
  | "DeltaReplicationInProgress"
  | "DeltaReplicated"
  | "DeltaReplicationFailed"
  | "ReplicationFailed"
  | "ReplicationStopping"
  | "ReplicationStopFailed"
  | "ReplicationStopped";
export type AppReplicationStatusMessage = string;

export type Apps = Array<AppSummary>;
export type AppStatus =
  | "Creating"
  | "Active"
  | "Updating"
  | "Deleting"
  | "Deleted"
  | "DELETE_FAILED";
export type AppStatusMessage = string;

export interface AppSummary {
  appId?: string;
  importedAppId?: string;
  name?: string;
  description?: string;
  status?: AppStatus;
  statusMessage?: string;
  replicationConfigurationStatus?: AppReplicationConfigurationStatus;
  replicationStatus?: AppReplicationStatus;
  replicationStatusMessage?: string;
  latestReplicationTime?: Date | string;
  launchConfigurationStatus?: AppLaunchConfigurationStatus;
  launchStatus?: AppLaunchStatus;
  launchStatusMessage?: string;
  launchDetails?: LaunchDetails;
  creationTime?: Date | string;
  lastModified?: Date | string;
  roleName?: string;
  totalServerGroups?: number;
  totalServers?: number;
}
export interface AppValidationConfiguration {
  validationId?: string;
  name?: string;
  appValidationStrategy?: AppValidationStrategy;
  ssmValidationParameters?: SSMValidationParameters;
}
export type AppValidationConfigurations = Array<AppValidationConfiguration>;
export interface AppValidationOutput {
  ssmOutput?: SSMOutput;
}
export type AppValidationStrategy = "SSM";
export type AssociatePublicIpAddress = boolean;

export type AutoLaunch = boolean;

export type BucketName = string;

export type ClientToken = string;

export type Command = string;

export interface Connector {
  connectorId?: string;
  version?: string;
  status?: ConnectorStatus;
  capabilityList?: Array<ConnectorCapability>;
  vmManagerName?: string;
  vmManagerType?: VmManagerType;
  vmManagerId?: string;
  ipAddress?: string;
  macAddress?: string;
  associatedOn?: Date | string;
}
export type ConnectorCapability =
  | "vSphere"
  | "scvmm"
  | "hyperVManager"
  | "snapshotBatching"
  | "smsOptimized";
export type ConnectorCapabilityList = Array<ConnectorCapability>;
export type ConnectorId = string;

export type ConnectorList = Array<Connector>;
export type ConnectorStatus = "Healthy" | "Unhealthy";
export type ConnectorVersion = string;

export interface CreateAppRequest {
  name?: string;
  description?: string;
  roleName?: string;
  clientToken?: string;
  serverGroups?: Array<ServerGroup>;
  tags?: Array<Tag>;
}
export interface CreateAppResponse {
  appSummary?: AppSummary;
  serverGroups?: Array<ServerGroup>;
  tags?: Array<Tag>;
}
export interface CreateReplicationJobRequest {
  serverId: string;
  seedReplicationTime: Date | string;
  frequency?: number;
  runOnce?: boolean;
  licenseType?: LicenseType;
  roleName?: string;
  description?: string;
  numberOfRecentAmisToKeep?: number;
  encrypted?: boolean;
  kmsKeyId?: string;
}
export interface CreateReplicationJobResponse {
  replicationJobId?: string;
}
export interface DeleteAppLaunchConfigurationRequest {
  appId?: string;
}
export interface DeleteAppLaunchConfigurationResponse {}
export interface DeleteAppReplicationConfigurationRequest {
  appId?: string;
}
export interface DeleteAppReplicationConfigurationResponse {}
export interface DeleteAppRequest {
  appId?: string;
  forceStopAppReplication?: boolean;
  forceTerminateApp?: boolean;
}
export interface DeleteAppResponse {}
export interface DeleteAppValidationConfigurationRequest {
  appId: string;
}
export interface DeleteAppValidationConfigurationResponse {}
export interface DeleteReplicationJobRequest {
  replicationJobId: string;
}
export interface DeleteReplicationJobResponse {}
export interface DeleteServerCatalogRequest {}
export interface DeleteServerCatalogResponse {}
export type Description = string;

export interface DisassociateConnectorRequest {
  connectorId: string;
}
export interface DisassociateConnectorResponse {}
export declare class DryRunOperationException extends Data.TaggedError(
  "DryRunOperationException",
)<{
  readonly message?: string;
}> {}
export type EC2KeyName = string;

export type Encrypted = boolean;

export type ErrorMessage = string;

export type ExecutionTimeoutSeconds = number;

export type ForceStopAppReplication = boolean;

export type ForceTerminateApp = boolean;

export type Frequency = number;

export interface GenerateChangeSetRequest {
  appId?: string;
  changesetFormat?: OutputFormat;
}
export interface GenerateChangeSetResponse {
  s3Location?: S3Location;
}
export interface GenerateTemplateRequest {
  appId?: string;
  templateFormat?: OutputFormat;
}
export interface GenerateTemplateResponse {
  s3Location?: S3Location;
}
export interface GetAppLaunchConfigurationRequest {
  appId?: string;
}
export interface GetAppLaunchConfigurationResponse {
  appId?: string;
  roleName?: string;
  autoLaunch?: boolean;
  serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
}
export interface GetAppReplicationConfigurationRequest {
  appId?: string;
}
export interface GetAppReplicationConfigurationResponse {
  serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
}
export interface GetAppRequest {
  appId?: string;
}
export interface GetAppResponse {
  appSummary?: AppSummary;
  serverGroups?: Array<ServerGroup>;
  tags?: Array<Tag>;
}
export interface GetAppValidationConfigurationRequest {
  appId: string;
}
export interface GetAppValidationConfigurationResponse {
  appValidationConfigurations?: Array<AppValidationConfiguration>;
  serverGroupValidationConfigurations?: Array<ServerGroupValidationConfiguration>;
}
export interface GetAppValidationOutputRequest {
  appId: string;
}
export interface GetAppValidationOutputResponse {
  validationOutputList?: Array<ValidationOutput>;
}
export interface GetConnectorsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface GetConnectorsResponse {
  connectorList?: Array<Connector>;
  nextToken?: string;
}
export interface GetReplicationJobsRequest {
  replicationJobId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetReplicationJobsResponse {
  replicationJobList?: Array<ReplicationJob>;
  nextToken?: string;
}
export interface GetReplicationRunsRequest {
  replicationJobId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetReplicationRunsResponse {
  replicationJob?: ReplicationJob;
  replicationRunList?: Array<ReplicationRun>;
  nextToken?: string;
}
export interface GetServersRequest {
  nextToken?: string;
  maxResults?: number;
  vmServerAddressList?: Array<VmServerAddress>;
}
export interface GetServersResponse {
  lastModifiedOn?: Date | string;
  serverCatalogStatus?: ServerCatalogStatus;
  serverList?: Array<Server>;
  nextToken?: string;
}
export interface ImportAppCatalogRequest {
  roleName?: string;
}
export interface ImportAppCatalogResponse {}
export type ImportedAppId = string;

export interface ImportServerCatalogRequest {}
export interface ImportServerCatalogResponse {}
export type InstanceId = string;

export type InstanceType = string;

export declare class InternalError extends Data.TaggedError("InternalError")<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export type IpAddress = string;

export type KmsKeyId = string;

export interface LaunchAppRequest {
  appId?: string;
}
export interface LaunchAppResponse {}
export interface LaunchDetails {
  latestLaunchTime?: Date | string;
  stackName?: string;
  stackId?: string;
}
export type LaunchOrder = number;

export type LicenseType = "AWS" | "BYOL";
export interface ListAppsRequest {
  appIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAppsResponse {
  apps?: Array<AppSummary>;
  nextToken?: string;
}
export type LogicalId = string;

export type MacAddress = string;

export type MaxResults = number;

export declare class MissingRequiredParameterException extends Data.TaggedError(
  "MissingRequiredParameterException",
)<{
  readonly message?: string;
}> {}
export type NextToken = string;

export declare class NoConnectorsAvailableException extends Data.TaggedError(
  "NoConnectorsAvailableException",
)<{
  readonly message?: string;
}> {}
export type NonEmptyStringWithMaxLen255 = string;

export interface NotificationContext {
  validationId?: string;
  status?: ValidationStatus;
  statusMessage?: string;
}
export interface NotifyAppValidationOutputRequest {
  appId: string;
  notificationContext?: NotificationContext;
}
export interface NotifyAppValidationOutputResponse {}
export type NumberOfRecentAmisToKeep = number;

export declare class OperationNotPermittedException extends Data.TaggedError(
  "OperationNotPermittedException",
)<{
  readonly message?: string;
}> {}
export type OutputFormat = "JSON" | "YAML";
export interface PutAppLaunchConfigurationRequest {
  appId?: string;
  roleName?: string;
  autoLaunch?: boolean;
  serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
}
export interface PutAppLaunchConfigurationResponse {}
export interface PutAppReplicationConfigurationRequest {
  appId?: string;
  serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
}
export interface PutAppReplicationConfigurationResponse {}
export interface PutAppValidationConfigurationRequest {
  appId: string;
  appValidationConfigurations?: Array<AppValidationConfiguration>;
  serverGroupValidationConfigurations?: Array<ServerGroupValidationConfiguration>;
}
export interface PutAppValidationConfigurationResponse {}
export interface ReplicationJob {
  replicationJobId?: string;
  serverId?: string;
  serverType?: ServerType;
  vmServer?: VmServer;
  seedReplicationTime?: Date | string;
  frequency?: number;
  runOnce?: boolean;
  nextReplicationRunStartTime?: Date | string;
  licenseType?: LicenseType;
  roleName?: string;
  latestAmiId?: string;
  state?: ReplicationJobState;
  statusMessage?: string;
  description?: string;
  numberOfRecentAmisToKeep?: number;
  encrypted?: boolean;
  kmsKeyId?: string;
  replicationRunList?: Array<ReplicationRun>;
}
export declare class ReplicationJobAlreadyExistsException extends Data.TaggedError(
  "ReplicationJobAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ReplicationJobId = string;

export type ReplicationJobList = Array<ReplicationJob>;
export declare class ReplicationJobNotFoundException extends Data.TaggedError(
  "ReplicationJobNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ReplicationJobState =
  | "Pending"
  | "Active"
  | "Failed"
  | "Deleting"
  | "Deleted"
  | "Completed"
  | "PausedOnFailure"
  | "Failing";
export type ReplicationJobStatusMessage = string;

export type ReplicationJobTerminated = boolean;

export interface ReplicationRun {
  replicationRunId?: string;
  state?: ReplicationRunState;
  type?: ReplicationRunType;
  stageDetails?: ReplicationRunStageDetails;
  statusMessage?: string;
  amiId?: string;
  scheduledStartTime?: Date | string;
  completedTime?: Date | string;
  description?: string;
  encrypted?: boolean;
  kmsKeyId?: string;
}
export type ReplicationRunId = string;

export declare class ReplicationRunLimitExceededException extends Data.TaggedError(
  "ReplicationRunLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ReplicationRunList = Array<ReplicationRun>;
export type ReplicationRunStage = string;

export interface ReplicationRunStageDetails {
  stage?: string;
  stageProgress?: string;
}
export type ReplicationRunStageProgress = string;

export type ReplicationRunState =
  | "Pending"
  | "Missed"
  | "Active"
  | "Failed"
  | "Completed"
  | "Deleting"
  | "Deleted";
export type ReplicationRunStatusMessage = string;

export type ReplicationRunType = "OnDemand" | "Automatic";
export type RoleName = string;

export type RunOnce = boolean;

export type S3BucketName = string;

export type S3KeyName = string;

export interface S3Location {
  bucket?: string;
  key?: string;
}
export type ScriptType = "SHELL_SCRIPT" | "POWERSHELL_SCRIPT";
export type SecurityGroup = string;

export interface Server {
  serverId?: string;
  serverType?: ServerType;
  vmServer?: VmServer;
  replicationJobId?: string;
  replicationJobTerminated?: boolean;
}
export declare class ServerCannotBeReplicatedException extends Data.TaggedError(
  "ServerCannotBeReplicatedException",
)<{
  readonly message?: string;
}> {}
export type ServerCatalogStatus =
  | "NotImported"
  | "Importing"
  | "Available"
  | "Deleted"
  | "Expired";
export interface ServerGroup {
  serverGroupId?: string;
  name?: string;
  serverList?: Array<Server>;
}
export type ServerGroupId = string;

export interface ServerGroupLaunchConfiguration {
  serverGroupId?: string;
  launchOrder?: number;
  serverLaunchConfigurations?: Array<ServerLaunchConfiguration>;
}
export type ServerGroupLaunchConfigurations =
  Array<ServerGroupLaunchConfiguration>;
export type ServerGroupName = string;

export interface ServerGroupReplicationConfiguration {
  serverGroupId?: string;
  serverReplicationConfigurations?: Array<ServerReplicationConfiguration>;
}
export type ServerGroupReplicationConfigurations =
  Array<ServerGroupReplicationConfiguration>;
export type ServerGroups = Array<ServerGroup>;
export interface ServerGroupValidationConfiguration {
  serverGroupId?: string;
  serverValidationConfigurations?: Array<ServerValidationConfiguration>;
}
export type ServerGroupValidationConfigurations =
  Array<ServerGroupValidationConfiguration>;
export type ServerId = string;

export interface ServerLaunchConfiguration {
  server?: Server;
  logicalId?: string;
  vpc?: string;
  subnet?: string;
  securityGroup?: string;
  ec2KeyName?: string;
  userData?: UserData;
  instanceType?: string;
  associatePublicIpAddress?: boolean;
  iamInstanceProfileName?: string;
  configureScript?: S3Location;
  configureScriptType?: ScriptType;
}
export type ServerLaunchConfigurations = Array<ServerLaunchConfiguration>;
export type ServerList = Array<Server>;
export interface ServerReplicationConfiguration {
  server?: Server;
  serverReplicationParameters?: ServerReplicationParameters;
}
export type ServerReplicationConfigurations =
  Array<ServerReplicationConfiguration>;
export interface ServerReplicationParameters {
  seedTime?: Date | string;
  frequency?: number;
  runOnce?: boolean;
  licenseType?: LicenseType;
  numberOfRecentAmisToKeep?: number;
  encrypted?: boolean;
  kmsKeyId?: string;
}
export type ServerType = "VirtualMachine";
export interface ServerValidationConfiguration {
  server?: Server;
  validationId?: string;
  name?: string;
  serverValidationStrategy?: ServerValidationStrategy;
  userDataValidationParameters?: UserDataValidationParameters;
}
export type ServerValidationConfigurations =
  Array<ServerValidationConfiguration>;
export interface ServerValidationOutput {
  server?: Server;
}
export type ServerValidationStrategy = "USERDATA";
export interface Source {
  s3Location?: S3Location;
}
export interface SSMOutput {
  s3Location?: S3Location;
}
export interface SSMValidationParameters {
  source?: Source;
  instanceId?: string;
  scriptType?: ScriptType;
  command?: string;
  executionTimeoutSeconds?: number;
  outputS3BucketName?: string;
}
export type StackId = string;

export type StackName = string;

export interface StartAppReplicationRequest {
  appId?: string;
}
export interface StartAppReplicationResponse {}
export interface StartOnDemandAppReplicationRequest {
  appId: string;
  description?: string;
}
export interface StartOnDemandAppReplicationResponse {}
export interface StartOnDemandReplicationRunRequest {
  replicationJobId: string;
  description?: string;
}
export interface StartOnDemandReplicationRunResponse {
  replicationRunId?: string;
}
export interface StopAppReplicationRequest {
  appId?: string;
}
export interface StopAppReplicationResponse {}
export type Subnet = string;

export interface Tag {
  key?: string;
  value?: string;
}
export type TagKey = string;

export type Tags = Array<Tag>;
export type TagValue = string;

export declare class TemporarilyUnavailableException extends Data.TaggedError(
  "TemporarilyUnavailableException",
)<{}> {}
export interface TerminateAppRequest {
  appId?: string;
}
export interface TerminateAppResponse {}
export type Timestamp = Date | string;

export type TotalServerGroups = number;

export type TotalServers = number;

export declare class UnauthorizedOperationException extends Data.TaggedError(
  "UnauthorizedOperationException",
)<{
  readonly message?: string;
}> {}
export interface UpdateAppRequest {
  appId?: string;
  name?: string;
  description?: string;
  roleName?: string;
  serverGroups?: Array<ServerGroup>;
  tags?: Array<Tag>;
}
export interface UpdateAppResponse {
  appSummary?: AppSummary;
  serverGroups?: Array<ServerGroup>;
  tags?: Array<Tag>;
}
export interface UpdateReplicationJobRequest {
  replicationJobId: string;
  frequency?: number;
  nextReplicationRunStartTime?: Date | string;
  licenseType?: LicenseType;
  roleName?: string;
  description?: string;
  numberOfRecentAmisToKeep?: number;
  encrypted?: boolean;
  kmsKeyId?: string;
}
export interface UpdateReplicationJobResponse {}
export interface UserData {
  s3Location?: S3Location;
}
export interface UserDataValidationParameters {
  source?: Source;
  scriptType?: ScriptType;
}
export type ValidationId = string;

export interface ValidationOutput {
  validationId?: string;
  name?: string;
  status?: ValidationStatus;
  statusMessage?: string;
  latestValidationTime?: Date | string;
  appValidationOutput?: AppValidationOutput;
  serverValidationOutput?: ServerValidationOutput;
}
export type ValidationOutputList = Array<ValidationOutput>;
export type ValidationStatus =
  | "ReadyForValidation"
  | "Pending"
  | "InProgress"
  | "Succeeded"
  | "Failed";
export type ValidationStatusMessage = string;

export type VmId = string;

export type VmManagerId = string;

export type VmManagerName = string;

export type VmManagerType = "vSphere" | "scvmm" | "hyperVManager";
export type VmName = string;

export type VmPath = string;

export interface VmServer {
  vmServerAddress?: VmServerAddress;
  vmName?: string;
  vmManagerName?: string;
  vmManagerType?: VmManagerType;
  vmPath?: string;
}
export interface VmServerAddress {
  vmManagerId?: string;
  vmId?: string;
}
export type VmServerAddressList = Array<VmServerAddress>;
export type VPC = string;

export declare namespace CreateApp {
  export type Input = CreateAppRequest;
  export type Output = CreateAppResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace CreateReplicationJob {
  export type Input = CreateReplicationJobRequest;
  export type Output = CreateReplicationJobResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | NoConnectorsAvailableException
    | OperationNotPermittedException
    | ReplicationJobAlreadyExistsException
    | ServerCannotBeReplicatedException
    | TemporarilyUnavailableException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace DeleteApp {
  export type Input = DeleteAppRequest;
  export type Output = DeleteAppResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace DeleteAppLaunchConfiguration {
  export type Input = DeleteAppLaunchConfigurationRequest;
  export type Output = DeleteAppLaunchConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace DeleteAppReplicationConfiguration {
  export type Input = DeleteAppReplicationConfigurationRequest;
  export type Output = DeleteAppReplicationConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace DeleteAppValidationConfiguration {
  export type Input = DeleteAppValidationConfigurationRequest;
  export type Output = DeleteAppValidationConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace DeleteReplicationJob {
  export type Input = DeleteReplicationJobRequest;
  export type Output = DeleteReplicationJobResponse;
  export type Error =
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ReplicationJobNotFoundException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace DeleteServerCatalog {
  export type Input = DeleteServerCatalogRequest;
  export type Output = DeleteServerCatalogResponse;
  export type Error =
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace DisassociateConnector {
  export type Input = DisassociateConnectorRequest;
  export type Output = DisassociateConnectorResponse;
  export type Error =
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GenerateChangeSet {
  export type Input = GenerateChangeSetRequest;
  export type Output = GenerateChangeSetResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GenerateTemplate {
  export type Input = GenerateTemplateRequest;
  export type Output = GenerateTemplateResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetApp {
  export type Input = GetAppRequest;
  export type Output = GetAppResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetAppLaunchConfiguration {
  export type Input = GetAppLaunchConfigurationRequest;
  export type Output = GetAppLaunchConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetAppReplicationConfiguration {
  export type Input = GetAppReplicationConfigurationRequest;
  export type Output = GetAppReplicationConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetAppValidationConfiguration {
  export type Input = GetAppValidationConfigurationRequest;
  export type Output = GetAppValidationConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetAppValidationOutput {
  export type Input = GetAppValidationOutputRequest;
  export type Output = GetAppValidationOutputResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetConnectors {
  export type Input = GetConnectorsRequest;
  export type Output = GetConnectorsResponse;
  export type Error = UnauthorizedOperationException | CommonAwsError;
}

export declare namespace GetReplicationJobs {
  export type Input = GetReplicationJobsRequest;
  export type Output = GetReplicationJobsResponse;
  export type Error =
    | InvalidParameterException
    | MissingRequiredParameterException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetReplicationRuns {
  export type Input = GetReplicationRunsRequest;
  export type Output = GetReplicationRunsResponse;
  export type Error =
    | InvalidParameterException
    | MissingRequiredParameterException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace GetServers {
  export type Input = GetServersRequest;
  export type Output = GetServersResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace ImportAppCatalog {
  export type Input = ImportAppCatalogRequest;
  export type Output = ImportAppCatalogResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace ImportServerCatalog {
  export type Input = ImportServerCatalogRequest;
  export type Output = ImportServerCatalogResponse;
  export type Error =
    | InvalidParameterException
    | MissingRequiredParameterException
    | NoConnectorsAvailableException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace LaunchApp {
  export type Input = LaunchAppRequest;
  export type Output = LaunchAppResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace ListApps {
  export type Input = ListAppsRequest;
  export type Output = ListAppsResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace NotifyAppValidationOutput {
  export type Input = NotifyAppValidationOutputRequest;
  export type Output = NotifyAppValidationOutputResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace PutAppLaunchConfiguration {
  export type Input = PutAppLaunchConfigurationRequest;
  export type Output = PutAppLaunchConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace PutAppReplicationConfiguration {
  export type Input = PutAppReplicationConfigurationRequest;
  export type Output = PutAppReplicationConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace PutAppValidationConfiguration {
  export type Input = PutAppValidationConfigurationRequest;
  export type Output = PutAppValidationConfigurationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace StartAppReplication {
  export type Input = StartAppReplicationRequest;
  export type Output = StartAppReplicationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace StartOnDemandAppReplication {
  export type Input = StartOnDemandAppReplicationRequest;
  export type Output = StartOnDemandAppReplicationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace StartOnDemandReplicationRun {
  export type Input = StartOnDemandReplicationRunRequest;
  export type Output = StartOnDemandReplicationRunResponse;
  export type Error =
    | DryRunOperationException
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ReplicationRunLimitExceededException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace StopAppReplication {
  export type Input = StopAppReplicationRequest;
  export type Output = StopAppReplicationResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace TerminateApp {
  export type Input = TerminateAppRequest;
  export type Output = TerminateAppResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace UpdateApp {
  export type Input = UpdateAppRequest;
  export type Output = UpdateAppResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | UnauthorizedOperationException
    | CommonAwsError;
}

export declare namespace UpdateReplicationJob {
  export type Input = UpdateReplicationJobRequest;
  export type Output = UpdateReplicationJobResponse;
  export type Error =
    | InternalError
    | InvalidParameterException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ReplicationJobNotFoundException
    | ServerCannotBeReplicatedException
    | TemporarilyUnavailableException
    | UnauthorizedOperationException
    | CommonAwsError;
}
