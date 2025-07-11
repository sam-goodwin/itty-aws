import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSBatchV20160810 {
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    CancelJobResponse,
    ClientException | ServerException | CommonAwsError
  >;
  createComputeEnvironment(
    input: CreateComputeEnvironmentRequest,
  ): Effect.Effect<
    CreateComputeEnvironmentResponse,
    ClientException | ServerException | CommonAwsError
  >;
  createConsumableResource(
    input: CreateConsumableResourceRequest,
  ): Effect.Effect<
    CreateConsumableResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  createJobQueue(
    input: CreateJobQueueRequest,
  ): Effect.Effect<
    CreateJobQueueResponse,
    ClientException | ServerException | CommonAwsError
  >;
  createSchedulingPolicy(
    input: CreateSchedulingPolicyRequest,
  ): Effect.Effect<
    CreateSchedulingPolicyResponse,
    ClientException | ServerException | CommonAwsError
  >;
  deleteComputeEnvironment(
    input: DeleteComputeEnvironmentRequest,
  ): Effect.Effect<
    DeleteComputeEnvironmentResponse,
    ClientException | ServerException | CommonAwsError
  >;
  deleteConsumableResource(
    input: DeleteConsumableResourceRequest,
  ): Effect.Effect<
    DeleteConsumableResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  deleteJobQueue(
    input: DeleteJobQueueRequest,
  ): Effect.Effect<
    DeleteJobQueueResponse,
    ClientException | ServerException | CommonAwsError
  >;
  deleteSchedulingPolicy(
    input: DeleteSchedulingPolicyRequest,
  ): Effect.Effect<
    DeleteSchedulingPolicyResponse,
    ClientException | ServerException | CommonAwsError
  >;
  deregisterJobDefinition(
    input: DeregisterJobDefinitionRequest,
  ): Effect.Effect<
    DeregisterJobDefinitionResponse,
    ClientException | ServerException | CommonAwsError
  >;
  describeComputeEnvironments(
    input: DescribeComputeEnvironmentsRequest,
  ): Effect.Effect<
    DescribeComputeEnvironmentsResponse,
    ClientException | ServerException | CommonAwsError
  >;
  describeConsumableResource(
    input: DescribeConsumableResourceRequest,
  ): Effect.Effect<
    DescribeConsumableResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  describeJobDefinitions(
    input: DescribeJobDefinitionsRequest,
  ): Effect.Effect<
    DescribeJobDefinitionsResponse,
    ClientException | ServerException | CommonAwsError
  >;
  describeJobQueues(
    input: DescribeJobQueuesRequest,
  ): Effect.Effect<
    DescribeJobQueuesResponse,
    ClientException | ServerException | CommonAwsError
  >;
  describeJobs(
    input: DescribeJobsRequest,
  ): Effect.Effect<
    DescribeJobsResponse,
    ClientException | ServerException | CommonAwsError
  >;
  describeSchedulingPolicies(
    input: DescribeSchedulingPoliciesRequest,
  ): Effect.Effect<
    DescribeSchedulingPoliciesResponse,
    ClientException | ServerException | CommonAwsError
  >;
  getJobQueueSnapshot(
    input: GetJobQueueSnapshotRequest,
  ): Effect.Effect<
    GetJobQueueSnapshotResponse,
    ClientException | ServerException | CommonAwsError
  >;
  listConsumableResources(
    input: ListConsumableResourcesRequest,
  ): Effect.Effect<
    ListConsumableResourcesResponse,
    ClientException | ServerException | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResponse,
    ClientException | ServerException | CommonAwsError
  >;
  listJobsByConsumableResource(
    input: ListJobsByConsumableResourceRequest,
  ): Effect.Effect<
    ListJobsByConsumableResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  listSchedulingPolicies(
    input: ListSchedulingPoliciesRequest,
  ): Effect.Effect<
    ListSchedulingPoliciesResponse,
    ClientException | ServerException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  registerJobDefinition(
    input: RegisterJobDefinitionRequest,
  ): Effect.Effect<
    RegisterJobDefinitionResponse,
    ClientException | ServerException | CommonAwsError
  >;
  submitJob(
    input: SubmitJobRequest,
  ): Effect.Effect<
    SubmitJobResponse,
    ClientException | ServerException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  terminateJob(
    input: TerminateJobRequest,
  ): Effect.Effect<
    TerminateJobResponse,
    ClientException | ServerException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  updateComputeEnvironment(
    input: UpdateComputeEnvironmentRequest,
  ): Effect.Effect<
    UpdateComputeEnvironmentResponse,
    ClientException | ServerException | CommonAwsError
  >;
  updateConsumableResource(
    input: UpdateConsumableResourceRequest,
  ): Effect.Effect<
    UpdateConsumableResourceResponse,
    ClientException | ServerException | CommonAwsError
  >;
  updateJobQueue(
    input: UpdateJobQueueRequest,
  ): Effect.Effect<
    UpdateJobQueueResponse,
    ClientException | ServerException | CommonAwsError
  >;
  updateSchedulingPolicy(
    input: UpdateSchedulingPolicyRequest,
  ): Effect.Effect<
    UpdateSchedulingPolicyResponse,
    ClientException | ServerException | CommonAwsError
  >;
}

export type Batch = AWSBatchV20160810;

