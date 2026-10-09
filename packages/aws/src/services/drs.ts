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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "drs",
  serviceShapeName: "ElasticDisasterRecoveryService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "drs" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-02-26");
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
              `https://drs-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://drs-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://drs.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://drs.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      code: /*@__PURE__*/ S.optional(S.String),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      code: /*@__PURE__*/ S.optional(S.String),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      code: /*@__PURE__*/ S.optional(S.String),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UninitializedAccountException
  extends /*@__PURE__*/ S.TaggedError<UninitializedAccountException>()(
    "UninitializedAccountException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      code: /*@__PURE__*/ S.optional(S.String),
      reason: /*@__PURE__*/ S.optional(S.String),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(227, __c28, 3)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type SourceNetworkID = string;
export type CfnStackName = string | redacted.Redacted<string>;
export interface AssociateSourceNetworkStackRequest {
  sourceNetworkID: string;
  cfnStackName: string | redacted.Redacted<string>;
}
export type JobID = string;
export type ARN = string;
export type JobType = string;
export type InitiatedBy = string;
export type ISO8601DatetimeString = string;
export type JobStatus = string;
export type SourceServerID = string;
export type RecoveryInstanceID = string;
export type LaunchStatus = string;
export type LaunchActionId = string;
export type SsmDocumentName = string;
export type LaunchActionType = string;
export type LaunchActionName = string;
export type LaunchActionOrder = number;
export type LaunchActionVersion = string;
export type LaunchActionParameterName = string;
export type LaunchActionParameterValue = string;
export type LaunchActionParameterType = string;
export interface LaunchActionParameter {
  value?: string;
  type?: string;
}
export type LaunchActionParameters = { [key: string]: LaunchActionParameter | undefined };
export type LaunchActionDescription = string;
export type LaunchActionCategory = string;
export interface LaunchAction {
  actionId?: string;
  actionCode?: string;
  type?: string;
  name?: string;
  active?: boolean;
  order?: number;
  actionVersion?: string;
  optional?: boolean;
  parameters?: { [key: string]: LaunchActionParameter | undefined };
  description?: string;
  category?: string;
}
export type LaunchActionRunId = string;
export type LaunchActionRunStatus = string;
export type FailureReason = string;
export interface LaunchActionRun {
  action?: LaunchAction;
  runId?: string;
  status?: string;
  failureReason?: string;
}
export type LaunchActionRuns = LaunchActionRun[];
export interface LaunchActionsStatus {
  ssmAgentDiscoveryDatetime?: string;
  runs?: LaunchActionRun[];
}
export interface ParticipatingServer {
  sourceServerID?: string;
  recoveryInstanceID?: string;
  launchStatus?: string;
  launchActionsStatus?: LaunchActionsStatus;
}
export type ParticipatingServers = ParticipatingServer[];
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
export type ParticipatingResourceID = { sourceNetworkID: string };
export interface ParticipatingResource {
  participatingResourceID?: ParticipatingResourceID;
  launchStatus?: string;
}
export type ParticipatingResources = ParticipatingResource[];
export interface Job {
  jobID: string;
  arn?: string;
  type?: string;
  initiatedBy?: string;
  creationDateTime?: string;
  endDateTime?: string;
  status?: string;
  participatingServers?: ParticipatingServer[];
  tags?: { [key: string]: string | undefined };
  participatingResources?: ParticipatingResource[];
}
export interface AssociateSourceNetworkStackResponse {
  job?: Job;
}
export type StrictDRSARN = string;
export interface CancelRecoveryPlanExecutionRequest {
  recoveryPlanExecutionArn: string;
}
export type RecoveryPlanExecutionMode = string;
export type RecoveryPlanExecutionStatus = string;
export interface ErrorDetail {
  message: string;
  code: string;
}
export interface RecoveryPlanExecution {
  recoveryPlanExecutionArn: string;
  recoveryPlanArn: string;
  mode: string;
  status: string;
  startedAt: string;
  completedAt?: string;
  errorDetail?: ErrorDetail;
  tags?: { [key: string]: string | undefined };
}
export interface CancelRecoveryPlanExecutionResponse {
  recoveryPlanExecution: RecoveryPlanExecution;
}
export type SourceServerARN = string;
export interface CreateExtendedSourceServerRequest {
  sourceServerArn: string;
  tags?: { [key: string]: string | undefined };
}
export type LastLaunchResult = string;
export type ISO8601DurationString = string;
export type BoundedString = string;
export type PositiveInteger = number;
export type VolumeStatus = string;
export interface DataReplicationInfoReplicatedDisk {
  deviceName?: string;
  totalStorageBytes?: number;
  replicatedStorageBytes?: number;
  rescannedStorageBytes?: number;
  backloggedStorageBytes?: number;
  volumeStatus?: string;
}
export type DataReplicationInfoReplicatedDisks = DataReplicationInfoReplicatedDisk[];
export type DataReplicationState = string;
export type DataReplicationInitiationStepName = string;
export type DataReplicationInitiationStepStatus = string;
export interface DataReplicationInitiationStep {
  name?: string;
  status?: string;
}
export type DataReplicationInitiationSteps = DataReplicationInitiationStep[];
export interface DataReplicationInitiation {
  startDateTime?: string;
  nextAttemptDateTime?: string;
  steps?: DataReplicationInitiationStep[];
}
export type DataReplicationErrorString = string;
export type LargeBoundedString = string;
export interface DataReplicationError {
  error?: string;
  rawError?: string;
}
export type AwsAvailabilityZone = string;
export type OutpostARN = string;
export interface DataReplicationInfo {
  lagDuration?: string;
  etaDateTime?: string;
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];
  dataReplicationState?: string;
  dataReplicationInitiation?: DataReplicationInitiation;
  dataReplicationError?: DataReplicationError;
  stagingAvailabilityZone?: string;
  stagingOutpostArn?: string;
}
export type LastLaunchType = string;
export interface LifeCycleLastLaunchInitiated {
  apiCallDateTime?: string;
  jobID?: string;
  type?: string;
}
export interface LifeCycleLastLaunch {
  initiated?: LifeCycleLastLaunchInitiated;
  status?: string;
}
export interface LifeCycle {
  addedToServiceDateTime?: string;
  firstByteDateTime?: string;
  elapsedReplicationDuration?: string;
  lastSeenByServiceDateTime?: string;
  lastLaunch?: LifeCycleLastLaunch;
}
export type EC2InstanceType = string;
export type EC2InstanceID = string;
export interface IdentificationHints {
  fqdn?: string;
  hostname?: string;
  vmWareUuid?: string;
  awsInstanceID?: string;
}
export type IPsList = string[];
export interface NetworkInterface {
  macAddress?: string;
  ips?: string[];
  isPrimary?: boolean;
}
export type NetworkInterfaces = NetworkInterface[];
export interface Disk {
  deviceName?: string;
  bytes?: number;
}
export type Disks = Disk[];
export interface CPU {
  cores?: number;
  modelName?: string;
}
export type Cpus = CPU[];
export interface OS {
  fullString?: string;
}
export type SourceServerArchitecture = string;
export interface SourceProperties {
  lastUpdatedDateTime?: string;
  recommendedInstanceType?: string;
  identificationHints?: IdentificationHints;
  networkInterfaces?: NetworkInterface[];
  disks?: Disk[];
  cpus?: CPU[];
  ramBytes?: number;
  os?: OS;
  supportsNitroInstances?: boolean;
  architecture?: string;
}
export type ExtensionStatus = string;
export type AccountID = string;
export interface StagingArea {
  status?: string;
  stagingAccountID?: string;
  stagingSourceServerArn?: string;
  errorMessage?: string;
}
export type AwsRegion = string;
export interface SourceCloudProperties {
  originAccountID?: string;
  originRegion?: string;
  originAvailabilityZone?: string;
  sourceOutpostArn?: string;
}
export type ReplicationDirection = string;
export type AgentVersion = string;
export interface SourceServer {
  sourceServerID?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
  recoveryInstanceId?: string;
  lastLaunchResult?: string;
  dataReplicationInfo?: DataReplicationInfo;
  lifeCycle?: LifeCycle;
  sourceProperties?: SourceProperties;
  stagingArea?: StagingArea;
  sourceCloudProperties?: SourceCloudProperties;
  replicationDirection?: string;
  reversedDirectionSourceServerArn?: string;
  sourceNetworkID?: string;
  agentVersion?: string;
}
export interface CreateExtendedSourceServerResponse {
  sourceServer?: SourceServer;
}
export type LaunchDisposition = string;
export type TargetInstanceTypeRightSizingMethod = string;
export interface Licensing {
  osByol?: boolean;
}
export type RecoveryMode = string;
export interface CreateLaunchConfigurationTemplateRequest {
  tags?: { [key: string]: string | undefined };
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  exportBucketArn?: string;
  postLaunchEnabled?: boolean;
  launchIntoSourceInstance?: boolean;
  recoveryMode?: string;
}
export type LaunchConfigurationTemplateID = string;
export interface LaunchConfigurationTemplate {
  launchConfigurationTemplateID?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  exportBucketArn?: string;
  postLaunchEnabled?: boolean;
  launchIntoSourceInstance?: boolean;
  recoveryMode?: string;
}
export interface CreateLaunchConfigurationTemplateResponse {
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}
export type RecoveryPlanName = string;
export type RecoveryPlanDescription = string;
export type ClientIdempotencyToken = string;
export interface CreateRecoveryPlanRequest {
  name: string;
  description?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export type RecoveryPlanStatus = string;
export interface RecoveryPlan {
  recoveryPlanArn: string;
  name: string;
  description?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateRecoveryPlanResponse {
  recoveryPlan: RecoveryPlan;
}
export type RecoveryPlanStepName = string;
export type RecoveryPlanStepOrder = number;
export type RecoveryPlanServerImpactLevel = string;
export interface RecoveryPlanServer {
  serverArn: string;
  impactLevel?: string;
}
export type RecoveryPlanServers = RecoveryPlanServer[];
export interface ServerStepConfiguration {
  servers: RecoveryPlanServer[];
}
export type WaitDurationMinutes = number;
export interface WaitStepConfiguration {
  waitDurationMinutes: number;
}
export type RecoveryPlanStepConfiguration =
  | { serverStepConfiguration: ServerStepConfiguration; waitStepConfiguration?: never }
  | { serverStepConfiguration?: never; waitStepConfiguration: WaitStepConfiguration };
export interface CreateRecoveryPlanStepRequest {
  recoveryPlanArn: string;
  stepName: string;
  stepOrder?: number;
  configuration: RecoveryPlanStepConfiguration;
  clientToken?: string;
}
export interface RecoveryPlanStep {
  recoveryPlanStepArn: string;
  stepOrder: number;
  stepName: string;
  configuration: RecoveryPlanStepConfiguration;
  createdAt: string;
  updatedAt: string;
}
export interface CreateRecoveryPlanStepResponse {
  recoveryPlanStep: RecoveryPlanStep;
}
export type SubnetID = string;
export type SecurityGroupID = string;
export type ReplicationServersSecurityGroupsIDs = string[];
export type ReplicationConfigurationDefaultLargeStagingDiskType = string;
export type ReplicationConfigurationEbsEncryption = string;
export type ReplicationConfigurationDataPlaneRouting = string;
export type PITPolicyRuleUnits = string;
export type StrictlyPositiveInteger = number;
export interface PITPolicyRule {
  ruleID?: number;
  units: string;
  interval: number;
  retentionDuration: number;
  enabled?: boolean;
}
export type PITPolicy = PITPolicyRule[];
export type InternetProtocol = string;
export interface CreateReplicationConfigurationTemplateRequest {
  stagingAreaSubnetId: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs: string[];
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  ebsEncryption: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags: { [key: string]: string | undefined };
  pitPolicy: PITPolicyRule[];
  tags?: { [key: string]: string | undefined };
  autoReplicateNewDisks?: boolean;
  internetProtocol?: string;
}
export type ReplicationConfigurationTemplateID = string;
export interface ReplicationConfigurationTemplate {
  replicationConfigurationTemplateID: string;
  arn?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: string[];
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
  pitPolicy?: PITPolicyRule[];
  autoReplicateNewDisks?: boolean;
  internetProtocol?: string;
}
export type VpcID = string;
export interface CreateSourceNetworkRequest {
  vpcID: string;
  originAccountID: string;
  originRegion: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateSourceNetworkResponse {
  sourceNetworkID?: string;
}
export interface DeleteJobRequest {
  jobID: string;
}
export interface DeleteJobResponse {}
export type LaunchActionResourceId = string;
export interface DeleteLaunchActionRequest {
  resourceId: string;
  actionId: string;
}
export interface DeleteLaunchActionResponse {}
export interface DeleteLaunchConfigurationTemplateRequest {
  launchConfigurationTemplateID: string;
}
export interface DeleteLaunchConfigurationTemplateResponse {}
export interface DeleteRecoveryInstanceRequest {
  recoveryInstanceID: string;
}
export interface DeleteRecoveryInstanceResponse {}
export interface DeleteRecoveryPlanRequest {
  recoveryPlanArn: string;
}
export interface DeleteRecoveryPlanResponse {
  recoveryPlanArn: string;
}
export interface DeleteRecoveryPlanExecutionRequest {
  recoveryPlanExecutionArn: string;
}
export interface DeleteRecoveryPlanExecutionResponse {
  recoveryPlanExecutionArn: string;
}
export interface DeleteRecoveryPlanStepRequest {
  recoveryPlanStepArn: string;
}
export interface DeleteRecoveryPlanStepResponse {
  recoveryPlanStepArn: string;
}
export interface DeleteReplicationConfigurationTemplateRequest {
  replicationConfigurationTemplateID: string;
}
export interface DeleteReplicationConfigurationTemplateResponse {}
export interface DeleteSourceNetworkRequest {
  sourceNetworkID: string;
}
export interface DeleteSourceNetworkResponse {}
export interface DeleteSourceServerRequest {
  sourceServerID: string;
}
export interface DeleteSourceServerResponse {}
export type PaginationToken = string;
export interface DescribeJobLogItemsRequest {
  jobID: string;
  maxResults?: number;
  nextToken?: string;
}
export type JobLogEvent = string;
export type EbsSnapshot = string;
export type ConversionMap = { [key: string]: string | undefined };
export type VolumeToConversionMap = {
  [key: string]: { [key: string]: string | undefined } | undefined;
};
export type VolumeToSizeMap = { [key: string]: number | undefined };
export type ProductCodeId = string;
export type ProductCodeMode = string;
export interface ProductCode {
  productCodeId?: string;
  productCodeMode?: string;
}
export type ProductCodes = ProductCode[];
export type VolumeToProductCodes = { [key: string]: ProductCode[] | undefined };
export interface ConversionProperties {
  volumeToConversionMap?: { [key: string]: { [key: string]: string | undefined } | undefined };
  rootVolumeName?: string;
  forceUefi?: boolean;
  dataTimestamp?: string;
  volumeToVolumeSize?: { [key: string]: number | undefined };
  volumeToProductCodes?: { [key: string]: ProductCode[] | undefined };
}
export interface SourceNetworkData {
  sourceNetworkID?: string;
  sourceVpc?: string;
  targetVpc?: string;
  stackName?: string;
}
export type EventResourceData = { sourceNetworkData: SourceNetworkData };
export type JobEventAttemptCount = number;
export interface JobLogEventData {
  sourceServerID?: string;
  conversionServerID?: string;
  targetInstanceID?: string;
  rawError?: string;
  conversionProperties?: ConversionProperties;
  eventResourceData?: EventResourceData;
  attemptCount?: number;
  maxAttemptsCount?: number;
}
export interface JobLog {
  logDateTime?: string;
  event?: string;
  eventData?: JobLogEventData;
}
export type JobLogs = JobLog[];
export interface DescribeJobLogItemsResponse {
  items?: JobLog[];
  nextToken?: string;
}
export type DescribeJobsRequestFiltersJobIDs = string[];
export interface DescribeJobsRequestFilters {
  jobIDs?: string[];
  fromDate?: string;
  toDate?: string;
}
export interface DescribeJobsRequest {
  filters?: DescribeJobsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type JobsList = Job[];
export interface DescribeJobsResponse {
  items?: Job[];
  nextToken?: string;
}
export type LaunchConfigurationTemplateIDs = string[];
export type MaxResultsType = number;
export interface DescribeLaunchConfigurationTemplatesRequest {
  launchConfigurationTemplateIDs?: string[];
  maxResults?: number;
  nextToken?: string;
}
export type LaunchConfigurationTemplates = LaunchConfigurationTemplate[];
export interface DescribeLaunchConfigurationTemplatesResponse {
  items?: LaunchConfigurationTemplate[];
  nextToken?: string;
}
export type RecoveryInstanceIDs = string[];
export type SourceServerIDs = string[];
export interface DescribeRecoveryInstancesRequestFilters {
  recoveryInstanceIDs?: string[];
  sourceServerIDs?: string[];
}
export interface DescribeRecoveryInstancesRequest {
  filters?: DescribeRecoveryInstancesRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type EC2InstanceState = string;
export type FailbackState = string;
export type FailbackLaunchType = string;
export interface RecoveryInstanceFailback {
  failbackClientID?: string;
  failbackJobID?: string;
  failbackInitiationTime?: string;
  state?: string;
  agentLastSeenByServiceDateTime?: string;
  failbackClientLastSeenByServiceDateTime?: string;
  failbackToOriginalServer?: boolean;
  firstByteDateTime?: string;
  elapsedReplicationDuration?: string;
  failbackLaunchType?: string;
}
export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
  deviceName?: string;
  totalStorageBytes?: number;
  replicatedStorageBytes?: number;
  rescannedStorageBytes?: number;
  backloggedStorageBytes?: number;
}
export type RecoveryInstanceDataReplicationInfoReplicatedDisks =
  RecoveryInstanceDataReplicationInfoReplicatedDisk[];
export type RecoveryInstanceDataReplicationState = string;
export type RecoveryInstanceDataReplicationInitiationStepName = string;
export type RecoveryInstanceDataReplicationInitiationStepStatus = string;
export interface RecoveryInstanceDataReplicationInitiationStep {
  name?: string;
  status?: string;
}
export type RecoveryInstanceDataReplicationInitiationSteps =
  RecoveryInstanceDataReplicationInitiationStep[];
export interface RecoveryInstanceDataReplicationInitiation {
  startDateTime?: string;
  steps?: RecoveryInstanceDataReplicationInitiationStep[];
}
export type FailbackReplicationError = string;
export interface RecoveryInstanceDataReplicationError {
  error?: string;
  rawError?: string;
}
export interface RecoveryInstanceDataReplicationInfo {
  lagDuration?: string;
  etaDateTime?: string;
  replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisk[];
  dataReplicationState?: string;
  dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;
  dataReplicationError?: RecoveryInstanceDataReplicationError;
  stagingAvailabilityZone?: string;
  stagingOutpostArn?: string;
}
export type EbsVolumeID = string;
export interface RecoveryInstanceDisk {
  internalDeviceName?: string;
  bytes?: number;
  ebsVolumeID?: string;
}
export type RecoveryInstanceDisks = RecoveryInstanceDisk[];
export interface RecoveryInstanceProperties {
  lastUpdatedDateTime?: string;
  identificationHints?: IdentificationHints;
  networkInterfaces?: NetworkInterface[];
  disks?: RecoveryInstanceDisk[];
  cpus?: CPU[];
  ramBytes?: number;
  os?: OS;
}
export type OriginEnvironment = string;
export interface RecoveryInstance {
  ec2InstanceID?: string;
  ec2InstanceState?: string;
  jobID?: string;
  recoveryInstanceID?: string;
  sourceServerID?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
  failback?: RecoveryInstanceFailback;
  dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;
  recoveryInstanceProperties?: RecoveryInstanceProperties;
  pointInTimeSnapshotDateTime?: string;
  isDrill?: boolean;
  originEnvironment?: string;
  originAvailabilityZone?: string;
  agentVersion?: string;
  sourceOutpostArn?: string;
}
export type DescribeRecoveryInstancesItems = RecoveryInstance[];
export interface DescribeRecoveryInstancesResponse {
  nextToken?: string;
  items?: RecoveryInstance[];
}
export interface DescribeRecoverySnapshotsRequestFilters {
  fromDateTime?: string;
  toDateTime?: string;
}
export type RecoverySnapshotsOrder = string;
export interface DescribeRecoverySnapshotsRequest {
  sourceServerID: string;
  filters?: DescribeRecoverySnapshotsRequestFilters;
  order?: string;
  maxResults?: number;
  nextToken?: string;
}
export type RecoverySnapshotID = string;
export type EbsSnapshotsList = string[];
export interface RecoverySnapshot {
  snapshotID: string;
  sourceServerID: string;
  expectedTimestamp: string;
  timestamp?: string;
  ebsSnapshots?: string[];
}
export type RecoverySnapshotsList = RecoverySnapshot[];
export interface DescribeRecoverySnapshotsResponse {
  items?: RecoverySnapshot[];
  nextToken?: string;
}
export type ReplicationConfigurationTemplateIDs = string[];
export interface DescribeReplicationConfigurationTemplatesRequest {
  replicationConfigurationTemplateIDs?: string[];
  maxResults?: number;
  nextToken?: string;
}
export type ReplicationConfigurationTemplates = ReplicationConfigurationTemplate[];
export interface DescribeReplicationConfigurationTemplatesResponse {
  items?: ReplicationConfigurationTemplate[];
  nextToken?: string;
}
export type DescribeSourceNetworksRequestFiltersIDs = string[];
export interface DescribeSourceNetworksRequestFilters {
  sourceNetworkIDs?: string[];
  originAccountID?: string;
  originRegion?: string;
}
export interface DescribeSourceNetworksRequest {
  filters?: DescribeSourceNetworksRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type ReplicationStatus = string;
export type SensitiveBoundedString = string | redacted.Redacted<string>;
export type RecoveryResult = string;
export interface RecoveryLifeCycle {
  apiCallDateTime?: Date;
  jobID?: string;
  lastRecoveryResult?: string;
}
export interface SourceNetwork {
  sourceNetworkID?: string;
  sourceVpcID?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
  replicationStatus?: string;
  replicationStatusDetails?: string | redacted.Redacted<string>;
  cfnStackName?: string | redacted.Redacted<string>;
  sourceRegion?: string;
  sourceAccountID?: string;
  lastRecovery?: RecoveryLifeCycle;
  launchedVpcID?: string;
}
export type SourceNetworksList = SourceNetwork[];
export interface DescribeSourceNetworksResponse {
  items?: SourceNetwork[];
  nextToken?: string;
}
export type DescribeSourceServersRequestFiltersIDs = string[];
export type AccountIDs = string[];
export interface DescribeSourceServersRequestFilters {
  sourceServerIDs?: string[];
  hardwareId?: string;
  stagingAccountIDs?: string[];
}
export interface DescribeSourceServersRequest {
  filters?: DescribeSourceServersRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type SourceServersList = SourceServer[];
export interface DescribeSourceServersResponse {
  items?: SourceServer[];
  nextToken?: string;
}
export interface DisconnectRecoveryInstanceRequest {
  recoveryInstanceID: string;
}
export interface DisconnectRecoveryInstanceResponse {}
export interface DisconnectSourceServerRequest {
  sourceServerID: string;
}
export interface ExportSourceNetworkCfnTemplateRequest {
  sourceNetworkID: string;
}
export interface ExportSourceNetworkCfnTemplateResponse {
  s3DestinationUrl?: string;
}
export interface GetFailbackReplicationConfigurationRequest {
  recoveryInstanceID: string;
}
export interface GetFailbackReplicationConfigurationResponse {
  recoveryInstanceID: string;
  name?: string;
  bandwidthThrottling?: number;
  usePrivateIP?: boolean;
  internetProtocol?: string;
}
export interface GetLaunchConfigurationRequest {
  sourceServerID: string;
}
export type SmallBoundedString = string;
export interface LaunchIntoInstanceProperties {
  launchIntoEC2InstanceID?: string;
}
export interface LaunchConfiguration {
  sourceServerID?: string;
  name?: string;
  ec2LaunchTemplateID?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  postLaunchEnabled?: boolean;
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties;
  recoveryMode?: string;
}
export interface GetRecoveryPlanRequest {
  recoveryPlanArn: string;
}
export interface GetRecoveryPlanResponse {
  recoveryPlan: RecoveryPlan;
}
export interface GetRecoveryPlanExecutionRequest {
  recoveryPlanExecutionArn: string;
}
export interface GetRecoveryPlanExecutionResponse {
  recoveryPlanExecution: RecoveryPlanExecution;
}
export interface GetRecoveryPlanExecutionStepRequest {
  recoveryPlanExecutionStepArn: string;
}
export type RecoveryPlanExecutionStepStatus = string;
export interface RecoveryPlanExecutionServer {
  serverArn: string;
  impactLevel?: string;
  jobID?: string;
}
export type RecoveryPlanExecutionServers = RecoveryPlanExecutionServer[];
export interface ExecutionServerStepConfiguration {
  servers: RecoveryPlanExecutionServer[];
}
export type RecoveryPlanExecutionStepConfiguration =
  | {
      executionServerStepConfiguration: ExecutionServerStepConfiguration;
      waitStepConfiguration?: never;
    }
  | { executionServerStepConfiguration?: never; waitStepConfiguration: WaitStepConfiguration };
export interface RecoveryPlanExecutionStep {
  recoveryPlanExecutionStepArn: string;
  stepIndex: number;
  status: string;
  stepName: string;
  configuration: RecoveryPlanExecutionStepConfiguration;
  errorDetail?: ErrorDetail;
  attempt: number;
  createdAt: string;
  updatedAt: string;
}
export interface GetRecoveryPlanExecutionStepResponse {
  recoveryPlanExecutionStep: RecoveryPlanExecutionStep;
}
export interface GetRecoveryPlanStepRequest {
  recoveryPlanStepArn: string;
}
export interface GetRecoveryPlanStepResponse {
  recoveryPlanStep: RecoveryPlanStep;
}
export interface GetReplicationConfigurationRequest {
  sourceServerID: string;
}
export type ReplicationConfigurationReplicatedDiskStagingDiskType = string;
export interface ReplicationConfigurationReplicatedDisk {
  deviceName?: string;
  isBootDisk?: boolean;
  stagingDiskType?: string;
  iops?: number;
  throughput?: number;
  optimizedStagingDiskType?: string;
}
export type ReplicationConfigurationReplicatedDisks = ReplicationConfigurationReplicatedDisk[];
export interface ReplicationConfiguration {
  sourceServerID?: string;
  name?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: string[];
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: { [key: string]: string | undefined };
  pitPolicy?: PITPolicyRule[];
  autoReplicateNewDisks?: boolean;
  internetProtocol?: string;
}
export interface InitializeServiceRequest {}
export interface InitializeServiceResponse {}
export type MaxResultsReplicatingSourceServers = number;
export interface ListExtensibleSourceServersRequest {
  stagingAccountID: string;
  maxResults?: number;
  nextToken?: string;
}
export interface StagingSourceServer {
  hostname?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
}
export type StagingSourceServersList = StagingSourceServer[];
export interface ListExtensibleSourceServersResponse {
  items?: StagingSourceServer[];
  nextToken?: string;
}
export type LaunchActionIds = string[];
export interface LaunchActionsRequestFilters {
  actionIds?: string[];
}
export interface ListLaunchActionsRequest {
  resourceId: string;
  filters?: LaunchActionsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type LaunchActions = LaunchAction[];
export interface ListLaunchActionsResponse {
  items?: LaunchAction[];
  nextToken?: string;
}
export interface ListRecoveryPlanExecutionsRequest {
  recoveryPlanArn?: string;
  status?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface RecoveryPlanExecutionSummary {
  recoveryPlanExecutionArn: string;
  recoveryPlanArn: string;
  mode: string;
  status: string;
  startedAt: string;
  errorDetail?: ErrorDetail;
}
export type RecoveryPlanExecutionSummaryList = RecoveryPlanExecutionSummary[];
export interface ListRecoveryPlanExecutionsResponse {
  recoveryPlanExecutions: RecoveryPlanExecutionSummary[];
  nextToken?: string;
}
export interface ListRecoveryPlanExecutionStepsFilter {
  status?: string;
}
export interface ListRecoveryPlanExecutionStepsRequest {
  recoveryPlanExecutionArn: string;
  filter?: ListRecoveryPlanExecutionStepsFilter;
  maxResults?: number;
  nextToken?: string;
}
export interface RecoveryPlanExecutionStepSummary {
  recoveryPlanExecutionStepArn: string;
  stepName: string;
  stepIndex: number;
  status: string;
  configuration: RecoveryPlanExecutionStepConfiguration;
  errorDetail?: ErrorDetail;
}
export type RecoveryPlanExecutionStepSummaryList = RecoveryPlanExecutionStepSummary[];
export interface ListRecoveryPlanExecutionStepsResponse {
  recoveryPlanExecutionSteps: RecoveryPlanExecutionStepSummary[];
  nextToken?: string;
}
export interface ListRecoveryPlansRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface RecoveryPlanSummary {
  recoveryPlanArn: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
export type RecoveryPlanSummaryList = RecoveryPlanSummary[];
export interface ListRecoveryPlansResponse {
  recoveryPlans: RecoveryPlanSummary[];
  nextToken?: string;
}
export interface ListRecoveryPlanStepsRequest {
  recoveryPlanArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type RecoveryPlanStepList = RecoveryPlanStep[];
export interface ListRecoveryPlanStepsResponse {
  recoveryPlanSteps: RecoveryPlanStep[];
  nextToken?: string;
}
export interface ListStagingAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface Account {
  accountID?: string;
}
export type Accounts = Account[];
export interface ListStagingAccountsResponse {
  accounts?: Account[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface PutLaunchActionRequest {
  resourceId: string;
  actionCode: string;
  order: number;
  actionId: string;
  optional: boolean;
  active: boolean;
  name: string;
  actionVersion: string;
  category: string;
  parameters?: { [key: string]: LaunchActionParameter | undefined };
  description: string;
}
export interface PutLaunchActionResponse {
  resourceId?: string;
  actionId?: string;
  actionCode?: string;
  type?: string;
  name?: string;
  active?: boolean;
  order?: number;
  actionVersion?: string;
  optional?: boolean;
  parameters?: { [key: string]: LaunchActionParameter | undefined };
  description?: string;
  category?: string;
}
export type RecoveryPlanStepArnList = string[];
export interface ReorderRecoveryPlanStepsRequest {
  recoveryPlanArn: string;
  orderedStepArns: string[];
}
export interface ReorderRecoveryPlanStepsResponse {
  recoveryPlanSteps: RecoveryPlanStep[];
}
export interface RetryDataReplicationRequest {
  sourceServerID: string;
}
export interface RetryRecoveryPlanExecutionStepRequest {
  recoveryPlanExecutionStepArn: string;
}
export interface RetryRecoveryPlanExecutionStepResponse {
  recoveryPlanExecutionStep: RecoveryPlanExecutionStep;
}
export interface ReverseReplicationRequest {
  recoveryInstanceID: string;
}
export interface ReverseReplicationResponse {
  reversedDirectionSourceServerArn?: string;
}
export type StartFailbackRequestRecoveryInstanceIDs = string[];
export interface StartFailbackLaunchRequest {
  recoveryInstanceIDs: string[];
  tags?: { [key: string]: string | undefined };
}
export interface StartFailbackLaunchResponse {
  job?: Job;
}
export interface StartRecoveryRequestSourceServer {
  sourceServerID: string;
  recoverySnapshotID?: string;
}
export type StartRecoveryRequestSourceServers = StartRecoveryRequestSourceServer[];
export interface StartRecoveryRequest {
  sourceServers: StartRecoveryRequestSourceServer[];
  isDrill?: boolean;
  tags?: { [key: string]: string | undefined };
}
export interface StartRecoveryResponse {
  job?: Job;
}
export interface RecoveryPlanExecutionSourceServer {
  sourceServerID: string;
  recoverySnapshotID: string;
}
export type RecoveryPlanExecutionSourceServerList = RecoveryPlanExecutionSourceServer[];
export interface StartRecoveryPlanExecutionRequest {
  recoveryPlanArn: string;
  mode: string;
  clientToken?: string;
  sourceServers?: RecoveryPlanExecutionSourceServer[];
  tags?: { [key: string]: string | undefined };
}
export interface StartRecoveryPlanExecutionResponse {
  recoveryPlanExecution: RecoveryPlanExecution;
}
export interface StartReplicationRequest {
  sourceServerID: string;
}
export interface StartReplicationResponse {
  sourceServer?: SourceServer;
}
export interface StartSourceNetworkRecoveryRequestNetworkEntry {
  sourceNetworkID: string;
  cfnStackName?: string | redacted.Redacted<string>;
}
export type StartSourceNetworkRecoveryRequestNetworkEntries =
  StartSourceNetworkRecoveryRequestNetworkEntry[];
export interface StartSourceNetworkRecoveryRequest {
  sourceNetworks: StartSourceNetworkRecoveryRequestNetworkEntry[];
  deployAsNew?: boolean;
  tags?: { [key: string]: string | undefined };
}
export interface StartSourceNetworkRecoveryResponse {
  job?: Job;
}
export interface StartSourceNetworkReplicationRequest {
  sourceNetworkID: string;
}
export interface StartSourceNetworkReplicationResponse {
  sourceNetwork?: SourceNetwork;
}
export interface StopFailbackRequest {
  recoveryInstanceID: string;
}
export interface StopFailbackResponse {}
export interface StopReplicationRequest {
  sourceServerID: string;
}
export interface StopReplicationResponse {
  sourceServer?: SourceServer;
}
export interface StopSourceNetworkReplicationRequest {
  sourceNetworkID: string;
}
export interface StopSourceNetworkReplicationResponse {
  sourceNetwork?: SourceNetwork;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type RecoveryInstancesForTerminationRequest = string[];
export interface TerminateRecoveryInstancesRequest {
  recoveryInstanceIDs: string[];
}
export interface TerminateRecoveryInstancesResponse {
  job?: Job;
}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateFailbackReplicationConfigurationRequest {
  recoveryInstanceID: string;
  name?: string;
  bandwidthThrottling?: number;
  usePrivateIP?: boolean;
  internetProtocol?: string;
}
export interface UpdateFailbackReplicationConfigurationResponse {}
export interface UpdateLaunchConfigurationRequest {
  sourceServerID: string;
  name?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  postLaunchEnabled?: boolean;
  launchIntoInstanceProperties?: LaunchIntoInstanceProperties;
  recoveryMode?: string;
}
export interface UpdateLaunchConfigurationTemplateRequest {
  launchConfigurationTemplateID: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  exportBucketArn?: string;
  postLaunchEnabled?: boolean;
  launchIntoSourceInstance?: boolean;
  recoveryMode?: string;
}
export interface UpdateLaunchConfigurationTemplateResponse {
  launchConfigurationTemplate?: LaunchConfigurationTemplate;
}
export interface UpdateRecoveryPlanRequest {
  recoveryPlanArn: string;
  name?: string;
  description?: string;
}
export interface UpdateRecoveryPlanResponse {
  recoveryPlan: RecoveryPlan;
}
export interface UpdateRecoveryPlanExecutionStepRequest {
  recoveryPlanExecutionStepArn: string;
  status?: string;
  servers?: RecoveryPlanServer[];
  waitDurationMinutes?: number;
}
export interface UpdateRecoveryPlanExecutionStepResponse {
  recoveryPlanExecutionStep: RecoveryPlanExecutionStep;
}
export interface UpdateRecoveryPlanStepRequest {
  recoveryPlanStepArn: string;
  stepName?: string;
  configuration?: RecoveryPlanStepConfiguration;
}
export interface UpdateRecoveryPlanStepResponse {
  recoveryPlanStep: RecoveryPlanStep;
}
export interface UpdateReplicationConfigurationRequest {
  sourceServerID: string;
  name?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: string[];
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: { [key: string]: string | undefined };
  pitPolicy?: PITPolicyRule[];
  autoReplicateNewDisks?: boolean;
  internetProtocol?: string;
}
export interface UpdateReplicationConfigurationTemplateRequest {
  replicationConfigurationTemplateID: string;
  arn?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: string[];
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: { [key: string]: string | undefined };
  pitPolicy?: PITPolicyRule[];
  autoReplicateNewDisks?: boolean;
  internetProtocol?: string;
}
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name?: string;
  message?: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AssociateSourceNetworkStackError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Associate a Source Network to an existing CloudFormation Stack and modify launch templates to use this network. Can be used for reverting to previously deployed CloudFormation stacks.
 */
export const associateSourceNetworkStack: API.OperationMethod<
  AssociateSourceNetworkStackRequest,
  AssociateSourceNetworkStackResponse,
  AssociateSourceNetworkStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateSourceNetworkStackRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<AssociateSourceNetworkStackResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSourceNetworkStack",
}));

export type CancelRecoveryPlanExecutionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Cancels an in-progress Recovery Plan execution. Remaining steps are skipped.
 */
export const cancelRecoveryPlanExecution: API.OperationMethod<
  CancelRecoveryPlanExecutionRequest,
  CancelRecoveryPlanExecutionResponse,
  CancelRecoveryPlanExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<CancelRecoveryPlanExecutionRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<CancelRecoveryPlanExecutionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelRecoveryPlanExecution",
}));

export type CreateExtendedSourceServerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Create an extended source server in the target Account based on the source server in staging account.
 */
export const createExtendedSourceServer: API.OperationMethod<
  CreateExtendedSourceServerRequest,
  CreateExtendedSourceServerResponse,
  CreateExtendedSourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<CreateExtendedSourceServerRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<CreateExtendedSourceServerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExtendedSourceServer",
}));

export type CreateLaunchConfigurationTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Launch Configuration Template.
 */
export const createLaunchConfigurationTemplate: API.OperationMethod<
  CreateLaunchConfigurationTemplateRequest,
  CreateLaunchConfigurationTemplateResponse,
  CreateLaunchConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<CreateLaunchConfigurationTemplateRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<CreateLaunchConfigurationTemplateResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLaunchConfigurationTemplate",
}));

export type CreateRecoveryPlanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Recovery Plan to orchestrate multi-server disaster recovery.
 */
export const createRecoveryPlan: API.OperationMethod<
  CreateRecoveryPlanRequest,
  CreateRecoveryPlanResponse,
  CreateRecoveryPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<CreateRecoveryPlanRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<CreateRecoveryPlanResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecoveryPlan",
}));

export type CreateRecoveryPlanStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Creates a step in a Recovery Plan. A step is either `SERVER` type (servers to recover in parallel) or `WAIT` type (timed pause between steps).
 */
export const createRecoveryPlanStep: API.OperationMethod<
  CreateRecoveryPlanStepRequest,
  CreateRecoveryPlanStepResponse,
  CreateRecoveryPlanStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<CreateRecoveryPlanStepRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<CreateRecoveryPlanStepResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecoveryPlanStep",
}));

export type CreateReplicationConfigurationTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new ReplicationConfigurationTemplate.
 */
export const createReplicationConfigurationTemplate: API.OperationMethod<
  CreateReplicationConfigurationTemplateRequest,
  ReplicationConfigurationTemplate,
  CreateReplicationConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<CreateReplicationConfigurationTemplateRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<ReplicationConfigurationTemplate>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReplicationConfigurationTemplate",
}));

export type CreateSourceNetworkError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Create a new Source Network resource for a provided VPC ID.
 */
export const createSourceNetwork: API.OperationMethod<
  CreateSourceNetworkRequest,
  CreateSourceNetworkResponse,
  CreateSourceNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<CreateSourceNetworkRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<CreateSourceNetworkResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSourceNetwork",
}));

export type DeleteJobError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Deletes a single Job by ID.
 */
export const deleteJob: API.OperationMethod<
  DeleteJobRequest,
  DeleteJobResponse,
  DeleteJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<DeleteJobRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteJobResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJob",
}));

export type DeleteLaunchActionError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resource launch action.
 */
export const deleteLaunchAction: API.OperationMethod<
  DeleteLaunchActionRequest,
  DeleteLaunchActionResponse,
  DeleteLaunchActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<DeleteLaunchActionRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteLaunchActionResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLaunchAction",
}));

export type DeleteLaunchConfigurationTemplateError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Deletes a single Launch Configuration Template by ID.
 */
export const deleteLaunchConfigurationTemplate: API.OperationMethod<
  DeleteLaunchConfigurationTemplateRequest,
  DeleteLaunchConfigurationTemplateResponse,
  DeleteLaunchConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<DeleteLaunchConfigurationTemplateRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DeleteLaunchConfigurationTemplateResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLaunchConfigurationTemplate",
}));

export type DeleteRecoveryInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
 */
export const deleteRecoveryInstance: API.OperationMethod<
  DeleteRecoveryInstanceRequest,
  DeleteRecoveryInstanceResponse,
  DeleteRecoveryInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<DeleteRecoveryInstanceRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteRecoveryInstanceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecoveryInstance",
}));

export type DeleteRecoveryPlanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Recovery Plan. Cannot delete a plan that has an execution in a non-terminal status (`CREATED`, `IN_PROGRESS`).
 */
export const deleteRecoveryPlan: API.OperationMethod<
  DeleteRecoveryPlanRequest,
  DeleteRecoveryPlanResponse,
  DeleteRecoveryPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<DeleteRecoveryPlanRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<DeleteRecoveryPlanResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecoveryPlan",
}));

export type DeleteRecoveryPlanExecutionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Recovery Plan execution record. Must be in a terminal status.
 */
export const deleteRecoveryPlanExecution: API.OperationMethod<
  DeleteRecoveryPlanExecutionRequest,
  DeleteRecoveryPlanExecutionResponse,
  DeleteRecoveryPlanExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73, __c9, 1) as any as S.Schema<DeleteRecoveryPlanExecutionRequest>,
  output: __S(74, __c9, 2) as any as S.Schema<DeleteRecoveryPlanExecutionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecoveryPlanExecution",
}));

export type DeleteRecoveryPlanStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a step from a Recovery Plan.
 */
export const deleteRecoveryPlanStep: API.OperationMethod<
  DeleteRecoveryPlanStepRequest,
  DeleteRecoveryPlanStepResponse,
  DeleteRecoveryPlanStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<DeleteRecoveryPlanStepRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<DeleteRecoveryPlanStepResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecoveryPlanStep",
}));

export type DeleteReplicationConfigurationTemplateError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Deletes a single Replication Configuration Template by ID
 */
export const deleteReplicationConfigurationTemplate: API.OperationMethod<
  DeleteReplicationConfigurationTemplateRequest,
  DeleteReplicationConfigurationTemplateResponse,
  DeleteReplicationConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<DeleteReplicationConfigurationTemplateRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DeleteReplicationConfigurationTemplateResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationConfigurationTemplate",
}));

export type DeleteSourceNetworkError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Delete Source Network resource.
 */
export const deleteSourceNetwork: API.OperationMethod<
  DeleteSourceNetworkRequest,
  DeleteSourceNetworkResponse,
  DeleteSourceNetworkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<DeleteSourceNetworkRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteSourceNetworkResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSourceNetwork",
}));

export type DeleteSourceServerError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Deletes a single Source Server by ID. The Source Server must be disconnected first.
 */
export const deleteSourceServer: API.OperationMethod<
  DeleteSourceServerRequest,
  DeleteSourceServerResponse,
  DeleteSourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<DeleteSourceServerRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteSourceServerResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSourceServer",
}));

export type DescribeJobLogItemsError =
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a detailed Job log with pagination.
 */
export const describeJobLogItems: API.PaginatedOperationMethod<
  DescribeJobLogItemsRequest,
  DescribeJobLogItemsResponse,
  DescribeJobLogItemsError,
  Credentials | HttpClient.HttpClient,
  JobLog
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<DescribeJobLogItemsRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<DescribeJobLogItemsResponse>,
  errors: [
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobLogItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeJobsError =
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
 */
export const describeJobs: API.PaginatedOperationMethod<
  DescribeJobsRequest,
  DescribeJobsResponse,
  DescribeJobsError,
  Credentials | HttpClient.HttpClient,
  Job
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<DescribeJobsRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<DescribeJobsResponse>,
  errors: [
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeLaunchConfigurationTemplatesError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
 */
export const describeLaunchConfigurationTemplates: API.PaginatedOperationMethod<
  DescribeLaunchConfigurationTemplatesRequest,
  DescribeLaunchConfigurationTemplatesResponse,
  DescribeLaunchConfigurationTemplatesError,
  Credentials | HttpClient.HttpClient,
  LaunchConfigurationTemplate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<DescribeLaunchConfigurationTemplatesRequest>,
  output: __S(100, __c12, 4) as any as S.Schema<DescribeLaunchConfigurationTemplatesResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLaunchConfigurationTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeRecoveryInstancesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Lists all Recovery Instances or multiple Recovery Instances by ID.
 */
export const describeRecoveryInstances: API.PaginatedOperationMethod<
  DescribeRecoveryInstancesRequest,
  DescribeRecoveryInstancesResponse,
  DescribeRecoveryInstancesError,
  Credentials | HttpClient.HttpClient,
  RecoveryInstance
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<DescribeRecoveryInstancesRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<DescribeRecoveryInstancesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRecoveryInstances",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeRecoverySnapshotsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Recovery Snapshots for a single Source Server.
 */
export const describeRecoverySnapshots: API.PaginatedOperationMethod<
  DescribeRecoverySnapshotsRequest,
  DescribeRecoverySnapshotsResponse,
  DescribeRecoverySnapshotsError,
  Credentials | HttpClient.HttpClient,
  RecoverySnapshot
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<DescribeRecoverySnapshotsRequest>,
  output: __S(120, __c15, 0) as any as S.Schema<DescribeRecoverySnapshotsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRecoverySnapshots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeReplicationConfigurationTemplatesError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
 */
export const describeReplicationConfigurationTemplates: API.PaginatedOperationMethod<
  DescribeReplicationConfigurationTemplatesRequest,
  DescribeReplicationConfigurationTemplatesResponse,
  DescribeReplicationConfigurationTemplatesError,
  Credentials | HttpClient.HttpClient,
  ReplicationConfigurationTemplate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(121, __c15, 1) as any as S.Schema<DescribeReplicationConfigurationTemplatesRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<DescribeReplicationConfigurationTemplatesResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplicationConfigurationTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeSourceNetworksError =
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Source Networks or multiple Source Networks filtered by ID.
 */
export const describeSourceNetworks: API.PaginatedOperationMethod<
  DescribeSourceNetworksRequest,
  DescribeSourceNetworksResponse,
  DescribeSourceNetworksError,
  Credentials | HttpClient.HttpClient,
  SourceNetwork
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<DescribeSourceNetworksRequest>,
  output: __S(129, __c16, 1) as any as S.Schema<DescribeSourceNetworksResponse>,
  errors: [
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSourceNetworks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeSourceServersError =
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Source Servers or multiple Source Servers filtered by ID.
 */
export const describeSourceServers: API.PaginatedOperationMethod<
  DescribeSourceServersRequest,
  DescribeSourceServersResponse,
  DescribeSourceServersError,
  Credentials | HttpClient.HttpClient,
  SourceServer
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<DescribeSourceServersRequest>,
  output: __S(133, __c16, 5) as any as S.Schema<DescribeSourceServersResponse>,
  errors: [
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSourceServers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DisconnectRecoveryInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
 */
export const disconnectRecoveryInstance: API.OperationMethod<
  DisconnectRecoveryInstanceRequest,
  DisconnectRecoveryInstanceResponse,
  DisconnectRecoveryInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<DisconnectRecoveryInstanceRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DisconnectRecoveryInstanceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisconnectRecoveryInstance",
}));

export type DisconnectSourceServerError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
 */
export const disconnectSourceServer: API.OperationMethod<
  DisconnectSourceServerRequest,
  SourceServer,
  DisconnectSourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135, __c16, 7) as any as S.Schema<DisconnectSourceServerRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisconnectSourceServer",
}));

export type ExportSourceNetworkCfnTemplateError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Export the Source Network CloudFormation template to an S3 bucket.
 */
export const exportSourceNetworkCfnTemplate: API.OperationMethod<
  ExportSourceNetworkCfnTemplateRequest,
  ExportSourceNetworkCfnTemplateResponse,
  ExportSourceNetworkCfnTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<ExportSourceNetworkCfnTemplateRequest>,
  output: __S(137, __c17, 1) as any as S.Schema<ExportSourceNetworkCfnTemplateResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportSourceNetworkCfnTemplate",
}));

export type GetFailbackReplicationConfigurationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
 */
export const getFailbackReplicationConfiguration: API.OperationMethod<
  GetFailbackReplicationConfigurationRequest,
  GetFailbackReplicationConfigurationResponse,
  GetFailbackReplicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<GetFailbackReplicationConfigurationRequest>,
  output: __S(139, __c17, 3) as any as S.Schema<GetFailbackReplicationConfigurationResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFailbackReplicationConfiguration",
}));

export type GetLaunchConfigurationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Gets a LaunchConfiguration, filtered by Source Server IDs.
 */
export const getLaunchConfiguration: API.OperationMethod<
  GetLaunchConfigurationRequest,
  LaunchConfiguration,
  GetLaunchConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140, __c17, 4) as any as S.Schema<GetLaunchConfigurationRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<LaunchConfiguration>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLaunchConfiguration",
}));

export type GetRecoveryPlanError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Gets a Recovery Plan by ARN.
 */
export const getRecoveryPlan: API.OperationMethod<
  GetRecoveryPlanRequest,
  GetRecoveryPlanResponse,
  GetRecoveryPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<GetRecoveryPlanRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<GetRecoveryPlanResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecoveryPlan",
}));

export type GetRecoveryPlanExecutionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of a Recovery Plan execution.
 */
export const getRecoveryPlanExecution: API.OperationMethod<
  GetRecoveryPlanExecutionRequest,
  GetRecoveryPlanExecutionResponse,
  GetRecoveryPlanExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<GetRecoveryPlanExecutionRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<GetRecoveryPlanExecutionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecoveryPlanExecution",
}));

export type GetRecoveryPlanExecutionStepError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of a step within a Recovery Plan execution.
 */
export const getRecoveryPlanExecutionStep: API.OperationMethod<
  GetRecoveryPlanExecutionStepRequest,
  GetRecoveryPlanExecutionStepResponse,
  GetRecoveryPlanExecutionStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<GetRecoveryPlanExecutionStepRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<GetRecoveryPlanExecutionStepResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecoveryPlanExecutionStep",
}));

export type GetRecoveryPlanStepError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Gets a Recovery Plan step by ARN.
 */
export const getRecoveryPlanStep: API.OperationMethod<
  GetRecoveryPlanStepRequest,
  GetRecoveryPlanStepResponse,
  GetRecoveryPlanStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(153, __c19, 1) as any as S.Schema<GetRecoveryPlanStepRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<GetRecoveryPlanStepResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecoveryPlanStep",
}));

export type GetReplicationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Gets a ReplicationConfiguration, filtered by Source Server ID.
 */
export const getReplicationConfiguration: API.OperationMethod<
  GetReplicationConfigurationRequest,
  ReplicationConfiguration,
  GetReplicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<GetReplicationConfigurationRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<ReplicationConfiguration>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReplicationConfiguration",
}));

export type InitializeServiceError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initialize Elastic Disaster Recovery.
 */
export const initializeService: API.OperationMethod<
  InitializeServiceRequest,
  InitializeServiceResponse,
  InitializeServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158, __c19, 6) as any as S.Schema<InitializeServiceRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<InitializeServiceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InitializeService",
}));

export type ListExtensibleSourceServersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we're reading from is not an extension of another source server.
 */
export const listExtensibleSourceServers: API.PaginatedOperationMethod<
  ListExtensibleSourceServersRequest,
  ListExtensibleSourceServersResponse,
  ListExtensibleSourceServersError,
  Credentials | HttpClient.HttpClient,
  StagingSourceServer
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<ListExtensibleSourceServersRequest>,
  output: __S(162, __c20, 2) as any as S.Schema<ListExtensibleSourceServersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExtensibleSourceServers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLaunchActionsError =
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Lists resource launch actions.
 */
export const listLaunchActions: API.PaginatedOperationMethod<
  ListLaunchActionsRequest,
  ListLaunchActionsResponse,
  ListLaunchActionsError,
  Credentials | HttpClient.HttpClient,
  LaunchAction
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(164, __c20, 4) as any as S.Schema<ListLaunchActionsRequest>,
  output: __S(166, __c20, 6) as any as S.Schema<ListLaunchActionsResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLaunchActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecoveryPlanExecutionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists executions of Recovery Plans, optionally filtered by plan or status.
 */
export const listRecoveryPlanExecutions: API.PaginatedOperationMethod<
  ListRecoveryPlanExecutionsRequest,
  ListRecoveryPlanExecutionsResponse,
  ListRecoveryPlanExecutionsError,
  Credentials | HttpClient.HttpClient,
  RecoveryPlanExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<ListRecoveryPlanExecutionsRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<ListRecoveryPlanExecutionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecoveryPlanExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recoveryPlanExecutions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecoveryPlanExecutionStepsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all steps within a Recovery Plan execution.
 */
export const listRecoveryPlanExecutionSteps: API.PaginatedOperationMethod<
  ListRecoveryPlanExecutionStepsRequest,
  ListRecoveryPlanExecutionStepsResponse,
  ListRecoveryPlanExecutionStepsError,
  Credentials | HttpClient.HttpClient,
  RecoveryPlanExecutionStepSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(172, __c21, 4) as any as S.Schema<ListRecoveryPlanExecutionStepsRequest>,
  output: __S(175, __c21, 7) as any as S.Schema<ListRecoveryPlanExecutionStepsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecoveryPlanExecutionSteps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recoveryPlanExecutionSteps",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecoveryPlansError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Recovery Plans in the account.
 */
export const listRecoveryPlans: API.PaginatedOperationMethod<
  ListRecoveryPlansRequest,
  ListRecoveryPlansResponse,
  ListRecoveryPlansError,
  Credentials | HttpClient.HttpClient,
  RecoveryPlanSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<ListRecoveryPlansRequest>,
  output: __S(179, __c22, 3) as any as S.Schema<ListRecoveryPlansResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecoveryPlans",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recoveryPlans",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecoveryPlanStepsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all steps in a Recovery Plan.
 */
export const listRecoveryPlanSteps: API.PaginatedOperationMethod<
  ListRecoveryPlanStepsRequest,
  ListRecoveryPlanStepsResponse,
  ListRecoveryPlanStepsError,
  Credentials | HttpClient.HttpClient,
  RecoveryPlanStep
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<ListRecoveryPlanStepsRequest>,
  output: __S(182, __c22, 6) as any as S.Schema<ListRecoveryPlanStepsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecoveryPlanSteps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recoveryPlanSteps",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStagingAccountsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array of staging accounts for existing extended source servers.
 */
export const listStagingAccounts: API.PaginatedOperationMethod<
  ListStagingAccountsRequest,
  ListStagingAccountsResponse,
  ListStagingAccountsError,
  Credentials | HttpClient.HttpClient,
  Account
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<ListStagingAccountsRequest>,
  output: __S(186, __c23, 2) as any as S.Schema<ListStagingAccountsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStagingAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accounts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all tags for your Elastic Disaster Recovery resources.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(188, __c23, 4) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutLaunchActionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Puts a resource launch action.
 */
export const putLaunchAction: API.OperationMethod<
  PutLaunchActionRequest,
  PutLaunchActionResponse,
  PutLaunchActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<PutLaunchActionRequest>,
  output: __S(190, __c23, 6) as any as S.Schema<PutLaunchActionResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLaunchAction",
}));

export type ReorderRecoveryPlanStepsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Reorders steps in a Recovery Plan. Accepts a complete ordered list of step ARNs.
 */
export const reorderRecoveryPlanSteps: API.OperationMethod<
  ReorderRecoveryPlanStepsRequest,
  ReorderRecoveryPlanStepsResponse,
  ReorderRecoveryPlanStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<ReorderRecoveryPlanStepsRequest>,
  output: __S(192, __c24, 0) as any as S.Schema<ReorderRecoveryPlanStepsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReorderRecoveryPlanSteps",
}));

export type RetryDataReplicationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
 */
export const retryDataReplication: API.OperationMethod<
  RetryDataReplicationRequest,
  SourceServer,
  RetryDataReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<RetryDataReplicationRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<SourceServer>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetryDataReplication",
}));

export type RetryRecoveryPlanExecutionStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Retries a failed `SERVER` type execution step.
 */
export const retryRecoveryPlanExecutionStep: API.OperationMethod<
  RetryRecoveryPlanExecutionStepRequest,
  RetryRecoveryPlanExecutionStepResponse,
  RetryRecoveryPlanExecutionStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<RetryRecoveryPlanExecutionStepRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<RetryRecoveryPlanExecutionStepResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetryRecoveryPlanExecutionStep",
}));

export type ReverseReplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them.
 */
export const reverseReplication: API.OperationMethod<
  ReverseReplicationRequest,
  ReverseReplicationResponse,
  ReverseReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<ReverseReplicationRequest>,
  output: __S(196, __c24, 4) as any as S.Schema<ReverseReplicationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReverseReplication",
}));

export type StartFailbackLaunchError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
 */
export const startFailbackLaunch: API.OperationMethod<
  StartFailbackLaunchRequest,
  StartFailbackLaunchResponse,
  StartFailbackLaunchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(197, __c24, 5) as any as S.Schema<StartFailbackLaunchRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<StartFailbackLaunchResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFailbackLaunch",
}));

export type StartRecoveryError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
 */
export const startRecovery: API.OperationMethod<
  StartRecoveryRequest,
  StartRecoveryResponse,
  StartRecoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200, __c25, 0) as any as S.Schema<StartRecoveryRequest>,
  output: __S(201, __c25, 1) as any as S.Schema<StartRecoveryResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRecovery",
}));

export type StartRecoveryPlanExecutionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Starts executing a Recovery Plan in `DRILL` or `RECOVERY` mode. A plan cannot have more than one execution in a non-terminal status at a time.
 */
export const startRecoveryPlanExecution: API.OperationMethod<
  StartRecoveryPlanExecutionRequest,
  StartRecoveryPlanExecutionResponse,
  StartRecoveryPlanExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204, __c25, 4) as any as S.Schema<StartRecoveryPlanExecutionRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<StartRecoveryPlanExecutionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRecoveryPlanExecution",
}));

export type StartReplicationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
 */
export const startReplication: API.OperationMethod<
  StartReplicationRequest,
  StartReplicationResponse,
  StartReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205, __c25, 5) as any as S.Schema<StartReplicationRequest>,
  output: __S(206, __c25, 6) as any as S.Schema<StartReplicationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReplication",
}));

export type StartSourceNetworkRecoveryError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Deploy VPC for the specified Source Network and modify launch templates to use this network. The VPC will be deployed using a dedicated CloudFormation stack.
 */
export const startSourceNetworkRecovery: API.OperationMethod<
  StartSourceNetworkRecoveryRequest,
  StartSourceNetworkRecoveryResponse,
  StartSourceNetworkRecoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209, __c26, 1) as any as S.Schema<StartSourceNetworkRecoveryRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<StartSourceNetworkRecoveryResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSourceNetworkRecovery",
}));

export type StartSourceNetworkReplicationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Starts replication for a Source Network. This action would make the Source Network protected.
 */
export const startSourceNetworkReplication: API.OperationMethod<
  StartSourceNetworkReplicationRequest,
  StartSourceNetworkReplicationResponse,
  StartSourceNetworkReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<StartSourceNetworkReplicationRequest>,
  output: __S(211, __c26, 3) as any as S.Schema<StartSourceNetworkReplicationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSourceNetworkReplication",
}));

export type StopFailbackError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
 */
export const stopFailback: API.OperationMethod<
  StopFailbackRequest,
  StopFailbackResponse,
  StopFailbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212, __c26, 4) as any as S.Schema<StopFailbackRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<StopFailbackResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopFailback",
}));

export type StopReplicationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
 */
export const stopReplication: API.OperationMethod<
  StopReplicationRequest,
  StopReplicationResponse,
  StopReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(213, __c26, 5) as any as S.Schema<StopReplicationRequest>,
  output: __S(206, __c25, 6) as any as S.Schema<StopReplicationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopReplication",
}));

export type StopSourceNetworkReplicationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Stops replication for a Source Network. This action would make the Source Network unprotected.
 */
export const stopSourceNetworkReplication: API.OperationMethod<
  StopSourceNetworkReplicationRequest,
  StopSourceNetworkReplicationResponse,
  StopSourceNetworkReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(214, __c26, 6) as any as S.Schema<StopSourceNetworkReplicationRequest>,
  output: __S(211, __c26, 3) as any as S.Schema<StopSourceNetworkReplicationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopSourceNetworkReplication",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(215, __c26, 7) as any as S.Schema<TagResourceRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TerminateRecoveryInstancesError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
 */
export const terminateRecoveryInstances: API.OperationMethod<
  TerminateRecoveryInstancesRequest,
  TerminateRecoveryInstancesResponse,
  TerminateRecoveryInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(216, __c27, 0) as any as S.Schema<TerminateRecoveryInstancesRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<TerminateRecoveryInstancesResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateRecoveryInstances",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(217, __c27, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateFailbackReplicationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Allows you to update the failback replication configuration of a Recovery Instance by ID.
 */
export const updateFailbackReplicationConfiguration: API.OperationMethod<
  UpdateFailbackReplicationConfigurationRequest,
  UpdateFailbackReplicationConfigurationResponse,
  UpdateFailbackReplicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(218, __c27, 2) as any as S.Schema<UpdateFailbackReplicationConfigurationRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<UpdateFailbackReplicationConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFailbackReplicationConfiguration",
}));

export type UpdateLaunchConfigurationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates a LaunchConfiguration by Source Server ID.
 */
export const updateLaunchConfiguration: API.OperationMethod<
  UpdateLaunchConfigurationRequest,
  LaunchConfiguration,
  UpdateLaunchConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(219, __c27, 3) as any as S.Schema<UpdateLaunchConfigurationRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<LaunchConfiguration>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLaunchConfiguration",
}));

export type UpdateLaunchConfigurationTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Launch Configuration Template by ID.
 */
export const updateLaunchConfigurationTemplate: API.OperationMethod<
  UpdateLaunchConfigurationTemplateRequest,
  UpdateLaunchConfigurationTemplateResponse,
  UpdateLaunchConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220, __c27, 4) as any as S.Schema<UpdateLaunchConfigurationTemplateRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<UpdateLaunchConfigurationTemplateResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLaunchConfigurationTemplate",
}));

export type UpdateRecoveryPlanError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates a Recovery Plan's name or description.
 */
export const updateRecoveryPlan: API.OperationMethod<
  UpdateRecoveryPlanRequest,
  UpdateRecoveryPlanResponse,
  UpdateRecoveryPlanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(221, __c27, 5) as any as S.Schema<UpdateRecoveryPlanRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<UpdateRecoveryPlanResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRecoveryPlan",
}));

export type UpdateRecoveryPlanExecutionStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates an execution step. Supports two actions: (1) skip a step that is in `NOT_STARTED` or `FAILED` status; (2) update the wait duration of a `WAIT` type step that is in `NOT_STARTED` status.
 */
export const updateRecoveryPlanExecutionStep: API.OperationMethod<
  UpdateRecoveryPlanExecutionStepRequest,
  UpdateRecoveryPlanExecutionStepResponse,
  UpdateRecoveryPlanExecutionStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<UpdateRecoveryPlanExecutionStepRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<UpdateRecoveryPlanExecutionStepResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRecoveryPlanExecutionStep",
}));

export type UpdateRecoveryPlanStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates a Recovery Plan step's name or configuration. Step type is immutable.
 */
export const updateRecoveryPlanStep: API.OperationMethod<
  UpdateRecoveryPlanStepRequest,
  UpdateRecoveryPlanStepResponse,
  UpdateRecoveryPlanStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(223, __c27, 7) as any as S.Schema<UpdateRecoveryPlanStepRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<UpdateRecoveryPlanStepResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRecoveryPlanStep",
}));

export type UpdateReplicationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to update a ReplicationConfiguration by Source Server ID.
 */
export const updateReplicationConfiguration: API.OperationMethod<
  UpdateReplicationConfigurationRequest,
  ReplicationConfiguration,
  UpdateReplicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(224, __c28, 0) as any as S.Schema<UpdateReplicationConfigurationRequest>,
  output: __S(157, __c19, 5) as any as S.Schema<ReplicationConfiguration>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReplicationConfiguration",
}));

export type UpdateReplicationConfigurationTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates a ReplicationConfigurationTemplate by ID.
 */
export const updateReplicationConfigurationTemplate: API.OperationMethod<
  UpdateReplicationConfigurationTemplateRequest,
  ReplicationConfigurationTemplate,
  UpdateReplicationConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(225, __c28, 1) as any as S.Schema<UpdateReplicationConfigurationTemplateRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<ReplicationConfigurationTemplate>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReplicationConfigurationTemplate",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ sourceNetworkID: S.String, cfnStackName: SensitiveString }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssociateSourceNetworkStack" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateSourceNetworkStackRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.String), type: S.optional(S.String) }),
      ).annotate({ identifier: "LaunchActionParameter" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(1, __c0, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          actionId: S.optional(S.String),
          actionCode: S.optional(S.String),
          type: S.optional(S.String),
          name: S.optional(S.String),
          active: S.optional(S.Boolean),
          order: S.optional(S.Number),
          actionVersion: S.optional(S.String),
          optional: S.optional(S.Boolean),
          parameters: S.optional(__S(2, __c0, 2)),
          description: S.optional(S.String),
          category: S.optional(S.String),
        }),
      ).annotate({ identifier: "LaunchAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(__S(3, __c0, 3)),
          runId: S.optional(S.String),
          status: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "LaunchActionRun" });
    case 5:
      return S.Array(__S(4, __c0, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ssmAgentDiscoveryDatetime: S.optional(S.String),
          runs: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "LaunchActionsStatus" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          recoveryInstanceID: S.optional(S.String),
          launchStatus: S.optional(S.String),
          launchActionsStatus: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({ identifier: "ParticipatingServer" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ sourceNetworkID: S.String })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          participatingResourceID: S.optional(__S(10, __c1, 2)),
          launchStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ParticipatingResource" });
    case 4:
      return S.Array(__S(11, __c1, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobID: S.String,
          arn: S.optional(S.String),
          type: S.optional(S.String),
          initiatedBy: S.optional(S.String),
          creationDateTime: S.optional(S.String),
          endDateTime: S.optional(S.String),
          status: S.optional(S.String),
          participatingServers: S.optional(__S(8, __c1, 0)),
          tags: S.optional(__S(9, __c1, 1)),
          participatingResources: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({ identifier: "Job" });
    case 6:
      return S.suspend(() => S.Struct({ job: S.optional(__S(13, __c1, 5)) })).annotate({
        identifier: "AssociateSourceNetworkStackResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ recoveryPlanExecutionArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CancelRecoveryPlanExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelRecoveryPlanExecutionRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ message: S.String, code: S.String })).annotate({
        identifier: "ErrorDetail",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutionArn: S.String,
          recoveryPlanArn: S.String,
          mode: S.String,
          status: S.String,
          startedAt: S.String,
          completedAt: S.optional(S.String),
          errorDetail: S.optional(__S(16, __c2, 0)),
          tags: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "RecoveryPlanExecution" });
    case 2:
      return S.suspend(() => S.Struct({ recoveryPlanExecution: __S(17, __c2, 1) })).annotate({
        identifier: "CancelRecoveryPlanExecutionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ sourceServerArn: S.String, tags: S.optional(__S(9, __c1, 1)) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateExtendedSourceServer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateExtendedSourceServerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          deviceName: S.optional(S.String),
          totalStorageBytes: S.optional(S.Number),
          replicatedStorageBytes: S.optional(S.Number),
          rescannedStorageBytes: S.optional(S.Number),
          backloggedStorageBytes: S.optional(S.Number),
          volumeStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DataReplicationInfoReplicatedDisk",
      });
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({
        identifier: "DataReplicationInitiationStep",
      });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          startDateTime: S.optional(S.String),
          nextAttemptDateTime: S.optional(S.String),
          steps: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({
        identifier: "DataReplicationInitiation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ error: S.optional(S.String), rawError: S.optional(S.String) }),
      ).annotate({ identifier: "DataReplicationError" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          lagDuration: S.optional(S.String),
          etaDateTime: S.optional(S.String),
          replicatedDisks: S.optional(__S(21, __c2, 5)),
          dataReplicationState: S.optional(S.String),
          dataReplicationInitiation: S.optional(__S(24, __c3, 0)),
          dataReplicationError: S.optional(__S(25, __c3, 1)),
          stagingAvailabilityZone: S.optional(S.String),
          stagingOutpostArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataReplicationInfo" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          apiCallDateTime: S.optional(S.String),
          jobID: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LifeCycleLastLaunchInitiated",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          initiated: S.optional(__S(27, __c3, 3)),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "LifeCycleLastLaunch" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          addedToServiceDateTime: S.optional(S.String),
          firstByteDateTime: S.optional(S.String),
          elapsedReplicationDuration: S.optional(S.String),
          lastSeenByServiceDateTime: S.optional(S.String),
          lastLaunch: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({ identifier: "LifeCycle" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          fqdn: S.optional(S.String),
          hostname: S.optional(S.String),
          vmWareUuid: S.optional(S.String),
          awsInstanceID: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentificationHints" });
    case 7:
      return S.Array(S.String);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          macAddress: S.optional(S.String),
          ips: S.optional(__S(31, __c3, 7)),
          isPrimary: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "NetworkInterface" });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ deviceName: S.optional(S.String), bytes: S.optional(S.Number) }),
      ).annotate({ identifier: "Disk" });
    case 3:
      return S.Array(__S(34, __c4, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ cores: S.optional(S.Number), modelName: S.optional(S.String) }),
      ).annotate({ identifier: "CPU" });
    case 5:
      return S.Array(__S(36, __c4, 4));
    case 6:
      return S.suspend(() => S.Struct({ fullString: S.optional(S.String) })).annotate({
        identifier: "OS",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          lastUpdatedDateTime: S.optional(S.String),
          recommendedInstanceType: S.optional(S.String),
          identificationHints: S.optional(__S(30, __c3, 6)),
          networkInterfaces: S.optional(__S(33, __c4, 1)),
          disks: S.optional(__S(35, __c4, 3)),
          cpus: S.optional(__S(37, __c4, 5)),
          ramBytes: S.optional(S.Number),
          os: S.optional(__S(38, __c4, 6)),
          supportsNitroInstances: S.optional(S.Boolean),
          architecture: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceProperties" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          stagingAccountID: S.optional(S.String),
          stagingSourceServerArn: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "StagingArea" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          originAccountID: S.optional(S.String),
          originRegion: S.optional(S.String),
          originAvailabilityZone: S.optional(S.String),
          sourceOutpostArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceCloudProperties" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          arn: S.optional(S.String),
          tags: S.optional(__S(9, __c1, 1)),
          recoveryInstanceId: S.optional(S.String),
          lastLaunchResult: S.optional(S.String),
          dataReplicationInfo: S.optional(__S(26, __c3, 2)),
          lifeCycle: S.optional(__S(29, __c3, 5)),
          sourceProperties: S.optional(__S(39, __c4, 7)),
          stagingArea: S.optional(__S(40, __c5, 0)),
          sourceCloudProperties: S.optional(__S(41, __c5, 1)),
          replicationDirection: S.optional(S.String),
          reversedDirectionSourceServerArn: S.optional(S.String),
          sourceNetworkID: S.optional(S.String),
          agentVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceServer" });
    case 3:
      return S.suspend(() => S.Struct({ sourceServer: S.optional(__S(42, __c5, 2)) })).annotate({
        identifier: "CreateExtendedSourceServerResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ osByol: S.optional(S.Boolean) })).annotate({
        identifier: "Licensing",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(__S(9, __c1, 1)),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(44, __c5, 4)),
          exportBucketArn: S.optional(S.String),
          postLaunchEnabled: S.optional(S.Boolean),
          launchIntoSourceInstance: S.optional(S.Boolean),
          recoveryMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateLaunchConfigurationTemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLaunchConfigurationTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateID: S.optional(S.String),
          arn: S.optional(S.String),
          tags: S.optional(__S(9, __c1, 1)),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(44, __c5, 4)),
          exportBucketArn: S.optional(S.String),
          postLaunchEnabled: S.optional(S.Boolean),
          launchIntoSourceInstance: S.optional(S.Boolean),
          recoveryMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LaunchConfigurationTemplate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ launchConfigurationTemplate: S.optional(__S(46, __c5, 6)) }),
      ).annotate({
        identifier: "CreateLaunchConfigurationTemplateResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateRecoveryPlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRecoveryPlanRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          status: S.String,
          createdAt: S.String,
          updatedAt: S.String,
          tags: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "RecoveryPlan" });
    case 2:
      return S.suspend(() => S.Struct({ recoveryPlan: __S(49, __c6, 1) })).annotate({
        identifier: "CreateRecoveryPlanResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ serverArn: S.String, impactLevel: S.optional(S.String) }),
      ).annotate({ identifier: "RecoveryPlanServer" });
    case 4:
      return S.Array(__S(51, __c6, 3));
    case 5:
      return S.suspend(() => S.Struct({ servers: __S(52, __c6, 4) })).annotate({
        identifier: "ServerStepConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ waitDurationMinutes: S.Number })).annotate({
        identifier: "WaitStepConfiguration",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ serverStepConfiguration: __S(53, __c6, 5) }),
        /*@__PURE__*/ S.Struct({ waitStepConfiguration: __S(54, __c6, 6) }),
      ]);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanArn: S.String,
          stepName: S.String,
          stepOrder: S.optional(S.Number),
          configuration: __S(55, __c6, 7),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateRecoveryPlanStep" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRecoveryPlanStepRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanStepArn: S.String,
          stepOrder: S.Number,
          stepName: S.String,
          configuration: __S(55, __c6, 7),
          createdAt: S.String,
          updatedAt: S.String,
        }),
      ).annotate({ identifier: "RecoveryPlanStep" });
    case 2:
      return S.suspend(() => S.Struct({ recoveryPlanStep: __S(57, __c7, 1) })).annotate({
        identifier: "CreateRecoveryPlanStepResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ruleID: S.optional(S.Number),
          units: S.String,
          interval: S.Number,
          retentionDuration: S.Number,
          enabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PITPolicyRule" });
    case 4:
      return S.Array(__S(59, __c7, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          stagingAreaSubnetId: S.String,
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: __S(31, __c3, 7),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          ebsEncryption: S.String,
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.Number,
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: __S(9, __c1, 1),
          pitPolicy: __S(60, __c7, 4),
          tags: S.optional(__S(9, __c1, 1)),
          autoReplicateNewDisks: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateReplicationConfigurationTemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateReplicationConfigurationTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          replicationConfigurationTemplateID: S.String,
          arn: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(31, __c3, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(9, __c1, 1)),
          tags: S.optional(__S(9, __c1, 1)),
          pitPolicy: S.optional(__S(60, __c7, 4)),
          autoReplicateNewDisks: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReplicationConfigurationTemplate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          vpcID: S.String,
          originAccountID: S.String,
          originRegion: S.String,
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateSourceNetwork" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSourceNetworkRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ sourceNetworkID: S.optional(S.String) })).annotate({
        identifier: "CreateSourceNetworkResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobID: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteJob" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteJobRequest" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceId: S.String, actionId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteLaunchAction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLaunchActionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ launchConfigurationTemplateID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteLaunchConfigurationTemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLaunchConfigurationTemplateRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteLaunchConfigurationTemplateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ recoveryInstanceID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteRecoveryInstance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecoveryInstanceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ recoveryPlanArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteRecoveryPlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecoveryPlanRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ recoveryPlanArn: S.String })).annotate({
        identifier: "DeleteRecoveryPlanResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ recoveryPlanExecutionArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteRecoveryPlanExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecoveryPlanExecutionRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ recoveryPlanExecutionArn: S.String })).annotate({
        identifier: "DeleteRecoveryPlanExecutionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ recoveryPlanStepArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteRecoveryPlanStep" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecoveryPlanStepRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ recoveryPlanStepArn: S.String })).annotate({
        identifier: "DeleteRecoveryPlanStepResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ replicationConfigurationTemplateID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteReplicationConfigurationTemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteReplicationConfigurationTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceNetworkID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteSourceNetwork" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSourceNetworkRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteSourceServer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSourceServerRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobID: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeJobLogItems" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeJobLogItemsRequest",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(81, __c10, 1).pipe(S.optional));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({ productCodeId: S.optional(S.String), productCodeMode: S.optional(S.String) }),
      ).annotate({ identifier: "ProductCode" });
    case 5:
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(85, __c10, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          volumeToConversionMap: S.optional(__S(82, __c10, 2)),
          rootVolumeName: S.optional(S.String),
          forceUefi: S.optional(S.Boolean),
          dataTimestamp: S.optional(S.String),
          volumeToVolumeSize: S.optional(__S(83, __c10, 3)),
          volumeToProductCodes: S.optional(__S(86, __c10, 6)),
        }),
      ).annotate({ identifier: "ConversionProperties" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceNetworkID: S.optional(S.String),
          sourceVpc: S.optional(S.String),
          targetVpc: S.optional(S.String),
          stackName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceNetworkData" });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ sourceNetworkData: __S(88, __c11, 0) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          conversionServerID: S.optional(S.String),
          targetInstanceID: S.optional(S.String),
          rawError: S.optional(S.String),
          conversionProperties: S.optional(__S(87, __c10, 7)),
          eventResourceData: S.optional(__S(89, __c11, 1)),
          attemptCount: S.optional(S.Number),
          maxAttemptsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobLogEventData" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          logDateTime: S.optional(S.String),
          event: S.optional(S.String),
          eventData: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "JobLog" });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(92, __c11, 4)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeJobLogItemsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobIDs: S.optional(__S(31, __c3, 7)),
          fromDate: S.optional(S.String),
          toDate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeJobsRequestFilters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(94, __c11, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DescribeJobs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeJobsRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(13, __c1, 5));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(96, __c12, 0)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeJobsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateIDs: S.optional(__S(31, __c3, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeLaunchConfigurationTemplates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeLaunchConfigurationTemplatesRequest",
      });
    case 3:
      return S.Array(__S(46, __c5, 6));
    case 4:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(99, __c12, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeLaunchConfigurationTemplatesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          recoveryInstanceIDs: S.optional(__S(31, __c3, 7)),
          sourceServerIDs: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({
        identifier: "DescribeRecoveryInstancesRequestFilters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(101, __c12, 5)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeRecoveryInstances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeRecoveryInstancesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          failbackClientID: S.optional(S.String),
          failbackJobID: S.optional(S.String),
          failbackInitiationTime: S.optional(S.String),
          state: S.optional(S.String),
          agentLastSeenByServiceDateTime: S.optional(S.String),
          failbackClientLastSeenByServiceDateTime: S.optional(S.String),
          failbackToOriginalServer: S.optional(S.Boolean),
          firstByteDateTime: S.optional(S.String),
          elapsedReplicationDuration: S.optional(S.String),
          failbackLaunchType: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecoveryInstanceFailback" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          deviceName: S.optional(S.String),
          totalStorageBytes: S.optional(S.Number),
          replicatedStorageBytes: S.optional(S.Number),
          rescannedStorageBytes: S.optional(S.Number),
          backloggedStorageBytes: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RecoveryInstanceDataReplicationInfoReplicatedDisk",
      });
    case 1:
      return S.Array(__S(104, __c13, 0));
    case 2:
      return S.Array(__S(22, __c2, 6));
    case 3:
      return S.suspend(() =>
        S.Struct({
          startDateTime: S.optional(S.String),
          steps: S.optional(__S(106, __c13, 2)),
        }),
      ).annotate({
        identifier: "RecoveryInstanceDataReplicationInitiation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ error: S.optional(S.String), rawError: S.optional(S.String) }),
      ).annotate({
        identifier: "RecoveryInstanceDataReplicationError",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          lagDuration: S.optional(S.String),
          etaDateTime: S.optional(S.String),
          replicatedDisks: S.optional(__S(105, __c13, 1)),
          dataReplicationState: S.optional(S.String),
          dataReplicationInitiation: S.optional(__S(107, __c13, 3)),
          dataReplicationError: S.optional(__S(108, __c13, 4)),
          stagingAvailabilityZone: S.optional(S.String),
          stagingOutpostArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RecoveryInstanceDataReplicationInfo",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          internalDeviceName: S.optional(S.String),
          bytes: S.optional(S.Number),
          ebsVolumeID: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecoveryInstanceDisk" });
    case 7:
      return S.Array(__S(110, __c13, 6));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          lastUpdatedDateTime: S.optional(S.String),
          identificationHints: S.optional(__S(30, __c3, 6)),
          networkInterfaces: S.optional(__S(33, __c4, 1)),
          disks: S.optional(__S(111, __c13, 7)),
          cpus: S.optional(__S(37, __c4, 5)),
          ramBytes: S.optional(S.Number),
          os: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({
        identifier: "RecoveryInstanceProperties",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ec2InstanceID: S.optional(S.String),
          ec2InstanceState: S.optional(S.String),
          jobID: S.optional(S.String),
          recoveryInstanceID: S.optional(S.String),
          sourceServerID: S.optional(S.String),
          arn: S.optional(S.String),
          tags: S.optional(__S(9, __c1, 1)),
          failback: S.optional(__S(103, __c12, 7)),
          dataReplicationInfo: S.optional(__S(109, __c13, 5)),
          recoveryInstanceProperties: S.optional(__S(112, __c14, 0)),
          pointInTimeSnapshotDateTime: S.optional(S.String),
          isDrill: S.optional(S.Boolean),
          originEnvironment: S.optional(S.String),
          originAvailabilityZone: S.optional(S.String),
          agentVersion: S.optional(S.String),
          sourceOutpostArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecoveryInstance" });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          items: S.optional(__S(114, __c14, 2)),
        }),
      ).annotate({
        identifier: "DescribeRecoveryInstancesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ fromDateTime: S.optional(S.String), toDateTime: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeRecoverySnapshotsRequestFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          filters: S.optional(__S(116, __c14, 4)),
          order: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeRecoverySnapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeRecoverySnapshotsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          snapshotID: S.String,
          sourceServerID: S.String,
          expectedTimestamp: S.String,
          timestamp: S.optional(S.String),
          ebsSnapshots: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({ identifier: "RecoverySnapshot" });
    case 7:
      return S.Array(__S(118, __c14, 6));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(119, __c14, 7)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeRecoverySnapshotsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          replicationConfigurationTemplateIDs: S.optional(__S(31, __c3, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeReplicationConfigurationTemplates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeReplicationConfigurationTemplatesRequest",
      });
    case 2:
      return S.Array(__S(62, __c7, 6));
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(122, __c15, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeReplicationConfigurationTemplatesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceNetworkIDs: S.optional(__S(31, __c3, 7)),
          originAccountID: S.optional(S.String),
          originRegion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeSourceNetworksRequestFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(124, __c15, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeSourceNetworks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSourceNetworksRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          apiCallDateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobID: S.optional(S.String),
          lastRecoveryResult: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecoveryLifeCycle" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceNetworkID: S.optional(S.String),
          sourceVpcID: S.optional(S.String),
          arn: S.optional(S.String),
          tags: S.optional(__S(9, __c1, 1)),
          replicationStatus: S.optional(S.String),
          replicationStatusDetails: S.optional(SensitiveString),
          cfnStackName: S.optional(SensitiveString),
          sourceRegion: S.optional(S.String),
          sourceAccountID: S.optional(S.String),
          lastRecovery: S.optional(__S(126, __c15, 6)),
          launchedVpcID: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceNetwork" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(128, __c16, 0)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeSourceNetworksResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sourceServerIDs: S.optional(__S(31, __c3, 7)),
          hardwareId: S.optional(S.String),
          stagingAccountIDs: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({
        identifier: "DescribeSourceServersRequestFilters",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(130, __c16, 2)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeSourceServers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSourceServersRequest",
      });
    case 4:
      return S.Array(__S(42, __c5, 2));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(132, __c16, 4)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeSourceServersResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ recoveryInstanceID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisconnectRecoveryInstance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisconnectRecoveryInstanceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisconnectSourceServer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisconnectSourceServerRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ sourceNetworkID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ExportSourceNetworkCfnTemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ExportSourceNetworkCfnTemplateRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ s3DestinationUrl: S.optional(S.String) })).annotate({
        identifier: "ExportSourceNetworkCfnTemplateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ recoveryInstanceID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetFailbackReplicationConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFailbackReplicationConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          recoveryInstanceID: S.String,
          name: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          usePrivateIP: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetFailbackReplicationConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetLaunchConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLaunchConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ launchIntoEC2InstanceID: S.optional(S.String) })).annotate({
        identifier: "LaunchIntoInstanceProperties",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          name: S.optional(S.String),
          ec2LaunchTemplateID: S.optional(S.String),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(44, __c5, 4)),
          postLaunchEnabled: S.optional(S.Boolean),
          launchIntoInstanceProperties: S.optional(__S(141, __c17, 5)),
          recoveryMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "LaunchConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ recoveryPlanArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetRecoveryPlan" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRecoveryPlanRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ recoveryPlan: __S(49, __c6, 1) })).annotate({
        identifier: "GetRecoveryPlanResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ recoveryPlanExecutionArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetRecoveryPlanExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecoveryPlanExecutionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ recoveryPlanExecutionStepArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetRecoveryPlanExecutionStep" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecoveryPlanExecutionStepRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serverArn: S.String,
          impactLevel: S.optional(S.String),
          jobID: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RecoveryPlanExecutionServer",
      });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() => S.Struct({ servers: __S(148, __c18, 4) })).annotate({
        identifier: "ExecutionServerStepConfiguration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          executionServerStepConfiguration: __S(149, __c18, 5),
        }),
        /*@__PURE__*/ S.Struct({ waitStepConfiguration: __S(54, __c6, 6) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutionStepArn: S.String,
          stepIndex: S.Number,
          status: S.String,
          stepName: S.String,
          configuration: __S(150, __c18, 6),
          errorDetail: S.optional(__S(16, __c2, 0)),
          attempt: S.Number,
          createdAt: S.String,
          updatedAt: S.String,
        }),
      ).annotate({
        identifier: "RecoveryPlanExecutionStep",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ recoveryPlanExecutionStep: __S(151, __c18, 7) })).annotate({
        identifier: "GetRecoveryPlanExecutionStepResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ recoveryPlanStepArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetRecoveryPlanStep" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecoveryPlanStepRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetReplicationConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReplicationConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          deviceName: S.optional(S.String),
          isBootDisk: S.optional(S.Boolean),
          stagingDiskType: S.optional(S.String),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
          optimizedStagingDiskType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReplicationConfigurationReplicatedDisk",
      });
    case 4:
      return S.Array(__S(155, __c19, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          name: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(31, __c3, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          replicatedDisks: S.optional(__S(156, __c19, 4)),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(9, __c1, 1)),
          pitPolicy: S.optional(__S(60, __c7, 4)),
          autoReplicateNewDisks: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReplicationConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/InitializeService" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InitializeServiceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          stagingAccountID: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListExtensibleSourceServers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExtensibleSourceServersRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          hostname: S.optional(S.String),
          arn: S.optional(S.String),
          tags: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "StagingSourceServer" });
    case 1:
      return S.Array(__S(160, __c20, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(161, __c20, 1)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListExtensibleSourceServersResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ actionIds: S.optional(__S(31, __c3, 7)) })).annotate({
        identifier: "LaunchActionsRequestFilters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.String,
          filters: S.optional(__S(163, __c20, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListLaunchActions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListLaunchActionsRequest" });
    case 5:
      return S.Array(__S(3, __c0, 3));
    case 6:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(165, __c20, 5)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListLaunchActionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanArn: S.optional(S.String),
          status: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListRecoveryPlanExecutions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecoveryPlanExecutionsRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutionArn: S.String,
          recoveryPlanArn: S.String,
          mode: S.String,
          status: S.String,
          startedAt: S.String,
          errorDetail: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({
        identifier: "RecoveryPlanExecutionSummary",
      });
    case 1:
      return S.Array(__S(168, __c21, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutions: __S(169, __c21, 1),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecoveryPlanExecutionsResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "ListRecoveryPlanExecutionStepsFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutionArn: S.String,
          filter: S.optional(__S(171, __c21, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListRecoveryPlanExecutionSteps" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecoveryPlanExecutionStepsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutionStepArn: S.String,
          stepName: S.String,
          stepIndex: S.Number,
          status: S.String,
          configuration: __S(150, __c18, 6),
          errorDetail: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({
        identifier: "RecoveryPlanExecutionStepSummary",
      });
    case 6:
      return S.Array(__S(173, __c21, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutionSteps: __S(174, __c21, 6),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecoveryPlanExecutionStepsResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListRecoveryPlans" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRecoveryPlansRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanArn: S.String,
          name: S.String,
          status: S.String,
          createdAt: S.String,
          updatedAt: S.String,
        }),
      ).annotate({ identifier: "RecoveryPlanSummary" });
    case 2:
      return S.Array(__S(177, __c22, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ recoveryPlans: __S(178, __c22, 2), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRecoveryPlansResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanArn: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListRecoveryPlanSteps" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecoveryPlanStepsRequest",
      });
    case 5:
      return S.Array(__S(57, __c7, 1));
    case 6:
      return S.suspend(() =>
        S.Struct({ recoveryPlanSteps: __S(181, __c22, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRecoveryPlanStepsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ListStagingAccounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListStagingAccountsRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ accountID: S.optional(S.String) })).annotate({
        identifier: "Account",
      });
    case 1:
      return S.Array(__S(184, __c23, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ accounts: S.optional(__S(185, __c23, 1)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListStagingAccountsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
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
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(9, __c1, 1)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.String,
          actionCode: S.String,
          order: S.Number,
          actionId: S.String,
          optional: S.Boolean,
          active: S.Boolean,
          name: S.String,
          actionVersion: S.String,
          category: S.String,
          parameters: S.optional(__S(2, __c0, 2)),
          description: S.String,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/PutLaunchAction" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutLaunchActionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.optional(S.String),
          actionId: S.optional(S.String),
          actionCode: S.optional(S.String),
          type: S.optional(S.String),
          name: S.optional(S.String),
          active: S.optional(S.Boolean),
          order: S.optional(S.Number),
          actionVersion: S.optional(S.String),
          optional: S.optional(S.Boolean),
          parameters: S.optional(__S(2, __c0, 2)),
          description: S.optional(S.String),
          category: S.optional(S.String),
        }),
      ).annotate({ identifier: "PutLaunchActionResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ recoveryPlanArn: S.String, orderedStepArns: __S(31, __c3, 7) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ReorderRecoveryPlanSteps" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ReorderRecoveryPlanStepsRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ recoveryPlanSteps: __S(181, __c22, 5) })).annotate({
        identifier: "ReorderRecoveryPlanStepsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RetryDataReplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RetryDataReplicationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ recoveryPlanExecutionStepArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RetryRecoveryPlanExecutionStep" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RetryRecoveryPlanExecutionStepRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ recoveryInstanceID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ReverseReplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ReverseReplicationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ reversedDirectionSourceServerArn: S.optional(S.String) }),
      ).annotate({
        identifier: "ReverseReplicationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          recoveryInstanceIDs: __S(31, __c3, 7),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartFailbackLaunch" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartFailbackLaunchRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, recoverySnapshotID: S.optional(S.String) }),
      ).annotate({
        identifier: "StartRecoveryRequestSourceServer",
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
          sourceServers: __S(199, __c24, 7),
          isDrill: S.optional(S.Boolean),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartRecovery" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartRecoveryRequest" });
    case 1:
      return S.suspend(() => S.Struct({ job: S.optional(__S(13, __c1, 5)) })).annotate({
        identifier: "StartRecoveryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, recoverySnapshotID: S.String }),
      ).annotate({
        identifier: "RecoveryPlanExecutionSourceServer",
      });
    case 3:
      return S.Array(__S(202, __c25, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanArn: S.String,
          mode: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          sourceServers: S.optional(__S(203, __c25, 3)),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartRecoveryPlanExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartRecoveryPlanExecutionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartReplication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartReplicationRequest" });
    case 6:
      return S.suspend(() => S.Struct({ sourceServer: S.optional(__S(42, __c5, 2)) })).annotate({
        identifier: "StartReplicationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ sourceNetworkID: S.String, cfnStackName: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "StartSourceNetworkRecoveryRequestNetworkEntry",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(207, __c25, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceNetworks: __S(208, __c26, 0),
          deployAsNew: S.optional(S.Boolean),
          tags: S.optional(__S(9, __c1, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartSourceNetworkRecovery" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSourceNetworkRecoveryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sourceNetworkID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartSourceNetworkReplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSourceNetworkReplicationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ sourceNetwork: S.optional(__S(127, __c15, 7)) })).annotate({
        identifier: "StartSourceNetworkReplicationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ recoveryInstanceID: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StopFailback" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopFailbackRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StopReplication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopReplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceNetworkID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopSourceNetworkReplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopSourceNetworkReplicationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(9, __c1, 1),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ recoveryInstanceIDs: __S(31, __c3, 7) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/TerminateRecoveryInstances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TerminateRecoveryInstancesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(31, __c3, 7).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          recoveryInstanceID: S.String,
          name: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          usePrivateIP: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateFailbackReplicationConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateFailbackReplicationConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          name: S.optional(S.String),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(44, __c5, 4)),
          postLaunchEnabled: S.optional(S.Boolean),
          launchIntoInstanceProperties: S.optional(__S(141, __c17, 5)),
          recoveryMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateLaunchConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLaunchConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateID: S.String,
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(44, __c5, 4)),
          exportBucketArn: S.optional(S.String),
          postLaunchEnabled: S.optional(S.Boolean),
          launchIntoSourceInstance: S.optional(S.Boolean),
          recoveryMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateLaunchConfigurationTemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLaunchConfigurationTemplateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanArn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateRecoveryPlan" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRecoveryPlanRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanExecutionStepArn: S.String,
          status: S.optional(S.String),
          servers: S.optional(__S(52, __c6, 4)),
          waitDurationMinutes: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateRecoveryPlanExecutionStep" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRecoveryPlanExecutionStepRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          recoveryPlanStepArn: S.String,
          stepName: S.optional(S.String),
          configuration: S.optional(__S(55, __c6, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateRecoveryPlanStep" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRecoveryPlanStepRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          name: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(31, __c3, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          replicatedDisks: S.optional(__S(156, __c19, 4)),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(9, __c1, 1)),
          pitPolicy: S.optional(__S(60, __c7, 4)),
          autoReplicateNewDisks: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateReplicationConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReplicationConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          replicationConfigurationTemplateID: S.String,
          arn: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(31, __c3, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(9, __c1, 1)),
          pitPolicy: S.optional(__S(60, __c7, 4)),
          autoReplicateNewDisks: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateReplicationConfigurationTemplate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReplicationConfigurationTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 3:
      return S.Array(__S(226, __c28, 2));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
