import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSFMS_20180101 {
  associateAdminAccount(
    input: AssociateAdminAccountRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateThirdPartyFirewall(
    input: AssociateThirdPartyFirewallRequest,
  ): Effect.Effect<
    AssociateThirdPartyFirewallResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  batchAssociateResource(
    input: BatchAssociateResourceRequest,
  ): Effect.Effect<
    BatchAssociateResourceResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  batchDisassociateResource(
    input: BatchDisassociateResourceRequest,
  ): Effect.Effect<
    BatchDisassociateResourceResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteAppsList(
    input: DeleteAppsListRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteNotificationChannel(
    input: DeleteNotificationChannelRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteProtocolsList(
    input: DeleteProtocolsListRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteResourceSet(
    input: DeleteResourceSetRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateAdminAccount(
    input: DisassociateAdminAccountRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateThirdPartyFirewall(
    input: DisassociateThirdPartyFirewallRequest,
  ): Effect.Effect<
    DisassociateThirdPartyFirewallResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getAdminAccount(
    input: GetAdminAccountRequest,
  ): Effect.Effect<
    GetAdminAccountResponse,
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getAdminScope(
    input: GetAdminScopeRequest,
  ): Effect.Effect<
    GetAdminScopeResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getAppsList(
    input: GetAppsListRequest,
  ): Effect.Effect<
    GetAppsListResponse,
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getComplianceDetail(
    input: GetComplianceDetailRequest,
  ): Effect.Effect<
    GetComplianceDetailResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getNotificationChannel(
    input: GetNotificationChannelRequest,
  ): Effect.Effect<
    GetNotificationChannelResponse,
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    | InternalErrorException
    | InvalidOperationException
    | InvalidTypeException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getProtectionStatus(
    input: GetProtectionStatusRequest,
  ): Effect.Effect<
    GetProtectionStatusResponse,
    | InternalErrorException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getProtocolsList(
    input: GetProtocolsListRequest,
  ): Effect.Effect<
    GetProtocolsListResponse,
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getResourceSet(
    input: GetResourceSetRequest,
  ): Effect.Effect<
    GetResourceSetResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getThirdPartyFirewallAssociationStatus(
    input: GetThirdPartyFirewallAssociationStatusRequest,
  ): Effect.Effect<
    GetThirdPartyFirewallAssociationStatusResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getViolationDetails(
    input: GetViolationDetailsRequest,
  ): Effect.Effect<
    GetViolationDetailsResponse,
    | InternalErrorException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAdminAccountsForOrganization(
    input: ListAdminAccountsForOrganizationRequest,
  ): Effect.Effect<
    ListAdminAccountsForOrganizationResponse,
    | InternalErrorException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAdminsManagingAccount(
    input: ListAdminsManagingAccountRequest,
  ): Effect.Effect<
    ListAdminsManagingAccountResponse,
    | InternalErrorException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAppsLists(
    input: ListAppsListsRequest,
  ): Effect.Effect<
    ListAppsListsResponse,
    | InternalErrorException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listComplianceStatus(
    input: ListComplianceStatusRequest,
  ): Effect.Effect<
    ListComplianceStatusResponse,
    InternalErrorException | ResourceNotFoundException | CommonAwsError
  >;
  listDiscoveredResources(
    input: ListDiscoveredResourcesRequest,
  ): Effect.Effect<
    ListDiscoveredResourcesResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | CommonAwsError
  >;
  listMemberAccounts(
    input: ListMemberAccountsRequest,
  ): Effect.Effect<
    ListMemberAccountsResponse,
    InternalErrorException | ResourceNotFoundException | CommonAwsError
  >;
  listPolicies(
    input: ListPoliciesRequest,
  ): Effect.Effect<
    ListPoliciesResponse,
    | InternalErrorException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listProtocolsLists(
    input: ListProtocolsListsRequest,
  ): Effect.Effect<
    ListProtocolsListsResponse,
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listResourceSetResources(
    input: ListResourceSetResourcesRequest,
  ): Effect.Effect<
    ListResourceSetResourcesResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listResourceSets(
    input: ListResourceSetsRequest,
  ): Effect.Effect<
    ListResourceSetsResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listThirdPartyFirewallFirewallPolicies(
    input: ListThirdPartyFirewallFirewallPoliciesRequest,
  ): Effect.Effect<
    ListThirdPartyFirewallFirewallPoliciesResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putAdminAccount(
    input: PutAdminAccountRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | CommonAwsError
  >;
  putAppsList(
    input: PutAppsListRequest,
  ): Effect.Effect<
    PutAppsListResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putNotificationChannel(
    input: PutNotificationChannelRequest,
  ): Effect.Effect<
    {},
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putPolicy(
    input: PutPolicyRequest,
  ): Effect.Effect<
    PutPolicyResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putProtocolsList(
    input: PutProtocolsListRequest,
  ): Effect.Effect<
    PutProtocolsListResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  putResourceSet(
    input: PutResourceSetRequest,
  ): Effect.Effect<
    PutResourceSetResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Fms = AWSFMS_20180101;

export type AccountIdList = Array<string>;
export type AccountRoleStatus =
  | "Ready"
  | "Creating"
  | "PendingDeletion"
  | "Deleting"
  | "Deleted";
export interface AccountScope {
  Accounts?: Array<string>;
  AllAccountsEnabled?: boolean;
  ExcludeSpecifiedAccounts?: boolean;
}
export interface ActionTarget {
  ResourceId?: string;
  Description?: string;
}
export interface AdminAccountSummary {
  AdminAccount?: string;
  DefaultAdmin?: boolean;
  Status?: OrganizationStatus;
}
export type AdminAccountSummaryList = Array<AdminAccountSummary>;
export interface AdminScope {
  AccountScope?: AccountScope;
  OrganizationalUnitScope?: OrganizationalUnitScope;
  RegionScope?: RegionScope;
  PolicyTypeScope?: PolicyTypeScope;
}
export interface App {
  AppName: string;
  Protocol: string;
  Port: number;
}
export type AppsList = Array<App>;
export interface AppsListData {
  ListId?: string;
  ListName: string;
  ListUpdateToken?: string;
  CreateTime?: Date | string;
  LastUpdateTime?: Date | string;
  AppsList: Array<App>;
  PreviousAppsList?: Record<string, Array<App>>;
}
export interface AppsListDataSummary {
  ListArn?: string;
  ListId?: string;
  ListName?: string;
  AppsList?: Array<App>;
}
export type AppsListsData = Array<AppsListDataSummary>;
export interface AssociateAdminAccountRequest {
  AdminAccount: string;
}
export interface AssociateThirdPartyFirewallRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
export interface AssociateThirdPartyFirewallResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
}
export type AWSAccountId = string;

export type AWSAccountIdList = Array<string>;
export interface AwsEc2InstanceViolation {
  ViolationTarget?: string;
  AwsEc2NetworkInterfaceViolations?: Array<AwsEc2NetworkInterfaceViolation>;
}
export interface AwsEc2NetworkInterfaceViolation {
  ViolationTarget?: string;
  ViolatingSecurityGroups?: Array<string>;
}
export type AwsEc2NetworkInterfaceViolations =
  Array<AwsEc2NetworkInterfaceViolation>;
export type AWSRegion = string;

export type AWSRegionList = Array<string>;
export interface AwsVPCSecurityGroupViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  PartialMatches?: Array<PartialMatch>;
  PossibleSecurityGroupRemediationActions?: Array<SecurityGroupRemediationAction>;
}
export type Base62Id = string;

export type BasicInteger = number;

export interface BatchAssociateResourceRequest {
  ResourceSetIdentifier: string;
  Items: Array<string>;
}
export interface BatchAssociateResourceResponse {
  ResourceSetIdentifier: string;
  FailedItems: Array<FailedItem>;
}
export interface BatchDisassociateResourceRequest {
  ResourceSetIdentifier: string;
  Items: Array<string>;
}
export interface BatchDisassociateResourceResponse {
  ResourceSetIdentifier: string;
  FailedItems: Array<FailedItem>;
}
export type BooleanObject = boolean;

export type CIDR = string;

export interface ComplianceViolator {
  ResourceId?: string;
  ViolationReason?: ViolationReason;
  ResourceType?: string;
  Metadata?: Record<string, string>;
}
export type ComplianceViolatorMetadata = Record<string, string>;
export type ComplianceViolators = Array<ComplianceViolator>;
export interface CreateNetworkAclAction {
  Description?: string;
  Vpc?: ActionTarget;
  FMSCanRemediate?: boolean;
}
export interface CreateNetworkAclEntriesAction {
  Description?: string;
  NetworkAclId?: ActionTarget;
  NetworkAclEntriesToBeCreated?: Array<EntryDescription>;
  FMSCanRemediate?: boolean;
}
export type CustomerPolicyScopeId = string;

export type CustomerPolicyScopeIdList = Array<string>;
export type CustomerPolicyScopeIdType = "ACCOUNT" | "ORG_UNIT";
export type CustomerPolicyScopeMap = Record<
  CustomerPolicyScopeIdType,
  Array<string>
>;
export type CustomerPolicyStatus = "ACTIVE" | "OUT_OF_ADMIN_SCOPE";
export interface DeleteAppsListRequest {
  ListId: string;
}
export interface DeleteNetworkAclEntriesAction {
  Description?: string;
  NetworkAclId?: ActionTarget;
  NetworkAclEntriesToBeDeleted?: Array<EntryDescription>;
  FMSCanRemediate?: boolean;
}
export interface DeleteNotificationChannelRequest {}
export interface DeletePolicyRequest {
  PolicyId: string;
  DeleteAllPolicyResources?: boolean;
}
export interface DeleteProtocolsListRequest {
  ListId: string;
}
export interface DeleteResourceSetRequest {
  Identifier: string;
}
export type DependentServiceName =
  | "AWSConfig"
  | "AWSWAF"
  | "AWSShieldAdvanced"
  | "AWSVirtualPrivateCloud";
export type Description = string;

export type DestinationType = "IPV4" | "IPV6" | "PrefixList";
export type DetailedInfo = string;

export interface DisassociateAdminAccountRequest {}
export interface DisassociateThirdPartyFirewallRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
export interface DisassociateThirdPartyFirewallResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
}
export interface DiscoveredResource {
  URI?: string;
  AccountId?: string;
  Type?: string;
  Name?: string;
}
export type DiscoveredResourceList = Array<DiscoveredResource>;
export interface DnsDuplicateRuleGroupViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
}
export interface DnsRuleGroupLimitExceededViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  NumberOfRuleGroupsAlreadyAssociated?: number;
}
export type DnsRuleGroupPriorities = Array<number>;
export type DnsRuleGroupPriority = number;

export interface DnsRuleGroupPriorityConflictViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  ConflictingPriority?: number;
  ConflictingPolicyId?: string;
  UnavailablePriorities?: Array<number>;
}
export interface EC2AssociateRouteTableAction {
  Description?: string;
  RouteTableId: ActionTarget;
  SubnetId?: ActionTarget;
  GatewayId?: ActionTarget;
}
export interface EC2CopyRouteTableAction {
  Description?: string;
  VpcId: ActionTarget;
  RouteTableId: ActionTarget;
}
export interface EC2CreateRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  VpcEndpointId?: ActionTarget;
  GatewayId?: ActionTarget;
  RouteTableId: ActionTarget;
}
export interface EC2CreateRouteTableAction {
  Description?: string;
  VpcId: ActionTarget;
}
export interface EC2DeleteRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  RouteTableId: ActionTarget;
}
export interface EC2ReplaceRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  GatewayId?: ActionTarget;
  RouteTableId: ActionTarget;
}
export interface EC2ReplaceRouteTableAssociationAction {
  Description?: string;
  AssociationId: ActionTarget;
  RouteTableId: ActionTarget;
}
export type EntriesDescription = Array<EntryDescription>;
export type EntriesWithConflicts = Array<EntryDescription>;
export interface EntryDescription {
  EntryDetail?: NetworkAclEntry;
  EntryRuleNumber?: number;
  EntryType?: EntryType;
}
export type EntryType =
  | "FMSManagedFirstEntry"
  | "FMSManagedLastEntry"
  | "CustomEntry";
