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
        /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
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
const DeploymentConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<DeploymentConfiguration>;
export type PolicyIdentifier = string;
export interface PolicyReference {
  policyIdentifier: string;
}
const PolicyReference = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<PolicyReference>;
export type PolicyReferenceList = PolicyReference[];
const PolicyReferenceList = /*@__PURE__*/ __L.at(__c0, 2);
export type ScopeIdentifier = string;
export interface ScopeReference {
  scopeIdentifier: string;
}
const ScopeReference = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<ScopeReference>;
export type ScopeReferenceList = ScopeReference[];
const ScopeReferenceList = /*@__PURE__*/ __L.at(__c0, 4);
export type IsPublished = boolean;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 5);
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
const CreateDeploymentInput = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateDeploymentInput>;
export type DeploymentId = string;
export type DeploymentArn = string;
export type EntityStatus = "DRAFT" | "ACTIVE" | "DISABLED" | (string & {});
const EntityStatus = S.String;

export type PolicyArn = string;
export interface AssociatedPolicy {
  policyArn: string;
}
const AssociatedPolicy = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<AssociatedPolicy>;
export type AssociatedPolicyList = AssociatedPolicy[];
const AssociatedPolicyList = /*@__PURE__*/ __L.at(__c1, 0);
export type ScopeArn = string;
export interface AssociatedScope {
  scopeArn: string;
}
const AssociatedScope = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<AssociatedScope>;
export type AssociatedScopeList = AssociatedScope[];
const AssociatedScopeList = /*@__PURE__*/ __L.at(__c1, 2);
export type EntityVersion = string;
export type UpdateToken = string;
export type IsSnapshot = boolean;
export type HasPublishedVersion = boolean;
export type PolicyFirewallType = "WAF" | "SHIELD_ADVANCED" | (string & {});
const PolicyFirewallType = S.String;

export type DeploymentPolicyArnList = string[];
const DeploymentPolicyArnList = /*@__PURE__*/ __L.at(__c1, 3);
export type ScopeResourceType =
  | "AWS::ApiGateway::Stage"
  | "AWS::CloudFront::Distribution"
  | "AWS::EC2::EIP"
  | "AWS::ElasticLoadBalancingV2::LoadBalancer::application"
  | "AWS::ElasticLoadBalancing::LoadBalancer"
  | (string & {});
const ScopeResourceType = S.String;

