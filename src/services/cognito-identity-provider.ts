import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSCognitoIdentityProviderService {
  addCustomAttributes(
    input: AddCustomAttributesRequest,
  ): Effect.Effect<
    AddCustomAttributesResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserImportInProgressException
    | CommonAwsError
  >;
  adminAddUserToGroup(
    input: AdminAddUserToGroupRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminConfirmSignUp(
    input: AdminConfirmSignUpRequest,
  ): Effect.Effect<
    AdminConfirmSignUpResponse,
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
    | CommonAwsError
  >;
  adminCreateUser(
    input: AdminCreateUserRequest,
  ): Effect.Effect<
    AdminCreateUserResponse,
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
    | CommonAwsError
  >;
  adminDeleteUser(
    input: AdminDeleteUserRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminDeleteUserAttributes(
    input: AdminDeleteUserAttributesRequest,
  ): Effect.Effect<
    AdminDeleteUserAttributesResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminDisableProviderForUser(
    input: AdminDisableProviderForUserRequest,
  ): Effect.Effect<
    AdminDisableProviderForUserResponse,
    | AliasExistsException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminDisableUser(
    input: AdminDisableUserRequest,
  ): Effect.Effect<
    AdminDisableUserResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminEnableUser(
    input: AdminEnableUserRequest,
  ): Effect.Effect<
    AdminEnableUserResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminForgetDevice(
    input: AdminForgetDeviceRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminGetDevice(
    input: AdminGetDeviceRequest,
  ): Effect.Effect<
    AdminGetDeviceResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  adminGetUser(
    input: AdminGetUserRequest,
  ): Effect.Effect<
    AdminGetUserResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminInitiateAuth(
    input: AdminInitiateAuthRequest,
  ): Effect.Effect<
    AdminInitiateAuthResponse,
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
    | CommonAwsError
  >;
  adminLinkProviderForUser(
    input: AdminLinkProviderForUserRequest,
  ): Effect.Effect<
    AdminLinkProviderForUserResponse,
    | AliasExistsException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminListDevices(
    input: AdminListDevicesRequest,
  ): Effect.Effect<
    AdminListDevicesResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  adminListGroupsForUser(
    input: AdminListGroupsForUserRequest,
  ): Effect.Effect<
    AdminListGroupsForUserResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminListUserAuthEvents(
    input: AdminListUserAuthEventsRequest,
  ): Effect.Effect<
    AdminListUserAuthEventsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError
  >;
  adminRemoveUserFromGroup(
    input: AdminRemoveUserFromGroupRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminResetUserPassword(
    input: AdminResetUserPasswordRequest,
  ): Effect.Effect<
    AdminResetUserPasswordResponse,
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
    | CommonAwsError
  >;
  adminRespondToAuthChallenge(
    input: AdminRespondToAuthChallengeRequest,
  ): Effect.Effect<
    AdminRespondToAuthChallengeResponse,
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
    | CommonAwsError
  >;
  adminSetUserMFAPreference(
    input: AdminSetUserMFAPreferenceRequest,
  ): Effect.Effect<
    AdminSetUserMFAPreferenceResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminSetUserPassword(
    input: AdminSetUserPasswordRequest,
  ): Effect.Effect<
    AdminSetUserPasswordResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidPasswordException
    | NotAuthorizedException
    | PasswordHistoryPolicyViolationException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminSetUserSettings(
    input: AdminSetUserSettingsRequest,
  ): Effect.Effect<
    AdminSetUserSettingsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminUpdateAuthEventFeedback(
    input: AdminUpdateAuthEventFeedbackRequest,
  ): Effect.Effect<
    AdminUpdateAuthEventFeedbackResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError
  >;
  adminUpdateDeviceStatus(
    input: AdminUpdateDeviceStatusRequest,
  ): Effect.Effect<
    AdminUpdateDeviceStatusResponse,
    | InternalErrorException
    | InvalidParameterException
    | InvalidUserPoolConfigurationException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  adminUpdateUserAttributes(
    input: AdminUpdateUserAttributesRequest,
  ): Effect.Effect<
    AdminUpdateUserAttributesResponse,
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
    | CommonAwsError
  >;
  adminUserGlobalSignOut(
    input: AdminUserGlobalSignOutRequest,
  ): Effect.Effect<
    AdminUserGlobalSignOutResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | CommonAwsError
  >;
  associateSoftwareToken(
    input: AssociateSoftwareTokenRequest,
  ): Effect.Effect<
    AssociateSoftwareTokenResponse,
    | ConcurrentModificationException
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | SoftwareTokenMFANotFoundException
    | CommonAwsError
  >;
  changePassword(
    input: ChangePasswordRequest,
  ): Effect.Effect<
    ChangePasswordResponse,
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
    | CommonAwsError
  >;
  completeWebAuthnRegistration(
    input: CompleteWebAuthnRegistrationRequest,
  ): Effect.Effect<
    CompleteWebAuthnRegistrationResponse,
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
    | CommonAwsError
  >;
  confirmDevice(
    input: ConfirmDeviceRequest,
  ): Effect.Effect<
    ConfirmDeviceResponse,
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
    | CommonAwsError
  >;
  confirmForgotPassword(
    input: ConfirmForgotPasswordRequest,
  ): Effect.Effect<
    ConfirmForgotPasswordResponse,
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
    | CommonAwsError
  >;
  confirmSignUp(
    input: ConfirmSignUpRequest,
  ): Effect.Effect<
    ConfirmSignUpResponse,
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
    | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResponse,
    | GroupExistsException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createIdentityProvider(
    input: CreateIdentityProviderRequest,
  ): Effect.Effect<
    CreateIdentityProviderResponse,
    | DuplicateProviderException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createManagedLoginBranding(
    input: CreateManagedLoginBrandingRequest,
  ): Effect.Effect<
    CreateManagedLoginBrandingResponse,
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | ManagedLoginBrandingExistsException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createResourceServer(
    input: CreateResourceServerRequest,
  ): Effect.Effect<
    CreateResourceServerResponse,
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createUserImportJob(
    input: CreateUserImportJobRequest,
  ): Effect.Effect<
    CreateUserImportJobResponse,
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createUserPool(
    input: CreateUserPoolRequest,
  ): Effect.Effect<
    CreateUserPoolResponse,
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
    | CommonAwsError
  >;
  createUserPoolClient(
    input: CreateUserPoolClientRequest,
  ): Effect.Effect<
    CreateUserPoolClientResponse,
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidOAuthFlowException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | ScopeDoesNotExistException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createUserPoolDomain(
    input: CreateUserPoolDomainRequest,
  ): Effect.Effect<
    CreateUserPoolDomainResponse,
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteIdentityProvider(
    input: DeleteIdentityProviderRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedIdentityProviderException
    | CommonAwsError
  >;
  deleteManagedLoginBranding(
    input: DeleteManagedLoginBrandingRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteResourceServer(
    input: DeleteResourceServerRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    {},
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError
  >;
  deleteUserAttributes(
    input: DeleteUserAttributesRequest,
  ): Effect.Effect<
    DeleteUserAttributesResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError
  >;
  deleteUserPool(
    input: DeleteUserPoolRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserImportInProgressException
    | CommonAwsError
  >;
  deleteUserPoolClient(
    input: DeleteUserPoolClientRequest,
  ): Effect.Effect<
    {},
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteUserPoolDomain(
    input: DeleteUserPoolDomainRequest,
  ): Effect.Effect<
    DeleteUserPoolDomainResponse,
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteWebAuthnCredential(
    input: DeleteWebAuthnCredentialRequest,
  ): Effect.Effect<
    DeleteWebAuthnCredentialResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeIdentityProvider(
    input: DescribeIdentityProviderRequest,
  ): Effect.Effect<
    DescribeIdentityProviderResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeManagedLoginBranding(
    input: DescribeManagedLoginBrandingRequest,
  ): Effect.Effect<
    DescribeManagedLoginBrandingResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeManagedLoginBrandingByClient(
    input: DescribeManagedLoginBrandingByClientRequest,
  ): Effect.Effect<
    DescribeManagedLoginBrandingByClientResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeResourceServer(
    input: DescribeResourceServerRequest,
  ): Effect.Effect<
    DescribeResourceServerResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeRiskConfiguration(
    input: DescribeRiskConfigurationRequest,
  ): Effect.Effect<
    DescribeRiskConfigurationResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError
  >;
  describeUserImportJob(
    input: DescribeUserImportJobRequest,
  ): Effect.Effect<
    DescribeUserImportJobResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeUserPool(
    input: DescribeUserPoolRequest,
  ): Effect.Effect<
    DescribeUserPoolResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolTaggingException
    | CommonAwsError
  >;
  describeUserPoolClient(
    input: DescribeUserPoolClientRequest,
  ): Effect.Effect<
    DescribeUserPoolClientResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeUserPoolDomain(
    input: DescribeUserPoolDomainRequest,
  ): Effect.Effect<
    DescribeUserPoolDomainResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  forgetDevice(
    input: ForgetDeviceRequest,
  ): Effect.Effect<
    {},
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
    | CommonAwsError
  >;
  forgotPassword(
    input: ForgotPasswordRequest,
  ): Effect.Effect<
    ForgotPasswordResponse,
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
    | CommonAwsError
  >;
  getCSVHeader(
    input: GetCSVHeaderRequest,
  ): Effect.Effect<
    GetCSVHeaderResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDevice(
    input: GetDeviceRequest,
  ): Effect.Effect<
    GetDeviceResponse,
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
    | CommonAwsError
  >;
  getGroup(
    input: GetGroupRequest,
  ): Effect.Effect<
    GetGroupResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getIdentityProviderByIdentifier(
    input: GetIdentityProviderByIdentifierRequest,
  ): Effect.Effect<
    GetIdentityProviderByIdentifierResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getLogDeliveryConfiguration(
    input: GetLogDeliveryConfigurationRequest,
  ): Effect.Effect<
    GetLogDeliveryConfigurationResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSigningCertificate(
    input: GetSigningCertificateRequest,
  ): Effect.Effect<
    GetSigningCertificateResponse,
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getTokensFromRefreshToken(
    input: GetTokensFromRefreshTokenRequest,
  ): Effect.Effect<
    GetTokensFromRefreshTokenResponse,
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
    | CommonAwsError
  >;
  getUICustomization(
    input: GetUICustomizationRequest,
  ): Effect.Effect<
    GetUICustomizationResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getUser(
    input: GetUserRequest,
  ): Effect.Effect<
    GetUserResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError
  >;
  getUserAttributeVerificationCode(
    input: GetUserAttributeVerificationCodeRequest,
  ): Effect.Effect<
    GetUserAttributeVerificationCodeResponse,
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
    | CommonAwsError
  >;
  getUserAuthFactors(
    input: GetUserAuthFactorsRequest,
  ): Effect.Effect<
    GetUserAuthFactorsResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError
  >;
  getUserPoolMfaConfig(
    input: GetUserPoolMfaConfigRequest,
  ): Effect.Effect<
    GetUserPoolMfaConfigResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  globalSignOut(
    input: GlobalSignOutRequest,
  ): Effect.Effect<
    GlobalSignOutResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotConfirmedException
    | CommonAwsError
  >;
  initiateAuth(
    input: InitiateAuthRequest,
  ): Effect.Effect<
    InitiateAuthResponse,
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
    | CommonAwsError
  >;
  listDevices(
    input: ListDevicesRequest,
  ): Effect.Effect<
    ListDevicesResponse,
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
    | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listIdentityProviders(
    input: ListIdentityProvidersRequest,
  ): Effect.Effect<
    ListIdentityProvidersResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listResourceServers(
    input: ListResourceServersRequest,
  ): Effect.Effect<
    ListResourceServersResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listUserImportJobs(
    input: ListUserImportJobsRequest,
  ): Effect.Effect<
    ListUserImportJobsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listUserPoolClients(
    input: ListUserPoolClientsRequest,
  ): Effect.Effect<
    ListUserPoolClientsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listUserPools(
    input: ListUserPoolsRequest,
  ): Effect.Effect<
    ListUserPoolsResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listUsersInGroup(
    input: ListUsersInGroupRequest,
  ): Effect.Effect<
    ListUsersInGroupResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listWebAuthnCredentials(
    input: ListWebAuthnCredentialsRequest,
  ): Effect.Effect<
    ListWebAuthnCredentialsResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  resendConfirmationCode(
    input: ResendConfirmationCodeRequest,
  ): Effect.Effect<
    ResendConfirmationCodeResponse,
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
    | CommonAwsError
  >;
  respondToAuthChallenge(
    input: RespondToAuthChallengeRequest,
  ): Effect.Effect<
    RespondToAuthChallengeResponse,
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
    | CommonAwsError
  >;
  revokeToken(
    input: RevokeTokenRequest,
  ): Effect.Effect<
    RevokeTokenResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | TooManyRequestsException
    | UnauthorizedException
    | UnsupportedOperationException
    | UnsupportedTokenTypeException
    | CommonAwsError
  >;
  setLogDeliveryConfiguration(
    input: SetLogDeliveryConfigurationRequest,
  ): Effect.Effect<
    SetLogDeliveryConfigurationResponse,
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  setRiskConfiguration(
    input: SetRiskConfigurationRequest,
  ): Effect.Effect<
    SetRiskConfigurationResponse,
    | CodeDeliveryFailureException
    | InternalErrorException
    | InvalidEmailRoleAccessPolicyException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError
  >;
  setUICustomization(
    input: SetUICustomizationRequest,
  ): Effect.Effect<
    SetUICustomizationResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  setUserMFAPreference(
    input: SetUserMFAPreferenceRequest,
  ): Effect.Effect<
    SetUserMFAPreferenceResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError
  >;
  setUserPoolMfaConfig(
    input: SetUserPoolMfaConfigRequest,
  ): Effect.Effect<
    SetUserPoolMfaConfigResponse,
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSmsRoleAccessPolicyException
    | InvalidSmsRoleTrustRelationshipException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  setUserSettings(
    input: SetUserSettingsRequest,
  ): Effect.Effect<
    SetUserSettingsResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PasswordResetRequiredException
    | ResourceNotFoundException
    | UserNotConfirmedException
    | UserNotFoundException
    | CommonAwsError
  >;
  signUp(
    input: SignUpRequest,
  ): Effect.Effect<
    SignUpResponse,
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
    | CommonAwsError
  >;
  startUserImportJob(
    input: StartUserImportJobRequest,
  ): Effect.Effect<
    StartUserImportJobResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startWebAuthnRegistration(
    input: StartWebAuthnRegistrationRequest,
  ): Effect.Effect<
    StartWebAuthnRegistrationResponse,
    | ForbiddenException
    | InternalErrorException
    | InvalidParameterException
    | LimitExceededException
    | NotAuthorizedException
    | TooManyRequestsException
    | WebAuthnConfigurationMissingException
    | WebAuthnNotEnabledException
    | CommonAwsError
  >;
  stopUserImportJob(
    input: StopUserImportJobRequest,
  ): Effect.Effect<
    StopUserImportJobResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateAuthEventFeedback(
    input: UpdateAuthEventFeedbackRequest,
  ): Effect.Effect<
    UpdateAuthEventFeedbackResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UserNotFoundException
    | UserPoolAddOnNotEnabledException
    | CommonAwsError
  >;
  updateDeviceStatus(
    input: UpdateDeviceStatusRequest,
  ): Effect.Effect<
    UpdateDeviceStatusResponse,
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
    | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    UpdateGroupResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateIdentityProvider(
    input: UpdateIdentityProviderRequest,
  ): Effect.Effect<
    UpdateIdentityProviderResponse,
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedIdentityProviderException
    | CommonAwsError
  >;
  updateManagedLoginBranding(
    input: UpdateManagedLoginBrandingRequest,
  ): Effect.Effect<
    UpdateManagedLoginBrandingResponse,
    | ConcurrentModificationException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateResourceServer(
    input: UpdateResourceServerRequest,
  ): Effect.Effect<
    UpdateResourceServerResponse,
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateUserAttributes(
    input: UpdateUserAttributesRequest,
  ): Effect.Effect<
    UpdateUserAttributesResponse,
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
    | CommonAwsError
  >;
  updateUserPool(
    input: UpdateUserPoolRequest,
  ): Effect.Effect<
    UpdateUserPoolResponse,
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
    | CommonAwsError
  >;
  updateUserPoolClient(
    input: UpdateUserPoolClientRequest,
  ): Effect.Effect<
    UpdateUserPoolClientResponse,
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidOAuthFlowException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | ScopeDoesNotExistException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateUserPoolDomain(
    input: UpdateUserPoolDomainRequest,
  ): Effect.Effect<
    UpdateUserPoolDomainResponse,
    | ConcurrentModificationException
    | FeatureUnavailableInTierException
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  verifySoftwareToken(
    input: VerifySoftwareTokenRequest,
  ): Effect.Effect<
    VerifySoftwareTokenResponse,
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
    | CommonAwsError
  >;
  verifyUserAttribute(
    input: VerifyUserAttributeRequest,
  ): Effect.Effect<
    VerifyUserAttributeResponse,
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
    | CommonAwsError
  >;
}

export type CognitoIdentityProvider = AWSCognitoIdentityProviderService;

export type AccessTokenValidityType = number;

export interface AccountRecoverySettingType {
  RecoveryMechanisms?: Array<RecoveryOptionType>;
}
export type AccountTakeoverActionNotifyType = boolean;

export interface AccountTakeoverActionsType {
  LowAction?: AccountTakeoverActionType;
  MediumAction?: AccountTakeoverActionType;
  HighAction?: AccountTakeoverActionType;
}
export interface AccountTakeoverActionType {
  Notify: boolean;
  EventAction: AccountTakeoverEventActionType;
}
export type AccountTakeoverEventActionType =
  | "BLOCK"
  | "MFA_IF_CONFIGURED"
  | "MFA_REQUIRED"
  | "NO_ACTION";
export interface AccountTakeoverRiskConfigurationType {
  NotifyConfiguration?: NotifyConfigurationType;
  Actions: AccountTakeoverActionsType;
}
export interface AddCustomAttributesRequest {
  UserPoolId: string;
  CustomAttributes: Array<SchemaAttributeType>;
}
export interface AddCustomAttributesResponse {}
export interface AdminAddUserToGroupRequest {
  UserPoolId: string;
  Username: string;
  GroupName: string;
}
export interface AdminConfirmSignUpRequest {
  UserPoolId: string;
  Username: string;
  ClientMetadata?: Record<string, string>;
}
export interface AdminConfirmSignUpResponse {}
export interface AdminCreateUserConfigType {
  AllowAdminCreateUserOnly?: boolean;
  UnusedAccountValidityDays?: number;
  InviteMessageTemplate?: MessageTemplateType;
}
export interface AdminCreateUserRequest {
  UserPoolId: string;
  Username: string;
  UserAttributes?: Array<AttributeType>;
  ValidationData?: Array<AttributeType>;
  TemporaryPassword?: string;
  ForceAliasCreation?: boolean;
  MessageAction?: MessageActionType;
  DesiredDeliveryMediums?: Array<DeliveryMediumType>;
  ClientMetadata?: Record<string, string>;
}
export interface AdminCreateUserResponse {
  User?: UserType;
}
export type AdminCreateUserUnusedAccountValidityDaysType = number;

export interface AdminDeleteUserAttributesRequest {
  UserPoolId: string;
  Username: string;
  UserAttributeNames: Array<string>;
}
export interface AdminDeleteUserAttributesResponse {}
export interface AdminDeleteUserRequest {
  UserPoolId: string;
  Username: string;
}
export interface AdminDisableProviderForUserRequest {
  UserPoolId: string;
  User: ProviderUserIdentifierType;
}
export interface AdminDisableProviderForUserResponse {}
export interface AdminDisableUserRequest {
  UserPoolId: string;
  Username: string;
}
export interface AdminDisableUserResponse {}
export interface AdminEnableUserRequest {
  UserPoolId: string;
  Username: string;
}
export interface AdminEnableUserResponse {}
export interface AdminForgetDeviceRequest {
  UserPoolId: string;
  Username: string;
  DeviceKey: string;
}
export interface AdminGetDeviceRequest {
  DeviceKey: string;
  UserPoolId: string;
  Username: string;
}
export interface AdminGetDeviceResponse {
  Device: DeviceType;
}
export interface AdminGetUserRequest {
  UserPoolId: string;
  Username: string;
}
export interface AdminGetUserResponse {
  Username: string;
  UserAttributes?: Array<AttributeType>;
  UserCreateDate?: Date | string;
  UserLastModifiedDate?: Date | string;
  Enabled?: boolean;
  UserStatus?: UserStatusType;
  MFAOptions?: Array<MFAOptionType>;
  PreferredMfaSetting?: string;
  UserMFASettingList?: Array<string>;
}
export interface AdminInitiateAuthRequest {
  UserPoolId: string;
  ClientId: string;
  AuthFlow: AuthFlowType;
  AuthParameters?: Record<string, string>;
  ClientMetadata?: Record<string, string>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  ContextData?: ContextDataType;
  Session?: string;
}
export interface AdminInitiateAuthResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string;
  ChallengeParameters?: Record<string, string>;
  AuthenticationResult?: AuthenticationResultType;
  AvailableChallenges?: Array<ChallengeNameType>;
}
export interface AdminLinkProviderForUserRequest {
  UserPoolId: string;
  DestinationUser: ProviderUserIdentifierType;
  SourceUser: ProviderUserIdentifierType;
}
export interface AdminLinkProviderForUserResponse {}
export interface AdminListDevicesRequest {
  UserPoolId: string;
  Username: string;
  Limit?: number;
  PaginationToken?: string;
}
export interface AdminListDevicesResponse {
  Devices?: Array<DeviceType>;
  PaginationToken?: string;
}
export interface AdminListGroupsForUserRequest {
  Username: string;
  UserPoolId: string;
  Limit?: number;
  NextToken?: string;
}
export interface AdminListGroupsForUserResponse {
  Groups?: Array<GroupType>;
  NextToken?: string;
}
export interface AdminListUserAuthEventsRequest {
  UserPoolId: string;
  Username: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface AdminListUserAuthEventsResponse {
  AuthEvents?: Array<AuthEventType>;
  NextToken?: string;
}
export interface AdminRemoveUserFromGroupRequest {
  UserPoolId: string;
  Username: string;
  GroupName: string;
}
export interface AdminResetUserPasswordRequest {
  UserPoolId: string;
  Username: string;
  ClientMetadata?: Record<string, string>;
}
export interface AdminResetUserPasswordResponse {}
export interface AdminRespondToAuthChallengeRequest {
  UserPoolId: string;
  ClientId: string;
  ChallengeName: ChallengeNameType;
  ChallengeResponses?: Record<string, string>;
  Session?: string;
  AnalyticsMetadata?: AnalyticsMetadataType;
  ContextData?: ContextDataType;
  ClientMetadata?: Record<string, string>;
}
export interface AdminRespondToAuthChallengeResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string;
  ChallengeParameters?: Record<string, string>;
  AuthenticationResult?: AuthenticationResultType;
}
export interface AdminSetUserMFAPreferenceRequest {
  SMSMfaSettings?: SMSMfaSettingsType;
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
  EmailMfaSettings?: EmailMfaSettingsType;
  Username: string;
  UserPoolId: string;
}
export interface AdminSetUserMFAPreferenceResponse {}
export interface AdminSetUserPasswordRequest {
  UserPoolId: string;
  Username: string;
  Password: string;
  Permanent?: boolean;
}
export interface AdminSetUserPasswordResponse {}
export interface AdminSetUserSettingsRequest {
  UserPoolId: string;
  Username: string;
  MFAOptions: Array<MFAOptionType>;
}
export interface AdminSetUserSettingsResponse {}
export interface AdminUpdateAuthEventFeedbackRequest {
  UserPoolId: string;
  Username: string;
  EventId: string;
  FeedbackValue: FeedbackValueType;
}
export interface AdminUpdateAuthEventFeedbackResponse {}
export interface AdminUpdateDeviceStatusRequest {
  UserPoolId: string;
  Username: string;
  DeviceKey: string;
  DeviceRememberedStatus?: DeviceRememberedStatusType;
}
export interface AdminUpdateDeviceStatusResponse {}
export interface AdminUpdateUserAttributesRequest {
  UserPoolId: string;
  Username: string;
  UserAttributes: Array<AttributeType>;
  ClientMetadata?: Record<string, string>;
}
export interface AdminUpdateUserAttributesResponse {}
export interface AdminUserGlobalSignOutRequest {
  UserPoolId: string;
  Username: string;
}
export interface AdminUserGlobalSignOutResponse {}
export interface AdvancedSecurityAdditionalFlowsType {
  CustomAuthMode?: AdvancedSecurityEnabledModeType;
}
export type AdvancedSecurityEnabledModeType = "AUDIT" | "ENFORCED";
export type AdvancedSecurityModeType = "OFF" | "AUDIT" | "ENFORCED";
export type AliasAttributesListType = Array<AliasAttributeType>;
export type AliasAttributeType =
  | "PHONE_NUMBER"
  | "EMAIL"
  | "PREFERRED_USERNAME";
export declare class AliasExistsException extends Data.TaggedError(
  "AliasExistsException",
)<{
  readonly message?: string;
}> {}
export type AllowedFirstAuthFactorsListType = Array<AuthFactorType>;
export interface AnalyticsConfigurationType {
  ApplicationId?: string;
  ApplicationArn?: string;
  RoleArn?: string;
  ExternalId?: string;
  UserDataShared?: boolean;
}
export interface AnalyticsMetadataType {
  AnalyticsEndpointId?: string;
}
export type ArnType = string;

export type AssetBytesType = Uint8Array | string;

export type AssetCategoryType =
  | "FAVICON_ICO"
  | "FAVICON_SVG"
  | "EMAIL_GRAPHIC"
  | "SMS_GRAPHIC"
  | "AUTH_APP_GRAPHIC"
  | "PASSWORD_GRAPHIC"
  | "PASSKEY_GRAPHIC"
  | "PAGE_HEADER_LOGO"
  | "PAGE_HEADER_BACKGROUND"
  | "PAGE_FOOTER_LOGO"
  | "PAGE_FOOTER_BACKGROUND"
  | "PAGE_BACKGROUND"
  | "FORM_BACKGROUND"
  | "FORM_LOGO"
  | "IDP_BUTTON_ICON";
export type AssetExtensionType = "ICO" | "JPEG" | "PNG" | "SVG" | "WEBP";
export type AssetListType = Array<AssetType>;
export interface AssetType {
  Category: AssetCategoryType;
  ColorMode: ColorSchemeModeType;
  Extension: AssetExtensionType;
  Bytes?: Uint8Array | string;
  ResourceId?: string;
}
export interface AssociateSoftwareTokenRequest {
  AccessToken?: string;
  Session?: string;
}
export interface AssociateSoftwareTokenResponse {
  SecretCode?: string;
  Session?: string;
}
export type AttributeDataType = "STRING" | "NUMBER" | "DATETIME" | "BOOLEAN";
export type AttributeListType = Array<AttributeType>;
export type AttributeMappingKeyType = string;

export type AttributeMappingType = Record<string, string>;
export type AttributeNameListType = Array<string>;
export type AttributeNameType = string;

export type AttributesRequireVerificationBeforeUpdateType =
  Array<VerifiedAttributeType>;
export interface AttributeType {
  Name: string;
  Value?: string;
}
export type AttributeValueType = string;

export interface AuthenticationResultType {
  AccessToken?: string;
  ExpiresIn?: number;
  TokenType?: string;
  RefreshToken?: string;
  IdToken?: string;
  NewDeviceMetadata?: NewDeviceMetadataType;
}
export type AuthEventsType = Array<AuthEventType>;
export interface AuthEventType {
  EventId?: string;
  EventType?: EventType;
  CreationDate?: Date | string;
  EventResponse?: EventResponseType;
  EventRisk?: EventRiskType;
  ChallengeResponses?: Array<ChallengeResponseType>;
  EventContextData?: EventContextDataType;
  EventFeedback?: EventFeedbackType;
}
export type AuthFactorType = "PASSWORD" | "EMAIL_OTP" | "SMS_OTP" | "WEB_AUTHN";
export type AuthFlowType =
  | "USER_SRP_AUTH"
  | "REFRESH_TOKEN_AUTH"
  | "REFRESH_TOKEN"
  | "CUSTOM_AUTH"
  | "ADMIN_NO_SRP_AUTH"
  | "USER_PASSWORD_AUTH"
  | "ADMIN_USER_PASSWORD_AUTH"
  | "USER_AUTH";
export type AuthParametersType = Record<string, string>;
export type AuthSessionValidityType = number;

export type AvailableChallengeListType = Array<ChallengeNameType>;
export type AWSAccountIdType = string;

export type BlockedIPRangeListType = Array<string>;
export type BooleanType = boolean;

export type CallbackURLsListType = Array<string>;
export type ChallengeName = "Password" | "Mfa";
export type ChallengeNameType =
  | "SMS_MFA"
  | "EMAIL_OTP"
  | "SOFTWARE_TOKEN_MFA"
  | "SELECT_MFA_TYPE"
  | "MFA_SETUP"
  | "PASSWORD_VERIFIER"
  | "CUSTOM_CHALLENGE"
  | "SELECT_CHALLENGE"
  | "DEVICE_SRP_AUTH"
  | "DEVICE_PASSWORD_VERIFIER"
  | "ADMIN_NO_SRP_AUTH"
  | "NEW_PASSWORD_REQUIRED"
  | "SMS_OTP"
  | "PASSWORD"
  | "WEB_AUTHN"
  | "PASSWORD_SRP";
export type ChallengeParametersType = Record<string, string>;
export type ChallengeResponse = "Success" | "Failure";
export type ChallengeResponseListType = Array<ChallengeResponseType>;
export type ChallengeResponsesType = Record<string, string>;
export interface ChallengeResponseType {
  ChallengeName?: ChallengeName;
  ChallengeResponse?: ChallengeResponse;
}
export interface ChangePasswordRequest {
  PreviousPassword?: string;
  ProposedPassword: string;
  AccessToken: string;
}
export interface ChangePasswordResponse {}
export type ClientIdType = string;

export type ClientMetadataType = Record<string, string>;
export type ClientNameType = string;

export type ClientPermissionListType = Array<string>;
export type ClientPermissionType = string;

export type ClientSecretType = string;

export interface CloudWatchLogsConfigurationType {
  LogGroupArn?: string;
}
export type CodeDeliveryDetailsListType = Array<CodeDeliveryDetailsType>;
export interface CodeDeliveryDetailsType {
  Destination?: string;
  DeliveryMedium?: DeliveryMediumType;
  AttributeName?: string;
}
export declare class CodeDeliveryFailureException extends Data.TaggedError(
  "CodeDeliveryFailureException",
)<{
  readonly message?: string;
}> {}
export declare class CodeMismatchException extends Data.TaggedError(
  "CodeMismatchException",
)<{
  readonly message?: string;
}> {}
export type ColorSchemeModeType = "LIGHT" | "DARK" | "DYNAMIC";
export interface CompleteWebAuthnRegistrationRequest {
  AccessToken: string;
  Credential: Document;
}
export interface CompleteWebAuthnRegistrationResponse {}
export type CompletionMessageType = string;

export interface CompromisedCredentialsActionsType {
  EventAction: CompromisedCredentialsEventActionType;
}
export type CompromisedCredentialsEventActionType = "BLOCK" | "NO_ACTION";
export interface CompromisedCredentialsRiskConfigurationType {
  EventFilter?: Array<EventFilterType>;
  Actions: CompromisedCredentialsActionsType;
}
export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type ConfiguredUserAuthFactorsListType = Array<AuthFactorType>;
export type ConfirmationCodeType = string;

export interface ConfirmDeviceRequest {
  AccessToken: string;
  DeviceKey: string;
  DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
  DeviceName?: string;
}
export interface ConfirmDeviceResponse {
  UserConfirmationNecessary?: boolean;
}
export interface ConfirmForgotPasswordRequest {
  ClientId: string;
  SecretHash?: string;
  Username: string;
  ConfirmationCode: string;
  Password: string;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: Record<string, string>;
}
export interface ConfirmForgotPasswordResponse {}
export interface ConfirmSignUpRequest {
  ClientId: string;
  SecretHash?: string;
  Username: string;
  ConfirmationCode: string;
  ForceAliasCreation?: boolean;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: Record<string, string>;
  Session?: string;
}
export interface ConfirmSignUpResponse {
  Session?: string;
}
export interface ContextDataType {
  IpAddress: string;
  ServerName: string;
  ServerPath: string;
  HttpHeaders: Array<HttpHeader>;
  EncodedData?: string;
}
export interface CreateGroupRequest {
  GroupName: string;
  UserPoolId: string;
  Description?: string;
  RoleArn?: string;
  Precedence?: number;
}
export interface CreateGroupResponse {
  Group?: GroupType;
}
export interface CreateIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
  ProviderType: IdentityProviderTypeType;
  ProviderDetails: Record<string, string>;
  AttributeMapping?: Record<string, string>;
  IdpIdentifiers?: Array<string>;
}
export interface CreateIdentityProviderResponse {
  IdentityProvider: IdentityProviderType;
}
export interface CreateManagedLoginBrandingRequest {
  UserPoolId: string;
  ClientId: string;
  UseCognitoProvidedValues?: boolean;
  Settings?: Document;
  Assets?: Array<AssetType>;
}
export interface CreateManagedLoginBrandingResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
export interface CreateResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
  Name: string;
  Scopes?: Array<ResourceServerScopeType>;
}
export interface CreateResourceServerResponse {
  ResourceServer: ResourceServerType;
}
export interface CreateUserImportJobRequest {
  JobName: string;
  UserPoolId: string;
  CloudWatchLogsRoleArn: string;
}
export interface CreateUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
export interface CreateUserPoolClientRequest {
  UserPoolId: string;
  ClientName: string;
  GenerateSecret?: boolean;
  RefreshTokenValidity?: number;
  AccessTokenValidity?: number;
  IdTokenValidity?: number;
  TokenValidityUnits?: TokenValidityUnitsType;
  ReadAttributes?: Array<string>;
  WriteAttributes?: Array<string>;
  ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
  SupportedIdentityProviders?: Array<string>;
  CallbackURLs?: Array<string>;
  LogoutURLs?: Array<string>;
  DefaultRedirectURI?: string;
  AllowedOAuthFlows?: Array<OAuthFlowType>;
  AllowedOAuthScopes?: Array<string>;
  AllowedOAuthFlowsUserPoolClient?: boolean;
  AnalyticsConfiguration?: AnalyticsConfigurationType;
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
  EnableTokenRevocation?: boolean;
  EnablePropagateAdditionalUserContextData?: boolean;
  AuthSessionValidity?: number;
  RefreshTokenRotation?: RefreshTokenRotationType;
}
export interface CreateUserPoolClientResponse {
  UserPoolClient?: UserPoolClientType;
}
export interface CreateUserPoolDomainRequest {
  Domain: string;
  UserPoolId: string;
  ManagedLoginVersion?: number;
  CustomDomainConfig?: CustomDomainConfigType;
}
export interface CreateUserPoolDomainResponse {
  ManagedLoginVersion?: number;
  CloudFrontDomain?: string;
}
export interface CreateUserPoolRequest {
  PoolName: string;
  Policies?: UserPoolPolicyType;
  DeletionProtection?: DeletionProtectionType;
  LambdaConfig?: LambdaConfigType;
  AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
  AliasAttributes?: Array<AliasAttributeType>;
  UsernameAttributes?: Array<UsernameAttributeType>;
  SmsVerificationMessage?: string;
  EmailVerificationMessage?: string;
  EmailVerificationSubject?: string;
  VerificationMessageTemplate?: VerificationMessageTemplateType;
  SmsAuthenticationMessage?: string;
  MfaConfiguration?: UserPoolMfaType;
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
  DeviceConfiguration?: DeviceConfigurationType;
  EmailConfiguration?: EmailConfigurationType;
  SmsConfiguration?: SmsConfigurationType;
  UserPoolTags?: Record<string, string>;
  AdminCreateUserConfig?: AdminCreateUserConfigType;
  Schema?: Array<SchemaAttributeType>;
  UserPoolAddOns?: UserPoolAddOnsType;
  UsernameConfiguration?: UsernameConfigurationType;
  AccountRecoverySetting?: AccountRecoverySettingType;
  UserPoolTier?: UserPoolTierType;
}
export interface CreateUserPoolResponse {
  UserPool?: UserPoolType;
}
export type CSSType = string;

export type CSSVersionType = string;

export type CustomAttributeNameType = string;

export type CustomAttributesListType = Array<SchemaAttributeType>;
export interface CustomDomainConfigType {
  CertificateArn: string;
}
export interface CustomEmailLambdaVersionConfigType {
  LambdaVersion: CustomEmailSenderLambdaVersionType;
  LambdaArn: string;
}
export type CustomEmailSenderLambdaVersionType = "V1_0";
export interface CustomSMSLambdaVersionConfigType {
  LambdaVersion: CustomSMSSenderLambdaVersionType;
  LambdaArn: string;
}
export type CustomSMSSenderLambdaVersionType = "V1_0";
export type DateType = Date | string;

export type DefaultEmailOptionType = "CONFIRM_WITH_LINK" | "CONFIRM_WITH_CODE";
export interface DeleteGroupRequest {
  GroupName: string;
  UserPoolId: string;
}
export interface DeleteIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
}
export interface DeleteManagedLoginBrandingRequest {
  ManagedLoginBrandingId: string;
  UserPoolId: string;
}
export interface DeleteResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
}
export interface DeleteUserAttributesRequest {
  UserAttributeNames: Array<string>;
  AccessToken: string;
}
export interface DeleteUserAttributesResponse {}
export interface DeleteUserPoolClientRequest {
  UserPoolId: string;
  ClientId: string;
}
export interface DeleteUserPoolDomainRequest {
  Domain: string;
  UserPoolId: string;
}
export interface DeleteUserPoolDomainResponse {}
export interface DeleteUserPoolRequest {
  UserPoolId: string;
}
export interface DeleteUserRequest {
  AccessToken: string;
}
export interface DeleteWebAuthnCredentialRequest {
  AccessToken: string;
  CredentialId: string;
}
export interface DeleteWebAuthnCredentialResponse {}
export type DeletionProtectionType = "ACTIVE" | "INACTIVE";
export type DeliveryMediumListType = Array<DeliveryMediumType>;
export type DeliveryMediumType = "SMS" | "EMAIL";
export interface DescribeIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
}
export interface DescribeIdentityProviderResponse {
  IdentityProvider: IdentityProviderType;
}
export interface DescribeManagedLoginBrandingByClientRequest {
  UserPoolId: string;
  ClientId: string;
  ReturnMergedResources?: boolean;
}
export interface DescribeManagedLoginBrandingByClientResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
export interface DescribeManagedLoginBrandingRequest {
  UserPoolId: string;
  ManagedLoginBrandingId: string;
  ReturnMergedResources?: boolean;
}
export interface DescribeManagedLoginBrandingResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
export interface DescribeResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
}
export interface DescribeResourceServerResponse {
  ResourceServer: ResourceServerType;
}
export interface DescribeRiskConfigurationRequest {
  UserPoolId: string;
  ClientId?: string;
}
export interface DescribeRiskConfigurationResponse {
  RiskConfiguration: RiskConfigurationType;
}
export interface DescribeUserImportJobRequest {
  UserPoolId: string;
  JobId: string;
}
export interface DescribeUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
export interface DescribeUserPoolClientRequest {
  UserPoolId: string;
  ClientId: string;
}
export interface DescribeUserPoolClientResponse {
  UserPoolClient?: UserPoolClientType;
}
export interface DescribeUserPoolDomainRequest {
  Domain: string;
}
export interface DescribeUserPoolDomainResponse {
  DomainDescription?: DomainDescriptionType;
}
export interface DescribeUserPoolRequest {
  UserPoolId: string;
}
export interface DescribeUserPoolResponse {
  UserPool?: UserPoolType;
}
export type DescriptionType = string;

export interface DeviceConfigurationType {
  ChallengeRequiredOnNewDevice?: boolean;
  DeviceOnlyRememberedOnUserPrompt?: boolean;
}
export declare class DeviceKeyExistsException extends Data.TaggedError(
  "DeviceKeyExistsException",
)<{
  readonly message?: string;
}> {}
export type DeviceKeyType = string;

export type DeviceListType = Array<DeviceType>;
export type DeviceNameType = string;

export type DeviceRememberedStatusType = "REMEMBERED" | "NOT_REMEMBERED";
export interface DeviceSecretVerifierConfigType {
  PasswordVerifier?: string;
  Salt?: string;
}
export interface DeviceType {
  DeviceKey?: string;
  DeviceAttributes?: Array<AttributeType>;
  DeviceCreateDate?: Date | string;
  DeviceLastModifiedDate?: Date | string;
  DeviceLastAuthenticatedDate?: Date | string;
}
export interface DomainDescriptionType {
  UserPoolId?: string;
  AWSAccountId?: string;
  Domain?: string;
  S3Bucket?: string;
  CloudFrontDistribution?: string;
  Version?: string;
  Status?: DomainStatusType;
  CustomDomainConfig?: CustomDomainConfigType;
  ManagedLoginVersion?: number;
}
export type DomainStatusType =
  | "CREATING"
  | "DELETING"
  | "UPDATING"
  | "ACTIVE"
  | "FAILED";
export type DomainType = string;

export type DomainVersionType = string;

export declare class DuplicateProviderException extends Data.TaggedError(
  "DuplicateProviderException",
)<{
  readonly message?: string;
}> {}
export type EmailAddressType = string;

export interface EmailConfigurationType {
  SourceArn?: string;
  ReplyToEmailAddress?: string;
  EmailSendingAccount?: EmailSendingAccountType;
  From?: string;
  ConfigurationSet?: string;
}
export type EmailInviteMessageType = string;

export interface EmailMfaConfigType {
  Message?: string;
  Subject?: string;
}
export type EmailMfaMessageType = string;

export interface EmailMfaSettingsType {
  Enabled?: boolean;
  PreferredMfa?: boolean;
}
export type EmailMfaSubjectType = string;

export type EmailNotificationBodyType = string;

export type EmailNotificationSubjectType = string;

export type EmailSendingAccountType = "COGNITO_DEFAULT" | "DEVELOPER";
export type EmailVerificationMessageByLinkType = string;

export type EmailVerificationMessageType = string;

export type EmailVerificationSubjectByLinkType = string;

export type EmailVerificationSubjectType = string;

export declare class EnableSoftwareTokenMFAException extends Data.TaggedError(
  "EnableSoftwareTokenMFAException",
)<{
  readonly message?: string;
}> {}
export interface EventContextDataType {
  IpAddress?: string;
  DeviceName?: string;
  Timezone?: string;
  City?: string;
  Country?: string;
}
export interface EventFeedbackType {
  FeedbackValue: FeedbackValueType;
  Provider: string;
  FeedbackDate?: Date | string;
}
export type EventFiltersType = Array<EventFilterType>;
export type EventFilterType = "SIGN_IN" | "PASSWORD_CHANGE" | "SIGN_UP";
export type EventIdType = string;

export type EventResponseType = "Pass" | "Fail" | "InProgress";
export interface EventRiskType {
  RiskDecision?: RiskDecisionType;
  RiskLevel?: RiskLevelType;
  CompromisedCredentialsDetected?: boolean;
}
export type EventSourceName = "USER_NOTIFICATION" | "USER_AUTH_EVENTS";
export type EventType =
  | "SignIn"
  | "SignUp"
  | "ForgotPassword"
  | "PasswordChange"
  | "ResendCode";
export declare class ExpiredCodeException extends Data.TaggedError(
  "ExpiredCodeException",
)<{
  readonly message?: string;
}> {}
export type ExplicitAuthFlowsListType = Array<ExplicitAuthFlowsType>;
export type ExplicitAuthFlowsType =
  | "ADMIN_NO_SRP_AUTH"
  | "CUSTOM_AUTH_FLOW_ONLY"
  | "USER_PASSWORD_AUTH"
  | "ALLOW_ADMIN_USER_PASSWORD_AUTH"
  | "ALLOW_CUSTOM_AUTH"
  | "ALLOW_USER_PASSWORD_AUTH"
  | "ALLOW_USER_SRP_AUTH"
  | "ALLOW_REFRESH_TOKEN_AUTH"
  | "ALLOW_USER_AUTH";
export type FeatureType = "ENABLED" | "DISABLED";
export declare class FeatureUnavailableInTierException extends Data.TaggedError(
  "FeatureUnavailableInTierException",
)<{
  readonly message?: string;
}> {}
export type FeedbackValueType = "VALID" | "INVALID";
export interface FirehoseConfigurationType {
  StreamArn?: string;
}
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly message?: string;
}> {}
export type ForceAliasCreation = boolean;

