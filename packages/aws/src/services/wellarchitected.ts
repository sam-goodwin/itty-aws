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
        /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type WorkloadId = string;
export type LensAlias = string;
export type LensAliases = string[];
const LensAliases = /*@__PURE__*/ __L.at(__c0, 0);
export interface AssociateLensesInput {
  WorkloadId: string;
  LensAliases?: string[];
}
const AssociateLensesInput = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<AssociateLensesInput>;
export interface AssociateLensesResponse {}
const AssociateLensesResponse = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AssociateLensesResponse>;
export type ProfileArn = string;
export type ProfileArns = string[];
const ProfileArns = LensAliases as any as S.Schema<ProfileArns>;
export interface AssociateProfilesInput {
  WorkloadId: string;
  ProfileArns?: string[];
}
const AssociateProfilesInput = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateProfilesInput>;
export interface AssociateProfilesResponse {}
const AssociateProfilesResponse =
  AssociateLensesResponse as any as S.Schema<AssociateProfilesResponse>;
export type AgentProfileArn = string;
export type SensitiveString = string | redacted.Redacted<string>;
export type ContextType = "APPLICATION" | (string & {});
const ContextType = S.String;

export type ContextAccountIdList = string[];
const ContextAccountIdList = LensAliases as any as S.Schema<ContextAccountIdList>;
export type ContextRegionList = string[];
const ContextRegionList = LensAliases as any as S.Schema<ContextRegionList>;
export type ContextAwsServiceList = string[];
const ContextAwsServiceList = LensAliases as any as S.Schema<ContextAwsServiceList>;
export type ContextResourceTypeList = string[];
const ContextResourceTypeList = LensAliases as any as S.Schema<ContextResourceTypeList>;
export interface ContextResourceTag {
  key: string;
  value: string;
}
const ContextResourceTag = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<ContextResourceTag>;
export type ContextResourceTagList = ContextResourceTag[];
const ContextResourceTagList = /*@__PURE__*/ __L.at(__c0, 5);
export type ApplicationType = "SAS" | "DESKTOP_APPLICATION" | "OTHER" | (string & {});
const ApplicationType = S.String;

export type Criticality =
  | "MISSION_CRITICAL"
  | "BUSINESS_CRITICAL"
  | "NON_CRITICAL"
  | "TEST_DEVELOPMENT"
  | (string & {});
const Criticality = S.String;

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
const ContextContent = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<ContextContent>;
export interface CreateAgentContextRequest {
  clientToken?: string;
  profileArn: string;
  title: string | redacted.Redacted<string>;
  contextType: ContextType;
  content: ContextContent;
}
const CreateAgentContextRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CreateAgentContextRequest>;
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
const ContextSummary = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<ContextSummary>;
export interface CreateAgentContextResponse {
  context: ContextSummary;
}
const CreateAgentContextResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateAgentContextResponse>;
export type Pillar =
  | "COST_OPTIMIZATION"
  | "SECURITY"
  | "RESILIENCE"
  | "PERFORMANCE"
  | "OPERATIONAL_EXCELLENCE"
  | (string & {});
const Pillar = S.String;