export interface EntryViolation {
  ExpectedEntry?: EntryDescription;
  ExpectedEvaluationOrder?: string;
  ActualEvaluationOrder?: string;
  EntryAtExpectedEvaluationOrder?: EntryDescription;
  EntriesWithConflicts?: Array<EntryDescription>;
  EntryViolationReasons?: Array<EntryViolationReason>;
}
export type EntryViolationReason =
  | "MissingExpectedEntry"
  | "IncorrectEntryOrder"
  | "EntryConflict";
export type EntryViolationReasons = Array<EntryViolationReason>;
export type EntryViolations = Array<EntryViolation>;
export type ErrorMessage = string;

export interface EvaluationResult {
  ComplianceStatus?: PolicyComplianceStatusType;
  ViolatorCount?: number;
  EvaluationLimitExceeded?: boolean;
}
export type EvaluationResults = Array<EvaluationResult>;
export interface ExpectedRoute {
  IpV4Cidr?: string;
  PrefixListId?: string;
  IpV6Cidr?: string;
  ContributingSubnets?: Array<string>;
  AllowedTargets?: Array<string>;
  RouteTableId?: string;
}
export type ExpectedRoutes = Array<ExpectedRoute>;
export interface FailedItem {
  URI?: string;
  Reason?: FailedItemReason;
}
export type FailedItemList = Array<FailedItem>;
export type FailedItemReason =
  | "NotValidArn"
  | "NotValidPartition"
  | "NotValidRegion"
  | "NotValidService"
  | "NotValidResourceType"
  | "NotValidAccountId";
