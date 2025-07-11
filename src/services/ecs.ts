import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class ECS extends AWSServiceClient {
  createCapacityProvider(
    input: CreateCapacityProviderRequest,
  ): Effect.Effect<
    CreateCapacityProviderResponse,
    | ClientException
    | InvalidParameterException
    | LimitExceededException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    | ClientException
    | InvalidParameterException
    | NamespaceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  createService(
    input: CreateServiceRequest,
  ): Effect.Effect<
    CreateServiceResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  createTaskSet(
    input: CreateTaskSetRequest,
  ): Effect.Effect<
    CreateTaskSetResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  deleteAccountSetting(
    input: DeleteAccountSettingRequest,
  ): Effect.Effect<
    DeleteAccountSettingResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  deleteAttributes(
    input: DeleteAttributesRequest,
  ): Effect.Effect<
    DeleteAttributesResponse,
    | ClusterNotFoundException
    | InvalidParameterException
    | TargetNotFoundException
    | CommonAwsError
  >;
  deleteCapacityProvider(
    input: DeleteCapacityProviderRequest,
  ): Effect.Effect<
    DeleteCapacityProviderResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    | ClientException
    | ClusterContainsContainerInstancesException
    | ClusterContainsServicesException
    | ClusterContainsTasksException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError
  >;
  deleteService(
    input: DeleteServiceRequest,
  ): Effect.Effect<
    DeleteServiceResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | CommonAwsError
  >;
  deleteTaskDefinitions(
    input: DeleteTaskDefinitionsRequest,
  ): Effect.Effect<
    DeleteTaskDefinitionsResponse,
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  deleteTaskSet(
    input: DeleteTaskSetRequest,
  ): Effect.Effect<
    DeleteTaskSetResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | TaskSetNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  deregisterContainerInstance(
    input: DeregisterContainerInstanceRequest,
  ): Effect.Effect<
    DeregisterContainerInstanceResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  deregisterTaskDefinition(
    input: DeregisterTaskDefinitionRequest,
  ): Effect.Effect<
    DeregisterTaskDefinitionResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  describeCapacityProviders(
    input: DescribeCapacityProvidersRequest,
  ): Effect.Effect<
    DescribeCapacityProvidersResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  describeClusters(
    input: DescribeClustersRequest,
  ): Effect.Effect<
    DescribeClustersResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  describeContainerInstances(
    input: DescribeContainerInstancesRequest,
  ): Effect.Effect<
    DescribeContainerInstancesResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  describeServiceDeployments(
    input: DescribeServiceDeploymentsRequest,
  ): Effect.Effect<
    DescribeServiceDeploymentsResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  describeServiceRevisions(
    input: DescribeServiceRevisionsRequest,
  ): Effect.Effect<
    DescribeServiceRevisionsResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  describeServices(
    input: DescribeServicesRequest,
  ): Effect.Effect<
    DescribeServicesResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  describeTaskDefinition(
    input: DescribeTaskDefinitionRequest,
  ): Effect.Effect<
    DescribeTaskDefinitionResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  describeTasks(
    input: DescribeTasksRequest,
  ): Effect.Effect<
    DescribeTasksResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  describeTaskSets(
    input: DescribeTaskSetsRequest,
  ): Effect.Effect<
    DescribeTaskSetsResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  discoverPollEndpoint(
    input: DiscoverPollEndpointRequest,
  ): Effect.Effect<
    DiscoverPollEndpointResponse,
    ClientException | ServerException | CommonAwsError
  >;
  executeCommand(
    input: ExecuteCommandRequest,
  ): Effect.Effect<
    ExecuteCommandResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | TargetNotConnectedException
    | CommonAwsError
  >;
  getTaskProtection(
    input: GetTaskProtectionRequest,
  ): Effect.Effect<
    GetTaskProtectionResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  listAccountSettings(
    input: ListAccountSettingsRequest,
  ): Effect.Effect<
    ListAccountSettingsResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  listAttributes(
    input: ListAttributesRequest,
  ): Effect.Effect<
    ListAttributesResponse,
    ClusterNotFoundException | InvalidParameterException | CommonAwsError
  >;
  listClusters(
    input: ListClustersRequest,
  ): Effect.Effect<
    ListClustersResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  listContainerInstances(
    input: ListContainerInstancesRequest,
  ): Effect.Effect<
    ListContainerInstancesResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  listServiceDeployments(
    input: ListServiceDeploymentsRequest,
  ): Effect.Effect<
    ListServiceDeploymentsResponse,
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  listServices(
    input: ListServicesRequest,
  ): Effect.Effect<
    ListServicesResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  listServicesByNamespace(
    input: ListServicesByNamespaceRequest,
  ): Effect.Effect<
    ListServicesByNamespaceResponse,
    | ClientException
    | InvalidParameterException
    | NamespaceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  listTaskDefinitionFamilies(
    input: ListTaskDefinitionFamiliesRequest,
  ): Effect.Effect<
    ListTaskDefinitionFamiliesResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  listTaskDefinitions(
    input: ListTaskDefinitionsRequest,
  ): Effect.Effect<
    ListTaskDefinitionsResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  listTasks(
    input: ListTasksRequest,
  ): Effect.Effect<
    ListTasksResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | CommonAwsError
  >;
  putAccountSetting(
    input: PutAccountSettingRequest,
  ): Effect.Effect<
    PutAccountSettingResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  putAccountSettingDefault(
    input: PutAccountSettingDefaultRequest,
  ): Effect.Effect<
    PutAccountSettingDefaultResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  putAttributes(
    input: PutAttributesRequest,
  ): Effect.Effect<
    PutAttributesResponse,
    | AttributeLimitExceededException
    | ClusterNotFoundException
    | InvalidParameterException
    | TargetNotFoundException
    | CommonAwsError
  >;
  putClusterCapacityProviders(
    input: PutClusterCapacityProvidersRequest,
  ): Effect.Effect<
    PutClusterCapacityProvidersResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceInUseException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError
  >;
  registerContainerInstance(
    input: RegisterContainerInstanceRequest,
  ): Effect.Effect<
    RegisterContainerInstanceResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  registerTaskDefinition(
    input: RegisterTaskDefinitionRequest,
  ): Effect.Effect<
    RegisterTaskDefinitionResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  runTask(
    input: RunTaskRequest,
  ): Effect.Effect<
    RunTaskResponse,
    | AccessDeniedException
    | BlockedException
    | ClientException
    | ClusterNotFoundException
    | ConflictException
    | InvalidParameterException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  startTask(
    input: StartTaskRequest,
  ): Effect.Effect<
    StartTaskResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  stopServiceDeployment(
    input: StopServiceDeploymentRequest,
  ): Effect.Effect<
    StopServiceDeploymentResponse,
    | AccessDeniedException
    | ClientException
    | ConflictException
    | InvalidParameterException
    | ServerException
    | ServiceDeploymentNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  stopTask(
    input: StopTaskRequest,
  ): Effect.Effect<
    StopTaskResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  submitAttachmentStateChanges(
    input: SubmitAttachmentStateChangesRequest,
  ): Effect.Effect<
    SubmitAttachmentStateChangesResponse,
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  submitContainerStateChange(
    input: SubmitContainerStateChangeRequest,
  ): Effect.Effect<
    SubmitContainerStateChangeResponse,
    AccessDeniedException | ClientException | ServerException | CommonAwsError
  >;
  submitTaskStateChange(
    input: SubmitTaskStateChangeRequest,
  ): Effect.Effect<
    SubmitTaskStateChangeResponse,
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  updateCapacityProvider(
    input: UpdateCapacityProviderRequest,
  ): Effect.Effect<
    UpdateCapacityProviderResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterRequest,
  ): Effect.Effect<
    UpdateClusterResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  updateClusterSettings(
    input: UpdateClusterSettingsRequest,
  ): Effect.Effect<
    UpdateClusterSettingsResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  updateContainerAgent(
    input: UpdateContainerAgentRequest,
  ): Effect.Effect<
    UpdateContainerAgentResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | MissingVersionException
    | NoUpdateAvailableException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError
  >;
  updateContainerInstancesState(
    input: UpdateContainerInstancesStateRequest,
  ): Effect.Effect<
    UpdateContainerInstancesStateResponse,
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError
  >;
  updateService(
    input: UpdateServiceRequest,
  ): Effect.Effect<
    UpdateServiceResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  updateServicePrimaryTaskSet(
    input: UpdateServicePrimaryTaskSetRequest,
  ): Effect.Effect<
    UpdateServicePrimaryTaskSetResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | TaskSetNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  updateTaskProtection(
    input: UpdateTaskProtectionRequest,
  ): Effect.Effect<
    UpdateTaskProtectionResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
  updateTaskSet(
    input: UpdateTaskSetRequest,
  ): Effect.Effect<
    UpdateTaskSetResponse,
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | TaskSetNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError
  >;
}