export type Pillars = Pillar[];
const Pillars = /*@__PURE__*/ __L.at(__c1, 2);
export interface CreateAgentGoalRequest {
  clientToken?: string;
  profileArn: string;
  pillars: Pillar[];
  title: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
}
const CreateAgentGoalRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateAgentGoalRequest>;
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
const GoalSummary = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<GoalSummary>;
export interface CreateAgentGoalResponse {
  goal: GoalSummary;
}
const CreateAgentGoalResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateAgentGoalResponse>;
export type RoleArn = string;
export type AccountId = string;
export type Region = string;
export type Regions = string[];
const Regions = LensAliases as any as S.Schema<Regions>;
export interface AggregationConfiguration {
  accountId: string;
  regions: string[];
  accessRoleArn: string;
}
const AggregationConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<AggregationConfiguration>;
export type AggregationConfigurations = AggregationConfiguration[];
const AggregationConfigurations = /*@__PURE__*/ __L.at(__c1, 7);
export interface Tag {
  key: string;
  value: string;
}
export type Tags = Tag[];
const Tags = ContextResourceTagList as any as S.Schema<Tags>;
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
const CreateAgentProfileRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateAgentProfileRequest>;
export type FieldErrorPath = string;
export type FieldErrorMessage = string;
export type FieldErrors = { [key: string]: string | undefined };
const FieldErrors = /*@__PURE__*/ __L.at(__c2, 1);
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
const CreateAgentProfileResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateAgentProfileResponse>;
export type SharedWith = string;
export type ClientRequestToken = string;
export interface CreateLensShareInput {
  LensAlias: string;
  SharedWith?: string;
  ClientRequestToken?: string;
}
const CreateLensShareInput = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CreateLensShareInput>;
export type ShareId = string;
export interface CreateLensShareOutput {
  ShareId?: string;
}
const CreateLensShareOutput = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateLensShareOutput>;
export type LensVersion = string;
export type IsMajorVersion = boolean;
export interface CreateLensVersionInput {
  LensAlias: string;
  LensVersion?: string;
  IsMajorVersion?: boolean;
  ClientRequestToken?: string;
}
const CreateLensVersionInput = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateLensVersionInput>;
export type LensArn = string;
export interface CreateLensVersionOutput {
  LensArn?: string;
  LensVersion?: string;
}
const CreateLensVersionOutput = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateLensVersionOutput>;
export type MilestoneName = string;
export interface CreateMilestoneInput {
  WorkloadId: string;
  MilestoneName?: string;
  ClientRequestToken?: string;
}
const CreateMilestoneInput = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<CreateMilestoneInput>;
export type MilestoneNumber = number;
export interface CreateMilestoneOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
}
const CreateMilestoneOutput = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateMilestoneOutput>;
export type ProfileName = string;
export type ProfileDescription = string;
export type QuestionId = string;
export type ChoiceId = string;
export type SelectedProfileChoiceIds = string[];
const SelectedProfileChoiceIds = LensAliases as any as S.Schema<SelectedProfileChoiceIds>;
export interface ProfileQuestionUpdate {
  QuestionId?: string;
  SelectedChoiceIds?: string[];
}
const ProfileQuestionUpdate = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ProfileQuestionUpdate>;
export type ProfileQuestionUpdates = ProfileQuestionUpdate[];
const ProfileQuestionUpdates = /*@__PURE__*/ __L.at(__c3, 2);
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c3, 3);
export interface CreateProfileInput {
  ProfileName?: string;
  ProfileDescription?: string;
  ProfileQuestions?: ProfileQuestionUpdate[];
  ClientRequestToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateProfileInput = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateProfileInput>;
export type ProfileVersion = string;
export interface CreateProfileOutput {
  ProfileArn?: string;
  ProfileVersion?: string;
}
const CreateProfileOutput = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CreateProfileOutput>;
export interface CreateProfileShareInput {
  ProfileArn: string;
  SharedWith?: string;
  ClientRequestToken?: string;
}
const CreateProfileShareInput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateProfileShareInput>;
export interface CreateProfileShareOutput {
  ShareId?: string;
  ProfileArn?: string;
}
const CreateProfileShareOutput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateProfileShareOutput>;
export type TemplateName = string;
export type TemplateDescription = string;
export type ReviewTemplateLenses = string[];
const ReviewTemplateLenses = LensAliases as any as S.Schema<ReviewTemplateLenses>;
export type Notes = string;
export interface CreateReviewTemplateInput {
  TemplateName?: string;
  Description?: string;
  Lenses?: string[];
  Notes?: string;
  Tags?: { [key: string]: string | undefined };
  ClientRequestToken?: string;
}
const CreateReviewTemplateInput = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateReviewTemplateInput>;
export type TemplateArn = string;
export interface CreateReviewTemplateOutput {
  TemplateArn?: string;
}
const CreateReviewTemplateOutput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateReviewTemplateOutput>;
export interface CreateTemplateShareInput {
  TemplateArn: string;
  SharedWith?: string;
  ClientRequestToken?: string;
}
const CreateTemplateShareInput = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateTemplateShareInput>;
export interface CreateTemplateShareOutput {
  TemplateArn?: string;
  ShareId?: string;
}
const CreateTemplateShareOutput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateTemplateShareOutput>;
export type WorkloadName = string;
export type WorkloadDescription = string;
export type WorkloadEnvironment = "PRODUCTION" | "PREPRODUCTION" | (string & {});
const WorkloadEnvironment = S.String;

export type AwsAccountId = string;
export type WorkloadAccountIds = string[];
const WorkloadAccountIds = LensAliases as any as S.Schema<WorkloadAccountIds>;
export type AwsRegion = string;
export type WorkloadAwsRegions = string[];
const WorkloadAwsRegions = LensAliases as any as S.Schema<WorkloadAwsRegions>;
export type WorkloadNonAwsRegion = string;
export type WorkloadNonAwsRegions = string[];
const WorkloadNonAwsRegions = LensAliases as any as S.Schema<WorkloadNonAwsRegions>;
export type PillarId = string;
export type WorkloadPillarPriorities = string[];
const WorkloadPillarPriorities = LensAliases as any as S.Schema<WorkloadPillarPriorities>;
export type WorkloadArchitecturalDesign = string;
export type WorkloadReviewOwner = string;
export type WorkloadIndustryType = string;
export type WorkloadIndustry = string;
export type WorkloadLenses = string[];
const WorkloadLenses = LensAliases as any as S.Schema<WorkloadLenses>;
export type TrustedAdvisorIntegrationStatus = "ENABLED" | "DISABLED" | (string & {});
const TrustedAdvisorIntegrationStatus = S.String;

export type DefinitionType = "WORKLOAD_METADATA" | "APP_REGISTRY" | (string & {});
export type WorkloadResourceDefinition = DefinitionType[];
const WorkloadResourceDefinition = Pillars as any as S.Schema<WorkloadResourceDefinition>;
export interface WorkloadDiscoveryConfig {
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus;
  WorkloadResourceDefinition?: DefinitionType[];
}
const WorkloadDiscoveryConfig = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<WorkloadDiscoveryConfig>;
export type ApplicationArn = string;
export type WorkloadApplications = string[];
const WorkloadApplications = LensAliases as any as S.Schema<WorkloadApplications>;
export type WorkloadProfileArns = string[];
const WorkloadProfileArns = LensAliases as any as S.Schema<WorkloadProfileArns>;
export type ReviewTemplateArns = string[];
const ReviewTemplateArns = LensAliases as any as S.Schema<ReviewTemplateArns>;
export type WorkloadIssueManagementStatus = "ENABLED" | "DISABLED" | "INHERIT" | (string & {});
const WorkloadIssueManagementStatus = S.String;

export type IssueManagementType = "AUTO" | "MANUAL" | (string & {});
const IssueManagementType = S.String;

export type JiraProjectKey = string;
export interface WorkloadJiraConfigurationInput {
  IssueManagementStatus?: WorkloadIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
}
const WorkloadJiraConfigurationInput = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<WorkloadJiraConfigurationInput>;
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
const CreateWorkloadInput = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<CreateWorkloadInput>;
export type WorkloadArn = string;
export interface CreateWorkloadOutput {
  WorkloadId?: string;
  WorkloadArn?: string;
}
const CreateWorkloadOutput = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<CreateWorkloadOutput>;
export type PermissionType = "READONLY" | "CONTRIBUTOR" | (string & {});
const PermissionType = S.String;

export interface CreateWorkloadShareInput {
  WorkloadId: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  ClientRequestToken?: string;
}
const CreateWorkloadShareInput = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<CreateWorkloadShareInput>;
export interface CreateWorkloadShareOutput {
  WorkloadId?: string;
  ShareId?: string;
}
const CreateWorkloadShareOutput = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CreateWorkloadShareOutput>;
export interface DeleteAgentContextRequest {
  profileArn: string;
  id: string;
}
const DeleteAgentContextRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteAgentContextRequest>;
export interface DeleteAgentContextResponse {}
const DeleteAgentContextResponse =
  AssociateLensesResponse as any as S.Schema<DeleteAgentContextResponse>;
export interface DeleteAgentGoalRequest {
  profileArn: string;
  id: string;
}
const DeleteAgentGoalRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteAgentGoalRequest>;
export interface DeleteAgentGoalResponse {}
const DeleteAgentGoalResponse = AssociateLensesResponse as any as S.Schema<DeleteAgentGoalResponse>;
export interface DeleteAgentProfileRequest {
  profileArn: string;
}
const DeleteAgentProfileRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteAgentProfileRequest>;
export interface DeleteAgentProfileResponse {}
const DeleteAgentProfileResponse =
  AssociateLensesResponse as any as S.Schema<DeleteAgentProfileResponse>;
export type LensStatusType = "ALL" | "DRAFT" | "PUBLISHED" | (string & {});
const LensStatusType = S.String;

export interface DeleteLensInput {
  LensAlias: string;
  ClientRequestToken?: string;
  LensStatus?: LensStatusType;
}
const DeleteLensInput = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<DeleteLensInput>;
export interface DeleteLensResponse {}
const DeleteLensResponse = AssociateLensesResponse as any as S.Schema<DeleteLensResponse>;
export interface DeleteLensShareInput {
  ShareId: string;
  LensAlias: string;
  ClientRequestToken?: string;
}
const DeleteLensShareInput = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<DeleteLensShareInput>;
export interface DeleteLensShareResponse {}
const DeleteLensShareResponse = AssociateLensesResponse as any as S.Schema<DeleteLensShareResponse>;
export interface DeleteProfileInput {
  ProfileArn: string;
  ClientRequestToken?: string;
}
const DeleteProfileInput = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<DeleteProfileInput>;
export interface DeleteProfileResponse {}
const DeleteProfileResponse = AssociateLensesResponse as any as S.Schema<DeleteProfileResponse>;
export interface DeleteProfileShareInput {
  ShareId: string;
  ProfileArn: string;
  ClientRequestToken?: string;
}
const DeleteProfileShareInput = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteProfileShareInput>;
export interface DeleteProfileShareResponse {}
const DeleteProfileShareResponse =
  AssociateLensesResponse as any as S.Schema<DeleteProfileShareResponse>;
export interface DeleteReviewTemplateInput {
  TemplateArn: string;
  ClientRequestToken?: string;
}
const DeleteReviewTemplateInput = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteReviewTemplateInput>;
export interface DeleteReviewTemplateResponse {}
const DeleteReviewTemplateResponse =
  AssociateLensesResponse as any as S.Schema<DeleteReviewTemplateResponse>;
export interface DeleteTemplateShareInput {
  ShareId: string;
  TemplateArn: string;
  ClientRequestToken?: string;
}
const DeleteTemplateShareInput = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DeleteTemplateShareInput>;
export interface DeleteTemplateShareResponse {}
const DeleteTemplateShareResponse =
  AssociateLensesResponse as any as S.Schema<DeleteTemplateShareResponse>;
export interface DeleteWorkloadInput {
  WorkloadId: string;
  ClientRequestToken?: string;
}
const DeleteWorkloadInput = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<DeleteWorkloadInput>;
export interface DeleteWorkloadResponse {}
const DeleteWorkloadResponse = AssociateLensesResponse as any as S.Schema<DeleteWorkloadResponse>;
export interface DeleteWorkloadShareInput {
  ShareId: string;
  WorkloadId: string;
  ClientRequestToken?: string;
}
const DeleteWorkloadShareInput = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DeleteWorkloadShareInput>;
export interface DeleteWorkloadShareResponse {}
const DeleteWorkloadShareResponse =
  AssociateLensesResponse as any as S.Schema<DeleteWorkloadShareResponse>;
export interface DisassociateLensesInput {
  WorkloadId: string;
  LensAliases?: string[];
}
const DisassociateLensesInput = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DisassociateLensesInput>;
export interface DisassociateLensesResponse {}
const DisassociateLensesResponse =
  AssociateLensesResponse as any as S.Schema<DisassociateLensesResponse>;
export interface DisassociateProfilesInput {
  WorkloadId: string;
  ProfileArns?: string[];
}
const DisassociateProfilesInput = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DisassociateProfilesInput>;
export interface DisassociateProfilesResponse {}
const DisassociateProfilesResponse =
  AssociateLensesResponse as any as S.Schema<DisassociateProfilesResponse>;
export interface ExportLensInput {
  LensAlias: string;
  LensVersion?: string;
}
const ExportLensInput = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<ExportLensInput>;
export type LensJSON = string;
export interface ExportLensOutput {
  LensJSON?: string;
}
const ExportLensOutput = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<ExportLensOutput>;
export interface GetAgentContextRequest {
  profileArn: string;
  id: string;
}
const GetAgentContextRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetAgentContextRequest>;
export interface GetAgentContextResponse {
  context: ContextSummary;
}
const GetAgentContextResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<GetAgentContextResponse>;
export interface GetAgentGoalRequest {
  profileArn: string;
  id: string;
}
const GetAgentGoalRequest = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<GetAgentGoalRequest>;
export interface GetAgentGoalResponse {
  goal: GoalSummary;
}
const GetAgentGoalResponse = CreateAgentGoalResponse as any as S.Schema<GetAgentGoalResponse>;
export interface GetAgentProfileRequest {
  profileArn: string;
}
const GetAgentProfileRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<GetAgentProfileRequest>;
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
const GetAgentProfileResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<GetAgentProfileResponse>;
export type AgentRecommendationArn = string;
export type RemediationType =
  | "AUTO_REMEDIATION"
  | "CONSOLE"
  | "CLI"
  | "SDK"
  | "IAC"
  | "MCP"
  | (string & {});
const RemediationType = S.String;

export interface GetAgentRecommendationRequest {
  recommendationArn: string;
  remediationType?: RemediationType;
}
const GetAgentRecommendationRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<GetAgentRecommendationRequest>;
export type RecommendationArn = string;
export type RecommendationType = "RESOURCE" | "ARCHITECTURE" | "APPLICATION" | (string & {});
const RecommendationType = S.String;

export type Priority = "HIGH" | "MEDIUM" | "LOW" | (string & {});
const Priority = S.String;

export type Effort = "LARGE" | "MEDIUM" | "SMALL" | (string & {});
const Effort = S.String;

export type RecommendationStatus = "ACTIVE" | "SUPPRESSED" | "COMPLETED" | (string & {});
const RecommendationStatus = S.String;

export type RecommendationState = "OPEN" | "CLOSED" | (string & {});
const RecommendationState = S.String;

export type ImpactCategory = "HIGH" | "MEDIUM" | "LOW" | (string & {});
const ImpactCategory = S.String;

export interface Roi {
  estimate?: string;
  detail: string;
}
const Roi = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<Roi>;
export type StringList = string[];
const StringList = LensAliases as any as S.Schema<StringList>;
export type ImpactDetail = string;
export type ImpactDetails = string[];
const ImpactDetails = LensAliases as any as S.Schema<ImpactDetails>;
export interface Insight {
  usagePattern: string;
  signalsDetected?: string;
}
const Insight = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<Insight>;
export type InsightList = Insight[];
const InsightList = /*@__PURE__*/ __L.at(__c8, 1);
export type Highlight = string;
export type Highlights = string[];
const Highlights = LensAliases as any as S.Schema<Highlights>;
export type RecommendedFixStep = string;
export type RecommendedFixSteps = string[];
const RecommendedFixSteps = LensAliases as any as S.Schema<RecommendedFixSteps>;
export interface RemediationSummary {
  recommendation: string;
  steps: string[];
}
const RemediationSummary = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<RemediationSummary>;
export interface CrossPillarBenefit {
  pillar: Pillar;
  title: string;
  description: string;
  impact: ImpactCategory;
}
const CrossPillarBenefit = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<CrossPillarBenefit>;
export type CrossPillarBenefits = CrossPillarBenefit[];
const CrossPillarBenefits = /*@__PURE__*/ __L.at(__c8, 4);
export type RiskRating = "LOW" | "MEDIUM" | "HIGH" | (string & {});
const RiskRating = S.String;

export interface TradeOff {
  pillar: Pillar;
  title: string;
  description: string;
  risk: RiskRating;
  mitigation: string;
  riskExplanation?: string;
}
const TradeOff = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<TradeOff>;
export type TradeOffs = TradeOff[];
const TradeOffs = /*@__PURE__*/ __L.at(__c8, 6);
export type RecommendationSource =
  | "TRUSTED_ADVISOR"
  | "COST_EXPLORER"
  | "CLOUDWATCH"
  | "WELL_ARCHITECTED_TOOL"
  | "WELL_ARCHITECTED_AGENT"
  | "CUSTOMER_IAC"
  | (string & {});
export type RecommendationSourceList = RecommendationSource[];
const RecommendationSourceList = Pillars as any as S.Schema<RecommendationSourceList>;
export interface RecommendationGoal {
  title: string;
}
const RecommendationGoal = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<RecommendationGoal>;
export type RecommendationGoals = RecommendationGoal[];
const RecommendationGoals = /*@__PURE__*/ __L.at(__c9, 0);
export interface RemediationStep {
  title?: string | redacted.Redacted<string>;
  content: string | redacted.Redacted<string>;
}
const RemediationStep = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<RemediationStep>;
export type RemediationSteps = RemediationStep[];
const RemediationSteps = /*@__PURE__*/ __L.at(__c9, 2);
export interface ResourceLink {
  url: string;
  title?: string;
}
const ResourceLink = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<ResourceLink>;
export type ResourceLinks = ResourceLink[];
const ResourceLinks = /*@__PURE__*/ __L.at(__c9, 4);
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
const AgentRecommendationRemediation = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<AgentRecommendationRemediation>;
export type AgentRecommendationRemediations = AgentRecommendationRemediation[];
const AgentRecommendationRemediations = /*@__PURE__*/ __L.at(__c9, 6);
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
const GetAgentRecommendationResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetAgentRecommendationResponse>;
export interface GetAgentRecommendationGenerationRequest {
  profileArn: string;
  generationId: string;
}
const GetAgentRecommendationGenerationRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetAgentRecommendationGenerationRequest>;
export type GenerationStatus = "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "ERROR" | (string & {});
const GenerationStatus = S.String;

export type GoalIdList = string[];
const GoalIdList = LensAliases as any as S.Schema<GoalIdList>;
export type ItemId = string;
export type ItemIds = string[];
const ItemIds = LensAliases as any as S.Schema<ItemIds>;
export interface PillarItem {
  pillar: Pillar;
  ids: string[];
}
const PillarItem = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<PillarItem>;
export type PillarItems = PillarItem[];
const PillarItems = /*@__PURE__*/ __L.at(__c10, 2);
export interface Scope {
  pillars: Pillar[];
  goalIds?: string[];
  items?: PillarItem[];
}
const Scope = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<Scope>;
export interface Progress {
  stepsCompleted: number;
  totalSteps: number;
  completionPercentage: number;
}
const Progress = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<Progress>;
export interface ErrorDetails {
  code: string;
  message: string;
}
const ErrorDetails = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<ErrorDetails>;
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
const GetAgentRecommendationGenerationResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetAgentRecommendationGenerationResponse>;
export interface GetAnswerInput {
  WorkloadId: string;
  LensAlias: string;
  QuestionId: string;
  MilestoneNumber?: number;
}
const GetAnswerInput = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<GetAnswerInput>;
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
const ChoiceContent = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<ChoiceContent>;
export type AdditionalResourceType = "HELPFUL_RESOURCE" | "IMPROVEMENT_PLAN" | (string & {});
const AdditionalResourceType = S.String;

export type Urls = ChoiceContent[];
const Urls = /*@__PURE__*/ __L.at(__c11, 1);
export interface AdditionalResources {
  Type?: AdditionalResourceType;
  Content?: ChoiceContent[];
}
const AdditionalResources = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<AdditionalResources>;
export type AdditionalResourcesList = AdditionalResources[];
const AdditionalResourcesList = /*@__PURE__*/ __L.at(__c11, 3);
export interface Choice {
  ChoiceId?: string;
  Title?: string;
  Description?: string;
  HelpfulResource?: ChoiceContent;
  ImprovementPlan?: ChoiceContent;
  AdditionalResources?: AdditionalResources[];
}
const Choice = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<Choice>;
export type Choices = Choice[];
const Choices = /*@__PURE__*/ __L.at(__c11, 5);
export type SelectedChoices = string[];
const SelectedChoices = LensAliases as any as S.Schema<SelectedChoices>;
export type ChoiceStatus = "SELECTED" | "NOT_APPLICABLE" | "UNSELECTED" | (string & {});
const ChoiceStatus = S.String;

export type ChoiceReason =
  | "OUT_OF_SCOPE"
  | "BUSINESS_PRIORITIES"
  | "ARCHITECTURE_CONSTRAINTS"
  | "OTHER"
  | "NONE"
  | (string & {});
const ChoiceReason = S.String;

export type ChoiceNotes = string;
export interface ChoiceAnswer {
  ChoiceId?: string;
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
  Notes?: string;
}
const ChoiceAnswer = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<ChoiceAnswer>;
export type ChoiceAnswers = ChoiceAnswer[];
const ChoiceAnswers = /*@__PURE__*/ __L.at(__c11, 7);
export type IsApplicable = boolean;
export type Risk = "UNANSWERED" | "HIGH" | "MEDIUM" | "NONE" | "NOT_APPLICABLE" | (string & {});
const Risk = S.String;

export type AnswerReason =
  | "OUT_OF_SCOPE"
  | "BUSINESS_PRIORITIES"
  | "ARCHITECTURE_CONSTRAINTS"
  | "OTHER"
  | "NONE"
  | (string & {});
const AnswerReason = S.String;

export type JiraIssueUrl = string;
export interface JiraConfiguration {
  JiraIssueUrl?: string;
  LastSyncedTime?: Date;
}
const JiraConfiguration = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<JiraConfiguration>;
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
const Answer = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<Answer>;
export interface GetAnswerOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  Answer?: Answer;
}
const GetAnswerOutput = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<GetAnswerOutput>;
export type ReportFormat = "PDF" | "JSON" | (string & {});
const ReportFormat = S.String;

export type IncludeSharedResources = boolean;
export type NextToken = string;
export type MaxResults = number;
export interface GetConsolidatedReportInput {
  Format?: ReportFormat;
  IncludeSharedResources?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
const GetConsolidatedReportInput = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<GetConsolidatedReportInput>;
export type MetricType = "WORKLOAD" | (string & {});
const MetricType = S.String;

export type Count = number;
export type RiskCounts = { [key in Risk]?: number };
const RiskCounts = /*@__PURE__*/ __L.at(__c12, 4);
export interface BestPractice {
  ChoiceId?: string;
  ChoiceTitle?: string;
}
const BestPractice = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<BestPractice>;
export type BestPractices = BestPractice[];
const BestPractices = /*@__PURE__*/ __L.at(__c12, 6);
export interface QuestionMetric {
  QuestionId?: string;
  Risk?: Risk;
  BestPractices?: BestPractice[];
}
const QuestionMetric = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<QuestionMetric>;
export type QuestionMetrics = QuestionMetric[];
const QuestionMetrics = /*@__PURE__*/ __L.at(__c13, 0);
export interface PillarMetric {
  PillarId?: string;
  RiskCounts?: { [key: string]: number | undefined };
  Questions?: QuestionMetric[];
}
const PillarMetric = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<PillarMetric>;
export type PillarMetrics = PillarMetric[];
const PillarMetrics = /*@__PURE__*/ __L.at(__c13, 2);
export interface LensMetric {
  LensArn?: string;
  Pillars?: PillarMetric[];
  RiskCounts?: { [key: string]: number | undefined };
}
const LensMetric = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<LensMetric>;
export type LensMetrics = LensMetric[];
const LensMetrics = /*@__PURE__*/ __L.at(__c13, 4);
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
const ConsolidatedReportMetric = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ConsolidatedReportMetric>;
export type ConsolidatedReportMetrics = ConsolidatedReportMetric[];
const ConsolidatedReportMetrics = /*@__PURE__*/ __L.at(__c13, 6);
export type Base64String = string;
export interface GetConsolidatedReportOutput {
  Metrics?: ConsolidatedReportMetric[];
  NextToken?: string;
  Base64String?: string;
}
const GetConsolidatedReportOutput = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<GetConsolidatedReportOutput>;
export interface GetGlobalSettingsRequest {}
const GetGlobalSettingsRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<GetGlobalSettingsRequest>;
export type OrganizationSharingStatus = "ENABLED" | "DISABLED" | (string & {});
const OrganizationSharingStatus = S.String;

export type DiscoveryIntegrationStatus = "ENABLED" | "DISABLED" | (string & {});
const DiscoveryIntegrationStatus = S.String;

export type IntegrationStatus = "CONFIGURED" | "NOT_CONFIGURED" | (string & {});
const IntegrationStatus = S.String;

export type AccountJiraIssueManagementStatus = "ENABLED" | "DISABLED" | (string & {});
const AccountJiraIssueManagementStatus = S.String;

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
const AccountJiraConfigurationOutput = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<AccountJiraConfigurationOutput>;
export interface GetGlobalSettingsOutput {
  OrganizationSharingStatus?: OrganizationSharingStatus;
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus;
  JiraConfiguration?: AccountJiraConfigurationOutput;
}
const GetGlobalSettingsOutput = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<GetGlobalSettingsOutput>;
export interface GetLensInput {
  LensAlias: string;
  LensVersion?: string;
}
const GetLensInput = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<GetLensInput>;
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
const Lens = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<Lens>;
export interface GetLensOutput {
  Lens?: Lens;
}
const GetLensOutput = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<GetLensOutput>;
export interface GetLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneNumber?: number;
}
const GetLensReviewInput = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<GetLensReviewInput>;
export type LensStatus =
  | "CURRENT"
  | "NOT_CURRENT"
  | "DEPRECATED"
  | "DELETED"
  | "UNSHARED"
  | (string & {});
