import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Network Security Manager",
  serviceShapeName: "PiccoloCustomerAPIService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "network-security-manager" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-10-30");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://network-security-manager-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://network-security-manager.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(503), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class TagPolicyViolationException
  extends /*@__PURE__*/ S.TaggedError<TagPolicyViolationException>()(
    "TagPolicyViolationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(148, __c18, 4)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type IdempotencyToken = string;
export type DeploymentName = string;
export type Description = string;
export type EnableCrossAccountVisibility = boolean;
export interface DeploymentConfiguration {
  enableCrossAccountVisibility: boolean;
}
export type PolicyIdentifier = string;
export interface PolicyReference {
  policyIdentifier: string;
}
export type PolicyReferenceList = PolicyReference[];
export type ScopeIdentifier = string;
export interface ScopeReference {
  scopeIdentifier: string;
}
export type ScopeReferenceList = ScopeReference[];
export type IsPublished = boolean;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateDeploymentInput {
  clientToken?: string;
  deploymentName: string;
  deploymentDescription?: string;
  deploymentConfiguration: DeploymentConfiguration;
  associatedPolicyList: PolicyReference[];
  associatedScopeList: ScopeReference[];
  isPublished?: boolean;
  tags?: { [key: string]: string | undefined };
}
export type DeploymentId = string;
export type DeploymentArn = string;
export type EntityStatus = "DRAFT" | "ACTIVE" | "DISABLED" | (string & {});
export type PolicyArn = string;
export interface AssociatedPolicy {
  policyArn: string;
}
export type AssociatedPolicyList = AssociatedPolicy[];
export type ScopeArn = string;
export interface AssociatedScope {
  scopeArn: string;
}
export type AssociatedScopeList = AssociatedScope[];
export type EntityVersion = string;
export type UpdateToken = string;
export type IsSnapshot = boolean;
export type HasPublishedVersion = boolean;
export type PolicyFirewallType = "WAF" | "SHIELD_ADVANCED" | (string & {});
export type DeploymentPolicyArnList = string[];
export type ScopeResourceType =
  | "AWS::ApiGateway::Stage"
  | "AWS::CloudFront::Distribution"
  | "AWS::EC2::EIP"
  | "AWS::ElasticLoadBalancingV2::LoadBalancer::application"
  | "AWS::ElasticLoadBalancing::LoadBalancer"
  | (string & {});
export type DeploymentResourceTypeList = ScopeResourceType[];
export interface DeploymentCoverageEntry {
  firewallType: PolicyFirewallType;
  policyArns: string[];
  inScopeResourceTypes: ScopeResourceType[];
}
export type DeploymentCoverageList = DeploymentCoverageEntry[];
export interface DeploymentWarningEntry {
  code: string;
  policyArn: string;
  message: string;
}
export type DeploymentWarningList = DeploymentWarningEntry[];
export interface CreateDeploymentOutput {
  deploymentId: string;
  deploymentArn: string;
  deploymentName: string;
  deploymentDescription?: string;
  status: EntityStatus;
  deploymentConfiguration?: DeploymentConfiguration;
  associatedPolicyList: AssociatedPolicy[];
  associatedScopeList: AssociatedScope[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  deploymentCoverage?: DeploymentCoverageEntry[];
  warnings?: DeploymentWarningEntry[];
  updatedAt?: Date;
}
export type DeploymentIdentifier = string;
export interface CreateDeploymentSnapshotInput {
  deploymentIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateDeploymentSnapshotOutput {
  deploymentId: string;
  deploymentArn: string;
  deploymentName: string;
  deploymentDescription?: string;
  status: EntityStatus;
  deploymentConfiguration?: DeploymentConfiguration;
  associatedPolicyList: AssociatedPolicy[];
  associatedScopeList: AssociatedScope[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export type PolicyName = string;
export type Priority = number;
export type TemplateIdentifier = string;
export type RuleIdentifier = string;
export type TemplateOrRuleReference =
  | { templateIdentifier: string; ruleIdentifier?: never }
  | { templateIdentifier?: never; ruleIdentifier: string };
export type TemplateAndRuleReferenceList = TemplateOrRuleReference[];
export type RemediationEnabled = boolean;
export type ResourcesCleanUp = boolean;
export type ExistingCustomerWebACLResolution =
  | "RETROFIT"
  | "OVERRIDE_ASSOCIATION"
  | "NO_REMEDIATION"
  | (string & {});
export type WAFConflictResolutionOptions = "MERGE_WHERE_APPLICABLE" | (string & {});
export interface WafConfig {
  existingCustomerWebACLResolution: ExistingCustomerWebACLResolution;
  conflictResolution: WAFConflictResolutionOptions;
}
export interface PolicyConfiguration {
  remediationEnabled: boolean;
  resourcesCleanUp: boolean;
  wafConfig?: WafConfig;
}
export interface CreatePolicyInput {
  clientToken?: string;
  policyName: string;
  policyDescription?: string;
  priority: number;
  associatedTemplateAndRuleList?: TemplateOrRuleReference[];
  firewallType: PolicyFirewallType;
  policyConfiguration: PolicyConfiguration;
  isPublished?: boolean;
  tags?: { [key: string]: string | undefined };
}
export type PolicyId = string;
export type TemplateArn = string;
export type RuleArn = string;
export type AssociatedTemplateOrRule =
  | { templateArn: string; ruleArn?: never }
  | { templateArn?: never; ruleArn: string };
export type AssociatedTemplateAndRuleList = AssociatedTemplateOrRule[];
export interface CreatePolicyOutput {
  policyId: string;
  policyArn: string;
  policyName: string;
  policyDescription?: string;
  status: EntityStatus;
  priority: number;
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: PolicyFirewallType;
  policyConfiguration?: PolicyConfiguration;
  updatedAt?: Date;
}
export interface CreatePolicySnapshotInput {
  policyIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreatePolicySnapshotOutput {
  policyId: string;
  policyArn: string;
  policyName: string;
  policyDescription?: string;
  status: EntityStatus;
  priority: number;
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: PolicyFirewallType;
  policyConfiguration?: PolicyConfiguration;
  updatedAt?: Date;
}
export type RuleName = string;
export type RuleFirewallType = "WAF" | (string & {});
export type RuleType = "CONFIGURATION" | "INSPECTION" | (string & {});
export type JsonDocument = unknown;
export interface CreateRuleInput {
  clientToken?: string;
  ruleName: string;
  firewallType: RuleFirewallType;
  ruleType: RuleType;
  ruleDescription?: string;
  configuration: any;
  isPublished?: boolean;
  tags?: { [key: string]: string | undefined };
}
export type RuleId = string;
export interface CreateRuleOutput {
  ruleId: string;
  ruleArn: string;
  ruleName: string;
  firewallType: RuleFirewallType;
  ruleType?: RuleType;
  ruleDescription?: string;
  configuration: any;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export interface CreateRuleSnapshotInput {
  ruleIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateRuleSnapshotOutput {
  ruleId: string;
  ruleArn: string;
  ruleName: string;
  firewallType: RuleFirewallType;
  ruleType?: RuleType;
  ruleDescription?: string;
  configuration: any;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export type ScopeName = string;
export type AccountId = string;
export type AccountList = string[];
export type OrganizationalUnit = string;
export type OrganizationalUnitList = string[];
export interface AccountSet {
  accountIds?: string[];
  organizationalUnits?: string[];
}
export type AccountFilter =
  | { includeAll: Record<string, never>; include?: never; exclude?: never }
  | { includeAll?: never; include: AccountSet; exclude?: never }
  | { includeAll?: never; include?: never; exclude: AccountSet };
export type Arn = string;
export type ResourceArnList = string[];
export type StringMap = { [key: string]: string | undefined };
export type Scheme = "internet-facing" | "internal" | (string & {});
export type IpAddressType = "ipv4" | "dualstack" | "dualstack-without-public-ipv4" | (string & {});
export interface AlbConfiguration {
  scheme?: Scheme;
  ipAddressType?: IpAddressType;
}
export type ResourceCriteria =
  | { tags: { [key: string]: string | undefined }; albConfig?: never }
  | { tags?: never; albConfig: AlbConfiguration };
export type ResourceLogicalExpressionList = ResourceLogicalExpression[];
export type ResourceLogicalExpression =
  | { criteria: ResourceCriteria; and?: never; or?: never; not?: never }
  | { criteria?: never; and: ResourceLogicalExpression[]; or?: never; not?: never }
  | { criteria?: never; and?: never; or: ResourceLogicalExpression[]; not?: never }
  | { criteria?: never; and?: never; or?: never; not: ResourceLogicalExpression };
export interface ResourceSet {
  explicitArns?: string[];
  expression?: ResourceLogicalExpression;
}
export interface ResourceScope {
  includeAll?: boolean;
  include?: ResourceSet;
  exclude?: ResourceSet;
}
export type ResourceScopeMap = { [key in ScopeResourceType]?: ResourceScope };
export interface ScopeConfiguration {
  accountFilter?: AccountFilter;
  resourceScopes: { [key: string]: ResourceScope | undefined };
}
export interface CreateScopeInput {
  clientToken?: string;
  scopeName: string;
  scopeDescription?: string;
  scopeConfiguration: ScopeConfiguration;
  isPublished?: boolean;
  tags?: { [key: string]: string | undefined };
}
export type ScopeId = string;
export interface CreateScopeOutput {
  scopeId: string;
  scopeArn: string;
  scopeName: string;
  scopeDescription?: string;
  scopeConfiguration?: ScopeConfiguration;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export interface CreateScopeSnapshotInput {
  scopeIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateScopeSnapshotOutput {
  scopeId: string;
  scopeArn: string;
  scopeName: string;
  scopeDescription?: string;
  scopeConfiguration?: ScopeConfiguration;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export type TemplateName = string;
export interface RuleReference {
  ruleIdentifier: string;
}
export type RuleReferenceList = RuleReference[];
export type TemplateFirewallType = "WAF" | (string & {});
export interface CreateTemplateInput {
  clientToken?: string;
  templateName: string;
  templateDescription?: string;
  associatedRuleList: RuleReference[];
  firewallType: TemplateFirewallType;
  isPublished?: boolean;
  tags?: { [key: string]: string | undefined };
}
export type TemplateId = string;
export interface AssociatedRule {
  ruleArn: string;
}
export type AssociatedRuleList = AssociatedRule[];
export interface CreateTemplateOutput {
  templateId: string;
  templateArn: string;
  templateName: string;
  templateDescription?: string;
  status: EntityStatus;
  version: string;
  associatedRuleList: AssociatedRule[];
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: TemplateFirewallType;
  updatedAt?: Date;
}
export interface CreateTemplateSnapshotInput {
  templateIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateTemplateSnapshotOutput {
  templateId: string;
  templateArn: string;
  templateName: string;
  templateDescription?: string;
  status: EntityStatus;
  version: string;
  associatedRuleList: AssociatedRule[];
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: TemplateFirewallType;
  updatedAt?: Date;
}
export interface DeleteAdminAccountRequest {
  accountId: string;
}
export interface DeleteAdminAccountResponse {}
export interface DeleteDeploymentInput {
  deploymentIdentifier: string;
}
export interface DeleteDeploymentResponse {}
export interface DeletePolicyInput {
  policyIdentifier: string;
}
export interface DeletePolicyResponse {}
export interface DeleteRuleInput {
  ruleIdentifier: string;
}
export interface DeleteRuleResponse {}
export interface DeleteScopeInput {
  scopeIdentifier: string;
}
export interface DeleteScopeResponse {}
export interface DeleteTemplateInput {
  templateIdentifier: string;
}
export interface DeleteTemplateResponse {}
export type SensitiveString = string | redacted.Redacted<string>;
export type WAFConfigDataType =
  | "DefaultAction"
  | "VisibilityConfig"
  | "CaptchaConfig"
  | "ChallengeConfig"
  | "CustomResponseBodies"
  | "LoggingConfiguration"
  | "DataProtectionConfig"
  | "AssociationConfig"
  | "OnSourceDDoSProtectionConfig"
  | "TokenDomains"
  | (string & {});
export interface GenerateRuleConfigurationRequest {
  prompt: string | redacted.Redacted<string>;
  ruleFirewallType: RuleFirewallType;
  ruleType: RuleType;
  wafConfigDataType?: WAFConfigDataType;
  currentConfiguration?: string;
  clientToken?: string;
}
export interface GenerateRuleConfigurationResponse {
  configuration: string;
  description?: string;
}
export interface GetAdminAccountRequest {
  accountId: string;
}
export type AdminPriority = number;
export type SensitiveAccountName = string | redacted.Redacted<string>;
export type SensitiveAccountEmail = string | redacted.Redacted<string>;
export interface AccountReference {
  accountId: string;
  name?: string | redacted.Redacted<string>;
  email?: string | redacted.Redacted<string>;
}
export type AccountReferenceList = AccountReference[];
export type OrganizationalUnitId = string;
export interface OrganizationalUnitReference {
  ouId: string;
  name?: string;
}
export type OrganizationalUnitReferenceList = OrganizationalUnitReference[];
export interface AdminScopeSelection {
  accounts?: AccountReference[];
  organizationalUnits?: OrganizationalUnitReference[];
}
export type AdminScopeFilter =
  | { includeAll: Record<string, never>; includeOnly?: never; excludeOnly?: never }
  | { includeAll?: never; includeOnly: AdminScopeSelection; excludeOnly?: never }
  | { includeAll?: never; includeOnly?: never; excludeOnly: AdminScopeSelection };
export type FirewallTypeList = PolicyFirewallType[];
export interface AdminFirewallTypeScope {
  allFirewallTypesEnabled?: boolean;
  firewallTypes?: PolicyFirewallType[];
}
export interface AdminScope {
  scopeFilter?: AdminScopeFilter;
  firewallTypeScope?: AdminFirewallTypeScope;
}
export type AdminAccountStatus = "ONBOARDED" | "OFFBOARDED" | (string & {});
export interface AdminAccountDetails {
  adminAccount: string;
  priority: number;
  adminScope?: AdminScope;
  status?: AdminAccountStatus;
}
export interface GetAdminAccountResponse {
  adminAccountDetails?: AdminAccountDetails;
}
export interface GetDeploymentInput {
  deploymentIdentifier: string;
}
export interface GetDeploymentOutput {
  deploymentId: string;
  deploymentArn: string;
  deploymentName: string;
  deploymentDescription?: string;
  status: EntityStatus;
  deploymentConfiguration?: DeploymentConfiguration;
  associatedPolicyList: AssociatedPolicy[];
  associatedScopeList: AssociatedScope[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
  deploymentCoverage?: DeploymentCoverageEntry[];
  warnings?: DeploymentWarningEntry[];
}
export interface GetPolicyInput {
  policyIdentifier: string;
}
export interface GetPolicyOutput {
  policyId: string;
  policyArn: string;
  policyName: string;
  policyDescription?: string;
  status: EntityStatus;
  priority: number;
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: PolicyFirewallType;
  policyConfiguration?: PolicyConfiguration;
  updatedAt?: Date;
}
export interface GetRuleInput {
  ruleIdentifier: string;
}
export interface GetRuleOutput {
  ruleId: string;
  ruleArn: string;
  ruleName: string;
  firewallType: RuleFirewallType;
  ruleType?: RuleType;
  ruleDescription?: string;
  configuration: any;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export interface GetScopeInput {
  scopeIdentifier: string;
}
export interface GetScopeOutput {
  scopeId: string;
  scopeArn: string;
  scopeName: string;
  scopeDescription?: string;
  scopeConfiguration?: ScopeConfiguration;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export interface GetTemplateInput {
  templateIdentifier: string;
}
export interface GetTemplateOutput {
  templateId: string;
  templateArn: string;
  templateName: string;
  templateDescription?: string;
  status: EntityStatus;
  version: string;
  associatedRuleList: AssociatedRule[];
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: TemplateFirewallType;
  updatedAt?: Date;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type SensitiveName = string | redacted.Redacted<string>;
export type SensitiveEmail = string | redacted.Redacted<string>;
export interface AdminAccountSummary {
  accountId: string;
  priority?: number;
  name?: string | redacted.Redacted<string>;
  email?: string | redacted.Redacted<string>;
}
export type AdminAccountSummaryList = AdminAccountSummary[];
export interface ListAdminAccountsResponse {
  nextToken?: string;
  adminAccounts: AdminAccountSummary[];
}
export type SynchronizationStatus = "IN_SYNC" | "OUT_OF_SYNC" | "NOT_APPLICABLE" | (string & {});
export interface ListAggregateResourceSynchronizationStatusesInput {
  synchronizationStatus?: SynchronizationStatus;
  maxResults?: number;
  nextToken?: string;
}
export type ResourceType =
  | "AWS::ApiGateway::Stage"
  | "AWS::CloudFront::Distribution"
  | "AWS::EC2::EIP"
  | "AWS::ElasticLoadBalancingV2::LoadBalancer::application"
  | "AWS::ElasticLoadBalancing::LoadBalancer"
  | "AWS::WAFv2::WebACL"
  | "AWS::Shield::Protection"
  | "AWS::ShieldRegional::Protection"
  | (string & {});
export interface ConfigurationIssue {
  configurationName?: string;
  expectedValue?: string;
  actualValue?: string;
}
export type ConfigurationIssueList = ConfigurationIssue[];
export interface InvalidFirewallReasons {
  incorrectSingleValueConfigurations?: ConfigurationIssue[];
  missingAppendableConfigurationValues?: ConfigurationIssue[];
  unexpectedAppendableConfigurationValues?: ConfigurationIssue[];
  incorrectAppendableConfigurationOrder?: ConfigurationIssue[];
  missingMergeableConfigurationValues?: ConfigurationIssue[];
  unexpectedMergeableConfigurationValues?: ConfigurationIssue[];
}
export type FirewallSyncReason =
  | { missingFirewall: string; invalidFirewall?: never }
  | { missingFirewall?: never; invalidFirewall: InvalidFirewallReasons };
export type OutOfSyncReasons = { [key in PolicyFirewallType]?: FirewallSyncReason };
export interface NotVisibleMarker {
  reason: string;
}
export type OutOfSyncReasonsView =
  | { reasons: { [key: string]: FirewallSyncReason | undefined }; notVisible?: never }
  | { reasons?: never; notVisible: NotVisibleMarker };
export interface RemediationIssueDetails {
  issueType?: string;
  message?: string;
  correctiveAction?: string;
}
export type RemediationIssues = { [key in PolicyFirewallType]?: RemediationIssueDetails };
export type RemediationIssuesView =
  | { issues: { [key: string]: RemediationIssueDetails | undefined }; notVisible?: never }
  | { issues?: never; notVisible: NotVisibleMarker };
export interface ResourceSynchronizationStatusSummary {
  synchronizationStatus: SynchronizationStatus;
  accountId: string;
  resourceArn: string;
  deploymentArn?: string;
  resourceType?: ResourceType;
  updatedAt: Date;
  outOfSyncReasons?: OutOfSyncReasonsView;
  remediationIssues?: RemediationIssuesView;
  evaluatedAt?: Date;
}
export type ResourceSynchronizationStatusSummaryList = ResourceSynchronizationStatusSummary[];
export interface ListAggregateResourceSynchronizationStatusesOutput {
  nextToken?: string;
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[];
}
export type EntityStatusFilter = "ACTIVE" | "DRAFT" | "DISABLED" | (string & {});
export interface ListDeploymentsInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
export interface DeploymentSummary {
  deploymentId: string;
  deploymentArn: string;
  deploymentName?: string;
  status?: EntityStatus;
  version?: string;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export type DeploymentSummaryList = DeploymentSummary[];
export interface ListDeploymentsOutput {
  nextToken?: string;
  deployments: DeploymentSummary[];
}
export interface ListDeploymentSnapshotsInput {
  deploymentIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeploymentSnapshotsOutput {
  nextToken?: string;
  snapshots: DeploymentSummary[];
}
export interface ListPoliciesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
export interface PolicySummary {
  policyId: string;
  policyArn: string;
  policyName?: string;
  status?: EntityStatus;
  version?: string;
  hasPublishedVersion?: boolean;
  firewallType?: PolicyFirewallType;
  priority?: number;
  updatedAt?: Date;
}
export type PolicySummaryList = PolicySummary[];
export interface ListPoliciesOutput {
  nextToken?: string;
  policies: PolicySummary[];
}
export interface ListPolicySnapshotsInput {
  policyIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPolicySnapshotsOutput {
  nextToken?: string;
  snapshots: PolicySummary[];
}
export type ResourceIdentifier = string;
export interface ListResourceAssociationsInput {
  resourceIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export type ServiceResourceType =
  | "Rule"
  | "Template"
  | "Policy"
  | "Deployment"
  | "Scope"
  | (string & {});
export interface ResourceAssociation {
  arn: string;
  resourceType: ServiceResourceType;
}
export type ResourceAssociationList = ResourceAssociation[];
export interface ListResourceAssociationsOutput {
  nextToken?: string;
  resourceAssociations: ResourceAssociation[];
}
export interface ListResourceSynchronizationStatusesInput {
  deploymentIdentifier: string;
  synchronizationStatus?: SynchronizationStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface ListResourceSynchronizationStatusesOutput {
  nextToken?: string;
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[];
}
export interface ListRulesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
export interface RuleSummary {
  ruleId: string;
  ruleArn: string;
  ruleName: string;
  firewallType?: RuleFirewallType;
  ruleType?: RuleType;
  status?: EntityStatus;
  version?: string;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export type RuleSummaryList = RuleSummary[];
export interface ListRulesOutput {
  nextToken?: string;
  rules: RuleSummary[];
}
export interface ListRuleSnapshotsInput {
  ruleIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRuleSnapshotsOutput {
  nextToken?: string;
  snapshots: RuleSummary[];
}
export interface ListScopesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
export interface ScopeSummary {
  scopeId: string;
  scopeArn: string;
  scopeName?: string;
  status?: EntityStatus;
  version?: string;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export type ScopeSummaryList = ScopeSummary[];
export interface ListScopesOutput {
  nextToken?: string;
  scopes: ScopeSummary[];
}
export interface ListScopeSnapshotsInput {
  scopeIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListScopeSnapshotsOutput {
  nextToken?: string;
  snapshots: ScopeSummary[];
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
export interface ListTemplatesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
export interface TemplateSummary {
  templateId: string;
  templateArn: string;
  templateName: string;
  status?: EntityStatus;
  version?: string;
  hasPublishedVersion?: boolean;
  firewallType?: TemplateFirewallType;
  updatedAt?: Date;
}
export type TemplateSummaryList = TemplateSummary[];
export interface ListTemplatesOutput {
  nextToken?: string;
  templates: TemplateSummary[];
}
export interface ListTemplateSnapshotsInput {
  templateIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListTemplateSnapshotsOutput {
  nextToken?: string;
  snapshots: TemplateSummary[];
}
export type AccountIdList = string[];
export type OrganizationalUnitIdList = string[];
export interface AdminScopeSelectionInput {
  accounts?: string[];
  organizationalUnits?: string[];
}
export type AdminScopeFilterInput =
  | { includeAll: Record<string, never>; includeOnly?: never; excludeOnly?: never }
  | { includeAll?: never; includeOnly: AdminScopeSelectionInput; excludeOnly?: never }
  | { includeAll?: never; includeOnly?: never; excludeOnly: AdminScopeSelectionInput };
export interface AdminScopeInput {
  scopeFilter?: AdminScopeFilterInput;
  firewallTypeScope?: AdminFirewallTypeScope;
}
export interface PutAdminAccountRequest {
  accountId: string;
  priority: number;
  adminScope?: AdminScopeInput;
}
export interface PutAdminAccountResponse {
  adminAccountDetails?: AdminAccountDetails;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceOutput {}
export type TagKeyList = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateDeploymentInput {
  deploymentIdentifier: string;
  updateToken: string;
  deploymentDescription?: string;
  deploymentConfiguration?: DeploymentConfiguration;
  associatedPolicyList?: PolicyReference[];
  associatedScopeList?: ScopeReference[];
  isPublished: boolean;
  clientToken?: string;
}
export interface UpdateDeploymentOutput {
  deploymentId: string;
  deploymentArn: string;
  deploymentName: string;
  deploymentDescription?: string;
  status: EntityStatus;
  deploymentConfiguration?: DeploymentConfiguration;
  associatedPolicyList: AssociatedPolicy[];
  associatedScopeList: AssociatedScope[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  deploymentCoverage?: DeploymentCoverageEntry[];
  warnings?: DeploymentWarningEntry[];
  updatedAt?: Date;
}
export interface UpdatePolicyInput {
  policyIdentifier: string;
  updateToken: string;
  policyDescription?: string;
  priority?: number;
  associatedTemplateAndRuleList?: TemplateOrRuleReference[];
  policyConfiguration?: PolicyConfiguration;
  isPublished: boolean;
  clientToken?: string;
}
export interface UpdatePolicyOutput {
  policyId: string;
  policyArn: string;
  policyName: string;
  policyDescription?: string;
  status: EntityStatus;
  priority: number;
  associatedTemplateAndRuleList: AssociatedTemplateOrRule[];
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: PolicyFirewallType;
  policyConfiguration?: PolicyConfiguration;
  updatedAt?: Date;
}
export interface UpdateRuleInput {
  ruleIdentifier: string;
  updateToken: string;
  ruleType?: RuleType;
  ruleDescription?: string;
  configuration?: any;
  isPublished: boolean;
  clientToken?: string;
}
export interface UpdateRuleOutput {
  ruleId: string;
  ruleArn: string;
  ruleName: string;
  firewallType: RuleFirewallType;
  ruleType?: RuleType;
  ruleDescription?: string;
  configuration: any;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export interface UpdateScopeInput {
  scopeIdentifier: string;
  updateToken: string;
  scopeDescription?: string;
  scopeConfiguration?: ScopeConfiguration;
  isPublished: boolean;
  clientToken?: string;
}
export interface UpdateScopeOutput {
  scopeId: string;
  scopeArn: string;
  scopeName: string;
  scopeDescription?: string;
  scopeConfiguration?: ScopeConfiguration;
  status: EntityStatus;
  version: string;
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
export interface UpdateTemplateInput {
  templateIdentifier: string;
  updateToken: string;
  templateDescription?: string;
  associatedRuleList?: RuleReference[];
  isPublished: boolean;
  clientToken?: string;
}
export interface UpdateTemplateOutput {
  templateId: string;
  templateArn: string;
  templateName: string;
  templateDescription?: string;
  status: EntityStatus;
  version: string;
  associatedRuleList: AssociatedRule[];
  updateToken?: string;
  isSnapshot?: boolean;
  hasPublishedVersion?: boolean;
  firewallType: TemplateFirewallType;
  updatedAt?: Date;
}
export type ValidationExceptionReason =
  | "ACCOUNT_NOT_ONBOARDED"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | (string & {});
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type CreateDeploymentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | TagPolicyViolationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a deployment. A deployment applies one or more policies to the accounts and resources selected by a scope. Use `isPublished` to create the deployment in published (`ACTIVE`) or draft (`DRAFT`) state. The response includes coverage information and any warnings about the deployment.
 */
export const createDeployment: API.OperationMethod<
  CreateDeploymentInput,
  CreateDeploymentOutput,
  CreateDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<CreateDeploymentInput>,
  output: __S(17, __c2, 1) as any as S.Schema<CreateDeploymentOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    TagPolicyViolationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeployment",
}));

export type CreateDeploymentSnapshotError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a snapshot of the current published version of the specified deployment.
 */
export const createDeploymentSnapshot: API.OperationMethod<
  CreateDeploymentSnapshotInput,
  CreateDeploymentSnapshotOutput,
  CreateDeploymentSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<CreateDeploymentSnapshotInput>,
  output: __S(19, __c2, 3) as any as S.Schema<CreateDeploymentSnapshotOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeploymentSnapshot",
}));

export type CreatePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | TagPolicyViolationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a policy. A policy combines templates and rules with enforcement settings for a firewall type, such as AWS WAF or AWS Shield Advanced. Use `isPublished` to create the policy in published (`ACTIVE`) or draft (`DRAFT`) state.
 */
export const createPolicy: API.OperationMethod<
  CreatePolicyInput,
  CreatePolicyOutput,
  CreatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<CreatePolicyInput>,
  output: __S(27, __c3, 3) as any as S.Schema<CreatePolicyOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    TagPolicyViolationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicy",
}));

export type CreatePolicySnapshotError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a snapshot of the current published version of the specified policy.
 */
export const createPolicySnapshot: API.OperationMethod<
  CreatePolicySnapshotInput,
  CreatePolicySnapshotOutput,
  CreatePolicySnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<CreatePolicySnapshotInput>,
  output: __S(29, __c3, 5) as any as S.Schema<CreatePolicySnapshotOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicySnapshot",
}));

export type CreateRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | TagPolicyViolationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a rule. A rule defines a network security configuration to enforce, such as an AWS WAF rule group or configuration data. Use `isPublished` to create the rule in published (`ACTIVE`) or draft (`DRAFT`) state.
 */
export const createRule: API.OperationMethod<
  CreateRuleInput,
  CreateRuleOutput,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<CreateRuleInput>,
  output: __S(31, __c3, 7) as any as S.Schema<CreateRuleOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    TagPolicyViolationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRule",
}));

export type CreateRuleSnapshotError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a snapshot of the current published version of the specified rule. A snapshot is an immutable, versioned copy that other resources can reference.
 */
export const createRuleSnapshot: API.OperationMethod<
  CreateRuleSnapshotInput,
  CreateRuleSnapshotOutput,
  CreateRuleSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<CreateRuleSnapshotInput>,
  output: __S(31, __c3, 7) as any as S.Schema<CreateRuleSnapshotOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRuleSnapshot",
}));

export type CreateScopeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | TagPolicyViolationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scope. A scope selects the accounts and resources that a deployment applies to. Use `isPublished` to create the scope in published (`ACTIVE`) or draft (`DRAFT`) state.
 */
export const createScope: API.OperationMethod<
  CreateScopeInput,
  CreateScopeOutput,
  CreateScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<CreateScopeInput>,
  output: __S(44, __c5, 4) as any as S.Schema<CreateScopeOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    TagPolicyViolationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScope",
}));

export type CreateScopeSnapshotError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a snapshot of the current published version of the specified scope.
 */
export const createScopeSnapshot: API.OperationMethod<
  CreateScopeSnapshotInput,
  CreateScopeSnapshotOutput,
  CreateScopeSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<CreateScopeSnapshotInput>,
  output: __S(46, __c5, 6) as any as S.Schema<CreateScopeSnapshotOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScopeSnapshot",
}));

export type CreateTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | TagPolicyViolationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a template. A template groups one or more rules to simplify reuse across policies. You can also associate rules with a policy directly, without a template. Use `isPublished` to create the template in published (`ACTIVE`) or draft (`DRAFT`) state.
 */
export const createTemplate: API.OperationMethod<
  CreateTemplateInput,
  CreateTemplateOutput,
  CreateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<CreateTemplateInput>,
  output: __S(52, __c6, 4) as any as S.Schema<CreateTemplateOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    TagPolicyViolationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTemplate",
}));

export type CreateTemplateSnapshotError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a snapshot of the current published version of the specified template.
 */
export const createTemplateSnapshot: API.OperationMethod<
  CreateTemplateSnapshotInput,
  CreateTemplateSnapshotOutput,
  CreateTemplateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<CreateTemplateSnapshotInput>,
  output: __S(54, __c6, 6) as any as S.Schema<CreateTemplateSnapshotOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTemplateSnapshot",
}));

export type DeleteAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified AWS Network Security Manager administrator account.
 */
export const deleteAdminAccount: API.OperationMethod<
  DeleteAdminAccountRequest,
  DeleteAdminAccountResponse,
  DeleteAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DeleteAdminAccountRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<DeleteAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAdminAccount",
}));

