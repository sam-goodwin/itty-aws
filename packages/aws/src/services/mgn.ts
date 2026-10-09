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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "mgn",
  serviceShapeName: "ApplicationMigrationService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "mgn" });
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
              `https://mgn-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://mgn-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://mgn.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://mgn.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      errors: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(291, __c36, 3)).annotate({
          identifier: "ConflictExceptionErrors",
        }),
      ),
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
      quotaValue: /*@__PURE__*/ S.optional(S.Number),
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
        /*@__PURE__*/ S.suspend(() => __S(293, __c36, 5)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ApplicationID = string;
export type AccountID = string;
export interface ArchiveApplicationRequest {
  applicationID: string;
  accountID?: string;
}
export type ARN = string;
export type ApplicationName = string;
export type ApplicationDescription = string;
export type ISO8601DatetimeString = string;
export type ApplicationHealthStatus = string;
export type ApplicationProgressStatus = string;
export type PositiveInteger = number;
export interface ApplicationAggregatedStatus {
  lastUpdateDateTime?: string;
  healthStatus?: string;
  progressStatus?: string;
  totalSourceServers?: number;
}
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
export type WaveID = string;
export interface Application {
  applicationID?: string;
  arn?: string;
  name?: string;
  description?: string;
  isArchived?: boolean;
  applicationAggregatedStatus?: ApplicationAggregatedStatus;
  creationDateTime?: string;
  lastModifiedDateTime?: string;
  tags?: { [key: string]: string | undefined };
  waveID?: string;
}
export interface ArchiveWaveRequest {
  waveID: string;
  accountID?: string;
}
export type WaveName = string;
export type WaveDescription = string;
export type WaveHealthStatus = string;
export type WaveProgressStatus = string;
export interface WaveAggregatedStatus {
  lastUpdateDateTime?: string;
  replicationStartedDateTime?: string;
  healthStatus?: string;
  progressStatus?: string;
  totalApplications?: number;
}
export interface Wave {
  waveID?: string;
  arn?: string;
  name?: string;
  description?: string;
  isArchived?: boolean;
  waveAggregatedStatus?: WaveAggregatedStatus;
  creationDateTime?: string;
  lastModifiedDateTime?: string;
  tags?: { [key: string]: string | undefined };
}
export type ApplicationIDs = string[];
export interface AssociateApplicationsRequest {
  waveID: string;
  applicationIDs: string[];
  accountID?: string;
}
export interface AssociateApplicationsResponse {}
export type SourceServerID = string;
export type AssociateSourceServersRequestSourceServerIDs = string[];
export interface AssociateSourceServersRequest {
  applicationID: string;
  sourceServerIDs: string[];
  accountID?: string;
}
export interface AssociateSourceServersResponse {}
export type ChangeServerLifeCycleStateSourceServerLifecycleState = string;
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  state: string;
}
export interface ChangeServerLifeCycleStateRequest {
  sourceServerID: string;
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle;
  accountID?: string;
}
export type EC2InstanceID = string;
export type JobID = string;
export type FirstBoot = string;
export type LastKnownCheckType = string;
export type BoundedString = string;
export type LastKnownCheckStatus = string;
export interface LastKnownCheck {
  type?: string;
  name?: string;
  status?: string;
  error?: string;
  checkedAt?: Date;
}
export type LastKnownChecksList = LastKnownCheck[];
export interface LaunchedInstance {
  ec2InstanceID?: string;
  jobID?: string;
  firstBoot?: string;
  lastKnownChecks?: LastKnownCheck[];
  lastKnownFsxChecksStatus?: string;
}
export type ISO8601DurationString = string;
export interface DataReplicationInfoReplicatedDisk {
  deviceName?: string;
  totalStorageBytes?: number;
  replicatedStorageBytes?: number;
  rescannedStorageBytes?: number;
  backloggedStorageBytes?: number;
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
export type ReplicatorID = string;
export interface DataReplicationInfo {
  lagDuration?: string;
  etaDateTime?: string;
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];
  dataReplicationState?: string;
  dataReplicationInitiation?: DataReplicationInitiation;
  dataReplicationError?: DataReplicationError;
  lastSnapshotDateTime?: string;
  replicatorId?: string;
}
export interface LifeCycleLastTestInitiated {
  apiCallDateTime?: string;
  jobID?: string;
}
export interface LifeCycleLastTestReverted {
  apiCallDateTime?: string;
}
export interface LifeCycleLastTestFinalized {
  apiCallDateTime?: string;
}
export interface LifeCycleLastTest {
  initiated?: LifeCycleLastTestInitiated;
  reverted?: LifeCycleLastTestReverted;
  finalized?: LifeCycleLastTestFinalized;
}
export interface LifeCycleLastCutoverInitiated {
  apiCallDateTime?: string;
  jobID?: string;
}
export interface LifeCycleLastCutoverReverted {
  apiCallDateTime?: string;
}
export interface LifeCycleLastCutoverFinalized {
  apiCallDateTime?: string;
}
export interface LifeCycleLastCutover {
  initiated?: LifeCycleLastCutoverInitiated;
  reverted?: LifeCycleLastCutoverReverted;
  finalized?: LifeCycleLastCutoverFinalized;
}
export type LifeCycleState = string;
export interface LifeCycle {
  addedToServiceDateTime?: string;
  firstByteDateTime?: string;
  elapsedReplicationDuration?: string;
  lastSeenByServiceDateTime?: string;
  lastTest?: LifeCycleLastTest;
  lastCutover?: LifeCycleLastCutover;
  state?: string;
}
export type EC2InstanceType = string;
export interface IdentificationHints {
  fqdn?: string;
  hostname?: string;
  vmWareUuid?: string;
  awsInstanceID?: string;
  vmPath?: string;
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
export interface SourceProperties {
  lastUpdatedDateTime?: string;
  recommendedInstanceType?: string;
  identificationHints?: IdentificationHints;
  networkInterfaces?: NetworkInterface[];
  disks?: Disk[];
  cpus?: CPU[];
  ramBytes?: number;
  os?: OS;
}
export type ReplicationType = string;
export type VcenterClientID = string;
export type UserProvidedId = string;
export type SecretArn = string;
export type ConnectorArn = string;
export interface SourceServerConnectorAction {
  credentialsSecretArn?: string;
  connectorArn?: string;
}
export interface SourceServer {
  sourceServerID?: string;
  arn?: string;
  isArchived?: boolean;
  tags?: { [key: string]: string | undefined };
  launchedInstance?: LaunchedInstance;
  dataReplicationInfo?: DataReplicationInfo;
  lifeCycle?: LifeCycle;
  sourceProperties?: SourceProperties;
  replicationType?: string;
  vcenterClientID?: string;
  applicationID?: string;
  userProvidedID?: string;
  fqdnForActionFramework?: string;
  connectorAction?: SourceServerConnectorAction;
}
export interface CreateApplicationRequest {
  name: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  accountID?: string;
}
export type ConnectorName = string;
export type SsmInstanceID = string;
export type S3BucketName = string;
export type CloudWatchLogGroupName = string;
export interface ConnectorSsmCommandConfig {
  s3OutputEnabled: boolean;
  outputS3BucketName?: string;
  cloudWatchOutputEnabled: boolean;
  cloudWatchLogGroupName?: string;
}
export interface CreateConnectorRequest {
  name: string;
  ssmInstanceID: string;
  tags?: { [key: string]: string | undefined };
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}
export type ConnectorID = string;
export interface Connector {
  connectorID?: string;
  name?: string;
  ssmInstanceID?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}
export type PostLaunchActionsDeploymentType = string;
export type S3LogBucketName = string;
export type SsmDocumentName = string;
export type StrictlyPositiveInteger = number;
export type SsmDocumentParameterName = string;
export type SsmParameterStoreParameterType = string;
export type SsmParameterStoreParameterName = string;
export interface SsmParameterStoreParameter {
  parameterType: string;
  parameterName: string;
}
export type SsmParameterStoreParameters = SsmParameterStoreParameter[];
export type SsmDocumentParameters = { [key: string]: SsmParameterStoreParameter[] | undefined };
export type JmesPathString = string;
export type SsmExternalParameter = { dynamicPath: string };
export type SsmDocumentExternalParameters = { [key: string]: SsmExternalParameter | undefined };
export interface SsmDocument {
  actionName: string;
  ssmDocumentName: string;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: { [key: string]: SsmParameterStoreParameter[] | undefined };
  externalParameters?: { [key: string]: SsmExternalParameter | undefined };
}
export type SsmDocuments = SsmDocument[];
export interface PostLaunchActions {
  deployment?: string;
  s3LogBucket?: string;
  s3OutputKeyPrefix?: string;
  cloudWatchLogGroupName?: string;
  ssmDocuments?: SsmDocument[];
}
export type LaunchDisposition = string;
export type TargetInstanceTypeRightSizingMethod = string;
export interface Licensing {
  osByol?: boolean;
}
export type BootMode = string;
export type VolumeType = string;
export type Iops = number;
export type Throughput = number;
export type VolumeInitializationRate = number;
export interface LaunchTemplateDiskConf {
  volumeType?: string;
  iops?: number;
  throughput?: number;
  volumeInitializationRate?: number;
  deleteOnTermination?: boolean;
}
export type KmsKeyArn = string;
export interface CreateLaunchConfigurationTemplateRequest {
  postLaunchActions?: PostLaunchActions;
  enableMapAutoTagging?: boolean;
  mapAutoTaggingMpeID?: string;
  tags?: { [key: string]: string | undefined };
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  associatePublicIpAddress?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  bootMode?: string;
  smallVolumeMaxSize?: number;
  smallVolumeConf?: LaunchTemplateDiskConf;
  largeVolumeConf?: LaunchTemplateDiskConf;
  enableParametersEncryption?: boolean;
  parametersEncryptionKey?: string;
}
export type LaunchConfigurationTemplateID = string;
export type EC2LaunchConfigurationTemplateID = string;
export interface LaunchConfigurationTemplate {
  launchConfigurationTemplateID: string;
  arn?: string;
  postLaunchActions?: PostLaunchActions;
  enableMapAutoTagging?: boolean;
  mapAutoTaggingMpeID?: string;
  tags?: { [key: string]: string | undefined };
  ec2LaunchTemplateID?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  associatePublicIpAddress?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  bootMode?: string;
  smallVolumeMaxSize?: number;
  smallVolumeConf?: LaunchTemplateDiskConf;
  largeVolumeConf?: LaunchTemplateDiskConf;
  enableParametersEncryption?: boolean;
  parametersEncryptionKey?: string;
}
export type NetworkMigrationDefinitionName = string;
export type NetworkMigrationDefinitionDescription = string;
export type SourceEnvironment = string;
export type S3KeyName = string;
export interface SourceS3Configuration {
  s3Bucket: string;
  s3BucketOwner: string;
  s3Key: string;
}
export interface SourceConfiguration {
  sourceEnvironment: string;
  sourceS3Configuration: SourceS3Configuration;
}
export type SourceConfigurationList = SourceConfiguration[];
export interface TargetS3Configuration {
  s3Bucket: string;
  s3BucketOwner: string;
}
export type TargetNetworkTopology = string;
export type Cidr = string;
export interface TargetNetwork {
  topology: string;
  inboundCidr?: string;
  outboundCidr?: string;
  inspectionCidr?: string;
}
export type TargetDeployment = string;
export type VpcProvisioningStrategy = string;
export interface CidrMapping {
  originalCidr: string;
  updatedCidr: string;
}
export type CidrMappingsList = CidrMapping[];
export type ScopeTagKey = string;
export type ScopeTagValue = string;
export type ScopeTagsMap = { [key: string]: string | undefined };
export interface CreateNetworkMigrationDefinitionRequest {
  name: string;
  description?: string;
  sourceConfigurations?: SourceConfiguration[];
  targetS3Configuration: TargetS3Configuration;
  targetNetwork: TargetNetwork;
  targetDeployment?: string;
  vpcProvisioningStrategy?: string;
  cidrMappings?: CidrMapping[];
  tags?: { [key: string]: string | undefined };
  scopeTags?: { [key: string]: string | undefined };
}
export type NetworkMigrationDefinitionID = string;
export interface NetworkMigrationDefinition {
  arn?: string;
  networkMigrationDefinitionID?: string;
  name?: string;
  description?: string;
  sourceConfigurations?: SourceConfiguration[];
  targetS3Configuration?: TargetS3Configuration;
  targetNetwork?: TargetNetwork;
  targetDeployment?: string;
  vpcProvisioningStrategy?: string;
  cidrMappings?: CidrMapping[];
  createdAt?: Date;
  updatedAt?: Date;
  tags?: { [key: string]: string | undefined };
  scopeTags?: { [key: string]: string | undefined };
}
export type SubnetID = string;
export type SecurityGroupID = string;
export type ReplicationServersSecurityGroupsIDs = string[];
export type ReplicationConfigurationDefaultLargeStagingDiskType = string;
export type ReplicationConfigurationEbsEncryption = string;
export type BandwidthThrottling = number;
export type ReplicationConfigurationDataPlaneRouting = string;
export type InternetProtocol = string;
export type StorageType = string;
export type StorageVirtualMachineId = string;
export interface FsxOntapConfiguration {
  storageVirtualMachineId: string;
  credentialsSecretArn: string;
}
export interface StorageConfiguration {
  storageType: string;
  fsxOntapConfiguration?: FsxOntapConfiguration;
}
export interface CreateReplicationConfigurationTemplateRequest {
  stagingAreaSubnetId: string;
  associateDefaultSecurityGroup: boolean;
  replicationServersSecurityGroupsIDs: string[];
  replicationServerInstanceType: string;
  useDedicatedReplicationServer: boolean;
  defaultLargeStagingDiskType: string;
  ebsEncryption: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling: number;
  dataPlaneRouting: string;
  createPublicIP: boolean;
  stagingAreaTags: { [key: string]: string | undefined };
  useFipsEndpoint?: boolean;
  tags?: { [key: string]: string | undefined };
  internetProtocol?: string;
  storeSnapshotOnLocalZone?: boolean;
  storageConfiguration?: StorageConfiguration;
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
  useFipsEndpoint?: boolean;
  tags?: { [key: string]: string | undefined };
  internetProtocol?: string;
  storeSnapshotOnLocalZone?: boolean;
  storageConfiguration?: StorageConfiguration;
}
export interface CreateWaveRequest {
  name: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  accountID?: string;
}
export interface DeleteApplicationRequest {
  applicationID: string;
  accountID?: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteConnectorRequest {
  connectorID: string;
}
export interface DeleteConnectorResponse {}
export interface DeleteJobRequest {
  jobID: string;
  accountID?: string;
}
export interface DeleteJobResponse {}
export interface DeleteLaunchConfigurationTemplateRequest {
  launchConfigurationTemplateID: string;
}
export interface DeleteLaunchConfigurationTemplateResponse {}
export interface DeleteNetworkMigrationDefinitionRequest {
  networkMigrationDefinitionID: string;
}
export interface DeleteNetworkMigrationDefinitionResponse {}
export interface DeleteReplicationConfigurationTemplateRequest {
  replicationConfigurationTemplateID: string;
}
export interface DeleteReplicationConfigurationTemplateResponse {}
export interface DeleteSourceServerRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface DeleteSourceServerResponse {}
export interface DeleteVcenterClientRequest {
  vcenterClientID: string;
}
export interface DeleteVcenterClientResponse {}
export interface DeleteWaveRequest {
  waveID: string;
  accountID?: string;
}
export interface DeleteWaveResponse {}
export type MaxResultsType = number;
export type PaginationToken = string;
export interface DescribeJobLogItemsRequest {
  jobID: string;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export type JobLogEvent = string;
export interface JobLogEventData {
  sourceServerID?: string;
  conversionServerID?: string;
  targetInstanceID?: string;
  rawError?: string;
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
  accountID?: string;
}
export type JobType = string;
export type InitiatedBy = string;
export type JobStatus = string;
export type LaunchStatus = string;
export type SsmDocumentType = string;
export type PostLaunchActionExecutionStatus = string;
export interface JobPostLaunchActionsLaunchStatus {
  ssmDocument?: SsmDocument;
  ssmDocumentType?: string;
  executionID?: string;
  executionStatus?: string;
  failureReason?: string;
}
export type PostLaunchActionsLaunchStatusList = JobPostLaunchActionsLaunchStatus[];
export interface PostLaunchActionsStatus {
  ssmAgentDiscoveryDatetime?: string;
  postLaunchActionsLaunchStatusList?: JobPostLaunchActionsLaunchStatus[];
}
export interface ParticipatingServer {
  sourceServerID: string;
  launchStatus?: string;
  launchedEc2InstanceID?: string;
  postLaunchActionsStatus?: PostLaunchActionsStatus;
}
export type ParticipatingServers = ParticipatingServer[];
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
}
export type JobsList = Job[];
export interface DescribeJobsResponse {
  items?: Job[];
  nextToken?: string;
}
export type LaunchConfigurationTemplateIDs = string[];
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
export type DescribeSourceServersRequestFiltersIDs = string[];
export type ReplicationTypes = string[];
export type LifeCycleStates = string[];
export type DescribeSourceServersRequestApplicationIDs = string[];
export interface DescribeSourceServersRequestFilters {
  sourceServerIDs?: string[];
  isArchived?: boolean;
  replicationTypes?: string[];
  lifeCycleStates?: string[];
  applicationIDs?: string[];
}
export interface DescribeSourceServersRequest {
  filters?: DescribeSourceServersRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export type SourceServersList = SourceServer[];
export interface DescribeSourceServersResponse {
  items?: SourceServer[];
  nextToken?: string;
}
export interface DescribeVcenterClientsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface VcenterClient {
  vcenterClientID?: string;
  arn?: string;
  hostname?: string;
  vcenterUUID?: string;
  datacenterName?: string;
  lastSeenDatetime?: string;
  sourceServerTags?: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
}
export type VcenterClientList = VcenterClient[];
export interface DescribeVcenterClientsResponse {
  items?: VcenterClient[];
  nextToken?: string;
}
export interface DisassociateApplicationsRequest {
  waveID: string;
  applicationIDs: string[];
  accountID?: string;
}
export interface DisassociateApplicationsResponse {}
export type DisassociateSourceServersRequestSourceServerIDs = string[];
export interface DisassociateSourceServersRequest {
  applicationID: string;
  sourceServerIDs: string[];
  accountID?: string;
}
export interface DisassociateSourceServersResponse {}
export interface DisconnectFromServiceRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface FinalizeCutoverRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface GetLaunchConfigurationRequest {
  sourceServerID: string;
  accountID?: string;
}
export type SmallBoundedString = string;
export interface LaunchConfiguration {
  sourceServerID?: string;
  name?: string;
  ec2LaunchTemplateID?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  bootMode?: string;
  postLaunchActions?: PostLaunchActions;
  enableMapAutoTagging?: boolean;
  mapAutoTaggingMpeID?: string;
}
export interface GetNetworkMigrationDefinitionRequest {
  networkMigrationDefinitionID: string;
}
export type NetworkMigrationExecutionID = string;
export type SegmentID = string;
export type ConstructID = string;
export interface GetNetworkMigrationMapperSegmentConstructRequest {
  networkMigrationDefinitionID: string;
  networkMigrationExecutionID: string;
  segmentID: string;
  constructID: string;
}
export type NetworkMigrationMapperSegmentConstructType = string;
export type SegmentConstructName = string;
export type SegmentConstructDescription = string;
export type LogicalID = string;
export type ConstructPropertyKey = string;
export type MarshalledResourceDefinition = string;
export type ConstructProperties = { [key: string]: string | undefined };
export interface NetworkMigrationMapperSegmentConstruct {
  constructID?: string;
  constructType?: string;
  name?: string;
  description?: string;
  logicalID?: string;
  excluded?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  properties?: { [key: string]: string | undefined };
}
export interface GetNetworkMigrationMapperSegmentConstructResponse {
  construct?: NetworkMigrationMapperSegmentConstruct;
}
export interface GetReplicationConfigurationRequest {
  sourceServerID: string;
  accountID?: string;
}
export type ReplicationConfigurationReplicatedDiskStagingDiskType = string;
export interface ReplicationConfigurationReplicatedDisk {
  deviceName?: string;
  isBootDisk?: boolean;
  stagingDiskType?: string;
  iops?: number;
  throughput?: number;
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
  useFipsEndpoint?: boolean;
  internetProtocol?: string;
  storeSnapshotOnLocalZone?: boolean;
  storageConfiguration?: StorageConfiguration;
}
export interface InitializeServiceRequest {}
export interface InitializeServiceResponse {}
export type ApplicationIDsFilter = string[];
export type WaveIDsFilter = string[];
export interface ListApplicationsRequestFilters {
  applicationIDs?: string[];
  isArchived?: boolean;
  waveIDs?: string[];
}
export interface ListApplicationsRequest {
  filters?: ListApplicationsRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export type ApplicationsList = Application[];
export interface ListApplicationsResponse {
  items?: Application[];
  nextToken?: string;
}
export type ConnectorIDsFilter = string[];
export interface ListConnectorsRequestFilters {
  connectorIDs?: string[];
}
export interface ListConnectorsRequest {
  filters?: ListConnectorsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type ConnectorsList = Connector[];
export interface ListConnectorsResponse {
  items?: Connector[];
  nextToken?: string;
}
export type ExportID = string;
export interface ListExportErrorsRequest {
  exportID: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ExportErrorData {
  rawError?: string;
}
export interface ExportTaskError {
  errorDateTime?: string;
  errorData?: ExportErrorData;
}
export type ExportErrors = ExportTaskError[];
export interface ListExportErrorsResponse {
  items?: ExportTaskError[];
  nextToken?: string;
}
export type ListExportsRequestFiltersExportIDs = string[];
export interface ListExportsRequestFilters {
  exportIDs?: string[];
}
export interface ListExportsRequest {
  filters?: ListExportsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type S3Key = string;
export type ExportStatus = string;
export interface ExportTaskSummary {
  serversCount?: number;
  applicationsCount?: number;
  wavesCount?: number;
}
export interface ExportTask {
  exportID?: string;
  arn?: string;
  s3Bucket?: string;
  s3Key?: string;
  s3BucketOwner?: string;
  creationDateTime?: string;
  endDateTime?: string;
  status?: string;
  progressPercentage?: number;
  summary?: ExportTaskSummary;
  tags?: { [key: string]: string | undefined };
}
export type ExportsList = ExportTask[];
export interface ListExportsResponse {
  items?: ExportTask[];
  nextToken?: string;
}
export type ImportID = string;
export interface ListImportErrorsRequest {
  importID: string;
  maxResults?: number;
  nextToken?: string;
}
export type ImportErrorType = string;
export interface ImportErrorData {
  sourceServerID?: string;
  applicationID?: string;
  waveID?: string;
  ec2LaunchTemplateID?: string;
  rowNumber?: number;
  rawError?: string;
  accountID?: string;
}
export interface ImportTaskError {
  errorDateTime?: string;
  errorType?: string;
  errorData?: ImportErrorData;
}
export type ImportErrors = ImportTaskError[];
export interface ListImportErrorsResponse {
  items?: ImportTaskError[];
  nextToken?: string;
}
export type ImportFileEnrichmentJobID = string;
export type ImportFileEnrichmentsIDsFilter = string[];
export interface ListImportFileEnrichmentsFilters {
  jobIDs?: string[];
}
export interface ListImportFileEnrichmentsRequest {
  filters?: ListImportFileEnrichmentsFilters;
  maxResults?: number;
  nextToken?: string;
}
export type ImportFileEnrichmentStatus = string;
export type EncryptionAlgorithm = string;
export type Hash = string;
export interface Checksum {
  encryptionAlgorithm?: string;
  hash?: string;
}
export interface EnrichmentTargetS3Configuration {
  s3Bucket: string;
  s3BucketOwner: string;
  s3Key: string;
}
export interface ImportFileEnrichment {
  jobID?: string;
  createdAt?: Date;
  endedAt?: Date;
  status?: string;
  statusDetails?: string;
  checksum?: Checksum;
  s3BucketTarget?: EnrichmentTargetS3Configuration;
}
export type ImportFileEnrichmentsList = ImportFileEnrichment[];
export interface ListImportFileEnrichmentsResponse {
  items?: ImportFileEnrichment[];
  nextToken?: string;
}
export type ImportIDsFilter = string[];
export interface ListImportsRequestFilters {
  importIDs?: string[];
}
export interface ListImportsRequest {
  filters?: ListImportsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface S3BucketSource {
  s3Bucket: string;
  s3Key: string;
  s3BucketOwner?: string;
}
export type ImportStatus = string;
export interface ImportTaskSummaryWaves {
  createdCount?: number;
  modifiedCount?: number;
}
export interface ImportTaskSummaryApplications {
  createdCount?: number;
  modifiedCount?: number;
}
export interface ImportTaskSummaryServers {
  createdCount?: number;
  modifiedCount?: number;
}
export interface ImportTaskSummary {
  waves?: ImportTaskSummaryWaves;
  applications?: ImportTaskSummaryApplications;
  servers?: ImportTaskSummaryServers;
}
export interface ImportTask {
  importID?: string;
  arn?: string;
  s3BucketSource?: S3BucketSource;
  creationDateTime?: string;
  endDateTime?: string;
  status?: string;
  progressPercentage?: number;
  summary?: ImportTaskSummary;
  tags?: { [key: string]: string | undefined };
}
export type ImportList = ImportTask[];
export interface ListImportsResponse {
  items?: ImportTask[];
  nextToken?: string;
}
export interface ListManagedAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ManagedAccount {
  accountId?: string;
}
export type ManagedAccounts = ManagedAccount[];
export interface ListManagedAccountsResponse {
  items: ManagedAccount[];
  nextToken?: string;
}
export type NetworkMigrationJobID = string;
export type ListNetworkMigrationAnalysesIDsFilter = string[];
export interface ListNetworkMigrationAnalysesFilters {
  jobIDs?: string[];
}
export interface ListNetworkMigrationAnalysesRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationAnalysesFilters;
  maxResults?: number;
  nextToken?: string;
}
export type NetworkMigrationJobStatus = string;
export interface NetworkMigrationAnalysisJobDetails {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  createdAt?: Date;
  endedAt?: Date;
  status?: string;
  statusDetails?: string;
}
export type NetworkMigrationAnalysesList = NetworkMigrationAnalysisJobDetails[];
export interface ListNetworkMigrationAnalysesResponse {
  items?: NetworkMigrationAnalysisJobDetails[];
  nextToken?: string;
}
export type VpcID = string;
export type VpcIDsFilter = string[];
export interface ListNetworkMigrationAnalysisResultsFilters {
  vpcIDs?: string[];
}
export interface ListNetworkMigrationAnalysisResultsRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationAnalysisResultsFilters;
  maxResults?: number;
  nextToken?: string;
}
export type AnalyzerType = string;
export interface NetworkMigrationAnalysisResultSource {
  vpcID?: string;
  subnetID?: string;
}
export interface NetworkMigrationAnalysisResultTarget {
  vpcID?: string;
  subnetID?: string;
}
export type NetworkMigrationAnalysisResultStatus = string;
export interface NetworkMigrationAnalysisResult {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  analyzerType?: string;
  source?: NetworkMigrationAnalysisResultSource;
  target?: NetworkMigrationAnalysisResultTarget;
  status?: string;
  analysisResult?: string;
}
export type NetworkMigrationAnalysisResultsList = NetworkMigrationAnalysisResult[];
export interface ListNetworkMigrationAnalysisResultsResponse {
  items?: NetworkMigrationAnalysisResult[];
  nextToken?: string;
}
export type ListNetworkMigrationCodeGenerationsIDsFilter = string[];
export interface ListNetworkMigrationCodeGenerationsFilters {
  jobIDs?: string[];
}
export interface ListNetworkMigrationCodeGenerationsRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationCodeGenerationsFilters;
  maxResults?: number;
  nextToken?: string;
}
export type CodeGenerationOutputFormatType = string;
export type CodeGenerationOutputFormatStatus = string;
export interface CodeGenerationOutputFormatStatusDetails {
  status?: string;
  statusDetailList?: string;
}
export type CodeGenerationOutputFormatStatusDetailsMap = {
  [key: string]: CodeGenerationOutputFormatStatusDetails | undefined;
};
export interface NetworkMigrationCodeGenerationJobDetails {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  createdAt?: Date;
  endedAt?: Date;
  status?: string;
  statusDetails?: string;
  codeGenerationOutputFormatStatusDetailsMap?: {
    [key: string]: CodeGenerationOutputFormatStatusDetails | undefined;
  };
}
export type NetworkMigrationCodeGenerationsList = NetworkMigrationCodeGenerationJobDetails[];
export interface ListNetworkMigrationCodeGenerationsResponse {
  items?: NetworkMigrationCodeGenerationJobDetails[];
  nextToken?: string;
}
export type ListNetworkMigrationCodeGenerationSegmentsIDsFilter = string[];
export interface ListNetworkMigrationCodeGenerationSegmentsFilters {
  segmentIDs?: string[];
}
export interface ListNetworkMigrationCodeGenerationSegmentsRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationCodeGenerationSegmentsFilters;
  maxResults?: number;
  nextToken?: string;
}
export type NetworkMigrationCodeGenerationSegmentType = string;
export type NetworkMigrationCodeGenerationArtifactID = string;
export type NetworkMigrationCodeGenerationArtifactType = string;
export type NetworkMigrationCodeGenerationArtifactSubType = string;
export interface S3Configuration {
  s3Bucket?: string;
  s3BucketOwner?: string;
  s3Key?: string;
}
export interface NetworkMigrationCodeGenerationArtifact {
  artifactID?: string;
  artifactType?: string;
  artifactSubType?: string;
  logicalID?: string;
  outputS3Configuration?: S3Configuration;
  checksum?: Checksum;
  createdAt?: Date;
}
export type NetworkMigrationCodeGenerationArtifacts = NetworkMigrationCodeGenerationArtifact[];
export type ReferencedSegmentsList = string[];
export interface NetworkMigrationCodeGenerationSegment {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  segmentID?: string;
  segmentType?: string;
  logicalID?: string;
  mapperSegmentID?: string;
  artifacts?: NetworkMigrationCodeGenerationArtifact[];
  referencedSegments?: string[];
  createdAt?: Date;
}
export type NetworkMigrationCodeGenerationSegmentsList = NetworkMigrationCodeGenerationSegment[];
export interface ListNetworkMigrationCodeGenerationSegmentsResponse {
  items?: NetworkMigrationCodeGenerationSegment[];
  nextToken?: string;
}
export type NetworkMigrationDefintionsIDsFilter = string[];
export interface ListNetworkMigrationDefinitionsRequestFilters {
  networkMigrationDefinitionIDs?: string[];
}
export interface ListNetworkMigrationDefinitionsRequest {
  filters?: ListNetworkMigrationDefinitionsRequestFilters;
  nextToken?: string;
  maxResults?: number;
}
export interface NetworkMigrationDefinitionSummary {
  networkMigrationDefinitionID?: string;
  name?: string;
  sourceEnvironment?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
  scopeTags?: { [key: string]: string | undefined };
}
export type NetworkMigrationDefinitionSummariesList = NetworkMigrationDefinitionSummary[];
export interface ListNetworkMigrationDefinitionsResponse {
  items?: NetworkMigrationDefinitionSummary[];
  nextToken?: string;
}
export interface ListNetworkMigrationDeployedStacksRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  maxResults?: number;
  nextToken?: string;
}
export type NetworkMigrationDeployedStackStatus = string;
export type PhysicalID = string;
export type NetworkMigrationFailedResourceStatus = string;
export interface NetworkMigrationFailedResourceDetails {
  logicalID?: string;
  status?: string;
  statusReason?: string;
}
export type NetworkMigrationFailedResourcesList = NetworkMigrationFailedResourceDetails[];
export interface NetworkMigrationDeployedStackDetails {
  status?: string;
  stackPhysicalID?: string;
  stackLogicalID?: string;
  segmentID?: string;
  targetAccount?: string;
  failedResources?: NetworkMigrationFailedResourceDetails[];
}
export type NetworkMigrationDeployedStacksList = NetworkMigrationDeployedStackDetails[];
export interface ListNetworkMigrationDeployedStacksResponse {
  items?: NetworkMigrationDeployedStackDetails[];
  nextToken?: string;
}
export type ListNetworkMigrationDeployerJobIDsFilters = string[];
export interface ListNetworkMigrationDeployerJobFilters {
  jobIDs?: string[];
}
export interface ListNetworkMigrationDeploymentsRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationDeployerJobFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface NetworkMigrationDeployerJobDetails {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  createdAt?: Date;
  endedAt?: Date;
  status?: string;
  statusDetails?: string;
}
export type NetworkMigrationDeployerJobList = NetworkMigrationDeployerJobDetails[];
export interface ListNetworkMigrationDeployerJobResponse {
  items?: NetworkMigrationDeployerJobDetails[];
  nextToken?: string;
}
export type NetworkMigrationExecutionIDsFilter = string[];
export type ExecutionStatus = string;
export type NetworkMigrationExecutionStatusesFilter = string[];
export interface ListNetworkMigrationExecutionRequestFilters {
  networkMigrationExecutionIDs?: string[];
  networkMigrationExecutionStatuses?: string[];
}
export interface ListNetworkMigrationExecutionsRequest {
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationExecutionRequestFilters;
  nextToken?: string;
  maxResults?: number;
}
export type ExecutionStage = string;
export type ExecutionStageActivity = string;
export interface NetworkMigrationExecution {
  networkMigrationDefinitionID?: string;
  networkMigrationExecutionID?: string;
  status?: string;
  stage?: string;
  activity?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tags?: { [key: string]: string | undefined };
}
export type NetworkMigrationExecutionsList = NetworkMigrationExecution[];
export interface ListNetworkMigrationExecutionsResponse {
  items?: NetworkMigrationExecution[];
  nextToken?: string;
}
export type ListNetworkMigrationMapperSegmentConstructsIDsFilter = string[];
export type ListNetworkMigrationMapperSegmentConstructTypesFilter = string[];
export interface ListNetworkMigrationMapperSegmentConstructsFilters {
  constructIDs?: string[];
  constructTypes?: string[];
}
export interface ListNetworkMigrationMapperSegmentConstructsRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  segmentID: string;
  filters?: ListNetworkMigrationMapperSegmentConstructsFilters;
  maxResults?: number;
  nextToken?: string;
}
export type NetworkMigrationMapperSegmentConstructs = NetworkMigrationMapperSegmentConstruct[];
export interface ListNetworkMigrationMapperSegmentConstructsResponse {
  items?: NetworkMigrationMapperSegmentConstruct[];
  nextToken?: string;
}
export type ListNetworkMigrationMapperSegmentsIDsFilter = string[];
export interface ListNetworkMigrationMapperSegmentsFilters {
  segmentIDs?: string[];
}
export interface ListNetworkMigrationMapperSegmentsRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationMapperSegmentsFilters;
  maxResults?: number;
  nextToken?: string;
}
export type NetworkMigrationMapperSegmentType = string;
export type SegmentName = string;
export type SegmentDescription = string;
export interface NetworkMigrationMapperSegment {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  segmentID?: string;
  segmentType?: string;
  name?: string;
  description?: string;
  logicalID?: string;
  checksum?: Checksum;
  outputS3Configuration?: S3Configuration;
  createdAt?: Date;
  updatedAt?: Date;
  scopeTags?: { [key: string]: string | undefined };
  targetAccount?: string;
  referencedSegments?: string[];
}
export type NetworkMigrationMapperSegmentsList = NetworkMigrationMapperSegment[];
export interface ListNetworkMigrationMapperSegmentsResponse {
  items?: NetworkMigrationMapperSegment[];
  nextToken?: string;
}
export type ListNetworkMigrationMappingsIDsFilter = string[];
export interface ListNetworkMigrationMappingsFilters {
  jobIDs?: string[];
}
export interface ListNetworkMigrationMappingsRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationMappingsFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface NetworkMigrationMappingJobDetails {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  createdAt?: Date;
  endedAt?: Date;
  status?: string;
  statusDetails?: string;
}
export type NetworkMigrationMappingsList = NetworkMigrationMappingJobDetails[];
export interface ListNetworkMigrationMappingsResponse {
  items?: NetworkMigrationMappingJobDetails[];
  nextToken?: string;
}
export type ListNetworkMigrationMappingUpdatesIDsFilter = string[];
export interface ListNetworkMigrationMappingUpdatesFilters {
  jobIDs?: string[];
}
export interface ListNetworkMigrationMappingUpdatesRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  filters?: ListNetworkMigrationMappingUpdatesFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface NetworkMigrationMappingUpdateJobDetails {
  jobID?: string;
  networkMigrationExecutionID?: string;
  networkMigrationDefinitionID?: string;
  createdAt?: Date;
  endedAt?: Date;
  status?: string;
  statusDetails?: string;
}
export type NetworkMigrationMappingUpdatesList = NetworkMigrationMappingUpdateJobDetails[];
export interface ListNetworkMigrationMappingUpdatesResponse {
  items?: NetworkMigrationMappingUpdateJobDetails[];
  nextToken?: string;
}
export type ActionID = string;
export type ActionIDs = string[];
export interface SourceServerActionsRequestFilters {
  actionIDs?: string[];
}
export interface ListSourceServerActionsRequest {
  sourceServerID: string;
  filters?: SourceServerActionsRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export type ActionName = string;
export type OrderType = number;
export type DocumentVersion = string;
export type ActionDescription = string;
export type ActionCategory = string;
export interface SourceServerActionDocument {
  actionID?: string;
  actionName?: string;
  documentIdentifier?: string;
  order?: number;
  documentVersion?: string;
  active?: boolean;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: { [key: string]: SsmParameterStoreParameter[] | undefined };
  externalParameters?: { [key: string]: SsmExternalParameter | undefined };
  description?: string;
  category?: string;
}
export type SourceServerActionDocuments = SourceServerActionDocument[];
export interface ListSourceServerActionsResponse {
  items?: SourceServerActionDocument[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface TemplateActionsRequestFilters {
  actionIDs?: string[];
}
export interface ListTemplateActionsRequest {
  launchConfigurationTemplateID: string;
  filters?: TemplateActionsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export type OperatingSystemString = string;
export interface TemplateActionDocument {
  actionID?: string;
  actionName?: string;
  documentIdentifier?: string;
  order?: number;
  documentVersion?: string;
  active?: boolean;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: { [key: string]: SsmParameterStoreParameter[] | undefined };
  operatingSystem?: string;
  externalParameters?: { [key: string]: SsmExternalParameter | undefined };
  description?: string;
  category?: string;
}
export type TemplateActionDocuments = TemplateActionDocument[];
export interface ListTemplateActionsResponse {
  items?: TemplateActionDocument[];
  nextToken?: string;
}
export interface ListWavesRequestFilters {
  waveIDs?: string[];
  isArchived?: boolean;
}
export interface ListWavesRequest {
  filters?: ListWavesRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export type WavesList = Wave[];
export interface ListWavesResponse {
  items?: Wave[];
  nextToken?: string;
}
export interface MarkAsArchivedRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface PauseReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface PutSourceServerActionRequest {
  sourceServerID: string;
  actionName: string;
  documentIdentifier: string;
  order: number;
  actionID: string;
  documentVersion?: string;
  active?: boolean;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: { [key: string]: SsmParameterStoreParameter[] | undefined };
  externalParameters?: { [key: string]: SsmExternalParameter | undefined };
  description?: string;
  category?: string;
  accountID?: string;
}
export interface PutTemplateActionRequest {
  launchConfigurationTemplateID: string;
  actionName: string;
  documentIdentifier: string;
  order: number;
  actionID: string;
  documentVersion?: string;
  active?: boolean;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: { [key: string]: SsmParameterStoreParameter[] | undefined };
  operatingSystem?: string;
  externalParameters?: { [key: string]: SsmExternalParameter | undefined };
  description?: string;
  category?: string;
}
export interface RemoveSourceServerActionRequest {
  sourceServerID: string;
  actionID: string;
  accountID?: string;
}
export interface RemoveSourceServerActionResponse {}
export interface RemoveTemplateActionRequest {
  launchConfigurationTemplateID: string;
  actionID: string;
}
export interface RemoveTemplateActionResponse {}
export interface ResumeReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface RetryDataReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export type StartCutoverRequestSourceServerIDs = string[];
export interface StartCutoverRequest {
  sourceServerIDs: string[];
  tags?: { [key: string]: string | undefined };
  accountID?: string;
}
export interface StartCutoverResponse {
  job?: Job;
}
export interface StartExportRequest {
  s3Bucket: string;
  s3Key: string;
  s3BucketOwner?: string;
  tags?: { [key: string]: string | undefined };
}
export interface StartExportResponse {
  exportTask?: ExportTask;
}
export type ClientIdempotencyToken = string;
export interface StartImportRequest {
  clientToken?: string;
  s3BucketSource: S3BucketSource;
  tags?: { [key: string]: string | undefined };
}
export interface StartImportResponse {
  importTask?: ImportTask;
}
export interface EnrichmentSourceS3Configuration {
  s3Bucket: string;
  s3BucketOwner: string;
  s3Key: string;
}
export type IpAssignmentStrategy = string;
export interface StartImportFileEnrichmentRequest {
  clientToken?: string;
  s3BucketSource: EnrichmentSourceS3Configuration;
  s3BucketTarget: EnrichmentTargetS3Configuration;
  ipAssignmentStrategy?: string;
}
export interface StartImportFileEnrichmentResponse {
  jobID?: string;
}
export interface StartNetworkMigrationAnalysisRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
}
export interface StartNetworkMigrationAnalysisResponse {
  jobID?: string;
}
export type CodeGenerationOutputFormatTypes = string[];
export interface StartNetworkMigrationCodeGenerationRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  codeGenerationOutputFormatTypes?: string[];
}
export interface StartNetworkMigrationCodeGenerationResponse {
  jobID?: string;
}
export interface StartNetworkMigrationDeploymentRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
}
export interface StartNetworkMigrationDeployerJobResponse {
  jobID?: string;
}
export type SecurityGroupMappingStrategy = string;
export interface StartNetworkMigrationMappingRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  securityGroupMappingStrategy?: string;
}
export interface StartNetworkMigrationMappingResponse {
  jobID?: string;
}
export interface MergeConstruct {
  segmentID?: string;
  constructID?: string;
}
export type MergeConstructs = MergeConstruct[];
export interface MergeOperation {
  mergeConstructs?: MergeConstruct[];
}
export type CidrBlock = string;
export interface SplitConstruct {
  cidrBlock?: string;
}
export type SplitConstructs = SplitConstruct[];
export interface SplitOperation {
  splitConstructs?: SplitConstruct[];
}
export interface DeleteOperation {}
export interface UpdateOperation {
  name?: string;
  excluded?: boolean;
  properties?: { [key: string]: string | undefined };
}
export type OperationUnion =
  | { merge: MergeOperation; split?: never; delete?: never; update?: never }
  | { merge?: never; split: SplitOperation; delete?: never; update?: never }
  | { merge?: never; split?: never; delete: DeleteOperation; update?: never }
  | { merge?: never; split?: never; delete?: never; update: UpdateOperation };
export interface StartNetworkMigrationMappingUpdateConstruct {
  segmentID: string;
  constructID: string;
  constructType: string;
  operation?: OperationUnion;
}
export type StartNetworkMigrationMappingUpdateConstructs =
  StartNetworkMigrationMappingUpdateConstruct[];
export interface StartNetworkMigrationMappingUpdateSegment {
  segmentID: string;
  targetAccount?: string;
  scopeTags?: { [key: string]: string | undefined };
}
export type StartNetworkMigrationMappingUpdateSegments =
  StartNetworkMigrationMappingUpdateSegment[];
export interface StartNetworkMigrationMappingUpdateRequest {
  networkMigrationExecutionID: string;
  networkMigrationDefinitionID: string;
  constructs?: StartNetworkMigrationMappingUpdateConstruct[];
  segments?: StartNetworkMigrationMappingUpdateSegment[];
}
export interface StartNetworkMigrationMappingUpdateResponse {
  jobID?: string;
}
export interface StartReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export type StartTestRequestSourceServerIDs = string[];
export interface StartTestRequest {
  sourceServerIDs: string[];
  tags?: { [key: string]: string | undefined };
  accountID?: string;
}
export interface StartTestResponse {
  job?: Job;
}
export interface StopReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TerminateTargetInstancesRequestSourceServerIDs = string[];
export interface TerminateTargetInstancesRequest {
  sourceServerIDs: string[];
  tags?: { [key: string]: string | undefined };
  accountID?: string;
}
export interface TerminateTargetInstancesResponse {
  job?: Job;
}
export interface UnarchiveApplicationRequest {
  applicationID: string;
  accountID?: string;
}
export interface UnarchiveWaveRequest {
  waveID: string;
  accountID?: string;
}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  applicationID: string;
  name?: string;
  description?: string;
  accountID?: string;
}
export interface UpdateConnectorRequest {
  connectorID: string;
  name?: string;
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}
export interface UpdateLaunchConfigurationRequest {
  sourceServerID: string;
  name?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  bootMode?: string;
  postLaunchActions?: PostLaunchActions;
  enableMapAutoTagging?: boolean;
  mapAutoTaggingMpeID?: string;
  accountID?: string;
}
export interface UpdateLaunchConfigurationTemplateRequest {
  launchConfigurationTemplateID: string;
  postLaunchActions?: PostLaunchActions;
  enableMapAutoTagging?: boolean;
  mapAutoTaggingMpeID?: string;
  launchDisposition?: string;
  targetInstanceTypeRightSizingMethod?: string;
  copyPrivateIp?: boolean;
  associatePublicIpAddress?: boolean;
  copyTags?: boolean;
  licensing?: Licensing;
  bootMode?: string;
  smallVolumeMaxSize?: number;
  smallVolumeConf?: LaunchTemplateDiskConf;
  largeVolumeConf?: LaunchTemplateDiskConf;
  enableParametersEncryption?: boolean;
  parametersEncryptionKey?: string;
}
export interface TargetS3ConfigurationUpdate {
  s3Bucket?: string;
  s3BucketOwner?: string;
}
export interface TargetNetworkUpdate {
  topology?: string;
  inboundCidr?: string;
  outboundCidr?: string;
  inspectionCidr?: string;
}
export interface UpdateNetworkMigrationDefinitionRequest {
  networkMigrationDefinitionID: string;
  name?: string;
  description?: string;
  sourceConfigurations?: SourceConfiguration[];
  targetS3Configuration?: TargetS3ConfigurationUpdate;
  targetNetwork?: TargetNetworkUpdate;
  targetDeployment?: string;
  vpcProvisioningStrategy?: string;
  cidrMappings?: CidrMapping[];
  scopeTags?: { [key: string]: string | undefined };
}
export interface UpdateNetworkMigrationMapperSegmentRequest {
  networkMigrationDefinitionID: string;
  networkMigrationExecutionID: string;
  segmentID: string;
  scopeTags?: { [key: string]: string | undefined };
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
  useFipsEndpoint?: boolean;
  accountID?: string;
  internetProtocol?: string;
  storeSnapshotOnLocalZone?: boolean;
  storageConfiguration?: StorageConfiguration;
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
  useFipsEndpoint?: boolean;
  internetProtocol?: string;
  storeSnapshotOnLocalZone?: boolean;
  storageConfiguration?: StorageConfiguration;
}
export type FqdnForActionFramework = string;
export interface UpdateSourceServerRequest {
  accountID?: string;
  sourceServerID: string;
  connectorAction?: SourceServerConnectorAction;
  userProvidedID?: string;
  fqdnForActionFramework?: string;
  platform?: string;
}
export interface UpdateSourceServerReplicationTypeRequest {
  sourceServerID: string;
  replicationType: string;
  accountID?: string;
}
export interface UpdateWaveRequest {
  waveID: string;
  name?: string;
  description?: string;
  accountID?: string;
}
export interface ErrorDetails {
  message?: string;
  code?: string;
  resourceId?: string;
  resourceType?: string;
}
export type ConflictExceptionErrors = ErrorDetails[];
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name?: string;
  message?: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type ArchiveApplicationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Archive application.
 */
export const archiveApplication: API.OperationMethod<
  ArchiveApplicationRequest,
  Application,
  ArchiveApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<ArchiveApplicationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<Application>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ArchiveApplication",
}));

export type ArchiveWaveError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Archive wave.
 */
export const archiveWave: API.OperationMethod<
  ArchiveWaveRequest,
  Wave,
  ArchiveWaveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<ArchiveWaveRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<Wave>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ArchiveWave",
}));

export type AssociateApplicationsError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Associate applications to wave.
 */
export const associateApplications: API.OperationMethod<
  AssociateApplicationsRequest,
  AssociateApplicationsResponse,
  AssociateApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8, __c1, 0) as any as S.Schema<AssociateApplicationsRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<AssociateApplicationsResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateApplications",
}));

export type AssociateSourceServersError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Associate source servers to application.
 */
export const associateSourceServers: API.OperationMethod<
  AssociateSourceServersRequest,
  AssociateSourceServersResponse,
  AssociateSourceServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<AssociateSourceServersRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<AssociateSourceServersResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSourceServers",
}));

export type ChangeServerLifeCycleStateError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
 */
export const changeServerLifeCycleState: API.OperationMethod<
  ChangeServerLifeCycleStateRequest,
  SourceServer,
  ChangeServerLifeCycleStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<ChangeServerLifeCycleStateRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ChangeServerLifeCycleState",
}));

export type CreateApplicationError =
  | ConflictException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Create application.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  Application,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<CreateApplicationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<Application>,
  errors: [ConflictException, ServiceQuotaExceededException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateConnectorError =
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Create Connector.
 */
export const createConnector: API.OperationMethod<
  CreateConnectorRequest,
  Connector,
  CreateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<CreateConnectorRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<Connector>,
  errors: [UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnector",
}));

export type CreateLaunchConfigurationTemplateError =
  | AccessDeniedException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Launch Configuration Template.
 */
export const createLaunchConfigurationTemplate: API.OperationMethod<
  CreateLaunchConfigurationTemplateRequest,
  LaunchConfigurationTemplate,
  CreateLaunchConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<CreateLaunchConfigurationTemplateRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<LaunchConfigurationTemplate>,
  errors: [AccessDeniedException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLaunchConfigurationTemplate",
}));

export type CreateNetworkMigrationDefinitionError =
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new network migration definition that specifies the source and target network configuration for a migration.
 */
export const createNetworkMigrationDefinition: API.OperationMethod<
  CreateNetworkMigrationDefinitionRequest,
  NetworkMigrationDefinition,
  CreateNetworkMigrationDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<CreateNetworkMigrationDefinitionRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<NetworkMigrationDefinition>,
  errors: [ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNetworkMigrationDefinition",
}));

export type CreateReplicationConfigurationTemplateError =
  | AccessDeniedException
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
  input: __S(66, __c8, 2) as any as S.Schema<CreateReplicationConfigurationTemplateRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<ReplicationConfigurationTemplate>,
  errors: [AccessDeniedException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReplicationConfigurationTemplate",
}));

export type CreateWaveError =
  | ConflictException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Create wave.
 */
export const createWave: API.OperationMethod<
  CreateWaveRequest,
  Wave,
  CreateWaveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<CreateWaveRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<Wave>,
  errors: [ConflictException, ServiceQuotaExceededException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWave",
}));

export type DeleteApplicationError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Delete application.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DeleteApplicationResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteConnectorError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Delete Connector.
 */
export const deleteConnector: API.OperationMethod<
  DeleteConnectorRequest,
  DeleteConnectorResponse,
  DeleteConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<DeleteConnectorRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DeleteConnectorResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnector",
}));

export type DeleteJobError =
  | ConflictException
  | ResourceNotFoundException
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
  input: __S(71, __c8, 7) as any as S.Schema<DeleteJobRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DeleteJobResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJob",
}));

export type DeleteLaunchConfigurationTemplateError =
  | ConflictException
  | ResourceNotFoundException
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
  input: __S(72, __c9, 0) as any as S.Schema<DeleteLaunchConfigurationTemplateRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DeleteLaunchConfigurationTemplateResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLaunchConfigurationTemplate",
}));

export type DeleteNetworkMigrationDefinitionError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a network migration definition. This operation removes the migration definition and all associated metadata.
 */
export const deleteNetworkMigrationDefinition: API.OperationMethod<
  DeleteNetworkMigrationDefinitionRequest,
  DeleteNetworkMigrationDefinitionResponse,
  DeleteNetworkMigrationDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<DeleteNetworkMigrationDefinitionRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DeleteNetworkMigrationDefinitionResponse>,
  errors: [AccessDeniedException, ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNetworkMigrationDefinition",
}));

export type DeleteReplicationConfigurationTemplateError =
  | ConflictException
  | ResourceNotFoundException
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
  input: __S(75, __c9, 3) as any as S.Schema<DeleteReplicationConfigurationTemplateRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DeleteReplicationConfigurationTemplateResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReplicationConfigurationTemplate",
}));

export type DeleteSourceServerError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Deletes a single source server by ID.
 */
export const deleteSourceServer: API.OperationMethod<
  DeleteSourceServerRequest,
  DeleteSourceServerResponse,
  DeleteSourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<DeleteSourceServerRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DeleteSourceServerResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSourceServer",
}));

export type DeleteVcenterClientError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a given vCenter client by ID.
 */
export const deleteVcenterClient: API.OperationMethod<
  DeleteVcenterClientRequest,
  DeleteVcenterClientResponse,
  DeleteVcenterClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<DeleteVcenterClientRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DeleteVcenterClientResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVcenterClient",
}));

export type DeleteWaveError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Delete wave.
 */
export const deleteWave: API.OperationMethod<
  DeleteWaveRequest,
  DeleteWaveResponse,
  DeleteWaveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<DeleteWaveRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DeleteWaveResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWave",
}));

export type DescribeJobLogItemsError =
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed job log items with paging.
 */
export const describeJobLogItems: API.PaginatedOperationMethod<
  DescribeJobLogItemsRequest,
  DescribeJobLogItemsResponse,
  DescribeJobLogItemsError,
  Credentials | HttpClient.HttpClient,
  JobLog
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<DescribeJobLogItemsRequest>,
  output: __S(83, __c10, 3) as any as S.Schema<DescribeJobLogItemsResponse>,
  errors: [UninitializedAccountException, ValidationException],
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

export type DescribeJobsError = UninitializedAccountException | ValidationException | CommonErrors;
/**
 * Returns a list of Jobs. Use the jobIDs and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDateTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
 */
export const describeJobs: API.PaginatedOperationMethod<
  DescribeJobsRequest,
  DescribeJobsResponse,
  DescribeJobsError,
  Credentials | HttpClient.HttpClient,
  Job
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<DescribeJobsRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<DescribeJobsResponse>,
  errors: [UninitializedAccountException, ValidationException],
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
  | ResourceNotFoundException
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
  input: __S(94, __c11, 6) as any as S.Schema<DescribeLaunchConfigurationTemplatesRequest>,
  output: __S(96, __c12, 0) as any as S.Schema<DescribeLaunchConfigurationTemplatesResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
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

export type DescribeReplicationConfigurationTemplatesError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Lists all ReplicationConfigurationTemplates, filtered by replication configuration template IDs.
 */
export const describeReplicationConfigurationTemplates: API.PaginatedOperationMethod<
  DescribeReplicationConfigurationTemplatesRequest,
  DescribeReplicationConfigurationTemplatesResponse,
  DescribeReplicationConfigurationTemplatesError,
  Credentials | HttpClient.HttpClient,
  ReplicationConfigurationTemplate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<DescribeReplicationConfigurationTemplatesRequest>,
  output: __S(99, __c12, 3) as any as S.Schema<DescribeReplicationConfigurationTemplatesResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
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

export type DescribeSourceServersError =
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves all SourceServers or multiple SourceServers by ID.
 */
export const describeSourceServers: API.PaginatedOperationMethod<
  DescribeSourceServersRequest,
  DescribeSourceServersResponse,
  DescribeSourceServersError,
  Credentials | HttpClient.HttpClient,
  SourceServer
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<DescribeSourceServersRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<DescribeSourceServersResponse>,
  errors: [UninitializedAccountException, ValidationException],
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

export type DescribeVcenterClientsError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the installed vCenter clients.
 */
export const describeVcenterClients: API.PaginatedOperationMethod<
  DescribeVcenterClientsRequest,
  DescribeVcenterClientsResponse,
  DescribeVcenterClientsError,
  Credentials | HttpClient.HttpClient,
  VcenterClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(104, __c13, 0) as any as S.Schema<DescribeVcenterClientsRequest>,
  output: __S(107, __c13, 3) as any as S.Schema<DescribeVcenterClientsResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVcenterClients",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DisassociateApplicationsError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Disassociate applications from wave.
 */
export const disassociateApplications: API.OperationMethod<
  DisassociateApplicationsRequest,
  DisassociateApplicationsResponse,
  DisassociateApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<DisassociateApplicationsRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DisassociateApplicationsResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateApplications",
}));

export type DisassociateSourceServersError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Disassociate source servers from application.
 */
export const disassociateSourceServers: API.OperationMethod<
  DisassociateSourceServersRequest,
  DisassociateSourceServersResponse,
  DisassociateSourceServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<DisassociateSourceServersRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DisassociateSourceServersResponse>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateSourceServers",
}));

export type DisconnectFromServiceError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with Application Migration Service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
 */
export const disconnectFromService: API.OperationMethod<
  DisconnectFromServiceRequest,
  SourceServer,
  DisconnectFromServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<DisconnectFromServiceRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisconnectFromService",
}));

export type FinalizeCutoverError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
 */
export const finalizeCutover: API.OperationMethod<
  FinalizeCutoverRequest,
  SourceServer,
  FinalizeCutoverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<FinalizeCutoverRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FinalizeCutover",
}));

export type GetLaunchConfigurationError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Lists all LaunchConfigurations available, filtered by Source Server IDs.
 */
export const getLaunchConfiguration: API.OperationMethod<
  GetLaunchConfigurationRequest,
  LaunchConfiguration,
  GetLaunchConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<GetLaunchConfigurationRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<LaunchConfiguration>,
  errors: [ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLaunchConfiguration",
}));

export type GetNetworkMigrationDefinitionError =
  | AccessDeniedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the details of a network migration definition including source and target configurations.
 */
export const getNetworkMigrationDefinition: API.OperationMethod<
  GetNetworkMigrationDefinitionRequest,
  NetworkMigrationDefinition,
  GetNetworkMigrationDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<GetNetworkMigrationDefinitionRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<NetworkMigrationDefinition>,
  errors: [AccessDeniedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkMigrationDefinition",
}));

export type GetNetworkMigrationMapperSegmentConstructError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific construct within a mapper segment, including its properties and configuration data.
 */
export const getNetworkMigrationMapperSegmentConstruct: API.OperationMethod<
  GetNetworkMigrationMapperSegmentConstructRequest,
  GetNetworkMigrationMapperSegmentConstructResponse,
  GetNetworkMigrationMapperSegmentConstructError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<GetNetworkMigrationMapperSegmentConstructRequest>,
  output: __S(117, __c14, 5) as any as S.Schema<GetNetworkMigrationMapperSegmentConstructResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkMigrationMapperSegmentConstruct",
}));

export type GetReplicationConfigurationError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Lists all ReplicationConfigurations, filtered by Source Server ID.
 */
export const getReplicationConfiguration: API.OperationMethod<
  GetReplicationConfigurationRequest,
  ReplicationConfiguration,
  GetReplicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<GetReplicationConfigurationRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<ReplicationConfiguration>,
  errors: [ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReplicationConfiguration",
}));

export type InitializeServiceError = AccessDeniedException | ValidationException | CommonErrors;
/**
 * Initialize Application Migration Service.
 */
export const initializeService: API.OperationMethod<
  InitializeServiceRequest,
  InitializeServiceResponse,
  InitializeServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<InitializeServiceRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<InitializeServiceResponse>,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InitializeService",
}));

export type ListApplicationsError = UninitializedAccountException | CommonErrors;
/**
 * Retrieves all applications or multiple applications by ID.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  Application
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<ListApplicationsRequest>,
  output: __S(126, __c15, 6) as any as S.Schema<ListApplicationsResponse>,
  errors: [UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectorsError =
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * List Connectors.
 */
export const listConnectors: API.PaginatedOperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient,
  Connector
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<ListConnectorsRequest>,
  output: __S(130, __c16, 2) as any as S.Schema<ListConnectorsResponse>,
  errors: [UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExportErrorsError =
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * List export errors.
 */
export const listExportErrors: API.PaginatedOperationMethod<
  ListExportErrorsRequest,
  ListExportErrorsResponse,
  ListExportErrorsError,
  Credentials | HttpClient.HttpClient,
  ExportTaskError
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<ListExportErrorsRequest>,
  output: __S(135, __c16, 7) as any as S.Schema<ListExportErrorsResponse>,
  errors: [UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExportErrors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExportsError = UninitializedAccountException | CommonErrors;
/**
 * List exports.
 */
export const listExports: API.PaginatedOperationMethod<
  ListExportsRequest,
  ListExportsResponse,
  ListExportsError,
  Credentials | HttpClient.HttpClient,
  ExportTask
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<ListExportsRequest>,
  output: __S(141, __c17, 5) as any as S.Schema<ListExportsResponse>,
  errors: [UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImportErrorsError =
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * List import errors.
 */
export const listImportErrors: API.PaginatedOperationMethod<
  ListImportErrorsRequest,
  ListImportErrorsResponse,
  ListImportErrorsError,
  Credentials | HttpClient.HttpClient,
  ImportTaskError
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<ListImportErrorsRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<ListImportErrorsResponse>,
  errors: [UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImportErrors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImportFileEnrichmentsError = ValidationException | CommonErrors;
/**
 * Lists import file enrichment jobs with optional filtering by job IDs.
 */
export const listImportFileEnrichments: API.PaginatedOperationMethod<
  ListImportFileEnrichmentsRequest,
  ListImportFileEnrichmentsResponse,
  ListImportFileEnrichmentsError,
  Credentials | HttpClient.HttpClient,
  ImportFileEnrichment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(148, __c18, 4) as any as S.Schema<ListImportFileEnrichmentsRequest>,
  output: __S(153, __c19, 1) as any as S.Schema<ListImportFileEnrichmentsResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImportFileEnrichments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImportsError = UninitializedAccountException | ValidationException | CommonErrors;
/**
 * List imports.
 */
export const listImports: API.PaginatedOperationMethod<
  ListImportsRequest,
  ListImportsResponse,
  ListImportsError,
  Credentials | HttpClient.HttpClient,
  ImportTask
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<ListImportsRequest>,
  output: __S(162, __c20, 2) as any as S.Schema<ListImportsResponse>,
  errors: [UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedAccountsError =
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * List Managed Accounts.
 */
export const listManagedAccounts: API.PaginatedOperationMethod<
  ListManagedAccountsRequest,
  ListManagedAccountsResponse,
  ListManagedAccountsError,
  Credentials | HttpClient.HttpClient,
  ManagedAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<ListManagedAccountsRequest>,
  output: __S(166, __c20, 6) as any as S.Schema<ListManagedAccountsResponse>,
  errors: [UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationAnalysesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists network migration analysis jobs for a specified execution. Returns information about analysis job status and results.
 */
export const listNetworkMigrationAnalyses: API.PaginatedOperationMethod<
  ListNetworkMigrationAnalysesRequest,
  ListNetworkMigrationAnalysesResponse,
  ListNetworkMigrationAnalysesError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationAnalysisJobDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<ListNetworkMigrationAnalysesRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<ListNetworkMigrationAnalysesResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationAnalyses",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationAnalysisResultsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the results of network migration analyses, showing connectivity and compatibility findings for migrated resources.
 */
export const listNetworkMigrationAnalysisResults: API.PaginatedOperationMethod<
  ListNetworkMigrationAnalysisResultsRequest,
  ListNetworkMigrationAnalysisResultsResponse,
  ListNetworkMigrationAnalysisResultsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationAnalysisResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(172, __c21, 4) as any as S.Schema<ListNetworkMigrationAnalysisResultsRequest>,
  output: __S(176, __c22, 0) as any as S.Schema<ListNetworkMigrationAnalysisResultsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationAnalysisResults",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationCodeGenerationsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists network migration code generation jobs, which convert network mappings into infrastructure-as-code templates.
 */
export const listNetworkMigrationCodeGenerations: API.PaginatedOperationMethod<
  ListNetworkMigrationCodeGenerationsRequest,
  ListNetworkMigrationCodeGenerationsResponse,
  ListNetworkMigrationCodeGenerationsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationCodeGenerationJobDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(177, __c22, 1) as any as S.Schema<ListNetworkMigrationCodeGenerationsRequest>,
  output: __S(182, __c22, 6) as any as S.Schema<ListNetworkMigrationCodeGenerationsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationCodeGenerations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationCodeGenerationSegmentsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists code generation segments, which represent individual infrastructure components generated as code templates.
 */
export const listNetworkMigrationCodeGenerationSegments: API.PaginatedOperationMethod<
  ListNetworkMigrationCodeGenerationSegmentsRequest,
  ListNetworkMigrationCodeGenerationSegmentsResponse,
  ListNetworkMigrationCodeGenerationSegmentsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationCodeGenerationSegment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<ListNetworkMigrationCodeGenerationSegmentsRequest>,
  output: __S(190, __c23, 6) as any as S.Schema<ListNetworkMigrationCodeGenerationSegmentsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationCodeGenerationSegments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationDefinitionsError = AccessDeniedException | CommonErrors;
/**
 * Lists all network migration definitions in the account, with optional filtering.
 */
export const listNetworkMigrationDefinitions: API.PaginatedOperationMethod<
  ListNetworkMigrationDefinitionsRequest,
  ListNetworkMigrationDefinitionsResponse,
  ListNetworkMigrationDefinitionsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationDefinitionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(192, __c24, 0) as any as S.Schema<ListNetworkMigrationDefinitionsRequest>,
  output: __S(195, __c24, 3) as any as S.Schema<ListNetworkMigrationDefinitionsResponse>,
  errors: [AccessDeniedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationDefinitions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationDeployedStacksError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists CloudFormation stacks that have been deployed as part of the network migration.
 */
export const listNetworkMigrationDeployedStacks: API.PaginatedOperationMethod<
  ListNetworkMigrationDeployedStacksRequest,
  ListNetworkMigrationDeployedStacksResponse,
  ListNetworkMigrationDeployedStacksError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationDeployedStackDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<ListNetworkMigrationDeployedStacksRequest>,
  output: __S(201, __c25, 1) as any as S.Schema<ListNetworkMigrationDeployedStacksResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationDeployedStacks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationDeploymentsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists network migration deployment jobs and their current status.
 */
export const listNetworkMigrationDeployments: API.PaginatedOperationMethod<
  ListNetworkMigrationDeploymentsRequest,
  ListNetworkMigrationDeployerJobResponse,
  ListNetworkMigrationDeploymentsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationDeployerJobDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(202, __c25, 2) as any as S.Schema<ListNetworkMigrationDeploymentsRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<ListNetworkMigrationDeployerJobResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationDeployments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationExecutionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists network migration execution instances for a given definition, showing the status and progress of each execution.
 */
export const listNetworkMigrationExecutions: API.PaginatedOperationMethod<
  ListNetworkMigrationExecutionsRequest,
  ListNetworkMigrationExecutionsResponse,
  ListNetworkMigrationExecutionsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationExecution
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(204, __c25, 4) as any as S.Schema<ListNetworkMigrationExecutionsRequest>,
  output: __S(207, __c25, 7) as any as S.Schema<ListNetworkMigrationExecutionsResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationMapperSegmentConstructsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists constructs within a mapper segment, representing individual infrastructure components like VPCs, subnets, or security groups.
 */
export const listNetworkMigrationMapperSegmentConstructs: API.PaginatedOperationMethod<
  ListNetworkMigrationMapperSegmentConstructsRequest,
  ListNetworkMigrationMapperSegmentConstructsResponse,
  ListNetworkMigrationMapperSegmentConstructsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationMapperSegmentConstruct
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<ListNetworkMigrationMapperSegmentConstructsRequest>,
  output: __S(
    212,
    __c26,
    4,
  ) as any as S.Schema<ListNetworkMigrationMapperSegmentConstructsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationMapperSegmentConstructs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationMapperSegmentsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists mapper segments, which represent logical groupings of network resources to be migrated together.
 */
export const listNetworkMigrationMapperSegments: API.PaginatedOperationMethod<
  ListNetworkMigrationMapperSegmentsRequest,
  ListNetworkMigrationMapperSegmentsResponse,
  ListNetworkMigrationMapperSegmentsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationMapperSegment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(213, __c26, 5) as any as S.Schema<ListNetworkMigrationMapperSegmentsRequest>,
  output: __S(216, __c27, 0) as any as S.Schema<ListNetworkMigrationMapperSegmentsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationMapperSegments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationMappingsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists network migration mapping jobs, which analyze and create relationships between source and target network resources.
 */
export const listNetworkMigrationMappings: API.PaginatedOperationMethod<
  ListNetworkMigrationMappingsRequest,
  ListNetworkMigrationMappingsResponse,
  ListNetworkMigrationMappingsError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationMappingJobDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(217, __c27, 1) as any as S.Schema<ListNetworkMigrationMappingsRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<ListNetworkMigrationMappingsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationMappings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkMigrationMappingUpdatesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists mapping update jobs, which apply customer modifications to the generated network mappings.
 */
export const listNetworkMigrationMappingUpdates: API.PaginatedOperationMethod<
  ListNetworkMigrationMappingUpdatesRequest,
  ListNetworkMigrationMappingUpdatesResponse,
  ListNetworkMigrationMappingUpdatesError,
  Credentials | HttpClient.HttpClient,
  NetworkMigrationMappingUpdateJobDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(218, __c27, 2) as any as S.Schema<ListNetworkMigrationMappingUpdatesRequest>,
  output: __S(219, __c27, 3) as any as S.Schema<ListNetworkMigrationMappingUpdatesResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkMigrationMappingUpdates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSourceServerActionsError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * List source server post migration custom actions.
 */
export const listSourceServerActions: API.PaginatedOperationMethod<
  ListSourceServerActionsRequest,
  ListSourceServerActionsResponse,
  ListSourceServerActionsError,
  Credentials | HttpClient.HttpClient,
  SourceServerActionDocument
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(221, __c27, 5) as any as S.Schema<ListSourceServerActionsRequest>,
  output: __S(224, __c28, 0) as any as S.Schema<ListSourceServerActionsResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSourceServerActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
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
 * List all tags for your Application Migration Service resources.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(225, __c28, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(226, __c28, 2) as any as S.Schema<ListTagsForResourceResponse>,
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

export type ListTemplateActionsError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * List template post migration custom actions.
 */
export const listTemplateActions: API.PaginatedOperationMethod<
  ListTemplateActionsRequest,
  ListTemplateActionsResponse,
  ListTemplateActionsError,
  Credentials | HttpClient.HttpClient,
  TemplateActionDocument
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(227, __c28, 3) as any as S.Schema<ListTemplateActionsRequest>,
  output: __S(230, __c28, 6) as any as S.Schema<ListTemplateActionsResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplateActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWavesError = UninitializedAccountException | CommonErrors;
/**
 * Retrieves all waves or multiple waves by ID.
 */
export const listWaves: API.PaginatedOperationMethod<
  ListWavesRequest,
  ListWavesResponse,
  ListWavesError,
  Credentials | HttpClient.HttpClient,
  Wave
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(232, __c29, 0) as any as S.Schema<ListWavesRequest>,
  output: __S(234, __c29, 2) as any as S.Schema<ListWavesResponse>,
  errors: [UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWaves",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type MarkAsArchivedError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle state that equals DISCONNECTED or CUTOVER.
 */
export const markAsArchived: API.OperationMethod<
  MarkAsArchivedRequest,
  SourceServer,
  MarkAsArchivedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235, __c29, 3) as any as S.Schema<MarkAsArchivedRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "MarkAsArchived",
}));

export type PauseReplicationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Pause Replication.
 */
export const pauseReplication: API.OperationMethod<
  PauseReplicationRequest,
  SourceServer,
  PauseReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(236, __c29, 4) as any as S.Schema<PauseReplicationRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PauseReplication",
}));

export type PutSourceServerActionError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Put source server post migration custom action.
 */
export const putSourceServerAction: API.OperationMethod<
  PutSourceServerActionRequest,
  SourceServerActionDocument,
  PutSourceServerActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(237, __c29, 5) as any as S.Schema<PutSourceServerActionRequest>,
  output: __S(222, __c27, 6) as any as S.Schema<SourceServerActionDocument>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSourceServerAction",
}));

export type PutTemplateActionError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Put template post migration custom action.
 */
export const putTemplateAction: API.OperationMethod<
  PutTemplateActionRequest,
  TemplateActionDocument,
  PutTemplateActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(238, __c29, 6) as any as S.Schema<PutTemplateActionRequest>,
  output: __S(228, __c28, 4) as any as S.Schema<TemplateActionDocument>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTemplateAction",
}));

export type RemoveSourceServerActionError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Remove source server post migration custom action.
 */
export const removeSourceServerAction: API.OperationMethod<
  RemoveSourceServerActionRequest,
  RemoveSourceServerActionResponse,
  RemoveSourceServerActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239, __c29, 7) as any as S.Schema<RemoveSourceServerActionRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<RemoveSourceServerActionResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveSourceServerAction",
}));

export type RemoveTemplateActionError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Remove template post migration custom action.
 */
export const removeTemplateAction: API.OperationMethod<
  RemoveTemplateActionRequest,
  RemoveTemplateActionResponse,
  RemoveTemplateActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(240, __c30, 0) as any as S.Schema<RemoveTemplateActionRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<RemoveTemplateActionResponse>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTemplateAction",
}));

export type ResumeReplicationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Resume Replication.
 */
export const resumeReplication: API.OperationMethod<
  ResumeReplicationRequest,
  SourceServer,
  ResumeReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<ResumeReplicationRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResumeReplication",
}));

export type RetryDataReplicationError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
 */
export const retryDataReplication: API.OperationMethod<
  RetryDataReplicationRequest,
  SourceServer,
  RetryDataReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(242, __c30, 2) as any as S.Schema<RetryDataReplicationRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetryDataReplication",
}));

export type StartCutoverError =
  | ConflictException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
 */
export const startCutover: API.OperationMethod<
  StartCutoverRequest,
  StartCutoverResponse,
  StartCutoverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243, __c30, 3) as any as S.Schema<StartCutoverRequest>,
  output: __S(244, __c30, 4) as any as S.Schema<StartCutoverResponse>,
  errors: [ConflictException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCutover",
}));

export type StartExportError =
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Start export.
 */
export const startExport: API.OperationMethod<
  StartExportRequest,
  StartExportResponse,
  StartExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245, __c30, 5) as any as S.Schema<StartExportRequest>,
  output: __S(246, __c30, 6) as any as S.Schema<StartExportResponse>,
  errors: [ServiceQuotaExceededException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartExport",
}));

export type StartImportError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Start import.
 */
export const startImport: API.OperationMethod<
  StartImportRequest,
  StartImportResponse,
  StartImportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(247, __c30, 7) as any as S.Schema<StartImportRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<StartImportResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImport",
}));

export type StartImportFileEnrichmentError =
  | AccessDeniedException
  | ConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an import file enrichment job to process and enrich network migration import files with additional metadata and IP assignment strategies.
 */
export const startImportFileEnrichment: API.OperationMethod<
  StartImportFileEnrichmentRequest,
  StartImportFileEnrichmentResponse,
  StartImportFileEnrichmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(249, __c31, 1) as any as S.Schema<StartImportFileEnrichmentRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<StartImportFileEnrichmentResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImportFileEnrichment",
}));

export type StartNetworkMigrationAnalysisError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a network migration analysis job to evaluate connectivity and compatibility of the migration mappings.
 */
export const startNetworkMigrationAnalysis: API.OperationMethod<
  StartNetworkMigrationAnalysisRequest,
  StartNetworkMigrationAnalysisResponse,
  StartNetworkMigrationAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251, __c31, 3) as any as S.Schema<StartNetworkMigrationAnalysisRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<StartNetworkMigrationAnalysisResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartNetworkMigrationAnalysis",
}));

export type StartNetworkMigrationCodeGenerationError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a code generation job to convert network migration mappings into infrastructure-as-code templates.
 */
export const startNetworkMigrationCodeGeneration: API.OperationMethod<
  StartNetworkMigrationCodeGenerationRequest,
  StartNetworkMigrationCodeGenerationResponse,
  StartNetworkMigrationCodeGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(252, __c31, 4) as any as S.Schema<StartNetworkMigrationCodeGenerationRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<StartNetworkMigrationCodeGenerationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartNetworkMigrationCodeGeneration",
}));

export type StartNetworkMigrationDeploymentError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a deployment job to create the target network infrastructure based on the generated code templates.
 */
export const startNetworkMigrationDeployment: API.OperationMethod<
  StartNetworkMigrationDeploymentRequest,
  StartNetworkMigrationDeployerJobResponse,
  StartNetworkMigrationDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(253, __c31, 5) as any as S.Schema<StartNetworkMigrationDeploymentRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<StartNetworkMigrationDeployerJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartNetworkMigrationDeployment",
}));

export type StartNetworkMigrationMappingError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the network migration mapping process for a given network migration execution.
 */
export const startNetworkMigrationMapping: API.OperationMethod<
  StartNetworkMigrationMappingRequest,
  StartNetworkMigrationMappingResponse,
  StartNetworkMigrationMappingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(254, __c31, 6) as any as S.Schema<StartNetworkMigrationMappingRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<StartNetworkMigrationMappingResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartNetworkMigrationMapping",
}));

export type StartNetworkMigrationMappingUpdateError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a job to apply customer modifications to network migration mappings, such as changing properties.
 */
export const startNetworkMigrationMappingUpdate: API.OperationMethod<
  StartNetworkMigrationMappingUpdateRequest,
  StartNetworkMigrationMappingUpdateResponse,
  StartNetworkMigrationMappingUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(267, __c33, 3) as any as S.Schema<StartNetworkMigrationMappingUpdateRequest>,
  output: __S(250, __c31, 2) as any as S.Schema<StartNetworkMigrationMappingUpdateResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartNetworkMigrationMappingUpdate",
}));

export type StartReplicationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Start replication for source server irrespective of its replication type.
 */
export const startReplication: API.OperationMethod<
  StartReplicationRequest,
  SourceServer,
  StartReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(268, __c33, 4) as any as S.Schema<StartReplicationRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReplication",
}));

export type StartTestError =
  | ConflictException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
 */
export const startTest: API.OperationMethod<
  StartTestRequest,
  StartTestResponse,
  StartTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(269, __c33, 5) as any as S.Schema<StartTestRequest>,
  output: __S(244, __c30, 4) as any as S.Schema<StartTestResponse>,
  errors: [ConflictException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTest",
}));

export type StopReplicationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Stop Replication.
 */
export const stopReplication: API.OperationMethod<
  StopReplicationRequest,
  SourceServer,
  StopReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<StopReplicationRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopReplication",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<TagResourceRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<TagResourceResponse>,
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

export type TerminateTargetInstancesError =
  | ConflictException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
 */
export const terminateTargetInstances: API.OperationMethod<
  TerminateTargetInstancesRequest,
  TerminateTargetInstancesResponse,
  TerminateTargetInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(272, __c34, 0) as any as S.Schema<TerminateTargetInstancesRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<TerminateTargetInstancesResponse>,
  errors: [ConflictException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateTargetInstances",
}));

export type UnarchiveApplicationError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Unarchive application.
 */
export const unarchiveApplication: API.OperationMethod<
  UnarchiveApplicationRequest,
  Application,
  UnarchiveApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<UnarchiveApplicationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<Application>,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UnarchiveApplication",
}));

export type UnarchiveWaveError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Unarchive wave.
 */
export const unarchiveWave: API.OperationMethod<
  UnarchiveWaveRequest,
  Wave,
  UnarchiveWaveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(275, __c34, 3) as any as S.Schema<UnarchiveWaveRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<Wave>,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UnarchiveWave",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified set of tags from the specified set of Application Migration Service resources.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(276, __c34, 4) as any as S.Schema<UntagResourceRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<UntagResourceResponse>,
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

export type UpdateApplicationError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Update application.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  Application,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(277, __c34, 5) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<Application>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateConnectorError =
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Update Connector.
 */
export const updateConnector: API.OperationMethod<
  UpdateConnectorRequest,
  Connector,
  UpdateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<UpdateConnectorRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<Connector>,
  errors: [ResourceNotFoundException, UninitializedAccountException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnector",
}));

export type UpdateLaunchConfigurationError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates multiple LaunchConfigurations by Source Server ID.
 *
 * bootMode valid values are `LEGACY_BIOS | UEFI | USE_SOURCE`
 */
export const updateLaunchConfiguration: API.OperationMethod<
  UpdateLaunchConfigurationRequest,
  LaunchConfiguration,
  UpdateLaunchConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(279, __c34, 7) as any as S.Schema<UpdateLaunchConfigurationRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<LaunchConfiguration>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLaunchConfiguration",
}));

export type UpdateLaunchConfigurationTemplateError =
  | AccessDeniedException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Launch Configuration Template by ID.
 */
export const updateLaunchConfigurationTemplate: API.OperationMethod<
  UpdateLaunchConfigurationTemplateRequest,
  LaunchConfigurationTemplate,
  UpdateLaunchConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280, __c35, 0) as any as S.Schema<UpdateLaunchConfigurationTemplateRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<LaunchConfigurationTemplate>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLaunchConfigurationTemplate",
}));

export type UpdateNetworkMigrationDefinitionError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing network migration definition with new source or target configurations.
 */
export const updateNetworkMigrationDefinition: API.OperationMethod<
  UpdateNetworkMigrationDefinitionRequest,
  NetworkMigrationDefinition,
  UpdateNetworkMigrationDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<UpdateNetworkMigrationDefinitionRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<NetworkMigrationDefinition>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNetworkMigrationDefinition",
}));

export type UpdateNetworkMigrationMapperSegmentError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a mapper segment's configuration, such as changing its scope tags.
 */
export const updateNetworkMigrationMapperSegment: API.OperationMethod<
  UpdateNetworkMigrationMapperSegmentRequest,
  NetworkMigrationMapperSegment,
  UpdateNetworkMigrationMapperSegmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284, __c35, 4) as any as S.Schema<UpdateNetworkMigrationMapperSegmentRequest>,
  output: __S(214, __c26, 6) as any as S.Schema<NetworkMigrationMapperSegment>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNetworkMigrationMapperSegment",
}));

export type UpdateReplicationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to update multiple ReplicationConfigurations by Source Server ID.
 */
export const updateReplicationConfiguration: API.OperationMethod<
  UpdateReplicationConfigurationRequest,
  ReplicationConfiguration,
  UpdateReplicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285, __c35, 5) as any as S.Schema<UpdateReplicationConfigurationRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<ReplicationConfiguration>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReplicationConfiguration",
}));

export type UpdateReplicationConfigurationTemplateError =
  | AccessDeniedException
  | ResourceNotFoundException
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
  input: __S(286, __c35, 6) as any as S.Schema<UpdateReplicationConfigurationTemplateRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<ReplicationConfigurationTemplate>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReplicationConfigurationTemplate",
}));

export type UpdateSourceServerError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Update Source Server.
 */
export const updateSourceServer: API.OperationMethod<
  UpdateSourceServerRequest,
  SourceServer,
  UpdateSourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<UpdateSourceServerRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSourceServer",
}));

export type UpdateSourceServerReplicationTypeError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
 *
 * SNAPSHOT_SHIPPING should be used for agentless replication.
 */
export const updateSourceServerReplicationType: API.OperationMethod<
  UpdateSourceServerReplicationTypeRequest,
  SourceServer,
  UpdateSourceServerReplicationTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(288, __c36, 0) as any as S.Schema<UpdateSourceServerReplicationTypeRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<SourceServer>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    UninitializedAccountException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSourceServerReplicationType",
}));

export type UpdateWaveError =
  | ConflictException
  | ResourceNotFoundException
  | UninitializedAccountException
  | CommonErrors;
/**
 * Update wave.
 */
export const updateWave: API.OperationMethod<
  UpdateWaveRequest,
  Wave,
  UpdateWaveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(289, __c36, 1) as any as S.Schema<UpdateWaveRequest>,
  output: __S(6, __c0, 6) as any as S.Schema<Wave>,
  errors: [ConflictException, ResourceNotFoundException, UninitializedAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWave",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ applicationID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ArchiveApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ArchiveApplicationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          lastUpdateDateTime: S.optional(S.String),
          healthStatus: S.optional(S.String),
          progressStatus: S.optional(S.String),
          totalSourceServers: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ApplicationAggregatedStatus",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationID: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          isArchived: S.optional(S.Boolean),
          applicationAggregatedStatus: S.optional(__S(1, __c0, 1)),
          creationDateTime: S.optional(S.String),
          lastModifiedDateTime: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          waveID: S.optional(S.String),
        }),
      ).annotate({ identifier: "Application" });
    case 4:
      return S.suspend(() =>
        S.Struct({ waveID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ArchiveWave" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ArchiveWaveRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          lastUpdateDateTime: S.optional(S.String),
          replicationStartedDateTime: S.optional(S.String),
          healthStatus: S.optional(S.String),
          progressStatus: S.optional(S.String),
          totalApplications: S.optional(S.Number),
        }),
      ).annotate({ identifier: "WaveAggregatedStatus" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          waveID: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          isArchived: S.optional(S.Boolean),
          waveAggregatedStatus: S.optional(__S(5, __c0, 5)),
          creationDateTime: S.optional(S.String),
          lastModifiedDateTime: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "Wave" });
    case 7:
      return S.Array(S.String);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          waveID: S.String,
          applicationIDs: __S(7, __c0, 7),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssociateApplications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateApplicationsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateApplicationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          applicationID: S.String,
          sourceServerIDs: __S(7, __c0, 7),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssociateSourceServers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateSourceServersRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ state: S.String })).annotate({
        identifier: "ChangeServerLifeCycleStateSourceServerLifecycle",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          lifeCycle: __S(11, __c1, 3),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ChangeServerLifeCycleState" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ChangeServerLifeCycleStateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          error: S.optional(S.String),
          checkedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LastKnownCheck" });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ec2InstanceID: S.optional(S.String),
          jobID: S.optional(S.String),
          firstBoot: S.optional(S.String),
          lastKnownChecks: S.optional(__S(14, __c1, 6)),
          lastKnownFsxChecksStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "LaunchedInstance" });
  }
}
function __c2(j: number): any {
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
        identifier: "DataReplicationInfoReplicatedDisk",
      });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({
        identifier: "DataReplicationInitiationStep",
      });
    case 3:
      return S.Array(__S(18, __c2, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          startDateTime: S.optional(S.String),
          nextAttemptDateTime: S.optional(S.String),
          steps: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "DataReplicationInitiation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ error: S.optional(S.String), rawError: S.optional(S.String) }),
      ).annotate({ identifier: "DataReplicationError" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          lagDuration: S.optional(S.String),
          etaDateTime: S.optional(S.String),
          replicatedDisks: S.optional(__S(17, __c2, 1)),
          dataReplicationState: S.optional(S.String),
          dataReplicationInitiation: S.optional(__S(20, __c2, 4)),
          dataReplicationError: S.optional(__S(21, __c2, 5)),
          lastSnapshotDateTime: S.optional(S.String),
          replicatorId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataReplicationInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({ apiCallDateTime: S.optional(S.String), jobID: S.optional(S.String) }),
      ).annotate({
        identifier: "LifeCycleLastTestInitiated",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ apiCallDateTime: S.optional(S.String) })).annotate({
        identifier: "LifeCycleLastTestReverted",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          initiated: S.optional(__S(23, __c2, 7)),
          reverted: S.optional(__S(24, __c3, 0)),
          finalized: S.optional(__S(24, __c3, 0)),
        }),
      ).annotate({ identifier: "LifeCycleLastTest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          addedToServiceDateTime: S.optional(S.String),
          firstByteDateTime: S.optional(S.String),
          elapsedReplicationDuration: S.optional(S.String),
          lastSeenByServiceDateTime: S.optional(S.String),
          lastTest: S.optional(__S(25, __c3, 1)),
          lastCutover: S.optional(__S(25, __c3, 1)),
          state: S.optional(S.String),
        }),
      ).annotate({ identifier: "LifeCycle" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          fqdn: S.optional(S.String),
          hostname: S.optional(S.String),
          vmWareUuid: S.optional(S.String),
          awsInstanceID: S.optional(S.String),
          vmPath: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentificationHints" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          macAddress: S.optional(S.String),
          ips: S.optional(__S(7, __c0, 7)),
          isPrimary: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "NetworkInterface" });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ deviceName: S.optional(S.String), bytes: S.optional(S.Number) }),
      ).annotate({ identifier: "Disk" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ cores: S.optional(S.Number), modelName: S.optional(S.String) }),
      ).annotate({ identifier: "CPU" });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() => S.Struct({ fullString: S.optional(S.String) })).annotate({
        identifier: "OS",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          lastUpdatedDateTime: S.optional(S.String),
          recommendedInstanceType: S.optional(S.String),
          identificationHints: S.optional(__S(27, __c3, 3)),
          networkInterfaces: S.optional(__S(29, __c3, 5)),
          disks: S.optional(__S(31, __c3, 7)),
          cpus: S.optional(__S(33, __c4, 1)),
          ramBytes: S.optional(S.Number),
          os: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "SourceProperties" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          credentialsSecretArn: S.optional(S.String),
          connectorArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SourceServerConnectorAction",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          arn: S.optional(S.String),
          isArchived: S.optional(S.Boolean),
          tags: S.optional(__S(2, __c0, 2)),
          launchedInstance: S.optional(__S(15, __c1, 7)),
          dataReplicationInfo: S.optional(__S(22, __c2, 6)),
          lifeCycle: S.optional(__S(26, __c3, 2)),
          sourceProperties: S.optional(__S(35, __c4, 3)),
          replicationType: S.optional(S.String),
          vcenterClientID: S.optional(S.String),
          applicationID: S.optional(S.String),
          userProvidedID: S.optional(S.String),
          fqdnForActionFramework: S.optional(S.String),
          connectorAction: S.optional(__S(36, __c4, 4)),
        }),
      ).annotate({ identifier: "SourceServer" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          s3OutputEnabled: S.Boolean,
          outputS3BucketName: S.optional(S.String),
          cloudWatchOutputEnabled: S.Boolean,
          cloudWatchLogGroupName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConnectorSsmCommandConfig",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          ssmInstanceID: S.String,
          tags: S.optional(__S(2, __c0, 2)),
          ssmCommandConfig: S.optional(__S(39, __c4, 7)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateConnector" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          connectorID: S.optional(S.String),
          name: S.optional(S.String),
          ssmInstanceID: S.optional(S.String),
          arn: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          ssmCommandConfig: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({ identifier: "Connector" });
    case 2:
      return S.suspend(() =>
        S.Struct({ parameterType: S.String, parameterName: S.String }),
      ).annotate({
        identifier: "SsmParameterStoreParameter",
      });
    case 3:
      return S.Array(__S(42, __c5, 2));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(43, __c5, 3).pipe(S.optional));
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ dynamicPath: S.String })]);
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(45, __c5, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          actionName: S.String,
          ssmDocumentName: S.String,
          timeoutSeconds: S.optional(S.Number),
          mustSucceedForCutover: S.optional(S.Boolean),
          parameters: S.optional(__S(44, __c5, 4)),
          externalParameters: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({ identifier: "SsmDocument" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          deployment: S.optional(S.String),
          s3LogBucket: S.optional(S.String),
          s3OutputKeyPrefix: S.optional(S.String),
          cloudWatchLogGroupName: S.optional(S.String),
          ssmDocuments: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "PostLaunchActions" });
    case 2:
      return S.suspend(() => S.Struct({ osByol: S.optional(S.Boolean) })).annotate({
        identifier: "Licensing",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          volumeType: S.optional(S.String),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
          volumeInitializationRate: S.optional(S.Number),
          deleteOnTermination: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LaunchTemplateDiskConf" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          postLaunchActions: S.optional(__S(49, __c6, 1)),
          enableMapAutoTagging: S.optional(S.Boolean),
          mapAutoTaggingMpeID: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          associatePublicIpAddress: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(50, __c6, 2)),
          bootMode: S.optional(S.String),
          smallVolumeMaxSize: S.optional(S.Number),
          smallVolumeConf: S.optional(__S(51, __c6, 3)),
          largeVolumeConf: S.optional(__S(51, __c6, 3)),
          enableParametersEncryption: S.optional(S.Boolean),
          parametersEncryptionKey: S.optional(S.String),
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateID: S.String,
          arn: S.optional(S.String),
          postLaunchActions: S.optional(__S(49, __c6, 1)),
          enableMapAutoTagging: S.optional(S.Boolean),
          mapAutoTaggingMpeID: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          ec2LaunchTemplateID: S.optional(S.String),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          associatePublicIpAddress: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(50, __c6, 2)),
          bootMode: S.optional(S.String),
          smallVolumeMaxSize: S.optional(S.Number),
          smallVolumeConf: S.optional(__S(51, __c6, 3)),
          largeVolumeConf: S.optional(__S(51, __c6, 3)),
          enableParametersEncryption: S.optional(S.Boolean),
          parametersEncryptionKey: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LaunchConfigurationTemplate",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ s3Bucket: S.String, s3BucketOwner: S.String, s3Key: S.String }),
      ).annotate({ identifier: "SourceS3Configuration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ sourceEnvironment: S.String, sourceS3Configuration: __S(54, __c6, 6) }),
      ).annotate({ identifier: "SourceConfiguration" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() => S.Struct({ s3Bucket: S.String, s3BucketOwner: S.String })).annotate({
        identifier: "TargetS3Configuration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          topology: S.String,
          inboundCidr: S.optional(S.String),
          outboundCidr: S.optional(S.String),
          inspectionCidr: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetNetwork" });
    case 3:
      return S.suspend(() => S.Struct({ originalCidr: S.String, updatedCidr: S.String })).annotate({
        identifier: "CidrMapping",
      });
    case 4:
      return S.Array(__S(59, __c7, 3));
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          sourceConfigurations: S.optional(__S(56, __c7, 0)),
          targetS3Configuration: __S(57, __c7, 1),
          targetNetwork: __S(58, __c7, 2),
          targetDeployment: S.optional(S.String),
          vpcProvisioningStrategy: S.optional(S.String),
          cidrMappings: S.optional(__S(60, __c7, 4)),
          tags: S.optional(__S(2, __c0, 2)),
          scopeTags: S.optional(__S(61, __c7, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/CreateNetworkMigrationDefinition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateNetworkMigrationDefinitionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          networkMigrationDefinitionID: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          sourceConfigurations: S.optional(__S(56, __c7, 0)),
          targetS3Configuration: S.optional(__S(57, __c7, 1)),
          targetNetwork: S.optional(__S(58, __c7, 2)),
          targetDeployment: S.optional(S.String),
          vpcProvisioningStrategy: S.optional(S.String),
          cidrMappings: S.optional(__S(60, __c7, 4)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(2, __c0, 2)),
          scopeTags: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({
        identifier: "NetworkMigrationDefinition",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ storageVirtualMachineId: S.String, credentialsSecretArn: S.String }),
      ).annotate({ identifier: "FsxOntapConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          storageType: S.String,
          fsxOntapConfiguration: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({ identifier: "StorageConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          stagingAreaSubnetId: S.String,
          associateDefaultSecurityGroup: S.Boolean,
          replicationServersSecurityGroupsIDs: __S(7, __c0, 7),
          replicationServerInstanceType: S.String,
          useDedicatedReplicationServer: S.Boolean,
          defaultLargeStagingDiskType: S.String,
          ebsEncryption: S.String,
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.Number,
          dataPlaneRouting: S.String,
          createPublicIP: S.Boolean,
          stagingAreaTags: __S(2, __c0, 2),
          useFipsEndpoint: S.optional(S.Boolean),
          tags: S.optional(__S(2, __c0, 2)),
          internetProtocol: S.optional(S.String),
          storeSnapshotOnLocalZone: S.optional(S.Boolean),
          storageConfiguration: S.optional(__S(65, __c8, 1)),
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          replicationConfigurationTemplateID: S.String,
          arn: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(7, __c0, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(2, __c0, 2)),
          useFipsEndpoint: S.optional(S.Boolean),
          tags: S.optional(__S(2, __c0, 2)),
          internetProtocol: S.optional(S.String),
          storeSnapshotOnLocalZone: S.optional(S.Boolean),
          storageConfiguration: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({
        identifier: "ReplicationConfigurationTemplate",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateWave" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateWaveRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ applicationID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ connectorID: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteConnector" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteConnectorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ jobID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteJob" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteJobRequest" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
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
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteLaunchConfigurationTemplateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ networkMigrationDefinitionID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/DeleteNetworkMigrationDefinition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteNetworkMigrationDefinitionRequest",
      });
    case 3:
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
    case 4:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
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
    case 5:
      return S.suspend(() =>
        S.Struct({ vcenterClientID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteVcenterClient" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVcenterClientRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ waveID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteWave" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWaveRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobID: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountID: S.optional(S.String),
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
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          conversionServerID: S.optional(S.String),
          targetInstanceID: S.optional(S.String),
          rawError: S.optional(S.String),
          attemptCount: S.optional(S.Number),
          maxAttemptsCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobLogEventData" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          logDateTime: S.optional(S.String),
          event: S.optional(S.String),
          eventData: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({ identifier: "JobLog" });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(82, __c10, 2)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeJobLogItemsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobIDs: S.optional(__S(7, __c0, 7)),
          fromDate: S.optional(S.String),
          toDate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeJobsRequestFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(84, __c10, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DescribeJobs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeJobsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ssmDocument: S.optional(__S(47, __c5, 7)),
          ssmDocumentType: S.optional(S.String),
          executionID: S.optional(S.String),
          executionStatus: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "JobPostLaunchActionsLaunchStatus",
      });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ssmAgentDiscoveryDatetime: S.optional(S.String),
          postLaunchActionsLaunchStatusList: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({ identifier: "PostLaunchActionsStatus" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          launchStatus: S.optional(S.String),
          launchedEc2InstanceID: S.optional(S.String),
          postLaunchActionsStatus: S.optional(__S(88, __c11, 0)),
        }),
      ).annotate({ identifier: "ParticipatingServer" });
    case 2:
      return S.Array(__S(89, __c11, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobID: S.String,
          arn: S.optional(S.String),
          type: S.optional(S.String),
          initiatedBy: S.optional(S.String),
          creationDateTime: S.optional(S.String),
          endDateTime: S.optional(S.String),
          status: S.optional(S.String),
          participatingServers: S.optional(__S(90, __c11, 2)),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "Job" });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(92, __c11, 4)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeJobsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateIDs: S.optional(__S(7, __c0, 7)),
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
    case 7:
      return S.Array(__S(53, __c6, 5));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(95, __c11, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeLaunchConfigurationTemplatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          replicationConfigurationTemplateIDs: S.optional(__S(7, __c0, 7)),
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
      return S.Array(__S(67, __c8, 3));
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(98, __c12, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeReplicationConfigurationTemplatesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceServerIDs: S.optional(__S(7, __c0, 7)),
          isArchived: S.optional(S.Boolean),
          replicationTypes: S.optional(__S(7, __c0, 7)),
          lifeCycleStates: S.optional(__S(7, __c0, 7)),
          applicationIDs: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "DescribeSourceServersRequestFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(100, __c12, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountID: S.optional(S.String),
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
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(102, __c12, 6)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeSourceServersResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/DescribeVcenterClients" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeVcenterClientsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          vcenterClientID: S.optional(S.String),
          arn: S.optional(S.String),
          hostname: S.optional(S.String),
          vcenterUUID: S.optional(S.String),
          datacenterName: S.optional(S.String),
          lastSeenDatetime: S.optional(S.String),
          sourceServerTags: S.optional(__S(2, __c0, 2)),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "VcenterClient" });
    case 2:
      return S.Array(__S(105, __c13, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(106, __c13, 2)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeVcenterClientsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          waveID: S.String,
          applicationIDs: __S(7, __c0, 7),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisassociateApplications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateApplicationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationID: S.String,
          sourceServerIDs: __S(7, __c0, 7),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisassociateSourceServers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateSourceServersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisconnectFromService" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisconnectFromServiceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/FinalizeCutover" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "FinalizeCutoverRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
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
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          name: S.optional(S.String),
          ec2LaunchTemplateID: S.optional(S.String),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(50, __c6, 2)),
          bootMode: S.optional(S.String),
          postLaunchActions: S.optional(__S(49, __c6, 1)),
          enableMapAutoTagging: S.optional(S.Boolean),
          mapAutoTaggingMpeID: S.optional(S.String),
        }),
      ).annotate({ identifier: "LaunchConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ networkMigrationDefinitionID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/GetNetworkMigrationDefinition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNetworkMigrationDefinitionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          networkMigrationDefinitionID: S.String,
          networkMigrationExecutionID: S.String,
          segmentID: S.String,
          constructID: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/GetNetworkMigrationMapperSegmentConstruct",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNetworkMigrationMapperSegmentConstructRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          constructID: S.optional(S.String),
          constructType: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          logicalID: S.optional(S.String),
          excluded: S.optional(S.Boolean),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          properties: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({
        identifier: "NetworkMigrationMapperSegmentConstruct",
      });
    case 5:
      return S.suspend(() => S.Struct({ construct: S.optional(__S(116, __c14, 4)) })).annotate({
        identifier: "GetNetworkMigrationMapperSegmentConstructResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          deviceName: S.optional(S.String),
          isBootDisk: S.optional(S.Boolean),
          stagingDiskType: S.optional(S.String),
          iops: S.optional(S.Number),
          throughput: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ReplicationConfigurationReplicatedDisk",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119, __c14, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          name: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(7, __c0, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          replicatedDisks: S.optional(__S(120, __c15, 0)),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(2, __c0, 2)),
          useFipsEndpoint: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
          storeSnapshotOnLocalZone: S.optional(S.Boolean),
          storageConfiguration: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({ identifier: "ReplicationConfiguration" });
    case 2:
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationIDs: S.optional(__S(7, __c0, 7)),
          isArchived: S.optional(S.Boolean),
          waveIDs: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "ListApplicationsRequestFilters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(123, __c15, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListApplications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 5:
      return S.Array(__S(3, __c0, 3));
    case 6:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(125, __c15, 5)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 7:
      return S.suspend(() => S.Struct({ connectorIDs: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "ListConnectorsRequestFilters",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(127, __c15, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListConnectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 1:
      return S.Array(__S(41, __c5, 1));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(129, __c16, 1)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          exportID: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListExportErrors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListExportErrorsRequest" });
    case 4:
      return S.suspend(() => S.Struct({ rawError: S.optional(S.String) })).annotate({
        identifier: "ExportErrorData",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          errorDateTime: S.optional(S.String),
          errorData: S.optional(__S(132, __c16, 4)),
        }),
      ).annotate({ identifier: "ExportTaskError" });
    case 6:
      return S.Array(__S(133, __c16, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(134, __c16, 6)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListExportErrorsResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ exportIDs: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "ListExportsRequestFilters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(136, __c17, 0)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListExports" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListExportsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          serversCount: S.optional(S.Number),
          applicationsCount: S.optional(S.Number),
          wavesCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExportTaskSummary" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          exportID: S.optional(S.String),
          arn: S.optional(S.String),
          s3Bucket: S.optional(S.String),
          s3Key: S.optional(S.String),
          s3BucketOwner: S.optional(S.String),
          creationDateTime: S.optional(S.String),
          endDateTime: S.optional(S.String),
          status: S.optional(S.String),
          progressPercentage: S.optional(S.Number),
          summary: S.optional(__S(138, __c17, 2)),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "ExportTask" });
    case 4:
      return S.Array(__S(139, __c17, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(140, __c17, 4)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListExportsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          importID: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListImportErrors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListImportErrorsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.optional(S.String),
          applicationID: S.optional(S.String),
          waveID: S.optional(S.String),
          ec2LaunchTemplateID: S.optional(S.String),
          rowNumber: S.optional(S.Number),
          rawError: S.optional(S.String),
          accountID: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportErrorData" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          errorDateTime: S.optional(S.String),
          errorType: S.optional(S.String),
          errorData: S.optional(__S(143, __c17, 7)),
        }),
      ).annotate({ identifier: "ImportTaskError" });
    case 1:
      return S.Array(__S(144, __c18, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(145, __c18, 1)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListImportErrorsResponse" });
    case 3:
      return S.suspend(() => S.Struct({ jobIDs: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "ListImportFileEnrichmentsFilters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(147, __c18, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/ListImportFileEnrichments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImportFileEnrichmentsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ encryptionAlgorithm: S.optional(S.String), hash: S.optional(S.String) }),
      ).annotate({ identifier: "Checksum" });
    case 6:
      return S.suspend(() =>
        S.Struct({ s3Bucket: S.String, s3BucketOwner: S.String, s3Key: S.String }),
      ).annotate({
        identifier: "EnrichmentTargetS3Configuration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobID: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          statusDetails: S.optional(S.String),
          checksum: S.optional(__S(149, __c18, 5)),
          s3BucketTarget: S.optional(__S(150, __c18, 6)),
        }),
      ).annotate({ identifier: "ImportFileEnrichment" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151, __c18, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(152, __c19, 0)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListImportFileEnrichmentsResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ importIDs: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "ListImportsRequestFilters",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(154, __c19, 2)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListImports" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListImportsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ s3Bucket: S.String, s3Key: S.String, s3BucketOwner: S.optional(S.String) }),
      ).annotate({ identifier: "S3BucketSource" });
    case 5:
      return S.suspend(() =>
        S.Struct({ createdCount: S.optional(S.Number), modifiedCount: S.optional(S.Number) }),
      ).annotate({ identifier: "ImportTaskSummaryWaves" });
    case 6:
      return S.suspend(() =>
        S.Struct({ createdCount: S.optional(S.Number), modifiedCount: S.optional(S.Number) }),
      ).annotate({
        identifier: "ImportTaskSummaryApplications",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          waves: S.optional(__S(157, __c19, 5)),
          applications: S.optional(__S(158, __c19, 6)),
          servers: S.optional(__S(157, __c19, 5)),
        }),
      ).annotate({ identifier: "ImportTaskSummary" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          importID: S.optional(S.String),
          arn: S.optional(S.String),
          s3BucketSource: S.optional(__S(156, __c19, 4)),
          creationDateTime: S.optional(S.String),
          endDateTime: S.optional(S.String),
          status: S.optional(S.String),
          progressPercentage: S.optional(S.Number),
          summary: S.optional(__S(159, __c19, 7)),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "ImportTask" });
    case 1:
      return S.Array(__S(160, __c20, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(161, __c20, 1)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListImportsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListManagedAccounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedAccountsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ accountId: S.optional(S.String) })).annotate({
        identifier: "ManagedAccount",
      });
    case 5:
      return S.Array(__S(164, __c20, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ items: __S(165, __c20, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListManagedAccountsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(147, __c18, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/ListNetworkMigrationAnalyses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationAnalysesRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobID: S.optional(S.String),
          networkMigrationExecutionID: S.optional(S.String),
          networkMigrationDefinitionID: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          statusDetails: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkMigrationAnalysisJobDetails",
      });
    case 1:
      return S.Array(__S(168, __c21, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(169, __c21, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationAnalysesResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ vpcIDs: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "ListNetworkMigrationAnalysisResultsFilters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(171, __c21, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/ListNetworkMigrationAnalysisResults",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationAnalysisResultsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ vpcID: S.optional(S.String), subnetID: S.optional(S.String) }),
      ).annotate({
        identifier: "NetworkMigrationAnalysisResultSource",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobID: S.optional(S.String),
          networkMigrationExecutionID: S.optional(S.String),
          networkMigrationDefinitionID: S.optional(S.String),
          analyzerType: S.optional(S.String),
          source: S.optional(__S(173, __c21, 5)),
          target: S.optional(__S(173, __c21, 5)),
          status: S.optional(S.String),
          analysisResult: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkMigrationAnalysisResult",
      });
    case 7:
      return S.Array(__S(174, __c21, 6));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(175, __c21, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationAnalysisResultsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(147, __c18, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/ListNetworkMigrationCodeGenerations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationCodeGenerationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), statusDetailList: S.optional(S.String) }),
      ).annotate({
        identifier: "CodeGenerationOutputFormatStatusDetails",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(178, __c22, 2).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobID: S.optional(S.String),
          networkMigrationExecutionID: S.optional(S.String),
          networkMigrationDefinitionID: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          statusDetails: S.optional(S.String),
          codeGenerationOutputFormatStatusDetailsMap: S.optional(__S(179, __c22, 3)),
        }),
      ).annotate({
        identifier: "NetworkMigrationCodeGenerationJobDetails",
      });
    case 5:
      return S.Array(__S(180, __c22, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(181, __c22, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationCodeGenerationsResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ segmentIDs: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "ListNetworkMigrationCodeGenerationSegmentsFilters",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(183, __c22, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/ListNetworkMigrationCodeGenerationSegments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationCodeGenerationSegmentsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3Bucket: S.optional(S.String),
          s3BucketOwner: S.optional(S.String),
          s3Key: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Configuration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          artifactID: S.optional(S.String),
          artifactType: S.optional(S.String),
          artifactSubType: S.optional(S.String),
          logicalID: S.optional(S.String),
          outputS3Configuration: S.optional(__S(185, __c23, 1)),
          checksum: S.optional(__S(149, __c18, 5)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "NetworkMigrationCodeGenerationArtifact",
      });
    case 3:
      return S.Array(__S(186, __c23, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobID: S.optional(S.String),
          networkMigrationExecutionID: S.optional(S.String),
          networkMigrationDefinitionID: S.optional(S.String),
          segmentID: S.optional(S.String),
          segmentType: S.optional(S.String),
          logicalID: S.optional(S.String),
          mapperSegmentID: S.optional(S.String),
          artifacts: S.optional(__S(187, __c23, 3)),
          referencedSegments: S.optional(__S(7, __c0, 7)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "NetworkMigrationCodeGenerationSegment",
      });
    case 5:
      return S.Array(__S(188, __c23, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(189, __c23, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationCodeGenerationSegmentsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          networkMigrationDefinitionIDs: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationDefinitionsRequestFilters",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(191, __c23, 7)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/ListNetworkMigrationDefinitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationDefinitionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          networkMigrationDefinitionID: S.optional(S.String),
          name: S.optional(S.String),
          sourceEnvironment: S.optional(S.String),
          arn: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          scopeTags: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({
        identifier: "NetworkMigrationDefinitionSummary",
      });
    case 2:
      return S.Array(__S(193, __c24, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(194, __c24, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationDefinitionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/ListNetworkMigrationDeployedStacks",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationDeployedStacksRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          logicalID: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkMigrationFailedResourceDetails",
      });
    case 6:
      return S.Array(__S(197, __c24, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          stackPhysicalID: S.optional(S.String),
          stackLogicalID: S.optional(S.String),
          segmentID: S.optional(S.String),
          targetAccount: S.optional(S.String),
          failedResources: S.optional(__S(198, __c24, 6)),
        }),
      ).annotate({
        identifier: "NetworkMigrationDeployedStackDetails",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(199, __c24, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(200, __c25, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationDeployedStacksResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(147, __c18, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/ListNetworkMigrationDeployments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationDeploymentsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionIDs: S.optional(__S(7, __c0, 7)),
          networkMigrationExecutionStatuses: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationExecutionRequestFilters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(203, __c25, 3)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/ListNetworkMigrationExecutions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationExecutionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          networkMigrationDefinitionID: S.optional(S.String),
          networkMigrationExecutionID: S.optional(S.String),
          status: S.optional(S.String),
          stage: S.optional(S.String),
          activity: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({
        identifier: "NetworkMigrationExecution",
      });
    case 6:
      return S.Array(__S(205, __c25, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(206, __c25, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationExecutionsResponse",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          constructIDs: S.optional(__S(7, __c0, 7)),
          constructTypes: S.optional(__S(208, __c26, 0)),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationMapperSegmentConstructsFilters",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          segmentID: S.String,
          filters: S.optional(__S(209, __c26, 1)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/ListNetworkMigrationMapperSegmentConstructs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationMapperSegmentConstructsRequest",
      });
    case 3:
      return S.Array(__S(116, __c14, 4));
    case 4:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(211, __c26, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationMapperSegmentConstructsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(183, __c22, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/ListNetworkMigrationMapperSegments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationMapperSegmentsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobID: S.optional(S.String),
          networkMigrationExecutionID: S.optional(S.String),
          networkMigrationDefinitionID: S.optional(S.String),
          segmentID: S.optional(S.String),
          segmentType: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          logicalID: S.optional(S.String),
          checksum: S.optional(__S(149, __c18, 5)),
          outputS3Configuration: S.optional(__S(185, __c23, 1)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          scopeTags: S.optional(__S(61, __c7, 5)),
          targetAccount: S.optional(S.String),
          referencedSegments: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "NetworkMigrationMapperSegment",
      });
    case 7:
      return S.Array(__S(214, __c26, 6));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(215, __c26, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationMapperSegmentsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(147, __c18, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/ListNetworkMigrationMappings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationMappingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          filters: S.optional(__S(147, __c18, 3)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/ListNetworkMigrationMappingUpdates",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkMigrationMappingUpdatesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(169, __c21, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkMigrationMappingUpdatesResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ actionIDs: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "SourceServerActionsRequestFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          filters: S.optional(__S(220, __c27, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListSourceServerActions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSourceServerActionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          actionID: S.optional(S.String),
          actionName: S.optional(S.String),
          documentIdentifier: S.optional(S.String),
          order: S.optional(S.Number),
          documentVersion: S.optional(S.String),
          active: S.optional(S.Boolean),
          timeoutSeconds: S.optional(S.Number),
          mustSucceedForCutover: S.optional(S.Boolean),
          parameters: S.optional(__S(44, __c5, 4)),
          externalParameters: S.optional(__S(46, __c5, 6)),
          description: S.optional(S.String),
          category: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SourceServerActionDocument",
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
          items: S.optional(__S(223, __c27, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSourceServerActionsResponse",
      });
    case 1:
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
    case 2:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(2, __c0, 2)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateID: S.String,
          filters: S.optional(__S(220, __c27, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTemplateActions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTemplateActionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          actionID: S.optional(S.String),
          actionName: S.optional(S.String),
          documentIdentifier: S.optional(S.String),
          order: S.optional(S.Number),
          documentVersion: S.optional(S.String),
          active: S.optional(S.Boolean),
          timeoutSeconds: S.optional(S.Number),
          mustSucceedForCutover: S.optional(S.Boolean),
          parameters: S.optional(__S(44, __c5, 4)),
          operatingSystem: S.optional(S.String),
          externalParameters: S.optional(__S(46, __c5, 6)),
          description: S.optional(S.String),
          category: S.optional(S.String),
        }),
      ).annotate({ identifier: "TemplateActionDocument" });
    case 5:
      return S.Array(__S(228, __c28, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(229, __c28, 5)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTemplateActionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ waveIDs: S.optional(__S(7, __c0, 7)), isArchived: S.optional(S.Boolean) }),
      ).annotate({ identifier: "ListWavesRequestFilters" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(231, __c28, 7)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          accountID: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/ListWaves" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWavesRequest" });
    case 1:
      return S.Array(__S(6, __c0, 6));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(233, __c29, 1)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWavesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/MarkAsArchived" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "MarkAsArchivedRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/PauseReplication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PauseReplicationRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          actionName: S.String,
          documentIdentifier: S.String,
          order: S.Number,
          actionID: S.String,
          documentVersion: S.optional(S.String),
          active: S.optional(S.Boolean),
          timeoutSeconds: S.optional(S.Number),
          mustSucceedForCutover: S.optional(S.Boolean),
          parameters: S.optional(__S(44, __c5, 4)),
          externalParameters: S.optional(__S(46, __c5, 6)),
          description: S.optional(S.String),
          category: S.optional(S.String),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutSourceServerAction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutSourceServerActionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateID: S.String,
          actionName: S.String,
          documentIdentifier: S.String,
          order: S.Number,
          actionID: S.String,
          documentVersion: S.optional(S.String),
          active: S.optional(S.Boolean),
          timeoutSeconds: S.optional(S.Number),
          mustSucceedForCutover: S.optional(S.Boolean),
          parameters: S.optional(__S(44, __c5, 4)),
          operatingSystem: S.optional(S.String),
          externalParameters: S.optional(__S(46, __c5, 6)),
          description: S.optional(S.String),
          category: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutTemplateAction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutTemplateActionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          actionID: S.String,
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RemoveSourceServerAction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveSourceServerActionRequest",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ launchConfigurationTemplateID: S.String, actionID: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RemoveTemplateAction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveTemplateActionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ResumeReplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ResumeReplicationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceServerIDs: __S(7, __c0, 7),
          tags: S.optional(__S(2, __c0, 2)),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartCutover" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartCutoverRequest" });
    case 4:
      return S.suspend(() => S.Struct({ job: S.optional(__S(91, __c11, 3)) })).annotate({
        identifier: "StartCutoverResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          s3Bucket: S.String,
          s3Key: S.String,
          s3BucketOwner: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartExport" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartExportRequest" });
    case 6:
      return S.suspend(() => S.Struct({ exportTask: S.optional(__S(139, __c17, 3)) })).annotate({
        identifier: "StartExportResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          s3BucketSource: __S(156, __c19, 4),
          tags: S.optional(__S(2, __c0, 2)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartImport" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartImportRequest" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ importTask: S.optional(__S(160, __c20, 0)) })).annotate({
        identifier: "StartImportResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          s3BucketSource: __S(150, __c18, 6),
          s3BucketTarget: __S(150, __c18, 6),
          ipAssignmentStrategy: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/StartImportFileEnrichment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartImportFileEnrichmentRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ jobID: S.optional(S.String) })).annotate({
        identifier: "StartImportFileEnrichmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/StartNetworkMigrationAnalysis" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartNetworkMigrationAnalysisRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          codeGenerationOutputFormatTypes: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/StartNetworkMigrationCodeGeneration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartNetworkMigrationCodeGenerationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/StartNetworkMigrationDeployment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartNetworkMigrationDeploymentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          securityGroupMappingStrategy: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/StartNetworkMigrationMapping" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartNetworkMigrationMappingRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ segmentID: S.optional(S.String), constructID: S.optional(S.String) }),
      ).annotate({ identifier: "MergeConstruct" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(255, __c31, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ mergeConstructs: S.optional(__S(256, __c32, 0)) }),
      ).annotate({
        identifier: "MergeOperation",
      });
    case 2:
      return S.suspend(() => S.Struct({ cidrBlock: S.optional(S.String) })).annotate({
        identifier: "SplitConstruct",
      });
    case 3:
      return S.Array(__S(258, __c32, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ splitConstructs: S.optional(__S(259, __c32, 3)) }),
      ).annotate({
        identifier: "SplitOperation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          excluded: S.optional(S.Boolean),
          properties: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({ identifier: "UpdateOperation" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ merge: __S(257, __c32, 1) }),
        /*@__PURE__*/ S.Struct({ split: __S(260, __c32, 4) }),
        /*@__PURE__*/ S.Struct({ delete: __S(9, __c1, 1) }),
        /*@__PURE__*/ S.Struct({ update: __S(261, __c32, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          segmentID: S.String,
          constructID: S.String,
          constructType: S.String,
          operation: S.optional(__S(262, __c32, 6)),
        }),
      ).annotate({
        identifier: "StartNetworkMigrationMappingUpdateConstruct",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(263, __c32, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          segmentID: S.String,
          targetAccount: S.optional(S.String),
          scopeTags: S.optional(__S(61, __c7, 5)),
        }),
      ).annotate({
        identifier: "StartNetworkMigrationMappingUpdateSegment",
      });
    case 2:
      return S.Array(__S(265, __c33, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          networkMigrationExecutionID: S.String,
          networkMigrationDefinitionID: S.String,
          constructs: S.optional(__S(264, __c33, 0)),
          segments: S.optional(__S(266, __c33, 2)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/StartNetworkMigrationMappingUpdate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartNetworkMigrationMappingUpdateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartReplication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartReplicationRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerIDs: __S(7, __c0, 7),
          tags: S.optional(__S(2, __c0, 2)),
          accountID: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/StartTest" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartTestRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ sourceServerID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StopReplication" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopReplicationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(2, __c0, 2),
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
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceServerIDs: __S(7, __c0, 7),
          tags: S.optional(__S(2, __c0, 2)),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/TerminateTargetInstances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TerminateTargetInstancesRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ job: S.optional(__S(91, __c11, 3)) })).annotate({
        identifier: "TerminateTargetInstancesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ applicationID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UnarchiveApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UnarchiveApplicationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ waveID: S.String, accountID: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UnarchiveWave" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UnarchiveWaveRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(7, __c0, 7).pipe(T.HttpQuery("tagKeys")),
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationID: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          connectorID: S.String,
          name: S.optional(S.String),
          ssmCommandConfig: S.optional(__S(39, __c4, 7)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateConnector" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateConnectorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          name: S.optional(S.String),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(50, __c6, 2)),
          bootMode: S.optional(S.String),
          postLaunchActions: S.optional(__S(49, __c6, 1)),
          enableMapAutoTagging: S.optional(S.Boolean),
          mapAutoTaggingMpeID: S.optional(S.String),
          accountID: S.optional(S.String),
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
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          launchConfigurationTemplateID: S.String,
          postLaunchActions: S.optional(__S(49, __c6, 1)),
          enableMapAutoTagging: S.optional(S.Boolean),
          mapAutoTaggingMpeID: S.optional(S.String),
          launchDisposition: S.optional(S.String),
          targetInstanceTypeRightSizingMethod: S.optional(S.String),
          copyPrivateIp: S.optional(S.Boolean),
          associatePublicIpAddress: S.optional(S.Boolean),
          copyTags: S.optional(S.Boolean),
          licensing: S.optional(__S(50, __c6, 2)),
          bootMode: S.optional(S.String),
          smallVolumeMaxSize: S.optional(S.Number),
          smallVolumeConf: S.optional(__S(51, __c6, 3)),
          largeVolumeConf: S.optional(__S(51, __c6, 3)),
          enableParametersEncryption: S.optional(S.Boolean),
          parametersEncryptionKey: S.optional(S.String),
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
    case 1:
      return S.suspend(() =>
        S.Struct({ s3Bucket: S.optional(S.String), s3BucketOwner: S.optional(S.String) }),
      ).annotate({
        identifier: "TargetS3ConfigurationUpdate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          topology: S.optional(S.String),
          inboundCidr: S.optional(S.String),
          outboundCidr: S.optional(S.String),
          inspectionCidr: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetNetworkUpdate" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          networkMigrationDefinitionID: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          sourceConfigurations: S.optional(__S(56, __c7, 0)),
          targetS3Configuration: S.optional(__S(281, __c35, 1)),
          targetNetwork: S.optional(__S(282, __c35, 2)),
          targetDeployment: S.optional(S.String),
          vpcProvisioningStrategy: S.optional(S.String),
          cidrMappings: S.optional(__S(60, __c7, 4)),
          scopeTags: S.optional(__S(61, __c7, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-migration/UpdateNetworkMigrationDefinition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNetworkMigrationDefinitionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          networkMigrationDefinitionID: S.String,
          networkMigrationExecutionID: S.String,
          segmentID: S.String,
          scopeTags: S.optional(__S(61, __c7, 5)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/network-migration/UpdateNetworkMigrationMapperSegment",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNetworkMigrationMapperSegmentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          name: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(7, __c0, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          replicatedDisks: S.optional(__S(120, __c15, 0)),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(2, __c0, 2)),
          useFipsEndpoint: S.optional(S.Boolean),
          accountID: S.optional(S.String),
          internetProtocol: S.optional(S.String),
          storeSnapshotOnLocalZone: S.optional(S.Boolean),
          storageConfiguration: S.optional(__S(65, __c8, 1)),
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
    case 6:
      return S.suspend(() =>
        S.Struct({
          replicationConfigurationTemplateID: S.String,
          arn: S.optional(S.String),
          stagingAreaSubnetId: S.optional(S.String),
          associateDefaultSecurityGroup: S.optional(S.Boolean),
          replicationServersSecurityGroupsIDs: S.optional(__S(7, __c0, 7)),
          replicationServerInstanceType: S.optional(S.String),
          useDedicatedReplicationServer: S.optional(S.Boolean),
          defaultLargeStagingDiskType: S.optional(S.String),
          ebsEncryption: S.optional(S.String),
          ebsEncryptionKeyArn: S.optional(S.String),
          bandwidthThrottling: S.optional(S.Number),
          dataPlaneRouting: S.optional(S.String),
          createPublicIP: S.optional(S.Boolean),
          stagingAreaTags: S.optional(__S(2, __c0, 2)),
          useFipsEndpoint: S.optional(S.Boolean),
          internetProtocol: S.optional(S.String),
          storeSnapshotOnLocalZone: S.optional(S.Boolean),
          storageConfiguration: S.optional(__S(65, __c8, 1)),
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountID: S.optional(S.String),
          sourceServerID: S.String,
          connectorAction: S.optional(__S(36, __c4, 4)),
          userProvidedID: S.optional(S.String),
          fqdnForActionFramework: S.optional(S.String),
          platform: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateSourceServer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSourceServerRequest",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceServerID: S.String,
          replicationType: S.String,
          accountID: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateSourceServerReplicationType" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSourceServerReplicationTypeRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          waveID: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          accountID: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateWave" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateWaveRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          message: S.optional(S.String),
          code: S.optional(S.String),
          resourceId: S.optional(S.String),
          resourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ErrorDetails" });
    case 3:
      return S.Array(__S(290, __c36, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 5:
      return S.Array(__S(292, __c36, 4));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
