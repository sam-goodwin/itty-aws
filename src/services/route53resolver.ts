import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Route53Resolver {
  associateFirewallRuleGroup(
    input: AssociateFirewallRuleGroupRequest,
  ): Effect.Effect<
    AssociateFirewallRuleGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateResolverEndpointIpAddress(
    input: AssociateResolverEndpointIpAddressRequest,
  ): Effect.Effect<
    AssociateResolverEndpointIpAddressResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateResolverQueryLogConfig(
    input: AssociateResolverQueryLogConfigRequest,
  ): Effect.Effect<
    AssociateResolverQueryLogConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateResolverRule(
    input: AssociateResolverRuleRequest,
  ): Effect.Effect<
    AssociateResolverRuleResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createFirewallDomainList(
    input: CreateFirewallDomainListRequest,
  ): Effect.Effect<
    CreateFirewallDomainListResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFirewallRule(
    input: CreateFirewallRuleRequest,
  ): Effect.Effect<
    CreateFirewallRuleResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFirewallRuleGroup(
    input: CreateFirewallRuleGroupRequest,
  ): Effect.Effect<
    CreateFirewallRuleGroupResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createOutpostResolver(
    input: CreateOutpostResolverRequest,
  ): Effect.Effect<
    CreateOutpostResolverResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createResolverEndpoint(
    input: CreateResolverEndpointRequest,
  ): Effect.Effect<
    CreateResolverEndpointResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createResolverQueryLogConfig(
    input: CreateResolverQueryLogConfigRequest,
  ): Effect.Effect<
    CreateResolverQueryLogConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createResolverRule(
    input: CreateResolverRuleRequest,
  ): Effect.Effect<
    CreateResolverRuleResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteFirewallDomainList(
    input: DeleteFirewallDomainListRequest,
  ): Effect.Effect<
    DeleteFirewallDomainListResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteFirewallRule(
    input: DeleteFirewallRuleRequest,
  ): Effect.Effect<
    DeleteFirewallRuleResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFirewallRuleGroup(
    input: DeleteFirewallRuleGroupRequest,
  ): Effect.Effect<
    DeleteFirewallRuleGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOutpostResolver(
    input: DeleteOutpostResolverRequest,
  ): Effect.Effect<
    DeleteOutpostResolverResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResolverEndpoint(
    input: DeleteResolverEndpointRequest,
  ): Effect.Effect<
    DeleteResolverEndpointResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteResolverQueryLogConfig(
    input: DeleteResolverQueryLogConfigRequest,
  ): Effect.Effect<
    DeleteResolverQueryLogConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteResolverRule(
    input: DeleteResolverRuleRequest,
  ): Effect.Effect<
    DeleteResolverRuleResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateFirewallRuleGroup(
    input: DisassociateFirewallRuleGroupRequest,
  ): Effect.Effect<
    DisassociateFirewallRuleGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateResolverEndpointIpAddress(
    input: DisassociateResolverEndpointIpAddressRequest,
  ): Effect.Effect<
    DisassociateResolverEndpointIpAddressResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateResolverQueryLogConfig(
    input: DisassociateResolverQueryLogConfigRequest,
  ): Effect.Effect<
    DisassociateResolverQueryLogConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateResolverRule(
    input: DisassociateResolverRuleRequest,
  ): Effect.Effect<
    DisassociateResolverRuleResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFirewallConfig(
    input: GetFirewallConfigRequest,
  ): Effect.Effect<
    GetFirewallConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFirewallDomainList(
    input: GetFirewallDomainListRequest,
  ): Effect.Effect<
    GetFirewallDomainListResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFirewallRuleGroup(
    input: GetFirewallRuleGroupRequest,
  ): Effect.Effect<
    GetFirewallRuleGroupResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFirewallRuleGroupAssociation(
    input: GetFirewallRuleGroupAssociationRequest,
  ): Effect.Effect<
    GetFirewallRuleGroupAssociationResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFirewallRuleGroupPolicy(
    input: GetFirewallRuleGroupPolicyRequest,
  ): Effect.Effect<
    GetFirewallRuleGroupPolicyResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOutpostResolver(
    input: GetOutpostResolverRequest,
  ): Effect.Effect<
    GetOutpostResolverResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResolverConfig(
    input: GetResolverConfigRequest,
  ): Effect.Effect<
    GetResolverConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResolverDnssecConfig(
    input: GetResolverDnssecConfigRequest,
  ): Effect.Effect<
    GetResolverDnssecConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getResolverEndpoint(
    input: GetResolverEndpointRequest,
  ): Effect.Effect<
    GetResolverEndpointResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getResolverQueryLogConfig(
    input: GetResolverQueryLogConfigRequest,
  ): Effect.Effect<
    GetResolverQueryLogConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getResolverQueryLogConfigAssociation(
    input: GetResolverQueryLogConfigAssociationRequest,
  ): Effect.Effect<
    GetResolverQueryLogConfigAssociationResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getResolverQueryLogConfigPolicy(
    input: GetResolverQueryLogConfigPolicyRequest,
  ): Effect.Effect<
    GetResolverQueryLogConfigPolicyResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | UnknownResourceException
    | CommonAwsError
  >;
  getResolverRule(
    input: GetResolverRuleRequest,
  ): Effect.Effect<
    GetResolverRuleResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getResolverRuleAssociation(
    input: GetResolverRuleAssociationRequest,
  ): Effect.Effect<
    GetResolverRuleAssociationResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getResolverRulePolicy(
    input: GetResolverRulePolicyRequest,
  ): Effect.Effect<
    GetResolverRulePolicyResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | UnknownResourceException
    | CommonAwsError
  >;
  importFirewallDomains(
    input: ImportFirewallDomainsRequest,
  ): Effect.Effect<
    ImportFirewallDomainsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFirewallConfigs(
    input: ListFirewallConfigsRequest,
  ): Effect.Effect<
    ListFirewallConfigsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFirewallDomainLists(
    input: ListFirewallDomainListsRequest,
  ): Effect.Effect<
    ListFirewallDomainListsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFirewallDomains(
    input: ListFirewallDomainsRequest,
  ): Effect.Effect<
    ListFirewallDomainsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFirewallRuleGroupAssociations(
    input: ListFirewallRuleGroupAssociationsRequest,
  ): Effect.Effect<
    ListFirewallRuleGroupAssociationsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFirewallRuleGroups(
    input: ListFirewallRuleGroupsRequest,
  ): Effect.Effect<
    ListFirewallRuleGroupsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFirewallRules(
    input: ListFirewallRulesRequest,
  ): Effect.Effect<
    ListFirewallRulesResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOutpostResolvers(
    input: ListOutpostResolversRequest,
  ): Effect.Effect<
    ListOutpostResolversResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listResolverConfigs(
    input: ListResolverConfigsRequest,
  ): Effect.Effect<
    ListResolverConfigsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listResolverDnssecConfigs(
    input: ListResolverDnssecConfigsRequest,
  ): Effect.Effect<
    ListResolverDnssecConfigsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listResolverEndpointIpAddresses(
    input: ListResolverEndpointIpAddressesRequest,
  ): Effect.Effect<
    ListResolverEndpointIpAddressesResponse,
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listResolverEndpoints(
    input: ListResolverEndpointsRequest,
  ): Effect.Effect<
    ListResolverEndpointsResponse,
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listResolverQueryLogConfigAssociations(
    input: ListResolverQueryLogConfigAssociationsRequest,
  ): Effect.Effect<
    ListResolverQueryLogConfigAssociationsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  listResolverQueryLogConfigs(
    input: ListResolverQueryLogConfigsRequest,
  ): Effect.Effect<
    ListResolverQueryLogConfigsResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listResolverRuleAssociations(
    input: ListResolverRuleAssociationsRequest,
  ): Effect.Effect<
    ListResolverRuleAssociationsResponse,
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listResolverRules(
    input: ListResolverRulesRequest,
  ): Effect.Effect<
    ListResolverRulesResponse,
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putFirewallRuleGroupPolicy(
    input: PutFirewallRuleGroupPolicyRequest,
  ): Effect.Effect<
    PutFirewallRuleGroupPolicyResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putResolverQueryLogConfigPolicy(
    input: PutResolverQueryLogConfigPolicyRequest,
  ): Effect.Effect<
    PutResolverQueryLogConfigPolicyResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidPolicyDocument
    | InvalidRequestException
    | UnknownResourceException
    | CommonAwsError
  >;
  putResolverRulePolicy(
    input: PutResolverRulePolicyRequest,
  ): Effect.Effect<
    PutResolverRulePolicyResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidPolicyDocument
    | UnknownResourceException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | InvalidTagException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFirewallConfig(
    input: UpdateFirewallConfigRequest,
  ): Effect.Effect<
    UpdateFirewallConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFirewallDomains(
    input: UpdateFirewallDomainsRequest,
  ): Effect.Effect<
    UpdateFirewallDomainsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFirewallRule(
    input: UpdateFirewallRuleRequest,
  ): Effect.Effect<
    UpdateFirewallRuleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFirewallRuleGroupAssociation(
    input: UpdateFirewallRuleGroupAssociationRequest,
  ): Effect.Effect<
    UpdateFirewallRuleGroupAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOutpostResolver(
    input: UpdateOutpostResolverRequest,
  ): Effect.Effect<
    UpdateOutpostResolverResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResolverConfig(
    input: UpdateResolverConfigRequest,
  ): Effect.Effect<
    UpdateResolverConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResolverDnssecConfig(
    input: UpdateResolverDnssecConfigRequest,
  ): Effect.Effect<
    UpdateResolverDnssecConfigResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateResolverEndpoint(
    input: UpdateResolverEndpointRequest,
  ): Effect.Effect<
    UpdateResolverEndpointResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateResolverRule(
    input: UpdateResolverRuleRequest,
  ): Effect.Effect<
    UpdateResolverRuleResponse,
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Route53resolver = Route53Resolver;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export type Action = "ALLOW" | "BLOCK" | "ALERT";
export type Arn = string;

export interface AssociateFirewallRuleGroupRequest {
  CreatorRequestId: string;
  FirewallRuleGroupId: string;
  VpcId: string;
  Priority: number;
  Name: string;
  MutationProtection?: MutationProtectionStatus;
  Tags?: Array<Tag>;
}
export interface AssociateFirewallRuleGroupResponse {
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
export interface AssociateResolverEndpointIpAddressRequest {
  ResolverEndpointId: string;
  IpAddress: IpAddressUpdate;
}
export interface AssociateResolverEndpointIpAddressResponse {
  ResolverEndpoint?: ResolverEndpoint;
}
export interface AssociateResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
  ResourceId: string;
}
export interface AssociateResolverQueryLogConfigResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}
export interface AssociateResolverRuleRequest {
  ResolverRuleId: string;
  Name?: string;
  VPCId: string;
}
export interface AssociateResolverRuleResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation;
}
export type AutodefinedReverseFlag =
  | "ENABLE"
  | "DISABLE"
  | "USE_LOCAL_RESOURCE_SETTING";
