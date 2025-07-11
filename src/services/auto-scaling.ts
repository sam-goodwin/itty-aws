import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AutoScaling_2011_01_01 {
  attachInstances(
    input: AttachInstancesQuery,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  attachLoadBalancerTargetGroups(
    input: AttachLoadBalancerTargetGroupsType,
  ): Effect.Effect<
    AttachLoadBalancerTargetGroupsResultType,
    ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  attachLoadBalancers(
    input: AttachLoadBalancersType,
  ): Effect.Effect<
    AttachLoadBalancersResultType,
    ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  attachTrafficSources(
    input: AttachTrafficSourcesType,
  ): Effect.Effect<
    AttachTrafficSourcesResultType,
    ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  batchDeleteScheduledAction(
    input: BatchDeleteScheduledActionType,
  ): Effect.Effect<
    BatchDeleteScheduledActionAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  batchPutScheduledUpdateGroupAction(
    input: BatchPutScheduledUpdateGroupActionType,
  ): Effect.Effect<
    BatchPutScheduledUpdateGroupActionAnswer,
    AlreadyExistsFault | LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  cancelInstanceRefresh(
    input: CancelInstanceRefreshType,
  ): Effect.Effect<
    CancelInstanceRefreshAnswer,
    ActiveInstanceRefreshNotFoundFault | LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  completeLifecycleAction(
    input: CompleteLifecycleActionType,
  ): Effect.Effect<
    CompleteLifecycleActionAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  createAutoScalingGroup(
    input: CreateAutoScalingGroupType,
  ): Effect.Effect<
    {},
    AlreadyExistsFault | LimitExceededFault | ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  createLaunchConfiguration(
    input: CreateLaunchConfigurationType,
  ): Effect.Effect<
    {},
    AlreadyExistsFault | LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  createOrUpdateTags(
    input: CreateOrUpdateTagsType,
  ): Effect.Effect<
    {},
    AlreadyExistsFault | LimitExceededFault | ResourceContentionFault | ResourceInUseFault | CommonAwsError
  >;
  deleteAutoScalingGroup(
    input: DeleteAutoScalingGroupType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ResourceInUseFault | ScalingActivityInProgressFault | CommonAwsError
  >;
  deleteLaunchConfiguration(
    input: LaunchConfigurationNameType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ResourceInUseFault | CommonAwsError
  >;
  deleteLifecycleHook(
    input: DeleteLifecycleHookType,
  ): Effect.Effect<
    DeleteLifecycleHookAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  deleteNotificationConfiguration(
    input: DeleteNotificationConfigurationType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  deleteScheduledAction(
    input: DeleteScheduledActionType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ResourceInUseFault | CommonAwsError
  >;
  deleteWarmPool(
    input: DeleteWarmPoolType,
  ): Effect.Effect<
    DeleteWarmPoolAnswer,
    LimitExceededFault | ResourceContentionFault | ResourceInUseFault | ScalingActivityInProgressFault | CommonAwsError
  >;
  describeAccountLimits(
    input: {},
  ): Effect.Effect<
    DescribeAccountLimitsAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  describeAdjustmentTypes(
    input: {},
  ): Effect.Effect<
    DescribeAdjustmentTypesAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  describeAutoScalingGroups(
    input: AutoScalingGroupNamesType,
  ): Effect.Effect<
    AutoScalingGroupsType,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeAutoScalingInstances(
    input: DescribeAutoScalingInstancesType,
  ): Effect.Effect<
    AutoScalingInstancesType,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeAutoScalingNotificationTypes(
    input: {},
  ): Effect.Effect<
    DescribeAutoScalingNotificationTypesAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  describeInstanceRefreshes(
    input: DescribeInstanceRefreshesType,
  ): Effect.Effect<
    DescribeInstanceRefreshesAnswer,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeLaunchConfigurations(
    input: LaunchConfigurationNamesType,
  ): Effect.Effect<
    LaunchConfigurationsType,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeLifecycleHookTypes(
    input: {},
  ): Effect.Effect<
    DescribeLifecycleHookTypesAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  describeLifecycleHooks(
    input: DescribeLifecycleHooksType,
  ): Effect.Effect<
    DescribeLifecycleHooksAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  describeLoadBalancerTargetGroups(
    input: DescribeLoadBalancerTargetGroupsRequest,
  ): Effect.Effect<
    DescribeLoadBalancerTargetGroupsResponse,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeLoadBalancers(
    input: DescribeLoadBalancersRequest,
  ): Effect.Effect<
    DescribeLoadBalancersResponse,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeMetricCollectionTypes(
    input: {},
  ): Effect.Effect<
    DescribeMetricCollectionTypesAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  describeNotificationConfigurations(
    input: DescribeNotificationConfigurationsType,
  ): Effect.Effect<
    DescribeNotificationConfigurationsAnswer,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describePolicies(
    input: DescribePoliciesType,
  ): Effect.Effect<
    PoliciesType,
    InvalidNextToken | ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  describeScalingActivities(
    input: DescribeScalingActivitiesType,
  ): Effect.Effect<
    ActivitiesType,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeScalingProcessTypes(
    input: {},
  ): Effect.Effect<
    ProcessesType,
    ResourceContentionFault | CommonAwsError
  >;
  describeScheduledActions(
    input: DescribeScheduledActionsType,
  ): Effect.Effect<
    ScheduledActionsType,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsType,
  ): Effect.Effect<
    TagsType,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeTerminationPolicyTypes(
    input: {},
  ): Effect.Effect<
    DescribeTerminationPolicyTypesAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  describeTrafficSources(
    input: DescribeTrafficSourcesRequest,
  ): Effect.Effect<
    DescribeTrafficSourcesResponse,
    InvalidNextToken | ResourceContentionFault | CommonAwsError
  >;
  describeWarmPool(
    input: DescribeWarmPoolType,
  ): Effect.Effect<
    DescribeWarmPoolAnswer,
    InvalidNextToken | LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  detachInstances(
    input: DetachInstancesQuery,
  ): Effect.Effect<
    DetachInstancesAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  detachLoadBalancerTargetGroups(
    input: DetachLoadBalancerTargetGroupsType,
  ): Effect.Effect<
    DetachLoadBalancerTargetGroupsResultType,
    ResourceContentionFault | CommonAwsError
  >;
  detachLoadBalancers(
    input: DetachLoadBalancersType,
  ): Effect.Effect<
    DetachLoadBalancersResultType,
    ResourceContentionFault | CommonAwsError
  >;
  detachTrafficSources(
    input: DetachTrafficSourcesType,
  ): Effect.Effect<
    DetachTrafficSourcesResultType,
    ResourceContentionFault | CommonAwsError
  >;
  disableMetricsCollection(
    input: DisableMetricsCollectionQuery,
  ): Effect.Effect<
    {},
    ResourceContentionFault | CommonAwsError
  >;
  enableMetricsCollection(
    input: EnableMetricsCollectionQuery,
  ): Effect.Effect<
    {},
    ResourceContentionFault | CommonAwsError
  >;
  enterStandby(
    input: EnterStandbyQuery,
  ): Effect.Effect<
    EnterStandbyAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  executePolicy(
    input: ExecutePolicyType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ScalingActivityInProgressFault | CommonAwsError
  >;
  exitStandby(
    input: ExitStandbyQuery,
  ): Effect.Effect<
    ExitStandbyAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  getPredictiveScalingForecast(
    input: GetPredictiveScalingForecastType,
  ): Effect.Effect<
    GetPredictiveScalingForecastAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  putLifecycleHook(
    input: PutLifecycleHookType,
  ): Effect.Effect<
    PutLifecycleHookAnswer,
    LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  putNotificationConfiguration(
    input: PutNotificationConfigurationType,
  ): Effect.Effect<
    {},
    LimitExceededFault | ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  putScalingPolicy(
    input: PutScalingPolicyType,
  ): Effect.Effect<
    PolicyARNType,
    LimitExceededFault | ResourceContentionFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
  putScheduledUpdateGroupAction(
    input: PutScheduledUpdateGroupActionType,
  ): Effect.Effect<
    {},
    AlreadyExistsFault | LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  putWarmPool(
    input: PutWarmPoolType,
  ): Effect.Effect<
    PutWarmPoolAnswer,
    LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  recordLifecycleActionHeartbeat(
    input: RecordLifecycleActionHeartbeatType,
  ): Effect.Effect<
    RecordLifecycleActionHeartbeatAnswer,
    ResourceContentionFault | CommonAwsError
  >;
  resumeProcesses(
    input: ScalingProcessQuery,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ResourceInUseFault | CommonAwsError
  >;
  rollbackInstanceRefresh(
    input: RollbackInstanceRefreshType,
  ): Effect.Effect<
    RollbackInstanceRefreshAnswer,
    ActiveInstanceRefreshNotFoundFault | IrreversibleInstanceRefreshFault | LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  setDesiredCapacity(
    input: SetDesiredCapacityType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ScalingActivityInProgressFault | CommonAwsError
  >;
  setInstanceHealth(
    input: SetInstanceHealthQuery,
  ): Effect.Effect<
    {},
    ResourceContentionFault | CommonAwsError
  >;
  setInstanceProtection(
    input: SetInstanceProtectionQuery,
  ): Effect.Effect<
    SetInstanceProtectionAnswer,
    LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  startInstanceRefresh(
    input: StartInstanceRefreshType,
  ): Effect.Effect<
    StartInstanceRefreshAnswer,
    InstanceRefreshInProgressFault | LimitExceededFault | ResourceContentionFault | CommonAwsError
  >;
  suspendProcesses(
    input: ScalingProcessQuery,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ResourceInUseFault | CommonAwsError
  >;
  terminateInstanceInAutoScalingGroup(
    input: TerminateInstanceInAutoScalingGroupType,
  ): Effect.Effect<
    ActivityType,
    ResourceContentionFault | ScalingActivityInProgressFault | CommonAwsError
  >;
  updateAutoScalingGroup(
    input: UpdateAutoScalingGroupType,
  ): Effect.Effect<
    {},
    ResourceContentionFault | ScalingActivityInProgressFault | ServiceLinkedRoleFailure | CommonAwsError
  >;
}

export type AutoScaling = AutoScaling_2011_01_01;

export interface AcceleratorCountRequest {
  Min?: number;
  Max?: number;
}
export type AcceleratorManufacturer = "NVIDIA" | "AMD" | "AMAZON_WEB_SERVICES" | "XILINX";
export type AcceleratorManufacturers = Array<AcceleratorManufacturer>;
export type AcceleratorName = "A100" | "V100" | "K80" | "T4" | "M60" | "RADEON_PRO_V520" | "VU9P";
export type AcceleratorNames = Array<AcceleratorName>;
export interface AcceleratorTotalMemoryMiBRequest {
  Min?: number;
  Max?: number;
}
export type AcceleratorType = "GPU" | "FPGA" | "INFERENCE";
export type AcceleratorTypes = Array<AcceleratorType>;
export declare class ActiveInstanceRefreshNotFoundFault extends Data.TaggedError(
  "ActiveInstanceRefreshNotFoundFault",
)<{
  readonly message?: string;
}> {}
export type Activities = Array<Activity>;
export interface ActivitiesType {
  Activities: Array<Activity>;
  NextToken?: string;
}
export interface Activity {
  ActivityId: string;
  AutoScalingGroupName: string;
  Description?: string;
  Cause: string;
  StartTime: Date | string;
  EndTime?: Date | string;
  StatusCode: ScalingActivityStatusCode;
  StatusMessage?: string;
  Progress?: number;
  Details?: string;
  AutoScalingGroupState?: string;
  AutoScalingGroupARN?: string;
}
export type ActivityIds = Array<string>;
export interface ActivityType {
  Activity?: Activity;
}
export interface AdjustmentType {
  AdjustmentType?: string;
}
export type AdjustmentTypes = Array<AdjustmentType>;
export interface Alarm {
  AlarmName?: string;
  AlarmARN?: string;
}
export type AlarmList = Array<string>;
export type Alarms = Array<Alarm>;
export interface AlarmSpecification {
  Alarms?: Array<string>;
}
export type AllowedInstanceType = string;

export type AllowedInstanceTypes = Array<string>;
export declare class AlreadyExistsFault extends Data.TaggedError(
  "AlreadyExistsFault",
)<{
  readonly message?: string;
}> {}
export type AnyPrintableAsciiStringMaxLen4000 = string;

export type AsciiStringMaxLen255 = string;

export type AssociatePublicIpAddress = boolean;

export interface AttachInstancesQuery {
  InstanceIds?: Array<string>;
  AutoScalingGroupName: string;
}
export interface AttachLoadBalancersResultType {
}
export interface AttachLoadBalancersType {
  AutoScalingGroupName: string;
  LoadBalancerNames: Array<string>;
}
export interface AttachLoadBalancerTargetGroupsResultType {
}
export interface AttachLoadBalancerTargetGroupsType {
  AutoScalingGroupName: string;
  TargetGroupARNs: Array<string>;
}
export interface AttachTrafficSourcesResultType {
}
export interface AttachTrafficSourcesType {
  AutoScalingGroupName: string;
  TrafficSources: Array<TrafficSourceIdentifier>;
  SkipZonalShiftValidation?: boolean;
}
export type AutoRollback = boolean;

export interface AutoScalingGroup {
  AutoScalingGroupName: string;
  AutoScalingGroupARN?: string;
  LaunchConfigurationName?: string;
  LaunchTemplate?: LaunchTemplateSpecification;
  MixedInstancesPolicy?: MixedInstancesPolicy;
  MinSize: number;
  MaxSize: number;
  DesiredCapacity: number;
  PredictedCapacity?: number;
  DefaultCooldown: number;
  AvailabilityZones: Array<string>;
  LoadBalancerNames?: Array<string>;
  TargetGroupARNs?: Array<string>;
  HealthCheckType: string;
  HealthCheckGracePeriod?: number;
  Instances?: Array<Instance>;
  CreatedTime: Date | string;
  SuspendedProcesses?: Array<SuspendedProcess>;
  PlacementGroup?: string;
  VPCZoneIdentifier?: string;
  EnabledMetrics?: Array<EnabledMetric>;
  Status?: string;
  Tags?: Array<TagDescription>;
  TerminationPolicies?: Array<string>;
  NewInstancesProtectedFromScaleIn?: boolean;
  ServiceLinkedRoleARN?: string;
  MaxInstanceLifetime?: number;
  CapacityRebalance?: boolean;
  WarmPoolConfiguration?: WarmPoolConfiguration;
  WarmPoolSize?: number;
  Context?: string;
  DesiredCapacityType?: string;
  DefaultInstanceWarmup?: number;
  TrafficSources?: Array<TrafficSourceIdentifier>;
  InstanceMaintenancePolicy?: InstanceMaintenancePolicy;
  AvailabilityZoneDistribution?: AvailabilityZoneDistribution;
  AvailabilityZoneImpairmentPolicy?: AvailabilityZoneImpairmentPolicy;
  CapacityReservationSpecification?: CapacityReservationSpecification;
}
export type AutoScalingGroupDesiredCapacity = number;

export type AutoScalingGroupMaxSize = number;

export type AutoScalingGroupMinSize = number;

export type AutoScalingGroupNames = Array<string>;
export interface AutoScalingGroupNamesType {
  AutoScalingGroupNames?: Array<string>;
  IncludeInstances?: boolean;
  NextToken?: string;
  MaxRecords?: number;
  Filters?: Array<Filter>;
}
export type AutoScalingGroupPredictedCapacity = number;

export type AutoScalingGroups = Array<AutoScalingGroup>;
export type AutoScalingGroupState = string;

export interface AutoScalingGroupsType {
  AutoScalingGroups: Array<AutoScalingGroup>;
  NextToken?: string;
}
export interface AutoScalingInstanceDetails {
  InstanceId: string;
  InstanceType?: string;
  AutoScalingGroupName: string;
  AvailabilityZone: string;
  LifecycleState: string;
  HealthStatus: string;
  LaunchConfigurationName?: string;
  LaunchTemplate?: LaunchTemplateSpecification;
  ProtectedFromScaleIn: boolean;
  WeightedCapacity?: string;
}
export type AutoScalingInstances = Array<AutoScalingInstanceDetails>;
export interface AutoScalingInstancesType {
  AutoScalingInstances?: Array<AutoScalingInstanceDetails>;
  NextToken?: string;
}
export type AutoScalingNotificationTypes = Array<string>;
export interface AvailabilityZoneDistribution {
  CapacityDistributionStrategy?: CapacityDistributionStrategy;
}
export interface AvailabilityZoneImpairmentPolicy {
  ZonalShiftEnabled?: boolean;
  ImpairedZoneHealthCheckBehavior?: ImpairedZoneHealthCheckBehavior;
}
export type AvailabilityZones = Array<string>;
export type BakeTime = number;

export type BareMetal = "INCLUDED" | "EXCLUDED" | "REQUIRED";
export interface BaselineEbsBandwidthMbpsRequest {
  Min?: number;
  Max?: number;
}
export interface BaselinePerformanceFactorsRequest {
  Cpu?: CpuPerformanceFactorRequest;
}
export interface BatchDeleteScheduledActionAnswer {
  FailedScheduledActions?: Array<FailedScheduledUpdateGroupActionRequest>;
}
export interface BatchDeleteScheduledActionType {
  AutoScalingGroupName: string;
  ScheduledActionNames: Array<string>;
}
export interface BatchPutScheduledUpdateGroupActionAnswer {
  FailedScheduledUpdateGroupActions?: Array<FailedScheduledUpdateGroupActionRequest>;
}
export interface BatchPutScheduledUpdateGroupActionType {
  AutoScalingGroupName: string;
  ScheduledUpdateGroupActions: Array<ScheduledUpdateGroupActionRequest>;
}
export type BlockDeviceEbsDeleteOnTermination = boolean;

export type BlockDeviceEbsEncrypted = boolean;

export type BlockDeviceEbsIops = number;

export type BlockDeviceEbsThroughput = number;

export type BlockDeviceEbsVolumeSize = number;

export type BlockDeviceEbsVolumeType = string;

export interface BlockDeviceMapping {
  VirtualName?: string;
  DeviceName: string;
  Ebs?: Ebs;
  NoDevice?: boolean;
}
export type BlockDeviceMappings = Array<BlockDeviceMapping>;
export type BurstablePerformance = "INCLUDED" | "EXCLUDED" | "REQUIRED";
export interface CancelInstanceRefreshAnswer {
  InstanceRefreshId?: string;
}
export interface CancelInstanceRefreshType {
  AutoScalingGroupName: string;
}
export type CapacityDistributionStrategy = "BALANCED_ONLY" | "BALANCED_BEST_EFFORT";
export interface CapacityForecast {
  Timestamps: Array<Date | string>;
  Values: Array<number>;
}
export type CapacityRebalanceEnabled = boolean;

export type CapacityReservationIds = Array<string>;
export type CapacityReservationPreference = "CapacityReservationsOnly" | "CapacityReservationsFirst" | "None" | "Default";
export type CapacityReservationResourceGroupArns = Array<string>;
export interface CapacityReservationSpecification {
  CapacityReservationPreference?: CapacityReservationPreference;
  CapacityReservationTarget?: CapacityReservationTarget;
}
export interface CapacityReservationTarget {
  CapacityReservationIds?: Array<string>;
  CapacityReservationResourceGroupArns?: Array<string>;
}
export type CheckpointDelay = number;

export type CheckpointPercentages = Array<number>;
export type ClassicLinkVPCSecurityGroups = Array<string>;
export interface CompleteLifecycleActionAnswer {
}
export interface CompleteLifecycleActionType {
  LifecycleHookName: string;
  AutoScalingGroupName: string;
  LifecycleActionToken?: string;
  LifecycleActionResult: string;
  InstanceId?: string;
}
export type Context = string;

export type Cooldown = number;

export type CpuManufacturer = "INTEL" | "AMD" | "AMAZON_WEB_SERVICES" | "APPLE";
export type CpuManufacturers = Array<CpuManufacturer>;
export interface CpuPerformanceFactorRequest {
  References?: Array<PerformanceFactorReferenceRequest>;
}
export interface CreateAutoScalingGroupType {
  AutoScalingGroupName: string;
  LaunchConfigurationName?: string;
  LaunchTemplate?: LaunchTemplateSpecification;
  MixedInstancesPolicy?: MixedInstancesPolicy;
  InstanceId?: string;
  MinSize: number;
  MaxSize: number;
  DesiredCapacity?: number;
  DefaultCooldown?: number;
  AvailabilityZones?: Array<string>;
  LoadBalancerNames?: Array<string>;
  TargetGroupARNs?: Array<string>;
  HealthCheckType?: string;
  HealthCheckGracePeriod?: number;
  PlacementGroup?: string;
  VPCZoneIdentifier?: string;
  TerminationPolicies?: Array<string>;
  NewInstancesProtectedFromScaleIn?: boolean;
  CapacityRebalance?: boolean;
  LifecycleHookSpecificationList?: Array<LifecycleHookSpecification>;
  Tags?: Array<Tag>;
  ServiceLinkedRoleARN?: string;
  MaxInstanceLifetime?: number;
  Context?: string;
  DesiredCapacityType?: string;
  DefaultInstanceWarmup?: number;
  TrafficSources?: Array<TrafficSourceIdentifier>;
  InstanceMaintenancePolicy?: InstanceMaintenancePolicy;
  AvailabilityZoneDistribution?: AvailabilityZoneDistribution;
  AvailabilityZoneImpairmentPolicy?: AvailabilityZoneImpairmentPolicy;
  SkipZonalShiftValidation?: boolean;
  CapacityReservationSpecification?: CapacityReservationSpecification;
}
export interface CreateLaunchConfigurationType {
  LaunchConfigurationName: string;
  ImageId?: string;
  KeyName?: string;
  SecurityGroups?: Array<string>;
  ClassicLinkVPCId?: string;
  ClassicLinkVPCSecurityGroups?: Array<string>;
  UserData?: string;
  InstanceId?: string;
  InstanceType?: string;
  KernelId?: string;
  RamdiskId?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  InstanceMonitoring?: InstanceMonitoring;
  SpotPrice?: string;
  IamInstanceProfile?: string;
  EbsOptimized?: boolean;
  AssociatePublicIpAddress?: boolean;
  PlacementTenancy?: string;
  MetadataOptions?: InstanceMetadataOptions;
}
export interface CreateOrUpdateTagsType {
  Tags: Array<Tag>;
}
export interface CustomizedMetricSpecification {
  MetricName?: string;
  Namespace?: string;
  Dimensions?: Array<MetricDimension>;
  Statistic?: MetricStatistic;
  Unit?: string;
  Period?: number;
  Metrics?: Array<TargetTrackingMetricDataQuery>;
}
export type DefaultInstanceWarmup = number;

export interface DeleteAutoScalingGroupType {
  AutoScalingGroupName: string;
  ForceDelete?: boolean;
}
export interface DeleteLifecycleHookAnswer {
}
export interface DeleteLifecycleHookType {
  LifecycleHookName: string;
  AutoScalingGroupName: string;
}
export interface DeleteNotificationConfigurationType {
  AutoScalingGroupName: string;
  TopicARN: string;
}
export interface DeletePolicyType {
  AutoScalingGroupName?: string;
  PolicyName: string;
}
export interface DeleteScheduledActionType {
  AutoScalingGroupName: string;
  ScheduledActionName: string;
}
export interface DeleteTagsType {
  Tags: Array<Tag>;
}
export interface DeleteWarmPoolAnswer {
}
export interface DeleteWarmPoolType {
  AutoScalingGroupName: string;
  ForceDelete?: boolean;
}
export interface DescribeAccountLimitsAnswer {
  MaxNumberOfAutoScalingGroups?: number;
  MaxNumberOfLaunchConfigurations?: number;
  NumberOfAutoScalingGroups?: number;
  NumberOfLaunchConfigurations?: number;
}
export interface DescribeAdjustmentTypesAnswer {
  AdjustmentTypes?: Array<AdjustmentType>;
}
export interface DescribeAutoScalingInstancesType {
  InstanceIds?: Array<string>;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeAutoScalingNotificationTypesAnswer {
  AutoScalingNotificationTypes?: Array<string>;
}
export interface DescribeInstanceRefreshesAnswer {
  InstanceRefreshes?: Array<InstanceRefresh>;
  NextToken?: string;
}
export interface DescribeInstanceRefreshesType {
  AutoScalingGroupName: string;
  InstanceRefreshIds?: Array<string>;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribeLifecycleHooksAnswer {
  LifecycleHooks?: Array<LifecycleHook>;
}
export interface DescribeLifecycleHooksType {
  AutoScalingGroupName: string;
  LifecycleHookNames?: Array<string>;
}
export interface DescribeLifecycleHookTypesAnswer {
  LifecycleHookTypes?: Array<string>;
}
export interface DescribeLoadBalancersRequest {
  AutoScalingGroupName: string;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribeLoadBalancersResponse {
  LoadBalancers?: Array<LoadBalancerState>;
  NextToken?: string;
}
export interface DescribeLoadBalancerTargetGroupsRequest {
  AutoScalingGroupName: string;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribeLoadBalancerTargetGroupsResponse {
  LoadBalancerTargetGroups?: Array<LoadBalancerTargetGroupState>;
  NextToken?: string;
}
export interface DescribeMetricCollectionTypesAnswer {
  Metrics?: Array<MetricCollectionType>;
  Granularities?: Array<MetricGranularityType>;
}
export interface DescribeNotificationConfigurationsAnswer {
  NotificationConfigurations: Array<NotificationConfiguration>;
  NextToken?: string;
}
export interface DescribeNotificationConfigurationsType {
  AutoScalingGroupNames?: Array<string>;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribePoliciesType {
  AutoScalingGroupName?: string;
  PolicyNames?: Array<string>;
  PolicyTypes?: Array<string>;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribeScalingActivitiesType {
  ActivityIds?: Array<string>;
  AutoScalingGroupName?: string;
  IncludeDeletedGroups?: boolean;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DescribeScheduledActionsType {
  AutoScalingGroupName?: string;
  ScheduledActionNames?: Array<string>;
  StartTime?: Date | string;
  EndTime?: Date | string;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribeTagsType {
  Filters?: Array<Filter>;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribeTerminationPolicyTypesAnswer {
  TerminationPolicyTypes?: Array<string>;
}
export interface DescribeTrafficSourcesRequest {
  AutoScalingGroupName: string;
  TrafficSourceType?: string;
  NextToken?: string;
  MaxRecords?: number;
}
export interface DescribeTrafficSourcesResponse {
  TrafficSources?: Array<TrafficSourceState>;
  NextToken?: string;
}
export interface DescribeWarmPoolAnswer {
  WarmPoolConfiguration?: WarmPoolConfiguration;
  Instances?: Array<Instance>;
  NextToken?: string;
}
export interface DescribeWarmPoolType {
  AutoScalingGroupName: string;
  MaxRecords?: number;
  NextToken?: string;
}
export interface DesiredConfiguration {
  LaunchTemplate?: LaunchTemplateSpecification;
  MixedInstancesPolicy?: MixedInstancesPolicy;
}
export interface DetachInstancesAnswer {
  Activities?: Array<Activity>;
}
export interface DetachInstancesQuery {
  InstanceIds?: Array<string>;
  AutoScalingGroupName: string;
  ShouldDecrementDesiredCapacity: boolean;
}
export interface DetachLoadBalancersResultType {
}
export interface DetachLoadBalancersType {
  AutoScalingGroupName: string;
  LoadBalancerNames: Array<string>;
}
export interface DetachLoadBalancerTargetGroupsResultType {
}
export interface DetachLoadBalancerTargetGroupsType {
  AutoScalingGroupName: string;
  TargetGroupARNs: Array<string>;
}
export interface DetachTrafficSourcesResultType {
}
export interface DetachTrafficSourcesType {
  AutoScalingGroupName: string;
  TrafficSources: Array<TrafficSourceIdentifier>;
}
export interface DisableMetricsCollectionQuery {
  AutoScalingGroupName: string;
  Metrics?: Array<string>;
}
export type DisableScaleIn = boolean;

export interface Ebs {
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
  DeleteOnTermination?: boolean;
  Iops?: number;
  Encrypted?: boolean;
  Throughput?: number;
}
export type EbsOptimized = boolean;

export interface EnabledMetric {
  Metric?: string;
  Granularity?: string;
}
export type EnabledMetrics = Array<EnabledMetric>;
export interface EnableMetricsCollectionQuery {
  AutoScalingGroupName: string;
  Metrics?: Array<string>;
  Granularity: string;
}
export interface EnterStandbyAnswer {
  Activities?: Array<Activity>;
}
export interface EnterStandbyQuery {
  InstanceIds?: Array<string>;
  AutoScalingGroupName: string;
  ShouldDecrementDesiredCapacity: boolean;
}
export type EstimatedInstanceWarmup = number;

export type ExcludedInstance = string;

export type ExcludedInstanceTypes = Array<string>;
export interface ExecutePolicyType {
  AutoScalingGroupName?: string;
  PolicyName: string;
  HonorCooldown?: boolean;
  MetricValue?: number;
  BreachThreshold?: number;
}
export interface ExitStandbyAnswer {
  Activities?: Array<Activity>;
}
export interface ExitStandbyQuery {
  InstanceIds?: Array<string>;
  AutoScalingGroupName: string;
}
export interface FailedScheduledUpdateGroupActionRequest {
  ScheduledActionName: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type FailedScheduledUpdateGroupActionRequests = Array<FailedScheduledUpdateGroupActionRequest>;
export interface Filter {
  Name?: string;
  Values?: Array<string>;
}
export type Filters = Array<Filter>;
export type ForceDelete = boolean;

export interface GetPredictiveScalingForecastAnswer {
  LoadForecast: Array<LoadForecast>;
  CapacityForecast: CapacityForecast;
  UpdateTime: Date | string;
}
export interface GetPredictiveScalingForecastType {
  AutoScalingGroupName: string;
  PolicyName: string;
  StartTime: Date | string;
  EndTime: Date | string;
}
export type GlobalTimeout = number;

export type HealthCheckGracePeriod = number;

export type HeartbeatTimeout = number;

export type HonorCooldown = boolean;

export type ImpairedZoneHealthCheckBehavior = "ReplaceUnhealthy" | "IgnoreUnhealthy";
export type IncludeDeletedGroups = boolean;

export type IncludeInstances = boolean;

export interface Instance {
  InstanceId: string;
  InstanceType?: string;
  AvailabilityZone: string;
  LifecycleState: LifecycleState;
  HealthStatus: string;
  LaunchConfigurationName?: string;
  LaunchTemplate?: LaunchTemplateSpecification;
  ProtectedFromScaleIn: boolean;
  WeightedCapacity?: string;
}
export type InstanceGeneration = "CURRENT" | "PREVIOUS";
export type InstanceGenerations = Array<InstanceGeneration>;
export type InstanceIds = Array<string>;
export interface InstanceMaintenancePolicy {
  MinHealthyPercentage?: number;
  MaxHealthyPercentage?: number;
}
export type InstanceMetadataEndpointState = "Disabled" | "Enabled";
export type InstanceMetadataHttpPutResponseHopLimit = number;

export type InstanceMetadataHttpTokensState = "Optional" | "Required";
export interface InstanceMetadataOptions {
  HttpTokens?: InstanceMetadataHttpTokensState;
  HttpPutResponseHopLimit?: number;
  HttpEndpoint?: InstanceMetadataEndpointState;
}
export interface InstanceMonitoring {
  Enabled?: boolean;
}
export type InstanceProtected = boolean;

export interface InstanceRefresh {
  InstanceRefreshId?: string;
  AutoScalingGroupName?: string;
  Status?: InstanceRefreshStatus;
  StatusReason?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  PercentageComplete?: number;
  InstancesToUpdate?: number;
  ProgressDetails?: InstanceRefreshProgressDetails;
  Preferences?: RefreshPreferences;
  DesiredConfiguration?: DesiredConfiguration;
  RollbackDetails?: RollbackDetails;
}
export type InstanceRefreshes = Array<InstanceRefresh>;
export type InstanceRefreshIds = Array<string>;
export declare class InstanceRefreshInProgressFault extends Data.TaggedError(
  "InstanceRefreshInProgressFault",
)<{
  readonly message?: string;
}> {}
export interface InstanceRefreshLivePoolProgress {
  PercentageComplete?: number;
  InstancesToUpdate?: number;
}
export interface InstanceRefreshProgressDetails {
  LivePoolProgress?: InstanceRefreshLivePoolProgress;
  WarmPoolProgress?: InstanceRefreshWarmPoolProgress;
}
export type InstanceRefreshStatus = "Pending" | "InProgress" | "Successful" | "Failed" | "Cancelling" | "Cancelled" | "RollbackInProgress" | "RollbackFailed" | "RollbackSuccessful" | "Baking";
export interface InstanceRefreshWarmPoolProgress {
  PercentageComplete?: number;
  InstancesToUpdate?: number;
}
export interface InstanceRequirements {
  VCpuCount: VCpuCountRequest;
  MemoryMiB: MemoryMiBRequest;
  CpuManufacturers?: Array<CpuManufacturer>;
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  ExcludedInstanceTypes?: Array<string>;
  InstanceGenerations?: Array<InstanceGeneration>;
  SpotMaxPricePercentageOverLowestPrice?: number;
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  BareMetal?: BareMetal;
  BurstablePerformance?: BurstablePerformance;
  RequireHibernateSupport?: boolean;
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;
  LocalStorage?: LocalStorage;
  LocalStorageTypes?: Array<LocalStorageType>;
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
  AcceleratorTypes?: Array<AcceleratorType>;
  AcceleratorCount?: AcceleratorCountRequest;
  AcceleratorManufacturers?: Array<AcceleratorManufacturer>;
  AcceleratorNames?: Array<AcceleratorName>;
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  AllowedInstanceTypes?: Array<string>;
  BaselinePerformanceFactors?: BaselinePerformanceFactorsRequest;
}
export interface InstanceReusePolicy {
  ReuseOnScaleIn?: boolean;
}
export type Instances = Array<Instance>;
export interface InstancesDistribution {
  OnDemandAllocationStrategy?: string;
  OnDemandBaseCapacity?: number;
  OnDemandPercentageAboveBaseCapacity?: number;
  SpotAllocationStrategy?: string;
  SpotInstancePools?: number;
  SpotMaxPrice?: string;
}
export type InstancesToUpdate = number;

export type IntPercent = number;

export type IntPercent100To200 = number;

export type IntPercent100To200Resettable = number;

export type IntPercentResettable = number;

export declare class InvalidNextToken extends Data.TaggedError(
  "InvalidNextToken",
)<{
  readonly message?: string;
}> {}
export declare class IrreversibleInstanceRefreshFault extends Data.TaggedError(
  "IrreversibleInstanceRefreshFault",
)<{
  readonly message?: string;
}> {}
export interface LaunchConfiguration {
  LaunchConfigurationName: string;
  LaunchConfigurationARN?: string;
  ImageId: string;
  KeyName?: string;
  SecurityGroups?: Array<string>;
  ClassicLinkVPCId?: string;
  ClassicLinkVPCSecurityGroups?: Array<string>;
  UserData?: string;
  InstanceType: string;
  KernelId?: string;
  RamdiskId?: string;
  BlockDeviceMappings?: Array<BlockDeviceMapping>;
  InstanceMonitoring?: InstanceMonitoring;
  SpotPrice?: string;
  IamInstanceProfile?: string;
  CreatedTime: Date | string;
  EbsOptimized?: boolean;
  AssociatePublicIpAddress?: boolean;
  PlacementTenancy?: string;
  MetadataOptions?: InstanceMetadataOptions;
}
export type LaunchConfigurationNames = Array<string>;
export interface LaunchConfigurationNamesType {
  LaunchConfigurationNames?: Array<string>;
  NextToken?: string;
  MaxRecords?: number;
}
export interface LaunchConfigurationNameType {
  LaunchConfigurationName: string;
}
export type LaunchConfigurations = Array<LaunchConfiguration>;
export interface LaunchConfigurationsType {
  LaunchConfigurations: Array<LaunchConfiguration>;
  NextToken?: string;
}
export interface LaunchTemplate {
  LaunchTemplateSpecification?: LaunchTemplateSpecification;
  Overrides?: Array<LaunchTemplateOverrides>;
}
export type LaunchTemplateName = string;

export interface LaunchTemplateOverrides {
  InstanceType?: string;
  WeightedCapacity?: string;
  LaunchTemplateSpecification?: LaunchTemplateSpecification;
  InstanceRequirements?: InstanceRequirements;
}
export interface LaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export type LifecycleActionResult = string;

export type LifecycleActionToken = string;

export interface LifecycleHook {
  LifecycleHookName?: string;
  AutoScalingGroupName?: string;
  LifecycleTransition?: string;
  NotificationTargetARN?: string;
  RoleARN?: string;
  NotificationMetadata?: string;
  HeartbeatTimeout?: number;
  GlobalTimeout?: number;
  DefaultResult?: string;
}
export type LifecycleHookNames = Array<string>;
export type LifecycleHooks = Array<LifecycleHook>;
export interface LifecycleHookSpecification {
  LifecycleHookName: string;
  LifecycleTransition: string;
  NotificationMetadata?: string;
  HeartbeatTimeout?: number;
  DefaultResult?: string;
  NotificationTargetARN?: string;
  RoleARN?: string;
}
export type LifecycleHookSpecifications = Array<LifecycleHookSpecification>;
export type LifecycleState = "PENDING" | "PENDING_WAIT" | "PENDING_PROCEED" | "QUARANTINED" | "IN_SERVICE" | "TERMINATING" | "TERMINATING_WAIT" | "TERMINATING_PROCEED" | "TERMINATED" | "DETACHING" | "DETACHED" | "ENTERING_STANDBY" | "STANDBY" | "WARMED_PENDING" | "WARMED_PENDING_WAIT" | "WARMED_PENDING_PROCEED" | "WARMED_TERMINATING" | "WARMED_TERMINATING_WAIT" | "WARMED_TERMINATING_PROCEED" | "WARMED_TERMINATED" | "WARMED_STOPPED" | "WARMED_RUNNING" | "WARMED_HIBERNATED";
export type LifecycleTransition = string;

export declare class LimitExceededFault extends Data.TaggedError(
  "LimitExceededFault",
)<{
  readonly message?: string;
}> {}
export type LoadBalancerNames = Array<string>;
export interface LoadBalancerState {
  LoadBalancerName?: string;
  State?: string;
}
export type LoadBalancerStates = Array<LoadBalancerState>;
export interface LoadBalancerTargetGroupState {
  LoadBalancerTargetGroupARN?: string;
  State?: string;
}
export type LoadBalancerTargetGroupStates = Array<LoadBalancerTargetGroupState>;
export interface LoadForecast {
  Timestamps: Array<Date | string>;
  Values: Array<number>;
  MetricSpecification: PredictiveScalingMetricSpecification;
}
export type LoadForecasts = Array<LoadForecast>;
export type LocalStorage = "INCLUDED" | "EXCLUDED" | "REQUIRED";
export type LocalStorageType = "HDD" | "SSD";
export type LocalStorageTypes = Array<LocalStorageType>;
export type MaxGroupPreparedCapacity = number;

export type MaxInstanceLifetime = number;

export type MaxNumberOfAutoScalingGroups = number;

export type MaxNumberOfLaunchConfigurations = number;

export type MaxRecords = number;

export interface MemoryGiBPerVCpuRequest {
  Min?: number;
  Max?: number;
}
export interface MemoryMiBRequest {
  Min: number;
  Max?: number;
}
export interface Metric {
  Namespace: string;
  MetricName: string;
  Dimensions?: Array<MetricDimension>;
}
export interface MetricCollectionType {
  Metric?: string;
}
export type MetricCollectionTypes = Array<MetricCollectionType>;
export type MetricDataQueries = Array<MetricDataQuery>;
export interface MetricDataQuery {
  Id: string;
  Expression?: string;
  MetricStat?: MetricStat;
  Label?: string;
  ReturnData?: boolean;
}
export interface MetricDimension {
  Name: string;
  Value: string;
}
export type MetricDimensionName = string;

export type MetricDimensions = Array<MetricDimension>;
export type MetricDimensionValue = string;

export type MetricGranularityInSeconds = number;

export interface MetricGranularityType {
  Granularity?: string;
}
export type MetricGranularityTypes = Array<MetricGranularityType>;
export type MetricName = string;

export type MetricNamespace = string;

export type Metrics = Array<string>;
export type MetricScale = number;

export interface MetricStat {
  Metric: Metric;
  Stat: string;
  Unit?: string;
}
export type MetricStatistic = "Average" | "Minimum" | "Maximum" | "SampleCount" | "Sum";
export type MetricType = "ASGAverageCPUUtilization" | "ASGAverageNetworkIn" | "ASGAverageNetworkOut" | "ALBRequestCountPerTarget";
export type MetricUnit = string;

export type MinAdjustmentMagnitude = number;

export type MinAdjustmentStep = number;

export interface MixedInstancesPolicy {
  LaunchTemplate?: LaunchTemplate;
  InstancesDistribution?: InstancesDistribution;
}
export type MixedInstanceSpotPrice = string;

export type MonitoringEnabled = boolean;

export interface NetworkBandwidthGbpsRequest {
  Min?: number;
  Max?: number;
}
export interface NetworkInterfaceCountRequest {
  Min?: number;
  Max?: number;
}
export type NoDevice = boolean;

export type NonZeroIntPercent = number;

export interface NotificationConfiguration {
  AutoScalingGroupName?: string;
  TopicARN?: string;
  NotificationType?: string;
}
export type NotificationConfigurations = Array<NotificationConfiguration>;
export type NotificationTargetResourceName = string;

export type NullableBoolean = boolean;

export type NullablePositiveDouble = number;

export type NullablePositiveInteger = number;

export type NumberOfAutoScalingGroups = number;

export type NumberOfLaunchConfigurations = number;

export type OnDemandBaseCapacity = number;

export type OnDemandPercentageAboveBaseCapacity = number;

export type Overrides = Array<LaunchTemplateOverrides>;
export interface PerformanceFactorReferenceRequest {
  InstanceFamily?: string;
}
export type PerformanceFactorReferenceSetRequest = Array<PerformanceFactorReferenceRequest>;
export interface PoliciesType {
  ScalingPolicies?: Array<ScalingPolicy>;
  NextToken?: string;
}
export interface PolicyARNType {
  PolicyARN?: string;
  Alarms?: Array<Alarm>;
}
export type PolicyIncrement = number;

export type PolicyNames = Array<string>;
export type PolicyTypes = Array<string>;
export type PredefinedLoadMetricType = "ASGTotalCPUUtilization" | "ASGTotalNetworkIn" | "ASGTotalNetworkOut" | "ALBTargetGroupRequestCount";
export type PredefinedMetricPairType = "ASGCPUUtilization" | "ASGNetworkIn" | "ASGNetworkOut" | "ALBRequestCount";
export interface PredefinedMetricSpecification {
  PredefinedMetricType: MetricType;
  ResourceLabel?: string;
}
export type PredefinedScalingMetricType = "ASGAverageCPUUtilization" | "ASGAverageNetworkIn" | "ASGAverageNetworkOut" | "ALBRequestCountPerTarget";
export interface PredictiveScalingConfiguration {
  MetricSpecifications: Array<PredictiveScalingMetricSpecification>;
  Mode?: PredictiveScalingMode;
  SchedulingBufferTime?: number;
  MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior;
  MaxCapacityBuffer?: number;
}
export interface PredictiveScalingCustomizedCapacityMetric {
  MetricDataQueries: Array<MetricDataQuery>;
}
export interface PredictiveScalingCustomizedLoadMetric {
  MetricDataQueries: Array<MetricDataQuery>;
}
export interface PredictiveScalingCustomizedScalingMetric {
  MetricDataQueries: Array<MetricDataQuery>;
}
export type PredictiveScalingForecastTimestamps = Array<Date | string>;
export type PredictiveScalingForecastValues = Array<number>;
export type PredictiveScalingMaxCapacityBreachBehavior = "HonorMaxCapacity" | "IncreaseMaxCapacity";
export type PredictiveScalingMaxCapacityBuffer = number;

export interface PredictiveScalingMetricSpecification {
  TargetValue: number;
  PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair;
  PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric;
  PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric;
  CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric;
  CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric;
  CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric;
}
export type PredictiveScalingMetricSpecifications = Array<PredictiveScalingMetricSpecification>;
export type PredictiveScalingMode = "ForecastAndScale" | "ForecastOnly";
export interface PredictiveScalingPredefinedLoadMetric {
  PredefinedMetricType: PredefinedLoadMetricType;
  ResourceLabel?: string;
}
export interface PredictiveScalingPredefinedMetricPair {
  PredefinedMetricType: PredefinedMetricPairType;
  ResourceLabel?: string;
}
export interface PredictiveScalingPredefinedScalingMetric {
  PredefinedMetricType: PredefinedScalingMetricType;
  ResourceLabel?: string;
}
export type PredictiveScalingSchedulingBufferTime = number;

export type Processes = Array<ProcessType>;
export interface ProcessesType {
  Processes?: Array<ProcessType>;
}
export type ProcessNames = Array<string>;
export interface ProcessType {
  ProcessName: string;
}
export type Progress = number;

export type PropagateAtLaunch = boolean;

export type ProtectedFromScaleIn = boolean;

export interface PutLifecycleHookAnswer {
}
export interface PutLifecycleHookType {
  LifecycleHookName: string;
  AutoScalingGroupName: string;
  LifecycleTransition?: string;
  RoleARN?: string;
  NotificationTargetARN?: string;
  NotificationMetadata?: string;
  HeartbeatTimeout?: number;
  DefaultResult?: string;
}
export interface PutNotificationConfigurationType {
  AutoScalingGroupName: string;
  TopicARN: string;
  NotificationTypes: Array<string>;
}
export interface PutScalingPolicyType {
  AutoScalingGroupName: string;
  PolicyName: string;
  PolicyType?: string;
  AdjustmentType?: string;
  MinAdjustmentStep?: number;
  MinAdjustmentMagnitude?: number;
  ScalingAdjustment?: number;
  Cooldown?: number;
  MetricAggregationType?: string;
  StepAdjustments?: Array<StepAdjustment>;
  EstimatedInstanceWarmup?: number;
  TargetTrackingConfiguration?: TargetTrackingConfiguration;
  Enabled?: boolean;
  PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
}
export interface PutScheduledUpdateGroupActionType {
  AutoScalingGroupName: string;
  ScheduledActionName: string;
  Time?: Date | string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Recurrence?: string;
  MinSize?: number;
  MaxSize?: number;
  DesiredCapacity?: number;
  TimeZone?: string;
}
export interface PutWarmPoolAnswer {
}
export interface PutWarmPoolType {
  AutoScalingGroupName: string;
  MaxGroupPreparedCapacity?: number;
  MinSize?: number;
  PoolState?: WarmPoolState;
  InstanceReusePolicy?: InstanceReusePolicy;
}
export interface RecordLifecycleActionHeartbeatAnswer {
}
export interface RecordLifecycleActionHeartbeatType {
  LifecycleHookName: string;
  AutoScalingGroupName: string;
  LifecycleActionToken?: string;
  InstanceId?: string;
}
export type RefreshInstanceWarmup = number;

export interface RefreshPreferences {
  MinHealthyPercentage?: number;
  InstanceWarmup?: number;
  CheckpointPercentages?: Array<number>;
  CheckpointDelay?: number;
  SkipMatching?: boolean;
  AutoRollback?: boolean;
  ScaleInProtectedInstances?: ScaleInProtectedInstances;
  StandbyInstances?: StandbyInstances;
  AlarmSpecification?: AlarmSpecification;
  MaxHealthyPercentage?: number;
  BakeTime?: number;
}
export type RefreshStrategy = "Rolling";
export declare class ResourceContentionFault extends Data.TaggedError(
  "ResourceContentionFault",
)<{
  readonly message?: string;
}> {}
export declare class ResourceInUseFault extends Data.TaggedError(
  "ResourceInUseFault",
)<{
  readonly message?: string;
}> {}
export type ResourceName = string;

export type ReturnData = boolean;

export type ReuseOnScaleIn = boolean;

export interface RollbackDetails {
  RollbackReason?: string;
  RollbackStartTime?: Date | string;
  PercentageCompleteOnRollback?: number;
  InstancesToUpdateOnRollback?: number;
  ProgressDetailsOnRollback?: InstanceRefreshProgressDetails;
}
export interface RollbackInstanceRefreshAnswer {
  InstanceRefreshId?: string;
}
export interface RollbackInstanceRefreshType {
  AutoScalingGroupName: string;
}
export type ScaleInProtectedInstances = "Refresh" | "Ignore" | "Wait";
export declare class ScalingActivityInProgressFault extends Data.TaggedError(
  "ScalingActivityInProgressFault",
)<{
  readonly message?: string;
}> {}
export type ScalingActivityStatusCode = "PendingSpotBidPlacement" | "WaitingForSpotInstanceRequestId" | "WaitingForSpotInstanceId" | "WaitingForInstanceId" | "PreInService" | "InProgress" | "WaitingForELBConnectionDraining" | "MidLifecycleAction" | "WaitingForInstanceWarmup" | "Successful" | "Failed" | "Cancelled" | "WaitingForConnectionDraining";
export type ScalingPolicies = Array<ScalingPolicy>;
export interface ScalingPolicy {
  AutoScalingGroupName?: string;
  PolicyName?: string;
  PolicyARN?: string;
  PolicyType?: string;
  AdjustmentType?: string;
  MinAdjustmentStep?: number;
  MinAdjustmentMagnitude?: number;
  ScalingAdjustment?: number;
  Cooldown?: number;
  StepAdjustments?: Array<StepAdjustment>;
  MetricAggregationType?: string;
  EstimatedInstanceWarmup?: number;
  Alarms?: Array<Alarm>;
  TargetTrackingConfiguration?: TargetTrackingConfiguration;
  Enabled?: boolean;
  PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
}
export type ScalingPolicyEnabled = boolean;

export interface ScalingProcessQuery {
  AutoScalingGroupName: string;
  ScalingProcesses?: Array<string>;
}
export type ScheduledActionNames = Array<string>;
export interface ScheduledActionsType {
  ScheduledUpdateGroupActions?: Array<ScheduledUpdateGroupAction>;
  NextToken?: string;
}
export interface ScheduledUpdateGroupAction {
  AutoScalingGroupName?: string;
  ScheduledActionName?: string;
  ScheduledActionARN?: string;
  Time?: Date | string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Recurrence?: string;
  MinSize?: number;
  MaxSize?: number;
  DesiredCapacity?: number;
  TimeZone?: string;
}
export interface ScheduledUpdateGroupActionRequest {
  ScheduledActionName: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Recurrence?: string;
  MinSize?: number;
  MaxSize?: number;
  DesiredCapacity?: number;
  TimeZone?: string;
}
export type ScheduledUpdateGroupActionRequests = Array<ScheduledUpdateGroupActionRequest>;
export type ScheduledUpdateGroupActions = Array<ScheduledUpdateGroupAction>;
export type SecurityGroups = Array<string>;
export declare class ServiceLinkedRoleFailure extends Data.TaggedError(
  "ServiceLinkedRoleFailure",
)<{
  readonly message?: string;
}> {}
export interface SetDesiredCapacityType {
  AutoScalingGroupName: string;
  DesiredCapacity: number;
  HonorCooldown?: boolean;
}
export interface SetInstanceHealthQuery {
  InstanceId: string;
  HealthStatus: string;
  ShouldRespectGracePeriod?: boolean;
}
export interface SetInstanceProtectionAnswer {
}
export interface SetInstanceProtectionQuery {
  InstanceIds: Array<string>;
  AutoScalingGroupName: string;
  ProtectedFromScaleIn: boolean;
}
export type ShouldDecrementDesiredCapacity = boolean;

export type ShouldRespectGracePeriod = boolean;

export type SkipMatching = boolean;

export type SkipZonalShiftValidation = boolean;

export type SpotInstancePools = number;

export type SpotPrice = string;

export type StandbyInstances = "Terminate" | "Ignore" | "Wait";
export interface StartInstanceRefreshAnswer {
  InstanceRefreshId?: string;
}
export interface StartInstanceRefreshType {
  AutoScalingGroupName: string;
  Strategy?: RefreshStrategy;
  DesiredConfiguration?: DesiredConfiguration;
  Preferences?: RefreshPreferences;
}
export interface StepAdjustment {
  MetricIntervalLowerBound?: number;
  MetricIntervalUpperBound?: number;
  ScalingAdjustment: number;
}
export type StepAdjustments = Array<StepAdjustment>;
export interface SuspendedProcess {
  ProcessName?: string;
  SuspensionReason?: string;
}
export type SuspendedProcesses = Array<SuspendedProcess>;
export interface Tag {
  ResourceId?: string;
  ResourceType?: string;
  Key: string;
  Value?: string;
  PropagateAtLaunch?: boolean;
}
export interface TagDescription {
  ResourceId?: string;
  ResourceType?: string;
  Key?: string;
  Value?: string;
  PropagateAtLaunch?: boolean;
}
export type TagDescriptionList = Array<TagDescription>;
export type TagKey = string;

export type Tags = Array<Tag>;
export interface TagsType {
  Tags?: Array<TagDescription>;
  NextToken?: string;
}
export type TagValue = string;

export type TargetGroupARNs = Array<string>;
export interface TargetTrackingConfiguration {
  PredefinedMetricSpecification?: PredefinedMetricSpecification;
  CustomizedMetricSpecification?: CustomizedMetricSpecification;
  TargetValue: number;
  DisableScaleIn?: boolean;
}
export type TargetTrackingMetricDataQueries = Array<TargetTrackingMetricDataQuery>;
export interface TargetTrackingMetricDataQuery {
  Id: string;
  Expression?: string;
  MetricStat?: TargetTrackingMetricStat;
  Label?: string;
  Period?: number;
  ReturnData?: boolean;
}
export interface TargetTrackingMetricStat {
  Metric: Metric;
  Stat: string;
  Unit?: string;
  Period?: number;
}
export interface TerminateInstanceInAutoScalingGroupType {
  InstanceId: string;
  ShouldDecrementDesiredCapacity: boolean;
}
export type TerminationPolicies = Array<string>;
export type TimestampType = Date | string;

export interface TotalLocalStorageGBRequest {
  Min?: number;
  Max?: number;
}
export interface TrafficSourceIdentifier {
  Identifier: string;
  Type?: string;
}
export type TrafficSources = Array<TrafficSourceIdentifier>;
export interface TrafficSourceState {
  TrafficSource?: string;
  State?: string;
  Identifier?: string;
  Type?: string;
}
export type TrafficSourceStates = Array<TrafficSourceState>;
export interface UpdateAutoScalingGroupType {
  AutoScalingGroupName: string;
  LaunchConfigurationName?: string;
  LaunchTemplate?: LaunchTemplateSpecification;
  MixedInstancesPolicy?: MixedInstancesPolicy;
  MinSize?: number;
  MaxSize?: number;
  DesiredCapacity?: number;
  DefaultCooldown?: number;
  AvailabilityZones?: Array<string>;
  HealthCheckType?: string;
  HealthCheckGracePeriod?: number;
  PlacementGroup?: string;
  VPCZoneIdentifier?: string;
  TerminationPolicies?: Array<string>;
  NewInstancesProtectedFromScaleIn?: boolean;
  ServiceLinkedRoleARN?: string;
  MaxInstanceLifetime?: number;
  CapacityRebalance?: boolean;
  Context?: string;
  DesiredCapacityType?: string;
  DefaultInstanceWarmup?: number;
  InstanceMaintenancePolicy?: InstanceMaintenancePolicy;
  AvailabilityZoneDistribution?: AvailabilityZoneDistribution;
  AvailabilityZoneImpairmentPolicy?: AvailabilityZoneImpairmentPolicy;
  SkipZonalShiftValidation?: boolean;
  CapacityReservationSpecification?: CapacityReservationSpecification;
}
export type UpdatePlacementGroupParam = string;

export type Values = Array<string>;
export interface VCpuCountRequest {
  Min: number;
  Max?: number;
}
export interface WarmPoolConfiguration {
  MaxGroupPreparedCapacity?: number;
  MinSize?: number;
  PoolState?: WarmPoolState;
  Status?: WarmPoolStatus;
  InstanceReusePolicy?: InstanceReusePolicy;
}
export type WarmPoolMinSize = number;

export type WarmPoolSize = number;

export type WarmPoolState = "Stopped" | "Running" | "Hibernated";
export type WarmPoolStatus = "PendingDelete";
export type XmlString = string;

export type XmlStringMaxLen1023 = string;

export type XmlStringMaxLen1600 = string;

export type XmlStringMaxLen19 = string;

export type XmlStringMaxLen2047 = string;

export type XmlStringMaxLen255 = string;

export type XmlStringMaxLen32 = string;

export type XmlStringMaxLen5000 = string;

export type XmlStringMaxLen511 = string;

export type XmlStringMaxLen64 = string;

export type XmlStringMetricLabel = string;

export type XmlStringMetricStat = string;

export type XmlStringUserData = string;

export type ZonalShiftEnabled = boolean;

export declare namespace AttachInstances {
  export type Input = AttachInstancesQuery;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace AttachLoadBalancerTargetGroups {
  export type Input = AttachLoadBalancerTargetGroupsType;
  export type Output = AttachLoadBalancerTargetGroupsResultType;
  export type Error =
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace AttachLoadBalancers {
  export type Input = AttachLoadBalancersType;
  export type Output = AttachLoadBalancersResultType;
  export type Error =
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace AttachTrafficSources {
  export type Input = AttachTrafficSourcesType;
  export type Output = AttachTrafficSourcesResultType;
  export type Error =
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace BatchDeleteScheduledAction {
  export type Input = BatchDeleteScheduledActionType;
  export type Output = BatchDeleteScheduledActionAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace BatchPutScheduledUpdateGroupAction {
  export type Input = BatchPutScheduledUpdateGroupActionType;
  export type Output = BatchPutScheduledUpdateGroupActionAnswer;
  export type Error =
    | AlreadyExistsFault
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace CancelInstanceRefresh {
  export type Input = CancelInstanceRefreshType;
  export type Output = CancelInstanceRefreshAnswer;
  export type Error =
    | ActiveInstanceRefreshNotFoundFault
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace CompleteLifecycleAction {
  export type Input = CompleteLifecycleActionType;
  export type Output = CompleteLifecycleActionAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace CreateAutoScalingGroup {
  export type Input = CreateAutoScalingGroupType;
  export type Output = {};
  export type Error =
    | AlreadyExistsFault
    | LimitExceededFault
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace CreateLaunchConfiguration {
  export type Input = CreateLaunchConfigurationType;
  export type Output = {};
  export type Error =
    | AlreadyExistsFault
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace CreateOrUpdateTags {
  export type Input = CreateOrUpdateTagsType;
  export type Output = {};
  export type Error =
    | AlreadyExistsFault
    | LimitExceededFault
    | ResourceContentionFault
    | ResourceInUseFault
    | CommonAwsError;
}

export declare namespace DeleteAutoScalingGroup {
  export type Input = DeleteAutoScalingGroupType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ResourceInUseFault
    | ScalingActivityInProgressFault
    | CommonAwsError;
}

export declare namespace DeleteLaunchConfiguration {
  export type Input = LaunchConfigurationNameType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ResourceInUseFault
    | CommonAwsError;
}

export declare namespace DeleteLifecycleHook {
  export type Input = DeleteLifecycleHookType;
  export type Output = DeleteLifecycleHookAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DeleteNotificationConfiguration {
  export type Input = DeleteNotificationConfigurationType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace DeleteScheduledAction {
  export type Input = DeleteScheduledActionType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ResourceInUseFault
    | CommonAwsError;
}

export declare namespace DeleteWarmPool {
  export type Input = DeleteWarmPoolType;
  export type Output = DeleteWarmPoolAnswer;
  export type Error =
    | LimitExceededFault
    | ResourceContentionFault
    | ResourceInUseFault
    | ScalingActivityInProgressFault
    | CommonAwsError;
}

export declare namespace DescribeAccountLimits {
  export type Input = {};
  export type Output = DescribeAccountLimitsAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeAdjustmentTypes {
  export type Input = {};
  export type Output = DescribeAdjustmentTypesAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeAutoScalingGroups {
  export type Input = AutoScalingGroupNamesType;
  export type Output = AutoScalingGroupsType;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeAutoScalingInstances {
  export type Input = DescribeAutoScalingInstancesType;
  export type Output = AutoScalingInstancesType;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeAutoScalingNotificationTypes {
  export type Input = {};
  export type Output = DescribeAutoScalingNotificationTypesAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeInstanceRefreshes {
  export type Input = DescribeInstanceRefreshesType;
  export type Output = DescribeInstanceRefreshesAnswer;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeLaunchConfigurations {
  export type Input = LaunchConfigurationNamesType;
  export type Output = LaunchConfigurationsType;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeLifecycleHookTypes {
  export type Input = {};
  export type Output = DescribeLifecycleHookTypesAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeLifecycleHooks {
  export type Input = DescribeLifecycleHooksType;
  export type Output = DescribeLifecycleHooksAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeLoadBalancerTargetGroups {
  export type Input = DescribeLoadBalancerTargetGroupsRequest;
  export type Output = DescribeLoadBalancerTargetGroupsResponse;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeLoadBalancers {
  export type Input = DescribeLoadBalancersRequest;
  export type Output = DescribeLoadBalancersResponse;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeMetricCollectionTypes {
  export type Input = {};
  export type Output = DescribeMetricCollectionTypesAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeNotificationConfigurations {
  export type Input = DescribeNotificationConfigurationsType;
  export type Output = DescribeNotificationConfigurationsAnswer;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribePolicies {
  export type Input = DescribePoliciesType;
  export type Output = PoliciesType;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace DescribeScalingActivities {
  export type Input = DescribeScalingActivitiesType;
  export type Output = ActivitiesType;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeScalingProcessTypes {
  export type Input = {};
  export type Output = ProcessesType;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeScheduledActions {
  export type Input = DescribeScheduledActionsType;
  export type Output = ScheduledActionsType;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsType;
  export type Output = TagsType;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeTerminationPolicyTypes {
  export type Input = {};
  export type Output = DescribeTerminationPolicyTypesAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeTrafficSources {
  export type Input = DescribeTrafficSourcesRequest;
  export type Output = DescribeTrafficSourcesResponse;
  export type Error =
    | InvalidNextToken
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DescribeWarmPool {
  export type Input = DescribeWarmPoolType;
  export type Output = DescribeWarmPoolAnswer;
  export type Error =
    | InvalidNextToken
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DetachInstances {
  export type Input = DetachInstancesQuery;
  export type Output = DetachInstancesAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DetachLoadBalancerTargetGroups {
  export type Input = DetachLoadBalancerTargetGroupsType;
  export type Output = DetachLoadBalancerTargetGroupsResultType;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DetachLoadBalancers {
  export type Input = DetachLoadBalancersType;
  export type Output = DetachLoadBalancersResultType;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DetachTrafficSources {
  export type Input = DetachTrafficSourcesType;
  export type Output = DetachTrafficSourcesResultType;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace DisableMetricsCollection {
  export type Input = DisableMetricsCollectionQuery;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace EnableMetricsCollection {
  export type Input = EnableMetricsCollectionQuery;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace EnterStandby {
  export type Input = EnterStandbyQuery;
  export type Output = EnterStandbyAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace ExecutePolicy {
  export type Input = ExecutePolicyType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ScalingActivityInProgressFault
    | CommonAwsError;
}

export declare namespace ExitStandby {
  export type Input = ExitStandbyQuery;
  export type Output = ExitStandbyAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace GetPredictiveScalingForecast {
  export type Input = GetPredictiveScalingForecastType;
  export type Output = GetPredictiveScalingForecastAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace PutLifecycleHook {
  export type Input = PutLifecycleHookType;
  export type Output = PutLifecycleHookAnswer;
  export type Error =
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace PutNotificationConfiguration {
  export type Input = PutNotificationConfigurationType;
  export type Output = {};
  export type Error =
    | LimitExceededFault
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace PutScalingPolicy {
  export type Input = PutScalingPolicyType;
  export type Output = PolicyARNType;
  export type Error =
    | LimitExceededFault
    | ResourceContentionFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

export declare namespace PutScheduledUpdateGroupAction {
  export type Input = PutScheduledUpdateGroupActionType;
  export type Output = {};
  export type Error =
    | AlreadyExistsFault
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace PutWarmPool {
  export type Input = PutWarmPoolType;
  export type Output = PutWarmPoolAnswer;
  export type Error =
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace RecordLifecycleActionHeartbeat {
  export type Input = RecordLifecycleActionHeartbeatType;
  export type Output = RecordLifecycleActionHeartbeatAnswer;
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace ResumeProcesses {
  export type Input = ScalingProcessQuery;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ResourceInUseFault
    | CommonAwsError;
}

export declare namespace RollbackInstanceRefresh {
  export type Input = RollbackInstanceRefreshType;
  export type Output = RollbackInstanceRefreshAnswer;
  export type Error =
    | ActiveInstanceRefreshNotFoundFault
    | IrreversibleInstanceRefreshFault
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace SetDesiredCapacity {
  export type Input = SetDesiredCapacityType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ScalingActivityInProgressFault
    | CommonAwsError;
}

export declare namespace SetInstanceHealth {
  export type Input = SetInstanceHealthQuery;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace SetInstanceProtection {
  export type Input = SetInstanceProtectionQuery;
  export type Output = SetInstanceProtectionAnswer;
  export type Error =
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace StartInstanceRefresh {
  export type Input = StartInstanceRefreshType;
  export type Output = StartInstanceRefreshAnswer;
  export type Error =
    | InstanceRefreshInProgressFault
    | LimitExceededFault
    | ResourceContentionFault
    | CommonAwsError;
}

export declare namespace SuspendProcesses {
  export type Input = ScalingProcessQuery;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ResourceInUseFault
    | CommonAwsError;
}

export declare namespace TerminateInstanceInAutoScalingGroup {
  export type Input = TerminateInstanceInAutoScalingGroupType;
  export type Output = ActivityType;
  export type Error =
    | ResourceContentionFault
    | ScalingActivityInProgressFault
    | CommonAwsError;
}

export declare namespace UpdateAutoScalingGroup {
  export type Input = UpdateAutoScalingGroupType;
  export type Output = {};
  export type Error =
    | ResourceContentionFault
    | ScalingActivityInProgressFault
    | ServiceLinkedRoleFailure
    | CommonAwsError;
}

