import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface WorkMailService {
  associateDelegateToResource(
    input: AssociateDelegateToResourceRequest,
  ): Effect.Effect<
    AssociateDelegateToResourceResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  associateMemberToGroup(
    input: AssociateMemberToGroupRequest,
  ): Effect.Effect<
    AssociateMemberToGroupResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  assumeImpersonationRole(
    input: AssumeImpersonationRoleRequest,
  ): Effect.Effect<
    AssumeImpersonationRoleResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  cancelMailboxExportJob(
    input: CancelMailboxExportJobRequest,
  ): Effect.Effect<
    CancelMailboxExportJobResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  createAlias(
    input: CreateAliasRequest,
  ): Effect.Effect<
    CreateAliasResponse,
    | EmailAddressInUseException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | LimitExceededException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  createAvailabilityConfiguration(
    input: CreateAvailabilityConfigurationRequest,
  ): Effect.Effect<
    CreateAvailabilityConfigurationResponse,
    | InvalidParameterException
    | LimitExceededException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | InvalidParameterException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ReservedNameException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createIdentityCenterApplication(
    input: CreateIdentityCenterApplicationRequest,
  ): Effect.Effect<
    CreateIdentityCenterApplicationResponse,
    InvalidParameterException | CommonAwsError
  >;
  createImpersonationRole(
    input: CreateImpersonationRoleRequest,
  ): Effect.Effect<
    CreateImpersonationRoleResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  createMobileDeviceAccessRule(
    input: CreateMobileDeviceAccessRuleRequest,
  ): Effect.Effect<
    CreateMobileDeviceAccessRuleResponse,
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  createOrganization(
    input: CreateOrganizationRequest,
  ): Effect.Effect<
    CreateOrganizationResponse,
    | DirectoryInUseException
    | DirectoryUnavailableException
    | InvalidParameterException
    | LimitExceededException
    | NameAvailabilityException
    | CommonAwsError
  >;
  createResource(
    input: CreateResourceRequest,
  ): Effect.Effect<
    CreateResourceResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | InvalidParameterException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ReservedNameException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | InvalidParameterException
    | InvalidPasswordException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ReservedNameException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteAccessControlRule(
    input: DeleteAccessControlRuleRequest,
  ): Effect.Effect<
    DeleteAccessControlRuleResponse,
    OrganizationNotFoundException | OrganizationStateException | CommonAwsError
  >;
  deleteAlias(
    input: DeleteAliasRequest,
  ): Effect.Effect<
    DeleteAliasResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteAvailabilityConfiguration(
    input: DeleteAvailabilityConfigurationRequest,
  ): Effect.Effect<
    DeleteAvailabilityConfigurationResponse,
    OrganizationNotFoundException | OrganizationStateException | CommonAwsError
  >;
  deleteEmailMonitoringConfiguration(
    input: DeleteEmailMonitoringConfigurationRequest,
  ): Effect.Effect<
    DeleteEmailMonitoringConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    DeleteGroupResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteIdentityCenterApplication(
    input: DeleteIdentityCenterApplicationRequest,
  ): Effect.Effect<
    DeleteIdentityCenterApplicationResponse,
    InvalidParameterException | OrganizationStateException | CommonAwsError
  >;
  deleteIdentityProviderConfiguration(
    input: DeleteIdentityProviderConfigurationRequest,
  ): Effect.Effect<
    DeleteIdentityProviderConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteImpersonationRole(
    input: DeleteImpersonationRoleRequest,
  ): Effect.Effect<
    DeleteImpersonationRoleResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteMailboxPermissions(
    input: DeleteMailboxPermissionsRequest,
  ): Effect.Effect<
    DeleteMailboxPermissionsResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteMobileDeviceAccessOverride(
    input: DeleteMobileDeviceAccessOverrideRequest,
  ): Effect.Effect<
    DeleteMobileDeviceAccessOverrideResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteMobileDeviceAccessRule(
    input: DeleteMobileDeviceAccessRuleRequest,
  ): Effect.Effect<
    DeleteMobileDeviceAccessRuleResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteOrganization(
    input: DeleteOrganizationRequest,
  ): Effect.Effect<
    DeleteOrganizationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deletePersonalAccessToken(
    input: DeletePersonalAccessTokenRequest,
  ): Effect.Effect<
    DeletePersonalAccessTokenResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteResource(
    input: DeleteResourceRequest,
  ): Effect.Effect<
    DeleteResourceResponse,
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteRetentionPolicy(
    input: DeleteRetentionPolicyRequest,
  ): Effect.Effect<
    DeleteRetentionPolicyResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deregisterFromWorkMail(
    input: DeregisterFromWorkMailRequest,
  ): Effect.Effect<
    DeregisterFromWorkMailResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  deregisterMailDomain(
    input: DeregisterMailDomainRequest,
  ): Effect.Effect<
    DeregisterMailDomainResponse,
    | InvalidCustomSesConfigurationException
    | InvalidParameterException
    | MailDomainInUseException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  describeEmailMonitoringConfiguration(
    input: DescribeEmailMonitoringConfigurationRequest,
  ): Effect.Effect<
    DescribeEmailMonitoringConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeEntity(
    input: DescribeEntityRequest,
  ): Effect.Effect<
    DescribeEntityResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  describeGroup(
    input: DescribeGroupRequest,
  ): Effect.Effect<
    DescribeGroupResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  describeIdentityProviderConfiguration(
    input: DescribeIdentityProviderConfigurationRequest,
  ): Effect.Effect<
    DescribeIdentityProviderConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeInboundDmarcSettings(
    input: DescribeInboundDmarcSettingsRequest,
  ): Effect.Effect<
    DescribeInboundDmarcSettingsResponse,
    OrganizationNotFoundException | OrganizationStateException | CommonAwsError
  >;
  describeMailboxExportJob(
    input: DescribeMailboxExportJobRequest,
  ): Effect.Effect<
    DescribeMailboxExportJobResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  describeOrganization(
    input: DescribeOrganizationRequest,
  ): Effect.Effect<
    DescribeOrganizationResponse,
    InvalidParameterException | OrganizationNotFoundException | CommonAwsError
  >;
  describeResource(
    input: DescribeResourceRequest,
  ): Effect.Effect<
    DescribeResourceResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    DescribeUserResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  disassociateDelegateFromResource(
    input: DisassociateDelegateFromResourceRequest,
  ): Effect.Effect<
    DisassociateDelegateFromResourceResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  disassociateMemberFromGroup(
    input: DisassociateMemberFromGroupRequest,
  ): Effect.Effect<
    DisassociateMemberFromGroupResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  getAccessControlEffect(
    input: GetAccessControlEffectRequest,
  ): Effect.Effect<
    GetAccessControlEffectResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getDefaultRetentionPolicy(
    input: GetDefaultRetentionPolicyRequest,
  ): Effect.Effect<
    GetDefaultRetentionPolicyResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  getImpersonationRole(
    input: GetImpersonationRoleRequest,
  ): Effect.Effect<
    GetImpersonationRoleResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getImpersonationRoleEffect(
    input: GetImpersonationRoleEffectRequest,
  ): Effect.Effect<
    GetImpersonationRoleEffectResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getMailboxDetails(
    input: GetMailboxDetailsRequest,
  ): Effect.Effect<
    GetMailboxDetailsResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  getMailDomain(
    input: GetMailDomainRequest,
  ): Effect.Effect<
    GetMailDomainResponse,
    | InvalidParameterException
    | MailDomainNotFoundException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  getMobileDeviceAccessEffect(
    input: GetMobileDeviceAccessEffectRequest,
  ): Effect.Effect<
    GetMobileDeviceAccessEffectResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  getMobileDeviceAccessOverride(
    input: GetMobileDeviceAccessOverrideRequest,
  ): Effect.Effect<
    GetMobileDeviceAccessOverrideResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getPersonalAccessTokenMetadata(
    input: GetPersonalAccessTokenMetadataRequest,
  ): Effect.Effect<
    GetPersonalAccessTokenMetadataResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAccessControlRules(
    input: ListAccessControlRulesRequest,
  ): Effect.Effect<
    ListAccessControlRulesResponse,
    OrganizationNotFoundException | OrganizationStateException | CommonAwsError
  >;
  listAliases(
    input: ListAliasesRequest,
  ): Effect.Effect<
    ListAliasesResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listAvailabilityConfigurations(
    input: ListAvailabilityConfigurationsRequest,
  ): Effect.Effect<
    ListAvailabilityConfigurationsResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listGroupMembers(
    input: ListGroupMembersRequest,
  ): Effect.Effect<
    ListGroupMembersResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listGroupsForEntity(
    input: ListGroupsForEntityRequest,
  ): Effect.Effect<
    ListGroupsForEntityResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listImpersonationRoles(
    input: ListImpersonationRolesRequest,
  ): Effect.Effect<
    ListImpersonationRolesResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listMailboxExportJobs(
    input: ListMailboxExportJobsRequest,
  ): Effect.Effect<
    ListMailboxExportJobsResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listMailboxPermissions(
    input: ListMailboxPermissionsRequest,
  ): Effect.Effect<
    ListMailboxPermissionsResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listMailDomains(
    input: ListMailDomainsRequest,
  ): Effect.Effect<
    ListMailDomainsResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listMobileDeviceAccessOverrides(
    input: ListMobileDeviceAccessOverridesRequest,
  ): Effect.Effect<
    ListMobileDeviceAccessOverridesResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listMobileDeviceAccessRules(
    input: ListMobileDeviceAccessRulesRequest,
  ): Effect.Effect<
    ListMobileDeviceAccessRulesResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listOrganizations(
    input: ListOrganizationsRequest,
  ): Effect.Effect<
    ListOrganizationsResponse,
    InvalidParameterException | CommonAwsError
  >;
  listPersonalAccessTokens(
    input: ListPersonalAccessTokensRequest,
  ): Effect.Effect<
    ListPersonalAccessTokensResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  listResourceDelegates(
    input: ListResourceDelegatesRequest,
  ): Effect.Effect<
    ListResourceDelegatesResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listResources(
    input: ListResourcesRequest,
  ): Effect.Effect<
    ListResourcesResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  putAccessControlRule(
    input: PutAccessControlRuleRequest,
  ): Effect.Effect<
    PutAccessControlRuleResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putEmailMonitoringConfiguration(
    input: PutEmailMonitoringConfigurationRequest,
  ): Effect.Effect<
    PutEmailMonitoringConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putIdentityProviderConfiguration(
    input: PutIdentityProviderConfigurationRequest,
  ): Effect.Effect<
    PutIdentityProviderConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putInboundDmarcSettings(
    input: PutInboundDmarcSettingsRequest,
  ): Effect.Effect<
    PutInboundDmarcSettingsResponse,
    OrganizationNotFoundException | OrganizationStateException | CommonAwsError
  >;
  putMailboxPermissions(
    input: PutMailboxPermissionsRequest,
  ): Effect.Effect<
    PutMailboxPermissionsResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  putMobileDeviceAccessOverride(
    input: PutMobileDeviceAccessOverrideRequest,
  ): Effect.Effect<
    PutMobileDeviceAccessOverrideResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  putRetentionPolicy(
    input: PutRetentionPolicyRequest,
  ): Effect.Effect<
    PutRetentionPolicyResponse,
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  registerMailDomain(
    input: RegisterMailDomainRequest,
  ): Effect.Effect<
    RegisterMailDomainResponse,
    | InvalidParameterException
    | LimitExceededException
    | MailDomainInUseException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  registerToWorkMail(
    input: RegisterToWorkMailRequest,
  ): Effect.Effect<
    RegisterToWorkMailResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EmailAddressInUseException
    | EntityAlreadyRegisteredException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  resetPassword(
    input: ResetPasswordRequest,
  ): Effect.Effect<
    ResetPasswordResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | InvalidPasswordException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startMailboxExportJob(
    input: StartMailboxExportJobRequest,
  ): Effect.Effect<
    StartMailboxExportJobResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidParameterException
    | OrganizationStateException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  testAvailabilityConfiguration(
    input: TestAvailabilityConfigurationRequest,
  ): Effect.Effect<
    TestAvailabilityConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  updateAvailabilityConfiguration(
    input: UpdateAvailabilityConfigurationRequest,
  ): Effect.Effect<
    UpdateAvailabilityConfigurationResponse,
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateDefaultMailDomain(
    input: UpdateDefaultMailDomainRequest,
  ): Effect.Effect<
    UpdateDefaultMailDomainResponse,
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    UpdateGroupResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateImpersonationRole(
    input: UpdateImpersonationRoleRequest,
  ): Effect.Effect<
    UpdateImpersonationRoleResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateMailboxQuota(
    input: UpdateMailboxQuotaRequest,
  ): Effect.Effect<
    UpdateMailboxQuotaResponse,
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  updateMobileDeviceAccessRule(
    input: UpdateMobileDeviceAccessRuleRequest,
  ): Effect.Effect<
    UpdateMobileDeviceAccessRuleResponse,
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError
  >;
  updatePrimaryEmailAddress(
    input: UpdatePrimaryEmailAddressRequest,
  ): Effect.Effect<
    UpdatePrimaryEmailAddressResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EmailAddressInUseException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateResource(
    input: UpdateResourceRequest,
  ): Effect.Effect<
    UpdateResourceResponse,
    | DirectoryUnavailableException
    | EmailAddressInUseException
    | EntityNotFoundException
    | EntityStateException
    | InvalidConfigurationException
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError
  >;
}

