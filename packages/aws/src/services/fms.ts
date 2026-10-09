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
const AssociateAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateAdminAccountRequest>;
export interface AssociateAdminAccountResponse {}
const AssociateAdminAccountResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateAdminAccountResponse>;
export type ThirdPartyFirewall =
  | "PALO_ALTO_NETWORKS_CLOUD_NGFW"
  | "FORTIGATE_CLOUD_NATIVE_FIREWALL"
  | (string & {});
const ThirdPartyFirewall = S.String;

export interface AssociateThirdPartyFirewallRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
const AssociateThirdPartyFirewallRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AssociateThirdPartyFirewallRequest>;
export type ThirdPartyFirewallAssociationStatus =
  | "ONBOARDING"
  | "ONBOARD_COMPLETE"
  | "OFFBOARDING"
  | "OFFBOARD_COMPLETE"
  | "NOT_EXIST"
  | (string & {});
const ThirdPartyFirewallAssociationStatus = S.String;

export interface AssociateThirdPartyFirewallResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
}
const AssociateThirdPartyFirewallResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateThirdPartyFirewallResponse>;
export type Identifier = string;
export type IdentifierList = string[];
const IdentifierList = /*@__PURE__*/ __L.at(__c0, 4);
export interface BatchAssociateResourceRequest {
  ResourceSetIdentifier: string;
  Items: string[];
}
const BatchAssociateResourceRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchAssociateResourceRequest>;
export type FailedItemReason =
  | "NOT_VALID_ARN"
  | "NOT_VALID_PARTITION"
  | "NOT_VALID_REGION"
  | "NOT_VALID_SERVICE"
  | "NOT_VALID_RESOURCE_TYPE"
  | "NOT_VALID_ACCOUNT_ID"
  | (string & {});
const FailedItemReason = S.String;

export interface FailedItem {
  URI?: string;
  Reason?: FailedItemReason;
}
const FailedItem = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<FailedItem>;
export type FailedItemList = FailedItem[];
const FailedItemList = /*@__PURE__*/ __L.at(__c0, 7);
export interface BatchAssociateResourceResponse {
  ResourceSetIdentifier: string;
  FailedItems: FailedItem[];
}
const BatchAssociateResourceResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchAssociateResourceResponse>;
export interface BatchDisassociateResourceRequest {
  ResourceSetIdentifier: string;
  Items: string[];
}
const BatchDisassociateResourceRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchDisassociateResourceRequest>;
export interface BatchDisassociateResourceResponse {
  ResourceSetIdentifier: string;
  FailedItems: FailedItem[];
}
const BatchDisassociateResourceResponse =
  BatchAssociateResourceResponse as any as S.Schema<BatchDisassociateResourceResponse>;
export type ListId = string;
export interface DeleteAppsListRequest {
  ListId: string;
}
const DeleteAppsListRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<DeleteAppsListRequest>;
export interface DeleteAppsListResponse {}
const DeleteAppsListResponse =
  AssociateAdminAccountResponse as any as S.Schema<DeleteAppsListResponse>;
export interface DeleteNotificationChannelRequest {}
const DeleteNotificationChannelRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<DeleteNotificationChannelRequest>;
export interface DeleteNotificationChannelResponse {}
const DeleteNotificationChannelResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<DeleteNotificationChannelResponse>;
export type PolicyId = string;
export interface DeletePolicyRequest {
  PolicyId: string;
  DeleteAllPolicyResources?: boolean;
}
const DeletePolicyRequest = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<DeletePolicyRequest>;
export interface DeletePolicyResponse {}
const DeletePolicyResponse = AssociateAdminAccountResponse as any as S.Schema<DeletePolicyResponse>;
export interface DeleteProtocolsListRequest {
  ListId: string;
}
const DeleteProtocolsListRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<DeleteProtocolsListRequest>;
export interface DeleteProtocolsListResponse {}
const DeleteProtocolsListResponse =
  AssociateAdminAccountResponse as any as S.Schema<DeleteProtocolsListResponse>;
export type Base62Id = string;
export interface DeleteResourceSetRequest {
  Identifier: string;
}
const DeleteResourceSetRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DeleteResourceSetRequest>;
export interface DeleteResourceSetResponse {}
const DeleteResourceSetResponse =
  AssociateAdminAccountResponse as any as S.Schema<DeleteResourceSetResponse>;
export interface DisassociateAdminAccountRequest {}
const DisassociateAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DisassociateAdminAccountRequest>;
export interface DisassociateAdminAccountResponse {}
const DisassociateAdminAccountResponse =
  DeleteNotificationChannelResponse as any as S.Schema<DisassociateAdminAccountResponse>;
export interface DisassociateThirdPartyFirewallRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
const DisassociateThirdPartyFirewallRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DisassociateThirdPartyFirewallRequest>;
export interface DisassociateThirdPartyFirewallResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
}
const DisassociateThirdPartyFirewallResponse =
  AssociateThirdPartyFirewallResponse as any as S.Schema<DisassociateThirdPartyFirewallResponse>;
export interface GetAdminAccountRequest {}
const GetAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<GetAdminAccountRequest>;
export type AccountRoleStatus =
  | "READY"
  | "CREATING"
  | "PENDING_DELETION"
  | "DELETING"
  | "DELETED"
  | (string & {});
const AccountRoleStatus = S.String;

export interface GetAdminAccountResponse {
  AdminAccount?: string;
  RoleStatus?: AccountRoleStatus;
}
const GetAdminAccountResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<GetAdminAccountResponse>;
export interface GetAdminScopeRequest {
  AdminAccount: string;
}
const GetAdminScopeRequest = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<GetAdminScopeRequest>;
export type AccountIdList = string[];
const AccountIdList = IdentifierList as any as S.Schema<AccountIdList>;
export interface AccountScope {
  Accounts?: string[];
  AllAccountsEnabled?: boolean;
  ExcludeSpecifiedAccounts?: boolean;
}
const AccountScope = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<AccountScope>;
export type OrganizationalUnitId = string;
export type OrganizationalUnitIdList = string[];
const OrganizationalUnitIdList = IdentifierList as any as S.Schema<OrganizationalUnitIdList>;
export interface OrganizationalUnitScope {
  OrganizationalUnits?: string[];
  AllOrganizationalUnitsEnabled?: boolean;
  ExcludeSpecifiedOrganizationalUnits?: boolean;
}
const OrganizationalUnitScope = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<OrganizationalUnitScope>;
export type AWSRegion = string;
export type AWSRegionList = string[];
const AWSRegionList = IdentifierList as any as S.Schema<AWSRegionList>;
export interface RegionScope {
  Regions?: string[];
  AllRegionsEnabled?: boolean;
}
const RegionScope = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<RegionScope>;
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
const SecurityServiceType = S.String;

export type SecurityServiceTypeList = SecurityServiceType[];
const SecurityServiceTypeList = /*@__PURE__*/ __L.at(__c3, 0);
export interface PolicyTypeScope {
  PolicyTypes?: SecurityServiceType[];
  AllPolicyTypesEnabled?: boolean;
}
const PolicyTypeScope = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<PolicyTypeScope>;
export interface AdminScope {
  AccountScope?: AccountScope;
  OrganizationalUnitScope?: OrganizationalUnitScope;
  RegionScope?: RegionScope;
  PolicyTypeScope?: PolicyTypeScope;
}
const AdminScope = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<AdminScope>;
export type OrganizationStatus =
  | "ONBOARDING"
  | "ONBOARDING_COMPLETE"
  | "OFFBOARDING"
  | "OFFBOARDING_COMPLETE"
  | (string & {});
const OrganizationStatus = S.String;

export interface GetAdminScopeResponse {
  AdminScope?: AdminScope;
  Status?: OrganizationStatus;
}
const GetAdminScopeResponse = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<GetAdminScopeResponse>;
export interface GetAppsListRequest {
  ListId: string;
  DefaultList?: boolean;
}
const GetAppsListRequest = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<GetAppsListRequest>;
export type ResourceName = string;
export type UpdateToken = string;
export type Protocol = string;
export type IPPortNumber = number;
export interface App {
  AppName: string;
  Protocol: string;
  Port: number;
}
const App = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<App>;
export type AppsList = App[];
const AppsList = /*@__PURE__*/ __L.at(__c3, 6);
export type PreviousListVersion = string;
export type PreviousAppsList = { [key: string]: App[] | undefined };
const PreviousAppsList = /*@__PURE__*/ __L.at(__c3, 7);
export interface AppsListData {
  ListId?: string;
  ListName: string;
  ListUpdateToken?: string;
  CreateTime?: Date;
  LastUpdateTime?: Date;
  AppsList: App[];
  PreviousAppsList?: { [key: string]: App[] | undefined };
}
const AppsListData = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<AppsListData>;
export type ResourceArn = string;
export interface GetAppsListResponse {
  AppsList?: AppsListData;
  AppsListArn?: string;
}
const GetAppsListResponse = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<GetAppsListResponse>;
export interface GetComplianceDetailRequest {
  PolicyId: string;
  MemberAccount: string;
}
const GetComplianceDetailRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetComplianceDetailRequest>;
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
const ViolationReason = S.String;

export type ResourceType = string;
export type LengthBoundedString = string;
export type ComplianceViolatorMetadata = { [key: string]: string | undefined };
const ComplianceViolatorMetadata = /*@__PURE__*/ __L.at(__c4, 3);
export interface ComplianceViolator {
  ResourceId?: string;
  ViolationReason?: ViolationReason;
  ResourceType?: string;
  Metadata?: { [key: string]: string | undefined };
}
const ComplianceViolator = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<ComplianceViolator>;
export type ComplianceViolators = ComplianceViolator[];
const ComplianceViolators = /*@__PURE__*/ __L.at(__c4, 5);
export type DependentServiceName =
  | "AWSCONFIG"
  | "AWSWAF"
  | "AWSSHIELD_ADVANCED"
  | "AWSVPC"
  | (string & {});