export type BlockOverrideDnsType = "CNAME";
export type BlockOverrideDomain = string;

export type BlockOverrideTtl = number;

export type BlockResponse = "NODATA" | "NXDOMAIN" | "OVERRIDE";
export type ConfidenceThreshold = "LOW" | "MEDIUM" | "HIGH";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type Count = number;

export interface CreateFirewallDomainListRequest {
  CreatorRequestId: string;
  Name: string;
  Tags?: Array<Tag>;
}
export interface CreateFirewallDomainListResponse {
  FirewallDomainList?: FirewallDomainList;
}
export interface CreateFirewallRuleGroupRequest {
  CreatorRequestId: string;
  Name: string;
  Tags?: Array<Tag>;
}
export interface CreateFirewallRuleGroupResponse {
  FirewallRuleGroup?: FirewallRuleGroup;
}
export interface CreateFirewallRuleRequest {
  CreatorRequestId: string;
  FirewallRuleGroupId: string;
  FirewallDomainListId?: string;
  Priority: number;
  Action: Action;
  BlockResponse?: BlockResponse;
  BlockOverrideDomain?: string;
  BlockOverrideDnsType?: BlockOverrideDnsType;
  BlockOverrideTtl?: number;
  Name: string;
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction;
  Qtype?: string;
  DnsThreatProtection?: DnsThreatProtection;
  ConfidenceThreshold?: ConfidenceThreshold;
}
export interface CreateFirewallRuleResponse {
  FirewallRule?: FirewallRule;
}
export interface CreateOutpostResolverRequest {
  CreatorRequestId: string;
  Name: string;
  InstanceCount?: number;
  PreferredInstanceType: string;
  OutpostArn: string;
  Tags?: Array<Tag>;
}
export interface CreateOutpostResolverResponse {
  OutpostResolver?: OutpostResolver;
}
export interface CreateResolverEndpointRequest {
  CreatorRequestId: string;
  Name?: string;
  SecurityGroupIds: Array<string>;
  Direction: ResolverEndpointDirection;
  IpAddresses: Array<IpAddressRequest>;
  OutpostArn?: string;
  PreferredInstanceType?: string;
  Tags?: Array<Tag>;
  ResolverEndpointType?: ResolverEndpointType;
  Protocols?: Array<Protocol>;
}
export interface CreateResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint;
}
export interface CreateResolverQueryLogConfigRequest {
  Name: string;
  DestinationArn: string;
  CreatorRequestId: string;
  Tags?: Array<Tag>;
}
export interface CreateResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}
export interface CreateResolverRuleRequest {
  CreatorRequestId: string;
  Name?: string;
  RuleType: RuleTypeOption;
  DomainName?: string;
  TargetIps?: Array<TargetAddress>;
  ResolverEndpointId?: string;
  Tags?: Array<Tag>;
  DelegationRecord?: string;
}
export interface CreateResolverRuleResponse {
  ResolverRule?: ResolverRule;
}
export type CreatorRequestId = string;

