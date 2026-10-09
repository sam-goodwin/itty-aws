import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "FMS", serviceShapeName: "AWSFMS_20180101" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "fms" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-01-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://fms-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://fms-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://fms.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://fms.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalErrorException>()("InternalErrorException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError) {}
export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()("InvalidInputException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidOperationException
  extends /*@__PURE__*/ S.TaggedError<InvalidOperationException>()("InvalidOperationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidTypeException
  extends /*@__PURE__*/ S.TaggedError<InvalidTypeException>()("InvalidTypeException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type AWSAccountId = string;
export interface AssociateAdminAccountRequest {
  AdminAccount: string;
}
export interface AssociateAdminAccountResponse {}
export type ThirdPartyFirewall =
  | "PALO_ALTO_NETWORKS_CLOUD_NGFW"
  | "FORTIGATE_CLOUD_NATIVE_FIREWALL"
  | (string & {});
export interface AssociateThirdPartyFirewallRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
export type ThirdPartyFirewallAssociationStatus =
  | "ONBOARDING"
  | "ONBOARD_COMPLETE"
  | "OFFBOARDING"
  | "OFFBOARD_COMPLETE"
  | "NOT_EXIST"
  | (string & {});
export interface AssociateThirdPartyFirewallResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
}
export type Identifier = string;
export type IdentifierList = string[];
export interface BatchAssociateResourceRequest {
  ResourceSetIdentifier: string;
  Items: string[];
}
export type FailedItemReason =
  | "NOT_VALID_ARN"
  | "NOT_VALID_PARTITION"
  | "NOT_VALID_REGION"
  | "NOT_VALID_SERVICE"
  | "NOT_VALID_RESOURCE_TYPE"
  | "NOT_VALID_ACCOUNT_ID"
  | (string & {});
export interface FailedItem {
  URI?: string;
  Reason?: FailedItemReason;
}
export type FailedItemList = FailedItem[];
export interface BatchAssociateResourceResponse {
  ResourceSetIdentifier: string;
  FailedItems: FailedItem[];
}
export interface BatchDisassociateResourceRequest {
  ResourceSetIdentifier: string;
  Items: string[];
}
export interface BatchDisassociateResourceResponse {
  ResourceSetIdentifier: string;
  FailedItems: FailedItem[];
}
export type ListId = string;
export interface DeleteAppsListRequest {
  ListId: string;
}
export interface DeleteAppsListResponse {}
export interface DeleteNotificationChannelRequest {}
export interface DeleteNotificationChannelResponse {}
export type PolicyId = string;
export interface DeletePolicyRequest {
  PolicyId: string;
  DeleteAllPolicyResources?: boolean;
}
export interface DeletePolicyResponse {}
export interface DeleteProtocolsListRequest {
  ListId: string;
}
export interface DeleteProtocolsListResponse {}
export type Base62Id = string;
export interface DeleteResourceSetRequest {
  Identifier: string;
}
export interface DeleteResourceSetResponse {}
export interface DisassociateAdminAccountRequest {}
export interface DisassociateAdminAccountResponse {}
export interface DisassociateThirdPartyFirewallRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
export interface DisassociateThirdPartyFirewallResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
}
export interface GetAdminAccountRequest {}
export type AccountRoleStatus =
  | "READY"
  | "CREATING"
  | "PENDING_DELETION"
  | "DELETING"
  | "DELETED"
  | (string & {});
export interface GetAdminAccountResponse {
  AdminAccount?: string;
  RoleStatus?: AccountRoleStatus;
}
export interface GetAdminScopeRequest {
  AdminAccount: string;
}
export type AccountIdList = string[];
export interface AccountScope {
  Accounts?: string[];
  AllAccountsEnabled?: boolean;
  ExcludeSpecifiedAccounts?: boolean;
}
export type OrganizationalUnitId = string;
export type OrganizationalUnitIdList = string[];
export interface OrganizationalUnitScope {
  OrganizationalUnits?: string[];
  AllOrganizationalUnitsEnabled?: boolean;
  ExcludeSpecifiedOrganizationalUnits?: boolean;
}
export type AWSRegion = string;
export type AWSRegionList = string[];
export interface RegionScope {
  Regions?: string[];
  AllRegionsEnabled?: boolean;
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
  | "NETWORK_ACL_COMMON"
  | (string & {});
export type SecurityServiceTypeList = SecurityServiceType[];
export interface PolicyTypeScope {
  PolicyTypes?: SecurityServiceType[];
  AllPolicyTypesEnabled?: boolean;
}
export interface AdminScope {
  AccountScope?: AccountScope;
  OrganizationalUnitScope?: OrganizationalUnitScope;
  RegionScope?: RegionScope;
  PolicyTypeScope?: PolicyTypeScope;
}
export type OrganizationStatus =
  | "ONBOARDING"
  | "ONBOARDING_COMPLETE"
  | "OFFBOARDING"
  | "OFFBOARDING_COMPLETE"
  | (string & {});
export interface GetAdminScopeResponse {
  AdminScope?: AdminScope;
  Status?: OrganizationStatus;
}
export interface GetAppsListRequest {
  ListId: string;
  DefaultList?: boolean;
}
export type ResourceName = string;
export type UpdateToken = string;
export type Protocol = string;
export type IPPortNumber = number;
export interface App {
  AppName: string;
  Protocol: string;
  Port: number;
}
export type AppsList = App[];
export type PreviousListVersion = string;
export type PreviousAppsList = { [key: string]: App[] | undefined };
export interface AppsListData {
  ListId?: string;
  ListName: string;
  ListUpdateToken?: string;
  CreateTime?: Date;
  LastUpdateTime?: Date;
  AppsList: App[];
  PreviousAppsList?: { [key: string]: App[] | undefined };
}
export type ResourceArn = string;
export interface GetAppsListResponse {
  AppsList?: AppsListData;
  AppsListArn?: string;
}
export interface GetComplianceDetailRequest {
  PolicyId: string;
  MemberAccount: string;
}
export type ResourceId = string;
export type ViolationReason =
  | "WEB_ACL_MISSING_RULE_GROUP"
  | "RESOURCE_MISSING_WEB_ACL"
  | "RESOURCE_INCORRECT_WEB_ACL"
  | "RESOURCE_MISSING_SHIELD_PROTECTION"
  | "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION"
  | "RESOURCE_MISSING_SECURITY_GROUP"
  | "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP"
  | "SECURITY_GROUP_UNUSED"
  | "SECURITY_GROUP_REDUNDANT"
  | "FMS_CREATED_SECURITY_GROUP_EDITED"
  | "MISSING_FIREWALL"
  | "MISSING_FIREWALL_SUBNET_IN_AZ"
  | "MISSING_EXPECTED_ROUTE_TABLE"
  | "NETWORK_FIREWALL_POLICY_MODIFIED"
  | "FIREWALL_SUBNET_IS_OUT_OF_SCOPE"
  | "INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE"
  | "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE"
  | "UNEXPECTED_FIREWALL_ROUTES"
  | "UNEXPECTED_TARGET_GATEWAY_ROUTES"
  | "TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY"
  | "INVALID_ROUTE_CONFIGURATION"
  | "MISSING_TARGET_GATEWAY"
  | "INTERNET_TRAFFIC_NOT_INSPECTED"
  | "BLACK_HOLE_ROUTE_DETECTED"
  | "BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET"
  | "RESOURCE_MISSING_DNS_FIREWALL"
  | "ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT"
  | "FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT"
  | "INVALID_NETWORK_ACL_ENTRY"
  | "WEB_ACL_CONFIGURATION_OR_SCOPE_OF_USE"
  | (string & {});
export type ResourceType = string;
export type LengthBoundedString = string;
export type ComplianceViolatorMetadata = { [key: string]: string | undefined };
export interface ComplianceViolator {
  ResourceId?: string;
  ViolationReason?: ViolationReason;
  ResourceType?: string;
  Metadata?: { [key: string]: string | undefined };
}
export type ComplianceViolators = ComplianceViolator[];
export type DependentServiceName =
  | "AWSCONFIG"
  | "AWSWAF"
  | "AWSSHIELD_ADVANCED"
  | "AWSVPC"
  | (string & {});
export type DetailedInfo = string;
export type IssueInfoMap = { [key in DependentServiceName]?: string };
export interface PolicyComplianceDetail {
  PolicyOwner?: string;
  PolicyId?: string;
  MemberAccount?: string;
  Violators?: ComplianceViolator[];
  EvaluationLimitExceeded?: boolean;
  ExpiredAt?: Date;
  IssueInfoMap?: { [key: string]: string | undefined };
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
export type PolicyUpdateToken = string;
export type ManagedServiceData = string;
export type FirewallDeploymentModel = "CENTRALIZED" | "DISTRIBUTED" | (string & {});
export interface NetworkFirewallPolicy {
  FirewallDeploymentModel?: FirewallDeploymentModel;
}
export interface ThirdPartyFirewallPolicy {
  FirewallDeploymentModel?: FirewallDeploymentModel;
}
export type IntegerObject = number;
export interface NetworkAclIcmpTypeCode {
  Code?: number;
  Type?: number;
}
export type IPPortNumberInteger = number;
export interface NetworkAclPortRange {
  From?: number;
  To?: number;
}
export type LengthBoundedNonEmptyString = string;
export type NetworkAclRuleAction = "allow" | "deny" | (string & {});
export interface NetworkAclEntry {
  IcmpTypeCode?: NetworkAclIcmpTypeCode;
  Protocol: string;
  PortRange?: NetworkAclPortRange;
  CidrBlock?: string;
  Ipv6CidrBlock?: string;
  RuleAction: NetworkAclRuleAction;
  Egress: boolean;
}
export type NetworkAclEntries = NetworkAclEntry[];
export interface NetworkAclEntrySet {
  FirstEntries?: NetworkAclEntry[];
  ForceRemediateForFirstEntries: boolean;
  LastEntries?: NetworkAclEntry[];
  ForceRemediateForLastEntries: boolean;
}
export interface NetworkAclCommonPolicy {
  NetworkAclEntrySet: NetworkAclEntrySet;
}
export interface PolicyOption {
  NetworkFirewallPolicy?: NetworkFirewallPolicy;
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
  NetworkAclCommonPolicy?: NetworkAclCommonPolicy;
}
export interface SecurityServicePolicyData {
  Type: SecurityServiceType;
  ManagedServiceData?: string;
  PolicyOption?: PolicyOption;
}
export type ResourceTypeList = string[];
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export interface ResourceTag {
  Key: string;
  Value?: string;
}
export type ResourceTags = ResourceTag[];
export type CustomerPolicyScopeIdType = "ACCOUNT" | "ORG_UNIT" | (string & {});
export type CustomerPolicyScopeId = string;
export type CustomerPolicyScopeIdList = string[];
export type CustomerPolicyScopeMap = { [key in CustomerPolicyScopeIdType]?: string[] };
export type ResourceSetIds = string[];
export type ResourceDescription = string;
export type CustomerPolicyStatus = "ACTIVE" | "OUT_OF_ADMIN_SCOPE" | (string & {});
export type ResourceTagLogicalOperator = "AND" | "OR" | (string & {});
export interface Policy {
  PolicyId?: string;
  PolicyName: string;
  PolicyUpdateToken?: string;
  SecurityServicePolicyData: SecurityServicePolicyData;
  ResourceType: string;
  ResourceTypeList?: string[];
  ResourceTags?: ResourceTag[];
  ExcludeResourceTags: boolean;
  RemediationEnabled: boolean;
  DeleteUnusedFMManagedResources?: boolean;
  IncludeMap?: { [key: string]: string[] | undefined };
  ExcludeMap?: { [key: string]: string[] | undefined };
  ResourceSetIds?: string[];
  PolicyDescription?: string;
  PolicyStatus?: CustomerPolicyStatus;
  ResourceTagLogicalOperator?: ResourceTagLogicalOperator;
}
export interface GetPolicyResponse {
  Policy?: Policy;
  PolicyArn?: string;
}
export type PaginationToken = string;
export type PaginationMaxResults = number;
export interface GetProtectionStatusRequest {
  PolicyId: string;
  MemberAccountId?: string;
  StartTime?: Date;
  EndTime?: Date;
  NextToken?: string;
  MaxResults?: number;
}
export type ProtectionData = string;
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
export type ProtocolsList = string[];
export type PreviousProtocolsList = { [key: string]: string[] | undefined };
export interface ProtocolsListData {
  ListId?: string;
  ListName: string;
  ListUpdateToken?: string;
  CreateTime?: Date;
  LastUpdateTime?: Date;
  ProtocolsList: string[];
  PreviousProtocolsList?: { [key: string]: string[] | undefined };
}
export interface GetProtocolsListResponse {
  ProtocolsList?: ProtocolsListData;
  ProtocolsListArn?: string;
}
export interface GetResourceSetRequest {
  Identifier: string;
}
export type Name = string;
export type Description = string;
export type ResourceSetStatus = "ACTIVE" | "OUT_OF_ADMIN_SCOPE" | (string & {});
export interface ResourceSet {
  Id?: string;
  Name: string;
  Description?: string;
  UpdateToken?: string;
  ResourceTypeList: string[];
  LastUpdateTime?: Date;
  ResourceSetStatus?: ResourceSetStatus;
}
export interface GetResourceSetResponse {
  ResourceSet: ResourceSet;
  ResourceSetArn: string;
}
export interface GetThirdPartyFirewallAssociationStatusRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
export type MarketplaceSubscriptionOnboardingStatus =
  | "NO_SUBSCRIPTION"
  | "NOT_COMPLETE"
  | "COMPLETE"
  | (string & {});
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
export type ViolationTarget = string;
export type ReferenceRule = string;
export type TargetViolationReason = string;
export type TargetViolationReasons = string[];
export interface PartialMatch {
  Reference?: string;
  TargetViolationReasons?: string[];
}
export type PartialMatches = PartialMatch[];
export type RemediationActionType = "REMOVE" | "MODIFY" | (string & {});
export type RemediationActionDescription = string;
export type CIDR = string;
export interface SecurityGroupRuleDescription {
  IPV4Range?: string;
  IPV6Range?: string;
  PrefixListId?: string;
  Protocol?: string;
  FromPort?: number;
  ToPort?: number;
}
export interface SecurityGroupRemediationAction {
  RemediationActionType?: RemediationActionType;
  Description?: string;
  RemediationResult?: SecurityGroupRuleDescription;
  IsDefaultAction?: boolean;
}
export type SecurityGroupRemediationActions = SecurityGroupRemediationAction[];
export interface AwsVPCSecurityGroupViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  PartialMatches?: PartialMatch[];
  PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];
}
export type ResourceIdList = string[];
export interface AwsEc2NetworkInterfaceViolation {
  ViolationTarget?: string;
  ViolatingSecurityGroups?: string[];
}
export type AwsEc2NetworkInterfaceViolations = AwsEc2NetworkInterfaceViolation[];
export interface AwsEc2InstanceViolation {
  ViolationTarget?: string;
  AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];
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
export interface NetworkFirewallMissingExpectedRTViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  CurrentRouteTable?: string;
  ExpectedRouteTable?: string;
}
export type NetworkFirewallResourceName = string;
export type StatelessRuleGroupPriority = number;
export interface StatelessRuleGroup {
  RuleGroupName?: string;
  ResourceId?: string;
  Priority?: number;
}
export type StatelessRuleGroupList = StatelessRuleGroup[];
export type NetworkFirewallAction = string;
export type NetworkFirewallActionList = string[];
export type PriorityNumber = number;
export type NetworkFirewallOverrideAction = "DROP_TO_ALERT" | (string & {});
export interface NetworkFirewallStatefulRuleGroupOverride {
  Action?: NetworkFirewallOverrideAction;
}
export interface StatefulRuleGroup {
  RuleGroupName?: string;
  ResourceId?: string;
  Priority?: number;
  Override?: NetworkFirewallStatefulRuleGroupOverride;
}
export type StatefulRuleGroupList = StatefulRuleGroup[];
export type RuleOrder = "STRICT_ORDER" | "DEFAULT_ACTION_ORDER" | (string & {});
export type StreamExceptionPolicy = "DROP" | "CONTINUE" | "REJECT" | "FMS_IGNORE" | (string & {});
export interface StatefulEngineOptions {
  RuleOrder?: RuleOrder;
  StreamExceptionPolicy?: StreamExceptionPolicy;
}
export interface NetworkFirewallPolicyDescription {
  StatelessRuleGroups?: StatelessRuleGroup[];
  StatelessDefaultActions?: string[];
  StatelessFragmentDefaultActions?: string[];
  StatelessCustomActions?: string[];
  StatefulRuleGroups?: StatefulRuleGroup[];
  StatefulDefaultActions?: string[];
  StatefulEngineOptions?: StatefulEngineOptions;
}
export interface NetworkFirewallPolicyModifiedViolation {
  ViolationTarget?: string;
  CurrentPolicyDescription?: NetworkFirewallPolicyDescription;
  ExpectedPolicyDescription?: NetworkFirewallPolicyDescription;
}
export type DestinationType = "IPV4" | "IPV6" | "PREFIX_LIST" | (string & {});
export type TargetType =
  | "GATEWAY"
  | "CARRIER_GATEWAY"
  | "INSTANCE"
  | "LOCAL_GATEWAY"
  | "NAT_GATEWAY"
  | "NETWORK_INTERFACE"
  | "VPC_ENDPOINT"
  | "VPC_PEERING_CONNECTION"
  | "EGRESS_ONLY_INTERNET_GATEWAY"
  | "TRANSIT_GATEWAY"
  | (string & {});
