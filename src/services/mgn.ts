import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class mgn extends AWSServiceClient {
  initializeService(
    input: InitializeServiceRequest,
  ): Effect.Effect<
    InitializeServiceResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listManagedAccounts(
    input: ListManagedAccountsRequest,
  ): Effect.Effect<
    ListManagedAccountsResponse,
    UninitializedAccountException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Mgn extends mgn {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export type AccountID = string;

export type ActionCategory = string;

export type ActionDescription = string;

export type ActionID = string;

export type ActionIDs = Array<string>;
export type ActionName = string;

export type ApplianceID = string;

export interface Application {
  applicationID?: string;
  arn?: string;
  name?: string;
  description?: string;
  isArchived?: boolean;
  applicationAggregatedStatus?: ApplicationAggregatedStatus;
  creationDateTime?: string;
  lastModifiedDateTime?: string;
  tags?: Record<string, string>;
  waveID?: string;
}
export interface ApplicationAggregatedStatus {
  lastUpdateDateTime?: string;
  healthStatus?: string;
  progressStatus?: string;
  totalSourceServers?: number;
}
export type ApplicationDescription = string;

export type ApplicationHealthStatus = string;

export type ApplicationID = string;

export type ApplicationIDs = Array<string>;
export type ApplicationIDsFilter = Array<string>;
export type ApplicationName = string;

export type ApplicationProgressStatus = string;

export type ApplicationsList = Array<Application>;
export interface ArchiveApplicationRequest {
  applicationID: string;
  accountID?: string;
}
export interface ArchiveWaveRequest {
  waveID: string;
  accountID?: string;
}
export type ARN = string;

export interface AssociateApplicationsRequest {
  waveID: string;
  applicationIDs: Array<string>;
  accountID?: string;
}
export interface AssociateApplicationsResponse {}
export interface AssociateSourceServersRequest {
  applicationID: string;
  sourceServerIDs: Array<string>;
  accountID?: string;
}
export type AssociateSourceServersRequestSourceServerIDs = Array<string>;
export interface AssociateSourceServersResponse {}
export type BandwidthThrottling = number;

export type BootMode = string;

export type BoundedString = string;

export interface ChangeServerLifeCycleStateRequest {
  sourceServerID: string;
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle;
  accountID?: string;
}
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  state: string;
}
export type ChangeServerLifeCycleStateSourceServerLifecycleState = string;

export type ClientIdempotencyToken = string;

export type CloudWatchLogGroupName = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly errors?: Array<ErrorDetails>;
}> {}
export type ConflictExceptionErrors = Array<ErrorDetails>;
export interface Connector {
  connectorID?: string;
  name?: string;
  ssmInstanceID?: string;
  arn?: string;
  tags?: Record<string, string>;
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}
export type ConnectorArn = string;

export type ConnectorID = string;

export type ConnectorIDsFilter = Array<string>;
export type ConnectorName = string;

export type ConnectorsList = Array<Connector>;
export interface ConnectorSsmCommandConfig {
  s3OutputEnabled: boolean;
  outputS3BucketName?: string;
  cloudWatchOutputEnabled: boolean;
  cloudWatchLogGroupName?: string;
}
export interface CPU {
  cores?: number;
  modelName?: string;
}
export type Cpus = Array<CPU>;
export interface CreateApplicationRequest {
  name: string;
  description?: string;
  tags?: Record<string, string>;
  accountID?: string;
}
export interface CreateConnectorRequest {
  name: string;
  ssmInstanceID: string;
  tags?: Record<string, string>;
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}
export interface CreateLaunchConfigurationTemplateRequest {
  postLaunchActions?: PostLaunchActions;
  enableMapAutoTagging?: boolean;
  mapAutoTaggingMpeID?: string;
  tags?: Record<string, string>;
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
}
export interface CreateReplicationConfigurationTemplateRequest {
  stagingAreaSubnetId: string;
  associateDefaultSecurityGroup: boolean;
  replicationServersSecurityGroupsIDs: Array<string>;
  replicationServerInstanceType: string;
  useDedicatedReplicationServer: boolean;
  defaultLargeStagingDiskType: string;
  ebsEncryption: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling: number;
  dataPlaneRouting: string;
  createPublicIP: boolean;
  stagingAreaTags: Record<string, string>;
  useFipsEndpoint?: boolean;
  tags?: Record<string, string>;
}
export interface CreateWaveRequest {
  name: string;
  description?: string;
  tags?: Record<string, string>;
  accountID?: string;
}
export interface DataReplicationError {
  error?: string;
  rawError?: string;
}
export type DataReplicationErrorString = string;

