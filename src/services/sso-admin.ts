import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface SWBExternalService {
  attachCustomerManagedPolicyReferenceToPermissionSet(
    input: AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  ): Effect.Effect<
    AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  attachManagedPolicyToPermissionSet(
    input: AttachManagedPolicyToPermissionSetRequest,
  ): Effect.Effect<
    AttachManagedPolicyToPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAccountAssignment(
    input: CreateAccountAssignmentRequest,
  ): Effect.Effect<
    CreateAccountAssignmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createApplicationAssignment(
    input: CreateApplicationAssignmentRequest,
  ): Effect.Effect<
    CreateApplicationAssignmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInstance(
    input: CreateInstanceRequest,
  ): Effect.Effect<
    CreateInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInstanceAccessControlAttributeConfiguration(
    input: CreateInstanceAccessControlAttributeConfigurationRequest,
  ): Effect.Effect<
    CreateInstanceAccessControlAttributeConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPermissionSet(
    input: CreatePermissionSetRequest,
  ): Effect.Effect<
    CreatePermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTrustedTokenIssuer(
    input: CreateTrustedTokenIssuerRequest,
  ): Effect.Effect<
    CreateTrustedTokenIssuerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAccountAssignment(
    input: DeleteAccountAssignmentRequest,
  ): Effect.Effect<
    DeleteAccountAssignmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplicationAssignment(
    input: DeleteApplicationAssignmentRequest,
  ): Effect.Effect<
    DeleteApplicationAssignmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInlinePolicyFromPermissionSet(
    input: DeleteInlinePolicyFromPermissionSetRequest,
  ): Effect.Effect<
    DeleteInlinePolicyFromPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInstance(
    input: DeleteInstanceRequest,
  ): Effect.Effect<
    DeleteInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInstanceAccessControlAttributeConfiguration(
    input: DeleteInstanceAccessControlAttributeConfigurationRequest,
  ): Effect.Effect<
    DeleteInstanceAccessControlAttributeConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePermissionsBoundaryFromPermissionSet(
    input: DeletePermissionsBoundaryFromPermissionSetRequest,
  ): Effect.Effect<
    DeletePermissionsBoundaryFromPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePermissionSet(
    input: DeletePermissionSetRequest,
  ): Effect.Effect<
    DeletePermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTrustedTokenIssuer(
    input: DeleteTrustedTokenIssuerRequest,
  ): Effect.Effect<
    DeleteTrustedTokenIssuerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccountAssignmentCreationStatus(
    input: DescribeAccountAssignmentCreationStatusRequest,
  ): Effect.Effect<
    DescribeAccountAssignmentCreationStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeAccountAssignmentDeletionStatus(
    input: DescribeAccountAssignmentDeletionStatusRequest,
  ): Effect.Effect<
    DescribeAccountAssignmentDeletionStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeApplication(
    input: DescribeApplicationRequest,
  ): Effect.Effect<
    DescribeApplicationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeApplicationAssignment(
    input: DescribeApplicationAssignmentRequest,
  ): Effect.Effect<
    DescribeApplicationAssignmentResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeApplicationProvider(
    input: DescribeApplicationProviderRequest,
  ): Effect.Effect<
    DescribeApplicationProviderResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeInstance(
    input: DescribeInstanceRequest,
  ): Effect.Effect<
    DescribeInstanceResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeInstanceAccessControlAttributeConfiguration(
    input: DescribeInstanceAccessControlAttributeConfigurationRequest,
  ): Effect.Effect<
    DescribeInstanceAccessControlAttributeConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePermissionSet(
    input: DescribePermissionSetRequest,
  ): Effect.Effect<
    DescribePermissionSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePermissionSetProvisioningStatus(
    input: DescribePermissionSetProvisioningStatusRequest,
  ): Effect.Effect<
    DescribePermissionSetProvisioningStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeTrustedTokenIssuer(
    input: DescribeTrustedTokenIssuerRequest,
  ): Effect.Effect<
    DescribeTrustedTokenIssuerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  detachCustomerManagedPolicyReferenceFromPermissionSet(
    input: DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  ): Effect.Effect<
    DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  detachManagedPolicyFromPermissionSet(
    input: DetachManagedPolicyFromPermissionSetRequest,
  ): Effect.Effect<
    DetachManagedPolicyFromPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getApplicationAssignmentConfiguration(
    input: GetApplicationAssignmentConfigurationRequest,
  ): Effect.Effect<
    GetApplicationAssignmentConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInlinePolicyForPermissionSet(
    input: GetInlinePolicyForPermissionSetRequest,
  ): Effect.Effect<
    GetInlinePolicyForPermissionSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPermissionsBoundaryForPermissionSet(
    input: GetPermissionsBoundaryForPermissionSetRequest,
  ): Effect.Effect<
    GetPermissionsBoundaryForPermissionSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountAssignmentCreationStatus(
    input: ListAccountAssignmentCreationStatusRequest,
  ): Effect.Effect<
    ListAccountAssignmentCreationStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountAssignmentDeletionStatus(
    input: ListAccountAssignmentDeletionStatusRequest,
  ): Effect.Effect<
    ListAccountAssignmentDeletionStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountAssignments(
    input: ListAccountAssignmentsRequest,
  ): Effect.Effect<
    ListAccountAssignmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountAssignmentsForPrincipal(
    input: ListAccountAssignmentsForPrincipalRequest,
  ): Effect.Effect<
    ListAccountAssignmentsForPrincipalResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountsForProvisionedPermissionSet(
    input: ListAccountsForProvisionedPermissionSetRequest,
  ): Effect.Effect<
    ListAccountsForProvisionedPermissionSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplicationAssignments(
    input: ListApplicationAssignmentsRequest,
  ): Effect.Effect<
    ListApplicationAssignmentsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplicationAssignmentsForPrincipal(
    input: ListApplicationAssignmentsForPrincipalRequest,
  ): Effect.Effect<
    ListApplicationAssignmentsForPrincipalResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplicationProviders(
    input: ListApplicationProvidersRequest,
  ): Effect.Effect<
    ListApplicationProvidersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCustomerManagedPolicyReferencesInPermissionSet(
    input: ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ): Effect.Effect<
    ListCustomerManagedPolicyReferencesInPermissionSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInstances(
    input: ListInstancesRequest,
  ): Effect.Effect<
    ListInstancesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedPoliciesInPermissionSet(
    input: ListManagedPoliciesInPermissionSetRequest,
  ): Effect.Effect<
    ListManagedPoliciesInPermissionSetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPermissionSetProvisioningStatus(
    input: ListPermissionSetProvisioningStatusRequest,
  ): Effect.Effect<
    ListPermissionSetProvisioningStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPermissionSets(
    input: ListPermissionSetsRequest,
  ): Effect.Effect<
    ListPermissionSetsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPermissionSetsProvisionedToAccount(
    input: ListPermissionSetsProvisionedToAccountRequest,
  ): Effect.Effect<
    ListPermissionSetsProvisionedToAccountResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
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
  listTrustedTokenIssuers(
    input: ListTrustedTokenIssuersRequest,
  ): Effect.Effect<
    ListTrustedTokenIssuersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  provisionPermissionSet(
    input: ProvisionPermissionSetRequest,
  ): Effect.Effect<
    ProvisionPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putApplicationAssignmentConfiguration(
    input: PutApplicationAssignmentConfigurationRequest,
  ): Effect.Effect<
    PutApplicationAssignmentConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putInlinePolicyToPermissionSet(
    input: PutInlinePolicyToPermissionSetRequest,
  ): Effect.Effect<
    PutInlinePolicyToPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putPermissionsBoundaryToPermissionSet(
    input: PutPermissionsBoundaryToPermissionSetRequest,
  ): Effect.Effect<
    PutPermissionsBoundaryToPermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateInstance(
    input: UpdateInstanceRequest,
  ): Effect.Effect<
    UpdateInstanceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateInstanceAccessControlAttributeConfiguration(
    input: UpdateInstanceAccessControlAttributeConfigurationRequest,
  ): Effect.Effect<
    UpdateInstanceAccessControlAttributeConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePermissionSet(
    input: UpdatePermissionSetRequest,
  ): Effect.Effect<
    UpdatePermissionSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTrustedTokenIssuer(
    input: UpdateTrustedTokenIssuerRequest,
  ): Effect.Effect<
    UpdateTrustedTokenIssuerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type SsoAdmin = SWBExternalService;

export interface AccessControlAttribute {
  Key: string;
  Value: AccessControlAttributeValue;
}
export type AccessControlAttributeKey = string;

export type AccessControlAttributeList = Array<AccessControlAttribute>;
export interface AccessControlAttributeValue {
  Source: Array<string>;
}
export type AccessControlAttributeValueSource = string;

export type AccessControlAttributeValueSourceList = Array<string>;
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccessDeniedExceptionMessage = string;

export interface AccountAssignment {
  AccountId?: string;
  PermissionSetArn?: string;
  PrincipalType?: PrincipalType;
  PrincipalId?: string;
}
export interface AccountAssignmentForPrincipal {
  AccountId?: string;
  PermissionSetArn?: string;
  PrincipalId?: string;
  PrincipalType?: PrincipalType;
}
export type AccountAssignmentList = Array<AccountAssignment>;
export type AccountAssignmentListForPrincipal =
  Array<AccountAssignmentForPrincipal>;
export interface AccountAssignmentOperationStatus {
  Status?: StatusValues;
  RequestId?: string;
  FailureReason?: string;
  TargetId?: string;
  TargetType?: TargetType;
  PermissionSetArn?: string;
  PrincipalType?: PrincipalType;
  PrincipalId?: string;
  CreatedDate?: Date | string;
}
export type AccountAssignmentOperationStatusList =
  Array<AccountAssignmentOperationStatusMetadata>;
export interface AccountAssignmentOperationStatusMetadata {
  Status?: StatusValues;
  RequestId?: string;
  CreatedDate?: Date | string;
}
export type AccountId = string;

export type AccountList = Array<string>;
export interface Application {
  ApplicationArn?: string;
  ApplicationProviderArn?: string;
  Name?: string;
  ApplicationAccount?: string;
  InstanceArn?: string;
  Status?: ApplicationStatus;
  PortalOptions?: PortalOptions;
  Description?: string;
  CreatedDate?: Date | string;
}
export type ApplicationArn = string;

export interface ApplicationAssignment {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
export interface ApplicationAssignmentForPrincipal {
  ApplicationArn?: string;
  PrincipalId?: string;
  PrincipalType?: PrincipalType;
}
export type ApplicationAssignmentListForPrincipal =
  Array<ApplicationAssignmentForPrincipal>;
export type ApplicationAssignmentsList = Array<ApplicationAssignment>;
export type ApplicationList = Array<Application>;
export type ApplicationNameType = string;

export interface ApplicationProvider {
  ApplicationProviderArn: string;
  FederationProtocol?: FederationProtocol;
  DisplayData?: DisplayData;
  ResourceServerConfig?: ResourceServerConfig;
}
export type ApplicationProviderArn = string;

export type ApplicationProviderList = Array<ApplicationProvider>;
export type ApplicationStatus = "ENABLED" | "DISABLED";
export type ApplicationUrl = string;

export type ApplicationVisibility = "ENABLED" | "DISABLED";
export type AssignmentRequired = boolean;

export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  CustomerManagedPolicyReference: CustomerManagedPolicyReference;
}
export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponse {}
export interface AttachedManagedPolicy {
  Name?: string;
  Arn?: string;
}
export type AttachedManagedPolicyList = Array<AttachedManagedPolicy>;
export interface AttachManagedPolicyToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  ManagedPolicyArn: string;
}
export interface AttachManagedPolicyToPermissionSetResponse {}
export type AuthenticationMethod = { Iam: IamAuthenticationMethod };
export interface AuthenticationMethodItem {
  AuthenticationMethodType?: AuthenticationMethodType;
  AuthenticationMethod?: AuthenticationMethod;
}
export type AuthenticationMethods = Array<AuthenticationMethodItem>;
export type AuthenticationMethodType = "IAM";
export interface AuthorizationCodeGrant {
  RedirectUris?: Array<string>;
}
export interface AuthorizedTokenIssuer {
  TrustedTokenIssuerArn?: string;
  AuthorizedAudiences?: Array<string>;
}
export type AuthorizedTokenIssuers = Array<AuthorizedTokenIssuer>;
export type ClaimAttributePath = string;

