import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://ecs.amazonaws.com/doc/2014-11-13/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "ECS",
  serviceShapeName: "AmazonEC2ContainerServiceV20141113",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ecs" });
const ver = /*@__PURE__*/ T.ServiceVersion("2014-11-13");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://ecs-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://ecs-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://ecs.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://ecs.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class AttributeLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<AttributeLimitExceededException>()(
    "AttributeLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withQuotaError) {}
export class BlockedException
  extends /*@__PURE__*/ S.TaggedError<BlockedException>()("BlockedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class ClientException
  extends /*@__PURE__*/ S.TaggedError<ClientException>()("ClientException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class ClusterContainsCapacityProviderException
  extends /*@__PURE__*/ S.TaggedError<ClusterContainsCapacityProviderException>()(
    "ClusterContainsCapacityProviderException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withDependencyViolationError) {}
export class ClusterContainsContainerInstancesException
  extends /*@__PURE__*/ S.TaggedError<ClusterContainsContainerInstancesException>()(
    "ClusterContainsContainerInstancesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withDependencyViolationError) {}
export class ClusterContainsServicesException
  extends /*@__PURE__*/ S.TaggedError<ClusterContainsServicesException>()(
    "ClusterContainsServicesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withDependencyViolationError) {}
export class ClusterContainsTasksException
  extends /*@__PURE__*/ S.TaggedError<ClusterContainsTasksException>()(
    "ClusterContainsTasksException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withDependencyViolationError) {}
export class ClusterNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ClusterNotFoundException>()("ClusterNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    resourceIds: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => __S(4, __c0, 4)).annotate({ identifier: "ResourceIds" }),
    ),
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError) {}
export class DaemonNotActiveException
  extends /*@__PURE__*/ S.TaggedError<DaemonNotActiveException>()("DaemonNotActiveException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError) {}
export class DaemonNotFoundException
  extends /*@__PURE__*/ S.TaggedError<DaemonNotFoundException>()("DaemonNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withQuotaError) {}
export class MissingVersionException
  extends /*@__PURE__*/ S.TaggedError<MissingVersionException>()("MissingVersionException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class NamespaceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<NamespaceNotFoundException>()("NamespaceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class NoUpdateAvailableException
  extends /*@__PURE__*/ S.TaggedError<NoUpdateAvailableException>()("NoUpdateAvailableException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class PlatformTaskDefinitionIncompatibilityException
  extends /*@__PURE__*/ S.TaggedError<PlatformTaskDefinitionIncompatibilityException>()(
    "PlatformTaskDefinitionIncompatibilityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withBadRequestError) {}
export class PlatformUnknownException
  extends /*@__PURE__*/ S.TaggedError<PlatformUnknownException>()("PlatformUnknownException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()("ResourceInUseException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class ServerException
  extends /*@__PURE__*/ S.TaggedError<ServerException>()("ServerException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError, C.withRetryableError) {}
export class ServiceDeploymentNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ServiceDeploymentNotFoundException>()(
    "ServiceDeploymentNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withNotFoundError) {}
export class ServiceNotActiveException
  extends /*@__PURE__*/ S.TaggedError<ServiceNotActiveException>()("ServiceNotActiveException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError) {}
export class ServiceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ServiceNotFoundException>()("ServiceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class TargetNotConnectedException
  extends /*@__PURE__*/ S.TaggedError<TargetNotConnectedException>()(
    "TargetNotConnectedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withConflictError) {}
export class TargetNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TargetNotFoundException>()("TargetNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class TaskSetNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TaskSetNotFoundException>()("TaskSetNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class UnsupportedFeatureException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedFeatureException>()(
    "UnsupportedFeatureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withBadRequestError) {}
export class UpdateInProgressException
  extends /*@__PURE__*/ S.TaggedError<UpdateInProgressException>()("UpdateInProgressException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError, C.withRetryableError) {}
export type DeploymentLifecycleHookAction = "ROLLBACK" | "CONTINUE" | (string & {});
export interface ContinueServiceDeploymentRequest {
  serviceDeploymentArn: string;
  hookId: string;
  action?: DeploymentLifecycleHookAction;
}
export interface ContinueServiceDeploymentResponse {
  serviceDeploymentArn?: string;
}
export type ManagedScalingStatus = "ENABLED" | "DISABLED" | (string & {});
export type ManagedScalingTargetCapacity = number;
export type ManagedScalingStepSize = number;
export type ManagedScalingInstanceWarmupPeriod = number;
export interface ManagedScaling {
  status?: ManagedScalingStatus;
  targetCapacity?: number;
  minimumScalingStepSize?: number;
  maximumScalingStepSize?: number;
  instanceWarmupPeriod?: number;
}
export type ManagedTerminationProtection = "ENABLED" | "DISABLED" | (string & {});
export type ManagedDraining = "ENABLED" | "DISABLED" | (string & {});
export interface AutoScalingGroupProvider {
  autoScalingGroupArn: string;
  managedScaling?: ManagedScaling;
  managedTerminationProtection?: ManagedTerminationProtection;
  managedDraining?: ManagedDraining;
}
export type StringList = string[];
export interface ManagedInstancesNetworkConfiguration {
  subnets?: string[];
  securityGroups?: string[];
}
export type TaskVolumeStorageGiB = number;
export interface ManagedInstancesStorageConfiguration {
  storageSizeGiB?: number;
}
export interface ManagedInstancesLocalStorageConfiguration {
  useLocalStorage?: boolean;
}
export type ManagedInstancesMonitoringOptions = "BASIC" | "DETAILED" | (string & {});
export type CapacityOptionType = "ON_DEMAND" | "SPOT" | "RESERVED" | (string & {});
export type BoxedBoolean = boolean;
export type BoxedInteger = number;
export interface VCpuCountRangeRequest {
  min: number;
  max?: number;
}
export interface MemoryMiBRequest {
  min: number;
  max?: number;
}
export type CpuManufacturer = "intel" | "amd" | "amazon-web-services" | (string & {});
export type CpuManufacturerSet = CpuManufacturer[];
export type BoxedDouble = number;
export interface MemoryGiBPerVCpuRequest {
  min?: number;
  max?: number;
}
export type ExcludedInstanceType = string;
export type ExcludedInstanceTypeSet = string[];
export type InstanceGeneration = "current" | "previous" | (string & {});
export type InstanceGenerationSet = InstanceGeneration[];
export type BareMetal = "included" | "required" | "excluded" | (string & {});
export type BurstablePerformance = "included" | "required" | "excluded" | (string & {});
export interface NetworkInterfaceCountRequest {
  min?: number;
  max?: number;
}
export type LocalStorage = "included" | "required" | "excluded" | (string & {});
export type LocalStorageType = "hdd" | "ssd" | (string & {});
export type LocalStorageTypeSet = LocalStorageType[];
export interface TotalLocalStorageGBRequest {
  min?: number;
  max?: number;
}
export interface BaselineEbsBandwidthMbpsRequest {
  min?: number;
  max?: number;
}
export type AcceleratorType = "gpu" | "fpga" | "inference" | (string & {});
export type AcceleratorTypeSet = AcceleratorType[];
export interface AcceleratorCountRequest {
  min?: number;
  max?: number;
}
export type AcceleratorManufacturer =
  | "amazon-web-services"
  | "amd"
  | "nvidia"
  | "xilinx"
  | "habana"
  | (string & {});
export type AcceleratorManufacturerSet = AcceleratorManufacturer[];
export type AcceleratorName =
  | "a100"
  | "inferentia"
  | "k520"
  | "k80"
  | "m60"
  | "radeon-pro-v520"
  | "t4"
  | "vu9p"
  | "v100"
  | "a10g"
  | "h100"
  | "t4g"
  | (string & {});
export type AcceleratorNameSet = AcceleratorName[];
export interface AcceleratorTotalMemoryMiBRequest {
  min?: number;
  max?: number;
}
export interface NetworkBandwidthGbpsRequest {
  min?: number;
  max?: number;
}
export type AllowedInstanceType = string;
export type AllowedInstanceTypeSet = string[];
export interface InstanceRequirementsRequest {
  vCpuCount: VCpuCountRangeRequest;
  memoryMiB: MemoryMiBRequest;
  cpuManufacturers?: CpuManufacturer[];
  memoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  excludedInstanceTypes?: string[];
  instanceGenerations?: InstanceGeneration[];
  spotMaxPricePercentageOverLowestPrice?: number;
  onDemandMaxPricePercentageOverLowestPrice?: number;
  bareMetal?: BareMetal;
  burstablePerformance?: BurstablePerformance;
  requireHibernateSupport?: boolean;
  networkInterfaceCount?: NetworkInterfaceCountRequest;
  localStorage?: LocalStorage;
  localStorageTypes?: LocalStorageType[];
  totalLocalStorageGB?: TotalLocalStorageGBRequest;
  baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
  acceleratorTypes?: AcceleratorType[];
  acceleratorCount?: AcceleratorCountRequest;
  acceleratorManufacturers?: AcceleratorManufacturer[];
  acceleratorNames?: AcceleratorName[];
  acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
  networkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  allowedInstanceTypes?: string[];
  maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
}
export type CapacityReservationPreference =
  | "RESERVATIONS_ONLY"
  | "RESERVATIONS_FIRST"
  | "RESERVATIONS_EXCLUDED"
  | (string & {});
export interface CapacityReservationRequest {
  reservationGroupArn?: string;
  reservationPreference?: CapacityReservationPreference;
}
export interface InstanceLaunchTemplate {
  ec2InstanceProfileArn: string;
  networkConfiguration: ManagedInstancesNetworkConfiguration;
  storageConfiguration?: ManagedInstancesStorageConfiguration;
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration;
  monitoring?: ManagedInstancesMonitoringOptions;
  capacityOptionType?: CapacityOptionType;
  instanceMetadataTagsPropagation?: boolean;
  instanceRequirements?: InstanceRequirementsRequest;
  fipsEnabled?: boolean;
  capacityReservations?: CapacityReservationRequest;
}
export type PropagateMITags = "CAPACITY_PROVIDER" | "NONE" | (string & {});
export interface InfrastructureOptimization {
  scaleInAfter?: number;
}
export type AutoRepairActionsStatus = "ENABLED" | "DISABLED" | (string & {});
export interface AutoRepairConfiguration {
  actionsStatus?: AutoRepairActionsStatus;
}
export interface CreateManagedInstancesProviderConfiguration {
  infrastructureRoleArn: string;
  instanceLaunchTemplate: InstanceLaunchTemplate;
  propagateTags?: PropagateMITags;
  infrastructureOptimization?: InfrastructureOptimization;
  autoRepairConfiguration?: AutoRepairConfiguration;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key?: string;
  value?: string;
}
export type Tags = Tag[];
export interface CreateCapacityProviderRequest {
  name: string;
  cluster?: string;
  autoScalingGroupProvider?: AutoScalingGroupProvider;
  managedInstancesProvider?: CreateManagedInstancesProviderConfiguration;
  tags?: Tag[];
}
export type CapacityProviderStatus =
  | "PROVISIONING"
  | "ACTIVE"
  | "DEPROVISIONING"
  | "INACTIVE"
  | (string & {});
export interface ManagedInstancesProvider {
  infrastructureRoleArn?: string;
  instanceLaunchTemplate?: InstanceLaunchTemplate;
  propagateTags?: PropagateMITags;
  infrastructureOptimization?: InfrastructureOptimization;
  autoRepairConfiguration?: AutoRepairConfiguration;
}
export type CapacityProviderUpdateStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED"
  | (string & {});
export type CapacityProviderType =
  | "EC2_AUTOSCALING"
  | "MANAGED_INSTANCES"
  | "FARGATE"
  | "FARGATE_SPOT"
  | (string & {});
export interface CapacityProvider {
  capacityProviderArn?: string;
  name?: string;
  cluster?: string;
  status?: CapacityProviderStatus;
  autoScalingGroupProvider?: AutoScalingGroupProvider;
  managedInstancesProvider?: ManagedInstancesProvider;
  updateStatus?: CapacityProviderUpdateStatus;
  updateStatusReason?: string;
  tags?: Tag[];
  type?: CapacityProviderType;
}
export interface CreateCapacityProviderResponse {
  capacityProvider?: CapacityProvider;
}
export type ClusterSettingName = "containerInsights" | (string & {});
export interface ClusterSetting {
  name?: ClusterSettingName;
  value?: string;
}
export type ClusterSettings = ClusterSetting[];
export type ExecuteCommandLogging = "NONE" | "DEFAULT" | "OVERRIDE" | (string & {});
export interface ExecuteCommandLogConfiguration {
  cloudWatchLogGroupName?: string;
  cloudWatchEncryptionEnabled?: boolean;
  s3BucketName?: string;
  s3EncryptionEnabled?: boolean;
  s3KeyPrefix?: string;
}
export interface ExecuteCommandConfiguration {
  kmsKeyId?: string;
  logging?: ExecuteCommandLogging;
  logConfiguration?: ExecuteCommandLogConfiguration;
}
export interface ManagedStorageConfiguration {
  kmsKeyId?: string;
  fargateEphemeralStorageKmsKeyId?: string;
}
export interface ClusterConfiguration {
  executeCommandConfiguration?: ExecuteCommandConfiguration;
  managedStorageConfiguration?: ManagedStorageConfiguration;
}
export type CapacityProviderStrategyItemWeight = number;
export type CapacityProviderStrategyItemBase = number;
export interface CapacityProviderStrategyItem {
  capacityProvider: string;
  weight?: number;
  base?: number;
}
export type CapacityProviderStrategy = CapacityProviderStrategyItem[];
export interface ClusterServiceConnectDefaultsRequest {
  namespace: string;
}
export interface CreateClusterRequest {
  clusterName?: string;
  tags?: Tag[];
  settings?: ClusterSetting[];
  configuration?: ClusterConfiguration;
  capacityProviders?: string[];
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
}
export interface KeyValuePair {
  name?: string;
  value?: string;
}
export type Statistics = KeyValuePair[];
export type AttachmentDetails = KeyValuePair[];
export interface Attachment {
  id?: string;
  type?: string;
  status?: string;
  details?: KeyValuePair[];
}
export type Attachments = Attachment[];
export interface ClusterServiceConnectDefaults {
  namespace?: string;
}
export interface Cluster {
  clusterArn?: string;
  clusterName?: string;
  configuration?: ClusterConfiguration;
  status?: string;
  registeredContainerInstancesCount?: number;
  runningTasksCount?: number;
  pendingTasksCount?: number;
  activeServicesCount?: number;
  statistics?: KeyValuePair[];
  tags?: Tag[];
  settings?: ClusterSetting[];
  capacityProviders?: string[];
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];
  attachments?: Attachment[];
  attachmentsStatus?: string;
  serviceConnectDefaults?: ClusterServiceConnectDefaults;
}
export interface CreateClusterResponse {
  cluster?: Cluster;
}
export type DaemonDrainPercent = number;
export interface DaemonAlarmConfiguration {
  alarmNames?: string[];
  enable?: boolean;
}
export interface DaemonDeploymentConfiguration {
  drainPercent?: number;
  alarms?: DaemonAlarmConfiguration;
  bakeTimeInMinutes?: number;
}
export type DaemonPropagateTags = "DAEMON" | "NONE" | (string & {});
export interface CreateDaemonRequest {
  daemonName: string;
  clusterArn?: string;
  daemonTaskDefinitionArn: string;
  capacityProviderArns: string[];
  deploymentConfiguration?: DaemonDeploymentConfiguration;
  tags?: Tag[];
  propagateTags?: DaemonPropagateTags;
  enableECSManagedTags?: boolean;
  enableExecuteCommand?: boolean;
  clientToken?: string;
  critical?: boolean;
}
export type DaemonStatus = "ACTIVE" | "DELETE_IN_PROGRESS" | (string & {});
export interface CreateDaemonResponse {
  daemonArn?: string;
  status?: DaemonStatus;
  createdAt?: Date;
  deploymentArn?: string;
}
export interface ExpressGatewayServiceAwsLogsConfiguration {
  logGroup: string;
  logStreamPrefix: string;
}
export interface ExpressGatewayRepositoryCredentials {
  credentialsParameter?: string;
}
export type EnvironmentVariables = KeyValuePair[];
export interface Secret {
  name: string;
  valueFrom: string;
}
export type SecretList = Secret[];
export interface ExpressGatewayContainer {
  image: string;
  containerPort?: number;
  awsLogsConfiguration?: ExpressGatewayServiceAwsLogsConfiguration;
  repositoryCredentials?: ExpressGatewayRepositoryCredentials;
  command?: string[];
  environment?: KeyValuePair[];
  secrets?: Secret[];
}
export interface ExpressGatewayServiceNetworkConfiguration {
  securityGroups?: string[];
  subnets?: string[];
}
export type ExpressCpuArchitecture = "X86_64" | "ARM64" | (string & {});
export type ExpressGatewayServiceScalingMetric =
  | "AVERAGE_CPU"
  | "AVERAGE_MEMORY"
  | "REQUEST_COUNT_PER_TARGET"
  | (string & {});
export interface ExpressGatewayScalingTarget {
  minTaskCount?: number;
  maxTaskCount?: number;
  autoScalingMetric?: ExpressGatewayServiceScalingMetric;
  autoScalingTargetValue?: number;
}
export interface CreateExpressGatewayServiceRequest {
  executionRoleArn?: string;
  infrastructureRoleArn: string;
  serviceName?: string;
  cluster?: string;
  healthCheckPath?: string;
  primaryContainer?: ExpressGatewayContainer;
  taskRoleArn?: string;
  networkConfiguration?: ExpressGatewayServiceNetworkConfiguration;
  cpu?: string;
  memory?: string;
  cpuArchitecture?: ExpressCpuArchitecture;
  scalingTarget?: ExpressGatewayScalingTarget;
  tags?: Tag[];
  taskDefinitionArn?: string;
}
export type ExpressGatewayServiceStatusCode = "ACTIVE" | "DRAINING" | "INACTIVE" | (string & {});
export interface ExpressGatewayServiceStatus {
  statusCode?: ExpressGatewayServiceStatusCode;
  statusReason?: string;
}
export type AccessType = "PUBLIC" | "PRIVATE" | (string & {});
export interface IngressPathSummary {
  accessType: AccessType;
  endpoint: string;
}
export type IngressPathSummaries = IngressPathSummary[];
export interface ExpressGatewayServiceConfiguration {
  serviceRevisionArn?: string;
  executionRoleArn?: string;
  taskRoleArn?: string;
  taskDefinitionArn?: string;
  cpu?: string;
  memory?: string;
  cpuArchitecture?: ExpressCpuArchitecture;
  networkConfiguration?: ExpressGatewayServiceNetworkConfiguration;
  healthCheckPath?: string;
  primaryContainer?: ExpressGatewayContainer;
  scalingTarget?: ExpressGatewayScalingTarget;
  ingressPaths?: IngressPathSummary[];
  createdAt?: Date;
}
export type ExpressGatewayServiceConfigurations = ExpressGatewayServiceConfiguration[];
export interface ECSExpressGatewayService {
  cluster?: string;
  serviceName?: string;
  serviceArn?: string;
  infrastructureRoleArn?: string;
  status?: ExpressGatewayServiceStatus;
  currentDeployment?: string;
  activeConfigurations?: ExpressGatewayServiceConfiguration[];
  tags?: Tag[];
  createdAt?: Date;
  updatedAt?: Date;
}
export interface CreateExpressGatewayServiceResponse {
  service?: ECSExpressGatewayService;
}
export type AvailabilityZoneRebalancing = "ENABLED" | "DISABLED" | (string & {});
export interface AdvancedConfiguration {
  alternateTargetGroupArn?: string;
  productionListenerRule?: string;
  testListenerRule?: string;
  roleArn?: string;
}
export interface LoadBalancer {
  targetGroupArn?: string;
  loadBalancerName?: string;
  containerName?: string;
  containerPort?: number;
  advancedConfiguration?: AdvancedConfiguration;
}
export type LoadBalancers = LoadBalancer[];
export interface ServiceRegistry {
  registryArn?: string;
  port?: number;
  containerName?: string;
  containerPort?: number;
}
export type ServiceRegistries = ServiceRegistry[];
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL" | "MANAGED_INSTANCES" | (string & {});
export type ThresholdType = "COUNT" | "BOUNDED_PERCENT" | "UNBOUNDED_PERCENT" | (string & {});
export interface ThresholdConfiguration {
  type: ThresholdType;
  value: number;
}
export interface DeploymentCircuitBreaker {
  enable: boolean;
  rollback: boolean;
  resetOnHealthyTask?: boolean;
  thresholdConfiguration?: ThresholdConfiguration;
}
export interface DeploymentAlarms {
  alarmNames: string[];
  rollback: boolean;
  enable: boolean;
}
export type DeploymentStrategy = "ROLLING" | "BLUE_GREEN" | "LINEAR" | "CANARY" | (string & {});
export type DeploymentLifecycleHookTargetType = "AWS_LAMBDA" | "PAUSE" | (string & {});
export type IAMRoleArn = string;
export type DeploymentLifecycleHookStage =
  | "RECONCILE_SERVICE"
  | "PRE_SCALE_UP"
  | "POST_SCALE_UP"
  | "TEST_TRAFFIC_SHIFT"
  | "POST_TEST_TRAFFIC_SHIFT"
  | "PRE_PRODUCTION_TRAFFIC_SHIFT"
  | "PRODUCTION_TRAFFIC_SHIFT"
  | "POST_PRODUCTION_TRAFFIC_SHIFT"
  | (string & {});
export type DeploymentLifecycleHookStageList = DeploymentLifecycleHookStage[];
export type HookDetails = unknown;
export type DeploymentLifecycleHookDuration = number;
export interface DeploymentLifecycleHookTimeoutConfiguration {
  timeoutInMinutes?: number;
  action?: DeploymentLifecycleHookAction;
}
export interface DeploymentLifecycleHook {
  targetType?: DeploymentLifecycleHookTargetType;
  hookTargetArn?: string;
  roleArn?: string;
  lifecycleStages?: DeploymentLifecycleHookStage[];
  hookDetails?: any;
  timeoutConfiguration?: DeploymentLifecycleHookTimeoutConfiguration;
}
export type DeploymentLifecycleHookList = DeploymentLifecycleHook[];
export interface LinearConfiguration {
  stepPercent?: number;
  stepBakeTimeInMinutes?: number;
}
export interface CanaryConfiguration {
  canaryPercent?: number;
  canaryBakeTimeInMinutes?: number;
}
export type HealthyPercentInteger = number;
export type ServiceRevisionCleanup = "BLOCKING" | "DEFERRED" | (string & {});
export interface DeploymentEarlySuccessCriteria {
  enable: boolean;
  healthyPercent?: number;
  sourceServiceRevisionCleanup?: ServiceRevisionCleanup;
}
export interface DeploymentConfiguration {
  deploymentCircuitBreaker?: DeploymentCircuitBreaker;
  maximumPercent?: number;
  minimumHealthyPercent?: number;
  alarms?: DeploymentAlarms;
  strategy?: DeploymentStrategy;
  bakeTimeInMinutes?: number;
  lifecycleHooks?: DeploymentLifecycleHook[];
  linearConfiguration?: LinearConfiguration;
  canaryConfiguration?: CanaryConfiguration;
  earlySuccessCriteria?: DeploymentEarlySuccessCriteria;
}
export type PlacementConstraintType = "distinctInstance" | "memberOf" | (string & {});
export interface PlacementConstraint {
  type?: PlacementConstraintType;
  expression?: string;
}
export type PlacementConstraints = PlacementConstraint[];
export type PlacementStrategyType = "random" | "spread" | "binpack" | (string & {});
export interface PlacementStrategy {
  type?: PlacementStrategyType;
  field?: string;
}
export type PlacementStrategies = PlacementStrategy[];
export type AssignPublicIp = "ENABLED" | "DISABLED" | (string & {});
export interface AwsVpcConfiguration {
  subnets: string[];
  securityGroups?: string[];
  assignPublicIp?: AssignPublicIp;
}
export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
export type SchedulingStrategy = "REPLICA" | "DAEMON" | (string & {});
export type DeploymentControllerType = "ECS" | "CODE_DEPLOY" | "EXTERNAL" | (string & {});
export interface DeploymentController {
  type: DeploymentControllerType;
}
export type PropagateTags = "TASK_DEFINITION" | "SERVICE" | "NONE" | (string & {});
export type PortNumber = number;
export interface ServiceConnectTestTrafficHeaderMatchRules {
  exact: string;
}
export interface ServiceConnectTestTrafficHeaderRules {
  name: string;
  value?: ServiceConnectTestTrafficHeaderMatchRules;
}
export interface ServiceConnectTestTrafficRules {
  header: ServiceConnectTestTrafficHeaderRules;
}
export interface ServiceConnectClientAlias {
  port: number;
  dnsName?: string;
  testTrafficRules?: ServiceConnectTestTrafficRules;
}
export type ServiceConnectClientAliasList = ServiceConnectClientAlias[];
export type Duration = number;
export interface TimeoutConfiguration {
  idleTimeoutSeconds?: number;
  perRequestTimeoutSeconds?: number;
}
export interface ServiceConnectTlsCertificateAuthority {
  awsPcaAuthorityArn?: string;
}
export interface ServiceConnectTlsConfiguration {
  issuerCertificateAuthority: ServiceConnectTlsCertificateAuthority;
  kmsKey?: string;
  roleArn?: string;
}
export interface ServiceConnectService {
  portName: string;
  discoveryName?: string;
  clientAliases?: ServiceConnectClientAlias[];
  ingressPortOverride?: number;
  timeout?: TimeoutConfiguration;
  tls?: ServiceConnectTlsConfiguration;
}
export type ServiceConnectServiceList = ServiceConnectService[];
export type LogDriver =
  | "json-file"
  | "syslog"
  | "journald"
  | "gelf"
  | "fluentd"
  | "awslogs"
  | "splunk"
  | "awsfirelens"
  | (string & {});
export type LogConfigurationOptionsMap = { [key: string]: string | undefined };
export interface LogConfiguration {
  logDriver: LogDriver;
  options?: { [key: string]: string | undefined };
  secretOptions?: Secret[];
}
export type ServiceConnectAccessLoggingFormat = "TEXT" | "JSON" | (string & {});
export type ServiceConnectIncludeQueryParameters = "DISABLED" | "ENABLED" | (string & {});
export interface ServiceConnectAccessLogConfiguration {
  format: ServiceConnectAccessLoggingFormat;
  includeQueryParameters?: ServiceConnectIncludeQueryParameters;
}
export interface ServiceConnectConfiguration {
  enabled: boolean;
  namespace?: string;
  services?: ServiceConnectService[];
  logConfiguration?: LogConfiguration;
  accessLogConfiguration?: ServiceConnectAccessLogConfiguration;
}
export type ECSVolumeName = string;
export type EBSKMSKeyId = string;
export type EBSVolumeType = string;
export type EBSSnapshotId = string;
export type EBSResourceType = "volume" | (string & {});
export interface EBSTagSpecification {
  resourceType: EBSResourceType;
  tags?: Tag[];
  propagateTags?: PropagateTags;
}
export type EBSTagSpecifications = EBSTagSpecification[];
export type TaskFilesystemType = "ext3" | "ext4" | "xfs" | "ntfs" | (string & {});
export interface ServiceManagedEBSVolumeConfiguration {
  encrypted?: boolean;
  kmsKeyId?: string;
  volumeType?: string;
  sizeInGiB?: number;
  snapshotId?: string;
  volumeInitializationRate?: number;
  iops?: number;
  throughput?: number;
  tagSpecifications?: EBSTagSpecification[];
  roleArn: string;
  filesystemType?: TaskFilesystemType;
}
export interface ServiceVolumeConfiguration {
  name: string;
  managedEBSVolume?: ServiceManagedEBSVolumeConfiguration;
}
export type ServiceVolumeConfigurations = ServiceVolumeConfiguration[];
export interface VpcLatticeAdvancedConfiguration {
  alternateTargetGroupArn?: string;
  productionListenerRule?: string;
  testListenerRule?: string;
}
export interface VpcLatticeConfiguration {
  roleArn: string;
  targetGroupArn: string;
  portName: string;
  advancedConfiguration?: VpcLatticeAdvancedConfiguration;
}
export type VpcLatticeConfigurations = VpcLatticeConfiguration[];
export type MetricName = string;
export type MetricNamesList = string[];
export type MetricResolutionSeconds = number;
export interface MetricConfiguration {
  metricNames: string[];
  resolutionSeconds: number;
}
export type MetricConfigurationList = MetricConfiguration[];
export interface MonitoringConfiguration {
  metricConfigurations?: MetricConfiguration[];
}
export interface CreateServiceRequest {
  cluster?: string;
  serviceName: string;
  taskDefinition?: string;
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing;
  loadBalancers?: LoadBalancer[];
  serviceRegistries?: ServiceRegistry[];
  desiredCount?: number;
  clientToken?: string;
  launchType?: LaunchType;
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  platformVersion?: string;
  role?: string;
  deploymentConfiguration?: DeploymentConfiguration;
  placementConstraints?: PlacementConstraint[];
  placementStrategy?: PlacementStrategy[];
  networkConfiguration?: NetworkConfiguration;
  healthCheckGracePeriodSeconds?: number;
  schedulingStrategy?: SchedulingStrategy;
  deploymentController?: DeploymentController;
  tags?: Tag[];
  enableECSManagedTags?: boolean;
  propagateTags?: PropagateTags;
  enableExecuteCommand?: boolean;
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  volumeConfigurations?: ServiceVolumeConfiguration[];
  vpcLatticeConfigurations?: VpcLatticeConfiguration[];
  monitoring?: MonitoringConfiguration;
}
export type ScaleUnit = "PERCENT" | (string & {});
export interface Scale {
  value?: number;
  unit?: ScaleUnit;
}
export type StabilityStatus = "STEADY_STATE" | "STABILIZING" | (string & {});
export interface DeploymentEphemeralStorage {
  kmsKeyId?: string;
}
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
  createdAt?: Date;
  updatedAt?: Date;
  launchType?: LaunchType;
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  platformVersion?: string;
  platformFamily?: string;
  networkConfiguration?: NetworkConfiguration;
  loadBalancers?: LoadBalancer[];
  serviceRegistries?: ServiceRegistry[];
  scale?: Scale;
  stabilityStatus?: StabilityStatus;
  stabilityStatusAt?: Date;
  tags?: Tag[];
  fargateEphemeralStorage?: DeploymentEphemeralStorage;
}
export type TaskSets = TaskSet[];
export type DeploymentRolloutState = "COMPLETED" | "FAILED" | "IN_PROGRESS" | (string & {});
export interface ServiceConnectServiceResource {
  discoveryName?: string;
  discoveryArn?: string;
}
export type ServiceConnectServiceResourceList = ServiceConnectServiceResource[];
export interface Deployment {
  id?: string;
  status?: string;
  taskDefinition?: string;
  desiredCount?: number;
  pendingCount?: number;
  runningCount?: number;
  failedTasks?: number;
  createdAt?: Date;
  updatedAt?: Date;
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  launchType?: LaunchType;
  platformVersion?: string;
  platformFamily?: string;
  networkConfiguration?: NetworkConfiguration;
  rolloutState?: DeploymentRolloutState;
  rolloutStateReason?: string;
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  serviceConnectResources?: ServiceConnectServiceResource[];
  volumeConfigurations?: ServiceVolumeConfiguration[];
  fargateEphemeralStorage?: DeploymentEphemeralStorage;
  vpcLatticeConfigurations?: VpcLatticeConfiguration[];
}
export type Deployments = Deployment[];
export interface ServiceEvent {
  id?: string;
  createdAt?: Date;
  message?: string;
}
export type ServiceEvents = ServiceEvent[];
export interface ServiceCurrentRevisionSummary {
  arn?: string;
  requestedTaskCount?: number;
  runningTaskCount?: number;
  pendingTaskCount?: number;
}
export type ServiceCurrentRevisionSummaryList = ServiceCurrentRevisionSummary[];
export type ResourceManagementType = "CUSTOMER" | "ECS" | (string & {});
export interface Service {
  serviceArn?: string;
  serviceName?: string;
  clusterArn?: string;
  loadBalancers?: LoadBalancer[];
  serviceRegistries?: ServiceRegistry[];
  status?: string;
  desiredCount?: number;
  runningCount?: number;
  pendingCount?: number;
  launchType?: LaunchType;
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  platformVersion?: string;
  platformFamily?: string;
  taskDefinition?: string;
  deploymentConfiguration?: DeploymentConfiguration;
  taskSets?: TaskSet[];
  deployments?: Deployment[];
  roleArn?: string;
  events?: ServiceEvent[];
  createdAt?: Date;
  currentServiceDeployment?: string;
  currentServiceRevisions?: ServiceCurrentRevisionSummary[];
  placementConstraints?: PlacementConstraint[];
  placementStrategy?: PlacementStrategy[];
  networkConfiguration?: NetworkConfiguration;
  healthCheckGracePeriodSeconds?: number;
  schedulingStrategy?: SchedulingStrategy;
  deploymentController?: DeploymentController;
  tags?: Tag[];
  createdBy?: string;
  enableECSManagedTags?: boolean;
  propagateTags?: PropagateTags;
  enableExecuteCommand?: boolean;
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing;
  resourceManagementType?: ResourceManagementType;
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
  loadBalancers?: LoadBalancer[];
  serviceRegistries?: ServiceRegistry[];
  launchType?: LaunchType;
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  platformVersion?: string;
  scale?: Scale;
  clientToken?: string;
  tags?: Tag[];
}
export interface CreateTaskSetResponse {
  taskSet?: TaskSet;
}
export type SettingName =
  | "serviceLongArnFormat"
  | "taskLongArnFormat"
  | "containerInstanceLongArnFormat"
  | "awsvpcTrunking"
  | "containerInsights"
  | "fargateFIPSMode"
  | "tagResourceAuthorization"
  | "fargateTaskRetirementWaitPeriod"
  | "guardDutyActivate"
  | "defaultLogDriverMode"
  | "fargateEventWindows"
  | (string & {});
export interface DeleteAccountSettingRequest {
  name: SettingName;
  principalArn?: string;
}
export type SettingType = "user" | "aws_managed" | (string & {});
export interface Setting {
  name?: SettingName;
  value?: string;
  principalArn?: string;
  type?: SettingType;
}
export interface DeleteAccountSettingResponse {
  setting?: Setting;
}
export type TargetType = "container-instance" | (string & {});
export interface Attribute {
  name: string;
  value?: string;
  targetType?: TargetType;
  targetId?: string;
}
export type Attributes = Attribute[];
export interface DeleteAttributesRequest {
  cluster?: string;
  attributes: Attribute[];
}
export interface DeleteAttributesResponse {
  attributes?: Attribute[];
}
export interface DeleteCapacityProviderRequest {
  capacityProvider: string;
  cluster?: string;
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
export interface DeleteDaemonRequest {
  daemonArn: string;
}
export interface DeleteDaemonResponse {
  daemonArn?: string;
  status?: DaemonStatus;
  createdAt?: Date;
  updatedAt?: Date;
  deploymentArn?: string;
}
export interface DeleteDaemonTaskDefinitionRequest {
  daemonTaskDefinition: string;
}
export interface DeleteDaemonTaskDefinitionResponse {
  daemonTaskDefinitionArn?: string;
}
export interface DeleteExpressGatewayServiceRequest {
  serviceArn: string;
}
export interface DeleteExpressGatewayServiceResponse {
  service?: ECSExpressGatewayService;
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
  taskDefinitions: string[];
}
export interface RepositoryCredentials {
  credentialsParameter: string;
}
export type TransportProtocol = "tcp" | "udp" | (string & {});
export type ApplicationProtocol = "http" | "http2" | "grpc" | (string & {});
export interface PortMapping {
  containerPort?: number;
  hostPort?: number;
  protocol?: TransportProtocol;
  name?: string;
  appProtocol?: ApplicationProtocol;
  containerPortRange?: string;
}
export type PortMappingList = PortMapping[];
export type IntegerList = number[];
export interface ContainerRestartPolicy {
  enabled: boolean;
  ignoredExitCodes?: number[];
  restartAttemptPeriod?: number;
}
export type EnvironmentFileType = "s3" | (string & {});
export interface EnvironmentFile {
  value: string;
  type: EnvironmentFileType;
}
export type EnvironmentFiles = EnvironmentFile[];
export interface MountPoint {
  sourceVolume?: string;
  containerPath?: string;
  readOnly?: boolean;
}
export type MountPointList = MountPoint[];
export interface VolumeFrom {
  sourceContainer?: string;
  readOnly?: boolean;
}
export type VolumeFromList = VolumeFrom[];
export interface KernelCapabilities {
  add?: string[];
  drop?: string[];
}
export type DeviceCgroupPermission = "read" | "write" | "mknod" | (string & {});
export type DeviceCgroupPermissions = DeviceCgroupPermission[];
export interface Device {
  hostPath: string;
  containerPath?: string;
  permissions?: DeviceCgroupPermission[];
}
export type DevicesList = Device[];
export interface Tmpfs {
  containerPath: string;
  size: number;
  mountOptions?: string[];
}
export type TmpfsList = Tmpfs[];
export interface LinuxParameters {
  capabilities?: KernelCapabilities;
  devices?: Device[];
  initProcessEnabled?: boolean;
  sharedMemorySize?: number;
  tmpfs?: Tmpfs[];
  maxSwap?: number;
  swappiness?: number;
}
export type ContainerCondition = "START" | "COMPLETE" | "SUCCESS" | "HEALTHY" | (string & {});
export interface ContainerDependency {
  containerName: string;
  condition: ContainerCondition;
}
export type ContainerDependencies = ContainerDependency[];
export type VersionConsistency = "enabled" | "disabled" | (string & {});
export interface HostEntry {
  hostname: string;
  ipAddress: string;
}
export type HostEntryList = HostEntry[];
export type DockerLabelsMap = { [key: string]: string | undefined };
export type UlimitName =
  | "core"
  | "cpu"
  | "data"
  | "fsize"
  | "locks"
  | "memlock"
  | "msgqueue"
  | "nice"
  | "nofile"
  | "nproc"
  | "rss"
  | "rtprio"
  | "rttime"
  | "sigpending"
  | "stack"
  | (string & {});
export interface Ulimit {
  name: UlimitName;
  softLimit: number;
  hardLimit: number;
}
export type UlimitList = Ulimit[];
export interface HealthCheck {
  command: string[];
  interval?: number;
  timeout?: number;
  retries?: number;
  startPeriod?: number;
}
export interface SystemControl {
  namespace?: string;
  value?: string;
}
export type SystemControls = SystemControl[];
export type ResourceType = "GPU" | "InferenceAccelerator" | "NeuronDevice" | (string & {});
export interface ResourceRequirement {
  value: string;
  type: ResourceType;
}
export type ResourceRequirements = ResourceRequirement[];
export type FirelensConfigurationType = "fluentd" | "fluentbit" | (string & {});
export type FirelensConfigurationOptionsMap = { [key: string]: string | undefined };
export interface FirelensConfiguration {
  type: FirelensConfigurationType;
  options?: { [key: string]: string | undefined };
}
export interface ContainerDefinition {
  name?: string;
  image?: string;
  repositoryCredentials?: RepositoryCredentials;
  cpu?: number;
  memory?: number;
  memoryReservation?: number;
  links?: string[];
  portMappings?: PortMapping[];
  essential?: boolean;
  restartPolicy?: ContainerRestartPolicy;
  entryPoint?: string[];
  command?: string[];
  environment?: KeyValuePair[];
  environmentFiles?: EnvironmentFile[];
  mountPoints?: MountPoint[];
  volumesFrom?: VolumeFrom[];
  linuxParameters?: LinuxParameters;
  secrets?: Secret[];
  dependsOn?: ContainerDependency[];
  startTimeout?: number;
  stopTimeout?: number;
  versionConsistency?: VersionConsistency;
  hostname?: string;
  user?: string;
  workingDirectory?: string;
  disableNetworking?: boolean;
  privileged?: boolean;
  readonlyRootFilesystem?: boolean;
  dnsServers?: string[];
  dnsSearchDomains?: string[];
  extraHosts?: HostEntry[];
  dockerSecurityOptions?: string[];
  interactive?: boolean;
  pseudoTerminal?: boolean;
  dockerLabels?: { [key: string]: string | undefined };
  ulimits?: Ulimit[];
  logConfiguration?: LogConfiguration;
  healthCheck?: HealthCheck;
  systemControls?: SystemControl[];
  resourceRequirements?: ResourceRequirement[];
  firelensConfiguration?: FirelensConfiguration;
  credentialSpecs?: string[];
}
export type ContainerDefinitions = ContainerDefinition[];
export type NetworkMode = "bridge" | "host" | "awsvpc" | "none" | (string & {});
export interface HostVolumeProperties {
  sourcePath?: string;
}
export type Scope = "task" | "shared" | (string & {});
export type StringMap = { [key: string]: string | undefined };
export interface DockerVolumeConfiguration {
  scope?: Scope;
  autoprovision?: boolean;
  driver?: string;
  driverOpts?: { [key: string]: string | undefined };
  labels?: { [key: string]: string | undefined };
}
export type EFSTransitEncryption = "ENABLED" | "DISABLED" | (string & {});
export type EFSAuthorizationConfigIAM = "ENABLED" | "DISABLED" | (string & {});
export interface EFSAuthorizationConfig {
  accessPointId?: string;
  iam?: EFSAuthorizationConfigIAM;
}
export interface EFSVolumeConfiguration {
  fileSystemId: string;
  rootDirectory?: string;
  transitEncryption?: EFSTransitEncryption;
  transitEncryptionPort?: number;
  authorizationConfig?: EFSAuthorizationConfig;
}
export interface S3FilesVolumeConfiguration {
  fileSystemArn: string;
  rootDirectory?: string;
  transitEncryptionPort?: number;
  accessPointArn?: string;
}
export interface FSxWindowsFileServerAuthorizationConfig {
  credentialsParameter: string;
  domain: string;
}
export interface FSxWindowsFileServerVolumeConfiguration {
  fileSystemId: string;
  rootDirectory: string;
  authorizationConfig: FSxWindowsFileServerAuthorizationConfig;
}
export interface Volume {
  name?: string;
  host?: HostVolumeProperties;
  dockerVolumeConfiguration?: DockerVolumeConfiguration;
  efsVolumeConfiguration?: EFSVolumeConfiguration;
  s3filesVolumeConfiguration?: S3FilesVolumeConfiguration;
  fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration;
  configuredAtLaunch?: boolean;
}
export type VolumeList = Volume[];
export type TaskDefinitionStatus = "ACTIVE" | "INACTIVE" | "DELETE_IN_PROGRESS" | (string & {});
export type RequiresAttributes = Attribute[];
export type TaskDefinitionPlacementConstraintType = "memberOf" | (string & {});
export interface TaskDefinitionPlacementConstraint {
  type?: TaskDefinitionPlacementConstraintType;
  expression?: string;
}
export type TaskDefinitionPlacementConstraints = TaskDefinitionPlacementConstraint[];
export type Compatibility = "EC2" | "FARGATE" | "EXTERNAL" | "MANAGED_INSTANCES" | (string & {});
export type CompatibilityList = Compatibility[];
export type CPUArchitecture = "X86_64" | "ARM64" | (string & {});
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
  | "LINUX"
  | (string & {});
export interface RuntimePlatform {
  cpuArchitecture?: CPUArchitecture;
  operatingSystemFamily?: OSFamily;
}
export interface InferenceAccelerator {
  deviceName: string;
  deviceType: string;
}
export type InferenceAccelerators = InferenceAccelerator[];
export type PidMode = "host" | "task" | (string & {});
export type IpcMode = "host" | "task" | "none" | (string & {});
export type ProxyConfigurationType = "APPMESH" | (string & {});
export type ProxyConfigurationProperties = KeyValuePair[];
export interface ProxyConfiguration {
  type?: ProxyConfigurationType;
  containerName: string;
  properties?: KeyValuePair[];
}
export interface EphemeralStorage {
  sizeInGiB: number;
}
export interface TaskDefinition {
  taskDefinitionArn?: string;
  containerDefinitions?: ContainerDefinition[];
  family?: string;
  taskRoleArn?: string;
  executionRoleArn?: string;
  networkMode?: NetworkMode;
  revision?: number;
  volumes?: Volume[];
  status?: TaskDefinitionStatus;
  requiresAttributes?: Attribute[];
  placementConstraints?: TaskDefinitionPlacementConstraint[];
  compatibilities?: Compatibility[];
  runtimePlatform?: RuntimePlatform;
  requiresCompatibilities?: Compatibility[];
  cpu?: string;
  memory?: string;
  inferenceAccelerators?: InferenceAccelerator[];
  pidMode?: PidMode;
  ipcMode?: IpcMode;
  proxyConfiguration?: ProxyConfiguration;
  registeredAt?: Date;
  deregisteredAt?: Date;
  deleteRequestedAt?: Date;
  registeredBy?: string;
  ephemeralStorage?: EphemeralStorage;
  enableFaultInjection?: boolean;
}
export type TaskDefinitionList = TaskDefinition[];
export interface Failure {
  arn?: string;
  reason?: string;
  detail?: string;
}
export type Failures = Failure[];
export interface DeleteTaskDefinitionsResponse {
  taskDefinitions?: TaskDefinition[];
  failures?: Failure[];
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
export interface DeregisterContainerInstanceRequest {
  cluster?: string;
  containerInstance: string;
  force?: boolean;
}
export interface VersionInfo {
  agentVersion?: string;
  agentHash?: string;
  dockerVersion?: string;
}
export interface Resource {
  name?: string;
  type?: string;
  doubleValue?: number;
  longValue?: number;
  integerValue?: number;
  stringSetValue?: string[];
}
export type Resources = Resource[];
export type AgentUpdateStatus =
  | "PENDING"
  | "STAGING"
  | "STAGED"
  | "UPDATING"
  | "UPDATED"
  | "FAILED"
  | (string & {});
export type InstanceHealthCheckState =
  | "OK"
  | "IMPAIRED"
  | "INSUFFICIENT_DATA"
  | "INITIALIZING"
  | (string & {});
export type InstanceHealthCheckType =
  | "CONTAINER_RUNTIME"
  | "ACCELERATED_COMPUTE"
  | "DAEMON"
  | "AGENT_CONNECTIVITY"
  | (string & {});
export interface InstanceHealthCheckResult {
  type?: InstanceHealthCheckType;
  status?: InstanceHealthCheckState;
  statusReason?: string;
  lastUpdated?: Date;
  lastStatusChange?: Date;
}
export type InstanceHealthCheckResultList = InstanceHealthCheckResult[];
export interface ContainerInstanceHealthStatus {
  overallStatus?: InstanceHealthCheckState;
  details?: InstanceHealthCheckResult[];
}
export interface ContainerInstance {
  containerInstanceArn?: string;
  ec2InstanceId?: string;
  capacityProviderName?: string;
  version?: number;
  versionInfo?: VersionInfo;
  remainingResources?: Resource[];
  registeredResources?: Resource[];
  status?: string;
  statusReason?: string;
  agentConnected?: boolean;
  runningTasksCount?: number;
  pendingTasksCount?: number;
  agentUpdateStatus?: AgentUpdateStatus;
  attributes?: Attribute[];
  registeredAt?: Date;
  attachments?: Attachment[];
  tags?: Tag[];
  healthStatus?: ContainerInstanceHealthStatus;
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
export type CapacityProviderField = "TAGS" | (string & {});
export type CapacityProviderFieldList = CapacityProviderField[];
export interface DescribeCapacityProvidersRequest {
  capacityProviders?: string[];
  cluster?: string;
  include?: CapacityProviderField[];
  maxResults?: number;
  nextToken?: string;
}
export type CapacityProviders = CapacityProvider[];
export interface DescribeCapacityProvidersResponse {
  capacityProviders?: CapacityProvider[];
  failures?: Failure[];
  nextToken?: string;
}
export type ClusterField =
  | "ATTACHMENTS"
  | "CONFIGURATIONS"
  | "SETTINGS"
  | "STATISTICS"
  | "TAGS"
  | (string & {});
export type ClusterFieldList = ClusterField[];
export interface DescribeClustersRequest {
  clusters?: string[];
  include?: ClusterField[];
}
export type Clusters = Cluster[];
export interface DescribeClustersResponse {
  clusters?: Cluster[];
  failures?: Failure[];
}
export type ContainerInstanceField = "TAGS" | "CONTAINER_INSTANCE_HEALTH" | (string & {});
export type ContainerInstanceFieldList = ContainerInstanceField[];
export interface DescribeContainerInstancesRequest {
  cluster?: string;
  containerInstances: string[];
  include?: ContainerInstanceField[];
}
export type ContainerInstances = ContainerInstance[];
export interface DescribeContainerInstancesResponse {
  containerInstances?: ContainerInstance[];
  failures?: Failure[];
}
export interface DescribeDaemonRequest {
  daemonArn: string;
}
export interface DaemonCapacityProvider {
  arn?: string;
  runningCount?: number;
  withoutDaemonCount?: number;
}
export type DaemonCapacityProviderList = DaemonCapacityProvider[];
export interface DaemonRevisionDetail {
  arn?: string;
  capacityProviders?: DaemonCapacityProvider[];
  totalRunningCount?: number;
  totalWithoutDaemonCount?: number;
}
export type DaemonRevisionDetailList = DaemonRevisionDetail[];
export interface DaemonDetail {
  daemonArn?: string;
  clusterArn?: string;
  status?: DaemonStatus;
  currentRevisions?: DaemonRevisionDetail[];
  deploymentArn?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface DescribeDaemonResponse {
  daemon?: DaemonDetail;
}
export interface DescribeDaemonDeploymentsRequest {
  daemonDeploymentArns: string[];
}
export type DaemonDeploymentStatus =
  | "PENDING"
  | "SUCCESSFUL"
  | "STOPPED"
  | "STOP_REQUESTED"
  | "IN_PROGRESS"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_SUCCESSFUL"
  | "ROLLBACK_FAILED"
  | (string & {});
export interface DaemonDeploymentCapacityProvider {
  arn?: string;
  runningInstanceCount?: number;
  withoutDaemonInstanceCount?: number;
  drainingInstanceCount?: number;
}
export type DaemonDeploymentCapacityProviderList = DaemonDeploymentCapacityProvider[];
export interface DaemonDeploymentRevisionDetail {
  arn?: string;
  capacityProviders?: DaemonDeploymentCapacityProvider[];
  totalRunningInstanceCount?: number;
  totalWithoutDaemonInstanceCount?: number;
  totalDrainingInstanceCount?: number;
}
export type DaemonDeploymentRevisionDetailList = DaemonDeploymentRevisionDetail[];
export type DaemonDeploymentRollbackMonitorsStatus =
  | "TRIGGERED"
  | "MONITORING"
  | "MONITORING_COMPLETE"
  | "DISABLED"
  | (string & {});
export interface DaemonCircuitBreaker {
  failureCount?: number;
  status?: DaemonDeploymentRollbackMonitorsStatus;
  threshold?: number;
}
export interface DaemonDeploymentAlarms {
  status?: DaemonDeploymentRollbackMonitorsStatus;
  alarmNames?: string[];
  triggeredAlarmNames?: string[];
}
export interface DaemonRollback {
  reason?: string;
  startedAt?: Date;
  rollbackTargetDaemonRevisionArn?: string;
  rollbackCapacityProviders?: string[];
}
export interface DaemonDeployment {
  daemonDeploymentArn?: string;
  clusterArn?: string;
  status?: DaemonDeploymentStatus;
  statusReason?: string;
  targetDaemonRevision?: DaemonDeploymentRevisionDetail;
  sourceDaemonRevisions?: DaemonDeploymentRevisionDetail[];
  circuitBreaker?: DaemonCircuitBreaker;
  alarms?: DaemonDeploymentAlarms;
  rollback?: DaemonRollback;
  deploymentConfiguration?: DaemonDeploymentConfiguration;
  createdAt?: Date;
  startedAt?: Date;
  stoppedAt?: Date;
  finishedAt?: Date;
}
export type DaemonDeploymentList = DaemonDeployment[];
export interface DescribeDaemonDeploymentsResponse {
  failures?: Failure[];
  daemonDeployments?: DaemonDeployment[];
}
export interface DescribeDaemonRevisionsRequest {
  daemonRevisionArns: string[];
}
export interface DaemonContainerImage {
  containerName?: string;
  imageDigest?: string;
  image?: string;
}
export type DaemonContainerImages = DaemonContainerImage[];
export interface DaemonRevision {
  daemonRevisionArn?: string;
  clusterArn?: string;
  daemonArn?: string;
  daemonTaskDefinitionArn?: string;
  createdAt?: Date;
  containerImages?: DaemonContainerImage[];
  propagateTags?: DaemonPropagateTags;
  enableECSManagedTags?: boolean;
  enableExecuteCommand?: boolean;
  critical?: boolean;
}
export type DaemonRevisions = DaemonRevision[];
export interface DescribeDaemonRevisionsResponse {
  daemonRevisions?: DaemonRevision[];
  failures?: Failure[];
}
export interface DescribeDaemonTaskDefinitionRequest {
  daemonTaskDefinition: string;
}
export interface DaemonLinuxParameters {
  capabilities?: KernelCapabilities;
  devices?: Device[];
  initProcessEnabled?: boolean;
  tmpfs?: Tmpfs[];
}
export interface DaemonContainerDefinition {
  name?: string;
  image: string;
  memory?: number;
  memoryReservation?: number;
  repositoryCredentials?: RepositoryCredentials;
  healthCheck?: HealthCheck;
  cpu?: number;
  essential?: boolean;
  entryPoint?: string[];
  command?: string[];
  workingDirectory?: string;
  environmentFiles?: EnvironmentFile[];
  environment?: KeyValuePair[];
  secrets?: Secret[];
  readonlyRootFilesystem?: boolean;
  mountPoints?: MountPoint[];
  logConfiguration?: LogConfiguration;
  firelensConfiguration?: FirelensConfiguration;
  privileged?: boolean;
  user?: string;
  ulimits?: Ulimit[];
  linuxParameters?: DaemonLinuxParameters;
  dependsOn?: ContainerDependency[];
  startTimeout?: number;
  stopTimeout?: number;
  systemControls?: SystemControl[];
  interactive?: boolean;
  pseudoTerminal?: boolean;
  restartPolicy?: ContainerRestartPolicy;
}
export type DaemonContainerDefinitionList = DaemonContainerDefinition[];
export interface DaemonVolume {
  name?: string;
  host?: HostVolumeProperties;
}
export type DaemonVolumeList = DaemonVolume[];
export type DaemonTaskDefinitionStatus =
  | "ACTIVE"
  | "DELETE_IN_PROGRESS"
  | "DELETED"
  | (string & {});
export type DaemonPidMode = "none" | "shared" | (string & {});
export type DaemonIpcMode = "none" | "shared" | (string & {});
export interface DaemonTaskDefinition {
  daemonTaskDefinitionArn?: string;
  family?: string;
  revision?: number;
  taskRoleArn?: string;
  executionRoleArn?: string;
  containerDefinitions?: DaemonContainerDefinition[];
  volumes?: DaemonVolume[];
  cpu?: string;
  memory?: string;
  status?: DaemonTaskDefinitionStatus;
  registeredAt?: Date;
  deleteRequestedAt?: Date;
  registeredBy?: string;
  pidMode?: DaemonPidMode;
  ipcMode?: DaemonIpcMode;
}
export interface DescribeDaemonTaskDefinitionResponse {
  daemonTaskDefinition?: DaemonTaskDefinition;
}
export type ExpressGatewayServiceInclude = "TAGS" | (string & {});
export type ExpressGatewayServiceIncludeList = ExpressGatewayServiceInclude[];
export interface DescribeExpressGatewayServiceRequest {
  serviceArn: string;
  include?: ExpressGatewayServiceInclude[];
}
export interface DescribeExpressGatewayServiceResponse {
  service?: ECSExpressGatewayService;
}
export interface DescribeServiceDeploymentsRequest {
  serviceDeploymentArns: string[];
}
export interface ServiceRevisionSummary {
  arn?: string;
  requestedTaskCount?: number;
  runningTaskCount?: number;
  pendingTaskCount?: number;
  requestedTestTrafficWeight?: number;
  requestedProductionTrafficWeight?: number;
}
export type ServiceRevisionsSummaryList = ServiceRevisionSummary[];
export type ServiceDeploymentStatus =
  | "PENDING"
  | "SUCCESSFUL"
  | "STOPPED"
  | "STOP_REQUESTED"
  | "IN_PROGRESS"
  | "ROLLBACK_REQUESTED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_SUCCESSFUL"
  | "ROLLBACK_FAILED"
  | (string & {});
export type ServiceDeploymentLifecycleStage =
  | "RECONCILE_SERVICE"
  | "PRE_SCALE_UP"
  | "SCALE_UP"
  | "POST_SCALE_UP"
  | "TEST_TRAFFIC_SHIFT"
  | "POST_TEST_TRAFFIC_SHIFT"
  | "PRODUCTION_TRAFFIC_SHIFT"
  | "POST_PRODUCTION_TRAFFIC_SHIFT"
  | "BAKE_TIME"
  | "CLEAN_UP"
  | (string & {});
export type DeploymentLifecycleHookStatus =
  | "AWAITING_ACTION"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | (string & {});
export interface DeploymentLifecycleHookDetail {
  hookId?: string;
  targetType?: DeploymentLifecycleHookTargetType;
  targetArn?: string;
  status?: DeploymentLifecycleHookStatus;
  expiresAt?: Date;
  timeoutAction?: DeploymentLifecycleHookAction;
}
export type DeploymentLifecycleHookDetailList = DeploymentLifecycleHookDetail[];
export interface Rollback {
  reason?: string;
  startedAt?: Date;
  serviceRevisionArn?: string;
}
export type ServiceDeploymentRollbackMonitorsStatus =
  | "TRIGGERED"
  | "MONITORING"
  | "MONITORING_COMPLETE"
  | "DISABLED"
  | (string & {});
export interface ServiceDeploymentCircuitBreaker {
  status?: ServiceDeploymentRollbackMonitorsStatus;
  failureCount?: number;
  threshold?: number;
}
export interface ServiceDeploymentAlarms {
  status?: ServiceDeploymentRollbackMonitorsStatus;
  alarmNames?: string[];
  triggeredAlarmNames?: string[];
}
export interface ServiceDeployment {
  serviceDeploymentArn?: string;
  serviceArn?: string;
  clusterArn?: string;
  createdAt?: Date;
  startedAt?: Date;
  finishedAt?: Date;
  stoppedAt?: Date;
  updatedAt?: Date;
  sourceServiceRevisions?: ServiceRevisionSummary[];
  targetServiceRevision?: ServiceRevisionSummary;
  status?: ServiceDeploymentStatus;
  statusReason?: string;
  lifecycleStage?: ServiceDeploymentLifecycleStage;
  lifecycleHookDetails?: DeploymentLifecycleHookDetail[];
  deploymentConfiguration?: DeploymentConfiguration;
  rollback?: Rollback;
  deploymentCircuitBreaker?: ServiceDeploymentCircuitBreaker;
  alarms?: ServiceDeploymentAlarms;
}
export type ServiceDeployments = ServiceDeployment[];
export interface DescribeServiceDeploymentsResponse {
  serviceDeployments?: ServiceDeployment[];
  failures?: Failure[];
}
export interface DescribeServiceRevisionsRequest {
  serviceRevisionArns: string[];
}
export interface ContainerImage {
  containerName?: string;
  imageDigest?: string;
  image?: string;
}
export type ContainerImages = ContainerImage[];
export interface ServiceRevisionLoadBalancer {
  targetGroupArn?: string;
  productionListenerRule?: string;
}
export type ServiceRevisionLoadBalancers = ServiceRevisionLoadBalancer[];
export interface ServiceRevisionVpcLatticeConfiguration {
  targetGroupArn?: string;
  productionListenerRule?: string;
}
export type ServiceRevisionVpcLatticeConfigurations = ServiceRevisionVpcLatticeConfiguration[];
export interface ResolvedConfiguration {
  loadBalancers?: ServiceRevisionLoadBalancer[];
  vpcLatticeConfigurations?: ServiceRevisionVpcLatticeConfiguration[];
}
export type ManagedResourceStatus =
  | "PROVISIONING"
  | "ACTIVE"
  | "DEPROVISIONING"
  | "DELETED"
  | "FAILED"
  | (string & {});
export interface ManagedLoadBalancer {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
  scheme: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
}
export interface ManagedSecurityGroup {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
}
export type ManagedSecurityGroups = ManagedSecurityGroup[];
export interface ManagedCertificate {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
  domainName: string;
}
export interface ManagedListener {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
}
export interface ManagedListenerRule {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
}
export interface ManagedTargetGroup {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
  healthCheckPath: string;
  healthCheckPort: number;
  port: number;
}
export type ManagedTargetGroups = ManagedTargetGroup[];
export interface ManagedIngressPath {
  accessType: AccessType;
  endpoint: string;
  loadBalancer?: ManagedLoadBalancer;
  loadBalancerSecurityGroups?: ManagedSecurityGroup[];
  certificate?: ManagedCertificate;
  listener?: ManagedListener;
  rule?: ManagedListenerRule;
  targetGroups?: ManagedTargetGroup[];
}
export type ManagedIngressPaths = ManagedIngressPath[];
export interface ManagedScalableTarget {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
  minCapacity: number;
  maxCapacity: number;
}
export interface ManagedApplicationAutoScalingPolicy {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
  policyType: string;
  targetValue: number;
  metric: string;
}
export type ManagedApplicationAutoScalingPolicies = ManagedApplicationAutoScalingPolicy[];
export interface ManagedAutoScaling {
  scalableTarget?: ManagedScalableTarget;
  applicationAutoScalingPolicies?: ManagedApplicationAutoScalingPolicy[];
}
export interface ManagedMetricAlarm {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
}
export type ManagedMetricAlarms = ManagedMetricAlarm[];
export interface ManagedLogGroup {
  arn?: string;
  status: ManagedResourceStatus;
  statusReason?: string;
  updatedAt: Date;
  logGroupName: string;
}
export type ManagedLogGroups = ManagedLogGroup[];
export interface ECSManagedResources {
  ingressPaths?: ManagedIngressPath[];
  autoScaling?: ManagedAutoScaling;
  metricAlarms?: ManagedMetricAlarm[];
  serviceSecurityGroups?: ManagedSecurityGroup[];
  logGroups?: ManagedLogGroup[];
}
export interface RuntimePlatformOverride {
  cpuArchitecture?: string;
}
export interface ServiceRevisionOverrides {
  runtimePlatform?: RuntimePlatformOverride;
}
export interface ServiceRevision {
  serviceRevisionArn?: string;
  serviceArn?: string;
  clusterArn?: string;
  taskDefinition?: string;
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  launchType?: LaunchType;
  platformVersion?: string;
  platformFamily?: string;
  loadBalancers?: LoadBalancer[];
  serviceRegistries?: ServiceRegistry[];
  networkConfiguration?: NetworkConfiguration;
  containerImages?: ContainerImage[];
  guardDutyEnabled?: boolean;
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  volumeConfigurations?: ServiceVolumeConfiguration[];
  fargateEphemeralStorage?: DeploymentEphemeralStorage;
  createdAt?: Date;
  vpcLatticeConfigurations?: VpcLatticeConfiguration[];
  resolvedConfiguration?: ResolvedConfiguration;
  ecsManagedResources?: ECSManagedResources;
  overrides?: ServiceRevisionOverrides;
  monitoring?: MonitoringConfiguration;
}
export type ServiceRevisions = ServiceRevision[];
export interface DescribeServiceRevisionsResponse {
  serviceRevisions?: ServiceRevision[];
  failures?: Failure[];
}
export type ServiceField = "TAGS" | (string & {});
export type ServiceFieldList = ServiceField[];
export interface DescribeServicesRequest {
  cluster?: string;
  services: string[];
  include?: ServiceField[];
}
export type Services = Service[];
export interface DescribeServicesResponse {
  services?: Service[];
  failures?: Failure[];
}
export type TaskDefinitionField = "TAGS" | (string & {});
export type TaskDefinitionFieldList = TaskDefinitionField[];
export interface DescribeTaskDefinitionRequest {
  taskDefinition: string;
  include?: TaskDefinitionField[];
}
export interface DescribeTaskDefinitionResponse {
  taskDefinition?: TaskDefinition;
  tags?: Tag[];
}
export type TaskField = "TAGS" | (string & {});
export type TaskFieldList = TaskField[];
export interface DescribeTasksRequest {
  cluster?: string;
  tasks: string[];
  include?: TaskField[];
}
export type Connectivity = "CONNECTED" | "DISCONNECTED" | (string & {});
export interface NetworkBinding {
  bindIP?: string;
  containerPort?: number;
  hostPort?: number;
  protocol?: TransportProtocol;
  containerPortRange?: string;
  hostPortRange?: string;
}
export type NetworkBindings = NetworkBinding[];
export interface NetworkInterface {
  attachmentId?: string;
  privateIpv4Address?: string;
  ipv6Address?: string;
}
export type NetworkInterfaces = NetworkInterface[];
export type HealthStatus = "HEALTHY" | "UNHEALTHY" | "UNKNOWN" | (string & {});
export type ManagedAgentName = "ExecuteCommandAgent" | (string & {});
export interface ManagedAgent {
  lastStartedAt?: Date;
  name?: ManagedAgentName;
  reason?: string;
  lastStatus?: string;
}
export type ManagedAgents = ManagedAgent[];
export type GpuIds = string[];
export type NeuronDeviceIds = string[];
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
  networkBindings?: NetworkBinding[];
  networkInterfaces?: NetworkInterface[];
  healthStatus?: HealthStatus;
  managedAgents?: ManagedAgent[];
  cpu?: string;
  memory?: string;
  memoryReservation?: string;
  gpuIds?: string[];
  neuronDeviceIds?: string[];
}
export type Containers = Container[];
export interface ContainerOverride {
  name?: string;
  command?: string[];
  environment?: KeyValuePair[];
  environmentFiles?: EnvironmentFile[];
  cpu?: number;
  memory?: number;
  memoryReservation?: number;
  resourceRequirements?: ResourceRequirement[];
}
export type ContainerOverrides = ContainerOverride[];
export interface InferenceAcceleratorOverride {
  deviceName?: string;
  deviceType?: string;
}
export type InferenceAcceleratorOverrides = InferenceAcceleratorOverride[];
export interface TaskOverride {
  containerOverrides?: ContainerOverride[];
  cpu?: string;
  inferenceAcceleratorOverrides?: InferenceAcceleratorOverride[];
  executionRoleArn?: string;
  memory?: string;
  taskRoleArn?: string;
  ephemeralStorage?: EphemeralStorage;
}
export type TaskStopCode =
  | "TaskFailedToStart"
  | "EssentialContainerExited"
  | "UserInitiated"
  | "ServiceSchedulerInitiated"
  | "SpotInterruption"
  | "TerminationNotice"
  | "InfrastructureHealth"
  | (string & {});
export interface TaskEphemeralStorage {
  sizeInGiB?: number;
  kmsKeyId?: string;
}
export interface Task {
  attachments?: Attachment[];
  attributes?: Attribute[];
  availabilityZone?: string;
  capacityProviderName?: string;
  clusterArn?: string;
  connectivity?: Connectivity;
  connectivityAt?: Date;
  containerInstanceArn?: string;
  containers?: Container[];
  cpu?: string;
  createdAt?: Date;
  desiredStatus?: string;
  enableExecuteCommand?: boolean;
  executionStoppedAt?: Date;
  group?: string;
  healthStatus?: HealthStatus;
  inferenceAccelerators?: InferenceAccelerator[];
  lastStatus?: string;
  launchType?: LaunchType;
  memory?: string;
  overrides?: TaskOverride;
  platformVersion?: string;
  platformFamily?: string;
  pullStartedAt?: Date;
  pullStoppedAt?: Date;
  startedAt?: Date;
  startedBy?: string;
  stopCode?: TaskStopCode;
  stoppedAt?: Date;
  stoppedReason?: string;
  stoppingAt?: Date;
  tags?: Tag[];
  taskArn?: string;
  taskDefinitionArn?: string;
  version?: number;
  ephemeralStorage?: EphemeralStorage;
  fargateEphemeralStorage?: TaskEphemeralStorage;
}
export type Tasks = Task[];
export interface DescribeTasksResponse {
  tasks?: Task[];
  failures?: Failure[];
}
export type TaskSetField = "TAGS" | (string & {});
export type TaskSetFieldList = TaskSetField[];
export interface DescribeTaskSetsRequest {
  cluster: string;
  service: string;
  taskSets?: string[];
  include?: TaskSetField[];
}
export interface DescribeTaskSetsResponse {
  taskSets?: TaskSet[];
  failures?: Failure[];
}
export interface DiscoverPollEndpointRequest {
  containerInstance?: string;
  cluster?: string;
}
export interface DiscoverPollEndpointResponse {
  endpoint?: string;
  telemetryEndpoint?: string;
  serviceConnectEndpoint?: string;
}
export interface ExecuteCommandRequest {
  cluster?: string;
  container?: string;
  command: string;
  interactive: boolean;
  task: string;
}
export type SensitiveString = string | redacted.Redacted<string>;
export interface Session {
  sessionId?: string;
  streamUrl?: string;
  tokenValue?: string | redacted.Redacted<string>;
}
export interface ExecuteCommandResponse {
  clusterArn?: string;
  containerArn?: string;
  containerName?: string;
  interactive?: boolean;
  session?: Session;
  taskArn?: string;
}
export interface GetTaskProtectionRequest {
  cluster: string;
  tasks?: string[];
}
export interface ProtectedTask {
  taskArn?: string;
  protectionEnabled?: boolean;
  expirationDate?: Date;
}
export type ProtectedTasks = ProtectedTask[];
export interface GetTaskProtectionResponse {
  protectedTasks?: ProtectedTask[];
  failures?: Failure[];
}
export interface ListAccountSettingsRequest {
  name?: SettingName;
  value?: string;
  principalArn?: string;
  effectiveSettings?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export type Settings = Setting[];
export interface ListAccountSettingsResponse {
  settings?: Setting[];
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
  attributes?: Attribute[];
  nextToken?: string;
}
export interface ListClustersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListClustersResponse {
  clusterArns?: string[];
  nextToken?: string;
}
export type ContainerInstanceStatus =
  | "ACTIVE"
  | "DRAINING"
  | "REGISTERING"
  | "DEREGISTERING"
  | "REGISTRATION_FAILED"
  | (string & {});
export interface ListContainerInstancesRequest {
  cluster?: string;
  filter?: string;
  nextToken?: string;
  maxResults?: number;
  status?: ContainerInstanceStatus;
}
export interface ListContainerInstancesResponse {
  containerInstanceArns?: string[];
  nextToken?: string;
}
export type DaemonDeploymentStatusList = DaemonDeploymentStatus[];
export interface CreatedAt {
  before?: Date;
  after?: Date;
}
export interface ListDaemonDeploymentsRequest {
  daemonArn: string;
  status?: DaemonDeploymentStatus[];
  createdAt?: CreatedAt;
  maxResults?: number;
  nextToken?: string;
}
export interface DaemonDeploymentSummary {
  daemonDeploymentArn?: string;
  daemonArn?: string;
  clusterArn?: string;
  status?: DaemonDeploymentStatus;
  statusReason?: string;
  targetDaemonRevisionArn?: string;
  createdAt?: Date;
  startedAt?: Date;
  stoppedAt?: Date;
  finishedAt?: Date;
}
export type DaemonDeploymentSummaryList = DaemonDeploymentSummary[];
export interface ListDaemonDeploymentsResponse {
  nextToken?: string;
  daemonDeployments?: DaemonDeploymentSummary[];
}
export interface ListDaemonsRequest {
  clusterArn?: string;
  capacityProviderArns?: string[];
  maxResults?: number;
  nextToken?: string;
}
export interface DaemonSummary {
  daemonArn?: string;
  status?: DaemonStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export type DaemonSummariesList = DaemonSummary[];
export interface ListDaemonsResponse {
  daemonSummariesList?: DaemonSummary[];
  nextToken?: string;
}
export type DaemonTaskDefinitionRevisionFilter = "LAST_REGISTERED" | (string & {});
export type DaemonTaskDefinitionStatusFilter =
  | "ACTIVE"
  | "DELETE_IN_PROGRESS"
  | "ALL"
  | (string & {});
export type SortOrder = "ASC" | "DESC" | (string & {});
export interface ListDaemonTaskDefinitionsRequest {
  familyPrefix?: string;
  family?: string;
  revision?: DaemonTaskDefinitionRevisionFilter;
  status?: DaemonTaskDefinitionStatusFilter;
  sort?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface DaemonTaskDefinitionSummary {
  arn?: string;
  registeredAt?: Date;
  registeredBy?: string;
  deleteRequestedAt?: Date;
  status?: DaemonTaskDefinitionStatus;
}
export type DaemonTaskDefinitionSummaries = DaemonTaskDefinitionSummary[];
export interface ListDaemonTaskDefinitionsResponse {
  daemonTaskDefinitions?: DaemonTaskDefinitionSummary[];
  nextToken?: string;
}
export type ServiceDeploymentStatusList = ServiceDeploymentStatus[];
export interface ListServiceDeploymentsRequest {
  service: string;
  cluster?: string;
  status?: ServiceDeploymentStatus[];
  createdAt?: CreatedAt;
  nextToken?: string;
  maxResults?: number;
}
export interface ServiceDeploymentBrief {
  serviceDeploymentArn?: string;
  serviceArn?: string;
  clusterArn?: string;
  startedAt?: Date;
  createdAt?: Date;
  finishedAt?: Date;
  targetServiceRevisionArn?: string;
  status?: ServiceDeploymentStatus;
  statusReason?: string;
}
export type ServiceDeploymentsBrief = ServiceDeploymentBrief[];
export interface ListServiceDeploymentsResponse {
  serviceDeployments?: ServiceDeploymentBrief[];
  nextToken?: string;
}
export interface ListServicesRequest {
  cluster?: string;
  nextToken?: string;
  maxResults?: number;
  launchType?: LaunchType;
  schedulingStrategy?: SchedulingStrategy;
  resourceManagementType?: ResourceManagementType;
}
export interface ListServicesResponse {
  serviceArns?: string[];
  nextToken?: string;
}
export interface ListServicesByNamespaceRequest {
  namespace: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListServicesByNamespaceResponse {
  serviceArns?: string[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export type TaskDefinitionFamilyStatus = "ACTIVE" | "INACTIVE" | "ALL" | (string & {});
export interface ListTaskDefinitionFamiliesRequest {
  familyPrefix?: string;
  status?: TaskDefinitionFamilyStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTaskDefinitionFamiliesResponse {
  families?: string[];
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
  taskDefinitionArns?: string[];
  nextToken?: string;
}
export type DesiredStatus = "RUNNING" | "PENDING" | "STOPPED" | (string & {});
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
  daemonName?: string;
}
export interface ListTasksResponse {
  taskArns?: string[];
  nextToken?: string;
}
export interface PutAccountSettingRequest {
  name: SettingName;
  value: string;
  principalArn?: string;
}
export interface PutAccountSettingResponse {
  setting?: Setting;
}
export interface PutAccountSettingDefaultRequest {
  name: SettingName;
  value: string;
}
export interface PutAccountSettingDefaultResponse {
  setting?: Setting;
}
export interface PutAttributesRequest {
  cluster?: string;
  attributes: Attribute[];
}
export interface PutAttributesResponse {
  attributes?: Attribute[];
}
export interface PutClusterCapacityProvidersRequest {
  cluster: string;
  capacityProviders: string[];
  defaultCapacityProviderStrategy: CapacityProviderStrategyItem[];
}
export interface PutClusterCapacityProvidersResponse {
  cluster?: Cluster;
}
export type PlatformDeviceType = "GPU" | "NEURON_DEVICE" | (string & {});
export interface PlatformDevice {
  id: string;
  type: PlatformDeviceType;
}
export type PlatformDevices = PlatformDevice[];
export interface RegisterContainerInstanceRequest {
  cluster?: string;
  instanceIdentityDocument?: string;
  instanceIdentityDocumentSignature?: string;
  totalResources?: Resource[];
  versionInfo?: VersionInfo;
  containerInstanceArn?: string;
  attributes?: Attribute[];
  platformDevices?: PlatformDevice[];
  tags?: Tag[];
}
export interface RegisterContainerInstanceResponse {
  containerInstance?: ContainerInstance;
}
export interface RegisterDaemonTaskDefinitionRequest {
  family: string;
  taskRoleArn?: string;
  executionRoleArn?: string;
  containerDefinitions: DaemonContainerDefinition[];
  cpu?: string;
  memory?: string;
  volumes?: DaemonVolume[];
  tags?: Tag[];
  pidMode?: DaemonPidMode;
  ipcMode?: DaemonIpcMode;
}
export interface RegisterDaemonTaskDefinitionResponse {
  daemonTaskDefinitionArn?: string;
}
export interface RegisterTaskDefinitionRequest {
  family: string;
  taskRoleArn?: string;
  executionRoleArn?: string;
  networkMode?: NetworkMode;
  containerDefinitions: ContainerDefinition[];
  volumes?: Volume[];
  placementConstraints?: TaskDefinitionPlacementConstraint[];
  requiresCompatibilities?: Compatibility[];
  cpu?: string;
  memory?: string;
  tags?: Tag[];
  pidMode?: PidMode;
  ipcMode?: IpcMode;
  proxyConfiguration?: ProxyConfiguration;
  inferenceAccelerators?: InferenceAccelerator[];
  ephemeralStorage?: EphemeralStorage;
  runtimePlatform?: RuntimePlatform;
  enableFaultInjection?: boolean;
}
export interface RegisterTaskDefinitionResponse {
  taskDefinition?: TaskDefinition;
  tags?: Tag[];
}
export interface TaskManagedEBSVolumeTerminationPolicy {
  deleteOnTermination: boolean;
}
export interface TaskManagedEBSVolumeConfiguration {
  encrypted?: boolean;
  kmsKeyId?: string;
  volumeType?: string;
  sizeInGiB?: number;
  snapshotId?: string;
  volumeInitializationRate?: number;
  iops?: number;
  throughput?: number;
  tagSpecifications?: EBSTagSpecification[];
  roleArn: string;
  terminationPolicy?: TaskManagedEBSVolumeTerminationPolicy;
  filesystemType?: TaskFilesystemType;
}
export interface TaskVolumeConfiguration {
  name: string;
  managedEBSVolume?: TaskManagedEBSVolumeConfiguration;
}
export type TaskVolumeConfigurations = TaskVolumeConfiguration[];
export interface RunTaskRequest {
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  cluster?: string;
  count?: number;
  enableECSManagedTags?: boolean;
  enableExecuteCommand?: boolean;
  group?: string;
  launchType?: LaunchType;
  networkConfiguration?: NetworkConfiguration;
  overrides?: TaskOverride;
  placementConstraints?: PlacementConstraint[];
  placementStrategy?: PlacementStrategy[];
  platformVersion?: string;
  propagateTags?: PropagateTags;
  referenceId?: string;
  startedBy?: string;
  tags?: Tag[];
  taskDefinition: string;
  clientToken?: string;
  volumeConfigurations?: TaskVolumeConfiguration[];
}
export interface RunTaskResponse {
  tasks?: Task[];
  failures?: Failure[];
}
export interface StartTaskRequest {
  cluster?: string;
  containerInstances: string[];
  enableECSManagedTags?: boolean;
  enableExecuteCommand?: boolean;
  group?: string;
  networkConfiguration?: NetworkConfiguration;
  overrides?: TaskOverride;
  propagateTags?: PropagateTags;
  referenceId?: string;
  startedBy?: string;
  tags?: Tag[];
  taskDefinition: string;
  volumeConfigurations?: TaskVolumeConfiguration[];
}
export interface StartTaskResponse {
  tasks?: Task[];
  failures?: Failure[];
}
export type StopServiceDeploymentStopType = "ABORT" | "ROLLBACK" | (string & {});
export interface StopServiceDeploymentRequest {
  serviceDeploymentArn: string;
  stopType?: StopServiceDeploymentStopType;
}
export interface StopServiceDeploymentResponse {
  serviceDeploymentArn?: string;
}
export interface StopTaskRequest {
  cluster?: string;
  task: string;
  reason?: string;
}
export interface StopTaskResponse {
  task?: Task;
}
export interface AttachmentStateChange {
  attachmentArn: string;
  status: string;
}
export type AttachmentStateChanges = AttachmentStateChange[];
export interface SubmitAttachmentStateChangesRequest {
  cluster?: string;
  attachments: AttachmentStateChange[];
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
  networkBindings?: NetworkBinding[];
}
export interface SubmitContainerStateChangeResponse {
  acknowledgment?: string;
}
export interface ContainerStateChange {
  containerName?: string;
  imageDigest?: string;
  runtimeId?: string;
  exitCode?: number;
  networkBindings?: NetworkBinding[];
  reason?: string;
  status?: string;
}
export type ContainerStateChanges = ContainerStateChange[];
export interface ManagedAgentStateChange {
  containerName: string;
  managedAgentName: ManagedAgentName;
  status: string;
  reason?: string;
}
export type ManagedAgentStateChanges = ManagedAgentStateChange[];
export interface SubmitTaskStateChangeRequest {
  cluster?: string;
  task?: string;
  status?: string;
  reason?: string;
  containers?: ContainerStateChange[];
  attachments?: AttachmentStateChange[];
  managedAgents?: ManagedAgentStateChange[];
  pullStartedAt?: Date;
  pullStoppedAt?: Date;
  executionStoppedAt?: Date;
}
export interface SubmitTaskStateChangeResponse {
  acknowledgment?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface AutoScalingGroupProviderUpdate {
  managedScaling?: ManagedScaling;
  managedTerminationProtection?: ManagedTerminationProtection;
  managedDraining?: ManagedDraining;
}
export interface InstanceLaunchTemplateUpdate {
  ec2InstanceProfileArn?: string;
  networkConfiguration?: ManagedInstancesNetworkConfiguration;
  storageConfiguration?: ManagedInstancesStorageConfiguration;
  instanceMetadataTagsPropagation?: boolean;
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration;
  monitoring?: ManagedInstancesMonitoringOptions;
  instanceRequirements?: InstanceRequirementsRequest;
  capacityReservations?: CapacityReservationRequest;
}
export interface UpdateManagedInstancesProviderConfiguration {
  infrastructureRoleArn: string;
  instanceLaunchTemplate: InstanceLaunchTemplateUpdate;
  propagateTags?: PropagateMITags;
  infrastructureOptimization?: InfrastructureOptimization;
  autoRepairConfiguration?: AutoRepairConfiguration;
}
export interface UpdateCapacityProviderRequest {
  name: string;
  cluster?: string;
  autoScalingGroupProvider?: AutoScalingGroupProviderUpdate;
  managedInstancesProvider?: UpdateManagedInstancesProviderConfiguration;
}
export interface UpdateCapacityProviderResponse {
  capacityProvider?: CapacityProvider;
}
export interface UpdateClusterRequest {
  cluster: string;
  settings?: ClusterSetting[];
  configuration?: ClusterConfiguration;
  serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
}
export interface UpdateClusterResponse {
  cluster?: Cluster;
}
export interface UpdateClusterSettingsRequest {
  cluster: string;
  settings: ClusterSetting[];
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
  containerInstances: string[];
  status: ContainerInstanceStatus;
}
export interface UpdateContainerInstancesStateResponse {
  containerInstances?: ContainerInstance[];
  failures?: Failure[];
}
export interface UpdateDaemonRequest {
  daemonArn: string;
  daemonTaskDefinitionArn: string;
  capacityProviderArns: string[];
  deploymentConfiguration?: DaemonDeploymentConfiguration;
  propagateTags?: DaemonPropagateTags;
  enableECSManagedTags?: boolean;
  enableExecuteCommand?: boolean;
  critical?: boolean;
}
export interface UpdateDaemonResponse {
  daemonArn?: string;
  status?: DaemonStatus;
  createdAt?: Date;
  updatedAt?: Date;
  deploymentArn?: string;
}
export interface UpdateExpressGatewayServiceRequest {
  serviceArn: string;
  executionRoleArn?: string;
  healthCheckPath?: string;
  primaryContainer?: ExpressGatewayContainer;
  taskRoleArn?: string;
  networkConfiguration?: ExpressGatewayServiceNetworkConfiguration;
  cpu?: string;
  memory?: string;
  cpuArchitecture?: ExpressCpuArchitecture;
  scalingTarget?: ExpressGatewayScalingTarget;
  taskDefinitionArn?: string;
}
export interface UpdatedExpressGatewayService {
  serviceArn?: string;
  cluster?: string;
  serviceName?: string;
  status?: ExpressGatewayServiceStatus;
  targetConfiguration?: ExpressGatewayServiceConfiguration;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UpdateExpressGatewayServiceResponse {
  service?: UpdatedExpressGatewayService;
}
export interface UpdateServiceRequest {
  cluster?: string;
  service: string;
  desiredCount?: number;
  taskDefinition?: string;
  capacityProviderStrategy?: CapacityProviderStrategyItem[];
  deploymentConfiguration?: DeploymentConfiguration;
  availabilityZoneRebalancing?: AvailabilityZoneRebalancing;
  networkConfiguration?: NetworkConfiguration;
  placementConstraints?: PlacementConstraint[];
  placementStrategy?: PlacementStrategy[];
  platformVersion?: string;
  forceNewDeployment?: boolean;
  healthCheckGracePeriodSeconds?: number;
  deploymentController?: DeploymentController;
  enableExecuteCommand?: boolean;
  enableECSManagedTags?: boolean;
  loadBalancers?: LoadBalancer[];
  propagateTags?: PropagateTags;
  serviceRegistries?: ServiceRegistry[];
  serviceConnectConfiguration?: ServiceConnectConfiguration;
  volumeConfigurations?: ServiceVolumeConfiguration[];
  vpcLatticeConfigurations?: VpcLatticeConfiguration[];
  monitoring?: MonitoringConfiguration;
}
export interface UpdateServiceResponse {
  service?: Service;
}
export interface UpdateServicePrimaryTaskSetRequest {
  cluster: string;
  service: string;
  primaryTaskSet: string;
}
export interface UpdateServicePrimaryTaskSetResponse {
  taskSet?: TaskSet;
}
export interface UpdateTaskProtectionRequest {
  cluster: string;
  tasks: string[];
  protectionEnabled: boolean;
  expiresInMinutes?: number;
}
export interface UpdateTaskProtectionResponse {
  protectedTasks?: ProtectedTask[];
  failures?: Failure[];
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
export type ResourceIds = string[];
export type ContinueServiceDeploymentError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | ServiceDeploymentNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Continues or rolls back an Amazon ECS service deployment that is paused at a lifecycle hook.
 *
 * When a service deployment reaches a lifecycle stage that has a `PAUSE` hook configured, the deployment pauses and waits for an explicit action. Use this API to either continue the deployment to the next stage or roll back to the previous service revision.
 *
 * To find the `hookId` of the paused hook, call DescribeServiceDeployments and inspect the `lifecycleHookDetails` field.
 *
 * For more information, see Continuing Amazon ECS service deployments in the *Amazon Elastic Container Service Developer Guide*.
 */
export const continueServiceDeployment: API.OperationMethod<
  ContinueServiceDeploymentRequest,
  ContinueServiceDeploymentResponse,
  ContinueServiceDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<ContinueServiceDeploymentRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<ContinueServiceDeploymentResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    InvalidParameterException,
    ServerException,
    ServiceDeploymentNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ContinueServiceDeployment",
}));

export type CreateCapacityProviderError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | UnsupportedFeatureException
  | UpdateInProgressException
  | CommonErrors;
/**
 * Creates a capacity provider. Capacity providers are associated with a cluster and are used in capacity provider strategies to facilitate cluster auto scaling. You can create capacity providers for Amazon ECS Managed Instances and EC2 instances. Fargate has the predefined `FARGATE` and `FARGATE_SPOT` capacity providers.
 */
export const createCapacityProvider: API.OperationMethod<
  CreateCapacityProviderRequest,
  CreateCapacityProviderResponse,
  CreateCapacityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<CreateCapacityProviderRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<CreateCapacityProviderResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    LimitExceededException,
    ServerException,
    UnsupportedFeatureException,
    UpdateInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCapacityProvider",
}));

export type CreateClusterError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | NamespaceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Creates a new Amazon ECS cluster. By default, your account receives a `default` cluster when you launch your first container instance. However, you can create your own cluster with a unique name.
 *
 * When you call the CreateCluster API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see Using service-linked roles for Amazon ECS in the *Amazon Elastic Container Service Developer Guide*.
 */
export const createCluster: API.OperationMethod<
  CreateClusterRequest,
  CreateClusterResponse,
  CreateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<CreateClusterRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<CreateClusterResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    InvalidParameterException,
    NamespaceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCluster",
}));

export type CreateDaemonError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | PlatformUnknownException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Creates a new daemon in the specified cluster and capacity providers. A daemon deploys cross-cutting software agents such as security monitoring, telemetry, and logging independently across your Amazon ECS infrastructure.
 *
 * Amazon ECS deploys exactly one daemon task on each container instance of the specified capacity providers. When a container instance registers with the cluster, Amazon ECS automatically starts daemon tasks. Amazon ECS starts a daemon task before scheduling other tasks.
 *
 * Daemons are essential for instance health - if a daemon task stops, Amazon ECS automatically drains and replaces that container instance.
 *
 * ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.
 */
export const createDaemon: API.OperationMethod<
  CreateDaemonRequest,
  CreateDaemonResponse,
  CreateDaemonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<CreateDaemonRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<CreateDaemonResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    PlatformUnknownException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDaemon",
}));

export type CreateExpressGatewayServiceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | PlatformTaskDefinitionIncompatibilityException
  | PlatformUnknownException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Creates an Express service that simplifies deploying containerized web applications on Amazon ECS with managed Amazon Web Services infrastructure. This operation provisions and configures Application Load Balancers, target groups, security groups, and auto-scaling policies automatically.
 *
 * Specify a primary container configuration with your application image and basic settings. Amazon ECS creates the necessary Amazon Web Services resources for traffic distribution, health monitoring, network access control, and capacity management.
 *
 * Provide an execution role for task operations and an infrastructure role for managing Amazon Web Services resources on your behalf.
 */
export const createExpressGatewayService: API.OperationMethod<
  CreateExpressGatewayServiceRequest,
  CreateExpressGatewayServiceResponse,
  CreateExpressGatewayServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<CreateExpressGatewayServiceRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<CreateExpressGatewayServiceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    PlatformTaskDefinitionIncompatibilityException,
    PlatformUnknownException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExpressGatewayService",
}));

export type CreateServiceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | NamespaceNotFoundException
  | PlatformTaskDefinitionIncompatibilityException
  | PlatformUnknownException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the `desiredCount`, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, use UpdateService.
 *
 * On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.
 *
 * Amazon Elastic Inference (EI) is no longer available to customers.
 *
 * In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see Service load balancing in the *Amazon Elastic Container Service Developer Guide*.
 *
 * You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. `volumeConfigurations` is only supported for REPLICA service and not DAEMON service. For more information, see Amazon EBS volumes in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Tasks for services that don't use a load balancer are considered healthy if they're in the `RUNNING` state. Tasks for services that use a load balancer are considered healthy if they're in the `RUNNING` state and are reported as healthy by the load balancer.
 *
 * There are two service scheduler strategies available:
 *
 * - `REPLICA` - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see Service scheduler concepts in the *Amazon Elastic Container Service Developer Guide*.
 *
 * - `DAEMON` - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see Amazon ECS services in the *Amazon Elastic Container Service Developer Guide*.
 *
 * The deployment controller is the mechanism that determines how tasks are deployed for your service. The valid options are:
 *
 * - ECS
 *
 * When you create a service which uses the `ECS` deployment controller, you can choose between the following deployment strategies (which you can set in the "`strategy`" field in "`deploymentConfiguration`"): :
 *
 * - `ROLLING`: When you create a service which uses the *rolling update* (`ROLLING`) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration. For more information, see Deploy Amazon ECS services by replacing tasks in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Rolling update deployments are best suited for the following scenarios:
 *
 * - Gradual service updates: You need to update your service incrementally without taking the entire service offline at once.
 *
 * - Limited resource requirements: You want to avoid the additional resource costs of running two complete environments simultaneously (as required by blue/green deployments).
 *
 * - Acceptable deployment time: Your application can tolerate a longer deployment process, as rolling updates replace tasks one by one.
 *
 * - No need for instant roll back: Your service can tolerate a rollback process that takes minutes rather than seconds.
 *
 * - Simple deployment process: You prefer a straightforward deployment approach without the complexity of managing multiple environments, target groups, and listeners.
 *
 * - No load balancer requirement: Your service doesn't use or require a load balancer, Application Load Balancer, Network Load Balancer, or Service Connect (which are required for blue/green deployments).
 *
 * - Stateful applications: Your application maintains state that makes it difficult to run two parallel environments.
 *
 * - Cost sensitivity: You want to minimize deployment costs by not running duplicate environments during deployment.
 *
 * Rolling updates are the default deployment strategy for services and provide a balance between deployment safety and resource efficiency for many common application scenarios.
 *
 * - `BLUE_GREEN`: A *blue/green* deployment strategy (`BLUE_GREEN`) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed. For more information, see Amazon ECS blue/green deployments in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Amazon ECS blue/green deployments are best suited for the following scenarios:
 *
 * - Service validation: When you need to validate new service revisions before directing production traffic to them
 *
 * - Zero downtime: When your service requires zero-downtime deployments
 *
 * - Instant roll back: When you need the ability to quickly roll back if issues are detected
 *
 * - Load balancer requirement: When your service uses Application Load Balancer, Network Load Balancer, or Service Connect
 *
 * - `LINEAR`: A *linear* deployment strategy (`LINEAR`) gradually shifts traffic from the current production environment to a new environment in equal percentage increments. With Amazon ECS linear deployments, you can control the pace of traffic shifting and validate new service revisions with increasing amounts of production traffic.
 *
 * Linear deployments are best suited for the following scenarios:
 *
 * - Gradual validation: When you want to gradually validate your new service version with increasing traffic
 *
 * - Performance monitoring: When you need time to monitor metrics and performance during the deployment
 *
 * - Risk minimization: When you want to minimize risk by exposing the new version to production traffic incrementally
 *
 * - Load balancer requirement: When your service uses Application Load Balancer or Service Connect
 *
 * - `CANARY`: A *canary* deployment strategy (`CANARY`) shifts a small percentage of traffic to the new service revision first, then shifts the remaining traffic all at once after a specified time period. This allows you to test the new version with a subset of users before full deployment.
 *
 * Canary deployments are best suited for the following scenarios:
 *
 * - Feature testing: When you want to test new features with a small subset of users before full rollout
 *
 * - Production validation: When you need to validate performance and functionality with real production traffic
 *
 * - Blast radius control: When you want to minimize blast radius if issues are discovered in the new version
 *
 * - Load balancer requirement: When your service uses Application Load Balancer or Service Connect
 *
 * - External
 *
 * Use a third-party deployment controller.
 *
 * - Blue/green deployment (powered by CodeDeploy)
 *
 * CodeDeploy installs an updated version of the application as a new replacement task set and reroutes production traffic from the original application task set to the replacement task set. The original task set is terminated after a successful deployment. Use this deployment controller to verify a new deployment of a service before sending production traffic to it.
 *
 * When creating a service that uses the `EXTERNAL` deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the CreateTaskSet. For more information, see Amazon ECS deployment types in the *Amazon Elastic Container Service Developer Guide*.
 *
 * When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see Amazon ECS task placement in the *Amazon Elastic Container Service Developer Guide*
 */
export const createService: API.OperationMethod<
  CreateServiceRequest,
  CreateServiceResponse,
  CreateServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<CreateServiceRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<CreateServiceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    NamespaceNotFoundException,
    PlatformTaskDefinitionIncompatibilityException,
    PlatformUnknownException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateService",
}));

export type CreateTaskSetError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | LimitExceededException
  | NamespaceNotFoundException
  | PlatformTaskDefinitionIncompatibilityException
  | PlatformUnknownException
  | ServerException
  | ServiceNotActiveException
  | ServiceNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Create a task set in the specified cluster and service. This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see Amazon ECS deployment types in the *Amazon Elastic Container Service Developer Guide*.
 *
 * On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.
 *
 * For information about the maximum number of task sets and other quotas, see Amazon ECS service quotas in the *Amazon Elastic Container Service Developer Guide*.
 */
export const createTaskSet: API.OperationMethod<
  CreateTaskSetRequest,
  CreateTaskSetResponse,
  CreateTaskSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<CreateTaskSetRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<CreateTaskSetResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    LimitExceededException,
    NamespaceNotFoundException,
    PlatformTaskDefinitionIncompatibilityException,
    PlatformUnknownException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTaskSet",
}));

export type DeleteAccountSettingError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Disables an account setting for a specified user, role, or the root user for an account.
 */
export const deleteAccountSetting: API.OperationMethod<
  DeleteAccountSettingRequest,
  DeleteAccountSettingResponse,
  DeleteAccountSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<DeleteAccountSettingRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<DeleteAccountSettingResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountSetting",
}));

export type DeleteAttributesError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | TargetNotFoundException
  | CommonErrors;
/**
 * Deletes one or more custom attributes from an Amazon ECS resource.
 */
export const deleteAttributes: API.OperationMethod<
  DeleteAttributesRequest,
  DeleteAttributesResponse,
  DeleteAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<DeleteAttributesRequest>,
  output: __S(132, __c16, 4) as any as S.Schema<DeleteAttributesResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    TargetNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAttributes",
}));

export type DeleteCapacityProviderError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | UpdateInProgressException
  | CommonErrors;
/**
 * Deletes the specified capacity provider.
 *
 * The `FARGATE` and `FARGATE_SPOT` capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either PutClusterCapacityProviders or by deleting the cluster.
 *
 * Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The UpdateService API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the `forceNewDeployment` option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use PutClusterCapacityProviders or delete the cluster.
 */
export const deleteCapacityProvider: API.OperationMethod<
  DeleteCapacityProviderRequest,
  DeleteCapacityProviderResponse,
  DeleteCapacityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<DeleteCapacityProviderRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<DeleteCapacityProviderResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
    UpdateInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCapacityProvider",
}));