export type Workmail = WorkMailService;

export interface AccessControlRule {
  Name?: string;
  Effect?: AccessControlRuleEffect;
  Description?: string;
  IpRanges?: Array<string>;
  NotIpRanges?: Array<string>;
  Actions?: Array<string>;
  NotActions?: Array<string>;
  UserIds?: Array<string>;
  NotUserIds?: Array<string>;
  DateCreated?: Date | string;
  DateModified?: Date | string;
  ImpersonationRoleIds?: Array<string>;
  NotImpersonationRoleIds?: Array<string>;
}
export type AccessControlRuleAction = string;

export type AccessControlRuleDescription = string;

export type AccessControlRuleEffect = "ALLOW" | "DENY";
export type AccessControlRuleName = string;

export type AccessControlRuleNameList = Array<string>;
export type AccessControlRulesList = Array<AccessControlRule>;
export type AccessEffect = "ALLOW" | "DENY";
export type ActionsList = Array<string>;
export type Aliases = Array<string>;
export type AmazonResourceName = string;

export type ApplicationArn = string;

export interface AssociateDelegateToResourceRequest {
  OrganizationId: string;
  ResourceId: string;
  EntityId: string;
}
export interface AssociateDelegateToResourceResponse {}
export interface AssociateMemberToGroupRequest {
  OrganizationId: string;
  GroupId: string;
  MemberId: string;
}
export interface AssociateMemberToGroupResponse {}
export interface AssumeImpersonationRoleRequest {
  OrganizationId: string;
  ImpersonationRoleId: string;
}
export interface AssumeImpersonationRoleResponse {
  Token?: string;
  ExpiresIn?: number;
}
export interface AvailabilityConfiguration {
  DomainName?: string;
  ProviderType?: AvailabilityProviderType;
  EwsProvider?: RedactedEwsAvailabilityProvider;
  LambdaProvider?: LambdaAvailabilityProvider;
  DateCreated?: Date | string;
  DateModified?: Date | string;
}
export type AvailabilityConfigurationList = Array<AvailabilityConfiguration>;
export type AvailabilityProviderType = "EWS" | "LAMBDA";
export interface BookingOptions {
  AutoAcceptRequests?: boolean;
  AutoDeclineRecurringRequests?: boolean;
  AutoDeclineConflictingRequests?: boolean;
}
export type WorkmailBoolean = boolean;

export type BooleanObject = boolean;

