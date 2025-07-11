import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Greengrass extends AWSServiceClient {
  associateRoleToGroup(
    input: AssociateRoleToGroupRequest,
  ): Effect.Effect<
    AssociateRoleToGroupResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  associateServiceRoleToAccount(
    input: AssociateServiceRoleToAccountRequest,
  ): Effect.Effect<
    AssociateServiceRoleToAccountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createConnectorDefinition(
    input: CreateConnectorDefinitionRequest,
  ): Effect.Effect<
    CreateConnectorDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  createConnectorDefinitionVersion(
    input: CreateConnectorDefinitionVersionRequest,
  ): Effect.Effect<
    CreateConnectorDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  createCoreDefinition(
    input: CreateCoreDefinitionRequest,
  ): Effect.Effect<
    CreateCoreDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  createCoreDefinitionVersion(
    input: CreateCoreDefinitionVersionRequest,
  ): Effect.Effect<
    CreateCoreDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    CreateDeploymentResponse,
    BadRequestException | CommonAwsError
  >;
  createDeviceDefinition(
    input: CreateDeviceDefinitionRequest,
  ): Effect.Effect<
    CreateDeviceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  createDeviceDefinitionVersion(
    input: CreateDeviceDefinitionVersionRequest,
  ): Effect.Effect<
    CreateDeviceDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  createFunctionDefinition(
    input: CreateFunctionDefinitionRequest,
  ): Effect.Effect<
    CreateFunctionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  createFunctionDefinitionVersion(
    input: CreateFunctionDefinitionVersionRequest,
  ): Effect.Effect<
    CreateFunctionDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<CreateGroupResponse, BadRequestException | CommonAwsError>;
  createGroupCertificateAuthority(
    input: CreateGroupCertificateAuthorityRequest,
  ): Effect.Effect<
    CreateGroupCertificateAuthorityResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createGroupVersion(
    input: CreateGroupVersionRequest,
  ): Effect.Effect<
    CreateGroupVersionResponse,
    BadRequestException | CommonAwsError
  >;
  createLoggerDefinition(
    input: CreateLoggerDefinitionRequest,
  ): Effect.Effect<
    CreateLoggerDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  createLoggerDefinitionVersion(
    input: CreateLoggerDefinitionVersionRequest,
  ): Effect.Effect<
    CreateLoggerDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  createResourceDefinition(
    input: CreateResourceDefinitionRequest,
  ): Effect.Effect<
    CreateResourceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  createResourceDefinitionVersion(
    input: CreateResourceDefinitionVersionRequest,
  ): Effect.Effect<
    CreateResourceDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  createSoftwareUpdateJob(
    input: CreateSoftwareUpdateJobRequest,
  ): Effect.Effect<
    CreateSoftwareUpdateJobResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createSubscriptionDefinition(
    input: CreateSubscriptionDefinitionRequest,
  ): Effect.Effect<
    CreateSubscriptionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  createSubscriptionDefinitionVersion(
    input: CreateSubscriptionDefinitionVersionRequest,
  ): Effect.Effect<
    CreateSubscriptionDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  deleteConnectorDefinition(
    input: DeleteConnectorDefinitionRequest,
  ): Effect.Effect<
    DeleteConnectorDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  deleteCoreDefinition(
    input: DeleteCoreDefinitionRequest,
  ): Effect.Effect<
    DeleteCoreDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  deleteDeviceDefinition(
    input: DeleteDeviceDefinitionRequest,
  ): Effect.Effect<
    DeleteDeviceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  deleteFunctionDefinition(
    input: DeleteFunctionDefinitionRequest,
  ): Effect.Effect<
    DeleteFunctionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<DeleteGroupResponse, BadRequestException | CommonAwsError>;
  deleteLoggerDefinition(
    input: DeleteLoggerDefinitionRequest,
  ): Effect.Effect<
    DeleteLoggerDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  deleteResourceDefinition(
    input: DeleteResourceDefinitionRequest,
  ): Effect.Effect<
    DeleteResourceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  deleteSubscriptionDefinition(
    input: DeleteSubscriptionDefinitionRequest,
  ): Effect.Effect<
    DeleteSubscriptionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  disassociateRoleFromGroup(
    input: DisassociateRoleFromGroupRequest,
  ): Effect.Effect<
    DisassociateRoleFromGroupResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  disassociateServiceRoleFromAccount(
    input: DisassociateServiceRoleFromAccountRequest,
  ): Effect.Effect<
    DisassociateServiceRoleFromAccountResponse,
    InternalServerErrorException | CommonAwsError
  >;
  getAssociatedRole(
    input: GetAssociatedRoleRequest,
  ): Effect.Effect<
    GetAssociatedRoleResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getBulkDeploymentStatus(
    input: GetBulkDeploymentStatusRequest,
  ): Effect.Effect<
    GetBulkDeploymentStatusResponse,
    BadRequestException | CommonAwsError
  >;
  getConnectivityInfo(
    input: GetConnectivityInfoRequest,
  ): Effect.Effect<
    GetConnectivityInfoResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getConnectorDefinition(
    input: GetConnectorDefinitionRequest,
  ): Effect.Effect<
    GetConnectorDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  getConnectorDefinitionVersion(
    input: GetConnectorDefinitionVersionRequest,
  ): Effect.Effect<
    GetConnectorDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getCoreDefinition(
    input: GetCoreDefinitionRequest,
  ): Effect.Effect<
    GetCoreDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  getCoreDefinitionVersion(
    input: GetCoreDefinitionVersionRequest,
  ): Effect.Effect<
    GetCoreDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getDeploymentStatus(
    input: GetDeploymentStatusRequest,
  ): Effect.Effect<
    GetDeploymentStatusResponse,
    BadRequestException | CommonAwsError
  >;
  getDeviceDefinition(
    input: GetDeviceDefinitionRequest,
  ): Effect.Effect<
    GetDeviceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  getDeviceDefinitionVersion(
    input: GetDeviceDefinitionVersionRequest,
  ): Effect.Effect<
    GetDeviceDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getFunctionDefinition(
    input: GetFunctionDefinitionRequest,
  ): Effect.Effect<
    GetFunctionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  getFunctionDefinitionVersion(
    input: GetFunctionDefinitionVersionRequest,
  ): Effect.Effect<
    GetFunctionDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getGroup(
    input: GetGroupRequest,
  ): Effect.Effect<GetGroupResponse, BadRequestException | CommonAwsError>;
  getGroupCertificateAuthority(
    input: GetGroupCertificateAuthorityRequest,
  ): Effect.Effect<
    GetGroupCertificateAuthorityResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getGroupCertificateConfiguration(
    input: GetGroupCertificateConfigurationRequest,
  ): Effect.Effect<
    GetGroupCertificateConfigurationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getGroupVersion(
    input: GetGroupVersionRequest,
  ): Effect.Effect<
    GetGroupVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getLoggerDefinition(
    input: GetLoggerDefinitionRequest,
  ): Effect.Effect<
    GetLoggerDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  getLoggerDefinitionVersion(
    input: GetLoggerDefinitionVersionRequest,
  ): Effect.Effect<
    GetLoggerDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getResourceDefinition(
    input: GetResourceDefinitionRequest,
  ): Effect.Effect<
    GetResourceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  getResourceDefinitionVersion(
    input: GetResourceDefinitionVersionRequest,
  ): Effect.Effect<
    GetResourceDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getServiceRoleForAccount(
    input: GetServiceRoleForAccountRequest,
  ): Effect.Effect<
    GetServiceRoleForAccountResponse,
    InternalServerErrorException | CommonAwsError
  >;
  getSubscriptionDefinition(
    input: GetSubscriptionDefinitionRequest,
  ): Effect.Effect<
    GetSubscriptionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  getSubscriptionDefinitionVersion(
    input: GetSubscriptionDefinitionVersionRequest,
  ): Effect.Effect<
    GetSubscriptionDefinitionVersionResponse,
    BadRequestException | CommonAwsError
  >;
  getThingRuntimeConfiguration(
    input: GetThingRuntimeConfigurationRequest,
  ): Effect.Effect<
    GetThingRuntimeConfigurationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listBulkDeploymentDetailedReports(
    input: ListBulkDeploymentDetailedReportsRequest,
  ): Effect.Effect<
    ListBulkDeploymentDetailedReportsResponse,
    BadRequestException | CommonAwsError
  >;
  listBulkDeployments(
    input: ListBulkDeploymentsRequest,
  ): Effect.Effect<
    ListBulkDeploymentsResponse,
    BadRequestException | CommonAwsError
  >;
  listConnectorDefinitions(
    input: ListConnectorDefinitionsRequest,
  ): Effect.Effect<ListConnectorDefinitionsResponse, CommonAwsError>;
  listConnectorDefinitionVersions(
    input: ListConnectorDefinitionVersionsRequest,
  ): Effect.Effect<
    ListConnectorDefinitionVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listCoreDefinitions(
    input: ListCoreDefinitionsRequest,
  ): Effect.Effect<ListCoreDefinitionsResponse, CommonAwsError>;
  listCoreDefinitionVersions(
    input: ListCoreDefinitionVersionsRequest,
  ): Effect.Effect<
    ListCoreDefinitionVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listDeployments(
    input: ListDeploymentsRequest,
  ): Effect.Effect<
    ListDeploymentsResponse,
    BadRequestException | CommonAwsError
  >;
  listDeviceDefinitions(
    input: ListDeviceDefinitionsRequest,
  ): Effect.Effect<ListDeviceDefinitionsResponse, CommonAwsError>;
  listDeviceDefinitionVersions(
    input: ListDeviceDefinitionVersionsRequest,
  ): Effect.Effect<
    ListDeviceDefinitionVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listFunctionDefinitions(
    input: ListFunctionDefinitionsRequest,
  ): Effect.Effect<ListFunctionDefinitionsResponse, CommonAwsError>;
  listFunctionDefinitionVersions(
    input: ListFunctionDefinitionVersionsRequest,
  ): Effect.Effect<
    ListFunctionDefinitionVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listGroupCertificateAuthorities(
    input: ListGroupCertificateAuthoritiesRequest,
  ): Effect.Effect<
    ListGroupCertificateAuthoritiesResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<ListGroupsResponse, CommonAwsError>;
  listGroupVersions(
    input: ListGroupVersionsRequest,
  ): Effect.Effect<
    ListGroupVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listLoggerDefinitions(
    input: ListLoggerDefinitionsRequest,
  ): Effect.Effect<ListLoggerDefinitionsResponse, CommonAwsError>;
  listLoggerDefinitionVersions(
    input: ListLoggerDefinitionVersionsRequest,
  ): Effect.Effect<
    ListLoggerDefinitionVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listResourceDefinitions(
    input: ListResourceDefinitionsRequest,
  ): Effect.Effect<ListResourceDefinitionsResponse, CommonAwsError>;
  listResourceDefinitionVersions(
    input: ListResourceDefinitionVersionsRequest,
  ): Effect.Effect<
    ListResourceDefinitionVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listSubscriptionDefinitions(
    input: ListSubscriptionDefinitionsRequest,
  ): Effect.Effect<ListSubscriptionDefinitionsResponse, CommonAwsError>;
  listSubscriptionDefinitionVersions(
    input: ListSubscriptionDefinitionVersionsRequest,
  ): Effect.Effect<
    ListSubscriptionDefinitionVersionsResponse,
    BadRequestException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    BadRequestException | CommonAwsError
  >;
  resetDeployments(
    input: ResetDeploymentsRequest,
  ): Effect.Effect<
    ResetDeploymentsResponse,
    BadRequestException | CommonAwsError
  >;
  startBulkDeployment(
    input: StartBulkDeploymentRequest,
  ): Effect.Effect<
    StartBulkDeploymentResponse,
    BadRequestException | CommonAwsError
  >;
  stopBulkDeployment(
    input: StopBulkDeploymentRequest,
  ): Effect.Effect<
    StopBulkDeploymentResponse,
    BadRequestException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<{}, BadRequestException | CommonAwsError>;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<{}, BadRequestException | CommonAwsError>;
  updateConnectivityInfo(
    input: UpdateConnectivityInfoRequest,
  ): Effect.Effect<
    UpdateConnectivityInfoResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateConnectorDefinition(
    input: UpdateConnectorDefinitionRequest,
  ): Effect.Effect<
    UpdateConnectorDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  updateCoreDefinition(
    input: UpdateCoreDefinitionRequest,
  ): Effect.Effect<
    UpdateCoreDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  updateDeviceDefinition(
    input: UpdateDeviceDefinitionRequest,
  ): Effect.Effect<
    UpdateDeviceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  updateFunctionDefinition(
    input: UpdateFunctionDefinitionRequest,
  ): Effect.Effect<
    UpdateFunctionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<UpdateGroupResponse, BadRequestException | CommonAwsError>;
  updateGroupCertificateConfiguration(
    input: UpdateGroupCertificateConfigurationRequest,
  ): Effect.Effect<
    UpdateGroupCertificateConfigurationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateLoggerDefinition(
    input: UpdateLoggerDefinitionRequest,
  ): Effect.Effect<
    UpdateLoggerDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  updateResourceDefinition(
    input: UpdateResourceDefinitionRequest,
  ): Effect.Effect<
    UpdateResourceDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  updateSubscriptionDefinition(
    input: UpdateSubscriptionDefinitionRequest,
  ): Effect.Effect<
    UpdateSubscriptionDefinitionResponse,
    BadRequestException | CommonAwsError
  >;
  updateThingRuntimeConfiguration(
    input: UpdateThingRuntimeConfigurationRequest,
  ): Effect.Effect<
    UpdateThingRuntimeConfigurationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
}