export type DelegationRecord = string;

export interface DeleteFirewallDomainListRequest {
  FirewallDomainListId: string;
}
export interface DeleteFirewallDomainListResponse {
  FirewallDomainList?: FirewallDomainList;
}
export interface DeleteFirewallRuleGroupRequest {
  FirewallRuleGroupId: string;
}
export interface DeleteFirewallRuleGroupResponse {
  FirewallRuleGroup?: FirewallRuleGroup;
}
export interface DeleteFirewallRuleRequest {
  FirewallRuleGroupId: string;
  FirewallDomainListId?: string;
  FirewallThreatProtectionId?: string;
  Qtype?: string;
}
export interface DeleteFirewallRuleResponse {
  FirewallRule?: FirewallRule;
}
export interface DeleteOutpostResolverRequest {
  Id: string;
}
export interface DeleteOutpostResolverResponse {
  OutpostResolver?: OutpostResolver;
}
export interface DeleteResolverEndpointRequest {
  ResolverEndpointId: string;
}
export interface DeleteResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint;
}
export interface DeleteResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
}
export interface DeleteResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}
export interface DeleteResolverRuleRequest {
  ResolverRuleId: string;
}
export interface DeleteResolverRuleResponse {
  ResolverRule?: ResolverRule;
}
export type DestinationArn = string;

export interface DisassociateFirewallRuleGroupRequest {
  FirewallRuleGroupAssociationId: string;
}
export interface DisassociateFirewallRuleGroupResponse {
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
export interface DisassociateResolverEndpointIpAddressRequest {
  ResolverEndpointId: string;
  IpAddress: IpAddressUpdate;
}
export interface DisassociateResolverEndpointIpAddressResponse {
  ResolverEndpoint?: ResolverEndpoint;
}
export interface DisassociateResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
  ResourceId: string;
}
export interface DisassociateResolverQueryLogConfigResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}
export interface DisassociateResolverRuleRequest {
  VPCId: string;
  ResolverRuleId: string;
}
export interface DisassociateResolverRuleResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation;
}
export type DnsThreatProtection = "DGA" | "DNS_TUNNELING";
export type DomainListFileUrl = string;

export type DomainName = string;

export type ExceptionMessage = string;

export interface Filter {
  Name?: string;
  Values?: Array<string>;
}
export type FilterName = string;

export type Filters = Array<Filter>;
export type FilterValue = string;

export type FilterValues = Array<string>;
export interface FirewallConfig {
  Id?: string;
  ResourceId?: string;
  OwnerId?: string;
  FirewallFailOpen?: FirewallFailOpenStatus;
}
export type FirewallConfigList = Array<FirewallConfig>;
export type FirewallDomainImportOperation = "REPLACE";
export interface FirewallDomainList {
  Id?: string;
  Arn?: string;
  Name?: string;
  DomainCount?: number;
  Status?: FirewallDomainListStatus;
  StatusMessage?: string;
  ManagedOwnerName?: string;
  CreatorRequestId?: string;
  CreationTime?: string;
  ModificationTime?: string;
}
export interface FirewallDomainListMetadata {
  Id?: string;
  Arn?: string;
  Name?: string;
  CreatorRequestId?: string;
  ManagedOwnerName?: string;
}
export type FirewallDomainListMetadataList = Array<FirewallDomainListMetadata>;
export type FirewallDomainListStatus =
  | "COMPLETE"
  | "COMPLETE_IMPORT_FAILED"
  | "IMPORTING"
  | "DELETING"
  | "UPDATING";
export type FirewallDomainName = string;

export type FirewallDomainRedirectionAction =
  | "INSPECT_REDIRECTION_DOMAIN"
  | "TRUST_REDIRECTION_DOMAIN";