export type DeleteDeploymentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified deployment.
 */
export const deleteDeployment: API.OperationMethod<
  DeleteDeploymentInput,
  DeleteDeploymentResponse,
  DeleteDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<DeleteDeploymentInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DeleteDeploymentResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDeployment",
}));

export type DeletePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified policy.
 */
export const deletePolicy: API.OperationMethod<
  DeletePolicyInput,
  DeletePolicyResponse,
  DeletePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<DeletePolicyInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DeletePolicyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicy",
}));

export type DeleteRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified rule.
 */
export const deleteRule: API.OperationMethod<
  DeleteRuleInput,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<DeleteRuleInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DeleteRuleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRule",
}));

export type DeleteScopeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified scope.
 */
export const deleteScope: API.OperationMethod<
  DeleteScopeInput,
  DeleteScopeResponse,
  DeleteScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<DeleteScopeInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DeleteScopeResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScope",
}));

export type DeleteTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified template.
 */
export const deleteTemplate: API.OperationMethod<
  DeleteTemplateInput,
  DeleteTemplateResponse,
  DeleteTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<DeleteTemplateInput>,
  output: __S(56, __c7, 0) as any as S.Schema<DeleteTemplateResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTemplate",
}));

export type GenerateRuleConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Generates a rule configuration from a natural-language description. Provide a prompt along with the rule's firewall type and rule type. The service returns a configuration that you can use when you create or update a rule. If you also provide an existing configuration, the service edits that configuration instead of generating a new one.
 */
