import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface WorkspacesService {
  acceptAccountLinkInvitation(
    input: AcceptAccountLinkInvitationRequest,
  ): Effect.Effect<
    AcceptAccountLinkInvitationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  associateConnectionAlias(
    input: AssociateConnectionAliasRequest,
  ): Effect.Effect<
    AssociateConnectionAliasResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateIpGroups(
    input: AssociateIpGroupsRequest,
  ): Effect.Effect<
    AssociateIpGroupsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateWorkspaceApplication(
    input: AssociateWorkspaceApplicationRequest,
  ): Effect.Effect<
    AssociateWorkspaceApplicationResult,
    | AccessDeniedException
    | ApplicationNotSupportedException
    | ComputeNotCompatibleException
    | IncompatibleApplicationsException
    | InvalidParameterValuesException
    | OperatingSystemNotCompatibleException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  authorizeIpRules(
    input: AuthorizeIpRulesRequest,
  ): Effect.Effect<
    AuthorizeIpRulesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  copyWorkspaceImage(
    input: CopyWorkspaceImageRequest,
  ): Effect.Effect<
    CopyWorkspaceImageResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError
  >;
  createAccountLinkInvitation(
    input: CreateAccountLinkInvitationRequest,
  ): Effect.Effect<
    CreateAccountLinkInvitationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  createConnectClientAddIn(
    input: CreateConnectClientAddInRequest,
  ): Effect.Effect<
    CreateConnectClientAddInResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAlreadyExistsException
    | ResourceCreationFailedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createConnectionAlias(
    input: CreateConnectionAliasRequest,
  ): Effect.Effect<
    CreateConnectionAliasResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  createIpGroup(
    input: CreateIpGroupRequest,
  ): Effect.Effect<
    CreateIpGroupResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAlreadyExistsException
    | ResourceCreationFailedException
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  createStandbyWorkspaces(
    input: CreateStandbyWorkspacesRequest,
  ): Effect.Effect<
    CreateStandbyWorkspacesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createTags(
    input: CreateTagsRequest,
  ): Effect.Effect<
    CreateTagsResult,
    | InvalidParameterValuesException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createUpdatedWorkspaceImage(
    input: CreateUpdatedWorkspaceImageRequest,
  ): Effect.Effect<
    CreateUpdatedWorkspaceImageResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createWorkspaceBundle(
    input: CreateWorkspaceBundleRequest,
  ): Effect.Effect<
    CreateWorkspaceBundleResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError
  >;
  createWorkspaceImage(
    input: CreateWorkspaceImageRequest,
  ): Effect.Effect<
    CreateWorkspaceImageResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createWorkspaces(
    input: CreateWorkspacesRequest,
  ): Effect.Effect<
    CreateWorkspacesResult,
    | InvalidParameterValuesException
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  createWorkspacesPool(
    input: CreateWorkspacesPoolRequest,
  ): Effect.Effect<
    CreateWorkspacesPoolResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteAccountLinkInvitation(
    input: DeleteAccountLinkInvitationRequest,
  ): Effect.Effect<
    DeleteAccountLinkInvitationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteClientBranding(
    input: DeleteClientBrandingRequest,
  ): Effect.Effect<
    DeleteClientBrandingResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteConnectClientAddIn(
    input: DeleteConnectClientAddInRequest,
  ): Effect.Effect<
    DeleteConnectClientAddInResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteConnectionAlias(
    input: DeleteConnectionAliasRequest,
  ): Effect.Effect<
    DeleteConnectionAliasResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteIpGroup(
    input: DeleteIpGroupRequest,
  ): Effect.Effect<
    DeleteIpGroupResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsRequest,
  ): Effect.Effect<
    DeleteTagsResult,
    InvalidParameterValuesException | ResourceNotFoundException | CommonAwsError
  >;
  deleteWorkspaceBundle(
    input: DeleteWorkspaceBundleRequest,
  ): Effect.Effect<
    DeleteWorkspaceBundleResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteWorkspaceImage(
    input: DeleteWorkspaceImageRequest,
  ): Effect.Effect<
    DeleteWorkspaceImageResult,
    | AccessDeniedException
    | InvalidResourceStateException
    | ResourceAssociatedException
    | CommonAwsError
  >;
  deployWorkspaceApplications(
    input: DeployWorkspaceApplicationsRequest,
  ): Effect.Effect<
    DeployWorkspaceApplicationsResult,
    | AccessDeniedException
    | IncompatibleApplicationsException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deregisterWorkspaceDirectory(
    input: DeregisterWorkspaceDirectoryRequest,
  ): Effect.Effect<
    DeregisterWorkspaceDirectoryResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeAccount(
    input: DescribeAccountRequest,
  ): Effect.Effect<
    DescribeAccountResult,
    AccessDeniedException | CommonAwsError
  >;
  describeAccountModifications(
    input: DescribeAccountModificationsRequest,
  ): Effect.Effect<
    DescribeAccountModificationsResult,
    AccessDeniedException | CommonAwsError
  >;
  describeApplicationAssociations(
    input: DescribeApplicationAssociationsRequest,
  ): Effect.Effect<
    DescribeApplicationAssociationsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeApplications(
    input: DescribeApplicationsRequest,
  ): Effect.Effect<
    DescribeApplicationsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeBundleAssociations(
    input: DescribeBundleAssociationsRequest,
  ): Effect.Effect<
    DescribeBundleAssociationsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeClientBranding(
    input: DescribeClientBrandingRequest,
  ): Effect.Effect<
    DescribeClientBrandingResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeClientProperties(
    input: DescribeClientPropertiesRequest,
  ): Effect.Effect<
    DescribeClientPropertiesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeConnectClientAddIns(
    input: DescribeConnectClientAddInsRequest,
  ): Effect.Effect<
    DescribeConnectClientAddInsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeConnectionAliases(
    input: DescribeConnectionAliasesRequest,
  ): Effect.Effect<
    DescribeConnectionAliasesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | CommonAwsError
  >;
  describeConnectionAliasPermissions(
    input: DescribeConnectionAliasPermissionsRequest,
  ): Effect.Effect<
    DescribeConnectionAliasPermissionsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeImageAssociations(
    input: DescribeImageAssociationsRequest,
  ): Effect.Effect<
    DescribeImageAssociationsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeIpGroups(
    input: DescribeIpGroupsRequest,
  ): Effect.Effect<
    DescribeIpGroupsResult,
    AccessDeniedException | InvalidParameterValuesException | CommonAwsError
  >;
  describeTags(
    input: DescribeTagsRequest,
  ): Effect.Effect<
    DescribeTagsResult,
    ResourceNotFoundException | CommonAwsError
  >;
  describeWorkspaceAssociations(
    input: DescribeWorkspaceAssociationsRequest,
  ): Effect.Effect<
    DescribeWorkspaceAssociationsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeWorkspaceBundles(
    input: DescribeWorkspaceBundlesRequest,
  ): Effect.Effect<
    DescribeWorkspaceBundlesResult,
    InvalidParameterValuesException | CommonAwsError
  >;
  describeWorkspaceDirectories(
    input: DescribeWorkspaceDirectoriesRequest,
  ): Effect.Effect<
    DescribeWorkspaceDirectoriesResult,
    InvalidParameterValuesException | CommonAwsError
  >;
  describeWorkspaceImagePermissions(
    input: DescribeWorkspaceImagePermissionsRequest,
  ): Effect.Effect<
    DescribeWorkspaceImagePermissionsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeWorkspaceImages(
    input: DescribeWorkspaceImagesRequest,
  ): Effect.Effect<
    DescribeWorkspaceImagesResult,
    AccessDeniedException | CommonAwsError
  >;
  describeWorkspaces(
    input: DescribeWorkspacesRequest,
  ): Effect.Effect<
    DescribeWorkspacesResult,
    | InvalidParameterValuesException
    | ResourceUnavailableException
    | CommonAwsError
  >;
  describeWorkspacesConnectionStatus(
    input: DescribeWorkspacesConnectionStatusRequest,
  ): Effect.Effect<
    DescribeWorkspacesConnectionStatusResult,
    InvalidParameterValuesException | CommonAwsError
  >;
  describeWorkspaceSnapshots(
    input: DescribeWorkspaceSnapshotsRequest,
  ): Effect.Effect<
    DescribeWorkspaceSnapshotsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeWorkspacesPools(
    input: DescribeWorkspacesPoolsRequest,
  ): Effect.Effect<
    DescribeWorkspacesPoolsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeWorkspacesPoolSessions(
    input: DescribeWorkspacesPoolSessionsRequest,
  ): Effect.Effect<
    DescribeWorkspacesPoolSessionsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateConnectionAlias(
    input: DisassociateConnectionAliasRequest,
  ): Effect.Effect<
    DisassociateConnectionAliasResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateIpGroups(
    input: DisassociateIpGroupsRequest,
  ): Effect.Effect<
    DisassociateIpGroupsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateWorkspaceApplication(
    input: DisassociateWorkspaceApplicationRequest,
  ): Effect.Effect<
    DisassociateWorkspaceApplicationResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getAccountLink(
    input: GetAccountLinkRequest,
  ): Effect.Effect<
    GetAccountLinkResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  importClientBranding(
    input: ImportClientBrandingRequest,
  ): Effect.Effect<
    ImportClientBrandingResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  importWorkspaceImage(
    input: ImportWorkspaceImageRequest,
  ): Effect.Effect<
    ImportWorkspaceImageResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAccountLinks(
    input: ListAccountLinksRequest,
  ): Effect.Effect<
    ListAccountLinksResult,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listAvailableManagementCidrRanges(
    input: ListAvailableManagementCidrRangesRequest,
  ): Effect.Effect<
    ListAvailableManagementCidrRangesResult,
    AccessDeniedException | InvalidParameterValuesException | CommonAwsError
  >;
  migrateWorkspace(
    input: MigrateWorkspaceRequest,
  ): Effect.Effect<
    MigrateWorkspaceResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError
  >;
  modifyAccount(
    input: ModifyAccountRequest,
  ): Effect.Effect<
    ModifyAccountResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError
  >;
  modifyCertificateBasedAuthProperties(
    input: ModifyCertificateBasedAuthPropertiesRequest,
  ): Effect.Effect<
    ModifyCertificateBasedAuthPropertiesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifyClientProperties(
    input: ModifyClientPropertiesRequest,
  ): Effect.Effect<
    ModifyClientPropertiesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifyEndpointEncryptionMode(
    input: ModifyEndpointEncryptionModeRequest,
  ): Effect.Effect<
    ModifyEndpointEncryptionModeResponse,
    | AccessDeniedException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifySamlProperties(
    input: ModifySamlPropertiesRequest,
  ): Effect.Effect<
    ModifySamlPropertiesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifySelfservicePermissions(
    input: ModifySelfservicePermissionsRequest,
  ): Effect.Effect<
    ModifySelfservicePermissionsResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifyStreamingProperties(
    input: ModifyStreamingPropertiesRequest,
  ): Effect.Effect<
    ModifyStreamingPropertiesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifyWorkspaceAccessProperties(
    input: ModifyWorkspaceAccessPropertiesRequest,
  ): Effect.Effect<
    ModifyWorkspaceAccessPropertiesResult,
    | AccessDeniedException
    | InvalidParameterCombinationException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifyWorkspaceCreationProperties(
    input: ModifyWorkspaceCreationPropertiesRequest,
  ): Effect.Effect<
    ModifyWorkspaceCreationPropertiesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  modifyWorkspaceProperties(
    input: ModifyWorkspacePropertiesRequest,
  ): Effect.Effect<
    ModifyWorkspacePropertiesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | UnsupportedWorkspaceConfigurationException
    | CommonAwsError
  >;
  modifyWorkspaceState(
    input: ModifyWorkspaceStateRequest,
  ): Effect.Effect<
    ModifyWorkspaceStateResult,
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  rebootWorkspaces(
    input: RebootWorkspacesRequest,
  ): Effect.Effect<
    RebootWorkspacesResult,
    OperationNotSupportedException | CommonAwsError
  >;
  rebuildWorkspaces(
    input: RebuildWorkspacesRequest,
  ): Effect.Effect<
    RebuildWorkspacesResult,
    OperationNotSupportedException | CommonAwsError
  >;
  registerWorkspaceDirectory(
    input: RegisterWorkspaceDirectoryRequest,
  ): Effect.Effect<
    RegisterWorkspaceDirectoryResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | UnsupportedNetworkConfigurationException
    | WorkspacesDefaultRoleNotFoundException
    | CommonAwsError
  >;
  rejectAccountLinkInvitation(
    input: RejectAccountLinkInvitationRequest,
  ): Effect.Effect<
    RejectAccountLinkInvitationResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  restoreWorkspace(
    input: RestoreWorkspaceRequest,
  ): Effect.Effect<
    RestoreWorkspaceResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  revokeIpRules(
    input: RevokeIpRulesRequest,
  ): Effect.Effect<
    RevokeIpRulesResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startWorkspaces(
    input: StartWorkspacesRequest,
  ): Effect.Effect<StartWorkspacesResult, CommonAwsError>;
  startWorkspacesPool(
    input: StartWorkspacesPoolRequest,
  ): Effect.Effect<
    StartWorkspacesPoolResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopWorkspaces(
    input: StopWorkspacesRequest,
  ): Effect.Effect<StopWorkspacesResult, CommonAwsError>;
  stopWorkspacesPool(
    input: StopWorkspacesPoolRequest,
  ): Effect.Effect<
    StopWorkspacesPoolResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  terminateWorkspaces(
    input: TerminateWorkspacesRequest,
  ): Effect.Effect<TerminateWorkspacesResult, CommonAwsError>;
  terminateWorkspacesPool(
    input: TerminateWorkspacesPoolRequest,
  ): Effect.Effect<
    TerminateWorkspacesPoolResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  terminateWorkspacesPoolSession(
    input: TerminateWorkspacesPoolSessionRequest,
  ): Effect.Effect<
    TerminateWorkspacesPoolSessionResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateConnectClientAddIn(
    input: UpdateConnectClientAddInRequest,
  ): Effect.Effect<
    UpdateConnectClientAddInResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateConnectionAliasPermission(
    input: UpdateConnectionAliasPermissionRequest,
  ): Effect.Effect<
    UpdateConnectionAliasPermissionResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAssociatedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateRulesOfIpGroup(
    input: UpdateRulesOfIpGroupRequest,
  ): Effect.Effect<
    UpdateRulesOfIpGroupResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateWorkspaceBundle(
    input: UpdateWorkspaceBundleRequest,
  ): Effect.Effect<
    UpdateWorkspaceBundleResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError
  >;
  updateWorkspaceImagePermission(
    input: UpdateWorkspaceImagePermissionRequest,
  ): Effect.Effect<
    UpdateWorkspaceImagePermissionResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError
  >;
  updateWorkspacesPool(
    input: UpdateWorkspacesPoolRequest,
  ): Effect.Effect<
    UpdateWorkspacesPoolResult,
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Workspaces = WorkspacesService;