export type FirewallDomains = Array<string>;
export type FirewallDomainUpdateOperation = "ADD" | "REMOVE" | "REPLACE";
export type FirewallFailOpenStatus =
  | "ENABLED"
  | "DISABLED"
  | "USE_LOCAL_RESOURCE_SETTING";
export interface FirewallRule {
  FirewallRuleGroupId?: string;
  FirewallDomainListId?: string;
  FirewallThreatProtectionId?: string;
  Name?: string;
  Priority?: number;
  Action?: Action;
  BlockResponse?: BlockResponse;
  BlockOverrideDomain?: string;
  BlockOverrideDnsType?: BlockOverrideDnsType;
  BlockOverrideTtl?: number;
  CreatorRequestId?: string;
  CreationTime?: string;
  ModificationTime?: string;
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction;
  Qtype?: string;
  DnsThreatProtection?: DnsThreatProtection;
  ConfidenceThreshold?: ConfidenceThreshold;
}
export interface FirewallRuleGroup {
  Id?: string;
  Arn?: string;
  Name?: string;
  RuleCount?: number;
  Status?: FirewallRuleGroupStatus;
  StatusMessage?: string;
  OwnerId?: string;
  CreatorRequestId?: string;
  ShareStatus?: ShareStatus;
  CreationTime?: string;
  ModificationTime?: string;
}
export interface FirewallRuleGroupAssociation {
  Id?: string;
  Arn?: string;
  FirewallRuleGroupId?: string;
  VpcId?: string;
  Name?: string;
  Priority?: number;
  MutationProtection?: MutationProtectionStatus;
  ManagedOwnerName?: string;
  Status?: FirewallRuleGroupAssociationStatus;
  StatusMessage?: string;
  CreatorRequestId?: string;
  CreationTime?: string;
  ModificationTime?: string;
}
export type FirewallRuleGroupAssociations = Array<FirewallRuleGroupAssociation>;
export type FirewallRuleGroupAssociationStatus =
  | "COMPLETE"
  | "DELETING"
  | "UPDATING";
export interface FirewallRuleGroupMetadata {
  Id?: string;
  Arn?: string;
  Name?: string;
  OwnerId?: string;
  CreatorRequestId?: string;
  ShareStatus?: ShareStatus;
}
export type FirewallRuleGroupMetadataList = Array<FirewallRuleGroupMetadata>;
export type FirewallRuleGroupPolicy = string;

export type FirewallRuleGroupStatus = "COMPLETE" | "DELETING" | "UPDATING";
export type FirewallRules = Array<FirewallRule>;
export interface GetFirewallConfigRequest {
  ResourceId: string;
}
export interface GetFirewallConfigResponse {
  FirewallConfig?: FirewallConfig;
}
export interface GetFirewallDomainListRequest {
  FirewallDomainListId: string;
}
export interface GetFirewallDomainListResponse {
  FirewallDomainList?: FirewallDomainList;
}
export interface GetFirewallRuleGroupAssociationRequest {
  FirewallRuleGroupAssociationId: string;
}
export interface GetFirewallRuleGroupAssociationResponse {
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
export interface GetFirewallRuleGroupPolicyRequest {
  Arn: string;
}
export interface GetFirewallRuleGroupPolicyResponse {
  FirewallRuleGroupPolicy?: string;
}
export interface GetFirewallRuleGroupRequest {
  FirewallRuleGroupId: string;
}
export interface GetFirewallRuleGroupResponse {
  FirewallRuleGroup?: FirewallRuleGroup;
}
export interface GetOutpostResolverRequest {
  Id: string;
}
export interface GetOutpostResolverResponse {
  OutpostResolver?: OutpostResolver;
}
export interface GetResolverConfigRequest {
  ResourceId: string;
}
export interface GetResolverConfigResponse {
  ResolverConfig?: ResolverConfig;
}
export interface GetResolverDnssecConfigRequest {
  ResourceId: string;
}
export interface GetResolverDnssecConfigResponse {
  ResolverDNSSECConfig?: ResolverDnssecConfig;
}
export interface GetResolverEndpointRequest {
  ResolverEndpointId: string;
}
export interface GetResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint;
}
export interface GetResolverQueryLogConfigAssociationRequest {
  ResolverQueryLogConfigAssociationId: string;
}
export interface GetResolverQueryLogConfigAssociationResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}
export interface GetResolverQueryLogConfigPolicyRequest {
  Arn: string;
}
export interface GetResolverQueryLogConfigPolicyResponse {
  ResolverQueryLogConfigPolicy?: string;
}
export interface GetResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
}
export interface GetResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig;
}
export interface GetResolverRuleAssociationRequest {
  ResolverRuleAssociationId: string;
}
export interface GetResolverRuleAssociationResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation;
}
export interface GetResolverRulePolicyRequest {
  Arn: string;
}
export interface GetResolverRulePolicyResponse {
  ResolverRulePolicy?: string;
}
export interface GetResolverRuleRequest {
  ResolverRuleId: string;
}
export interface GetResolverRuleResponse {
  ResolverRule?: ResolverRule;
}
export interface ImportFirewallDomainsRequest {
  FirewallDomainListId: string;
  Operation: FirewallDomainImportOperation;
  DomainFileUrl: string;
}
export interface ImportFirewallDomainsResponse {
  Id?: string;
  Name?: string;
  Status?: FirewallDomainListStatus;
  StatusMessage?: string;
}
export type InstanceCount = number;