export type DeploymentResourceTypeList = ScopeResourceType[];
const DeploymentResourceTypeList = /*@__PURE__*/ __L.at(__c1, 4);
export interface DeploymentCoverageEntry {
  firewallType: PolicyFirewallType;
  policyArns: string[];
  inScopeResourceTypes: ScopeResourceType[];
}
const DeploymentCoverageEntry = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<DeploymentCoverageEntry>;
export type DeploymentCoverageList = DeploymentCoverageEntry[];
const DeploymentCoverageList = /*@__PURE__*/ __L.at(__c1, 6);
export interface DeploymentWarningEntry {
  code: string;
  policyArn: string;
  message: string;
}
const DeploymentWarningEntry = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DeploymentWarningEntry>;
export type DeploymentWarningList = DeploymentWarningEntry[];
const DeploymentWarningList = /*@__PURE__*/ __L.at(__c2, 0);
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
const CreateDeploymentOutput = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateDeploymentOutput>;
export type DeploymentIdentifier = string;
export interface CreateDeploymentSnapshotInput {
  deploymentIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateDeploymentSnapshotInput = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateDeploymentSnapshotInput>;
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
const CreateDeploymentSnapshotOutput = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateDeploymentSnapshotOutput>;
export type PolicyName = string;
export type Priority = number;
export type TemplateIdentifier = string;
export type RuleIdentifier = string;
export type TemplateOrRuleReference =
  | { templateIdentifier: string; ruleIdentifier?: never }
  | { templateIdentifier?: never; ruleIdentifier: string };
const TemplateOrRuleReference = /*@__PURE__*/ __L.at(__c2, 4);
export type TemplateAndRuleReferenceList = TemplateOrRuleReference[];
const TemplateAndRuleReferenceList = /*@__PURE__*/ __L.at(__c2, 5);
export type RemediationEnabled = boolean;
export type ResourcesCleanUp = boolean;
export type ExistingCustomerWebACLResolution =
  | "RETROFIT"
  | "OVERRIDE_ASSOCIATION"
  | "NO_REMEDIATION"
  | (string & {});
const ExistingCustomerWebACLResolution = S.String;

export type WAFConflictResolutionOptions = "MERGE_WHERE_APPLICABLE" | (string & {});
const WAFConflictResolutionOptions = S.String;

export interface WafConfig {
  existingCustomerWebACLResolution: ExistingCustomerWebACLResolution;
  conflictResolution: WAFConflictResolutionOptions;
}
const WafConfig = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<WafConfig>;
export interface PolicyConfiguration {
  remediationEnabled: boolean;
  resourcesCleanUp: boolean;
  wafConfig?: WafConfig;
}
const PolicyConfiguration = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<PolicyConfiguration>;
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
const CreatePolicyInput = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<CreatePolicyInput>;
export type PolicyId = string;
export type TemplateArn = string;
export type RuleArn = string;
export type AssociatedTemplateOrRule =
  | { templateArn: string; ruleArn?: never }
  | { templateArn?: never; ruleArn: string };
const AssociatedTemplateOrRule = /*@__PURE__*/ __L.at(__c3, 1);
export type AssociatedTemplateAndRuleList = AssociatedTemplateOrRule[];
const AssociatedTemplateAndRuleList = /*@__PURE__*/ __L.at(__c3, 2);
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
const CreatePolicyOutput = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<CreatePolicyOutput>;
export interface CreatePolicySnapshotInput {
  policyIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreatePolicySnapshotInput = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreatePolicySnapshotInput>;
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
const CreatePolicySnapshotOutput = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreatePolicySnapshotOutput>;
export type RuleName = string;
export type RuleFirewallType = "WAF" | (string & {});
const RuleFirewallType = S.String;

export type RuleType = "CONFIGURATION" | "INSPECTION" | (string & {});
const RuleType = S.String;

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
const CreateRuleInput = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<CreateRuleInput>;
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
const CreateRuleOutput = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<CreateRuleOutput>;
export interface CreateRuleSnapshotInput {
  ruleIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateRuleSnapshotInput = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateRuleSnapshotInput>;
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
const CreateRuleSnapshotOutput = CreateRuleOutput as any as S.Schema<CreateRuleSnapshotOutput>;
export type ScopeName = string;
export type AccountId = string;
export type AccountList = string[];
const AccountList = DeploymentPolicyArnList as any as S.Schema<AccountList>;
export type OrganizationalUnit = string;
export type OrganizationalUnitList = string[];
const OrganizationalUnitList = DeploymentPolicyArnList as any as S.Schema<OrganizationalUnitList>;
export interface AccountSet {
  accountIds?: string[];
  organizationalUnits?: string[];
}
const AccountSet = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<AccountSet>;
export type AccountFilter =
  | { includeAll: Record<string, never>; include?: never; exclude?: never }
  | { includeAll?: never; include: AccountSet; exclude?: never }
  | { includeAll?: never; include?: never; exclude: AccountSet };
const AccountFilter = /*@__PURE__*/ __L.at(__c4, 2);
export type Arn = string;
export type ResourceArnList = string[];
const ResourceArnList = DeploymentPolicyArnList as any as S.Schema<ResourceArnList>;
export type StringMap = { [key: string]: string | undefined };
const StringMap = TagMap as any as S.Schema<StringMap>;
export type Scheme = "internet-facing" | "internal" | (string & {});
const Scheme = S.String;

export type IpAddressType = "ipv4" | "dualstack" | "dualstack-without-public-ipv4" | (string & {});
const IpAddressType = S.String;

export interface AlbConfiguration {
  scheme?: Scheme;
  ipAddressType?: IpAddressType;
}
const AlbConfiguration = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<AlbConfiguration>;
export type ResourceCriteria =
  | { tags: { [key: string]: string | undefined }; albConfig?: never }
  | { tags?: never; albConfig: AlbConfiguration };
const ResourceCriteria = /*@__PURE__*/ __L.at(__c4, 4);
export type ResourceLogicalExpressionList = ResourceLogicalExpression[];
const ResourceLogicalExpressionList = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ResourceLogicalExpressionList>;
export type ResourceLogicalExpression =
  | { criteria: ResourceCriteria; and?: never; or?: never; not?: never }
  | { criteria?: never; and: ResourceLogicalExpression[]; or?: never; not?: never }
  | { criteria?: never; and?: never; or: ResourceLogicalExpression[]; not?: never }
  | { criteria?: never; and?: never; or?: never; not: ResourceLogicalExpression };
const ResourceLogicalExpression = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<ResourceLogicalExpression>;
export interface ResourceSet {
  explicitArns?: string[];
  expression?: ResourceLogicalExpression;
}
const ResourceSet = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<ResourceSet>;
export interface ResourceScope {
  includeAll?: boolean;
  include?: ResourceSet;
  exclude?: ResourceSet;
}
const ResourceScope = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ResourceScope>;
export type ResourceScopeMap = { [key in ScopeResourceType]?: ResourceScope };
const ResourceScopeMap = /*@__PURE__*/ __L.at(__c5, 1);
export interface ScopeConfiguration {
  accountFilter?: AccountFilter;
  resourceScopes: { [key: string]: ResourceScope | undefined };
}
const ScopeConfiguration = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<ScopeConfiguration>;
export interface CreateScopeInput {
  clientToken?: string;
  scopeName: string;
  scopeDescription?: string;
  scopeConfiguration: ScopeConfiguration;
  isPublished?: boolean;
  tags?: { [key: string]: string | undefined };
}
const CreateScopeInput = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<CreateScopeInput>;
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
const CreateScopeOutput = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<CreateScopeOutput>;
export interface CreateScopeSnapshotInput {
  scopeIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateScopeSnapshotInput = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CreateScopeSnapshotInput>;
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
const CreateScopeSnapshotOutput = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateScopeSnapshotOutput>;
export type TemplateName = string;
export interface RuleReference {
  ruleIdentifier: string;
}
const RuleReference = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<RuleReference>;
export type RuleReferenceList = RuleReference[];
const RuleReferenceList = /*@__PURE__*/ __L.at(__c6, 0);
export type TemplateFirewallType = "WAF" | (string & {});
const TemplateFirewallType = S.String;

export interface CreateTemplateInput {
  clientToken?: string;
  templateName: string;
  templateDescription?: string;
  associatedRuleList: RuleReference[];
  firewallType: TemplateFirewallType;
  isPublished?: boolean;
  tags?: { [key: string]: string | undefined };
}
const CreateTemplateInput = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<CreateTemplateInput>;
export type TemplateId = string;
export interface AssociatedRule {
  ruleArn: string;
}
const AssociatedRule = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<AssociatedRule>;
export type AssociatedRuleList = AssociatedRule[];
const AssociatedRuleList = /*@__PURE__*/ __L.at(__c6, 3);
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
const CreateTemplateOutput = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<CreateTemplateOutput>;
export interface CreateTemplateSnapshotInput {
  templateIdentifier: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateTemplateSnapshotInput = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateTemplateSnapshotInput>;
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
const CreateTemplateSnapshotOutput = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateTemplateSnapshotOutput>;
export interface DeleteAdminAccountRequest {
  accountId: string;
}
const DeleteAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteAdminAccountRequest>;
export interface DeleteAdminAccountResponse {}
const DeleteAdminAccountResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteAdminAccountResponse>;
export interface DeleteDeploymentInput {
  deploymentIdentifier: string;
}
const DeleteDeploymentInput = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteDeploymentInput>;
export interface DeleteDeploymentResponse {}
const DeleteDeploymentResponse =
  DeleteAdminAccountResponse as any as S.Schema<DeleteDeploymentResponse>;
export interface DeletePolicyInput {
  policyIdentifier: string;
}
const DeletePolicyInput = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<DeletePolicyInput>;
export interface DeletePolicyResponse {}
const DeletePolicyResponse = DeleteAdminAccountResponse as any as S.Schema<DeletePolicyResponse>;
export interface DeleteRuleInput {
  ruleIdentifier: string;
}
const DeleteRuleInput = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<DeleteRuleInput>;
export interface DeleteRuleResponse {}
const DeleteRuleResponse = DeleteAdminAccountResponse as any as S.Schema<DeleteRuleResponse>;
export interface DeleteScopeInput {
  scopeIdentifier: string;
}
const DeleteScopeInput = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<DeleteScopeInput>;
export interface DeleteScopeResponse {}
const DeleteScopeResponse = DeleteAdminAccountResponse as any as S.Schema<DeleteScopeResponse>;
export interface DeleteTemplateInput {
  templateIdentifier: string;
}
const DeleteTemplateInput = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<DeleteTemplateInput>;
export interface DeleteTemplateResponse {}
const DeleteTemplateResponse =
  DeleteAdminAccountResponse as any as S.Schema<DeleteTemplateResponse>;
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
const WAFConfigDataType = S.String;

export interface GenerateRuleConfigurationRequest {
  prompt: string | redacted.Redacted<string>;
  ruleFirewallType: RuleFirewallType;
  ruleType: RuleType;
  wafConfigDataType?: WAFConfigDataType;
  currentConfiguration?: string;
  clientToken?: string;
}
const GenerateRuleConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<GenerateRuleConfigurationRequest>;
export interface GenerateRuleConfigurationResponse {
  configuration: string;
  description?: string;
}
const GenerateRuleConfigurationResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<GenerateRuleConfigurationResponse>;
export interface GetAdminAccountRequest {
  accountId: string;
}
const GetAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<GetAdminAccountRequest>;
export type AdminPriority = number;
export type SensitiveAccountName = string | redacted.Redacted<string>;
export type SensitiveAccountEmail = string | redacted.Redacted<string>;
export interface AccountReference {
  accountId: string;
  name?: string | redacted.Redacted<string>;
  email?: string | redacted.Redacted<string>;
}
const AccountReference = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<AccountReference>;
export type AccountReferenceList = AccountReference[];
const AccountReferenceList = /*@__PURE__*/ __L.at(__c8, 2);
export type OrganizationalUnitId = string;
export interface OrganizationalUnitReference {
  ouId: string;
  name?: string;
}
const OrganizationalUnitReference = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<OrganizationalUnitReference>;
export type OrganizationalUnitReferenceList = OrganizationalUnitReference[];
const OrganizationalUnitReferenceList = /*@__PURE__*/ __L.at(__c8, 4);
export interface AdminScopeSelection {
  accounts?: AccountReference[];
  organizationalUnits?: OrganizationalUnitReference[];
}
const AdminScopeSelection = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<AdminScopeSelection>;
export type AdminScopeFilter =
  | { includeAll: Record<string, never>; includeOnly?: never; excludeOnly?: never }
  | { includeAll?: never; includeOnly: AdminScopeSelection; excludeOnly?: never }
  | { includeAll?: never; includeOnly?: never; excludeOnly: AdminScopeSelection };
const AdminScopeFilter = /*@__PURE__*/ __L.at(__c8, 6);
export type FirewallTypeList = PolicyFirewallType[];
const FirewallTypeList = DeploymentResourceTypeList as any as S.Schema<FirewallTypeList>;
export interface AdminFirewallTypeScope {
  allFirewallTypesEnabled?: boolean;
  firewallTypes?: PolicyFirewallType[];
}
const AdminFirewallTypeScope = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<AdminFirewallTypeScope>;
export interface AdminScope {
  scopeFilter?: AdminScopeFilter;
  firewallTypeScope?: AdminFirewallTypeScope;
}
const AdminScope = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<AdminScope>;
export type AdminAccountStatus = "ONBOARDED" | "OFFBOARDED" | (string & {});
const AdminAccountStatus = S.String;

export interface AdminAccountDetails {
  adminAccount: string;
  priority: number;
  adminScope?: AdminScope;
  status?: AdminAccountStatus;
}
const AdminAccountDetails = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<AdminAccountDetails>;
export interface GetAdminAccountResponse {
  adminAccountDetails?: AdminAccountDetails;
}
const GetAdminAccountResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<GetAdminAccountResponse>;
export interface GetDeploymentInput {
  deploymentIdentifier: string;
}
const GetDeploymentInput = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<GetDeploymentInput>;
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
const GetDeploymentOutput = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<GetDeploymentOutput>;
export interface GetPolicyInput {
  policyIdentifier: string;
}
const GetPolicyInput = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<GetPolicyInput>;
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
const GetPolicyOutput = CreatePolicyOutput as any as S.Schema<GetPolicyOutput>;
export interface GetRuleInput {
  ruleIdentifier: string;
}
const GetRuleInput = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<GetRuleInput>;
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
const GetRuleOutput = CreateRuleOutput as any as S.Schema<GetRuleOutput>;
export interface GetScopeInput {
  scopeIdentifier: string;
}
const GetScopeInput = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<GetScopeInput>;
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
const GetScopeOutput = CreateScopeOutput as any as S.Schema<GetScopeOutput>;
export interface GetTemplateInput {
  templateIdentifier: string;
}
const GetTemplateInput = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<GetTemplateInput>;
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
const GetTemplateOutput = CreateTemplateOutput as any as S.Schema<GetTemplateOutput>;
export type MaxResults = number;
export type NextToken = string;
export interface ListAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListAdminAccountsRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ListAdminAccountsRequest>;
export type SensitiveName = string | redacted.Redacted<string>;
export type SensitiveEmail = string | redacted.Redacted<string>;
export interface AdminAccountSummary {
  accountId: string;
  priority?: number;
  name?: string | redacted.Redacted<string>;
  email?: string | redacted.Redacted<string>;
}
const AdminAccountSummary = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<AdminAccountSummary>;
export type AdminAccountSummaryList = AdminAccountSummary[];
const AdminAccountSummaryList = /*@__PURE__*/ __L.at(__c10, 3);
export interface ListAdminAccountsResponse {
  nextToken?: string;
  adminAccounts: AdminAccountSummary[];
}
const ListAdminAccountsResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<ListAdminAccountsResponse>;
export type SynchronizationStatus = "IN_SYNC" | "OUT_OF_SYNC" | "NOT_APPLICABLE" | (string & {});
const SynchronizationStatus = S.String;

export interface ListAggregateResourceSynchronizationStatusesInput {
  synchronizationStatus?: SynchronizationStatus;
  maxResults?: number;
  nextToken?: string;
}
const ListAggregateResourceSynchronizationStatusesInput = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<ListAggregateResourceSynchronizationStatusesInput>;
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
const ResourceType = S.String;

export interface ConfigurationIssue {
  configurationName?: string;
  expectedValue?: string;
  actualValue?: string;
}
const ConfigurationIssue = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<ConfigurationIssue>;
export type ConfigurationIssueList = ConfigurationIssue[];
const ConfigurationIssueList = /*@__PURE__*/ __L.at(__c10, 7);
export interface InvalidFirewallReasons {
  incorrectSingleValueConfigurations?: ConfigurationIssue[];
  missingAppendableConfigurationValues?: ConfigurationIssue[];
  unexpectedAppendableConfigurationValues?: ConfigurationIssue[];
  incorrectAppendableConfigurationOrder?: ConfigurationIssue[];
  missingMergeableConfigurationValues?: ConfigurationIssue[];
  unexpectedMergeableConfigurationValues?: ConfigurationIssue[];
}
const InvalidFirewallReasons = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<InvalidFirewallReasons>;
export type FirewallSyncReason =
  | { missingFirewall: string; invalidFirewall?: never }
  | { missingFirewall?: never; invalidFirewall: InvalidFirewallReasons };
const FirewallSyncReason = /*@__PURE__*/ __L.at(__c11, 1);
export type OutOfSyncReasons = { [key in PolicyFirewallType]?: FirewallSyncReason };
const OutOfSyncReasons = /*@__PURE__*/ __L.at(__c11, 2);
export interface NotVisibleMarker {
  reason: string;
}
const NotVisibleMarker = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<NotVisibleMarker>;
export type OutOfSyncReasonsView =
  | { reasons: { [key: string]: FirewallSyncReason | undefined }; notVisible?: never }
  | { reasons?: never; notVisible: NotVisibleMarker };
const OutOfSyncReasonsView = /*@__PURE__*/ __L.at(__c11, 4);
export interface RemediationIssueDetails {
  issueType?: string;
  message?: string;
  correctiveAction?: string;
}
const RemediationIssueDetails = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<RemediationIssueDetails>;
export type RemediationIssues = { [key in PolicyFirewallType]?: RemediationIssueDetails };
const RemediationIssues = /*@__PURE__*/ __L.at(__c11, 6);
export type RemediationIssuesView =
  | { issues: { [key: string]: RemediationIssueDetails | undefined }; notVisible?: never }
  | { issues?: never; notVisible: NotVisibleMarker };
const RemediationIssuesView = /*@__PURE__*/ __L.at(__c11, 7);
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
const ResourceSynchronizationStatusSummary = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ResourceSynchronizationStatusSummary>;
export type ResourceSynchronizationStatusSummaryList = ResourceSynchronizationStatusSummary[];
const ResourceSynchronizationStatusSummaryList = /*@__PURE__*/ __L.at(__c12, 1);
export interface ListAggregateResourceSynchronizationStatusesOutput {
  nextToken?: string;
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[];
}
const ListAggregateResourceSynchronizationStatusesOutput = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ListAggregateResourceSynchronizationStatusesOutput>;
export type EntityStatusFilter = "ACTIVE" | "DRAFT" | "DISABLED" | (string & {});
const EntityStatusFilter = S.String;

export interface ListDeploymentsInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
const ListDeploymentsInput = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<ListDeploymentsInput>;
export interface DeploymentSummary {
  deploymentId: string;
  deploymentArn: string;
  deploymentName?: string;
  status?: EntityStatus;
  version?: string;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
const DeploymentSummary = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<DeploymentSummary>;
export type DeploymentSummaryList = DeploymentSummary[];
const DeploymentSummaryList = /*@__PURE__*/ __L.at(__c12, 5);
export interface ListDeploymentsOutput {
  nextToken?: string;
  deployments: DeploymentSummary[];
}
const ListDeploymentsOutput = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<ListDeploymentsOutput>;
export interface ListDeploymentSnapshotsInput {
  deploymentIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListDeploymentSnapshotsInput = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<ListDeploymentSnapshotsInput>;
export interface ListDeploymentSnapshotsOutput {
  nextToken?: string;
  snapshots: DeploymentSummary[];
}
const ListDeploymentSnapshotsOutput = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListDeploymentSnapshotsOutput>;
export interface ListPoliciesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
const ListPoliciesInput = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<ListPoliciesInput>;
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
const PolicySummary = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<PolicySummary>;
export type PolicySummaryList = PolicySummary[];
const PolicySummaryList = /*@__PURE__*/ __L.at(__c13, 3);
export interface ListPoliciesOutput {
  nextToken?: string;
  policies: PolicySummary[];
}
const ListPoliciesOutput = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<ListPoliciesOutput>;
export interface ListPolicySnapshotsInput {
  policyIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListPolicySnapshotsInput = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ListPolicySnapshotsInput>;
export interface ListPolicySnapshotsOutput {
  nextToken?: string;
  snapshots: PolicySummary[];
}
const ListPolicySnapshotsOutput = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ListPolicySnapshotsOutput>;
export type ResourceIdentifier = string;
export interface ListResourceAssociationsInput {
  resourceIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListResourceAssociationsInput = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListResourceAssociationsInput>;
export type ServiceResourceType =
  | "Rule"
  | "Template"
  | "Policy"
  | "Deployment"
  | "Scope"
  | (string & {});
const ServiceResourceType = S.String;

export interface ResourceAssociation {
  arn: string;
  resourceType: ServiceResourceType;
}
const ResourceAssociation = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<ResourceAssociation>;
export type ResourceAssociationList = ResourceAssociation[];
const ResourceAssociationList = /*@__PURE__*/ __L.at(__c14, 1);
export interface ListResourceAssociationsOutput {
  nextToken?: string;
  resourceAssociations: ResourceAssociation[];
}
const ListResourceAssociationsOutput = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListResourceAssociationsOutput>;
export interface ListResourceSynchronizationStatusesInput {
  deploymentIdentifier: string;
  synchronizationStatus?: SynchronizationStatus;
  maxResults?: number;
  nextToken?: string;
}
const ListResourceSynchronizationStatusesInput = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListResourceSynchronizationStatusesInput>;
export interface ListResourceSynchronizationStatusesOutput {
  nextToken?: string;
  resourceSynchronizationStatuses: ResourceSynchronizationStatusSummary[];
}
const ListResourceSynchronizationStatusesOutput =
  ListAggregateResourceSynchronizationStatusesOutput as any as S.Schema<ListResourceSynchronizationStatusesOutput>;
export interface ListRulesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
const ListRulesInput = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<ListRulesInput>;
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
const RuleSummary = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<RuleSummary>;
export type RuleSummaryList = RuleSummary[];
const RuleSummaryList = /*@__PURE__*/ __L.at(__c14, 6);
export interface ListRulesOutput {
  nextToken?: string;
  rules: RuleSummary[];
}
const ListRulesOutput = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<ListRulesOutput>;
export interface ListRuleSnapshotsInput {
  ruleIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListRuleSnapshotsInput = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<ListRuleSnapshotsInput>;
export interface ListRuleSnapshotsOutput {
  nextToken?: string;
  snapshots: RuleSummary[];
}
const ListRuleSnapshotsOutput = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListRuleSnapshotsOutput>;
export interface ListScopesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
const ListScopesInput = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<ListScopesInput>;
export interface ScopeSummary {
  scopeId: string;
  scopeArn: string;
  scopeName?: string;
  status?: EntityStatus;
  version?: string;
  hasPublishedVersion?: boolean;
  updatedAt?: Date;
}
const ScopeSummary = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<ScopeSummary>;
export type ScopeSummaryList = ScopeSummary[];
const ScopeSummaryList = /*@__PURE__*/ __L.at(__c15, 4);
export interface ListScopesOutput {
  nextToken?: string;
  scopes: ScopeSummary[];
}
const ListScopesOutput = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<ListScopesOutput>;
export interface ListScopeSnapshotsInput {
  scopeIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListScopeSnapshotsInput = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListScopeSnapshotsInput>;
export interface ListScopeSnapshotsOutput {
  nextToken?: string;
  snapshots: ScopeSummary[];
}
const ListScopeSnapshotsOutput = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ListScopeSnapshotsOutput>;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ListTagsForResourceOutput>;
export interface ListTemplatesInput {
  maxResults?: number;
  nextToken?: string;
  status?: EntityStatusFilter;
}
const ListTemplatesInput = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<ListTemplatesInput>;
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
const TemplateSummary = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<TemplateSummary>;
export type TemplateSummaryList = TemplateSummary[];
const TemplateSummaryList = /*@__PURE__*/ __L.at(__c16, 4);
export interface ListTemplatesOutput {
  nextToken?: string;
  templates: TemplateSummary[];
}
const ListTemplatesOutput = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<ListTemplatesOutput>;
export interface ListTemplateSnapshotsInput {
  templateIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
const ListTemplateSnapshotsInput = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ListTemplateSnapshotsInput>;
export interface ListTemplateSnapshotsOutput {
  nextToken?: string;
  snapshots: TemplateSummary[];
}
const ListTemplateSnapshotsOutput = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ListTemplateSnapshotsOutput>;
export type AccountIdList = string[];
const AccountIdList = DeploymentPolicyArnList as any as S.Schema<AccountIdList>;
export type OrganizationalUnitIdList = string[];
const OrganizationalUnitIdList =
  DeploymentPolicyArnList as any as S.Schema<OrganizationalUnitIdList>;
export interface AdminScopeSelectionInput {
  accounts?: string[];
  organizationalUnits?: string[];
}
const AdminScopeSelectionInput = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<AdminScopeSelectionInput>;
export type AdminScopeFilterInput =
  | { includeAll: Record<string, never>; includeOnly?: never; excludeOnly?: never }
  | { includeAll?: never; includeOnly: AdminScopeSelectionInput; excludeOnly?: never }
  | { includeAll?: never; includeOnly?: never; excludeOnly: AdminScopeSelectionInput };
const AdminScopeFilterInput = /*@__PURE__*/ __L.at(__c17, 1);
export interface AdminScopeInput {
  scopeFilter?: AdminScopeFilterInput;
  firewallTypeScope?: AdminFirewallTypeScope;
}
const AdminScopeInput = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<AdminScopeInput>;
export interface PutAdminAccountRequest {
  accountId: string;
  priority: number;
  adminScope?: AdminScopeInput;
}
const PutAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<PutAdminAccountRequest>;
export interface PutAdminAccountResponse {
  adminAccountDetails?: AdminAccountDetails;
}
const PutAdminAccountResponse = GetAdminAccountResponse as any as S.Schema<PutAdminAccountResponse>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = DeleteAdminAccountResponse as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = DeploymentPolicyArnList as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = DeleteAdminAccountResponse as any as S.Schema<UntagResourceOutput>;
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
const UpdateDeploymentInput = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<UpdateDeploymentInput>;
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
const UpdateDeploymentOutput = CreateDeploymentOutput as any as S.Schema<UpdateDeploymentOutput>;
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
const UpdatePolicyInput = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<UpdatePolicyInput>;
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
const UpdatePolicyOutput = CreatePolicyOutput as any as S.Schema<UpdatePolicyOutput>;
export interface UpdateRuleInput {
  ruleIdentifier: string;
  updateToken: string;
  ruleType?: RuleType;
  ruleDescription?: string;
  configuration?: any;
  isPublished: boolean;
  clientToken?: string;
}
const UpdateRuleInput = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<UpdateRuleInput>;
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
const UpdateRuleOutput = CreateRuleOutput as any as S.Schema<UpdateRuleOutput>;
export interface UpdateScopeInput {
  scopeIdentifier: string;
  updateToken: string;
  scopeDescription?: string;
  scopeConfiguration?: ScopeConfiguration;
  isPublished: boolean;
  clientToken?: string;
}
const UpdateScopeInput = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<UpdateScopeInput>;
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
const UpdateScopeOutput = CreateScopeOutput as any as S.Schema<UpdateScopeOutput>;
export interface UpdateTemplateInput {
  templateIdentifier: string;
  updateToken: string;
  templateDescription?: string;
  associatedRuleList?: RuleReference[];
  isPublished: boolean;
  clientToken?: string;
}
const UpdateTemplateInput = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<UpdateTemplateInput>;
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
const UpdateTemplateOutput = CreateTemplateOutput as any as S.Schema<UpdateTemplateOutput>;
export type ValidationExceptionReason =
  | "ACCOUNT_NOT_ONBOARDED"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c18, 4);
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
  input: CreateDeploymentInput,
  output: CreateDeploymentOutput,
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
  input: CreateDeploymentSnapshotInput,
  output: CreateDeploymentSnapshotOutput,
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
  input: CreatePolicyInput,
  output: CreatePolicyOutput,
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
  input: CreatePolicySnapshotInput,
  output: CreatePolicySnapshotOutput,
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
  input: CreateRuleInput,
  output: CreateRuleOutput,
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
  input: CreateRuleSnapshotInput,
  output: CreateRuleSnapshotOutput,
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
  input: CreateScopeInput,
  output: CreateScopeOutput,
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
  input: CreateScopeSnapshotInput,
  output: CreateScopeSnapshotOutput,
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
  input: CreateTemplateInput,
  output: CreateTemplateOutput,
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
  input: CreateTemplateSnapshotInput,
  output: CreateTemplateSnapshotOutput,
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
  input: DeleteAdminAccountRequest,
  output: DeleteAdminAccountResponse,
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
  input: DeleteDeploymentInput,
  output: DeleteDeploymentResponse,
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
  input: DeletePolicyInput,
  output: DeletePolicyResponse,
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
  input: DeleteRuleInput,
  output: DeleteRuleResponse,
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
  input: DeleteScopeInput,
  output: DeleteScopeResponse,
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
  input: DeleteTemplateInput,
  output: DeleteTemplateResponse,
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
  input: GenerateRuleConfigurationRequest,
  output: GenerateRuleConfigurationResponse,
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
  input: GetAdminAccountRequest,
  output: GetAdminAccountResponse,
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
  input: GetDeploymentInput,
  output: GetDeploymentOutput,
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
  input: GetPolicyInput,
  output: GetPolicyOutput,
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
  input: GetRuleInput,
  output: GetRuleOutput,
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
  input: GetScopeInput,
  output: GetScopeOutput,
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
  input: GetTemplateInput,
  output: GetTemplateOutput,
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
  input: ListAdminAccountsRequest,
  output: ListAdminAccountsResponse,
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
  input: ListAggregateResourceSynchronizationStatusesInput,
  output: ListAggregateResourceSynchronizationStatusesOutput,
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
  input: ListDeploymentsInput,
  output: ListDeploymentsOutput,
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
  input: ListDeploymentSnapshotsInput,
  output: ListDeploymentSnapshotsOutput,
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
  input: ListPoliciesInput,
  output: ListPoliciesOutput,
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
  input: ListPolicySnapshotsInput,
  output: ListPolicySnapshotsOutput,
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
  input: ListResourceAssociationsInput,
  output: ListResourceAssociationsOutput,
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
  input: ListResourceSynchronizationStatusesInput,
  output: ListResourceSynchronizationStatusesOutput,
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
  input: ListRulesInput,
  output: ListRulesOutput,
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
  input: ListRuleSnapshotsInput,
  output: ListRuleSnapshotsOutput,
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
  input: ListScopesInput,
  output: ListScopesOutput,
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
  input: ListScopeSnapshotsInput,
  output: ListScopeSnapshotsOutput,
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
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
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
  input: ListTemplatesInput,
  output: ListTemplatesOutput,
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
  input: ListTemplateSnapshotsInput,
  output: ListTemplateSnapshotsOutput,
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
  input: PutAdminAccountRequest,
  output: PutAdminAccountResponse,
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
  input: TagResourceInput,
  output: TagResourceOutput,
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
  input: UntagResourceInput,
  output: UntagResourceOutput,
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
  input: UpdateDeploymentInput,
  output: UpdateDeploymentOutput,
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
  input: UpdatePolicyInput,
  output: UpdatePolicyOutput,
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
  input: UpdateRuleInput,
  output: UpdateRuleOutput,
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
  input: UpdateScopeInput,
  output: UpdateScopeOutput,
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
  input: UpdateTemplateInput,
  output: UpdateTemplateOutput,
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
      return S.Array(PolicyReference);
    case 3:
      return S.suspend(() => S.Struct({ scopeIdentifier: S.String })).annotate({
        identifier: "ScopeReference",
      });
    case 4:
      return S.Array(ScopeReference);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          deploymentName: S.String,
          deploymentDescription: S.optional(S.String),
          deploymentConfiguration: DeploymentConfiguration,
          associatedPolicyList: PolicyReferenceList,
          associatedScopeList: ScopeReferenceList,
          isPublished: S.optional(S.Boolean),
          tags: S.optional(TagMap),
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
      return S.Array(AssociatedPolicy);
    case 1:
      return S.suspend(() => S.Struct({ scopeArn: S.String })).annotate({
        identifier: "AssociatedScope",
      });
    case 2:
      return S.Array(AssociatedScope);
    case 3:
      return S.Array(S.String);
    case 4:
      return S.Array(ScopeResourceType);
    case 5:
      return S.suspend(() =>
        S.Struct({
          firewallType: PolicyFirewallType,
          policyArns: DeploymentPolicyArnList,
          inScopeResourceTypes: DeploymentResourceTypeList,
        }),
      ).annotate({ identifier: "DeploymentCoverageEntry" });
    case 6:
      return S.Array(DeploymentCoverageEntry);
    case 7:
      return S.suspend(() =>
        S.Struct({ code: S.String, policyArn: S.String, message: S.String }),
      ).annotate({ identifier: "DeploymentWarningEntry" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DeploymentWarningEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.String,
          deploymentArn: S.String,
          deploymentName: S.String,
          deploymentDescription: S.optional(S.String),
          status: EntityStatus,
          deploymentConfiguration: S.optional(DeploymentConfiguration),
          associatedPolicyList: AssociatedPolicyList,
          associatedScopeList: AssociatedScopeList,
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          deploymentCoverage: S.optional(DeploymentCoverageList),
          warnings: S.optional(DeploymentWarningList),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateDeploymentOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          deploymentIdentifier: S.String.pipe(T.HttpLabel("deploymentIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
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
          status: EntityStatus,
          deploymentConfiguration: S.optional(DeploymentConfiguration),
          associatedPolicyList: AssociatedPolicyList,
          associatedScopeList: AssociatedScopeList,
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
      return S.Array(TemplateOrRuleReference);
    case 6:
      return S.suspend(() =>
        S.Struct({
          existingCustomerWebACLResolution: ExistingCustomerWebACLResolution,
          conflictResolution: WAFConflictResolutionOptions,
        }),
      ).annotate({ identifier: "WafConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          remediationEnabled: S.Boolean,
          resourcesCleanUp: S.Boolean,
          wafConfig: S.optional(WafConfig),
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
          associatedTemplateAndRuleList: S.optional(TemplateAndRuleReferenceList),
          firewallType: PolicyFirewallType,
          policyConfiguration: PolicyConfiguration,
          isPublished: S.optional(S.Boolean),
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/policies" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePolicyInput" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ templateArn: S.String }),
        /*@__PURE__*/ S.Struct({ ruleArn: S.String }),
      ]);
    case 2:
      return S.Array(AssociatedTemplateOrRule);
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyId: S.String,
          policyArn: S.String,
          policyName: S.String,
          policyDescription: S.optional(S.String),
          status: EntityStatus,
          priority: S.Number,
          associatedTemplateAndRuleList: AssociatedTemplateAndRuleList,
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: PolicyFirewallType,
          policyConfiguration: S.optional(PolicyConfiguration),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreatePolicyOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyIdentifier: S.String.pipe(T.HttpLabel("policyIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
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
          status: EntityStatus,
          priority: S.Number,
          associatedTemplateAndRuleList: AssociatedTemplateAndRuleList,
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: PolicyFirewallType,
          policyConfiguration: S.optional(PolicyConfiguration),
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
          firewallType: RuleFirewallType,
          ruleType: RuleType,
          ruleDescription: S.optional(S.String),
          configuration: S.Any,
          isPublished: S.optional(S.Boolean),
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/rules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          ruleArn: S.String,
          ruleName: S.String,
          firewallType: RuleFirewallType,
          ruleType: S.optional(RuleType),
          ruleDescription: S.optional(S.String),
          configuration: S.Any,
          status: EntityStatus,
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
          tags: S.optional(TagMap),
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
          accountIds: S.optional(AccountList),
          organizationalUnits: S.optional(OrganizationalUnitList),
        }),
      ).annotate({ identifier: "AccountSet" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ includeAll: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ include: AccountSet }),
        /*@__PURE__*/ S.Struct({ exclude: AccountSet }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ scheme: S.optional(Scheme), ipAddressType: S.optional(IpAddressType) }),
      ).annotate({ identifier: "AlbConfiguration" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tags: StringMap }),
        /*@__PURE__*/ S.Struct({ albConfig: AlbConfiguration }),
      ]);
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => ResourceLogicalExpression).annotate({
          identifier: "ResourceLogicalExpression",
        }),
      );
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ criteria: ResourceCriteria }),
        /*@__PURE__*/ S.Struct({
          and: /*@__PURE__*/ S.suspend(() => ResourceLogicalExpressionList).annotate({
            identifier: "ResourceLogicalExpressionList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          or: /*@__PURE__*/ S.suspend(() => ResourceLogicalExpressionList).annotate({
            identifier: "ResourceLogicalExpressionList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          not: /*@__PURE__*/ S.suspend(() => ResourceLogicalExpression).annotate({
            identifier: "ResourceLogicalExpression",
          }),
        }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          explicitArns: S.optional(ResourceArnList),
          expression: S.optional(ResourceLogicalExpression),
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
          include: S.optional(ResourceSet),
          exclude: S.optional(ResourceSet),
        }),
      ).annotate({ identifier: "ResourceScope" });
    case 1:
      return S.Record(ScopeResourceType, /*@__PURE__*/ ResourceScope.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({ accountFilter: S.optional(AccountFilter), resourceScopes: ResourceScopeMap }),
      ).annotate({ identifier: "ScopeConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          scopeName: S.String,
          scopeDescription: S.optional(S.String),
          scopeConfiguration: ScopeConfiguration,
          isPublished: S.optional(S.Boolean),
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/scopes" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateScopeInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          scopeId: S.String,
          scopeArn: S.String,
          scopeName: S.String,
          scopeDescription: S.optional(S.String),
          scopeConfiguration: S.optional(ScopeConfiguration),
          status: EntityStatus,
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
          tags: S.optional(TagMap),
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
          scopeConfiguration: S.optional(ScopeConfiguration),
          status: EntityStatus,
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
      return S.Array(RuleReference);
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          templateName: S.String,
          templateDescription: S.optional(S.String),
          associatedRuleList: RuleReferenceList,
          firewallType: TemplateFirewallType,
          isPublished: S.optional(S.Boolean),
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/templates" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTemplateInput" });
    case 2:
      return S.suspend(() => S.Struct({ ruleArn: S.String })).annotate({
        identifier: "AssociatedRule",
      });
    case 3:
      return S.Array(AssociatedRule);
    case 4:
      return S.suspend(() =>
        S.Struct({
          templateId: S.String,
          templateArn: S.String,
          templateName: S.String,
          templateDescription: S.optional(S.String),
          status: EntityStatus,
          version: S.String,
          associatedRuleList: AssociatedRuleList,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: TemplateFirewallType,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateTemplateOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          templateIdentifier: S.String.pipe(T.HttpLabel("templateIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
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
          status: EntityStatus,
          version: S.String,
          associatedRuleList: AssociatedRuleList,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: TemplateFirewallType,
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
          ruleFirewallType: RuleFirewallType,
          ruleType: RuleType,
          wafConfigDataType: S.optional(WAFConfigDataType),
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
      return S.Array(AccountReference);
    case 3:
      return S.suspend(() => S.Struct({ ouId: S.String, name: S.optional(S.String) })).annotate({
        identifier: "OrganizationalUnitReference",
      });
    case 4:
      return S.Array(OrganizationalUnitReference);
    case 5:
      return S.suspend(() =>
        S.Struct({
          accounts: S.optional(AccountReferenceList),
          organizationalUnits: S.optional(OrganizationalUnitReferenceList),
        }),
      ).annotate({ identifier: "AdminScopeSelection" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ includeAll: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ includeOnly: AdminScopeSelection }),
        /*@__PURE__*/ S.Struct({ excludeOnly: AdminScopeSelection }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          allFirewallTypesEnabled: S.optional(S.Boolean),
          firewallTypes: S.optional(FirewallTypeList),
        }),
      ).annotate({ identifier: "AdminFirewallTypeScope" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scopeFilter: S.optional(AdminScopeFilter),
          firewallTypeScope: S.optional(AdminFirewallTypeScope),
        }),
      ).annotate({ identifier: "AdminScope" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          adminAccount: S.String,
          priority: S.Number,
          adminScope: S.optional(AdminScope),
          status: S.optional(AdminAccountStatus),
        }),
      ).annotate({ identifier: "AdminAccountDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({ adminAccountDetails: S.optional(AdminAccountDetails) }),
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
          status: EntityStatus,
          deploymentConfiguration: S.optional(DeploymentConfiguration),
          associatedPolicyList: AssociatedPolicyList,
          associatedScopeList: AssociatedScopeList,
          version: S.String,
          updateToken: S.optional(S.String),
          isSnapshot: S.optional(S.Boolean),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          deploymentCoverage: S.optional(DeploymentCoverageList),
          warnings: S.optional(DeploymentWarningList),
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
      return S.Array(AdminAccountSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), adminAccounts: AdminAccountSummaryList }),
      ).annotate({
        identifier: "ListAdminAccountsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          synchronizationStatus: S.optional(SynchronizationStatus).pipe(
            T.HttpQuery("synchronizationStatus"),
          ),
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
      return S.Array(ConfigurationIssue);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          incorrectSingleValueConfigurations: S.optional(ConfigurationIssueList),
          missingAppendableConfigurationValues: S.optional(ConfigurationIssueList),
          unexpectedAppendableConfigurationValues: S.optional(ConfigurationIssueList),
          incorrectAppendableConfigurationOrder: S.optional(ConfigurationIssueList),
          missingMergeableConfigurationValues: S.optional(ConfigurationIssueList),
          unexpectedMergeableConfigurationValues: S.optional(ConfigurationIssueList),
        }),
      ).annotate({ identifier: "InvalidFirewallReasons" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ missingFirewall: S.String }),
        /*@__PURE__*/ S.Struct({ invalidFirewall: InvalidFirewallReasons }),
      ]);
    case 2:
      return S.Record(PolicyFirewallType, /*@__PURE__*/ FirewallSyncReason.pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ reason: S.String })).annotate({
        identifier: "NotVisibleMarker",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ reasons: OutOfSyncReasons }),
        /*@__PURE__*/ S.Struct({ notVisible: NotVisibleMarker }),
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
      return S.Record(PolicyFirewallType, /*@__PURE__*/ RemediationIssueDetails.pipe(S.optional));
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ issues: RemediationIssues }),
        /*@__PURE__*/ S.Struct({ notVisible: NotVisibleMarker }),
      ]);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          synchronizationStatus: SynchronizationStatus,
          accountId: S.String,
          resourceArn: S.String,
          deploymentArn: S.optional(S.String),
          resourceType: S.optional(ResourceType),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          outOfSyncReasons: S.optional(OutOfSyncReasonsView),
          remediationIssues: S.optional(RemediationIssuesView),
          evaluatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ResourceSynchronizationStatusSummary",
      });
    case 1:
      return S.Array(ResourceSynchronizationStatusSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          resourceSynchronizationStatuses: ResourceSynchronizationStatusSummaryList,
        }),
      ).annotate({
        identifier: "ListAggregateResourceSynchronizationStatusesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(EntityStatusFilter).pipe(T.HttpQuery("status")),
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
          status: S.optional(EntityStatus),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DeploymentSummary" });
    case 5:
      return S.Array(DeploymentSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), deployments: DeploymentSummaryList }),
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
        S.Struct({ nextToken: S.optional(S.String), snapshots: DeploymentSummaryList }),
      ).annotate({
        identifier: "ListDeploymentSnapshotsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(EntityStatusFilter).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/policies" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPoliciesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyId: S.String,
          policyArn: S.String,
          policyName: S.optional(S.String),
          status: S.optional(EntityStatus),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.optional(PolicyFirewallType),
          priority: S.optional(S.Number),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PolicySummary" });
    case 3:
      return S.Array(PolicySummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), policies: PolicySummaryList }),
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
        S.Struct({ nextToken: S.optional(S.String), snapshots: PolicySummaryList }),
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
      return S.suspend(() =>
        S.Struct({ arn: S.String, resourceType: ServiceResourceType }),
      ).annotate({ identifier: "ResourceAssociation" });
    case 1:
      return S.Array(ResourceAssociation);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          resourceAssociations: ResourceAssociationList,
        }),
      ).annotate({
        identifier: "ListResourceAssociationsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          deploymentIdentifier: S.String.pipe(T.HttpQuery("deploymentIdentifier")),
          synchronizationStatus: S.optional(SynchronizationStatus).pipe(
            T.HttpQuery("synchronizationStatus"),
          ),
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
          status: S.optional(EntityStatusFilter).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/rules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRulesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ruleId: S.String,
          ruleArn: S.String,
          ruleName: S.String,
          firewallType: S.optional(RuleFirewallType),
          ruleType: S.optional(RuleType),
          status: S.optional(EntityStatus),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RuleSummary" });
    case 6:
      return S.Array(RuleSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), rules: RuleSummaryList }),
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
        S.Struct({ nextToken: S.optional(S.String), snapshots: RuleSummaryList }),
      ).annotate({ identifier: "ListRuleSnapshotsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(EntityStatusFilter).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/scopes" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListScopesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          scopeId: S.String,
          scopeArn: S.String,
          scopeName: S.optional(S.String),
          status: S.optional(EntityStatus),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ScopeSummary" });
    case 4:
      return S.Array(ScopeSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), scopes: ScopeSummaryList }),
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
        S.Struct({ nextToken: S.optional(S.String), snapshots: ScopeSummaryList }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(EntityStatusFilter).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/templates" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTemplatesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          templateId: S.String,
          templateArn: S.String,
          templateName: S.String,
          status: S.optional(EntityStatus),
          version: S.optional(S.String),
          hasPublishedVersion: S.optional(S.Boolean),
          firewallType: S.optional(TemplateFirewallType),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "TemplateSummary" });
    case 4:
      return S.Array(TemplateSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), templates: TemplateSummaryList }),
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
        S.Struct({ nextToken: S.optional(S.String), snapshots: TemplateSummaryList }),
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
          accounts: S.optional(AccountIdList),
          organizationalUnits: S.optional(OrganizationalUnitIdList),
        }),
      ).annotate({ identifier: "AdminScopeSelectionInput" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ includeAll: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ includeOnly: AdminScopeSelectionInput }),
        /*@__PURE__*/ S.Struct({ excludeOnly: AdminScopeSelectionInput }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          scopeFilter: S.optional(AdminScopeFilterInput),
          firewallTypeScope: S.optional(AdminFirewallTypeScope),
        }),
      ).annotate({ identifier: "AdminScopeInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          priority: S.Number,
          adminScope: S.optional(AdminScopeInput),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/admin-account" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAdminAccountRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
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
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
          deploymentConfiguration: S.optional(DeploymentConfiguration),
          associatedPolicyList: S.optional(PolicyReferenceList),
          associatedScopeList: S.optional(ScopeReferenceList),
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
          associatedTemplateAndRuleList: S.optional(TemplateAndRuleReferenceList),
          policyConfiguration: S.optional(PolicyConfiguration),
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
          ruleType: S.optional(RuleType),
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
          scopeConfiguration: S.optional(ScopeConfiguration),
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
          associatedRuleList: S.optional(RuleReferenceList),
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
      return S.Array(ValidationExceptionField);
  }
}