export type FirewallDeploymentModel = "CENTRALIZED" | "DISTRIBUTED";
export type FirewallPolicyId = string;

export type FirewallPolicyName = string;

export interface FirewallSubnetIsOutOfScopeViolation {
  FirewallSubnetId?: string;
  VpcId?: string;
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
  VpcEndpointId?: string;
}
export interface FirewallSubnetMissingVPCEndpointViolation {
  FirewallSubnetId?: string;
  VpcId?: string;
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
}
export interface FMSPolicyUpdateFirewallCreationConfigAction {
  Description?: string;
  FirewallCreationConfig?: string;
}
export interface GetAdminAccountRequest {}
export interface GetAdminAccountResponse {
  AdminAccount?: string;
  RoleStatus?: AccountRoleStatus;
}
export interface GetAdminScopeRequest {
  AdminAccount: string;
}
export interface GetAdminScopeResponse {
  AdminScope?: AdminScope;
  Status?: OrganizationStatus;
}
export interface GetAppsListRequest {
  ListId: string;
  DefaultList?: boolean;
}
export interface GetAppsListResponse {
  AppsList?: AppsListData;
  AppsListArn?: string;
}
export interface GetComplianceDetailRequest {
  PolicyId: string;
  MemberAccount: string;
}
export interface GetComplianceDetailResponse {
  PolicyComplianceDetail?: PolicyComplianceDetail;
}
export interface GetNotificationChannelRequest {}
export interface GetNotificationChannelResponse {
  SnsTopicArn?: string;
  SnsRoleName?: string;
}
export interface GetPolicyRequest {
  PolicyId: string;
}
export interface GetPolicyResponse {
  Policy?: Policy;
  PolicyArn?: string;
}
export interface GetProtectionStatusRequest {
  PolicyId: string;
  MemberAccountId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetProtectionStatusResponse {
  AdminAccountId?: string;
  ServiceType?: SecurityServiceType;
  Data?: string;
  NextToken?: string;
}
export interface GetProtocolsListRequest {
  ListId: string;
  DefaultList?: boolean;
}
export interface GetProtocolsListResponse {
  ProtocolsList?: ProtocolsListData;
  ProtocolsListArn?: string;
}
export interface GetResourceSetRequest {
  Identifier: string;
}
export interface GetResourceSetResponse {
  ResourceSet: ResourceSet;
  ResourceSetArn: string;
}
export interface GetThirdPartyFirewallAssociationStatusRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
export interface GetThirdPartyFirewallAssociationStatusResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
  MarketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatus;
}
export interface GetViolationDetailsRequest {
  PolicyId: string;
  MemberAccount: string;
  ResourceId: string;
  ResourceType: string;
}
export interface GetViolationDetailsResponse {
  ViolationDetail?: ViolationDetail;
}
export type Identifier = string;

export type IdentifierList = Array<string>;
export type IntegerObject = number;

export type IntegerObjectMinimum0 = number;

export declare class InternalErrorException extends EffectData.TaggedError(
  "InternalErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
}> {}
export interface InvalidNetworkAclEntriesViolation {
  Vpc?: string;
  Subnet?: string;
  SubnetAvailabilityZone?: string;
  CurrentAssociatedNetworkAcl?: string;
  EntryViolations?: Array<EntryViolation>;
}
export declare class InvalidOperationException extends EffectData.TaggedError(
  "InvalidOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTypeException extends EffectData.TaggedError(
  "InvalidTypeException",
)<{
  readonly Message?: string;
}> {}
export type IPPortNumber = number;