export interface Route {
  DestinationType?: DestinationType;
  TargetType?: TargetType;
  Destination?: string;
  Target?: string;
}
export type Routes = Route[];
export type LengthBoundedStringList = string[];
export interface ExpectedRoute {
  IpV4Cidr?: string;
  PrefixListId?: string;
  IpV6Cidr?: string;
  ContributingSubnets?: string[];
  AllowedTargets?: string[];
  RouteTableId?: string;
}
export type ExpectedRoutes = ExpectedRoute[];
export interface NetworkFirewallInternetTrafficNotInspectedViolation {
  SubnetId?: string;
  SubnetAvailabilityZone?: string;
  RouteTableId?: string;
  ViolatingRoutes?: Route[];
  IsRouteTableUsedInDifferentAZ?: boolean;
  CurrentFirewallSubnetRouteTable?: string;
  ExpectedFirewallEndpoint?: string;
  FirewallSubnetId?: string;
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[];
  ActualFirewallSubnetRoutes?: Route[];
  InternetGatewayId?: string;
  CurrentInternetGatewayRouteTable?: string;
  ExpectedInternetGatewayRoutes?: ExpectedRoute[];
  ActualInternetGatewayRoutes?: Route[];
  VpcId?: string;
}
export interface NetworkFirewallInvalidRouteConfigurationViolation {
  AffectedSubnets?: string[];
  RouteTableId?: string;
  IsRouteTableUsedInDifferentAZ?: boolean;
  ViolatingRoute?: Route;
  CurrentFirewallSubnetRouteTable?: string;
  ExpectedFirewallEndpoint?: string;
  ActualFirewallEndpoint?: string;
  ExpectedFirewallSubnetId?: string;
  ActualFirewallSubnetId?: string;
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[];
  ActualFirewallSubnetRoutes?: Route[];
  InternetGatewayId?: string;
  CurrentInternetGatewayRouteTable?: string;
  ExpectedInternetGatewayRoutes?: ExpectedRoute[];
  ActualInternetGatewayRoutes?: Route[];
  VpcId?: string;
}
export interface NetworkFirewallBlackHoleRouteDetectedViolation {
  ViolationTarget?: string;
  RouteTableId?: string;
  VpcId?: string;
  ViolatingRoutes?: Route[];
}
export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
  FirewallSubnetId?: string;
  ViolatingRoutes?: Route[];
  RouteTableId?: string;
  FirewallEndpoint?: string;
  VpcId?: string;
}
export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
  GatewayId?: string;
  ViolatingRoutes?: Route[];
  RouteTableId?: string;
  VpcId?: string;
}
export interface NetworkFirewallMissingExpectedRoutesViolation {
  ViolationTarget?: string;
  ExpectedRoutes?: ExpectedRoute[];
  VpcId?: string;
}
export type DnsRuleGroupPriority = number;
export type DnsRuleGroupPriorities = number[];
export interface DnsRuleGroupPriorityConflictViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  ConflictingPriority?: number;
  ConflictingPolicyId?: string;
  UnavailablePriorities?: number[];
}
export interface DnsDuplicateRuleGroupViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
}
export type BasicInteger = number;
export interface DnsRuleGroupLimitExceededViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  NumberOfRuleGroupsAlreadyAssociated?: number;
}
export interface FirewallSubnetIsOutOfScopeViolation {
  FirewallSubnetId?: string;
  VpcId?: string;
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
  VpcEndpointId?: string;
}
export interface RouteHasOutOfScopeEndpointViolation {
  SubnetId?: string;
  VpcId?: string;
  RouteTableId?: string;
  ViolatingRoutes?: Route[];
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
  CurrentFirewallSubnetRouteTable?: string;
  FirewallSubnetId?: string;
  FirewallSubnetRoutes?: Route[];
  InternetGatewayId?: string;
  CurrentInternetGatewayRouteTable?: string;
  InternetGatewayRoutes?: Route[];
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
export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  CurrentRouteTable?: string;
  ExpectedRouteTable?: string;
}
export interface FirewallSubnetMissingVPCEndpointViolation {
  FirewallSubnetId?: string;
  VpcId?: string;
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
}
export type IntegerObjectMinimum0 = number;
export type EntryType =
  | "FMS_MANAGED_FIRST_ENTRY"
  | "FMS_MANAGED_LAST_ENTRY"
  | "CUSTOM_ENTRY"
  | (string & {});