export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ConflictExceptionMessage = string;

export interface CreateAccountAssignmentRequest {
  InstanceArn: string;
  TargetId: string;
  TargetType: TargetType;
  PermissionSetArn: string;
  PrincipalType: PrincipalType;
  PrincipalId: string;
}
export interface CreateAccountAssignmentResponse {
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}
export interface CreateApplicationAssignmentRequest {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
export interface CreateApplicationAssignmentResponse {}
export interface CreateApplicationRequest {
  InstanceArn: string;
  ApplicationProviderArn: string;
  Name: string;
  Description?: string;
  PortalOptions?: PortalOptions;
  Tags?: Array<Tag>;
  Status?: ApplicationStatus;
  ClientToken?: string;
}
export interface CreateApplicationResponse {
  ApplicationArn?: string;
}
export interface CreateInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
  InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}
export interface CreateInstanceAccessControlAttributeConfigurationResponse {}
export interface CreateInstanceRequest {
  Name?: string;
  ClientToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateInstanceResponse {
  InstanceArn?: string;
}
export interface CreatePermissionSetRequest {
  Name: string;
  Description?: string;
  InstanceArn: string;
  SessionDuration?: string;
  RelayState?: string;
  Tags?: Array<Tag>;
}
export interface CreatePermissionSetResponse {
  PermissionSet?: PermissionSet;
}
export interface CreateTrustedTokenIssuerRequest {
  InstanceArn: string;
  Name: string;
  TrustedTokenIssuerType: TrustedTokenIssuerType;
  TrustedTokenIssuerConfiguration: TrustedTokenIssuerConfiguration;
  ClientToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateTrustedTokenIssuerResponse {
  TrustedTokenIssuerArn?: string;
}
export interface CustomerManagedPolicyReference {
  Name: string;
  Path?: string;
}
export type CustomerManagedPolicyReferenceList =
  Array<CustomerManagedPolicyReference>;
export interface DeleteAccountAssignmentRequest {
  InstanceArn: string;
  TargetId: string;
  TargetType: TargetType;
  PermissionSetArn: string;
  PrincipalType: PrincipalType;
  PrincipalId: string;
}
export interface DeleteAccountAssignmentResponse {
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}
export interface DeleteApplicationAccessScopeRequest {
  ApplicationArn: string;
  Scope: string;
}
export interface DeleteApplicationAssignmentRequest {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
export interface DeleteApplicationAssignmentResponse {}
export interface DeleteApplicationAuthenticationMethodRequest {
  ApplicationArn: string;
  AuthenticationMethodType: AuthenticationMethodType;
}
export interface DeleteApplicationGrantRequest {
  ApplicationArn: string;
  GrantType: GrantType;
}
export interface DeleteApplicationRequest {
  ApplicationArn: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteInlinePolicyFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
export interface DeleteInlinePolicyFromPermissionSetResponse {}
export interface DeleteInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
}
export interface DeleteInstanceAccessControlAttributeConfigurationResponse {}
export interface DeleteInstanceRequest {
  InstanceArn: string;
}
export interface DeleteInstanceResponse {}
export interface DeletePermissionsBoundaryFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
export interface DeletePermissionsBoundaryFromPermissionSetResponse {}
export interface DeletePermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
export interface DeletePermissionSetResponse {}
export interface DeleteTrustedTokenIssuerRequest {
  TrustedTokenIssuerArn: string;
}
export interface DeleteTrustedTokenIssuerResponse {}
export interface DescribeAccountAssignmentCreationStatusRequest {
  InstanceArn: string;
  AccountAssignmentCreationRequestId: string;
}
export interface DescribeAccountAssignmentCreationStatusResponse {
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}
export interface DescribeAccountAssignmentDeletionStatusRequest {
  InstanceArn: string;
  AccountAssignmentDeletionRequestId: string;
}
export interface DescribeAccountAssignmentDeletionStatusResponse {
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}
export interface DescribeApplicationAssignmentRequest {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
export interface DescribeApplicationAssignmentResponse {
  PrincipalType?: PrincipalType;
  PrincipalId?: string;
  ApplicationArn?: string;
}
export interface DescribeApplicationProviderRequest {
  ApplicationProviderArn: string;
}
export interface DescribeApplicationProviderResponse {
  ApplicationProviderArn: string;
  FederationProtocol?: FederationProtocol;
  DisplayData?: DisplayData;
  ResourceServerConfig?: ResourceServerConfig;
}
export interface DescribeApplicationRequest {
  ApplicationArn: string;
}
export interface DescribeApplicationResponse {
  ApplicationArn?: string;
  ApplicationProviderArn?: string;
  Name?: string;
  ApplicationAccount?: string;
  InstanceArn?: string;
  Status?: ApplicationStatus;
  PortalOptions?: PortalOptions;
  Description?: string;
  CreatedDate?: Date | string;
}
export interface DescribeInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
}
export interface DescribeInstanceAccessControlAttributeConfigurationResponse {
  Status?: InstanceAccessControlAttributeConfigurationStatus;
  StatusReason?: string;
  InstanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;
}
export interface DescribeInstanceRequest {
  InstanceArn: string;
}
export interface DescribeInstanceResponse {
  InstanceArn?: string;
  IdentityStoreId?: string;
  OwnerAccountId?: string;
  Name?: string;
  CreatedDate?: Date | string;
  Status?: InstanceStatus;
}
export interface DescribePermissionSetProvisioningStatusRequest {
  InstanceArn: string;
  ProvisionPermissionSetRequestId: string;
}
export interface DescribePermissionSetProvisioningStatusResponse {
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}
export interface DescribePermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
export interface DescribePermissionSetResponse {
  PermissionSet?: PermissionSet;
}
export interface DescribeTrustedTokenIssuerRequest {
  TrustedTokenIssuerArn: string;
}
export interface DescribeTrustedTokenIssuerResponse {
  TrustedTokenIssuerArn?: string;
  Name?: string;
  TrustedTokenIssuerType?: TrustedTokenIssuerType;
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerConfiguration;
}
export type Description = string;

export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  CustomerManagedPolicyReference: CustomerManagedPolicyReference;
}
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetResponse {}
export interface DetachManagedPolicyFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  ManagedPolicyArn: string;
}
export interface DetachManagedPolicyFromPermissionSetResponse {}
export interface DisplayData {
  DisplayName?: string;
  IconUrl?: string;
  Description?: string;
}
export type Duration = string;

export type FederationProtocol = "SAML" | "OAUTH";
export interface GetApplicationAccessScopeRequest {
  ApplicationArn: string;
  Scope: string;
}
export interface GetApplicationAccessScopeResponse {
  Scope: string;
  AuthorizedTargets?: Array<string>;
}
export interface GetApplicationAssignmentConfigurationRequest {
  ApplicationArn: string;
}
export interface GetApplicationAssignmentConfigurationResponse {
  AssignmentRequired: boolean;
}
export interface GetApplicationAuthenticationMethodRequest {
  ApplicationArn: string;
  AuthenticationMethodType: AuthenticationMethodType;
}
export interface GetApplicationAuthenticationMethodResponse {
  AuthenticationMethod?: AuthenticationMethod;
}
export interface GetApplicationGrantRequest {
  ApplicationArn: string;
  GrantType: GrantType;
}
export interface GetApplicationGrantResponse {
  Grant: Grant;
}
export interface GetInlinePolicyForPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
export interface GetInlinePolicyForPermissionSetResponse {
  InlinePolicy?: string;
}
export interface GetPermissionsBoundaryForPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
export interface GetPermissionsBoundaryForPermissionSetResponse {
  PermissionsBoundary?: PermissionsBoundary;
}
export type Grant =
  | { AuthorizationCode: AuthorizationCodeGrant }
  | { JwtBearer: JwtBearerGrant }
  | { RefreshToken: RefreshTokenGrant }
  | { TokenExchange: TokenExchangeGrant };
export interface GrantItem {
  GrantType: GrantType;
  Grant: Grant;
}
export type Grants = Array<GrantItem>;
export type GrantType =
  | "AUTHORIZATION_CODE"
  | "REFRESH_TOKEN"
  | "JWT_BEARER"
  | "TOKEN_EXCHANGE";
export interface IamAuthenticationMethod {
  ActorPolicy: ActorPolicyDocument;
}
export type IconUrl = string;

export type Id = string;

export interface InstanceAccessControlAttributeConfiguration {
  AccessControlAttributes: Array<AccessControlAttribute>;
}
export type InstanceAccessControlAttributeConfigurationStatus =
  | "ENABLED"
  | "CREATION_IN_PROGRESS"
  | "CREATION_FAILED";
export type InstanceAccessControlAttributeConfigurationStatusReason = string;

export type InstanceArn = string;

export type InstanceList = Array<InstanceMetadata>;
export interface InstanceMetadata {
  InstanceArn?: string;
  IdentityStoreId?: string;
  OwnerAccountId?: string;
  Name?: string;
  CreatedDate?: Date | string;
  Status?: InstanceStatus;
}
export type InstanceStatus =
  | "CREATE_IN_PROGRESS"
  | "DELETE_IN_PROGRESS"
  | "ACTIVE";
export type InternalFailureMessage = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type JMESPath = string;

export type JwksRetrievalOption = "OPEN_ID_DISCOVERY";
export interface JwtBearerGrant {
  AuthorizedTokenIssuers?: Array<AuthorizedTokenIssuer>;
}
export interface ListAccountAssignmentCreationStatusRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: OperationStatusFilter;
}
export interface ListAccountAssignmentCreationStatusResponse {
  AccountAssignmentsCreationStatus?: Array<AccountAssignmentOperationStatusMetadata>;
  NextToken?: string;
}
export interface ListAccountAssignmentDeletionStatusRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: OperationStatusFilter;
}
export interface ListAccountAssignmentDeletionStatusResponse {
  AccountAssignmentsDeletionStatus?: Array<AccountAssignmentOperationStatusMetadata>;
  NextToken?: string;
}
export interface ListAccountAssignmentsFilter {
  AccountId?: string;
}
export interface ListAccountAssignmentsForPrincipalRequest {
  InstanceArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
  Filter?: ListAccountAssignmentsFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccountAssignmentsForPrincipalResponse {
  AccountAssignments?: Array<AccountAssignmentForPrincipal>;
  NextToken?: string;
}
export interface ListAccountAssignmentsRequest {
  InstanceArn: string;
  AccountId: string;
  PermissionSetArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAccountAssignmentsResponse {
  AccountAssignments?: Array<AccountAssignment>;
  NextToken?: string;
}
export interface ListAccountsForProvisionedPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  ProvisioningStatus?: ProvisioningStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAccountsForProvisionedPermissionSetResponse {
  AccountIds?: Array<string>;
  NextToken?: string;
}
export interface ListApplicationAccessScopesRequest {
  ApplicationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApplicationAccessScopesResponse {
  Scopes: Array<ScopeDetails>;
  NextToken?: string;
}
export interface ListApplicationAssignmentsFilter {
  ApplicationArn?: string;
}
export interface ListApplicationAssignmentsForPrincipalRequest {
  InstanceArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
  Filter?: ListApplicationAssignmentsFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListApplicationAssignmentsForPrincipalResponse {
  ApplicationAssignments?: Array<ApplicationAssignmentForPrincipal>;
  NextToken?: string;
}
export interface ListApplicationAssignmentsRequest {
  ApplicationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApplicationAssignmentsResponse {
  ApplicationAssignments?: Array<ApplicationAssignment>;
  NextToken?: string;
}
export interface ListApplicationAuthenticationMethodsRequest {
  ApplicationArn: string;
  NextToken?: string;
}
export interface ListApplicationAuthenticationMethodsResponse {
  AuthenticationMethods?: Array<AuthenticationMethodItem>;
  NextToken?: string;
}
export interface ListApplicationGrantsRequest {
  ApplicationArn: string;
  NextToken?: string;
}
export interface ListApplicationGrantsResponse {
  Grants: Array<GrantItem>;
  NextToken?: string;
}
export interface ListApplicationProvidersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApplicationProvidersResponse {
  ApplicationProviders?: Array<ApplicationProvider>;
  NextToken?: string;
}
export interface ListApplicationsFilter {
  ApplicationAccount?: string;
  ApplicationProvider?: string;
}
export interface ListApplicationsRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: ListApplicationsFilter;
}
export interface ListApplicationsResponse {
  Applications?: Array<Application>;
  NextToken?: string;
}
export interface ListCustomerManagedPolicyReferencesInPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomerManagedPolicyReferencesInPermissionSetResponse {
  CustomerManagedPolicyReferences?: Array<CustomerManagedPolicyReference>;
  NextToken?: string;
}
export interface ListInstancesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInstancesResponse {
  Instances?: Array<InstanceMetadata>;
  NextToken?: string;
}
export interface ListManagedPoliciesInPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListManagedPoliciesInPermissionSetResponse {
  AttachedManagedPolicies?: Array<AttachedManagedPolicy>;
  NextToken?: string;
}
export interface ListPermissionSetProvisioningStatusRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: OperationStatusFilter;
}
export interface ListPermissionSetProvisioningStatusResponse {
  PermissionSetsProvisioningStatus?: Array<PermissionSetProvisioningStatusMetadata>;
  NextToken?: string;
}
export interface ListPermissionSetsProvisionedToAccountRequest {
  InstanceArn: string;
  AccountId: string;
  ProvisioningStatus?: ProvisioningStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPermissionSetsProvisionedToAccountResponse {
  NextToken?: string;
  PermissionSets?: Array<string>;
}
export interface ListPermissionSetsRequest {
  InstanceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPermissionSetsResponse {
  PermissionSets?: Array<string>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  InstanceArn?: string;
  ResourceArn: string;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface ListTrustedTokenIssuersRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTrustedTokenIssuersResponse {
  TrustedTokenIssuers?: Array<TrustedTokenIssuerMetadata>;
  NextToken?: string;
}
export type ManagedPolicyArn = string;

export type ManagedPolicyName = string;

export type ManagedPolicyPath = string;

export type MaxResults = number;

export type Name = string;

export type NameType = string;

export interface OidcJwtConfiguration {
  IssuerUrl: string;
  ClaimAttributePath: string;
  IdentityStoreAttributePath: string;
  JwksRetrievalOption: JwksRetrievalOption;
}
export interface OidcJwtUpdateConfiguration {
  ClaimAttributePath?: string;
  IdentityStoreAttributePath?: string;
  JwksRetrievalOption?: JwksRetrievalOption;
}
export interface OperationStatusFilter {
  Status?: StatusValues;
}
export interface PermissionsBoundary {
  CustomerManagedPolicyReference?: CustomerManagedPolicyReference;
  ManagedPolicyArn?: string;
}
export interface PermissionSet {
  Name?: string;
  PermissionSetArn?: string;
  Description?: string;
  CreatedDate?: Date | string;
  SessionDuration?: string;
  RelayState?: string;
}
export type PermissionSetArn = string;

export type PermissionSetDescription = string;

export type PermissionSetList = Array<string>;
export type PermissionSetName = string;

export type PermissionSetPolicyDocument = string;

export interface PermissionSetProvisioningStatus {
  Status?: StatusValues;
  RequestId?: string;
  AccountId?: string;
  PermissionSetArn?: string;
  FailureReason?: string;
  CreatedDate?: Date | string;
}
export type PermissionSetProvisioningStatusList =
  Array<PermissionSetProvisioningStatusMetadata>;
export interface PermissionSetProvisioningStatusMetadata {
  Status?: StatusValues;
  RequestId?: string;
  CreatedDate?: Date | string;
}
export interface PortalOptions {
  SignInOptions?: SignInOptions;
  Visibility?: ApplicationVisibility;
}
export type PrincipalId = string;

export type PrincipalType = "USER" | "GROUP";
export type ProvisioningStatus =
  | "LATEST_PERMISSION_SET_PROVISIONED"
  | "LATEST_PERMISSION_SET_NOT_PROVISIONED";
export interface ProvisionPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  TargetId?: string;
  TargetType: ProvisionTargetType;
}
export interface ProvisionPermissionSetResponse {
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}
export type ProvisionTargetType = "AWS_ACCOUNT" | "ALL_PROVISIONED_ACCOUNTS";
export interface PutApplicationAccessScopeRequest {
  Scope: string;
  AuthorizedTargets?: Array<string>;
  ApplicationArn: string;
}
export interface PutApplicationAssignmentConfigurationRequest {
  ApplicationArn: string;
  AssignmentRequired: boolean;
}
export interface PutApplicationAssignmentConfigurationResponse {}
export interface PutApplicationAuthenticationMethodRequest {
  ApplicationArn: string;
  AuthenticationMethodType: AuthenticationMethodType;
  AuthenticationMethod: AuthenticationMethod;
}
export interface PutApplicationGrantRequest {
  ApplicationArn: string;
  GrantType: GrantType;
  Grant: Grant;
}
export interface PutInlinePolicyToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  InlinePolicy: string;
}
export interface PutInlinePolicyToPermissionSetResponse {}
export interface PutPermissionsBoundaryToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  PermissionsBoundary: PermissionsBoundary;
}
export interface PutPermissionsBoundaryToPermissionSetResponse {}
export type Reason = string;

export type RedirectUris = Array<string>;
export interface RefreshTokenGrant {}
export type RelayState = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceNotFoundMessage = string;

export interface ResourceServerConfig {
  Scopes?: Record<string, ResourceServerScopeDetails>;
}
export type ResourceServerScope = string;

export interface ResourceServerScopeDetails {
  LongDescription?: string;
  DetailedTitle?: string;
}
export type ResourceServerScopes = Record<string, ResourceServerScopeDetails>;
export type Scope = string;

export interface ScopeDetails {
  Scope: string;
  AuthorizedTargets?: Array<string>;
}
export type Scopes = Array<ScopeDetails>;
export type ScopeTarget = string;

export type ScopeTargets = Array<string>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type ServiceQuotaExceededMessage = string;

export interface SignInOptions {
  Origin: SignInOrigin;
  ApplicationUrl?: string;
}
export type SignInOrigin = "IDENTITY_CENTER" | "APPLICATION";
export type StatusValues = "IN_PROGRESS" | "FAILED" | "SUCCEEDED";
export interface Tag {
  Key: string;
  Value: string;
}
export type TaggableResourceArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  InstanceArn?: string;
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TargetId = string;

export type TargetType = "AWS_ACCOUNT";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type ThrottlingExceptionMessage = string;

export type Token = string;

export interface TokenExchangeGrant {}
export type TokenIssuerAudience = string;

export type TokenIssuerAudiences = Array<string>;
export type TrustedTokenIssuerArn = string;

export type TrustedTokenIssuerConfiguration = {
  OidcJwtConfiguration: OidcJwtConfiguration;
};
export type TrustedTokenIssuerList = Array<TrustedTokenIssuerMetadata>;
export interface TrustedTokenIssuerMetadata {
  TrustedTokenIssuerArn?: string;
  Name?: string;
  TrustedTokenIssuerType?: TrustedTokenIssuerType;
}
export type TrustedTokenIssuerName = string;

export type TrustedTokenIssuerType = "OIDC_JWT";
export type TrustedTokenIssuerUpdateConfiguration = {
  OidcJwtConfiguration: OidcJwtUpdateConfiguration;
};
export type TrustedTokenIssuerUrl = string;

export interface UntagResourceRequest {
  InstanceArn?: string;
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationPortalOptions {
  SignInOptions?: SignInOptions;
}
export interface UpdateApplicationRequest {
  ApplicationArn: string;
  Name?: string;
  Description?: string;
  Status?: ApplicationStatus;
  PortalOptions?: UpdateApplicationPortalOptions;
}
export interface UpdateApplicationResponse {}
export interface UpdateInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
  InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}
export interface UpdateInstanceAccessControlAttributeConfigurationResponse {}
export interface UpdateInstanceRequest {
  Name: string;
  InstanceArn: string;
}
export interface UpdateInstanceResponse {}
export interface UpdatePermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  Description?: string;
  SessionDuration?: string;
  RelayState?: string;
}
export interface UpdatePermissionSetResponse {}
export interface UpdateTrustedTokenIssuerRequest {
  TrustedTokenIssuerArn: string;
  Name?: string;
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerUpdateConfiguration;
}
export interface UpdateTrustedTokenIssuerResponse {}
export type URI = string;

export type UUId = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type ValidationExceptionMessage = string;

export declare namespace AttachCustomerManagedPolicyReferenceToPermissionSet {
  export type Input =
    AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
  export type Output =
    AttachCustomerManagedPolicyReferenceToPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AttachManagedPolicyToPermissionSet {
  export type Input = AttachManagedPolicyToPermissionSetRequest;
  export type Output = AttachManagedPolicyToPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAccountAssignment {
  export type Input = CreateAccountAssignmentRequest;
  export type Output = CreateAccountAssignmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplicationAssignment {
  export type Input = CreateApplicationAssignmentRequest;
  export type Output = CreateApplicationAssignmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInstance {
  export type Input = CreateInstanceRequest;
  export type Output = CreateInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInstanceAccessControlAttributeConfiguration {
  export type Input = CreateInstanceAccessControlAttributeConfigurationRequest;
  export type Output =
    CreateInstanceAccessControlAttributeConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePermissionSet {
  export type Input = CreatePermissionSetRequest;
  export type Output = CreatePermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTrustedTokenIssuer {
  export type Input = CreateTrustedTokenIssuerRequest;
  export type Output = CreateTrustedTokenIssuerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAccountAssignment {
  export type Input = DeleteAccountAssignmentRequest;
  export type Output = DeleteAccountAssignmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationAssignment {
  export type Input = DeleteApplicationAssignmentRequest;
  export type Output = DeleteApplicationAssignmentResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInlinePolicyFromPermissionSet {
  export type Input = DeleteInlinePolicyFromPermissionSetRequest;
  export type Output = DeleteInlinePolicyFromPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInstance {
  export type Input = DeleteInstanceRequest;
  export type Output = DeleteInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInstanceAccessControlAttributeConfiguration {
  export type Input = DeleteInstanceAccessControlAttributeConfigurationRequest;
  export type Output =
    DeleteInstanceAccessControlAttributeConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePermissionsBoundaryFromPermissionSet {
  export type Input = DeletePermissionsBoundaryFromPermissionSetRequest;
  export type Output = DeletePermissionsBoundaryFromPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePermissionSet {
  export type Input = DeletePermissionSetRequest;
  export type Output = DeletePermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTrustedTokenIssuer {
  export type Input = DeleteTrustedTokenIssuerRequest;
  export type Output = DeleteTrustedTokenIssuerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountAssignmentCreationStatus {
  export type Input = DescribeAccountAssignmentCreationStatusRequest;
  export type Output = DescribeAccountAssignmentCreationStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeAccountAssignmentDeletionStatus {
  export type Input = DescribeAccountAssignmentDeletionStatusRequest;
  export type Output = DescribeAccountAssignmentDeletionStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApplication {
  export type Input = DescribeApplicationRequest;
  export type Output = DescribeApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApplicationAssignment {
  export type Input = DescribeApplicationAssignmentRequest;
  export type Output = DescribeApplicationAssignmentResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApplicationProvider {
  export type Input = DescribeApplicationProviderRequest;
  export type Output = DescribeApplicationProviderResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInstance {
  export type Input = DescribeInstanceRequest;
  export type Output = DescribeInstanceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeInstanceAccessControlAttributeConfiguration {
  export type Input =
    DescribeInstanceAccessControlAttributeConfigurationRequest;
  export type Output =
    DescribeInstanceAccessControlAttributeConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePermissionSet {
  export type Input = DescribePermissionSetRequest;
  export type Output = DescribePermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePermissionSetProvisioningStatus {
  export type Input = DescribePermissionSetProvisioningStatusRequest;
  export type Output = DescribePermissionSetProvisioningStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTrustedTokenIssuer {
  export type Input = DescribeTrustedTokenIssuerRequest;
  export type Output = DescribeTrustedTokenIssuerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetachCustomerManagedPolicyReferenceFromPermissionSet {
  export type Input =
    DetachCustomerManagedPolicyReferenceFromPermissionSetRequest;
  export type Output =
    DetachCustomerManagedPolicyReferenceFromPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DetachManagedPolicyFromPermissionSet {
  export type Input = DetachManagedPolicyFromPermissionSetRequest;
  export type Output = DetachManagedPolicyFromPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApplicationAssignmentConfiguration {
  export type Input = GetApplicationAssignmentConfigurationRequest;
  export type Output = GetApplicationAssignmentConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInlinePolicyForPermissionSet {
  export type Input = GetInlinePolicyForPermissionSetRequest;
  export type Output = GetInlinePolicyForPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPermissionsBoundaryForPermissionSet {
  export type Input = GetPermissionsBoundaryForPermissionSetRequest;
  export type Output = GetPermissionsBoundaryForPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountAssignmentCreationStatus {
  export type Input = ListAccountAssignmentCreationStatusRequest;
  export type Output = ListAccountAssignmentCreationStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountAssignmentDeletionStatus {
  export type Input = ListAccountAssignmentDeletionStatusRequest;
  export type Output = ListAccountAssignmentDeletionStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountAssignments {
  export type Input = ListAccountAssignmentsRequest;
  export type Output = ListAccountAssignmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountAssignmentsForPrincipal {
  export type Input = ListAccountAssignmentsForPrincipalRequest;
  export type Output = ListAccountAssignmentsForPrincipalResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountsForProvisionedPermissionSet {
  export type Input = ListAccountsForProvisionedPermissionSetRequest;
  export type Output = ListAccountsForProvisionedPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplicationAssignments {
  export type Input = ListApplicationAssignmentsRequest;
  export type Output = ListApplicationAssignmentsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplicationAssignmentsForPrincipal {
  export type Input = ListApplicationAssignmentsForPrincipalRequest;
  export type Output = ListApplicationAssignmentsForPrincipalResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplicationProviders {
  export type Input = ListApplicationProvidersRequest;
  export type Output = ListApplicationProvidersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomerManagedPolicyReferencesInPermissionSet {
  export type Input = ListCustomerManagedPolicyReferencesInPermissionSetRequest;
  export type Output =
    ListCustomerManagedPolicyReferencesInPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInstances {
  export type Input = ListInstancesRequest;
  export type Output = ListInstancesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedPoliciesInPermissionSet {
  export type Input = ListManagedPoliciesInPermissionSetRequest;
  export type Output = ListManagedPoliciesInPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPermissionSetProvisioningStatus {
  export type Input = ListPermissionSetProvisioningStatusRequest;
  export type Output = ListPermissionSetProvisioningStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPermissionSets {
  export type Input = ListPermissionSetsRequest;
  export type Output = ListPermissionSetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPermissionSetsProvisionedToAccount {
  export type Input = ListPermissionSetsProvisionedToAccountRequest;
  export type Output = ListPermissionSetsProvisionedToAccountResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
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

export declare namespace ListTrustedTokenIssuers {
  export type Input = ListTrustedTokenIssuersRequest;
  export type Output = ListTrustedTokenIssuersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ProvisionPermissionSet {
  export type Input = ProvisionPermissionSetRequest;
  export type Output = ProvisionPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutApplicationAssignmentConfiguration {
  export type Input = PutApplicationAssignmentConfigurationRequest;
  export type Output = PutApplicationAssignmentConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutInlinePolicyToPermissionSet {
  export type Input = PutInlinePolicyToPermissionSetRequest;
  export type Output = PutInlinePolicyToPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutPermissionsBoundaryToPermissionSet {
  export type Input = PutPermissionsBoundaryToPermissionSetRequest;
  export type Output = PutPermissionsBoundaryToPermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInstance {
  export type Input = UpdateInstanceRequest;
  export type Output = UpdateInstanceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateInstanceAccessControlAttributeConfiguration {
  export type Input = UpdateInstanceAccessControlAttributeConfigurationRequest;
  export type Output =
    UpdateInstanceAccessControlAttributeConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePermissionSet {
  export type Input = UpdatePermissionSetRequest;
  export type Output = UpdatePermissionSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTrustedTokenIssuer {
  export type Input = UpdateTrustedTokenIssuerRequest;
  export type Output = UpdateTrustedTokenIssuerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