export type DeleteClusterError =
  | AccessDeniedException
  | ClientException
  | ClusterContainsCapacityProviderException
  | ClusterContainsContainerInstancesException
  | ClusterContainsServicesException
  | ClusterContainsTasksException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UpdateInProgressException
  | CommonErrors;
/**
 * Deletes the specified cluster. The cluster transitions to the `INACTIVE` state. Clusters with an `INACTIVE` status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on `INACTIVE` clusters persisting.
 *
 * You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance.
 */
export const deleteCluster: API.OperationMethod<
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<DeleteClusterRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<DeleteClusterResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterContainsCapacityProviderException,
    ClusterContainsContainerInstancesException,
    ClusterContainsServicesException,
    ClusterContainsTasksException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UpdateInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCluster",
}));

export type DeleteDaemonError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | DaemonNotActiveException
  | DaemonNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Deletes the specified daemon. The daemon must be in an `ACTIVE` state to be deleted. Deleting a daemon stops all running daemon tasks on the associated container instances. Amazon ECS drains existing container instances and provisions new instances without the deleted daemon. Amazon ECS automatically launches replacement tasks for your Amazon ECS services.
 *
 * ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.
 */
export const deleteDaemon: API.OperationMethod<
  DeleteDaemonRequest,
  DeleteDaemonResponse,
  DeleteDaemonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135, __c16, 7) as any as S.Schema<DeleteDaemonRequest>,
  output: __S(136, __c17, 0) as any as S.Schema<DeleteDaemonResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    DaemonNotActiveException,
    DaemonNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDaemon",
}));