export interface CancelMailboxExportJobRequest {
  ClientToken: string;
  JobId: string;
  OrganizationId: string;
}
export interface CancelMailboxExportJobResponse {}
export interface CreateAliasRequest {
  OrganizationId: string;
  EntityId: string;
  Alias: string;
}
export interface CreateAliasResponse {}
export interface CreateAvailabilityConfigurationRequest {
  ClientToken?: string;
  OrganizationId: string;
  DomainName: string;
  EwsProvider?: EwsAvailabilityProvider;
  LambdaProvider?: LambdaAvailabilityProvider;
}
export interface CreateAvailabilityConfigurationResponse {}
export interface CreateGroupRequest {
  OrganizationId: string;
  Name: string;
  HiddenFromGlobalAddressList?: boolean;
}
export interface CreateGroupResponse {
  GroupId?: string;
}
export interface CreateIdentityCenterApplicationRequest {
  Name: string;
  InstanceArn: string;
  ClientToken?: string;
}
export interface CreateIdentityCenterApplicationResponse {
  ApplicationArn?: string;
}
export interface CreateImpersonationRoleRequest {
  ClientToken?: string;
  OrganizationId: string;
  Name: string;
  Type: ImpersonationRoleType;
  Description?: string;
  Rules: Array<ImpersonationRule>;
}
export interface CreateImpersonationRoleResponse {
  ImpersonationRoleId?: string;
}
export interface CreateMobileDeviceAccessRuleRequest {
  OrganizationId: string;
  ClientToken?: string;
  Name: string;
  Description?: string;
  Effect: MobileDeviceAccessRuleEffect;
  DeviceTypes?: Array<string>;
  NotDeviceTypes?: Array<string>;
  DeviceModels?: Array<string>;
  NotDeviceModels?: Array<string>;
  DeviceOperatingSystems?: Array<string>;
  NotDeviceOperatingSystems?: Array<string>;
  DeviceUserAgents?: Array<string>;
  NotDeviceUserAgents?: Array<string>;
}
export interface CreateMobileDeviceAccessRuleResponse {
  MobileDeviceAccessRuleId?: string;
}
export interface CreateOrganizationRequest {
  DirectoryId?: string;
  Alias: string;
  ClientToken?: string;
  Domains?: Array<Domain>;
  KmsKeyArn?: string;
  EnableInteroperability?: boolean;
}
export interface CreateOrganizationResponse {
  OrganizationId?: string;
}
export interface CreateResourceRequest {
  OrganizationId: string;
  Name: string;
  Type: ResourceType;
  Description?: string;
  HiddenFromGlobalAddressList?: boolean;
}
export interface CreateResourceResponse {
  ResourceId?: string;
}
export interface CreateUserRequest {
  OrganizationId: string;
  Name: string;
  DisplayName: string;
  Password?: string;
  Role?: UserRole;
  FirstName?: string;
  LastName?: string;
  HiddenFromGlobalAddressList?: boolean;
  IdentityProviderUserId?: string;
}
export interface CreateUserResponse {
  UserId?: string;
}
export interface Delegate {
  Id: string;
  Type: MemberType;
}
export interface DeleteAccessControlRuleRequest {
  OrganizationId: string;
  Name: string;
}
export interface DeleteAccessControlRuleResponse {}
export interface DeleteAliasRequest {
  OrganizationId: string;
  EntityId: string;
  Alias: string;
}
export interface DeleteAliasResponse {}
export interface DeleteAvailabilityConfigurationRequest {
  OrganizationId: string;
  DomainName: string;
}
export interface DeleteAvailabilityConfigurationResponse {}
export interface DeleteEmailMonitoringConfigurationRequest {
  OrganizationId: string;
}
export interface DeleteEmailMonitoringConfigurationResponse {}
export interface DeleteGroupRequest {
  OrganizationId: string;
  GroupId: string;
}
export interface DeleteGroupResponse {}
export interface DeleteIdentityCenterApplicationRequest {
  ApplicationArn: string;
}
export interface DeleteIdentityCenterApplicationResponse {}
export interface DeleteIdentityProviderConfigurationRequest {
  OrganizationId: string;
}
export interface DeleteIdentityProviderConfigurationResponse {}
export interface DeleteImpersonationRoleRequest {
  OrganizationId: string;
  ImpersonationRoleId: string;
}
export interface DeleteImpersonationRoleResponse {}
export interface DeleteMailboxPermissionsRequest {
  OrganizationId: string;
  EntityId: string;
  GranteeId: string;
}
export interface DeleteMailboxPermissionsResponse {}
export interface DeleteMobileDeviceAccessOverrideRequest {
  OrganizationId: string;
  UserId: string;
  DeviceId: string;
}
export interface DeleteMobileDeviceAccessOverrideResponse {}
export interface DeleteMobileDeviceAccessRuleRequest {
  OrganizationId: string;
  MobileDeviceAccessRuleId: string;
}
export interface DeleteMobileDeviceAccessRuleResponse {}
export interface DeleteOrganizationRequest {
  ClientToken?: string;
  OrganizationId: string;
  DeleteDirectory: boolean;
  ForceDelete?: boolean;
  DeleteIdentityCenterApplication?: boolean;
}
export interface DeleteOrganizationResponse {
  OrganizationId?: string;
  State?: string;
}
export interface DeletePersonalAccessTokenRequest {
  OrganizationId: string;
  PersonalAccessTokenId: string;
}
export interface DeletePersonalAccessTokenResponse {}
export interface DeleteResourceRequest {
  OrganizationId: string;
  ResourceId: string;
}
export interface DeleteResourceResponse {}
export interface DeleteRetentionPolicyRequest {
  OrganizationId: string;
  Id: string;
}
export interface DeleteRetentionPolicyResponse {}
export interface DeleteUserRequest {
  OrganizationId: string;
  UserId: string;
}
export interface DeleteUserResponse {}
export interface DeregisterFromWorkMailRequest {
  OrganizationId: string;
  EntityId: string;
}
export interface DeregisterFromWorkMailResponse {}
export interface DeregisterMailDomainRequest {
  OrganizationId: string;
  DomainName: string;
}
export interface DeregisterMailDomainResponse {}
export interface DescribeEmailMonitoringConfigurationRequest {
  OrganizationId: string;
}
export interface DescribeEmailMonitoringConfigurationResponse {
  RoleArn?: string;
  LogGroupArn?: string;
}
export interface DescribeEntityRequest {
  OrganizationId: string;
  Email: string;
}
export interface DescribeEntityResponse {
  EntityId?: string;
  Name?: string;
  Type?: EntityType;
}
export interface DescribeGroupRequest {
  OrganizationId: string;
  GroupId: string;
}
export interface DescribeGroupResponse {
  GroupId?: string;
  Name?: string;
  Email?: string;
  State?: EntityState;
  EnabledDate?: Date | string;
  DisabledDate?: Date | string;
  HiddenFromGlobalAddressList?: boolean;
}
export interface DescribeIdentityProviderConfigurationRequest {
  OrganizationId: string;
}
export interface DescribeIdentityProviderConfigurationResponse {
  AuthenticationMode?: IdentityProviderAuthenticationMode;
  IdentityCenterConfiguration?: IdentityCenterConfiguration;
  PersonalAccessTokenConfiguration?: PersonalAccessTokenConfiguration;
}
export interface DescribeInboundDmarcSettingsRequest {
  OrganizationId: string;
}
export interface DescribeInboundDmarcSettingsResponse {
  Enforced?: boolean;
}
export interface DescribeMailboxExportJobRequest {
  JobId: string;
  OrganizationId: string;
}
export interface DescribeMailboxExportJobResponse {
  EntityId?: string;
  Description?: string;
  RoleArn?: string;
  KmsKeyArn?: string;
  S3BucketName?: string;
  S3Prefix?: string;
  S3Path?: string;
  EstimatedProgress?: number;
  State?: MailboxExportJobState;
  ErrorInfo?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export interface DescribeOrganizationRequest {
  OrganizationId: string;
}
export interface DescribeOrganizationResponse {
  OrganizationId?: string;
  Alias?: string;
  State?: string;
  DirectoryId?: string;
  DirectoryType?: string;
  DefaultMailDomain?: string;
  CompletedDate?: Date | string;
  ErrorMessage?: string;
  ARN?: string;
  MigrationAdmin?: string;
  InteroperabilityEnabled?: boolean;
}
export interface DescribeResourceRequest {
  OrganizationId: string;
  ResourceId: string;
}
export interface DescribeResourceResponse {
  ResourceId?: string;
  Email?: string;
  Name?: string;
  Type?: ResourceType;
  BookingOptions?: BookingOptions;
  State?: EntityState;
  EnabledDate?: Date | string;
  DisabledDate?: Date | string;
  Description?: string;
  HiddenFromGlobalAddressList?: boolean;
}
export interface DescribeUserRequest {
  OrganizationId: string;
  UserId: string;
}
export interface DescribeUserResponse {
  UserId?: string;
  Name?: string;
  Email?: string;
  DisplayName?: string;
  State?: EntityState;
  UserRole?: UserRole;
  EnabledDate?: Date | string;
  DisabledDate?: Date | string;
  MailboxProvisionedDate?: Date | string;
  MailboxDeprovisionedDate?: Date | string;
  FirstName?: string;
  LastName?: string;
  HiddenFromGlobalAddressList?: boolean;
  Initials?: string;
  Telephone?: string;
  Street?: string;
  JobTitle?: string;
  City?: string;
  Company?: string;
  ZipCode?: string;
  Department?: string;
  Country?: string;
  Office?: string;
  IdentityProviderUserId?: string;
  IdentityProviderIdentityStoreId?: string;
}
export type Description = string;

export type DeviceId = string;

export type DeviceModel = string;

export type DeviceModelList = Array<string>;
export type DeviceOperatingSystem = string;

export type DeviceOperatingSystemList = Array<string>;
export type DeviceType = string;

export type DeviceTypeList = Array<string>;
export type DeviceUserAgent = string;

export type DeviceUserAgentList = Array<string>;
export type DirectoryId = string;

export declare class DirectoryInUseException extends EffectData.TaggedError(
  "DirectoryInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class DirectoryServiceAuthenticationFailedException extends EffectData.TaggedError(
  "DirectoryServiceAuthenticationFailedException",
)<{
  readonly Message?: string;
}> {}
export declare class DirectoryUnavailableException extends EffectData.TaggedError(
  "DirectoryUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface DisassociateDelegateFromResourceRequest {
  OrganizationId: string;
  ResourceId: string;
  EntityId: string;
}
export interface DisassociateDelegateFromResourceResponse {}
export interface DisassociateMemberFromGroupRequest {
  OrganizationId: string;
  GroupId: string;
  MemberId: string;
}
export interface DisassociateMemberFromGroupResponse {}
export interface DnsRecord {
  Type?: string;
  Hostname?: string;
  Value?: string;
}
export type DnsRecords = Array<DnsRecord>;
export type DnsRecordVerificationStatus = "PENDING" | "VERIFIED" | "FAILED";
export interface Domain {
  DomainName: string;
  HostedZoneId?: string;
}
export type DomainName = string;

export type Domains = Array<Domain>;
export type EmailAddress = string;

export declare class EmailAddressInUseException extends EffectData.TaggedError(
  "EmailAddressInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class EntityAlreadyRegisteredException extends EffectData.TaggedError(
  "EntityAlreadyRegisteredException",
)<{
  readonly Message?: string;
}> {}
export type EntityIdentifier = string;

export declare class EntityNotFoundException extends EffectData.TaggedError(
  "EntityNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type EntityState = "ENABLED" | "DISABLED" | "DELETED";
export declare class EntityStateException extends EffectData.TaggedError(
  "EntityStateException",
)<{
  readonly Message?: string;
}> {}
export type EntityType = "GROUP" | "USER" | "RESOURCE";
export interface EwsAvailabilityProvider {
  EwsEndpoint: string;
  EwsUsername: string;
  EwsPassword: string;
}
export type ExpiresIn = number;

export type ExternalUserName = string;

export interface FolderConfiguration {
  Name: FolderName;
  Action: RetentionAction;
  Period?: number;
}
export type FolderConfigurations = Array<FolderConfiguration>;
export type FolderName =
  | "INBOX"
  | "DELETED_ITEMS"
  | "SENT_ITEMS"
  | "DRAFTS"
  | "JUNK_EMAIL";
export interface GetAccessControlEffectRequest {
  OrganizationId: string;
  IpAddress: string;
  Action: string;
  UserId?: string;
  ImpersonationRoleId?: string;
}
export interface GetAccessControlEffectResponse {
  Effect?: AccessControlRuleEffect;
  MatchedRules?: Array<string>;
}
export interface GetDefaultRetentionPolicyRequest {
  OrganizationId: string;
}
export interface GetDefaultRetentionPolicyResponse {
  Id?: string;
  Name?: string;
  Description?: string;
  FolderConfigurations?: Array<FolderConfiguration>;
}
export interface GetImpersonationRoleEffectRequest {
  OrganizationId: string;
  ImpersonationRoleId: string;
  TargetUser: string;
}
export interface GetImpersonationRoleEffectResponse {
  Type?: ImpersonationRoleType;
  Effect?: AccessEffect;
  MatchedRules?: Array<ImpersonationMatchedRule>;
}
export interface GetImpersonationRoleRequest {
  OrganizationId: string;
  ImpersonationRoleId: string;
}
export interface GetImpersonationRoleResponse {
  ImpersonationRoleId?: string;
  Name?: string;
  Type?: ImpersonationRoleType;
  Description?: string;
  Rules?: Array<ImpersonationRule>;
  DateCreated?: Date | string;
  DateModified?: Date | string;
}
export interface GetMailboxDetailsRequest {
  OrganizationId: string;
  UserId: string;
}
export interface GetMailboxDetailsResponse {
  MailboxQuota?: number;
  MailboxSize?: number;
}
export interface GetMailDomainRequest {
  OrganizationId: string;
  DomainName: string;
}
export interface GetMailDomainResponse {
  Records?: Array<DnsRecord>;
  IsTestDomain?: boolean;
  IsDefault?: boolean;
  OwnershipVerificationStatus?: DnsRecordVerificationStatus;
  DkimVerificationStatus?: DnsRecordVerificationStatus;
}
export interface GetMobileDeviceAccessEffectRequest {
  OrganizationId: string;
  DeviceType?: string;
  DeviceModel?: string;
  DeviceOperatingSystem?: string;
  DeviceUserAgent?: string;
}
export interface GetMobileDeviceAccessEffectResponse {
  Effect?: MobileDeviceAccessRuleEffect;
  MatchedRules?: Array<MobileDeviceAccessMatchedRule>;
}
export interface GetMobileDeviceAccessOverrideRequest {
  OrganizationId: string;
  UserId: string;
  DeviceId: string;
}
export interface GetMobileDeviceAccessOverrideResponse {
  UserId?: string;
  DeviceId?: string;
  Effect?: MobileDeviceAccessRuleEffect;
  Description?: string;
  DateCreated?: Date | string;
  DateModified?: Date | string;
}
export interface GetPersonalAccessTokenMetadataRequest {
  OrganizationId: string;
  PersonalAccessTokenId: string;
}
export interface GetPersonalAccessTokenMetadataResponse {
  PersonalAccessTokenId?: string;
  UserId?: string;
  Name?: string;
  DateCreated?: Date | string;
  DateLastUsed?: Date | string;
  ExpiresTime?: Date | string;
  Scopes?: Array<string>;
}
export interface Group {
  Id?: string;
  Email?: string;
  Name?: string;
  State?: EntityState;
  EnabledDate?: Date | string;
  DisabledDate?: Date | string;
}
export interface GroupIdentifier {
  GroupId?: string;
  GroupName?: string;
}
export type GroupIdentifiers = Array<GroupIdentifier>;
export type GroupName = string;

export type Groups = Array<Group>;
export type HostedZoneId = string;

export type IdempotencyClientToken = string;

export type IdentityCenterApplicationName = string;

export interface IdentityCenterConfiguration {
  InstanceArn: string;
  ApplicationArn: string;
}
export type IdentityProviderAuthenticationMode =
  | "IDENTITY_PROVIDER_ONLY"
  | "IDENTITY_PROVIDER_AND_DIRECTORY";
export type IdentityProviderIdentityStoreId = string;

export type IdentityProviderUserId = string;

export type IdentityProviderUserIdForUpdate = string;

export type IdentityProviderUserIdPrefix = string;

export interface ImpersonationMatchedRule {
  ImpersonationRuleId?: string;
  Name?: string;
}
export type ImpersonationMatchedRuleList = Array<ImpersonationMatchedRule>;
export interface ImpersonationRole {
  ImpersonationRoleId?: string;
  Name?: string;
  Type?: ImpersonationRoleType;
  DateCreated?: Date | string;
  DateModified?: Date | string;
}
export type ImpersonationRoleDescription = string;

export type ImpersonationRoleId = string;

export type ImpersonationRoleIdList = Array<string>;
export type ImpersonationRoleList = Array<ImpersonationRole>;
export type ImpersonationRoleName = string;

export type ImpersonationRoleType = "FULL_ACCESS" | "READ_ONLY";
export interface ImpersonationRule {
  ImpersonationRuleId: string;
  Name?: string;
  Description?: string;
  Effect: AccessEffect;
  TargetUsers?: Array<string>;
  NotTargetUsers?: Array<string>;
}
export type ImpersonationRuleDescription = string;

export type ImpersonationRuleId = string;

export type ImpersonationRuleList = Array<ImpersonationRule>;
export type ImpersonationRuleName = string;

export type ImpersonationToken = string;

export type InstanceArn = string;

export declare class InvalidConfigurationException extends EffectData.TaggedError(
  "InvalidConfigurationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidCustomSesConfigurationException extends EffectData.TaggedError(
  "InvalidCustomSesConfigurationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidPasswordException extends EffectData.TaggedError(
  "InvalidPasswordException",
)<{
  readonly Message?: string;
}> {}
export type IpAddress = string;

export type IpRange = string;

export type IpRangeList = Array<string>;
export type Jobs = Array<MailboxExportJob>;
export type KmsKeyArn = string;

export type LambdaArn = string;

export interface LambdaAvailabilityProvider {
  LambdaArn: string;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAccessControlRulesRequest {
  OrganizationId: string;
}
export interface ListAccessControlRulesResponse {
  Rules?: Array<AccessControlRule>;
}
export interface ListAliasesRequest {
  OrganizationId: string;
  EntityId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAliasesResponse {
  Aliases?: Array<string>;
  NextToken?: string;
}
export interface ListAvailabilityConfigurationsRequest {
  OrganizationId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAvailabilityConfigurationsResponse {
  AvailabilityConfigurations?: Array<AvailabilityConfiguration>;
  NextToken?: string;
}
export interface ListGroupMembersRequest {
  OrganizationId: string;
  GroupId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGroupMembersResponse {
  Members?: Array<Member>;
  NextToken?: string;
}
export interface ListGroupsFilters {
  NamePrefix?: string;
  PrimaryEmailPrefix?: string;
  State?: EntityState;
}
export interface ListGroupsForEntityFilters {
  GroupNamePrefix?: string;
}
export interface ListGroupsForEntityRequest {
  OrganizationId: string;
  EntityId: string;
  Filters?: ListGroupsForEntityFilters;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGroupsForEntityResponse {
  Groups?: Array<GroupIdentifier>;
  NextToken?: string;
}
export interface ListGroupsRequest {
  OrganizationId: string;
  NextToken?: string;
  MaxResults?: number;
  Filters?: ListGroupsFilters;
}
export interface ListGroupsResponse {
  Groups?: Array<Group>;
  NextToken?: string;
}
export interface ListImpersonationRolesRequest {
  OrganizationId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListImpersonationRolesResponse {
  Roles?: Array<ImpersonationRole>;
  NextToken?: string;
}
export interface ListMailboxExportJobsRequest {
  OrganizationId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMailboxExportJobsResponse {
  Jobs?: Array<MailboxExportJob>;
  NextToken?: string;
}
export interface ListMailboxPermissionsRequest {
  OrganizationId: string;
  EntityId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMailboxPermissionsResponse {
  Permissions?: Array<Permission>;
  NextToken?: string;
}
export interface ListMailDomainsRequest {
  OrganizationId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMailDomainsResponse {
  MailDomains?: Array<MailDomainSummary>;
  NextToken?: string;
}
export interface ListMobileDeviceAccessOverridesRequest {
  OrganizationId: string;
  UserId?: string;
  DeviceId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMobileDeviceAccessOverridesResponse {
  Overrides?: Array<MobileDeviceAccessOverride>;
  NextToken?: string;
}
export interface ListMobileDeviceAccessRulesRequest {
  OrganizationId: string;
}
export interface ListMobileDeviceAccessRulesResponse {
  Rules?: Array<MobileDeviceAccessRule>;
}
export interface ListOrganizationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOrganizationsResponse {
  OrganizationSummaries?: Array<OrganizationSummary>;
  NextToken?: string;
}
export interface ListPersonalAccessTokensRequest {
  OrganizationId: string;
  UserId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPersonalAccessTokensResponse {
  NextToken?: string;
  PersonalAccessTokenSummaries?: Array<PersonalAccessTokenSummary>;
}
export interface ListResourceDelegatesRequest {
  OrganizationId: string;
  ResourceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListResourceDelegatesResponse {
  Delegates?: Array<Delegate>;
  NextToken?: string;
}
export interface ListResourcesFilters {
  NamePrefix?: string;
  PrimaryEmailPrefix?: string;
  State?: EntityState;
}
export interface ListResourcesRequest {
  OrganizationId: string;
  NextToken?: string;
  MaxResults?: number;
  Filters?: ListResourcesFilters;
}
export interface ListResourcesResponse {
  Resources?: Array<Resource>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListUsersFilters {
  UsernamePrefix?: string;
  DisplayNamePrefix?: string;
  PrimaryEmailPrefix?: string;
  State?: EntityState;
  IdentityProviderUserIdPrefix?: string;
}
export interface ListUsersRequest {
  OrganizationId: string;
  NextToken?: string;
  MaxResults?: number;
  Filters?: ListUsersFilters;
}
export interface ListUsersResponse {
  Users?: Array<User>;
  NextToken?: string;
}
export type LogGroupArn = string;

export type MailboxExportErrorInfo = string;

export interface MailboxExportJob {
  JobId?: string;
  EntityId?: string;
  Description?: string;
  S3BucketName?: string;
  S3Path?: string;
  EstimatedProgress?: number;
  State?: MailboxExportJobState;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type MailboxExportJobId = string;

export type MailboxExportJobState =
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED";
export type MailboxQuota = number;

export type MailboxSize = number;

export declare class MailDomainInUseException extends EffectData.TaggedError(
  "MailDomainInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class MailDomainNotFoundException extends EffectData.TaggedError(
  "MailDomainNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type MailDomains = Array<MailDomainSummary>;
export declare class MailDomainStateException extends EffectData.TaggedError(
  "MailDomainStateException",
)<{
  readonly Message?: string;
}> {}
export interface MailDomainSummary {
  DomainName?: string;
  DefaultDomain?: boolean;
}
export type MaxResults = number;

export interface Member {
  Id?: string;
  Name?: string;
  Type?: MemberType;
  State?: EntityState;
  EnabledDate?: Date | string;
  DisabledDate?: Date | string;
}
export type Members = Array<Member>;
export type MemberType = "GROUP" | "USER";
export interface MobileDeviceAccessMatchedRule {
  MobileDeviceAccessRuleId?: string;
  Name?: string;
}
export type MobileDeviceAccessMatchedRuleList =
  Array<MobileDeviceAccessMatchedRule>;
export interface MobileDeviceAccessOverride {
  UserId?: string;
  DeviceId?: string;
  Effect?: MobileDeviceAccessRuleEffect;
  Description?: string;
  DateCreated?: Date | string;
  DateModified?: Date | string;
}
export type MobileDeviceAccessOverridesList = Array<MobileDeviceAccessOverride>;
export interface MobileDeviceAccessRule {
  MobileDeviceAccessRuleId?: string;
  Name?: string;
  Description?: string;
  Effect?: MobileDeviceAccessRuleEffect;
  DeviceTypes?: Array<string>;
  NotDeviceTypes?: Array<string>;
  DeviceModels?: Array<string>;
  NotDeviceModels?: Array<string>;
  DeviceOperatingSystems?: Array<string>;
  NotDeviceOperatingSystems?: Array<string>;
  DeviceUserAgents?: Array<string>;
  NotDeviceUserAgents?: Array<string>;
  DateCreated?: Date | string;
  DateModified?: Date | string;
}
export type MobileDeviceAccessRuleDescription = string;

export type MobileDeviceAccessRuleEffect = "ALLOW" | "DENY";
export type MobileDeviceAccessRuleId = string;

export type MobileDeviceAccessRuleName = string;

export type MobileDeviceAccessRulesList = Array<MobileDeviceAccessRule>;
export declare class NameAvailabilityException extends EffectData.TaggedError(
  "NameAvailabilityException",
)<{
  readonly Message?: string;
}> {}
export type NewResourceDescription = string;

export type NextToken = string;

export type OrganizationId = string;

export type OrganizationName = string;

export declare class OrganizationNotFoundException extends EffectData.TaggedError(
  "OrganizationNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class OrganizationStateException extends EffectData.TaggedError(
  "OrganizationStateException",
)<{
  readonly Message?: string;
}> {}
export type OrganizationSummaries = Array<OrganizationSummary>;
export interface OrganizationSummary {
  OrganizationId?: string;
  Alias?: string;
  DefaultMailDomain?: string;
  ErrorMessage?: string;
  State?: string;
}
export type Password = string;

export type Percentage = number;

export interface Permission {
  GranteeId: string;
  GranteeType: MemberType;
  PermissionValues: Array<PermissionType>;
}
export type Permissions = Array<Permission>;
export type PermissionType = "FULL_ACCESS" | "SEND_AS" | "SEND_ON_BEHALF";
export type PermissionValues = Array<PermissionType>;
export interface PersonalAccessTokenConfiguration {
  Status: PersonalAccessTokenConfigurationStatus;
  LifetimeInDays?: number;
}
export type PersonalAccessTokenConfigurationStatus = "ACTIVE" | "INACTIVE";
export type PersonalAccessTokenId = string;

export type PersonalAccessTokenLifetimeInDays = number;

export type PersonalAccessTokenName = string;

export type PersonalAccessTokenScope = string;

export type PersonalAccessTokenScopeList = Array<string>;
export interface PersonalAccessTokenSummary {
  PersonalAccessTokenId?: string;
  UserId?: string;
  Name?: string;
  DateCreated?: Date | string;
  DateLastUsed?: Date | string;
  ExpiresTime?: Date | string;
  Scopes?: Array<string>;
}
export type PersonalAccessTokenSummaryList = Array<PersonalAccessTokenSummary>;
export type PolicyDescription = string;

export interface PutAccessControlRuleRequest {
  Name: string;
  Effect: AccessControlRuleEffect;
  Description: string;
  IpRanges?: Array<string>;
  NotIpRanges?: Array<string>;
  Actions?: Array<string>;
  NotActions?: Array<string>;
  UserIds?: Array<string>;
  NotUserIds?: Array<string>;
  OrganizationId: string;
  ImpersonationRoleIds?: Array<string>;
  NotImpersonationRoleIds?: Array<string>;
}
export interface PutAccessControlRuleResponse {}
export interface PutEmailMonitoringConfigurationRequest {
  OrganizationId: string;
  RoleArn: string;
  LogGroupArn: string;
}
export interface PutEmailMonitoringConfigurationResponse {}
export interface PutIdentityProviderConfigurationRequest {
  OrganizationId: string;
  AuthenticationMode: IdentityProviderAuthenticationMode;
  IdentityCenterConfiguration: IdentityCenterConfiguration;
  PersonalAccessTokenConfiguration: PersonalAccessTokenConfiguration;
}
export interface PutIdentityProviderConfigurationResponse {}
export interface PutInboundDmarcSettingsRequest {
  OrganizationId: string;
  Enforced: boolean;
}
export interface PutInboundDmarcSettingsResponse {}
export interface PutMailboxPermissionsRequest {
  OrganizationId: string;
  EntityId: string;
  GranteeId: string;
  PermissionValues: Array<PermissionType>;
}
export interface PutMailboxPermissionsResponse {}
export interface PutMobileDeviceAccessOverrideRequest {
  OrganizationId: string;
  UserId: string;
  DeviceId: string;
  Effect: MobileDeviceAccessRuleEffect;
  Description?: string;
}
export interface PutMobileDeviceAccessOverrideResponse {}
export interface PutRetentionPolicyRequest {
  OrganizationId: string;
  Id?: string;
  Name: string;
  Description?: string;
  FolderConfigurations: Array<FolderConfiguration>;
}
export interface PutRetentionPolicyResponse {}
export interface RedactedEwsAvailabilityProvider {
  EwsEndpoint?: string;
  EwsUsername?: string;
}
export interface RegisterMailDomainRequest {
  ClientToken?: string;
  OrganizationId: string;
  DomainName: string;
}
export interface RegisterMailDomainResponse {}
export interface RegisterToWorkMailRequest {
  OrganizationId: string;
  EntityId: string;
  Email: string;
}
export interface RegisterToWorkMailResponse {}
export declare class ReservedNameException extends EffectData.TaggedError(
  "ReservedNameException",
)<{
  readonly Message?: string;
}> {}
export interface ResetPasswordRequest {
  OrganizationId: string;
  UserId: string;
  Password: string;
}
export interface ResetPasswordResponse {}
export interface Resource {
  Id?: string;
  Email?: string;
  Name?: string;
  Type?: ResourceType;
  State?: EntityState;
  EnabledDate?: Date | string;
  DisabledDate?: Date | string;
  Description?: string;
}
export type ResourceDelegates = Array<Delegate>;
export type ResourceDescription = string;

export type ResourceId = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Resources = Array<Resource>;
export type ResourceType = "ROOM" | "EQUIPMENT";
export type RetentionAction = "NONE" | "DELETE" | "PERMANENTLY_DELETE";
export type RetentionPeriod = number;

export type RoleArn = string;

export type S3BucketName = string;

export type S3ObjectKey = string;

export type ShortString = string;

export interface StartMailboxExportJobRequest {
  ClientToken: string;
  OrganizationId: string;
  EntityId: string;
  Description?: string;
  RoleArn: string;
  KmsKeyArn: string;
  S3BucketName: string;
  S3Prefix: string;
}
export interface StartMailboxExportJobResponse {
  JobId?: string;
}
export type WorkmailString = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TargetUsers = Array<string>;
export interface TestAvailabilityConfigurationRequest {
  OrganizationId: string;
  DomainName?: string;
  EwsProvider?: EwsAvailabilityProvider;
  LambdaProvider?: LambdaAvailabilityProvider;
}
export interface TestAvailabilityConfigurationResponse {
  TestPassed?: boolean;
  FailureReason?: string;
}
export type Timestamp = Date | string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAvailabilityConfigurationRequest {
  OrganizationId: string;
  DomainName: string;
  EwsProvider?: EwsAvailabilityProvider;
  LambdaProvider?: LambdaAvailabilityProvider;
}
export interface UpdateAvailabilityConfigurationResponse {}
export interface UpdateDefaultMailDomainRequest {
  OrganizationId: string;
  DomainName: string;
}
export interface UpdateDefaultMailDomainResponse {}
export interface UpdateGroupRequest {
  OrganizationId: string;
  GroupId: string;
  HiddenFromGlobalAddressList?: boolean;
}
export interface UpdateGroupResponse {}
export interface UpdateImpersonationRoleRequest {
  OrganizationId: string;
  ImpersonationRoleId: string;
  Name: string;
  Type: ImpersonationRoleType;
  Description?: string;
  Rules: Array<ImpersonationRule>;
}
export interface UpdateImpersonationRoleResponse {}
export interface UpdateMailboxQuotaRequest {
  OrganizationId: string;
  UserId: string;
  MailboxQuota: number;
}
export interface UpdateMailboxQuotaResponse {}
export interface UpdateMobileDeviceAccessRuleRequest {
  OrganizationId: string;
  MobileDeviceAccessRuleId: string;
  Name: string;
  Description?: string;
  Effect: MobileDeviceAccessRuleEffect;
  DeviceTypes?: Array<string>;
  NotDeviceTypes?: Array<string>;
  DeviceModels?: Array<string>;
  NotDeviceModels?: Array<string>;
  DeviceOperatingSystems?: Array<string>;
  NotDeviceOperatingSystems?: Array<string>;
  DeviceUserAgents?: Array<string>;
  NotDeviceUserAgents?: Array<string>;
}
export interface UpdateMobileDeviceAccessRuleResponse {}
export interface UpdatePrimaryEmailAddressRequest {
  OrganizationId: string;
  EntityId: string;
  Email: string;
}
export interface UpdatePrimaryEmailAddressResponse {}
export interface UpdateResourceRequest {
  OrganizationId: string;
  ResourceId: string;
  Name?: string;
  BookingOptions?: BookingOptions;
  Description?: string;
  Type?: ResourceType;
  HiddenFromGlobalAddressList?: boolean;
}
export interface UpdateResourceResponse {}
export interface UpdateUserRequest {
  OrganizationId: string;
  UserId: string;
  Role?: UserRole;
  DisplayName?: string;
  FirstName?: string;
  LastName?: string;
  HiddenFromGlobalAddressList?: boolean;
  Initials?: string;
  Telephone?: string;
  Street?: string;
  JobTitle?: string;
  City?: string;
  Company?: string;
  ZipCode?: string;
  Department?: string;
  Country?: string;
  Office?: string;
  IdentityProviderUserId?: string;
}
export interface UpdateUserResponse {}
export type Url = string;

export interface User {
  Id?: string;
  Email?: string;
  Name?: string;
  DisplayName?: string;
  State?: EntityState;
  UserRole?: UserRole;
  EnabledDate?: Date | string;
  DisabledDate?: Date | string;
  IdentityProviderUserId?: string;
  IdentityProviderIdentityStoreId?: string;
}
export type UserAttribute = string;

export type UserIdList = Array<string>;
export type UserName = string;

export type UserRole = "USER" | "RESOURCE" | "SYSTEM_USER" | "REMOTE_USER";
export type Users = Array<User>;
export type WorkMailDomainName = string;

export type WorkMailIdentifier = string;

export declare namespace AssociateDelegateToResource {
  export type Input = AssociateDelegateToResourceRequest;
  export type Output = AssociateDelegateToResourceResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace AssociateMemberToGroup {
  export type Input = AssociateMemberToGroupRequest;
  export type Output = AssociateMemberToGroupResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace AssumeImpersonationRole {
  export type Input = AssumeImpersonationRoleRequest;
  export type Output = AssumeImpersonationRoleResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CancelMailboxExportJob {
  export type Input = CancelMailboxExportJobRequest;
  export type Output = CancelMailboxExportJobResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace CreateAlias {
  export type Input = CreateAliasRequest;
  export type Output = CreateAliasResponse;
  export type Error =
    | EmailAddressInUseException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | LimitExceededException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace CreateAvailabilityConfiguration {
  export type Input = CreateAvailabilityConfigurationRequest;
  export type Output = CreateAvailabilityConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = CreateGroupResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | InvalidParameterException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ReservedNameException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateIdentityCenterApplication {
  export type Input = CreateIdentityCenterApplicationRequest;
  export type Output = CreateIdentityCenterApplicationResponse;
  export type Error = InvalidParameterException | CommonAwsError;
}

export declare namespace CreateImpersonationRole {
  export type Input = CreateImpersonationRoleRequest;
  export type Output = CreateImpersonationRoleResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace CreateMobileDeviceAccessRule {
  export type Input = CreateMobileDeviceAccessRuleRequest;
  export type Output = CreateMobileDeviceAccessRuleResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace CreateOrganization {
  export type Input = CreateOrganizationRequest;
  export type Output = CreateOrganizationResponse;
  export type Error =
    | DirectoryInUseException
    | DirectoryUnavailableException
    | InvalidParameterException
    | LimitExceededException
    | NameAvailabilityException
    | CommonAwsError;
}

export declare namespace CreateResource {
  export type Input = CreateResourceRequest;
  export type Output = CreateResourceResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | InvalidParameterException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ReservedNameException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | InvalidParameterException
    | InvalidPasswordException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ReservedNameException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteAccessControlRule {
  export type Input = DeleteAccessControlRuleRequest;
  export type Output = DeleteAccessControlRuleResponse;
  export type Error =
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteAlias {
  export type Input = DeleteAliasRequest;
  export type Output = DeleteAliasResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteAvailabilityConfiguration {
  export type Input = DeleteAvailabilityConfigurationRequest;
  export type Output = DeleteAvailabilityConfigurationResponse;
  export type Error =
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteEmailMonitoringConfiguration {
  export type Input = DeleteEmailMonitoringConfigurationRequest;
  export type Output = DeleteEmailMonitoringConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = DeleteGroupResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteIdentityCenterApplication {
  export type Input = DeleteIdentityCenterApplicationRequest;
  export type Output = DeleteIdentityCenterApplicationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteIdentityProviderConfiguration {
  export type Input = DeleteIdentityProviderConfigurationRequest;
  export type Output = DeleteIdentityProviderConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteImpersonationRole {
  export type Input = DeleteImpersonationRoleRequest;
  export type Output = DeleteImpersonationRoleResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteMailboxPermissions {
  export type Input = DeleteMailboxPermissionsRequest;
  export type Output = DeleteMailboxPermissionsResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteMobileDeviceAccessOverride {
  export type Input = DeleteMobileDeviceAccessOverrideRequest;
  export type Output = DeleteMobileDeviceAccessOverrideResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteMobileDeviceAccessRule {
  export type Input = DeleteMobileDeviceAccessRuleRequest;
  export type Output = DeleteMobileDeviceAccessRuleResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteOrganization {
  export type Input = DeleteOrganizationRequest;
  export type Output = DeleteOrganizationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeletePersonalAccessToken {
  export type Input = DeletePersonalAccessTokenRequest;
  export type Output = DeletePersonalAccessTokenResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteResource {
  export type Input = DeleteResourceRequest;
  export type Output = DeleteResourceResponse;
  export type Error =
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteRetentionPolicy {
  export type Input = DeleteRetentionPolicyRequest;
  export type Output = DeleteRetentionPolicyResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeregisterFromWorkMail {
  export type Input = DeregisterFromWorkMailRequest;
  export type Output = DeregisterFromWorkMailResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DeregisterMailDomain {
  export type Input = DeregisterMailDomainRequest;
  export type Output = DeregisterMailDomainResponse;
  export type Error =
    | InvalidCustomSesConfigurationException
    | InvalidParameterException
    | MailDomainInUseException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DescribeEmailMonitoringConfiguration {
  export type Input = DescribeEmailMonitoringConfigurationRequest;
  export type Output = DescribeEmailMonitoringConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEntity {
  export type Input = DescribeEntityRequest;
  export type Output = DescribeEntityResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DescribeGroup {
  export type Input = DescribeGroupRequest;
  export type Output = DescribeGroupResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DescribeIdentityProviderConfiguration {
  export type Input = DescribeIdentityProviderConfigurationRequest;
  export type Output = DescribeIdentityProviderConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeInboundDmarcSettings {
  export type Input = DescribeInboundDmarcSettingsRequest;
  export type Output = DescribeInboundDmarcSettingsResponse;
  export type Error =
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DescribeMailboxExportJob {
  export type Input = DescribeMailboxExportJobRequest;
  export type Output = DescribeMailboxExportJobResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DescribeOrganization {
  export type Input = DescribeOrganizationRequest;
  export type Output = DescribeOrganizationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeResource {
  export type Input = DescribeResourceRequest;
  export type Output = DescribeResourceResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeUser {
  export type Input = DescribeUserRequest;
  export type Output = DescribeUserResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace DisassociateDelegateFromResource {
  export type Input = DisassociateDelegateFromResourceRequest;
  export type Output = DisassociateDelegateFromResourceResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DisassociateMemberFromGroup {
  export type Input = DisassociateMemberFromGroupRequest;
  export type Output = DisassociateMemberFromGroupResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace GetAccessControlEffect {
  export type Input = GetAccessControlEffectRequest;
  export type Output = GetAccessControlEffectResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDefaultRetentionPolicy {
  export type Input = GetDefaultRetentionPolicyRequest;
  export type Output = GetDefaultRetentionPolicyResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace GetImpersonationRole {
  export type Input = GetImpersonationRoleRequest;
  export type Output = GetImpersonationRoleResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetImpersonationRoleEffect {
  export type Input = GetImpersonationRoleEffectRequest;
  export type Output = GetImpersonationRoleEffectResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMailboxDetails {
  export type Input = GetMailboxDetailsRequest;
  export type Output = GetMailboxDetailsResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace GetMailDomain {
  export type Input = GetMailDomainRequest;
  export type Output = GetMailDomainResponse;
  export type Error =
    | InvalidParameterException
    | MailDomainNotFoundException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace GetMobileDeviceAccessEffect {
  export type Input = GetMobileDeviceAccessEffectRequest;
  export type Output = GetMobileDeviceAccessEffectResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace GetMobileDeviceAccessOverride {
  export type Input = GetMobileDeviceAccessOverrideRequest;
  export type Output = GetMobileDeviceAccessOverrideResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPersonalAccessTokenMetadata {
  export type Input = GetPersonalAccessTokenMetadataRequest;
  export type Output = GetPersonalAccessTokenMetadataResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAccessControlRules {
  export type Input = ListAccessControlRulesRequest;
  export type Output = ListAccessControlRulesResponse;
  export type Error =
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListAliases {
  export type Input = ListAliasesRequest;
  export type Output = ListAliasesResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListAvailabilityConfigurations {
  export type Input = ListAvailabilityConfigurationsRequest;
  export type Output = ListAvailabilityConfigurationsResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListGroupMembers {
  export type Input = ListGroupMembersRequest;
  export type Output = ListGroupMembersResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = ListGroupsResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListGroupsForEntity {
  export type Input = ListGroupsForEntityRequest;
  export type Output = ListGroupsForEntityResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListImpersonationRoles {
  export type Input = ListImpersonationRolesRequest;
  export type Output = ListImpersonationRolesResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListMailboxExportJobs {
  export type Input = ListMailboxExportJobsRequest;
  export type Output = ListMailboxExportJobsResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListMailboxPermissions {
  export type Input = ListMailboxPermissionsRequest;
  export type Output = ListMailboxPermissionsResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListMailDomains {
  export type Input = ListMailDomainsRequest;
  export type Output = ListMailDomainsResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListMobileDeviceAccessOverrides {
  export type Input = ListMobileDeviceAccessOverridesRequest;
  export type Output = ListMobileDeviceAccessOverridesResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListMobileDeviceAccessRules {
  export type Input = ListMobileDeviceAccessRulesRequest;
  export type Output = ListMobileDeviceAccessRulesResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListOrganizations {
  export type Input = ListOrganizationsRequest;
  export type Output = ListOrganizationsResponse;
  export type Error = InvalidParameterException | CommonAwsError;
}

export declare namespace ListPersonalAccessTokens {
  export type Input = ListPersonalAccessTokensRequest;
  export type Output = ListPersonalAccessTokensResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ListResourceDelegates {
  export type Input = ListResourceDelegatesRequest;
  export type Output = ListResourceDelegatesResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListResources {
  export type Input = ListResourcesRequest;
  export type Output = ListResourcesResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace PutAccessControlRule {
  export type Input = PutAccessControlRuleRequest;
  export type Output = PutAccessControlRuleResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutEmailMonitoringConfiguration {
  export type Input = PutEmailMonitoringConfigurationRequest;
  export type Output = PutEmailMonitoringConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutIdentityProviderConfiguration {
  export type Input = PutIdentityProviderConfigurationRequest;
  export type Output = PutIdentityProviderConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutInboundDmarcSettings {
  export type Input = PutInboundDmarcSettingsRequest;
  export type Output = PutInboundDmarcSettingsResponse;
  export type Error =
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace PutMailboxPermissions {
  export type Input = PutMailboxPermissionsRequest;
  export type Output = PutMailboxPermissionsResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace PutMobileDeviceAccessOverride {
  export type Input = PutMobileDeviceAccessOverrideRequest;
  export type Output = PutMobileDeviceAccessOverrideResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace PutRetentionPolicy {
  export type Input = PutRetentionPolicyRequest;
  export type Output = PutRetentionPolicyResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace RegisterMailDomain {
  export type Input = RegisterMailDomainRequest;
  export type Output = RegisterMailDomainResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | MailDomainInUseException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace RegisterToWorkMail {
  export type Input = RegisterToWorkMailRequest;
  export type Output = RegisterToWorkMailResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EmailAddressInUseException
    | EntityAlreadyRegisteredException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace ResetPassword {
  export type Input = ResetPasswordRequest;
  export type Output = ResetPasswordResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | InvalidPasswordException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartMailboxExportJob {
  export type Input = StartMailboxExportJobRequest;
  export type Output = StartMailboxExportJobResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationStateException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace TestAvailabilityConfiguration {
  export type Input = TestAvailabilityConfigurationRequest;
  export type Output = TestAvailabilityConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UpdateAvailabilityConfiguration {
  export type Input = UpdateAvailabilityConfigurationRequest;
  export type Output = UpdateAvailabilityConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDefaultMailDomain {
  export type Input = UpdateDefaultMailDomainRequest;
  export type Output = UpdateDefaultMailDomainResponse;
  export type Error =
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = UpdateGroupResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateImpersonationRole {
  export type Input = UpdateImpersonationRoleRequest;
  export type Output = UpdateImpersonationRoleResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | LimitExceededException
    | OrganizationNotFoundException
    | OrganizationStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMailboxQuota {
  export type Input = UpdateMailboxQuotaRequest;
  export type Output = UpdateMailboxQuotaResponse;
  export type Error =
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace UpdateMobileDeviceAccessRule {
  export type Input = UpdateMobileDeviceAccessRuleRequest;
  export type Output = UpdateMobileDeviceAccessRuleResponse;
  export type Error =
    | EntityNotFoundException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | CommonAwsError;
}

export declare namespace UpdatePrimaryEmailAddress {
  export type Input = UpdatePrimaryEmailAddressRequest;
  export type Output = UpdatePrimaryEmailAddressResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EmailAddressInUseException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateResource {
  export type Input = UpdateResourceRequest;
  export type Output = UpdateResourceResponse;
  export type Error =
    | DirectoryUnavailableException
    | EmailAddressInUseException
    | EntityNotFoundException
    | EntityStateException
    | InvalidConfigurationException
    | InvalidParameterException
    | MailDomainNotFoundException
    | MailDomainStateException
    | NameAvailabilityException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | DirectoryServiceAuthenticationFailedException
    | DirectoryUnavailableException
    | EntityNotFoundException
    | EntityStateException
    | InvalidParameterException
    | OrganizationNotFoundException
    | OrganizationStateException
    | UnsupportedOperationException
    | CommonAwsError;
}