export const generateRuleConfiguration: API.OperationMethod<
  GenerateRuleConfigurationRequest,
  GenerateRuleConfigurationResponse,
  GenerateRuleConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<GenerateRuleConfigurationRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<GenerateRuleConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateRuleConfiguration",
}));

export type GetAdminAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the specified AWS Network Security Manager administrator account.
 */
export const getAdminAccount: API.OperationMethod<
  GetAdminAccountRequest,
  GetAdminAccountResponse,
  GetAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<GetAdminAccountRequest>,
  output: __S(74, __c9, 2) as any as S.Schema<GetAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdminAccount",
}));

export type GetDeploymentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the specified deployment, including coverage information and any warnings.
 */
export const getDeployment: API.OperationMethod<
  GetDeploymentInput,
  GetDeploymentOutput,
  GetDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<GetDeploymentInput>,
  output: __S(76, __c9, 4) as any as S.Schema<GetDeploymentOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeployment",
}));

export type GetPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the specified policy.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyInput,
  GetPolicyOutput,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<GetPolicyInput>,
  output: __S(27, __c3, 3) as any as S.Schema<GetPolicyOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the specified rule.
 */
export const getRule: API.OperationMethod<
  GetRuleInput,
  GetRuleOutput,
  GetRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<GetRuleInput>,
  output: __S(31, __c3, 7) as any as S.Schema<GetRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRule",
}));