export type IPPortNumberInteger = number;

export type IssueInfoMap = Record<DependentServiceName, string>;
export type LengthBoundedNonEmptyString = string;

export type LengthBoundedString = string;

export type LengthBoundedStringList = Array<string>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAdminAccountsForOrganizationRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAdminAccountsForOrganizationResponse {
  AdminAccounts?: Array<AdminAccountSummary>;
  NextToken?: string;
}
export interface ListAdminsManagingAccountRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAdminsManagingAccountResponse {
  AdminAccounts?: Array<string>;
  NextToken?: string;
}
export interface ListAppsListsRequest {
  DefaultLists?: boolean;
  NextToken?: string;
  MaxResults: number;
}
export interface ListAppsListsResponse {
  AppsLists?: Array<AppsListDataSummary>;
  NextToken?: string;
}
export interface ListComplianceStatusRequest {
  PolicyId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListComplianceStatusResponse {
  PolicyComplianceStatusList?: Array<PolicyComplianceStatus>;
  NextToken?: string;
}
export interface ListDiscoveredResourcesRequest {
  MemberAccountIds: Array<string>;
  ResourceType: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDiscoveredResourcesResponse {
  Items?: Array<DiscoveredResource>;
  NextToken?: string;
}
export type ListId = string;

export interface ListMemberAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMemberAccountsResponse {
  MemberAccounts?: Array<string>;
  NextToken?: string;
}
export interface ListPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPoliciesResponse {
  PolicyList?: Array<PolicySummary>;
  NextToken?: string;
}
export interface ListProtocolsListsRequest {
  DefaultLists?: boolean;
  NextToken?: string;
  MaxResults: number;
}
export interface ListProtocolsListsResponse {
  ProtocolsLists?: Array<ProtocolsListDataSummary>;
  NextToken?: string;
}
export interface ListResourceSetResourcesRequest {
  Identifier: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourceSetResourcesResponse {
  Items: Array<Resource>;
  NextToken?: string;
}
export interface ListResourceSetsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListResourceSetsResponse {
  ResourceSets?: Array<ResourceSetSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  TagList?: Array<Tag>;
}
export interface ListThirdPartyFirewallFirewallPoliciesRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
  NextToken?: string;
  MaxResults: number;
}
export interface ListThirdPartyFirewallFirewallPoliciesResponse {
  ThirdPartyFirewallFirewallPolicies?: Array<ThirdPartyFirewallFirewallPolicy>;
  NextToken?: string;
}
export type ManagedServiceData = string;

export type MarketplaceSubscriptionOnboardingStatus =
  | "NO_SUBSCRIPTION"
  | "NOT_COMPLETE"
  | "COMPLETE";
export type MemberAccounts = Array<string>;
export type Name = string;

export interface NetworkAclCommonPolicy {
  NetworkAclEntrySet: NetworkAclEntrySet;
}
export type NetworkAclEntries = Array<NetworkAclEntry>;
export interface NetworkAclEntry {
  IcmpTypeCode?: NetworkAclIcmpTypeCode;
  Protocol: string;
  PortRange?: NetworkAclPortRange;
  CidrBlock?: string;
  Ipv6CidrBlock?: string;
  RuleAction: NetworkAclRuleAction;
  Egress: boolean;
}
export interface NetworkAclEntrySet {
  FirstEntries?: Array<NetworkAclEntry>;
  ForceRemediateForFirstEntries: boolean;
  LastEntries?: Array<NetworkAclEntry>;
  ForceRemediateForLastEntries: boolean;
}
export interface NetworkAclIcmpTypeCode {
  Code?: number;
  Type?: number;
}
export interface NetworkAclPortRange {
  From?: number;
  To?: number;
}
export type NetworkAclRuleAction = "ALLOW" | "DENY";
export type NetworkFirewallAction = string;

export type NetworkFirewallActionList = Array<string>;
export interface NetworkFirewallBlackHoleRouteDetectedViolation {
  ViolationTarget?: string;
  RouteTableId?: string;
  VpcId?: string;
  ViolatingRoutes?: Array<Route>;
}
export interface NetworkFirewallInternetTrafficNotInspectedViolation {
  SubnetId?: string;
  SubnetAvailabilityZone?: string;
  RouteTableId?: string;
  ViolatingRoutes?: Array<Route>;
  IsRouteTableUsedInDifferentAZ?: boolean;
  CurrentFirewallSubnetRouteTable?: string;
  ExpectedFirewallEndpoint?: string;
  FirewallSubnetId?: string;
  ExpectedFirewallSubnetRoutes?: Array<ExpectedRoute>;
  ActualFirewallSubnetRoutes?: Array<Route>;
  InternetGatewayId?: string;
  CurrentInternetGatewayRouteTable?: string;
  ExpectedInternetGatewayRoutes?: Array<ExpectedRoute>;
  ActualInternetGatewayRoutes?: Array<Route>;
  VpcId?: string;
}
export interface NetworkFirewallInvalidRouteConfigurationViolation {
  AffectedSubnets?: Array<string>;
  RouteTableId?: string;
  IsRouteTableUsedInDifferentAZ?: boolean;
  ViolatingRoute?: Route;
  CurrentFirewallSubnetRouteTable?: string;
  ExpectedFirewallEndpoint?: string;
  ActualFirewallEndpoint?: string;
  ExpectedFirewallSubnetId?: string;
  ActualFirewallSubnetId?: string;
  ExpectedFirewallSubnetRoutes?: Array<ExpectedRoute>;
  ActualFirewallSubnetRoutes?: Array<Route>;
  InternetGatewayId?: string;
  CurrentInternetGatewayRouteTable?: string;
  ExpectedInternetGatewayRoutes?: Array<ExpectedRoute>;
  ActualInternetGatewayRoutes?: Array<Route>;
  VpcId?: string;
}
export interface NetworkFirewallMissingExpectedRoutesViolation {
  ViolationTarget?: string;
  ExpectedRoutes?: Array<ExpectedRoute>;
  VpcId?: string;
}
export interface NetworkFirewallMissingExpectedRTViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  CurrentRouteTable?: string;
  ExpectedRouteTable?: string;
}
export interface NetworkFirewallMissingFirewallViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
export interface NetworkFirewallMissingSubnetViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
export type NetworkFirewallOverrideAction = "DROP_TO_ALERT";
export interface NetworkFirewallPolicy {
  FirewallDeploymentModel?: FirewallDeploymentModel;
}
export interface NetworkFirewallPolicyDescription {
  StatelessRuleGroups?: Array<StatelessRuleGroup>;
  StatelessDefaultActions?: Array<string>;
  StatelessFragmentDefaultActions?: Array<string>;
  StatelessCustomActions?: Array<string>;
  StatefulRuleGroups?: Array<StatefulRuleGroup>;
  StatefulDefaultActions?: Array<string>;
  StatefulEngineOptions?: StatefulEngineOptions;
}
export interface NetworkFirewallPolicyModifiedViolation {
  ViolationTarget?: string;
  CurrentPolicyDescription?: NetworkFirewallPolicyDescription;
  ExpectedPolicyDescription?: NetworkFirewallPolicyDescription;
}
export type NetworkFirewallResourceName = string;

export interface NetworkFirewallStatefulRuleGroupOverride {
  Action?: NetworkFirewallOverrideAction;
}
export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
  FirewallSubnetId?: string;
  ViolatingRoutes?: Array<Route>;
  RouteTableId?: string;
  FirewallEndpoint?: string;
  VpcId?: string;
}
export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
  GatewayId?: string;
  ViolatingRoutes?: Array<Route>;
  RouteTableId?: string;
  VpcId?: string;
}
export type OrderedRemediationActions = Array<RemediationActionWithOrder>;
export type OrganizationalUnitId = string;

