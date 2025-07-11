import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonResourceSharing {
  acceptResourceShareInvitation(
    input: AcceptResourceShareInvitationRequest,
  ): Effect.Effect<
    AcceptResourceShareInvitationResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareInvitationAlreadyAcceptedException
    | ResourceShareInvitationAlreadyRejectedException
    | ResourceShareInvitationArnNotFoundException
    | ResourceShareInvitationExpiredException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  associateResourceShare(
    input: AssociateResourceShareRequest,
  ): Effect.Effect<
    AssociateResourceShareResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | ThrottlingException
    | UnknownResourceException
    | CommonAwsError
  >;
  associateResourceSharePermission(
    input: AssociateResourceSharePermissionRequest,
  ): Effect.Effect<
    AssociateResourceSharePermissionResponse,
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  createPermission(
    input: CreatePermissionRequest,
  ): Effect.Effect<
    CreatePermissionResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidPolicyException
    | MalformedPolicyTemplateException
    | OperationNotPermittedException
    | PermissionAlreadyExistsException
    | PermissionLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createPermissionVersion(
    input: CreatePermissionVersionRequest,
  ): Effect.Effect<
    CreatePermissionVersionResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidPolicyException
    | MalformedArnException
    | MalformedPolicyTemplateException
    | PermissionVersionsLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  createResourceShare(
    input: CreateResourceShareRequest,
  ): Effect.Effect<
    CreateResourceShareResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | TagLimitExceededException
    | TagPolicyViolationException
    | UnknownResourceException
    | CommonAwsError
  >;
  deletePermission(
    input: DeletePermissionRequest,
  ): Effect.Effect<
    DeletePermissionResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  deletePermissionVersion(
    input: DeletePermissionVersionRequest,
  ): Effect.Effect<
    DeletePermissionVersionResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  deleteResourceShare(
    input: DeleteResourceShareRequest,
  ): Effect.Effect<
    DeleteResourceShareResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  disassociateResourceShare(
    input: DisassociateResourceShareRequest,
  ): Effect.Effect<
    DisassociateResourceShareResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  disassociateResourceSharePermission(
    input: DisassociateResourceSharePermissionRequest,
  ): Effect.Effect<
    DisassociateResourceSharePermissionResponse,
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  enableSharingWithAwsOrganization(
    input: EnableSharingWithAwsOrganizationRequest,
  ): Effect.Effect<
    EnableSharingWithAwsOrganizationResponse,
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getPermission(
    input: GetPermissionRequest,
  ): Effect.Effect<
    GetPermissionResponse,
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  getResourcePolicies(
    input: GetResourcePoliciesRequest,
  ): Effect.Effect<
    GetResourcePoliciesResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ResourceArnNotFoundException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getResourceShareAssociations(
    input: GetResourceShareAssociationsRequest,
  ): Effect.Effect<
    GetResourceShareAssociationsResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  getResourceShareInvitations(
    input: GetResourceShareInvitationsRequest,
  ): Effect.Effect<
    GetResourceShareInvitationsResponse,
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ResourceShareInvitationArnNotFoundException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  getResourceShares(
    input: GetResourceSharesRequest,
  ): Effect.Effect<
    GetResourceSharesResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  listPendingInvitationResources(
    input: ListPendingInvitationResourcesRequest,
  ): Effect.Effect<
    ListPendingInvitationResourcesResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | MissingRequiredParameterException
    | ResourceShareInvitationAlreadyRejectedException
    | ResourceShareInvitationArnNotFoundException
    | ResourceShareInvitationExpiredException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listPermissionAssociations(
    input: ListPermissionAssociationsRequest,
  ): Effect.Effect<
    ListPermissionAssociationsResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listPermissions(
    input: ListPermissionsRequest,
  ): Effect.Effect<
    ListPermissionsResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listPermissionVersions(
    input: ListPermissionVersionsRequest,
  ): Effect.Effect<
    ListPermissionVersionsResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  listPrincipals(
    input: ListPrincipalsRequest,
  ): Effect.Effect<
    ListPrincipalsResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  listReplacePermissionAssociationsWork(
    input: ListReplacePermissionAssociationsWorkRequest,
  ): Effect.Effect<
    ListReplacePermissionAssociationsWorkResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listResources(
    input: ListResourcesRequest,
  ): Effect.Effect<
    ListResourcesResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidResourceTypeException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  listResourceSharePermissions(
    input: ListResourceSharePermissionsRequest,
  ): Effect.Effect<
    ListResourceSharePermissionsResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  listResourceTypes(
    input: ListResourceTypesRequest,
  ): Effect.Effect<
    ListResourceTypesResponse,
    | InvalidNextTokenException
    | InvalidParameterException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  promotePermissionCreatedFromPolicy(
    input: PromotePermissionCreatedFromPolicyRequest,
  ): Effect.Effect<
    PromotePermissionCreatedFromPolicyResponse,
    | InvalidParameterException
    | MalformedArnException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  promoteResourceShareCreatedFromPolicy(
    input: PromoteResourceShareCreatedFromPolicyRequest,
  ): Effect.Effect<
    PromoteResourceShareCreatedFromPolicyResponse,
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | UnmatchedPolicyPermissionException
    | CommonAwsError
  >;
  rejectResourceShareInvitation(
    input: RejectResourceShareInvitationRequest,
  ): Effect.Effect<
    RejectResourceShareInvitationResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareInvitationAlreadyAcceptedException
    | ResourceShareInvitationAlreadyRejectedException
    | ResourceShareInvitationArnNotFoundException
    | ResourceShareInvitationExpiredException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  replacePermissionAssociations(
    input: ReplacePermissionAssociationsRequest,
  ): Effect.Effect<
    ReplacePermissionAssociationsResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  setDefaultPermissionVersion(
    input: SetDefaultPermissionVersionRequest,
  ): Effect.Effect<
    SetDefaultPermissionVersionResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidParameterException
    | MalformedArnException
    | ResourceArnNotFoundException
    | ServerInternalException
    | ServiceUnavailableException
    | TagLimitExceededException
    | TagPolicyViolationException
    | UnknownResourceException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
  updateResourceShare(
    input: UpdateResourceShareRequest,
  ): Effect.Effect<
    UpdateResourceShareResponse,
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError
  >;
}

