import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSIdentityManagementV20100508 {
  addClientIDToOpenIDConnectProvider(
    input: AddClientIDToOpenIDConnectProviderRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  addRoleToInstanceProfile(
    input: AddRoleToInstanceProfileRequest,
  ): Effect.Effect<
    {},
    EntityAlreadyExistsException | LimitExceededException | NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  addUserToGroup(
    input: AddUserToGroupRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  attachGroupPolicy(
    input: AttachGroupPolicyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | PolicyNotAttachableException | ServiceFailureException | CommonAwsError
  >;
  attachRolePolicy(
    input: AttachRolePolicyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | PolicyNotAttachableException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  attachUserPolicy(
    input: AttachUserPolicyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | PolicyNotAttachableException | ServiceFailureException | CommonAwsError
  >;
  changePassword(
    input: ChangePasswordRequest,
  ): Effect.Effect<
    {},
    EntityTemporarilyUnmodifiableException | InvalidUserTypeException | LimitExceededException | NoSuchEntityException | PasswordPolicyViolationException | ServiceFailureException | CommonAwsError
  >;
  createAccessKey(
    input: CreateAccessKeyRequest,
  ): Effect.Effect<
    CreateAccessKeyResponse,
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  createAccountAlias(
    input: CreateAccountAliasRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | EntityAlreadyExistsException | LimitExceededException | ServiceFailureException | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResponse,
    EntityAlreadyExistsException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  createInstanceProfile(
    input: CreateInstanceProfileRequest,
  ): Effect.Effect<
    CreateInstanceProfileResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | LimitExceededException | ServiceFailureException | CommonAwsError
  >;
  createLoginProfile(
    input: CreateLoginProfileRequest,
  ): Effect.Effect<
    CreateLoginProfileResponse,
    EntityAlreadyExistsException | LimitExceededException | NoSuchEntityException | PasswordPolicyViolationException | ServiceFailureException | CommonAwsError
  >;
  createOpenIDConnectProvider(
    input: CreateOpenIDConnectProviderRequest,
  ): Effect.Effect<
    CreateOpenIDConnectProviderResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | LimitExceededException | OpenIdIdpCommunicationErrorException | ServiceFailureException | CommonAwsError
  >;
  createPolicy(
    input: CreatePolicyRequest,
  ): Effect.Effect<
    CreatePolicyResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | LimitExceededException | MalformedPolicyDocumentException | ServiceFailureException | CommonAwsError
  >;
  createPolicyVersion(
    input: CreatePolicyVersionRequest,
  ): Effect.Effect<
    CreatePolicyVersionResponse,
    InvalidInputException | LimitExceededException | MalformedPolicyDocumentException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  createRole(
    input: CreateRoleRequest,
  ): Effect.Effect<
    CreateRoleResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | LimitExceededException | MalformedPolicyDocumentException | ServiceFailureException | CommonAwsError
  >;
  createSAMLProvider(
    input: CreateSAMLProviderRequest,
  ): Effect.Effect<
    CreateSAMLProviderResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | LimitExceededException | ServiceFailureException | CommonAwsError
  >;
  createServiceLinkedRole(
    input: CreateServiceLinkedRoleRequest,
  ): Effect.Effect<
    CreateServiceLinkedRoleResponse,
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  createServiceSpecificCredential(
    input: CreateServiceSpecificCredentialRequest,
  ): Effect.Effect<
    CreateServiceSpecificCredentialResponse,
    LimitExceededException | NoSuchEntityException | ServiceNotSupportedException | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  createVirtualMFADevice(
    input: CreateVirtualMFADeviceRequest,
  ): Effect.Effect<
    CreateVirtualMFADeviceResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | LimitExceededException | ServiceFailureException | CommonAwsError
  >;
  deactivateMFADevice(
    input: DeactivateMFADeviceRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | EntityTemporarilyUnmodifiableException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteAccessKey(
    input: DeleteAccessKeyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteAccountAlias(
    input: DeleteAccountAliasRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteAccountPasswordPolicy(
    input: {},
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteGroupPolicy(
    input: DeleteGroupPolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteInstanceProfile(
    input: DeleteInstanceProfileRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteLoginProfile(
    input: DeleteLoginProfileRequest,
  ): Effect.Effect<
    {},
    EntityTemporarilyUnmodifiableException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteOpenIDConnectProvider(
    input: DeleteOpenIDConnectProviderRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deletePolicyVersion(
    input: DeletePolicyVersionRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteRole(
    input: DeleteRoleRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | DeleteConflictException | LimitExceededException | NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  deleteRolePermissionsBoundary(
    input: DeleteRolePermissionsBoundaryRequest,
  ): Effect.Effect<
    {},
    NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  deleteRolePolicy(
    input: DeleteRolePolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  deleteSAMLProvider(
    input: DeleteSAMLProviderRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteSSHPublicKey(
    input: DeleteSSHPublicKeyRequest,
  ): Effect.Effect<
    {},
    NoSuchEntityException | CommonAwsError
  >;
  deleteServerCertificate(
    input: DeleteServerCertificateRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteServiceLinkedRole(
    input: DeleteServiceLinkedRoleRequest,
  ): Effect.Effect<
    DeleteServiceLinkedRoleResponse,
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteServiceSpecificCredential(
    input: DeleteServiceSpecificCredentialRequest,
  ): Effect.Effect<
    {},
    NoSuchEntityException | CommonAwsError
  >;
  deleteSigningCertificate(
    input: DeleteSigningCertificateRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | DeleteConflictException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteUserPermissionsBoundary(
    input: DeleteUserPermissionsBoundaryRequest,
  ): Effect.Effect<
    {},
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteUserPolicy(
    input: DeleteUserPolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  deleteVirtualMFADevice(
    input: DeleteVirtualMFADeviceRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | DeleteConflictException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  detachGroupPolicy(
    input: DetachGroupPolicyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  detachRolePolicy(
    input: DetachRolePolicyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  detachUserPolicy(
    input: DetachUserPolicyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  disableOrganizationsRootCredentialsManagement(
    input: DisableOrganizationsRootCredentialsManagementRequest,
  ): Effect.Effect<
    DisableOrganizationsRootCredentialsManagementResponse,
    AccountNotManagementOrDelegatedAdministratorException | OrganizationNotFoundException | OrganizationNotInAllFeaturesModeException | ServiceAccessNotEnabledException | CommonAwsError
  >;
  disableOrganizationsRootSessions(
    input: DisableOrganizationsRootSessionsRequest,
  ): Effect.Effect<
    DisableOrganizationsRootSessionsResponse,
    AccountNotManagementOrDelegatedAdministratorException | OrganizationNotFoundException | OrganizationNotInAllFeaturesModeException | ServiceAccessNotEnabledException | CommonAwsError
  >;
  enableMFADevice(
    input: EnableMFADeviceRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | EntityAlreadyExistsException | EntityTemporarilyUnmodifiableException | InvalidAuthenticationCodeException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  enableOrganizationsRootCredentialsManagement(
    input: EnableOrganizationsRootCredentialsManagementRequest,
  ): Effect.Effect<
    EnableOrganizationsRootCredentialsManagementResponse,
    AccountNotManagementOrDelegatedAdministratorException | CallerIsNotManagementAccountException | OrganizationNotFoundException | OrganizationNotInAllFeaturesModeException | ServiceAccessNotEnabledException | CommonAwsError
  >;
  enableOrganizationsRootSessions(
    input: EnableOrganizationsRootSessionsRequest,
  ): Effect.Effect<
    EnableOrganizationsRootSessionsResponse,
    AccountNotManagementOrDelegatedAdministratorException | CallerIsNotManagementAccountException | OrganizationNotFoundException | OrganizationNotInAllFeaturesModeException | ServiceAccessNotEnabledException | CommonAwsError
  >;
  generateCredentialReport(
    input: {},
  ): Effect.Effect<
    GenerateCredentialReportResponse,
    LimitExceededException | ServiceFailureException | CommonAwsError
  >;
  generateOrganizationsAccessReport(
    input: GenerateOrganizationsAccessReportRequest,
  ): Effect.Effect<
    GenerateOrganizationsAccessReportResponse,
    ReportGenerationLimitExceededException | CommonAwsError
  >;
  generateServiceLastAccessedDetails(
    input: GenerateServiceLastAccessedDetailsRequest,
  ): Effect.Effect<
    GenerateServiceLastAccessedDetailsResponse,
    InvalidInputException | NoSuchEntityException | CommonAwsError
  >;
  getAccessKeyLastUsed(
    input: GetAccessKeyLastUsedRequest,
  ): Effect.Effect<
    GetAccessKeyLastUsedResponse,
    CommonAwsError
  >;
  getAccountAuthorizationDetails(
    input: GetAccountAuthorizationDetailsRequest,
  ): Effect.Effect<
    GetAccountAuthorizationDetailsResponse,
    ServiceFailureException | CommonAwsError
  >;
  getAccountPasswordPolicy(
    input: {},
  ): Effect.Effect<
    GetAccountPasswordPolicyResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getAccountSummary(
    input: {},
  ): Effect.Effect<
    GetAccountSummaryResponse,
    ServiceFailureException | CommonAwsError
  >;
  getContextKeysForCustomPolicy(
    input: GetContextKeysForCustomPolicyRequest,
  ): Effect.Effect<
    GetContextKeysForPolicyResponse,
    InvalidInputException | CommonAwsError
  >;
  getContextKeysForPrincipalPolicy(
    input: GetContextKeysForPrincipalPolicyRequest,
  ): Effect.Effect<
    GetContextKeysForPolicyResponse,
    InvalidInputException | NoSuchEntityException | CommonAwsError
  >;
  getCredentialReport(
    input: {},
  ): Effect.Effect<
    GetCredentialReportResponse,
    CredentialReportExpiredException | CredentialReportNotPresentException | CredentialReportNotReadyException | ServiceFailureException | CommonAwsError
  >;
  getGroup(
    input: GetGroupRequest,
  ): Effect.Effect<
    GetGroupResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getGroupPolicy(
    input: GetGroupPolicyRequest,
  ): Effect.Effect<
    GetGroupPolicyResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getInstanceProfile(
    input: GetInstanceProfileRequest,
  ): Effect.Effect<
    GetInstanceProfileResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getLoginProfile(
    input: GetLoginProfileRequest,
  ): Effect.Effect<
    GetLoginProfileResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getMFADevice(
    input: GetMFADeviceRequest,
  ): Effect.Effect<
    GetMFADeviceResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getOpenIDConnectProvider(
    input: GetOpenIDConnectProviderRequest,
  ): Effect.Effect<
    GetOpenIDConnectProviderResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getOrganizationsAccessReport(
    input: GetOrganizationsAccessReportRequest,
  ): Effect.Effect<
    GetOrganizationsAccessReportResponse,
    NoSuchEntityException | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getPolicyVersion(
    input: GetPolicyVersionRequest,
  ): Effect.Effect<
    GetPolicyVersionResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getRole(
    input: GetRoleRequest,
  ): Effect.Effect<
    GetRoleResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getRolePolicy(
    input: GetRolePolicyRequest,
  ): Effect.Effect<
    GetRolePolicyResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getSAMLProvider(
    input: GetSAMLProviderRequest,
  ): Effect.Effect<
    GetSAMLProviderResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getSSHPublicKey(
    input: GetSSHPublicKeyRequest,
  ): Effect.Effect<
    GetSSHPublicKeyResponse,
    NoSuchEntityException | UnrecognizedPublicKeyEncodingException | CommonAwsError
  >;
  getServerCertificate(
    input: GetServerCertificateRequest,
  ): Effect.Effect<
    GetServerCertificateResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getServiceLastAccessedDetails(
    input: GetServiceLastAccessedDetailsRequest,
  ): Effect.Effect<
    GetServiceLastAccessedDetailsResponse,
    InvalidInputException | NoSuchEntityException | CommonAwsError
  >;
  getServiceLastAccessedDetailsWithEntities(
    input: GetServiceLastAccessedDetailsWithEntitiesRequest,
  ): Effect.Effect<
    GetServiceLastAccessedDetailsWithEntitiesResponse,
    InvalidInputException | NoSuchEntityException | CommonAwsError
  >;
  getServiceLinkedRoleDeletionStatus(
    input: GetServiceLinkedRoleDeletionStatusRequest,
  ): Effect.Effect<
    GetServiceLinkedRoleDeletionStatusResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getUser(
    input: GetUserRequest,
  ): Effect.Effect<
    GetUserResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  getUserPolicy(
    input: GetUserPolicyRequest,
  ): Effect.Effect<
    GetUserPolicyResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listAccessKeys(
    input: ListAccessKeysRequest,
  ): Effect.Effect<
    ListAccessKeysResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listAccountAliases(
    input: ListAccountAliasesRequest,
  ): Effect.Effect<
    ListAccountAliasesResponse,
    ServiceFailureException | CommonAwsError
  >;
  listAttachedGroupPolicies(
    input: ListAttachedGroupPoliciesRequest,
  ): Effect.Effect<
    ListAttachedGroupPoliciesResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listAttachedRolePolicies(
    input: ListAttachedRolePoliciesRequest,
  ): Effect.Effect<
    ListAttachedRolePoliciesResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listAttachedUserPolicies(
    input: ListAttachedUserPoliciesRequest,
  ): Effect.Effect<
    ListAttachedUserPoliciesResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listEntitiesForPolicy(
    input: ListEntitiesForPolicyRequest,
  ): Effect.Effect<
    ListEntitiesForPolicyResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listGroupPolicies(
    input: ListGroupPoliciesRequest,
  ): Effect.Effect<
    ListGroupPoliciesResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResponse,
    ServiceFailureException | CommonAwsError
  >;
  listGroupsForUser(
    input: ListGroupsForUserRequest,
  ): Effect.Effect<
    ListGroupsForUserResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listInstanceProfileTags(
    input: ListInstanceProfileTagsRequest,
  ): Effect.Effect<
    ListInstanceProfileTagsResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listInstanceProfiles(
    input: ListInstanceProfilesRequest,
  ): Effect.Effect<
    ListInstanceProfilesResponse,
    ServiceFailureException | CommonAwsError
  >;
  listInstanceProfilesForRole(
    input: ListInstanceProfilesForRoleRequest,
  ): Effect.Effect<
    ListInstanceProfilesForRoleResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listMFADeviceTags(
    input: ListMFADeviceTagsRequest,
  ): Effect.Effect<
    ListMFADeviceTagsResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listMFADevices(
    input: ListMFADevicesRequest,
  ): Effect.Effect<
    ListMFADevicesResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listOpenIDConnectProviderTags(
    input: ListOpenIDConnectProviderTagsRequest,
  ): Effect.Effect<
    ListOpenIDConnectProviderTagsResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listOpenIDConnectProviders(
    input: ListOpenIDConnectProvidersRequest,
  ): Effect.Effect<
    ListOpenIDConnectProvidersResponse,
    ServiceFailureException | CommonAwsError
  >;
  listOrganizationsFeatures(
    input: ListOrganizationsFeaturesRequest,
  ): Effect.Effect<
    ListOrganizationsFeaturesResponse,
    AccountNotManagementOrDelegatedAdministratorException | OrganizationNotFoundException | OrganizationNotInAllFeaturesModeException | ServiceAccessNotEnabledException | CommonAwsError
  >;
  listPolicies(
    input: ListPoliciesRequest,
  ): Effect.Effect<
    ListPoliciesResponse,
    ServiceFailureException | CommonAwsError
  >;
  listPoliciesGrantingServiceAccess(
    input: ListPoliciesGrantingServiceAccessRequest,
  ): Effect.Effect<
    ListPoliciesGrantingServiceAccessResponse,
    InvalidInputException | NoSuchEntityException | CommonAwsError
  >;
  listPolicyTags(
    input: ListPolicyTagsRequest,
  ): Effect.Effect<
    ListPolicyTagsResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listPolicyVersions(
    input: ListPolicyVersionsRequest,
  ): Effect.Effect<
    ListPolicyVersionsResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listRolePolicies(
    input: ListRolePoliciesRequest,
  ): Effect.Effect<
    ListRolePoliciesResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listRoleTags(
    input: ListRoleTagsRequest,
  ): Effect.Effect<
    ListRoleTagsResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listRoles(
    input: ListRolesRequest,
  ): Effect.Effect<
    ListRolesResponse,
    ServiceFailureException | CommonAwsError
  >;
  listSAMLProviderTags(
    input: ListSAMLProviderTagsRequest,
  ): Effect.Effect<
    ListSAMLProviderTagsResponse,
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listSAMLProviders(
    input: ListSAMLProvidersRequest,
  ): Effect.Effect<
    ListSAMLProvidersResponse,
    ServiceFailureException | CommonAwsError
  >;
  listSSHPublicKeys(
    input: ListSSHPublicKeysRequest,
  ): Effect.Effect<
    ListSSHPublicKeysResponse,
    NoSuchEntityException | CommonAwsError
  >;
  listServerCertificateTags(
    input: ListServerCertificateTagsRequest,
  ): Effect.Effect<
    ListServerCertificateTagsResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listServerCertificates(
    input: ListServerCertificatesRequest,
  ): Effect.Effect<
    ListServerCertificatesResponse,
    ServiceFailureException | CommonAwsError
  >;
  listServiceSpecificCredentials(
    input: ListServiceSpecificCredentialsRequest,
  ): Effect.Effect<
    ListServiceSpecificCredentialsResponse,
    NoSuchEntityException | ServiceNotSupportedException | CommonAwsError
  >;
  listSigningCertificates(
    input: ListSigningCertificatesRequest,
  ): Effect.Effect<
    ListSigningCertificatesResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listUserPolicies(
    input: ListUserPoliciesRequest,
  ): Effect.Effect<
    ListUserPoliciesResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listUserTags(
    input: ListUserTagsRequest,
  ): Effect.Effect<
    ListUserTagsResponse,
    NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    ServiceFailureException | CommonAwsError
  >;
  listVirtualMFADevices(
    input: ListVirtualMFADevicesRequest,
  ): Effect.Effect<
    ListVirtualMFADevicesResponse,
    CommonAwsError
  >;
  putGroupPolicy(
    input: PutGroupPolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | MalformedPolicyDocumentException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  putRolePermissionsBoundary(
    input: PutRolePermissionsBoundaryRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | NoSuchEntityException | PolicyNotAttachableException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  putRolePolicy(
    input: PutRolePolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | MalformedPolicyDocumentException | NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  putUserPermissionsBoundary(
    input: PutUserPermissionsBoundaryRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | NoSuchEntityException | PolicyNotAttachableException | ServiceFailureException | CommonAwsError
  >;
  putUserPolicy(
    input: PutUserPolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | MalformedPolicyDocumentException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  removeClientIDFromOpenIDConnectProvider(
    input: RemoveClientIDFromOpenIDConnectProviderRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  removeRoleFromInstanceProfile(
    input: RemoveRoleFromInstanceProfileRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  removeUserFromGroup(
    input: RemoveUserFromGroupRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  resetServiceSpecificCredential(
    input: ResetServiceSpecificCredentialRequest,
  ): Effect.Effect<
    ResetServiceSpecificCredentialResponse,
    NoSuchEntityException | CommonAwsError
  >;
  resyncMFADevice(
    input: ResyncMFADeviceRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidAuthenticationCodeException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  setDefaultPolicyVersion(
    input: SetDefaultPolicyVersionRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  setSecurityTokenServicePreferences(
    input: SetSecurityTokenServicePreferencesRequest,
  ): Effect.Effect<
    {},
    ServiceFailureException | CommonAwsError
  >;
  simulateCustomPolicy(
    input: SimulateCustomPolicyRequest,
  ): Effect.Effect<
    SimulatePolicyResponse,
    InvalidInputException | PolicyEvaluationException | CommonAwsError
  >;
  simulatePrincipalPolicy(
    input: SimulatePrincipalPolicyRequest,
  ): Effect.Effect<
    SimulatePolicyResponse,
    InvalidInputException | NoSuchEntityException | PolicyEvaluationException | CommonAwsError
  >;
  tagInstanceProfile(
    input: TagInstanceProfileRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  tagMFADevice(
    input: TagMFADeviceRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  tagOpenIDConnectProvider(
    input: TagOpenIDConnectProviderRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  tagPolicy(
    input: TagPolicyRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  tagRole(
    input: TagRoleRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  tagSAMLProvider(
    input: TagSAMLProviderRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  tagServerCertificate(
    input: TagServerCertificateRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  tagUser(
    input: TagUserRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagInstanceProfile(
    input: UntagInstanceProfileRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagMFADevice(
    input: UntagMFADeviceRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagOpenIDConnectProvider(
    input: UntagOpenIDConnectProviderRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagPolicy(
    input: UntagPolicyRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagRole(
    input: UntagRoleRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagSAMLProvider(
    input: UntagSAMLProviderRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagServerCertificate(
    input: UntagServerCertificateRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  untagUser(
    input: UntagUserRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateAccessKey(
    input: UpdateAccessKeyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateAccountPasswordPolicy(
    input: UpdateAccountPasswordPolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | MalformedPolicyDocumentException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateAssumeRolePolicy(
    input: UpdateAssumeRolePolicyRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | MalformedPolicyDocumentException | NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    {},
    EntityAlreadyExistsException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateLoginProfile(
    input: UpdateLoginProfileRequest,
  ): Effect.Effect<
    {},
    EntityTemporarilyUnmodifiableException | LimitExceededException | NoSuchEntityException | PasswordPolicyViolationException | ServiceFailureException | CommonAwsError
  >;
  updateOpenIDConnectProviderThumbprint(
    input: UpdateOpenIDConnectProviderThumbprintRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateRole(
    input: UpdateRoleRequest,
  ): Effect.Effect<
    UpdateRoleResponse,
    NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  updateRoleDescription(
    input: UpdateRoleDescriptionRequest,
  ): Effect.Effect<
    UpdateRoleDescriptionResponse,
    NoSuchEntityException | ServiceFailureException | UnmodifiableEntityException | CommonAwsError
  >;
  updateSAMLProvider(
    input: UpdateSAMLProviderRequest,
  ): Effect.Effect<
    UpdateSAMLProviderResponse,
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateSSHPublicKey(
    input: UpdateSSHPublicKeyRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | NoSuchEntityException | CommonAwsError
  >;
  updateServerCertificate(
    input: UpdateServerCertificateRequest,
  ): Effect.Effect<
    {},
    EntityAlreadyExistsException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateServiceSpecificCredential(
    input: UpdateServiceSpecificCredentialRequest,
  ): Effect.Effect<
    {},
    NoSuchEntityException | CommonAwsError
  >;
  updateSigningCertificate(
    input: UpdateSigningCertificateRequest,
  ): Effect.Effect<
    {},
    InvalidInputException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | EntityAlreadyExistsException | EntityTemporarilyUnmodifiableException | LimitExceededException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
  uploadSSHPublicKey(
    input: UploadSSHPublicKeyRequest,
  ): Effect.Effect<
    UploadSSHPublicKeyResponse,
    DuplicateSSHPublicKeyException | InvalidPublicKeyException | LimitExceededException | NoSuchEntityException | UnrecognizedPublicKeyEncodingException | CommonAwsError
  >;
  uploadServerCertificate(
    input: UploadServerCertificateRequest,
  ): Effect.Effect<
    UploadServerCertificateResponse,
    ConcurrentModificationException | EntityAlreadyExistsException | InvalidInputException | KeyPairMismatchException | LimitExceededException | MalformedCertificateException | ServiceFailureException | CommonAwsError
  >;
  uploadSigningCertificate(
    input: UploadSigningCertificateRequest,
  ): Effect.Effect<
    UploadSigningCertificateResponse,
    ConcurrentModificationException | DuplicateCertificateException | EntityAlreadyExistsException | InvalidCertificateException | LimitExceededException | MalformedCertificateException | NoSuchEntityException | ServiceFailureException | CommonAwsError
  >;
}

export type Iam = AWSIdentityManagementV20100508;

export type AccessAdvisorUsageGranularityType = "SERVICE_LEVEL" | "ACTION_LEVEL";
export interface AccessDetail {
  ServiceName: string;
  ServiceNamespace: string;
  Region?: string;
  EntityPath?: string;
  LastAuthenticatedTime?: Date | string;
  TotalAuthenticatedEntities?: number;
}
export type AccessDetails = Array<AccessDetail>;
export interface AccessKey {
  UserName: string;
  AccessKeyId: string;
  Status: statusType;
  SecretAccessKey: string;
  CreateDate?: Date | string;
}
export type accessKeyIdType = string;

export interface AccessKeyLastUsed {
  LastUsedDate?: Date | string;
  ServiceName: string;
  Region: string;
}
export interface AccessKeyMetadata {
  UserName?: string;
  AccessKeyId?: string;
  Status?: statusType;
  CreateDate?: Date | string;
}
export type accessKeyMetadataListType = Array<AccessKeyMetadata>;
export type accessKeySecretType = string;

export type accountAliasListType = Array<string>;
export type accountAliasType = string;

export declare class AccountNotManagementOrDelegatedAdministratorException extends Data.TaggedError(
  "AccountNotManagementOrDelegatedAdministratorException",
)<{
  readonly Message?: string;
}> {}
export type ActionNameListType = Array<string>;
export type ActionNameType = string;

export interface AddClientIDToOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  ClientID: string;
}
export interface AddRoleToInstanceProfileRequest {
  InstanceProfileName: string;
  RoleName: string;
}
export interface AddUserToGroupRequest {
  GroupName: string;
  UserName: string;
}
export type allUsers = boolean;

export type ArnListType = Array<string>;
export type arnType = string;

export type assertionEncryptionModeType = "Required" | "Allowed";
export type assignmentStatusType = "Assigned" | "Unassigned" | "Any";
export interface AttachedPermissionsBoundary {
  PermissionsBoundaryType?: PermissionsBoundaryAttachmentType;
  PermissionsBoundaryArn?: string;
}
export type attachedPoliciesListType = Array<AttachedPolicy>;
export interface AttachedPolicy {
  PolicyName?: string;
  PolicyArn?: string;
}
export interface AttachGroupPolicyRequest {
  GroupName: string;
  PolicyArn: string;
}
export type attachmentCountType = number;

export interface AttachRolePolicyRequest {
  RoleName: string;
  PolicyArn: string;
}
export interface AttachUserPolicyRequest {
  UserName: string;
  PolicyArn: string;
}
export type authenticationCodeType = string;

export type booleanObjectType = boolean;

export type booleanType = boolean;

export type BootstrapDatum = Uint8Array | string;

export declare class CallerIsNotManagementAccountException extends Data.TaggedError(
  "CallerIsNotManagementAccountException",
)<{
  readonly Message?: string;
}> {}
export type certificateBodyType = string;

export type certificateChainType = string;

export type certificateIdType = string;

export type certificateListType = Array<SigningCertificate>;
export type CertificationKeyType = string;

export type CertificationMapType = Record<string, string>;
export type CertificationValueType = string;

export interface ChangePasswordRequest {
  OldPassword: string;
  NewPassword: string;
}
export type clientIDListType = Array<string>;
export type clientIDType = string;

export type ColumnNumber = number;

export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type ConcurrentModificationMessage = string;

export interface ContextEntry {
  ContextKeyName?: string;
  ContextKeyValues?: Array<string>;
  ContextKeyType?: ContextKeyTypeEnum;
}
export type ContextEntryListType = Array<ContextEntry>;
export type ContextKeyNamesResultListType = Array<string>;
export type ContextKeyNameType = string;

export type ContextKeyTypeEnum = "STRING" | "STRING_LIST" | "NUMERIC" | "NUMERIC_LIST" | "BOOLEAN" | "BOOLEAN_LIST" | "IP" | "IP_LIST" | "BINARY" | "BINARY_LIST" | "DATE" | "DATE_LIST";
export type ContextKeyValueListType = Array<string>;
export type ContextKeyValueType = string;

export interface CreateAccessKeyRequest {
  UserName?: string;
}
export interface CreateAccessKeyResponse {
  AccessKey: AccessKey;
}
export interface CreateAccountAliasRequest {
  AccountAlias: string;
}
export interface CreateGroupRequest {
  Path?: string;
  GroupName: string;
}
export interface CreateGroupResponse {
  Group: Group;
}
export interface CreateInstanceProfileRequest {
  InstanceProfileName: string;
  Path?: string;
  Tags?: Array<Tag>;
}
export interface CreateInstanceProfileResponse {
  InstanceProfile: InstanceProfile;
}
export interface CreateLoginProfileRequest {
  UserName?: string;
  Password?: string;
  PasswordResetRequired?: boolean;
}
export interface CreateLoginProfileResponse {
  LoginProfile: LoginProfile;
}
export interface CreateOpenIDConnectProviderRequest {
  Url: string;
  ClientIDList?: Array<string>;
  ThumbprintList?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateOpenIDConnectProviderResponse {
  OpenIDConnectProviderArn?: string;
  Tags?: Array<Tag>;
}
export interface CreatePolicyRequest {
  PolicyName: string;
  Path?: string;
  PolicyDocument: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreatePolicyResponse {
  Policy?: Policy;
}
export interface CreatePolicyVersionRequest {
  PolicyArn: string;
  PolicyDocument: string;
  SetAsDefault?: boolean;
}
export interface CreatePolicyVersionResponse {
  PolicyVersion?: PolicyVersion;
}
export interface CreateRoleRequest {
  Path?: string;
  RoleName: string;
  AssumeRolePolicyDocument: string;
  Description?: string;
  MaxSessionDuration?: number;
  PermissionsBoundary?: string;
  Tags?: Array<Tag>;
}
export interface CreateRoleResponse {
  Role: Role;
}
export interface CreateSAMLProviderRequest {
  SAMLMetadataDocument: string;
  Name: string;
  Tags?: Array<Tag>;
  AssertionEncryptionMode?: assertionEncryptionModeType;
  AddPrivateKey?: string;
}
export interface CreateSAMLProviderResponse {
  SAMLProviderArn?: string;
  Tags?: Array<Tag>;
}
export interface CreateServiceLinkedRoleRequest {
  AWSServiceName: string;
  Description?: string;
  CustomSuffix?: string;
}
export interface CreateServiceLinkedRoleResponse {
  Role?: Role;
}
export interface CreateServiceSpecificCredentialRequest {
  UserName: string;
  ServiceName: string;
  CredentialAgeDays?: number;
}
export interface CreateServiceSpecificCredentialResponse {
  ServiceSpecificCredential?: ServiceSpecificCredential;
}
export interface CreateUserRequest {
  Path?: string;
  UserName: string;
  PermissionsBoundary?: string;
  Tags?: Array<Tag>;
}
export interface CreateUserResponse {
  User?: User;
}
export interface CreateVirtualMFADeviceRequest {
  Path?: string;
  VirtualMFADeviceName: string;
  Tags?: Array<Tag>;
}
export interface CreateVirtualMFADeviceResponse {
  VirtualMFADevice: VirtualMFADevice;
}
export type credentialAgeDays = number;

export declare class CredentialReportExpiredException extends Data.TaggedError(
  "CredentialReportExpiredException",
)<{
  readonly message?: string;
}> {}
export type credentialReportExpiredExceptionMessage = string;

export declare class CredentialReportNotPresentException extends Data.TaggedError(
  "CredentialReportNotPresentException",
)<{
  readonly message?: string;
}> {}
export type credentialReportNotPresentExceptionMessage = string;

export declare class CredentialReportNotReadyException extends Data.TaggedError(
  "CredentialReportNotReadyException",
)<{
  readonly message?: string;
}> {}
export type credentialReportNotReadyExceptionMessage = string;

export type customSuffixType = string;

export type dateType = Date | string;

export interface DeactivateMFADeviceRequest {
  UserName?: string;
  SerialNumber: string;
}
export interface DeleteAccessKeyRequest {
  UserName?: string;
  AccessKeyId: string;
}
export interface DeleteAccountAliasRequest {
  AccountAlias: string;
}
export declare class DeleteConflictException extends Data.TaggedError(
  "DeleteConflictException",
)<{
  readonly message?: string;
}> {}
export type deleteConflictMessage = string;

export interface DeleteGroupPolicyRequest {
  GroupName: string;
  PolicyName: string;
}
export interface DeleteGroupRequest {
  GroupName: string;
}
export interface DeleteInstanceProfileRequest {
  InstanceProfileName: string;
}
export interface DeleteLoginProfileRequest {
  UserName?: string;
}
export interface DeleteOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
}
export interface DeletePolicyRequest {
  PolicyArn: string;
}
export interface DeletePolicyVersionRequest {
  PolicyArn: string;
  VersionId: string;
}
export interface DeleteRolePermissionsBoundaryRequest {
  RoleName: string;
}
export interface DeleteRolePolicyRequest {
  RoleName: string;
  PolicyName: string;
}
export interface DeleteRoleRequest {
  RoleName: string;
}
export interface DeleteSAMLProviderRequest {
  SAMLProviderArn: string;
}
export interface DeleteServerCertificateRequest {
  ServerCertificateName: string;
}
export interface DeleteServiceLinkedRoleRequest {
  RoleName: string;
}
export interface DeleteServiceLinkedRoleResponse {
  DeletionTaskId: string;
}
export interface DeleteServiceSpecificCredentialRequest {
  UserName?: string;
  ServiceSpecificCredentialId: string;
}
export interface DeleteSigningCertificateRequest {
  UserName?: string;
  CertificateId: string;
}
export interface DeleteSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyId: string;
}
export interface DeleteUserPermissionsBoundaryRequest {
  UserName: string;
}
export interface DeleteUserPolicyRequest {
  UserName: string;
  PolicyName: string;
}
export interface DeleteUserRequest {
  UserName: string;
}
export interface DeleteVirtualMFADeviceRequest {
  SerialNumber: string;
}
export interface DeletionTaskFailureReasonType {
  Reason?: string;
  RoleUsageList?: Array<RoleUsageType>;
}
export type DeletionTaskIdType = string;

export type DeletionTaskStatusType = "SUCCEEDED" | "IN_PROGRESS" | "FAILED" | "NOT_STARTED";
export interface DetachGroupPolicyRequest {
  GroupName: string;
  PolicyArn: string;
}
export interface DetachRolePolicyRequest {
  RoleName: string;
  PolicyArn: string;
}
export interface DetachUserPolicyRequest {
  UserName: string;
  PolicyArn: string;
}
export interface DisableOrganizationsRootCredentialsManagementRequest {
}
export interface DisableOrganizationsRootCredentialsManagementResponse {
  OrganizationId?: string;
  EnabledFeatures?: Array<FeatureType>;
}
export interface DisableOrganizationsRootSessionsRequest {
}
export interface DisableOrganizationsRootSessionsResponse {
  OrganizationId?: string;
  EnabledFeatures?: Array<FeatureType>;
}
export declare class DuplicateCertificateException extends Data.TaggedError(
  "DuplicateCertificateException",
)<{
  readonly message?: string;
}> {}
export type duplicateCertificateMessage = string;

export declare class DuplicateSSHPublicKeyException extends Data.TaggedError(
  "DuplicateSSHPublicKeyException",
)<{
  readonly message?: string;
}> {}
export type duplicateSSHPublicKeyMessage = string;

export interface EnableMFADeviceRequest {
  UserName: string;
  SerialNumber: string;
  AuthenticationCode1: string;
  AuthenticationCode2: string;
}
export interface EnableOrganizationsRootCredentialsManagementRequest {
}
export interface EnableOrganizationsRootCredentialsManagementResponse {
  OrganizationId?: string;
  EnabledFeatures?: Array<FeatureType>;
}
export interface EnableOrganizationsRootSessionsRequest {
}
export interface EnableOrganizationsRootSessionsResponse {
  OrganizationId?: string;
  EnabledFeatures?: Array<FeatureType>;
}
export type encodingType = "SSH" | "PEM";
export declare class EntityAlreadyExistsException extends Data.TaggedError(
  "EntityAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type entityAlreadyExistsMessage = string;

export interface EntityDetails {
  EntityInfo: EntityInfo;
  LastAuthenticated?: Date | string;
}
export type entityDetailsListType = Array<EntityDetails>;
export interface EntityInfo {
  Arn: string;
  Name: string;
  Type: policyOwnerEntityType;
  Id: string;
  Path?: string;
}
export type entityListType = Array<EntityType>;
export type entityNameType = string;

export declare class EntityTemporarilyUnmodifiableException extends Data.TaggedError(
  "EntityTemporarilyUnmodifiableException",
)<{
  readonly message?: string;
}> {}
export type entityTemporarilyUnmodifiableMessage = string;

export type EntityType = "User" | "Role" | "Group" | "LocalManagedPolicy" | "AWSManagedPolicy";
export interface ErrorDetails {
  Message: string;
  Code: string;
}
export type EvalDecisionDetailsType = Record<string, PolicyEvaluationDecisionType>;
export type EvalDecisionSourceType = string;

export interface EvaluationResult {
  EvalActionName: string;
  EvalResourceName?: string;
  EvalDecision: PolicyEvaluationDecisionType;
  MatchedStatements?: Array<Statement>;
  MissingContextValues?: Array<string>;
  OrganizationsDecisionDetail?: OrganizationsDecisionDetail;
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
  EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType>;
  ResourceSpecificResults?: Array<ResourceSpecificResult>;
}
export type EvaluationResultsListType = Array<EvaluationResult>;
export type ExceptionMessage = string;

export type existingUserNameType = string;

export type FeaturesListType = Array<FeatureType>;
export type FeatureType = "ROOT_CREDENTIALS_MANAGEMENT" | "ROOT_SESSIONS";
export interface GenerateCredentialReportResponse {
  State?: ReportStateType;
  Description?: string;
}
export interface GenerateOrganizationsAccessReportRequest {
  EntityPath: string;
  OrganizationsPolicyId?: string;
}
export interface GenerateOrganizationsAccessReportResponse {
  JobId?: string;
}
export interface GenerateServiceLastAccessedDetailsRequest {
  Arn: string;
  Granularity?: AccessAdvisorUsageGranularityType;
}
export interface GenerateServiceLastAccessedDetailsResponse {
  JobId?: string;
}
export interface GetAccessKeyLastUsedRequest {
  AccessKeyId: string;
}
export interface GetAccessKeyLastUsedResponse {
  UserName?: string;
  AccessKeyLastUsed?: AccessKeyLastUsed;
}
export interface GetAccountAuthorizationDetailsRequest {
  Filter?: Array<EntityType>;
  MaxItems?: number;
  Marker?: string;
}
export interface GetAccountAuthorizationDetailsResponse {
  UserDetailList?: Array<UserDetail>;
  GroupDetailList?: Array<GroupDetail>;
  RoleDetailList?: Array<RoleDetail>;
  Policies?: Array<ManagedPolicyDetail>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface GetAccountPasswordPolicyResponse {
  PasswordPolicy: PasswordPolicy;
}
export interface GetAccountSummaryResponse {
  SummaryMap?: Record<summaryKeyType, number>;
}
export interface GetContextKeysForCustomPolicyRequest {
  PolicyInputList: Array<string>;
}
export interface GetContextKeysForPolicyResponse {
  ContextKeyNames?: Array<string>;
}
export interface GetContextKeysForPrincipalPolicyRequest {
  PolicySourceArn: string;
  PolicyInputList?: Array<string>;
}
export interface GetCredentialReportResponse {
  Content?: Uint8Array | string;
  ReportFormat?: ReportFormatType;
  GeneratedTime?: Date | string;
}
export interface GetGroupPolicyRequest {
  GroupName: string;
  PolicyName: string;
}
export interface GetGroupPolicyResponse {
  GroupName: string;
  PolicyName: string;
  PolicyDocument: string;
}
export interface GetGroupRequest {
  GroupName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface GetGroupResponse {
  Group: Group;
  Users: Array<User>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface GetInstanceProfileRequest {
  InstanceProfileName: string;
}
export interface GetInstanceProfileResponse {
  InstanceProfile: InstanceProfile;
}
export interface GetLoginProfileRequest {
  UserName?: string;
}
export interface GetLoginProfileResponse {
  LoginProfile: LoginProfile;
}
export interface GetMFADeviceRequest {
  SerialNumber: string;
  UserName?: string;
}
export interface GetMFADeviceResponse {
  UserName?: string;
  SerialNumber: string;
  EnableDate?: Date | string;
  Certifications?: Record<string, string>;
}
export interface GetOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
}
export interface GetOpenIDConnectProviderResponse {
  Url?: string;
  ClientIDList?: Array<string>;
  ThumbprintList?: Array<string>;
  CreateDate?: Date | string;
  Tags?: Array<Tag>;
}
export interface GetOrganizationsAccessReportRequest {
  JobId: string;
  MaxItems?: number;
  Marker?: string;
  SortKey?: sortKeyType;
}
export interface GetOrganizationsAccessReportResponse {
  JobStatus: jobStatusType;
  JobCreationDate: Date | string;
  JobCompletionDate?: Date | string;
  NumberOfServicesAccessible?: number;
  NumberOfServicesNotAccessed?: number;
  AccessDetails?: Array<AccessDetail>;
  IsTruncated?: boolean;
  Marker?: string;
  ErrorDetails?: ErrorDetails;
}
export interface GetPolicyRequest {
  PolicyArn: string;
}
export interface GetPolicyResponse {
  Policy?: Policy;
}
export interface GetPolicyVersionRequest {
  PolicyArn: string;
  VersionId: string;
}
export interface GetPolicyVersionResponse {
  PolicyVersion?: PolicyVersion;
}
export interface GetRolePolicyRequest {
  RoleName: string;
  PolicyName: string;
}
export interface GetRolePolicyResponse {
  RoleName: string;
  PolicyName: string;
  PolicyDocument: string;
}
export interface GetRoleRequest {
  RoleName: string;
}
export interface GetRoleResponse {
  Role: Role;
}
export interface GetSAMLProviderRequest {
  SAMLProviderArn: string;
}
export interface GetSAMLProviderResponse {
  SAMLProviderUUID?: string;
  SAMLMetadataDocument?: string;
  CreateDate?: Date | string;
  ValidUntil?: Date | string;
  Tags?: Array<Tag>;
  AssertionEncryptionMode?: assertionEncryptionModeType;
  PrivateKeyList?: Array<SAMLPrivateKey>;
}
export interface GetServerCertificateRequest {
  ServerCertificateName: string;
}
export interface GetServerCertificateResponse {
  ServerCertificate: ServerCertificate;
}
export interface GetServiceLastAccessedDetailsRequest {
  JobId: string;
  MaxItems?: number;
  Marker?: string;
}
export interface GetServiceLastAccessedDetailsResponse {
  JobStatus: jobStatusType;
  JobType?: AccessAdvisorUsageGranularityType;
  JobCreationDate: Date | string;
  ServicesLastAccessed: Array<ServiceLastAccessed>;
  JobCompletionDate: Date | string;
  IsTruncated?: boolean;
  Marker?: string;
  Error?: ErrorDetails;
}
export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  JobId: string;
  ServiceNamespace: string;
  MaxItems?: number;
  Marker?: string;
}
export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  JobStatus: jobStatusType;
  JobCreationDate: Date | string;
  JobCompletionDate: Date | string;
  EntityDetailsList: Array<EntityDetails>;
  IsTruncated?: boolean;
  Marker?: string;
  Error?: ErrorDetails;
}
export interface GetServiceLinkedRoleDeletionStatusRequest {
  DeletionTaskId: string;
}
export interface GetServiceLinkedRoleDeletionStatusResponse {
  Status: DeletionTaskStatusType;
  Reason?: DeletionTaskFailureReasonType;
}
export interface GetSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyId: string;
  Encoding: encodingType;
}
export interface GetSSHPublicKeyResponse {
  SSHPublicKey?: SSHPublicKey;
}
export interface GetUserPolicyRequest {
  UserName: string;
  PolicyName: string;
}
export interface GetUserPolicyResponse {
  UserName: string;
  PolicyName: string;
  PolicyDocument: string;
}
export interface GetUserRequest {
  UserName?: string;
}
export interface GetUserResponse {
  User: User;
}
export type globalEndpointTokenVersion = "v1Token" | "v2Token";
export interface Group {
  Path: string;
  GroupName: string;
  GroupId: string;
  Arn: string;
  CreateDate: Date | string;
}
export interface GroupDetail {
  Path?: string;
  GroupName?: string;
  GroupId?: string;
  Arn?: string;
  CreateDate?: Date | string;
  GroupPolicyList?: Array<PolicyDetail>;
  AttachedManagedPolicies?: Array<AttachedPolicy>;
}
export type groupDetailListType = Array<GroupDetail>;
export type groupListType = Array<Group>;
export type groupNameListType = Array<string>;
export type groupNameType = string;

export type idType = string;

export interface InstanceProfile {
  Path: string;
  InstanceProfileName: string;
  InstanceProfileId: string;
  Arn: string;
  CreateDate: Date | string;
  Roles: Array<Role>;
  Tags?: Array<Tag>;
}
export type instanceProfileListType = Array<InstanceProfile>;
export type instanceProfileNameType = string;

export type integerType = number;

export declare class InvalidAuthenticationCodeException extends Data.TaggedError(
  "InvalidAuthenticationCodeException",
)<{
  readonly message?: string;
}> {}
export type invalidAuthenticationCodeMessage = string;

export declare class InvalidCertificateException extends Data.TaggedError(
  "InvalidCertificateException",
)<{
  readonly message?: string;
}> {}
export type invalidCertificateMessage = string;

export declare class InvalidInputException extends Data.TaggedError(
  "InvalidInputException",
)<{
  readonly message?: string;
}> {}
export type invalidInputMessage = string;

export declare class InvalidPublicKeyException extends Data.TaggedError(
  "InvalidPublicKeyException",
)<{
  readonly message?: string;
}> {}
export type invalidPublicKeyMessage = string;

export declare class InvalidUserTypeException extends Data.TaggedError(
  "InvalidUserTypeException",
)<{
  readonly message?: string;
}> {}
export type invalidUserTypeMessage = string;

export type jobIDType = string;

export type jobStatusType = "IN_PROGRESS" | "COMPLETED" | "FAILED";
export declare class KeyPairMismatchException extends Data.TaggedError(
  "KeyPairMismatchException",
)<{
  readonly message?: string;
}> {}
export type keyPairMismatchMessage = string;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type limitExceededMessage = string;

export type LineNumber = number;

export interface ListAccessKeysRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListAccessKeysResponse {
  AccessKeyMetadata: Array<AccessKeyMetadata>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListAccountAliasesRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListAccountAliasesResponse {
  AccountAliases: Array<string>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListAttachedGroupPoliciesRequest {
  GroupName: string;
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListAttachedGroupPoliciesResponse {
  AttachedPolicies?: Array<AttachedPolicy>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListAttachedRolePoliciesRequest {
  RoleName: string;
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListAttachedRolePoliciesResponse {
  AttachedPolicies?: Array<AttachedPolicy>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListAttachedUserPoliciesRequest {
  UserName: string;
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListAttachedUserPoliciesResponse {
  AttachedPolicies?: Array<AttachedPolicy>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListEntitiesForPolicyRequest {
  PolicyArn: string;
  EntityFilter?: EntityType;
  PathPrefix?: string;
  PolicyUsageFilter?: PolicyUsageType;
  Marker?: string;
  MaxItems?: number;
}
export interface ListEntitiesForPolicyResponse {
  PolicyGroups?: Array<PolicyGroup>;
  PolicyUsers?: Array<PolicyUser>;
  PolicyRoles?: Array<PolicyRole>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListGroupPoliciesRequest {
  GroupName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListGroupPoliciesResponse {
  PolicyNames: Array<string>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListGroupsForUserRequest {
  UserName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListGroupsForUserResponse {
  Groups: Array<Group>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListGroupsRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListGroupsResponse {
  Groups: Array<Group>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListInstanceProfilesForRoleRequest {
  RoleName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListInstanceProfilesForRoleResponse {
  InstanceProfiles: Array<InstanceProfile>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListInstanceProfilesRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListInstanceProfilesResponse {
  InstanceProfiles: Array<InstanceProfile>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListInstanceProfileTagsRequest {
  InstanceProfileName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListInstanceProfileTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListMFADevicesRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListMFADevicesResponse {
  MFADevices: Array<MFADevice>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListMFADeviceTagsRequest {
  SerialNumber: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListMFADeviceTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListOpenIDConnectProvidersRequest {
}
export interface ListOpenIDConnectProvidersResponse {
  OpenIDConnectProviderList?: Array<OpenIDConnectProviderListEntry>;
}
export interface ListOpenIDConnectProviderTagsRequest {
  OpenIDConnectProviderArn: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListOpenIDConnectProviderTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListOrganizationsFeaturesRequest {
}
export interface ListOrganizationsFeaturesResponse {
  OrganizationId?: string;
  EnabledFeatures?: Array<FeatureType>;
}
export interface ListPoliciesGrantingServiceAccessEntry {
  ServiceNamespace?: string;
  Policies?: Array<PolicyGrantingServiceAccess>;
}
export interface ListPoliciesGrantingServiceAccessRequest {
  Marker?: string;
  Arn: string;
  ServiceNamespaces: Array<string>;
}
export interface ListPoliciesGrantingServiceAccessResponse {
  PoliciesGrantingServiceAccess: Array<ListPoliciesGrantingServiceAccessEntry>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListPoliciesRequest {
  Scope?: policyScopeType;
  OnlyAttached?: boolean;
  PathPrefix?: string;
  PolicyUsageFilter?: PolicyUsageType;
  Marker?: string;
  MaxItems?: number;
}
export interface ListPoliciesResponse {
  Policies?: Array<Policy>;
  IsTruncated?: boolean;
  Marker?: string;
}
export type listPolicyGrantingServiceAccessResponseListType = Array<ListPoliciesGrantingServiceAccessEntry>;
export interface ListPolicyTagsRequest {
  PolicyArn: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListPolicyTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListPolicyVersionsRequest {
  PolicyArn: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListPolicyVersionsResponse {
  Versions?: Array<PolicyVersion>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListRolePoliciesRequest {
  RoleName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListRolePoliciesResponse {
  PolicyNames: Array<string>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListRolesRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListRolesResponse {
  Roles: Array<Role>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListRoleTagsRequest {
  RoleName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListRoleTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListSAMLProvidersRequest {
}
export interface ListSAMLProvidersResponse {
  SAMLProviderList?: Array<SAMLProviderListEntry>;
}
export interface ListSAMLProviderTagsRequest {
  SAMLProviderArn: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListSAMLProviderTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListServerCertificatesRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListServerCertificatesResponse {
  ServerCertificateMetadataList: Array<ServerCertificateMetadata>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListServerCertificateTagsRequest {
  ServerCertificateName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListServerCertificateTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListServiceSpecificCredentialsRequest {
  UserName?: string;
  ServiceName?: string;
  AllUsers?: boolean;
  Marker?: string;
  MaxItems?: number;
}
export interface ListServiceSpecificCredentialsResponse {
  ServiceSpecificCredentials?: Array<ServiceSpecificCredentialMetadata>;
  Marker?: string;
  IsTruncated?: boolean;
}
export interface ListSigningCertificatesRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListSigningCertificatesResponse {
  Certificates: Array<SigningCertificate>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListSSHPublicKeysRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListSSHPublicKeysResponse {
  SSHPublicKeys?: Array<SSHPublicKeyMetadata>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListUserPoliciesRequest {
  UserName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListUserPoliciesResponse {
  PolicyNames: Array<string>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListUsersRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListUsersResponse {
  Users: Array<User>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListUserTagsRequest {
  UserName: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListUserTagsResponse {
  Tags: Array<Tag>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface ListVirtualMFADevicesRequest {
  AssignmentStatus?: assignmentStatusType;
  Marker?: string;
  MaxItems?: number;
}
export interface ListVirtualMFADevicesResponse {
  VirtualMFADevices: Array<VirtualMFADevice>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface LoginProfile {
  UserName: string;
  CreateDate: Date | string;
  PasswordResetRequired?: boolean;
}
export declare class MalformedCertificateException extends Data.TaggedError(
  "MalformedCertificateException",
)<{
  readonly message?: string;
}> {}
export type malformedCertificateMessage = string;

export declare class MalformedPolicyDocumentException extends Data.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly message?: string;
}> {}
export type malformedPolicyDocumentMessage = string;

export interface ManagedPolicyDetail {
  PolicyName?: string;
  PolicyId?: string;
  Arn?: string;
  Path?: string;
  DefaultVersionId?: string;
  AttachmentCount?: number;
  PermissionsBoundaryUsageCount?: number;
  IsAttachable?: boolean;
  Description?: string;
  CreateDate?: Date | string;
  UpdateDate?: Date | string;
  PolicyVersionList?: Array<PolicyVersion>;
}
export type ManagedPolicyDetailListType = Array<ManagedPolicyDetail>;
export type markerType = string;

export type maxItemsType = number;

export type maxPasswordAgeType = number;

export interface MFADevice {
  UserName: string;
  SerialNumber: string;
  EnableDate: Date | string;
}
export type mfaDeviceListType = Array<MFADevice>;
export type minimumPasswordLengthType = number;

export declare class NoSuchEntityException extends Data.TaggedError(
  "NoSuchEntityException",
)<{
  readonly message?: string;
}> {}
export type noSuchEntityMessage = string;

export interface OpenIDConnectProviderListEntry {
  Arn?: string;
}
export type OpenIDConnectProviderListType = Array<OpenIDConnectProviderListEntry>;
export type OpenIDConnectProviderUrlType = string;

export declare class OpenIdIdpCommunicationErrorException extends Data.TaggedError(
  "OpenIdIdpCommunicationErrorException",
)<{
  readonly message?: string;
}> {}
export type openIdIdpCommunicationErrorExceptionMessage = string;

export type OrganizationIdType = string;

export declare class OrganizationNotFoundException extends Data.TaggedError(
  "OrganizationNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class OrganizationNotInAllFeaturesModeException extends Data.TaggedError(
  "OrganizationNotInAllFeaturesModeException",
)<{
  readonly Message?: string;
}> {}
export interface OrganizationsDecisionDetail {
  AllowedByOrganizations?: boolean;
}
export type organizationsEntityPathType = string;

export type organizationsPolicyIdType = string;

export interface PasswordPolicy {
  MinimumPasswordLength?: number;
  RequireSymbols?: boolean;
  RequireNumbers?: boolean;
  RequireUppercaseCharacters?: boolean;
  RequireLowercaseCharacters?: boolean;
  AllowUsersToChangePassword?: boolean;
  ExpirePasswords?: boolean;
  MaxPasswordAge?: number;
  PasswordReusePrevention?: number;
  HardExpiry?: boolean;
}
export declare class PasswordPolicyViolationException extends Data.TaggedError(
  "PasswordPolicyViolationException",
)<{
  readonly message?: string;
}> {}
export type passwordPolicyViolationMessage = string;

export type passwordReusePreventionType = number;

export type passwordType = string;

export type pathPrefixType = string;

export type pathType = string;

export type PermissionsBoundaryAttachmentType = "Policy";
export interface PermissionsBoundaryDecisionDetail {
  AllowedByPermissionsBoundary?: boolean;
}
export interface Policy {
  PolicyName?: string;
  PolicyId?: string;
  Arn?: string;
  Path?: string;
  DefaultVersionId?: string;
  AttachmentCount?: number;
  PermissionsBoundaryUsageCount?: number;
  IsAttachable?: boolean;
  Description?: string;
  CreateDate?: Date | string;
  UpdateDate?: Date | string;
  Tags?: Array<Tag>;
}
export type policyDescriptionType = string;

export interface PolicyDetail {
  PolicyName?: string;
  PolicyDocument?: string;
}
export type policyDetailListType = Array<PolicyDetail>;
export type policyDocumentType = string;

export type policyDocumentVersionListType = Array<PolicyVersion>;
export type PolicyEvaluationDecisionType = "ALLOWED" | "EXPLICIT_DENY" | "IMPLICIT_DENY";
export type policyEvaluationErrorMessage = string;

export declare class PolicyEvaluationException extends Data.TaggedError(
  "PolicyEvaluationException",
)<{
  readonly message?: string;
}> {}
export interface PolicyGrantingServiceAccess {
  PolicyName: string;
  PolicyType: policyType;
  PolicyArn?: string;
  EntityType?: policyOwnerEntityType;
  EntityName?: string;
}
export type policyGrantingServiceAccessListType = Array<PolicyGrantingServiceAccess>;
export interface PolicyGroup {
  GroupName?: string;
  GroupId?: string;
}
export type PolicyGroupListType = Array<PolicyGroup>;
export type PolicyIdentifierType = string;

export type policyListType = Array<Policy>;
export type policyNameListType = Array<string>;
export type policyNameType = string;

export declare class PolicyNotAttachableException extends Data.TaggedError(
  "PolicyNotAttachableException",
)<{
  readonly message?: string;
}> {}
export type policyNotAttachableMessage = string;

export type policyOwnerEntityType = "USER" | "ROLE" | "GROUP";
export type policyPathType = string;

export interface PolicyRole {
  RoleName?: string;
  RoleId?: string;
}
export type PolicyRoleListType = Array<PolicyRole>;
export type policyScopeType = "All" | "AWS" | "Local";
export type PolicySourceType = "USER" | "GROUP" | "ROLE" | "AWS_MANAGED" | "USER_MANAGED" | "RESOURCE" | "NONE";
export type policyType = "INLINE" | "MANAGED";
export type PolicyUsageType = "PermissionsPolicy" | "PermissionsBoundary";
export interface PolicyUser {
  UserName?: string;
  UserId?: string;
}
export type PolicyUserListType = Array<PolicyUser>;
export interface PolicyVersion {
  Document?: string;
  VersionId?: string;
  IsDefaultVersion?: boolean;
  CreateDate?: Date | string;
}
export type policyVersionIdType = string;

export interface Position {
  Line?: number;
  Column?: number;
}
export type privateKeyIdType = string;

export type privateKeyList = Array<SAMLPrivateKey>;
export type privateKeyType = string;

export type publicKeyFingerprintType = string;

export type publicKeyIdType = string;

export type publicKeyMaterialType = string;

export interface PutGroupPolicyRequest {
  GroupName: string;
  PolicyName: string;
  PolicyDocument: string;
}
export interface PutRolePermissionsBoundaryRequest {
  RoleName: string;
  PermissionsBoundary: string;
}
export interface PutRolePolicyRequest {
  RoleName: string;
  PolicyName: string;
  PolicyDocument: string;
}
export interface PutUserPermissionsBoundaryRequest {
  UserName: string;
  PermissionsBoundary: string;
}
export interface PutUserPolicyRequest {
  UserName: string;
  PolicyName: string;
  PolicyDocument: string;
}
export type ReasonType = string;

export type RegionNameType = string;

export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  ClientID: string;
}
export interface RemoveRoleFromInstanceProfileRequest {
  InstanceProfileName: string;
  RoleName: string;
}
export interface RemoveUserFromGroupRequest {
  GroupName: string;
  UserName: string;
}
export type ReportContentType = Uint8Array | string;

export type ReportFormatType = "text_csv";
export declare class ReportGenerationLimitExceededException extends Data.TaggedError(
  "ReportGenerationLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type reportGenerationLimitExceededMessage = string;

export type ReportStateDescriptionType = string;

export type ReportStateType = "STARTED" | "INPROGRESS" | "COMPLETE";
export interface ResetServiceSpecificCredentialRequest {
  UserName?: string;
  ServiceSpecificCredentialId: string;
}
export interface ResetServiceSpecificCredentialResponse {
  ServiceSpecificCredential?: ServiceSpecificCredential;
}
export type ResourceHandlingOptionType = string;

export type ResourceNameListType = Array<string>;
export type ResourceNameType = string;

export interface ResourceSpecificResult {
  EvalResourceName: string;
  EvalResourceDecision: PolicyEvaluationDecisionType;
  MatchedStatements?: Array<Statement>;
  MissingContextValues?: Array<string>;
  EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType>;
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
}
export type ResourceSpecificResultListType = Array<ResourceSpecificResult>;
export type responseMarkerType = string;

export interface ResyncMFADeviceRequest {
  UserName: string;
  SerialNumber: string;
  AuthenticationCode1: string;
  AuthenticationCode2: string;
}
export interface Role {
  Path: string;
  RoleName: string;
  RoleId: string;
  Arn: string;
  CreateDate: Date | string;
  AssumeRolePolicyDocument?: string;
  Description?: string;
  MaxSessionDuration?: number;
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Array<Tag>;
  RoleLastUsed?: RoleLastUsed;
}
export type roleDescriptionType = string;

export interface RoleDetail {
  Path?: string;
  RoleName?: string;
  RoleId?: string;
  Arn?: string;
  CreateDate?: Date | string;
  AssumeRolePolicyDocument?: string;
  InstanceProfileList?: Array<InstanceProfile>;
  RolePolicyList?: Array<PolicyDetail>;
  AttachedManagedPolicies?: Array<AttachedPolicy>;
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Array<Tag>;
  RoleLastUsed?: RoleLastUsed;
}
export type roleDetailListType = Array<RoleDetail>;
export interface RoleLastUsed {
  LastUsedDate?: Date | string;
  Region?: string;
}
export type roleListType = Array<Role>;
export type roleMaxSessionDurationType = number;

export type roleNameType = string;

export type RoleUsageListType = Array<RoleUsageType>;
export interface RoleUsageType {
  Region?: string;
  Resources?: Array<string>;
}
export type SAMLMetadataDocumentType = string;

export interface SAMLPrivateKey {
  KeyId?: string;
  Timestamp?: Date | string;
}
export interface SAMLProviderListEntry {
  Arn?: string;
  ValidUntil?: Date | string;
  CreateDate?: Date | string;
}
export type SAMLProviderListType = Array<SAMLProviderListEntry>;
export type SAMLProviderNameType = string;

export type serialNumberType = string;

export interface ServerCertificate {
  ServerCertificateMetadata: ServerCertificateMetadata;
  CertificateBody: string;
  CertificateChain?: string;
  Tags?: Array<Tag>;
}
export interface ServerCertificateMetadata {
  Path: string;
  ServerCertificateName: string;
  ServerCertificateId: string;
  Arn: string;
  UploadDate?: Date | string;
  Expiration?: Date | string;
}
export type serverCertificateMetadataListType = Array<ServerCertificateMetadata>;
export type serverCertificateNameType = string;

export declare class ServiceAccessNotEnabledException extends Data.TaggedError(
  "ServiceAccessNotEnabledException",
)<{
  readonly Message?: string;
}> {}
export type serviceCredentialAlias = string;

export type serviceCredentialSecret = string;

export declare class ServiceFailureException extends Data.TaggedError(
  "ServiceFailureException",
)<{
  readonly message?: string;
}> {}
export type serviceFailureExceptionMessage = string;

export interface ServiceLastAccessed {
  ServiceName: string;
  LastAuthenticated?: Date | string;
  ServiceNamespace: string;
  LastAuthenticatedEntity?: string;
  LastAuthenticatedRegion?: string;
  TotalAuthenticatedEntities?: number;
  TrackedActionsLastAccessed?: Array<TrackedActionLastAccessed>;
}
export type serviceName = string;

export type serviceNamespaceListType = Array<string>;
export type serviceNamespaceType = string;

export type serviceNameType = string;

export declare class ServiceNotSupportedException extends Data.TaggedError(
  "ServiceNotSupportedException",
)<{
  readonly message?: string;
}> {}
export type serviceNotSupportedMessage = string;

export type servicePassword = string;

export type ServicesLastAccessed = Array<ServiceLastAccessed>;
export interface ServiceSpecificCredential {
  CreateDate: Date | string;
  ExpirationDate?: Date | string;
  ServiceName: string;
  ServiceUserName?: string;
  ServicePassword?: string;
  ServiceCredentialAlias?: string;
  ServiceCredentialSecret?: string;
  ServiceSpecificCredentialId: string;
  UserName: string;
  Status: statusType;
}
export type serviceSpecificCredentialId = string;

export interface ServiceSpecificCredentialMetadata {
  UserName: string;
  Status: statusType;
  ServiceUserName?: string;
  ServiceCredentialAlias?: string;
  CreateDate: Date | string;
  ExpirationDate?: Date | string;
  ServiceSpecificCredentialId: string;
  ServiceName: string;
}
export type ServiceSpecificCredentialsListType = Array<ServiceSpecificCredentialMetadata>;
export type serviceUserName = string;

export interface SetDefaultPolicyVersionRequest {
  PolicyArn: string;
  VersionId: string;
}
export interface SetSecurityTokenServicePreferencesRequest {
  GlobalEndpointTokenVersion: globalEndpointTokenVersion;
}
export interface SigningCertificate {
  UserName: string;
  CertificateId: string;
  CertificateBody: string;
  Status: statusType;
  UploadDate?: Date | string;
}
export interface SimulateCustomPolicyRequest {
  PolicyInputList: Array<string>;
  PermissionsBoundaryPolicyInputList?: Array<string>;
  ActionNames: Array<string>;
  ResourceArns?: Array<string>;
  ResourcePolicy?: string;
  ResourceOwner?: string;
  CallerArn?: string;
  ContextEntries?: Array<ContextEntry>;
  ResourceHandlingOption?: string;
  MaxItems?: number;
  Marker?: string;
}
export interface SimulatePolicyResponse {
  EvaluationResults?: Array<EvaluationResult>;
  IsTruncated?: boolean;
  Marker?: string;
}
export interface SimulatePrincipalPolicyRequest {
  PolicySourceArn: string;
  PolicyInputList?: Array<string>;
  PermissionsBoundaryPolicyInputList?: Array<string>;
  ActionNames: Array<string>;
  ResourceArns?: Array<string>;
  ResourcePolicy?: string;
  ResourceOwner?: string;
  CallerArn?: string;
  ContextEntries?: Array<ContextEntry>;
  ResourceHandlingOption?: string;
  MaxItems?: number;
  Marker?: string;
}
export type SimulationPolicyListType = Array<string>;
export type sortKeyType = "SERVICE_NAMESPACE_ASCENDING" | "SERVICE_NAMESPACE_DESCENDING" | "LAST_AUTHENTICATED_TIME_ASCENDING" | "LAST_AUTHENTICATED_TIME_DESCENDING";
export interface SSHPublicKey {
  UserName: string;
  SSHPublicKeyId: string;
  Fingerprint: string;
  SSHPublicKeyBody: string;
  Status: statusType;
  UploadDate?: Date | string;
}
export type SSHPublicKeyListType = Array<SSHPublicKeyMetadata>;
export interface SSHPublicKeyMetadata {
  UserName: string;
  SSHPublicKeyId: string;
  Status: statusType;
  UploadDate: Date | string;
}
export interface Statement {
  SourcePolicyId?: string;
  SourcePolicyType?: PolicySourceType;
  StartPosition?: Position;
  EndPosition?: Position;
}
export type StatementListType = Array<Statement>;
export type statusType = "Active" | "Inactive" | "Expired";
export type stringType = string;

export type summaryKeyType = "Users" | "UsersQuota" | "Groups" | "GroupsQuota" | "ServerCertificates" | "ServerCertificatesQuota" | "UserPolicySizeQuota" | "GroupPolicySizeQuota" | "GroupsPerUserQuota" | "SigningCertificatesPerUserQuota" | "AccessKeysPerUserQuota" | "MFADevices" | "MFADevicesInUse" | "AccountMFAEnabled" | "AccountAccessKeysPresent" | "AccountPasswordPresent" | "AccountSigningCertificatesPresent" | "AttachedPoliciesPerGroupQuota" | "AttachedPoliciesPerRoleQuota" | "AttachedPoliciesPerUserQuota" | "Policies" | "PoliciesQuota" | "PolicySizeQuota" | "PolicyVersionsInUse" | "PolicyVersionsInUseQuota" | "VersionsPerPolicyQuota" | "GlobalEndpointTokenVersion";
export type summaryMapType = Record<summaryKeyType, number>;
export type summaryValueType = number;

export interface Tag {
  Key: string;
  Value: string;
}
export interface TagInstanceProfileRequest {
  InstanceProfileName: string;
  Tags: Array<Tag>;
}
export type tagKeyListType = Array<string>;
export type tagKeyType = string;

export type tagListType = Array<Tag>;
export interface TagMFADeviceRequest {
  SerialNumber: string;
  Tags: Array<Tag>;
}
export interface TagOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  Tags: Array<Tag>;
}
export interface TagPolicyRequest {
  PolicyArn: string;
  Tags: Array<Tag>;
}
export interface TagRoleRequest {
  RoleName: string;
  Tags: Array<Tag>;
}
export interface TagSAMLProviderRequest {
  SAMLProviderArn: string;
  Tags: Array<Tag>;
}
export interface TagServerCertificateRequest {
  ServerCertificateName: string;
  Tags: Array<Tag>;
}
export interface TagUserRequest {
  UserName: string;
  Tags: Array<Tag>;
}
export type tagValueType = string;

export type thumbprintListType = Array<string>;
export type thumbprintType = string;

export interface TrackedActionLastAccessed {
  ActionName?: string;
  LastAccessedEntity?: string;
  LastAccessedTime?: Date | string;
  LastAccessedRegion?: string;
}
export type TrackedActionsLastAccessed = Array<TrackedActionLastAccessed>;
export declare class UnmodifiableEntityException extends Data.TaggedError(
  "UnmodifiableEntityException",
)<{
  readonly message?: string;
}> {}
export type unmodifiableEntityMessage = string;

export declare class UnrecognizedPublicKeyEncodingException extends Data.TaggedError(
  "UnrecognizedPublicKeyEncodingException",
)<{
  readonly message?: string;
}> {}
export type unrecognizedPublicKeyEncodingMessage = string;

export interface UntagInstanceProfileRequest {
  InstanceProfileName: string;
  TagKeys: Array<string>;
}
export interface UntagMFADeviceRequest {
  SerialNumber: string;
  TagKeys: Array<string>;
}
export interface UntagOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  TagKeys: Array<string>;
}
export interface UntagPolicyRequest {
  PolicyArn: string;
  TagKeys: Array<string>;
}
export interface UntagRoleRequest {
  RoleName: string;
  TagKeys: Array<string>;
}
export interface UntagSAMLProviderRequest {
  SAMLProviderArn: string;
  TagKeys: Array<string>;
}
export interface UntagServerCertificateRequest {
  ServerCertificateName: string;
  TagKeys: Array<string>;
}
export interface UntagUserRequest {
  UserName: string;
  TagKeys: Array<string>;
}
export interface UpdateAccessKeyRequest {
  UserName?: string;
  AccessKeyId: string;
  Status: statusType;
}
export interface UpdateAccountPasswordPolicyRequest {
  MinimumPasswordLength?: number;
  RequireSymbols?: boolean;
  RequireNumbers?: boolean;
  RequireUppercaseCharacters?: boolean;
  RequireLowercaseCharacters?: boolean;
  AllowUsersToChangePassword?: boolean;
  MaxPasswordAge?: number;
  PasswordReusePrevention?: number;
  HardExpiry?: boolean;
}
export interface UpdateAssumeRolePolicyRequest {
  RoleName: string;
  PolicyDocument: string;
}
export interface UpdateGroupRequest {
  GroupName: string;
  NewPath?: string;
  NewGroupName?: string;
}
export interface UpdateLoginProfileRequest {
  UserName: string;
  Password?: string;
  PasswordResetRequired?: boolean;
}
export interface UpdateOpenIDConnectProviderThumbprintRequest {
  OpenIDConnectProviderArn: string;
  ThumbprintList: Array<string>;
}
export interface UpdateRoleDescriptionRequest {
  RoleName: string;
  Description: string;
}
export interface UpdateRoleDescriptionResponse {
  Role?: Role;
}
export interface UpdateRoleRequest {
  RoleName: string;
  Description?: string;
  MaxSessionDuration?: number;
}
export interface UpdateRoleResponse {
}
export interface UpdateSAMLProviderRequest {
  SAMLMetadataDocument?: string;
  SAMLProviderArn: string;
  AssertionEncryptionMode?: assertionEncryptionModeType;
  AddPrivateKey?: string;
  RemovePrivateKey?: string;
}
export interface UpdateSAMLProviderResponse {
  SAMLProviderArn?: string;
}
export interface UpdateServerCertificateRequest {
  ServerCertificateName: string;
  NewPath?: string;
  NewServerCertificateName?: string;
}
export interface UpdateServiceSpecificCredentialRequest {
  UserName?: string;
  ServiceSpecificCredentialId: string;
  Status: statusType;
}
export interface UpdateSigningCertificateRequest {
  UserName?: string;
  CertificateId: string;
  Status: statusType;
}
export interface UpdateSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyId: string;
  Status: statusType;
}
export interface UpdateUserRequest {
  UserName: string;
  NewPath?: string;
  NewUserName?: string;
}
export interface UploadServerCertificateRequest {
  Path?: string;
  ServerCertificateName: string;
  CertificateBody: string;
  PrivateKey: string;
  CertificateChain?: string;
  Tags?: Array<Tag>;
}
export interface UploadServerCertificateResponse {
  ServerCertificateMetadata?: ServerCertificateMetadata;
  Tags?: Array<Tag>;
}
export interface UploadSigningCertificateRequest {
  UserName?: string;
  CertificateBody: string;
}
export interface UploadSigningCertificateResponse {
  Certificate: SigningCertificate;
}
export interface UploadSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyBody: string;
}
export interface UploadSSHPublicKeyResponse {
  SSHPublicKey?: SSHPublicKey;
}
export interface User {
  Path: string;
  UserName: string;
  UserId: string;
  Arn: string;
  CreateDate: Date | string;
  PasswordLastUsed?: Date | string;
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Array<Tag>;
}
export interface UserDetail {
  Path?: string;
  UserName?: string;
  UserId?: string;
  Arn?: string;
  CreateDate?: Date | string;
  UserPolicyList?: Array<PolicyDetail>;
  GroupList?: Array<string>;
  AttachedManagedPolicies?: Array<AttachedPolicy>;
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Array<Tag>;
}
export type userDetailListType = Array<UserDetail>;
export type userListType = Array<User>;
export type userNameType = string;

export interface VirtualMFADevice {
  SerialNumber: string;
  Base32StringSeed?: Uint8Array | string;
  QRCodePNG?: Uint8Array | string;
  User?: User;
  EnableDate?: Date | string;
  Tags?: Array<Tag>;
}
export type virtualMFADeviceListType = Array<VirtualMFADevice>;
export type virtualMFADeviceName = string;

export declare namespace AddClientIDToOpenIDConnectProvider {
  export type Input = AddClientIDToOpenIDConnectProviderRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace AddRoleToInstanceProfile {
  export type Input = AddRoleToInstanceProfileRequest;
  export type Output = {};
  export type Error =
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace AddUserToGroup {
  export type Input = AddUserToGroupRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace AttachGroupPolicy {
  export type Input = AttachGroupPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace AttachRolePolicy {
  export type Input = AttachRolePolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace AttachUserPolicy {
  export type Input = AttachUserPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ChangePassword {
  export type Input = ChangePasswordRequest;
  export type Output = {};
  export type Error =
    | EntityTemporarilyUnmodifiableException
    | InvalidUserTypeException
    | LimitExceededException
    | NoSuchEntityException
    | PasswordPolicyViolationException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateAccessKey {
  export type Input = CreateAccessKeyRequest;
  export type Output = CreateAccessKeyResponse;
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateAccountAlias {
  export type Input = CreateAccountAliasRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | LimitExceededException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = CreateGroupResponse;
  export type Error =
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateInstanceProfile {
  export type Input = CreateInstanceProfileRequest;
  export type Output = CreateInstanceProfileResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateLoginProfile {
  export type Input = CreateLoginProfileRequest;
  export type Output = CreateLoginProfileResponse;
  export type Error =
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | PasswordPolicyViolationException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateOpenIDConnectProvider {
  export type Input = CreateOpenIDConnectProviderRequest;
  export type Output = CreateOpenIDConnectProviderResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | OpenIdIdpCommunicationErrorException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreatePolicy {
  export type Input = CreatePolicyRequest;
  export type Output = CreatePolicyResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreatePolicyVersion {
  export type Input = CreatePolicyVersionRequest;
  export type Output = CreatePolicyVersionResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateRole {
  export type Input = CreateRoleRequest;
  export type Output = CreateRoleResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateSAMLProvider {
  export type Input = CreateSAMLProviderRequest;
  export type Output = CreateSAMLProviderResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateServiceLinkedRole {
  export type Input = CreateServiceLinkedRoleRequest;
  export type Output = CreateServiceLinkedRoleResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateServiceSpecificCredential {
  export type Input = CreateServiceSpecificCredentialRequest;
  export type Output = CreateServiceSpecificCredentialResponse;
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceNotSupportedException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace CreateVirtualMFADevice {
  export type Input = CreateVirtualMFADeviceRequest;
  export type Output = CreateVirtualMFADeviceResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeactivateMFADevice {
  export type Input = DeactivateMFADeviceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteAccessKey {
  export type Input = DeleteAccessKeyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteAccountAlias {
  export type Input = DeleteAccountAliasRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteAccountPasswordPolicy {
  export type Input = {};
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = {};
  export type Error =
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteGroupPolicy {
  export type Input = DeleteGroupPolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteInstanceProfile {
  export type Input = DeleteInstanceProfileRequest;
  export type Output = {};
  export type Error =
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteLoginProfile {
  export type Input = DeleteLoginProfileRequest;
  export type Output = {};
  export type Error =
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteOpenIDConnectProvider {
  export type Input = DeleteOpenIDConnectProviderRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyRequest;
  export type Output = {};
  export type Error =
    | DeleteConflictException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeletePolicyVersion {
  export type Input = DeletePolicyVersionRequest;
  export type Output = {};
  export type Error =
    | DeleteConflictException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteRole {
  export type Input = DeleteRoleRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace DeleteRolePermissionsBoundary {
  export type Input = DeleteRolePermissionsBoundaryRequest;
  export type Output = {};
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace DeleteRolePolicy {
  export type Input = DeleteRolePolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace DeleteSAMLProvider {
  export type Input = DeleteSAMLProviderRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteSSHPublicKey {
  export type Input = DeleteSSHPublicKeyRequest;
  export type Output = {};
  export type Error =
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace DeleteServerCertificate {
  export type Input = DeleteServerCertificateRequest;
  export type Output = {};
  export type Error =
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteServiceLinkedRole {
  export type Input = DeleteServiceLinkedRoleRequest;
  export type Output = DeleteServiceLinkedRoleResponse;
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteServiceSpecificCredential {
  export type Input = DeleteServiceSpecificCredentialRequest;
  export type Output = {};
  export type Error =
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace DeleteSigningCertificate {
  export type Input = DeleteSigningCertificateRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteUserPermissionsBoundary {
  export type Input = DeleteUserPermissionsBoundaryRequest;
  export type Output = {};
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteUserPolicy {
  export type Input = DeleteUserPolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DeleteVirtualMFADevice {
  export type Input = DeleteVirtualMFADeviceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DetachGroupPolicy {
  export type Input = DetachGroupPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DetachRolePolicy {
  export type Input = DetachRolePolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace DetachUserPolicy {
  export type Input = DetachUserPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DisableOrganizationsRootCredentialsManagement {
  export type Input = DisableOrganizationsRootCredentialsManagementRequest;
  export type Output = DisableOrganizationsRootCredentialsManagementResponse;
  export type Error =
    | AccountNotManagementOrDelegatedAdministratorException
    | OrganizationNotFoundException
    | OrganizationNotInAllFeaturesModeException
    | ServiceAccessNotEnabledException
    | CommonAwsError;
}

export declare namespace DisableOrganizationsRootSessions {
  export type Input = DisableOrganizationsRootSessionsRequest;
  export type Output = DisableOrganizationsRootSessionsResponse;
  export type Error =
    | AccountNotManagementOrDelegatedAdministratorException
    | OrganizationNotFoundException
    | OrganizationNotInAllFeaturesModeException
    | ServiceAccessNotEnabledException
    | CommonAwsError;
}

export declare namespace EnableMFADevice {
  export type Input = EnableMFADeviceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | EntityTemporarilyUnmodifiableException
    | InvalidAuthenticationCodeException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace EnableOrganizationsRootCredentialsManagement {
  export type Input = EnableOrganizationsRootCredentialsManagementRequest;
  export type Output = EnableOrganizationsRootCredentialsManagementResponse;
  export type Error =
    | AccountNotManagementOrDelegatedAdministratorException
    | CallerIsNotManagementAccountException
    | OrganizationNotFoundException
    | OrganizationNotInAllFeaturesModeException
    | ServiceAccessNotEnabledException
    | CommonAwsError;
}

export declare namespace EnableOrganizationsRootSessions {
  export type Input = EnableOrganizationsRootSessionsRequest;
  export type Output = EnableOrganizationsRootSessionsResponse;
  export type Error =
    | AccountNotManagementOrDelegatedAdministratorException
    | CallerIsNotManagementAccountException
    | OrganizationNotFoundException
    | OrganizationNotInAllFeaturesModeException
    | ServiceAccessNotEnabledException
    | CommonAwsError;
}

export declare namespace GenerateCredentialReport {
  export type Input = {};
  export type Output = GenerateCredentialReportResponse;
  export type Error =
    | LimitExceededException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GenerateOrganizationsAccessReport {
  export type Input = GenerateOrganizationsAccessReportRequest;
  export type Output = GenerateOrganizationsAccessReportResponse;
  export type Error =
    | ReportGenerationLimitExceededException
    | CommonAwsError;
}

export declare namespace GenerateServiceLastAccessedDetails {
  export type Input = GenerateServiceLastAccessedDetailsRequest;
  export type Output = GenerateServiceLastAccessedDetailsResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace GetAccessKeyLastUsed {
  export type Input = GetAccessKeyLastUsedRequest;
  export type Output = GetAccessKeyLastUsedResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace GetAccountAuthorizationDetails {
  export type Input = GetAccountAuthorizationDetailsRequest;
  export type Output = GetAccountAuthorizationDetailsResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetAccountPasswordPolicy {
  export type Input = {};
  export type Output = GetAccountPasswordPolicyResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetAccountSummary {
  export type Input = {};
  export type Output = GetAccountSummaryResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetContextKeysForCustomPolicy {
  export type Input = GetContextKeysForCustomPolicyRequest;
  export type Output = GetContextKeysForPolicyResponse;
  export type Error =
    | InvalidInputException
    | CommonAwsError;
}

export declare namespace GetContextKeysForPrincipalPolicy {
  export type Input = GetContextKeysForPrincipalPolicyRequest;
  export type Output = GetContextKeysForPolicyResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace GetCredentialReport {
  export type Input = {};
  export type Output = GetCredentialReportResponse;
  export type Error =
    | CredentialReportExpiredException
    | CredentialReportNotPresentException
    | CredentialReportNotReadyException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetGroup {
  export type Input = GetGroupRequest;
  export type Output = GetGroupResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetGroupPolicy {
  export type Input = GetGroupPolicyRequest;
  export type Output = GetGroupPolicyResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetInstanceProfile {
  export type Input = GetInstanceProfileRequest;
  export type Output = GetInstanceProfileResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetLoginProfile {
  export type Input = GetLoginProfileRequest;
  export type Output = GetLoginProfileResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetMFADevice {
  export type Input = GetMFADeviceRequest;
  export type Output = GetMFADeviceResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetOpenIDConnectProvider {
  export type Input = GetOpenIDConnectProviderRequest;
  export type Output = GetOpenIDConnectProviderResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetOrganizationsAccessReport {
  export type Input = GetOrganizationsAccessReportRequest;
  export type Output = GetOrganizationsAccessReportResponse;
  export type Error =
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = GetPolicyResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetPolicyVersion {
  export type Input = GetPolicyVersionRequest;
  export type Output = GetPolicyVersionResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetRole {
  export type Input = GetRoleRequest;
  export type Output = GetRoleResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetRolePolicy {
  export type Input = GetRolePolicyRequest;
  export type Output = GetRolePolicyResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetSAMLProvider {
  export type Input = GetSAMLProviderRequest;
  export type Output = GetSAMLProviderResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetSSHPublicKey {
  export type Input = GetSSHPublicKeyRequest;
  export type Output = GetSSHPublicKeyResponse;
  export type Error =
    | NoSuchEntityException
    | UnrecognizedPublicKeyEncodingException
    | CommonAwsError;
}

export declare namespace GetServerCertificate {
  export type Input = GetServerCertificateRequest;
  export type Output = GetServerCertificateResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetServiceLastAccessedDetails {
  export type Input = GetServiceLastAccessedDetailsRequest;
  export type Output = GetServiceLastAccessedDetailsResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace GetServiceLastAccessedDetailsWithEntities {
  export type Input = GetServiceLastAccessedDetailsWithEntitiesRequest;
  export type Output = GetServiceLastAccessedDetailsWithEntitiesResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace GetServiceLinkedRoleDeletionStatus {
  export type Input = GetServiceLinkedRoleDeletionStatusRequest;
  export type Output = GetServiceLinkedRoleDeletionStatusResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetUser {
  export type Input = GetUserRequest;
  export type Output = GetUserResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetUserPolicy {
  export type Input = GetUserPolicyRequest;
  export type Output = GetUserPolicyResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListAccessKeys {
  export type Input = ListAccessKeysRequest;
  export type Output = ListAccessKeysResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListAccountAliases {
  export type Input = ListAccountAliasesRequest;
  export type Output = ListAccountAliasesResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListAttachedGroupPolicies {
  export type Input = ListAttachedGroupPoliciesRequest;
  export type Output = ListAttachedGroupPoliciesResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListAttachedRolePolicies {
  export type Input = ListAttachedRolePoliciesRequest;
  export type Output = ListAttachedRolePoliciesResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListAttachedUserPolicies {
  export type Input = ListAttachedUserPoliciesRequest;
  export type Output = ListAttachedUserPoliciesResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListEntitiesForPolicy {
  export type Input = ListEntitiesForPolicyRequest;
  export type Output = ListEntitiesForPolicyResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListGroupPolicies {
  export type Input = ListGroupPoliciesRequest;
  export type Output = ListGroupPoliciesResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = ListGroupsResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListGroupsForUser {
  export type Input = ListGroupsForUserRequest;
  export type Output = ListGroupsForUserResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListInstanceProfileTags {
  export type Input = ListInstanceProfileTagsRequest;
  export type Output = ListInstanceProfileTagsResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListInstanceProfiles {
  export type Input = ListInstanceProfilesRequest;
  export type Output = ListInstanceProfilesResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListInstanceProfilesForRole {
  export type Input = ListInstanceProfilesForRoleRequest;
  export type Output = ListInstanceProfilesForRoleResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListMFADeviceTags {
  export type Input = ListMFADeviceTagsRequest;
  export type Output = ListMFADeviceTagsResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListMFADevices {
  export type Input = ListMFADevicesRequest;
  export type Output = ListMFADevicesResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListOpenIDConnectProviderTags {
  export type Input = ListOpenIDConnectProviderTagsRequest;
  export type Output = ListOpenIDConnectProviderTagsResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListOpenIDConnectProviders {
  export type Input = ListOpenIDConnectProvidersRequest;
  export type Output = ListOpenIDConnectProvidersResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListOrganizationsFeatures {
  export type Input = ListOrganizationsFeaturesRequest;
  export type Output = ListOrganizationsFeaturesResponse;
  export type Error =
    | AccountNotManagementOrDelegatedAdministratorException
    | OrganizationNotFoundException
    | OrganizationNotInAllFeaturesModeException
    | ServiceAccessNotEnabledException
    | CommonAwsError;
}

export declare namespace ListPolicies {
  export type Input = ListPoliciesRequest;
  export type Output = ListPoliciesResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListPoliciesGrantingServiceAccess {
  export type Input = ListPoliciesGrantingServiceAccessRequest;
  export type Output = ListPoliciesGrantingServiceAccessResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListPolicyTags {
  export type Input = ListPolicyTagsRequest;
  export type Output = ListPolicyTagsResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListPolicyVersions {
  export type Input = ListPolicyVersionsRequest;
  export type Output = ListPolicyVersionsResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListRolePolicies {
  export type Input = ListRolePoliciesRequest;
  export type Output = ListRolePoliciesResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListRoleTags {
  export type Input = ListRoleTagsRequest;
  export type Output = ListRoleTagsResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListRoles {
  export type Input = ListRolesRequest;
  export type Output = ListRolesResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListSAMLProviderTags {
  export type Input = ListSAMLProviderTagsRequest;
  export type Output = ListSAMLProviderTagsResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListSAMLProviders {
  export type Input = ListSAMLProvidersRequest;
  export type Output = ListSAMLProvidersResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListSSHPublicKeys {
  export type Input = ListSSHPublicKeysRequest;
  export type Output = ListSSHPublicKeysResponse;
  export type Error =
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ListServerCertificateTags {
  export type Input = ListServerCertificateTagsRequest;
  export type Output = ListServerCertificateTagsResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListServerCertificates {
  export type Input = ListServerCertificatesRequest;
  export type Output = ListServerCertificatesResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListServiceSpecificCredentials {
  export type Input = ListServiceSpecificCredentialsRequest;
  export type Output = ListServiceSpecificCredentialsResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceNotSupportedException
    | CommonAwsError;
}

export declare namespace ListSigningCertificates {
  export type Input = ListSigningCertificatesRequest;
  export type Output = ListSigningCertificatesResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListUserPolicies {
  export type Input = ListUserPoliciesRequest;
  export type Output = ListUserPoliciesResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListUserTags {
  export type Input = ListUserTagsRequest;
  export type Output = ListUserTagsResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListVirtualMFADevices {
  export type Input = ListVirtualMFADevicesRequest;
  export type Output = ListVirtualMFADevicesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace PutGroupPolicy {
  export type Input = PutGroupPolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace PutRolePermissionsBoundary {
  export type Input = PutRolePermissionsBoundaryRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace PutRolePolicy {
  export type Input = PutRolePolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace PutUserPermissionsBoundary {
  export type Input = PutUserPermissionsBoundaryRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace PutUserPolicy {
  export type Input = PutUserPolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace RemoveClientIDFromOpenIDConnectProvider {
  export type Input = RemoveClientIDFromOpenIDConnectProviderRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace RemoveRoleFromInstanceProfile {
  export type Input = RemoveRoleFromInstanceProfileRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace RemoveUserFromGroup {
  export type Input = RemoveUserFromGroupRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ResetServiceSpecificCredential {
  export type Input = ResetServiceSpecificCredentialRequest;
  export type Output = ResetServiceSpecificCredentialResponse;
  export type Error =
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace ResyncMFADevice {
  export type Input = ResyncMFADeviceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidAuthenticationCodeException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace SetDefaultPolicyVersion {
  export type Input = SetDefaultPolicyVersionRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace SetSecurityTokenServicePreferences {
  export type Input = SetSecurityTokenServicePreferencesRequest;
  export type Output = {};
  export type Error =
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace SimulateCustomPolicy {
  export type Input = SimulateCustomPolicyRequest;
  export type Output = SimulatePolicyResponse;
  export type Error =
    | InvalidInputException
    | PolicyEvaluationException
    | CommonAwsError;
}

export declare namespace SimulatePrincipalPolicy {
  export type Input = SimulatePrincipalPolicyRequest;
  export type Output = SimulatePolicyResponse;
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | PolicyEvaluationException
    | CommonAwsError;
}

export declare namespace TagInstanceProfile {
  export type Input = TagInstanceProfileRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace TagMFADevice {
  export type Input = TagMFADeviceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace TagOpenIDConnectProvider {
  export type Input = TagOpenIDConnectProviderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace TagPolicy {
  export type Input = TagPolicyRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace TagRole {
  export type Input = TagRoleRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace TagSAMLProvider {
  export type Input = TagSAMLProviderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace TagServerCertificate {
  export type Input = TagServerCertificateRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace TagUser {
  export type Input = TagUserRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagInstanceProfile {
  export type Input = UntagInstanceProfileRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagMFADevice {
  export type Input = UntagMFADeviceRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagOpenIDConnectProvider {
  export type Input = UntagOpenIDConnectProviderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagPolicy {
  export type Input = UntagPolicyRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagRole {
  export type Input = UntagRoleRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagSAMLProvider {
  export type Input = UntagSAMLProviderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagServerCertificate {
  export type Input = UntagServerCertificateRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UntagUser {
  export type Input = UntagUserRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateAccessKey {
  export type Input = UpdateAccessKeyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateAccountPasswordPolicy {
  export type Input = UpdateAccountPasswordPolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateAssumeRolePolicy {
  export type Input = UpdateAssumeRolePolicyRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = {};
  export type Error =
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateLoginProfile {
  export type Input = UpdateLoginProfileRequest;
  export type Output = {};
  export type Error =
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | PasswordPolicyViolationException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateOpenIDConnectProviderThumbprint {
  export type Input = UpdateOpenIDConnectProviderThumbprintRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateRole {
  export type Input = UpdateRoleRequest;
  export type Output = UpdateRoleResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace UpdateRoleDescription {
  export type Input = UpdateRoleDescriptionRequest;
  export type Output = UpdateRoleDescriptionResponse;
  export type Error =
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
    | CommonAwsError;
}

export declare namespace UpdateSAMLProvider {
  export type Input = UpdateSAMLProviderRequest;
  export type Output = UpdateSAMLProviderResponse;
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateSSHPublicKey {
  export type Input = UpdateSSHPublicKeyRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace UpdateServerCertificate {
  export type Input = UpdateServerCertificateRequest;
  export type Output = {};
  export type Error =
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateServiceSpecificCredential {
  export type Input = UpdateServiceSpecificCredentialRequest;
  export type Output = {};
  export type Error =
    | NoSuchEntityException
    | CommonAwsError;
}

export declare namespace UpdateSigningCertificate {
  export type Input = UpdateSigningCertificateRequest;
  export type Output = {};
  export type Error =
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UploadSSHPublicKey {
  export type Input = UploadSSHPublicKeyRequest;
  export type Output = UploadSSHPublicKeyResponse;
  export type Error =
    | DuplicateSSHPublicKeyException
    | InvalidPublicKeyException
    | LimitExceededException
    | NoSuchEntityException
    | UnrecognizedPublicKeyEncodingException
    | CommonAwsError;
}

export declare namespace UploadServerCertificate {
  export type Input = UploadServerCertificateRequest;
  export type Output = UploadServerCertificateResponse;
  export type Error =
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | KeyPairMismatchException
    | LimitExceededException
    | MalformedCertificateException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace UploadSigningCertificate {
  export type Input = UploadSigningCertificateRequest;
  export type Output = UploadSigningCertificateResponse;
  export type Error =
    | ConcurrentModificationException
    | DuplicateCertificateException
    | EntityAlreadyExistsException
    | InvalidCertificateException
    | LimitExceededException
    | MalformedCertificateException
    | NoSuchEntityException
    | ServiceFailureException
    | CommonAwsError;
}