const DependentServiceName = S.String;

export type DetailedInfo = string;
export type IssueInfoMap = { [key in DependentServiceName]?: string };
const IssueInfoMap = /*@__PURE__*/ __L.at(__c4, 6);
export interface PolicyComplianceDetail {
  PolicyOwner?: string;
  PolicyId?: string;
  MemberAccount?: string;
  Violators?: ComplianceViolator[];
  EvaluationLimitExceeded?: boolean;
  ExpiredAt?: Date;
  IssueInfoMap?: { [key: string]: string | undefined };
}
const PolicyComplianceDetail = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<PolicyComplianceDetail>;
export interface GetComplianceDetailResponse {
  PolicyComplianceDetail?: PolicyComplianceDetail;
}
const GetComplianceDetailResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<GetComplianceDetailResponse>;
export interface GetNotificationChannelRequest {}
const GetNotificationChannelRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<GetNotificationChannelRequest>;
export interface GetNotificationChannelResponse {
  SnsTopicArn?: string;
  SnsRoleName?: string;
}
const GetNotificationChannelResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<GetNotificationChannelResponse>;
export interface GetPolicyRequest {
  PolicyId: string;
}
const GetPolicyRequest = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<GetPolicyRequest>;
export type PolicyUpdateToken = string;
export type ManagedServiceData = string;
export type FirewallDeploymentModel = "CENTRALIZED" | "DISTRIBUTED" | (string & {});
const FirewallDeploymentModel = S.String;

export interface NetworkFirewallPolicy {
  FirewallDeploymentModel?: FirewallDeploymentModel;
}
const NetworkFirewallPolicy = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<NetworkFirewallPolicy>;
export interface ThirdPartyFirewallPolicy {
  FirewallDeploymentModel?: FirewallDeploymentModel;
}
const ThirdPartyFirewallPolicy = NetworkFirewallPolicy as any as S.Schema<ThirdPartyFirewallPolicy>;
export type IntegerObject = number;
export interface NetworkAclIcmpTypeCode {
  Code?: number;
  Type?: number;
}
const NetworkAclIcmpTypeCode = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<NetworkAclIcmpTypeCode>;
export type IPPortNumberInteger = number;
export interface NetworkAclPortRange {
  From?: number;
  To?: number;
}
const NetworkAclPortRange = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<NetworkAclPortRange>;
export type LengthBoundedNonEmptyString = string;
export type NetworkAclRuleAction = "allow" | "deny" | (string & {});
const NetworkAclRuleAction = S.String;

export interface NetworkAclEntry {
  IcmpTypeCode?: NetworkAclIcmpTypeCode;
  Protocol: string;
  PortRange?: NetworkAclPortRange;
  CidrBlock?: string;
  Ipv6CidrBlock?: string;
  RuleAction: NetworkAclRuleAction;
  Egress: boolean;
}
const NetworkAclEntry = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<NetworkAclEntry>;
export type NetworkAclEntries = NetworkAclEntry[];
const NetworkAclEntries = /*@__PURE__*/ __L.at(__c6, 0);
export interface NetworkAclEntrySet {
  FirstEntries?: NetworkAclEntry[];
  ForceRemediateForFirstEntries: boolean;
  LastEntries?: NetworkAclEntry[];
  ForceRemediateForLastEntries: boolean;
}
const NetworkAclEntrySet = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<NetworkAclEntrySet>;
export interface NetworkAclCommonPolicy {
  NetworkAclEntrySet: NetworkAclEntrySet;
}
const NetworkAclCommonPolicy = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<NetworkAclCommonPolicy>;
export interface PolicyOption {
  NetworkFirewallPolicy?: NetworkFirewallPolicy;
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
  NetworkAclCommonPolicy?: NetworkAclCommonPolicy;
}
const PolicyOption = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<PolicyOption>;
export interface SecurityServicePolicyData {
  Type: SecurityServiceType;
  ManagedServiceData?: string;
  PolicyOption?: PolicyOption;
}
const SecurityServicePolicyData = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<SecurityServicePolicyData>;
export type ResourceTypeList = string[];
const ResourceTypeList = IdentifierList as any as S.Schema<ResourceTypeList>;
export type ResourceTagKey = string;
export type ResourceTagValue = string;
export interface ResourceTag {
  Key: string;
  Value?: string;
}
const ResourceTag = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<ResourceTag>;
export type ResourceTags = ResourceTag[];
const ResourceTags = /*@__PURE__*/ __L.at(__c6, 6);
export type CustomerPolicyScopeIdType = "ACCOUNT" | "ORG_UNIT" | (string & {});
const CustomerPolicyScopeIdType = S.String;

export type CustomerPolicyScopeId = string;
export type CustomerPolicyScopeIdList = string[];
const CustomerPolicyScopeIdList = IdentifierList as any as S.Schema<CustomerPolicyScopeIdList>;
export type CustomerPolicyScopeMap = { [key in CustomerPolicyScopeIdType]?: string[] };
const CustomerPolicyScopeMap = /*@__PURE__*/ __L.at(__c6, 7);
export type ResourceSetIds = string[];
const ResourceSetIds = IdentifierList as any as S.Schema<ResourceSetIds>;
export type ResourceDescription = string;
export type CustomerPolicyStatus = "ACTIVE" | "OUT_OF_ADMIN_SCOPE" | (string & {});
const CustomerPolicyStatus = S.String;

export type ResourceTagLogicalOperator = "AND" | "OR" | (string & {});
const ResourceTagLogicalOperator = S.String;

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
const Policy = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<Policy>;
export interface GetPolicyResponse {
  Policy?: Policy;
  PolicyArn?: string;
}
const GetPolicyResponse = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<GetPolicyResponse>;
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
const GetProtectionStatusRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<GetProtectionStatusRequest>;
export type ProtectionData = string;
export interface GetProtectionStatusResponse {
  AdminAccountId?: string;
  ServiceType?: SecurityServiceType;
  Data?: string;
  NextToken?: string;
}
const GetProtectionStatusResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<GetProtectionStatusResponse>;
export interface GetProtocolsListRequest {
  ListId: string;
  DefaultList?: boolean;
}
const GetProtocolsListRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<GetProtocolsListRequest>;
export type ProtocolsList = string[];
const ProtocolsList = IdentifierList as any as S.Schema<ProtocolsList>;
export type PreviousProtocolsList = { [key: string]: string[] | undefined };
const PreviousProtocolsList = /*@__PURE__*/ __L.at(__c7, 5);
export interface ProtocolsListData {
  ListId?: string;
  ListName: string;
  ListUpdateToken?: string;
  CreateTime?: Date;
  LastUpdateTime?: Date;
  ProtocolsList: string[];
  PreviousProtocolsList?: { [key: string]: string[] | undefined };
}
const ProtocolsListData = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<ProtocolsListData>;
export interface GetProtocolsListResponse {
  ProtocolsList?: ProtocolsListData;
  ProtocolsListArn?: string;
}
const GetProtocolsListResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<GetProtocolsListResponse>;
export interface GetResourceSetRequest {
  Identifier: string;
}
const GetResourceSetRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<GetResourceSetRequest>;
export type Name = string;
export type Description = string;
export type ResourceSetStatus = "ACTIVE" | "OUT_OF_ADMIN_SCOPE" | (string & {});
const ResourceSetStatus = S.String;

export interface ResourceSet {
  Id?: string;
  Name: string;
  Description?: string;
  UpdateToken?: string;
  ResourceTypeList: string[];
  LastUpdateTime?: Date;
  ResourceSetStatus?: ResourceSetStatus;
}
const ResourceSet = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<ResourceSet>;
export interface GetResourceSetResponse {
  ResourceSet: ResourceSet;
  ResourceSetArn: string;
}
const GetResourceSetResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetResourceSetResponse>;
export interface GetThirdPartyFirewallAssociationStatusRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
}
const GetThirdPartyFirewallAssociationStatusRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<GetThirdPartyFirewallAssociationStatusRequest>;
export type MarketplaceSubscriptionOnboardingStatus =
  | "NO_SUBSCRIPTION"
  | "NOT_COMPLETE"
  | "COMPLETE"
  | (string & {});
const MarketplaceSubscriptionOnboardingStatus = S.String;