export interface ForgetDeviceRequest {
  AccessToken?: string;
  DeviceKey: string;
}
export interface ForgotPasswordRequest {
  ClientId: string;
  SecretHash?: string;
  UserContextData?: UserContextDataType;
  Username: string;
  AnalyticsMetadata?: AnalyticsMetadataType;
  ClientMetadata?: Record<string, string>;
}
export interface ForgotPasswordResponse {
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
export type GenerateSecret = boolean;

export interface GetCSVHeaderRequest {
  UserPoolId: string;
}
export interface GetCSVHeaderResponse {
  UserPoolId?: string;
  CSVHeader?: Array<string>;
}
export interface GetDeviceRequest {
  DeviceKey: string;
  AccessToken?: string;
}
export interface GetDeviceResponse {
  Device: DeviceType;
}
export interface GetGroupRequest {
  GroupName: string;
  UserPoolId: string;
}
export interface GetGroupResponse {
  Group?: GroupType;
}
export interface GetIdentityProviderByIdentifierRequest {
  UserPoolId: string;
  IdpIdentifier: string;
}
export interface GetIdentityProviderByIdentifierResponse {
  IdentityProvider: IdentityProviderType;
}
export interface GetLogDeliveryConfigurationRequest {
  UserPoolId: string;
}
export interface GetLogDeliveryConfigurationResponse {
  LogDeliveryConfiguration?: LogDeliveryConfigurationType;
}
export interface GetSigningCertificateRequest {
  UserPoolId: string;
}
export interface GetSigningCertificateResponse {
  Certificate?: string;
}
export interface GetTokensFromRefreshTokenRequest {
  RefreshToken: string;
  ClientId: string;
  ClientSecret?: string;
  DeviceKey?: string;
  ClientMetadata?: Record<string, string>;
}
export interface GetTokensFromRefreshTokenResponse {
  AuthenticationResult?: AuthenticationResultType;
}
export interface GetUICustomizationRequest {
  UserPoolId: string;
  ClientId?: string;
}
export interface GetUICustomizationResponse {
  UICustomization: UICustomizationType;
}
export interface GetUserAttributeVerificationCodeRequest {
  AccessToken: string;
  AttributeName: string;
  ClientMetadata?: Record<string, string>;
}
export interface GetUserAttributeVerificationCodeResponse {
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
export interface GetUserAuthFactorsRequest {
  AccessToken: string;
}
export interface GetUserAuthFactorsResponse {
  Username: string;
  PreferredMfaSetting?: string;
  UserMFASettingList?: Array<string>;
  ConfiguredUserAuthFactors?: Array<AuthFactorType>;
}
export interface GetUserPoolMfaConfigRequest {
  UserPoolId: string;
}
export interface GetUserPoolMfaConfigResponse {
  SmsMfaConfiguration?: SmsMfaConfigType;
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
  EmailMfaConfiguration?: EmailMfaConfigType;
  MfaConfiguration?: UserPoolMfaType;
  WebAuthnConfiguration?: WebAuthnConfigurationType;
}
export interface GetUserRequest {
  AccessToken: string;
}
export interface GetUserResponse {
  Username: string;
  UserAttributes: Array<AttributeType>;
  MFAOptions?: Array<MFAOptionType>;
  PreferredMfaSetting?: string;
  UserMFASettingList?: Array<string>;
}
export interface GlobalSignOutRequest {
  AccessToken: string;
}
export interface GlobalSignOutResponse {}
export declare class GroupExistsException extends Data.TaggedError(
  "GroupExistsException",
)<{
  readonly message?: string;
}> {}
export type GroupListType = Array<GroupType>;
export type GroupNameType = string;

export interface GroupType {
  GroupName?: string;
  UserPoolId?: string;
  Description?: string;
  RoleArn?: string;
  Precedence?: number;
  LastModifiedDate?: Date | string;
  CreationDate?: Date | string;
}
export type HexStringType = string;

export interface HttpHeader {
  headerName?: string;
  headerValue?: string;
}
export type HttpHeaderList = Array<HttpHeader>;
export interface IdentityProviderType {
  UserPoolId?: string;
  ProviderName?: string;
  ProviderType?: IdentityProviderTypeType;
  ProviderDetails?: Record<string, string>;
  AttributeMapping?: Record<string, string>;
  IdpIdentifiers?: Array<string>;
  LastModifiedDate?: Date | string;
  CreationDate?: Date | string;
}
export type IdentityProviderTypeType =
  | "SAML"
  | "Facebook"
  | "Google"
  | "LoginWithAmazon"
  | "SignInWithApple"
  | "OIDC";
export type IdpIdentifiersListType = Array<string>;
export type IdpIdentifierType = string;

export type IdTokenValidityType = number;

export type ImageFileType = Uint8Array | string;

export type ImageUrlType = string;

export interface InitiateAuthRequest {
  AuthFlow: AuthFlowType;
  AuthParameters?: Record<string, string>;
  ClientMetadata?: Record<string, string>;
  ClientId: string;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  Session?: string;
}
export interface InitiateAuthResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string;
  ChallengeParameters?: Record<string, string>;
  AuthenticationResult?: AuthenticationResultType;
  AvailableChallenges?: Array<ChallengeNameType>;
}
export type IntegerType = number;

export declare class InternalErrorException extends Data.TaggedError(
  "InternalErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEmailRoleAccessPolicyException extends Data.TaggedError(
  "InvalidEmailRoleAccessPolicyException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLambdaResponseException extends Data.TaggedError(
  "InvalidLambdaResponseException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOAuthFlowException extends Data.TaggedError(
  "InvalidOAuthFlowException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
  readonly reasonCode?: string;
}> {}
export type InvalidParameterExceptionReasonCodeType = string;

export declare class InvalidPasswordException extends Data.TaggedError(
  "InvalidPasswordException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSmsRoleAccessPolicyException extends Data.TaggedError(
  "InvalidSmsRoleAccessPolicyException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSmsRoleTrustRelationshipException extends Data.TaggedError(
  "InvalidSmsRoleTrustRelationshipException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidUserPoolConfigurationException extends Data.TaggedError(
  "InvalidUserPoolConfigurationException",
)<{
  readonly message?: string;
}> {}
export interface LambdaConfigType {
  PreSignUp?: string;
  CustomMessage?: string;
  PostConfirmation?: string;
  PreAuthentication?: string;
  PostAuthentication?: string;
  DefineAuthChallenge?: string;
  CreateAuthChallenge?: string;
  VerifyAuthChallengeResponse?: string;
  PreTokenGeneration?: string;
  UserMigration?: string;
  PreTokenGenerationConfig?: PreTokenGenerationVersionConfigType;
  CustomSMSSender?: CustomSMSLambdaVersionConfigType;
  CustomEmailSender?: CustomEmailLambdaVersionConfigType;
  KMSKeyID?: string;
}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListDevicesRequest {
  AccessToken: string;
  Limit?: number;
  PaginationToken?: string;
}
export interface ListDevicesResponse {
  Devices?: Array<DeviceType>;
  PaginationToken?: string;
}
export interface ListGroupsRequest {
  UserPoolId: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListGroupsResponse {
  Groups?: Array<GroupType>;
  NextToken?: string;
}
export interface ListIdentityProvidersRequest {
  UserPoolId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListIdentityProvidersResponse {
  Providers: Array<ProviderDescription>;
  NextToken?: string;
}
export type ListOfStringTypes = Array<string>;
export type ListProvidersLimitType = number;

export type ListResourceServersLimitType = number;

export interface ListResourceServersRequest {
  UserPoolId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourceServersResponse {
  ResourceServers: Array<ResourceServerType>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListUserImportJobsRequest {
  UserPoolId: string;
  MaxResults: number;
  PaginationToken?: string;
}
export interface ListUserImportJobsResponse {
  UserImportJobs?: Array<UserImportJobType>;
  PaginationToken?: string;
}
export interface ListUserPoolClientsRequest {
  UserPoolId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListUserPoolClientsResponse {
  UserPoolClients?: Array<UserPoolClientDescription>;
  NextToken?: string;
}
export interface ListUserPoolsRequest {
  NextToken?: string;
  MaxResults: number;
}
export interface ListUserPoolsResponse {
  UserPools?: Array<UserPoolDescriptionType>;
  NextToken?: string;
}
export interface ListUsersInGroupRequest {
  UserPoolId: string;
  GroupName: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListUsersInGroupResponse {
  Users?: Array<UserType>;
  NextToken?: string;
}
export interface ListUsersRequest {
  UserPoolId: string;
  AttributesToGet?: Array<string>;
  Limit?: number;
  PaginationToken?: string;
  Filter?: string;
}
export interface ListUsersResponse {
  Users?: Array<UserType>;
  PaginationToken?: string;
}
export interface ListWebAuthnCredentialsRequest {
  AccessToken: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWebAuthnCredentialsResponse {
  Credentials: Array<WebAuthnCredentialDescription>;
  NextToken?: string;
}
export type LogConfigurationListType = Array<LogConfigurationType>;
export interface LogConfigurationType {
  LogLevel: LogLevel;
  EventSource: EventSourceName;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfigurationType;
  S3Configuration?: S3ConfigurationType;
  FirehoseConfiguration?: FirehoseConfigurationType;
}
export interface LogDeliveryConfigurationType {
  UserPoolId: string;
  LogConfigurations: Array<LogConfigurationType>;
}
export type LogLevel = "ERROR" | "INFO";
export type LogoutURLsListType = Array<string>;
export type LongType = number;

export declare class ManagedLoginBrandingExistsException extends Data.TaggedError(
  "ManagedLoginBrandingExistsException",
)<{
  readonly message?: string;
}> {}
export type ManagedLoginBrandingIdType = string;

export interface ManagedLoginBrandingType {
  ManagedLoginBrandingId?: string;
  UserPoolId?: string;
  UseCognitoProvidedValues?: boolean;
  Settings?: Document;
  Assets?: Array<AssetType>;
  CreationDate?: Date | string;
  LastModifiedDate?: Date | string;
}
export type MessageActionType = "RESEND" | "SUPPRESS";
export interface MessageTemplateType {
  SMSMessage?: string;
  EmailMessage?: string;
  EmailSubject?: string;
}
export type MessageType = string;

export declare class MFAMethodNotFoundException extends Data.TaggedError(
  "MFAMethodNotFoundException",
)<{
  readonly message?: string;
}> {}
export type MFAOptionListType = Array<MFAOptionType>;
export interface MFAOptionType {
  DeliveryMedium?: DeliveryMediumType;
  AttributeName?: string;
}
export interface NewDeviceMetadataType {
  DeviceKey?: string;
  DeviceGroupKey?: string;
}
export declare class NotAuthorizedException extends Data.TaggedError(
  "NotAuthorizedException",
)<{
  readonly message?: string;
}> {}
export interface NotifyConfigurationType {
  From?: string;
  ReplyTo?: string;
  SourceArn: string;
  BlockEmail?: NotifyEmailType;
  NoActionEmail?: NotifyEmailType;
  MfaEmail?: NotifyEmailType;
}
export interface NotifyEmailType {
  Subject: string;
  HtmlBody?: string;
  TextBody?: string;
}
export interface NumberAttributeConstraintsType {
  MinValue?: string;
  MaxValue?: string;
}
export type OAuthFlowsType = Array<OAuthFlowType>;
export type OAuthFlowType = "code" | "implicit" | "client_credentials";
export type PaginationKey = string;

export type PaginationKeyType = string;

export declare class PasswordHistoryPolicyViolationException extends Data.TaggedError(
  "PasswordHistoryPolicyViolationException",
)<{
  readonly message?: string;
}> {}
export type PasswordHistorySizeType = number;

export type PasswordPolicyMinLengthType = number;

export interface PasswordPolicyType {
  MinimumLength?: number;
  RequireUppercase?: boolean;
  RequireLowercase?: boolean;
  RequireNumbers?: boolean;
  RequireSymbols?: boolean;
  PasswordHistorySize?: number;
  TemporaryPasswordValidityDays?: number;
}
export declare class PasswordResetRequiredException extends Data.TaggedError(
  "PasswordResetRequiredException",
)<{
  readonly message?: string;
}> {}
export type PasswordType = string;

export type PoolQueryLimitType = number;

export type PrecedenceType = number;

export declare class PreconditionNotMetException extends Data.TaggedError(
  "PreconditionNotMetException",
)<{
  readonly message?: string;
}> {}
export type PreSignedUrlType = string;

export type PreTokenGenerationLambdaVersionType = "V1_0" | "V2_0" | "V3_0";
export interface PreTokenGenerationVersionConfigType {
  LambdaVersion: PreTokenGenerationLambdaVersionType;
  LambdaArn: string;
}
export type PreventUserExistenceErrorTypes = "LEGACY" | "ENABLED";
export type PriorityType = number;

export interface ProviderDescription {
  ProviderName?: string;
  ProviderType?: IdentityProviderTypeType;
  LastModifiedDate?: Date | string;
  CreationDate?: Date | string;
}
export type ProviderDetailsType = Record<string, string>;
export type ProviderNameType = string;

export type ProviderNameTypeV2 = string;

export type ProvidersListType = Array<ProviderDescription>;
export interface ProviderUserIdentifierType {
  ProviderName?: string;
  ProviderAttributeName?: string;
  ProviderAttributeValue?: string;
}
export type QueryLimit = number;

export type QueryLimitType = number;

export type RecoveryMechanismsType = Array<RecoveryOptionType>;
export type RecoveryOptionNameType =
  | "VERIFIED_EMAIL"
  | "VERIFIED_PHONE_NUMBER"
  | "ADMIN_ONLY";
export interface RecoveryOptionType {
  Priority: number;
  Name: RecoveryOptionNameType;
}
export type RedirectUrlType = string;

export declare class RefreshTokenReuseException extends Data.TaggedError(
  "RefreshTokenReuseException",
)<{
  readonly message?: string;
}> {}
export interface RefreshTokenRotationType {
  Feature: FeatureType;
  RetryGracePeriodSeconds?: number;
}
export type RefreshTokenValidityType = number;

export type RegionCodeType = string;

export type RelyingPartyIdType = string;

export interface ResendConfirmationCodeRequest {
  ClientId: string;
  SecretHash?: string;
  UserContextData?: UserContextDataType;
  Username: string;
  AnalyticsMetadata?: AnalyticsMetadataType;
  ClientMetadata?: Record<string, string>;
}
export interface ResendConfirmationCodeResponse {
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
export type ResourceIdType = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceServerIdentifierType = string;

export type ResourceServerNameType = string;

export type ResourceServerScopeDescriptionType = string;

export type ResourceServerScopeListType = Array<ResourceServerScopeType>;
export type ResourceServerScopeNameType = string;

export interface ResourceServerScopeType {
  ScopeName: string;
  ScopeDescription: string;
}
export type ResourceServersListType = Array<ResourceServerType>;
export interface ResourceServerType {
  UserPoolId?: string;
  Identifier?: string;
  Name?: string;
  Scopes?: Array<ResourceServerScopeType>;
}
export interface RespondToAuthChallengeRequest {
  ClientId: string;
  ChallengeName: ChallengeNameType;
  Session?: string;
  ChallengeResponses?: Record<string, string>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: Record<string, string>;
}
export interface RespondToAuthChallengeResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string;
  ChallengeParameters?: Record<string, string>;
  AuthenticationResult?: AuthenticationResultType;
}
export type RetryGracePeriodSecondsType = number;

export interface RevokeTokenRequest {
  Token: string;
  ClientId: string;
  ClientSecret?: string;
}
export interface RevokeTokenResponse {}
export interface RiskConfigurationType {
  UserPoolId?: string;
  ClientId?: string;
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
  LastModifiedDate?: Date | string;
}
export type RiskDecisionType = "NoRisk" | "AccountTakeover" | "Block";
export interface RiskExceptionConfigurationType {
  BlockedIPRangeList?: Array<string>;
  SkippedIPRangeList?: Array<string>;
}
export type RiskLevelType = "Low" | "Medium" | "High";
export type S3ArnType = string;

export type S3BucketType = string;

export interface S3ConfigurationType {
  BucketArn?: string;
}
export type SchemaAttributesListType = Array<SchemaAttributeType>;
export interface SchemaAttributeType {
  Name?: string;
  AttributeDataType?: AttributeDataType;
  DeveloperOnlyAttribute?: boolean;
  Mutable?: boolean;
  Required?: boolean;
  NumberAttributeConstraints?: NumberAttributeConstraintsType;
  StringAttributeConstraints?: StringAttributeConstraintsType;
}
export declare class ScopeDoesNotExistException extends Data.TaggedError(
  "ScopeDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type ScopeListType = Array<string>;
export type ScopeType = string;

export type SearchedAttributeNamesListType = Array<string>;
export type SearchPaginationTokenType = string;

export type SecretCodeType = string;

export type SecretHashType = string;

export type SESConfigurationSet = string;

export type SessionType = string;

export interface SetLogDeliveryConfigurationRequest {
  UserPoolId: string;
  LogConfigurations: Array<LogConfigurationType>;
}
export interface SetLogDeliveryConfigurationResponse {
  LogDeliveryConfiguration?: LogDeliveryConfigurationType;
}
export interface SetRiskConfigurationRequest {
  UserPoolId: string;
  ClientId?: string;
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
}
export interface SetRiskConfigurationResponse {
  RiskConfiguration: RiskConfigurationType;
}
export interface SetUICustomizationRequest {
  UserPoolId: string;
  ClientId?: string;
  CSS?: string;
  ImageFile?: Uint8Array | string;
}
export interface SetUICustomizationResponse {
  UICustomization: UICustomizationType;
}
export interface SetUserMFAPreferenceRequest {
  SMSMfaSettings?: SMSMfaSettingsType;
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
  EmailMfaSettings?: EmailMfaSettingsType;
  AccessToken: string;
}
export interface SetUserMFAPreferenceResponse {}
export interface SetUserPoolMfaConfigRequest {
  UserPoolId: string;
  SmsMfaConfiguration?: SmsMfaConfigType;
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
  EmailMfaConfiguration?: EmailMfaConfigType;
  MfaConfiguration?: UserPoolMfaType;
  WebAuthnConfiguration?: WebAuthnConfigurationType;
}
export interface SetUserPoolMfaConfigResponse {
  SmsMfaConfiguration?: SmsMfaConfigType;
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
  EmailMfaConfiguration?: EmailMfaConfigType;
  MfaConfiguration?: UserPoolMfaType;
  WebAuthnConfiguration?: WebAuthnConfigurationType;
}
export interface SetUserSettingsRequest {
  AccessToken: string;
  MFAOptions: Array<MFAOptionType>;
}
export interface SetUserSettingsResponse {}
export interface SignInPolicyType {
  AllowedFirstAuthFactors?: Array<AuthFactorType>;
}
export interface SignUpRequest {
  ClientId: string;
  SecretHash?: string;
  Username: string;
  Password?: string;
  UserAttributes?: Array<AttributeType>;
  ValidationData?: Array<AttributeType>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: Record<string, string>;
}
export interface SignUpResponse {
  UserConfirmed: boolean;
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
  UserSub: string;
  Session?: string;
}
export type SkippedIPRangeListType = Array<string>;
export interface SmsConfigurationType {
  SnsCallerArn: string;
  ExternalId?: string;
  SnsRegion?: string;
}
export type SmsInviteMessageType = string;

export interface SmsMfaConfigType {
  SmsAuthenticationMessage?: string;
  SmsConfiguration?: SmsConfigurationType;
}
export interface SMSMfaSettingsType {
  Enabled?: boolean;
  PreferredMfa?: boolean;
}
export type SmsVerificationMessageType = string;

export interface SoftwareTokenMfaConfigType {
  Enabled?: boolean;
}
export declare class SoftwareTokenMFANotFoundException extends Data.TaggedError(
  "SoftwareTokenMFANotFoundException",
)<{
  readonly message?: string;
}> {}
export interface SoftwareTokenMfaSettingsType {
  Enabled?: boolean;
  PreferredMfa?: boolean;
}
export type SoftwareTokenMFAUserCodeType = string;

export interface StartUserImportJobRequest {
  UserPoolId: string;
  JobId: string;
}
export interface StartUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
export interface StartWebAuthnRegistrationRequest {
  AccessToken: string;
}
export interface StartWebAuthnRegistrationResponse {
  CredentialCreationOptions: Document;
}
export type StatusType = "Enabled" | "Disabled";
export interface StopUserImportJobRequest {
  UserPoolId: string;
  JobId: string;
}
export interface StopUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
export interface StringAttributeConstraintsType {
  MinLength?: string;
  MaxLength?: string;
}
export type StringType = string;

export type SupportedIdentityProvidersListType = Array<string>;
export type TagKeysType = string;

export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValueType = string;

export type TemporaryPasswordValidityDaysType = number;

export declare class TierChangeNotAllowedException extends Data.TaggedError(
  "TierChangeNotAllowedException",
)<{
  readonly message?: string;
}> {}
export type TimeUnitsType = "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
export type TokenModelType = string;

export interface TokenValidityUnitsType {
  AccessToken?: TimeUnitsType;
  IdToken?: TimeUnitsType;
  RefreshToken?: TimeUnitsType;
}
export declare class TooManyFailedAttemptsException extends Data.TaggedError(
  "TooManyFailedAttemptsException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message?: string;
}> {}
export interface UICustomizationType {
  UserPoolId?: string;
  ClientId?: string;
  ImageUrl?: string;
  CSS?: string;
  CSSVersion?: string;
  LastModifiedDate?: Date | string;
  CreationDate?: Date | string;
}
export declare class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export declare class UnexpectedLambdaException extends Data.TaggedError(
  "UnexpectedLambdaException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedIdentityProviderException extends Data.TaggedError(
  "UnsupportedIdentityProviderException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedOperationException extends Data.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedTokenTypeException extends Data.TaggedError(
  "UnsupportedTokenTypeException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedUserStateException extends Data.TaggedError(
  "UnsupportedUserStateException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAuthEventFeedbackRequest {
  UserPoolId: string;
  Username: string;
  EventId: string;
  FeedbackToken: string;
  FeedbackValue: FeedbackValueType;
}
export interface UpdateAuthEventFeedbackResponse {}
export interface UpdateDeviceStatusRequest {
  AccessToken: string;
  DeviceKey: string;
  DeviceRememberedStatus?: DeviceRememberedStatusType;
}
export interface UpdateDeviceStatusResponse {}
export interface UpdateGroupRequest {
  GroupName: string;
  UserPoolId: string;
  Description?: string;
  RoleArn?: string;
  Precedence?: number;
}
export interface UpdateGroupResponse {
  Group?: GroupType;
}
export interface UpdateIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
  ProviderDetails?: Record<string, string>;
  AttributeMapping?: Record<string, string>;
  IdpIdentifiers?: Array<string>;
}
export interface UpdateIdentityProviderResponse {
  IdentityProvider: IdentityProviderType;
}
export interface UpdateManagedLoginBrandingRequest {
  UserPoolId?: string;
  ManagedLoginBrandingId?: string;
  UseCognitoProvidedValues?: boolean;
  Settings?: Document;
  Assets?: Array<AssetType>;
}
export interface UpdateManagedLoginBrandingResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
export interface UpdateResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
  Name: string;
  Scopes?: Array<ResourceServerScopeType>;
}
export interface UpdateResourceServerResponse {
  ResourceServer: ResourceServerType;
}
export interface UpdateUserAttributesRequest {
  UserAttributes: Array<AttributeType>;
  AccessToken: string;
  ClientMetadata?: Record<string, string>;
}
export interface UpdateUserAttributesResponse {
  CodeDeliveryDetailsList?: Array<CodeDeliveryDetailsType>;
}
export interface UpdateUserPoolClientRequest {
  UserPoolId: string;
  ClientId: string;
  ClientName?: string;
  RefreshTokenValidity?: number;
  AccessTokenValidity?: number;
  IdTokenValidity?: number;
  TokenValidityUnits?: TokenValidityUnitsType;
  ReadAttributes?: Array<string>;
  WriteAttributes?: Array<string>;
  ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
  SupportedIdentityProviders?: Array<string>;
  CallbackURLs?: Array<string>;
  LogoutURLs?: Array<string>;
  DefaultRedirectURI?: string;
  AllowedOAuthFlows?: Array<OAuthFlowType>;
  AllowedOAuthScopes?: Array<string>;
  AllowedOAuthFlowsUserPoolClient?: boolean;
  AnalyticsConfiguration?: AnalyticsConfigurationType;
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
  EnableTokenRevocation?: boolean;
  EnablePropagateAdditionalUserContextData?: boolean;
  AuthSessionValidity?: number;
  RefreshTokenRotation?: RefreshTokenRotationType;
}
export interface UpdateUserPoolClientResponse {
  UserPoolClient?: UserPoolClientType;
}
export interface UpdateUserPoolDomainRequest {
  Domain: string;
  UserPoolId: string;
  ManagedLoginVersion?: number;
  CustomDomainConfig?: CustomDomainConfigType;
}
export interface UpdateUserPoolDomainResponse {
  ManagedLoginVersion?: number;
  CloudFrontDomain?: string;
}
export interface UpdateUserPoolRequest {
  UserPoolId: string;
  Policies?: UserPoolPolicyType;
  DeletionProtection?: DeletionProtectionType;
  LambdaConfig?: LambdaConfigType;
  AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
  SmsVerificationMessage?: string;
  EmailVerificationMessage?: string;
  EmailVerificationSubject?: string;
  VerificationMessageTemplate?: VerificationMessageTemplateType;
  SmsAuthenticationMessage?: string;
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
  MfaConfiguration?: UserPoolMfaType;
  DeviceConfiguration?: DeviceConfigurationType;
  EmailConfiguration?: EmailConfigurationType;
  SmsConfiguration?: SmsConfigurationType;
  UserPoolTags?: Record<string, string>;
  AdminCreateUserConfig?: AdminCreateUserConfigType;
  UserPoolAddOns?: UserPoolAddOnsType;
  AccountRecoverySetting?: AccountRecoverySettingType;
  PoolName?: string;
  UserPoolTier?: UserPoolTierType;
}
export interface UpdateUserPoolResponse {}
export interface UserAttributeUpdateSettingsType {
  AttributesRequireVerificationBeforeUpdate?: Array<VerifiedAttributeType>;
}
export interface UserContextDataType {
  IpAddress?: string;
  EncodedData?: string;
}
export type UserFilterType = string;

export declare class UserImportInProgressException extends Data.TaggedError(
  "UserImportInProgressException",
)<{
  readonly message?: string;
}> {}
export type UserImportJobIdType = string;

export type UserImportJobNameType = string;

export type UserImportJobsListType = Array<UserImportJobType>;
export type UserImportJobStatusType =
  | "Created"
  | "Pending"
  | "InProgress"
  | "Stopping"
  | "Expired"
  | "Stopped"
  | "Failed"
  | "Succeeded";
export interface UserImportJobType {
  JobName?: string;
  JobId?: string;
  UserPoolId?: string;
  PreSignedUrl?: string;
  CreationDate?: Date | string;
  StartDate?: Date | string;
  CompletionDate?: Date | string;
  Status?: UserImportJobStatusType;
  CloudWatchLogsRoleArn?: string;
  ImportedUsers?: number;
  SkippedUsers?: number;
  FailedUsers?: number;
  CompletionMessage?: string;
}
export declare class UserLambdaValidationException extends Data.TaggedError(
  "UserLambdaValidationException",
)<{
  readonly message?: string;
}> {}
export type UserMFASettingListType = Array<string>;
export type UsernameAttributesListType = Array<UsernameAttributeType>;
export type UsernameAttributeType = "PHONE_NUMBER" | "EMAIL";
export interface UsernameConfigurationType {
  CaseSensitive: boolean;
}
export declare class UsernameExistsException extends Data.TaggedError(
  "UsernameExistsException",
)<{
  readonly message?: string;
}> {}
export type UsernameType = string;

export declare class UserNotConfirmedException extends Data.TaggedError(
  "UserNotConfirmedException",
)<{
  readonly message?: string;
}> {}
export declare class UserNotFoundException extends Data.TaggedError(
  "UserNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class UserPoolAddOnNotEnabledException extends Data.TaggedError(
  "UserPoolAddOnNotEnabledException",
)<{
  readonly message?: string;
}> {}
export interface UserPoolAddOnsType {
  AdvancedSecurityMode: AdvancedSecurityModeType;
  AdvancedSecurityAdditionalFlows?: AdvancedSecurityAdditionalFlowsType;
}
export interface UserPoolClientDescription {
  ClientId?: string;
  UserPoolId?: string;
  ClientName?: string;
}
export type UserPoolClientListType = Array<UserPoolClientDescription>;
export interface UserPoolClientType {
  UserPoolId?: string;
  ClientName?: string;
  ClientId?: string;
  ClientSecret?: string;
  LastModifiedDate?: Date | string;
  CreationDate?: Date | string;
  RefreshTokenValidity?: number;
  AccessTokenValidity?: number;
  IdTokenValidity?: number;
  TokenValidityUnits?: TokenValidityUnitsType;
  ReadAttributes?: Array<string>;
  WriteAttributes?: Array<string>;
  ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
  SupportedIdentityProviders?: Array<string>;
  CallbackURLs?: Array<string>;
  LogoutURLs?: Array<string>;
  DefaultRedirectURI?: string;
  AllowedOAuthFlows?: Array<OAuthFlowType>;
  AllowedOAuthScopes?: Array<string>;
  AllowedOAuthFlowsUserPoolClient?: boolean;
  AnalyticsConfiguration?: AnalyticsConfigurationType;
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
  EnableTokenRevocation?: boolean;
  EnablePropagateAdditionalUserContextData?: boolean;
  AuthSessionValidity?: number;
  RefreshTokenRotation?: RefreshTokenRotationType;
}
export interface UserPoolDescriptionType {
  Id?: string;
  Name?: string;
  LambdaConfig?: LambdaConfigType;
  Status?: StatusType;
  LastModifiedDate?: Date | string;
  CreationDate?: Date | string;
}
export type UserPoolIdType = string;

export type UserPoolListType = Array<UserPoolDescriptionType>;
export type UserPoolMfaType = "OFF" | "ON" | "OPTIONAL";
export type UserPoolNameType = string;

export interface UserPoolPolicyType {
  PasswordPolicy?: PasswordPolicyType;
  SignInPolicy?: SignInPolicyType;
}
export declare class UserPoolTaggingException extends Data.TaggedError(
  "UserPoolTaggingException",
)<{
  readonly message?: string;
}> {}
export type UserPoolTagsListType = Array<string>;
export type UserPoolTagsType = Record<string, string>;
export type UserPoolTierType = "LITE" | "ESSENTIALS" | "PLUS";
export interface UserPoolType {
  Id?: string;
  Name?: string;
  Policies?: UserPoolPolicyType;
  DeletionProtection?: DeletionProtectionType;
  LambdaConfig?: LambdaConfigType;
  Status?: StatusType;
  LastModifiedDate?: Date | string;
  CreationDate?: Date | string;
  SchemaAttributes?: Array<SchemaAttributeType>;
  AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
  AliasAttributes?: Array<AliasAttributeType>;
  UsernameAttributes?: Array<UsernameAttributeType>;
  SmsVerificationMessage?: string;
  EmailVerificationMessage?: string;
  EmailVerificationSubject?: string;
  VerificationMessageTemplate?: VerificationMessageTemplateType;
  SmsAuthenticationMessage?: string;
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
  MfaConfiguration?: UserPoolMfaType;
  DeviceConfiguration?: DeviceConfigurationType;
  EstimatedNumberOfUsers?: number;
  EmailConfiguration?: EmailConfigurationType;
  SmsConfiguration?: SmsConfigurationType;
  UserPoolTags?: Record<string, string>;
  SmsConfigurationFailure?: string;
  EmailConfigurationFailure?: string;
  Domain?: string;
  CustomDomain?: string;
  AdminCreateUserConfig?: AdminCreateUserConfigType;
  UserPoolAddOns?: UserPoolAddOnsType;
  UsernameConfiguration?: UsernameConfigurationType;
  Arn?: string;
  AccountRecoverySetting?: AccountRecoverySettingType;
  UserPoolTier?: UserPoolTierType;
}
export type UsersListType = Array<UserType>;
export type UserStatusType =
  | "UNCONFIRMED"
  | "CONFIRMED"
  | "ARCHIVED"
  | "COMPROMISED"
  | "UNKNOWN"
  | "RESET_REQUIRED"
  | "FORCE_CHANGE_PASSWORD"
  | "EXTERNAL_PROVIDER";
export interface UserType {
  Username?: string;
  Attributes?: Array<AttributeType>;
  UserCreateDate?: Date | string;
  UserLastModifiedDate?: Date | string;
  Enabled?: boolean;
  UserStatus?: UserStatusType;
  MFAOptions?: Array<MFAOptionType>;
}
export type UserVerificationType = "REQUIRED" | "PREFERRED";
export interface VerificationMessageTemplateType {
  SmsMessage?: string;
  EmailMessage?: string;
  EmailSubject?: string;
  EmailMessageByLink?: string;
  EmailSubjectByLink?: string;
  DefaultEmailOption?: DefaultEmailOptionType;
}
export type VerifiedAttributesListType = Array<VerifiedAttributeType>;
export type VerifiedAttributeType = "PHONE_NUMBER" | "EMAIL";
export interface VerifySoftwareTokenRequest {
  AccessToken?: string;
  Session?: string;
  UserCode: string;
  FriendlyDeviceName?: string;
}
export interface VerifySoftwareTokenResponse {
  Status?: VerifySoftwareTokenResponseType;
  Session?: string;
}
export type VerifySoftwareTokenResponseType = "SUCCESS" | "ERROR";
export interface VerifyUserAttributeRequest {
  AccessToken: string;
  AttributeName: string;
  Code: string;
}
export interface VerifyUserAttributeResponse {}
export type WebAuthnAuthenticatorAttachmentType = string;

export type WebAuthnAuthenticatorTransportsList = Array<string>;
export type WebAuthnAuthenticatorTransportType = string;

export declare class WebAuthnChallengeNotFoundException extends Data.TaggedError(
  "WebAuthnChallengeNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class WebAuthnClientMismatchException extends Data.TaggedError(
  "WebAuthnClientMismatchException",
)<{
  readonly message?: string;
}> {}
export declare class WebAuthnConfigurationMissingException extends Data.TaggedError(
  "WebAuthnConfigurationMissingException",
)<{
  readonly message?: string;
}> {}
export interface WebAuthnConfigurationType {
  RelyingPartyId?: string;
  UserVerification?: UserVerificationType;
}
export interface WebAuthnCredentialDescription {
  CredentialId: string;
  FriendlyCredentialName: string;
  RelyingPartyId: string;
  AuthenticatorAttachment?: string;
  AuthenticatorTransports: Array<string>;
  CreatedAt: Date | string;
}
export type WebAuthnCredentialDescriptionListType =
  Array<WebAuthnCredentialDescription>;
export declare class WebAuthnCredentialNotSupportedException extends Data.TaggedError(
  "WebAuthnCredentialNotSupportedException",
)<{
  readonly message?: string;
}> {}
export type WebAuthnCredentialsQueryLimitType = number;

export declare class WebAuthnNotEnabledException extends Data.TaggedError(
  "WebAuthnNotEnabledException",
)<{
  readonly message?: string;
}> {}
export declare class WebAuthnOriginNotAllowedException extends Data.TaggedError(
  "WebAuthnOriginNotAllowedException",
)<{
  readonly message?: string;
}> {}
export declare class WebAuthnRelyingPartyMismatchException extends Data.TaggedError(
  "WebAuthnRelyingPartyMismatchException",
)<{
  readonly message?: string;
}> {}
export type WrappedBooleanType = boolean;

export type WrappedIntegerType = number;

export declare namespace AddCustomAttributes {
  export type Input = AddCustomAttributesRequest;
  export type Output = AddCustomAttributesResponse;
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
  export type Output = AdminConfirmSignUpResponse;
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
  export type Output = AdminCreateUserResponse;
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
  export type Output = AdminDeleteUserAttributesResponse;
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
  export type Output = AdminDisableProviderForUserResponse;
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
  export type Output = AdminDisableUserResponse;
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
  export type Output = AdminEnableUserResponse;
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
  export type Output = AdminGetDeviceResponse;
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
  export type Output = AdminGetUserResponse;
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
  export type Output = AdminInitiateAuthResponse;
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
  export type Output = AdminLinkProviderForUserResponse;
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
  export type Output = AdminListDevicesResponse;
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
  export type Output = AdminListGroupsForUserResponse;
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
  export type Output = AdminListUserAuthEventsResponse;
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
  export type Output = AdminResetUserPasswordResponse;
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
  export type Output = AdminRespondToAuthChallengeResponse;
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
  export type Output = AdminSetUserMFAPreferenceResponse;
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
  export type Output = AdminSetUserPasswordResponse;
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
  export type Output = AdminSetUserSettingsResponse;
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
  export type Output = AdminUpdateAuthEventFeedbackResponse;
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
  export type Output = AdminUpdateDeviceStatusResponse;
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
  export type Output = AdminUpdateUserAttributesResponse;
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
  export type Output = AdminUserGlobalSignOutResponse;
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
  export type Output = AssociateSoftwareTokenResponse;
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
  export type Output = ChangePasswordResponse;
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
  export type Output = CompleteWebAuthnRegistrationResponse;
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
  export type Output = ConfirmDeviceResponse;
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
  export type Output = ConfirmForgotPasswordResponse;
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
  export type Output = ConfirmSignUpResponse;
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
  export type Output = CreateGroupResponse;
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
  export type Output = CreateIdentityProviderResponse;
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
  export type Output = CreateManagedLoginBrandingResponse;
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
  export type Output = CreateResourceServerResponse;
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
  export type Output = CreateUserImportJobResponse;
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
  export type Output = CreateUserPoolResponse;
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
  export type Output = CreateUserPoolClientResponse;
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
  export type Output = CreateUserPoolDomainResponse;
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
  export type Output = DeleteUserAttributesResponse;
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
  export type Output = DeleteUserPoolDomainResponse;
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
  export type Output = DeleteWebAuthnCredentialResponse;
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
  export type Output = DescribeIdentityProviderResponse;
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
  export type Output = DescribeManagedLoginBrandingResponse;
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
  export type Output = DescribeManagedLoginBrandingByClientResponse;
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
  export type Output = DescribeResourceServerResponse;
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
  export type Output = DescribeRiskConfigurationResponse;
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
  export type Output = DescribeUserImportJobResponse;
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
  export type Output = DescribeUserPoolResponse;
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
  export type Output = DescribeUserPoolClientResponse;
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
  export type Output = DescribeUserPoolDomainResponse;
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
  export type Output = ForgotPasswordResponse;
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
  export type Output = GetCSVHeaderResponse;
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
  export type Output = GetDeviceResponse;
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
  export type Output = GetGroupResponse;
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
  export type Output = GetIdentityProviderByIdentifierResponse;
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
  export type Output = GetLogDeliveryConfigurationResponse;
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
  export type Output = GetSigningCertificateResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetTokensFromRefreshToken {
  export type Input = GetTokensFromRefreshTokenRequest;
  export type Output = GetTokensFromRefreshTokenResponse;
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
  export type Output = GetUICustomizationResponse;
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
  export type Output = GetUserResponse;
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
  export type Output = GetUserAttributeVerificationCodeResponse;
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
  export type Output = GetUserAuthFactorsResponse;
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
  export type Output = GetUserPoolMfaConfigResponse;
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
  export type Output = GlobalSignOutResponse;
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
  export type Output = InitiateAuthResponse;
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
  export type Output = ListDevicesResponse;
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
  export type Output = ListGroupsResponse;
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
  export type Output = ListIdentityProvidersResponse;
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
  export type Output = ListResourceServersResponse;
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
  export type Output = ListTagsForResourceResponse;
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
  export type Output = ListUserImportJobsResponse;
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
  export type Output = ListUserPoolClientsResponse;
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
  export type Output = ListUserPoolsResponse;
  export type Error =
    | InternalErrorException
    | InvalidParameterException
    | NotAuthorizedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
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
  export type Output = ListUsersInGroupResponse;
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
  export type Output = ListWebAuthnCredentialsResponse;
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
  export type Output = ResendConfirmationCodeResponse;
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
  export type Output = RespondToAuthChallengeResponse;
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
  export type Output = RevokeTokenResponse;
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
  export type Output = SetLogDeliveryConfigurationResponse;
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
  export type Output = SetRiskConfigurationResponse;
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
  export type Output = SetUICustomizationResponse;
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
  export type Output = SetUserMFAPreferenceResponse;
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
  export type Output = SetUserPoolMfaConfigResponse;
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
  export type Output = SetUserSettingsResponse;
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
  export type Output = SignUpResponse;
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
  export type Output = StartUserImportJobResponse;
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
  export type Output = StartWebAuthnRegistrationResponse;
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
  export type Output = StopUserImportJobResponse;
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
  export type Output = TagResourceResponse;
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
  export type Output = UntagResourceResponse;
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
  export type Output = UpdateAuthEventFeedbackResponse;
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
  export type Output = UpdateDeviceStatusResponse;
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
  export type Output = UpdateGroupResponse;
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
  export type Output = UpdateIdentityProviderResponse;
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
  export type Output = UpdateManagedLoginBrandingResponse;
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
  export type Output = UpdateResourceServerResponse;
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
  export type Output = UpdateUserAttributesResponse;
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
  export type Output = UpdateUserPoolResponse;
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
  export type Output = UpdateUserPoolClientResponse;
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
  export type Output = UpdateUserPoolDomainResponse;
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
  export type Output = VerifySoftwareTokenResponse;
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
  export type Output = VerifyUserAttributeResponse;
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
