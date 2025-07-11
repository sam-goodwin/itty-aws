import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSBastionControlPlaneServiceLambda {
  batchGetCollaborationAnalysisTemplate(
    input: BatchGetCollaborationAnalysisTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetSchema(
    input: BatchGetSchemaInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetSchemaAnalysisRule(
    input: BatchGetSchemaAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAnalysisTemplate(
    input: CreateAnalysisTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCollaboration(
    input: CreateCollaborationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConfiguredAudienceModelAssociation(
    input: CreateConfiguredAudienceModelAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConfiguredTable(
    input: CreateConfiguredTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConfiguredTableAnalysisRule(
    input: CreateConfiguredTableAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConfiguredTableAssociation(
    input: CreateConfiguredTableAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createConfiguredTableAssociationAnalysisRule(
    input: CreateConfiguredTableAssociationAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createIdMappingTable(
    input: CreateIdMappingTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createIdNamespaceAssociation(
    input: CreateIdNamespaceAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createMembership(
    input: CreateMembershipInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPrivacyBudgetTemplate(
    input: CreatePrivacyBudgetTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAnalysisTemplate(
    input: DeleteAnalysisTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCollaboration(
    input: DeleteCollaborationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConfiguredAudienceModelAssociation(
    input: DeleteConfiguredAudienceModelAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConfiguredTable(
    input: DeleteConfiguredTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConfiguredTableAnalysisRule(
    input: DeleteConfiguredTableAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConfiguredTableAssociation(
    input: DeleteConfiguredTableAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteConfiguredTableAssociationAnalysisRule(
    input: DeleteConfiguredTableAssociationAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteIdMappingTable(
    input: DeleteIdMappingTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteIdNamespaceAssociation(
    input: DeleteIdNamespaceAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteMember(
    input: DeleteMemberInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteMembership(
    input: DeleteMembershipInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePrivacyBudgetTemplate(
    input: DeletePrivacyBudgetTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAnalysisTemplate(
    input: GetAnalysisTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCollaboration(
    input: GetCollaborationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCollaborationAnalysisTemplate(
    input: GetCollaborationAnalysisTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCollaborationConfiguredAudienceModelAssociation(
    input: GetCollaborationConfiguredAudienceModelAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCollaborationIdNamespaceAssociation(
    input: GetCollaborationIdNamespaceAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCollaborationPrivacyBudgetTemplate(
    input: GetCollaborationPrivacyBudgetTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConfiguredAudienceModelAssociation(
    input: GetConfiguredAudienceModelAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConfiguredTable(
    input: GetConfiguredTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConfiguredTableAnalysisRule(
    input: GetConfiguredTableAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConfiguredTableAssociation(
    input: GetConfiguredTableAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConfiguredTableAssociationAnalysisRule(
    input: GetConfiguredTableAssociationAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getIdMappingTable(
    input: GetIdMappingTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getIdNamespaceAssociation(
    input: GetIdNamespaceAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMembership(
    input: GetMembershipInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPrivacyBudgetTemplate(
    input: GetPrivacyBudgetTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getProtectedJob(
    input: GetProtectedJobInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getProtectedQuery(
    input: GetProtectedQueryInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSchema(
    input: GetSchemaInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSchemaAnalysisRule(
    input: GetSchemaAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAnalysisTemplates(
    input: ListAnalysisTemplatesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCollaborationAnalysisTemplates(
    input: ListCollaborationAnalysisTemplatesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCollaborationConfiguredAudienceModelAssociations(
    input: ListCollaborationConfiguredAudienceModelAssociationsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCollaborationIdNamespaceAssociations(
    input: ListCollaborationIdNamespaceAssociationsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCollaborationPrivacyBudgetTemplates(
    input: ListCollaborationPrivacyBudgetTemplatesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCollaborationPrivacyBudgets(
    input: ListCollaborationPrivacyBudgetsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCollaborations(
    input: ListCollaborationsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listConfiguredAudienceModelAssociations(
    input: ListConfiguredAudienceModelAssociationsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listConfiguredTableAssociations(
    input: ListConfiguredTableAssociationsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listConfiguredTables(
    input: ListConfiguredTablesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listIdMappingTables(
    input: ListIdMappingTablesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listIdNamespaceAssociations(
    input: ListIdNamespaceAssociationsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listMembers(
    input: ListMembersInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listMemberships(
    input: ListMembershipsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPrivacyBudgetTemplates(
    input: ListPrivacyBudgetTemplatesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPrivacyBudgets(
    input: ListPrivacyBudgetsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listProtectedJobs(
    input: ListProtectedJobsInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listProtectedQueries(
    input: ListProtectedQueriesInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSchemas(
    input: ListSchemasInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  populateIdMappingTable(
    input: PopulateIdMappingTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  previewPrivacyImpact(
    input: PreviewPrivacyImpactInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startProtectedJob(
    input: StartProtectedJobInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startProtectedQuery(
    input: StartProtectedQueryInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateAnalysisTemplate(
    input: UpdateAnalysisTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCollaboration(
    input: UpdateCollaborationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConfiguredAudienceModelAssociation(
    input: UpdateConfiguredAudienceModelAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConfiguredTable(
    input: UpdateConfiguredTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConfiguredTableAnalysisRule(
    input: UpdateConfiguredTableAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConfiguredTableAssociation(
    input: UpdateConfiguredTableAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConfiguredTableAssociationAnalysisRule(
    input: UpdateConfiguredTableAssociationAnalysisRuleInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateIdMappingTable(
    input: UpdateIdMappingTableInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateIdNamespaceAssociation(
    input: UpdateIdNamespaceAssociationInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateMembership(
    input: UpdateMembershipInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePrivacyBudgetTemplate(
    input: UpdatePrivacyBudgetTemplateInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateProtectedJob(
    input: UpdateProtectedJobInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateProtectedQuery(
    input: UpdateProtectedQueryInput,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Cleanrooms = AWSBastionControlPlaneServiceLambda;

export interface AccessDeniedException {
}
export type AccessDeniedExceptionReason = string;

export type AccountId = string;

export type AdditionalAnalyses = never;
export type AdditionalAnalysesResourceArn = string;

export interface AggregateColumn {
}
export type AggregateColumnList = Array<unknown>;
export type AggregateFunctionName = string;

export interface AggregationConstraint {
}
export type AggregationConstraints = Array<unknown>;
export type AggregationType = string;

export type AllowedAdditionalAnalyses = Array<unknown>;
export type AllowedAnalysesList = Array<unknown>;
export type AllowedAnalysisProviderList = Array<unknown>;
export type AllowedColumnList = Array<unknown>;
export type AllowedResultReceivers = Array<unknown>;
export type AnalysisFormat = never;
export type AnalysisMethod = never;
export interface AnalysisParameter {
}
export type AnalysisParameterList = Array<unknown>;
export interface AnalysisRule {
}
export interface AnalysisRuleAggregation {
}
export type AnalysisRuleColumnList = Array<unknown>;
export type AnalysisRuleColumnName = string;

export type AnalysisRuleColumnNameList = Array<unknown>;
export interface AnalysisRuleCustom {
}
export interface AnalysisRuleIdMappingTable {
}
export interface AnalysisRuleList {
}
export type AnalysisRulePolicy = never;
export type AnalysisRulePolicyV1 = never;
export type AnalysisRuleType = never;
export type AnalysisRuleTypeList = Array<unknown>;
export interface AnalysisSchema {
}
export type AnalysisSource = never;
export type AnalysisSourceMetadata = never;
export interface AnalysisTemplate {
}
export type AnalysisTemplateArn = string;

export type AnalysisTemplateArnList = Array<unknown>;
export type AnalysisTemplateArnOrQueryWildcard = string;

export interface AnalysisTemplateArtifact {
}
export type AnalysisTemplateArtifactList = Array<unknown>;
export interface AnalysisTemplateArtifactMetadata {
}
export interface AnalysisTemplateArtifacts {
}
export type AnalysisTemplateIdentifier = string;

export interface AnalysisTemplateSummary {
}
export type AnalysisTemplateSummaryList = Array<unknown>;
export type AnalysisTemplateText = string;

export type AnalysisTemplateValidationStatus = never;
export interface AnalysisTemplateValidationStatusDetail {
}
export type AnalysisTemplateValidationStatusDetailList = Array<unknown>;
export interface AnalysisTemplateValidationStatusReason {
}
export type AnalysisTemplateValidationStatusReasonList = Array<unknown>;
export type AnalysisTemplateValidationType = never;
export type AnalysisType = never;
export type AnalyticsEngine = never;
export type AthenaDatabaseName = string;

export type AthenaOutputLocation = string;

export type AthenaTableName = string;

export interface AthenaTableReference {
}
export type AthenaWorkGroup = string;

export interface BatchGetCollaborationAnalysisTemplateError {
}
export type BatchGetCollaborationAnalysisTemplateErrorList = Array<unknown>;
export interface BatchGetCollaborationAnalysisTemplateInput {
}
export interface BatchGetCollaborationAnalysisTemplateOutput {
}
export interface BatchGetSchemaAnalysisRuleError {
}
export type BatchGetSchemaAnalysisRuleErrorList = Array<unknown>;
export interface BatchGetSchemaAnalysisRuleInput {
}
export interface BatchGetSchemaAnalysisRuleOutput {
}
export interface BatchGetSchemaError {
}
export type BatchGetSchemaErrorList = Array<unknown>;
export interface BatchGetSchemaInput {
}
export interface BatchGetSchemaOutput {
}
export interface BilledJobResourceUtilization {
}
export interface BilledResourceUtilization {
}
export type CleanroomsArn = string;

export interface Collaboration {
}
export interface CollaborationAnalysisTemplate {
}
export type CollaborationAnalysisTemplateList = Array<unknown>;
export interface CollaborationAnalysisTemplateSummary {
}
export type CollaborationAnalysisTemplateSummaryList = Array<unknown>;
export type CollaborationArn = string;

export interface CollaborationConfiguredAudienceModelAssociation {
}
export interface CollaborationConfiguredAudienceModelAssociationSummary {
}
export type CollaborationConfiguredAudienceModelAssociationSummaryList = Array<unknown>;
export type CollaborationDescription = string;

export type CollaborationIdentifier = string;

export interface CollaborationIdNamespaceAssociation {
}
export interface CollaborationIdNamespaceAssociationSummary {
}
export type CollaborationIdNamespaceAssociationSummaryList = Array<unknown>;
export type CollaborationJobLogStatus = never;
export type CollaborationName = string;

export interface CollaborationPrivacyBudgetSummary {
}
export type CollaborationPrivacyBudgetSummaryList = Array<unknown>;
export interface CollaborationPrivacyBudgetTemplate {
}
export interface CollaborationPrivacyBudgetTemplateSummary {
}
export type CollaborationPrivacyBudgetTemplateSummaryList = Array<unknown>;
export type CollaborationQueryLogStatus = never;
export interface CollaborationSummary {
}
export type CollaborationSummaryList = Array<unknown>;
export interface Column {
}
export type ColumnList = Array<unknown>;
export type ColumnName = string;

export type ColumnTypeString = string;

export type ComputeConfiguration = never;
export type ConfigurationDetails = never;
export type ConfiguredAudienceModelArn = string;

export interface ConfiguredAudienceModelAssociation {
}
export type ConfiguredAudienceModelAssociationArn = string;

export type ConfiguredAudienceModelAssociationIdentifier = string;

export type ConfiguredAudienceModelAssociationName = string;

export interface ConfiguredAudienceModelAssociationSummary {
}
export type ConfiguredAudienceModelAssociationSummaryList = Array<unknown>;
export interface ConfiguredTable {
}
export interface ConfiguredTableAnalysisRule {
}
export type ConfiguredTableAnalysisRulePolicy = never;
export type ConfiguredTableAnalysisRulePolicyV1 = never;
export type ConfiguredTableAnalysisRuleType = never;
export type ConfiguredTableAnalysisRuleTypeList = Array<unknown>;
export type ConfiguredTableArn = string;

export interface ConfiguredTableAssociation {
}
export interface ConfiguredTableAssociationAnalysisRule {
}
export interface ConfiguredTableAssociationAnalysisRuleAggregation {
}
export interface ConfiguredTableAssociationAnalysisRuleCustom {
}
export interface ConfiguredTableAssociationAnalysisRuleList {
}
export type ConfiguredTableAssociationAnalysisRulePolicy = never;
export type ConfiguredTableAssociationAnalysisRulePolicyV1 = never;
export type ConfiguredTableAssociationAnalysisRuleType = never;
export type ConfiguredTableAssociationAnalysisRuleTypeList = Array<unknown>;
export type ConfiguredTableAssociationArn = string;

export type ConfiguredTableAssociationIdentifier = string;

export interface ConfiguredTableAssociationSummary {
}
export type ConfiguredTableAssociationSummaryList = Array<unknown>;
export type ConfiguredTableIdentifier = string;

export interface ConfiguredTableSummary {
}
export type ConfiguredTableSummaryList = Array<unknown>;
export interface ConflictException {
}
export type ConflictExceptionReason = string;

export type ConsolidatedPolicy = never;
export interface ConsolidatedPolicyAggregation {
}
export interface ConsolidatedPolicyCustom {
}
export interface ConsolidatedPolicyList {
}
export type ConsolidatedPolicyV1 = never;
export interface CreateAnalysisTemplateInput {
}
export interface CreateAnalysisTemplateOutput {
}
export interface CreateCollaborationInput {
}
export interface CreateCollaborationOutput {
}
export interface CreateConfiguredAudienceModelAssociationInput {
}
export interface CreateConfiguredAudienceModelAssociationOutput {
}
export interface CreateConfiguredTableAnalysisRuleInput {
}
export interface CreateConfiguredTableAnalysisRuleOutput {
}
export interface CreateConfiguredTableAssociationAnalysisRuleInput {
}
export interface CreateConfiguredTableAssociationAnalysisRuleOutput {
}
export interface CreateConfiguredTableAssociationInput {
}
export interface CreateConfiguredTableAssociationOutput {
}
export interface CreateConfiguredTableInput {
}
export interface CreateConfiguredTableOutput {
}
export interface CreateIdMappingTableInput {
}
export interface CreateIdMappingTableOutput {
}
export interface CreateIdNamespaceAssociationInput {
}
export interface CreateIdNamespaceAssociationOutput {
}
export interface CreateMembershipInput {
}
export interface CreateMembershipOutput {
}
export interface CreatePrivacyBudgetTemplateInput {
}
export interface CreatePrivacyBudgetTemplateOutput {
}
export type CustomMLMemberAbilities = Array<unknown>;
export type CustomMLMemberAbility = never;
export interface DataEncryptionMetadata {
}
export interface DeleteAnalysisTemplateInput {
}
export interface DeleteAnalysisTemplateOutput {
}
export interface DeleteCollaborationInput {
}
export interface DeleteCollaborationOutput {
}
export interface DeleteConfiguredAudienceModelAssociationInput {
}
export interface DeleteConfiguredAudienceModelAssociationOutput {
}
export interface DeleteConfiguredTableAnalysisRuleInput {
}
export interface DeleteConfiguredTableAnalysisRuleOutput {
}
export interface DeleteConfiguredTableAssociationAnalysisRuleInput {
}
export interface DeleteConfiguredTableAssociationAnalysisRuleOutput {
}
export interface DeleteConfiguredTableAssociationInput {
}
export interface DeleteConfiguredTableAssociationOutput {
}
export interface DeleteConfiguredTableInput {
}
export interface DeleteConfiguredTableOutput {
}
export interface DeleteIdMappingTableInput {
}
export interface DeleteIdMappingTableOutput {
}
export interface DeleteIdNamespaceAssociationInput {
}
export interface DeleteIdNamespaceAssociationOutput {
}
export interface DeleteMemberInput {
}
export interface DeleteMemberOutput {
}
export interface DeleteMembershipInput {
}
export interface DeleteMembershipOutput {
}
export interface DeletePrivacyBudgetTemplateInput {
}
export interface DeletePrivacyBudgetTemplateOutput {
}
export type DifferentialPrivacyAggregationExpression = string;

export type DifferentialPrivacyAggregationType = never;
export interface DifferentialPrivacyColumn {
}
export type DifferentialPrivacyColumnList = Array<unknown>;
export interface DifferentialPrivacyConfiguration {
}
export interface DifferentialPrivacyParameters {
}
export interface DifferentialPrivacyPreviewAggregation {
}
export type DifferentialPrivacyPreviewAggregationList = Array<unknown>;
export interface DifferentialPrivacyPreviewParametersInput {
}
export interface DifferentialPrivacyPrivacyBudget {
}
export interface DifferentialPrivacyPrivacyBudgetAggregation {
}
export type DifferentialPrivacyPrivacyBudgetAggregationList = Array<unknown>;
export interface DifferentialPrivacyPrivacyImpact {
}
export interface DifferentialPrivacySensitivityParameters {
}
export type DifferentialPrivacySensitivityParametersList = Array<unknown>;
export interface DifferentialPrivacyTemplateParametersInput {
}
export interface DifferentialPrivacyTemplateParametersOutput {
}
export interface DifferentialPrivacyTemplateUpdateParameters {
}
export interface DirectAnalysisConfigurationDetails {
}
export type DisplayName = string;

export type Epsilon = number;

export type FilterableMemberStatus = string;

export type GenericResourceName = string;

export interface GetAnalysisTemplateInput {
}
export interface GetAnalysisTemplateOutput {
}
export interface GetCollaborationAnalysisTemplateInput {
}
export interface GetCollaborationAnalysisTemplateOutput {
}
export interface GetCollaborationConfiguredAudienceModelAssociationInput {
}
export interface GetCollaborationConfiguredAudienceModelAssociationOutput {
}
export interface GetCollaborationIdNamespaceAssociationInput {
}
export interface GetCollaborationIdNamespaceAssociationOutput {
}
export interface GetCollaborationInput {
}
export interface GetCollaborationOutput {
}
export interface GetCollaborationPrivacyBudgetTemplateInput {
}
export interface GetCollaborationPrivacyBudgetTemplateOutput {
}
export interface GetConfiguredAudienceModelAssociationInput {
}
export interface GetConfiguredAudienceModelAssociationOutput {
}
export interface GetConfiguredTableAnalysisRuleInput {
}
export interface GetConfiguredTableAnalysisRuleOutput {
}
export interface GetConfiguredTableAssociationAnalysisRuleInput {
}
export interface GetConfiguredTableAssociationAnalysisRuleOutput {
}
export interface GetConfiguredTableAssociationInput {
}
export interface GetConfiguredTableAssociationOutput {
}
export interface GetConfiguredTableInput {
}
export interface GetConfiguredTableOutput {
}
export interface GetIdMappingTableInput {
}
export interface GetIdMappingTableOutput {
}
export interface GetIdNamespaceAssociationInput {
}
export interface GetIdNamespaceAssociationOutput {
}
export interface GetMembershipInput {
}
export interface GetMembershipOutput {
}
export interface GetPrivacyBudgetTemplateInput {
}
export interface GetPrivacyBudgetTemplateOutput {
}
export interface GetProtectedJobInput {
}
export interface GetProtectedJobOutput {
}
export interface GetProtectedQueryInput {
}
export interface GetProtectedQueryOutput {
}
export interface GetSchemaAnalysisRuleInput {
}
export interface GetSchemaAnalysisRuleOutput {
}
export interface GetSchemaInput {
}
export interface GetSchemaOutput {
}
export type GlueDatabaseName = string;

export type GlueTableName = string;

export interface GlueTableReference {
}
export interface Hash {
}
export type HashList = Array<unknown>;
export interface IdMappingConfig {
}
export interface IdMappingTable {
}
export type IdMappingTableArn = string;

export type IdMappingTableInputReferenceArn = string;

export interface IdMappingTableInputReferenceConfig {
}
export interface IdMappingTableInputReferenceProperties {
}
export interface IdMappingTableInputSource {
}
export type IdMappingTableInputSourceList = Array<unknown>;
export interface IdMappingTableSchemaTypeProperties {
}
export interface IdMappingTableSummary {
}
export type IdMappingTableSummaryList = Array<unknown>;
export type IdMappingWorkflowsSupported = Array<unknown>;
export interface IdNamespaceAssociation {
}
export type IdNamespaceAssociationArn = string;

export type IdNamespaceAssociationIdentifier = string;

export type IdNamespaceAssociationInputReferenceArn = string;

export interface IdNamespaceAssociationInputReferenceConfig {
}
export interface IdNamespaceAssociationInputReferenceProperties {
}
export interface IdNamespaceAssociationInputReferencePropertiesSummary {
}
export interface IdNamespaceAssociationSummary {
}
export type IdNamespaceAssociationSummaryList = Array<unknown>;
export type IdNamespaceType = never;
export interface InternalServerException {
}
export interface JobComputePaymentConfig {
}
export type JoinOperator = string;

export type JoinOperatorsList = Array<unknown>;
export type JoinRequiredOption = string;

export type KeyPrefix = string;

export type KMSKeyArn = string;

export interface ListAnalysisTemplatesInput {
}
export interface ListAnalysisTemplatesOutput {
}
export interface ListCollaborationAnalysisTemplatesInput {
}
export interface ListCollaborationAnalysisTemplatesOutput {
}
export interface ListCollaborationConfiguredAudienceModelAssociationsInput {
}
export interface ListCollaborationConfiguredAudienceModelAssociationsOutput {
}
export interface ListCollaborationIdNamespaceAssociationsInput {
}
export interface ListCollaborationIdNamespaceAssociationsOutput {
}
export interface ListCollaborationPrivacyBudgetsInput {
}
export interface ListCollaborationPrivacyBudgetsOutput {
}
export interface ListCollaborationPrivacyBudgetTemplatesInput {
}
export interface ListCollaborationPrivacyBudgetTemplatesOutput {
}
export interface ListCollaborationsInput {
}
export interface ListCollaborationsOutput {
}
export interface ListConfiguredAudienceModelAssociationsInput {
}
export interface ListConfiguredAudienceModelAssociationsOutput {
}
export interface ListConfiguredTableAssociationsInput {
}
export interface ListConfiguredTableAssociationsOutput {
}
export interface ListConfiguredTablesInput {
}
export interface ListConfiguredTablesOutput {
}
export interface ListIdMappingTablesInput {
}
export interface ListIdMappingTablesOutput {
}
export interface ListIdNamespaceAssociationsInput {
}
export interface ListIdNamespaceAssociationsOutput {
}
export interface ListMembershipsInput {
}
export interface ListMembershipsOutput {
}
export interface ListMembersInput {
}
export interface ListMembersOutput {
}
export interface ListPrivacyBudgetsInput {
}
export interface ListPrivacyBudgetsOutput {
}
export interface ListPrivacyBudgetTemplatesInput {
}
export interface ListPrivacyBudgetTemplatesOutput {
}
export interface ListProtectedJobsInput {
}
export interface ListProtectedJobsOutput {
}
export interface ListProtectedQueriesInput {
}
export interface ListProtectedQueriesOutput {
}
export interface ListSchemasInput {
}
export interface ListSchemasOutput {
}
export interface ListTagsForResourceInput {
}
export interface ListTagsForResourceOutput {
}
export type MaxResults = number;

export type MemberAbilities = Array<unknown>;
export type MemberAbility = never;
export type MemberList = Array<unknown>;
export interface Membership {
}
export type MembershipArn = string;

export type MembershipIdentifier = string;

export interface MembershipJobComputePaymentConfig {
}
export type MembershipJobLogStatus = never;
export interface MembershipMLPaymentConfig {
}
export interface MembershipModelInferencePaymentConfig {
}
export interface MembershipModelTrainingPaymentConfig {
}
export interface MembershipPaymentConfiguration {
}
export type MembershipProtectedJobOutputConfiguration = never;
export interface MembershipProtectedJobResultConfiguration {
}
export type MembershipProtectedQueryOutputConfiguration = never;
export interface MembershipProtectedQueryResultConfiguration {
}
export interface MembershipQueryComputePaymentConfig {
}
export type MembershipQueryLogStatus = never;
export type MembershipStatus = string;

export interface MembershipSummary {
}
export type MembershipSummaryList = Array<unknown>;
export interface MemberSpecification {
}
export type MemberStatus = string;

export interface MemberSummary {
}
export type MemberSummaryList = Array<unknown>;
export interface MLMemberAbilities {
}
export interface MLPaymentConfig {
}
export interface ModelInferencePaymentConfig {
}
export interface ModelTrainingPaymentConfig {
}
export type PaginationToken = string;

export type ParameterMap = Record<string, unknown>;
export type ParameterName = string;

export type ParameterType = never;
export type ParameterValue = string;

export interface PaymentConfiguration {
}
export interface PopulateIdMappingTableInput {
}
export interface PopulateIdMappingTableOutput {
}
export interface PreviewPrivacyImpactInput {
}
export interface PreviewPrivacyImpactOutput {
}
export type PreviewPrivacyImpactParametersInput = never;
export type PrivacyBudget = never;
export interface PrivacyBudgetSummary {
}
export type PrivacyBudgetSummaryList = Array<unknown>;
export interface PrivacyBudgetTemplate {
}
export type PrivacyBudgetTemplateArn = string;

export type PrivacyBudgetTemplateAutoRefresh = never;
export type PrivacyBudgetTemplateIdentifier = string;

export type PrivacyBudgetTemplateParametersInput = never;
export type PrivacyBudgetTemplateParametersOutput = never;
export interface PrivacyBudgetTemplateSummary {
}
export type PrivacyBudgetTemplateSummaryList = Array<unknown>;
export type PrivacyBudgetTemplateUpdateParameters = never;
export type PrivacyBudgetType = never;
export type PrivacyImpact = never;
export interface ProtectedJob {
}
export type ProtectedJobAnalysisType = never;
export type ProtectedJobConfigurationDetails = never;
export interface ProtectedJobDirectAnalysisConfigurationDetails {
}
export interface ProtectedJobError {
}
export type ProtectedJobIdentifier = string;

export interface ProtectedJobMemberOutputConfigurationInput {
}
export interface ProtectedJobMemberOutputConfigurationOutput {
}
export type ProtectedJobMemberOutputList = Array<unknown>;
export type ProtectedJobOutput = never;
export type ProtectedJobOutputConfigurationInput = never;
export type ProtectedJobOutputConfigurationOutput = never;
export interface ProtectedJobParameters {
}
export type ProtectedJobReceiverAccountIds = Array<unknown>;
export interface ProtectedJobReceiverConfiguration {
}
export type ProtectedJobReceiverConfigurations = Array<unknown>;
export interface ProtectedJobResult {
}
export interface ProtectedJobResultConfigurationInput {
}
export interface ProtectedJobResultConfigurationOutput {
}
export interface ProtectedJobS3Output {
}
export interface ProtectedJobS3OutputConfigurationInput {
}
export interface ProtectedJobS3OutputConfigurationOutput {
}
export interface ProtectedJobSingleMemberOutput {
}
export interface ProtectedJobStatistics {
}
export type ProtectedJobStatus = never;
export interface ProtectedJobSummary {
}
export type ProtectedJobSummaryList = Array<unknown>;
export type ProtectedJobType = never;
export interface ProtectedQuery {
}
export interface ProtectedQueryDistributeOutput {
}
export interface ProtectedQueryDistributeOutputConfiguration {
}
export type ProtectedQueryDistributeOutputConfigurationLocation = never;
export type ProtectedQueryDistributeOutputConfigurationLocations = Array<unknown>;
export interface ProtectedQueryError {
}
export type ProtectedQueryIdentifier = string;

export interface ProtectedQueryMemberOutputConfiguration {
}
export type ProtectedQueryMemberOutputList = Array<unknown>;
export type ProtectedQueryOutput = never;
export type ProtectedQueryOutputConfiguration = never;
export interface ProtectedQueryResult {
}
export interface ProtectedQueryResultConfiguration {
}
export interface ProtectedQueryS3Output {
}
export interface ProtectedQueryS3OutputConfiguration {
}
export interface ProtectedQuerySingleMemberOutput {
}
export interface ProtectedQuerySQLParameters {
}
export interface ProtectedQueryStatistics {
}
export type ProtectedQueryStatus = string;

export interface ProtectedQuerySummary {
}
export type ProtectedQuerySummaryList = Array<unknown>;
export type ProtectedQueryType = string;

export interface QueryComputePaymentConfig {
}
export type QueryConstraint = never;
export type QueryConstraintList = Array<unknown>;
export interface QueryConstraintRequireOverlap {
}
export type QueryTables = Array<unknown>;
export type ReceiverAccountIds = Array<unknown>;
export interface ReceiverConfiguration {
}
export type ReceiverConfigurationsList = Array<unknown>;
export type ResourceAlias = string;

export type ResourceDescription = string;

export interface ResourceNotFoundException {
}
export type ResourceType = string;

export type ResultFormat = string;

export type RoleArn = string;

export interface S3Location {
}
export type ScalarFunctions = string;

export type ScalarFunctionsList = Array<unknown>;
export interface Schema {
}
export type SchemaAnalysisRuleList = Array<unknown>;
export interface SchemaAnalysisRuleRequest {
}
export type SchemaAnalysisRuleRequestList = Array<unknown>;
export type SchemaConfiguration = never;
export type SchemaConfigurationList = Array<unknown>;
export type SchemaList = Array<unknown>;
export type SchemaStatus = never;
export interface SchemaStatusDetail {
}
export type SchemaStatusDetailList = Array<unknown>;
export interface SchemaStatusReason {
}
export type SchemaStatusReasonCode = never;
export type SchemaStatusReasonList = Array<unknown>;
export interface SchemaSummary {
}
export type SchemaSummaryList = Array<unknown>;
export type SchemaType = never;
export type SchemaTypeProperties = never;
export type SecretsManagerArn = string;

export type SelectedAnalysisMethod = never;
export type SelectedAnalysisMethods = Array<unknown>;
export interface ServiceQuotaExceededException {
}
export type SnowflakeAccountIdentifier = string;

export type SnowflakeDatabaseName = string;

export type SnowflakeSchemaName = string;

export type SnowflakeTableName = string;

export interface SnowflakeTableReference {
}
export type SnowflakeTableSchema = never;
export type SnowflakeTableSchemaList = Array<unknown>;
export interface SnowflakeTableSchemaV1 {
}
export interface StartProtectedJobInput {
}
export interface StartProtectedJobOutput {
}
export interface StartProtectedQueryInput {
}
export interface StartProtectedQueryOutput {
}
export type TableAlias = string;

export type TableAliasList = Array<unknown>;
export type TableDescription = string;

export type TableReference = never;
export type TagKey = string;

export type TagKeys = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceInput {
}
export interface TagResourceOutput {
}
export type TagValue = string;

export type TargetProtectedJobStatus = never;
export type TargetProtectedQueryStatus = string;

export interface ThrottlingException {
}
export interface UntagResourceInput {
}
export interface UntagResourceOutput {
}
export interface UpdateAnalysisTemplateInput {
}
export interface UpdateAnalysisTemplateOutput {
}
export interface UpdateCollaborationInput {
}
export interface UpdateCollaborationOutput {
}
export interface UpdateConfiguredAudienceModelAssociationInput {
}
export interface UpdateConfiguredAudienceModelAssociationOutput {
}
export interface UpdateConfiguredTableAnalysisRuleInput {
}
export interface UpdateConfiguredTableAnalysisRuleOutput {
}
export interface UpdateConfiguredTableAssociationAnalysisRuleInput {
}
export interface UpdateConfiguredTableAssociationAnalysisRuleOutput {
}
export interface UpdateConfiguredTableAssociationInput {
}
export interface UpdateConfiguredTableAssociationOutput {
}
export interface UpdateConfiguredTableInput {
}
export interface UpdateConfiguredTableOutput {
}
export interface UpdateIdMappingTableInput {
}
export interface UpdateIdMappingTableOutput {
}
export interface UpdateIdNamespaceAssociationInput {
}
export interface UpdateIdNamespaceAssociationOutput {
}
export interface UpdateMembershipInput {
}
export interface UpdateMembershipOutput {
}
export interface UpdatePrivacyBudgetTemplateInput {
}
export interface UpdatePrivacyBudgetTemplateOutput {
}
export interface UpdateProtectedJobInput {
}
export interface UpdateProtectedJobOutput {
}
export interface UpdateProtectedQueryInput {
}
export interface UpdateProtectedQueryOutput {
}
export type UsersNoisePerQuery = number;

export type UUID = string;

export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = string;

export interface WorkerComputeConfiguration {
}
export type WorkerComputeType = never;
export declare namespace BatchGetCollaborationAnalysisTemplate {
  export type Input = BatchGetCollaborationAnalysisTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetSchema {
  export type Input = BatchGetSchemaInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetSchemaAnalysisRule {
  export type Input = BatchGetSchemaAnalysisRuleInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAnalysisTemplate {
  export type Input = CreateAnalysisTemplateInput;
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

export declare namespace CreateCollaboration {
  export type Input = CreateCollaborationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConfiguredAudienceModelAssociation {
  export type Input = CreateConfiguredAudienceModelAssociationInput;
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

export declare namespace CreateConfiguredTable {
  export type Input = CreateConfiguredTableInput;
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

export declare namespace CreateConfiguredTableAnalysisRule {
  export type Input = CreateConfiguredTableAnalysisRuleInput;
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

export declare namespace CreateConfiguredTableAssociation {
  export type Input = CreateConfiguredTableAssociationInput;
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

export declare namespace CreateConfiguredTableAssociationAnalysisRule {
  export type Input = CreateConfiguredTableAssociationAnalysisRuleInput;
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

export declare namespace CreateIdMappingTable {
  export type Input = CreateIdMappingTableInput;
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

export declare namespace CreateIdNamespaceAssociation {
  export type Input = CreateIdNamespaceAssociationInput;
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

export declare namespace CreateMembership {
  export type Input = CreateMembershipInput;
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

export declare namespace CreatePrivacyBudgetTemplate {
  export type Input = CreatePrivacyBudgetTemplateInput;
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

export declare namespace DeleteAnalysisTemplate {
  export type Input = DeleteAnalysisTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCollaboration {
  export type Input = DeleteCollaborationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfiguredAudienceModelAssociation {
  export type Input = DeleteConfiguredAudienceModelAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConfiguredTable {
  export type Input = DeleteConfiguredTableInput;
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

export declare namespace DeleteConfiguredTableAnalysisRule {
  export type Input = DeleteConfiguredTableAnalysisRuleInput;
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

export declare namespace DeleteConfiguredTableAssociation {
  export type Input = DeleteConfiguredTableAssociationInput;
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

export declare namespace DeleteConfiguredTableAssociationAnalysisRule {
  export type Input = DeleteConfiguredTableAssociationAnalysisRuleInput;
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

export declare namespace DeleteIdMappingTable {
  export type Input = DeleteIdMappingTableInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIdNamespaceAssociation {
  export type Input = DeleteIdNamespaceAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMember {
  export type Input = DeleteMemberInput;
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

export declare namespace DeleteMembership {
  export type Input = DeleteMembershipInput;
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

export declare namespace DeletePrivacyBudgetTemplate {
  export type Input = DeletePrivacyBudgetTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAnalysisTemplate {
  export type Input = GetAnalysisTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaboration {
  export type Input = GetCollaborationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaborationAnalysisTemplate {
  export type Input = GetCollaborationAnalysisTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaborationConfiguredAudienceModelAssociation {
  export type Input = GetCollaborationConfiguredAudienceModelAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaborationIdNamespaceAssociation {
  export type Input = GetCollaborationIdNamespaceAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCollaborationPrivacyBudgetTemplate {
  export type Input = GetCollaborationPrivacyBudgetTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredAudienceModelAssociation {
  export type Input = GetConfiguredAudienceModelAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredTable {
  export type Input = GetConfiguredTableInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredTableAnalysisRule {
  export type Input = GetConfiguredTableAnalysisRuleInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredTableAssociation {
  export type Input = GetConfiguredTableAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguredTableAssociationAnalysisRule {
  export type Input = GetConfiguredTableAssociationAnalysisRuleInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIdMappingTable {
  export type Input = GetIdMappingTableInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIdNamespaceAssociation {
  export type Input = GetIdNamespaceAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMembership {
  export type Input = GetMembershipInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPrivacyBudgetTemplate {
  export type Input = GetPrivacyBudgetTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProtectedJob {
  export type Input = GetProtectedJobInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProtectedQuery {
  export type Input = GetProtectedQueryInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSchema {
  export type Input = GetSchemaInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSchemaAnalysisRule {
  export type Input = GetSchemaAnalysisRuleInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAnalysisTemplates {
  export type Input = ListAnalysisTemplatesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationAnalysisTemplates {
  export type Input = ListCollaborationAnalysisTemplatesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationConfiguredAudienceModelAssociations {
  export type Input = ListCollaborationConfiguredAudienceModelAssociationsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationIdNamespaceAssociations {
  export type Input = ListCollaborationIdNamespaceAssociationsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationPrivacyBudgetTemplates {
  export type Input = ListCollaborationPrivacyBudgetTemplatesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborationPrivacyBudgets {
  export type Input = ListCollaborationPrivacyBudgetsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCollaborations {
  export type Input = ListCollaborationsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfiguredAudienceModelAssociations {
  export type Input = ListConfiguredAudienceModelAssociationsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfiguredTableAssociations {
  export type Input = ListConfiguredTableAssociationsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfiguredTables {
  export type Input = ListConfiguredTablesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIdMappingTables {
  export type Input = ListIdMappingTablesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIdNamespaceAssociations {
  export type Input = ListIdNamespaceAssociationsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMemberships {
  export type Input = ListMembershipsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPrivacyBudgetTemplates {
  export type Input = ListPrivacyBudgetTemplatesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPrivacyBudgets {
  export type Input = ListPrivacyBudgetsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProtectedJobs {
  export type Input = ListProtectedJobsInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProtectedQueries {
  export type Input = ListProtectedQueriesInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSchemas {
  export type Input = ListSchemasInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PopulateIdMappingTable {
  export type Input = PopulateIdMappingTableInput;
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

export declare namespace PreviewPrivacyImpact {
  export type Input = PreviewPrivacyImpactInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartProtectedJob {
  export type Input = StartProtectedJobInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartProtectedQuery {
  export type Input = StartProtectedQueryInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAnalysisTemplate {
  export type Input = UpdateAnalysisTemplateInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCollaboration {
  export type Input = UpdateCollaborationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConfiguredAudienceModelAssociation {
  export type Input = UpdateConfiguredAudienceModelAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConfiguredTable {
  export type Input = UpdateConfiguredTableInput;
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

export declare namespace UpdateConfiguredTableAnalysisRule {
  export type Input = UpdateConfiguredTableAnalysisRuleInput;
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

export declare namespace UpdateConfiguredTableAssociation {
  export type Input = UpdateConfiguredTableAssociationInput;
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

export declare namespace UpdateConfiguredTableAssociationAnalysisRule {
  export type Input = UpdateConfiguredTableAssociationAnalysisRuleInput;
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

export declare namespace UpdateIdMappingTable {
  export type Input = UpdateIdMappingTableInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIdNamespaceAssociation {
  export type Input = UpdateIdNamespaceAssociationInput;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMembership {
  export type Input = UpdateMembershipInput;
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

export declare namespace UpdatePrivacyBudgetTemplate {
  export type Input = UpdatePrivacyBudgetTemplateInput;
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

export declare namespace UpdateProtectedJob {
  export type Input = UpdateProtectedJobInput;
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

export declare namespace UpdateProtectedQuery {
  export type Input = UpdateProtectedQueryInput;
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

