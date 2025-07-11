import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class OpsWorks extends AWSServiceClient {
  assignInstance(
    input: AssignInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  assignVolume(
    input: AssignVolumeRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  associateElasticIp(
    input: AssociateElasticIpRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  attachElasticLoadBalancer(
    input: AttachElasticLoadBalancerRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  cloneStack(
    input: CloneStackRequest,
  ): Effect.Effect<
    CloneStackResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createApp(
    input: CreateAppRequest,
  ): Effect.Effect<
    CreateAppResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    CreateDeploymentResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createInstance(
    input: CreateInstanceRequest,
  ): Effect.Effect<
    CreateInstanceResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createLayer(
    input: CreateLayerRequest,
  ): Effect.Effect<
    CreateLayerResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createStack(
    input: CreateStackRequest,
  ): Effect.Effect<CreateStackResult, ValidationException | CommonAwsError>;
  createUserProfile(
    input: CreateUserProfileRequest,
  ): Effect.Effect<
    CreateUserProfileResult,
    ValidationException | CommonAwsError
  >;
  deleteApp(
    input: DeleteAppRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteInstance(
    input: DeleteInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteLayer(
    input: DeleteLayerRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteStack(
    input: DeleteStackRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteUserProfile(
    input: DeleteUserProfileRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deregisterEcsCluster(
    input: DeregisterEcsClusterRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deregisterElasticIp(
    input: DeregisterElasticIpRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deregisterInstance(
    input: DeregisterInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deregisterRdsDbInstance(
    input: DeregisterRdsDbInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deregisterVolume(
    input: DeregisterVolumeRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeAgentVersions(
    input: DescribeAgentVersionsRequest,
  ): Effect.Effect<
    DescribeAgentVersionsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeApps(
    input: DescribeAppsRequest,
  ): Effect.Effect<
    DescribeAppsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeCommands(
    input: DescribeCommandsRequest,
  ): Effect.Effect<
    DescribeCommandsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeDeployments(
    input: DescribeDeploymentsRequest,
  ): Effect.Effect<
    DescribeDeploymentsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeEcsClusters(
    input: DescribeEcsClustersRequest,
  ): Effect.Effect<
    DescribeEcsClustersResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeElasticIps(
    input: DescribeElasticIpsRequest,
  ): Effect.Effect<
    DescribeElasticIpsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeElasticLoadBalancers(
    input: DescribeElasticLoadBalancersRequest,
  ): Effect.Effect<
    DescribeElasticLoadBalancersResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeInstances(
    input: DescribeInstancesRequest,
  ): Effect.Effect<
    DescribeInstancesResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeLayers(
    input: DescribeLayersRequest,
  ): Effect.Effect<
    DescribeLayersResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeLoadBasedAutoScaling(
    input: DescribeLoadBasedAutoScalingRequest,
  ): Effect.Effect<
    DescribeLoadBasedAutoScalingResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeMyUserProfile(input: {}): Effect.Effect<
    DescribeMyUserProfileResult,
    CommonAwsError
  >;
  describeOperatingSystems(input: {}): Effect.Effect<
    DescribeOperatingSystemsResponse,
    CommonAwsError
  >;
  describePermissions(
    input: DescribePermissionsRequest,
  ): Effect.Effect<
    DescribePermissionsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeRaidArrays(
    input: DescribeRaidArraysRequest,
  ): Effect.Effect<
    DescribeRaidArraysResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeRdsDbInstances(
    input: DescribeRdsDbInstancesRequest,
  ): Effect.Effect<
    DescribeRdsDbInstancesResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeServiceErrors(
    input: DescribeServiceErrorsRequest,
  ): Effect.Effect<
    DescribeServiceErrorsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeStackProvisioningParameters(
    input: DescribeStackProvisioningParametersRequest,
  ): Effect.Effect<
    DescribeStackProvisioningParametersResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeStacks(
    input: DescribeStacksRequest,
  ): Effect.Effect<
    DescribeStacksResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeStackSummary(
    input: DescribeStackSummaryRequest,
  ): Effect.Effect<
    DescribeStackSummaryResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeTimeBasedAutoScaling(
    input: DescribeTimeBasedAutoScalingRequest,
  ): Effect.Effect<
    DescribeTimeBasedAutoScalingResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeUserProfiles(
    input: DescribeUserProfilesRequest,
  ): Effect.Effect<
    DescribeUserProfilesResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeVolumes(
    input: DescribeVolumesRequest,
  ): Effect.Effect<
    DescribeVolumesResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  detachElasticLoadBalancer(
    input: DetachElasticLoadBalancerRequest,
  ): Effect.Effect<{}, ResourceNotFoundException | CommonAwsError>;
  disassociateElasticIp(
    input: DisassociateElasticIpRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getHostnameSuggestion(
    input: GetHostnameSuggestionRequest,
  ): Effect.Effect<
    GetHostnameSuggestionResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  grantAccess(
    input: GrantAccessRequest,
  ): Effect.Effect<
    GrantAccessResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  rebootInstance(
    input: RebootInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  registerEcsCluster(
    input: RegisterEcsClusterRequest,
  ): Effect.Effect<
    RegisterEcsClusterResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  registerElasticIp(
    input: RegisterElasticIpRequest,
  ): Effect.Effect<
    RegisterElasticIpResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  registerInstance(
    input: RegisterInstanceRequest,
  ): Effect.Effect<
    RegisterInstanceResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  registerRdsDbInstance(
    input: RegisterRdsDbInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  registerVolume(
    input: RegisterVolumeRequest,
  ): Effect.Effect<
    RegisterVolumeResult,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  setLoadBasedAutoScaling(
    input: SetLoadBasedAutoScalingRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  setPermission(
    input: SetPermissionRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  setTimeBasedAutoScaling(
    input: SetTimeBasedAutoScalingRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startInstance(
    input: StartInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startStack(
    input: StartStackRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  stopInstance(
    input: StopInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  stopStack(
    input: StopStackRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  unassignInstance(
    input: UnassignInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  unassignVolume(
    input: UnassignVolumeRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateApp(
    input: UpdateAppRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateElasticIp(
    input: UpdateElasticIpRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateInstance(
    input: UpdateInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateLayer(
    input: UpdateLayerRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateMyUserProfile(
    input: UpdateMyUserProfileRequest,
  ): Effect.Effect<{}, ValidationException | CommonAwsError>;
  updateRdsDbInstance(
    input: UpdateRdsDbInstanceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateStack(
    input: UpdateStackRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateUserProfile(
    input: UpdateUserProfileRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateVolume(
    input: UpdateVolumeRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export declare class Opsworks extends OpsWorks {}

export interface AgentVersion {
  Version?: string;
  ConfigurationManager?: StackConfigurationManager;
}
export type AgentVersions = Array<AgentVersion>;
export interface App {
  AppId?: string;
  StackId?: string;
  Shortname?: string;
  Name?: string;
  Description?: string;
  DataSources?: Array<DataSource>;
  Type?: AppType;
  AppSource?: Source;
  Domains?: Array<string>;
  EnableSsl?: boolean;
  SslConfiguration?: SslConfiguration;
  Attributes?: Record<AppAttributesKeys, string>;
  CreatedAt?: string;
  Environment?: Array<EnvironmentVariable>;
}
export type AppAttributes = Record<AppAttributesKeys, string>;
export type AppAttributesKeys =
  | "DocumentRoot"
  | "RailsEnv"
  | "AutoBundleOnDeploy"
  | "AwsFlowRubySettings";
export type Apps = Array<App>;
export type AppType =
  | "aws_flow_ruby"
  | "java"
  | "rails"
  | "php"
  | "nodejs"
  | "static"
  | "other";
export type Architecture = "x86_64" | "i386";
export interface AssignInstanceRequest {
  InstanceId: string;
  LayerIds: Array<string>;
}
export interface AssignVolumeRequest {
  VolumeId: string;
  InstanceId?: string;
}
export interface AssociateElasticIpRequest {
  ElasticIp: string;
  InstanceId?: string;
}
export interface AttachElasticLoadBalancerRequest {
  ElasticLoadBalancerName: string;
  LayerId: string;
}
export interface AutoScalingThresholds {
  InstanceCount?: number;
  ThresholdsWaitTime?: number;
  IgnoreMetricsTime?: number;
  CpuThreshold?: number;
  MemoryThreshold?: number;
  LoadThreshold?: number;
  Alarms?: Array<string>;
}
export type AutoScalingType = "load" | "timer";
export interface BlockDeviceMapping {
  DeviceName?: string;
  NoDevice?: string;
  VirtualName?: string;
  Ebs?: EbsBlockDevice;
}
export type BlockDeviceMappings = Array<BlockDeviceMapping>;
export type OpsworksBoolean = boolean;

export interface ChefConfiguration {
  ManageBerkshelf?: boolean;
  BerkshelfVersion?: string;
}
export interface CloneStackRequest {
  SourceStackId: string;
  Name?: string;
  Region?: string;
  VpcId?: string;
  Attributes?: Record<StackAttributesKeys, string>;
  ServiceRoleArn: string;
  DefaultInstanceProfileArn?: string;
  DefaultOs?: string;
  HostnameTheme?: string;
  DefaultAvailabilityZone?: string;
  DefaultSubnetId?: string;
  CustomJson?: string;
  ConfigurationManager?: StackConfigurationManager;
  ChefConfiguration?: ChefConfiguration;
  UseCustomCookbooks?: boolean;
  UseOpsworksSecurityGroups?: boolean;
  CustomCookbooksSource?: Source;
  DefaultSshKeyName?: string;
  ClonePermissions?: boolean;
  CloneAppIds?: Array<string>;
  DefaultRootDeviceType?: RootDeviceType;
  AgentVersion?: string;
}
export interface CloneStackResult {
  StackId?: string;
}
export interface CloudWatchLogsConfiguration {
  Enabled?: boolean;
  LogStreams?: Array<CloudWatchLogsLogStream>;
}
export type CloudWatchLogsEncoding =
  | "ascii"
  | "big5"
  | "big5hkscs"
  | "cp037"
  | "cp424"
  | "cp437"
  | "cp500"
  | "cp720"
  | "cp737"
  | "cp775"
  | "cp850"
  | "cp852"
  | "cp855"
  | "cp856"
  | "cp857"
  | "cp858"
  | "cp860"
  | "cp861"
  | "cp862"
  | "cp863"
  | "cp864"
  | "cp865"
  | "cp866"
  | "cp869"
  | "cp874"
  | "cp875"
  | "cp932"
  | "cp949"
  | "cp950"
  | "cp1006"
  | "cp1026"
  | "cp1140"
  | "cp1250"
  | "cp1251"
  | "cp1252"
  | "cp1253"
  | "cp1254"
  | "cp1255"
  | "cp1256"
  | "cp1257"
  | "cp1258"
  | "euc_jp"
  | "euc_jis_2004"
  | "euc_jisx0213"
  | "euc_kr"
  | "gb2312"
  | "gbk"
  | "gb18030"
  | "hz"
  | "iso2022_jp"
  | "iso2022_jp_1"
  | "iso2022_jp_2"
  | "iso2022_jp_2004"
  | "iso2022_jp_3"
  | "iso2022_jp_ext"
  | "iso2022_kr"
  | "latin_1"
  | "iso8859_2"
  | "iso8859_3"
  | "iso8859_4"
  | "iso8859_5"
  | "iso8859_6"
  | "iso8859_7"
  | "iso8859_8"
  | "iso8859_9"
  | "iso8859_10"
  | "iso8859_13"
  | "iso8859_14"
  | "iso8859_15"
  | "iso8859_16"
  | "johab"
  | "koi8_r"
  | "koi8_u"
  | "mac_cyrillic"
  | "mac_greek"
  | "mac_iceland"
  | "mac_latin2"
  | "mac_roman"
  | "mac_turkish"
  | "ptcp154"
  | "shift_jis"
  | "shift_jis_2004"
  | "shift_jisx0213"
  | "utf_32"
  | "utf_32_be"
  | "utf_32_le"
  | "utf_16"
  | "utf_16_be"
  | "utf_16_le"
  | "utf_7"
  | "utf_8"
  | "utf_8_sig";
export type CloudWatchLogsInitialPosition = "start_of_file" | "end_of_file";
export interface CloudWatchLogsLogStream {
  LogGroupName?: string;
  DatetimeFormat?: string;
  TimeZone?: CloudWatchLogsTimeZone;
  File?: string;
  FileFingerprintLines?: string;
  MultiLineStartPattern?: string;
  InitialPosition?: CloudWatchLogsInitialPosition;
  Encoding?: CloudWatchLogsEncoding;
  BufferDuration?: number;
  BatchCount?: number;
  BatchSize?: number;
}
export type CloudWatchLogsLogStreams = Array<CloudWatchLogsLogStream>;
export type CloudWatchLogsTimeZone = "LOCAL" | "UTC";
export interface Command {
  CommandId?: string;
  InstanceId?: string;
  DeploymentId?: string;
  CreatedAt?: string;
  AcknowledgedAt?: string;
  CompletedAt?: string;
  Status?: string;
  ExitCode?: number;
  LogUrl?: string;
  Type?: string;
}
export type Commands = Array<Command>;
export interface CreateAppRequest {
  StackId: string;
  Shortname?: string;
  Name: string;
  Description?: string;
  DataSources?: Array<DataSource>;
  Type: AppType;
  AppSource?: Source;
  Domains?: Array<string>;
  EnableSsl?: boolean;
  SslConfiguration?: SslConfiguration;
  Attributes?: Record<AppAttributesKeys, string>;
  Environment?: Array<EnvironmentVariable>;
}
export interface CreateAppResult {
  AppId?: string;
}
export interface CreateDeploymentRequest {
  StackId: string;
  AppId?: string;
  InstanceIds?: Array<string>;
  LayerIds?: Array<string>;
  Command: DeploymentCommand;
  Comment?: string;
  CustomJson?: string;
}
export interface CreateDeploymentResult {
  DeploymentId?: string;
}
export interface CreateInstanceRequest {
  StackId: string;
  LayerIds: Array<string>;
  InstanceType: string;
  AutoScalingType?: AutoScalingType;
  Hostname?: string;
  Os?: string;
  AmiId?: string;
  SshKeyName?: string;
  AvailabilityZone?: string;
  VirtualizationType?: string;
  SubnetId?: string;
  Architecture?: Architecture;
  RootDeviceType?: RootDeviceType;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  InstallUpdatesOnBoot?: boolean;
  EbsOptimized?: boolean;
  AgentVersion?: string;
  Tenancy?: string;
}
export interface CreateInstanceResult {
  InstanceId?: string;
}
export interface CreateLayerRequest {
  StackId: string;
  Type: LayerType;
  Name: string;
  Shortname: string;
  Attributes?: Record<LayerAttributesKeys, string>;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  CustomInstanceProfileArn?: string;
  CustomJson?: string;
  CustomSecurityGroupIds?: Array<string>;
  Packages?: Array<string>;
  VolumeConfigurations?: Array<VolumeConfiguration>;
  EnableAutoHealing?: boolean;
  AutoAssignElasticIps?: boolean;
  AutoAssignPublicIps?: boolean;
  CustomRecipes?: Recipes;
  InstallUpdatesOnBoot?: boolean;
  UseEbsOptimizedInstances?: boolean;
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}
export interface CreateLayerResult {
  LayerId?: string;
}
export interface CreateStackRequest {
  Name: string;
  Region: string;
  VpcId?: string;
  Attributes?: Record<StackAttributesKeys, string>;
  ServiceRoleArn: string;
  DefaultInstanceProfileArn: string;
  DefaultOs?: string;
  HostnameTheme?: string;
  DefaultAvailabilityZone?: string;
  DefaultSubnetId?: string;
  CustomJson?: string;
  ConfigurationManager?: StackConfigurationManager;
  ChefConfiguration?: ChefConfiguration;
  UseCustomCookbooks?: boolean;
  UseOpsworksSecurityGroups?: boolean;
  CustomCookbooksSource?: Source;
  DefaultSshKeyName?: string;
  DefaultRootDeviceType?: RootDeviceType;
  AgentVersion?: string;
}
export interface CreateStackResult {
  StackId?: string;
}
export interface CreateUserProfileRequest {
  IamUserArn: string;
  SshUsername?: string;
  SshPublicKey?: string;
  AllowSelfManagement?: boolean;
}
export interface CreateUserProfileResult {
  IamUserArn?: string;
}
export type DailyAutoScalingSchedule = Record<string, string>;
export interface DataSource {
  Type?: string;
  Arn?: string;
  DatabaseName?: string;
}
export type DataSources = Array<DataSource>;
export type DateTime = string;

export interface DeleteAppRequest {
  AppId: string;
}
export interface DeleteInstanceRequest {
  InstanceId: string;
  DeleteElasticIp?: boolean;
  DeleteVolumes?: boolean;
}
export interface DeleteLayerRequest {
  LayerId: string;
}
export interface DeleteStackRequest {
  StackId: string;
}
export interface DeleteUserProfileRequest {
  IamUserArn: string;
}
export interface Deployment {
  DeploymentId?: string;
  StackId?: string;
  AppId?: string;
  CreatedAt?: string;
  CompletedAt?: string;
  Duration?: number;
  IamUserArn?: string;
  Comment?: string;
  Command?: DeploymentCommand;
  Status?: string;
  CustomJson?: string;
  InstanceIds?: Array<string>;
}
export interface DeploymentCommand {
  Name: DeploymentCommandName;
  Args?: Record<string, Array<string>>;
}
export type DeploymentCommandArgs = Record<string, Array<string>>;
export type DeploymentCommandName =
  | "install_dependencies"
  | "update_dependencies"
  | "update_custom_cookbooks"
  | "execute_recipes"
  | "configure"
  | "setup"
  | "deploy"
  | "rollback"
  | "start"
  | "stop"
  | "restart"
  | "undeploy";
export type Deployments = Array<Deployment>;
export interface DeregisterEcsClusterRequest {
  EcsClusterArn: string;
}
export interface DeregisterElasticIpRequest {
  ElasticIp: string;
}
export interface DeregisterInstanceRequest {
  InstanceId: string;
}
export interface DeregisterRdsDbInstanceRequest {
  RdsDbInstanceArn: string;
}
export interface DeregisterVolumeRequest {
  VolumeId: string;
}
export interface DescribeAgentVersionsRequest {
  StackId?: string;
  ConfigurationManager?: StackConfigurationManager;
}
export interface DescribeAgentVersionsResult {
  AgentVersions?: Array<AgentVersion>;
}
export interface DescribeAppsRequest {
  StackId?: string;
  AppIds?: Array<string>;
}
export interface DescribeAppsResult {
  Apps?: Array<App>;
}
export interface DescribeCommandsRequest {
  DeploymentId?: string;
  InstanceId?: string;
  CommandIds?: Array<string>;
}
export interface DescribeCommandsResult {
  Commands?: Array<Command>;
}
export interface DescribeDeploymentsRequest {
  StackId?: string;
  AppId?: string;
  DeploymentIds?: Array<string>;
}
export interface DescribeDeploymentsResult {
  Deployments?: Array<Deployment>;
}
export interface DescribeEcsClustersRequest {
  EcsClusterArns?: Array<string>;
  StackId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeEcsClustersResult {
  EcsClusters?: Array<EcsCluster>;
  NextToken?: string;
}
export interface DescribeElasticIpsRequest {
  InstanceId?: string;
  StackId?: string;
  Ips?: Array<string>;
}
export interface DescribeElasticIpsResult {
  ElasticIps?: Array<ElasticIp>;
}
export interface DescribeElasticLoadBalancersRequest {
  StackId?: string;
  LayerIds?: Array<string>;
}
export interface DescribeElasticLoadBalancersResult {
  ElasticLoadBalancers?: Array<ElasticLoadBalancer>;
}
export interface DescribeInstancesRequest {
  StackId?: string;
  LayerId?: string;
  InstanceIds?: Array<string>;
}
export interface DescribeInstancesResult {
  Instances?: Array<Instance>;
}
export interface DescribeLayersRequest {
  StackId?: string;
  LayerIds?: Array<string>;
}
export interface DescribeLayersResult {
  Layers?: Array<Layer>;
}
export interface DescribeLoadBasedAutoScalingRequest {
  LayerIds: Array<string>;
}
export interface DescribeLoadBasedAutoScalingResult {
  LoadBasedAutoScalingConfigurations?: Array<LoadBasedAutoScalingConfiguration>;
}
export interface DescribeMyUserProfileResult {
  UserProfile?: SelfUserProfile;
}
export interface DescribeOperatingSystemsResponse {
  OperatingSystems?: Array<OperatingSystem>;
}
export interface DescribePermissionsRequest {
  IamUserArn?: string;
  StackId?: string;
}
export interface DescribePermissionsResult {
  Permissions?: Array<Permission>;
}
export interface DescribeRaidArraysRequest {
  InstanceId?: string;
  StackId?: string;
  RaidArrayIds?: Array<string>;
}
export interface DescribeRaidArraysResult {
  RaidArrays?: Array<RaidArray>;
}
export interface DescribeRdsDbInstancesRequest {
  StackId: string;
  RdsDbInstanceArns?: Array<string>;
}
export interface DescribeRdsDbInstancesResult {
  RdsDbInstances?: Array<RdsDbInstance>;
}
export interface DescribeServiceErrorsRequest {
  StackId?: string;
  InstanceId?: string;
  ServiceErrorIds?: Array<string>;
}
export interface DescribeServiceErrorsResult {
  ServiceErrors?: Array<ServiceError>;
}
export interface DescribeStackProvisioningParametersRequest {
  StackId: string;
}
export interface DescribeStackProvisioningParametersResult {
  AgentInstallerUrl?: string;
  Parameters?: Record<string, string>;
}
export interface DescribeStacksRequest {
  StackIds?: Array<string>;
}
export interface DescribeStacksResult {
  Stacks?: Array<Stack>;
}
export interface DescribeStackSummaryRequest {
  StackId: string;
}
export interface DescribeStackSummaryResult {
  StackSummary?: StackSummary;
}
export interface DescribeTimeBasedAutoScalingRequest {
  InstanceIds: Array<string>;
}
export interface DescribeTimeBasedAutoScalingResult {
  TimeBasedAutoScalingConfigurations?: Array<TimeBasedAutoScalingConfiguration>;
}
export interface DescribeUserProfilesRequest {
  IamUserArns?: Array<string>;
}
export interface DescribeUserProfilesResult {
  UserProfiles?: Array<UserProfile>;
}
export interface DescribeVolumesRequest {
  InstanceId?: string;
  StackId?: string;
  RaidArrayId?: string;
  VolumeIds?: Array<string>;
}
export interface DescribeVolumesResult {
  Volumes?: Array<Volume>;
}
export interface DetachElasticLoadBalancerRequest {
  ElasticLoadBalancerName: string;
  LayerId: string;
}
export interface DisassociateElasticIpRequest {
  ElasticIp: string;
}
export type Double = number;

export interface EbsBlockDevice {
  SnapshotId?: string;
  Iops?: number;
  VolumeSize?: number;
  VolumeType?: VolumeType;
  DeleteOnTermination?: boolean;
}
export interface EcsCluster {
  EcsClusterArn?: string;
  EcsClusterName?: string;
  StackId?: string;
  RegisteredAt?: string;
}
export type EcsClusters = Array<EcsCluster>;
export interface ElasticIp {
  Ip?: string;
  Name?: string;
  Domain?: string;
  Region?: string;
  InstanceId?: string;
}
export type ElasticIps = Array<ElasticIp>;
export interface ElasticLoadBalancer {
  ElasticLoadBalancerName?: string;
  Region?: string;
  DnsName?: string;
  StackId?: string;
  LayerId?: string;
  VpcId?: string;
  AvailabilityZones?: Array<string>;
  SubnetIds?: Array<string>;
  Ec2InstanceIds?: Array<string>;
}
export type ElasticLoadBalancers = Array<ElasticLoadBalancer>;
export interface EnvironmentVariable {
  Key: string;
  Value: string;
  Secure?: boolean;
}
export type EnvironmentVariables = Array<EnvironmentVariable>;
export interface GetHostnameSuggestionRequest {
  LayerId: string;
}
export interface GetHostnameSuggestionResult {
  LayerId?: string;
  Hostname?: string;
}
export interface GrantAccessRequest {
  InstanceId: string;
  ValidForInMinutes?: number;
}
export interface GrantAccessResult {
  TemporaryCredential?: TemporaryCredential;
}
export type Hour = string;

export interface Instance {
  AgentVersion?: string;
  AmiId?: string;
  Architecture?: Architecture;
  Arn?: string;
  AutoScalingType?: AutoScalingType;
  AvailabilityZone?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  CreatedAt?: string;
  EbsOptimized?: boolean;
  Ec2InstanceId?: string;
  EcsClusterArn?: string;
  EcsContainerInstanceArn?: string;
  ElasticIp?: string;
  Hostname?: string;
  InfrastructureClass?: string;
  InstallUpdatesOnBoot?: boolean;
  InstanceId?: string;
  InstanceProfileArn?: string;
  InstanceType?: string;
  LastServiceErrorId?: string;
  LayerIds?: Array<string>;
  Os?: string;
  Platform?: string;
  PrivateDns?: string;
  PrivateIp?: string;
  PublicDns?: string;
  PublicIp?: string;
  RegisteredBy?: string;
  ReportedAgentVersion?: string;
  ReportedOs?: ReportedOs;
  RootDeviceType?: RootDeviceType;
  RootDeviceVolumeId?: string;
  SecurityGroupIds?: Array<string>;
  SshHostDsaKeyFingerprint?: string;
  SshHostRsaKeyFingerprint?: string;
  SshKeyName?: string;
  StackId?: string;
  Status?: string;
  SubnetId?: string;
  Tenancy?: string;
  VirtualizationType?: VirtualizationType;
}
export interface InstanceIdentity {
  Document?: string;
  Signature?: string;
}
export type Instances = Array<Instance>;
export interface InstancesCount {
  Assigning?: number;
  Booting?: number;
  ConnectionLost?: number;
  Deregistering?: number;
  Online?: number;
  Pending?: number;
  Rebooting?: number;
  Registered?: number;
  Registering?: number;
  Requested?: number;
  RunningSetup?: number;
  SetupFailed?: number;
  ShuttingDown?: number;
  StartFailed?: number;
  StopFailed?: number;
  Stopped?: number;
  Stopping?: number;
  Terminated?: number;
  Terminating?: number;
  Unassigning?: number;
}
export type Integer = number;

export interface Layer {
  Arn?: string;
  StackId?: string;
  LayerId?: string;
  Type?: LayerType;
  Name?: string;
  Shortname?: string;
  Attributes?: Record<LayerAttributesKeys, string>;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  CustomInstanceProfileArn?: string;
  CustomJson?: string;
  CustomSecurityGroupIds?: Array<string>;
  DefaultSecurityGroupNames?: Array<string>;
  Packages?: Array<string>;
  VolumeConfigurations?: Array<VolumeConfiguration>;
  EnableAutoHealing?: boolean;
  AutoAssignElasticIps?: boolean;
  AutoAssignPublicIps?: boolean;
  DefaultRecipes?: Recipes;
  CustomRecipes?: Recipes;
  CreatedAt?: string;
  InstallUpdatesOnBoot?: boolean;
  UseEbsOptimizedInstances?: boolean;
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}
export type LayerAttributes = Record<LayerAttributesKeys, string>;
export type LayerAttributesKeys =
  | "EcsClusterArn"
  | "EnableHaproxyStats"
  | "HaproxyStatsUrl"
  | "HaproxyStatsUser"
  | "HaproxyStatsPassword"
  | "HaproxyHealthCheckUrl"
  | "HaproxyHealthCheckMethod"
  | "MysqlRootPassword"
  | "MysqlRootPasswordUbiquitous"
  | "GangliaUrl"
  | "GangliaUser"
  | "GangliaPassword"
  | "MemcachedMemory"
  | "NodejsVersion"
  | "RubyVersion"
  | "RubygemsVersion"
  | "ManageBundler"
  | "BundlerVersion"
  | "RailsStack"
  | "PassengerVersion"
  | "Jvm"
  | "JvmVersion"
  | "JvmOptions"
  | "JavaAppServer"
  | "JavaAppServerVersion";
export type Layers = Array<Layer>;
export type LayerType =
  | "aws_flow_ruby"
  | "ecs_cluster"
  | "java_app"
  | "lb"
  | "web"
  | "php_app"
  | "rails_app"
  | "nodejs_app"
  | "memcached"
  | "db_master"
  | "monitoring_master"
  | "custom";
export interface LifecycleEventConfiguration {
  Shutdown?: ShutdownEventConfiguration;
}
export interface ListTagsRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsResult {
  Tags?: Record<string, string>;
  NextToken?: string;
}
export interface LoadBasedAutoScalingConfiguration {
  LayerId?: string;
  Enable?: boolean;
  UpScaling?: AutoScalingThresholds;
  DownScaling?: AutoScalingThresholds;
}
export type LoadBasedAutoScalingConfigurations =
  Array<LoadBasedAutoScalingConfiguration>;
export type MaxResults = number;

export type Minute = number;

export type NextToken = string;

export interface OperatingSystem {
  Name?: string;
  Id?: string;
  Type?: string;
  ConfigurationManagers?: Array<OperatingSystemConfigurationManager>;
  ReportedName?: string;
  ReportedVersion?: string;
  Supported?: boolean;
}
export interface OperatingSystemConfigurationManager {
  Name?: string;
  Version?: string;
}
export type OperatingSystemConfigurationManagers =
  Array<OperatingSystemConfigurationManager>;
export type OperatingSystems = Array<OperatingSystem>;
export type Parameters = Record<string, string>;
export interface Permission {
  StackId?: string;
  IamUserArn?: string;
  AllowSsh?: boolean;
  AllowSudo?: boolean;
  Level?: string;
}
export type Permissions = Array<Permission>;
export interface RaidArray {
  RaidArrayId?: string;
  InstanceId?: string;
  Name?: string;
  RaidLevel?: number;
  NumberOfDisks?: number;
  Size?: number;
  Device?: string;
  MountPoint?: string;
  AvailabilityZone?: string;
  CreatedAt?: string;
  StackId?: string;
  VolumeType?: string;
  Iops?: number;
}
export type RaidArrays = Array<RaidArray>;
export interface RdsDbInstance {
  RdsDbInstanceArn?: string;
  DbInstanceIdentifier?: string;
  DbUser?: string;
  DbPassword?: string;
  Region?: string;
  Address?: string;
  Engine?: string;
  StackId?: string;
  MissingOnRds?: boolean;
}
export type RdsDbInstances = Array<RdsDbInstance>;
export interface RebootInstanceRequest {
  InstanceId: string;
}
export interface Recipes {
  Setup?: Array<string>;
  Configure?: Array<string>;
  Deploy?: Array<string>;
  Undeploy?: Array<string>;
  Shutdown?: Array<string>;
}
export interface RegisterEcsClusterRequest {
  EcsClusterArn: string;
  StackId: string;
}
export interface RegisterEcsClusterResult {
  EcsClusterArn?: string;
}
export interface RegisterElasticIpRequest {
  ElasticIp: string;
  StackId: string;
}
export interface RegisterElasticIpResult {
  ElasticIp?: string;
}
export interface RegisterInstanceRequest {
  StackId: string;
  Hostname?: string;
  PublicIp?: string;
  PrivateIp?: string;
  RsaPublicKey?: string;
  RsaPublicKeyFingerprint?: string;
  InstanceIdentity?: InstanceIdentity;
}
export interface RegisterInstanceResult {
  InstanceId?: string;
}
export interface RegisterRdsDbInstanceRequest {
  StackId: string;
  RdsDbInstanceArn: string;
  DbUser: string;
  DbPassword: string;
}
export interface RegisterVolumeRequest {
  Ec2VolumeId?: string;
  StackId: string;
}
export interface RegisterVolumeResult {
  VolumeId?: string;
}
export interface ReportedOs {
  Family?: string;
  Name?: string;
  Version?: string;
}
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RootDeviceType = "ebs" | "instance_store";
export interface SelfUserProfile {
  IamUserArn?: string;
  Name?: string;
  SshUsername?: string;
  SshPublicKey?: string;
}
export interface ServiceError {
  ServiceErrorId?: string;
  StackId?: string;
  InstanceId?: string;
  Type?: string;
  Message?: string;
  CreatedAt?: string;
}
export type ServiceErrors = Array<ServiceError>;
export interface SetLoadBasedAutoScalingRequest {
  LayerId: string;
  Enable?: boolean;
  UpScaling?: AutoScalingThresholds;
  DownScaling?: AutoScalingThresholds;
}
export interface SetPermissionRequest {
  StackId: string;
  IamUserArn: string;
  AllowSsh?: boolean;
  AllowSudo?: boolean;
  Level?: string;
}
export interface SetTimeBasedAutoScalingRequest {
  InstanceId: string;
  AutoScalingSchedule?: WeeklyAutoScalingSchedule;
}
export interface ShutdownEventConfiguration {
  ExecutionTimeout?: number;
  DelayUntilElbConnectionsDrained?: boolean;
}
export interface Source {
  Type?: SourceType;
  Url?: string;
  Username?: string;
  Password?: string;
  SshKey?: string;
  Revision?: string;
}
export type SourceType = "git" | "svn" | "archive" | "s3";
export interface SslConfiguration {
  Certificate: string;
  PrivateKey: string;
  Chain?: string;
}
export interface Stack {
  StackId?: string;
  Name?: string;
  Arn?: string;
  Region?: string;
  VpcId?: string;
  Attributes?: Record<StackAttributesKeys, string>;
  ServiceRoleArn?: string;
  DefaultInstanceProfileArn?: string;
  DefaultOs?: string;
  HostnameTheme?: string;
  DefaultAvailabilityZone?: string;
  DefaultSubnetId?: string;
  CustomJson?: string;
  ConfigurationManager?: StackConfigurationManager;
  ChefConfiguration?: ChefConfiguration;
  UseCustomCookbooks?: boolean;
  UseOpsworksSecurityGroups?: boolean;
  CustomCookbooksSource?: Source;
  DefaultSshKeyName?: string;
  CreatedAt?: string;
  DefaultRootDeviceType?: RootDeviceType;
  AgentVersion?: string;
}
export type StackAttributes = Record<StackAttributesKeys, string>;
export type StackAttributesKeys = "Color";
export interface StackConfigurationManager {
  Name?: string;
  Version?: string;
}
export type Stacks = Array<Stack>;
export interface StackSummary {
  StackId?: string;
  Name?: string;
  Arn?: string;
  LayersCount?: number;
  AppsCount?: number;
  InstancesCount?: InstancesCount;
}
export interface StartInstanceRequest {
  InstanceId: string;
}
export interface StartStackRequest {
  StackId: string;
}
export interface StopInstanceRequest {
  InstanceId: string;
  Force?: boolean;
}
export interface StopStackRequest {
  StackId: string;
}
export type OpsworksString = string;

export type Strings = Array<string>;
export type Switch = string;

export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface TemporaryCredential {
  Username?: string;
  Password?: string;
  ValidForInMinutes?: number;
  InstanceId?: string;
}
export interface TimeBasedAutoScalingConfiguration {
  InstanceId?: string;
  AutoScalingSchedule?: WeeklyAutoScalingSchedule;
}
export type TimeBasedAutoScalingConfigurations =
  Array<TimeBasedAutoScalingConfiguration>;
export interface UnassignInstanceRequest {
  InstanceId: string;
}
export interface UnassignVolumeRequest {
  VolumeId: string;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateAppRequest {
  AppId: string;
  Name?: string;
  Description?: string;
  DataSources?: Array<DataSource>;
  Type?: AppType;
  AppSource?: Source;
  Domains?: Array<string>;
  EnableSsl?: boolean;
  SslConfiguration?: SslConfiguration;
  Attributes?: Record<AppAttributesKeys, string>;
  Environment?: Array<EnvironmentVariable>;
}
export interface UpdateElasticIpRequest {
  ElasticIp: string;
  Name?: string;
}
export interface UpdateInstanceRequest {
  InstanceId: string;
  LayerIds?: Array<string>;
  InstanceType?: string;
  AutoScalingType?: AutoScalingType;
  Hostname?: string;
  Os?: string;
  AmiId?: string;
  SshKeyName?: string;
  Architecture?: Architecture;
  InstallUpdatesOnBoot?: boolean;
  EbsOptimized?: boolean;
  AgentVersion?: string;
}
export interface UpdateLayerRequest {
  LayerId: string;
  Name?: string;
  Shortname?: string;
  Attributes?: Record<LayerAttributesKeys, string>;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  CustomInstanceProfileArn?: string;
  CustomJson?: string;
  CustomSecurityGroupIds?: Array<string>;
  Packages?: Array<string>;
  VolumeConfigurations?: Array<VolumeConfiguration>;
  EnableAutoHealing?: boolean;
  AutoAssignElasticIps?: boolean;
  AutoAssignPublicIps?: boolean;
  CustomRecipes?: Recipes;
  InstallUpdatesOnBoot?: boolean;
  UseEbsOptimizedInstances?: boolean;
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
}
export interface UpdateMyUserProfileRequest {
  SshPublicKey?: string;
}
export interface UpdateRdsDbInstanceRequest {
  RdsDbInstanceArn: string;
  DbUser?: string;
  DbPassword?: string;
}
export interface UpdateStackRequest {
  StackId: string;
  Name?: string;
  Attributes?: Record<StackAttributesKeys, string>;
  ServiceRoleArn?: string;
  DefaultInstanceProfileArn?: string;
  DefaultOs?: string;
  HostnameTheme?: string;
  DefaultAvailabilityZone?: string;
  DefaultSubnetId?: string;
  CustomJson?: string;
  ConfigurationManager?: StackConfigurationManager;
  ChefConfiguration?: ChefConfiguration;
  UseCustomCookbooks?: boolean;
  CustomCookbooksSource?: Source;
  DefaultSshKeyName?: string;
  DefaultRootDeviceType?: RootDeviceType;
  UseOpsworksSecurityGroups?: boolean;
  AgentVersion?: string;
}
export interface UpdateUserProfileRequest {
  IamUserArn: string;
  SshUsername?: string;
  SshPublicKey?: string;
  AllowSelfManagement?: boolean;
}
export interface UpdateVolumeRequest {
  VolumeId: string;
  Name?: string;
  MountPoint?: string;
}
export interface UserProfile {
  IamUserArn?: string;
  Name?: string;
  SshUsername?: string;
  SshPublicKey?: string;
  AllowSelfManagement?: boolean;
}
export type UserProfiles = Array<UserProfile>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ValidForInMinutes = number;

export type VirtualizationType = "paravirtual" | "hvm";
export interface Volume {
  VolumeId?: string;
  Ec2VolumeId?: string;
  Name?: string;
  RaidArrayId?: string;
  InstanceId?: string;
  Status?: string;
  Size?: number;
  Device?: string;
  MountPoint?: string;
  Region?: string;
  AvailabilityZone?: string;
  VolumeType?: string;
  Iops?: number;
  Encrypted?: boolean;
}
export interface VolumeConfiguration {
  MountPoint: string;
  RaidLevel?: number;
  NumberOfDisks: number;
  Size: number;
  VolumeType?: string;
  Iops?: number;
  Encrypted?: boolean;
}
export type VolumeConfigurations = Array<VolumeConfiguration>;
export type Volumes = Array<Volume>;
export type VolumeType = "gp2" | "io1" | "standard";
export interface WeeklyAutoScalingSchedule {
  Monday?: Record<string, string>;
  Tuesday?: Record<string, string>;
  Wednesday?: Record<string, string>;
  Thursday?: Record<string, string>;
  Friday?: Record<string, string>;
  Saturday?: Record<string, string>;
  Sunday?: Record<string, string>;
}
export declare namespace AssignInstance {
  export type Input = AssignInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssignVolume {
  export type Input = AssignVolumeRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateElasticIp {
  export type Input = AssociateElasticIpRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AttachElasticLoadBalancer {
  export type Input = AttachElasticLoadBalancerRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CloneStack {
  export type Input = CloneStackRequest;
  export type Output = CloneStackResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApp {
  export type Input = CreateAppRequest;
  export type Output = CreateAppResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
  export type Output = CreateDeploymentResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInstance {
  export type Input = CreateInstanceRequest;
  export type Output = CreateInstanceResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLayer {
  export type Input = CreateLayerRequest;
  export type Output = CreateLayerResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStack {
  export type Input = CreateStackRequest;
  export type Output = CreateStackResult;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace CreateUserProfile {
  export type Input = CreateUserProfileRequest;
  export type Output = CreateUserProfileResult;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace DeleteApp {
  export type Input = DeleteAppRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInstance {
  export type Input = DeleteInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLayer {
  export type Input = DeleteLayerRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStack {
  export type Input = DeleteStackRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteUserProfile {
  export type Input = DeleteUserProfileRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterEcsCluster {
  export type Input = DeregisterEcsClusterRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterElasticIp {
  export type Input = DeregisterElasticIpRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterInstance {
  export type Input = DeregisterInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterRdsDbInstance {
  export type Input = DeregisterRdsDbInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterVolume {
  export type Input = DeregisterVolumeRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAgentVersions {
  export type Input = DescribeAgentVersionsRequest;
  export type Output = DescribeAgentVersionsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApps {
  export type Input = DescribeAppsRequest;
  export type Output = DescribeAppsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCommands {
  export type Input = DescribeCommandsRequest;
  export type Output = DescribeCommandsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDeployments {
  export type Input = DescribeDeploymentsRequest;
  export type Output = DescribeDeploymentsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeEcsClusters {
  export type Input = DescribeEcsClustersRequest;
  export type Output = DescribeEcsClustersResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeElasticIps {
  export type Input = DescribeElasticIpsRequest;
  export type Output = DescribeElasticIpsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeElasticLoadBalancers {
  export type Input = DescribeElasticLoadBalancersRequest;
  export type Output = DescribeElasticLoadBalancersResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInstances {
  export type Input = DescribeInstancesRequest;
  export type Output = DescribeInstancesResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLayers {
  export type Input = DescribeLayersRequest;
  export type Output = DescribeLayersResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLoadBasedAutoScaling {
  export type Input = DescribeLoadBasedAutoScalingRequest;
  export type Output = DescribeLoadBasedAutoScalingResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeMyUserProfile {
  export type Input = {};
  export type Output = DescribeMyUserProfileResult;
  export type Error = CommonAwsError;
}

export declare namespace DescribeOperatingSystems {
  export type Input = {};
  export type Output = DescribeOperatingSystemsResponse;
  export type Error = CommonAwsError;
}

export declare namespace DescribePermissions {
  export type Input = DescribePermissionsRequest;
  export type Output = DescribePermissionsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRaidArrays {
  export type Input = DescribeRaidArraysRequest;
  export type Output = DescribeRaidArraysResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRdsDbInstances {
  export type Input = DescribeRdsDbInstancesRequest;
  export type Output = DescribeRdsDbInstancesResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeServiceErrors {
  export type Input = DescribeServiceErrorsRequest;
  export type Output = DescribeServiceErrorsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeStackProvisioningParameters {
  export type Input = DescribeStackProvisioningParametersRequest;
  export type Output = DescribeStackProvisioningParametersResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeStacks {
  export type Input = DescribeStacksRequest;
  export type Output = DescribeStacksResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeStackSummary {
  export type Input = DescribeStackSummaryRequest;
  export type Output = DescribeStackSummaryResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTimeBasedAutoScaling {
  export type Input = DescribeTimeBasedAutoScalingRequest;
  export type Output = DescribeTimeBasedAutoScalingResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeUserProfiles {
  export type Input = DescribeUserProfilesRequest;
  export type Output = DescribeUserProfilesResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeVolumes {
  export type Input = DescribeVolumesRequest;
  export type Output = DescribeVolumesResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetachElasticLoadBalancer {
  export type Input = DetachElasticLoadBalancerRequest;
  export type Output = {};
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DisassociateElasticIp {
  export type Input = DisassociateElasticIpRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetHostnameSuggestion {
  export type Input = GetHostnameSuggestionRequest;
  export type Output = GetHostnameSuggestionResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GrantAccess {
  export type Input = GrantAccessRequest;
  export type Output = GrantAccessResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RebootInstance {
  export type Input = RebootInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterEcsCluster {
  export type Input = RegisterEcsClusterRequest;
  export type Output = RegisterEcsClusterResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterElasticIp {
  export type Input = RegisterElasticIpRequest;
  export type Output = RegisterElasticIpResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterInstance {
  export type Input = RegisterInstanceRequest;
  export type Output = RegisterInstanceResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterRdsDbInstance {
  export type Input = RegisterRdsDbInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterVolume {
  export type Input = RegisterVolumeRequest;
  export type Output = RegisterVolumeResult;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetLoadBasedAutoScaling {
  export type Input = SetLoadBasedAutoScalingRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetPermission {
  export type Input = SetPermissionRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetTimeBasedAutoScaling {
  export type Input = SetTimeBasedAutoScalingRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartInstance {
  export type Input = StartInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartStack {
  export type Input = StartStackRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopInstance {
  export type Input = StopInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopStack {
  export type Input = StopStackRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UnassignInstance {
  export type Input = UnassignInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UnassignVolume {
  export type Input = UnassignVolumeRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApp {
  export type Input = UpdateAppRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateElasticIp {
  export type Input = UpdateElasticIpRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInstance {
  export type Input = UpdateInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLayer {
  export type Input = UpdateLayerRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMyUserProfile {
  export type Input = UpdateMyUserProfileRequest;
  export type Output = {};
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace UpdateRdsDbInstance {
  export type Input = UpdateRdsDbInstanceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStack {
  export type Input = UpdateStackRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateUserProfile {
  export type Input = UpdateUserProfileRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateVolume {
  export type Input = UpdateVolumeRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