export type GetScopeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the specified scope.
 */
export const getScope: API.OperationMethod<
  GetScopeInput,
  GetScopeOutput,
  GetScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<GetScopeInput>,
  output: __S(44, __c5, 4) as any as S.Schema<GetScopeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetScope",
}));

export type GetTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the specified template.
 */
export const getTemplate: API.OperationMethod<
  GetTemplateInput,
  GetTemplateOutput,
  GetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<GetTemplateInput>,
  output: __S(52, __c6, 4) as any as S.Schema<GetTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemplate",
}));

export type ListAdminAccountsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the AWS Network Security Manager administrator accounts in the organization.
 */
export const listAdminAccounts: API.PaginatedOperationMethod<
  ListAdminAccountsRequest,
  ListAdminAccountsResponse,
  ListAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  AdminAccountSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<ListAdminAccountsRequest>,
  output: __S(84, __c10, 4) as any as S.Schema<ListAdminAccountsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdminAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "adminAccounts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAggregateResourceSynchronizationStatusesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the aggregated synchronization statuses of resources across the deployments in your administrator account. You can filter the results by synchronization status and page through them.
 */
export const listAggregateResourceSynchronizationStatuses: API.PaginatedOperationMethod<
  ListAggregateResourceSynchronizationStatusesInput,
  ListAggregateResourceSynchronizationStatusesOutput,
  ListAggregateResourceSynchronizationStatusesError,
  Credentials | HttpClient.HttpClient,
  ResourceSynchronizationStatusSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<ListAggregateResourceSynchronizationStatusesInput>,
  output: __S(98, __c12, 2) as any as S.Schema<ListAggregateResourceSynchronizationStatusesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAggregateResourceSynchronizationStatuses",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resourceSynchronizationStatuses",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDeploymentsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the deployments in the account. You can filter the results by status and page through them using `maxResults` and `nextToken`.
 */