const LensStatus = S.String;

export type PillarName = string;
export interface PillarReviewSummary {
  PillarId?: string;
  PillarName?: string;
  Notes?: string;
  RiskCounts?: { [key: string]: number | undefined };
  PrioritizedRiskCounts?: { [key: string]: number | undefined };
}
const PillarReviewSummary = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<PillarReviewSummary>;
export type PillarReviewSummaries = PillarReviewSummary[];
const PillarReviewSummaries = /*@__PURE__*/ __L.at(__c15, 0);
export type SelectedQuestionId = string;
export type SelectedQuestionIds = string[];
const SelectedQuestionIds = LensAliases as any as S.Schema<SelectedQuestionIds>;
export interface SelectedPillar {
  PillarId?: string;
  SelectedQuestionIds?: string[];
}
const SelectedPillar = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<SelectedPillar>;
export type SelectedPillars = SelectedPillar[];
const SelectedPillars = /*@__PURE__*/ __L.at(__c15, 2);
export interface JiraSelectedQuestionConfiguration {
  SelectedPillars?: SelectedPillar[];
}
const JiraSelectedQuestionConfiguration = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<JiraSelectedQuestionConfiguration>;
export interface WorkloadProfile {
  ProfileArn?: string;
  ProfileVersion?: string;
}
const WorkloadProfile = CreateProfileOutput as any as S.Schema<WorkloadProfile>;
export type WorkloadProfiles = WorkloadProfile[];
const WorkloadProfiles = /*@__PURE__*/ __L.at(__c15, 4);
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
const LensReview = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<LensReview>;
export interface GetLensReviewOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensReview?: LensReview;
}
const GetLensReviewOutput = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<GetLensReviewOutput>;
export interface GetLensReviewReportInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneNumber?: number;
}
const GetLensReviewReportInput = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<GetLensReviewReportInput>;
export interface LensReviewReport {
  LensAlias?: string;
  LensArn?: string;
  Base64String?: string;
}
const LensReviewReport = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<LensReviewReport>;
export interface GetLensReviewReportOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensReviewReport?: LensReviewReport;
}
const GetLensReviewReportOutput = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<GetLensReviewReportOutput>;
export interface GetLensVersionDifferenceInput {
  LensAlias: string;
  BaseLensVersion?: string;
  TargetLensVersion?: string;
}
const GetLensVersionDifferenceInput = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<GetLensVersionDifferenceInput>;
export type DifferenceStatus = "UPDATED" | "NEW" | "DELETED" | (string & {});
const DifferenceStatus = S.String;

export interface QuestionDifference {
  QuestionId?: string;
  QuestionTitle?: string;
  DifferenceStatus?: DifferenceStatus;
}
const QuestionDifference = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<QuestionDifference>;
export type QuestionDifferences = QuestionDifference[];
const QuestionDifferences = /*@__PURE__*/ __L.at(__c16, 4);
export interface PillarDifference {
  PillarId?: string;
  PillarName?: string;
  DifferenceStatus?: DifferenceStatus;
  QuestionDifferences?: QuestionDifference[];
}
const PillarDifference = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<PillarDifference>;
export type PillarDifferences = PillarDifference[];
const PillarDifferences = /*@__PURE__*/ __L.at(__c16, 6);
export interface VersionDifferences {
  PillarDifferences?: PillarDifference[];
}
const VersionDifferences = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<VersionDifferences>;
export interface GetLensVersionDifferenceOutput {
  LensAlias?: string;
  LensArn?: string;
  BaseLensVersion?: string;
  TargetLensVersion?: string;
  LatestLensVersion?: string;
  VersionDifferences?: VersionDifferences;
}
const GetLensVersionDifferenceOutput = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<GetLensVersionDifferenceOutput>;
export interface GetMilestoneInput {
  WorkloadId: string;
  MilestoneNumber: number;
}
const GetMilestoneInput = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<GetMilestoneInput>;
export type IsReviewOwnerUpdateAcknowledged = boolean;
export type WorkloadImprovementStatus =
  | "NOT_APPLICABLE"
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "RISK_ACKNOWLEDGED"
  | (string & {});
const WorkloadImprovementStatus = S.String;

export interface WorkloadJiraConfigurationOutput {
  IssueManagementStatus?: WorkloadIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
  StatusMessage?: string;
}
const WorkloadJiraConfigurationOutput = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<WorkloadJiraConfigurationOutput>;
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
const Workload = /*@__PURE__*/ __L.at(__c17, 3) as any as S.Schema<Workload>;
export interface Milestone {
  MilestoneNumber?: number;
  MilestoneName?: string;
  RecordedAt?: Date;
  Workload?: Workload;
}
const Milestone = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<Milestone>;
export interface GetMilestoneOutput {
  WorkloadId?: string;
  Milestone?: Milestone;
}
const GetMilestoneOutput = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<GetMilestoneOutput>;
export interface GetProfileInput {
  ProfileArn: string;
  ProfileVersion?: string;
}
const GetProfileInput = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<GetProfileInput>;
export interface ProfileChoice {
  ChoiceId?: string;
  ChoiceTitle?: string;
  ChoiceDescription?: string;
}
const ProfileChoice = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<ProfileChoice>;
export type ProfileQuestionChoices = ProfileChoice[];
const ProfileQuestionChoices = /*@__PURE__*/ __L.at(__c18, 0);
export type SelectedChoiceIds = string[];
const SelectedChoiceIds = LensAliases as any as S.Schema<SelectedChoiceIds>;
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
const ProfileQuestion = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<ProfileQuestion>;
export type ProfileQuestions = ProfileQuestion[];
const ProfileQuestions = /*@__PURE__*/ __L.at(__c18, 2);
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
const Profile = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<Profile>;
export interface GetProfileOutput {
  Profile?: Profile;
}
const GetProfileOutput = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<GetProfileOutput>;
export interface GetProfileTemplateInput {}
const GetProfileTemplateInput = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<GetProfileTemplateInput>;
export interface ProfileTemplateChoice {
  ChoiceId?: string;
  ChoiceTitle?: string;
  ChoiceDescription?: string;
}
export type ProfileTemplateQuestionChoices = ProfileTemplateChoice[];
const ProfileTemplateQuestionChoices =
  ProfileQuestionChoices as any as S.Schema<ProfileTemplateQuestionChoices>;