export declare class Ecs extends ECS {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AgentUpdateStatus =
  | "PENDING"
  | "STAGING"
  | "STAGED"
  | "UPDATING"
  | "UPDATED"
  | "FAILED";
export type ApplicationProtocol = "HTTP" | "HTTP2" | "GRPC";
export type AssignPublicIp = "ENABLED" | "DISABLED";
export interface Attachment {
  id?: string;
  type?: string;
  status?: string;
  details?: Array<KeyValuePair>;
}
export type AttachmentDetails = Array<KeyValuePair>;
export type Attachments = Array<Attachment>;
export interface AttachmentStateChange {
  attachmentArn: string;
  status: string;
}
export type AttachmentStateChanges = Array<AttachmentStateChange>;
export interface Attribute {
  name: string;
  value?: string;
  targetType?: TargetType;
  targetId?: string;
}
export declare class AttributeLimitExceededException extends EffectData.TaggedError(
  "AttributeLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type Attributes = Array<Attribute>;
export interface AutoScalingGroupProvider {
  autoScalingGroupArn: string;
  managedScaling?: ManagedScaling;
  managedTerminationProtection?: ManagedTerminationProtection;
  managedDraining?: ManagedDraining;
}
export interface AutoScalingGroupProviderUpdate {
  managedScaling?: ManagedScaling;
  managedTerminationProtection?: ManagedTerminationProtection;
  managedDraining?: ManagedDraining;
}
export type AvailabilityZoneRebalancing = "ENABLED" | "DISABLED";
export interface AwsVpcConfiguration {
  subnets: Array<string>;
  securityGroups?: Array<string>;
  assignPublicIp?: AssignPublicIp;
}
export declare class BlockedException extends EffectData.TaggedError(
  "BlockedException",
)<{
  readonly message?: string;
}> {}
export type EcsBoolean = boolean;

export type BoxedBoolean = boolean;

export type BoxedInteger = number;

export interface CapacityProvider {
  capacityProviderArn?: string;
  name?: string;
  status?: CapacityProviderStatus;
  autoScalingGroupProvider?: AutoScalingGroupProvider;
  updateStatus?: CapacityProviderUpdateStatus;
  updateStatusReason?: string;
  tags?: Array<Tag>;
}
export type CapacityProviderField = "TAGS";
export type CapacityProviderFieldList = Array<CapacityProviderField>;
export type CapacityProviders = Array<CapacityProvider>;
export type CapacityProviderStatus = "ACTIVE" | "INACTIVE";
export type CapacityProviderStrategy = Array<CapacityProviderStrategyItem>;
export interface CapacityProviderStrategyItem {
  capacityProvider: string;
  weight?: number;
  base?: number;
}
export type CapacityProviderStrategyItemBase = number;

export type CapacityProviderStrategyItemWeight = number;

export type CapacityProviderUpdateStatus =
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED";
export declare class ClientException extends EffectData.TaggedError(
  "ClientException",
)<{
  readonly message?: string;
}> {}
export interface Cluster {
  clusterArn?: string;
  clusterName?: string;
  configuration?: ClusterConfiguration;
  status?: string;
  registeredContainerInstancesCount?: number;
  runningTasksCount?: number;
  pendingTasksCount?: number;
  activeServicesCount?: number;
  statistics?: Array<KeyValuePair>;
  tags?: Array<Tag>;
  settings?: Array<ClusterSetting>;
  capacityProviders?: Array<string>;
  defaultCapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  attachments?: Array<Attachment>;
  attachmentsStatus?: string;
  serviceConnectDefaults?: ClusterServiceConnectDefaults;
}
export interface ClusterConfiguration {
  executeCommandConfiguration?: ExecuteCommandConfiguration;
  managedStorageConfiguration?: ManagedStorageConfiguration;
}
export declare class ClusterContainsContainerInstancesException extends EffectData.TaggedError(
  "ClusterContainsContainerInstancesException",
)<{
  readonly message?: string;
}> {}
export declare class ClusterContainsServicesException extends EffectData.TaggedError(
  "ClusterContainsServicesException",
)<{
  readonly message?: string;
}> {}
export declare class ClusterContainsTasksException extends EffectData.TaggedError(
  "ClusterContainsTasksException",
)<{
  readonly message?: string;
}> {}
export type ClusterField =
  | "ATTACHMENTS"
  | "CONFIGURATIONS"
  | "SETTINGS"
  | "STATISTICS"
  | "TAGS";
export type ClusterFieldList = Array<ClusterField>;
export declare class ClusterNotFoundException extends EffectData.TaggedError(
  "ClusterNotFoundException",
)<{
  readonly message?: string;
}> {}
export type Clusters = Array<Cluster>;
export interface ClusterServiceConnectDefaults {
  namespace?: string;
}
export interface ClusterServiceConnectDefaultsRequest {
  namespace: string;
}
export interface ClusterSetting {
  name?: ClusterSettingName;
  value?: string;
}
export type ClusterSettingName = "CONTAINER_INSIGHTS";
export type ClusterSettings = Array<ClusterSetting>;
export type Compatibility = "EC2" | "FARGATE" | "EXTERNAL";
export type CompatibilityList = Array<Compatibility>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly resourceIds?: Array<string>;
  readonly message?: string;
}> {}
export type Connectivity = "CONNECTED" | "DISCONNECTED";
export interface Container {
  containerArn?: string;
  taskArn?: string;
  name?: string;
  image?: string;
  imageDigest?: string;
  runtimeId?: string;
  lastStatus?: string;
  exitCode?: number;
  reason?: string;
  networkBindings?: Array<NetworkBinding>;
  networkInterfaces?: Array<NetworkInterface>;
  healthStatus?: HealthStatus;
  managedAgents?: Array<ManagedAgent>;
  cpu?: string;
  memory?: string;
  memoryReservation?: string;
  gpuIds?: Array<string>;
}
export type ContainerCondition = "START" | "COMPLETE" | "SUCCESS" | "HEALTHY";
export interface ContainerDefinition {
  name?: string;
  image?: string;
  repositoryCredentials?: RepositoryCredentials;
  cpu?: number;
  memory?: number;
  memoryReservation?: number;
  links?: Array<string>;
  portMappings?: Array<PortMapping>;
  essential?: boolean;
  restartPolicy?: ContainerRestartPolicy;
  entryPoint?: Array<string>;
  command?: Array<string>;
  environment?: Array<KeyValuePair>;
  environmentFiles?: Array<EnvironmentFile>;
  mountPoints?: Array<MountPoint>;
  volumesFrom?: Array<VolumeFrom>;
  linuxParameters?: LinuxParameters;
  secrets?: Array<Secret>;
  dependsOn?: Array<ContainerDependency>;
  startTimeout?: number;
  stopTimeout?: number;
  versionConsistency?: VersionConsistency;
  hostname?: string;
  user?: string;
  workingDirectory?: string;
  disableNetworking?: boolean;
  privileged?: boolean;
  readonlyRootFilesystem?: boolean;
  dnsServers?: Array<string>;
  dnsSearchDomains?: Array<string>;
  extraHosts?: Array<HostEntry>;
  dockerSecurityOptions?: Array<string>;
  interactive?: boolean;
  pseudoTerminal?: boolean;
  dockerLabels?: Record<string, string>;
  ulimits?: Array<Ulimit>;
  logConfiguration?: LogConfiguration;
  healthCheck?: HealthCheck;
  systemControls?: Array<SystemControl>;
  resourceRequirements?: Array<ResourceRequirement>;
  firelensConfiguration?: FirelensConfiguration;
  credentialSpecs?: Array<string>;
}
export type ContainerDefinitions = Array<ContainerDefinition>;
export type ContainerDependencies = Array<ContainerDependency>;
export interface ContainerDependency {
  containerName: string;
  condition: ContainerCondition;
}
export interface ContainerImage {
  containerName?: string;
  imageDigest?: string;
  image?: string;
}
export type ContainerImages = Array<ContainerImage>;
export interface ContainerInstance {
  containerInstanceArn?: string;
  ec2InstanceId?: string;
  capacityProviderName?: string;
  version?: number;
  versionInfo?: VersionInfo;
  remainingResources?: Array<Resource>;
  registeredResources?: Array<Resource>;
  status?: string;
  statusReason?: string;
  agentConnected?: boolean;
  runningTasksCount?: number;
  pendingTasksCount?: number;
  agentUpdateStatus?: AgentUpdateStatus;
  attributes?: Array<Attribute>;
  registeredAt?: Date | string;
  attachments?: Array<Attachment>;
  tags?: Array<Tag>;
  healthStatus?: ContainerInstanceHealthStatus;
}
export type ContainerInstanceField = "TAGS" | "CONTAINER_INSTANCE_HEALTH";
export type ContainerInstanceFieldList = Array<ContainerInstanceField>;
export interface ContainerInstanceHealthStatus {
  overallStatus?: InstanceHealthCheckState;
  details?: Array<InstanceHealthCheckResult>;
}
export type ContainerInstances = Array<ContainerInstance>;
export type ContainerInstanceStatus =
  | "ACTIVE"
  | "DRAINING"
  | "REGISTERING"
  | "DEREGISTERING"
  | "REGISTRATION_FAILED";
export interface ContainerOverride {
  name?: string;
  command?: Array<string>;
  environment?: Array<KeyValuePair>;
  environmentFiles?: Array<EnvironmentFile>;
  cpu?: number;
  memory?: number;
  memoryReservation?: number;
  resourceRequirements?: Array<ResourceRequirement>;
}
export type ContainerOverrides = Array<ContainerOverride>;
export interface ContainerRestartPolicy {
  enabled: boolean;
  ignoredExitCodes?: Array<number>;
  restartAttemptPeriod?: number;
}
export type Containers = Array<Container>;
export interface ContainerStateChange {
  containerName?: string;
  imageDigest?: string;
  runtimeId?: string;
  exitCode?: number;
  networkBindings?: Array<NetworkBinding>;
  reason?: string;
  status?: string;
}
export type ContainerStateChanges = Array<ContainerStateChange>;
export type CPUArchitecture = "X86_64" | "ARM64";
export interface CreateCapacityProviderRequest {
  name: string;
  autoScalingGroupProvider: AutoScalingGroupProvider;
  tags?: Array<Tag>;
}
export interface CreateCapacityProviderResponse {
  capacityProvider?: CapacityProvider;
}
export interface CreateClusterRequest {
  clusterName?: string;
  tags?: Array<Tag>;
  settings?: Array<ClusterSetting>;
  configuration?: ClusterConfiguration;
  capacityProviders?: Array<string>;
  defaultCapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
}
export interface CreateClusterResponse {
  cluster?: Cluster;
}
export interface CreatedAt {
  before?: Date | string;
  after?: Date | string;
}
export interface CreateServiceRequest {
  cluster?: string;
  serviceName: string;
  taskDefinition?: string;
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing;
  loadBalancers?: Array<LoadBalancer>;
  serviceRegistries?: Array<ServiceRegistry>;
  desiredCount?: number;
  clientToken?: string;
  launchType?: LaunchType;
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  platformVersion?: string;
  role?: string;
  deploymentConfiguration?: DeploymentConfiguration;
  placementConstraints?: Array<PlacementConstraint>;
  placementStrategy?: Array<PlacementStrategy>;
  networkConfiguration?: NetworkConfiguration;
  healthCheckGracePeriodSeconds?: number;
  schedulingStrategy?: SchedulingStrategy;
  deploymentController?: DeploymentController;
  tags?: Array<Tag>;
  enableECSManagedTags?: boolean;
  propagateTags?: PropagateTags;
  enableExecuteCommand?: boolean;
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  volumeConfigurations?: Array<ServiceVolumeConfiguration>;
  vpcLatticeConfigurations?: Array<VpcLatticeConfiguration>;
}
export interface CreateServiceResponse {
  service?: Service;
}
export interface CreateTaskSetRequest {
  service: string;
  cluster: string;
  externalId?: string;
  taskDefinition: string;
  networkConfiguration?: NetworkConfiguration;
  loadBalancers?: Array<LoadBalancer>;
  serviceRegistries?: Array<ServiceRegistry>;
  launchType?: LaunchType;
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  platformVersion?: string;
  scale?: Scale;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateTaskSetResponse {
  taskSet?: TaskSet;
}
export interface DeleteAccountSettingRequest {
  name: SettingName;
  principalArn?: string;
}
export interface DeleteAccountSettingResponse {
  setting?: Setting;
}
export interface DeleteAttributesRequest {
  cluster?: string;
  attributes: Array<Attribute>;
}
export interface DeleteAttributesResponse {
  attributes?: Array<Attribute>;
}
export interface DeleteCapacityProviderRequest {
  capacityProvider: string;
}
export interface DeleteCapacityProviderResponse {
  capacityProvider?: CapacityProvider;
}
export interface DeleteClusterRequest {
  cluster: string;
}
export interface DeleteClusterResponse {
  cluster?: Cluster;
}
export interface DeleteServiceRequest {
  cluster?: string;
  service: string;
  force?: boolean;
}
export interface DeleteServiceResponse {
  service?: Service;
}
export interface DeleteTaskDefinitionsRequest {
  taskDefinitions: Array<string>;
}
export interface DeleteTaskDefinitionsResponse {
  taskDefinitions?: Array<TaskDefinition>;
  failures?: Array<Failure>;
}
export interface DeleteTaskSetRequest {
  cluster: string;
  service: string;
  taskSet: string;
  force?: boolean;
}
export interface DeleteTaskSetResponse {
  taskSet?: TaskSet;
}
export interface Deployment {
  id?: string;
  status?: string;
  taskDefinition?: string;
  desiredCount?: number;
  pendingCount?: number;
  runningCount?: number;
  failedTasks?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  launchType?: LaunchType;
  platformVersion?: string;
  platformFamily?: string;
  networkConfiguration?: NetworkConfiguration;
  rolloutState?: DeploymentRolloutState;
  rolloutStateReason?: string;
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  serviceConnectResources?: Array<ServiceConnectServiceResource>;
  volumeConfigurations?: Array<ServiceVolumeConfiguration>;
  fargateEphemeralStorage?: DeploymentEphemeralStorage;
  vpcLatticeConfigurations?: Array<VpcLatticeConfiguration>;
}
export interface DeploymentAlarms {
  alarmNames: Array<string>;
  rollback: boolean;
  enable: boolean;
}
export interface DeploymentCircuitBreaker {
  enable: boolean;
  rollback: boolean;
}
export interface DeploymentConfiguration {
  deploymentCircuitBreaker?: DeploymentCircuitBreaker;
  maximumPercent?: number;
  minimumHealthyPercent?: number;
  alarms?: DeploymentAlarms;
}
export interface DeploymentController {
  type: DeploymentControllerType;
}
export type DeploymentControllerType = "ECS" | "CODE_DEPLOY" | "EXTERNAL";
export interface DeploymentEphemeralStorage {
  kmsKeyId?: string;
}
export type DeploymentRolloutState = "COMPLETED" | "FAILED" | "IN_PROGRESS";
export type Deployments = Array<Deployment>;
export interface DeregisterContainerInstanceRequest {
  cluster?: string;
  containerInstance: string;
  force?: boolean;
}
export interface DeregisterContainerInstanceResponse {
  containerInstance?: ContainerInstance;
}
export interface DeregisterTaskDefinitionRequest {
  taskDefinition: string;
}
export interface DeregisterTaskDefinitionResponse {
  taskDefinition?: TaskDefinition;
}
export interface DescribeCapacityProvidersRequest {
  capacityProviders?: Array<string>;
  include?: Array<CapacityProviderField>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeCapacityProvidersResponse {
  capacityProviders?: Array<CapacityProvider>;
  failures?: Array<Failure>;
  nextToken?: string;
}
export interface DescribeClustersRequest {
  clusters?: Array<string>;
  include?: Array<ClusterField>;
}
export interface DescribeClustersResponse {
  clusters?: Array<Cluster>;
  failures?: Array<Failure>;
}
export interface DescribeContainerInstancesRequest {
  cluster?: string;
  containerInstances: Array<string>;
  include?: Array<ContainerInstanceField>;
}
export interface DescribeContainerInstancesResponse {
  containerInstances?: Array<ContainerInstance>;
  failures?: Array<Failure>;
}
export interface DescribeServiceDeploymentsRequest {
  serviceDeploymentArns: Array<string>;
}
export interface DescribeServiceDeploymentsResponse {
  serviceDeployments?: Array<ServiceDeployment>;
  failures?: Array<Failure>;
}
export interface DescribeServiceRevisionsRequest {
  serviceRevisionArns: Array<string>;
}
export interface DescribeServiceRevisionsResponse {
  serviceRevisions?: Array<ServiceRevision>;
  failures?: Array<Failure>;
}
export interface DescribeServicesRequest {
  cluster?: string;
  services: Array<string>;
  include?: Array<ServiceField>;
}
export interface DescribeServicesResponse {
  services?: Array<Service>;
  failures?: Array<Failure>;
}
export interface DescribeTaskDefinitionRequest {
  taskDefinition: string;
  include?: Array<TaskDefinitionField>;
}
export interface DescribeTaskDefinitionResponse {
  taskDefinition?: TaskDefinition;
  tags?: Array<Tag>;
}
export interface DescribeTaskSetsRequest {
  cluster: string;
  service: string;
  taskSets?: Array<string>;
  include?: Array<TaskSetField>;
}
export interface DescribeTaskSetsResponse {
  taskSets?: Array<TaskSet>;
  failures?: Array<Failure>;
}
export interface DescribeTasksRequest {
  cluster?: string;
  tasks: Array<string>;
  include?: Array<TaskField>;
}
export interface DescribeTasksResponse {
  tasks?: Array<Task>;
  failures?: Array<Failure>;
}
export type DesiredStatus = "RUNNING" | "PENDING" | "STOPPED";
export interface Device {
  hostPath: string;
  containerPath?: string;
  permissions?: Array<DeviceCgroupPermission>;
}
export type DeviceCgroupPermission = "READ" | "WRITE" | "MKNOD";
export type DeviceCgroupPermissions = Array<DeviceCgroupPermission>;
export type DevicesList = Array<Device>;
export interface DiscoverPollEndpointRequest {
  containerInstance?: string;
  cluster?: string;
}
export interface DiscoverPollEndpointResponse {
  endpoint?: string;
  telemetryEndpoint?: string;
  serviceConnectEndpoint?: string;
}
export type DockerLabelsMap = Record<string, string>;
export interface DockerVolumeConfiguration {
  scope?: Scope;
  autoprovision?: boolean;
  driver?: string;
  driverOpts?: Record<string, string>;
  labels?: Record<string, string>;
}
export type Double = number;

export type Duration = number;

export type EBSKMSKeyId = string;

export type EBSResourceType = "VOLUME";
export type EBSSnapshotId = string;

export interface EBSTagSpecification {
  resourceType: EBSResourceType;
  tags?: Array<Tag>;
  propagateTags?: PropagateTags;
}
export type EBSTagSpecifications = Array<EBSTagSpecification>;
export type EBSVolumeType = string;

export type ECSVolumeName = string;

export interface EFSAuthorizationConfig {
  accessPointId?: string;
  iam?: EFSAuthorizationConfigIAM;
}
export type EFSAuthorizationConfigIAM = "ENABLED" | "DISABLED";
export type EFSTransitEncryption = "ENABLED" | "DISABLED";
export interface EFSVolumeConfiguration {
  fileSystemId: string;
  rootDirectory?: string;
  transitEncryption?: EFSTransitEncryption;
  transitEncryptionPort?: number;
  authorizationConfig?: EFSAuthorizationConfig;
}
export interface EnvironmentFile {
  value: string;
  type: EnvironmentFileType;
}
export type EnvironmentFiles = Array<EnvironmentFile>;
export type EnvironmentFileType = "S3";
export type EnvironmentVariables = Array<KeyValuePair>;
export interface EphemeralStorage {
  sizeInGiB: number;
}
export interface ExecuteCommandConfiguration {
  kmsKeyId?: string;
  logging?: ExecuteCommandLogging;
  logConfiguration?: ExecuteCommandLogConfiguration;
}
export interface ExecuteCommandLogConfiguration {
  cloudWatchLogGroupName?: string;
  cloudWatchEncryptionEnabled?: boolean;
  s3BucketName?: string;
  s3EncryptionEnabled?: boolean;
  s3KeyPrefix?: string;
}
export type ExecuteCommandLogging = "NONE" | "DEFAULT" | "OVERRIDE";
export interface ExecuteCommandRequest {
  cluster?: string;
  container?: string;
  command: string;
  interactive: boolean;
  task: string;
}
export interface ExecuteCommandResponse {
  clusterArn?: string;
  containerArn?: string;
  containerName?: string;
  interactive?: boolean;
  session?: Session;
  taskArn?: string;
}
export interface Failure {
  arn?: string;
  reason?: string;
  detail?: string;
}
export type Failures = Array<Failure>;
export interface FirelensConfiguration {
  type: FirelensConfigurationType;
  options?: Record<string, string>;
}
export type FirelensConfigurationOptionsMap = Record<string, string>;
export type FirelensConfigurationType = "FLUENTD" | "FLUENTBIT";
export interface FSxWindowsFileServerAuthorizationConfig {
  credentialsParameter: string;
  domain: string;
}
export interface FSxWindowsFileServerVolumeConfiguration {
  fileSystemId: string;
  rootDirectory: string;
  authorizationConfig: FSxWindowsFileServerAuthorizationConfig;
}
export interface GetTaskProtectionRequest {
  cluster: string;
  tasks?: Array<string>;
}
export interface GetTaskProtectionResponse {
  protectedTasks?: Array<ProtectedTask>;
  failures?: Array<Failure>;
}
export type GpuIds = Array<string>;
export interface HealthCheck {
  command: Array<string>;
  interval?: number;
  timeout?: number;
  retries?: number;
  startPeriod?: number;
}
export type HealthStatus = "HEALTHY" | "UNHEALTHY" | "UNKNOWN";
export interface HostEntry {
  hostname: string;
  ipAddress: string;
}
export type HostEntryList = Array<HostEntry>;
export interface HostVolumeProperties {
  sourcePath?: string;
}
export type IAMRoleArn = string;

export interface InferenceAccelerator {
  deviceName: string;
  deviceType: string;
}
export interface InferenceAcceleratorOverride {
  deviceName?: string;
  deviceType?: string;
}
export type InferenceAcceleratorOverrides = Array<InferenceAcceleratorOverride>;
export type InferenceAccelerators = Array<InferenceAccelerator>;
export interface InstanceHealthCheckResult {
  type?: InstanceHealthCheckType;
  status?: InstanceHealthCheckState;
  lastUpdated?: Date | string;
  lastStatusChange?: Date | string;
}
export type InstanceHealthCheckResultList = Array<InstanceHealthCheckResult>;
export type InstanceHealthCheckState =
  | "OK"
  | "IMPAIRED"
  | "INSUFFICIENT_DATA"
  | "INITIALIZING";
export type InstanceHealthCheckType = "CONTAINER_RUNTIME";
export type Integer = number;

export type IntegerList = Array<number>;
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export type IpcMode = "HOST" | "TASK" | "NONE";
export interface KernelCapabilities {
  add?: Array<string>;
  drop?: Array<string>;
}
export interface KeyValuePair {
  name?: string;
  value?: string;
}
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface LinuxParameters {
  capabilities?: KernelCapabilities;
  devices?: Array<Device>;
  initProcessEnabled?: boolean;
  sharedMemorySize?: number;
  tmpfs?: Array<Tmpfs>;
  maxSwap?: number;
  swappiness?: number;
}
export interface ListAccountSettingsRequest {
  name?: SettingName;
  value?: string;
  principalArn?: string;
  effectiveSettings?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAccountSettingsResponse {
  settings?: Array<Setting>;
  nextToken?: string;
}
export interface ListAttributesRequest {
  cluster?: string;
  targetType: TargetType;
  attributeName?: string;
  attributeValue?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAttributesResponse {
  attributes?: Array<Attribute>;
  nextToken?: string;
}
export interface ListClustersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListClustersResponse {
  clusterArns?: Array<string>;
  nextToken?: string;
}
export interface ListContainerInstancesRequest {
  cluster?: string;
  filter?: string;
  nextToken?: string;
  maxResults?: number;
  status?: ContainerInstanceStatus;
}
export interface ListContainerInstancesResponse {
  containerInstanceArns?: Array<string>;
  nextToken?: string;
}
export interface ListServiceDeploymentsRequest {
  service: string;
  cluster?: string;
  status?: Array<ServiceDeploymentStatus>;
  createdAt?: CreatedAt;
  nextToken?: string;
  maxResults?: number;
}
export interface ListServiceDeploymentsResponse {
  serviceDeployments?: Array<ServiceDeploymentBrief>;
  nextToken?: string;
}
export interface ListServicesByNamespaceRequest {
  namespace: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListServicesByNamespaceResponse {
  serviceArns?: Array<string>;
  nextToken?: string;
}
export interface ListServicesRequest {
  cluster?: string;
  nextToken?: string;
  maxResults?: number;
  launchType?: LaunchType;
  schedulingStrategy?: SchedulingStrategy;
}
export interface ListServicesResponse {
  serviceArns?: Array<string>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface ListTaskDefinitionFamiliesRequest {
  familyPrefix?: string;
  status?: TaskDefinitionFamilyStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTaskDefinitionFamiliesResponse {
  families?: Array<string>;
  nextToken?: string;
}
export interface ListTaskDefinitionsRequest {
  familyPrefix?: string;
  status?: TaskDefinitionStatus;
  sort?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTaskDefinitionsResponse {
  taskDefinitionArns?: Array<string>;
  nextToken?: string;
}
export interface ListTasksRequest {
  cluster?: string;
  containerInstance?: string;
  family?: string;
  nextToken?: string;
  maxResults?: number;
  startedBy?: string;
  serviceName?: string;
  desiredStatus?: DesiredStatus;
  launchType?: LaunchType;
}
export interface ListTasksResponse {
  taskArns?: Array<string>;
  nextToken?: string;
}
export interface LoadBalancer {
  targetGroupArn?: string;
  loadBalancerName?: string;
  containerName?: string;
  containerPort?: number;
}
export type LoadBalancers = Array<LoadBalancer>;
export interface LogConfiguration {
  logDriver: LogDriver;
  options?: Record<string, string>;
  secretOptions?: Array<Secret>;
}
export type LogConfigurationOptionsMap = Record<string, string>;
export type LogDriver =
  | "JSON_FILE"
  | "SYSLOG"
  | "JOURNALD"
  | "GELF"
  | "FLUENTD"
  | "AWSLOGS"
  | "SPLUNK"
  | "AWSFIRELENS";
export type Long = number;

export interface ManagedAgent {
  lastStartedAt?: Date | string;
  name?: ManagedAgentName;
  reason?: string;
  lastStatus?: string;
}
export type ManagedAgentName = "ExecuteCommandAgent";
export type ManagedAgents = Array<ManagedAgent>;
export interface ManagedAgentStateChange {
  containerName: string;
  managedAgentName: ManagedAgentName;
  status: string;
  reason?: string;
}
export type ManagedAgentStateChanges = Array<ManagedAgentStateChange>;
export type ManagedDraining = "ENABLED" | "DISABLED";
export interface ManagedScaling {
  status?: ManagedScalingStatus;
  targetCapacity?: number;
  minimumScalingStepSize?: number;
  maximumScalingStepSize?: number;
  instanceWarmupPeriod?: number;
}
export type ManagedScalingInstanceWarmupPeriod = number;

export type ManagedScalingStatus = "ENABLED" | "DISABLED";
export type ManagedScalingStepSize = number;

export type ManagedScalingTargetCapacity = number;

export interface ManagedStorageConfiguration {
  kmsKeyId?: string;
  fargateEphemeralStorageKmsKeyId?: string;
}
export type ManagedTerminationProtection = "ENABLED" | "DISABLED";
export declare class MissingVersionException extends EffectData.TaggedError(
  "MissingVersionException",
)<{
  readonly message?: string;
}> {}
export interface MountPoint {
  sourceVolume?: string;
  containerPath?: string;
  readOnly?: boolean;
}
export type MountPointList = Array<MountPoint>;
export declare class NamespaceNotFoundException extends EffectData.TaggedError(
  "NamespaceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface NetworkBinding {
  bindIP?: string;
  containerPort?: number;
  hostPort?: number;
  protocol?: TransportProtocol;
  containerPortRange?: string;
  hostPortRange?: string;
}
export type NetworkBindings = Array<NetworkBinding>;
export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
export interface NetworkInterface {
  attachmentId?: string;
  privateIpv4Address?: string;
  ipv6Address?: string;
}
export type NetworkInterfaces = Array<NetworkInterface>;
export type NetworkMode = "BRIDGE" | "HOST" | "AWSVPC" | "NONE";
export declare class NoUpdateAvailableException extends EffectData.TaggedError(
  "NoUpdateAvailableException",
)<{
  readonly message?: string;
}> {}
export type OSFamily =
  | "WINDOWS_SERVER_2019_FULL"
  | "WINDOWS_SERVER_2019_CORE"
  | "WINDOWS_SERVER_2016_FULL"
  | "WINDOWS_SERVER_2004_CORE"
  | "WINDOWS_SERVER_2022_CORE"
  | "WINDOWS_SERVER_2022_FULL"
  | "WINDOWS_SERVER_2025_CORE"
  | "WINDOWS_SERVER_2025_FULL"
  | "WINDOWS_SERVER_20H2_CORE"
  | "LINUX";
export type PidMode = "HOST" | "TASK";
export interface PlacementConstraint {
  type?: PlacementConstraintType;
  expression?: string;
}
export type PlacementConstraints = Array<PlacementConstraint>;
export type PlacementConstraintType = "DISTINCT_INSTANCE" | "MEMBER_OF";
export type PlacementStrategies = Array<PlacementStrategy>;
export interface PlacementStrategy {
  type?: PlacementStrategyType;
  field?: string;
}
export type PlacementStrategyType = "RANDOM" | "SPREAD" | "BINPACK";
export interface PlatformDevice {
  id: string;
  type: PlatformDeviceType;
}
export type PlatformDevices = Array<PlatformDevice>;
export type PlatformDeviceType = "GPU";
export declare class PlatformTaskDefinitionIncompatibilityException extends EffectData.TaggedError(
  "PlatformTaskDefinitionIncompatibilityException",
)<{
  readonly message?: string;
}> {}
export declare class PlatformUnknownException extends EffectData.TaggedError(
  "PlatformUnknownException",
)<{
  readonly message?: string;
}> {}
export interface PortMapping {
  containerPort?: number;
  hostPort?: number;
  protocol?: TransportProtocol;
  name?: string;
  appProtocol?: ApplicationProtocol;
  containerPortRange?: string;
}
export type PortMappingList = Array<PortMapping>;
export type PortNumber = number;

export type PropagateTags = "TASK_DEFINITION" | "SERVICE" | "NONE";
export interface ProtectedTask {
  taskArn?: string;
  protectionEnabled?: boolean;
  expirationDate?: Date | string;
}
export type ProtectedTasks = Array<ProtectedTask>;
export interface ProxyConfiguration {
  type?: ProxyConfigurationType;
  containerName: string;
  properties?: Array<KeyValuePair>;
}
export type ProxyConfigurationProperties = Array<KeyValuePair>;
export type ProxyConfigurationType = "APPMESH";
export interface PutAccountSettingDefaultRequest {
  name: SettingName;
  value: string;
}
export interface PutAccountSettingDefaultResponse {
  setting?: Setting;
}
export interface PutAccountSettingRequest {
  name: SettingName;
  value: string;
  principalArn?: string;
}
export interface PutAccountSettingResponse {
  setting?: Setting;
}
export interface PutAttributesRequest {
  cluster?: string;
  attributes: Array<Attribute>;
}
export interface PutAttributesResponse {
  attributes?: Array<Attribute>;
}
export interface PutClusterCapacityProvidersRequest {
  cluster: string;
  capacityProviders: Array<string>;
  defaultCapacityProviderStrategy: Array<CapacityProviderStrategyItem>;
}
export interface PutClusterCapacityProvidersResponse {
  cluster?: Cluster;
}
export interface RegisterContainerInstanceRequest {
  cluster?: string;
  instanceIdentityDocument?: string;
  instanceIdentityDocumentSignature?: string;
  totalResources?: Array<Resource>;
  versionInfo?: VersionInfo;
  containerInstanceArn?: string;
  attributes?: Array<Attribute>;
  platformDevices?: Array<PlatformDevice>;
  tags?: Array<Tag>;
}
export interface RegisterContainerInstanceResponse {
  containerInstance?: ContainerInstance;
}
export interface RegisterTaskDefinitionRequest {
  family: string;
  taskRoleArn?: string;
  executionRoleArn?: string;
  networkMode?: NetworkMode;
  containerDefinitions: Array<ContainerDefinition>;
  volumes?: Array<Volume>;
  placementConstraints?: Array<TaskDefinitionPlacementConstraint>;
  requiresCompatibilities?: Array<Compatibility>;
  cpu?: string;
  memory?: string;
  tags?: Array<Tag>;
  pidMode?: PidMode;
  ipcMode?: IpcMode;
  proxyConfiguration?: ProxyConfiguration;
  inferenceAccelerators?: Array<InferenceAccelerator>;
  ephemeralStorage?: EphemeralStorage;
  runtimePlatform?: RuntimePlatform;
  enableFaultInjection?: boolean;
}
export interface RegisterTaskDefinitionResponse {
  taskDefinition?: TaskDefinition;
  tags?: Array<Tag>;
}
export interface RepositoryCredentials {
  credentialsParameter: string;
}
export type RequiresAttributes = Array<Attribute>;
export interface Resource {
  name?: string;
  type?: string;
  doubleValue?: number;
  longValue?: number;
  integerValue?: number;
  stringSetValue?: Array<string>;
}
export type ResourceIds = Array<string>;
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ResourceRequirement {
  value: string;
  type: ResourceType;
}
export type ResourceRequirements = Array<ResourceRequirement>;
export type Resources = Array<Resource>;
export type ResourceType = "GPU" | "INFERENCE_ACCELERATOR";
export interface Rollback {
  reason?: string;
  startedAt?: Date | string;
  serviceRevisionArn?: string;
}
export interface RunTaskRequest {
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  cluster?: string;
  count?: number;
  enableECSManagedTags?: boolean;
  enableExecuteCommand?: boolean;
  group?: string;
  launchType?: LaunchType;
  networkConfiguration?: NetworkConfiguration;
  overrides?: TaskOverride;
  placementConstraints?: Array<PlacementConstraint>;
  placementStrategy?: Array<PlacementStrategy>;
  platformVersion?: string;
  propagateTags?: PropagateTags;
  referenceId?: string;
  startedBy?: string;
  tags?: Array<Tag>;
  taskDefinition: string;
  clientToken?: string;
  volumeConfigurations?: Array<TaskVolumeConfiguration>;
}
export interface RunTaskResponse {
  tasks?: Array<Task>;
  failures?: Array<Failure>;
}
export interface RuntimePlatform {
  cpuArchitecture?: CPUArchitecture;
  operatingSystemFamily?: OSFamily;
}
export interface Scale {
  value?: number;
  unit?: ScaleUnit;
}
export type ScaleUnit = "PERCENT";
export type SchedulingStrategy = "REPLICA" | "DAEMON";
export type Scope = "TASK" | "SHARED";
export interface Secret {
  name: string;
  valueFrom: string;
}
export type SecretList = Array<Secret>;
export type SensitiveString = string;

export declare class ServerException extends EffectData.TaggedError(
  "ServerException",
)<{
  readonly message?: string;
}> {}
export interface Service {
  serviceArn?: string;
  serviceName?: string;
  clusterArn?: string;
  loadBalancers?: Array<LoadBalancer>;
  serviceRegistries?: Array<ServiceRegistry>;
  status?: string;
  desiredCount?: number;
  runningCount?: number;
  pendingCount?: number;
  launchType?: LaunchType;
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  platformVersion?: string;
  platformFamily?: string;
  taskDefinition?: string;
  deploymentConfiguration?: DeploymentConfiguration;
  taskSets?: Array<TaskSet>;
  deployments?: Array<Deployment>;
  roleArn?: string;
  events?: Array<ServiceEvent>;
  createdAt?: Date | string;
  placementConstraints?: Array<PlacementConstraint>;
  placementStrategy?: Array<PlacementStrategy>;
  networkConfiguration?: NetworkConfiguration;
  healthCheckGracePeriodSeconds?: number;
  schedulingStrategy?: SchedulingStrategy;
  deploymentController?: DeploymentController;
  tags?: Array<Tag>;
  createdBy?: string;
  enableECSManagedTags?: boolean;
  propagateTags?: PropagateTags;
  enableExecuteCommand?: boolean;
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing;
}
export interface ServiceConnectClientAlias {
  port: number;
  dnsName?: string;
}
export type ServiceConnectClientAliasList = Array<ServiceConnectClientAlias>;
export interface ServiceConnectConfiguration {
  enabled: boolean;
  namespace?: string;
  services?: Array<ServiceConnectService>;
  logConfiguration?: LogConfiguration;
}
export interface ServiceConnectService {
  portName: string;
  discoveryName?: string;
  clientAliases?: Array<ServiceConnectClientAlias>;
  ingressPortOverride?: number;
  timeout?: TimeoutConfiguration;
  tls?: ServiceConnectTlsConfiguration;
}
export type ServiceConnectServiceList = Array<ServiceConnectService>;
export interface ServiceConnectServiceResource {
  discoveryName?: string;
  discoveryArn?: string;
}
export type ServiceConnectServiceResourceList =
  Array<ServiceConnectServiceResource>;
export interface ServiceConnectTlsCertificateAuthority {
  awsPcaAuthorityArn?: string;
}
export interface ServiceConnectTlsConfiguration {
  issuerCertificateAuthority: ServiceConnectTlsCertificateAuthority;
  kmsKey?: string;
  roleArn?: string;
}
export interface ServiceDeployment {
  serviceDeploymentArn?: string;
  serviceArn?: string;
  clusterArn?: string;
  createdAt?: Date | string;
  startedAt?: Date | string;
  finishedAt?: Date | string;
  stoppedAt?: Date | string;
  updatedAt?: Date | string;
  sourceServiceRevisions?: Array<ServiceRevisionSummary>;
  targetServiceRevision?: ServiceRevisionSummary;
  status?: ServiceDeploymentStatus;
  statusReason?: string;
  deploymentConfiguration?: DeploymentConfiguration;
  rollback?: Rollback;
  deploymentCircuitBreaker?: ServiceDeploymentCircuitBreaker;
  alarms?: ServiceDeploymentAlarms;
}
export interface ServiceDeploymentAlarms {
  status?: ServiceDeploymentRollbackMonitorsStatus;
  alarmNames?: Array<string>;
  triggeredAlarmNames?: Array<string>;
}
export interface ServiceDeploymentBrief {
  serviceDeploymentArn?: string;
  serviceArn?: string;
  clusterArn?: string;
  startedAt?: Date | string;
  createdAt?: Date | string;
  finishedAt?: Date | string;
  targetServiceRevisionArn?: string;
  status?: ServiceDeploymentStatus;
  statusReason?: string;
}
export interface ServiceDeploymentCircuitBreaker {
  status?: ServiceDeploymentRollbackMonitorsStatus;
  failureCount?: number;
  threshold?: number;
}
export declare class ServiceDeploymentNotFoundException extends EffectData.TaggedError(
  "ServiceDeploymentNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ServiceDeploymentRollbackMonitorsStatus =
  | "TRIGGERED"
  | "MONITORING"
  | "MONITORING_COMPLETE"
  | "DISABLED";
export type ServiceDeployments = Array<ServiceDeployment>;
export type ServiceDeploymentsBrief = Array<ServiceDeploymentBrief>;
export type ServiceDeploymentStatus =
  | "PENDING"
  | "SUCCESSFUL"
  | "STOPPED"
  | "STOP_REQUESTED"
  | "IN_PROGRESS"
  | "ROLLBACK_REQUESTED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_SUCCESSFUL"
  | "ROLLBACK_FAILED";
export type ServiceDeploymentStatusList = Array<ServiceDeploymentStatus>;
export interface ServiceEvent {
  id?: string;
  createdAt?: Date | string;
  message?: string;
}
export type ServiceEvents = Array<ServiceEvent>;
export type ServiceField = "TAGS";
export type ServiceFieldList = Array<ServiceField>;
export interface ServiceManagedEBSVolumeConfiguration {
  encrypted?: boolean;
  kmsKeyId?: string;
  volumeType?: string;
  sizeInGiB?: number;
  snapshotId?: string;
  volumeInitializationRate?: number;
  iops?: number;
  throughput?: number;
  tagSpecifications?: Array<EBSTagSpecification>;
  roleArn: string;
  filesystemType?: TaskFilesystemType;
}
export declare class ServiceNotActiveException extends EffectData.TaggedError(
  "ServiceNotActiveException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceNotFoundException extends EffectData.TaggedError(
  "ServiceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ServiceRegistries = Array<ServiceRegistry>;
export interface ServiceRegistry {
  registryArn?: string;
  port?: number;
  containerName?: string;
  containerPort?: number;
}
export interface ServiceRevision {
  serviceRevisionArn?: string;
  serviceArn?: string;
  clusterArn?: string;
  taskDefinition?: string;
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  launchType?: LaunchType;
  platformVersion?: string;
  platformFamily?: string;
  loadBalancers?: Array<LoadBalancer>;
  serviceRegistries?: Array<ServiceRegistry>;
  networkConfiguration?: NetworkConfiguration;
  containerImages?: Array<ContainerImage>;
  guardDutyEnabled?: boolean;
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  volumeConfigurations?: Array<ServiceVolumeConfiguration>;
  fargateEphemeralStorage?: DeploymentEphemeralStorage;
  createdAt?: Date | string;
  vpcLatticeConfigurations?: Array<VpcLatticeConfiguration>;
}
export type ServiceRevisions = Array<ServiceRevision>;
export type ServiceRevisionsSummaryList = Array<ServiceRevisionSummary>;
export interface ServiceRevisionSummary {
  arn?: string;
  requestedTaskCount?: number;
  runningTaskCount?: number;
  pendingTaskCount?: number;
}
export type Services = Array<Service>;
export interface ServiceVolumeConfiguration {
  name: string;
  managedEBSVolume?: ServiceManagedEBSVolumeConfiguration;
}
export type ServiceVolumeConfigurations = Array<ServiceVolumeConfiguration>;
export interface Session {
  sessionId?: string;
  streamUrl?: string;
  tokenValue?: string;
}
export interface Setting {
  name?: SettingName;
  value?: string;
  principalArn?: string;
  type?: SettingType;
}
export type SettingName =
  | "SERVICE_LONG_ARN_FORMAT"
  | "TASK_LONG_ARN_FORMAT"
  | "CONTAINER_INSTANCE_LONG_ARN_FORMAT"
  | "AWSVPC_TRUNKING"
  | "CONTAINER_INSIGHTS"
  | "FARGATE_FIPS_MODE"
  | "TAG_RESOURCE_AUTHORIZATION"
  | "FARGATE_TASK_RETIREMENT_WAIT_PERIOD"
  | "GUARD_DUTY_ACTIVATE"
  | "DEFAULT_LOG_DRIVER_MODE";
export type Settings = Array<Setting>;
export type SettingType = "USER" | "AWS_MANAGED";
export type SortOrder = "ASC" | "DESC";
export type StabilityStatus = "STEADY_STATE" | "STABILIZING";
export interface StartTaskRequest {
  cluster?: string;
  containerInstances: Array<string>;
  enableECSManagedTags?: boolean;
  enableExecuteCommand?: boolean;
  group?: string;
  networkConfiguration?: NetworkConfiguration;
  overrides?: TaskOverride;
  propagateTags?: PropagateTags;
  referenceId?: string;
  startedBy?: string;
  tags?: Array<Tag>;
  taskDefinition: string;
  volumeConfigurations?: Array<TaskVolumeConfiguration>;
}
export interface StartTaskResponse {
  tasks?: Array<Task>;
  failures?: Array<Failure>;
}
export type Statistics = Array<KeyValuePair>;
export interface StopServiceDeploymentRequest {
  serviceDeploymentArn: string;
  stopType?: StopServiceDeploymentStopType;
}
export interface StopServiceDeploymentResponse {
  serviceDeploymentArn?: string;
}
export type StopServiceDeploymentStopType = "ABORT" | "ROLLBACK";
export interface StopTaskRequest {
  cluster?: string;
  task: string;
  reason?: string;
}
export interface StopTaskResponse {
  task?: Task;
}
export type EcsString = string;

export type StringList = Array<string>;
export type StringMap = Record<string, string>;
export interface SubmitAttachmentStateChangesRequest {
  cluster?: string;
  attachments: Array<AttachmentStateChange>;
}
export interface SubmitAttachmentStateChangesResponse {
  acknowledgment?: string;
}
export interface SubmitContainerStateChangeRequest {
  cluster?: string;
  task?: string;
  containerName?: string;
  runtimeId?: string;
  status?: string;
  exitCode?: number;
  reason?: string;
  networkBindings?: Array<NetworkBinding>;
}
export interface SubmitContainerStateChangeResponse {
  acknowledgment?: string;
}
export interface SubmitTaskStateChangeRequest {
  cluster?: string;
  task?: string;
  status?: string;
  reason?: string;
  containers?: Array<ContainerStateChange>;
  attachments?: Array<AttachmentStateChange>;
  managedAgents?: Array<ManagedAgentStateChange>;
  pullStartedAt?: Date | string;
  pullStoppedAt?: Date | string;
  executionStoppedAt?: Date | string;
}
export interface SubmitTaskStateChangeResponse {
  acknowledgment?: string;
}
export interface SystemControl {
  namespace?: string;
  value?: string;
}
export type SystemControls = Array<SystemControl>;
export interface Tag {
  key?: string;
  value?: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export declare class TargetNotConnectedException extends EffectData.TaggedError(
  "TargetNotConnectedException",
)<{
  readonly message?: string;
}> {}
export declare class TargetNotFoundException extends EffectData.TaggedError(
  "TargetNotFoundException",
)<{
  readonly message?: string;
}> {}
export type TargetType = "CONTAINER_INSTANCE";
export interface Task {
  attachments?: Array<Attachment>;
  attributes?: Array<Attribute>;
  availabilityZone?: string;
  capacityProviderName?: string;
  clusterArn?: string;
  connectivity?: Connectivity;
  connectivityAt?: Date | string;
  containerInstanceArn?: string;
  containers?: Array<Container>;
  cpu?: string;
  createdAt?: Date | string;
  desiredStatus?: string;
  enableExecuteCommand?: boolean;
  executionStoppedAt?: Date | string;
  group?: string;
  healthStatus?: HealthStatus;
  inferenceAccelerators?: Array<InferenceAccelerator>;
  lastStatus?: string;
  launchType?: LaunchType;
  memory?: string;
  overrides?: TaskOverride;
  platformVersion?: string;
  platformFamily?: string;
  pullStartedAt?: Date | string;
  pullStoppedAt?: Date | string;
  startedAt?: Date | string;
  startedBy?: string;
  stopCode?: TaskStopCode;
  stoppedAt?: Date | string;
  stoppedReason?: string;
  stoppingAt?: Date | string;
  tags?: Array<Tag>;
  taskArn?: string;
  taskDefinitionArn?: string;
  version?: number;
  ephemeralStorage?: EphemeralStorage;
  fargateEphemeralStorage?: TaskEphemeralStorage;
}
export interface TaskDefinition {
  taskDefinitionArn?: string;
  containerDefinitions?: Array<ContainerDefinition>;
  family?: string;
  taskRoleArn?: string;
  executionRoleArn?: string;
  networkMode?: NetworkMode;
  revision?: number;
  volumes?: Array<Volume>;
  status?: TaskDefinitionStatus;
  requiresAttributes?: Array<Attribute>;
  placementConstraints?: Array<TaskDefinitionPlacementConstraint>;
  compatibilities?: Array<Compatibility>;
  runtimePlatform?: RuntimePlatform;
  requiresCompatibilities?: Array<Compatibility>;
  cpu?: string;
  memory?: string;
  inferenceAccelerators?: Array<InferenceAccelerator>;
  pidMode?: PidMode;
  ipcMode?: IpcMode;
  proxyConfiguration?: ProxyConfiguration;
  registeredAt?: Date | string;
  deregisteredAt?: Date | string;
  registeredBy?: string;
  ephemeralStorage?: EphemeralStorage;
  enableFaultInjection?: boolean;
}
export type TaskDefinitionFamilyStatus = "ACTIVE" | "INACTIVE" | "ALL";
export type TaskDefinitionField = "TAGS";
export type TaskDefinitionFieldList = Array<TaskDefinitionField>;
export type TaskDefinitionList = Array<TaskDefinition>;
export interface TaskDefinitionPlacementConstraint {
  type?: TaskDefinitionPlacementConstraintType;
  expression?: string;
}
export type TaskDefinitionPlacementConstraints =
  Array<TaskDefinitionPlacementConstraint>;
export type TaskDefinitionPlacementConstraintType = "MEMBER_OF";
export type TaskDefinitionStatus = "ACTIVE" | "INACTIVE" | "DELETE_IN_PROGRESS";
export interface TaskEphemeralStorage {
  sizeInGiB?: number;
  kmsKeyId?: string;
}
export type TaskField = "TAGS";
export type TaskFieldList = Array<TaskField>;
export type TaskFilesystemType = "EXT3" | "EXT4" | "XFS" | "NTFS";
export interface TaskManagedEBSVolumeConfiguration {
  encrypted?: boolean;
  kmsKeyId?: string;
  volumeType?: string;
  sizeInGiB?: number;
  snapshotId?: string;
  volumeInitializationRate?: number;
  iops?: number;
  throughput?: number;
  tagSpecifications?: Array<EBSTagSpecification>;
  roleArn: string;
  terminationPolicy?: TaskManagedEBSVolumeTerminationPolicy;
  filesystemType?: TaskFilesystemType;
}
export interface TaskManagedEBSVolumeTerminationPolicy {
  deleteOnTermination: boolean;
}
export interface TaskOverride {
  containerOverrides?: Array<ContainerOverride>;
  cpu?: string;
  inferenceAcceleratorOverrides?: Array<InferenceAcceleratorOverride>;
  executionRoleArn?: string;
  memory?: string;
  taskRoleArn?: string;
  ephemeralStorage?: EphemeralStorage;
}
export type Tasks = Array<Task>;
export interface TaskSet {
  id?: string;
  taskSetArn?: string;
  serviceArn?: string;
  clusterArn?: string;
  startedBy?: string;
  externalId?: string;
  status?: string;
  taskDefinition?: string;
  computedDesiredCount?: number;
  pendingCount?: number;
  runningCount?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  launchType?: LaunchType;
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  platformVersion?: string;
  platformFamily?: string;
  networkConfiguration?: NetworkConfiguration;
  loadBalancers?: Array<LoadBalancer>;
  serviceRegistries?: Array<ServiceRegistry>;
  scale?: Scale;
  stabilityStatus?: StabilityStatus;
  stabilityStatusAt?: Date | string;
  tags?: Array<Tag>;
  fargateEphemeralStorage?: DeploymentEphemeralStorage;
}
export type TaskSetField = "TAGS";
export type TaskSetFieldList = Array<TaskSetField>;
export declare class TaskSetNotFoundException extends EffectData.TaggedError(
  "TaskSetNotFoundException",
)<{
  readonly message?: string;
}> {}
export type TaskSets = Array<TaskSet>;
export type TaskStopCode =
  | "TASK_FAILED_TO_START"
  | "ESSENTIAL_CONTAINER_EXITED"
  | "USER_INITIATED"
  | "SERVICE_SCHEDULER_INITIATED"
  | "SPOT_INTERRUPTION"
  | "TERMINATION_NOTICE";
export interface TaskVolumeConfiguration {
  name: string;
  managedEBSVolume?: TaskManagedEBSVolumeConfiguration;
}
export type TaskVolumeConfigurations = Array<TaskVolumeConfiguration>;
export interface TimeoutConfiguration {
  idleTimeoutSeconds?: number;
  perRequestTimeoutSeconds?: number;
}
export type Timestamp = Date | string;

export interface Tmpfs {
  containerPath: string;
  size: number;
  mountOptions?: Array<string>;
}
export type TmpfsList = Array<Tmpfs>;
export type TransportProtocol = "TCP" | "UDP";
export interface Ulimit {
  name: UlimitName;
  softLimit: number;
  hardLimit: number;
}
export type UlimitList = Array<Ulimit>;
export type UlimitName =
  | "CORE"
  | "CPU"
  | "DATA"
  | "FSIZE"
  | "LOCKS"
  | "MEMLOCK"
  | "MSGQUEUE"
  | "NICE"
  | "NOFILE"
  | "NPROC"
  | "RSS"
  | "RTPRIO"
  | "RTTIME"
  | "SIGPENDING"
  | "STACK";
export declare class UnsupportedFeatureException extends EffectData.TaggedError(
  "UnsupportedFeatureException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateCapacityProviderRequest {
  name: string;
  autoScalingGroupProvider: AutoScalingGroupProviderUpdate;
}
export interface UpdateCapacityProviderResponse {
  capacityProvider?: CapacityProvider;
}
export interface UpdateClusterRequest {
  cluster: string;
  settings?: Array<ClusterSetting>;
  configuration?: ClusterConfiguration;
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
}
export interface UpdateClusterResponse {
  cluster?: Cluster;
}
export interface UpdateClusterSettingsRequest {
  cluster: string;
  settings: Array<ClusterSetting>;
}
export interface UpdateClusterSettingsResponse {
  cluster?: Cluster;
}
export interface UpdateContainerAgentRequest {
  cluster?: string;
  containerInstance: string;
}
export interface UpdateContainerAgentResponse {
  containerInstance?: ContainerInstance;
}
export interface UpdateContainerInstancesStateRequest {
  cluster?: string;
  containerInstances: Array<string>;
  status: ContainerInstanceStatus;
}
export interface UpdateContainerInstancesStateResponse {
  containerInstances?: Array<ContainerInstance>;
  failures?: Array<Failure>;
}
export declare class UpdateInProgressException extends EffectData.TaggedError(
  "UpdateInProgressException",
)<{
  readonly message?: string;
}> {}
export interface UpdateServicePrimaryTaskSetRequest {
  cluster: string;
  service: string;
  primaryTaskSet: string;
}
export interface UpdateServicePrimaryTaskSetResponse {
  taskSet?: TaskSet;
}
export interface UpdateServiceRequest {
  cluster?: string;
  service: string;
  desiredCount?: number;
  taskDefinition?: string;
  capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
  deploymentConfiguration?: DeploymentConfiguration;
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing;
  networkConfiguration?: NetworkConfiguration;
  placementConstraints?: Array<PlacementConstraint>;
  placementStrategy?: Array<PlacementStrategy>;
  platformVersion?: string;
  forceNewDeployment?: boolean;
  healthCheckGracePeriodSeconds?: number;
  enableExecuteCommand?: boolean;
  enableECSManagedTags?: boolean;
  loadBalancers?: Array<LoadBalancer>;
  propagateTags?: PropagateTags;
  serviceRegistries?: Array<ServiceRegistry>;
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  volumeConfigurations?: Array<ServiceVolumeConfiguration>;
  vpcLatticeConfigurations?: Array<VpcLatticeConfiguration>;
}
export interface UpdateServiceResponse {
  service?: Service;
}
export interface UpdateTaskProtectionRequest {
  cluster: string;
  tasks: Array<string>;
  protectionEnabled: boolean;
  expiresInMinutes?: number;
}
export interface UpdateTaskProtectionResponse {
  protectedTasks?: Array<ProtectedTask>;
  failures?: Array<Failure>;
}
export interface UpdateTaskSetRequest {
  cluster: string;
  service: string;
  taskSet: string;
  scale: Scale;
}
export interface UpdateTaskSetResponse {
  taskSet?: TaskSet;
}
export type VersionConsistency = "ENABLED" | "DISABLED";
export interface VersionInfo {
  agentVersion?: string;
  agentHash?: string;
  dockerVersion?: string;
}
export interface Volume {
  name?: string;
  host?: HostVolumeProperties;
  dockerVolumeConfiguration?: DockerVolumeConfiguration;
  efsVolumeConfiguration?: EFSVolumeConfiguration;
  fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration;
  configuredAtLaunch?: boolean;
}
export interface VolumeFrom {
  sourceContainer?: string;
  readOnly?: boolean;
}
export type VolumeFromList = Array<VolumeFrom>;
export type VolumeList = Array<Volume>;
export interface VpcLatticeConfiguration {
  roleArn: string;
  targetGroupArn: string;
  portName: string;
}
export type VpcLatticeConfigurations = Array<VpcLatticeConfiguration>;
export declare namespace CreateCapacityProvider {
  export type Input = CreateCapacityProviderRequest;
  export type Output = CreateCapacityProviderResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | LimitExceededException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | NamespaceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace CreateService {
  export type Input = CreateServiceRequest;
  export type Output = CreateServiceResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace CreateTaskSet {
  export type Input = CreateTaskSetRequest;
  export type Output = CreateTaskSetResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace DeleteAccountSetting {
  export type Input = DeleteAccountSettingRequest;
  export type Output = DeleteAccountSettingResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteAttributes {
  export type Input = DeleteAttributesRequest;
  export type Output = DeleteAttributesResponse;
  export type Error =
    | ClusterNotFoundException
    | InvalidParameterException
    | TargetNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteCapacityProvider {
  export type Input = DeleteCapacityProviderRequest;
  export type Output = DeleteCapacityProviderResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | ClientException
    | ClusterContainsContainerInstancesException
    | ClusterContainsServicesException
    | ClusterContainsTasksException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError;
}

export declare namespace DeleteService {
  export type Input = DeleteServiceRequest;
  export type Output = DeleteServiceResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTaskDefinitions {
  export type Input = DeleteTaskDefinitionsRequest;
  export type Output = DeleteTaskDefinitionsResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteTaskSet {
  export type Input = DeleteTaskSetRequest;
  export type Output = DeleteTaskSetResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | TaskSetNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace DeregisterContainerInstance {
  export type Input = DeregisterContainerInstanceRequest;
  export type Output = DeregisterContainerInstanceResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeregisterTaskDefinition {
  export type Input = DeregisterTaskDefinitionRequest;
  export type Output = DeregisterTaskDefinitionResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeCapacityProviders {
  export type Input = DescribeCapacityProvidersRequest;
  export type Output = DescribeCapacityProvidersResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeClusters {
  export type Input = DescribeClustersRequest;
  export type Output = DescribeClustersResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeContainerInstances {
  export type Input = DescribeContainerInstancesRequest;
  export type Output = DescribeContainerInstancesResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeServiceDeployments {
  export type Input = DescribeServiceDeploymentsRequest;
  export type Output = DescribeServiceDeploymentsResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace DescribeServiceRevisions {
  export type Input = DescribeServiceRevisionsRequest;
  export type Output = DescribeServiceRevisionsResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace DescribeServices {
  export type Input = DescribeServicesRequest;
  export type Output = DescribeServicesResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeTaskDefinition {
  export type Input = DescribeTaskDefinitionRequest;
  export type Output = DescribeTaskDefinitionResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeTasks {
  export type Input = DescribeTasksRequest;
  export type Output = DescribeTasksResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeTaskSets {
  export type Input = DescribeTaskSetsRequest;
  export type Output = DescribeTaskSetsResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace DiscoverPollEndpoint {
  export type Input = DiscoverPollEndpointRequest;
  export type Output = DiscoverPollEndpointResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace ExecuteCommand {
  export type Input = ExecuteCommandRequest;
  export type Output = ExecuteCommandResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | TargetNotConnectedException
    | CommonAwsError;
}

export declare namespace GetTaskProtection {
  export type Input = GetTaskProtectionRequest;
  export type Output = GetTaskProtectionResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace ListAccountSettings {
  export type Input = ListAccountSettingsRequest;
  export type Output = ListAccountSettingsResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListAttributes {
  export type Input = ListAttributesRequest;
  export type Output = ListAttributesResponse;
  export type Error =
    | ClusterNotFoundException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersRequest;
  export type Output = ListClustersResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListContainerInstances {
  export type Input = ListContainerInstancesRequest;
  export type Output = ListContainerInstancesResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListServiceDeployments {
  export type Input = ListServiceDeploymentsRequest;
  export type Output = ListServiceDeploymentsResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace ListServices {
  export type Input = ListServicesRequest;
  export type Output = ListServicesResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListServicesByNamespace {
  export type Input = ListServicesByNamespaceRequest;
  export type Output = ListServicesByNamespaceResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | NamespaceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListTaskDefinitionFamilies {
  export type Input = ListTaskDefinitionFamiliesRequest;
  export type Output = ListTaskDefinitionFamiliesResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListTaskDefinitions {
  export type Input = ListTaskDefinitionsRequest;
  export type Output = ListTaskDefinitionsResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListTasks {
  export type Input = ListTasksRequest;
  export type Output = ListTasksResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotFoundException
    | CommonAwsError;
}

export declare namespace PutAccountSetting {
  export type Input = PutAccountSettingRequest;
  export type Output = PutAccountSettingResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace PutAccountSettingDefault {
  export type Input = PutAccountSettingDefaultRequest;
  export type Output = PutAccountSettingDefaultResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace PutAttributes {
  export type Input = PutAttributesRequest;
  export type Output = PutAttributesResponse;
  export type Error =
    | AttributeLimitExceededException
    | ClusterNotFoundException
    | InvalidParameterException
    | TargetNotFoundException
    | CommonAwsError;
}

export declare namespace PutClusterCapacityProviders {
  export type Input = PutClusterCapacityProvidersRequest;
  export type Output = PutClusterCapacityProvidersResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceInUseException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError;
}

export declare namespace RegisterContainerInstance {
  export type Input = RegisterContainerInstanceRequest;
  export type Output = RegisterContainerInstanceResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace RegisterTaskDefinition {
  export type Input = RegisterTaskDefinitionRequest;
  export type Output = RegisterTaskDefinitionResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace RunTask {
  export type Input = RunTaskRequest;
  export type Output = RunTaskResponse;
  export type Error =
    | AccessDeniedException
    | BlockedException
    | ClientException
    | ClusterNotFoundException
    | ConflictException
    | InvalidParameterException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace StartTask {
  export type Input = StartTaskRequest;
  export type Output = StartTaskResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace StopServiceDeployment {
  export type Input = StopServiceDeploymentRequest;
  export type Output = StopServiceDeploymentResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ConflictException
    | InvalidParameterException
    | ServerException
    | ServiceDeploymentNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace StopTask {
  export type Input = StopTaskRequest;
  export type Output = StopTaskResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace SubmitAttachmentStateChanges {
  export type Input = SubmitAttachmentStateChangesRequest;
  export type Output = SubmitAttachmentStateChangesResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace SubmitContainerStateChange {
  export type Input = SubmitContainerStateChangeRequest;
  export type Output = SubmitContainerStateChangeResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ServerException
    | CommonAwsError;
}

export declare namespace SubmitTaskStateChange {
  export type Input = SubmitTaskStateChangeRequest;
  export type Output = SubmitTaskStateChangeResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateCapacityProvider {
  export type Input = UpdateCapacityProviderRequest;
  export type Output = UpdateCapacityProviderResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterRequest;
  export type Output = UpdateClusterResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateClusterSettings {
  export type Input = UpdateClusterSettingsRequest;
  export type Output = UpdateClusterSettingsResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateContainerAgent {
  export type Input = UpdateContainerAgentRequest;
  export type Output = UpdateContainerAgentResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | MissingVersionException
    | NoUpdateAvailableException
    | ServerException
    | UpdateInProgressException
    | CommonAwsError;
}

export declare namespace UpdateContainerInstancesState {
  export type Input = UpdateContainerInstancesStateRequest;
  export type Output = UpdateContainerInstancesStateResponse;
  export type Error =
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateService {
  export type Input = UpdateServiceRequest;
  export type Output = UpdateServiceResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | NamespaceNotFoundException
    | PlatformTaskDefinitionIncompatibilityException
    | PlatformUnknownException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace UpdateServicePrimaryTaskSet {
  export type Input = UpdateServicePrimaryTaskSetRequest;
  export type Output = UpdateServicePrimaryTaskSetResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | TaskSetNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace UpdateTaskProtection {
  export type Input = UpdateTaskProtectionRequest;
  export type Output = UpdateTaskProtectionResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | UnsupportedFeatureException
    | CommonAwsError;
}

export declare namespace UpdateTaskSet {
  export type Input = UpdateTaskSetRequest;
  export type Output = UpdateTaskSetResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ClusterNotFoundException
    | InvalidParameterException
    | ServerException
    | ServiceNotActiveException
    | ServiceNotFoundException
    | TaskSetNotFoundException
    | UnsupportedFeatureException
    | CommonAwsError;
}