export declare class InternalServiceErrorException extends EffectData.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message: string;
  readonly FieldName?: string;
}> {}
export declare class InvalidPolicyDocument extends EffectData.TaggedError(
  "InvalidPolicyDocument",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTagException extends EffectData.TaggedError(
  "InvalidTagException",
)<{
  readonly Message?: string;
}> {}
export type Ip = string;

export type IpAddressCount = number;

export type IpAddressesRequest = Array<IpAddressRequest>;
export type IpAddressesResponse = Array<IpAddressResponse>;
export interface IpAddressRequest {
  SubnetId: string;
  Ip?: string;
  Ipv6?: string;
}
export interface IpAddressResponse {
  IpId?: string;
  SubnetId?: string;
  Ip?: string;
  Ipv6?: string;
  Status?: IpAddressStatus;
  StatusMessage?: string;
  CreationTime?: string;
  ModificationTime?: string;
}
export type IpAddressStatus =
  | "Creating"
  | "FailedCreation"
  | "Attaching"
  | "Attached"
  | "RemapDetaching"
  | "RemapAttaching"
  | "Detaching"
  | "FailedResourceGone"
  | "Deleting"
  | "DeleteFailedFasExpired"
  | "Updating"
  | "UpdateFailed"
  | "Isolated";
export interface IpAddressUpdate {
  IpId?: string;
  SubnetId?: string;
  Ip?: string;
  Ipv6?: string;
}
export type Ipv6 = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type ListDomainMaxResults = number;

export type ListFirewallConfigsMaxResult = number;

export interface ListFirewallConfigsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFirewallConfigsResponse {
  NextToken?: string;
  FirewallConfigs?: Array<FirewallConfig>;
}
export interface ListFirewallDomainListsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFirewallDomainListsResponse {
  NextToken?: string;
  FirewallDomainLists?: Array<FirewallDomainListMetadata>;
}
export interface ListFirewallDomainsRequest {
  FirewallDomainListId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFirewallDomainsResponse {
  NextToken?: string;
  Domains?: Array<string>;
}
export interface ListFirewallRuleGroupAssociationsRequest {
  FirewallRuleGroupId?: string;
  VpcId?: string;
  Priority?: number;
  Status?: FirewallRuleGroupAssociationStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFirewallRuleGroupAssociationsResponse {
  NextToken?: string;
  FirewallRuleGroupAssociations?: Array<FirewallRuleGroupAssociation>;
}
export interface ListFirewallRuleGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFirewallRuleGroupsResponse {
  NextToken?: string;
  FirewallRuleGroups?: Array<FirewallRuleGroupMetadata>;
}
export interface ListFirewallRulesRequest {
  FirewallRuleGroupId: string;
  Priority?: number;
  Action?: Action;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFirewallRulesResponse {
  NextToken?: string;
  FirewallRules?: Array<FirewallRule>;
}
export interface ListOutpostResolversRequest {
  OutpostArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOutpostResolversResponse {
  OutpostResolvers?: Array<OutpostResolver>;
  NextToken?: string;
}
export type ListResolverConfigsMaxResult = number;

export interface ListResolverConfigsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResolverConfigsResponse {
  NextToken?: string;
  ResolverConfigs?: Array<ResolverConfig>;
}
export interface ListResolverDnssecConfigsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListResolverDnssecConfigsResponse {
  NextToken?: string;
  ResolverDnssecConfigs?: Array<ResolverDnssecConfig>;
}
export interface ListResolverEndpointIpAddressesRequest {
  ResolverEndpointId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResolverEndpointIpAddressesResponse {
  NextToken?: string;
  MaxResults?: number;
  IpAddresses?: Array<IpAddressResponse>;
}
export interface ListResolverEndpointsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListResolverEndpointsResponse {
  NextToken?: string;
  MaxResults?: number;
  ResolverEndpoints?: Array<ResolverEndpoint>;
}
export interface ListResolverQueryLogConfigAssociationsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  SortBy?: string;
  SortOrder?: SortOrder;
}
export interface ListResolverQueryLogConfigAssociationsResponse {
  NextToken?: string;
  TotalCount?: number;
  TotalFilteredCount?: number;
  ResolverQueryLogConfigAssociations?: Array<ResolverQueryLogConfigAssociation>;
}
export interface ListResolverQueryLogConfigsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
  SortBy?: string;
  SortOrder?: SortOrder;
}
export interface ListResolverQueryLogConfigsResponse {
  NextToken?: string;
  TotalCount?: number;
  TotalFilteredCount?: number;
  ResolverQueryLogConfigs?: Array<ResolverQueryLogConfig>;
}
export interface ListResolverRuleAssociationsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListResolverRuleAssociationsResponse {
  NextToken?: string;
  MaxResults?: number;
  ResolverRuleAssociations?: Array<ResolverRuleAssociation>;
}
export interface ListResolverRulesRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<Filter>;
}
export interface ListResolverRulesResponse {
  NextToken?: string;
  MaxResults?: number;
  ResolverRules?: Array<ResolverRule>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export type MaxResults = number;

export type MutationProtectionStatus = "ENABLED" | "DISABLED";
export type Name = string;

export type NextToken = string;

export type OutpostArn = string;

export type OutpostInstanceType = string;

export interface OutpostResolver {
  Arn?: string;
  CreationTime?: string;
  ModificationTime?: string;
  CreatorRequestId?: string;
  Id?: string;
  InstanceCount?: number;
  PreferredInstanceType?: string;
  Name?: string;
  Status?: OutpostResolverStatus;
  StatusMessage?: string;
  OutpostArn?: string;
}
export type OutpostResolverList = Array<OutpostResolver>;
export type OutpostResolverName = string;

export type OutpostResolverStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "UPDATING"
  | "DELETING"
  | "ACTION_NEEDED"
  | "FAILED_CREATION"
  | "FAILED_DELETION";
export type OutpostResolverStatusMessage = string;

export type Port = number;

export type Priority = number;

export type Protocol = "DOH" | "DO53" | "DOHFIPS";
export type ProtocolList = Array<Protocol>;
export interface PutFirewallRuleGroupPolicyRequest {
  Arn: string;
  FirewallRuleGroupPolicy: string;
}
export interface PutFirewallRuleGroupPolicyResponse {
  ReturnValue?: boolean;
}
export interface PutResolverQueryLogConfigPolicyRequest {
  Arn: string;
  ResolverQueryLogConfigPolicy: string;
}
export interface PutResolverQueryLogConfigPolicyResponse {
  ReturnValue?: boolean;
}
export interface PutResolverRulePolicyRequest {
  Arn: string;
  ResolverRulePolicy: string;
}
export interface PutResolverRulePolicyResponse {
  ReturnValue?: boolean;
}
export type Qtype = string;

export type ResolverAutodefinedReverseStatus =
  | "Enabling"
  | "Enabled"
  | "Disabling"
  | "Disabled"
  | "UpdatingToUseLocalResourceSetting"
  | "UseLocalResourceSetting";
export interface ResolverConfig {
  Id?: string;
  ResourceId?: string;
  OwnerId?: string;
  AutodefinedReverse?: ResolverAutodefinedReverseStatus;
}
export type ResolverConfigList = Array<ResolverConfig>;
export interface ResolverDnssecConfig {
  Id?: string;
  OwnerId?: string;
  ResourceId?: string;
  ValidationStatus?: ResolverDNSSECValidationStatus;
}
export type ResolverDnssecConfigList = Array<ResolverDnssecConfig>;
export type ResolverDNSSECValidationStatus =
  | "Enabling"
  | "Enabled"
  | "Disabling"
  | "Disabled"
  | "UpdateToUseLocalResourceSetting"
  | "UseLocalResourceSetting";
export interface ResolverEndpoint {
  Id?: string;
  CreatorRequestId?: string;
  Arn?: string;
  Name?: string;
  SecurityGroupIds?: Array<string>;
  Direction?: ResolverEndpointDirection;
  IpAddressCount?: number;
  HostVPCId?: string;
  Status?: ResolverEndpointStatus;
  StatusMessage?: string;
  CreationTime?: string;
  ModificationTime?: string;
  OutpostArn?: string;
  PreferredInstanceType?: string;
  ResolverEndpointType?: ResolverEndpointType;
  Protocols?: Array<Protocol>;
}
export type ResolverEndpointDirection =
  | "Inbound"
  | "Outbound"
  | "InboundDelegation";
export type ResolverEndpoints = Array<ResolverEndpoint>;
export type ResolverEndpointStatus =
  | "Creating"
  | "Operational"
  | "Updating"
  | "AutoRecovering"
  | "ActionNeeded"
  | "Deleting";
export type ResolverEndpointType = "IPV6" | "IPV4" | "DUALSTACK";
export interface ResolverQueryLogConfig {
  Id?: string;
  OwnerId?: string;
  Status?: ResolverQueryLogConfigStatus;
  ShareStatus?: ShareStatus;
  AssociationCount?: number;
  Arn?: string;
  Name?: string;
  DestinationArn?: string;
  CreatorRequestId?: string;
  CreationTime?: string;
}
export interface ResolverQueryLogConfigAssociation {
  Id?: string;
  ResolverQueryLogConfigId?: string;
  ResourceId?: string;
  Status?: ResolverQueryLogConfigAssociationStatus;
  Error?: ResolverQueryLogConfigAssociationError;
  ErrorMessage?: string;
  CreationTime?: string;
}
export type ResolverQueryLogConfigAssociationError =
  | "None"
  | "DestinationNotFound"
  | "AccessDenied"
  | "InternalServiceError";
export type ResolverQueryLogConfigAssociationErrorMessage = string;

export type ResolverQueryLogConfigAssociationList =
  Array<ResolverQueryLogConfigAssociation>;
export type ResolverQueryLogConfigAssociationStatus =
  | "Creating"
  | "Active"
  | "ActionNeeded"
  | "Deleting"
  | "Failed";
export type ResolverQueryLogConfigList = Array<ResolverQueryLogConfig>;
export type ResolverQueryLogConfigName = string;

export type ResolverQueryLogConfigPolicy = string;

export type ResolverQueryLogConfigStatus =
  | "Creating"
  | "Created"
  | "Deleting"
  | "Failed";
export interface ResolverRule {
  Id?: string;
  CreatorRequestId?: string;
  Arn?: string;
  DomainName?: string;
  Status?: ResolverRuleStatus;
  StatusMessage?: string;
  RuleType?: RuleTypeOption;
  Name?: string;
  TargetIps?: Array<TargetAddress>;
  ResolverEndpointId?: string;
  OwnerId?: string;
  ShareStatus?: ShareStatus;
  CreationTime?: string;
  ModificationTime?: string;
  DelegationRecord?: string;
}
export interface ResolverRuleAssociation {
  Id?: string;
  ResolverRuleId?: string;
  Name?: string;
  VPCId?: string;
  Status?: ResolverRuleAssociationStatus;
  StatusMessage?: string;
}
export type ResolverRuleAssociations = Array<ResolverRuleAssociation>;
export type ResolverRuleAssociationStatus =
  | "Creating"
  | "Complete"
  | "Deleting"
  | "Failed"
  | "Overridden";
export interface ResolverRuleConfig {
  Name?: string;
  TargetIps?: Array<TargetAddress>;
  ResolverEndpointId?: string;
}
export type ResolverRulePolicy = string;

export type ResolverRules = Array<ResolverRule>;
export type ResolverRuleStatus =
  | "Complete"
  | "Deleting"
  | "Updating"
  | "Failed";
export declare class ResourceExistsException extends EffectData.TaggedError(
  "ResourceExistsException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type ResourceId = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export declare class ResourceUnavailableException extends EffectData.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type Rfc3339TimeString = string;

export type RuleTypeOption = "Forward" | "System" | "Recursive" | "Delegate";
export type SecurityGroupIds = Array<string>;
export type ServerNameIndication = string;

export type ServicePrinciple = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type ShareStatus = "NotShared" | "SharedWithMe" | "SharedByMe";
export type SortByKey = string;

export type SortOrder = "Ascending" | "Descending";
export type StatusMessage = string;

export type SubnetId = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TargetAddress {
  Ip?: string;
  Port?: number;
  Ipv6?: string;
  Protocol?: Protocol;
  ServerNameIndication?: string;
}
export type TargetList = Array<TargetAddress>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export declare class UnknownResourceException extends EffectData.TaggedError(
  "UnknownResourceException",
)<{
  readonly Message?: string;
}> {}
export type Unsigned = number;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateFirewallConfigRequest {
  ResourceId: string;
  FirewallFailOpen: FirewallFailOpenStatus;
}
export interface UpdateFirewallConfigResponse {
  FirewallConfig?: FirewallConfig;
}
export interface UpdateFirewallDomainsRequest {
  FirewallDomainListId: string;
  Operation: FirewallDomainUpdateOperation;
  Domains: Array<string>;
}
export interface UpdateFirewallDomainsResponse {
  Id?: string;
  Name?: string;
  Status?: FirewallDomainListStatus;
  StatusMessage?: string;
}
export interface UpdateFirewallRuleGroupAssociationRequest {
  FirewallRuleGroupAssociationId: string;
  Priority?: number;
  MutationProtection?: MutationProtectionStatus;
  Name?: string;
}
export interface UpdateFirewallRuleGroupAssociationResponse {
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
}
export interface UpdateFirewallRuleRequest {
  FirewallRuleGroupId: string;
  FirewallDomainListId?: string;
  FirewallThreatProtectionId?: string;
  Priority?: number;
  Action?: Action;
  BlockResponse?: BlockResponse;
  BlockOverrideDomain?: string;
  BlockOverrideDnsType?: BlockOverrideDnsType;
  BlockOverrideTtl?: number;
  Name?: string;
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction;
  Qtype?: string;
  DnsThreatProtection?: DnsThreatProtection;
  ConfidenceThreshold?: ConfidenceThreshold;
}
export interface UpdateFirewallRuleResponse {
  FirewallRule?: FirewallRule;
}
export interface UpdateIpAddress {
  IpId: string;
  Ipv6: string;
}
export type UpdateIpAddresses = Array<UpdateIpAddress>;
export interface UpdateOutpostResolverRequest {
  Id: string;
  Name?: string;
  InstanceCount?: number;
  PreferredInstanceType?: string;
}
export interface UpdateOutpostResolverResponse {
  OutpostResolver?: OutpostResolver;
}
export interface UpdateResolverConfigRequest {
  ResourceId: string;
  AutodefinedReverseFlag: AutodefinedReverseFlag;
}
export interface UpdateResolverConfigResponse {
  ResolverConfig?: ResolverConfig;
}
export interface UpdateResolverDnssecConfigRequest {
  ResourceId: string;
  Validation: Validation;
}
export interface UpdateResolverDnssecConfigResponse {
  ResolverDNSSECConfig?: ResolverDnssecConfig;
}
export interface UpdateResolverEndpointRequest {
  ResolverEndpointId: string;
  Name?: string;
  ResolverEndpointType?: ResolverEndpointType;
  UpdateIpAddresses?: Array<UpdateIpAddress>;
  Protocols?: Array<Protocol>;
}
export interface UpdateResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint;
}
export interface UpdateResolverRuleRequest {
  ResolverRuleId: string;
  Config: ResolverRuleConfig;
}
export interface UpdateResolverRuleResponse {
  ResolverRule?: ResolverRule;
}
export type Validation = "ENABLE" | "DISABLE" | "USE_LOCAL_RESOURCE_SETTING";
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace AssociateFirewallRuleGroup {
  export type Input = AssociateFirewallRuleGroupRequest;
  export type Output = AssociateFirewallRuleGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateResolverEndpointIpAddress {
  export type Input = AssociateResolverEndpointIpAddressRequest;
  export type Output = AssociateResolverEndpointIpAddressResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateResolverQueryLogConfig {
  export type Input = AssociateResolverQueryLogConfigRequest;
  export type Output = AssociateResolverQueryLogConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateResolverRule {
  export type Input = AssociateResolverRuleRequest;
  export type Output = AssociateResolverRuleResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFirewallDomainList {
  export type Input = CreateFirewallDomainListRequest;
  export type Output = CreateFirewallDomainListResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFirewallRule {
  export type Input = CreateFirewallRuleRequest;
  export type Output = CreateFirewallRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFirewallRuleGroup {
  export type Input = CreateFirewallRuleGroupRequest;
  export type Output = CreateFirewallRuleGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOutpostResolver {
  export type Input = CreateOutpostResolverRequest;
  export type Output = CreateOutpostResolverResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResolverEndpoint {
  export type Input = CreateResolverEndpointRequest;
  export type Output = CreateResolverEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateResolverQueryLogConfig {
  export type Input = CreateResolverQueryLogConfigRequest;
  export type Output = CreateResolverQueryLogConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateResolverRule {
  export type Input = CreateResolverRuleRequest;
  export type Output = CreateResolverRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteFirewallDomainList {
  export type Input = DeleteFirewallDomainListRequest;
  export type Output = DeleteFirewallDomainListResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteFirewallRule {
  export type Input = DeleteFirewallRuleRequest;
  export type Output = DeleteFirewallRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFirewallRuleGroup {
  export type Input = DeleteFirewallRuleGroupRequest;
  export type Output = DeleteFirewallRuleGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOutpostResolver {
  export type Input = DeleteOutpostResolverRequest;
  export type Output = DeleteOutpostResolverResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResolverEndpoint {
  export type Input = DeleteResolverEndpointRequest;
  export type Output = DeleteResolverEndpointResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteResolverQueryLogConfig {
  export type Input = DeleteResolverQueryLogConfigRequest;
  export type Output = DeleteResolverQueryLogConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteResolverRule {
  export type Input = DeleteResolverRuleRequest;
  export type Output = DeleteResolverRuleResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateFirewallRuleGroup {
  export type Input = DisassociateFirewallRuleGroupRequest;
  export type Output = DisassociateFirewallRuleGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateResolverEndpointIpAddress {
  export type Input = DisassociateResolverEndpointIpAddressRequest;
  export type Output = DisassociateResolverEndpointIpAddressResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateResolverQueryLogConfig {
  export type Input = DisassociateResolverQueryLogConfigRequest;
  export type Output = DisassociateResolverQueryLogConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateResolverRule {
  export type Input = DisassociateResolverRuleRequest;
  export type Output = DisassociateResolverRuleResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFirewallConfig {
  export type Input = GetFirewallConfigRequest;
  export type Output = GetFirewallConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFirewallDomainList {
  export type Input = GetFirewallDomainListRequest;
  export type Output = GetFirewallDomainListResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFirewallRuleGroup {
  export type Input = GetFirewallRuleGroupRequest;
  export type Output = GetFirewallRuleGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFirewallRuleGroupAssociation {
  export type Input = GetFirewallRuleGroupAssociationRequest;
  export type Output = GetFirewallRuleGroupAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFirewallRuleGroupPolicy {
  export type Input = GetFirewallRuleGroupPolicyRequest;
  export type Output = GetFirewallRuleGroupPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOutpostResolver {
  export type Input = GetOutpostResolverRequest;
  export type Output = GetOutpostResolverResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResolverConfig {
  export type Input = GetResolverConfigRequest;
  export type Output = GetResolverConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResolverDnssecConfig {
  export type Input = GetResolverDnssecConfigRequest;
  export type Output = GetResolverDnssecConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetResolverEndpoint {
  export type Input = GetResolverEndpointRequest;
  export type Output = GetResolverEndpointResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetResolverQueryLogConfig {
  export type Input = GetResolverQueryLogConfigRequest;
  export type Output = GetResolverQueryLogConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetResolverQueryLogConfigAssociation {
  export type Input = GetResolverQueryLogConfigAssociationRequest;
  export type Output = GetResolverQueryLogConfigAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetResolverQueryLogConfigPolicy {
  export type Input = GetResolverQueryLogConfigPolicyRequest;
  export type Output = GetResolverQueryLogConfigPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace GetResolverRule {
  export type Input = GetResolverRuleRequest;
  export type Output = GetResolverRuleResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetResolverRuleAssociation {
  export type Input = GetResolverRuleAssociationRequest;
  export type Output = GetResolverRuleAssociationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetResolverRulePolicy {
  export type Input = GetResolverRulePolicyRequest;
  export type Output = GetResolverRulePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace ImportFirewallDomains {
  export type Input = ImportFirewallDomainsRequest;
  export type Output = ImportFirewallDomainsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFirewallConfigs {
  export type Input = ListFirewallConfigsRequest;
  export type Output = ListFirewallConfigsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFirewallDomainLists {
  export type Input = ListFirewallDomainListsRequest;
  export type Output = ListFirewallDomainListsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFirewallDomains {
  export type Input = ListFirewallDomainsRequest;
  export type Output = ListFirewallDomainsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFirewallRuleGroupAssociations {
  export type Input = ListFirewallRuleGroupAssociationsRequest;
  export type Output = ListFirewallRuleGroupAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFirewallRuleGroups {
  export type Input = ListFirewallRuleGroupsRequest;
  export type Output = ListFirewallRuleGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFirewallRules {
  export type Input = ListFirewallRulesRequest;
  export type Output = ListFirewallRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOutpostResolvers {
  export type Input = ListOutpostResolversRequest;
  export type Output = ListOutpostResolversResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResolverConfigs {
  export type Input = ListResolverConfigsRequest;
  export type Output = ListResolverConfigsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResolverDnssecConfigs {
  export type Input = ListResolverDnssecConfigsRequest;
  export type Output = ListResolverDnssecConfigsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListResolverEndpointIpAddresses {
  export type Input = ListResolverEndpointIpAddressesRequest;
  export type Output = ListResolverEndpointIpAddressesResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListResolverEndpoints {
  export type Input = ListResolverEndpointsRequest;
  export type Output = ListResolverEndpointsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListResolverQueryLogConfigAssociations {
  export type Input = ListResolverQueryLogConfigAssociationsRequest;
  export type Output = ListResolverQueryLogConfigAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListResolverQueryLogConfigs {
  export type Input = ListResolverQueryLogConfigsRequest;
  export type Output = ListResolverQueryLogConfigsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListResolverRuleAssociations {
  export type Input = ListResolverRuleAssociationsRequest;
  export type Output = ListResolverRuleAssociationsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListResolverRules {
  export type Input = ListResolverRulesRequest;
  export type Output = ListResolverRulesResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutFirewallRuleGroupPolicy {
  export type Input = PutFirewallRuleGroupPolicyRequest;
  export type Output = PutFirewallRuleGroupPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResolverQueryLogConfigPolicy {
  export type Input = PutResolverQueryLogConfigPolicyRequest;
  export type Output = PutResolverQueryLogConfigPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidPolicyDocument
    | InvalidRequestException
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace PutResolverRulePolicy {
  export type Input = PutResolverRulePolicyRequest;
  export type Output = PutResolverRulePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidPolicyDocument
    | UnknownResourceException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | InvalidTagException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFirewallConfig {
  export type Input = UpdateFirewallConfigRequest;
  export type Output = UpdateFirewallConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFirewallDomains {
  export type Input = UpdateFirewallDomainsRequest;
  export type Output = UpdateFirewallDomainsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFirewallRule {
  export type Input = UpdateFirewallRuleRequest;
  export type Output = UpdateFirewallRuleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFirewallRuleGroupAssociation {
  export type Input = UpdateFirewallRuleGroupAssociationRequest;
  export type Output = UpdateFirewallRuleGroupAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOutpostResolver {
  export type Input = UpdateOutpostResolverRequest;
  export type Output = UpdateOutpostResolverResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceErrorException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResolverConfig {
  export type Input = UpdateResolverConfigRequest;
  export type Output = UpdateResolverConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResolverDnssecConfig {
  export type Input = UpdateResolverDnssecConfigRequest;
  export type Output = UpdateResolverDnssecConfigResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateResolverEndpoint {
  export type Input = UpdateResolverEndpointRequest;
  export type Output = UpdateResolverEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateResolverRule {
  export type Input = UpdateResolverRuleRequest;
  export type Output = UpdateResolverRuleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}