export interface ProfileTemplateQuestion {
  QuestionId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  QuestionChoices?: ProfileTemplateChoice[];
  MinSelectedChoices?: number;
  MaxSelectedChoices?: number;
}
const ProfileTemplateQuestion = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ProfileTemplateQuestion>;
export type TemplateQuestions = ProfileTemplateQuestion[];
const TemplateQuestions = /*@__PURE__*/ __L.at(__c18, 7);
export interface ProfileTemplate {
  TemplateName?: string;
  TemplateQuestions?: ProfileTemplateQuestion[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const ProfileTemplate = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<ProfileTemplate>;
export interface GetProfileTemplateOutput {
  ProfileTemplate?: ProfileTemplate;
}
const GetProfileTemplateOutput = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<GetProfileTemplateOutput>;
export interface GetReviewTemplateInput {
  TemplateArn: string;
}
const GetReviewTemplateInput = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<GetReviewTemplateInput>;
export type Question = "UNANSWERED" | "ANSWERED" | (string & {});
const Question = S.String;

export type QuestionCounts = { [key in Question]?: number };
const QuestionCounts = /*@__PURE__*/ __L.at(__c19, 3);
export type ReviewTemplateUpdateStatus = "CURRENT" | "LENS_NOT_CURRENT" | (string & {});
const ReviewTemplateUpdateStatus = S.String;

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
const ReviewTemplate = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<ReviewTemplate>;
export interface GetReviewTemplateOutput {
  ReviewTemplate?: ReviewTemplate;
}
const GetReviewTemplateOutput = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<GetReviewTemplateOutput>;
export interface GetReviewTemplateAnswerInput {
  TemplateArn: string;
  LensAlias: string;
  QuestionId: string;
}
const GetReviewTemplateAnswerInput = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<GetReviewTemplateAnswerInput>;
export type ReviewTemplateAnswerStatus = "UNANSWERED" | "ANSWERED" | (string & {});
const ReviewTemplateAnswerStatus = S.String;

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
const ReviewTemplateAnswer = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<ReviewTemplateAnswer>;
export interface GetReviewTemplateAnswerOutput {
  TemplateArn?: string;
  LensAlias?: string;
  Answer?: ReviewTemplateAnswer;
}
const GetReviewTemplateAnswerOutput = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<GetReviewTemplateAnswerOutput>;
export interface GetReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
}
const GetReviewTemplateLensReviewInput = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<GetReviewTemplateLensReviewInput>;
export interface ReviewTemplatePillarReviewSummary {
  PillarId?: string;
  PillarName?: string;
  Notes?: string;
  QuestionCounts?: { [key: string]: number | undefined };
}
const ReviewTemplatePillarReviewSummary = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<ReviewTemplatePillarReviewSummary>;
export type ReviewTemplatePillarReviewSummaries = ReviewTemplatePillarReviewSummary[];
const ReviewTemplatePillarReviewSummaries = /*@__PURE__*/ __L.at(__c20, 3);
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
const ReviewTemplateLensReview = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ReviewTemplateLensReview>;
export interface GetReviewTemplateLensReviewOutput {
  TemplateArn?: string;
  LensReview?: ReviewTemplateLensReview;
}
const GetReviewTemplateLensReviewOutput = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<GetReviewTemplateLensReviewOutput>;
export interface GetWorkloadInput {
  WorkloadId: string;
}
const GetWorkloadInput = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<GetWorkloadInput>;
export interface GetWorkloadOutput {
  Workload?: Workload;
}
const GetWorkloadOutput = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<GetWorkloadOutput>;
export interface ImportLensInput {
  LensAlias?: string;
  JSONString?: string;
  ClientRequestToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const ImportLensInput = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<ImportLensInput>;
export type ImportLensStatus = "IN_PROGRESS" | "COMPLETE" | "ERROR" | (string & {});
const ImportLensStatus = S.String;

export interface ImportLensOutput {
  LensArn?: string;
  Status?: ImportLensStatus;
}
const ImportLensOutput = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<ImportLensOutput>;
export interface ListAgentContextsRequest {
  profileArn: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentContextsRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<ListAgentContextsRequest>;
export type ContextSummaries = ContextSummary[];
const ContextSummaries = /*@__PURE__*/ __L.at(__c21, 3);
export interface ListAgentContextsResponse {
  items: ContextSummary[];
  nextToken?: string;
}
const ListAgentContextsResponse = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<ListAgentContextsResponse>;
export interface ListAgentGoalsRequest {
  profileArn: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentGoalsRequest = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<ListAgentGoalsRequest>;
export type GoalSummaries = GoalSummary[];
const GoalSummaries = /*@__PURE__*/ __L.at(__c21, 6);
export interface ListAgentGoalsResponse {
  items: GoalSummary[];
  nextToken?: string;
}
const ListAgentGoalsResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ListAgentGoalsResponse>;
export interface ListAgentProfilesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListAgentProfilesRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<ListAgentProfilesRequest>;
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
const AgentProfileSummary = GetAgentProfileResponse as any as S.Schema<AgentProfileSummary>;
export type AgentProfileSummaries = AgentProfileSummary[];
const AgentProfileSummaries = /*@__PURE__*/ __L.at(__c22, 1);
export interface ListAgentProfilesResponse {
  items: AgentProfileSummary[];
  nextToken?: string;
}
const ListAgentProfilesResponse = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<ListAgentProfilesResponse>;
export interface ListAgentRecommendationGenerationsRequest {
  profileArn: string;
  recommendationType?: RecommendationType;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentRecommendationGenerationsRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<ListAgentRecommendationGenerationsRequest>;
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
const AgentRecommendationGenerationSummary = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<AgentRecommendationGenerationSummary>;
export type AgentRecommendationGenerationSummaries = AgentRecommendationGenerationSummary[];
const AgentRecommendationGenerationSummaries = /*@__PURE__*/ __L.at(__c22, 5);
export interface ListAgentRecommendationGenerationsResponse {
  items: AgentRecommendationGenerationSummary[];
  nextToken?: string;
}
const ListAgentRecommendationGenerationsResponse = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<ListAgentRecommendationGenerationsResponse>;
export type RecommendationItemType = "AWS_RESOURCE" | "RECOMMENDATION" | (string & {});
const RecommendationItemType = S.String;

export interface ListAgentRecommendationItemsRequest {
  recommendationArn: string;
  type?: RecommendationItemType;
  maxResults?: number;
  nextToken?: string;
}
const ListAgentRecommendationItemsRequest = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<ListAgentRecommendationItemsRequest>;
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
const AgentRecommendationItemSummary = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<AgentRecommendationItemSummary>;
export type AgentRecommendationItemSummaries = AgentRecommendationItemSummary[];
const AgentRecommendationItemSummaries = /*@__PURE__*/ __L.at(__c23, 1);
export interface ListAgentRecommendationItemsResponse {
  items: AgentRecommendationItemSummary[];
  nextToken?: string;
}
const ListAgentRecommendationItemsResponse = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<ListAgentRecommendationItemsResponse>;
export interface ListAgentRecommendationsRequest {
  profileArn: string;
  maxResults?: number;
  nextToken?: string;
  state?: RecommendationState;
  pillar?: Pillar;
}
const ListAgentRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<ListAgentRecommendationsRequest>;
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
const AgentRecommendationSummary = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<AgentRecommendationSummary>;
export type AgentRecommendationSummaries = AgentRecommendationSummary[];
const AgentRecommendationSummaries = /*@__PURE__*/ __L.at(__c23, 5);
export interface ListAgentRecommendationsResponse {
  items: AgentRecommendationSummary[];
  nextToken?: string;
}
const ListAgentRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ListAgentRecommendationsResponse>;
export type QuestionPriority = "PRIORITIZED" | "NONE" | (string & {});
const QuestionPriority = S.String;

export interface ListAnswersInput {
  WorkloadId: string;
  LensAlias: string;
  PillarId?: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
  QuestionPriority?: QuestionPriority;
}
const ListAnswersInput = /*@__PURE__*/ __L.at(__c23, 7) as any as S.Schema<ListAnswersInput>;
export interface ChoiceAnswerSummary {
  ChoiceId?: string;
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
}
const ChoiceAnswerSummary = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<ChoiceAnswerSummary>;
export type ChoiceAnswerSummaries = ChoiceAnswerSummary[];
const ChoiceAnswerSummaries = /*@__PURE__*/ __L.at(__c24, 1);
export type QuestionType = "PRIORITIZED" | "NON_PRIORITIZED" | (string & {});
const QuestionType = S.String;

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
const AnswerSummary = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<AnswerSummary>;
export type AnswerSummaries = AnswerSummary[];
const AnswerSummaries = /*@__PURE__*/ __L.at(__c24, 3);
export interface ListAnswersOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  AnswerSummaries?: AnswerSummary[];
  NextToken?: string;
}
const ListAnswersOutput = /*@__PURE__*/ __L.at(__c24, 4) as any as S.Schema<ListAnswersOutput>;
export interface ListCheckDetailsInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
  LensArn?: string;
  PillarId?: string;
  QuestionId?: string;
  ChoiceId?: string;
}
const ListCheckDetailsInput = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<ListCheckDetailsInput>;
export type CheckId = string;
export type CheckName = string;
export type CheckDescription = string;
export type CheckProvider = "TRUSTED_ADVISOR" | (string & {});
const CheckProvider = S.String;

export type CheckStatus =
  | "OKAY"
  | "WARNING"
  | "ERROR"
  | "NOT_AVAILABLE"
  | "FETCH_FAILED"
  | (string & {});
const CheckStatus = S.String;

export type FlaggedResources = number;
export type CheckFailureReason =
  | "ASSUME_ROLE_ERROR"
  | "ACCESS_DENIED"
  | "UNKNOWN_ERROR"
  | "PREMIUM_SUPPORT_REQUIRED"
  | (string & {});
const CheckFailureReason = S.String;

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
const CheckDetail = /*@__PURE__*/ __L.at(__c24, 6) as any as S.Schema<CheckDetail>;
export type CheckDetails = CheckDetail[];
const CheckDetails = /*@__PURE__*/ __L.at(__c24, 7);
export interface ListCheckDetailsOutput {
  CheckDetails?: CheckDetail[];
  NextToken?: string;
}
const ListCheckDetailsOutput = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<ListCheckDetailsOutput>;
export interface ListCheckSummariesInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
  LensArn?: string;
  PillarId?: string;
  QuestionId?: string;
  ChoiceId?: string;
}
const ListCheckSummariesInput = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<ListCheckSummariesInput>;
export type CheckStatusCount = number;
export type AccountSummary = { [key in CheckStatus]?: number };
const AccountSummary = QuestionCounts as any as S.Schema<AccountSummary>;
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
const CheckSummary = /*@__PURE__*/ __L.at(__c25, 2) as any as S.Schema<CheckSummary>;
export type CheckSummaries = CheckSummary[];
const CheckSummaries = /*@__PURE__*/ __L.at(__c25, 3);
export interface ListCheckSummariesOutput {
  CheckSummaries?: CheckSummary[];
  NextToken?: string;
}
const ListCheckSummariesOutput = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<ListCheckSummariesOutput>;
export type LensType = "AWS_OFFICIAL" | "CUSTOM_SHARED" | "CUSTOM_SELF" | (string & {});
const LensType = S.String;

export interface ListLensesInput {
  NextToken?: string;
  MaxResults?: number;
  LensType?: LensType;
  LensStatus?: LensStatusType;
  LensName?: string;
}
const ListLensesInput = /*@__PURE__*/ __L.at(__c25, 5) as any as S.Schema<ListLensesInput>;
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
const LensSummary = /*@__PURE__*/ __L.at(__c25, 6) as any as S.Schema<LensSummary>;
export type LensSummaries = LensSummary[];
const LensSummaries = /*@__PURE__*/ __L.at(__c25, 7);
export interface ListLensesOutput {
  LensSummaries?: LensSummary[];
  NextToken?: string;
}
const ListLensesOutput = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<ListLensesOutput>;
export interface ListLensReviewImprovementsInput {
  WorkloadId: string;
  LensAlias: string;
  PillarId?: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
  QuestionPriority?: QuestionPriority;
}
const ListLensReviewImprovementsInput = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<ListLensReviewImprovementsInput>;
export interface ChoiceImprovementPlan {
  ChoiceId?: string;
  DisplayText?: string;
  ImprovementPlanUrl?: string;
}
const ChoiceImprovementPlan = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<ChoiceImprovementPlan>;
export type ChoiceImprovementPlans = ChoiceImprovementPlan[];
const ChoiceImprovementPlans = /*@__PURE__*/ __L.at(__c26, 3);
export interface ImprovementSummary {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  Risk?: Risk;
  ImprovementPlanUrl?: string;
  ImprovementPlans?: ChoiceImprovementPlan[];
  JiraConfiguration?: JiraConfiguration;
}
const ImprovementSummary = /*@__PURE__*/ __L.at(__c26, 4) as any as S.Schema<ImprovementSummary>;
export type ImprovementSummaries = ImprovementSummary[];
const ImprovementSummaries = /*@__PURE__*/ __L.at(__c26, 5);
export interface ListLensReviewImprovementsOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  ImprovementSummaries?: ImprovementSummary[];
  NextToken?: string;
}
const ListLensReviewImprovementsOutput = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<ListLensReviewImprovementsOutput>;
export interface ListLensReviewsInput {
  WorkloadId: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
}
const ListLensReviewsInput = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<ListLensReviewsInput>;
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
const LensReviewSummary = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<LensReviewSummary>;
export type LensReviewSummaries = LensReviewSummary[];
const LensReviewSummaries = /*@__PURE__*/ __L.at(__c27, 1);
export interface ListLensReviewsOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensReviewSummaries?: LensReviewSummary[];
  NextToken?: string;
}
const ListLensReviewsOutput = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<ListLensReviewsOutput>;
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
const ShareStatus = S.String;