export type __boolean = boolean;

export type __integer = number;

export type __listOf__string = Array<string>;
export type __listOfConnectivityInfo = Array<ConnectivityInfo>;
export type __listOfConnector = Array<Connector>;
export type __listOfCore = Array<Core>;
export type __listOfDefinitionInformation = Array<DefinitionInformation>;
export type __listOfDevice = Array<Device>;
export type __listOfFunction = Array<GreengrassFunction>;
export type __listOfGroupCertificateAuthorityProperties =
  Array<GroupCertificateAuthorityProperties>;
export type __listOfGroupInformation = Array<GroupInformation>;
export type __listOfLogger = Array<Logger>;
export type __listOfResource = Array<Resource>;
export type __listOfResourceAccessPolicy = Array<ResourceAccessPolicy>;
export type __listOfSubscription = Array<Subscription>;
export type __listOfVersionInformation = Array<VersionInformation>;
export type __mapOf__string = Record<string, string>;
export type __string = string;

export interface AssociateRoleToGroupRequest {
  GroupId: string;
  RoleArn: string;
}
export interface AssociateRoleToGroupResponse {
  AssociatedAt?: string;
}
export interface AssociateServiceRoleToAccountRequest {
  RoleArn: string;
}
export interface AssociateServiceRoleToAccountResponse {
  AssociatedAt?: string;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly ErrorDetails?: Array<ErrorDetail>;
  readonly Message?: string;
}> {}
export interface BulkDeployment {
  BulkDeploymentArn?: string;
  BulkDeploymentId?: string;
  CreatedAt?: string;
}
export interface BulkDeploymentMetrics {
  InvalidInputRecords?: number;
  RecordsProcessed?: number;
  RetryAttempts?: number;
}
export interface BulkDeploymentResult {
  CreatedAt?: string;
  DeploymentArn?: string;
  DeploymentId?: string;
  DeploymentStatus?: string;
  DeploymentType?: DeploymentType;
  ErrorDetails?: Array<ErrorDetail>;
  ErrorMessage?: string;
  GroupArn?: string;
}
export type BulkDeploymentResults = Array<BulkDeploymentResult>;
export type BulkDeployments = Array<BulkDeployment>;
export type BulkDeploymentStatus =
  | "Initializing"
  | "Running"
  | "Completed"
  | "Stopping"
  | "Stopped"
  | "Failed";
