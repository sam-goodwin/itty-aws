import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface ElasticMapReduce {
  addInstanceFleet(
    input: AddInstanceFleetInput,
  ): Effect.Effect<
    AddInstanceFleetOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  addInstanceGroups(
    input: AddInstanceGroupsInput,
  ): Effect.Effect<
    AddInstanceGroupsOutput,
    InternalServerError | CommonAwsError
  >;
  addJobFlowSteps(
    input: AddJobFlowStepsInput,
  ): Effect.Effect<
    AddJobFlowStepsOutput,
    InternalServerError | CommonAwsError
  >;
  addTags(
    input: AddTagsInput,
  ): Effect.Effect<
    AddTagsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  cancelSteps(
    input: CancelStepsInput,
  ): Effect.Effect<
    CancelStepsOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  createPersistentAppUI(
    input: CreatePersistentAppUIInput,
  ): Effect.Effect<
    CreatePersistentAppUIOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createSecurityConfiguration(
    input: CreateSecurityConfigurationInput,
  ): Effect.Effect<
    CreateSecurityConfigurationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createStudio(
    input: CreateStudioInput,
  ): Effect.Effect<
    CreateStudioOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createStudioSessionMapping(
    input: CreateStudioSessionMappingInput,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  deleteSecurityConfiguration(
    input: DeleteSecurityConfigurationInput,
  ): Effect.Effect<
    DeleteSecurityConfigurationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  deleteStudio(
    input: DeleteStudioInput,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  deleteStudioSessionMapping(
    input: DeleteStudioSessionMappingInput,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  describeCluster(
    input: DescribeClusterInput,
  ): Effect.Effect<
    DescribeClusterOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  describeJobFlows(
    input: DescribeJobFlowsInput,
  ): Effect.Effect<
    DescribeJobFlowsOutput,
    InternalServerError | CommonAwsError
  >;
  describeNotebookExecution(
    input: DescribeNotebookExecutionInput,
  ): Effect.Effect<
    DescribeNotebookExecutionOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  describePersistentAppUI(
    input: DescribePersistentAppUIInput,
  ): Effect.Effect<
    DescribePersistentAppUIOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  describeReleaseLabel(
    input: DescribeReleaseLabelInput,
  ): Effect.Effect<
    DescribeReleaseLabelOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  describeSecurityConfiguration(
    input: DescribeSecurityConfigurationInput,
  ): Effect.Effect<
    DescribeSecurityConfigurationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  describeStep(
    input: DescribeStepInput,
  ): Effect.Effect<
    DescribeStepOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  describeStudio(
    input: DescribeStudioInput,
  ): Effect.Effect<
    DescribeStudioOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getAutoTerminationPolicy(
    input: GetAutoTerminationPolicyInput,
  ): Effect.Effect<
    GetAutoTerminationPolicyOutput,
    CommonAwsError
  >;
  getBlockPublicAccessConfiguration(
    input: GetBlockPublicAccessConfigurationInput,
  ): Effect.Effect<
    GetBlockPublicAccessConfigurationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getClusterSessionCredentials(
    input: GetClusterSessionCredentialsInput,
  ): Effect.Effect<
    GetClusterSessionCredentialsOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  getManagedScalingPolicy(
    input: GetManagedScalingPolicyInput,
  ): Effect.Effect<
    GetManagedScalingPolicyOutput,
    CommonAwsError
  >;
  getOnClusterAppUIPresignedURL(
    input: GetOnClusterAppUIPresignedURLInput,
  ): Effect.Effect<
    GetOnClusterAppUIPresignedURLOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  getPersistentAppUIPresignedURL(
    input: GetPersistentAppUIPresignedURLInput,
  ): Effect.Effect<
    GetPersistentAppUIPresignedURLOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  getStudioSessionMapping(
    input: GetStudioSessionMappingInput,
  ): Effect.Effect<
    GetStudioSessionMappingOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  listBootstrapActions(
    input: ListBootstrapActionsInput,
  ): Effect.Effect<
    ListBootstrapActionsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listClusters(
    input: ListClustersInput,
  ): Effect.Effect<
    ListClustersOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listInstanceFleets(
    input: ListInstanceFleetsInput,
  ): Effect.Effect<
    ListInstanceFleetsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listInstanceGroups(
    input: ListInstanceGroupsInput,
  ): Effect.Effect<
    ListInstanceGroupsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listInstances(
    input: ListInstancesInput,
  ): Effect.Effect<
    ListInstancesOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listNotebookExecutions(
    input: ListNotebookExecutionsInput,
  ): Effect.Effect<
    ListNotebookExecutionsOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  listReleaseLabels(
    input: ListReleaseLabelsInput,
  ): Effect.Effect<
    ListReleaseLabelsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listSecurityConfigurations(
    input: ListSecurityConfigurationsInput,
  ): Effect.Effect<
    ListSecurityConfigurationsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listSteps(
    input: ListStepsInput,
  ): Effect.Effect<
    ListStepsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listStudioSessionMappings(
    input: ListStudioSessionMappingsInput,
  ): Effect.Effect<
    ListStudioSessionMappingsOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  listStudios(
    input: ListStudiosInput,
  ): Effect.Effect<
    ListStudiosOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listSupportedInstanceTypes(
    input: ListSupportedInstanceTypesInput,
  ): Effect.Effect<
    ListSupportedInstanceTypesOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  modifyCluster(
    input: ModifyClusterInput,
  ): Effect.Effect<
    ModifyClusterOutput,
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  modifyInstanceFleet(
    input: ModifyInstanceFleetInput,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  modifyInstanceGroups(
    input: ModifyInstanceGroupsInput,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  putAutoScalingPolicy(
    input: PutAutoScalingPolicyInput,
  ): Effect.Effect<
    PutAutoScalingPolicyOutput,
    CommonAwsError
  >;
  putAutoTerminationPolicy(
    input: PutAutoTerminationPolicyInput,
  ): Effect.Effect<
    PutAutoTerminationPolicyOutput,
    CommonAwsError
  >;
  putBlockPublicAccessConfiguration(
    input: PutBlockPublicAccessConfigurationInput,
  ): Effect.Effect<
    PutBlockPublicAccessConfigurationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  putManagedScalingPolicy(
    input: PutManagedScalingPolicyInput,
  ): Effect.Effect<
    PutManagedScalingPolicyOutput,
    CommonAwsError
  >;
  removeAutoScalingPolicy(
    input: RemoveAutoScalingPolicyInput,
  ): Effect.Effect<
    RemoveAutoScalingPolicyOutput,
    CommonAwsError
  >;
  removeAutoTerminationPolicy(
    input: RemoveAutoTerminationPolicyInput,
  ): Effect.Effect<
    RemoveAutoTerminationPolicyOutput,
    CommonAwsError
  >;
  removeManagedScalingPolicy(
    input: RemoveManagedScalingPolicyInput,
  ): Effect.Effect<
    RemoveManagedScalingPolicyOutput,
    CommonAwsError
  >;
  removeTags(
    input: RemoveTagsInput,
  ): Effect.Effect<
    RemoveTagsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  runJobFlow(
    input: RunJobFlowInput,
  ): Effect.Effect<
    RunJobFlowOutput,
    InternalServerError | CommonAwsError
  >;
  setKeepJobFlowAliveWhenNoSteps(
    input: SetKeepJobFlowAliveWhenNoStepsInput,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  setTerminationProtection(
    input: SetTerminationProtectionInput,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  setUnhealthyNodeReplacement(
    input: SetUnhealthyNodeReplacementInput,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  setVisibleToAllUsers(
    input: SetVisibleToAllUsersInput,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  startNotebookExecution(
    input: StartNotebookExecutionInput,
  ): Effect.Effect<
    StartNotebookExecutionOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  stopNotebookExecution(
    input: StopNotebookExecutionInput,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
  terminateJobFlows(
    input: TerminateJobFlowsInput,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  updateStudio(
    input: UpdateStudioInput,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  updateStudioSessionMapping(
    input: UpdateStudioSessionMappingInput,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidRequestException | CommonAwsError
  >;
}

export type Emr = ElasticMapReduce;

export type ActionOnFailure = "TERMINATE_JOB_FLOW" | "TERMINATE_CLUSTER" | "CANCEL_AND_WAIT" | "CONTINUE";
export interface AddInstanceFleetInput {
  ClusterId: string;
  InstanceFleet: InstanceFleetConfig;
}
export interface AddInstanceFleetOutput {
  ClusterId?: string;
  InstanceFleetId?: string;
  ClusterArn?: string;
}
export interface AddInstanceGroupsInput {
  InstanceGroups: Array<InstanceGroupConfig>;
  JobFlowId: string;
}
export interface AddInstanceGroupsOutput {
  JobFlowId?: string;
  InstanceGroupIds?: Array<string>;
  ClusterArn?: string;
}
export interface AddJobFlowStepsInput {
  JobFlowId: string;
  Steps: Array<StepConfig>;
  ExecutionRoleArn?: string;
}
export interface AddJobFlowStepsOutput {
  StepIds?: Array<string>;
}
export interface AddTagsInput {
  ResourceId: string;
  Tags: Array<Tag>;
}
export interface AddTagsOutput {
}
export type AdjustmentType = "CHANGE_IN_CAPACITY" | "PERCENT_CHANGE_IN_CAPACITY" | "EXACT_CAPACITY";
export interface Application {
  Name?: string;
  Version?: string;
  Args?: Array<string>;
  AdditionalInfo?: Record<string, string>;
}
export type ApplicationList = Array<Application>;
export type ArnType = string;

export type AuthMode = "SSO" | "IAM";
export interface AutoScalingPolicy {
  Constraints: ScalingConstraints;
  Rules: Array<ScalingRule>;
}
export interface AutoScalingPolicyDescription {
  Status?: AutoScalingPolicyStatus;
  Constraints?: ScalingConstraints;
  Rules?: Array<ScalingRule>;
}
export type AutoScalingPolicyState = "PENDING" | "ATTACHING" | "ATTACHED" | "DETACHING" | "DETACHED" | "FAILED";
export interface AutoScalingPolicyStateChangeReason {
  Code?: AutoScalingPolicyStateChangeReasonCode;
  Message?: string;
}
export type AutoScalingPolicyStateChangeReasonCode = "USER_REQUEST" | "PROVISION_FAILURE" | "CLEANUP_FAILURE";
export interface AutoScalingPolicyStatus {
  State?: AutoScalingPolicyState;
  StateChangeReason?: AutoScalingPolicyStateChangeReason;
}
export interface AutoTerminationPolicy {
  IdleTimeout?: number;
}
export interface BlockPublicAccessConfiguration {
  BlockPublicSecurityGroupRules: boolean;
  PermittedPublicSecurityGroupRuleRanges?: Array<PortRange>;
  Classification?: string;
  Configurations?: Array<Configuration>;
  Properties?: Record<string, string>;
}
export interface BlockPublicAccessConfigurationMetadata {
  CreationDateTime: Date | string;
  CreatedByArn: string;
}
export type BooleanObject = boolean;

export interface BootstrapActionConfig {
  Name: string;
  ScriptBootstrapAction: ScriptBootstrapActionConfig;
}
export type BootstrapActionConfigList = Array<BootstrapActionConfig>;
export interface BootstrapActionDetail {
  BootstrapActionConfig?: BootstrapActionConfig;
}
export type BootstrapActionDetailList = Array<BootstrapActionDetail>;
export interface CancelStepsInfo {
  StepId?: string;
  Status?: CancelStepsRequestStatus;
  Reason?: string;
}
export type CancelStepsInfoList = Array<CancelStepsInfo>;
export interface CancelStepsInput {
  ClusterId: string;
  StepIds: Array<string>;
  StepCancellationOption?: StepCancellationOption;
}
export interface CancelStepsOutput {
  CancelStepsInfoList?: Array<CancelStepsInfo>;
}
export type CancelStepsRequestStatus = "SUBMITTED" | "FAILED";
export interface CloudWatchAlarmDefinition {
  ComparisonOperator: ComparisonOperator;
  EvaluationPeriods?: number;
  MetricName: string;
  Namespace?: string;
  Period: number;
  Statistic?: Statistic;
  Threshold: number;
  Unit?: Unit;
  Dimensions?: Array<MetricDimension>;
}
export interface Cluster {
  Id?: string;
  Name?: string;
  Status?: ClusterStatus;
  Ec2InstanceAttributes?: Ec2InstanceAttributes;
  InstanceCollectionType?: InstanceCollectionType;
  LogUri?: string;
  LogEncryptionKmsKeyId?: string;
  RequestedAmiVersion?: string;
  RunningAmiVersion?: string;
  ReleaseLabel?: string;
  AutoTerminate?: boolean;
  TerminationProtected?: boolean;
  UnhealthyNodeReplacement?: boolean;
  VisibleToAllUsers?: boolean;
  Applications?: Array<Application>;
  Tags?: Array<Tag>;
  ServiceRole?: string;
  NormalizedInstanceHours?: number;
  MasterPublicDnsName?: string;
  Configurations?: Array<Configuration>;
  SecurityConfiguration?: string;
  AutoScalingRole?: string;
  ScaleDownBehavior?: ScaleDownBehavior;
  CustomAmiId?: string;
  EbsRootVolumeSize?: number;
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot;
  KerberosAttributes?: KerberosAttributes;
  ClusterArn?: string;
  OutpostArn?: string;
  StepConcurrencyLevel?: number;
  PlacementGroups?: Array<PlacementGroupConfig>;
  OSReleaseLabel?: string;
  EbsRootVolumeIops?: number;
  EbsRootVolumeThroughput?: number;
}
export type ClusterId = string;

export type ClusterState = "STARTING" | "BOOTSTRAPPING" | "RUNNING" | "WAITING" | "TERMINATING" | "TERMINATED" | "TERMINATED_WITH_ERRORS";
export interface ClusterStateChangeReason {
  Code?: ClusterStateChangeReasonCode;
  Message?: string;
}
export type ClusterStateChangeReasonCode = "INTERNAL_ERROR" | "VALIDATION_ERROR" | "INSTANCE_FAILURE" | "INSTANCE_FLEET_TIMEOUT" | "BOOTSTRAP_FAILURE" | "USER_REQUEST" | "STEP_FAILURE" | "ALL_STEPS_COMPLETED";
export type ClusterStateList = Array<ClusterState>;
export interface ClusterStatus {
  State?: ClusterState;
  StateChangeReason?: ClusterStateChangeReason;
  Timeline?: ClusterTimeline;
  ErrorDetails?: Array<ErrorDetail>;
}
export interface ClusterSummary {
  Id?: string;
  Name?: string;
  Status?: ClusterStatus;
  NormalizedInstanceHours?: number;
  ClusterArn?: string;
  OutpostArn?: string;
}
export type ClusterSummaryList = Array<ClusterSummary>;
export interface ClusterTimeline {
  CreationDateTime?: Date | string;
  ReadyDateTime?: Date | string;
  EndDateTime?: Date | string;
}
export interface Command {
  Name?: string;
  ScriptPath?: string;
  Args?: Array<string>;
}
export type CommandList = Array<Command>;
export type ComparisonOperator = "GREATER_THAN_OR_EQUAL" | "GREATER_THAN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL";
export interface ComputeLimits {
  UnitType: ComputeLimitsUnitType;
  MinimumCapacityUnits: number;
  MaximumCapacityUnits: number;
  MaximumOnDemandCapacityUnits?: number;
  MaximumCoreCapacityUnits?: number;
}
export type ComputeLimitsUnitType = "InstanceFleetUnits" | "Instances" | "VCPU";
export interface Configuration {
  Classification?: string;
  Configurations?: Array<Configuration>;
  Properties?: Record<string, string>;
}
export type ConfigurationList = Array<Configuration>;
export interface CreatePersistentAppUIInput {
  TargetResourceArn: string;
  EMRContainersConfig?: EMRContainersConfig;
  Tags?: Array<Tag>;
  XReferer?: string;
  ProfilerType?: ProfilerType;
}
export interface CreatePersistentAppUIOutput {
  PersistentAppUIId?: string;
  RuntimeRoleEnabledCluster?: boolean;
}
export interface CreateSecurityConfigurationInput {
  Name: string;
  SecurityConfiguration: string;
}
export interface CreateSecurityConfigurationOutput {
  Name: string;
  CreationDateTime: Date | string;
}
export interface CreateStudioInput {
  Name: string;
  Description?: string;
  AuthMode: AuthMode;
  VpcId: string;
  SubnetIds: Array<string>;
  ServiceRole: string;
  UserRole?: string;
  WorkspaceSecurityGroupId: string;
  EngineSecurityGroupId: string;
  DefaultS3Location: string;
  IdpAuthUrl?: string;
  IdpRelayStateParameterName?: string;
  Tags?: Array<Tag>;
  TrustedIdentityPropagationEnabled?: boolean;
  IdcUserAssignment?: IdcUserAssignment;
  IdcInstanceArn?: string;
  EncryptionKeyArn?: string;
}
export interface CreateStudioOutput {
  StudioId?: string;
  Url?: string;
}
export interface CreateStudioSessionMappingInput {
  StudioId: string;
  IdentityId?: string;
  IdentityName?: string;
  IdentityType: IdentityType;
  SessionPolicyArn: string;
}
export type Credentials = { UsernamePassword: UsernamePassword };
export interface DeleteSecurityConfigurationInput {
  Name: string;
}
export interface DeleteSecurityConfigurationOutput {
}
export interface DeleteStudioInput {
  StudioId: string;
}
export interface DeleteStudioSessionMappingInput {
  StudioId: string;
  IdentityId?: string;
  IdentityName?: string;
  IdentityType: IdentityType;
}
export interface DescribeClusterInput {
  ClusterId: string;
}
export interface DescribeClusterOutput {
  Cluster?: Cluster;
}
export interface DescribeJobFlowsInput {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  JobFlowIds?: Array<string>;
  JobFlowStates?: Array<JobFlowExecutionState>;
}
export interface DescribeJobFlowsOutput {
  JobFlows?: Array<JobFlowDetail>;
}
export interface DescribeNotebookExecutionInput {
  NotebookExecutionId: string;
}
export interface DescribeNotebookExecutionOutput {
  NotebookExecution?: NotebookExecution;
}
export interface DescribePersistentAppUIInput {
  PersistentAppUIId: string;
}
export interface DescribePersistentAppUIOutput {
  PersistentAppUI?: PersistentAppUI;
}
export interface DescribeReleaseLabelInput {
  ReleaseLabel?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeReleaseLabelOutput {
  ReleaseLabel?: string;
  Applications?: Array<SimplifiedApplication>;
  NextToken?: string;
  AvailableOSReleases?: Array<OSRelease>;
}
export interface DescribeSecurityConfigurationInput {
  Name: string;
}
export interface DescribeSecurityConfigurationOutput {
  Name?: string;
  SecurityConfiguration?: string;
  CreationDateTime?: Date | string;
}
export interface DescribeStepInput {
  ClusterId: string;
  StepId: string;
}
export interface DescribeStepOutput {
  Step?: Step;
}
export interface DescribeStudioInput {
  StudioId: string;
}
export interface DescribeStudioOutput {
  Studio?: Studio;
}
export interface EbsBlockDevice {
  VolumeSpecification?: VolumeSpecification;
  Device?: string;
}
export interface EbsBlockDeviceConfig {
  VolumeSpecification: VolumeSpecification;
  VolumesPerInstance?: number;
}
export type EbsBlockDeviceConfigList = Array<EbsBlockDeviceConfig>;
export type EbsBlockDeviceList = Array<EbsBlockDevice>;
export interface EbsConfiguration {
  EbsBlockDeviceConfigs?: Array<EbsBlockDeviceConfig>;
  EbsOptimized?: boolean;
}
export interface EbsVolume {
  Device?: string;
  VolumeId?: string;
}
export type EbsVolumeList = Array<EbsVolume>;
export interface Ec2InstanceAttributes {
  Ec2KeyName?: string;
  Ec2SubnetId?: string;
  RequestedEc2SubnetIds?: Array<string>;
  Ec2AvailabilityZone?: string;
  RequestedEc2AvailabilityZones?: Array<string>;
  IamInstanceProfile?: string;
  EmrManagedMasterSecurityGroup?: string;
  EmrManagedSlaveSecurityGroup?: string;
  ServiceAccessSecurityGroup?: string;
  AdditionalMasterSecurityGroups?: Array<string>;
  AdditionalSlaveSecurityGroups?: Array<string>;
}
export type EC2InstanceIdsList = Array<string>;
export type EC2InstanceIdsToTerminateList = Array<string>;
export interface EMRContainersConfig {
  JobRunId?: string;
}
export type EnvironmentVariablesMap = Record<string, string>;
export type ErrorCode = string;

export type ErrorData = Array<Record<string, string>>;
export interface ErrorDetail {
  ErrorCode?: string;
  ErrorData?: Array<Record<string, string>>;
  ErrorMessage?: string;
}
export type ErrorDetailList = Array<ErrorDetail>;
export type ErrorMessage = string;

export interface ExecutionEngineConfig {
  Id: string;
  Type?: ExecutionEngineType;
  MasterInstanceSecurityGroupId?: string;
  ExecutionRoleArn?: string;
}
export type ExecutionEngineType = "EMR";
export interface FailureDetails {
  Reason?: string;
  Message?: string;
  LogFile?: string;
}
export type Float = number;

export interface GetAutoTerminationPolicyInput {
  ClusterId: string;
}
export interface GetAutoTerminationPolicyOutput {
  AutoTerminationPolicy?: AutoTerminationPolicy;
}
export interface GetBlockPublicAccessConfigurationInput {
}
export interface GetBlockPublicAccessConfigurationOutput {
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;
  BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata;
}
export interface GetClusterSessionCredentialsInput {
  ClusterId: string;
  ExecutionRoleArn?: string;
}
export interface GetClusterSessionCredentialsOutput {
  Credentials?: Credentials;
  ExpiresAt?: Date | string;
}
export interface GetManagedScalingPolicyInput {
  ClusterId: string;
}
export interface GetManagedScalingPolicyOutput {
  ManagedScalingPolicy?: ManagedScalingPolicy;
}
export interface GetOnClusterAppUIPresignedURLInput {
  ClusterId: string;
  OnClusterAppUIType?: OnClusterAppUIType;
  ApplicationId?: string;
  DryRun?: boolean;
  ExecutionRoleArn?: string;
}
export interface GetOnClusterAppUIPresignedURLOutput {
  PresignedURLReady?: boolean;
  PresignedURL?: string;
}
export interface GetPersistentAppUIPresignedURLInput {
  PersistentAppUIId: string;
  PersistentAppUIType?: PersistentAppUIType;
  ApplicationId?: string;
  AuthProxyCall?: boolean;
  ExecutionRoleArn?: string;
}
export interface GetPersistentAppUIPresignedURLOutput {
  PresignedURLReady?: boolean;
  PresignedURL?: string;
}
export interface GetStudioSessionMappingInput {
  StudioId: string;
  IdentityId?: string;
  IdentityName?: string;
  IdentityType: IdentityType;
}
export interface GetStudioSessionMappingOutput {
  SessionMapping?: SessionMappingDetail;
}
export interface HadoopJarStepConfig {
  Properties?: Array<KeyValue>;
  Jar: string;
  MainClass?: string;
  Args?: Array<string>;
}
export interface HadoopStepConfig {
  Jar?: string;
  Properties?: Record<string, string>;
  MainClass?: string;
  Args?: Array<string>;
}
export type IAMRoleArn = string;

export type IdcUserAssignment = "REQUIRED" | "OPTIONAL";
export type IdentityType = "USER" | "GROUP";
export interface Instance {
  Id?: string;
  Ec2InstanceId?: string;
  PublicDnsName?: string;
  PublicIpAddress?: string;
  PrivateDnsName?: string;
  PrivateIpAddress?: string;
  Status?: InstanceStatus;
  InstanceGroupId?: string;
  InstanceFleetId?: string;
  Market?: MarketType;
  InstanceType?: string;
  EbsVolumes?: Array<EbsVolume>;
}
export type InstanceCollectionType = "INSTANCE_FLEET" | "INSTANCE_GROUP";
export interface InstanceFleet {
  Id?: string;
  Name?: string;
  Status?: InstanceFleetStatus;
  InstanceFleetType?: InstanceFleetType;
  TargetOnDemandCapacity?: number;
  TargetSpotCapacity?: number;
  ProvisionedOnDemandCapacity?: number;
  ProvisionedSpotCapacity?: number;
  InstanceTypeSpecifications?: Array<InstanceTypeSpecification>;
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
  Context?: string;
}
export interface InstanceFleetConfig {
  Name?: string;
  InstanceFleetType: InstanceFleetType;
  TargetOnDemandCapacity?: number;
  TargetSpotCapacity?: number;
  InstanceTypeConfigs?: Array<InstanceTypeConfig>;
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
  Context?: string;
}
export type InstanceFleetConfigList = Array<InstanceFleetConfig>;
export type InstanceFleetId = string;

export type InstanceFleetList = Array<InstanceFleet>;
export interface InstanceFleetModifyConfig {
  InstanceFleetId: string;
  TargetOnDemandCapacity?: number;
  TargetSpotCapacity?: number;
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
  InstanceTypeConfigs?: Array<InstanceTypeConfig>;
  Context?: string;
}
export interface InstanceFleetProvisioningSpecifications {
  SpotSpecification?: SpotProvisioningSpecification;
  OnDemandSpecification?: OnDemandProvisioningSpecification;
}
export interface InstanceFleetResizingSpecifications {
  SpotResizeSpecification?: SpotResizingSpecification;
  OnDemandResizeSpecification?: OnDemandResizingSpecification;
}
export type InstanceFleetState = "PROVISIONING" | "BOOTSTRAPPING" | "RUNNING" | "RESIZING" | "SUSPENDED" | "TERMINATING" | "TERMINATED";
export interface InstanceFleetStateChangeReason {
  Code?: InstanceFleetStateChangeReasonCode;
  Message?: string;
}
export type InstanceFleetStateChangeReasonCode = "INTERNAL_ERROR" | "VALIDATION_ERROR" | "INSTANCE_FAILURE" | "CLUSTER_TERMINATED";
export interface InstanceFleetStatus {
  State?: InstanceFleetState;
  StateChangeReason?: InstanceFleetStateChangeReason;
  Timeline?: InstanceFleetTimeline;
}
export interface InstanceFleetTimeline {
  CreationDateTime?: Date | string;
  ReadyDateTime?: Date | string;
  EndDateTime?: Date | string;
}
export type InstanceFleetType = "MASTER" | "CORE" | "TASK";
export interface InstanceGroup {
  Id?: string;
  Name?: string;
  Market?: MarketType;
  InstanceGroupType?: InstanceGroupType;
  BidPrice?: string;
  InstanceType?: string;
  RequestedInstanceCount?: number;
  RunningInstanceCount?: number;
  Status?: InstanceGroupStatus;
  Configurations?: Array<Configuration>;
  ConfigurationsVersion?: number;
  LastSuccessfullyAppliedConfigurations?: Array<Configuration>;
  LastSuccessfullyAppliedConfigurationsVersion?: number;
  EbsBlockDevices?: Array<EbsBlockDevice>;
  EbsOptimized?: boolean;
  ShrinkPolicy?: ShrinkPolicy;
  AutoScalingPolicy?: AutoScalingPolicyDescription;
  CustomAmiId?: string;
}
export interface InstanceGroupConfig {
  Name?: string;
  Market?: MarketType;
  InstanceRole: InstanceRoleType;
  BidPrice?: string;
  InstanceType: string;
  InstanceCount: number;
  Configurations?: Array<Configuration>;
  EbsConfiguration?: EbsConfiguration;
  AutoScalingPolicy?: AutoScalingPolicy;
  CustomAmiId?: string;
}
export type InstanceGroupConfigList = Array<InstanceGroupConfig>;
export interface InstanceGroupDetail {
  InstanceGroupId?: string;
  Name?: string;
  Market: MarketType;
  InstanceRole: InstanceRoleType;
  BidPrice?: string;
  InstanceType: string;
  InstanceRequestCount: number;
  InstanceRunningCount: number;
  State: InstanceGroupState;
  LastStateChangeReason?: string;
  CreationDateTime: Date | string;
  StartDateTime?: Date | string;
  ReadyDateTime?: Date | string;
  EndDateTime?: Date | string;
  CustomAmiId?: string;
}
export type InstanceGroupDetailList = Array<InstanceGroupDetail>;
export type InstanceGroupId = string;

export type InstanceGroupIdsList = Array<string>;
export type InstanceGroupList = Array<InstanceGroup>;
export interface InstanceGroupModifyConfig {
  InstanceGroupId: string;
  InstanceCount?: number;
  EC2InstanceIdsToTerminate?: Array<string>;
  ShrinkPolicy?: ShrinkPolicy;
  ReconfigurationType?: ReconfigurationType;
  Configurations?: Array<Configuration>;
}
export type InstanceGroupModifyConfigList = Array<InstanceGroupModifyConfig>;
export type InstanceGroupState = "PROVISIONING" | "BOOTSTRAPPING" | "RUNNING" | "RECONFIGURING" | "RESIZING" | "SUSPENDED" | "TERMINATING" | "TERMINATED" | "ARRESTED" | "SHUTTING_DOWN" | "ENDED";
export interface InstanceGroupStateChangeReason {
  Code?: InstanceGroupStateChangeReasonCode;
  Message?: string;
}
export type InstanceGroupStateChangeReasonCode = "INTERNAL_ERROR" | "VALIDATION_ERROR" | "INSTANCE_FAILURE" | "CLUSTER_TERMINATED";
export interface InstanceGroupStatus {
  State?: InstanceGroupState;
  StateChangeReason?: InstanceGroupStateChangeReason;
  Timeline?: InstanceGroupTimeline;
}
export interface InstanceGroupTimeline {
  CreationDateTime?: Date | string;
  ReadyDateTime?: Date | string;
  EndDateTime?: Date | string;
}
export type InstanceGroupType = "MASTER" | "CORE" | "TASK";
export type InstanceGroupTypeList = Array<InstanceGroupType>;
export type InstanceId = string;

export type InstanceList = Array<Instance>;
export interface InstanceResizePolicy {
  InstancesToTerminate?: Array<string>;
  InstancesToProtect?: Array<string>;
  InstanceTerminationTimeout?: number;
}
export type InstanceRoleType = "MASTER" | "CORE" | "TASK";
export type InstanceState = "AWAITING_FULFILLMENT" | "PROVISIONING" | "BOOTSTRAPPING" | "RUNNING" | "TERMINATED";
export interface InstanceStateChangeReason {
  Code?: InstanceStateChangeReasonCode;
  Message?: string;
}
export type InstanceStateChangeReasonCode = "INTERNAL_ERROR" | "VALIDATION_ERROR" | "INSTANCE_FAILURE" | "BOOTSTRAP_FAILURE" | "CLUSTER_TERMINATED";
export type InstanceStateList = Array<InstanceState>;
export interface InstanceStatus {
  State?: InstanceState;
  StateChangeReason?: InstanceStateChangeReason;
  Timeline?: InstanceTimeline;
}
export interface InstanceTimeline {
  CreationDateTime?: Date | string;
  ReadyDateTime?: Date | string;
  EndDateTime?: Date | string;
}
export type InstanceType = string;

export interface InstanceTypeConfig {
  InstanceType: string;
  WeightedCapacity?: number;
  BidPrice?: string;
  BidPriceAsPercentageOfOnDemandPrice?: number;
  EbsConfiguration?: EbsConfiguration;
  Configurations?: Array<Configuration>;
  CustomAmiId?: string;
  Priority?: number;
}
export type InstanceTypeConfigList = Array<InstanceTypeConfig>;
export interface InstanceTypeSpecification {
  InstanceType?: string;
  WeightedCapacity?: number;
  BidPrice?: string;
  BidPriceAsPercentageOfOnDemandPrice?: number;
  Configurations?: Array<Configuration>;
  EbsBlockDevices?: Array<EbsBlockDevice>;
  EbsOptimized?: boolean;
  CustomAmiId?: string;
  Priority?: number;
}
export type InstanceTypeSpecificationList = Array<InstanceTypeSpecification>;
export type Integer = number;

export declare class InternalServerError extends Data.TaggedError(
  "InternalServerError",
)<{
}> {}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface JobFlowDetail {
  JobFlowId: string;
  Name: string;
  LogUri?: string;
  LogEncryptionKmsKeyId?: string;
  AmiVersion?: string;
  ExecutionStatusDetail: JobFlowExecutionStatusDetail;
  Instances: JobFlowInstancesDetail;
  Steps?: Array<StepDetail>;
  BootstrapActions?: Array<BootstrapActionDetail>;
  SupportedProducts?: Array<string>;
  VisibleToAllUsers?: boolean;
  JobFlowRole?: string;
  ServiceRole?: string;
  AutoScalingRole?: string;
  ScaleDownBehavior?: ScaleDownBehavior;
}
export type JobFlowDetailList = Array<JobFlowDetail>;
export type JobFlowExecutionState = "STARTING" | "BOOTSTRAPPING" | "RUNNING" | "WAITING" | "SHUTTING_DOWN" | "TERMINATED" | "COMPLETED" | "FAILED";
export type JobFlowExecutionStateList = Array<JobFlowExecutionState>;
export interface JobFlowExecutionStatusDetail {
  State: JobFlowExecutionState;
  CreationDateTime: Date | string;
  StartDateTime?: Date | string;
  ReadyDateTime?: Date | string;
  EndDateTime?: Date | string;
  LastStateChangeReason?: string;
}
export interface JobFlowInstancesConfig {
  MasterInstanceType?: string;
  SlaveInstanceType?: string;
  InstanceCount?: number;
  InstanceGroups?: Array<InstanceGroupConfig>;
  InstanceFleets?: Array<InstanceFleetConfig>;
  Ec2KeyName?: string;
  Placement?: PlacementType;
  KeepJobFlowAliveWhenNoSteps?: boolean;
  TerminationProtected?: boolean;
  UnhealthyNodeReplacement?: boolean;
  HadoopVersion?: string;
  Ec2SubnetId?: string;
  Ec2SubnetIds?: Array<string>;
  EmrManagedMasterSecurityGroup?: string;
  EmrManagedSlaveSecurityGroup?: string;
  ServiceAccessSecurityGroup?: string;
  AdditionalMasterSecurityGroups?: Array<string>;
  AdditionalSlaveSecurityGroups?: Array<string>;
}
export interface JobFlowInstancesDetail {
  MasterInstanceType: string;
  MasterPublicDnsName?: string;
  MasterInstanceId?: string;
  SlaveInstanceType: string;
  InstanceCount: number;
  InstanceGroups?: Array<InstanceGroupDetail>;
  NormalizedInstanceHours?: number;
  Ec2KeyName?: string;
  Ec2SubnetId?: string;
  Placement?: PlacementType;
  KeepJobFlowAliveWhenNoSteps?: boolean;
  TerminationProtected?: boolean;
  UnhealthyNodeReplacement?: boolean;
  HadoopVersion?: string;
}
export interface KerberosAttributes {
  Realm: string;
  KdcAdminPassword: string;
  CrossRealmTrustPrincipalPassword?: string;
  ADDomainJoinUser?: string;
  ADDomainJoinPassword?: string;
}
export interface KeyValue {
  Key?: string;
  Value?: string;
}
export type KeyValueList = Array<KeyValue>;
export interface ListBootstrapActionsInput {
  ClusterId: string;
  Marker?: string;
}
export interface ListBootstrapActionsOutput {
  BootstrapActions?: Array<Command>;
  Marker?: string;
}
export interface ListClustersInput {
  CreatedAfter?: Date | string;
  CreatedBefore?: Date | string;
  ClusterStates?: Array<ClusterState>;
  Marker?: string;
}
export interface ListClustersOutput {
  Clusters?: Array<ClusterSummary>;
  Marker?: string;
}
export interface ListInstanceFleetsInput {
  ClusterId: string;
  Marker?: string;
}
export interface ListInstanceFleetsOutput {
  InstanceFleets?: Array<InstanceFleet>;
  Marker?: string;
}
export interface ListInstanceGroupsInput {
  ClusterId: string;
  Marker?: string;
}
export interface ListInstanceGroupsOutput {
  InstanceGroups?: Array<InstanceGroup>;
  Marker?: string;
}
export interface ListInstancesInput {
  ClusterId: string;
  InstanceGroupId?: string;
  InstanceGroupTypes?: Array<InstanceGroupType>;
  InstanceFleetId?: string;
  InstanceFleetType?: InstanceFleetType;
  InstanceStates?: Array<InstanceState>;
  Marker?: string;
}
export interface ListInstancesOutput {
  Instances?: Array<Instance>;
  Marker?: string;
}
export interface ListNotebookExecutionsInput {
  EditorId?: string;
  Status?: NotebookExecutionStatus;
  From?: Date | string;
  To?: Date | string;
  Marker?: string;
  ExecutionEngineId?: string;
}
export interface ListNotebookExecutionsOutput {
  NotebookExecutions?: Array<NotebookExecutionSummary>;
  Marker?: string;
}
export interface ListReleaseLabelsInput {
  Filters?: ReleaseLabelFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReleaseLabelsOutput {
  ReleaseLabels?: Array<string>;
  NextToken?: string;
}
export interface ListSecurityConfigurationsInput {
  Marker?: string;
}
export interface ListSecurityConfigurationsOutput {
  SecurityConfigurations?: Array<SecurityConfigurationSummary>;
  Marker?: string;
}
export interface ListStepsInput {
  ClusterId: string;
  StepStates?: Array<StepState>;
  StepIds?: Array<string>;
  Marker?: string;
}
export interface ListStepsOutput {
  Steps?: Array<StepSummary>;
  Marker?: string;
}
export interface ListStudioSessionMappingsInput {
  StudioId?: string;
  IdentityType?: IdentityType;
  Marker?: string;
}
export interface ListStudioSessionMappingsOutput {
  SessionMappings?: Array<SessionMappingSummary>;
  Marker?: string;
}
export interface ListStudiosInput {
  Marker?: string;
}
export interface ListStudiosOutput {
  Studios?: Array<StudioSummary>;
  Marker?: string;
}
export interface ListSupportedInstanceTypesInput {
  ReleaseLabel: string;
  Marker?: string;
}
export interface ListSupportedInstanceTypesOutput {
  SupportedInstanceTypes?: Array<SupportedInstanceType>;
  Marker?: string;
}
export type Long = number;

export interface ManagedScalingPolicy {
  ComputeLimits?: ComputeLimits;
  UtilizationPerformanceIndex?: number;
  ScalingStrategy?: ScalingStrategy;
}
export type Marker = string;

export type MarketType = "ON_DEMAND" | "SPOT";
export type MaxResultsNumber = number;

export interface MetricDimension {
  Key?: string;
  Value?: string;
}
export type MetricDimensionList = Array<MetricDimension>;
export interface ModifyClusterInput {
  ClusterId: string;
  StepConcurrencyLevel?: number;
}
export interface ModifyClusterOutput {
  StepConcurrencyLevel?: number;
}
export interface ModifyInstanceFleetInput {
  ClusterId: string;
  InstanceFleet: InstanceFleetModifyConfig;
}
export interface ModifyInstanceGroupsInput {
  ClusterId?: string;
  InstanceGroups?: Array<InstanceGroupModifyConfig>;
}
export type NewSupportedProductsList = Array<SupportedProductConfig>;
export type NonNegativeDouble = number;

export interface NotebookExecution {
  NotebookExecutionId?: string;
  EditorId?: string;
  ExecutionEngine?: ExecutionEngineConfig;
  NotebookExecutionName?: string;
  NotebookParams?: string;
  Status?: NotebookExecutionStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Arn?: string;
  OutputNotebookURI?: string;
  LastStateChangeReason?: string;
  NotebookInstanceSecurityGroupId?: string;
  Tags?: Array<Tag>;
  NotebookS3Location?: NotebookS3LocationForOutput;
  OutputNotebookS3Location?: OutputNotebookS3LocationForOutput;
  OutputNotebookFormat?: OutputNotebookFormat;
  EnvironmentVariables?: Record<string, string>;
}
export type NotebookExecutionStatus = "START_PENDING" | "STARTING" | "RUNNING" | "FINISHING" | "FINISHED" | "FAILING" | "FAILED" | "STOP_PENDING" | "STOPPING" | "STOPPED";
export interface NotebookExecutionSummary {
  NotebookExecutionId?: string;
  EditorId?: string;
  NotebookExecutionName?: string;
  Status?: NotebookExecutionStatus;
  StartTime?: Date | string;
  EndTime?: Date | string;
  NotebookS3Location?: NotebookS3LocationForOutput;
  ExecutionEngineId?: string;
}
export type NotebookExecutionSummaryList = Array<NotebookExecutionSummary>;
export interface NotebookS3LocationForOutput {
  Bucket?: string;
  Key?: string;
}
export interface NotebookS3LocationFromInput {
  Bucket?: string;
  Key?: string;
}
export type OnClusterAppUIType = "SparkHistoryServer" | "YarnTimelineService" | "TezUI" | "ApplicationMaster" | "JobHistoryServer" | "ResourceManager";
export interface OnDemandCapacityReservationOptions {
  UsageStrategy?: OnDemandCapacityReservationUsageStrategy;
  CapacityReservationPreference?: OnDemandCapacityReservationPreference;
  CapacityReservationResourceGroupArn?: string;
}
export type OnDemandCapacityReservationPreference = "OPEN" | "NONE";
export type OnDemandCapacityReservationUsageStrategy = "USE_CAPACITY_RESERVATIONS_FIRST";
export type OnDemandProvisioningAllocationStrategy = "LOWEST_PRICE" | "PRIORITIZED";
export interface OnDemandProvisioningSpecification {
  AllocationStrategy: OnDemandProvisioningAllocationStrategy;
  CapacityReservationOptions?: OnDemandCapacityReservationOptions;
}
export interface OnDemandResizingSpecification {
  TimeoutDurationMinutes?: number;
  AllocationStrategy?: OnDemandProvisioningAllocationStrategy;
  CapacityReservationOptions?: OnDemandCapacityReservationOptions;
}
export type OptionalArnType = string;

export interface OSRelease {
  Label?: string;
}
export type OSReleaseList = Array<OSRelease>;
export type OutputNotebookFormat = "HTML";
export interface OutputNotebookS3LocationForOutput {
  Bucket?: string;
  Key?: string;
}
export interface OutputNotebookS3LocationFromInput {
  Bucket?: string;
  Key?: string;
}
export interface PersistentAppUI {
  PersistentAppUIId?: string;
  PersistentAppUITypeList?: Array<PersistentAppUIType>;
  PersistentAppUIStatus?: string;
  AuthorId?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastStateChangeReason?: string;
  Tags?: Array<Tag>;
}
export type PersistentAppUIType = "SHS" | "TEZ" | "YTS";
export type PersistentAppUITypeList = Array<PersistentAppUIType>;
export interface PlacementGroupConfig {
  InstanceRole: InstanceRoleType;
  PlacementStrategy?: PlacementGroupStrategy;
}
export type PlacementGroupConfigList = Array<PlacementGroupConfig>;
export type PlacementGroupStrategy = "SPREAD" | "PARTITION" | "CLUSTER" | "NONE";
export interface PlacementType {
  AvailabilityZone?: string;
  AvailabilityZones?: Array<string>;
}
export type Port = number;

export interface PortRange {
  MinRange: number;
  MaxRange?: number;
}
export type PortRanges = Array<PortRange>;
export type ProfilerType = "SHS" | "TEZUI" | "YTS";
export interface PutAutoScalingPolicyInput {
  ClusterId: string;
  InstanceGroupId: string;
  AutoScalingPolicy: AutoScalingPolicy;
}
export interface PutAutoScalingPolicyOutput {
  ClusterId?: string;
  InstanceGroupId?: string;
  AutoScalingPolicy?: AutoScalingPolicyDescription;
  ClusterArn?: string;
}
export interface PutAutoTerminationPolicyInput {
  ClusterId: string;
  AutoTerminationPolicy?: AutoTerminationPolicy;
}
export interface PutAutoTerminationPolicyOutput {
}
export interface PutBlockPublicAccessConfigurationInput {
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;
}
export interface PutBlockPublicAccessConfigurationOutput {
}
export interface PutManagedScalingPolicyInput {
  ClusterId: string;
  ManagedScalingPolicy: ManagedScalingPolicy;
}
export interface PutManagedScalingPolicyOutput {
}
export type ReconfigurationType = "OVERWRITE" | "MERGE";
export interface ReleaseLabelFilter {
  Prefix?: string;
  Application?: string;
}
export interface RemoveAutoScalingPolicyInput {
  ClusterId: string;
  InstanceGroupId: string;
}
export interface RemoveAutoScalingPolicyOutput {
}
export interface RemoveAutoTerminationPolicyInput {
  ClusterId: string;
}
export interface RemoveAutoTerminationPolicyOutput {
}
export interface RemoveManagedScalingPolicyInput {
  ClusterId: string;
}
export interface RemoveManagedScalingPolicyOutput {
}
export interface RemoveTagsInput {
  ResourceId: string;
  TagKeys: Array<string>;
}
export interface RemoveTagsOutput {
}
export type RepoUpgradeOnBoot = "SECURITY" | "NONE";
export type ResourceId = string;

export interface RunJobFlowInput {
  Name: string;
  LogUri?: string;
  LogEncryptionKmsKeyId?: string;
  AdditionalInfo?: string;
  AmiVersion?: string;
  ReleaseLabel?: string;
  Instances: JobFlowInstancesConfig;
  Steps?: Array<StepConfig>;
  BootstrapActions?: Array<BootstrapActionConfig>;
  SupportedProducts?: Array<string>;
  NewSupportedProducts?: Array<SupportedProductConfig>;
  Applications?: Array<Application>;
  Configurations?: Array<Configuration>;
  VisibleToAllUsers?: boolean;
  JobFlowRole?: string;
  ServiceRole?: string;
  Tags?: Array<Tag>;
  SecurityConfiguration?: string;
  AutoScalingRole?: string;
  ScaleDownBehavior?: ScaleDownBehavior;
  CustomAmiId?: string;
  EbsRootVolumeSize?: number;
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot;
  KerberosAttributes?: KerberosAttributes;
  StepConcurrencyLevel?: number;
  ManagedScalingPolicy?: ManagedScalingPolicy;
  PlacementGroupConfigs?: Array<PlacementGroupConfig>;
  AutoTerminationPolicy?: AutoTerminationPolicy;
  OSReleaseLabel?: string;
  EbsRootVolumeIops?: number;
  EbsRootVolumeThroughput?: number;
}
export interface RunJobFlowOutput {
  JobFlowId?: string;
  ClusterArn?: string;
}
export type ScaleDownBehavior = "TERMINATE_AT_INSTANCE_HOUR" | "TERMINATE_AT_TASK_COMPLETION";
export interface ScalingAction {
  Market?: MarketType;
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
export interface ScalingConstraints {
  MinCapacity: number;
  MaxCapacity: number;
}
export interface ScalingRule {
  Name: string;
  Description?: string;
  Action: ScalingAction;
  Trigger: ScalingTrigger;
}
export type ScalingRuleList = Array<ScalingRule>;
export type ScalingStrategy = "DEFAULT" | "ADVANCED";
export interface ScalingTrigger {
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
export interface ScriptBootstrapActionConfig {
  Path: string;
  Args?: Array<string>;
}
export type SecurityConfigurationList = Array<SecurityConfigurationSummary>;
export interface SecurityConfigurationSummary {
  Name?: string;
  CreationDateTime?: Date | string;
}
export type SecurityGroupsList = Array<string>;
export interface SessionMappingDetail {
  StudioId?: string;
  IdentityId?: string;
  IdentityName?: string;
  IdentityType?: IdentityType;
  SessionPolicyArn?: string;
  CreationTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export interface SessionMappingSummary {
  StudioId?: string;
  IdentityId?: string;
  IdentityName?: string;
  IdentityType?: IdentityType;
  SessionPolicyArn?: string;
  CreationTime?: Date | string;
}
export type SessionMappingSummaryList = Array<SessionMappingSummary>;
export interface SetKeepJobFlowAliveWhenNoStepsInput {
  JobFlowIds: Array<string>;
  KeepJobFlowAliveWhenNoSteps: boolean;
}
export interface SetTerminationProtectionInput {
  JobFlowIds: Array<string>;
  TerminationProtected: boolean;
}
export interface SetUnhealthyNodeReplacementInput {
  JobFlowIds: Array<string>;
  UnhealthyNodeReplacement: boolean;
}
export interface SetVisibleToAllUsersInput {
  JobFlowIds: Array<string>;
  VisibleToAllUsers: boolean;
}
export interface ShrinkPolicy {
  DecommissionTimeout?: number;
  InstanceResizePolicy?: InstanceResizePolicy;
}
export interface SimpleScalingPolicyConfiguration {
  AdjustmentType?: AdjustmentType;
  ScalingAdjustment: number;
  CoolDown?: number;
}
export interface SimplifiedApplication {
  Name?: string;
  Version?: string;
}
export type SimplifiedApplicationList = Array<SimplifiedApplication>;
export type SpotProvisioningAllocationStrategy = "CAPACITY_OPTIMIZED" | "PRICE_CAPACITY_OPTIMIZED" | "LOWEST_PRICE" | "DIVERSIFIED" | "CAPACITY_OPTIMIZED_PRIORITIZED";
export interface SpotProvisioningSpecification {
  TimeoutDurationMinutes: number;
  TimeoutAction: SpotProvisioningTimeoutAction;
  BlockDurationMinutes?: number;
  AllocationStrategy?: SpotProvisioningAllocationStrategy;
}
export type SpotProvisioningTimeoutAction = "SWITCH_TO_ON_DEMAND" | "TERMINATE_CLUSTER";
export interface SpotResizingSpecification {
  TimeoutDurationMinutes?: number;
  AllocationStrategy?: SpotProvisioningAllocationStrategy;
}
export interface StartNotebookExecutionInput {
  EditorId?: string;
  RelativePath?: string;
  NotebookExecutionName?: string;
  NotebookParams?: string;
  ExecutionEngine: ExecutionEngineConfig;
  ServiceRole: string;
  NotebookInstanceSecurityGroupId?: string;
  Tags?: Array<Tag>;
  NotebookS3Location?: NotebookS3LocationFromInput;
  OutputNotebookS3Location?: OutputNotebookS3LocationFromInput;
  OutputNotebookFormat?: OutputNotebookFormat;
  EnvironmentVariables?: Record<string, string>;
}
export interface StartNotebookExecutionOutput {
  NotebookExecutionId?: string;
}
export type Statistic = "SAMPLE_COUNT" | "AVERAGE" | "SUM" | "MINIMUM" | "MAXIMUM";
export interface Step {
  Id?: string;
  Name?: string;
  Config?: HadoopStepConfig;
  ActionOnFailure?: ActionOnFailure;
  Status?: StepStatus;
  ExecutionRoleArn?: string;
}
export type StepCancellationOption = "SEND_INTERRUPT" | "TERMINATE_PROCESS";
export interface StepConfig {
  Name: string;
  ActionOnFailure?: ActionOnFailure;
  HadoopJarStep: HadoopJarStepConfig;
}
export type StepConfigList = Array<StepConfig>;
export interface StepDetail {
  StepConfig: StepConfig;
  ExecutionStatusDetail: StepExecutionStatusDetail;
}
export type StepDetailList = Array<StepDetail>;
export type StepExecutionState = "PENDING" | "RUNNING" | "CONTINUE" | "COMPLETED" | "CANCELLED" | "FAILED" | "INTERRUPTED";
export interface StepExecutionStatusDetail {
  State: StepExecutionState;
  CreationDateTime: Date | string;
  StartDateTime?: Date | string;
  EndDateTime?: Date | string;
  LastStateChangeReason?: string;
}
export type StepId = string;

export type StepIdsList = Array<string>;
export type StepState = "PENDING" | "CANCEL_PENDING" | "RUNNING" | "COMPLETED" | "CANCELLED" | "FAILED" | "INTERRUPTED";
export interface StepStateChangeReason {
  Code?: StepStateChangeReasonCode;
  Message?: string;
}
export type StepStateChangeReasonCode = "NONE";
export type StepStateList = Array<StepState>;
export interface StepStatus {
  State?: StepState;
  StateChangeReason?: StepStateChangeReason;
  FailureDetails?: FailureDetails;
  Timeline?: StepTimeline;
}
export interface StepSummary {
  Id?: string;
  Name?: string;
  Config?: HadoopStepConfig;
  ActionOnFailure?: ActionOnFailure;
  Status?: StepStatus;
}
export type StepSummaryList = Array<StepSummary>;
export interface StepTimeline {
  CreationDateTime?: Date | string;
  StartDateTime?: Date | string;
  EndDateTime?: Date | string;
}
export interface StopNotebookExecutionInput {
  NotebookExecutionId: string;
}
export type StringList = Array<string>;
export type StringMap = Record<string, string>;
export interface Studio {
  StudioId?: string;
  StudioArn?: string;
  Name?: string;
  Description?: string;
  AuthMode?: AuthMode;
  VpcId?: string;
  SubnetIds?: Array<string>;
  ServiceRole?: string;
  UserRole?: string;
  WorkspaceSecurityGroupId?: string;
  EngineSecurityGroupId?: string;
  Url?: string;
  CreationTime?: Date | string;
  DefaultS3Location?: string;
  IdpAuthUrl?: string;
  IdpRelayStateParameterName?: string;
  Tags?: Array<Tag>;
  IdcInstanceArn?: string;
  TrustedIdentityPropagationEnabled?: boolean;
  IdcUserAssignment?: IdcUserAssignment;
  EncryptionKeyArn?: string;
}
export interface StudioSummary {
  StudioId?: string;
  Name?: string;
  VpcId?: string;
  Description?: string;
  Url?: string;
  AuthMode?: AuthMode;
  CreationTime?: Date | string;
}
export type StudioSummaryList = Array<StudioSummary>;
export type SubnetIdList = Array<string>;
export interface SupportedInstanceType {
  Type?: string;
  MemoryGB?: number;
  StorageGB?: number;
  VCPU?: number;
  Is64BitsOnly?: boolean;
  InstanceFamilyId?: string;
  EbsOptimizedAvailable?: boolean;
  EbsOptimizedByDefault?: boolean;
  NumberOfDisks?: number;
  EbsStorageOnly?: boolean;
  Architecture?: string;
}
export type SupportedInstanceTypesList = Array<SupportedInstanceType>;
export interface SupportedProductConfig {
  Name?: string;
  Args?: Array<string>;
}
export type SupportedProductsList = Array<string>;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Array<Tag>;
export interface TerminateJobFlowsInput {
  JobFlowIds: Array<string>;
}
export type ThroughputVal = number;

export interface UpdateStudioInput {
  StudioId: string;
  Name?: string;
  Description?: string;
  SubnetIds?: Array<string>;
  DefaultS3Location?: string;
  EncryptionKeyArn?: string;
}
export interface UpdateStudioSessionMappingInput {
  StudioId: string;
  IdentityId?: string;
  IdentityName?: string;
  IdentityType: IdentityType;
  SessionPolicyArn: string;
}
export type UriString = string;

export interface UsernamePassword {
  Username?: string;
  Password?: string;
}
export type UtilizationPerformanceIndexInteger = number;

export interface VolumeSpecification {
  VolumeType: string;
  Iops?: number;
  SizeInGB: number;
  Throughput?: number;
}
export type WholeNumber = number;

export type XmlString = string;

export type XmlStringList = Array<string>;
export type XmlStringMaxLen256 = string;

export type XmlStringMaxLen256List = Array<string>;
export declare namespace AddInstanceFleet {
  export type Input = AddInstanceFleetInput;
  export type Output = AddInstanceFleetOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace AddInstanceGroups {
  export type Input = AddInstanceGroupsInput;
  export type Output = AddInstanceGroupsOutput;
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace AddJobFlowSteps {
  export type Input = AddJobFlowStepsInput;
  export type Output = AddJobFlowStepsOutput;
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace AddTags {
  export type Input = AddTagsInput;
  export type Output = AddTagsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CancelSteps {
  export type Input = CancelStepsInput;
  export type Output = CancelStepsOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreatePersistentAppUI {
  export type Input = CreatePersistentAppUIInput;
  export type Output = CreatePersistentAppUIOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateSecurityConfiguration {
  export type Input = CreateSecurityConfigurationInput;
  export type Output = CreateSecurityConfigurationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateStudio {
  export type Input = CreateStudioInput;
  export type Output = CreateStudioOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateStudioSessionMapping {
  export type Input = CreateStudioSessionMappingInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteSecurityConfiguration {
  export type Input = DeleteSecurityConfigurationInput;
  export type Output = DeleteSecurityConfigurationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteStudio {
  export type Input = DeleteStudioInput;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteStudioSessionMapping {
  export type Input = DeleteStudioSessionMappingInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeCluster {
  export type Input = DescribeClusterInput;
  export type Output = DescribeClusterOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeJobFlows {
  export type Input = DescribeJobFlowsInput;
  export type Output = DescribeJobFlowsOutput;
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeNotebookExecution {
  export type Input = DescribeNotebookExecutionInput;
  export type Output = DescribeNotebookExecutionOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribePersistentAppUI {
  export type Input = DescribePersistentAppUIInput;
  export type Output = DescribePersistentAppUIOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeReleaseLabel {
  export type Input = DescribeReleaseLabelInput;
  export type Output = DescribeReleaseLabelOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeSecurityConfiguration {
  export type Input = DescribeSecurityConfigurationInput;
  export type Output = DescribeSecurityConfigurationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeStep {
  export type Input = DescribeStepInput;
  export type Output = DescribeStepOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DescribeStudio {
  export type Input = DescribeStudioInput;
  export type Output = DescribeStudioOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetAutoTerminationPolicy {
  export type Input = GetAutoTerminationPolicyInput;
  export type Output = GetAutoTerminationPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetBlockPublicAccessConfiguration {
  export type Input = GetBlockPublicAccessConfigurationInput;
  export type Output = GetBlockPublicAccessConfigurationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetClusterSessionCredentials {
  export type Input = GetClusterSessionCredentialsInput;
  export type Output = GetClusterSessionCredentialsOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetManagedScalingPolicy {
  export type Input = GetManagedScalingPolicyInput;
  export type Output = GetManagedScalingPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetOnClusterAppUIPresignedURL {
  export type Input = GetOnClusterAppUIPresignedURLInput;
  export type Output = GetOnClusterAppUIPresignedURLOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetPersistentAppUIPresignedURL {
  export type Input = GetPersistentAppUIPresignedURLInput;
  export type Output = GetPersistentAppUIPresignedURLOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetStudioSessionMapping {
  export type Input = GetStudioSessionMappingInput;
  export type Output = GetStudioSessionMappingOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListBootstrapActions {
  export type Input = ListBootstrapActionsInput;
  export type Output = ListBootstrapActionsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersInput;
  export type Output = ListClustersOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListInstanceFleets {
  export type Input = ListInstanceFleetsInput;
  export type Output = ListInstanceFleetsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListInstanceGroups {
  export type Input = ListInstanceGroupsInput;
  export type Output = ListInstanceGroupsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListInstances {
  export type Input = ListInstancesInput;
  export type Output = ListInstancesOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListNotebookExecutions {
  export type Input = ListNotebookExecutionsInput;
  export type Output = ListNotebookExecutionsOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListReleaseLabels {
  export type Input = ListReleaseLabelsInput;
  export type Output = ListReleaseLabelsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListSecurityConfigurations {
  export type Input = ListSecurityConfigurationsInput;
  export type Output = ListSecurityConfigurationsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListSteps {
  export type Input = ListStepsInput;
  export type Output = ListStepsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListStudioSessionMappings {
  export type Input = ListStudioSessionMappingsInput;
  export type Output = ListStudioSessionMappingsOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListStudios {
  export type Input = ListStudiosInput;
  export type Output = ListStudiosOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListSupportedInstanceTypes {
  export type Input = ListSupportedInstanceTypesInput;
  export type Output = ListSupportedInstanceTypesOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ModifyCluster {
  export type Input = ModifyClusterInput;
  export type Output = ModifyClusterOutput;
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ModifyInstanceFleet {
  export type Input = ModifyInstanceFleetInput;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ModifyInstanceGroups {
  export type Input = ModifyInstanceGroupsInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace PutAutoScalingPolicy {
  export type Input = PutAutoScalingPolicyInput;
  export type Output = PutAutoScalingPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace PutAutoTerminationPolicy {
  export type Input = PutAutoTerminationPolicyInput;
  export type Output = PutAutoTerminationPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace PutBlockPublicAccessConfiguration {
  export type Input = PutBlockPublicAccessConfigurationInput;
  export type Output = PutBlockPublicAccessConfigurationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace PutManagedScalingPolicy {
  export type Input = PutManagedScalingPolicyInput;
  export type Output = PutManagedScalingPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace RemoveAutoScalingPolicy {
  export type Input = RemoveAutoScalingPolicyInput;
  export type Output = RemoveAutoScalingPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace RemoveAutoTerminationPolicy {
  export type Input = RemoveAutoTerminationPolicyInput;
  export type Output = RemoveAutoTerminationPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace RemoveManagedScalingPolicy {
  export type Input = RemoveManagedScalingPolicyInput;
  export type Output = RemoveManagedScalingPolicyOutput;
  export type Error =
    | CommonAwsError;
}

export declare namespace RemoveTags {
  export type Input = RemoveTagsInput;
  export type Output = RemoveTagsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace RunJobFlow {
  export type Input = RunJobFlowInput;
  export type Output = RunJobFlowOutput;
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace SetKeepJobFlowAliveWhenNoSteps {
  export type Input = SetKeepJobFlowAliveWhenNoStepsInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace SetTerminationProtection {
  export type Input = SetTerminationProtectionInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace SetUnhealthyNodeReplacement {
  export type Input = SetUnhealthyNodeReplacementInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace SetVisibleToAllUsers {
  export type Input = SetVisibleToAllUsersInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace StartNotebookExecution {
  export type Input = StartNotebookExecutionInput;
  export type Output = StartNotebookExecutionOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace StopNotebookExecution {
  export type Input = StopNotebookExecutionInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace TerminateJobFlows {
  export type Input = TerminateJobFlowsInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateStudio {
  export type Input = UpdateStudioInput;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateStudioSessionMapping {
  export type Input = UpdateStudioSessionMappingInput;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidRequestException
    | CommonAwsError;
}