export interface AcceptAccountLinkInvitationRequest {
  LinkId: string;
  ClientToken?: string;
}
export interface AcceptAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AccessEndpoint {
  AccessEndpointType?: AccessEndpointType;
  VpcEndpointId?: string;
}
export interface AccessEndpointConfig {
  AccessEndpoints: Array<AccessEndpoint>;
  InternetFallbackProtocols?: Array<InternetFallbackProtocol>;
}
export type AccessEndpointList = Array<AccessEndpoint>;
export type AccessEndpointType = "STREAMING_WSP";
export type AccessPropertyValue = "ALLOW" | "DENY";
export interface AccountLink {
  AccountLinkId?: string;
  AccountLinkStatus?: AccountLinkStatusEnum;
  SourceAccountId?: string;
  TargetAccountId?: string;
}
export type AccountLinkList = Array<AccountLink>;
export type AccountLinkStatusEnum =
  | "LINKED"
  | "LINKING_FAILED"
  | "LINK_NOT_FOUND"
  | "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT"
  | "REJECTED";
export interface AccountModification {
  ModificationState?: DedicatedTenancyModificationStateEnum;
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
  DedicatedTenancyManagementCidrRange?: string;
  StartTime?: Date | string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type AccountModificationList = Array<AccountModification>;
export interface ActiveDirectoryConfig {
  DomainName: string;
  ServiceAccountSecretArn: string;
}
export type ActiveUserSessions = number;

export type ActualUserSessions = number;

export type AddInName = string;

export type AddInUrl = string;

export type AGAModeForDirectoryEnum = "ENABLED_AUTO" | "DISABLED";
export type AGAModeForWorkSpaceEnum = "ENABLED_AUTO" | "DISABLED" | "INHERITED";
export type AGAPreferredProtocolForDirectory = "TCP" | "NONE";
export type AGAPreferredProtocolForWorkSpace = "TCP" | "NONE" | "INHERITED";
export type Alias = string;

export type AlphanumericDashUnderscoreNonEmptyString = string;

export type AmazonUuid = string;

export type Application = "Microsoft_Office_2016" | "Microsoft_Office_2019";
export type ApplicationAssociatedResourceType =
  | "WORKSPACE"
  | "BUNDLE"
  | "IMAGE";
export type ApplicationAssociatedResourceTypeList =
  Array<ApplicationAssociatedResourceType>;
export type ApplicationList = Array<Application>;
export declare class ApplicationNotSupportedException extends Data.TaggedError(
  "ApplicationNotSupportedException",
)<{}> {}
export interface ApplicationResourceAssociation {
  ApplicationId?: string;
  AssociatedResourceId?: string;
  AssociatedResourceType?: ApplicationAssociatedResourceType;
  Created?: Date | string;
  LastUpdatedTime?: Date | string;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
}
export type ApplicationResourceAssociationList =
  Array<ApplicationResourceAssociation>;
export interface ApplicationSettingsRequest {
  Status: ApplicationSettingsStatusEnum;
  SettingsGroup?: string;
}
export interface ApplicationSettingsResponse {
  Status: ApplicationSettingsStatusEnum;
  SettingsGroup?: string;
  S3BucketName?: string;
}
export type ApplicationSettingsStatusEnum = "DISABLED" | "ENABLED";
export type ARN = string;

export interface AssociateConnectionAliasRequest {
  AliasId: string;
  ResourceId: string;
}
export interface AssociateConnectionAliasResult {
  ConnectionIdentifier?: string;
}
export interface AssociateIpGroupsRequest {
  DirectoryId: string;
  GroupIds: Array<string>;
}
export interface AssociateIpGroupsResult {}
export interface AssociateWorkspaceApplicationRequest {
  WorkspaceId: string;
  ApplicationId: string;
}
export interface AssociateWorkspaceApplicationResult {
  Association?: WorkspaceResourceAssociation;
}
export type AssociationErrorCode =
  | "INSUFFICIENT_DISKSPACE"
  | "INSUFFICIENT_MEMORY"
  | "UNSUPPORTED_OPERATING_SYSTEM"
  | "INTERNAL_SERVER_ERROR"
  | "WORKSPACE_UNREACHABLE";
export type AssociationState =
  | "PENDING_INSTALL"
  | "PENDING_INSTALL_DEPLOYMENT"
  | "PENDING_UNINSTALL"
  | "PENDING_UNINSTALL_DEPLOYMENT"
  | "INSTALLING"
  | "UNINSTALLING"
  | "ERROR"
  | "COMPLETED"
  | "REMOVED";
export interface AssociationStateReason {
  ErrorCode?: AssociationErrorCode;
  ErrorMessage?: string;
}
export type AssociationStatus =
  | "NOT_ASSOCIATED"
  | "ASSOCIATED_WITH_OWNER_ACCOUNT"
  | "ASSOCIATED_WITH_SHARED_ACCOUNT"
  | "PENDING_ASSOCIATION"
  | "PENDING_DISASSOCIATION";
export type AuthenticationType = "SAML";
export interface AuthorizeIpRulesRequest {
  GroupId: string;
  UserRules: Array<IpRuleItem>;
}
export interface AuthorizeIpRulesResult {}
export type AvailableUserSessions = number;

export type AwsAccount = string;

export type BooleanObject = boolean;

export type BundleAssociatedResourceType = "APPLICATION";
export type BundleAssociatedResourceTypeList =
  Array<BundleAssociatedResourceType>;
export type BundleId = string;

export type BundleIdList = Array<string>;
export type BundleList = Array<WorkspaceBundle>;
export type BundleOwner = string;

export interface BundleResourceAssociation {
  AssociatedResourceId?: string;
  AssociatedResourceType?: BundleAssociatedResourceType;
  BundleId?: string;
  Created?: Date | string;
  LastUpdatedTime?: Date | string;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
}
export type BundleResourceAssociationList = Array<BundleResourceAssociation>;
export type BundleType = "REGULAR" | "STANDBY";
export interface Capacity {
  DesiredUserSessions: number;
}
export interface CapacityStatus {
  AvailableUserSessions: number;
  DesiredUserSessions: number;
  ActualUserSessions: number;
  ActiveUserSessions: number;
}
export type CertificateAuthorityArn = string;

export interface CertificateBasedAuthProperties {
  Status?: CertificateBasedAuthStatusEnum;
  CertificateAuthorityArn?: string;
}
export type CertificateBasedAuthStatusEnum = "DISABLED" | "ENABLED";
export type ClientDeviceType =
  | "DEVICE_TYPE_WINDOWS"
  | "DEVICE_TYPE_OSX"
  | "DEVICE_TYPE_ANDROID"
  | "DEVICE_TYPE_IOS"
  | "DEVICE_TYPE_LINUX"
  | "DEVICE_TYPE_WEB";
export type ClientDeviceTypeList = Array<ClientDeviceType>;
export type ClientEmail = string;

export type ClientLocale = string;

export type ClientLoginMessage = string;

export interface ClientProperties {
  ReconnectEnabled?: ReconnectEnum;
  LogUploadEnabled?: LogUploadEnum;
}
export type ClientPropertiesList = Array<ClientPropertiesResult>;
export interface ClientPropertiesResult {
  ResourceId?: string;
  ClientProperties?: ClientProperties;
}
export type ClientToken = string;

export type ClientUrl = string;

export type Compute =
  | "VALUE"
  | "STANDARD"
  | "PERFORMANCE"
  | "POWER"
  | "GRAPHICS"
  | "POWERPRO"
  | "GENERALPURPOSE_4XLARGE"
  | "GENERALPURPOSE_8XLARGE"
  | "GRAPHICSPRO"
  | "GRAPHICS_G4DN"
  | "GRAPHICSPRO_G4DN";
export type ComputeList = Array<Compute>;
export declare class ComputeNotCompatibleException extends Data.TaggedError(
  "ComputeNotCompatibleException",
)<{}> {}
export type ComputerName = string;

export interface ComputeType {
  Name?: Compute;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface ConnectClientAddIn {
  AddInId?: string;
  ResourceId?: string;
  Name?: string;
  URL?: string;
}
export type ConnectClientAddInList = Array<ConnectClientAddIn>;
export interface ConnectionAlias {
  ConnectionString?: string;
  AliasId?: string;
  State?: ConnectionAliasState;
  OwnerAccountId?: string;
  Associations?: Array<ConnectionAliasAssociation>;
}
export interface ConnectionAliasAssociation {
  AssociationStatus?: AssociationStatus;
  AssociatedAccountId?: string;
  ResourceId?: string;
  ConnectionIdentifier?: string;
}
export type ConnectionAliasAssociationList = Array<ConnectionAliasAssociation>;
export type ConnectionAliasId = string;

export type ConnectionAliasIdList = Array<string>;
export type ConnectionAliasList = Array<ConnectionAlias>;
export interface ConnectionAliasPermission {
  SharedAccountId: string;
  AllowAssociation: boolean;
}
export type ConnectionAliasPermissions = Array<ConnectionAliasPermission>;
export type ConnectionAliasState = "CREATING" | "CREATED" | "DELETING";
export type ConnectionIdentifier = string;

export type ConnectionState = "CONNECTED" | "DISCONNECTED" | "UNKNOWN";
export type ConnectionString = string;

export interface CopyWorkspaceImageRequest {
  Name: string;
  Description?: string;
  SourceImageId: string;
  SourceRegion: string;
  Tags?: Array<Tag>;
}
export interface CopyWorkspaceImageResult {
  ImageId?: string;
}
export interface CreateAccountLinkInvitationRequest {
  TargetAccountId: string;
  ClientToken?: string;
}
export interface CreateAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export interface CreateConnectClientAddInRequest {
  ResourceId: string;
  Name: string;
  URL: string;
}
export interface CreateConnectClientAddInResult {
  AddInId?: string;
}
export interface CreateConnectionAliasRequest {
  ConnectionString: string;
  Tags?: Array<Tag>;
}
export interface CreateConnectionAliasResult {
  AliasId?: string;
}
export interface CreateIpGroupRequest {
  GroupName: string;
  GroupDesc?: string;
  UserRules?: Array<IpRuleItem>;
  Tags?: Array<Tag>;
}
export interface CreateIpGroupResult {
  GroupId?: string;
}
export interface CreateStandbyWorkspacesRequest {
  PrimaryRegion: string;
  StandbyWorkspaces: Array<StandbyWorkspace>;
}
export interface CreateStandbyWorkspacesResult {
  FailedStandbyRequests?: Array<FailedCreateStandbyWorkspacesRequest>;
  PendingStandbyRequests?: Array<PendingCreateStandbyWorkspacesRequest>;
}
export interface CreateTagsRequest {
  ResourceId: string;
  Tags: Array<Tag>;
}
export interface CreateTagsResult {}
export interface CreateUpdatedWorkspaceImageRequest {
  Name: string;
  Description: string;
  SourceImageId: string;
  Tags?: Array<Tag>;
}
export interface CreateUpdatedWorkspaceImageResult {
  ImageId?: string;
}
export interface CreateWorkspaceBundleRequest {
  BundleName: string;
  BundleDescription: string;
  ImageId: string;
  ComputeType: ComputeType;
  UserStorage: UserStorage;
  RootStorage?: RootStorage;
  Tags?: Array<Tag>;
}
export interface CreateWorkspaceBundleResult {
  WorkspaceBundle?: WorkspaceBundle;
}
export interface CreateWorkspaceImageRequest {
  Name: string;
  Description: string;
  WorkspaceId: string;
  Tags?: Array<Tag>;
}
export interface CreateWorkspaceImageResult {
  ImageId?: string;
  Name?: string;
  Description?: string;
  OperatingSystem?: OperatingSystem;
  State?: WorkspaceImageState;
  RequiredTenancy?: WorkspaceImageRequiredTenancy;
  Created?: Date | string;
  OwnerAccountId?: string;
}
export interface CreateWorkspacesPoolRequest {
  PoolName: string;
  Description: string;
  BundleId: string;
  DirectoryId: string;
  Capacity: Capacity;
  Tags?: Array<Tag>;
  ApplicationSettings?: ApplicationSettingsRequest;
  TimeoutSettings?: TimeoutSettings;
  RunningMode?: PoolsRunningMode;
}
export interface CreateWorkspacesPoolResult {
  WorkspacesPool?: WorkspacesPool;
}
export interface CreateWorkspacesRequest {
  Workspaces: Array<WorkspaceRequest>;
}
export interface CreateWorkspacesResult {
  FailedRequests?: Array<FailedCreateWorkspaceRequest>;
  PendingRequests?: Array<Workspace>;
}
export type DataReplication = "NO_REPLICATION" | "PRIMARY_AS_SOURCE";
export interface DataReplicationSettings {
  DataReplication?: DataReplication;
  RecoverySnapshotTime?: Date | string;
}
export type DedicatedTenancyAccountType = "SOURCE_ACCOUNT" | "TARGET_ACCOUNT";
export type DedicatedTenancyCidrRangeList = Array<string>;
export type DedicatedTenancyManagementCidrRange = string;

export type DedicatedTenancyModificationStateEnum =
  | "PENDING"
  | "COMPLETED"
  | "FAILED";
export type DedicatedTenancySupportEnum = "ENABLED";
export type DedicatedTenancySupportResultEnum = "ENABLED" | "DISABLED";
export interface DefaultClientBrandingAttributes {
  LogoUrl?: string;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: Record<string, string>;
}
export interface DefaultImportClientBrandingAttributes {
  Logo?: Uint8Array | string;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: Record<string, string>;
}
export type DefaultLogo = Uint8Array | string;

export type DefaultOu = string;

export interface DefaultWorkspaceCreationProperties {
  EnableInternetAccess?: boolean;
  DefaultOu?: string;
  CustomSecurityGroupId?: string;
  UserEnabledAsLocalAdministrator?: boolean;
  EnableMaintenanceMode?: boolean;
  InstanceIamRoleArn?: string;
}
export type DeletableCertificateBasedAuthPropertiesList =
  Array<DeletableCertificateBasedAuthProperty>;
export type DeletableCertificateBasedAuthProperty =
  "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN";
export type DeletableSamlPropertiesList = Array<DeletableSamlProperty>;
export type DeletableSamlProperty =
  | "SAML_PROPERTIES_USER_ACCESS_URL"
  | "SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME";
export interface DeleteAccountLinkInvitationRequest {
  LinkId: string;
  ClientToken?: string;
}
export interface DeleteAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export interface DeleteClientBrandingRequest {
  ResourceId: string;
  Platforms: Array<ClientDeviceType>;
}
export interface DeleteClientBrandingResult {}
export interface DeleteConnectClientAddInRequest {
  AddInId: string;
  ResourceId: string;
}
export interface DeleteConnectClientAddInResult {}
export interface DeleteConnectionAliasRequest {
  AliasId: string;
}
export interface DeleteConnectionAliasResult {}
export interface DeleteIpGroupRequest {
  GroupId: string;
}
export interface DeleteIpGroupResult {}
export interface DeleteTagsRequest {
  ResourceId: string;
  TagKeys: Array<string>;
}
export interface DeleteTagsResult {}
export interface DeleteWorkspaceBundleRequest {
  BundleId?: string;
}
export interface DeleteWorkspaceBundleResult {}
export interface DeleteWorkspaceImageRequest {
  ImageId: string;
}
export interface DeleteWorkspaceImageResult {}
export interface DeployWorkspaceApplicationsRequest {
  WorkspaceId: string;
  Force?: boolean;
}
export interface DeployWorkspaceApplicationsResult {
  Deployment?: WorkSpaceApplicationDeployment;
}
export interface DeregisterWorkspaceDirectoryRequest {
  DirectoryId: string;
}
export interface DeregisterWorkspaceDirectoryResult {}
export interface DescribeAccountModificationsRequest {
  NextToken?: string;
}
export interface DescribeAccountModificationsResult {
  AccountModifications?: Array<AccountModification>;
  NextToken?: string;
}
export interface DescribeAccountRequest {}
export interface DescribeAccountResult {
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
  DedicatedTenancyManagementCidrRange?: string;
  DedicatedTenancyAccountType?: DedicatedTenancyAccountType;
}
export interface DescribeApplicationAssociationsRequest {
  MaxResults?: number;
  NextToken?: string;
  ApplicationId: string;
  AssociatedResourceTypes: Array<ApplicationAssociatedResourceType>;
}
export interface DescribeApplicationAssociationsResult {
  Associations?: Array<ApplicationResourceAssociation>;
  NextToken?: string;
}
export interface DescribeApplicationsRequest {
  ApplicationIds?: Array<string>;
  ComputeTypeNames?: Array<Compute>;
  LicenseType?: WorkSpaceApplicationLicenseType;
  OperatingSystemNames?: Array<OperatingSystemName>;
  Owner?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeApplicationsResult {
  Applications?: Array<WorkSpaceApplication>;
  NextToken?: string;
}
export interface DescribeBundleAssociationsRequest {
  BundleId: string;
  AssociatedResourceTypes: Array<BundleAssociatedResourceType>;
}
export interface DescribeBundleAssociationsResult {
  Associations?: Array<BundleResourceAssociation>;
}
export interface DescribeClientBrandingRequest {
  ResourceId: string;
}
export interface DescribeClientBrandingResult {
  DeviceTypeWindows?: DefaultClientBrandingAttributes;
  DeviceTypeOsx?: DefaultClientBrandingAttributes;
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;
  DeviceTypeIos?: IosClientBrandingAttributes;
  DeviceTypeLinux?: DefaultClientBrandingAttributes;
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}
export interface DescribeClientPropertiesRequest {
  ResourceIds: Array<string>;
}
export interface DescribeClientPropertiesResult {
  ClientPropertiesList?: Array<ClientPropertiesResult>;
}
export interface DescribeConnectClientAddInsRequest {
  ResourceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeConnectClientAddInsResult {
  AddIns?: Array<ConnectClientAddIn>;
  NextToken?: string;
}
export interface DescribeConnectionAliasesRequest {
  AliasIds?: Array<string>;
  ResourceId?: string;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeConnectionAliasesResult {
  ConnectionAliases?: Array<ConnectionAlias>;
  NextToken?: string;
}
export interface DescribeConnectionAliasPermissionsRequest {
  AliasId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeConnectionAliasPermissionsResult {
  AliasId?: string;
  ConnectionAliasPermissions?: Array<ConnectionAliasPermission>;
  NextToken?: string;
}
export interface DescribeImageAssociationsRequest {
  ImageId: string;
  AssociatedResourceTypes: Array<ImageAssociatedResourceType>;
}
export interface DescribeImageAssociationsResult {
  Associations?: Array<ImageResourceAssociation>;
}
export interface DescribeIpGroupsRequest {
  GroupIds?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeIpGroupsResult {
  Result?: Array<WorkspacesIpGroup>;
  NextToken?: string;
}
export interface DescribeTagsRequest {
  ResourceId: string;
}
export interface DescribeTagsResult {
  TagList?: Array<Tag>;
}
export interface DescribeWorkspaceAssociationsRequest {
  WorkspaceId: string;
  AssociatedResourceTypes: Array<WorkSpaceAssociatedResourceType>;
}
export interface DescribeWorkspaceAssociationsResult {
  Associations?: Array<WorkspaceResourceAssociation>;
}
export interface DescribeWorkspaceBundlesRequest {
  BundleIds?: Array<string>;
  Owner?: string;
  NextToken?: string;
}
export interface DescribeWorkspaceBundlesResult {
  Bundles?: Array<WorkspaceBundle>;
  NextToken?: string;
}
export interface DescribeWorkspaceDirectoriesFilter {
  Name: DescribeWorkspaceDirectoriesFilterName;
  Values: Array<string>;
}
export type DescribeWorkspaceDirectoriesFilterList =
  Array<DescribeWorkspaceDirectoriesFilter>;
export type DescribeWorkspaceDirectoriesFilterName =
  | "USER_IDENTITY_TYPE"
  | "WORKSPACE_TYPE";
export type DescribeWorkspaceDirectoriesFilterValue = string;

export type DescribeWorkspaceDirectoriesFilterValues = Array<string>;
export interface DescribeWorkspaceDirectoriesRequest {
  DirectoryIds?: Array<string>;
  WorkspaceDirectoryNames?: Array<string>;
  Limit?: number;
  NextToken?: string;
  Filters?: Array<DescribeWorkspaceDirectoriesFilter>;
}
export interface DescribeWorkspaceDirectoriesResult {
  Directories?: Array<WorkspaceDirectory>;
  NextToken?: string;
}
export interface DescribeWorkspaceImagePermissionsRequest {
  ImageId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeWorkspaceImagePermissionsResult {
  ImageId?: string;
  ImagePermissions?: Array<ImagePermission>;
  NextToken?: string;
}
export interface DescribeWorkspaceImagesRequest {
  ImageIds?: Array<string>;
  ImageType?: ImageType;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeWorkspaceImagesResult {
  Images?: Array<WorkspaceImage>;
  NextToken?: string;
}
export interface DescribeWorkspacesConnectionStatusRequest {
  WorkspaceIds?: Array<string>;
  NextToken?: string;
}
export interface DescribeWorkspacesConnectionStatusResult {
  WorkspacesConnectionStatus?: Array<WorkspaceConnectionStatus>;
  NextToken?: string;
}
export interface DescribeWorkspaceSnapshotsRequest {
  WorkspaceId: string;
}
export interface DescribeWorkspaceSnapshotsResult {
  RebuildSnapshots?: Array<Snapshot>;
  RestoreSnapshots?: Array<Snapshot>;
}
export interface DescribeWorkspacesPoolSessionsRequest {
  PoolId: string;
  UserId?: string;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeWorkspacesPoolSessionsResult {
  Sessions?: Array<WorkspacesPoolSession>;
  NextToken?: string;
}
export interface DescribeWorkspacesPoolsFilter {
  Name: DescribeWorkspacesPoolsFilterName;
  Values: Array<string>;
  Operator: DescribeWorkspacesPoolsFilterOperator;
}
export type DescribeWorkspacesPoolsFilterName = "POOLNAME";
export type DescribeWorkspacesPoolsFilterOperator =
  | "EQUALS"
  | "NOTEQUALS"
  | "CONTAINS"
  | "NOTCONTAINS";
export type DescribeWorkspacesPoolsFilters =
  Array<DescribeWorkspacesPoolsFilter>;
export type DescribeWorkspacesPoolsFilterValue = string;

export type DescribeWorkspacesPoolsFilterValues = Array<string>;
export interface DescribeWorkspacesPoolsRequest {
  PoolIds?: Array<string>;
  Filters?: Array<DescribeWorkspacesPoolsFilter>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeWorkspacesPoolsResult {
  WorkspacesPools?: Array<WorkspacesPool>;
  NextToken?: string;
}
export interface DescribeWorkspacesRequest {
  WorkspaceIds?: Array<string>;
  DirectoryId?: string;
  UserName?: string;
  BundleId?: string;
  Limit?: number;
  NextToken?: string;
  WorkspaceName?: string;
}
export interface DescribeWorkspacesResult {
  Workspaces?: Array<Workspace>;
  NextToken?: string;
}
export type Description = string;

export type DesiredUserSessions = number;

export type DirectoryId = string;

export type DirectoryIdList = Array<string>;
export type DirectoryList = Array<WorkspaceDirectory>;
export type DirectoryName = string;

export interface DisassociateConnectionAliasRequest {
  AliasId: string;
}
export interface DisassociateConnectionAliasResult {}
export interface DisassociateIpGroupsRequest {
  DirectoryId: string;
  GroupIds: Array<string>;
}
export interface DisassociateIpGroupsResult {}
export interface DisassociateWorkspaceApplicationRequest {
  WorkspaceId: string;
  ApplicationId: string;
}
export interface DisassociateWorkspaceApplicationResult {
  Association?: WorkspaceResourceAssociation;
}
export type DisconnectTimeoutInSeconds = number;

export type DnsIpAddresses = Array<string>;
export type DomainName = string;

export type Ec2ImageId = string;

export type EndpointEncryptionMode = "STANDARD_TLS" | "FIPS_VALIDATED";
export interface ErrorDetails {
  ErrorCode?: WorkspaceImageErrorDetailCode;
  ErrorMessage?: string;
}
export type ErrorDetailsList = Array<ErrorDetails>;
export type ErrorMessage = string;

export type ErrorType = string;

export type ExceptionErrorCode = string;

export type ExceptionMessage = string;

export interface FailedCreateStandbyWorkspacesRequest {
  StandbyWorkspaceRequest?: StandbyWorkspace;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type FailedCreateStandbyWorkspacesRequestList =
  Array<FailedCreateStandbyWorkspacesRequest>;
export interface FailedCreateWorkspaceRequest {
  WorkspaceRequest?: WorkspaceRequest;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type FailedCreateWorkspaceRequests = Array<FailedCreateWorkspaceRequest>;
export type FailedRebootWorkspaceRequests = Array<FailedWorkspaceChangeRequest>;
export type FailedRebuildWorkspaceRequests =
  Array<FailedWorkspaceChangeRequest>;
export type FailedStartWorkspaceRequests = Array<FailedWorkspaceChangeRequest>;
export type FailedStopWorkspaceRequests = Array<FailedWorkspaceChangeRequest>;
export type FailedTerminateWorkspaceRequests =
  Array<FailedWorkspaceChangeRequest>;
export interface FailedWorkspaceChangeRequest {
  WorkspaceId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface GetAccountLinkRequest {
  LinkId?: string;
  LinkedAccountId?: string;
}
export interface GetAccountLinkResult {
  AccountLink?: AccountLink;
}
export interface GlobalAcceleratorForDirectory {
  Mode: AGAModeForDirectoryEnum;
  PreferredProtocol?: AGAPreferredProtocolForDirectory;
}
export interface GlobalAcceleratorForWorkSpace {
  Mode: AGAModeForWorkSpaceEnum;
  PreferredProtocol?: AGAPreferredProtocolForWorkSpace;
}
export interface IDCConfig {
  InstanceArn?: string;
  ApplicationArn?: string;
}
export type IdleDisconnectTimeoutInSeconds = number;

export type ImageAssociatedResourceType = "APPLICATION";
export type ImageAssociatedResourceTypeList =
  Array<ImageAssociatedResourceType>;
export interface ImagePermission {
  SharedAccountId?: string;
}
export type ImagePermissions = Array<ImagePermission>;
export interface ImageResourceAssociation {
  AssociatedResourceId?: string;
  AssociatedResourceType?: ImageAssociatedResourceType;
  Created?: Date | string;
  LastUpdatedTime?: Date | string;
  ImageId?: string;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
}
export type ImageResourceAssociationList = Array<ImageResourceAssociation>;
export type ImageType = "OWNED" | "SHARED";
export interface ImportClientBrandingRequest {
  ResourceId: string;
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes;
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes;
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes;
  DeviceTypeIos?: IosImportClientBrandingAttributes;
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes;
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes;
}
export interface ImportClientBrandingResult {
  DeviceTypeWindows?: DefaultClientBrandingAttributes;
  DeviceTypeOsx?: DefaultClientBrandingAttributes;
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;
  DeviceTypeIos?: IosClientBrandingAttributes;
  DeviceTypeLinux?: DefaultClientBrandingAttributes;
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}
export interface ImportWorkspaceImageRequest {
  Ec2ImageId: string;
  IngestionProcess: WorkspaceImageIngestionProcess;
  ImageName: string;
  ImageDescription: string;
  Tags?: Array<Tag>;
  Applications?: Array<Application>;
}
export interface ImportWorkspaceImageResult {
  ImageId?: string;
}
export declare class IncompatibleApplicationsException extends Data.TaggedError(
  "IncompatibleApplicationsException",
)<{}> {}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type InternetFallbackProtocol = "PCOIP";
export type InternetFallbackProtocolList = Array<InternetFallbackProtocol>;
export declare class InvalidParameterCombinationException extends Data.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterValuesException extends Data.TaggedError(
  "InvalidParameterValuesException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidResourceStateException extends Data.TaggedError(
  "InvalidResourceStateException",
)<{
  readonly message?: string;
}> {}
export type Ios2XLogo = Uint8Array | string;

export type Ios3XLogo = Uint8Array | string;

export interface IosClientBrandingAttributes {
  LogoUrl?: string;
  Logo2xUrl?: string;
  Logo3xUrl?: string;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: Record<string, string>;
}
export interface IosImportClientBrandingAttributes {
  Logo?: Uint8Array | string;
  Logo2x?: Uint8Array | string;
  Logo3x?: Uint8Array | string;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: Record<string, string>;
}
export type IosLogo = Uint8Array | string;

export type IpAddress = string;

export type IpGroupDesc = string;

export type IpGroupId = string;

export type IpGroupIdList = Array<string>;
export type IpGroupName = string;

export type IpRevokedRuleList = Array<string>;
export type IpRule = string;

export type IpRuleDesc = string;

export interface IpRuleItem {
  ipRule?: string;
  ruleDesc?: string;
}
export type IpRuleList = Array<IpRuleItem>;
export type Limit = number;

export type Limit50 = number;

export type LinkId = string;

export type LinkStatusFilterList = Array<AccountLinkStatusEnum>;
export interface ListAccountLinksRequest {
  LinkStatusFilter?: Array<AccountLinkStatusEnum>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccountLinksResult {
  AccountLinks?: Array<AccountLink>;
  NextToken?: string;
}
export interface ListAvailableManagementCidrRangesRequest {
  ManagementCidrRangeConstraint: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAvailableManagementCidrRangesResult {
  ManagementCidrRanges?: Array<string>;
  NextToken?: string;
}
export type LoginMessage = Record<string, string>;
export type LogUploadEnum = "ENABLED" | "DISABLED";
export type ManagementCidrRangeConstraint = string;

export type ManagementCidrRangeMaxResults = number;

export type MaximumLength = number;

export type MaxUserDurationInSeconds = number;

export interface MicrosoftEntraConfig {
  TenantId?: string;
  ApplicationConfigSecretArn?: string;
}
export type MicrosoftEntraConfigTenantId = string;

export interface MigrateWorkspaceRequest {
  SourceWorkspaceId: string;
  BundleId: string;
}
export interface MigrateWorkspaceResult {
  SourceWorkspaceId?: string;
  TargetWorkspaceId?: string;
}
export type ModificationResourceEnum =
  | "ROOT_VOLUME"
  | "USER_VOLUME"
  | "COMPUTE_TYPE";
export interface ModificationState {
  Resource?: ModificationResourceEnum;
  State?: ModificationStateEnum;
}
export type ModificationStateEnum = "UPDATE_INITIATED" | "UPDATE_IN_PROGRESS";
export type ModificationStateList = Array<ModificationState>;
export interface ModifyAccountRequest {
  DedicatedTenancySupport?: DedicatedTenancySupportEnum;
  DedicatedTenancyManagementCidrRange?: string;
}
export interface ModifyAccountResult {}
export interface ModifyCertificateBasedAuthPropertiesRequest {
  ResourceId: string;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
  PropertiesToDelete?: Array<DeletableCertificateBasedAuthProperty>;
}
export interface ModifyCertificateBasedAuthPropertiesResult {}
export interface ModifyClientPropertiesRequest {
  ResourceId: string;
  ClientProperties: ClientProperties;
}
export interface ModifyClientPropertiesResult {}
export interface ModifyEndpointEncryptionModeRequest {
  DirectoryId: string;
  EndpointEncryptionMode: EndpointEncryptionMode;
}
export interface ModifyEndpointEncryptionModeResponse {}
export interface ModifySamlPropertiesRequest {
  ResourceId: string;
  SamlProperties?: SamlProperties;
  PropertiesToDelete?: Array<DeletableSamlProperty>;
}
export interface ModifySamlPropertiesResult {}
export interface ModifySelfservicePermissionsRequest {
  ResourceId: string;
  SelfservicePermissions: SelfservicePermissions;
}
export interface ModifySelfservicePermissionsResult {}
export interface ModifyStreamingPropertiesRequest {
  ResourceId: string;
  StreamingProperties?: StreamingProperties;
}
export interface ModifyStreamingPropertiesResult {}
export interface ModifyWorkspaceAccessPropertiesRequest {
  ResourceId: string;
  WorkspaceAccessProperties: WorkspaceAccessProperties;
}
export interface ModifyWorkspaceAccessPropertiesResult {}
export interface ModifyWorkspaceCreationPropertiesRequest {
  ResourceId: string;
  WorkspaceCreationProperties: WorkspaceCreationProperties;
}
export interface ModifyWorkspaceCreationPropertiesResult {}
export interface ModifyWorkspacePropertiesRequest {
  WorkspaceId: string;
  WorkspaceProperties?: WorkspaceProperties;
  DataReplication?: DataReplication;
}
export interface ModifyWorkspacePropertiesResult {}
export interface ModifyWorkspaceStateRequest {
  WorkspaceId: string;
  WorkspaceState: TargetWorkspaceState;
}
export interface ModifyWorkspaceStateResult {}
export interface NetworkAccessConfiguration {
  EniPrivateIpAddress?: string;
  EniId?: string;
}
export type NonEmptyString = string;

export interface OperatingSystem {
  Type?: OperatingSystemType;
}
export type OperatingSystemName =
  | "AMAZON_LINUX_2"
  | "UBUNTU_18_04"
  | "UBUNTU_20_04"
  | "UBUNTU_22_04"
  | "UNKNOWN"
  | "WINDOWS_10"
  | "WINDOWS_11"
  | "WINDOWS_7"
  | "WINDOWS_SERVER_2016"
  | "WINDOWS_SERVER_2019"
  | "WINDOWS_SERVER_2022"
  | "RHEL_8"
  | "ROCKY_8";
export type OperatingSystemNameList = Array<OperatingSystemName>;
export declare class OperatingSystemNotCompatibleException extends Data.TaggedError(
  "OperatingSystemNotCompatibleException",
)<{}> {}
export type OperatingSystemType = "WINDOWS" | "LINUX";
export declare class OperationInProgressException extends Data.TaggedError(
  "OperationInProgressException",
)<{
  readonly message?: string;
}> {}
export declare class OperationNotSupportedException extends Data.TaggedError(
  "OperationNotSupportedException",
)<{
  readonly message?: string;
  readonly reason?: string;
}> {}
export type PaginationToken = string;

export interface PendingCreateStandbyWorkspacesRequest {
  UserName?: string;
  DirectoryId?: string;
  State?: WorkspaceState;
  WorkspaceId?: string;
}
export type PendingCreateStandbyWorkspacesRequestList =
  Array<PendingCreateStandbyWorkspacesRequest>;
export type PoolsRunningMode = "AUTO_STOP" | "ALWAYS_ON";
export type Protocol = "PCOIP" | "WSP";
export type ProtocolList = Array<Protocol>;
export interface RebootRequest {
  WorkspaceId: string;
}
export type RebootWorkspaceRequests = Array<RebootRequest>;
export interface RebootWorkspacesRequest {
  RebootWorkspaceRequests: Array<RebootRequest>;
}
export interface RebootWorkspacesResult {
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export interface RebuildRequest {
  WorkspaceId: string;
}
export type RebuildWorkspaceRequests = Array<RebuildRequest>;
export interface RebuildWorkspacesRequest {
  RebuildWorkspaceRequests: Array<RebuildRequest>;
}
export interface RebuildWorkspacesResult {
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export type ReconnectEnum = "ENABLED" | "DISABLED";
export type Region = string;

export interface RegisterWorkspaceDirectoryRequest {
  DirectoryId?: string;
  SubnetIds?: Array<string>;
  EnableSelfService?: boolean;
  Tenancy?: Tenancy;
  Tags?: Array<Tag>;
  WorkspaceDirectoryName?: string;
  WorkspaceDirectoryDescription?: string;
  UserIdentityType?: UserIdentityType;
  IdcInstanceArn?: string;
  MicrosoftEntraConfig?: MicrosoftEntraConfig;
  WorkspaceType?: WorkspaceType;
  ActiveDirectoryConfig?: ActiveDirectoryConfig;
}
export interface RegisterWorkspaceDirectoryResult {
  DirectoryId?: string;
  State?: WorkspaceDirectoryState;
}
export type RegistrationCode = string;

export interface RejectAccountLinkInvitationRequest {
  LinkId: string;
  ClientToken?: string;
}
export interface RejectAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export interface RelatedWorkspaceProperties {
  WorkspaceId?: string;
  Region?: string;
  State?: WorkspaceState;
  Type?: StandbyWorkspaceRelationshipType;
}
export type RelatedWorkspaces = Array<RelatedWorkspaceProperties>;
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceAssociatedException extends Data.TaggedError(
  "ResourceAssociatedException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceCreationFailedException extends Data.TaggedError(
  "ResourceCreationFailedException",
)<{
  readonly message?: string;
}> {}
export type ResourceIdList = Array<string>;
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly message?: string;
  readonly ResourceId?: string;
}> {}
export declare class ResourceLimitExceededException extends Data.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly ResourceId?: string;
}> {}
export declare class ResourceUnavailableException extends Data.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly message?: string;
  readonly ResourceId?: string;
}> {}
export interface RestoreWorkspaceRequest {
  WorkspaceId: string;
}
export interface RestoreWorkspaceResult {}
export interface RevokeIpRulesRequest {
  GroupId: string;
  UserRules: Array<string>;
}
export interface RevokeIpRulesResult {}
export interface RootStorage {
  Capacity: string;
}
export type RootVolumeSizeGib = number;

export type RunningMode = "AUTO_STOP" | "ALWAYS_ON" | "MANUAL";
export type RunningModeAutoStopTimeoutInMinutes = number;

export type S3BucketName = string;

export interface SamlProperties {
  Status?: SamlStatusEnum;
  UserAccessUrl?: string;
  RelayStateParameterName?: string;
}
export type SamlStatusEnum =
  | "DISABLED"
  | "ENABLED"
  | "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK";
export type SamlUserAccessUrl = string;

export type SecretsManagerArn = string;

export type SecurityGroupId = string;

export interface SelfservicePermissions {
  RestartWorkspace?: ReconnectEnum;
  IncreaseVolumeSize?: ReconnectEnum;
  ChangeComputeType?: ReconnectEnum;
  SwitchRunningMode?: ReconnectEnum;
  RebuildWorkspace?: ReconnectEnum;
}
export type SessionConnectionState = "CONNECTED" | "NOT_CONNECTED";
export type SessionInstanceId = string;

export type SettingsGroup = string;

export interface Snapshot {
  SnapshotTime?: Date | string;
}
export type SnapshotList = Array<Snapshot>;
export interface StandbyWorkspace {
  PrimaryWorkspaceId: string;
  VolumeEncryptionKey?: string;
  DirectoryId: string;
  Tags?: Array<Tag>;
  DataReplication?: DataReplication;
}
export type StandbyWorkspaceRelationshipType = "PRIMARY" | "STANDBY";
export type StandbyWorkspacesList = Array<StandbyWorkspace>;
export interface StandbyWorkspacesProperties {
  StandbyWorkspaceId?: string;
  DataReplication?: DataReplication;
  RecoverySnapshotTime?: Date | string;
}
export type StandbyWorkspacesPropertiesList =
  Array<StandbyWorkspacesProperties>;
export interface StartRequest {
  WorkspaceId?: string;
}
export type StartWorkspaceRequests = Array<StartRequest>;
export interface StartWorkspacesPoolRequest {
  PoolId: string;
}
export interface StartWorkspacesPoolResult {}
export interface StartWorkspacesRequest {
  StartWorkspaceRequests: Array<StartRequest>;
}
export interface StartWorkspacesResult {
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export interface StopRequest {
  WorkspaceId?: string;
}
export type StopWorkspaceRequests = Array<StopRequest>;
export interface StopWorkspacesPoolRequest {
  PoolId: string;
}
export interface StopWorkspacesPoolResult {}
export interface StopWorkspacesRequest {
  StopWorkspaceRequests: Array<StopRequest>;
}
export interface StopWorkspacesResult {
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export interface StorageConnector {
  ConnectorType: StorageConnectorTypeEnum;
  Status: StorageConnectorStatusEnum;
}
export type StorageConnectors = Array<StorageConnector>;
export type StorageConnectorStatusEnum = "ENABLED" | "DISABLED";
export type StorageConnectorTypeEnum = "HOME_FOLDER";
export type StreamingExperiencePreferredProtocolEnum = "TCP" | "UDP";
export interface StreamingProperties {
  StreamingExperiencePreferredProtocol?: StreamingExperiencePreferredProtocolEnum;
  UserSettings?: Array<UserSetting>;
  StorageConnectors?: Array<StorageConnector>;
  GlobalAccelerator?: GlobalAcceleratorForDirectory;
}
export type String2048 = string;

export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagValue = string;

export type TargetWorkspaceState = "AVAILABLE" | "ADMIN_MAINTENANCE";
export type Tenancy = "DEDICATED" | "SHARED";
export interface TerminateRequest {
  WorkspaceId: string;
}
export type TerminateWorkspaceRequests = Array<TerminateRequest>;
export interface TerminateWorkspacesPoolRequest {
  PoolId: string;
}
export interface TerminateWorkspacesPoolResult {}
export interface TerminateWorkspacesPoolSessionRequest {
  SessionId: string;
}
export interface TerminateWorkspacesPoolSessionResult {}
export interface TerminateWorkspacesRequest {
  TerminateWorkspaceRequests: Array<TerminateRequest>;
}
export interface TerminateWorkspacesResult {
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export interface TimeoutSettings {
  DisconnectTimeoutInSeconds?: number;
  IdleDisconnectTimeoutInSeconds?: number;
  MaxUserDurationInSeconds?: number;
}
export type Timestamp = Date | string;

export declare class UnsupportedNetworkConfigurationException extends Data.TaggedError(
  "UnsupportedNetworkConfigurationException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedWorkspaceConfigurationException extends Data.TaggedError(
  "UnsupportedWorkspaceConfigurationException",
)<{
  readonly message?: string;
}> {}
export interface UpdateConnectClientAddInRequest {
  AddInId: string;
  ResourceId: string;
  Name?: string;
  URL?: string;
}
export interface UpdateConnectClientAddInResult {}
export interface UpdateConnectionAliasPermissionRequest {
  AliasId: string;
  ConnectionAliasPermission: ConnectionAliasPermission;
}
export interface UpdateConnectionAliasPermissionResult {}
export type UpdateDescription = string;

export interface UpdateResult {
  UpdateAvailable?: boolean;
  Description?: string;
}
export interface UpdateRulesOfIpGroupRequest {
  GroupId: string;
  UserRules: Array<IpRuleItem>;
}
export interface UpdateRulesOfIpGroupResult {}
export interface UpdateWorkspaceBundleRequest {
  BundleId?: string;
  ImageId?: string;
}
export interface UpdateWorkspaceBundleResult {}
export interface UpdateWorkspaceImagePermissionRequest {
  ImageId: string;
  AllowCopyImage: boolean;
  SharedAccountId: string;
}
export interface UpdateWorkspaceImagePermissionResult {}
export interface UpdateWorkspacesPoolRequest {
  PoolId: string;
  Description?: string;
  BundleId?: string;
  DirectoryId?: string;
  Capacity?: Capacity;
  ApplicationSettings?: ApplicationSettingsRequest;
  TimeoutSettings?: TimeoutSettings;
  RunningMode?: PoolsRunningMode;
}
export interface UpdateWorkspacesPoolResult {
  WorkspacesPool?: WorkspacesPool;
}
export type UserIdentityType =
  | "CUSTOMER_MANAGED"
  | "AWS_DIRECTORY_SERVICE"
  | "AWS_IAM_IDENTITY_CENTER";
export type UserName = string;

export interface UserSetting {
  Action: UserSettingActionEnum;
  Permission: UserSettingPermissionEnum;
  MaximumLength?: number;
}
export type UserSettingActionEnum =
  | "CLIPBOARD_COPY_FROM_LOCAL_DEVICE"
  | "CLIPBOARD_COPY_TO_LOCAL_DEVICE"
  | "PRINTING_TO_LOCAL_DEVICE"
  | "SMART_CARD";
export type UserSettingPermissionEnum = "ENABLED" | "DISABLED";
export type UserSettings = Array<UserSetting>;
export interface UserStorage {
  Capacity: string;
}
export type UserVolumeSizeGib = number;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type VolumeEncryptionKey = string;

export interface Workspace {
  WorkspaceId?: string;
  DirectoryId?: string;
  UserName?: string;
  IpAddress?: string;
  State?: WorkspaceState;
  BundleId?: string;
  SubnetId?: string;
  ErrorMessage?: string;
  ErrorCode?: string;
  ComputerName?: string;
  VolumeEncryptionKey?: string;
  UserVolumeEncryptionEnabled?: boolean;
  RootVolumeEncryptionEnabled?: boolean;
  WorkspaceName?: string;
  WorkspaceProperties?: WorkspaceProperties;
  ModificationStates?: Array<ModificationState>;
  RelatedWorkspaces?: Array<RelatedWorkspaceProperties>;
  DataReplicationSettings?: DataReplicationSettings;
  StandbyWorkspacesProperties?: Array<StandbyWorkspacesProperties>;
}
export interface WorkspaceAccessProperties {
  DeviceTypeWindows?: AccessPropertyValue;
  DeviceTypeOsx?: AccessPropertyValue;
  DeviceTypeWeb?: AccessPropertyValue;
  DeviceTypeIos?: AccessPropertyValue;
  DeviceTypeAndroid?: AccessPropertyValue;
  DeviceTypeChromeOs?: AccessPropertyValue;
  DeviceTypeZeroClient?: AccessPropertyValue;
  DeviceTypeLinux?: AccessPropertyValue;
  DeviceTypeWorkSpacesThinClient?: AccessPropertyValue;
  AccessEndpointConfig?: AccessEndpointConfig;
}
export interface WorkSpaceApplication {
  ApplicationId?: string;
  Created?: Date | string;
  Description?: string;
  LicenseType?: WorkSpaceApplicationLicenseType;
  Name?: string;
  Owner?: string;
  State?: WorkSpaceApplicationState;
  SupportedComputeTypeNames?: Array<Compute>;
  SupportedOperatingSystemNames?: Array<OperatingSystemName>;
}
export interface WorkSpaceApplicationDeployment {
  Associations?: Array<WorkspaceResourceAssociation>;
}
export type WorkSpaceApplicationId = string;

export type WorkSpaceApplicationIdList = Array<string>;
export type WorkSpaceApplicationLicenseType = "LICENSED" | "UNLICENSED";
export type WorkSpaceApplicationList = Array<WorkSpaceApplication>;
export type WorkSpaceApplicationOwner = string;

export type WorkSpaceApplicationState =
  | "PENDING"
  | "ERROR"
  | "AVAILABLE"
  | "UNINSTALL_ONLY";
export type WorkSpaceAssociatedResourceType = "APPLICATION";
export type WorkSpaceAssociatedResourceTypeList =
  Array<WorkSpaceAssociatedResourceType>;
export interface WorkspaceBundle {
  BundleId?: string;
  Name?: string;
  Owner?: string;
  Description?: string;
  ImageId?: string;
  RootStorage?: RootStorage;
  UserStorage?: UserStorage;
  ComputeType?: ComputeType;
  LastUpdatedTime?: Date | string;
  CreationTime?: Date | string;
  State?: WorkspaceBundleState;
  BundleType?: BundleType;
}
export type WorkspaceBundleDescription = string;

export type WorkspaceBundleName = string;

export type WorkspaceBundleState = "AVAILABLE" | "PENDING" | "ERROR";
export interface WorkspaceConnectionStatus {
  WorkspaceId?: string;
  ConnectionState?: ConnectionState;
  ConnectionStateCheckTimestamp?: Date | string;
  LastKnownUserConnectionTimestamp?: Date | string;
}
export type WorkspaceConnectionStatusList = Array<WorkspaceConnectionStatus>;
export interface WorkspaceCreationProperties {
  EnableInternetAccess?: boolean;
  DefaultOu?: string;
  CustomSecurityGroupId?: string;
  UserEnabledAsLocalAdministrator?: boolean;
  EnableMaintenanceMode?: boolean;
  InstanceIamRoleArn?: string;
}
export interface WorkspaceDirectory {
  DirectoryId?: string;
  Alias?: string;
  DirectoryName?: string;
  RegistrationCode?: string;
  SubnetIds?: Array<string>;
  DnsIpAddresses?: Array<string>;
  CustomerUserName?: string;
  IamRoleId?: string;
  DirectoryType?: WorkspaceDirectoryType;
  WorkspaceSecurityGroupId?: string;
  State?: WorkspaceDirectoryState;
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
  ipGroupIds?: Array<string>;
  WorkspaceAccessProperties?: WorkspaceAccessProperties;
  Tenancy?: Tenancy;
  SelfservicePermissions?: SelfservicePermissions;
  SamlProperties?: SamlProperties;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
  EndpointEncryptionMode?: EndpointEncryptionMode;
  MicrosoftEntraConfig?: MicrosoftEntraConfig;
  WorkspaceDirectoryName?: string;
  WorkspaceDirectoryDescription?: string;
  UserIdentityType?: UserIdentityType;
  WorkspaceType?: WorkspaceType;
  IDCConfig?: IDCConfig;
  ActiveDirectoryConfig?: ActiveDirectoryConfig;
  StreamingProperties?: StreamingProperties;
  ErrorMessage?: string;
}
export type WorkspaceDirectoryDescription = string;

export type WorkspaceDirectoryName = string;

export type WorkspaceDirectoryNameList = Array<string>;
export type WorkspaceDirectoryState =
  | "REGISTERING"
  | "REGISTERED"
  | "DEREGISTERING"
  | "DEREGISTERED"
  | "ERROR";
export type WorkspaceDirectoryType =
  | "SIMPLE_AD"
  | "AD_CONNECTOR"
  | "CUSTOMER_MANAGED"
  | "AWS_IAM_IDENTITY_CENTER";
export type WorkspaceErrorCode = string;

export type WorkspaceId = string;

export type WorkspaceIdList = Array<string>;
export interface WorkspaceImage {
  ImageId?: string;
  Name?: string;
  Description?: string;
  OperatingSystem?: OperatingSystem;
  State?: WorkspaceImageState;
  RequiredTenancy?: WorkspaceImageRequiredTenancy;
  ErrorCode?: string;
  ErrorMessage?: string;
  Created?: Date | string;
  OwnerAccountId?: string;
  Updates?: UpdateResult;
  ErrorDetails?: Array<ErrorDetails>;
}
export type WorkspaceImageDescription = string;

export type WorkspaceImageErrorCode = string;

export type WorkspaceImageErrorDetailCode =
  | "OUTDATED_POWERSHELL_VERSION"
  | "OFFICE_INSTALLED"
  | "PCOIP_AGENT_INSTALLED"
  | "WINDOWS_UPDATES_ENABLED"
  | "AUTO_MOUNT_DISABLED"
  | "WORKSPACES_BYOL_ACCOUNT_NOT_FOUND"
  | "WORKSPACES_BYOL_ACCOUNT_DISABLED"
  | "DHCP_DISABLED"
  | "DISK_FREE_SPACE"
  | "ADDITIONAL_DRIVES_ATTACHED"
  | "OS_NOT_SUPPORTED"
  | "DOMAIN_JOINED"
  | "AZURE_DOMAIN_JOINED"
  | "FIREWALL_ENABLED"
  | "VMWARE_TOOLS_INSTALLED"
  | "DISK_SIZE_EXCEEDED"
  | "INCOMPATIBLE_PARTITIONING"
  | "PENDING_REBOOT"
  | "AUTO_LOGON_ENABLED"
  | "REALTIME_UNIVERSAL_DISABLED"
  | "MULTIPLE_BOOT_PARTITION"
  | "SIXTY_FOUR_BIT_OS"
  | "ZERO_REARM_COUNT"
  | "IN_PLACE_UPGRADE"
  | "ANTI_VIRUS_INSTALLED"
  | "UEFI_NOT_SUPPORTED"
  | "UNKNOWN_ERROR"
  | "APPX_PACKAGES_INSTALLED"
  | "RESERVED_STORAGE_IN_USE"
  | "ADDITIONAL_DRIVES_PRESENT"
  | "WINDOWS_UPDATES_REQUIRED"
  | "SYSPREP_FILE_MISSING"
  | "USER_PROFILE_MISSING"
  | "INSUFFICIENT_DISK_SPACE"
  | "ENVIRONMENT_VARIABLES_PATH_MISSING_ENTRIES"
  | "DOMAIN_ACCOUNT_SERVICES_FOUND"
  | "INVALID_IP"
  | "REMOTE_DESKTOP_SERVICES_DISABLED"
  | "WINDOWS_MODULES_INSTALLER_DISABLED"
  | "AMAZON_SSM_AGENT_ENABLED"
  | "UNSUPPORTED_SECURITY_PROTOCOL"
  | "MULTIPLE_USER_PROFILES"
  | "STAGED_APPX_PACKAGE"
  | "UNSUPPORTED_OS_UPGRADE"
  | "INSUFFICIENT_REARM_COUNT"
  | "INCOMPATIBLE_PROTOCOL"
  | "INCOMPATIBLE_MEMORY_INTEGRITY"
  | "RESTRICTED_DRIVE_LETTER";
export type WorkspaceImageId = string;

export type WorkspaceImageIdList = Array<string>;
export type WorkspaceImageIngestionProcess =
  | "BYOL_REGULAR"
  | "BYOL_GRAPHICS"
  | "BYOL_GRAPHICSPRO"
  | "BYOL_GRAPHICS_G4DN"
  | "BYOL_REGULAR_WSP"
  | "BYOL_GRAPHICS_G4DN_WSP"
  | "BYOL_REGULAR_BYOP"
  | "BYOL_GRAPHICS_G4DN_BYOP";
export type WorkspaceImageList = Array<WorkspaceImage>;
export type WorkspaceImageName = string;

export type WorkspaceImageRequiredTenancy = "DEFAULT" | "DEDICATED";
export type WorkspaceImageState = "AVAILABLE" | "PENDING" | "ERROR";
export type WorkspaceList = Array<Workspace>;
export type WorkspaceName = string;

export interface WorkspaceProperties {
  RunningMode?: RunningMode;
  RunningModeAutoStopTimeoutInMinutes?: number;
  RootVolumeSizeGib?: number;
  UserVolumeSizeGib?: number;
  ComputeTypeName?: Compute;
  Protocols?: Array<Protocol>;
  OperatingSystemName?: OperatingSystemName;
  GlobalAccelerator?: GlobalAcceleratorForWorkSpace;
}
export interface WorkspaceRequest {
  DirectoryId: string;
  UserName: string;
  BundleId: string;
  VolumeEncryptionKey?: string;
  UserVolumeEncryptionEnabled?: boolean;
  RootVolumeEncryptionEnabled?: boolean;
  WorkspaceProperties?: WorkspaceProperties;
  Tags?: Array<Tag>;
  WorkspaceName?: string;
}
export type WorkspaceRequestList = Array<WorkspaceRequest>;
export interface WorkspaceResourceAssociation {
  AssociatedResourceId?: string;
  AssociatedResourceType?: WorkSpaceAssociatedResourceType;
  Created?: Date | string;
  LastUpdatedTime?: Date | string;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
  WorkspaceId?: string;
}
export type WorkspaceResourceAssociationList =
  Array<WorkspaceResourceAssociation>;
export declare class WorkspacesDefaultRoleNotFoundException extends Data.TaggedError(
  "WorkspacesDefaultRoleNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface WorkspacesIpGroup {
  groupId?: string;
  groupName?: string;
  groupDesc?: string;
  userRules?: Array<IpRuleItem>;
}
export type WorkspacesIpGroupsList = Array<WorkspacesIpGroup>;
export interface WorkspacesPool {
  PoolId: string;
  PoolArn: string;
  CapacityStatus: CapacityStatus;
  PoolName: string;
  Description?: string;
  State: WorkspacesPoolState;
  CreatedAt: Date | string;
  BundleId: string;
  DirectoryId: string;
  Errors?: Array<WorkspacesPoolError>;
  ApplicationSettings?: ApplicationSettingsResponse;
  TimeoutSettings?: TimeoutSettings;
  RunningMode: PoolsRunningMode;
}
export interface WorkspacesPoolError {
  ErrorCode?: WorkspacesPoolErrorCode;
  ErrorMessage?: string;
}
export type WorkspacesPoolErrorCode =
  | "IAM_SERVICE_ROLE_IS_MISSING"
  | "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"
  | "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION"
  | "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION"
  | "NETWORK_INTERFACE_LIMIT_EXCEEDED"
  | "INTERNAL_SERVICE_ERROR"
  | "MACHINE_ROLE_IS_MISSING"
  | "STS_DISABLED_IN_REGION"
  | "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES"
  | "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION"
  | "SUBNET_NOT_FOUND"
  | "IMAGE_NOT_FOUND"
  | "INVALID_SUBNET_CONFIGURATION"
  | "SECURITY_GROUPS_NOT_FOUND"
  | "IGW_NOT_ATTACHED"
  | "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION"
  | "WORKSPACES_POOL_STOPPED"
  | "WORKSPACES_POOL_INSTANCE_PROVISIONING_FAILURE"
  | "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND"
  | "DOMAIN_JOIN_ERROR_ACCESS_DENIED"
  | "DOMAIN_JOIN_ERROR_LOGON_FAILURE"
  | "DOMAIN_JOIN_ERROR_INVALID_PARAMETER"
  | "DOMAIN_JOIN_ERROR_MORE_DATA"
  | "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN"
  | "DOMAIN_JOIN_ERROR_NOT_SUPPORTED"
  | "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME"
  | "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED"
  | "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED"
  | "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED"
  | "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR"
  | "DOMAIN_JOIN_ERROR_SECRET_ACTION_PERMISSION_IS_MISSING"
  | "DOMAIN_JOIN_ERROR_SECRET_DECRYPTION_FAILURE"
  | "DOMAIN_JOIN_ERROR_SECRET_STATE_INVALID"
  | "DOMAIN_JOIN_ERROR_SECRET_NOT_FOUND"
  | "DOMAIN_JOIN_ERROR_SECRET_VALUE_KEY_NOT_FOUND"
  | "DOMAIN_JOIN_ERROR_SECRET_INVALID"
  | "BUNDLE_NOT_FOUND"
  | "DIRECTORY_NOT_FOUND"
  | "INSUFFICIENT_PERMISSIONS_ERROR"
  | "DEFAULT_OU_IS_MISSING";
export type WorkspacesPoolErrors = Array<WorkspacesPoolError>;
export type WorkspacesPoolId = string;

export type WorkspacesPoolIds = Array<string>;
export type WorkspacesPoolName = string;

export type WorkspacesPools = Array<WorkspacesPool>;
export interface WorkspacesPoolSession {
  AuthenticationType?: AuthenticationType;
  ConnectionState?: SessionConnectionState;
  SessionId: string;
  InstanceId?: string;
  PoolId: string;
  ExpirationTime?: Date | string;
  NetworkAccessConfiguration?: NetworkAccessConfiguration;
  StartTime?: Date | string;
  UserId: string;
}
export type WorkspacesPoolSessions = Array<WorkspacesPoolSession>;
export type WorkspacesPoolState =
  | "CREATING"
  | "DELETING"
  | "RUNNING"
  | "STARTING"
  | "STOPPED"
  | "STOPPING"
  | "UPDATING";
export type WorkspacesPoolUserId = string;

export type WorkspaceState =
  | "PENDING"
  | "AVAILABLE"
  | "IMPAIRED"
  | "UNHEALTHY"
  | "REBOOTING"
  | "STARTING"
  | "REBUILDING"
  | "RESTORING"
  | "MAINTENANCE"
  | "ADMIN_MAINTENANCE"
  | "TERMINATING"
  | "TERMINATED"
  | "SUSPENDED"
  | "UPDATING"
  | "STOPPING"
  | "STOPPED"
  | "ERROR";
export type WorkspaceType = "PERSONAL" | "POOLS";
export declare namespace AcceptAccountLinkInvitation {
  export type Input = AcceptAccountLinkInvitationRequest;
  export type Output = AcceptAccountLinkInvitationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateConnectionAlias {
  export type Input = AssociateConnectionAliasRequest;
  export type Output = AssociateConnectionAliasResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateIpGroups {
  export type Input = AssociateIpGroupsRequest;
  export type Output = AssociateIpGroupsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateWorkspaceApplication {
  export type Input = AssociateWorkspaceApplicationRequest;
  export type Output = AssociateWorkspaceApplicationResult;
  export type Error =
    | AccessDeniedException
    | ApplicationNotSupportedException
    | ComputeNotCompatibleException
    | IncompatibleApplicationsException
    | InvalidParameterValuesException
    | OperatingSystemNotCompatibleException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AuthorizeIpRules {
  export type Input = AuthorizeIpRulesRequest;
  export type Output = AuthorizeIpRulesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CopyWorkspaceImage {
  export type Input = CopyWorkspaceImageRequest;
  export type Output = CopyWorkspaceImageResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateAccountLinkInvitation {
  export type Input = CreateAccountLinkInvitationRequest;
  export type Output = CreateAccountLinkInvitationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConnectClientAddIn {
  export type Input = CreateConnectClientAddInRequest;
  export type Output = CreateConnectClientAddInResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAlreadyExistsException
    | ResourceCreationFailedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateConnectionAlias {
  export type Input = CreateConnectionAliasRequest;
  export type Output = CreateConnectionAliasResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateIpGroup {
  export type Input = CreateIpGroupRequest;
  export type Output = CreateIpGroupResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAlreadyExistsException
    | ResourceCreationFailedException
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateStandbyWorkspaces {
  export type Input = CreateStandbyWorkspacesRequest;
  export type Output = CreateStandbyWorkspacesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateTags {
  export type Input = CreateTagsRequest;
  export type Output = CreateTagsResult;
  export type Error =
    | InvalidParameterValuesException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateUpdatedWorkspaceImage {
  export type Input = CreateUpdatedWorkspaceImageRequest;
  export type Output = CreateUpdatedWorkspaceImageResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateWorkspaceBundle {
  export type Input = CreateWorkspaceBundleRequest;
  export type Output = CreateWorkspaceBundleResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateWorkspaceImage {
  export type Input = CreateWorkspaceImageRequest;
  export type Output = CreateWorkspaceImageResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateWorkspaces {
  export type Input = CreateWorkspacesRequest;
  export type Output = CreateWorkspacesResult;
  export type Error =
    | InvalidParameterValuesException
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateWorkspacesPool {
  export type Input = CreateWorkspacesPoolRequest;
  export type Output = CreateWorkspacesPoolResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteAccountLinkInvitation {
  export type Input = DeleteAccountLinkInvitationRequest;
  export type Output = DeleteAccountLinkInvitationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteClientBranding {
  export type Input = DeleteClientBrandingRequest;
  export type Output = DeleteClientBrandingResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConnectClientAddIn {
  export type Input = DeleteConnectClientAddInRequest;
  export type Output = DeleteConnectClientAddInResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConnectionAlias {
  export type Input = DeleteConnectionAliasRequest;
  export type Output = DeleteConnectionAliasResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteIpGroup {
  export type Input = DeleteIpGroupRequest;
  export type Output = DeleteIpGroupResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsRequest;
  export type Output = DeleteTagsResult;
  export type Error =
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWorkspaceBundle {
  export type Input = DeleteWorkspaceBundleRequest;
  export type Output = DeleteWorkspaceBundleResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceAssociatedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWorkspaceImage {
  export type Input = DeleteWorkspaceImageRequest;
  export type Output = DeleteWorkspaceImageResult;
  export type Error =
    | AccessDeniedException
    | InvalidResourceStateException
    | ResourceAssociatedException
    | CommonAwsError;
}

export declare namespace DeployWorkspaceApplications {
  export type Input = DeployWorkspaceApplicationsRequest;
  export type Output = DeployWorkspaceApplicationsResult;
  export type Error =
    | AccessDeniedException
    | IncompatibleApplicationsException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeregisterWorkspaceDirectory {
  export type Input = DeregisterWorkspaceDirectoryRequest;
  export type Output = DeregisterWorkspaceDirectoryResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAccount {
  export type Input = DescribeAccountRequest;
  export type Output = DescribeAccountResult;
  export type Error = AccessDeniedException | CommonAwsError;
}

export declare namespace DescribeAccountModifications {
  export type Input = DescribeAccountModificationsRequest;
  export type Output = DescribeAccountModificationsResult;
  export type Error = AccessDeniedException | CommonAwsError;
}

export declare namespace DescribeApplicationAssociations {
  export type Input = DescribeApplicationAssociationsRequest;
  export type Output = DescribeApplicationAssociationsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeApplications {
  export type Input = DescribeApplicationsRequest;
  export type Output = DescribeApplicationsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeBundleAssociations {
  export type Input = DescribeBundleAssociationsRequest;
  export type Output = DescribeBundleAssociationsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeClientBranding {
  export type Input = DescribeClientBrandingRequest;
  export type Output = DescribeClientBrandingResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeClientProperties {
  export type Input = DescribeClientPropertiesRequest;
  export type Output = DescribeClientPropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeConnectClientAddIns {
  export type Input = DescribeConnectClientAddInsRequest;
  export type Output = DescribeConnectClientAddInsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeConnectionAliases {
  export type Input = DescribeConnectionAliasesRequest;
  export type Output = DescribeConnectionAliasesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | CommonAwsError;
}

export declare namespace DescribeConnectionAliasPermissions {
  export type Input = DescribeConnectionAliasPermissionsRequest;
  export type Output = DescribeConnectionAliasPermissionsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeImageAssociations {
  export type Input = DescribeImageAssociationsRequest;
  export type Output = DescribeImageAssociationsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeIpGroups {
  export type Input = DescribeIpGroupsRequest;
  export type Output = DescribeIpGroupsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | CommonAwsError;
}

export declare namespace DescribeTags {
  export type Input = DescribeTagsRequest;
  export type Output = DescribeTagsResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeWorkspaceAssociations {
  export type Input = DescribeWorkspaceAssociationsRequest;
  export type Output = DescribeWorkspaceAssociationsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWorkspaceBundles {
  export type Input = DescribeWorkspaceBundlesRequest;
  export type Output = DescribeWorkspaceBundlesResult;
  export type Error = InvalidParameterValuesException | CommonAwsError;
}

export declare namespace DescribeWorkspaceDirectories {
  export type Input = DescribeWorkspaceDirectoriesRequest;
  export type Output = DescribeWorkspaceDirectoriesResult;
  export type Error = InvalidParameterValuesException | CommonAwsError;
}

export declare namespace DescribeWorkspaceImagePermissions {
  export type Input = DescribeWorkspaceImagePermissionsRequest;
  export type Output = DescribeWorkspaceImagePermissionsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWorkspaceImages {
  export type Input = DescribeWorkspaceImagesRequest;
  export type Output = DescribeWorkspaceImagesResult;
  export type Error = AccessDeniedException | CommonAwsError;
}

export declare namespace DescribeWorkspaces {
  export type Input = DescribeWorkspacesRequest;
  export type Output = DescribeWorkspacesResult;
  export type Error =
    | InvalidParameterValuesException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeWorkspacesConnectionStatus {
  export type Input = DescribeWorkspacesConnectionStatusRequest;
  export type Output = DescribeWorkspacesConnectionStatusResult;
  export type Error = InvalidParameterValuesException | CommonAwsError;
}

export declare namespace DescribeWorkspaceSnapshots {
  export type Input = DescribeWorkspaceSnapshotsRequest;
  export type Output = DescribeWorkspaceSnapshotsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWorkspacesPools {
  export type Input = DescribeWorkspacesPoolsRequest;
  export type Output = DescribeWorkspacesPoolsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeWorkspacesPoolSessions {
  export type Input = DescribeWorkspacesPoolSessionsRequest;
  export type Output = DescribeWorkspacesPoolSessionsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateConnectionAlias {
  export type Input = DisassociateConnectionAliasRequest;
  export type Output = DisassociateConnectionAliasResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateIpGroups {
  export type Input = DisassociateIpGroupsRequest;
  export type Output = DisassociateIpGroupsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateWorkspaceApplication {
  export type Input = DisassociateWorkspaceApplicationRequest;
  export type Output = DisassociateWorkspaceApplicationResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAccountLink {
  export type Input = GetAccountLinkRequest;
  export type Output = GetAccountLinkResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportClientBranding {
  export type Input = ImportClientBrandingRequest;
  export type Output = ImportClientBrandingResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ImportWorkspaceImage {
  export type Input = ImportWorkspaceImageRequest;
  export type Output = ImportWorkspaceImageResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAccountLinks {
  export type Input = ListAccountLinksRequest;
  export type Output = ListAccountLinksResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAvailableManagementCidrRanges {
  export type Input = ListAvailableManagementCidrRangesRequest;
  export type Output = ListAvailableManagementCidrRangesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | CommonAwsError;
}

export declare namespace MigrateWorkspace {
  export type Input = MigrateWorkspaceRequest;
  export type Output = MigrateWorkspaceResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace ModifyAccount {
  export type Input = ModifyAccountRequest;
  export type Output = ModifyAccountResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace ModifyCertificateBasedAuthProperties {
  export type Input = ModifyCertificateBasedAuthPropertiesRequest;
  export type Output = ModifyCertificateBasedAuthPropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyClientProperties {
  export type Input = ModifyClientPropertiesRequest;
  export type Output = ModifyClientPropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyEndpointEncryptionMode {
  export type Input = ModifyEndpointEncryptionModeRequest;
  export type Output = ModifyEndpointEncryptionModeResponse;
  export type Error =
    | AccessDeniedException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifySamlProperties {
  export type Input = ModifySamlPropertiesRequest;
  export type Output = ModifySamlPropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifySelfservicePermissions {
  export type Input = ModifySelfservicePermissionsRequest;
  export type Output = ModifySelfservicePermissionsResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyStreamingProperties {
  export type Input = ModifyStreamingPropertiesRequest;
  export type Output = ModifyStreamingPropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyWorkspaceAccessProperties {
  export type Input = ModifyWorkspaceAccessPropertiesRequest;
  export type Output = ModifyWorkspaceAccessPropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterCombinationException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyWorkspaceCreationProperties {
  export type Input = ModifyWorkspaceCreationPropertiesRequest;
  export type Output = ModifyWorkspaceCreationPropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ModifyWorkspaceProperties {
  export type Input = ModifyWorkspacePropertiesRequest;
  export type Output = ModifyWorkspacePropertiesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | UnsupportedWorkspaceConfigurationException
    | CommonAwsError;
}

export declare namespace ModifyWorkspaceState {
  export type Input = ModifyWorkspaceStateRequest;
  export type Output = ModifyWorkspaceStateResult;
  export type Error =
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RebootWorkspaces {
  export type Input = RebootWorkspacesRequest;
  export type Output = RebootWorkspacesResult;
  export type Error = OperationNotSupportedException | CommonAwsError;
}

export declare namespace RebuildWorkspaces {
  export type Input = RebuildWorkspacesRequest;
  export type Output = RebuildWorkspacesResult;
  export type Error = OperationNotSupportedException | CommonAwsError;
}

export declare namespace RegisterWorkspaceDirectory {
  export type Input = RegisterWorkspaceDirectoryRequest;
  export type Output = RegisterWorkspaceDirectoryResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | UnsupportedNetworkConfigurationException
    | WorkspacesDefaultRoleNotFoundException
    | CommonAwsError;
}

export declare namespace RejectAccountLinkInvitation {
  export type Input = RejectAccountLinkInvitationRequest;
  export type Output = RejectAccountLinkInvitationResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RestoreWorkspace {
  export type Input = RestoreWorkspaceRequest;
  export type Output = RestoreWorkspaceResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RevokeIpRules {
  export type Input = RevokeIpRulesRequest;
  export type Output = RevokeIpRulesResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartWorkspaces {
  export type Input = StartWorkspacesRequest;
  export type Output = StartWorkspacesResult;
  export type Error = CommonAwsError;
}

export declare namespace StartWorkspacesPool {
  export type Input = StartWorkspacesPoolRequest;
  export type Output = StartWorkspacesPoolResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopWorkspaces {
  export type Input = StopWorkspacesRequest;
  export type Output = StopWorkspacesResult;
  export type Error = CommonAwsError;
}

export declare namespace StopWorkspacesPool {
  export type Input = StopWorkspacesPoolRequest;
  export type Output = StopWorkspacesPoolResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TerminateWorkspaces {
  export type Input = TerminateWorkspacesRequest;
  export type Output = TerminateWorkspacesResult;
  export type Error = CommonAwsError;
}

export declare namespace TerminateWorkspacesPool {
  export type Input = TerminateWorkspacesPoolRequest;
  export type Output = TerminateWorkspacesPoolResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TerminateWorkspacesPoolSession {
  export type Input = TerminateWorkspacesPoolSessionRequest;
  export type Output = TerminateWorkspacesPoolSessionResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConnectClientAddIn {
  export type Input = UpdateConnectClientAddInRequest;
  export type Output = UpdateConnectClientAddInResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConnectionAliasPermission {
  export type Input = UpdateConnectionAliasPermissionRequest;
  export type Output = UpdateConnectionAliasPermissionResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationNotSupportedException
    | ResourceAssociatedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateRulesOfIpGroup {
  export type Input = UpdateRulesOfIpGroupRequest;
  export type Output = UpdateRulesOfIpGroupResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateWorkspaceBundle {
  export type Input = UpdateWorkspaceBundleRequest;
  export type Output = UpdateWorkspaceBundleResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateWorkspaceImagePermission {
  export type Input = UpdateWorkspaceImagePermissionRequest;
  export type Output = UpdateWorkspaceImagePermissionResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateWorkspacesPool {
  export type Input = UpdateWorkspacesPoolRequest;
  export type Output = UpdateWorkspacesPoolResult;
  export type Error =
    | AccessDeniedException
    | InvalidParameterValuesException
    | InvalidResourceStateException
    | OperationInProgressException
    | OperationNotSupportedException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}