export type DeleteDaemonTaskDefinitionError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Deletes the specified daemon task definition. After a daemon task definition is deleted, no new daemons can be created using this definition. Existing daemons that reference the deleted daemon task definition continue to run.
 *
 * A daemon task definition must be in an `ACTIVE` state to be deleted.
 */
export const deleteDaemonTaskDefinition: API.OperationMethod<
  DeleteDaemonTaskDefinitionRequest,
  DeleteDaemonTaskDefinitionResponse,
  DeleteDaemonTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<DeleteDaemonTaskDefinitionRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<DeleteDaemonTaskDefinitionResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDaemonTaskDefinition",
}));

export type DeleteExpressGatewayServiceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotActiveException
  | ServiceNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Deletes an Express service and removes all associated Amazon Web Services resources. This operation stops service tasks, removes the Application Load Balancer, target groups, security groups, auto-scaling policies, and other managed infrastructure components.
 *
 * The service enters a `DRAINING` state where existing tasks complete current requests without starting new tasks. After all tasks stop, the service and infrastructure are permanently removed.
 *
 * This operation cannot be reversed. Back up important data and verify the service is no longer needed before deletion.
 */
export const deleteExpressGatewayService: API.OperationMethod<
  DeleteExpressGatewayServiceRequest,
  DeleteExpressGatewayServiceResponse,
  DeleteExpressGatewayServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<DeleteExpressGatewayServiceRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DeleteExpressGatewayServiceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExpressGatewayService",
}));

