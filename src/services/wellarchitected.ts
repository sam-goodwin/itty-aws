import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class WellArchitected extends AWSServiceClient {
  associateLenses(
    input: AssociateLensesInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateProfiles(
    input: AssociateProfilesInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLensShare(
    input: CreateLensShareInput,
  ): Effect.Effect<
    CreateLensShareOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createLensVersion(
    input: CreateLensVersionInput,
  ): Effect.Effect<
    CreateLensVersionOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMilestone(
    input: CreateMilestoneInput,
  ): Effect.Effect<
    CreateMilestoneOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProfile(
    input: CreateProfileInput,
  ): Effect.Effect<
    CreateProfileOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProfileShare(
    input: CreateProfileShareInput,
  ): Effect.Effect<
    CreateProfileShareOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createReviewTemplate(
    input: CreateReviewTemplateInput,
  ): Effect.Effect<
    CreateReviewTemplateOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTemplateShare(
    input: CreateTemplateShareInput,
  ): Effect.Effect<
    CreateTemplateShareOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkload(
    input: CreateWorkloadInput,
  ): Effect.Effect<
    CreateWorkloadOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkloadShare(
    input: CreateWorkloadShareInput,
  ): Effect.Effect<
    CreateWorkloadShareOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLens(
    input: DeleteLensInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteLensShare(
    input: DeleteLensShareInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProfile(
    input: DeleteProfileInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProfileShare(
    input: DeleteProfileShareInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteReviewTemplate(
    input: DeleteReviewTemplateInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTemplateShare(
    input: DeleteTemplateShareInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkload(
    input: DeleteWorkloadInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkloadShare(
    input: DeleteWorkloadShareInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateLenses(
    input: DisassociateLensesInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateProfiles(
    input: DisassociateProfilesInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  exportLens(
    input: ExportLensInput,
  ): Effect.Effect<
    ExportLensOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAnswer(
    input: GetAnswerInput,
  ): Effect.Effect<
    GetAnswerOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConsolidatedReport(
    input: GetConsolidatedReportInput,
  ): Effect.Effect<
    GetConsolidatedReportOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGlobalSettings(input: {}): Effect.Effect<
    GetGlobalSettingsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLens(
    input: GetLensInput,
  ): Effect.Effect<
    GetLensOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLensReview(
    input: GetLensReviewInput,
  ): Effect.Effect<
    GetLensReviewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLensReviewReport(
    input: GetLensReviewReportInput,
  ): Effect.Effect<
    GetLensReviewReportOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLensVersionDifference(
    input: GetLensVersionDifferenceInput,
  ): Effect.Effect<
    GetLensVersionDifferenceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMilestone(
    input: GetMilestoneInput,
  ): Effect.Effect<
    GetMilestoneOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProfile(
    input: GetProfileInput,
  ): Effect.Effect<
    GetProfileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProfileTemplate(
    input: GetProfileTemplateInput,
  ): Effect.Effect<
    GetProfileTemplateOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getReviewTemplate(
    input: GetReviewTemplateInput,
  ): Effect.Effect<
    GetReviewTemplateOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getReviewTemplateAnswer(
    input: GetReviewTemplateAnswerInput,
  ): Effect.Effect<
    GetReviewTemplateAnswerOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getReviewTemplateLensReview(
    input: GetReviewTemplateLensReviewInput,
  ): Effect.Effect<
    GetReviewTemplateLensReviewOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getWorkload(
    input: GetWorkloadInput,
  ): Effect.Effect<
    GetWorkloadOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  importLens(
    input: ImportLensInput,
  ): Effect.Effect<
    ImportLensOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAnswers(
    input: ListAnswersInput,
  ): Effect.Effect<
    ListAnswersOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCheckDetails(
    input: ListCheckDetailsInput,
  ): Effect.Effect<
    ListCheckDetailsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCheckSummaries(
    input: ListCheckSummariesInput,
  ): Effect.Effect<
    ListCheckSummariesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLenses(
    input: ListLensesInput,
  ): Effect.Effect<
    ListLensesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLensReviewImprovements(
    input: ListLensReviewImprovementsInput,
  ): Effect.Effect<
    ListLensReviewImprovementsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLensReviews(
    input: ListLensReviewsInput,
  ): Effect.Effect<
    ListLensReviewsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listLensShares(
    input: ListLensSharesInput,
  ): Effect.Effect<
    ListLensSharesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMilestones(
    input: ListMilestonesInput,
  ): Effect.Effect<
    ListMilestonesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listNotifications(
    input: ListNotificationsInput,
  ): Effect.Effect<
    ListNotificationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProfileNotifications(
    input: ListProfileNotificationsInput,
  ): Effect.Effect<
    ListProfileNotificationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProfiles(
    input: ListProfilesInput,
  ): Effect.Effect<
    ListProfilesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProfileShares(
    input: ListProfileSharesInput,
  ): Effect.Effect<
    ListProfileSharesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listReviewTemplateAnswers(
    input: ListReviewTemplateAnswersInput,
  ): Effect.Effect<
    ListReviewTemplateAnswersOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listReviewTemplates(
    input: ListReviewTemplatesInput,
  ): Effect.Effect<
    ListReviewTemplatesOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listShareInvitations(
    input: ListShareInvitationsInput,
  ): Effect.Effect<
    ListShareInvitationsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listTemplateShares(
    input: ListTemplateSharesInput,
  ): Effect.Effect<
    ListTemplateSharesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWorkloads(
    input: ListWorkloadsInput,
  ): Effect.Effect<
    ListWorkloadsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWorkloadShares(
    input: ListWorkloadSharesInput,
  ): Effect.Effect<
    ListWorkloadSharesOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  updateAnswer(
    input: UpdateAnswerInput,
  ): Effect.Effect<
    UpdateAnswerOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGlobalSettings(
    input: UpdateGlobalSettingsInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateIntegration(
    input: UpdateIntegrationInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateLensReview(
    input: UpdateLensReviewInput,
  ): Effect.Effect<
    UpdateLensReviewOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProfile(
    input: UpdateProfileInput,
  ): Effect.Effect<
    UpdateProfileOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateReviewTemplate(
    input: UpdateReviewTemplateInput,
  ): Effect.Effect<
    UpdateReviewTemplateOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateReviewTemplateAnswer(
    input: UpdateReviewTemplateAnswerInput,
  ): Effect.Effect<
    UpdateReviewTemplateAnswerOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateReviewTemplateLensReview(
    input: UpdateReviewTemplateLensReviewInput,
  ): Effect.Effect<
    UpdateReviewTemplateLensReviewOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateShareInvitation(
    input: UpdateShareInvitationInput,
  ): Effect.Effect<
    UpdateShareInvitationOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkload(
    input: UpdateWorkloadInput,
  ): Effect.Effect<
    UpdateWorkloadOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkloadShare(
    input: UpdateWorkloadShareInput,
  ): Effect.Effect<
    UpdateWorkloadShareOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  upgradeLensReview(
    input: UpgradeLensReviewInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  upgradeProfileVersion(
    input: UpgradeProfileVersionInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  upgradeReviewTemplateLensReview(
    input: UpgradeReviewTemplateLensReviewInput,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Wellarchitected extends WellArchitected {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface AccountJiraConfigurationInput {
  IssueManagementStatus?: AccountJiraIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
  IntegrationStatus?: IntegrationStatusInput;
}
export interface AccountJiraConfigurationOutput {
  IntegrationStatus?: IntegrationStatus;
  IssueManagementStatus?: AccountJiraIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  Subdomain?: string;
  JiraProjectKey?: string;
  StatusMessage?: string;
}
export type AccountJiraIssueManagementStatus = "ENABLED" | "DISABLED";
export type AccountSummary = Record<CheckStatus, number>;
export interface AdditionalResources {
  Type?: AdditionalResourceType;
  Content?: Array<ChoiceContent>;
}
export type AdditionalResourcesList = Array<AdditionalResources>;
export type AdditionalResourceType = "HELPFUL_RESOURCE" | "IMPROVEMENT_PLAN";
export interface Answer {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  ImprovementPlanUrl?: string;
  HelpfulResourceUrl?: string;
  HelpfulResourceDisplayText?: string;
  Choices?: Array<Choice>;
  SelectedChoices?: Array<string>;
  ChoiceAnswers?: Array<ChoiceAnswer>;
  IsApplicable?: boolean;
  Risk?: Risk;
  Notes?: string;
  Reason?: AnswerReason;
  JiraConfiguration?: JiraConfiguration;
}
export type AnswerReason =
  | "OUT_OF_SCOPE"
  | "BUSINESS_PRIORITIES"
  | "ARCHITECTURE_CONSTRAINTS"
  | "OTHER"
  | "NONE";
export type AnswerSummaries = Array<AnswerSummary>;
export interface AnswerSummary {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  Choices?: Array<Choice>;
  SelectedChoices?: Array<string>;
  ChoiceAnswerSummaries?: Array<ChoiceAnswerSummary>;
  IsApplicable?: boolean;
  Risk?: Risk;
  Reason?: AnswerReason;
  QuestionType?: QuestionType;
  JiraConfiguration?: JiraConfiguration;
}
export type ApplicationArn = string;

export interface AssociateLensesInput {
  WorkloadId: string;
  LensAliases: Array<string>;
}
export interface AssociateProfilesInput {
  WorkloadId: string;
  ProfileArns: Array<string>;
}
export type AwsAccountId = string;

export type AwsRegion = string;

export type Base64String = string;

export interface BestPractice {
  ChoiceId?: string;
  ChoiceTitle?: string;
}
export type BestPractices = Array<BestPractice>;
export type CheckDescription = string;

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
  UpdatedAt?: Date | string;
}
export type CheckDetails = Array<CheckDetail>;
export type CheckFailureReason =
  | "ASSUME_ROLE_ERROR"
  | "ACCESS_DENIED"
  | "UNKNOWN_ERROR"
  | "PREMIUM_SUPPORT_REQUIRED";
export type CheckId = string;

export type CheckName = string;

export type CheckProvider = "TRUSTED_ADVISOR";
export type CheckStatus =
  | "OKAY"
  | "WARNING"
  | "ERROR"
  | "NOT_AVAILABLE"
  | "FETCH_FAILED";
export type CheckStatusCount = number;

export type CheckSummaries = Array<CheckSummary>;
export interface CheckSummary {
  Id?: string;
  Name?: string;
  Provider?: CheckProvider;
  Description?: string;
  UpdatedAt?: Date | string;
  LensArn?: string;
  PillarId?: string;
  QuestionId?: string;
  ChoiceId?: string;
  Status?: CheckStatus;
  AccountSummary?: Record<CheckStatus, number>;
}
export interface Choice {
  ChoiceId?: string;
  Title?: string;
  Description?: string;
  HelpfulResource?: ChoiceContent;
  ImprovementPlan?: ChoiceContent;
  AdditionalResources?: Array<AdditionalResources>;
}
export interface ChoiceAnswer {
  ChoiceId?: string;
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
  Notes?: string;
}
export type ChoiceAnswers = Array<ChoiceAnswer>;
export type ChoiceAnswerSummaries = Array<ChoiceAnswerSummary>;
export interface ChoiceAnswerSummary {
  ChoiceId?: string;
  Status?: ChoiceStatus;
  Reason?: ChoiceReason;
}
export interface ChoiceContent {
  DisplayText?: string;
  Url?: string;
}
export type ChoiceContentDisplayText = string;

export type ChoiceContentUrl = string;

export type ChoiceDescription = string;

export type ChoiceId = string;

export interface ChoiceImprovementPlan {
  ChoiceId?: string;
  DisplayText?: string;
  ImprovementPlanUrl?: string;
}
export type ChoiceImprovementPlans = Array<ChoiceImprovementPlan>;
export type ChoiceNotes = string;

export type ChoiceReason =
  | "OUT_OF_SCOPE"
  | "BUSINESS_PRIORITIES"
  | "ARCHITECTURE_CONSTRAINTS"
  | "OTHER"
  | "NONE";
export type Choices = Array<Choice>;
export type ChoiceStatus = "SELECTED" | "NOT_APPLICABLE" | "UNSELECTED";
export type ChoiceTitle = string;

export interface ChoiceUpdate {
  Status: ChoiceStatus;
  Reason?: ChoiceReason;
  Notes?: string;
}
export type ChoiceUpdates = Record<string, ChoiceUpdate>;
export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface ConsolidatedReportMetric {
  MetricType?: MetricType;
  RiskCounts?: Record<Risk, number>;
  WorkloadId?: string;
  WorkloadName?: string;
  WorkloadArn?: string;
  UpdatedAt?: Date | string;
  Lenses?: Array<LensMetric>;
  LensesAppliedCount?: number;
}
export type ConsolidatedReportMetrics = Array<ConsolidatedReportMetric>;
export type Count = number;

export interface CreateLensShareInput {
  LensAlias: string;
  SharedWith: string;
  ClientRequestToken: string;
}
export interface CreateLensShareOutput {
  ShareId?: string;
}
export interface CreateLensVersionInput {
  LensAlias: string;
  LensVersion: string;
  IsMajorVersion?: boolean;
  ClientRequestToken: string;
}
export interface CreateLensVersionOutput {
  LensArn?: string;
  LensVersion?: string;
}
export interface CreateMilestoneInput {
  WorkloadId: string;
  MilestoneName: string;
  ClientRequestToken: string;
}
export interface CreateMilestoneOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
}
export interface CreateProfileInput {
  ProfileName: string;
  ProfileDescription: string;
  ProfileQuestions: Array<ProfileQuestionUpdate>;
  ClientRequestToken: string;
  Tags?: Record<string, string>;
}
export interface CreateProfileOutput {
  ProfileArn?: string;
  ProfileVersion?: string;
}
export interface CreateProfileShareInput {
  ProfileArn: string;
  SharedWith: string;
  ClientRequestToken: string;
}
export interface CreateProfileShareOutput {
  ShareId?: string;
  ProfileArn?: string;
}
export interface CreateReviewTemplateInput {
  TemplateName: string;
  Description: string;
  Lenses: Array<string>;
  Notes?: string;
  Tags?: Record<string, string>;
  ClientRequestToken: string;
}
export interface CreateReviewTemplateOutput {
  TemplateArn?: string;
}
export interface CreateTemplateShareInput {
  TemplateArn: string;
  SharedWith: string;
  ClientRequestToken: string;
}
export interface CreateTemplateShareOutput {
  TemplateArn?: string;
  ShareId?: string;
}
export interface CreateWorkloadInput {
  WorkloadName: string;
  Description: string;
  Environment: WorkloadEnvironment;
  AccountIds?: Array<string>;
  AwsRegions?: Array<string>;
  NonAwsRegions?: Array<string>;
  PillarPriorities?: Array<string>;
  ArchitecturalDesign?: string;
  ReviewOwner?: string;
  IndustryType?: string;
  Industry?: string;
  Lenses: Array<string>;
  Notes?: string;
  ClientRequestToken: string;
  Tags?: Record<string, string>;
  DiscoveryConfig?: WorkloadDiscoveryConfig;
  Applications?: Array<string>;
  ProfileArns?: Array<string>;
  ReviewTemplateArns?: Array<string>;
  JiraConfiguration?: WorkloadJiraConfigurationInput;
}
export interface CreateWorkloadOutput {
  WorkloadId?: string;
  WorkloadArn?: string;
}
export interface CreateWorkloadShareInput {
  WorkloadId: string;
  SharedWith: string;
  PermissionType: PermissionType;
  ClientRequestToken: string;
}
export interface CreateWorkloadShareOutput {
  WorkloadId?: string;
  ShareId?: string;
}
export type DefinitionType = "WORKLOAD_METADATA" | "APP_REGISTRY";
export interface DeleteLensInput {
  LensAlias: string;
  ClientRequestToken: string;
  LensStatus: LensStatusType;
}
export interface DeleteLensShareInput {
  ShareId: string;
  LensAlias: string;
  ClientRequestToken: string;
}
export interface DeleteProfileInput {
  ProfileArn: string;
  ClientRequestToken: string;
}
export interface DeleteProfileShareInput {
  ShareId: string;
  ProfileArn: string;
  ClientRequestToken: string;
}
export interface DeleteReviewTemplateInput {
  TemplateArn: string;
  ClientRequestToken: string;
}
export interface DeleteTemplateShareInput {
  ShareId: string;
  TemplateArn: string;
  ClientRequestToken: string;
}
export interface DeleteWorkloadInput {
  WorkloadId: string;
  ClientRequestToken: string;
}
export interface DeleteWorkloadShareInput {
  ShareId: string;
  WorkloadId: string;
  ClientRequestToken: string;
}
export type DifferenceStatus = "UPDATED" | "NEW" | "DELETED";
export interface DisassociateLensesInput {
  WorkloadId: string;
  LensAliases: Array<string>;
}
export interface DisassociateProfilesInput {
  WorkloadId: string;
  ProfileArns: Array<string>;
}
export type DiscoveryIntegrationStatus = "ENABLED" | "DISABLED";
export type DisplayText = string;

export type ExceptionMessage = string;

export type ExceptionResourceId = string;

export type ExceptionResourceType = string;

export interface ExportLensInput {
  LensAlias: string;
  LensVersion?: string;
}
export interface ExportLensOutput {
  LensJSON?: string;
}
export type FlaggedResources = number;

export interface GetAnswerInput {
  WorkloadId: string;
  LensAlias: string;
  QuestionId: string;
  MilestoneNumber?: number;
}
export interface GetAnswerOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  Answer?: Answer;
}
export interface GetConsolidatedReportInput {
  Format: ReportFormat;
  IncludeSharedResources?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export type GetConsolidatedReportMaxResults = number;

export interface GetConsolidatedReportOutput {
  Metrics?: Array<ConsolidatedReportMetric>;
  NextToken?: string;
  Base64String?: string;
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
export interface GetLensOutput {
  Lens?: Lens;
}
export interface GetLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneNumber?: number;
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
export interface GetMilestoneOutput {
  WorkloadId?: string;
  Milestone?: Milestone;
}
export interface GetProfileInput {
  ProfileArn: string;
  ProfileVersion?: string;
}
export interface GetProfileOutput {
  Profile?: Profile;
}
export interface GetProfileTemplateInput {}
export interface GetProfileTemplateOutput {
  ProfileTemplate?: ProfileTemplate;
}
export interface GetReviewTemplateAnswerInput {
  TemplateArn: string;
  LensAlias: string;
  QuestionId: string;
}
export interface GetReviewTemplateAnswerOutput {
  TemplateArn?: string;
  LensAlias?: string;
  Answer?: ReviewTemplateAnswer;
}
export interface GetReviewTemplateInput {
  TemplateArn: string;
}
export interface GetReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
}
export interface GetReviewTemplateLensReviewOutput {
  TemplateArn?: string;
  LensReview?: ReviewTemplateLensReview;
}
export interface GetReviewTemplateOutput {
  ReviewTemplate?: ReviewTemplate;
}
export interface GetWorkloadInput {
  WorkloadId: string;
}
export interface GetWorkloadOutput {
  Workload?: Workload;
}
export type HelpfulResourceUrl = string;

export interface ImportLensInput {
  LensAlias?: string;
  JSONString: string;
  ClientRequestToken: string;
  Tags?: Record<string, string>;
}
export interface ImportLensOutput {
  LensArn?: string;
  Status?: ImportLensStatus;
}
export type ImportLensStatus = "IN_PROGRESS" | "COMPLETE" | "ERROR";
export type ImprovementPlanUrl = string;

export type ImprovementSummaries = Array<ImprovementSummary>;
export interface ImprovementSummary {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  Risk?: Risk;
  ImprovementPlanUrl?: string;
  ImprovementPlans?: Array<ChoiceImprovementPlan>;
  JiraConfiguration?: JiraConfiguration;
}
export type IncludeSharedResources = boolean;

export type IntegratingService = "JIRA";
export type IntegrationStatus = "CONFIGURED" | "NOT_CONFIGURED";
export type IntegrationStatusInput = "NOT_CONFIGURED";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export type IsApplicable = boolean;

export type IsMajorVersion = boolean;

export type IsReviewOwnerUpdateAcknowledged = boolean;

export type IssueManagementType = "AUTO" | "MANUAL";
export interface JiraConfiguration {
  JiraIssueUrl?: string;
  LastSyncedTime?: Date | string;
}
export type JiraIssueUrl = string;

export type JiraProjectKey = string;

export interface JiraSelectedQuestionConfiguration {
  SelectedPillars?: Array<SelectedPillar>;
}
export interface Lens {
  LensArn?: string;
  LensVersion?: string;
  Name?: string;
  Description?: string;
  Owner?: string;
  ShareInvitationId?: string;
  Tags?: Record<string, string>;
}
export type LensAlias = string;

export type LensAliases = Array<string>;
export type LensArn = string;

export type LensDescription = string;

export type LensesAppliedCount = number;

export type LensJSON = string;

export interface LensMetric {
  LensArn?: string;
  Pillars?: Array<PillarMetric>;
  RiskCounts?: Record<Risk, number>;
}
export type LensMetrics = Array<LensMetric>;
export type LensName = string;

export type LensNamePrefix = string;

export type LensOwner = string;

export interface LensReview {
  LensAlias?: string;
  LensArn?: string;
  LensVersion?: string;
  LensName?: string;
  LensStatus?: LensStatus;
  PillarReviewSummaries?: Array<PillarReviewSummary>;
  JiraConfiguration?: JiraSelectedQuestionConfiguration;
  UpdatedAt?: Date | string;
  Notes?: string;
  RiskCounts?: Record<Risk, number>;
  NextToken?: string;
  Profiles?: Array<WorkloadProfile>;
  PrioritizedRiskCounts?: Record<Risk, number>;
}
export interface LensReviewReport {
  LensAlias?: string;
  LensArn?: string;
  Base64String?: string;
}
export type LensReviewSummaries = Array<LensReviewSummary>;
export interface LensReviewSummary {
  LensAlias?: string;
  LensArn?: string;
  LensVersion?: string;
  LensName?: string;
  LensStatus?: LensStatus;
  UpdatedAt?: Date | string;
  RiskCounts?: Record<Risk, number>;
  Profiles?: Array<WorkloadProfile>;
  PrioritizedRiskCounts?: Record<Risk, number>;
}
export type LensShareSummaries = Array<LensShareSummary>;
export interface LensShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type LensStatus =
  | "CURRENT"
  | "NOT_CURRENT"
  | "DEPRECATED"
  | "DELETED"
  | "UNSHARED";
export type LensStatusType = "ALL" | "DRAFT" | "PUBLISHED";
export type LensSummaries = Array<LensSummary>;
export interface LensSummary {
  LensArn?: string;
  LensAlias?: string;
  LensName?: string;
  LensType?: LensType;
  Description?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  LensVersion?: string;
  Owner?: string;
  LensStatus?: LensStatus;
}
export type LensType = "AWS_OFFICIAL" | "CUSTOM_SHARED" | "CUSTOM_SELF";
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
export type LensVersion = string;

export interface ListAnswersInput {
  WorkloadId: string;
  LensAlias: string;
  PillarId?: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
  QuestionPriority?: QuestionPriority;
}
export type ListAnswersMaxResults = number;

export interface ListAnswersOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  AnswerSummaries?: Array<AnswerSummary>;
  NextToken?: string;
}
export interface ListCheckDetailsInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
  LensArn: string;
  PillarId: string;
  QuestionId: string;
  ChoiceId: string;
}
export interface ListCheckDetailsOutput {
  CheckDetails?: Array<CheckDetail>;
  NextToken?: string;
}
export interface ListCheckSummariesInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
  LensArn: string;
  PillarId: string;
  QuestionId: string;
  ChoiceId: string;
}
export interface ListCheckSummariesOutput {
  CheckSummaries?: Array<CheckSummary>;
  NextToken?: string;
}
export interface ListLensesInput {
  NextToken?: string;
  MaxResults?: number;
  LensType?: LensType;
  LensStatus?: LensStatusType;
  LensName?: string;
}
export interface ListLensesOutput {
  LensSummaries?: Array<LensSummary>;
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
export type ListLensReviewImprovementsMaxResults = number;

export interface ListLensReviewImprovementsOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensAlias?: string;
  LensArn?: string;
  ImprovementSummaries?: Array<ImprovementSummary>;
  NextToken?: string;
}
export interface ListLensReviewsInput {
  WorkloadId: string;
  MilestoneNumber?: number;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLensReviewsOutput {
  WorkloadId?: string;
  MilestoneNumber?: number;
  LensReviewSummaries?: Array<LensReviewSummary>;
  NextToken?: string;
}
export interface ListLensSharesInput {
  LensAlias: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export interface ListLensSharesOutput {
  LensShareSummaries?: Array<LensShareSummary>;
  NextToken?: string;
}
export interface ListMilestonesInput {
  WorkloadId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMilestonesOutput {
  WorkloadId?: string;
  MilestoneSummaries?: Array<MilestoneSummary>;
  NextToken?: string;
}
export interface ListNotificationsInput {
  WorkloadId?: string;
  NextToken?: string;
  MaxResults?: number;
  ResourceArn?: string;
}
export type ListNotificationsMaxResults = number;

export interface ListNotificationsOutput {
  NotificationSummaries?: Array<NotificationSummary>;
  NextToken?: string;
}
export interface ListProfileNotificationsInput {
  WorkloadId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProfileNotificationsOutput {
  NotificationSummaries?: Array<ProfileNotificationSummary>;
  NextToken?: string;
}
export interface ListProfileSharesInput {
  ProfileArn: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export type ListProfileSharesMaxResults = number;

export interface ListProfileSharesOutput {
  ProfileShareSummaries?: Array<ProfileShareSummary>;
  NextToken?: string;
}
export interface ListProfilesInput {
  ProfileNamePrefix?: string;
  ProfileOwnerType?: ProfileOwnerType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProfilesOutput {
  ProfileSummaries?: Array<ProfileSummary>;
  NextToken?: string;
}
export interface ListReviewTemplateAnswersInput {
  TemplateArn: string;
  LensAlias: string;
  PillarId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ListReviewTemplateAnswersMaxResults = number;

export interface ListReviewTemplateAnswersOutput {
  TemplateArn?: string;
  LensAlias?: string;
  AnswerSummaries?: Array<ReviewTemplateAnswerSummary>;
  NextToken?: string;
}
export interface ListReviewTemplatesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReviewTemplatesOutput {
  ReviewTemplates?: Array<ReviewTemplateSummary>;
  NextToken?: string;
}
export interface ListShareInvitationsInput {
  WorkloadNamePrefix?: string;
  LensNamePrefix?: string;
  ShareResourceType?: ShareResourceType;
  NextToken?: string;
  MaxResults?: number;
  ProfileNamePrefix?: string;
  TemplateNamePrefix?: string;
}
export type ListShareInvitationsMaxResults = number;

export interface ListShareInvitationsOutput {
  ShareInvitationSummaries?: Array<ShareInvitationSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  WorkloadArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Record<string, string>;
}
export interface ListTemplateSharesInput {
  TemplateArn: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export type ListTemplateSharesMaxResults = number;

export interface ListTemplateSharesOutput {
  TemplateArn?: string;
  TemplateShareSummaries?: Array<TemplateShareSummary>;
  NextToken?: string;
}
export interface ListWorkloadSharesInput {
  WorkloadId: string;
  SharedWithPrefix?: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: ShareStatus;
}
export type ListWorkloadSharesMaxResults = number;

export interface ListWorkloadSharesOutput {
  WorkloadId?: string;
  WorkloadShareSummaries?: Array<WorkloadShareSummary>;
  NextToken?: string;
}
export interface ListWorkloadsInput {
  WorkloadNamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ListWorkloadsMaxResults = number;

export interface ListWorkloadsOutput {
  WorkloadSummaries?: Array<WorkloadSummary>;
  NextToken?: string;
}
export type MaxResults = number;

export type MaxSelectedProfileChoices = number;

export type MetricType = "WORKLOAD";
export interface Milestone {
  MilestoneNumber?: number;
  MilestoneName?: string;
  RecordedAt?: Date | string;
  Workload?: Workload;
}
export type MilestoneName = string;

export type MilestoneNumber = number;

export type MilestoneSummaries = Array<MilestoneSummary>;
export interface MilestoneSummary {
  MilestoneNumber?: number;
  MilestoneName?: string;
  RecordedAt?: Date | string;
  WorkloadSummary?: WorkloadSummary;
}
export type MinSelectedProfileChoices = number;

export type NextToken = string;

export type Notes = string;

export type NotificationSummaries = Array<NotificationSummary>;
export interface NotificationSummary {
  Type?: NotificationType;
  LensUpgradeSummary?: LensUpgradeSummary;
}
export type NotificationType =
  | "LENS_VERSION_UPGRADED"
  | "LENS_VERSION_DEPRECATED";
export type OrganizationSharingStatus = "ENABLED" | "DISABLED";
export type PermissionType = "READONLY" | "CONTRIBUTOR";
export interface PillarDifference {
  PillarId?: string;
  PillarName?: string;
  DifferenceStatus?: DifferenceStatus;
  QuestionDifferences?: Array<QuestionDifference>;
}
export type PillarDifferences = Array<PillarDifference>;
export type PillarId = string;

export interface PillarMetric {
  PillarId?: string;
  RiskCounts?: Record<Risk, number>;
  Questions?: Array<QuestionMetric>;
}
export type PillarMetrics = Array<PillarMetric>;
export type PillarName = string;

export type PillarNotes = Record<string, string>;
export type PillarReviewSummaries = Array<PillarReviewSummary>;
export interface PillarReviewSummary {
  PillarId?: string;
  PillarName?: string;
  Notes?: string;
  RiskCounts?: Record<Risk, number>;
  PrioritizedRiskCounts?: Record<Risk, number>;
}
export interface Profile {
  ProfileArn?: string;
  ProfileVersion?: string;
  ProfileName?: string;
  ProfileDescription?: string;
  ProfileQuestions?: Array<ProfileQuestion>;
  Owner?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  ShareInvitationId?: string;
  Tags?: Record<string, string>;
}
export type ProfileArn = string;

export type ProfileArns = Array<string>;
export interface ProfileChoice {
  ChoiceId?: string;
  ChoiceTitle?: string;
  ChoiceDescription?: string;
}
export type ProfileDescription = string;

export type ProfileName = string;

export type ProfileNamePrefix = string;

export type ProfileNotificationSummaries = Array<ProfileNotificationSummary>;
export interface ProfileNotificationSummary {
  CurrentProfileVersion?: string;
  LatestProfileVersion?: string;
  Type?: ProfileNotificationType;
  ProfileArn?: string;
  ProfileName?: string;
  WorkloadId?: string;
  WorkloadName?: string;
}
export type ProfileNotificationType =
  | "PROFILE_ANSWERS_UPDATED"
  | "PROFILE_DELETED";
export type ProfileOwnerType = "SELF" | "SHARED";
export interface ProfileQuestion {
  QuestionId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  QuestionChoices?: Array<ProfileChoice>;
  SelectedChoiceIds?: Array<string>;
  MinSelectedChoices?: number;
  MaxSelectedChoices?: number;
}
export type ProfileQuestionChoices = Array<ProfileChoice>;
export type ProfileQuestions = Array<ProfileQuestion>;
export interface ProfileQuestionUpdate {
  QuestionId?: string;
  SelectedChoiceIds?: Array<string>;
}
export type ProfileQuestionUpdates = Array<ProfileQuestionUpdate>;
export type ProfileShareSummaries = Array<ProfileShareSummary>;
export interface ProfileShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type ProfileSummaries = Array<ProfileSummary>;
export interface ProfileSummary {
  ProfileArn?: string;
  ProfileVersion?: string;
  ProfileName?: string;
  ProfileDescription?: string;
  Owner?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface ProfileTemplate {
  TemplateName?: string;
  TemplateQuestions?: Array<ProfileTemplateQuestion>;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface ProfileTemplateChoice {
  ChoiceId?: string;
  ChoiceTitle?: string;
  ChoiceDescription?: string;
}
export interface ProfileTemplateQuestion {
  QuestionId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  QuestionChoices?: Array<ProfileTemplateChoice>;
  MinSelectedChoices?: number;
  MaxSelectedChoices?: number;
}
export type ProfileTemplateQuestionChoices = Array<ProfileTemplateChoice>;
export type ProfileVersion = string;

export type Question = "UNANSWERED" | "ANSWERED";
export type QuestionCounts = Record<Question, number>;
export type QuestionDescription = string;

export interface QuestionDifference {
  QuestionId?: string;
  QuestionTitle?: string;
  DifferenceStatus?: DifferenceStatus;
}
export type QuestionDifferences = Array<QuestionDifference>;
export type QuestionId = string;

export interface QuestionMetric {
  QuestionId?: string;
  Risk?: Risk;
  BestPractices?: Array<BestPractice>;
}
export type QuestionMetrics = Array<QuestionMetric>;
export type QuestionPriority = "PRIORITIZED" | "NONE";
export type QuestionTitle = string;

export type QuestionType = "PRIORITIZED" | "NON_PRIORITIZED";
export type QuotaCode = string;

export type ReportFormat = "PDF" | "JSON";
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface ReviewTemplate {
  Description?: string;
  Lenses?: Array<string>;
  Notes?: string;
  QuestionCounts?: Record<Question, number>;
  Owner?: string;
  UpdatedAt?: Date | string;
  TemplateArn?: string;
  TemplateName?: string;
  Tags?: Record<string, string>;
  UpdateStatus?: ReviewTemplateUpdateStatus;
  ShareInvitationId?: string;
}
export interface ReviewTemplateAnswer {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  QuestionDescription?: string;
  ImprovementPlanUrl?: string;
  HelpfulResourceUrl?: string;
  HelpfulResourceDisplayText?: string;
  Choices?: Array<Choice>;
  SelectedChoices?: Array<string>;
  ChoiceAnswers?: Array<ChoiceAnswer>;
  IsApplicable?: boolean;
  AnswerStatus?: ReviewTemplateAnswerStatus;
  Notes?: string;
  Reason?: AnswerReason;
}
export type ReviewTemplateAnswerStatus = "UNANSWERED" | "ANSWERED";
export type ReviewTemplateAnswerSummaries = Array<ReviewTemplateAnswerSummary>;
export interface ReviewTemplateAnswerSummary {
  QuestionId?: string;
  PillarId?: string;
  QuestionTitle?: string;
  Choices?: Array<Choice>;
  SelectedChoices?: Array<string>;
  ChoiceAnswerSummaries?: Array<ChoiceAnswerSummary>;
  IsApplicable?: boolean;
  AnswerStatus?: ReviewTemplateAnswerStatus;
  Reason?: AnswerReason;
  QuestionType?: QuestionType;
}
export type ReviewTemplateArns = Array<string>;
export type ReviewTemplateLensAliases = Array<string>;
export type ReviewTemplateLenses = Array<string>;
export interface ReviewTemplateLensReview {
  LensAlias?: string;
  LensArn?: string;
  LensVersion?: string;
  LensName?: string;
  LensStatus?: LensStatus;
  PillarReviewSummaries?: Array<ReviewTemplatePillarReviewSummary>;
  UpdatedAt?: Date | string;
  Notes?: string;
  QuestionCounts?: Record<Question, number>;
  NextToken?: string;
}
export type ReviewTemplatePillarReviewSummaries =
  Array<ReviewTemplatePillarReviewSummary>;
export interface ReviewTemplatePillarReviewSummary {
  PillarId?: string;
  PillarName?: string;
  Notes?: string;
  QuestionCounts?: Record<Question, number>;
}
export type ReviewTemplates = Array<ReviewTemplateSummary>;
export interface ReviewTemplateSummary {
  Description?: string;
  Lenses?: Array<string>;
  Owner?: string;
  UpdatedAt?: Date | string;
  TemplateArn?: string;
  TemplateName?: string;
  UpdateStatus?: ReviewTemplateUpdateStatus;
}
export type ReviewTemplateUpdateStatus = "CURRENT" | "LENS_NOT_CURRENT";
export type Risk = "UNANSWERED" | "HIGH" | "MEDIUM" | "NONE" | "NOT_APPLICABLE";
export type RiskCounts = Record<Risk, number>;
export type SelectedChoiceIds = Array<string>;
export type SelectedChoices = Array<string>;
export interface SelectedPillar {
  PillarId?: string;
  SelectedQuestionIds?: Array<string>;
}
export type SelectedPillars = Array<SelectedPillar>;
export type SelectedProfileChoiceIds = Array<string>;
export type SelectedQuestionId = string;

export type SelectedQuestionIds = Array<string>;
export type ServiceCode = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}> {}
export type SharedWith = string;

export type SharedWithPrefix = string;

export type ShareId = string;

export interface ShareInvitation {
  ShareInvitationId?: string;
  ShareResourceType?: ShareResourceType;
  WorkloadId?: string;
  LensAlias?: string;
  LensArn?: string;
  ProfileArn?: string;
  TemplateArn?: string;
}
export type ShareInvitationAction = "ACCEPT" | "REJECT";
export type ShareInvitationId = string;

export type ShareInvitationSummaries = Array<ShareInvitationSummary>;
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
export type ShareResourceType = "WORKLOAD" | "LENS" | "PROFILE" | "TEMPLATE";
export type ShareStatus =
  | "ACCEPTED"
  | "REJECTED"
  | "PENDING"
  | "REVOKED"
  | "EXPIRED"
  | "ASSOCIATING"
  | "ASSOCIATED"
  | "FAILED";
export type StatusMessage = string;

export type Subdomain = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  WorkloadArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TemplateArn = string;

export type TemplateDescription = string;

export type TemplateName = string;

export type TemplateNamePrefix = string;

export type TemplateQuestions = Array<ProfileTemplateQuestion>;
export type TemplateShareSummaries = Array<TemplateShareSummary>;
export interface TemplateShareSummary {
  ShareId?: string;
  SharedWith?: string;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
}> {}
export type Timestamp = Date | string;

export type TrustedAdvisorIntegrationStatus = "ENABLED" | "DISABLED";
export interface UntagResourceInput {
  WorkloadArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateAnswerInput {
  WorkloadId: string;
  LensAlias: string;
  QuestionId: string;
  SelectedChoices?: Array<string>;
  ChoiceUpdates?: Record<string, ChoiceUpdate>;
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
export interface UpdateGlobalSettingsInput {
  OrganizationSharingStatus?: OrganizationSharingStatus;
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus;
  JiraConfiguration?: AccountJiraConfigurationInput;
}
export interface UpdateIntegrationInput {
  WorkloadId: string;
  ClientRequestToken: string;
  IntegratingService: IntegratingService;
}
export interface UpdateLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  LensNotes?: string;
  PillarNotes?: Record<string, string>;
  JiraConfiguration?: JiraSelectedQuestionConfiguration;
}
export interface UpdateLensReviewOutput {
  WorkloadId?: string;
  LensReview?: LensReview;
}
export interface UpdateProfileInput {
  ProfileArn: string;
  ProfileDescription?: string;
  ProfileQuestions?: Array<ProfileQuestionUpdate>;
}
export interface UpdateProfileOutput {
  Profile?: Profile;
}
export interface UpdateReviewTemplateAnswerInput {
  TemplateArn: string;
  LensAlias: string;
  QuestionId: string;
  SelectedChoices?: Array<string>;
  ChoiceUpdates?: Record<string, ChoiceUpdate>;
  Notes?: string;
  IsApplicable?: boolean;
  Reason?: AnswerReason;
}
export interface UpdateReviewTemplateAnswerOutput {
  TemplateArn?: string;
  LensAlias?: string;
  Answer?: ReviewTemplateAnswer;
}
export interface UpdateReviewTemplateInput {
  TemplateArn: string;
  TemplateName?: string;
  Description?: string;
  Notes?: string;
  LensesToAssociate?: Array<string>;
  LensesToDisassociate?: Array<string>;
}
export interface UpdateReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
  LensNotes?: string;
  PillarNotes?: Record<string, string>;
}
export interface UpdateReviewTemplateLensReviewOutput {
  TemplateArn?: string;
  LensReview?: ReviewTemplateLensReview;
}
export interface UpdateReviewTemplateOutput {
  ReviewTemplate?: ReviewTemplate;
}
export interface UpdateShareInvitationInput {
  ShareInvitationId: string;
  ShareInvitationAction: ShareInvitationAction;
}
export interface UpdateShareInvitationOutput {
  ShareInvitation?: ShareInvitation;
}
export interface UpdateWorkloadInput {
  WorkloadId: string;
  WorkloadName?: string;
  Description?: string;
  Environment?: WorkloadEnvironment;
  AccountIds?: Array<string>;
  AwsRegions?: Array<string>;
  NonAwsRegions?: Array<string>;
  PillarPriorities?: Array<string>;
  ArchitecturalDesign?: string;
  ReviewOwner?: string;
  IsReviewOwnerUpdateAcknowledged?: boolean;
  IndustryType?: string;
  Industry?: string;
  Notes?: string;
  ImprovementStatus?: WorkloadImprovementStatus;
  DiscoveryConfig?: WorkloadDiscoveryConfig;
  Applications?: Array<string>;
  JiraConfiguration?: WorkloadJiraConfigurationInput;
}
export interface UpdateWorkloadOutput {
  Workload?: Workload;
}
export interface UpdateWorkloadShareInput {
  ShareId: string;
  WorkloadId: string;
  PermissionType: PermissionType;
}
export interface UpdateWorkloadShareOutput {
  WorkloadId?: string;
  WorkloadShare?: WorkloadShare;
}
export interface UpgradeLensReviewInput {
  WorkloadId: string;
  LensAlias: string;
  MilestoneName: string;
  ClientRequestToken?: string;
}
export interface UpgradeProfileVersionInput {
  WorkloadId: string;
  ProfileArn: string;
  MilestoneName?: string;
  ClientRequestToken?: string;
}
export interface UpgradeReviewTemplateLensReviewInput {
  TemplateArn: string;
  LensAlias: string;
  ClientRequestToken?: string;
}
export type Urls = Array<ChoiceContent>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
  readonly Fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionFieldName = string;

export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export interface VersionDifferences {
  PillarDifferences?: Array<PillarDifference>;
}
export interface Workload {
  WorkloadId?: string;
  WorkloadArn?: string;
  WorkloadName?: string;
  Description?: string;
  Environment?: WorkloadEnvironment;
  UpdatedAt?: Date | string;
  AccountIds?: Array<string>;
  AwsRegions?: Array<string>;
  NonAwsRegions?: Array<string>;
  ArchitecturalDesign?: string;
  ReviewOwner?: string;
  ReviewRestrictionDate?: Date | string;
  IsReviewOwnerUpdateAcknowledged?: boolean;
  IndustryType?: string;
  Industry?: string;
  Notes?: string;
  ImprovementStatus?: WorkloadImprovementStatus;
  RiskCounts?: Record<Risk, number>;
  PillarPriorities?: Array<string>;
  Lenses?: Array<string>;
  Owner?: string;
  ShareInvitationId?: string;
  Tags?: Record<string, string>;
  DiscoveryConfig?: WorkloadDiscoveryConfig;
  Applications?: Array<string>;
  Profiles?: Array<WorkloadProfile>;
  PrioritizedRiskCounts?: Record<Risk, number>;
  JiraConfiguration?: WorkloadJiraConfigurationOutput;
}
export type WorkloadAccountIds = Array<string>;
export type WorkloadApplications = Array<string>;
export type WorkloadArchitecturalDesign = string;

export type WorkloadArn = string;

export type WorkloadAwsRegions = Array<string>;
export type WorkloadDescription = string;

export interface WorkloadDiscoveryConfig {
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus;
  WorkloadResourceDefinition?: Array<DefinitionType>;
}
export type WorkloadEnvironment = "PRODUCTION" | "PREPRODUCTION";
export type WorkloadId = string;

export type WorkloadImprovementStatus =
  | "NOT_APPLICABLE"
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "RISK_ACKNOWLEDGED";
export type WorkloadIndustry = string;

export type WorkloadIndustryType = string;

export type WorkloadIssueManagementStatus = "ENABLED" | "DISABLED" | "INHERIT";
export interface WorkloadJiraConfigurationInput {
  IssueManagementStatus?: WorkloadIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
}
export interface WorkloadJiraConfigurationOutput {
  IssueManagementStatus?: WorkloadIssueManagementStatus;
  IssueManagementType?: IssueManagementType;
  JiraProjectKey?: string;
  StatusMessage?: string;
}
export type WorkloadLenses = Array<string>;
export type WorkloadName = string;

export type WorkloadNamePrefix = string;

export type WorkloadNonAwsRegion = string;

export type WorkloadNonAwsRegions = Array<string>;
export type WorkloadPillarPriorities = Array<string>;
export interface WorkloadProfile {
  ProfileArn?: string;
  ProfileVersion?: string;
}
export type WorkloadProfileArns = Array<string>;
export type WorkloadProfiles = Array<WorkloadProfile>;
export type WorkloadResourceDefinition = Array<DefinitionType>;
export type WorkloadReviewOwner = string;

export interface WorkloadShare {
  ShareId?: string;
  SharedBy?: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  Status?: ShareStatus;
  WorkloadName?: string;
  WorkloadId?: string;
}
export type WorkloadShareSummaries = Array<WorkloadShareSummary>;
export interface WorkloadShareSummary {
  ShareId?: string;
  SharedWith?: string;
  PermissionType?: PermissionType;
  Status?: ShareStatus;
  StatusMessage?: string;
}
export type WorkloadSummaries = Array<WorkloadSummary>;
export interface WorkloadSummary {
  WorkloadId?: string;
  WorkloadArn?: string;
  WorkloadName?: string;
  Owner?: string;
  UpdatedAt?: Date | string;
  Lenses?: Array<string>;
  RiskCounts?: Record<Risk, number>;
  ImprovementStatus?: WorkloadImprovementStatus;
  Profiles?: Array<WorkloadProfile>;
  PrioritizedRiskCounts?: Record<Risk, number>;
}
export declare namespace AssociateLenses {
  export type Input = AssociateLensesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateProfiles {
  export type Input = AssociateProfilesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLensShare {
  export type Input = CreateLensShareInput;
  export type Output = CreateLensShareOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLensVersion {
  export type Input = CreateLensVersionInput;
  export type Output = CreateLensVersionOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMilestone {
  export type Input = CreateMilestoneInput;
  export type Output = CreateMilestoneOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProfile {
  export type Input = CreateProfileInput;
  export type Output = CreateProfileOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProfileShare {
  export type Input = CreateProfileShareInput;
  export type Output = CreateProfileShareOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateReviewTemplate {
  export type Input = CreateReviewTemplateInput;
  export type Output = CreateReviewTemplateOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTemplateShare {
  export type Input = CreateTemplateShareInput;
  export type Output = CreateTemplateShareOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkload {
  export type Input = CreateWorkloadInput;
  export type Output = CreateWorkloadOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkloadShare {
  export type Input = CreateWorkloadShareInput;
  export type Output = CreateWorkloadShareOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLens {
  export type Input = DeleteLensInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLensShare {
  export type Input = DeleteLensShareInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProfile {
  export type Input = DeleteProfileInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProfileShare {
  export type Input = DeleteProfileShareInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteReviewTemplate {
  export type Input = DeleteReviewTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTemplateShare {
  export type Input = DeleteTemplateShareInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkload {
  export type Input = DeleteWorkloadInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkloadShare {
  export type Input = DeleteWorkloadShareInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateLenses {
  export type Input = DisassociateLensesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateProfiles {
  export type Input = DisassociateProfilesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExportLens {
  export type Input = ExportLensInput;
  export type Output = ExportLensOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAnswer {
  export type Input = GetAnswerInput;
  export type Output = GetAnswerOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConsolidatedReport {
  export type Input = GetConsolidatedReportInput;
  export type Output = GetConsolidatedReportOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGlobalSettings {
  export type Input = {};
  export type Output = GetGlobalSettingsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLens {
  export type Input = GetLensInput;
  export type Output = GetLensOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLensReview {
  export type Input = GetLensReviewInput;
  export type Output = GetLensReviewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLensReviewReport {
  export type Input = GetLensReviewReportInput;
  export type Output = GetLensReviewReportOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLensVersionDifference {
  export type Input = GetLensVersionDifferenceInput;
  export type Output = GetLensVersionDifferenceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMilestone {
  export type Input = GetMilestoneInput;
  export type Output = GetMilestoneOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProfile {
  export type Input = GetProfileInput;
  export type Output = GetProfileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProfileTemplate {
  export type Input = GetProfileTemplateInput;
  export type Output = GetProfileTemplateOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReviewTemplate {
  export type Input = GetReviewTemplateInput;
  export type Output = GetReviewTemplateOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReviewTemplateAnswer {
  export type Input = GetReviewTemplateAnswerInput;
  export type Output = GetReviewTemplateAnswerOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReviewTemplateLensReview {
  export type Input = GetReviewTemplateLensReviewInput;
  export type Output = GetReviewTemplateLensReviewOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkload {
  export type Input = GetWorkloadInput;
  export type Output = GetWorkloadOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportLens {
  export type Input = ImportLensInput;
  export type Output = ImportLensOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnswers {
  export type Input = ListAnswersInput;
  export type Output = ListAnswersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCheckDetails {
  export type Input = ListCheckDetailsInput;
  export type Output = ListCheckDetailsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCheckSummaries {
  export type Input = ListCheckSummariesInput;
  export type Output = ListCheckSummariesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLenses {
  export type Input = ListLensesInput;
  export type Output = ListLensesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLensReviewImprovements {
  export type Input = ListLensReviewImprovementsInput;
  export type Output = ListLensReviewImprovementsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLensReviews {
  export type Input = ListLensReviewsInput;
  export type Output = ListLensReviewsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLensShares {
  export type Input = ListLensSharesInput;
  export type Output = ListLensSharesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMilestones {
  export type Input = ListMilestonesInput;
  export type Output = ListMilestonesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotifications {
  export type Input = ListNotificationsInput;
  export type Output = ListNotificationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfileNotifications {
  export type Input = ListProfileNotificationsInput;
  export type Output = ListProfileNotificationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfiles {
  export type Input = ListProfilesInput;
  export type Output = ListProfilesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfileShares {
  export type Input = ListProfileSharesInput;
  export type Output = ListProfileSharesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReviewTemplateAnswers {
  export type Input = ListReviewTemplateAnswersInput;
  export type Output = ListReviewTemplateAnswersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReviewTemplates {
  export type Input = ListReviewTemplatesInput;
  export type Output = ListReviewTemplatesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListShareInvitations {
  export type Input = ListShareInvitationsInput;
  export type Output = ListShareInvitationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTemplateShares {
  export type Input = ListTemplateSharesInput;
  export type Output = ListTemplateSharesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkloads {
  export type Input = ListWorkloadsInput;
  export type Output = ListWorkloadsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkloadShares {
  export type Input = ListWorkloadSharesInput;
  export type Output = ListWorkloadSharesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateAnswer {
  export type Input = UpdateAnswerInput;
  export type Output = UpdateAnswerOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGlobalSettings {
  export type Input = UpdateGlobalSettingsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIntegration {
  export type Input = UpdateIntegrationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLensReview {
  export type Input = UpdateLensReviewInput;
  export type Output = UpdateLensReviewOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProfile {
  export type Input = UpdateProfileInput;
  export type Output = UpdateProfileOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReviewTemplate {
  export type Input = UpdateReviewTemplateInput;
  export type Output = UpdateReviewTemplateOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReviewTemplateAnswer {
  export type Input = UpdateReviewTemplateAnswerInput;
  export type Output = UpdateReviewTemplateAnswerOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReviewTemplateLensReview {
  export type Input = UpdateReviewTemplateLensReviewInput;
  export type Output = UpdateReviewTemplateLensReviewOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateShareInvitation {
  export type Input = UpdateShareInvitationInput;
  export type Output = UpdateShareInvitationOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkload {
  export type Input = UpdateWorkloadInput;
  export type Output = UpdateWorkloadOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkloadShare {
  export type Input = UpdateWorkloadShareInput;
  export type Output = UpdateWorkloadShareOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpgradeLensReview {
  export type Input = UpgradeLensReviewInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpgradeProfileVersion {
  export type Input = UpgradeProfileVersionInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpgradeReviewTemplateLensReview {
  export type Input = UpgradeReviewTemplateLensReviewInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