export type OrganizationalUnitIdList = Array<string>;
export interface OrganizationalUnitScope {
  OrganizationalUnits?: Array<string>;
  AllOrganizationalUnitsEnabled?: boolean;
  ExcludeSpecifiedOrganizationalUnits?: boolean;
}
export type OrganizationStatus =
  | "Onboarding"
  | "OnboardingComplete"
  | "Offboarding"
  | "OffboardingComplete";
export type PaginationMaxResults = number;

export type PaginationToken = string;

export interface PartialMatch {
  Reference?: string;
  TargetViolationReasons?: Array<string>;
}
export type PartialMatches = Array<PartialMatch>;
export interface Policy {
  PolicyId?: string;
  PolicyName: string;
  PolicyUpdateToken?: string;
  SecurityServicePolicyData: SecurityServicePolicyData;
  ResourceType: string;
  ResourceTypeList?: Array<string>;
  ResourceTags?: Array<ResourceTag>;
  ExcludeResourceTags: boolean;
  RemediationEnabled: boolean;
  DeleteUnusedFMManagedResources?: boolean;
  IncludeMap?: Record<CustomerPolicyScopeIdType, Array<string>>;
  ExcludeMap?: Record<CustomerPolicyScopeIdType, Array<string>>;
  ResourceSetIds?: Array<string>;
  PolicyDescription?: string;
  PolicyStatus?: CustomerPolicyStatus;
  ResourceTagLogicalOperator?: ResourceTagLogicalOperator;
}
export interface PolicyComplianceDetail {
  PolicyOwner?: string;
  PolicyId?: string;
  MemberAccount?: string;
  Violators?: Array<ComplianceViolator>;
  EvaluationLimitExceeded?: boolean;
  ExpiredAt?: Date | string;
  IssueInfoMap?: Record<DependentServiceName, string>;
}
export interface PolicyComplianceStatus {
  PolicyOwner?: string;
  PolicyId?: string;
  PolicyName?: string;
  MemberAccount?: string;
  EvaluationResults?: Array<EvaluationResult>;
  LastUpdated?: Date | string;
  IssueInfoMap?: Record<DependentServiceName, string>;
}
export type PolicyComplianceStatusList = Array<PolicyComplianceStatus>;
export type PolicyComplianceStatusType = "Compliant" | "NonCompliant";
export type PolicyId = string;

export interface PolicyOption {
  NetworkFirewallPolicy?: NetworkFirewallPolicy;
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
  NetworkAclCommonPolicy?: NetworkAclCommonPolicy;
}
export interface PolicySummary {
  PolicyArn?: string;
  PolicyId?: string;
  PolicyName?: string;
  ResourceType?: string;
  SecurityServiceType?: SecurityServiceType;
  RemediationEnabled?: boolean;
  DeleteUnusedFMManagedResources?: boolean;
  PolicyStatus?: CustomerPolicyStatus;
}
export type PolicySummaryList = Array<PolicySummary>;
export interface PolicyTypeScope {
  PolicyTypes?: Array<SecurityServiceType>;
  AllPolicyTypesEnabled?: boolean;
}
export type PolicyUpdateToken = string;

export interface PossibleRemediationAction {
  Description?: string;
  OrderedRemediationActions: Array<RemediationActionWithOrder>;
  IsDefaultAction?: boolean;
}
export type PossibleRemediationActionList = Array<PossibleRemediationAction>;
export interface PossibleRemediationActions {
  Description?: string;
  Actions?: Array<PossibleRemediationAction>;
}
export type PreviousAppsList = Record<string, Array<App>>;
export type PreviousListVersion = string;

export type PreviousProtocolsList = Record<string, Array<string>>;
export type PriorityNumber = number;