export interface ListLensSharesInput {
  LensAlias: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
const ListLensSharesInput = /*@__PURE__*/ __L.at(__c27, 3) as any as S.Schema<ListLensSharesInput>;
export interface LensShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
const LensShareSummary = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<LensShareSummary>;
export type LensShareSummaries = LensShareSummary[];
const LensShareSummaries = /*@__PURE__*/ __L.at(__c27, 5);
export interface ListLensSharesOutput {
  LensShareSummaries?: LensShareSummary[];
  NextToken?: string;
}
const ListLensSharesOutput = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<ListLensSharesOutput>;
export interface ListMilestonesInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListMilestonesInput = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<ListMilestonesInput>;
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
const WorkloadSummary = /*@__PURE__*/ __L.at(__c28, 0) as any as S.Schema<WorkloadSummary>;
export interface MilestoneSummary {
  MilestoneNumber?: number;
  MilestoneName?: string;
  RecordedAt?: Date;
  WorkloadSummary?: WorkloadSummary;
}
const MilestoneSummary = /*@__PURE__*/ __L.at(__c28, 1) as any as S.Schema<MilestoneSummary>;
export type MilestoneSummaries = MilestoneSummary[];
const MilestoneSummaries = /*@__PURE__*/ __L.at(__c28, 2);
export interface ListMilestonesOutput {
  WorkloadId?: string;
  MilestoneSummaries?: MilestoneSummary[];
  NextToken?: string;
}
const ListMilestonesOutput = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<ListMilestonesOutput>;
export type ResourceArn = string;
export interface ListNotificationsInput {
  WorkloadId?: string;
  NextToken?: string;
  MaxResults?: number;
  ResourceArn?: string;
}
const ListNotificationsInput = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<ListNotificationsInput>;
export type NotificationType = "LENS_VERSION_UPGRADED" | "LENS_VERSION_DEPRECATED" | (string & {});
const NotificationType = S.String;

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
const LensUpgradeSummary = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<LensUpgradeSummary>;
export interface NotificationSummary {
  Type?: NotificationType;
  LensUpgradeSummary?: LensUpgradeSummary;
}
const NotificationSummary = /*@__PURE__*/ __L.at(__c28, 6) as any as S.Schema<NotificationSummary>;
export type NotificationSummaries = NotificationSummary[];
const NotificationSummaries = /*@__PURE__*/ __L.at(__c28, 7);
export interface ListNotificationsOutput {
  NotificationSummaries?: NotificationSummary[];
  NextToken?: string;
}
const ListNotificationsOutput = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<ListNotificationsOutput>;
export interface ListProfileNotificationsInput {
  WorkloadId?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListProfileNotificationsInput = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<ListProfileNotificationsInput>;
export type ProfileNotificationType = "PROFILE_ANSWERS_UPDATED" | "PROFILE_DELETED" | (string & {});
const ProfileNotificationType = S.String;

export interface ProfileNotificationSummary {
  CurrentProfileVersion?: string;
  LatestProfileVersion?: string;
  Type?: ProfileNotificationType;
  ProfileArn?: string;
  ProfileName?: string;
  WorkloadId?: string;
  WorkloadName?: string;
}
const ProfileNotificationSummary = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<ProfileNotificationSummary>;
export type ProfileNotificationSummaries = ProfileNotificationSummary[];
const ProfileNotificationSummaries = /*@__PURE__*/ __L.at(__c29, 3);
export interface ListProfileNotificationsOutput {
  NotificationSummaries?: ProfileNotificationSummary[];
  NextToken?: string;
}
const ListProfileNotificationsOutput = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<ListProfileNotificationsOutput>;
export type ProfileNamePrefix = string;
export type ProfileOwnerType = "SELF" | "SHARED" | (string & {});
const ProfileOwnerType = S.String;

export interface ListProfilesInput {
  ProfileNamePrefix?: string;
  ProfileOwnerType?: ProfileOwnerType;
  NextToken?: string;
  MaxResults?: number;
}
const ListProfilesInput = /*@__PURE__*/ __L.at(__c29, 5) as any as S.Schema<ListProfilesInput>;
export interface ProfileSummary {
  ProfileArn?: string;
  ProfileVersion?: string;
  ProfileName?: string;
  ProfileDescription?: string;
  Owner?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const ProfileSummary = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<ProfileSummary>;
export type ProfileSummaries = ProfileSummary[];
const ProfileSummaries = /*@__PURE__*/ __L.at(__c29, 7);
export interface ListProfilesOutput {
  ProfileSummaries?: ProfileSummary[];
  NextToken?: string;
}
const ListProfilesOutput = /*@__PURE__*/ __L.at(__c30, 0) as any as S.Schema<ListProfilesOutput>;
export interface ListProfileSharesInput {
  ProfileArn: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
const ListProfileSharesInput = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<ListProfileSharesInput>;
export interface ProfileShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type ProfileShareSummaries = ProfileShareSummary[];
const ProfileShareSummaries = LensShareSummaries as any as S.Schema<ProfileShareSummaries>;
export interface ListProfileSharesOutput {
  ProfileShareSummaries?: ProfileShareSummary[];
  NextToken?: string;
}
const ListProfileSharesOutput = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<ListProfileSharesOutput>;
export interface ListReviewTemplateAnswersInput {
  TemplateArn: string;
  LensAlias: string;
  PillarId?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListReviewTemplateAnswersInput = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<ListReviewTemplateAnswersInput>;
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
const ReviewTemplateAnswerSummary = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<ReviewTemplateAnswerSummary>;
export type ReviewTemplateAnswerSummaries = ReviewTemplateAnswerSummary[];
const ReviewTemplateAnswerSummaries = /*@__PURE__*/ __L.at(__c30, 5);
export interface ListReviewTemplateAnswersOutput {
  TemplateArn?: string;
  LensAlias?: string;
  AnswerSummaries?: ReviewTemplateAnswerSummary[];
  NextToken?: string;
}
const ListReviewTemplateAnswersOutput = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<ListReviewTemplateAnswersOutput>;
export interface ListReviewTemplatesInput {
  NextToken?: string;
  MaxResults?: number;
}
const ListReviewTemplatesInput = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<ListReviewTemplatesInput>;
export interface ReviewTemplateSummary {
  Description?: string;
  Lenses?: string[];
  Owner?: string;
  UpdatedAt?: Date;
  TemplateArn?: string;
  TemplateName?: string;
  UpdateStatus?: ReviewTemplateUpdateStatus;
}
const ReviewTemplateSummary = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<ReviewTemplateSummary>;
export type ReviewTemplates = ReviewTemplateSummary[];
const ReviewTemplates = /*@__PURE__*/ __L.at(__c31, 1);
export interface ListReviewTemplatesOutput {
  ReviewTemplates?: ReviewTemplateSummary[];
  NextToken?: string;
}
const ListReviewTemplatesOutput = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<ListReviewTemplatesOutput>;
export type WorkloadNamePrefix = string;
export type LensNamePrefix = string;
export type ShareResourceType = "WORKLOAD" | "LENS" | "PROFILE" | "TEMPLATE" | (string & {});
const ShareResourceType = S.String;

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
const ListShareInvitationsInput = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ListShareInvitationsInput>;
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
const ShareInvitationSummary = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<ShareInvitationSummary>;
export type ShareInvitationSummaries = ShareInvitationSummary[];
const ShareInvitationSummaries = /*@__PURE__*/ __L.at(__c31, 5);
export interface ListShareInvitationsOutput {
  ShareInvitationSummaries?: ShareInvitationSummary[];
  NextToken?: string;
}
const ListShareInvitationsOutput = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<ListShareInvitationsOutput>;
export interface ListTagsForResourceInput {
  WorkloadArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<ListTagsForResourceOutput>;
export interface ListTemplateSharesInput {
  TemplateArn: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
const ListTemplateSharesInput = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<ListTemplateSharesInput>;
export interface TemplateShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type TemplateShareSummaries = TemplateShareSummary[];
const TemplateShareSummaries = LensShareSummaries as any as S.Schema<TemplateShareSummaries>;
export interface ListTemplateSharesOutput {
  TemplateArn?: string;
  TemplateShareSummaries?: TemplateShareSummary[];
  NextToken?: string;
}
const ListTemplateSharesOutput = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<ListTemplateSharesOutput>;
export interface ListWorkloadsInput {
  WorkloadNamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListWorkloadsInput = /*@__PURE__*/ __L.at(__c32, 3) as any as S.Schema<ListWorkloadsInput>;
export type WorkloadSummaries = WorkloadSummary[];
const WorkloadSummaries = /*@__PURE__*/ __L.at(__c32, 4);
export interface ListWorkloadsOutput {
  WorkloadSummaries?: WorkloadSummary[];
  NextToken?: string;
}
const ListWorkloadsOutput = /*@__PURE__*/ __L.at(__c32, 5) as any as S.Schema<ListWorkloadsOutput>;
export interface ListWorkloadSharesInput {
  WorkloadId: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
const ListWorkloadSharesInput = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<ListWorkloadSharesInput>;
export interface WorkloadShareSummary {
  ShareId?: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  Status?: ShareStatus;
  StatusMessage?: string;
}
const WorkloadShareSummary = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<WorkloadShareSummary>;
export type WorkloadShareSummaries = WorkloadShareSummary[];
const WorkloadShareSummaries = /*@__PURE__*/ __L.at(__c33, 0);
export interface ListWorkloadSharesOutput {
  WorkloadId?: string;
  WorkloadShareSummaries?: WorkloadShareSummary[];
  NextToken?: string;
}
const ListWorkloadSharesOutput = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<ListWorkloadSharesOutput>;
export type RecommendationFeedbackType = "USEFUL" | "NOT_USEFUL" | (string & {});
const RecommendationFeedbackType = S.String;

export type FeedbackCategory =
  | "OTHER"
  | "RECOMMENDATION_NOT_RELEVANT"
  | "RESOURCE_NOT_IMPORTANT"
  | "RESOURCE_TYPE_NOT_IMPORTANT"
  | "RECOMMENDATION_INCORRECT"
  | (string & {});
const FeedbackCategory = S.String;

export interface PutAgentRecommendationFeedbackRequest {
  recommendationArn: string;
  type: RecommendationFeedbackType;
  feedbackCategory?: FeedbackCategory;
  comments?: string;
}
const PutAgentRecommendationFeedbackRequest = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<PutAgentRecommendationFeedbackRequest>;
export interface PutAgentRecommendationFeedbackResponse {}
const PutAgentRecommendationFeedbackResponse = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<PutAgentRecommendationFeedbackResponse>;
export type RecommendationTypes = RecommendationType[];
const RecommendationTypes = Pillars as any as S.Schema<RecommendationTypes>;
export interface StartAgentRecommendationGenerationRequest {
  profileArn: string;
  types: RecommendationType[];
  name?: string;
  additionalContext?: any;
  scope: Scope;
}
const StartAgentRecommendationGenerationRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<StartAgentRecommendationGenerationRequest>;
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
const StartAgentRecommendationGenerationResponse =
  AgentRecommendationGenerationSummary as any as S.Schema<StartAgentRecommendationGenerationResponse>;
export interface TagResourceInput {
  WorkloadArn: string;
  Tags?: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c33, 5) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = AssociateLensesResponse as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = LensAliases as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  WorkloadArn: string;
  TagKeys?: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c33, 6) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = AssociateLensesResponse as any as S.Schema<UntagResourceOutput>;
export interface UpdateAgentContextRequest {
  clientToken?: string;
  profileArn: string;
  id: string;
  title?: string | redacted.Redacted<string>;
  content?: ContextContent;
}
const UpdateAgentContextRequest = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<UpdateAgentContextRequest>;
export interface UpdateAgentContextResponse {
  context: ContextSummary;
}
const UpdateAgentContextResponse =
  CreateAgentContextResponse as any as S.Schema<UpdateAgentContextResponse>;
export interface UpdateAgentGoalRequest {
  clientToken?: string;
  profileArn: string;
  id: string;
  pillars?: Pillar[];
  title?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
}
const UpdateAgentGoalRequest = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<UpdateAgentGoalRequest>;
export interface UpdateAgentGoalResponse {
  goal: GoalSummary;
}
const UpdateAgentGoalResponse = CreateAgentGoalResponse as any as S.Schema<UpdateAgentGoalResponse>;
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
const UpdateAgentProfileRequest = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<UpdateAgentProfileRequest>;
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
const UpdateAgentProfileResponse =
  CreateAgentProfileResponse as any as S.Schema<UpdateAgentProfileResponse>;
export interface UpdateAgentRecommendationStatusRequest {
  recommendationArn: string;
  status: RecommendationStatus;
  updateReason?: string | redacted.Redacted<string>;
}
const UpdateAgentRecommendationStatusRequest = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<UpdateAgentRecommendationStatusRequest>;
export interface UpdateAgentRecommendationStatusResponse {}
const UpdateAgentRecommendationStatusResponse =
  PutAgentRecommendationFeedbackResponse as any as S.Schema<UpdateAgentRecommendationStatusResponse>;
export interface ChoiceUpdate {
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
  Notes?: string;
}
const ChoiceUpdate = /*@__PURE__*/ __L.at(__c34, 3) as any as S.Schema<ChoiceUpdate>;
export type ChoiceUpdates = { [key: string]: ChoiceUpdate | undefined };
const ChoiceUpdates = /*@__PURE__*/ __L.at(__c34, 4);
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
const UpdateAnswerInput = /*@__PURE__*/ __L.at(__c34, 5) as any as S.Schema<UpdateAnswerInput>;
export interface UpdateAnswerOutput {
  WorkloadId?: string;
  LensAlias?: string;
  LensArn?: string;
  Answer?: Answer;
}
const UpdateAnswerOutput = /*@__PURE__*/ __L.at(__c34, 6) as any as S.Schema<UpdateAnswerOutput>;
export type IntegrationStatusInput = "NOT_CONFIGURED" | (string & {});
const IntegrationStatusInput = S.String;

export interface AccountJiraConfigurationInput {
  IssueManagementStatus?: AccountJiraIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
  IntegrationStatus?: IntegrationStatusInput;
}
const AccountJiraConfigurationInput = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<AccountJiraConfigurationInput>;
export interface UpdateGlobalSettingsInput {
  OrganizationSharingStatus?: OrganizationSharingStatus;
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus;
  JiraConfiguration?: AccountJiraConfigurationInput;
}
const UpdateGlobalSettingsInput = /*@__PURE__*/ __L.at(
  __c35,
  0,
) as any as S.Schema<UpdateGlobalSettingsInput>;
export interface UpdateGlobalSettingsResponse {}
const UpdateGlobalSettingsResponse =
  AssociateLensesResponse as any as S.Schema<UpdateGlobalSettingsResponse>;
export type IntegratingService = "JIRA" | (string & {});
const IntegratingService = S.String;

export interface UpdateIntegrationInput {
  WorkloadId: string;
  ClientRequestToken?: string;
  IntegratingService?: IntegratingService;
}
const UpdateIntegrationInput = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<UpdateIntegrationInput>;
export interface UpdateIntegrationResponse {}
const UpdateIntegrationResponse =
  AssociateLensesResponse as any as S.Schema<UpdateIntegrationResponse>;
export type PillarNotes = { [key: string]: string | undefined };
const PillarNotes = FieldErrors as any as S.Schema<PillarNotes>;
export interface UpdateLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  LensNotes?: string;
  PillarNotes?: { [key: string]: string | undefined };
  JiraConfiguration?: JiraSelectedQuestionConfiguration;
}
const UpdateLensReviewInput = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<UpdateLensReviewInput>;
export interface UpdateLensReviewOutput {
  WorkloadId?: string;
  LensReview?: LensReview;
}
const UpdateLensReviewOutput = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<UpdateLensReviewOutput>;
export interface UpdateProfileInput {
  ProfileArn: string;
  ProfileDescription?: string;
  ProfileQuestions?: ProfileQuestionUpdate[];
}
const UpdateProfileInput = /*@__PURE__*/ __L.at(__c35, 4) as any as S.Schema<UpdateProfileInput>;
export interface UpdateProfileOutput {
  Profile?: Profile;
}
const UpdateProfileOutput = GetProfileOutput as any as S.Schema<UpdateProfileOutput>;
export type ReviewTemplateLensAliases = string[];
const ReviewTemplateLensAliases = LensAliases as any as S.Schema<ReviewTemplateLensAliases>;
export interface UpdateReviewTemplateInput {
  TemplateArn: string;
  TemplateName?: string;
  Description?: string;
  Notes?: string;
  LensesToAssociate?: string[];
  LensesToDisassociate?: string[];
}
const UpdateReviewTemplateInput = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<UpdateReviewTemplateInput>;
export interface UpdateReviewTemplateOutput {
  ReviewTemplate?: ReviewTemplate;
}
const UpdateReviewTemplateOutput = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<UpdateReviewTemplateOutput>;
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
const UpdateReviewTemplateAnswerInput = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<UpdateReviewTemplateAnswerInput>;
export interface UpdateReviewTemplateAnswerOutput {
  TemplateArn?: string;
  LensAlias?: string;
  Answer?: ReviewTemplateAnswer;
}
const UpdateReviewTemplateAnswerOutput =
  GetReviewTemplateAnswerOutput as any as S.Schema<UpdateReviewTemplateAnswerOutput>;
export interface UpdateReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
  LensNotes?: string;
  PillarNotes?: { [key: string]: string | undefined };
}
const UpdateReviewTemplateLensReviewInput = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<UpdateReviewTemplateLensReviewInput>;
export interface UpdateReviewTemplateLensReviewOutput {
  TemplateArn?: string;
  LensReview?: ReviewTemplateLensReview;
}
const UpdateReviewTemplateLensReviewOutput =
  GetReviewTemplateLensReviewOutput as any as S.Schema<UpdateReviewTemplateLensReviewOutput>;
export type ShareInvitationAction = "ACCEPT" | "REJECT" | (string & {});
const ShareInvitationAction = S.String;

export interface UpdateShareInvitationInput {
  ShareInvitationId: string;
  ShareInvitationAction?: ShareInvitationAction;
}
const UpdateShareInvitationInput = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<UpdateShareInvitationInput>;
export interface ShareInvitation {
  ShareInvitationId?: string;
  ShareResourceType?: ShareResourceType;
  WorkloadId?: string;
  LensAlias?: string;
  LensArn?: string;
  ProfileArn?: string;
  TemplateArn?: string;
}
const ShareInvitation = /*@__PURE__*/ __L.at(__c36, 2) as any as S.Schema<ShareInvitation>;
export interface UpdateShareInvitationOutput {
  ShareInvitation?: ShareInvitation;
}
const UpdateShareInvitationOutput = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<UpdateShareInvitationOutput>;
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
const UpdateWorkloadInput = /*@__PURE__*/ __L.at(__c36, 4) as any as S.Schema<UpdateWorkloadInput>;
export interface UpdateWorkloadOutput {
  Workload?: Workload;
}
const UpdateWorkloadOutput = GetWorkloadOutput as any as S.Schema<UpdateWorkloadOutput>;
export interface UpdateWorkloadShareInput {
  ShareId: string;
  WorkloadId: string;
  PermissionType?: PermissionType;
}
const UpdateWorkloadShareInput = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<UpdateWorkloadShareInput>;
export interface WorkloadShare {
  ShareId?: string;
  SharedBy?: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  Status?: ShareStatus;
  WorkloadName?: string;
  WorkloadId?: string;
}
const WorkloadShare = /*@__PURE__*/ __L.at(__c36, 6) as any as S.Schema<WorkloadShare>;
export interface UpdateWorkloadShareOutput {
  WorkloadId?: string;
  WorkloadShare?: WorkloadShare;
}
const UpdateWorkloadShareOutput = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<UpdateWorkloadShareOutput>;
export interface UpgradeLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneName?: string;
  ClientRequestToken?: string;
}
const UpgradeLensReviewInput = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<UpgradeLensReviewInput>;
export interface UpgradeLensReviewResponse {}
const UpgradeLensReviewResponse =
  AssociateLensesResponse as any as S.Schema<UpgradeLensReviewResponse>;
export interface UpgradeProfileVersionInput {
  WorkloadId: string;
  ProfileArn: string;
  MilestoneName?: string;
  ClientRequestToken?: string;
}
const UpgradeProfileVersionInput = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<UpgradeProfileVersionInput>;
export interface UpgradeProfileVersionResponse {}
const UpgradeProfileVersionResponse =
  AssociateLensesResponse as any as S.Schema<UpgradeProfileVersionResponse>;
export interface UpgradeReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
  ClientRequestToken?: string;
}
const UpgradeReviewTemplateLensReviewInput = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<UpgradeReviewTemplateLensReviewInput>;
export interface UpgradeReviewTemplateLensReviewResponse {}
const UpgradeReviewTemplateLensReviewResponse =
  PutAgentRecommendationFeedbackResponse as any as S.Schema<UpgradeReviewTemplateLensReviewResponse>;
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
const ValidationExceptionReason = S.String;

export type ValidationExceptionFieldName = string;
export interface ValidationExceptionField {
  Name?: string;
  Message?: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c37, 4);
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
  input: AssociateLensesInput,
  output: AssociateLensesResponse,
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
  input: AssociateProfilesInput,
  output: AssociateProfilesResponse,
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
  input: CreateAgentContextRequest,
  output: CreateAgentContextResponse,
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
  input: CreateAgentGoalRequest,
  output: CreateAgentGoalResponse,
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
  input: CreateAgentProfileRequest,
  output: CreateAgentProfileResponse,
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
  input: CreateLensShareInput,
  output: CreateLensShareOutput,
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
  input: CreateLensVersionInput,
  output: CreateLensVersionOutput,
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
  input: CreateMilestoneInput,
  output: CreateMilestoneOutput,
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
  input: CreateProfileInput,
  output: CreateProfileOutput,
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
  input: CreateProfileShareInput,
  output: CreateProfileShareOutput,
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
  input: CreateReviewTemplateInput,
  output: CreateReviewTemplateOutput,
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
  input: CreateTemplateShareInput,
  output: CreateTemplateShareOutput,
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
  input: CreateWorkloadInput,
  output: CreateWorkloadOutput,
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
  input: CreateWorkloadShareInput,
  output: CreateWorkloadShareOutput,
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
  input: DeleteAgentContextRequest,
  output: DeleteAgentContextResponse,
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
  input: DeleteAgentGoalRequest,
  output: DeleteAgentGoalResponse,
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
  input: DeleteAgentProfileRequest,
  output: DeleteAgentProfileResponse,
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
  input: DeleteLensInput,
  output: DeleteLensResponse,
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
  input: DeleteLensShareInput,
  output: DeleteLensShareResponse,
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
  input: DeleteProfileInput,
  output: DeleteProfileResponse,
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
  input: DeleteProfileShareInput,
  output: DeleteProfileShareResponse,
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
  input: DeleteReviewTemplateInput,
  output: DeleteReviewTemplateResponse,
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
  input: DeleteTemplateShareInput,
  output: DeleteTemplateShareResponse,
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
  input: DeleteWorkloadInput,
  output: DeleteWorkloadResponse,
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
  input: DeleteWorkloadShareInput,
  output: DeleteWorkloadShareResponse,
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
  input: DisassociateLensesInput,
  output: DisassociateLensesResponse,
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
  input: DisassociateProfilesInput,
  output: DisassociateProfilesResponse,
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
  input: ExportLensInput,
  output: ExportLensOutput,
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
  input: GetAgentContextRequest,
  output: GetAgentContextResponse,
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
  input: GetAgentGoalRequest,
  output: GetAgentGoalResponse,
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
  input: GetAgentProfileRequest,
  output: GetAgentProfileResponse,
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
  input: GetAgentRecommendationRequest,
  output: GetAgentRecommendationResponse,
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
  input: GetAgentRecommendationGenerationRequest,
  output: GetAgentRecommendationGenerationResponse,
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
  input: GetAnswerInput,
  output: GetAnswerOutput,
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
  input: GetConsolidatedReportInput,
  output: GetConsolidatedReportOutput,
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
  input: GetGlobalSettingsRequest,
  output: GetGlobalSettingsOutput,
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
  input: GetLensInput,
  output: GetLensOutput,
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
  input: GetLensReviewInput,
  output: GetLensReviewOutput,
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
  input: GetLensReviewReportInput,
  output: GetLensReviewReportOutput,
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
  input: GetLensVersionDifferenceInput,
  output: GetLensVersionDifferenceOutput,
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
  input: GetMilestoneInput,
  output: GetMilestoneOutput,
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
  input: GetProfileInput,
  output: GetProfileOutput,
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
  input: GetProfileTemplateInput,
  output: GetProfileTemplateOutput,
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
  input: GetReviewTemplateInput,
  output: GetReviewTemplateOutput,
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
  input: GetReviewTemplateAnswerInput,
  output: GetReviewTemplateAnswerOutput,
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
  input: GetReviewTemplateLensReviewInput,
  output: GetReviewTemplateLensReviewOutput,
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
  input: GetWorkloadInput,
  output: GetWorkloadOutput,
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
  input: ImportLensInput,
  output: ImportLensOutput,
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
  input: ListAgentContextsRequest,
  output: ListAgentContextsResponse,
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
  input: ListAgentGoalsRequest,
  output: ListAgentGoalsResponse,
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
  input: ListAgentProfilesRequest,
  output: ListAgentProfilesResponse,
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
  input: ListAgentRecommendationGenerationsRequest,
  output: ListAgentRecommendationGenerationsResponse,
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
  input: ListAgentRecommendationItemsRequest,
  output: ListAgentRecommendationItemsResponse,
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
  input: ListAgentRecommendationsRequest,
  output: ListAgentRecommendationsResponse,
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
  input: ListAnswersInput,
  output: ListAnswersOutput,
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
  input: ListCheckDetailsInput,
  output: ListCheckDetailsOutput,
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
  input: ListCheckSummariesInput,
  output: ListCheckSummariesOutput,
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
  input: ListLensesInput,
  output: ListLensesOutput,
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
  input: ListLensReviewImprovementsInput,
  output: ListLensReviewImprovementsOutput,
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
  input: ListLensReviewsInput,
  output: ListLensReviewsOutput,
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
  input: ListLensSharesInput,
  output: ListLensSharesOutput,
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
  input: ListMilestonesInput,
  output: ListMilestonesOutput,
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
  input: ListNotificationsInput,
  output: ListNotificationsOutput,
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
  input: ListProfileNotificationsInput,
  output: ListProfileNotificationsOutput,
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
  input: ListProfilesInput,
  output: ListProfilesOutput,
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
  input: ListProfileSharesInput,
  output: ListProfileSharesOutput,
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
  input: ListReviewTemplateAnswersInput,
  output: ListReviewTemplateAnswersOutput,
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
  input: ListReviewTemplatesInput,
  output: ListReviewTemplatesOutput,
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
  input: ListShareInvitationsInput,
  output: ListShareInvitationsOutput,
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
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
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
  input: ListTemplateSharesInput,
  output: ListTemplateSharesOutput,
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
  input: ListWorkloadsInput,
  output: ListWorkloadsOutput,
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
  input: ListWorkloadSharesInput,
  output: ListWorkloadSharesOutput,
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
  input: PutAgentRecommendationFeedbackRequest,
  output: PutAgentRecommendationFeedbackResponse,
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
  input: StartAgentRecommendationGenerationRequest,
  output: StartAgentRecommendationGenerationResponse,
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
  input: TagResourceInput,
  output: TagResourceOutput,
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
  input: UntagResourceInput,
  output: UntagResourceOutput,
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
  input: UpdateAgentContextRequest,
  output: UpdateAgentContextResponse,
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
  input: UpdateAgentGoalRequest,
  output: UpdateAgentGoalResponse,
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
  input: UpdateAgentProfileRequest,
  output: UpdateAgentProfileResponse,
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
  input: UpdateAgentRecommendationStatusRequest,
  output: UpdateAgentRecommendationStatusResponse,
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
  input: UpdateAnswerInput,
  output: UpdateAnswerOutput,
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
  input: UpdateGlobalSettingsInput,
  output: UpdateGlobalSettingsResponse,
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
  input: UpdateIntegrationInput,
  output: UpdateIntegrationResponse,
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
  input: UpdateLensReviewInput,
  output: UpdateLensReviewOutput,
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
  input: UpdateProfileInput,
  output: UpdateProfileOutput,
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
  input: UpdateReviewTemplateInput,
  output: UpdateReviewTemplateOutput,
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
  input: UpdateReviewTemplateAnswerInput,
  output: UpdateReviewTemplateAnswerOutput,
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
  input: UpdateReviewTemplateLensReviewInput,
  output: UpdateReviewTemplateLensReviewOutput,
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
  input: UpdateShareInvitationInput,
  output: UpdateShareInvitationOutput,
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
  input: UpdateWorkloadInput,
  output: UpdateWorkloadOutput,
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
  input: UpdateWorkloadShareInput,
  output: UpdateWorkloadShareOutput,
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
  input: UpgradeLensReviewInput,
  output: UpgradeLensReviewResponse,
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
  input: UpgradeProfileVersionInput,
  output: UpgradeProfileVersionResponse,
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
  input: UpgradeReviewTemplateLensReviewInput,
  output: UpgradeReviewTemplateLensReviewResponse,
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
          LensAliases: S.optional(LensAliases),
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
          ProfileArns: S.optional(ProfileArns),
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
      return S.Array(ContextResourceTag);
    case 6:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(ContextAccountIdList),
          regions: S.optional(ContextRegionList),
          awsServices: S.optional(ContextAwsServiceList),
          resourceTypes: S.optional(ContextResourceTypeList),
          resourceTags: S.optional(ContextResourceTagList),
          applicationOverview: S.optional(SensitiveString),
          industry: S.optional(SensitiveString),
          applicationType: S.optional(ApplicationType),
          criticality: S.optional(Criticality),
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
          contextType: ContextType,
          content: ContextContent,
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
          contextType: ContextType,
          content: ContextContent,
          applicationType: S.optional(ApplicationType),
          criticality: S.optional(Criticality),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ContextSummary" });
    case 1:
      return S.suspend(() => S.Struct({ context: ContextSummary })).annotate({
        identifier: "CreateAgentContextResponse",
      });
    case 2:
      return S.Array(Pillar);
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          pillars: Pillars,
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
          pillars: Pillars,
          title: SensitiveString,
          description: S.optional(SensitiveString),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GoalSummary" });
    case 5:
      return S.suspend(() => S.Struct({ goal: GoalSummary })).annotate({
        identifier: "CreateAgentGoalResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, regions: Regions, accessRoleArn: S.String }),
      ).annotate({ identifier: "AggregationConfiguration" });
    case 7:
      return S.Array(AggregationConfiguration);
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
          pillars: Pillars,
          deletionProtection: S.optional(S.Boolean),
          executionRoleArn: S.String,
          aggregationConfiguration: AggregationConfigurations,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(Tags),
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
          pillars: Pillars,
          deletionProtection: S.optional(S.Boolean),
          executionRoleArn: S.String,
          aggregationConfiguration: AggregationConfigurations,
          arn: S.String,
          eligibleForScheduledGeneration: S.optional(S.Boolean),
          eligibleForArchitectureGeneration: S.optional(S.Boolean),
          fieldErrors: S.optional(FieldErrors),
          tags: S.optional(Tags),
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
          SelectedChoiceIds: S.optional(SelectedProfileChoiceIds),
        }),
      ).annotate({ identifier: "ProfileQuestionUpdate" });
    case 2:
      return S.Array(ProfileQuestionUpdate);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileName: S.optional(S.String),
          ProfileDescription: S.optional(S.String),
          ProfileQuestions: S.optional(ProfileQuestionUpdates),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagMap),
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
          Lenses: S.optional(ReviewTemplateLenses),
          Notes: S.optional(S.String),
          Tags: S.optional(TagMap),
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
          TrustedAdvisorIntegrationStatus: S.optional(TrustedAdvisorIntegrationStatus),
          WorkloadResourceDefinition: S.optional(WorkloadResourceDefinition),
        }),
      ).annotate({ identifier: "WorkloadDiscoveryConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IssueManagementStatus: S.optional(WorkloadIssueManagementStatus),
          IssueManagementType: S.optional(IssueManagementType),
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
          Environment: S.optional(WorkloadEnvironment),
          AccountIds: S.optional(WorkloadAccountIds),
          AwsRegions: S.optional(WorkloadAwsRegions),
          NonAwsRegions: S.optional(WorkloadNonAwsRegions),
          PillarPriorities: S.optional(WorkloadPillarPriorities),
          ArchitecturalDesign: S.optional(S.String),
          ReviewOwner: S.optional(S.String),
          IndustryType: S.optional(S.String),
          Industry: S.optional(S.String),
          Lenses: S.optional(WorkloadLenses),
          Notes: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagMap),
          DiscoveryConfig: S.optional(WorkloadDiscoveryConfig),
          Applications: S.optional(WorkloadApplications),
          ProfileArns: S.optional(WorkloadProfileArns),
          ReviewTemplateArns: S.optional(ReviewTemplateArns),
          JiraConfiguration: S.optional(WorkloadJiraConfigurationInput),
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
          PermissionType: S.optional(PermissionType),
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
          LensStatus: S.optional(LensStatusType).pipe(T.HttpQuery("LensStatus")),
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
          LensAliases: S.optional(LensAliases),
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
          ProfileArns: S.optional(ProfileArns),
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
      return S.suspend(() => S.Struct({ context: ContextSummary })).annotate({
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
          pillars: Pillars,
          deletionProtection: S.optional(S.Boolean),
          executionRoleArn: S.String,
          aggregationConfiguration: AggregationConfigurations,
          arn: S.String,
          eligibleForScheduledGeneration: S.optional(S.Boolean),
          eligibleForArchitectureGeneration: S.optional(S.Boolean),
          fieldErrors: S.optional(FieldErrors),
          tags: S.optional(Tags),
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
          remediationType: S.optional(RemediationType).pipe(T.HttpQuery("remediationType")),
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
      return S.Array(Insight);
    case 2:
      return S.suspend(() =>
        S.Struct({ recommendation: S.String, steps: RecommendedFixSteps }),
      ).annotate({ identifier: "RemediationSummary" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          pillar: Pillar,
          title: S.String,
          description: S.String,
          impact: ImpactCategory,
        }),
      ).annotate({ identifier: "CrossPillarBenefit" });
    case 4:
      return S.Array(CrossPillarBenefit);
    case 5:
      return S.suspend(() =>
        S.Struct({
          pillar: Pillar,
          title: S.String,
          description: S.String,
          risk: RiskRating,
          mitigation: S.String,
          riskExplanation: S.optional(S.String),
        }),
      ).annotate({ identifier: "TradeOff" });
    case 6:
      return S.Array(TradeOff);
    case 7:
      return S.suspend(() => S.Struct({ title: S.String })).annotate({
        identifier: "RecommendationGoal",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RecommendationGoal);
    case 1:
      return S.suspend(() =>
        S.Struct({ title: S.optional(SensitiveString), content: SensitiveString }),
      ).annotate({ identifier: "RemediationStep" });
    case 2:
      return S.Array(RemediationStep);
    case 3:
      return S.suspend(() => S.Struct({ url: S.String, title: S.optional(S.String) })).annotate({
        identifier: "ResourceLink",
      });
    case 4:
      return S.Array(ResourceLink);
    case 5:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String,
          type: RemediationType,
          steps: RemediationSteps,
          resourceLinks: S.optional(ResourceLinks),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AgentRecommendationRemediation",
      });
    case 6:
      return S.Array(AgentRecommendationRemediation);
    case 7:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String,
          profileArn: S.String,
          generationId: S.optional(S.String),
          title: SensitiveString,
          description: SensitiveString,
          type: RecommendationType,
          pillar: Pillar,
          priority: Priority,
          effort: Effort,
          status: RecommendationStatus,
          state: RecommendationState,
          updateReason: S.optional(SensitiveString),
          impact: ImpactCategory,
          roi: Roi,
          numberOfResources: S.optional(S.Number),
          awsServices: S.optional(StringList),
          businessUnits: S.optional(StringList),
          applications: S.optional(StringList),
          impactDetails: ImpactDetails,
          insights: InsightList,
          highlights: Highlights,
          remediationSummary: RemediationSummary,
          crossPillarBenefits: S.optional(CrossPillarBenefits),
          tradeOffs: S.optional(TradeOffs),
          sources: S.optional(RecommendationSourceList),
          goals: S.optional(RecommendationGoals),
          tags: S.optional(Tags),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          remediations: S.optional(AgentRecommendationRemediations),
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
      return S.suspend(() => S.Struct({ pillar: Pillar, ids: ItemIds })).annotate({
        identifier: "PillarItem",
      });
    case 2:
      return S.Array(PillarItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          pillars: Pillars,
          goalIds: S.optional(GoalIdList),
          items: S.optional(PillarItems),
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
          status: GenerationStatus,
          estimatedCompletionTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          additionalContext: S.optional(S.Any),
          scope: S.optional(Scope),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          progress: S.optional(Progress),
          errorDetails: S.optional(ErrorDetails),
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
      return S.Array(ChoiceContent);
    case 2:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(AdditionalResourceType), Content: S.optional(Urls) }),
      ).annotate({ identifier: "AdditionalResources" });
    case 3:
      return S.Array(AdditionalResources);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChoiceId: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          HelpfulResource: S.optional(ChoiceContent),
          ImprovementPlan: S.optional(ChoiceContent),
          AdditionalResources: S.optional(AdditionalResourcesList),
        }),
      ).annotate({ identifier: "Choice" });
    case 5:
      return S.Array(Choice);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChoiceId: S.optional(S.String),
          Status: S.optional(ChoiceStatus),
          Reason: S.optional(ChoiceReason),
          Notes: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChoiceAnswer" });
    case 7:
      return S.Array(ChoiceAnswer);
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
          Choices: S.optional(Choices),
          SelectedChoices: S.optional(SelectedChoices),
          ChoiceAnswers: S.optional(ChoiceAnswers),
          IsApplicable: S.optional(S.Boolean),
          Risk: S.optional(Risk),
          Notes: S.optional(S.String),
          Reason: S.optional(AnswerReason),
          JiraConfiguration: S.optional(JiraConfiguration),
        }),
      ).annotate({ identifier: "Answer" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          Answer: S.optional(Answer),
        }),
      ).annotate({ identifier: "GetAnswerOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Format: S.optional(ReportFormat).pipe(T.HttpQuery("Format")),
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
      return S.Record(Risk, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ ChoiceId: S.optional(S.String), ChoiceTitle: S.optional(S.String) }),
      ).annotate({ identifier: "BestPractice" });
    case 6:
      return S.Array(BestPractice);
    case 7:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          Risk: S.optional(Risk),
          BestPractices: S.optional(BestPractices),
        }),
      ).annotate({ identifier: "QuestionMetric" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(QuestionMetric);
    case 1:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          RiskCounts: S.optional(RiskCounts),
          Questions: S.optional(QuestionMetrics),
        }),
      ).annotate({ identifier: "PillarMetric" });
    case 2:
      return S.Array(PillarMetric);
    case 3:
      return S.suspend(() =>
        S.Struct({
          LensArn: S.optional(S.String),
          Pillars: S.optional(PillarMetrics),
          RiskCounts: S.optional(RiskCounts),
        }),
      ).annotate({ identifier: "LensMetric" });
    case 4:
      return S.Array(LensMetric);
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetricType: S.optional(MetricType),
          RiskCounts: S.optional(RiskCounts),
          WorkloadId: S.optional(S.String),
          WorkloadName: S.optional(S.String),
          WorkloadArn: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Lenses: S.optional(LensMetrics),
          LensesAppliedCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ConsolidatedReportMetric" });
    case 6:
      return S.Array(ConsolidatedReportMetric);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Metrics: S.optional(ConsolidatedReportMetrics),
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
          IntegrationStatus: S.optional(IntegrationStatus),
          IssueManagementStatus: S.optional(AccountJiraIssueManagementStatus),
          IssueManagementType: S.optional(IssueManagementType),
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
          OrganizationSharingStatus: S.optional(OrganizationSharingStatus),
          DiscoveryIntegrationStatus: S.optional(DiscoveryIntegrationStatus),
          JiraConfiguration: S.optional(AccountJiraConfigurationOutput),
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
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "Lens" });
    case 5:
      return S.suspend(() => S.Struct({ Lens: S.optional(Lens) })).annotate({
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
          RiskCounts: S.optional(RiskCounts),
          PrioritizedRiskCounts: S.optional(RiskCounts),
        }),
      ).annotate({ identifier: "PillarReviewSummary" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PillarReviewSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          SelectedQuestionIds: S.optional(SelectedQuestionIds),
        }),
      ).annotate({ identifier: "SelectedPillar" });
    case 2:
      return S.Array(SelectedPillar);
    case 3:
      return S.suspend(() => S.Struct({ SelectedPillars: S.optional(SelectedPillars) })).annotate({
        identifier: "JiraSelectedQuestionConfiguration",
      });
    case 4:
      return S.Array(WorkloadProfile);
    case 5:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          LensVersion: S.optional(S.String),
          LensName: S.optional(S.String),
          LensStatus: S.optional(LensStatus),
          PillarReviewSummaries: S.optional(PillarReviewSummaries),
          JiraConfiguration: S.optional(JiraSelectedQuestionConfiguration),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Notes: S.optional(S.String),
          RiskCounts: S.optional(RiskCounts),
          NextToken: S.optional(S.String),
          Profiles: S.optional(WorkloadProfiles),
          PrioritizedRiskCounts: S.optional(RiskCounts),
        }),
      ).annotate({ identifier: "LensReview" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensReview: S.optional(LensReview),
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
          LensReviewReport: S.optional(LensReviewReport),
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
          DifferenceStatus: S.optional(DifferenceStatus),
        }),
      ).annotate({ identifier: "QuestionDifference" });
    case 4:
      return S.Array(QuestionDifference);
    case 5:
      return S.suspend(() =>
        S.Struct({
          PillarId: S.optional(S.String),
          PillarName: S.optional(S.String),
          DifferenceStatus: S.optional(DifferenceStatus),
          QuestionDifferences: S.optional(QuestionDifferences),
        }),
      ).annotate({ identifier: "PillarDifference" });
    case 6:
      return S.Array(PillarDifference);
    case 7:
      return S.suspend(() =>
        S.Struct({ PillarDifferences: S.optional(PillarDifferences) }),
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
          VersionDifferences: S.optional(VersionDifferences),
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
          IssueManagementStatus: S.optional(WorkloadIssueManagementStatus),
          IssueManagementType: S.optional(IssueManagementType),
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
          Environment: S.optional(WorkloadEnvironment),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AccountIds: S.optional(WorkloadAccountIds),
          AwsRegions: S.optional(WorkloadAwsRegions),
          NonAwsRegions: S.optional(WorkloadNonAwsRegions),
          ArchitecturalDesign: S.optional(S.String),
          ReviewOwner: S.optional(S.String),
          ReviewRestrictionDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IsReviewOwnerUpdateAcknowledged: S.optional(S.Boolean),
          IndustryType: S.optional(S.String),
          Industry: S.optional(S.String),
          Notes: S.optional(S.String),
          ImprovementStatus: S.optional(WorkloadImprovementStatus),
          RiskCounts: S.optional(RiskCounts),
          PillarPriorities: S.optional(WorkloadPillarPriorities),
          Lenses: S.optional(WorkloadLenses),
          Owner: S.optional(S.String),
          ShareInvitationId: S.optional(S.String),
          Tags: S.optional(TagMap),
          DiscoveryConfig: S.optional(WorkloadDiscoveryConfig),
          Applications: S.optional(WorkloadApplications),
          Profiles: S.optional(WorkloadProfiles),
          PrioritizedRiskCounts: S.optional(RiskCounts),
          JiraConfiguration: S.optional(WorkloadJiraConfigurationOutput),
        }),
      ).annotate({ identifier: "Workload" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MilestoneNumber: S.optional(S.Number),
          MilestoneName: S.optional(S.String),
          RecordedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Workload: S.optional(Workload),
        }),
      ).annotate({ identifier: "Milestone" });
    case 5:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.optional(S.String), Milestone: S.optional(Milestone) }),
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
      return S.Array(ProfileChoice);
    case 1:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          QuestionDescription: S.optional(S.String),
          QuestionChoices: S.optional(ProfileQuestionChoices),
          SelectedChoiceIds: S.optional(SelectedChoiceIds),
          MinSelectedChoices: S.optional(S.Number),
          MaxSelectedChoices: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ProfileQuestion" });
    case 2:
      return S.Array(ProfileQuestion);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.optional(S.String),
          ProfileVersion: S.optional(S.String),
          ProfileName: S.optional(S.String),
          ProfileDescription: S.optional(S.String),
          ProfileQuestions: S.optional(ProfileQuestions),
          Owner: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ShareInvitationId: S.optional(S.String),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "Profile" });
    case 4:
      return S.suspend(() => S.Struct({ Profile: S.optional(Profile) })).annotate({
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
          QuestionChoices: S.optional(ProfileTemplateQuestionChoices),
          MinSelectedChoices: S.optional(S.Number),
          MaxSelectedChoices: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ProfileTemplateQuestion" });
    case 7:
      return S.Array(ProfileTemplateQuestion);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          TemplateQuestions: S.optional(TemplateQuestions),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ProfileTemplate" });
    case 1:
      return S.suspend(() => S.Struct({ ProfileTemplate: S.optional(ProfileTemplate) })).annotate({
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
      return S.Record(Question, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Lenses: S.optional(ReviewTemplateLenses),
          Notes: S.optional(S.String),
          QuestionCounts: S.optional(QuestionCounts),
          Owner: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TemplateArn: S.optional(S.String),
          TemplateName: S.optional(S.String),
          Tags: S.optional(TagMap),
          UpdateStatus: S.optional(ReviewTemplateUpdateStatus),
          ShareInvitationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReviewTemplate" });
    case 5:
      return S.suspend(() => S.Struct({ ReviewTemplate: S.optional(ReviewTemplate) })).annotate({
        identifier: "GetReviewTemplateOutput",
      });
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
          Choices: S.optional(Choices),
          SelectedChoices: S.optional(SelectedChoices),
          ChoiceAnswers: S.optional(ChoiceAnswers),
          IsApplicable: S.optional(S.Boolean),
          AnswerStatus: S.optional(ReviewTemplateAnswerStatus),
          Notes: S.optional(S.String),
          Reason: S.optional(AnswerReason),
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
          Answer: S.optional(ReviewTemplateAnswer),
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
          QuestionCounts: S.optional(QuestionCounts),
        }),
      ).annotate({
        identifier: "ReviewTemplatePillarReviewSummary",
      });
    case 3:
      return S.Array(ReviewTemplatePillarReviewSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          LensVersion: S.optional(S.String),
          LensName: S.optional(S.String),
          LensStatus: S.optional(LensStatus),
          PillarReviewSummaries: S.optional(ReviewTemplatePillarReviewSummaries),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Notes: S.optional(S.String),
          QuestionCounts: S.optional(QuestionCounts),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReviewTemplateLensReview" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.optional(S.String),
          LensReview: S.optional(ReviewTemplateLensReview),
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
      return S.suspend(() => S.Struct({ Workload: S.optional(Workload) })).annotate({
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
          Tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/importLens" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ImportLensInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ LensArn: S.optional(S.String), Status: S.optional(ImportLensStatus) }),
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
      return S.Array(ContextSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ items: ContextSummaries, nextToken: S.optional(S.String) }),
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
      return S.Array(GoalSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ items: GoalSummaries, nextToken: S.optional(S.String) }),
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
      return S.Array(AgentProfileSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ items: AgentProfileSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentProfilesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          recommendationType: S.optional(RecommendationType).pipe(
            T.HttpQuery("RecommendationType"),
          ),
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
          status: GenerationStatus,
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
      return S.Array(AgentRecommendationGenerationSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: AgentRecommendationGenerationSummaries,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAgentRecommendationGenerationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String.pipe(T.HttpLabel("recommendationArn")),
          type: S.optional(RecommendationItemType).pipe(T.HttpQuery("type")),
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
          type: RecommendationItemType,
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
      return S.Array(AgentRecommendationItemSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ items: AgentRecommendationItemSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAgentRecommendationItemsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          profileArn: S.String.pipe(T.HttpLabel("profileArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          state: S.optional(RecommendationState).pipe(T.HttpQuery("state")),
          pillar: S.optional(Pillar).pipe(T.HttpQuery("pillar")),
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
          type: RecommendationType,
          pillar: Pillar,
          priority: Priority,
          effort: Effort,
          status: RecommendationStatus,
          state: RecommendationState,
          updateReason: S.optional(SensitiveString),
          impact: ImpactCategory,
          roi: Roi,
          numberOfResources: S.optional(S.Number),
          awsServices: S.optional(StringList),
          businessUnits: S.optional(StringList),
          applications: S.optional(StringList),
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastModifiedBy: S.optional(S.String),
          lastModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AgentRecommendationSummary",
      });
    case 5:
      return S.Array(AgentRecommendationSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ items: AgentRecommendationSummaries, nextToken: S.optional(S.String) }),
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
          QuestionPriority: S.optional(QuestionPriority).pipe(T.HttpQuery("QuestionPriority")),
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
          Status: S.optional(ChoiceStatus),
          Reason: S.optional(ChoiceReason),
        }),
      ).annotate({ identifier: "ChoiceAnswerSummary" });
    case 1:
      return S.Array(ChoiceAnswerSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          Choices: S.optional(Choices),
          SelectedChoices: S.optional(SelectedChoices),
          ChoiceAnswerSummaries: S.optional(ChoiceAnswerSummaries),
          IsApplicable: S.optional(S.Boolean),
          Risk: S.optional(Risk),
          Reason: S.optional(AnswerReason),
          QuestionType: S.optional(QuestionType),
          JiraConfiguration: S.optional(JiraConfiguration),
        }),
      ).annotate({ identifier: "AnswerSummary" });
    case 3:
      return S.Array(AnswerSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          AnswerSummaries: S.optional(AnswerSummaries),
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
          Provider: S.optional(CheckProvider),
          LensArn: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionId: S.optional(S.String),
          ChoiceId: S.optional(S.String),
          Status: S.optional(CheckStatus),
          AccountId: S.optional(S.String),
          FlaggedResources: S.optional(S.Number),
          Reason: S.optional(CheckFailureReason),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CheckDetail" });
    case 7:
      return S.Array(CheckDetail);
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CheckDetails: S.optional(CheckDetails), NextToken: S.optional(S.String) }),
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
          Provider: S.optional(CheckProvider),
          Description: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LensArn: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionId: S.optional(S.String),
          ChoiceId: S.optional(S.String),
          Status: S.optional(CheckStatus),
          AccountSummary: S.optional(AccountSummary),
        }),
      ).annotate({ identifier: "CheckSummary" });
    case 3:
      return S.Array(CheckSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ CheckSummaries: S.optional(CheckSummaries), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCheckSummariesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          LensType: S.optional(LensType).pipe(T.HttpQuery("LensType")),
          LensStatus: S.optional(LensStatusType).pipe(T.HttpQuery("LensStatus")),
          LensName: S.optional(S.String).pipe(T.HttpQuery("LensName")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/lenses" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLensesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LensArn: S.optional(S.String),
          LensAlias: S.optional(S.String),
          LensName: S.optional(S.String),
          LensType: S.optional(LensType),
          Description: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LensVersion: S.optional(S.String),
          Owner: S.optional(S.String),
          LensStatus: S.optional(LensStatus),
        }),
      ).annotate({ identifier: "LensSummary" });
    case 7:
      return S.Array(LensSummary);
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LensSummaries: S.optional(LensSummaries), NextToken: S.optional(S.String) }),
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
          QuestionPriority: S.optional(QuestionPriority).pipe(T.HttpQuery("QuestionPriority")),
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
      return S.Array(ChoiceImprovementPlan);
    case 4:
      return S.suspend(() =>
        S.Struct({
          QuestionId: S.optional(S.String),
          PillarId: S.optional(S.String),
          QuestionTitle: S.optional(S.String),
          Risk: S.optional(Risk),
          ImprovementPlanUrl: S.optional(S.String),
          ImprovementPlans: S.optional(ChoiceImprovementPlans),
          JiraConfiguration: S.optional(JiraConfiguration),
        }),
      ).annotate({ identifier: "ImprovementSummary" });
    case 5:
      return S.Array(ImprovementSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          ImprovementSummaries: S.optional(ImprovementSummaries),
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
          LensStatus: S.optional(LensStatus),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RiskCounts: S.optional(RiskCounts),
          Profiles: S.optional(WorkloadProfiles),
          PrioritizedRiskCounts: S.optional(RiskCounts),
        }),
      ).annotate({ identifier: "LensReviewSummary" });
    case 1:
      return S.Array(LensReviewSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneNumber: S.optional(S.Number),
          LensReviewSummaries: S.optional(LensReviewSummaries),
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
          Status: S.optional(ShareStatus).pipe(T.HttpQuery("Status")),
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
          Status: S.optional(ShareStatus),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "LensShareSummary" });
    case 5:
      return S.Array(LensShareSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          LensShareSummaries: S.optional(LensShareSummaries),
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
          Lenses: S.optional(WorkloadLenses),
          RiskCounts: S.optional(RiskCounts),
          ImprovementStatus: S.optional(WorkloadImprovementStatus),
          Profiles: S.optional(WorkloadProfiles),
          PrioritizedRiskCounts: S.optional(RiskCounts),
        }),
      ).annotate({ identifier: "WorkloadSummary" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MilestoneNumber: S.optional(S.Number),
          MilestoneName: S.optional(S.String),
          RecordedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          WorkloadSummary: S.optional(WorkloadSummary),
        }),
      ).annotate({ identifier: "MilestoneSummary" });
    case 2:
      return S.Array(MilestoneSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          MilestoneSummaries: S.optional(MilestoneSummaries),
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
          Type: S.optional(NotificationType),
          LensUpgradeSummary: S.optional(LensUpgradeSummary),
        }),
      ).annotate({ identifier: "NotificationSummary" });
    case 7:
      return S.Array(NotificationSummary);
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NotificationSummaries: S.optional(NotificationSummaries),
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
          Type: S.optional(ProfileNotificationType),
          ProfileArn: S.optional(S.String),
          ProfileName: S.optional(S.String),
          WorkloadId: S.optional(S.String),
          WorkloadName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProfileNotificationSummary",
      });
    case 3:
      return S.Array(ProfileNotificationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NotificationSummaries: S.optional(ProfileNotificationSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfileNotificationsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProfileNamePrefix: S.optional(S.String).pipe(T.HttpQuery("ProfileNamePrefix")),
          ProfileOwnerType: S.optional(ProfileOwnerType).pipe(T.HttpQuery("ProfileOwnerType")),
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
      return S.Array(ProfileSummary);
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProfileSummaries: S.optional(ProfileSummaries),
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
          Status: S.optional(ShareStatus).pipe(T.HttpQuery("Status")),
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
          ProfileShareSummaries: S.optional(ProfileShareSummaries),
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
          Choices: S.optional(Choices),
          SelectedChoices: S.optional(SelectedChoices),
          ChoiceAnswerSummaries: S.optional(ChoiceAnswerSummaries),
          IsApplicable: S.optional(S.Boolean),
          AnswerStatus: S.optional(ReviewTemplateAnswerStatus),
          Reason: S.optional(AnswerReason),
          QuestionType: S.optional(QuestionType),
        }),
      ).annotate({
        identifier: "ReviewTemplateAnswerSummary",
      });
    case 5:
      return S.Array(ReviewTemplateAnswerSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.optional(S.String),
          LensAlias: S.optional(S.String),
          AnswerSummaries: S.optional(ReviewTemplateAnswerSummaries),
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
          Lenses: S.optional(ReviewTemplateLenses),
          Owner: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TemplateArn: S.optional(S.String),
          TemplateName: S.optional(S.String),
          UpdateStatus: S.optional(ReviewTemplateUpdateStatus),
        }),
      ).annotate({ identifier: "ReviewTemplateSummary" });
    case 1:
      return S.Array(ReviewTemplateSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ ReviewTemplates: S.optional(ReviewTemplates), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListReviewTemplatesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkloadNamePrefix: S.optional(S.String).pipe(T.HttpQuery("WorkloadNamePrefix")),
          LensNamePrefix: S.optional(S.String).pipe(T.HttpQuery("LensNamePrefix")),
          ShareResourceType: S.optional(ShareResourceType).pipe(T.HttpQuery("ShareResourceType")),
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
          PermissionType: S.optional(PermissionType),
          ShareResourceType: S.optional(ShareResourceType),
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
      return S.Array(ShareInvitationSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ShareInvitationSummaries: S.optional(ShareInvitationSummaries),
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
      return S.suspend(() => S.Struct({ Tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          SharedWithPrefix: S.optional(S.String).pipe(T.HttpQuery("SharedWithPrefix")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Status: S.optional(ShareStatus).pipe(T.HttpQuery("Status")),
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
          TemplateShareSummaries: S.optional(TemplateShareSummaries),
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
      return S.Array(WorkloadSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadSummaries: S.optional(WorkloadSummaries),
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
          Status: S.optional(ShareStatus).pipe(T.HttpQuery("Status")),
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
          PermissionType: S.optional(PermissionType),
          Status: S.optional(ShareStatus),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadShareSummary" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(WorkloadShareSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.optional(S.String),
          WorkloadShareSummaries: S.optional(WorkloadShareSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListWorkloadSharesOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          recommendationArn: S.String.pipe(T.HttpLabel("recommendationArn")),
          type: RecommendationFeedbackType,
          feedbackCategory: S.optional(FeedbackCategory),
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
          types: RecommendationTypes,
          name: S.optional(S.String),
          additionalContext: S.optional(S.Any),
          scope: Scope,
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
          Tags: S.optional(TagMap),
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
          TagKeys: S.optional(TagKeyList).pipe(T.HttpQuery("tagKeys")),
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
          content: S.optional(ContextContent),
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
          pillars: S.optional(Pillars),
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
          aggregationConfiguration: S.optional(AggregationConfigurations),
          businessOverview: S.optional(SensitiveString),
          pillars: S.optional(Pillars),
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
          status: RecommendationStatus,
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
          Status: S.optional(ChoiceStatus),
          Reason: S.optional(ChoiceReason),
          Notes: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChoiceUpdate" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ ChoiceUpdate.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          QuestionId: S.String.pipe(T.HttpLabel("QuestionId")),
          SelectedChoices: S.optional(SelectedChoices),
          ChoiceUpdates: S.optional(ChoiceUpdates),
          Notes: S.optional(S.String),
          IsApplicable: S.optional(S.Boolean),
          Reason: S.optional(AnswerReason),
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
          Answer: S.optional(Answer),
        }),
      ).annotate({ identifier: "UpdateAnswerOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IssueManagementStatus: S.optional(AccountJiraIssueManagementStatus),
          IssueManagementType: S.optional(IssueManagementType),
          JiraProjectKey: S.optional(S.String),
          IntegrationStatus: S.optional(IntegrationStatusInput),
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
          OrganizationSharingStatus: S.optional(OrganizationSharingStatus),
          DiscoveryIntegrationStatus: S.optional(DiscoveryIntegrationStatus),
          JiraConfiguration: S.optional(AccountJiraConfigurationInput),
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
          IntegratingService: S.optional(IntegratingService),
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
          PillarNotes: S.optional(PillarNotes),
          JiraConfiguration: S.optional(JiraSelectedQuestionConfiguration),
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
        S.Struct({ WorkloadId: S.optional(S.String), LensReview: S.optional(LensReview) }),
      ).annotate({ identifier: "UpdateLensReviewOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileArn: S.String.pipe(T.HttpLabel("ProfileArn")),
          ProfileDescription: S.optional(S.String),
          ProfileQuestions: S.optional(ProfileQuestionUpdates),
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
          LensesToAssociate: S.optional(ReviewTemplateLensAliases),
          LensesToDisassociate: S.optional(ReviewTemplateLensAliases),
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
      return S.suspend(() => S.Struct({ ReviewTemplate: S.optional(ReviewTemplate) })).annotate({
        identifier: "UpdateReviewTemplateOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          LensAlias: S.String.pipe(T.HttpLabel("LensAlias")),
          QuestionId: S.String.pipe(T.HttpLabel("QuestionId")),
          SelectedChoices: S.optional(SelectedChoices),
          ChoiceUpdates: S.optional(ChoiceUpdates),
          Notes: S.optional(S.String),
          IsApplicable: S.optional(S.Boolean),
          Reason: S.optional(AnswerReason),
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
          PillarNotes: S.optional(PillarNotes),
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
          ShareInvitationAction: S.optional(ShareInvitationAction),
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
          ShareResourceType: S.optional(ShareResourceType),
          WorkloadId: S.optional(S.String),
          LensAlias: S.optional(S.String),
          LensArn: S.optional(S.String),
          ProfileArn: S.optional(S.String),
          TemplateArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ShareInvitation" });
    case 3:
      return S.suspend(() => S.Struct({ ShareInvitation: S.optional(ShareInvitation) })).annotate({
        identifier: "UpdateShareInvitationOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WorkloadId: S.String.pipe(T.HttpLabel("WorkloadId")),
          WorkloadName: S.optional(S.String),
          Description: S.optional(S.String),
          Environment: S.optional(WorkloadEnvironment),
          AccountIds: S.optional(WorkloadAccountIds),
          AwsRegions: S.optional(WorkloadAwsRegions),
          NonAwsRegions: S.optional(WorkloadNonAwsRegions),
          PillarPriorities: S.optional(WorkloadPillarPriorities),
          ArchitecturalDesign: S.optional(S.String),
          ReviewOwner: S.optional(S.String),
          IsReviewOwnerUpdateAcknowledged: S.optional(S.Boolean),
          IndustryType: S.optional(S.String),
          Industry: S.optional(S.String),
          Notes: S.optional(S.String),
          ImprovementStatus: S.optional(WorkloadImprovementStatus),
          DiscoveryConfig: S.optional(WorkloadDiscoveryConfig),
          Applications: S.optional(WorkloadApplications),
          JiraConfiguration: S.optional(WorkloadJiraConfigurationInput),
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
          PermissionType: S.optional(PermissionType),
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
          PermissionType: S.optional(PermissionType),
          Status: S.optional(ShareStatus),
          WorkloadName: S.optional(S.String),
          WorkloadId: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkloadShare" });
    case 7:
      return S.suspend(() =>
        S.Struct({ WorkloadId: S.optional(S.String), WorkloadShare: S.optional(WorkloadShare) }),
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
      return S.Array(ValidationExceptionField);
  }
}