export type DeleteServiceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotFoundException
  | CommonErrors;
/**
 * Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService.
 *
 * When you delete a service, if there are still running tasks that require cleanup, the service status moves from `ACTIVE` to `DRAINING`, and the service is no longer visible in the console or in the ListServices API operation. After all tasks have transitioned to either `STOPPING` or `STOPPED` status, the service status moves from `DRAINING` to `INACTIVE`. Services in the `DRAINING` or `INACTIVE` status can still be viewed with the DescribeServices API operation. However, in the future, `INACTIVE` services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices calls on those services return a `ServiceNotFoundException` error.
 *
 * If you attempt to create a new service with the same name as an existing service in either `ACTIVE` or `DRAINING` status, you receive an error.
 */
export const deleteService: API.OperationMethod<
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeleteServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140, __c17, 4) as any as S.Schema<DeleteServiceRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<DeleteServiceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteService",
}));

export type DeleteTaskDefinitionsError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Deletes one or more task definitions.
 *
 * You must deregister a task definition revision before you delete it. For more information, see DeregisterTaskDefinition.
 *
 * When you delete a task definition revision, it is immediately transitions from the `INACTIVE` to `DELETE_IN_PROGRESS`. Existing tasks and services that reference a `DELETE_IN_PROGRESS` task definition revision continue to run without disruption. Existing services that reference a `DELETE_IN_PROGRESS` task definition revision can still scale up or down by modifying the service's desired count.
 *
 * You can't use a `DELETE_IN_PROGRESS` task definition revision to run new tasks or create new services. You also can't update an existing service to reference a `DELETE_IN_PROGRESS` task definition revision.
 *
 * A task definition revision will stay in `DELETE_IN_PROGRESS` status until all the associated tasks and services have been terminated.
 *
 * When you delete all `INACTIVE` task definition revisions, the task definition name is not displayed in the console and not returned in the API. If a task definition revisions are in the `DELETE_IN_PROGRESS` state, the task definition name is displayed in the console and returned in the API. The task definition name is retained by Amazon ECS and the revision is incremented the next time you create a task definition with that name.
 */
export const deleteTaskDefinitions: API.OperationMethod<
  DeleteTaskDefinitionsRequest,
  DeleteTaskDefinitionsResponse,
  DeleteTaskDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<DeleteTaskDefinitionsRequest>,
  output: __S(192, __c24, 0) as any as S.Schema<DeleteTaskDefinitionsResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTaskDefinitions",
}));

export type DeleteTaskSetError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | ServiceNotActiveException
  | ServiceNotFoundException
  | TaskSetNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Deletes a specified task set within a service. This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see Amazon ECS deployment types in the *Amazon Elastic Container Service Developer Guide*.
 */
export const deleteTaskSet: API.OperationMethod<
  DeleteTaskSetRequest,
  DeleteTaskSetResponse,
  DeleteTaskSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<DeleteTaskSetRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<DeleteTaskSetResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    LimitExceededException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    TaskSetNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTaskSet",
}));

export type DeregisterContainerInstanceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.
 *
 * If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.
 *
 * Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.
 *
 * If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).
 */
export const deregisterContainerInstance: API.OperationMethod<
  DeregisterContainerInstanceRequest,
  DeregisterContainerInstanceResponse,
  DeregisterContainerInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<DeregisterContainerInstanceRequest>,
  output: __S(202, __c25, 2) as any as S.Schema<DeregisterContainerInstanceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterContainerInstance",
}));

export type DeregisterTaskDefinitionError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as `INACTIVE`. Existing tasks and services that reference an `INACTIVE` task definition continue to run without disruption. Existing services that reference an `INACTIVE` task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.
 *
 * You can't use an `INACTIVE` task definition to run new tasks or create new services, and you can't update an existing service to reference an `INACTIVE` task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.
 *
 * At this time, `INACTIVE` task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on `INACTIVE` task definitions persisting beyond the lifecycle of any associated tasks and services.
 *
 * You must deregister a task definition revision before you delete it. For more information, see DeleteTaskDefinitions.
 */
export const deregisterTaskDefinition: API.OperationMethod<
  DeregisterTaskDefinitionRequest,
  DeregisterTaskDefinitionResponse,
  DeregisterTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<DeregisterTaskDefinitionRequest>,
  output: __S(204, __c25, 4) as any as S.Schema<DeregisterTaskDefinitionResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterTaskDefinition",
}));

export type DescribeCapacityProvidersError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Describes one or more of your capacity providers.
 */
export const describeCapacityProviders: API.OperationMethod<
  DescribeCapacityProvidersRequest,
  DescribeCapacityProvidersResponse,
  DescribeCapacityProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205, __c25, 5) as any as S.Schema<DescribeCapacityProvidersRequest>,
  output: __S(207, __c25, 7) as any as S.Schema<DescribeCapacityProvidersResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCapacityProviders",
}));

export type DescribeClustersError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Describes one or more of your clusters.
 *
 * For CLI examples, see describe-clusters.rst on GitHub.
 */
export const describeClusters: API.OperationMethod<
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<DescribeClustersRequest>,
  output: __S(210, __c26, 2) as any as S.Schema<DescribeClustersResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusters",
}));

export type DescribeContainerInstancesError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Describes one or more container instances. Returns metadata about each container instance requested.
 */
export const describeContainerInstances: API.OperationMethod<
  DescribeContainerInstancesRequest,
  DescribeContainerInstancesResponse,
  DescribeContainerInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211, __c26, 3) as any as S.Schema<DescribeContainerInstancesRequest>,
  output: __S(213, __c26, 5) as any as S.Schema<DescribeContainerInstancesResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeContainerInstances",
}));

export type DescribeDaemonError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | DaemonNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Describes the specified daemon.
 */
export const describeDaemon: API.OperationMethod<
  DescribeDaemonRequest,
  DescribeDaemonResponse,
  DescribeDaemonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(214, __c26, 6) as any as S.Schema<DescribeDaemonRequest>,
  output: __S(220, __c27, 4) as any as S.Schema<DescribeDaemonResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    DaemonNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDaemon",
}));

export type DescribeDaemonDeploymentsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Describes one or more of your daemon deployments.
 *
 * A daemon deployment orchestrates the progressive rollout of daemon task updates across container instances managed by the daemon's capacity providers. Each deployment includes circuit breaker and alarm-based rollback capabilities.
 */
export const describeDaemonDeployments: API.OperationMethod<
  DescribeDaemonDeploymentsRequest,
  DescribeDaemonDeploymentsResponse,
  DescribeDaemonDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(221, __c27, 5) as any as S.Schema<DescribeDaemonDeploymentsRequest>,
  output: __S(231, __c28, 7) as any as S.Schema<DescribeDaemonDeploymentsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDaemonDeployments",
}));

export type DescribeDaemonRevisionsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Describes one or more of your daemon revisions.
 *
 * A daemon revision is a snapshot of a daemon's configuration at the time a deployment was initiated. It captures the daemon task definition, container images, tag propagation, and execute command settings. Daemon revisions are immutable.
 */
export const describeDaemonRevisions: API.OperationMethod<
  DescribeDaemonRevisionsRequest,
  DescribeDaemonRevisionsResponse,
  DescribeDaemonRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(232, __c29, 0) as any as S.Schema<DescribeDaemonRevisionsRequest>,
  output: __S(237, __c29, 5) as any as S.Schema<DescribeDaemonRevisionsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDaemonRevisions",
}));