export type ProtectionData = string;

export type Protocol = string;

export type ProtocolsList = Array<string>;
export interface ProtocolsListData {
  ListId?: string;
  ListName: string;
  ListUpdateToken?: string;
  CreateTime?: Date | string;
  LastUpdateTime?: Date | string;
  ProtocolsList: Array<string>;
  PreviousProtocolsList?: Record<string, Array<string>>;
}
export interface ProtocolsListDataSummary {
  ListArn?: string;
  ListId?: string;
  ListName?: string;
  ProtocolsList?: Array<string>;
}
export type ProtocolsListsData = Array<ProtocolsListDataSummary>;
export interface PutAdminAccountRequest {
  AdminAccount: string;
  AdminScope?: AdminScope;
}
export interface PutAppsListRequest {
  AppsList: AppsListData;
  TagList?: Array<Tag>;
}
export interface PutAppsListResponse {
  AppsList?: AppsListData;
  AppsListArn?: string;
}
export interface PutNotificationChannelRequest {
  SnsTopicArn: string;
  SnsRoleName: string;
}
export interface PutPolicyRequest {
  Policy: Policy;
  TagList?: Array<Tag>;
}
export interface PutPolicyResponse {
  Policy?: Policy;
  PolicyArn?: string;
}
export interface PutProtocolsListRequest {
  ProtocolsList: ProtocolsListData;
  TagList?: Array<Tag>;
}
export interface PutProtocolsListResponse {
  ProtocolsList?: ProtocolsListData;
  ProtocolsListArn?: string;
}
export interface PutResourceSetRequest {
  ResourceSet: ResourceSet;
  TagList?: Array<Tag>;
}
export interface PutResourceSetResponse {
  ResourceSet: ResourceSet;
  ResourceSetArn: string;
}
export type ReferenceRule = string;

export interface RegionScope {
  Regions?: Array<string>;
  AllRegionsEnabled?: boolean;
}
export interface RemediationAction {
  Description?: string;
  EC2CreateRouteAction?: EC2CreateRouteAction;
  EC2ReplaceRouteAction?: EC2ReplaceRouteAction;
  EC2DeleteRouteAction?: EC2DeleteRouteAction;
  EC2CopyRouteTableAction?: EC2CopyRouteTableAction;
  EC2ReplaceRouteTableAssociationAction?: EC2ReplaceRouteTableAssociationAction;
  EC2AssociateRouteTableAction?: EC2AssociateRouteTableAction;
  EC2CreateRouteTableAction?: EC2CreateRouteTableAction;
  FMSPolicyUpdateFirewallCreationConfigAction?: FMSPolicyUpdateFirewallCreationConfigAction;
  CreateNetworkAclAction?: CreateNetworkAclAction;
  ReplaceNetworkAclAssociationAction?: ReplaceNetworkAclAssociationAction;
  CreateNetworkAclEntriesAction?: CreateNetworkAclEntriesAction;
  DeleteNetworkAclEntriesAction?: DeleteNetworkAclEntriesAction;
}
export type RemediationActionDescription = string;

export type RemediationActionType = "Remove" | "Modify";
export interface RemediationActionWithOrder {
  RemediationAction?: RemediationAction;
  Order?: number;
}
export interface ReplaceNetworkAclAssociationAction {
  Description?: string;
  AssociationId?: ActionTarget;
  NetworkAclId?: ActionTarget;
  FMSCanRemediate?: boolean;
}
export interface Resource {
  URI: string;
  AccountId?: string;
}
export type ResourceArn = string;

export type ResourceArnList = Array<string>;
export type ResourceCount = number;

export type ResourceDescription = string;

export type ResourceId = string;

export type ResourceIdList = Array<string>;
export type ResourceList = Array<Resource>;
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceSet {
  Id?: string;
  Name: string;
  Description?: string;
  UpdateToken?: string;
  ResourceTypeList: Array<string>;
  LastUpdateTime?: Date | string;
  ResourceSetStatus?: ResourceSetStatus;
}
export type ResourceSetIds = Array<string>;
export type ResourceSetStatus = "ACTIVE" | "OUT_OF_ADMIN_SCOPE";
export interface ResourceSetSummary {
  Id?: string;
  Name?: string;
  Description?: string;
  LastUpdateTime?: Date | string;
  ResourceSetStatus?: ResourceSetStatus;
}
export type ResourceSetSummaryList = Array<ResourceSetSummary>;
export interface ResourceTag {
  Key: string;
  Value?: string;
}
export type ResourceTagKey = string;

export type ResourceTagLogicalOperator = "AND" | "OR";
export type ResourceTags = Array<ResourceTag>;
export type ResourceTagValue = string;

export type ResourceType = string;