export type ArrayJobDependency = "N_TO_N" | "SEQUENTIAL";
export type ArrayJobStatusSummary = Record<string, number>;
export interface ArrayProperties {
  size?: number;
}
export interface ArrayPropertiesDetail {
  statusSummary?: Record<string, number>;
  size?: number;
  index?: number;
}
export interface ArrayPropertiesSummary {
  size?: number;
  index?: number;
}
export type AssignPublicIp = "ENABLED" | "DISABLED";
export interface AttemptContainerDetail {
  containerInstanceArn?: string;
  taskArn?: string;
  exitCode?: number;
  reason?: string;
  logStreamName?: string;
  networkInterfaces?: Array<NetworkInterface>;
}
export interface AttemptDetail {
  container?: AttemptContainerDetail;
  startedAt?: number;
  stoppedAt?: number;
  statusReason?: string;
  taskProperties?: Array<AttemptEcsTaskDetails>;
}
export type AttemptDetails = Array<AttemptDetail>;
export interface AttemptEcsTaskDetails {
  containerInstanceArn?: string;
  taskArn?: string;
  containers?: Array<AttemptTaskContainerDetails>;
}
export interface AttemptTaskContainerDetails {
  exitCode?: number;
  name?: string;
  reason?: string;
  logStreamName?: string;
  networkInterfaces?: Array<NetworkInterface>;
}
export interface CancelJobRequest {
  jobId: string;
  reason: string;
}
export interface CancelJobResponse {}
export type CEState = "ENABLED" | "DISABLED";
export type CEStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "VALID"
  | "INVALID";
export type CEType = "MANAGED" | "UNMANAGED";
export declare class ClientException extends EffectData.TaggedError(
  "ClientException",
)<{
  readonly message?: string;
}> {}
export type ClientRequestToken = string;

export interface ComputeEnvironmentDetail {
  computeEnvironmentName: string;
  computeEnvironmentArn: string;
  unmanagedvCpus?: number;
  ecsClusterArn?: string;
  tags?: Record<string, string>;
  type?: CEType;
  state?: CEState;
  status?: CEStatus;
  statusReason?: string;
  computeResources?: ComputeResource;
  serviceRole?: string;
  updatePolicy?: UpdatePolicy;
  eksConfiguration?: EksConfiguration;
  containerOrchestrationType?: OrchestrationType;
  uuid?: string;
  context?: string;
}
export type ComputeEnvironmentDetailList = Array<ComputeEnvironmentDetail>;
export interface ComputeEnvironmentOrder {
  order: number;
  computeEnvironment: string;
}
export type ComputeEnvironmentOrders = Array<ComputeEnvironmentOrder>;
export interface ComputeResource {
  type: CRType;
  allocationStrategy?: CRAllocationStrategy;
  minvCpus?: number;
  maxvCpus: number;
  desiredvCpus?: number;
  instanceTypes?: Array<string>;
  imageId?: string;
  subnets: Array<string>;
  securityGroupIds?: Array<string>;
  ec2KeyPair?: string;
  instanceRole?: string;
  tags?: Record<string, string>;
  placementGroup?: string;
  bidPercentage?: number;
  spotIamFleetRole?: string;
  launchTemplate?: LaunchTemplateSpecification;
  ec2Configuration?: Array<Ec2Configuration>;
}
export interface ComputeResourceUpdate {
  minvCpus?: number;
  maxvCpus?: number;
  desiredvCpus?: number;
  subnets?: Array<string>;
  securityGroupIds?: Array<string>;
  allocationStrategy?: CRUpdateAllocationStrategy;
  instanceTypes?: Array<string>;
  ec2KeyPair?: string;
  instanceRole?: string;
  tags?: Record<string, string>;
  placementGroup?: string;
  bidPercentage?: number;
  launchTemplate?: LaunchTemplateSpecification;
  ec2Configuration?: Array<Ec2Configuration>;
  updateToLatestImageVersion?: boolean;
  type?: CRType;
  imageId?: string;
}
export type ConsumableResourceList = Array<ConsumableResourceRequirement>;
export interface ConsumableResourceProperties {
  consumableResourceList?: Array<ConsumableResourceRequirement>;
}
export interface ConsumableResourceRequirement {
  consumableResource?: string;
  quantity?: number;
}
export interface ConsumableResourceSummary {
  consumableResourceArn: string;
  consumableResourceName: string;
  totalQuantity?: number;
  inUseQuantity?: number;
  resourceType?: string;
}
export type ConsumableResourceSummaryList = Array<ConsumableResourceSummary>;
export interface ContainerDetail {
  image?: string;
  vcpus?: number;
  memory?: number;
  command?: Array<string>;
  jobRoleArn?: string;
  executionRoleArn?: string;
  volumes?: Array<Volume>;
  environment?: Array<KeyValuePair>;
  mountPoints?: Array<MountPoint>;
  readonlyRootFilesystem?: boolean;
  ulimits?: Array<Ulimit>;
  privileged?: boolean;
  user?: string;
  exitCode?: number;
  reason?: string;
  containerInstanceArn?: string;
  taskArn?: string;
  logStreamName?: string;
  instanceType?: string;
  networkInterfaces?: Array<NetworkInterface>;
  resourceRequirements?: Array<ResourceRequirement>;
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  secrets?: Array<Secret>;
  networkConfiguration?: NetworkConfiguration;
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
  ephemeralStorage?: EphemeralStorage;
  runtimePlatform?: RuntimePlatform;
  repositoryCredentials?: RepositoryCredentials;
  enableExecuteCommand?: boolean;
}
export interface ContainerOverrides {
  vcpus?: number;
  memory?: number;
  command?: Array<string>;
  instanceType?: string;
  environment?: Array<KeyValuePair>;
  resourceRequirements?: Array<ResourceRequirement>;
}
export interface ContainerProperties {
  image?: string;
  vcpus?: number;
  memory?: number;
  command?: Array<string>;
  jobRoleArn?: string;
  executionRoleArn?: string;
  volumes?: Array<Volume>;
  environment?: Array<KeyValuePair>;
  mountPoints?: Array<MountPoint>;
  readonlyRootFilesystem?: boolean;
  privileged?: boolean;
  ulimits?: Array<Ulimit>;
  user?: string;
  instanceType?: string;
  resourceRequirements?: Array<ResourceRequirement>;
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  secrets?: Array<Secret>;
  networkConfiguration?: NetworkConfiguration;
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
  enableExecuteCommand?: boolean;
  ephemeralStorage?: EphemeralStorage;
  runtimePlatform?: RuntimePlatform;
  repositoryCredentials?: RepositoryCredentials;
}
export interface ContainerSummary {
  exitCode?: number;
  reason?: string;
}
export type CRAllocationStrategy =
  | "BEST_FIT"
  | "BEST_FIT_PROGRESSIVE"
  | "SPOT_CAPACITY_OPTIMIZED"
  | "SPOT_PRICE_CAPACITY_OPTIMIZED";