export type DescribeDaemonTaskDefinitionError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Describes a daemon task definition. You can specify a `family` and `revision` to find information about a specific daemon task definition, or you can simply specify the family to find the latest `ACTIVE` revision in that family.
 */
export const describeDaemonTaskDefinition: API.OperationMethod<
  DescribeDaemonTaskDefinitionRequest,
  DescribeDaemonTaskDefinitionResponse,
  DescribeDaemonTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(238, __c29, 6) as any as S.Schema<DescribeDaemonTaskDefinitionRequest>,
  output: __S(245, __c30, 5) as any as S.Schema<DescribeDaemonTaskDefinitionResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDaemonTaskDefinition",
}));

export type DescribeExpressGatewayServiceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Retrieves detailed information about an Express service, including current status, configuration, managed infrastructure, and service revisions.
 *
 * Returns comprehensive service details, active service revisions, ingress paths with endpoints, and managed Amazon Web Services resource status including load balancers and auto-scaling policies.
 *
 * Use the `include` parameter to retrieve additional information such as resource tags.
 */
export const describeExpressGatewayService: API.OperationMethod<
  DescribeExpressGatewayServiceRequest,
  DescribeExpressGatewayServiceResponse,
  DescribeExpressGatewayServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(246, __c30, 6) as any as S.Schema<DescribeExpressGatewayServiceRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<DescribeExpressGatewayServiceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExpressGatewayService",
}));

export type DescribeServiceDeploymentsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Describes one or more of your service deployments.
 *
 * A service deployment happens when you release a software update for the service. For more information, see View service history using Amazon ECS service deployments.
 */
export const describeServiceDeployments: API.OperationMethod<
  DescribeServiceDeploymentsRequest,
  DescribeServiceDeploymentsResponse,
  DescribeServiceDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(247, __c30, 7) as any as S.Schema<DescribeServiceDeploymentsRequest>,
  output: __S(256, __c32, 0) as any as S.Schema<DescribeServiceDeploymentsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServiceDeployments",
}));

export type DescribeServiceRevisionsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Describes one or more service revisions.
 *
 * A service revision is a version of the service that includes the values for the Amazon ECS resources (for example, task definition) and the environment resources (for example, load balancers, subnets, and security groups). For more information, see Amazon ECS service revisions.
 *
 * You can't describe a service revision that was created before October 25, 2024.
 */
export const describeServiceRevisions: API.OperationMethod<
  DescribeServiceRevisionsRequest,
  DescribeServiceRevisionsResponse,
  DescribeServiceRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(257, __c32, 1) as any as S.Schema<DescribeServiceRevisionsRequest>,
  output: __S(281, __c35, 1) as any as S.Schema<DescribeServiceRevisionsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServiceRevisions",
}));

export type DescribeServicesError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Describes the specified services running in your cluster.
 */
export const describeServices: API.OperationMethod<
  DescribeServicesRequest,
  DescribeServicesResponse,
  DescribeServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(282, __c35, 2) as any as S.Schema<DescribeServicesRequest>,
  output: __S(284, __c35, 4) as any as S.Schema<DescribeServicesResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServices",
}));

export type DescribeTaskDefinitionError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Describes a task definition. You can specify a `family` and `revision` to find information about a specific task definition, or you can simply specify the family to find the latest `ACTIVE` revision in that family.
 *
 * You can only describe `INACTIVE` task definitions while an active task or service references them.
 */
export const describeTaskDefinition: API.OperationMethod<
  DescribeTaskDefinitionRequest,
  DescribeTaskDefinitionResponse,
  DescribeTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285, __c35, 5) as any as S.Schema<DescribeTaskDefinitionRequest>,
  output: __S(286, __c35, 6) as any as S.Schema<DescribeTaskDefinitionResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTaskDefinition",
}));

export type DescribeTasksError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Describes a specified task or tasks.
 *
 * Currently, stopped tasks appear in the returned results for at least one hour.
 *
 * If you have tasks with tags, and then delete the cluster, the tagged tasks are returned in the response. If you create a new cluster with the same name as the deleted cluster, the tagged tasks are not included in the response.
 */
export const describeTasks: API.OperationMethod<
  DescribeTasksRequest,
  DescribeTasksResponse,
  DescribeTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<DescribeTasksRequest>,
  output: __S(304, __c38, 0) as any as S.Schema<DescribeTasksResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTasks",
}));

export type DescribeTaskSetsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotActiveException
  | ServiceNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Describes the task sets in the specified cluster and service. This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see Amazon ECS Deployment Types in the *Amazon Elastic Container Service Developer Guide*.
 */
export const describeTaskSets: API.OperationMethod<
  DescribeTaskSetsRequest,
  DescribeTaskSetsResponse,
  DescribeTaskSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305, __c38, 1) as any as S.Schema<DescribeTaskSetsRequest>,
  output: __S(306, __c38, 2) as any as S.Schema<DescribeTaskSetsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTaskSets",
}));

export type DiscoverPollEndpointError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.
 *
 * Returns an endpoint for the Amazon ECS agent to poll for updates.
 */
export const discoverPollEndpoint: API.OperationMethod<
  DiscoverPollEndpointRequest,
  DiscoverPollEndpointResponse,
  DiscoverPollEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(307, __c38, 3) as any as S.Schema<DiscoverPollEndpointRequest>,
  output: __S(308, __c38, 4) as any as S.Schema<DiscoverPollEndpointResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DiscoverPollEndpoint",
}));

export type ExecuteCommandError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | TargetNotConnectedException
  | CommonErrors;
/**
 * Runs a command remotely on a container within a task.
 *
 * If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an `AccessDeniedException` when there is a mismatch between the condition key value and the corresponding parameter value.
 *
 * For information about required permissions and considerations, see Using Amazon ECS Exec for debugging in the *Amazon ECS Developer Guide*.
 */
export const executeCommand: API.OperationMethod<
  ExecuteCommandRequest,
  ExecuteCommandResponse,
  ExecuteCommandError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(309, __c38, 5) as any as S.Schema<ExecuteCommandRequest>,
  output: __S(311, __c38, 7) as any as S.Schema<ExecuteCommandResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    TargetNotConnectedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteCommand",
}));

export type GetTaskProtectionError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Retrieves the protection status of tasks in an Amazon ECS service.
 */
export const getTaskProtection: API.OperationMethod<
  GetTaskProtectionRequest,
  GetTaskProtectionResponse,
  GetTaskProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(312, __c39, 0) as any as S.Schema<GetTaskProtectionRequest>,
  output: __S(315, __c39, 3) as any as S.Schema<GetTaskProtectionResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTaskProtection",
}));

export type ListAccountSettingsError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Lists the account settings for a specified principal.
 */
export const listAccountSettings: API.PaginatedOperationMethod<
  ListAccountSettingsRequest,
  ListAccountSettingsResponse,
  ListAccountSettingsError,
  Credentials | HttpClient.HttpClient,
  Setting
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(316, __c39, 4) as any as S.Schema<ListAccountSettingsRequest>,
  output: __S(318, __c39, 6) as any as S.Schema<ListAccountSettingsResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountSettings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "settings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAttributesError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, `ListAttributes` returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (`ecs.os-type=linux`).
 */
export const listAttributes: API.PaginatedOperationMethod<
  ListAttributesRequest,
  ListAttributesResponse,
  ListAttributesError,
  Credentials | HttpClient.HttpClient,
  Attribute
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(319, __c39, 7) as any as S.Schema<ListAttributesRequest>,
  output: __S(320, __c40, 0) as any as S.Schema<ListAttributesResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttributes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "attributes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListClustersError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Returns a list of existing clusters.
 */
export const listClusters: API.PaginatedOperationMethod<
  ListClustersRequest,
  ListClustersResponse,
  ListClustersError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(321, __c40, 1) as any as S.Schema<ListClustersRequest>,
  output: __S(322, __c40, 2) as any as S.Schema<ListClustersResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListClusters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "clusterArns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListContainerInstancesError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Returns a list of container instances in a specified cluster. You can filter the results of a `ListContainerInstances` operation with cluster query language statements inside the `filter` parameter. For more information, see Cluster Query Language in the *Amazon Elastic Container Service Developer Guide*.
 */
export const listContainerInstances: API.PaginatedOperationMethod<
  ListContainerInstancesRequest,
  ListContainerInstancesResponse,
  ListContainerInstancesError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(323, __c40, 3) as any as S.Schema<ListContainerInstancesRequest>,
  output: __S(324, __c40, 4) as any as S.Schema<ListContainerInstancesResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContainerInstances",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "containerInstanceArns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDaemonDeploymentsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Returns a list of daemon deployments for a specified daemon. You can filter the results by status or creation time.
 */
export const listDaemonDeployments: API.OperationMethod<
  ListDaemonDeploymentsRequest,
  ListDaemonDeploymentsResponse,
  ListDaemonDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<ListDaemonDeploymentsRequest>,
  output: __S(329, __c41, 1) as any as S.Schema<ListDaemonDeploymentsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDaemonDeployments",
}));

export type ListDaemonsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Returns a list of daemons. You can filter the results by cluster or capacity provider.
 */
export const listDaemons: API.OperationMethod<
  ListDaemonsRequest,
  ListDaemonsResponse,
  ListDaemonsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<ListDaemonsRequest>,
  output: __S(333, __c41, 5) as any as S.Schema<ListDaemonsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDaemons",
}));

export type ListDaemonTaskDefinitionsError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Returns a list of daemon task definitions that are registered to your account. You can filter the results by family name, status, or both to find daemon task definitions that match your criteria.
 */
export const listDaemonTaskDefinitions: API.OperationMethod<
  ListDaemonTaskDefinitionsRequest,
  ListDaemonTaskDefinitionsResponse,
  ListDaemonTaskDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<ListDaemonTaskDefinitionsRequest>,
  output: __S(337, __c42, 1) as any as S.Schema<ListDaemonTaskDefinitionsResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDaemonTaskDefinitions",
}));

export type ListServiceDeploymentsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * This operation lists all the service deployments that meet the specified filter criteria.
 *
 * A service deployment happens when you release a software update for the service. You route traffic from the running service revisions to the new service revison and control the number of running tasks.
 *
 * This API returns the values that you use for the request parameters in DescribeServiceRevisions.
 */
export const listServiceDeployments: API.OperationMethod<
  ListServiceDeploymentsRequest,
  ListServiceDeploymentsResponse,
  ListServiceDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(338, __c42, 2) as any as S.Schema<ListServiceDeploymentsRequest>,
  output: __S(341, __c42, 5) as any as S.Schema<ListServiceDeploymentsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceDeployments",
}));

export type ListServicesError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.
 */
export const listServices: API.PaginatedOperationMethod<
  ListServicesRequest,
  ListServicesResponse,
  ListServicesError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(342, __c42, 6) as any as S.Schema<ListServicesRequest>,
  output: __S(343, __c42, 7) as any as S.Schema<ListServicesResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "serviceArns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServicesByNamespaceError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | NamespaceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, `ListServices` can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use `ListServices`. For more information, see Service Connect in the *Amazon Elastic Container Service Developer Guide*.
 */
export const listServicesByNamespace: API.PaginatedOperationMethod<
  ListServicesByNamespaceRequest,
  ListServicesByNamespaceResponse,
  ListServicesByNamespaceError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(344, __c43, 0) as any as S.Schema<ListServicesByNamespaceRequest>,
  output: __S(345, __c43, 1) as any as S.Schema<ListServicesByNamespaceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    InvalidParameterException,
    NamespaceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServicesByNamespace",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "serviceArns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * List the tags for an Amazon ECS resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(346, __c43, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(347, __c43, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTaskDefinitionFamiliesError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any `ACTIVE` task definition revisions.
 *
 * You can filter out task definition families that don't contain any `ACTIVE` task definition revisions by setting the `status` parameter to `ACTIVE`. You can also filter the results with the `familyPrefix` parameter.
 */
export const listTaskDefinitionFamilies: API.PaginatedOperationMethod<
  ListTaskDefinitionFamiliesRequest,
  ListTaskDefinitionFamiliesResponse,
  ListTaskDefinitionFamiliesError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(348, __c43, 4) as any as S.Schema<ListTaskDefinitionFamiliesRequest>,
  output: __S(349, __c43, 5) as any as S.Schema<ListTaskDefinitionFamiliesResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTaskDefinitionFamilies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "families",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTaskDefinitionsError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Returns a list of task definitions that are registered to your account. You can filter the results by family name with the `familyPrefix` parameter or by status with the `status` parameter.
 */
export const listTaskDefinitions: API.PaginatedOperationMethod<
  ListTaskDefinitionsRequest,
  ListTaskDefinitionsResponse,
  ListTaskDefinitionsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(350, __c43, 6) as any as S.Schema<ListTaskDefinitionsRequest>,
  output: __S(351, __c43, 7) as any as S.Schema<ListTaskDefinitionsResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTaskDefinitions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taskDefinitionArns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTasksError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotFoundException
  | CommonErrors;
/**
 * Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.
 *
 * Recently stopped tasks might appear in the returned results.
 */
export const listTasks: API.PaginatedOperationMethod<
  ListTasksRequest,
  ListTasksResponse,
  ListTasksError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(352, __c44, 0) as any as S.Schema<ListTasksRequest>,
  output: __S(353, __c44, 1) as any as S.Schema<ListTasksResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taskArns",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutAccountSettingError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Modifies an account setting. Account settings are set on a per-Region basis.
 *
 * If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see Account Settings in the *Amazon Elastic Container Service Developer Guide*.
 */
export const putAccountSetting: API.OperationMethod<
  PutAccountSettingRequest,
  PutAccountSettingResponse,
  PutAccountSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(354, __c44, 2) as any as S.Schema<PutAccountSettingRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<PutAccountSettingResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountSetting",
}));

export type PutAccountSettingDefaultError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.
 */
export const putAccountSettingDefault: API.OperationMethod<
  PutAccountSettingDefaultRequest,
  PutAccountSettingDefaultResponse,
  PutAccountSettingDefaultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(355, __c44, 3) as any as S.Schema<PutAccountSettingDefaultRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<PutAccountSettingDefaultResponse>,
  errors: [AccessDeniedException, ClientException, InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountSettingDefault",
}));

export type PutAttributesError =
  | AccessDeniedException
  | AttributeLimitExceededException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | TargetNotFoundException
  | CommonErrors;
/**
 * Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use DeleteAttributes. For more information, see Attributes in the *Amazon Elastic Container Service Developer Guide*.
 */
export const putAttributes: API.OperationMethod<
  PutAttributesRequest,
  PutAttributesResponse,
  PutAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(356, __c44, 4) as any as S.Schema<PutAttributesRequest>,
  output: __S(132, __c16, 4) as any as S.Schema<PutAttributesResponse>,
  errors: [
    AccessDeniedException,
    AttributeLimitExceededException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    TargetNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAttributes",
}));

export type PutClusterCapacityProvidersError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ResourceInUseException
  | ServerException
  | UpdateInProgressException
  | CommonErrors;
/**
 * Modifies the available capacity providers and the default capacity provider strategy for a cluster.
 *
 * You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a PutClusterCapacityProviders API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.
 *
 * When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (`[]`) to bypass defining a default strategy.
 *
 * Amazon ECS Managed Instances doesn't support this, because when you create a capacity provider with Amazon ECS Managed Instances, it becomes available only within the specified cluster.
 */
export const putClusterCapacityProviders: API.OperationMethod<
  PutClusterCapacityProvidersRequest,
  PutClusterCapacityProvidersResponse,
  PutClusterCapacityProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(357, __c44, 5) as any as S.Schema<PutClusterCapacityProvidersRequest>,
  output: __S(358, __c44, 6) as any as S.Schema<PutClusterCapacityProvidersResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ResourceInUseException,
    ServerException,
    UpdateInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutClusterCapacityProviders",
}));

export type RegisterContainerInstanceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.
 *
 * Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.
 */
export const registerContainerInstance: API.OperationMethod<
  RegisterContainerInstanceRequest,
  RegisterContainerInstanceResponse,
  RegisterContainerInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(361, __c45, 1) as any as S.Schema<RegisterContainerInstanceRequest>,
  output: __S(202, __c25, 2) as any as S.Schema<RegisterContainerInstanceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterContainerInstance",
}));

export type RegisterDaemonTaskDefinitionError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | CommonErrors;
/**
 * Registers a new daemon task definition from the supplied `family` and `containerDefinitions`. Optionally, you can add data volumes to your containers with the `volumes` parameter. For more information, see Daemon task definitions in the *Amazon Elastic Container Service Developer Guide*.
 *
 * A daemon task definition is a template that describes the containers that form a daemon. Daemons deploy cross-cutting software agents such as security monitoring, telemetry, and logging across your Amazon ECS infrastructure.
 *
 * Each time you call `RegisterDaemonTaskDefinition`, a new revision of the daemon task definition is created. You can't modify a revision after you register it.
 */
export const registerDaemonTaskDefinition: API.OperationMethod<
  RegisterDaemonTaskDefinitionRequest,
  RegisterDaemonTaskDefinitionResponse,
  RegisterDaemonTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(362, __c45, 2) as any as S.Schema<RegisterDaemonTaskDefinitionRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<RegisterDaemonTaskDefinitionResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    InvalidParameterException,
    LimitExceededException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterDaemonTaskDefinition",
}));

export type RegisterTaskDefinitionError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | CommonErrors;
/**
 * Registers a new task definition from the supplied `family` and `containerDefinitions`. Optionally, you can add data volumes to your containers with the `volumes` parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the *Amazon Elastic Container Service Developer Guide*.
 *
 * You can specify a role for your task with the `taskRoleArn` parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see IAM Roles for Tasks in the *Amazon Elastic Container Service Developer Guide*.
 *
 * You can specify a Docker networking mode for the containers in your task definition with the `networkMode` parameter. If you specify the `awsvpc` network mode, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration when you create a service or run a task with the task definition. For more information, see Task Networking in the *Amazon Elastic Container Service Developer Guide*.
 */
export const registerTaskDefinition: API.OperationMethod<
  RegisterTaskDefinitionRequest,
  RegisterTaskDefinitionResponse,
  RegisterTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(363, __c45, 3) as any as S.Schema<RegisterTaskDefinitionRequest>,
  output: __S(286, __c35, 6) as any as S.Schema<RegisterTaskDefinitionResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    InvalidParameterException,
    LimitExceededException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterTaskDefinition",
}));

export type RunTaskError =
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
  | CommonErrors;
/**
 * Starts a new task using the specified task definition.
 *
 * On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.
 *
 * Amazon Elastic Inference (EI) is no longer available to customers.
 *
 * You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Alternatively, you can use `StartTask` to use your own scheduler or place tasks manually on specific container instances.
 *
 * You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more information, see Amazon EBS volumes in the *Amazon Elastic Container Service Developer Guide*.
 *
 * The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.
 *
 * To manage eventual consistency, you can do the following:
 *
 * - Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.
 *
 * - Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.
 *
 * If you get a `ConflictException` error, the `RunTask` request could not be processed due to conflicts. The provided `clientToken` is already in use with a different `RunTask` request. The `resourceIds` are the existing task ARNs which are already associated with the `clientToken`.
 *
 * To fix this issue:
 *
 * - Run `RunTask` with a unique `clientToken`.
 *
 * - Run `RunTask` with the `clientToken` and the original set of parameters
 *
 * If you get a `ClientException`error, the `RunTask` could not be processed because you use managed scaling and there is a capacity error because the quota of tasks in the `PROVISIONING` per cluster has been reached. For information about the service quotas, see Amazon ECS service quotas.
 */
export const runTask: API.OperationMethod<
  RunTaskRequest,
  RunTaskResponse,
  RunTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(368, __c46, 0) as any as S.Schema<RunTaskRequest>,
  output: __S(304, __c38, 0) as any as S.Schema<RunTaskResponse>,
  errors: [
    AccessDeniedException,
    BlockedException,
    ClientException,
    ClusterNotFoundException,
    ConflictException,
    InvalidParameterException,
    PlatformTaskDefinitionIncompatibilityException,
    PlatformUnknownException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RunTask",
}));

export type StartTaskError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | NamespaceNotFoundException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Starts a new task from the specified task definition on the specified container instance or instances.
 *
 * On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.
 *
 * Amazon Elastic Inference (EI) is no longer available to customers.
 *
 * Alternatively, you can use`RunTask` to place tasks for you. For more information, see Scheduling Tasks in the *Amazon Elastic Container Service Developer Guide*.
 *
 * You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more information, see Amazon EBS volumes in the *Amazon Elastic Container Service Developer Guide*.
 */
export const startTask: API.OperationMethod<
  StartTaskRequest,
  StartTaskResponse,
  StartTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(369, __c46, 1) as any as S.Schema<StartTaskRequest>,
  output: __S(304, __c38, 0) as any as S.Schema<StartTaskResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    NamespaceNotFoundException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTask",
}));

export type StopServiceDeploymentError =
  | AccessDeniedException
  | ClientException
  | ConflictException
  | InvalidParameterException
  | ServerException
  | ServiceDeploymentNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Stops an ongoing service deployment.
 *
 * The following stop types are avaiable:
 *
 * - ROLLBACK - This option rolls back the service deployment to the previous service revision.
 *
 * You can use this option even if you didn't configure the service deployment for the rollback option.
 *
 * For more information, see Stopping Amazon ECS service deployments in the *Amazon Elastic Container Service Developer Guide*.
 */
export const stopServiceDeployment: API.OperationMethod<
  StopServiceDeploymentRequest,
  StopServiceDeploymentResponse,
  StopServiceDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(370, __c46, 2) as any as S.Schema<StopServiceDeploymentRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<StopServiceDeploymentResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ConflictException,
    InvalidParameterException,
    ServerException,
    ServiceDeploymentNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopServiceDeployment",
}));

export type StopTaskError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Stops a running task. Any tags associated with the task will be deleted.
 *
 * When you call `StopTask` on a task, the equivalent of `docker stop` is issued to the containers running in the task. This results in a stop signal value and a default 30-second timeout, after which the `SIGKILL` value is sent and the containers are forcibly stopped. This signal can be defined in your container image with the `STOPSIGNAL` instruction and will default to `SIGTERM`. If the container handles the `SIGTERM` value gracefully and exits within 30 seconds from receiving it, no `SIGKILL` value is sent.
 *
 * For Windows containers, POSIX signals do not work and runtime stops the container by sending a `CTRL_SHUTDOWN_EVENT`. For more information, see Unable to react to graceful shutdown of (Windows) container #25982 on GitHub.
 *
 * The default 30-second timeout can be configured on the Amazon ECS container agent with the `ECS_CONTAINER_STOP_TIMEOUT` variable. For more information, see Amazon ECS Container Agent Configuration in the *Amazon Elastic Container Service Developer Guide*.
 */
export const stopTask: API.OperationMethod<
  StopTaskRequest,
  StopTaskResponse,
  StopTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(371, __c46, 3) as any as S.Schema<StopTaskRequest>,
  output: __S(372, __c46, 4) as any as S.Schema<StopTaskResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopTask",
}));

export type SubmitAttachmentStateChangesError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.
 *
 * Sent to acknowledge that an attachment changed states.
 */
export const submitAttachmentStateChanges: API.OperationMethod<
  SubmitAttachmentStateChangesRequest,
  SubmitAttachmentStateChangesResponse,
  SubmitAttachmentStateChangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(375, __c46, 7) as any as S.Schema<SubmitAttachmentStateChangesRequest>,
  output: __S(376, __c47, 0) as any as S.Schema<SubmitAttachmentStateChangesResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitAttachmentStateChanges",
}));

export type SubmitContainerStateChangeError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.
 *
 * Sent to acknowledge that a container changed states.
 */
export const submitContainerStateChange: API.OperationMethod<
  SubmitContainerStateChangeRequest,
  SubmitContainerStateChangeResponse,
  SubmitContainerStateChangeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(377, __c47, 1) as any as S.Schema<SubmitContainerStateChangeRequest>,
  output: __S(376, __c47, 0) as any as S.Schema<SubmitContainerStateChangeResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitContainerStateChange",
}));

export type SubmitTaskStateChangeError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.
 *
 * Sent to acknowledge that a task changed states.
 */
export const submitTaskStateChange: API.OperationMethod<
  SubmitTaskStateChangeRequest,
  SubmitTaskStateChangeResponse,
  SubmitTaskStateChangeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(382, __c47, 6) as any as S.Schema<SubmitTaskStateChangeRequest>,
  output: __S(376, __c47, 0) as any as S.Schema<SubmitTaskStateChangeResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitTaskStateChange",
}));

export type TagResourceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Associates the specified tags to a resource with the specified `resourceArn`. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(383, __c47, 7) as any as S.Schema<TagResourceRequest>,
  output: __S(384, __c48, 0) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes specified tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(385, __c48, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(384, __c48, 0) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCapacityProviderError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Modifies the parameters for a capacity provider.
 *
 * These changes only apply to new Amazon ECS Managed Instances, or EC2 instances, not existing ones.
 */
export const updateCapacityProvider: API.OperationMethod<
  UpdateCapacityProviderRequest,
  UpdateCapacityProviderResponse,
  UpdateCapacityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(389, __c48, 5) as any as S.Schema<UpdateCapacityProviderRequest>,
  output: __S(24, __c3, 0) as any as S.Schema<UpdateCapacityProviderResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCapacityProvider",
}));

export type UpdateClusterError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | NamespaceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates the cluster.
 */
export const updateCluster: API.OperationMethod<
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(390, __c48, 6) as any as S.Schema<UpdateClusterRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<UpdateClusterResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    NamespaceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCluster",
}));

export type UpdateClusterSettingsError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | UpdateInProgressException
  | CommonErrors;
/**
 * Modifies the settings to use for a cluster.
 */
export const updateClusterSettings: API.OperationMethod<
  UpdateClusterSettingsRequest,
  UpdateClusterSettingsResponse,
  UpdateClusterSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(391, __c48, 7) as any as S.Schema<UpdateClusterSettingsRequest>,
  output: __S(358, __c44, 6) as any as S.Schema<UpdateClusterSettingsResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    UpdateInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateClusterSettings",
}));

export type UpdateContainerAgentError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | MissingVersionException
  | NoUpdateAvailableException
  | ServerException
  | UpdateInProgressException
  | CommonErrors;
/**
 * Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.
 *
 * The `UpdateContainerAgent` API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the `ecs-init` package. This updates the agent. For more information, see Updating the Amazon ECS container agent in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Agent updates with the `UpdateContainerAgent` API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.
 *
 * The `UpdateContainerAgent` API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the `ecs-init` service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually updating the Amazon ECS container agent in the *Amazon Elastic Container Service Developer Guide*.
 */
export const updateContainerAgent: API.OperationMethod<
  UpdateContainerAgentRequest,
  UpdateContainerAgentResponse,
  UpdateContainerAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(392, __c49, 0) as any as S.Schema<UpdateContainerAgentRequest>,
  output: __S(202, __c25, 2) as any as S.Schema<UpdateContainerAgentResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    MissingVersionException,
    NoUpdateAvailableException,
    ServerException,
    UpdateInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContainerAgent",
}));