export type ResourceTypeList = Array<string>;
export interface ResourceViolation {
  AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation;
  AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;
  AwsEc2InstanceViolation?: AwsEc2InstanceViolation;
  NetworkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;
  NetworkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;
  NetworkFirewallMissingExpectedRTViolation?: NetworkFirewallMissingExpectedRTViolation;
  NetworkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;
  NetworkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;
  NetworkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;
  NetworkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;
  NetworkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;
  NetworkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;
  NetworkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;
  DnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;
  DnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;
  DnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;
  FirewallSubnetIsOutOfScopeViolation?: FirewallSubnetIsOutOfScopeViolation;
  RouteHasOutOfScopeEndpointViolation?: RouteHasOutOfScopeEndpointViolation;
  ThirdPartyFirewallMissingFirewallViolation?: ThirdPartyFirewallMissingFirewallViolation;
  ThirdPartyFirewallMissingSubnetViolation?: ThirdPartyFirewallMissingSubnetViolation;
  ThirdPartyFirewallMissingExpectedRouteTableViolation?: ThirdPartyFirewallMissingExpectedRouteTableViolation;
  FirewallSubnetMissingVPCEndpointViolation?: FirewallSubnetMissingVPCEndpointViolation;
  InvalidNetworkAclEntriesViolation?: InvalidNetworkAclEntriesViolation;
  PossibleRemediationActions?: PossibleRemediationActions;
  WebACLHasIncompatibleConfigurationViolation?: WebACLHasIncompatibleConfigurationViolation;
  WebACLHasOutOfScopeResourcesViolation?: WebACLHasOutOfScopeResourcesViolation;
}
export type ResourceViolations = Array<ResourceViolation>;
export interface Route {
  DestinationType?: DestinationType;
  TargetType?: TargetType;
  Destination?: string;
  Target?: string;
}
export interface RouteHasOutOfScopeEndpointViolation {
  SubnetId?: string;
  VpcId?: string;
  RouteTableId?: string;
  ViolatingRoutes?: Array<Route>;
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
  CurrentFirewallSubnetRouteTable?: string;
  FirewallSubnetId?: string;
  FirewallSubnetRoutes?: Array<Route>;
  InternetGatewayId?: string;
  CurrentInternetGatewayRouteTable?: string;
  InternetGatewayRoutes?: Array<Route>;
}
export type Routes = Array<Route>;
export type RuleOrder = "STRICT_ORDER" | "DEFAULT_ACTION_ORDER";
export interface SecurityGroupRemediationAction {
  RemediationActionType?: RemediationActionType;
  Description?: string;
  RemediationResult?: SecurityGroupRuleDescription;
  IsDefaultAction?: boolean;
}
export type SecurityGroupRemediationActions =
  Array<SecurityGroupRemediationAction>;
export interface SecurityGroupRuleDescription {
  IPV4Range?: string;
  IPV6Range?: string;
  PrefixListId?: string;
  Protocol?: string;
  FromPort?: number;
  ToPort?: number;
}
export interface SecurityServicePolicyData {
  Type: SecurityServiceType;
  ManagedServiceData?: string;
  PolicyOption?: PolicyOption;
}
export type SecurityServiceType =
  | "WAF"
  | "WAFV2"
  | "SHIELD_ADVANCED"
  | "SECURITY_GROUPS_COMMON"
  | "SECURITY_GROUPS_CONTENT_AUDIT"
  | "SECURITY_GROUPS_USAGE_AUDIT"
  | "NETWORK_FIREWALL"
  | "DNS_FIREWALL"
  | "THIRD_PARTY_FIREWALL"
  | "IMPORT_NETWORK_FIREWALL"
  | "NETWORK_ACL_COMMON";
export type SecurityServiceTypeList = Array<SecurityServiceType>;
export interface StatefulEngineOptions {
  RuleOrder?: RuleOrder;
  StreamExceptionPolicy?: StreamExceptionPolicy;
}
export interface StatefulRuleGroup {
  RuleGroupName?: string;
  ResourceId?: string;
  Priority?: number;
  Override?: NetworkFirewallStatefulRuleGroupOverride;
}
export type StatefulRuleGroupList = Array<StatefulRuleGroup>;
export interface StatelessRuleGroup {
  RuleGroupName?: string;
  ResourceId?: string;
  Priority?: number;
}
export type StatelessRuleGroupList = Array<StatelessRuleGroup>;
export type StatelessRuleGroupPriority = number;

export type StreamExceptionPolicy =
  | "DROP"
  | "CONTINUE"
  | "REJECT"
  | "FMS_IGNORE";
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  TagList: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TargetType =
  | "Gateway"
  | "CarrierGateway"
  | "Instance"
  | "LocalGateway"
  | "NatGateway"
  | "NetworkInterface"
  | "VPCEndpoint"
  | "VPCPeeringConnection"
  | "EgressOnlyInternetGateway"
  | "TransitGateway";
export type TargetViolationReason = string;

export type TargetViolationReasons = Array<string>;
export type ThirdPartyFirewall =
  | "PALO_ALTO_NETWORKS_CLOUD_NGFW"
  | "FORTIGATE_CLOUD_NATIVE_FIREWALL";
export type ThirdPartyFirewallAssociationStatus =
  | "ONBOARDING"
  | "ONBOARD_COMPLETE"
  | "OFFBOARDING"
  | "OFFBOARD_COMPLETE"
  | "NOT_EXIST";
export type ThirdPartyFirewallFirewallPolicies =
  Array<ThirdPartyFirewallFirewallPolicy>;
export interface ThirdPartyFirewallFirewallPolicy {
  FirewallPolicyId?: string;
  FirewallPolicyName?: string;
}
export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  CurrentRouteTable?: string;
  ExpectedRouteTable?: string;
}
export interface ThirdPartyFirewallMissingFirewallViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
export interface ThirdPartyFirewallMissingSubnetViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
export interface ThirdPartyFirewallPolicy {
  FirewallDeploymentModel?: FirewallDeploymentModel;
}
export type TimeStamp = Date | string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdateToken = string;

