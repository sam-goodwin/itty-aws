import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const ns = /*@__PURE__*/ T.XmlNamespace("http://batch.amazonaws.com/doc/2016-08-10/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Batch",
  serviceShapeName: "AWSBatchV20160810",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "batch" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-08-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://batch-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws") {
              return e(`https://fips.batch.${Region}.amazonaws.com`);
            }
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://batch.${Region}.amazonaws.com`);
            }
            return e(`https://batch-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://batch.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://batch.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ClientException
  extends /*@__PURE__*/ S.TaggedError<ClientException>()(
    "ClientException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ComputeEnvironmentBeingModified
  extends /*@__PURE__*/ S.TaggedError<ComputeEnvironmentBeingModified>()(
    "ComputeEnvironmentBeingModified",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ClientException",
      message: { includes: "is being modified" },
    }),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class ComputeEnvironmentInUse
  extends /*@__PURE__*/ S.TaggedError<ComputeEnvironmentInUse>()(
    "ComputeEnvironmentInUse",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ClientException",
      message: { includes: "found existing JobQueue relationship" },
    }),
  ).pipe(C.withDependencyViolationError, C.withRetryableError) {}
export class ComputeEnvironmentNotFound
  extends /*@__PURE__*/ S.TaggedError<ComputeEnvironmentNotFound>()(
    "ComputeEnvironmentNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ClientException",
      message: { matches: "compute-environment/.* does not exist" },
    }),
  ).pipe(C.withNotFoundError) {}
export class ComputeEnvironmentNotValid
  extends /*@__PURE__*/ S.TaggedError<ComputeEnvironmentNotValid>()(
    "ComputeEnvironmentNotValid",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ClientException",
      message: { matches: "must be (created and )?valid before attaching" },
    }),
  ).pipe(C.withDependencyViolationError, C.withRetryableError) {}
export class JobQueueAlreadyExists
  extends /*@__PURE__*/ S.TaggedError<JobQueueAlreadyExists>()(
    "JobQueueAlreadyExists",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ClientException",
      message: { includes: "already exists" },
    }),
  ).pipe(C.withAlreadyExistsError, C.withConflictError) {}
export class JobQueueBeingModified
  extends /*@__PURE__*/ S.TaggedError<JobQueueBeingModified>()(
    "JobQueueBeingModified",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ClientException",
      message: { includes: "is being modified" },
    }),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class JobQueueNotFound
  extends /*@__PURE__*/ S.TaggedError<JobQueueNotFound>()(
    "JobQueueNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ClientException",
      message: { matches: "job-queue/.* does not exist" },
    }),
  ).pipe(C.withNotFoundError) {}
export class ServerException
  extends /*@__PURE__*/ S.TaggedError<ServerException>()(
    "ServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export interface CancelJobRequest {
  jobId?: string;
  reason?: string;
}
const CancelJobRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<CancelJobRequest>;
export interface CancelJobResponse {}
const CancelJobResponse = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<CancelJobResponse>;
export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c0, 2);
export interface CancelJobsRequest {
  jobs?: string[];
  reason?: string;
}
const CancelJobsRequest = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<CancelJobsRequest>;
export interface CancelJobsErrorDetail {
  job?: string;
  code?: string;
  message?: string;
}
const CancelJobsErrorDetail = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CancelJobsErrorDetail>;
export type CancelJobsErrorDetailList = CancelJobsErrorDetail[];
const CancelJobsErrorDetailList = /*@__PURE__*/ __L.at(__c0, 5);
export interface CancelJobsResponse {
  successful: string[];
  errors: (CancelJobsErrorDetail & { job: string; code: string; message: string })[];
}
const CancelJobsResponse = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<CancelJobsResponse>;
export type CEType = "MANAGED" | "UNMANAGED" | (string & {});
const CEType = S.String;

export type CEState = "ENABLED" | "DISABLED" | (string & {});
const CEState = S.String;

export type CRType =
  | "EC2"
  | "SPOT"
  | "FARGATE"
  | "FARGATE_SPOT"
  | "ECS_MANAGED_INSTANCES"
  | (string & {});
const CRType = S.String;

export type CRAllocationStrategy =
  | "BEST_FIT"
  | "BEST_FIT_PROGRESSIVE"
  | "BEST_FIT_PROGRESSIVE_ORDERED"
  | "SPOT_CAPACITY_OPTIMIZED"
  | "SPOT_PRICE_CAPACITY_OPTIMIZED"
  | "SPOT_CAPACITY_OPTIMIZED_PRIORITIZED"
  | (string & {});
const CRAllocationStrategy = S.String;

export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c0, 7);
export type UserdataType = "EKS_BOOTSTRAP_SH" | "EKS_NODEADM" | (string & {});
const UserdataType = S.String;

export interface LaunchTemplateSpecificationOverride {
  launchTemplateId?: string;
  launchTemplateName?: string;
  version?: string;
  targetInstanceTypes?: string[];
  userdataType?: UserdataType;
}
const LaunchTemplateSpecificationOverride = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<LaunchTemplateSpecificationOverride>;
export type LaunchTemplateSpecificationOverrideList = LaunchTemplateSpecificationOverride[];
const LaunchTemplateSpecificationOverrideList = /*@__PURE__*/ __L.at(__c1, 1);
export interface LaunchTemplateSpecification {
  launchTemplateId?: string;
  launchTemplateName?: string;
  version?: string;
  overrides?: LaunchTemplateSpecificationOverride[];
  userdataType?: UserdataType;
}
const LaunchTemplateSpecification = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<LaunchTemplateSpecification>;
export type ImageType = string;
export type ImageIdOverride = string;
export type KubernetesVersion = string;
export interface Ec2Configuration {
  imageType?: string;
  imageIdOverride?: string;
  batchImageStatus?: string;
  imageKubernetesVersion?: string;
}
const Ec2Configuration = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Ec2Configuration>;
export type Ec2ConfigurationList = Ec2Configuration[];
const Ec2ConfigurationList = /*@__PURE__*/ __L.at(__c1, 4);
export interface ComputeScalingPolicy {
  minScaleDownDelayMinutes?: number;
}
const ComputeScalingPolicy = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<ComputeScalingPolicy>;
export interface ManagedInstancesNetworkConfiguration {
  subnets?: string[];
  securityGroups?: string[];
}
const ManagedInstancesNetworkConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<ManagedInstancesNetworkConfiguration>;
export interface InstanceRequirementsRequest {
  allowedInstanceTypes?: string[];
}
const InstanceRequirementsRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<InstanceRequirementsRequest>;
export interface ManagedInstancesStorageConfiguration {
  storageSizeGiB?: number;
}
const ManagedInstancesStorageConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<ManagedInstancesStorageConfiguration>;
export interface CapacityReservationRequest {
  reservationGroupArn?: string;
  reservationPreference?: string;
}
const CapacityReservationRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CapacityReservationRequest>;
export interface ManagedInstancesLocalStorageConfiguration {
  useLocalStorage?: boolean;
}
const ManagedInstancesLocalStorageConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<ManagedInstancesLocalStorageConfiguration>;
export interface InstanceLaunchTemplate {
  ec2InstanceProfileArn?: string;
  networkConfiguration?: ManagedInstancesNetworkConfiguration;
  instanceRequirements?: InstanceRequirementsRequest;
  capacityOptionType?: string;
  storageConfiguration?: ManagedInstancesStorageConfiguration;
  monitoring?: string;
  fipsEnabled?: boolean;
  capacityReservations?: CapacityReservationRequest;
  instanceMetadataTagsPropagation?: boolean;
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration;
}
const InstanceLaunchTemplate = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<InstanceLaunchTemplate>;
export interface InfrastructureOptimization {
  scaleInAfter?: number;
}
const InfrastructureOptimization = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<InfrastructureOptimization>;
export interface ManagedInstancesProvider {
  propagateTags?: string;
  infrastructureRoleArn?: string;
  instanceLaunchTemplate?: InstanceLaunchTemplate;
  infrastructureOptimization?: InfrastructureOptimization;
}
const ManagedInstancesProvider = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<ManagedInstancesProvider>;
export type TagKey = string;
export type TagValue = string;
export type TagrisTagsMap = { [key: string]: string | undefined };
const TagrisTagsMap = /*@__PURE__*/ __L.at(__c2, 6);
export interface ComputeResource {
  type?: CRType;
  allocationStrategy?: CRAllocationStrategy;
  minvCpus?: number;
  maxvCpus?: number;
  desiredvCpus?: number;
  instanceTypes?: string[];
  imageId?: string;
  subnets?: string[];
  securityGroupIds?: string[];
  ec2KeyPair?: string;
  instanceRole?: string;
  tags?: { [key: string]: string | undefined };
  placementGroup?: string;
  bidPercentage?: number;
  spotIamFleetRole?: string;
  launchTemplate?: LaunchTemplateSpecification;
  ec2Configuration?: Ec2Configuration[];
  scalingPolicy?: ComputeScalingPolicy;
  managedInstancesProvider?: ManagedInstancesProvider;
  capacityTags?: { [key: string]: string | undefined };
}
const ComputeResource = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<ComputeResource>;
export type EksAccessEntryDesiredState =
  | "ENABLED"
  | "DISABLED"
  | "INHERIT_FROM_CLUSTER"
  | (string & {});
const EksAccessEntryDesiredState = S.String;

export type EksAccessEntryStatus = "ACTIVE" | "INACTIVE" | (string & {});
const EksAccessEntryStatus = S.String;

export interface EksAccessEntry {
  desiredState?: EksAccessEntryDesiredState;
  status?: EksAccessEntryStatus;
}
const EksAccessEntry = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<EksAccessEntry>;
export interface EksConfiguration {
  eksClusterArn?: string;
  kubernetesNamespace?: string;
  accessEntry?: EksAccessEntry;
}
const EksConfiguration = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<EksConfiguration>;
export type ContainerInsights = "ENABLED" | "ENHANCED" | "DISABLED" | (string & {});
const ContainerInsights = S.String;

export interface EcsSettings {
  containerInsights?: ContainerInsights;
}
const EcsSettings = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<EcsSettings>;
export interface CreateComputeEnvironmentRequest {
  computeEnvironmentName?: string;
  type?: CEType;
  state?: CEState;
  unmanagedvCpus?: number;
  computeResources?: ComputeResource;
  serviceRole?: string;
  tags?: { [key: string]: string | undefined };
  eksConfiguration?: EksConfiguration;
  context?: string;
  ecsSettings?: EcsSettings;
}
const CreateComputeEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateComputeEnvironmentRequest>;
export interface CreateComputeEnvironmentResponse {
  computeEnvironmentName?: string;
  computeEnvironmentArn?: string;
}
const CreateComputeEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateComputeEnvironmentResponse>;
export interface CreateConsumableResourceRequest {
  consumableResourceName?: string;
  totalQuantity?: number;
  resourceType?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateConsumableResourceRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateConsumableResourceRequest>;
export interface CreateConsumableResourceResponse {
  consumableResourceName: string;
  consumableResourceArn: string;
}
const CreateConsumableResourceResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateConsumableResourceResponse>;
export type JQState = "ENABLED" | "DISABLED" | (string & {});
const JQState = S.String;

export interface ComputeEnvironmentOrder {
  order?: number;
  computeEnvironment?: string;
}
const ComputeEnvironmentOrder = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<ComputeEnvironmentOrder>;
export type ComputeEnvironmentOrders = ComputeEnvironmentOrder[];
const ComputeEnvironmentOrders = /*@__PURE__*/ __L.at(__c4, 0);
export interface ServiceEnvironmentOrder {
  order?: number;
  serviceEnvironment?: string;
}
const ServiceEnvironmentOrder = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<ServiceEnvironmentOrder>;
export type ServiceEnvironmentOrders = ServiceEnvironmentOrder[];
const ServiceEnvironmentOrders = /*@__PURE__*/ __L.at(__c4, 2);
export type JobQueueType =
  | "EKS"
  | "ECS"
  | "ECS_FARGATE"
  | "SAGEMAKER_TRAINING"
  | "ECS_MANAGED_INSTANCES"
  | (string & {});
const JobQueueType = S.String;

export type JobStateTimeLimitActionsState = "RUNNABLE" | (string & {});
const JobStateTimeLimitActionsState = S.String;

export type JobStateTimeLimitActionsAction = "CANCEL" | "TERMINATE" | (string & {});
const JobStateTimeLimitActionsAction = S.String;

export interface JobStateTimeLimitAction {
  reason?: string;
  state?: JobStateTimeLimitActionsState;
  maxTimeSeconds?: number;
  action?: JobStateTimeLimitActionsAction;
}
const JobStateTimeLimitAction = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<JobStateTimeLimitAction>;
export type JobStateTimeLimitActions = JobStateTimeLimitAction[];
const JobStateTimeLimitActions = /*@__PURE__*/ __L.at(__c4, 4);
export interface CreateJobQueueRequest {
  jobQueueName?: string;
  state?: JQState;
  schedulingPolicyArn?: string;
  priority?: number;
  computeEnvironmentOrder?: ComputeEnvironmentOrder[];
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[];
  jobQueueType?: JobQueueType;
  tags?: { [key: string]: string | undefined };
  jobStateTimeLimitActions?: JobStateTimeLimitAction[];
}
const CreateJobQueueRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateJobQueueRequest>;
export interface CreateJobQueueResponse {
  jobQueueName: string;
  jobQueueArn: string;
}
const CreateJobQueueResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateJobQueueResponse>;
export interface QuotaShareCapacityLimit {
  maxCapacity?: number;
  capacityUnit?: string;
}
const QuotaShareCapacityLimit = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<QuotaShareCapacityLimit>;
export type QuotaShareCapacityLimits = QuotaShareCapacityLimit[];
const QuotaShareCapacityLimits = /*@__PURE__*/ __L.at(__c5, 0);
export type QuotaShareResourceSharingStrategy =
  | "RESERVE"
  | "LEND"
  | "LEND_AND_BORROW"
  | (string & {});
const QuotaShareResourceSharingStrategy = S.String;

export interface QuotaShareResourceSharingConfiguration {
  strategy?: QuotaShareResourceSharingStrategy;
  borrowLimit?: number;
}
const QuotaShareResourceSharingConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<QuotaShareResourceSharingConfiguration>;
export type QuotaShareInSharePreemptionState = "ENABLED" | "DISABLED" | (string & {});
const QuotaShareInSharePreemptionState = S.String;

export interface QuotaSharePreemptionConfiguration {
  inSharePreemption?: QuotaShareInSharePreemptionState;
}
const QuotaSharePreemptionConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<QuotaSharePreemptionConfiguration>;
export type QuotaShareState = "ENABLED" | "DISABLED" | (string & {});
const QuotaShareState = S.String;

export interface CreateQuotaShareRequest {
  quotaShareName?: string;
  jobQueue?: string;
  capacityLimits?: QuotaShareCapacityLimit[];
  resourceSharingConfiguration?: QuotaShareResourceSharingConfiguration;
  preemptionConfiguration?: QuotaSharePreemptionConfiguration;
  state?: QuotaShareState;
  tags?: { [key: string]: string | undefined };
}
const CreateQuotaShareRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateQuotaShareRequest>;
export interface CreateQuotaShareResponse {
  quotaShareName?: string;
  quotaShareArn?: string;
}
const CreateQuotaShareResponse = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<CreateQuotaShareResponse>;
export type QuotaShareIdleResourceAssignmentStrategy = "FIFO" | (string & {});
const QuotaShareIdleResourceAssignmentStrategy = S.String;

export interface QuotaSharePolicy {
  idleResourceAssignmentStrategy?: QuotaShareIdleResourceAssignmentStrategy;
}
const QuotaSharePolicy = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<QuotaSharePolicy>;
export interface ShareAttributes {
  shareIdentifier?: string;
  weightFactor?: number;
}
const ShareAttributes = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<ShareAttributes>;
export type ShareAttributesList = ShareAttributes[];
const ShareAttributesList = /*@__PURE__*/ __L.at(__c5, 7);
export interface FairsharePolicy {
  shareDecaySeconds?: number;
  computeReservation?: number;
  shareDistribution?: ShareAttributes[];
}
const FairsharePolicy = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<FairsharePolicy>;
export interface CreateSchedulingPolicyRequest {
  name?: string;
  quotaSharePolicy?: QuotaSharePolicy;
  fairsharePolicy?: FairsharePolicy;
  tags?: { [key: string]: string | undefined };
}
const CreateSchedulingPolicyRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CreateSchedulingPolicyRequest>;
export interface CreateSchedulingPolicyResponse {
  name: string;
  arn: string;
}
const CreateSchedulingPolicyResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<CreateSchedulingPolicyResponse>;
export type ServiceEnvironmentType = "SAGEMAKER_TRAINING" | (string & {});
const ServiceEnvironmentType = S.String;

export type ServiceEnvironmentState = "ENABLED" | "DISABLED" | (string & {});
const ServiceEnvironmentState = S.String;

export interface CapacityLimit {
  maxCapacity?: number;
  capacityUnit?: string;
}
export type CapacityLimits = CapacityLimit[];
const CapacityLimits = QuotaShareCapacityLimits as any as S.Schema<CapacityLimits>;
export interface CreateServiceEnvironmentRequest {
  serviceEnvironmentName?: string;
  serviceEnvironmentType?: ServiceEnvironmentType;
  state?: ServiceEnvironmentState;
  capacityLimits?: CapacityLimit[];
  tags?: { [key: string]: string | undefined };
}
const CreateServiceEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<CreateServiceEnvironmentRequest>;
export interface CreateServiceEnvironmentResponse {
  serviceEnvironmentName: string;
  serviceEnvironmentArn: string;
}
const CreateServiceEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateServiceEnvironmentResponse>;
export interface DeleteComputeEnvironmentRequest {
  computeEnvironment?: string;
}
const DeleteComputeEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DeleteComputeEnvironmentRequest>;
export interface DeleteComputeEnvironmentResponse {}
const DeleteComputeEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DeleteComputeEnvironmentResponse>;
export interface DeleteConsumableResourceRequest {
  consumableResource?: string;
}
const DeleteConsumableResourceRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteConsumableResourceRequest>;
export interface DeleteConsumableResourceResponse {}
const DeleteConsumableResourceResponse =
  DeleteComputeEnvironmentResponse as any as S.Schema<DeleteConsumableResourceResponse>;
export interface DeleteJobQueueRequest {
  jobQueue?: string;
}
const DeleteJobQueueRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteJobQueueRequest>;
export interface DeleteJobQueueResponse {}
const DeleteJobQueueResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteJobQueueResponse>;
export interface DeleteQuotaShareRequest {
  quotaShareArn?: string;
}
const DeleteQuotaShareRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteQuotaShareRequest>;
export interface DeleteQuotaShareResponse {}
const DeleteQuotaShareResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteQuotaShareResponse>;
export interface DeleteSchedulingPolicyRequest {
  arn?: string;
}
const DeleteSchedulingPolicyRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteSchedulingPolicyRequest>;
export interface DeleteSchedulingPolicyResponse {}
const DeleteSchedulingPolicyResponse =
  DeleteComputeEnvironmentResponse as any as S.Schema<DeleteSchedulingPolicyResponse>;
export interface DeleteServiceEnvironmentRequest {
  serviceEnvironment?: string;
}
const DeleteServiceEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DeleteServiceEnvironmentRequest>;
export interface DeleteServiceEnvironmentResponse {}
const DeleteServiceEnvironmentResponse =
  DeleteComputeEnvironmentResponse as any as S.Schema<DeleteServiceEnvironmentResponse>;
export interface DeregisterJobDefinitionRequest {
  jobDefinition?: string;
}
const DeregisterJobDefinitionRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DeregisterJobDefinitionRequest>;
export interface DeregisterJobDefinitionResponse {}
const DeregisterJobDefinitionResponse =
  DeleteComputeEnvironmentResponse as any as S.Schema<DeregisterJobDefinitionResponse>;
export interface DescribeComputeEnvironmentsRequest {
  computeEnvironments?: string[];
  maxResults?: number;
  nextToken?: string;
}
const DescribeComputeEnvironmentsRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeComputeEnvironmentsRequest>;
export type CEStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "VALID"
  | "INVALID"
  | (string & {});
const CEStatus = S.String;

export type JobExecutionTimeoutMinutes = number;
export interface UpdatePolicy {
  terminateJobsOnUpdate?: boolean;
  jobExecutionTimeoutMinutes?: number;
}
const UpdatePolicy = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<UpdatePolicy>;
export type OrchestrationType = "ECS" | "EKS" | (string & {});
const OrchestrationType = S.String;

export interface ComputeEnvironmentDetail {
  computeEnvironmentName?: string;
  computeEnvironmentArn?: string;
  unmanagedvCpus?: number;
  ecsClusterArn?: string;
  tags?: { [key: string]: string | undefined };
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
  ecsSettings?: EcsSettings;
}
const ComputeEnvironmentDetail = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<ComputeEnvironmentDetail>;
export type ComputeEnvironmentDetailList = ComputeEnvironmentDetail[];
const ComputeEnvironmentDetailList = /*@__PURE__*/ __L.at(__c8, 2);
export interface DescribeComputeEnvironmentsResponse {
  computeEnvironments?: (ComputeEnvironmentDetail & {
    computeEnvironmentName: string;
    computeEnvironmentArn: string;
    computeResources: ComputeResource & {
      type: CRType;
      maxvCpus: number;
      ec2Configuration: (Ec2Configuration & { imageType: ImageType })[];
      managedInstancesProvider: ManagedInstancesProvider & {
        infrastructureRoleArn: string;
        instanceLaunchTemplate: InstanceLaunchTemplate & {
          ec2InstanceProfileArn: string;
          networkConfiguration: ManagedInstancesNetworkConfiguration & {
            subnets: StringList;
            securityGroups: StringList;
          };
        };
      };
    };
    eksConfiguration: EksConfiguration & {
      eksClusterArn: string;
      kubernetesNamespace: string;
      accessEntry: EksAccessEntry & { desiredState: EksAccessEntryDesiredState };
    };
  })[];
  nextToken?: string;
}
const DescribeComputeEnvironmentsResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DescribeComputeEnvironmentsResponse>;
export interface DescribeConsumableResourceRequest {
  consumableResource?: string;
}
const DescribeConsumableResourceRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DescribeConsumableResourceRequest>;
export interface DescribeConsumableResourceResponse {
  consumableResourceName: string;
  consumableResourceArn: string;
  totalQuantity?: number;
  inUseQuantity?: number;
  availableQuantity?: number;
  resourceType?: string;
  createdAt?: number;
  tags?: { [key: string]: string | undefined };
}
const DescribeConsumableResourceResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeConsumableResourceResponse>;
export interface DescribeJobDefinitionsRequest {
  jobDefinitions?: string[];
  maxResults?: number;
  jobDefinitionName?: string;
  status?: string;
  nextToken?: string;
}
const DescribeJobDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeJobDefinitionsRequest>;
export type ParametersMap = { [key: string]: string | undefined };
const ParametersMap = TagrisTagsMap as any as S.Schema<ParametersMap>;
export type RetryAction = "RETRY" | "EXIT" | (string & {});
const RetryAction = S.String;

export interface EvaluateOnExit {
  onStatusReason?: string;
  onReason?: string;
  onExitCode?: string;
  action?: RetryAction;
}
const EvaluateOnExit = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<EvaluateOnExit>;
export type EvaluateOnExitList = EvaluateOnExit[];
const EvaluateOnExitList = /*@__PURE__*/ __L.at(__c9, 0);
export interface RetryStrategy {
  attempts?: number;
  evaluateOnExit?: EvaluateOnExit[];
}
const RetryStrategy = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<RetryStrategy>;
export interface Host {
  sourcePath?: string;
}
const Host = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<Host>;
export type EFSTransitEncryption = "ENABLED" | "DISABLED" | (string & {});
const EFSTransitEncryption = S.String;

export type EFSAuthorizationConfigIAM = "ENABLED" | "DISABLED" | (string & {});
const EFSAuthorizationConfigIAM = S.String;

export interface EFSAuthorizationConfig {
  accessPointId?: string;
  iam?: EFSAuthorizationConfigIAM;
}
const EFSAuthorizationConfig = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<EFSAuthorizationConfig>;
export interface EFSVolumeConfiguration {
  fileSystemId?: string;
  rootDirectory?: string;
  transitEncryption?: EFSTransitEncryption;
  transitEncryptionPort?: number;
  authorizationConfig?: EFSAuthorizationConfig;
}
const EFSVolumeConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<EFSVolumeConfiguration>;
export interface S3FilesVolumeConfiguration {
  fileSystemArn?: string;
  rootDirectory?: string;
  transitEncryptionPort?: number;
  accessPointArn?: string;
}
const S3FilesVolumeConfiguration = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<S3FilesVolumeConfiguration>;
export interface Volume {
  host?: Host;
  name?: string;
  efsVolumeConfiguration?: EFSVolumeConfiguration;
  s3filesVolumeConfiguration?: S3FilesVolumeConfiguration;
}
const Volume = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<Volume>;
export type Volumes = Volume[];
const Volumes = /*@__PURE__*/ __L.at(__c9, 7);
export interface KeyValuePair {
  name?: string;
  value?: string;
}
const KeyValuePair = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<KeyValuePair>;
export type EnvironmentVariables = KeyValuePair[];
const EnvironmentVariables = /*@__PURE__*/ __L.at(__c10, 1);
export interface MountPoint {
  containerPath?: string;
  readOnly?: boolean;
  sourceVolume?: string;
}
const MountPoint = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<MountPoint>;
export type MountPoints = MountPoint[];
const MountPoints = /*@__PURE__*/ __L.at(__c10, 3);
export interface Ulimit {
  hardLimit?: number;
  name?: string;
  softLimit?: number;
}
const Ulimit = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<Ulimit>;
export type Ulimits = Ulimit[];
const Ulimits = /*@__PURE__*/ __L.at(__c10, 5);
export type ResourceType = "GPU" | "VCPU" | "MEMORY" | (string & {});
const ResourceType = S.String;

export interface ResourceRequirement {
  value?: string;
  type?: ResourceType;
}
const ResourceRequirement = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<ResourceRequirement>;
export type ResourceRequirements = ResourceRequirement[];
const ResourceRequirements = /*@__PURE__*/ __L.at(__c10, 7);
export type DeviceCgroupPermission = "READ" | "WRITE" | "MKNOD" | (string & {});
const DeviceCgroupPermission = S.String;

export type DeviceCgroupPermissions = DeviceCgroupPermission[];
const DeviceCgroupPermissions = /*@__PURE__*/ __L.at(__c11, 0);
export interface Device {
  hostPath?: string;
  containerPath?: string;
  permissions?: DeviceCgroupPermission[];
}
const Device = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<Device>;
export type DevicesList = Device[];
const DevicesList = /*@__PURE__*/ __L.at(__c11, 2);
export interface Tmpfs {
  containerPath?: string;
  size?: number;
  mountOptions?: string[];
}
const Tmpfs = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<Tmpfs>;
export type TmpfsList = Tmpfs[];
const TmpfsList = /*@__PURE__*/ __L.at(__c11, 4);
export interface LinuxParameters {
  devices?: Device[];
  initProcessEnabled?: boolean;
  sharedMemorySize?: number;
  tmpfs?: Tmpfs[];
  maxSwap?: number;
  swappiness?: number;
}
const LinuxParameters = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<LinuxParameters>;
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
const LogDriver = S.String;

export type LogConfigurationOptionsMap = { [key: string]: string | undefined };
const LogConfigurationOptionsMap = TagrisTagsMap as any as S.Schema<LogConfigurationOptionsMap>;
export interface Secret {
  name?: string;
  valueFrom?: string;
}
const Secret = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<Secret>;
export type SecretList = Secret[];
const SecretList = /*@__PURE__*/ __L.at(__c11, 7);
export interface LogConfiguration {
  logDriver?: LogDriver;
  options?: { [key: string]: string | undefined };
  secretOptions?: Secret[];
}
const LogConfiguration = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<LogConfiguration>;
export type AssignPublicIp = "ENABLED" | "DISABLED" | (string & {});
const AssignPublicIp = S.String;

export interface NetworkConfiguration {
  assignPublicIp?: AssignPublicIp;
}
const NetworkConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<NetworkConfiguration>;
export interface FargatePlatformConfiguration {
  platformVersion?: string;
}
const FargatePlatformConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<FargatePlatformConfiguration>;
export interface EphemeralStorage {
  sizeInGiB?: number;
}
const EphemeralStorage = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<EphemeralStorage>;
export interface RuntimePlatform {
  operatingSystemFamily?: string;
  cpuArchitecture?: string;
}
const RuntimePlatform = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<RuntimePlatform>;
export interface RepositoryCredentials {
  credentialsParameter?: string;
}
const RepositoryCredentials = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<RepositoryCredentials>;
export interface ContainerProperties {
  image?: string;
  vcpus?: number;
  memory?: number;
  command?: string[];
  jobRoleArn?: string;
  executionRoleArn?: string;
  volumes?: Volume[];
  environment?: KeyValuePair[];
  mountPoints?: MountPoint[];
  readonlyRootFilesystem?: boolean;
  privileged?: boolean;
  ulimits?: Ulimit[];
  user?: string;
  instanceType?: string;
  resourceRequirements?: ResourceRequirement[];
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  secrets?: Secret[];
  networkConfiguration?: NetworkConfiguration;
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
  enableExecuteCommand?: boolean;
  ephemeralStorage?: EphemeralStorage;
  runtimePlatform?: RuntimePlatform;
  repositoryCredentials?: RepositoryCredentials;
}
const ContainerProperties = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<ContainerProperties>;
export interface JobTimeout {
  attemptDurationSeconds?: number;
}
const JobTimeout = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<JobTimeout>;
export interface TaskContainerDependency {
  containerName?: string;
  condition?: string;
}
const TaskContainerDependency = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<TaskContainerDependency>;
export type TaskContainerDependencyList = TaskContainerDependency[];
const TaskContainerDependencyList = /*@__PURE__*/ __L.at(__c13, 1);
export type FirelensConfigurationType = "fluentd" | "fluentbit" | (string & {});
const FirelensConfigurationType = S.String;

export type FirelensConfigurationOptionsMap = { [key: string]: string | undefined };
const FirelensConfigurationOptionsMap =
  TagrisTagsMap as any as S.Schema<FirelensConfigurationOptionsMap>;
export interface FirelensConfiguration {
  type?: FirelensConfigurationType;
  options?: { [key: string]: string | undefined };
}
const FirelensConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<FirelensConfiguration>;
export interface TaskContainerProperties {
  command?: string[];
  dependsOn?: TaskContainerDependency[];
  environment?: KeyValuePair[];
  essential?: boolean;
  firelensConfiguration?: FirelensConfiguration;
  image?: string;
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  mountPoints?: MountPoint[];
  name?: string;
  privileged?: boolean;
  readonlyRootFilesystem?: boolean;
  repositoryCredentials?: RepositoryCredentials;
  resourceRequirements?: ResourceRequirement[];
  secrets?: Secret[];
  ulimits?: Ulimit[];
  user?: string;
  startTimeout?: number;
  stopTimeout?: number;
}
const TaskContainerProperties = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<TaskContainerProperties>;
export type ListTaskContainerProperties = TaskContainerProperties[];
const ListTaskContainerProperties = /*@__PURE__*/ __L.at(__c13, 4);
export interface EcsTaskProperties {
  containers?: TaskContainerProperties[];
  ephemeralStorage?: EphemeralStorage;
  executionRoleArn?: string;
  platformVersion?: string;
  ipcMode?: string;
  taskRoleArn?: string;
  pidMode?: string;
  networkConfiguration?: NetworkConfiguration;
  runtimePlatform?: RuntimePlatform;
  volumes?: Volume[];
  enableExecuteCommand?: boolean;
  networkMode?: string;
}
const EcsTaskProperties = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<EcsTaskProperties>;
export type ListEcsTaskProperties = EcsTaskProperties[];
const ListEcsTaskProperties = /*@__PURE__*/ __L.at(__c13, 6);
export interface EcsProperties {
  taskProperties?: EcsTaskProperties[];
}
const EcsProperties = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<EcsProperties>;
export interface ImagePullSecret {
  name?: string;
}
const ImagePullSecret = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<ImagePullSecret>;
export type ImagePullSecrets = ImagePullSecret[];
const ImagePullSecrets = /*@__PURE__*/ __L.at(__c14, 1);
export interface EksContainerEnvironmentVariable {
  name?: string;
  value?: string;
}
const EksContainerEnvironmentVariable = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<EksContainerEnvironmentVariable>;
export type EksContainerEnvironmentVariables = EksContainerEnvironmentVariable[];
const EksContainerEnvironmentVariables = /*@__PURE__*/ __L.at(__c14, 3);
export type Quantity = string;
export type EksLimits = { [key: string]: string | undefined };
const EksLimits = TagsMap as any as S.Schema<EksLimits>;
export type EksRequests = { [key: string]: string | undefined };
const EksRequests = TagrisTagsMap as any as S.Schema<EksRequests>;
export interface EksContainerResourceRequirements {
  limits?: { [key: string]: string | undefined };
  requests?: { [key: string]: string | undefined };
}
const EksContainerResourceRequirements = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<EksContainerResourceRequirements>;
export interface EksContainerVolumeMount {
  name?: string;
  mountPath?: string;
  subPath?: string;
  readOnly?: boolean;
}
const EksContainerVolumeMount = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<EksContainerVolumeMount>;
export type EksContainerVolumeMounts = EksContainerVolumeMount[];
const EksContainerVolumeMounts = /*@__PURE__*/ __L.at(__c14, 6);
export interface EksContainerSecurityContext {
  runAsUser?: number;
  runAsGroup?: number;
  privileged?: boolean;
  allowPrivilegeEscalation?: boolean;
  readOnlyRootFilesystem?: boolean;
  runAsNonRoot?: boolean;
}
const EksContainerSecurityContext = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<EksContainerSecurityContext>;
export interface EksContainer {
  name?: string;
  image?: string;
  imagePullPolicy?: string;
  command?: string[];
  args?: string[];
  env?: EksContainerEnvironmentVariable[];
  resources?: EksContainerResourceRequirements;
  volumeMounts?: EksContainerVolumeMount[];
  securityContext?: EksContainerSecurityContext;
}
const EksContainer = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<EksContainer>;
export type EksContainers = EksContainer[];
const EksContainers = /*@__PURE__*/ __L.at(__c15, 1);
export interface EksHostPath {
  path?: string;
}
const EksHostPath = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<EksHostPath>;
export interface EksEmptyDir {
  medium?: string;
  sizeLimit?: string;
}
const EksEmptyDir = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<EksEmptyDir>;
export interface EksSecret {
  secretName?: string;
  optional?: boolean;
}
const EksSecret = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<EksSecret>;
export interface EksPersistentVolumeClaim {
  claimName?: string;
  readOnly?: boolean;
}
const EksPersistentVolumeClaim = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<EksPersistentVolumeClaim>;
export interface EksVolume {
  name?: string;
  hostPath?: EksHostPath;
  emptyDir?: EksEmptyDir;
  secret?: EksSecret;
  persistentVolumeClaim?: EksPersistentVolumeClaim;
}
const EksVolume = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<EksVolume>;
export type EksVolumes = EksVolume[];
const EksVolumes = /*@__PURE__*/ __L.at(__c15, 7);
export type EksLabelsMap = { [key: string]: string | undefined };
const EksLabelsMap = TagrisTagsMap as any as S.Schema<EksLabelsMap>;
export type EksAnnotationsMap = { [key: string]: string | undefined };
const EksAnnotationsMap = TagrisTagsMap as any as S.Schema<EksAnnotationsMap>;
export interface EksMetadata {
  labels?: { [key: string]: string | undefined };
  annotations?: { [key: string]: string | undefined };
  namespace?: string;
}
const EksMetadata = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<EksMetadata>;
export interface EksPodProperties {
  serviceAccountName?: string;
  hostNetwork?: boolean;
  dnsPolicy?: string;
  imagePullSecrets?: ImagePullSecret[];
  containers?: EksContainer[];
  initContainers?: EksContainer[];
  volumes?: EksVolume[];
  metadata?: EksMetadata;
  shareProcessNamespace?: boolean;
}
const EksPodProperties = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<EksPodProperties>;
export interface EksProperties {
  podProperties?: EksPodProperties;
}
const EksProperties = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<EksProperties>;
export interface ConsumableResourceRequirement {
  consumableResource?: string;
  quantity?: number;
}
const ConsumableResourceRequirement = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<ConsumableResourceRequirement>;
export type ConsumableResourceList = ConsumableResourceRequirement[];
const ConsumableResourceList = /*@__PURE__*/ __L.at(__c16, 4);
export interface ConsumableResourceProperties {
  consumableResourceList?: ConsumableResourceRequirement[];
}
const ConsumableResourceProperties = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ConsumableResourceProperties>;
export interface NodeRangeProperty {
  targetNodes?: string;
  container?: ContainerProperties;
  instanceTypes?: string[];
  ecsProperties?: EcsProperties;
  eksProperties?: EksProperties;
  consumableResourceProperties?: ConsumableResourceProperties;
}
const NodeRangeProperty = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<NodeRangeProperty>;
export type NodeRangeProperties = NodeRangeProperty[];
const NodeRangeProperties = /*@__PURE__*/ __L.at(__c16, 7);
export interface NodeProperties {
  numNodes?: number;
  mainNode?: number;
  nodeRangeProperties?: NodeRangeProperty[];
}
const NodeProperties = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<NodeProperties>;
export type PlatformCapability = "EC2" | "FARGATE" | "MANAGED_INSTANCES" | (string & {});
export type PlatformCapabilityList = PlatformCapability[];
const PlatformCapabilityList = DeviceCgroupPermissions as any as S.Schema<PlatformCapabilityList>;
export interface JobDefinition {
  jobDefinitionName?: string;
  jobDefinitionArn?: string;
  revision?: number;
  status?: string;
  type?: string;
  schedulingPriority?: number;
  parameters?: { [key: string]: string | undefined };
  retryStrategy?: RetryStrategy;
  containerProperties?: ContainerProperties;
  timeout?: JobTimeout;
  nodeProperties?: NodeProperties;
  tags?: { [key: string]: string | undefined };
  propagateTags?: boolean;
  platformCapabilities?: PlatformCapability[];
  ecsProperties?: EcsProperties;
  eksProperties?: EksProperties;
  containerOrchestrationType?: OrchestrationType;
  consumableResourceProperties?: ConsumableResourceProperties;
}
const JobDefinition = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<JobDefinition>;
export type JobDefinitionList = JobDefinition[];
const JobDefinitionList = /*@__PURE__*/ __L.at(__c17, 2);
export interface DescribeJobDefinitionsResponse {
  jobDefinitions?: (JobDefinition & {
    jobDefinitionName: string;
    jobDefinitionArn: string;
    revision: number;
    type: string;
    retryStrategy: RetryStrategy & { evaluateOnExit: (EvaluateOnExit & { action: RetryAction })[] };
    containerProperties: ContainerProperties & {
      volumes: (Volume & {
        efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
        s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
      })[];
      ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
      resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
      linuxParameters: LinuxParameters & {
        devices: (Device & { hostPath: string })[];
        tmpfs: (Tmpfs & { containerPath: string; size: number })[];
      };
      logConfiguration: LogConfiguration & {
        logDriver: LogDriver;
        secretOptions: (Secret & { name: string; valueFrom: string })[];
      };
      secrets: (Secret & { name: string; valueFrom: string })[];
      ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
      repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
    };
    nodeProperties: NodeProperties & {
      numNodes: number;
      mainNode: number;
      nodeRangeProperties: (NodeRangeProperty & {
        targetNodes: string;
        container: ContainerProperties & {
          volumes: (Volume & {
            efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
            s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
          })[];
          ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
          resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
          linuxParameters: LinuxParameters & {
            devices: (Device & { hostPath: string })[];
            tmpfs: (Tmpfs & { containerPath: string; size: number })[];
          };
          logConfiguration: LogConfiguration & {
            logDriver: LogDriver;
            secretOptions: (Secret & { name: string; valueFrom: string })[];
          };
          secrets: (Secret & { name: string; valueFrom: string })[];
          ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
          repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
        };
        ecsProperties: EcsProperties & {
          taskProperties: (EcsTaskProperties & {
            containers: (TaskContainerProperties & {
              image: string;
              firelensConfiguration: FirelensConfiguration & { type: FirelensConfigurationType };
              linuxParameters: LinuxParameters & {
                devices: (Device & { hostPath: string })[];
                tmpfs: (Tmpfs & { containerPath: string; size: number })[];
              };
              logConfiguration: LogConfiguration & {
                logDriver: LogDriver;
                secretOptions: (Secret & { name: string; valueFrom: string })[];
              };
              repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
              resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
              secrets: (Secret & { name: string; valueFrom: string })[];
              ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
            })[];
            ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
            volumes: (Volume & {
              efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
              s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
            })[];
          })[];
        };
        eksProperties: EksProperties & {
          podProperties: EksPodProperties & {
            imagePullSecrets: (ImagePullSecret & { name: string })[];
            containers: (EksContainer & {
              image: string;
              env: (EksContainerEnvironmentVariable & { name: string })[];
            })[];
            initContainers: (EksContainer & {
              image: string;
              env: (EksContainerEnvironmentVariable & { name: string })[];
            })[];
            volumes: (EksVolume & {
              name: string;
              secret: EksSecret & { secretName: string };
              persistentVolumeClaim: EksPersistentVolumeClaim & { claimName: string };
            })[];
          };
        };
      })[];
    };
    ecsProperties: EcsProperties & {
      taskProperties: (EcsTaskProperties & {
        containers: (TaskContainerProperties & {
          image: string;
          firelensConfiguration: FirelensConfiguration & { type: FirelensConfigurationType };
          linuxParameters: LinuxParameters & {
            devices: (Device & { hostPath: string })[];
            tmpfs: (Tmpfs & { containerPath: string; size: number })[];
          };
          logConfiguration: LogConfiguration & {
            logDriver: LogDriver;
            secretOptions: (Secret & { name: string; valueFrom: string })[];
          };
          repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
          resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
          secrets: (Secret & { name: string; valueFrom: string })[];
          ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
        })[];
        ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
        volumes: (Volume & {
          efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
          s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
        })[];
      })[];
    };
    eksProperties: EksProperties & {
      podProperties: EksPodProperties & {
        imagePullSecrets: (ImagePullSecret & { name: string })[];
        containers: (EksContainer & {
          image: string;
          env: (EksContainerEnvironmentVariable & { name: string })[];
        })[];
        initContainers: (EksContainer & {
          image: string;
          env: (EksContainerEnvironmentVariable & { name: string })[];
        })[];
        volumes: (EksVolume & {
          name: string;
          secret: EksSecret & { secretName: string };
          persistentVolumeClaim: EksPersistentVolumeClaim & { claimName: string };
        })[];
      };
    };
  })[];
  nextToken?: string;
}
const DescribeJobDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<DescribeJobDefinitionsResponse>;
export interface DescribeJobQueuesRequest {
  jobQueues?: string[];
  maxResults?: number;
  nextToken?: string;
}
const DescribeJobQueuesRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DescribeJobQueuesRequest>;
export type JQStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "VALID"
  | "INVALID"
  | (string & {});
const JQStatus = S.String;

export interface JobQueueDetail {
  jobQueueName?: string;
  jobQueueArn?: string;
  state?: JQState;
  schedulingPolicyArn?: string;
  status?: JQStatus;
  statusReason?: string;
  priority?: number;
  computeEnvironmentOrder?: ComputeEnvironmentOrder[];
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[];
  jobQueueType?: JobQueueType;
  tags?: { [key: string]: string | undefined };
  jobStateTimeLimitActions?: JobStateTimeLimitAction[];
}
const JobQueueDetail = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<JobQueueDetail>;
export type JobQueueDetailList = JobQueueDetail[];
const JobQueueDetailList = /*@__PURE__*/ __L.at(__c17, 6);
export interface DescribeJobQueuesResponse {
  jobQueues?: (JobQueueDetail & {
    jobQueueName: string;
    jobQueueArn: string;
    state: JQState;
    priority: number;
    computeEnvironmentOrder: (ComputeEnvironmentOrder & {
      order: number;
      computeEnvironment: string;
    })[];
    serviceEnvironmentOrder: (ServiceEnvironmentOrder & {
      order: number;
      serviceEnvironment: string;
    })[];
    jobStateTimeLimitActions: (JobStateTimeLimitAction & {
      reason: string;
      state: JobStateTimeLimitActionsState;
      maxTimeSeconds: number;
      action: JobStateTimeLimitActionsAction;
    })[];
  })[];
  nextToken?: string;
}
const DescribeJobQueuesResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<DescribeJobQueuesResponse>;
export interface DescribeJobsRequest {
  jobs?: string[];
}
const DescribeJobsRequest = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<DescribeJobsRequest>;
export type JobStatus =
  | "SUBMITTED"
  | "PENDING"
  | "RUNNABLE"
  | "STARTING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | (string & {});
const JobStatus = S.String;

export interface NetworkInterface {
  attachmentId?: string;
  ipv6Address?: string;
  privateIpv4Address?: string;
}
const NetworkInterface = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<NetworkInterface>;
export type NetworkInterfaceList = NetworkInterface[];
const NetworkInterfaceList = /*@__PURE__*/ __L.at(__c18, 2);
export interface AttemptContainerDetail {
  containerInstanceArn?: string;
  taskArn?: string;
  exitCode?: number;
  reason?: string;
  logStreamName?: string;
  networkInterfaces?: NetworkInterface[];
}
const AttemptContainerDetail = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<AttemptContainerDetail>;
export interface AttemptTaskContainerDetails {
  exitCode?: number;
  name?: string;
  reason?: string;
  logStreamName?: string;
  networkInterfaces?: NetworkInterface[];
}
const AttemptTaskContainerDetails = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<AttemptTaskContainerDetails>;
export type ListAttemptTaskContainerDetails = AttemptTaskContainerDetails[];
const ListAttemptTaskContainerDetails = /*@__PURE__*/ __L.at(__c18, 5);
export interface AttemptEcsTaskDetails {
  containerInstanceArn?: string;
  taskArn?: string;
  containers?: AttemptTaskContainerDetails[];
}
const AttemptEcsTaskDetails = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<AttemptEcsTaskDetails>;
export type ListAttemptEcsTaskDetails = AttemptEcsTaskDetails[];
const ListAttemptEcsTaskDetails = /*@__PURE__*/ __L.at(__c18, 7);
export interface AttemptDetail {
  container?: AttemptContainerDetail;
  startedAt?: number;
  stoppedAt?: number;
  statusReason?: string;
  taskProperties?: AttemptEcsTaskDetails[];
}
const AttemptDetail = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<AttemptDetail>;
export type AttemptDetails = AttemptDetail[];
const AttemptDetails = /*@__PURE__*/ __L.at(__c19, 1);
export type ArrayJobDependency = "N_TO_N" | "SEQUENTIAL" | (string & {});
const ArrayJobDependency = S.String;

export interface JobDependency {
  jobId?: string;
  type?: ArrayJobDependency;
}
const JobDependency = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<JobDependency>;
export type JobDependencyList = JobDependency[];
const JobDependencyList = /*@__PURE__*/ __L.at(__c19, 3);
export interface ContainerDetail {
  image?: string;
  vcpus?: number;
  memory?: number;
  command?: string[];
  jobRoleArn?: string;
  executionRoleArn?: string;
  volumes?: Volume[];
  environment?: KeyValuePair[];
  mountPoints?: MountPoint[];
  readonlyRootFilesystem?: boolean;
  ulimits?: Ulimit[];
  privileged?: boolean;
  user?: string;
  exitCode?: number;
  reason?: string;
  containerInstanceArn?: string;
  taskArn?: string;
  logStreamName?: string;
  instanceType?: string;
  networkInterfaces?: NetworkInterface[];
  resourceRequirements?: ResourceRequirement[];
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  secrets?: Secret[];
  networkConfiguration?: NetworkConfiguration;
  fargatePlatformConfiguration?: FargatePlatformConfiguration;
  ephemeralStorage?: EphemeralStorage;
  runtimePlatform?: RuntimePlatform;
  repositoryCredentials?: RepositoryCredentials;
  enableExecuteCommand?: boolean;
}
const ContainerDetail = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<ContainerDetail>;
export interface NodeDetails {
  nodeIndex?: number;
  isMainNode?: boolean;
}
const NodeDetails = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<NodeDetails>;
export type ArrayJobStatusSummary = { [key: string]: number | undefined };
const ArrayJobStatusSummary = /*@__PURE__*/ __L.at(__c19, 6);
export interface ArrayPropertiesDetail {
  statusSummary?: { [key: string]: number | undefined };
  statusSummaryLastUpdatedAt?: number;
  size?: number;
  index?: number;
}
const ArrayPropertiesDetail = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<ArrayPropertiesDetail>;
export interface EksContainerDetail {
  name?: string;
  image?: string;
  imagePullPolicy?: string;
  command?: string[];
  args?: string[];
  env?: EksContainerEnvironmentVariable[];
  resources?: EksContainerResourceRequirements;
  exitCode?: number;
  reason?: string;
  volumeMounts?: EksContainerVolumeMount[];
  securityContext?: EksContainerSecurityContext;
}
const EksContainerDetail = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<EksContainerDetail>;
export type EksContainerDetails = EksContainerDetail[];
const EksContainerDetails = /*@__PURE__*/ __L.at(__c20, 1);
export interface EksPodPropertiesDetail {
  serviceAccountName?: string;
  hostNetwork?: boolean;
  dnsPolicy?: string;
  imagePullSecrets?: ImagePullSecret[];
  containers?: EksContainerDetail[];
  initContainers?: EksContainerDetail[];
  volumes?: EksVolume[];
  podName?: string;
  nodeName?: string;
  metadata?: EksMetadata;
  shareProcessNamespace?: boolean;
}
const EksPodPropertiesDetail = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<EksPodPropertiesDetail>;
export interface EksPropertiesDetail {
  podProperties?: EksPodPropertiesDetail;
}
const EksPropertiesDetail = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<EksPropertiesDetail>;
export interface EksAttemptContainerDetail {
  name?: string;
  containerID?: string;
  exitCode?: number;
  reason?: string;
}
const EksAttemptContainerDetail = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<EksAttemptContainerDetail>;
export type EksAttemptContainerDetails = EksAttemptContainerDetail[];
const EksAttemptContainerDetails = /*@__PURE__*/ __L.at(__c20, 5);
export interface EksAttemptDetail {
  containers?: EksAttemptContainerDetail[];
  initContainers?: EksAttemptContainerDetail[];
  eksClusterArn?: string;
  podName?: string;
  podNamespace?: string;
  nodeName?: string;
  startedAt?: number;
  stoppedAt?: number;
  statusReason?: string;
}
const EksAttemptDetail = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<EksAttemptDetail>;
export type EksAttemptDetails = EksAttemptDetail[];
const EksAttemptDetails = /*@__PURE__*/ __L.at(__c20, 7);
export interface TaskContainerDetails {
  command?: string[];
  dependsOn?: TaskContainerDependency[];
  environment?: KeyValuePair[];
  essential?: boolean;
  firelensConfiguration?: FirelensConfiguration;
  image?: string;
  linuxParameters?: LinuxParameters;
  logConfiguration?: LogConfiguration;
  mountPoints?: MountPoint[];
  name?: string;
  privileged?: boolean;
  readonlyRootFilesystem?: boolean;
  repositoryCredentials?: RepositoryCredentials;
  resourceRequirements?: ResourceRequirement[];
  secrets?: Secret[];
  ulimits?: Ulimit[];
  user?: string;
  startTimeout?: number;
  stopTimeout?: number;
  exitCode?: number;
  reason?: string;
  logStreamName?: string;
  networkInterfaces?: NetworkInterface[];
}
const TaskContainerDetails = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<TaskContainerDetails>;
export type ListTaskContainerDetails = TaskContainerDetails[];
const ListTaskContainerDetails = /*@__PURE__*/ __L.at(__c21, 1);
export interface EcsTaskDetails {
  containers?: TaskContainerDetails[];
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
  volumes?: Volume[];
  enableExecuteCommand?: boolean;
  networkMode?: string;
}
const EcsTaskDetails = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<EcsTaskDetails>;
export type ListEcsTaskDetails = EcsTaskDetails[];
const ListEcsTaskDetails = /*@__PURE__*/ __L.at(__c21, 3);
export interface EcsPropertiesDetail {
  taskProperties?: EcsTaskDetails[];
}
const EcsPropertiesDetail = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<EcsPropertiesDetail>;
export interface JobDetail {
  jobArn?: string;
  jobName?: string;
  jobId?: string;
  jobQueue?: string;
  status?: JobStatus;
  shareIdentifier?: string;
  schedulingPriority?: number;
  attempts?: AttemptDetail[];
  statusReason?: string;
  createdAt?: number;
  retryStrategy?: RetryStrategy;
  startedAt?: number;
  stoppedAt?: number;
  dependsOn?: JobDependency[];
  jobDefinition?: string;
  parameters?: { [key: string]: string | undefined };
  container?: ContainerDetail;
  nodeDetails?: NodeDetails;
  nodeProperties?: NodeProperties;
  arrayProperties?: ArrayPropertiesDetail;
  timeout?: JobTimeout;
  tags?: { [key: string]: string | undefined };
  propagateTags?: boolean;
  platformCapabilities?: PlatformCapability[];
  eksProperties?: EksPropertiesDetail;
  eksAttempts?: EksAttemptDetail[];
  ecsProperties?: EcsPropertiesDetail;
  isCancelled?: boolean;
  isTerminated?: boolean;
  consumableResourceProperties?: ConsumableResourceProperties;
}
const JobDetail = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<JobDetail>;
export type JobDetailList = JobDetail[];
const JobDetailList = /*@__PURE__*/ __L.at(__c21, 6);
export interface DescribeJobsResponse {
  jobs?: (JobDetail & {
    jobName: string;
    jobId: string;
    jobQueue: string;
    status: JobStatus;
    startedAt: number;
    jobDefinition: string;
    retryStrategy: RetryStrategy & { evaluateOnExit: (EvaluateOnExit & { action: RetryAction })[] };
    container: ContainerDetail & {
      volumes: (Volume & {
        efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
        s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
      })[];
      ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
      resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
      linuxParameters: LinuxParameters & {
        devices: (Device & { hostPath: string })[];
        tmpfs: (Tmpfs & { containerPath: string; size: number })[];
      };
      logConfiguration: LogConfiguration & {
        logDriver: LogDriver;
        secretOptions: (Secret & { name: string; valueFrom: string })[];
      };
      secrets: (Secret & { name: string; valueFrom: string })[];
      ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
      repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
    };
    nodeProperties: NodeProperties & {
      numNodes: number;
      mainNode: number;
      nodeRangeProperties: (NodeRangeProperty & {
        targetNodes: string;
        container: ContainerProperties & {
          volumes: (Volume & {
            efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
            s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
          })[];
          ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
          resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
          linuxParameters: LinuxParameters & {
            devices: (Device & { hostPath: string })[];
            tmpfs: (Tmpfs & { containerPath: string; size: number })[];
          };
          logConfiguration: LogConfiguration & {
            logDriver: LogDriver;
            secretOptions: (Secret & { name: string; valueFrom: string })[];
          };
          secrets: (Secret & { name: string; valueFrom: string })[];
          ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
          repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
        };
        ecsProperties: EcsProperties & {
          taskProperties: (EcsTaskProperties & {
            containers: (TaskContainerProperties & {
              image: string;
              firelensConfiguration: FirelensConfiguration & { type: FirelensConfigurationType };
              linuxParameters: LinuxParameters & {
                devices: (Device & { hostPath: string })[];
                tmpfs: (Tmpfs & { containerPath: string; size: number })[];
              };
              logConfiguration: LogConfiguration & {
                logDriver: LogDriver;
                secretOptions: (Secret & { name: string; valueFrom: string })[];
              };
              repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
              resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
              secrets: (Secret & { name: string; valueFrom: string })[];
              ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
            })[];
            ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
            volumes: (Volume & {
              efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
              s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
            })[];
          })[];
        };
        eksProperties: EksProperties & {
          podProperties: EksPodProperties & {
            imagePullSecrets: (ImagePullSecret & { name: string })[];
            containers: (EksContainer & {
              image: string;
              env: (EksContainerEnvironmentVariable & { name: string })[];
            })[];
            initContainers: (EksContainer & {
              image: string;
              env: (EksContainerEnvironmentVariable & { name: string })[];
            })[];
            volumes: (EksVolume & {
              name: string;
              secret: EksSecret & { secretName: string };
              persistentVolumeClaim: EksPersistentVolumeClaim & { claimName: string };
            })[];
          };
        };
      })[];
    };
    eksProperties: EksPropertiesDetail & {
      podProperties: EksPodPropertiesDetail & {
        imagePullSecrets: (ImagePullSecret & { name: string })[];
        containers: (EksContainerDetail & {
          env: (EksContainerEnvironmentVariable & { name: string })[];
        })[];
        initContainers: (EksContainerDetail & {
          env: (EksContainerEnvironmentVariable & { name: string })[];
        })[];
        volumes: (EksVolume & {
          name: string;
          secret: EksSecret & { secretName: string };
          persistentVolumeClaim: EksPersistentVolumeClaim & { claimName: string };
        })[];
      };
    };
    ecsProperties: EcsPropertiesDetail & {
      taskProperties: (EcsTaskDetails & {
        containers: (TaskContainerDetails & {
          firelensConfiguration: FirelensConfiguration & { type: FirelensConfigurationType };
          linuxParameters: LinuxParameters & {
            devices: (Device & { hostPath: string })[];
            tmpfs: (Tmpfs & { containerPath: string; size: number })[];
          };
          logConfiguration: LogConfiguration & {
            logDriver: LogDriver;
            secretOptions: (Secret & { name: string; valueFrom: string })[];
          };
          repositoryCredentials: RepositoryCredentials & { credentialsParameter: string };
          resourceRequirements: (ResourceRequirement & { value: string; type: ResourceType })[];
          secrets: (Secret & { name: string; valueFrom: string })[];
          ulimits: (Ulimit & { hardLimit: number; name: string; softLimit: number })[];
        })[];
        ephemeralStorage: EphemeralStorage & { sizeInGiB: number };
        volumes: (Volume & {
          efsVolumeConfiguration: EFSVolumeConfiguration & { fileSystemId: string };
          s3filesVolumeConfiguration: S3FilesVolumeConfiguration & { fileSystemArn: string };
        })[];
      })[];
    };
  })[];
}
const DescribeJobsResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<DescribeJobsResponse>;
export interface DescribeQuotaShareRequest {
  quotaShareArn?: string;
}
const DescribeQuotaShareRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<DescribeQuotaShareRequest>;
export type QuotaShareStatus =
  | "CREATING"
  | "VALID"
  | "INVALID"
  | "UPDATING"
  | "DELETING"
  | (string & {});
const QuotaShareStatus = S.String;

export interface DescribeQuotaShareResponse {
  quotaShareName?: string;
  quotaShareArn?: string;
  jobQueueArn?: string;
  capacityLimits?: (QuotaShareCapacityLimit & { maxCapacity: number; capacityUnit: string })[];
  resourceSharingConfiguration?: QuotaShareResourceSharingConfiguration & {
    strategy: QuotaShareResourceSharingStrategy;
  };
  preemptionConfiguration?: QuotaSharePreemptionConfiguration & {
    inSharePreemption: QuotaShareInSharePreemptionState;
  };
  state?: QuotaShareState;
  status?: QuotaShareStatus;
  tags?: { [key: string]: string | undefined };
}
const DescribeQuotaShareResponse = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<DescribeQuotaShareResponse>;
export interface DescribeSchedulingPoliciesRequest {
  arns?: string[];
}
const DescribeSchedulingPoliciesRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<DescribeSchedulingPoliciesRequest>;
export interface SchedulingPolicyDetail {
  name?: string;
  arn?: string;
  quotaSharePolicy?: QuotaSharePolicy;
  fairsharePolicy?: FairsharePolicy;
  tags?: { [key: string]: string | undefined };
}
const SchedulingPolicyDetail = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<SchedulingPolicyDetail>;
export type SchedulingPolicyDetailList = SchedulingPolicyDetail[];
const SchedulingPolicyDetailList = /*@__PURE__*/ __L.at(__c22, 4);
export interface DescribeSchedulingPoliciesResponse {
  schedulingPolicies?: (SchedulingPolicyDetail & {
    name: string;
    arn: string;
    quotaSharePolicy: QuotaSharePolicy & {
      idleResourceAssignmentStrategy: QuotaShareIdleResourceAssignmentStrategy;
    };
    fairsharePolicy: FairsharePolicy & {
      shareDistribution: (ShareAttributes & { shareIdentifier: string })[];
    };
  })[];
}
const DescribeSchedulingPoliciesResponse = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<DescribeSchedulingPoliciesResponse>;
export interface DescribeServiceEnvironmentsRequest {
  serviceEnvironments?: string[];
  maxResults?: number;
  nextToken?: string;
}
const DescribeServiceEnvironmentsRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<DescribeServiceEnvironmentsRequest>;
export type ServiceEnvironmentStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "VALID"
  | "INVALID"
  | (string & {});
const ServiceEnvironmentStatus = S.String;

export interface ServiceEnvironmentDetail {
  serviceEnvironmentName?: string;
  serviceEnvironmentArn?: string;
  serviceEnvironmentType?: ServiceEnvironmentType;
  state?: ServiceEnvironmentState;
  status?: ServiceEnvironmentStatus;
  capacityLimits?: CapacityLimit[];
  tags?: { [key: string]: string | undefined };
}
const ServiceEnvironmentDetail = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<ServiceEnvironmentDetail>;
export type ServiceEnvironmentDetailList = ServiceEnvironmentDetail[];
const ServiceEnvironmentDetailList = /*@__PURE__*/ __L.at(__c23, 0);
export interface DescribeServiceEnvironmentsResponse {
  serviceEnvironments?: (ServiceEnvironmentDetail & {
    serviceEnvironmentName: string;
    serviceEnvironmentArn: string;
    serviceEnvironmentType: ServiceEnvironmentType;
    capacityLimits: CapacityLimits;
  })[];
  nextToken?: string;
}
const DescribeServiceEnvironmentsResponse = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<DescribeServiceEnvironmentsResponse>;
export interface DescribeServiceJobRequest {
  jobId?: string;
}
const DescribeServiceJobRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<DescribeServiceJobRequest>;
export type ServiceResourceIdName = "TrainingJobArn" | (string & {});
const ServiceResourceIdName = S.String;

export interface ServiceResourceId {
  name?: ServiceResourceIdName;
  value?: string;
}
const ServiceResourceId = /*@__PURE__*/ __L.at(__c23, 3) as any as S.Schema<ServiceResourceId>;
export interface ServiceJobAttemptDetail {
  serviceResourceId?: ServiceResourceId;
  startedAt?: number;
  stoppedAt?: number;
  statusReason?: string;
}
const ServiceJobAttemptDetail = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<ServiceJobAttemptDetail>;
export type ServiceJobAttemptDetails = ServiceJobAttemptDetail[];
const ServiceJobAttemptDetails = /*@__PURE__*/ __L.at(__c23, 5);
export interface ServiceJobCapacityUsageDetail {
  capacityUnit?: string;
  quantity?: number;
}
const ServiceJobCapacityUsageDetail = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ServiceJobCapacityUsageDetail>;
export type ServiceJobCapacityUsageDetailList = ServiceJobCapacityUsageDetail[];
const ServiceJobCapacityUsageDetailList = /*@__PURE__*/ __L.at(__c23, 7);
export interface LatestServiceJobAttempt {
  serviceResourceId?: ServiceResourceId;
}
const LatestServiceJobAttempt = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<LatestServiceJobAttempt>;
export type ServiceJobRetryAction = "RETRY" | "EXIT" | (string & {});
const ServiceJobRetryAction = S.String;

export interface ServiceJobEvaluateOnExit {
  action?: ServiceJobRetryAction;
  onStatusReason?: string;
}
const ServiceJobEvaluateOnExit = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<ServiceJobEvaluateOnExit>;
export type ServiceJobEvaluateOnExitList = ServiceJobEvaluateOnExit[];
const ServiceJobEvaluateOnExitList = /*@__PURE__*/ __L.at(__c24, 2);
export interface ServiceJobRetryStrategy {
  attempts?: number;
  evaluateOnExit?: ServiceJobEvaluateOnExit[];
}
const ServiceJobRetryStrategy = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<ServiceJobRetryStrategy>;
export type ServiceJobType = "SAGEMAKER_TRAINING" | (string & {});
const ServiceJobType = S.String;

export interface ServiceJobPreemptionConfiguration {
  preemptionRetriesBeforeTermination?: number;
}
const ServiceJobPreemptionConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<ServiceJobPreemptionConfiguration>;
export interface ServiceJobPreemptedAttempt {
  serviceResourceId?: ServiceResourceId;
  startedAt?: number;
  stoppedAt?: number;
  statusReason?: string;
}
const ServiceJobPreemptedAttempt = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<ServiceJobPreemptedAttempt>;
export type ServiceJobRecentPreemptedAttemptList = ServiceJobPreemptedAttempt[];
const ServiceJobRecentPreemptedAttemptList = /*@__PURE__*/ __L.at(__c24, 6);
export interface ServiceJobPreemptionSummary {
  preemptedAttemptCount?: number;
  recentPreemptedAttempts?: ServiceJobPreemptedAttempt[];
}
const ServiceJobPreemptionSummary = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<ServiceJobPreemptionSummary>;
export type ServiceJobStatus =
  | "SUBMITTED"
  | "PENDING"
  | "RUNNABLE"
  | "SCHEDULED"
  | "STARTING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | (string & {});
const ServiceJobStatus = S.String;

export interface ServiceJobTimeout {
  attemptDurationSeconds?: number;
}
const ServiceJobTimeout = JobTimeout as any as S.Schema<ServiceJobTimeout>;
export interface DescribeServiceJobResponse {
  attempts?: (ServiceJobAttemptDetail & {
    serviceResourceId: ServiceResourceId & { name: ServiceResourceIdName; value: string };
  })[];
  capacityUsage?: ServiceJobCapacityUsageDetail[];
  createdAt?: number;
  isTerminated?: boolean;
  jobArn?: string;
  jobId: string;
  jobName: string;
  jobQueue: string;
  latestAttempt?: LatestServiceJobAttempt & {
    serviceResourceId: ServiceResourceId & { name: ServiceResourceIdName; value: string };
  };
  retryStrategy?: ServiceJobRetryStrategy & { attempts: number };
  scheduledAt?: number;
  schedulingPriority?: number;
  serviceRequestPayload?: string;
  serviceJobType: ServiceJobType;
  shareIdentifier?: string;
  quotaShareName?: string;
  preemptionConfiguration?: ServiceJobPreemptionConfiguration;
  preemptionSummary?: ServiceJobPreemptionSummary & {
    recentPreemptedAttempts: (ServiceJobPreemptedAttempt & {
      serviceResourceId: ServiceResourceId & { name: ServiceResourceIdName; value: string };
    })[];
  };
  startedAt: number;
  status: ServiceJobStatus;
  statusReason?: string;
  stoppedAt?: number;
  tags?: { [key: string]: string | undefined };
  timeoutConfig?: ServiceJobTimeout;
}
const DescribeServiceJobResponse = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<DescribeServiceJobResponse>;
export interface GetJobQueueSnapshotRequest {
  jobQueue?: string;
}
const GetJobQueueSnapshotRequest = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<GetJobQueueSnapshotRequest>;
export interface FrontOfQueueJobSummary {
  jobArn?: string;
  earliestTimeAtPosition?: number;
}
const FrontOfQueueJobSummary = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<FrontOfQueueJobSummary>;
export type FrontOfQueueJobSummaryList = FrontOfQueueJobSummary[];
const FrontOfQueueJobSummaryList = /*@__PURE__*/ __L.at(__c25, 3);
export interface FrontOfQueueDetail {
  jobs?: FrontOfQueueJobSummary[];
  lastUpdatedAt?: number;
}
const FrontOfQueueDetail = /*@__PURE__*/ __L.at(__c25, 4) as any as S.Schema<FrontOfQueueDetail>;
export interface FrontOfQuotaShareJobSummary {
  jobArn?: string;
  earliestTimeAtPosition?: number;
}
const FrontOfQuotaShareJobSummary = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<FrontOfQuotaShareJobSummary>;
export type FrontOfQuotaShareJobSummaryList = FrontOfQuotaShareJobSummary[];
const FrontOfQuotaShareJobSummaryList = /*@__PURE__*/ __L.at(__c25, 6);
export type FrontOfQuotaSharesJobSummaryMap = {
  [key: string]: FrontOfQuotaShareJobSummary[] | undefined;
};
const FrontOfQuotaSharesJobSummaryMap = /*@__PURE__*/ __L.at(__c25, 7);
export interface FrontOfQuotaSharesDetail {
  quotaShares?: { [key: string]: FrontOfQuotaShareJobSummary[] | undefined };
  lastUpdatedAt?: number;
}
const FrontOfQuotaSharesDetail = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<FrontOfQuotaSharesDetail>;
export interface QueueSnapshotCapacityUsage {
  capacityUnit?: string;
  quantity?: number;
}
const QueueSnapshotCapacityUsage =
  ServiceJobCapacityUsageDetail as any as S.Schema<QueueSnapshotCapacityUsage>;
export type QueueSnapshotCapacityUsageList = QueueSnapshotCapacityUsage[];
const QueueSnapshotCapacityUsageList = /*@__PURE__*/ __L.at(__c26, 1);
export interface FairshareCapacityUsage {
  capacityUnit?: string;
  quantity?: number;
}
const FairshareCapacityUsage = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<FairshareCapacityUsage>;
export type FairshareCapacityUsageList = FairshareCapacityUsage[];
const FairshareCapacityUsageList = /*@__PURE__*/ __L.at(__c26, 3);
export interface FairshareCapacityUtilization {
  shareIdentifier?: string;
  capacityUsage?: FairshareCapacityUsage[];
}
const FairshareCapacityUtilization = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<FairshareCapacityUtilization>;
export type FairshareCapacityUtilizationList = FairshareCapacityUtilization[];
const FairshareCapacityUtilizationList = /*@__PURE__*/ __L.at(__c26, 5);
export interface FairshareUtilizationDetail {
  activeShareCount?: number;
  topCapacityUtilization?: FairshareCapacityUtilization[];
}
const FairshareUtilizationDetail = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<FairshareUtilizationDetail>;
export interface QuotaShareCapacityUsage {
  capacityUnit?: string;
  quantity?: number;
}
export type QuotaShareCapacityUsageList = QuotaShareCapacityUsage[];
const QuotaShareCapacityUsageList =
  FairshareCapacityUsageList as any as S.Schema<QuotaShareCapacityUsageList>;
export interface QuotaShareCapacityUtilization {
  quotaShareName?: string;
  capacityUsage?: QuotaShareCapacityUsage[];
}
const QuotaShareCapacityUtilization = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<QuotaShareCapacityUtilization>;
export type QuotaShareCapacityUtilizationList = QuotaShareCapacityUtilization[];
const QuotaShareCapacityUtilizationList = /*@__PURE__*/ __L.at(__c27, 0);
export interface QuotaShareUtilizationDetail {
  topCapacityUtilization?: QuotaShareCapacityUtilization[];
}
const QuotaShareUtilizationDetail = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<QuotaShareUtilizationDetail>;
export interface QueueSnapshotUtilizationDetail {
  totalCapacityUsage?: QueueSnapshotCapacityUsage[];
  fairshareUtilization?: FairshareUtilizationDetail;
  quotaShareUtilization?: QuotaShareUtilizationDetail;
  lastUpdatedAt?: number;
}
const QueueSnapshotUtilizationDetail = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<QueueSnapshotUtilizationDetail>;
export interface GetJobQueueSnapshotResponse {
  frontOfQueue?: FrontOfQueueDetail;
  frontOfQuotaShares?: FrontOfQuotaSharesDetail;
  queueUtilization?: QueueSnapshotUtilizationDetail;
}
const GetJobQueueSnapshotResponse = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<GetJobQueueSnapshotResponse>;
export interface KeyValuesPair {
  name?: string;
  values?: string[];
}
const KeyValuesPair = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<KeyValuesPair>;
export type ListConsumableResourcesFilterList = KeyValuesPair[];
const ListConsumableResourcesFilterList = /*@__PURE__*/ __L.at(__c27, 5);
export interface ListConsumableResourcesRequest {
  filters?: KeyValuesPair[];
  maxResults?: number;
  nextToken?: string;
}
const ListConsumableResourcesRequest = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<ListConsumableResourcesRequest>;
export interface ConsumableResourceSummary {
  consumableResourceArn?: string;
  consumableResourceName?: string;
  totalQuantity?: number;
  inUseQuantity?: number;
  resourceType?: string;
}
const ConsumableResourceSummary = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<ConsumableResourceSummary>;
export type ConsumableResourceSummaryList = ConsumableResourceSummary[];
const ConsumableResourceSummaryList = /*@__PURE__*/ __L.at(__c28, 0);
export interface ListConsumableResourcesResponse {
  consumableResources: (ConsumableResourceSummary & {
    consumableResourceArn: string;
    consumableResourceName: string;
  })[];
  nextToken?: string;
}
const ListConsumableResourcesResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<ListConsumableResourcesResponse>;
export type ListJobsFilterList = KeyValuesPair[];
const ListJobsFilterList = ListConsumableResourcesFilterList as any as S.Schema<ListJobsFilterList>;
export interface ListJobsRequest {
  jobQueue?: string;
  arrayJobId?: string;
  multiNodeJobId?: string;
  jobStatus?: JobStatus;
  maxResults?: number;
  nextToken?: string;
  filters?: KeyValuesPair[];
}
const ListJobsRequest = /*@__PURE__*/ __L.at(__c28, 2) as any as S.Schema<ListJobsRequest>;
export interface JobCapacityUsageSummary {
  capacityUnit?: string;
  quantity?: number;
}
export type JobCapacityUsageSummaryList = JobCapacityUsageSummary[];
const JobCapacityUsageSummaryList =
  FairshareCapacityUsageList as any as S.Schema<JobCapacityUsageSummaryList>;
export interface ContainerSummary {
  exitCode?: number;
  reason?: string;
}
const ContainerSummary = /*@__PURE__*/ __L.at(__c28, 3) as any as S.Schema<ContainerSummary>;
export interface ArrayPropertiesSummary {
  size?: number;
  index?: number;
  statusSummary?: { [key: string]: number | undefined };
  statusSummaryLastUpdatedAt?: number;
}
const ArrayPropertiesSummary = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<ArrayPropertiesSummary>;
export interface NodePropertiesSummary {
  isMainNode?: boolean;
  numNodes?: number;
  nodeIndex?: number;
}
const NodePropertiesSummary = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<NodePropertiesSummary>;
export interface JobSummary {
  jobArn?: string;
  jobId?: string;
  jobName?: string;
  capacityUsage?: JobCapacityUsageSummary[];
  createdAt?: number;
  scheduledAt?: number;
  shareIdentifier?: string;
  status?: JobStatus;
  statusReason?: string;
  startedAt?: number;
  stoppedAt?: number;
  container?: ContainerSummary;
  arrayProperties?: ArrayPropertiesSummary;
  nodeProperties?: NodePropertiesSummary;
  jobDefinition?: string;
  isCancelled?: boolean;
  isTerminated?: boolean;
}
const JobSummary = /*@__PURE__*/ __L.at(__c28, 6) as any as S.Schema<JobSummary>;
export type JobSummaryList = JobSummary[];
const JobSummaryList = /*@__PURE__*/ __L.at(__c28, 7);
export interface ListJobsResponse {
  jobSummaryList: (JobSummary & { jobId: string; jobName: string })[];
  nextToken?: string;
}
const ListJobsResponse = /*@__PURE__*/ __L.at(__c29, 0) as any as S.Schema<ListJobsResponse>;
export type ListJobsByConsumableResourceFilterList = KeyValuesPair[];
const ListJobsByConsumableResourceFilterList =
  ListConsumableResourcesFilterList as any as S.Schema<ListJobsByConsumableResourceFilterList>;
export interface ListJobsByConsumableResourceRequest {
  consumableResource?: string;
  filters?: KeyValuesPair[];
  maxResults?: number;
  nextToken?: string;
}
const ListJobsByConsumableResourceRequest = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<ListJobsByConsumableResourceRequest>;
export interface ListJobsByConsumableResourceSummary {
  jobArn?: string;
  jobQueueArn?: string;
  jobName?: string;
  jobDefinitionArn?: string;
  shareIdentifier?: string;
  jobStatus?: string;
  quantity?: number;
  statusReason?: string;
  startedAt?: number;
  createdAt?: number;
  consumableResourceProperties?: ConsumableResourceProperties;
}
const ListJobsByConsumableResourceSummary = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<ListJobsByConsumableResourceSummary>;
export type ListJobsByConsumableResourceSummaryList = ListJobsByConsumableResourceSummary[];
const ListJobsByConsumableResourceSummaryList = /*@__PURE__*/ __L.at(__c29, 3);
export interface ListJobsByConsumableResourceResponse {
  jobs: (ListJobsByConsumableResourceSummary & {
    jobArn: string;
    jobQueueArn: string;
    jobName: string;
    jobStatus: string;
    quantity: number;
    createdAt: number;
    consumableResourceProperties: ConsumableResourceProperties;
  })[];
  nextToken?: string;
}
const ListJobsByConsumableResourceResponse = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<ListJobsByConsumableResourceResponse>;
export interface ListQuotaSharesRequest {
  jobQueue?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListQuotaSharesRequest = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<ListQuotaSharesRequest>;
export interface QuotaShareDetail {
  quotaShareName?: string;
  quotaShareArn?: string;
  jobQueueArn?: string;
  capacityLimits?: QuotaShareCapacityLimit[];
  resourceSharingConfiguration?: QuotaShareResourceSharingConfiguration;
  preemptionConfiguration?: QuotaSharePreemptionConfiguration;
  state?: QuotaShareState;
  status?: QuotaShareStatus;
}
const QuotaShareDetail = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<QuotaShareDetail>;
export type QuotaShareList = QuotaShareDetail[];
const QuotaShareList = /*@__PURE__*/ __L.at(__c29, 7);
export interface ListQuotaSharesResponse {
  quotaShares?: (QuotaShareDetail & {
    capacityLimits: (QuotaShareCapacityLimit & { maxCapacity: number; capacityUnit: string })[];
    resourceSharingConfiguration: QuotaShareResourceSharingConfiguration & {
      strategy: QuotaShareResourceSharingStrategy;
    };
    preemptionConfiguration: QuotaSharePreemptionConfiguration & {
      inSharePreemption: QuotaShareInSharePreemptionState;
    };
  })[];
  nextToken?: string;
}
const ListQuotaSharesResponse = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<ListQuotaSharesResponse>;
export interface ListSchedulingPoliciesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListSchedulingPoliciesRequest = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<ListSchedulingPoliciesRequest>;
export interface SchedulingPolicyListingDetail {
  arn?: string;
}
const SchedulingPolicyListingDetail = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<SchedulingPolicyListingDetail>;
export type SchedulingPolicyListingDetailList = SchedulingPolicyListingDetail[];
const SchedulingPolicyListingDetailList = /*@__PURE__*/ __L.at(__c30, 3);
export interface ListSchedulingPoliciesResponse {
  schedulingPolicies?: (SchedulingPolicyListingDetail & { arn: string })[];
  nextToken?: string;
}
const ListSchedulingPoliciesResponse = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<ListSchedulingPoliciesResponse>;
export interface ListServiceJobsRequest {
  jobQueue?: string;
  jobStatus?: ServiceJobStatus;
  maxResults?: number;
  nextToken?: string;
  filters?: KeyValuesPair[];
}
const ListServiceJobsRequest = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<ListServiceJobsRequest>;
export interface ServiceJobCapacityUsageSummary {
  capacityUnit?: string;
  quantity?: number;
}
export type ServiceJobCapacityUsageSummaryList = ServiceJobCapacityUsageSummary[];
const ServiceJobCapacityUsageSummaryList =
  ServiceJobCapacityUsageDetailList as any as S.Schema<ServiceJobCapacityUsageSummaryList>;
export interface ServiceJobSummary {
  latestAttempt?: LatestServiceJobAttempt;
  capacityUsage?: ServiceJobCapacityUsageSummary[];
  createdAt?: number;
  jobArn?: string;
  jobId?: string;
  jobName?: string;
  scheduledAt?: number;
  serviceJobType?: ServiceJobType;
  shareIdentifier?: string;
  quotaShareName?: string;
  status?: ServiceJobStatus;
  statusReason?: string;
  startedAt?: number;
  stoppedAt?: number;
  isTerminated?: boolean;
}
const ServiceJobSummary = /*@__PURE__*/ __L.at(__c30, 6) as any as S.Schema<ServiceJobSummary>;
export type ServiceJobSummaryList = ServiceJobSummary[];
const ServiceJobSummaryList = /*@__PURE__*/ __L.at(__c30, 7);
export interface ListServiceJobsResponse {
  jobSummaryList: (ServiceJobSummary & {
    jobId: string;
    jobName: string;
    serviceJobType: ServiceJobType;
    latestAttempt: LatestServiceJobAttempt & {
      serviceResourceId: ServiceResourceId & { name: ServiceResourceIdName; value: string };
    };
  })[];
  nextToken?: string;
}
const ListServiceJobsResponse = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<ListServiceJobsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export type JobDefinitionType = "container" | "multinode" | (string & {});
const JobDefinitionType = S.String;

export interface RegisterJobDefinitionRequest {
  jobDefinitionName?: string;
  type?: JobDefinitionType;
  parameters?: { [key: string]: string | undefined };
  schedulingPriority?: number;
  containerProperties?: ContainerProperties;
  nodeProperties?: NodeProperties;
  retryStrategy?: RetryStrategy;
  propagateTags?: boolean;
  timeout?: JobTimeout;
  tags?: { [key: string]: string | undefined };
  platformCapabilities?: PlatformCapability[];
  eksProperties?: EksProperties;
  ecsProperties?: EcsProperties;
  consumableResourceProperties?: ConsumableResourceProperties;
}
const RegisterJobDefinitionRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<RegisterJobDefinitionRequest>;
export interface RegisterJobDefinitionResponse {
  jobDefinitionName: string;
  jobDefinitionArn: string;
  revision: number;
}
const RegisterJobDefinitionResponse = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<RegisterJobDefinitionResponse>;
export interface ArrayProperties {
  size?: number;
}
const ArrayProperties = /*@__PURE__*/ __L.at(__c31, 5) as any as S.Schema<ArrayProperties>;
export interface ContainerOverrides {
  vcpus?: number;
  memory?: number;
  command?: string[];
  instanceType?: string;
  environment?: KeyValuePair[];
  resourceRequirements?: ResourceRequirement[];
}
const ContainerOverrides = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<ContainerOverrides>;
export interface TaskContainerOverrides {
  command?: string[];
  environment?: KeyValuePair[];
  name?: string;
  resourceRequirements?: ResourceRequirement[];
}
const TaskContainerOverrides = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<TaskContainerOverrides>;
export type ListTaskContainerOverrides = TaskContainerOverrides[];
const ListTaskContainerOverrides = /*@__PURE__*/ __L.at(__c32, 0);
export interface TaskPropertiesOverride {
  containers?: TaskContainerOverrides[];
}
const TaskPropertiesOverride = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<TaskPropertiesOverride>;
export type ListTaskPropertiesOverride = TaskPropertiesOverride[];
const ListTaskPropertiesOverride = /*@__PURE__*/ __L.at(__c32, 2);
export interface EcsPropertiesOverride {
  taskProperties?: TaskPropertiesOverride[];
}
const EcsPropertiesOverride = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<EcsPropertiesOverride>;
export interface EksContainerOverride {
  name?: string;
  image?: string;
  command?: string[];
  args?: string[];
  env?: EksContainerEnvironmentVariable[];
  resources?: EksContainerResourceRequirements;
}
const EksContainerOverride = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<EksContainerOverride>;
export type EksContainerOverrideList = EksContainerOverride[];
const EksContainerOverrideList = /*@__PURE__*/ __L.at(__c32, 5);
export interface EksPodPropertiesOverride {
  containers?: EksContainerOverride[];
  initContainers?: EksContainerOverride[];
  metadata?: EksMetadata;
}
const EksPodPropertiesOverride = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<EksPodPropertiesOverride>;
export interface EksPropertiesOverride {
  podProperties?: EksPodPropertiesOverride;
}
const EksPropertiesOverride = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<EksPropertiesOverride>;
export interface NodePropertyOverride {
  targetNodes?: string;
  containerOverrides?: ContainerOverrides;
  ecsPropertiesOverride?: EcsPropertiesOverride;
  instanceTypes?: string[];
  eksPropertiesOverride?: EksPropertiesOverride;
  consumableResourcePropertiesOverride?: ConsumableResourceProperties;
}
const NodePropertyOverride = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<NodePropertyOverride>;
export type NodePropertyOverrides = NodePropertyOverride[];
const NodePropertyOverrides = /*@__PURE__*/ __L.at(__c33, 1);
export interface NodeOverrides {
  numNodes?: number;
  nodePropertyOverrides?: NodePropertyOverride[];
}
const NodeOverrides = /*@__PURE__*/ __L.at(__c33, 2) as any as S.Schema<NodeOverrides>;
export interface SubmitJobRequest {
  jobName?: string;
  jobQueue?: string;
  shareIdentifier?: string;
  schedulingPriorityOverride?: number;
  arrayProperties?: ArrayProperties;
  dependsOn?: JobDependency[];
  jobDefinition?: string;
  parameters?: { [key: string]: string | undefined };
  containerOverrides?: ContainerOverrides;
  nodeOverrides?: NodeOverrides;
  retryStrategy?: RetryStrategy;
  propagateTags?: boolean;
  timeout?: JobTimeout;
  tags?: { [key: string]: string | undefined };
  eksPropertiesOverride?: EksPropertiesOverride;
  ecsPropertiesOverride?: EcsPropertiesOverride;
  consumableResourcePropertiesOverride?: ConsumableResourceProperties;
}
const SubmitJobRequest = /*@__PURE__*/ __L.at(__c33, 3) as any as S.Schema<SubmitJobRequest>;
export interface SubmitJobResponse {
  jobArn?: string;
  jobName: string;
  jobId: string;
}
const SubmitJobResponse = /*@__PURE__*/ __L.at(__c33, 4) as any as S.Schema<SubmitJobResponse>;
export type ClientRequestToken = string;
export interface SubmitServiceJobRequest {
  jobName?: string;
  jobQueue?: string;
  retryStrategy?: ServiceJobRetryStrategy;
  schedulingPriority?: number;
  serviceRequestPayload?: string;
  serviceJobType?: ServiceJobType;
  shareIdentifier?: string;
  quotaShareName?: string;
  preemptionConfiguration?: ServiceJobPreemptionConfiguration;
  timeoutConfig?: ServiceJobTimeout;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
const SubmitServiceJobRequest = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<SubmitServiceJobRequest>;
export interface SubmitServiceJobResponse {
  jobArn?: string;
  jobName: string;
  jobId: string;
}
const SubmitServiceJobResponse = SubmitJobResponse as any as S.Schema<SubmitServiceJobResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags?: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c33, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CancelJobResponse as any as S.Schema<TagResourceResponse>;
export interface TerminateJobRequest {
  jobId?: string;
  reason?: string;
}
const TerminateJobRequest = /*@__PURE__*/ __L.at(__c33, 7) as any as S.Schema<TerminateJobRequest>;
export interface TerminateJobResponse {}
const TerminateJobResponse = CancelJobResponse as any as S.Schema<TerminateJobResponse>;
export interface TerminateJobsRequest {
  jobs?: string[];
  reason?: string;
}
const TerminateJobsRequest = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<TerminateJobsRequest>;
export interface TerminateJobsErrorDetail {
  job?: string;
  code?: string;
  message?: string;
}
export type TerminateJobsErrorDetailList = TerminateJobsErrorDetail[];
export interface TerminateJobsResponse {
  successful: string[];
  errors: (TerminateJobsErrorDetail & { job: string; code: string; message: string })[];
}
const TerminateJobsResponse = CancelJobsResponse as any as S.Schema<TerminateJobsResponse>;
export interface TerminateServiceJobRequest {
  jobId?: string;
  reason?: string;
}
const TerminateServiceJobRequest = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<TerminateServiceJobRequest>;
export interface TerminateServiceJobResponse {}
const TerminateServiceJobResponse =
  DeleteComputeEnvironmentResponse as any as S.Schema<TerminateServiceJobResponse>;
export interface TerminateServiceJobsRequest {
  jobs?: string[];
  reason?: string;
}
const TerminateServiceJobsRequest = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<TerminateServiceJobsRequest>;
export interface TerminateServiceJobsErrorDetail {
  job?: string;
  code?: string;
  message?: string;
}
const TerminateServiceJobsErrorDetail = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<TerminateServiceJobsErrorDetail>;
export type TerminateServiceJobsErrorDetailList = TerminateServiceJobsErrorDetail[];
const TerminateServiceJobsErrorDetailList = /*@__PURE__*/ __L.at(__c34, 4);
export interface TerminateServiceJobsResponse {
  successful: string[];
  errors: (TerminateServiceJobsErrorDetail & { job: string; code: string; message: string })[];
}
const TerminateServiceJobsResponse = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<TerminateServiceJobsResponse>;
export type TagKeysList = string[];
const TagKeysList = StringList as any as S.Schema<TagKeysList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys?: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CancelJobResponse as any as S.Schema<UntagResourceResponse>;
export type CRUpdateAllocationStrategy =
  | "BEST_FIT_PROGRESSIVE"
  | "BEST_FIT_PROGRESSIVE_ORDERED"
  | "SPOT_CAPACITY_OPTIMIZED"
  | "SPOT_PRICE_CAPACITY_OPTIMIZED"
  | "SPOT_CAPACITY_OPTIMIZED_PRIORITIZED"
  | (string & {});
const CRUpdateAllocationStrategy = S.String;

export interface InstanceLaunchTemplateUpdate {
  ec2InstanceProfileArn?: string;
  networkConfiguration?: ManagedInstancesNetworkConfiguration;
  instanceRequirements?: InstanceRequirementsRequest;
  storageConfiguration?: ManagedInstancesStorageConfiguration;
  monitoring?: string;
  capacityReservations?: CapacityReservationRequest;
  instanceMetadataTagsPropagation?: boolean;
  localStorageConfiguration?: ManagedInstancesLocalStorageConfiguration;
}
const InstanceLaunchTemplateUpdate = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<InstanceLaunchTemplateUpdate>;
export interface UpdateManagedInstancesProviderConfiguration {
  propagateTags?: string;
  infrastructureRoleArn?: string;
  instanceLaunchTemplate?: InstanceLaunchTemplateUpdate;
  infrastructureOptimization?: InfrastructureOptimization;
}
const UpdateManagedInstancesProviderConfiguration = /*@__PURE__*/ __L.at(
  __c35,
  0,
) as any as S.Schema<UpdateManagedInstancesProviderConfiguration>;
export interface ComputeResourceUpdate {
  minvCpus?: number;
  maxvCpus?: number;
  desiredvCpus?: number;
  subnets?: string[];
  securityGroupIds?: string[];
  allocationStrategy?: CRUpdateAllocationStrategy;
  instanceTypes?: string[];
  ec2KeyPair?: string;
  instanceRole?: string;
  tags?: { [key: string]: string | undefined };
  placementGroup?: string;
  bidPercentage?: number;
  launchTemplate?: LaunchTemplateSpecification;
  ec2Configuration?: Ec2Configuration[];
  updateToLatestImageVersion?: boolean;
  type?: CRType;
  imageId?: string;
  scalingPolicy?: ComputeScalingPolicy;
  managedInstancesProvider?: UpdateManagedInstancesProviderConfiguration;
  capacityTags?: { [key: string]: string | undefined };
}
const ComputeResourceUpdate = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<ComputeResourceUpdate>;
export interface EksConfigurationUpdate {
  accessEntry?: EksAccessEntry;
}
const EksConfigurationUpdate = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<EksConfigurationUpdate>;
export interface UpdateComputeEnvironmentRequest {
  computeEnvironment?: string;
  state?: CEState;
  unmanagedvCpus?: number;
  computeResources?: ComputeResourceUpdate;
  serviceRole?: string;
  updatePolicy?: UpdatePolicy;
  context?: string;
  ecsSettings?: EcsSettings;
  eksConfiguration?: EksConfigurationUpdate;
}
const UpdateComputeEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<UpdateComputeEnvironmentRequest>;
export interface UpdateComputeEnvironmentResponse {
  computeEnvironmentName?: string;
  computeEnvironmentArn?: string;
}
const UpdateComputeEnvironmentResponse =
  CreateComputeEnvironmentResponse as any as S.Schema<UpdateComputeEnvironmentResponse>;
export interface UpdateConsumableResourceRequest {
  consumableResource?: string;
  operation?: string;
  quantity?: number;
  clientToken?: string;
}
const UpdateConsumableResourceRequest = /*@__PURE__*/ __L.at(
  __c35,
  4,
) as any as S.Schema<UpdateConsumableResourceRequest>;
export interface UpdateConsumableResourceResponse {
  consumableResourceName: string;
  consumableResourceArn: string;
  totalQuantity?: number;
}
const UpdateConsumableResourceResponse = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<UpdateConsumableResourceResponse>;
export interface UpdateJobQueueRequest {
  jobQueue?: string;
  state?: JQState;
  schedulingPolicyArn?: string;
  priority?: number;
  computeEnvironmentOrder?: ComputeEnvironmentOrder[];
  serviceEnvironmentOrder?: ServiceEnvironmentOrder[];
  jobStateTimeLimitActions?: JobStateTimeLimitAction[];
}
const UpdateJobQueueRequest = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<UpdateJobQueueRequest>;
export interface UpdateJobQueueResponse {
  jobQueueName?: string;
  jobQueueArn?: string;
}
const UpdateJobQueueResponse = CreateJobQueueResponse as any as S.Schema<UpdateJobQueueResponse>;
export interface UpdateQuotaShareRequest {
  quotaShareArn?: string;
  capacityLimits?: QuotaShareCapacityLimit[];
  resourceSharingConfiguration?: QuotaShareResourceSharingConfiguration;
  preemptionConfiguration?: QuotaSharePreemptionConfiguration;
  state?: QuotaShareState;
}
const UpdateQuotaShareRequest = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<UpdateQuotaShareRequest>;
export interface UpdateQuotaShareResponse {
  quotaShareName?: string;
  quotaShareArn?: string;
}
const UpdateQuotaShareResponse =
  CreateQuotaShareResponse as any as S.Schema<UpdateQuotaShareResponse>;
export interface UpdateSchedulingPolicyRequest {
  arn?: string;
  quotaSharePolicy?: QuotaSharePolicy;
  fairsharePolicy?: FairsharePolicy;
}
const UpdateSchedulingPolicyRequest = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<UpdateSchedulingPolicyRequest>;
export interface UpdateSchedulingPolicyResponse {}
const UpdateSchedulingPolicyResponse =
  DeleteComputeEnvironmentResponse as any as S.Schema<UpdateSchedulingPolicyResponse>;
export interface UpdateServiceEnvironmentRequest {
  serviceEnvironment?: string;
  state?: ServiceEnvironmentState;
  capacityLimits?: CapacityLimit[];
}
const UpdateServiceEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<UpdateServiceEnvironmentRequest>;
export interface UpdateServiceEnvironmentResponse {
  serviceEnvironmentName: string;
  serviceEnvironmentArn: string;
}
const UpdateServiceEnvironmentResponse =
  CreateServiceEnvironmentResponse as any as S.Schema<UpdateServiceEnvironmentResponse>;
export interface UpdateServiceJobRequest {
  jobId?: string;
  schedulingPriority?: number;
}
const UpdateServiceJobRequest = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<UpdateServiceJobRequest>;
export interface UpdateServiceJobResponse {
  jobArn?: string;
  jobName?: string;
  jobId?: string;
}
const UpdateServiceJobResponse = SubmitJobResponse as any as S.Schema<UpdateServiceJobResponse>;
export type CancelJobError = ClientException | ServerException | CommonErrors;
/**
 * Cancels a job in an Batch job queue. Jobs that are in a `SUBMITTED`, `PENDING`, or `RUNNABLE` state are cancelled and the job status is updated to `FAILED`.
 *
 * A `PENDING` job is cancelled after all dependency jobs are completed.
 * Therefore, it might take longer than expected to cancel a job in `PENDING`
 * status.
 *
 * When you try to cancel an array parent job in `PENDING`, Batch attempts to
 * cancel all child jobs. The array parent job is cancelled when all child jobs are
 * completed.
 *
 * Jobs that progressed to the `STARTING` or
 * `RUNNING` state aren't cancelled. However, the API operation still succeeds, even
 * if no job is cancelled. These jobs must be terminated with the TerminateJob or
 * TerminateJobs operation.
 */
export const cancelJob: API.OperationMethod<
  CancelJobRequest,
  CancelJobResponse,
  CancelJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelJobRequest,
  output: CancelJobResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelJob",
}));

export type CancelJobsError = ClientException | ServerException | CommonErrors;
/**
 * Cancels up to 50 jobs in an Batch job queue. This is a bulk version of CancelJob. Jobs that are in a
 * `SUBMITTED`, `PENDING`, or `RUNNABLE` state are cancelled
 * and the job status is updated to `FAILED`.
 *
 * A `PENDING` job is cancelled after all dependency jobs are completed.
 * Therefore, it might take longer than expected to cancel a job in `PENDING`
 * status.
 *
 * When you try to cancel an array parent job in `PENDING`, Batch attempts to
 * cancel all child jobs. The array parent job is cancelled when all child jobs are
 * completed.
 *
 * Jobs that progressed to the `STARTING` or `RUNNING` state aren't
 * cancelled. These jobs must be terminated with the TerminateJob or
 * TerminateJobs operation.
 *
 * Batch reports the result for each job individually in the response. Jobs that
 * were processed successfully are reported in the `successful` list. Jobs that
 * encountered errors are reported in the `errors` list. The response returns an
 * HTTP status code of `200` even when some jobs encountered errors, so check the
 * `errors` list. Jobs that can't be found are treated as successfully
 * processed.
 *
 * This operation requires `batch:CancelJob` permission for each job in the
 * request. There is no separate `batch:CancelJobs` IAM action. If a caller's IAM
 * policy grants `batch:CancelJob`, they can use both the singular
 * CancelJob and bulk `CancelJobs` operations.
 */
export const cancelJobs: API.OperationMethod<
  CancelJobsRequest,
  CancelJobsResponse,
  CancelJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelJobsRequest,
  output: CancelJobsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelJobs",
}));

export type CreateComputeEnvironmentError = ClientException | ServerException | CommonErrors;
/**
 * Creates an Batch compute environment. You can create `MANAGED` or
 * `UNMANAGED` compute environments. `MANAGED` compute environments can
 * use Amazon EC2 or Fargate resources. `UNMANAGED` compute environments can only use
 * EC2 resources.
 *
 * In a managed compute environment, Batch manages the capacity and instance types of the
 * compute resources within the environment. This is based on the compute resource specification
 * that you define or the launch template that you
 * specify when you create the compute environment. Either, you can choose to use EC2 On-Demand
 * Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in
 * your managed compute environment. You can optionally set a maximum price so that Spot
 * Instances only launch when the Spot Instance price is less than a specified percentage of the
 * On-Demand price.
 *
 * In an unmanaged compute environment, you can manage your own EC2 compute resources and
 * have flexibility with how you configure your compute resources. For example, you can use
 * custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance
 * AMI specification. For more information, see container instance AMIs in the
 * *Amazon Elastic Container Service Developer Guide*. After you created your unmanaged compute environment,
 * you can use the DescribeComputeEnvironments operation to find the Amazon ECS
 * cluster that's associated with it. Then, launch your container instances into that Amazon ECS
 * cluster. For more information, see Launching an Amazon ECS container
 * instance in the *Amazon Elastic Container Service Developer Guide*.
 *
 * Batch doesn't automatically upgrade the AMIs in a compute environment after it's
 * created. For more information on how to update a compute environment's AMI, see Updating compute environments in the *Batch User Guide*.
 */
export const createComputeEnvironment: API.OperationMethod<
  CreateComputeEnvironmentRequest,
  CreateComputeEnvironmentResponse,
  CreateComputeEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateComputeEnvironmentRequest,
  output: CreateComputeEnvironmentResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComputeEnvironment",
}));

export type CreateConsumableResourceError = ClientException | ServerException | CommonErrors;
/**
 * Creates an Batch consumable resource.
 */
export const createConsumableResource: API.OperationMethod<
  CreateConsumableResourceRequest,
  CreateConsumableResourceResponse,
  CreateConsumableResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConsumableResourceRequest,
  output: CreateConsumableResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConsumableResource",
}));

export type CreateJobQueueError =
  | ClientException
  | ServerException
  | ComputeEnvironmentNotValid
  | JobQueueAlreadyExists
  | CommonErrors;
/**
 * Creates an Batch job queue. When you create a job queue, you associate one or more
 * compute environments to the queue and assign an order of preference for the compute
 * environments.
 *
 * You also set a priority to the job queue that determines the order that the Batch
 * scheduler places jobs onto its associated compute environments. For example, if a compute
 * environment is associated with more than one job queue, the job queue with a higher priority
 * is given preference for scheduling jobs to that compute environment.
 */
export const createJobQueue: API.OperationMethod<
  CreateJobQueueRequest,
  CreateJobQueueResponse,
  CreateJobQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateJobQueueRequest,
  output: CreateJobQueueResponse,
  errors: [ClientException, ServerException, ComputeEnvironmentNotValid, JobQueueAlreadyExists],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJobQueue",
}));

export type CreateQuotaShareError = ClientException | ServerException | CommonErrors;
/**
 * Creates an Batch quota share. Each quota share operates as a virtual queue with a configured compute capacity, resource sharing strategy, and borrow limits.
 */
export const createQuotaShare: API.OperationMethod<
  CreateQuotaShareRequest,
  CreateQuotaShareResponse,
  CreateQuotaShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQuotaShareRequest,
  output: CreateQuotaShareResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQuotaShare",
}));

export type CreateSchedulingPolicyError = ClientException | ServerException | CommonErrors;
/**
 * Creates an Batch scheduling policy.
 */
export const createSchedulingPolicy: API.OperationMethod<
  CreateSchedulingPolicyRequest,
  CreateSchedulingPolicyResponse,
  CreateSchedulingPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSchedulingPolicyRequest,
  output: CreateSchedulingPolicyResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSchedulingPolicy",
}));

export type CreateServiceEnvironmentError = ClientException | ServerException | CommonErrors;
/**
 * Creates a service environment for running service jobs. Service environments define capacity limits for specific service types such as SageMaker Training jobs.
 */
export const createServiceEnvironment: API.OperationMethod<
  CreateServiceEnvironmentRequest,
  CreateServiceEnvironmentResponse,
  CreateServiceEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceEnvironmentRequest,
  output: CreateServiceEnvironmentResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateServiceEnvironment",
}));

export type DeleteComputeEnvironmentError =
  | ClientException
  | ServerException
  | ComputeEnvironmentNotFound
  | ComputeEnvironmentInUse
  | ComputeEnvironmentBeingModified
  | CommonErrors;
/**
 * Deletes an Batch compute environment.
 *
 * Before you can delete a compute environment, you must set its state to
 * `DISABLED` with the UpdateComputeEnvironment API operation and
 * disassociate it from any job queues with the UpdateJobQueue API operation.
 * Compute environments that use Fargate resources must terminate all active jobs on that
 * compute environment before deleting the compute environment. If this isn't done, the compute
 * environment enters an invalid state.
 */
export const deleteComputeEnvironment: API.OperationMethod<
  DeleteComputeEnvironmentRequest,
  DeleteComputeEnvironmentResponse,
  DeleteComputeEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteComputeEnvironmentRequest,
  output: DeleteComputeEnvironmentResponse,
  errors: [
    ClientException,
    ServerException,
    ComputeEnvironmentNotFound,
    ComputeEnvironmentInUse,
    ComputeEnvironmentBeingModified,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteComputeEnvironment",
}));

export type DeleteConsumableResourceError = ClientException | ServerException | CommonErrors;
/**
 * Deletes the specified consumable resource.
 */
export const deleteConsumableResource: API.OperationMethod<
  DeleteConsumableResourceRequest,
  DeleteConsumableResourceResponse,
  DeleteConsumableResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConsumableResourceRequest,
  output: DeleteConsumableResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConsumableResource",
}));

export type DeleteJobQueueError =
  | ClientException
  | ServerException
  | JobQueueNotFound
  | JobQueueBeingModified
  | CommonErrors;
/**
 * Deletes the specified job queue. You must first disable submissions for a queue with the
 * UpdateJobQueue operation. All jobs in the queue are eventually terminated
 * when you delete a job queue.
 *
 * It's not necessary to disassociate compute environments from a queue before submitting a
 * `DeleteJobQueue` request.
 */
export const deleteJobQueue: API.OperationMethod<
  DeleteJobQueueRequest,
  DeleteJobQueueResponse,
  DeleteJobQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteJobQueueRequest,
  output: DeleteJobQueueResponse,
  errors: [ClientException, ServerException, JobQueueNotFound, JobQueueBeingModified],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJobQueue",
}));

export type DeleteQuotaShareError = ClientException | ServerException | CommonErrors;
/**
 * Deletes the specified quota share. You must first disable submissions for the share by
 * updating the state to `DISABLED` using the UpdateQuotaShare operation.
 * All jobs in the share are eventually terminated when you delete a quota share.
 */
export const deleteQuotaShare: API.OperationMethod<
  DeleteQuotaShareRequest,
  DeleteQuotaShareResponse,
  DeleteQuotaShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQuotaShareRequest,
  output: DeleteQuotaShareResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQuotaShare",
}));

export type DeleteSchedulingPolicyError = ClientException | ServerException | CommonErrors;
/**
 * Deletes the specified scheduling policy.
 *
 * You can't delete a scheduling policy that's used in any job queues.
 */
export const deleteSchedulingPolicy: API.OperationMethod<
  DeleteSchedulingPolicyRequest,
  DeleteSchedulingPolicyResponse,
  DeleteSchedulingPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSchedulingPolicyRequest,
  output: DeleteSchedulingPolicyResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSchedulingPolicy",
}));

export type DeleteServiceEnvironmentError = ClientException | ServerException | CommonErrors;
/**
 * Deletes a Service environment. Before you can delete a service environment, you must first set its state to `DISABLED` with the `UpdateServiceEnvironment` API operation and disassociate it from any job queues with the `UpdateJobQueue` API operation.
 */
export const deleteServiceEnvironment: API.OperationMethod<
  DeleteServiceEnvironmentRequest,
  DeleteServiceEnvironmentResponse,
  DeleteServiceEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceEnvironmentRequest,
  output: DeleteServiceEnvironmentResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServiceEnvironment",
}));

export type DeregisterJobDefinitionError = ClientException | ServerException | CommonErrors;
/**
 * Deregisters an Batch job definition. Job definitions are permanently deleted after 180
 * days.
 */
export const deregisterJobDefinition: API.OperationMethod<
  DeregisterJobDefinitionRequest,
  DeregisterJobDefinitionResponse,
  DeregisterJobDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterJobDefinitionRequest,
  output: DeregisterJobDefinitionResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterJobDefinition",
}));

export type DescribeComputeEnvironmentsError = ClientException | ServerException | CommonErrors;
/**
 * Describes one or more of your compute environments.
 *
 * If you're using an unmanaged compute environment, you can use the
 * `DescribeComputeEnvironment` operation to determine the
 * `ecsClusterArn` that you launch your Amazon ECS container instances into.
 */
export const describeComputeEnvironments: API.PaginatedOperationMethod<
  DescribeComputeEnvironmentsRequest,
  DescribeComputeEnvironmentsResponse,
  DescribeComputeEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  ComputeEnvironmentDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeComputeEnvironmentsRequest,
  output: DescribeComputeEnvironmentsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeComputeEnvironments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "computeEnvironments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeConsumableResourceError = ClientException | ServerException | CommonErrors;
/**
 * Returns a description of the specified consumable resource.
 */
export const describeConsumableResource: API.OperationMethod<
  DescribeConsumableResourceRequest,
  DescribeConsumableResourceResponse,
  DescribeConsumableResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeConsumableResourceRequest,
  output: DescribeConsumableResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConsumableResource",
}));

export type DescribeJobDefinitionsError = ClientException | ServerException | CommonErrors;
/**
 * Describes a list of job definitions. You can specify a `status` (such as
 * `ACTIVE`) to only return job definitions that match that status.
 */
export const describeJobDefinitions: API.PaginatedOperationMethod<
  DescribeJobDefinitionsRequest,
  DescribeJobDefinitionsResponse,
  DescribeJobDefinitionsError,
  Credentials | HttpClient.HttpClient,
  JobDefinition
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeJobDefinitionsRequest,
  output: DescribeJobDefinitionsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobDefinitions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobDefinitions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeJobQueuesError = ClientException | ServerException | CommonErrors;
/**
 * Describes one or more of your job queues.
 */
export const describeJobQueues: API.PaginatedOperationMethod<
  DescribeJobQueuesRequest,
  DescribeJobQueuesResponse,
  DescribeJobQueuesError,
  Credentials | HttpClient.HttpClient,
  JobQueueDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeJobQueuesRequest,
  output: DescribeJobQueuesResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobQueues",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobQueues",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeJobsError = ClientException | ServerException | CommonErrors;
/**
 * Describes a list of Batch jobs.
 */
export const describeJobs: API.OperationMethod<
  DescribeJobsRequest,
  DescribeJobsResponse,
  DescribeJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeJobsRequest,
  output: DescribeJobsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobs",
}));

export type DescribeQuotaShareError = ClientException | ServerException | CommonErrors;
/**
 * Returns a description of the specified quota share.
 */
export const describeQuotaShare: API.OperationMethod<
  DescribeQuotaShareRequest,
  DescribeQuotaShareResponse,
  DescribeQuotaShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeQuotaShareRequest,
  output: DescribeQuotaShareResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeQuotaShare",
}));

export type DescribeSchedulingPoliciesError = ClientException | ServerException | CommonErrors;
/**
 * Describes one or more of your scheduling policies.
 */
export const describeSchedulingPolicies: API.OperationMethod<
  DescribeSchedulingPoliciesRequest,
  DescribeSchedulingPoliciesResponse,
  DescribeSchedulingPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSchedulingPoliciesRequest,
  output: DescribeSchedulingPoliciesResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSchedulingPolicies",
}));

export type DescribeServiceEnvironmentsError = ClientException | ServerException | CommonErrors;
/**
 * Describes one or more of your service environments.
 */
export const describeServiceEnvironments: API.PaginatedOperationMethod<
  DescribeServiceEnvironmentsRequest,
  DescribeServiceEnvironmentsResponse,
  DescribeServiceEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  ServiceEnvironmentDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeServiceEnvironmentsRequest,
  output: DescribeServiceEnvironmentsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServiceEnvironments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "serviceEnvironments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeServiceJobError = ClientException | ServerException | CommonErrors;
/**
 * The details of a service job.
 */
export const describeServiceJob: API.OperationMethod<
  DescribeServiceJobRequest,
  DescribeServiceJobResponse,
  DescribeServiceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeServiceJobRequest,
  output: DescribeServiceJobResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServiceJob",
}));

export type GetJobQueueSnapshotError = ClientException | ServerException | CommonErrors;
/**
 * Provides a snapshot of job queue state, including ordering of `RUNNABLE` jobs, as well as capacity utilization for already dispatched jobs.
 * The first 100 `RUNNABLE` jobs in the job queue are listed in order of dispatch. For job queues with an attached
 * quota-share policy, the first `RUNNABLE` job in each quota share is also listed. Capacity utilization for the job queue is provided, as well as
 * break downs by share for job queues with attached fair-share or quota-share scheduling policies.
 */
export const getJobQueueSnapshot: API.OperationMethod<
  GetJobQueueSnapshotRequest,
  GetJobQueueSnapshotResponse,
  GetJobQueueSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetJobQueueSnapshotRequest,
  output: GetJobQueueSnapshotResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJobQueueSnapshot",
}));

export type ListConsumableResourcesError = ClientException | ServerException | CommonErrors;
/**
 * Returns a list of Batch consumable resources.
 */
export const listConsumableResources: API.PaginatedOperationMethod<
  ListConsumableResourcesRequest,
  ListConsumableResourcesResponse,
  ListConsumableResourcesError,
  Credentials | HttpClient.HttpClient,
  ConsumableResourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConsumableResourcesRequest,
  output: ListConsumableResourcesResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConsumableResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "consumableResources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobsError = ClientException | ServerException | CommonErrors;
/**
 * Returns a list of Batch jobs.
 *
 * You must specify only one of the following items:
 *
 * - A job queue ID to return a list of jobs in that job queue
 *
 * - A multi-node parallel job ID to return a list of nodes for that job
 *
 * - An array job ID to return a list of the children for that job
 */
export const listJobs: API.PaginatedOperationMethod<
  ListJobsRequest,
  ListJobsResponse,
  ListJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobsRequest,
  output: ListJobsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobsByConsumableResourceError = ClientException | ServerException | CommonErrors;
/**
 * Returns a list of Batch jobs that require a specific consumable resource.
 */
export const listJobsByConsumableResource: API.PaginatedOperationMethod<
  ListJobsByConsumableResourceRequest,
  ListJobsByConsumableResourceResponse,
  ListJobsByConsumableResourceError,
  Credentials | HttpClient.HttpClient,
  ListJobsByConsumableResourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobsByConsumableResourceRequest,
  output: ListJobsByConsumableResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobsByConsumableResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQuotaSharesError = ClientException | ServerException | CommonErrors;
/**
 * Returns a list of Batch quota shares associated with a job queue.
 */
export const listQuotaShares: API.PaginatedOperationMethod<
  ListQuotaSharesRequest,
  ListQuotaSharesResponse,
  ListQuotaSharesError,
  Credentials | HttpClient.HttpClient,
  QuotaShareDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQuotaSharesRequest,
  output: ListQuotaSharesResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQuotaShares",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "quotaShares",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSchedulingPoliciesError = ClientException | ServerException | CommonErrors;
/**
 * Returns a list of Batch scheduling policies.
 */
export const listSchedulingPolicies: API.PaginatedOperationMethod<
  ListSchedulingPoliciesRequest,
  ListSchedulingPoliciesResponse,
  ListSchedulingPoliciesError,
  Credentials | HttpClient.HttpClient,
  SchedulingPolicyListingDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSchedulingPoliciesRequest,
  output: ListSchedulingPoliciesResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchedulingPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "schedulingPolicies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListServiceJobsError = ClientException | ServerException | CommonErrors;
/**
 * Returns a list of service jobs for a specified job queue.
 */
export const listServiceJobs: API.PaginatedOperationMethod<
  ListServiceJobsRequest,
  ListServiceJobsResponse,
  ListServiceJobsError,
  Credentials | HttpClient.HttpClient,
  ServiceJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServiceJobsRequest,
  output: ListServiceJobsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ClientException | ServerException | CommonErrors;
/**
 * Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
 * and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RegisterJobDefinitionError = ClientException | ServerException | CommonErrors;
/**
 * Registers an Batch job definition.
 */
export const registerJobDefinition: API.OperationMethod<
  RegisterJobDefinitionRequest,
  RegisterJobDefinitionResponse,
  RegisterJobDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterJobDefinitionRequest,
  output: RegisterJobDefinitionResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterJobDefinition",
}));

export type SubmitJobError = ClientException | ServerException | CommonErrors;
/**
 * Submits an Batch job from a job definition. Parameters that are specified during SubmitJob override parameters defined in the job definition. vCPU and memory
 * requirements that are specified in the `resourceRequirements` objects in the job
 * definition are the exception. They can't be overridden this way using the `memory`
 * and `vcpus` parameters. Rather, you must specify updates to job definition
 * parameters in a `resourceRequirements` object that's included in the
 * `containerOverrides` parameter.
 *
 * Job queues with a scheduling policy are limited to 500 active share identifiers at
 * a time.
 *
 * Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days.
 * This is because, after 14 days, Fargate resources might become unavailable and job might be
 * terminated.
 */
export const submitJob: API.OperationMethod<
  SubmitJobRequest,
  SubmitJobResponse,
  SubmitJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubmitJobRequest,
  output: SubmitJobResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitJob",
}));

export type SubmitServiceJobError = ClientException | ServerException | CommonErrors;
/**
 * Submits a service job to a specified job queue to run on SageMaker AI. A service job is a unit of work that you submit to Batch for execution on SageMaker AI.
 */
export const submitServiceJob: API.OperationMethod<
  SubmitServiceJobRequest,
  SubmitServiceJobResponse,
  SubmitServiceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubmitServiceJobRequest,
  output: SubmitServiceJobResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitServiceJob",
}));

export type TagResourceError = ClientException | ServerException | CommonErrors;
/**
 * Associates the specified tags to a resource with the specified `resourceArn`.
 * If existing tags on a resource aren't specified in the request parameters, they aren't
 * changed. When a resource is deleted, the tags that are associated with that resource are
 * deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
 * and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TerminateJobError = ClientException | ServerException | CommonErrors;
/**
 * Terminates a job in a job queue. Jobs that are in the `STARTING` or
 * `RUNNING` state are terminated, which causes them to transition to
 * `FAILED`. Jobs that have not progressed to the `STARTING` state are
 * cancelled.
 */
export const terminateJob: API.OperationMethod<
  TerminateJobRequest,
  TerminateJobResponse,
  TerminateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TerminateJobRequest,
  output: TerminateJobResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateJob",
}));

export type TerminateJobsError = ClientException | ServerException | CommonErrors;
/**
 * Terminates up to 50 jobs in a job queue. This is a bulk version of TerminateJob. Jobs that are in the `STARTING` or
 * `RUNNING` state are terminated, which causes them to transition to
 * `FAILED`. Jobs that have not progressed to the `STARTING` state are
 * cancelled.
 *
 * Batch reports the result for each job individually in the response. Jobs that
 * were processed successfully are reported in the `successful` list. Jobs that
 * encountered errors are reported in the `errors` list. The response returns an
 * HTTP status code of `200` even when some jobs encountered errors, so check the
 * `errors` list. Jobs that can't be found are treated as successfully
 * processed.
 *
 * This operation requires `batch:TerminateJob` permission for each job in the
 * request. There is no separate `batch:TerminateJobs` IAM action. If a caller's IAM
 * policy grants `batch:TerminateJob`, they can use both the singular
 * TerminateJob and bulk `TerminateJobs` operations.
 */
export const terminateJobs: API.OperationMethod<
  TerminateJobsRequest,
  TerminateJobsResponse,
  TerminateJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TerminateJobsRequest,
  output: TerminateJobsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateJobs",
}));

export type TerminateServiceJobError = ClientException | ServerException | CommonErrors;
/**
 * Terminates a service job in a job queue.
 */
export const terminateServiceJob: API.OperationMethod<
  TerminateServiceJobRequest,
  TerminateServiceJobResponse,
  TerminateServiceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TerminateServiceJobRequest,
  output: TerminateServiceJobResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateServiceJob",
}));

export type TerminateServiceJobsError = ClientException | ServerException | CommonErrors;
/**
 * Terminates up to 50 service jobs in a job queue. This is a bulk version of TerminateServiceJob.
 *
 * Batch reports the result for each service job individually in the response. Service jobs that were processed successfully are reported in the `successful` list. Service jobs that encountered errors are reported in the `errors` list. The response returns an HTTP status code of `200` even when some service jobs encountered errors, so check the `errors` list. Service jobs that can't be found are treated as successfully processed.
 *
 * This operation requires `batch:TerminateServiceJob` permission for each service job in the
 * request. There is no separate `batch:TerminateServiceJobs` IAM action. If a caller's IAM
 * policy grants `batch:TerminateServiceJob`, they can use both the singular
 * `TerminateServiceJob` and bulk `TerminateServiceJobs` operations.
 */
export const terminateServiceJobs: API.OperationMethod<
  TerminateServiceJobsRequest,
  TerminateServiceJobsResponse,
  TerminateServiceJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TerminateServiceJobsRequest,
  output: TerminateServiceJobsResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateServiceJobs",
}));

export type UntagResourceError = ClientException | ServerException | CommonErrors;
/**
 * Deletes specified tags from an Batch resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateComputeEnvironmentError =
  | ClientException
  | ServerException
  | ComputeEnvironmentNotFound
  | ComputeEnvironmentBeingModified
  | CommonErrors;
/**
 * Updates an Batch compute environment.
 */
export const updateComputeEnvironment: API.OperationMethod<
  UpdateComputeEnvironmentRequest,
  UpdateComputeEnvironmentResponse,
  UpdateComputeEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateComputeEnvironmentRequest,
  output: UpdateComputeEnvironmentResponse,
  errors: [
    ClientException,
    ServerException,
    ComputeEnvironmentNotFound,
    ComputeEnvironmentBeingModified,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateComputeEnvironment",
}));

export type UpdateConsumableResourceError = ClientException | ServerException | CommonErrors;
/**
 * Updates a consumable resource.
 */
export const updateConsumableResource: API.OperationMethod<
  UpdateConsumableResourceRequest,
  UpdateConsumableResourceResponse,
  UpdateConsumableResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConsumableResourceRequest,
  output: UpdateConsumableResourceResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConsumableResource",
}));

export type UpdateJobQueueError =
  | ClientException
  | ServerException
  | JobQueueNotFound
  | JobQueueBeingModified
  | CommonErrors;
/**
 * Updates a job queue.
 */
export const updateJobQueue: API.OperationMethod<
  UpdateJobQueueRequest,
  UpdateJobQueueResponse,
  UpdateJobQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateJobQueueRequest,
  output: UpdateJobQueueResponse,
  errors: [ClientException, ServerException, JobQueueNotFound, JobQueueBeingModified],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateJobQueue",
}));

export type UpdateQuotaShareError = ClientException | ServerException | CommonErrors;
/**
 * Updates a quota share.
 */
export const updateQuotaShare: API.OperationMethod<
  UpdateQuotaShareRequest,
  UpdateQuotaShareResponse,
  UpdateQuotaShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQuotaShareRequest,
  output: UpdateQuotaShareResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQuotaShare",
}));

export type UpdateSchedulingPolicyError = ClientException | ServerException | CommonErrors;
/**
 * Updates a scheduling policy.
 */
export const updateSchedulingPolicy: API.OperationMethod<
  UpdateSchedulingPolicyRequest,
  UpdateSchedulingPolicyResponse,
  UpdateSchedulingPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSchedulingPolicyRequest,
  output: UpdateSchedulingPolicyResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSchedulingPolicy",
}));

export type UpdateServiceEnvironmentError = ClientException | ServerException | CommonErrors;
/**
 * Updates a service environment. You can update the state of a service environment from `ENABLED` to `DISABLED` to prevent new service jobs from being placed in the service environment.
 */
export const updateServiceEnvironment: API.OperationMethod<
  UpdateServiceEnvironmentRequest,
  UpdateServiceEnvironmentResponse,
  UpdateServiceEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServiceEnvironmentRequest,
  output: UpdateServiceEnvironmentResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServiceEnvironment",
}));

export type UpdateServiceJobError = ClientException | ServerException | CommonErrors;
/**
 * Updates the priority of a specified service job in an Batch job queue.
 */
export const updateServiceJob: API.OperationMethod<
  UpdateServiceJobRequest,
  UpdateServiceJobResponse,
  UpdateServiceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServiceJobRequest,
  output: UpdateServiceJobResponse,
  errors: [ClientException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServiceJob",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobId: S.optional(S.String), reason: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/v1/canceljob" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelJobRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CancelJobResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ jobs: S.optional(StringList), reason: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/canceljobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelJobsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          job: S.optional(S.String),
          code: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "CancelJobsErrorDetail" });
    case 5:
      return S.Array(CancelJobsErrorDetail);
    case 6:
      return S.suspend(() =>
        S.Struct({
          successful: S.optional(StringList),
          errors: S.optional(CancelJobsErrorDetailList),
        }).pipe(ns),
      ).annotate({ identifier: "CancelJobsResponse" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          launchTemplateId: S.optional(S.String),
          launchTemplateName: S.optional(S.String),
          version: S.optional(S.String),
          targetInstanceTypes: S.optional(StringList),
          userdataType: S.optional(UserdataType),
        }),
      ).annotate({
        identifier: "LaunchTemplateSpecificationOverride",
      });
    case 1:
      return S.Array(LaunchTemplateSpecificationOverride);
    case 2:
      return S.suspend(() =>
        S.Struct({
          launchTemplateId: S.optional(S.String),
          launchTemplateName: S.optional(S.String),
          version: S.optional(S.String),
          overrides: S.optional(LaunchTemplateSpecificationOverrideList),
          userdataType: S.optional(UserdataType),
        }),
      ).annotate({
        identifier: "LaunchTemplateSpecification",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          imageType: S.optional(S.String),
          imageIdOverride: S.optional(S.String),
          batchImageStatus: S.optional(S.String),
          imageKubernetesVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ec2Configuration" });
    case 4:
      return S.Array(Ec2Configuration);
    case 5:
      return S.suspend(() => S.Struct({ minScaleDownDelayMinutes: S.optional(S.Number) })).annotate(
        { identifier: "ComputeScalingPolicy" },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ subnets: S.optional(StringList), securityGroups: S.optional(StringList) }),
      ).annotate({
        identifier: "ManagedInstancesNetworkConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ allowedInstanceTypes: S.optional(StringList) })).annotate({
        identifier: "InstanceRequirementsRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ storageSizeGiB: S.optional(S.Number) })).annotate({
        identifier: "ManagedInstancesStorageConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          reservationGroupArn: S.optional(S.String),
          reservationPreference: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CapacityReservationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ useLocalStorage: S.optional(S.Boolean) })).annotate({
        identifier: "ManagedInstancesLocalStorageConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ec2InstanceProfileArn: S.optional(S.String),
          networkConfiguration: S.optional(ManagedInstancesNetworkConfiguration),
          instanceRequirements: S.optional(InstanceRequirementsRequest),
          capacityOptionType: S.optional(S.String),
          storageConfiguration: S.optional(ManagedInstancesStorageConfiguration),
          monitoring: S.optional(S.String),
          fipsEnabled: S.optional(S.Boolean),
          capacityReservations: S.optional(CapacityReservationRequest),
          instanceMetadataTagsPropagation: S.optional(S.Boolean),
          localStorageConfiguration: S.optional(ManagedInstancesLocalStorageConfiguration),
        }),
      ).annotate({ identifier: "InstanceLaunchTemplate" });
    case 4:
      return S.suspend(() => S.Struct({ scaleInAfter: S.optional(S.Number) })).annotate({
        identifier: "InfrastructureOptimization",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          propagateTags: S.optional(S.String),
          infrastructureRoleArn: S.optional(S.String),
          instanceLaunchTemplate: S.optional(InstanceLaunchTemplate),
          infrastructureOptimization: S.optional(InfrastructureOptimization),
        }),
      ).annotate({ identifier: "ManagedInstancesProvider" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(CRType),
          allocationStrategy: S.optional(CRAllocationStrategy),
          minvCpus: S.optional(S.Number),
          maxvCpus: S.optional(S.Number),
          desiredvCpus: S.optional(S.Number),
          instanceTypes: S.optional(StringList),
          imageId: S.optional(S.String),
          subnets: S.optional(StringList),
          securityGroupIds: S.optional(StringList),
          ec2KeyPair: S.optional(S.String),
          instanceRole: S.optional(S.String),
          tags: S.optional(TagsMap),
          placementGroup: S.optional(S.String),
          bidPercentage: S.optional(S.Number),
          spotIamFleetRole: S.optional(S.String),
          launchTemplate: S.optional(LaunchTemplateSpecification),
          ec2Configuration: S.optional(Ec2ConfigurationList),
          scalingPolicy: S.optional(ComputeScalingPolicy),
          managedInstancesProvider: S.optional(ManagedInstancesProvider),
          capacityTags: S.optional(TagrisTagsMap),
        }),
      ).annotate({ identifier: "ComputeResource" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          desiredState: S.optional(EksAccessEntryDesiredState),
          status: S.optional(EksAccessEntryStatus),
        }),
      ).annotate({ identifier: "EksAccessEntry" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          eksClusterArn: S.optional(S.String),
          kubernetesNamespace: S.optional(S.String),
          accessEntry: S.optional(EksAccessEntry),
        }),
      ).annotate({ identifier: "EksConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ containerInsights: S.optional(ContainerInsights) }),
      ).annotate({ identifier: "EcsSettings" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          computeEnvironmentName: S.optional(S.String),
          type: S.optional(CEType),
          state: S.optional(CEState),
          unmanagedvCpus: S.optional(S.Number),
          computeResources: S.optional(ComputeResource),
          serviceRole: S.optional(S.String),
          tags: S.optional(TagrisTagsMap),
          eksConfiguration: S.optional(EksConfiguration),
          context: S.optional(S.String),
          ecsSettings: S.optional(EcsSettings),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/createcomputeenvironment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateComputeEnvironmentRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          computeEnvironmentName: S.optional(S.String),
          computeEnvironmentArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateComputeEnvironmentResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          consumableResourceName: S.optional(S.String),
          totalQuantity: S.optional(S.Number),
          resourceType: S.optional(S.String),
          tags: S.optional(TagrisTagsMap),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/createconsumableresource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConsumableResourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          consumableResourceName: S.optional(S.String),
          consumableResourceArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateConsumableResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ order: S.optional(S.Number), computeEnvironment: S.optional(S.String) }),
      ).annotate({ identifier: "ComputeEnvironmentOrder" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ComputeEnvironmentOrder);
    case 1:
      return S.suspend(() =>
        S.Struct({ order: S.optional(S.Number), serviceEnvironment: S.optional(S.String) }),
      ).annotate({ identifier: "ServiceEnvironmentOrder" });
    case 2:
      return S.Array(ServiceEnvironmentOrder);
    case 3:
      return S.suspend(() =>
        S.Struct({
          reason: S.optional(S.String),
          state: S.optional(JobStateTimeLimitActionsState),
          maxTimeSeconds: S.optional(S.Number),
          action: S.optional(JobStateTimeLimitActionsAction),
        }),
      ).annotate({ identifier: "JobStateTimeLimitAction" });
    case 4:
      return S.Array(JobStateTimeLimitAction);
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobQueueName: S.optional(S.String),
          state: S.optional(JQState),
          schedulingPolicyArn: S.optional(S.String),
          priority: S.optional(S.Number),
          computeEnvironmentOrder: S.optional(ComputeEnvironmentOrders),
          serviceEnvironmentOrder: S.optional(ServiceEnvironmentOrders),
          jobQueueType: S.optional(JobQueueType),
          tags: S.optional(TagrisTagsMap),
          jobStateTimeLimitActions: S.optional(JobStateTimeLimitActions),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/createjobqueue" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateJobQueueRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ jobQueueName: S.optional(S.String), jobQueueArn: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "CreateJobQueueResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ maxCapacity: S.optional(S.Number), capacityUnit: S.optional(S.String) }),
      ).annotate({ identifier: "QuotaShareCapacityLimit" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(QuotaShareCapacityLimit);
    case 1:
      return S.suspend(() =>
        S.Struct({
          strategy: S.optional(QuotaShareResourceSharingStrategy),
          borrowLimit: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "QuotaShareResourceSharingConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ inSharePreemption: S.optional(QuotaShareInSharePreemptionState) }),
      ).annotate({
        identifier: "QuotaSharePreemptionConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          quotaShareName: S.optional(S.String),
          jobQueue: S.optional(S.String),
          capacityLimits: S.optional(QuotaShareCapacityLimits),
          resourceSharingConfiguration: S.optional(QuotaShareResourceSharingConfiguration),
          preemptionConfiguration: S.optional(QuotaSharePreemptionConfiguration),
          state: S.optional(QuotaShareState),
          tags: S.optional(TagrisTagsMap),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/createquotashare" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateQuotaShareRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          quotaShareName: S.optional(S.String),
          quotaShareArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CreateQuotaShareResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          idleResourceAssignmentStrategy: S.optional(QuotaShareIdleResourceAssignmentStrategy),
        }),
      ).annotate({ identifier: "QuotaSharePolicy" });
    case 6:
      return S.suspend(() =>
        S.Struct({ shareIdentifier: S.optional(S.String), weightFactor: S.optional(S.Number) }),
      ).annotate({ identifier: "ShareAttributes" });
    case 7:
      return S.Array(ShareAttributes);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          shareDecaySeconds: S.optional(S.Number),
          computeReservation: S.optional(S.Number),
          shareDistribution: S.optional(ShareAttributesList),
        }),
      ).annotate({ identifier: "FairsharePolicy" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          quotaSharePolicy: S.optional(QuotaSharePolicy),
          fairsharePolicy: S.optional(FairsharePolicy),
          tags: S.optional(TagrisTagsMap),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/createschedulingpolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSchedulingPolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), arn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreateSchedulingPolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceEnvironmentName: S.optional(S.String),
          serviceEnvironmentType: S.optional(ServiceEnvironmentType),
          state: S.optional(ServiceEnvironmentState),
          capacityLimits: S.optional(CapacityLimits),
          tags: S.optional(TagrisTagsMap),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/createserviceenvironment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateServiceEnvironmentRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceEnvironmentName: S.optional(S.String),
          serviceEnvironmentArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateServiceEnvironmentResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ computeEnvironment: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/deletecomputeenvironment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteComputeEnvironmentRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteComputeEnvironmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ consumableResource: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/deleteconsumableresource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConsumableResourceRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobQueue: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/deletejobqueue" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteJobQueueRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteJobQueueResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ quotaShareArn: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/deletequotashare" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteQuotaShareRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteQuotaShareResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/deleteschedulingpolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSchedulingPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ serviceEnvironment: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/deleteserviceenvironment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServiceEnvironmentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ jobDefinition: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/deregisterjobdefinition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterJobDefinitionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          computeEnvironments: S.optional(StringList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describecomputeenvironments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeComputeEnvironmentsRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          terminateJobsOnUpdate: S.optional(S.Boolean),
          jobExecutionTimeoutMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UpdatePolicy" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          computeEnvironmentName: S.optional(S.String),
          computeEnvironmentArn: S.optional(S.String),
          unmanagedvCpus: S.optional(S.Number),
          ecsClusterArn: S.optional(S.String),
          tags: S.optional(TagrisTagsMap),
          type: S.optional(CEType),
          state: S.optional(CEState),
          status: S.optional(CEStatus),
          statusReason: S.optional(S.String),
          computeResources: S.optional(ComputeResource),
          serviceRole: S.optional(S.String),
          updatePolicy: S.optional(UpdatePolicy),
          eksConfiguration: S.optional(EksConfiguration),
          containerOrchestrationType: S.optional(OrchestrationType),
          uuid: S.optional(S.String),
          context: S.optional(S.String),
          ecsSettings: S.optional(EcsSettings),
        }),
      ).annotate({ identifier: "ComputeEnvironmentDetail" });
    case 2:
      return S.Array(ComputeEnvironmentDetail);
    case 3:
      return S.suspend(() =>
        S.Struct({
          computeEnvironments: S.optional(ComputeEnvironmentDetailList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeComputeEnvironmentsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ consumableResource: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describeconsumableresource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeConsumableResourceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          consumableResourceName: S.optional(S.String),
          consumableResourceArn: S.optional(S.String),
          totalQuantity: S.optional(S.Number),
          inUseQuantity: S.optional(S.Number),
          availableQuantity: S.optional(S.Number),
          resourceType: S.optional(S.String),
          createdAt: S.optional(S.Number),
          tags: S.optional(TagrisTagsMap),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConsumableResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobDefinitions: S.optional(StringList),
          maxResults: S.optional(S.Number),
          jobDefinitionName: S.optional(S.String),
          status: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describejobdefinitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeJobDefinitionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          onStatusReason: S.optional(S.String),
          onReason: S.optional(S.String),
          onExitCode: S.optional(S.String),
          action: S.optional(RetryAction),
        }),
      ).annotate({ identifier: "EvaluateOnExit" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(EvaluateOnExit);
    case 1:
      return S.suspend(() =>
        S.Struct({
          attempts: S.optional(S.Number),
          evaluateOnExit: S.optional(EvaluateOnExitList),
        }),
      ).annotate({ identifier: "RetryStrategy" });
    case 2:
      return S.suspend(() => S.Struct({ sourcePath: S.optional(S.String) })).annotate({
        identifier: "Host",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accessPointId: S.optional(S.String),
          iam: S.optional(EFSAuthorizationConfigIAM),
        }),
      ).annotate({ identifier: "EFSAuthorizationConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          fileSystemId: S.optional(S.String),
          rootDirectory: S.optional(S.String),
          transitEncryption: S.optional(EFSTransitEncryption),
          transitEncryptionPort: S.optional(S.Number),
          authorizationConfig: S.optional(EFSAuthorizationConfig),
        }),
      ).annotate({ identifier: "EFSVolumeConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          fileSystemArn: S.optional(S.String),
          rootDirectory: S.optional(S.String),
          transitEncryptionPort: S.optional(S.Number),
          accessPointArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3FilesVolumeConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          host: S.optional(Host),
          name: S.optional(S.String),
          efsVolumeConfiguration: S.optional(EFSVolumeConfiguration),
          s3filesVolumeConfiguration: S.optional(S3FilesVolumeConfiguration),
        }),
      ).annotate({ identifier: "Volume" });
    case 7:
      return S.Array(Volume);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "KeyValuePair" });
    case 1:
      return S.Array(KeyValuePair);
    case 2:
      return S.suspend(() =>
        S.Struct({
          containerPath: S.optional(S.String),
          readOnly: S.optional(S.Boolean),
          sourceVolume: S.optional(S.String),
        }),
      ).annotate({ identifier: "MountPoint" });
    case 3:
      return S.Array(MountPoint);
    case 4:
      return S.suspend(() =>
        S.Struct({
          hardLimit: S.optional(S.Number),
          name: S.optional(S.String),
          softLimit: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Ulimit" });
    case 5:
      return S.Array(Ulimit);
    case 6:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.String), type: S.optional(ResourceType) }),
      ).annotate({ identifier: "ResourceRequirement" });
    case 7:
      return S.Array(ResourceRequirement);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DeviceCgroupPermission);
    case 1:
      return S.suspend(() =>
        S.Struct({
          hostPath: S.optional(S.String),
          containerPath: S.optional(S.String),
          permissions: S.optional(DeviceCgroupPermissions),
        }),
      ).annotate({ identifier: "Device" });
    case 2:
      return S.Array(Device);
    case 3:
      return S.suspend(() =>
        S.Struct({
          containerPath: S.optional(S.String),
          size: S.optional(S.Number),
          mountOptions: S.optional(StringList),
        }),
      ).annotate({ identifier: "Tmpfs" });
    case 4:
      return S.Array(Tmpfs);
    case 5:
      return S.suspend(() =>
        S.Struct({
          devices: S.optional(DevicesList),
          initProcessEnabled: S.optional(S.Boolean),
          sharedMemorySize: S.optional(S.Number),
          tmpfs: S.optional(TmpfsList),
          maxSwap: S.optional(S.Number),
          swappiness: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LinuxParameters" });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), valueFrom: S.optional(S.String) }),
      ).annotate({ identifier: "Secret" });
    case 7:
      return S.Array(Secret);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logDriver: S.optional(LogDriver),
          options: S.optional(LogConfigurationOptionsMap),
          secretOptions: S.optional(SecretList),
        }),
      ).annotate({ identifier: "LogConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ assignPublicIp: S.optional(AssignPublicIp) })).annotate({
        identifier: "NetworkConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ platformVersion: S.optional(S.String) })).annotate({
        identifier: "FargatePlatformConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ sizeInGiB: S.optional(S.Number) })).annotate({
        identifier: "EphemeralStorage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          operatingSystemFamily: S.optional(S.String),
          cpuArchitecture: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuntimePlatform" });
    case 5:
      return S.suspend(() => S.Struct({ credentialsParameter: S.optional(S.String) })).annotate({
        identifier: "RepositoryCredentials",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          image: S.optional(S.String),
          vcpus: S.optional(S.Number),
          memory: S.optional(S.Number),
          command: S.optional(StringList),
          jobRoleArn: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          volumes: S.optional(Volumes),
          environment: S.optional(EnvironmentVariables),
          mountPoints: S.optional(MountPoints),
          readonlyRootFilesystem: S.optional(S.Boolean),
          privileged: S.optional(S.Boolean),
          ulimits: S.optional(Ulimits),
          user: S.optional(S.String),
          instanceType: S.optional(S.String),
          resourceRequirements: S.optional(ResourceRequirements),
          linuxParameters: S.optional(LinuxParameters),
          logConfiguration: S.optional(LogConfiguration),
          secrets: S.optional(SecretList),
          networkConfiguration: S.optional(NetworkConfiguration),
          fargatePlatformConfiguration: S.optional(FargatePlatformConfiguration),
          enableExecuteCommand: S.optional(S.Boolean),
          ephemeralStorage: S.optional(EphemeralStorage),
          runtimePlatform: S.optional(RuntimePlatform),
          repositoryCredentials: S.optional(RepositoryCredentials),
        }),
      ).annotate({ identifier: "ContainerProperties" });
    case 7:
      return S.suspend(() => S.Struct({ attemptDurationSeconds: S.optional(S.Number) })).annotate({
        identifier: "JobTimeout",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ containerName: S.optional(S.String), condition: S.optional(S.String) }),
      ).annotate({ identifier: "TaskContainerDependency" });
    case 1:
      return S.Array(TaskContainerDependency);
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(FirelensConfigurationType),
          options: S.optional(FirelensConfigurationOptionsMap),
        }),
      ).annotate({ identifier: "FirelensConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          command: S.optional(StringList),
          dependsOn: S.optional(TaskContainerDependencyList),
          environment: S.optional(EnvironmentVariables),
          essential: S.optional(S.Boolean),
          firelensConfiguration: S.optional(FirelensConfiguration),
          image: S.optional(S.String),
          linuxParameters: S.optional(LinuxParameters),
          logConfiguration: S.optional(LogConfiguration),
          mountPoints: S.optional(MountPoints),
          name: S.optional(S.String),
          privileged: S.optional(S.Boolean),
          readonlyRootFilesystem: S.optional(S.Boolean),
          repositoryCredentials: S.optional(RepositoryCredentials),
          resourceRequirements: S.optional(ResourceRequirements),
          secrets: S.optional(SecretList),
          ulimits: S.optional(Ulimits),
          user: S.optional(S.String),
          startTimeout: S.optional(S.Number),
          stopTimeout: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TaskContainerProperties" });
    case 4:
      return S.Array(TaskContainerProperties);
    case 5:
      return S.suspend(() =>
        S.Struct({
          containers: S.optional(ListTaskContainerProperties),
          ephemeralStorage: S.optional(EphemeralStorage),
          executionRoleArn: S.optional(S.String),
          platformVersion: S.optional(S.String),
          ipcMode: S.optional(S.String),
          taskRoleArn: S.optional(S.String),
          pidMode: S.optional(S.String),
          networkConfiguration: S.optional(NetworkConfiguration),
          runtimePlatform: S.optional(RuntimePlatform),
          volumes: S.optional(Volumes),
          enableExecuteCommand: S.optional(S.Boolean),
          networkMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "EcsTaskProperties" });
    case 6:
      return S.Array(EcsTaskProperties);
    case 7:
      return S.suspend(() =>
        S.Struct({ taskProperties: S.optional(ListEcsTaskProperties) }),
      ).annotate({ identifier: "EcsProperties" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "ImagePullSecret",
      });
    case 1:
      return S.Array(ImagePullSecret);
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "EksContainerEnvironmentVariable",
      });
    case 3:
      return S.Array(EksContainerEnvironmentVariable);
    case 4:
      return S.suspend(() =>
        S.Struct({ limits: S.optional(EksLimits), requests: S.optional(EksRequests) }),
      ).annotate({
        identifier: "EksContainerResourceRequirements",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          mountPath: S.optional(S.String),
          subPath: S.optional(S.String),
          readOnly: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EksContainerVolumeMount" });
    case 6:
      return S.Array(EksContainerVolumeMount);
    case 7:
      return S.suspend(() =>
        S.Struct({
          runAsUser: S.optional(S.Number),
          runAsGroup: S.optional(S.Number),
          privileged: S.optional(S.Boolean),
          allowPrivilegeEscalation: S.optional(S.Boolean),
          readOnlyRootFilesystem: S.optional(S.Boolean),
          runAsNonRoot: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "EksContainerSecurityContext",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          image: S.optional(S.String),
          imagePullPolicy: S.optional(S.String),
          command: S.optional(StringList),
          args: S.optional(StringList),
          env: S.optional(EksContainerEnvironmentVariables),
          resources: S.optional(EksContainerResourceRequirements),
          volumeMounts: S.optional(EksContainerVolumeMounts),
          securityContext: S.optional(EksContainerSecurityContext),
        }),
      ).annotate({ identifier: "EksContainer" });
    case 1:
      return S.Array(EksContainer);
    case 2:
      return S.suspend(() => S.Struct({ path: S.optional(S.String) })).annotate({
        identifier: "EksHostPath",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ medium: S.optional(S.String), sizeLimit: S.optional(S.String) }),
      ).annotate({ identifier: "EksEmptyDir" });
    case 4:
      return S.suspend(() =>
        S.Struct({ secretName: S.optional(S.String), optional: S.optional(S.Boolean) }),
      ).annotate({ identifier: "EksSecret" });
    case 5:
      return S.suspend(() =>
        S.Struct({ claimName: S.optional(S.String), readOnly: S.optional(S.Boolean) }),
      ).annotate({ identifier: "EksPersistentVolumeClaim" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          hostPath: S.optional(EksHostPath),
          emptyDir: S.optional(EksEmptyDir),
          secret: S.optional(EksSecret),
          persistentVolumeClaim: S.optional(EksPersistentVolumeClaim),
        }),
      ).annotate({ identifier: "EksVolume" });
    case 7:
      return S.Array(EksVolume);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          labels: S.optional(EksLabelsMap),
          annotations: S.optional(EksAnnotationsMap),
          namespace: S.optional(S.String),
        }),
      ).annotate({ identifier: "EksMetadata" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceAccountName: S.optional(S.String),
          hostNetwork: S.optional(S.Boolean),
          dnsPolicy: S.optional(S.String),
          imagePullSecrets: S.optional(ImagePullSecrets),
          containers: S.optional(EksContainers),
          initContainers: S.optional(EksContainers),
          volumes: S.optional(EksVolumes),
          metadata: S.optional(EksMetadata),
          shareProcessNamespace: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EksPodProperties" });
    case 2:
      return S.suspend(() => S.Struct({ podProperties: S.optional(EksPodProperties) })).annotate({
        identifier: "EksProperties",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ consumableResource: S.optional(S.String), quantity: S.optional(S.Number) }),
      ).annotate({
        identifier: "ConsumableResourceRequirement",
      });
    case 4:
      return S.Array(ConsumableResourceRequirement);
    case 5:
      return S.suspend(() =>
        S.Struct({ consumableResourceList: S.optional(ConsumableResourceList) }),
      ).annotate({
        identifier: "ConsumableResourceProperties",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          targetNodes: S.optional(S.String),
          container: S.optional(ContainerProperties),
          instanceTypes: S.optional(StringList),
          ecsProperties: S.optional(EcsProperties),
          eksProperties: S.optional(EksProperties),
          consumableResourceProperties: S.optional(ConsumableResourceProperties),
        }),
      ).annotate({ identifier: "NodeRangeProperty" });
    case 7:
      return S.Array(NodeRangeProperty);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          numNodes: S.optional(S.Number),
          mainNode: S.optional(S.Number),
          nodeRangeProperties: S.optional(NodeRangeProperties),
        }),
      ).annotate({ identifier: "NodeProperties" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          jobDefinitionName: S.optional(S.String),
          jobDefinitionArn: S.optional(S.String),
          revision: S.optional(S.Number),
          status: S.optional(S.String),
          type: S.optional(S.String),
          schedulingPriority: S.optional(S.Number),
          parameters: S.optional(ParametersMap),
          retryStrategy: S.optional(RetryStrategy),
          containerProperties: S.optional(ContainerProperties),
          timeout: S.optional(JobTimeout),
          nodeProperties: S.optional(NodeProperties),
          tags: S.optional(TagrisTagsMap),
          propagateTags: S.optional(S.Boolean),
          platformCapabilities: S.optional(PlatformCapabilityList),
          ecsProperties: S.optional(EcsProperties),
          eksProperties: S.optional(EksProperties),
          containerOrchestrationType: S.optional(OrchestrationType),
          consumableResourceProperties: S.optional(ConsumableResourceProperties),
        }),
      ).annotate({ identifier: "JobDefinition" });
    case 2:
      return S.Array(JobDefinition);
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobDefinitions: S.optional(JobDefinitionList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeJobDefinitionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobQueues: S.optional(StringList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describejobqueues" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeJobQueuesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobQueueName: S.optional(S.String),
          jobQueueArn: S.optional(S.String),
          state: S.optional(JQState),
          schedulingPolicyArn: S.optional(S.String),
          status: S.optional(JQStatus),
          statusReason: S.optional(S.String),
          priority: S.optional(S.Number),
          computeEnvironmentOrder: S.optional(ComputeEnvironmentOrders),
          serviceEnvironmentOrder: S.optional(ServiceEnvironmentOrders),
          jobQueueType: S.optional(JobQueueType),
          tags: S.optional(TagrisTagsMap),
          jobStateTimeLimitActions: S.optional(JobStateTimeLimitActions),
        }),
      ).annotate({ identifier: "JobQueueDetail" });
    case 6:
      return S.Array(JobQueueDetail);
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobQueues: S.optional(JobQueueDetailList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeJobQueuesResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobs: S.optional(StringList) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describejobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeJobsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          attachmentId: S.optional(S.String),
          ipv6Address: S.optional(S.String),
          privateIpv4Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "NetworkInterface" });
    case 2:
      return S.Array(NetworkInterface);
    case 3:
      return S.suspend(() =>
        S.Struct({
          containerInstanceArn: S.optional(S.String),
          taskArn: S.optional(S.String),
          exitCode: S.optional(S.Number),
          reason: S.optional(S.String),
          logStreamName: S.optional(S.String),
          networkInterfaces: S.optional(NetworkInterfaceList),
        }),
      ).annotate({ identifier: "AttemptContainerDetail" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          exitCode: S.optional(S.Number),
          name: S.optional(S.String),
          reason: S.optional(S.String),
          logStreamName: S.optional(S.String),
          networkInterfaces: S.optional(NetworkInterfaceList),
        }),
      ).annotate({
        identifier: "AttemptTaskContainerDetails",
      });
    case 5:
      return S.Array(AttemptTaskContainerDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          containerInstanceArn: S.optional(S.String),
          taskArn: S.optional(S.String),
          containers: S.optional(ListAttemptTaskContainerDetails),
        }),
      ).annotate({ identifier: "AttemptEcsTaskDetails" });
    case 7:
      return S.Array(AttemptEcsTaskDetails);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          container: S.optional(AttemptContainerDetail),
          startedAt: S.optional(S.Number),
          stoppedAt: S.optional(S.Number),
          statusReason: S.optional(S.String),
          taskProperties: S.optional(ListAttemptEcsTaskDetails),
        }),
      ).annotate({ identifier: "AttemptDetail" });
    case 1:
      return S.Array(AttemptDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({ jobId: S.optional(S.String), type: S.optional(ArrayJobDependency) }),
      ).annotate({ identifier: "JobDependency" });
    case 3:
      return S.Array(JobDependency);
    case 4:
      return S.suspend(() =>
        S.Struct({
          image: S.optional(S.String),
          vcpus: S.optional(S.Number),
          memory: S.optional(S.Number),
          command: S.optional(StringList),
          jobRoleArn: S.optional(S.String),
          executionRoleArn: S.optional(S.String),
          volumes: S.optional(Volumes),
          environment: S.optional(EnvironmentVariables),
          mountPoints: S.optional(MountPoints),
          readonlyRootFilesystem: S.optional(S.Boolean),
          ulimits: S.optional(Ulimits),
          privileged: S.optional(S.Boolean),
          user: S.optional(S.String),
          exitCode: S.optional(S.Number),
          reason: S.optional(S.String),
          containerInstanceArn: S.optional(S.String),
          taskArn: S.optional(S.String),
          logStreamName: S.optional(S.String),
          instanceType: S.optional(S.String),
          networkInterfaces: S.optional(NetworkInterfaceList),
          resourceRequirements: S.optional(ResourceRequirements),
          linuxParameters: S.optional(LinuxParameters),
          logConfiguration: S.optional(LogConfiguration),
          secrets: S.optional(SecretList),
          networkConfiguration: S.optional(NetworkConfiguration),
          fargatePlatformConfiguration: S.optional(FargatePlatformConfiguration),
          ephemeralStorage: S.optional(EphemeralStorage),
          runtimePlatform: S.optional(RuntimePlatform),
          repositoryCredentials: S.optional(RepositoryCredentials),
          enableExecuteCommand: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ContainerDetail" });
    case 5:
      return S.suspend(() =>
        S.Struct({ nodeIndex: S.optional(S.Number), isMainNode: S.optional(S.Boolean) }),
      ).annotate({ identifier: "NodeDetails" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          statusSummary: S.optional(ArrayJobStatusSummary),
          statusSummaryLastUpdatedAt: S.optional(S.Number),
          size: S.optional(S.Number),
          index: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ArrayPropertiesDetail" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          image: S.optional(S.String),
          imagePullPolicy: S.optional(S.String),
          command: S.optional(StringList),
          args: S.optional(StringList),
          env: S.optional(EksContainerEnvironmentVariables),
          resources: S.optional(EksContainerResourceRequirements),
          exitCode: S.optional(S.Number),
          reason: S.optional(S.String),
          volumeMounts: S.optional(EksContainerVolumeMounts),
          securityContext: S.optional(EksContainerSecurityContext),
        }),
      ).annotate({ identifier: "EksContainerDetail" });
    case 1:
      return S.Array(EksContainerDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({
          serviceAccountName: S.optional(S.String),
          hostNetwork: S.optional(S.Boolean),
          dnsPolicy: S.optional(S.String),
          imagePullSecrets: S.optional(ImagePullSecrets),
          containers: S.optional(EksContainerDetails),
          initContainers: S.optional(EksContainerDetails),
          volumes: S.optional(EksVolumes),
          podName: S.optional(S.String),
          nodeName: S.optional(S.String),
          metadata: S.optional(EksMetadata),
          shareProcessNamespace: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EksPodPropertiesDetail" });
    case 3:
      return S.suspend(() =>
        S.Struct({ podProperties: S.optional(EksPodPropertiesDetail) }),
      ).annotate({ identifier: "EksPropertiesDetail" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          containerID: S.optional(S.String),
          exitCode: S.optional(S.Number),
          reason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EksAttemptContainerDetail",
      });
    case 5:
      return S.Array(EksAttemptContainerDetail);
    case 6:
      return S.suspend(() =>
        S.Struct({
          containers: S.optional(EksAttemptContainerDetails),
          initContainers: S.optional(EksAttemptContainerDetails),
          eksClusterArn: S.optional(S.String),
          podName: S.optional(S.String),
          podNamespace: S.optional(S.String),
          nodeName: S.optional(S.String),
          startedAt: S.optional(S.Number),
          stoppedAt: S.optional(S.Number),
          statusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "EksAttemptDetail" });
    case 7:
      return S.Array(EksAttemptDetail);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          command: S.optional(StringList),
          dependsOn: S.optional(TaskContainerDependencyList),
          environment: S.optional(EnvironmentVariables),
          essential: S.optional(S.Boolean),
          firelensConfiguration: S.optional(FirelensConfiguration),
          image: S.optional(S.String),
          linuxParameters: S.optional(LinuxParameters),
          logConfiguration: S.optional(LogConfiguration),
          mountPoints: S.optional(MountPoints),
          name: S.optional(S.String),
          privileged: S.optional(S.Boolean),
          readonlyRootFilesystem: S.optional(S.Boolean),
          repositoryCredentials: S.optional(RepositoryCredentials),
          resourceRequirements: S.optional(ResourceRequirements),
          secrets: S.optional(SecretList),
          ulimits: S.optional(Ulimits),
          user: S.optional(S.String),
          startTimeout: S.optional(S.Number),
          stopTimeout: S.optional(S.Number),
          exitCode: S.optional(S.Number),
          reason: S.optional(S.String),
          logStreamName: S.optional(S.String),
          networkInterfaces: S.optional(NetworkInterfaceList),
        }),
      ).annotate({ identifier: "TaskContainerDetails" });
    case 1:
      return S.Array(TaskContainerDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          containers: S.optional(ListTaskContainerDetails),
          containerInstanceArn: S.optional(S.String),
          taskArn: S.optional(S.String),
          ephemeralStorage: S.optional(EphemeralStorage),
          executionRoleArn: S.optional(S.String),
          platformVersion: S.optional(S.String),
          ipcMode: S.optional(S.String),
          taskRoleArn: S.optional(S.String),
          pidMode: S.optional(S.String),
          networkConfiguration: S.optional(NetworkConfiguration),
          runtimePlatform: S.optional(RuntimePlatform),
          volumes: S.optional(Volumes),
          enableExecuteCommand: S.optional(S.Boolean),
          networkMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "EcsTaskDetails" });
    case 3:
      return S.Array(EcsTaskDetails);
    case 4:
      return S.suspend(() => S.Struct({ taskProperties: S.optional(ListEcsTaskDetails) })).annotate(
        { identifier: "EcsPropertiesDetail" },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobName: S.optional(S.String),
          jobId: S.optional(S.String),
          jobQueue: S.optional(S.String),
          status: S.optional(JobStatus),
          shareIdentifier: S.optional(S.String),
          schedulingPriority: S.optional(S.Number),
          attempts: S.optional(AttemptDetails),
          statusReason: S.optional(S.String),
          createdAt: S.optional(S.Number),
          retryStrategy: S.optional(RetryStrategy),
          startedAt: S.optional(S.Number),
          stoppedAt: S.optional(S.Number),
          dependsOn: S.optional(JobDependencyList),
          jobDefinition: S.optional(S.String),
          parameters: S.optional(ParametersMap),
          container: S.optional(ContainerDetail),
          nodeDetails: S.optional(NodeDetails),
          nodeProperties: S.optional(NodeProperties),
          arrayProperties: S.optional(ArrayPropertiesDetail),
          timeout: S.optional(JobTimeout),
          tags: S.optional(TagrisTagsMap),
          propagateTags: S.optional(S.Boolean),
          platformCapabilities: S.optional(PlatformCapabilityList),
          eksProperties: S.optional(EksPropertiesDetail),
          eksAttempts: S.optional(EksAttemptDetails),
          ecsProperties: S.optional(EcsPropertiesDetail),
          isCancelled: S.optional(S.Boolean),
          isTerminated: S.optional(S.Boolean),
          consumableResourceProperties: S.optional(ConsumableResourceProperties),
        }),
      ).annotate({ identifier: "JobDetail" });
    case 6:
      return S.Array(JobDetail);
    case 7:
      return S.suspend(() => S.Struct({ jobs: S.optional(JobDetailList) }).pipe(ns)).annotate({
        identifier: "DescribeJobsResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ quotaShareArn: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describequotashare" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeQuotaShareRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          quotaShareName: S.optional(S.String),
          quotaShareArn: S.optional(S.String),
          jobQueueArn: S.optional(S.String),
          capacityLimits: S.optional(QuotaShareCapacityLimits),
          resourceSharingConfiguration: S.optional(QuotaShareResourceSharingConfiguration),
          preemptionConfiguration: S.optional(QuotaSharePreemptionConfiguration),
          state: S.optional(QuotaShareState),
          status: S.optional(QuotaShareStatus),
          tags: S.optional(TagrisTagsMap),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeQuotaShareResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arns: S.optional(StringList) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describeschedulingpolicies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSchedulingPoliciesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.optional(S.String),
          quotaSharePolicy: S.optional(QuotaSharePolicy),
          fairsharePolicy: S.optional(FairsharePolicy),
          tags: S.optional(TagrisTagsMap),
        }),
      ).annotate({ identifier: "SchedulingPolicyDetail" });
    case 4:
      return S.Array(SchedulingPolicyDetail);
    case 5:
      return S.suspend(() =>
        S.Struct({ schedulingPolicies: S.optional(SchedulingPolicyDetailList) }).pipe(ns),
      ).annotate({
        identifier: "DescribeSchedulingPoliciesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          serviceEnvironments: S.optional(StringList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describeserviceenvironments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeServiceEnvironmentsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceEnvironmentName: S.optional(S.String),
          serviceEnvironmentArn: S.optional(S.String),
          serviceEnvironmentType: S.optional(ServiceEnvironmentType),
          state: S.optional(ServiceEnvironmentState),
          status: S.optional(ServiceEnvironmentStatus),
          capacityLimits: S.optional(CapacityLimits),
          tags: S.optional(TagrisTagsMap),
        }),
      ).annotate({ identifier: "ServiceEnvironmentDetail" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ServiceEnvironmentDetail);
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceEnvironments: S.optional(ServiceEnvironmentDetailList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeServiceEnvironmentsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobId: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/describeservicejob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeServiceJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(ServiceResourceIdName), value: S.optional(S.String) }),
      ).annotate({ identifier: "ServiceResourceId" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceResourceId: S.optional(ServiceResourceId),
          startedAt: S.optional(S.Number),
          stoppedAt: S.optional(S.Number),
          statusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceJobAttemptDetail" });
    case 5:
      return S.Array(ServiceJobAttemptDetail);
    case 6:
      return S.suspend(() =>
        S.Struct({ capacityUnit: S.optional(S.String), quantity: S.optional(S.Number) }),
      ).annotate({
        identifier: "ServiceJobCapacityUsageDetail",
      });
    case 7:
      return S.Array(ServiceJobCapacityUsageDetail);
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ serviceResourceId: S.optional(ServiceResourceId) }),
      ).annotate({ identifier: "LatestServiceJobAttempt" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(ServiceJobRetryAction),
          onStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceJobEvaluateOnExit" });
    case 2:
      return S.Array(ServiceJobEvaluateOnExit);
    case 3:
      return S.suspend(() =>
        S.Struct({
          attempts: S.optional(S.Number),
          evaluateOnExit: S.optional(ServiceJobEvaluateOnExitList),
        }),
      ).annotate({ identifier: "ServiceJobRetryStrategy" });
    case 4:
      return S.suspend(() =>
        S.Struct({ preemptionRetriesBeforeTermination: S.optional(S.Number) }),
      ).annotate({
        identifier: "ServiceJobPreemptionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          serviceResourceId: S.optional(ServiceResourceId),
          startedAt: S.optional(S.Number),
          stoppedAt: S.optional(S.Number),
          statusReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceJobPreemptedAttempt",
      });
    case 6:
      return S.Array(ServiceJobPreemptedAttempt);
    case 7:
      return S.suspend(() =>
        S.Struct({
          preemptedAttemptCount: S.optional(S.Number),
          recentPreemptedAttempts: S.optional(ServiceJobRecentPreemptedAttemptList),
        }),
      ).annotate({
        identifier: "ServiceJobPreemptionSummary",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          attempts: S.optional(ServiceJobAttemptDetails),
          capacityUsage: S.optional(ServiceJobCapacityUsageDetailList),
          createdAt: S.optional(S.Number),
          isTerminated: S.optional(S.Boolean),
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          jobName: S.optional(S.String),
          jobQueue: S.optional(S.String),
          latestAttempt: S.optional(LatestServiceJobAttempt),
          retryStrategy: S.optional(ServiceJobRetryStrategy),
          scheduledAt: S.optional(S.Number),
          schedulingPriority: S.optional(S.Number),
          serviceRequestPayload: S.optional(S.String),
          serviceJobType: S.optional(ServiceJobType),
          shareIdentifier: S.optional(S.String),
          quotaShareName: S.optional(S.String),
          preemptionConfiguration: S.optional(ServiceJobPreemptionConfiguration),
          preemptionSummary: S.optional(ServiceJobPreemptionSummary),
          startedAt: S.optional(S.Number),
          status: S.optional(ServiceJobStatus),
          statusReason: S.optional(S.String),
          stoppedAt: S.optional(S.Number),
          tags: S.optional(TagrisTagsMap),
          timeoutConfig: S.optional(ServiceJobTimeout),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeServiceJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobQueue: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/getjobqueuesnapshot" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetJobQueueSnapshotRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobArn: S.optional(S.String), earliestTimeAtPosition: S.optional(S.Number) }),
      ).annotate({ identifier: "FrontOfQueueJobSummary" });
    case 3:
      return S.Array(FrontOfQueueJobSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobs: S.optional(FrontOfQueueJobSummaryList),
          lastUpdatedAt: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FrontOfQueueDetail" });
    case 5:
      return S.suspend(() =>
        S.Struct({ jobArn: S.optional(S.String), earliestTimeAtPosition: S.optional(S.Number) }),
      ).annotate({
        identifier: "FrontOfQuotaShareJobSummary",
      });
    case 6:
      return S.Array(FrontOfQuotaShareJobSummary);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ FrontOfQuotaShareJobSummaryList.pipe(S.optional));
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          quotaShares: S.optional(FrontOfQuotaSharesJobSummaryMap),
          lastUpdatedAt: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FrontOfQuotaSharesDetail" });
    case 1:
      return S.Array(QueueSnapshotCapacityUsage);
    case 2:
      return S.suspend(() =>
        S.Struct({ capacityUnit: S.optional(S.String), quantity: S.optional(S.Number) }),
      ).annotate({ identifier: "FairshareCapacityUsage" });
    case 3:
      return S.Array(FairshareCapacityUsage);
    case 4:
      return S.suspend(() =>
        S.Struct({
          shareIdentifier: S.optional(S.String),
          capacityUsage: S.optional(FairshareCapacityUsageList),
        }),
      ).annotate({
        identifier: "FairshareCapacityUtilization",
      });
    case 5:
      return S.Array(FairshareCapacityUtilization);
    case 6:
      return S.suspend(() =>
        S.Struct({
          activeShareCount: S.optional(S.Number),
          topCapacityUtilization: S.optional(FairshareCapacityUtilizationList),
        }),
      ).annotate({
        identifier: "FairshareUtilizationDetail",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          quotaShareName: S.optional(S.String),
          capacityUsage: S.optional(QuotaShareCapacityUsageList),
        }),
      ).annotate({
        identifier: "QuotaShareCapacityUtilization",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(QuotaShareCapacityUtilization);
    case 1:
      return S.suspend(() =>
        S.Struct({ topCapacityUtilization: S.optional(QuotaShareCapacityUtilizationList) }),
      ).annotate({
        identifier: "QuotaShareUtilizationDetail",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          totalCapacityUsage: S.optional(QueueSnapshotCapacityUsageList),
          fairshareUtilization: S.optional(FairshareUtilizationDetail),
          quotaShareUtilization: S.optional(QuotaShareUtilizationDetail),
          lastUpdatedAt: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "QueueSnapshotUtilizationDetail",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          frontOfQueue: S.optional(FrontOfQueueDetail),
          frontOfQuotaShares: S.optional(FrontOfQuotaSharesDetail),
          queueUtilization: S.optional(QueueSnapshotUtilizationDetail),
        }).pipe(ns),
      ).annotate({
        identifier: "GetJobQueueSnapshotResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), values: S.optional(StringList) }),
      ).annotate({ identifier: "KeyValuesPair" });
    case 5:
      return S.Array(KeyValuesPair);
    case 6:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(ListConsumableResourcesFilterList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/listconsumableresources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConsumableResourcesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          consumableResourceArn: S.optional(S.String),
          consumableResourceName: S.optional(S.String),
          totalQuantity: S.optional(S.Number),
          inUseQuantity: S.optional(S.Number),
          resourceType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConsumableResourceSummary",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ConsumableResourceSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          consumableResources: S.optional(ConsumableResourceSummaryList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListConsumableResourcesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobQueue: S.optional(S.String),
          arrayJobId: S.optional(S.String),
          multiNodeJobId: S.optional(S.String),
          jobStatus: S.optional(JobStatus),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(ListJobsFilterList),
        }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/v1/listjobs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListJobsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ exitCode: S.optional(S.Number), reason: S.optional(S.String) }),
      ).annotate({ identifier: "ContainerSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          size: S.optional(S.Number),
          index: S.optional(S.Number),
          statusSummary: S.optional(ArrayJobStatusSummary),
          statusSummaryLastUpdatedAt: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ArrayPropertiesSummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          isMainNode: S.optional(S.Boolean),
          numNodes: S.optional(S.Number),
          nodeIndex: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NodePropertiesSummary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          jobName: S.optional(S.String),
          capacityUsage: S.optional(JobCapacityUsageSummaryList),
          createdAt: S.optional(S.Number),
          scheduledAt: S.optional(S.Number),
          shareIdentifier: S.optional(S.String),
          status: S.optional(JobStatus),
          statusReason: S.optional(S.String),
          startedAt: S.optional(S.Number),
          stoppedAt: S.optional(S.Number),
          container: S.optional(ContainerSummary),
          arrayProperties: S.optional(ArrayPropertiesSummary),
          nodeProperties: S.optional(NodePropertiesSummary),
          jobDefinition: S.optional(S.String),
          isCancelled: S.optional(S.Boolean),
          isTerminated: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "JobSummary" });
    case 7:
      return S.Array(JobSummary);
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobSummaryList: S.optional(JobSummaryList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListJobsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          consumableResource: S.optional(S.String),
          filters: S.optional(ListJobsByConsumableResourceFilterList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/listjobsbyconsumableresource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListJobsByConsumableResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobQueueArn: S.optional(S.String),
          jobName: S.optional(S.String),
          jobDefinitionArn: S.optional(S.String),
          shareIdentifier: S.optional(S.String),
          jobStatus: S.optional(S.String),
          quantity: S.optional(S.Number),
          statusReason: S.optional(S.String),
          startedAt: S.optional(S.Number),
          createdAt: S.optional(S.Number),
          consumableResourceProperties: S.optional(ConsumableResourceProperties),
        }),
      ).annotate({
        identifier: "ListJobsByConsumableResourceSummary",
      });
    case 3:
      return S.Array(ListJobsByConsumableResourceSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobs: S.optional(ListJobsByConsumableResourceSummaryList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListJobsByConsumableResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobQueue: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/listquotashares" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListQuotaSharesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          quotaShareName: S.optional(S.String),
          quotaShareArn: S.optional(S.String),
          jobQueueArn: S.optional(S.String),
          capacityLimits: S.optional(QuotaShareCapacityLimits),
          resourceSharingConfiguration: S.optional(QuotaShareResourceSharingConfiguration),
          preemptionConfiguration: S.optional(QuotaSharePreemptionConfiguration),
          state: S.optional(QuotaShareState),
          status: S.optional(QuotaShareStatus),
        }),
      ).annotate({ identifier: "QuotaShareDetail" });
    case 7:
      return S.Array(QuotaShareDetail);
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ quotaShares: S.optional(QuotaShareList), nextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListQuotaSharesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/listschedulingpolicies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSchedulingPoliciesRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ arn: S.optional(S.String) })).annotate({
        identifier: "SchedulingPolicyListingDetail",
      });
    case 3:
      return S.Array(SchedulingPolicyListingDetail);
    case 4:
      return S.suspend(() =>
        S.Struct({
          schedulingPolicies: S.optional(SchedulingPolicyListingDetailList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSchedulingPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobQueue: S.optional(S.String),
          jobStatus: S.optional(ServiceJobStatus),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(ListJobsFilterList),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/listservicejobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListServiceJobsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          latestAttempt: S.optional(LatestServiceJobAttempt),
          capacityUsage: S.optional(ServiceJobCapacityUsageSummaryList),
          createdAt: S.optional(S.Number),
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          jobName: S.optional(S.String),
          scheduledAt: S.optional(S.Number),
          serviceJobType: S.optional(ServiceJobType),
          shareIdentifier: S.optional(S.String),
          quotaShareName: S.optional(S.String),
          status: S.optional(ServiceJobStatus),
          statusReason: S.optional(S.String),
          startedAt: S.optional(S.Number),
          stoppedAt: S.optional(S.Number),
          isTerminated: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ServiceJobSummary" });
    case 7:
      return S.Array(ServiceJobSummary);
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobSummaryList: S.optional(ServiceJobSummaryList),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListServiceJobsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ tags: S.optional(TagrisTagsMap) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobDefinitionName: S.optional(S.String),
          type: S.optional(JobDefinitionType),
          parameters: S.optional(ParametersMap),
          schedulingPriority: S.optional(S.Number),
          containerProperties: S.optional(ContainerProperties),
          nodeProperties: S.optional(NodeProperties),
          retryStrategy: S.optional(RetryStrategy),
          propagateTags: S.optional(S.Boolean),
          timeout: S.optional(JobTimeout),
          tags: S.optional(TagrisTagsMap),
          platformCapabilities: S.optional(PlatformCapabilityList),
          eksProperties: S.optional(EksProperties),
          ecsProperties: S.optional(EcsProperties),
          consumableResourceProperties: S.optional(ConsumableResourceProperties),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/registerjobdefinition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterJobDefinitionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobDefinitionName: S.optional(S.String),
          jobDefinitionArn: S.optional(S.String),
          revision: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "RegisterJobDefinitionResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ size: S.optional(S.Number) })).annotate({
        identifier: "ArrayProperties",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          vcpus: S.optional(S.Number),
          memory: S.optional(S.Number),
          command: S.optional(StringList),
          instanceType: S.optional(S.String),
          environment: S.optional(EnvironmentVariables),
          resourceRequirements: S.optional(ResourceRequirements),
        }),
      ).annotate({ identifier: "ContainerOverrides" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          command: S.optional(StringList),
          environment: S.optional(EnvironmentVariables),
          name: S.optional(S.String),
          resourceRequirements: S.optional(ResourceRequirements),
        }),
      ).annotate({ identifier: "TaskContainerOverrides" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(TaskContainerOverrides);
    case 1:
      return S.suspend(() =>
        S.Struct({ containers: S.optional(ListTaskContainerOverrides) }),
      ).annotate({ identifier: "TaskPropertiesOverride" });
    case 2:
      return S.Array(TaskPropertiesOverride);
    case 3:
      return S.suspend(() =>
        S.Struct({ taskProperties: S.optional(ListTaskPropertiesOverride) }),
      ).annotate({ identifier: "EcsPropertiesOverride" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          image: S.optional(S.String),
          command: S.optional(StringList),
          args: S.optional(StringList),
          env: S.optional(EksContainerEnvironmentVariables),
          resources: S.optional(EksContainerResourceRequirements),
        }),
      ).annotate({ identifier: "EksContainerOverride" });
    case 5:
      return S.Array(EksContainerOverride);
    case 6:
      return S.suspend(() =>
        S.Struct({
          containers: S.optional(EksContainerOverrideList),
          initContainers: S.optional(EksContainerOverrideList),
          metadata: S.optional(EksMetadata),
        }),
      ).annotate({ identifier: "EksPodPropertiesOverride" });
    case 7:
      return S.suspend(() =>
        S.Struct({ podProperties: S.optional(EksPodPropertiesOverride) }),
      ).annotate({ identifier: "EksPropertiesOverride" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          targetNodes: S.optional(S.String),
          containerOverrides: S.optional(ContainerOverrides),
          ecsPropertiesOverride: S.optional(EcsPropertiesOverride),
          instanceTypes: S.optional(StringList),
          eksPropertiesOverride: S.optional(EksPropertiesOverride),
          consumableResourcePropertiesOverride: S.optional(ConsumableResourceProperties),
        }),
      ).annotate({ identifier: "NodePropertyOverride" });
    case 1:
      return S.Array(NodePropertyOverride);
    case 2:
      return S.suspend(() =>
        S.Struct({
          numNodes: S.optional(S.Number),
          nodePropertyOverrides: S.optional(NodePropertyOverrides),
        }),
      ).annotate({ identifier: "NodeOverrides" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobName: S.optional(S.String),
          jobQueue: S.optional(S.String),
          shareIdentifier: S.optional(S.String),
          schedulingPriorityOverride: S.optional(S.Number),
          arrayProperties: S.optional(ArrayProperties),
          dependsOn: S.optional(JobDependencyList),
          jobDefinition: S.optional(S.String),
          parameters: S.optional(ParametersMap),
          containerOverrides: S.optional(ContainerOverrides),
          nodeOverrides: S.optional(NodeOverrides),
          retryStrategy: S.optional(RetryStrategy),
          propagateTags: S.optional(S.Boolean),
          timeout: S.optional(JobTimeout),
          tags: S.optional(TagrisTagsMap),
          eksPropertiesOverride: S.optional(EksPropertiesOverride),
          ecsPropertiesOverride: S.optional(EcsPropertiesOverride),
          consumableResourcePropertiesOverride: S.optional(ConsumableResourceProperties),
        }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/v1/submitjob" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SubmitJobRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobName: S.optional(S.String),
          jobId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "SubmitJobResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobName: S.optional(S.String),
          jobQueue: S.optional(S.String),
          retryStrategy: S.optional(ServiceJobRetryStrategy),
          schedulingPriority: S.optional(S.Number),
          serviceRequestPayload: S.optional(S.String),
          serviceJobType: S.optional(ServiceJobType),
          shareIdentifier: S.optional(S.String),
          quotaShareName: S.optional(S.String),
          preemptionConfiguration: S.optional(ServiceJobPreemptionConfiguration),
          timeoutConfig: S.optional(ServiceJobTimeout),
          tags: S.optional(TagrisTagsMap),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/submitservicejob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SubmitServiceJobRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: S.optional(TagrisTagsMap),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ jobId: S.optional(S.String), reason: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/terminatejob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TerminateJobRequest" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobs: S.optional(StringList), reason: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/terminatejobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TerminateJobsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobId: S.optional(S.String), reason: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/terminateservicejob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TerminateServiceJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobs: S.optional(StringList), reason: S.optional(S.String) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/terminateservicejobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TerminateServiceJobsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          job: S.optional(S.String),
          code: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TerminateServiceJobsErrorDetail",
      });
    case 4:
      return S.Array(TerminateServiceJobsErrorDetail);
    case 5:
      return S.suspend(() =>
        S.Struct({
          successful: S.optional(StringList),
          errors: S.optional(TerminateServiceJobsErrorDetailList),
        }).pipe(ns),
      ).annotate({
        identifier: "TerminateServiceJobsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: S.optional(TagKeysList).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ec2InstanceProfileArn: S.optional(S.String),
          networkConfiguration: S.optional(ManagedInstancesNetworkConfiguration),
          instanceRequirements: S.optional(InstanceRequirementsRequest),
          storageConfiguration: S.optional(ManagedInstancesStorageConfiguration),
          monitoring: S.optional(S.String),
          capacityReservations: S.optional(CapacityReservationRequest),
          instanceMetadataTagsPropagation: S.optional(S.Boolean),
          localStorageConfiguration: S.optional(ManagedInstancesLocalStorageConfiguration),
        }),
      ).annotate({
        identifier: "InstanceLaunchTemplateUpdate",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          propagateTags: S.optional(S.String),
          infrastructureRoleArn: S.optional(S.String),
          instanceLaunchTemplate: S.optional(InstanceLaunchTemplateUpdate),
          infrastructureOptimization: S.optional(InfrastructureOptimization),
        }),
      ).annotate({
        identifier: "UpdateManagedInstancesProviderConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          minvCpus: S.optional(S.Number),
          maxvCpus: S.optional(S.Number),
          desiredvCpus: S.optional(S.Number),
          subnets: S.optional(StringList),
          securityGroupIds: S.optional(StringList),
          allocationStrategy: S.optional(CRUpdateAllocationStrategy),
          instanceTypes: S.optional(StringList),
          ec2KeyPair: S.optional(S.String),
          instanceRole: S.optional(S.String),
          tags: S.optional(TagsMap),
          placementGroup: S.optional(S.String),
          bidPercentage: S.optional(S.Number),
          launchTemplate: S.optional(LaunchTemplateSpecification),
          ec2Configuration: S.optional(Ec2ConfigurationList),
          updateToLatestImageVersion: S.optional(S.Boolean),
          type: S.optional(CRType),
          imageId: S.optional(S.String),
          scalingPolicy: S.optional(ComputeScalingPolicy),
          managedInstancesProvider: S.optional(UpdateManagedInstancesProviderConfiguration),
          capacityTags: S.optional(TagrisTagsMap),
        }),
      ).annotate({ identifier: "ComputeResourceUpdate" });
    case 2:
      return S.suspend(() => S.Struct({ accessEntry: S.optional(EksAccessEntry) })).annotate({
        identifier: "EksConfigurationUpdate",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          computeEnvironment: S.optional(S.String),
          state: S.optional(CEState),
          unmanagedvCpus: S.optional(S.Number),
          computeResources: S.optional(ComputeResourceUpdate),
          serviceRole: S.optional(S.String),
          updatePolicy: S.optional(UpdatePolicy),
          context: S.optional(S.String),
          ecsSettings: S.optional(EcsSettings),
          eksConfiguration: S.optional(EksConfigurationUpdate),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/updatecomputeenvironment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateComputeEnvironmentRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          consumableResource: S.optional(S.String),
          operation: S.optional(S.String),
          quantity: S.optional(S.Number),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/updateconsumableresource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConsumableResourceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          consumableResourceName: S.optional(S.String),
          consumableResourceArn: S.optional(S.String),
          totalQuantity: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateConsumableResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobQueue: S.optional(S.String),
          state: S.optional(JQState),
          schedulingPolicyArn: S.optional(S.String),
          priority: S.optional(S.Number),
          computeEnvironmentOrder: S.optional(ComputeEnvironmentOrders),
          serviceEnvironmentOrder: S.optional(ServiceEnvironmentOrders),
          jobStateTimeLimitActions: S.optional(JobStateTimeLimitActions),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/updatejobqueue" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateJobQueueRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          quotaShareArn: S.optional(S.String),
          capacityLimits: S.optional(QuotaShareCapacityLimits),
          resourceSharingConfiguration: S.optional(QuotaShareResourceSharingConfiguration),
          preemptionConfiguration: S.optional(QuotaSharePreemptionConfiguration),
          state: S.optional(QuotaShareState),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/updatequotashare" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateQuotaShareRequest" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          quotaSharePolicy: S.optional(QuotaSharePolicy),
          fairsharePolicy: S.optional(FairsharePolicy),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/updateschedulingpolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSchedulingPolicyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          serviceEnvironment: S.optional(S.String),
          state: S.optional(ServiceEnvironmentState),
          capacityLimits: S.optional(CapacityLimits),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/updateserviceenvironment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateServiceEnvironmentRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobId: S.optional(S.String), schedulingPriority: S.optional(S.Number) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v1/updateservicejob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateServiceJobRequest" });
  }
}