export interface EntryDescription {
  EntryDetail?: NetworkAclEntry;
  EntryRuleNumber?: number;
  EntryType?: EntryType;
}
export type EntriesWithConflicts = EntryDescription[];
export type EntryViolationReason =
  | "MISSING_EXPECTED_ENTRY"
  | "INCORRECT_ENTRY_ORDER"
  | "ENTRY_CONFLICT"
  | (string & {});
export type EntryViolationReasons = EntryViolationReason[];
export interface EntryViolation {
  ExpectedEntry?: EntryDescription;
  ExpectedEvaluationOrder?: string;
  ActualEvaluationOrder?: string;
  EntryAtExpectedEvaluationOrder?: EntryDescription;
  EntriesWithConflicts?: EntryDescription[];
  EntryViolationReasons?: EntryViolationReason[];
}
export type EntryViolations = EntryViolation[];
export interface InvalidNetworkAclEntriesViolation {
  Vpc?: string;
  Subnet?: string;
  SubnetAvailabilityZone?: string;
  CurrentAssociatedNetworkAcl?: string;
  EntryViolations?: EntryViolation[];
}
export interface ActionTarget {
  ResourceId?: string;
  Description?: string;
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
export interface EC2ReplaceRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  GatewayId?: ActionTarget;
  RouteTableId: ActionTarget;
}
export interface EC2DeleteRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  RouteTableId: ActionTarget;
}
export interface EC2CopyRouteTableAction {
  Description?: string;
  VpcId: ActionTarget;
  RouteTableId: ActionTarget;
}
export interface EC2ReplaceRouteTableAssociationAction {
  Description?: string;
  AssociationId: ActionTarget;
  RouteTableId: ActionTarget;
}
export interface EC2AssociateRouteTableAction {
  Description?: string;
  RouteTableId: ActionTarget;
  SubnetId?: ActionTarget;
  GatewayId?: ActionTarget;
}
export interface EC2CreateRouteTableAction {
  Description?: string;
  VpcId: ActionTarget;
}
export interface FMSPolicyUpdateFirewallCreationConfigAction {
  Description?: string;
  FirewallCreationConfig?: string;
}
export interface CreateNetworkAclAction {
  Description?: string;
  Vpc?: ActionTarget;
  FMSCanRemediate?: boolean;
}
export interface ReplaceNetworkAclAssociationAction {
  Description?: string;
  AssociationId?: ActionTarget;
  NetworkAclId?: ActionTarget;
  FMSCanRemediate?: boolean;
}
export type EntriesDescription = EntryDescription[];
export interface CreateNetworkAclEntriesAction {
  Description?: string;
  NetworkAclId?: ActionTarget;
  NetworkAclEntriesToBeCreated?: EntryDescription[];
  FMSCanRemediate?: boolean;
}
export interface DeleteNetworkAclEntriesAction {
  Description?: string;
  NetworkAclId?: ActionTarget;
  NetworkAclEntriesToBeDeleted?: EntryDescription[];
  FMSCanRemediate?: boolean;
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
export interface RemediationActionWithOrder {
  RemediationAction?: RemediationAction;
  Order?: number;
}
export type OrderedRemediationActions = RemediationActionWithOrder[];
export interface PossibleRemediationAction {
  Description?: string;
  OrderedRemediationActions: RemediationActionWithOrder[];
  IsDefaultAction?: boolean;
}
export type PossibleRemediationActionList = PossibleRemediationAction[];
export interface PossibleRemediationActions {
  Description?: string;
  Actions?: PossibleRemediationAction[];
}
export interface WebACLHasIncompatibleConfigurationViolation {
  WebACLArn?: string;
  Description?: string;
}
export type ResourceArnList = string[];
export interface WebACLHasOutOfScopeResourcesViolation {
  WebACLArn?: string;
  OutOfScopeResourceList?: string[];
}
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
export type ResourceViolations = ResourceViolation[];
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface ViolationDetail {
  PolicyId: string;
  MemberAccount: string;
  ResourceId: string;
  ResourceType: string;
  ResourceViolations: ResourceViolation[];
  ResourceTags?: Tag[];
  ResourceDescription?: string;
}
export interface GetViolationDetailsResponse {
  ViolationDetail?: ViolationDetail;
}
export interface ListAdminAccountsForOrganizationRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface AdminAccountSummary {
  AdminAccount?: string;
  DefaultAdmin?: boolean;
  Status?: OrganizationStatus;
}
export type AdminAccountSummaryList = AdminAccountSummary[];
export interface ListAdminAccountsForOrganizationResponse {
  AdminAccounts?: AdminAccountSummary[];
  NextToken?: string;
}
export interface ListAdminsManagingAccountRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAdminsManagingAccountResponse {
  AdminAccounts?: string[];
  NextToken?: string;
}
export interface ListAppsListsRequest {
  DefaultLists?: boolean;
  NextToken?: string;
  MaxResults: number;
}
export interface AppsListDataSummary {
  ListArn?: string;
  ListId?: string;
  ListName?: string;
  AppsList?: App[];
}
export type AppsListsData = AppsListDataSummary[];
export interface ListAppsListsResponse {
  AppsLists?: AppsListDataSummary[];
  NextToken?: string;
}
export interface ListComplianceStatusRequest {
  PolicyId: string;
  NextToken?: string;
  MaxResults?: number;
}
export type PolicyComplianceStatusType = "COMPLIANT" | "NON_COMPLIANT" | (string & {});
export type ResourceCount = number;
export interface EvaluationResult {
  ComplianceStatus?: PolicyComplianceStatusType;
  ViolatorCount?: number;
  EvaluationLimitExceeded?: boolean;
}
export type EvaluationResults = EvaluationResult[];
export interface PolicyComplianceStatus {
  PolicyOwner?: string;
  PolicyId?: string;
  PolicyName?: string;
  MemberAccount?: string;
  EvaluationResults?: EvaluationResult[];
  LastUpdated?: Date;
  IssueInfoMap?: { [key: string]: string | undefined };
}
export type PolicyComplianceStatusList = PolicyComplianceStatus[];
export interface ListComplianceStatusResponse {
  PolicyComplianceStatusList?: PolicyComplianceStatus[];
  NextToken?: string;
}
export type AWSAccountIdList = string[];
export interface ListDiscoveredResourcesRequest {
  MemberAccountIds: string[];
  ResourceType: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DiscoveredResource {
  URI?: string;
  AccountId?: string;
  Type?: string;
  Name?: string;
}
export type DiscoveredResourceList = DiscoveredResource[];
export interface ListDiscoveredResourcesResponse {
  Items?: DiscoveredResource[];
  NextToken?: string;
}
export interface ListMemberAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type MemberAccounts = string[];
export interface ListMemberAccountsResponse {
  MemberAccounts?: string[];
  NextToken?: string;
}
export interface ListPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
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
export type PolicySummaryList = PolicySummary[];
export interface ListPoliciesResponse {
  PolicyList?: PolicySummary[];
  NextToken?: string;
}
export interface ListProtocolsListsRequest {
  DefaultLists?: boolean;
  NextToken?: string;
  MaxResults: number;
}
export interface ProtocolsListDataSummary {
  ListArn?: string;
  ListId?: string;
  ListName?: string;
  ProtocolsList?: string[];
}
export type ProtocolsListsData = ProtocolsListDataSummary[];
export interface ListProtocolsListsResponse {
  ProtocolsLists?: ProtocolsListDataSummary[];
  NextToken?: string;
}
export interface ListResourceSetResourcesRequest {
  Identifier: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface Resource {
  URI: string;
  AccountId?: string;
}
export type ResourceList = Resource[];
export interface ListResourceSetResourcesResponse {
  Items: Resource[];
  NextToken?: string;
}
export interface ListResourceSetsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ResourceSetSummary {
  Id?: string;
  Name?: string;
  Description?: string;
  LastUpdateTime?: Date;
  ResourceSetStatus?: ResourceSetStatus;
}
export type ResourceSetSummaryList = ResourceSetSummary[];
export interface ListResourceSetsResponse {
  ResourceSets?: ResourceSetSummary[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  TagList?: Tag[];
}
export interface ListThirdPartyFirewallFirewallPoliciesRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
  NextToken?: string;
  MaxResults: number;
}
export type FirewallPolicyId = string;
export type FirewallPolicyName = string;
export interface ThirdPartyFirewallFirewallPolicy {
  FirewallPolicyId?: string;
  FirewallPolicyName?: string;
}
export type ThirdPartyFirewallFirewallPolicies = ThirdPartyFirewallFirewallPolicy[];
export interface ListThirdPartyFirewallFirewallPoliciesResponse {
  ThirdPartyFirewallFirewallPolicies?: ThirdPartyFirewallFirewallPolicy[];
  NextToken?: string;
}
export interface PutAdminAccountRequest {
  AdminAccount: string;
  AdminScope?: AdminScope;
}
export interface PutAdminAccountResponse {}
export interface PutAppsListRequest {
  AppsList: AppsListData;
  TagList?: Tag[];
}
export interface PutAppsListResponse {
  AppsList?: AppsListData;
  AppsListArn?: string;
}
export interface PutNotificationChannelRequest {
  SnsTopicArn: string;
  SnsRoleName: string;
}
export interface PutNotificationChannelResponse {}
export interface PutPolicyRequest {
  Policy: Policy;
  TagList?: Tag[];
}
export interface PutPolicyResponse {
  Policy?: Policy;
  PolicyArn?: string;
}
export interface PutProtocolsListRequest {
  ProtocolsList: ProtocolsListData;
  TagList?: Tag[];
}
export interface PutProtocolsListResponse {
  ProtocolsList?: ProtocolsListData;
  ProtocolsListArn?: string;
}
export interface PutResourceSetRequest {
  ResourceSet: ResourceSet;
  TagList?: Tag[];
}
export interface PutResourceSetResponse {
  ResourceSet: ResourceSet;
  ResourceSetArn: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  TagList: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export type ErrorMessage = string;
export type AssociateAdminAccountError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.
 *
 * For information about working with Firewall Manager administrator accounts, see Managing Firewall Manager administrators in the *Firewall Manager Developer Guide*.
 */
export const associateAdminAccount: API.OperationMethod<
  AssociateAdminAccountRequest,
  AssociateAdminAccountResponse,
  AssociateAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateAdminAccountRequest>,
  output: __S(1) as any as S.Schema<AssociateAdminAccountResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateAdminAccount",
}));

export type AssociateThirdPartyFirewallError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
 */
export const associateThirdPartyFirewall: API.OperationMethod<
  AssociateThirdPartyFirewallRequest,
  AssociateThirdPartyFirewallResponse,
  AssociateThirdPartyFirewallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AssociateThirdPartyFirewallRequest>,
  output: __S(3) as any as S.Schema<AssociateThirdPartyFirewallResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateThirdPartyFirewall",
}));