export interface GetThirdPartyFirewallAssociationStatusResponse {
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
  MarketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatus;
}
const GetThirdPartyFirewallAssociationStatusResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GetThirdPartyFirewallAssociationStatusResponse>;
export interface GetViolationDetailsRequest {
  PolicyId: string;
  MemberAccount: string;
  ResourceId: string;
  ResourceType: string;
}
const GetViolationDetailsRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<GetViolationDetailsRequest>;
export type ViolationTarget = string;
export type ReferenceRule = string;
export type TargetViolationReason = string;
export type TargetViolationReasons = string[];
const TargetViolationReasons = IdentifierList as any as S.Schema<TargetViolationReasons>;
export interface PartialMatch {
  Reference?: string;
  TargetViolationReasons?: string[];
}
const PartialMatch = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<PartialMatch>;
export type PartialMatches = PartialMatch[];
const PartialMatches = /*@__PURE__*/ __L.at(__c8, 7);
export type RemediationActionType = "REMOVE" | "MODIFY" | (string & {});
const RemediationActionType = S.String;

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
const SecurityGroupRuleDescription = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<SecurityGroupRuleDescription>;
export interface SecurityGroupRemediationAction {
  RemediationActionType?: RemediationActionType;
  Description?: string;
  RemediationResult?: SecurityGroupRuleDescription;
  IsDefaultAction?: boolean;
}
const SecurityGroupRemediationAction = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<SecurityGroupRemediationAction>;
export type SecurityGroupRemediationActions = SecurityGroupRemediationAction[];
const SecurityGroupRemediationActions = /*@__PURE__*/ __L.at(__c9, 2);
export interface AwsVPCSecurityGroupViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  PartialMatches?: PartialMatch[];
  PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];
}
const AwsVPCSecurityGroupViolation = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<AwsVPCSecurityGroupViolation>;
export type ResourceIdList = string[];
const ResourceIdList = IdentifierList as any as S.Schema<ResourceIdList>;
export interface AwsEc2NetworkInterfaceViolation {
  ViolationTarget?: string;
  ViolatingSecurityGroups?: string[];
}
const AwsEc2NetworkInterfaceViolation = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<AwsEc2NetworkInterfaceViolation>;
export type AwsEc2NetworkInterfaceViolations = AwsEc2NetworkInterfaceViolation[];
const AwsEc2NetworkInterfaceViolations = /*@__PURE__*/ __L.at(__c9, 5);
export interface AwsEc2InstanceViolation {
  ViolationTarget?: string;
  AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];
}
const AwsEc2InstanceViolation = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<AwsEc2InstanceViolation>;
export interface NetworkFirewallMissingFirewallViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
const NetworkFirewallMissingFirewallViolation = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<NetworkFirewallMissingFirewallViolation>;
export interface NetworkFirewallMissingSubnetViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
const NetworkFirewallMissingSubnetViolation =
  NetworkFirewallMissingFirewallViolation as any as S.Schema<NetworkFirewallMissingSubnetViolation>;
export interface NetworkFirewallMissingExpectedRTViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  CurrentRouteTable?: string;
  ExpectedRouteTable?: string;
}
const NetworkFirewallMissingExpectedRTViolation = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<NetworkFirewallMissingExpectedRTViolation>;
export type NetworkFirewallResourceName = string;
export type StatelessRuleGroupPriority = number;
export interface StatelessRuleGroup {
  RuleGroupName?: string;
  ResourceId?: string;
  Priority?: number;
}
const StatelessRuleGroup = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<StatelessRuleGroup>;
export type StatelessRuleGroupList = StatelessRuleGroup[];
const StatelessRuleGroupList = /*@__PURE__*/ __L.at(__c10, 2);
export type NetworkFirewallAction = string;
export type NetworkFirewallActionList = string[];
const NetworkFirewallActionList = IdentifierList as any as S.Schema<NetworkFirewallActionList>;
export type PriorityNumber = number;
export type NetworkFirewallOverrideAction = "DROP_TO_ALERT" | (string & {});
const NetworkFirewallOverrideAction = S.String;

export interface NetworkFirewallStatefulRuleGroupOverride {
  Action?: NetworkFirewallOverrideAction;
}
const NetworkFirewallStatefulRuleGroupOverride = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<NetworkFirewallStatefulRuleGroupOverride>;
export interface StatefulRuleGroup {
  RuleGroupName?: string;
  ResourceId?: string;
  Priority?: number;
  Override?: NetworkFirewallStatefulRuleGroupOverride;
}
const StatefulRuleGroup = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<StatefulRuleGroup>;
export type StatefulRuleGroupList = StatefulRuleGroup[];
const StatefulRuleGroupList = /*@__PURE__*/ __L.at(__c10, 5);
export type RuleOrder = "STRICT_ORDER" | "DEFAULT_ACTION_ORDER" | (string & {});
const RuleOrder = S.String;

export type StreamExceptionPolicy = "DROP" | "CONTINUE" | "REJECT" | "FMS_IGNORE" | (string & {});
const StreamExceptionPolicy = S.String;

export interface StatefulEngineOptions {
  RuleOrder?: RuleOrder;
  StreamExceptionPolicy?: StreamExceptionPolicy;
}
const StatefulEngineOptions = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<StatefulEngineOptions>;
export interface NetworkFirewallPolicyDescription {
  StatelessRuleGroups?: StatelessRuleGroup[];
  StatelessDefaultActions?: string[];
  StatelessFragmentDefaultActions?: string[];
  StatelessCustomActions?: string[];
  StatefulRuleGroups?: StatefulRuleGroup[];
  StatefulDefaultActions?: string[];
  StatefulEngineOptions?: StatefulEngineOptions;
}
const NetworkFirewallPolicyDescription = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<NetworkFirewallPolicyDescription>;
export interface NetworkFirewallPolicyModifiedViolation {
  ViolationTarget?: string;
  CurrentPolicyDescription?: NetworkFirewallPolicyDescription;
  ExpectedPolicyDescription?: NetworkFirewallPolicyDescription;
}
const NetworkFirewallPolicyModifiedViolation = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<NetworkFirewallPolicyModifiedViolation>;
export type DestinationType = "IPV4" | "IPV6" | "PREFIX_LIST" | (string & {});
const DestinationType = S.String;

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
const TargetType = S.String;

export interface Route {
  DestinationType?: DestinationType;
  TargetType?: TargetType;
  Destination?: string;
  Target?: string;
}
const Route = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<Route>;
export type Routes = Route[];
const Routes = /*@__PURE__*/ __L.at(__c11, 2);
export type LengthBoundedStringList = string[];
const LengthBoundedStringList = IdentifierList as any as S.Schema<LengthBoundedStringList>;
export interface ExpectedRoute {
  IpV4Cidr?: string;
  PrefixListId?: string;
  IpV6Cidr?: string;
  ContributingSubnets?: string[];
  AllowedTargets?: string[];
  RouteTableId?: string;
}
const ExpectedRoute = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<ExpectedRoute>;
export type ExpectedRoutes = ExpectedRoute[];
const ExpectedRoutes = /*@__PURE__*/ __L.at(__c11, 4);
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
const NetworkFirewallInternetTrafficNotInspectedViolation = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<NetworkFirewallInternetTrafficNotInspectedViolation>;
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
const NetworkFirewallInvalidRouteConfigurationViolation = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<NetworkFirewallInvalidRouteConfigurationViolation>;
export interface NetworkFirewallBlackHoleRouteDetectedViolation {
  ViolationTarget?: string;
  RouteTableId?: string;
  VpcId?: string;
  ViolatingRoutes?: Route[];
}
const NetworkFirewallBlackHoleRouteDetectedViolation = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<NetworkFirewallBlackHoleRouteDetectedViolation>;
export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
  FirewallSubnetId?: string;
  ViolatingRoutes?: Route[];
  RouteTableId?: string;
  FirewallEndpoint?: string;
  VpcId?: string;
}
const NetworkFirewallUnexpectedFirewallRoutesViolation = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<NetworkFirewallUnexpectedFirewallRoutesViolation>;
export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
  GatewayId?: string;
  ViolatingRoutes?: Route[];
  RouteTableId?: string;
  VpcId?: string;
}
const NetworkFirewallUnexpectedGatewayRoutesViolation = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<NetworkFirewallUnexpectedGatewayRoutesViolation>;
export interface NetworkFirewallMissingExpectedRoutesViolation {
  ViolationTarget?: string;
  ExpectedRoutes?: ExpectedRoute[];
  VpcId?: string;
}
const NetworkFirewallMissingExpectedRoutesViolation = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<NetworkFirewallMissingExpectedRoutesViolation>;
export type DnsRuleGroupPriority = number;
export type DnsRuleGroupPriorities = number[];
const DnsRuleGroupPriorities = /*@__PURE__*/ __L.at(__c12, 3);
export interface DnsRuleGroupPriorityConflictViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  ConflictingPriority?: number;
  ConflictingPolicyId?: string;
  UnavailablePriorities?: number[];
}
const DnsRuleGroupPriorityConflictViolation = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<DnsRuleGroupPriorityConflictViolation>;
export interface DnsDuplicateRuleGroupViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
}
const DnsDuplicateRuleGroupViolation = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DnsDuplicateRuleGroupViolation>;
export type BasicInteger = number;
export interface DnsRuleGroupLimitExceededViolation {
  ViolationTarget?: string;
  ViolationTargetDescription?: string;
  NumberOfRuleGroupsAlreadyAssociated?: number;
}
const DnsRuleGroupLimitExceededViolation = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<DnsRuleGroupLimitExceededViolation>;
export interface FirewallSubnetIsOutOfScopeViolation {
  FirewallSubnetId?: string;
  VpcId?: string;
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
  VpcEndpointId?: string;
}
const FirewallSubnetIsOutOfScopeViolation = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<FirewallSubnetIsOutOfScopeViolation>;
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
const RouteHasOutOfScopeEndpointViolation = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<RouteHasOutOfScopeEndpointViolation>;
export interface ThirdPartyFirewallMissingFirewallViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
const ThirdPartyFirewallMissingFirewallViolation =
  NetworkFirewallMissingFirewallViolation as any as S.Schema<ThirdPartyFirewallMissingFirewallViolation>;
export interface ThirdPartyFirewallMissingSubnetViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  TargetViolationReason?: string;
}
const ThirdPartyFirewallMissingSubnetViolation =
  NetworkFirewallMissingFirewallViolation as any as S.Schema<ThirdPartyFirewallMissingSubnetViolation>;
