import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSCognitoIdentityProviderService {
  addCustomAttributes(
    input: AddCustomAttributesRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserImportInProgressException | CommonAwsError
  >;
  adminAddUserToGroup(
    input: AdminAddUserToGroupRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminConfirmSignUp(
    input: AdminConfirmSignUpRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidLambdaResponseException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyFailedAttemptsException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotFoundException | CommonAwsError
  >;
  adminCreateUser(
    input: AdminCreateUserRequest,
  ): Effect.Effect<
    {},
    CodeDeliveryFailureException | InternalErrorException | InvalidLambdaResponseException | InvalidParameterException | InvalidPasswordException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | NotAuthorizedException | PreconditionNotMetException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UnsupportedUserStateException | UserLambdaValidationException | UsernameExistsException | UserNotFoundException | CommonAwsError
  >;
  adminDeleteUser(
    input: AdminDeleteUserRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminDeleteUserAttributes(
    input: AdminDeleteUserAttributesRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminDisableProviderForUser(
    input: AdminDisableProviderForUserRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminDisableUser(
    input: AdminDisableUserRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminEnableUser(
    input: AdminEnableUserRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminForgetDevice(
    input: AdminForgetDeviceRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminGetDevice(
    input: AdminGetDeviceRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  adminGetUser(
    input: AdminGetUserRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminInitiateAuth(
    input: AdminInitiateAuthRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | InvalidUserPoolConfigurationException | MFAMethodNotFoundException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UnsupportedOperationException | UserLambdaValidationException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  adminLinkProviderForUser(
    input: AdminLinkProviderForUserRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminListDevices(
    input: AdminListDevicesRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  adminListGroupsForUser(
    input: AdminListGroupsForUserRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminListUserAuthEvents(
    input: AdminListUserAuthEventsRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | UserPoolAddOnNotEnabledException | CommonAwsError
  >;
  adminRemoveUserFromGroup(
    input: AdminRemoveUserFromGroupRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminResetUserPassword(
    input: AdminResetUserPasswordRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotFoundException | CommonAwsError
  >;
  adminRespondToAuthChallenge(
    input: AdminRespondToAuthChallengeRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | CodeMismatchException | ExpiredCodeException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidPasswordException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | InvalidUserPoolConfigurationException | MFAMethodNotFoundException | NotAuthorizedException | PasswordHistoryPolicyViolationException | PasswordResetRequiredException | ResourceNotFoundException | SoftwareTokenMFANotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  adminSetUserMFAPreference(
    input: AdminSetUserMFAPreferenceRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  adminSetUserPassword(
    input: AdminSetUserPasswordRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | InvalidPasswordException | NotAuthorizedException | PasswordHistoryPolicyViolationException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminSetUserSettings(
    input: AdminSetUserSettingsRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | UserNotFoundException | CommonAwsError
  >;
  adminUpdateAuthEventFeedback(
    input: AdminUpdateAuthEventFeedbackRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | UserPoolAddOnNotEnabledException | CommonAwsError
  >;
  adminUpdateDeviceStatus(
    input: AdminUpdateDeviceStatusRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  adminUpdateUserAttributes(
    input: AdminUpdateUserAttributesRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotFoundException | CommonAwsError
  >;
  adminUserGlobalSignOut(
    input: AdminUserGlobalSignOutRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | CommonAwsError
  >;
  associateSoftwareToken(
    input: AssociateSoftwareTokenRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | SoftwareTokenMFANotFoundException | CommonAwsError
  >;
  changePassword(
    input: ChangePasswordRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | InvalidPasswordException | LimitExceededException | NotAuthorizedException | PasswordHistoryPolicyViolationException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  completeWebAuthnRegistration(
    input: CompleteWebAuthnRegistrationRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | TooManyRequestsException | WebAuthnChallengeNotFoundException | WebAuthnClientMismatchException | WebAuthnCredentialNotSupportedException | WebAuthnNotEnabledException | WebAuthnOriginNotAllowedException | WebAuthnRelyingPartyMismatchException | CommonAwsError
  >;
  confirmDevice(
    input: ConfirmDeviceRequest,
  ): Effect.Effect<
    {},
    DeviceKeyExistsException | ForbiddenException | InternalErrorException | InvalidLambdaResponseException | InvalidParameterException | InvalidPasswordException | InvalidUserPoolConfigurationException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UsernameExistsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  confirmForgotPassword(
    input: ConfirmForgotPasswordRequest,
  ): Effect.Effect<
    {},
    CodeMismatchException | ExpiredCodeException | ForbiddenException | InternalErrorException | InvalidLambdaResponseException | InvalidParameterException | InvalidPasswordException | LimitExceededException | NotAuthorizedException | PasswordHistoryPolicyViolationException | ResourceNotFoundException | TooManyFailedAttemptsException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  confirmSignUp(
    input: ConfirmSignUpRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | CodeMismatchException | ExpiredCodeException | ForbiddenException | InternalErrorException | InvalidLambdaResponseException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyFailedAttemptsException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotFoundException | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    {},
    GroupExistsException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createIdentityProvider(
    input: CreateIdentityProviderRequest,
  ): Effect.Effect<
    {},
    DuplicateProviderException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createManagedLoginBranding(
    input: CreateManagedLoginBrandingRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | LimitExceededException | ManagedLoginBrandingExistsException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createResourceServer(
    input: CreateResourceServerRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createUserImportJob(
    input: CreateUserImportJobRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | PreconditionNotMetException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createUserPool(
    input: CreateUserPoolRequest,
  ): Effect.Effect<
    {},
    FeatureUnavailableInTierException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | LimitExceededException | NotAuthorizedException | TierChangeNotAllowedException | TooManyRequestsException | UserPoolTaggingException | CommonAwsError
  >;
  createUserPoolClient(
    input: CreateUserPoolClientRequest,
  ): Effect.Effect<
    {},
    FeatureUnavailableInTierException | InternalErrorException | InvalidOAuthFlowException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | ScopeDoesNotExistException | TooManyRequestsException | CommonAwsError
  >;
  createUserPoolDomain(
    input: CreateUserPoolDomainRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | FeatureUnavailableInTierException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteIdentityProvider(
    input: DeleteIdentityProviderRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UnsupportedIdentityProviderException | CommonAwsError
  >;
  deleteManagedLoginBranding(
    input: DeleteManagedLoginBrandingRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteResourceServer(
    input: DeleteResourceServerRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  deleteUserAttributes(
    input: DeleteUserAttributesRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  deleteUserPool(
    input: DeleteUserPoolRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserImportInProgressException | CommonAwsError
  >;
  deleteUserPoolClient(
    input: DeleteUserPoolClientRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteUserPoolDomain(
    input: DeleteUserPoolDomainRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  >;
  deleteWebAuthnCredential(
    input: DeleteWebAuthnCredentialRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeIdentityProvider(
    input: DescribeIdentityProviderRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeManagedLoginBranding(
    input: DescribeManagedLoginBrandingRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeManagedLoginBrandingByClient(
    input: DescribeManagedLoginBrandingByClientRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeResourceServer(
    input: DescribeResourceServerRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeRiskConfiguration(
    input: DescribeRiskConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserPoolAddOnNotEnabledException | CommonAwsError
  >;
  describeUserImportJob(
    input: DescribeUserImportJobRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeUserPool(
    input: DescribeUserPoolRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserPoolTaggingException | CommonAwsError
  >;
  describeUserPoolClient(
    input: DescribeUserPoolClientRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeUserPoolDomain(
    input: DescribeUserPoolDomainRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  >;
  forgetDevice(
    input: ForgetDeviceRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  forgotPassword(
    input: ForgotPasswordRequest,
  ): Effect.Effect<
    {},
    CodeDeliveryFailureException | ForbiddenException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotFoundException | CommonAwsError
  >;
  getCSVHeader(
    input: GetCSVHeaderRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDevice(
    input: GetDeviceRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  getGroup(
    input: GetGroupRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getIdentityProviderByIdentifier(
    input: GetIdentityProviderByIdentifierRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getLogDeliveryConfiguration(
    input: GetLogDeliveryConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getSigningCertificate(
    input: GetSigningCertificateRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getTokensFromRefreshToken(
    input: GetTokensFromRefreshTokenRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidLambdaResponseException | InvalidParameterException | NotAuthorizedException | RefreshTokenReuseException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotFoundException | CommonAwsError
  >;
  getUICustomization(
    input: GetUICustomizationRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getUser(
    input: GetUserRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  getUserAttributeVerificationCode(
    input: GetUserAttributeVerificationCodeRequest,
  ): Effect.Effect<
    {},
    CodeDeliveryFailureException | ForbiddenException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | LimitExceededException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  getUserAuthFactors(
    input: GetUserAuthFactorsRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  getUserPoolMfaConfig(
    input: GetUserPoolMfaConfigRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  globalSignOut(
    input: GlobalSignOutRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | CommonAwsError
  >;
  initiateAuth(
    input: InitiateAuthRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | InvalidUserPoolConfigurationException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UnsupportedOperationException | UserLambdaValidationException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  listDevices(
    input: ListDevicesRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listIdentityProviders(
    input: ListIdentityProvidersRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listResourceServers(
    input: ListResourceServersRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listUserImportJobs(
    input: ListUserImportJobsRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listUserPoolClients(
    input: ListUserPoolClientsRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listUserPools(
    input: ListUserPoolsRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | TooManyRequestsException | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listUsersInGroup(
    input: ListUsersInGroupRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listWebAuthnCredentials(
    input: ListWebAuthnCredentialsRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | TooManyRequestsException | CommonAwsError
  >;
  resendConfirmationCode(
    input: ResendConfirmationCodeRequest,
  ): Effect.Effect<
    {},
    CodeDeliveryFailureException | ForbiddenException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotFoundException | CommonAwsError
  >;
  respondToAuthChallenge(
    input: RespondToAuthChallengeRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | CodeMismatchException | ExpiredCodeException | ForbiddenException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidPasswordException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | InvalidUserPoolConfigurationException | MFAMethodNotFoundException | NotAuthorizedException | PasswordHistoryPolicyViolationException | PasswordResetRequiredException | ResourceNotFoundException | SoftwareTokenMFANotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  revokeToken(
    input: RevokeTokenRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | TooManyRequestsException | UnauthorizedException | UnsupportedOperationException | UnsupportedTokenTypeException | CommonAwsError
  >;
  setLogDeliveryConfiguration(
    input: SetLogDeliveryConfigurationRequest,
  ): Effect.Effect<
    {},
    FeatureUnavailableInTierException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  setRiskConfiguration(
    input: SetRiskConfigurationRequest,
  ): Effect.Effect<
    {},
    CodeDeliveryFailureException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserPoolAddOnNotEnabledException | CommonAwsError
  >;
  setUICustomization(
    input: SetUICustomizationRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  setUserMFAPreference(
    input: SetUserMFAPreferenceRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  setUserPoolMfaConfig(
    input: SetUserPoolMfaConfigRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | FeatureUnavailableInTierException | InternalErrorException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  setUserSettings(
    input: SetUserSettingsRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  signUp(
    input: SignUpRequest,
  ): Effect.Effect<
    {},
    CodeDeliveryFailureException | ForbiddenException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidPasswordException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | LimitExceededException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UsernameExistsException | CommonAwsError
  >;
  startUserImportJob(
    input: StartUserImportJobRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | PreconditionNotMetException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  startWebAuthnRegistration(
    input: StartWebAuthnRegistrationRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | TooManyRequestsException | WebAuthnConfigurationMissingException | WebAuthnNotEnabledException | CommonAwsError
  >;
  stopUserImportJob(
    input: StopUserImportJobRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | PreconditionNotMetException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateAuthEventFeedback(
    input: UpdateAuthEventFeedbackRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UserNotFoundException | UserPoolAddOnNotEnabledException | CommonAwsError
  >;
  updateDeviceStatus(
    input: UpdateDeviceStatusRequest,
  ): Effect.Effect<
    {},
    ForbiddenException | InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateIdentityProvider(
    input: UpdateIdentityProviderRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | UnsupportedIdentityProviderException | CommonAwsError
  >;
  updateManagedLoginBranding(
    input: UpdateManagedLoginBrandingRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateResourceServer(
    input: UpdateResourceServerRequest,
  ): Effect.Effect<
    {},
    InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateUserAttributes(
    input: UpdateUserAttributesRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | CodeDeliveryFailureException | CodeMismatchException | ExpiredCodeException | ForbiddenException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidLambdaResponseException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UnexpectedLambdaException | UserLambdaValidationException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  updateUserPool(
    input: UpdateUserPoolRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | FeatureUnavailableInTierException | InternalErrorException | InvalidEmailRoleAccessPolicyException | InvalidParameterException | InvalidSmsRoleAccessPolicyException | InvalidSmsRoleTrustRelationshipException | NotAuthorizedException | ResourceNotFoundException | TierChangeNotAllowedException | TooManyRequestsException | UserImportInProgressException | UserPoolTaggingException | CommonAwsError
  >;
  updateUserPoolClient(
    input: UpdateUserPoolClientRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | FeatureUnavailableInTierException | InternalErrorException | InvalidOAuthFlowException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | ScopeDoesNotExistException | TooManyRequestsException | CommonAwsError
  >;
  updateUserPoolDomain(
    input: UpdateUserPoolDomainRequest,
  ): Effect.Effect<
    {},
    ConcurrentModificationException | FeatureUnavailableInTierException | InternalErrorException | InvalidParameterException | NotAuthorizedException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  verifySoftwareToken(
    input: VerifySoftwareTokenRequest,
  ): Effect.Effect<
    {},
    CodeMismatchException | EnableSoftwareTokenMFAException | ForbiddenException | InternalErrorException | InvalidParameterException | InvalidUserPoolConfigurationException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | SoftwareTokenMFANotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
  verifyUserAttribute(
    input: VerifyUserAttributeRequest,
  ): Effect.Effect<
    {},
    AliasExistsException | CodeMismatchException | ExpiredCodeException | ForbiddenException | InternalErrorException | InvalidParameterException | LimitExceededException | NotAuthorizedException | PasswordResetRequiredException | ResourceNotFoundException | TooManyRequestsException | UserNotConfirmedException | UserNotFoundException | CommonAwsError
  >;
}

export type CognitoIdentityProvider = AWSCognitoIdentityProviderService;

export type AccessTokenValidityType = number;

export interface AccountRecoverySettingType {
}
export type AccountTakeoverActionNotifyType = boolean;

export interface AccountTakeoverActionsType {
}
export interface AccountTakeoverActionType {
}
export type AccountTakeoverEventActionType = never;
export interface AccountTakeoverRiskConfigurationType {
}
export interface AddCustomAttributesRequest {
}
export interface AddCustomAttributesResponse {
}
export interface AdminAddUserToGroupRequest {
}
export interface AdminConfirmSignUpRequest {
}
export interface AdminConfirmSignUpResponse {
}
export interface AdminCreateUserConfigType {
}
export interface AdminCreateUserRequest {
}
export interface AdminCreateUserResponse {
}
export type AdminCreateUserUnusedAccountValidityDaysType = number;

export interface AdminDeleteUserAttributesRequest {
}
export interface AdminDeleteUserAttributesResponse {
}
export interface AdminDeleteUserRequest {
}
export interface AdminDisableProviderForUserRequest {
}
export interface AdminDisableProviderForUserResponse {
}
export interface AdminDisableUserRequest {
}
export interface AdminDisableUserResponse {
}
export interface AdminEnableUserRequest {
}
export interface AdminEnableUserResponse {
}
export interface AdminForgetDeviceRequest {
}
export interface AdminGetDeviceRequest {
}
export interface AdminGetDeviceResponse {
}
export interface AdminGetUserRequest {
}
export interface AdminGetUserResponse {
}
export interface AdminInitiateAuthRequest {
}
export interface AdminInitiateAuthResponse {
}
export interface AdminLinkProviderForUserRequest {
}
export interface AdminLinkProviderForUserResponse {
}
export interface AdminListDevicesRequest {
}
export interface AdminListDevicesResponse {
}
export interface AdminListGroupsForUserRequest {
}
export interface AdminListGroupsForUserResponse {
}
export interface AdminListUserAuthEventsRequest {
}
export interface AdminListUserAuthEventsResponse {
}
export interface AdminRemoveUserFromGroupRequest {
}
export interface AdminResetUserPasswordRequest {
}
export interface AdminResetUserPasswordResponse {
}
export interface AdminRespondToAuthChallengeRequest {
}
export interface AdminRespondToAuthChallengeResponse {
}
export interface AdminSetUserMFAPreferenceRequest {
}
export interface AdminSetUserMFAPreferenceResponse {
}
export interface AdminSetUserPasswordRequest {
}
export interface AdminSetUserPasswordResponse {
}
export interface AdminSetUserSettingsRequest {
}
export interface AdminSetUserSettingsResponse {
}
export interface AdminUpdateAuthEventFeedbackRequest {
}
export interface AdminUpdateAuthEventFeedbackResponse {
}
export interface AdminUpdateDeviceStatusRequest {
}
export interface AdminUpdateDeviceStatusResponse {
}
export interface AdminUpdateUserAttributesRequest {
}
export interface AdminUpdateUserAttributesResponse {
}
export interface AdminUserGlobalSignOutRequest {
}
export interface AdminUserGlobalSignOutResponse {
}
export interface AdvancedSecurityAdditionalFlowsType {
}
export type AdvancedSecurityEnabledModeType = never;
export type AdvancedSecurityModeType = never;
export type AliasAttributesListType = Array<unknown>;
export type AliasAttributeType = never;
export interface AliasExistsException {
}
export type AllowedFirstAuthFactorsListType = Array<unknown>;
export interface AnalyticsConfigurationType {
}
export interface AnalyticsMetadataType {
}
export type ArnType = string;

export type AssetBytesType = Uint8Array | string;

export type AssetCategoryType = never;
export type AssetExtensionType = never;
export type AssetListType = Array<unknown>;
export interface AssetType {
}
export interface AssociateSoftwareTokenRequest {
}
export interface AssociateSoftwareTokenResponse {
}
export type AttributeDataType = never;
export type AttributeListType = Array<unknown>;
export type AttributeMappingKeyType = string;

export type AttributeMappingType = Record<string, unknown>;
export type AttributeNameListType = Array<unknown>;
export type AttributeNameType = string;

export type AttributesRequireVerificationBeforeUpdateType = Array<unknown>;
export interface AttributeType {
}
export type AttributeValueType = string;

export interface AuthenticationResultType {
}
export type AuthEventsType = Array<unknown>;
export interface AuthEventType {
}
export type AuthFactorType = never;
export type AuthFlowType = never;
export type AuthParametersType = Record<string, unknown>;
export type AuthSessionValidityType = number;

export type AvailableChallengeListType = Array<unknown>;
export type AWSAccountIdType = string;

export type BlockedIPRangeListType = Array<unknown>;
export type BooleanType = boolean;

export type CallbackURLsListType = Array<unknown>;
export type ChallengeName = never;
export type ChallengeNameType = never;
export type ChallengeParametersType = Record<string, unknown>;
export type ChallengeResponse = never;
export type ChallengeResponseListType = Array<unknown>;
export type ChallengeResponsesType = Record<string, unknown>;
export interface ChallengeResponseType {
}
export interface ChangePasswordRequest {
}
export interface ChangePasswordResponse {
}
export type ClientIdType = string;

export type ClientMetadataType = Record<string, unknown>;
export type ClientNameType = string;

export type ClientPermissionListType = Array<unknown>;
export type ClientPermissionType = string;

export type ClientSecretType = string;

export interface CloudWatchLogsConfigurationType {
}
export type CodeDeliveryDetailsListType = Array<unknown>;
export interface CodeDeliveryDetailsType {
}
export interface CodeDeliveryFailureException {
}
export interface CodeMismatchException {
}
export type ColorSchemeModeType = never;
export interface CompleteWebAuthnRegistrationRequest {
}
export interface CompleteWebAuthnRegistrationResponse {
}
export type CompletionMessageType = string;

export interface CompromisedCredentialsActionsType {
}
export type CompromisedCredentialsEventActionType = never;
export interface CompromisedCredentialsRiskConfigurationType {
}
export interface ConcurrentModificationException {
}
export type ConfiguredUserAuthFactorsListType = Array<unknown>;
export type ConfirmationCodeType = string;

export interface ConfirmDeviceRequest {
}
export interface ConfirmDeviceResponse {
}
export interface ConfirmForgotPasswordRequest {
}
export interface ConfirmForgotPasswordResponse {
}
export interface ConfirmSignUpRequest {
}
export interface ConfirmSignUpResponse {
}
export interface ContextDataType {
}
export interface CreateGroupRequest {
}
export interface CreateGroupResponse {
}
export interface CreateIdentityProviderRequest {
}
export interface CreateIdentityProviderResponse {
}
export interface CreateManagedLoginBrandingRequest {
}
export interface CreateManagedLoginBrandingResponse {
}
export interface CreateResourceServerRequest {
}
export interface CreateResourceServerResponse {
}
export interface CreateUserImportJobRequest {
}
export interface CreateUserImportJobResponse {
}
export interface CreateUserPoolClientRequest {
}
export interface CreateUserPoolClientResponse {
}
export interface CreateUserPoolDomainRequest {
}
export interface CreateUserPoolDomainResponse {
}
export interface CreateUserPoolRequest {
}
export interface CreateUserPoolResponse {
}
export type CSSType = string;

export type CSSVersionType = string;

export type CustomAttributeNameType = string;

export type CustomAttributesListType = Array<unknown>;
export interface CustomDomainConfigType {
}
export interface CustomEmailLambdaVersionConfigType {
}
export type CustomEmailSenderLambdaVersionType = never;
export interface CustomSMSLambdaVersionConfigType {
}
export type CustomSMSSenderLambdaVersionType = never;
export type DateType = Date | string;

export type DefaultEmailOptionType = never;
export interface DeleteGroupRequest {
}
export interface DeleteIdentityProviderRequest {
}
export interface DeleteManagedLoginBrandingRequest {
}
export interface DeleteResourceServerRequest {
}
export interface DeleteUserAttributesRequest {
}
export interface DeleteUserAttributesResponse {
}
export interface DeleteUserPoolClientRequest {
}
export interface DeleteUserPoolDomainRequest {
}
export interface DeleteUserPoolDomainResponse {
}
export interface DeleteUserPoolRequest {
}
export interface DeleteUserRequest {
}
export interface DeleteWebAuthnCredentialRequest {
}
export interface DeleteWebAuthnCredentialResponse {
}
export type DeletionProtectionType = never;
export type DeliveryMediumListType = Array<unknown>;
export type DeliveryMediumType = never;
export interface DescribeIdentityProviderRequest {
}
export interface DescribeIdentityProviderResponse {
}
export interface DescribeManagedLoginBrandingByClientRequest {
}
export interface DescribeManagedLoginBrandingByClientResponse {
}
export interface DescribeManagedLoginBrandingRequest {
}
export interface DescribeManagedLoginBrandingResponse {
}
export interface DescribeResourceServerRequest {
}
export interface DescribeResourceServerResponse {
}
export interface DescribeRiskConfigurationRequest {
}
export interface DescribeRiskConfigurationResponse {
}
export interface DescribeUserImportJobRequest {
}
export interface DescribeUserImportJobResponse {
}
export interface DescribeUserPoolClientRequest {
}
export interface DescribeUserPoolClientResponse {
}
export interface DescribeUserPoolDomainRequest {
}
export interface DescribeUserPoolDomainResponse {
}
export interface DescribeUserPoolRequest {
}
export interface DescribeUserPoolResponse {
}
export type DescriptionType = string;

export interface DeviceConfigurationType {
}
export interface DeviceKeyExistsException {
}
export type DeviceKeyType = string;

export type DeviceListType = Array<unknown>;
export type DeviceNameType = string;

export type DeviceRememberedStatusType = never;
export interface DeviceSecretVerifierConfigType {
}
export interface DeviceType {
}
export interface DomainDescriptionType {
}
export type DomainStatusType = never;
export type DomainType = string;

export type DomainVersionType = string;

export interface DuplicateProviderException {
}
export type EmailAddressType = string;

export interface EmailConfigurationType {
}
export type EmailInviteMessageType = string;

export interface EmailMfaConfigType {
}
export type EmailMfaMessageType = string;

export interface EmailMfaSettingsType {
}
export type EmailMfaSubjectType = string;

export type EmailNotificationBodyType = string;

export type EmailNotificationSubjectType = string;

export type EmailSendingAccountType = never;
export type EmailVerificationMessageByLinkType = string;

export type EmailVerificationMessageType = string;

export type EmailVerificationSubjectByLinkType = string;

export type EmailVerificationSubjectType = string;

export interface EnableSoftwareTokenMFAException {
}
export interface EventContextDataType {
}
export interface EventFeedbackType {
}
export type EventFiltersType = Array<unknown>;
export type EventFilterType = never;
export type EventIdType = string;

export type EventResponseType = never;
export interface EventRiskType {
}
export type EventSourceName = never;
export type EventType = never;
export interface ExpiredCodeException {
}
export type ExplicitAuthFlowsListType = Array<unknown>;
export type ExplicitAuthFlowsType = never;
export type FeatureType = never;
export interface FeatureUnavailableInTierException {
}
export type FeedbackValueType = never;
export interface FirehoseConfigurationType {
}
export interface ForbiddenException {
}
export type ForceAliasCreation = boolean;

export interface ForgetDeviceRequest {
}
export interface ForgotPasswordRequest {
}
export interface ForgotPasswordResponse {
}
export type GenerateSecret = boolean;

export interface GetCSVHeaderRequest {
}
export interface GetCSVHeaderResponse {
}
export interface GetDeviceRequest {
}
export interface GetDeviceResponse {
}
export interface GetGroupRequest {
}
export interface GetGroupResponse {
}
export interface GetIdentityProviderByIdentifierRequest {
}
export interface GetIdentityProviderByIdentifierResponse {
}
export interface GetLogDeliveryConfigurationRequest {
}
export interface GetLogDeliveryConfigurationResponse {
}
export interface GetSigningCertificateRequest {
}
export interface GetSigningCertificateResponse {
}
export interface GetTokensFromRefreshTokenRequest {
}
export interface GetTokensFromRefreshTokenResponse {
}
export interface GetUICustomizationRequest {
}
export interface GetUICustomizationResponse {
}
export interface GetUserAttributeVerificationCodeRequest {
}
export interface GetUserAttributeVerificationCodeResponse {
}
export interface GetUserAuthFactorsRequest {
}
export interface GetUserAuthFactorsResponse {
}
export interface GetUserPoolMfaConfigRequest {
}
export interface GetUserPoolMfaConfigResponse {
}
export interface GetUserRequest {
}
export interface GetUserResponse {
}
export interface GlobalSignOutRequest {
}
export interface GlobalSignOutResponse {
}
export interface GroupExistsException {
}
export type GroupListType = Array<unknown>;
export type GroupNameType = string;

export interface GroupType {
}
export type HexStringType = string;

export interface HttpHeader {
}
export type HttpHeaderList = Array<unknown>;
export interface IdentityProviderType {
}
export type IdentityProviderTypeType = never;
export type IdpIdentifiersListType = Array<unknown>;
export type IdpIdentifierType = string;

export type IdTokenValidityType = number;

export type ImageFileType = Uint8Array | string;

export type ImageUrlType = string;

export interface InitiateAuthRequest {
}
export interface InitiateAuthResponse {
}
export type IntegerType = number;

export interface InternalErrorException {
}
export interface InvalidEmailRoleAccessPolicyException {
}
export interface InvalidLambdaResponseException {
}
export interface InvalidOAuthFlowException {
}
export interface InvalidParameterException {
}
export type InvalidParameterExceptionReasonCodeType = string;

export interface InvalidPasswordException {
}
export interface InvalidSmsRoleAccessPolicyException {
}
export interface InvalidSmsRoleTrustRelationshipException {
}
export interface InvalidUserPoolConfigurationException {
}
export interface LambdaConfigType {
}
export interface LimitExceededException {
}
export interface ListDevicesRequest {
}
export interface ListDevicesResponse {
}
export interface ListGroupsRequest {
}
export interface ListGroupsResponse {
}
export interface ListIdentityProvidersRequest {
}
export interface ListIdentityProvidersResponse {
}
export type ListOfStringTypes = Array<unknown>;
export type ListProvidersLimitType = number;

export type ListResourceServersLimitType = number;

export interface ListResourceServersRequest {
}
export interface ListResourceServersResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListUserImportJobsRequest {
}
export interface ListUserImportJobsResponse {
}
export interface ListUserPoolClientsRequest {
}
export interface ListUserPoolClientsResponse {
}
export interface ListUserPoolsRequest {
}
export interface ListUserPoolsResponse {
}
export interface ListUsersInGroupRequest {
}
export interface ListUsersInGroupResponse {
}
export interface ListUsersRequest {
}
export interface ListUsersResponse {
}
export interface ListWebAuthnCredentialsRequest {
}
export interface ListWebAuthnCredentialsResponse {
}
export type LogConfigurationListType = Array<unknown>;
export interface LogConfigurationType {
}
export interface LogDeliveryConfigurationType {
}
export type LogLevel = never;
export type LogoutURLsListType = Array<unknown>;
export type LongType = number;

export interface ManagedLoginBrandingExistsException {
}
export type ManagedLoginBrandingIdType = string;

export interface ManagedLoginBrandingType {
}
export type MessageActionType = never;
export interface MessageTemplateType {
}
export type MessageType = string;

export interface MFAMethodNotFoundException {
}
export type MFAOptionListType = Array<unknown>;
export interface MFAOptionType {
}
export interface NewDeviceMetadataType {
}
export interface NotAuthorizedException {
}
export interface NotifyConfigurationType {
}
export interface NotifyEmailType {
}
export interface NumberAttributeConstraintsType {
}
export type OAuthFlowsType = Array<unknown>;
export type OAuthFlowType = never;
export type PaginationKey = string;

export type PaginationKeyType = string;

export interface PasswordHistoryPolicyViolationException {
}
export type PasswordHistorySizeType = number;

export type PasswordPolicyMinLengthType = number;

export interface PasswordPolicyType {
}
export interface PasswordResetRequiredException {
}
export type PasswordType = string;

export type PoolQueryLimitType = number;

export type PrecedenceType = number;

export interface PreconditionNotMetException {
}
export type PreSignedUrlType = string;

export type PreTokenGenerationLambdaVersionType = never;
export interface PreTokenGenerationVersionConfigType {
}
export type PreventUserExistenceErrorTypes = never;
export type PriorityType = number;

export interface ProviderDescription {
}
export type ProviderDetailsType = Record<string, unknown>;
export type ProviderNameType = string;

export type ProviderNameTypeV2 = string;

export type ProvidersListType = Array<unknown>;
export interface ProviderUserIdentifierType {
}
export type QueryLimit = number;

export type QueryLimitType = number;

export type RecoveryMechanismsType = Array<unknown>;
export type RecoveryOptionNameType = never;
export interface RecoveryOptionType {
}
export type RedirectUrlType = string;

export interface RefreshTokenReuseException {
}
export interface RefreshTokenRotationType {
}
export type RefreshTokenValidityType = number;

export type RegionCodeType = string;

export type RelyingPartyIdType = string;

export interface ResendConfirmationCodeRequest {
}
export interface ResendConfirmationCodeResponse {
}
export type ResourceIdType = string;

export interface ResourceNotFoundException {
}
export type ResourceServerIdentifierType = string;

export type ResourceServerNameType = string;

export type ResourceServerScopeDescriptionType = string;

export type ResourceServerScopeListType = Array<unknown>;
export type ResourceServerScopeNameType = string;

export interface ResourceServerScopeType {
}
export type ResourceServersListType = Array<unknown>;
export interface ResourceServerType {
}
export interface RespondToAuthChallengeRequest {
}
export interface RespondToAuthChallengeResponse {
}
export type RetryGracePeriodSecondsType = number;

export interface RevokeTokenRequest {
}
export interface RevokeTokenResponse {
}
export interface RiskConfigurationType {
}
export type RiskDecisionType = never;
export interface RiskExceptionConfigurationType {
}
export type RiskLevelType = never;
export type S3ArnType = string;

export type S3BucketType = string;

export interface S3ConfigurationType {
}
export type SchemaAttributesListType = Array<unknown>;
export interface SchemaAttributeType {
}
export interface ScopeDoesNotExistException {
}
export type ScopeListType = Array<unknown>;
export type ScopeType = string;

export type SearchedAttributeNamesListType = Array<unknown>;
export type SearchPaginationTokenType = string;

export type SecretCodeType = string;

export type SecretHashType = string;

export type SESConfigurationSet = string;

export type SessionType = string;

export interface SetLogDeliveryConfigurationRequest {
}
export interface SetLogDeliveryConfigurationResponse {
}
export interface SetRiskConfigurationRequest {
}
export interface SetRiskConfigurationResponse {
}
export interface SetUICustomizationRequest {
}
export interface SetUICustomizationResponse {
}
export interface SetUserMFAPreferenceRequest {
}
export interface SetUserMFAPreferenceResponse {
}
export interface SetUserPoolMfaConfigRequest {
}
export interface SetUserPoolMfaConfigResponse {
}
export interface SetUserSettingsRequest {
}
export interface SetUserSettingsResponse {
}
export interface SignInPolicyType {
}
export interface SignUpRequest {
}
export interface SignUpResponse {
}
export type SkippedIPRangeListType = Array<unknown>;
export interface SmsConfigurationType {
}
export type SmsInviteMessageType = string;

export interface SmsMfaConfigType {
}
export interface SMSMfaSettingsType {
}
export type SmsVerificationMessageType = string;

export interface SoftwareTokenMfaConfigType {
}
export interface SoftwareTokenMFANotFoundException {
}
export interface SoftwareTokenMfaSettingsType {
}
export type SoftwareTokenMFAUserCodeType = string;

export interface StartUserImportJobRequest {
}
export interface StartUserImportJobResponse {
}
export interface StartWebAuthnRegistrationRequest {
}
export interface StartWebAuthnRegistrationResponse {
}
export type StatusType = never;
export interface StopUserImportJobRequest {
}
export interface StopUserImportJobResponse {
}
export interface StringAttributeConstraintsType {
}
export type StringType = string;

export type SupportedIdentityProvidersListType = Array<unknown>;
export type TagKeysType = string;

export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValueType = string;

export type TemporaryPasswordValidityDaysType = number;

export interface TierChangeNotAllowedException {
}
export type TimeUnitsType = never;
export type TokenModelType = string;

export interface TokenValidityUnitsType {
}
export interface TooManyFailedAttemptsException {
}
export interface TooManyRequestsException {
}
export interface UICustomizationType {
}
export interface UnauthorizedException {
}
export interface UnexpectedLambdaException {
}
export interface UnsupportedIdentityProviderException {
}
export interface UnsupportedOperationException {
}
export interface UnsupportedTokenTypeException {
}
export interface UnsupportedUserStateException {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateAuthEventFeedbackRequest {
}
export interface UpdateAuthEventFeedbackResponse {
}
export interface UpdateDeviceStatusRequest {
}
export interface UpdateDeviceStatusResponse {
}
export interface UpdateGroupRequest {
}
export interface UpdateGroupResponse {
}
export interface UpdateIdentityProviderRequest {
}
export interface UpdateIdentityProviderResponse {
}
export interface UpdateManagedLoginBrandingRequest {
}
export interface UpdateManagedLoginBrandingResponse {
}
export interface UpdateResourceServerRequest {
}
export interface UpdateResourceServerResponse {
}
export interface UpdateUserAttributesRequest {
}
export interface UpdateUserAttributesResponse {
}
export interface UpdateUserPoolClientRequest {
}
export interface UpdateUserPoolClientResponse {
}
export interface UpdateUserPoolDomainRequest {
}
export interface UpdateUserPoolDomainResponse {
}
export interface UpdateUserPoolRequest {
}
export interface UpdateUserPoolResponse {
}
export interface UserAttributeUpdateSettingsType {
}
export interface UserContextDataType {
}
export type UserFilterType = string;

export interface UserImportInProgressException {
}
export type UserImportJobIdType = string;

export type UserImportJobNameType = string;

export type UserImportJobsListType = Array<unknown>;
export type UserImportJobStatusType = never;
export interface UserImportJobType {
}
export interface UserLambdaValidationException {
}
export type UserMFASettingListType = Array<unknown>;
export type UsernameAttributesListType = Array<unknown>;
export type UsernameAttributeType = never;
export interface UsernameConfigurationType {
}
export interface UsernameExistsException {
}
export type UsernameType = string;

export interface UserNotConfirmedException {
}
export interface UserNotFoundException {
}
export interface UserPoolAddOnNotEnabledException {
}
export interface UserPoolAddOnsType {
}
export interface UserPoolClientDescription {
}
export type UserPoolClientListType = Array<unknown>;
export interface UserPoolClientType {
}
export interface UserPoolDescriptionType {
}
export type UserPoolIdType = string;

export type UserPoolListType = Array<unknown>;
export type UserPoolMfaType = never;
export type UserPoolNameType = string;

export interface UserPoolPolicyType {
}
export interface UserPoolTaggingException {
}
export type UserPoolTagsListType = Array<unknown>;
export type UserPoolTagsType = Record<string, unknown>;
export type UserPoolTierType = never;
export interface UserPoolType {
}
export type UsersListType = Array<unknown>;
export type UserStatusType = never;
export interface UserType {
}
export type UserVerificationType = never;
export interface VerificationMessageTemplateType {
}
export type VerifiedAttributesListType = Array<unknown>;
export type VerifiedAttributeType = never;
export interface VerifySoftwareTokenRequest {
}
export interface VerifySoftwareTokenResponse {
}
export type VerifySoftwareTokenResponseType = never;
export interface VerifyUserAttributeRequest {
}
export interface VerifyUserAttributeResponse {
}
export type WebAuthnAuthenticatorAttachmentType = string;

export type WebAuthnAuthenticatorTransportsList = Array<unknown>;
export type WebAuthnAuthenticatorTransportType = string;

export interface WebAuthnChallengeNotFoundException {
}
export interface WebAuthnClientMismatchException {
}
export interface WebAuthnConfigurationMissingException {
}
export interface WebAuthnConfigurationType {
}
export interface WebAuthnCredentialDescription {
}
export type WebAuthnCredentialDescriptionListType = Array<unknown>;
export interface WebAuthnCredentialNotSupportedException {
}
export type WebAuthnCredentialsQueryLimitType = number;

export interface WebAuthnNotEnabledException {
}
export interface WebAuthnOriginNotAllowedException {
}
export interface WebAuthnRelyingPartyMismatchException {
}
export type WrappedBooleanType = boolean;

export type WrappedIntegerType = number;

export declare namespace AddCustomAttributes {
  export type Input = AddCustomAttributesRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserImportInProgressException
    | CommonAwsError;
}

export declare namespace AdminAddUserToGroup {
  export type Input = AdminAddUserToGroupRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminConfirmSignUp {
  export type Input = AdminConfirmSignUpRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyFailedAttemptsException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminCreateUser {
  export type Input = AdminCreateUserRequest;
  export type Output = {};
  export type Error =
    | CodeDeliveryFailureException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UnsupportedUserStateException
    | UserLambdaValidationException
    | UsernameExistsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminDeleteUser {
  export type Input = AdminDeleteUserRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminDeleteUserAttributes {
  export type Input = AdminDeleteUserAttributesRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminDisableProviderForUser {
  export type Input = AdminDisableProviderForUserRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminDisableUser {
  export type Input = AdminDisableUserRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminEnableUser {
  export type Input = AdminEnableUserRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminForgetDevice {
  export type Input = AdminForgetDeviceRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminGetDevice {
  export type Input = AdminGetDeviceRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace AdminGetUser {
  export type Input = AdminGetUserRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminInitiateAuth {
  export type Input = AdminInitiateAuthRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | MFAMethodNotFoundException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UnsupportedOperationException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminLinkProviderForUser {
  export type Input = AdminLinkProviderForUserRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminListDevices {
  export type Input = AdminListDevicesRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace AdminListGroupsForUser {
  export type Input = AdminListGroupsForUserRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminListUserAuthEvents {
  export type Input = AdminListUserAuthEventsRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError;
}

export declare namespace AdminRemoveUserFromGroup {
  export type Input = AdminRemoveUserFromGroupRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminResetUserPassword {
  export type Input = AdminResetUserPasswordRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminRespondToAuthChallenge {
  export type Input = AdminRespondToAuthChallengeRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | MFAMethodNotFoundException
    | NotAuthorizedException
    | PasswordHistoryPolicyViolationException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminSetUserMFAPreference {
  export type Input = AdminSetUserMFAPreferenceRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminSetUserPassword {
  export type Input = AdminSetUserPasswordRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidPasswordException
    | NotAuthorizedException
    | PasswordHistoryPolicyViolationException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminSetUserSettings {
  export type Input = AdminSetUserSettingsRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminUpdateAuthEventFeedback {
  export type Input = AdminUpdateAuthEventFeedbackRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError;
}

export declare namespace AdminUpdateDeviceStatus {
  export type Input = AdminUpdateDeviceStatusRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminUpdateUserAttributes {
  export type Input = AdminUpdateUserAttributesRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AdminUserGlobalSignOut {
  export type Input = AdminUserGlobalSignOutRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateSoftwareToken {
  export type Input = AssociateSoftwareTokenRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | CommonAwsError;
}

export declare namespace ChangePassword {
  export type Input = ChangePasswordRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidPasswordException
    | LimitExceededException
    | NotAuthorizedException
    | PasswordHistoryPolicyViolationException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace CompleteWebAuthnRegistration {
  export type Input = CompleteWebAuthnRegistrationRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | TooManyRequestsException
    | WebAuthnChallengeNotFoundException
    | WebAuthnClientMismatchException
    | WebAuthnCredentialNotSupportedException
    | WebAuthnNotEnabledException
    | WebAuthnOriginNotAllowedException
    | WebAuthnRelyingPartyMismatchException
    | CommonAwsError;
}

export declare namespace ConfirmDevice {
  export type Input = ConfirmDeviceRequest;
  export type Output = {};
  export type Error =
    | DeviceKeyExistsException
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UsernameExistsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace ConfirmForgotPassword {
  export type Input = ConfirmForgotPasswordRequest;
  export type Output = {};
  export type Error =
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | LimitExceededException
    | NotAuthorizedException
    | PasswordHistoryPolicyViolationException
    | ResourceNotFoundException
    | TooManyFailedAttemptsException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace ConfirmSignUp {
  export type Input = ConfirmSignUpRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyFailedAttemptsException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = {};
  export type Error =
    | GroupExistsException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateIdentityProvider {
  export type Input = CreateIdentityProviderRequest;
  export type Output = {};
  export type Error =
    | DuplicateProviderException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateManagedLoginBranding {
  export type Input = CreateManagedLoginBrandingRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | ManagedLoginBrandingExistsException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateResourceServer {
  export type Input = CreateResourceServerRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateUserImportJob {
  export type Input = CreateUserImportJobRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateUserPool {
  export type Input = CreateUserPoolRequest;
  export type Output = {};
  export type Error =
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | TierChangeNotAllowedException
    | TooManyRequestsException
    | UserPoolTaggingException
    | CommonAwsError;
}

export declare namespace CreateUserPoolClient {
  export type Input = CreateUserPoolClientRequest;
  export type Output = {};
  export type Error =
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidOAuthFlowException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | ScopeDoesNotExistException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateUserPoolDomain {
  export type Input = CreateUserPoolDomainRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteIdentityProvider {
  export type Input = DeleteIdentityProviderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedIdentityProviderException
    | CommonAwsError;
}

export declare namespace DeleteManagedLoginBranding {
  export type Input = DeleteManagedLoginBrandingRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteResourceServer {
  export type Input = DeleteResourceServerRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteUserAttributes {
  export type Input = DeleteUserAttributesRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteUserPool {
  export type Input = DeleteUserPoolRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserImportInProgressException
    | CommonAwsError;
}

export declare namespace DeleteUserPoolClient {
  export type Input = DeleteUserPoolClientRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteUserPoolDomain {
  export type Input = DeleteUserPoolDomainRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWebAuthnCredential {
  export type Input = DeleteWebAuthnCredentialRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeIdentityProvider {
  export type Input = DescribeIdentityProviderRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeManagedLoginBranding {
  export type Input = DescribeManagedLoginBrandingRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeManagedLoginBrandingByClient {
  export type Input = DescribeManagedLoginBrandingByClientRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeResourceServer {
  export type Input = DescribeResourceServerRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeRiskConfiguration {
  export type Input = DescribeRiskConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError;
}

export declare namespace DescribeUserImportJob {
  export type Input = DescribeUserImportJobRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeUserPool {
  export type Input = DescribeUserPoolRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolTaggingException
    | CommonAwsError;
}

export declare namespace DescribeUserPoolClient {
  export type Input = DescribeUserPoolClientRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeUserPoolDomain {
  export type Input = DescribeUserPoolDomainRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ForgetDevice {
  export type Input = ForgetDeviceRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace ForgotPassword {
  export type Input = ForgotPasswordRequest;
  export type Output = {};
  export type Error =
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace GetCSVHeader {
  export type Input = GetCSVHeaderRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDevice {
  export type Input = GetDeviceRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace GetGroup {
  export type Input = GetGroupRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetIdentityProviderByIdentifier {
  export type Input = GetIdentityProviderByIdentifierRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetLogDeliveryConfiguration {
  export type Input = GetLogDeliveryConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSigningCertificate {
  export type Input = GetSigningCertificateRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetTokensFromRefreshToken {
  export type Input = GetTokensFromRefreshTokenRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | NotAuthorizedException
    | RefreshTokenReuseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace GetUICustomization {
  export type Input = GetUICustomizationRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetUser {
  export type Input = GetUserRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace GetUserAttributeVerificationCode {
  export type Input = GetUserAttributeVerificationCodeRequest;
  export type Output = {};
  export type Error =
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace GetUserAuthFactors {
  export type Input = GetUserAuthFactorsRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace GetUserPoolMfaConfig {
  export type Input = GetUserPoolMfaConfigRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GlobalSignOut {
  export type Input = GlobalSignOutRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | CommonAwsError;
}

export declare namespace InitiateAuth {
  export type Input = InitiateAuthRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UnsupportedOperationException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace ListDevices {
  export type Input = ListDevicesRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListIdentityProviders {
  export type Input = ListIdentityProvidersRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListResourceServers {
  export type Input = ListResourceServersRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListUserImportJobs {
  export type Input = ListUserImportJobsRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListUserPoolClients {
  export type Input = ListUserPoolClientsRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListUserPools {
  export type Input = ListUserPoolsRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListUsersInGroup {
  export type Input = ListUsersInGroupRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListWebAuthnCredentials {
  export type Input = ListWebAuthnCredentialsRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ResendConfirmationCode {
  export type Input = ResendConfirmationCodeRequest;
  export type Output = {};
  export type Error =
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace RespondToAuthChallenge {
  export type Input = RespondToAuthChallengeRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | InvalidUserPoolConfigurationException
    | MFAMethodNotFoundException
    | NotAuthorizedException
    | PasswordHistoryPolicyViolationException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace RevokeToken {
  export type Input = RevokeTokenRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | TooManyRequestsException
    | UnauthorizedException
    | UnsupportedOperationException
    | UnsupportedTokenTypeException
    | CommonAwsError;
}

export declare namespace SetLogDeliveryConfiguration {
  export type Input = SetLogDeliveryConfigurationRequest;
  export type Output = {};
  export type Error =
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SetRiskConfiguration {
  export type Input = SetRiskConfigurationRequest;
  export type Output = {};
  export type Error =
    | CodeDeliveryFailureException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError;
}

export declare namespace SetUICustomization {
  export type Input = SetUICustomizationRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SetUserMFAPreference {
  export type Input = SetUserMFAPreferenceRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace SetUserPoolMfaConfig {
  export type Input = SetUserPoolMfaConfigRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SetUserSettings {
  export type Input = SetUserSettingsRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace SignUp {
  export type Input = SignUpRequest;
  export type Output = {};
  export type Error =
    | CodeDeliveryFailureException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidPasswordException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UsernameExistsException
    | CommonAwsError;
}

export declare namespace StartUserImportJob {
  export type Input = StartUserImportJobRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartWebAuthnRegistration {
  export type Input = StartWebAuthnRegistrationRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | TooManyRequestsException
    | WebAuthnConfigurationMissingException
    | WebAuthnNotEnabledException
    | CommonAwsError;
}

export declare namespace StopUserImportJob {
  export type Input = StopUserImportJobRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateAuthEventFeedback {
  export type Input = UpdateAuthEventFeedbackRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError;
}

export declare namespace UpdateDeviceStatus {
  export type Input = UpdateDeviceStatusRequest;
  export type Output = {};
  export type Error =
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateIdentityProvider {
  export type Input = UpdateIdentityProviderRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedIdentityProviderException
    | CommonAwsError;
}

export declare namespace UpdateManagedLoginBranding {
  export type Input = UpdateManagedLoginBrandingRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateResourceServer {
  export type Input = UpdateResourceServerRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateUserAttributes {
  export type Input = UpdateUserAttributesRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | CodeDeliveryFailureException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidLambdaResponseException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnexpectedLambdaException
    | UserLambdaValidationException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateUserPool {
  export type Input = UpdateUserPoolRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TierChangeNotAllowedException
    | TooManyRequestsException
    | UserImportInProgressException
    | UserPoolTaggingException
    | CommonAwsError;
}

export declare namespace UpdateUserPoolClient {
  export type Input = UpdateUserPoolClientRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidOAuthFlowException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | ScopeDoesNotExistException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateUserPoolDomain {
  export type Input = UpdateUserPoolDomainRequest;
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace VerifySoftwareToken {
  export type Input = VerifySoftwareTokenRequest;
  export type Output = {};
  export type Error =
    | CodeMismatchException
    | EnableSoftwareTokenMFAException
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace VerifyUserAttribute {
  export type Input = VerifyUserAttributeRequest;
  export type Output = {};
  export type Error =
    | AliasExistsException
    | CodeMismatchException
    | ExpiredCodeException
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError;
}