export const listDeployments: API.PaginatedOperationMethod<
  ListDeploymentsInput,
  ListDeploymentsOutput,
  ListDeploymentsError,
  Credentials | HttpClient.HttpClient,
  DeploymentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<ListDeploymentsInput>,
  output: __S(102, __c12, 6) as any as S.Schema<ListDeploymentsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeployments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "deployments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDeploymentSnapshotsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the snapshots of the specified deployment.
 */
export const listDeploymentSnapshots: API.PaginatedOperationMethod<
  ListDeploymentSnapshotsInput,
  ListDeploymentSnapshotsOutput,
  ListDeploymentSnapshotsError,
  Credentials | HttpClient.HttpClient,
  DeploymentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<ListDeploymentSnapshotsInput>,
  output: __S(104, __c13, 0) as any as S.Schema<ListDeploymentSnapshotsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeploymentSnapshots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "snapshots",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the policies in the account. You can filter the results by status and page through them using `maxResults` and `nextToken`.
 */
export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesInput,
  ListPoliciesOutput,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient,
  PolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<ListPoliciesInput>,
  output: __S(108, __c13, 4) as any as S.Schema<ListPoliciesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicySnapshotsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the snapshots of the specified policy.
 */
export const listPolicySnapshots: API.PaginatedOperationMethod<
  ListPolicySnapshotsInput,
  ListPolicySnapshotsOutput,
  ListPolicySnapshotsError,
  Credentials | HttpClient.HttpClient,
  PolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<ListPolicySnapshotsInput>,
  output: __S(110, __c13, 6) as any as S.Schema<ListPolicySnapshotsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicySnapshots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "snapshots",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resources associated with the specified resource.
 */
export const listResourceAssociations: API.PaginatedOperationMethod<
  ListResourceAssociationsInput,
  ListResourceAssociationsOutput,
  ListResourceAssociationsError,
  Credentials | HttpClient.HttpClient,
  ResourceAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<ListResourceAssociationsInput>,
  output: __S(114, __c14, 2) as any as S.Schema<ListResourceAssociationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resourceAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceSynchronizationStatusesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the synchronization statuses of the resources covered by the specified deployment. You can filter the results by synchronization status and page through them.
 */
export const listResourceSynchronizationStatuses: API.PaginatedOperationMethod<
  ListResourceSynchronizationStatusesInput,
  ListResourceSynchronizationStatusesOutput,
  ListResourceSynchronizationStatusesError,
  Credentials | HttpClient.HttpClient,
  ResourceSynchronizationStatusSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<ListResourceSynchronizationStatusesInput>,
  output: __S(98, __c12, 2) as any as S.Schema<ListResourceSynchronizationStatusesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceSynchronizationStatuses",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resourceSynchronizationStatuses",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRulesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the rules in the account. You can filter the results by status and page through them using `maxResults` and `nextToken`.
 */
export const listRules: API.PaginatedOperationMethod<
  ListRulesInput,
  ListRulesOutput,
  ListRulesError,
  Credentials | HttpClient.HttpClient,
  RuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<ListRulesInput>,
  output: __S(119, __c14, 7) as any as S.Schema<ListRulesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRuleSnapshotsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the snapshots of the specified rule.
 */
export const listRuleSnapshots: API.PaginatedOperationMethod<
  ListRuleSnapshotsInput,
  ListRuleSnapshotsOutput,
  ListRuleSnapshotsError,
  Credentials | HttpClient.HttpClient,
  RuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<ListRuleSnapshotsInput>,
  output: __S(121, __c15, 1) as any as S.Schema<ListRuleSnapshotsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleSnapshots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "snapshots",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScopesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the scopes in the account. You can filter the results by status and page through them using `maxResults` and `nextToken`.
 */
export const listScopes: API.PaginatedOperationMethod<
  ListScopesInput,
  ListScopesOutput,
  ListScopesError,
  Credentials | HttpClient.HttpClient,
  ScopeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<ListScopesInput>,
  output: __S(125, __c15, 5) as any as S.Schema<ListScopesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScopes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scopes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScopeSnapshotsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the snapshots of the specified scope.
 */