export type BatchAssociateResourceError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associate resources to a Firewall Manager resource set.
 */
export const batchAssociateResource: API.OperationMethod<
  BatchAssociateResourceRequest,
  BatchAssociateResourceResponse,
  BatchAssociateResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<BatchAssociateResourceRequest>,
  output: __S(8) as any as S.Schema<BatchAssociateResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchAssociateResource",
}));

export type BatchDisassociateResourceError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates resources from a Firewall Manager resource set.
 */
export const batchDisassociateResource: API.OperationMethod<
  BatchDisassociateResourceRequest,
  BatchDisassociateResourceResponse,
  BatchDisassociateResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<BatchDisassociateResourceRequest>,
  output: __S(8) as any as S.Schema<BatchDisassociateResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisassociateResource",
}));

export type DeleteAppsListError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Permanently deletes an Firewall Manager applications list.
 */
export const deleteAppsList: API.OperationMethod<
  DeleteAppsListRequest,
  DeleteAppsListResponse,
  DeleteAppsListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<DeleteAppsListRequest>,
  output: __S(1) as any as S.Schema<DeleteAppsListResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAppsList",
}));

export type DeleteNotificationChannelError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an Firewall Manager association with the IAM role and the Amazon Simple
 * Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
 */
export const deleteNotificationChannel: API.OperationMethod<
  DeleteNotificationChannelRequest,
  DeleteNotificationChannelResponse,
  DeleteNotificationChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<DeleteNotificationChannelRequest>,
  output: __S(12) as any as S.Schema<DeleteNotificationChannelResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNotificationChannel",
}));

export type DeletePolicyError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Permanently deletes an Firewall Manager policy.
 */
export const deletePolicy: API.OperationMethod<
  DeletePolicyRequest,
  DeletePolicyResponse,
  DeletePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<DeletePolicyRequest>,
  output: __S(1) as any as S.Schema<DeletePolicyResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicy",
}));

export type DeleteProtocolsListError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Permanently deletes an Firewall Manager protocols list.
 */
export const deleteProtocolsList: API.OperationMethod<
  DeleteProtocolsListRequest,
  DeleteProtocolsListResponse,
  DeleteProtocolsListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<DeleteProtocolsListRequest>,
  output: __S(1) as any as S.Schema<DeleteProtocolsListResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProtocolsList",
}));

export type DeleteResourceSetError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified ResourceSet.
 */
export const deleteResourceSet: API.OperationMethod<
  DeleteResourceSetRequest,
  DeleteResourceSetResponse,
  DeleteResourceSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<DeleteResourceSetRequest>,
  output: __S(1) as any as S.Schema<DeleteResourceSetResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourceSet",
}));

export type DisassociateAdminAccountError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a PutAdminAccount request. To set an account as a default administrator account, you must submit an AssociateAdminAccount request.
 *
 * Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.
 */
export const disassociateAdminAccount: API.OperationMethod<
  DisassociateAdminAccountRequest,
  DisassociateAdminAccountResponse,
  DisassociateAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<DisassociateAdminAccountRequest>,
  output: __S(12) as any as S.Schema<DisassociateAdminAccountResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateAdminAccount",
}));

export type DisassociateThirdPartyFirewallError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call `DisassociateThirdPartyFirewall`, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
 */
export const disassociateThirdPartyFirewall: API.OperationMethod<
  DisassociateThirdPartyFirewallRequest,
  DisassociateThirdPartyFirewallResponse,
  DisassociateThirdPartyFirewallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<DisassociateThirdPartyFirewallRequest>,
  output: __S(3) as any as S.Schema<DisassociateThirdPartyFirewallResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateThirdPartyFirewall",
}));

export type GetAdminAccountError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the Organizations account that is associated with Firewall Manager
 * as the Firewall Manager default administrator.
 */
export const getAdminAccount: API.OperationMethod<
  GetAdminAccountRequest,
  GetAdminAccountResponse,
  GetAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<GetAdminAccountRequest>,
  output: __S(19) as any as S.Schema<GetAdminAccountResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdminAccount",
}));

export type GetAdminScopeError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about the specified account's administrative scope. The administrative scope defines the resources that an Firewall Manager administrator can manage.
 */
export const getAdminScope: API.OperationMethod<
  GetAdminScopeRequest,
  GetAdminScopeResponse,
  GetAdminScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<GetAdminScopeRequest>,
  output: __S(27) as any as S.Schema<GetAdminScopeResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdminScope",
}));

export type GetAppsListError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about the specified Firewall Manager applications list.
 */
export const getAppsList: API.OperationMethod<
  GetAppsListRequest,
  GetAppsListResponse,
  GetAppsListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<GetAppsListRequest>,
  output: __S(33) as any as S.Schema<GetAppsListResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAppsList",
}));

export type GetComplianceDetailError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns detailed compliance information about the specified member account. Details
 * include resources that are in and out of compliance with the specified policy.
 *
 * The reasons for resources being considered compliant depend on the Firewall Manager policy type.
 */
export const getComplianceDetail: API.OperationMethod<
  GetComplianceDetailRequest,
  GetComplianceDetailResponse,
  GetComplianceDetailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<GetComplianceDetailRequest>,
  output: __S(40) as any as S.Schema<GetComplianceDetailResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetComplianceDetail",
}));

export type GetNotificationChannelError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Information
 * about the Amazon Simple Notification Service (SNS) topic that is used to
 * record Firewall Manager SNS logs.
 */
export const getNotificationChannel: API.OperationMethod<
  GetNotificationChannelRequest,
  GetNotificationChannelResponse,
  GetNotificationChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<GetNotificationChannelRequest>,
  output: __S(42) as any as S.Schema<GetNotificationChannelResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotificationChannel",
}));

export type GetPolicyError =
  | InternalErrorException
  | InvalidOperationException
  | InvalidTypeException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about the specified Firewall Manager policy.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<GetPolicyRequest>,
  output: __S(57) as any as S.Schema<GetPolicyResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    InvalidTypeException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetProtectionStatusError =
  | InternalErrorException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * If you created a Shield Advanced policy, returns policy-level attack summary information
 * in the event of a potential DDoS attack. Other policy types are currently unsupported.
 */
export const getProtectionStatus: API.OperationMethod<
  GetProtectionStatusRequest,
  GetProtectionStatusResponse,
  GetProtectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<GetProtectionStatusRequest>,
  output: __S(59) as any as S.Schema<GetProtectionStatusResponse>,
  errors: [InternalErrorException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProtectionStatus",
}));

export type GetProtocolsListError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about the specified Firewall Manager protocols list.
 */
export const getProtocolsList: API.OperationMethod<
  GetProtocolsListRequest,
  GetProtocolsListResponse,
  GetProtocolsListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<GetProtocolsListRequest>,
  output: __S(63) as any as S.Schema<GetProtocolsListResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProtocolsList",
}));

export type GetResourceSetError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets information about a specific resource set.
 */
