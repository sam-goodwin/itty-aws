import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonElasticsearchService2015 {
  acceptInboundCrossClusterSearchConnection(
    input: AcceptInboundCrossClusterSearchConnectionRequest,
  ): Effect.Effect<
    AcceptInboundCrossClusterSearchConnectionResponse,
    DisabledOperationException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  addTags(
    input: AddTagsRequest,
  ): Effect.Effect<
    {},
    BaseException | InternalException | LimitExceededException | ValidationException | CommonAwsError
  >;
  associatePackage(
    input: AssociatePackageRequest,
  ): Effect.Effect<
    AssociatePackageResponse,
    AccessDeniedException | BaseException | ConflictException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  authorizeVpcEndpointAccess(
    input: AuthorizeVpcEndpointAccessRequest,
  ): Effect.Effect<
    AuthorizeVpcEndpointAccessResponse,
    BaseException | DisabledOperationException | InternalException | LimitExceededException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  cancelDomainConfigChange(
    input: CancelDomainConfigChangeRequest,
  ): Effect.Effect<
    CancelDomainConfigChangeResponse,
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  cancelElasticsearchServiceSoftwareUpdate(
    input: CancelElasticsearchServiceSoftwareUpdateRequest,
  ): Effect.Effect<
    CancelElasticsearchServiceSoftwareUpdateResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  createElasticsearchDomain(
    input: CreateElasticsearchDomainRequest,
  ): Effect.Effect<
    CreateElasticsearchDomainResponse,
    BaseException | DisabledOperationException | InternalException | InvalidTypeException | LimitExceededException | ResourceAlreadyExistsException | ValidationException | CommonAwsError
  >;
  createOutboundCrossClusterSearchConnection(
    input: CreateOutboundCrossClusterSearchConnectionRequest,
  ): Effect.Effect<
    CreateOutboundCrossClusterSearchConnectionResponse,
    DisabledOperationException | InternalException | LimitExceededException | ResourceAlreadyExistsException | CommonAwsError
  >;
  createPackage(
    input: CreatePackageRequest,
  ): Effect.Effect<
    CreatePackageResponse,
    AccessDeniedException | BaseException | InternalException | InvalidTypeException | LimitExceededException | ResourceAlreadyExistsException | ValidationException | CommonAwsError
  >;
  createVpcEndpoint(
    input: CreateVpcEndpointRequest,
  ): Effect.Effect<
    CreateVpcEndpointResponse,
    BaseException | ConflictException | DisabledOperationException | InternalException | LimitExceededException | ValidationException | CommonAwsError
  >;
  deleteElasticsearchDomain(
    input: DeleteElasticsearchDomainRequest,
  ): Effect.Effect<
    DeleteElasticsearchDomainResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteElasticsearchServiceRole(
    input: {},
  ): Effect.Effect<
    {},
    BaseException | InternalException | ValidationException | CommonAwsError
  >;
  deleteInboundCrossClusterSearchConnection(
    input: DeleteInboundCrossClusterSearchConnectionRequest,
  ): Effect.Effect<
    DeleteInboundCrossClusterSearchConnectionResponse,
    DisabledOperationException | ResourceNotFoundException | CommonAwsError
  >;
  deleteOutboundCrossClusterSearchConnection(
    input: DeleteOutboundCrossClusterSearchConnectionRequest,
  ): Effect.Effect<
    DeleteOutboundCrossClusterSearchConnectionResponse,
    DisabledOperationException | ResourceNotFoundException | CommonAwsError
  >;
  deletePackage(
    input: DeletePackageRequest,
  ): Effect.Effect<
    DeletePackageResponse,
    AccessDeniedException | BaseException | ConflictException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteVpcEndpoint(
    input: DeleteVpcEndpointRequest,
  ): Effect.Effect<
    DeleteVpcEndpointResponse,
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | CommonAwsError
  >;
  describeDomainAutoTunes(
    input: DescribeDomainAutoTunesRequest,
  ): Effect.Effect<
    DescribeDomainAutoTunesResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeDomainChangeProgress(
    input: DescribeDomainChangeProgressRequest,
  ): Effect.Effect<
    DescribeDomainChangeProgressResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeElasticsearchDomain(
    input: DescribeElasticsearchDomainRequest,
  ): Effect.Effect<
    DescribeElasticsearchDomainResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeElasticsearchDomainConfig(
    input: DescribeElasticsearchDomainConfigRequest,
  ): Effect.Effect<
    DescribeElasticsearchDomainConfigResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeElasticsearchDomains(
    input: DescribeElasticsearchDomainsRequest,
  ): Effect.Effect<
    DescribeElasticsearchDomainsResponse,
    BaseException | InternalException | ValidationException | CommonAwsError
  >;
  describeElasticsearchInstanceTypeLimits(
    input: DescribeElasticsearchInstanceTypeLimitsRequest,
  ): Effect.Effect<
    DescribeElasticsearchInstanceTypeLimitsResponse,
    BaseException | InternalException | InvalidTypeException | LimitExceededException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeInboundCrossClusterSearchConnections(
    input: DescribeInboundCrossClusterSearchConnectionsRequest,
  ): Effect.Effect<
    DescribeInboundCrossClusterSearchConnectionsResponse,
    DisabledOperationException | InvalidPaginationTokenException | CommonAwsError
  >;
  describeOutboundCrossClusterSearchConnections(
    input: DescribeOutboundCrossClusterSearchConnectionsRequest,
  ): Effect.Effect<
    DescribeOutboundCrossClusterSearchConnectionsResponse,
    DisabledOperationException | InvalidPaginationTokenException | CommonAwsError
  >;
  describePackages(
    input: DescribePackagesRequest,
  ): Effect.Effect<
    DescribePackagesResponse,
    AccessDeniedException | BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeReservedElasticsearchInstanceOfferings(
    input: DescribeReservedElasticsearchInstanceOfferingsRequest,
  ): Effect.Effect<
    DescribeReservedElasticsearchInstanceOfferingsResponse,
    DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeReservedElasticsearchInstances(
    input: DescribeReservedElasticsearchInstancesRequest,
  ): Effect.Effect<
    DescribeReservedElasticsearchInstancesResponse,
    DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeVpcEndpoints(
    input: DescribeVpcEndpointsRequest,
  ): Effect.Effect<
    DescribeVpcEndpointsResponse,
    BaseException | DisabledOperationException | InternalException | ValidationException | CommonAwsError
  >;
  dissociatePackage(
    input: DissociatePackageRequest,
  ): Effect.Effect<
    DissociatePackageResponse,
    AccessDeniedException | BaseException | ConflictException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getCompatibleElasticsearchVersions(
    input: GetCompatibleElasticsearchVersionsRequest,
  ): Effect.Effect<
    GetCompatibleElasticsearchVersionsResponse,
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getPackageVersionHistory(
    input: GetPackageVersionHistoryRequest,
  ): Effect.Effect<
    GetPackageVersionHistoryResponse,
    AccessDeniedException | BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getUpgradeHistory(
    input: GetUpgradeHistoryRequest,
  ): Effect.Effect<
    GetUpgradeHistoryResponse,
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getUpgradeStatus(
    input: GetUpgradeStatusRequest,
  ): Effect.Effect<
    GetUpgradeStatusResponse,
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
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
    AccessDeniedException | BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listElasticsearchInstanceTypes(
    input: ListElasticsearchInstanceTypesRequest,
  ): Effect.Effect<
    ListElasticsearchInstanceTypesResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listElasticsearchVersions(
    input: ListElasticsearchVersionsRequest,
  ): Effect.Effect<
    ListElasticsearchVersionsResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listPackagesForDomain(
    input: ListPackagesForDomainRequest,
  ): Effect.Effect<
    ListPackagesForDomainResponse,
    AccessDeniedException | BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTags(
    input: ListTagsRequest,
  ): Effect.Effect<
    ListTagsResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listVpcEndpointAccess(
    input: ListVpcEndpointAccessRequest,
  ): Effect.Effect<
    ListVpcEndpointAccessResponse,
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | CommonAwsError
  >;
  listVpcEndpoints(
    input: ListVpcEndpointsRequest,
  ): Effect.Effect<
    ListVpcEndpointsResponse,
    BaseException | DisabledOperationException | InternalException | CommonAwsError
  >;
  listVpcEndpointsForDomain(
    input: ListVpcEndpointsForDomainRequest,
  ): Effect.Effect<
    ListVpcEndpointsForDomainResponse,
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | CommonAwsError
  >;
  purchaseReservedElasticsearchInstanceOffering(
    input: PurchaseReservedElasticsearchInstanceOfferingRequest,
  ): Effect.Effect<
    PurchaseReservedElasticsearchInstanceOfferingResponse,
    DisabledOperationException | InternalException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  rejectInboundCrossClusterSearchConnection(
    input: RejectInboundCrossClusterSearchConnectionRequest,
  ): Effect.Effect<
    RejectInboundCrossClusterSearchConnectionResponse,
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
    BaseException | DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  startElasticsearchServiceSoftwareUpdate(
    input: StartElasticsearchServiceSoftwareUpdateRequest,
  ): Effect.Effect<
    StartElasticsearchServiceSoftwareUpdateResponse,
    BaseException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateElasticsearchDomainConfig(
    input: UpdateElasticsearchDomainConfigRequest,
  ): Effect.Effect<
    UpdateElasticsearchDomainConfigResponse,
    BaseException | InternalException | InvalidTypeException | LimitExceededException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updatePackage(
    input: UpdatePackageRequest,
  ): Effect.Effect<
    UpdatePackageResponse,
    AccessDeniedException | BaseException | InternalException | LimitExceededException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateVpcEndpoint(
    input: UpdateVpcEndpointRequest,
  ): Effect.Effect<
    UpdateVpcEndpointResponse,
    BaseException | ConflictException | DisabledOperationException | InternalException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  upgradeElasticsearchDomain(
    input: UpgradeElasticsearchDomainRequest,
  ): Effect.Effect<
    UpgradeElasticsearchDomainResponse,
    BaseException | DisabledOperationException | InternalException | ResourceAlreadyExistsException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type ElasticsearchService = AmazonElasticsearchService2015;

export interface AcceptInboundCrossClusterSearchConnectionRequest {
  CrossClusterSearchConnectionId: string;
}
export interface AcceptInboundCrossClusterSearchConnectionResponse {
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AccessPoliciesStatus {
  Options: string;
  Status: OptionStatus;
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
  AnonymousAuthDisableDate?: Date | string;
  AnonymousAuthEnabled?: boolean;
}
export interface AdvancedSecurityOptionsInput {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: MasterUserOptions;
  SAMLOptions?: SAMLOptionsInput;
  AnonymousAuthEnabled?: boolean;
}
export interface AdvancedSecurityOptionsStatus {
  Options: AdvancedSecurityOptions;
  Status: OptionStatus;
}
export type ARN = string;

export interface AssociatePackageRequest {
  PackageID: string;
  DomainName: string;
}
export interface AssociatePackageResponse {
  DomainPackageDetails?: DomainPackageDetails;
}
export interface AuthorizedPrincipal {
  PrincipalType?: PrincipalType;
  Principal?: string;
}
export type AuthorizedPrincipalList = Array<AuthorizedPrincipal>;
export interface AuthorizeVpcEndpointAccessRequest {
  DomainName: string;
  Account: string;
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
export type AutoTuneMaintenanceScheduleList = Array<AutoTuneMaintenanceSchedule>;
export interface AutoTuneOptions {
  DesiredState?: AutoTuneDesiredState;
  RollbackOnDisable?: RollbackOnDisable;
  MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
}
export interface AutoTuneOptionsInput {
  DesiredState?: AutoTuneDesiredState;
  MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
}
export interface AutoTuneOptionsOutput {
  State?: AutoTuneState;
  ErrorMessage?: string;
}
export interface AutoTuneOptionsStatus {
  Options?: AutoTuneOptions;
  Status?: AutoTuneStatus;
}
export type AutoTuneState = "ENABLED" | "DISABLED" | "ENABLE_IN_PROGRESS" | "DISABLE_IN_PROGRESS" | "DISABLED_AND_ROLLBACK_SCHEDULED" | "DISABLED_AND_ROLLBACK_IN_PROGRESS" | "DISABLED_AND_ROLLBACK_COMPLETE" | "DISABLED_AND_ROLLBACK_ERROR" | "ERROR";
export interface AutoTuneStatus {
  CreationDate: Date | string;
  UpdateDate: Date | string;
  UpdateVersion?: number;
  State: AutoTuneState;
  ErrorMessage?: string;
  PendingDeletion?: boolean;
}
export type AutoTuneType = "SCHEDULED_ACTION";
export type AWSAccount = string;

export type BackendRole = string;

export declare class BaseException extends Data.TaggedError(
  "BaseException",
)<{
  readonly message?: string;
}> {}
export interface CancelDomainConfigChangeRequest {
  DomainName: string;
  DryRun?: boolean;
}
export interface CancelDomainConfigChangeResponse {
  DryRun?: boolean;
  CancelledChangeIds?: Array<string>;
  CancelledChangeProperties?: Array<CancelledChangeProperty>;
}
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  DomainName: string;
}
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
export interface CancelledChangeProperty {
  PropertyName?: string;
  CancelledValue?: string;
  ActiveValue?: string;
}
export type CancelledChangePropertyList = Array<CancelledChangeProperty>;
export interface ChangeProgressDetails {
  ChangeId?: string;
  Message?: string;
  ConfigChangeStatus?: ConfigChangeStatus;
  StartTime?: Date | string;
  LastUpdatedTime?: Date | string;
  InitiatedBy?: InitiatedBy;
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
  ConfigChangeStatus?: ConfigChangeStatus;
  LastUpdatedTime?: Date | string;
  InitiatedBy?: InitiatedBy;
}
export type ClientToken = string;

export type CloudWatchLogsLogGroupArn = string;

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

export type CompatibleElasticsearchVersionsList = Array<CompatibleVersionsMap>;
export interface CompatibleVersionsMap {
  SourceVersion?: string;
  TargetVersions?: Array<string>;
}
export type ConfigChangeStatus = "PENDING" | "INITIALIZING" | "VALIDATING" | "VALIDATION_FAILED" | "APPLYING_CHANGES" | "COMPLETED" | "PENDING_USER_INPUT" | "CANCELLED";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConnectionAlias = string;

export type CreatedAt = Date | string;

export interface CreateElasticsearchDomainRequest {
  DomainName: string;
  ElasticsearchVersion?: string;
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
  EBSOptions?: EBSOptions;
  AccessPolicies?: string;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCOptions;
  CognitoOptions?: CognitoOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  AdvancedOptions?: Record<string, string>;
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;
  DomainEndpointOptions?: DomainEndpointOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  AutoTuneOptions?: AutoTuneOptionsInput;
  TagList?: Array<Tag>;
}
export interface CreateElasticsearchDomainResponse {
  DomainStatus?: ElasticsearchDomainStatus;
}
export interface CreateOutboundCrossClusterSearchConnectionRequest {
  SourceDomainInfo: DomainInformation;
  DestinationDomainInfo: DomainInformation;
  ConnectionAlias: string;
}
export interface CreateOutboundCrossClusterSearchConnectionResponse {
  SourceDomainInfo?: DomainInformation;
  DestinationDomainInfo?: DomainInformation;
  ConnectionAlias?: string;
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
  CrossClusterSearchConnectionId?: string;
}
export interface CreatePackageRequest {
  PackageName: string;
  PackageType: PackageType;
  PackageDescription?: string;
  PackageSource: PackageSource;
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
export type CrossClusterSearchConnectionId = string;

export type CrossClusterSearchConnectionStatusMessage = string;

export interface DeleteElasticsearchDomainRequest {
  DomainName: string;
}
export interface DeleteElasticsearchDomainResponse {
  DomainStatus?: ElasticsearchDomainStatus;
}
export interface DeleteInboundCrossClusterSearchConnectionRequest {
  CrossClusterSearchConnectionId: string;
}
export interface DeleteInboundCrossClusterSearchConnectionResponse {
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
  CrossClusterSearchConnectionId: string;
}
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
  CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection;
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
export type DeploymentCloseDateTimeStamp = Date | string;

export type DeploymentStatus = "PENDING_UPDATE" | "IN_PROGRESS" | "COMPLETED" | "NOT_ELIGIBLE" | "ELIGIBLE";
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
export interface DescribeElasticsearchDomainConfigRequest {
  DomainName: string;
}
export interface DescribeElasticsearchDomainConfigResponse {
  DomainConfig: ElasticsearchDomainConfig;
}
export interface DescribeElasticsearchDomainRequest {
  DomainName: string;
}
export interface DescribeElasticsearchDomainResponse {
  DomainStatus: ElasticsearchDomainStatus;
}
export interface DescribeElasticsearchDomainsRequest {
  DomainNames: Array<string>;
}
export interface DescribeElasticsearchDomainsResponse {
  DomainStatusList: Array<ElasticsearchDomainStatus>;
}
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
  DomainName?: string;
  InstanceType: ESPartitionInstanceType;
  ElasticsearchVersion: string;
}
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
  LimitsByRole?: Record<string, Limits>;
}
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
  CrossClusterSearchConnections?: Array<InboundCrossClusterSearchConnection>;
  NextToken?: string;
}
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
  Filters?: Array<Filter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
  CrossClusterSearchConnections?: Array<OutboundCrossClusterSearchConnection>;
  NextToken?: string;
}
export interface DescribePackagesFilter {
  Name?: DescribePackagesFilterName;
  Value?: Array<string>;
}
export type DescribePackagesFilterList = Array<DescribePackagesFilter>;
export type DescribePackagesFilterName = "PackageID" | "PackageName" | "PackageStatus";
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
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  ReservedElasticsearchInstanceOfferingId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  NextToken?: string;
  ReservedElasticsearchInstanceOfferings?: Array<ReservedElasticsearchInstanceOffering>;
}
export interface DescribeReservedElasticsearchInstancesRequest {
  ReservedElasticsearchInstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeReservedElasticsearchInstancesResponse {
  NextToken?: string;
  ReservedElasticsearchInstances?: Array<ReservedElasticsearchInstance>;
}
export interface DescribeVpcEndpointsRequest {
  VpcEndpointIds: Array<string>;
}
export interface DescribeVpcEndpointsResponse {
  VpcEndpoints: Array<VpcEndpoint>;
  VpcEndpointErrors: Array<VpcEndpointError>;
}
export type Description = string;

export declare class DisabledOperationException extends Data.TaggedError(
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
export type DomainArn = string;

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
export type DomainId = string;

export interface DomainInfo {
  DomainName?: string;
  EngineType?: EngineType;
}
export type DomainInfoList = Array<DomainInfo>;
export interface DomainInformation {
  OwnerId?: string;
  DomainName: string;
  Region?: string;
}
export type DomainName = string;

export type DomainNameFqdn = string;

export type DomainNameList = Array<string>;
export interface DomainPackageDetails {
  PackageID?: string;
  PackageName?: string;
  PackageType?: PackageType;
  LastUpdated?: Date | string;
  DomainName?: string;
  DomainPackageStatus?: DomainPackageStatus;
  PackageVersion?: string;
  ReferencePath?: string;
  ErrorDetails?: ErrorDetails;
}
export type DomainPackageDetailsList = Array<DomainPackageDetails>;
export type DomainPackageStatus = "ASSOCIATING" | "ASSOCIATION_FAILED" | "ACTIVE" | "DISSOCIATING" | "DISSOCIATION_FAILED";
export type DomainProcessingStatusType = "CREATING" | "ACTIVE" | "MODIFYING" | "UPGRADING" | "UPDATING" | "ISOLATED" | "DELETING";
export type Double = number;

export type DryRun = boolean;

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
export interface ElasticsearchClusterConfig {
  InstanceType?: ESPartitionInstanceType;
  InstanceCount?: number;
  DedicatedMasterEnabled?: boolean;
  ZoneAwarenessEnabled?: boolean;
  ZoneAwarenessConfig?: ZoneAwarenessConfig;
  DedicatedMasterType?: ESPartitionInstanceType;
  DedicatedMasterCount?: number;
  WarmEnabled?: boolean;
  WarmType?: ESWarmPartitionInstanceType;
  WarmCount?: number;
  ColdStorageOptions?: ColdStorageOptions;
}
export interface ElasticsearchClusterConfigStatus {
  Options: ElasticsearchClusterConfig;
  Status: OptionStatus;
}
export interface ElasticsearchDomainConfig {
  ElasticsearchVersion?: ElasticsearchVersionStatus;
  ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
  EBSOptions?: EBSOptionsStatus;
  AccessPolicies?: AccessPoliciesStatus;
  SnapshotOptions?: SnapshotOptionsStatus;
  VPCOptions?: VPCDerivedInfoStatus;
  CognitoOptions?: CognitoOptionsStatus;
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;
  AdvancedOptions?: AdvancedOptionsStatus;
  LogPublishingOptions?: LogPublishingOptionsStatus;
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;
  AutoTuneOptions?: AutoTuneOptionsStatus;
  ChangeProgressDetails?: ChangeProgressDetails;
  ModifyingProperties?: Array<ModifyingProperties>;
}
export interface ElasticsearchDomainStatus {
  DomainId: string;
  DomainName: string;
  ARN: string;
  Created?: boolean;
  Deleted?: boolean;
  Endpoint?: string;
  Endpoints?: Record<string, string>;
  Processing?: boolean;
  UpgradeProcessing?: boolean;
  ElasticsearchVersion?: string;
  ElasticsearchClusterConfig: ElasticsearchClusterConfig;
  EBSOptions?: EBSOptions;
  AccessPolicies?: string;
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
  AutoTuneOptions?: AutoTuneOptionsOutput;
  ChangeProgressDetails?: ChangeProgressDetails;
  DomainProcessingStatus?: DomainProcessingStatusType;
  ModifyingProperties?: Array<ModifyingProperties>;
}
export type ElasticsearchDomainStatusList = Array<ElasticsearchDomainStatus>;
export type ElasticsearchInstanceTypeList = Array<ESPartitionInstanceType>;
export type ElasticsearchVersionList = Array<string>;
export interface ElasticsearchVersionStatus {
  Options: string;
  Status: OptionStatus;
}
export type ElasticsearchVersionString = string;

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
export interface ErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}
export type ErrorMessage = string;

export type ErrorType = string;

export type ESPartitionInstanceType = "m3_medium_elasticsearch" | "m3_large_elasticsearch" | "m3_xlarge_elasticsearch" | "m3_2xlarge_elasticsearch" | "m4_large_elasticsearch" | "m4_xlarge_elasticsearch" | "m4_2xlarge_elasticsearch" | "m4_4xlarge_elasticsearch" | "m4_10xlarge_elasticsearch" | "m5_large_elasticsearch" | "m5_xlarge_elasticsearch" | "m5_2xlarge_elasticsearch" | "m5_4xlarge_elasticsearch" | "m5_12xlarge_elasticsearch" | "r5_large_elasticsearch" | "r5_xlarge_elasticsearch" | "r5_2xlarge_elasticsearch" | "r5_4xlarge_elasticsearch" | "r5_12xlarge_elasticsearch" | "c5_large_elasticsearch" | "c5_xlarge_elasticsearch" | "c5_2xlarge_elasticsearch" | "c5_4xlarge_elasticsearch" | "c5_9xlarge_elasticsearch" | "c5_18xlarge_elasticsearch" | "ultrawarm1_medium_elasticsearch" | "ultrawarm1_large_elasticsearch" | "t2_micro_elasticsearch" | "t2_small_elasticsearch" | "t2_medium_elasticsearch" | "r3_large_elasticsearch" | "r3_xlarge_elasticsearch" | "r3_2xlarge_elasticsearch" | "r3_4xlarge_elasticsearch" | "r3_8xlarge_elasticsearch" | "i2_xlarge_elasticsearch" | "i2_2xlarge_elasticsearch" | "d2_xlarge_elasticsearch" | "d2_2xlarge_elasticsearch" | "d2_4xlarge_elasticsearch" | "d2_8xlarge_elasticsearch" | "c4_large_elasticsearch" | "c4_xlarge_elasticsearch" | "c4_2xlarge_elasticsearch" | "c4_4xlarge_elasticsearch" | "c4_8xlarge_elasticsearch" | "r4_large_elasticsearch" | "r4_xlarge_elasticsearch" | "r4_2xlarge_elasticsearch" | "r4_4xlarge_elasticsearch" | "r4_8xlarge_elasticsearch" | "r4_16xlarge_elasticsearch" | "i3_large_elasticsearch" | "i3_xlarge_elasticsearch" | "i3_2xlarge_elasticsearch" | "i3_4xlarge_elasticsearch" | "i3_8xlarge_elasticsearch" | "i3_16xlarge_elasticsearch";
export type ESWarmPartitionInstanceType = "ultrawarm1_medium_elasticsearch" | "ultrawarm1_large_elasticsearch";
export interface Filter {
  Name?: string;
  Values?: Array<string>;
}
export type FilterList = Array<Filter>;
export interface GetCompatibleElasticsearchVersionsRequest {
  DomainName?: string;
}
export interface GetCompatibleElasticsearchVersionsResponse {
  CompatibleElasticsearchVersions?: Array<CompatibleVersionsMap>;
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
export type IdentityPoolId = string;

export interface InboundCrossClusterSearchConnection {
  SourceDomainInfo?: DomainInformation;
  DestinationDomainInfo?: DomainInformation;
  CrossClusterSearchConnectionId?: string;
  ConnectionStatus?: InboundCrossClusterSearchConnectionStatus;
}
export type InboundCrossClusterSearchConnections = Array<InboundCrossClusterSearchConnection>;
export interface InboundCrossClusterSearchConnectionStatus {
  StatusCode?: InboundCrossClusterSearchConnectionStatusCode;
  Message?: string;
}
export type InboundCrossClusterSearchConnectionStatusCode = "PENDING_ACCEPTANCE" | "APPROVED" | "REJECTING" | "REJECTED" | "DELETING" | "DELETED";
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

export type Integer = number;

export type IntegerClass = number;

export declare class InternalException extends Data.TaggedError(
  "InternalException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPaginationTokenException extends Data.TaggedError(
  "InvalidPaginationTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTypeException extends Data.TaggedError(
  "InvalidTypeException",
)<{
  readonly message?: string;
}> {}
export type Issue = string;

export type Issues = Array<string>;
export type KmsKeyId = string;

export type LastUpdated = Date | string;

export declare class LimitExceededException extends Data.TaggedError(
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
export interface ListElasticsearchInstanceTypesRequest {
  ElasticsearchVersion: string;
  DomainName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListElasticsearchInstanceTypesResponse {
  ElasticsearchInstanceTypes?: Array<ESPartitionInstanceType>;
  NextToken?: string;
}
export interface ListElasticsearchVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListElasticsearchVersionsResponse {
  ElasticsearchVersions?: Array<string>;
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
export interface ListTagsRequest {
  ARN: string;
}
export interface ListTagsResponse {
  TagList?: Array<Tag>;
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
export type LogType = "INDEX_SLOW_LOGS" | "SEARCH_SLOW_LOGS" | "ES_APPLICATION_LOGS" | "AUDIT_LOGS";
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
export type NextToken = string;

export interface NodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
export interface NodeToNodeEncryptionOptionsStatus {
  Options: NodeToNodeEncryptionOptions;
  Status: OptionStatus;
}
export type NonEmptyString = string;

export type OptionState = "RequiresIndexDocuments" | "Processing" | "Active";
export interface OptionStatus {
  CreationDate: Date | string;
  UpdateDate: Date | string;
  UpdateVersion?: number;
  State: OptionState;
  PendingDeletion?: boolean;
}
export interface OutboundCrossClusterSearchConnection {
  SourceDomainInfo?: DomainInformation;
  DestinationDomainInfo?: DomainInformation;
  CrossClusterSearchConnectionId?: string;
  ConnectionAlias?: string;
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
}
export type OutboundCrossClusterSearchConnections = Array<OutboundCrossClusterSearchConnection>;
export interface OutboundCrossClusterSearchConnectionStatus {
  StatusCode?: OutboundCrossClusterSearchConnectionStatusCode;
  Message?: string;
}
export type OutboundCrossClusterSearchConnectionStatusCode = "PENDING_ACCEPTANCE" | "VALIDATING" | "VALIDATION_FAILED" | "PROVISIONING" | "ACTIVE" | "REJECTED" | "DELETING" | "DELETED";
export type OverallChangeStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
export type OwnerId = string;

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
}
export type PackageDetailsList = Array<PackageDetails>;
export type PackageID = string;

export type PackageName = string;

export interface PackageSource {
  S3BucketName?: string;
  S3Key?: string;
}
export type PackageStatus = "COPYING" | "COPY_FAILED" | "VALIDATING" | "VALIDATION_FAILED" | "AVAILABLE" | "DELETING" | "DELETED" | "DELETE_FAILED";
export type PackageType = "TXT_DICTIONARY";
export type PackageVersion = string;

export interface PackageVersionHistory {
  PackageVersion?: string;
  CommitMessage?: string;
  CreatedAt?: Date | string;
}
export type PackageVersionHistoryList = Array<PackageVersionHistory>;
export type Password = string;

export type PolicyDocument = string;

export type PrincipalType = "AWS_ACCOUNT" | "AWS_SERVICE";
export type PropertyValueType = "PLAIN_TEXT" | "STRINGIFIED_JSON";
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  ReservedElasticsearchInstanceOfferingId: string;
  ReservationName: string;
  InstanceCount?: number;
}
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  ReservedElasticsearchInstanceId?: string;
  ReservationName?: string;
}
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = Array<RecurringCharge>;
export type ReferencePath = string;

export type Region = string;

export interface RejectInboundCrossClusterSearchConnectionRequest {
  CrossClusterSearchConnectionId: string;
}
export interface RejectInboundCrossClusterSearchConnectionResponse {
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}
export interface RemoveTagsRequest {
  ARN: string;
  TagKeys: Array<string>;
}
export type ReservationToken = string;

export interface ReservedElasticsearchInstance {
  ReservationName?: string;
  ReservedElasticsearchInstanceId?: string;
  ReservedElasticsearchInstanceOfferingId?: string;
  ElasticsearchInstanceType?: ESPartitionInstanceType;
  StartTime?: Date | string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  ElasticsearchInstanceCount?: number;
  State?: string;
  PaymentOption?: ReservedElasticsearchInstancePaymentOption;
  RecurringCharges?: Array<RecurringCharge>;
}
export type ReservedElasticsearchInstanceList = Array<ReservedElasticsearchInstance>;
export interface ReservedElasticsearchInstanceOffering {
  ReservedElasticsearchInstanceOfferingId?: string;
  ElasticsearchInstanceType?: ESPartitionInstanceType;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  PaymentOption?: ReservedElasticsearchInstancePaymentOption;
  RecurringCharges?: Array<RecurringCharge>;
}
export type ReservedElasticsearchInstanceOfferingList = Array<ReservedElasticsearchInstanceOffering>;
export type ReservedElasticsearchInstancePaymentOption = "ALL_UPFRONT" | "PARTIAL_UPFRONT" | "NO_UPFRONT";
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RevokeVpcEndpointAccessRequest {
  DomainName: string;
  Account: string;
}
export interface RevokeVpcEndpointAccessResponse {
}
export type RoleArn = string;

export type RollbackOnDisable = "NO_ROLLBACK" | "DEFAULT_ROLLBACK";
export type S3BucketName = string;

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
export type ScheduledAutoTuneActionType = "JVM_HEAP_SIZE_TUNING" | "JVM_YOUNG_GEN_TUNING";
export type ScheduledAutoTuneDescription = string;

export interface ScheduledAutoTuneDetails {
  Date?: Date | string;
  ActionType?: ScheduledAutoTuneActionType;
  Action?: string;
  Severity?: ScheduledAutoTuneSeverityType;
}
export type ScheduledAutoTuneSeverityType = "LOW" | "MEDIUM" | "HIGH";
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

export interface SnapshotOptions {
  AutomatedSnapshotStartHour?: number;
}
export interface SnapshotOptionsStatus {
  Options: SnapshotOptions;
  Status: OptionStatus;
}
export type StartAt = Date | string;

export interface StartElasticsearchServiceSoftwareUpdateRequest {
  DomainName: string;
}
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
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

export type StringList = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export type TagValue = string;

export type TimeUnit = "HOURS";
export type TLSSecurityPolicy = "POLICY_MIN_TLS_1_0_2019_07" | "POLICY_MIN_TLS_1_2_2019_07" | "POLICY_MIN_TLS_1_2_PFS_2023_10";
export type TotalNumberOfStages = number;

export type UIntValue = number;

export interface UpdateElasticsearchDomainConfigRequest {
  DomainName: string;
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
  EBSOptions?: EBSOptions;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCOptions;
  CognitoOptions?: CognitoOptions;
  AdvancedOptions?: Record<string, string>;
  AccessPolicies?: string;
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;
  DomainEndpointOptions?: DomainEndpointOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  AutoTuneOptions?: AutoTuneOptions;
  DryRun?: boolean;
}
export interface UpdateElasticsearchDomainConfigResponse {
  DomainConfig: ElasticsearchDomainConfig;
  DryRunResults?: DryRunResults;
}
export interface UpdatePackageRequest {
  PackageID: string;
  PackageSource: PackageSource;
  PackageDescription?: string;
  CommitMessage?: string;
}
export interface UpdatePackageResponse {
  PackageDetails?: PackageDetails;
}
export type UpdateTimestamp = Date | string;

export interface UpdateVpcEndpointRequest {
  VpcEndpointId: string;
  VpcOptions: VPCOptions;
}
export interface UpdateVpcEndpointResponse {
  VpcEndpoint: VpcEndpoint;
}
export interface UpgradeElasticsearchDomainRequest {
  DomainName: string;
  TargetVersion: string;
  PerformCheckOnly?: boolean;
}
export interface UpgradeElasticsearchDomainResponse {
  DomainName?: string;
  TargetVersion?: string;
  PerformCheckOnly?: boolean;
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

export type UpgradeStatus = "IN_PROGRESS" | "SUCCEEDED" | "SUCCEEDED_WITH_ISSUES" | "FAILED";
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

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type ValueStringList = Array<string>;
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
export type VpcEndpointStatus = "CREATING" | "CREATE_FAILED" | "ACTIVE" | "UPDATING" | "UPDATE_FAILED" | "DELETING" | "DELETE_FAILED";
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
export interface ZoneAwarenessConfig {
  AvailabilityZoneCount?: number;
}
export declare namespace AcceptInboundCrossClusterSearchConnection {
  export type Input = AcceptInboundCrossClusterSearchConnectionRequest;
  export type Output = AcceptInboundCrossClusterSearchConnectionResponse;
  export type Error =
    | DisabledOperationException
    | LimitExceededException
    | ResourceNotFoundException
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

export declare namespace CancelElasticsearchServiceSoftwareUpdate {
  export type Input = CancelElasticsearchServiceSoftwareUpdateRequest;
  export type Output = CancelElasticsearchServiceSoftwareUpdateResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateElasticsearchDomain {
  export type Input = CreateElasticsearchDomainRequest;
  export type Output = CreateElasticsearchDomainResponse;
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

export declare namespace CreateOutboundCrossClusterSearchConnection {
  export type Input = CreateOutboundCrossClusterSearchConnectionRequest;
  export type Output = CreateOutboundCrossClusterSearchConnectionResponse;
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

export declare namespace DeleteElasticsearchDomain {
  export type Input = DeleteElasticsearchDomainRequest;
  export type Output = DeleteElasticsearchDomainResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteElasticsearchServiceRole {
  export type Input = {};
  export type Output = {};
  export type Error =
    | BaseException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInboundCrossClusterSearchConnection {
  export type Input = DeleteInboundCrossClusterSearchConnectionRequest;
  export type Output = DeleteInboundCrossClusterSearchConnectionResponse;
  export type Error =
    | DisabledOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteOutboundCrossClusterSearchConnection {
  export type Input = DeleteOutboundCrossClusterSearchConnectionRequest;
  export type Output = DeleteOutboundCrossClusterSearchConnectionResponse;
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

export declare namespace DescribeElasticsearchDomain {
  export type Input = DescribeElasticsearchDomainRequest;
  export type Output = DescribeElasticsearchDomainResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeElasticsearchDomainConfig {
  export type Input = DescribeElasticsearchDomainConfigRequest;
  export type Output = DescribeElasticsearchDomainConfigResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeElasticsearchDomains {
  export type Input = DescribeElasticsearchDomainsRequest;
  export type Output = DescribeElasticsearchDomainsResponse;
  export type Error =
    | BaseException
    | InternalException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeElasticsearchInstanceTypeLimits {
  export type Input = DescribeElasticsearchInstanceTypeLimitsRequest;
  export type Output = DescribeElasticsearchInstanceTypeLimitsResponse;
  export type Error =
    | BaseException
    | InternalException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInboundCrossClusterSearchConnections {
  export type Input = DescribeInboundCrossClusterSearchConnectionsRequest;
  export type Output = DescribeInboundCrossClusterSearchConnectionsResponse;
  export type Error =
    | DisabledOperationException
    | InvalidPaginationTokenException
    | CommonAwsError;
}

export declare namespace DescribeOutboundCrossClusterSearchConnections {
  export type Input = DescribeOutboundCrossClusterSearchConnectionsRequest;
  export type Output = DescribeOutboundCrossClusterSearchConnectionsResponse;
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

export declare namespace DescribeReservedElasticsearchInstanceOfferings {
  export type Input = DescribeReservedElasticsearchInstanceOfferingsRequest;
  export type Output = DescribeReservedElasticsearchInstanceOfferingsResponse;
  export type Error =
    | DisabledOperationException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeReservedElasticsearchInstances {
  export type Input = DescribeReservedElasticsearchInstancesRequest;
  export type Output = DescribeReservedElasticsearchInstancesResponse;
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

export declare namespace GetCompatibleElasticsearchVersions {
  export type Input = GetCompatibleElasticsearchVersionsRequest;
  export type Output = GetCompatibleElasticsearchVersionsResponse;
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

export declare namespace ListDomainNames {
  export type Input = ListDomainNamesRequest;
  export type Output = ListDomainNamesResponse;
  export type Error =
    | BaseException
    | ValidationException
    | CommonAwsError;
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

export declare namespace ListElasticsearchInstanceTypes {
  export type Input = ListElasticsearchInstanceTypesRequest;
  export type Output = ListElasticsearchInstanceTypesResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListElasticsearchVersions {
  export type Input = ListElasticsearchVersionsRequest;
  export type Output = ListElasticsearchVersionsResponse;
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

export declare namespace PurchaseReservedElasticsearchInstanceOffering {
  export type Input = PurchaseReservedElasticsearchInstanceOfferingRequest;
  export type Output = PurchaseReservedElasticsearchInstanceOfferingResponse;
  export type Error =
    | DisabledOperationException
    | InternalException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RejectInboundCrossClusterSearchConnection {
  export type Input = RejectInboundCrossClusterSearchConnectionRequest;
  export type Output = RejectInboundCrossClusterSearchConnectionResponse;
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

export declare namespace StartElasticsearchServiceSoftwareUpdate {
  export type Input = StartElasticsearchServiceSoftwareUpdateRequest;
  export type Output = StartElasticsearchServiceSoftwareUpdateResponse;
  export type Error =
    | BaseException
    | InternalException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateElasticsearchDomainConfig {
  export type Input = UpdateElasticsearchDomainConfigRequest;
  export type Output = UpdateElasticsearchDomainConfigResponse;
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

export declare namespace UpgradeElasticsearchDomain {
  export type Input = UpgradeElasticsearchDomainRequest;
  export type Output = UpgradeElasticsearchDomainResponse;
  export type Error =
    | BaseException
    | DisabledOperationException
    | InternalException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

