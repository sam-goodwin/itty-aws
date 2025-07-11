import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface GuardDutyAPIService {
  acceptAdministratorInvitation(
    input: AcceptAdministratorInvitationRequest,
  ): Effect.Effect<
    AcceptAdministratorInvitationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  acceptInvitation(
    input: AcceptInvitationRequest,
  ): Effect.Effect<
    AcceptInvitationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  archiveFindings(
    input: ArchiveFindingsRequest,
  ): Effect.Effect<
    ArchiveFindingsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createDetector(
    input: CreateDetectorRequest,
  ): Effect.Effect<
    CreateDetectorResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createFilter(
    input: CreateFilterRequest,
  ): Effect.Effect<
    CreateFilterResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createIPSet(
    input: CreateIPSetRequest,
  ): Effect.Effect<
    CreateIPSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createMalwareProtectionPlan(
    input: CreateMalwareProtectionPlanRequest,
  ): Effect.Effect<
    CreateMalwareProtectionPlanResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerErrorException
    | CommonAwsError
  >;
  createMembers(
    input: CreateMembersRequest,
  ): Effect.Effect<
    CreateMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createPublishingDestination(
    input: CreatePublishingDestinationRequest,
  ): Effect.Effect<
    CreatePublishingDestinationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createSampleFindings(
    input: CreateSampleFindingsRequest,
  ): Effect.Effect<
    CreateSampleFindingsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  createThreatIntelSet(
    input: CreateThreatIntelSetRequest,
  ): Effect.Effect<
    CreateThreatIntelSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  declineInvitations(
    input: DeclineInvitationsRequest,
  ): Effect.Effect<
    DeclineInvitationsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  deleteDetector(
    input: DeleteDetectorRequest,
  ): Effect.Effect<
    DeleteDetectorResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  deleteFilter(
    input: DeleteFilterRequest,
  ): Effect.Effect<
    DeleteFilterResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  deleteInvitations(
    input: DeleteInvitationsRequest,
  ): Effect.Effect<
    DeleteInvitationsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  deleteIPSet(
    input: DeleteIPSetRequest,
  ): Effect.Effect<
    DeleteIPSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  deleteMalwareProtectionPlan(
    input: DeleteMalwareProtectionPlanRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteMembers(
    input: DeleteMembersRequest,
  ): Effect.Effect<
    DeleteMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  deletePublishingDestination(
    input: DeletePublishingDestinationRequest,
  ): Effect.Effect<
    DeletePublishingDestinationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  deleteThreatIntelSet(
    input: DeleteThreatIntelSetRequest,
  ): Effect.Effect<
    DeleteThreatIntelSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  describeMalwareScans(
    input: DescribeMalwareScansRequest,
  ): Effect.Effect<
    DescribeMalwareScansResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  describeOrganizationConfiguration(
    input: DescribeOrganizationConfigurationRequest,
  ): Effect.Effect<
    DescribeOrganizationConfigurationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  describePublishingDestination(
    input: DescribePublishingDestinationRequest,
  ): Effect.Effect<
    DescribePublishingDestinationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  disableOrganizationAdminAccount(
    input: DisableOrganizationAdminAccountRequest,
  ): Effect.Effect<
    DisableOrganizationAdminAccountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  disassociateFromAdministratorAccount(
    input: DisassociateFromAdministratorAccountRequest,
  ): Effect.Effect<
    DisassociateFromAdministratorAccountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  disassociateFromMasterAccount(
    input: DisassociateFromMasterAccountRequest,
  ): Effect.Effect<
    DisassociateFromMasterAccountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  disassociateMembers(
    input: DisassociateMembersRequest,
  ): Effect.Effect<
    DisassociateMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  enableOrganizationAdminAccount(
    input: EnableOrganizationAdminAccountRequest,
  ): Effect.Effect<
    EnableOrganizationAdminAccountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getAdministratorAccount(
    input: GetAdministratorAccountRequest,
  ): Effect.Effect<
    GetAdministratorAccountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getCoverageStatistics(
    input: GetCoverageStatisticsRequest,
  ): Effect.Effect<
    GetCoverageStatisticsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getDetector(
    input: GetDetectorRequest,
  ): Effect.Effect<
    GetDetectorResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getFilter(
    input: GetFilterRequest,
  ): Effect.Effect<
    GetFilterResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getFindings(
    input: GetFindingsRequest,
  ): Effect.Effect<
    GetFindingsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getFindingsStatistics(
    input: GetFindingsStatisticsRequest,
  ): Effect.Effect<
    GetFindingsStatisticsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getInvitationsCount(
    input: GetInvitationsCountRequest,
  ): Effect.Effect<
    GetInvitationsCountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getIPSet(
    input: GetIPSetRequest,
  ): Effect.Effect<
    GetIPSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getMalwareProtectionPlan(
    input: GetMalwareProtectionPlanRequest,
  ): Effect.Effect<
    GetMalwareProtectionPlanResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getMalwareScanSettings(
    input: GetMalwareScanSettingsRequest,
  ): Effect.Effect<
    GetMalwareScanSettingsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getMasterAccount(
    input: GetMasterAccountRequest,
  ): Effect.Effect<
    GetMasterAccountResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getMemberDetectors(
    input: GetMemberDetectorsRequest,
  ): Effect.Effect<
    GetMemberDetectorsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getMembers(
    input: GetMembersRequest,
  ): Effect.Effect<
    GetMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getOrganizationStatistics(input: {}): Effect.Effect<
    GetOrganizationStatisticsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getRemainingFreeTrialDays(
    input: GetRemainingFreeTrialDaysRequest,
  ): Effect.Effect<
    GetRemainingFreeTrialDaysResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getThreatIntelSet(
    input: GetThreatIntelSetRequest,
  ): Effect.Effect<
    GetThreatIntelSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  getUsageStatistics(
    input: GetUsageStatisticsRequest,
  ): Effect.Effect<
    GetUsageStatisticsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  inviteMembers(
    input: InviteMembersRequest,
  ): Effect.Effect<
    InviteMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listCoverage(
    input: ListCoverageRequest,
  ): Effect.Effect<
    ListCoverageResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listDetectors(
    input: ListDetectorsRequest,
  ): Effect.Effect<
    ListDetectorsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listFilters(
    input: ListFiltersRequest,
  ): Effect.Effect<
    ListFiltersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listFindings(
    input: ListFindingsRequest,
  ): Effect.Effect<
    ListFindingsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listInvitations(
    input: ListInvitationsRequest,
  ): Effect.Effect<
    ListInvitationsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listIPSets(
    input: ListIPSetsRequest,
  ): Effect.Effect<
    ListIPSetsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listMalwareProtectionPlans(
    input: ListMalwareProtectionPlansRequest,
  ): Effect.Effect<
    ListMalwareProtectionPlansResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError
  >;
  listMembers(
    input: ListMembersRequest,
  ): Effect.Effect<
    ListMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listOrganizationAdminAccounts(
    input: ListOrganizationAdminAccountsRequest,
  ): Effect.Effect<
    ListOrganizationAdminAccountsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listPublishingDestinations(
    input: ListPublishingDestinationsRequest,
  ): Effect.Effect<
    ListPublishingDestinationsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError
  >;
  listThreatIntelSets(
    input: ListThreatIntelSetsRequest,
  ): Effect.Effect<
    ListThreatIntelSetsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  startMalwareScan(
    input: StartMalwareScanRequest,
  ): Effect.Effect<
    StartMalwareScanResponse,
    | BadRequestException
    | ConflictException
    | InternalServerErrorException
    | CommonAwsError
  >;
  startMonitoringMembers(
    input: StartMonitoringMembersRequest,
  ): Effect.Effect<
    StartMonitoringMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  stopMonitoringMembers(
    input: StopMonitoringMembersRequest,
  ): Effect.Effect<
    StopMonitoringMembersResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError
  >;
  unarchiveFindings(
    input: UnarchiveFindingsRequest,
  ): Effect.Effect<
    UnarchiveFindingsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError
  >;
  updateDetector(
    input: UpdateDetectorRequest,
  ): Effect.Effect<
    UpdateDetectorResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateFilter(
    input: UpdateFilterRequest,
  ): Effect.Effect<
    UpdateFilterResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateFindingsFeedback(
    input: UpdateFindingsFeedbackRequest,
  ): Effect.Effect<
    UpdateFindingsFeedbackResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateIPSet(
    input: UpdateIPSetRequest,
  ): Effect.Effect<
    UpdateIPSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateMalwareProtectionPlan(
    input: UpdateMalwareProtectionPlanRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateMalwareScanSettings(
    input: UpdateMalwareScanSettingsRequest,
  ): Effect.Effect<
    UpdateMalwareScanSettingsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateMemberDetectors(
    input: UpdateMemberDetectorsRequest,
  ): Effect.Effect<
    UpdateMemberDetectorsResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateOrganizationConfiguration(
    input: UpdateOrganizationConfigurationRequest,
  ): Effect.Effect<
    UpdateOrganizationConfigurationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updatePublishingDestination(
    input: UpdatePublishingDestinationRequest,
  ): Effect.Effect<
    UpdatePublishingDestinationResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
  updateThreatIntelSet(
    input: UpdateThreatIntelSetRequest,
  ): Effect.Effect<
    UpdateThreatIntelSetResponse,
    BadRequestException | InternalServerErrorException | CommonAwsError
  >;
}

export type Guardduty = GuardDutyAPIService;

export interface AcceptAdministratorInvitationRequest {
  DetectorId: string;
  AdministratorId: string;
  InvitationId: string;
}
export interface AcceptAdministratorInvitationResponse {}
export interface AcceptInvitationRequest {
  DetectorId: string;
  MasterId: string;
  InvitationId: string;
}
export interface AcceptInvitationResponse {}
export interface AccessControlList {
  AllowsPublicReadAccess?: boolean;
  AllowsPublicWriteAccess?: boolean;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly Type?: string;
}> {}
export interface AccessKey {
  PrincipalId?: string;
  UserName?: string;
  UserType?: string;
}
export interface AccessKeyDetails {
  AccessKeyId?: string;
  PrincipalId?: string;
  UserName?: string;
  UserType?: string;
}
export interface Account {
  Uid: string;
  Name?: string;
}
export interface AccountDetail {
  AccountId: string;
  Email: string;
}
export type AccountDetails = Array<AccountDetail>;
export interface AccountFreeTrialInfo {
  AccountId?: string;
  DataSources?: DataSourcesFreeTrial;
  Features?: Array<FreeTrialFeatureConfigurationResult>;
}
export type AccountFreeTrialInfos = Array<AccountFreeTrialInfo>;
export type AccountId = string;

export type AccountIds = Array<string>;
export interface AccountLevelPermissions {
  BlockPublicAccess?: BlockPublicAccess;
}
export interface AccountStatistics {
  AccountId?: string;
  LastGeneratedAt?: Date | string;
  TotalFindings?: number;
}
export interface Action {
  ActionType?: string;
  AwsApiCallAction?: AwsApiCallAction;
  DnsRequestAction?: DnsRequestAction;
  NetworkConnectionAction?: NetworkConnectionAction;
  PortProbeAction?: PortProbeAction;
  KubernetesApiCallAction?: KubernetesApiCallAction;
  RdsLoginAttemptAction?: RdsLoginAttemptAction;
  KubernetesPermissionCheckedDetails?: KubernetesPermissionCheckedDetails;
  KubernetesRoleBindingDetails?: KubernetesRoleBindingDetails;
  KubernetesRoleDetails?: KubernetesRoleDetails;
}
export interface Actor {
  Id: string;
  User?: User;
  Session?: Session;
  Process?: ActorProcess;
}
export type ActorIds = Array<string>;
export interface ActorProcess {
  Name: string;
  Path: string;
  Sha256?: string;
}
export type Actors = Array<Actor>;
export type AdditionalSequenceTypes = Array<string>;
export interface AddonDetails {
  AddonVersion?: string;
  AddonStatus?: string;
}
export interface AdminAccount {
  AdminAccountId?: string;
  AdminStatus?: AdminStatus;
}
export type AdminAccounts = Array<AdminAccount>;
export interface Administrator {
  AccountId?: string;
  InvitationId?: string;
  RelationshipStatus?: string;
  InvitedAt?: string;
}
export type AdminStatus = "ENABLED" | "DISABLE_IN_PROGRESS";
export type AffectedResources = Record<string, string>;
export interface AgentDetails {
  Version?: string;
}
export interface Anomaly {
  Profiles?: Record<string, Record<string, Array<AnomalyObject>>>;
  Unusual?: AnomalyUnusual;
}
export interface AnomalyObject {
  ProfileType?: ProfileType;
  ProfileSubtype?: ProfileSubtype;
  Observations?: Observations;
}
export type AnomalyProfileFeatureObjects = Array<AnomalyObject>;
export type AnomalyProfileFeatures = Record<string, Array<AnomalyObject>>;
export type AnomalyProfiles = Record<
  string,
  Record<string, Array<AnomalyObject>>
>;
export interface AnomalyUnusual {
  Behavior?: Record<string, Record<string, AnomalyObject>>;
}
export type AnomalyUnusualBehaviorFeature = Record<string, AnomalyObject>;
export interface ArchiveFindingsRequest {
  DetectorId: string;
  FindingIds: Array<string>;
}
export interface ArchiveFindingsResponse {}
export type AutoEnableMembers = "NEW" | "ALL" | "NONE";
export interface AutonomousSystem {
  Name: string;
  Number: number;
}
export interface AwsApiCallAction {
  Api?: string;
  CallerType?: string;
  DomainDetails?: DomainDetails;
  ErrorCode?: string;
  UserAgent?: string;
  RemoteIpDetails?: RemoteIpDetails;
  ServiceName?: string;
  RemoteAccountDetails?: RemoteAccountDetails;
  AffectedResources?: Record<string, string>;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
  readonly Type?: string;
}> {}
export type Behavior = Record<string, Record<string, AnomalyObject>>;
export interface BlockPublicAccess {
  IgnorePublicAcls?: boolean;
  RestrictPublicBuckets?: boolean;
  BlockPublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
}
export interface BucketLevelPermissions {
  AccessControlList?: AccessControlList;
  BucketPolicy?: BucketPolicy;
  BlockPublicAccess?: BlockPublicAccess;
}
export interface BucketPolicy {
  AllowsPublicReadAccess?: boolean;
  AllowsPublicWriteAccess?: boolean;
}
export interface City {
  CityName?: string;
}
export type ClientToken = string;

export interface CloudTrailConfigurationResult {
  Status: DataSourceStatus;
}
export type ClusterStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "PENDING";
export interface Condition {
  Eq?: Array<string>;
  Neq?: Array<string>;
  Gt?: number;
  Gte?: number;
  Lt?: number;
  Lte?: number;
  Equals?: Array<string>;
  NotEquals?: Array<string>;
  GreaterThan?: number;
  GreaterThanOrEqual?: number;
  LessThan?: number;
  LessThanOrEqual?: number;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly Type?: string;
}> {}
export interface Container {
  ContainerRuntime?: string;
  Id?: string;
  Name?: string;
  Image?: string;
  ImagePrefix?: string;
  VolumeMounts?: Array<VolumeMount>;
  SecurityContext?: SecurityContext;
}
export interface ContainerFindingResource {
  Image: string;
  ImageUid?: string;
}
export type ContainerImageUid = string;

export interface ContainerInstanceDetails {
  CoveredContainerInstances?: number;
  CompatibleContainerInstances?: number;
}
export type Containers = Array<Container>;
export type ContainerUid = string;

export type ContainerUids = Array<string>;
export type CountByCoverageStatus = Record<CoverageStatus, number>;
export type CountByResourceType = Record<ResourceType, number>;
export type CountBySeverity = Record<string, number>;
export interface Country {
  CountryCode?: string;
  CountryName?: string;
}
export interface CoverageEc2InstanceDetails {
  InstanceId?: string;
  InstanceType?: string;
  ClusterArn?: string;
  AgentDetails?: AgentDetails;
  ManagementType?: ManagementType;
}
export interface CoverageEcsClusterDetails {
  ClusterName?: string;
  FargateDetails?: FargateDetails;
  ContainerInstanceDetails?: ContainerInstanceDetails;
}
export interface CoverageEksClusterDetails {
  ClusterName?: string;
  CoveredNodes?: number;
  CompatibleNodes?: number;
  AddonDetails?: AddonDetails;
  ManagementType?: ManagementType;
}
export interface CoverageFilterCondition {
  Equals?: Array<string>;
  NotEquals?: Array<string>;
}
export interface CoverageFilterCriteria {
  FilterCriterion?: Array<CoverageFilterCriterion>;
}
export interface CoverageFilterCriterion {
  CriterionKey?: CoverageFilterCriterionKey;
  FilterCondition?: CoverageFilterCondition;
}
export type CoverageFilterCriterionKey =
  | "ACCOUNT_ID"
  | "CLUSTER_NAME"
  | "RESOURCE_TYPE"
  | "COVERAGE_STATUS"
  | "ADDON_VERSION"
  | "MANAGEMENT_TYPE"
  | "EKS_CLUSTER_NAME"
  | "ECS_CLUSTER_NAME"
  | "AGENT_VERSION"
  | "INSTANCE_ID"
  | "CLUSTER_ARN";
export type CoverageFilterCriterionList = Array<CoverageFilterCriterion>;
export interface CoverageResource {
  ResourceId?: string;
  DetectorId?: string;
  AccountId?: string;
  ResourceDetails?: CoverageResourceDetails;
  CoverageStatus?: CoverageStatus;
  Issue?: string;
  UpdatedAt?: Date | string;
}
export interface CoverageResourceDetails {
  EksClusterDetails?: CoverageEksClusterDetails;
  ResourceType?: ResourceType;
  EcsClusterDetails?: CoverageEcsClusterDetails;
  Ec2InstanceDetails?: CoverageEc2InstanceDetails;
}
export type CoverageResources = Array<CoverageResource>;
export interface CoverageSortCriteria {
  AttributeName?: CoverageSortKey;
  OrderBy?: OrderBy;
}
export type CoverageSortKey =
  | "ACCOUNT_ID"
  | "CLUSTER_NAME"
  | "COVERAGE_STATUS"
  | "ISSUE"
  | "ADDON_VERSION"
  | "UPDATED_AT"
  | "EKS_CLUSTER_NAME"
  | "ECS_CLUSTER_NAME"
  | "INSTANCE_ID";
export interface CoverageStatistics {
  CountByResourceType?: Record<ResourceType, number>;
  CountByCoverageStatus?: Record<CoverageStatus, number>;
}
export type CoverageStatisticsType =
  | "COUNT_BY_RESOURCE_TYPE"
  | "COUNT_BY_COVERAGE_STATUS";
export type CoverageStatisticsTypeList = Array<CoverageStatisticsType>;
export type CoverageStatus = "HEALTHY" | "UNHEALTHY";
export interface CreateDetectorRequest {
  Enable: boolean;
  ClientToken?: string;
  FindingPublishingFrequency?: FindingPublishingFrequency;
  DataSources?: DataSourceConfigurations;
  Tags?: Record<string, string>;
  Features?: Array<DetectorFeatureConfiguration>;
}
export interface CreateDetectorResponse {
  DetectorId?: string;
  UnprocessedDataSources?: UnprocessedDataSourcesResult;
}
export interface CreateFilterRequest {
  DetectorId: string;
  Name: string;
  Description?: string;
  Action?: FilterAction;
  Rank?: number;
  FindingCriteria: FindingCriteria;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateFilterResponse {
  Name: string;
}
export interface CreateIPSetRequest {
  DetectorId: string;
  Name: string;
  Format: IpSetFormat;
  Location: string;
  Activate: boolean;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateIPSetResponse {
  IpSetId: string;
}
export interface CreateMalwareProtectionPlanRequest {
  ClientToken?: string;
  Role: string;
  ProtectedResource: CreateProtectedResource;
  Actions?: MalwareProtectionPlanActions;
  Tags?: Record<string, string>;
}
export interface CreateMalwareProtectionPlanResponse {
  MalwareProtectionPlanId?: string;
}
export interface CreateMembersRequest {
  DetectorId: string;
  AccountDetails: Array<AccountDetail>;
}
export interface CreateMembersResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface CreateProtectedResource {
  S3Bucket?: CreateS3BucketResource;
}
export interface CreatePublishingDestinationRequest {
  DetectorId: string;
  DestinationType: DestinationType;
  DestinationProperties: DestinationProperties;
  ClientToken?: string;
}
export interface CreatePublishingDestinationResponse {
  DestinationId: string;
}
export interface CreateS3BucketResource {
  BucketName?: string;
  ObjectPrefixes?: Array<string>;
}
export interface CreateSampleFindingsRequest {
  DetectorId: string;
  FindingTypes?: Array<string>;
}
export interface CreateSampleFindingsResponse {}
export interface CreateThreatIntelSetRequest {
  DetectorId: string;
  Name: string;
  Format: ThreatIntelSetFormat;
  Location: string;
  Activate: boolean;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateThreatIntelSetResponse {
  ThreatIntelSetId: string;
}
export type Criterion = Record<string, Condition>;
export type CriterionKey =
  | "EC2_INSTANCE_ARN"
  | "SCAN_ID"
  | "ACCOUNT_ID"
  | "GUARDDUTY_FINDING_ID"
  | "SCAN_START_TIME"
  | "SCAN_STATUS"
  | "SCAN_TYPE";
export type DataSource =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_LOGS"
  | "KUBERNETES_AUDIT_LOGS"
  | "EC2_MALWARE_SCAN";
export interface DataSourceConfigurations {
  S3Logs?: S3LogsConfiguration;
  Kubernetes?: KubernetesConfiguration;
  MalwareProtection?: MalwareProtectionConfiguration;
}
export interface DataSourceConfigurationsResult {
  CloudTrail: CloudTrailConfigurationResult;
  DNSLogs: DNSLogsConfigurationResult;
  FlowLogs: FlowLogsConfigurationResult;
  S3Logs: S3LogsConfigurationResult;
  Kubernetes?: KubernetesConfigurationResult;
  MalwareProtection?: MalwareProtectionConfigurationResult;
}
export interface DataSourceFreeTrial {
  FreeTrialDaysRemaining?: number;
}
export type DataSourceList = Array<DataSource>;
export interface DataSourcesFreeTrial {
  CloudTrail?: DataSourceFreeTrial;
  DnsLogs?: DataSourceFreeTrial;
  FlowLogs?: DataSourceFreeTrial;
  S3Logs?: DataSourceFreeTrial;
  Kubernetes?: KubernetesDataSourceFreeTrial;
  MalwareProtection?: MalwareProtectionDataSourceFreeTrial;
}
export type DataSourceStatus = "ENABLED" | "DISABLED";
export interface DateStatistics {
  Date?: Date | string;
  LastGeneratedAt?: Date | string;
  Severity?: number;
  TotalFindings?: number;
}
export interface DeclineInvitationsRequest {
  AccountIds: Array<string>;
}
export interface DeclineInvitationsResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface DefaultServerSideEncryption {
  EncryptionType?: string;
  KmsMasterKeyArn?: string;
}
export interface DeleteDetectorRequest {
  DetectorId: string;
}
export interface DeleteDetectorResponse {}
export interface DeleteFilterRequest {
  DetectorId: string;
  FilterName: string;
}
export interface DeleteFilterResponse {}
export interface DeleteInvitationsRequest {
  AccountIds: Array<string>;
}
export interface DeleteInvitationsResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface DeleteIPSetRequest {
  DetectorId: string;
  IpSetId: string;
}
export interface DeleteIPSetResponse {}
export interface DeleteMalwareProtectionPlanRequest {
  MalwareProtectionPlanId: string;
}
export interface DeleteMembersRequest {
  DetectorId: string;
  AccountIds: Array<string>;
}
export interface DeleteMembersResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface DeletePublishingDestinationRequest {
  DetectorId: string;
  DestinationId: string;
}
export interface DeletePublishingDestinationResponse {}
export interface DeleteThreatIntelSetRequest {
  DetectorId: string;
  ThreatIntelSetId: string;
}
export interface DeleteThreatIntelSetResponse {}
export interface DescribeMalwareScansRequest {
  DetectorId: string;
  NextToken?: string;
  MaxResults?: number;
  FilterCriteria?: FilterCriteria;
  SortCriteria?: SortCriteria;
}
export interface DescribeMalwareScansResponse {
  Scans: Array<Scan>;
  NextToken?: string;
}
export interface DescribeOrganizationConfigurationRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeOrganizationConfigurationResponse {
  AutoEnable?: boolean;
  MemberAccountLimitReached: boolean;
  DataSources?: OrganizationDataSourceConfigurationsResult;
  Features?: Array<OrganizationFeatureConfigurationResult>;
  NextToken?: string;
  AutoEnableOrganizationMembers?: AutoEnableMembers;
}
export interface DescribePublishingDestinationRequest {
  DetectorId: string;
  DestinationId: string;
}
export interface DescribePublishingDestinationResponse {
  DestinationId: string;
  DestinationType: DestinationType;
  Status: PublishingStatus;
  PublishingFailureStartTimestamp: number;
  DestinationProperties: DestinationProperties;
}
export interface Destination {
  DestinationId: string;
  DestinationType: DestinationType;
  Status: PublishingStatus;
}
export interface DestinationProperties {
  DestinationArn?: string;
  KmsKeyArn?: string;
}
export type Destinations = Array<Destination>;
export type DestinationType = "S3";
export interface Detection {
  Anomaly?: Anomaly;
  Sequence?: Sequence;
}
export interface DetectorAdditionalConfiguration {
  Name?: FeatureAdditionalConfiguration;
  Status?: FeatureStatus;
}
export interface DetectorAdditionalConfigurationResult {
  Name?: FeatureAdditionalConfiguration;
  Status?: FeatureStatus;
  UpdatedAt?: Date | string;
}
export type DetectorAdditionalConfigurationResults =
  Array<DetectorAdditionalConfigurationResult>;
export type DetectorAdditionalConfigurations =
  Array<DetectorAdditionalConfiguration>;
export type DetectorFeature =
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "EKS_RUNTIME_MONITORING"
  | "LAMBDA_NETWORK_LOGS"
  | "RUNTIME_MONITORING";
export interface DetectorFeatureConfiguration {
  Name?: DetectorFeature;
  Status?: FeatureStatus;
  AdditionalConfiguration?: Array<DetectorAdditionalConfiguration>;
}
export interface DetectorFeatureConfigurationResult {
  Name?: DetectorFeatureResult;
  Status?: FeatureStatus;
  UpdatedAt?: Date | string;
  AdditionalConfiguration?: Array<DetectorAdditionalConfigurationResult>;
}
export type DetectorFeatureConfigurations = Array<DetectorFeatureConfiguration>;
export type DetectorFeatureConfigurationsResults =
  Array<DetectorFeatureConfigurationResult>;
export type DetectorFeatureResult =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "EKS_RUNTIME_MONITORING"
  | "LAMBDA_NETWORK_LOGS"
  | "RUNTIME_MONITORING";
export type DetectorId = string;

export type DetectorIds = Array<string>;
export type DetectorStatus = "ENABLED" | "DISABLED";
export interface DisableOrganizationAdminAccountRequest {
  AdminAccountId: string;
}
export interface DisableOrganizationAdminAccountResponse {}
export interface DisassociateFromAdministratorAccountRequest {
  DetectorId: string;
}
export interface DisassociateFromAdministratorAccountResponse {}
export interface DisassociateFromMasterAccountRequest {
  DetectorId: string;
}
export interface DisassociateFromMasterAccountResponse {}
export interface DisassociateMembersRequest {
  DetectorId: string;
  AccountIds: Array<string>;
}
export interface DisassociateMembersResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface DNSLogsConfigurationResult {
  Status: DataSourceStatus;
}
export interface DnsRequestAction {
  Domain?: string;
  Protocol?: string;
  Blocked?: boolean;
  DomainWithSuffix?: string;
}
export interface DomainDetails {
  Domain?: string;
}
export type Double = number;

export type EbsSnapshotPreservation = "NO_RETENTION" | "RETENTION_WITH_FINDING";
export interface EbsVolumeDetails {
  ScannedVolumeDetails?: Array<VolumeDetail>;
  SkippedVolumeDetails?: Array<VolumeDetail>;
}
export interface EbsVolumeScanDetails {
  ScanId?: string;
  ScanStartedAt?: Date | string;
  ScanCompletedAt?: Date | string;
  TriggerFindingId?: string;
  Sources?: Array<string>;
  ScanDetections?: ScanDetections;
  ScanType?: ScanType;
}
export interface EbsVolumesResult {
  Status?: DataSourceStatus;
  Reason?: string;
}
export interface Ec2Instance {
  AvailabilityZone?: string;
  ImageDescription?: string;
  InstanceState?: string;
  IamInstanceProfile?: IamInstanceProfile;
  InstanceType?: string;
  OutpostArn?: string;
  Platform?: string;
  ProductCodes?: Array<ProductCode>;
  Ec2NetworkInterfaceUids?: Array<string>;
}
export type Ec2InstanceUid = string;

export type Ec2InstanceUids = Array<string>;
export interface Ec2NetworkInterface {
  Ipv6Addresses?: Array<string>;
  PrivateIpAddresses?: Array<PrivateIpAddressDetails>;
  PublicIp?: string;
  SecurityGroups?: Array<SecurityGroup>;
  SubNetId?: string;
  VpcId?: string;
}
export type Ec2NetworkInterfaceUids = Array<string>;
export interface EcsClusterDetails {
  Name?: string;
  Arn?: string;
  Status?: string;
  ActiveServicesCount?: number;
  RegisteredContainerInstancesCount?: number;
  RunningTasksCount?: number;
  Tags?: Array<Tag>;
  TaskDetails?: EcsTaskDetails;
}
export interface EcsTaskDetails {
  Arn?: string;
  DefinitionArn?: string;
  Version?: string;
  TaskCreatedAt?: Date | string;
  StartedAt?: Date | string;
  StartedBy?: string;
  Tags?: Array<Tag>;
  Volumes?: Array<Volume>;
  Containers?: Array<Container>;
  Group?: string;
  LaunchType?: string;
}
export interface EksCluster {
  Arn?: string;
  CreatedAt?: Date | string;
  Status?: ClusterStatus;
  VpcId?: string;
  Ec2InstanceUids?: Array<string>;
}
export interface EksClusterDetails {
  Name?: string;
  Arn?: string;
  VpcId?: string;
  Status?: string;
  Tags?: Array<Tag>;
  CreatedAt?: Date | string;
}
export type Email = string;

export interface EnableOrganizationAdminAccountRequest {
  AdminAccountId: string;
}
export interface EnableOrganizationAdminAccountResponse {}
export type EndpointIds = Array<string>;
export type Eq = Array<string>;
export type Equals = Array<string>;
export interface Evidence {
  ThreatIntelligenceDetails?: Array<ThreatIntelligenceDetail>;
}
export interface FargateDetails {
  Issues?: Array<string>;
  ManagementType?: ManagementType;
}
export type FeatureAdditionalConfiguration =
  | "EKS_ADDON_MANAGEMENT"
  | "ECS_FARGATE_AGENT_MANAGEMENT"
  | "EC2_AGENT_MANAGEMENT";
export type FeatureStatus = "ENABLED" | "DISABLED";
export type Feedback = "USEFUL" | "NOT_USEFUL";
export type FilePaths = Array<ScanFilePath>;
export type FilterAction = "NOOP" | "ARCHIVE";
export interface FilterCondition {
  EqualsValue?: string;
  GreaterThan?: number;
  LessThan?: number;
}
export interface FilterCriteria {
  FilterCriterion?: Array<FilterCriterion>;
}
export interface FilterCriterion {
  CriterionKey?: CriterionKey;
  FilterCondition?: FilterCondition;
}
export type FilterCriterionList = Array<FilterCriterion>;
export type FilterDescription = string;

export type FilterName = string;

export type FilterNames = Array<string>;
export type FilterRank = number;

export interface Finding {
  AccountId: string;
  Arn: string;
  Confidence?: number;
  CreatedAt: string;
  Description?: string;
  Id: string;
  Partition?: string;
  Region: string;
  Resource: Resource;
  SchemaVersion: string;
  Service?: Service;
  Severity: number;
  Title?: string;
  Type: string;
  UpdatedAt: string;
  AssociatedAttackSequenceArn?: string;
}
export interface FindingCriteria {
  Criterion?: Record<string, Condition>;
}
export type FindingId = string;

export type FindingIds = Array<string>;
export type FindingPublishingFrequency =
  | "FIFTEEN_MINUTES"
  | "ONE_HOUR"
  | "SIX_HOURS";
export type FindingResourceType =
  | "EC2_INSTANCE"
  | "EC2_NETWORK_INTERFACE"
  | "S3_BUCKET"
  | "S3_OBJECT"
  | "ACCESS_KEY"
  | "EKS_CLUSTER"
  | "KUBERNETES_WORKLOAD"
  | "CONTAINER";
export type Findings = Array<Finding>;
export interface FindingStatistics {
  CountBySeverity?: Record<string, number>;
  GroupedByAccount?: Array<AccountStatistics>;
  GroupedByDate?: Array<DateStatistics>;
  GroupedByFindingType?: Array<FindingTypeStatistics>;
  GroupedByResource?: Array<ResourceStatistics>;
  GroupedBySeverity?: Array<SeverityStatistics>;
}
export type FindingStatisticType = "COUNT_BY_SEVERITY";
export type FindingStatisticTypes = Array<FindingStatisticType>;
export type FindingType = string;

export type FindingTypes = Array<string>;
export interface FindingTypeStatistics {
  FindingType?: string;
  LastGeneratedAt?: Date | string;
  TotalFindings?: number;
}
export type FlagsList = Array<string>;
export interface FlowLogsConfigurationResult {
  Status: DataSourceStatus;
}
export interface FreeTrialFeatureConfigurationResult {
  Name?: FreeTrialFeatureResult;
  FreeTrialDaysRemaining?: number;
}
export type FreeTrialFeatureConfigurationsResults =
  Array<FreeTrialFeatureConfigurationResult>;
export type FreeTrialFeatureResult =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "EKS_RUNTIME_MONITORING"
  | "LAMBDA_NETWORK_LOGS"
  | "FARGATE_RUNTIME_MONITORING"
  | "EC2_RUNTIME_MONITORING";
export interface GeoLocation {
  Lat?: number;
  Lon?: number;
}
export interface GetAdministratorAccountRequest {
  DetectorId: string;
}
export interface GetAdministratorAccountResponse {
  Administrator: Administrator;
}
export interface GetCoverageStatisticsRequest {
  DetectorId: string;
  FilterCriteria?: CoverageFilterCriteria;
  StatisticsType: Array<CoverageStatisticsType>;
}
export interface GetCoverageStatisticsResponse {
  CoverageStatistics?: CoverageStatistics;
}
export interface GetDetectorRequest {
  DetectorId: string;
}
export interface GetDetectorResponse {
  CreatedAt?: string;
  FindingPublishingFrequency?: FindingPublishingFrequency;
  ServiceRole: string;
  Status: DetectorStatus;
  UpdatedAt?: string;
  DataSources?: DataSourceConfigurationsResult;
  Tags?: Record<string, string>;
  Features?: Array<DetectorFeatureConfigurationResult>;
}
export interface GetFilterRequest {
  DetectorId: string;
  FilterName: string;
}
export interface GetFilterResponse {
  Name: string;
  Description?: string;
  Action: FilterAction;
  Rank?: number;
  FindingCriteria: FindingCriteria;
  Tags?: Record<string, string>;
}
export interface GetFindingsRequest {
  DetectorId: string;
  FindingIds: Array<string>;
  SortCriteria?: SortCriteria;
}
export interface GetFindingsResponse {
  Findings: Array<Finding>;
}
export interface GetFindingsStatisticsRequest {
  DetectorId: string;
  FindingStatisticTypes?: Array<FindingStatisticType>;
  FindingCriteria?: FindingCriteria;
  GroupBy?: GroupByType;
  OrderBy?: OrderBy;
  MaxResults?: number;
}
export interface GetFindingsStatisticsResponse {
  FindingStatistics: FindingStatistics;
  NextToken?: string;
}
export interface GetInvitationsCountRequest {}
export interface GetInvitationsCountResponse {
  InvitationsCount?: number;
}
export interface GetIPSetRequest {
  DetectorId: string;
  IpSetId: string;
}
export interface GetIPSetResponse {
  Name: string;
  Format: IpSetFormat;
  Location: string;
  Status: IpSetStatus;
  Tags?: Record<string, string>;
}
export interface GetMalwareProtectionPlanRequest {
  MalwareProtectionPlanId: string;
}
export interface GetMalwareProtectionPlanResponse {
  Arn?: string;
  Role?: string;
  ProtectedResource?: CreateProtectedResource;
  Actions?: MalwareProtectionPlanActions;
  CreatedAt?: Date | string;
  Status?: MalwareProtectionPlanStatus;
  StatusReasons?: Array<MalwareProtectionPlanStatusReason>;
  Tags?: Record<string, string>;
}
export interface GetMalwareScanSettingsRequest {
  DetectorId: string;
}
export interface GetMalwareScanSettingsResponse {
  ScanResourceCriteria?: ScanResourceCriteria;
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
}
export interface GetMasterAccountRequest {
  DetectorId: string;
}
export interface GetMasterAccountResponse {
  Master: Master;
}
export interface GetMemberDetectorsRequest {
  DetectorId: string;
  AccountIds: Array<string>;
}
export interface GetMemberDetectorsResponse {
  MemberDataSourceConfigurations: Array<MemberDataSourceConfiguration>;
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface GetMembersRequest {
  DetectorId: string;
  AccountIds: Array<string>;
}
export interface GetMembersResponse {
  Members: Array<Member>;
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface GetOrganizationStatisticsResponse {
  OrganizationDetails?: OrganizationDetails;
}
export interface GetRemainingFreeTrialDaysRequest {
  DetectorId: string;
  AccountIds?: Array<string>;
}
export interface GetRemainingFreeTrialDaysResponse {
  Accounts?: Array<AccountFreeTrialInfo>;
  UnprocessedAccounts?: Array<UnprocessedAccount>;
}
export interface GetThreatIntelSetRequest {
  DetectorId: string;
  ThreatIntelSetId: string;
}
export interface GetThreatIntelSetResponse {
  Name: string;
  Format: ThreatIntelSetFormat;
  Location: string;
  Status: ThreatIntelSetStatus;
  Tags?: Record<string, string>;
}
export interface GetUsageStatisticsRequest {
  DetectorId: string;
  UsageStatisticType: UsageStatisticType;
  UsageCriteria: UsageCriteria;
  Unit?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetUsageStatisticsResponse {
  UsageStatistics?: UsageStatistics;
  NextToken?: string;
}
export type GroupByType =
  | "ACCOUNT"
  | "DATE"
  | "FINDING_TYPE"
  | "RESOURCE"
  | "SEVERITY";
export type GroupedByAccount = Array<AccountStatistics>;
export type GroupedByDate = Array<DateStatistics>;
export type GroupedByFindingType = Array<FindingTypeStatistics>;
export type GroupedByResource = Array<ResourceStatistics>;
export type GroupedBySeverity = Array<SeverityStatistics>;
export type Groups = Array<string>;
export type GuardDutyArn = string;

export interface HighestSeverityThreatDetails {
  Severity?: string;
  ThreatName?: string;
  Count?: number;
}
export interface HostPath {
  Path?: string;
}
export interface IamInstanceProfile {
  Arn?: string;
  Id?: string;
}
export interface ImpersonatedUser {
  Username?: string;
  Groups?: Array<string>;
}
export interface Indicator {
  Key: IndicatorType;
  Values?: Array<string>;
  Title?: string;
}
export type Indicators = Array<Indicator>;
export type IndicatorTitle = string;

export type IndicatorType =
  | "SUSPICIOUS_USER_AGENT"
  | "SUSPICIOUS_NETWORK"
  | "MALICIOUS_IP"
  | "TOR_IP"
  | "ATTACK_TACTIC"
  | "HIGH_RISK_API"
  | "ATTACK_TECHNIQUE"
  | "UNUSUAL_API_FOR_ACCOUNT"
  | "UNUSUAL_ASN_FOR_ACCOUNT"
  | "UNUSUAL_ASN_FOR_USER"
  | "SUSPICIOUS_PROCESS"
  | "MALICIOUS_DOMAIN"
  | "MALICIOUS_PROCESS"
  | "CRYPTOMINING_IP"
  | "CRYPTOMINING_DOMAIN"
  | "CRYPTOMINING_PROCESS";
export type IndicatorValues = Array<string>;
export type IndicatorValueString = string;

export type InstanceArn = string;

export interface InstanceDetails {
  AvailabilityZone?: string;
  IamInstanceProfile?: IamInstanceProfile;
  ImageDescription?: string;
  ImageId?: string;
  InstanceId?: string;
  InstanceState?: string;
  InstanceType?: string;
  OutpostArn?: string;
  LaunchTime?: string;
  NetworkInterfaces?: Array<NetworkInterface>;
  Platform?: string;
  ProductCodes?: Array<ProductCode>;
  Tags?: Array<Tag>;
}
export type Integer = number;

export type IntegerValueWithMax = number;

export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message?: string;
  readonly Type?: string;
}> {}
export interface Invitation {
  AccountId?: string;
  InvitationId?: string;
  RelationshipStatus?: string;
  InvitedAt?: string;
}
export type Invitations = Array<Invitation>;
export interface InviteMembersRequest {
  DetectorId: string;
  AccountIds: Array<string>;
  DisableEmailNotification?: boolean;
  Message?: string;
}
export interface InviteMembersResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export type IpSetFormat =
  | "TXT"
  | "STIX"
  | "OTX_CSV"
  | "ALIEN_VAULT"
  | "PROOF_POINT"
  | "FIRE_EYE";
export type IpSetIds = Array<string>;
export type IpSetStatus =
  | "INACTIVE"
  | "ACTIVATING"
  | "ACTIVE"
  | "DEACTIVATING"
  | "ERROR"
  | "DELETE_PENDING"
  | "DELETED";
export type Ipv6Addresses = Array<string>;
export type Issues = Array<string>;
export interface ItemPath {
  NestedItemPath?: string;
  Hash?: string;
}
export type ItemPaths = Array<ItemPath>;
export interface KubernetesApiCallAction {
  RequestUri?: string;
  Verb?: string;
  SourceIps?: Array<string>;
  UserAgent?: string;
  RemoteIpDetails?: RemoteIpDetails;
  StatusCode?: number;
  Parameters?: string;
  Resource?: string;
  Subresource?: string;
  Namespace?: string;
  ResourceName?: string;
}
export interface KubernetesAuditLogsConfiguration {
  Enable: boolean;
}
export interface KubernetesAuditLogsConfigurationResult {
  Status: DataSourceStatus;
}
export interface KubernetesConfiguration {
  AuditLogs: KubernetesAuditLogsConfiguration;
}
export interface KubernetesConfigurationResult {
  AuditLogs: KubernetesAuditLogsConfigurationResult;
}
export interface KubernetesDataSourceFreeTrial {
  AuditLogs?: DataSourceFreeTrial;
}
export interface KubernetesDetails {
  KubernetesUserDetails?: KubernetesUserDetails;
  KubernetesWorkloadDetails?: KubernetesWorkloadDetails;
}
export interface KubernetesPermissionCheckedDetails {
  Verb?: string;
  Resource?: string;
  Namespace?: string;
  Allowed?: boolean;
}
export type KubernetesResourcesTypes =
  | "PODS"
  | "JOBS"
  | "CRONJOBS"
  | "DEPLOYMENTS"
  | "DAEMONSETS"
  | "STATEFULSETS"
  | "REPLICASETS"
  | "REPLICATIONCONTROLLERS";
export interface KubernetesRoleBindingDetails {
  Kind?: string;
  Name?: string;
  Uid?: string;
  RoleRefName?: string;
  RoleRefKind?: string;
}
export interface KubernetesRoleDetails {
  Kind?: string;
  Name?: string;
  Uid?: string;
}
export interface KubernetesUserDetails {
  Username?: string;
  Uid?: string;
  Groups?: Array<string>;
  SessionName?: Array<string>;
  ImpersonatedUser?: ImpersonatedUser;
}
export interface KubernetesWorkload {
  ContainerUids?: Array<string>;
  Namespace?: string;
  KubernetesResourcesTypes?: KubernetesResourcesTypes;
}
export interface KubernetesWorkloadDetails {
  Name?: string;
  Type?: string;
  Uid?: string;
  Namespace?: string;
  HostNetwork?: boolean;
  Containers?: Array<Container>;
  Volumes?: Array<Volume>;
  ServiceAccountName?: string;
  HostIPC?: boolean;
  HostPID?: boolean;
}
export interface LambdaDetails {
  FunctionArn?: string;
  FunctionName?: string;
  Description?: string;
  LastModifiedAt?: Date | string;
  RevisionId?: string;
  FunctionVersion?: string;
  Role?: string;
  VpcConfig?: VpcConfig;
  Tags?: Array<Tag>;
}
export type Lineage = Array<LineageObject>;
export interface LineageObject {
  StartTime?: Date | string;
  NamespacePid?: number;
  UserId?: number;
  Name?: string;
  Pid?: number;
  Uuid?: string;
  ExecutablePath?: string;
  Euid?: number;
  ParentUuid?: string;
}
export interface ListCoverageRequest {
  DetectorId: string;
  NextToken?: string;
  MaxResults?: number;
  FilterCriteria?: CoverageFilterCriteria;
  SortCriteria?: CoverageSortCriteria;
}
export interface ListCoverageResponse {
  Resources: Array<CoverageResource>;
  NextToken?: string;
}
export interface ListDetectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDetectorsResponse {
  DetectorIds: Array<string>;
  NextToken?: string;
}
export interface ListFiltersRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFiltersResponse {
  FilterNames: Array<string>;
  NextToken?: string;
}
export interface ListFindingsRequest {
  DetectorId: string;
  FindingCriteria?: FindingCriteria;
  SortCriteria?: SortCriteria;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFindingsResponse {
  FindingIds: Array<string>;
  NextToken?: string;
}
export interface ListInvitationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInvitationsResponse {
  Invitations?: Array<Invitation>;
  NextToken?: string;
}
export interface ListIPSetsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListIPSetsResponse {
  IpSetIds: Array<string>;
  NextToken?: string;
}
export interface ListMalwareProtectionPlansRequest {
  NextToken?: string;
}
export interface ListMalwareProtectionPlansResponse {
  MalwareProtectionPlans?: Array<MalwareProtectionPlanSummary>;
  NextToken?: string;
}
export interface ListMembersRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
  OnlyAssociated?: string;
}
export interface ListMembersResponse {
  Members?: Array<Member>;
  NextToken?: string;
}
export interface ListOrganizationAdminAccountsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOrganizationAdminAccountsResponse {
  AdminAccounts?: Array<AdminAccount>;
  NextToken?: string;
}
export interface ListPublishingDestinationsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPublishingDestinationsResponse {
  Destinations: Array<Destination>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListThreatIntelSetsRequest {
  DetectorId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListThreatIntelSetsResponse {
  ThreatIntelSetIds: Array<string>;
  NextToken?: string;
}
export interface LocalIpDetails {
  IpAddressV4?: string;
  IpAddressV6?: string;
}
export interface LocalPortDetails {
  Port?: number;
  PortName?: string;
}
export type Location = string;

export interface LoginAttribute {
  User?: string;
  Application?: string;
  FailedLoginAttempts?: number;
  SuccessfulLoginAttempts?: number;
}
export type LoginAttributes = Array<LoginAttribute>;
export type Long = number;

export type LongValue = number;

export interface MalwareProtectionConfiguration {
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindings;
}
export interface MalwareProtectionConfigurationResult {
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindingsResult;
  ServiceRole?: string;
}
export interface MalwareProtectionDataSourceFreeTrial {
  ScanEc2InstanceWithFindings?: DataSourceFreeTrial;
}
export interface MalwareProtectionPlanActions {
  Tagging?: MalwareProtectionPlanTaggingAction;
}
export type MalwareProtectionPlanObjectPrefixesList = Array<string>;
export type MalwareProtectionPlansSummary = Array<MalwareProtectionPlanSummary>;
export type MalwareProtectionPlanStatus = "ACTIVE" | "WARNING" | "ERROR";
export interface MalwareProtectionPlanStatusReason {
  Code?: string;
  Message?: string;
}
export type MalwareProtectionPlanStatusReasonsList =
  Array<MalwareProtectionPlanStatusReason>;
export interface MalwareProtectionPlanSummary {
  MalwareProtectionPlanId?: string;
}
export interface MalwareProtectionPlanTaggingAction {
  Status?: MalwareProtectionPlanTaggingActionStatus;
}
export type MalwareProtectionPlanTaggingActionStatus = "ENABLED" | "DISABLED";
export interface MalwareScanDetails {
  Threats?: Array<Threat>;
}
export type ManagementType = "AUTO_MANAGED" | "MANUAL" | "DISABLED";
export type MapEquals = Array<ScanConditionPair>;
export interface Master {
  AccountId?: string;
  InvitationId?: string;
  RelationshipStatus?: string;
  InvitedAt?: string;
}
export type MaxResults = number;

export type MaxResults100 = number;

export interface Member {
  AccountId: string;
  DetectorId?: string;
  MasterId: string;
  Email: string;
  RelationshipStatus: string;
  InvitedAt?: string;
  UpdatedAt: string;
  AdministratorId?: string;
}
export interface MemberAdditionalConfiguration {
  Name?: OrgFeatureAdditionalConfiguration;
  Status?: FeatureStatus;
}
export interface MemberAdditionalConfigurationResult {
  Name?: OrgFeatureAdditionalConfiguration;
  Status?: FeatureStatus;
  UpdatedAt?: Date | string;
}
export type MemberAdditionalConfigurationResults =
  Array<MemberAdditionalConfigurationResult>;
export type MemberAdditionalConfigurations =
  Array<MemberAdditionalConfiguration>;
export interface MemberDataSourceConfiguration {
  AccountId: string;
  DataSources?: DataSourceConfigurationsResult;
  Features?: Array<MemberFeaturesConfigurationResult>;
}
export type MemberDataSourceConfigurations =
  Array<MemberDataSourceConfiguration>;
export interface MemberFeaturesConfiguration {
  Name?: OrgFeature;
  Status?: FeatureStatus;
  AdditionalConfiguration?: Array<MemberAdditionalConfiguration>;
}
export interface MemberFeaturesConfigurationResult {
  Name?: OrgFeature;
  Status?: FeatureStatus;
  UpdatedAt?: Date | string;
  AdditionalConfiguration?: Array<MemberAdditionalConfigurationResult>;
}
export type MemberFeaturesConfigurations = Array<MemberFeaturesConfiguration>;
export type MemberFeaturesConfigurationsResults =
  Array<MemberFeaturesConfigurationResult>;
export type Members = Array<Member>;
export type MemoryRegionsList = Array<string>;
export type MfaStatus = "ENABLED" | "DISABLED";
export type Name = string;

export type Neq = Array<string>;
export interface NetworkConnection {
  Direction: NetworkDirection;
}
export interface NetworkConnectionAction {
  Blocked?: boolean;
  ConnectionDirection?: string;
  LocalPortDetails?: LocalPortDetails;
  Protocol?: string;
  LocalIpDetails?: LocalIpDetails;
  LocalNetworkInterface?: string;
  RemoteIpDetails?: RemoteIpDetails;
  RemotePortDetails?: RemotePortDetails;
}
export type NetworkDirection = "INBOUND" | "OUTBOUND";
export interface NetworkEndpoint {
  Id: string;
  Ip?: string;
  Domain?: string;
  Port?: number;
  Location?: NetworkGeoLocation;
  AutonomousSystem?: AutonomousSystem;
  Connection?: NetworkConnection;
}
export type NetworkEndpoints = Array<NetworkEndpoint>;
export interface NetworkGeoLocation {
  City: string;
  Country: string;
  Latitude: number;
  Longitude: number;
}
export interface NetworkInterface {
  Ipv6Addresses?: Array<string>;
  NetworkInterfaceId?: string;
  PrivateDnsName?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: Array<PrivateIpAddressDetails>;
  PublicDnsName?: string;
  PublicIp?: string;
  SecurityGroups?: Array<SecurityGroup>;
  SubnetId?: string;
  VpcId?: string;
}
export type NetworkInterfaces = Array<NetworkInterface>;
export type NonEmptyString = string;

export type NotEquals = Array<string>;
export interface Observations {
  Text?: Array<string>;
}
export type ObservationTexts = Array<string>;
export type OrderBy = "ASC" | "DESC";
export interface Organization {
  Asn?: string;
  AsnOrg?: string;
  Isp?: string;
  Org?: string;
}
export interface OrganizationAdditionalConfiguration {
  Name?: OrgFeatureAdditionalConfiguration;
  AutoEnable?: OrgFeatureStatus;
}
export interface OrganizationAdditionalConfigurationResult {
  Name?: OrgFeatureAdditionalConfiguration;
  AutoEnable?: OrgFeatureStatus;
}
export type OrganizationAdditionalConfigurationResults =
  Array<OrganizationAdditionalConfigurationResult>;
export type OrganizationAdditionalConfigurations =
  Array<OrganizationAdditionalConfiguration>;
export interface OrganizationDataSourceConfigurations {
  S3Logs?: OrganizationS3LogsConfiguration;
  Kubernetes?: OrganizationKubernetesConfiguration;
  MalwareProtection?: OrganizationMalwareProtectionConfiguration;
}
export interface OrganizationDataSourceConfigurationsResult {
  S3Logs: OrganizationS3LogsConfigurationResult;
  Kubernetes?: OrganizationKubernetesConfigurationResult;
  MalwareProtection?: OrganizationMalwareProtectionConfigurationResult;
}
export interface OrganizationDetails {
  UpdatedAt?: Date | string;
  OrganizationStatistics?: OrganizationStatistics;
}
export interface OrganizationEbsVolumes {
  AutoEnable?: boolean;
}
export interface OrganizationEbsVolumesResult {
  AutoEnable?: boolean;
}
export interface OrganizationFeatureConfiguration {
  Name?: OrgFeature;
  AutoEnable?: OrgFeatureStatus;
  AdditionalConfiguration?: Array<OrganizationAdditionalConfiguration>;
}
export interface OrganizationFeatureConfigurationResult {
  Name?: OrgFeature;
  AutoEnable?: OrgFeatureStatus;
  AdditionalConfiguration?: Array<OrganizationAdditionalConfigurationResult>;
}
export type OrganizationFeaturesConfigurations =
  Array<OrganizationFeatureConfiguration>;
export type OrganizationFeaturesConfigurationsResults =
  Array<OrganizationFeatureConfigurationResult>;
export interface OrganizationFeatureStatistics {
  Name?: OrgFeature;
  EnabledAccountsCount?: number;
  AdditionalConfiguration?: Array<OrganizationFeatureStatisticsAdditionalConfiguration>;
}
export interface OrganizationFeatureStatisticsAdditionalConfiguration {
  Name?: OrgFeatureAdditionalConfiguration;
  EnabledAccountsCount?: number;
}
export type OrganizationFeatureStatisticsAdditionalConfigurations =
  Array<OrganizationFeatureStatisticsAdditionalConfiguration>;
export type OrganizationFeatureStatisticsResults =
  Array<OrganizationFeatureStatistics>;
export interface OrganizationKubernetesAuditLogsConfiguration {
  AutoEnable: boolean;
}
export interface OrganizationKubernetesAuditLogsConfigurationResult {
  AutoEnable: boolean;
}
export interface OrganizationKubernetesConfiguration {
  AuditLogs: OrganizationKubernetesAuditLogsConfiguration;
}
export interface OrganizationKubernetesConfigurationResult {
  AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult;
}
export interface OrganizationMalwareProtectionConfiguration {
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings;
}
export interface OrganizationMalwareProtectionConfigurationResult {
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindingsResult;
}
export interface OrganizationS3LogsConfiguration {
  AutoEnable: boolean;
}
export interface OrganizationS3LogsConfigurationResult {
  AutoEnable: boolean;
}
export interface OrganizationScanEc2InstanceWithFindings {
  EbsVolumes?: OrganizationEbsVolumes;
}
export interface OrganizationScanEc2InstanceWithFindingsResult {
  EbsVolumes?: OrganizationEbsVolumesResult;
}
export interface OrganizationStatistics {
  TotalAccountsCount?: number;
  MemberAccountsCount?: number;
  ActiveAccountsCount?: number;
  EnabledAccountsCount?: number;
  CountByFeature?: Array<OrganizationFeatureStatistics>;
}
export type OrgFeature =
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "EKS_RUNTIME_MONITORING"
  | "LAMBDA_NETWORK_LOGS"
  | "RUNTIME_MONITORING";
export type OrgFeatureAdditionalConfiguration =
  | "EKS_ADDON_MANAGEMENT"
  | "ECS_FARGATE_AGENT_MANAGEMENT"
  | "EC2_AGENT_MANAGEMENT";
export type OrgFeatureStatus = "NEW" | "NONE" | "ALL";
export interface Owner {
  Id?: string;
}
export interface PermissionConfiguration {
  BucketLevelPermissions?: BucketLevelPermissions;
  AccountLevelPermissions?: AccountLevelPermissions;
}
export interface PortProbeAction {
  Blocked?: boolean;
  PortProbeDetails?: Array<PortProbeDetail>;
}
export interface PortProbeDetail {
  LocalPortDetails?: LocalPortDetails;
  LocalIpDetails?: LocalIpDetails;
  RemoteIpDetails?: RemoteIpDetails;
}
export type PortProbeDetails = Array<PortProbeDetail>;
export type PositiveLong = number;

export interface PrivateIpAddressDetails {
  PrivateDnsName?: string;
  PrivateIpAddress?: string;
}
export type PrivateIpAddresses = Array<PrivateIpAddressDetails>;
export interface ProcessDetails {
  Name?: string;
  ExecutablePath?: string;
  ExecutableSha256?: string;
  NamespacePid?: number;
  Pwd?: string;
  Pid?: number;
  StartTime?: Date | string;
  Uuid?: string;
  ParentUuid?: string;
  User?: string;
  UserId?: number;
  Euid?: number;
  Lineage?: Array<LineageObject>;
}
export type ProcessName = string;

export type ProcessPath = string;

export type ProcessSha256 = string;

export interface ProductCode {
  Code?: string;
  ProductType?: string;
}
export type ProductCodes = Array<ProductCode>;
export type ProfileSubtype = "FREQUENT" | "INFREQUENT" | "UNSEEN" | "RARE";
export type ProfileType = "FREQUENCY";
export interface PublicAccess {
  PermissionConfiguration?: PermissionConfiguration;
  EffectivePermission?: string;
}
export interface PublicAccessConfiguration {
  PublicAclAccess?: PublicAccessStatus;
  PublicPolicyAccess?: PublicAccessStatus;
  PublicAclIgnoreBehavior?: PublicAclIgnoreBehavior;
  PublicBucketRestrictBehavior?: PublicBucketRestrictBehavior;
}
export type PublicAccessStatus = "BLOCKED" | "ALLOWED";
export type PublicAclIgnoreBehavior = "IGNORED" | "NOT_IGNORED";
export type PublicBucketRestrictBehavior = "RESTRICTED" | "NOT_RESTRICTED";
export type PublishingStatus =
  | "PENDING_VERIFICATION"
  | "PUBLISHING"
  | "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY"
  | "STOPPED";
export interface RdsDbInstanceDetails {
  DbInstanceIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  DbClusterIdentifier?: string;
  DbInstanceArn?: string;
  Tags?: Array<Tag>;
}
export interface RdsDbUserDetails {
  User?: string;
  Application?: string;
  Database?: string;
  Ssl?: string;
  AuthMethod?: string;
}
export interface RdsLimitlessDbDetails {
  DbShardGroupIdentifier?: string;
  DbShardGroupResourceId?: string;
  DbShardGroupArn?: string;
  Engine?: string;
  EngineVersion?: string;
  DbClusterIdentifier?: string;
  Tags?: Array<Tag>;
}
export interface RdsLoginAttemptAction {
  RemoteIpDetails?: RemoteIpDetails;
  LoginAttributes?: Array<LoginAttribute>;
}
export interface RemoteAccountDetails {
  AccountId?: string;
  Affiliated?: boolean;
}
export interface RemoteIpDetails {
  City?: City;
  Country?: Country;
  GeoLocation?: GeoLocation;
  IpAddressV4?: string;
  IpAddressV6?: string;
  Organization?: Organization;
}
export interface RemotePortDetails {
  Port?: number;
  PortName?: string;
}
export interface Resource {
  AccessKeyDetails?: AccessKeyDetails;
  S3BucketDetails?: Array<S3BucketDetail>;
  InstanceDetails?: InstanceDetails;
  EksClusterDetails?: EksClusterDetails;
  KubernetesDetails?: KubernetesDetails;
  ResourceType?: string;
  EbsVolumeDetails?: EbsVolumeDetails;
  EcsClusterDetails?: EcsClusterDetails;
  ContainerDetails?: Container;
  RdsDbInstanceDetails?: RdsDbInstanceDetails;
  RdsLimitlessDbDetails?: RdsLimitlessDbDetails;
  RdsDbUserDetails?: RdsDbUserDetails;
  LambdaDetails?: LambdaDetails;
}
export type ResourceArn = string;

export interface ResourceData {
  S3Bucket?: S3Bucket;
  Ec2Instance?: Ec2Instance;
  AccessKey?: AccessKey;
  Ec2NetworkInterface?: Ec2NetworkInterface;
  S3Object?: S3Object;
  EksCluster?: EksCluster;
  KubernetesWorkload?: KubernetesWorkload;
  Container?: ContainerFindingResource;
}
export interface ResourceDetails {
  InstanceArn?: string;
}
export type ResourceList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly Type?: string;
}> {}
export type Resources = Array<ResourceV2>;
export interface ResourceStatistics {
  AccountId?: string;
  LastGeneratedAt?: Date | string;
  ResourceId?: string;
  ResourceType?: string;
  TotalFindings?: number;
}
export type ResourceType = "EKS" | "ECS" | "EC2";
export type ResourceUids = Array<string>;
export interface ResourceV2 {
  Uid: string;
  Name?: string;
  AccountId?: string;
  ResourceType: FindingResourceType;
  Region?: string;
  Service?: string;
  CloudPartition?: string;
  Tags?: Array<Tag>;
  Data?: ResourceData;
}
export interface RuntimeContext {
  ModifyingProcess?: ProcessDetails;
  ModifiedAt?: Date | string;
  ScriptPath?: string;
  LibraryPath?: string;
  LdPreloadValue?: string;
  SocketPath?: string;
  RuncBinaryPath?: string;
  ReleaseAgentPath?: string;
  MountSource?: string;
  MountTarget?: string;
  FileSystemType?: string;
  Flags?: Array<string>;
  ModuleName?: string;
  ModuleFilePath?: string;
  ModuleSha256?: string;
  ShellHistoryFilePath?: string;
  TargetProcess?: ProcessDetails;
  AddressFamily?: string;
  IanaProtocolNumber?: number;
  MemoryRegions?: Array<string>;
  ToolName?: string;
  ToolCategory?: string;
  ServiceName?: string;
  CommandLineExample?: string;
  ThreatFilePath?: string;
}
export interface RuntimeDetails {
  Process?: ProcessDetails;
  Context?: RuntimeContext;
}
export interface S3Bucket {
  OwnerId?: string;
  CreatedAt?: Date | string;
  EncryptionType?: string;
  EncryptionKeyArn?: string;
  EffectivePermission?: string;
  PublicReadAccess?: PublicAccessStatus;
  PublicWriteAccess?: PublicAccessStatus;
  AccountPublicAccess?: PublicAccessConfiguration;
  BucketPublicAccess?: PublicAccessConfiguration;
  S3ObjectUids?: Array<string>;
}
export interface S3BucketDetail {
  Arn?: string;
  Name?: string;
  Type?: string;
  CreatedAt?: Date | string;
  Owner?: Owner;
  Tags?: Array<Tag>;
  DefaultServerSideEncryption?: DefaultServerSideEncryption;
  PublicAccess?: PublicAccess;
  S3ObjectDetails?: Array<S3ObjectDetail>;
}
export type S3BucketDetails = Array<S3BucketDetail>;
export interface S3LogsConfiguration {
  Enable: boolean;
}
export interface S3LogsConfigurationResult {
  Status: DataSourceStatus;
}
export interface S3Object {
  ETag?: string;
  Key?: string;
  VersionId?: string;
}
export interface S3ObjectDetail {
  ObjectArn?: string;
  Key?: string;
  ETag?: string;
  Hash?: string;
  VersionId?: string;
}
export type S3ObjectDetails = Array<S3ObjectDetail>;
export type S3ObjectUids = Array<string>;
export interface Scan {
  DetectorId?: string;
  AdminDetectorId?: string;
  ScanId?: string;
  ScanStatus?: ScanStatus;
  FailureReason?: string;
  ScanStartTime?: Date | string;
  ScanEndTime?: Date | string;
  TriggerDetails?: TriggerDetails;
  ResourceDetails?: ResourceDetails;
  ScanResultDetails?: ScanResultDetails;
  AccountId?: string;
  TotalBytes?: number;
  FileCount?: number;
  AttachedVolumes?: Array<VolumeDetail>;
  ScanType?: ScanType;
}
export interface ScanCondition {
  MapEquals: Array<ScanConditionPair>;
}
export interface ScanConditionPair {
  Key: string;
  Value?: string;
}
export type ScanCriterion = Record<ScanCriterionKey, ScanCondition>;
export type ScanCriterionKey = "EC2_INSTANCE_TAG";
export interface ScanDetections {
  ScannedItemCount?: ScannedItemCount;
  ThreatsDetectedItemCount?: ThreatsDetectedItemCount;
  HighestSeverityThreatDetails?: HighestSeverityThreatDetails;
  ThreatDetectedByName?: ThreatDetectedByName;
}
export interface ScanEc2InstanceWithFindings {
  EbsVolumes?: boolean;
}
export interface ScanEc2InstanceWithFindingsResult {
  EbsVolumes?: EbsVolumesResult;
}
export interface ScanFilePath {
  FilePath?: string;
  VolumeArn?: string;
  Hash?: string;
  FileName?: string;
}
export interface ScannedItemCount {
  TotalGb?: number;
  Files?: number;
  Volumes?: number;
}
export interface ScanResourceCriteria {
  Include?: Record<ScanCriterionKey, ScanCondition>;
  Exclude?: Record<ScanCriterionKey, ScanCondition>;
}
export type ScanResult = "CLEAN" | "INFECTED";
export interface ScanResultDetails {
  ScanResult?: ScanResult;
}
export type Scans = Array<Scan>;
export type ScanStatus = "RUNNING" | "COMPLETED" | "FAILED" | "SKIPPED";
export interface ScanThreatName {
  Name?: string;
  Severity?: string;
  ItemCount?: number;
  FilePaths?: Array<ScanFilePath>;
}
export type ScanThreatNames = Array<ScanThreatName>;
export type ScanType = "GUARDDUTY_INITIATED" | "ON_DEMAND";
export interface SecurityContext {
  Privileged?: boolean;
  AllowPrivilegeEscalation?: boolean;
}
export interface SecurityGroup {
  GroupId?: string;
  GroupName?: string;
}
export type SecurityGroups = Array<SecurityGroup>;
export type SensitiveString = string;

export interface Sequence {
  Uid: string;
  Description: string;
  Actors?: Array<Actor>;
  Resources?: Array<ResourceV2>;
  Endpoints?: Array<NetworkEndpoint>;
  Signals: Array<Signal>;
  SequenceIndicators?: Array<Indicator>;
  AdditionalSequenceTypes?: Array<string>;
}
export type SequenceDescription = string;

export interface Service {
  Action?: Action;
  Evidence?: Evidence;
  Archived?: boolean;
  Count?: number;
  DetectorId?: string;
  EventFirstSeen?: string;
  EventLastSeen?: string;
  ResourceRole?: string;
  ServiceName?: string;
  UserFeedback?: string;
  AdditionalInfo?: ServiceAdditionalInfo;
  FeatureName?: string;
  EbsVolumeScanDetails?: EbsVolumeScanDetails;
  RuntimeDetails?: RuntimeDetails;
  Detection?: Detection;
  MalwareScanDetails?: MalwareScanDetails;
}
export interface ServiceAdditionalInfo {
  Value?: string;
  Type?: string;
}
export interface Session {
  Uid?: string;
  MfaStatus?: MfaStatus;
  CreatedTime?: Date | string;
  Issuer?: string;
}
export type SessionNameList = Array<string>;
export interface SeverityStatistics {
  LastGeneratedAt?: Date | string;
  Severity?: number;
  TotalFindings?: number;
}
export interface Signal {
  Uid: string;
  Type: SignalType;
  Description?: string;
  Name: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
  FirstSeenAt: Date | string;
  LastSeenAt: Date | string;
  Severity?: number;
  Count: number;
  ResourceUids?: Array<string>;
  ActorIds?: Array<string>;
  EndpointIds?: Array<string>;
  SignalIndicators?: Array<Indicator>;
}
export type SignalDescription = string;

export type Signals = Array<Signal>;
export type SignalType =
  | "FINDING"
  | "CLOUD_TRAIL"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "FLOW_LOGS"
  | "DNS_LOGS"
  | "RUNTIME_MONITORING";
export interface SortCriteria {
  AttributeName?: string;
  OrderBy?: OrderBy;
}
export type SourceIps = Array<string>;
export type Sources = Array<string>;
export interface StartMalwareScanRequest {
  ResourceArn: string;
}
export interface StartMalwareScanResponse {
  ScanId?: string;
}
export interface StartMonitoringMembersRequest {
  DetectorId: string;
  AccountIds: Array<string>;
}
export interface StartMonitoringMembersResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface StopMonitoringMembersRequest {
  DetectorId: string;
  AccountIds: Array<string>;
}
export interface StopMonitoringMembersResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export type SubnetIds = Array<string>;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export interface Threat {
  Name?: string;
  Source?: string;
  ItemPaths?: Array<ItemPath>;
}
export interface ThreatDetectedByName {
  ItemCount?: number;
  UniqueThreatNameCount?: number;
  Shortened?: boolean;
  ThreatNames?: Array<ScanThreatName>;
}
export interface ThreatIntelligenceDetail {
  ThreatListName?: string;
  ThreatNames?: Array<string>;
  ThreatFileSha256?: string;
}
export type ThreatIntelligenceDetails = Array<ThreatIntelligenceDetail>;
export type ThreatIntelSetFormat =
  | "TXT"
  | "STIX"
  | "OTX_CSV"
  | "ALIEN_VAULT"
  | "PROOF_POINT"
  | "FIRE_EYE";
export type ThreatIntelSetIds = Array<string>;
export type ThreatIntelSetStatus =
  | "INACTIVE"
  | "ACTIVATING"
  | "ACTIVE"
  | "DEACTIVATING"
  | "ERROR"
  | "DELETE_PENDING"
  | "DELETED";
export type ThreatNames = Array<string>;
export type Threats = Array<Threat>;
export interface ThreatsDetectedItemCount {
  Files?: number;
}
export type Timestamp = Date | string;

export interface Total {
  Amount?: string;
  Unit?: string;
}
export interface TriggerDetails {
  GuardDutyFindingId?: string;
  Description?: string;
}
export interface UnarchiveFindingsRequest {
  DetectorId: string;
  FindingIds: Array<string>;
}
export interface UnarchiveFindingsResponse {}
export interface UnprocessedAccount {
  AccountId: string;
  Result: string;
}
export type UnprocessedAccounts = Array<UnprocessedAccount>;
export interface UnprocessedDataSourcesResult {
  MalwareProtection?: MalwareProtectionConfigurationResult;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDetectorRequest {
  DetectorId: string;
  Enable?: boolean;
  FindingPublishingFrequency?: FindingPublishingFrequency;
  DataSources?: DataSourceConfigurations;
  Features?: Array<DetectorFeatureConfiguration>;
}
export interface UpdateDetectorResponse {}
export interface UpdateFilterRequest {
  DetectorId: string;
  FilterName: string;
  Description?: string;
  Action?: FilterAction;
  Rank?: number;
  FindingCriteria?: FindingCriteria;
}
export interface UpdateFilterResponse {
  Name: string;
}
export interface UpdateFindingsFeedbackRequest {
  DetectorId: string;
  FindingIds: Array<string>;
  Feedback: Feedback;
  Comments?: string;
}
export interface UpdateFindingsFeedbackResponse {}
export interface UpdateIPSetRequest {
  DetectorId: string;
  IpSetId: string;
  Name?: string;
  Location?: string;
  Activate?: boolean;
}
export interface UpdateIPSetResponse {}
export interface UpdateMalwareProtectionPlanRequest {
  MalwareProtectionPlanId: string;
  Role?: string;
  Actions?: MalwareProtectionPlanActions;
  ProtectedResource?: UpdateProtectedResource;
}
export interface UpdateMalwareScanSettingsRequest {
  DetectorId: string;
  ScanResourceCriteria?: ScanResourceCriteria;
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
}
export interface UpdateMalwareScanSettingsResponse {}
export interface UpdateMemberDetectorsRequest {
  DetectorId: string;
  AccountIds: Array<string>;
  DataSources?: DataSourceConfigurations;
  Features?: Array<MemberFeaturesConfiguration>;
}
export interface UpdateMemberDetectorsResponse {
  UnprocessedAccounts: Array<UnprocessedAccount>;
}
export interface UpdateOrganizationConfigurationRequest {
  DetectorId: string;
  AutoEnable?: boolean;
  DataSources?: OrganizationDataSourceConfigurations;
  Features?: Array<OrganizationFeatureConfiguration>;
  AutoEnableOrganizationMembers?: AutoEnableMembers;
}
export interface UpdateOrganizationConfigurationResponse {}
export interface UpdateProtectedResource {
  S3Bucket?: UpdateS3BucketResource;
}
export interface UpdatePublishingDestinationRequest {
  DetectorId: string;
  DestinationId: string;
  DestinationProperties?: DestinationProperties;
}
export interface UpdatePublishingDestinationResponse {}
export interface UpdateS3BucketResource {
  ObjectPrefixes?: Array<string>;
}
export interface UpdateThreatIntelSetRequest {
  DetectorId: string;
  ThreatIntelSetId: string;
  Name?: string;
  Location?: string;
  Activate?: boolean;
}
export interface UpdateThreatIntelSetResponse {}
export interface UsageAccountResult {
  AccountId?: string;
  Total?: Total;
}
export type UsageAccountResultList = Array<UsageAccountResult>;
export interface UsageCriteria {
  AccountIds?: Array<string>;
  DataSources?: Array<DataSource>;
  Resources?: Array<string>;
  Features?: Array<UsageFeature>;
}
export interface UsageDataSourceResult {
  DataSource?: DataSource;
  Total?: Total;
}
export type UsageDataSourceResultList = Array<UsageDataSourceResult>;
export type UsageFeature =
  | "FLOW_LOGS"
  | "CLOUD_TRAIL"
  | "DNS_LOGS"
  | "S3_DATA_EVENTS"
  | "EKS_AUDIT_LOGS"
  | "EBS_MALWARE_PROTECTION"
  | "RDS_LOGIN_EVENTS"
  | "LAMBDA_NETWORK_LOGS"
  | "EKS_RUNTIME_MONITORING"
  | "FARGATE_RUNTIME_MONITORING"
  | "EC2_RUNTIME_MONITORING"
  | "RDS_DBI_PROTECTION_PROVISIONED"
  | "RDS_DBI_PROTECTION_SERVERLESS";
export type UsageFeatureList = Array<UsageFeature>;
export interface UsageFeatureResult {
  Feature?: UsageFeature;
  Total?: Total;
}
export type UsageFeatureResultList = Array<UsageFeatureResult>;
export interface UsageResourceResult {
  Resource?: string;
  Total?: Total;
}
export type UsageResourceResultList = Array<UsageResourceResult>;
export interface UsageStatistics {
  SumByAccount?: Array<UsageAccountResult>;
  TopAccountsByFeature?: Array<UsageTopAccountsResult>;
  SumByDataSource?: Array<UsageDataSourceResult>;
  SumByResource?: Array<UsageResourceResult>;
  TopResources?: Array<UsageResourceResult>;
  SumByFeature?: Array<UsageFeatureResult>;
}
export type UsageStatisticType =
  | "SUM_BY_ACCOUNT"
  | "SUM_BY_DATA_SOURCE"
  | "SUM_BY_RESOURCE"
  | "TOP_RESOURCES"
  | "SUM_BY_FEATURES"
  | "TOP_ACCOUNTS_BY_FEATURE";
export interface UsageTopAccountResult {
  AccountId?: string;
  Total?: Total;
}
export type UsageTopAccountsByFeatureList = Array<UsageTopAccountResult>;
export interface UsageTopAccountsResult {
  Feature?: UsageFeature;
  Accounts?: Array<UsageTopAccountResult>;
}
export type UsageTopAccountsResultList = Array<UsageTopAccountsResult>;
export interface User {
  Name: string;
  Uid: string;
  Type: string;
  CredentialUid?: string;
  Account?: Account;
}
export interface Volume {
  Name?: string;
  HostPath?: HostPath;
}
export interface VolumeDetail {
  VolumeArn?: string;
  VolumeType?: string;
  DeviceName?: string;
  VolumeSizeInGB?: number;
  EncryptionType?: string;
  SnapshotArn?: string;
  KmsKeyArn?: string;
}
export type VolumeDetails = Array<VolumeDetail>;
export interface VolumeMount {
  Name?: string;
  MountPath?: string;
}
export type VolumeMounts = Array<VolumeMount>;
export type Volumes = Array<Volume>;
export interface VpcConfig {
  SubnetIds?: Array<string>;
  VpcId?: string;
  SecurityGroups?: Array<SecurityGroup>;
}
export declare namespace AcceptAdministratorInvitation {
  export type Input = AcceptAdministratorInvitationRequest;
  export type Output = AcceptAdministratorInvitationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace AcceptInvitation {
  export type Input = AcceptInvitationRequest;
  export type Output = AcceptInvitationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ArchiveFindings {
  export type Input = ArchiveFindingsRequest;
  export type Output = ArchiveFindingsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateDetector {
  export type Input = CreateDetectorRequest;
  export type Output = CreateDetectorResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateFilter {
  export type Input = CreateFilterRequest;
  export type Output = CreateFilterResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateIPSet {
  export type Input = CreateIPSetRequest;
  export type Output = CreateIPSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateMalwareProtectionPlan {
  export type Input = CreateMalwareProtectionPlanRequest;
  export type Output = CreateMalwareProtectionPlanResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateMembers {
  export type Input = CreateMembersRequest;
  export type Output = CreateMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreatePublishingDestination {
  export type Input = CreatePublishingDestinationRequest;
  export type Output = CreatePublishingDestinationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateSampleFindings {
  export type Input = CreateSampleFindingsRequest;
  export type Output = CreateSampleFindingsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace CreateThreatIntelSet {
  export type Input = CreateThreatIntelSetRequest;
  export type Output = CreateThreatIntelSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeclineInvitations {
  export type Input = DeclineInvitationsRequest;
  export type Output = DeclineInvitationsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeleteDetector {
  export type Input = DeleteDetectorRequest;
  export type Output = DeleteDetectorResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeleteFilter {
  export type Input = DeleteFilterRequest;
  export type Output = DeleteFilterResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeleteInvitations {
  export type Input = DeleteInvitationsRequest;
  export type Output = DeleteInvitationsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeleteIPSet {
  export type Input = DeleteIPSetRequest;
  export type Output = DeleteIPSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeleteMalwareProtectionPlan {
  export type Input = DeleteMalwareProtectionPlanRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMembers {
  export type Input = DeleteMembersRequest;
  export type Output = DeleteMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeletePublishingDestination {
  export type Input = DeletePublishingDestinationRequest;
  export type Output = DeletePublishingDestinationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DeleteThreatIntelSet {
  export type Input = DeleteThreatIntelSetRequest;
  export type Output = DeleteThreatIntelSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DescribeMalwareScans {
  export type Input = DescribeMalwareScansRequest;
  export type Output = DescribeMalwareScansResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfiguration {
  export type Input = DescribeOrganizationConfigurationRequest;
  export type Output = DescribeOrganizationConfigurationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DescribePublishingDestination {
  export type Input = DescribePublishingDestinationRequest;
  export type Output = DescribePublishingDestinationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DisableOrganizationAdminAccount {
  export type Input = DisableOrganizationAdminAccountRequest;
  export type Output = DisableOrganizationAdminAccountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DisassociateFromAdministratorAccount {
  export type Input = DisassociateFromAdministratorAccountRequest;
  export type Output = DisassociateFromAdministratorAccountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DisassociateFromMasterAccount {
  export type Input = DisassociateFromMasterAccountRequest;
  export type Output = DisassociateFromMasterAccountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace DisassociateMembers {
  export type Input = DisassociateMembersRequest;
  export type Output = DisassociateMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace EnableOrganizationAdminAccount {
  export type Input = EnableOrganizationAdminAccountRequest;
  export type Output = EnableOrganizationAdminAccountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetAdministratorAccount {
  export type Input = GetAdministratorAccountRequest;
  export type Output = GetAdministratorAccountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetCoverageStatistics {
  export type Input = GetCoverageStatisticsRequest;
  export type Output = GetCoverageStatisticsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetDetector {
  export type Input = GetDetectorRequest;
  export type Output = GetDetectorResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetFilter {
  export type Input = GetFilterRequest;
  export type Output = GetFilterResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetFindings {
  export type Input = GetFindingsRequest;
  export type Output = GetFindingsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetFindingsStatistics {
  export type Input = GetFindingsStatisticsRequest;
  export type Output = GetFindingsStatisticsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetInvitationsCount {
  export type Input = GetInvitationsCountRequest;
  export type Output = GetInvitationsCountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetIPSet {
  export type Input = GetIPSetRequest;
  export type Output = GetIPSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetMalwareProtectionPlan {
  export type Input = GetMalwareProtectionPlanRequest;
  export type Output = GetMalwareProtectionPlanResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMalwareScanSettings {
  export type Input = GetMalwareScanSettingsRequest;
  export type Output = GetMalwareScanSettingsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetMasterAccount {
  export type Input = GetMasterAccountRequest;
  export type Output = GetMasterAccountResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetMemberDetectors {
  export type Input = GetMemberDetectorsRequest;
  export type Output = GetMemberDetectorsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetMembers {
  export type Input = GetMembersRequest;
  export type Output = GetMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetOrganizationStatistics {
  export type Input = {};
  export type Output = GetOrganizationStatisticsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetRemainingFreeTrialDays {
  export type Input = GetRemainingFreeTrialDaysRequest;
  export type Output = GetRemainingFreeTrialDaysResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetThreatIntelSet {
  export type Input = GetThreatIntelSetRequest;
  export type Output = GetThreatIntelSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace GetUsageStatistics {
  export type Input = GetUsageStatisticsRequest;
  export type Output = GetUsageStatisticsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace InviteMembers {
  export type Input = InviteMembersRequest;
  export type Output = InviteMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListCoverage {
  export type Input = ListCoverageRequest;
  export type Output = ListCoverageResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListDetectors {
  export type Input = ListDetectorsRequest;
  export type Output = ListDetectorsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListFilters {
  export type Input = ListFiltersRequest;
  export type Output = ListFiltersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListFindings {
  export type Input = ListFindingsRequest;
  export type Output = ListFindingsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListInvitations {
  export type Input = ListInvitationsRequest;
  export type Output = ListInvitationsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListIPSets {
  export type Input = ListIPSetsRequest;
  export type Output = ListIPSetsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListMalwareProtectionPlans {
  export type Input = ListMalwareProtectionPlansRequest;
  export type Output = ListMalwareProtectionPlansResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersRequest;
  export type Output = ListMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListOrganizationAdminAccounts {
  export type Input = ListOrganizationAdminAccountsRequest;
  export type Output = ListOrganizationAdminAccountsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListPublishingDestinations {
  export type Input = ListPublishingDestinationsRequest;
  export type Output = ListPublishingDestinationsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace ListThreatIntelSets {
  export type Input = ListThreatIntelSetsRequest;
  export type Output = ListThreatIntelSetsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace StartMalwareScan {
  export type Input = StartMalwareScanRequest;
  export type Output = StartMalwareScanResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace StartMonitoringMembers {
  export type Input = StartMonitoringMembersRequest;
  export type Output = StartMonitoringMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace StopMonitoringMembers {
  export type Input = StopMonitoringMembersRequest;
  export type Output = StopMonitoringMembersResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UnarchiveFindings {
  export type Input = UnarchiveFindingsRequest;
  export type Output = UnarchiveFindingsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateDetector {
  export type Input = UpdateDetectorRequest;
  export type Output = UpdateDetectorResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateFilter {
  export type Input = UpdateFilterRequest;
  export type Output = UpdateFilterResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateFindingsFeedback {
  export type Input = UpdateFindingsFeedbackRequest;
  export type Output = UpdateFindingsFeedbackResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateIPSet {
  export type Input = UpdateIPSetRequest;
  export type Output = UpdateIPSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateMalwareProtectionPlan {
  export type Input = UpdateMalwareProtectionPlanRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMalwareScanSettings {
  export type Input = UpdateMalwareScanSettingsRequest;
  export type Output = UpdateMalwareScanSettingsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateMemberDetectors {
  export type Input = UpdateMemberDetectorsRequest;
  export type Output = UpdateMemberDetectorsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationConfiguration {
  export type Input = UpdateOrganizationConfigurationRequest;
  export type Output = UpdateOrganizationConfigurationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdatePublishingDestination {
  export type Input = UpdatePublishingDestinationRequest;
  export type Output = UpdatePublishingDestinationResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}

export declare namespace UpdateThreatIntelSet {
  export type Input = UpdateThreatIntelSetRequest;
  export type Output = UpdateThreatIntelSetResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | CommonAwsError;
}