export const getResourceSet: API.OperationMethod<
  GetResourceSetRequest,
  GetResourceSetResponse,
  GetResourceSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<GetResourceSetRequest>,
  output: __S(66) as any as S.Schema<GetResourceSetResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceSet",
}));

export type GetThirdPartyFirewallAssociationStatusError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
 */
export const getThirdPartyFirewallAssociationStatus: API.OperationMethod<
  GetThirdPartyFirewallAssociationStatusRequest,
  GetThirdPartyFirewallAssociationStatusResponse,
  GetThirdPartyFirewallAssociationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<GetThirdPartyFirewallAssociationStatusRequest>,
  output: __S(68) as any as S.Schema<GetThirdPartyFirewallAssociationStatusResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetThirdPartyFirewallAssociationStatus",
}));

export type GetViolationDetailsError =
  | InternalErrorException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
 */
export const getViolationDetails: API.OperationMethod<
  GetViolationDetailsRequest,
  GetViolationDetailsResponse,
  GetViolationDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<GetViolationDetailsRequest>,
  output: __S(137) as any as S.Schema<GetViolationDetailsResponse>,
  errors: [InternalErrorException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetViolationDetails",
}));

export type ListAdminAccountsForOrganizationError =
  | InternalErrorException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a `AdminAccounts` object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by AssociateAdminAccount.
 *
 * This operation can be called only from the organization's management account.
 */
export const listAdminAccountsForOrganization: API.PaginatedOperationMethod<
  ListAdminAccountsForOrganizationRequest,
  ListAdminAccountsForOrganizationResponse,
  ListAdminAccountsForOrganizationError,
  Credentials | HttpClient.HttpClient,
  AdminAccountSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(138) as any as S.Schema<ListAdminAccountsForOrganizationRequest>,
  output: __S(141) as any as S.Schema<ListAdminAccountsForOrganizationResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdminAccountsForOrganization",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AdminAccounts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAdminsManagingAccountError =
  | InternalErrorException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their AdminScope.
 */
export const listAdminsManagingAccount: API.PaginatedOperationMethod<
  ListAdminsManagingAccountRequest,
  ListAdminsManagingAccountResponse,
  ListAdminsManagingAccountError,
  Credentials | HttpClient.HttpClient,
  AWSAccountId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142) as any as S.Schema<ListAdminsManagingAccountRequest>,
  output: __S(143) as any as S.Schema<ListAdminsManagingAccountResponse>,
  errors: [InternalErrorException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdminsManagingAccount",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AdminAccounts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAppsListsError =
  | InternalErrorException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an array of `AppsListDataSummary` objects.
 */
export const listAppsLists: API.PaginatedOperationMethod<
  ListAppsListsRequest,
  ListAppsListsResponse,
  ListAppsListsError,
  Credentials | HttpClient.HttpClient,
  AppsListDataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(144) as any as S.Schema<ListAppsListsRequest>,
  output: __S(147) as any as S.Schema<ListAppsListsResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppsLists",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AppsLists",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListComplianceStatusError =
  | InternalErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an array of `PolicyComplianceStatus` objects. Use
 * `PolicyComplianceStatus` to get a summary of which member accounts are protected
 * by the specified policy.
 */
export const listComplianceStatus: API.PaginatedOperationMethod<
  ListComplianceStatusRequest,
  ListComplianceStatusResponse,
  ListComplianceStatusError,
  Credentials | HttpClient.HttpClient,
  PolicyComplianceStatus
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(148) as any as S.Schema<ListComplianceStatusRequest>,
  output: __S(153) as any as S.Schema<ListComplianceStatusResponse>,
  errors: [InternalErrorException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComplianceStatus",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PolicyComplianceStatusList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDiscoveredResourcesError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | CommonErrors;
/**
 * Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
 */
export const listDiscoveredResources: API.OperationMethod<
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesResponse,
  ListDiscoveredResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154) as any as S.Schema<ListDiscoveredResourcesRequest>,
  output: __S(157) as any as S.Schema<ListDiscoveredResourcesResponse>,
  errors: [InternalErrorException, InvalidInputException, InvalidOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDiscoveredResources",
}));

export type ListMemberAccountsError =
  | InternalErrorException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a `MemberAccounts` object that lists the member accounts in the
 * administrator's Amazon Web Services organization.
 *
 * Either an Firewall Manager administrator or the organization's management account can make this request.
 */
export const listMemberAccounts: API.PaginatedOperationMethod<
  ListMemberAccountsRequest,
  ListMemberAccountsResponse,
  ListMemberAccountsError,
  Credentials | HttpClient.HttpClient,
  AWSAccountId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(158) as any as S.Schema<ListMemberAccountsRequest>,
  output: __S(159) as any as S.Schema<ListMemberAccountsResponse>,
  errors: [InternalErrorException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemberAccounts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "MemberAccounts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPoliciesError =
  | InternalErrorException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an array of `PolicySummary` objects.
 */
export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient,
  PolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(160) as any as S.Schema<ListPoliciesRequest>,
  output: __S(163) as any as S.Schema<ListPoliciesResponse>,
  errors: [
    InternalErrorException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PolicyList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProtocolsListsError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an array of `ProtocolsListDataSummary` objects.
 */
export const listProtocolsLists: API.PaginatedOperationMethod<
  ListProtocolsListsRequest,
  ListProtocolsListsResponse,
  ListProtocolsListsError,
  Credentials | HttpClient.HttpClient,
  ProtocolsListDataSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(164) as any as S.Schema<ListProtocolsListsRequest>,
  output: __S(167) as any as S.Schema<ListProtocolsListsResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProtocolsLists",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProtocolsLists",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceSetResourcesError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an array of resources that are currently associated to a resource set.
 */
export const listResourceSetResources: API.OperationMethod<
  ListResourceSetResourcesRequest,
  ListResourceSetResourcesResponse,
  ListResourceSetResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168) as any as S.Schema<ListResourceSetResourcesRequest>,
  output: __S(171) as any as S.Schema<ListResourceSetResourcesResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceSetResources",
}));

export type ListResourceSetsError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | CommonErrors;
/**
 * Returns an array of `ResourceSetSummary` objects.
 */
export const listResourceSets: API.OperationMethod<
  ListResourceSetsRequest,
  ListResourceSetsResponse,
  ListResourceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(172) as any as S.Schema<ListResourceSetsRequest>,
  output: __S(175) as any as S.Schema<ListResourceSetsResponse>,
  errors: [InternalErrorException, InvalidInputException, InvalidOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceSets",
}));

export type ListTagsForResourceError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the list of tags for the specified Amazon Web Services resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(177) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListThirdPartyFirewallFirewallPoliciesError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
 */
export const listThirdPartyFirewallFirewallPolicies: API.PaginatedOperationMethod<
  ListThirdPartyFirewallFirewallPoliciesRequest,
  ListThirdPartyFirewallFirewallPoliciesResponse,
  ListThirdPartyFirewallFirewallPoliciesError,
  Credentials | HttpClient.HttpClient,
  ThirdPartyFirewallFirewallPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(178) as any as S.Schema<ListThirdPartyFirewallFirewallPoliciesRequest>,
  output: __S(181) as any as S.Schema<ListThirdPartyFirewallFirewallPoliciesResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThirdPartyFirewallFirewallPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ThirdPartyFirewallFirewallPolicies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutAdminAccountError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by AssociateAdminAccount. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see
 * Managing the Amazon Web Services Accounts in Your Organization.
 */
export const putAdminAccount: API.OperationMethod<
  PutAdminAccountRequest,
  PutAdminAccountResponse,
  PutAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<PutAdminAccountRequest>,
  output: __S(1) as any as S.Schema<PutAdminAccountResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAdminAccount",
}));

export type PutAppsListError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an Firewall Manager applications list.
 */
export const putAppsList: API.OperationMethod<
  PutAppsListRequest,
  PutAppsListResponse,
  PutAppsListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183) as any as S.Schema<PutAppsListRequest>,
  output: __S(33) as any as S.Schema<PutAppsListResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAppsList",
}));

export type PutNotificationChannelError =
  | InternalErrorException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that
 * Firewall Manager uses to record SNS logs.
 *
 * To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the `SnsRoleName` to publish SNS logs. If the `SnsRoleName` provided is a role other than the `AWSServiceRoleForFMS` service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal `fms.amazonaws.com` to assume this role. For information about configuring an SNS access policy, see
 * Service roles for Firewall Manager in the *Firewall Manager Developer Guide*.
 */
export const putNotificationChannel: API.OperationMethod<
  PutNotificationChannelRequest,
  PutNotificationChannelResponse,
  PutNotificationChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<PutNotificationChannelRequest>,
  output: __S(1) as any as S.Schema<PutNotificationChannelResponse>,
  errors: [InternalErrorException, InvalidOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutNotificationChannel",
}));

export type PutPolicyError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an Firewall Manager policy.
 *
 * A Firewall Manager policy is specific to the individual policy type. If you want to enforce multiple
 * policy types across accounts, you can create multiple policies. You can create more than one
 * policy for each type.
 *
 * If you add a new account to an organization that you created with Organizations, Firewall Manager
 * automatically applies the policy to the resources in that account that are within scope of
 * the policy.
 *
 * Firewall Manager provides the following types of policies:
 *
 * - **WAF policy** - This policy applies WAF web ACL
 * protections to specified accounts and resources.
 *
 * - **Shield Advanced policy** - This policy applies Shield Advanced
 * protection to specified accounts and resources.
 *
 * - **Security Groups policy** - This type of policy gives you
 * control over security groups that are in use throughout your organization in
 * Organizations and lets you enforce a baseline set of rules across your organization.
 *
 * - **Network ACL policy** - This type of policy gives you
 * control over the network ACLs that are in use throughout your organization in
 * Organizations and lets you enforce a baseline set of first and last network ACL rules across your organization.
 *
 * - **Network Firewall policy** - This policy applies
 * Network Firewall protection to your organization's VPCs.
 *
 * - **DNS Firewall policy** - This policy applies
 * Amazon Route 53 Resolver DNS Firewall protections to your organization's VPCs.
 *
 * - **Third-party firewall policy** - This policy applies third-party firewall protections. Third-party firewalls are available by subscription through the Amazon Web Services Marketplace console at Amazon Web Services Marketplace.
 *
 * - **Palo Alto Networks Cloud NGFW policy** - This policy applies Palo Alto Networks Cloud Next Generation Firewall (NGFW) protections and Palo Alto Networks Cloud NGFW rulestacks to your organization's VPCs.
 *
 * - **Fortigate CNF policy** - This policy applies
 * Fortigate Cloud Native Firewall (CNF) protections. Fortigate CNF is a cloud-centered solution that blocks Zero-Day threats and secures cloud infrastructures with industry-leading advanced threat prevention, smart web application firewalls (WAF), and API protection.
 */