export type ConfigurationSyncStatus = "InSync" | "OutOfSync";
export interface ConnectivityInfo {
  HostAddress?: string;
  Id?: string;
  Metadata?: string;
  PortNumber?: number;
}
export interface Connector {
  ConnectorArn: string;
  Id: string;
  Parameters?: Record<string, string>;
}
export interface ConnectorDefinitionVersion {
  Connectors?: Array<Connector>;
}
export interface Core {
  CertificateArn: string;
  Id: string;
  SyncShadow?: boolean;
  ThingArn: string;
}
export interface CoreDefinitionVersion {
  Cores?: Array<Core>;
}
export interface CreateConnectorDefinitionRequest {
  AmznClientToken?: string;
  InitialVersion?: ConnectorDefinitionVersion;
  Name?: string;
  tags?: Record<string, string>;
}
export interface CreateConnectorDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateConnectorDefinitionVersionRequest {
  AmznClientToken?: string;
  ConnectorDefinitionId: string;
  Connectors?: Array<Connector>;
}
export interface CreateConnectorDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface CreateCoreDefinitionRequest {
  AmznClientToken?: string;
  InitialVersion?: CoreDefinitionVersion;
  Name?: string;
  tags?: Record<string, string>;
}
export interface CreateCoreDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateCoreDefinitionVersionRequest {
  AmznClientToken?: string;
  CoreDefinitionId: string;
  Cores?: Array<Core>;
}
export interface CreateCoreDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface CreateDeploymentRequest {
  AmznClientToken?: string;
  DeploymentId?: string;
  DeploymentType: DeploymentType;
  GroupId: string;
  GroupVersionId?: string;
}
export interface CreateDeploymentResponse {
  DeploymentArn?: string;
  DeploymentId?: string;
}
export interface CreateDeviceDefinitionRequest {
  AmznClientToken?: string;
  InitialVersion?: DeviceDefinitionVersion;
  Name?: string;
  tags?: Record<string, string>;
}
export interface CreateDeviceDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateDeviceDefinitionVersionRequest {
  AmznClientToken?: string;
  DeviceDefinitionId: string;
  Devices?: Array<Device>;
}
export interface CreateDeviceDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface CreateFunctionDefinitionRequest {
  AmznClientToken?: string;
  InitialVersion?: FunctionDefinitionVersion;
  Name?: string;
  tags?: Record<string, string>;
}
export interface CreateFunctionDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateFunctionDefinitionVersionRequest {
  AmznClientToken?: string;
  DefaultConfig?: FunctionDefaultConfig;
  FunctionDefinitionId: string;
  Functions?: Array<GreengrassFunction>;
}
export interface CreateFunctionDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface CreateGroupCertificateAuthorityRequest {
  AmznClientToken?: string;
  GroupId: string;
}
export interface CreateGroupCertificateAuthorityResponse {
  GroupCertificateAuthorityArn?: string;
}
export interface CreateGroupRequest {
  AmznClientToken?: string;
  InitialVersion?: GroupVersion;
  Name: string;
  tags?: Record<string, string>;
}
export interface CreateGroupResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateGroupVersionRequest {
  AmznClientToken?: string;
  ConnectorDefinitionVersionArn?: string;
  CoreDefinitionVersionArn?: string;
  DeviceDefinitionVersionArn?: string;
  FunctionDefinitionVersionArn?: string;
  GroupId: string;
  LoggerDefinitionVersionArn?: string;
  ResourceDefinitionVersionArn?: string;
  SubscriptionDefinitionVersionArn?: string;
}
export interface CreateGroupVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface CreateLoggerDefinitionRequest {
  AmznClientToken?: string;
  InitialVersion?: LoggerDefinitionVersion;
  Name?: string;
  tags?: Record<string, string>;
}
export interface CreateLoggerDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateLoggerDefinitionVersionRequest {
  AmznClientToken?: string;
  LoggerDefinitionId: string;
  Loggers?: Array<Logger>;
}
export interface CreateLoggerDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface CreateResourceDefinitionRequest {
  AmznClientToken?: string;
  InitialVersion?: ResourceDefinitionVersion;
  Name?: string;
  tags?: Record<string, string>;
}
export interface CreateResourceDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateResourceDefinitionVersionRequest {
  AmznClientToken?: string;
  ResourceDefinitionId: string;
  Resources?: Array<Resource>;
}
export interface CreateResourceDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface CreateSoftwareUpdateJobRequest {
  AmznClientToken?: string;
  S3UrlSignerRole: string;
  SoftwareToUpdate: SoftwareToUpdate;
  UpdateAgentLogLevel?: UpdateAgentLogLevel;
  UpdateTargets: Array<string>;
  UpdateTargetsArchitecture: UpdateTargetsArchitecture;
  UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem;
}
export interface CreateSoftwareUpdateJobResponse {
  IotJobArn?: string;
  IotJobId?: string;
  PlatformSoftwareVersion?: string;
}
export interface CreateSubscriptionDefinitionRequest {
  AmznClientToken?: string;
  InitialVersion?: SubscriptionDefinitionVersion;
  Name?: string;
  tags?: Record<string, string>;
}
export interface CreateSubscriptionDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface CreateSubscriptionDefinitionVersionRequest {
  AmznClientToken?: string;
  SubscriptionDefinitionId: string;
  Subscriptions?: Array<Subscription>;
}
export interface CreateSubscriptionDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export interface DefinitionInformation {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface DeleteConnectorDefinitionRequest {
  ConnectorDefinitionId: string;
}
export interface DeleteConnectorDefinitionResponse {}
export interface DeleteCoreDefinitionRequest {
  CoreDefinitionId: string;
}
export interface DeleteCoreDefinitionResponse {}
export interface DeleteDeviceDefinitionRequest {
  DeviceDefinitionId: string;
}
export interface DeleteDeviceDefinitionResponse {}
export interface DeleteFunctionDefinitionRequest {
  FunctionDefinitionId: string;
}
export interface DeleteFunctionDefinitionResponse {}
export interface DeleteGroupRequest {
  GroupId: string;
}
export interface DeleteGroupResponse {}
export interface DeleteLoggerDefinitionRequest {
  LoggerDefinitionId: string;
}
export interface DeleteLoggerDefinitionResponse {}
export interface DeleteResourceDefinitionRequest {
  ResourceDefinitionId: string;
}
export interface DeleteResourceDefinitionResponse {}
export interface DeleteSubscriptionDefinitionRequest {
  SubscriptionDefinitionId: string;
}
export interface DeleteSubscriptionDefinitionResponse {}
export interface Deployment {
  CreatedAt?: string;
  DeploymentArn?: string;
  DeploymentId?: string;
  DeploymentType?: DeploymentType;
  GroupArn?: string;
}
export type Deployments = Array<Deployment>;
export type DeploymentType =
  | "NewDeployment"
  | "Redeployment"
  | "ResetDeployment"
  | "ForceResetDeployment";
export interface Device {
  CertificateArn: string;
  Id: string;
  SyncShadow?: boolean;
  ThingArn: string;
}
export interface DeviceDefinitionVersion {
  Devices?: Array<Device>;
}
export interface DisassociateRoleFromGroupRequest {
  GroupId: string;
}
export interface DisassociateRoleFromGroupResponse {
  DisassociatedAt?: string;
}
export interface DisassociateServiceRoleFromAccountRequest {}
export interface DisassociateServiceRoleFromAccountResponse {
  DisassociatedAt?: string;
}
export type EncodingType = "binary" | "json";
export interface ErrorDetail {
  DetailedErrorCode?: string;
  DetailedErrorMessage?: string;
}
export type ErrorDetails = Array<ErrorDetail>;
export interface GreengrassFunction {
  FunctionArn?: string;
  FunctionConfiguration?: FunctionConfiguration;
  Id: string;
}
export interface FunctionConfiguration {
  EncodingType?: EncodingType;
  Environment?: FunctionConfigurationEnvironment;
  ExecArgs?: string;
  Executable?: string;
  MemorySize?: number;
  Pinned?: boolean;
  Timeout?: number;
  FunctionRuntimeOverride?: string;
}
export interface FunctionConfigurationEnvironment {
  AccessSysfs?: boolean;
  Execution?: FunctionExecutionConfig;
  ResourceAccessPolicies?: Array<ResourceAccessPolicy>;
  Variables?: Record<string, string>;
}
export interface FunctionDefaultConfig {
  Execution?: FunctionDefaultExecutionConfig;
}
export interface FunctionDefaultExecutionConfig {
  IsolationMode?: FunctionIsolationMode;
  RunAs?: FunctionRunAsConfig;
}
export interface FunctionDefinitionVersion {
  DefaultConfig?: FunctionDefaultConfig;
  Functions?: Array<GreengrassFunction>;
}
export interface FunctionExecutionConfig {
  IsolationMode?: FunctionIsolationMode;
  RunAs?: FunctionRunAsConfig;
}
export type FunctionIsolationMode = "GreengrassContainer" | "NoContainer";
export interface FunctionRunAsConfig {
  Gid?: number;
  Uid?: number;
}
export interface GetAssociatedRoleRequest {
  GroupId: string;
}
export interface GetAssociatedRoleResponse {
  AssociatedAt?: string;
  RoleArn?: string;
}
export interface GetBulkDeploymentStatusRequest {
  BulkDeploymentId: string;
}
export interface GetBulkDeploymentStatusResponse {
  BulkDeploymentMetrics?: BulkDeploymentMetrics;
  BulkDeploymentStatus?: BulkDeploymentStatus;
  CreatedAt?: string;
  ErrorDetails?: Array<ErrorDetail>;
  ErrorMessage?: string;
  tags?: Record<string, string>;
}
export interface GetConnectivityInfoRequest {
  ThingName: string;
}
export interface GetConnectivityInfoResponse {
  ConnectivityInfo?: Array<ConnectivityInfo>;
  Message?: string;
}
export interface GetConnectorDefinitionRequest {
  ConnectorDefinitionId: string;
}
export interface GetConnectorDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetConnectorDefinitionVersionRequest {
  ConnectorDefinitionId: string;
  ConnectorDefinitionVersionId: string;
  NextToken?: string;
}
export interface GetConnectorDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: ConnectorDefinitionVersion;
  Id?: string;
  NextToken?: string;
  Version?: string;
}
export interface GetCoreDefinitionRequest {
  CoreDefinitionId: string;
}
export interface GetCoreDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetCoreDefinitionVersionRequest {
  CoreDefinitionId: string;
  CoreDefinitionVersionId: string;
}
export interface GetCoreDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: CoreDefinitionVersion;
  Id?: string;
  NextToken?: string;
  Version?: string;
}
export interface GetDeploymentStatusRequest {
  DeploymentId: string;
  GroupId: string;
}
export interface GetDeploymentStatusResponse {
  DeploymentStatus?: string;
  DeploymentType?: DeploymentType;
  ErrorDetails?: Array<ErrorDetail>;
  ErrorMessage?: string;
  UpdatedAt?: string;
}
export interface GetDeviceDefinitionRequest {
  DeviceDefinitionId: string;
}
export interface GetDeviceDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetDeviceDefinitionVersionRequest {
  DeviceDefinitionId: string;
  DeviceDefinitionVersionId: string;
  NextToken?: string;
}
export interface GetDeviceDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: DeviceDefinitionVersion;
  Id?: string;
  NextToken?: string;
  Version?: string;
}
export interface GetFunctionDefinitionRequest {
  FunctionDefinitionId: string;
}
export interface GetFunctionDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetFunctionDefinitionVersionRequest {
  FunctionDefinitionId: string;
  FunctionDefinitionVersionId: string;
  NextToken?: string;
}
export interface GetFunctionDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: FunctionDefinitionVersion;
  Id?: string;
  NextToken?: string;
  Version?: string;
}
export interface GetGroupCertificateAuthorityRequest {
  CertificateAuthorityId: string;
  GroupId: string;
}
export interface GetGroupCertificateAuthorityResponse {
  GroupCertificateAuthorityArn?: string;
  GroupCertificateAuthorityId?: string;
  PemEncodedCertificate?: string;
}
export interface GetGroupCertificateConfigurationRequest {
  GroupId: string;
}
export interface GetGroupCertificateConfigurationResponse {
  CertificateAuthorityExpiryInMilliseconds?: string;
  CertificateExpiryInMilliseconds?: string;
  GroupId?: string;
}
export interface GetGroupRequest {
  GroupId: string;
}
export interface GetGroupResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetGroupVersionRequest {
  GroupId: string;
  GroupVersionId: string;
}
export interface GetGroupVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: GroupVersion;
  Id?: string;
  Version?: string;
}
export interface GetLoggerDefinitionRequest {
  LoggerDefinitionId: string;
}
export interface GetLoggerDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetLoggerDefinitionVersionRequest {
  LoggerDefinitionId: string;
  LoggerDefinitionVersionId: string;
  NextToken?: string;
}
export interface GetLoggerDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: LoggerDefinitionVersion;
  Id?: string;
  Version?: string;
}
export interface GetResourceDefinitionRequest {
  ResourceDefinitionId: string;
}
export interface GetResourceDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetResourceDefinitionVersionRequest {
  ResourceDefinitionId: string;
  ResourceDefinitionVersionId: string;
}
export interface GetResourceDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: ResourceDefinitionVersion;
  Id?: string;
  Version?: string;
}
export interface GetServiceRoleForAccountRequest {}
export interface GetServiceRoleForAccountResponse {
  AssociatedAt?: string;
  RoleArn?: string;
}
export interface GetSubscriptionDefinitionRequest {
  SubscriptionDefinitionId: string;
}
export interface GetSubscriptionDefinitionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
  tags?: Record<string, string>;
}
export interface GetSubscriptionDefinitionVersionRequest {
  NextToken?: string;
  SubscriptionDefinitionId: string;
  SubscriptionDefinitionVersionId: string;
}
export interface GetSubscriptionDefinitionVersionResponse {
  Arn?: string;
  CreationTimestamp?: string;
  Definition?: SubscriptionDefinitionVersion;
  Id?: string;
  NextToken?: string;
  Version?: string;
}
export interface GetThingRuntimeConfigurationRequest {
  ThingName: string;
}
export interface GetThingRuntimeConfigurationResponse {
  RuntimeConfiguration?: RuntimeConfiguration;
}
export interface GroupCertificateAuthorityProperties {
  GroupCertificateAuthorityArn?: string;
  GroupCertificateAuthorityId?: string;
}
export interface GroupInformation {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  LastUpdatedTimestamp?: string;
  LatestVersion?: string;
  LatestVersionArn?: string;
  Name?: string;
}
export interface GroupOwnerSetting {
  AutoAddGroupOwner?: boolean;
  GroupOwner?: string;
}
export interface GroupVersion {
  ConnectorDefinitionVersionArn?: string;
  CoreDefinitionVersionArn?: string;
  DeviceDefinitionVersionArn?: string;
  FunctionDefinitionVersionArn?: string;
  LoggerDefinitionVersionArn?: string;
  ResourceDefinitionVersionArn?: string;
  SubscriptionDefinitionVersionArn?: string;
}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly ErrorDetails?: Array<ErrorDetail>;
  readonly Message?: string;
}> {}
export interface ListBulkDeploymentDetailedReportsRequest {
  BulkDeploymentId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListBulkDeploymentDetailedReportsResponse {
  Deployments?: Array<BulkDeploymentResult>;
  NextToken?: string;
}
export interface ListBulkDeploymentsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListBulkDeploymentsResponse {
  BulkDeployments?: Array<BulkDeployment>;
  NextToken?: string;
}
export interface ListConnectorDefinitionsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListConnectorDefinitionsResponse {
  Definitions?: Array<DefinitionInformation>;
  NextToken?: string;
}
export interface ListConnectorDefinitionVersionsRequest {
  ConnectorDefinitionId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListConnectorDefinitionVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListCoreDefinitionsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListCoreDefinitionsResponse {
  Definitions?: Array<DefinitionInformation>;
  NextToken?: string;
}
export interface ListCoreDefinitionVersionsRequest {
  CoreDefinitionId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListCoreDefinitionVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListDeploymentsRequest {
  GroupId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListDeploymentsResponse {
  Deployments?: Array<Deployment>;
  NextToken?: string;
}
export interface ListDeviceDefinitionsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListDeviceDefinitionsResponse {
  Definitions?: Array<DefinitionInformation>;
  NextToken?: string;
}
export interface ListDeviceDefinitionVersionsRequest {
  DeviceDefinitionId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListDeviceDefinitionVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListFunctionDefinitionsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListFunctionDefinitionsResponse {
  Definitions?: Array<DefinitionInformation>;
  NextToken?: string;
}
export interface ListFunctionDefinitionVersionsRequest {
  FunctionDefinitionId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListFunctionDefinitionVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListGroupCertificateAuthoritiesRequest {
  GroupId: string;
}
export interface ListGroupCertificateAuthoritiesResponse {
  GroupCertificateAuthorities?: Array<GroupCertificateAuthorityProperties>;
}
export interface ListGroupsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListGroupsResponse {
  Groups?: Array<GroupInformation>;
  NextToken?: string;
}
export interface ListGroupVersionsRequest {
  GroupId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListGroupVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListLoggerDefinitionsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListLoggerDefinitionsResponse {
  Definitions?: Array<DefinitionInformation>;
  NextToken?: string;
}
export interface ListLoggerDefinitionVersionsRequest {
  LoggerDefinitionId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface ListLoggerDefinitionVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListResourceDefinitionsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListResourceDefinitionsResponse {
  Definitions?: Array<DefinitionInformation>;
  NextToken?: string;
}
export interface ListResourceDefinitionVersionsRequest {
  MaxResults?: string;
  NextToken?: string;
  ResourceDefinitionId: string;
}
export interface ListResourceDefinitionVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListSubscriptionDefinitionsRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface ListSubscriptionDefinitionsResponse {
  Definitions?: Array<DefinitionInformation>;
  NextToken?: string;
}
export interface ListSubscriptionDefinitionVersionsRequest {
  MaxResults?: string;
  NextToken?: string;
  SubscriptionDefinitionId: string;
}
export interface ListSubscriptionDefinitionVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionInformation>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface LocalDeviceResourceData {
  GroupOwnerSetting?: GroupOwnerSetting;
  SourcePath?: string;
}
export interface LocalVolumeResourceData {
  DestinationPath?: string;
  GroupOwnerSetting?: GroupOwnerSetting;
  SourcePath?: string;
}
export interface Logger {
  Component: LoggerComponent;
  Id: string;
  Level: LoggerLevel;
  Space?: number;
  Type: LoggerType;
}
export type LoggerComponent = "GreengrassSystem" | "Lambda";
export interface LoggerDefinitionVersion {
  Loggers?: Array<Logger>;
}
export type LoggerLevel = "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
export type LoggerType = "FileSystem" | "AWSCloudWatch";
export type Permission = "ro" | "rw";
export interface ResetDeploymentsRequest {
  AmznClientToken?: string;
  Force?: boolean;
  GroupId: string;
}
export interface ResetDeploymentsResponse {
  DeploymentArn?: string;
  DeploymentId?: string;
}
export interface Resource {
  Id: string;
  Name: string;
  ResourceDataContainer: ResourceDataContainer;
}
export interface ResourceAccessPolicy {
  Permission?: Permission;
  ResourceId: string;
}
export interface ResourceDataContainer {
  LocalDeviceResourceData?: LocalDeviceResourceData;
  LocalVolumeResourceData?: LocalVolumeResourceData;
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}
export interface ResourceDefinitionVersion {
  Resources?: Array<Resource>;
}
export interface ResourceDownloadOwnerSetting {
  GroupOwner: string;
  GroupPermission: Permission;
}
export interface RuntimeConfiguration {
  TelemetryConfiguration?: TelemetryConfiguration;
}
export interface S3MachineLearningModelResourceData {
  DestinationPath?: string;
  OwnerSetting?: ResourceDownloadOwnerSetting;
  S3Uri?: string;
}
export type S3UrlSignerRole = string;

export interface SageMakerMachineLearningModelResourceData {
  DestinationPath?: string;
  OwnerSetting?: ResourceDownloadOwnerSetting;
  SageMakerJobArn?: string;
}
export interface SecretsManagerSecretResourceData {
  ARN?: string;
  AdditionalStagingLabelsToDownload?: Array<string>;
}
export type SoftwareToUpdate = "core" | "ota_agent";
export interface StartBulkDeploymentRequest {
  AmznClientToken?: string;
  ExecutionRoleArn: string;
  InputFileUri: string;
  tags?: Record<string, string>;
}
export interface StartBulkDeploymentResponse {
  BulkDeploymentArn?: string;
  BulkDeploymentId?: string;
}
export interface StopBulkDeploymentRequest {
  BulkDeploymentId: string;
}
export interface StopBulkDeploymentResponse {}
export interface Subscription {
  Id: string;
  Source: string;
  Subject: string;
  Target: string;
}
export interface SubscriptionDefinitionVersion {
  Subscriptions?: Array<Subscription>;
}
export interface TagResourceRequest {
  ResourceArn: string;
  tags?: Record<string, string>;
}
export type Tags = Record<string, string>;
export type Telemetry = "On" | "Off";
export interface TelemetryConfiguration {
  ConfigurationSyncStatus?: ConfigurationSyncStatus;
  Telemetry: Telemetry;
}
export interface TelemetryConfigurationUpdate {
  Telemetry: Telemetry;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export type UpdateAgentLogLevel =
  | "NONE"
  | "TRACE"
  | "DEBUG"
  | "VERBOSE"
  | "INFO"
  | "WARN"
  | "ERROR"
  | "FATAL";
export interface UpdateConnectivityInfoRequest {
  ConnectivityInfo?: Array<ConnectivityInfo>;
  ThingName: string;
}
export interface UpdateConnectivityInfoResponse {
  Message?: string;
  Version?: string;
}
export interface UpdateConnectorDefinitionRequest {
  ConnectorDefinitionId: string;
  Name?: string;
}
export interface UpdateConnectorDefinitionResponse {}
export interface UpdateCoreDefinitionRequest {
  CoreDefinitionId: string;
  Name?: string;
}
export interface UpdateCoreDefinitionResponse {}
export interface UpdateDeviceDefinitionRequest {
  DeviceDefinitionId: string;
  Name?: string;
}
export interface UpdateDeviceDefinitionResponse {}
export interface UpdateFunctionDefinitionRequest {
  FunctionDefinitionId: string;
  Name?: string;
}
export interface UpdateFunctionDefinitionResponse {}
export interface UpdateGroupCertificateConfigurationRequest {
  CertificateExpiryInMilliseconds?: string;
  GroupId: string;
}
export interface UpdateGroupCertificateConfigurationResponse {
  CertificateAuthorityExpiryInMilliseconds?: string;
  CertificateExpiryInMilliseconds?: string;
  GroupId?: string;
}
export interface UpdateGroupRequest {
  GroupId: string;
  Name?: string;
}
export interface UpdateGroupResponse {}
export interface UpdateLoggerDefinitionRequest {
  LoggerDefinitionId: string;
  Name?: string;
}
export interface UpdateLoggerDefinitionResponse {}
export interface UpdateResourceDefinitionRequest {
  Name?: string;
  ResourceDefinitionId: string;
}
export interface UpdateResourceDefinitionResponse {}
export interface UpdateSubscriptionDefinitionRequest {
  Name?: string;
  SubscriptionDefinitionId: string;
}
export interface UpdateSubscriptionDefinitionResponse {}
export type UpdateTargets = Array<string>;
export type UpdateTargetsArchitecture =
  | "armv6l"
  | "armv7l"
  | "x86_64"
  | "aarch64";
export type UpdateTargetsOperatingSystem =
  | "ubuntu"
  | "raspbian"
  | "amazon_linux"
  | "openwrt";
export interface UpdateThingRuntimeConfigurationRequest {
  TelemetryConfiguration?: TelemetryConfigurationUpdate;
  ThingName: string;
}
export interface UpdateThingRuntimeConfigurationResponse {}
export interface VersionInformation {
  Arn?: string;
  CreationTimestamp?: string;
  Id?: string;
  Version?: string;
}
export declare namespace AssociateRoleToGroup {
  export type Input = AssociateRoleToGroupRequest;
  export type Output = AssociateRoleToGroupResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace AssociateServiceRoleToAccount {
  export type Input = AssociateServiceRoleToAccountRequest;
  export type Output = AssociateServiceRoleToAccountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateConnectorDefinition {
  export type Input = CreateConnectorDefinitionRequest;
  export type Output = CreateConnectorDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateConnectorDefinitionVersion {
  export type Input = CreateConnectorDefinitionVersionRequest;
  export type Output = CreateConnectorDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateCoreDefinition {
  export type Input = CreateCoreDefinitionRequest;
  export type Output = CreateCoreDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateCoreDefinitionVersion {
  export type Input = CreateCoreDefinitionVersionRequest;
  export type Output = CreateCoreDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
  export type Output = CreateDeploymentResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateDeviceDefinition {
  export type Input = CreateDeviceDefinitionRequest;
  export type Output = CreateDeviceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateDeviceDefinitionVersion {
  export type Input = CreateDeviceDefinitionVersionRequest;
  export type Output = CreateDeviceDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateFunctionDefinition {
  export type Input = CreateFunctionDefinitionRequest;
  export type Output = CreateFunctionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateFunctionDefinitionVersion {
  export type Input = CreateFunctionDefinitionVersionRequest;
  export type Output = CreateFunctionDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = CreateGroupResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateGroupCertificateAuthority {
  export type Input = CreateGroupCertificateAuthorityRequest;
  export type Output = CreateGroupCertificateAuthorityResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateGroupVersion {
  export type Input = CreateGroupVersionRequest;
  export type Output = CreateGroupVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateLoggerDefinition {
  export type Input = CreateLoggerDefinitionRequest;
  export type Output = CreateLoggerDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateLoggerDefinitionVersion {
  export type Input = CreateLoggerDefinitionVersionRequest;
  export type Output = CreateLoggerDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateResourceDefinition {
  export type Input = CreateResourceDefinitionRequest;
  export type Output = CreateResourceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateResourceDefinitionVersion {
  export type Input = CreateResourceDefinitionVersionRequest;
  export type Output = CreateResourceDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateSoftwareUpdateJob {
  export type Input = CreateSoftwareUpdateJobRequest;
  export type Output = CreateSoftwareUpdateJobResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateSubscriptionDefinition {
  export type Input = CreateSubscriptionDefinitionRequest;
  export type Output = CreateSubscriptionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace CreateSubscriptionDefinitionVersion {
  export type Input = CreateSubscriptionDefinitionVersionRequest;
  export type Output = CreateSubscriptionDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteConnectorDefinition {
  export type Input = DeleteConnectorDefinitionRequest;
  export type Output = DeleteConnectorDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteCoreDefinition {
  export type Input = DeleteCoreDefinitionRequest;
  export type Output = DeleteCoreDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteDeviceDefinition {
  export type Input = DeleteDeviceDefinitionRequest;
  export type Output = DeleteDeviceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteFunctionDefinition {
  export type Input = DeleteFunctionDefinitionRequest;
  export type Output = DeleteFunctionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = DeleteGroupResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteLoggerDefinition {
  export type Input = DeleteLoggerDefinitionRequest;
  export type Output = DeleteLoggerDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteResourceDefinition {
  export type Input = DeleteResourceDefinitionRequest;
  export type Output = DeleteResourceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DeleteSubscriptionDefinition {
  export type Input = DeleteSubscriptionDefinitionRequest;
  export type Output = DeleteSubscriptionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace DisassociateRoleFromGroup {
  export type Input = DisassociateRoleFromGroupRequest;
  export type Output = DisassociateRoleFromGroupResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DisassociateServiceRoleFromAccount {
  export type Input = DisassociateServiceRoleFromAccountRequest;
  export type Output = DisassociateServiceRoleFromAccountResponse;
  export type Error = InternalServerErrorException | CommonAwsError;
}

export declare namespace GetAssociatedRole {
  export type Input = GetAssociatedRoleRequest;
  export type Output = GetAssociatedRoleResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetBulkDeploymentStatus {
  export type Input = GetBulkDeploymentStatusRequest;
  export type Output = GetBulkDeploymentStatusResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetConnectivityInfo {
  export type Input = GetConnectivityInfoRequest;
  export type Output = GetConnectivityInfoResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetConnectorDefinition {
  export type Input = GetConnectorDefinitionRequest;
  export type Output = GetConnectorDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetConnectorDefinitionVersion {
  export type Input = GetConnectorDefinitionVersionRequest;
  export type Output = GetConnectorDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetCoreDefinition {
  export type Input = GetCoreDefinitionRequest;
  export type Output = GetCoreDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetCoreDefinitionVersion {
  export type Input = GetCoreDefinitionVersionRequest;
  export type Output = GetCoreDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetDeploymentStatus {
  export type Input = GetDeploymentStatusRequest;
  export type Output = GetDeploymentStatusResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetDeviceDefinition {
  export type Input = GetDeviceDefinitionRequest;
  export type Output = GetDeviceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetDeviceDefinitionVersion {
  export type Input = GetDeviceDefinitionVersionRequest;
  export type Output = GetDeviceDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetFunctionDefinition {
  export type Input = GetFunctionDefinitionRequest;
  export type Output = GetFunctionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetFunctionDefinitionVersion {
  export type Input = GetFunctionDefinitionVersionRequest;
  export type Output = GetFunctionDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetGroup {
  export type Input = GetGroupRequest;
  export type Output = GetGroupResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetGroupCertificateAuthority {
  export type Input = GetGroupCertificateAuthorityRequest;
  export type Output = GetGroupCertificateAuthorityResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetGroupCertificateConfiguration {
  export type Input = GetGroupCertificateConfigurationRequest;
  export type Output = GetGroupCertificateConfigurationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetGroupVersion {
  export type Input = GetGroupVersionRequest;
  export type Output = GetGroupVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetLoggerDefinition {
  export type Input = GetLoggerDefinitionRequest;
  export type Output = GetLoggerDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetLoggerDefinitionVersion {
  export type Input = GetLoggerDefinitionVersionRequest;
  export type Output = GetLoggerDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetResourceDefinition {
  export type Input = GetResourceDefinitionRequest;
  export type Output = GetResourceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetResourceDefinitionVersion {
  export type Input = GetResourceDefinitionVersionRequest;
  export type Output = GetResourceDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetServiceRoleForAccount {
  export type Input = GetServiceRoleForAccountRequest;
  export type Output = GetServiceRoleForAccountResponse;
  export type Error = InternalServerErrorException | CommonAwsError;
}

export declare namespace GetSubscriptionDefinition {
  export type Input = GetSubscriptionDefinitionRequest;
  export type Output = GetSubscriptionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetSubscriptionDefinitionVersion {
  export type Input = GetSubscriptionDefinitionVersionRequest;
  export type Output = GetSubscriptionDefinitionVersionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace GetThingRuntimeConfiguration {
  export type Input = GetThingRuntimeConfigurationRequest;
  export type Output = GetThingRuntimeConfigurationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListBulkDeploymentDetailedReports {
  export type Input = ListBulkDeploymentDetailedReportsRequest;
  export type Output = ListBulkDeploymentDetailedReportsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListBulkDeployments {
  export type Input = ListBulkDeploymentsRequest;
  export type Output = ListBulkDeploymentsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListConnectorDefinitions {
  export type Input = ListConnectorDefinitionsRequest;
  export type Output = ListConnectorDefinitionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListConnectorDefinitionVersions {
  export type Input = ListConnectorDefinitionVersionsRequest;
  export type Output = ListConnectorDefinitionVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListCoreDefinitions {
  export type Input = ListCoreDefinitionsRequest;
  export type Output = ListCoreDefinitionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListCoreDefinitionVersions {
  export type Input = ListCoreDefinitionVersionsRequest;
  export type Output = ListCoreDefinitionVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListDeployments {
  export type Input = ListDeploymentsRequest;
  export type Output = ListDeploymentsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListDeviceDefinitions {
  export type Input = ListDeviceDefinitionsRequest;
  export type Output = ListDeviceDefinitionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListDeviceDefinitionVersions {
  export type Input = ListDeviceDefinitionVersionsRequest;
  export type Output = ListDeviceDefinitionVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListFunctionDefinitions {
  export type Input = ListFunctionDefinitionsRequest;
  export type Output = ListFunctionDefinitionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListFunctionDefinitionVersions {
  export type Input = ListFunctionDefinitionVersionsRequest;
  export type Output = ListFunctionDefinitionVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListGroupCertificateAuthorities {
  export type Input = ListGroupCertificateAuthoritiesRequest;
  export type Output = ListGroupCertificateAuthoritiesResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = ListGroupsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListGroupVersions {
  export type Input = ListGroupVersionsRequest;
  export type Output = ListGroupVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListLoggerDefinitions {
  export type Input = ListLoggerDefinitionsRequest;
  export type Output = ListLoggerDefinitionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListLoggerDefinitionVersions {
  export type Input = ListLoggerDefinitionVersionsRequest;
  export type Output = ListLoggerDefinitionVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListResourceDefinitions {
  export type Input = ListResourceDefinitionsRequest;
  export type Output = ListResourceDefinitionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListResourceDefinitionVersions {
  export type Input = ListResourceDefinitionVersionsRequest;
  export type Output = ListResourceDefinitionVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListSubscriptionDefinitions {
  export type Input = ListSubscriptionDefinitionsRequest;
  export type Output = ListSubscriptionDefinitionsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListSubscriptionDefinitionVersions {
  export type Input = ListSubscriptionDefinitionVersionsRequest;
  export type Output = ListSubscriptionDefinitionVersionsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace ResetDeployments {
  export type Input = ResetDeploymentsRequest;
  export type Output = ResetDeploymentsResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace StartBulkDeployment {
  export type Input = StartBulkDeploymentRequest;
  export type Output = StartBulkDeploymentResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace StopBulkDeployment {
  export type Input = StopBulkDeploymentRequest;
  export type Output = StopBulkDeploymentResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateConnectivityInfo {
  export type Input = UpdateConnectivityInfoRequest;
  export type Output = UpdateConnectivityInfoResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateConnectorDefinition {
  export type Input = UpdateConnectorDefinitionRequest;
  export type Output = UpdateConnectorDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateCoreDefinition {
  export type Input = UpdateCoreDefinitionRequest;
  export type Output = UpdateCoreDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateDeviceDefinition {
  export type Input = UpdateDeviceDefinitionRequest;
  export type Output = UpdateDeviceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateFunctionDefinition {
  export type Input = UpdateFunctionDefinitionRequest;
  export type Output = UpdateFunctionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = UpdateGroupResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateGroupCertificateConfiguration {
  export type Input = UpdateGroupCertificateConfigurationRequest;
  export type Output = UpdateGroupCertificateConfigurationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateLoggerDefinition {
  export type Input = UpdateLoggerDefinitionRequest;
  export type Output = UpdateLoggerDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateResourceDefinition {
  export type Input = UpdateResourceDefinitionRequest;
  export type Output = UpdateResourceDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateSubscriptionDefinition {
  export type Input = UpdateSubscriptionDefinitionRequest;
  export type Output = UpdateSubscriptionDefinitionResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UpdateThingRuntimeConfiguration {
  export type Input = UpdateThingRuntimeConfigurationRequest;
  export type Output = UpdateThingRuntimeConfigurationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}