export type Ram = AmazonResourceSharing;

export interface AcceptResourceShareInvitationRequest {
  resourceShareInvitationArn: string;
  clientToken?: string;
}
export interface AcceptResourceShareInvitationResponse {
  resourceShareInvitation?: ResourceShareInvitation;
  clientToken?: string;
}
export interface AssociatedPermission {
  arn?: string;
  permissionVersion?: string;
  defaultVersion?: boolean;
  resourceType?: string;
  status?: string;
  featureSet?: PermissionFeatureSet;
  lastUpdatedTime?: Date | string;
  resourceShareArn?: string;
}
export type AssociatedPermissionList = Array<AssociatedPermission>;
export interface AssociateResourceSharePermissionRequest {
  resourceShareArn: string;
  permissionArn: string;
  replace?: boolean;
  clientToken?: string;
  permissionVersion?: number;
}
export interface AssociateResourceSharePermissionResponse {
  returnValue?: boolean;
  clientToken?: string;
}
export interface AssociateResourceShareRequest {
  resourceShareArn: string;
  resourceArns?: Array<string>;
  principals?: Array<string>;
  clientToken?: string;
  sources?: Array<string>;
}
export interface AssociateResourceShareResponse {
  resourceShareAssociations?: Array<ResourceShareAssociation>;
  clientToken?: string;
}
export interface CreatePermissionRequest {
  name: string;
  resourceType: string;
  policyTemplate: string;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreatePermissionResponse {
  permission?: ResourceSharePermissionSummary;
  clientToken?: string;
}
export interface CreatePermissionVersionRequest {
  permissionArn: string;
  policyTemplate: string;
  clientToken?: string;
}
export interface CreatePermissionVersionResponse {
  permission?: ResourceSharePermissionDetail;
  clientToken?: string;
}
export interface CreateResourceShareRequest {
  name: string;
  resourceArns?: Array<string>;
  principals?: Array<string>;
  tags?: Array<Tag>;
  allowExternalPrincipals?: boolean;
  clientToken?: string;
  permissionArns?: Array<string>;
  sources?: Array<string>;
}
export interface CreateResourceShareResponse {
  resourceShare?: ResourceShare;
  clientToken?: string;
}
export type DateTime = Date | string;

export interface DeletePermissionRequest {
  permissionArn: string;
  clientToken?: string;
}
export interface DeletePermissionResponse {
  returnValue?: boolean;
  clientToken?: string;
  permissionStatus?: PermissionStatus;
}
export interface DeletePermissionVersionRequest {
  permissionArn: string;
  permissionVersion: number;
  clientToken?: string;
}
export interface DeletePermissionVersionResponse {
  returnValue?: boolean;
  clientToken?: string;
  permissionStatus?: PermissionStatus;
}
export interface DeleteResourceShareRequest {
  resourceShareArn: string;
  clientToken?: string;
}
export interface DeleteResourceShareResponse {
  returnValue?: boolean;
  clientToken?: string;
}
export interface DisassociateResourceSharePermissionRequest {
  resourceShareArn: string;
  permissionArn: string;
  clientToken?: string;
}
export interface DisassociateResourceSharePermissionResponse {
  returnValue?: boolean;
  clientToken?: string;
}
export interface DisassociateResourceShareRequest {
  resourceShareArn: string;
  resourceArns?: Array<string>;
  principals?: Array<string>;
  clientToken?: string;
  sources?: Array<string>;
}
export interface DisassociateResourceShareResponse {
  resourceShareAssociations?: Array<ResourceShareAssociation>;
  clientToken?: string;
}
export interface EnableSharingWithAwsOrganizationRequest {}
export interface EnableSharingWithAwsOrganizationResponse {
  returnValue?: boolean;
}
export interface GetPermissionRequest {
  permissionArn: string;
  permissionVersion?: number;
}
export interface GetPermissionResponse {
  permission?: ResourceSharePermissionDetail;
}
export interface GetResourcePoliciesRequest {
  resourceArns: Array<string>;
  principal?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetResourcePoliciesResponse {
  policies?: Array<string>;
  nextToken?: string;
}
export interface GetResourceShareAssociationsRequest {
  associationType: ResourceShareAssociationType;
  resourceShareArns?: Array<string>;
  resourceArn?: string;
  principal?: string;
  associationStatus?: ResourceShareAssociationStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface GetResourceShareAssociationsResponse {
  resourceShareAssociations?: Array<ResourceShareAssociation>;
  nextToken?: string;
}
export interface GetResourceShareInvitationsRequest {
  resourceShareInvitationArns?: Array<string>;
  resourceShareArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface GetResourceShareInvitationsResponse {
  resourceShareInvitations?: Array<ResourceShareInvitation>;
  nextToken?: string;
}
export interface GetResourceSharesRequest {
  resourceShareArns?: Array<string>;
  resourceShareStatus?: ResourceShareStatus;
  resourceOwner: ResourceOwner;
  name?: string;
  tagFilters?: Array<TagFilter>;
  nextToken?: string;
  maxResults?: number;
  permissionArn?: string;
  permissionVersion?: number;
}
export interface GetResourceSharesResponse {
  resourceShares?: Array<ResourceShare>;
  nextToken?: string;
}
export declare class IdempotentParameterMismatchException extends EffectData.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly message: string;
}> {}
export type Integer = number;

export declare class InvalidClientTokenException extends EffectData.TaggedError(
  "InvalidClientTokenException",
)<{
  readonly message: string;
}> {}
export declare class InvalidMaxResultsException extends EffectData.TaggedError(
  "InvalidMaxResultsException",
)<{
  readonly message: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message: string;
}> {}
export declare class InvalidPolicyException extends EffectData.TaggedError(
  "InvalidPolicyException",
)<{
  readonly message: string;
}> {}
export declare class InvalidResourceTypeException extends EffectData.TaggedError(
  "InvalidResourceTypeException",
)<{
  readonly message: string;
}> {}
export declare class InvalidStateTransitionException extends EffectData.TaggedError(
  "InvalidStateTransitionException",
)<{
  readonly message: string;
}> {}
export interface ListPendingInvitationResourcesRequest {
  resourceShareInvitationArn: string;
  nextToken?: string;
  maxResults?: number;
  resourceRegionScope?: ResourceRegionScopeFilter;
}
export interface ListPendingInvitationResourcesResponse {
  resources?: Array<Resource>;
  nextToken?: string;
}
export interface ListPermissionAssociationsRequest {
  permissionArn?: string;
  permissionVersion?: number;
  associationStatus?: ResourceShareAssociationStatus;
  resourceType?: string;
  featureSet?: PermissionFeatureSet;
  defaultVersion?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPermissionAssociationsResponse {
  permissions?: Array<AssociatedPermission>;
  nextToken?: string;
}
export interface ListPermissionsRequest {
  resourceType?: string;
  nextToken?: string;
  maxResults?: number;
  permissionType?: PermissionTypeFilter;
}
export interface ListPermissionsResponse {
  permissions?: Array<ResourceSharePermissionSummary>;
  nextToken?: string;
}
export interface ListPermissionVersionsRequest {
  permissionArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPermissionVersionsResponse {
  permissions?: Array<ResourceSharePermissionSummary>;
  nextToken?: string;
}
export interface ListPrincipalsRequest {
  resourceOwner: ResourceOwner;
  resourceArn?: string;
  principals?: Array<string>;
  resourceType?: string;
  resourceShareArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPrincipalsResponse {
  principals?: Array<Principal>;
  nextToken?: string;
}
export interface ListReplacePermissionAssociationsWorkRequest {
  workIds?: Array<string>;
  status?: ReplacePermissionAssociationsWorkStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListReplacePermissionAssociationsWorkResponse {
  replacePermissionAssociationsWorks?: Array<ReplacePermissionAssociationsWork>;
  nextToken?: string;
}
export interface ListResourceSharePermissionsRequest {
  resourceShareArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListResourceSharePermissionsResponse {
  permissions?: Array<ResourceSharePermissionSummary>;
  nextToken?: string;
}
export interface ListResourcesRequest {
  resourceOwner: ResourceOwner;
  principal?: string;
  resourceType?: string;
  resourceArns?: Array<string>;
  resourceShareArns?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  resourceRegionScope?: ResourceRegionScopeFilter;
}
export interface ListResourcesResponse {
  resources?: Array<Resource>;
  nextToken?: string;
}
export interface ListResourceTypesRequest {
  nextToken?: string;
  maxResults?: number;
  resourceRegionScope?: ResourceRegionScopeFilter;
}
export interface ListResourceTypesResponse {
  resourceTypes?: Array<ServiceNameAndResourceType>;
  nextToken?: string;
}
export declare class MalformedArnException extends EffectData.TaggedError(
  "MalformedArnException",
)<{
  readonly message: string;
}> {}
export declare class MalformedPolicyTemplateException extends EffectData.TaggedError(
  "MalformedPolicyTemplateException",
)<{
  readonly message: string;
}> {}
export type MaxResults = number;

export declare class MissingRequiredParameterException extends EffectData.TaggedError(
  "MissingRequiredParameterException",
)<{
  readonly message: string;
}> {}
export declare class OperationNotPermittedException extends EffectData.TaggedError(
  "OperationNotPermittedException",
)<{
  readonly message: string;
}> {}
export declare class PermissionAlreadyExistsException extends EffectData.TaggedError(
  "PermissionAlreadyExistsException",
)<{
  readonly message: string;
}> {}
export type PermissionArnList = Array<string>;
export type PermissionFeatureSet =
  | "CREATED_FROM_POLICY"
  | "PROMOTING_TO_STANDARD"
  | "STANDARD";
export declare class PermissionLimitExceededException extends EffectData.TaggedError(
  "PermissionLimitExceededException",
)<{
  readonly message: string;
}> {}
export type PermissionName = string;

export type PermissionStatus =
  | "ATTACHABLE"
  | "UNATTACHABLE"
  | "DELETING"
  | "DELETED";
export type PermissionType = "CUSTOMER_MANAGED" | "AWS_MANAGED";
export type PermissionTypeFilter = "ALL" | "AWS_MANAGED" | "CUSTOMER_MANAGED";
export declare class PermissionVersionsLimitExceededException extends EffectData.TaggedError(
  "PermissionVersionsLimitExceededException",
)<{
  readonly message: string;
}> {}
export type Policy = string;

export type PolicyList = Array<string>;
export interface Principal {
  id?: string;
  resourceShareArn?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  external?: boolean;
}
export type PrincipalArnOrIdList = Array<string>;
export type PrincipalList = Array<Principal>;
export interface PromotePermissionCreatedFromPolicyRequest {
  permissionArn: string;
  name: string;
  clientToken?: string;
}
export interface PromotePermissionCreatedFromPolicyResponse {
  permission?: ResourceSharePermissionSummary;
  clientToken?: string;
}
export interface PromoteResourceShareCreatedFromPolicyRequest {
  resourceShareArn: string;
}
export interface PromoteResourceShareCreatedFromPolicyResponse {
  returnValue?: boolean;
}
export interface RejectResourceShareInvitationRequest {
  resourceShareInvitationArn: string;
  clientToken?: string;
}
export interface RejectResourceShareInvitationResponse {
  resourceShareInvitation?: ResourceShareInvitation;
  clientToken?: string;
}
export interface ReplacePermissionAssociationsRequest {
  fromPermissionArn: string;
  fromPermissionVersion?: number;
  toPermissionArn: string;
  clientToken?: string;
}
export interface ReplacePermissionAssociationsResponse {
  replacePermissionAssociationsWork?: ReplacePermissionAssociationsWork;
  clientToken?: string;
}
export interface ReplacePermissionAssociationsWork {
  id?: string;
  fromPermissionArn?: string;
  fromPermissionVersion?: string;
  toPermissionArn?: string;
  toPermissionVersion?: string;
  status?: ReplacePermissionAssociationsWorkStatus;
  statusMessage?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
}
export type ReplacePermissionAssociationsWorkIdList = Array<string>;
export type ReplacePermissionAssociationsWorkList =
  Array<ReplacePermissionAssociationsWork>;
export type ReplacePermissionAssociationsWorkStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED";
export interface Resource {
  arn?: string;
  type?: string;
  resourceShareArn?: string;
  resourceGroupArn?: string;
  status?: ResourceStatus;
  statusMessage?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  resourceRegionScope?: ResourceRegionScope;
}
export type ResourceArnList = Array<string>;
export declare class ResourceArnNotFoundException extends EffectData.TaggedError(
  "ResourceArnNotFoundException",
)<{
  readonly message: string;
}> {}
export type ResourceList = Array<Resource>;
export type ResourceOwner = "SELF" | "OTHER_ACCOUNTS";
export type ResourceRegionScope = "REGIONAL" | "GLOBAL";
export type ResourceRegionScopeFilter = "ALL" | "REGIONAL" | "GLOBAL";
export interface ResourceShare {
  resourceShareArn?: string;
  name?: string;
  owningAccountId?: string;
  allowExternalPrincipals?: boolean;
  status?: ResourceShareStatus;
  statusMessage?: string;
  tags?: Array<Tag>;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  featureSet?: ResourceShareFeatureSet;
}
export type ResourceShareArnList = Array<string>;
export interface ResourceShareAssociation {
  resourceShareArn?: string;
  resourceShareName?: string;
  associatedEntity?: string;
  associationType?: ResourceShareAssociationType;
  status?: ResourceShareAssociationStatus;
  statusMessage?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  external?: boolean;
}
export type ResourceShareAssociationList = Array<ResourceShareAssociation>;
export type ResourceShareAssociationStatus =
  | "ASSOCIATING"
  | "ASSOCIATED"
  | "FAILED"
  | "DISASSOCIATING"
  | "DISASSOCIATED";
export type ResourceShareAssociationType = "PRINCIPAL" | "RESOURCE";
export type ResourceShareFeatureSet =
  | "CREATED_FROM_POLICY"
  | "PROMOTING_TO_STANDARD"
  | "STANDARD";
export interface ResourceShareInvitation {
  resourceShareInvitationArn?: string;
  resourceShareName?: string;
  resourceShareArn?: string;
  senderAccountId?: string;
  receiverAccountId?: string;
  invitationTimestamp?: Date | string;
  status?: ResourceShareInvitationStatus;
  resourceShareAssociations?: Array<ResourceShareAssociation>;
  receiverArn?: string;
}
export declare class ResourceShareInvitationAlreadyAcceptedException extends EffectData.TaggedError(
  "ResourceShareInvitationAlreadyAcceptedException",
)<{
  readonly message: string;
}> {}
export declare class ResourceShareInvitationAlreadyRejectedException extends EffectData.TaggedError(
  "ResourceShareInvitationAlreadyRejectedException",
)<{
  readonly message: string;
}> {}
export type ResourceShareInvitationArnList = Array<string>;
export declare class ResourceShareInvitationArnNotFoundException extends EffectData.TaggedError(
  "ResourceShareInvitationArnNotFoundException",
)<{
  readonly message: string;
}> {}
export declare class ResourceShareInvitationExpiredException extends EffectData.TaggedError(
  "ResourceShareInvitationExpiredException",
)<{
  readonly message: string;
}> {}
export type ResourceShareInvitationList = Array<ResourceShareInvitation>;
export type ResourceShareInvitationStatus =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "EXPIRED";
export declare class ResourceShareLimitExceededException extends EffectData.TaggedError(
  "ResourceShareLimitExceededException",
)<{
  readonly message: string;
}> {}
export type ResourceShareList = Array<ResourceShare>;
export interface ResourceSharePermissionDetail {
  arn?: string;
  version?: string;
  defaultVersion?: boolean;
  name?: string;
  resourceType?: string;
  permission?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  isResourceTypeDefault?: boolean;
  permissionType?: PermissionType;
  featureSet?: PermissionFeatureSet;
  status?: PermissionStatus;
  tags?: Array<Tag>;
}
export type ResourceSharePermissionList = Array<ResourceSharePermissionSummary>;
export interface ResourceSharePermissionSummary {
  arn?: string;
  version?: string;
  defaultVersion?: boolean;
  name?: string;
  resourceType?: string;
  status?: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
  isResourceTypeDefault?: boolean;
  permissionType?: PermissionType;
  featureSet?: PermissionFeatureSet;
  tags?: Array<Tag>;
}
export type ResourceShareStatus =
  | "PENDING"
  | "ACTIVE"
  | "FAILED"
  | "DELETING"
  | "DELETED";
export type ResourceStatus =
  | "AVAILABLE"
  | "ZONAL_RESOURCE_INACCESSIBLE"
  | "LIMIT_EXCEEDED"
  | "UNAVAILABLE"
  | "PENDING";
export declare class ServerInternalException extends EffectData.TaggedError(
  "ServerInternalException",
)<{
  readonly message: string;
}> {}
export interface ServiceNameAndResourceType {
  resourceType?: string;
  serviceName?: string;
  resourceRegionScope?: ResourceRegionScope;
}
export type ServiceNameAndResourceTypeList = Array<ServiceNameAndResourceType>;
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message: string;
}> {}
export interface SetDefaultPermissionVersionRequest {
  permissionArn: string;
  permissionVersion: number;
  clientToken?: string;
}
export interface SetDefaultPermissionVersionResponse {
  returnValue?: boolean;
  clientToken?: string;
}
export type SourceArnOrAccountList = Array<string>;
export interface Tag {
  key?: string;
  value?: string;
}
export interface TagFilter {
  tagKey?: string;
  tagValues?: Array<string>;
}
export type TagFilters = Array<TagFilter>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export declare class TagLimitExceededException extends EffectData.TaggedError(
  "TagLimitExceededException",
)<{
  readonly message: string;
}> {}
export type TagList = Array<Tag>;
export declare class TagPolicyViolationException extends EffectData.TaggedError(
  "TagPolicyViolationException",
)<{
  readonly message: string;
}> {}
export interface TagResourceRequest {
  resourceShareArn?: string;
  tags: Array<Tag>;
  resourceArn?: string;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TagValueList = Array<string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export declare class UnknownResourceException extends EffectData.TaggedError(
  "UnknownResourceException",
)<{
  readonly message: string;
}> {}
export declare class UnmatchedPolicyPermissionException extends EffectData.TaggedError(
  "UnmatchedPolicyPermissionException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceRequest {
  resourceShareArn?: string;
  tagKeys: Array<string>;
  resourceArn?: string;
}
export interface UntagResourceResponse {}
export interface UpdateResourceShareRequest {
  resourceShareArn: string;
  name?: string;
  allowExternalPrincipals?: boolean;
  clientToken?: string;
}
export interface UpdateResourceShareResponse {
  resourceShare?: ResourceShare;
  clientToken?: string;
}
export declare namespace AcceptResourceShareInvitation {
  export type Input = AcceptResourceShareInvitationRequest;
  export type Output = AcceptResourceShareInvitationResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareInvitationAlreadyAcceptedException
    | ResourceShareInvitationAlreadyRejectedException
    | ResourceShareInvitationArnNotFoundException
    | ResourceShareInvitationExpiredException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace AssociateResourceShare {
  export type Input = AssociateResourceShareRequest;
  export type Output = AssociateResourceShareResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | ThrottlingException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace AssociateResourceSharePermission {
  export type Input = AssociateResourceSharePermissionRequest;
  export type Output = AssociateResourceSharePermissionResponse;
  export type Error =
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace CreatePermission {
  export type Input = CreatePermissionRequest;
  export type Output = CreatePermissionResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidPolicyException
    | MalformedPolicyTemplateException
    | OperationNotPermittedException
    | PermissionAlreadyExistsException
    | PermissionLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreatePermissionVersion {
  export type Input = CreatePermissionVersionRequest;
  export type Output = CreatePermissionVersionResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidPolicyException
    | MalformedArnException
    | MalformedPolicyTemplateException
    | PermissionVersionsLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace CreateResourceShare {
  export type Input = CreateResourceShareRequest;
  export type Output = CreateResourceShareResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | TagLimitExceededException
    | TagPolicyViolationException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace DeletePermission {
  export type Input = DeletePermissionRequest;
  export type Output = DeletePermissionResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace DeletePermissionVersion {
  export type Input = DeletePermissionVersionRequest;
  export type Output = DeletePermissionVersionResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace DeleteResourceShare {
  export type Input = DeleteResourceShareRequest;
  export type Output = DeleteResourceShareResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace DisassociateResourceShare {
  export type Input = DisassociateResourceShareRequest;
  export type Output = DisassociateResourceShareResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace DisassociateResourceSharePermission {
  export type Input = DisassociateResourceSharePermissionRequest;
  export type Output = DisassociateResourceSharePermissionResponse;
  export type Error =
    | InvalidClientTokenException
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace EnableSharingWithAwsOrganization {
  export type Input = EnableSharingWithAwsOrganizationRequest;
  export type Output = EnableSharingWithAwsOrganizationResponse;
  export type Error =
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetPermission {
  export type Input = GetPermissionRequest;
  export type Output = GetPermissionResponse;
  export type Error =
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace GetResourcePolicies {
  export type Input = GetResourcePoliciesRequest;
  export type Output = GetResourcePoliciesResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ResourceArnNotFoundException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetResourceShareAssociations {
  export type Input = GetResourceShareAssociationsRequest;
  export type Output = GetResourceShareAssociationsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace GetResourceShareInvitations {
  export type Input = GetResourceShareInvitationsRequest;
  export type Output = GetResourceShareInvitationsResponse;
  export type Error =
    | InvalidMaxResultsException
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ResourceShareInvitationArnNotFoundException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace GetResourceShares {
  export type Input = GetResourceSharesRequest;
  export type Output = GetResourceSharesResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace ListPendingInvitationResources {
  export type Input = ListPendingInvitationResourcesRequest;
  export type Output = ListPendingInvitationResourcesResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | MissingRequiredParameterException
    | ResourceShareInvitationAlreadyRejectedException
    | ResourceShareInvitationArnNotFoundException
    | ResourceShareInvitationExpiredException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListPermissionAssociations {
  export type Input = ListPermissionAssociationsRequest;
  export type Output = ListPermissionAssociationsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListPermissions {
  export type Input = ListPermissionsRequest;
  export type Output = ListPermissionsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListPermissionVersions {
  export type Input = ListPermissionVersionsRequest;
  export type Output = ListPermissionVersionsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace ListPrincipals {
  export type Input = ListPrincipalsRequest;
  export type Output = ListPrincipalsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace ListReplacePermissionAssociationsWork {
  export type Input = ListReplacePermissionAssociationsWorkRequest;
  export type Output = ListReplacePermissionAssociationsWorkResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListResources {
  export type Input = ListResourcesRequest;
  export type Output = ListResourcesResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidResourceTypeException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace ListResourceSharePermissions {
  export type Input = ListResourceSharePermissionsRequest;
  export type Output = ListResourceSharePermissionsResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace ListResourceTypes {
  export type Input = ListResourceTypesRequest;
  export type Output = ListResourceTypesResponse;
  export type Error =
    | InvalidNextTokenException
    | InvalidParameterException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PromotePermissionCreatedFromPolicy {
  export type Input = PromotePermissionCreatedFromPolicyRequest;
  export type Output = PromotePermissionCreatedFromPolicyResponse;
  export type Error =
    | InvalidParameterException
    | MalformedArnException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace PromoteResourceShareCreatedFromPolicy {
  export type Input = PromoteResourceShareCreatedFromPolicyRequest;
  export type Output = PromoteResourceShareCreatedFromPolicyResponse;
  export type Error =
    | InvalidParameterException
    | InvalidStateTransitionException
    | MalformedArnException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ResourceShareLimitExceededException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | UnmatchedPolicyPermissionException
    | CommonAwsError;
}

export declare namespace RejectResourceShareInvitation {
  export type Input = RejectResourceShareInvitationRequest;
  export type Output = RejectResourceShareInvitationResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | MalformedArnException
    | OperationNotPermittedException
    | ResourceShareInvitationAlreadyAcceptedException
    | ResourceShareInvitationAlreadyRejectedException
    | ResourceShareInvitationArnNotFoundException
    | ResourceShareInvitationExpiredException
    | ServerInternalException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ReplacePermissionAssociations {
  export type Input = ReplacePermissionAssociationsRequest;
  export type Output = ReplacePermissionAssociationsResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace SetDefaultPermissionVersion {
  export type Input = SetDefaultPermissionVersionRequest;
  export type Output = SetDefaultPermissionVersionResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidParameterException
    | MalformedArnException
    | ResourceArnNotFoundException
    | ServerInternalException
    | ServiceUnavailableException
    | TagLimitExceededException
    | TagPolicyViolationException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidParameterException
    | MalformedArnException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace UpdateResourceShare {
  export type Input = UpdateResourceShareRequest;
  export type Output = UpdateResourceShareResponse;
  export type Error =
    | IdempotentParameterMismatchException
    | InvalidClientTokenException
    | InvalidParameterException
    | MalformedArnException
    | MissingRequiredParameterException
    | OperationNotPermittedException
    | ServerInternalException
    | ServiceUnavailableException
    | UnknownResourceException
    | CommonAwsError;
}