export const putPolicy: API.OperationMethod<
  PutPolicyRequest,
  PutPolicyResponse,
  PutPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185) as any as S.Schema<PutPolicyRequest>,
  output: __S(57) as any as S.Schema<PutPolicyResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPolicy",
}));

export type PutProtocolsListError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an Firewall Manager protocols list.
 */
export const putProtocolsList: API.OperationMethod<
  PutProtocolsListRequest,
  PutProtocolsListResponse,
  PutProtocolsListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<PutProtocolsListRequest>,
  output: __S(63) as any as S.Schema<PutProtocolsListResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutProtocolsList",
}));

export type PutResourceSetError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates the resource set.
 *
 * An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.
 */
export const putResourceSet: API.OperationMethod<
  PutResourceSetRequest,
  PutResourceSetResponse,
  PutResourceSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187) as any as S.Schema<PutResourceSetRequest>,
  output: __S(66) as any as S.Schema<PutResourceSetResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourceSet",
}));

export type TagResourceError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds one or more tags to an Amazon Web Services resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<TagResourceRequest>,
  output: __S(1) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalErrorException
  | InvalidInputException
  | InvalidOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes one or more tags from an Amazon Web Services resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189) as any as S.Schema<UntagResourceRequest>,
  output: __S(1) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalErrorException,
    InvalidInputException,
    InvalidOperationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AdminAccount: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateAdminAccountRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateAdminAccountResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ThirdPartyFirewall: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateThirdPartyFirewallRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ ThirdPartyFirewallStatus: S.optional(S.String) })).annotate(
        {
          identifier: "AssociateThirdPartyFirewallResponse",
        },
      );
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceSetIdentifier: S.String, Items: __S(4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchAssociateResourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ URI: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({ identifier: "FailedItem" });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceSetIdentifier: S.String, FailedItems: __S(7) }),
      ).annotate({
        identifier: "BatchAssociateResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceSetIdentifier: S.String, Items: __S(4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDisassociateResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ListId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAppsListRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteNotificationChannelRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteNotificationChannelResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PolicyId: S.String, DeleteAllPolicyResources: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeletePolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ListId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteProtocolsListRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteResourceSetRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateAdminAccountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ThirdPartyFirewall: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateThirdPartyFirewallRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAdminAccountRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AdminAccount: S.optional(S.String), RoleStatus: S.optional(S.String) }),
      ).annotate({ identifier: "GetAdminAccountResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AdminAccount: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAdminScopeRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Accounts: S.optional(__S(4)),
          AllAccountsEnabled: S.optional(S.Boolean),
          ExcludeSpecifiedAccounts: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AccountScope" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OrganizationalUnits: S.optional(__S(4)),
          AllOrganizationalUnitsEnabled: S.optional(S.Boolean),
          ExcludeSpecifiedOrganizationalUnits: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "OrganizationalUnitScope" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Regions: S.optional(__S(4)), AllRegionsEnabled: S.optional(S.Boolean) }),
      ).annotate({ identifier: "RegionScope" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyTypes: S.optional(__S(24)),
          AllPolicyTypesEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PolicyTypeScope" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountScope: S.optional(__S(21)),
          OrganizationalUnitScope: S.optional(__S(22)),
          RegionScope: S.optional(__S(23)),
          PolicyTypeScope: S.optional(__S(25)),
        }),
      ).annotate({ identifier: "AdminScope" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AdminScope: S.optional(__S(26)), Status: S.optional(S.String) }),
      ).annotate({ identifier: "GetAdminScopeResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ListId: S.String, DefaultList: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAppsListRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AppName: S.String, Protocol: S.String, Port: S.Number }),
      ).annotate({ identifier: "App" });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(30).pipe(S.optional));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ListId: S.optional(S.String),
          ListName: S.String,
          ListUpdateToken: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AppsList: __S(30),
          PreviousAppsList: S.optional(__S(31)),
        }),
      ).annotate({ identifier: "AppsListData" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AppsList: S.optional(__S(32)), AppsListArn: S.optional(S.String) }),
      ).annotate({ identifier: "GetAppsListResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ PolicyId: S.String, MemberAccount: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetComplianceDetailRequest",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.optional(S.String),
          ViolationReason: S.optional(S.String),
          ResourceType: S.optional(S.String),
          Metadata: S.optional(__S(35)),
        }),
      ).annotate({ identifier: "ComplianceViolator" });
    case 5:
      return S.Array(__S(36));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PolicyOwner: S.optional(S.String),
          PolicyId: S.optional(S.String),
          MemberAccount: S.optional(S.String),
          Violators: S.optional(__S(37)),
          EvaluationLimitExceeded: S.optional(S.Boolean),
          ExpiredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IssueInfoMap: S.optional(__S(38)),
        }),
      ).annotate({ identifier: "PolicyComplianceDetail" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ PolicyComplianceDetail: S.optional(__S(39)) })).annotate({
        identifier: "GetComplianceDetailResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetNotificationChannelRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SnsTopicArn: S.optional(S.String), SnsRoleName: S.optional(S.String) }),
      ).annotate({
        identifier: "GetNotificationChannelResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ PolicyId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyRequest" });
    case 4:
      return S.suspend(() => S.Struct({ FirewallDeploymentModel: S.optional(S.String) })).annotate({
        identifier: "NetworkFirewallPolicy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.Number), Type: S.optional(S.Number) }),
      ).annotate({ identifier: "NetworkAclIcmpTypeCode" });
    case 6:
      return S.suspend(() =>
        S.Struct({ From: S.optional(S.Number), To: S.optional(S.Number) }),
      ).annotate({ identifier: "NetworkAclPortRange" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IcmpTypeCode: S.optional(__S(45)),
          Protocol: S.String,
          PortRange: S.optional(__S(46)),
          CidrBlock: S.optional(S.String),
          Ipv6CidrBlock: S.optional(S.String),
          RuleAction: S.String,
          Egress: S.Boolean,
        }),
      ).annotate({ identifier: "NetworkAclEntry" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47));
    case 1:
      return S.suspend(() =>
        S.Struct({
          FirstEntries: S.optional(__S(48)),
          ForceRemediateForFirstEntries: S.Boolean,
          LastEntries: S.optional(__S(48)),
          ForceRemediateForLastEntries: S.Boolean,
        }),
      ).annotate({ identifier: "NetworkAclEntrySet" });
    case 2:
      return S.suspend(() => S.Struct({ NetworkAclEntrySet: __S(49) })).annotate({
        identifier: "NetworkAclCommonPolicy",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NetworkFirewallPolicy: S.optional(__S(44)),
          ThirdPartyFirewallPolicy: S.optional(__S(44)),
          NetworkAclCommonPolicy: S.optional(__S(50)),
        }),
      ).annotate({ identifier: "PolicyOption" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          ManagedServiceData: S.optional(S.String),
          PolicyOption: S.optional(__S(51)),
        }),
      ).annotate({
        identifier: "SecurityServicePolicyData",
      });
    case 5:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "ResourceTag",
      });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(4).pipe(S.optional));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicyId: S.optional(S.String),
          PolicyName: S.String,
          PolicyUpdateToken: S.optional(S.String),
          SecurityServicePolicyData: __S(52),
          ResourceType: S.String,
          ResourceTypeList: S.optional(__S(4)),
          ResourceTags: S.optional(__S(54)),
          ExcludeResourceTags: S.Boolean,
          RemediationEnabled: S.Boolean,
          DeleteUnusedFMManagedResources: S.optional(S.Boolean),
          IncludeMap: S.optional(__S(55)),
          ExcludeMap: S.optional(__S(55)),
          ResourceSetIds: S.optional(__S(4)),
          PolicyDescription: S.optional(S.String),
          PolicyStatus: S.optional(S.String),
          ResourceTagLogicalOperator: S.optional(S.String),
        }),
      ).annotate({ identifier: "Policy" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Policy: S.optional(__S(56)), PolicyArn: S.optional(S.String) }),
      ).annotate({ identifier: "GetPolicyResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PolicyId: S.String,
          MemberAccountId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetProtectionStatusRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AdminAccountId: S.optional(S.String),
          ServiceType: S.optional(S.String),
          Data: S.optional(S.String),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetProtectionStatusResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ListId: S.String, DefaultList: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetProtocolsListRequest" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(4).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ListId: S.optional(S.String),
          ListName: S.String,
          ListUpdateToken: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ProtocolsList: __S(4),
          PreviousProtocolsList: S.optional(__S(61)),
        }),
      ).annotate({ identifier: "ProtocolsListData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtocolsList: S.optional(__S(62)),
          ProtocolsListArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetProtocolsListResponse" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourceSetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.String,
          Description: S.optional(S.String),
          UpdateToken: S.optional(S.String),
          ResourceTypeList: __S(4),
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ResourceSetStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceSet" });
    case 2:
      return S.suspend(() => S.Struct({ ResourceSet: __S(65), ResourceSetArn: S.String })).annotate(
        { identifier: "GetResourceSetResponse" },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ ThirdPartyFirewall: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetThirdPartyFirewallAssociationStatusRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ThirdPartyFirewallStatus: S.optional(S.String),
          MarketplaceOnboardingStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetThirdPartyFirewallAssociationStatusResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PolicyId: S.String,
          MemberAccount: S.String,
          ResourceId: S.String,
          ResourceType: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetViolationDetailsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Reference: S.optional(S.String),
          TargetViolationReasons: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "PartialMatch" });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IPV4Range: S.optional(S.String),
          IPV6Range: S.optional(S.String),
          PrefixListId: S.optional(S.String),
          Protocol: S.optional(S.String),
          FromPort: S.optional(S.Number),
          ToPort: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SecurityGroupRuleDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RemediationActionType: S.optional(S.String),
          Description: S.optional(S.String),
          RemediationResult: S.optional(__S(72)),
          IsDefaultAction: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "SecurityGroupRemediationAction",
      });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ViolationTargetDescription: S.optional(S.String),
          PartialMatches: S.optional(__S(71)),
          PossibleSecurityGroupRemediationActions: S.optional(__S(74)),
        }),
      ).annotate({
        identifier: "AwsVPCSecurityGroupViolation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ViolatingSecurityGroups: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceViolation",
      });
    case 5:
      return S.Array(__S(76));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          AwsEc2NetworkInterfaceViolations: S.optional(__S(77)),
        }),
      ).annotate({ identifier: "AwsEc2InstanceViolation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          VPC: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          TargetViolationReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallMissingFirewallViolation",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          VPC: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          CurrentRouteTable: S.optional(S.String),
          ExpectedRouteTable: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallMissingExpectedRTViolation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.optional(S.String),
          ResourceId: S.optional(S.String),
          Priority: S.optional(S.Number),
        }),
      ).annotate({ identifier: "StatelessRuleGroup" });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() => S.Struct({ Action: S.optional(S.String) })).annotate({
        identifier: "NetworkFirewallStatefulRuleGroupOverride",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.optional(S.String),
          ResourceId: S.optional(S.String),
          Priority: S.optional(S.Number),
          Override: S.optional(__S(83)),
        }),
      ).annotate({ identifier: "StatefulRuleGroup" });
    case 5:
      return S.Array(__S(84));
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleOrder: S.optional(S.String),
          StreamExceptionPolicy: S.optional(S.String),
        }),
      ).annotate({ identifier: "StatefulEngineOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StatelessRuleGroups: S.optional(__S(82)),
          StatelessDefaultActions: S.optional(__S(4)),
          StatelessFragmentDefaultActions: S.optional(__S(4)),
          StatelessCustomActions: S.optional(__S(4)),
          StatefulRuleGroups: S.optional(__S(85)),
          StatefulDefaultActions: S.optional(__S(4)),
          StatefulEngineOptions: S.optional(__S(86)),
        }),
      ).annotate({
        identifier: "NetworkFirewallPolicyDescription",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          CurrentPolicyDescription: S.optional(__S(87)),
          ExpectedPolicyDescription: S.optional(__S(87)),
        }),
      ).annotate({
        identifier: "NetworkFirewallPolicyModifiedViolation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DestinationType: S.optional(S.String),
          TargetType: S.optional(S.String),
          Destination: S.optional(S.String),
          Target: S.optional(S.String),
        }),
      ).annotate({ identifier: "Route" });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          IpV4Cidr: S.optional(S.String),
          PrefixListId: S.optional(S.String),
          IpV6Cidr: S.optional(S.String),
          ContributingSubnets: S.optional(__S(4)),
          AllowedTargets: S.optional(__S(4)),
          RouteTableId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExpectedRoute" });
    case 4:
      return S.Array(__S(91));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubnetId: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(S.String),
          RouteTableId: S.optional(S.String),
          ViolatingRoutes: S.optional(__S(90)),
          IsRouteTableUsedInDifferentAZ: S.optional(S.Boolean),
          CurrentFirewallSubnetRouteTable: S.optional(S.String),
          ExpectedFirewallEndpoint: S.optional(S.String),
          FirewallSubnetId: S.optional(S.String),
          ExpectedFirewallSubnetRoutes: S.optional(__S(92)),
          ActualFirewallSubnetRoutes: S.optional(__S(90)),
          InternetGatewayId: S.optional(S.String),
          CurrentInternetGatewayRouteTable: S.optional(S.String),
          ExpectedInternetGatewayRoutes: S.optional(__S(92)),
          ActualInternetGatewayRoutes: S.optional(__S(90)),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallInternetTrafficNotInspectedViolation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AffectedSubnets: S.optional(__S(4)),
          RouteTableId: S.optional(S.String),
          IsRouteTableUsedInDifferentAZ: S.optional(S.Boolean),
          ViolatingRoute: S.optional(__S(89)),
          CurrentFirewallSubnetRouteTable: S.optional(S.String),
          ExpectedFirewallEndpoint: S.optional(S.String),
          ActualFirewallEndpoint: S.optional(S.String),
          ExpectedFirewallSubnetId: S.optional(S.String),
          ActualFirewallSubnetId: S.optional(S.String),
          ExpectedFirewallSubnetRoutes: S.optional(__S(92)),
          ActualFirewallSubnetRoutes: S.optional(__S(90)),
          InternetGatewayId: S.optional(S.String),
          CurrentInternetGatewayRouteTable: S.optional(S.String),
          ExpectedInternetGatewayRoutes: S.optional(__S(92)),
          ActualInternetGatewayRoutes: S.optional(__S(90)),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallInvalidRouteConfigurationViolation",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          RouteTableId: S.optional(S.String),
          VpcId: S.optional(S.String),
          ViolatingRoutes: S.optional(__S(90)),
        }),
      ).annotate({
        identifier: "NetworkFirewallBlackHoleRouteDetectedViolation",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FirewallSubnetId: S.optional(S.String),
          ViolatingRoutes: S.optional(__S(90)),
          RouteTableId: S.optional(S.String),
          FirewallEndpoint: S.optional(S.String),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallUnexpectedFirewallRoutesViolation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayId: S.optional(S.String),
          ViolatingRoutes: S.optional(__S(90)),
          RouteTableId: S.optional(S.String),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallUnexpectedGatewayRoutesViolation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ExpectedRoutes: S.optional(__S(92)),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallMissingExpectedRoutesViolation",
      });
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ViolationTargetDescription: S.optional(S.String),
          ConflictingPriority: S.optional(S.Number),
          ConflictingPolicyId: S.optional(S.String),
          UnavailablePriorities: S.optional(__S(99)),
        }),
      ).annotate({
        identifier: "DnsRuleGroupPriorityConflictViolation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ViolationTargetDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DnsDuplicateRuleGroupViolation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ViolationTargetDescription: S.optional(S.String),
          NumberOfRuleGroupsAlreadyAssociated: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DnsRuleGroupLimitExceededViolation",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FirewallSubnetId: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(S.String),
          SubnetAvailabilityZoneId: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FirewallSubnetIsOutOfScopeViolation",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SubnetId: S.optional(S.String),
          VpcId: S.optional(S.String),
          RouteTableId: S.optional(S.String),
          ViolatingRoutes: S.optional(__S(90)),
          SubnetAvailabilityZone: S.optional(S.String),
          SubnetAvailabilityZoneId: S.optional(S.String),
          CurrentFirewallSubnetRouteTable: S.optional(S.String),
          FirewallSubnetId: S.optional(S.String),
          FirewallSubnetRoutes: S.optional(__S(90)),
          InternetGatewayId: S.optional(S.String),
          CurrentInternetGatewayRouteTable: S.optional(S.String),
          InternetGatewayRoutes: S.optional(__S(90)),
        }),
      ).annotate({
        identifier: "RouteHasOutOfScopeEndpointViolation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FirewallSubnetId: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(S.String),
          SubnetAvailabilityZoneId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FirewallSubnetMissingVPCEndpointViolation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EntryDetail: S.optional(__S(47)),
          EntryRuleNumber: S.optional(S.Number),
          EntryType: S.optional(S.String),
        }),
      ).annotate({ identifier: "EntryDescription" });
    case 3:
      return S.Array(__S(106));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExpectedEntry: S.optional(__S(106)),
          ExpectedEvaluationOrder: S.optional(S.String),
          ActualEvaluationOrder: S.optional(S.String),
          EntryAtExpectedEvaluationOrder: S.optional(__S(106)),
          EntriesWithConflicts: S.optional(__S(107)),
          EntryViolationReasons: S.optional(__S(24)),
        }),
      ).annotate({ identifier: "EntryViolation" });
    case 5:
      return S.Array(__S(108));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Vpc: S.optional(S.String),
          Subnet: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(S.String),
          CurrentAssociatedNetworkAcl: S.optional(S.String),
          EntryViolations: S.optional(__S(109)),
        }),
      ).annotate({
        identifier: "InvalidNetworkAclEntriesViolation",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.optional(S.String), Description: S.optional(S.String) }),
      ).annotate({ identifier: "ActionTarget" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DestinationCidrBlock: S.optional(S.String),
          DestinationPrefixListId: S.optional(S.String),
          DestinationIpv6CidrBlock: S.optional(S.String),
          VpcEndpointId: S.optional(__S(111)),
          GatewayId: S.optional(__S(111)),
          RouteTableId: __S(111),
        }),
      ).annotate({ identifier: "EC2CreateRouteAction" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DestinationCidrBlock: S.optional(S.String),
          DestinationPrefixListId: S.optional(S.String),
          DestinationIpv6CidrBlock: S.optional(S.String),
          GatewayId: S.optional(__S(111)),
          RouteTableId: __S(111),
        }),
      ).annotate({ identifier: "EC2ReplaceRouteAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DestinationCidrBlock: S.optional(S.String),
          DestinationPrefixListId: S.optional(S.String),
          DestinationIpv6CidrBlock: S.optional(S.String),
          RouteTableId: __S(111),
        }),
      ).annotate({ identifier: "EC2DeleteRouteAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          VpcId: __S(111),
          RouteTableId: __S(111),
        }),
      ).annotate({ identifier: "EC2CopyRouteTableAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          AssociationId: __S(111),
          RouteTableId: __S(111),
        }),
      ).annotate({
        identifier: "EC2ReplaceRouteTableAssociationAction",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          RouteTableId: __S(111),
          SubnetId: S.optional(__S(111)),
          GatewayId: S.optional(__S(111)),
        }),
      ).annotate({
        identifier: "EC2AssociateRouteTableAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Description: S.optional(S.String), VpcId: __S(111) }),
      ).annotate({
        identifier: "EC2CreateRouteTableAction",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          FirewallCreationConfig: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FMSPolicyUpdateFirewallCreationConfigAction",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Vpc: S.optional(__S(111)),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CreateNetworkAclAction" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          AssociationId: S.optional(__S(111)),
          NetworkAclId: S.optional(__S(111)),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ReplaceNetworkAclAssociationAction",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          NetworkAclId: S.optional(__S(111)),
          NetworkAclEntriesToBeCreated: S.optional(__S(107)),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CreateNetworkAclEntriesAction",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          NetworkAclId: S.optional(__S(111)),
          NetworkAclEntriesToBeDeleted: S.optional(__S(107)),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DeleteNetworkAclEntriesAction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          EC2CreateRouteAction: S.optional(__S(112)),
          EC2ReplaceRouteAction: S.optional(__S(113)),
          EC2DeleteRouteAction: S.optional(__S(114)),
          EC2CopyRouteTableAction: S.optional(__S(115)),
          EC2ReplaceRouteTableAssociationAction: S.optional(__S(116)),
          EC2AssociateRouteTableAction: S.optional(__S(117)),
          EC2CreateRouteTableAction: S.optional(__S(118)),
          FMSPolicyUpdateFirewallCreationConfigAction: S.optional(__S(119)),
          CreateNetworkAclAction: S.optional(__S(120)),
          ReplaceNetworkAclAssociationAction: S.optional(__S(121)),
          CreateNetworkAclEntriesAction: S.optional(__S(122)),
          DeleteNetworkAclEntriesAction: S.optional(__S(123)),
        }),
      ).annotate({ identifier: "RemediationAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({ RemediationAction: S.optional(__S(124)), Order: S.optional(S.Number) }),
      ).annotate({
        identifier: "RemediationActionWithOrder",
      });
    case 6:
      return S.Array(__S(125));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          OrderedRemediationActions: __S(126),
          IsDefaultAction: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "PossibleRemediationAction",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Actions: S.optional(__S(128)),
        }),
      ).annotate({
        identifier: "PossibleRemediationActions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ WebACLArn: S.optional(S.String), Description: S.optional(S.String) }),
      ).annotate({
        identifier: "WebACLHasIncompatibleConfigurationViolation",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WebACLArn: S.optional(S.String),
          OutOfScopeResourceList: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "WebACLHasOutOfScopeResourcesViolation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AwsVPCSecurityGroupViolation: S.optional(__S(75)),
          AwsEc2NetworkInterfaceViolation: S.optional(__S(76)),
          AwsEc2InstanceViolation: S.optional(__S(78)),
          NetworkFirewallMissingFirewallViolation: S.optional(__S(79)),
          NetworkFirewallMissingSubnetViolation: S.optional(__S(79)),
          NetworkFirewallMissingExpectedRTViolation: S.optional(__S(80)),
          NetworkFirewallPolicyModifiedViolation: S.optional(__S(88)),
          NetworkFirewallInternetTrafficNotInspectedViolation: S.optional(__S(93)),
          NetworkFirewallInvalidRouteConfigurationViolation: S.optional(__S(94)),
          NetworkFirewallBlackHoleRouteDetectedViolation: S.optional(__S(95)),
          NetworkFirewallUnexpectedFirewallRoutesViolation: S.optional(__S(96)),
          NetworkFirewallUnexpectedGatewayRoutesViolation: S.optional(__S(97)),
          NetworkFirewallMissingExpectedRoutesViolation: S.optional(__S(98)),
          DnsRuleGroupPriorityConflictViolation: S.optional(__S(100)),
          DnsDuplicateRuleGroupViolation: S.optional(__S(101)),
          DnsRuleGroupLimitExceededViolation: S.optional(__S(102)),
          FirewallSubnetIsOutOfScopeViolation: S.optional(__S(103)),
          RouteHasOutOfScopeEndpointViolation: S.optional(__S(104)),
          ThirdPartyFirewallMissingFirewallViolation: S.optional(__S(79)),
          ThirdPartyFirewallMissingSubnetViolation: S.optional(__S(79)),
          ThirdPartyFirewallMissingExpectedRouteTableViolation: S.optional(__S(80)),
          FirewallSubnetMissingVPCEndpointViolation: S.optional(__S(105)),
          InvalidNetworkAclEntriesViolation: S.optional(__S(110)),
          PossibleRemediationActions: S.optional(__S(129)),
          WebACLHasIncompatibleConfigurationViolation: S.optional(__S(130)),
          WebACLHasOutOfScopeResourcesViolation: S.optional(__S(131)),
        }),
      ).annotate({ identifier: "ResourceViolation" });
    case 5:
      return S.Array(__S(132));
    case 6:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 7:
      return S.Array(__S(134));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicyId: S.String,
          MemberAccount: S.String,
          ResourceId: S.String,
          ResourceType: S.String,
          ResourceViolations: __S(133),
          ResourceTags: S.optional(__S(135)),
          ResourceDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "ViolationDetail" });
    case 1:
      return S.suspend(() => S.Struct({ ViolationDetail: S.optional(__S(136)) })).annotate({
        identifier: "GetViolationDetailsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAdminAccountsForOrganizationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AdminAccount: S.optional(S.String),
          DefaultAdmin: S.optional(S.Boolean),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "AdminAccountSummary" });
    case 4:
      return S.Array(__S(139));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AdminAccounts: S.optional(__S(140)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAdminAccountsForOrganizationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAdminsManagingAccountRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AdminAccounts: S.optional(__S(4)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAdminsManagingAccountResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DefaultLists: S.optional(S.Boolean),
          NextToken: S.optional(S.String),
          MaxResults: S.Number,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAppsListsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ListArn: S.optional(S.String),
          ListId: S.optional(S.String),
          ListName: S.optional(S.String),
          AppsList: S.optional(__S(30)),
        }),
      ).annotate({ identifier: "AppsListDataSummary" });
    case 2:
      return S.Array(__S(145));
    case 3:
      return S.suspend(() =>
        S.Struct({ AppsLists: S.optional(__S(146)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAppsListsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PolicyId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListComplianceStatusRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ComplianceStatus: S.optional(S.String),
          ViolatorCount: S.optional(S.Number),
          EvaluationLimitExceeded: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EvaluationResult" });
    case 6:
      return S.Array(__S(149));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PolicyOwner: S.optional(S.String),
          PolicyId: S.optional(S.String),
          PolicyName: S.optional(S.String),
          MemberAccount: S.optional(S.String),
          EvaluationResults: S.optional(__S(150)),
          LastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IssueInfoMap: S.optional(__S(38)),
        }),
      ).annotate({ identifier: "PolicyComplianceStatus" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyComplianceStatusList: S.optional(__S(152)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListComplianceStatusResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MemberAccountIds: __S(4),
          ResourceType: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDiscoveredResourcesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          URI: S.optional(S.String),
          AccountId: S.optional(S.String),
          Type: S.optional(S.String),
          Name: S.optional(S.String),
        }),
      ).annotate({ identifier: "DiscoveredResource" });
    case 4:
      return S.Array(__S(155));
    case 5:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(156)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDiscoveredResourcesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListMemberAccountsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MemberAccounts: S.optional(__S(4)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListMemberAccountsResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPoliciesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.optional(S.String),
          PolicyId: S.optional(S.String),
          PolicyName: S.optional(S.String),
          ResourceType: S.optional(S.String),
          SecurityServiceType: S.optional(S.String),
          RemediationEnabled: S.optional(S.Boolean),
          DeleteUnusedFMManagedResources: S.optional(S.Boolean),
          PolicyStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicySummary" });
    case 2:
      return S.Array(__S(161));
    case 3:
      return S.suspend(() =>
        S.Struct({ PolicyList: S.optional(__S(162)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPoliciesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DefaultLists: S.optional(S.Boolean),
          NextToken: S.optional(S.String),
          MaxResults: S.Number,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListProtocolsListsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ListArn: S.optional(S.String),
          ListId: S.optional(S.String),
          ListName: S.optional(S.String),
          ProtocolsList: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "ProtocolsListDataSummary" });
    case 6:
      return S.Array(__S(165));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtocolsLists: S.optional(__S(166)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProtocolsListsResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListResourceSetResourcesRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ URI: S.String, AccountId: S.optional(S.String) })).annotate(
        { identifier: "Resource" },
      );
    case 2:
      return S.Array(__S(169));
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: __S(170), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListResourceSetResourcesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListResourceSetsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ResourceSetStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceSetSummary" });
    case 6:
      return S.Array(__S(173));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceSets: S.optional(__S(174)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListResourceSetsResponse" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ TagList: S.optional(__S(135)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ThirdPartyFirewall: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.Number,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListThirdPartyFirewallFirewallPoliciesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FirewallPolicyId: S.optional(S.String),
          FirewallPolicyName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ThirdPartyFirewallFirewallPolicy",
      });
    case 4:
      return S.Array(__S(179));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ThirdPartyFirewallFirewallPolicies: S.optional(__S(180)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListThirdPartyFirewallFirewallPoliciesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AdminAccount: S.String, AdminScope: S.optional(__S(26)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAdminAccountRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ AppsList: __S(32), TagList: S.optional(__S(135)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAppsListRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SnsTopicArn: S.String, SnsRoleName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutNotificationChannelRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Policy: __S(56), TagList: S.optional(__S(135)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutPolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ProtocolsList: __S(62), TagList: S.optional(__S(135)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutProtocolsListRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceSet: __S(65), TagList: S.optional(__S(135)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutResourceSetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagList: __S(135) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
  }
}