export interface ViolationDetail {
  PolicyId: string;
  MemberAccount: string;
  ResourceId: string;
  ResourceType: string;
  ResourceViolations: Array<ResourceViolation>;
  ResourceTags?: Array<Tag>;
  ResourceDescription?: string;
}
export type ViolationReason =
  | "WebAclMissingRuleGroup"
  | "ResourceMissingWebAcl"
  | "ResourceIncorrectWebAcl"
  | "ResourceMissingShieldProtection"
  | "ResourceMissingWebaclOrShieldProtection"
  | "ResourceMissingSecurityGroup"
  | "ResourceViolatesAuditSecurityGroup"
  | "SecurityGroupUnused"
  | "SecurityGroupRedundant"
  | "FMSCreatedSecurityGroupEdited"
  | "MissingFirewall"
  | "MissingFirewallSubnetInAZ"
  | "MissingExpectedRouteTable"
  | "NetworkFirewallPolicyModified"
  | "FirewallSubnetIsOutOfScope"
  | "InternetGatewayMissingExpectedRoute"
  | "FirewallSubnetMissingExpectedRoute"
  | "UnexpectedFirewallRoutes"
  | "UnexpectedTargetGatewayRoutes"
  | "TrafficInspectionCrossesAZBoundary"
  | "InvalidRouteConfiguration"
  | "MissingTargetGateway"
  | "InternetTrafficNotInspected"
  | "BlackHoleRouteDetected"
  | "BlackHoleRouteDetectedInFirewallSubnet"
  | "ResourceMissingDnsFirewall"
  | "RouteHasOutOfScopeEndpoint"
  | "FirewallSubnetMissingVPCEndpoint"
  | "InvalidNetworkAclEntry"
  | "WebACLConfigurationOrScopeOfUse";
export type ViolationTarget = string;

export interface WebACLHasIncompatibleConfigurationViolation {
  WebACLArn?: string;
  Description?: string;
}
export interface WebACLHasOutOfScopeResourcesViolation {
  WebACLArn?: string;
  OutOfScopeResourceList?: Array<string>;
}
export declare namespace AssociateAdminAccount {
  export type Input = AssociateAdminAccountRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateThirdPartyFirewall {
  export type Input = AssociateThirdPartyFirewallRequest;
  export type Output = AssociateThirdPartyFirewallResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchAssociateResource {
  export type Input = BatchAssociateResourceRequest;
  export type Output = BatchAssociateResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchDisassociateResource {
  export type Input = BatchDisassociateResourceRequest;
  export type Output = BatchDisassociateResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteAppsList {
  export type Input = DeleteAppsListRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteNotificationChannel {
  export type Input = DeleteNotificationChannelRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteProtocolsList {
  export type Input = DeleteProtocolsListRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteResourceSet {
  export type Input = DeleteResourceSetRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateAdminAccount {
  export type Input = DisassociateAdminAccountRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateThirdPartyFirewall {
  export type Input = DisassociateThirdPartyFirewallRequest;
  export type Output = DisassociateThirdPartyFirewallResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAdminAccount {
  export type Input = GetAdminAccountRequest;
  export type Output = GetAdminAccountResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAdminScope {
  export type Input = GetAdminScopeRequest;
  export type Output = GetAdminScopeResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAppsList {
  export type Input = GetAppsListRequest;
  export type Output = GetAppsListResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetComplianceDetail {
  export type Input = GetComplianceDetailRequest;
  export type Output = GetComplianceDetailResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetNotificationChannel {
  export type Input = GetNotificationChannelRequest;
  export type Output = GetNotificationChannelResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = GetPolicyResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | InvalidTypeException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetProtectionStatus {
  export type Input = GetProtectionStatusRequest;
  export type Output = GetProtectionStatusResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetProtocolsList {
  export type Input = GetProtocolsListRequest;
  export type Output = GetProtocolsListResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetResourceSet {
  export type Input = GetResourceSetRequest;
  export type Output = GetResourceSetResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetThirdPartyFirewallAssociationStatus {
  export type Input = GetThirdPartyFirewallAssociationStatusRequest;
  export type Output = GetThirdPartyFirewallAssociationStatusResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetViolationDetails {
  export type Input = GetViolationDetailsRequest;
  export type Output = GetViolationDetailsResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAdminAccountsForOrganization {
  export type Input = ListAdminAccountsForOrganizationRequest;
  export type Output = ListAdminAccountsForOrganizationResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAdminsManagingAccount {
  export type Input = ListAdminsManagingAccountRequest;
  export type Output = ListAdminsManagingAccountResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAppsLists {
  export type Input = ListAppsListsRequest;
  export type Output = ListAppsListsResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListComplianceStatus {
  export type Input = ListComplianceStatusRequest;
  export type Output = ListComplianceStatusResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListDiscoveredResources {
  export type Input = ListDiscoveredResourcesRequest;
  export type Output = ListDiscoveredResourcesResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | CommonAwsError;
}

export declare namespace ListMemberAccounts {
  export type Input = ListMemberAccountsRequest;
  export type Output = ListMemberAccountsResponse;
  export type Error =
    | InternalErrorException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPolicies {
  export type Input = ListPoliciesRequest;
  export type Output = ListPoliciesResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListProtocolsLists {
  export type Input = ListProtocolsListsRequest;
  export type Output = ListProtocolsListsResponse;
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListResourceSetResources {
  export type Input = ListResourceSetResourcesRequest;
  export type Output = ListResourceSetResourcesResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListResourceSets {
  export type Input = ListResourceSetsRequest;
  export type Output = ListResourceSetsResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListThirdPartyFirewallFirewallPolicies {
  export type Input = ListThirdPartyFirewallFirewallPoliciesRequest;
  export type Output = ListThirdPartyFirewallFirewallPoliciesResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutAdminAccount {
  export type Input = PutAdminAccountRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace PutAppsList {
  export type Input = PutAppsListRequest;
  export type Output = PutAppsListResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutNotificationChannel {
  export type Input = PutNotificationChannelRequest;
  export type Output = {};
  export type Error =
    | InternalErrorException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutPolicy {
  export type Input = PutPolicyRequest;
  export type Output = PutPolicyResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | InvalidTypeException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutProtocolsList {
  export type Input = PutProtocolsListRequest;
  export type Output = PutProtocolsListResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace PutResourceSet {
  export type Input = PutResourceSetRequest;
  export type Output = PutResourceSetResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalErrorException
    | InvalidInputException
    | InvalidOperationException
    | ResourceNotFoundException
    | CommonAwsError;
}
