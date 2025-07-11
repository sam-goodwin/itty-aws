import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonOpenSearchService {
  acceptInboundConnection(
    input: AcceptInboundConnectionRequest,
  ): Effect.Effect<
    AcceptInboundConnectionResponse,
    | DisabledOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  addDataSource(
    input: AddDataSourceRequest,
  ): Effect.Effect<
    AddDataSourceResponse,
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  addDirectQueryDataSource(
    input: AddDirectQueryDataSourceRequest,
  ): Effect.Effect<
    AddDirectQueryDataSourceResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  addTags(
    input: AddTagsRequest,
  ): Effect.Effect<
    {},
    | BaseException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  associatePackage(
    input: AssociatePackageRequest,
  ): Effect.Effect<
    AssociatePackageResponse,
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  associatePackages(
    input: AssociatePackagesRequest,
  ): Effect.Effect<
    AssociatePackagesResponse,
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  authorizeVpcEndpointAccess(
    input: AuthorizeVpcEndpointAccessRequest,
  ): Effect.Effect<
    AuthorizeVpcEndpointAccessResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  cancelDomainConfigChange(
    input: CancelDomainConfigChangeRequest,
  ): Effect.Effect<
    CancelDomainConfigChangeResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  cancelServiceSoftwareUpdate(
    input: CancelServiceSoftwareUpdateRequest,
  ): Effect.Effect<
    CancelServiceSoftwareUpdateResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AccessDeniedException
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    CreateDomainResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  createOutboundConnection(
    input: CreateOutboundConnectionRequest,
  ): Effect.Effect<
    CreateOutboundConnectionResponse,
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  createPackage(
    input: CreatePackageRequest,
  ): Effect.Effect<
    CreatePackageResponse,
    | AccessDeniedException
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  createVpcEndpoint(
    input: CreateVpcEndpointRequest,
  ): Effect.Effect<
    CreateVpcEndpointResponse,
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | AccessDeniedException
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceRequest,
  ): Effect.Effect<
    DeleteDataSourceResponse,
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteDirectQueryDataSource(
    input: DeleteDirectQueryDataSourceRequest,
  ): Effect.Effect<
    {},
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    DeleteDomainResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteInboundConnection(
    input: DeleteInboundConnectionRequest,
  ): Effect.Effect<
    DeleteInboundConnectionResponse,
    DisabledOperationException | ResourceNotFoundException | CommonAwsError
  >;
  deleteOutboundConnection(
    input: DeleteOutboundConnectionRequest,
  ): Effect.Effect<
    DeleteOutboundConnectionResponse,
    DisabledOperationException | ResourceNotFoundException | CommonAwsError
  >;
  deletePackage(
    input: DeletePackageRequest,
  ): Effect.Effect<
    DeletePackageResponse,
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteVpcEndpoint(
    input: DeleteVpcEndpointRequest,
  ): Effect.Effect<
    DeleteVpcEndpointResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeDomain(
    input: DescribeDomainRequest,
  ): Effect.Effect<
    DescribeDomainResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDomainAutoTunes(
    input: DescribeDomainAutoTunesRequest,
  ): Effect.Effect<
    DescribeDomainAutoTunesResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDomainChangeProgress(
    input: DescribeDomainChangeProgressRequest,
  ): Effect.Effect<
    DescribeDomainChangeProgressResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDomainConfig(
    input: DescribeDomainConfigRequest,
  ): Effect.Effect<
    DescribeDomainConfigResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDomainHealth(
    input: DescribeDomainHealthRequest,
  ): Effect.Effect<
    DescribeDomainHealthResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDomainNodes(
    input: DescribeDomainNodesRequest,
  ): Effect.Effect<
    DescribeDomainNodesResponse,
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeDomains(
    input: DescribeDomainsRequest,
  ): Effect.Effect<
    DescribeDomainsResponse,
    BaseException | InternalException | ValidationException | CommonAwsError
  >;
  describeDryRunProgress(
    input: DescribeDryRunProgressRequest,
  ): Effect.Effect<
    DescribeDryRunProgressResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeInboundConnections(
    input: DescribeInboundConnectionsRequest,
  ): Effect.Effect<
    DescribeInboundConnectionsResponse,
    | DisabledOperationException
    | InvalidPaginationTokenException
    | CommonAwsError
  >;
  describeInstanceTypeLimits(
    input: DescribeInstanceTypeLimitsRequest,
  ): Effect.Effect<
    DescribeInstanceTypeLimitsResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeOutboundConnections(
    input: DescribeOutboundConnectionsRequest,
  ): Effect.Effect<
    DescribeOutboundConnectionsResponse,
    | DisabledOperationException
    | InvalidPaginationTokenException
    | CommonAwsError
  >;
  describePackages(
    input: DescribePackagesRequest,
  ): Effect.Effect<
    DescribePackagesResponse,
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeReservedInstanceOfferings(
    input: DescribeReservedInstanceOfferingsRequest,
  ): Effect.Effect<
    DescribeReservedInstanceOfferingsResponse,
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeReservedInstances(
    input: DescribeReservedInstancesRequest,
  ): Effect.Effect<
    DescribeReservedInstancesResponse,
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeVpcEndpoints(
    input: DescribeVpcEndpointsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointsResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError
  >;
  dissociatePackage(
    input: DissociatePackageRequest,
  ): Effect.Effect<
    DissociatePackageResponse,
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  dissociatePackages(
    input: DissociatePackagesRequest,
  ): Effect.Effect<
    DissociatePackagesResponse,
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    GetApplicationResponse,
    | AccessDeniedException
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCompatibleVersions(
    input: GetCompatibleVersionsRequest,
  ): Effect.Effect<
    GetCompatibleVersionsResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getDataSource(
    input: GetDataSourceRequest,
  ): Effect.Effect<
    GetDataSourceResponse,
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getDirectQueryDataSource(
    input: GetDirectQueryDataSourceRequest,
  ): Effect.Effect<
    GetDirectQueryDataSourceResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getDomainMaintenanceStatus(
    input: GetDomainMaintenanceStatusRequest,
  ): Effect.Effect<
    GetDomainMaintenanceStatusResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getPackageVersionHistory(
    input: GetPackageVersionHistoryRequest,
  ): Effect.Effect<
    GetPackageVersionHistoryResponse,
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getUpgradeHistory(
    input: GetUpgradeHistoryRequest,
  ): Effect.Effect<
    GetUpgradeHistoryResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getUpgradeStatus(
    input: GetUpgradeStatusRequest,
  ): Effect.Effect<
    GetUpgradeStatusResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    | AccessDeniedException
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesRequest,
  ): Effect.Effect<
    ListDataSourcesResponse,
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDirectQueryDataSources(
    input: ListDirectQueryDataSourcesRequest,
  ): Effect.Effect<
    ListDirectQueryDataSourcesResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDomainMaintenances(
    input: ListDomainMaintenancesRequest,
  ): Effect.Effect<
    ListDomainMaintenancesResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDomainNames(
    input: ListDomainNamesRequest,
  ): Effect.Effect<
    ListDomainNamesResponse,
    BaseException | ValidationException | CommonAwsError
  >;
  listDomainsForPackage(
    input: ListDomainsForPackageRequest,
  ): Effect.Effect<
    ListDomainsForPackageResponse,
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listInstanceTypeDetails(
    input: ListInstanceTypeDetailsRequest,
  ): Effect.Effect<
    ListInstanceTypeDetailsResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listPackagesForDomain(
    input: ListPackagesForDomainRequest,
  ): Effect.Effect<
    ListPackagesForDomainResponse,
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listScheduledActions(
    input: ListScheduledActionsRequest,
  ): Effect.Effect<
    ListScheduledActionsResponse,
    | BaseException
    | InternalException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listVersions(
    input: ListVersionsRequest,
  ): Effect.Effect<
    ListVersionsResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listVpcEndpointAccess(
    input: ListVpcEndpointAccessRequest,
  ): Effect.Effect<
    ListVpcEndpointAccessResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listVpcEndpoints(
    input: ListVpcEndpointsRequest,
  ): Effect.Effect<
    ListVpcEndpointsResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | CommonAwsError
  >;
  listVpcEndpointsForDomain(
    input: ListVpcEndpointsForDomainRequest,
  ): Effect.Effect<
    ListVpcEndpointsForDomainResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  purchaseReservedInstanceOffering(
    input: PurchaseReservedInstanceOfferingRequest,
  ): Effect.Effect<
    PurchaseReservedInstanceOfferingResponse,
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  rejectInboundConnection(
    input: RejectInboundConnectionRequest,
  ): Effect.Effect<
    RejectInboundConnectionResponse,
    DisabledOperationException | ResourceNotFoundException | CommonAwsError
  >;
  removeTags(
    input: RemoveTagsRequest,
  ): Effect.Effect<
    {},
    BaseException | InternalException | ValidationException | CommonAwsError
  >;
  revokeVpcEndpointAccess(
    input: RevokeVpcEndpointAccessRequest,
  ): Effect.Effect<
    RevokeVpcEndpointAccessResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startDomainMaintenance(
    input: StartDomainMaintenanceRequest,
  ): Effect.Effect<
    StartDomainMaintenanceResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startServiceSoftwareUpdate(
    input: StartServiceSoftwareUpdateRequest,
  ): Effect.Effect<
    StartServiceSoftwareUpdateResponse,
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | AccessDeniedException
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceRequest,
  ): Effect.Effect<
    UpdateDataSourceResponse,
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateDirectQueryDataSource(
    input: UpdateDirectQueryDataSourceRequest,
  ): Effect.Effect<
    UpdateDirectQueryDataSourceResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateDomainConfig(
    input: UpdateDomainConfigRequest,
  ): Effect.Effect<
    UpdateDomainConfigResponse,
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updatePackage(
    input: UpdatePackageRequest,
  ): Effect.Effect<
    UpdatePackageResponse,
    | AccessDeniedException
    | BaseException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updatePackageScope(
    input: UpdatePackageScopeRequest,
  ): Effect.Effect<
    UpdatePackageScopeResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateScheduledAction(
    input: UpdateScheduledActionRequest,
  ): Effect.Effect<
    UpdateScheduledActionResponse,
    | BaseException
    | ConflictException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | SlotNotAvailableException
    | ValidationException
    | CommonAwsError
  >;
  updateVpcEndpoint(
    input: UpdateVpcEndpointRequest,
  ): Effect.Effect<
    UpdateVpcEndpointResponse,
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  upgradeDomain(
    input: UpgradeDomainRequest,
  ): Effect.Effect<
    UpgradeDomainResponse,
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type Opensearch = AmazonOpenSearchService;