export type UpdateContainerInstancesStateError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | CommonErrors;
/**
 * Modifies the status of an Amazon ECS container instance.
 *
 * Once a container instance has reached an `ACTIVE` state, you can change the status of a container instance to `DRAINING` to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.
 *
 * A container instance can't be changed to `DRAINING` until it has reached an `ACTIVE` status. If the instance is in any other status, an error will be received.
 *
 * When you set a container instance to `DRAINING`, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the `PENDING` state are stopped immediately.
 *
 * Service tasks on the container instance that are in the `RUNNING` state are stopped and replaced according to the service's deployment configuration parameters, `minimumHealthyPercent` and `maximumPercent`. You can change the deployment configuration of your service using UpdateService.
 *
 * - If `minimumHealthyPercent` is below 100%, the scheduler can ignore `desiredCount` temporarily during task replacement. For example, `desiredCount` is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the `RUNNING` state. Tasks for services that use a load balancer are considered healthy if they're in the `RUNNING` state and are reported as healthy by the load balancer.
 *
 * - The `maximumPercent` parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if `desiredCount` is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.
 *
 * Any `PENDING` or `RUNNING` tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.
 *
 * A container instance has completed draining when it has no more `RUNNING` tasks. You can verify this using ListTasks.
 *
 * When a container instance has been drained, you can set a container instance to `ACTIVE` status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.
 */
export const updateContainerInstancesState: API.OperationMethod<
  UpdateContainerInstancesStateRequest,
  UpdateContainerInstancesStateResponse,
  UpdateContainerInstancesStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(393, __c49, 1) as any as S.Schema<UpdateContainerInstancesStateRequest>,
  output: __S(213, __c26, 5) as any as S.Schema<UpdateContainerInstancesStateResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContainerInstancesState",
}));

export type UpdateDaemonError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | DaemonNotActiveException
  | DaemonNotFoundException
  | InvalidParameterException
  | PlatformUnknownException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Updates the specified daemon. When you update a daemon, a new deployment is triggered that progressively rolls out the changes to the container instances associated with the daemon's capacity providers. For more information, see Daemon deployments in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Amazon ECS drains existing container instances and provisions new instances with the updated daemon. Amazon ECS automatically launches replacement tasks for your services.
 *
 * Updating a daemon triggers a rolling deployment that drains and replaces container instances. Plan updates during maintenance windows to minimize impact on running services.
 *
 * ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.
 */
export const updateDaemon: API.OperationMethod<
  UpdateDaemonRequest,
  UpdateDaemonResponse,
  UpdateDaemonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(394, __c49, 2) as any as S.Schema<UpdateDaemonRequest>,
  output: __S(136, __c17, 0) as any as S.Schema<UpdateDaemonResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    DaemonNotActiveException,
    DaemonNotFoundException,
    InvalidParameterException,
    PlatformUnknownException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDaemon",
}));

export type UpdateExpressGatewayServiceError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotActiveException
  | ServiceNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Updates an existing Express service configuration. Modifies container settings, resource allocation, auto-scaling configuration, and other service parameters without recreating the service.
 *
 * Amazon ECS creates a new service revision with updated configuration and performs a rolling deployment to replace existing tasks. The service remains available during updates, ensuring zero-downtime deployments.
 *
 * Some parameters like the infrastructure role cannot be modified after service creation and require creating a new service.
 */
export const updateExpressGatewayService: API.OperationMethod<
  UpdateExpressGatewayServiceRequest,
  UpdateExpressGatewayServiceResponse,
  UpdateExpressGatewayServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(395, __c49, 3) as any as S.Schema<UpdateExpressGatewayServiceRequest>,
  output: __S(397, __c49, 5) as any as S.Schema<UpdateExpressGatewayServiceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExpressGatewayService",
}));

export type UpdateServiceError =
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
  | CommonErrors;
/**
 * Modifies the parameters of a service.
 *
 * On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.
 *
 * For services using the rolling update (`ECS`) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration.
 *
 * You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more information, see Amazon EBS volumes in the *Amazon Elastic Container Service Developer Guide*. You can update your volume configurations and trigger a new deployment. `volumeConfigurations` is only supported for REPLICA service and not DAEMON service. If you leave `volumeConfigurations` `null`, it doesn't trigger a new deployment. For more information on volumes, see Amazon EBS volumes in the *Amazon Elastic Container Service Developer Guide*.
 *
 * For services using the blue/green (`CODE_DEPLOY`) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see CreateDeployment in the *CodeDeploy API Reference*.
 *
 * For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see CreateTaskSet.
 *
 * You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new `desiredCount` parameter.
 *
 * You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more information, see Amazon EBS volumes in the *Amazon Elastic Container Service Developer Guide*.
 *
 * If you have updated the container image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.
 *
 * If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, `my_image:latest`), you don't need to create a new revision of your task definition. You can update the service using the `forceNewDeployment` option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.
 *
 * You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, `minimumHealthyPercent` and `maximumPercent`, to determine the deployment strategy.
 *
 * - If `minimumHealthyPercent` is below 100%, the scheduler can ignore `desiredCount` temporarily during a deployment. For example, if `desiredCount` is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the `RUNNING` state. Tasks for services that use a load balancer are considered healthy if they're in the `RUNNING` state and are reported as healthy by the load balancer.
 *
 * - The `maximumPercent` parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if `desiredCount` is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).
 *
 * When UpdateService stops a task during a deployment, the equivalent of `docker stop` is issued to the containers running in the task. This results in a `SIGTERM` and a 30-second timeout. After this, `SIGKILL` is sent and the containers are forcibly stopped. If the container handles the `SIGTERM` gracefully and exits within 30 seconds from receiving it, no `SIGKILL` is sent.
 *
 * When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.
 *
 * - Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.
 *
 * - By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.
 *
 * - Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.
 *
 * - Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.
 *
 * When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic:
 *
 * - Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.
 *
 * - Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.
 */
export const updateService: API.OperationMethod<
  UpdateServiceRequest,
  UpdateServiceResponse,
  UpdateServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(398, __c49, 6) as any as S.Schema<UpdateServiceRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<UpdateServiceResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    NamespaceNotFoundException,
    PlatformTaskDefinitionIncompatibilityException,
    PlatformUnknownException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateService",
}));

export type UpdateServicePrimaryTaskSetError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ServerException
  | ServiceNotActiveException
  | ServiceNotFoundException
  | TaskSetNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see Amazon ECS Deployment Types in the *Amazon Elastic Container Service Developer Guide*.
 */
export const updateServicePrimaryTaskSet: API.OperationMethod<
  UpdateServicePrimaryTaskSetRequest,
  UpdateServicePrimaryTaskSetResponse,
  UpdateServicePrimaryTaskSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(399, __c49, 7) as any as S.Schema<UpdateServicePrimaryTaskSetRequest>,
  output: __S(400, __c50, 0) as any as S.Schema<UpdateServicePrimaryTaskSetResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    TaskSetNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServicePrimaryTaskSet",
}));

export type UpdateTaskProtectionError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Updates the protection status of a task. You can set `protectionEnabled` to `true` to protect your task from termination during scale-in events from Service Autoscaling or deployments.
 *
 * Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the `protectionEnabled` property making the task eligible for termination by a subsequent scale-in event.
 *
 * You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the `expiresInMinutes` property. The `expiresInMinutes` property is always reset when you invoke this operation for a task that already has `protectionEnabled` set to `true`. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.
 *
 * To learn more about Amazon ECS task protection, see Task scale-in protection in the * Amazon Elastic Container Service Developer Guide* .
 *
 * This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an `TASK_NOT_VALID` failure. For more information, see API failure reasons.
 *
 * If you prefer to set task protection from within the container, we recommend using the Task scale-in protection endpoint.
 */
export const updateTaskProtection: API.OperationMethod<
  UpdateTaskProtectionRequest,
  UpdateTaskProtectionResponse,
  UpdateTaskProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(401, __c50, 1) as any as S.Schema<UpdateTaskProtectionRequest>,
  output: __S(315, __c39, 3) as any as S.Schema<UpdateTaskProtectionResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTaskProtection",
}));

export type UpdateTaskSetError =
  | AccessDeniedException
  | ClientException
  | ClusterNotFoundException
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | ServiceNotActiveException
  | ServiceNotFoundException
  | TaskSetNotFoundException
  | UnsupportedFeatureException
  | CommonErrors;
/**
 * Modifies a task set. This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see Amazon ECS Deployment Types in the *Amazon Elastic Container Service Developer Guide*.
 */
