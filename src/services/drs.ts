import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface ElasticDisasterRecoveryService {
  associateSourceNetworkStack(
    input: AssociateSourceNetworkStackRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  createExtendedSourceServer(
    input: CreateExtendedSourceServerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  createLaunchConfigurationTemplate(
    input: CreateLaunchConfigurationTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  createReplicationConfigurationTemplate(
    input: CreateReplicationConfigurationTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  createSourceNetwork(
    input: CreateSourceNetworkRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  deleteJob(
    input: DeleteJobRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  deleteLaunchAction(
    input: DeleteLaunchActionRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  deleteLaunchConfigurationTemplate(
    input: DeleteLaunchConfigurationTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  deleteRecoveryInstance(
    input: DeleteRecoveryInstanceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  deleteReplicationConfigurationTemplate(
    input: DeleteReplicationConfigurationTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  deleteSourceNetwork(
    input: DeleteSourceNetworkRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  deleteSourceServer(
    input: DeleteSourceServerRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  describeJobLogItems(
    input: DescribeJobLogItemsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  describeJobs(
    input: DescribeJobsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  describeLaunchConfigurationTemplates(
    input: DescribeLaunchConfigurationTemplatesRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  describeRecoveryInstances(
    input: DescribeRecoveryInstancesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  describeRecoverySnapshots(
    input: DescribeRecoverySnapshotsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  describeReplicationConfigurationTemplates(
    input: DescribeReplicationConfigurationTemplatesRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  describeSourceNetworks(
    input: DescribeSourceNetworksRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  describeSourceServers(
    input: DescribeSourceServersRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  disconnectRecoveryInstance(
    input: DisconnectRecoveryInstanceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  disconnectSourceServer(
    input: DisconnectSourceServerRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  exportSourceNetworkCfnTemplate(
    input: ExportSourceNetworkCfnTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  getFailbackReplicationConfiguration(
    input: GetFailbackReplicationConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  getLaunchConfiguration(
    input: GetLaunchConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  getReplicationConfiguration(
    input: GetReplicationConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  initializeService(
    input: InitializeServiceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listExtensibleSourceServers(
    input: ListExtensibleSourceServersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  listLaunchActions(
    input: ListLaunchActionsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  listStagingAccounts(
    input: ListStagingAccountsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putLaunchAction(
    input: PutLaunchActionRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  retryDataReplication(
    input: RetryDataReplicationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  reverseReplication(
    input: ReverseReplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  startFailbackLaunch(
    input: StartFailbackLaunchRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  startRecovery(
    input: StartRecoveryRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  startReplication(
    input: StartReplicationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  startSourceNetworkRecovery(
    input: StartSourceNetworkRecoveryRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  startSourceNetworkReplication(
    input: StartSourceNetworkReplicationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  stopFailback(
    input: StopFailbackRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  stopReplication(
    input: StopReplicationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  stopSourceNetworkReplication(
    input: StopSourceNetworkReplicationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  terminateRecoveryInstances(
    input: TerminateRecoveryInstancesRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFailbackReplicationConfiguration(
    input: UpdateFailbackReplicationConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | CommonAwsError
  >;
  updateLaunchConfiguration(
    input: UpdateLaunchConfigurationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  updateLaunchConfigurationTemplate(
    input: UpdateLaunchConfigurationTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  updateReplicationConfiguration(
    input: UpdateReplicationConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
  updateReplicationConfigurationTemplate(
    input: UpdateReplicationConfigurationTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | UninitializedAccountException | ValidationException | CommonAwsError
  >;
}

export type Drs = ElasticDisasterRecoveryService;

export interface AccessDeniedException {
}
export interface Account {
}
export type AccountID = string;

export type AccountIDs = Array<unknown>;
export type Accounts = Array<unknown>;
export type AgentVersion = string;

export type ARN = string;

export interface AssociateSourceNetworkStackRequest {
}
export interface AssociateSourceNetworkStackResponse {
}
export type AwsAvailabilityZone = string;

export type AwsRegion = string;

export type BoundedString = string;

export type CfnStackName = string;

export interface ConflictException {
}
export type ConversionMap = Record<string, unknown>;
export interface ConversionProperties {
}
export interface CPU {
}
export type Cpus = Array<unknown>;
export interface CreateExtendedSourceServerRequest {
}
export interface CreateExtendedSourceServerResponse {
}
export interface CreateLaunchConfigurationTemplateRequest {
}
export interface CreateLaunchConfigurationTemplateResponse {
}
export interface CreateReplicationConfigurationTemplateRequest {
}
export interface CreateSourceNetworkRequest {
}
export interface CreateSourceNetworkResponse {
}
export interface DataReplicationError {
}
export type DataReplicationErrorString = string;

export interface DataReplicationInfo {
}
export interface DataReplicationInfoReplicatedDisk {
}
export type DataReplicationInfoReplicatedDisks = Array<unknown>;
export interface DataReplicationInitiation {
}
export interface DataReplicationInitiationStep {
}
export type DataReplicationInitiationStepName = string;

export type DataReplicationInitiationSteps = Array<unknown>;
export type DataReplicationInitiationStepStatus = string;

export type DataReplicationState = string;

export interface DeleteJobRequest {
}
export interface DeleteJobResponse {
}
export interface DeleteLaunchActionRequest {
}
export interface DeleteLaunchActionResponse {
}
export interface DeleteLaunchConfigurationTemplateRequest {
}
export interface DeleteLaunchConfigurationTemplateResponse {
}
export interface DeleteRecoveryInstanceRequest {
}
export interface DeleteReplicationConfigurationTemplateRequest {
}
export interface DeleteReplicationConfigurationTemplateResponse {
}
export interface DeleteSourceNetworkRequest {
}
export interface DeleteSourceNetworkResponse {
}
export interface DeleteSourceServerRequest {
}
export interface DeleteSourceServerResponse {
}
export interface DescribeJobLogItemsRequest {
}
export interface DescribeJobLogItemsResponse {
}
export interface DescribeJobsRequest {
}
export interface DescribeJobsRequestFilters {
}
export type DescribeJobsRequestFiltersJobIDs = Array<unknown>;
export interface DescribeJobsResponse {
}
export interface DescribeLaunchConfigurationTemplatesRequest {
}
export interface DescribeLaunchConfigurationTemplatesResponse {
}
export type DescribeRecoveryInstancesItems = Array<unknown>;
export interface DescribeRecoveryInstancesRequest {
}
export interface DescribeRecoveryInstancesRequestFilters {
}
export interface DescribeRecoveryInstancesResponse {
}
export interface DescribeRecoverySnapshotsRequest {
}
export interface DescribeRecoverySnapshotsRequestFilters {
}
export interface DescribeRecoverySnapshotsResponse {
}
export interface DescribeReplicationConfigurationTemplatesRequest {
}
export interface DescribeReplicationConfigurationTemplatesResponse {
}
export interface DescribeSourceNetworksRequest {
}
export interface DescribeSourceNetworksRequestFilters {
}
export type DescribeSourceNetworksRequestFiltersIDs = Array<unknown>;
export interface DescribeSourceNetworksResponse {
}
export interface DescribeSourceServersRequest {
}
export interface DescribeSourceServersRequestFilters {
}
export type DescribeSourceServersRequestFiltersIDs = Array<unknown>;
export interface DescribeSourceServersResponse {
}
export interface DisconnectRecoveryInstanceRequest {
}
export interface DisconnectSourceServerRequest {
}
export interface Disk {
}
export type Disks = Array<unknown>;
export type EbsSnapshot = string;

export type EbsSnapshotsList = Array<unknown>;
export type EbsVolumeID = string;

export type EC2InstanceID = string;

export type EC2InstanceState = string;

export type EC2InstanceType = string;

export type EventResourceData = never;
export interface ExportSourceNetworkCfnTemplateRequest {
}
export interface ExportSourceNetworkCfnTemplateResponse {
}
export type ExtensionStatus = string;

export type FailbackLaunchType = string;

export type FailbackReplicationError = string;

export type FailbackState = string;

export type FailureReason = string;

export interface GetFailbackReplicationConfigurationRequest {
}
export interface GetFailbackReplicationConfigurationResponse {
}
export interface GetLaunchConfigurationRequest {
}
export interface GetReplicationConfigurationRequest {
}
export interface IdentificationHints {
}
export interface InitializeServiceRequest {
}
export interface InitializeServiceResponse {
}
export type InitiatedBy = string;

export interface InternalServerException {
}
export type IPsList = Array<unknown>;
export type ISO8601DatetimeString = string;

export type ISO8601DurationString = string;

export interface Job {
}
export type JobID = string;

export interface JobLog {
}
export type JobLogEvent = string;

export interface JobLogEventData {
}
export type JobLogs = Array<unknown>;
export type JobsList = Array<unknown>;
export type JobStatus = string;

export type JobType = string;

export type LargeBoundedString = string;

export type LastLaunchResult = string;

export type LastLaunchType = string;

export interface LaunchAction {
}
export type LaunchActionCategory = string;

export type LaunchActionDescription = string;

export type LaunchActionId = string;

export type LaunchActionIds = Array<unknown>;
export type LaunchActionName = string;

export type LaunchActionOrder = number;

export interface LaunchActionParameter {
}
export type LaunchActionParameterName = string;

export type LaunchActionParameters = Record<string, unknown>;
export type LaunchActionParameterType = string;

export type LaunchActionParameterValue = string;

export type LaunchActionResourceId = string;

export interface LaunchActionRun {
}
export type LaunchActionRunId = string;

export type LaunchActionRuns = Array<unknown>;
export type LaunchActionRunStatus = string;

export type LaunchActions = Array<unknown>;
export interface LaunchActionsRequestFilters {
}
export interface LaunchActionsStatus {
}
export type LaunchActionType = string;

export type LaunchActionVersion = string;

export interface LaunchConfiguration {
}
export interface LaunchConfigurationTemplate {
}
export type LaunchConfigurationTemplateID = string;

export type LaunchConfigurationTemplateIDs = Array<unknown>;
export type LaunchConfigurationTemplates = Array<unknown>;
export type LaunchDisposition = string;

export interface LaunchIntoInstanceProperties {
}
export type LaunchStatus = string;

export interface Licensing {
}
export interface LifeCycle {
}
export interface LifeCycleLastLaunch {
}
export interface LifeCycleLastLaunchInitiated {
}
export interface ListExtensibleSourceServersRequest {
}
export interface ListExtensibleSourceServersResponse {
}
export interface ListLaunchActionsRequest {
}
export interface ListLaunchActionsResponse {
}
export interface ListStagingAccountsRequest {
}
export interface ListStagingAccountsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type MaxResultsReplicatingSourceServers = number;

export type MaxResultsType = number;

export interface NetworkInterface {
}
export type NetworkInterfaces = Array<unknown>;
export type OriginEnvironment = string;

export interface OS {
}
export type OutpostARN = string;

export type PaginationToken = string;

export interface ParticipatingResource {
}
export type ParticipatingResourceID = never;
export type ParticipatingResources = Array<unknown>;
export interface ParticipatingServer {
}
export type ParticipatingServers = Array<unknown>;
export type PITPolicy = Array<unknown>;
export interface PITPolicyRule {
}
export type PITPolicyRuleUnits = string;

export type PositiveInteger = number;

export interface ProductCode {
}
export type ProductCodeId = string;

export type ProductCodeMode = string;

export type ProductCodes = Array<unknown>;
export interface PutLaunchActionRequest {
}
export interface PutLaunchActionResponse {
}
export interface RecoveryInstance {
}
export interface RecoveryInstanceDataReplicationError {
}
export interface RecoveryInstanceDataReplicationInfo {
}
export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
}
export type RecoveryInstanceDataReplicationInfoReplicatedDisks = Array<unknown>;
export interface RecoveryInstanceDataReplicationInitiation {
}
export interface RecoveryInstanceDataReplicationInitiationStep {
}
export type RecoveryInstanceDataReplicationInitiationStepName = string;

export type RecoveryInstanceDataReplicationInitiationSteps = Array<unknown>;
export type RecoveryInstanceDataReplicationInitiationStepStatus = string;

export type RecoveryInstanceDataReplicationState = string;

export interface RecoveryInstanceDisk {
}
export type RecoveryInstanceDisks = Array<unknown>;
export interface RecoveryInstanceFailback {
}
export type RecoveryInstanceID = string;

export type RecoveryInstanceIDs = Array<unknown>;
export interface RecoveryInstanceProperties {
}
export type RecoveryInstancesForTerminationRequest = Array<unknown>;
export interface RecoveryLifeCycle {
}
export type RecoveryResult = string;

export interface RecoverySnapshot {
}
export type RecoverySnapshotID = string;

export type RecoverySnapshotsList = Array<unknown>;
export type RecoverySnapshotsOrder = string;

export interface ReplicationConfiguration {
}
export type ReplicationConfigurationDataPlaneRouting = string;

export type ReplicationConfigurationDefaultLargeStagingDiskType = string;

export type ReplicationConfigurationEbsEncryption = string;

export interface ReplicationConfigurationReplicatedDisk {
}
export type ReplicationConfigurationReplicatedDisks = Array<unknown>;
export type ReplicationConfigurationReplicatedDiskStagingDiskType = string;

export interface ReplicationConfigurationTemplate {
}
export type ReplicationConfigurationTemplateID = string;

export type ReplicationConfigurationTemplateIDs = Array<unknown>;
export type ReplicationConfigurationTemplates = Array<unknown>;
export type ReplicationDirection = string;

export type ReplicationServersSecurityGroupsIDs = Array<unknown>;
export type ReplicationStatus = string;

export interface ResourceNotFoundException {
}
export interface RetryDataReplicationRequest {
}
export interface ReverseReplicationRequest {
}
export interface ReverseReplicationResponse {
}
export type SecurityGroupID = string;

export type SensitiveBoundedString = string;

export interface ServiceQuotaExceededException {
}
export type SmallBoundedString = string;

export interface SourceCloudProperties {
}
export interface SourceNetwork {
}
export interface SourceNetworkData {
}
export type SourceNetworkID = string;

export type SourceNetworksList = Array<unknown>;
export interface SourceProperties {
}
export interface SourceServer {
}
export type SourceServerARN = string;

export type SourceServerID = string;

export type SourceServerIDs = Array<unknown>;
export type SourceServersList = Array<unknown>;
export type SsmDocumentName = string;

export interface StagingArea {
}
export interface StagingSourceServer {
}
export type StagingSourceServersList = Array<unknown>;
export interface StartFailbackLaunchRequest {
}
export interface StartFailbackLaunchResponse {
}
export type StartFailbackRequestRecoveryInstanceIDs = Array<unknown>;
export interface StartRecoveryRequest {
}
export interface StartRecoveryRequestSourceServer {
}
export type StartRecoveryRequestSourceServers = Array<unknown>;
export interface StartRecoveryResponse {
}
export interface StartReplicationRequest {
}
export interface StartReplicationResponse {
}
export interface StartSourceNetworkRecoveryRequest {
}
export type StartSourceNetworkRecoveryRequestNetworkEntries = Array<unknown>;
export interface StartSourceNetworkRecoveryRequestNetworkEntry {
}
export interface StartSourceNetworkRecoveryResponse {
}
export interface StartSourceNetworkReplicationRequest {
}
export interface StartSourceNetworkReplicationResponse {
}
export interface StopFailbackRequest {
}
export interface StopReplicationRequest {
}
export interface StopReplicationResponse {
}
export interface StopSourceNetworkReplicationRequest {
}
export interface StopSourceNetworkReplicationResponse {
}
export type StrictlyPositiveInteger = number;

export type SubnetID = string;

export type TagKey = string;

export type TagKeys = Array<unknown>;
export interface TagResourceRequest {
}
export type TagsMap = Record<string, unknown>;
export type TagValue = string;

export type TargetInstanceTypeRightSizingMethod = string;

export interface TerminateRecoveryInstancesRequest {
}
export interface TerminateRecoveryInstancesResponse {
}
export interface ThrottlingException {
}
export interface UninitializedAccountException {
}
export interface UntagResourceRequest {
}
export interface UpdateFailbackReplicationConfigurationRequest {
}
export interface UpdateLaunchConfigurationRequest {
}
export interface UpdateLaunchConfigurationTemplateRequest {
}
export interface UpdateLaunchConfigurationTemplateResponse {
}
export interface UpdateReplicationConfigurationRequest {
}
export interface UpdateReplicationConfigurationTemplateRequest {
}
export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = string;

export type VolumeStatus = string;

export type VolumeToConversionMap = Record<string, unknown>;
export type VolumeToProductCodes = Record<string, unknown>;
export type VolumeToSizeMap = Record<string, unknown>;
export type VpcID = string;

export declare namespace AssociateSourceNetworkStack {
  export type Input = AssociateSourceNetworkStackRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateExtendedSourceServer {
  export type Input = CreateExtendedSourceServerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLaunchConfigurationTemplate {
  export type Input = CreateLaunchConfigurationTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateReplicationConfigurationTemplate {
  export type Input = CreateReplicationConfigurationTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSourceNetwork {
  export type Input = CreateSourceNetworkRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteJob {
  export type Input = DeleteJobRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteLaunchAction {
  export type Input = DeleteLaunchActionRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLaunchConfigurationTemplate {
  export type Input = DeleteLaunchConfigurationTemplateRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteRecoveryInstance {
  export type Input = DeleteRecoveryInstanceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteReplicationConfigurationTemplate {
  export type Input = DeleteReplicationConfigurationTemplateRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteSourceNetwork {
  export type Input = DeleteSourceNetworkRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DeleteSourceServer {
  export type Input = DeleteSourceServerRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DescribeJobLogItems {
  export type Input = DescribeJobLogItemsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeJobs {
  export type Input = DescribeJobsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLaunchConfigurationTemplates {
  export type Input = DescribeLaunchConfigurationTemplatesRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRecoveryInstances {
  export type Input = DescribeRecoveryInstancesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DescribeRecoverySnapshots {
  export type Input = DescribeRecoverySnapshotsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeReplicationConfigurationTemplates {
  export type Input = DescribeReplicationConfigurationTemplatesRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSourceNetworks {
  export type Input = DescribeSourceNetworksRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSourceServers {
  export type Input = DescribeSourceServersRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisconnectRecoveryInstance {
  export type Input = DisconnectRecoveryInstanceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace DisconnectSourceServer {
  export type Input = DisconnectSourceServerRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace ExportSourceNetworkCfnTemplate {
  export type Input = ExportSourceNetworkCfnTemplateRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFailbackReplicationConfiguration {
  export type Input = GetFailbackReplicationConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace GetLaunchConfiguration {
  export type Input = GetLaunchConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace GetReplicationConfiguration {
  export type Input = GetReplicationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace InitializeService {
  export type Input = InitializeServiceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListExtensibleSourceServers {
  export type Input = ListExtensibleSourceServersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLaunchActions {
  export type Input = ListLaunchActionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace ListStagingAccounts {
  export type Input = ListStagingAccountsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutLaunchAction {
  export type Input = PutLaunchActionRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RetryDataReplication {
  export type Input = RetryDataReplicationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReverseReplication {
  export type Input = ReverseReplicationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFailbackLaunch {
  export type Input = StartFailbackLaunchRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartRecovery {
  export type Input = StartRecoveryRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StartReplication {
  export type Input = StartReplicationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StartSourceNetworkRecovery {
  export type Input = StartSourceNetworkRecoveryRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSourceNetworkReplication {
  export type Input = StartSourceNetworkReplicationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StopFailback {
  export type Input = StopFailbackRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StopReplication {
  export type Input = StopReplicationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace StopSourceNetworkReplication {
  export type Input = StopSourceNetworkReplicationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
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

export declare namespace TerminateRecoveryInstances {
  export type Input = TerminateRecoveryInstancesRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UninitializedAccountException
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

export declare namespace UpdateFailbackReplicationConfiguration {
  export type Input = UpdateFailbackReplicationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | CommonAwsError;
}

export declare namespace UpdateLaunchConfiguration {
  export type Input = UpdateLaunchConfigurationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLaunchConfigurationTemplate {
  export type Input = UpdateLaunchConfigurationTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReplicationConfiguration {
  export type Input = UpdateReplicationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReplicationConfigurationTemplate {
  export type Input = UpdateReplicationConfigurationTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UninitializedAccountException
    | ValidationException
    | CommonAwsError;
}