export const listScopeSnapshots: API.PaginatedOperationMethod<
  ListScopeSnapshotsInput,
  ListScopeSnapshotsOutput,
  ListScopeSnapshotsError,
  Credentials | HttpClient.HttpClient,
  ScopeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<ListScopeSnapshotsInput>,
  output: __S(127, __c15, 7) as any as S.Schema<ListScopeSnapshotsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScopeSnapshots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "snapshots",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags associated with the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(129, __c16, 1) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the templates in the account. You can filter the results by status and page through them using `maxResults` and `nextToken`.
 */
export const listTemplates: API.PaginatedOperationMethod<
  ListTemplatesInput,
  ListTemplatesOutput,
  ListTemplatesError,
  Credentials | HttpClient.HttpClient,
  TemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<ListTemplatesInput>,
  output: __S(133, __c16, 5) as any as S.Schema<ListTemplatesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "templates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTemplateSnapshotsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the snapshots of the specified template.
 */
export const listTemplateSnapshots: API.PaginatedOperationMethod<
  ListTemplateSnapshotsInput,
  ListTemplateSnapshotsOutput,
  ListTemplateSnapshotsError,
  Credentials | HttpClient.HttpClient,
  TemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<ListTemplateSnapshotsInput>,
  output: __S(135, __c16, 7) as any as S.Schema<ListTemplateSnapshotsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplateSnapshots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "snapshots",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutAdminAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets the AWS account that serves as an AWS Network Security Manager administrator account, and optionally configures the scope of resources that the administrator can manage.
 *
 * You can't set an administrator account again immediately after you remove it, or while the service creates its service-linked role. Retry the request after a few minutes.
 */
export const putAdminAccount: API.OperationMethod<
  PutAdminAccountRequest,
  PutAdminAccountResponse,
  PutAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<PutAdminAccountRequest>,
  output: __S(74, __c9, 2) as any as S.Schema<PutAdminAccountResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAdminAccount",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TagPolicyViolationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites the specified tags on the given resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140, __c17, 4) as any as S.Schema<TagResourceInput>,
  output: __S(56, __c7, 0) as any as S.Schema<TagResourceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TagPolicyViolationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | TagPolicyViolationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified tags from the given resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(141, __c17, 5) as any as S.Schema<UntagResourceInput>,
  output: __S(56, __c7, 0) as any as S.Schema<UntagResourceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    TagPolicyViolationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDeploymentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified deployment. To prevent conflicting concurrent updates, provide the current `updateToken`. Use `isPublished` to publish the update or keep the deployment as a draft.
 */
export const updateDeployment: API.OperationMethod<
  UpdateDeploymentInput,
  UpdateDeploymentOutput,
  UpdateDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<UpdateDeploymentInput>,
  output: __S(17, __c2, 1) as any as S.Schema<UpdateDeploymentOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeployment",
}));

export type UpdatePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified policy. To prevent conflicting concurrent updates, provide the current `updateToken`. Use `isPublished` to publish the update or keep the policy as a draft.
 */
export const updatePolicy: API.OperationMethod<
  UpdatePolicyInput,
  UpdatePolicyOutput,
  UpdatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<UpdatePolicyInput>,
  output: __S(27, __c3, 3) as any as S.Schema<UpdatePolicyOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePolicy",
}));

export type UpdateRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified rule. To prevent conflicting concurrent updates, provide the current `updateToken`. Use `isPublished` to publish the update or keep the rule as a draft.
 */
export const updateRule: API.OperationMethod<
  UpdateRuleInput,
  UpdateRuleOutput,
  UpdateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144, __c18, 0) as any as S.Schema<UpdateRuleInput>,
  output: __S(31, __c3, 7) as any as S.Schema<UpdateRuleOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRule",
}));

export type UpdateScopeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified scope. To prevent conflicting concurrent updates, provide the current `updateToken`. Use `isPublished` to publish the update or keep the scope as a draft.
 */
export const updateScope: API.OperationMethod<
  UpdateScopeInput,
  UpdateScopeOutput,
  UpdateScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<UpdateScopeInput>,
  output: __S(44, __c5, 4) as any as S.Schema<UpdateScopeOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScope",
}));

export type UpdateTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified template. To prevent conflicting concurrent updates, provide the current `updateToken`. Use `isPublished` to publish the update or keep the template as a draft.
 */