export const updateTaskSet: API.OperationMethod<
  UpdateTaskSetRequest,
  UpdateTaskSetResponse,
  UpdateTaskSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(402, __c50, 2) as any as S.Schema<UpdateTaskSetRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<UpdateTaskSetResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ClusterNotFoundException,
    InvalidParameterException,
    LimitExceededException,
    ServerException,
    ServiceNotActiveException,
    ServiceNotFoundException,
    TaskSetNotFoundException,
    UnsupportedFeatureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTaskSet",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          serviceDeploymentArn: S.String,
          hookId: S.String,
          action: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ContinueServiceDeploymentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ serviceDeploymentArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ContinueServiceDeploymentResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          targetCapacity: S.optional(S.Number),
          minimumScalingStepSize: S.optional(S.Number),
          maximumScalingStepSize: S.optional(S.Number),
          instanceWarmupPeriod: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ManagedScaling" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          autoScalingGroupArn: S.String,
          managedScaling: S.optional(__S(2, __c0, 2)),
          managedTerminationProtection: S.optional(S.String),
          managedDraining: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutoScalingGroupProvider" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          subnets: S.optional(__S(4, __c0, 4)),
          securityGroups: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({
        identifier: "ManagedInstancesNetworkConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ storageSizeGiB: S.optional(S.Number) })).annotate({
        identifier: "ManagedInstancesStorageConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ useLocalStorage: S.optional(S.Boolean) })).annotate({
        identifier: "ManagedInstancesLocalStorageConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ min: S.Number, max: S.optional(S.Number) })).annotate({
        identifier: "VCpuCountRangeRequest",
      });
    case 1:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("item")));
    case 2:
      return S.suspend(() =>
        S.Struct({ min: S.optional(S.Number), max: S.optional(S.Number) }),
      ).annotate({ identifier: "MemoryGiBPerVCpuRequest" });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("item")));
    case 4:
      return S.suspend(() =>
        S.Struct({ min: S.optional(S.Number), max: S.optional(S.Number) }),
      ).annotate({
        identifier: "NetworkInterfaceCountRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          vCpuCount: __S(8, __c1, 0),
          memoryMiB: __S(8, __c1, 0),
          cpuManufacturers: S.optional(__S(9, __c1, 1)).pipe(T.XmlName("CpuManufacturer")),
          memoryGiBPerVCpu: S.optional(__S(10, __c1, 2)),
          excludedInstanceTypes: S.optional(__S(11, __c1, 3)).pipe(
            T.XmlName("ExcludedInstanceType"),
          ),
          instanceGenerations: S.optional(__S(9, __c1, 1)).pipe(T.XmlName("InstanceGeneration")),
          spotMaxPricePercentageOverLowestPrice: S.optional(S.Number),
          onDemandMaxPricePercentageOverLowestPrice: S.optional(S.Number),
          bareMetal: S.optional(S.String),
          burstablePerformance: S.optional(S.String),
          requireHibernateSupport: S.optional(S.Boolean),
          networkInterfaceCount: S.optional(__S(12, __c1, 4)),
          localStorage: S.optional(S.String),
          localStorageTypes: S.optional(__S(9, __c1, 1)).pipe(T.XmlName("LocalStorageType")),
          totalLocalStorageGB: S.optional(__S(12, __c1, 4)),
          baselineEbsBandwidthMbps: S.optional(__S(12, __c1, 4)),
          acceleratorTypes: S.optional(__S(9, __c1, 1)).pipe(T.XmlName("AcceleratorType")),
          acceleratorCount: S.optional(__S(10, __c1, 2)),
          acceleratorManufacturers: S.optional(__S(9, __c1, 1)).pipe(
            T.XmlName("AcceleratorManufacturer"),
          ),
          acceleratorNames: S.optional(__S(9, __c1, 1)).pipe(T.XmlName("AcceleratorName")),
          acceleratorTotalMemoryMiB: S.optional(__S(12, __c1, 4)),
          networkBandwidthGbps: S.optional(__S(12, __c1, 4)),
          allowedInstanceTypes: S.optional(__S(11, __c1, 3)).pipe(T.XmlName("AllowedInstanceType")),
          maxSpotPriceAsPercentageOfOptimalOnDemandPrice: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "InstanceRequirementsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          reservationGroupArn: S.optional(S.String),
          reservationPreference: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CapacityReservationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ec2InstanceProfileArn: S.String,
          networkConfiguration: __S(5, __c0, 5),
          storageConfiguration: S.optional(__S(6, __c0, 6)),
          localStorageConfiguration: S.optional(__S(7, __c0, 7)),
          monitoring: S.optional(S.String),
          capacityOptionType: S.optional(S.String),
          instanceMetadataTagsPropagation: S.optional(S.Boolean),
          instanceRequirements: S.optional(__S(13, __c1, 5)),
          fipsEnabled: S.optional(S.Boolean),
          capacityReservations: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "InstanceLaunchTemplate" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ scaleInAfter: S.optional(S.Number) })).annotate({
        identifier: "InfrastructureOptimization",
      });
    case 1:
      return S.suspend(() => S.Struct({ actionsStatus: S.optional(S.String) })).annotate({
        identifier: "AutoRepairConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          infrastructureRoleArn: S.String,
          instanceLaunchTemplate: __S(15, __c1, 7),
          propagateTags: S.optional(S.String),
          infrastructureOptimization: S.optional(__S(16, __c2, 0)),
          autoRepairConfiguration: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({
        identifier: "CreateManagedInstancesProviderConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          cluster: S.optional(S.String),
          autoScalingGroupProvider: S.optional(__S(3, __c0, 3)),
          managedInstancesProvider: S.optional(__S(18, __c2, 2)),
          tags: S.optional(__S(20, __c2, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCapacityProviderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          infrastructureRoleArn: S.optional(S.String),
          instanceLaunchTemplate: S.optional(__S(15, __c1, 7)),
          propagateTags: S.optional(S.String),
          infrastructureOptimization: S.optional(__S(16, __c2, 0)),
          autoRepairConfiguration: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "ManagedInstancesProvider" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          capacityProviderArn: S.optional(S.String),
          name: S.optional(S.String),
          cluster: S.optional(S.String),
          status: S.optional(S.String),
          autoScalingGroupProvider: S.optional(__S(3, __c0, 3)),
          managedInstancesProvider: S.optional(__S(22, __c2, 6)),
          updateStatus: S.optional(S.String),
          updateStatusReason: S.optional(S.String),
          tags: S.optional(__S(20, __c2, 4)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "CapacityProvider" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ capacityProvider: S.optional(__S(23, __c2, 7)) }).pipe(ns),
      ).annotate({
        identifier: "CreateCapacityProviderResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "ClusterSetting" });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          cloudWatchLogGroupName: S.optional(S.String),
          cloudWatchEncryptionEnabled: S.optional(S.Boolean),
          s3BucketName: S.optional(S.String),
          s3EncryptionEnabled: S.optional(S.Boolean),
          s3KeyPrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ExecuteCommandLogConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          kmsKeyId: S.optional(S.String),
          logging: S.optional(S.String),
          logConfiguration: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({
        identifier: "ExecuteCommandConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          kmsKeyId: S.optional(S.String),
          fargateEphemeralStorageKmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ManagedStorageConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          executeCommandConfiguration: S.optional(__S(28, __c3, 4)),
          managedStorageConfiguration: S.optional(__S(29, __c3, 5)),
        }),
      ).annotate({ identifier: "ClusterConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          capacityProvider: S.String,
          weight: S.optional(S.Number),
          base: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CapacityProviderStrategyItem",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() => S.Struct({ namespace: S.String })).annotate({
        identifier: "ClusterServiceConnectDefaultsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.optional(S.String),
          tags: S.optional(__S(20, __c2, 4)),
          settings: S.optional(__S(26, __c3, 2)),
          configuration: S.optional(__S(30, __c3, 6)),
          capacityProviders: S.optional(__S(4, __c0, 4)),
          defaultCapacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          serviceConnectDefaults: S.optional(__S(33, __c4, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateClusterRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "KeyValuePair" });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          type: S.optional(S.String),
          status: S.optional(S.String),
          details: S.optional(__S(36, __c4, 4)),
        }),
      ).annotate({ identifier: "Attachment" });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() => S.Struct({ namespace: S.optional(S.String) })).annotate({
        identifier: "ClusterServiceConnectDefaults",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterArn: S.optional(S.String),
          clusterName: S.optional(S.String),
          configuration: S.optional(__S(30, __c3, 6)),
          status: S.optional(S.String),
          registeredContainerInstancesCount: S.optional(S.Number),
          runningTasksCount: S.optional(S.Number),
          pendingTasksCount: S.optional(S.Number),
          activeServicesCount: S.optional(S.Number),
          statistics: S.optional(__S(36, __c4, 4)),
          tags: S.optional(__S(20, __c2, 4)),
          settings: S.optional(__S(26, __c3, 2)),
          capacityProviders: S.optional(__S(4, __c0, 4)),
          defaultCapacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          attachments: S.optional(__S(38, __c4, 6)),
          attachmentsStatus: S.optional(S.String),
          serviceConnectDefaults: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({ identifier: "Cluster" });
    case 1:
      return S.suspend(() => S.Struct({ cluster: S.optional(__S(40, __c5, 0)) }).pipe(ns)).annotate(
        {
          identifier: "CreateClusterResponse",
        },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ alarmNames: S.optional(__S(4, __c0, 4)), enable: S.optional(S.Boolean) }),
      ).annotate({ identifier: "DaemonAlarmConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          drainPercent: S.optional(S.Number),
          alarms: S.optional(__S(42, __c5, 2)),
          bakeTimeInMinutes: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DaemonDeploymentConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          daemonName: S.String,
          clusterArn: S.optional(S.String),
          daemonTaskDefinitionArn: S.String,
          capacityProviderArns: __S(4, __c0, 4),
          deploymentConfiguration: S.optional(__S(43, __c5, 3)),
          tags: S.optional(__S(20, __c2, 4)),
          propagateTags: S.optional(S.String),
          enableECSManagedTags: S.optional(S.Boolean),
          enableExecuteCommand: S.optional(S.Boolean),
          clientToken: S.optional(S.String),
          critical: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDaemonRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          daemonArn: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deploymentArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CreateDaemonResponse" });
    case 6:
      return S.suspend(() => S.Struct({ logGroup: S.String, logStreamPrefix: S.String })).annotate({
        identifier: "ExpressGatewayServiceAwsLogsConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ credentialsParameter: S.optional(S.String) })).annotate({
        identifier: "ExpressGatewayRepositoryCredentials",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, valueFrom: S.String })).annotate({
        identifier: "Secret",
      });
    case 1:
      return S.Array(__S(48, __c6, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          image: S.String,
          containerPort: S.optional(S.Number),
          awsLogsConfiguration: S.optional(__S(46, __c5, 6)),
          repositoryCredentials: S.optional(__S(47, __c5, 7)),
          command: S.optional(__S(4, __c0, 4)),
          environment: S.optional(__S(36, __c4, 4)),
          secrets: S.optional(__S(49, __c6, 1)),
        }),
      ).annotate({ identifier: "ExpressGatewayContainer" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          securityGroups: S.optional(__S(4, __c0, 4)),
          subnets: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({
        identifier: "ExpressGatewayServiceNetworkConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          minTaskCount: S.optional(S.Number),
          maxTaskCount: S.optional(S.Number),
          autoScalingMetric: S.optional(S.String),
          autoScalingTargetValue: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ExpressGatewayScalingTarget",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          executionRoleArn: S.optional(S.String),
          infrastructureRoleArn: S.String,
          serviceName: S.optional(S.String),
          cluster: S.optional(S.String),
          healthCheckPath: S.optional(S.String),
          primaryContainer: S.optional(__S(50, __c6, 2)),
          taskRoleArn: S.optional(S.String),
          networkConfiguration: S.optional(__S(51, __c6, 3)),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          cpuArchitecture: S.optional(S.String),
          scalingTarget: S.optional(__S(52, __c6, 4)),
          tags: S.optional(__S(20, __c2, 4)),
          taskDefinitionArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateExpressGatewayServiceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          statusCode: S.optional(S.String),
          statusReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ExpressGatewayServiceStatus",
      });
    case 7:
      return S.suspend(() => S.Struct({ accessType: S.String, endpoint: S.String })).annotate({
        identifier: "IngressPathSummary",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceRevisionArn: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          taskRoleArn: S.optional(S.String),
          taskDefinitionArn: S.optional(S.String),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          cpuArchitecture: S.optional(S.String),
          networkConfiguration: S.optional(__S(51, __c6, 3)),
          healthCheckPath: S.optional(S.String),
          primaryContainer: S.optional(__S(50, __c6, 2)),
          scalingTarget: S.optional(__S(52, __c6, 4)),
          ingressPaths: S.optional(__S(56, __c7, 0)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ExpressGatewayServiceConfiguration",
      });
    case 2:
      return S.Array(__S(57, __c7, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          serviceName: S.optional(S.String),
          serviceArn: S.optional(S.String),
          infrastructureRoleArn: S.optional(S.String),
          status: S.optional(__S(54, __c6, 6)),
          currentDeployment: S.optional(S.String),
          activeConfigurations: S.optional(__S(58, __c7, 2)),
          tags: S.optional(__S(20, __c2, 4)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ECSExpressGatewayService" });
    case 4:
      return S.suspend(() => S.Struct({ service: S.optional(__S(59, __c7, 3)) }).pipe(ns)).annotate(
        {
          identifier: "CreateExpressGatewayServiceResponse",
        },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          alternateTargetGroupArn: S.optional(S.String),
          productionListenerRule: S.optional(S.String),
          testListenerRule: S.optional(S.String),
          roleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AdvancedConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          targetGroupArn: S.optional(S.String),
          loadBalancerName: S.optional(S.String),
          containerName: S.optional(S.String),
          containerPort: S.optional(S.Number),
          advancedConfiguration: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({ identifier: "LoadBalancer" });
    case 7:
      return S.Array(__S(62, __c7, 6));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.optional(S.String),
          port: S.optional(S.Number),
          containerName: S.optional(S.String),
          containerPort: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceRegistry" });
    case 1:
      return S.Array(__S(64, __c8, 0));
    case 2:
      return S.suspend(() => S.Struct({ type: S.String, value: S.Number })).annotate({
        identifier: "ThresholdConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enable: S.Boolean,
          rollback: S.Boolean,
          resetOnHealthyTask: S.optional(S.Boolean),
          thresholdConfiguration: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({ identifier: "DeploymentCircuitBreaker" });
    case 4:
      return S.suspend(() =>
        S.Struct({ alarmNames: __S(4, __c0, 4), rollback: S.Boolean, enable: S.Boolean }),
      ).annotate({ identifier: "DeploymentAlarms" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          timeoutInMinutes: S.optional(S.Number),
          action: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeploymentLifecycleHookTimeoutConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          targetType: S.optional(S.String),
          hookTargetArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          lifecycleStages: S.optional(__S(69, __c8, 5)),
          hookDetails: S.optional(S.Any),
          timeoutConfiguration: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({ identifier: "DeploymentLifecycleHook" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          stepPercent: S.optional(S.Number),
          stepBakeTimeInMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LinearConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          canaryPercent: S.optional(S.Number),
          canaryBakeTimeInMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CanaryConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enable: S.Boolean,
          healthyPercent: S.optional(S.Number),
          sourceServiceRevisionCleanup: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeploymentEarlySuccessCriteria",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          deploymentCircuitBreaker: S.optional(__S(67, __c8, 3)),
          maximumPercent: S.optional(S.Number),
          minimumHealthyPercent: S.optional(S.Number),
          alarms: S.optional(__S(68, __c8, 4)),
          strategy: S.optional(S.String),
          bakeTimeInMinutes: S.optional(S.Number),
          lifecycleHooks: S.optional(__S(72, __c9, 0)),
          linearConfiguration: S.optional(__S(73, __c9, 1)),
          canaryConfiguration: S.optional(__S(74, __c9, 2)),
          earlySuccessCriteria: S.optional(__S(75, __c9, 3)),
        }),
      ).annotate({ identifier: "DeploymentConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), expression: S.optional(S.String) }),
      ).annotate({ identifier: "PlacementConstraint" });
    case 6:
      return S.Array(__S(77, __c9, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), field: S.optional(S.String) }),
      ).annotate({ identifier: "PlacementStrategy" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79, __c9, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          subnets: __S(4, __c0, 4),
          securityGroups: S.optional(__S(4, __c0, 4)),
          assignPublicIp: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsVpcConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ awsvpcConfiguration: S.optional(__S(81, __c10, 1)) }),
      ).annotate({ identifier: "NetworkConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "DeploymentController",
      });
    case 4:
      return S.suspend(() => S.Struct({ exact: S.String })).annotate({
        identifier: "ServiceConnectTestTrafficHeaderMatchRules",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, value: S.optional(__S(84, __c10, 4)) }),
      ).annotate({
        identifier: "ServiceConnectTestTrafficHeaderRules",
      });
    case 6:
      return S.suspend(() => S.Struct({ header: __S(85, __c10, 5) })).annotate({
        identifier: "ServiceConnectTestTrafficRules",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          port: S.Number,
          dnsName: S.optional(S.String),
          testTrafficRules: S.optional(__S(86, __c10, 6)),
        }),
      ).annotate({
        identifier: "ServiceConnectClientAlias",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          idleTimeoutSeconds: S.optional(S.Number),
          perRequestTimeoutSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TimeoutConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ awsPcaAuthorityArn: S.optional(S.String) })).annotate({
        identifier: "ServiceConnectTlsCertificateAuthority",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          issuerCertificateAuthority: __S(90, __c11, 2),
          kmsKey: S.optional(S.String),
          roleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceConnectTlsConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          portName: S.String,
          discoveryName: S.optional(S.String),
          clientAliases: S.optional(__S(88, __c11, 0)),
          ingressPortOverride: S.optional(S.Number),
          timeout: S.optional(__S(89, __c11, 1)),
          tls: S.optional(__S(91, __c11, 3)),
        }),
      ).annotate({ identifier: "ServiceConnectService" });
    case 5:
      return S.Array(__S(92, __c11, 4));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          logDriver: S.String,
          options: S.optional(__S(94, __c11, 6)),
          secretOptions: S.optional(__S(49, __c6, 1)),
        }),
      ).annotate({ identifier: "LogConfiguration" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          format: S.String,
          includeQueryParameters: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceConnectAccessLogConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          namespace: S.optional(S.String),
          services: S.optional(__S(93, __c11, 5)),
          logConfiguration: S.optional(__S(95, __c11, 7)),
          accessLogConfiguration: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({
        identifier: "ServiceConnectConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.String,
          tags: S.optional(__S(20, __c2, 4)),
          propagateTags: S.optional(S.String),
        }),
      ).annotate({ identifier: "EBSTagSpecification" });
    case 3:
      return S.Array(__S(98, __c12, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          encrypted: S.optional(S.Boolean),
          kmsKeyId: S.optional(S.String),
          volumeType: S.optional(S.String),
          sizeInGiB: S.optional(S.Number),
          snapshotId: S.optional(S.String),
          volumeInitializationRate: S.optional(S.Number),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
          tagSpecifications: S.optional(__S(99, __c12, 3)),
          roleArn: S.String,
          filesystemType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceManagedEBSVolumeConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          managedEBSVolume: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({
        identifier: "ServiceVolumeConfiguration",
      });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          alternateTargetGroupArn: S.optional(S.String),
          productionListenerRule: S.optional(S.String),
          testListenerRule: S.optional(S.String),
        }),
      ).annotate({
        identifier: "VpcLatticeAdvancedConfiguration",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          targetGroupArn: S.String,
          portName: S.String,
          advancedConfiguration: S.optional(__S(103, __c12, 7)),
        }),
      ).annotate({ identifier: "VpcLatticeConfiguration" });
    case 1:
      return S.Array(__S(104, __c13, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ metricNames: __S(4, __c0, 4), resolutionSeconds: S.Number }),
      ).annotate({ identifier: "MetricConfiguration" });
    case 3:
      return S.Array(__S(106, __c13, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ metricConfigurations: S.optional(__S(107, __c13, 3)) }),
      ).annotate({ identifier: "MonitoringConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          serviceName: S.String,
          taskDefinition: S.optional(S.String),
          availabilityZoneRebalancing: S.optional(S.String),
          loadBalancers: S.optional(__S(63, __c7, 7)),
          serviceRegistries: S.optional(__S(65, __c8, 1)),
          desiredCount: S.optional(S.Number),
          clientToken: S.optional(S.String),
          launchType: S.optional(S.String),
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          platformVersion: S.optional(S.String),
          role: S.optional(S.String),
          deploymentConfiguration: S.optional(__S(76, __c9, 4)),
          placementConstraints: S.optional(__S(78, __c9, 6)),
          placementStrategy: S.optional(__S(80, __c10, 0)),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          healthCheckGracePeriodSeconds: S.optional(S.Number),
          schedulingStrategy: S.optional(S.String),
          deploymentController: S.optional(__S(83, __c10, 3)),
          tags: S.optional(__S(20, __c2, 4)),
          enableECSManagedTags: S.optional(S.Boolean),
          propagateTags: S.optional(S.String),
          enableExecuteCommand: S.optional(S.Boolean),
          serviceConnectConfiguration: S.optional(__S(97, __c12, 1)),
          volumeConfigurations: S.optional(__S(102, __c12, 6)),
          vpcLatticeConfigurations: S.optional(__S(105, __c13, 1)),
          monitoring: S.optional(__S(108, __c13, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateServiceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.Number), unit: S.optional(S.String) }),
      ).annotate({ identifier: "Scale" });
    case 7:
      return S.suspend(() => S.Struct({ kmsKeyId: S.optional(S.String) })).annotate({
        identifier: "DeploymentEphemeralStorage",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          taskSetArn: S.optional(S.String),
          serviceArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          startedBy: S.optional(S.String),
          externalId: S.optional(S.String),
          status: S.optional(S.String),
          taskDefinition: S.optional(S.String),
          computedDesiredCount: S.optional(S.Number),
          pendingCount: S.optional(S.Number),
          runningCount: S.optional(S.Number),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          launchType: S.optional(S.String),
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          platformVersion: S.optional(S.String),
          platformFamily: S.optional(S.String),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          loadBalancers: S.optional(__S(63, __c7, 7)),
          serviceRegistries: S.optional(__S(65, __c8, 1)),
          scale: S.optional(__S(110, __c13, 6)),
          stabilityStatus: S.optional(S.String),
          stabilityStatusAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(20, __c2, 4)),
          fargateEphemeralStorage: S.optional(__S(111, __c13, 7)),
        }),
      ).annotate({ identifier: "TaskSet" });
    case 1:
      return S.Array(__S(112, __c14, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ discoveryName: S.optional(S.String), discoveryArn: S.optional(S.String) }),
      ).annotate({
        identifier: "ServiceConnectServiceResource",
      });
    case 3:
      return S.Array(__S(114, __c14, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(S.String),
          taskDefinition: S.optional(S.String),
          desiredCount: S.optional(S.Number),
          pendingCount: S.optional(S.Number),
          runningCount: S.optional(S.Number),
          failedTasks: S.optional(S.Number),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          launchType: S.optional(S.String),
          platformVersion: S.optional(S.String),
          platformFamily: S.optional(S.String),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          rolloutState: S.optional(S.String),
          rolloutStateReason: S.optional(S.String),
          serviceConnectConfiguration: S.optional(__S(97, __c12, 1)),
          serviceConnectResources: S.optional(__S(115, __c14, 3)),
          volumeConfigurations: S.optional(__S(102, __c12, 6)),
          fargateEphemeralStorage: S.optional(__S(111, __c13, 7)),
          vpcLatticeConfigurations: S.optional(__S(105, __c13, 1)),
        }),
      ).annotate({ identifier: "Deployment" });
    case 5:
      return S.Array(__S(116, __c14, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceEvent" });
    case 7:
      return S.Array(__S(118, __c14, 6));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          requestedTaskCount: S.optional(S.Number),
          runningTaskCount: S.optional(S.Number),
          pendingTaskCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ServiceCurrentRevisionSummary",
      });
    case 1:
      return S.Array(__S(120, __c15, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          serviceArn: S.optional(S.String),
          serviceName: S.optional(S.String),
          clusterArn: S.optional(S.String),
          loadBalancers: S.optional(__S(63, __c7, 7)),
          serviceRegistries: S.optional(__S(65, __c8, 1)),
          status: S.optional(S.String),
          desiredCount: S.optional(S.Number),
          runningCount: S.optional(S.Number),
          pendingCount: S.optional(S.Number),
          launchType: S.optional(S.String),
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          platformVersion: S.optional(S.String),
          platformFamily: S.optional(S.String),
          taskDefinition: S.optional(S.String),
          deploymentConfiguration: S.optional(__S(76, __c9, 4)),
          taskSets: S.optional(__S(113, __c14, 1)),
          deployments: S.optional(__S(117, __c14, 5)),
          roleArn: S.optional(S.String),
          events: S.optional(__S(119, __c14, 7)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          currentServiceDeployment: S.optional(S.String),
          currentServiceRevisions: S.optional(__S(121, __c15, 1)),
          placementConstraints: S.optional(__S(78, __c9, 6)),
          placementStrategy: S.optional(__S(80, __c10, 0)),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          healthCheckGracePeriodSeconds: S.optional(S.Number),
          schedulingStrategy: S.optional(S.String),
          deploymentController: S.optional(__S(83, __c10, 3)),
          tags: S.optional(__S(20, __c2, 4)),
          createdBy: S.optional(S.String),
          enableECSManagedTags: S.optional(S.Boolean),
          propagateTags: S.optional(S.String),
          enableExecuteCommand: S.optional(S.Boolean),
          availabilityZoneRebalancing: S.optional(S.String),
          resourceManagementType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Service" });
    case 3:
      return S.suspend(() =>
        S.Struct({ service: S.optional(__S(122, __c15, 2)) }).pipe(ns),
      ).annotate({
        identifier: "CreateServiceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          service: S.String,
          cluster: S.String,
          externalId: S.optional(S.String),
          taskDefinition: S.String,
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          loadBalancers: S.optional(__S(63, __c7, 7)),
          serviceRegistries: S.optional(__S(65, __c8, 1)),
          launchType: S.optional(S.String),
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          platformVersion: S.optional(S.String),
          scale: S.optional(__S(110, __c13, 6)),
          clientToken: S.optional(S.String),
          tags: S.optional(__S(20, __c2, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTaskSetRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ taskSet: S.optional(__S(112, __c14, 0)) }).pipe(ns),
      ).annotate({
        identifier: "CreateTaskSetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String, principalArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAccountSettingRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          value: S.optional(S.String),
          principalArn: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Setting" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ setting: S.optional(__S(127, __c15, 7)) }).pipe(ns),
      ).annotate({
        identifier: "DeleteAccountSettingResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          value: S.optional(S.String),
          targetType: S.optional(S.String),
          targetId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Attribute" });
    case 2:
      return S.Array(__S(129, __c16, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ cluster: S.optional(S.String), attributes: __S(130, __c16, 2) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAttributesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ attributes: S.optional(__S(130, __c16, 2)) }).pipe(ns),
      ).annotate({
        identifier: "DeleteAttributesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ capacityProvider: S.String, cluster: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteCapacityProviderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ cluster: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteClusterRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ daemonArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDaemonRequest" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          daemonArn: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deploymentArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DeleteDaemonResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ daemonTaskDefinition: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDaemonTaskDefinitionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ daemonTaskDefinitionArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DeleteDaemonTaskDefinitionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ serviceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteExpressGatewayServiceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          service: S.String,
          force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteServiceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ taskDefinitions: __S(4, __c0, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteTaskDefinitionsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ credentialsParameter: S.String })).annotate({
        identifier: "RepositoryCredentials",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          containerPort: S.optional(S.Number),
          hostPort: S.optional(S.Number),
          protocol: S.optional(S.String),
          name: S.optional(S.String),
          appProtocol: S.optional(S.String),
          containerPortRange: S.optional(S.String),
        }),
      ).annotate({ identifier: "PortMapping" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.Array(S.Number);
    case 2:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          ignoredExitCodes: S.optional(__S(145, __c18, 1)),
          restartAttemptPeriod: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ContainerRestartPolicy" });
    case 3:
      return S.suspend(() => S.Struct({ value: S.String, type: S.String })).annotate({
        identifier: "EnvironmentFile",
      });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceVolume: S.optional(S.String),
          containerPath: S.optional(S.String),
          readOnly: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MountPoint" });
    case 6:
      return S.Array(__S(149, __c18, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ sourceContainer: S.optional(S.String), readOnly: S.optional(S.Boolean) }),
      ).annotate({ identifier: "VolumeFrom" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151, __c18, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ add: S.optional(__S(4, __c0, 4)), drop: S.optional(__S(4, __c0, 4)) }),
      ).annotate({ identifier: "KernelCapabilities" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          hostPath: S.String,
          containerPath: S.optional(S.String),
          permissions: S.optional(__S(69, __c8, 5)),
        }),
      ).annotate({ identifier: "Device" });
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          containerPath: S.String,
          size: S.Number,
          mountOptions: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "Tmpfs" });
    case 5:
      return S.Array(__S(156, __c19, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          capabilities: S.optional(__S(153, __c19, 1)),
          devices: S.optional(__S(155, __c19, 3)),
          initProcessEnabled: S.optional(S.Boolean),
          sharedMemorySize: S.optional(S.Number),
          tmpfs: S.optional(__S(157, __c19, 5)),
          maxSwap: S.optional(S.Number),
          swappiness: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LinuxParameters" });
    case 7:
      return S.suspend(() => S.Struct({ containerName: S.String, condition: S.String })).annotate({
        identifier: "ContainerDependency",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(159, __c19, 7));
    case 1:
      return S.suspend(() => S.Struct({ hostname: S.String, ipAddress: S.String })).annotate({
        identifier: "HostEntry",
      });
    case 2:
      return S.Array(__S(161, __c20, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String, softLimit: S.Number, hardLimit: S.Number }),
      ).annotate({ identifier: "Ulimit" });
    case 4:
      return S.Array(__S(163, __c20, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          command: __S(4, __c0, 4),
          interval: S.optional(S.Number),
          timeout: S.optional(S.Number),
          retries: S.optional(S.Number),
          startPeriod: S.optional(S.Number),
        }),
      ).annotate({ identifier: "HealthCheck" });
    case 6:
      return S.suspend(() =>
        S.Struct({ namespace: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "SystemControl" });
    case 7:
      return S.Array(__S(166, __c20, 6));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          options: S.optional(__S(94, __c11, 6)),
        }),
      ).annotate({ identifier: "FirelensConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          image: S.optional(S.String),
          repositoryCredentials: S.optional(__S(142, __c17, 6)),
          cpu: S.optional(S.Number),
          memory: S.optional(S.Number),
          memoryReservation: S.optional(S.Number),
          links: S.optional(__S(4, __c0, 4)),
          portMappings: S.optional(__S(144, __c18, 0)),
          essential: S.optional(S.Boolean),
          restartPolicy: S.optional(__S(146, __c18, 2)),
          entryPoint: S.optional(__S(4, __c0, 4)),
          command: S.optional(__S(4, __c0, 4)),
          environment: S.optional(__S(36, __c4, 4)),
          environmentFiles: S.optional(__S(148, __c18, 4)),
          mountPoints: S.optional(__S(150, __c18, 6)),
          volumesFrom: S.optional(__S(152, __c19, 0)),
          linuxParameters: S.optional(__S(158, __c19, 6)),
          secrets: S.optional(__S(49, __c6, 1)),
          dependsOn: S.optional(__S(160, __c20, 0)),
          startTimeout: S.optional(S.Number),
          stopTimeout: S.optional(S.Number),
          versionConsistency: S.optional(S.String),
          hostname: S.optional(S.String),
          user: S.optional(S.String),
          workingDirectory: S.optional(S.String),
          disableNetworking: S.optional(S.Boolean),
          privileged: S.optional(S.Boolean),
          readonlyRootFilesystem: S.optional(S.Boolean),
          dnsServers: S.optional(__S(4, __c0, 4)),
          dnsSearchDomains: S.optional(__S(4, __c0, 4)),
          extraHosts: S.optional(__S(162, __c20, 2)),
          dockerSecurityOptions: S.optional(__S(4, __c0, 4)),
          interactive: S.optional(S.Boolean),
          pseudoTerminal: S.optional(S.Boolean),
          dockerLabels: S.optional(__S(94, __c11, 6)),
          ulimits: S.optional(__S(164, __c20, 4)),
          logConfiguration: S.optional(__S(95, __c11, 7)),
          healthCheck: S.optional(__S(165, __c20, 5)),
          systemControls: S.optional(__S(167, __c20, 7)),
          resourceRequirements: S.optional(__S(148, __c18, 4)),
          firelensConfiguration: S.optional(__S(168, __c21, 0)),
          credentialSpecs: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "ContainerDefinition" });
    case 2:
      return S.Array(__S(169, __c21, 1));
    case 3:
      return S.suspend(() => S.Struct({ sourcePath: S.optional(S.String) })).annotate({
        identifier: "HostVolumeProperties",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          scope: S.optional(S.String),
          autoprovision: S.optional(S.Boolean),
          driver: S.optional(S.String),
          driverOpts: S.optional(__S(172, __c21, 4)),
          labels: S.optional(__S(172, __c21, 4)),
        }),
      ).annotate({
        identifier: "DockerVolumeConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessPointId: S.optional(S.String),
          iam: S.optional(S.String),
        }),
      ).annotate({ identifier: "EFSAuthorizationConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          fileSystemId: S.String,
          rootDirectory: S.optional(S.String),
          transitEncryption: S.optional(S.String),
          transitEncryptionPort: S.optional(S.Number),
          authorizationConfig: S.optional(__S(174, __c21, 6)),
        }),
      ).annotate({ identifier: "EFSVolumeConfiguration" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          fileSystemArn: S.String,
          rootDirectory: S.optional(S.String),
          transitEncryptionPort: S.optional(S.Number),
          accessPointArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3FilesVolumeConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ credentialsParameter: S.String, domain: S.String }),
      ).annotate({
        identifier: "FSxWindowsFileServerAuthorizationConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          fileSystemId: S.String,
          rootDirectory: S.String,
          authorizationConfig: __S(177, __c22, 1),
        }),
      ).annotate({
        identifier: "FSxWindowsFileServerVolumeConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          host: S.optional(__S(171, __c21, 3)),
          dockerVolumeConfiguration: S.optional(__S(173, __c21, 5)),
          efsVolumeConfiguration: S.optional(__S(175, __c21, 7)),
          s3filesVolumeConfiguration: S.optional(__S(176, __c22, 0)),
          fsxWindowsFileServerVolumeConfiguration: S.optional(__S(178, __c22, 2)),
          configuredAtLaunch: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Volume" });
    case 4:
      return S.Array(__S(179, __c22, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          expression: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TaskDefinitionPlacementConstraint",
      });
    case 6:
      return S.Array(__S(181, __c22, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          cpuArchitecture: S.optional(S.String),
          operatingSystemFamily: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuntimePlatform" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ deviceName: S.String, deviceType: S.String })).annotate({
        identifier: "InferenceAccelerator",
      });
    case 1:
      return S.Array(__S(184, __c23, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          containerName: S.String,
          properties: S.optional(__S(36, __c4, 4)),
        }),
      ).annotate({ identifier: "ProxyConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ sizeInGiB: S.Number })).annotate({
        identifier: "EphemeralStorage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          taskDefinitionArn: S.optional(S.String),
          containerDefinitions: S.optional(__S(170, __c21, 2)),
          family: S.optional(S.String),
          taskRoleArn: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          networkMode: S.optional(S.String),
          revision: S.optional(S.Number),
          volumes: S.optional(__S(180, __c22, 4)),
          status: S.optional(S.String),
          requiresAttributes: S.optional(__S(130, __c16, 2)),
          placementConstraints: S.optional(__S(182, __c22, 6)),
          compatibilities: S.optional(__S(69, __c8, 5)),
          runtimePlatform: S.optional(__S(183, __c22, 7)),
          requiresCompatibilities: S.optional(__S(69, __c8, 5)),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          inferenceAccelerators: S.optional(__S(185, __c23, 1)),
          pidMode: S.optional(S.String),
          ipcMode: S.optional(S.String),
          proxyConfiguration: S.optional(__S(186, __c23, 2)),
          registeredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deregisteredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deleteRequestedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registeredBy: S.optional(S.String),
          ephemeralStorage: S.optional(__S(187, __c23, 3)),
          enableFaultInjection: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TaskDefinition" });
    case 5:
      return S.Array(__S(188, __c23, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          reason: S.optional(S.String),
          detail: S.optional(S.String),
        }),
      ).annotate({ identifier: "Failure" });
    case 7:
      return S.Array(__S(190, __c23, 6));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          taskDefinitions: S.optional(__S(189, __c23, 5)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteTaskDefinitionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cluster: S.String,
          service: S.String,
          taskSet: S.String,
          force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteTaskSetRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          containerInstance: S.String,
          force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeregisterContainerInstanceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentVersion: S.optional(S.String),
          agentHash: S.optional(S.String),
          dockerVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "VersionInfo" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(S.String),
          doubleValue: S.optional(S.Number),
          longValue: S.optional(S.Number),
          integerValue: S.optional(S.Number),
          stringSetValue: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "Resource" });
    case 5:
      return S.Array(__S(196, __c24, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastStatusChange: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "InstanceHealthCheckResult",
      });
    case 7:
      return S.Array(__S(198, __c24, 6));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          overallStatus: S.optional(S.String),
          details: S.optional(__S(199, __c24, 7)),
        }),
      ).annotate({
        identifier: "ContainerInstanceHealthStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          containerInstanceArn: S.optional(S.String),
          ec2InstanceId: S.optional(S.String),
          capacityProviderName: S.optional(S.String),
          version: S.optional(S.Number),
          versionInfo: S.optional(__S(195, __c24, 3)),
          remainingResources: S.optional(__S(197, __c24, 5)),
          registeredResources: S.optional(__S(197, __c24, 5)),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          agentConnected: S.optional(S.Boolean),
          runningTasksCount: S.optional(S.Number),
          pendingTasksCount: S.optional(S.Number),
          agentUpdateStatus: S.optional(S.String),
          attributes: S.optional(__S(130, __c16, 2)),
          registeredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          attachments: S.optional(__S(38, __c4, 6)),
          tags: S.optional(__S(20, __c2, 4)),
          healthStatus: S.optional(__S(200, __c25, 0)),
        }),
      ).annotate({ identifier: "ContainerInstance" });
    case 2:
      return S.suspend(() =>
        S.Struct({ containerInstance: S.optional(__S(201, __c25, 1)) }).pipe(ns),
      ).annotate({
        identifier: "DeregisterContainerInstanceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ taskDefinition: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeregisterTaskDefinitionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ taskDefinition: S.optional(__S(188, __c23, 4)) }).pipe(ns),
      ).annotate({
        identifier: "DeregisterTaskDefinitionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          capacityProviders: S.optional(__S(4, __c0, 4)),
          cluster: S.optional(S.String),
          include: S.optional(__S(69, __c8, 5)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeCapacityProvidersRequest",
      });
    case 6:
      return S.Array(__S(23, __c2, 7));
    case 7:
      return S.suspend(() =>
        S.Struct({
          capacityProviders: S.optional(__S(206, __c25, 6)),
          failures: S.optional(__S(191, __c23, 7)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeCapacityProvidersResponse",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusters: S.optional(__S(4, __c0, 4)),
          include: S.optional(__S(69, __c8, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeClustersRequest" });
    case 1:
      return S.Array(__S(40, __c5, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusters: S.optional(__S(209, __c26, 1)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeClustersResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          containerInstances: __S(4, __c0, 4),
          include: S.optional(__S(69, __c8, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeContainerInstancesRequest",
      });
    case 4:
      return S.Array(__S(201, __c25, 1));
    case 5:
      return S.suspend(() =>
        S.Struct({
          containerInstances: S.optional(__S(212, __c26, 4)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeContainerInstancesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ daemonArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDaemonRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          runningCount: S.optional(S.Number),
          withoutDaemonCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DaemonCapacityProvider" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(215, __c26, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          capacityProviders: S.optional(__S(216, __c27, 0)),
          totalRunningCount: S.optional(S.Number),
          totalWithoutDaemonCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DaemonRevisionDetail" });
    case 2:
      return S.Array(__S(217, __c27, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          daemonArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          status: S.optional(S.String),
          currentRevisions: S.optional(__S(218, __c27, 2)),
          deploymentArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DaemonDetail" });
    case 4:
      return S.suspend(() =>
        S.Struct({ daemon: S.optional(__S(219, __c27, 3)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDaemonResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ daemonDeploymentArns: __S(4, __c0, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDaemonDeploymentsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          runningInstanceCount: S.optional(S.Number),
          withoutDaemonInstanceCount: S.optional(S.Number),
          drainingInstanceCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DaemonDeploymentCapacityProvider",
      });
    case 7:
      return S.Array(__S(222, __c27, 6));
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          capacityProviders: S.optional(__S(223, __c27, 7)),
          totalRunningInstanceCount: S.optional(S.Number),
          totalWithoutDaemonInstanceCount: S.optional(S.Number),
          totalDrainingInstanceCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DaemonDeploymentRevisionDetail",
      });
    case 1:
      return S.Array(__S(224, __c28, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          failureCount: S.optional(S.Number),
          status: S.optional(S.String),
          threshold: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DaemonCircuitBreaker" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          alarmNames: S.optional(__S(4, __c0, 4)),
          triggeredAlarmNames: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "DaemonDeploymentAlarms" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          reason: S.optional(S.String),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          rollbackTargetDaemonRevisionArn: S.optional(S.String),
          rollbackCapacityProviders: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "DaemonRollback" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          daemonDeploymentArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          targetDaemonRevision: S.optional(__S(224, __c28, 0)),
          sourceDaemonRevisions: S.optional(__S(225, __c28, 1)),
          circuitBreaker: S.optional(__S(226, __c28, 2)),
          alarms: S.optional(__S(227, __c28, 3)),
          rollback: S.optional(__S(228, __c28, 4)),
          deploymentConfiguration: S.optional(__S(43, __c5, 3)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          finishedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DaemonDeployment" });
    case 6:
      return S.Array(__S(229, __c28, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          failures: S.optional(__S(191, __c23, 7)),
          daemonDeployments: S.optional(__S(230, __c28, 6)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDaemonDeploymentsResponse",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ daemonRevisionArns: __S(4, __c0, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDaemonRevisionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          containerName: S.optional(S.String),
          imageDigest: S.optional(S.String),
          image: S.optional(S.String),
        }),
      ).annotate({ identifier: "DaemonContainerImage" });
    case 2:
      return S.Array(__S(233, __c29, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          daemonRevisionArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          daemonArn: S.optional(S.String),
          daemonTaskDefinitionArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          containerImages: S.optional(__S(234, __c29, 2)),
          propagateTags: S.optional(S.String),
          enableECSManagedTags: S.optional(S.Boolean),
          enableExecuteCommand: S.optional(S.Boolean),
          critical: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DaemonRevision" });
    case 4:
      return S.Array(__S(235, __c29, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          daemonRevisions: S.optional(__S(236, __c29, 4)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDaemonRevisionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ daemonTaskDefinition: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDaemonTaskDefinitionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          capabilities: S.optional(__S(153, __c19, 1)),
          devices: S.optional(__S(155, __c19, 3)),
          initProcessEnabled: S.optional(S.Boolean),
          tmpfs: S.optional(__S(157, __c19, 5)),
        }),
      ).annotate({ identifier: "DaemonLinuxParameters" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          image: S.String,
          memory: S.optional(S.Number),
          memoryReservation: S.optional(S.Number),
          repositoryCredentials: S.optional(__S(142, __c17, 6)),
          healthCheck: S.optional(__S(165, __c20, 5)),
          cpu: S.optional(S.Number),
          essential: S.optional(S.Boolean),
          entryPoint: S.optional(__S(4, __c0, 4)),
          command: S.optional(__S(4, __c0, 4)),
          workingDirectory: S.optional(S.String),
          environmentFiles: S.optional(__S(148, __c18, 4)),
          environment: S.optional(__S(36, __c4, 4)),
          secrets: S.optional(__S(49, __c6, 1)),
          readonlyRootFilesystem: S.optional(S.Boolean),
          mountPoints: S.optional(__S(150, __c18, 6)),
          logConfiguration: S.optional(__S(95, __c11, 7)),
          firelensConfiguration: S.optional(__S(168, __c21, 0)),
          privileged: S.optional(S.Boolean),
          user: S.optional(S.String),
          ulimits: S.optional(__S(164, __c20, 4)),
          linuxParameters: S.optional(__S(239, __c29, 7)),
          dependsOn: S.optional(__S(160, __c20, 0)),
          startTimeout: S.optional(S.Number),
          stopTimeout: S.optional(S.Number),
          systemControls: S.optional(__S(167, __c20, 7)),
          interactive: S.optional(S.Boolean),
          pseudoTerminal: S.optional(S.Boolean),
          restartPolicy: S.optional(__S(146, __c18, 2)),
        }),
      ).annotate({
        identifier: "DaemonContainerDefinition",
      });
    case 1:
      return S.Array(__S(240, __c30, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), host: S.optional(__S(171, __c21, 3)) }),
      ).annotate({ identifier: "DaemonVolume" });
    case 3:
      return S.Array(__S(242, __c30, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          daemonTaskDefinitionArn: S.optional(S.String),
          family: S.optional(S.String),
          revision: S.optional(S.Number),
          taskRoleArn: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          containerDefinitions: S.optional(__S(241, __c30, 1)),
          volumes: S.optional(__S(243, __c30, 3)),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          status: S.optional(S.String),
          registeredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deleteRequestedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registeredBy: S.optional(S.String),
          pidMode: S.optional(S.String),
          ipcMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "DaemonTaskDefinition" });
    case 5:
      return S.suspend(() =>
        S.Struct({ daemonTaskDefinition: S.optional(__S(244, __c30, 4)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDaemonTaskDefinitionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceArn: S.String,
          include: S.optional(__S(69, __c8, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeExpressGatewayServiceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ serviceDeploymentArns: __S(4, __c0, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeServiceDeploymentsRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          requestedTaskCount: S.optional(S.Number),
          runningTaskCount: S.optional(S.Number),
          pendingTaskCount: S.optional(S.Number),
          requestedTestTrafficWeight: S.optional(S.Number),
          requestedProductionTrafficWeight: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ServiceRevisionSummary" });
    case 1:
      return S.Array(__S(248, __c31, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          hookId: S.optional(S.String),
          targetType: S.optional(S.String),
          targetArn: S.optional(S.String),
          status: S.optional(S.String),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          timeoutAction: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeploymentLifecycleHookDetail",
      });
    case 3:
      return S.Array(__S(250, __c31, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          reason: S.optional(S.String),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          serviceRevisionArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Rollback" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          failureCount: S.optional(S.Number),
          threshold: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ServiceDeploymentCircuitBreaker",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceDeploymentArn: S.optional(S.String),
          serviceArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          finishedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          sourceServiceRevisions: S.optional(__S(249, __c31, 1)),
          targetServiceRevision: S.optional(__S(248, __c31, 0)),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          lifecycleStage: S.optional(S.String),
          lifecycleHookDetails: S.optional(__S(251, __c31, 3)),
          deploymentConfiguration: S.optional(__S(76, __c9, 4)),
          rollback: S.optional(__S(252, __c31, 4)),
          deploymentCircuitBreaker: S.optional(__S(253, __c31, 5)),
          alarms: S.optional(__S(227, __c28, 3)),
        }),
      ).annotate({ identifier: "ServiceDeployment" });
    case 7:
      return S.Array(__S(254, __c31, 6));
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          serviceDeployments: S.optional(__S(255, __c31, 7)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeServiceDeploymentsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ serviceRevisionArns: __S(4, __c0, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeServiceRevisionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          targetGroupArn: S.optional(S.String),
          productionListenerRule: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceRevisionLoadBalancer",
      });
    case 3:
      return S.Array(__S(258, __c32, 2));
    case 4:
      return S.Array(__S(258, __c32, 2));
    case 5:
      return S.suspend(() =>
        S.Struct({
          loadBalancers: S.optional(__S(259, __c32, 3)),
          vpcLatticeConfigurations: S.optional(__S(260, __c32, 4)),
        }),
      ).annotate({ identifier: "ResolvedConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          scheme: S.String,
          subnetIds: S.optional(__S(4, __c0, 4)),
          securityGroupIds: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "ManagedLoadBalancer" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "ManagedSecurityGroup" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(263, __c32, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          domainName: S.String,
        }),
      ).annotate({ identifier: "ManagedCertificate" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          healthCheckPath: S.String,
          healthCheckPort: S.Number,
          port: S.Number,
        }),
      ).annotate({ identifier: "ManagedTargetGroup" });
    case 3:
      return S.Array(__S(266, __c33, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          accessType: S.String,
          endpoint: S.String,
          loadBalancer: S.optional(__S(262, __c32, 6)),
          loadBalancerSecurityGroups: S.optional(__S(264, __c33, 0)),
          certificate: S.optional(__S(265, __c33, 1)),
          listener: S.optional(__S(263, __c32, 7)),
          rule: S.optional(__S(263, __c32, 7)),
          targetGroups: S.optional(__S(267, __c33, 3)),
        }),
      ).annotate({ identifier: "ManagedIngressPath" });
    case 5:
      return S.Array(__S(268, __c33, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          minCapacity: S.Number,
          maxCapacity: S.Number,
        }),
      ).annotate({ identifier: "ManagedScalableTarget" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          policyType: S.String,
          targetValue: S.Number,
          metric: S.String,
        }),
      ).annotate({
        identifier: "ManagedApplicationAutoScalingPolicy",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(271, __c33, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          scalableTarget: S.optional(__S(270, __c33, 6)),
          applicationAutoScalingPolicies: S.optional(__S(272, __c34, 0)),
        }),
      ).annotate({ identifier: "ManagedAutoScaling" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.String,
          statusReason: S.optional(S.String),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          logGroupName: S.String,
        }),
      ).annotate({ identifier: "ManagedLogGroup" });
    case 3:
      return S.Array(__S(274, __c34, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ingressPaths: S.optional(__S(269, __c33, 5)),
          autoScaling: S.optional(__S(273, __c34, 1)),
          metricAlarms: S.optional(__S(264, __c33, 0)),
          serviceSecurityGroups: S.optional(__S(264, __c33, 0)),
          logGroups: S.optional(__S(275, __c34, 3)),
        }),
      ).annotate({ identifier: "ECSManagedResources" });
    case 5:
      return S.suspend(() => S.Struct({ cpuArchitecture: S.optional(S.String) })).annotate({
        identifier: "RuntimePlatformOverride",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ runtimePlatform: S.optional(__S(277, __c34, 5)) }),
      ).annotate({ identifier: "ServiceRevisionOverrides" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceRevisionArn: S.optional(S.String),
          serviceArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          taskDefinition: S.optional(S.String),
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          launchType: S.optional(S.String),
          platformVersion: S.optional(S.String),
          platformFamily: S.optional(S.String),
          loadBalancers: S.optional(__S(63, __c7, 7)),
          serviceRegistries: S.optional(__S(65, __c8, 1)),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          containerImages: S.optional(__S(234, __c29, 2)),
          guardDutyEnabled: S.optional(S.Boolean),
          serviceConnectConfiguration: S.optional(__S(97, __c12, 1)),
          volumeConfigurations: S.optional(__S(102, __c12, 6)),
          fargateEphemeralStorage: S.optional(__S(111, __c13, 7)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vpcLatticeConfigurations: S.optional(__S(105, __c13, 1)),
          resolvedConfiguration: S.optional(__S(261, __c32, 5)),
          ecsManagedResources: S.optional(__S(276, __c34, 4)),
          overrides: S.optional(__S(278, __c34, 6)),
          monitoring: S.optional(__S(108, __c13, 4)),
        }),
      ).annotate({ identifier: "ServiceRevision" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(279, __c34, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceRevisions: S.optional(__S(280, __c35, 0)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeServiceRevisionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          services: __S(4, __c0, 4),
          include: S.optional(__S(69, __c8, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeServicesRequest" });
    case 3:
      return S.Array(__S(122, __c15, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          services: S.optional(__S(283, __c35, 3)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeServicesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ taskDefinition: S.String, include: S.optional(__S(69, __c8, 5)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTaskDefinitionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          taskDefinition: S.optional(__S(188, __c23, 4)),
          tags: S.optional(__S(20, __c2, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeTaskDefinitionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          tasks: __S(4, __c0, 4),
          include: S.optional(__S(69, __c8, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTasksRequest" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          bindIP: S.optional(S.String),
          containerPort: S.optional(S.Number),
          hostPort: S.optional(S.Number),
          protocol: S.optional(S.String),
          containerPortRange: S.optional(S.String),
          hostPortRange: S.optional(S.String),
        }),
      ).annotate({ identifier: "NetworkBinding" });
    case 1:
      return S.Array(__S(288, __c36, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          attachmentId: S.optional(S.String),
          privateIpv4Address: S.optional(S.String),
          ipv6Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "NetworkInterface" });
    case 3:
      return S.Array(__S(290, __c36, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          lastStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          name: S.optional(S.String),
          reason: S.optional(S.String),
          lastStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedAgent" });
    case 5:
      return S.Array(__S(292, __c36, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          containerArn: S.optional(S.String),
          taskArn: S.optional(S.String),
          name: S.optional(S.String),
          image: S.optional(S.String),
          imageDigest: S.optional(S.String),
          runtimeId: S.optional(S.String),
          lastStatus: S.optional(S.String),
          exitCode: S.optional(S.Number),
          reason: S.optional(S.String),
          networkBindings: S.optional(__S(289, __c36, 1)),
          networkInterfaces: S.optional(__S(291, __c36, 3)),
          healthStatus: S.optional(S.String),
          managedAgents: S.optional(__S(293, __c36, 5)),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          memoryReservation: S.optional(S.String),
          gpuIds: S.optional(__S(4, __c0, 4)),
          neuronDeviceIds: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "Container" });
    case 7:
      return S.Array(__S(294, __c36, 6));
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          command: S.optional(__S(4, __c0, 4)),
          environment: S.optional(__S(36, __c4, 4)),
          environmentFiles: S.optional(__S(148, __c18, 4)),
          cpu: S.optional(S.Number),
          memory: S.optional(S.Number),
          memoryReservation: S.optional(S.Number),
          resourceRequirements: S.optional(__S(148, __c18, 4)),
        }),
      ).annotate({ identifier: "ContainerOverride" });
    case 1:
      return S.Array(__S(296, __c37, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ deviceName: S.optional(S.String), deviceType: S.optional(S.String) }),
      ).annotate({
        identifier: "InferenceAcceleratorOverride",
      });
    case 3:
      return S.Array(__S(298, __c37, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          containerOverrides: S.optional(__S(297, __c37, 1)),
          cpu: S.optional(S.String),
          inferenceAcceleratorOverrides: S.optional(__S(299, __c37, 3)),
          executionRoleArn: S.optional(S.String),
          memory: S.optional(S.String),
          taskRoleArn: S.optional(S.String),
          ephemeralStorage: S.optional(__S(187, __c23, 3)),
        }),
      ).annotate({ identifier: "TaskOverride" });
    case 5:
      return S.suspend(() =>
        S.Struct({ sizeInGiB: S.optional(S.Number), kmsKeyId: S.optional(S.String) }),
      ).annotate({ identifier: "TaskEphemeralStorage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          attachments: S.optional(__S(38, __c4, 6)),
          attributes: S.optional(__S(130, __c16, 2)),
          availabilityZone: S.optional(S.String),
          capacityProviderName: S.optional(S.String),
          clusterArn: S.optional(S.String),
          connectivity: S.optional(S.String),
          connectivityAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          containerInstanceArn: S.optional(S.String),
          containers: S.optional(__S(295, __c36, 7)),
          cpu: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          desiredStatus: S.optional(S.String),
          enableExecuteCommand: S.optional(S.Boolean),
          executionStoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          group: S.optional(S.String),
          healthStatus: S.optional(S.String),
          inferenceAccelerators: S.optional(__S(185, __c23, 1)),
          lastStatus: S.optional(S.String),
          launchType: S.optional(S.String),
          memory: S.optional(S.String),
          overrides: S.optional(__S(300, __c37, 4)),
          platformVersion: S.optional(S.String),
          platformFamily: S.optional(S.String),
          pullStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          pullStoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedBy: S.optional(S.String),
          stopCode: S.optional(S.String),
          stoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stoppedReason: S.optional(S.String),
          stoppingAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(20, __c2, 4)),
          taskArn: S.optional(S.String),
          taskDefinitionArn: S.optional(S.String),
          version: S.optional(S.Number),
          ephemeralStorage: S.optional(__S(187, __c23, 3)),
          fargateEphemeralStorage: S.optional(__S(301, __c37, 5)),
        }),
      ).annotate({ identifier: "Task" });
    case 7:
      return S.Array(__S(302, __c37, 6));
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          tasks: S.optional(__S(303, __c37, 7)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeTasksResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cluster: S.String,
          service: S.String,
          taskSets: S.optional(__S(4, __c0, 4)),
          include: S.optional(__S(69, __c8, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTaskSetsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          taskSets: S.optional(__S(113, __c14, 1)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeTaskSetsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ containerInstance: S.optional(S.String), cluster: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DiscoverPollEndpointRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.optional(S.String),
          telemetryEndpoint: S.optional(S.String),
          serviceConnectEndpoint: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DiscoverPollEndpointResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          container: S.optional(S.String),
          command: S.String,
          interactive: S.Boolean,
          task: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ExecuteCommandRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          streamUrl: S.optional(S.String),
          tokenValue: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Session" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clusterArn: S.optional(S.String),
          containerArn: S.optional(S.String),
          containerName: S.optional(S.String),
          interactive: S.optional(S.Boolean),
          session: S.optional(__S(310, __c38, 6)),
          taskArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ExecuteCommandResponse" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ cluster: S.String, tasks: S.optional(__S(4, __c0, 4)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTaskProtectionRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskArn: S.optional(S.String),
          protectionEnabled: S.optional(S.Boolean),
          expirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ProtectedTask" });
    case 2:
      return S.Array(__S(313, __c39, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          protectedTasks: S.optional(__S(314, __c39, 2)),
          failures: S.optional(__S(191, __c23, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetTaskProtectionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          value: S.optional(S.String),
          principalArn: S.optional(S.String),
          effectiveSettings: S.optional(S.Boolean),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAccountSettingsRequest",
      });
    case 5:
      return S.Array(__S(127, __c15, 7));
    case 6:
      return S.suspend(() =>
        S.Struct({
          settings: S.optional(__S(317, __c39, 5)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAccountSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          targetType: S.String,
          attributeName: S.optional(S.String),
          attributeValue: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAttributesRequest" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          attributes: S.optional(__S(130, __c16, 2)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListAttributesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListClustersRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterArns: S.optional(__S(4, __c0, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListClustersResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          filter: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          status: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListContainerInstancesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          containerInstanceArns: S.optional(__S(4, __c0, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListContainerInstancesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          before: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          after: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CreatedAt" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          daemonArn: S.String,
          status: S.optional(__S(69, __c8, 5)),
          createdAt: S.optional(__S(325, __c40, 5)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDaemonDeploymentsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          daemonDeploymentArn: S.optional(S.String),
          daemonArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          targetDaemonRevisionArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          finishedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DaemonDeploymentSummary" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(327, __c40, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          daemonDeployments: S.optional(__S(328, __c41, 0)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDaemonDeploymentsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterArn: S.optional(S.String),
          capacityProviderArns: S.optional(__S(4, __c0, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDaemonsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          daemonArn: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DaemonSummary" });
    case 4:
      return S.Array(__S(331, __c41, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          daemonSummariesList: S.optional(__S(332, __c41, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListDaemonsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          familyPrefix: S.optional(S.String),
          family: S.optional(S.String),
          revision: S.optional(S.String),
          status: S.optional(S.String),
          sort: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDaemonTaskDefinitionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          registeredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registeredBy: S.optional(S.String),
          deleteRequestedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DaemonTaskDefinitionSummary",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(335, __c41, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          daemonTaskDefinitions: S.optional(__S(336, __c42, 0)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDaemonTaskDefinitionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          service: S.String,
          cluster: S.optional(S.String),
          status: S.optional(__S(69, __c8, 5)),
          createdAt: S.optional(__S(325, __c40, 5)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListServiceDeploymentsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceDeploymentArn: S.optional(S.String),
          serviceArn: S.optional(S.String),
          clusterArn: S.optional(S.String),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          finishedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          targetServiceRevisionArn: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceDeploymentBrief" });
    case 4:
      return S.Array(__S(339, __c42, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          serviceDeployments: S.optional(__S(340, __c42, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListServiceDeploymentsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          launchType: S.optional(S.String),
          schedulingStrategy: S.optional(S.String),
          resourceManagementType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListServicesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceArns: S.optional(__S(4, __c0, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListServicesResponse" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          namespace: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListServicesByNamespaceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceArns: S.optional(__S(4, __c0, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListServicesByNamespaceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(20, __c2, 4)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          familyPrefix: S.optional(S.String),
          status: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTaskDefinitionFamiliesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ families: S.optional(__S(4, __c0, 4)), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "ListTaskDefinitionFamiliesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          familyPrefix: S.optional(S.String),
          status: S.optional(S.String),
          sort: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTaskDefinitionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskDefinitionArns: S.optional(__S(4, __c0, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTaskDefinitionsResponse",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          containerInstance: S.optional(S.String),
          family: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          startedBy: S.optional(S.String),
          serviceName: S.optional(S.String),
          desiredStatus: S.optional(S.String),
          launchType: S.optional(S.String),
          daemonName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTasksRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ taskArns: S.optional(__S(4, __c0, 4)), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListTasksResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, value: S.String, principalArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAccountSettingRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String, value: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutAccountSettingDefaultRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ cluster: S.optional(S.String), attributes: __S(130, __c16, 2) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAttributesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cluster: S.String,
          capacityProviders: __S(4, __c0, 4),
          defaultCapacityProviderStrategy: __S(32, __c4, 0),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutClusterCapacityProvidersRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ cluster: S.optional(__S(40, __c5, 0)) }).pipe(ns)).annotate(
        {
          identifier: "PutClusterCapacityProvidersResponse",
        },
      );
    case 7:
      return S.suspend(() => S.Struct({ id: S.String, type: S.String })).annotate({
        identifier: "PlatformDevice",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(359, __c44, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          instanceIdentityDocument: S.optional(S.String),
          instanceIdentityDocumentSignature: S.optional(S.String),
          totalResources: S.optional(__S(197, __c24, 5)),
          versionInfo: S.optional(__S(195, __c24, 3)),
          containerInstanceArn: S.optional(S.String),
          attributes: S.optional(__S(130, __c16, 2)),
          platformDevices: S.optional(__S(360, __c45, 0)),
          tags: S.optional(__S(20, __c2, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterContainerInstanceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          family: S.String,
          taskRoleArn: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          containerDefinitions: __S(241, __c30, 1),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          volumes: S.optional(__S(243, __c30, 3)),
          tags: S.optional(__S(20, __c2, 4)),
          pidMode: S.optional(S.String),
          ipcMode: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterDaemonTaskDefinitionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          family: S.String,
          taskRoleArn: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          networkMode: S.optional(S.String),
          containerDefinitions: __S(170, __c21, 2),
          volumes: S.optional(__S(180, __c22, 4)),
          placementConstraints: S.optional(__S(182, __c22, 6)),
          requiresCompatibilities: S.optional(__S(69, __c8, 5)),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          tags: S.optional(__S(20, __c2, 4)),
          pidMode: S.optional(S.String),
          ipcMode: S.optional(S.String),
          proxyConfiguration: S.optional(__S(186, __c23, 2)),
          inferenceAccelerators: S.optional(__S(185, __c23, 1)),
          ephemeralStorage: S.optional(__S(187, __c23, 3)),
          runtimePlatform: S.optional(__S(183, __c22, 7)),
          enableFaultInjection: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterTaskDefinitionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ deleteOnTermination: S.Boolean })).annotate({
        identifier: "TaskManagedEBSVolumeTerminationPolicy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          encrypted: S.optional(S.Boolean),
          kmsKeyId: S.optional(S.String),
          volumeType: S.optional(S.String),
          sizeInGiB: S.optional(S.Number),
          snapshotId: S.optional(S.String),
          volumeInitializationRate: S.optional(S.Number),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
          tagSpecifications: S.optional(__S(99, __c12, 3)),
          roleArn: S.String,
          terminationPolicy: S.optional(__S(364, __c45, 4)),
          filesystemType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TaskManagedEBSVolumeConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          managedEBSVolume: S.optional(__S(365, __c45, 5)),
        }),
      ).annotate({ identifier: "TaskVolumeConfiguration" });
    case 7:
      return S.Array(__S(366, __c45, 6));
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          cluster: S.optional(S.String),
          count: S.optional(S.Number),
          enableECSManagedTags: S.optional(S.Boolean),
          enableExecuteCommand: S.optional(S.Boolean),
          group: S.optional(S.String),
          launchType: S.optional(S.String),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          overrides: S.optional(__S(300, __c37, 4)),
          placementConstraints: S.optional(__S(78, __c9, 6)),
          placementStrategy: S.optional(__S(80, __c10, 0)),
          platformVersion: S.optional(S.String),
          propagateTags: S.optional(S.String),
          referenceId: S.optional(S.String),
          startedBy: S.optional(S.String),
          tags: S.optional(__S(20, __c2, 4)),
          taskDefinition: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          volumeConfigurations: S.optional(__S(367, __c45, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RunTaskRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          containerInstances: __S(4, __c0, 4),
          enableECSManagedTags: S.optional(S.Boolean),
          enableExecuteCommand: S.optional(S.Boolean),
          group: S.optional(S.String),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          overrides: S.optional(__S(300, __c37, 4)),
          propagateTags: S.optional(S.String),
          referenceId: S.optional(S.String),
          startedBy: S.optional(S.String),
          tags: S.optional(__S(20, __c2, 4)),
          taskDefinition: S.String,
          volumeConfigurations: S.optional(__S(367, __c45, 7)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartTaskRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          serviceDeploymentArn: S.String,
          stopType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StopServiceDeploymentRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          task: S.String,
          reason: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StopTaskRequest" });
    case 4:
      return S.suspend(() => S.Struct({ task: S.optional(__S(302, __c37, 6)) }).pipe(ns)).annotate({
        identifier: "StopTaskResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ attachmentArn: S.String, status: S.String })).annotate({
        identifier: "AttachmentStateChange",
      });
    case 6:
      return S.Array(__S(373, __c46, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ cluster: S.optional(S.String), attachments: __S(374, __c46, 6) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SubmitAttachmentStateChangesRequest",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ acknowledgment: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "SubmitAttachmentStateChangesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          task: S.optional(S.String),
          containerName: S.optional(S.String),
          runtimeId: S.optional(S.String),
          status: S.optional(S.String),
          exitCode: S.optional(S.Number),
          reason: S.optional(S.String),
          networkBindings: S.optional(__S(289, __c36, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SubmitContainerStateChangeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          containerName: S.optional(S.String),
          imageDigest: S.optional(S.String),
          runtimeId: S.optional(S.String),
          exitCode: S.optional(S.Number),
          networkBindings: S.optional(__S(289, __c36, 1)),
          reason: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "ContainerStateChange" });
    case 3:
      return S.Array(__S(378, __c47, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          containerName: S.String,
          managedAgentName: S.String,
          status: S.String,
          reason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedAgentStateChange" });
    case 5:
      return S.Array(__S(380, __c47, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          task: S.optional(S.String),
          status: S.optional(S.String),
          reason: S.optional(S.String),
          containers: S.optional(__S(379, __c47, 3)),
          attachments: S.optional(__S(374, __c46, 6)),
          managedAgents: S.optional(__S(381, __c47, 5)),
          pullStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          pullStoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionStoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SubmitTaskStateChangeRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(20, __c2, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: __S(4, __c0, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          managedScaling: S.optional(__S(2, __c0, 2)),
          managedTerminationProtection: S.optional(S.String),
          managedDraining: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutoScalingGroupProviderUpdate",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ec2InstanceProfileArn: S.optional(S.String),
          networkConfiguration: S.optional(__S(5, __c0, 5)),
          storageConfiguration: S.optional(__S(6, __c0, 6)),
          instanceMetadataTagsPropagation: S.optional(S.Boolean),
          localStorageConfiguration: S.optional(__S(7, __c0, 7)),
          monitoring: S.optional(S.String),
          instanceRequirements: S.optional(__S(13, __c1, 5)),
          capacityReservations: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({
        identifier: "InstanceLaunchTemplateUpdate",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          infrastructureRoleArn: S.String,
          instanceLaunchTemplate: __S(387, __c48, 3),
          propagateTags: S.optional(S.String),
          infrastructureOptimization: S.optional(__S(16, __c2, 0)),
          autoRepairConfiguration: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({
        identifier: "UpdateManagedInstancesProviderConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          cluster: S.optional(S.String),
          autoScalingGroupProvider: S.optional(__S(386, __c48, 2)),
          managedInstancesProvider: S.optional(__S(388, __c48, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateCapacityProviderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          cluster: S.String,
          settings: S.optional(__S(26, __c3, 2)),
          configuration: S.optional(__S(30, __c3, 6)),
          serviceConnectDefaults: S.optional(__S(33, __c4, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateClusterRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ cluster: S.String, settings: __S(26, __c3, 2) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateClusterSettingsRequest",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ cluster: S.optional(S.String), containerInstance: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateContainerAgentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          containerInstances: __S(4, __c0, 4),
          status: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateContainerInstancesStateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          daemonArn: S.String,
          daemonTaskDefinitionArn: S.String,
          capacityProviderArns: __S(4, __c0, 4),
          deploymentConfiguration: S.optional(__S(43, __c5, 3)),
          propagateTags: S.optional(S.String),
          enableECSManagedTags: S.optional(S.Boolean),
          enableExecuteCommand: S.optional(S.Boolean),
          critical: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateDaemonRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceArn: S.String,
          executionRoleArn: S.optional(S.String),
          healthCheckPath: S.optional(S.String),
          primaryContainer: S.optional(__S(50, __c6, 2)),
          taskRoleArn: S.optional(S.String),
          networkConfiguration: S.optional(__S(51, __c6, 3)),
          cpu: S.optional(S.String),
          memory: S.optional(S.String),
          cpuArchitecture: S.optional(S.String),
          scalingTarget: S.optional(__S(52, __c6, 4)),
          taskDefinitionArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateExpressGatewayServiceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceArn: S.optional(S.String),
          cluster: S.optional(S.String),
          serviceName: S.optional(S.String),
          status: S.optional(__S(54, __c6, 6)),
          targetConfiguration: S.optional(__S(57, __c7, 1)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "UpdatedExpressGatewayService",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ service: S.optional(__S(396, __c49, 4)) }).pipe(ns),
      ).annotate({
        identifier: "UpdateExpressGatewayServiceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          cluster: S.optional(S.String),
          service: S.String,
          desiredCount: S.optional(S.Number),
          taskDefinition: S.optional(S.String),
          capacityProviderStrategy: S.optional(__S(32, __c4, 0)),
          deploymentConfiguration: S.optional(__S(76, __c9, 4)),
          availabilityZoneRebalancing: S.optional(S.String),
          networkConfiguration: S.optional(__S(82, __c10, 2)),
          placementConstraints: S.optional(__S(78, __c9, 6)),
          placementStrategy: S.optional(__S(80, __c10, 0)),
          platformVersion: S.optional(S.String),
          forceNewDeployment: S.optional(S.Boolean),
          healthCheckGracePeriodSeconds: S.optional(S.Number),
          deploymentController: S.optional(__S(83, __c10, 3)),
          enableExecuteCommand: S.optional(S.Boolean),
          enableECSManagedTags: S.optional(S.Boolean),
          loadBalancers: S.optional(__S(63, __c7, 7)),
          propagateTags: S.optional(S.String),
          serviceRegistries: S.optional(__S(65, __c8, 1)),
          serviceConnectConfiguration: S.optional(__S(97, __c12, 1)),
          volumeConfigurations: S.optional(__S(102, __c12, 6)),
          vpcLatticeConfigurations: S.optional(__S(105, __c13, 1)),
          monitoring: S.optional(__S(108, __c13, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateServiceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ cluster: S.String, service: S.String, primaryTaskSet: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateServicePrimaryTaskSetRequest",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ taskSet: S.optional(__S(112, __c14, 0)) }).pipe(ns),
      ).annotate({
        identifier: "UpdateServicePrimaryTaskSetResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cluster: S.String,
          tasks: __S(4, __c0, 4),
          protectionEnabled: S.Boolean,
          expiresInMinutes: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateTaskProtectionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          cluster: S.String,
          service: S.String,
          taskSet: S.String,
          scale: __S(110, __c13, 6),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateTaskSetRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