export interface AcceptInboundConnectionRequest {
  ConnectionId: string;
}
export interface AcceptInboundConnectionResponse {
  Connection?: InboundConnection;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AccessPoliciesStatus {
  Options: string;
  Status: OptionStatus;
}
export type ActionSeverity = "HIGH" | "MEDIUM" | "LOW";
export type ActionStatus =
  | "PENDING_UPDATE"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED"
  | "NOT_ELIGIBLE"
  | "ELIGIBLE";
export type ActionType =
  | "SERVICE_SOFTWARE_UPDATE"
  | "JVM_HEAP_SIZE_TUNING"
  | "JVM_YOUNG_GEN_TUNING";
export interface AddDataSourceRequest {
  DomainName: string;
  Name: string;
  DataSourceType: DataSourceType;
  Description?: string;
}
export interface AddDataSourceResponse {
  Message?: string;
}
export interface AddDirectQueryDataSourceRequest {
  DataSourceName: string;
  DataSourceType: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns: Array<string>;
  TagList?: Array<Tag>;
}
export interface AddDirectQueryDataSourceResponse {
  DataSourceArn?: string;
}
export interface AdditionalLimit {
  LimitName?: string;
  LimitValues?: Array<string>;
}
export type AdditionalLimitList = Array<AdditionalLimit>;
export interface AddTagsRequest {
  ARN: string;
  TagList: Array<Tag>;
}
export type AdvancedOptions = Record<string, string>;
export interface AdvancedOptionsStatus {
  Options: Record<string, string>;
  Status: OptionStatus;
}
export interface AdvancedSecurityOptions {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  SAMLOptions?: SAMLOptionsOutput;
  JWTOptions?: JWTOptionsOutput;
  AnonymousAuthDisableDate?: Date | string;
  AnonymousAuthEnabled?: boolean;
}
export interface AdvancedSecurityOptionsInput {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: MasterUserOptions;
  SAMLOptions?: SAMLOptionsInput;
  JWTOptions?: JWTOptionsInput;
  AnonymousAuthEnabled?: boolean;
}
export interface AdvancedSecurityOptionsStatus {
  Options: AdvancedSecurityOptions;
  Status: OptionStatus;
}
export interface AIMLOptionsInput {
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsInput;
}
export interface AIMLOptionsOutput {
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsOutput;
}
export interface AIMLOptionsStatus {
  Options?: AIMLOptionsOutput;
  Status?: OptionStatus;
}
export interface AppConfig {
  key?: AppConfigType;
  value?: string;
}
export type AppConfigs = Array<AppConfig>;
export type AppConfigType =
  | "OpensearchDashboardAdminUsers"
  | "OpensearchDashboardAdminGroups";
export type AppConfigValue = string;

export type ApplicationName = string;

export type ApplicationStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "FAILED";
export type ApplicationStatuses = Array<ApplicationStatus>;
export type ApplicationSummaries = Array<ApplicationSummary>;
export interface ApplicationSummary {
  id?: string;
  arn?: string;
  name?: string;
  endpoint?: string;
  status?: ApplicationStatus;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type ARN = string;

export interface AssociatePackageRequest {
  PackageID: string;
  DomainName: string;
  PrerequisitePackageIDList?: Array<string>;
  AssociationConfiguration?: PackageAssociationConfiguration;
}
export interface AssociatePackageResponse {
  DomainPackageDetails?: DomainPackageDetails;
}
export interface AssociatePackagesRequest {
  PackageList: Array<PackageDetailsForAssociation>;
  DomainName: string;
}
export interface AssociatePackagesResponse {
  DomainPackageDetailsList?: Array<DomainPackageDetails>;
}
export interface AuthorizedPrincipal {
  PrincipalType?: PrincipalType;
  Principal?: string;
}
export type AuthorizedPrincipalList = Array<AuthorizedPrincipal>;
export interface AuthorizeVpcEndpointAccessRequest {
  DomainName: string;
  Account?: string;
  Service?: AWSServicePrincipal;
}
export interface AuthorizeVpcEndpointAccessResponse {
  AuthorizedPrincipal: AuthorizedPrincipal;
}
export interface AutoTune {
  AutoTuneType?: AutoTuneType;
  AutoTuneDetails?: AutoTuneDetails;
}
export type AutoTuneDate = Date | string;

export type AutoTuneDesiredState = "ENABLED" | "DISABLED";
export interface AutoTuneDetails {
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
}
export type AutoTuneList = Array<AutoTune>;
export interface AutoTuneMaintenanceSchedule {
  StartAt?: Date | string;
  Duration?: Duration;
  CronExpressionForRecurrence?: string;
}
export type AutoTuneMaintenanceScheduleList =
  Array<AutoTuneMaintenanceSchedule>;
export interface AutoTuneOptions {
  DesiredState?: AutoTuneDesiredState;
  RollbackOnDisable?: RollbackOnDisable;
  MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
  UseOffPeakWindow?: boolean;
}
export interface AutoTuneOptionsInput {
  DesiredState?: AutoTuneDesiredState;
  MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
  UseOffPeakWindow?: boolean;
}
export interface AutoTuneOptionsOutput {
  State?: AutoTuneState;
  ErrorMessage?: string;
  UseOffPeakWindow?: boolean;
}
export interface AutoTuneOptionsStatus {
  Options?: AutoTuneOptions;
  Status?: AutoTuneStatus;
}
export type AutoTuneState =
  | "ENABLED"
  | "DISABLED"
  | "ENABLE_IN_PROGRESS"
  | "DISABLE_IN_PROGRESS"
  | "DISABLED_AND_ROLLBACK_SCHEDULED"
  | "DISABLED_AND_ROLLBACK_IN_PROGRESS"
  | "DISABLED_AND_ROLLBACK_COMPLETE"
  | "DISABLED_AND_ROLLBACK_ERROR"
  | "ERROR";
export interface AutoTuneStatus {
  CreationDate: Date | string;
  UpdateDate: Date | string;
  UpdateVersion?: number;
  State: AutoTuneState;
  ErrorMessage?: string;
  PendingDeletion?: boolean;
}
export type AutoTuneType = "SCHEDULED_ACTION";
export type AvailabilityZone = string;

export interface AvailabilityZoneInfo {
  AvailabilityZoneName?: string;
  ZoneStatus?: ZoneStatus;
  ConfiguredDataNodeCount?: string;
  AvailableDataNodeCount?: string;
  TotalShards?: string;
  TotalUnAssignedShards?: string;
}
export type AvailabilityZoneInfoList = Array<AvailabilityZoneInfo>;
export type AvailabilityZoneList = Array<string>;
export type AWSAccount = string;

export interface AWSDomainInformation {
  OwnerId?: string;
  DomainName: string;
  Region?: string;
}
export type AWSServicePrincipal = "application_opensearchservice_amazonaws_com";
export type BackendRole = string;

export declare class BaseException extends EffectData.TaggedError(
  "BaseException",
)<{
  readonly message?: string;
}> {}
export type OpensearchBoolean = boolean;

export interface CancelDomainConfigChangeRequest {
  DomainName: string;
  DryRun?: boolean;
}
export interface CancelDomainConfigChangeResponse {
  CancelledChangeIds?: Array<string>;
  CancelledChangeProperties?: Array<CancelledChangeProperty>;
  DryRun?: boolean;
}
export interface CancelledChangeProperty {
  PropertyName?: string;
  CancelledValue?: string;
  ActiveValue?: string;
}
export type CancelledChangePropertyList = Array<CancelledChangeProperty>;
export interface CancelServiceSoftwareUpdateRequest {
  DomainName: string;
}
export interface CancelServiceSoftwareUpdateResponse {
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
export interface ChangeProgressDetails {
  ChangeId?: string;
  Message?: string;
  ConfigChangeStatus?: ConfigChangeStatus;
  InitiatedBy?: InitiatedBy;
  StartTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export interface ChangeProgressStage {
  Name?: string;
  Status?: string;
  Description?: string;
  LastUpdated?: Date | string;
}
export type ChangeProgressStageList = Array<ChangeProgressStage>;
export type ChangeProgressStageName = string;

export type ChangeProgressStageStatus = string;

export interface ChangeProgressStatusDetails {
  ChangeId?: string;
  StartTime?: Date | string;
  Status?: OverallChangeStatus;
  PendingProperties?: Array<string>;
  CompletedProperties?: Array<string>;
  TotalNumberOfStages?: number;
  ChangeProgressStages?: Array<ChangeProgressStage>;
  LastUpdatedTime?: Date | string;
  ConfigChangeStatus?: ConfigChangeStatus;
  InitiatedBy?: InitiatedBy;
}
export type ClientToken = string;

export interface CloudWatchDirectQueryDataSource {
  RoleArn: string;
}
export type CloudWatchLogsLogGroupArn = string;

export interface ClusterConfig {
  InstanceType?: OpenSearchPartitionInstanceType;
  InstanceCount?: number;
  DedicatedMasterEnabled?: boolean;
  ZoneAwarenessEnabled?: boolean;
  ZoneAwarenessConfig?: ZoneAwarenessConfig;
  DedicatedMasterType?: OpenSearchPartitionInstanceType;
  DedicatedMasterCount?: number;
  WarmEnabled?: boolean;
  WarmType?: OpenSearchWarmPartitionInstanceType;
  WarmCount?: number;
  ColdStorageOptions?: ColdStorageOptions;
  MultiAZWithStandbyEnabled?: boolean;
  NodeOptions?: Array<NodeOption>;
}
export interface ClusterConfigStatus {
  Options: ClusterConfig;
  Status: OptionStatus;
}
export interface CognitoOptions {
  Enabled?: boolean;
  UserPoolId?: string;
  IdentityPoolId?: string;
  RoleArn?: string;
}
export interface CognitoOptionsStatus {
  Options: CognitoOptions;
  Status: OptionStatus;
}
export interface ColdStorageOptions {
  Enabled: boolean;
}
export type CommitMessage = string;

export type CompatibleVersionsList = Array<CompatibleVersionsMap>;
export interface CompatibleVersionsMap {
  SourceVersion?: string;
  TargetVersions?: Array<string>;
}
export type ConfigChangeStatus =
  | "PENDING"
  | "INITIALIZING"
  | "VALIDATING"
  | "VALIDATION_FAILED"
  | "APPLYING_CHANGES"
  | "COMPLETED"
  | "PENDING_USER_INPUT"
  | "CANCELLED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConnectionAlias = string;

export type ConnectionId = string;

export type ConnectionMode = "DIRECT" | "VPC_ENDPOINT";
export interface ConnectionProperties {
  Endpoint?: string;
  CrossClusterSearch?: CrossClusterSearchConnectionProperties;
}
export type ConnectionStatusMessage = string;

export interface CreateApplicationRequest {
  clientToken?: string;
  name: string;
  dataSources?: Array<DataSource>;
  iamIdentityCenterOptions?: IamIdentityCenterOptionsInput;
  appConfigs?: Array<AppConfig>;
  tagList?: Array<Tag>;
}
export interface CreateApplicationResponse {
  id?: string;
  name?: string;
  arn?: string;
  dataSources?: Array<DataSource>;
  iamIdentityCenterOptions?: IamIdentityCenterOptions;
  appConfigs?: Array<AppConfig>;
  tagList?: Array<Tag>;
  createdAt?: Date | string;
}
export type CreatedAt = Date | string;

export interface CreateDomainRequest {
  DomainName: string;
  EngineVersion?: string;
  ClusterConfig?: ClusterConfig;
  EBSOptions?: EBSOptions;
  AccessPolicies?: string;
  IPAddressType?: IPAddressType;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCOptions;
  CognitoOptions?: CognitoOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  AdvancedOptions?: Record<string, string>;
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;
  DomainEndpointOptions?: DomainEndpointOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  IdentityCenterOptions?: IdentityCenterOptionsInput;
  TagList?: Array<Tag>;
  AutoTuneOptions?: AutoTuneOptionsInput;
  OffPeakWindowOptions?: OffPeakWindowOptions;
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
  AIMLOptions?: AIMLOptionsInput;
}
export interface CreateDomainResponse {
  DomainStatus?: DomainStatus;
}
export interface CreateOutboundConnectionRequest {
  LocalDomainInfo: DomainInformationContainer;
  RemoteDomainInfo: DomainInformationContainer;
  ConnectionAlias: string;
  ConnectionMode?: ConnectionMode;
  ConnectionProperties?: ConnectionProperties;
}
export interface CreateOutboundConnectionResponse {
  LocalDomainInfo?: DomainInformationContainer;
  RemoteDomainInfo?: DomainInformationContainer;
  ConnectionAlias?: string;
  ConnectionStatus?: OutboundConnectionStatus;
  ConnectionId?: string;
  ConnectionMode?: ConnectionMode;
  ConnectionProperties?: ConnectionProperties;
}
export interface CreatePackageRequest {
  PackageName: string;
  PackageType: PackageType;
  PackageDescription?: string;
  PackageSource: PackageSource;
  PackageConfiguration?: PackageConfiguration;
  EngineVersion?: string;
  PackageVendingOptions?: PackageVendingOptions;
  PackageEncryptionOptions?: PackageEncryptionOptions;
}
export interface CreatePackageResponse {
  PackageDetails?: PackageDetails;
}
export interface CreateVpcEndpointRequest {
  DomainArn: string;
  VpcOptions: VPCOptions;
  ClientToken?: string;
}
export interface CreateVpcEndpointResponse {
  VpcEndpoint: VpcEndpoint;
}
export interface CrossClusterSearchConnectionProperties {
  SkipUnavailable?: SkipUnavailableStatus;
}
export interface DataSource {
  dataSourceArn?: string;
  dataSourceDescription?: string;
}
export type DataSourceDescription = string;

export interface DataSourceDetails {
  DataSourceType?: DataSourceType;
  Name?: string;
  Description?: string;
  Status?: DataSourceStatus;
}
export type DataSourceList = Array<DataSourceDetails>;
export type DataSourceName = string;

export type DataSources = Array<DataSource>;
export type DataSourceStatus = "ACTIVE" | "DISABLED";
export type DataSourceType = { S3GlueDataCatalog: S3GlueDataCatalog };
export interface DeleteApplicationRequest {
  id: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteDataSourceRequest {
  DomainName: string;
  Name: string;
}
export interface DeleteDataSourceResponse {
  Message?: string;
}
export interface DeleteDirectQueryDataSourceRequest {
  DataSourceName: string;
}
export interface DeleteDomainRequest {
  DomainName: string;
}
export interface DeleteDomainResponse {
  DomainStatus?: DomainStatus;
}
export interface DeleteInboundConnectionRequest {
  ConnectionId: string;
}
export interface DeleteInboundConnectionResponse {
  Connection?: InboundConnection;
}
export interface DeleteOutboundConnectionRequest {
  ConnectionId: string;
}
export interface DeleteOutboundConnectionResponse {
  Connection?: OutboundConnection;
}
export interface DeletePackageRequest {
  PackageID: string;
}
export interface DeletePackageResponse {
  PackageDetails?: PackageDetails;
}
export interface DeleteVpcEndpointRequest {
  VpcEndpointId: string;
}
export interface DeleteVpcEndpointResponse {
  VpcEndpointSummary: VpcEndpointSummary;
}
export declare class DependencyFailureException extends EffectData.TaggedError(
  "DependencyFailureException",
)<{
  readonly message?: string;
}> {}
export type DeploymentCloseDateTimeStamp = Date | string;

export type DeploymentStatus =
  | "PENDING_UPDATE"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "NOT_ELIGIBLE"
  | "ELIGIBLE";
export type DeploymentType = string;

export interface DescribeDomainAutoTunesRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeDomainAutoTunesResponse {
  AutoTunes?: Array<AutoTune>;
  NextToken?: string;
}
export interface DescribeDomainChangeProgressRequest {
  DomainName: string;
  ChangeId?: string;
}
export interface DescribeDomainChangeProgressResponse {
  ChangeProgressStatus?: ChangeProgressStatusDetails;
}
export interface DescribeDomainConfigRequest {
  DomainName: string;
}
export interface DescribeDomainConfigResponse {
  DomainConfig: DomainConfig;
}
export interface DescribeDomainHealthRequest {
  DomainName: string;
}
export interface DescribeDomainHealthResponse {
  DomainState?: DomainState;
  AvailabilityZoneCount?: string;
  ActiveAvailabilityZoneCount?: string;
  StandByAvailabilityZoneCount?: string;
  DataNodeCount?: string;
  DedicatedMaster?: boolean;
  MasterEligibleNodeCount?: string;
  WarmNodeCount?: string;
  MasterNode?: MasterNodeStatus;
  ClusterHealth?: DomainHealth;
  TotalShards?: string;
  TotalUnAssignedShards?: string;
  EnvironmentInformation?: Array<EnvironmentInfo>;
}
export interface DescribeDomainNodesRequest {
  DomainName: string;
}
export interface DescribeDomainNodesResponse {
  DomainNodesStatusList?: Array<DomainNodesStatus>;
}
export interface DescribeDomainRequest {
  DomainName: string;
}
export interface DescribeDomainResponse {
  DomainStatus: DomainStatus;
}
export interface DescribeDomainsRequest {
  DomainNames: Array<string>;
}
export interface DescribeDomainsResponse {
  DomainStatusList: Array<DomainStatus>;
}
export interface DescribeDryRunProgressRequest {
  DomainName: string;
  DryRunId?: string;
  LoadDryRunConfig?: boolean;
}
export interface DescribeDryRunProgressResponse {
  DryRunProgressStatus?: DryRunProgressStatus;
  DryRunConfig?: DomainStatus;
  DryRunResults?: DryRunResults;
}
export interface DescribeInboundConnectionsRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInboundConnectionsResponse {
  Connections?: Array<InboundConnection>;
  NextToken?: string;
}
export interface DescribeInstanceTypeLimitsRequest {
  DomainName?: string;
  InstanceType: OpenSearchPartitionInstanceType;
  EngineVersion: string;
}
export interface DescribeInstanceTypeLimitsResponse {
  LimitsByRole?: Record<string, Limits>;
}
export interface DescribeOutboundConnectionsRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeOutboundConnectionsResponse {
  Connections?: Array<OutboundConnection>;
  NextToken?: string;
}
export interface DescribePackagesFilter {
  Name?: DescribePackagesFilterName;
  Value?: Array<string>;
}
export type DescribePackagesFilterList = Array<DescribePackagesFilter>;
export type DescribePackagesFilterName =
  | "PackageID"
  | "PackageName"
  | "PackageStatus"
  | "PackageType"
  | "EngineVersion"
  | "PackageOwner";
export type DescribePackagesFilterValue = string;

export type DescribePackagesFilterValues = Array<string>;
export interface DescribePackagesRequest {
  Filters?: Array<DescribePackagesFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribePackagesResponse {
  PackageDetailsList?: Array<PackageDetails>;
  NextToken?: string;
}
export interface DescribeReservedInstanceOfferingsRequest {
  ReservedInstanceOfferingId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeReservedInstanceOfferingsResponse {
  NextToken?: string;
  ReservedInstanceOfferings?: Array<ReservedInstanceOffering>;
}
export interface DescribeReservedInstancesRequest {
  ReservedInstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeReservedInstancesResponse {
  NextToken?: string;
  ReservedInstances?: Array<ReservedInstance>;
}
export interface DescribeVpcEndpointsRequest {
  VpcEndpointIds: Array<string>;
}
export interface DescribeVpcEndpointsResponse {
  VpcEndpoints: Array<VpcEndpoint>;
  VpcEndpointErrors: Array<VpcEndpointError>;
}
export type Description = string;

export interface DirectQueryDataSource {
  DataSourceName?: string;
  DataSourceType?: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns?: Array<string>;
  DataSourceArn?: string;
  TagList?: Array<Tag>;
}
export type DirectQueryDataSourceDescription = string;

export type DirectQueryDataSourceList = Array<DirectQueryDataSource>;
export type DirectQueryDataSourceName = string;

export type DirectQueryDataSourceRoleArn = string;

export type DirectQueryDataSourceType =
  | { CloudWatchLog: CloudWatchDirectQueryDataSource; SecurityLake?: undefined }
  | {
      CloudWatchLog?: undefined;
      SecurityLake: SecurityLakeDirectQueryDataSource;
    };
export type DirectQueryOpenSearchARNList = Array<string>;
export declare class DisabledOperationException extends EffectData.TaggedError(
  "DisabledOperationException",
)<{
  readonly message?: string;
}> {}
export type DisableTimestamp = Date | string;

export interface DissociatePackageRequest {
  PackageID: string;
  DomainName: string;
}
export interface DissociatePackageResponse {
  DomainPackageDetails?: DomainPackageDetails;
}
export interface DissociatePackagesRequest {
  PackageList: Array<string>;
  DomainName: string;
}
export interface DissociatePackagesResponse {
  DomainPackageDetailsList?: Array<DomainPackageDetails>;
}
export type DomainArn = string;

export interface DomainConfig {
  EngineVersion?: VersionStatus;
  ClusterConfig?: ClusterConfigStatus;
  EBSOptions?: EBSOptionsStatus;
  AccessPolicies?: AccessPoliciesStatus;
  IPAddressType?: IPAddressTypeStatus;
  SnapshotOptions?: SnapshotOptionsStatus;
  VPCOptions?: VPCDerivedInfoStatus;
  CognitoOptions?: CognitoOptionsStatus;
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;
  AdvancedOptions?: AdvancedOptionsStatus;
  LogPublishingOptions?: LogPublishingOptionsStatus;
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;
  IdentityCenterOptions?: IdentityCenterOptionsStatus;
  AutoTuneOptions?: AutoTuneOptionsStatus;
  ChangeProgressDetails?: ChangeProgressDetails;
  OffPeakWindowOptions?: OffPeakWindowOptionsStatus;
  SoftwareUpdateOptions?: SoftwareUpdateOptionsStatus;
  ModifyingProperties?: Array<ModifyingProperties>;
  AIMLOptions?: AIMLOptionsStatus;
}
export interface DomainEndpointOptions {
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: TLSSecurityPolicy;
  CustomEndpointEnabled?: boolean;
  CustomEndpoint?: string;
  CustomEndpointCertificateArn?: string;
}
export interface DomainEndpointOptionsStatus {
  Options: DomainEndpointOptions;
  Status: OptionStatus;
}
export type DomainHealth = "Red" | "Yellow" | "Green" | "NotAvailable";
export type DomainId = string;

export interface DomainInfo {
  DomainName?: string;
  EngineType?: EngineType;
}
export type DomainInfoList = Array<DomainInfo>;
export interface DomainInformationContainer {
  AWSDomainInformation?: AWSDomainInformation;
}
export interface DomainMaintenanceDetails {
  MaintenanceId?: string;
  DomainName?: string;
  Action?: MaintenanceType;
  NodeId?: string;
  Status?: MaintenanceStatus;
  StatusMessage?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type DomainMaintenanceList = Array<DomainMaintenanceDetails>;
export type DomainName = string;

export type DomainNameFqdn = string;

export type DomainNameList = Array<string>;
export interface DomainNodesStatus {
  NodeId?: string;
  NodeType?: NodeType;
  AvailabilityZone?: string;
  InstanceType?: OpenSearchPartitionInstanceType;
  NodeStatus?: NodeStatus;
  StorageType?: string;
  StorageVolumeType?: VolumeType;
  StorageSize?: string;
}
export type DomainNodesStatusList = Array<DomainNodesStatus>;
export interface DomainPackageDetails {
  PackageID?: string;
  PackageName?: string;
  PackageType?: PackageType;
  LastUpdated?: Date | string;
  DomainName?: string;
  DomainPackageStatus?: DomainPackageStatus;
  PackageVersion?: string;
  PrerequisitePackageIDList?: Array<string>;
  ReferencePath?: string;
  ErrorDetails?: ErrorDetails;
  AssociationConfiguration?: PackageAssociationConfiguration;
}
export type DomainPackageDetailsList = Array<DomainPackageDetails>;
export type DomainPackageStatus =
  | "ASSOCIATING"
  | "ASSOCIATION_FAILED"
  | "ACTIVE"
  | "DISSOCIATING"
  | "DISSOCIATION_FAILED";
export type DomainProcessingStatusType =
  | "CREATING"
  | "ACTIVE"
  | "MODIFYING"
  | "UPGRADING"
  | "UPDATING"
  | "ISOLATED"
  | "DELETING";
export type DomainState = "Active" | "Processing" | "NotAvailable";
export interface DomainStatus {
  DomainId: string;
  DomainName: string;
  ARN: string;
  Created?: boolean;
  Deleted?: boolean;
  Endpoint?: string;
  EndpointV2?: string;
  Endpoints?: Record<string, string>;
  DomainEndpointV2HostedZoneId?: string;
  Processing?: boolean;
  UpgradeProcessing?: boolean;
  EngineVersion?: string;
  ClusterConfig: ClusterConfig;
  EBSOptions?: EBSOptions;
  AccessPolicies?: string;
  IPAddressType?: IPAddressType;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCDerivedInfo;
  CognitoOptions?: CognitoOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  AdvancedOptions?: Record<string, string>;
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
  DomainEndpointOptions?: DomainEndpointOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptions;
  IdentityCenterOptions?: IdentityCenterOptions;
  AutoTuneOptions?: AutoTuneOptionsOutput;
  ChangeProgressDetails?: ChangeProgressDetails;
  OffPeakWindowOptions?: OffPeakWindowOptions;
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
  DomainProcessingStatus?: DomainProcessingStatusType;
  ModifyingProperties?: Array<ModifyingProperties>;
  AIMLOptions?: AIMLOptionsOutput;
}
export type DomainStatusList = Array<DomainStatus>;
export type Double = number;

export type DryRun = boolean;

export type DryRunMode = "Basic" | "Verbose";
export interface DryRunProgressStatus {
  DryRunId: string;
  DryRunStatus: string;
  CreationDate: string;
  UpdateDate: string;
  ValidationFailures?: Array<ValidationFailure>;
}
export interface DryRunResults {
  DeploymentType?: string;
  Message?: string;
}
export interface Duration {
  Value?: number;
  Unit?: TimeUnit;
}
export type DurationValue = number;

export interface EBSOptions {
  EBSEnabled?: boolean;
  VolumeType?: VolumeType;
  VolumeSize?: number;
  Iops?: number;
  Throughput?: number;
}
export interface EBSOptionsStatus {
  Options: EBSOptions;
  Status: OptionStatus;
}
export interface EncryptionAtRestOptions {
  Enabled?: boolean;
  KmsKeyId?: string;
}
export interface EncryptionAtRestOptionsStatus {
  Options: EncryptionAtRestOptions;
  Status: OptionStatus;
}
export type Endpoint = string;

export type EndpointsMap = Record<string, string>;
export type EngineType = "OpenSearch" | "Elasticsearch";
export type EngineVersion = string;

export interface EnvironmentInfo {
  AvailabilityZoneInformation?: Array<AvailabilityZoneInfo>;
}
export type EnvironmentInfoList = Array<EnvironmentInfo>;
export interface ErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}
export type ErrorMessage = string;

export type ErrorType = string;

export interface Filter {
  Name?: string;
  Values?: Array<string>;
}
export type FilterList = Array<Filter>;
export interface GetApplicationRequest {
  id: string;
}
export interface GetApplicationResponse {
  id?: string;
  arn?: string;
  name?: string;
  endpoint?: string;
  status?: ApplicationStatus;
  iamIdentityCenterOptions?: IamIdentityCenterOptions;
  dataSources?: Array<DataSource>;
  appConfigs?: Array<AppConfig>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface GetCompatibleVersionsRequest {
  DomainName?: string;
}
export interface GetCompatibleVersionsResponse {
  CompatibleVersions?: Array<CompatibleVersionsMap>;
}
export interface GetDataSourceRequest {
  DomainName: string;
  Name: string;
}
export interface GetDataSourceResponse {
  DataSourceType?: DataSourceType;
  Name?: string;
  Description?: string;
  Status?: DataSourceStatus;
}
export interface GetDirectQueryDataSourceRequest {
  DataSourceName: string;
}
export interface GetDirectQueryDataSourceResponse {
  DataSourceName?: string;
  DataSourceType?: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns?: Array<string>;
  DataSourceArn?: string;
}
export interface GetDomainMaintenanceStatusRequest {
  DomainName: string;
  MaintenanceId: string;
}
export interface GetDomainMaintenanceStatusResponse {
  Status?: MaintenanceStatus;
  StatusMessage?: string;
  NodeId?: string;
  Action?: MaintenanceType;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface GetPackageVersionHistoryRequest {
  PackageID: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetPackageVersionHistoryResponse {
  PackageID?: string;
  PackageVersionHistoryList?: Array<PackageVersionHistory>;
  NextToken?: string;
}
export interface GetUpgradeHistoryRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetUpgradeHistoryResponse {
  UpgradeHistories?: Array<UpgradeHistory>;
  NextToken?: string;
}
export interface GetUpgradeStatusRequest {
  DomainName: string;
}
export interface GetUpgradeStatusResponse {
  UpgradeStep?: UpgradeStep;
  StepStatus?: UpgradeStatus;
  UpgradeName?: string;
}
export type GUID = string;

export type GUIDList = Array<string>;
export type HostedZoneId = string;

export interface IamIdentityCenterOptions {
  enabled?: boolean;
  iamIdentityCenterInstanceArn?: string;
  iamRoleForIdentityCenterApplicationArn?: string;
  iamIdentityCenterApplicationArn?: string;
}
export interface IamIdentityCenterOptionsInput {
  enabled?: boolean;
  iamIdentityCenterInstanceArn?: string;
  iamRoleForIdentityCenterApplicationArn?: string;
}
export type Id = string;

export type IdentityCenterApplicationARN = string;

export type IdentityCenterInstanceARN = string;

export interface IdentityCenterOptions {
  EnabledAPIAccess?: boolean;
  IdentityCenterInstanceARN?: string;
  SubjectKey?: SubjectKeyIdCOption;
  RolesKey?: RolesKeyIdCOption;
  IdentityCenterApplicationARN?: string;
  IdentityStoreId?: string;
}
export interface IdentityCenterOptionsInput {
  EnabledAPIAccess?: boolean;
  IdentityCenterInstanceARN?: string;
  SubjectKey?: SubjectKeyIdCOption;
  RolesKey?: RolesKeyIdCOption;
}
export interface IdentityCenterOptionsStatus {
  Options: IdentityCenterOptions;
  Status: OptionStatus;
}
export type IdentityPoolId = string;

export type IdentityStoreId = string;

export interface InboundConnection {
  LocalDomainInfo?: DomainInformationContainer;
  RemoteDomainInfo?: DomainInformationContainer;
  ConnectionId?: string;
  ConnectionStatus?: InboundConnectionStatus;
  ConnectionMode?: ConnectionMode;
}
export type InboundConnections = Array<InboundConnection>;
export interface InboundConnectionStatus {
  StatusCode?: InboundConnectionStatusCode;
  Message?: string;
}
export type InboundConnectionStatusCode =
  | "PENDING_ACCEPTANCE"
  | "APPROVED"
  | "PROVISIONING"
  | "ACTIVE"
  | "REJECTING"
  | "REJECTED"
  | "DELETING"
  | "DELETED";
export type InitiatedBy = "CUSTOMER" | "SERVICE";
export type InstanceCount = number;

export interface InstanceCountLimits {
  MinimumInstanceCount?: number;
  MaximumInstanceCount?: number;
}
export interface InstanceLimits {
  InstanceCountLimits?: InstanceCountLimits;
}
export type InstanceRole = string;

export type InstanceRoleList = Array<string>;
export interface InstanceTypeDetails {
  InstanceType?: OpenSearchPartitionInstanceType;
  EncryptionEnabled?: boolean;
  CognitoEnabled?: boolean;
  AppLogsEnabled?: boolean;
  AdvancedSecurityEnabled?: boolean;
  WarmEnabled?: boolean;
  InstanceRole?: Array<string>;
  AvailabilityZones?: Array<string>;
}
export type InstanceTypeDetailsList = Array<InstanceTypeDetails>;
export type InstanceTypeString = string;

export type Integer = number;

export type IntegerClass = number;

export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPaginationTokenException extends EffectData.TaggedError(
  "InvalidPaginationTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTypeException extends EffectData.TaggedError(
  "InvalidTypeException",
)<{
  readonly message?: string;
}> {}
export type IPAddressType = "IPV4" | "DUALSTACK";
export interface IPAddressTypeStatus {
  Options: IPAddressType;
  Status: OptionStatus;
}
export type Issue = string;

export type Issues = Array<string>;
export interface JWTOptionsInput {
  Enabled?: boolean;
  SubjectKey?: string;
  RolesKey?: string;
  PublicKey?: string;
}
export interface JWTOptionsOutput {
  Enabled?: boolean;
  SubjectKey?: string;
  RolesKey?: string;
  PublicKey?: string;
}
export interface KeyStoreAccessOption {
  KeyAccessRoleArn?: string;
  KeyStoreAccessEnabled: boolean;
}
export type KmsKeyId = string;

export type LastUpdated = Date | string;

export type LicenseFilepath = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type LimitName = string;

export interface Limits {
  StorageTypes?: Array<StorageType>;
  InstanceLimits?: InstanceLimits;
  AdditionalLimits?: Array<AdditionalLimit>;
}
export type LimitsByRole = Record<string, Limits>;
export type LimitValue = string;

export type LimitValueList = Array<string>;
export interface ListApplicationsRequest {
  nextToken?: string;
  statuses?: Array<ApplicationStatus>;
  maxResults?: number;
}
export interface ListApplicationsResponse {
  ApplicationSummaries?: Array<ApplicationSummary>;
  nextToken?: string;
}
export interface ListDataSourcesRequest {
  DomainName: string;
}
export interface ListDataSourcesResponse {
  DataSources?: Array<DataSourceDetails>;
}
export interface ListDirectQueryDataSourcesRequest {
  NextToken?: string;
}
export interface ListDirectQueryDataSourcesResponse {
  NextToken?: string;
  DirectQueryDataSources?: Array<DirectQueryDataSource>;
}
export interface ListDomainMaintenancesRequest {
  DomainName: string;
  Action?: MaintenanceType;
  Status?: MaintenanceStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDomainMaintenancesResponse {
  DomainMaintenances?: Array<DomainMaintenanceDetails>;
  NextToken?: string;
}
export interface ListDomainNamesRequest {
  EngineType?: EngineType;
}
export interface ListDomainNamesResponse {
  DomainNames?: Array<DomainInfo>;
}
export interface ListDomainsForPackageRequest {
  PackageID: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDomainsForPackageResponse {
  DomainPackageDetailsList?: Array<DomainPackageDetails>;
  NextToken?: string;
}
export interface ListInstanceTypeDetailsRequest {
  EngineVersion: string;
  DomainName?: string;
  MaxResults?: number;
  NextToken?: string;
  RetrieveAZs?: boolean;
  InstanceType?: string;
}
export interface ListInstanceTypeDetailsResponse {
  InstanceTypeDetails?: Array<InstanceTypeDetails>;
  NextToken?: string;
}
export interface ListPackagesForDomainRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPackagesForDomainResponse {
  DomainPackageDetailsList?: Array<DomainPackageDetails>;
  NextToken?: string;
}
export interface ListScheduledActionsRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListScheduledActionsResponse {
  ScheduledActions?: Array<ScheduledAction>;
  NextToken?: string;
}
export interface ListTagsRequest {
  ARN: string;
}
export interface ListTagsResponse {
  TagList?: Array<Tag>;
}
export interface ListVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListVersionsResponse {
  Versions?: Array<string>;
  NextToken?: string;
}
export interface ListVpcEndpointAccessRequest {
  DomainName: string;
  NextToken?: string;
}
export interface ListVpcEndpointAccessResponse {
  AuthorizedPrincipalList: Array<AuthorizedPrincipal>;
  NextToken: string;
}
export interface ListVpcEndpointsForDomainRequest {
  DomainName: string;
  NextToken?: string;
}
export interface ListVpcEndpointsForDomainResponse {
  VpcEndpointSummaryList: Array<VpcEndpointSummary>;
  NextToken: string;
}
export interface ListVpcEndpointsRequest {
  NextToken?: string;
}
export interface ListVpcEndpointsResponse {
  VpcEndpointSummaryList: Array<VpcEndpointSummary>;
  NextToken: string;
}
export interface LogPublishingOption {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
export type LogPublishingOptions = Record<LogType, LogPublishingOption>;
export interface LogPublishingOptionsStatus {
  Options?: Record<LogType, LogPublishingOption>;
  Status?: OptionStatus;
}
export type LogType =
  | "INDEX_SLOW_LOGS"
  | "SEARCH_SLOW_LOGS"
  | "ES_APPLICATION_LOGS"
  | "AUDIT_LOGS";
export type Long = number;

export type MaintenanceStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "TIMED_OUT";
export type MaintenanceStatusMessage = string;

export type MaintenanceType =
  | "REBOOT_NODE"
  | "RESTART_SEARCH_PROCESS"
  | "RESTART_DASHBOARD";
export type MasterNodeStatus = "Available" | "UnAvailable";
export interface MasterUserOptions {
  MasterUserARN?: string;
  MasterUserName?: string;
  MasterUserPassword?: string;
}
export type MaximumInstanceCount = number;

export type MaxResults = number;

export type Message = string;

export type MinimumInstanceCount = number;

export interface ModifyingProperties {
  Name?: string;
  ActiveValue?: string;
  PendingValue?: string;
  ValueType?: PropertyValueType;
}
export type ModifyingPropertiesList = Array<ModifyingProperties>;
export type NaturalLanguageQueryGenerationCurrentState =
  | "NotEnabled"
  | "EnableComplete"
  | "EnableInProgress"
  | "EnableFailed"
  | "DisableComplete"
  | "DisableInProgress"
  | "DisableFailed";
export type NaturalLanguageQueryGenerationDesiredState = "Enabled" | "Disabled";
export interface NaturalLanguageQueryGenerationOptionsInput {
  DesiredState?: NaturalLanguageQueryGenerationDesiredState;
}
export interface NaturalLanguageQueryGenerationOptionsOutput {
  DesiredState?: NaturalLanguageQueryGenerationDesiredState;
  CurrentState?: NaturalLanguageQueryGenerationCurrentState;
}
export type NextToken = string;

export interface NodeConfig {
  Enabled?: boolean;
  Type?: OpenSearchPartitionInstanceType;
  Count?: number;
}
export type NodeId = string;

export interface NodeOption {
  NodeType?: NodeOptionsNodeType;
  NodeConfig?: NodeConfig;
}
export type NodeOptionsList = Array<NodeOption>;
export type NodeOptionsNodeType = "COORDINATOR";
export type NodeStatus = "Active" | "StandBy" | "NotAvailable";
export interface NodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
export interface NodeToNodeEncryptionOptionsStatus {
  Options: NodeToNodeEncryptionOptions;
  Status: OptionStatus;
}
export type NodeType = "Data" | "Ultrawarm" | "Master";
export type NonEmptyString = string;

export type NumberOfAZs = string;

export type NumberOfNodes = string;

export type NumberOfShards = string;

export interface OffPeakWindow {
  WindowStartTime?: WindowStartTime;
}
export interface OffPeakWindowOptions {
  Enabled?: boolean;
  OffPeakWindow?: OffPeakWindow;
}
export interface OffPeakWindowOptionsStatus {
  Options?: OffPeakWindowOptions;
  Status?: OptionStatus;
}
export type OpenSearchPartitionInstanceType =
  | "m3_medium_search"
  | "m3_large_search"
  | "m3_xlarge_search"
  | "m3_2xlarge_search"
  | "m4_large_search"
  | "m4_xlarge_search"
  | "m4_2xlarge_search"
  | "m4_4xlarge_search"
  | "m4_10xlarge_search"
  | "m5_large_search"
  | "m5_xlarge_search"
  | "m5_2xlarge_search"
  | "m5_4xlarge_search"
  | "m5_12xlarge_search"
  | "m5_24xlarge_search"
  | "r5_large_search"
  | "r5_xlarge_search"
  | "r5_2xlarge_search"
  | "r5_4xlarge_search"
  | "r5_12xlarge_search"
  | "r5_24xlarge_search"
  | "c5_large_search"
  | "c5_xlarge_search"
  | "c5_2xlarge_search"
  | "c5_4xlarge_search"
  | "c5_9xlarge_search"
  | "c5_18xlarge_search"
  | "t3_nano_search"
  | "t3_micro_search"
  | "t3_small_search"
  | "t3_medium_search"
  | "t3_large_search"
  | "t3_xlarge_search"
  | "t3_2xlarge_search"
  | "or1_medium_search"
  | "or1_large_search"
  | "or1_xlarge_search"
  | "or1_2xlarge_search"
  | "or1_4xlarge_search"
  | "or1_8xlarge_search"
  | "or1_12xlarge_search"
  | "or1_16xlarge_search"
  | "ultrawarm1_medium_search"
  | "ultrawarm1_large_search"
  | "ultrawarm1_xlarge_search"
  | "t2_micro_search"
  | "t2_small_search"
  | "t2_medium_search"
  | "r3_large_search"
  | "r3_xlarge_search"
  | "r3_2xlarge_search"
  | "r3_4xlarge_search"
  | "r3_8xlarge_search"
  | "i2_xlarge_search"
  | "i2_2xlarge_search"
  | "d2_xlarge_search"
  | "d2_2xlarge_search"
  | "d2_4xlarge_search"
  | "d2_8xlarge_search"
  | "c4_large_search"
  | "c4_xlarge_search"
  | "c4_2xlarge_search"
  | "c4_4xlarge_search"
  | "c4_8xlarge_search"
  | "r4_large_search"
  | "r4_xlarge_search"
  | "r4_2xlarge_search"
  | "r4_4xlarge_search"
  | "r4_8xlarge_search"
  | "r4_16xlarge_search"
  | "i3_large_search"
  | "i3_xlarge_search"
  | "i3_2xlarge_search"
  | "i3_4xlarge_search"
  | "i3_8xlarge_search"
  | "i3_16xlarge_search"
  | "r6g_large_search"
  | "r6g_xlarge_search"
  | "r6g_2xlarge_search"
  | "r6g_4xlarge_search"
  | "r6g_8xlarge_search"
  | "r6g_12xlarge_search"
  | "m6g_large_search"
  | "m6g_xlarge_search"
  | "m6g_2xlarge_search"
  | "m6g_4xlarge_search"
  | "m6g_8xlarge_search"
  | "m6g_12xlarge_search"
  | "c6g_large_search"
  | "c6g_xlarge_search"
  | "c6g_2xlarge_search"
  | "c6g_4xlarge_search"
  | "c6g_8xlarge_search"
  | "c6g_12xlarge_search"
  | "r6gd_large_search"
  | "r6gd_xlarge_search"
  | "r6gd_2xlarge_search"
  | "r6gd_4xlarge_search"
  | "r6gd_8xlarge_search"
  | "r6gd_12xlarge_search"
  | "r6gd_16xlarge_search"
  | "t4g_small_search"
  | "t4g_medium_search";
export type OpenSearchWarmPartitionInstanceType =
  | "ultrawarm1_medium_search"
  | "ultrawarm1_large_search"
  | "ultrawarm1_xlarge_search";
export type OptionState = "RequiresIndexDocuments" | "Processing" | "Active";
export interface OptionStatus {
  CreationDate: Date | string;
  UpdateDate: Date | string;
  UpdateVersion?: number;
  State: OptionState;
  PendingDeletion?: boolean;
}
export interface OutboundConnection {
  LocalDomainInfo?: DomainInformationContainer;
  RemoteDomainInfo?: DomainInformationContainer;
  ConnectionId?: string;
  ConnectionAlias?: string;
  ConnectionStatus?: OutboundConnectionStatus;
  ConnectionMode?: ConnectionMode;
  ConnectionProperties?: ConnectionProperties;
}
export type OutboundConnections = Array<OutboundConnection>;
export interface OutboundConnectionStatus {
  StatusCode?: OutboundConnectionStatusCode;
  Message?: string;
}
export type OutboundConnectionStatusCode =
  | "VALIDATING"
  | "VALIDATION_FAILED"
  | "PENDING_ACCEPTANCE"
  | "APPROVED"
  | "PROVISIONING"
  | "ACTIVE"
  | "REJECTING"
  | "REJECTED"
  | "DELETING"
  | "DELETED";
export type OverallChangeStatus =
  | "PENDING"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED";
export type OwnerId = string;

export interface PackageAssociationConfiguration {
  KeyStoreAccessOption?: KeyStoreAccessOption;
}
export interface PackageConfiguration {
  LicenseRequirement: RequirementLevel;
  LicenseFilepath?: string;
  ConfigurationRequirement: RequirementLevel;
  RequiresRestartForConfigurationUpdate?: boolean;
}
export type PackageDescription = string;

export interface PackageDetails {
  PackageID?: string;
  PackageName?: string;
  PackageType?: PackageType;
  PackageDescription?: string;
  PackageStatus?: PackageStatus;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  AvailablePackageVersion?: string;
  ErrorDetails?: ErrorDetails;
  EngineVersion?: string;
  AvailablePluginProperties?: PluginProperties;
  AvailablePackageConfiguration?: PackageConfiguration;
  AllowListedUserList?: Array<string>;
  PackageOwner?: string;
  PackageVendingOptions?: PackageVendingOptions;
  PackageEncryptionOptions?: PackageEncryptionOptions;
}
export interface PackageDetailsForAssociation {
  PackageID: string;
  PrerequisitePackageIDList?: Array<string>;
  AssociationConfiguration?: PackageAssociationConfiguration;
}
export type PackageDetailsForAssociationList =
  Array<PackageDetailsForAssociation>;
export type PackageDetailsList = Array<PackageDetails>;
export interface PackageEncryptionOptions {
  KmsKeyIdentifier?: string;
  EncryptionEnabled: boolean;
}
export type PackageID = string;

export type PackageIDList = Array<string>;
export type PackageName = string;

export type PackageOwner = string;

export type PackageScopeOperationEnum = "ADD" | "OVERRIDE" | "REMOVE";
export interface PackageSource {
  S3BucketName?: string;
  S3Key?: string;
}
export type PackageStatus =
  | "COPYING"
  | "COPY_FAILED"
  | "VALIDATING"
  | "VALIDATION_FAILED"
  | "AVAILABLE"
  | "DELETING"
  | "DELETED"
  | "DELETE_FAILED";
export type PackageType =
  | "TXT_DICTIONARY"
  | "ZIP_PLUGIN"
  | "PACKAGE_LICENSE"
  | "PACKAGE_CONFIG";
export type PackageUser = string;

export type PackageUserList = Array<string>;
export interface PackageVendingOptions {
  VendingEnabled: boolean;
}
export type PackageVersion = string;

export interface PackageVersionHistory {
  PackageVersion?: string;
  CommitMessage?: string;
  CreatedAt?: Date | string;
  PluginProperties?: PluginProperties;
  PackageConfiguration?: PackageConfiguration;
}
export type PackageVersionHistoryList = Array<PackageVersionHistory>;
export type Password = string;

export type PluginClassName = string;

export type PluginDescription = string;

export type PluginName = string;

export interface PluginProperties {
  Name?: string;
  Description?: string;
  Version?: string;
  ClassName?: string;
  UncompressedSizeInBytes?: number;
}
export type PluginVersion = string;

export type PolicyDocument = string;

export type PrincipalType = "AWS_ACCOUNT" | "AWS_SERVICE";
export type PropertyValueType = "PLAIN_TEXT" | "STRINGIFIED_JSON";
export interface PurchaseReservedInstanceOfferingRequest {
  ReservedInstanceOfferingId: string;
  ReservationName: string;
  InstanceCount?: number;
}
export interface PurchaseReservedInstanceOfferingResponse {
  ReservedInstanceId?: string;
  ReservationName?: string;
}
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = Array<RecurringCharge>;
export type ReferencePath = string;

export type Region = string;

export interface RejectInboundConnectionRequest {
  ConnectionId: string;
}
export interface RejectInboundConnectionResponse {
  Connection?: InboundConnection;
}
export interface RemoveTagsRequest {
  ARN: string;
  TagKeys: Array<string>;
}
export type RequestId = string;

export type RequirementLevel = "REQUIRED" | "OPTIONAL" | "NONE";
export type ReservationToken = string;

export interface ReservedInstance {
  ReservationName?: string;
  ReservedInstanceId?: string;
  BillingSubscriptionId?: number;
  ReservedInstanceOfferingId?: string;
  InstanceType?: OpenSearchPartitionInstanceType;
  StartTime?: Date | string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  InstanceCount?: number;
  State?: string;
  PaymentOption?: ReservedInstancePaymentOption;
  RecurringCharges?: Array<RecurringCharge>;
}
export type ReservedInstanceList = Array<ReservedInstance>;
export interface ReservedInstanceOffering {
  ReservedInstanceOfferingId?: string;
  InstanceType?: OpenSearchPartitionInstanceType;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  PaymentOption?: ReservedInstancePaymentOption;
  RecurringCharges?: Array<RecurringCharge>;
}
export type ReservedInstanceOfferingList = Array<ReservedInstanceOffering>;
export type ReservedInstancePaymentOption =
  | "ALL_UPFRONT"
  | "PARTIAL_UPFRONT"
  | "NO_UPFRONT";
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RevokeVpcEndpointAccessRequest {
  DomainName: string;
  Account?: string;
  Service?: AWSServicePrincipal;
}
export interface RevokeVpcEndpointAccessResponse {}
export type RoleArn = string;

export type RolesKey = string;

export type RolesKeyIdCOption = "GroupName" | "GroupId";
export type RollbackOnDisable = "NO_ROLLBACK" | "DEFAULT_ROLLBACK";
export type S3BucketName = string;

export interface S3GlueDataCatalog {
  RoleArn?: string;
}
export type S3Key = string;

export type SAMLEntityId = string;

export interface SAMLIdp {
  MetadataContent: string;
  EntityId: string;
}
export type SAMLMetadata = string;

export interface SAMLOptionsInput {
  Enabled?: boolean;
  Idp?: SAMLIdp;
  MasterUserName?: string;
  MasterBackendRole?: string;
  SubjectKey?: string;
  RolesKey?: string;
  SessionTimeoutMinutes?: number;
}
export interface SAMLOptionsOutput {
  Enabled?: boolean;
  Idp?: SAMLIdp;
  SubjectKey?: string;
  RolesKey?: string;
  SessionTimeoutMinutes?: number;
}
export type ScheduleAt = "NOW" | "TIMESTAMP" | "OFF_PEAK_WINDOW";
export interface ScheduledAction {
  Id: string;
  Type: ActionType;
  Severity: ActionSeverity;
  ScheduledTime: number;
  Description?: string;
  ScheduledBy?: ScheduledBy;
  Status?: ActionStatus;
  Mandatory?: boolean;
  Cancellable?: boolean;
}
export type ScheduledActionsList = Array<ScheduledAction>;
export type ScheduledAutoTuneActionType =
  | "JVM_HEAP_SIZE_TUNING"
  | "JVM_YOUNG_GEN_TUNING";
export type ScheduledAutoTuneDescription = string;

export interface ScheduledAutoTuneDetails {
  Date?: Date | string;
  ActionType?: ScheduledAutoTuneActionType;
  Action?: string;
  Severity?: ScheduledAutoTuneSeverityType;
}
export type ScheduledAutoTuneSeverityType = "LOW" | "MEDIUM" | "HIGH";
export type ScheduledBy = "CUSTOMER" | "SYSTEM";
export interface SecurityLakeDirectQueryDataSource {
  RoleArn: string;
}
export interface ServiceSoftwareOptions {
  CurrentVersion?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  Cancellable?: boolean;
  UpdateStatus?: DeploymentStatus;
  Description?: string;
  AutomatedUpdateDate?: Date | string;
  OptionalDeployment?: boolean;
}
export type ServiceUrl = string;

export type SkipUnavailableStatus = "ENABLED" | "DISABLED";
export type SlotList = Array<number>;
export declare class SlotNotAvailableException extends EffectData.TaggedError(
  "SlotNotAvailableException",
)<{
  readonly SlotSuggestions?: Array<number>;
  readonly message?: string;
}> {}
export interface SnapshotOptions {
  AutomatedSnapshotStartHour?: number;
}
export interface SnapshotOptionsStatus {
  Options: SnapshotOptions;
  Status: OptionStatus;
}
export interface SoftwareUpdateOptions {
  AutoSoftwareUpdateEnabled?: boolean;
}
export interface SoftwareUpdateOptionsStatus {
  Options?: SoftwareUpdateOptions;
  Status?: OptionStatus;
}
export type StartAt = Date | string;

export interface StartDomainMaintenanceRequest {
  DomainName: string;
  Action: MaintenanceType;
  NodeId?: string;
}
export interface StartDomainMaintenanceResponse {
  MaintenanceId?: string;
}
export interface StartServiceSoftwareUpdateRequest {
  DomainName: string;
  ScheduleAt?: ScheduleAt;
  DesiredStartTime?: number;
}
export interface StartServiceSoftwareUpdateResponse {
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
export type StartTimeHours = number;

export type StartTimeMinutes = number;

export type StartTimestamp = Date | string;

export type StorageSubTypeName = string;

export interface StorageType {
  StorageTypeName?: string;
  StorageSubTypeName?: string;
  StorageTypeLimits?: Array<StorageTypeLimit>;
}
export interface StorageTypeLimit {
  LimitName?: string;
  LimitValues?: Array<string>;
}
export type StorageTypeLimitList = Array<StorageTypeLimit>;
export type StorageTypeList = Array<StorageType>;
export type StorageTypeName = string;

export type OpensearchString = string;

export type StringList = Array<string>;
export type SubjectKey = string;

export type SubjectKeyIdCOption = "UserName" | "UserId" | "Email";
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export type TagValue = string;

export type Timestamp = Date | string;

export type TimeUnit = "HOURS";
export type TLSSecurityPolicy =
  | "POLICY_MIN_TLS_1_0_2019_07"
  | "POLICY_MIN_TLS_1_2_2019_07"
  | "POLICY_MIN_TLS_1_2_PFS_2023_10";
export type TotalNumberOfStages = number;

export type UIntValue = number;

export type UncompressedPluginSizeInBytes = number;

export interface UpdateApplicationRequest {
  id: string;
  dataSources?: Array<DataSource>;
  appConfigs?: Array<AppConfig>;
}
export interface UpdateApplicationResponse {
  id?: string;
  name?: string;
  arn?: string;
  dataSources?: Array<DataSource>;
  iamIdentityCenterOptions?: IamIdentityCenterOptions;
  appConfigs?: Array<AppConfig>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export interface UpdateDataSourceRequest {
  DomainName: string;
  Name: string;
  DataSourceType: DataSourceType;
  Description?: string;
  Status?: DataSourceStatus;
}
export interface UpdateDataSourceResponse {
  Message?: string;
}
export interface UpdateDirectQueryDataSourceRequest {
  DataSourceName: string;
  DataSourceType: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns: Array<string>;
}
export interface UpdateDirectQueryDataSourceResponse {
  DataSourceArn?: string;
}
export interface UpdateDomainConfigRequest {
  DomainName: string;
  ClusterConfig?: ClusterConfig;
  EBSOptions?: EBSOptions;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCOptions;
  CognitoOptions?: CognitoOptions;
  AdvancedOptions?: Record<string, string>;
  AccessPolicies?: string;
  IPAddressType?: IPAddressType;
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  DomainEndpointOptions?: DomainEndpointOptions;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  IdentityCenterOptions?: IdentityCenterOptionsInput;
  AutoTuneOptions?: AutoTuneOptions;
  DryRun?: boolean;
  DryRunMode?: DryRunMode;
  OffPeakWindowOptions?: OffPeakWindowOptions;
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
  AIMLOptions?: AIMLOptionsInput;
}
export interface UpdateDomainConfigResponse {
  DomainConfig: DomainConfig;
  DryRunResults?: DryRunResults;
  DryRunProgressStatus?: DryRunProgressStatus;
}
export interface UpdatePackageRequest {
  PackageID: string;
  PackageSource: PackageSource;
  PackageDescription?: string;
  CommitMessage?: string;
  PackageConfiguration?: PackageConfiguration;
  PackageEncryptionOptions?: PackageEncryptionOptions;
}
export interface UpdatePackageResponse {
  PackageDetails?: PackageDetails;
}
export interface UpdatePackageScopeRequest {
  PackageID: string;
  Operation: PackageScopeOperationEnum;
  PackageUserList: Array<string>;
}
export interface UpdatePackageScopeResponse {
  PackageID?: string;
  Operation?: PackageScopeOperationEnum;
  PackageUserList?: Array<string>;
}
export interface UpdateScheduledActionRequest {
  DomainName: string;
  ActionID: string;
  ActionType: ActionType;
  ScheduleAt: ScheduleAt;
  DesiredStartTime?: number;
}
export interface UpdateScheduledActionResponse {
  ScheduledAction?: ScheduledAction;
}
export type UpdateTimestamp = Date | string;

export interface UpdateVpcEndpointRequest {
  VpcEndpointId: string;
  VpcOptions: VPCOptions;
}
export interface UpdateVpcEndpointResponse {
  VpcEndpoint: VpcEndpoint;
}
export interface UpgradeDomainRequest {
  DomainName: string;
  TargetVersion: string;
  PerformCheckOnly?: boolean;
  AdvancedOptions?: Record<string, string>;
}
export interface UpgradeDomainResponse {
  UpgradeId?: string;
  DomainName?: string;
  TargetVersion?: string;
  PerformCheckOnly?: boolean;
  AdvancedOptions?: Record<string, string>;
  ChangeProgressDetails?: ChangeProgressDetails;
}
export interface UpgradeHistory {
  UpgradeName?: string;
  StartTimestamp?: Date | string;
  UpgradeStatus?: UpgradeStatus;
  StepsList?: Array<UpgradeStepItem>;
}
export type UpgradeHistoryList = Array<UpgradeHistory>;
export type UpgradeName = string;

export type UpgradeStatus =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "SUCCEEDED_WITH_ISSUES"
  | "FAILED";
export type UpgradeStep = "PRE_UPGRADE_CHECK" | "SNAPSHOT" | "UPGRADE";
export interface UpgradeStepItem {
  UpgradeStep?: UpgradeStep;
  UpgradeStepStatus?: UpgradeStatus;
  Issues?: Array<string>;
  ProgressPercent?: number;
}
export type UpgradeStepsList = Array<UpgradeStepItem>;
export type Username = string;

export type UserPoolId = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface ValidationFailure {
  Code?: string;
  Message?: string;
}
export type ValidationFailures = Array<ValidationFailure>;
export type ValueStringList = Array<string>;
export type VersionList = Array<string>;
export interface VersionStatus {
  Options: string;
  Status: OptionStatus;
}
export type VersionString = string;

export type VolumeSize = string;

export type VolumeType = "standard" | "gp2" | "io1" | "gp3";
export interface VPCDerivedInfo {
  VPCId?: string;
  SubnetIds?: Array<string>;
  AvailabilityZones?: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export interface VPCDerivedInfoStatus {
  Options: VPCDerivedInfo;
  Status: OptionStatus;
}
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcEndpointOwner?: string;
  DomainArn?: string;
  VpcOptions?: VPCDerivedInfo;
  Status?: VpcEndpointStatus;
  Endpoint?: string;
}
export interface VpcEndpointError {
  VpcEndpointId?: string;
  ErrorCode?: VpcEndpointErrorCode;
  ErrorMessage?: string;
}
export type VpcEndpointErrorCode = "ENDPOINT_NOT_FOUND" | "SERVER_ERROR";
export type VpcEndpointErrorList = Array<VpcEndpointError>;
export type VpcEndpointId = string;

export type VpcEndpointIdList = Array<string>;
export type VpcEndpoints = Array<VpcEndpoint>;
export type VpcEndpointStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED";
export interface VpcEndpointSummary {
  VpcEndpointId?: string;
  VpcEndpointOwner?: string;
  DomainArn?: string;
  Status?: VpcEndpointStatus;
}
export type VpcEndpointSummaryList = Array<VpcEndpointSummary>;
export interface VPCOptions {
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export interface WindowStartTime {
  Hours: number;
  Minutes: number;
}
export interface ZoneAwarenessConfig {
  AvailabilityZoneCount?: number;
}
export type ZoneStatus = "Active" | "StandBy" | "NotAvailable";
export declare namespace AcceptInboundConnection {
  export type Input = AcceptInboundConnectionRequest;
  export type Output = AcceptInboundConnectionResponse;
  export type Error =
    | DisabledOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AddDataSource {
  export type Input = AddDataSourceRequest;
  export type Output = AddDataSourceResponse;
  export type Error =
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AddDirectQueryDataSource {
  export type Input = AddDirectQueryDataSourceRequest;
  export type Output = AddDirectQueryDataSourceResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AddTags {
  export type Input = AddTagsRequest;
  export type Output = {};
  export type Error =
    | BaseException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociatePackage {
  export type Input = AssociatePackageRequest;
  export type Output = AssociatePackageResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociatePackages {
  export type Input = AssociatePackagesRequest;
  export type Output = AssociatePackagesResponse;
  export type Error =
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AuthorizeVpcEndpointAccess {
  export type Input = AuthorizeVpcEndpointAccessRequest;
  export type Output = AuthorizeVpcEndpointAccessResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelDomainConfigChange {
  export type Input = CancelDomainConfigChangeRequest;
  export type Output = CancelDomainConfigChangeResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelServiceSoftwareUpdate {
  export type Input = CancelServiceSoftwareUpdateRequest;
  export type Output = CancelServiceSoftwareUpdateResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = CreateDomainResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOutboundConnection {
  export type Input = CreateOutboundConnectionRequest;
  export type Output = CreateOutboundConnectionResponse;
  export type Error =
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreatePackage {
  export type Input = CreatePackageRequest;
  export type Output = CreatePackageResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateVpcEndpoint {
  export type Input = CreateVpcEndpointRequest;
  export type Output = CreateVpcEndpointResponse;
  export type Error =
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceRequest;
  export type Output = DeleteDataSourceResponse;
  export type Error =
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDirectQueryDataSource {
  export type Input = DeleteDirectQueryDataSourceRequest;
  export type Output = {};
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = DeleteDomainResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInboundConnection {
  export type Input = DeleteInboundConnectionRequest;
  export type Output = DeleteInboundConnectionResponse;
  export type Error =
    | DisabledOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteOutboundConnection {
  export type Input = DeleteOutboundConnectionRequest;
  export type Output = DeleteOutboundConnectionResponse;
  export type Error =
    | DisabledOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePackage {
  export type Input = DeletePackageRequest;
  export type Output = DeletePackageResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVpcEndpoint {
  export type Input = DeleteVpcEndpointRequest;
  export type Output = DeleteVpcEndpointResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDomain {
  export type Input = DescribeDomainRequest;
  export type Output = DescribeDomainResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomainAutoTunes {
  export type Input = DescribeDomainAutoTunesRequest;
  export type Output = DescribeDomainAutoTunesResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomainChangeProgress {
  export type Input = DescribeDomainChangeProgressRequest;
  export type Output = DescribeDomainChangeProgressResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomainConfig {
  export type Input = DescribeDomainConfigRequest;
  export type Output = DescribeDomainConfigResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomainHealth {
  export type Input = DescribeDomainHealthRequest;
  export type Output = DescribeDomainHealthResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomainNodes {
  export type Input = DescribeDomainNodesRequest;
  export type Output = DescribeDomainNodesResponse;
  export type Error =
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomains {
  export type Input = DescribeDomainsRequest;
  export type Output = DescribeDomainsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDryRunProgress {
  export type Input = DescribeDryRunProgressRequest;
  export type Output = DescribeDryRunProgressResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInboundConnections {
  export type Input = DescribeInboundConnectionsRequest;
  export type Output = DescribeInboundConnectionsResponse;
  export type Error =
    | DisabledOperationException
    | InvalidPaginationTokenException
    | CommonAwsError;
}

export declare namespace DescribeInstanceTypeLimits {
  export type Input = DescribeInstanceTypeLimitsRequest;
  export type Output = DescribeInstanceTypeLimitsResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOutboundConnections {
  export type Input = DescribeOutboundConnectionsRequest;
  export type Output = DescribeOutboundConnectionsResponse;
  export type Error =
    | DisabledOperationException
    | InvalidPaginationTokenException
    | CommonAwsError;
}

export declare namespace DescribePackages {
  export type Input = DescribePackagesRequest;
  export type Output = DescribePackagesResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeReservedInstanceOfferings {
  export type Input = DescribeReservedInstanceOfferingsRequest;
  export type Output = DescribeReservedInstanceOfferingsResponse;
  export type Error =
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeReservedInstances {
  export type Input = DescribeReservedInstancesRequest;
  export type Output = DescribeReservedInstancesResponse;
  export type Error =
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeVpcEndpoints {
  export type Input = DescribeVpcEndpointsRequest;
  export type Output = DescribeVpcEndpointsResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DissociatePackage {
  export type Input = DissociatePackageRequest;
  export type Output = DissociatePackageResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | ConflictException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DissociatePackages {
  export type Input = DissociatePackagesRequest;
  export type Output = DissociatePackagesResponse;
  export type Error =
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = GetApplicationResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCompatibleVersions {
  export type Input = GetCompatibleVersionsRequest;
  export type Output = GetCompatibleVersionsResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataSource {
  export type Input = GetDataSourceRequest;
  export type Output = GetDataSourceResponse;
  export type Error =
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDirectQueryDataSource {
  export type Input = GetDirectQueryDataSourceRequest;
  export type Output = GetDirectQueryDataSourceResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDomainMaintenanceStatus {
  export type Input = GetDomainMaintenanceStatusRequest;
  export type Output = GetDomainMaintenanceStatusResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPackageVersionHistory {
  export type Input = GetPackageVersionHistoryRequest;
  export type Output = GetPackageVersionHistoryResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUpgradeHistory {
  export type Input = GetUpgradeHistoryRequest;
  export type Output = GetUpgradeHistoryResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUpgradeStatus {
  export type Input = GetUpgradeStatusRequest;
  export type Output = GetUpgradeStatusResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataSources {
  export type Input = ListDataSourcesRequest;
  export type Output = ListDataSourcesResponse;
  export type Error =
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDirectQueryDataSources {
  export type Input = ListDirectQueryDataSourcesRequest;
  export type Output = ListDirectQueryDataSourcesResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomainMaintenances {
  export type Input = ListDomainMaintenancesRequest;
  export type Output = ListDomainMaintenancesResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomainNames {
  export type Input = ListDomainNamesRequest;
  export type Output = ListDomainNamesResponse;
  export type Error = BaseException | ValidationException | CommonAwsError;
}

export declare namespace ListDomainsForPackage {
  export type Input = ListDomainsForPackageRequest;
  export type Output = ListDomainsForPackageResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInstanceTypeDetails {
  export type Input = ListInstanceTypeDetailsRequest;
  export type Output = ListInstanceTypeDetailsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackagesForDomain {
  export type Input = ListPackagesForDomainRequest;
  export type Output = ListPackagesForDomainResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScheduledActions {
  export type Input = ListScheduledActionsRequest;
  export type Output = ListScheduledActionsResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidPaginationTokenException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsRequest;
  export type Output = ListTagsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListVersions {
  export type Input = ListVersionsRequest;
  export type Output = ListVersionsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListVpcEndpointAccess {
  export type Input = ListVpcEndpointAccessRequest;
  export type Output = ListVpcEndpointAccessResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListVpcEndpoints {
  export type Input = ListVpcEndpointsRequest;
  export type Output = ListVpcEndpointsResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | CommonAwsError;
}

export declare namespace ListVpcEndpointsForDomain {
  export type Input = ListVpcEndpointsForDomainRequest;
  export type Output = ListVpcEndpointsForDomainResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PurchaseReservedInstanceOffering {
  export type Input = PurchaseReservedInstanceOfferingRequest;
  export type Output = PurchaseReservedInstanceOfferingResponse;
  export type Error =
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectInboundConnection {
  export type Input = RejectInboundConnectionRequest;
  export type Output = RejectInboundConnectionResponse;
  export type Error =
    | DisabledOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RemoveTags {
  export type Input = RemoveTagsRequest;
  export type Output = {};
  export type Error =
    | BaseException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RevokeVpcEndpointAccess {
  export type Input = RevokeVpcEndpointAccessRequest;
  export type Output = RevokeVpcEndpointAccessResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDomainMaintenance {
  export type Input = StartDomainMaintenanceRequest;
  export type Output = StartDomainMaintenanceResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartServiceSoftwareUpdate {
  export type Input = StartServiceSoftwareUpdateRequest;
  export type Output = StartServiceSoftwareUpdateResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceRequest;
  export type Output = UpdateDataSourceResponse;
  export type Error =
    | BaseException
    | DependencyFailureException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDirectQueryDataSource {
  export type Input = UpdateDirectQueryDataSourceRequest;
  export type Output = UpdateDirectQueryDataSourceResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDomainConfig {
  export type Input = UpdateDomainConfigRequest;
  export type Output = UpdateDomainConfigResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackage {
  export type Input = UpdatePackageRequest;
  export type Output = UpdatePackageResponse;
  export type Error =
    | AccessDeniedException
    | BaseException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackageScope {
  export type Input = UpdatePackageScopeRequest;
  export type Output = UpdatePackageScopeResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateScheduledAction {
  export type Input = UpdateScheduledActionRequest;
  export type Output = UpdateScheduledActionResponse;
  export type Error =
    | BaseException
    | ConflictException
    | InternalException
    | LimitExceededException
    | ResourceNotFoundException
    | SlotNotAvailableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateVpcEndpoint {
  export type Input = UpdateVpcEndpointRequest;
  export type Output = UpdateVpcEndpointResponse;
  export type Error =
    | BaseException
    | ConflictException
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpgradeDomain {
  export type Input = UpgradeDomainRequest;
  export type Output = UpgradeDomainResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
