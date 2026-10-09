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
  sdkId: "WellArchitected",
  serviceShapeName: "WellArchitectedApiServiceLambda",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "wellarchitected" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-03-31");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region, SubServiceType } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingName: "wellarchitected", signingRegion: `${_0}` }],
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
  {
    const PartitionResult = _.partition(Region);
    if (
      SubServiceType != null &&
      SubServiceType === "AGENT" &&
      Region != null &&
      PartitionResult != null &&
      PartitionResult !== false
    ) {
      if (UseFIPS === true && UseDualStack === true) {
        if (
          _.getAttr(PartitionResult, "supportsFIPS") === true &&
          _.getAttr(PartitionResult, "supportsDualStack") === true
        ) {
          return e(
            `https://wellarchitected-agent-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(Region),
            {},
          );
        }
        return err(
          "FIPS and DualStack are enabled, but this partition does not support one or both",
        );
      }
      if (UseFIPS === true && UseDualStack === false) {
        if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
          return e(
            `https://wellarchitected-agent-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            _p0(Region),
            {},
          );
        }
        return err("FIPS is enabled but this partition does not support FIPS");
      }
      if (UseFIPS === false && UseDualStack === true) {
        if (_.getAttr(PartitionResult, "supportsDualStack") === true) {
          return e(
            `https://wellarchitected-agent.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(Region),
            {},
          );
        }
        return err("DualStack is enabled but this partition does not support DualStack");
      }
      return e(
        `https://wellarchitected-agent.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        _p0(Region),
        {},
      );
    }
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
              `https://wellarchitected-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://wellarchitected-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://wellarchitected.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://wellarchitected.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(300, __c37, 4)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type WorkloadId = string;
export type LensAlias = string;
export type LensAliases = string[];
export interface AssociateLensesInput {
  WorkloadId: string;
  LensAliases?: string[];
}
export interface AssociateLensesResponse {}
export type ProfileArn = string;
export type ProfileArns = string[];
export interface AssociateProfilesInput {
  WorkloadId: string;
  ProfileArns?: string[];
}
export interface AssociateProfilesResponse {}
export type AgentProfileArn = string;
export type SensitiveString = string | redacted.Redacted<string>;
export type ContextType = "APPLICATION" | (string & {});
export type ContextAccountIdList = string[];
export type ContextRegionList = string[];
export type ContextAwsServiceList = string[];
export type ContextResourceTypeList = string[];
export interface ContextResourceTag {
  key: string;
  value: string;
}
export type ContextResourceTagList = ContextResourceTag[];
export type ApplicationType = "SAS" | "DESKTOP_APPLICATION" | "OTHER" | (string & {});
export type Criticality =
  | "MISSION_CRITICAL"
  | "BUSINESS_CRITICAL"
  | "NON_CRITICAL"
  | "TEST_DEVELOPMENT"
  | (string & {});
export interface ContextContent {
  accountIds?: string[];
  regions?: string[];
  awsServices?: string[];
  resourceTypes?: string[];
  resourceTags?: ContextResourceTag[];
  applicationOverview?: string | redacted.Redacted<string>;
  industry?: string | redacted.Redacted<string>;
  applicationType?: ApplicationType;
  criticality?: Criticality;
  architectureOverview?: string | redacted.Redacted<string>;
  additionalContext?: string | redacted.Redacted<string>;
}
export interface CreateAgentContextRequest {
  clientToken?: string;
  profileArn: string;
  title: string | redacted.Redacted<string>;
  contextType: ContextType;
  content: ContextContent;
}
export type UUID = string;
export interface ContextSummary {
  id: string;
  profileArn: string;
  title: string | redacted.Redacted<string>;
  contextType: ContextType;
  content: ContextContent;
  applicationType?: ApplicationType;
  criticality?: Criticality;
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export interface CreateAgentContextResponse {
  context: ContextSummary;
}
export type Pillar =
  | "COST_OPTIMIZATION"
  | "SECURITY"
  | "RESILIENCE"
  | "PERFORMANCE"
  | "OPERATIONAL_EXCELLENCE"
  | (string & {});
export type Pillars = Pillar[];
export interface CreateAgentGoalRequest {
  clientToken?: string;
  profileArn: string;
  pillars: Pillar[];
  title: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
}
export interface GoalSummary {
  id: string;
  profileArn: string;
  pillars: Pillar[];
  title: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export interface CreateAgentGoalResponse {
  goal: GoalSummary;
}
export type RoleArn = string;
export type AccountId = string;
export type Region = string;
export type Regions = string[];
export interface AggregationConfiguration {
  accountId: string;
  regions: string[];
  accessRoleArn: string;
}
export type AggregationConfigurations = AggregationConfiguration[];
export interface Tag {
  key: string;
  value: string;
}
export type Tags = Tag[];
export interface CreateAgentProfileRequest {
  name: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  businessOverview?: string | redacted.Redacted<string>;
  pillars: Pillar[];
  deletionProtection?: boolean;
  executionRoleArn: string;
  aggregationConfiguration: AggregationConfiguration[];
  clientToken?: string;
  tags?: Tag[];
}
export type FieldErrorPath = string;
export type FieldErrorMessage = string;
export type FieldErrors = { [key: string]: string | undefined };
export interface CreateAgentProfileResponse {
  name: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  businessOverview?: string | redacted.Redacted<string>;
  pillars: Pillar[];
  deletionProtection?: boolean;
  executionRoleArn: string;
  aggregationConfiguration: AggregationConfiguration[];
  arn: string;
  eligibleForScheduledGeneration?: boolean;
  eligibleForArchitectureGeneration?: boolean;
  fieldErrors?: { [key: string]: string | undefined };
  tags?: Tag[];
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export type SharedWith = string;
export type ClientRequestToken = string;
export interface CreateLensShareInput {
  LensAlias: string;
  SharedWith?: string;
  ClientRequestToken?: string;
}
export type ShareId = string;
export interface CreateLensShareOutput {
  ShareId?: string;
}
export type LensVersion = string;
export type IsMajorVersion = boolean;
export interface CreateLensVersionInput {
  LensAlias: string;
  LensVersion?: string;
  IsMajorVersion?: boolean;
  ClientRequestToken?: string;
}
export type LensArn = string;
export interface CreateLensVersionOutput {
  LensArn?: string;
  LensVersion?: string;
}
export type MilestoneName = string;
export interface CreateMilestoneInput {
  WorkloadId: string;
  MilestoneName?: string;
  ClientRequestToken?: string;
}
export type MilestoneNumber = number;
export interface CreateMilestoneOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
}
export type ProfileName = string;
export type ProfileDescription = string;
export type QuestionId = string;
export type ChoiceId = string;
export type SelectedProfileChoiceIds = string[];
export interface ProfileQuestionUpdate {
  QuestionId?: string;
  SelectedChoiceIds?: string[];
}
export type ProfileQuestionUpdates = ProfileQuestionUpdate[];
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateProfileInput {
  ProfileName?: string;
  ProfileDescription?: string;
  ProfileQuestions?: ProfileQuestionUpdate[];
  ClientRequestToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export type ProfileVersion = string;
export interface CreateProfileOutput {
  ProfileArn?: string;
  ProfileVersion?: string;
}
export interface CreateProfileShareInput {
  ProfileArn: string;
  SharedWith?: string;
  ClientRequestToken?: string;
}
export interface CreateProfileShareOutput {
  ShareId?: string;
  ProfileArn?: string;
}
export type TemplateName = string;
export type TemplateDescription = string;
export type ReviewTemplateLenses = string[];
export type Notes = string;
export interface CreateReviewTemplateInput {
  TemplateName?: string;
  Description?: string;
  Lenses?: string[];
  Notes?: string;
  Tags?: { [key: string]: string | undefined };
  ClientRequestToken?: string;
}
export type TemplateArn = string;
export interface CreateReviewTemplateOutput {
  TemplateArn?: string;
}
export interface CreateTemplateShareInput {
  TemplateArn: string;
  SharedWith?: string;
  ClientRequestToken?: string;
}
export interface CreateTemplateShareOutput {
  TemplateArn?: string;
  ShareId?: string;
}
export type WorkloadName = string;
export type WorkloadDescription = string;
export type WorkloadEnvironment = "PRODUCTION" | "PREPRODUCTION" | (string & {});
export type AwsAccountId = string;
export type WorkloadAccountIds = string[];
export type AwsRegion = string;
export type WorkloadAwsRegions = string[];
export type WorkloadNonAwsRegion = string;
export type WorkloadNonAwsRegions = string[];
export type PillarId = string;
export type WorkloadPillarPriorities = string[];
export type WorkloadArchitecturalDesign = string;
export type WorkloadReviewOwner = string;
export type WorkloadIndustryType = string;
export type WorkloadIndustry = string;
export type WorkloadLenses = string[];
export type TrustedAdvisorIntegrationStatus = "ENABLED" | "DISABLED" | (string & {});
export type DefinitionType = "WORKLOAD_METADATA" | "APP_REGISTRY" | (string & {});
export type WorkloadResourceDefinition = DefinitionType[];
export interface WorkloadDiscoveryConfig {
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus;
  WorkloadResourceDefinition?: DefinitionType[];
}
export type ApplicationArn = string;
export type WorkloadApplications = string[];
export type WorkloadProfileArns = string[];
export type ReviewTemplateArns = string[];
export type WorkloadIssueManagementStatus = "ENABLED" | "DISABLED" | "INHERIT" | (string & {});
export type IssueManagementType = "AUTO" | "MANUAL" | (string & {});
export type JiraProjectKey = string;
export interface WorkloadJiraConfigurationInput {
  IssueManagementStatus?: WorkloadIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
}
export interface CreateWorkloadInput {
  WorkloadName?: string;
  Description?: string;
  Environment?: WorkloadEnvironment;
  AccountIds?: string[];
  AwsRegions?: string[];
  NonAwsRegions?: string[];
  PillarPriorities?: string[];
  ArchitecturalDesign?: string;
  ReviewOwner?: string;
  IndustryType?: string;
  Industry?: string;
  Lenses?: string[];
  Notes?: string;
  ClientRequestToken?: string;
  Tags?: { [key: string]: string | undefined };
  DiscoveryConfig?: WorkloadDiscoveryConfig;
  Applications?: string[];
  ProfileArns?: string[];
  ReviewTemplateArns?: string[];
  JiraConfiguration?: WorkloadJiraConfigurationInput;
}
export type WorkloadArn = string;
export interface CreateWorkloadOutput {
  WorkloadId?: string;
  WorkloadArn?: string;
}
export type PermissionType = "READONLY" | "CONTRIBUTOR" | (string & {});
export interface CreateWorkloadShareInput {
  WorkloadId: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  ClientRequestToken?: string;
}
export interface CreateWorkloadShareOutput {
  WorkloadId?: string;
  ShareId?: string;
}
export interface DeleteAgentContextRequest {
  profileArn: string;
  id: string;
}
export interface DeleteAgentContextResponse {}
export interface DeleteAgentGoalRequest {
  profileArn: string;
  id: string;
}
export interface DeleteAgentGoalResponse {}
export interface DeleteAgentProfileRequest {
  profileArn: string;
}
export interface DeleteAgentProfileResponse {}
export type LensStatusType = "ALL" | "DRAFT" | "PUBLISHED" | (string & {});
export interface DeleteLensInput {
  LensAlias: string;
  ClientRequestToken?: string;
  LensStatus?: LensStatusType;
}
export interface DeleteLensResponse {}
export interface DeleteLensShareInput {
  ShareId: string;
  LensAlias: string;
  ClientRequestToken?: string;
}
export interface DeleteLensShareResponse {}
export interface DeleteProfileInput {
  ProfileArn: string;
  ClientRequestToken?: string;
}
export interface DeleteProfileResponse {}
export interface DeleteProfileShareInput {
  ShareId: string;
  ProfileArn: string;
  ClientRequestToken?: string;
}
export interface DeleteProfileShareResponse {}
export interface DeleteReviewTemplateInput {
  TemplateArn: string;
  ClientRequestToken?: string;
}
export interface DeleteReviewTemplateResponse {}
export interface DeleteTemplateShareInput {
  ShareId: string;
  TemplateArn: string;
  ClientRequestToken?: string;
}
export interface DeleteTemplateShareResponse {}
export interface DeleteWorkloadInput {
  WorkloadId: string;
  ClientRequestToken?: string;
}
export interface DeleteWorkloadResponse {}
export interface DeleteWorkloadShareInput {
  ShareId: string;
  WorkloadId: string;
  ClientRequestToken?: string;
}
export interface DeleteWorkloadShareResponse {}
export interface DisassociateLensesInput {
  WorkloadId: string;
  LensAliases?: string[];
}
export interface DisassociateLensesResponse {}
export interface DisassociateProfilesInput {
  WorkloadId: string;
  ProfileArns?: string[];
}
export interface DisassociateProfilesResponse {}
export interface ExportLensInput {
  LensAlias: string;
  LensVersion?: string;
}
export type LensJSON = string;
export interface ExportLensOutput {
  LensJSON?: string;
}
export interface GetAgentContextRequest {
  profileArn: string;
  id: string;
}
export interface GetAgentContextResponse {
  context: ContextSummary;
}
export interface GetAgentGoalRequest {
  profileArn: string;
  id: string;
}
export interface GetAgentGoalResponse {
  goal: GoalSummary;
}
export interface GetAgentProfileRequest {
  profileArn: string;
}
export interface GetAgentProfileResponse {
  name: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  businessOverview?: string | redacted.Redacted<string>;
  pillars: Pillar[];
  deletionProtection?: boolean;
  executionRoleArn: string;
  aggregationConfiguration: AggregationConfiguration[];
  arn: string;
  eligibleForScheduledGeneration?: boolean;
  eligibleForArchitectureGeneration?: boolean;
  fieldErrors?: { [key: string]: string | undefined };
  tags?: Tag[];
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export type AgentRecommendationArn = string;
export type RemediationType =
  | "AUTO_REMEDIATION"
  | "CONSOLE"
  | "CLI"
  | "SDK"
  | "IAC"
  | "MCP"
  | (string & {});
export interface GetAgentRecommendationRequest {
  recommendationArn: string;
  remediationType?: RemediationType;
}
export type RecommendationArn = string;
export type RecommendationType = "RESOURCE" | "ARCHITECTURE" | "APPLICATION" | (string & {});
export type Priority = "HIGH" | "MEDIUM" | "LOW" | (string & {});
export type Effort = "LARGE" | "MEDIUM" | "SMALL" | (string & {});
export type RecommendationStatus = "ACTIVE" | "SUPPRESSED" | "COMPLETED" | (string & {});
export type RecommendationState = "OPEN" | "CLOSED" | (string & {});
export type ImpactCategory = "HIGH" | "MEDIUM" | "LOW" | (string & {});
export interface Roi {
  estimate?: string;
  detail: string;
}
export type StringList = string[];
export type ImpactDetail = string;
export type ImpactDetails = string[];
export interface Insight {
  usagePattern: string;
  signalsDetected?: string;
}
export type InsightList = Insight[];
export type Highlight = string;
export type Highlights = string[];
export type RecommendedFixStep = string;
export type RecommendedFixSteps = string[];
export interface RemediationSummary {
  recommendation: string;
  steps: string[];
}
export interface CrossPillarBenefit {
  pillar: Pillar;
  title: string;
  description: string;
  impact: ImpactCategory;
}
export type CrossPillarBenefits = CrossPillarBenefit[];
export type RiskRating = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export interface TradeOff {
  pillar: Pillar;
  title: string;
  description: string;
  risk: RiskRating;
  mitigation: string;
  riskExplanation?: string;
}
export type TradeOffs = TradeOff[];
export type RecommendationSource =
  | "TRUSTED_ADVISOR"
  | "COST_EXPLORER"
  | "CLOUDWATCH"
  | "WELL_ARCHITECTED_TOOL"
  | "WELL_ARCHITECTED_AGENT"
  | "CUSTOMER_IAC"
  | (string & {});
export type RecommendationSourceList = RecommendationSource[];
export interface RecommendationGoal {
  title: string;
}
export type RecommendationGoals = RecommendationGoal[];
export interface RemediationStep {
  title?: string | redacted.Redacted<string>;
  content: string | redacted.Redacted<string>;
}
export type RemediationSteps = RemediationStep[];
export interface ResourceLink {
  url: string;
  title?: string;
}
export type ResourceLinks = ResourceLink[];
export interface AgentRecommendationRemediation {
  recommendationArn: string;
  type: RemediationType;
  steps: RemediationStep[];
  resourceLinks?: ResourceLink[];
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export type AgentRecommendationRemediations = AgentRecommendationRemediation[];
export interface GetAgentRecommendationResponse {
  recommendationArn: string;
  profileArn: string;
  generationId?: string;
  title: string | redacted.Redacted<string>;
  description: string | redacted.Redacted<string>;
  type: RecommendationType;
  pillar: Pillar;
  priority: Priority;
  effort: Effort;
  status: RecommendationStatus;
  state: RecommendationState;
  updateReason?: string | redacted.Redacted<string>;
  impact: ImpactCategory;
  roi: Roi;
  numberOfResources?: number;
  awsServices?: string[];
  businessUnits?: string[];
  applications?: string[];
  impactDetails: string[];
  insights: Insight[];
  highlights: string[];
  remediationSummary: RemediationSummary;
  crossPillarBenefits?: CrossPillarBenefit[];
  tradeOffs?: TradeOff[];
  sources?: RecommendationSource[];
  goals?: RecommendationGoal[];
  tags?: Tag[];
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
  remediations?: AgentRecommendationRemediation[];
}
export interface GetAgentRecommendationGenerationRequest {
  profileArn: string;
  generationId: string;
}
export type GenerationStatus = "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "ERROR" | (string & {});
export type GoalIdList = string[];
export type ItemId = string;
export type ItemIds = string[];
export interface PillarItem {
  pillar: Pillar;
  ids: string[];
}
export type PillarItems = PillarItem[];
export interface Scope {
  pillars: Pillar[];
  goalIds?: string[];
  items?: PillarItem[];
}
export interface Progress {
  stepsCompleted: number;
  totalSteps: number;
  completionPercentage: number;
}
export interface ErrorDetails {
  code: string;
  message: string;
}
export interface GetAgentRecommendationGenerationResponse {
  id: string;
  profileArn: string;
  name?: string;
  status: GenerationStatus;
  estimatedCompletionTime?: Date;
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
  additionalContext?: any;
  scope?: Scope;
  startedAt?: Date;
  endedAt?: Date;
  progress?: Progress;
  errorDetails?: ErrorDetails;
}
export interface GetAnswerInput {
  WorkloadId: string;
  LensAlias: string;
  QuestionId: string;
  MilestoneNumber?: number;
}
export type QuestionTitle = string;
export type QuestionDescription = string;
export type ImprovementPlanUrl = string;
export type HelpfulResourceUrl = string;
export type DisplayText = string;
export type ChoiceTitle = string;
export type ChoiceDescription = string;
export type ChoiceContentDisplayText = string;
export type ChoiceContentUrl = string;
export interface ChoiceContent {
  DisplayText?: string;
  Url?: string;
}
export type AdditionalResourceType = "HELPFUL_RESOURCE" | "IMPROVEMENT_PLAN" | (string & {});
export type Urls = ChoiceContent[];
export interface AdditionalResources {
  Type?: AdditionalResourceType;
  Content?: ChoiceContent[];
}
export type AdditionalResourcesList = AdditionalResources[];
export interface Choice {
  ChoiceId?: string;
  Title?: string;
  Description?: string;
  HelpfulResource?: ChoiceContent;
  ImprovementPlan?: ChoiceContent;
  AdditionalResources?: AdditionalResources[];
}
export type Choices = Choice[];
export type SelectedChoices = string[];
export type ChoiceStatus = "SELECTED" | "NOT_APPLICABLE" | "UNSELECTED" | (string & {});
export type ChoiceReason =
  | "OUT_OF_SCOPE"
  | "BUSINESS_PRIORITIES"
  | "ARCHITECTURE_CONSTRAINTS"
  | "OTHER"
  | "NONE"
  | (string & {});
export type ChoiceNotes = string;
export interface ChoiceAnswer {
  ChoiceId?: string;
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
  Notes?: string;
}
export type ChoiceAnswers = ChoiceAnswer[];
export type IsApplicable = boolean;
export type Risk = "UNANSWERED" | "HIGH" | "MEDIUM" | "NONE" | "NOT_APPLICABLE" | (string & {});
export type AnswerReason =
  | "OUT_OF_SCOPE"
  | "BUSINESS_PRIORITIES"
  | "ARCHITECTURE_CONSTRAINTS"
  | "OTHER"
  | "NONE"
  | (string & {});
export type JiraIssueUrl = string;
export interface JiraConfiguration {
  JiraIssueUrl?: string;
  LastSyncedTime?: Date;
}
export interface Answer {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  ImprovementPlanUrl?: string;
  HelpfulResourceUrl?: string;
  HelpfulResourceDisplayText?: string;
  Choices?: Choice[];
  SelectedChoices?: string[];
  ChoiceAnswers?: ChoiceAnswer[];
  IsApplicable?: boolean;
  Risk?: Risk;
  Notes?: string;
  Reason?: AnswerReason;
  JiraConfiguration?: JiraConfiguration;
}
export interface GetAnswerOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  Answer?: Answer;
}
export type ReportFormat = "PDF" | "JSON" | (string & {});
export type IncludeSharedResources = boolean;
export type NextToken = string;
export type MaxResults = number;
export interface GetConsolidatedReportInput {
  Format?: ReportFormat;
  IncludeSharedResources?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export type MetricType = "WORKLOAD" | (string & {});
export type Count = number;
export type RiskCounts = { [key in Risk]?: number };
export interface BestPractice {
  ChoiceId?: string;
  ChoiceTitle?: string;
}
export type BestPractices = BestPractice[];
export interface QuestionMetric {
  QuestionId?: string;
  Risk?: Risk;
  BestPractices?: BestPractice[];
}
export type QuestionMetrics = QuestionMetric[];
export interface PillarMetric {
  PillarId?: string;
  RiskCounts?: { [key: string]: number | undefined };
  Questions?: QuestionMetric[];
}
export type PillarMetrics = PillarMetric[];
export interface LensMetric {
  LensArn?: string;
  Pillars?: PillarMetric[];
  RiskCounts?: { [key: string]: number | undefined };
}
export type LensMetrics = LensMetric[];
export type LensesAppliedCount = number;
export interface ConsolidatedReportMetric {
  MetricType?: MetricType;
  RiskCounts?: { [key: string]: number | undefined };
  WorkloadId?: string;
  WorkloadName?: string;
  WorkloadArn?: string;
  UpdatedAt?: Date;
  Lenses?: LensMetric[];
  LensesAppliedCount?: number;
}
export type ConsolidatedReportMetrics = ConsolidatedReportMetric[];
export type Base64String = string;
export interface GetConsolidatedReportOutput {
  Metrics?: ConsolidatedReportMetric[];
  NextToken?: string;
  Base64String?: string;
}
export interface GetGlobalSettingsRequest {}
export type OrganizationSharingStatus = "ENABLED" | "DISABLED" | (string & {});
export type DiscoveryIntegrationStatus = "ENABLED" | "DISABLED" | (string & {});
export type IntegrationStatus = "CONFIGURED" | "NOT_CONFIGURED" | (string & {});
export type AccountJiraIssueManagementStatus = "ENABLED" | "DISABLED" | (string & {});
export type Subdomain = string;
export type StatusMessage = string;
export interface AccountJiraConfigurationOutput {
  IntegrationStatus?: IntegrationStatus;
  IssueManagementStatus?: AccountJiraIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  Subdomain?: string;
  JiraProjectKey?: string;
  StatusMessage?: string;
}
export interface GetGlobalSettingsOutput {
  OrganizationSharingStatus?: OrganizationSharingStatus;
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus;
  JiraConfiguration?: AccountJiraConfigurationOutput;
}
export interface GetLensInput {
  LensAlias: string;
  LensVersion?: string;
}
export type LensName = string;
export type LensDescription = string;
export type LensOwner = string;
export type ShareInvitationId = string;
export interface Lens {
  LensArn?: string;
  LensVersion?: string;
  Name?: string;
  Description?: string;
  Owner?: string;
  ShareInvitationId?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface GetLensOutput {
  Lens?: Lens;
}
export interface GetLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneNumber?: number;
}
export type LensStatus =
  | "CURRENT"
  | "NOT_CURRENT"
  | "DEPRECATED"
  | "DELETED"
  | "UNSHARED"
  | (string & {});
export type PillarName = string;
export interface PillarReviewSummary {
  PillarId?: string;
  PillarName?: string;
  Notes?: string;
  RiskCounts?: { [key: string]: number | undefined };
  PrioritizedRiskCounts?: { [key: string]: number | undefined };
}
export type PillarReviewSummaries = PillarReviewSummary[];
export type SelectedQuestionId = string;
export type SelectedQuestionIds = string[];
export interface SelectedPillar {
  PillarId?: string;
  SelectedQuestionIds?: string[];
}
export type SelectedPillars = SelectedPillar[];
export interface JiraSelectedQuestionConfiguration {
  SelectedPillars?: SelectedPillar[];
}
export interface WorkloadProfile {
  ProfileArn?: string;
  ProfileVersion?: string;
}
export type WorkloadProfiles = WorkloadProfile[];
export interface LensReview {
  LensAlias?: string;
  LensArn?: string;
  LensVersion?: string;
  LensName?: string;
  LensStatus?: LensStatus;
  PillarReviewSummaries?: PillarReviewSummary[];
  JiraConfiguration?: JiraSelectedQuestionConfiguration;
  UpdatedAt?: Date;
  Notes?: string;
  RiskCounts?: { [key: string]: number | undefined };
  NextToken?: string;
  Profiles?: WorkloadProfile[];
  PrioritizedRiskCounts?: { [key: string]: number | undefined };
}
export interface GetLensReviewOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensReview?: LensReview;
}
export interface GetLensReviewReportInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneNumber?: number;
}
export interface LensReviewReport {
  LensAlias?: string;
  LensArn?: string;
  Base64String?: string;
}
export interface GetLensReviewReportOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensReviewReport?: LensReviewReport;
}
export interface GetLensVersionDifferenceInput {
  LensAlias: string;
  BaseLensVersion?: string;
  TargetLensVersion?: string;
}
export type DifferenceStatus = "UPDATED" | "NEW" | "DELETED" | (string & {});
export interface QuestionDifference {
  QuestionId?: string;
  QuestionTitle?: string;
  DifferenceStatus?: DifferenceStatus;
}
export type QuestionDifferences = QuestionDifference[];
export interface PillarDifference {
  PillarId?: string;
  PillarName?: string;
  DifferenceStatus?: DifferenceStatus;
  QuestionDifferences?: QuestionDifference[];
}
export type PillarDifferences = PillarDifference[];
export interface VersionDifferences {
  PillarDifferences?: PillarDifference[];
}
export interface GetLensVersionDifferenceOutput {
  LensAlias?: string;
  LensArn?: string;
  BaseLensVersion?: string;
  TargetLensVersion?: string;
  LatestLensVersion?: string;
  VersionDifferences?: VersionDifferences;
}
export interface GetMilestoneInput {
  WorkloadId: string;
  MilestoneNumber: number;
}
export type IsReviewOwnerUpdateAcknowledged = boolean;
export type WorkloadImprovementStatus =
  | "NOT_APPLICABLE"
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "RISK_ACKNOWLEDGED"
  | (string & {});
export interface WorkloadJiraConfigurationOutput {
  IssueManagementStatus?: WorkloadIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
  StatusMessage?: string;
}
export interface Workload {
  WorkloadId?: string;
  WorkloadArn?: string;
  WorkloadName?: string;
  Description?: string;
  Environment?: WorkloadEnvironment;
  UpdatedAt?: Date;
  AccountIds?: string[];
  AwsRegions?: string[];
  NonAwsRegions?: string[];
  ArchitecturalDesign?: string;
  ReviewOwner?: string;
  ReviewRestrictionDate?: Date;
  IsReviewOwnerUpdateAcknowledged?: boolean;
  IndustryType?: string;
  Industry?: string;
  Notes?: string;
  ImprovementStatus?: WorkloadImprovementStatus;
  RiskCounts?: { [key: string]: number | undefined };
  PillarPriorities?: string[];
  Lenses?: string[];
  Owner?: string;
  ShareInvitationId?: string;
  Tags?: { [key: string]: string | undefined };
  DiscoveryConfig?: WorkloadDiscoveryConfig;
  Applications?: string[];
  Profiles?: WorkloadProfile[];
  PrioritizedRiskCounts?: { [key: string]: number | undefined };
  JiraConfiguration?: WorkloadJiraConfigurationOutput;
}
export interface Milestone {
  MilestoneNumber?: number;
  MilestoneName?: string;
  RecordedAt?: Date;
  Workload?: Workload;
}
export interface GetMilestoneOutput {
  WorkloadId?: string;
  Milestone?: Milestone;
}
export interface GetProfileInput {
  ProfileArn: string;
  ProfileVersion?: string;
}
export interface ProfileChoice {
  ChoiceId?: string;
  ChoiceTitle?: string;
  ChoiceDescription?: string;
}
export type ProfileQuestionChoices = ProfileChoice[];
export type SelectedChoiceIds = string[];
export type MinSelectedProfileChoices = number;
export type MaxSelectedProfileChoices = number;
export interface ProfileQuestion {
  QuestionId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  QuestionChoices?: ProfileChoice[];
  SelectedChoiceIds?: string[];
  MinSelectedChoices?: number;
  MaxSelectedChoices?: number;
}
export type ProfileQuestions = ProfileQuestion[];
export interface Profile {
  ProfileArn?: string;
  ProfileVersion?: string;
  ProfileName?: string;
  ProfileDescription?: string;
  ProfileQuestions?: ProfileQuestion[];
  Owner?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ShareInvitationId?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface GetProfileOutput {
  Profile?: Profile;
}
export interface GetProfileTemplateInput {}
export interface ProfileTemplateChoice {
  ChoiceId?: string;
  ChoiceTitle?: string;
  ChoiceDescription?: string;
}
export type ProfileTemplateQuestionChoices = ProfileTemplateChoice[];
export interface ProfileTemplateQuestion {
  QuestionId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  QuestionChoices?: ProfileTemplateChoice[];
  MinSelectedChoices?: number;
  MaxSelectedChoices?: number;
}
export type TemplateQuestions = ProfileTemplateQuestion[];
export interface ProfileTemplate {
  TemplateName?: string;
  TemplateQuestions?: ProfileTemplateQuestion[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface GetProfileTemplateOutput {
  ProfileTemplate?: ProfileTemplate;
}
export interface GetReviewTemplateInput {
  TemplateArn: string;
}
export type Question = "UNANSWERED" | "ANSWERED" | (string & {});
export type QuestionCounts = { [key in Question]?: number };
export type ReviewTemplateUpdateStatus = "CURRENT" | "LENS_NOT_CURRENT" | (string & {});
export interface ReviewTemplate {
  Description?: string;
  Lenses?: string[];
  Notes?: string;
  QuestionCounts?: { [key: string]: number | undefined };
  Owner?: string;
  UpdatedAt?: Date;
  TemplateArn?: string;
  TemplateName?: string;
  Tags?: { [key: string]: string | undefined };
  UpdateStatus?: ReviewTemplateUpdateStatus;
  ShareInvitationId?: string;
}
export interface GetReviewTemplateOutput {
  ReviewTemplate?: ReviewTemplate;
}
export interface GetReviewTemplateAnswerInput {
  TemplateArn: string;
  LensAlias: string;
  QuestionId: string;
}
export type ReviewTemplateAnswerStatus = "UNANSWERED" | "ANSWERED" | (string & {});
export interface ReviewTemplateAnswer {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  ImprovementPlanUrl?: string;
  HelpfulResourceUrl?: string;
  HelpfulResourceDisplayText?: string;
  Choices?: Choice[];
  SelectedChoices?: string[];
  ChoiceAnswers?: ChoiceAnswer[];
  IsApplicable?: boolean;
  AnswerStatus?: ReviewTemplateAnswerStatus;
  Notes?: string;
  Reason?: AnswerReason;
}
export interface GetReviewTemplateAnswerOutput {
  TemplateArn?: string;
  LensAlias?: string;
  Answer?: ReviewTemplateAnswer;
}
export interface GetReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
}
export interface ReviewTemplatePillarReviewSummary {
  PillarId?: string;
  PillarName?: string;
  Notes?: string;
  QuestionCounts?: { [key: string]: number | undefined };
}
export type ReviewTemplatePillarReviewSummaries = ReviewTemplatePillarReviewSummary[];
export interface ReviewTemplateLensReview {
  LensAlias?: string;
  LensArn?: string;
  LensVersion?: string;
  LensName?: string;
  LensStatus?: LensStatus;
  PillarReviewSummaries?: ReviewTemplatePillarReviewSummary[];
  UpdatedAt?: Date;
  Notes?: string;
  QuestionCounts?: { [key: string]: number | undefined };
  NextToken?: string;
}
export interface GetReviewTemplateLensReviewOutput {
  TemplateArn?: string;
  LensReview?: ReviewTemplateLensReview;
}
export interface GetWorkloadInput {
  WorkloadId: string;
}
export interface GetWorkloadOutput {
  Workload?: Workload;
}
export interface ImportLensInput {
  LensAlias?: string;
  JSONString?: string;
  ClientRequestToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export type ImportLensStatus = "IN_PROGRESS" | "COMPLETE" | "ERROR" | (string & {});
export interface ImportLensOutput {
  LensArn?: string;
  Status?: ImportLensStatus;
}
export interface ListAgentContextsRequest {
  profileArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type ContextSummaries = ContextSummary[];
export interface ListAgentContextsResponse {
  items: ContextSummary[];
  nextToken?: string;
}
export interface ListAgentGoalsRequest {
  profileArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type GoalSummaries = GoalSummary[];
export interface ListAgentGoalsResponse {
  items: GoalSummary[];
  nextToken?: string;
}
export interface ListAgentProfilesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface AgentProfileSummary {
  name: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  businessOverview?: string | redacted.Redacted<string>;
  pillars: Pillar[];
  deletionProtection?: boolean;
  executionRoleArn: string;
  aggregationConfiguration: AggregationConfiguration[];
  arn: string;
  eligibleForScheduledGeneration?: boolean;
  eligibleForArchitectureGeneration?: boolean;
  fieldErrors?: { [key: string]: string | undefined };
  tags?: Tag[];
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export type AgentProfileSummaries = AgentProfileSummary[];
export interface ListAgentProfilesResponse {
  items: AgentProfileSummary[];
  nextToken?: string;
}
export interface ListAgentRecommendationGenerationsRequest {
  profileArn: string;
  recommendationType?: RecommendationType;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentRecommendationGenerationSummary {
  id: string;
  profileArn: string;
  name?: string;
  status: GenerationStatus;
  estimatedCompletionTime?: Date;
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export type AgentRecommendationGenerationSummaries = AgentRecommendationGenerationSummary[];
export interface ListAgentRecommendationGenerationsResponse {
  items: AgentRecommendationGenerationSummary[];
  nextToken?: string;
}
export type RecommendationItemType = "AWS_RESOURCE" | "RECOMMENDATION" | (string & {});
export interface ListAgentRecommendationItemsRequest {
  recommendationArn: string;
  type?: RecommendationItemType;
  maxResults?: number;
  nextToken?: string;
}
export interface AgentRecommendationItemSummary {
  id: string;
  recommendationArn: string;
  type: RecommendationItemType;
  metadata: any;
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export type AgentRecommendationItemSummaries = AgentRecommendationItemSummary[];
export interface ListAgentRecommendationItemsResponse {
  items: AgentRecommendationItemSummary[];
  nextToken?: string;
}
export interface ListAgentRecommendationsRequest {
  profileArn: string;
  maxResults?: number;
  nextToken?: string;
  state?: RecommendationState;
  pillar?: Pillar;
}
export interface AgentRecommendationSummary {
  recommendationArn: string;
  profileArn: string;
  generationId?: string;
  title: string | redacted.Redacted<string>;
  description: string | redacted.Redacted<string>;
  type: RecommendationType;
  pillar: Pillar;
  priority: Priority;
  effort: Effort;
  status: RecommendationStatus;
  state: RecommendationState;
  updateReason?: string | redacted.Redacted<string>;
  impact: ImpactCategory;
  roi: Roi;
  numberOfResources?: number;
  awsServices?: string[];
  businessUnits?: string[];
  applications?: string[];
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export type AgentRecommendationSummaries = AgentRecommendationSummary[];
export interface ListAgentRecommendationsResponse {
  items: AgentRecommendationSummary[];
  nextToken?: string;
}
export type QuestionPriority = "PRIORITIZED" | "NONE" | (string & {});
export interface ListAnswersInput {
  WorkloadId: string;
  LensAlias: string;
  PillarId?: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
  QuestionPriority?: QuestionPriority;
}
export interface ChoiceAnswerSummary {
  ChoiceId?: string;
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
}
export type ChoiceAnswerSummaries = ChoiceAnswerSummary[];
export type QuestionType = "PRIORITIZED" | "NON_PRIORITIZED" | (string & {});
export interface AnswerSummary {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  Choices?: Choice[];
  SelectedChoices?: string[];
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[];
  IsApplicable?: boolean;
  Risk?: Risk;
  Reason?: AnswerReason;
  QuestionType?: QuestionType;
  JiraConfiguration?: JiraConfiguration;
}
export type AnswerSummaries = AnswerSummary[];
export interface ListAnswersOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  AnswerSummaries?: AnswerSummary[];
  NextToken?: string;
}
export interface ListCheckDetailsInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
  LensArn?: string;
  PillarId?: string;
  QuestionId?: string;
  ChoiceId?: string;
}
export type CheckId = string;
export type CheckName = string;
export type CheckDescription = string;
export type CheckProvider = "TRUSTED_ADVISOR" | (string & {});
export type CheckStatus =
  | "OKAY"
  | "WARNING"
  | "ERROR"
  | "NOT_AVAILABLE"
  | "FETCH_FAILED"
  | (string & {});
export type FlaggedResources = number;
export type CheckFailureReason =
  | "ASSUME_ROLE_ERROR"
  | "ACCESS_DENIED"
  | "UNKNOWN_ERROR"
  | "PREMIUM_SUPPORT_REQUIRED"
  | (string & {});
export interface CheckDetail {
  Id?: string;
  Name?: string;
  Description?: string;
  Provider?: CheckProvider;
  LensArn?: string;
  PillarId?: string;
  QuestionId?: string;
  ChoiceId?: string;
  Status?: CheckStatus;
  AccountId?: string;
  FlaggedResources?: number;
  Reason?: CheckFailureReason;
  UpdatedAt?: Date;
}
export type CheckDetails = CheckDetail[];
export interface ListCheckDetailsOutput {
  CheckDetails?: CheckDetail[];
  NextToken?: string;
}
export interface ListCheckSummariesInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
  LensArn?: string;
  PillarId?: string;
  QuestionId?: string;
  ChoiceId?: string;
}
export type CheckStatusCount = number;
export type AccountSummary = { [key in CheckStatus]?: number };
export interface CheckSummary {
  Id?: string;
  Name?: string;
  Provider?: CheckProvider;
  Description?: string;
  UpdatedAt?: Date;
  LensArn?: string;
  PillarId?: string;
  QuestionId?: string;
  ChoiceId?: string;
  Status?: CheckStatus;
  AccountSummary?: { [key: string]: number | undefined };
}
export type CheckSummaries = CheckSummary[];
export interface ListCheckSummariesOutput {
  CheckSummaries?: CheckSummary[];
  NextToken?: string;
}
export type LensType = "AWS_OFFICIAL" | "CUSTOM_SHARED" | "CUSTOM_SELF" | (string & {});
export interface ListLensesInput {
  NextToken?: string;
  MaxResults?: number;
  LensType?: LensType;
  LensStatus?: LensStatusType;
  LensName?: string;
}
export interface LensSummary {
  LensArn?: string;
  LensAlias?: string;
  LensName?: string;
  LensType?: LensType;
  Description?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  LensVersion?: string;
  Owner?: string;
  LensStatus?: LensStatus;
}
export type LensSummaries = LensSummary[];
export interface ListLensesOutput {
  LensSummaries?: LensSummary[];
  NextToken?: string;
}
export interface ListLensReviewImprovementsInput {
  WorkloadId: string;
  LensAlias: string;
  PillarId?: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
  QuestionPriority?: QuestionPriority;
}
export interface ChoiceImprovementPlan {
  ChoiceId?: string;
  DisplayText?: string;
  ImprovementPlanUrl?: string;
}
export type ChoiceImprovementPlans = ChoiceImprovementPlan[];
export interface ImprovementSummary {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  Risk?: Risk;
  ImprovementPlanUrl?: string;
  ImprovementPlans?: ChoiceImprovementPlan[];
  JiraConfiguration?: JiraConfiguration;
}
export type ImprovementSummaries = ImprovementSummary[];
export interface ListLensReviewImprovementsOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  ImprovementSummaries?: ImprovementSummary[];
  NextToken?: string;
}
export interface ListLensReviewsInput {
  WorkloadId: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
}
export interface LensReviewSummary {
  LensAlias?: string;
  LensArn?: string;
  LensVersion?: string;
  LensName?: string;
  LensStatus?: LensStatus;
  UpdatedAt?: Date;
  RiskCounts?: { [key: string]: number | undefined };
  Profiles?: WorkloadProfile[];
  PrioritizedRiskCounts?: { [key: string]: number | undefined };
}
export type LensReviewSummaries = LensReviewSummary[];
export interface ListLensReviewsOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensReviewSummaries?: LensReviewSummary[];
  NextToken?: string;
}
export type SharedWithPrefix = string;
export type ShareStatus =
  | "ACCEPTED"
  | "REJECTED"
  | "PENDING"
  | "REVOKED"
  | "EXPIRED"
  | "ASSOCIATING"
  | "ASSOCIATED"
  | "FAILED"
  | (string & {});
export interface ListLensSharesInput {
  LensAlias: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export interface LensShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type LensShareSummaries = LensShareSummary[];
export interface ListLensSharesOutput {
  LensShareSummaries?: LensShareSummary[];
  NextToken?: string;
}
export interface ListMilestonesInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface WorkloadSummary {
  WorkloadId?: string;
  WorkloadArn?: string;
  WorkloadName?: string;
  Owner?: string;
  UpdatedAt?: Date;
  Lenses?: string[];
  RiskCounts?: { [key: string]: number | undefined };
  ImprovementStatus?: WorkloadImprovementStatus;
  Profiles?: WorkloadProfile[];
  PrioritizedRiskCounts?: { [key: string]: number | undefined };
}
export interface MilestoneSummary {
  MilestoneNumber?: number;
  MilestoneName?: string;
  RecordedAt?: Date;
  WorkloadSummary?: WorkloadSummary;
}
export type MilestoneSummaries = MilestoneSummary[];
export interface ListMilestonesOutput {
  WorkloadId?: string;
  MilestoneSummaries?: MilestoneSummary[];
  NextToken?: string;
}
export type ResourceArn = string;
export interface ListNotificationsInput {
  WorkloadId?: string;
  NextToken?: string;
  MaxResults?: number;
  ResourceArn?: string;
}
export type NotificationType = "LENS_VERSION_UPGRADED" | "LENS_VERSION_DEPRECATED" | (string & {});
export interface LensUpgradeSummary {
  WorkloadId?: string;
  WorkloadName?: string;
  LensAlias?: string;
  LensArn?: string;
  CurrentLensVersion?: string;
  LatestLensVersion?: string;
  ResourceArn?: string;
  ResourceName?: string;
}
export interface NotificationSummary {
  Type?: NotificationType;
  LensUpgradeSummary?: LensUpgradeSummary;
}
export type NotificationSummaries = NotificationSummary[];
export interface ListNotificationsOutput {
  NotificationSummaries?: NotificationSummary[];
  NextToken?: string;
}
export interface ListProfileNotificationsInput {
  WorkloadId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ProfileNotificationType = "PROFILE_ANSWERS_UPDATED" | "PROFILE_DELETED" | (string & {});
export interface ProfileNotificationSummary {
  CurrentProfileVersion?: string;
  LatestProfileVersion?: string;
  Type?: ProfileNotificationType;
  ProfileArn?: string;
  ProfileName?: string;
  WorkloadId?: string;
  WorkloadName?: string;
}
export type ProfileNotificationSummaries = ProfileNotificationSummary[];
export interface ListProfileNotificationsOutput {
  NotificationSummaries?: ProfileNotificationSummary[];
  NextToken?: string;
}
export type ProfileNamePrefix = string;
export type ProfileOwnerType = "SELF" | "SHARED" | (string & {});
export interface ListProfilesInput {
  ProfileNamePrefix?: string;
  ProfileOwnerType?: ProfileOwnerType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ProfileSummary {
  ProfileArn?: string;
  ProfileVersion?: string;
  ProfileName?: string;
  ProfileDescription?: string;
  Owner?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type ProfileSummaries = ProfileSummary[];
export interface ListProfilesOutput {
  ProfileSummaries?: ProfileSummary[];
  NextToken?: string;
}
export interface ListProfileSharesInput {
  ProfileArn: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export interface ProfileShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type ProfileShareSummaries = ProfileShareSummary[];
export interface ListProfileSharesOutput {
  ProfileShareSummaries?: ProfileShareSummary[];
  NextToken?: string;
}
export interface ListReviewTemplateAnswersInput {
  TemplateArn: string;
  LensAlias: string;
  PillarId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ReviewTemplateAnswerSummary {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  Choices?: Choice[];
  SelectedChoices?: string[];
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[];
  IsApplicable?: boolean;
  AnswerStatus?: ReviewTemplateAnswerStatus;
  Reason?: AnswerReason;
  QuestionType?: QuestionType;
}
export type ReviewTemplateAnswerSummaries = ReviewTemplateAnswerSummary[];
export interface ListReviewTemplateAnswersOutput {
  TemplateArn?: string;
  LensAlias?: string;
  AnswerSummaries?: ReviewTemplateAnswerSummary[];
  NextToken?: string;
}
export interface ListReviewTemplatesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ReviewTemplateSummary {
  Description?: string;
  Lenses?: string[];
  Owner?: string;
  UpdatedAt?: Date;
  TemplateArn?: string;
  TemplateName?: string;
  UpdateStatus?: ReviewTemplateUpdateStatus;
}
export type ReviewTemplates = ReviewTemplateSummary[];
export interface ListReviewTemplatesOutput {
  ReviewTemplates?: ReviewTemplateSummary[];
  NextToken?: string;
}
export type WorkloadNamePrefix = string;
export type LensNamePrefix = string;
export type ShareResourceType = "WORKLOAD" | "LENS" | "PROFILE" | "TEMPLATE" | (string & {});
export type TemplateNamePrefix = string;
export interface ListShareInvitationsInput {
  WorkloadNamePrefix?: string;
  LensNamePrefix?: string;
  ShareResourceType?: ShareResourceType;
  NextToken?: string;
  MaxResults?: number;
  ProfileNamePrefix?: string;
  TemplateNamePrefix?: string;
}
export interface ShareInvitationSummary {
  ShareInvitationId?: string;
  SharedBy?: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  ShareResourceType?: ShareResourceType;
  WorkloadName?: string;
  WorkloadId?: string;
  LensName?: string;
  LensArn?: string;
  ProfileName?: string;
  ProfileArn?: string;
  TemplateName?: string;
  TemplateArn?: string;
}
export type ShareInvitationSummaries = ShareInvitationSummary[];
export interface ListShareInvitationsOutput {
  ShareInvitationSummaries?: ShareInvitationSummary[];
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  WorkloadArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: { [key: string]: string | undefined };
}
export interface ListTemplateSharesInput {
  TemplateArn: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export interface TemplateShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type TemplateShareSummaries = TemplateShareSummary[];
export interface ListTemplateSharesOutput {
  TemplateArn?: string;
  TemplateShareSummaries?: TemplateShareSummary[];
  NextToken?: string;
}
export interface ListWorkloadsInput {
  WorkloadNamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type WorkloadSummaries = WorkloadSummary[];
export interface ListWorkloadsOutput {
  WorkloadSummaries?: WorkloadSummary[];
  NextToken?: string;
}
export interface ListWorkloadSharesInput {
  WorkloadId: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export interface WorkloadShareSummary {
  ShareId?: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type WorkloadShareSummaries = WorkloadShareSummary[];
export interface ListWorkloadSharesOutput {
  WorkloadId?: string;
  WorkloadShareSummaries?: WorkloadShareSummary[];
  NextToken?: string;
}
export type RecommendationFeedbackType = "USEFUL" | "NOT_USEFUL" | (string & {});
export type FeedbackCategory =
  | "OTHER"
  | "RECOMMENDATION_NOT_RELEVANT"
  | "RESOURCE_NOT_IMPORTANT"
  | "RESOURCE_TYPE_NOT_IMPORTANT"
  | "RECOMMENDATION_INCORRECT"
  | (string & {});
export interface PutAgentRecommendationFeedbackRequest {
  recommendationArn: string;
  type: RecommendationFeedbackType;
  feedbackCategory?: FeedbackCategory;
  comments?: string;
}
export interface PutAgentRecommendationFeedbackResponse {}
export type RecommendationTypes = RecommendationType[];
export interface StartAgentRecommendationGenerationRequest {
  profileArn: string;
  types: RecommendationType[];
  name?: string;
  additionalContext?: any;
  scope: Scope;
}
export interface StartAgentRecommendationGenerationResponse {
  id: string;
  profileArn: string;
  name?: string;
  status: GenerationStatus;
  estimatedCompletionTime?: Date;
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export interface TagResourceInput {
  WorkloadArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface TagResourceOutput {}
export type TagKeyList = string[];
export interface UntagResourceInput {
  WorkloadArn: string;
  TagKeys?: string[];
}
export interface UntagResourceOutput {}
export interface UpdateAgentContextRequest {
  clientToken?: string;
  profileArn: string;
  id: string;
  title?: string | redacted.Redacted<string>;
  content?: ContextContent;
}
export interface UpdateAgentContextResponse {
  context: ContextSummary;
}
export interface UpdateAgentGoalRequest {
  clientToken?: string;
  profileArn: string;
  id: string;
  pillars?: Pillar[];
  title?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
}
export interface UpdateAgentGoalResponse {
  goal: GoalSummary;
}
export interface UpdateAgentProfileRequest {
  clientToken?: string;
  profileArn: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  executionRoleArn?: string;
  aggregationConfiguration?: AggregationConfiguration[];
  businessOverview?: string | redacted.Redacted<string>;
  pillars?: Pillar[];
  deletionProtection?: boolean;
}
export interface UpdateAgentProfileResponse {
  name: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  businessOverview?: string | redacted.Redacted<string>;
  pillars: Pillar[];
  deletionProtection?: boolean;
  executionRoleArn: string;
  aggregationConfiguration: AggregationConfiguration[];
  arn: string;
  eligibleForScheduledGeneration?: boolean;
  eligibleForArchitectureGeneration?: boolean;
  fieldErrors?: { [key: string]: string | undefined };
  tags?: Tag[];
  createdBy: string;
  createdAt: Date;
  lastModifiedBy?: string;
  lastModifiedAt?: Date;
}
export interface UpdateAgentRecommendationStatusRequest {
  recommendationArn: string;
  status: RecommendationStatus;
  updateReason?: string | redacted.Redacted<string>;
}
export interface UpdateAgentRecommendationStatusResponse {}
export interface ChoiceUpdate {
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
  Notes?: string;
}
export type ChoiceUpdates = { [key: string]: ChoiceUpdate | undefined };
export interface UpdateAnswerInput {
  WorkloadId: string;
  LensAlias: string;
  QuestionId: string;
  SelectedChoices?: string[];
  ChoiceUpdates?: { [key: string]: ChoiceUpdate | undefined };
  Notes?: string;
  IsApplicable?: boolean;
  Reason?: AnswerReason;
}
export interface UpdateAnswerOutput {
  WorkloadId?: string;
  LensAlias?: string;
  LensArn?: string;
  Answer?: Answer;
}
export type IntegrationStatusInput = "NOT_CONFIGURED" | (string & {});
export interface AccountJiraConfigurationInput {
  IssueManagementStatus?: AccountJiraIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
  IntegrationStatus?: IntegrationStatusInput;
}
export interface UpdateGlobalSettingsInput {
  OrganizationSharingStatus?: OrganizationSharingStatus;
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus;
  JiraConfiguration?: AccountJiraConfigurationInput;
}
export interface UpdateGlobalSettingsResponse {}
export type IntegratingService = "JIRA" | (string & {});
export interface UpdateIntegrationInput {
  WorkloadId: string;
  ClientRequestToken?: string;
  IntegratingService?: IntegratingService;
}
export interface UpdateIntegrationResponse {}
export type PillarNotes = { [key: string]: string | undefined };
export interface UpdateLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  LensNotes?: string;
  PillarNotes?: { [key: string]: string | undefined };
  JiraConfiguration?: JiraSelectedQuestionConfiguration;
}
export interface UpdateLensReviewOutput {
  WorkloadId?: string;
  LensReview?: LensReview;
}
export interface UpdateProfileInput {
  ProfileArn: string;
  ProfileDescription?: string;
  ProfileQuestions?: ProfileQuestionUpdate[];
}
export interface UpdateProfileOutput {
  Profile?: Profile;
}
export type ReviewTemplateLensAliases = string[];
export interface UpdateReviewTemplateInput {
  TemplateArn: string;
  TemplateName?: string;
  Description?: string;
  Notes?: string;
  LensesToAssociate?: string[];
  LensesToDisassociate?: string[];
}
export interface UpdateReviewTemplateOutput {
  ReviewTemplate?: ReviewTemplate;
}
export interface UpdateReviewTemplateAnswerInput {
  TemplateArn: string;
  LensAlias: string;
  QuestionId: string;
  SelectedChoices?: string[];
  ChoiceUpdates?: { [key: string]: ChoiceUpdate | undefined };
  Notes?: string;
  IsApplicable?: boolean;
  Reason?: AnswerReason;
}
export interface UpdateReviewTemplateAnswerOutput {
  TemplateArn?: string;
  LensAlias?: string;
  Answer?: ReviewTemplateAnswer;
}
export interface UpdateReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
  LensNotes?: string;
  PillarNotes?: { [key: string]: string | undefined };
}
export interface UpdateReviewTemplateLensReviewOutput {
  TemplateArn?: string;
  LensReview?: ReviewTemplateLensReview;
}
export type ShareInvitationAction = "ACCEPT" | "REJECT" | (string & {});
export interface UpdateShareInvitationInput {
  ShareInvitationId: string;
  ShareInvitationAction?: ShareInvitationAction;
}
export interface ShareInvitation {
  ShareInvitationId?: string;
  ShareResourceType?: ShareResourceType;
  WorkloadId?: string;
  LensAlias?: string;
  LensArn?: string;
  ProfileArn?: string;
  TemplateArn?: string;
}
export interface UpdateShareInvitationOutput {
  ShareInvitation?: ShareInvitation;
}
export interface UpdateWorkloadInput {
  WorkloadId: string;
  WorkloadName?: string;
  Description?: string;
  Environment?: WorkloadEnvironment;
  AccountIds?: string[];
  AwsRegions?: string[];
  NonAwsRegions?: string[];
  PillarPriorities?: string[];
  ArchitecturalDesign?: string;
  ReviewOwner?: string;
  IsReviewOwnerUpdateAcknowledged?: boolean;
  IndustryType?: string;
  Industry?: string;
  Notes?: string;
  ImprovementStatus?: WorkloadImprovementStatus;
  DiscoveryConfig?: WorkloadDiscoveryConfig;
  Applications?: string[];
  JiraConfiguration?: WorkloadJiraConfigurationInput;
}
export interface UpdateWorkloadOutput {
  Workload?: Workload;
}
export interface UpdateWorkloadShareInput {
  ShareId: string;
  WorkloadId: string;
  PermissionType?: PermissionType;
}
export interface WorkloadShare {
  ShareId?: string;
  SharedBy?: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  Status?: ShareStatus;
  WorkloadName?: string;
  WorkloadId?: string;
}
export interface UpdateWorkloadShareOutput {
  WorkloadId?: string;
  WorkloadShare?: WorkloadShare;
}
export interface UpgradeLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneName?: string;
  ClientRequestToken?: string;
}
export interface UpgradeLensReviewResponse {}
export interface UpgradeProfileVersionInput {
  WorkloadId: string;
  ProfileArn: string;
  MilestoneName?: string;
  ClientRequestToken?: string;
}
export interface UpgradeProfileVersionResponse {}
export interface UpgradeReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
  ClientRequestToken?: string;
}
export interface UpgradeReviewTemplateLensReviewResponse {}
export type ExceptionMessage = string;
export type ExceptionResourceId = string;
export type ExceptionResourceType = string;
export type QuotaCode = string;
export type ServiceCode = string;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | (string & {});
export type ValidationExceptionFieldName = string;
export interface ValidationExceptionField {
  Name?: string;
  Message?: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AssociateLensesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associate a lens to a workload.
 *
 * Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.
 *
 * **Disclaimer**
 *
 * By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.
 */
export const associateLenses: API.OperationMethod<
  AssociateLensesInput,
  AssociateLensesResponse,
  AssociateLensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<AssociateLensesInput>,
  output: __S(2, __c0, 2) as any as S.Schema<AssociateLensesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateLenses",
}));

export type AssociateProfilesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associate a profile with a workload.
 */
export const associateProfiles: API.OperationMethod<
  AssociateProfilesInput,
  AssociateProfilesResponse,
  AssociateProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<AssociateProfilesInput>,
  output: __S(2, __c0, 2) as any as S.Schema<AssociateProfilesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateProfiles",
}));

export type CreateAgentContextError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a context associated with an optimization profile. Contexts provide application and environment information used during recommendation generation.
 */
export const createAgentContext: API.OperationMethod<
  CreateAgentContextRequest,
  CreateAgentContextResponse,
  CreateAgentContextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<CreateAgentContextRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<CreateAgentContextResponse>,
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
  operationName: "CreateAgentContext",
}));

export type CreateAgentGoalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an optimization goal associated with a profile. Goals define specific targets and objectives for the optimization process.
 */
export const createAgentGoal: API.OperationMethod<
  CreateAgentGoalRequest,
  CreateAgentGoalResponse,
  CreateAgentGoalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<CreateAgentGoalRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<CreateAgentGoalResponse>,
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
  operationName: "CreateAgentGoal",
}));

export type CreateAgentProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an optimization profile that defines the scope and configuration for generating recommendations. A profile specifies the execution role, target pillars, and aggregation settings for analyzing your Amazon Web Services resources.
 */
export const createAgentProfile: API.OperationMethod<
  CreateAgentProfileRequest,
  CreateAgentProfileResponse,
  CreateAgentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<CreateAgentProfileRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<CreateAgentProfileResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAgentProfile",
}));

export type CreateLensShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a lens share.
 *
 * The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.
 *
 * Shared access to a lens is not removed until the lens invitation is deleted.
 *
 * If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.
 *
 * For more information, see Sharing a custom lens in the *Well-Architected Tool User Guide*.
 *
 * **Disclaimer**
 *
 * By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.
 */
export const createLensShare: API.OperationMethod<
  CreateLensShareInput,
  CreateLensShareOutput,
  CreateLensShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<CreateLensShareInput>,
  output: __S(20, __c2, 4) as any as S.Schema<CreateLensShareOutput>,
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
  operationName: "CreateLensShare",
}));

export type CreateLensVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new lens version.
 *
 * A lens can have up to 100 versions.
 *
 * Use this operation to publish a new lens version after you have imported a lens. The `LensAlias` is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it.
 */
export const createLensVersion: API.OperationMethod<
  CreateLensVersionInput,
  CreateLensVersionOutput,
  CreateLensVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<CreateLensVersionInput>,
  output: __S(22, __c2, 6) as any as S.Schema<CreateLensVersionOutput>,
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
  operationName: "CreateLensVersion",
}));

export type CreateMilestoneError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a milestone for an existing workload.
 */
export const createMilestone: API.OperationMethod<
  CreateMilestoneInput,
  CreateMilestoneOutput,
  CreateMilestoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<CreateMilestoneInput>,
  output: __S(24, __c3, 0) as any as S.Schema<CreateMilestoneOutput>,
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
  operationName: "CreateMilestone",
}));

export type CreateProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a profile.
 */
export const createProfile: API.OperationMethod<
  CreateProfileInput,
  CreateProfileOutput,
  CreateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<CreateProfileInput>,
  output: __S(29, __c3, 5) as any as S.Schema<CreateProfileOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProfile",
}));

export type CreateProfileShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a profile share.
 */
export const createProfileShare: API.OperationMethod<
  CreateProfileShareInput,
  CreateProfileShareOutput,
  CreateProfileShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<CreateProfileShareInput>,
  output: __S(31, __c3, 7) as any as S.Schema<CreateProfileShareOutput>,
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
  operationName: "CreateProfileShare",
}));

export type CreateReviewTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a review template.
 *
 * **Disclaimer**
 *
 * Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your review templates. If your review template or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.
 */
export const createReviewTemplate: API.OperationMethod<
  CreateReviewTemplateInput,
  CreateReviewTemplateOutput,
  CreateReviewTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<CreateReviewTemplateInput>,
  output: __S(33, __c4, 1) as any as S.Schema<CreateReviewTemplateOutput>,
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
  operationName: "CreateReviewTemplate",
}));

export type CreateTemplateShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a review template share.
 *
 * The owner of a review template can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region.
 *
 * Shared access to a review template is not removed until the review template share invitation is deleted.
 *
 * If you share a review template with an organization or OU, all accounts in the organization or OU are granted access to the review template.
 *
 * **Disclaimer**
 *
 * By sharing your review template with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your review template available to those other accounts.
 */
export const createTemplateShare: API.OperationMethod<
  CreateTemplateShareInput,
  CreateTemplateShareOutput,
  CreateTemplateShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<CreateTemplateShareInput>,
  output: __S(35, __c4, 3) as any as S.Schema<CreateTemplateShareOutput>,
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
  operationName: "CreateTemplateShare",
}));

export type CreateWorkloadError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new workload.
 *
 * The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.
 *
 * For more information, see Defining a Workload in the *Well-Architected Tool User Guide*.
 *
 * Either `AwsRegions`, `NonAwsRegions`, or both must be specified when creating a workload.
 *
 * You also must specify `ReviewOwner`, even though the parameter is listed as not being required in the following section.
 *
 * When creating a workload using a review template, you must have the following IAM permissions:
 *
 * - `wellarchitected:GetReviewTemplate`
 *
 * - `wellarchitected:GetReviewTemplateAnswer`
 *
 * - `wellarchitected:ListReviewTemplateAnswers`
 *
 * - `wellarchitected:GetReviewTemplateLensReview`
 */
export const createWorkload: API.OperationMethod<
  CreateWorkloadInput,
  CreateWorkloadOutput,
  CreateWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<CreateWorkloadInput>,
  output: __S(39, __c4, 7) as any as S.Schema<CreateWorkloadOutput>,
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
  operationName: "CreateWorkload",
}));

export type CreateWorkloadShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a workload share.
 *
 * The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.
 *
 * If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.
 *
 * For more information, see Sharing a workload in the *Well-Architected Tool User Guide*.
 */
export const createWorkloadShare: API.OperationMethod<
  CreateWorkloadShareInput,
  CreateWorkloadShareOutput,
  CreateWorkloadShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<CreateWorkloadShareInput>,
  output: __S(41, __c5, 1) as any as S.Schema<CreateWorkloadShareOutput>,
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
  operationName: "CreateWorkloadShare",
}));

export type DeleteAgentContextError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a context associated with a profile.
 */
export const deleteAgentContext: API.OperationMethod<
  DeleteAgentContextRequest,
  DeleteAgentContextResponse,
  DeleteAgentContextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<DeleteAgentContextRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteAgentContextResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentContext",
}));

export type DeleteAgentGoalError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an optimization goal from a profile.
 */
export const deleteAgentGoal: API.OperationMethod<
  DeleteAgentGoalRequest,
  DeleteAgentGoalResponse,
  DeleteAgentGoalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<DeleteAgentGoalRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteAgentGoalResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentGoal",
}));

export type DeleteAgentProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an optimization profile and its associated configuration. This action cannot be undone.
 */
export const deleteAgentProfile: API.OperationMethod<
  DeleteAgentProfileRequest,
  DeleteAgentProfileResponse,
  DeleteAgentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<DeleteAgentProfileRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteAgentProfileResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentProfile",
}));

export type DeleteLensError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an existing lens.
 *
 * Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.
 *
 * **Disclaimer**
 *
 * By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.
 */
export const deleteLens: API.OperationMethod<
  DeleteLensInput,
  DeleteLensResponse,
  DeleteLensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<DeleteLensInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteLensResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLens",
}));

export type DeleteLensShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a lens share.
 *
 * After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.
 *
 * **Disclaimer**
 *
 * By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.
 */
export const deleteLensShare: API.OperationMethod<
  DeleteLensShareInput,
  DeleteLensShareResponse,
  DeleteLensShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<DeleteLensShareInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteLensShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLensShare",
}));

export type DeleteProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a profile.
 *
 * **Disclaimer**
 *
 * By sharing your profile with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your profile available to those other accounts. Those other accounts may continue to access and use your shared profile even if you delete the profile from your own Amazon Web Services account or terminate your Amazon Web Services account.
 */
export const deleteProfile: API.OperationMethod<
  DeleteProfileInput,
  DeleteProfileResponse,
  DeleteProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<DeleteProfileInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteProfileResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfile",
}));

export type DeleteProfileShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a profile share.
 */
export const deleteProfileShare: API.OperationMethod<
  DeleteProfileShareInput,
  DeleteProfileShareResponse,
  DeleteProfileShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<DeleteProfileShareInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteProfileShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfileShare",
}));

export type DeleteReviewTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a review template.
 *
 * Only the owner of a review template can delete it.
 *
 * After the review template is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the review template with will no longer be able to apply it to new workloads.
 */
export const deleteReviewTemplate: API.OperationMethod<
  DeleteReviewTemplateInput,
  DeleteReviewTemplateResponse,
  DeleteReviewTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<DeleteReviewTemplateInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteReviewTemplateResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReviewTemplate",
}));

export type DeleteTemplateShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a review template share.
 *
 * After the review template share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the review template with will no longer be able to apply it to new workloads.
 */
export const deleteTemplateShare: API.OperationMethod<
  DeleteTemplateShareInput,
  DeleteTemplateShareResponse,
  DeleteTemplateShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<DeleteTemplateShareInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteTemplateShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTemplateShare",
}));

export type DeleteWorkloadError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an existing workload.
 */
export const deleteWorkload: API.OperationMethod<
  DeleteWorkloadInput,
  DeleteWorkloadResponse,
  DeleteWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<DeleteWorkloadInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteWorkloadResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkload",
}));

export type DeleteWorkloadShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a workload share.
 */
export const deleteWorkloadShare: API.OperationMethod<
  DeleteWorkloadShareInput,
  DeleteWorkloadShareResponse,
  DeleteWorkloadShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<DeleteWorkloadShareInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeleteWorkloadShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkloadShare",
}));

export type DisassociateLensesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociate a lens from a workload.
 *
 * Up to 10 lenses can be disassociated from a workload in a single API operation.
 *
 * The Amazon Web Services Well-Architected Framework lens (`wellarchitected`) cannot be removed from a workload.
 */
export const disassociateLenses: API.OperationMethod<
  DisassociateLensesInput,
  DisassociateLensesResponse,
  DisassociateLensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<DisassociateLensesInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DisassociateLensesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateLenses",
}));

export type DisassociateProfilesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociate a profile from a workload.
 */
export const disassociateProfiles: API.OperationMethod<
  DisassociateProfilesInput,
  DisassociateProfilesResponse,
  DisassociateProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<DisassociateProfilesInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DisassociateProfilesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateProfiles",
}));

export type ExportLensError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Export an existing lens.
 *
 * Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.
 *
 * Lenses are defined in JSON. For more information, see JSON format specification in the *Well-Architected Tool User Guide*.
 *
 * **Disclaimer**
 *
 * Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.
 */
export const exportLens: API.OperationMethod<
  ExportLensInput,
  ExportLensOutput,
  ExportLensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<ExportLensInput>,
  output: __S(56, __c7, 0) as any as S.Schema<ExportLensOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportLens",
}));

export type GetAgentContextError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific context associated with a profile.
 */
export const getAgentContext: API.OperationMethod<
  GetAgentContextRequest,
  GetAgentContextResponse,
  GetAgentContextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<GetAgentContextRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<GetAgentContextResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentContext",
}));

export type GetAgentGoalError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific optimization goal.
 */
export const getAgentGoal: API.OperationMethod<
  GetAgentGoalRequest,
  GetAgentGoalResponse,
  GetAgentGoalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<GetAgentGoalRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<GetAgentGoalResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentGoal",
}));

export type GetAgentProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about an optimization profile, including its configuration and metadata.
 */
export const getAgentProfile: API.OperationMethod<
  GetAgentProfileRequest,
  GetAgentProfileResponse,
  GetAgentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<GetAgentProfileRequest>,
  output: __S(61, __c7, 5) as any as S.Schema<GetAgentProfileResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentProfile",
}));

export type GetAgentRecommendationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific optimization recommendation, including its impact analysis, content, and implementation guidance.
 */
export const getAgentRecommendation: API.OperationMethod<
  GetAgentRecommendationRequest,
  GetAgentRecommendationResponse,
  GetAgentRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<GetAgentRecommendationRequest>,
  output: __S(79, __c9, 7) as any as S.Schema<GetAgentRecommendationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentRecommendation",
}));

export type GetAgentRecommendationGenerationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a recommendation generation process, including its status, progress, and results. Recommendation generation is asynchronous: poll this operation until status reaches a terminal value of COMPLETED (results are ready) or ERROR (see errorDetails). Intermediate values are QUEUED and IN_PROGRESS.
 */
export const getAgentRecommendationGeneration: API.OperationMethod<
  GetAgentRecommendationGenerationRequest,
  GetAgentRecommendationGenerationResponse,
  GetAgentRecommendationGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<GetAgentRecommendationGenerationRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<GetAgentRecommendationGenerationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentRecommendationGeneration",
}));

export type GetAnswerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the answer to a specific question in a workload review.
 */
export const getAnswer: API.OperationMethod<
  GetAnswerInput,
  GetAnswerOutput,
  GetAnswerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<GetAnswerInput>,
  output: __S(98, __c12, 2) as any as S.Schema<GetAnswerOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnswer",
}));

export type GetConsolidatedReportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a consolidated report of your workloads.
 *
 * You can optionally choose to include workloads that have been shared with you.
 */
export const getConsolidatedReport: API.PaginatedOperationMethod<
  GetConsolidatedReportInput,
  GetConsolidatedReportOutput,
  GetConsolidatedReportError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<GetConsolidatedReportInput>,
  output: __S(111, __c13, 7) as any as S.Schema<GetConsolidatedReportOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConsolidatedReport",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetGlobalSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Global settings for all workloads.
 */
export const getGlobalSettings: API.OperationMethod<
  GetGlobalSettingsRequest,
  GetGlobalSettingsOutput,
  GetGlobalSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<GetGlobalSettingsRequest>,
  output: __S(114, __c14, 2) as any as S.Schema<GetGlobalSettingsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGlobalSettings",
}));

export type GetLensError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get an existing lens.
 */
export const getLens: API.OperationMethod<
  GetLensInput,
  GetLensOutput,
  GetLensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<GetLensInput>,
  output: __S(117, __c14, 5) as any as S.Schema<GetLensOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLens",
}));

export type GetLensReviewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get lens review.
 */
export const getLensReview: API.OperationMethod<
  GetLensReviewInput,
  GetLensReviewOutput,
  GetLensReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<GetLensReviewInput>,
  output: __S(126, __c15, 6) as any as S.Schema<GetLensReviewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLensReview",
}));

export type GetLensReviewReportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get lens review report.
 */
export const getLensReviewReport: API.OperationMethod<
  GetLensReviewReportInput,
  GetLensReviewReportOutput,
  GetLensReviewReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<GetLensReviewReportInput>,
  output: __S(129, __c16, 1) as any as S.Schema<GetLensReviewReportOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLensReviewReport",
}));

export type GetLensVersionDifferenceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get lens version differences.
 */
export const getLensVersionDifference: API.OperationMethod<
  GetLensVersionDifferenceInput,
  GetLensVersionDifferenceOutput,
  GetLensVersionDifferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<GetLensVersionDifferenceInput>,
  output: __S(136, __c17, 0) as any as S.Schema<GetLensVersionDifferenceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLensVersionDifference",
}));

export type GetMilestoneError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a milestone for an existing workload.
 */
export const getMilestone: API.OperationMethod<
  GetMilestoneInput,
  GetMilestoneOutput,
  GetMilestoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<GetMilestoneInput>,
  output: __S(141, __c17, 5) as any as S.Schema<GetMilestoneOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMilestone",
}));

export type GetProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get profile information.
 */
export const getProfile: API.OperationMethod<
  GetProfileInput,
  GetProfileOutput,
  GetProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<GetProfileInput>,
  output: __S(148, __c18, 4) as any as S.Schema<GetProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfile",
}));

export type GetProfileTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get profile template.
 */
export const getProfileTemplate: API.OperationMethod<
  GetProfileTemplateInput,
  GetProfileTemplateOutput,
  GetProfileTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(149, __c18, 5) as any as S.Schema<GetProfileTemplateInput>,
  output: __S(153, __c19, 1) as any as S.Schema<GetProfileTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfileTemplate",
}));

export type GetReviewTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get review template.
 */
export const getReviewTemplate: API.OperationMethod<
  GetReviewTemplateInput,
  GetReviewTemplateOutput,
  GetReviewTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<GetReviewTemplateInput>,
  output: __S(157, __c19, 5) as any as S.Schema<GetReviewTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReviewTemplate",
}));

export type GetReviewTemplateAnswerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get review template answer.
 */
export const getReviewTemplateAnswer: API.OperationMethod<
  GetReviewTemplateAnswerInput,
  GetReviewTemplateAnswerOutput,
  GetReviewTemplateAnswerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158, __c19, 6) as any as S.Schema<GetReviewTemplateAnswerInput>,
  output: __S(160, __c20, 0) as any as S.Schema<GetReviewTemplateAnswerOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReviewTemplateAnswer",
}));

export type GetReviewTemplateLensReviewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a lens review associated with a review template.
 */
export const getReviewTemplateLensReview: API.OperationMethod<
  GetReviewTemplateLensReviewInput,
  GetReviewTemplateLensReviewOutput,
  GetReviewTemplateLensReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<GetReviewTemplateLensReviewInput>,
  output: __S(165, __c20, 5) as any as S.Schema<GetReviewTemplateLensReviewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReviewTemplateLensReview",
}));

export type GetWorkloadError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get an existing workload.
 */
export const getWorkload: API.OperationMethod<
  GetWorkloadInput,
  GetWorkloadOutput,
  GetWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<GetWorkloadInput>,
  output: __S(167, __c20, 7) as any as S.Schema<GetWorkloadOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkload",
}));

export type ImportLensError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Import a new custom lens or update an existing custom lens.
 *
 * To update an existing custom lens, specify its ARN as the `LensAlias`. If no ARN is specified, a new custom lens is created.
 *
 * The new or updated lens will have a status of `DRAFT`. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with CreateLensVersion.
 *
 * Lenses are defined in JSON. For more information, see JSON format specification in the *Well-Architected Tool User Guide*.
 *
 * A custom lens cannot exceed 500 KB in size.
 *
 * **Disclaimer**
 *
 * Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.
 */
export const importLens: API.OperationMethod<
  ImportLensInput,
  ImportLensOutput,
  ImportLensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168, __c21, 0) as any as S.Schema<ImportLensInput>,
  output: __S(169, __c21, 1) as any as S.Schema<ImportLensOutput>,
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
  operationName: "ImportLens",
}));

export type ListAgentContextsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists contexts associated with a profile.
 */
export const listAgentContexts: API.PaginatedOperationMethod<
  ListAgentContextsRequest,
  ListAgentContextsResponse,
  ListAgentContextsError,
  Credentials | HttpClient.HttpClient,
  ContextSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<ListAgentContextsRequest>,
  output: __S(172, __c21, 4) as any as S.Schema<ListAgentContextsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentContexts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentGoalsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists optimization goals associated with a specified profile. Goals define specific targets and objectives for the optimization process.
 */
export const listAgentGoals: API.PaginatedOperationMethod<
  ListAgentGoalsRequest,
  ListAgentGoalsResponse,
  ListAgentGoalsError,
  Credentials | HttpClient.HttpClient,
  GoalSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<ListAgentGoalsRequest>,
  output: __S(175, __c21, 7) as any as S.Schema<ListAgentGoalsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentGoals",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists optimization profiles in your account. Profiles define the scope and configuration for generating optimization recommendations.
 */
export const listAgentProfiles: API.PaginatedOperationMethod<
  ListAgentProfilesRequest,
  ListAgentProfilesResponse,
  ListAgentProfilesError,
  Credentials | HttpClient.HttpClient,
  AgentProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<ListAgentProfilesRequest>,
  output: __S(178, __c22, 2) as any as S.Schema<ListAgentProfilesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentRecommendationGenerationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists recommendation generation processes for a specified profile.
 */
export const listAgentRecommendationGenerations: API.PaginatedOperationMethod<
  ListAgentRecommendationGenerationsRequest,
  ListAgentRecommendationGenerationsResponse,
  ListAgentRecommendationGenerationsError,
  Credentials | HttpClient.HttpClient,
  AgentRecommendationGenerationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<ListAgentRecommendationGenerationsRequest>,
  output: __S(182, __c22, 6) as any as S.Schema<ListAgentRecommendationGenerationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentRecommendationGenerations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentRecommendationItemsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists recommendation items for a specific recommendation. Recommendation items provide detailed information about individual optimization opportunities.
 */
export const listAgentRecommendationItems: API.PaginatedOperationMethod<
  ListAgentRecommendationItemsRequest,
  ListAgentRecommendationItemsResponse,
  ListAgentRecommendationItemsError,
  Credentials | HttpClient.HttpClient,
  AgentRecommendationItemSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<ListAgentRecommendationItemsRequest>,
  output: __S(186, __c23, 2) as any as S.Schema<ListAgentRecommendationItemsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentRecommendationItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAgentRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists active optimization recommendations for a specified profile with optional filtering by state.
 */
export const listAgentRecommendations: API.PaginatedOperationMethod<
  ListAgentRecommendationsRequest,
  ListAgentRecommendationsResponse,
  ListAgentRecommendationsError,
  Credentials | HttpClient.HttpClient,
  AgentRecommendationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<ListAgentRecommendationsRequest>,
  output: __S(190, __c23, 6) as any as S.Schema<ListAgentRecommendationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAnswersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of answers for a particular workload and lens.
 */
export const listAnswers: API.PaginatedOperationMethod<
  ListAnswersInput,
  ListAnswersOutput,
  ListAnswersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<ListAnswersInput>,
  output: __S(196, __c24, 4) as any as S.Schema<ListAnswersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnswers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCheckDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of Trusted Advisor check details by account related to the workload.
 */
export const listCheckDetails: API.PaginatedOperationMethod<
  ListCheckDetailsInput,
  ListCheckDetailsOutput,
  ListCheckDetailsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(197, __c24, 5) as any as S.Schema<ListCheckDetailsInput>,
  output: __S(200, __c25, 0) as any as S.Schema<ListCheckDetailsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCheckDetails",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCheckSummariesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of Trusted Advisor checks summarized for all accounts related to the workload.
 */
export const listCheckSummaries: API.PaginatedOperationMethod<
  ListCheckSummariesInput,
  ListCheckSummariesOutput,
  ListCheckSummariesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(201, __c25, 1) as any as S.Schema<ListCheckSummariesInput>,
  output: __S(204, __c25, 4) as any as S.Schema<ListCheckSummariesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCheckSummaries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLensesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the available lenses.
 */
export const listLenses: API.PaginatedOperationMethod<
  ListLensesInput,
  ListLensesOutput,
  ListLensesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(205, __c25, 5) as any as S.Schema<ListLensesInput>,
  output: __S(208, __c26, 0) as any as S.Schema<ListLensesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLenses",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLensReviewImprovementsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the improvements of a particular lens review.
 */
export const listLensReviewImprovements: API.PaginatedOperationMethod<
  ListLensReviewImprovementsInput,
  ListLensReviewImprovementsOutput,
  ListLensReviewImprovementsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(209, __c26, 1) as any as S.Schema<ListLensReviewImprovementsInput>,
  output: __S(214, __c26, 6) as any as S.Schema<ListLensReviewImprovementsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLensReviewImprovements",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLensReviewsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List lens reviews for a particular workload.
 */
export const listLensReviews: API.PaginatedOperationMethod<
  ListLensReviewsInput,
  ListLensReviewsOutput,
  ListLensReviewsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(215, __c26, 7) as any as S.Schema<ListLensReviewsInput>,
  output: __S(218, __c27, 2) as any as S.Schema<ListLensReviewsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLensReviews",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLensSharesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the lens shares associated with the lens.
 */
export const listLensShares: API.PaginatedOperationMethod<
  ListLensSharesInput,
  ListLensSharesOutput,
  ListLensSharesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(219, __c27, 3) as any as S.Schema<ListLensSharesInput>,
  output: __S(222, __c27, 6) as any as S.Schema<ListLensSharesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLensShares",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMilestonesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all milestones for an existing workload.
 */
export const listMilestones: API.PaginatedOperationMethod<
  ListMilestonesInput,
  ListMilestonesOutput,
  ListMilestonesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(223, __c27, 7) as any as S.Schema<ListMilestonesInput>,
  output: __S(227, __c28, 3) as any as S.Schema<ListMilestonesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMilestones",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNotificationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List lens notifications.
 */
export const listNotifications: API.PaginatedOperationMethod<
  ListNotificationsInput,
  ListNotificationsOutput,
  ListNotificationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(228, __c28, 4) as any as S.Schema<ListNotificationsInput>,
  output: __S(232, __c29, 0) as any as S.Schema<ListNotificationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotifications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProfileNotificationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List profile notifications.
 */
export const listProfileNotifications: API.PaginatedOperationMethod<
  ListProfileNotificationsInput,
  ListProfileNotificationsOutput,
  ListProfileNotificationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(233, __c29, 1) as any as S.Schema<ListProfileNotificationsInput>,
  output: __S(236, __c29, 4) as any as S.Schema<ListProfileNotificationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileNotifications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List profiles.
 */
export const listProfiles: API.PaginatedOperationMethod<
  ListProfilesInput,
  ListProfilesOutput,
  ListProfilesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(237, __c29, 5) as any as S.Schema<ListProfilesInput>,
  output: __S(240, __c30, 0) as any as S.Schema<ListProfilesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProfileSharesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List profile shares.
 */
export const listProfileShares: API.PaginatedOperationMethod<
  ListProfileSharesInput,
  ListProfileSharesOutput,
  ListProfileSharesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<ListProfileSharesInput>,
  output: __S(242, __c30, 2) as any as S.Schema<ListProfileSharesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileShares",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListReviewTemplateAnswersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the answers of a review template.
 */
export const listReviewTemplateAnswers: API.PaginatedOperationMethod<
  ListReviewTemplateAnswersInput,
  ListReviewTemplateAnswersOutput,
  ListReviewTemplateAnswersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(243, __c30, 3) as any as S.Schema<ListReviewTemplateAnswersInput>,
  output: __S(246, __c30, 6) as any as S.Schema<ListReviewTemplateAnswersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReviewTemplateAnswers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListReviewTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List review templates.
 */
export const listReviewTemplates: API.PaginatedOperationMethod<
  ListReviewTemplatesInput,
  ListReviewTemplatesOutput,
  ListReviewTemplatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(247, __c30, 7) as any as S.Schema<ListReviewTemplatesInput>,
  output: __S(250, __c31, 2) as any as S.Schema<ListReviewTemplatesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReviewTemplates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListShareInvitationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the share invitations.
 *
 * `WorkloadNamePrefix`, `LensNamePrefix`, `ProfileNamePrefix`, and `TemplateNamePrefix` are mutually exclusive. Use the parameter that matches your `ShareResourceType`.
 */
export const listShareInvitations: API.PaginatedOperationMethod<
  ListShareInvitationsInput,
  ListShareInvitationsOutput,
  ListShareInvitationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(251, __c31, 3) as any as S.Schema<ListShareInvitationsInput>,
  output: __S(254, __c31, 6) as any as S.Schema<ListShareInvitationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListShareInvitations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * List the tags for a resource.
 *
 * The WorkloadArn parameter can be a workload ARN, a custom lens ARN, a profile ARN, or review template ARN.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(255, __c31, 7) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(256, __c32, 0) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTemplateSharesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List review template shares.
 */
export const listTemplateShares: API.PaginatedOperationMethod<
  ListTemplateSharesInput,
  ListTemplateSharesOutput,
  ListTemplateSharesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(257, __c32, 1) as any as S.Schema<ListTemplateSharesInput>,
  output: __S(258, __c32, 2) as any as S.Schema<ListTemplateSharesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplateShares",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListWorkloadsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Paginated list of workloads.
 */
export const listWorkloads: API.PaginatedOperationMethod<
  ListWorkloadsInput,
  ListWorkloadsOutput,
  ListWorkloadsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(259, __c32, 3) as any as S.Schema<ListWorkloadsInput>,
  output: __S(261, __c32, 5) as any as S.Schema<ListWorkloadsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloads",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListWorkloadSharesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the workload shares associated with the workload.
 */
export const listWorkloadShares: API.PaginatedOperationMethod<
  ListWorkloadSharesInput,
  ListWorkloadSharesOutput,
  ListWorkloadSharesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(262, __c32, 6) as any as S.Schema<ListWorkloadSharesInput>,
  output: __S(265, __c33, 1) as any as S.Schema<ListWorkloadSharesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkloadShares",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutAgentRecommendationFeedbackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits user feedback on a recommendation to help improve future optimization suggestions and track implementation outcomes.
 */
export const putAgentRecommendationFeedback: API.OperationMethod<
  PutAgentRecommendationFeedbackRequest,
  PutAgentRecommendationFeedbackResponse,
  PutAgentRecommendationFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(266, __c33, 2) as any as S.Schema<PutAgentRecommendationFeedbackRequest>,
  output: __S(267, __c33, 3) as any as S.Schema<PutAgentRecommendationFeedbackResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAgentRecommendationFeedback",
}));

export type StartAgentRecommendationGenerationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a new recommendation generation process for the specified optimization profile. This asynchronous operation analyzes your Amazon Web Services resources and generates optimization recommendations based on the configured pillars and scope. Use GetAgentRecommendationGeneration to check status.
 */
export const startAgentRecommendationGeneration: API.OperationMethod<
  StartAgentRecommendationGenerationRequest,
  StartAgentRecommendationGenerationResponse,
  StartAgentRecommendationGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(268, __c33, 4) as any as S.Schema<StartAgentRecommendationGenerationRequest>,
  output: __S(180, __c22, 4) as any as S.Schema<StartAgentRecommendationGenerationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAgentRecommendationGeneration",
}));

export type TagResourceError = InternalServerException | ResourceNotFoundException | CommonErrors;
/**
 * Adds one or more tags to the specified resource.
 *
 * The WorkloadArn parameter can be a workload ARN, a custom lens ARN, a profile ARN, or review template ARN.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(269, __c33, 5) as any as S.Schema<TagResourceInput>,
  output: __S(2, __c0, 2) as any as S.Schema<TagResourceOutput>,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = InternalServerException | ResourceNotFoundException | CommonErrors;
/**
 * Deletes specified tags from a resource.
 *
 * The WorkloadArn parameter can be a workload ARN, a custom lens ARN, a profile ARN, or review template ARN.
 *
 * To specify multiple tags, use separate **tagKeys** parameters, for example:
 *
 * `DELETE /tags/WorkloadArn?tagKeys=key1&tagKeys=key2`
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<UntagResourceInput>,
  output: __S(2, __c0, 2) as any as S.Schema<UntagResourceOutput>,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAgentContextError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing context associated with a profile.
 */
export const updateAgentContext: API.OperationMethod<
  UpdateAgentContextRequest,
  UpdateAgentContextResponse,
  UpdateAgentContextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<UpdateAgentContextRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<UpdateAgentContextResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentContext",
}));

export type UpdateAgentGoalError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the pillars and title of an existing goal associated with a profile.
 */
export const updateAgentGoal: API.OperationMethod<
  UpdateAgentGoalRequest,
  UpdateAgentGoalResponse,
  UpdateAgentGoalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(272, __c34, 0) as any as S.Schema<UpdateAgentGoalRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<UpdateAgentGoalResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentGoal",
}));

export type UpdateAgentProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing optimization profile's configuration, including its pillars, execution role, and aggregation settings.
 */
export const updateAgentProfile: API.OperationMethod<
  UpdateAgentProfileRequest,
  UpdateAgentProfileResponse,
  UpdateAgentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(273, __c34, 1) as any as S.Schema<UpdateAgentProfileRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateAgentProfileResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentProfile",
}));

export type UpdateAgentRecommendationStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of a recommendation to track its progress through the implementation lifecycle.
 */
export const updateAgentRecommendationStatus: API.OperationMethod<
  UpdateAgentRecommendationStatusRequest,
  UpdateAgentRecommendationStatusResponse,
  UpdateAgentRecommendationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<UpdateAgentRecommendationStatusRequest>,
  output: __S(267, __c33, 3) as any as S.Schema<UpdateAgentRecommendationStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentRecommendationStatus",
}));

export type UpdateAnswerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the answer to a specific question in a workload review.
 */
export const updateAnswer: API.OperationMethod<
  UpdateAnswerInput,
  UpdateAnswerOutput,
  UpdateAnswerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(277, __c34, 5) as any as S.Schema<UpdateAnswerInput>,
  output: __S(278, __c34, 6) as any as S.Schema<UpdateAnswerOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnswer",
}));

export type UpdateGlobalSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update whether the Amazon Web Services account is opted into organization sharing and discovery integration features.
 */
export const updateGlobalSettings: API.OperationMethod<
  UpdateGlobalSettingsInput,
  UpdateGlobalSettingsResponse,
  UpdateGlobalSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280, __c35, 0) as any as S.Schema<UpdateGlobalSettingsInput>,
  output: __S(2, __c0, 2) as any as S.Schema<UpdateGlobalSettingsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGlobalSettings",
}));

export type UpdateIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update integration features.
 */
export const updateIntegration: API.OperationMethod<
  UpdateIntegrationInput,
  UpdateIntegrationResponse,
  UpdateIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(281, __c35, 1) as any as S.Schema<UpdateIntegrationInput>,
  output: __S(2, __c0, 2) as any as S.Schema<UpdateIntegrationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIntegration",
}));

export type UpdateLensReviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update lens review for a particular workload.
 */
export const updateLensReview: API.OperationMethod<
  UpdateLensReviewInput,
  UpdateLensReviewOutput,
  UpdateLensReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(282, __c35, 2) as any as S.Schema<UpdateLensReviewInput>,
  output: __S(283, __c35, 3) as any as S.Schema<UpdateLensReviewOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLensReview",
}));

export type UpdateProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a profile.
 */
export const updateProfile: API.OperationMethod<
  UpdateProfileInput,
  UpdateProfileOutput,
  UpdateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284, __c35, 4) as any as S.Schema<UpdateProfileInput>,
  output: __S(148, __c18, 4) as any as S.Schema<UpdateProfileOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProfile",
}));

export type UpdateReviewTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a review template.
 */
export const updateReviewTemplate: API.OperationMethod<
  UpdateReviewTemplateInput,
  UpdateReviewTemplateOutput,
  UpdateReviewTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285, __c35, 5) as any as S.Schema<UpdateReviewTemplateInput>,
  output: __S(286, __c35, 6) as any as S.Schema<UpdateReviewTemplateOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReviewTemplate",
}));

export type UpdateReviewTemplateAnswerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a review template answer.
 */
export const updateReviewTemplateAnswer: API.OperationMethod<
  UpdateReviewTemplateAnswerInput,
  UpdateReviewTemplateAnswerOutput,
  UpdateReviewTemplateAnswerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<UpdateReviewTemplateAnswerInput>,
  output: __S(160, __c20, 0) as any as S.Schema<UpdateReviewTemplateAnswerOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReviewTemplateAnswer",
}));

export type UpdateReviewTemplateLensReviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a lens review associated with a review template.
 */
export const updateReviewTemplateLensReview: API.OperationMethod<
  UpdateReviewTemplateLensReviewInput,
  UpdateReviewTemplateLensReviewOutput,
  UpdateReviewTemplateLensReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(288, __c36, 0) as any as S.Schema<UpdateReviewTemplateLensReviewInput>,
  output: __S(165, __c20, 5) as any as S.Schema<UpdateReviewTemplateLensReviewOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReviewTemplateLensReview",
}));

export type UpdateShareInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a workload or custom lens share invitation.
 *
 * This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.
 */
export const updateShareInvitation: API.OperationMethod<
  UpdateShareInvitationInput,
  UpdateShareInvitationOutput,
  UpdateShareInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(289, __c36, 1) as any as S.Schema<UpdateShareInvitationInput>,
  output: __S(291, __c36, 3) as any as S.Schema<UpdateShareInvitationOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateShareInvitation",
}));

export type UpdateWorkloadError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an existing workload.
 */
export const updateWorkload: API.OperationMethod<
  UpdateWorkloadInput,
  UpdateWorkloadOutput,
  UpdateWorkloadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(292, __c36, 4) as any as S.Schema<UpdateWorkloadInput>,
  output: __S(167, __c20, 7) as any as S.Schema<UpdateWorkloadOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkload",
}));

export type UpdateWorkloadShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a workload share.
 */
export const updateWorkloadShare: API.OperationMethod<
  UpdateWorkloadShareInput,
  UpdateWorkloadShareOutput,
  UpdateWorkloadShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(293, __c36, 5) as any as S.Schema<UpdateWorkloadShareInput>,
  output: __S(295, __c36, 7) as any as S.Schema<UpdateWorkloadShareOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkloadShare",
}));

export type UpgradeLensReviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Upgrade lens review for a particular workload.
 */
export const upgradeLensReview: API.OperationMethod<
  UpgradeLensReviewInput,
  UpgradeLensReviewResponse,
  UpgradeLensReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(296, __c37, 0) as any as S.Schema<UpgradeLensReviewInput>,
  output: __S(2, __c0, 2) as any as S.Schema<UpgradeLensReviewResponse>,
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
  operationName: "UpgradeLensReview",
}));

export type UpgradeProfileVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Upgrade a profile.
 */
export const upgradeProfileVersion: API.OperationMethod<
  UpgradeProfileVersionInput,
  UpgradeProfileVersionResponse,
  UpgradeProfileVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(297, __c37, 1) as any as S.Schema<UpgradeProfileVersionInput>,
  output: __S(2, __c0, 2) as any as S.Schema<UpgradeProfileVersionResponse>,
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
  operationName: "UpgradeProfileVersion",
}));

export type UpgradeReviewTemplateLensReviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Upgrade the lens review of a review template.
 */
export const upgradeReviewTemplateLensReview: API.OperationMethod<
  UpgradeReviewTemplateLensReviewInput,
  UpgradeReviewTemplateLensReviewResponse,
  UpgradeReviewTemplateLensReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(298, __c37, 2) as any as S.Schema<UpgradeReviewTemplateLensReviewInput>,
  output: __S(267, __c33, 3) as any as S.Schema<UpgradeReviewTemplateLensReviewResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpgradeReviewTemplateLensReview",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAliases: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workloads/{WorkloadId}/associateLenses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateLensesInput" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateLensesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          ProfileArns: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workloads/{WorkloadId}/associateProfiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateProfilesInput" });
    case 4:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "ContextResourceTag",
      });
    case 5:
      return S.Array(__S(4, __c0, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(__S(0, __c0, 0)),
          regions: S.optional(__S(0, __c0, 0)),
          awsServices: S.optional(__S(0, __c0, 0)),
          resourceTypes: S.optional(__S(0, __c0, 0)),
          resourceTags: S.optional(__S(5, __c0, 5)),
          applicationOverview: S.optional(SensitiveString),
          industry: S.optional(SensitiveString),
          applicationType: S.optional(S.String),
          criticality: S.optional(S.String),
          architectureOverview: S.optional(SensitiveString),
          additionalContext: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ContextContent" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          title: SensitiveString,
          contextType: S.String,
          content: __S(6, __c0, 6),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/api/v1/agent-profiles/{profileArn}/contexts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "CreateAgentContextRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          profileArn: S.String,
          title: SensitiveString,
          contextType: S.String,
          content: __S(6, __c0, 6),
          applicationType: S.optional(S.String),
          criticality: S.optional(S.String),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ContextSummary" });
    case 1:
      return S.suspend(() => S.Struct({ context: __S(8, __c1, 0) })).annotate({
        identifier: "CreateAgentContextResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          pillars: __S(10, __c1, 2),
          title: SensitiveString,
          description: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/api/v1/agent-profiles/{profileArn}/goals" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "CreateAgentGoalRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          profileArn: S.String,
          pillars: __S(10, __c1, 2),
          title: SensitiveString,
          description: S.optional(SensitiveString),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GoalSummary" });
    case 5:
      return S.suspend(() => S.Struct({ goal: __S(12, __c1, 4) })).annotate({
        identifier: "CreateAgentGoalResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, regions: __S(0, __c0, 0), accessRoleArn: S.String }),
      ).annotate({ identifier: "AggregationConfiguration" });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          businessOverview: S.optional(SensitiveString),
          pillars: __S(10, __c1, 2),
          deletionProtection: S.optional(S.Boolean),
          executionRoleArn: S.String,
          aggregationConfiguration: __S(15, __c1, 7),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/api/v1/agent-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "CreateAgentProfileRequest",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          businessOverview: S.optional(SensitiveString),
          pillars: __S(10, __c1, 2),
          deletionProtection: S.optional(S.Boolean),
          executionRoleArn: S.String,
          aggregationConfiguration: __S(15, __c1, 7),
          arn: S.String,
          eligibleForScheduledGeneration: S.optional(S.Boolean),
          eligibleForArchitectureGeneration: S.optional(S.Boolean),
          fieldErrors: S.optional(__S(17, __c2, 1)),
          tags: S.optional(__S(5, __c0, 5)),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateAgentProfileResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          SharedWith: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/lenses/{LensAlias}/shares" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateLensShareInput" });
    case 4:
      return S.suspend(() => S.Struct({ ShareId: S.optional(S.String) })).annotate({
        identifier: "CreateLensShareOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          LensVersion: S.optional(S.String),
          IsMajorVersion: S.optional(S.Boolean),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/lenses/{LensAlias}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateLensVersionInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ LensArn: S.optional(S.String), LensVersion: S.optional(S.String) }),
      ).annotate({ identifier: "CreateLensVersionOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          MilestoneName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workloads/{WorkloadId}/milestones" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateMilestoneInput" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.optional(S.String), MilestoneNumber: S.optional(S.Number) }),
      ).annotate({ identifier: "CreateMilestoneOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          SelectedChoiceIds: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "ProfileQuestionUpdate" });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileName: S.optional(S.String),
          ProfileDescription: S.optional(S.String),
          ProfileQuestions: S.optional(__S(26, __c3, 2)),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(27, __c3, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/profiles" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateProfileInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ProfileArn: S.optional(S.String), ProfileVersion: S.optional(S.String) }),
      ).annotate({ identifier: "CreateProfileOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          SharedWith: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/profiles/{ProfileArn}/shares" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateProfileShareInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ShareId: S.optional(S.String), ProfileArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateProfileShareOutput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          Description: S.optional(S.String),
          Lenses: S.optional(__S(0, __c0, 0)),
          Notes: S.optional(S.String),
          Tags: S.optional(__S(27, __c3, 3)),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/reviewTemplates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateReviewTemplateInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ TemplateArn: S.optional(S.String) })).annotate({
        identifier: "CreateReviewTemplateOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          SharedWith: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/templates/shares/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTemplateShareInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ TemplateArn: S.optional(S.String), ShareId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateTemplateShareOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TrustedAdvisorIntegrationStatus: S.optional(S.String),
          WorkloadResourceDefinition: S.optional(__S(10, __c1, 2)),
        }),
      ).annotate({ identifier: "WorkloadDiscoveryConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IssueManagementStatus: S.optional(S.String),
          IssueManagementType: S.optional(S.String),
          JiraProjectKey: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkloadJiraConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadName: S.optional(S.String),
          Description: S.optional(S.String),
          Environment: S.optional(S.String),
          AccountIds: S.optional(__S(0, __c0, 0)),
          AwsRegions: S.optional(__S(0, __c0, 0)),
          NonAwsRegions: S.optional(__S(0, __c0, 0)),
          PillarPriorities: S.optional(__S(0, __c0, 0)),
          ArchitecturalDesign: S.optional(S.String),
          ReviewOwner: S.optional(S.String),
          IndustryType: S.optional(S.String),
          Industry: S.optional(S.String),
          Lenses: S.optional(__S(0, __c0, 0)),
          Notes: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(27, __c3, 3)),
          DiscoveryConfig: S.optional(__S(36, __c4, 4)),
          Applications: S.optional(__S(0, __c0, 0)),
          ProfileArns: S.optional(__S(0, __c0, 0)),
          ReviewTemplateArns: S.optional(__S(0, __c0, 0)),
          JiraConfiguration: S.optional(__S(37, __c4, 5)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/workloads" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateWorkloadInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.optional(S.String), WorkloadArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateWorkloadOutput" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          SharedWith: S.optional(S.String),
          PermissionType: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workloads/{WorkloadId}/shares" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateWorkloadShareInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.optional(S.String), ShareId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateWorkloadShareOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/api/v1/agent-profiles/{profileArn}/contexts/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAgentContextRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/api/v1/agent-profiles/{profileArn}/goals/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "DeleteAgentGoalRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ profileArn: S.String.pipe(T.HttpLabel("profileArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/api/v1/agent-profiles/{profileArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAgentProfileRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
          LensStatus: S.optional(S.String).pipe(T.HttpQuery("LensStatus")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/lenses/{LensAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteLensInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.String.pipe(T.HttpLabel("ShareId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/lenses/{LensAlias}/shares/{ShareId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteLensShareInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/profiles/{ProfileArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProfileInput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.String.pipe(T.HttpLabel("ShareId")),
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/profiles/{ProfileArn}/shares/{ShareId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProfileShareInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/reviewTemplates/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteReviewTemplateInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.String.pipe(T.HttpLabel("ShareId")),
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/templates/shares/{TemplateArn}/{ShareId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTemplateShareInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workloads/{WorkloadId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkloadInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.String.pipe(T.HttpLabel("ShareId")),
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          ClientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("ClientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workloads/{WorkloadId}/shares/{ShareId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkloadShareInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAliases: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workloads/{WorkloadId}/disassociateLenses" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisassociateLensesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          ProfileArns: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workloads/{WorkloadId}/disassociateProfiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateProfilesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          LensVersion: S.optional(S.String).pipe(T.HttpQuery("LensVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/lenses/{LensAlias}/export" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExportLensInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ LensJSON: S.optional(S.String) })).annotate({
        identifier: "ExportLensOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles/{profileArn}/contexts/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "GetAgentContextRequest" });
    case 2:
      return S.suspend(() => S.Struct({ context: __S(8, __c1, 0) })).annotate({
        identifier: "GetAgentContextResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles/{profileArn}/goals/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "GetAgentGoalRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ profileArn: S.String.pipe(T.HttpLabel("profileArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles/{profileArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "GetAgentProfileRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          businessOverview: S.optional(SensitiveString),
          pillars: __S(10, __c1, 2),
          deletionProtection: S.optional(S.Boolean),
          executionRoleArn: S.String,
          aggregationConfiguration: __S(15, __c1, 7),
          arn: S.String,
          eligibleForScheduledGeneration: S.optional(S.Boolean),
          eligibleForArchitectureGeneration: S.optional(S.Boolean),
          fieldErrors: S.optional(__S(17, __c2, 1)),
          tags: S.optional(__S(5, __c0, 5)),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetAgentProfileResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String.pipe(T.HttpLabel("recommendationArn")),
          remediationType: S.optional(S.String).pipe(T.HttpQuery("remediationType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-recommendations/{recommendationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "GetAgentRecommendationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ estimate: S.optional(S.String), detail: S.String }),
      ).annotate({ identifier: "Roi" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ usagePattern: S.String, signalsDetected: S.optional(S.String) }),
      ).annotate({ identifier: "Insight" });
    case 1:
      return S.Array(__S(64, __c8, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ recommendation: S.String, steps: __S(0, __c0, 0) }),
      ).annotate({ identifier: "RemediationSummary" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pillar: S.String,
          title: S.String,
          description: S.String,
          impact: S.String,
        }),
      ).annotate({ identifier: "CrossPillarBenefit" });
    case 4:
      return S.Array(__S(67, __c8, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          pillar: S.String,
          title: S.String,
          description: S.String,
          risk: S.String,
          mitigation: S.String,
          riskExplanation: S.optional(S.String),
        }),
      ).annotate({ identifier: "TradeOff" });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() => S.Struct({ title: S.String })).annotate({
        identifier: "RecommendationGoal",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ title: S.optional(SensitiveString), content: SensitiveString }),
      ).annotate({ identifier: "RemediationStep" });
    case 2:
      return S.Array(__S(73, __c9, 1));
    case 3:
      return S.suspend(() => S.Struct({ url: S.String, title: S.optional(S.String) })).annotate({
        identifier: "ResourceLink",
      });
    case 4:
      return S.Array(__S(75, __c9, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String,
          type: S.String,
          steps: __S(74, __c9, 2),
          resourceLinks: S.optional(__S(76, __c9, 4)),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AgentRecommendationRemediation",
      });
    case 6:
      return S.Array(__S(77, __c9, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String,
          profileArn: S.String,
          generationId: S.optional(S.String),
          title: SensitiveString,
          description: SensitiveString,
          type: S.String,
          pillar: S.String,
          priority: S.String,
          effort: S.String,
          status: S.String,
          state: S.String,
          updateReason: S.optional(SensitiveString),
          impact: S.String,
          roi: __S(63, __c7, 7),
          numberOfResources: S.optional(S.Number),
          awsServices: S.optional(__S(0, __c0, 0)),
          businessUnits: S.optional(__S(0, __c0, 0)),
          applications: S.optional(__S(0, __c0, 0)),
          impactDetails: __S(0, __c0, 0),
          insights: __S(65, __c8, 1),
          highlights: __S(0, __c0, 0),
          remediationSummary: __S(66, __c8, 2),
          crossPillarBenefits: S.optional(__S(68, __c8, 4)),
          tradeOffs: S.optional(__S(70, __c8, 6)),
          sources: S.optional(__S(10, __c1, 2)),
          goals: S.optional(__S(72, __c9, 0)),
          tags: S.optional(__S(5, __c0, 5)),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          remediations: S.optional(__S(78, __c9, 6)),
        }),
      ).annotate({
        identifier: "GetAgentRecommendationResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          generationId: S.String.pipe(T.HttpLabel("generationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api/v1/agent-profiles/{profileArn}/generations/{generationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "GetAgentRecommendationGenerationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ pillar: S.String, ids: __S(0, __c0, 0) })).annotate({
        identifier: "PillarItem",
      });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          pillars: __S(10, __c1, 2),
          goalIds: S.optional(__S(0, __c0, 0)),
          items: S.optional(__S(82, __c10, 2)),
        }),
      ).annotate({ identifier: "Scope" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          stepsCompleted: S.Number,
          totalSteps: S.Number,
          completionPercentage: S.Number,
        }),
      ).annotate({ identifier: "Progress" });
    case 5:
      return S.suspend(() => S.Struct({ code: S.String, message: S.String })).annotate({
        identifier: "ErrorDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          profileArn: S.String,
          name: S.optional(S.String),
          status: S.String,
          estimatedCompletionTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          additionalContext: S.optional(S.Any),
          scope: S.optional(__S(83, __c10, 3)),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          progress: S.optional(__S(84, __c10, 4)),
          errorDetails: S.optional(__S(85, __c10, 5)),
        }),
      ).annotate({
        identifier: "GetAgentRecommendationGenerationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          QuestionId: S.String.pipe(T.HttpLabel("QuestionId")),
          MilestoneNumber: S.optional(S.Number).pipe(T.HttpQuery("MilestoneNumber")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAnswerInput" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DisplayText: S.optional(S.String), Url: S.optional(S.String) }),
      ).annotate({ identifier: "ChoiceContent" });
    case 1:
      return S.Array(__S(88, __c11, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Content: S.optional(__S(89, __c11, 1)) }),
      ).annotate({ identifier: "AdditionalResources" });
    case 3:
      return S.Array(__S(90, __c11, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChoiceId: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          HelpfulResource: S.optional(__S(88, __c11, 0)),
          ImprovementPlan: S.optional(__S(88, __c11, 0)),
          AdditionalResources: S.optional(__S(91, __c11, 3)),
        }),
      ).annotate({ identifier: "Choice" });
    case 5:
      return S.Array(__S(92, __c11, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChoiceId: S.optional(S.String),
          Status: S.optional(S.String),
          Reason: S.optional(S.String),
          Notes: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChoiceAnswer" });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JiraIssueUrl: S.optional(S.String),
          LastSyncedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "JiraConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          QuestionDescription: S.optional(S.String),
          ImprovementPlanUrl: S.optional(S.String),
          HelpfulResourceUrl: S.optional(S.String),
          HelpfulResourceDisplayText: S.optional(S.String),
          Choices: S.optional(__S(93, __c11, 5)),
          SelectedChoices: S.optional(__S(0, __c0, 0)),
          ChoiceAnswers: S.optional(__S(95, __c11, 7)),
          IsApplicable: S.optional(S.Boolean),
          Risk: S.optional(S.String),
          Notes: S.optional(S.String),
          Reason: S.optional(S.String),
          JiraConfiguration: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({ identifier: "Answer" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          Answer: S.optional(__S(97, __c12, 1)),
        }),
      ).annotate({ identifier: "GetAnswerOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Format: S.optional(S.String).pipe(T.HttpQuery("Format")),
          IncludeSharedResources: S.optional(S.Boolean).pipe(T.HttpQuery("IncludeSharedResources")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/consolidatedReport" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConsolidatedReportInput",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ ChoiceId: S.optional(S.String), ChoiceTitle: S.optional(S.String) }),
      ).annotate({ identifier: "BestPractice" });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          Risk: S.optional(S.String),
          BestPractices: S.optional(__S(102, __c12, 6)),
        }),
      ).annotate({ identifier: "QuestionMetric" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          RiskCounts: S.optional(__S(100, __c12, 4)),
          Questions: S.optional(__S(104, __c13, 0)),
        }),
      ).annotate({ identifier: "PillarMetric" });
    case 2:
      return S.Array(__S(105, __c13, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          LensArn: S.optional(S.String),
          Pillars: S.optional(__S(106, __c13, 2)),
          RiskCounts: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "LensMetric" });
    case 4:
      return S.Array(__S(107, __c13, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetricType: S.optional(S.String),
          RiskCounts: S.optional(__S(100, __c12, 4)),
          WorkloadId: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          WorkloadArn: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Lenses: S.optional(__S(108, __c13, 4)),
          LensesAppliedCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ConsolidatedReportMetric" });
    case 6:
      return S.Array(__S(109, __c13, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Metrics: S.optional(__S(110, __c13, 6)),
          NextToken: S.optional(S.String),
          Base64String: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetConsolidatedReportOutput",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/global-settings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGlobalSettingsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IntegrationStatus: S.optional(S.String),
          IssueManagementStatus: S.optional(S.String),
          IssueManagementType: S.optional(S.String),
          Subdomain: S.optional(S.String),
          JiraProjectKey: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AccountJiraConfigurationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          OrganizationSharingStatus: S.optional(S.String),
          DiscoveryIntegrationStatus: S.optional(S.String),
          JiraConfiguration: S.optional(__S(113, __c14, 1)),
        }),
      ).annotate({ identifier: "GetGlobalSettingsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          LensVersion: S.optional(S.String).pipe(T.HttpQuery("LensVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/lenses/{LensAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLensInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LensArn: S.optional(S.String),
          LensVersion: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Owner: S.optional(S.String),
          ShareInvitationId: S.optional(S.String),
          Tags: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({ identifier: "Lens" });
    case 5:
      return S.suspend(() => S.Struct({ Lens: S.optional(__S(116, __c14, 4)) })).annotate({
        identifier: "GetLensOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          MilestoneNumber: S.optional(S.Number).pipe(T.HttpQuery("MilestoneNumber")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLensReviewInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          PillarName: S.optional(S.String),
          Notes: S.optional(S.String),
          RiskCounts: S.optional(__S(100, __c12, 4)),
          PrioritizedRiskCounts: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "PillarReviewSummary" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119, __c14, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          SelectedQuestionIds: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "SelectedPillar" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ SelectedPillars: S.optional(__S(122, __c15, 2)) }),
      ).annotate({
        identifier: "JiraSelectedQuestionConfiguration",
      });
    case 4:
      return S.Array(__S(29, __c3, 5));
    case 5:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          LensVersion: S.optional(S.String),
          LensName: S.optional(S.String),
          LensStatus: S.optional(S.String),
          PillarReviewSummaries: S.optional(__S(120, __c15, 0)),
          JiraConfiguration: S.optional(__S(123, __c15, 3)),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Notes: S.optional(S.String),
          RiskCounts: S.optional(__S(100, __c12, 4)),
          NextToken: S.optional(S.String),
          Profiles: S.optional(__S(124, __c15, 4)),
          PrioritizedRiskCounts: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "LensReview" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensReview: S.optional(__S(125, __c15, 5)),
        }),
      ).annotate({ identifier: "GetLensReviewOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          MilestoneNumber: S.optional(S.Number).pipe(T.HttpQuery("MilestoneNumber")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLensReviewReportInput" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          Base64String: S.optional(S.String),
        }),
      ).annotate({ identifier: "LensReviewReport" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensReviewReport: S.optional(__S(128, __c16, 0)),
        }),
      ).annotate({
        identifier: "GetLensReviewReportOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          BaseLensVersion: S.optional(S.String).pipe(T.HttpQuery("BaseLensVersion")),
          TargetLensVersion: S.optional(S.String).pipe(T.HttpQuery("TargetLensVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/lenses/{LensAlias}/versionDifference" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLensVersionDifferenceInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          DifferenceStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "QuestionDifference" });
    case 4:
      return S.Array(__S(131, __c16, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          PillarName: S.optional(S.String),
          DifferenceStatus: S.optional(S.String),
          QuestionDifferences: S.optional(__S(132, __c16, 4)),
        }),
      ).annotate({ identifier: "PillarDifference" });
    case 6:
      return S.Array(__S(133, __c16, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ PillarDifferences: S.optional(__S(134, __c16, 6)) }),
      ).annotate({ identifier: "VersionDifferences" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          BaseLensVersion: S.optional(S.String),
          TargetLensVersion: S.optional(S.String),
          LatestLensVersion: S.optional(S.String),
          VersionDifferences: S.optional(__S(135, __c16, 7)),
        }),
      ).annotate({
        identifier: "GetLensVersionDifferenceOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          MilestoneNumber: S.Number.pipe(T.HttpLabel("MilestoneNumber")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workloads/{WorkloadId}/milestones/{MilestoneNumber}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMilestoneInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IssueManagementStatus: S.optional(S.String),
          IssueManagementType: S.optional(S.String),
          JiraProjectKey: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkloadJiraConfigurationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadArn: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          Description: S.optional(S.String),
          Environment: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AccountIds: S.optional(__S(0, __c0, 0)),
          AwsRegions: S.optional(__S(0, __c0, 0)),
          NonAwsRegions: S.optional(__S(0, __c0, 0)),
          ArchitecturalDesign: S.optional(S.String),
          ReviewOwner: S.optional(S.String),
          ReviewRestrictionDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IsReviewOwnerUpdateAcknowledged: S.optional(S.Boolean),
          IndustryType: S.optional(S.String),
          Industry: S.optional(S.String),
          Notes: S.optional(S.String),
          ImprovementStatus: S.optional(S.String),
          RiskCounts: S.optional(__S(100, __c12, 4)),
          PillarPriorities: S.optional(__S(0, __c0, 0)),
          Lenses: S.optional(__S(0, __c0, 0)),
          Owner: S.optional(S.String),
          ShareInvitationId: S.optional(S.String),
          Tags: S.optional(__S(27, __c3, 3)),
          DiscoveryConfig: S.optional(__S(36, __c4, 4)),
          Applications: S.optional(__S(0, __c0, 0)),
          Profiles: S.optional(__S(124, __c15, 4)),
          PrioritizedRiskCounts: S.optional(__S(100, __c12, 4)),
          JiraConfiguration: S.optional(__S(138, __c17, 2)),
        }),
      ).annotate({ identifier: "Workload" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MilestoneNumber: S.optional(S.Number),
          MilestoneName: S.optional(S.String),
          RecordedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Workload: S.optional(__S(139, __c17, 3)),
        }),
      ).annotate({ identifier: "Milestone" });
    case 5:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.optional(S.String), Milestone: S.optional(__S(140, __c17, 4)) }),
      ).annotate({ identifier: "GetMilestoneOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          ProfileVersion: S.optional(S.String).pipe(T.HttpQuery("ProfileVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profiles/{ProfileArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProfileInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChoiceId: S.optional(S.String),
          ChoiceTitle: S.optional(S.String),
          ChoiceDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProfileChoice" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          QuestionDescription: S.optional(S.String),
          QuestionChoices: S.optional(__S(144, __c18, 0)),
          SelectedChoiceIds: S.optional(__S(0, __c0, 0)),
          MinSelectedChoices: S.optional(S.Number),
          MaxSelectedChoices: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ProfileQuestion" });
    case 2:
      return S.Array(__S(145, __c18, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.optional(S.String),
          ProfileVersion: S.optional(S.String),
          ProfileName: S.optional(S.String),
          ProfileDescription: S.optional(S.String),
          ProfileQuestions: S.optional(__S(146, __c18, 2)),
          Owner: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ShareInvitationId: S.optional(S.String),
          Tags: S.optional(__S(27, __c3, 3)),
        }),
      ).annotate({ identifier: "Profile" });
    case 4:
      return S.suspend(() => S.Struct({ Profile: S.optional(__S(147, __c18, 3)) })).annotate({
        identifier: "GetProfileOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/profileTemplate" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetProfileTemplateInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          QuestionDescription: S.optional(S.String),
          QuestionChoices: S.optional(__S(144, __c18, 0)),
          MinSelectedChoices: S.optional(S.Number),
          MaxSelectedChoices: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ProfileTemplateQuestion" });
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          TemplateQuestions: S.optional(__S(151, __c18, 7)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ProfileTemplate" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ProfileTemplate: S.optional(__S(152, __c19, 0)) }),
      ).annotate({
        identifier: "GetProfileTemplateOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/reviewTemplates/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetReviewTemplateInput" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Lenses: S.optional(__S(0, __c0, 0)),
          Notes: S.optional(S.String),
          QuestionCounts: S.optional(__S(155, __c19, 3)),
          Owner: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TemplateArn: S.optional(S.String),
          TemplateName: S.optional(S.String),
          Tags: S.optional(__S(27, __c3, 3)),
          UpdateStatus: S.optional(S.String),
          ShareInvitationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReviewTemplate" });
    case 5:
      return S.suspend(() => S.Struct({ ReviewTemplate: S.optional(__S(156, __c19, 4)) })).annotate(
        {
          identifier: "GetReviewTemplateOutput",
        },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          QuestionId: S.String.pipe(T.HttpLabel("QuestionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReviewTemplateAnswerInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          QuestionDescription: S.optional(S.String),
          ImprovementPlanUrl: S.optional(S.String),
          HelpfulResourceUrl: S.optional(S.String),
          HelpfulResourceDisplayText: S.optional(S.String),
          Choices: S.optional(__S(93, __c11, 5)),
          SelectedChoices: S.optional(__S(0, __c0, 0)),
          ChoiceAnswers: S.optional(__S(95, __c11, 7)),
          IsApplicable: S.optional(S.Boolean),
          AnswerStatus: S.optional(S.String),
          Notes: S.optional(S.String),
          Reason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReviewTemplateAnswer" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.optional(S.String),
          LensAlias: S.optional(S.String),
          Answer: S.optional(__S(159, __c19, 7)),
        }),
      ).annotate({
        identifier: "GetReviewTemplateAnswerOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReviewTemplateLensReviewInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          PillarName: S.optional(S.String),
          Notes: S.optional(S.String),
          QuestionCounts: S.optional(__S(155, __c19, 3)),
        }),
      ).annotate({
        identifier: "ReviewTemplatePillarReviewSummary",
      });
    case 3:
      return S.Array(__S(162, __c20, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          LensVersion: S.optional(S.String),
          LensName: S.optional(S.String),
          LensStatus: S.optional(S.String),
          PillarReviewSummaries: S.optional(__S(163, __c20, 3)),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Notes: S.optional(S.String),
          QuestionCounts: S.optional(__S(155, __c19, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReviewTemplateLensReview" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.optional(S.String),
          LensReview: S.optional(__S(164, __c20, 4)),
        }),
      ).annotate({
        identifier: "GetReviewTemplateLensReviewOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workloads/{WorkloadId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkloadInput" });
    case 7:
      return S.suspend(() => S.Struct({ Workload: S.optional(__S(139, __c17, 3)) })).annotate({
        identifier: "GetWorkloadOutput",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          JSONString: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(27, __c3, 3)),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/importLens" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportLensInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ LensArn: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "ImportLensOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles/{profileArn}/contexts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "ListAgentContextsRequest" });
    case 3:
      return S.Array(__S(8, __c1, 0));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: __S(171, __c21, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentContextsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles/{profileArn}/goals" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "ListAgentGoalsRequest" });
    case 6:
      return S.Array(__S(12, __c1, 4));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: __S(174, __c21, 6), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAgentGoalsResponse" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "ListAgentProfilesRequest" });
    case 1:
      return S.Array(__S(61, __c7, 5));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: __S(177, __c22, 1), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentProfilesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          recommendationType: S.optional(S.String).pipe(T.HttpQuery("RecommendationType")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles/{profileArn}/generations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "ListAgentRecommendationGenerationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          profileArn: S.String,
          name: S.optional(S.String),
          status: S.String,
          estimatedCompletionTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AgentRecommendationGenerationSummary",
      });
    case 5:
      return S.Array(__S(180, __c22, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: __S(181, __c22, 5),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAgentRecommendationGenerationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String.pipe(T.HttpLabel("recommendationArn")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/api/v1/agent-recommendations/{recommendationArn}/items",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "ListAgentRecommendationItemsRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          recommendationArn: S.String,
          type: S.String,
          metadata: S.Any,
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AgentRecommendationItemSummary",
      });
    case 1:
      return S.Array(__S(184, __c23, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: __S(185, __c23, 1), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentRecommendationItemsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          state: S.optional(S.String).pipe(T.HttpQuery("state")),
          pillar: S.optional(S.String).pipe(T.HttpQuery("pillar")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/api/v1/agent-profiles/{profileArn}/recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "ListAgentRecommendationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String,
          profileArn: S.String,
          generationId: S.optional(S.String),
          title: SensitiveString,
          description: SensitiveString,
          type: S.String,
          pillar: S.String,
          priority: S.String,
          effort: S.String,
          status: S.String,
          state: S.String,
          updateReason: S.optional(SensitiveString),
          impact: S.String,
          roi: __S(63, __c7, 7),
          numberOfResources: S.optional(S.Number),
          awsServices: S.optional(__S(0, __c0, 0)),
          businessUnits: S.optional(__S(0, __c0, 0)),
          applications: S.optional(__S(0, __c0, 0)),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AgentRecommendationSummary",
      });
    case 5:
      return S.Array(__S(188, __c23, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ items: __S(189, __c23, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentRecommendationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          PillarId: S.optional(S.String).pipe(T.HttpQuery("PillarId")),
          MilestoneNumber: S.optional(S.Number).pipe(T.HttpQuery("MilestoneNumber")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          QuestionPriority: S.optional(S.String).pipe(T.HttpQuery("QuestionPriority")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAnswersInput" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChoiceId: S.optional(S.String),
          Status: S.optional(S.String),
          Reason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChoiceAnswerSummary" });
    case 1:
      return S.Array(__S(192, __c24, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          Choices: S.optional(__S(93, __c11, 5)),
          SelectedChoices: S.optional(__S(0, __c0, 0)),
          ChoiceAnswerSummaries: S.optional(__S(193, __c24, 1)),
          IsApplicable: S.optional(S.Boolean),
          Risk: S.optional(S.String),
          Reason: S.optional(S.String),
          QuestionType: S.optional(S.String),
          JiraConfiguration: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({ identifier: "AnswerSummary" });
    case 3:
      return S.Array(__S(194, __c24, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          AnswerSummaries: S.optional(__S(195, __c24, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAnswersOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          LensArn: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionId: S.optional(S.String),
          ChoiceId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workloads/{WorkloadId}/checks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCheckDetailsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Provider: S.optional(S.String),
          LensArn: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionId: S.optional(S.String),
          ChoiceId: S.optional(S.String),
          Status: S.optional(S.String),
          AccountId: S.optional(S.String),
          FlaggedResources: S.optional(S.Number),
          Reason: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CheckDetail" });
    case 7:
      return S.Array(__S(198, __c24, 6));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CheckDetails: S.optional(__S(199, __c24, 7)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCheckDetailsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          LensArn: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionId: S.optional(S.String),
          ChoiceId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workloads/{WorkloadId}/checkSummaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCheckSummariesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Provider: S.optional(S.String),
          Description: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LensArn: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionId: S.optional(S.String),
          ChoiceId: S.optional(S.String),
          Status: S.optional(S.String),
          AccountSummary: S.optional(__S(155, __c19, 3)),
        }),
      ).annotate({ identifier: "CheckSummary" });
    case 3:
      return S.Array(__S(202, __c25, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          CheckSummaries: S.optional(__S(203, __c25, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListCheckSummariesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          LensType: S.optional(S.String).pipe(T.HttpQuery("LensType")),
          LensStatus: S.optional(S.String).pipe(T.HttpQuery("LensStatus")),
          LensName: S.optional(S.String).pipe(T.HttpQuery("LensName")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/lenses" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLensesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LensArn: S.optional(S.String),
          LensAlias: S.optional(S.String),
          LensName: S.optional(S.String),
          LensType: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LensVersion: S.optional(S.String),
          Owner: S.optional(S.String),
          LensStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "LensSummary" });
    case 7:
      return S.Array(__S(206, __c25, 6));
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LensSummaries: S.optional(__S(207, __c25, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListLensesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          PillarId: S.optional(S.String).pipe(T.HttpQuery("PillarId")),
          MilestoneNumber: S.optional(S.Number).pipe(T.HttpQuery("MilestoneNumber")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          QuestionPriority: S.optional(S.String).pipe(T.HttpQuery("QuestionPriority")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLensReviewImprovementsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ChoiceId: S.optional(S.String),
          DisplayText: S.optional(S.String),
          ImprovementPlanUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChoiceImprovementPlan" });
    case 3:
      return S.Array(__S(210, __c26, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          Risk: S.optional(S.String),
          ImprovementPlanUrl: S.optional(S.String),
          ImprovementPlans: S.optional(__S(211, __c26, 3)),
          JiraConfiguration: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({ identifier: "ImprovementSummary" });
    case 5:
      return S.Array(__S(212, __c26, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          ImprovementSummaries: S.optional(__S(213, __c26, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLensReviewImprovementsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          MilestoneNumber: S.optional(S.Number).pipe(T.HttpQuery("MilestoneNumber")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workloads/{WorkloadId}/lensReviews" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListLensReviewsInput" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          LensVersion: S.optional(S.String),
          LensName: S.optional(S.String),
          LensStatus: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RiskCounts: S.optional(__S(100, __c12, 4)),
          Profiles: S.optional(__S(124, __c15, 4)),
          PrioritizedRiskCounts: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "LensReviewSummary" });
    case 1:
      return S.Array(__S(216, __c27, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensReviewSummaries: S.optional(__S(217, __c27, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListLensReviewsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          SharedWithPrefix: S.optional(S.String).pipe(T.HttpQuery("SharedWithPrefix")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Status: S.optional(S.String).pipe(T.HttpQuery("Status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/lenses/{LensAlias}/shares" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListLensSharesInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.optional(S.String),
          SharedWith: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "LensShareSummary" });
    case 5:
      return S.Array(__S(220, __c27, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          LensShareSummaries: S.optional(__S(221, __c27, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListLensSharesOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workloads/{WorkloadId}/milestonesSummaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMilestonesInput" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadArn: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          Owner: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Lenses: S.optional(__S(0, __c0, 0)),
          RiskCounts: S.optional(__S(100, __c12, 4)),
          ImprovementStatus: S.optional(S.String),
          Profiles: S.optional(__S(124, __c15, 4)),
          PrioritizedRiskCounts: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "WorkloadSummary" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MilestoneNumber: S.optional(S.Number),
          MilestoneName: S.optional(S.String),
          RecordedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          WorkloadSummary: S.optional(__S(224, __c28, 0)),
        }),
      ).annotate({ identifier: "MilestoneSummary" });
    case 2:
      return S.Array(__S(225, __c28, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneSummaries: S.optional(__S(226, __c28, 2)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListMilestonesOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ResourceArn: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/notifications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListNotificationsInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          CurrentLensVersion: S.optional(S.String),
          LatestLensVersion: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          ResourceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "LensUpgradeSummary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          LensUpgradeSummary: S.optional(__S(229, __c28, 5)),
        }),
      ).annotate({ identifier: "NotificationSummary" });
    case 7:
      return S.Array(__S(230, __c28, 6));
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NotificationSummaries: S.optional(__S(231, __c28, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListNotificationsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String).pipe(T.HttpQuery("WorkloadId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profileNotifications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProfileNotificationsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CurrentProfileVersion: S.optional(S.String),
          LatestProfileVersion: S.optional(S.String),
          Type: S.optional(S.String),
          ProfileArn: S.optional(S.String),
          ProfileName: S.optional(S.String),
          WorkloadId: S.optional(S.String),
          WorkloadName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProfileNotificationSummary",
      });
    case 3:
      return S.Array(__S(234, __c29, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NotificationSummaries: S.optional(__S(235, __c29, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfileNotificationsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProfileNamePrefix: S.optional(S.String).pipe(T.HttpQuery("ProfileNamePrefix")),
          ProfileOwnerType: S.optional(S.String).pipe(T.HttpQuery("ProfileOwnerType")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/profileSummaries" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListProfilesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.optional(S.String),
          ProfileVersion: S.optional(S.String),
          ProfileName: S.optional(S.String),
          ProfileDescription: S.optional(S.String),
          Owner: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ProfileSummary" });
    case 7:
      return S.Array(__S(238, __c29, 6));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProfileSummaries: S.optional(__S(239, __c29, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListProfilesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          SharedWithPrefix: S.optional(S.String).pipe(T.HttpQuery("SharedWithPrefix")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Status: S.optional(S.String).pipe(T.HttpQuery("Status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profiles/{ProfileArn}/shares" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProfileSharesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProfileShareSummaries: S.optional(__S(221, __c27, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListProfileSharesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          PillarId: S.optional(S.String).pipe(T.HttpQuery("PillarId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListReviewTemplateAnswersInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          Choices: S.optional(__S(93, __c11, 5)),
          SelectedChoices: S.optional(__S(0, __c0, 0)),
          ChoiceAnswerSummaries: S.optional(__S(193, __c24, 1)),
          IsApplicable: S.optional(S.Boolean),
          AnswerStatus: S.optional(S.String),
          Reason: S.optional(S.String),
          QuestionType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ReviewTemplateAnswerSummary",
      });
    case 5:
      return S.Array(__S(244, __c30, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.optional(S.String),
          LensAlias: S.optional(S.String),
          AnswerSummaries: S.optional(__S(245, __c30, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListReviewTemplateAnswersOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/reviewTemplates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListReviewTemplatesInput" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Lenses: S.optional(__S(0, __c0, 0)),
          Owner: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TemplateArn: S.optional(S.String),
          TemplateName: S.optional(S.String),
          UpdateStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReviewTemplateSummary" });
    case 1:
      return S.Array(__S(248, __c31, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReviewTemplates: S.optional(__S(249, __c31, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListReviewTemplatesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadNamePrefix: S.optional(S.String).pipe(T.HttpQuery("WorkloadNamePrefix")),
          LensNamePrefix: S.optional(S.String).pipe(T.HttpQuery("LensNamePrefix")),
          ShareResourceType: S.optional(S.String).pipe(T.HttpQuery("ShareResourceType")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ProfileNamePrefix: S.optional(S.String).pipe(T.HttpQuery("ProfileNamePrefix")),
          TemplateNamePrefix: S.optional(S.String).pipe(T.HttpQuery("TemplateNamePrefix")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/shareInvitations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListShareInvitationsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ShareInvitationId: S.optional(S.String),
          SharedBy: S.optional(S.String),
          SharedWith: S.optional(S.String),
          PermissionType: S.optional(S.String),
          ShareResourceType: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          WorkloadId: S.optional(S.String),
          LensName: S.optional(S.String),
          LensArn: S.optional(S.String),
          ProfileName: S.optional(S.String),
          ProfileArn: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ShareInvitationSummary" });
    case 5:
      return S.Array(__S(252, __c31, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ShareInvitationSummaries: S.optional(__S(253, __c31, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListShareInvitationsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ WorkloadArn: S.String.pipe(T.HttpLabel("WorkloadArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{WorkloadArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(27, __c3, 3)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          SharedWithPrefix: S.optional(S.String).pipe(T.HttpQuery("SharedWithPrefix")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Status: S.optional(S.String).pipe(T.HttpQuery("Status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/shares/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTemplateSharesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.optional(S.String),
          TemplateShareSummaries: S.optional(__S(221, __c27, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListTemplateSharesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadNamePrefix: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workloadsSummaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWorkloadsInput" });
    case 4:
      return S.Array(__S(224, __c28, 0));
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadSummaries: S.optional(__S(260, __c32, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListWorkloadsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          SharedWithPrefix: S.optional(S.String).pipe(T.HttpQuery("SharedWithPrefix")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Status: S.optional(S.String).pipe(T.HttpQuery("Status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workloads/{WorkloadId}/shares" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWorkloadSharesInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.optional(S.String),
          SharedWith: S.optional(S.String),
          PermissionType: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadShareSummary" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(263, __c32, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadShareSummaries: S.optional(__S(264, __c33, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListWorkloadSharesOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String.pipe(T.HttpLabel("recommendationArn")),
          type: S.String,
          feedbackCategory: S.optional(S.String),
          comments: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/api/v1/agent-recommendations/{recommendationArn}/feedback",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "PutAgentRecommendationFeedbackRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "PutAgentRecommendationFeedbackResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          types: __S(10, __c1, 2),
          name: S.optional(S.String),
          additionalContext: S.optional(S.Any),
          scope: __S(83, __c10, 3),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/api/v1/agent-profiles/{profileArn}/generations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "StartAgentRecommendationGenerationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadArn: S.String.pipe(T.HttpLabel("WorkloadArn")),
          Tags: S.optional(__S(27, __c3, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{WorkloadArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadArn: S.String.pipe(T.HttpLabel("WorkloadArn")),
          TagKeys: S.optional(__S(0, __c0, 0)).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{WorkloadArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          id: S.String.pipe(T.HttpLabel("id")),
          title: S.optional(SensitiveString),
          content: S.optional(__S(6, __c0, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/api/v1/agent-profiles/{profileArn}/contexts/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentContextRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          id: S.String.pipe(T.HttpLabel("id")),
          pillars: S.optional(__S(10, __c1, 2)),
          title: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/api/v1/agent-profiles/{profileArn}/goals/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({ identifier: "UpdateAgentGoalRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          executionRoleArn: S.optional(S.String),
          aggregationConfiguration: S.optional(__S(15, __c1, 7)),
          businessOverview: S.optional(SensitiveString),
          pillars: S.optional(__S(10, __c1, 2)),
          deletionProtection: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/api/v1/agent-profiles/{profileArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentProfileRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String.pipe(T.HttpLabel("recommendationArn")),
          status: S.String,
          updateReason: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/api/v1/agent-recommendations/{recommendationArn}/status",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ SubServiceType: { value: "AGENT" } }),
          ),
        ),
      ).annotate({
        identifier: "UpdateAgentRecommendationStatusRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          Reason: S.optional(S.String),
          Notes: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChoiceUpdate" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(275, __c34, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          QuestionId: S.String.pipe(T.HttpLabel("QuestionId")),
          SelectedChoices: S.optional(__S(0, __c0, 0)),
          ChoiceUpdates: S.optional(__S(276, __c34, 4)),
          Notes: S.optional(S.String),
          IsApplicable: S.optional(S.Boolean),
          Reason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAnswerInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          Answer: S.optional(__S(97, __c12, 1)),
        }),
      ).annotate({ identifier: "UpdateAnswerOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IssueManagementStatus: S.optional(S.String),
          IssueManagementType: S.optional(S.String),
          JiraProjectKey: S.optional(S.String),
          IntegrationStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AccountJiraConfigurationInput",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OrganizationSharingStatus: S.optional(S.String),
          DiscoveryIntegrationStatus: S.optional(S.String),
          JiraConfiguration: S.optional(__S(279, __c34, 7)),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/global-settings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateGlobalSettingsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          IntegratingService: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workloads/{WorkloadId}/updateIntegration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateIntegrationInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          LensNotes: S.optional(S.String),
          PillarNotes: S.optional(__S(17, __c2, 1)),
          JiraConfiguration: S.optional(__S(123, __c15, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateLensReviewInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.optional(S.String), LensReview: S.optional(__S(125, __c15, 5)) }),
      ).annotate({ identifier: "UpdateLensReviewOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          ProfileDescription: S.optional(S.String),
          ProfileQuestions: S.optional(__S(26, __c3, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/profiles/{ProfileArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateProfileInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          TemplateName: S.optional(S.String),
          Description: S.optional(S.String),
          Notes: S.optional(S.String),
          LensesToAssociate: S.optional(__S(0, __c0, 0)),
          LensesToDisassociate: S.optional(__S(0, __c0, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/reviewTemplates/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReviewTemplateInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ ReviewTemplate: S.optional(__S(156, __c19, 4)) })).annotate(
        {
          identifier: "UpdateReviewTemplateOutput",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          QuestionId: S.String.pipe(T.HttpLabel("QuestionId")),
          SelectedChoices: S.optional(__S(0, __c0, 0)),
          ChoiceUpdates: S.optional(__S(276, __c34, 4)),
          Notes: S.optional(S.String),
          IsApplicable: S.optional(S.Boolean),
          Reason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReviewTemplateAnswerInput",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          LensNotes: S.optional(S.String),
          PillarNotes: S.optional(__S(17, __c2, 1)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateReviewTemplateLensReviewInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ShareInvitationId: S.String.pipe(T.HttpLabel("ShareInvitationId")),
          ShareInvitationAction: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/shareInvitations/{ShareInvitationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateShareInvitationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ShareInvitationId: S.optional(S.String),
          ShareResourceType: S.optional(S.String),
          WorkloadId: S.optional(S.String),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          ProfileArn: S.optional(S.String),
          TemplateArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ShareInvitation" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ShareInvitation: S.optional(__S(290, __c36, 2)) }),
      ).annotate({
        identifier: "UpdateShareInvitationOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          WorkloadName: S.optional(S.String),
          Description: S.optional(S.String),
          Environment: S.optional(S.String),
          AccountIds: S.optional(__S(0, __c0, 0)),
          AwsRegions: S.optional(__S(0, __c0, 0)),
          NonAwsRegions: S.optional(__S(0, __c0, 0)),
          PillarPriorities: S.optional(__S(0, __c0, 0)),
          ArchitecturalDesign: S.optional(S.String),
          ReviewOwner: S.optional(S.String),
          IsReviewOwnerUpdateAcknowledged: S.optional(S.Boolean),
          IndustryType: S.optional(S.String),
          Industry: S.optional(S.String),
          Notes: S.optional(S.String),
          ImprovementStatus: S.optional(S.String),
          DiscoveryConfig: S.optional(__S(36, __c4, 4)),
          Applications: S.optional(__S(0, __c0, 0)),
          JiraConfiguration: S.optional(__S(37, __c4, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workloads/{WorkloadId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWorkloadInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.String.pipe(T.HttpLabel("ShareId")),
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          PermissionType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workloads/{WorkloadId}/shares/{ShareId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWorkloadShareInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ShareId: S.optional(S.String),
          SharedBy: S.optional(S.String),
          SharedWith: S.optional(S.String),
          PermissionType: S.optional(S.String),
          Status: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          WorkloadId: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadShare" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadShare: S.optional(__S(294, __c36, 6)),
        }),
      ).annotate({
        identifier: "UpdateWorkloadShareOutput",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          MilestoneName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpgradeLensReviewInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          MilestoneName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpgradeProfileVersionInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          ClientRequestToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/upgrade",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpgradeReviewTemplateLensReviewInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 4:
      return S.Array(__S(299, __c37, 3));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