export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
  ViolationTarget?: string;
  VPC?: string;
  AvailabilityZone?: string;
  CurrentRouteTable?: string;
  ExpectedRouteTable?: string;
}
const ThirdPartyFirewallMissingExpectedRouteTableViolation =
  NetworkFirewallMissingExpectedRTViolation as any as S.Schema<ThirdPartyFirewallMissingExpectedRouteTableViolation>;
export interface FirewallSubnetMissingVPCEndpointViolation {
  FirewallSubnetId?: string;
  VpcId?: string;
  SubnetAvailabilityZone?: string;
  SubnetAvailabilityZoneId?: string;
}
const FirewallSubnetMissingVPCEndpointViolation = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<FirewallSubnetMissingVPCEndpointViolation>;
export type IntegerObjectMinimum0 = number;
export type EntryType =
  | "FMS_MANAGED_FIRST_ENTRY"
  | "FMS_MANAGED_LAST_ENTRY"
  | "CUSTOM_ENTRY"
  | (string & {});
const EntryType = S.String;

export interface EntryDescription {
  EntryDetail?: NetworkAclEntry;
  EntryRuleNumber?: number;
  EntryType?: EntryType;
}
const EntryDescription = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<EntryDescription>;
export type EntriesWithConflicts = EntryDescription[];
const EntriesWithConflicts = /*@__PURE__*/ __L.at(__c13, 3);
export type EntryViolationReason =
  | "MISSING_EXPECTED_ENTRY"
  | "INCORRECT_ENTRY_ORDER"
  | "ENTRY_CONFLICT"
  | (string & {});