export interface CreateComputeEnvironmentRequest {
  computeEnvironmentName: string;
  type: CEType;
  state?: CEState;
  unmanagedvCpus?: number;
  computeResources?: ComputeResource;
  serviceRole?: string;
  tags?: Record<string, string>;
  eksConfiguration?: EksConfiguration;
  context?: string;
}
export interface CreateComputeEnvironmentResponse {
  computeEnvironmentName?: string;
  computeEnvironmentArn?: string;
}
export interface CreateConsumableResourceRequest {
  consumableResourceName: string;
  totalQuantity?: number;
  resourceType?: string;
  tags?: Record<string, string>;
}
export interface CreateConsumableResourceResponse {
  consumableResourceName: string;
  consumableResourceArn: string;
}
export interface CreateJobQueueRequest {
  jobQueueName: string;
  state?: JQState;
  schedulingPolicyArn?: string;
  priority: number;
  computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
  tags?: Record<string, string>;
  jobStateTimeLimitActions?: Array<JobStateTimeLimitAction>;
}
export interface CreateJobQueueResponse {
  jobQueueName: string;
  jobQueueArn: string;
}
export interface CreateSchedulingPolicyRequest {
  name: string;
  fairsharePolicy?: FairsharePolicy;
  tags?: Record<string, string>;
}
export interface CreateSchedulingPolicyResponse {
  name: string;
  arn: string;
}
export type CRType = "EC2" | "SPOT" | "FARGATE" | "FARGATE_SPOT";
export type CRUpdateAllocationStrategy =
  | "BEST_FIT_PROGRESSIVE"
  | "SPOT_CAPACITY_OPTIMIZED"
  | "SPOT_PRICE_CAPACITY_OPTIMIZED";
