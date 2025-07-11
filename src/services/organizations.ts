import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSOrganizationsV20161128 {
  acceptHandshake(
    input: AcceptHandshakeRequest,
  ): Effect.Effect<
    AcceptHandshakeResponse,
    | AccessDeniedException
    | AccessDeniedForDependencyException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | HandshakeAlreadyInStateException
    | HandshakeConstraintViolationException
    | HandshakeNotFoundException
    | InvalidHandshakeTransitionException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  attachPolicy(
    input: AttachPolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicatePolicyAttachmentException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyNotFoundException
    | PolicyTypeNotEnabledException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  cancelHandshake(
    input: CancelHandshakeRequest,
  ): Effect.Effect<
    CancelHandshakeResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | HandshakeAlreadyInStateException
    | HandshakeNotFoundException
    | InvalidHandshakeTransitionException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  closeAccount(
    input: CloseAccountRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AccountAlreadyClosedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConflictException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  createAccount(
    input: CreateAccountRequest,
  ): Effect.Effect<
    CreateAccountResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FinalizingOrganizationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  createGovCloudAccount(
    input: CreateGovCloudAccountRequest,
  ): Effect.Effect<
    CreateGovCloudAccountResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FinalizingOrganizationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  createOrganization(
    input: CreateOrganizationRequest,
  ): Effect.Effect<
    CreateOrganizationResponse,
    | AccessDeniedException
    | AccessDeniedForDependencyException
    | AlreadyInOrganizationException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createOrganizationalUnit(
    input: CreateOrganizationalUnitRequest,
  ): Effect.Effect<
    CreateOrganizationalUnitResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicateOrganizationalUnitException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createPolicy(
    input: CreatePolicyRequest,
  ): Effect.Effect<
    CreatePolicyResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicatePolicyException
    | InvalidInputException
    | MalformedPolicyDocumentException
    | PolicyTypeNotAvailableForOrganizationException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  declineHandshake(
    input: DeclineHandshakeRequest,
  ): Effect.Effect<
    DeclineHandshakeResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | HandshakeAlreadyInStateException
    | HandshakeNotFoundException
    | InvalidHandshakeTransitionException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteOrganization(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | OrganizationNotEmptyException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteOrganizationalUnit(
    input: DeleteOrganizationalUnitRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | OrganizationalUnitNotEmptyException
    | OrganizationalUnitNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | PolicyInUseException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  deleteResourcePolicy(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | ResourcePolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  deregisterDelegatedAdministrator(
    input: DeregisterDelegatedAdministratorRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AccountNotFoundException
    | AccountNotRegisteredException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  describeAccount(
    input: DescribeAccountRequest,
  ): Effect.Effect<
    DescribeAccountResponse,
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeCreateAccountStatus(
    input: DescribeCreateAccountStatusRequest,
  ): Effect.Effect<
    DescribeCreateAccountStatusResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | CreateAccountStatusNotFoundException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  describeEffectivePolicy(
    input: DescribeEffectivePolicyRequest,
  ): Effect.Effect<
    DescribeEffectivePolicyResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | EffectivePolicyNotFoundException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  describeHandshake(
    input: DescribeHandshakeRequest,
  ): Effect.Effect<
    DescribeHandshakeResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | HandshakeNotFoundException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeOrganization(input: {}): Effect.Effect<
    DescribeOrganizationResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeOrganizationalUnit(
    input: DescribeOrganizationalUnitRequest,
  ): Effect.Effect<
    DescribeOrganizationalUnitResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | OrganizationalUnitNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describePolicy(
    input: DescribePolicyRequest,
  ): Effect.Effect<
    DescribePolicyResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  describeResourcePolicy(input: {}): Effect.Effect<
    DescribeResourcePolicyResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | ResourcePolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  detachPolicy(
    input: DetachPolicyRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyNotAttachedException
    | PolicyNotFoundException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  disableAWSServiceAccess(
    input: DisableAWSServiceAccessRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  disablePolicyType(
    input: DisablePolicyTypeRequest,
  ): Effect.Effect<
    DisablePolicyTypeResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyTypeNotEnabledException
    | RootNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  enableAllFeatures(
    input: EnableAllFeaturesRequest,
  ): Effect.Effect<
    EnableAllFeaturesResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | HandshakeConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  enableAWSServiceAccess(
    input: EnableAWSServiceAccessRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  enablePolicyType(
    input: EnablePolicyTypeRequest,
  ): Effect.Effect<
    EnablePolicyTypeResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyTypeAlreadyEnabledException
    | PolicyTypeNotAvailableForOrganizationException
    | RootNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  inviteAccountToOrganization(
    input: InviteAccountToOrganizationRequest,
  ): Effect.Effect<
    InviteAccountToOrganizationResponse,
    | AccessDeniedException
    | AccountOwnerNotVerifiedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicateHandshakeException
    | FinalizingOrganizationException
    | HandshakeConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  leaveOrganization(input: {}): Effect.Effect<
    {},
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | MasterCannotLeaveOrganizationException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listAccounts(
    input: ListAccountsRequest,
  ): Effect.Effect<
    ListAccountsResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listAccountsForParent(
    input: ListAccountsForParentRequest,
  ): Effect.Effect<
    ListAccountsForParentResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listAWSServiceAccessForOrganization(
    input: ListAWSServiceAccessForOrganizationRequest,
  ): Effect.Effect<
    ListAWSServiceAccessForOrganizationResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  listChildren(
    input: ListChildrenRequest,
  ): Effect.Effect<
    ListChildrenResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listCreateAccountStatus(
    input: ListCreateAccountStatusRequest,
  ): Effect.Effect<
    ListCreateAccountStatusResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  listDelegatedAdministrators(
    input: ListDelegatedAdministratorsRequest,
  ): Effect.Effect<
    ListDelegatedAdministratorsResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  listDelegatedServicesForAccount(
    input: ListDelegatedServicesForAccountRequest,
  ): Effect.Effect<
    ListDelegatedServicesForAccountResponse,
    | AccessDeniedException
    | AccountNotFoundException
    | AccountNotRegisteredException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  listHandshakesForAccount(
    input: ListHandshakesForAccountRequest,
  ): Effect.Effect<
    ListHandshakesForAccountResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listHandshakesForOrganization(
    input: ListHandshakesForOrganizationRequest,
  ): Effect.Effect<
    ListHandshakesForOrganizationResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listOrganizationalUnitsForParent(
    input: ListOrganizationalUnitsForParentRequest,
  ): Effect.Effect<
    ListOrganizationalUnitsForParentResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listParents(
    input: ListParentsRequest,
  ): Effect.Effect<
    ListParentsResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ChildNotFoundException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listPolicies(
    input: ListPoliciesRequest,
  ): Effect.Effect<
    ListPoliciesResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  listPoliciesForTarget(
    input: ListPoliciesForTargetRequest,
  ): Effect.Effect<
    ListPoliciesForTargetResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  listRoots(
    input: ListRootsRequest,
  ): Effect.Effect<
    ListRootsResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTargetsForPolicy(
    input: ListTargetsForPolicyRequest,
  ): Effect.Effect<
    ListTargetsForPolicyResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  moveAccount(
    input: MoveAccountRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | DestinationParentNotFoundException
    | DuplicateAccountException
    | InvalidInputException
    | ServiceException
    | SourceParentNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  registerDelegatedAdministrator(
    input: RegisterDelegatedAdministratorRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AccountAlreadyRegisteredException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
  removeAccountFromOrganization(
    input: RemoveAccountFromOrganizationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | MasterCannotLeaveOrganizationException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateOrganizationalUnit(
    input: UpdateOrganizationalUnitRequest,
  ): Effect.Effect<
    UpdateOrganizationalUnitResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | DuplicateOrganizationalUnitException
    | InvalidInputException
    | OrganizationalUnitNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updatePolicy(
    input: UpdatePolicyRequest,
  ): Effect.Effect<
    UpdatePolicyResponse,
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicatePolicyException
    | InvalidInputException
    | MalformedPolicyDocumentException
    | PolicyChangesInProgressException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError
  >;
}

export type Organizations = AWSOrganizationsV20161128;

export interface AcceptHandshakeRequest {
  HandshakeId: string;
}
export interface AcceptHandshakeResponse {
  Handshake?: Handshake;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export declare class AccessDeniedForDependencyException extends EffectData.TaggedError(
  "AccessDeniedForDependencyException",
)<{
  readonly Message?: string;
  readonly Reason?: AccessDeniedForDependencyExceptionReason;
}> {}
export type AccessDeniedForDependencyExceptionReason =
  "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE";
export interface Account {
  Id?: string;
  Arn?: string;
  Email?: string;
  Name?: string;
  Status?: AccountStatus;
  JoinedMethod?: AccountJoinedMethod;
  JoinedTimestamp?: Date | string;
}
export declare class AccountAlreadyClosedException extends EffectData.TaggedError(
  "AccountAlreadyClosedException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountAlreadyRegisteredException extends EffectData.TaggedError(
  "AccountAlreadyRegisteredException",
)<{
  readonly Message?: string;
}> {}
export type AccountArn = string;

export type AccountId = string;

export type AccountJoinedMethod = "INVITED" | "CREATED";
export type AccountName = string;

export declare class AccountNotFoundException extends EffectData.TaggedError(
  "AccountNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountNotRegisteredException extends EffectData.TaggedError(
  "AccountNotRegisteredException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountOwnerNotVerifiedException extends EffectData.TaggedError(
  "AccountOwnerNotVerifiedException",
)<{
  readonly Message?: string;
}> {}
export type Accounts = Array<Account>;
export type AccountStatus = "ACTIVE" | "SUSPENDED" | "PENDING_CLOSURE";
export type ActionType =
  | "INVITE_ACCOUNT_TO_ORGANIZATION"
  | "ENABLE_ALL_FEATURES"
  | "APPROVE_ALL_FEATURES"
  | "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE";
export declare class AlreadyInOrganizationException extends EffectData.TaggedError(
  "AlreadyInOrganizationException",
)<{
  readonly Message?: string;
}> {}
export interface AttachPolicyRequest {
  PolicyId: string;
  TargetId: string;
}
export type AwsManagedPolicy = boolean;

export declare class AWSOrganizationsNotInUseException extends EffectData.TaggedError(
  "AWSOrganizationsNotInUseException",
)<{
  readonly Message?: string;
}> {}
export interface CancelHandshakeRequest {
  HandshakeId: string;
}
export interface CancelHandshakeResponse {
  Handshake?: Handshake;
}
export interface Child {
  Id?: string;
  Type?: ChildType;
}
export type ChildId = string;

export declare class ChildNotFoundException extends EffectData.TaggedError(
  "ChildNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Children = Array<Child>;
export type ChildType = "ACCOUNT" | "ORGANIZATIONAL_UNIT";
export interface CloseAccountRequest {
  AccountId: string;
}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export declare class ConstraintViolationException extends EffectData.TaggedError(
  "ConstraintViolationException",
)<{
  readonly Message?: string;
  readonly Reason?: ConstraintViolationExceptionReason;
}> {}
export type ConstraintViolationExceptionReason =
  | "ACCOUNT_NUMBER_LIMIT_EXCEEDED"
  | "HANDSHAKE_RATE_LIMIT_EXCEEDED"
  | "OU_NUMBER_LIMIT_EXCEEDED"
  | "OU_DEPTH_LIMIT_EXCEEDED"
  | "POLICY_NUMBER_LIMIT_EXCEEDED"
  | "POLICY_CONTENT_LIMIT_EXCEEDED"
  | "MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"
  | "MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"
  | "ACCOUNT_CANNOT_LEAVE_ORGANIZATION"
  | "ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA"
  | "ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION"
  | "MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"
  | "MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"
  | "ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED"
  | "MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE"
  | "MASTER_ACCOUNT_MISSING_CONTACT_INFO"
  | "MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED"
  | "ORGANIZATION_NOT_IN_ALL_FEATURES_MODE"
  | "CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION"
  | "EMAIL_VERIFICATION_CODE_EXPIRED"
  | "WAIT_PERIOD_ACTIVE"
  | "MAX_TAG_LIMIT_EXCEEDED"
  | "TAG_POLICY_VIOLATION"
  | "MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED"
  | "CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR"
  | "CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG"
  | "DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE"
  | "POLICY_TYPE_ENABLED_FOR_THIS_SERVICE"
  | "MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE"
  | "CANNOT_CLOSE_MANAGEMENT_ACCOUNT"
  | "CLOSE_ACCOUNT_QUOTA_EXCEEDED"
  | "CLOSE_ACCOUNT_REQUESTS_LIMIT_EXCEEDED"
  | "SERVICE_ACCESS_NOT_ENABLED"
  | "INVALID_PAYMENT_INSTRUMENT"
  | "ACCOUNT_CREATION_NOT_COMPLETE"
  | "CANNOT_REGISTER_SUSPENDED_ACCOUNT_AS_DELEGATED_ADMINISTRATOR"
  | "ALL_FEATURES_MIGRATION_ORGANIZATION_SIZE_LIMIT_EXCEEDED";
export type CreateAccountFailureReason =
  | "ACCOUNT_LIMIT_EXCEEDED"
  | "EMAIL_ALREADY_EXISTS"
  | "INVALID_ADDRESS"
  | "INVALID_EMAIL"
  | "CONCURRENT_ACCOUNT_MODIFICATION"
  | "INTERNAL_FAILURE"
  | "GOVCLOUD_ACCOUNT_ALREADY_EXISTS"
  | "MISSING_BUSINESS_VALIDATION"
  | "FAILED_BUSINESS_VALIDATION"
  | "PENDING_BUSINESS_VALIDATIONv"
  | "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION"
  | "UNKNOWN_BUSINESS_VALIDATION"
  | "MISSING_PAYMENT_INSTRUMENT"
  | "INVALID_PAYMENT_INSTRUMENT"
  | "UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED";
export type CreateAccountName = string;

export interface CreateAccountRequest {
  Email: string;
  AccountName: string;
  RoleName?: string;
  IamUserAccessToBilling?: IAMUserAccessToBilling;
  Tags?: Array<Tag>;
}
export type CreateAccountRequestId = string;

export interface CreateAccountResponse {
  CreateAccountStatus?: CreateAccountStatus;
}
export type CreateAccountState = "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
export type CreateAccountStates = Array<CreateAccountState>;
export interface CreateAccountStatus {
  Id?: string;
  AccountName?: string;
  State?: CreateAccountState;
  RequestedTimestamp?: Date | string;
  CompletedTimestamp?: Date | string;
  AccountId?: string;
  GovCloudAccountId?: string;
  FailureReason?: CreateAccountFailureReason;
}
export type CreateAccountStatuses = Array<CreateAccountStatus>;
export declare class CreateAccountStatusNotFoundException extends EffectData.TaggedError(
  "CreateAccountStatusNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface CreateGovCloudAccountRequest {
  Email: string;
  AccountName: string;
  RoleName?: string;
  IamUserAccessToBilling?: IAMUserAccessToBilling;
  Tags?: Array<Tag>;
}
export interface CreateGovCloudAccountResponse {
  CreateAccountStatus?: CreateAccountStatus;
}
export interface CreateOrganizationalUnitRequest {
  ParentId: string;
  Name: string;
  Tags?: Array<Tag>;
}
export interface CreateOrganizationalUnitResponse {
  OrganizationalUnit?: OrganizationalUnit;
}
export interface CreateOrganizationRequest {
  FeatureSet?: OrganizationFeatureSet;
}
export interface CreateOrganizationResponse {
  Organization?: Organization;
}
export interface CreatePolicyRequest {
  Content: string;
  Description: string;
  Name: string;
  Type: PolicyType;
  Tags?: Array<Tag>;
}
export interface CreatePolicyResponse {
  Policy?: Policy;
}
export interface DeclineHandshakeRequest {
  HandshakeId: string;
}
export interface DeclineHandshakeResponse {
  Handshake?: Handshake;
}
export interface DelegatedAdministrator {
  Id?: string;
  Arn?: string;
  Email?: string;
  Name?: string;
  Status?: AccountStatus;
  JoinedMethod?: AccountJoinedMethod;
  JoinedTimestamp?: Date | string;
  DelegationEnabledDate?: Date | string;
}
export type DelegatedAdministrators = Array<DelegatedAdministrator>;
export interface DelegatedService {
  ServicePrincipal?: string;
  DelegationEnabledDate?: Date | string;
}
export type DelegatedServices = Array<DelegatedService>;
export interface DeleteOrganizationalUnitRequest {
  OrganizationalUnitId: string;
}
export interface DeletePolicyRequest {
  PolicyId: string;
}
export interface DeregisterDelegatedAdministratorRequest {
  AccountId: string;
  ServicePrincipal: string;
}
export interface DescribeAccountRequest {
  AccountId: string;
}
export interface DescribeAccountResponse {
  Account?: Account;
}
export interface DescribeCreateAccountStatusRequest {
  CreateAccountRequestId: string;
}
export interface DescribeCreateAccountStatusResponse {
  CreateAccountStatus?: CreateAccountStatus;
}
export interface DescribeEffectivePolicyRequest {
  PolicyType: EffectivePolicyType;
  TargetId?: string;
}
export interface DescribeEffectivePolicyResponse {
  EffectivePolicy?: EffectivePolicy;
}
export interface DescribeHandshakeRequest {
  HandshakeId: string;
}
export interface DescribeHandshakeResponse {
  Handshake?: Handshake;
}
export interface DescribeOrganizationalUnitRequest {
  OrganizationalUnitId: string;
}
export interface DescribeOrganizationalUnitResponse {
  OrganizationalUnit?: OrganizationalUnit;
}
export interface DescribeOrganizationResponse {
  Organization?: Organization;
}
export interface DescribePolicyRequest {
  PolicyId: string;
}
export interface DescribePolicyResponse {
  Policy?: Policy;
}
export interface DescribeResourcePolicyResponse {
  ResourcePolicy?: ResourcePolicy;
}
export declare class DestinationParentNotFoundException extends EffectData.TaggedError(
  "DestinationParentNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface DetachPolicyRequest {
  PolicyId: string;
  TargetId: string;
}
export interface DisableAWSServiceAccessRequest {
  ServicePrincipal: string;
}
export interface DisablePolicyTypeRequest {
  RootId: string;
  PolicyType: PolicyType;
}
export interface DisablePolicyTypeResponse {
  Root?: Root;
}
export declare class DuplicateAccountException extends EffectData.TaggedError(
  "DuplicateAccountException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateHandshakeException extends EffectData.TaggedError(
  "DuplicateHandshakeException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateOrganizationalUnitException extends EffectData.TaggedError(
  "DuplicateOrganizationalUnitException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicatePolicyAttachmentException extends EffectData.TaggedError(
  "DuplicatePolicyAttachmentException",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicatePolicyException extends EffectData.TaggedError(
  "DuplicatePolicyException",
)<{
  readonly Message?: string;
}> {}
export interface EffectivePolicy {
  PolicyContent?: string;
  LastUpdatedTimestamp?: Date | string;
  TargetId?: string;
  PolicyType?: EffectivePolicyType;
}
export declare class EffectivePolicyNotFoundException extends EffectData.TaggedError(
  "EffectivePolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type EffectivePolicyType =
  | "TAG_POLICY"
  | "BACKUP_POLICY"
  | "AISERVICES_OPT_OUT_POLICY"
  | "CHATBOT_POLICY"
  | "DECLARATIVE_POLICY_EC2"
  | "SECURITYHUB_POLICY";
export type Email = string;

export interface EnableAllFeaturesRequest {}
export interface EnableAllFeaturesResponse {
  Handshake?: Handshake;
}
export interface EnableAWSServiceAccessRequest {
  ServicePrincipal: string;
}
export interface EnabledServicePrincipal {
  ServicePrincipal?: string;
  DateEnabled?: Date | string;
}
export type EnabledServicePrincipals = Array<EnabledServicePrincipal>;
export interface EnablePolicyTypeRequest {
  RootId: string;
  PolicyType: PolicyType;
}
export interface EnablePolicyTypeResponse {
  Root?: Root;
}
export type ExceptionMessage = string;

export type ExceptionType = string;

export declare class FinalizingOrganizationException extends EffectData.TaggedError(
  "FinalizingOrganizationException",
)<{
  readonly Message?: string;
}> {}
export type GenericArn = string;

export interface Handshake {
  Id?: string;
  Arn?: string;
  Parties?: Array<HandshakeParty>;
  State?: HandshakeState;
  RequestedTimestamp?: Date | string;
  ExpirationTimestamp?: Date | string;
  Action?: ActionType;
  Resources?: Array<HandshakeResource>;
}
export declare class HandshakeAlreadyInStateException extends EffectData.TaggedError(
  "HandshakeAlreadyInStateException",
)<{
  readonly Message?: string;
}> {}
export type HandshakeArn = string;

export declare class HandshakeConstraintViolationException extends EffectData.TaggedError(
  "HandshakeConstraintViolationException",
)<{
  readonly Message?: string;
  readonly Reason?: HandshakeConstraintViolationExceptionReason;
}> {}
export type HandshakeConstraintViolationExceptionReason =
  | "ACCOUNT_NUMBER_LIMIT_EXCEEDED"
  | "HANDSHAKE_RATE_LIMIT_EXCEEDED"
  | "ALREADY_IN_AN_ORGANIZATION"
  | "ORGANIZATION_ALREADY_HAS_ALL_FEATURES"
  | "ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION"
  | "INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES"
  | "PAYMENT_INSTRUMENT_REQUIRED"
  | "ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD"
  | "ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED"
  | "MANAGEMENT_ACCOUNT_EMAIL_NOT_VERIFIED";
export interface HandshakeFilter {
  ActionType?: ActionType;
  ParentHandshakeId?: string;
}
export type HandshakeId = string;

export type HandshakeNotes = string;

export declare class HandshakeNotFoundException extends EffectData.TaggedError(
  "HandshakeNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type HandshakeParties = Array<HandshakeParty>;
export interface HandshakeParty {
  Id: string;
  Type: HandshakePartyType;
}
export type HandshakePartyId = string;

export type HandshakePartyType = "ACCOUNT" | "ORGANIZATION" | "EMAIL";
export interface HandshakeResource {
  Value?: string;
  Type?: HandshakeResourceType;
  Resources?: Array<HandshakeResource>;
}
export type HandshakeResources = Array<HandshakeResource>;
export type HandshakeResourceType =
  | "ACCOUNT"
  | "ORGANIZATION"
  | "ORGANIZATION_FEATURE_SET"
  | "EMAIL"
  | "MASTER_EMAIL"
  | "MASTER_NAME"
  | "NOTES"
  | "PARENT_HANDSHAKE";
export type HandshakeResourceValue = string;

export type Handshakes = Array<Handshake>;
export type HandshakeState =
  | "REQUESTED"
  | "OPEN"
  | "CANCELED"
  | "ACCEPTED"
  | "DECLINED"
  | "EXPIRED";
export type IAMUserAccessToBilling = "ALLOW" | "DENY";
export declare class InvalidHandshakeTransitionException extends EffectData.TaggedError(
  "InvalidHandshakeTransitionException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
  readonly Reason?: InvalidInputExceptionReason;
}> {}
export type InvalidInputExceptionReason =
  | "INVALID_PARTY_TYPE_TARGET"
  | "INVALID_SYNTAX_ORGANIZATION"
  | "INVALID_SYNTAX_POLICY"
  | "INVALID_ENUM"
  | "INVALID_ENUM_POLICY_TYPE"
  | "INVALID_LIST_MEMBER"
  | "MAX_LENGTH_EXCEEDED"
  | "MAX_VALUE_EXCEEDED"
  | "MIN_LENGTH_EXCEEDED"
  | "MIN_VALUE_EXCEEDED"
  | "IMMUTABLE_POLICY"
  | "INVALID_PATTERN"
  | "INVALID_PATTERN_TARGET_ID"
  | "INPUT_REQUIRED"
  | "INVALID_PAGINATION_TOKEN"
  | "MAX_FILTER_LIMIT_EXCEEDED"
  | "MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS"
  | "INVALID_FULL_NAME_TARGET"
  | "UNRECOGNIZED_SERVICE_PRINCIPAL"
  | "INVALID_ROLE_NAME"
  | "INVALID_SYSTEM_TAGS_PARAMETER"
  | "DUPLICATE_TAG_KEY"
  | "TARGET_NOT_SUPPORTED"
  | "INVALID_EMAIL_ADDRESS_TARGET"
  | "INVALID_RESOURCE_POLICY_JSON"
  | "INVALID_PRINCIPAL"
  | "UNSUPPORTED_ACTION_IN_RESOURCE_POLICY"
  | "UNSUPPORTED_POLICY_TYPE_IN_RESOURCE_POLICY"
  | "UNSUPPORTED_RESOURCE_IN_RESOURCE_POLICY"
  | "NON_DETACHABLE_POLICY";
export interface InviteAccountToOrganizationRequest {
  Target: HandshakeParty;
  Notes?: string;
  Tags?: Array<Tag>;
}
export interface InviteAccountToOrganizationResponse {
  Handshake?: Handshake;
}
export interface ListAccountsForParentRequest {
  ParentId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccountsForParentResponse {
  Accounts?: Array<Account>;
  NextToken?: string;
}
export interface ListAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccountsResponse {
  Accounts?: Array<Account>;
  NextToken?: string;
}
export interface ListAWSServiceAccessForOrganizationRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAWSServiceAccessForOrganizationResponse {
  EnabledServicePrincipals?: Array<EnabledServicePrincipal>;
  NextToken?: string;
}
export interface ListChildrenRequest {
  ParentId: string;
  ChildType: ChildType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListChildrenResponse {
  Children?: Array<Child>;
  NextToken?: string;
}
export interface ListCreateAccountStatusRequest {
  States?: Array<CreateAccountState>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCreateAccountStatusResponse {
  CreateAccountStatuses?: Array<CreateAccountStatus>;
  NextToken?: string;
}
export interface ListDelegatedAdministratorsRequest {
  ServicePrincipal?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDelegatedAdministratorsResponse {
  DelegatedAdministrators?: Array<DelegatedAdministrator>;
  NextToken?: string;
}
export interface ListDelegatedServicesForAccountRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDelegatedServicesForAccountResponse {
  DelegatedServices?: Array<DelegatedService>;
  NextToken?: string;
}
export interface ListHandshakesForAccountRequest {
  Filter?: HandshakeFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHandshakesForAccountResponse {
  Handshakes?: Array<Handshake>;
  NextToken?: string;
}
export interface ListHandshakesForOrganizationRequest {
  Filter?: HandshakeFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHandshakesForOrganizationResponse {
  Handshakes?: Array<Handshake>;
  NextToken?: string;
}
export interface ListOrganizationalUnitsForParentRequest {
  ParentId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOrganizationalUnitsForParentResponse {
  OrganizationalUnits?: Array<OrganizationalUnit>;
  NextToken?: string;
}
export interface ListParentsRequest {
  ChildId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListParentsResponse {
  Parents?: Array<Parent>;
  NextToken?: string;
}
export interface ListPoliciesForTargetRequest {
  TargetId: string;
  Filter: PolicyType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPoliciesForTargetResponse {
  Policies?: Array<PolicySummary>;
  NextToken?: string;
}
export interface ListPoliciesRequest {
  Filter: PolicyType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPoliciesResponse {
  Policies?: Array<PolicySummary>;
  NextToken?: string;
}
export interface ListRootsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRootsResponse {
  Roots?: Array<Root>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceId: string;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface ListTargetsForPolicyRequest {
  PolicyId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTargetsForPolicyResponse {
  Targets?: Array<PolicyTargetSummary>;
  NextToken?: string;
}
export declare class MalformedPolicyDocumentException extends EffectData.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly Message?: string;
}> {}
export declare class MasterCannotLeaveOrganizationException extends EffectData.TaggedError(
  "MasterCannotLeaveOrganizationException",
)<{
  readonly Message?: string;
}> {}
export type MaxResults = number;

export interface MoveAccountRequest {
  AccountId: string;
  SourceParentId: string;
  DestinationParentId: string;
}
export type NextToken = string;

export interface Organization {
  Id?: string;
  Arn?: string;
  FeatureSet?: OrganizationFeatureSet;
  MasterAccountArn?: string;
  MasterAccountId?: string;
  MasterAccountEmail?: string;
  AvailablePolicyTypes?: Array<PolicyTypeSummary>;
}
export interface OrganizationalUnit {
  Id?: string;
  Arn?: string;
  Name?: string;
}
export type OrganizationalUnitArn = string;

export type OrganizationalUnitId = string;

export type OrganizationalUnitName = string;

export declare class OrganizationalUnitNotEmptyException extends EffectData.TaggedError(
  "OrganizationalUnitNotEmptyException",
)<{
  readonly Message?: string;
}> {}
export declare class OrganizationalUnitNotFoundException extends EffectData.TaggedError(
  "OrganizationalUnitNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type OrganizationalUnits = Array<OrganizationalUnit>;
export type OrganizationArn = string;

export type OrganizationFeatureSet = "ALL" | "CONSOLIDATED_BILLING";
export type OrganizationId = string;

export declare class OrganizationNotEmptyException extends EffectData.TaggedError(
  "OrganizationNotEmptyException",
)<{
  readonly Message?: string;
}> {}
export interface Parent {
  Id?: string;
  Type?: ParentType;
}
export type ParentId = string;

export declare class ParentNotFoundException extends EffectData.TaggedError(
  "ParentNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Parents = Array<Parent>;
export type ParentType = "ROOT" | "ORGANIZATIONAL_UNIT";
export type Policies = Array<PolicySummary>;
export interface Policy {
  PolicySummary?: PolicySummary;
  Content?: string;
}
export type PolicyArn = string;

export declare class PolicyChangesInProgressException extends EffectData.TaggedError(
  "PolicyChangesInProgressException",
)<{
  readonly Message?: string;
}> {}
export type PolicyContent = string;

export type PolicyDescription = string;

export type PolicyId = string;

export declare class PolicyInUseException extends EffectData.TaggedError(
  "PolicyInUseException",
)<{
  readonly Message?: string;
}> {}
export type PolicyName = string;

export declare class PolicyNotAttachedException extends EffectData.TaggedError(
  "PolicyNotAttachedException",
)<{
  readonly Message?: string;
}> {}
export declare class PolicyNotFoundException extends EffectData.TaggedError(
  "PolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface PolicySummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Type?: PolicyType;
  AwsManaged?: boolean;
}
export type PolicyTargetId = string;

export type PolicyTargets = Array<PolicyTargetSummary>;
export interface PolicyTargetSummary {
  TargetId?: string;
  Arn?: string;
  Name?: string;
  Type?: TargetType;
}
export type PolicyType =
  | "SERVICE_CONTROL_POLICY"
  | "RESOURCE_CONTROL_POLICY"
  | "TAG_POLICY"
  | "BACKUP_POLICY"
  | "AISERVICES_OPT_OUT_POLICY"
  | "CHATBOT_POLICY"
  | "DECLARATIVE_POLICY_EC2"
  | "SECURITYHUB_POLICY";
export declare class PolicyTypeAlreadyEnabledException extends EffectData.TaggedError(
  "PolicyTypeAlreadyEnabledException",
)<{
  readonly Message?: string;
}> {}
export declare class PolicyTypeNotAvailableForOrganizationException extends EffectData.TaggedError(
  "PolicyTypeNotAvailableForOrganizationException",
)<{
  readonly Message?: string;
}> {}
export declare class PolicyTypeNotEnabledException extends EffectData.TaggedError(
  "PolicyTypeNotEnabledException",
)<{
  readonly Message?: string;
}> {}
export type PolicyTypes = Array<PolicyTypeSummary>;
export type PolicyTypeStatus = "ENABLED" | "PENDING_ENABLE" | "PENDING_DISABLE";
export interface PolicyTypeSummary {
  Type?: PolicyType;
  Status?: PolicyTypeStatus;
}
export interface PutResourcePolicyRequest {
  Content: string;
  Tags?: Array<Tag>;
}
export interface PutResourcePolicyResponse {
  ResourcePolicy?: ResourcePolicy;
}
export interface RegisterDelegatedAdministratorRequest {
  AccountId: string;
  ServicePrincipal: string;
}
export interface RemoveAccountFromOrganizationRequest {
  AccountId: string;
}
export interface ResourcePolicy {
  ResourcePolicySummary?: ResourcePolicySummary;
  Content?: string;
}
export type ResourcePolicyArn = string;

export type ResourcePolicyContent = string;

export type ResourcePolicyId = string;

export declare class ResourcePolicyNotFoundException extends EffectData.TaggedError(
  "ResourcePolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResourcePolicySummary {
  Id?: string;
  Arn?: string;
}
export type RoleName = string;

export interface Root {
  Id?: string;
  Arn?: string;
  Name?: string;
  PolicyTypes?: Array<PolicyTypeSummary>;
}
export type RootArn = string;

export type RootId = string;

export type RootName = string;

export declare class RootNotFoundException extends EffectData.TaggedError(
  "RootNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Roots = Array<Root>;
export declare class ServiceException extends EffectData.TaggedError(
  "ServiceException",
)<{
  readonly Message?: string;
}> {}
export type ServicePrincipal = string;

export declare class SourceParentNotFoundException extends EffectData.TaggedError(
  "SourceParentNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface Tag {
  Key: string;
  Value: string;
}
export type TaggableResourceId = string;

export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceId: string;
  Tags: Array<Tag>;
}
export type Tags = Array<Tag>;
export type TagValue = string;

export type TargetName = string;

export declare class TargetNotFoundException extends EffectData.TaggedError(
  "TargetNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type TargetType = "ACCOUNT" | "ORGANIZATIONAL_UNIT" | "ROOT";
export type Timestamp = Date | string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Type?: string;
  readonly Message?: string;
}> {}
export declare class UnsupportedAPIEndpointException extends EffectData.TaggedError(
  "UnsupportedAPIEndpointException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceId: string;
  TagKeys: Array<string>;
}
export interface UpdateOrganizationalUnitRequest {
  OrganizationalUnitId: string;
  Name?: string;
}
export interface UpdateOrganizationalUnitResponse {
  OrganizationalUnit?: OrganizationalUnit;
}
export interface UpdatePolicyRequest {
  PolicyId: string;
  Name?: string;
  Description?: string;
  Content?: string;
}
export interface UpdatePolicyResponse {
  Policy?: Policy;
}
export declare namespace AcceptHandshake {
  export type Input = AcceptHandshakeRequest;
  export type Output = AcceptHandshakeResponse;
  export type Error =
    | AccessDeniedException
    | AccessDeniedForDependencyException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | HandshakeAlreadyInStateException
    | HandshakeConstraintViolationException
    | HandshakeNotFoundException
    | InvalidHandshakeTransitionException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace AttachPolicy {
  export type Input = AttachPolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicatePolicyAttachmentException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyNotFoundException
    | PolicyTypeNotEnabledException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace CancelHandshake {
  export type Input = CancelHandshakeRequest;
  export type Output = CancelHandshakeResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | HandshakeAlreadyInStateException
    | HandshakeNotFoundException
    | InvalidHandshakeTransitionException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CloseAccount {
  export type Input = CloseAccountRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AccountAlreadyClosedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConflictException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace CreateAccount {
  export type Input = CreateAccountRequest;
  export type Output = CreateAccountResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FinalizingOrganizationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace CreateGovCloudAccount {
  export type Input = CreateGovCloudAccountRequest;
  export type Output = CreateGovCloudAccountResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | FinalizingOrganizationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace CreateOrganization {
  export type Input = CreateOrganizationRequest;
  export type Output = CreateOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | AccessDeniedForDependencyException
    | AlreadyInOrganizationException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateOrganizationalUnit {
  export type Input = CreateOrganizationalUnitRequest;
  export type Output = CreateOrganizationalUnitResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicateOrganizationalUnitException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreatePolicy {
  export type Input = CreatePolicyRequest;
  export type Output = CreatePolicyResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicatePolicyException
    | InvalidInputException
    | MalformedPolicyDocumentException
    | PolicyTypeNotAvailableForOrganizationException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DeclineHandshake {
  export type Input = DeclineHandshakeRequest;
  export type Output = DeclineHandshakeResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | HandshakeAlreadyInStateException
    | HandshakeNotFoundException
    | InvalidHandshakeTransitionException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteOrganization {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | OrganizationNotEmptyException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteOrganizationalUnit {
  export type Input = DeleteOrganizationalUnitRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | OrganizationalUnitNotEmptyException
    | OrganizationalUnitNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | PolicyInUseException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | ResourcePolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DeregisterDelegatedAdministrator {
  export type Input = DeregisterDelegatedAdministratorRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AccountNotFoundException
    | AccountNotRegisteredException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DescribeAccount {
  export type Input = DescribeAccountRequest;
  export type Output = DescribeAccountResponse;
  export type Error =
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeCreateAccountStatus {
  export type Input = DescribeCreateAccountStatusRequest;
  export type Output = DescribeCreateAccountStatusResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | CreateAccountStatusNotFoundException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DescribeEffectivePolicy {
  export type Input = DescribeEffectivePolicyRequest;
  export type Output = DescribeEffectivePolicyResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | EffectivePolicyNotFoundException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DescribeHandshake {
  export type Input = DescribeHandshakeRequest;
  export type Output = DescribeHandshakeResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | HandshakeNotFoundException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeOrganization {
  export type Input = {};
  export type Output = DescribeOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationalUnit {
  export type Input = DescribeOrganizationalUnitRequest;
  export type Output = DescribeOrganizationalUnitResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | OrganizationalUnitNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribePolicy {
  export type Input = DescribePolicyRequest;
  export type Output = DescribePolicyResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DescribeResourcePolicy {
  export type Input = {};
  export type Output = DescribeResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | ResourcePolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DetachPolicy {
  export type Input = DetachPolicyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyNotAttachedException
    | PolicyNotFoundException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DisableAWSServiceAccess {
  export type Input = DisableAWSServiceAccessRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace DisablePolicyType {
  export type Input = DisablePolicyTypeRequest;
  export type Output = DisablePolicyTypeResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyTypeNotEnabledException
    | RootNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace EnableAllFeatures {
  export type Input = EnableAllFeaturesRequest;
  export type Output = EnableAllFeaturesResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | HandshakeConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace EnableAWSServiceAccess {
  export type Input = EnableAWSServiceAccessRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace EnablePolicyType {
  export type Input = EnablePolicyTypeRequest;
  export type Output = EnablePolicyTypeResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | PolicyChangesInProgressException
    | PolicyTypeAlreadyEnabledException
    | PolicyTypeNotAvailableForOrganizationException
    | RootNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace InviteAccountToOrganization {
  export type Input = InviteAccountToOrganizationRequest;
  export type Output = InviteAccountToOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | AccountOwnerNotVerifiedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicateHandshakeException
    | FinalizingOrganizationException
    | HandshakeConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace LeaveOrganization {
  export type Input = {};
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | MasterCannotLeaveOrganizationException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListAccounts {
  export type Input = ListAccountsRequest;
  export type Output = ListAccountsResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListAccountsForParent {
  export type Input = ListAccountsForParentRequest;
  export type Output = ListAccountsForParentResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListAWSServiceAccessForOrganization {
  export type Input = ListAWSServiceAccessForOrganizationRequest;
  export type Output = ListAWSServiceAccessForOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace ListChildren {
  export type Input = ListChildrenRequest;
  export type Output = ListChildrenResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListCreateAccountStatus {
  export type Input = ListCreateAccountStatusRequest;
  export type Output = ListCreateAccountStatusResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace ListDelegatedAdministrators {
  export type Input = ListDelegatedAdministratorsRequest;
  export type Output = ListDelegatedAdministratorsResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace ListDelegatedServicesForAccount {
  export type Input = ListDelegatedServicesForAccountRequest;
  export type Output = ListDelegatedServicesForAccountResponse;
  export type Error =
    | AccessDeniedException
    | AccountNotFoundException
    | AccountNotRegisteredException
    | AWSOrganizationsNotInUseException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace ListHandshakesForAccount {
  export type Input = ListHandshakesForAccountRequest;
  export type Output = ListHandshakesForAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListHandshakesForOrganization {
  export type Input = ListHandshakesForOrganizationRequest;
  export type Output = ListHandshakesForOrganizationResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListOrganizationalUnitsForParent {
  export type Input = ListOrganizationalUnitsForParentRequest;
  export type Output = ListOrganizationalUnitsForParentResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ParentNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListParents {
  export type Input = ListParentsRequest;
  export type Output = ListParentsResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ChildNotFoundException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListPolicies {
  export type Input = ListPoliciesRequest;
  export type Output = ListPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace ListPoliciesForTarget {
  export type Input = ListPoliciesForTargetRequest;
  export type Output = ListPoliciesForTargetResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace ListRoots {
  export type Input = ListRootsRequest;
  export type Output = ListRootsResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTargetsForPolicy {
  export type Input = ListTargetsForPolicyRequest;
  export type Output = ListTargetsForPolicyResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | InvalidInputException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace MoveAccount {
  export type Input = MoveAccountRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | DestinationParentNotFoundException
    | DuplicateAccountException
    | InvalidInputException
    | ServiceException
    | SourceParentNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace RegisterDelegatedAdministrator {
  export type Input = RegisterDelegatedAdministratorRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AccountAlreadyRegisteredException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}

export declare namespace RemoveAccountFromOrganization {
  export type Input = RemoveAccountFromOrganizationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AccountNotFoundException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | MasterCannotLeaveOrganizationException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | InvalidInputException
    | ServiceException
    | TargetNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationalUnit {
  export type Input = UpdateOrganizationalUnitRequest;
  export type Output = UpdateOrganizationalUnitResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | DuplicateOrganizationalUnitException
    | InvalidInputException
    | OrganizationalUnitNotFoundException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdatePolicy {
  export type Input = UpdatePolicyRequest;
  export type Output = UpdatePolicyResponse;
  export type Error =
    | AccessDeniedException
    | AWSOrganizationsNotInUseException
    | ConcurrentModificationException
    | ConstraintViolationException
    | DuplicatePolicyException
    | InvalidInputException
    | MalformedPolicyDocumentException
    | PolicyChangesInProgressException
    | PolicyNotFoundException
    | ServiceException
    | TooManyRequestsException
    | UnsupportedAPIEndpointException
    | CommonAwsError;
}