export const updateTemplate: API.OperationMethod<
  UpdateTemplateInput,
  UpdateTemplateOutput,
  UpdateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<UpdateTemplateInput>,
  output: __S(52, __c6, 4) as any as S.Schema<UpdateTemplateOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTemplate",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ enableCrossAccountVisibility: S.Boolean })).annotate({
        identifier: "DeploymentConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ policyIdentifier: S.String })).annotate({
        identifier: "PolicyReference",
      });
    case 2:
      return S.Array(__S(1, __c0, 1));
    case 3:
      return S.suspend(() => S.Struct({ scopeIdentifier: S.String })).annotate({
        identifier: "ScopeReference",
      });
    case 4:
      return S.Array(__S(3, __c0, 3));
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          deploymentName: S.String,
          deploymentDescription: S.optional(S.String),
          deploymentConfiguration: __S(0, __c0, 0),
          associatedPolicyList: __S(2, __c0, 2),
          associatedScopeList: __S(4, __c0, 4),
          isPublished: S.optional(S.Boolean),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/deployments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDeploymentInput" });
    case 7:
      return S.suspend(() => S.Struct({ policyArn: S.String })).annotate({
        identifier: "AssociatedPolicy",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() => S.Struct({ scopeArn: S.String })).annotate({
        identifier: "AssociatedScope",
      });
    case 2:
      return S.Array(__S(9, __c1, 1));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          firewallType: S.String,
          policyArns: __S(11, __c1, 3),
          inScopeResourceTypes: __S(12, __c1, 4),
        }),
      ).annotate({ identifier: "DeploymentCoverageEntry" });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ code: S.String, policyArn: S.String, message: S.String }),
      ).annotate({ identifier: "DeploymentWarningEntry" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.String,
          deploymentArn: S.String,
          deploymentName: S.String,
          deploymentDescription: S.optional(S.String),
          status: S.String,
          deploymentConfiguration: S.optional(__S(0, __c0, 0)),
          associatedPolicyList: __S(8, __c1, 0),
          associatedScopeList: __S(10, __c1, 2),
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          deploymentCoverage: S.optional(__S(14, __c1, 6)),
          warnings: S.optional(__S(16, __c2, 0)),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateDeploymentOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          deploymentIdentifier: S.String.pipe(T.HttpLabel("deploymentIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deployments/{deploymentIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDeploymentSnapshotInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.String,
          deploymentArn: S.String,
          deploymentName: S.String,
          deploymentDescription: S.optional(S.String),
          status: S.String,
          deploymentConfiguration: S.optional(__S(0, __c0, 0)),
          associatedPolicyList: __S(8, __c1, 0),
          associatedScopeList: __S(10, __c1, 2),
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateDeploymentSnapshotOutput",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ templateIdentifier: S.String }),
        /*@__PURE__*/ S.Struct({ ruleIdentifier: S.String }),
      ]);
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          existingCustomerWebACLResolution: S.String,
          conflictResolution: S.String,
        }),
      ).annotate({ identifier: "WafConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          remediationEnabled: S.Boolean,
          resourcesCleanUp: S.Boolean,
          wafConfig: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "PolicyConfiguration" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          policyName: S.String,
          policyDescription: S.optional(S.String),
          priority: S.Number,
          associatedTemplateAndRuleList: S.optional(__S(21, __c2, 5)),
          firewallType: S.String,
          policyConfiguration: __S(23, __c2, 7),
          isPublished: S.optional(S.Boolean),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/policies" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePolicyInput" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ templateArn: S.String }),
        /*@__PURE__*/ S.Struct({ ruleArn: S.String }),
      ]);
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyId: S.String,
          policyArn: S.String,
          policyName: S.String,
          policyDescription: S.optional(S.String),
          status: S.String,
          priority: S.Number,
          associatedTemplateAndRuleList: __S(26, __c3, 2),
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.String,
          policyConfiguration: S.optional(__S(23, __c2, 7)),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreatePolicyOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyIdentifier: S.String.pipe(T.HttpLabel("policyIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policies/{policyIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePolicySnapshotInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyId: S.String,
          policyArn: S.String,
          policyName: S.String,
          policyDescription: S.optional(S.String),
          status: S.String,
          priority: S.Number,
          associatedTemplateAndRuleList: __S(26, __c3, 2),
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.String,
          policyConfiguration: S.optional(__S(23, __c2, 7)),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreatePolicySnapshotOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ruleName: S.String,
          firewallType: S.String,
          ruleType: S.String,
          ruleDescription: S.optional(S.String),
          configuration: S.Any,
          isPublished: S.optional(S.Boolean),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/rules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          ruleArn: S.String,
          ruleName: S.String,
          firewallType: S.String,
          ruleType: S.optional(S.String),
          ruleDescription: S.optional(S.String),
          configuration: S.Any,
          status: S.String,
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateRuleOutput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/rules/{ruleIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRuleSnapshotInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__S(11, __c1, 3)),
          organizationalUnits: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "AccountSet" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ includeAll: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ include: __S(33, __c4, 1) }),
        /*@__PURE__*/ S.Struct({ exclude: __S(33, __c4, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ scheme: S.optional(S.String), ipAddressType: S.optional(S.String) }),
      ).annotate({ identifier: "AlbConfiguration" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tags: __S(5, __c0, 5) }),
        /*@__PURE__*/ S.Struct({ albConfig: __S(35, __c4, 3) }),
      ]);
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => __S(38, __c4, 6)).annotate({
          identifier: "ResourceLogicalExpression",
        }),
      );
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ criteria: __S(36, __c4, 4) }),
        /*@__PURE__*/ S.Struct({
          and: /*@__PURE__*/ S.suspend(() => __S(37, __c4, 5)).annotate({
            identifier: "ResourceLogicalExpressionList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          or: /*@__PURE__*/ S.suspend(() => __S(37, __c4, 5)).annotate({
            identifier: "ResourceLogicalExpressionList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          not: /*@__PURE__*/ S.suspend(() => __S(38, __c4, 6)).annotate({
            identifier: "ResourceLogicalExpression",
          }),
        }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          explicitArns: S.optional(__S(11, __c1, 3)),
          expression: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "ResourceSet" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          includeAll: S.optional(S.Boolean),
          include: S.optional(__S(39, __c4, 7)),
          exclude: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({ identifier: "ResourceScope" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(40, __c5, 0).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({ accountFilter: S.optional(__S(34, __c4, 2)), resourceScopes: __S(41, __c5, 1) }),
      ).annotate({ identifier: "ScopeConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          scopeName: S.String,
          scopeDescription: S.optional(S.String),
          scopeConfiguration: __S(42, __c5, 2),
          isPublished: S.optional(S.Boolean),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/scopes" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateScopeInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          scopeId: S.String,
          scopeArn: S.String,
          scopeName: S.String,
          scopeDescription: S.optional(S.String),
          scopeConfiguration: S.optional(__S(42, __c5, 2)),
          status: S.String,
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateScopeOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scopeIdentifier: S.String.pipe(T.HttpLabel("scopeIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/scopes/{scopeIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateScopeSnapshotInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          scopeId: S.String,
          scopeArn: S.String,
          scopeName: S.String,
          scopeDescription: S.optional(S.String),
          scopeConfiguration: S.optional(__S(42, __c5, 2)),
          status: S.String,
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateScopeSnapshotOutput",
      });
    case 7:
      return S.suspend(() => S.Struct({ ruleIdentifier: S.String })).annotate({
        identifier: "RuleReference",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          templateName: S.String,
          templateDescription: S.optional(S.String),
          associatedRuleList: __S(48, __c6, 0),
          firewallType: S.String,
          isPublished: S.optional(S.Boolean),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/templates" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTemplateInput" });
    case 2:
      return S.suspend(() => S.Struct({ ruleArn: S.String })).annotate({
        identifier: "AssociatedRule",
      });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          templateId: S.String,
          templateArn: S.String,
          templateName: S.String,
          templateDescription: S.optional(S.String),
          status: S.String,
          version: S.String,
          associatedRuleList: __S(51, __c6, 3),
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateTemplateOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          templateIdentifier: S.String.pipe(T.HttpLabel("templateIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/templates/{templateIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTemplateSnapshotInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          templateId: S.String,
          templateArn: S.String,
          templateName: S.String,
          templateDescription: S.optional(S.String),
          status: S.String,
          version: S.String,
          associatedRuleList: __S(51, __c6, 3),
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateTemplateSnapshotOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ accountId: S.String.pipe(T.HttpLabel("accountId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/admin-account/{accountId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAdminAccountRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAdminAccountResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ deploymentIdentifier: S.String.pipe(T.HttpLabel("deploymentIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/deployments/{deploymentIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDeploymentInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ policyIdentifier: S.String.pipe(T.HttpLabel("policyIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/policies/{policyIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePolicyInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/rules/{ruleIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRuleInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ scopeIdentifier: S.String.pipe(T.HttpLabel("scopeIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/scopes/{scopeIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteScopeInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ templateIdentifier: S.String.pipe(T.HttpLabel("templateIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/templates/{templateIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTemplateInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          prompt: SensitiveString,
          ruleFirewallType: S.String,
          ruleType: S.String,
          wafConfigDataType: S.optional(S.String),
          currentConfiguration: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GenerateRuleConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GenerateRuleConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ configuration: S.String, description: S.optional(S.String) }),
      ).annotate({
        identifier: "GenerateRuleConfigurationResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accountId: S.String.pipe(T.HttpLabel("accountId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/admin-account/{accountId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAdminAccountRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          name: S.optional(SensitiveString),
          email: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AccountReference" });
    case 2:
      return S.Array(__S(65, __c8, 1));
    case 3:
      return S.suspend(() => S.Struct({ ouId: S.String, name: S.optional(S.String) })).annotate({
        identifier: "OrganizationalUnitReference",
      });
    case 4:
      return S.Array(__S(67, __c8, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          accounts: S.optional(__S(66, __c8, 2)),
          organizationalUnits: S.optional(__S(68, __c8, 4)),
        }),
      ).annotate({ identifier: "AdminScopeSelection" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ includeAll: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ includeOnly: __S(69, __c8, 5) }),
        /*@__PURE__*/ S.Struct({ excludeOnly: __S(69, __c8, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          allFirewallTypesEnabled: S.optional(S.Boolean),
          firewallTypes: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({ identifier: "AdminFirewallTypeScope" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scopeFilter: S.optional(__S(70, __c8, 6)),
          firewallTypeScope: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({ identifier: "AdminScope" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          adminAccount: S.String,
          priority: S.Number,
          adminScope: S.optional(__S(72, __c9, 0)),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "AdminAccountDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({ adminAccountDetails: S.optional(__S(73, __c9, 1)) }),
      ).annotate({ identifier: "GetAdminAccountResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ deploymentIdentifier: S.String.pipe(T.HttpLabel("deploymentIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/deployments/{deploymentIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDeploymentInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.String,
          deploymentArn: S.String,
          deploymentName: S.String,
          deploymentDescription: S.optional(S.String),
          status: S.String,
          deploymentConfiguration: S.optional(__S(0, __c0, 0)),
          associatedPolicyList: __S(8, __c1, 0),
          associatedScopeList: __S(10, __c1, 2),
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          deploymentCoverage: S.optional(__S(14, __c1, 6)),
          warnings: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "GetDeploymentOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ policyIdentifier: S.String.pipe(T.HttpLabel("policyIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policies/{policyIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/rules/{ruleIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRuleInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ scopeIdentifier: S.String.pipe(T.HttpLabel("scopeIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/scopes/{scopeIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetScopeInput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ templateIdentifier: S.String.pipe(T.HttpLabel("templateIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/{templateIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTemplateInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/admin-accounts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAdminAccountsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          priority: S.optional(S.Number),
          name: S.optional(SensitiveString),
          email: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AdminAccountSummary" });
    case 3:
      return S.Array(__S(82, __c10, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), adminAccounts: __S(83, __c10, 3) }),
      ).annotate({
        identifier: "ListAdminAccountsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          synchronizationStatus: S.optional(S.String).pipe(T.HttpQuery("synchronizationStatus")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/aggregate-sync-statuses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAggregateResourceSynchronizationStatusesInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          configurationName: S.optional(S.String),
          expectedValue: S.optional(S.String),
          actualValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigurationIssue" });
    case 7:
      return S.Array(__S(86, __c10, 6));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          incorrectSingleValueConfigurations: S.optional(__S(87, __c10, 7)),
          missingAppendableConfigurationValues: S.optional(__S(87, __c10, 7)),
          unexpectedAppendableConfigurationValues: S.optional(__S(87, __c10, 7)),
          incorrectAppendableConfigurationOrder: S.optional(__S(87, __c10, 7)),
          missingMergeableConfigurationValues: S.optional(__S(87, __c10, 7)),
          unexpectedMergeableConfigurationValues: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({ identifier: "InvalidFirewallReasons" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ missingFirewall: S.String }),
        /*@__PURE__*/ S.Struct({ invalidFirewall: __S(88, __c11, 0) }),
      ]);
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(89, __c11, 1).pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ reason: S.String })).annotate({
        identifier: "NotVisibleMarker",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ reasons: __S(90, __c11, 2) }),
        /*@__PURE__*/ S.Struct({ notVisible: __S(91, __c11, 3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          issueType: S.optional(S.String),
          message: S.optional(S.String),
          correctiveAction: S.optional(S.String),
        }),
      ).annotate({ identifier: "RemediationIssueDetails" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(93, __c11, 5).pipe(S.optional));
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ issues: __S(94, __c11, 6) }),
        /*@__PURE__*/ S.Struct({ notVisible: __S(91, __c11, 3) }),
      ]);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          synchronizationStatus: S.String,
          accountId: S.String,
          resourceArn: S.String,
          deploymentArn: S.optional(S.String),
          resourceType: S.optional(S.String),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          outOfSyncReasons: S.optional(__S(92, __c11, 4)),
          remediationIssues: S.optional(__S(95, __c11, 7)),
          evaluatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ResourceSynchronizationStatusSummary",
      });
    case 1:
      return S.Array(__S(96, __c12, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          resourceSynchronizationStatuses: __S(97, __c12, 1),
        }),
      ).annotate({
        identifier: "ListAggregateResourceSynchronizationStatusesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/deployments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDeploymentsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.String,
          deploymentArn: S.String,
          deploymentName: S.optional(S.String),
          status: S.optional(S.String),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DeploymentSummary" });
    case 5:
      return S.Array(__S(100, __c12, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), deployments: __S(101, __c12, 5) }),
      ).annotate({ identifier: "ListDeploymentsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          deploymentIdentifier: S.String.pipe(T.HttpLabel("deploymentIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/deployments/{deploymentIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDeploymentSnapshotsInput",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), snapshots: __S(101, __c12, 5) }),
      ).annotate({
        identifier: "ListDeploymentSnapshotsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/policies" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPoliciesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyId: S.String,
          policyArn: S.String,
          policyName: S.optional(S.String),
          status: S.optional(S.String),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.optional(S.String),
          priority: S.optional(S.Number),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PolicySummary" });
    case 3:
      return S.Array(__S(106, __c13, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), policies: __S(107, __c13, 3) }),
      ).annotate({ identifier: "ListPoliciesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyIdentifier: S.String.pipe(T.HttpLabel("policyIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policies/{policyIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPolicySnapshotsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), snapshots: __S(107, __c13, 3) }),
      ).annotate({
        identifier: "ListPolicySnapshotsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceIdentifier: S.String.pipe(T.HttpQuery("resourceIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resource-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceAssociationsInput",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ arn: S.String, resourceType: S.String })).annotate({
        identifier: "ResourceAssociation",
      });
    case 1:
      return S.Array(__S(112, __c14, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          resourceAssociations: __S(113, __c14, 1),
        }),
      ).annotate({
        identifier: "ListResourceAssociationsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          deploymentIdentifier: S.String.pipe(T.HttpQuery("deploymentIdentifier")),
          synchronizationStatus: S.optional(S.String).pipe(T.HttpQuery("synchronizationStatus")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resource-sync-statuses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceSynchronizationStatusesInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/rules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRulesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          ruleArn: S.String,
          ruleName: S.String,
          firewallType: S.optional(S.String),
          ruleType: S.optional(S.String),
          status: S.optional(S.String),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RuleSummary" });
    case 6:
      return S.Array(__S(117, __c14, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), rules: __S(118, __c14, 6) }),
      ).annotate({ identifier: "ListRulesOutput" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/rules/{ruleIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRuleSnapshotsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), snapshots: __S(118, __c14, 6) }),
      ).annotate({ identifier: "ListRuleSnapshotsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/scopes" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListScopesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          scopeId: S.String,
          scopeArn: S.String,
          scopeName: S.optional(S.String),
          status: S.optional(S.String),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ScopeSummary" });
    case 4:
      return S.Array(__S(123, __c15, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), scopes: __S(124, __c15, 4) }),
      ).annotate({ identifier: "ListScopesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          scopeIdentifier: S.String.pipe(T.HttpLabel("scopeIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/scopes/{scopeIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListScopeSnapshotsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), snapshots: __S(124, __c15, 4) }),
      ).annotate({ identifier: "ListScopeSnapshotsOutput" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 1:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(5, __c0, 5)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/templates" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTemplatesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          templateId: S.String,
          templateArn: S.String,
          templateName: S.String,
          status: S.optional(S.String),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "TemplateSummary" });
    case 4:
      return S.Array(__S(131, __c16, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), templates: __S(132, __c16, 4) }),
      ).annotate({ identifier: "ListTemplatesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          templateIdentifier: S.String.pipe(T.HttpLabel("templateIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/{templateIdentifier}/snapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTemplateSnapshotsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), snapshots: __S(132, __c16, 4) }),
      ).annotate({
        identifier: "ListTemplateSnapshotsOutput",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accounts: S.optional(__S(11, __c1, 3)),
          organizationalUnits: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "AdminScopeSelectionInput" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ includeAll: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ includeOnly: __S(136, __c17, 0) }),
        /*@__PURE__*/ S.Struct({ excludeOnly: __S(136, __c17, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          scopeFilter: S.optional(__S(137, __c17, 1)),
          firewallTypeScope: S.optional(__S(71, __c8, 7)),
        }),
      ).annotate({ identifier: "AdminScopeInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          priority: S.Number,
          adminScope: S.optional(__S(138, __c17, 2)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/admin-account" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAdminAccountRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(5, __c0, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(11, __c1, 3).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          deploymentIdentifier: S.String.pipe(T.HttpLabel("deploymentIdentifier")),
          updateToken: S.String,
          deploymentDescription: S.optional(S.String),
          deploymentConfiguration: S.optional(__S(0, __c0, 0)),
          associatedPolicyList: S.optional(__S(2, __c0, 2)),
          associatedScopeList: S.optional(__S(4, __c0, 4)),
          isPublished: S.Boolean,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/deployments/{deploymentIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDeploymentInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyIdentifier: S.String.pipe(T.HttpLabel("policyIdentifier")),
          updateToken: S.String,
          policyDescription: S.optional(S.String),
          priority: S.optional(S.Number),
          associatedTemplateAndRuleList: S.optional(__S(21, __c2, 5)),
          policyConfiguration: S.optional(__S(23, __c2, 7)),
          isPublished: S.Boolean,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/policies/{policyIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePolicyInput" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ruleIdentifier: S.String.pipe(T.HttpLabel("ruleIdentifier")),
          updateToken: S.String,
          ruleType: S.optional(S.String),
          ruleDescription: S.optional(S.String),
          configuration: S.optional(S.Any),
          isPublished: S.Boolean,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/rules/{ruleIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRuleInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scopeIdentifier: S.String.pipe(T.HttpLabel("scopeIdentifier")),
          updateToken: S.String,
          scopeDescription: S.optional(S.String),
          scopeConfiguration: S.optional(__S(42, __c5, 2)),
          isPublished: S.Boolean,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/scopes/{scopeIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateScopeInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          templateIdentifier: S.String.pipe(T.HttpLabel("templateIdentifier")),
          updateToken: S.String,
          templateDescription: S.optional(S.String),
          associatedRuleList: S.optional(__S(48, __c6, 0)),
          isPublished: S.Boolean,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/templates/{templateIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTemplateInput" });
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 4:
      return S.Array(__S(147, __c18, 3));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