export interface DeleteComputeEnvironmentRequest {
  computeEnvironment: string;
}
export interface DeleteComputeEnvironmentResponse {}
export interface DeleteConsumableResourceRequest {
  consumableResource: string;
}
export interface DeleteConsumableResourceResponse {}
export interface DeleteJobQueueRequest {
  jobQueue: string;
}
export interface DeleteJobQueueResponse {}
export interface DeleteSchedulingPolicyRequest {
  arn: string;
}
export interface DeleteSchedulingPolicyResponse {}
export interface DeregisterJobDefinitionRequest {
  jobDefinition: string;
}
export interface DeregisterJobDefinitionResponse {}
export interface DescribeComputeEnvironmentsRequest {
  computeEnvironments?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeComputeEnvironmentsResponse {
  computeEnvironments?: Array<ComputeEnvironmentDetail>;
  nextToken?: string;
}
export interface DescribeConsumableResourceRequest {
  consumableResource: string;
}
export interface DescribeConsumableResourceResponse {
  consumableResourceName: string;
  consumableResourceArn: string;
  totalQuantity?: number;
  inUseQuantity?: number;
  availableQuantity?: number;
  resourceType?: string;
  createdAt?: number;
  tags?: Record<string, string>;
}
export interface DescribeJobDefinitionsRequest {
  jobDefinitions?: Array<string>;
  maxResults?: number;
  jobDefinitionName?: string;
  status?: string;
  nextToken?: string;
}
export interface DescribeJobDefinitionsResponse {
  jobDefinitions?: Array<JobDefinition>;
  nextToken?: string;
}
export interface DescribeJobQueuesRequest {
  jobQueues?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeJobQueuesResponse {
  jobQueues?: Array<JobQueueDetail>;
  nextToken?: string;
}
export interface DescribeJobsRequest {
  jobs: Array<string>;
}
export interface DescribeJobsResponse {
  jobs?: Array<JobDetail>;
}
export interface DescribeSchedulingPoliciesRequest {
  arns: Array<string>;
}
export interface DescribeSchedulingPoliciesResponse {
  schedulingPolicies?: Array<SchedulingPolicyDetail>;
}
export interface Device {
  hostPath: string;
  containerPath?: string;
  permissions?: Array<DeviceCgroupPermission>;
}
export type DeviceCgroupPermission = "READ" | "WRITE" | "MKNOD";
export type DeviceCgroupPermissions = Array<DeviceCgroupPermission>;
export type DevicesList = Array<Device>;
export interface Ec2Configuration {
  imageType: string;
  imageIdOverride?: string;
  imageKubernetesVersion?: string;
}
export type Ec2ConfigurationList = Array<Ec2Configuration>;
export interface EcsProperties {
  taskProperties: Array<EcsTaskProperties>;
}
export interface EcsPropertiesDetail {
  taskProperties?: Array<EcsTaskDetails>;
}
export interface EcsPropertiesOverride {
  taskProperties?: Array<TaskPropertiesOverride>;
}
export interface EcsTaskDetails {
  containers?: Array<TaskContainerDetails>;
  containerInstanceArn?: string;
  taskArn?: string;
  ephemeralStorage?: EphemeralStorage;
  executionRoleArn?: string;
  platformVersion?: string;
  ipcMode?: string;
  taskRoleArn?: string;
  pidMode?: string;
  networkConfiguration?: NetworkConfiguration;
  runtimePlatform?: RuntimePlatform;
  volumes?: Array<Volume>;
  enableExecuteCommand?: boolean;
}
export interface EcsTaskProperties {
  containers: Array<TaskContainerProperties>;
  ephemeralStorage?: EphemeralStorage;
  executionRoleArn?: string;
  platformVersion?: string;
  ipcMode?: string;
  taskRoleArn?: string;
  pidMode?: string;
  networkConfiguration?: NetworkConfiguration;
  runtimePlatform?: RuntimePlatform;
  volumes?: Array<Volume>;
  enableExecuteCommand?: boolean;
}
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
export type EksAnnotationsMap = Record<string, string>;
export interface EksAttemptContainerDetail {
  name?: string;
  containerID?: string;
  exitCode?: number;
  reason?: string;
}
export type EksAttemptContainerDetails = Array<EksAttemptContainerDetail>;
export interface EksAttemptDetail {
  containers?: Array<EksAttemptContainerDetail>;
  initContainers?: Array<EksAttemptContainerDetail>;
  eksClusterArn?: string;
  podName?: string;
  podNamespace?: string;
  nodeName?: string;
  startedAt?: number;
  stoppedAt?: number;
  statusReason?: string;
}
export type EksAttemptDetails = Array<EksAttemptDetail>;
export interface EksConfiguration {
  eksClusterArn: string;
  kubernetesNamespace: string;
}
export interface EksContainer {
  name?: string;
  image: string;
  imagePullPolicy?: string;
  command?: Array<string>;
  args?: Array<string>;
  env?: Array<EksContainerEnvironmentVariable>;
  resources?: EksContainerResourceRequirements;
  volumeMounts?: Array<EksContainerVolumeMount>;
  securityContext?: EksContainerSecurityContext;
}
export interface EksContainerDetail {
  name?: string;
  image?: string;
  imagePullPolicy?: string;
  command?: Array<string>;
  args?: Array<string>;
  env?: Array<EksContainerEnvironmentVariable>;
  resources?: EksContainerResourceRequirements;
  exitCode?: number;
  reason?: string;
  volumeMounts?: Array<EksContainerVolumeMount>;
  securityContext?: EksContainerSecurityContext;
}
export type EksContainerDetails = Array<EksContainerDetail>;
export interface EksContainerEnvironmentVariable {
  name: string;
  value?: string;
}
export type EksContainerEnvironmentVariables =
  Array<EksContainerEnvironmentVariable>;
export interface EksContainerOverride {
  name?: string;
  image?: string;
  command?: Array<string>;
  args?: Array<string>;
  env?: Array<EksContainerEnvironmentVariable>;
  resources?: EksContainerResourceRequirements;
}
export type EksContainerOverrideList = Array<EksContainerOverride>;
export interface EksContainerResourceRequirements {
  limits?: Record<string, string>;
  requests?: Record<string, string>;
}
export type EksContainers = Array<EksContainer>;
export interface EksContainerSecurityContext {
  runAsUser?: number;
  runAsGroup?: number;
  privileged?: boolean;
  allowPrivilegeEscalation?: boolean;
  readOnlyRootFilesystem?: boolean;
  runAsNonRoot?: boolean;
}
export interface EksContainerVolumeMount {
  name?: string;
  mountPath?: string;
  subPath?: string;
  readOnly?: boolean;
}
export type EksContainerVolumeMounts = Array<EksContainerVolumeMount>;
export interface EksEmptyDir {
  medium?: string;
  sizeLimit?: string;
}
export interface EksHostPath {
  path?: string;
}
export type EksLabelsMap = Record<string, string>;
export type EksLimits = Record<string, string>;
export interface EksMetadata {
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  namespace?: string;
}
export interface EksPersistentVolumeClaim {
  claimName: string;
  readOnly?: boolean;
}
export interface EksPodProperties {
  serviceAccountName?: string;
  hostNetwork?: boolean;
  dnsPolicy?: string;
  imagePullSecrets?: Array<ImagePullSecret>;
  containers?: Array<EksContainer>;
  initContainers?: Array<EksContainer>;
  volumes?: Array<EksVolume>;
  metadata?: EksMetadata;
  shareProcessNamespace?: boolean;
}
export interface EksPodPropertiesDetail {
  serviceAccountName?: string;
  hostNetwork?: boolean;
  dnsPolicy?: string;
  imagePullSecrets?: Array<ImagePullSecret>;
  containers?: Array<EksContainerDetail>;
  initContainers?: Array<EksContainerDetail>;
  volumes?: Array<EksVolume>;
  podName?: string;
  nodeName?: string;
  metadata?: EksMetadata;
  shareProcessNamespace?: boolean;
}
export interface EksPodPropertiesOverride {
  containers?: Array<EksContainerOverride>;
  initContainers?: Array<EksContainerOverride>;
  metadata?: EksMetadata;
}
export interface EksProperties {
  podProperties?: EksPodProperties;
}
export interface EksPropertiesDetail {
  podProperties?: EksPodPropertiesDetail;
}
export interface EksPropertiesOverride {
  podProperties?: EksPodPropertiesOverride;
}
export type EksRequests = Record<string, string>;
export interface EksSecret {
  secretName: string;
  optional?: boolean;
}
export interface EksVolume {
  name: string;
  hostPath?: EksHostPath;
  emptyDir?: EksEmptyDir;
  secret?: EksSecret;
  persistentVolumeClaim?: EksPersistentVolumeClaim;
}
export type EksVolumes = Array<EksVolume>;
export type EnvironmentVariables = Array<KeyValuePair>;
export interface EphemeralStorage {
  sizeInGiB: number;
}
export interface EvaluateOnExit {
  onStatusReason?: string;
  onReason?: string;
  onExitCode?: string;
  action: RetryAction;
}
export type EvaluateOnExitList = Array<EvaluateOnExit>;
export interface FairsharePolicy {
  shareDecaySeconds?: number;
  computeReservation?: number;
  shareDistribution?: Array<ShareAttributes>;
}
export interface FargatePlatformConfiguration {
  platformVersion?: string;
}
export interface FirelensConfiguration {
  type: FirelensConfigurationType;
  options?: Record<string, string>;
}
export type FirelensConfigurationOptionsMap = Record<string, string>;
export type FirelensConfigurationType = "FLUENTD" | "FLUENTBIT";
export type Float = number;

export interface FrontOfQueueDetail {
  jobs?: Array<FrontOfQueueJobSummary>;
  lastUpdatedAt?: number;
}
export interface FrontOfQueueJobSummary {
  jobArn?: string;
  earliestTimeAtPosition?: number;
}
export type FrontOfQueueJobSummaryList = Array<FrontOfQueueJobSummary>;
export interface GetJobQueueSnapshotRequest {
  jobQueue: string;
}
export interface GetJobQueueSnapshotResponse {
  frontOfQueue?: FrontOfQueueDetail;
}
export interface Host {
  sourcePath?: string;
}
export type ImageIdOverride = string;

export interface ImagePullSecret {
  name: string;
}
export type ImagePullSecrets = Array<ImagePullSecret>;
export type ImageType = string;

export type Integer = number;

export interface JobDefinition {
  jobDefinitionName: string;
  jobDefinitionArn: string;
  revision: number;
  status?: string;
  type: string;
  schedulingPriority?: number;
  parameters?: Record<string, string>;
  retryStrategy?: RetryStrategy;
  containerProperties?: ContainerProperties;
  timeout?: JobTimeout;
  nodeProperties?: NodeProperties;
  tags?: Record<string, string>;
  propagateTags?: boolean;
  platformCapabilities?: Array<PlatformCapability>;
  ecsProperties?: EcsProperties;
  eksProperties?: EksProperties;
  containerOrchestrationType?: OrchestrationType;
  consumableResourceProperties?: ConsumableResourceProperties;
}
export type JobDefinitionList = Array<JobDefinition>;
export type JobDefinitionType = "Container" | "Multinode";
export interface JobDependency {
  jobId?: string;
  type?: ArrayJobDependency;
}
export type JobDependencyList = Array<JobDependency>;
export interface JobDetail {
  jobArn?: string;
  jobName: string;
  jobId: string;
  jobQueue: string;
  status: JobStatus;
  shareIdentifier?: string;
  schedulingPriority?: number;
  attempts?: Array<AttemptDetail>;
  statusReason?: string;
  createdAt?: number;
  retryStrategy?: RetryStrategy;
  startedAt: number;
  stoppedAt?: number;
  dependsOn?: Array<JobDependency>;
  jobDefinition: string;
  parameters?: Record<string, string>;
  container?: ContainerDetail;
  nodeDetails?: NodeDetails;
  nodeProperties?: NodeProperties;
  arrayProperties?: ArrayPropertiesDetail;
  timeout?: JobTimeout;
  tags?: Record<string, string>;
  propagateTags?: boolean;
  platformCapabilities?: Array<PlatformCapability>;
  eksProperties?: EksPropertiesDetail;
  eksAttempts?: Array<EksAttemptDetail>;
  ecsProperties?: EcsPropertiesDetail;
  isCancelled?: boolean;
  isTerminated?: boolean;
  consumableResourceProperties?: ConsumableResourceProperties;
}
export type JobDetailList = Array<JobDetail>;
export type JobExecutionTimeoutMinutes = number;

export interface JobQueueDetail {
  jobQueueName: string;
  jobQueueArn: string;
  state: JQState;
  schedulingPolicyArn?: string;
  status?: JQStatus;
  statusReason?: string;
  priority: number;
  computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
  tags?: Record<string, string>;
  jobStateTimeLimitActions?: Array<JobStateTimeLimitAction>;
}
export type JobQueueDetailList = Array<JobQueueDetail>;
export interface JobStateTimeLimitAction {
  reason: string;
  state: JobStateTimeLimitActionsState;
  maxTimeSeconds: number;
  action: JobStateTimeLimitActionsAction;
}
export type JobStateTimeLimitActions = Array<JobStateTimeLimitAction>;
export type JobStateTimeLimitActionsAction = "CANCEL";
export type JobStateTimeLimitActionsState = "RUNNABLE";
export type JobStatus =
  | "SUBMITTED"
  | "PENDING"
  | "RUNNABLE"
  | "STARTING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED";
export interface JobSummary {
  jobArn?: string;
  jobId: string;
  jobName: string;
  createdAt?: number;
  status?: JobStatus;
  statusReason?: string;
  startedAt?: number;
  stoppedAt?: number;
  container?: ContainerSummary;
  arrayProperties?: ArrayPropertiesSummary;
  nodeProperties?: NodePropertiesSummary;
  jobDefinition?: string;
}
export type JobSummaryList = Array<JobSummary>;
export interface JobTimeout {
  attemptDurationSeconds?: number;
}
export type JQState = "ENABLED" | "DISABLED";
export type JQStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "VALID"
  | "INVALID";
export interface KeyValuePair {
  name?: string;
  value?: string;
}
export interface KeyValuesPair {
  name?: string;
  values?: Array<string>;
}
export type KubernetesVersion = string;

export interface LaunchTemplateSpecification {
  launchTemplateId?: string;
  launchTemplateName?: string;
  version?: string;
  overrides?: Array<LaunchTemplateSpecificationOverride>;
  userdataType?: UserdataType;
}
export interface LaunchTemplateSpecificationOverride {
  launchTemplateId?: string;
  launchTemplateName?: string;
  version?: string;
  targetInstanceTypes?: Array<string>;
  userdataType?: UserdataType;
}
export type LaunchTemplateSpecificationOverrideList =
  Array<LaunchTemplateSpecificationOverride>;
export interface LinuxParameters {
  devices?: Array<Device>;
  initProcessEnabled?: boolean;
  sharedMemorySize?: number;
  tmpfs?: Array<Tmpfs>;
  maxSwap?: number;
  swappiness?: number;
}
export type ListAttemptEcsTaskDetails = Array<AttemptEcsTaskDetails>;
export type ListAttemptTaskContainerDetails =
  Array<AttemptTaskContainerDetails>;
export type ListConsumableResourcesFilterList = Array<KeyValuesPair>;
export interface ListConsumableResourcesRequest {
  filters?: Array<KeyValuesPair>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListConsumableResourcesResponse {
  consumableResources: Array<ConsumableResourceSummary>;
  nextToken?: string;
}
export type ListEcsTaskDetails = Array<EcsTaskDetails>;
export type ListEcsTaskProperties = Array<EcsTaskProperties>;
export type ListJobsByConsumableResourceFilterList = Array<KeyValuesPair>;
export interface ListJobsByConsumableResourceRequest {
  consumableResource: string;
  filters?: Array<KeyValuesPair>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListJobsByConsumableResourceResponse {
  jobs: Array<ListJobsByConsumableResourceSummary>;
  nextToken?: string;
}
export interface ListJobsByConsumableResourceSummary {
  jobArn: string;
  jobQueueArn: string;
  jobName: string;
  jobDefinitionArn?: string;
  shareIdentifier?: string;
  jobStatus: string;
  quantity: number;
  statusReason?: string;
  startedAt?: number;
  createdAt: number;
  consumableResourceProperties: ConsumableResourceProperties;
}
export type ListJobsByConsumableResourceSummaryList =
  Array<ListJobsByConsumableResourceSummary>;
export type ListJobsFilterList = Array<KeyValuesPair>;
export interface ListJobsRequest {
  jobQueue?: string;
  arrayJobId?: string;
  multiNodeJobId?: string;
  jobStatus?: JobStatus;
  maxResults?: number;
  nextToken?: string;
  filters?: Array<KeyValuesPair>;
}
export interface ListJobsResponse {
  jobSummaryList: Array<JobSummary>;
  nextToken?: string;
}
export interface ListSchedulingPoliciesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSchedulingPoliciesResponse {
  schedulingPolicies?: Array<SchedulingPolicyListingDetail>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type ListTaskContainerDetails = Array<TaskContainerDetails>;
export type ListTaskContainerOverrides = Array<TaskContainerOverrides>;
export type ListTaskContainerProperties = Array<TaskContainerProperties>;
export type ListTaskPropertiesOverride = Array<TaskPropertiesOverride>;
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

export interface MountPoint {
  containerPath?: string;
  readOnly?: boolean;
  sourceVolume?: string;
}
export type MountPoints = Array<MountPoint>;
export interface NetworkConfiguration {
  assignPublicIp?: AssignPublicIp;
}
export interface NetworkInterface {
  attachmentId?: string;
  ipv6Address?: string;
  privateIpv4Address?: string;
}
export type NetworkInterfaceList = Array<NetworkInterface>;
export interface NodeDetails {
  nodeIndex?: number;
  isMainNode?: boolean;
}
export interface NodeOverrides {
  numNodes?: number;
  nodePropertyOverrides?: Array<NodePropertyOverride>;
}
export interface NodeProperties {
  numNodes: number;
  mainNode: number;
  nodeRangeProperties: Array<NodeRangeProperty>;
}
export interface NodePropertiesSummary {
  isMainNode?: boolean;
  numNodes?: number;
  nodeIndex?: number;
}
export interface NodePropertyOverride {
  targetNodes: string;
  containerOverrides?: ContainerOverrides;
  ecsPropertiesOverride?: EcsPropertiesOverride;
  instanceTypes?: Array<string>;
  eksPropertiesOverride?: EksPropertiesOverride;
  consumableResourcePropertiesOverride?: ConsumableResourceProperties;
}
export type NodePropertyOverrides = Array<NodePropertyOverride>;
export type NodeRangeProperties = Array<NodeRangeProperty>;
export interface NodeRangeProperty {
  targetNodes: string;
  container?: ContainerProperties;
  instanceTypes?: Array<string>;
  ecsProperties?: EcsProperties;
  eksProperties?: EksProperties;
  consumableResourceProperties?: ConsumableResourceProperties;
}
export type OrchestrationType = "ECS" | "EKS";
export type ParametersMap = Record<string, string>;
export type PlatformCapability = "EC2" | "FARGATE";
export type PlatformCapabilityList = Array<PlatformCapability>;
export type Quantity = string;

export interface RegisterJobDefinitionRequest {
  jobDefinitionName: string;
  type: JobDefinitionType;
  parameters?: Record<string, string>;
  schedulingPriority?: number;
  containerProperties?: ContainerProperties;
  nodeProperties?: NodeProperties;
  retryStrategy?: RetryStrategy;
  propagateTags?: boolean;
  timeout?: JobTimeout;
  tags?: Record<string, string>;
  platformCapabilities?: Array<PlatformCapability>;
  eksProperties?: EksProperties;
  ecsProperties?: EcsProperties;
  consumableResourceProperties?: ConsumableResourceProperties;
}
export interface RegisterJobDefinitionResponse {
  jobDefinitionName: string;
  jobDefinitionArn: string;
  revision: number;
}
export interface RepositoryCredentials {
  credentialsParameter: string;
}
export interface ResourceRequirement {
  value: string;
  type: ResourceType;
}
export type ResourceRequirements = Array<ResourceRequirement>;
export type ResourceType = "GPU" | "VCPU" | "MEMORY";
export type RetryAction = "RETRY" | "EXIT";
export interface RetryStrategy {
  attempts?: number;
  evaluateOnExit?: Array<EvaluateOnExit>;
}
export interface RuntimePlatform {
  operatingSystemFamily?: string;
  cpuArchitecture?: string;
}
export interface SchedulingPolicyDetail {
  name: string;
  arn: string;
  fairsharePolicy?: FairsharePolicy;
  tags?: Record<string, string>;
}
export type SchedulingPolicyDetailList = Array<SchedulingPolicyDetail>;
export interface SchedulingPolicyListingDetail {
  arn: string;
}
export type SchedulingPolicyListingDetailList =
  Array<SchedulingPolicyListingDetail>;
export interface Secret {
  name: string;
  valueFrom: string;
}
export type SecretList = Array<Secret>;
export declare class ServerException extends EffectData.TaggedError(
  "ServerException",
)<{
  readonly message?: string;
}> {}
export interface ShareAttributes {
  shareIdentifier: string;
  weightFactor?: number;
}
export type ShareAttributesList = Array<ShareAttributes>;
export type StringList = Array<string>;
export interface SubmitJobRequest {
  jobName: string;
  jobQueue: string;
  shareIdentifier?: string;
  schedulingPriorityOverride?: number;
  arrayProperties?: ArrayProperties;
  dependsOn?: Array<JobDependency>;
  jobDefinition: string;
  parameters?: Record<string, string>;
  containerOverrides?: ContainerOverrides;
  nodeOverrides?: NodeOverrides;
  retryStrategy?: RetryStrategy;
  propagateTags?: boolean;
  timeout?: JobTimeout;
  tags?: Record<string, string>;
  eksPropertiesOverride?: EksPropertiesOverride;
  ecsPropertiesOverride?: EcsPropertiesOverride;
  consumableResourcePropertiesOverride?: ConsumableResourceProperties;
}
export interface SubmitJobResponse {
  jobArn?: string;
  jobName: string;
  jobId: string;
}
export type TagKey = string;

export type TagKeysList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagrisTagsMap = Record<string, string>;
export type TagsMap = Record<string, string>;
export type TagValue = string;

export interface TaskContainerDependency {
  containerName?: string;
  condition?: string;
}
export type TaskContainerDependencyList = Array<TaskContainerDependency>;
export interface TaskContainerDetails {
  command?: Array<string>;
  dependsOn?: Array<TaskContainerDependency>;
  environment?: Array<KeyValuePair>;
  essential?: boolean;
  firelensConfiguration?: FirelensConfiguration;
  image?: string;
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  mountPoints?: Array<MountPoint>;
  name?: string;
  privileged?: boolean;
  readonlyRootFilesystem?: boolean;
  repositoryCredentials?: RepositoryCredentials;
  resourceRequirements?: Array<ResourceRequirement>;
  secrets?: Array<Secret>;
  ulimits?: Array<Ulimit>;
  user?: string;
  exitCode?: number;
  reason?: string;
  logStreamName?: string;
  networkInterfaces?: Array<NetworkInterface>;
}
export interface TaskContainerOverrides {
  command?: Array<string>;
  environment?: Array<KeyValuePair>;
  name?: string;
  resourceRequirements?: Array<ResourceRequirement>;
}
export interface TaskContainerProperties {
  command?: Array<string>;
  dependsOn?: Array<TaskContainerDependency>;
  environment?: Array<KeyValuePair>;
  essential?: boolean;
  firelensConfiguration?: FirelensConfiguration;
  image: string;
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  mountPoints?: Array<MountPoint>;
  name?: string;
  privileged?: boolean;
  readonlyRootFilesystem?: boolean;
  repositoryCredentials?: RepositoryCredentials;
  resourceRequirements?: Array<ResourceRequirement>;
  secrets?: Array<Secret>;
  ulimits?: Array<Ulimit>;
  user?: string;
}
export interface TaskPropertiesOverride {
  containers?: Array<TaskContainerOverrides>;
}
export interface TerminateJobRequest {
  jobId: string;
  reason: string;
}
export interface TerminateJobResponse {}
export interface Tmpfs {
  containerPath: string;
  size: number;
  mountOptions?: Array<string>;
}
export type TmpfsList = Array<Tmpfs>;
export interface Ulimit {
  hardLimit: number;
  name: string;
  softLimit: number;
}
export type Ulimits = Array<Ulimit>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateComputeEnvironmentRequest {
  computeEnvironment: string;
  state?: CEState;
  unmanagedvCpus?: number;
  computeResources?: ComputeResourceUpdate;
  serviceRole?: string;
  updatePolicy?: UpdatePolicy;
  context?: string;
}
export interface UpdateComputeEnvironmentResponse {
  computeEnvironmentName?: string;
  computeEnvironmentArn?: string;
}
export interface UpdateConsumableResourceRequest {
  consumableResource: string;
  operation?: string;
  quantity?: number;
  clientToken?: string;
}
export interface UpdateConsumableResourceResponse {
  consumableResourceName: string;
  consumableResourceArn: string;
  totalQuantity?: number;
}
export interface UpdateJobQueueRequest {
  jobQueue: string;
  state?: JQState;
  schedulingPolicyArn?: string;
  priority?: number;
  computeEnvironmentOrder?: Array<ComputeEnvironmentOrder>;
  jobStateTimeLimitActions?: Array<JobStateTimeLimitAction>;
}
export interface UpdateJobQueueResponse {
  jobQueueName?: string;
  jobQueueArn?: string;
}
export interface UpdatePolicy {
  terminateJobsOnUpdate?: boolean;
  jobExecutionTimeoutMinutes?: number;
}
export interface UpdateSchedulingPolicyRequest {
  arn: string;
  fairsharePolicy?: FairsharePolicy;
}
export interface UpdateSchedulingPolicyResponse {}
export type UserdataType = "EKS_BOOTSTRAP_SH" | "EKS_NODEADM";
export interface Volume {
  host?: Host;
  name?: string;
  efsVolumeConfiguration?: EFSVolumeConfiguration;
}
export type Volumes = Array<Volume>;
export declare namespace CancelJob {
  export type Input = CancelJobRequest;
  export type Output = CancelJobResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace CreateComputeEnvironment {
  export type Input = CreateComputeEnvironmentRequest;
  export type Output = CreateComputeEnvironmentResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace CreateConsumableResource {
  export type Input = CreateConsumableResourceRequest;
  export type Output = CreateConsumableResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace CreateJobQueue {
  export type Input = CreateJobQueueRequest;
  export type Output = CreateJobQueueResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace CreateSchedulingPolicy {
  export type Input = CreateSchedulingPolicyRequest;
  export type Output = CreateSchedulingPolicyResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DeleteComputeEnvironment {
  export type Input = DeleteComputeEnvironmentRequest;
  export type Output = DeleteComputeEnvironmentResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DeleteConsumableResource {
  export type Input = DeleteConsumableResourceRequest;
  export type Output = DeleteConsumableResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DeleteJobQueue {
  export type Input = DeleteJobQueueRequest;
  export type Output = DeleteJobQueueResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DeleteSchedulingPolicy {
  export type Input = DeleteSchedulingPolicyRequest;
  export type Output = DeleteSchedulingPolicyResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DeregisterJobDefinition {
  export type Input = DeregisterJobDefinitionRequest;
  export type Output = DeregisterJobDefinitionResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DescribeComputeEnvironments {
  export type Input = DescribeComputeEnvironmentsRequest;
  export type Output = DescribeComputeEnvironmentsResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DescribeConsumableResource {
  export type Input = DescribeConsumableResourceRequest;
  export type Output = DescribeConsumableResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DescribeJobDefinitions {
  export type Input = DescribeJobDefinitionsRequest;
  export type Output = DescribeJobDefinitionsResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DescribeJobQueues {
  export type Input = DescribeJobQueuesRequest;
  export type Output = DescribeJobQueuesResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DescribeJobs {
  export type Input = DescribeJobsRequest;
  export type Output = DescribeJobsResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace DescribeSchedulingPolicies {
  export type Input = DescribeSchedulingPoliciesRequest;
  export type Output = DescribeSchedulingPoliciesResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace GetJobQueueSnapshot {
  export type Input = GetJobQueueSnapshotRequest;
  export type Output = GetJobQueueSnapshotResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace ListConsumableResources {
  export type Input = ListConsumableResourcesRequest;
  export type Output = ListConsumableResourcesResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace ListJobsByConsumableResource {
  export type Input = ListJobsByConsumableResourceRequest;
  export type Output = ListJobsByConsumableResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace ListSchedulingPolicies {
  export type Input = ListSchedulingPoliciesRequest;
  export type Output = ListSchedulingPoliciesResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace RegisterJobDefinition {
  export type Input = RegisterJobDefinitionRequest;
  export type Output = RegisterJobDefinitionResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace SubmitJob {
  export type Input = SubmitJobRequest;
  export type Output = SubmitJobResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace TerminateJob {
  export type Input = TerminateJobRequest;
  export type Output = TerminateJobResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace UpdateComputeEnvironment {
  export type Input = UpdateComputeEnvironmentRequest;
  export type Output = UpdateComputeEnvironmentResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace UpdateConsumableResource {
  export type Input = UpdateConsumableResourceRequest;
  export type Output = UpdateConsumableResourceResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace UpdateJobQueue {
  export type Input = UpdateJobQueueRequest;
  export type Output = UpdateJobQueueResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}

export declare namespace UpdateSchedulingPolicy {
  export type Input = UpdateSchedulingPolicyRequest;
  export type Output = UpdateSchedulingPolicyResponse;
  export type Error = ClientException | ServerException | CommonAwsError;
}