export type EntryViolationReasons = EntryViolationReason[];
const EntryViolationReasons = SecurityServiceTypeList as any as S.Schema<EntryViolationReasons>;
export interface EntryViolation {
  ExpectedEntry?: EntryDescription;
  ExpectedEvaluationOrder?: string;
  ActualEvaluationOrder?: string;
  EntryAtExpectedEvaluationOrder?: EntryDescription;
  EntriesWithConflicts?: EntryDescription[];
  EntryViolationReasons?: EntryViolationReason[];
}
const EntryViolation = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<EntryViolation>;
export type EntryViolations = EntryViolation[];
const EntryViolations = /*@__PURE__*/ __L.at(__c13, 5);
export interface InvalidNetworkAclEntriesViolation {
  Vpc?: string;
  Subnet?: string;
  SubnetAvailabilityZone?: string;
  CurrentAssociatedNetworkAcl?: string;
  EntryViolations?: EntryViolation[];
}
const InvalidNetworkAclEntriesViolation = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<InvalidNetworkAclEntriesViolation>;
export interface ActionTarget {
  ResourceId?: string;
  Description?: string;
}
const ActionTarget = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<ActionTarget>;
export interface EC2CreateRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  VpcEndpointId?: ActionTarget;
  GatewayId?: ActionTarget;
  RouteTableId: ActionTarget;
}
const EC2CreateRouteAction = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<EC2CreateRouteAction>;
export interface EC2ReplaceRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  GatewayId?: ActionTarget;
  RouteTableId: ActionTarget;
}
const EC2ReplaceRouteAction = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<EC2ReplaceRouteAction>;
export interface EC2DeleteRouteAction {
  Description?: string;
  DestinationCidrBlock?: string;
  DestinationPrefixListId?: string;
  DestinationIpv6CidrBlock?: string;
  RouteTableId: ActionTarget;
}
const EC2DeleteRouteAction = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<EC2DeleteRouteAction>;
export interface EC2CopyRouteTableAction {
  Description?: string;
  VpcId: ActionTarget;
  RouteTableId: ActionTarget;
}
const EC2CopyRouteTableAction = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<EC2CopyRouteTableAction>;
export interface EC2ReplaceRouteTableAssociationAction {
  Description?: string;
  AssociationId: ActionTarget;
  RouteTableId: ActionTarget;
}
const EC2ReplaceRouteTableAssociationAction = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<EC2ReplaceRouteTableAssociationAction>;
export interface EC2AssociateRouteTableAction {
  Description?: string;
  RouteTableId: ActionTarget;
  SubnetId?: ActionTarget;
  GatewayId?: ActionTarget;
}
const EC2AssociateRouteTableAction = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<EC2AssociateRouteTableAction>;
export interface EC2CreateRouteTableAction {
  Description?: string;
  VpcId: ActionTarget;
}
const EC2CreateRouteTableAction = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<EC2CreateRouteTableAction>;
export interface FMSPolicyUpdateFirewallCreationConfigAction {
  Description?: string;
  FirewallCreationConfig?: string;
}
const FMSPolicyUpdateFirewallCreationConfigAction = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<FMSPolicyUpdateFirewallCreationConfigAction>;
export interface CreateNetworkAclAction {
  Description?: string;
  Vpc?: ActionTarget;
  FMSCanRemediate?: boolean;
}
const CreateNetworkAclAction = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<CreateNetworkAclAction>;
export interface ReplaceNetworkAclAssociationAction {
  Description?: string;
  AssociationId?: ActionTarget;
  NetworkAclId?: ActionTarget;
  FMSCanRemediate?: boolean;
}
const ReplaceNetworkAclAssociationAction = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ReplaceNetworkAclAssociationAction>;
export type EntriesDescription = EntryDescription[];
const EntriesDescription = EntriesWithConflicts as any as S.Schema<EntriesDescription>;
export interface CreateNetworkAclEntriesAction {
  Description?: string;
  NetworkAclId?: ActionTarget;
  NetworkAclEntriesToBeCreated?: EntryDescription[];
  FMSCanRemediate?: boolean;
}
const CreateNetworkAclEntriesAction = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<CreateNetworkAclEntriesAction>;
export interface DeleteNetworkAclEntriesAction {
  Description?: string;
  NetworkAclId?: ActionTarget;
  NetworkAclEntriesToBeDeleted?: EntryDescription[];
  FMSCanRemediate?: boolean;
}
const DeleteNetworkAclEntriesAction = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DeleteNetworkAclEntriesAction>;
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
const RemediationAction = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<RemediationAction>;
export interface RemediationActionWithOrder {
  RemediationAction?: RemediationAction;
  Order?: number;
}
const RemediationActionWithOrder = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<RemediationActionWithOrder>;
export type OrderedRemediationActions = RemediationActionWithOrder[];
const OrderedRemediationActions = /*@__PURE__*/ __L.at(__c15, 6);
export interface PossibleRemediationAction {
  Description?: string;
  OrderedRemediationActions: RemediationActionWithOrder[];
  IsDefaultAction?: boolean;
}
const PossibleRemediationAction = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<PossibleRemediationAction>;
export type PossibleRemediationActionList = PossibleRemediationAction[];
const PossibleRemediationActionList = /*@__PURE__*/ __L.at(__c16, 0);
export interface PossibleRemediationActions {
  Description?: string;
  Actions?: PossibleRemediationAction[];
}
const PossibleRemediationActions = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<PossibleRemediationActions>;
export interface WebACLHasIncompatibleConfigurationViolation {
  WebACLArn?: string;
  Description?: string;
}
const WebACLHasIncompatibleConfigurationViolation = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<WebACLHasIncompatibleConfigurationViolation>;
export type ResourceArnList = string[];
const ResourceArnList = IdentifierList as any as S.Schema<ResourceArnList>;
export interface WebACLHasOutOfScopeResourcesViolation {
  WebACLArn?: string;
  OutOfScopeResourceList?: string[];
}
const WebACLHasOutOfScopeResourcesViolation = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<WebACLHasOutOfScopeResourcesViolation>;
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
const ResourceViolation = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<ResourceViolation>;
export type ResourceViolations = ResourceViolation[];
const ResourceViolations = /*@__PURE__*/ __L.at(__c16, 5);
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c16, 7);
export interface ViolationDetail {
  PolicyId: string;
  MemberAccount: string;
  ResourceId: string;
  ResourceType: string;
  ResourceViolations: ResourceViolation[];
  ResourceTags?: Tag[];
  ResourceDescription?: string;
}
const ViolationDetail = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<ViolationDetail>;
export interface GetViolationDetailsResponse {
  ViolationDetail?: ViolationDetail;
}
const GetViolationDetailsResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<GetViolationDetailsResponse>;
export interface ListAdminAccountsForOrganizationRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListAdminAccountsForOrganizationRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<ListAdminAccountsForOrganizationRequest>;
export interface AdminAccountSummary {
  AdminAccount?: string;
  DefaultAdmin?: boolean;
  Status?: OrganizationStatus;
}
const AdminAccountSummary = /*@__PURE__*/ __L.at(__c17, 3) as any as S.Schema<AdminAccountSummary>;
export type AdminAccountSummaryList = AdminAccountSummary[];
const AdminAccountSummaryList = /*@__PURE__*/ __L.at(__c17, 4);
export interface ListAdminAccountsForOrganizationResponse {
  AdminAccounts?: AdminAccountSummary[];
  NextToken?: string;
}
const ListAdminAccountsForOrganizationResponse = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ListAdminAccountsForOrganizationResponse>;
export interface ListAdminsManagingAccountRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListAdminsManagingAccountRequest = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ListAdminsManagingAccountRequest>;
export interface ListAdminsManagingAccountResponse {
  AdminAccounts?: string[];
  NextToken?: string;
}
const ListAdminsManagingAccountResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListAdminsManagingAccountResponse>;
export interface ListAppsListsRequest {
  DefaultLists?: boolean;
  NextToken?: string;
  MaxResults: number;
}
const ListAppsListsRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<ListAppsListsRequest>;
export interface AppsListDataSummary {
  ListArn?: string;
  ListId?: string;
  ListName?: string;
  AppsList?: App[];
}
const AppsListDataSummary = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<AppsListDataSummary>;
export type AppsListsData = AppsListDataSummary[];
const AppsListsData = /*@__PURE__*/ __L.at(__c18, 2);
export interface ListAppsListsResponse {
  AppsLists?: AppsListDataSummary[];
  NextToken?: string;
}
const ListAppsListsResponse = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ListAppsListsResponse>;
export interface ListComplianceStatusRequest {
  PolicyId: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListComplianceStatusRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<ListComplianceStatusRequest>;
export type PolicyComplianceStatusType = "COMPLIANT" | "NON_COMPLIANT" | (string & {});
const PolicyComplianceStatusType = S.String;

export type ResourceCount = number;
export interface EvaluationResult {
  ComplianceStatus?: PolicyComplianceStatusType;
  ViolatorCount?: number;
  EvaluationLimitExceeded?: boolean;
}
const EvaluationResult = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<EvaluationResult>;
export type EvaluationResults = EvaluationResult[];
const EvaluationResults = /*@__PURE__*/ __L.at(__c18, 6);
export interface PolicyComplianceStatus {
  PolicyOwner?: string;
  PolicyId?: string;
  PolicyName?: string;
  MemberAccount?: string;
  EvaluationResults?: EvaluationResult[];
  LastUpdated?: Date;
  IssueInfoMap?: { [key: string]: string | undefined };
}
const PolicyComplianceStatus = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<PolicyComplianceStatus>;
export type PolicyComplianceStatusList = PolicyComplianceStatus[];
const PolicyComplianceStatusList = /*@__PURE__*/ __L.at(__c19, 0);
export interface ListComplianceStatusResponse {
  PolicyComplianceStatusList?: PolicyComplianceStatus[];
  NextToken?: string;
}
const ListComplianceStatusResponse = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<ListComplianceStatusResponse>;
export type AWSAccountIdList = string[];
const AWSAccountIdList = IdentifierList as any as S.Schema<AWSAccountIdList>;
export interface ListDiscoveredResourcesRequest {
  MemberAccountIds: string[];
  ResourceType: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListDiscoveredResourcesRequest = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<ListDiscoveredResourcesRequest>;
export interface DiscoveredResource {
  URI?: string;
  AccountId?: string;
  Type?: string;
  Name?: string;
}
const DiscoveredResource = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<DiscoveredResource>;
export type DiscoveredResourceList = DiscoveredResource[];
const DiscoveredResourceList = /*@__PURE__*/ __L.at(__c19, 4);
export interface ListDiscoveredResourcesResponse {
  Items?: DiscoveredResource[];
  NextToken?: string;
}
const ListDiscoveredResourcesResponse = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ListDiscoveredResourcesResponse>;
export interface ListMemberAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListMemberAccountsRequest = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ListMemberAccountsRequest>;
export type MemberAccounts = string[];
const MemberAccounts = IdentifierList as any as S.Schema<MemberAccounts>;
export interface ListMemberAccountsResponse {
  MemberAccounts?: string[];
  NextToken?: string;
}
const ListMemberAccountsResponse = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<ListMemberAccountsResponse>;
export interface ListPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListPoliciesRequest = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<ListPoliciesRequest>;
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
const PolicySummary = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<PolicySummary>;
export type PolicySummaryList = PolicySummary[];
const PolicySummaryList = /*@__PURE__*/ __L.at(__c20, 2);
export interface ListPoliciesResponse {
  PolicyList?: PolicySummary[];
  NextToken?: string;
}
const ListPoliciesResponse = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<ListPoliciesResponse>;
export interface ListProtocolsListsRequest {
  DefaultLists?: boolean;
  NextToken?: string;
  MaxResults: number;
}
const ListProtocolsListsRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ListProtocolsListsRequest>;
export interface ProtocolsListDataSummary {
  ListArn?: string;
  ListId?: string;
  ListName?: string;
  ProtocolsList?: string[];
}
const ProtocolsListDataSummary = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ProtocolsListDataSummary>;
export type ProtocolsListsData = ProtocolsListDataSummary[];
const ProtocolsListsData = /*@__PURE__*/ __L.at(__c20, 6);
export interface ListProtocolsListsResponse {
  ProtocolsLists?: ProtocolsListDataSummary[];
  NextToken?: string;
}
const ListProtocolsListsResponse = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<ListProtocolsListsResponse>;
export interface ListResourceSetResourcesRequest {
  Identifier: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListResourceSetResourcesRequest = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<ListResourceSetResourcesRequest>;
export interface Resource {
  URI: string;
  AccountId?: string;
}
const Resource = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<Resource>;
export type ResourceList = Resource[];
const ResourceList = /*@__PURE__*/ __L.at(__c21, 2);
export interface ListResourceSetResourcesResponse {
  Items: Resource[];
  NextToken?: string;
}
const ListResourceSetResourcesResponse = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<ListResourceSetResourcesResponse>;
export interface ListResourceSetsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListResourceSetsRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<ListResourceSetsRequest>;
export interface ResourceSetSummary {
  Id?: string;
  Name?: string;
  Description?: string;
  LastUpdateTime?: Date;
  ResourceSetStatus?: ResourceSetStatus;
}
const ResourceSetSummary = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<ResourceSetSummary>;
export type ResourceSetSummaryList = ResourceSetSummary[];
const ResourceSetSummaryList = /*@__PURE__*/ __L.at(__c21, 6);
export interface ListResourceSetsResponse {
  ResourceSets?: ResourceSetSummary[];
  NextToken?: string;
}
const ListResourceSetsResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ListResourceSetsResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  TagList?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListThirdPartyFirewallFirewallPoliciesRequest {
  ThirdPartyFirewall: ThirdPartyFirewall;
  NextToken?: string;
  MaxResults: number;
}
const ListThirdPartyFirewallFirewallPoliciesRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<ListThirdPartyFirewallFirewallPoliciesRequest>;
export type FirewallPolicyId = string;
export type FirewallPolicyName = string;
export interface ThirdPartyFirewallFirewallPolicy {
  FirewallPolicyId?: string;
  FirewallPolicyName?: string;
}
const ThirdPartyFirewallFirewallPolicy = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<ThirdPartyFirewallFirewallPolicy>;
export type ThirdPartyFirewallFirewallPolicies = ThirdPartyFirewallFirewallPolicy[];
const ThirdPartyFirewallFirewallPolicies = /*@__PURE__*/ __L.at(__c22, 4);
export interface ListThirdPartyFirewallFirewallPoliciesResponse {
  ThirdPartyFirewallFirewallPolicies?: ThirdPartyFirewallFirewallPolicy[];
  NextToken?: string;
}
const ListThirdPartyFirewallFirewallPoliciesResponse = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<ListThirdPartyFirewallFirewallPoliciesResponse>;
export interface PutAdminAccountRequest {
  AdminAccount: string;
  AdminScope?: AdminScope;
}
const PutAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<PutAdminAccountRequest>;
export interface PutAdminAccountResponse {}
const PutAdminAccountResponse =
  AssociateAdminAccountResponse as any as S.Schema<PutAdminAccountResponse>;
export interface PutAppsListRequest {
  AppsList: AppsListData;
  TagList?: Tag[];
}
const PutAppsListRequest = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<PutAppsListRequest>;
export interface PutAppsListResponse {
  AppsList?: AppsListData;
  AppsListArn?: string;
}
const PutAppsListResponse = GetAppsListResponse as any as S.Schema<PutAppsListResponse>;
export interface PutNotificationChannelRequest {
  SnsTopicArn: string;
  SnsRoleName: string;
}
const PutNotificationChannelRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<PutNotificationChannelRequest>;
export interface PutNotificationChannelResponse {}
const PutNotificationChannelResponse =
  AssociateAdminAccountResponse as any as S.Schema<PutNotificationChannelResponse>;
export interface PutPolicyRequest {
  Policy: Policy;
  TagList?: Tag[];
}
const PutPolicyRequest = /*@__PURE__*/ __L.at(__c23, 1) as any as S.Schema<PutPolicyRequest>;
export interface PutPolicyResponse {
  Policy?: Policy;
  PolicyArn?: string;
}
const PutPolicyResponse = GetPolicyResponse as any as S.Schema<PutPolicyResponse>;
export interface PutProtocolsListRequest {
  ProtocolsList: ProtocolsListData;
  TagList?: Tag[];
}
const PutProtocolsListRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<PutProtocolsListRequest>;
export interface PutProtocolsListResponse {
  ProtocolsList?: ProtocolsListData;
  ProtocolsListArn?: string;
}
const PutProtocolsListResponse =
  GetProtocolsListResponse as any as S.Schema<PutProtocolsListResponse>;
export interface PutResourceSetRequest {
  ResourceSet: ResourceSet;
  TagList?: Tag[];
}
const PutResourceSetRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<PutResourceSetRequest>;
export interface PutResourceSetResponse {
  ResourceSet: ResourceSet;
  ResourceSetArn: string;
}
const PutResourceSetResponse = GetResourceSetResponse as any as S.Schema<PutResourceSetResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  TagList: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c23, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AssociateAdminAccountResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = IdentifierList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  AssociateAdminAccountResponse as any as S.Schema<UntagResourceResponse>;
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
  input: AssociateAdminAccountRequest,
  output: AssociateAdminAccountResponse,
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
  input: AssociateThirdPartyFirewallRequest,
  output: AssociateThirdPartyFirewallResponse,
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
  input: BatchAssociateResourceRequest,
  output: BatchAssociateResourceResponse,
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
  input: BatchDisassociateResourceRequest,
  output: BatchDisassociateResourceResponse,
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
  input: DeleteAppsListRequest,
  output: DeleteAppsListResponse,
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
  input: DeleteNotificationChannelRequest,
  output: DeleteNotificationChannelResponse,
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
  input: DeletePolicyRequest,
  output: DeletePolicyResponse,
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
  input: DeleteProtocolsListRequest,
  output: DeleteProtocolsListResponse,
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
  input: DeleteResourceSetRequest,
  output: DeleteResourceSetResponse,
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
  input: DisassociateAdminAccountRequest,
  output: DisassociateAdminAccountResponse,
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
  input: DisassociateThirdPartyFirewallRequest,
  output: DisassociateThirdPartyFirewallResponse,
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
  input: GetAdminAccountRequest,
  output: GetAdminAccountResponse,
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
  input: GetAdminScopeRequest,
  output: GetAdminScopeResponse,
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
  input: GetAppsListRequest,
  output: GetAppsListResponse,
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
  input: GetComplianceDetailRequest,
  output: GetComplianceDetailResponse,
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
  input: GetNotificationChannelRequest,
  output: GetNotificationChannelResponse,
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
  input: GetPolicyRequest,
  output: GetPolicyResponse,
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
  input: GetProtectionStatusRequest,
  output: GetProtectionStatusResponse,
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
  input: GetProtocolsListRequest,
  output: GetProtocolsListResponse,
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
  input: GetResourceSetRequest,
  output: GetResourceSetResponse,
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
  input: GetThirdPartyFirewallAssociationStatusRequest,
  output: GetThirdPartyFirewallAssociationStatusResponse,
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
  input: GetViolationDetailsRequest,
  output: GetViolationDetailsResponse,
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
  input: ListAdminAccountsForOrganizationRequest,
  output: ListAdminAccountsForOrganizationResponse,
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
  input: ListAdminsManagingAccountRequest,
  output: ListAdminsManagingAccountResponse,
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
  input: ListAppsListsRequest,
  output: ListAppsListsResponse,
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
  input: ListComplianceStatusRequest,
  output: ListComplianceStatusResponse,
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
  input: ListDiscoveredResourcesRequest,
  output: ListDiscoveredResourcesResponse,
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
  input: ListMemberAccountsRequest,
  output: ListMemberAccountsResponse,
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
  input: ListPoliciesRequest,
  output: ListPoliciesResponse,
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
  input: ListProtocolsListsRequest,
  output: ListProtocolsListsResponse,
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
  input: ListResourceSetResourcesRequest,
  output: ListResourceSetResourcesResponse,
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
  input: ListResourceSetsRequest,
  output: ListResourceSetsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListThirdPartyFirewallFirewallPoliciesRequest,
  output: ListThirdPartyFirewallFirewallPoliciesResponse,
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
  input: PutAdminAccountRequest,
  output: PutAdminAccountResponse,
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
  input: PutAppsListRequest,
  output: PutAppsListResponse,
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
  input: PutNotificationChannelRequest,
  output: PutNotificationChannelResponse,
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
  input: PutPolicyRequest,
  output: PutPolicyResponse,
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
  input: PutProtocolsListRequest,
  output: PutProtocolsListResponse,
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
  input: PutResourceSetRequest,
  output: PutResourceSetResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
        S.Struct({ ThirdPartyFirewall: ThirdPartyFirewall }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateThirdPartyFirewallRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ThirdPartyFirewallStatus: S.optional(ThirdPartyFirewallAssociationStatus) }),
      ).annotate({
        identifier: "AssociateThirdPartyFirewallResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceSetIdentifier: S.String, Items: IdentifierList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchAssociateResourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ URI: S.optional(S.String), Reason: S.optional(FailedItemReason) }),
      ).annotate({ identifier: "FailedItem" });
    case 7:
      return S.Array(FailedItem);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceSetIdentifier: S.String, FailedItems: FailedItemList }),
      ).annotate({
        identifier: "BatchAssociateResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceSetIdentifier: S.String, Items: IdentifierList }).pipe(
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
        S.Struct({ ThirdPartyFirewall: ThirdPartyFirewall }).pipe(
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
        S.Struct({ AdminAccount: S.optional(S.String), RoleStatus: S.optional(AccountRoleStatus) }),
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
          Accounts: S.optional(AccountIdList),
          AllAccountsEnabled: S.optional(S.Boolean),
          ExcludeSpecifiedAccounts: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AccountScope" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OrganizationalUnits: S.optional(OrganizationalUnitIdList),
          AllOrganizationalUnitsEnabled: S.optional(S.Boolean),
          ExcludeSpecifiedOrganizationalUnits: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "OrganizationalUnitScope" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Regions: S.optional(AWSRegionList), AllRegionsEnabled: S.optional(S.Boolean) }),
      ).annotate({ identifier: "RegionScope" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SecurityServiceType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyTypes: S.optional(SecurityServiceTypeList),
          AllPolicyTypesEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PolicyTypeScope" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountScope: S.optional(AccountScope),
          OrganizationalUnitScope: S.optional(OrganizationalUnitScope),
          RegionScope: S.optional(RegionScope),
          PolicyTypeScope: S.optional(PolicyTypeScope),
        }),
      ).annotate({ identifier: "AdminScope" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AdminScope: S.optional(AdminScope), Status: S.optional(OrganizationStatus) }),
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
      return S.Array(App);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ AppsList.pipe(S.optional));
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
          AppsList: AppsList,
          PreviousAppsList: S.optional(PreviousAppsList),
        }),
      ).annotate({ identifier: "AppsListData" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AppsList: S.optional(AppsListData), AppsListArn: S.optional(S.String) }),
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
          ViolationReason: S.optional(ViolationReason),
          ResourceType: S.optional(S.String),
          Metadata: S.optional(ComplianceViolatorMetadata),
        }),
      ).annotate({ identifier: "ComplianceViolator" });
    case 5:
      return S.Array(ComplianceViolator);
    case 6:
      return S.Record(DependentServiceName, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PolicyOwner: S.optional(S.String),
          PolicyId: S.optional(S.String),
          MemberAccount: S.optional(S.String),
          Violators: S.optional(ComplianceViolators),
          EvaluationLimitExceeded: S.optional(S.Boolean),
          ExpiredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IssueInfoMap: S.optional(IssueInfoMap),
        }),
      ).annotate({ identifier: "PolicyComplianceDetail" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PolicyComplianceDetail: S.optional(PolicyComplianceDetail) }),
      ).annotate({
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
      return S.suspend(() =>
        S.Struct({ FirewallDeploymentModel: S.optional(FirewallDeploymentModel) }),
      ).annotate({ identifier: "NetworkFirewallPolicy" });
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
          IcmpTypeCode: S.optional(NetworkAclIcmpTypeCode),
          Protocol: S.String,
          PortRange: S.optional(NetworkAclPortRange),
          CidrBlock: S.optional(S.String),
          Ipv6CidrBlock: S.optional(S.String),
          RuleAction: NetworkAclRuleAction,
          Egress: S.Boolean,
        }),
      ).annotate({ identifier: "NetworkAclEntry" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(NetworkAclEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({
          FirstEntries: S.optional(NetworkAclEntries),
          ForceRemediateForFirstEntries: S.Boolean,
          LastEntries: S.optional(NetworkAclEntries),
          ForceRemediateForLastEntries: S.Boolean,
        }),
      ).annotate({ identifier: "NetworkAclEntrySet" });
    case 2:
      return S.suspend(() => S.Struct({ NetworkAclEntrySet: NetworkAclEntrySet })).annotate({
        identifier: "NetworkAclCommonPolicy",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NetworkFirewallPolicy: S.optional(NetworkFirewallPolicy),
          ThirdPartyFirewallPolicy: S.optional(ThirdPartyFirewallPolicy),
          NetworkAclCommonPolicy: S.optional(NetworkAclCommonPolicy),
        }),
      ).annotate({ identifier: "PolicyOption" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: SecurityServiceType,
          ManagedServiceData: S.optional(S.String),
          PolicyOption: S.optional(PolicyOption),
        }),
      ).annotate({
        identifier: "SecurityServicePolicyData",
      });
    case 5:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "ResourceTag",
      });
    case 6:
      return S.Array(ResourceTag);
    case 7:
      return S.Record(
        CustomerPolicyScopeIdType,
        /*@__PURE__*/ CustomerPolicyScopeIdList.pipe(S.optional),
      );
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
          SecurityServicePolicyData: SecurityServicePolicyData,
          ResourceType: S.String,
          ResourceTypeList: S.optional(ResourceTypeList),
          ResourceTags: S.optional(ResourceTags),
          ExcludeResourceTags: S.Boolean,
          RemediationEnabled: S.Boolean,
          DeleteUnusedFMManagedResources: S.optional(S.Boolean),
          IncludeMap: S.optional(CustomerPolicyScopeMap),
          ExcludeMap: S.optional(CustomerPolicyScopeMap),
          ResourceSetIds: S.optional(ResourceSetIds),
          PolicyDescription: S.optional(S.String),
          PolicyStatus: S.optional(CustomerPolicyStatus),
          ResourceTagLogicalOperator: S.optional(ResourceTagLogicalOperator),
        }),
      ).annotate({ identifier: "Policy" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Policy: S.optional(Policy), PolicyArn: S.optional(S.String) }),
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
          ServiceType: S.optional(SecurityServiceType),
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
      return S.Record(S.String, /*@__PURE__*/ ProtocolsList.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ListId: S.optional(S.String),
          ListName: S.String,
          ListUpdateToken: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ProtocolsList: ProtocolsList,
          PreviousProtocolsList: S.optional(PreviousProtocolsList),
        }),
      ).annotate({ identifier: "ProtocolsListData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtocolsList: S.optional(ProtocolsListData),
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
          ResourceTypeList: ResourceTypeList,
          LastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ResourceSetStatus: S.optional(ResourceSetStatus),
        }),
      ).annotate({ identifier: "ResourceSet" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceSet: ResourceSet, ResourceSetArn: S.String }),
      ).annotate({ identifier: "GetResourceSetResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ThirdPartyFirewall: ThirdPartyFirewall }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetThirdPartyFirewallAssociationStatusRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ThirdPartyFirewallStatus: S.optional(ThirdPartyFirewallAssociationStatus),
          MarketplaceOnboardingStatus: S.optional(MarketplaceSubscriptionOnboardingStatus),
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
          TargetViolationReasons: S.optional(TargetViolationReasons),
        }),
      ).annotate({ identifier: "PartialMatch" });
    case 7:
      return S.Array(PartialMatch);
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
          RemediationActionType: S.optional(RemediationActionType),
          Description: S.optional(S.String),
          RemediationResult: S.optional(SecurityGroupRuleDescription),
          IsDefaultAction: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "SecurityGroupRemediationAction",
      });
    case 2:
      return S.Array(SecurityGroupRemediationAction);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ViolationTargetDescription: S.optional(S.String),
          PartialMatches: S.optional(PartialMatches),
          PossibleSecurityGroupRemediationActions: S.optional(SecurityGroupRemediationActions),
        }),
      ).annotate({
        identifier: "AwsVPCSecurityGroupViolation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          ViolatingSecurityGroups: S.optional(ResourceIdList),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceViolation",
      });
    case 5:
      return S.Array(AwsEc2NetworkInterfaceViolation);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ViolationTarget: S.optional(S.String),
          AwsEc2NetworkInterfaceViolations: S.optional(AwsEc2NetworkInterfaceViolations),
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
      return S.Array(StatelessRuleGroup);
    case 3:
      return S.suspend(() =>
        S.Struct({ Action: S.optional(NetworkFirewallOverrideAction) }),
      ).annotate({
        identifier: "NetworkFirewallStatefulRuleGroupOverride",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.optional(S.String),
          ResourceId: S.optional(S.String),
          Priority: S.optional(S.Number),
          Override: S.optional(NetworkFirewallStatefulRuleGroupOverride),
        }),
      ).annotate({ identifier: "StatefulRuleGroup" });
    case 5:
      return S.Array(StatefulRuleGroup);
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleOrder: S.optional(RuleOrder),
          StreamExceptionPolicy: S.optional(StreamExceptionPolicy),
        }),
      ).annotate({ identifier: "StatefulEngineOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StatelessRuleGroups: S.optional(StatelessRuleGroupList),
          StatelessDefaultActions: S.optional(NetworkFirewallActionList),
          StatelessFragmentDefaultActions: S.optional(NetworkFirewallActionList),
          StatelessCustomActions: S.optional(NetworkFirewallActionList),
          StatefulRuleGroups: S.optional(StatefulRuleGroupList),
          StatefulDefaultActions: S.optional(NetworkFirewallActionList),
          StatefulEngineOptions: S.optional(StatefulEngineOptions),
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
          CurrentPolicyDescription: S.optional(NetworkFirewallPolicyDescription),
          ExpectedPolicyDescription: S.optional(NetworkFirewallPolicyDescription),
        }),
      ).annotate({
        identifier: "NetworkFirewallPolicyModifiedViolation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DestinationType: S.optional(DestinationType),
          TargetType: S.optional(TargetType),
          Destination: S.optional(S.String),
          Target: S.optional(S.String),
        }),
      ).annotate({ identifier: "Route" });
    case 2:
      return S.Array(Route);
    case 3:
      return S.suspend(() =>
        S.Struct({
          IpV4Cidr: S.optional(S.String),
          PrefixListId: S.optional(S.String),
          IpV6Cidr: S.optional(S.String),
          ContributingSubnets: S.optional(ResourceIdList),
          AllowedTargets: S.optional(LengthBoundedStringList),
          RouteTableId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExpectedRoute" });
    case 4:
      return S.Array(ExpectedRoute);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubnetId: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(S.String),
          RouteTableId: S.optional(S.String),
          ViolatingRoutes: S.optional(Routes),
          IsRouteTableUsedInDifferentAZ: S.optional(S.Boolean),
          CurrentFirewallSubnetRouteTable: S.optional(S.String),
          ExpectedFirewallEndpoint: S.optional(S.String),
          FirewallSubnetId: S.optional(S.String),
          ExpectedFirewallSubnetRoutes: S.optional(ExpectedRoutes),
          ActualFirewallSubnetRoutes: S.optional(Routes),
          InternetGatewayId: S.optional(S.String),
          CurrentInternetGatewayRouteTable: S.optional(S.String),
          ExpectedInternetGatewayRoutes: S.optional(ExpectedRoutes),
          ActualInternetGatewayRoutes: S.optional(Routes),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkFirewallInternetTrafficNotInspectedViolation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AffectedSubnets: S.optional(ResourceIdList),
          RouteTableId: S.optional(S.String),
          IsRouteTableUsedInDifferentAZ: S.optional(S.Boolean),
          ViolatingRoute: S.optional(Route),
          CurrentFirewallSubnetRouteTable: S.optional(S.String),
          ExpectedFirewallEndpoint: S.optional(S.String),
          ActualFirewallEndpoint: S.optional(S.String),
          ExpectedFirewallSubnetId: S.optional(S.String),
          ActualFirewallSubnetId: S.optional(S.String),
          ExpectedFirewallSubnetRoutes: S.optional(ExpectedRoutes),
          ActualFirewallSubnetRoutes: S.optional(Routes),
          InternetGatewayId: S.optional(S.String),
          CurrentInternetGatewayRouteTable: S.optional(S.String),
          ExpectedInternetGatewayRoutes: S.optional(ExpectedRoutes),
          ActualInternetGatewayRoutes: S.optional(Routes),
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
          ViolatingRoutes: S.optional(Routes),
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
          ViolatingRoutes: S.optional(Routes),
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
          ViolatingRoutes: S.optional(Routes),
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
          ExpectedRoutes: S.optional(ExpectedRoutes),
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
          UnavailablePriorities: S.optional(DnsRuleGroupPriorities),
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
          ViolatingRoutes: S.optional(Routes),
          SubnetAvailabilityZone: S.optional(S.String),
          SubnetAvailabilityZoneId: S.optional(S.String),
          CurrentFirewallSubnetRouteTable: S.optional(S.String),
          FirewallSubnetId: S.optional(S.String),
          FirewallSubnetRoutes: S.optional(Routes),
          InternetGatewayId: S.optional(S.String),
          CurrentInternetGatewayRouteTable: S.optional(S.String),
          InternetGatewayRoutes: S.optional(Routes),
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
          EntryDetail: S.optional(NetworkAclEntry),
          EntryRuleNumber: S.optional(S.Number),
          EntryType: S.optional(EntryType),
        }),
      ).annotate({ identifier: "EntryDescription" });
    case 3:
      return S.Array(EntryDescription);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExpectedEntry: S.optional(EntryDescription),
          ExpectedEvaluationOrder: S.optional(S.String),
          ActualEvaluationOrder: S.optional(S.String),
          EntryAtExpectedEvaluationOrder: S.optional(EntryDescription),
          EntriesWithConflicts: S.optional(EntriesWithConflicts),
          EntryViolationReasons: S.optional(EntryViolationReasons),
        }),
      ).annotate({ identifier: "EntryViolation" });
    case 5:
      return S.Array(EntryViolation);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Vpc: S.optional(S.String),
          Subnet: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(S.String),
          CurrentAssociatedNetworkAcl: S.optional(S.String),
          EntryViolations: S.optional(EntryViolations),
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
          VpcEndpointId: S.optional(ActionTarget),
          GatewayId: S.optional(ActionTarget),
          RouteTableId: ActionTarget,
        }),
      ).annotate({ identifier: "EC2CreateRouteAction" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DestinationCidrBlock: S.optional(S.String),
          DestinationPrefixListId: S.optional(S.String),
          DestinationIpv6CidrBlock: S.optional(S.String),
          GatewayId: S.optional(ActionTarget),
          RouteTableId: ActionTarget,
        }),
      ).annotate({ identifier: "EC2ReplaceRouteAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DestinationCidrBlock: S.optional(S.String),
          DestinationPrefixListId: S.optional(S.String),
          DestinationIpv6CidrBlock: S.optional(S.String),
          RouteTableId: ActionTarget,
        }),
      ).annotate({ identifier: "EC2DeleteRouteAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          VpcId: ActionTarget,
          RouteTableId: ActionTarget,
        }),
      ).annotate({ identifier: "EC2CopyRouteTableAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          AssociationId: ActionTarget,
          RouteTableId: ActionTarget,
        }),
      ).annotate({
        identifier: "EC2ReplaceRouteTableAssociationAction",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          RouteTableId: ActionTarget,
          SubnetId: S.optional(ActionTarget),
          GatewayId: S.optional(ActionTarget),
        }),
      ).annotate({
        identifier: "EC2AssociateRouteTableAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Description: S.optional(S.String), VpcId: ActionTarget }),
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
          Vpc: S.optional(ActionTarget),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CreateNetworkAclAction" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          AssociationId: S.optional(ActionTarget),
          NetworkAclId: S.optional(ActionTarget),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ReplaceNetworkAclAssociationAction",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          NetworkAclId: S.optional(ActionTarget),
          NetworkAclEntriesToBeCreated: S.optional(EntriesDescription),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CreateNetworkAclEntriesAction",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          NetworkAclId: S.optional(ActionTarget),
          NetworkAclEntriesToBeDeleted: S.optional(EntriesDescription),
          FMSCanRemediate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DeleteNetworkAclEntriesAction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          EC2CreateRouteAction: S.optional(EC2CreateRouteAction),
          EC2ReplaceRouteAction: S.optional(EC2ReplaceRouteAction),
          EC2DeleteRouteAction: S.optional(EC2DeleteRouteAction),
          EC2CopyRouteTableAction: S.optional(EC2CopyRouteTableAction),
          EC2ReplaceRouteTableAssociationAction: S.optional(EC2ReplaceRouteTableAssociationAction),
          EC2AssociateRouteTableAction: S.optional(EC2AssociateRouteTableAction),
          EC2CreateRouteTableAction: S.optional(EC2CreateRouteTableAction),
          FMSPolicyUpdateFirewallCreationConfigAction: S.optional(
            FMSPolicyUpdateFirewallCreationConfigAction,
          ),
          CreateNetworkAclAction: S.optional(CreateNetworkAclAction),
          ReplaceNetworkAclAssociationAction: S.optional(ReplaceNetworkAclAssociationAction),
          CreateNetworkAclEntriesAction: S.optional(CreateNetworkAclEntriesAction),
          DeleteNetworkAclEntriesAction: S.optional(DeleteNetworkAclEntriesAction),
        }),
      ).annotate({ identifier: "RemediationAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({ RemediationAction: S.optional(RemediationAction), Order: S.optional(S.Number) }),
      ).annotate({
        identifier: "RemediationActionWithOrder",
      });
    case 6:
      return S.Array(RemediationActionWithOrder);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          OrderedRemediationActions: OrderedRemediationActions,
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
      return S.Array(PossibleRemediationAction);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Actions: S.optional(PossibleRemediationActionList),
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
          OutOfScopeResourceList: S.optional(ResourceArnList),
        }),
      ).annotate({
        identifier: "WebACLHasOutOfScopeResourcesViolation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AwsVPCSecurityGroupViolation: S.optional(AwsVPCSecurityGroupViolation),
          AwsEc2NetworkInterfaceViolation: S.optional(AwsEc2NetworkInterfaceViolation),
          AwsEc2InstanceViolation: S.optional(AwsEc2InstanceViolation),
          NetworkFirewallMissingFirewallViolation: S.optional(
            NetworkFirewallMissingFirewallViolation,
          ),
          NetworkFirewallMissingSubnetViolation: S.optional(NetworkFirewallMissingSubnetViolation),
          NetworkFirewallMissingExpectedRTViolation: S.optional(
            NetworkFirewallMissingExpectedRTViolation,
          ),
          NetworkFirewallPolicyModifiedViolation: S.optional(
            NetworkFirewallPolicyModifiedViolation,
          ),
          NetworkFirewallInternetTrafficNotInspectedViolation: S.optional(
            NetworkFirewallInternetTrafficNotInspectedViolation,
          ),
          NetworkFirewallInvalidRouteConfigurationViolation: S.optional(
            NetworkFirewallInvalidRouteConfigurationViolation,
          ),
          NetworkFirewallBlackHoleRouteDetectedViolation: S.optional(
            NetworkFirewallBlackHoleRouteDetectedViolation,
          ),
          NetworkFirewallUnexpectedFirewallRoutesViolation: S.optional(
            NetworkFirewallUnexpectedFirewallRoutesViolation,
          ),
          NetworkFirewallUnexpectedGatewayRoutesViolation: S.optional(
            NetworkFirewallUnexpectedGatewayRoutesViolation,
          ),
          NetworkFirewallMissingExpectedRoutesViolation: S.optional(
            NetworkFirewallMissingExpectedRoutesViolation,
          ),
          DnsRuleGroupPriorityConflictViolation: S.optional(DnsRuleGroupPriorityConflictViolation),
          DnsDuplicateRuleGroupViolation: S.optional(DnsDuplicateRuleGroupViolation),
          DnsRuleGroupLimitExceededViolation: S.optional(DnsRuleGroupLimitExceededViolation),
          FirewallSubnetIsOutOfScopeViolation: S.optional(FirewallSubnetIsOutOfScopeViolation),
          RouteHasOutOfScopeEndpointViolation: S.optional(RouteHasOutOfScopeEndpointViolation),
          ThirdPartyFirewallMissingFirewallViolation: S.optional(
            ThirdPartyFirewallMissingFirewallViolation,
          ),
          ThirdPartyFirewallMissingSubnetViolation: S.optional(
            ThirdPartyFirewallMissingSubnetViolation,
          ),
          ThirdPartyFirewallMissingExpectedRouteTableViolation: S.optional(
            ThirdPartyFirewallMissingExpectedRouteTableViolation,
          ),
          FirewallSubnetMissingVPCEndpointViolation: S.optional(
            FirewallSubnetMissingVPCEndpointViolation,
          ),
          InvalidNetworkAclEntriesViolation: S.optional(InvalidNetworkAclEntriesViolation),
          PossibleRemediationActions: S.optional(PossibleRemediationActions),
          WebACLHasIncompatibleConfigurationViolation: S.optional(
            WebACLHasIncompatibleConfigurationViolation,
          ),
          WebACLHasOutOfScopeResourcesViolation: S.optional(WebACLHasOutOfScopeResourcesViolation),
        }),
      ).annotate({ identifier: "ResourceViolation" });
    case 5:
      return S.Array(ResourceViolation);
    case 6:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 7:
      return S.Array(Tag);
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
          ResourceViolations: ResourceViolations,
          ResourceTags: S.optional(TagList),
          ResourceDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "ViolationDetail" });
    case 1:
      return S.suspend(() => S.Struct({ ViolationDetail: S.optional(ViolationDetail) })).annotate({
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
          Status: S.optional(OrganizationStatus),
        }),
      ).annotate({ identifier: "AdminAccountSummary" });
    case 4:
      return S.Array(AdminAccountSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          AdminAccounts: S.optional(AdminAccountSummaryList),
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
        S.Struct({ AdminAccounts: S.optional(AccountIdList), NextToken: S.optional(S.String) }),
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
          AppsList: S.optional(AppsList),
        }),
      ).annotate({ identifier: "AppsListDataSummary" });
    case 2:
      return S.Array(AppsListDataSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ AppsLists: S.optional(AppsListsData), NextToken: S.optional(S.String) }),
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
          ComplianceStatus: S.optional(PolicyComplianceStatusType),
          ViolatorCount: S.optional(S.Number),
          EvaluationLimitExceeded: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EvaluationResult" });
    case 6:
      return S.Array(EvaluationResult);
    case 7:
      return S.suspend(() =>
        S.Struct({
          PolicyOwner: S.optional(S.String),
          PolicyId: S.optional(S.String),
          PolicyName: S.optional(S.String),
          MemberAccount: S.optional(S.String),
          EvaluationResults: S.optional(EvaluationResults),
          LastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IssueInfoMap: S.optional(IssueInfoMap),
        }),
      ).annotate({ identifier: "PolicyComplianceStatus" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PolicyComplianceStatus);
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyComplianceStatusList: S.optional(PolicyComplianceStatusList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListComplianceStatusResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MemberAccountIds: AWSAccountIdList,
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
      return S.Array(DiscoveredResource);
    case 5:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(DiscoveredResourceList), NextToken: S.optional(S.String) }),
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
        S.Struct({ MemberAccounts: S.optional(MemberAccounts), NextToken: S.optional(S.String) }),
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
          SecurityServiceType: S.optional(SecurityServiceType),
          RemediationEnabled: S.optional(S.Boolean),
          DeleteUnusedFMManagedResources: S.optional(S.Boolean),
          PolicyStatus: S.optional(CustomerPolicyStatus),
        }),
      ).annotate({ identifier: "PolicySummary" });
    case 2:
      return S.Array(PolicySummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ PolicyList: S.optional(PolicySummaryList), NextToken: S.optional(S.String) }),
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
          ProtocolsList: S.optional(ProtocolsList),
        }),
      ).annotate({ identifier: "ProtocolsListDataSummary" });
    case 6:
      return S.Array(ProtocolsListDataSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtocolsLists: S.optional(ProtocolsListsData),
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
      return S.Array(Resource);
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: ResourceList, NextToken: S.optional(S.String) }),
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
          ResourceSetStatus: S.optional(ResourceSetStatus),
        }),
      ).annotate({ identifier: "ResourceSetSummary" });
    case 6:
      return S.Array(ResourceSetSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceSets: S.optional(ResourceSetSummaryList),
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
      return S.suspend(() => S.Struct({ TagList: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ThirdPartyFirewall: ThirdPartyFirewall,
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
      return S.Array(ThirdPartyFirewallFirewallPolicy);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ThirdPartyFirewallFirewallPolicies: S.optional(ThirdPartyFirewallFirewallPolicies),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListThirdPartyFirewallFirewallPoliciesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AdminAccount: S.String, AdminScope: S.optional(AdminScope) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAdminAccountRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ AppsList: AppsListData, TagList: S.optional(TagList) }).pipe(
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
        S.Struct({ Policy: Policy, TagList: S.optional(TagList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutPolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ProtocolsList: ProtocolsListData, TagList: S.optional(TagList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutProtocolsListRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceSet: ResourceSet, TagList: S.optional(TagList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutResourceSetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagList: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