export interface DataReplicationInfo {
  lagDuration?: string;
  etaDateTime?: string;
  replicatedDisks?: Array<DataReplicationInfoReplicatedDisk>;
  dataReplicationState?: string;
  dataReplicationInitiation?: DataReplicationInitiation;
  dataReplicationError?: DataReplicationError;
  lastSnapshotDateTime?: string;
}
export interface DataReplicationInfoReplicatedDisk {
  deviceName?: string;
  totalStorageBytes?: number;
  replicatedStorageBytes?: number;
  rescannedStorageBytes?: number;
  backloggedStorageBytes?: number;
}
export type DataReplicationInfoReplicatedDisks =
  Array<DataReplicationInfoReplicatedDisk>;
export interface DataReplicationInitiation {
  startDateTime?: string;
  nextAttemptDateTime?: string;
  steps?: Array<DataReplicationInitiationStep>;
}
export interface DataReplicationInitiationStep {
  name?: string;
  status?: string;
}
export type DataReplicationInitiationStepName = string;

export type DataReplicationInitiationSteps =
  Array<DataReplicationInitiationStep>;
export type DataReplicationInitiationStepStatus = string;

export type DataReplicationState = string;

export interface DeleteApplicationRequest {
  applicationID: string;
  accountID?: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteConnectorRequest {
  connectorID: string;
}
export interface DeleteJobRequest {
  jobID: string;
  accountID?: string;
}
export interface DeleteJobResponse {}
export interface DeleteLaunchConfigurationTemplateRequest {
  launchConfigurationTemplateID: string;
}
export interface DeleteLaunchConfigurationTemplateResponse {}
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
export interface DeleteWaveRequest {
  waveID: string;
  accountID?: string;
}
export interface DeleteWaveResponse {}
export interface DescribeJobLogItemsRequest {
  jobID: string;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export interface DescribeJobLogItemsResponse {
  items?: Array<JobLog>;
  nextToken?: string;
}
export interface DescribeJobsRequest {
  filters?: DescribeJobsRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export interface DescribeJobsRequestFilters {
  jobIDs?: Array<string>;
  fromDate?: string;
  toDate?: string;
}
export type DescribeJobsRequestFiltersJobIDs = Array<string>;
export interface DescribeJobsResponse {
  items?: Array<Job>;
  nextToken?: string;
}
export interface DescribeLaunchConfigurationTemplatesRequest {
  launchConfigurationTemplateIDs?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeLaunchConfigurationTemplatesResponse {
  items?: Array<LaunchConfigurationTemplate>;
  nextToken?: string;
}
export interface DescribeReplicationConfigurationTemplatesRequest {
  replicationConfigurationTemplateIDs?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeReplicationConfigurationTemplatesResponse {
  items?: Array<ReplicationConfigurationTemplate>;
  nextToken?: string;
}
export interface DescribeSourceServersRequest {
  filters?: DescribeSourceServersRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export type DescribeSourceServersRequestApplicationIDs = Array<string>;
export interface DescribeSourceServersRequestFilters {
  sourceServerIDs?: Array<string>;
  isArchived?: boolean;
  replicationTypes?: Array<string>;
  lifeCycleStates?: Array<string>;
  applicationIDs?: Array<string>;
}
export type DescribeSourceServersRequestFiltersIDs = Array<string>;
export interface DescribeSourceServersResponse {
  items?: Array<SourceServer>;
  nextToken?: string;
}
export interface DescribeVcenterClientsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeVcenterClientsResponse {
  items?: Array<VcenterClient>;
  nextToken?: string;
}
export interface DisassociateApplicationsRequest {
  waveID: string;
  applicationIDs: Array<string>;
  accountID?: string;
}
export interface DisassociateApplicationsResponse {}
export interface DisassociateSourceServersRequest {
  applicationID: string;
  sourceServerIDs: Array<string>;
  accountID?: string;
}
export type DisassociateSourceServersRequestSourceServerIDs = Array<string>;
export interface DisassociateSourceServersResponse {}
export interface DisconnectFromServiceRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface Disk {
  deviceName?: string;
  bytes?: number;
}
export type Disks = Array<Disk>;
export type DocumentVersion = string;

export type EC2InstanceID = string;

export type EC2InstanceType = string;

export type EC2LaunchConfigurationTemplateID = string;

export interface ErrorDetails {
  message?: string;
  code?: string;
  resourceId?: string;
  resourceType?: string;
}
export interface ExportErrorData {
  rawError?: string;
}
export type ExportErrors = Array<ExportTaskError>;
export type ExportID = string;

export type ExportsList = Array<ExportTask>;
export type ExportStatus = string;

export interface ExportTask {
  exportID?: string;
  s3Bucket?: string;
  s3Key?: string;
  s3BucketOwner?: string;
  creationDateTime?: string;
  endDateTime?: string;
  status?: string;
  progressPercentage?: number;
  summary?: ExportTaskSummary;
}
export interface ExportTaskError {
  errorDateTime?: string;
  errorData?: ExportErrorData;
}
export interface ExportTaskSummary {
  serversCount?: number;
  applicationsCount?: number;
  wavesCount?: number;
}
export interface FinalizeCutoverRequest {
  sourceServerID: string;
  accountID?: string;
}
export type FirstBoot = string;

export interface GetLaunchConfigurationRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface GetReplicationConfigurationRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface IdentificationHints {
  fqdn?: string;
  hostname?: string;
  vmWareUuid?: string;
  awsInstanceID?: string;
  vmPath?: string;
}
export interface ImportErrorData {
  sourceServerID?: string;
  applicationID?: string;
  waveID?: string;
  ec2LaunchTemplateID?: string;
  rowNumber?: number;
  rawError?: string;
  accountID?: string;
}
export type ImportErrors = Array<ImportTaskError>;
export type ImportErrorType = string;

export type ImportID = string;

export type ImportIDsFilter = Array<string>;
export type ImportList = Array<ImportTask>;
export type ImportStatus = string;

export interface ImportTask {
  importID?: string;
  s3BucketSource?: S3BucketSource;
  creationDateTime?: string;
  endDateTime?: string;
  status?: string;
  progressPercentage?: number;
  summary?: ImportTaskSummary;
}
export interface ImportTaskError {
  errorDateTime?: string;
  errorType?: string;
  errorData?: ImportErrorData;
}
export interface ImportTaskSummary {
  waves?: ImportTaskSummaryWaves;
  applications?: ImportTaskSummaryApplications;
  servers?: ImportTaskSummaryServers;
}
export interface ImportTaskSummaryApplications {
  createdCount?: number;
  modifiedCount?: number;
}
export interface ImportTaskSummaryServers {
  createdCount?: number;
  modifiedCount?: number;
}
export interface ImportTaskSummaryWaves {
  createdCount?: number;
  modifiedCount?: number;
}
export interface InitializeServiceRequest {}
export interface InitializeServiceResponse {}
export type InitiatedBy = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Iops = number;

export type IPsList = Array<string>;
export type ISO8601DatetimeString = string;

export type ISO8601DurationString = string;

export type JmesPathString = string;

export interface Job {
  jobID: string;
  arn?: string;
  type?: string;
  initiatedBy?: string;
  creationDateTime?: string;
  endDateTime?: string;
  status?: string;
  participatingServers?: Array<ParticipatingServer>;
  tags?: Record<string, string>;
}
export type JobID = string;

export interface JobLog {
  logDateTime?: string;
  event?: string;
  eventData?: JobLogEventData;
}
export type JobLogEvent = string;

export interface JobLogEventData {
  sourceServerID?: string;
  conversionServerID?: string;
  targetInstanceID?: string;
  rawError?: string;
}
export type JobLogs = Array<JobLog>;
export interface JobPostLaunchActionsLaunchStatus {
  ssmDocument?: SsmDocument;
  ssmDocumentType?: string;
  executionID?: string;
  executionStatus?: string;
  failureReason?: string;
}
export type JobsList = Array<Job>;
export type JobStatus = string;

export type JobType = string;

export type LargeBoundedString = string;

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
export interface LaunchConfigurationTemplate {
  launchConfigurationTemplateID: string;
  arn?: string;
  postLaunchActions?: PostLaunchActions;
  enableMapAutoTagging?: boolean;
  mapAutoTaggingMpeID?: string;
  tags?: Record<string, string>;
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
}
export type LaunchConfigurationTemplateID = string;

export type LaunchConfigurationTemplateIDs = Array<string>;
export type LaunchConfigurationTemplates = Array<LaunchConfigurationTemplate>;
export type LaunchDisposition = string;

export interface LaunchedInstance {
  ec2InstanceID?: string;
  jobID?: string;
  firstBoot?: string;
}
export type LaunchStatus = string;

export interface LaunchTemplateDiskConf {
  volumeType?: string;
  iops?: number;
  throughput?: number;
}
export interface Licensing {
  osByol?: boolean;
}
export interface LifeCycle {
  addedToServiceDateTime?: string;
  firstByteDateTime?: string;
  elapsedReplicationDuration?: string;
  lastSeenByServiceDateTime?: string;
  lastTest?: LifeCycleLastTest;
  lastCutover?: LifeCycleLastCutover;
  state?: string;
}
export interface LifeCycleLastCutover {
  initiated?: LifeCycleLastCutoverInitiated;
  reverted?: LifeCycleLastCutoverReverted;
  finalized?: LifeCycleLastCutoverFinalized;
}
export interface LifeCycleLastCutoverFinalized {
  apiCallDateTime?: string;
}
export interface LifeCycleLastCutoverInitiated {
  apiCallDateTime?: string;
  jobID?: string;
}
export interface LifeCycleLastCutoverReverted {
  apiCallDateTime?: string;
}
export interface LifeCycleLastTest {
  initiated?: LifeCycleLastTestInitiated;
  reverted?: LifeCycleLastTestReverted;
  finalized?: LifeCycleLastTestFinalized;
}
export interface LifeCycleLastTestFinalized {
  apiCallDateTime?: string;
}
export interface LifeCycleLastTestInitiated {
  apiCallDateTime?: string;
  jobID?: string;
}
export interface LifeCycleLastTestReverted {
  apiCallDateTime?: string;
}
export type LifeCycleState = string;

export type LifeCycleStates = Array<string>;
export interface ListApplicationsRequest {
  filters?: ListApplicationsRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export interface ListApplicationsRequestFilters {
  applicationIDs?: Array<string>;
  isArchived?: boolean;
  waveIDs?: Array<string>;
}
export interface ListApplicationsResponse {
  items?: Array<Application>;
  nextToken?: string;
}
export interface ListConnectorsRequest {
  filters?: ListConnectorsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface ListConnectorsRequestFilters {
  connectorIDs?: Array<string>;
}
export interface ListConnectorsResponse {
  items?: Array<Connector>;
  nextToken?: string;
}
export interface ListExportErrorsRequest {
  exportID: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListExportErrorsResponse {
  items?: Array<ExportTaskError>;
  nextToken?: string;
}
export interface ListExportsRequest {
  filters?: ListExportsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface ListExportsRequestFilters {
  exportIDs?: Array<string>;
}
export type ListExportsRequestFiltersExportIDs = Array<string>;
export interface ListExportsResponse {
  items?: Array<ExportTask>;
  nextToken?: string;
}
export interface ListImportErrorsRequest {
  importID: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImportErrorsResponse {
  items?: Array<ImportTaskError>;
  nextToken?: string;
}
export interface ListImportsRequest {
  filters?: ListImportsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface ListImportsRequestFilters {
  importIDs?: Array<string>;
}
export interface ListImportsResponse {
  items?: Array<ImportTask>;
  nextToken?: string;
}
export interface ListManagedAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListManagedAccountsResponse {
  items: Array<ManagedAccount>;
  nextToken?: string;
}
export interface ListSourceServerActionsRequest {
  sourceServerID: string;
  filters?: SourceServerActionsRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export interface ListSourceServerActionsResponse {
  items?: Array<SourceServerActionDocument>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTemplateActionsRequest {
  launchConfigurationTemplateID: string;
  filters?: TemplateActionsRequestFilters;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTemplateActionsResponse {
  items?: Array<TemplateActionDocument>;
  nextToken?: string;
}
export interface ListWavesRequest {
  filters?: ListWavesRequestFilters;
  maxResults?: number;
  nextToken?: string;
  accountID?: string;
}
export interface ListWavesRequestFilters {
  waveIDs?: Array<string>;
  isArchived?: boolean;
}
export interface ListWavesResponse {
  items?: Array<Wave>;
  nextToken?: string;
}
export interface ManagedAccount {
  accountId?: string;
}
export type ManagedAccounts = Array<ManagedAccount>;
export interface MarkAsArchivedRequest {
  sourceServerID: string;
  accountID?: string;
}
export type MaxResultsType = number;

export interface NetworkInterface {
  macAddress?: string;
  ips?: Array<string>;
  isPrimary?: boolean;
}
export type NetworkInterfaces = Array<NetworkInterface>;
export type OperatingSystemString = string;

export type OrderType = number;

export interface OS {
  fullString?: string;
}
export type PaginationToken = string;

export interface ParticipatingServer {
  sourceServerID: string;
  launchStatus?: string;
  launchedEc2InstanceID?: string;
  postLaunchActionsStatus?: PostLaunchActionsStatus;
}
export type ParticipatingServers = Array<ParticipatingServer>;
export interface PauseReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export type PositiveInteger = number;

export type PostLaunchActionExecutionStatus = string;

export interface PostLaunchActions {
  deployment?: string;
  s3LogBucket?: string;
  s3OutputKeyPrefix?: string;
  cloudWatchLogGroupName?: string;
  ssmDocuments?: Array<SsmDocument>;
}
export type PostLaunchActionsDeploymentType = string;

export type PostLaunchActionsLaunchStatusList =
  Array<JobPostLaunchActionsLaunchStatus>;
export interface PostLaunchActionsStatus {
  ssmAgentDiscoveryDatetime?: string;
  postLaunchActionsLaunchStatusList?: Array<JobPostLaunchActionsLaunchStatus>;
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
  parameters?: Record<string, Array<SsmParameterStoreParameter>>;
  externalParameters?: Record<string, SsmExternalParameter>;
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
  parameters?: Record<string, Array<SsmParameterStoreParameter>>;
  operatingSystem?: string;
  externalParameters?: Record<string, SsmExternalParameter>;
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
export interface ReplicationConfiguration {
  sourceServerID?: string;
  name?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  useFipsEndpoint?: boolean;
}
export type ReplicationConfigurationDataPlaneRouting = string;

export type ReplicationConfigurationDefaultLargeStagingDiskType = string;

export type ReplicationConfigurationEbsEncryption = string;

export interface ReplicationConfigurationReplicatedDisk {
  deviceName?: string;
  isBootDisk?: boolean;
  stagingDiskType?: string;
  iops?: number;
  throughput?: number;
}
export type ReplicationConfigurationReplicatedDisks =
  Array<ReplicationConfigurationReplicatedDisk>;
export type ReplicationConfigurationReplicatedDiskStagingDiskType = string;

export interface ReplicationConfigurationTemplate {
  replicationConfigurationTemplateID: string;
  arn?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  useFipsEndpoint?: boolean;
  tags?: Record<string, string>;
}
export type ReplicationConfigurationTemplateID = string;

export type ReplicationConfigurationTemplateIDs = Array<string>;
export type ReplicationConfigurationTemplates =
  Array<ReplicationConfigurationTemplate>;
export type ReplicationServersSecurityGroupsIDs = Array<string>;
export type ReplicationType = string;

export type ReplicationTypes = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface ResumeReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface RetryDataReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export type S3BucketName = string;

export interface S3BucketSource {
  s3Bucket: string;
  s3Key: string;
  s3BucketOwner?: string;
}
export type S3Key = string;

export type S3LogBucketName = string;

export type SecretArn = string;

export type SecurityGroupID = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly quotaValue?: number;
}> {}
export type SmallBoundedString = string;

export interface SourceProperties {
  lastUpdatedDateTime?: string;
  recommendedInstanceType?: string;
  identificationHints?: IdentificationHints;
  networkInterfaces?: Array<NetworkInterface>;
  disks?: Array<Disk>;
  cpus?: Array<CPU>;
  ramBytes?: number;
  os?: OS;
}
export interface SourceServer {
  sourceServerID?: string;
  arn?: string;
  isArchived?: boolean;
  tags?: Record<string, string>;
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
export interface SourceServerActionDocument {
  actionID?: string;
  actionName?: string;
  documentIdentifier?: string;
  order?: number;
  documentVersion?: string;
  active?: boolean;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: Record<string, Array<SsmParameterStoreParameter>>;
  externalParameters?: Record<string, SsmExternalParameter>;
  description?: string;
  category?: string;
}
export type SourceServerActionDocuments = Array<SourceServerActionDocument>;
export interface SourceServerActionsRequestFilters {
  actionIDs?: Array<string>;
}
export interface SourceServerConnectorAction {
  credentialsSecretArn?: string;
  connectorArn?: string;
}
export type SourceServerID = string;

export type SourceServersList = Array<SourceServer>;
export interface SsmDocument {
  actionName: string;
  ssmDocumentName: string;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: Record<string, Array<SsmParameterStoreParameter>>;
  externalParameters?: Record<string, SsmExternalParameter>;
}
export type SsmDocumentExternalParameters = Record<
  string,
  SsmExternalParameter
>;
export type SsmDocumentName = string;

export type SsmDocumentParameterName = string;

export type SsmDocumentParameters = Record<
  string,
  Array<SsmParameterStoreParameter>
>;
export type SsmDocuments = Array<SsmDocument>;
export type SsmDocumentType = string;

interface _SsmExternalParameter {
  dynamicPath?: string;
}

export type SsmExternalParameter = _SsmExternalParameter & {
  dynamicPath: string;
};
export type SsmInstanceID = string;

export interface SsmParameterStoreParameter {
  parameterType: string;
  parameterName: string;
}
export type SsmParameterStoreParameterName = string;

export type SsmParameterStoreParameters = Array<SsmParameterStoreParameter>;
export type SsmParameterStoreParameterType = string;

export interface StartCutoverRequest {
  sourceServerIDs: Array<string>;
  tags?: Record<string, string>;
  accountID?: string;
}
export type StartCutoverRequestSourceServerIDs = Array<string>;
export interface StartCutoverResponse {
  job?: Job;
}
export interface StartExportRequest {
  s3Bucket: string;
  s3Key: string;
  s3BucketOwner?: string;
}
export interface StartExportResponse {
  exportTask?: ExportTask;
}
export interface StartImportRequest {
  clientToken?: string;
  s3BucketSource: S3BucketSource;
}
export interface StartImportResponse {
  importTask?: ImportTask;
}
export interface StartReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export interface StartTestRequest {
  sourceServerIDs: Array<string>;
  tags?: Record<string, string>;
  accountID?: string;
}
export type StartTestRequestSourceServerIDs = Array<string>;
export interface StartTestResponse {
  job?: Job;
}
export interface StopReplicationRequest {
  sourceServerID: string;
  accountID?: string;
}
export type StrictlyPositiveInteger = number;

export type SubnetID = string;

export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export type TagsMap = Record<string, string>;
export type TagValue = string;

export type TargetInstanceTypeRightSizingMethod = string;

export interface TemplateActionDocument {
  actionID?: string;
  actionName?: string;
  documentIdentifier?: string;
  order?: number;
  documentVersion?: string;
  active?: boolean;
  timeoutSeconds?: number;
  mustSucceedForCutover?: boolean;
  parameters?: Record<string, Array<SsmParameterStoreParameter>>;
  operatingSystem?: string;
  externalParameters?: Record<string, SsmExternalParameter>;
  description?: string;
  category?: string;
}
export type TemplateActionDocuments = Array<TemplateActionDocument>;
export interface TemplateActionsRequestFilters {
  actionIDs?: Array<string>;
}
export interface TerminateTargetInstancesRequest {
  sourceServerIDs: Array<string>;
  tags?: Record<string, string>;
  accountID?: string;
}
export type TerminateTargetInstancesRequestSourceServerIDs = Array<string>;
export interface TerminateTargetInstancesResponse {
  job?: Job;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: string;
}> {}
export type Throughput = number;

export interface UnarchiveApplicationRequest {
  applicationID: string;
  accountID?: string;
}
export interface UnarchiveWaveRequest {
  waveID: string;
  accountID?: string;
}
export declare class UninitializedAccountException extends EffectData.TaggedError(
  "UninitializedAccountException",
)<{
  readonly message?: string;
  readonly code?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
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
}
export interface UpdateReplicationConfigurationRequest {
  sourceServerID: string;
  name?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  useFipsEndpoint?: boolean;
  accountID?: string;
}
export interface UpdateReplicationConfigurationTemplateRequest {
  replicationConfigurationTemplateID: string;
  arn?: string;
  stagingAreaSubnetId?: string;
  associateDefaultSecurityGroup?: boolean;
  replicationServersSecurityGroupsIDs?: Array<string>;
  replicationServerInstanceType?: string;
  useDedicatedReplicationServer?: boolean;
  defaultLargeStagingDiskType?: string;
  ebsEncryption?: string;
  ebsEncryptionKeyArn?: string;
  bandwidthThrottling?: number;
  dataPlaneRouting?: string;
  createPublicIP?: boolean;
  stagingAreaTags?: Record<string, string>;
  useFipsEndpoint?: boolean;
}
export interface UpdateSourceServerReplicationTypeRequest {
  sourceServerID: string;
  replicationType: string;
  accountID?: string;
}
export interface UpdateSourceServerRequest {
  accountID?: string;
  sourceServerID: string;
  connectorAction?: SourceServerConnectorAction;
}
export interface UpdateWaveRequest {
  waveID: string;
  name?: string;
  description?: string;
  accountID?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly code?: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name?: string;
  message?: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export interface VcenterClient {
  vcenterClientID?: string;
  arn?: string;
  hostname?: string;
  vcenterUUID?: string;
  datacenterName?: string;
  lastSeenDatetime?: string;
  sourceServerTags?: Record<string, string>;
  tags?: Record<string, string>;
}
export type VcenterClientID = string;

export type VcenterClientList = Array<VcenterClient>;
export type VolumeType = string;

export interface Wave {
  waveID?: string;
  arn?: string;
  name?: string;
  description?: string;
  isArchived?: boolean;
  waveAggregatedStatus?: WaveAggregatedStatus;
  creationDateTime?: string;
  lastModifiedDateTime?: string;
  tags?: Record<string, string>;
}
export interface WaveAggregatedStatus {
  lastUpdateDateTime?: string;
  replicationStartedDateTime?: string;
  healthStatus?: string;
  progressStatus?: string;
  totalApplications?: number;
}
export type WaveDescription = string;

export type WaveHealthStatus = string;

export type WaveID = string;

export type WaveIDsFilter = Array<string>;
export type WaveName = string;

export type WaveProgressStatus = string;

export type WavesList = Array<Wave>;
export declare namespace InitializeService {
  export type Input = InitializeServiceRequest;
  export type Output = InitializeServiceResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedAccounts {
  export type Input = ListManagedAccountsRequest;
  export type Output = ListManagedAccountsResponse;
  export type Error =
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
